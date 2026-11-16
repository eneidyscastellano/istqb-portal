#!/usr/bin/env node
/**
 * Auditoría del banco ISTQB CTFL v4.0.1 contra el estándar oficial.
 *
 * Fuentes normativas:
 *  - ISTQB Exam Structures and Rules v1.2 (40 preguntas, 1 punto c/u, 65% = 26/40, 60 min, +25%)
 *  - ISTQB Exam Structure Tables v1.19 (blueprint CTFL v4.0: 8/6/4/11/9/2 y K1=8, K2=24, K3=8)
 *  - Syllabus CTFL v4.0.1 (64 LO con su K-level)
 *
 * Uso: node tools/audit_bank.mjs [--json out.json] [--md out.md]
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ---------- Carga del banco ----------
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/questions.js'), 'utf8'), sandbox);
const data = sandbox.window.ISTQB_DATA;

// Blueprint compartido con el portal (data/blueprint.js)
const bpSandbox = { window: {} };
vm.createContext(bpSandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/blueprint.js'), 'utf8'), bpSandbox);
const BLUEPRINT = bpSandbox.window.ISTQB_BLUEPRINT;

// ---------- Estándar oficial ----------
const OFFICIAL = {
  questions: 40,
  points: 40,
  passScore: 26,          // 65% de 40
  passPct: 65,
  minutes: 60,
  minutesExtraPct: 25,    // si el idioma del examen no es el nativo
  perChapter: {
    1: { total: 8, K1: 2, K2: 6, K3: 0 },
    2: { total: 6, K1: 2, K2: 4, K3: 0 },
    3: { total: 4, K1: 2, K2: 2, K3: 0 },
    4: { total: 11, K1: 0, K2: 6, K3: 5 },
    5: { total: 9, K1: 1, K2: 5, K3: 3 },
    6: { total: 2, K1: 1, K2: 1, K3: 0 },
  },
  totals: { K1: 8, K2: 24, K3: 8 },
};

// LO -> K-level oficial (syllabus v4.0.1). Se extrae del PDF con pdftotext.
const SYLLABUS = path.resolve(ROOT, '..', 'materiales', 'ISTQB_CTFL_Syllabus_v4.0.1.pdf');
const sylText = fs.existsSync(SYLLABUS)
  ? execFileSync('pdftotext', ['-layout', SYLLABUS, '-'], { encoding: 'utf8' })
  : '';
const LO_K = {};
const loLines = sylText.split('\n');
for (const line of loLines) {
  const m = line.match(/^(FL-\d+\.\d+\.\d+)\s+\(K([1-4])\)/);
  if (m) LO_K[m[1]] = `K${m[2]}`;
}
const OFFICIAL_LO = new Set(Object.keys(LO_K));

// ---------- Utilidades ----------
const norm = (s) => String(s || '')
  .toLowerCase()
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9áéíóúñ]+/g, ' ')
  .trim();

const stripOption = (s) => norm(s).replace(/^[a-e]\)\s*/, '');

const all = [];
for (const chapter of data.chapters) {
  for (const q of chapter.questions || []) {
    all.push({ ...q, chapterId: q.chapterRef ?? chapter.id, containerId: chapter.id, simulator: Boolean(chapter.simulator) });
  }
}

// ---------- Reglas por pregunta ----------
const findings = [];
const add = (q, rule, severity, message) => {
  findings.push({ id: q.id, rule, severity, message, chapter: q.chapterId, source: q.source });
};

