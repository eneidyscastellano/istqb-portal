#!/usr/bin/env node
/** Extrae el razonamiento oficial por pregunta de los PDFs de respuestas. */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MAT = path.resolve(ROOT, '..', 'materiales');
const text = (file) => execFileSync('pdftotext', ['-layout', path.join(MAT, file), '-'], { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 });

const out = {};

// --- A-D: la tabla de respuestas empieza cada bloque con "<n> <letra> a) ..." ---
const tableFiles = {
  A: 'ISTQB_CTFL_v4.0_Sample-Exam-A-Answers_v1.7.pdf',
  B: 'ISTQB_CTFL_v4.0_Sample-Exam-B-Answers_v1.7.pdf',
  C: 'ISTQB_CTFL_v4.0_Sample-Exam-C-Answers_v1.6.pdf',
  D: 'ISTQB_CTFL_v4.0_Sample-Exam-D-Answers_v1.5.pdf'
};

const clean = (s) => s
  .replace(/\b(FL|AT)-\d+\.\d+\.\d+\s+K[1-4]\s+\d\b/g, ' ')
  .replace(/\b(FL|AT)-\d+\.\d+\.\d+\s+K[1-4]\b/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

for (const [model, file] of Object.entries(tableFiles)) {
  const raw = text(file);
  const answersAt = raw.search(/\nAnswers\s*\n/);
  const lines = (answersAt >= 0 ? raw.slice(answersAt) : raw).split('\n');
  const starts = [];
  lines.forEach((line, i) => {
    const m = line.match(/^\s{0,10}(\d{1,2})\s{2,}([a-e](?:,\s*[a-e])?)(?:\s{2,}(.*))?$/);
    if (!m) return;
    const n = Number(m[1]);
    if (n < 1 || n > 40) return;
    const third = (m[3] || '').trim();
    starts.push({ n, letters: m[2].replace(/\s+/g, ''), i, first: third });
  });

  const seen = new Set();
  for (let k = 0; k < starts.length; k += 1) {
    const s = starts[k];
    if (seen.has(s.n)) continue;
    const end = k + 1 < starts.length ? starts[k + 1].i : Math.min(lines.length, s.i + 45);
    const bodyText = [s.first, ...lines.slice(s.i + 1, end)]
      .filter((line) => !/^(Version \d|©|International Software|Certified Tester|Sample Exam|Question\s+Correct|Number\s+Answer|\(#\)|Answers\s*$)/.test(line.trim()))
      .join(' ');
    const body = clean(bodyText);
    out[`${model}-${String(s.n).padStart(3, '0')}`] = { letters: s.letters, rationale: body };
    seen.add(s.n);
  }
}

// --- S3/S4: bloque narrativo "X is correct." ---
for (const model of ['S3', 'S4']) {
  const file = model === 'S3' ? 'CTFL-4.0.1_Sample-Answers-3.pdf' : 'CTFL-4.0.1_Sample-Answers-4.pdf';
  const t = text(file);
  const blocks = [...t.matchAll(/\n {0,14}#?(\d{1,2})\.\s+([\s\S]*?)(?=\n {0,14}#?\d{1,2}\.\s+[A-Z¿]|$)/g)];
  for (const [, num, body] of blocks) {
    const n = Number(num);
    const id = `${model}-${String(n).padStart(3, '0')}`;
    if (n < 1 || n > 40 || out[id]) continue;
    const correct = body.match(/\n\s*([A-Ea-e])(?:,\s*([A-Ea-e]))?\s+is\s+(?!not\b)/);
    if (!correct) continue;
    const letters = [correct[1], correct[2]].filter(Boolean).join('').toLowerCase();
    const start = body.indexOf(correct[0]);
    const rationale = clean(body.slice(start)
      .replace(/\s*(FL|AT)-\d+\.\d+\.\d+\s*\(K[1-4]\)[\s\S]*$/, '')
      .replace(/Copyright ASTQB[\s\S]*$/, ''));
    out[id] = { letters, rationale };
  }
}

const missing = [];
for (const model of ['A', 'B', 'C', 'D', 'S3', 'S4']) {
  for (let n = 1; n <= 40; n += 1) {
    const id = `${model}-${String(n).padStart(3, '0')}`;
    if (!out[id] || out[id].rationale.length < 30) missing.push(id);
  }
}

fs.writeFileSync('/tmp/rationales.json', JSON.stringify(out, null, 2));
console.log('extraídas:', Object.keys(out).length);
console.log('faltan o muy cortas:', missing.join(', ') || 'ninguna');
for (const id of ['A-001', 'A-002', 'S3-033', 'S4-036']) {
  console.log(`\n${id} (${out[id]?.letters}):`, out[id]?.rationale.slice(0, 420));
}
