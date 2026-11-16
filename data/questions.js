/* Banco oficial + simulacro ExamUnit — ISTQB CTFL v4.0.1. Preguntas en español. */
window.ISTQB_DATA = {
  "exam": "ISTQB CTFL v4.0.1",
  "language": "es",
  "chapters": [
    {
      "id": 1,
      "title": "Fundamentos del testing",
      "short": "Fundamentos",
      "weight": 20,
      "questions": [
        {
          "id": "A-001",
          "topic": "FL-1.1.1",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones describe un objetivo de prueba válido?",
          "options": [
            "Demostrar que no hay defectos sin corregir en el sistema bajo prueba",
            "Demostrar que no habrá fallas después de la implementación del sistema en producción",
            "Reducir el nivel de riesgo del objeto de prueba y generar confianza en el nivel de calidad",
            "Verificar que no hay combinaciones de entradas sin probar"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Las pruebas encuentran defectos y fallas, lo que reduce el nivel de riesgo y a la vez genera más confianza en la calidad del objeto de prueba. A y B son imposibles de demostrar: no se puede probar que no queda ningún defecto ni que no habrá fallas en producción. D también es inviable, porque probar todas las combinaciones de entradas no es factible.",
          "source": "Sample Exam A #1",
          "lang": "es"
        },
        {
          "id": "A-002",
          "topic": "FL-1.2.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes opciones muestra un ejemplo de actividades de prueba que contribuyen al éxito?",
          "options": [
            "Involucrar a los probadores durante las diversas actividades del ciclo de vida de desarrollo de software (SDLC) ayuda a detectar defectos en los productos de trabajo",
            "Los probadores intentan no molestar a los desarrolladores mientras codifican, para que los desarrolladores escriban mejor código",
            "La colaboración de los probadores con los usuarios finales ayuda a mejorar la calidad de los informes de defectos durante las pruebas de integración de componentes y de sistema",
            "Los probadores certificados diseñarán casos de prueba mucho mejores que los probadores no certificados"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Involucrar a los probadores desde el inicio del ciclo de vida aumenta la comprensión de las decisiones de diseño y permite detectar defectos temprano en los productos de trabajo. B es errónea porque desarrolladores y probadores deben entenderse mutuamente; C falla porque los usuarios finales no participan en niveles bajos ni mejoran los informes de defectos; D es falsa, pues certificarse no garantiza mejores casos de prueba.",
          "source": "Sample Exam A #2",
          "lang": "es"
        },
        {
          "id": "A-003",
          "topic": "FL-1.3.1",
          "level": "K2",
          "type": "single",
          "question": "Has sido asignado como probador a un equipo que produce un nuevo sistema de forma incremental. Has notado que no se han realizado cambios en los casos de prueba de regresión existentes durante varias iteraciones y no se identificaron nuevos defectos de regresión. Tu gerente está contento, pero tú no. ¿Qué principio de prueba explica tu escepticismo?",
          "options": [
            "Las pruebas se desgastan",
            "Falacia de ausencia de defectos",
            "Los defectos se agrupan",
            "Las pruebas exhaustivas son imposibles"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Repetir una y otra vez los mismos casos de regresión hace que dejen de encontrar defectos nuevos: las pruebas se desgastan, y eso explica tu escepticismo. B se refiere a creer que corregir muchos defectos garantiza el éxito; C trata de la concentración de defectos en pocos componentes; D afirma que probar todas las combinaciones no es factible. Ninguna explica la ausencia de defectos nuevos.",
          "source": "Sample Exam A #3",
          "lang": "es"
        },
        {
          "id": "A-004",
          "topic": "FL-1.4.1",
          "level": "K2",
          "type": "single",
          "question": "Trabajas en un equipo que desarrolla una aplicación móvil para pedir comida. En la iteración actual el equipo decidió implementar la funcionalidad de pago. ¿Cuál de las siguientes actividades es parte del análisis de pruebas?",
          "options": [
            "Estimar que probar la integración con el servicio de pago tomará 8 días-persona",
            "Decidir que el equipo debe probar si es posible compartir correctamente el pago entre muchos usuarios",
            "Usar análisis de valores límite (BVA) para derivar los datos de prueba para los casos de prueba que verifican el procesamiento correcto del pago para el monto mínimo permitido a pagar",
            "Analizar la discrepancia entre el resultado real y el resultado esperado después de ejecutar un caso de prueba que verifica el proceso de pago con tarjeta de crédito, y reportar un defecto"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Decidir que hay que probar si el pago se comparte correctamente entre varios usuarios es definir una condición de prueba, actividad propia del análisis de pruebas. A corresponde a la planificación, por la estimación del esfuerzo; C al diseño, donde se derivan datos con BVA; D a la ejecución, donde se compara el resultado real con el esperado y se reporta el defecto.",
          "source": "Sample Exam A #4",
          "lang": "es"
        },
        {
          "id": "A-005",
          "topic": "FL-1.4.2",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes factores tiene una influencia SIGNIFICATIVA en el enfoque de pruebas? i.       El SDLC ii.       El número de defectos detectados en proyectos anteriores iii.       Los riesgos de producto identificados iv.        Nuevos requisitos regulatorios que obligan a realizar pruebas de caja blanca formales v.        La configuración del entorno de pruebas",
          "options": [
            "i, ii tienen influencia significativa",
            "i, iii, iv tienen influencia significativa",
            "ii, iv, v tienen influencia significativa",
            "iii, v tienen influencia significativa"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. El SDLC, los riesgos de producto identificados y los requisitos regulatorios influyen significativamente en el enfoque de pruebas. El número de defectos de proyectos anteriores puede influir algo, pero no de forma significativa, y la configuración del entorno de pruebas tampoco es un factor significativo. Las demás combinaciones incluyen alguno de esos dos elementos que no cumplen el criterio.",
          "source": "Sample Exam A #5",
          "lang": "es"
        },
        {
          "id": "A-006",
          "topic": "FL-1.4.5",
          "level": "K2",
          "type": "multi",
          "question": "¿Cuáles DOS de las siguientes tareas pertenecen PRINCIPALMENTE a un rol de pruebas?",
          "options": [
            "Configurar entornos de prueba",
            "Mantener el backlog del producto",
            "Diseñar soluciones para nuevos requisitos",
            "Crear el plan de pruebas",
            "Analizar la base de prueba"
          ],
          "answer": [
            0,
            4
          ],
          "explanation": "Correctas: A y E. Configurar entornos de prueba y analizar la base de prueba son tareas técnicas del rol de pruebas, esta última como parte del análisis de pruebas. B corresponde al propietario del producto, que construye y mantiene el backlog; C lo hace el equipo de desarrollo al diseñar soluciones; D es una tarea de gestión, propia de un rol gerencial.",
          "source": "Sample Exam A #6",
          "lang": "es"
        },
        {
          "id": "A-007",
          "topic": "FL-1.5.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuáles de las siguientes habilidades (i-v) son las habilidades MÁS importantes de un probador? i.       Tener conocimiento del dominio ii.       Crear una visión del producto iii.       Ser un buen jugador de equipo iv.        Planificar y organizar el trabajo del equipo v.        Pensamiento crítico",
          "options": [
            "ii y iv son importantes",
            "i, iii y v son importantes",
            "i, ii y v son importantes",
            "iii y iv son importantes"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. El conocimiento del dominio, ser un buen jugador de equipo y el pensamiento crítico son las habilidades más importantes de un probador. Crear una visión del producto corresponde al analista de negocio junto con el representante del negocio, y planificar y organizar el trabajo del equipo es tarea del gerente de pruebas o del equipo completo, no del probador.",
          "source": "Sample Exam A #7",
          "lang": "es"
        },
        {
          "id": "A-008",
          "topic": "FL-1.5.2",
          "level": "K1",
          "type": "single",
          "question": "¿Cómo se presenta el enfoque de equipo completo en las interacciones entre los probadores y los representantes del negocio?",
          "options": [
            "Los representantes del negocio deciden sobre los enfoques de automatización de pruebas",
            "Los probadores ayudan a los representantes del negocio a definir una estrategia de pruebas",
            "Los representantes del negocio no forman parte del enfoque de equipo completo",
            "Los probadores ayudan a los representantes del negocio a crear pruebas de aceptación adecuadas"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. En el enfoque de equipo completo los probadores colaboran estrechamente con los representantes del negocio para alcanzar los niveles de calidad deseados, lo que incluye apoyarlos a crear pruebas de aceptación adecuadas. A es falsa porque el enfoque de automatización lo definen los probadores con ayuda de desarrolladores y negocio; B también, pues la estrategia se decide con los desarrolladores; C es incorrecta porque el negocio sí forma parte.",
          "source": "Sample Exam A #8",
          "lang": "es"
        },
        {
          "id": "B-001",
          "topic": "FL-1.2.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes es un ejemplo de por qué son necesarias las pruebas?",
          "options": [
            "Las pruebas dinámicas aumentan la calidad al provocar que los objetos de prueba fallen de maneras que los usuarios nunca podrían lograr",
            "Las pruebas estáticas son usadas por los desarrolladores para identificar fallas en su código antes de lo que se puede lograr mediante pruebas dinámicas",
            "El análisis estático proporciona evidencia a los clientes de que los elementos del sistema que no proporcionan salidas son aptos para su liberación",
            "Las revisiones aumentan la calidad de las especificaciones de requisitos y conllevan a que se necesiten menos cambios en los productos de trabajo derivados"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Las revisiones son pruebas estáticas aplicables desde el inicio del ciclo de vida y detectan defectos en los requisitos antes de que se propaguen al diseño o al código, con lo que se evitan cambios costosos en los productos derivados. Las demás opciones fallan en el concepto o en el valor: provocar fallos que ningún usuario real lograría no aporta mejora práctica, el análisis estático detecta defectos y no fallos, y esa evidencia se dirige al desarrollador, no al cliente.",
          "source": "Sample Exam B #1",
          "lang": "es"
        },
        {
          "id": "B-002",
          "topic": "FL-1.2.2",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones sobre el aseguramiento de la calidad (QA) y/o el control de calidad (QC) es correcta?",
          "options": [
            "El QA se realiza como parte de las pruebas",
            "Las pruebas se realizan como parte del QC",
            "Las pruebas son otro término para QC",
            "Las pruebas se realizan como parte del QA"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. El control de calidad se centra en detectar y corregir defectos del producto, y las pruebas son una parte importante de ese control. El aseguramiento de la calidad, en cambio, es preventivo y trabaja sobre la mejora del proceso, por lo que las pruebas no forman parte de él ni lo sustituyen; además, el control de calidad incluye técnicas ajenas a las pruebas, como la simulación o la verificación formal.",
          "source": "Sample Exam B #2",
          "lang": "es"
        },
        {
          "id": "B-003",
          "topic": "FL-1.3.1",
          "level": "K2",
          "type": "single",
          "question": "Uno de los ‘principios de las pruebas’ establece que las pruebas exhaustivas son imposibles. ¿Cuál de los siguientes es un ejemplo de cómo abordar este principio en la práctica?",
          "options": [
            "Crear casos de prueba que cubran cada salida especificada posible",
            "Documentar todas las variaciones posibles de entrada de prueba y priorizarlas según su importancia",
            "Comenzar las pruebas lo antes posible con revisiones y otros enfoques de pruebas estáticas",
            "Usar partición de equivalencia y análisis de valores límite para generar casos de prueba"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. La partición de equivalencia y el análisis de valores límite permiten derivar de forma sistemática un subconjunto finito y representativo de todos los casos posibles, que es justo la respuesta práctica a la imposibilidad de probarlo todo. Las otras opciones no atienden el problema: cubrir todas las salidas o documentar todas las variaciones de entrada es inviable, y empezar antes con revisiones responde al principio de pruebas tempranas.",
          "source": "Sample Exam B #3",
          "lang": "es"
        },
        {
          "id": "B-004",
          "topic": "FL-1.4.1",
          "level": "K2",
          "type": "single",
          "question": "¿Qué actividad de prueba involucra trabajar con requisitos de datos de prueba, condiciones de prueba, requisitos del entorno de prueba y casos de prueba?",
          "options": [
            "Diseño de pruebas",
            "Ejecución de pruebas",
            "Análisis de pruebas",
            "Implementación de pruebas"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. El diseño de pruebas parte de las condiciones de prueba para crear casos y otro testware, y en esa actividad se especifican los requisitos de datos y de entorno necesarios. El análisis se queda en identificar condiciones; la implementación genera procedimientos y suites a partir de casos ya diseñados, y la ejecución solo corre esos procedimientos. Ninguna de las otras tres actividades abarca el conjunto de elementos mencionado.",
          "source": "Sample Exam B #4",
          "lang": "es"
        },
        {
          "id": "B-005",
          "topic": "FL-1.4.2",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes es MÁS probable que impacte cómo se realizan las pruebas para un objeto de prueba dado?",
          "options": [
            "El nivel promedio de experiencia del equipo de marketing de la organización",
            "El conocimiento de los usuarios de que se está desarrollando un nuevo sistema para ellos",
            "El número de años de experiencia de los miembros del equipo de pruebas",
            "La estructura organizacional del usuario final para una aplicación comercial de streaming de música"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. La experiencia de los miembros del equipo de pruebas determina sus capacidades y conocimientos, por ejemplo qué herramientas y qué tipos de defectos saben abordar, y eso influye directamente en cómo se prueba. La experiencia del equipo de marketing, el conocimiento de los usuarios sobre el proyecto o la estructura organizacional del usuario final no condicionan la ejecución de las pruebas de un objeto de prueba concreto.",
          "source": "Sample Exam B #5",
          "lang": "es"
        },
        {
          "id": "B-006",
          "topic": "FL-1.4.4",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones es un ejemplo CORRECTO del valor de la trazabilidad?",
          "options": [
            "La trazabilidad entre los riesgos mitigados y los casos de prueba que pasaron proporciona un medio para determinar el nivel de riesgo residual",
            "La trazabilidad entre los requisitos del usuario y los resultados de las pruebas proporciona un medio para medir el progreso del proyecto frente a los objetivos del negocio",
            "La trazabilidad entre los probadores y los casos de prueba que fallaron proporciona un medio para determinar el nivel de habilidad de los probadores",
            "La trazabilidad entre los riesgos identificados y las condiciones de prueba escritas proporciona un medio para determinar qué riesgos vale la pena probar"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. La trazabilidad entre requisitos de usuario y resultados de prueba muestra qué requisitos ya se probaron y permite medir el avance del proyecto frente a los objetivos del negocio. Relacionar solo riesgos mitigados con casos aprobados no permite calcular el riesgo residual, que exige vincular todos los riesgos con los resultados; asociar probadores con casos fallidos no mide habilidad, y decidir qué riesgos merecen prueba pertenece a la gestión de riesgos.",
          "source": "Sample Exam B #6",
          "lang": "es"
        },
        {
          "id": "B-007",
          "topic": "FL-1.5.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes es MÁS probable que sea un ejemplo de un probador usando una habilidad genérica al probar?",
          "options": [
            "El profundo conocimiento del probador sobre una variedad de videojuegos hizo que se llevara bien con uno de los desarrolladores que también era aficionado a los videojuegos",
            "El probador era un ex piloto y pudo comprender mejor los criterios de aceptación para el sistema de control del helicóptero",
            "El probador trabajó anteriormente como programador y usó sus habilidades en esta área para comunicarse mejor con los analistas de negocio",
            "El probador tuvo mucho cuidado de no cometer errores cuando generó metódicamente casos de prueba antes de comenzar su sesión de pruebas exploratorias"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. El conocimiento del dominio es una habilidad genérica del probador: le permite entender y comunicarse con usuarios y representantes del negocio, y aquí comprender mejor los criterios de aceptación del sistema de control. Compartir afición por los videojuegos no es una habilidad de prueba, las habilidades de programación no mejoran la comunicación con analistas de negocio, y en pruebas exploratorias los casos se generan durante la sesión, no antes.",
          "source": "Sample Exam B #7",
          "lang": "es"
        },
        {
          "id": "B-008",
          "topic": "FL-1.5.2",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de los siguientes es una ventaja del enfoque de equipo completo?",
          "options": [
            "Permite que los miembros del equipo asuman cualquier rol en cualquier momento",
            "Solo necesita un único equipo para apoyar el proyecto de desarrollo completo",
            "Incorpora a los representantes del negocio junto a los desarrolladores en el mismo equipo",
            "Genera una sinergia de equipo que beneficia a todo el proyecto"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. El enfoque de equipo completo aprovecha los distintos conjuntos de habilidades de sus miembros y genera sinergia, comunicación sólida y colaboración que benefician a todo el proyecto. No implica que cualquiera pueda asumir cualquier rol en cualquier momento, ni que baste un solo equipo para todo el proyecto, ni exige que el representante del negocio participe en cada decisión importante.",
          "source": "Sample Exam B #8",
          "lang": "es"
        },
        {
          "id": "C-001",
          "topic": "FL-1.1.1",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de los siguientes es un objetivo típico de las pruebas?",
          "options": [
            "Validar que se cumplen los requisitos documentados",
            "Provocar fallas e identificar defectos",
            "Iniciar errores e identificar causas raíz",
            "Verificar que el objeto de prueba cumple las expectativas del usuario"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Provocar fallas para descubrir defectos es el objetivo más habitual de las pruebas dinámicas, pues al ejecutar el software se manifiestan los defectos latentes. Las demás confunden verificación con validación: validar requisitos documentados (A) y verificar expectativas del usuario (D) están invertidos. Además, los errores no los inician los probadores y la causa raíz pertenece a la depuración, no a las pruebas (C).",
          "source": "Sample Exam C #1",
          "lang": "es"
        },
        {
          "id": "C-002",
          "topic": "FL-1.1.2",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones describe MEJOR la diferencia entre pruebas y depuración?",
          "options": [
            "Las pruebas provocan fallas mientras que la depuración corrige fallas",
            "Las pruebas son una actividad negativa mientras que la depuración es una actividad positiva",
            "Las pruebas determinan que existen defectos mientras que la depuración elimina defectos",
            "Las pruebas encuentran la causa de los defectos mientras que la depuración corrige la causa de los defectos"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Las pruebas revelan que existen defectos, ya sea observándolos directamente en revisiones o análisis estático, o provocando fallas al ejecutar el software; la depuración localiza y elimina esos defectos. No es correcto decir que la depuración corrige fallas (A), que una actividad sea negativa (B), ni que las pruebas hallen la causa de los defectos, que son errores humanos (D): la depuración corrige defectos, no causas.",
          "source": "Sample Exam C #2",
          "lang": "es"
        },
        {
          "id": "C-003",
          "topic": "FL-1.3.1",
          "level": "K2",
          "type": "single",
          "question": "La 'falacia de la ausencia de defectos' es uno de los principios de las pruebas. ¿Cuál de los siguientes es un ejemplo de abordar este principio en la práctica?",
          "options": [
            "Explicar que no es posible que las pruebas demuestren la ausencia de defectos",
            "Apoyar a los usuarios finales para que realicen pruebas de aceptación",
            "Asegurar que no queden defectos de implementación en el sistema entregado",
            "Modificar las pruebas que no provocan fallas para asegurar que queden pocos defectos"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. La falacia de la ausencia de defectos señala que cumplir los requisitos no garantiza satisfacer al usuario; por eso apoyar a los usuarios finales en pruebas de aceptación permite validar necesidades y expectativas reales. Explicar que no se puede demostrar ausencia de defectos (A) atiende otro principio, asegurar cero defectos (C) es imposible y modificar pruebas infructuosas (D) responde al principio de que las pruebas se agotan.",
          "source": "Sample Exam C #3",
          "lang": "es"
        },
        {
          "id": "C-004",
          "topic": "FL-1.4.1",
          "level": "K2",
          "type": "multi",
          "question": "¿Cuáles de las siguientes actividades de prueba son MÁS propensas a involucrar la aplicación de análisis de valores límite y partición de equivalencia?",
          "options": [
            "Implementación de pruebas",
            "Diseño de pruebas",
            "Ejecución de pruebas",
            "Monitoreo de pruebas",
            "Análisis de pruebas"
          ],
          "answer": [
            1,
            4
          ],
          "explanation": "Correctas: B y E. Las técnicas de caja negra como valores límite y partición de equivalencia se aplican al identificar condiciones de prueba durante el análisis y al derivar casos de prueba durante el diseño. Implementación (A) arma procedimientos, ejecución (C) corre pruebas y monitoreo (D) verifica el avance del plan; ninguna de esas actividades crea casos de prueba.",
          "source": "Sample Exam C #4",
          "lang": "es"
        },
        {
          "id": "C-005",
          "topic": "FL-1.4.3",
          "level": "K2",
          "type": "single",
          "question": "Dado el siguiente testware: 1. Elementos de cobertura 2. Solicitudes de cambio 3. Cronograma de ejecución de pruebas 4. Condiciones de prueba priorizadas Y las siguientes actividades de prueba A. Análisis de pruebas B. Diseño de pruebas C. Implementación de pruebas D. Finalización de pruebas ¿Cuál de las siguientes muestra MEJOR el testware producido por las actividades?",
          "options": [
            "1B, 2D, 3C, 4A",
            "1B, 2D, 3A, 4C",
            "1D, 2C, 3A, 4B",
            "1D, 2C, 3B, 4A"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Los elementos de cobertura se producen en el diseño, las solicitudes de cambio al cierre, el cronograma de ejecución en la implementación y las condiciones priorizadas en el análisis. Las demás combinaciones asignan mal al menos un producto: por ejemplo, sitúan el cronograma en el análisis o los elementos de cobertura en la finalización, que no los genera.",
          "source": "Sample Exam C #5",
          "lang": "es"
        },
        {
          "id": "C-006",
          "topic": "FL-1.4.5",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones sobre los diferentes roles de prueba es MÁS probable que sea CORRECTA?",
          "options": [
            "En el desarrollo de software Agile, el rol de gestión de pruebas es responsabilidad principal del equipo, mientras que el rol de pruebas es responsabilidad principal de un solo individuo externo al equipo",
            "El rol de pruebas es responsable principalmente del monitoreo y control de pruebas, mientras que el rol de gestión de pruebas es responsable principalmente de la planificación y finalización de pruebas",
            "En el desarrollo de software Agile, las actividades de gestión de pruebas que abarcan múltiples equipos son manejadas por un gerente de pruebas externo al equipo, mientras que algunas tareas de gestión de pruebas son manejadas por el propio equipo",
            "El rol de gestión de pruebas es responsable principalmente del análisis y diseño de pruebas, mientras que el rol de pruebas es responsable principalmente de la implementación y ejecución de pruebas"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. En Agile el equipo asume varias tareas de gestión de pruebas, mientras que las actividades que abarcan varios equipos suelen recaer en un gerente de pruebas externo. La opción A niega el enfoque de equipo completo, B intercambia los roles y D atribuye al rol de gestión el análisis y diseño, que son responsabilidad del rol técnico de pruebas.",
          "source": "Sample Exam C #6",
          "lang": "es"
        },
        {
          "id": "C-007",
          "topic": "FL-1.5.2",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de las siguientes es una ventaja del enfoque de equipo completo?",
          "options": [
            "Equipos sin probadores",
            "Dinámica de equipo mejorada",
            "Miembros del equipo especialistas",
            "Tamaños de equipo más grandes"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. El enfoque de equipo completo aprovecha las habilidades diversas de todos sus miembros, lo que mejora la dinámica, la comunicación y la colaboración. No elimina probadores, pues estos aportan su experiencia (A); no se basa en especialistas (C), ya que cualquiera con la competencia puede asumir tareas; y no hay evidencia de que equipos más grandes sean mejores (D).",
          "source": "Sample Exam C #7",
          "lang": "es"
        },
        {
          "id": "C-008",
          "topic": "FL-1.5.3",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones sobre la independencia de las pruebas es CORRECTA?",
          "options": [
            "Los probadores independientes encontrarán defectos debido a su perspectiva técnica diferente a la de los desarrolladores, pero su independencia puede llevar a una relación adversarial con los desarrolladores",
            "La familiaridad de los desarrolladores con su propio código significa que solo encuentran unos pocos defectos en él, sin embargo, su formación compartida en software con los probadores significa que estos defectos también serían encontrados por los probadores",
            "Las pruebas independientes requieren probadores que estén fuera del equipo del desarrollador e idealmente de fuera de la organización, sin embargo, a estos probadores les resulta difícil entender el dominio de la aplicación",
            "Los probadores de fuera del equipo del desarrollador son más independientes que los probadores de dentro del equipo, pero es más probable que se culpe a los probadores de dentro del equipo por los retrasos en la liberación del producto"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Los probadores independientes, por su formación y perspectiva distintas, detectan fallas y defectos que los desarrolladores pasan por alto, aunque el aislamiento puede generar problemas de comunicación y una relación adversarial. B supone que la familiaridad impide hallar defectos, C exige independencia organizacional inexistente y D invierte quién suele ser culpado por los retrasos.",
          "source": "Sample Exam C #8",
          "lang": "es"
        },
        {
          "id": "D-001",
          "topic": "FL-1.1.1",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de los siguientes es un objetivo típico de las pruebas?",
          "options": [
            "Encontrar y corregir defectos en el objeto de prueba",
            "Mantener comunicaciones efectivas con los desarrolladores",
            "Validar que se han cumplido los requisitos legales",
            "Generar confianza en la calidad del objeto de prueba"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Generar confianza en la calidad del objeto de prueba es un objetivo típico de las pruebas, y se logra ejecutando pruebas que pasan y dando a los stakeholders información para decidir con fundamento. Identificar defectos sí es un objetivo, pero corregirlos no es una actividad de prueba; mantener comunicación con los desarrolladores es un medio útil, no una finalidad; y comprobar el cumplimiento de requisitos legales es verificación, mientras que la validación se centra en las necesidades de los usuarios.",
          "source": "Sample Exam D #1",
          "lang": "es"
        },
        {
          "id": "D-002",
          "topic": "FL-1.2.3",
          "level": "K2",
          "type": "single",
          "question": "Un diseñador documenta un diseño para una interfaz de usuario que no aborda adecuadamente a los usuarios con discapacidad porque el diseñador está cansado. El programador implementa la interfaz de usuario conforme al diseño, pero como trabaja bajo una severa presión de tiempo, no incluye un manejo adecuado de excepciones en su código de programa para los cálculos de bonificaciones. Cuando se utiliza el sistema en operación, algunos usuarios con discapacidad se quejan de la interfaz y posteriormente la autoridad reguladora pertinente multa a la empresa. Nadie nota que los cálculos de bonificaciones a veces son incorrectos. ¿Cuál de las siguientes afirmaciones es CORRECTA?",
          "options": [
            "El cálculo incorrecto de las bonificaciones es un defecto que ocurre ocasionalmente",
            "La multa recibida por no abordar a algunos usuarios con discapacidad es una falla",
            "El programador que trabaja bajo una severa presión de tiempo es una causa raíz",
            "El diseño de la interfaz de usuario incluye un error del diseñador"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. La presión de tiempo severa es la causa raíz, porque explica por qué el programador cometió el error que introdujo el defecto en el manejo de excepciones. El cálculo incorrecto de bonificaciones es una falla observable del sistema, no un defecto; la multa es la consecuencia de una falla y en sí misma refleja el funcionamiento correcto del sistema regulador; y la interfaz inadecuada es un defecto de diseño derivado del error del diseñador, no un error del diseñador.",
          "source": "Sample Exam D #2",
          "lang": "es"
        },
        {
          "id": "D-003",
          "topic": "FL-1.3.1",
          "level": "K2",
          "type": "single",
          "question": "Los probadores utilizan condiciones de prueba para generar casos de prueba y ejecutar pruebas. Aunque las condiciones de prueba permanecen iguales, los casos de prueba varían cada vez. ¿Cuál de los siguientes 'principios de las pruebas' se aborda mediante la variación de los casos de prueba?",
          "options": [
            "Las pruebas se desgastan",
            "Falacia de la ausencia de defectos",
            "Las pruebas tempranas ahorran tiempo y dinero",
            "Los defectos se agrupan"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. El principio de que las pruebas se desgastan advierte que repetir exactamente los mismos casos sobre código sin cambios difícilmente revelará defectos nuevos, por lo que conviene variarlos; generar casos distintos a partir de las mismas condiciones de prueba evita ese desgaste. La falacia de ausencia de defectos se refiere a la necesidad de validación, las pruebas tempranas al momento de iniciar, y el agrupamiento de defectos a su distribución desigual, ninguno relacionado con variar los casos.",
          "source": "Sample Exam D #3",
          "lang": "es"
        },
        {
          "id": "D-004",
          "topic": "FL-1.4.1",
          "level": "K2",
          "type": "single",
          "question": "Dadas las siguientes tareas de prueba: 1. Derivar casos de prueba a partir de condiciones de prueba 2. Identificar testware reutilizable 3. Organizar casos de prueba en procedimientos de prueba 4. Evaluar la base de prueba y el objeto de prueba Y las siguientes actividades de prueba: A. Análisis de pruebas B. Diseño de pruebas C. Implementación de pruebas D. Finalización de pruebas ¿Cuál de las siguientes opciones relaciona MEJOR las tareas con las actividades?",
          "options": [
            "1B, 2A, 3D, 4C",
            "1B, 2D, 3C, 4A",
            "1C, 2A, 3B, 4D",
            "1C, 2D, 3A, 4B"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Derivar casos desde condiciones de prueba corresponde al diseño de pruebas; identificar testware reutilizable corresponde a la finalización; organizar casos en procedimientos corresponde a la implementación; y evaluar la base de prueba y el objeto de prueba corresponde al análisis. Las demás opciones alteran ese orden, asignando por ejemplo la organización de procedimientos al análisis o la evaluación de la base de prueba al diseño, lo que contradice la definición de cada actividad.",
          "source": "Sample Exam D #4",
          "lang": "es"
        },
        {
          "id": "D-005",
          "topic": "FL-1.4.3",
          "level": "K2",
          "type": "single",
          "question": "Dado el siguiente testware: i.   Informe de finalización de pruebas ii.   Datos almacenados en una base de datos utilizados como entradas de prueba y resultados esperados iii.   La lista de elementos necesarios para construir el entorno de prueba iv.    Secuencias documentadas de casos de prueba en orden de ejecución v.    Casos de prueba ¿Cuál de las siguientes opciones muestra MEJOR el testware producido como resultado de realizar la implementación de pruebas?",
          "options": [
            "ii, iv",
            "iii, v",
            "i, ii, v",
            "i, iii, iv"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. La implementación de pruebas produce los datos de prueba usados como entradas y resultados esperados, y los procedimientos de prueba, es decir, las secuencias documentadas de casos en orden de ejecución. El informe de finalización pertenece a la finalización, los requisitos del entorno al diseño y los casos de prueba también al diseño, por lo que cualquier opción que los incluya describe salidas de otras actividades y no de la implementación.",
          "source": "Sample Exam D #5",
          "lang": "es"
        },
        {
          "id": "D-006",
          "topic": "FL-1.4.5",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes es MÁS probable que describa una tarea realizada por alguien en un rol de gestión de pruebas?",
          "options": [
            "Evaluar la base de prueba y el objeto de prueba",
            "Definir los requisitos del entorno de prueba",
            "Evaluar la testabilidad del objeto de prueba",
            "Crear el informe de finalización de pruebas"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. El rol de gestión de pruebas se ocupa de la planificación, el monitoreo y control, y la finalización; el informe de finalización es la salida principal de esta última, así que es la tarea más propia de ese rol. Evaluar la base de prueba, definir los requisitos del entorno y evaluar la testabilidad son tareas técnicas de análisis y de diseño, atribuibles al rol de pruebas, más orientado a los aspectos de ingeniería del trabajo.",
          "source": "Sample Exam D #6",
          "lang": "es"
        },
        {
          "id": "D-007",
          "topic": "FL-1.5.2",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de las siguientes es una ventaja del enfoque de equipo completo?",
          "options": [
            "Mejora de la comunicación entre los miembros del equipo",
            "Disminución de la responsabilidad individual sobre la calidad",
            "Despliegue más rápido de los entregables a los usuarios finales",
            "Reducción de la colaboración con los usuarios de negocio externos"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. El enfoque de equipo completo promueve una comunicación y una colaboración sólidas entre los miembros del equipo, con responsabilidad colectiva por la calidad. No reduce la responsabilidad individual, pues cada miembro sigue siendo igualmente responsable; no garantiza un despliegue más rápido hacia los usuarios finales, porque su foco es la calidad del trabajo conjunto; y no disminuye la colaboración con usuarios de negocio, con quienes de hecho se crean pruebas de aceptación.",
          "source": "Sample Exam D #7",
          "lang": "es"
        },
        {
          "id": "D-008",
          "topic": "FL-1.5.3",
          "level": "K2",
          "type": "single",
          "question": "Dados los siguientes beneficios y desventajas de la independencia de las pruebas: i.   Los probadores trabajan en una ubicación diferente a la de los desarrolladores ii.   Los probadores cuestionan los supuestos que los programadores hacen mientras escriben el código iii.   Se ha establecido una dinámica de confrontación entre probadores y desarrolladores iv.    Los desarrolladores se han convencido de que los probadores son los principales responsables de la calidad v.    Los probadores tienen sesgos diferentes a los que tienen los desarrolladores ¿Cuáles son MÁS probablemente considerados beneficios?",
          "options": [
            "i, iv",
            "ii, v",
            "i, iii, iv",
            "ii, iii, v"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Los beneficios son que los probadores cuestionan los supuestos que los programadores hacen al escribir el código y que aportan sesgos y perspectivas distintas, lo que ayuda a encontrar fallas y defectos diferentes. Que trabajen en una ubicación distinta es una desventaja por el aislamiento; la dinámica de confrontación también lo es; y que los desarrolladores crean que la calidad es responsabilidad ajena es otra desventaja derivada de ese mismo aislamiento.",
          "source": "Sample Exam D #8",
          "lang": "es"
        },
        {
          "id": "S3-001",
          "topic": "FL-1.1.1",
          "level": "K1",
          "type": "single",
          "question": "Cuando el probador verifica la base de prueba mientras diseña pruebas al inicio del ciclo de vida, ¿qué objetivo de prueba se está logrando?",
          "options": [
            "Ganar confianza",
            "Encontrar defectos",
            "Evaluar productos de trabajo",
            "Proporcionar información para la toma de decisiones"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Revisar la base de prueba mientras se diseñan las pruebas consiste en evaluar un producto de trabajo, en este caso los requisitos, y ese es el objetivo que se cumple. Los otros tres se alcanzan sobre todo con pruebas dinámicas: encontrar defectos, ganar confianza y dar información para decidir requieren ejecutar el software, aunque un hallazgo temprano pueda influir en ellos después.",
          "source": "Sample Exam 3 #1",
          "lang": "es"
        },
        {
          "id": "S3-002",
          "topic": "FL-1.5.2",
          "level": "K1",
          "type": "single",
          "question": "En algunos equipos Ágiles, se anima a las personas a usar sus habilidades para ayudar al equipo, independientemente de su rol. Esto podría significar que los probadores ayudan a los desarrolladores a escribir código y los desarrolladores ayudan a los probadores a probar. ¿Cómo se llama este enfoque?",
          "options": [
            "Team Aid",
            "Whole Team",
            "Skills First",
            "First Aid ISTQB Foundation Level v4.0.1 Sample Exam #3 Questions"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. En el enfoque Whole Team los integrantes aprovechan sus habilidades para cumplir los objetivos del equipo sin atenerse rígidamente a los roles, de modo que un probador puede ayudar a programar y un desarrollador a probar. Las demás opciones son nombres inventados, sin relación con ese reparto flexible de responsabilidades.",
          "source": "Sample Exam 3 #2",
          "lang": "es"
        },
        {
          "id": "S3-003",
          "topic": "FL-1.2.3",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes es una afirmación correcta?",
          "options": [
            "Un desarrollador comete un error que causa un defecto que puede verse como una falla durante las pruebas dinámicas",
            "Un desarrollador comete un error que resulta en una falla que puede verse como un defecto cuando el software se ejecuta",
            "Un desarrollador ha introducido una falla que resulta en un defecto que puede verse como un error durante las pruebas dinámicas",
            "Un desarrollador comete un error que causa un bug que puede verse como un defecto cuando el software se ejecuta"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. La cadena correcta es error del desarrollador, que genera un defecto en el código, el cual puede manifestarse como una falla cuando el software se ejecuta. Las otras opciones invierten los términos: en B se confunden defecto y falla, en C se mezclan falla y error, y en D se atribuye al defecto lo que solo se observa al ejecutar.",
          "source": "Sample Exam 3 #3",
          "lang": "es"
        },
        {
          "id": "S3-004",
          "topic": "FL-1.3.1",
          "level": "K2",
          "type": "single",
          "question": "¿Por qué es importante evitar el principio de que las pruebas se desgastan?",
          "options": [
            "Las pruebas dinámicas son menos confiables para encontrar bugs",
            "Ejecutar las mismas pruebas repetidamente encontrará consistentemente nuevas fallas",
            "Las pruebas no deben depender del contexto",
            "Ejecutar las mismas pruebas repetidamente reducirá la probabilidad de encontrar nuevas fallas"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. El desgaste de las pruebas significa que repetir los mismos casos reduce la probabilidad de hallar fallas nuevas, porque esas pruebas ya no cubren zonas inexploradas ni cambios recientes. Las demás no aplican: las pruebas dinámicas siguen siendo necesarias, repetir no descubre fallas de forma consistente y las pruebas sí dependen del contexto.",
          "source": "Sample Exam 3 #4",
          "lang": "es"
        },
        {
          "id": "S3-005",
          "topic": "FL-1.4.1",
          "level": "K2",
          "type": "single",
          "question": "Cuando se sigue un proceso de prueba estándar, ¿cuándo debe llevarse a cabo la actividad de control de pruebas?",
          "options": [
            "Durante las actividades de planificación",
            "Durante las actividades de implementación y ejecución",
            "Durante las actividades de monitoreo",
            "Durante todas las actividades ISTQB Foundation Level v4.0.1 Sample Exam #3 Questions"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. El control de pruebas no se limita a una fase: acompaña todo el proyecto, comparando el avance con el plan y aplicando acciones correctivas cuando hacen falta, a partir de la información que produce el monitoreo. Por eso las opciones que lo confinan a la planificación, a la implementación y ejecución o solo al monitoreo dejan fuera momentos en los que también se ejerce.",
          "source": "Sample Exam 3 #5",
          "lang": "es"
        },
        {
          "id": "S3-006",
          "topic": "FL-1.4.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes es la actividad que compara el progreso de prueba planificado con el progreso de prueba real?",
          "options": [
            "Monitoreo de pruebas",
            "Planificación de pruebas",
            "Cierre de pruebas",
            "Control de pruebas"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. El monitoreo de pruebas es la comparación continua del progreso real con el planificado, y de ahí salen las desviaciones que luego se corrigen. La planificación define objetivos y enfoque, el cierre recoge lo hecho cuando el proyecto termina, y el control aplica acciones correctivas sobre lo detectado, no hace la comparación misma.",
          "source": "Sample Exam 3 #6",
          "lang": "es"
        },
        {
          "id": "S3-007",
          "topic": "FL-1.4.2",
          "level": "K2",
          "type": "single",
          "question": "Estás trabajando en un proyecto que está limitado por tiempo y presupuesto, lo que ejerce presión para que las pruebas se realicen rápidamente. ¿Cómo debería ajustarse el enfoque de pruebas?",
          "options": [
            "Desarrollar casos de prueba detallados para reducir el esfuerzo de automatización de pruebas",
            "Usar técnicas como pruebas exploratorias y de listas de verificación para dedicar menos tiempo al desarrollo de casos de prueba",
            "Asegurar que tus pruebas comiencen solo después de que los desarrolladores hayan completado las pruebas de integración",
            "Desarrollar la automatización de pruebas de extremo a extremo antes de realizar pruebas manuales para que la automatización pueda usarse antes"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Con presión de tiempo y presupuesto conviene usar enfoques ligeros como pruebas exploratorias y listas de verificación, que exigen menos documentación previa y permiten empezar a ejecutar antes. Documentar casos detallados consume mucho tiempo, esperar a las pruebas de integración retrasa el inicio y automatizar de extremo a extremo primero frena el ciclo.",
          "source": "Sample Exam 3 #7",
          "lang": "es"
        },
        {
          "id": "S3-008",
          "topic": "FL-1.5.3",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál es el mayor problema con que un desarrollador pruebe su propio código?",
          "options": [
            "Los desarrolladores no son buenos probadores",
            "Los desarrolladores no están enfocados en la calidad",
            "Los desarrolladores no son objetivos respecto a su propio código",
            "Los desarrolladores no tienen tiempo para probar su propio código ISTQB Foundation Level v4.0.1 Sample Exam #3 Questions"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. El problema central es la falta de objetividad: quien escribió el código tiende a confiar en su lógica y en cómo lo implementó, y le cuesta ver lo que asumió como correcto. No es cierto que los desarrolladores sean malos probadores ni que descuiden la calidad, y el tiempo no es el obstáculo principal, pues las pruebas unitarias forman parte de su trabajo.",
          "source": "Sample Exam 3 #8",
          "lang": "es"
        },
        {
          "id": "S4-001",
          "topic": "FL-1.2.2",
          "level": "K1",
          "type": "single",
          "question": "¿De qué manera el análisis de causa raíz contribuye al aseguramiento de la calidad?",
          "options": [
            "Ayuda a identificar y corregir mejor la causa raíz de los defectos",
            "Describe cómo los equipos de desarrollo pueden codificar más rápido",
            "Especifica las causas raíz deseadas que deben alcanzar otros equipos",
            "Contribuye a la justificación del financiamiento futuro de proyectos"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. El análisis de causa raíz identifica las causas comunes que originan los problemas y, al atacarlas mediante mejoras de proceso, eleva la calidad del producto y evita que los defectos se repitan. B es incorrecta porque no acelera la codificación; C confunde las causas, que son defectos, con prácticas deseables transferibles entre equipos; D no tiene relación con el financiamiento de proyectos futuros.",
          "source": "Sample Exam 4 #1",
          "lang": "es"
        },
        {
          "id": "S4-002",
          "topic": "FL-1.5.2",
          "level": "K1",
          "type": "single",
          "question": "Trabajas en un equipo Ágil donde se acusa a los probadores de ralentizar el proceso debido al tiempo que está tomando las pruebas de sistema. ¿Cuál de los siguientes sería un enfoque que distribuiría mejor las habilidades del equipo para completar las tareas?",
          "options": [
            "Equipo completo",
            "División del equipo",
            "Desarrollo guiado por comportamiento",
            "Cascada"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. El enfoque de equipo completo permite que los desarrolladores apoyen las tareas de prueba en lugar de esperar a que los probadores terminen todo, con lo que las habilidades se reparten mejor y el cuello de botella se reduce. B mantiene la carga sobre los probadores; C es una práctica de desarrollo, no una forma de distribuir trabajo, y D es un modelo de ciclo de vida ajeno a este reparto.",
          "source": "Sample Exam 4 #2",
          "lang": "es"
        },
        {
          "id": "S4-003",
          "topic": "FL-1.1.2",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes es un ejemplo de depuración?",
          "options": [
            "Un probador encuentra un defecto y lo reporta",
            "Un probador vuelve a probar una corrección del desarrollador y encuentra una regresión",
            "Un desarrollador encuentra y corrige un defecto",
            "Un desarrollador realiza pruebas de unidad ISTQB Foundation Level v4.0.1 Sample Exam #4 Questions"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. La depuración es la actividad del desarrollador que localiza la causa del defecto, la analiza y la corrige; por eso encontrar y arreglar el defecto es el ejemplo típico. A y B describen actividades de prueba, como reportar y volver a probar, no de depuración. D implica pruebas unitarias: pueden llevar a depurar si aparece un defecto, pero la prueba en sí no es depuración.",
          "source": "Sample Exam 4 #3",
          "lang": "es"
        },
        {
          "id": "S4-004",
          "topic": "FL-1.3.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes es una afirmación verdadera sobre las pruebas exhaustivas?",
          "options": [
            "Es una forma de pruebas de estrés",
            "No es factible excepto en el caso de software trivial",
            "Comúnmente se realiza con automatización de pruebas",
            "Normalmente es responsabilidad del desarrollador durante las pruebas de unidad"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Probar todas las combinaciones de entradas y precondiciones solo es viable en software trivialmente simple; en cualquier otro caso llevaría un tiempo imposible y quizá ni siquiera sería factible. A la confunde con las pruebas de estrés, C es falsa porque la automatización no elimina el problema combinatorio, y D atribuye esa responsabilidad al desarrollador en pruebas unitarias, lo que no define la factibilidad.",
          "source": "Sample Exam 4 #4",
          "lang": "es"
        },
        {
          "id": "S4-005",
          "topic": "FL-1.4.4",
          "level": "K2",
          "type": "single",
          "question": "Si necesitas proporcionar un informe que muestre la cobertura de ejecución de casos de prueba de los requisitos, ¿qué necesitas rastrear?",
          "options": [
            "Trazabilidad entre los casos de prueba y los requisitos",
            "Cobertura de los elementos de riesgo por caso de prueba",
            "Trazabilidad entre los requisitos y los elementos de riesgo",
            "Cobertura de los requisitos por los casos de prueba que han sido diseñados"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Para informar la cobertura de ejecución de casos de prueba sobre los requisitos hace falta trazabilidad entre requisitos y casos de prueba, de modo que al ejecutar se registre qué requisitos quedaron realmente cubiertos. B apunta a cobertura de riesgos, C vincula requisitos con riesgos y D solo considera casos diseñados y no ejecutados; ninguna permite mostrar ejecución.",
          "source": "Sample Exam 4 #5",
          "lang": "es"
        },
        {
          "id": "S4-006",
          "topic": "FL-1.4.5",
          "level": "K2",
          "type": "single",
          "question": "¿Quién normalmente escribe el plan de pruebas para un proyecto?",
          "options": [
            "El gerente de proyecto",
            "El propietario del producto",
            "El gerente de pruebas",
            "El probador ISTQB Foundation Level v4.0.1 Sample Exam #4 Questions"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. El plan de pruebas lo escribe y actualiza normalmente el gerente de pruebas, que asume la responsabilidad global de su contenido y de su mantenimiento. El gerente de proyecto, el propietario del producto y el probador pueden aportar información o revisarlo, pero no son sus autores responsables, por lo que A, B y D quedan descartadas.",
          "source": "Sample Exam 4 #6",
          "lang": "es"
        },
        {
          "id": "S4-007",
          "topic": "FL-1.4.3",
          "level": "K2",
          "type": "single",
          "question": "Tu equipo ha realizado un análisis de riesgo de calidad y ha determinado la probabilidad, el impacto y el plan de mitigación para cada riesgo identificado. Esta información debe registrarse en ¿qué producto de trabajo?",
          "options": [
            "Estrategia de pruebas",
            "Plan de pruebas",
            "Registro de riesgos",
            "Plan de riesgos"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. El registro de riesgos es el producto de trabajo donde se documentan los riesgos identificados con su probabilidad, su impacto y el plan de mitigación, y el plan de pruebas lo referencia. A y B son documentos de planificación que pueden mencionar los riesgos, pero no son su repositorio, y D no corresponde a un producto de trabajo definido.",
          "source": "Sample Exam 4 #7",
          "lang": "es"
        },
        {
          "id": "S4-008",
          "topic": "FL-1.5.1",
          "level": "K2",
          "type": "single",
          "question": "Estás trabajando con un probador junior a quien se le ha asignado una historia de usuario para probar. Solo ha creado una prueba de camino positivo para la historia. Sabes que hay más áreas que deberían probarse para esta historia, incluidos escenarios negativos. ¿Cuál de las siguientes habilidades genéricas parece faltarle?",
          "options": [
            "Comunicación",
            "Curiosidad",
            "Confianza",
            "Creatividad"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Diseñar solo el camino positivo y no imaginar escenarios negativos evidencia falta de creatividad para idear casos variados y alternativos. A no aplica porque no hay señal de mala comunicación; B es tentadora, pero el problema no es falta de indagación sino de variedad en el diseño, y C no encaja: no se trata de seguridad al proponer pruebas.",
          "source": "Sample Exam 4 #8",
          "lang": "es"
        }
      ]
    },
    {
      "id": 2,
      "title": "Ciclo de vida del desarrollo de software",
      "short": "SDLC",
      "weight": 15,
      "questions": [
        {
          "id": "A-009",
          "topic": "FL-2.1.2",
          "level": "K1",
          "type": "single",
          "question": "Considere la siguiente regla: “para cada actividad del SDLC existe una actividad de pruebas correspondiente”. ¿En qué modelos del SDLC se cumple esta regla?",
          "options": [
            "Solo en modelos de desarrollo secuencial",
            "Solo en modelos de desarrollo iterativo",
            "Solo en modelos de desarrollo iterativo e incremental",
            "En modelos de desarrollo secuencial, incremental e iterativo"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. La regla de que a cada actividad del SDLC le corresponde una actividad de prueba se cumple en todos los modelos: secuenciales, incrementales e iterativos. Las opciones que la limitan a un solo tipo de modelo son demasiado restrictivas y no reflejan que en cualquier ciclo de vida se planifican y ejecutan actividades de prueba junto al desarrollo.",
          "source": "Sample Exam A #9",
          "lang": "es"
        },
        {
          "id": "A-010",
          "topic": "FL-2.1.3",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones describe MEJOR el enfoque de desarrollo guiado por pruebas de aceptación (ATDD)?",
          "options": [
            "En ATDD, los criterios de aceptación se crean típicamente con base en el formato dado/cuando/entonces",
            "En ATDD, los casos de prueba se crean principalmente en las pruebas de componentes y están orientados al código",
            "En ATDD, las pruebas se crean con base en los criterios de aceptación para impulsar el desarrollo del software relacionado",
            "En ATDD, las pruebas se basan en el comportamiento deseado del software, lo que facilita a los miembros del equipo comprenderlas"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. En ATDD las pruebas se crean a partir de los criterios de aceptación y se usan para impulsar el desarrollo del software relacionado. A y D describen BDD, donde se usa el formato dado/cuando/entonces y se parte del comportamiento deseado. B describe TDD, con pruebas de componentes orientadas al código.",
          "source": "Sample Exam A #10",
          "lang": "es"
        },
        {
          "id": "A-011",
          "topic": "FL-2.1.5",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes NO es un ejemplo del enfoque shift-left?",
          "options": [
            "Revisar los requisitos del usuario antes de que sean aceptados formalmente por los interesados",
            "Escribir una prueba de componente antes de que se escriba el código correspondiente",
            "Ejecutar una prueba de eficiencia de desempeño para un componente durante las pruebas de componentes",
            "Escribir un script de prueba antes de configurar el proceso de gestión de la configuración"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Escribir un script de prueba antes de configurar el proceso de gestión de configuración no es shift-left: los scripts deben estar bajo gestión de configuración, así que crearlos antes de ese proceso carece de sentido. A, B y C sí son ejemplos: revisión temprana de requisitos, TDD y pruebas no funcionales desde el nivel de componentes.",
          "source": "Sample Exam A #11",
          "lang": "es"
        },
        {
          "id": "A-012",
          "topic": "FL-2.1.6",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes argumentos usaría para convencer a su gerente de organizar retrospectivas al final de cada ciclo de liberación?",
          "options": [
            "Las retrospectivas son muy populares hoy en día y los clientes apreciarían que las agregáramos a nuestros procesos",
            "Organizar retrospectivas ahorrará dinero a la organización porque, sin ellas, los representantes de los usuarios finales no proporcionan retroalimentación inmediata sobre el producto",
            "Las debilidades del proceso identificadas durante la retrospectiva pueden analizarse y servir como una lista de tareas para el programa de mejora continua de procesos de la organización",
            "Las retrospectivas abarcan cinco valores, incluidos el coraje y el respeto, que son cruciales para mantener la mejora continua en la organización"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Las debilidades del proceso detectadas en la retrospectiva pueden analizarse y convertirse en tareas del programa de mejora continua, y ese es el argumento sólido para el gerente. A apela a la popularidad y al cliente, no a la mejora; B confunde la retrospectiva con retroalimentación del producto y con usuarios finales; D menciona valores de Extreme Programming ajenos a la retrospectiva.",
          "source": "Sample Exam A #12",
          "lang": "es"
        },
        {
          "id": "A-013",
          "topic": "FL-2.2.1",
          "level": "K2",
          "type": "single",
          "question": "¿Qué tipos de fallas (1-4) encajan MEJOR con qué niveles de prueba (A-D)? 1.     Fallas en el comportamiento del sistema cuando se desvía de las necesidades del negocio del usuario 2.     Fallas en la comunicación entre componentes 3.     Fallas en la lógica del código 4.     Fallas por reglas de negocio no implementadas correctamente A. Pruebas de componentes B. Pruebas de integración de componentes C. Pruebas de sistema D. Pruebas de aceptación",
          "options": [
            "1D, 2B, 3A, 4C",
            "1D, 2B, 3C, 4A",
            "1B, 2A, 3D, 4C",
            "1C, 2B, 3A, 4D"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Las necesidades del negocio del usuario son la base de las pruebas de aceptación (1D); la comunicación entre componentes se prueba en la integración de componentes (2B); los fallos de lógica se detectan en componentes (3A); las reglas de negocio son base de las pruebas de sistema (4C). Las otras asignaciones cruzan niveles y bases de prueba equivocadas.",
          "source": "Sample Exam A #13",
          "lang": "es"
        },
        {
          "id": "A-014",
          "topic": "FL-2.2.3",
          "level": "K2",
          "type": "single",
          "question": "Está probando una historia de usuario con tres criterios de aceptación: AC1, AC2 y AC3. AC1 está cubierto por el caso de prueba TC1, AC2 por TC2 y AC3 por TC3. El historial de ejecución de pruebas tuvo tres ejecuciones en tres versiones consecutivas del software de la siguiente manera: Ejecución 1    Ejecución 2    Ejecución 3 TC1                 (1) Falló    (4) Pasó     (7) Pasó TC2                (2) Pasó      (5) Falló    (8) Pasó TC3                 (3) Falló     (6) Falló    (9) Pasó Las pruebas se repiten una vez que se le informa que todos los defectos encontrados en la ejecución de pruebas fueron corregidos y hay una nueva versión del software disponible. ¿Cuáles de las pruebas anteriores se ejecutan como pruebas de regresión?",
          "options": [
            "Solo 4, 7, 8, 9",
            "Solo 5, 7",
            "Solo 4, 6, 8, 9",
            "Solo 5, 6"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. TC2 pasó en la ejecución 1 y se repite como prueba 5, y TC1 pasó en la ejecución 2 y se repite como prueba 7: esas son pruebas de regresión. Las pruebas 4, 6, 8 y 9 confirman correcciones de fallos previos, por lo que son pruebas de confirmación y no de regresión.",
          "source": "Sample Exam A #14",
          "lang": "es"
        },
        {
          "id": "B-009",
          "topic": "FL-2.1.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones sobre el ciclo de vida de desarrollo de software elegido es CORRECTA?",
          "options": [
            "Si se usa desarrollo ágil de software, la automatización de las pruebas de sistema reemplaza la necesidad de pruebas de regresión",
            "Si se usa un modelo de desarrollo secuencial, entonces las pruebas dinámicas típicamente se restringen a etapas posteriores del ciclo de vida",
            "Si se usa un modelo de desarrollo iterativo, entonces las pruebas de componentes típicamente las realizan manualmente los desarrolladores",
            "Si se usa un modelo de desarrollo incremental, entonces las pruebas estáticas se hacen en los primeros incrementos y las pruebas dinámicas en incrementos posteriores"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. En un modelo secuencial no hay código ejecutable en las primeras etapas, así que allí se aplican pruebas estáticas y las pruebas dinámicas quedan restringidas a fases posteriores. La automatización de pruebas de sistema no reemplaza las pruebas de regresión, que con entregas frecuentes son más necesarias; en modelos iterativos conviene automatizar las pruebas de componente, y en los incrementales se aplican pruebas estáticas y dinámicas en cada incremento.",
          "source": "Sample Exam B #9",
          "lang": "es"
        },
        {
          "id": "B-010",
          "topic": "FL-2.1.2",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de las siguientes es una buena práctica de pruebas que aplica a todos los ciclos de vida de desarrollo de software?",
          "options": [
            "Los probadores deben revisar los productos de trabajo como parte de la siguiente fase de desarrollo",
            "Los probadores deben revisar los productos de trabajo tan pronto como haya borradores disponibles",
            "Los probadores deben revisar los productos de trabajo antes de que comiencen el análisis de pruebas y el diseño de pruebas",
            "Los probadores deben revisar los productos de trabajo inmediatamente después de que se publiquen"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. La buena práctica es revisar los productos de trabajo en cuanto hay borradores disponibles, lo que materializa el enfoque shift-left y evita construir sobre requisitos defectuosos. Esperar a la siguiente fase o a la publicación deja los defectos dentro del producto ya difundido, y las revisiones forman parte del análisis de pruebas, no algo que deba hacerse antes de él.",
          "source": "Sample Exam B #10",
          "lang": "es"
        },
        {
          "id": "B-011",
          "topic": "FL-2.1.3",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de los siguientes es un ejemplo de un enfoque de desarrollo guiado por pruebas (test-first)?",
          "options": [
            "Desarrollo guiado por pruebas (Test-Driven Development)",
            "Desarrollo guiado por cobertura (Coverage-Driven Development)",
            "Desarrollo guiado por calidad (Quality-Driven Development)",
            "Desarrollo guiado por características (Feature-Driven Development)"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. El desarrollo guiado por pruebas es el ejemplo clásico de enfoque test-first: las pruebas se escriben antes que el código y guían su implementación. Las demás denominaciones no corresponden a enfoques test-first; el desarrollo guiado por características, por ejemplo, es una metodología ágil basada en entregar funcionalidades, no en escribir primero las pruebas.",
          "source": "Sample Exam B #11",
          "lang": "es"
        },
        {
          "id": "B-012",
          "topic": "FL-2.1.4",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones sobre DevOps es CORRECTA?",
          "options": [
            "Para acelerar las entregas, se utiliza la integración continua para alentar a los desarrolladores a enviar código rápidamente sin la necesidad de completar las pruebas de componentes",
            "Para poder actualizar y liberar sistemas con mayor frecuencia, se requieren muchas pruebas de regresión automatizadas para reducir el riesgo de regresión",
            "Para tratar a los desarrolladores y a las operaciones por igual, los probadores asignarán más esfuerzo a las pruebas de liberación realizadas por operaciones usando un enfoque shift-right",
            "Para crear una mayor sinergia entre probadores, desarrolladores y operaciones, las pruebas deben volverse completamente automatizadas sin pruebas manuales"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. DevOps busca entregar con frecuencia, y para eso necesita muchas pruebas de regresión automatizadas que mantengan bajo el riesgo de regresión. La integración continua no exime a los desarrolladores de completar sus pruebas de componente, de hecho las exige para admitir el código; el shift-right no consiste en repartir esfuerzo entre desarrollo y operaciones, y automatizar todo sin pruebas manuales haría perder la perspectiva del usuario.",
          "source": "Sample Exam B #12",
          "lang": "es"
        },
        {
          "id": "B-013",
          "topic": "FL-2.2.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes es MÁS probable que se realice como parte de las pruebas de sistema?",
          "options": [
            "Pruebas de seguridad de un sistema de gestión de crédito por un equipo de pruebas independiente",
            "Pruebas de la interfaz de un sistema de cambio de divisas con un sistema bancario externo",
            "Pruebas beta de un sistema de aprendizaje remoto por los desarrolladores del curso",
            "Pruebas de las interacciones entre la interfaz de usuario y la base de datos de un sistema de recursos humanos"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Las pruebas de sistema examinan el comportamiento y las capacidades del sistema completo, incluidas las características no funcionales como la seguridad, y suelen encargarse a un equipo independiente a partir de las especificaciones. Probar interfaces con un sistema bancario externo es integración de sistemas, las pruebas beta son aceptación en un sitio externo, y las interacciones entre interfaz y base de datos son integración de componentes.",
          "source": "Sample Exam B #13",
          "lang": "es"
        },
        {
          "id": "B-014",
          "topic": "FL-2.2.3",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones es CORRECTA?",
          "options": [
            "Las pruebas de regresión aumentan en número a medida que avanza el proyecto, mientras que el número de pruebas de confirmación disminuye a medida que avanza el proyecto",
            "Las pruebas de regresión se crean y ejecutan cuando el objeto de prueba se corrige, mientras que las pruebas de confirmación se ejecutan cada vez que el objeto de prueba se mejora",
            "Las pruebas de regresión se ocupan de verificar que el entorno operativo permanezca sin cambios, mientras que las pruebas de confirmación se ocupan de probar los cambios en el objeto de prueba",
            "Las pruebas de regresión se ocupan de los efectos adversos en el código no modificado, mientras que las pruebas de confirmación se ocupan de probar el código modificado"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Las pruebas de regresión vigilan los efectos adversos sobre el código que no se modificó, mientras que las de confirmación verifican que el defecto corregido quedó realmente resuelto, es decir, prueban el código cambiado. Ambas suelen crecer con el proyecto; otra opción invierte ese orden, y las de regresión no comprueban que el entorno operativo permanezca sin cambios.",
          "source": "Sample Exam B #14",
          "lang": "es"
        },
        {
          "id": "C-009",
          "topic": "FL-2.1.2",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de las siguientes es una buena práctica de pruebas que aplica a todos los ciclos de vida de desarrollo de software?",
          "options": [
            "Para cada nivel de prueba, existe un nivel de desarrollo correspondiente",
            "Para cada objetivo de prueba, existe un objetivo de desarrollo correspondiente",
            "Para cada actividad de prueba, existe una actividad de usuario correspondiente",
            "Para cada actividad de desarrollo, existe una actividad de prueba correspondiente"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. El control de calidad abarca todas las actividades de desarrollo, de modo que cada una tiene una actividad de prueba correspondiente. No existe simetría con niveles de desarrollo (A), con objetivos de desarrollo (B) ni con actividades de usuario (C), que pueden no existir o no corresponderse con cada actividad de prueba.",
          "source": "Sample Exam C #9",
          "lang": "es"
        },
        {
          "id": "C-010",
          "topic": "FL-2.1.3",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de los siguientes es un ejemplo de un enfoque de desarrollo guiado por pruebas (test-first)?",
          "options": [
            "Desarrollo guiado por pruebas de componentes (Component Test-Driven Development)",
            "Desarrollo guiado por pruebas de integración (Integration Test-Driven Development)",
            "Desarrollo guiado por pruebas de sistema (System Test-Driven Development)",
            "Desarrollo guiado por pruebas de aceptación (Acceptance Test-Driven Development)"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. El desarrollo guiado por pruebas de aceptación (ATDD) es el ejemplo conocido de enfoque test-first, donde las pruebas se escriben antes del código a partir de los criterios de aceptación. Las variantes de componentes, integración y sistema que proponen las otras opciones no son ejemplos reconocidos de desarrollo guiado por pruebas.",
          "source": "Sample Exam C #10",
          "lang": "es"
        },
        {
          "id": "C-011",
          "topic": "FL-2.1.5",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes proporciona la MEJOR descripción de shift-left?",
          "options": [
            "Cuando los desarrolladores lo acuerdan, las actividades manuales del lado izquierdo del proceso de pruebas se automatizan para apoyar el principio de 'las pruebas tempranas ahorran tiempo y dinero'",
            "Cuando es rentable, las actividades de prueba se trasladan más temprano en el ciclo de vida de desarrollo de software (SDLC) para reducir el costo total de la calidad al disminuir el número de defectos encontrados más adelante en el SDLC",
            "Cuando tienen tiempo libre disponible, se requiere que los probadores automaticen pruebas para las pruebas de regresión, comenzando con las pruebas de componentes y las pruebas de integración de componentes",
            "Cuando está disponible, los probadores se capacitan para realizar tareas temprano en el SDLC para permitir que más actividades de prueba se automaticen más adelante en el SDLC"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Shift-left traslada las actividades de prueba a fases más tempranas del ciclo de vida cuando resulta rentable, lo que reduce el costo total de calidad al disminuir los defectos detectados tardíamente. A inventa un lado izquierdo del proceso de pruebas, C lo reduce a automatizar regresión y D propone automatizar actividades posteriores, que no es desplazar pruebas hacia la izquierda.",
          "source": "Sample Exam C #11",
          "lang": "es"
        },
        {
          "id": "C-012",
          "topic": "FL-2.1.6",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes es MENOS probable que ocurra como resultado de una retrospectiva?",
          "options": [
            "La calidad de los futuros objetos de prueba mejora al identificar mejoras en las prácticas de desarrollo",
            "La eficiencia de las pruebas mejora al acelerar la configuración de los entornos de prueba mediante la automatización",
            "Se mejora la comprensión de los usuarios finales sobre los procesos de desarrollo y prueba",
            "Los scripts de prueba automatizados se mejoran mediante la retroalimentación de los desarrolladores"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. En las retrospectivas participan probadores, desarrolladores, arquitectos, propietarios de producto y analistas, pero rara vez usuarios finales, que tampoco reciben sus informes; por eso es improbable que mejore su comprensión de los procesos. Sí son resultados esperables la mejora de la calidad futura (A), la eficiencia de las pruebas (B) y los scripts automatizados (D).",
          "source": "Sample Exam C #12",
          "lang": "es"
        },
        {
          "id": "C-013",
          "topic": "FL-2.2.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes niveles de prueba es MÁS probable que se esté realizando si las pruebas se centran en la validación y no las realizan los probadores?",
          "options": [
            "Pruebas de componentes",
            "Pruebas de integración de componentes",
            "Pruebas de integración de sistemas",
            "Pruebas de aceptación"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Las pruebas de aceptación se centran en validar que el sistema satisface las necesidades del negocio y está listo para desplegarse, y lo ideal es que las realicen los usuarios finales. Las pruebas de componentes, de integración de componentes y de integración de sistemas son principalmente verificación contra una especificación y suelen ejecutarlas desarrolladores o probadores.",
          "source": "Sample Exam C #13",
          "lang": "es"
        },
        {
          "id": "C-014",
          "topic": "FL-2.2.3",
          "level": "K2",
          "type": "single",
          "question": "El software del sistema de navegación se ha actualizado debido a que sugería rutas que infringían las leyes de tránsito, como conducir en sentido contrario por calles de un solo sentido. ¿Cuál de las siguientes describe MEJOR las pruebas que se realizarán?",
          "options": [
            "Solo pruebas de confirmación",
            "Pruebas de confirmación y luego pruebas de regresión",
            "Solo pruebas de regresión",
            "Pruebas de regresión y luego pruebas de confirmación"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Primero se ejecutan pruebas de confirmación para comprobar que la actualización corrige el comportamiento erróneo y después pruebas de regresión para verificar que no aparecieron defectos en áreas no modificadas. Solo confirmación (A) o solo regresión (C) son insuficientes, y el orden inverso (D) no es lógico, pues la confirmación siempre precede a la regresión.",
          "source": "Sample Exam C #14",
          "lang": "es"
        },
        {
          "id": "D-009",
          "topic": "FL-2.1.2",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de las siguientes es una buena práctica de pruebas que aplica a todos los ciclos de vida de desarrollo de software?",
          "options": [
            "Cada nivel de prueba tiene objetivos de prueba específicos y distintos",
            "La implementación y ejecución de pruebas para un nivel de prueba dado debe comenzar durante la fase de desarrollo correspondiente",
            "Los probadores deben comenzar el diseño de pruebas tan pronto como estén disponibles los borradores de los productos de trabajo relevantes",
            "Cada actividad de pruebas dinámicas tiene una actividad de pruebas estáticas correspondiente"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Cada nivel de prueba tiene objetivos específicos y distintos, porque en cada uno se prueba un objeto diferente, desde un componente hasta el sistema completo; solapar objetivos generaría duplicación innecesaria. La implementación y la ejecución no deben comenzar en la fase de desarrollo correspondiente, sino el análisis y el diseño; el diseño no debe basarse en borradores sin acordar; y no toda prueba estática tiene una prueba dinámica equivalente.",
          "source": "Sample Exam D #9",
          "lang": "es"
        },
        {
          "id": "D-010",
          "topic": "FL-2.1.3",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de las siguientes es un ejemplo de un enfoque de desarrollo test-first?",
          "options": [
            "Desarrollo guiado por comportamiento (BDD)",
            "Desarrollo guiado por niveles de prueba",
            "Desarrollo guiado por funciones",
            "Desarrollo guiado por rendimiento"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. El desarrollo guiado por comportamiento, conocido como BDD, es un ejemplo reconocido de enfoque test-first, junto con el desarrollo guiado por pruebas y el guiado por pruebas de aceptación, pues las pruebas se escriben antes del código que las satisface. Las otras alternativas mencionadas no corresponden a enfoques test-first reales: el desarrollo guiado por niveles de prueba, por funciones o por rendimiento no forman parte de esta familia de prácticas.",
          "source": "Sample Exam D #10",
          "lang": "es"
        },
        {
          "id": "D-011",
          "topic": "FL-2.1.4",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes es MÁS probable que sea un desafío que se encuentre al implementar DevOps?",
          "options": [
            "Asegurarse de que no se pasen por alto las características de calidad no funcionales",
            "Gestionar entornos de prueba que cambian continuamente",
            "La necesidad de más probadores manuales con experiencia adecuada",
            "Configurar la automatización de pruebas como parte del pipeline de entrega"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Configurar y mantener la automatización de pruebas dentro del pipeline de entrega es un desafío real al implementar DevOps, junto con definir ese pipeline e introducir y mantener las herramientas de integración y entrega continuas. DevOps más bien aumenta la visibilidad de características no funcionales y, con procesos automatizados, favorece entornos de prueba estables y reduce la necesidad de pruebas manuales, en lugar de exigir más probadores manuales.",
          "source": "Sample Exam D #11",
          "lang": "es"
        },
        {
          "id": "D-012",
          "topic": "FL-2.1.6",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes describe MEJOR las retrospectivas?",
          "options": [
            "Las retrospectivas permiten a los miembros del equipo identificar a otros miembros del equipo que no contribuyeron plenamente a lograr la calidad según lo requiere el enfoque de equipo completo",
            "Las retrospectivas dan a los probadores la oportunidad de identificar actividades que fueron exitosas para que estas se conserven cuando se realicen mejoras potenciales en el futuro",
            "Las retrospectivas son donde a los miembros del equipo ágil se les permite expresar sus inquietudes sobre la gerencia y los clientes en un entorno sin culpas",
            "Las retrospectivas dan a los miembros del equipo ágil un foro donde se enfocan en discutir el plan y las decisiones técnicas para la siguiente iteración"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. En la retrospectiva el equipo identifica qué aspectos fueron exitosos para conservarlos y qué puede mejorarse y cómo, lo que aporta aprendizaje y mejor colaboración. No sirve para señalar a quienes no contribuyeron, lo que rompería la cohesión; no es un espacio sin culpas para criticar a la gerencia o a los clientes; y no se usa para planear la siguiente iteración ni decidir cuestiones técnicas, algo propio de la reunión de planificación.",
          "source": "Sample Exam D #12",
          "lang": "es"
        },
        {
          "id": "D-013",
          "topic": "FL-2.2.2",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes pruebas es MÁS probable que se realice como parte de las pruebas funcionales?",
          "options": [
            "La prueba verifica que la función de ordenamiento coloca los elementos de la lista o arreglo en orden ascendente",
            "La prueba verifica si la función de ordenamiento completa el ordenamiento dentro de un segundo después de comenzar",
            "La prueba verifica qué tan fácilmente se puede cambiar la función de ordenamiento de ordenar ascendente a ordenar descendente",
            "La prueba verifica que la función de ordenamiento sigue funcionando correctamente cuando se traslada de una arquitectura de 32 bits a una de 64 bits"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Verificar que la función de ordenamiento deja los elementos en orden ascendente evalúa su corrección funcional, que es el objeto de las pruebas funcionales. Completar el ordenamiento en un segundo evalúa la eficiencia de desempeño; la facilidad de cambiar de ascendente a descendente evalúa la modificabilidad; y el funcionamiento tras cambiar de arquitectura evalúa la adaptabilidad. Las tres últimas son características de calidad no funcionales.",
          "source": "Sample Exam D #13",
          "lang": "es"
        },
        {
          "id": "D-014",
          "topic": "FL-2.3.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes es MÁS probable que sea un disparador que conlleve a pruebas de mantenimiento de un sistema de cambio de divisas?",
          "options": [
            "Los desarrolladores informaron que cambiar el sistema de cambio de divisas era difícil y los probadores decidieron verificar si esto era cierto",
            "La opción de reembolso del sistema de cambio de divisas se eliminó porque no siempre devolvía el monto correcto a los clientes",
            "El equipo ágil ha comenzado a desarrollar una historia de usuario que agrega una nueva función de lealtad del cliente al sistema de cambio de divisas",
            "La opción de soporte de idiomas del sistema de cambio de divisas se utilizó para habilitar transacciones de divisas tanto en inglés como en el idioma local"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Las pruebas de mantenimiento se disparan por una modificación del sistema, un cambio en el entorno operativo o su retiro. Eliminar la opción de reembolso porque no devolvía el monto correcto es una corrección, es decir, una modificación. Verificar la facilidad de cambiar el sistema sería prueba de mantenibilidad; desarrollar una historia nueva llevaría a probar esa función y hacer regresión; y reconfigurar el idioma no es ninguno de los tres disparadores.",
          "source": "Sample Exam D #14",
          "lang": "es"
        },
        {
          "id": "S3-009",
          "topic": "FL-2.1.2",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de los siguientes es un ejemplo de una buena práctica de pruebas?",
          "options": [
            "Los probadores deben tener experiencia en desarrollo",
            "Los desarrolladores deben determinar el orden de ejecución de las pruebas en los procedimientos de prueba",
            "El diseño de pruebas debe comenzar cuando el código esté completo para evitar cambios",
            "Los probadores deben revisar los documentos de requisitos tan pronto como haya disponible un borrador legible"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Revisar los requisitos en cuanto hay un borrador legible es buena práctica porque detecta ambigüedades y omisiones cuando corregirlas es barato, antes de que se conviertan en código. Tener experiencia en desarrollo no es requisito para probar, el orden de ejecución lo definen los probadores según riesgo y prioridad, y el diseño debe comenzar mucho antes de que el código esté completo.",
          "source": "Sample Exam 3 #9",
          "lang": "es"
        },
        {
          "id": "S3-010",
          "topic": "FL-2.1.3",
          "level": "K1",
          "type": "single",
          "question": "Cuando la codificación se guía por los casos de prueba, ¿qué enfoque de desarrollo se está utilizando?",
          "options": [
            "TDD",
            "BDD",
            "ATDD",
            "TBD"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. En TDD los casos de prueba se escriben primero y guían la codificación: el código se produce para satisfacer esas pruebas. BDD parte del comportamiento esperado expresado en lenguaje natural y ATDD de los criterios de aceptación derivados de ejemplos, mientras TBD no es un enfoque de desarrollo reconocido, sino una sigla ajena a la lista.",
          "source": "Sample Exam 3 #10",
          "lang": "es"
        },
        {
          "id": "S3-011",
          "topic": "FL-2.2.1",
          "level": "K2",
          "type": "single",
          "question": "¿Durante cuál(es) nivel(es) de pruebas se deben ejecutar las pruebas no funcionales?",
          "options": [
            "Solo unitarias y de integración",
            "Solo pruebas de sistema",
            "Solo integración, sistema y aceptación",
            "Solo unitarias, integración, sistema y aceptación ISTQB Foundation Level v4.0.1 Sample Exam #3 Questions"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Las pruebas no funcionales, como rendimiento, seguridad o usabilidad, pueden y deben ejecutarse en todos los niveles, desde componentes hasta aceptación, aunque el foco y el alcance cambien en cada uno. Limitar su ejecución a un solo nivel, o a una combinación parcial, deja sin evaluar atributos de calidad que igualmente importan en las demás etapas.",
          "source": "Sample Exam 3 #11",
          "lang": "es"
        },
        {
          "id": "S3-012",
          "topic": "FL-2.3.1",
          "level": "K2",
          "type": "single",
          "question": "Cuando un sistema está destinado a ser dado de baja, ¿qué tipo de pruebas de mantenimiento pueden ser necesarias?",
          "options": [
            "Pruebas de retiro",
            "Pruebas de regresión",
            "Pruebas de migración de datos",
            "Pruebas de parches"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Cuando un sistema va a retirarse suele ser necesario migrar sus datos, ya sea a otro sistema o a un archivo histórico, y eso exige probar la migración. El retiro es un desencadenante de pruebas de mantenimiento, no un tipo de prueba; las de regresión corresponden a sistemas vigentes y los parches no aportan nada a un sistema que se apaga.",
          "source": "Sample Exam 3 #12",
          "lang": "es"
        },
        {
          "id": "S3-013",
          "topic": "FL-2.1.1",
          "level": "K2",
          "type": "single",
          "question": "En un modelo de ciclo de vida iterativo, ¿cuál de las siguientes es una afirmación precisa sobre las actividades de prueba?",
          "options": [
            "Para cada actividad de desarrollo, debe haber una actividad de prueba correspondiente",
            "Para cada actividad de prueba, se debe producir, versionar y almacenar la documentación apropiada",
            "Para cada actividad de desarrollo que resulte en código, debe haber una actividad de prueba para documentar los casos de prueba",
            "Para cada actividad de prueba, se deben registrar métricas y publicarlas en un tablero de métricas para todos los interesados"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. En cualquier modelo de ciclo de vida, incluido el iterativo, a cada actividad de desarrollo le corresponde una actividad de prueba, de modo que la verificación acompaña a la construcción. No toda actividad de prueba genera documentación versionada, en Ágil puede bastar la exploratoria sin casos escritos, y no todas producen métricas ni interesan a todos los interesados.",
          "source": "Sample Exam 3 #13",
          "lang": "es"
        },
        {
          "id": "S3-014",
          "topic": "FL-2.1.5",
          "level": "K2",
          "type": "single",
          "question": "¿De qué manera CI/CD es un ejemplo del concepto de shift-left?",
          "options": [
            "Lleva el código a producción más rápido",
            "Permite a los desarrolladores integrar continuamente su código",
            "Requiere pruebas continuas a lo largo del pipeline",
            "Eleva a los probadores como los dueños de la calidad ISTQB Foundation Level v4.0.1 Sample Exam #3 Questions"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. CI/CD exige pruebas continuas y automatizadas a lo largo de todo el pipeline, y esa integración permanente del testing en cada etapa es lo que traslada las pruebas hacia la izquierda en la línea de tiempo. Desplegar más rápido y la integración continua describen el funcionamiento del pipeline pero no desplazan las pruebas, y la calidad sigue siendo de todos.",
          "source": "Sample Exam 3 #14",
          "lang": "es"
        },
        {
          "id": "S4-009",
          "topic": "FL-2.1.2",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de los siguientes es un ejemplo de una buena práctica de pruebas?",
          "options": [
            "Los diferentes niveles de prueba deben tener objetivos de prueba específicos",
            "Los probadores deben tener experiencia en desarrollo",
            "Los desarrolladores deben determinar el orden de ejecución de las pruebas en los procedimientos de prueba",
            "El diseño de pruebas debe comenzar cuando el código esté completo para evitar cambios ISTQB Foundation Level v4.0.1 Sample Exam #4 Questions"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Es una buena práctica que cada nivel de prueba tenga objetivos propios y bien definidos, lo que evita solapamientos y vacíos entre niveles. B no es un requisito para todos los probadores; C es incorrecta porque el orden de ejecución lo determinan los probadores según prioridad, riesgo y disponibilidad, y D contradice la práctica de iniciar el diseño durante el diseño y la implementación del código.",
          "source": "Sample Exam 4 #9",
          "lang": "es"
        },
        {
          "id": "S4-010",
          "topic": "FL-2.1.3",
          "level": "K1",
          "type": "single",
          "question": "¿Qué enfoque de desarrollo captura los requisitos en un formato simple de caso de prueba?",
          "options": [
            "TDD",
            "BDD",
            "ATDD",
            "TBD"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. El desarrollo guiado por comportamiento expresa los requisitos con el formato dado/cuando/entonces, que es esencialmente un caso de prueba y sirve de base para desarrollar el código. A y C guían el desarrollo con otros enfoques y no capturan requisitos de esa forma, y D no es un enfoque reconocido, por lo que ninguna responde a lo pedido.",
          "source": "Sample Exam 4 #10",
          "lang": "es"
        },
        {
          "id": "S4-011",
          "topic": "FL-2.2.2",
          "level": "K2",
          "type": "single",
          "question": "Las pruebas de usabilidad son un ejemplo de ¿qué tipo de pruebas?",
          "options": [
            "Funcionales",
            "No funcionales",
            "Estructurales",
            "Relacionadas con cambios"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. La usabilidad es una característica de calidad no funcional según ISO 25010, así que sus pruebas pertenecen a ese tipo. A agruparía la verificación de qué hace el sistema, no de cómo lo hace; C se refiere a pruebas estructurales sobre el código, y D a pruebas relacionadas con cambios. Ninguna de esas tres corresponde a la usabilidad.",
          "source": "Sample Exam 4 #11",
          "lang": "es"
        },
        {
          "id": "S4-012",
          "topic": "FL-2.2.3",
          "level": "K2",
          "type": "single",
          "question": "Has estado recibiendo compilaciones diarias de los desarrolladores. Aunque están documentando las correcciones que incluyen en cada compilación, estás encontrando que las correcciones o no están en la compilación o no funcionan. ¿Qué tipo de pruebas es más adecuado para encontrar estos problemas?",
          "options": [
            "Pruebas de unidad",
            "Pruebas de sistema",
            "Pruebas de confirmación",
            "Pruebas de regresión ISTQB Foundation Level v4.0.1 Sample Exam #4 Questions"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. La prueba de confirmación verifica si una corrección está realmente presente en la compilación y si resuelve el defecto reportado, justo lo que aquí falla. A la realizaría el desarrollador y no detectaría fallos del proceso de compilación; B tardaría más en aislar el problema, y D busca cambios no intencionales, no confirmar correcciones.",
          "source": "Sample Exam 4 #12",
          "lang": "es"
        },
        {
          "id": "S4-013",
          "topic": "FL-2.1.6",
          "level": "K2",
          "type": "single",
          "question": "Tu equipo acaba de completar una retrospectiva. Han discutido lo que fue exitoso y debe mantenerse, y han discutido qué mejoras se necesitan. ¿Qué más necesitan discutir para reconocer las mejoras del proceso?",
          "options": [
            "Cuándo se harán los cambios aceptados",
            "Quién tiene la culpa de las deficiencias del proyecto",
            "Cuánto dinero se gastó que podría haberse ahorrado",
            "Por qué no se hicieron los cambios antes en el proyecto"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. La retrospectiva solo genera valor si las mejoras aceptadas se planifican con fechas y responsables para implementarse en las próximas iteraciones, entregas o proyectos. B y D buscan culpables o reproches, lo que contradice el propósito de la retrospectiva, y C es información de costos que corresponde al gerente de proyecto, no al objetivo de reconocer mejoras del proceso.",
          "source": "Sample Exam 4 #13",
          "lang": "es"
        },
        {
          "id": "S4-014",
          "topic": "FL-2.1.4",
          "level": "K2",
          "type": "single",
          "question": "Tu organización ha decidido implementar DevOps. Una de las mayores preocupaciones de las personas de operaciones es que ha habido problemas continuos de rendimiento en producción. ¿Cómo ayudará la implementación de DevOps y CI/CD con este problema?",
          "options": [
            "No ayudará: el problema debe abordarse durante el diseño",
            "Las pruebas de rendimiento se pueden integrar en la tubería de CI/CD para probarlo de forma incremental y repetida a lo largo del desarrollo",
            "Las pruebas de rendimiento serán el enfoque principal de las pruebas de integración del sistema, después de que el código se haya entregado al entorno de pruebas",
            "Se utilizarán expertos en pruebas de rendimiento para realizar las pruebas de rendimiento en un entorno aislado que se desarrolla utilizando Infraestructura como Código ISTQB Foundation Level v4.0.1 Sample Exam #4 Questions"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Con CI/CD las pruebas de rendimiento se integran en la tubería y se ejecutan de forma incremental y repetida, desde las pruebas unitarias hasta el producto completo, detectando el problema mucho antes. A descarta el aporte que sí ofrece la tubería; C limita la prueba a una etapa tardía, y D la reduce a un entorno aislado, desaprovechando la ejecución continua.",
          "source": "Sample Exam 4 #14",
          "lang": "es"
        }
      ]
    },
    {
      "id": 3,
      "title": "Pruebas estáticas",
      "short": "Estáticas",
      "weight": 10,
      "questions": [
        {
          "id": "A-015",
          "topic": "FL-3.1.2",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes NO es un beneficio de las pruebas estáticas?",
          "options": [
            "Tener una gestión de defectos menos costosa debido a la facilidad de detectar defectos más tarde en el SDLC",
            "Corregir defectos encontrados durante las pruebas estáticas es generalmente mucho menos costoso que corregir defectos encontrados durante las pruebas dinámicas",
            "Encontrar defectos de codificación que podrían no haberse encontrado solo realizando pruebas dinámicas",
            "Detectar brechas e inconsistencias en los requisitos"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Esta afirmación no es un beneficio: la gestión de defectos no resulta menos costosa y detectar defectos más tarde en el SDLC es más caro, no más fácil. B, C y D sí son beneficios reales de las pruebas estáticas: corregir antes cuesta menos, se hallan defectos de codificación que las pruebas dinámicas no verían y se detectan brechas e inconsistencias en los requisitos.",
          "source": "Sample Exam A #15",
          "lang": "es"
        },
        {
          "id": "A-016",
          "topic": "FL-3.2.1",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de los siguientes es un beneficio de la retroalimentación temprana y frecuente?",
          "options": [
            "Mejora el proceso de pruebas para proyectos futuros",
            "Obliga a los clientes a priorizar sus requisitos en función de los riesgos acordados",
            "Proporciona una medida de la calidad de los cambios",
            "Ayuda a evitar malentendidos en los requisitos"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. La retroalimentación temprana y frecuente ayuda a evitar malentendidos sobre los requisitos antes de que se conviertan en defectos costosos. A se refiere a mejorar el proceso para proyectos futuros, lo que no exige que la retroalimentación sea temprana; B confunde la retroalimentación con la priorización de requisitos; C no es un beneficio reconocido ni existe una forma única de medir la calidad de los cambios.",
          "source": "Sample Exam A #16",
          "lang": "es"
        },
        {
          "id": "A-017",
          "topic": "FL-3.2.4",
          "level": "K2",
          "type": "single",
          "question": "Las revisiones que se utilizan en tu organización tienen los siguientes atributos: • Existe el rol de un escriba • El propósito principal es evaluar la calidad • La reunión es liderada por el autor del producto de trabajo • Hay preparación individual • Se produce un informe de revisión ¿Cuál de los siguientes tipos de revisión es MÁS probable que se esté utilizando?",
          "options": [
            "Revisión informal",
            "Walkthrough",
            "Revisión técnica",
            "Inspección"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. El walkthrough tiene como propósito principal evaluar la calidad, es liderado por el autor del producto de trabajo y cuenta con un escriba, preparación individual e informe de revisión. La inspección exige moderador y no permite que el autor lidere; la revisión técnica tampoco la lidera el autor; la revisión informal no tiene roles ni proceso definidos.",
          "source": "Sample Exam A #17",
          "lang": "es"
        },
        {
          "id": "A-018",
          "topic": "FL-3.2.5",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de estas afirmaciones NO es un factor que contribuye a revisiones exitosas?",
          "options": [
            "Los participantes deben dedicar tiempo adecuado para la revisión",
            "Dividir productos de trabajo grandes en partes pequeñas para hacer el esfuerzo requerido menos intenso",
            "Los participantes deben evitar comportamientos que puedan indicar aburrimiento, exasperación u hostilidad hacia otros participantes",
            "Las fallas encontradas deben ser reconocidas, apreciadas y manejadas objetivamente"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. En las revisiones se encuentran defectos, no fallas: las fallas ocurren al ejecutar el software, así que la afirmación está mal planteada. A, B y C sí son factores de éxito: dedicar tiempo adecuado, dividir productos de trabajo grandes en partes pequeñas y evitar conductas que indiquen aburrimiento, exasperación u hostilidad entre los participantes.",
          "source": "Sample Exam A #18",
          "lang": "es"
        },
        {
          "id": "B-015",
          "topic": "FL-3.1.3",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes es un ejemplo de un defecto que puede encontrarse mediante pruebas estáticas pero NO mediante pruebas dinámicas?",
          "options": [
            "Falta de usabilidad proporcionada a través de la interfaz de usuario",
            "Código sin ninguna ruta que lo alcance",
            "Tiempos de respuesta deficientes para la mayoría de los usuarios esperados",
            "Características requeridas que no están implementadas en el código"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Una revisión de código puede detectar código inalcanzable, mientras que las pruebas dinámicas solo ejercitan lo que se puede ejecutar y no podrían demostrar la inalcanzabilidad sin agotar combinaciones inviables. La falta de usabilidad, los tiempos de respuesta pobres y las funcionalidades requeridas ausentes también pueden detectarse ejecutando el sistema, por lo que no son exclusivos de las pruebas estáticas.",
          "source": "Sample Exam B #15",
          "lang": "es"
        },
        {
          "id": "B-016",
          "topic": "FL-3.2.1",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de los siguientes es un beneficio de la retroalimentación temprana y frecuente de las partes interesadas?",
          "options": [
            "Los gerentes saben qué desarrolladores son menos productivos",
            "Permite a los gerentes de proyecto priorizar sus interacciones con las partes interesadas",
            "Facilita la comunicación temprana de posibles problemas de calidad",
            "Los usuarios finales entienden mejor por qué se retrasa la entrega del producto de trabajo"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. La retroalimentación temprana y frecuente de las partes interesadas permite comunicar pronto los posibles problemas de calidad, evita malentendidos sobre los requisitos y hace que los cambios se entiendan y apliquen antes. No informa a los gerentes sobre la productividad de los desarrolladores ni sirve para priorizar sus interacciones, y no aclara a los usuarios por qué se retrasa la entrega.",
          "source": "Sample Exam B #16",
          "lang": "es"
        },
        {
          "id": "B-017",
          "topic": "FL-3.2.2",
          "level": "K2",
          "type": "single",
          "question": "Dadas las siguientes descripciones de tareas: 1. Se seleccionan las características de calidad a evaluar y los criterios de salida 2. Todos tienen acceso al producto de trabajo 3. Se identifican anomalías en el producto de trabajo 4. Se discuten las anomalías Y las siguientes actividades de revisión A. Revisión individual B. Inicio de la revisión C. Planificación D. Comunicación y análisis ¿Cuál de las siguientes coincide MEJOR con las descripciones de tareas y las actividades?",
          "options": [
            "1B, 2C, 3D, 4A",
            "1B, 2D, 3C, 4A",
            "1C, 2A, 3B, 4D",
            "1C, 2B, 3A, 4D"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Seleccionar características de calidad y criterios de salida es planificación; dar acceso al producto a todos los participantes es el inicio de la revisión; identificar anomalías corresponde a la revisión individual, y analizarlas y discutirlas es comunicación y análisis. Las demás combinaciones asignan esas tareas a actividades que no les corresponden, por ejemplo ubicar el acceso al producto en la planificación.",
          "source": "Sample Exam B #17",
          "lang": "es"
        },
        {
          "id": "B-018",
          "topic": "FL-3.2.3",
          "level": "K1",
          "type": "single",
          "question": "Dados los siguientes roles en las revisiones: 1. Escriba 2. Líder de revisión 3. Facilitador 4. Gerente Y las siguientes responsabilidades en las revisiones: A. Asegura el funcionamiento eficaz de las reuniones de revisión y el establecimiento de un entorno de revisión seguro B. Registra información de la revisión, como decisiones y nuevas anomalías encontradas durante la reunión de revisión C. Decide qué se va a revisar y proporciona recursos, como personal y tiempo para la revisión D. Asume la responsabilidad general de la revisión, como organizar cuándo y dónde se llevará a cabo la revisión ¿Cuál de las siguientes coincide MEJOR con los roles y responsabilidades?",
          "options": [
            "1A, 2B, 3D, 4C",
            "1A, 2C, 3B, 4D",
            "1B, 2D, 3A, 4C",
            "1B, 2D, 3C, 4A"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. El escriba registra decisiones y anomalías nuevas de la reunión; el líder asume la responsabilidad general, como organizar cuándo y dónde se revisa; el facilitador asegura que las reuniones funcionen y que exista un entorno seguro, y el gerente decide qué se revisa y aporta personal y tiempo. Las otras combinaciones intercambian estos roles, por ejemplo asignando la facilitación al escriba.",
          "source": "Sample Exam B #18",
          "lang": "es"
        },
        {
          "id": "C-015",
          "topic": "FL-3.1.3",
          "level": "K2",
          "type": "single",
          "question": "Dados los siguientes defectos de ejemplo: i.   Dos partes diferentes de la especificación de diseño no están de acuerdo debido a la complejidad del diseño ii.   Un tiempo de respuesta es demasiado largo y hace que los usuarios pierdan la paciencia iii.   No se puede alcanzar una ruta en el código durante la ejecución iv.    Una variable se declara pero nunca se usa posteriormente en el programa v.    La cantidad de memoria que necesita el programa para generar un informe es demasiado alta ¿Cuál de las siguientes identifica MEJOR los defectos de ejemplo que podrían encontrarse mediante pruebas estáticas (en lugar de pruebas dinámicas)?",
          "options": [
            "ii, v",
            "iii, v",
            "i, ii, iv",
            "i, iii, iv"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Las pruebas estáticas detectan defectos en especificaciones y código sin ejecutar: inconsistencias entre partes del diseño, rutas inalcanzables y variables declaradas sin uso. El tiempo de respuesta excesivo y el consumo alto de memoria (ii, v) solo se observan ejecutando el programa y midiendo, por lo que corresponden a pruebas dinámicas y descartan las demás opciones.",
          "source": "Sample Exam C #15",
          "lang": "es"
        },
        {
          "id": "C-016",
          "topic": "FL-3.2.1",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de los siguientes es un beneficio de la retroalimentación temprana y frecuente de las partes interesadas?",
          "options": [
            "Los cambios en los requisitos se entienden e implementan antes",
            "Asegura que las partes interesadas del negocio entiendan los requisitos del usuario",
            "Permite a los propietarios del producto cambiar sus requisitos con la frecuencia que deseen",
            "Se informa a los usuarios finales qué requisitos no se implementarán antes del lanzamiento"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. La retroalimentación temprana y frecuente permite comunicar pronto problemas de calidad, evitar malentendidos y entender e implementar antes los cambios en los requisitos. No mejora la comprensión de las partes interesadas sobre sus propios requisitos (B), no autoriza cambios ilimitados (C) y no consiste en informar a los usuarios qué requisitos quedarán fuera (D).",
          "source": "Sample Exam C #16",
          "lang": "es"
        },
        {
          "id": "C-017",
          "topic": "FL-3.2.4",
          "level": "K2",
          "type": "single",
          "question": "Dados los siguientes tipos de revisión: 1. Revisión técnica 2. Revisión informal 3. Inspección 4. Walkthrough Y las siguientes descripciones: A. Incluye objetivos como lograr consenso, generar nuevas ideas y motivar a los autores a mejorar B. Incluye objetivos como educar a los revisores, lograr consenso, generar nuevas ideas y detectar posibles defectos C. El objetivo principal es detectar posibles defectos y requiere la recopilación de métricas para apoyar la mejora del proceso D. El objetivo principal es detectar posibles defectos y no genera ninguna salida documentada formal ¿Cuál de las siguientes coincide MEJOR con los tipos de revisión y las descripciones?",
          "options": [
            "1A, 2B, 3C, 4D",
            "1A, 2D, 3C, 4B",
            "1B, 2C, 3D, 4A",
            "1C, 2D, 3A, 4B"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. La revisión técnica busca consenso, ideas nuevas, motivación del autor y detección de anomalías; la informal no tiene proceso definido ni salida documentada; la inspección es la más formal y recopila métricas para mejorar el proceso; el walkthrough, liderado por el autor, incluye educar a los revisores y detectar anomalías. Las demás combinaciones cruzan estas descripciones.",
          "source": "Sample Exam C #17",
          "lang": "es"
        },
        {
          "id": "C-018",
          "topic": "FL-3.2.5",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de los siguientes es un factor que contribuye al éxito de una revisión?",
          "options": [
            "Asegurar que la gerencia participe como revisora",
            "Dividir los productos de trabajo grandes en partes más pequeñas",
            "Establecer la evaluación de los revisores como objetivo",
            "Planificar cubrir un documento por revisión"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Dividir los productos de trabajo grandes en partes revisables en un tiempo razonable evita que los revisores pierdan la concentración. El apoyo de la gerencia no implica que participe como revisora (A), evaluar a los participantes no es un objetivo (C) y planificar un documento completo por revisión contradice la división en fragmentos (D).",
          "source": "Sample Exam C #18",
          "lang": "es"
        },
        {
          "id": "D-015",
          "topic": "FL-3.1.1",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de los siguientes NO puede ser examinado mediante pruebas estáticas?",
          "options": [
            "Contrato",
            "Plan de pruebas",
            "Código cifrado",
            "Carta de prueba"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Casi cualquier producto de trabajo puede examinarse con alguna forma de prueba estática si es interpretable por personas: los contratos, los planes de prueba y las cartas de prueba pueden revisarse. El código cifrado, en cambio, es demasiado complejo para la interpretación humana y, si está bien cifrado, tampoco resulta analizable por la mayoría de las herramientas, por lo que no es apto para pruebas estáticas.",
          "source": "Sample Exam D #15",
          "lang": "es"
        },
        {
          "id": "D-016",
          "topic": "FL-3.1.2",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones sobre el valor de las pruebas estáticas es CORRECTA?",
          "options": [
            "Los tipos de defectos encontrados por las pruebas estáticas son diferentes de los tipos de defectos que se pueden encontrar mediante pruebas dinámicas",
            "Las pruebas dinámicas pueden detectar los tipos de defectos que se pueden encontrar mediante pruebas estáticas más algunos tipos de defectos adicionales",
            "Las pruebas dinámicas pueden identificar algunos de los defectos que se pueden encontrar mediante pruebas estáticas, pero no todos",
            "Las pruebas estáticas pueden identificar los tipos de defectos que se pueden encontrar mediante pruebas dinámicas, así como algunos tipos de defectos adicionales"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Hay defectos que solo se detectan de forma estática, como el código inalcanzable o los patrones de diseño no implementados; otros que ambas detectan, como un defecto de programación visible en revisión que causa una falla al ejecutar; y otros exclusivos de la dinámica, como problemas de desempeño o de memoria. Por eso la dinámica identifica algunos de los defectos estáticos, pero no todos, y ninguna prueba contiene por completo a la otra.",
          "source": "Sample Exam D #16",
          "lang": "es"
        },
        {
          "id": "D-017",
          "topic": "FL-3.2.2",
          "level": "K2",
          "type": "single",
          "question": "Dadas las siguientes descripciones de actividades de revisión: 1. Se delibera sobre las anomalías detectadas y se toman determinaciones respecto a su estado, propiedad y cualquier paso adicional necesario 2. Se registran los defectos y se abordan las actualizaciones necesarias antes de la aceptación del producto de trabajo 3. Los revisores emplean técnicas para generar sugerencias y preguntas sobre el producto de trabajo y para detectar anomalías 4. Se establecen el objetivo de la revisión y su cronograma para garantizar una revisión enfocada y eficiente 5. Se proporciona a los participantes acceso al elemento que se va a revisar ¿Cuál de las siguientes es la secuencia CORRECTA en el proceso de revisión de las actividades que corresponden a las descripciones?",
          "options": [
            "4–3–5–2–1",
            "4–5–3–1–2",
            "5–4–1–3–2",
            "5–4–3–2–1"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. El proceso genérico avanza por planificación, inicio de la revisión, revisión individual, comunicación y análisis, y corrección e informe. Así, planificar objetivo y cronograma va primero, luego se da acceso al elemento, después los revisores aplican técnicas para generar sugerencias y detectar anomalías, se delibera sobre ellas y finalmente se registran los defectos y se verifican las actualizaciones. Las demás secuencias alteran ese orden lógico.",
          "source": "Sample Exam D #17",
          "lang": "es"
        },
        {
          "id": "D-018",
          "topic": "FL-3.2.3",
          "level": "K1",
          "type": "single",
          "question": "¿Qué participante en el proceso de revisión es responsable de asegurar que las reuniones de revisión se desarrollen de manera efectiva y que todos en las reuniones puedan expresar sus opiniones libremente?",
          "options": [
            "Gerente",
            "Moderador",
            "Presidente",
            "Líder de revisión"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. El moderador, también llamado facilitador, se encarga de que las reuniones de revisión se desarrollen de manera efectiva: gestiona el tiempo, media las discusiones y crea un ambiente seguro donde todos pueden expresar sus opiniones con libertad. El gerente decide qué revisar y asigna recursos; el líder de revisión supervisa el proceso, selecciona al equipo y agenda las reuniones; y el presidente no es un rol reconocido en las revisiones.",
          "source": "Sample Exam D #18",
          "lang": "es"
        },
        {
          "id": "S3-015",
          "topic": "FL-3.2.3",
          "level": "K1",
          "type": "single",
          "question": "En una revisión formal, ¿qué rol es normalmente responsable de documentar todos los temas abiertos?",
          "options": [
            "El facilitador",
            "El autor",
            "El escriba",
            "El gerente"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. En una revisión formal el escriba documenta los hallazgos, problemas y puntos abiertos que surgen de la reunión, para que queden registrados y puedan seguirse. El facilitador conduce el proceso, el autor es dueño del producto de trabajo revisado y puede tomar notas, pero no es su función principal, y el gerente no cumple ese rol en la revisión.",
          "source": "Sample Exam 3 #15",
          "lang": "es"
        },
        {
          "id": "S3-016",
          "topic": "FL-3.2.1",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál es la razón principal para obtener retroalimentación temprana y frecuente de los interesados respecto a un producto en desarrollo?",
          "options": [
            "Hacerlos sentir involucrados",
            "Asegurar que su visión del producto se realice",
            "Crear más reuniones",
            "Usar a los interesados como probadores"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. La retroalimentación temprana y frecuente permite confirmar que lo que se construye coincide con lo que los interesados esperan, y corregir el rumbo antes de invertir más. Hacerlos sentir partícipes es un efecto secundario agradable, no la razón principal; generar reuniones no es un objetivo, y aunque participen en aceptación, su opinión se necesita mucho antes.",
          "source": "Sample Exam 3 #16",
          "lang": "es"
        },
        {
          "id": "S3-017",
          "topic": "FL-3.1.2",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes es un beneficio del análisis estático?",
          "options": [
            "Se pueden identificar defectos que podrían no ser detectados por las pruebas dinámicas",
            "La identificación temprana de defectos requiere menos documentación",
            "La ejecución temprana del código proporciona una medida de la calidad del código",
            "No se necesitan herramientas porque se usan revisiones en lugar de ejecutar código ISTQB Foundation Level v4.0.1 Sample Exam #3 Questions"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. El análisis estático revisa el código sin ejecutarlo y con un analizador detecta defectos como variables sin inicializar que las pruebas dinámicas difícilmente alcanzan. Documentar los defectos sigue siendo necesario aunque se hallen temprano, ejecutar el código corresponde al análisis dinámico, y estas revisiones normalmente sí requieren herramientas.",
          "source": "Sample Exam 3 #17",
          "lang": "es"
        },
        {
          "id": "S3-018",
          "topic": "FL-3.2.2",
          "level": "K2",
          "type": "single",
          "question": "Para una revisión formal, ¿en qué punto del proceso se definen los criterios de salida?",
          "options": [
            "Planificación",
            "Inicio de la revisión",
            "Revisión individual",
            "Corrección y reporte"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Los criterios de entrada y salida se definen durante la planificación de la revisión, y luego se evalúan en cada paso para decidir si el producto está listo para avanzar. Cuando la revisión se inicia, cuando cada revisor hace su trabajo o cuando se corrigen y reportan los hallazgos, esos criterios ya deberían estar establecidos y solo se aplican.",
          "source": "Sample Exam 3 #18",
          "lang": "es"
        },
        {
          "id": "S4-015",
          "topic": "FL-3.1.1",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de las siguientes técnicas es una forma de pruebas estáticas?",
          "options": [
            "Error guessing",
            "Pruebas de regresión automatizadas",
            "Proporcionar entradas y examinar las salidas resultantes",
            "Revisión de código"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. La revisión de código examina el producto de trabajo sin ejecutarlo, por lo que es una forma de prueba estática. A, B y C implican ejecutar el software y observar resultados: la conjetura de errores se aplica durante la ejecución, la regresión automatizada corre scripts y la última describe pruebas dinámicas, así que ninguna califica como estática.",
          "source": "Sample Exam 4 #15",
          "lang": "es"
        },
        {
          "id": "S4-016",
          "topic": "FL-3.2.5",
          "level": "K1",
          "type": "single",
          "question": "Con frecuencia se le solicita participar en revisiones de requisitos. Desafortunadamente, normalmente recibe el documento que se va a revisar la noche anterior a la reunión de revisión. Esto hace que usted no realice una revisión exhaustiva y tenga que trabajar horas extras significativas para completar la revisión. ¿Qué factor de éxito de la revisión falta en este proceso?",
          "options": [
            "Apoyo de la gerencia para el proceso general de revisión",
            "Revisar solo fragmentos pequeños a la vez",
            "Capacitación para el desempeño adecuado en las reuniones",
            "Permitir tiempo adecuado para realizar la revisión"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. El factor ausente es dar tiempo suficiente para revisar: recibir el documento la noche anterior impide una revisión cuidadosa y obliga a trabajar horas extra. A podría influir en la planificación general, pero el síntoma descrito es la falta de tiempo; B se refiere al tamaño del fragmento y C a la formación para las reuniones, aspectos que aquí no se ven afectados.",
          "source": "Sample Exam 4 #16",
          "lang": "es"
        },
        {
          "id": "S4-017",
          "topic": "FL-3.1.3",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál es la principal diferencia entre las pruebas estáticas y las pruebas dinámicas?",
          "options": [
            "Las pruebas estáticas las realizan los desarrolladores; las pruebas dinámicas las realizan los probadores",
            "Los casos de prueba manuales se utilizan para pruebas dinámicas; las pruebas automatizadas se utilizan para pruebas estáticas",
            "Las pruebas estáticas deben ejecutarse antes de las pruebas dinámicas",
            "Las pruebas dinámicas requieren ejecutar el software; el software no se ejecuta durante las pruebas estáticas ISTQB Foundation Level v4.0.1 Sample Exam #4 Questions"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. La diferencia esencial es que las pruebas dinámicas requieren ejecutar el software, mientras que las estáticas examinan el producto sin ejecutarlo. A es falsa porque ambos tipos pueden realizarlos desarrolladores y probadores; B confunde lo manual con lo estático, y C no se sostiene: la estática puede hacerse en cualquier momento, aunque suela preceder a la dinámica.",
          "source": "Sample Exam 4 #17",
          "lang": "es"
        },
        {
          "id": "S4-018",
          "topic": "FL-3.2.4",
          "level": "K2",
          "type": "single",
          "question": "Si una sesión de revisión es liderada por el autor del producto de trabajo, ¿qué tipo de revisión es?",
          "options": [
            "Ad hoc",
            "Walkthrough",
            "Inspección",
            "Auditoría"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. En el walkthrough o recorrido es el autor del producto de trabajo quien dirige la sesión y presenta el material a los revisores. A no es una sesión organizada de ese modo; C se caracteriza porque la conduce el facilitador o moderador, y D la lidera habitualmente un tercero independiente, por lo que no encajan con la situación descrita.",
          "source": "Sample Exam 4 #18",
          "lang": "es"
        }
      ]
    },
    {
      "id": 4,
      "title": "Análisis y diseño de pruebas",
      "short": "Análisis y diseño",
      "weight": 27.5,
      "questions": [
        {
          "id": "A-019",
          "topic": "FL-4.1.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes es una característica de las técnicas de prueba basadas en la experiencia?",
          "options": [
            "Los casos de prueba se crean con base en información detallada del diseño",
            "Los elementos probados dentro de la sección del código de interfaz se utilizan para medir la cobertura",
            "Las técnicas de prueba dependen en gran medida del conocimiento del probador sobre el software y el dominio del negocio",
            "Los casos de prueba se utilizan para identificar desviaciones respecto a los requisitos"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Las técnicas basadas en la experiencia dependen en gran medida del conocimiento y la experiencia del probador sobre el software, el dominio del negocio y los defectos probables. A y B son características de las técnicas de caja blanca, que parten de la estructura y miden cobertura; D es propia de las de caja negra, que contrastan la implementación con los requisitos.",
          "source": "Sample Exam A #19",
          "lang": "es"
        },
        {
          "id": "A-020",
          "topic": "FL-4.2.1",
          "level": "K3",
          "type": "single",
          "question": "Está probando un formulario simplificado de búsqueda de apartamentos que tiene solo dos criterios de búsqueda: •      piso (con tres opciones posibles: planta baja; primer piso; segundo piso o superior) •      tipo de jardín (con tres opciones posibles: sin jardín; jardín pequeño; jardín grande) Cada uno de los apartamentos en planta baja tiene jardín, los apartamentos en pisos superiores no. El formulario tiene un mecanismo de validación incorporado que no le permitirá usar los criterios de búsqueda que violen esta regla. Cada prueba tiene dos valores de entrada: piso y tipo de jardín. Desea aplicar partición de equivalencia (EP) para cubrir cada piso y cada tipo de jardín en sus pruebas. ¿Cuál es el número mínimo de casos de prueba para lograr una cobertura EP del 100% para las particiones válidas?",
          "options": [
            "3",
            "4",
            "5",
            "6 Select ONE option"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Con cobertura de cada elección hacen falta cuatro casos: dos en planta baja, uno con jardín pequeño y otro con jardín grande, y uno por cada uno de los otros dos pisos, ambos sin jardín. Tres casos no alcanzarían para cubrir todas las particiones válidas y seis superaría el mínimo requerido.",
          "source": "Sample Exam A #20",
          "lang": "es"
        },
        {
          "id": "A-021",
          "topic": "FL-4.2.2",
          "level": "K3",
          "type": "single",
          "question": "Está probando un sistema que calcula la calificación final del curso para un estudiante dado. La calificación final se asigna con base en el resultado final, de acuerdo con las siguientes reglas: •      0 – 50 puntos: reprobado •      51 – 60 puntos: aceptable •      61 – 70 puntos: satisfactorio •      71 – 80 puntos: bueno •      81 – 90 puntos: muy bueno •      91 – 100 puntos: excelente Ha preparado el siguiente conjunto de casos de prueba: Resultado                  Calificación                  final TC1                 91                  excelente TC2                 50                    reprobado TC3                 81                  muy bueno TC4                 60                      aceptable TC5                 70                 satisfactorio TC6                 80                    bueno ¿Cuál es la cobertura del análisis de valores límite de 2 valores (BVA) para el resultado final que se logra con los casos de prueba existentes?",
          "options": [
            "50%",
            "60%",
            "33.3%",
            "100%"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Hay doce valores límite (0, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91 y 100) y los casos cubren seis: 91, 50, 81, 60, 70 y 80, es decir, 6/12, un 50%. Cada caso aporta solo uno de los dos valores límite de su rango, de ahí que falte la otra mitad, y las demás cifras no corresponden a esa proporción.",
          "source": "Sample Exam A #21",
          "lang": "es"
        },
        {
          "id": "A-022",
          "topic": "FL-4.2.3",
          "level": "K3",
          "type": "single",
          "question": "Su tienda favorita de alquiler diario de bicicletas acaba de introducir un nuevo sistema de gestión de relaciones con los clientes y le pidió a usted, uno de sus miembros más leales, que lo probara. Las funcionalidades implementadas son las siguientes: •      Cualquiera puede alquilar una bicicleta, pero los miembros reciben un 20% de descuento •      Sin embargo, si se incumple la fecha límite de devolución, el descuento ya no está disponible •      Después de 15 alquileres, los miembros reciben un regalo: una camiseta La tabla de decisión que describe las funcionalidades implementadas es la siguiente: Condiciones                   R1   R2    R3   R4   R5   R6   R7    R8 Ser miembro              T    T     T    T    F    F    F     F Fecha límite incumplida             T    F     T    F    T    F    F     T 15.º alquiler            F    F     T    T    F    F    T     T Acciones Descuento del 20%                   X          X Camiseta de regalo                      X     X                    X Con base SOLO en la descripción de funcionalidades del sistema de gestión de relaciones con los clientes, ¿cuál de las reglas anteriores describe una situación imposible?",
          "options": [
            "R4",
            "R2",
            "R6",
            "R8"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. En R8 el cliente no es miembro y además incumplió la fecha límite, pero la regla le entrega la camiseta de regalo, y solo los miembros pueden recibirla tras quince alquileres: situación imposible. R2, R4 y R6 describen combinaciones coherentes: el descuento exige ser miembro y no incumplir la fecha, y la camiseta llega con el decimoquinto alquiler.",
          "source": "Sample Exam A #22",
          "lang": "es",
          "note": "",
          "image": "assets/fig-a-22.png"
        },
        {
          "id": "A-023",
          "topic": "FL-4.2.4",
          "level": "K3",
          "type": "single",
          "question": "Prueba un sistema cuyo ciclo de vida está modelado por el diagrama de transición de estados que se muestra a continuación. El sistema comienza en el estado INIT y termina su operación en el estado OFF. ¿Cuál es el número MÍNIMO de casos de prueba para lograr cobertura de transiciones válidas?",
          "options": [
            "4",
            "2",
            "7",
            "3"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Se necesitan al menos tres casos porque las transiciones de prueba y de error no pueden ocurrir en el mismo caso, ni tampoco ambas transiciones de finalización: por ejemplo test-done, run-error-done y run-pause-resume-pause-done. Dos casos no cubrirían todas las transiciones válidas y cuatro o siete exceden el mínimo.",
          "source": "Sample Exam A #23",
          "lang": "es",
          "note": "",
          "image": "assets/fig-a-23.png"
        },
        {
          "id": "A-024",
          "topic": "FL-4.3.1",
          "level": "K2",
          "type": "single",
          "question": "Su suite de pruebas alcanzó el 100% de cobertura de sentencias. ¿Cuál es la consecuencia de este hecho?",
          "options": [
            "Cada instrucción en el código que contiene un defecto ha sido ejecutada al menos una vez",
            "Cualquier suite de pruebas que contenga más casos de prueba que su suite de pruebas también alcanzará el 100% de cobertura de sentencias",
            "Cada camino en el código ha sido ejecutado al menos una vez",
            "Cada combinación de valores de entrada ha sido probada al menos una vez"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Con cobertura de sentencias del 100% toda instrucción, incluidas las que contienen defectos, se ejecutó y evaluó al menos una vez. B es falsa porque la cobertura depende de lo que se prueba y no del número de casos; C es falsa porque con bucles existen infinitos caminos posibles; D también, pues las pruebas exhaustivas son imposibles.",
          "source": "Sample Exam A #24",
          "lang": "es"
        },
        {
          "id": "A-025",
          "topic": "FL-4.3.3",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones NO es verdadera para las pruebas de caja blanca?",
          "options": [
            "Durante las pruebas de caja blanca se considera toda la implementación del software",
            "Las métricas de cobertura de caja blanca pueden ayudar a identificar pruebas adicionales para aumentar la cobertura de código",
            "Las técnicas de pruebas de caja blanca se pueden usar en pruebas estáticas",
            "Las pruebas de caja blanca pueden ayudar a identificar brechas en la implementación de requisitos"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Las técnicas de caja blanca se basan en la estructura del objeto de prueba y no en la especificación de requisitos, así que no detectan implementaciones faltantes: esa es su debilidad. A, B y C sí son verdaderas: consideran toda la implementación, las métricas de cobertura orientan pruebas adicionales y pueden usarse en pruebas estáticas como las revisiones.",
          "source": "Sample Exam A #25",
          "lang": "es"
        },
        {
          "id": "A-026",
          "topic": "FL-4.4.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes opciones describe MEJOR el concepto detrás de la estimación de errores?",
          "options": [
            "La estimación de errores implica usar su conocimiento y experiencia sobre defectos encontrados en el pasado y errores típicos cometidos por los desarrolladores",
            "La estimación de errores implica usar su experiencia personal de desarrollo y los errores que usted cometió como desarrollador",
            "La estimación de errores requiere que usted imagine que es el usuario del objeto de prueba y adivine los errores que el usuario podría cometer al interactuar con él",
            "La estimación de errores requiere que usted duplique rápidamente la tarea de desarrollo para identificar el tipo de errores que un desarrollador podría cometer"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. La estimación de errores consiste en usar el conocimiento y la experiencia sobre defectos encontrados en el pasado, y a veces listas de verificación, para anticipar qué errores pudo cometer el desarrollador. B reduce la técnica a la experiencia personal como desarrollador; C la confunde con pruebas de usabilidad; D propone duplicar el desarrollo, algo poco práctico que no es estimación de errores.",
          "source": "Sample Exam A #26",
          "lang": "es"
        },
        {
          "id": "A-027",
          "topic": "FL-4.4.2",
          "level": "K2",
          "type": "single",
          "question": "En su proyecto ha habido un retraso en la liberación de una aplicación completamente nueva y la ejecución de pruebas comenzó tarde, pero usted tiene un conocimiento del dominio muy detallado y buenas habilidades analíticas. La lista completa de requisitos aún no se ha compartido con el equipo, pero la gerencia está solicitando que se presenten algunos resultados de pruebas. ¿Qué técnica de pruebas encaja MEJOR en esta situación?",
          "options": [
            "Pruebas basadas en listas de verificación",
            "Estimación de errores",
            "Pruebas exploratorias",
            "Pruebas de ramas"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Las pruebas exploratorias encajan cuando hay pocas especificaciones conocidas y presión de tiempo, como aquí, con requisitos aún sin compartir y necesidad de resultados prontos. A falla porque es un producto nuevo y probablemente no hay lista de verificación; B porque falta información para adivinar errores; D porque las pruebas de rama consumen tiempo y no aprovechan el conocimiento del dominio.",
          "source": "Sample Exam A #27",
          "lang": "es"
        },
        {
          "id": "A-028",
          "topic": "FL-4.5.2",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes opciones describe MEJOR la forma en que se pueden documentar los criterios de aceptación?",
          "options": [
            "Realizar retrospectivas para determinar las necesidades reales de los interesados con respecto a una historia de usuario dada",
            "Usar el formato dado/cuando/entonces para describir un ejemplo de condición de prueba relacionada con una historia de usuario dada",
            "Usar comunicación verbal para reducir el riesgo de que otros malinterpreten los criterios de aceptación",
            "Documentar los riesgos relacionados con una historia de usuario dada en un plan de pruebas para facilitar las pruebas basadas en riesgo de una historia de usuario dada"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. El formato dado/cuando/entonces es la forma estándar de documentar los criterios de aceptación como ejemplos de condiciones de prueba ligadas a una historia de usuario. A confunde la retrospectiva con la documentación de criterios; C es incorrecta porque la comunicación verbal no deja documentación; D mezcla los criterios de aceptación con riesgos del plan de pruebas.",
          "source": "Sample Exam A #28",
          "lang": "es"
        },
        {
          "id": "A-029",
          "topic": "FL-4.5.3",
          "level": "K3",
          "type": "single",
          "question": "Considere la siguiente historia de usuario: Como Editor quiero revisar el contenido antes de que se publique para poder asegurar que la gramática sea correcta y sus criterios de aceptación: •      El usuario puede iniciar sesión en el sistema de gestión de contenido con el rol \"Editor\" •      El editor puede ver las páginas de contenido existentes •      El editor puede editar el contenido de la página •      El editor puede agregar comentarios de marcado •      El editor puede guardar cambios •      El editor puede reasignar al rol \"propietario del contenido\" para realizar actualizaciones ¿Cuál de las siguientes es el MEJOR ejemplo de una prueba ATDD para esta historia de usuario?",
          "options": [
            "Probar si el editor puede guardar el documento después de editar el contenido de la página",
            "Probar si el propietario del contenido puede iniciar sesión y realizar actualizaciones al contenido",
            "Probar si el editor puede programar el contenido editado para su publicación",
            "Probar si el editor puede reasignar a otro editor para realizar actualizaciones"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Esta prueba deriva directamente de dos criterios de aceptación de la historia: editar el contenido de la página y guardar los cambios. B prueba actividades del propietario del contenido, que no están en los criterios; C añade programar la publicación, funcionalidad no cubierta; D plantea reasignar a otro editor, cuando el criterio es reasignar al propietario del contenido.",
          "source": "Sample Exam A #29",
          "lang": "es"
        },
        {
          "id": "B-019",
          "topic": "FL-4.1.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones describe MEJOR la diferencia entre las pruebas de tabla de decisión y las pruebas de ramas?",
          "options": [
            "En las pruebas de tabla de decisión, los casos de prueba se derivan de las sentencias de decisión en el código. En las pruebas de ramas, los casos de prueba se derivan del conocimiento del flujo de control del objeto de prueba.",
            "En las pruebas de tabla de decisión, los casos de prueba se derivan de la especificación que describe la lógica del negocio. En las pruebas de ramas, los casos de prueba se basan en la anticipación de defectos potenciales en el código fuente.",
            "En las pruebas de tabla de decisión, los casos de prueba se derivan del conocimiento del flujo de control del objeto de prueba. En las pruebas de ramas, los casos de prueba se derivan de la especificación que describe la lógica del negocio.",
            "En las pruebas de tabla de decisión, los casos de prueba son independientes de cómo se implementa el software. En las pruebas de ramas, los casos de prueba solo se pueden crear después del diseño o la implementación del código."
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. La tabla de decisión es una técnica de caja negra basada en la lógica de negocio especificada, así que sus casos no dependen de cómo se implemente el software; las pruebas de ramas son de caja blanca y requieren conocer la estructura interna, por lo que solo pueden crearse tras el diseño o la codificación. Las demás opciones invierten ambas técnicas o atribuyen a las ramas la anticipación de defectos, propia del error guessing.",
          "source": "Sample Exam B #19",
          "lang": "es",
          "note": "Esta pregunta incluye un diagrama o tabla en el PDF oficial; revisa el material original para verla completa."
        },
        {
          "id": "B-020",
          "topic": "FL-4.2.1",
          "level": "K3",
          "type": "single",
          "question": "Los clientes de la cadena de lavado de autos TestWash tienen tarjetas con un registro del número de lavados que han comprado hasta el momento. El valor inicial es 0. Después de ingresar al lavado de autos, el sistema incrementa en uno el número de la tarjeta. Este valor representa el número del lavado actual. Con base en este número, el sistema decide qué descuento le corresponde al cliente. Por cada décimo lavado, el sistema otorga un 10% de descuento, y por cada vigésimo lavado, el sistema otorga un 40% de descuento adicional (es decir, un 50% de descuento en total). ¿Cuál de los siguientes conjuntos de datos de entrada (entendidos como los números del lavado actual) logra la mayor cobertura de particiones de equivalencia?",
          "options": [
            "19, 20, 30",
            "11, 12, 20",
            "1, 10, 50",
            "10, 29, 30, 31"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Existen tres particiones válidas: sin descuento, 10% en cada décimo lavado y 50% en cada vigésimo; 19, 20 y 30 aportan un valor de cada una y logran cobertura completa. Las demás combinaciones cubren solo dos particiones: omiten la partición del 50% o incluyen varios valores dentro de una misma partición, sin añadir cobertura.",
          "source": "Sample Exam B #20",
          "lang": "es"
        },
        {
          "id": "B-021",
          "topic": "FL-4.2.2",
          "level": "K3",
          "type": "single",
          "question": "Está probando un formulario que verifica la corrección de la longitud de la contraseña ingresada como entrada. El formulario acepta una contraseña con la longitud correcta y rechaza una contraseña demasiado corta o demasiado larga. La longitud de la contraseña es correcta si tiene entre 6 y 12 caracteres inclusive. De lo contrario, se considera incorrecta. Al principio, el formulario está vacío (longitud de la contraseña = 0). Aplica análisis de valores límite a la variable “longitud de la contraseña”. Su conjunto de casos de prueba logra una cobertura de valores límite de 2 valores del 100%. El equipo decidió que, debido al alto riesgo de este componente, se deben agregar casos de prueba para garantizar una cobertura de valores límite de 3 valores del 100%. ¿Qué longitudes de contraseña adicionales se deben probar para lograr esto?",
          "options": [
            "4, 5, 13, 14",
            "7, 11",
            "1, 5, 13",
            "1, 4, 7, 11, 14"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Con tres valores por límite hay que probar 0, 1, 4, 5, 6, 7, 11, 12, 13 y 14; como la cobertura de dos valores ya cubrió 0, 5, 6, 12 y 13, faltan 1, 4, 7, 11 y 14. Las demás opciones olvidan límites internos o exteriores, o se limitan a valores del borde superior, de modo que no completan los tres valores en cada límite.",
          "source": "Sample Exam B #21",
          "lang": "es"
        },
        {
          "id": "B-022",
          "topic": "FL-4.2.3",
          "level": "K3",
          "type": "single",
          "question": "La siguiente tabla de decisión contiene las reglas para determinar el riesgo de aterosclerosis. Regla 1    Regla 2    Regla 3    Regla 4    Regla 5 Condiciones Colesterol (mg/dl)                                          125 –     125 – ≤124    ≤ 124                         ≥ 201 200       200 Presión arterial (mm ≤ 140    > 140     ≤ 140     > 140       – Hg) Acción Nivel de riesgo             muy bajo    bajo     medio      alto    muy alto Diseñó los casos de prueba con los siguientes datos de entrada: TC1:            Colesterol = 125 mg/dl            Presión arterial = 141 mm Hg TC2:            Colesterol = 200 mg/dl            Presión arterial = 201 mm Hg TC3:            Colesterol = 124 mg/dl            Presión arterial = 201 mm Hg TC4:            Colesterol = 109 mg/dl            Presión arterial = 200 mm Hg TC5:            Colesterol = 201 mg/dl            Presión arterial = 140 mm Hg ¿Cuál es la cobertura de la tabla de decisión lograda por estos casos de prueba?",
          "options": [
            "40%",
            "60%",
            "80%",
            "100%"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Cada caso de prueba activa una columna: TC1 y TC2 cubren la regla 4, TC3 y TC4 la regla 2, y TC5 la regla 5, de modo que se cubren tres de las cinco reglas, es decir, el 60%. El 40% correspondería a dos columnas, y el 80% o el 100% exigirían cubrir cuatro o las cinco, algo que estos datos no logran porque las reglas 1 y 3 quedan sin ejercitar.",
          "source": "Sample Exam B #22",
          "lang": "es",
          "note": "",
          "image": "assets/fig-b-22.png"
        },
        {
          "id": "B-023",
          "topic": "FL-4.2.4",
          "level": "K3",
          "type": "single",
          "question": "Un sistema de almacenamiento puede almacenar hasta tres elementos y se modela mediante el siguiente diagrama de transición de estados. La variable N representa el número de elementos almacenados actualmente. ¿Cuál de los siguientes casos de prueba, representados como secuencias de eventos, logra el mayor nivel de cobertura de transiciones válidas?",
          "options": [
            "Add, Remove, Add, Add, Add",
            "Add, Add, Add, Add, Remove, Remove",
            "Add, Add, Add, Remove, Remove",
            "Add, Add, Add, Remove, Add"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. La secuencia Add, Add, Add, Remove, Remove recorre las cinco transiciones válidas del diagrama y alcanza el 100%. Otras secuencias dejan transiciones sin cubrir y llegan solo al 80%, y la que encadena cuatro Add seguidas es además inviable, porque desde el estado lleno no existe transición válida disparada por Add.",
          "source": "Sample Exam B #23",
          "lang": "es",
          "note": "",
          "image": "assets/fig-b-23.png"
        },
        {
          "id": "B-024",
          "topic": "FL-4.3.1",
          "level": "K2",
          "type": "single",
          "question": "Ejecuta dos casos de prueba, T1 y T2, sobre el mismo código. La prueba T1 logró una cobertura de sentencias del 40% y la prueba T2 logró una cobertura de sentencias del 65%. ¿Cuál de las siguientes afirmaciones debe ser necesariamente verdadera?",
          "options": [
            "El conjunto de pruebas compuesto por las pruebas T1 y T2 logra una cobertura de sentencias del 105%",
            "Existe al menos una sentencia que debe haber sido ejecutada tanto por T1 como por T2",
            "Al menos el 5% de las sentencias en el código que se probó no son ejecutables",
            "El conjunto de pruebas compuesto por las pruebas T1 y T2 logra una cobertura de ramas completa"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Si las sentencias ejecutadas por T1 y T2 fueran disjuntas, la cobertura conjunta sería del 105%, lo cual es imposible; por tanto, al menos un 5% de las sentencias ejecutables fue recorrido por ambas. La cobertura nunca supera el 100%, no dice nada sobre sentencias no ejecutables y la cobertura de sentencias no implica cobertura de ramas completa.",
          "source": "Sample Exam B #24",
          "lang": "es"
        },
        {
          "id": "B-025",
          "topic": "FL-4.3.2",
          "level": "K2",
          "type": "single",
          "question": "Sea la métrica de cobertura de ramas definida como BCov = (X / Y) * 100%. ¿Qué representan X e Y en esta fórmula?",
          "options": [
            "X = número de resultados de decisión ejercitados por los casos de prueba Y = número total de resultados de decisión en el código",
            "X = número de ramas condicionales ejercitadas por los casos de prueba Y = número total de ramas en el código",
            "X = número de ramas ejercitadas por los casos de prueba Y = número total de ramas en el código",
            "X = número de ramas condicionales ejercitadas por los casos de prueba Y = número total de resultados de decisión en el código"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. En la cobertura de ramas el numerador cuenta todas las ramas ejercitadas y el denominador todas las ramas del código, sin distinguir entre condicionales e incondicionales. Las opciones que hablan solo de resultados de decisión o de ramas condicionales dejan fuera las transferencias incondicionales, y por eso describen una métrica distinta e incompleta.",
          "source": "Sample Exam B #25",
          "lang": "es"
        },
        {
          "id": "B-026",
          "topic": "FL-4.4.2",
          "level": "K2",
          "type": "multi",
          "question": "¿Cuáles DOS de las siguientes afirmaciones proporcionan la MEJOR justificación para usar pruebas exploratorias?",
          "options": [
            "A los probadores no se les ha asignado suficiente tiempo para el diseño y la ejecución de pruebas",
            "La estrategia de pruebas existente requiere que los probadores usen técnicas formales de pruebas de caja negra",
            "La especificación está escrita en un lenguaje formal que puede ser procesado por una herramienta",
            "Los probadores son miembros de un equipo ágil y tienen buenas habilidades de programación",
            "Los probadores tienen experiencia en el dominio del negocio y buenas habilidades analíticas"
          ],
          "answer": [
            0,
            4
          ],
          "explanation": "Correctas: A y E. Las pruebas exploratorias encajan cuando hay poco tiempo para diseñar y ejecutar, o especificaciones escasas, y resultan más eficaces con probadores experimentados, con conocimiento del dominio y buenas habilidades analíticas. Que la estrategia exija técnicas formales de caja negra, que la especificación sea formal y procesable o que los probadores programen bien no justifica su uso; de hecho, no es una técnica de caja negra.",
          "source": "Sample Exam B #26",
          "lang": "es"
        },
        {
          "id": "B-027",
          "topic": "FL-4.4.3",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes se ajusta MEJOR como elemento de la lista de verificación utilizada en las pruebas basadas en listas de verificación?",
          "options": [
            "“El desarrollador cometió un error al implementar el código”",
            "“La cobertura de sentencias lograda supera el 85%”",
            "“El programa funciona correctamente con respecto a los requisitos funcionales y no funcionales”",
            "“Los mensajes de error están escritos en un lenguaje que el usuario puede entender”"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Un elemento de lista de verificación debe ser una condición de prueba concreta y verificable por una persona, como la claridad de los mensajes de error para el usuario. Describir un error del desarrollador no es una condición de prueba, la cobertura de sentencias es un criterio de salida y afirmar que el programa funciona según todos los requisitos es demasiado general.",
          "source": "Sample Exam B #27",
          "lang": "es"
        },
        {
          "id": "B-028",
          "topic": "FL-4.5.2",
          "level": "K2",
          "type": "single",
          "question": "Considere los siguientes criterios de aceptación para una historia de usuario escrita desde la perspectiva del propietario de una tienda en línea. Dado que el usuario ha iniciado sesión y está en la página de inicio, Cuando el usuario hace clic en el botón \"Add Item\", Entonces debería aparecer el formulario \"Create Item\", Y el usuario debería poder ingresar un nombre y un precio para el nuevo artículo. ¿En qué formato están escritos estos criterios de aceptación?",
          "options": [
            "Orientado a reglas",
            "Orientado a escenarios",
            "Orientado a producto",
            "Orientado a procesos"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. El formato Dado que, Cuando, Entonces describe un escenario concreto que debe verificarse, por lo que es orientado a escenarios. El formato orientado a reglas usaría listas de verificación o tablas de entradas y salidas que muestren explícitamente las reglas; las otras dos categorías no existen como formatos de criterios de aceptación.",
          "source": "Sample Exam B #28",
          "lang": "es"
        },
        {
          "id": "B-029",
          "topic": "FL-4.5.3",
          "level": "K3",
          "type": "single",
          "question": "Su equipo analiza la siguiente historia de usuario para definir los criterios de aceptación: Como cliente registrado, quiero poder ver mis pedidos anteriores en el sitio web de la empresa, para poder hacer seguimiento de mis compras. ¿Cuál de los siguientes casos de prueba NO será relevante para esta historia de usuario?",
          "options": [
            "Entrada: el cliente inicia sesión en su cuenta en el sitio web y hace clic en el botón “ver historial de pedidos” Resultado esperado: el sistema muestra una lista de todos los pedidos anteriores del cliente, incluida la fecha, el número de pedido y el costo total",
            "Entrada: el cliente hace clic en un pedido de la lista de pedidos Resultado esperado: el sistema muestra los artículos individuales comprados, junto con sus precios y cantidades",
            "Entrada: el cliente hace clic en el botón “Ordenar ascendente” en la pantalla de historial de pedidos Resultado esperado: el sistema muestra el historial de pedidos ordenado por número de pedido en orden ascendente",
            "Entrada: un cliente no registrado se registra como nuevo cliente con una dirección de correo electrónico válida que no existe ya en la base de datos de clientes Resultado esperado: el sistema acepta el registro y crea la cuenta"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. El caso describe el registro de un cliente nuevo, un proceso que la historia no menciona, ya que esta trata solo de consultar pedidos anteriores. Los otros tres casos sí derivan de la historia: ver el historial, abrir un pedido para ver sus artículos y ordenar la lista por número de pedido.",
          "source": "Sample Exam B #29",
          "lang": "es"
        },
        {
          "id": "C-019",
          "topic": "FL-4.1.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál es la diferencia PRINCIPAL entre las técnicas de prueba de caja negra y las técnicas de prueba basadas en la experiencia?",
          "options": [
            "El objeto de prueba",
            "El nivel de prueba en el que se utiliza la técnica de prueba",
            "La base de prueba",
            "El ciclo de vida de desarrollo de software (SDLC) en el que se puede utilizar la técnica de prueba"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Las técnicas de caja negra se basan en la especificación del comportamiento, mientras que las basadas en la experiencia usan el conocimiento del probador y pueden prescindir de la especificación; esa es la diferencia principal. Ambas pueden aplicarse al mismo objeto de prueba (A), en todos los niveles (B) y en cualquier ciclo de vida (D).",
          "source": "Sample Exam C #19",
          "lang": "es"
        },
        {
          "id": "C-020",
          "topic": "FL-4.2.1",
          "level": "K3",
          "type": "single",
          "question": "Está probando un validador de PIN, que acepta PIN válidos y rechaza PIN inválidos. Un PIN es una secuencia de dígitos. Un PIN es válido si consta de cuatro dígitos, que no sean todos el mismo dígito. Ha identificado las siguientes particiones de equivalencia válidas: Variable: longitud del código PIN • La partición “longitud correcta”                       - PIN de cuatro dígitos • La partición “longitud incorrecta”                     - PIN con longitud diferente de 4 Variable: número de dígitos diferentes • La partición “número de dígitos diferentes correcto”   - PIN con al menos dos dígitos diferentes • La partición “número de dígitos diferentes incorrecto” - PIN con todos los dígitos iguales ¿Cuál de los siguientes es el MEJOR conjunto de datos de prueba de entrada para cubrir las particiones de equivalencia identificadas?",
          "options": [
            "12, 1111, 1234, 12345",
            "1, 123, 1111, 1234",
            "11, 12, 1111, 12345",
            "123, 1222, 12345"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. “12” cubre longitud incorrecta por defecto, “1111” cubre longitud correcta con todos los dígitos iguales, “1234” cubre longitud correcta con al menos dos dígitos distintos y “12345” cubre longitud incorrecta por exceso, así que las cuatro particiones quedan cubiertas. B y C omiten el PIN válido y D no cubre la partición del número de dígitos diferentes.",
          "source": "Sample Exam C #20",
          "lang": "es"
        },
        {
          "id": "C-021",
          "topic": "FL-4.2.2",
          "level": "K3",
          "type": "single",
          "question": "A un desarrollador se le pidió implementar la siguiente regla de negocio: ENTRADA: valor (número entero) SI (valor ≤ 100 O valor ≥ 200) ENTONCES escribir “valor incorrecto” SI NO escribir “valor OK” Usted diseña los casos de prueba utilizando análisis de valores límite de 2 valores. ¿Cuál de los siguientes conjuntos de entradas de prueba logra la mayor cobertura?",
          "options": [
            "100,             150,         200,          201",
            "99,              100,         200,          201",
            "98,              99,          100,          101",
            "101,             150,         199,          200"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Las particiones son hasta 100, de 101 a 199 y desde 200; los valores límite son 100, 101, 199 y 200. Con análisis de dos valores, 101, 199 y 200 cubren tres de los cuatro elementos, un 75%. A y B solo aportan 100 y 200, y C solo 100 y 101, alcanzando apenas un 50%.",
          "source": "Sample Exam C #21",
          "lang": "es"
        },
        {
          "id": "C-022",
          "topic": "FL-4.2.3",
          "level": "K3",
          "type": "single",
          "question": "Está trabajando en un proyecto para desarrollar un sistema para analizar los resultados de exámenes de conducción. Se le ha pedido diseñar casos de prueba basados en la siguiente tabla de decisión. R1   R2      R3 C1: ¿Primer intento en el examen?          -        -   F C2: ¿Examen teórico aprobado?            T        F   - C3: ¿Examen práctico aprobado?          T        -   F ¿Emitir licencia de conducción?   X ¿Solicitar lecciones de conducción adicionales?                           X ¿Solicitar presentar el examen nuevamente?                       X ¿Qué datos de prueba mostrarán que hay reglas contradictorias en la tabla de decisión?",
          "options": [
            "C1 = T, C2 = T, C3 = F",
            "C1 = T, C2 = F, C3 = T",
            "C1 = T, C2 = T, C3 = T y C1 = F, C2 = T, C3 = T",
            "C1 = F, C2 = F, C3 = F"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. La combinación C1=F, C2=F, C3=F encaja simultáneamente en las reglas R2 y R3, que definen acciones distintas, y esa ambigüedad evidencia la contradicción. La combinación (T, T, F) no corresponde a ninguna regla, lo que sería una omisión (A); (T, F, T) solo coincide con R2 (B); y ambas combinaciones de C coinciden únicamente con R1.",
          "source": "Sample Exam C #22",
          "lang": "es",
          "note": "",
          "image": "assets/fig-c-22.png"
        },
        {
          "id": "C-023",
          "topic": "FL-4.2.4",
          "level": "K3",
          "type": "single",
          "question": "Está diseñando casos de prueba basados en el siguiente diagrama de transición de estados: ¿Cuál es el número MÍNIMO de casos de prueba requeridos para lograr una cobertura del 100% de transiciones válidas?",
          "options": [
            "3",
            "2",
            "5",
            "6"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Tres transiciones no pueden aparecer en un mismo caso de prueba: de REQUESTING a CONFIRMED, de WAITING LIST a CONFIRMED y de WAITING LIST a END; por eso se necesitan al menos tres casos, y con ellos se cubren todas las transiciones válidas. Las demás cantidades no permiten alcanzar el 100% de cobertura de transiciones.",
          "source": "Sample Exam C #23",
          "lang": "es",
          "note": "",
          "image": "assets/fig-c-23.png"
        },
        {
          "id": "C-024",
          "topic": "FL-4.3.2",
          "level": "K2",
          "type": "single",
          "question": "Desea aplicar pruebas de ramas al código representado por el siguiente grafo de flujo de control. ¿Cuántos elementos de cobertura necesita probar?",
          "options": [
            "2",
            "4",
            "8",
            "7"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. En las pruebas de ramas los elementos de cobertura son las ramas, que se representan mediante las aristas del grafo de flujo de control, y ese grafo tiene exactamente ocho aristas. Por eso hay que probar ocho elementos de cobertura; las demás cifras no corresponden al número de aristas del grafo ni al de nodos o decisiones.",
          "source": "Sample Exam C #24",
          "lang": "es",
          "note": "Esta pregunta incluye un diagrama o tabla en el PDF oficial; revisa el material original para verla completa."
        },
        {
          "id": "C-025",
          "topic": "FL-4.3.3",
          "level": "K2",
          "type": "single",
          "question": "¿Cómo pueden ser útiles las pruebas de caja blanca como apoyo a las pruebas de caja negra?",
          "options": [
            "Las medidas de cobertura de caja blanca pueden ayudar a los probadores a evaluar las pruebas de caja negra en términos de la cobertura de código alcanzada por estas pruebas de caja negra",
            "El análisis de cobertura de caja blanca puede ayudar a los probadores a identificar fragmentos inalcanzables del código fuente",
            "Las pruebas de rama subsumen las técnicas de prueba de caja negra, por lo que alcanzar la cobertura total de ramas garantiza alcanzar la cobertura total de cualquier técnica de caja negra",
            "Las técnicas de prueba de caja blanca pueden proporcionar elementos de cobertura para las técnicas de caja negra"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Las pruebas de caja negra no miden la cobertura real del código; las medidas de caja blanca aportan esa medición objetiva y permiten generar pruebas adicionales para aumentarla. Identificar código inalcanzable (B) es cierto pero ajeno a la caja negra, y C y D suponen relaciones entre ambas técnicas que no existen.",
          "source": "Sample Exam C #25",
          "lang": "es"
        },
        {
          "id": "C-026",
          "topic": "FL-4.4.1",
          "level": "K2",
          "type": "single",
          "question": "Considere la siguiente lista: • Entrada correcta no aceptada • Entrada incorrecta aceptada • Formato de salida incorrecto • División por cero ¿Qué técnica de prueba es MÁS PROBABLEMENTE utilizada por el probador que usa esta lista al realizar pruebas?",
          "options": [
            "Pruebas exploratorias",
            "Ataque de fallos",
            "Pruebas basadas en listas de verificación",
            "Análisis de valores límite"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. La lista enumera posibles fallas y defectos, y el ataque de fallos consiste precisamente en crear o conseguir una lista de errores, defectos y fallas para diseñar pruebas que los expongan. Las pruebas exploratorias usan cartas de prueba (A), las listas de verificación contienen condiciones de prueba, no fallas (C), y el análisis de valores límite parte de particiones (D).",
          "source": "Sample Exam C #26",
          "lang": "es"
        },
        {
          "id": "C-027",
          "topic": "FL-4.4.3",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes describe MEJOR cómo el uso de pruebas basadas en listas de verificación puede resultar en una mayor cobertura?",
          "options": [
            "Los elementos de la lista de verificación pueden definirse con un nivel de detalle suficientemente bajo, de modo que el probador pueda implementar y ejecutar casos de prueba detallados basados en estos elementos",
            "Las listas de verificación pueden automatizarse, de modo que cada vez que una ejecución de prueba automatizada cubre los elementos de la lista de verificación, resulta en cobertura adicional",
            "Cada elemento de la lista de verificación debe probarse por separado e independientemente, de modo que los elementos cubran diferentes áreas del software",
            "Dos probadores que diseñan y ejecutan pruebas basadas en los mismos elementos de alto nivel de la lista de verificación normalmente realizarán las pruebas de maneras ligeramente diferentes"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Con listas de elementos de alto nivel hay variabilidad: dos probadores usan datos y pasos distintos y cada uno cubre áreas que el otro no, lo que aumenta la cobertura aunque reduce la repetibilidad. Detallar los elementos (A) no explica mayor cobertura, automatizar (B) repite siempre lo mismo y probar cada elemento por separado (C) afecta el orden, no la cobertura.",
          "source": "Sample Exam C #27",
          "lang": "es"
        },
        {
          "id": "C-028",
          "topic": "FL-4.5.2",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes proporciona el MEJOR ejemplo de un criterio de aceptación orientado a escenarios?",
          "options": [
            "La aplicación debe permitir a los usuarios eliminar su cuenta y todos los datos asociados a solicitud",
            "Cuando un cliente agrega un artículo a su carrito y procede al pago, se le debe solicitar iniciar sesión o crear una cuenta si aún no lo ha hecho",
            "IF (contain(product(23).Name, cart.products())) THEN return FALSE",
            "El sitio web debe cumplir con los Estándares de Accesibilidad TIC 508 y garantizar que todo el contenido sea accesible para usuarios con discapacidades"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Un criterio orientado a escenarios describe una situación concreta que el sistema debe realizar, como el flujo de añadir un artículo al carrito y proceder al pago. A y D son criterios orientados a reglas o normativas, y C es una línea de código que resulta incomprensible para los representantes del negocio.",
          "source": "Sample Exam C #28",
          "lang": "es"
        },
        {
          "id": "C-029",
          "topic": "FL-4.5.3",
          "level": "K3",
          "type": "single",
          "question": "Está utilizando desarrollo guiado por pruebas de aceptación y diseñando casos de prueba basados en la siguiente historia de usuario: Como usuario Regular o Especial, quiero poder usar mi tarjeta electrónica de piso, para acceder a pisos específicos. Criterios de aceptación: AC1: Los usuarios regulares tienen acceso a los pisos 1 a 3 AC2: El piso 4 solo es accesible para usuarios Especiales AC3: Los usuarios Especiales tienen todos los derechos de acceso de los usuarios Regulares ¿Cuál caso de prueba es el MÁS razonable para probar AC3?",
          "options": [
            "Verificar que un usuario Regular puede acceder a los pisos 1 y 3",
            "Verificar que un usuario Regular no puede acceder al piso 4",
            "Verificar que un usuario Especial puede acceder al piso 5",
            "Verificar que un usuario Especial puede acceder a los pisos 1, 2 y 3"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. AC3 exige comprobar que un usuario Especial tiene los mismos derechos que uno Regular, y eso se verifica comprobando su acceso a los pisos 1, 2 y 3. A y B prueban a un usuario Regular, y C introduce un piso 5 que no existe en los criterios y amplía indebidamente el alcance de la historia.",
          "source": "Sample Exam C #29",
          "lang": "es"
        },
        {
          "id": "D-019",
          "topic": "FL-4.1.1",
          "level": "K2",
          "type": "single",
          "question": "Realiza pruebas de sistema de una aplicación web de comercio electrónico y se le proporciona el siguiente requisito: REQ 05-017. Si el costo total de las compras excede $100, el cliente obtiene un 5% de descuento en compras posteriores. De lo contrario, el cliente no recibe descuento. ¿Qué técnicas de prueba serán MÁS útiles para diseñar casos de prueba basados en este requisito?",
          "options": [
            "Técnicas de prueba de caja blanca",
            "Técnicas de prueba de caja negra",
            "Técnicas de prueba basadas en la experiencia",
            "Técnicas de prueba basadas en riesgo"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. El requisito describe el comportamiento esperado del objeto de prueba, sin referirse a su estructura interna, por lo que las técnicas de caja negra son las adecuadas; expresiones como superar los cien dólares sugieren límites de particiones que conviene probar con análisis de valores límite o tablas de decisión. La caja blanca exige conocer la estructura, las basadas en experiencia son menos precisas aquí y las basadas en riesgo no son un tipo de técnica.",
          "source": "Sample Exam D #19",
          "lang": "es"
        },
        {
          "id": "D-020",
          "topic": "FL-4.2.1",
          "level": "K3",
          "type": "multi",
          "question": "El sistema de venta de entradas de cine calcula el tipo de descuento basándose en el año de nacimiento del cliente (BY) y en el año actual (CY) de la siguiente manera: Sea D la diferencia entre CY y BY, es decir, D = CY – BY • Si D < 0            entonces imprimir el mensaje de error “el año de nacimiento no puede ser mayor que el año actual” • Si 0 ≤ D < 18       entonces aplicar el descuento de estudiante • Si 18 ≤ D < 65      entonces no aplicar descuento • Si D ≥ 65           entonces aplicar el descuento de pensionado Su suite de pruebas ya contiene dos casos de prueba: • BY = 1990, CY = 2020,            resultado esperado: sin descuento • BY = 2030, CY = 2029,            resultado esperado: imprimir el mensaje de error ¿Cuál de los siguientes conjuntos de datos de prueba debe agregarse para lograr una cobertura total de partición de equivalencia válida para el tipo de descuento?",
          "options": [
            "BY = 2001,                         CY = 2065",
            "BY = 1900,                         CY = 1965",
            "BY = 1965,                         CY = 1900",
            "BY = 2011,                         CY = 2029",
            "BY = 2000,                         CY = 2000"
          ],
          "answer": [
            1,
            4
          ],
          "explanation": "Correctas: B y E. Faltan por cubrir las particiones de descuento de estudiante y de pensionado. En B la diferencia entre años es 65, que corresponde al descuento de pensionado; en E es 0, que corresponde al descuento de estudiante. Las opciones A y D dan diferencias de 64 y de 18, dentro de la partición sin descuento ya cubierta, y la opción C da menos 65, en la partición del mensaje de error también cubierta.",
          "source": "Sample Exam D #20",
          "lang": "es"
        },
        {
          "id": "D-021",
          "topic": "FL-4.2.2",
          "level": "K3",
          "type": "single",
          "question": "Está probando un sistema de control de temperatura para una instalación de almacenamiento en frío hortícola. El sistema recibe la temperatura (en grados Celsius enteros) como entrada. Si la temperatura está entre 0 y 2 grados inclusive, el sistema muestra el mensaje “temperatura OK”. Para temperaturas más bajas, el sistema muestra el mensaje \"temperatura demasiado baja\" y para temperaturas más altas muestra el mensaje “temperatura demasiado alta”. Utilizando análisis de valores límite de dos valores, ¿cuál de los siguientes conjuntos de entradas de prueba proporciona el mayor nivel de cobertura de valores límite?",
          "options": [
            "–1, 3",
            "0, 2",
            "–1, 0, 2, 3",
            "–2, 0, 2, 4"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Existen tres particiones: temperaturas menores que 0, de 0 a 2 inclusive, y mayores que 2. Con análisis de valores límite de dos valores hay que cubrir los límites de todas: menos 1 para la partición baja, 0 y 2 para la partición válida, y 3 para la alta. Las demás opciones omiten alguno de esos límites o incluyen valores que no son límite, por lo que logran una cobertura menor.",
          "source": "Sample Exam D #21",
          "lang": "es"
        },
        {
          "id": "D-022",
          "topic": "FL-4.2.3",
          "level": "K3",
          "type": "single",
          "question": "Está diseñando casos de prueba basados en la siguiente tabla de decisión. R1      R2        R3          R4   R5      R6     R7 C1: Edad                0-18   19-65     19-65    >65      0-18   19-65   >65 C2: Experiencia                      -      0-4        >4         -     -       -      - C3: ¿Registrado?                     NO      NO        NO          NO   YES    YES     YES Categoría                 A      A          B          B     B      D      C Hasta ahora ha diseñado los siguientes casos de prueba: • TC1: hombre de 19 años, no registrado y sin experiencia; resultado esperado: categoría A • TC2: mujer de 65 años, no registrada y con 5 años de experiencia; resultado esperado: categoría B • TC3: hombre de 66 años, registrado y sin experiencia; resultado esperado: categoría C • TC4: mujer de 65 años, registrada y con 4 años de experiencia; resultado esperado: categoría D ¿Cuál de los siguientes casos de prueba, al agregarse al conjunto existente de casos de prueba, aumentará la cobertura de la tabla de decisión?",
          "options": [
            "Hombre de 66 años, no registrado y sin experiencia;               resultado esperado: categoría B",
            "Mujer de 55 años, no registrada y con 2 años de experiencia; resultado esperado: categoría A",
            "Mujer de 19 años, registrada y con 5 años de experiencia;       resultado esperado: categoría D",
            "Ningún caso de prueba adicional puede aumentar la cobertura de la tabla de decisión ya alcanzada"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Los casos existentes cubren las reglas de 19 a 65 años no registrado sin experiencia, de 19 a 65 no registrado con más de 4 años, de mayores de 65 registrado, y de 19 a 65 registrado con 4 años de experiencia. El caso de 66 años, no registrado y sin experiencia activa una columna aún no cubierta, la de mayores de 65 no registrado. Las opciones B y C repiten reglas ya cubiertas, y la D es falsa porque quedan columnas sin cubrir.",
          "source": "Sample Exam D #22",
          "lang": "es",
          "note": "",
          "image": "assets/fig-d-22.png"
        },
        {
          "id": "D-023",
          "topic": "FL-4.2.4",
          "level": "K3",
          "type": "single",
          "question": "Está aplicando pruebas de transición de estados al sistema de reserva de habitaciones de hotel modelado por la siguiente tabla de transición de estados, con 4 estados y 5 eventos diferentes: Eventos Estado                    Available            NotAvailable   ChangeRoom   Cancel   Pay S1: Requesting                            S2                 S3 S2: Confirmed                                                                S1       S4      S4 S3: Waiting list                          S2                                          S4 S4: End Suponiendo que todos los casos de prueba comienzan en el estado ‘Requesting’, ¿cuál de los siguientes casos de prueba, representados como secuencias de eventos, alcanza la mayor cobertura de transiciones válidas?",
          "options": [
            "NotAvailable, Available,  ChangeRoom, NotAvailable, Cancel",
            "Available,    ChangeRoom, NotAvailable, Available,  Pay",
            "Available,    ChangeRoom, Available,    ChangeRoom, NotAvailable",
            "NotAvailable, Cancel,     ChangeRoom, Available,    Pay"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Esta secuencia recorre cinco transiciones distintas: de solicitud a confirmado, de confirmado a solicitud, de solicitud a lista de espera, de lista de espera a confirmado y de confirmado a fin. La opción A cubre solo cuatro, porque repite la transición hacia lista de espera; la C cubre tres por transiciones repetidas; y la D no es viable, pues tras cancelar el estado es final y no admite más eventos.",
          "source": "Sample Exam D #23",
          "lang": "es",
          "note": "",
          "image": "assets/fig-d-23.png"
        },
        {
          "id": "D-024",
          "topic": "FL-4.3.1",
          "level": "K2",
          "type": "single",
          "question": "Su conjunto de pruebas S para un programa P alcanza el 100% de cobertura de sentencias. Consta de tres casos de prueba, cada uno de los cuales alcanza el 50% de cobertura de sentencias. ¿Cuál de las siguientes afirmaciones es CORRECTA?",
          "options": [
            "Ejecutar S provocará todas las fallas posibles en P",
            "S alcanza el 100% de cobertura de ramas para P",
            "Cada sentencia ejecutable en P que contiene un defecto se ha ejecutado al menos una vez durante la ejecución de S",
            "Después de eliminar un caso de prueba de S, los dos casos de prueba restantes seguirán alcanzando el 100% de cobertura de sentencias"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. La cobertura de sentencias del cien por ciento significa que toda sentencia ejecutable se ejecutó al menos una vez, de modo que cualquier sentencia que contenga un defecto necesariamente se ejecutó. No implica que se provoquen todas las fallas posibles, porque una sentencia defectuosa puede no fallar con ciertos datos; tampoco garantiza cobertura de ramas; y al quitar un caso se puede perder cobertura de sentencias que solo él aportaba.",
          "source": "Sample Exam D #24",
          "lang": "es"
        },
        {
          "id": "D-025",
          "topic": "FL-4.3.3",
          "level": "K2",
          "type": "single",
          "question": "¿Por qué las pruebas de caja blanca facilitan la detección de defectos incluso cuando la especificación del software es vaga, desactualizada o incompleta?",
          "options": [
            "Los casos de prueba se diseñan basados en la estructura del objeto de prueba en lugar de la especificación",
            "Para cada técnica de pruebas de caja blanca la cobertura puede definirse bien y medirse fácilmente",
            "Las técnicas de pruebas de caja blanca están muy bien diseñadas para detectar omisiones en los requisitos",
            "Las técnicas de pruebas de caja blanca pueden usarse tanto en pruebas estáticas como en pruebas dinámicas"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. La fortaleza común de las técnicas de caja blanca es que consideran toda la implementación, por lo que detectan defectos aunque la especificación sea vaga, obsoleta o incompleta, como una funcionalidad añadida al código que no debería existir. Que la cobertura se defina y mida con precisión no es la razón; no detectan bien las omisiones de requisitos; y que puedan usarse en pruebas estáticas no explica esta ventaja.",
          "source": "Sample Exam D #25",
          "lang": "es"
        },
        {
          "id": "D-026",
          "topic": "FL-4.4.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes NO es anticipado por el probador al aplicar adivinación de errores?",
          "options": [
            "El desarrollador malinterpretó la fórmula en la historia de usuario para calcular el interés",
            "El desarrollador escribió “FA = A*(1+IR^N)” en lugar de “FA = A*(1+IR)^N” en el código fuente",
            "El desarrollador faltó al seminario sobre la nueva legislación de tasas de interés compuesto",
            "La exactitud del interés calculado por el sistema no es suficientemente precisa"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. La adivinación de errores anticipa errores, defectos y fallas a partir del conocimiento del probador. Que el desarrollador faltara al seminario es una posible causa raíz, que no es error, defecto ni falla, y resulta difícil de anticipar. Las demás opciones sí lo son: la fórmula malinterpretada es un error, la expresión escrita incorrectamente es un defecto y la precisión insuficiente del cálculo es una falla.",
          "source": "Sample Exam D #26",
          "lang": "es"
        },
        {
          "id": "D-027",
          "topic": "FL-4.4.2",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre las pruebas exploratorias?",
          "options": [
            "Los casos de prueba se diseñan antes de que comience la sesión de pruebas exploratorias",
            "El probador puede realizar la ejecución de pruebas, pero no puede realizar el diseño de pruebas",
            "Los resultados de las pruebas exploratorias son buenos predictores del número de defectos restantes",
            "Durante las pruebas exploratorias el probador puede usar técnicas de pruebas de caja negra"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. En las pruebas exploratorias el probador puede emplear cualquier técnica que le resulte útil, incluidas las de caja negra. Los casos no se diseñan antes de la sesión, sino durante ella, junto con el análisis, la implementación y la ejecución; el probador diseña y ejecuta de forma simultánea mientras aprende del objeto; y los resultados dependen mucho de su experiencia, por lo que no predicen de forma fiable los defectos restantes.",
          "source": "Sample Exam D #27",
          "lang": "es"
        },
        {
          "id": "D-028",
          "topic": "FL-4.5.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál práctica colaborativa de escritura de historias de usuario permite al equipo alcanzar una comprensión colectiva de lo que debe entregarse?",
          "options": [
            "Planning poker, para que un equipo pueda alcanzar consenso sobre el esfuerzo necesario para implementar una historia de usuario",
            "Revisiones, para que un equipo pueda detectar inconsistencias y contradicciones en una historia de usuario",
            "Planificación de iteración, para que las historias de usuario con el mayor valor de negocio para un cliente puedan priorizarse para su implementación",
            "Conversación, para que los miembros del equipo puedan entender cómo se usará el software"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. La conversación es la práctica colaborativa de escritura de historias que permite al equipo entender cómo se usará el software y definir criterios de aceptación con sentido, logrando una visión compartida de lo que debe entregarse. El planning poker estima el esfuerzo de una historia ya escrita; las revisiones no son una práctica de escritura colaborativa; y la planificación de iteración prioriza el trabajo, sin aclarar el contenido.",
          "source": "Sample Exam D #28",
          "lang": "es"
        },
        {
          "id": "D-029",
          "topic": "FL-4.5.3",
          "level": "K3",
          "type": "single",
          "question": "Acaba de comenzar a diseñar casos de prueba para la siguiente historia de usuario. Como cliente, quiero poder filtrar los resultados de búsqueda por rango de precio, para poder encontrar productos dentro de mi presupuesto más fácilmente. Criterios de aceptación: 1. El filtro debe funcionar para todas las versiones de la aplicación desde la versión 3.0 en adelante 2. El filtro debe permitir al cliente establecer un rango de precio con un precio mínimo y un precio máximo 3. Los resultados de búsqueda deben actualizarse dinámicamente a medida que el cliente ajusta el filtro de rango de precio En todos los casos de prueba la precondición es la siguiente: solo hay dos productos disponibles, los productos A y B. El producto A cuesta $100 y el producto B cuesta $110. ¿Cuál de los siguientes es el MEJOR ejemplo de un caso de prueba para esta historia de usuario?",
          "options": [
            "Ingresar a la página web y establecer el filtro para mostrar precios entre $90 y $100. Resultado esperado: los resultados muestran solo el producto A. Establecer el precio máximo en $110. Resultado esperado: los resultados ahora incluyen tanto el producto A como el B",
            "Ingresar a la página web. Resultado esperado: los precios mínimo y máximo predeterminados son $100 y $110 respectivamente. Agregar el producto C al inventario, con precio $120. Actualizar la página web del cliente. Resultado esperado: el precio máximo predeterminado cambia a $120",
            "Ingresar a la página web y establecer el filtro para mostrar precios entre $90 y $115. Resultado esperado: los resultados muestran tanto el producto A como el B. Cambiar la moneda de USD a EUR. Resultado esperado: el rango del filtro cambia correctamente a valores en EUR, de acuerdo con la tasa de cambio actual",
            "Ingresar a la página web con tres navegadores diferentes: Edge, Chrome y Opera. En cada navegador establecer el filtro entre $90 y $110. Resultado esperado: los resultados incluyen tanto el producto A como el B y el diseño de los resultados es el mismo en los tres navegadores"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Este caso ejercita el segundo criterio, al permitir fijar un rango con precio mínimo y máximo, y el tercero, al comprobar que los resultados se actualizan dinámicamente al ajustar el máximo. Las demás opciones no se relacionan con ningún criterio de aceptación: una prueba valores predeterminados y un producto inexistente, otra el cambio de moneda y otra la compatibilidad entre navegadores.",
          "source": "Sample Exam D #29",
          "lang": "es"
        },
        {
          "id": "S3-019",
          "topic": "FL-4.1.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes técnicas de prueba utiliza las especificaciones de requisitos como base de prueba?",
          "options": [
            "Basada en estructura",
            "Caja negra",
            "Caja blanca",
            "Exploratoria"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Las técnicas de caja negra toman como base de prueba documentos como las especificaciones de requisitos, sin mirar la estructura interna del software. Las basadas en estructura y la caja blanca se apoyan en el código o la arquitectura, y la exploratoria se usa más bien cuando no hay especificación, aprendiendo del software mientras se prueba.",
          "source": "Sample Exam 3 #19",
          "lang": "es"
        },
        {
          "id": "S3-020",
          "topic": "FL-4.3.2",
          "level": "K2",
          "type": "single",
          "question": "Si está probando un módulo de código, ¿cómo determina el nivel de cobertura de ramas que ha logrado?",
          "options": [
            "Tomando el número de ramas que ha probado y dividiéndolo por el número total de sentencias ejecutables en el módulo",
            "Tomando el número de ramas que ha probado y dividiéndolo por el número total de ramas en el módulo",
            "Tomando el número de ramas que ha probado y dividiéndolo por el total de líneas de código en el módulo",
            "Tomando el número de ramas que ha probado y dividiéndolo por el número total de casos de prueba que ha ejecutado para el módulo ISTQB Foundation Level v4.0.1 Sample Exam #3 Questions"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. La cobertura de ramas relaciona las ramas efectivamente probadas con el total de ramas que existen en el módulo, de modo que el porcentaje indica qué proporción de decisiones se ejercitó. Dividir entre sentencias ejecutables, líneas de código o casos ejecutados mide otras cosas y no responde a la pregunta sobre ramas.",
          "source": "Sample Exam 3 #20",
          "lang": "es"
        },
        {
          "id": "S3-021",
          "topic": "FL-4.3.2",
          "level": "K2",
          "type": "single",
          "question": "Si tiene una sección de código que tiene una sola sentencia IF simple, ¿cuántas pruebas se necesitarán para lograr una cobertura de ramas del 100%?",
          "options": [
            "1",
            "2",
            "5",
            "Desconocido con esta información"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Una sentencia IF simple tiene dos resultados posibles, verdadero y falso, y la cobertura de ramas del 100% exige al menos un caso por cada resultado, así que bastan dos pruebas. Una o cinco son cifras arbitrarias, y la respuesta no queda indeterminada porque el enunciado aclara que el IF es simple, con solo dos salidas.",
          "source": "Sample Exam 3 #21",
          "lang": "es"
        },
        {
          "id": "S3-022",
          "topic": "FL-4.4.2",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes es una buena razón para usar pruebas basadas en la experiencia?",
          "options": [
            "Puede encontrar defectos que podrían pasarse por alto con técnicas más formales",
            "Puede probar defectos que solo encontrarían usuarios experimentados",
            "Puede dirigir los esfuerzos del desarrollador hacia las áreas que los usuarios tendrán más probabilidades de usar",
            "Está respaldado por herramientas sólidas y puede automatizarse"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Las técnicas basadas en la experiencia complementan a las formales y suelen encontrar defectos que esas pruebas estructuradas dejan pasar, porque el probador usa su conocimiento del dominio. No dependen de la experiencia de los usuarios ni dirigen el trabajo del desarrollador, y su efectividad descansa en la pericia de quien prueba, no en herramientas ni automatización.",
          "source": "Sample Exam 3 #22",
          "lang": "es"
        },
        {
          "id": "S3-023",
          "topic": "FL-4.4.1",
          "level": "K2",
          "type": "single",
          "question": "¿Qué es el error guessing?",
          "options": [
            "Una técnica de prueba utilizada para adivinar dónde es probable que un desarrollador haya cometido un error",
            "Una técnica utilizada para evaluar métricas de defectos",
            "Una técnica de desarrollo para verificar que se hayan codificado todas las rutas de error",
            "Una técnica de planificación utilizada para anticipar posibles variaciones de cronograma debido a fallas ISTQB Foundation Level v4.0.1 Sample Exam #3 Questions"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. El error guessing es una técnica basada en la experiencia con la que el probador anticipa dónde es más probable que alguien haya cometido un error y diseña pruebas para esas zonas. No evalúa métricas de defectos, no es una técnica de desarrollo para verificar rutas de error ni sirve para prever variaciones del cronograma.",
          "source": "Sample Exam 3 #23",
          "lang": "es"
        },
        {
          "id": "S3-024",
          "topic": "FL-4.5.1",
          "level": "K2",
          "type": "single",
          "question": "Cuando se utiliza la técnica de las 3 C para el desarrollo de historias de usuario, ¿cuál es el producto de trabajo que se crea para el aspecto de Confirmación?",
          "options": [
            "Enfoque de prueba",
            "Criterios de aceptación",
            "Criterios de entrada",
            "Criterios de salida"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. En las 3 C la confirmación se materializa en los criterios de aceptación, que concretan cómo se comprobará que la historia cumple lo acordado. El enfoque de prueba describe la estrategia, y los criterios de entrada y salida pertenecen a la gestión de las actividades de prueba, no al aspecto de confirmación de una historia de usuario.",
          "source": "Sample Exam 3 #24",
          "lang": "es"
        },
        {
          "id": "S3-025",
          "topic": "FL-4.2.1",
          "level": "K3",
          "type": "single",
          "question": "Está probando una máquina que califica exámenes y asigna calificaciones. Según el puntaje obtenido, las calificaciones son las siguientes: 1-49 = F, 50-59 = D-, 60-69 = D, 70-79 = C, 80-89 = B, 90-100=A Si aplica partición de equivalencia, ¿cuántos casos de prueba necesitará para lograr la cobertura mínima de pruebas?",
          "options": [
            "6",
            "8",
            "10",
            "12 ISTQB Foundation Level v4.0.1 Sample Exam #3 Questions"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Con partición de equivalencia se necesita un caso por cada clase válida, es decir las seis franjas de calificación, más uno por la clase inválida demasiado baja y otro por la demasiado alta: ocho en total. Las opciones de 6, 10 y 12 no cuadran, porque seis solo cubre lo válido y las otras añaden casos que las particiones no exigen.",
          "source": "Sample Exam 3 #25",
          "lang": "es"
        },
        {
          "id": "S3-026",
          "topic": "FL-4.2.2",
          "level": "K3",
          "type": "single",
          "question": "Está probando un termostato para un sistema de calefacción/aire acondicionado. Se le han dado los siguientes requisitos: • Cuando la temperatura está por debajo de 70 grados, encender el sistema de calefacción • Cuando la temperatura está por encima de 75 grados, encender el sistema de aire acondicionado • Cuando la temperatura está entre 70 y 75 grados, inclusive, encender solo el ventilador ¿Cuál de los siguientes es el conjunto mínimo de valores de temperatura de prueba para lograr una cobertura del 100% en el análisis de valores límite de dos valores?",
          "options": [
            "70, 75",
            "65, 72, 80",
            "69, 70, 75, 76",
            "70, 71, 74, 75, 76 ISTQB Foundation Level v4.0.1 Sample Exam #3 Questions"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. En análisis de valores límite de dos valores se prueba cada valor del borde junto con su vecino inmediato fuera: 69 y 70 para la calefacción, 75 y 76 para el aire, y esos mismos cuatro cubren la franja del ventilador. Las demás opciones omiten bordes: 70 y 75 solos no verifican los extremos, y las otras no cubren los cuatro límites.",
          "source": "Sample Exam 3 #26",
          "lang": "es"
        },
        {
          "id": "S3-027",
          "topic": "FL-4.2.3",
          "level": "K3",
          "type": "single",
          "question": "Se le han dado las siguientes condiciones y los resultados de esas combinaciones de condiciones. Dada esta información, utilizando la técnica de tabla de decisión, ¿cuál es el número mínimo de casos de prueba que necesitaría para probar estas condiciones? Condiciones: Efectivo válido Tarjeta de crédito válida Tarjeta de débito válida PIN válido Banco acepta Selección válida Artículo en stock Resultados: Rechazar efectivo Rechazar tarjeta Mensaje de error Devolver efectivo Reembolsar tarjeta Vender artículo",
          "options": [
            "7",
            "13",
            "15",
            "18 ISTQB Foundation Level v4.0.1 Sample Exam #3 Questions"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. La tabla de decisión combina las condiciones con los resultados esperados, y el mínimo de casos corresponde a las reglas o columnas que recogen las combinaciones factibles de esas condiciones, que aquí son quince. Las cifras 7, 13 y 18 no reflejan ese número de reglas y dejarían combinaciones sin cubrir o añadirían casos redundantes.",
          "source": "Sample Exam 3 #27",
          "lang": "es",
          "note": "Esta pregunta incluye un diagrama o tabla en el PDF oficial; revisa el material original para verla completa."
        },
        {
          "id": "S3-028",
          "topic": "FL-4.2.4",
          "level": "K3",
          "type": "single",
          "question": "Se le ha dado el siguiente requisito: Un usuario debe iniciar sesión en el sistema con un nombre de usuario y contraseña válidos. Si no logra ingresar la combinación correcta tres veces, recibirá un error y deberá esperar 10 minutos antes de intentarlo de nuevo. La prueba termina cuando el usuario inicia sesión exitosamente. ¿Cuántos casos de prueba se necesitan para proporcionar 100% de cobertura de transiciones válidas?",
          "options": [
            "1",
            "2",
            "4",
            "5 ISTQB Foundation Level v4.0.1 Sample Exam #3 Questions"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Basta un solo caso que recorra el camino válido completo: intento fallido repetido tres veces, espera de diez minutos, inicio de sesión correcto y llegada al inicio. Como la prueba termina al iniciar sesión con éxito y no se exige salir tras la espera, no hace falta un segundo caso ni más para cubrir todas las transiciones válidas.",
          "source": "Sample Exam 3 #28",
          "lang": "es"
        },
        {
          "id": "S3-029",
          "topic": "FL-4.5.3",
          "level": "K3",
          "type": "single",
          "question": "Está creando casos de prueba para la siguiente historia, aplicando el enfoque ATDD. Como propietario de un hotel quiero reservar todas las habitaciones de un piso antes de pasar al siguiente piso para poder maximizar la eficiencia del personal de limpieza. Ha decidido aplicar partición de equivalencia a este requisito y ha identificado las siguientes particiones para la ocupación de un piso: 0 | 1 - piso lleno | sobrevendido. También quiere asegurarse de que el software sea usable por el personal y que tenga un rendimiento rápido al determinar qué pisos tienen disponibilidad. Dada esta información, ¿cuál debería ser el orden de prioridad para las pruebas que diseñará?",
          "options": [
            "0, 1-piso lleno, sobrevendido, usabilidad, rendimiento",
            "Rendimiento, 1-piso lleno, usabilidad, sobrevendido, 0",
            "Usabilidad, rendimiento, sobrevendido, 0, 1-piso lleno",
            "Sobrevendido, 0, 1-piso lleno, rendimiento, usabilidad ISTQB Foundation Level v4.0.1 Sample Exam #3 Questions"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. En ATDD se priorizan primero los escenarios funcionales válidos, luego el inválido de sobreventa y al final los atributos no funcionales de usabilidad y rendimiento. Empezar por rendimiento o usabilidad desatiende la funcionalidad básica, y arrancar por el caso inválido deja lo esencial para el final, contra el orden que pide el enfoque.",
          "source": "Sample Exam 3 #29",
          "lang": "es"
        },
        {
          "id": "S4-019",
          "topic": "FL-4.1.1",
          "level": "K2",
          "type": "single",
          "question": "Si los casos de prueba se derivan observando el código, ¿qué tipo de técnica de prueba se está utilizando?",
          "options": [
            "Caja negra",
            "Caja blanca",
            "Basada en especificación",
            "Basada en comportamiento"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Derivar los casos de prueba observando el código es prueba de caja blanca, porque se basa en la estructura interna del software. A, C y D resultan equivalentes en la práctica: se apoyan en especificaciones o requisitos y no en el código, por lo que corresponden a técnicas de caja negra y no a lo que describe la situación.",
          "source": "Sample Exam 4 #19",
          "lang": "es"
        },
        {
          "id": "S4-020",
          "topic": "FL-4.3.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cómo se determina la cobertura de sentencias?",
          "options": [
            "Número de puntos de decisión de prueba dividido por el número de casos de prueba",
            "Número de ramas probadas dividido por el número total de sentencias ejecutables",
            "Número de resultados posibles de casos de prueba dividido por el número total de puntos de función",
            "Número de sentencias ejecutables probadas dividido por el número total de sentencias ejecutables ISTQB Foundation Level v4.0.1 Sample Exam #4 Questions"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. La cobertura de sentencias relaciona las sentencias ejecutables efectivamente probadas con el total de sentencias ejecutables del código. A mezcla puntos de decisión con casos de prueba, B compara ramas con sentencias, y C relaciona resultados con puntos de función; ninguna de esas fórmulas mide realmente la cobertura de sentencias.",
          "source": "Sample Exam 4 #20",
          "lang": "es"
        },
        {
          "id": "S4-021",
          "topic": "FL-4.3.3",
          "level": "K2",
          "type": "single",
          "question": "Está trabajando en un proyecto con plazos muy ajustados. El código se está desarrollando pero aún no es ejecutable. ¿Qué tipo de pruebas podría aplicar que ayudaría a encontrar defectos ahora?",
          "options": [
            "Caja negra",
            "Caja blanca",
            "Basadas en experiencia",
            "Basadas en factores"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Aunque el código todavía no se pueda ejecutar, sí puede revisarse estructuralmente para detectar defectos, por ejemplo en el manejo de ramificaciones, y eso es prueba de caja blanca. A y C requieren ejecutar el software, así que no son aplicables en este momento, y D no corresponde a un tipo de prueba reconocido.",
          "source": "Sample Exam 4 #21",
          "lang": "es"
        },
        {
          "id": "S4-022",
          "topic": "FL-4.4.1",
          "level": "K2",
          "type": "single",
          "question": "Si está utilizando conjetura de errores para orientar sus pruebas, ¿qué tipo de pruebas está haciendo?",
          "options": [
            "Basadas en especificación",
            "Basadas en estructura",
            "Basadas en experiencia",
            "Basadas en referencia"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. La conjetura de errores se apoya en el conocimiento y la experiencia del probador para anticipar dónde pueden aparecer defectos, por lo que pertenece a las técnicas basadas en experiencia. A y B remiten a la especificación y a la estructura del código, fuentes de diseño distintas, y D no es una categoría de técnica de prueba.",
          "source": "Sample Exam 4 #22",
          "lang": "es"
        },
        {
          "id": "S4-023",
          "topic": "FL-4.4.2",
          "level": "K2",
          "type": "single",
          "question": "Cuando las pruebas exploratorias se realizan utilizando time-boxing y charters de prueba, ¿cómo se llaman?",
          "options": [
            "Pruebas basadas en cronograma",
            "Pruebas basadas en sesiones",
            "Pruebas basadas en riesgo",
            "Chartering formal ISTQB Foundation Level v4.0.1 Sample Exam #4 Questions"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Cuando la prueba exploratoria se organiza con time-boxing y charters, se denomina prueba basada en sesiones y suele apoyarse en hojas de sesión. A no aplica porque lo exploratorio no sigue cronogramas rígidos; C describe otra forma de orientar las pruebas y no esta práctica concreta, y D no es un término de prueba real.",
          "source": "Sample Exam 4 #23",
          "lang": "es"
        },
        {
          "id": "S4-024",
          "topic": "FL-4.5.2",
          "level": "K2",
          "type": "single",
          "question": "Estás escribiendo algunos criterios de aceptación para una historia. Has decidido hacer una lista de todas las entradas probables al código y las salidas esperadas con base en esas entradas. ¿Qué formato estás utilizando?",
          "options": [
            "Diagrama IPO",
            "Basado en aceptación",
            "Orientado a reglas",
            "Orientado a comportamiento"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Enumerar las entradas posibles junto con las salidas esperadas para cada una corresponde al formato orientado a reglas de los criterios de aceptación. A considera además el procesamiento y no solo entradas y salidas; B no es un formato reconocido, y D se asocia al formato dado/cuando/entonces, que es orientado a escenarios.",
          "source": "Sample Exam 4 #24",
          "lang": "es"
        },
        {
          "id": "S4-025",
          "topic": "FL-4.2.1",
          "level": "K3",
          "type": "single",
          "question": "Estás probando una aplicación bancaria que permite a un cliente retirar 20, 100 o 500 dólares en una sola transacción. Los valores se eligen de una lista desplegable y no se pueden ingresar otros valores. ¿Cuántas particiones de equivalencia se necesitan probar para lograr una cobertura del 100% de particiones de equivalencia?",
          "options": [
            "1",
            "2",
            "3",
            "4 ISTQB Foundation Level v4.0.1 Sample Exam #4 Questions"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Al elegirse los valores de una lista cerrada, las particiones son cada opción válida, es decir 20, 100 y 500, más el caso en que no se selecciona nada, lo que da cuatro. A, B y C subestiman la cantidad: con una, dos o tres particiones quedaría sin cubrir alguna opción o la ausencia de selección.",
          "source": "Sample Exam 4 #25",
          "lang": "es"
        },
        {
          "id": "S4-026",
          "topic": "FL-4.2.2",
          "level": "K3",
          "type": "single",
          "question": "Estás probando un sistema de básculas que determina las tarifas de envío para un distribuidor regional de autopartes basado en web. Debido a regulaciones, los envíos no pueden exceder las 100 libras. Quieres incluir el análisis de valores límite como parte de tu diseño de pruebas de caja negra. ¿Cuántas pruebas necesitarás ejecutar para lograr un 100% de análisis de valores límite de dos valores? Peso            0 a 10 lbs.   11 a 25 lbs.   26 a 50 lbs.   51 lbs. a 100 Costo de envío    $5.00          $7.50           $12.00          $17.00",
          "options": [
            "4",
            "8",
            "10",
            "12 ISTQB Foundation Level v4.0.1 Sample Exam #4 Questions"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Con análisis de valores límite de dos valores se prueban dos valores por cada rango válido, más un peso negativo y uno superior al máximo permitido: -1, 0, 10, 11, 25, 26, 50, 51, 100 y 101, es decir diez pruebas. A, B y D no cubren a la vez ambos extremos de los cuatro rangos y los límites inválidos.",
          "source": "Sample Exam 4 #26",
          "lang": "es"
        },
        {
          "id": "S4-027",
          "topic": "FL-4.2.3",
          "level": "K3",
          "type": "single",
          "question": "¿Cuál de las siguientes es la tabla de decisión correcta para el siguiente pseudocódigo para ordenar una hamburguesa? Nota: si agregas o eliminas elementos de la hamburguesa básica, ya no obtienes la hamburguesa básica. Inicio Seleccionar hamburguesa básica Si el cliente agrega elementos Mientras haya elementos por agregar Preguntar al cliente qué elemento Agregar elemento Fin mientras Fin si Si el cliente elimina elementos Mientras haya elementos por eliminar Preguntar al cliente qué elemento Eliminar elemento Fin mientras Fin si Si el cliente quiere papas fritas Agregar papas fritas al pedido Fin si Completar pedido Fin",
          "options": [
            "Opción A (ver imagen)",
            "Opción B (ver imagen)",
            "Opción C (ver imagen)",
            "Opción D (ver imagen)"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. La tabla correcta contempla que el cliente puede añadir y eliminar elementos de la hamburguesa básica, incluyendo las combinaciones de ambas acciones con las papas fritas. A y C suponen que no pueden hacerse ambas cosas, y C además repite pruebas; D presenta resultados esperados equivocados en las primeras combinaciones.",
          "source": "Sample Exam 4 #27",
          "lang": "es",
          "note": "La imagen muestra las cuatro tablas de decisión A–D.",
          "image": "assets/fig-s4-027.png"
        },
        {
          "id": "S4-028",
          "topic": "FL-4.2.4",
          "level": "K3",
          "type": "single",
          "question": "Estás probando una transacción de comercio electrónico que tiene los siguientes estados y transiciones: 1. Login (inválido) > Login 2. Login > Search 3. Search > Search 4. Search > Shopping Cart 5. Shopping Cart > Search 6. Shopping Cart > Checkout 7. Checkout > Search 8. Checkout > Logout Para un diagrama de estados, ¿cuántas transiciones se deben mostrar?",
          "options": [
            "4",
            "6",
            "8",
            "16 ISTQB Foundation Level v4.0.1 Sample Exam #4 Questions"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. El diagrama de estados debe mostrar las ocho transiciones válidas indicadas, incluidas las de autotransición como login inválido a login y búsqueda a búsqueda. A solo refleja una salida por estado; B omite las autotransiciones, y D contaría además las transiciones inválidas, que corresponden a una tabla de estados y no a este diagrama.",
          "source": "Sample Exam 4 #28",
          "lang": "es"
        },
        {
          "id": "S4-029",
          "topic": "FL-4.5.3",
          "level": "K3",
          "type": "single",
          "question": "Estás creando casos de prueba para la siguiente historia, aplicando el enfoque ATDD. Como propietario de un hotel quiero reservar todas las habitaciones de un piso antes de pasar al siguiente piso para poder maximizar la eficiencia del personal de limpieza. Has decidido aplicar análisis de valores límite a este requisito y has identificado las siguientes particiones para la ocupación de un piso: 0 | 1 - piso lleno | sobrevendido. También quieres asegurarte de que el software sea usable por el personal y que tenga un rendimiento rápido al determinar qué pisos tienen disponibilidad. Has diseñado los siguientes casos de prueba: 1. Probar con 1 ocupante en el piso 2. Probar con el piso lleno y asegurar que el siguiente piso quede disponible para reservas 3. Probar con 0 ocupantes en el piso y asegurar que ese piso solo esté disponible cuando los pisos inferiores estén completamente reservados 4. Probar la usabilidad para asegurar que el personal del hotel encuentre el software usable 5. Probar el tiempo de respuesta cuando el sistema está a carga promedio y el hotel está al 80% de ocupación ¿Qué te falta?",
          "options": [
            "Una prueba con un piso parcialmente ocupado pero no completamente ocupado",
            "Una prueba de rendimiento",
            "Una prueba para intentar asignar a alguien a un piso que está lleno",
            "Una prueba de usabilidad ISTQB Foundation Level v4.0.1 Sample Exam #4 Questions"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Falta una prueba negativa que intente asignar un huésped a un piso que ya está completo, y que debería producir un error. A ya queda cubierta por la prueba con un solo ocupante, mientras que B y D están contempladas con las pruebas de tiempo de respuesta y de usabilidad incluidas; ninguna de las otras opciones añade el escenario faltante.",
          "source": "Sample Exam 4 #29",
          "lang": "es"
        }
      ]
    },
    {
      "id": 5,
      "title": "Gestión de las actividades de prueba",
      "short": "Gestión",
      "weight": 22.5,
      "questions": [
        {
          "id": "A-030",
          "topic": "FL-5.1.2",
          "level": "K1",
          "type": "single",
          "question": "¿Cómo agregan valor los probadores a la planificación de iteraciones y liberaciones?",
          "options": [
            "Los probadores determinan la prioridad de las historias de usuario a desarrollar",
            "Los probadores se enfocan solo en los aspectos funcionales del sistema a probar",
            "Los probadores participan en la identificación detallada de riesgos y la evaluación de riesgos de las historias de usuario",
            "Los probadores garantizan la liberación de software de alta calidad mediante el diseño temprano de pruebas durante la planificación de la liberación"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Los probadores aportan valor a la planificación de iteraciones y liberaciones participando en la identificación detallada de riesgos y en la evaluación de riesgos de las historias de usuario. A es falsa porque las prioridades las definen el negocio con el equipo; B porque los probadores cubren aspectos funcionales y no funcionales; D porque el diseño temprano de pruebas no forma parte de la planificación de la liberación.",
          "source": "Sample Exam A #30",
          "lang": "es"
        },
        {
          "id": "A-031",
          "topic": "FL-5.1.3",
          "level": "K2",
          "type": "multi",
          "question": "¿Cuáles DOS de las siguientes opciones son los criterios de salida para probar un sistema?",
          "options": [
            "Preparación del entorno de pruebas",
            "La capacidad del probador de iniciar sesión en el objeto de prueba",
            "Se alcanza la densidad de defectos estimada",
            "Los requisitos se traducen al formato dado/cuando/entonces",
            "Las pruebas de regresión están automatizadas"
          ],
          "answer": [
            2,
            4
          ],
          "explanation": "Correctas: C y E. Alcanzar la densidad de defectos estimada es una medida de diligencia y la automatización de las pruebas de regresión es un criterio de completitud: ambos son criterios de salida. A y B son criterios de disponibilidad de recursos, propios de los criterios de entrada, y D describe requisitos comprobables, también de entrada.",
          "source": "Sample Exam A #31",
          "lang": "es"
        },
        {
          "id": "A-032",
          "topic": "FL-5.1.4",
          "level": "K3",
          "type": "single",
          "question": "Su equipo utiliza la técnica de estimación de tres puntos para estimar el esfuerzo de prueba de una nueva funcionalidad de alto riesgo. Se realizaron las siguientes estimaciones: • Estimación más optimista: 2 horas-persona • Estimación más probable: 11 horas-persona • Estimación más pesimista: 14 horas-persona ¿Cuál es la estimación final?",
          "options": [
            "9 horas-persona",
            "14 horas-persona",
            "11 horas-persona",
            "10 horas-persona"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Aplicando la estimación de tres puntos, (2 + 4×11 + 14) / 6 = 60/6 = 10 horas-persona. Las demás cifras no resultan del cálculo: 11 es solo la estimación más probable, mientras que 9 y 14 no corresponden a la ponderación de las tres estimaciones. El resultado ponderado queda cerca del valor más probable, corregido por los dos extremos.",
          "source": "Sample Exam A #32",
          "lang": "es"
        },
        {
          "id": "A-033",
          "topic": "FL-5.1.5",
          "level": "K3",
          "type": "single",
          "question": "Está probando una aplicación móvil que permite a los usuarios encontrar un restaurante cercano según el tipo de comida que desean comer. Considere la siguiente lista de casos de prueba, prioridades (es decir, un número menor significa una prioridad mayor) y dependencias: Caso de prueba | Condición lógica de prueba cubierta | Número de prioridad | Dependencia TC 001 | Seleccionar tipo de comida | 3 | ninguna TC 002 | Seleccionar restaurante | 2 | TC 001 TC 003 | Obtener dirección | 1 | TC 002 TC 004 | Llamar al restaurante | 2 | TC 002 TC 005 | Hacer reserva | 3 | TC 002 ¿Cuál de los siguientes casos de prueba debe ejecutarse como el tercero?",
          "options": [
            "TC 003",
            "TC 005",
            "TC 002",
            "TC 001"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Primero debe ejecutarse TC 001 y luego TC 002 para satisfacer las dependencias; después TC 003 por su prioridad 1, seguido de TC 004 y TC 005. Por eso el tercero es TC 003, no TC 002 ni TC 001, que van antes, ni TC 005, que depende de TC 002 y tiene menor prioridad.",
          "source": "Sample Exam A #33",
          "lang": "es"
        },
        {
          "id": "A-034",
          "topic": "FL-5.1.7",
          "level": "K2",
          "type": "single",
          "question": "Considere las siguientes categorías de prueba (1-4) y cuadrantes de pruebas ágiles (A-D): 1. Pruebas de usabilidad 2. Pruebas de componentes 3. Pruebas funcionales 4. Pruebas de confiabilidad A. Cuadrante de pruebas ágiles Q1: orientado a la tecnología, apoya al equipo de desarrollo B. Cuadrante de pruebas ágiles Q2: orientado al negocio, apoya al equipo de desarrollo C. Cuadrante de pruebas ágiles Q3: orientado al negocio, critica el producto D. Cuadrante de pruebas ágiles Q4: orientado a la tecnología, critica el producto ¿Cómo se asignan las siguientes categorías de prueba a los cuadrantes de pruebas ágiles?",
          "options": [
            "1C, 2A, 3B, 4D",
            "1D, 2A, 3C, 4B",
            "1C, 2B, 3D, 4A",
            "1D, 2B, 3C, 4A"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Usabilidad corresponde a Q3, orientado al negocio y que critica el producto; pruebas de componentes a Q1, orientado a la tecnología y que apoya al equipo; funcionales a Q2, orientado al negocio y que apoya al equipo; confiabilidad a Q4, orientado a la tecnología y que critica el producto. Las otras opciones intercambian cuadrantes y contradicen esa clasificación.",
          "source": "Sample Exam A #34",
          "lang": "es"
        },
        {
          "id": "A-035",
          "topic": "FL-5.2.4",
          "level": "K2",
          "type": "single",
          "question": "Durante un análisis de riesgos se identificó y evaluó el siguiente riesgo: • Riesgo: El tiempo de respuesta es demasiado largo para generar un informe • Probabilidad del riesgo: media; impacto del riesgo: alto • Respuesta al riesgo: o Un equipo de pruebas independiente realiza pruebas de eficiencia de desempeño durante las pruebas de sistema o Una muestra seleccionada de usuarios finales realiza pruebas alfa y pruebas beta antes del lanzamiento ¿Qué medida se propone tomar en respuesta a este riesgo analizado?",
          "options": [
            "Aceptación del riesgo",
            "Plan de contingencia",
            "Mitigación del riesgo",
            "Transferencia del riesgo"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Las acciones propuestas son pruebas: un equipo independiente realiza pruebas de eficiencia de desempeño en nivel de sistema y usuarios finales hacen pruebas alfa y beta antes del lanzamiento, lo que reduce la probabilidad o el impacto del riesgo, es decir, lo mitiga. No se acepta el riesgo, no se define un plan de contingencia y no se transfiere a un tercero.",
          "source": "Sample Exam A #35",
          "lang": "es"
        },
        {
          "id": "A-036",
          "topic": "FL-5.3.3",
          "level": "K2",
          "type": "single",
          "question": "¿Qué producto de trabajo puede utilizar un equipo ágil para mostrar la cantidad de trabajo que se ha completado y la cantidad de trabajo total restante para una iteración dada?",
          "options": [
            "Criterios de aceptación",
            "Informe de defectos",
            "Informe de finalización de pruebas",
            "Gráfico de burn-down"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. El gráfico de burn-down representa el trabajo pendiente frente al tiempo restante y se actualiza a diario, así que muestra el trabajo completado y el que falta en una iteración. Los criterios de aceptación, los informes de defectos y el informe de finalización de pruebas no reflejan el avance continuo del trabajo.",
          "source": "Sample Exam A #36",
          "lang": "es"
        },
        {
          "id": "A-037",
          "topic": "FL-5.4.1",
          "level": "K2",
          "type": "single",
          "question": "Necesita actualizar uno de los scripts de prueba automatizados para que esté alineado con un nuevo requisito. ¿Qué proceso indica que usted crea una nueva versión del script de prueba en el repositorio de pruebas?",
          "options": [
            "Gestión de trazabilidad",
            "Pruebas de mantenimiento",
            "Gestión de configuración",
            "Ingeniería de requisitos"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. La gestión de configuración incluye el control de versiones de todos los elementos de prueba, de modo que actualizar un script implica crear una nueva versión en el repositorio de pruebas. La gestión de trazabilidad relaciona productos de trabajo, no versiones; las pruebas de mantenimiento tratan sobre cambios del sistema; la ingeniería de requisitos no gestiona versiones de scripts.",
          "source": "Sample Exam A #37",
          "lang": "es"
        },
        {
          "id": "A-038",
          "topic": "FL-5.5.1",
          "level": "K3",
          "type": "single",
          "question": "Recibió el siguiente informe de defectos de los desarrolladores indicando que la anomalía descrita en este informe de pruebas no es reproducible. La aplicación se cuelga 2022-May-03 – John Doe – Rechazado La aplicación se cuelga después de ingresar “Test input: $ä” en el campo Name en la pantalla de creación de nuevo usuario. Intenté cerrar sesión, iniciar sesión con la cuenta test_admin01, mismo problema. Intenté con otras cuentas de administrador de pruebas, mismo problema. No se recibió mensaje de error; el log (ver adjunto) contiene una notificación de error fatal. Según el caso de prueba TC-1305, la aplicación debería aceptar la entrada proporcionada y crear el usuario. Por favor corregir con alta prioridad, esta funcionalidad está relacionada con REQ-0012, que es un requisito de negocio crítico nuevo. ¿Qué información crítica FALTA en este informe de pruebas que habría sido útil para los desarrolladores?",
          "options": [
            "Resultado esperado y resultado real",
            "Referencias y estado del defecto",
            "Entorno de prueba y elemento de prueba",
            "Prioridad y severidad"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Falta indicar el entorno de prueba y el elemento de prueba afectado, con su versión, datos que los desarrolladores necesitan para reproducir la anomalía. El resultado esperado y el real sí aparecen, igual que referencias y estado, rechazado con caso de prueba y requisito, y la prioridad y severidad se deducen del texto.",
          "source": "Sample Exam A #38",
          "lang": "es"
        },
        {
          "id": "B-030",
          "topic": "FL-5.1.3",
          "level": "K2",
          "type": "single",
          "question": "Su equipo sigue el proceso que utiliza el pipeline de entrega de DevOps. Los primeros tres pasos de este proceso son: (1) Desarrollo de código (2) Enviar el código a un sistema de control de versiones y fusionarlo en la rama “test” (3) Realizar pruebas de componentes para el código enviado ¿Cuál de los siguientes es el MÁS adecuado para ser el criterio de entrada del paso (2) de este pipeline?",
          "options": [
            "El análisis estático no devuelve advertencias de alta severidad para el código enviado",
            "El control de versiones del sistema no reporta conflictos al fusionar el código en la rama “test”",
            "Las pruebas de componentes están compiladas y listas para ejecutarse",
            "La cobertura de sentencias es de al menos 80%"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Que el análisis estático no arroje advertencias de alta severidad es algo que puede y debe comprobarse antes de enviar el código al control de versiones, así que sirve como criterio de entrada de ese paso. Los conflictos de fusión solo se conocen después de fusionar, y tanto tener las pruebas de componente listas como alcanzar el 80% de cobertura corresponden al paso siguiente.",
          "source": "Sample Exam B #30",
          "lang": "es"
        },
        {
          "id": "B-031",
          "topic": "FL-5.1.4",
          "level": "K3",
          "type": "single",
          "question": "Desea estimar el esfuerzo de prueba para el nuevo proyecto utilizando estimación basada en ratios. Calcula la relación de esfuerzo de prueba a desarrollo usando datos promediados tanto del esfuerzo de desarrollo como del esfuerzo de prueba de cuatro proyectos históricos similares al nuevo. La tabla muestra estos datos históricos. Proyecto             Esfuerzo de desarrollo     Esfuerzo de prueba ($)                ($) P1                   800,000             40,000 P2                  1,200,000           130,000 P3                   600,000             70,000 P4                  1,000,000           120,000 El esfuerzo de desarrollo estimado para el nuevo proyecto es $800,000. ¿Cuál es su estimación del esfuerzo de prueba en este proyecto?",
          "options": [
            "$40,000",
            "$80,000",
            "$81,250",
            "$82,500"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Los promedios históricos son 900.000 de desarrollo y 90.000 de prueba, una relación de 1:10, es decir, el esfuerzo de prueba equivale al 10% del de desarrollo; aplicado a 800.000 da 80.000. Las otras cifras salen de tomar un solo proyecto, promediar de forma incorrecta o confundir la relación con los valores absolutos.",
          "source": "Sample Exam B #31",
          "lang": "es",
          "image": "assets/fig-b-31.png"
        },
        {
          "id": "B-032",
          "topic": "FL-5.1.5",
          "level": "K3",
          "type": "single",
          "question": "Está probando una aplicación web que permite a los usuarios BUSCAR productos, VER detalles de productos, AGREGAR productos a un carrito de compras y realizar un PEDIDO. Ha preparado los siguientes siete casos de prueba, todos los cuales desea ejecutar. Las pruebas deben ejecutarse en el mejor orden, según la prioridad de prueba. Prueba                                  Prioridad (1 = mayor prioridad) TC1               BUSCAR producto A                  4 TC2               BUSCAR producto B                  4 TC3               VER detalles del producto A                3 TC4               VER detalles del producto B                2 TC5               AGREGAR producto A a un carrito de compras      3 TC6               AGREGAR producto B a un carrito de compras      1 TC7               realizar un PEDIDO                        5 También identificó las siguientes dependencias lógicas entre casos de prueba: • La funcionalidad de BÚSQUEDA debe probarse antes de que se pueda probar la funcionalidad de VER. • La funcionalidad de VER debe probarse antes de la funcionalidad de AGREGAR. • La funcionalidad de AGREGAR debe probarse antes de la funcionalidad de PEDIDO. ¿Qué caso de prueba debe ejecutarse como el cuarto?",
          "options": [
            "TC3",
            "TC1",
            "TC7",
            "TC2"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Las dependencias obligan a ejecutar búsqueda, vista y agregar antes del pedido, y la prioridad favorece el flujo del producto B; así el orden es TC2, TC4, TC6, TC1, TC3, TC5 y TC7, donde el cuarto caso es TC1. TC3 no puede ir antes que TC1, TC7 queda al final y el flujo del producto B debe preceder al del producto A.",
          "source": "Sample Exam B #32",
          "lang": "es"
        },
        {
          "id": "B-033",
          "topic": "FL-5.1.7",
          "level": "K2",
          "type": "single",
          "question": "Según el modelo de cuadrantes de prueba, ¿cuál de los siguientes se ubica en el cuadrante Q1 (“orientado a la tecnología” y “apoya al equipo”)?",
          "options": [
            "Pruebas de usabilidad",
            "Pruebas funcionales",
            "Pruebas de aceptación del usuario",
            "Pruebas de integración de componentes"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. El cuadrante Q1 agrupa pruebas orientadas a la tecnología que apoyan al equipo, y la integración de componentes es un ejemplo típico porque guía el desarrollo. Las pruebas de usabilidad, las funcionales y las de aceptación del usuario son orientadas al negocio, por lo que pertenecen a otros cuadrantes.",
          "source": "Sample Exam B #33",
          "lang": "es"
        },
        {
          "id": "B-034",
          "topic": "FL-5.2.4",
          "level": "K2",
          "type": "single",
          "question": "Dados los siguientes riesgos: 1. Una implementación ineficaz de bucles causa respuestas largas del sistema 2. Los consumidores cambian sus preferencias 3. Inundación de la sala de servidores 4. Pacientes por encima de cierta edad reciben informes inexactos Y las siguientes actividades de mitigación: A. Aceptación del riesgo B. Pruebas de eficiencia de desempeño C. Uso del análisis de valores límite como técnica de prueba D. Transferencia del riesgo ¿Cuál de las siguientes opciones relaciona MEJOR los riesgos con las actividades de mitigación?",
          "options": [
            "1C,       2D,        3A,        4B",
            "1B,       2D,        3A,        4C",
            "1B,       2A,        3D,        4C",
            "1C,       2A,        3D,        4B"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Las respuestas largas por bucles ineficientes se abordan con pruebas de eficiencia de desempeño; el cambio de preferencias de los consumidores está fuera de control y se acepta; la inundación de la sala de servidores se transfiere, por ejemplo con un seguro, y los informes inexactos en pacientes de cierta edad sugieren un problema de límites que ataca el análisis de valores límite. Las demás opciones cruzan estas mitigaciones.",
          "source": "Sample Exam B #34",
          "lang": "es"
        },
        {
          "id": "B-035",
          "topic": "FL-5.3.1",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de las siguientes es una métrica de calidad del producto?",
          "options": [
            "Tiempo medio hasta la falla",
            "Número de defectos encontrados",
            "Cobertura de requisitos",
            "Porcentaje de detección de defectos"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Las métricas de calidad del producto miden características de calidad, y el tiempo medio hasta la falla mide madurez, por lo que encaja en esa categoría. El número de defectos y el porcentaje de detección son métricas de defectos, y la cobertura de requisitos es una métrica de cobertura, no de calidad del producto.",
          "source": "Sample Exam B #35",
          "lang": "es"
        },
        {
          "id": "B-036",
          "topic": "FL-5.3.3",
          "level": "K2",
          "type": "single",
          "question": "Usted es miembro de un equipo de pruebas ubicado en Norteamérica, que desarrolla un producto para un cliente ubicado en Europa. El equipo es ágil y sigue el enfoque DevOps y utiliza una tubería de integración continua/entrega continua. ¿Cuál de las siguientes es la forma MENOS efectiva de comunicar el progreso de las pruebas al cliente?",
          "options": [
            "Cara a cara",
            "Tableros de control",
            "Correo electrónico",
            "Videoconferencia"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Con el cliente en otra ubicación y otra zona horaria, la comunicación cara a cara es la menos viable y por tanto la menos efectiva. Los tableros están disponibles en cualquier momento, el correo salva la diferencia horaria y la videoconferencia, aunque exija horarios incómodos, sigue siendo mucho más practicable que una reunión presencial.",
          "source": "Sample Exam B #36",
          "lang": "es"
        },
        {
          "id": "B-037",
          "topic": "FL-5.4.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes describe MEJOR un ejemplo de cómo la gestión de configuración (CM) apoya las pruebas?",
          "options": [
            "Teniendo el número de versión del entorno, la herramienta de CM puede recuperar los números de versión de las librerías, stubs y drivers utilizados en ese entorno",
            "Teniendo un registro de los valores de las entradas, la herramienta de CM puede ejecutar los casos de prueba para estas configuraciones y calcular la cobertura",
            "Teniendo datos sobre la fecha de compra de una licencia de software, la herramienta de CM genera automáticamente información sobre el hecho de que la licencia del producto está llegando a su fin",
            "Teniendo el número de versión del caso de prueba, la herramienta de CM puede generar automáticamente datos de prueba para este caso de prueba"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. La gestión de configuración registra de qué elementos se compone un elemento complejo, como un entorno de prueba, sus relaciones y sus versiones, y así permite recuperar las versiones exactas de librerías, stubs y drivers usados. Las herramientas de configuración no ejecutan casos ni calculan cobertura, no gestionan licencias y no generan datos de prueba.",
          "source": "Sample Exam B #37",
          "lang": "es"
        },
        {
          "id": "B-038",
          "topic": "FL-5.5.1",
          "level": "K3",
          "type": "single",
          "question": "Está probando una función de ordenamiento que recibe un conjunto de números como entrada y devuelve el mismo conjunto de números ordenados de forma ascendente. El registro de la ejecución de pruebas es el siguiente. Configuración del entorno: función de ordenamiento build 2.002.2182, conjunto de casos de prueba: TCS-3, # de TC: 5 ID de ejecución de prueba: 736 Inicio 12:43:21.003 12:43:21.003 Ejecución de TC1. Entrada: 3.              Salida: 3.            Resultado: aprobado 12:43:21.003 Ejecución de TC2. Entrada: 3 11 6 5.       Salida: 3 5 6 11.     Resultado: aprobado 12:43:21.004 Ejecución de TC3. Entrada: 8 7 3 7 1.      Salida: 1 3 7 8.      Resultado: fallido 12:43:21.005 Ejecución de TC4. Entrada: -2 -2 -2 -3 -3. Salida: -3 -2.        Resultado: fallido 12:43:21.005 Ejecución de TC5. Entrada: 0 -2 0 3 4 4. Salida: -2 0 3 4.       Resultado: fallido Fin 12:43:21.005 Tiempo total del ciclo de prueba: 0:00:00.002 ¿Cuál de las siguientes proporciona la MEJOR descripción de la falla que se puede usar en un informe de defectos?",
          "options": [
            "El sistema falla al ordenar varios conjuntos de números. Referencia: TC3, TC4, TC5.",
            "El sistema parece ignorar los duplicados al ordenar. Referencia: TC3, TC4, TC5.",
            "El sistema falla al ordenar números negativos. Referencia: TC4, TC5.",
            "TC3, TC4 y TC5 tienen defectos (datos de entrada duplicados) y deben corregirse."
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Los tres casos fallidos tienen entradas con duplicados y las salidas los eliminan, lo que sugiere que el sistema ignora las repeticiones al ordenar; esa descripción orienta al desarrollador hacia la causa. Decir solo que falla al ordenar no aporta valor, el fallo no se debe a los negativos y no hay indicios de que los casos de prueba estén mal diseñados.",
          "source": "Sample Exam B #38",
          "lang": "es"
        },
        {
          "id": "C-030",
          "topic": "FL-5.1.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes NO es un propósito de un plan de pruebas?",
          "options": [
            "Definir datos de prueba y resultados esperados para las pruebas de componentes y las pruebas de integración de componentes",
            "Definir como criterios de salida del nivel de pruebas de componentes que “se debe lograr 100% de cobertura de sentencias y 100% de cobertura de ramas”",
            "Describir qué campos debe contener el informe de progreso de las pruebas y cuál debe ser la forma de este informe",
            "Explicar por qué las pruebas de integración de sistema se excluirán de las pruebas, aunque la estrategia de pruebas requiere este nivel de pruebas"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. El plan puede incluir requisitos de datos de prueba, pero no los datos y resultados esperados detallados de cada caso, que pertenecen a los casos de prueba y además no se conocen al planificar. Sí son propósitos del plan definir criterios de salida (B), plantillas de informes de progreso (C) y justificar desviaciones de la estrategia (D).",
          "source": "Sample Exam C #30",
          "lang": "es"
        },
        {
          "id": "C-031",
          "topic": "FL-5.1.4",
          "level": "K3",
          "type": "single",
          "question": "Al comienzo de cada iteración, el equipo estima la cantidad de trabajo (en días-persona) que necesitará completar durante la iteración. Sea E(n) la cantidad estimada de trabajo para la iteración n, y sea A(n) la cantidad real de trabajo realizada en la iteración n. A partir de la tercera iteración, el equipo utiliza el siguiente modelo de estimación basado en extrapolación: 3 ∗ 𝐴(𝑛 − 1) + 𝐴(𝑛 − 2) 𝐸(𝑛) = 4 El gráfico muestra la cantidad estimada y real de trabajo para las primeras cuatro iteraciones. Esfuerzo estimado y real (en días-persona) 13 12 11 10 9 8 7 6 5 4 3 2 1 0 Iteración #1            Iteración #2          Iteración #3   Iteración #4 Estimado   Real ¿Cuál es la cantidad estimada de trabajo para la iteración #5?",
          "options": [
            "10.5 días-persona",
            "8.25 días-persona",
            "6.5 días-persona",
            "9.4 días-persona"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Tomando del gráfico las dos últimas barras reales, A(4)=6 y A(3)=8, la fórmula da E(5) = (3×6 + 8) / 4 = 26 / 4 = 6,5 días-persona. Las demás cifras surgen de leer valores equivocados del gráfico o de aplicar mal la extrapolación sobre las dos últimas iteraciones.",
          "source": "Sample Exam C #31",
          "lang": "es",
          "note": "Esta pregunta incluye un diagrama o tabla en el PDF oficial; revisa el material original para verla completa.",
          "image": "assets/fig-c-031.png"
        },
        {
          "id": "C-032",
          "topic": "FL-5.1.5",
          "level": "K3",
          "type": "single",
          "question": "Está preparando un cronograma de ejecución de pruebas para ejecutar siete casos de prueba TC 1 a TC 7. La siguiente figura incluye las prioridades de estos casos de prueba (1=prioridad más alta, 3 = prioridad más baja). La figura también muestra las dependencias entre casos de prueba mediante flechas. Por ejemplo, la flecha de TC 4 a TC 5 significa que TC 5 solo se puede ejecutar si TC 4 se ejecutó previamente. ¿Qué caso de prueba se debe ejecutar en sexto lugar?",
          "options": [
            "TC 3",
            "TC 5",
            "TC 6",
            "TC 2"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Respetando prioridades y dependencias, el orden es TC 4, TC 7, TC 1, TC 2, TC 5, TC 3 y TC 6: TC 7 requiere TC 4, TC 5 requiere TC 4 y TC 2, y TC 2 depende de TC 1. Así, el sexto lugar corresponde a TC 3, que tiene prioridad sobre TC 6.",
          "source": "Sample Exam C #32",
          "lang": "es",
          "note": "",
          "image": "assets/fig-c-32.png"
        },
        {
          "id": "C-033",
          "topic": "FL-5.1.6",
          "level": "K1",
          "type": "single",
          "question": "¿Qué muestra el modelo de la pirámide de pruebas?",
          "options": [
            "Que las pruebas pueden tener diferentes prioridades",
            "Que las pruebas pueden tener diferente granularidad",
            "Que las pruebas pueden requerir diferentes criterios de cobertura",
            "Que las pruebas pueden depender de otras pruebas"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. La pirámide de pruebas muestra que las pruebas tienen distinta granularidad, con muchas pruebas pequeñas y rápidas en la base y pocas de mayor alcance en la cima. No informa sobre prioridades (A), criterios de cobertura (C) ni dependencias entre pruebas (D), que son aspectos de otros modelos o prácticas.",
          "source": "Sample Exam C #33",
          "lang": "es"
        },
        {
          "id": "C-034",
          "topic": "FL-5.1.7",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál es la relación entre los cuadrantes de pruebas, los niveles de pruebas y los tipos de pruebas?",
          "options": [
            "Los cuadrantes de pruebas representan combinaciones particulares de niveles de pruebas y tipos de pruebas, definiendo su ubicación en el ciclo de vida de desarrollo de software",
            "Los cuadrantes de pruebas describen el grado de granularidad de los tipos de pruebas individuales realizados en cada nivel de pruebas",
            "Los cuadrantes de pruebas asignan los tipos de pruebas que se pueden realizar a los niveles de pruebas",
            "Los cuadrantes de pruebas agrupan niveles de pruebas y tipos de pruebas por varios criterios, como dirigirse a partes interesadas específicas"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Los cuadrantes de pruebas agrupan niveles, tipos, actividades, técnicas y productos de trabajo según criterios como estar orientados al negocio o a la tecnología y apoyar al equipo o criticar el producto. No representan combinaciones de niveles y tipos (A), no miden granularidad (B) y no asignan tipos a niveles (C).",
          "source": "Sample Exam C #34",
          "lang": "es"
        },
        {
          "id": "C-035",
          "topic": "FL-5.2.3",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes es un ejemplo de cómo el análisis de riesgos del producto puede influir en la minuciosidad y el alcance de las pruebas?",
          "options": [
            "El monitoreo continuo de riesgos nos permite identificar un riesgo emergente lo antes posible",
            "La identificación de riesgos nos permite implementar actividades de mitigación de riesgos y reducir el nivel de riesgo",
            "El nivel de riesgo evaluado nos ayuda a seleccionar el rigor de las pruebas",
            "El análisis de riesgos nos permite derivar elementos de cobertura"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. El nivel de riesgo evaluado orienta cuánto rigor aplicar: a mayor riesgo, pruebas más exhaustivas y mayor alcance. El monitoreo (A) pertenece al control de riesgos, la identificación (B) por sí sola no implementa mitigaciones y los elementos de cobertura se derivan con técnicas de prueba, no del análisis de riesgos (D).",
          "source": "Sample Exam C #35",
          "lang": "es"
        },
        {
          "id": "C-036",
          "topic": "FL-5.3.2",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes actividades en el proceso de pruebas hace el MAYOR uso de los informes de progreso de las pruebas?",
          "options": [
            "Diseño de pruebas",
            "Finalización de pruebas",
            "Análisis de pruebas",
            "Planificación de pruebas"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. El informe de finalización se elabora al cerrar un proyecto, nivel o tipo de prueba y se nutre de los informes de progreso y otros datos. Los informes de progreso se usan sobre todo en monitoreo y control y en la finalización, no en el diseño (A), el análisis (C) ni la planificación (D).",
          "source": "Sample Exam C #36",
          "lang": "es"
        },
        {
          "id": "C-037",
          "topic": "FL-5.4.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes NO es un ejemplo de cómo la gestión de configuración apoya las pruebas?",
          "options": [
            "Todas las confirmaciones en el repositorio se identifican de forma única y se controlan por versiones",
            "Todos los cambios en los elementos del entorno de pruebas se rastrean",
            "Todas las especificaciones de requisitos se referencian de forma inequívoca en los planes de pruebas",
            "Todos los defectos identificados tienen un estado asignado"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Que cada defecto tenga un estado asignado lo garantiza la gestión de defectos, no la gestión de configuración. Esta sí permite reconstruir versiones gracias a la identificación única de las confirmaciones del repositorio (A), rastrear los cambios del entorno de pruebas (B) y referenciar sin ambigüedad la documentación en los planes de pruebas (C).",
          "source": "Sample Exam C #37",
          "lang": "es"
        },
        {
          "id": "C-038",
          "topic": "FL-5.5.1",
          "level": "K3",
          "type": "single",
          "question": "Considere el siguiente informe de defecto para una aplicación de compras basada en web: Aplicación: WebShop v0.99 Defecto: El botón de inicio de sesión no funciona Pasos para reproducir: Iniciar el sitio web Hacer clic en el botón de inicio de sesión Resultado esperado: El usuario debería ser redirigido a la página de inicio de sesión. Resultado real: El botón de inicio de sesión no responde al hacer clic. Severidad: Alta Prioridad: Urgente ¿Cuál es la información MÁS importante que falta en este informe de defecto?",
          "options": [
            "Nombre del probador y fecha",
            "Elementos del entorno de prueba y sus números de versión",
            "Identificación del objeto de prueba",
            "Impacto en los intereses de los stakeholders"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Falta identificar el navegador y el dispositivo usados, datos decisivos porque el fallo del botón puede ser específico de uno de ellos y facilitan reproducirlo. El objeto de prueba sí está identificado (C), el impacto aparece como severidad alta (D) y el nombre del probador es secundario (A).",
          "source": "Sample Exam C #38",
          "lang": "es"
        },
        {
          "id": "D-030",
          "topic": "FL-5.1.3",
          "level": "K2",
          "type": "multi",
          "question": "¿Cuáles de los siguientes definen MEJOR los criterios de salida en un proyecto de pruebas?",
          "options": [
            "El presupuesto está aprobado",
            "El presupuesto se agota",
            "La base de prueba está disponible",
            "Los casos de prueba alcanzaron al menos 80% de cobertura de sentencias",
            "Todos los analistas de pruebas están certificados ISTQB en el Nivel Foundation"
          ],
          "answer": [
            1,
            3
          ],
          "explanation": "Correctas: B y D. Los criterios de salida indican cuándo puede darse por concluida una actividad: quedarse sin presupuesto es uno válido, y alcanzar al menos ochenta por ciento de cobertura de sentencias también, porque la cobertura mide la exhaustividad. La aprobación del presupuesto, la disponibilidad de la base de prueba y la certificación de los analistas son criterios de entrada, que se verifican antes de comenzar.",
          "source": "Sample Exam D #30",
          "lang": "es"
        },
        {
          "id": "D-031",
          "topic": "FL-5.1.4",
          "level": "K3",
          "type": "single",
          "question": "El equipo quiere estimar el tiempo necesario para que un probador ejecute cuatro casos de prueba para un componente de software. El equipo ha reunido las siguientes medidas del esfuerzo utilizado para ejecutar un solo caso de prueba: • Mejor escenario:       1 hora • Peor escenario:      8 horas • Escenario más probable:     3 horas Dado que se está utilizando la técnica de estimación de tres puntos, ¿cuál es la estimación final del tiempo necesario para ejecutar los cuatro casos de prueba?",
          "options": [
            "14 horas",
            "3.5 horas",
            "16 horas",
            "12 horas"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Con estimación de tres puntos, la estimación es la suma del valor optimista, cuatro veces el más probable y el pesimista, dividida entre seis: uno más doce más ocho, entre seis, da 3,5 horas por caso. Multiplicando por los cuatro casos se obtienen 14 horas. Las otras cifras surgen de aplicar mal la fórmula o de no multiplicar por la cantidad total de casos.",
          "source": "Sample Exam D #31",
          "lang": "es"
        },
        {
          "id": "D-032",
          "topic": "FL-5.1.5",
          "level": "K3",
          "type": "single",
          "question": "La tabla muestra la matriz de trazabilidad de los casos de prueba a los requisitos. “X” significa que un caso de prueba dado cubre el requisito correspondiente. Req1          Req2              Req3   Req4    Req5    Req6     Req7 TC1             X                             X      X                        X TC2             X                                             X               X TC3                                                           X          X TC4                            X Usted quiere priorizar los casos de prueba siguiendo la técnica de priorización por cobertura adicional. Ejecuta los cuatro casos de prueba. ¿Cuál caso de prueba debería ejecutarse como el ÚLTIMO?",
          "options": [
            "TC1",
            "TC2",
            "TC3",
            "TC4"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. La priorización por cobertura adicional ejecuta primero el caso que más requisitos cubre, que es TC1 con cuatro de siete, luego el que más aporta entre los restantes, TC3 con dos, y después TC4, que cubre el único requisito pendiente. TC2 no aporta ningún requisito nuevo en ese punto, por lo que debe ejecutarse al final. Las demás opciones no siguen ese criterio de cobertura adicional.",
          "source": "Sample Exam D #32",
          "lang": "es",
          "image": "assets/fig-d-32.png"
        },
        {
          "id": "D-033",
          "topic": "FL-5.1.7",
          "level": "K2",
          "type": "single",
          "question": "¿Cómo pueden los cuadrantes de pruebas ser beneficiosos para las pruebas?",
          "options": [
            "Ayudan en la planificación de pruebas dividiendo el proceso de pruebas en cuatro fases, correspondientes a los cuatro niveles básicos de prueba: pruebas de componentes, de integración, de sistema y de aceptación",
            "Ayudan a evaluar la cobertura de alto nivel (por ejemplo, cobertura de requisitos) con base en la cobertura de bajo nivel (por ejemplo, cobertura de código)",
            "Ayudan a los stakeholders no técnicos a comprender los diferentes tipos de prueba y que algunos tipos de prueba son más relevantes para ciertos niveles de prueba que otros",
            "Ayudan a los equipos ágiles a desarrollar una estrategia de comunicación basada en clasificar a las personas según cuatro tipos psicológicos básicos, y en modelar las relaciones entre ellos"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Los cuadrantes de pruebas ayudan a los stakeholders no técnicos a comprender los distintos tipos de prueba, las actividades que apoyan y el punto de vista que adoptan, y a ver que algunos tipos son más relevantes en ciertos niveles de prueba. No describen relaciones entre niveles de prueba, no permiten evaluar ningún tipo de cobertura y no son un modelo psicológico de personas.",
          "source": "Sample Exam D #33",
          "lang": "es"
        },
        {
          "id": "D-034",
          "topic": "FL-5.2.1",
          "level": "K1",
          "type": "single",
          "question": "Para un riesgo dado, su nivel de riesgo es $1,000 y su probabilidad de riesgo se estima en 50%. ¿Cuál es el impacto del riesgo?",
          "options": [
            "$500",
            "$2,000",
            "$50,000",
            "$200"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. En el enfoque cuantitativo el nivel de riesgo es el producto de la probabilidad por el impacto, de modo que el impacto se obtiene dividiendo el nivel de riesgo entre la probabilidad. Aquí, mil dólares divididos entre 0,5 dan dos mil dólares. Las demás cifras resultan de multiplicar en lugar de dividir o de tratar el porcentaje como si fuera un valor absoluto.",
          "source": "Sample Exam D #34",
          "lang": "es"
        },
        {
          "id": "D-035",
          "topic": "FL-5.2.2",
          "level": "K2",
          "type": "multi",
          "question": "¿Cuáles de los siguientes son riesgos de producto?",
          "options": [
            "Scope creep",
            "Arquitectura deficiente",
            "Recorte de costos",
            "Soporte deficiente de herramientas",
            "Tiempo de respuesta demasiado largo"
          ],
          "answer": [
            1,
            4
          ],
          "explanation": "Correctas: B y E. Los riesgos de producto se refieren a características del producto: una arquitectura deficiente y un tiempo de respuesta demasiado largo lo son. El aumento descontrolado del alcance, el recorte de costos y el soporte deficiente de herramientas son riesgos de proyecto, ligados a cuestiones técnicas u organizativas del proyecto y no a atributos del producto que se está probando.",
          "source": "Sample Exam D #35",
          "lang": "es"
        },
        {
          "id": "D-036",
          "topic": "FL-5.3.2",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes NO es un propósito válido para un informe de pruebas?",
          "options": [
            "Rastrear el progreso de las pruebas e identificar áreas que requieren mayor atención",
            "Proporcionar información sobre las pruebas ejecutadas, sus resultados y los defectos encontrados",
            "Proporcionar información sobre cada defecto, como los pasos para reproducirlo",
            "Proporcionar información sobre las pruebas planificadas para el siguiente período"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. El informe de pruebas resume las actividades, los resultados y los defectos encontrados, permite rastrear el progreso y señalar áreas que requieren atención, y puede informar lo planificado para el siguiente período. La información detallada de cada defecto, con sus pasos para reproducirlo, corresponde al informe de defecto, no al informe de pruebas, por lo que esa no es una finalidad válida de este último.",
          "source": "Sample Exam D #36",
          "lang": "es"
        },
        {
          "id": "D-037",
          "topic": "FL-5.4.1",
          "level": "K2",
          "type": "single",
          "question": "El usuario reportó una falla de software. Un ingeniero del equipo de soporte preguntó al usuario por el número de versión del software donde se observó la falla. Con base en el número de versión, el equipo reensambló todos los archivos que componían la versión. Esto permitió posteriormente que un desarrollador realizara el análisis, encontrara el defecto y lo corrigiera. ¿Cuál de los siguientes permitió que el equipo realizara la actividad anterior?",
          "options": [
            "Gestión de riesgos",
            "Monitoreo y control de pruebas",
            "Enfoque de equipo completo",
            "Gestión de configuración"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. La gestión de configuración identifica, controla y rastrea los productos de trabajo, y registra los elementos cambiados al crear una nueva línea base, lo que permite volver a una anterior y reproducir resultados previos. Con el número de versión se pudo reensamblar los archivos que la componían. La gestión de riesgos, el monitoreo y control, y el enfoque de equipo completo no tratan con elementos de configuración.",
          "source": "Sample Exam D #37",
          "lang": "es"
        },
        {
          "id": "D-038",
          "topic": "FL-5.5.1",
          "level": "K3",
          "type": "single",
          "question": "Considere el siguiente informe de defecto para un Sistema de Préstamo de Libros. ID del defecto: 001 | Título: No se puede devolver un libro                     | Severidad: Alta | Prioridad:                                          | Entorno: Windows 10, Google Chrome Descripción: Al intentar devolver un libro usando la función de Devolución de Libros, el sistema no registra la devolución y el libro permanece prestado al usuario. Pasos para reproducir: Inicie sesión en el Sistema de Préstamo de Libros como un usuario que ha tomado prestado un libro. Haga clic en el botón \"Devolución de Libros\" para el libro que ha sido prestado. El sistema no registra la devolución y el libro permanece prestado. Resultado esperado: El libro debería ser devuelto y ya no debería aparecer como prestado al usuario. Resultado real: El libro permanece prestado al usuario y no se registra como devuelto en el sistema. Adjuntos: [lista vacía] ¿Cuál de las siguientes opciones es MÁS probable que ayude al desarrollador a reproducir la falla rápidamente?",
          "options": [
            "Agregar información sobre qué usuarios y qué libros afecta la falla en la sección \"Descripción\"",
            "Completar el valor faltante del campo \"Prioridad\"",
            "Agregar volcados de memoria y capturas de la base de datos tomadas después de cada paso descrito en la sección \"Pasos para reproducir\" a la sección \"Adjuntos\".",
            "Repetir el mismo caso de prueba para diferentes entornos y escribir informes de defecto para cada uno de ellos por separado"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Indicar qué usuarios y qué libros se ven afectados permite al desarrollador usar los mismos datos de entrada y reproducir la falla con rapidez. Completar la prioridad no ayuda a reproducir el defecto; añadir volcados de memoria y capturas de base de datos tras cada paso aporta demasiada información irrelevante y alarga el análisis; y repetir el caso en otros entornos no responde a la necesidad de reproducirlo en la configuración reportada.",
          "source": "Sample Exam D #38",
          "lang": "es"
        },
        {
          "id": "S3-030",
          "topic": "FL-5.3.1",
          "level": "K1",
          "type": "single",
          "question": "Una métrica que rastrea el número de casos de prueba aprobados se recopila durante ¿cuál actividad en el proceso de pruebas?",
          "options": [
            "Planificación",
            "Implementación",
            "Ejecución",
            "Reporte"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Los casos aprobados se cuentan mientras las pruebas se ejecutan, así que la métrica pertenece a la actividad de ejecución y luego alimenta los informes. En la planificación se definen objetivos y criterios, en la implementación se preparan los casos y los datos, y el reporte comunica resultados ya obtenidos, sin recogerlos.",
          "source": "Sample Exam 3 #30",
          "lang": "es"
        },
        {
          "id": "S3-031",
          "topic": "FL-5.1.1",
          "level": "K2",
          "type": "single",
          "question": "Usted trabaja en un equipo de probadores que están todos escribiendo casos de prueba. Ha notado que existe una inconsistencia significativa con la longitud y la cantidad de detalle en los diferentes casos de prueba. ¿Dónde deberían documentarse los criterios para escribir casos de prueba?",
          "options": [
            "El plan de pruebas",
            "El enfoque de pruebas",
            "La plantilla de caso de prueba",
            "El plan del proyecto"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. El plan de pruebas establece, entre los criterios para realizar las actividades, el nivel de detalle y la estructura que debe tener la documentación de prueba, y ahí se fija el criterio común de escritura. El enfoque describe la estrategia, la plantilla solo da el formato y el plan del proyecto no entra en el detalle de las pruebas.",
          "source": "Sample Exam 3 #31",
          "lang": "es"
        },
        {
          "id": "S3-032",
          "topic": "FL-5.1.7",
          "level": "K2",
          "type": "single",
          "question": "Las pruebas unitarias pertenecen a ¿cuál cuadrante de pruebas?",
          "options": [
            "Q1",
            "Q2",
            "Q3",
            "Q4 ISTQB Foundation Level v4.0.1 Sample Exam #3 Questions"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Las pruebas unitarias o de componentes se ubican en el cuadrante Q1, que agrupa las pruebas de tecnología orientadas al código y a los componentes individuales. Los otros cuadrantes cubren pruebas de negocio y aceptación, de calidad no funcional o de atributos como rendimiento y usabilidad, que corresponden a niveles superiores.",
          "source": "Sample Exam 3 #32",
          "lang": "es"
        },
        {
          "id": "S3-033",
          "topic": "FL-5.2.2",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes es un riesgo de proyecto?",
          "options": [
            "Un módulo que realiza cálculos incorrectos debido a un defecto en una fórmula",
            "Una prueba de rendimiento fallida",
            "Un problema con la interfaz entre el sistema bajo prueba y un dispositivo periférico",
            "Un problema con el gerente de desarrollo que está ocasionando que rechace todos los informes de defectos"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. El riesgo de proyecto afecta la capacidad de planificar y ejecutar, como un gerente que rechaza todos los informes de defectos y bloquea el flujo de trabajo. Los otros son riesgos de producto, ligados a la calidad del software: un cálculo erróneo, una prueba de rendimiento fallida y un problema de interfaz con un periférico.",
          "source": "Sample Exam 3 #33",
          "lang": "es"
        },
        {
          "id": "S3-034",
          "topic": "FL-5.3.2",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de las siguientes variaciones debería explicarse en el Informe Resumen de Pruebas?",
          "options": [
            "Las variaciones entre los informes de estado semanales y los criterios de salida de pruebas",
            "Las variaciones entre los defectos encontrados y los defectos corregidos",
            "Las variaciones entre lo que se planificó para las pruebas y lo que realmente se probó",
            "Las variaciones entre los casos de prueba ejecutados y el número total de casos de prueba"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. El informe resumen debe explicar las desviaciones entre lo planificado y lo realmente probado, porque ahí se justifica por qué cambió el alcance. Las desviaciones frente a los informes semanales revelarían un fallo de seguimiento previo, la diferencia entre defectos hallados y corregidos es esperada, y los casos ejecutados son una métrica, no una desviación.",
          "source": "Sample Exam 3 #34",
          "lang": "es"
        },
        {
          "id": "S3-035",
          "topic": "FL-5.4.1",
          "level": "K2",
          "type": "single",
          "question": "Si los desarrolladores están entregando código para pruebas que no está bajo control de versiones, ¿qué proceso falta?",
          "options": [
            "Gestión de configuración",
            "Depuración",
            "Gestión de pruebas y defectos",
            "Análisis de riesgos ISTQB Foundation Level v4.0.1 Sample Exam #3 Questions"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Si el código llega a pruebas sin control de versiones ni trazabilidad de cambios, falta la gestión de configuración, que es la que identifica, versiona y controla los elementos de trabajo. La depuración es una actividad de desarrollo, la gestión de pruebas y defectos cubre otro ámbito, y el análisis de riesgos no se ocupa de versionar artefactos.",
          "source": "Sample Exam 3 #35",
          "lang": "es"
        },
        {
          "id": "S3-036",
          "topic": "FL-5.1.4",
          "level": "K3",
          "type": "single",
          "question": "Tu equipo está usando Planning Poker para estimar el esfuerzo de una historia. Voto del desarrollador           Voto del probador Primera votación                3                        8 Segunda votación               5                        8 Tercera votación                5                        5 Aunque se tomaron tres votaciones para alcanzar el consenso, ¿cuántos story points se deben asignar a la historia?",
          "options": [
            "10 porque esa es la suma de los puntos",
            "8 porque ese fue el número más alto",
            "3 porque ese fue el número más bajo",
            "5 porque ese fue el consenso ISTQB Foundation Level v4.0.1 Sample Exam #3 Questions"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Las votaciones continúan hasta que el equipo converge y el valor acordado, cinco, es el que se asigna a la historia. No se suman los votos, ni se toma el mayor por prudencia o el menor por optimismo: esos atajos rompen el consenso que la técnica busca y distorsionan la estimación que el equipo aceptó.",
          "source": "Sample Exam 3 #36",
          "lang": "es"
        },
        {
          "id": "S3-037",
          "topic": "FL-5.1.5",
          "level": "K3",
          "type": "single",
          "question": "Se te ha dado el siguiente conjunto de casos de prueba para ejecutar. Se te ha instruido ejecutarlos en orden por riesgo y realizar las pruebas lo más rápido posible para proporcionar retroalimentación a los desarrolladores cuanto antes. Dada esta información, ¿cuál es el mejor orden para ejecutar estas pruebas? ID del caso de prueba          Duración             Prioridad de riesgo   Dependencia 1                     30 mins              Baja             6 2                     10 mins              Media          ninguna 3                     45 mins              Alta            1 4                     30 mins              Alta            2 5                     10 mins              Media          4 6                     15 mins              Baja             2",
          "options": [
            "2, 4, 5, 6, 1, 3",
            "4, 3, 2, 5, 6, 1",
            "2, 5, 6, 4, 1, 3",
            "6, 1, 3, 2, 4, 5"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. El orden atiende primero el riesgo y la rapidez: se ejecuta el caso 2, corto y de riesgo medio, que no depende de nada, y al liberarse el 4 de riesgo alto; luego 5 y 6, y al final 1 y 3 por su baja prioridad. Así se obtiene retroalimentación temprana respetando las dependencias.",
          "source": "Sample Exam 3 #37",
          "lang": "es"
        },
        {
          "id": "S3-038",
          "topic": "FL-5.5.1",
          "level": "K3",
          "type": "single",
          "question": "Has estado probando software que se utilizará para rastrear compras con tarjeta de crédito. Has encontrado un defecto que hace que el sistema se caiga, pero solo si una persona ha realizado y anulado 10 compras seguidas. ¿Cuál es la prioridad y la calificación de severidad adecuadas para este defecto?",
          "options": [
            "Prioridad alta, severidad alta",
            "Prioridad alta, severidad baja",
            "Prioridad baja, severidad baja",
            "Prioridad baja, severidad alta ISTQB Foundation Level v4.0.1 Sample Exam #3 Questions"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. La severidad mide el impacto y aquí es alta porque el sistema se cae; la prioridad mide la urgencia de corregir y es baja porque la combinación necesaria, diez compras hechas y anuladas seguidas, es muy improbable. Las opciones con severidad baja subestiman el daño, y la de prioridad alta exagera la frecuencia del fallo.",
          "source": "Sample Exam 3 #38",
          "lang": "es"
        },
        {
          "id": "S4-030",
          "topic": "FL-5.2.1",
          "level": "K1",
          "type": "single",
          "question": "¿El nivel de riesgo está determinado por cuál de los siguientes?",
          "options": [
            "Probabilidad e impacto",
            "Prioridad y calificación de riesgo",
            "Probabilidad y practicidad",
            "Identificación y mitigación de riesgos"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. El nivel de riesgo se determina combinando la probabilidad de ocurrencia con el impacto que tendría, combinación a la que a veces se llama número de prioridad de riesgo. B invierte la relación al incluir la prioridad como insumo; C introduce la practicidad, que no es un factor del nivel, y D describe actividades del proceso de gestión, no los componentes del nivel.",
          "source": "Sample Exam 4 #30",
          "lang": "es"
        },
        {
          "id": "S4-031",
          "topic": "FL-5.1.3",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes es un ejemplo de un buen criterio de salida de las pruebas de sistema?",
          "options": [
            "Todas las pruebas deben completarse",
            "El presupuesto del proyecto debe gastarse",
            "Todos los defectos deben corregirse",
            "Todos los defectos de severidad 1 deben resolverse"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Un buen criterio de salida debe ser medible y claro, como que todos los defectos de severidad 1 estén resueltos. A usa términos ambiguos como completadas y deberían, y además no es realista; B confunde gastar el presupuesto con un objetivo de calidad, y C exige corregir todo, meta poco realista que además dejaría sin fondos a etapas posteriores.",
          "source": "Sample Exam 4 #31",
          "lang": "es"
        },
        {
          "id": "S4-032",
          "topic": "FL-5.1.7",
          "level": "K2",
          "type": "single",
          "question": "Estás trabajando en un proyecto y has determinado que las pruebas exploratorias son la mejor técnica de pruebas a aplicar. ¿Qué cuadrante de pruebas estás usando?",
          "options": [
            "Q1",
            "Q2",
            "Q3",
            "Q4 ISTQB Foundation Level v4.0.1 Sample Exam #4 Questions"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. La prueba exploratoria se ubica en el cuadrante Q3, orientado a la crítica del producto mediante pruebas basadas en experiencia y en el uso real del sistema. Q1 y Q2 apoyan al equipo desde la tecnología y el negocio respectivamente, y Q4 agrupa pruebas de crítica con enfoque tecnológico, por lo que ninguno corresponde a esta técnica.",
          "source": "Sample Exam 4 #32",
          "lang": "es"
        },
        {
          "id": "S4-033",
          "topic": "FL-5.1.7",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes es un riesgo de proyecto?",
          "options": [
            "Un defecto que está causando un problema de rendimiento",
            "Un requisito duplicado",
            "Un problema con un procedimiento de conversión de datos",
            "Un cronograma que requiere trabajar durante el cierre de Navidad"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Un cronograma que obliga a trabajar durante el cierre de Navidad es un riesgo de proyecto, porque afecta la planificación y la disponibilidad de recursos del proyecto en su conjunto. A, B y C son riesgos de producto: un defecto de rendimiento, un requisito duplicado y un problema en la conversión de datos comprometen la calidad del producto, no la marcha del proyecto.",
          "source": "Sample Exam 4 #33",
          "lang": "es"
        },
        {
          "id": "S4-034",
          "topic": "FL-5.3.3",
          "level": "K2",
          "type": "single",
          "question": "Acabas de completar las pruebas en una implementación importante de ERP. El proyecto ha tomado dos años y ahora está listo para la aprobación final antes de la puesta en producción. ¿Qué documentación de pruebas se debe producir en este momento?",
          "options": [
            "Finalización formal de pruebas",
            "Tablero de tareas del equipo de pruebas",
            "Correo electrónico al equipo felicitándolos por su éxito",
            "Gráfico burn down ISTQB Foundation Level v4.0.1 Sample Exam #4 Questions"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Al terminar las pruebas de una implementación importante y antes de la aprobación final, corresponde elaborar el informe de finalización formal de pruebas. B y D son instrumentos de comunicación usados durante el trabajo del proyecto, y C no es documentación de pruebas y resultaría prematuro antes de obtener la aprobación.",
          "source": "Sample Exam 4 #34",
          "lang": "es"
        },
        {
          "id": "S4-035",
          "topic": "FL-5.4.1",
          "level": "K2",
          "type": "single",
          "question": "Estás trabajando en un proyecto que está entregando software al equipo de pruebas en iteraciones. En la iteración 3 identificaste una falla. El desarrollador encontró y corrigió el defecto y liberó la corrección en la iteración 4. Confirmaste la corrección y cerraste el informe de defecto. Ahora estás probando la iteración 7 y la falla ha ocurrido nuevamente. Has hablado con el desarrollador y él no sabe cómo ni cuándo regresó la falla y te ha pedido que investigues. ¿Cómo puede ayudarte la gestión de configuración a reunir más información sobre esta falla?",
          "options": [
            "Puedes ver qué cambió en la iteración 4 para corregir el problema",
            "Puedes recargar y volver a probar las iteraciones 5 y 6 para ver dónde se reintrodujo el problema",
            "Puedes revisar todos los cambios de código que han ocurrido desde la iteración 4 para ver qué pudo haberlo roto",
            "Puedes mejorar las pruebas de regresión para asegurar que la falla se detecte antes ISTQB Foundation Level v4.0.1 Sample Exam #4 Questions"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. La gestión de configuración permite recuperar e instalar las versiones correspondientes a las iteraciones 5 y 6 y volver a probarlas para ubicar dónde se reintrodujo la falla. A solo habría servido para confirmar la corrección original; C es tarea del desarrollador, y D mejora la detección futura pero no ayuda a investigar lo ya ocurrido.",
          "source": "Sample Exam 4 #35",
          "lang": "es"
        },
        {
          "id": "S4-036",
          "topic": "FL-5.1.4",
          "level": "K3",
          "type": "single",
          "question": "Estás estimando el tiempo de pruebas requerido para un nuevo proyecto. Has reunido información de tres expertos y te han dado los siguientes números en días: Usando los números promedio de la tabla anterior y aplicando la técnica de estimación de tres puntos, ¿cuál es la estimación?",
          "options": [
            "325 ± 45",
            "81.25 ± 8",
            "54.17 ± 7.5",
            "40 ± 2"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Con la estimación de tres puntos se aplica (optimista + 4 × probable + pesimista) / 6, es decir (30 + 220 + 75) / 6 = 54,17, y la desviación estándar es (75 − 30) / 6 = 7,5. A, B y D no se obtienen con esa fórmula ni con esos datos, por lo que no reflejan el cálculo solicitado.",
          "source": "Sample Exam 4 #36",
          "lang": "es",
          "note": "Esta pregunta incluye un diagrama o tabla en el PDF oficial; revisa el material original para verla completa.",
          "image": "assets/fig-s4-036.png"
        },
        {
          "id": "S4-037",
          "topic": "FL-5.1.5",
          "level": "K3",
          "type": "single",
          "question": "Considera los siguientes casos de prueba que se usan para probar un sistema contable: Dada esta información, ¿cuál es el orden adecuado en el que se deben ejecutar estos casos de prueba?",
          "options": [
            "5, 1, 3, 2, 4",
            "1, 2, 4, 5, 3",
            "1, 3, 2, 4, 5",
            "3, 4, 5, 1, 2 ISTQB Foundation Level v4.0.1 Sample Exam #4 Questions"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Primero se ejecuta la prueba de la que dependen las demás, luego las que habilitan la de mayor prioridad y al final la que no es requisito de esta, logrando correr lo más prioritario cuanto antes. A falla porque la prueba 5 no puede ir primero; C posterga esa prueba detrás de la 3, y D ignora que la 3 necesita a la 1 y la 2.",
          "source": "Sample Exam 4 #37",
          "lang": "es"
        },
        {
          "id": "S4-038",
          "topic": "FL-5.1.5",
          "level": "K3",
          "type": "single",
          "question": "Has recibido la siguiente sección de descripción en un informe de defecto: El informe se ejecutó según los pasos adjuntos, pero los datos eran incorrectos. Por ejemplo, la información en la columna 1 era incorrecta. Ver la captura de pantalla adjunta. Este informe es crítico para los usuarios y no podrán hacer su trabajo sin esta información. ¿Cuál es el mayor problema con este informe de defecto?",
          "options": [
            "El desarrollador no sabrá qué tan importante es el problema",
            "El desarrollador no sabrá cómo repetir la prueba",
            "El desarrollador no podrá ver qué es lo que el probador dice que está mal",
            "El desarrollador no sabrá qué esperaba ver el probador"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. El informe indica que los datos son incorrectos, pero no dice qué se esperaba obtener, así que el desarrollador no puede saber cuál es el comportamiento correcto. A no aplica porque la criticidad sí se menciona; B se cubre con los pasos adjuntos, y C queda cubierto con la captura, que señala la columna problemática.",
          "source": "Sample Exam 4 #38",
          "lang": "es"
        }
      ]
    },
    {
      "id": 6,
      "title": "Herramientas de prueba",
      "short": "Herramientas",
      "weight": 5,
      "questions": [
        {
          "id": "A-039",
          "topic": "FL-6.1.1",
          "level": "K2",
          "type": "single",
          "question": "¿Qué actividad de prueba apoya una herramienta de preparación de datos?",
          "options": [
            "Monitoreo y control de pruebas",
            "Análisis de pruebas",
            "Diseño de pruebas e implementación de pruebas",
            "Finalización de pruebas"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. El diseño e implementación de pruebas incluye identificar, crear o adquirir el testware necesario para la ejecución, como los datos de prueba. El monitoreo y control compara el avance con el plan, el análisis identifica condiciones de prueba y la finalización ocurre en hitos, demasiado tarde para preparar datos.",
          "source": "Sample Exam A #39",
          "lang": "es"
        },
        {
          "id": "A-040",
          "topic": "FL-6.2.1",
          "level": "K1",
          "type": "single",
          "question": "¿Qué elemento identifica correctamente un riesgo potencial de realizar automatización de pruebas?",
          "options": [
            "Puede introducir regresiones desconocidas en producción",
            "Es posible que no se asignen adecuadamente los esfuerzos suficientes para mantener el testware",
            "Es posible que no se dependa suficientemente de las herramientas de prueba y el testware asociado",
            "Puede reducir el tiempo asignado a las pruebas manuales"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Un riesgo real de la automatización es no asignar esfuerzo suficiente al mantenimiento del testware, que se degrada y pierde valor. A es falsa porque la automatización no introduce regresiones desconocidas en producción; C invierte el requisito, pues las herramientas deben ser confiables; D es un beneficio esperado, no un riesgo.",
          "source": "Sample Exam A #40",
          "lang": "es"
        },
        {
          "id": "B-039",
          "topic": "FL-6.1.1",
          "level": "K2",
          "type": "single",
          "question": "Dadas las siguientes descripciones: 1. Apoyar el seguimiento de flujos de trabajo 2. Facilitar la comunicación 3. Máquinas virtuales 4. Apoyar revisiones Y las siguientes categorías de herramientas de prueba: A. Herramientas de pruebas estáticas B. Herramientas que apoyan la escalabilidad y la estandarización del despliegue C. Herramientas DevOps D. Herramientas de colaboración ¿Cuál de las siguientes coincide MEJOR con las descripciones y categorías?",
          "options": [
            "1A, 2B, 3C, 4D",
            "1B, 2D, 3C, 4A",
            "1C, 2D, 3B, 4A",
            "1D, 2C, 3A, 4B"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. El seguimiento de flujos de trabajo corresponde a las herramientas DevOps, la facilitación de la comunicación a las de colaboración, las máquinas virtuales a las que apoyan escalabilidad y estandarización del despliegue, y el apoyo a revisiones a las de pruebas estáticas. Las otras combinaciones desplazan estas categorías, por ejemplo asignando las máquinas virtuales a DevOps o la comunicación a las herramientas estáticas.",
          "source": "Sample Exam B #39",
          "lang": "es"
        },
        {
          "id": "B-040",
          "topic": "FL-6.2.1",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de los siguientes es MÁS probable que sea un beneficio de la automatización de pruebas?",
          "options": [
            "Proporciona medidas de cobertura que son demasiado complicadas para que los humanos las deriven",
            "Comparte la responsabilidad de las pruebas con el proveedor de la herramienta",
            "Elimina la necesidad del pensamiento crítico al analizar los resultados de las pruebas",
            "Genera casos de prueba a partir de un análisis del código del programa"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. La automatización puede calcular medidas de cobertura que resultan inviables de derivar a mano, como las de caja blanca en código no trivial. No comparte la responsabilidad de las pruebas con el proveedor, no elimina el pensamiento crítico al analizar resultados y tampoco genera casos a partir del código, porque este no aporta los resultados esperados.",
          "source": "Sample Exam B #40",
          "lang": "es"
        },
        {
          "id": "C-039",
          "topic": "FL-6.1.1",
          "level": "K2",
          "type": "single",
          "question": "¿Las herramientas de cuál de las siguientes categorías ayudan con la organización de casos de prueba, defectos detectados y gestión de configuración?",
          "options": [
            "Herramientas de ejecución de pruebas y cobertura",
            "Herramientas de diseño e implementación de pruebas",
            "Herramientas de gestión de defectos",
            "Herramientas de gestión de pruebas"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Las herramientas de gestión de pruebas facilitan gestionar requisitos, pruebas, defectos y configuración, aumentando la eficiencia del proceso. Las de ejecución y cobertura (A), diseño e implementación (B) y gestión de defectos (C) cubren solo partes y no organizan a la vez casos de prueba, defectos y configuración.",
          "source": "Sample Exam C #39",
          "lang": "es"
        },
        {
          "id": "C-040",
          "topic": "FL-6.2.1",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de los siguientes es MÁS probable que sea un beneficio de la automatización de pruebas?",
          "options": [
            "La capacidad de generar casos de prueba sin acceso a la base de prueba",
            "El logro de una mayor cobertura mediante una evaluación más objetiva",
            "El aumento en los tiempos de ejecución de pruebas disponibles con mayor capacidad de procesamiento",
            "La prevención de errores humanos mediante una mayor consistencia y repetibilidad"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. La automatización evita errores humanos al derivar, crear y ejecutar pruebas de forma consistente y repetible. No permite generar casos sin acceso a la base de prueba (A), una evaluación más objetiva no aumenta por sí sola la cobertura (B) y mayor capacidad de procesamiento reduce, no aumenta, los tiempos de ejecución (C).",
          "source": "Sample Exam C #40",
          "lang": "es"
        },
        {
          "id": "D-039",
          "topic": "FL-6.1.1",
          "level": "K2",
          "type": "single",
          "question": "Dadas las siguientes categorías de herramientas de prueba: i.   Herramientas de colaboración ii.   Herramientas DevOps iii.   Herramientas de gestión iv.    Herramientas de pruebas no funcionales v.    Herramientas de diseño e implementación de pruebas ¿Las herramientas de cuáles de las categorías son MÁS probable que faciliten la ejecución de pruebas?",
          "options": [
            "i, v",
            "ii, iv",
            "i, iii, v",
            "ii, iii, iv"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. Las herramientas DevOps apoyan el pipeline de entrega y la integración y entrega continuas, que incluyen la ejecución de pruebas, y las de pruebas no funcionales permiten ejecutar pruebas difícilmente realizables a mano. Las de colaboración facilitan la comunicación, las de gestión administran requisitos, pruebas y defectos, y las de diseño e implementación generan casos, datos y procedimientos, sin facilitar la ejecución.",
          "source": "Sample Exam D #39",
          "lang": "es"
        },
        {
          "id": "D-040",
          "topic": "FL-6.2.1",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de los siguientes es MÁS probable que sea un riesgo de la automatización de pruebas?",
          "options": [
            "La detección de defectos adicionales de alta severidad",
            "Proporcionar medidas que son demasiado complicadas para que los humanos las deriven",
            "Incompatibilidad con la plataforma de desarrollo",
            "Tiempos de ejecución de pruebas sustancialmente reducidos"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Si la automatización es incompatible con la plataforma de desarrollo no podrá integrarse con el objeto de prueba ni pasarle entradas o recibir sus resultados, lo que constituye un riesgo real. Detectar defectos adicionales de alta severidad, obtener medidas que los humanos no podrían derivar y reducir sustancialmente los tiempos de ejecución son beneficios habituales de la automatización, no riesgos.",
          "source": "Sample Exam D #40",
          "lang": "es"
        },
        {
          "id": "S3-039",
          "topic": "FL-6.1.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál de los siguientes es un ejemplo de una herramienta que soporta pruebas estáticas?",
          "options": [
            "Una herramienta que ayuda con el seguimiento de los resultados de las revisiones",
            "Una herramienta de seguimiento de defectos",
            "Una herramienta de automatización de pruebas",
            "Una herramienta que ayuda a diseñar casos de prueba para pruebas de seguridad"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Las revisiones son una forma de prueba estática, y una herramienta que ayuda a seguir sus resultados apoya ese tipo de prueba. El seguimiento de defectos es una herramienta de gestión, la automatización ejecuta pruebas dinámicas y la de diseño para seguridad produce casos, ámbitos propios de las pruebas dinámicas o de la gestión.",
          "source": "Sample Exam 3 #39",
          "lang": "es"
        },
        {
          "id": "S3-040",
          "topic": "FL-6.2.1",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de los siguientes es un beneficio de la automatización de pruebas?",
          "options": [
            "La ejecución de pruebas es más rápida",
            "Las pruebas manuales se vuelven obsoletas",
            "El ROI es fácil de determinar",
            "La implementación de pruebas es más rápida"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Una vez creados los casos, la automatización ejecuta mucho más rápido que la prueba manual y permite repeticiones frecuentes. Las pruebas manuales no quedan obsoletas, siguen aportando en áreas nuevas y exploratorias; el retorno de inversión es difícil de calcular porque depende del esfuerzo manual equivalente, y desarrollar la automatización suele tardar más que escribir casos manuales.",
          "source": "Sample Exam 3 #40",
          "lang": "es"
        },
        {
          "id": "S4-039",
          "topic": "FL-6.1.1",
          "level": "K2",
          "type": "single",
          "question": "¿Cuál es el propósito principal de una herramienta de ejecución de pruebas?",
          "options": [
            "Ejecuta scripts de prueba automatizados para probar el objeto de prueba",
            "Registra automáticamente defectos en el sistema de seguimiento de defectos",
            "Analiza el código para determinar si hay violaciones de estándares de codificación",
            "Rastrea casos de prueba, defectos y trazabilidad de requisitos"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. La herramienta de ejecución de pruebas ejecuta scripts automatizados contra el objeto de prueba, y esa es su función principal. B puede ocurrir como efecto secundario en algunas herramientas, pero no es su propósito; C describe una herramienta de análisis estático, y D una herramienta de gestión de pruebas, no de ejecución.",
          "source": "Sample Exam 4 #39",
          "lang": "es"
        },
        {
          "id": "S4-040",
          "topic": "FL-6.2.1",
          "level": "K1",
          "type": "single",
          "question": "¿Cuál de los siguientes es un riesgo con la automatización de pruebas?",
          "options": [
            "Usar una herramienta de automatización que no tendrá soporte en el futuro",
            "Desarrollar automatización de pruebas para áreas de pruebas manuales particularmente tediosas",
            "Usar probadores técnicos para implementar la automatización",
            "Desarrollar informes automatizados"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Elegir una herramienta de automatización que pueda quedar sin soporte del proveedor o de la comunidad es un riesgo conocido, porque la automatización queda atada a ella. B, C y D no son riesgos sino prácticas o resultados esperados: automatizar áreas tediosas, emplear perfiles técnicos y generar informes automáticos suelen ser beneficios buscados.",
          "source": "Sample Exam 4 #40",
          "lang": "es"
        }
      ]
    },
    {
      "id": 7,
      "title": "Simulacro ExamUnit",
      "short": "ExamUnit",
      "weight": 0,
      "badge": "Simulacro",
      "simulator": true,
      "questions": [
        {
          "id": "EX-001",
          "topic": "FL-1.1.1",
          "level": "K1",
          "chapterRef": 1,
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones describe un objetivo de prueba válido?",
          "options": [
            "Demostrar que no hay defectos sin corregir en el sistema bajo prueba",
            "Demostrar que no habrá fallas después de la implementación del sistema en producción",
            "Reducir el nivel de riesgo del objeto de prueba y generar confianza en el nivel de calidad",
            "Verificar que no hay combinaciones de entradas sin probar"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Las pruebas encuentran defectos y fallas, lo que reduce el nivel de riesgo y a la vez genera más confianza en la calidad del objeto de prueba. A y B son imposibles de demostrar: no se puede probar que no queda ningún defecto ni que no habrá fallas en producción. D también es inviable, porque probar todas las combinaciones de entradas no es factible.",
          "source": "ExamUnit #1",
          "lang": "es",
          "note": "Alineada con la pregunta oficial A-001."
        },
        {
          "id": "EX-002",
          "topic": "FL-1.2.1",
          "level": "K2",
          "chapterRef": 1,
          "type": "single",
          "question": "¿Cuál de las siguientes opciones muestra un ejemplo de actividades de prueba que contribuyen al éxito?",
          "options": [
            "Involucrar a los probadores durante las diversas actividades del ciclo de vida de desarrollo de software (SDLC) ayuda a detectar defectos en los productos de trabajo",
            "Los probadores intentan no molestar a los desarrolladores mientras codifican, para que los desarrolladores escriban mejor código",
            "La colaboración de los probadores con los usuarios finales ayuda a mejorar la calidad de los informes de defectos durante las pruebas de integración de componentes y de sistema",
            "Los probadores certificados diseñarán casos de prueba mucho mejores que los probadores no certificados"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Involucrar a los probadores desde el inicio del ciclo de vida aumenta la comprensión de las decisiones de diseño y permite detectar defectos temprano en los productos de trabajo. B es errónea porque desarrolladores y probadores deben entenderse mutuamente; C falla porque los usuarios finales no participan en niveles bajos ni mejoran los informes de defectos; D es falsa, pues certificarse no garantiza mejores casos de prueba.",
          "source": "ExamUnit #2",
          "lang": "es",
          "note": "Alineada con la pregunta oficial A-002."
        },
        {
          "id": "EX-003",
          "topic": "FL-1.3.1",
          "level": "K2",
          "chapterRef": 1,
          "type": "single",
          "question": "No se han cambiado los casos de regresión en varias iteraciones y no aparecen defectos nuevos. El gerente está feliz, tú no. ¿Qué principio lo explica?",
          "options": [
            "Las pruebas se desgastan (paradoja del pesticida).",
            "Falacia de ausencia de errores.",
            "Los defectos se agrupan.",
            "Las pruebas exhaustivas son imposibles."
          ],
          "answer": [
            0
          ],
          "explanation": "Si repites las mismas pruebas, dejan de encontrar defectos nuevos; hay que revisarlas y actualizarlas.",
          "source": "ExamUnit #3",
          "lang": "es"
        },
        {
          "id": "EX-004",
          "topic": "FL-1.4.1",
          "level": "K2",
          "chapterRef": 1,
          "type": "single",
          "question": "Equipo desarrollando app móvil de comida; en la iteración se implementa el pago. ¿Qué actividad forma parte del análisis de pruebas?",
          "options": [
            "Estimar que probar la integración con el pago llevará 8 días-persona.",
            "Decidir que el equipo debe probar si es posible compartir el pago entre varios usuarios.",
            "Usar BVA para derivar datos de prueba para el pago mínimo permitido.",
            "Analizar la discrepancia entre resultado real y esperado tras ejecutar un caso."
          ],
          "answer": [
            1
          ],
          "explanation": "El análisis identifica condiciones de prueba (qué probar). A es planificación/estimación, C es diseño, D es ejecución/evaluación.",
          "source": "ExamUnit #4",
          "lang": "es"
        },
        {
          "id": "EX-005",
          "topic": "FL-1.4.5",
          "level": "K2",
          "chapterRef": 1,
          "type": "multi",
          "question": "¿Cuáles DOS de las siguientes tareas pertenecen PRINCIPALMENTE a un rol de pruebas?",
          "options": [
            "Configurar entornos de prueba",
            "Mantener el backlog del producto",
            "Diseñar soluciones para nuevos requisitos",
            "Crear el plan de pruebas",
            "Analizar la base de prueba"
          ],
          "answer": [
            0,
            4
          ],
          "explanation": "Correctas: A y E. Configurar entornos de prueba y analizar la base de prueba son tareas técnicas del rol de pruebas, esta última como parte del análisis de pruebas. B corresponde al propietario del producto, que construye y mantiene el backlog; C lo hace el equipo de desarrollo al diseñar soluciones; D es una tarea de gestión, propia de un rol gerencial.",
          "source": "ExamUnit #5",
          "lang": "es",
          "note": "Alineada con la pregunta oficial A-006."
        },
        {
          "id": "EX-006",
          "topic": "FL-1.5.1",
          "level": "K2",
          "chapterRef": 1,
          "type": "single",
          "question": "¿Cuáles de las siguientes son las habilidades más importantes que debe tener un probador? i. Conocimiento del dominio. ii. Crear una visión de producto. iii. Ser buen jugador de equipo. iv. Planificar y organizar el trabajo del equipo. v. Pensamiento crítico.",
          "options": [
            "ii y iv.",
            "i, iii y v.",
            "i, ii y v.",
            "iii y iv."
          ],
          "answer": [
            1
          ],
          "explanation": "Conocimiento del dominio, trabajo en equipo y pensamiento crítico.",
          "source": "ExamUnit #6",
          "lang": "es"
        },
        {
          "id": "EX-007",
          "topic": "FL-1.5.2",
          "level": "K1",
          "chapterRef": 1,
          "type": "single",
          "question": "¿Cómo se presenta el enfoque de equipo completo en las interacciones entre los probadores y los representantes del negocio?",
          "options": [
            "Los representantes del negocio deciden sobre los enfoques de automatización de pruebas",
            "Los probadores ayudan a los representantes del negocio a definir una estrategia de pruebas",
            "Los representantes del negocio no forman parte del enfoque de equipo completo",
            "Los probadores ayudan a los representantes del negocio a crear pruebas de aceptación adecuadas"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. En el enfoque de equipo completo los probadores colaboran estrechamente con los representantes del negocio para alcanzar los niveles de calidad deseados, lo que incluye apoyarlos a crear pruebas de aceptación adecuadas. A es falsa porque el enfoque de automatización lo definen los probadores con ayuda de desarrolladores y negocio; B también, pues la estrategia se decide con los desarrolladores; C es incorrecta porque el negocio sí forma parte.",
          "source": "ExamUnit #7",
          "lang": "es",
          "note": "Alineada con la pregunta oficial A-008."
        },
        {
          "id": "EX-008",
          "topic": "FL-2.1.3",
          "level": "K1",
          "chapterRef": 2,
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones describe MEJOR el enfoque de desarrollo guiado por pruebas de aceptación (ATDD)?",
          "options": [
            "En ATDD, los criterios de aceptación se crean típicamente con base en el formato dado/cuando/entonces",
            "En ATDD, los casos de prueba se crean principalmente en las pruebas de componentes y están orientados al código",
            "En ATDD, las pruebas se crean con base en los criterios de aceptación para impulsar el desarrollo del software relacionado",
            "En ATDD, las pruebas se basan en el comportamiento deseado del software, lo que facilita a los miembros del equipo comprenderlas"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. En ATDD las pruebas se crean a partir de los criterios de aceptación y se usan para impulsar el desarrollo del software relacionado. A y D describen BDD, donde se usa el formato dado/cuando/entonces y se parte del comportamiento deseado. B describe TDD, con pruebas de componentes orientadas al código.",
          "source": "ExamUnit #8",
          "lang": "es",
          "note": "Alineada con la pregunta oficial A-010."
        },
        {
          "id": "EX-009",
          "topic": "FL-2.1.5",
          "level": "K2",
          "chapterRef": 2,
          "type": "single",
          "question": "¿Cuál NO es un ejemplo de desplazamiento hacia la izquierda?",
          "options": [
            "Revisar los requisitos antes de que los acepten las partes interesadas.",
            "Escribir una prueba de componente antes del código.",
            "Ejecutar una prueba de rendimiento de un componente durante pruebas de componentes.",
            "Escribir un guion de prueba antes de establecer el proceso de gestión de configuración."
          ],
          "answer": [
            3
          ],
          "explanation": "Shift-left es probar más temprano; escribir un guion antes de tener configuración no es un ejemplo de eso.",
          "source": "ExamUnit #9",
          "lang": "es"
        },
        {
          "id": "EX-010",
          "topic": "FL-2.1.6",
          "level": "K2",
          "chapterRef": 2,
          "type": "single",
          "question": "¿Cuál de los siguientes argumentos usaría para convencer a su gerente de organizar retrospectivas al final de cada ciclo de liberación?",
          "options": [
            "Las retrospectivas son muy populares hoy en día y los clientes apreciarían que las agregáramos a nuestros procesos",
            "Organizar retrospectivas ahorrará dinero a la organización porque, sin ellas, los representantes de los usuarios finales no proporcionan retroalimentación inmediata sobre el producto",
            "Las debilidades del proceso identificadas durante la retrospectiva pueden analizarse y servir como una lista de tareas para el programa de mejora continua de procesos de la organización",
            "Las retrospectivas abarcan cinco valores, incluidos el coraje y el respeto, que son cruciales para mantener la mejora continua en la organización"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Las debilidades del proceso detectadas en la retrospectiva pueden analizarse y convertirse en tareas del programa de mejora continua, y ese es el argumento sólido para el gerente. A apela a la popularidad y al cliente, no a la mejora; B confunde la retrospectiva con retroalimentación del producto y con usuarios finales; D menciona valores de Extreme Programming ajenos a la retrospectiva.",
          "source": "ExamUnit #10",
          "lang": "es",
          "note": "Alineada con la pregunta oficial A-012."
        },
        {
          "id": "EX-011",
          "topic": "FL-2.2.3",
          "level": "K2",
          "chapterRef": 2,
          "type": "single",
          "question": "Está probando una historia de usuario con tres criterios de aceptación: AC1, AC2 y AC3. AC1 está cubierto por el caso de prueba TC1, AC2 por TC2 y AC3 por TC3. El historial de ejecución de pruebas tuvo tres ejecuciones en tres versiones consecutivas del software de la siguiente manera: Ejecución 1    Ejecución 2    Ejecución 3 TC1                 (1) Falló    (4) Pasó     (7) Pasó TC2                (2) Pasó      (5) Falló    (8) Pasó TC3                 (3) Falló     (6) Falló    (9) Pasó Las pruebas se repiten una vez que se le informa que todos los defectos encontrados en la ejecución de pruebas fueron corregidos y hay una nueva versión del software disponible. ¿Cuáles de las pruebas anteriores se ejecutan como pruebas de regresión?",
          "options": [
            "Solo 4, 7, 8, 9",
            "Solo 5, 7",
            "Solo 4, 6, 8, 9",
            "Solo 5, 6"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. TC2 pasó en la ejecución 1 y se repite como prueba 5, y TC1 pasó en la ejecución 2 y se repite como prueba 7: esas son pruebas de regresión. Las pruebas 4, 6, 8 y 9 confirman correcciones de fallos previos, por lo que son pruebas de confirmación y no de regresión.",
          "source": "ExamUnit #11",
          "lang": "es",
          "note": "Alineada con la pregunta oficial A-014."
        },
        {
          "id": "EX-012",
          "topic": "FL-3.1.2",
          "level": "K2",
          "chapterRef": 3,
          "type": "single",
          "question": "¿Cuál de los siguientes NO es un beneficio de las pruebas estáticas?",
          "options": [
            "Tener una gestión de defectos menos costosa debido a la facilidad de detectar defectos más tarde en el SDLC",
            "Corregir defectos encontrados durante las pruebas estáticas es generalmente mucho menos costoso que corregir defectos encontrados durante las pruebas dinámicas",
            "Encontrar defectos de codificación que podrían no haberse encontrado solo realizando pruebas dinámicas",
            "Detectar brechas e inconsistencias en los requisitos"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Esta afirmación no es un beneficio: la gestión de defectos no resulta menos costosa y detectar defectos más tarde en el SDLC es más caro, no más fácil. B, C y D sí son beneficios reales de las pruebas estáticas: corregir antes cuesta menos, se hallan defectos de codificación que las pruebas dinámicas no verían y se detectan brechas e inconsistencias en los requisitos.",
          "source": "ExamUnit #12",
          "lang": "es",
          "note": "Alineada con la pregunta oficial A-015."
        },
        {
          "id": "EX-013",
          "topic": "FL-3.2.4",
          "level": "K2",
          "chapterRef": 3,
          "type": "single",
          "question": "Las revisiones que se utilizan en tu organización tienen los siguientes atributos: • Existe el rol de un escriba • El propósito principal es evaluar la calidad • La reunión es liderada por el autor del producto de trabajo • Hay preparación individual • Se produce un informe de revisión ¿Cuál de los siguientes tipos de revisión es MÁS probable que se esté utilizando?",
          "options": [
            "Revisión informal",
            "Walkthrough",
            "Revisión técnica",
            "Inspección"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. El walkthrough tiene como propósito principal evaluar la calidad, es liderado por el autor del producto de trabajo y cuenta con un escriba, preparación individual e informe de revisión. La inspección exige moderador y no permite que el autor lidere; la revisión técnica tampoco la lidera el autor; la revisión informal no tiene roles ni proceso definidos.",
          "source": "ExamUnit #13",
          "lang": "es",
          "note": "Alineada con la pregunta oficial A-017."
        },
        {
          "id": "EX-014",
          "topic": "FL-4.1.1",
          "level": "K2",
          "chapterRef": 4,
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones describe MEJOR las técnicas basadas en la experiencia?",
          "options": [
            "Casos basados en información detallada de diseño.",
            "Elementos de la interfaz usados para medir cobertura.",
            "Dependen en gran medida del conocimiento del probador sobre el software y el dominio.",
            "Se basan únicamente en la especificación de requisitos y en el diseño detallado del software."
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Las técnicas basadas en la experiencia dependen del conocimiento del probador sobre el software y el dominio, no de documentos detallados ni de la interfaz. La especificación y el diseño detallado alimentan las técnicas de caja negra y caja blanca, no las basadas en experiencia.",
          "source": "ExamUnit #14",
          "lang": "es",
          "note": "Opción D corregida (antes decía \"Duplicado de C en la captura\")."
        },
        {
          "id": "EX-015",
          "topic": "FL-4.2.2",
          "level": "K3",
          "chapterRef": 4,
          "type": "single",
          "question": "La nota final se asigna por rangos: 0–50 reprobado, 51–60 suficiente, 61–70 satisfactorio, 71–80 bueno, 81–90 muy bueno, 91–100 excelente. Se ejecutaron los casos 91, 50, 81, 60, 70 y 80. ¿Qué cobertura de BVA de 2 valores se alcanzó?",
          "options": [
            "50%",
            "60%",
            "33,3%",
            "100%"
          ],
          "answer": [
            0
          ],
          "explanation": "Hay 12 valores límite (0, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91, 100); los casos cubren 6 → 50%.",
          "source": "ExamUnit #15",
          "lang": "es",
          "image": "assets/ex-015-bva.png"
        },
        {
          "id": "EX-016",
          "topic": "FL-4.2.3",
          "level": "K3",
          "chapterRef": 4,
          "type": "single",
          "question": "Su tienda favorita de alquiler diario de bicicletas acaba de introducir un nuevo sistema de gestión de relaciones con los clientes y le pidió a usted, uno de sus miembros más leales, que lo probara. Las funcionalidades implementadas son las siguientes: •      Cualquiera puede alquilar una bicicleta, pero los miembros reciben un 20% de descuento •      Sin embargo, si se incumple la fecha límite de devolución, el descuento ya no está disponible •      Después de 15 alquileres, los miembros reciben un regalo: una camiseta La tabla de decisión que describe las funcionalidades implementadas es la siguiente: Condiciones                   R1   R2    R3   R4   R5   R6   R7    R8 Ser miembro              T    T     T    T    F    F    F     F Fecha límite incumplida             T    F     T    F    T    F    F     T 15.º alquiler            F    F     T    T    F    F    T     T Acciones Descuento del 20%                   X          X Camiseta de regalo                      X     X                    X Con base SOLO en la descripción de funcionalidades del sistema de gestión de relaciones con los clientes, ¿cuál de las reglas anteriores describe una situación imposible?",
          "options": [
            "R4",
            "R2",
            "R6",
            "R8"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. En R8 el cliente no es miembro y además incumplió la fecha límite, pero la regla le entrega la camiseta de regalo, y solo los miembros pueden recibirla tras quince alquileres: situación imposible. R2, R4 y R6 describen combinaciones coherentes: el descuento exige ser miembro y no incumplir la fecha, y la camiseta llega con el decimoquinto alquiler.",
          "source": "ExamUnit #16",
          "lang": "es",
          "note": "Alineada con la pregunta oficial A-022.",
          "image": "assets/fig-a-22.png"
        },
        {
          "id": "EX-017",
          "topic": "FL-4.2.4",
          "level": "K3",
          "chapterRef": 4,
          "type": "single",
          "question": "Prueba un sistema cuyo ciclo de vida está modelado por el diagrama de transición de estados que se muestra a continuación. El sistema comienza en el estado INIT y termina su operación en el estado OFF. ¿Cuál es el número MÍNIMO de casos de prueba para lograr cobertura de transiciones válidas?",
          "options": [
            "4",
            "2",
            "7",
            "3"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Se necesitan al menos tres casos porque las transiciones de prueba y de error no pueden ocurrir en el mismo caso, ni tampoco ambas transiciones de finalización: por ejemplo test-done, run-error-done y run-pause-resume-pause-done. Dos casos no cubrirían todas las transiciones válidas y cuatro o siete exceden el mínimo.",
          "source": "ExamUnit #17",
          "lang": "es",
          "note": "Alineada con la pregunta oficial A-023.",
          "image": "assets/fig-a-23.png"
        },
        {
          "id": "EX-018",
          "topic": "FL-4.3.1",
          "level": "K2",
          "chapterRef": 4,
          "type": "single",
          "question": "Su suite de pruebas alcanzó el 100% de cobertura de sentencias. ¿Cuál es la consecuencia de este hecho?",
          "options": [
            "Cada instrucción en el código que contiene un defecto ha sido ejecutada al menos una vez",
            "Cualquier suite de pruebas que contenga más casos de prueba que su suite de pruebas también alcanzará el 100% de cobertura de sentencias",
            "Cada camino en el código ha sido ejecutado al menos una vez",
            "Cada combinación de valores de entrada ha sido probada al menos una vez"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Con cobertura de sentencias del 100% toda instrucción, incluidas las que contienen defectos, se ejecutó y evaluó al menos una vez. B es falsa porque la cobertura depende de lo que se prueba y no del número de casos; C es falsa porque con bucles existen infinitos caminos posibles; D también, pues las pruebas exhaustivas son imposibles.",
          "source": "ExamUnit #18",
          "lang": "es",
          "note": "Alineada con la pregunta oficial A-024."
        },
        {
          "id": "EX-020",
          "topic": "FL-4.4.2",
          "level": "K2",
          "chapterRef": 4,
          "type": "single",
          "question": "Proyecto con entrega tardía, pruebas tarde, conocimiento del dominio y buenas habilidades analíticas, requisitos incompletos y una dirección que pide resultados. ¿Qué técnica es MÁS apropiada en este contexto?",
          "options": [
            "Listas de comprobación",
            "Predicción de errores",
            "Pruebas exploratorias",
            "Pruebas de rama"
          ],
          "answer": [
            2
          ],
          "explanation": "Las pruebas exploratorias encajan con poca documentación, tiempo limitado y conocimiento del dominio.",
          "source": "ExamUnit #20",
          "lang": "es"
        },
        {
          "id": "EX-021",
          "topic": "FL-4.5.3",
          "level": "K3",
          "chapterRef": 4,
          "type": "single",
          "question": "Considere la siguiente historia de usuario: Como Editor quiero revisar el contenido antes de que se publique para poder asegurar que la gramática sea correcta, y sus criterios de aceptación: • El usuario puede iniciar sesión en el sistema de gestión de contenido con el rol \"Editor\". • El editor puede ver las páginas de contenido existentes. • El editor puede editar el contenido de la página. • El editor puede agregar comentarios de marcado. • El editor puede guardar cambios. • El editor puede reasignar al rol \"propietario del contenido\" para realizar actualizaciones. ¿Cuál de las siguientes es el MEJOR ejemplo de una prueba ATDD para esta historia de usuario?",
          "options": [
            "Probar si el editor puede guardar el documento después de editar el contenido de la página.",
            "Probar si el propietario del contenido puede iniciar sesión y realizar actualizaciones al contenido.",
            "Probar si el editor puede programar el contenido editado para su publicación.",
            "Probar si el editor puede reasignar a otro editor para realizar actualizaciones."
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Esta prueba deriva directamente de dos criterios de aceptación de la historia: editar el contenido de la página y guardar los cambios. B prueba actividades del propietario del contenido, que no están en los criterios; C añade programar la publicación, funcionalidad no cubierta; D plantea reasignar a otro editor, cuando el criterio es reasignar al propietario del contenido.",
          "source": "ExamUnit #21",
          "lang": "es"
        },
        {
          "id": "EX-022",
          "topic": "FL-5.1.2",
          "level": "K1",
          "chapterRef": 5,
          "type": "single",
          "question": "¿Cómo agregan valor los probadores a la planificación de iteraciones y liberaciones?",
          "options": [
            "Los probadores determinan la prioridad de las historias de usuario a desarrollar",
            "Los probadores se enfocan solo en los aspectos funcionales del sistema a probar",
            "Los probadores participan en la identificación detallada de riesgos y la evaluación de riesgos de las historias de usuario",
            "Los probadores garantizan la liberación de software de alta calidad mediante el diseño temprano de pruebas durante la planificación de la liberación"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Los probadores aportan valor a la planificación de iteraciones y liberaciones participando en la identificación detallada de riesgos y en la evaluación de riesgos de las historias de usuario. A es falsa porque las prioridades las definen el negocio con el equipo; B porque los probadores cubren aspectos funcionales y no funcionales; D porque el diseño temprano de pruebas no forma parte de la planificación de la liberación.",
          "source": "ExamUnit #22",
          "lang": "es",
          "note": "Alineada con la pregunta oficial A-030."
        },
        {
          "id": "EX-023",
          "topic": "FL-5.1.3",
          "level": "K2",
          "chapterRef": 5,
          "type": "multi",
          "question": "¿Cuáles DOS de las siguientes opciones son los criterios de salida para probar un sistema?",
          "options": [
            "Preparación del entorno de pruebas",
            "La capacidad del probador de iniciar sesión en el objeto de prueba",
            "Se alcanza la densidad de defectos estimada",
            "Los requisitos se traducen al formato dado/cuando/entonces",
            "Las pruebas de regresión están automatizadas"
          ],
          "answer": [
            2,
            4
          ],
          "explanation": "Correctas: C y E. Alcanzar la densidad de defectos estimada es una medida de diligencia y la automatización de las pruebas de regresión es un criterio de completitud: ambos son criterios de salida. A y B son criterios de disponibilidad de recursos, propios de los criterios de entrada, y D describe requisitos comprobables, también de entrada.",
          "source": "ExamUnit #23",
          "lang": "es",
          "note": "Alineada con la pregunta oficial A-031."
        },
        {
          "id": "EX-024",
          "topic": "FL-5.1.4",
          "level": "K3",
          "chapterRef": 5,
          "type": "single",
          "question": "Optimista 2, probable 11, pesimista 14. ¿Estimación final?",
          "options": [
            "9",
            "14",
            "11",
            "10"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. La estimación de tres puntos usa (optimista + 4 × probable + pesimista) / 6: (2 + 4×11 + 14) / 6 = 60 / 6 = 10 días. Los otros valores salen de promediar mal o de tomar solo uno de los tres datos.",
          "source": "ExamUnit #24",
          "lang": "es"
        },
        {
          "id": "EX-025",
          "topic": "FL-5.5.1",
          "level": "K3",
          "chapterRef": 5,
          "type": "single",
          "question": "Recibió el siguiente informe de defectos de los desarrolladores indicando que la anomalía descrita en este informe de pruebas no es reproducible. La aplicación se cuelga 2022-May-03 – John Doe – Rechazado La aplicación se cuelga después de ingresar “Test input: $ä” en el campo Name en la pantalla de creación de nuevo usuario. Intenté cerrar sesión, iniciar sesión con la cuenta test_admin01, mismo problema. Intenté con otras cuentas de administrador de pruebas, mismo problema. No se recibió mensaje de error; el log (ver adjunto) contiene una notificación de error fatal. Según el caso de prueba TC-1305, la aplicación debería aceptar la entrada proporcionada y crear el usuario. Por favor corregir con alta prioridad, esta funcionalidad está relacionada con REQ-0012, que es un requisito de negocio crítico nuevo. ¿Qué información crítica FALTA en este informe de pruebas que habría sido útil para los desarrolladores?",
          "options": [
            "Resultado esperado y resultado real",
            "Referencias y estado del defecto",
            "Entorno de prueba y elemento de prueba",
            "Prioridad y severidad"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. Falta indicar el entorno de prueba y el elemento de prueba afectado, con su versión, datos que los desarrolladores necesitan para reproducir la anomalía. El resultado esperado y el real sí aparecen, igual que referencias y estado, rechazado con caso de prueba y requisito, y la prioridad y severidad se deducen del texto.",
          "source": "ExamUnit #25",
          "lang": "es",
          "note": "Alineada con la pregunta oficial A-038."
        },
        {
          "id": "EX-026",
          "topic": "FL-1.4.3",
          "level": "K2",
          "chapterRef": 1,
          "type": "single",
          "question": "El testware mostrado es una carta de prueba (Test Charter #04.018, sesión 1h, explorar página de registro...). ¿Qué actividad produce ese testware?",
          "options": [
            "Planificación de pruebas",
            "Monitoreo y control",
            "Análisis de pruebas",
            "Diseño de pruebas"
          ],
          "answer": [
            3
          ],
          "explanation": "El test charter se produce en el diseño de pruebas (respuesta oficial A4).",
          "source": "ExamUnit #26",
          "lang": "es",
          "note": "Incluye una carta de prueba (Test Charter) en la captura original."
        },
        {
          "id": "EX-027",
          "topic": "FL-1.4.4",
          "level": "K2",
          "chapterRef": 1,
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones es un ejemplo CORRECTO del valor de la trazabilidad?",
          "options": [
            "La trazabilidad entre los riesgos mitigados y los casos de prueba que pasaron proporciona un medio para determinar el nivel de riesgo residual",
            "La trazabilidad entre los requisitos del usuario y los resultados de las pruebas proporciona un medio para medir el progreso del proyecto frente a los objetivos del negocio",
            "La trazabilidad entre los probadores y los casos de prueba que fallaron proporciona un medio para determinar el nivel de habilidad de los probadores",
            "La trazabilidad entre los riesgos identificados y las condiciones de prueba escritas proporciona un medio para determinar qué riesgos vale la pena probar"
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. La trazabilidad entre requisitos de usuario y resultados de prueba muestra qué requisitos ya se probaron y permite medir el avance del proyecto frente a los objetivos del negocio. Relacionar solo riesgos mitigados con casos aprobados no permite calcular el riesgo residual, que exige vincular todos los riesgos con los resultados; asociar probadores con casos fallidos no mide habilidad, y decidir qué riesgos merecen prueba pertenece a la gestión de riesgos.",
          "source": "ExamUnit #27",
          "lang": "es",
          "note": "Alineada con la pregunta oficial B-006."
        },
        {
          "id": "EX-028",
          "topic": "FL-1.5.3",
          "level": "K2",
          "chapterRef": 1,
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones sobre la independencia de las pruebas es CORRECTA?",
          "options": [
            "Los probadores independientes encontrarán defectos debido a su perspectiva técnica diferente a la de los desarrolladores, pero su independencia puede llevar a una relación adversarial con los desarrolladores",
            "La familiaridad de los desarrolladores con su propio código significa que solo encuentran unos pocos defectos en él, sin embargo, su formación compartida en software con los probadores significa que estos defectos también serían encontrados por los probadores",
            "Las pruebas independientes requieren probadores que estén fuera del equipo del desarrollador e idealmente de fuera de la organización, sin embargo, a estos probadores les resulta difícil entender el dominio de la aplicación",
            "Los probadores de fuera del equipo del desarrollador son más independientes que los probadores de dentro del equipo, pero es más probable que se culpe a los probadores de dentro del equipo por los retrasos en la liberación del producto"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. Los probadores independientes, por su formación y perspectiva distintas, detectan fallas y defectos que los desarrolladores pasan por alto, aunque el aislamiento puede generar problemas de comunicación y una relación adversarial. B supone que la familiaridad impide hallar defectos, C exige independencia organizacional inexistente y D invierte quién suele ser culpado por los retrasos.",
          "source": "ExamUnit #28",
          "lang": "es",
          "note": "Alineada con la pregunta oficial C-008."
        },
        {
          "id": "EX-029",
          "topic": "FL-2.1.4",
          "level": "K2",
          "chapterRef": 2,
          "type": "single",
          "question": "¿Cuáles de las siguientes son ventajas de DevOps? i. Entrega más rápida y menor time-to-market. ii. Aumenta la necesidad de pruebas manuales repetitivas. iii. Disponibilidad constante de software ejecutable. iv. Reducción de pruebas de regresión asociadas a refactorización. v. El marco de automatización es económico porque todo está automatizado.",
          "options": [
            "i, ii, iv",
            "iii, v",
            "i, iii",
            "ii, iv, v"
          ],
          "answer": [
            2
          ],
          "explanation": "Correcta: C. DevOps acelera la entrega y el time-to-market y mantiene siempre disponible software ejecutable. Aumentar las pruebas manuales repetitivas, reducir las pruebas de regresión o suponer que todo está automatizado no son ventajas: son ideas falsas o riesgos.",
          "source": "ExamUnit #29",
          "lang": "es"
        },
        {
          "id": "EX-030",
          "topic": "FL-2.2.2",
          "level": "K2",
          "chapterRef": 2,
          "type": "single",
          "question": "Requisito: \"El pedido debe procesarse en menos de 10 segundos en el 95% de los casos\". Se miden tiempos de respuesta. ¿Qué tipo de prueba se está realizando?",
          "options": [
            "Funcional, porque cubre un requisito del usuario.",
            "No funcional, porque mide rendimiento.",
            "Funcional, porque interactúa con la interfaz.",
            "Estructural, porque se necesita la estructura interna."
          ],
          "answer": [
            1
          ],
          "explanation": "Correcta: B. El requisito mide tiempos de respuesta, así que es una prueba no funcional de rendimiento. Que sea un requisito del usuario o que interactúe con la interfaz no la vuelve funcional, y no se necesita la estructura interna del código.",
          "source": "ExamUnit #30",
          "lang": "es"
        },
        {
          "id": "EX-031",
          "topic": "FL-2.3.1",
          "level": "K2",
          "chapterRef": 2,
          "type": "single",
          "question": "La estrategia sugiere probar la migración de datos cuando un sistema se va a retirar. ¿En qué tipo de prueba se realiza?",
          "options": [
            "Mantenimiento",
            "Regresión",
            "Componente",
            "Integración"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. La prueba de mantenimiento cubre los cambios en un sistema en producción y también su migración o retiro. La de regresión comprueba que nada se rompió, y las de componente e integración son niveles, no el tipo de cambio que motiva la prueba.",
          "source": "ExamUnit #31",
          "lang": "es"
        },
        {
          "id": "EX-032",
          "topic": "FL-1.4.1",
          "level": "K2",
          "chapterRef": 1,
          "type": "single",
          "question": "¿Cuáles de los siguientes elementos pueden ser una base de prueba? i. Requisitos de negocio. ii. Cronograma. iii. Presupuesto de pruebas. iv. Código ejecutable de terceros. v. Historias de usuario y criterios de aceptación.",
          "options": [
            "i, iv y v",
            "i, ii y iii",
            "ii, iii y iv",
            "i, ii, iv y v"
          ],
          "answer": [
            0
          ],
          "explanation": "Correcta: A. La base de prueba incluye los requisitos de negocio, el código (también el de terceros, para pruebas de componentes) y las historias de usuario con sus criterios de aceptación. El cronograma y el presupuesto son restricciones del proyecto, no base de prueba.",
          "source": "ExamUnit #32",
          "lang": "es",
          "note": "Opciones reescritas para que la respuesta correcta sea i, iv y v."
        },
        {
          "id": "EX-033",
          "topic": "FL-3.1.3",
          "level": "K2",
          "chapterRef": 3,
          "type": "single",
          "question": "¿Cuáles de los siguientes elementos corresponden a pruebas estáticas y cuáles a pruebas dinámicas? i. Comportamientos externos anormales. ii. Discrepancias con el estándar de codificación. iii. Fallos por defectos al ejecutar. iv. Detectar defectos lo antes posible. v. Cobertura faltante en requisitos críticos de seguridad.",
          "options": [
            "i, iv, v estáticas; ii, iii dinámicas.",
            "i, iii, iv estáticas; ii, v dinámicas.",
            "ii, iii estáticas; i, iv, v dinámicas.",
            "ii, iv, v estáticas; i, iii dinámicas."
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Las revisiones de documentos y código detectan discrepancias con el estándar de codificación, encuentran defectos antes de ejecutar y señalan cobertura faltante en requisitos críticos. Los comportamientos externos anómalos y las fallas al ejecutar solo se observan con pruebas dinámicas.",
          "source": "ExamUnit #33",
          "lang": "es"
        },
        {
          "id": "EX-034",
          "topic": "FL-3.2.2",
          "level": "K2",
          "chapterRef": 3,
          "type": "single",
          "question": "Revisiones formales: ¿Cuál es VERDADERA?",
          "options": [
            "Algunas revisiones no requieren más de un rol.",
            "El proceso de revisión tiene varias actividades.",
            "La documentación no se distribuye antes de la reunión, salvo el producto para tipos específicos.",
            "Los defectos encontrados no se informan porque no se hallan con pruebas dinámicas."
          ],
          "answer": [
            1
          ],
          "explanation": "El proceso formal tiene planificación, inicio, revisión individual, comunicación, corrección e informe.",
          "source": "ExamUnit #34",
          "lang": "es"
        },
        {
          "id": "EX-035",
          "topic": "FL-4.2.2",
          "level": "K3",
          "chapterRef": 4,
          "type": "single",
          "question": "T=12 óptima; T<12 baja; T>12 alta. ¿Conjunto mínimo para 100% de cobertura BVA de 3 valores?",
          "options": [
            "11, 12, 13",
            "10, 12, 14",
            "10, 11, 12, 13, 14",
            "10, 11, 13, 14"
          ],
          "answer": [
            2
          ],
          "explanation": "Con redondeo al grado, los límites efectivos caen en 11,5 y 12,5; el conjunto completo es 10, 11, 12, 13, 14.",
          "source": "ExamUnit #35",
          "lang": "es"
        },
        {
          "id": "EX-036",
          "topic": "FL-2.2.3",
          "level": "K2",
          "chapterRef": 2,
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones es CORRECTA?",
          "options": [
            "Las pruebas de regresión aumentan en número a medida que avanza el proyecto, mientras que el número de pruebas de confirmación disminuye a medida que avanza el proyecto",
            "Las pruebas de regresión se crean y ejecutan cuando el objeto de prueba se corrige, mientras que las pruebas de confirmación se ejecutan cada vez que el objeto de prueba se mejora",
            "Las pruebas de regresión se ocupan de verificar que el entorno operativo permanezca sin cambios, mientras que las pruebas de confirmación se ocupan de probar los cambios en el objeto de prueba",
            "Las pruebas de regresión se ocupan de los efectos adversos en el código no modificado, mientras que las pruebas de confirmación se ocupan de probar el código modificado"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. Las pruebas de regresión vigilan los efectos adversos sobre el código que no se modificó, mientras que las de confirmación verifican que el defecto corregido quedó realmente resuelto, es decir, prueban el código cambiado. Ambas suelen crecer con el proyecto; otra opción invierte ese orden, y las de regresión no comprueban que el entorno operativo permanezca sin cambios.",
          "source": "ExamUnit #36",
          "lang": "es",
          "note": "Alineada con la pregunta oficial B-014."
        },
        {
          "id": "EX-037",
          "topic": "FL-4.4.3",
          "level": "K2",
          "chapterRef": 4,
          "type": "single",
          "question": "App bancaria con lista de buenas prácticas de UI: ¿Qué técnica se usa?",
          "options": [
            "Caja negra",
            "Exploratoria",
            "Basada en lista de comprobación",
            "Predicción de errores"
          ],
          "answer": [
            2
          ],
          "explanation": "Se evalúa contra una lista de comprobación de mejores prácticas.",
          "source": "ExamUnit #37",
          "lang": "es"
        },
        {
          "id": "EX-038",
          "topic": "FL-5.1.1",
          "level": "K2",
          "chapterRef": 5,
          "type": "single",
          "question": "\"Se usarán pruebas de componentes e integración; las regulaciones exigen 100% de cobertura de ramas en componentes críticos.\" ¿A qué parte del plan pertenece?",
          "options": [
            "Comunicación",
            "Registro de riesgos",
            "Contexto de las pruebas",
            "Enfoque de pruebas"
          ],
          "answer": [
            3
          ],
          "explanation": "Correcta: D. El texto define qué niveles y técnicas se usarán y qué cobertura se exige en los componentes críticos: eso es el enfoque de pruebas del plan. No describe la comunicación, el registro de riesgos ni el contexto de las pruebas.",
          "source": "ExamUnit #38",
          "lang": "es"
        },
        {
          "id": "EX-039",
          "topic": "FL-5.1.6",
          "level": "K1",
          "chapterRef": 5,
          "type": "single",
          "question": "¿Cuál de las siguientes afirmaciones NO es cierta sobre la pirámide de pruebas?",
          "options": [
            "Enfatiza más pruebas en los niveles inferiores.",
            "Cuanto más cerca de la cima, más formal debería ser la automatización.",
            "Componentes e integración se automatizan con herramientas basadas en API.",
            "Sistema y aceptación se automatizan con herramientas GUI."
          ],
          "answer": [
            1
          ],
          "explanation": "La cima tiene menos pruebas, normalmente más frágiles y a menudo manuales; no es \"más formal\".",
          "source": "ExamUnit #39",
          "lang": "es"
        },
        {
          "id": "EX-040",
          "topic": "FL-5.2.1",
          "level": "K1",
          "chapterRef": 5,
          "type": "single",
          "question": "\"El sistema permite un descuento demasiado alto\". Impacto muy alto. ¿Qué se puede decir de la probabilidad?",
          "options": [
            "También es muy alta; alto impacto implica alta probabilidad.",
            "Es muy baja; alto impacto implica baja probabilidad.",
            "No se puede decir nada; impacto y probabilidad son independientes.",
            "No importa con un impacto tan alto."
          ],
          "answer": [
            2
          ],
          "explanation": "Impacto y probabilidad son dimensiones independientes del riesgo.",
          "source": "ExamUnit #40",
          "lang": "es",
          "note": "Opción D limpiada: se eliminó texto de instrucciones que se había filtrado."
        }
      ]
    }
  ]
};
