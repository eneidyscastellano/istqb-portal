#!/usr/bin/env node
/** Prueba el armado del examen contra el blueprint oficial (200 simulaciones). */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sandbox = { window: {} };
vm.createContext(sandbox);
for (const file of ['data/blueprint.js', 'data/questions.js']) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), sandbox);
}
const { ISTQB_DATA, ISTQB_BLUEPRINT, ISTQB_EXAM } = sandbox.window;

// Aplana el banco con chapterId real
const questions = [];
for (const chapter of ISTQB_DATA.chapters) {
  for (const q of chapter.questions) {
    questions.push({ ...q, chapterId: q.chapterRef ?? chapter.id, simulator: Boolean(chapter.simulator) });
  }
}

const expectedChapters = ISTQB_BLUEPRINT.chapters;
let failures = 0;

for (let run = 1; run <= 200; run += 1) {
  const exam = ISTQB_EXAM.build(questions);
  const fail = (msg) => { console.log(`run ${run}: ${msg}`); failures += 1; };

  if (exam.length !== ISTQB_BLUEPRINT.exam) fail(`largo ${exam.length}`);
  if (new Set(exam.map((q) => q.id)).size !== exam.length) fail('ids duplicados');
  if (exam.some((q) => q.chapterId > 6 || q.simulator)) fail('pregunta del simulacro o capítulo inválido');

  for (const [chapterId, spec] of Object.entries(expectedChapters)) {
    const got = exam.filter((q) => q.chapterId === Number(chapterId)).length;
    if (got !== spec.total) fail(`capítulo ${chapterId}: ${got} != ${spec.total}`);
    for (const level of ['K1', 'K2', 'K3']) {
      const gotLevel = exam.filter((q) => q.chapterId === Number(chapterId) && q.level === level).length;
      if (gotLevel !== spec[level]) fail(`capítulo ${chapterId} ${level}: ${gotLevel} != ${spec[level]}`);
    }
  }

  const totals = ['K1', 'K2', 'K3'].map((level) => exam.filter((q) => q.level === level).length);
  if (totals.join('/') !== '8/24/8') fail(`K totals ${totals.join('/')}`);
  if (exam.some((q) => !Array.isArray(q.answer) || !q.answer.every((i) => i >= 0 && i < q.options.length))) {
    fail('respuesta inválida');
  }
  if (failures) break;
}

const sample = ISTQB_EXAM.build(questions);
console.log(`Simulaciones: 200 · fallos: ${failures}`);
console.log(`Ejemplo: ${sample.length} preguntas · capítulos ${[...new Set(sample.map((q) => q.chapterId))].sort().join(',')}`);
console.log(`Ejemplo por capítulo: ${Object.keys(expectedChapters).map((c) => `${c}:${sample.filter((q) => q.chapterId === Number(c)).length}`).join(' ')}`);
console.log(`Ejemplo por nivel: K1=${sample.filter((q) => q.level === 'K1').length} K2=${sample.filter((q) => q.level === 'K2').length} K3=${sample.filter((q) => q.level === 'K3').length}`);
process.exit(failures ? 1 : 0);