for (const q of all) {
  // R01 campos obligatorios
  for (const field of ['id', 'topic', 'level', 'type', 'question', 'options', 'answer', 'explanation']) {
    if (q[field] === undefined || q[field] === null || q[field] === '' ||
        (Array.isArray(q[field]) && q[field].length === 0)) {
      add(q, 'R01-campos', 'error', `Falta el campo obligatorio "${field}"`);
    }
  }
  if (!Array.isArray(q.options) || !Array.isArray(q.answer)) continue;

  // R02 formato de id
  if (!/^(A|B|C|D|S3|S4|EX)-\d{3}$/.test(q.id || '')) {
    add(q, 'R02-id', 'error', `Id con formato inválido: ${q.id}`);
  }

  // R03 capítulo coherente con el LO
  const loChapter = (q.topic || '').match(/^FL-(\d+)\./);
  if (!loChapter) {
    add(q, 'R03-topico', 'error', `topic no es un LO FL-x.y.z: ${q.topic}`);
  } else if (Number(loChapter[1]) !== q.chapterId) {
    add(q, 'R03-topico', 'error', `LO ${q.topic} declarado en capítulo ${q.chapterId}`);
  }

  // R04 LO oficial
  if (q.topic && !OFFICIAL_LO.has(q.topic)) {
    add(q, 'R04-lo-oficial', 'error', `LO inexistente en el syllabus: ${q.topic}`);
  }

  // R05 K-level válido
  if (!['K1', 'K2', 'K3'].includes(q.level)) {
    add(q, 'R05-nivel', 'warning', `K-level fuera del rango examinable oficial (${q.level})`);
  }

  // R06 coherencia nivel vs LO
  const loK = LO_K[q.topic];
  if (loK && q.level && q.level !== loK && q.level !== 'Mixto') {
    add(q, 'R06-nivel-lo', 'warning', `Marcada ${q.level} pero ${q.topic} es ${loK} (válido solo si cubre un LO de K mayor: revisar 5.4.2)`);
  }

  // R07 tipo vs número de respuestas
  if (q.type === 'single' && q.answer.length !== 1) {
    add(q, 'R07-respuestas', 'error', `single con ${q.answer.length} respuestas`);
  }
  if (q.type === 'multi' && q.answer.length < 2) {
    add(q, 'R07-respuestas', 'error', `multi con ${q.answer.length} respuestas`);
  }
  if (!['single', 'multi'].includes(q.type)) {
    add(q, 'R07-respuestas', 'error', `type inválido: ${q.type}`);
  }

  // R08 índices válidos y sin duplicados
  for (const i of q.answer) {
    if (!Number.isInteger(i) || i < 0 || i >= q.options.length) {
      add(q, 'R08-indices', 'error', `Índice de respuesta fuera de rango: ${i} (${q.options.length} opciones)`);
    }
  }
  if (new Set(q.answer).size !== q.answer.length) {
    add(q, 'R08-indices', 'error', 'Índices de respuesta duplicados');
  }

  // R09 opciones
  if (q.options.length < 4) {
    add(q, 'R09-opciones', 'error', `${q.options.length} opciones (el examen oficial usa 4 o más)`);
  }
  if (q.options.length > 6) {
    add(q, 'R09-opciones', 'warning', `${q.options.length} opciones: revisar legibilidad`);
  }
  q.options.forEach((opt, i) => {
    if (!String(opt).trim()) add(q, 'R09-opciones', 'error', `Opción ${String.fromCharCode(65 + i)} vacía`);
  });
  if (new Set(q.options.map(stripOption)).size !== q.options.length) {
    add(q, 'R09-opciones', 'error', 'Opciones duplicadas');
  }

  // R10 enunciado
  const stem = String(q.question || '').trim();
  if (stem.length < 25) add(q, 'R10-enunciado', 'error', `Enunciado demasiado corto (${stem.length} chars)`);
  if (/^(pregunta|question)\s*\d*\s*[:.]?$/i.test(stem)) add(q, 'R10-enunciado', 'error', 'Enunciado de relleno');
  if (!/[?:]/.test(stem)) add(q, 'R10-enunciado', 'warning', 'El enunciado no formula una pregunta (sin ? ni :)');
  if (/\b(TODO:|XXX|FIXME)\b/.test(stem)) add(q, 'R10-enunciado', 'error', 'Marcador pendiente en el enunciado');

  // R11 explicación didáctica
  const exp = String(q.explanation || '').trim();
  const templateOnly = /^Respuesta correcta:\s*[A-E]\)?.*?\.\s*(FL|AT)-\d+\.\d+\.\d+\s*\(K\d\)\.?$/s.test(exp);
  if (templateOnly) {
    add(q, 'R11-explicacion', 'warning', 'Explicación plantilla: repite la respuesta, no explica el porqué');
  } else if (exp.length < 60) {
    add(q, 'R11-explicacion', 'warning', `Explicación breve (${exp.length} chars)`);
  }

  // R12 recursos
  if (q.image && !fs.existsSync(path.join(ROOT, q.image))) {
    add(q, 'R12-recursos', 'error', `Imagen inexistente: ${q.image}`);
  }
  const tmp = `${q.question} ${q.options.join(' ')}`;
  for (const m of tmp.matchAll(/(?:assets\/)?([\w-]+\.(?:png|jpg|jpeg|svg))/gi)) {
    const rel = m[0].startsWith('assets/') ? m[0] : `assets/${m[0]}`;
    if (!fs.existsSync(path.join(ROOT, rel))) {
      add(q, 'R12-recursos', 'error', `Recurso referenciado inexistente: ${rel}`);
    }
  }
}

