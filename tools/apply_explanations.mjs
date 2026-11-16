#!/usr/bin/env node
/** Aplica las explicaciones reescritas y las propaga al simulacro alineado. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILE = path.join(ROOT, 'data/questions.js');

const ALIGNED = {
  'EX-001': 'A-001', 'EX-002': 'A-002', 'EX-005': 'A-006', 'EX-007': 'A-008',
  'EX-008': 'A-010', 'EX-010': 'A-012', 'EX-011': 'A-014', 'EX-012': 'A-015',
  'EX-013': 'A-017', 'EX-016': 'A-022', 'EX-017': 'A-023', 'EX-018': 'A-024',
  'EX-021': 'A-029', 'EX-022': 'A-030', 'EX-023': 'A-031', 'EX-025': 'A-038',
  'EX-027': 'B-006', 'EX-028': 'C-008', 'EX-036': 'B-014',
};

const explanations = {};
for (const model of ['A', 'B', 'C', 'D', 'S3', 'S4']) {
  const file = `/tmp/exp_out/${model}.json`;
  if (!fs.existsSync(file)) {
    console.error(`Falta ${file}`);
    process.exit(1);
  }
  const parsed = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const [id, text] of Object.entries(parsed)) explanations[id] = String(text).trim();
}

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(FILE, 'utf8'), sandbox);
const data = sandbox.window.ISTQB_DATA;

const existing = {};
for (const chapter of data.chapters) for (const q of chapter.questions) existing[q.id] = q;

// Propaga a las preguntas del simulacro que son la misma pregunta oficial
for (const [exId, officialId] of Object.entries(ALIGNED)) {
  if (explanations[officialId]) explanations[exId] = explanations[officialId];
}

let src = fs.readFileSync(FILE, 'utf8');
let applied = 0;
const missing = [];

src = src.replace(/\{\n {10}"id": "([A-Z0-9-]+)",[\s\S]*?\n {8}\}/g, (block, id) => {
  const text = explanations[id];
  if (!text) return block;
  if (text.length < 50) {
    missing.push(`${id} (corta: ${text.length})`);
    return block;
  }
  const escaped = JSON.stringify(text).slice(1, -1);
  const next = block.replace(/"explanation": "(?:[^"\\]|\\.)*"/, `"explanation": "${escaped}"`);
  if (next !== block) applied += 1;
  return next;
});

fs.writeFileSync(FILE, src);
console.log(`Explicaciones aplicadas: ${applied}/${Object.keys(explanations).length}`);
const notApplied = Object.keys(explanations).filter((id) => !existing[id]);
if (notApplied.length) console.log('Ids inexistentes:', notApplied.join(', '));
if (missing.length) console.log('Descartadas:', missing.join(', '));
