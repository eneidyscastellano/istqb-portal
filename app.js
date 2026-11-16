(() => {
  'use strict';

  const DATA = window.ISTQB_DATA;
  const app = document.getElementById('app');
  const headerExam = document.getElementById('headerExam');
  const WRONG_KEY = 'istqb-portal-wrong-v1';

  if (!DATA || !Array.isArray(DATA.chapters)) {
    app.innerHTML = `
      <section class="question-card">
        <h2>No se encontró el banco de preguntas</h2>
        <p class="muted">Revisa que <code>data/questions.js</code> exista y defina <code>window.ISTQB_DATA</code>.</p>
      </section>
    `;
    return;
  }

  headerExam.textContent = DATA.exam || 'ISTQB CTFL';

  const state = {
    view: 'home',
    mode: 'practice',
    chapterIds: [],
    questions: [],
    index: 0,
    selected: [],
    answers: [],
    checked: false,
    timer: null,
    secondsLeft: 0,
    startedAt: 0
  };

  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[ch]));

  const letter = (index) => String.fromCharCode(65 + index);

  function allQuestions() {
    return DATA.chapters.flatMap((chapter) =>
      chapter.questions.map((question) => ({
        ...question,
        chapterId: chapter.id,
        chapterTitle: chapter.title,
        chapterShort: chapter.short
      }))
    );
  }

  function chapterQuestions(chapterId) {
    const chapter = DATA.chapters.find((item) => item.id === Number(chapterId));
    if (!chapter) return [];
    return chapter.questions.map((question) => ({
      ...question,
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      chapterShort: chapter.short
    }));
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function getWrongIds() {
    try {
      const raw = localStorage.getItem(WRONG_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(parsed) ? parsed : []);
    } catch {
      return new Set();
    }
  }

  function setWrongIds(set) {
    try {
      localStorage.setItem(WRONG_KEY, JSON.stringify([...set]));
    } catch {
      // localStorage puede estar bloqueado en algunos contextos.
    }
  }

  function updateWrong(question, ok) {
    const set = getWrongIds();
    if (ok) set.delete(question.id);
    else set.add(question.id);
    setWrongIds(set);
  }

  function isCorrect(question, selected) {
    const correct = [...question.answer].sort((a, b) => a - b).join(',');
    const chosen = [...selected].sort((a, b) => a - b).join(',');
    return correct === chosen;
  }

  function formatTime(totalSeconds) {
    const safe = Math.max(0, totalSeconds);
    const minutes = Math.floor(safe / 60);
    const seconds = safe % 60;
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  }

  function clearTimer() {
    if (state.timer) {
      clearInterval(state.timer);
      state.timer = null;
    }
  }

  function startTimer(seconds) {
    clearTimer();
    state.secondsLeft = seconds;
    state.timer = setInterval(() => {
      state.secondsLeft -= 1;
      const timer = document.getElementById('timer');
      if (timer) timer.textContent = formatTime(state.secondsLeft);
      if (state.secondsLeft <= 0) {
        if (state.mode === 'exam' && state.questions[state.index]) {
          state.answers[state.index] = { selected: [...state.selected] };
        }
        clearTimer();
        finishQuiz();
      }
    }, 1000);
  }

  function renderHome() {
    clearTimer();
    state.view = 'home';
    state.questions = [];
    state.index = 0;
    state.selected = [];
    state.answers = [];
    state.checked = false;

    const total = allQuestions().length;
    const wrongCount = getWrongIds().size;
    const simulator = DATA.chapters.find((chapter) => chapter.simulator);

    app.innerHTML = `
      <section class="hero">
        <div>
          <p class="eyebrow">${esc(DATA.exam)}</p>
          <h2>Practica por capítulos</h2>
          <p class="lede">Preguntas de práctica con explicación inmediata, modo examen cronometrado y repaso de fallos. Todo corre local: no necesitas servidor ni internet.</p>
        </div>
        <div class="hero-stats">
          <div><strong>${total}</strong><span>preguntas</span></div>
          <div><strong>${DATA.chapters.length}</strong><span>capítulos</span></div>
          <div><strong>${wrongCount}</strong><span>por repasar</span></div>
        </div>
      </section>

      <div class="toolbar">
        <button class="btn primary" data-action="exam-all">Examen completo · 40 preguntas / 60 min</button>
        <button class="btn ghost" data-action="practice-all">Practicar todo</button>
        ${simulator ? `<button class="btn ghost" data-action="exam-chapter" data-chapter="${simulator.id}">Simulacro ExamUnit · ${simulator.questions.length} preguntas / 60 min</button>` : ''}
        ${wrongCount ? `<button class="btn ghost" data-action="review-wrong">Repasar fallos (${wrongCount})</button>` : ''}
      </div>

      <section class="chapter-grid">
        ${DATA.chapters.map(renderChapterCard).join('')}
      </section>
    `;
  }

  function renderChapterCard(chapter) {
    const count = chapter.questions.length;
    const disabled = count === 0;
    return `
      <article class="chapter-card ${disabled ? 'disabled' : ''}">
        <div class="chapter-top">
          <span class="chapter-num">${chapter.id}</span>
          <span class="weight">${chapter.badge ? esc(chapter.badge) : `${chapter.weight}%`}</span>
        </div>
        <h3>${esc(chapter.title)}</h3>
        <p class="muted">${count} pregunta${count === 1 ? '' : 's'} disponible${count === 1 ? '' : 's'}</p>
        <div class="chapter-actions">
          <button class="btn ${disabled ? 'ghost' : 'primary'}" data-action="practice-chapter" data-chapter="${chapter.id}" ${disabled ? 'disabled' : ''}>
            Practicar
          </button>
          ${chapter.simulator ? `<button class="btn ghost" data-action="exam-chapter" data-chapter="${chapter.id}">Simulacro 60 min</button>` : ''}
        </div>
      </article>
    `;
  }

  function startQuiz(questions, mode) {
    if (!questions || !questions.length) {
      alert('No hay preguntas disponibles para esta selección.');
      return;
    }

    clearTimer();
    state.view = 'quiz';
    state.mode = mode;
    state.questions = questions;
    state.index = 0;
    state.selected = [];
    state.answers = [];
    state.checked = false;
    state.startedAt = Date.now();

    if (mode === 'exam') {
      state.secondsLeft = 60 * 60;
      startTimer(state.secondsLeft);
    } else {
      state.secondsLeft = 0;
    }

    renderQuiz();
  }

  function renderQuiz() {
    const question = state.questions[state.index];
    if (!question) {
      finishQuiz();
      return;
    }

    const isMulti = question.type === 'multi';
    const checked = state.checked;
    const progress = ((state.index + 1) / state.questions.length) * 100;
    const chosen = state.selected;

    const options = question.options.map((option, index) => {
      const selected = chosen.includes(index);
      const correct = question.answer.includes(index);
      let className = 'option';
      if (selected) className += ' selected';
      if (checked) {
        if (correct) className += ' correct';
        else if (selected) className += ' wrong';
      }
      return `
        <button class="${className}" data-action="option" data-index="${index}" ${checked ? 'disabled' : ''}>
          <span class="letter">${letter(index)}</span>
          <span>${esc(option)}</span>
        </button>
      `;
    }).join('');

    const correctLetters = question.answer.map(letter).join(', ');
    const feedback = checked ? (() => {
      const ok = isCorrect(question, chosen);
      return `
        <div class="feedback ${ok ? 'ok' : 'bad'}">
          <strong>${ok ? '¡Correcto!' : 'Incorrecto'}</strong>
          <p>Respuesta correcta: <strong>${correctLetters}</strong></p>
          <p>${esc(question.explanation)}</p>
        </div>
      `;
    })() : '';

    const isLast = state.index === state.questions.length - 1;
    let actions = '';
    if (state.mode === 'practice') {
      actions = checked
        ? `<button class="btn primary" data-action="next">${isLast ? 'Ver resultados' : 'Siguiente'}</button>`
        : `<button class="btn primary" data-action="check" ${chosen.length ? '' : 'disabled'}>Comprobar</button>`;
    } else {
      actions = `<button class="btn primary" data-action="next">${isLast ? 'Finalizar examen' : 'Siguiente'}</button>`;
    }

    app.innerHTML = `
      <div class="quiz-head">
        <button class="btn ghost small" data-action="home">← Inicio</button>
        <div class="quiz-meta">
          <span class="badge">${esc(question.topic)}</span>
          <span class="badge level">${esc(question.level)}</span>
        </div>
        <div class="quiz-progress">
          ${state.index + 1} / ${state.questions.length}
          ${state.mode === 'exam' ? ` · <span id="timer">${formatTime(state.secondsLeft)}</span>` : ''}
        </div>
      </div>

      <div class="progressbar"><span style="width:${progress}%"></span></div>

      <section class="question-card">
        <p class="eyebrow">${esc(question.chapterTitle)}</p>
        <h2>${esc(question.question)}</h2>
        ${question.note ? `<p class="hint">${esc(question.note)}</p>` : ''}
        ${question.image ? `<figure class="question-figure"><img src="${esc(question.image)}" alt="Figura de la pregunta" width="1000" height="500"><figcaption><a href="${esc(question.image)}" target="_blank" rel="noopener">Abrir imagen en tamaño completo</a></figcaption></figure>` : ''}
        ${isMulti ? '<p class="hint">Selecciona todas las opciones correctas.</p>' : ''}
        <div class="options">${options}</div>
        ${feedback}
      </section>

      <div class="quiz-actions">${actions}</div>
    `;
  }

  function checkAnswer() {
    if (state.mode !== 'practice' || state.checked) return;
    const question = state.questions[state.index];
    if (!state.selected.length) return;

    state.checked = true;
    state.answers[state.index] = { selected: [...state.selected] };
    updateWrong(question, isCorrect(question, state.selected));
    renderQuiz();
  }

  function nextQuestion() {
    const question = state.questions[state.index];
    if (!question) {
      finishQuiz();
      return;
    }

    if (state.mode === 'exam' || !state.answers[state.index]) {
      state.answers[state.index] = { selected: [...state.selected] };
    }

    if (state.index >= state.questions.length - 1) {
      finishQuiz();
      return;
    }

    state.index += 1;
    state.selected = [];
    state.checked = false;
    renderQuiz();
  }

  function finishQuiz() {
    clearTimer();
    state.view = 'results';
    renderResults();
  }

  function renderResults() {
    const total = state.questions.length;
    const correctCount = state.questions.filter((question, index) => {
      const answer = state.answers[index];
      return answer && isCorrect(question, answer.selected);
    }).length;
    const pct = total ? Math.round((correctCount / total) * 100) : 0;
    const passed = pct >= 65;

    const review = state.questions.map((question, index) => {
      const answer = state.answers[index] || { selected: [] };
      const ok = isCorrect(question, answer.selected);
      const yourAnswer = answer.selected.length
        ? answer.selected.map(letter).join(', ')
        : 'Sin responder';
      const correctAnswer = question.answer.map(letter).join(', ');
      return `
        <article class="review-item ${ok ? 'ok' : 'bad'}">
          <div class="review-head">
            <strong>${index + 1}. ${esc(question.question)}</strong>
            <span>${ok ? '✅' : '❌'}</span>
          </div>
          <p><span class="muted">Tu respuesta:</span> ${yourAnswer}</p>
          <p><span class="muted">Correcta:</span> ${correctAnswer}</p>
          ${question.note ? `<p class="muted">${esc(question.note)}</p>` : ''}
          ${question.image ? `<img class="review-image" src="${esc(question.image)}" alt="Figura de la pregunta">` : ''}
          <p class="muted">${esc(question.explanation)}</p>
        </article>
      `;
    }).join('');

    app.innerHTML = `
      <section class="results-hero">
        <div>
          <p class="eyebrow">${state.mode === 'exam' ? 'Examen finalizado' : 'Práctica finalizada'}</p>
          <h2>${passed ? '¡Aprobado!' : 'Todavía no'}</h2>
          <p>${correctCount} de ${total} correctas · ${pct}% · ${passed ? 'meta de 65% alcanzada' : 'la meta es 65%'}</p>
        </div>
        <div class="score-ring" style="--pct:${pct}">
          <div>
            <strong>${pct}%</strong>
            <span>${correctCount}/${total}</span>
          </div>
        </div>
      </section>

      <div class="toolbar">
        <button class="btn primary" data-action="repeat">Repetir en práctica</button>
        <button class="btn ghost" data-action="home">Volver al inicio</button>
      </div>

      <section class="review-list">${review}</section>
    `;
  }

  app.addEventListener('click', (event) => {
    const target = event.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;

    if (action === 'home') {
      renderHome();
      return;
    }

    if (action === 'practice-chapter') {
      startQuiz(shuffle(chapterQuestions(target.dataset.chapter)), 'practice');
      return;
    }

    if (action === 'exam-chapter') {
      startQuiz(shuffle(chapterQuestions(target.dataset.chapter)), 'exam');
      return;
    }

    if (action === 'practice-all') {
      startQuiz(shuffle(allQuestions()), 'practice');
      return;
    }

    if (action === 'exam-all') {
      const questions = shuffle(allQuestions()).slice(0, 40);
      startQuiz(questions, 'exam');
      return;
    }

    if (action === 'review-wrong') {
      const wrong = getWrongIds();
      const questions = allQuestions().filter((question) => wrong.has(question.id));
      if (!questions.length) {
        alert('No hay fallos guardados todavía.');
        return;
      }
      startQuiz(shuffle(questions), 'practice');
      return;
    }

    if (action === 'option') {
      if (state.checked) return;
      const index = Number(target.dataset.index);
      const question = state.questions[state.index];
      if (question.type === 'multi') {
        state.selected = state.selected.includes(index)
          ? state.selected.filter((item) => item !== index)
          : [...state.selected, index];
      } else {
        state.selected = [index];
      }
      renderQuiz();
      return;
    }

    if (action === 'check') {
      checkAnswer();
      return;
    }

    if (action === 'next') {
      nextQuestion();
      return;
    }

    if (action === 'repeat') {
      startQuiz(shuffle(state.questions), 'practice');
    }
  });

  const params = new URLSearchParams(window.location.search);
  const directId = params.get('q');
  if (directId) {
    const direct = allQuestions().find((question) => question.id === directId);
    if (direct) startQuiz([direct], 'practice');
    else renderHome();
  } else {
    renderHome();
  }
})();