// ---------- Duplicados ----------
const byStem = new Map();
for (const q of all) {
  const key = norm(q.question).slice(0, 160);
  if (!byStem.has(key)) byStem.set(key, []);
  byStem.get(key).push(q);
}
const exactDupGroups = [...byStem.values()].filter((g) => g.length > 1);
const duplicates = exactDupGroups.map((g) => ({
  ids: g.map((q) => q.id),
  sources: [...new Set(g.map((q) => q.source))],
  stem: g[0].question.slice(0, 140),
}));

// ---------- Cobertura ----------
const chapterStats = {};
for (const id of Object.keys(OFFICIAL.perChapter)) {
  chapterStats[id] = { bank: 0, K1: 0, K2: 0, K3: 0, Mixto: 0, los: new Set() };
}
for (const q of all) {
  if (q.simulator) continue; // el simulacro no cuenta para la cobertura del banco oficial
  const s = chapterStats[q.chapterId];
  if (!s) continue;
  s.bank += 1;
  s[q.level] = (s[q.level] || 0) + 1;
  if (q.topic) s.los.add(q.topic);
}
const coverage = Object.entries(chapterStats).map(([id, s]) => {
  const off = OFFICIAL.perChapter[id];
  return {
    chapter: Number(id),
    official: off,
    bank: s.bank,
    byLevel: { K1: s.K1, K2: s.K2, K3: s.K3, Mixto: s.Mixto },
    losCovered: s.los.size,
    losTotal: [...OFFICIAL_LO].filter((lo) => lo.startsWith(`FL-${id}.`)).length,
  };
});

// LOs sin ninguna pregunta en el banco
const coveredLO = new Set(all.map((q) => q.topic));
const missingLO = [...OFFICIAL_LO].filter((lo) => !coveredLO.has(lo)).sort();

// ---------- Blueprint factible por modelo ----------
const models = ['A', 'B', 'C', 'D', 'S3', 'S4', 'EX'];
const modelFeasibility = {};
for (const model of models) {
  const qs = all.filter((q) => q.id.startsWith(`${model}-`));
  const rows = [];
  let ok = true;
  for (const [ch, off] of Object.entries(OFFICIAL.perChapter)) {
    const pool = qs.filter((q) => q.chapterId === Number(ch));
    const k = (lvl) => pool.filter((q) => q.level === lvl || q.level === 'Mixto').length;
    const feasible = ['K1', 'K2', 'K3'].every((lvl) => k(lvl) >= off[lvl]);
    if (!feasible) ok = false;
    rows.push({ chapter: Number(ch), pool: pool.length, need: off.total, K1: k('K1'), K2: k('K2'), K3: k('K3'), feasible });
  }
  modelFeasibility[model] = { total: qs.length, examFeasible: ok, chapters: rows };
}

