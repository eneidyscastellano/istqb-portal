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
- Figuras/tablas: `assets/fig-a-22.png` … `fig-d-32.png` (11).
- Respuestas B/C/D verificadas contra claves oficiales (120/120).
- Modelo A: falta clave oficial completa (la recibida trae 26/40 y no coincide por LO).
- Simulacro ExamUnit: 18 alineadas a oficiales; EX-032 y EX-033 corregidas; ver `REVISION_EXAMUNIT.md`.

## Pendientes
1. Conseguir clave oficial completa del Modelo A y auditar A-001..A-040.
2. Revisar si hay más preguntas sin contexto en S3/S4.
3. Rotar la API key de Immich y configurar respaldo 3-2-1.

## Consistencia (2026-11-16)
- 0 problemas estructurales (ids, opciones, respuestas válidas).
- 33 pares casi duplicados revisados: todos son alineaciones intencionales EX→oficial o enunciados genéricos con opciones distintas; sin contradicciones.
- 4 preguntas de respuesta múltiple (C-004, D-020, D-030, D-035) correctas (eligen 2 de 5).
- Modelo A sigue pendiente: la clave recibida trae 26/40 y no coincide por LO; no hay equivalentes en B/C/D/S3/S4.
