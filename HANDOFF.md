# Handoff — Portal ISTQB CTFL

## URLs
- Público (GitHub Pages): https://eneidyscastellano.github.io/istqb-portal/
- Local: http://127.0.0.1:8090/
- Tailnet: http://fedora-kai.tail924ae2.ts.net (HTTP) y https://fedora-kai.tail924ae2.ts.net/istqb

## Repo
- https://github.com/eneidyscastellano/istqb-portal (público, rama main)
- Fuente local: `~/.openclaw/workspace/istqb/portal`
- Actualizar: `git add -A && git commit -m "..." && git push` (Pages reconstruye en 1–2 min).

## Estado del banco
- 279 preguntas (A/B/C/D/S3/S4/EX) en `data/questions.js`.
- Figuras/tablas: `assets/fig-*.png` (referenciadas en 17 preguntas; todas existen).
- **Claves oficiales verificadas: 240/240** (A/B/C/D/S3/S4) contra los PDFs: respuesta, LO y K-level. El pendiente del modelo A quedó cerrado.
- Cobertura: 64/64 LO del syllabus v4.0.1. 0 errores estructurales.
- Simulacro ExamUnit: 39 preguntas trazadas a su LO/K-level; 4 enunciados restaurados (EX-006, EX-020, EX-029, EX-030).
- **Examen completo:** `data/blueprint.js` define el blueprint oficial y arma 40 preguntas (8/6/4/11/9/2; K1=8, K2=24, K3=8). `tools/check_exam.mjs` lo prueba con 200 simulaciones.
- Auditoría: `AUDITORIA_BANCO.md` (generar con `tools/audit_all.sh`).

## Pendientes
1. **Explicaciones didácticas:** 250/279 son plantilla ("Respuesta correcta: X"). Los PDFs oficiales traen el razonamiento por opción; falta traducirlo/resumirlo al español.
2. Rotar la API key de Immich y configurar respaldo 3-2-1 (fuera de este repo).

## Consistencia (2026-11-16)
- 0 problemas estructurales (ids, opciones, respuestas válidas).
- 27 grupos de enunciados casi duplicados: alineaciones intencionales EX→oficial o el mismo tema con opciones distintas en sets distintos; sin contradicciones.
- 9 preguntas de respuesta múltiple (A-006, A-031, B-026, C-004, D-020, D-030, D-035 y las del simulacro EX-005, EX-023): todas verificadas contra la clave oficial (2 de 5 opciones).