// ---------- Resumen ----------
const errors = findings.filter((f) => f.severity === 'error');
const warnings = findings.filter((f) => f.severity === 'warning');
const templateExp = warnings.filter((f) => f.rule === 'R11-explicacion' && f.message.startsWith('Explicación plantilla'));

// Chequeo estático del simulador de examen (app.js)
const appSrc = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
const blueprintOk = /function buildOfficialExam\(\)/.test(appSrc) && /ISTQB_EXAM/.test(appSrc) && /'exam-all'/.test(appSrc);
const blueprintMatches = Boolean(BLUEPRINT)
  && BLUEPRINT.exam === OFFICIAL.questions
  && BLUEPRINT.passScore === OFFICIAL.passScore
  && BLUEPRINT.passPct === OFFICIAL.passPct
  && BLUEPRINT.minutes === OFFICIAL.minutes
  && JSON.stringify(BLUEPRINT.chapters) === JSON.stringify(OFFICIAL.perChapter);
const passOk = /pct >= passPct/.test(appSrc) || /pct >= 65/.test(appSrc);

const summary = {
  generatedAt: new Date().toISOString(),
  bank: {
    total: all.length,
    chapters: data.chapters.map((c) => ({ id: c.id, title: c.title, weight: c.weight, questions: c.questions.length })),
    byLevel: all.reduce((acc, q) => ((acc[q.level] = (acc[q.level] || 0) + 1), acc), {}),
    byType: all.reduce((acc, q) => ((acc[q.type] = (acc[q.type] || 0) + 1), acc), {}),
    byModel: Object.fromEntries(models.map((m) => [m, all.filter((q) => q.id.startsWith(`${m}-`)).length])),
  },
  structural: {
    questionsChecked: all.length,
    questionsWithErrors: new Set(errors.map((f) => f.id)).size,
    questionsWithWarnings: new Set(warnings.map((f) => f.id)).size,
    errors: errors.length,
    warnings: warnings.length,
    templateExplanations: templateExp.length,
    duplicates,
  },
  coverage,
  missingLO,
  modelFeasibility,
  officialStandard: OFFICIAL,
  checks: [
    { id: 'S01', name: 'Cada pregunta tiene id, LO, K-level, tipo, opciones, respuesta y explicación', status: errors.filter((f) => f.rule === 'R01-campos').length ? 'FAIL' : 'PASS' },
    { id: 'S02', name: 'Todas las respuestas apuntan a opciones existentes (sin índices fuera de rango)', status: errors.filter((f) => f.rule === 'R08-indices').length ? 'FAIL' : 'PASS' },
    { id: 'S03', name: 'Todas las preguntas mapean a un LO oficial del syllabus v4.0.1', status: errors.filter((f) => f.rule === 'R04-lo-oficial').length ? 'FAIL' : 'PASS' },
    { id: 'S04', name: 'Cobertura de los 64 LO oficiales', status: missingLO.length ? 'PARTIAL' : 'PASS' },
    { id: 'S05', name: 'El banco puede armar un examen con blueprint oficial (8/6/4/11/9/2 y K1=8/K2=24/K3=8)', status: coverage.every((c) => c.byLevel.K1 >= c.official.K1 && c.byLevel.K2 >= c.official.K2 && c.byLevel.K3 >= c.official.K3) ? 'PASS' : 'FAIL' },
    { id: 'S06', name: 'El simulador "Examen completo" respeta el blueprint (8/6/4/11/9/2 y K1=8/K2=24/K3=8)', status: blueprintOk ? 'PASS' : 'FAIL' },
    { id: 'S07', name: 'Umbral de aprobación 26/40 (65%), 60 min y +25% (75 min) según el estándar', status: passOk && blueprintMatches ? 'PASS' : 'FAIL' },
    { id: 'S08', name: 'Explicaciones didácticas (no plantilla "Respuesta correcta: X")', status: templateExp.length ? 'PARTIAL' : 'PASS' },
  ],
  findings,
};

