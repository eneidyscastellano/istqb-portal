/* ============================================================
   ISTQB CTFL — Banco de preguntas
   Edita este archivo para agregar/quitar preguntas.
   Formato:
   {
     id: "ch1-001",              // único
     topic: "1.2.3",             // sección del syllabus
     level: "K1",                // K1 | K2 | K3
     type: "single",             // "single" o "multi"
     question: "texto",
     options: ["A", "B", "C", "D"],
     answer: [1],                // índices correctos (0 = A)
     explanation: "por qué"
   }
   ============================================================ */

window.ISTQB_DATA = {
  exam: "ISTQB CTFL v4.0.1",
  chapters: [
    {
      id: 1,
      title: "Fundamentos del testing",
      short: "Fundamentos",
      weight: 20,
      questions: [
        {
          id: "ch1-001",
          topic: "1.2.3",
          level: "K1",
          type: "single",
          question: "¿Cuál es la diferencia entre error, defecto y falla?",
          options: [
            "Error = falla en ejecución; defecto = acción humana; falla = imperfección del producto.",
            "Error = acción humana; defecto = imperfección en el producto; falla = manifestación en ejecución.",
            "Son sinónimos.",
            "Error = bug; defecto = falla; falla = error."
          ],
          answer: [1],
          explanation: "La cadena es error humano → defecto en el producto → falla cuando se ejecuta."
        },
        {
          id: "ch1-002",
          topic: "1.2.2",
          level: "K2",
          type: "single",
          question: "¿Cuál afirmación sobre QA y testing es correcta?",
          options: [
            "QA y testing son exactamente lo mismo.",
            "QA se orienta al proceso y busca prevenir defectos; testing se orienta al producto y busca detectarlos.",
            "Testing busca prevenir y QA busca detectar.",
            "QA solo se ejecuta al final del proyecto."
          ],
          answer: [1],
          explanation: "QA es prevención sobre el proceso; testing es detección sobre el producto."
        },
        {
          id: "ch1-003",
          topic: "1.1.2",
          level: "K2",
          type: "single",
          question: "¿Qué hace el debugging?",
          options: [
            "Encuentra fallas y las reporta.",
            "Analiza y corrige el defecto que causó una falla.",
            "Revisa los requisitos del usuario.",
            "Mide la cobertura de código."
          ],
          answer: [1],
          explanation: "El testing encuentra fallas; el debugging analiza y corrige el defecto."
        }
      ]
    },
    {
      id: 2,
      title: "Ciclo de vida del desarrollo de software",
      short: "SDLC",
      weight: 15,
      questions: [
        {
          id: "ch2-001",
          topic: "2.1.2",
          level: "K2",
          type: "single",
          question: "¿Qué modelo empareja cada fase de desarrollo con una fase de prueba?",
          options: ["Cascada", "Modelo V", "Scrum", "Kanban"],
          answer: [1],
          explanation: "El modelo V tiene una fase de prueba espejo para cada fase de desarrollo."
        },
        {
          id: "ch2-002",
          topic: "2.2.2",
          level: "K2",
          type: "single",
          question: "¿Qué nivel de prueba se enfoca en las interfaces entre componentes?",
          options: ["Componente", "Integración de componentes", "Sistema", "Aceptación"],
          answer: [1],
          explanation: "La integración de componentes prueba las interfaces entre piezas."
        }
      ]
    },
    {
      id: 3,
      title: "Pruebas estáticas",
      short: "Estáticas",
      weight: 10,
      questions: [
        {
          id: "ch3-001",
          topic: "3.2.2",
          level: "K2",
          type: "single",
          question: "¿Cuál es la revisión más formal?",
          options: ["Revisión informal", "Walkthrough", "Revisión técnica", "Inspección"],
          answer: [3],
          explanation: "La inspección es la más formal: roles definidos, checklist, métricas y criterios de entrada/salida."
        },
        {
          id: "ch3-002",
          topic: "3.1.1",
          level: "K1",
          type: "single",
          question: "¿Cuál es un beneficio de las pruebas estáticas?",
          options: [
            "Detectan defectos antes de ejecutar el software.",
            "Miden el rendimiento en producción.",
            "Requieren un entorno de pruebas completo.",
            "Solo se aplican al código ejecutable."
          ],
          answer: [0],
          explanation: "Las pruebas estáticas encuentran defectos temprano, sin ejecutar el software."
        }
      ]
    },
    {
      id: 4,
      title: "Análisis y diseño de pruebas",
      short: "Análisis y diseño",
      weight: 27.5,
      questions: [
        {
          id: "ch4-001",
          topic: "4.2.2",
          level: "K3",
          type: "single",
          question: "Un campo acepta edades de 18 a 65 inclusive. Con BVA de 2 valores, ¿cuántos valores límite hay?",
          options: ["2", "4", "3", "6"],
          answer: [1],
          explanation: "Los valores límite son 17, 18, 65 y 66: cuatro."
        },
        {
          id: "ch4-002",
          topic: "4.2.1",
          level: "K3",
          type: "single",
          question: "Misma regla (18–65). ¿Cuántos casos mínimos cubren las particiones de equivalencia válidas e inválidas?",
          options: ["1", "2", "3", "4"],
          answer: [2],
          explanation: "Tres particiones: <18, 18–65 y >65. Un caso por partición."
        },
        {
          id: "ch4-003",
          topic: "4.2.3",
          level: "K2",
          type: "single",
          question: "¿Cuándo es más útil una tabla de decisión?",
          options: [
            "Cuando hay muchas combinaciones de condiciones.",
            "Cuando solo hay un camino posible.",
            "Cuando el sistema no guarda estado.",
            "Cuando no hay reglas de negocio."
          ],
          answer: [0],
          explanation: "La tabla de decisión modela combinaciones de condiciones y acciones."
        }
      ]
    },
    {
      id: 5,
      title: "Gestión de las actividades de prueba",
      short: "Gestión",
      weight: 22.5,
      questions: [
        {
          id: "ch5-001",
          topic: "5.2.3",
          level: "K2",
          type: "single",
          question: "La priorización de casos basada en riesgo busca:",
          options: [
            "Ejecutar todos los casos.",
            "Reducir el riesgo residual del producto.",
            "Aumentar el número de casos.",
            "Eliminar las pruebas de regresión."
          ],
          answer: [1],
          explanation: "Se prioriza lo de mayor riesgo para reducirlo primero."
        },
        {
          id: "ch5-002",
          topic: "5.1.3",
          level: "K2",
          type: "single",
          question: "¿Cuál es un criterio de salida?",
          options: [
            "El entorno de prueba está listo.",
            "El probador puede iniciar sesión.",
            "Se alcanza la densidad de defectos estimada.",
            "Los requisitos se traducen a Given/When/Then."
          ],
          answer: [2],
          explanation: "La densidad de defectos es una métrica de salida; el entorno y el login son criterios de entrada."
        }
      ]
    },
    {
      id: 6,
      title: "Herramientas de prueba",
      short: "Herramientas",
      weight: 5,
      questions: [
        {
          id: "ch6-001",
          topic: "6.1.1",
          level: "K2",
          type: "single",
          question: "¿Cuál es un beneficio de las herramientas de testing?",
          options: [
            "Reemplazan completamente al tester.",
            "Aumentan la consistencia y reducen el trabajo repetitivo.",
            "Garantizan cero defectos.",
            "Eliminan la necesidad de pruebas exploratorias."
          ],
          answer: [1],
          explanation: "Las herramientas ayudan con consistencia y tareas repetitivas, pero no sustituyen el juicio del tester."
        }
      ]
    }
  ]
};
