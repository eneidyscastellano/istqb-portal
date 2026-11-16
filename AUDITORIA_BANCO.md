# Auditoría del banco — ISTQB CTFL v4.0.1

Generado: 2026-11-16T22:13:21.269Z

## Veredicto

| # | Criterio | Estado |
|---|---|---|
| S01 | Cada pregunta tiene id, LO, K-level, tipo, opciones, respuesta y explicación | **PASS** |
| S02 | Todas las respuestas apuntan a opciones existentes (sin índices fuera de rango) | **PASS** |
| S03 | Todas las preguntas mapean a un LO oficial del syllabus v4.0.1 | **PASS** |
| S04 | Cobertura de los 64 LO oficiales | **PASS** |
| S05 | El banco puede armar un examen con blueprint oficial (8/6/4/11/9/2 y K1=8/K2=24/K3=8) | **PASS** |
| S06 | El simulador "Examen completo" respeta el blueprint (8/6/4/11/9/2 y K1=8/K2=24/K3=8) | **PASS** |
| S07 | Umbral de aprobación 26/40 (65%), 60 min y +25% (75 min) según el estándar | **PASS** |
| S08 | Explicaciones didácticas (no plantilla "Respuesta correcta: X") | **PASS** |

## Banco

- Preguntas: **279**
- Por modelo: A=40 · B=40 · C=40 · D=40 · S3=40 · S4=40 · EX=39
- Por nivel: K1=54 · K2=170 · K3=55
- Por tipo: single=270 · multi=9

## Cobertura por capítulo vs blueprint oficial

| Cap | Oficial | Banco | K1 banco/oficial | K2 | K3 | LO cubiertos |
|---|---|---|---|---|---|---|
| 1 | 8 | 48 | 12/2 | 36/6 | 0/0 | 14/14 |
| 2 | 6 | 36 | 12/2 | 24/4 | 0/0 | 10/10 |
| 3 | 4 | 24 | 12/2 | 12/2 | 0/0 | 8/8 |
| 4 | 11 | 66 | 0/0 | 36/6 | 30/5 | 14/14 |
| 5 | 9 | 54 | 6/1 | 30/5 | 18/3 | 16/16 |
| 6 | 2 | 12 | 6/1 | 6/1 | 0/0 | 2/2 |

## Hallazgos estructurales

- Preguntas con error: **0** · con advertencia: **0**
- Explicaciones plantilla: **0**
- Grupos de enunciados duplicados: **27**

### Enunciados duplicados

