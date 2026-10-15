/* =========================================================
   content/site.js · Textos generales del sitio (ES / EN)
   - Cada texto es { es: "...", en: "..." } o un texto único.
   - Se puede usar HTML simple (<b>, <i>, <a>) dentro de los textos.
   - Las cifras de los casos están en content/projects/*.js.
   ========================================================= */
window.PF = window.PF || {};
window.PF.projects = window.PF.projects || [];

window.PF.site = {

  role: { es: "Project Manager | especialista en datos", en: "Project Manager | data specialist" },

  contact: {
    email: "carmelaroman94@gmail.com",
    linkedin: "https://www.linkedin.com/in/carmelaroman/"
  },

  /* ---------- Textos de la interfaz ---------- */
  ui: {
    home_title: { es: "Inicio", en: "Home" },
    skip: { es: "Saltar al contenido", en: "Skip to content" },
    nav_label: { es: "Navegación principal", en: "Main navigation" },
    nav_about: { es: "Acerca de mí", en: "About me" },
    nav_projects: { es: "Proyectos", en: "Projects" },
    dash_lang_note: { es: "Los dashboards se muestran en su idioma original.", en: "Dashboards are shown in their original language." },
    see_data: { es: "Ver los datos en tabla", en: "View the data as a table" },
    of_previous: { es: "de la etapa anterior", en: "of the previous stage" },
    output: { es: "Resultado", en: "Output" },
    activity: { es: "Actividad", en: "Activity" },
    raci_hint: { es: "Selecciona una persona o área en la cabecera para resaltar su columna.", en: "Select a person or area in the header to highlight their column." },
    influence: { es: "Influencia", en: "Influence" },
    interest: { es: "Interés", en: "Interest" },
    low: { es: "Bajo", en: "Low" },
    high: { es: "Alto", en: "High" },
    matrix_label: { es: "Matriz de interés e influencia de los actores", en: "Stakeholder interest and influence matrix" },
    matrix_hint: { es: "Selecciona un actor para ver la estrategia que se usó con él.", en: "Select a stakeholder to see the strategy used with them." },
    load_here: { es: "Cargar aquí", en: "Load here" },
    open_new: { es: "Abrir en una pestaña nueva", en: "Open in a new tab" },
    open_full: { es: "Abrir a pantalla completa", en: "Open full screen" },
    hide: { es: "Ocultar", en: "Hide" },
    ctx_work: { es: "Contexto laboral", en: "Work context" },
    ctx_academic: { es: "Contexto académico", en: "Academic context" },
    read_case: { es: "Leer el caso", en: "Read the case" },
    see_case: { es: "Ver el caso", en: "See the case" },
    open_dashboard: { es: "Abrir el dashboard", en: "Open the dashboard" },
    close: { es: "Cerrar", en: "Close" },
    not_found: { es: "No encontramos ese proyecto", en: "We couldn't find that project" },
    back_projects: { es: "Volver a Proyectos", en: "Back to Projects" },
    problem: { es: "Problema", en: "Problem" },
    role: { es: "Mi rol", en: "My role" },
    period: { es: "Período", en: "Period" },
    method: { es: "Metodología", en: "Methodology" },
    tools: { es: "Herramientas", en: "Tools" },
    deliverables: { es: "Entregables", en: "Deliverables" },
    dashboards: { es: "Dashboards", en: "Dashboards" },
    more_cases: { es: "Más casos", en: "More cases" },
    prev: { es: "Anterior", en: "Previous" },
    next: { es: "Siguiente", en: "Next" },
    case_detail: { es: "El caso en detalle", en: "The case in detail" },
    open_all: { es: "Abrir todas las secciones", en: "Expand all sections" },
    close_all: { es: "Cerrar todas las secciones", en: "Collapse all sections" }
  },

  raci: {
    R: { es: "Responsable (lo ejecuta)", en: "Responsible (does the work)" },
    A: { es: "Aprueba", en: "Accountable (approves)" },
    C: { es: "Consultado", en: "Consulted" },
    I: { es: "Informado", en: "Informed" }
  },

  /* ---------- Nombres de las secciones de cada caso ---------- */
  sections: {
    context: { es: "Contexto", en: "Context" },
    challenge: { es: "Desafío", en: "Challenge" },
    objectives: { es: "Objetivos", en: "Objectives" },
    role: { es: "Mi rol", en: "My role" },
    approach: { es: "Enfoque y metodología", en: "Approach and methodology" },
    stakeholders: { es: "Stakeholders y equipo", en: "Stakeholders and team" },
    planning: { es: "Planificación y ejecución", en: "Planning and execution" },
    data: { es: "Datos y decisiones", en: "Data and decisions" },
    results: { es: "Resultados", en: "Results" },
    risks: { es: "Riesgos y dificultades", en: "Risks and challenges" },
    learnings: { es: "Aprendizajes", en: "Learnings" },
    today: { es: "Cómo lo gestionaría hoy", en: "How I would manage it today" },
    takeaways: { es: "Lo que demuestra como Project Manager", en: "What it shows about me as a Project Manager" },
    question: { es: "Pregunta y objetivos", en: "Question and objectives" },
    dataset: { es: "Datos", en: "Data" },
    method: { es: "Método", en: "Method" },
    findings: { es: "Hallazgos", en: "Findings" },
    limits: { es: "Límites y reflexión", en: "Limitations and reflection" }
  },

  /* ---------- Inicio ---------- */
  home: {
    title: { es: "¡Bienvenidas y bienvenidos! Soy Carmela.", en: "Welcome! I'm Carmela." },
    lead: { es: "Te invito a explorar mi perfil y algunos de mis proyectos más relevantes.", en: "I invite you to explore my profile and some of my most relevant projects." },
    about_text: { es: "Mi recorrido, de la gestión de proyectos sociales a la gestión con datos.", en: "My path, from managing social projects to managing with data." },
    projects_text: { es: "Casos laborales y académicos", en: "Work and academic case studies" }
  },

  /* ---------- Acerca de mí ---------- */
  about: {
    intro: [
      { es: "Mi trayectoria empieza en la gestión de proyectos sociales, trabajando cerca de las personas, los equipos y los desafíos que atraviesan las organizaciones.",
        en: "My career started in social project management, working close to people, teams and the challenges organisations face." },
      { es: "En ese camino los datos aparecieron casi de forma natural: primero como una necesidad para comprender mejor lo que estaba pasando y, poco a poco, como una herramienta para tomar decisiones y diseñar estrategias que generen impacto.",
        en: "Along the way, data appeared almost naturally: first as a need to better understand what was happening and, little by little, as a tool for making decisions and designing strategies that create impact." }
    ],
    timeline_title: { es: "Línea de tiempo", en: "Timeline" },
    timeline_intro: { es: "Los hechos que profesionalmente me trajeron hasta aquí. Abre cada año para ver el detalle.", en: "The professional milestones that brought me here. Open each year to see the details." },
    timeline: [
      {
        year: "2013",
        title: { es: "Aprender a resolver problemas", en: "Learning to solve problems" },
        paras: [
          { es: "Me involucro en el activismo social, en comedores comunitarios y espacios de alfabetización. Empiezo a coordinar y a proponer metodologías desde la intuición. Aprendo a gestionar equipos y a trabajar con actores diferentes.",
            en: "I get involved in social activism, community kitchens and literacy programmes. I start coordinating and proposing methods by intuition. I learn to manage teams and to work with different actors." },
          { es: "Desarrollo la que creo que es la más importante de mis habilidades: encontrar soluciones con los recursos disponibles, aunque sean escasos.",
            en: "I develop what I believe is my most important skill: finding solutions with the resources at hand, however scarce." }
        ]
      },
      {
        year: "2018",
        title: { es: "Aprender a gestionar", en: "Learning to manage" },
        paras: [
          { es: "Preocupada por los modelos de gestión pública y privada, hago el Diploma de Posgrado en Gobernabilidad, Gerencia Política y Gestión Pública (UCC, BID y PNUD). Conozco el marco de gestión de proyectos para resultados del Banco Interamericano de Desarrollo (PM4R).",
            en: "Concerned about public and private management models, I complete a Postgraduate Diploma in Governance, Political Management and Public Administration (UCC, IDB and UNDP). I learn the Inter-American Development Bank's Project Management for Results framework (PM4R)." },
          { es: "Ese mismo año empiezo en el Ministerio de Justicia y Derechos Humanos de Córdoba, donde gestiono un proyecto de inclusión laboral de personas trans.",
            en: "That same year I join the Ministry of Justice and Human Rights of Córdoba, where I manage an employment inclusion project for trans people." },
          { es: "Gestionar no es solo hacer: es generar resultados.", en: "Managing is not just doing: it is delivering results." }
        ],
        links: [{ id: "inclusion-laboral-cordoba", label: { es: "Ver el caso del Ministerio", en: "See the Ministry case" } }]
      },
      {
        year: "2020",
        title: { es: "Aprender a liderar", en: "Learning to lead" },
        paras: [
          { es: "En el Centro de Iniciativa Urbana (2020–2022) lidero de principio a fin proyectos para un municipio, orientados a mejorar procesos internos, descentralizar la gestión social y sanitaria y fortalecer las capacidades de los funcionarios, con el marco PM4R.",
            en: "At the Centro de Iniciativa Urbana (2020–2022) I lead projects for a municipality from start to finish, aimed at improving internal processes, decentralising social and health management and building staff capacity, using the PM4R framework." },
          { es: "Aquí entiendo qué tipo de profesional quiero ser.", en: "This is where I understand what kind of professional I want to be." }
        ],
        list: [
          { es: "Entregables: organigrama, roles y funciones, procesos mapeados y un tablero de control del proyecto.", en: "Deliverables: organisation chart, roles and responsibilities, mapped processes and a project control dashboard." },
          { es: "7 funcionarios capacitados en gestión de políticas públicas.", en: "7 civil servants trained in public policy management." },
          { es: "Gestión de stakeholders y coordinación de equipos interdisciplinarios.", en: "Stakeholder management and coordination of interdisciplinary teams." }
        ]
      },
      {
        year: "2021",
        title: { es: "Aprender a analizar", en: "Learning to analyse" },
        paras: [
          { es: "Me recibo de licenciada en Ciencia Política (Universidad Católica de Córdoba). Incorporo herramientas de análisis social, político y económico, técnicas estadísticas cuantitativas y análisis cualitativos como los grupos focales.",
            en: "I graduate in Political Science (Universidad Católica de Córdoba). I gain tools for social, political and economic analysis, quantitative statistical techniques and qualitative methods such as focus groups." }
        ],
        list: [
          { es: "Aprendo a diseñar y hacer seguimiento de proyectos con Marco Lógico, orientado a la cooperación internacional, y la importancia de la negociación, la caracterización de stakeholders y el análisis de factibilidad.",
            en: "I learn to design and monitor projects with the Logical Framework approach used in international cooperation, and the importance of negotiation, stakeholder analysis and feasibility analysis." },
          { es: "Tengo mi primer acercamiento a las metodologías ágiles.", en: "I have my first contact with agile methodologies." }
        ],
        after: [
          { es: "Hago mi primera formación en Big Data: Diploma de Posgrado en Técnicas Estadísticas y Big Data aplicadas al estudio de la Opinión Pública y el Comportamiento Electoral (FLACSO).",
            en: "I take my first Big Data training: Postgraduate Diploma in Statistical Techniques and Big Data applied to Public Opinion and Electoral Behaviour (FLACSO)." }
        ]
      },
      {
        year: "2022",
        title: { es: "Aprender a adaptarme", en: "Learning to adapt" },
        paras: [
          { es: "Decido profundizar en las metodologías ágiles de gestión de proyectos (Universidad Tecnológica Nacional). Entiendo el peligro del perfeccionismo y la importancia del trabajo colaborativo; son prácticas que me sirven tanto en lo profesional como en lo personal.",
            en: "I decide to go deeper into agile project management (Universidad Tecnológica Nacional). I understand the danger of perfectionism and the importance of collaborative work; these practices help me both professionally and personally." },
          { es: "Llega la migración. Viví en seis países e hice documentos y más documentos, incluso en lenguas que no conocía. Además de mi español nativo, hablo italiano e inglés, un poco de alemán, y aprendí a contar en urdu. Conocí más de 30 países y conviví con personas de todos los continentes.",
            en: "Then came migration. I lived in six countries and filled in documents upon documents, sometimes in languages I didn't know. Besides my native Spanish, I speak Italian and English, some German, and I learned to count in Urdu. I visited more than 30 countries and lived with people from every continent." },
          { es: "Soy más empática. Creo que la inteligencia emocional es, probablemente, una de las habilidades que más desarrollé en esos años.",
            en: "I became more empathetic. Emotional intelligence is probably one of the skills I developed the most during those years." }
        ],
        callout: {
          heading: { es: "¿Qué tiene que ver con mi profesión?", en: "What does this have to do with my profession?" },
          text: { es: "La escucha activa, el trabajo en ambientes interculturales, el respeto a la diversidad y, sobre todo, la tolerancia a la frustración forman parte de mi vida profesional.",
                  en: "Active listening, working in intercultural environments, respect for diversity and, above all, tolerance for frustration are part of my professional life." }
        }
      },
      {
        year: "2023",
        title: { es: "Aprender resiliencia", en: "Learning resilience" },
        paras: [
          { es: "Empiezo a buscar estrategias para volver a mi profesión.", en: "I start looking for ways back into my profession." },
          { es: "El primer paso de vuelta es un voluntariado en recolección de datos para la UN G20 Global Land Initiative (mayo–julio 2023). Inicio pequeñas formaciones y me enfoco activamente en prácticas de networking.",
            en: "The first step back is a data-collection volunteer role with the UN G20 Global Land Initiative (May–July 2023). I start taking short courses and actively focus on networking." }
        ]
      },
      {
        year: "2024",
        title: { es: "Aprender a integrar gestión y datos", en: "Learning to bring management and data together" },
        paras: [
          { es: "Trabajo por primera vez en otro idioma y en un proyecto internacional: en Development International (Alemania) gestiono de punta a punta un estudio sobre la huella de trabajo infantil en las importaciones de EE. UU.",
            en: "For the first time I work in another language and on an international project: at Development International (Germany) I manage, end to end, a study of the child labour footprint of US imports." },
          { es: "En paralelo, en la Consultora Comparactiva (enero–mayo 2024), analizo datos del mercado laboral del Censo 2022 de Argentina y elaboro un informe técnico.",
            en: "In parallel, at Consultora Comparactiva (January–May 2024), I analyse labour market data from Argentina's 2022 Census and write a technical report." },
          { es: "Pongo en práctica de forma más sólida todo lo que había aprendido de análisis de datos. La gestión de proyectos y los datos empiezan a encontrarse.",
            en: "I apply everything I had learned about data analysis more solidly. Project management and data start to meet." }
        ],
        links: [{ id: "development-international", label: { es: "Ver el caso de Development International", en: "See the Development International case" } }]
      },
      {
        year: "2025",
        title: { es: "Aprender ciencia de datos", en: "Learning data science" },
        paras: [
          { es: "Inicio mi máster en Ciencia de Datos. Aprendí:", en: "I start my Master's in Data Science. I learned:" }
        ],
        list: [
          { es: "Estadística avanzada", en: "Advanced statistics" },
          "SQL",
          { es: "Técnicas de almacenamiento y extracción de datos", en: "Data storage and extraction techniques" },
          "Web Scraping",
          { es: "Buenas prácticas de visualización y reporting", en: "Good practices in visualization and reporting" },
          { es: "Refuerzo Microsoft Power BI", en: "Strengthening Microsoft Power BI" },
          { es: "Herramientas de visualización más controladas, como Streamlit", en: "More controlled visualization tools, such as Streamlit" },
          { es: "Técnicas de Machine Learning", en: "Machine learning techniques" },
          { es: "Métricas de calidad", en: "Quality metrics" },
          { es: "Algoritmos de explicabilidad y transparencia", en: "Explainability and transparency algorithms" },
          { es: "Modelado basado en agentes", en: "Agent-based modelling" },
          { es: "Modelos de Lenguaje", en: "Language models" },
          { es: "Aplicación avanzada de Inteligencia Artificial", en: "Advanced applications of artificial intelligence" }
        ]
      },
      {
        year: "2026",
        title: { es: "Mi primer proyecto de datos en el sector tecnológico", en: "My first data project in the tech sector" },
        paras: [
          { es: "En una empresa de software española (Grupo tecnológico X, pseudónimo) gestiono un proyecto de calidad del dato comercial con Marketing, Comercial y Calidad, en cuatro sprints. Es mi primera vez trabajando en una empresa tecnológica.",
            en: "At a Spanish software company (Grupo tecnológico X, a pseudonym) I manage a commercial data quality project with Marketing, Sales and Quality, over four sprints. It is my first time working at a tech company." },
          { es: "Termino el Máster en Ciencia de Datos aplicada a las Ciencias Sociales (Universidad de Granada) con un Trabajo de Fin de Máster sobre la multicausalidad de la inflación.",
            en: "I complete the Master's in Data Science applied to the Social Sciences (Universidad de Granada) with a thesis on the multicausality of inflation." }
        ],
        callout: {
          heading: { es: "Hacia dónde voy", en: "Where I'm heading" },
          text: { es: "Hoy mi foco es conectar las necesidades del negocio con soluciones basadas en datos y tecnología, gestionando proyectos digitales y de datos en equipos multidisciplinares.",
                  en: "Today my focus is connecting business needs with data- and technology-based solutions, managing digital and data projects in multidisciplinary teams." }
        },
        links: [
          { id: "grupo-tecnologico-x", label: { es: "Ver el caso de Grupo tecnológico X", en: "See the Grupo tecnológico X case" } },
          { id: "tfm-inflacion", label: { es: "Ver el TFM", en: "See the thesis" } }
        ]
      }
    ],

    principles_title: { es: "Cómo trabajo", en: "How I work" },
    // icon: method, increments, target, listen, team (los dibujos están en assets/js/app.js)
    principles: [
      { icon: "method", title: { es: "Elijo la metodología según el problema", en: "I choose the methodology to fit the problem" } },
      { icon: "increments", title: { es: "Prefiero validar entregas incrementales", en: "I prefer to validate incremental deliveries" } },
      { icon: "target", title: { es: "Elijo objetivos SMART (específicos, medibles, alcanzables, relevantes, delimitados temporalmente)", en: "I choose SMART objectives (specific, measurable, achievable, relevant, time-bound)" } },
      { icon: "listen", title: { es: "Con escucha activa, implicando a los actores afectados", en: "With active listening, involving the affected stakeholders" } },
      { icon: "team", title: { es: "Con trabajo colaborativo", en: "With collaborative work" } }
    ],

    skills_title: { es: "Habilidades", en: "Skills" },
    skills: [
      { title: { es: "Gestión de proyectos", en: "Project management" },
        text: { es: "Planificación y seguimiento de entregables, priorización, gestión de stakeholders, gestión del riesgo, coordinación de equipos y seguimiento de KPIs. PMI, PM4R, Marco Lógico, CRISP-DM y metodologías ágiles (Scrum y Kanban).",
                en: "Deliverable planning and tracking, prioritisation, stakeholder management, risk management, team coordination and KPI tracking. PMI, PM4R, Logical Framework, CRISP-DM and agile methodologies (Scrum and Kanban)." } },
      { title: { es: "Analítica y datos", en: "Analytics and data" },
        text: { es: "Estadística, Excel avanzado, Power BI (DAX), Python, R, SQL, Machine Learning, redes neuronales, métricas de calidad y MongoDB.",
                en: "Statistics, advanced Excel, Power BI (DAX), Python, R, SQL, machine learning, neural networks, quality metrics and MongoDB." } },
      { title: { es: "Herramientas", en: "Tools" },
        text: { es: "Microsoft Office, CRM (Microsoft 365), Google Workspace, Trello e IA generativa y agéntica.",
                en: "Microsoft Office, CRM (Microsoft 365), Google Workspace, Trello and generative and agentic AI." } },
      { title: { es: "Habilidades transversales", en: "Soft skills" },
        text: { es: "Liderazgo, comunicación de resultados y storytelling, escucha activa y colaboración, investigación y pensamiento crítico, gestión del tiempo y trabajo colaborativo.",
                en: "Leadership, communicating results and storytelling, active listening and collaboration, research and critical thinking, time management and teamwork." } }
    ],

    languages_title: { es: "Idiomas", en: "Languages" },
    languages: [
      { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
      { name: { es: "Inglés", en: "English" }, level: "B2" },
      { name: { es: "Italiano", en: "Italian" }, level: "B2" },
      { name: { es: "Alemán", en: "German" }, level: "A2" }
    ],

    education_title: { es: "Formación", en: "Education" },
    education: [
      { es: "Máster en Ciencia de Datos aplicada a las Ciencias Sociales, Universidad de Granada (2026)", en: "Master's in Data Science applied to the Social Sciences, Universidad de Granada (2026)" },
      { es: "Metodologías Ágiles de Gestión de Proyectos, Universidad Tecnológica Nacional, 37 h (2022)", en: "Agile Project Management Methodologies, Universidad Tecnológica Nacional, 37 h (2022)" },
      { es: "Diploma de Posgrado en Técnicas Estadísticas y Big Data aplicadas al estudio de la Opinión Pública y el Comportamiento Electoral, FLACSO, 24 h (2021)", en: "Postgraduate Diploma in Statistical Techniques and Big Data applied to Public Opinion and Electoral Behaviour, FLACSO, 24 h (2021)" },
      { es: "Licenciatura en Ciencia Política, Universidad Católica de Córdoba (2021)", en: "Bachelor's degree in Political Science, Universidad Católica de Córdoba (2021)" },
      { es: "Diploma de Posgrado en Gobernabilidad, Gerencia Política y Gestión Pública, UCC, BID y PNUD, 144 h (2018)", en: "Postgraduate Diploma in Governance, Political Management and Public Administration, UCC, IDB and UNDP, 144 h (2018)" }
    ]
  },

  /* ---------- Proyectos ---------- */
  projectsPage: {
    intro: { es: "Primero los casos laborales, del más reciente al más antiguo; después, los proyectos académicos y un laboratorio de visualización.",
             en: "Work case studies first, most recent first; then academic projects and a visualization lab." },
    work_title: { es: "Proyectos laborales", en: "Work projects" },
    work_intro: { es: "Tres contextos distintos (empresa tecnológica, ONG internacional y sector público) y tres marcos de trabajo elegidos según el problema.",
                  en: "Three different contexts (a tech company, an international NGO and the public sector) and three frameworks, each chosen to fit the problem." },
    academic_title: { es: "Proyectos académicos", en: "Academic projects" }
  },

  /* ---------- Laboratorio de visualización (Power BI) ---------- */
  gallery: {
    title: { es: "Laboratorio de visualización", en: "Visualization lab" },
    intro: { es: "Ejercicios de reporting en Power BI realizados en contexto académico. Lo que muestran son los principios con los que diseño cualquier tablero.",
             en: "Power BI reporting exercises carried out in an academic context. What they show are the principles I use to design any dashboard." },
    principles: [
      { name: { es: "Visión general primero", en: "Overview first" }, text: { es: "Mostrar primero un resumen de los datos más importantes y después permitir profundizar.", en: "Show a summary of the most important data first, then allow going deeper." } },
      { name: { es: "Detalles bajo demanda", en: "Details on demand" }, text: { es: "Mostrar información adicional solo cuando el usuario la necesita, por ejemplo al pasar el cursor o hacer clic.", en: "Show additional information only when the user needs it, for example on hover or click." } },
      { name: { es: "Profundizar (drill-down)", en: "Drill-down" }, text: { es: "Pasar de una visión agregada a otra más detallada, manteniendo el contexto.", en: "Move from an aggregated view to a more detailed one while keeping the context." } },
      { name: { es: "Filtrar y seleccionar", en: "Filter and select" }, text: { es: "Permitir que el usuario elija qué datos quiere analizar.", en: "Let users choose which data they want to analyse." } },
      { name: { es: "Comparación", en: "Comparison" }, text: { es: "Facilitar la comparación entre categorías, períodos o grupos.", en: "Make it easy to compare categories, periods or groups." } },
      { name: { es: "Contexto", en: "Context" }, text: { es: "Dar referencias que permitan interpretar correctamente los números.", en: "Provide references that make the numbers interpretable." } },
      { name: { es: "Claridad y simplicidad", en: "Clarity and simplicity" }, text: { es: "Eliminar elementos decorativos que no aportan información y usar colores, etiquetas y escalas de forma coherente.", en: "Remove decorative elements that add no information and use colours, labels and scales consistently." } },
      { name: { es: "Vistas coordinadas", en: "Coordinated views" }, text: { es: "Hacer que los gráficos se relacionen entre sí para explorar los datos desde distintas perspectivas.", en: "Link charts to each other so the data can be explored from different angles." } }
    ],
    items: [
      { name: { es: "Ventas de videojuegos", en: "Video game sales" },
        text: { es: "Ejercicio 1 del curso de Power BI.", en: "Power BI course, exercise 1." },
        src: "https://app.powerbi.com/view?r=eyJrIjoiZmQ4M2IyMzUtNDUzMC00MDQ4LWI0OWYtOTM0Njc4YTdlZDA4IiwidCI6Ijg3YmNjZDBkLTdiMjUtNGUzZC04OWZiLWMyYWI5M2E2OGVjOCIsImMiOjh9" },
      { name: { es: "Países y población", en: "Countries and population" },
        text: { es: "Ejercicio 2 del curso de Power BI.", en: "Power BI course, exercise 2." },
        src: "https://app.powerbi.com/view?r=eyJrIjoiOWNlZDU5ZTAtY2Q4OC00YjA2LWFhMTQtOTVlNzA5NDRiNDRjIiwidCI6Ijg3YmNjZDBkLTdiMjUtNGUzZC04OWZiLWMyYWI5M2E2OGVjOCIsImMiOjh9" },
      { name: { es: "Datos de empleados", en: "Employee data" },
        text: { es: "Ejercicio 3 del curso de Power BI.", en: "Power BI course, exercise 3." },
        src: "https://app.powerbi.com/view?r=eyJrIjoiNDQ2NjVhYTktZTYwNy00NjU4LTllN2UtN2I5NWI4YWIyZjU0IiwidCI6Ijg3YmNjZDBkLTdiMjUtNGUzZC04OWZiLWMyYWI5M2E2OGVjOCIsImMiOjh9" },
      { name: { es: "Finanzas", en: "Finance" },
        text: { es: "Ejercicio 4 del curso de Power BI.", en: "Power BI course, exercise 4." },
        src: "https://app.powerbi.com/view?r=eyJrIjoiMzBmYzBhNzctNWVjYi00MzQwLThiMDItNjAxYWIzYWYyZmY4IiwidCI6Ijg3YmNjZDBkLTdiMjUtNGUzZC04OWZiLWMyYWI5M2E2OGVjOCIsImMiOjh9" },
      { name: { es: "Sentimiento político: elecciones de EE. UU. 2016", en: "Political sentiment: 2016 US election" },
        text: { es: "Comentarios de YouTube recogidos con la YouTube Data API, sentimiento clasificado con técnicas de NLP y visualizado en Power BI.", en: "YouTube comments collected with the YouTube Data API, sentiment classified with NLP techniques and visualised in Power BI." },
        src: "https://app.powerbi.com/view?r=eyJrIjoiMWMyZTlmNDItZjk0OS00NTAxLThiMmUtNjY4OTIxNzMxYjc3IiwidCI6Ijg3YmNjZDBkLTdiMjUtNGUzZC04OWZiLWMyYWI5M2E2OGVjOCIsImMiOjh9" }
    ],
    note: { es: "Cada tablero se carga en un visor solo cuando lo abres, para que la página siga siendo rápida. Se muestran en su idioma original.",
            en: "Each dashboard loads in a viewer only when you open it, so the page stays fast. They are shown in their original language." }
  }
};
