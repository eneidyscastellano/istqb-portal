#!/usr/bin/env node
/** Prepara lotes de preguntas + razonamiento oficial para reescribir explicaciones en español. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/questions.js'), 'utf8'), sandbox);
const data = sandbox.window.ISTQB_DATA;
const rationales = JSON.parse(fs.readFileSync('/tmp/rationales.json', 'utf8'));

const letter = (i) => String.fromCharCode(65 + i);
const byId = {};
for (const chapter of data.chapters) for (const q of chapter.questions) byId[q.id] = q;

fs.mkdirSync('/tmp/exp_batches', { recursive: true });
fs.mkdirSync('/tmp/exp_out', { recursive: true });

for (const model of ['A', 'B', 'C', 'D', 'S3', 'S4']) {
  const items = [];
  for (let n = 1; n <= 40; n += 1) {
    const id = `${model}-${String(n).padStart(3, '0')}`;
    const q = byId[id];
    const r = rationales[id];
    if (!q || !r) continue;
    items.push({
      id,
      question: q.question,
      options: q.options.map((text, i) => `${letter(i)}) ${text}`),
      correct: q.answer.map(letter),
      rationale: r.rationale
    });
  }
  fs.writeFileSync(`/tmp/exp_batches/${model}.json`, JSON.stringify({ model, items }, null, 2));
  console.log(model, items.length, 'preguntas');
}