- A-001, EX-001 — ¿Cuál de las siguientes afirmaciones describe un objetivo de prueba válido?…
- A-002, EX-002 — ¿Cuál de las siguientes opciones muestra un ejemplo de actividades de prueba que contribuyen al éxito?…
- A-006, EX-005 — ¿Cuáles DOS de las siguientes tareas pertenecen PRINCIPALMENTE a un rol de pruebas?…
- A-008, EX-007 — ¿Cómo se presenta el enfoque de equipo completo en las interacciones entre los probadores y los representantes del negocio?…
- B-006, EX-027 — ¿Cuál de las siguientes afirmaciones es un ejemplo CORRECTO del valor de la trazabilidad?…
- C-001, D-001 — ¿Cuál de los siguientes es un objetivo típico de las pruebas?…
- C-007, D-007 — ¿Cuál de las siguientes es una ventaja del enfoque de equipo completo?…
- C-008, EX-028 — ¿Cuál de las siguientes afirmaciones sobre la independencia de las pruebas es CORRECTA?…
- A-010, EX-008 — ¿Cuál de las siguientes afirmaciones describe MEJOR el enfoque de desarrollo guiado por pruebas de aceptación (ATDD)?…
- A-012, EX-010 — ¿Cuál de los siguientes argumentos usaría para convencer a su gerente de organizar retrospectivas al final de cada ciclo de liberación?…
- A-014, EX-011 — Está probando una historia de usuario con tres criterios de aceptación: AC1, AC2 y AC3. AC1 está cubierto por el caso de prueba TC1, AC2 por…
- B-010, C-009, D-009 — ¿Cuál de las siguientes es una buena práctica de pruebas que aplica a todos los ciclos de vida de desarrollo de software?…
- B-011, C-010 — ¿Cuál de los siguientes es un ejemplo de un enfoque de desarrollo guiado por pruebas (test-first)?…
- B-014, EX-036 — ¿Cuál de las siguientes afirmaciones es CORRECTA?…
- S3-009, S4-009 — ¿Cuál de los siguientes es un ejemplo de una buena práctica de pruebas?…
- A-015, EX-012 — ¿Cuál de los siguientes NO es un beneficio de las pruebas estáticas?…
- A-017, EX-013 — Las revisiones que se utilizan en tu organización tienen los siguientes atributos: • Existe el rol de un escriba • El propósito principal es…
- B-016, C-016 — ¿Cuál de los siguientes es un beneficio de la retroalimentación temprana y frecuente de las partes interesadas?…
- A-022, EX-016 — Su tienda favorita de alquiler diario de bicicletas acaba de introducir un nuevo sistema de gestión de relaciones con los clientes y le pidi…
- A-023, EX-017 — Prueba un sistema cuyo ciclo de vida está modelado por el diagrama de transición de estados que se muestra a continuación. El sistema comien…
- A-024, EX-018 — Su suite de pruebas alcanzó el 100% de cobertura de sentencias. ¿Cuál es la consecuencia de este hecho?…
- A-029, EX-021 — Considere la siguiente historia de usuario: Como Editor quiero revisar el contenido antes de que se publique para poder asegurar que la gram…
- A-030, EX-022 — ¿Cómo agregan valor los probadores a la planificación de iteraciones y liberaciones?…
- A-031, EX-023 — ¿Cuáles DOS de las siguientes opciones son los criterios de salida para probar un sistema?…
- A-038, EX-025 — Recibió el siguiente informe de defectos de los desarrolladores indicando que la anomalía descrita en este informe de pruebas no es reproduc…
- S3-033, S4-033 — ¿Cuál de los siguientes es un riesgo de proyecto?…
- B-040, C-040 — ¿Cuál de los siguientes es MÁS probable que sea un beneficio de la automatización de pruebas?…

## Blueprint factible por modelo

| Modelo | Preguntas | ¿Examen oficial posible? |
|---|---|---|
| A | 40 | Sí |
| B | 40 | Sí |
| C | 40 | Sí |
| D | 40 | Sí |
| S3 | 40 | Sí |
| S4 | 40 | Sí |
| EX | 39 | No |
## Verificación contra las claves oficiales (PDFs)

```

A (ISTQB_CTFL_v4.0_Sample-Exam-A-Answers_v1.7.pdf)
  clave oficial parseada: 40/40 · preguntas del banco: 40
  ✓ todas coinciden (respuesta, LO y K-level)

B (ISTQB_CTFL_v4.0_Sample-Exam-B-Answers_v1.7.pdf)
  clave oficial parseada: 40/40 · preguntas del banco: 40
  ✓ todas coinciden (respuesta, LO y K-level)

C (ISTQB_CTFL_v4.0_Sample-Exam-C-Answers_v1.6.pdf)
  clave oficial parseada: 40/40 · preguntas del banco: 40
  ✓ todas coinciden (respuesta, LO y K-level)

D (ISTQB_CTFL_v4.0_Sample-Exam-D-Answers_v1.5.pdf)
  clave oficial parseada: 40/40 · preguntas del banco: 40
  ✓ todas coinciden (respuesta, LO y K-level)

S3 (CTFL-4.0.1_Sample-Answers-3.pdf)
  clave oficial parseada: 40/40 · preguntas del banco: 40
  ✓ todas coinciden (respuesta, LO y K-level)

S4 (CTFL-4.0.1_Sample-Answers-4.pdf)
  clave oficial parseada: 40/40 · preguntas del banco: 40
  ✓ todas coinciden (respuesta, LO y K-level)

Total discrepancias: 0
```

