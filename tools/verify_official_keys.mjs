#!/usr/bin/env node
/**
 * Contrasta la clave del banco contra las claves oficiales de los PDFs.
 * Fuente: istqb/materiales/*Answers*.pdf
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MAT = path.resolve(ROOT, '..', 'materiales');

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/questions.js'), 'utf8'), sandbox);
const data = sandbox.window.ISTQB_DATA;
const byModel = {};
for (const chapter of data.chapters) {
  for (const q of chapter.questions) {
    const [model, num] = q.id.split('-');
    byModel[model] ||= [];
    byModel[model].push({ ...q, num: Number(num) });
  }
}

const pdfPath = (name) => path.join(MAT, name);
const text = (file) => execFileSync('pdftotext', ['-layout', pdfPath(file), '-'], { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 });

// --- Sets A-D: tabla "Answer Key" con LO y K-level ---
const TABLE_SETS = {
  A: 'ISTQB_CTFL_v4.0_Sample-Exam-A-Answers_v1.7.pdf',
  B: 'ISTQB_CTFL_v4.0_Sample-Exam-B-Answers_v1.7.pdf',
  C: 'ISTQB_CTFL_v4.0_Sample-Exam-C-Answers_v1.6.pdf',
  D: 'ISTQB_CTFL_v4.0_Sample-Exam-D-Answers_v1.5.pdf',
};

function parseTableKey(file) {
  const t = text(file);
  const re = /(\d{1,2})\s+([a-e](?:,\s*[a-e])?)\s+(FL-\d+\.\d+\.\d+)\s+(K[1-4])\s+1/g;
  const out = {};
  for (const [, num, letters, lo, level] of t.matchAll(re)) {
    const n = Number(num);
    if (n >= 1 && n <= 40 && !out[n]) out[n] = { letters: letters.replace(/\s+/g, ''), lo, level };
  }
  return out;
}

// --- Sets 3 y 4: bloque por pregunta con "X is correct." y "FL-x.y.z (K2)" ---
function parseNarrativeKey(file) {
  const t = text(file);
  const out = {};
  // Encabezados de pregunta: "   7.         You are working..." o "   10. When coding..."
  const blocks = [...t.matchAll(/\n {0,14}#?(\d{1,2})\.\s+([\s\S]*?)(?=\n {0,14}#?\d{1,2}\.\s+[A-Z¿]|$)/g)];
  for (const [, num, body] of blocks) {
    const n = Number(num);
    if (n < 1 || n > 40 || out[n]) continue;
    const correct = body.match(/\n\s*([A-Ea-e])(?:,\s*([A-Ea-e]))?\s+is\s+(?!not\b)/);
    if (!correct) continue;
    const letters = [correct[1], correct[2]].filter(Boolean).join('').toLowerCase();
    const lo = body.match(/(FL-\d+\.\d+\.\d+)\s+\((K[1-4])\)/);
    out[n] = { letters, lo: lo ? lo[1] : null, level: lo ? lo[2] : null };
  }
  return out;
}

const sets = {};
for (const [model, file] of Object.entries(TABLE_SETS)) sets[model] = { source: file, key: parseTableKey(file) };
for (const model of ['S3', 'S4']) {
  const file = model === 'S3' ? 'CTFL-4.0.1_Sample-Answers-3.pdf' : 'CTFL-4.0.1_Sample-Answers-4.pdf';
  sets[model] = { source: file, key: parseNarrativeKey(file) };
}

const letter = (i) => String.fromCharCode(97 + i);
const bankLetters = (q) => q.answer.map(letter).sort().join('');

let failures = 0;
for (const [model, { source, key }] of Object.entries(sets)) {
  const qs = (byModel[model] || []).slice().sort((a, b) => a.num - b.num);
  const missing = [];
  const mismatches = [];
  for (const q of qs) {
    const official = key[q.num];
    if (!official) { missing.push(q.id); continue; }
    if (official.letters.replace(/,/g, '') !== bankLetters(q)) {
      mismatches.push(`${q.id}: banco ${bankLetters(q).toUpperCase()} vs oficial ${official.letters.toUpperCase()}`);
    }
    const loChapter = q.topic && q.topic.match(/^FL-(\d+)/);
    if (official.lo && q.topic !== official.lo) {
      mismatches.push(`${q.id}: LO banco ${q.topic} vs oficial ${official.lo}`);
    } else if (official.level && q.level !== official.level) {
      mismatches.push(`${q.id}: nivel banco ${q.level} vs oficial ${official.level}`);
    }
  }
  const parsed = Object.keys(key).length;
  console.log(`\n${model} (${source})`);
  console.log(`  clave oficial parseada: ${parsed}/40 · preguntas del banco: ${qs.length}`);
  if (missing.length) console.log(`  sin clave: ${missing.join(', ')}`);
  if (mismatches.length) {
    failures += mismatches.length;
    for (const m of mismatches) console.log(`  ✗ ${m}`);
  } else {
    console.log('  ✓ todas coinciden (respuesta, LO y K-level)');
  }
}

console.log(`\nTotal discrepancias: ${failures}`);
process.exit(failures ? 1 : 0);