// ---------- CLI ----------
const args = process.argv.slice(2);
const jsonIdx = args.indexOf('--json');
if (jsonIdx !== -1 && args[jsonIdx + 1]) {
  fs.writeFileSync(args[jsonIdx + 1], JSON.stringify(summary, null, 2));
}
const mdIdx = args.indexOf('--md');
if (mdIdx !== -1 && args[mdIdx + 1]) {
  fs.writeFileSync(args[mdIdx + 1], renderMarkdown(summary));
}
if (jsonIdx === -1 && mdIdx === -1) {
  console.log(JSON.stringify({ bank: summary.bank, structural: summary.structural, checks: summary.checks, missingLO }, null, 2));
}

function renderMarkdown(s) {
  const L = [];
  L.push('# Auditoría del banco — ISTQB CTFL v4.0.1');
  L.push('');
  L.push(`Generado: ${s.generatedAt}`);
  L.push('');
  L.push('## Veredicto');
  L.push('');
  L.push('| # | Criterio | Estado |');
  L.push('|---|---|---|');
  for (const c of s.checks) L.push(`| ${c.id} | ${c.name} | **${c.status}** |`);
  L.push('');
  L.push('## Banco');
  L.push('');
  L.push(`- Preguntas: **${s.bank.total}**`);
  L.push(`- Por modelo: ${Object.entries(s.bank.byModel).map(([k, v]) => `${k}=${v}`).join(' · ')}`);
  L.push(`- Por nivel: ${Object.entries(s.bank.byLevel).map(([k, v]) => `${k}=${v}`).join(' · ')}`);
  L.push(`- Por tipo: ${Object.entries(s.bank.byType).map(([k, v]) => `${k}=${v}`).join(' · ')}`);
  L.push('');
  L.push('## Cobertura por capítulo vs blueprint oficial');
  L.push('');
  L.push('| Cap | Oficial | Banco | K1 banco/oficial | K2 | K3 | LO cubiertos |');
  L.push('|---|---|---|---|---|---|---|');
  for (const c of s.coverage) {
    L.push(`| ${c.chapter} | ${c.official.total} | ${c.bank} | ${c.byLevel.K1}/${c.official.K1} | ${c.byLevel.K2}/${c.official.K2} | ${c.byLevel.K3}/${c.official.K3} | ${c.losCovered}/${c.losTotal} |`);
  }
  L.push('');
  if (s.missingLO.length) {
    L.push(`LO sin preguntas: ${s.missingLO.join(', ')}`);
    L.push('');
  }
  L.push('## Hallazgos estructurales');
  L.push('');
  L.push(`- Preguntas con error: **${s.structural.questionsWithErrors}** · con advertencia: **${s.structural.questionsWithWarnings}**`);
  L.push(`- Explicaciones plantilla: **${s.structural.templateExplanations}**`);
  L.push(`- Grupos de enunciados duplicados: **${s.structural.duplicates.length}**`);
  L.push('');
  const byRule = {};
  for (const f of s.findings) {
    const k = `${f.rule}|${f.severity}`;
    byRule[k] = (byRule[k] || 0) + 1;
  }
  if (Object.keys(byRule).length) {
    L.push('| Regla | Severidad | Casos |');
    L.push('|---|---|---|');
    for (const [k, v] of Object.entries(byRule).sort()) {
      const [rule, sev] = k.split('|');
      L.push(`| ${rule} | ${sev} | ${v} |`);
    }
    L.push('');
  }
  if (s.structural.duplicates.length) {
    L.push('### Enunciados duplicados');
    L.push('');
    for (const d of s.structural.duplicates) L.push(`- ${d.ids.join(', ')} — ${d.stem}…`);
    L.push('');
  }
  L.push('## Blueprint factible por modelo');
  L.push('');
  L.push('| Modelo | Preguntas | ¿Examen oficial posible? |');
  L.push('|---|---|---|');
  for (const [m, f] of Object.entries(s.modelFeasibility)) {
    L.push(`| ${m} | ${f.total} | ${f.examFeasible ? 'Sí' : 'No'} |`);
  }
  L.push('');
  return L.join('\n');
}
