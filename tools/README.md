# Herramientas del banco

Pipeline de validación y mantenimiento. Todo se ejecuta desde `istqb/portal`.

| Comando | Qué hace |
|---|---|
| `./tools/audit_all.sh` | Regenera `AUDITORIA_BANCO.md`: estructura, cobertura, blueprint y claves oficiales |
| `node tools/audit_bank.mjs` | Solo la auditoría estructural (opciones `--json`, `--md`) |
| `node tools/verify_official_keys.mjs` | Contrasta respuesta, LO y K-level contra los PDFs de `../materiales` |
| `node tools/check_exam.mjs` | 200 simulaciones del examen: 40 preguntas, 8/6/4/11/9/2, K1=8/K2=24/K3=8 |
| `node tools/generate_traceability.mjs` | Traza las preguntas EX a su LO/capítulo real (idempotente) |

## Explicaciones

1. `node tools/extract_rationales.mjs` → `/tmp/rationales.json` (razonamiento oficial en inglés, 240 preguntas).
2. `node tools/make_explanation_batches.mjs` → `/tmp/exp_batches/<MODEL>.json` (pregunta + opciones + clave + rationale).
3. Traducir/resumir cada lote a `/tmp/exp_out/<MODEL>.json` (`id → explicación en español`, 50–90 palabras).
4. `node tools/apply_explanations.mjs` → aplica a `data/questions.js` y propaga a las EX alineadas.
5. `./tools/audit_all.sh` para confirmar 0 plantillas y 0 advertencias.

Blueprint oficial: `data/blueprint.js`. Lo usan el portal (`app.js`) y `check_exam.mjs`, así que una sola fuente manda.
