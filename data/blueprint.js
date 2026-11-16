/* Blueprint oficial ISTQB CTFL v4.0 — Exam Structure Tables v1.19.
   40 preguntas: 8/6/4/11/9/2 por capítulo, con K1=8, K2=24, K3=8.
   También arma el examen; así el portal y los tests usan exactamente la misma regla. */
window.ISTQB_BLUEPRINT = {
  exam: 40,
  passScore: 26,
  passPct: 65,
  minutes: 60,
  minutesExtraPct: 25,
  chapters: {
    1: { total: 8, K1: 2, K2: 6, K3: 0 },
    2: { total: 6, K1: 2, K2: 4, K3: 0 },
    3: { total: 4, K1: 2, K2: 2, K3: 0 },
    4: { total: 11, K1: 0, K2: 6, K3: 5 },
    5: { total: 9, K1: 1, K2: 5, K3: 3 },
    6: { total: 2, K1: 1, K2: 1, K3: 0 }
  }
};

window.ISTQB_EXAM = (() => {
  'use strict';

  const shuffle = (items) => {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  function build(questions) {
    const blueprint = window.ISTQB_BLUEPRINT;
    const pool = questions.filter((question) => !question.simulator && question.chapterId <= 6);
    const picked = [];
    const chosen = new Set();

    for (const [chapterId, levels] of Object.entries(blueprint.chapters)) {
      const chapterPool = pool.filter((question) => question.chapterId === Number(chapterId));
      for (const level of ['K1', 'K2', 'K3']) {
        const needed = levels[level] || 0;
        if (!needed) continue;
        const candidates = shuffle(chapterPool.filter((question) => question.level === level && !chosen.has(question.id)));
        for (const question of candidates.slice(0, needed)) {
          picked.push(question);
          chosen.add(question.id);
        }
      }
    }

    // Red de seguridad: si algún nivel no alcanza, completar con el resto del banco oficial.
    if (picked.length < blueprint.exam) {
      const rest = shuffle(pool.filter((question) => !chosen.has(question.id)));
      for (const question of rest.slice(0, blueprint.exam - picked.length)) {
        picked.push(question);
        chosen.add(question.id);
      }
    }

    return shuffle(picked);
  }

  return { build, shuffle };
})();
