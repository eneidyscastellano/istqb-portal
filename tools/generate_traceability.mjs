#!/usr/bin/env node
/**
 * Completa la trazabilidad de las preguntas del simulacro ExamUnit (EX-*):
 *  - topic: LO oficial del syllabus (en vez de "ExamUnit")
 *  - level: K-level del LO
 *  - chapterRef: capítulo real (las EX viven en el capítulo 7, que es solo un contenedor de simulacro)
 *
 * Idempotente: si ya está aplicado, no cambia nada.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILE = path.join(ROOT, 'data/questions.js');

// Alineación documentada en REVISION_EXAMUNIT.md
const ALIGNED = {
  'EX-001': 'A-001', 'EX-002': 'A-002', 'EX-005': 'A-006', 'EX-007': 'A-008',
  'EX-008': 'A-010', 'EX-010': 'A-012', 'EX-011': 'A-014', 'EX-012': 'A-015',
  'EX-013': 'A-017', 'EX-016': 'A-022', 'EX-017': 'A-023', 'EX-018': 'A-024',
  'EX-021': 'A-029', 'EX-022': 'A-030', 'EX-023': 'A-031', 'EX-025': 'A-038',
  'EX-027': 'B-006', 'EX-028': 'C-008', 'EX-036': 'B-014',
};

// Variantes propias: LO asignado por contenido + K-level oficial del LO
const OWN = {
  'EX-003': ['FL-1.3.1', 'K2'],
  'EX-004': ['FL-1.4.1', 'K2'],
  'EX-006': ['FL-1.5.1', 'K2'],
  'EX-009': ['FL-2.1.5', 'K2'],
  'EX-014': ['FL-4.1.1', 'K2'],
  'EX-015': ['FL-4.2.2', 'K3'],
  'EX-020': ['FL-4.4.2', 'K2'],
  'EX-021': ['FL-4.5.3', 'K3'],
  'EX-024': ['FL-5.1.4', 'K3'],
  'EX-026': ['FL-1.4.3', 'K2'],
  'EX-029': ['FL-2.1.4', 'K2'],
  'EX-030': ['FL-2.2.2', 'K2'],
  'EX-031': ['FL-2.3.1', 'K2'],
  'EX-032': ['FL-1.4.1', 'K2'],
  'EX-033': ['FL-3.1.3', 'K2'],
  'EX-034': ['FL-3.2.2', 'K2'],
  'EX-035': ['FL-4.2.2', 'K3'],
  'EX-037': ['FL-4.4.3', 'K2'],
  'EX-038': ['FL-5.1.1', 'K2'],
  'EX-039': ['FL-5.1.6', 'K1'],
  'EX-040': ['FL-5.2.1', 'K1'],
};

// EX-029 llegó sin la pregunta: solo la lista i..v
// EX-006, EX-020 y EX-030 también llegaron solo con el escenario/lista.
const STEM_FIX = {
  'EX-006': '¿Cuáles de las siguientes son las habilidades más importantes que debe tener un probador? i. Conocimiento del dominio. ii. Crear una visión de producto. iii. Ser buen jugador de equipo. iv. Planificar y organizar el trabajo del equipo. v. Pensamiento crítico.',
  'EX-020': 'Proyecto con entrega tardía, pruebas tarde, conocimiento del dominio y buenas habilidades analíticas, requisitos incompletos y una dirección que pide resultados. ¿Qué técnica es MÁS apropiada en este contexto?',
  'EX-029': '¿Cuáles de las siguientes son ventajas de DevOps? i. Entrega más rápida y menor time-to-market. ii. Aumenta la necesidad de pruebas manuales repetitivas. iii. Disponibilidad constante de software ejecutable. iv. Reducción de pruebas de regresión asociadas a refactorización. v. El marco de automatización es económico porque todo está automatizado.',
  'EX-030': 'Requisito: "El pedido debe procesarse en menos de 10 segundos en el 95% de los casos". Se miden tiempos de respuesta. ¿Qué tipo de prueba se está realizando?',
};

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(FILE, 'utf8'), sandbox);
const data = sandbox.window.ISTQB_DATA;

const byId = {};
for (const c of data.chapters) for (const q of c.questions) byId[q.id] = q;

let src = fs.readFileSync(FILE, 'utf8');
const objRe = /\{\n {10}"id": "(EX-\d{3})",[\s\S]*?\n {8}\}/g;
let changed = 0;
let missing = [];

src = src.replace(objRe, (block, id) => {
  let topic;
  let level;
  const aligned = ALIGNED[id];
  if (aligned && byId[aligned]) {
    topic = byId[aligned].topic;
    level = byId[aligned].level;
  } else if (OWN[id]) {
    [topic, level] = OWN[id];
  } else {
    missing.push(id);
    return block;
  }
  const chapterRef = Number(topic.split('-')[1].split('.')[0]);
  let next = block
    .replace(/"topic": "[^"]*"/, `"topic": "${topic}"`)
    .replace(/"level": "[^"]*"/, `"level": "${level}"`);
  if (!/"chapterRef":/.test(next)) {
    next = next.replace(/"type":/, `"chapterRef": ${chapterRef},\n          "type":`);
  }
  if (STEM_FIX[id]) {
    const fixed = JSON.stringify(STEM_FIX[id]).slice(1, -1);
    next = next.replace(/"question": "[\s\S]*?",\n          "options":/, `"question": "${fixed}",\n          "options":`);
  }
  if (next !== block) changed += 1;
  return next;
});

fs.writeFileSync(FILE, src);
console.log(`EX actualizadas: ${changed}`);
if (missing.length) console.log('Sin mapeo:', missing.join(', '));
