/* =========================================================
   Caso laboral · Ministerio de Justicia y DDHH de Córdoba
   Fuente: documento «Proyecto 1 · Inclusión laboral trans Córdoba · Caso PM4R».
   Confidencialidad: sin nombres, fotos ni empresas identificables.
   ========================================================= */
window.PF = window.PF || {};
(window.PF.projects = window.PF.projects || []).push({
  id: "inclusion-laboral-cordoba",
  type: "work",
  sort: 100,
  year: "2018–19",
  title: { es: "Inclusión laboral de personas trans en la ciudad de Córdoba", en: "Employment inclusion for trans people in the city of Córdoba" },
  shortTitle: { es: "Ministerio de Justicia y DDHH de Córdoba", en: "Córdoba Ministry of Justice and Human Rights" },
  org: { es: "Ministerio de Justicia y Derechos Humanos de la Provincia de Córdoba (Argentina) · Secretaría de Lucha contra la Discriminación", en: "Ministry of Justice and Human Rights of the Province of Córdoba (Argentina) · Anti-Discrimination Secretariat" },
  orgNote: { es: "Por respeto a las participantes, el caso no incluye nombres, fotos ni empresas identificables.", en: "Out of respect for the participants, the case includes no names, photos or identifiable companies." },
  problem: {
    es: "Escasa inserción y permanencia de personas trans en el empleo formal en la ciudad de Córdoba, sin presupuesto específico y con un cupo laboral estatal que no era una vía disponible a corto plazo.",
    en: "Low access to and retention in formal employment for trans people in the city of Córdoba, with no dedicated budget and a public-sector employment quota that was not an option in the short term."
  },
  role: { es: "Gestora del proyecto (Project Manager).", en: "Project manager." },
  period: { es: "Abril 2018 – noviembre 2019, presencial", en: "April 2018 – November 2019, on-site" },
  method: {
    name: { es: "PM4R + Marco Lógico", en: "PM4R + Logical Framework" },
    why: { es: "Proyecto de intervención con beneficiarias y una cadena de resultados: del árbol de problemas a componentes, indicadores y supuestos verificables.",
           en: "An intervention project with beneficiaries and a results chain: from the problem tree to components, indicators and verifiable assumptions." }
  },
  tools: { es: "Árboles de problemas y soluciones, mapa de stakeholders, análisis de factibilidad, matriz de Marco Lógico, matriz de riesgos y plan de comunicaciones.",
           en: "Problem and solution trees, stakeholder map, feasibility analysis, Logical Framework matrix, risk matrix and communication plan." },
  metrics: [
    { value: "13 / 25", label: { es: "personas registradas consiguieron un contrato formal", en: "registered participants got a formal contract" } },
    { value: "20 / 30", label: { es: "empresas completaron el proceso", en: "companies completed the process" } },
    { value: "4", label: { es: "actores aportaron recursos, sin presupuesto específico", en: "partners contributed resources, with no dedicated budget" } }
  ],
  deliverables: [
    { icon: "company", es: "20 empresas capacitadas en perspectiva de género.", en: "20 companies trained in a gender perspective." },
    { icon: "training", es: "20 personas formadas en oficios (barista, camarera, informática básica).", en: "20 people trained in trades (barista, waiting staff, basic IT)." },
    { icon: "job", es: "20 incorporaciones a empresas mediante los programas provinciales Primer Paso y XMí, con acompañamiento psicosocial.", en: "20 job placements through the provincial programmes Primer Paso and XMí, with psychosocial support." },
    { icon: "report", es: "Informe de resultados y lecciones aprendidas.", en: "Results and lessons-learned report." }
  ],

  card: {
    points: [
      { es: "Administración de recursos escasos", en: "Managing scarce resources" },
      { es: "Gestión estratégica de stakeholders", en: "Strategic stakeholder management" },
      { es: "<b>Resultado:</b> el 52 % de las participantes accedió a un empleo formal (13 de 25)", en: "<b>Result:</b> 52% of participants obtained formal employment (13 of 25)" }
    ]
  },
  highlight: {
    title: { es: "Embudo de resultados", en: "Results funnel" },
    blocks: [
      { type: "funnel",
        steps: [
          { label: { es: "Registradas en la base de la oficina", en: "Registered in the office database" }, value: 25 },
          { label: { es: "Completan la formación", en: "Complete the training" }, value: 20, loss: { es: "Pérdida: falta de contacto (sin teléfono o sin respuesta) y derivaciones a otros programas.", en: "Loss: lost contact (no phone or no reply) and referrals to other programmes." } },
          { label: { es: "Ingresan a empresas (Primer Paso / XMí)", en: "Placed in companies (Primer Paso / XMí)" }, value: 20, loss: { es: "Sin pérdidas: el matching cubrió a todas.", en: "No loss: matching covered everyone." } },
          { label: { es: "Completan los 12 meses de práctica", en: "Complete the 12-month placement" }, value: 15, loss: { es: "Pérdida: ausentismo.", en: "Loss: absenteeism." } },
          { label: { es: "Contratadas formalmente", en: "Formally hired" }, value: 13, loss: { es: "Pérdida: decisión de las empresas.", en: "Loss: company decisions." } }
        ],
        caption: { es: "Conversión total: el 52 % de las personas registradas consiguió un empleo formal. Del lado de las empresas, 20 de 30 (67 %) completaron el proceso.", en: "Overall conversion: 52% of registered participants got formal employment. On the employer side, 20 of 30 companies (67%) completed the process." } },
      { type: "p", text: { es: "El proyecto se ejecutó sin presupuesto específico.", en: "The project ran with no dedicated budget." } }
    ]
  },

  sections: [
    { key: "context", blocks: [
      { type: "p", text: { es: "La Ley 26.743 de Identidad de Género (2012) reconoció el derecho de las personas trans a ser registradas con su nombre y género, pero ese reconocimiento no se tradujo en acceso al empleo. En 2015 la provincia de Buenos Aires aprobó la Ley 14.783 de cupo laboral trans en el sector público, que en 2018 seguía sin reglamentar. En Córdoba se habían presentado proyectos de cupo en la Legislatura y en el Concejo Deliberante, sin aprobación.",
                           en: "Argentina's Gender Identity Law 26,743 (2012) recognised the right of trans people to be registered with their name and gender, but that recognition did not translate into access to employment. In 2015 the province of Buenos Aires passed Law 14,783 establishing a public-sector job quota for trans people, which in 2018 had still not been implemented. In Córdoba, quota bills had been introduced in the provincial legislature and the city council, without approval." } },
      { type: "p", text: { es: "En un contexto de ajuste del sector público, un cupo estatal no era una vía disponible a corto plazo. Se optó por trabajar con el sector privado y con los recursos que ya existían en el Estado provincial.",
                           en: "With public-sector spending cuts, a state quota was not a short-term option. The choice was to work with the private sector and with resources the provincial government already had." } },
      { type: "p", text: { es: "La mayoría de las personas trans de Argentina no tiene empleo formal y depende del trabajo sexual como fuente de ingresos. La expectativa de vida de las mujeres trans en la región se estima entre 30 y 35 años (CIDH, 2015). Muchas de las personas que se acercaban a la oficina estaban en situación de calle o de extrema vulnerabilidad.",
                           en: "Most trans people in Argentina have no formal employment and depend on sex work for income. Life expectancy for trans women in the region is estimated at 30 to 35 years (IACHR, 2015). Many of the people who came to the office were homeless or extremely vulnerable." } }
    ] },

    { key: "challenge", blocks: [
      { type: "p", text: { es: "Tras una etapa de sensibilización, el diagnóstico se construyó en <b>dos espacios separados</b>: uno con las empresas y otro con las personas trans. Separar los espacios permitió que cada grupo expusiera sus barreras sin la presión del otro.",
                           en: "After an awareness stage, the diagnosis was built in <b>two separate spaces</b>: one with companies and one with trans participants. Keeping them apart let each group speak about its barriers without pressure from the other." } },
      { type: "table", title: { es: "Árbol de problemas: escasa inserción y permanencia en el empleo formal", en: "Problem tree: low access to and retention in formal employment" },
        head: [{ es: "Rama", en: "Branch" }, { es: "Causas", en: "Causes" }, { es: "Efectos", en: "Effects" }],
        rows: [
          [{ es: "Demanda (empresas)", en: "Demand (companies)" }, { es: "Prejuicios y temor a la reacción de clientes y compañeros. Desconocimiento de la Ley 26.743 en lo cotidiano: nombre, trato, vestuarios, documentación. Riesgo percibido de que la incorporación no funcione.", en: "Prejudice and fear of how customers and co-workers would react. Lack of knowledge of Law 26,743 in everyday matters: names, treatment, changing rooms, paperwork. Perceived risk that the hire would not work out." }, { es: "Planteles sin diversidad. Discriminación reproducida en los procesos de selección.", en: "Workforces without diversity. Discrimination reproduced in hiring." }],
          [{ es: "Oferta (personas trans)", en: "Supply (trans people)" }, { es: "Expulsión temprana del sistema educativo. Poca o ninguna experiencia laboral formal. Desconfianza hacia instituciones y empleadores después de experiencias de violencia.", en: "Early exclusion from school. Little or no formal work experience. Distrust of institutions and employers after experiences of violence." }, { es: "Dependencia del trabajo sexual. Ingresos precarios e inestables.", en: "Dependence on sex work. Precarious, unstable income." }],
          [{ es: "Vinculación", en: "Matching" }, { es: "No existía un puente entre empresas y candidatas. Bajo uso de los programas provinciales de empleo. Falta de acompañamiento para sostener el empleo.", en: "No bridge between companies and candidates. Low use of provincial employment programmes. No support to help people keep their jobs." }, { es: "Mayor exposición a la violencia. Exclusión que se reproduce entre generaciones.", en: "Greater exposure to violence. Exclusion passed down through generations." }]
        ] },
      { type: "table", title: { es: "Árbol de soluciones: tres componentes", en: "Solution tree: three components" },
        head: [{ es: "Rama", en: "Branch" }, { es: "Medio", en: "Means" }, { es: "Componente", en: "Component" }],
        rows: [
          [{ es: "Demanda", en: "Demand" }, { es: "Empresas sensibilizadas, que conocen la Ley 26.743 y se comprometen a incorporar", en: "Sensitised companies that know Law 26,743 and commit to hiring" }, "C1"],
          [{ es: "Oferta", en: "Supply" }, { es: "Personas trans formadas en oficios ajustados a los puestos de las empresas", en: "Trans people trained in trades matched to the companies' jobs" }, "C2"],
          [{ es: "Vinculación", en: "Matching" }, { es: "Intermediación, incorporación por programas provinciales y acompañamiento psicosocial", en: "Brokering, placement through provincial programmes and psychosocial support" }, "C3"]
        ] },
      { type: "note", heading: { es: "Fuera de alcance", en: "Out of scope" },
        text: { es: "Vivienda, salud y consumos problemáticos no se abordaron con el proyecto: se derivaron a la psicóloga y a las trabajadoras sociales de la Secretaría y a otros programas, para proteger el foco y los plazos.",
                en: "Housing, health and substance use were not addressed by the project: they were referred to the Secretariat's psychologist and social workers and to other programmes, to protect focus and timelines." } }
    ] },

    { key: "objectives", blocks: [
      { type: "table", title: { es: "Matriz de Marco Lógico", en: "Logical Framework matrix" },
        head: [{ es: "Nivel", en: "Level" }, { es: "Resumen narrativo", en: "Narrative summary" }, { es: "Indicador", en: "Indicator" }, { es: "Resultado (línea de base: 0)", en: "Result (baseline: 0)" }, { es: "Supuestos", en: "Assumptions" }],
        rows: [
          [{ es: "Fin", en: "Goal" }, { es: "Contribuir a reducir la exclusión laboral y la vulnerabilidad socioeconómica de la población trans en Córdoba.", en: "Help reduce labour exclusion and socio-economic vulnerability among trans people in Córdoba." }, { es: "Contribución, sin meta atribuible al proyecto.", en: "Contribution, no target attributable to the project." }, "—", { es: "Continuidad de las políticas de identidad de género.", en: "Gender identity policies continue." }],
          [{ es: "Propósito", en: "Purpose" }, { es: "Personas trans de la ciudad de Córdoba acceden a un empleo formal y lo sostienen en una red de empresas comprometida con la diversidad.", en: "Trans people in the city of Córdoba access formal jobs and keep them in a network of companies committed to diversity." }, { es: "Personas contratadas formalmente al terminar el programa.", en: "People formally hired at the end of the programme." }, { v: { es: "13 contratadas (52 % de las registradas; 87 % de quienes completaron la práctica)", en: "13 hired (52% of those registered; 87% of those who completed the placement)" } }, { es: "La recesión de 2018–2019 no lleva a las empresas a cerrar puestos.", en: "The 2018–2019 recession does not lead companies to cut jobs." }],
          ["C1", { es: "Red de empresas de gastronomía y ocio nocturno sensibilizada y comprometida (incluye un módulo sobre la Ley 26.743).", en: "Network of hospitality and nightlife companies, trained and committed (includes a module on Law 26,743)." }, { es: "Empresas que inician y que completan el proceso.", en: "Companies that start and complete the process." }, { v: { es: "30 iniciaron, 20 completaron", en: "30 started, 20 completed" } }, { es: "Las empresas mantienen el interés después de los talleres.", en: "Companies stay interested after the workshops." }],
          ["C2", { es: "Personas trans formadas en oficios mediante cupos sin costo en una escuela de oficios.", en: "Trans people trained in trades through free places at a trade school." }, { es: "Personas que inician y completan la formación.", en: "People who start and complete training." }, { v: { es: "25 registradas, 20 completaron cursos de unos 3 meses", en: "25 registered, 20 completed courses of about 3 months" } }, { es: "Las participantes cuentan con condiciones mínimas para asistir.", en: "Participants have the minimum conditions needed to attend." }],
          ["C3", { es: "Intermediación e inserción mediante Primer Paso y XMí, con acompañamiento psicosocial.", en: "Brokering and placement through Primer Paso and XMí, with psychosocial support." }, { es: "Personas incorporadas; personas que completan los 12 meses de práctica.", en: "People placed; people who complete the 12-month placement." }, { v: { es: "20 incorporadas, 15 completaron", en: "20 placed, 15 completed" } }, { es: "Los programas abren su convocatoria en el calendario previsto.", en: "The programmes open their calls on the planned schedule." }],
          ["C4", { es: "Gestión, monitoreo y evaluación del proyecto.", en: "Project management, monitoring and evaluation." }, { es: "Puntos de control realizados; informe de cierre.", en: "Checkpoints held; closing report." }, { v: { es: "5 puntos de control", en: "5 checkpoints" } }, { es: "Aval institucional sostenido después de las elecciones de 2019.", en: "Institutional backing continues after the 2019 elections." }]
        ],
        caption: { es: "Las metas numéricas de la formulación original no se conservaron: la matriz muestra la línea de base y el resultado alcanzado.", en: "The numeric targets from the original design were not preserved: the matrix shows the baseline and the result achieved." } }
    ] },

    { key: "role", blocks: [
      { type: "p", text: { es: "Gestora del proyecto, con el patrocinio de la Dirección de la Secretaría de Derechos Humanos y un equipo de oficina formado por una psicóloga y dos trabajadoras sociales.",
                           en: "Project manager, sponsored by the leadership of the Human Rights Secretariat, with an office team of a psychologist and two social workers." } },
      { type: "table", title: { es: "Acta de constitución (resumen)", en: "Project charter (summary)" },
        head: [{ es: "Campo", en: "Field" }, { es: "Contenido", en: "Content" }],
        rows: [
          [{ es: "Objetivo", en: "Objective" }, { es: "Que personas trans de la ciudad de Córdoba accedan a un empleo formal y lo sostengan.", en: "Trans people in the city of Córdoba access formal employment and keep it." }],
          [{ es: "Alcance", en: "Scope" }, { es: "Ciudad de Córdoba. Incluye sensibilización de empresas, diagnóstico participativo, formación, intermediación y seguimiento. Excluye vivienda y salud, que se derivan.", en: "City of Córdoba. Includes company awareness, participatory diagnosis, training, brokering and follow-up. Excludes housing and health, which are referred." }],
          [{ es: "Patrocinio", en: "Sponsor" }, { es: "Dirección de la Secretaría de Derechos Humanos", en: "Leadership of the Human Rights Secretariat" }],
          [{ es: "Restricciones", en: "Constraints" }, { es: "Sin presupuesto específico. Calendario fijo de los programas provinciales (noviembre a octubre).", en: "No dedicated budget. Fixed calendar for the provincial programmes (November to October)." }],
          [{ es: "Hitos", en: "Milestones" }, { es: "Mayo 2018: inicio de talleres. Octubre 2018: fin de la formación. Noviembre 2018: incorporación a empresas. Octubre 2019: fin de la práctica. Noviembre 2019: contrataciones y cierre.", en: "May 2018: workshops start. October 2018: training ends. November 2018: placements begin. October 2019: placements end. November 2019: hiring and close." }]
        ] }
    ] },

    { key: "approach", blocks: [
      { type: "p", text: { es: "Usé el Marco Lógico para diseñar la intervención (árboles, alternativas y matriz) y PM4R para gestionarla (acta, desglose del trabajo, riesgos, comunicaciones y puntos de control). La decisión clave fue elegir la alternativa con criterios explícitos.",
                           en: "I used the Logical Framework to design the intervention (trees, alternatives and matrix) and PM4R to manage it (charter, work breakdown, risks, communications and checkpoints). The key decision was choosing the alternative with explicit criteria." } },
      { type: "table", title: { es: "Factibilidad de alternativas (1 = baja, 5 = alta)", en: "Feasibility of alternatives (1 = low, 5 = high)" },
        head: [{ es: "Alternativa", en: "Alternative" }, { es: "Política", en: "Political" }, { es: "Técnica", en: "Technical" }, { es: "Económica", en: "Economic" }, { es: "Plazos", en: "Timing" }, { es: "Aceptación social", en: "Social acceptance" }, { es: "Impacto", en: "Impact" }, "Total"],
        num: [1, 2, 3, 4, 5, 6, 7],
        rows: [
          [{ es: "A1. Cupo laboral trans en el sector público", en: "A1. Public-sector job quota for trans people" }, 1, 3, 2, 1, 2, 4, "13/30"],
          [{ es: "A2. Acuerdo con cámaras empresariales y grandes empleadores", en: "A2. Agreement with business chambers and large employers" }, 3, 3, 4, 2, 2, 4, "18/30"],
          [{ es: "A3. Cooperativas y emprendimientos con microcrédito", en: "A3. Cooperatives and micro-credit ventures" }, 4, 2, 2, 3, 3, 2, "16/30"],
          { total: true, cells: [{ es: "A4. Piloto con pymes de gastronomía y ocio nocturno, programas provinciales y escuela de oficios", en: "A4. Pilot with hospitality and nightlife SMEs, provincial programmes and a trade school" }, 4, 4, 5, 5, 3, 3, "24/30"] }
        ] },
      { type: "note", heading: { es: "Decisión: A4", en: "Decision: A4" },
        text: { es: "El cupo público dependía de una ley y de un Estado en ajuste. Con los grandes empleadores había que negociar con áreas de RR. HH. formales, con plazos largos y requisitos educativos que la mayoría de las participantes no cumplía. Las cooperativas no resolvían el acceso al empleo formal ni la discriminación en el lugar de trabajo. El piloto permitía validar el modelo en un año, sin presupuesto específico, y dejaba a A2 como etapa de escala. Su límite: un sector con alta rotación y un impacto de menor escala.",
                en: "The public quota depended on a law and on a state cutting costs. Large employers meant negotiating with formal HR departments, with long timelines and education requirements most participants did not meet. Cooperatives addressed neither access to formal jobs nor workplace discrimination. The pilot made it possible to validate the model in a year, with no dedicated budget, leaving A2 as a scale-up stage. Its limitation: a high-turnover sector and smaller-scale impact." } },
      { type: "table", title: { es: "Registro de decisiones", en: "Decision log" },
        head: [{ es: "Decisión", en: "Decision" }, { es: "Alternativa descartada", en: "Rejected alternative" }, { es: "Motivo", en: "Reason" }],
        rows: [
          [{ es: "Usar Primer Paso y XMí para la incorporación", en: "Use Primer Paso and XMí for placements" }, { es: "Pedir un presupuesto específico para subsidios", en: "Request a dedicated budget for subsidies" }, { es: "Recursos ya disponibles y calendario compatible", en: "Resources already available and a compatible calendar" }],
          [{ es: "Formación según la demanda de la red (barista, camarera)", en: "Training based on the network's demand (barista, waiting staff)" }, { es: "Formación general en empleabilidad", en: "General employability training" }, { es: "Coincidir con los puestos reales de las empresas", en: "Match the companies' real jobs" }],
          [{ es: "Participantes en los talleres a empresas", en: "Participants in the company workshops" }, { es: "Sensibilización solo a cargo del equipo", en: "Awareness sessions run by the team only" }, { es: "Generar vínculo personal antes del matching", en: "Build personal connection before matching" }],
          [{ es: "Diagnóstico en espacios separados", en: "Diagnosis in separate spaces" }, { es: "Un taller conjunto", en: "A joint workshop" }, { es: "Evitar asimetrías y que cada grupo hablara con libertad", en: "Avoid power imbalances and let each group speak freely" }],
          [{ es: "Vivienda y salud fuera de alcance, con derivación", en: "Housing and health out of scope, with referrals" }, { es: "Ampliar el proyecto", en: "Expand the project" }, { es: "Proteger el foco y los plazos", en: "Protect focus and timelines" }]
        ] }
    ] },

    { key: "stakeholders", blocks: [
      { type: "matrix", title: { es: "Interés e influencia", en: "Interest and influence" },
        items: [
          { name: { es: "Dirección de la Secretaría", en: "Secretariat leadership" }, role: { es: "patrocinadora", en: "sponsor" }, interest: "high", influence: "mid", strategy: { es: "Gestionar de cerca: validar hitos, informar avances y sostener el aval institucional.", en: "Manage closely: validate milestones, report progress and keep institutional backing." } },
          { name: { es: "Equipo de la oficina", en: "Office team" }, role: { es: "psicóloga y dos trabajadoras sociales", en: "psychologist and two social workers" }, interest: "high", influence: "mid", strategy: { es: "Gestionar de cerca: coordinación semanal de casos.", en: "Manage closely: weekly case coordination." } },
          { name: { es: "Organizaciones sociales", en: "Community organisations" }, interest: "high", influence: "mid", strategy: { es: "Mantener informadas: diálogo constante; canal de acceso y contención social.", en: "Keep informed: ongoing dialogue; a channel for outreach and social support." } },
          { name: { es: "Personas trans participantes", en: "Trans participants" }, role: { es: "beneficiarias y co-diseñadoras", en: "beneficiaries and co-designers" }, interest: "high", influence: "low", strategy: { es: "Mantener involucradas: participación en el diagnóstico, voz propia en los talleres a empresas y acompañamiento individual.", en: "Keep engaged: part of the diagnosis, their own voice in company workshops and individual support." } },
          { name: { es: "Empresas de gastronomía y ocio nocturno (30)", en: "Hospitality and nightlife companies (30)" }, role: { es: "empleadoras; interés bajo al inicio, medio después", en: "employers; low interest at first, medium later" }, interest: "mid", influence: "high", strategy: { es: "Mantener satisfechas: sensibilización, participación en el diagnóstico, vínculo directo con las participantes y perfiles a medida.", en: "Keep satisfied: awareness sessions, part of the diagnosis, direct contact with participants and tailored profiles." } },
          { name: { es: "Secretaría de Equidad y Promoción del Empleo", en: "Equity and Employment Secretariat" }, role: { es: "administra Primer Paso y XMí", en: "runs Primer Paso and XMí" }, interest: "mid", influence: "high", strategy: { es: "Gestionar de cerca: articulación formal para dar de alta a las participantes en los programas.", en: "Manage closely: formal coordination to enrol participants in the programmes." } },
          { name: { es: "Escuela de oficios", en: "Trade school" }, role: { es: "formación sin costo", en: "free training" }, interest: "mid", influence: "mid", strategy: { es: "Mantener satisfecha: gestión de cupos y ajuste de cursos a la demanda de la red.", en: "Keep satisfied: managing places and adapting courses to the network's demand." } },
          { name: { es: "Personal de las empresas", en: "Company staff" }, role: { es: "entorno laboral", en: "work environment" }, interest: "low", influence: "mid", strategy: { es: "Monitorear: talleres de sensibilización al personal.", en: "Monitor: awareness workshops for staff." } }
        ] },
      { type: "table", title: { es: "Plan de comunicaciones", en: "Communication plan" },
        head: [{ es: "Audiencia", en: "Audience" }, { es: "Qué", en: "What" }, { es: "Canal", en: "Channel" }, { es: "Frecuencia", en: "Frequency" }, { es: "Responsable", en: "Owner" }],
        rows: [
          [{ es: "Dirección de la Secretaría", en: "Secretariat leadership" }, { es: "Avance de indicadores y riesgos", en: "Indicator progress and risks" }, { es: "Reunión e informe breve", en: "Meeting and short report" }, { es: "Mensual", en: "Monthly" }, { es: "Gestora", en: "Project manager" }],
          [{ es: "Equipo de la oficina", en: "Office team" }, { es: "Situación de cada participante", en: "Each participant's situation" }, { es: "Reunión de casos", en: "Case meeting" }, { es: "Semanal", en: "Weekly" }, { es: "Gestora", en: "Project manager" }],
          [{ es: "Empresas", en: "Companies" }, { es: "Seguimiento de cada incorporación", en: "Follow-up on each placement" }, { es: "Visita", en: "Visit" }, { es: "Quincenal", en: "Fortnightly" }, { es: "Psicóloga y trabajadoras sociales", en: "Psychologist and social workers" }],
          [{ es: "Participantes", en: "Participants" }, { es: "Turnos, cursos y novedades", en: "Appointments, courses and updates" }, { es: "Presencial y teléfono", en: "In person and phone" }, { es: "Semanal", en: "Weekly" }, { es: "Trabajadoras sociales", en: "Social workers" }],
          [{ es: "Secretaría de Equidad y Empleo", en: "Equity and Employment Secretariat" }, { es: "Altas y novedades en los programas", en: "Enrolments and programme updates" }, { es: "Nota formal y correo", en: "Formal letter and email" }, { es: "Por hito", en: "Per milestone" }, { es: "Gestora", en: "Project manager" }]
        ] }
    ] },

    { key: "planning", blocks: [
      { type: "timeline", title: { es: "Fases de ejecución", en: "Delivery phases" },
        items: [
          { when: { es: "Abr–may 2018", en: "Apr–May 2018" }, title: { es: "Inicio", en: "Initiation" }, text: { es: "Acta, mapa de actores y contacto con empresas de la red de la Secretaría.", en: "Charter, stakeholder map and outreach to companies in the Secretariat's network." } },
          { when: { es: "May–ago 2018", en: "May–Aug 2018" }, title: { es: "Sensibilización", en: "Awareness" }, text: { es: "Talleres sobre diversidad, discriminación y Ley 26.743 con 30 empresas. En varios talleres las participantes contaron su propia historia.", en: "Workshops on diversity, discrimination and Law 26,743 with 30 companies. In several of them, participants told their own stories." } },
          { when: { es: "Jul–ago 2018", en: "Jul–Aug 2018" }, title: { es: "Diagnóstico participativo", en: "Participatory diagnosis" }, text: { es: "Árboles de problemas y soluciones construidos por separado con empresas y con personas trans.", en: "Problem and solution trees built separately with companies and with trans participants." } },
          { when: { es: "Abr–ago 2018", en: "Apr–Aug 2018" }, title: { es: "Registro", en: "Registration" }, text: { es: "25 personas que ya estaban en contacto con la oficina se inscriben en la base de datos.", en: "25 people already in contact with the office sign up in the database." } },
          { when: { es: "Ago–oct 2018", en: "Aug–Oct 2018" }, title: { es: "Formación", en: "Training" }, text: { es: "20 personas cursan barista, camarera e informática básica, durante unos 3 meses.", en: "20 people take barista, waiting staff and basic IT courses over about 3 months." } },
          { when: { es: "Sep–oct 2018", en: "Sep–Oct 2018" }, title: { es: "Vinculación y matching", en: "Connecting and matching" }, text: { es: "Actividades de vínculo en los talleres; la psicóloga propone a cada empresa un perfil de las participantes.", en: "Connection activities in the workshops; the psychologist proposes participant profiles to each company." } },
          { when: { es: "Nov 2018 – oct 2019", en: "Nov 2018 – Oct 2019" }, title: { es: "Inserción", en: "Placement" }, text: { es: "20 personas ingresan a empresas a través de Primer Paso y XMí, con seguimiento de la gestora, la psicóloga y dos trabajadoras sociales.", en: "20 people join companies through Primer Paso and XMí, followed up by the project manager, the psychologist and two social workers." } },
          { when: { es: "Nov 2019", en: "Nov 2019" }, title: { es: "Cierre", en: "Close" }, text: { es: "15 completan la práctica y 13 son contratadas.", en: "15 complete the placement and 13 are hired." } }
        ] },
      { type: "table", title: { es: "Estructura de desglose del trabajo", en: "Work breakdown structure" },
        head: [{ es: "Código", en: "Code" }, { es: "Paquete de trabajo", en: "Work package" }, { es: "Entregable", en: "Deliverable" }],
        rows: [
          ["1", { es: "Gestión del proyecto", en: "Project management" }, { es: "Acta, planificación, informes de avance", en: "Charter, planning, progress reports" }],
          ["2.1", { es: "Convocatoria de empresas", en: "Company outreach" }, { es: "Lista de 30 empresas participantes", en: "List of 30 participating companies" }],
          ["2.2", { es: "Talleres de sensibilización", en: "Awareness workshops" }, { es: "Talleres a responsables y personal, módulo Ley 26.743", en: "Workshops for managers and staff, Law 26,743 module" }],
          ["2.3", { es: "Diagnóstico participativo", en: "Participatory diagnosis" }, { es: "Árboles de problemas y soluciones por grupo y síntesis", en: "Problem and solution trees per group, plus synthesis" }],
          ["3.1", { es: "Registro de participantes", en: "Participant registration" }, { es: "Base de datos de 25 personas", en: "Database of 25 people" }],
          ["3.2", { es: "Gestión de cupos de formación", en: "Training places" }, { es: "Acuerdo con la escuela de oficios", en: "Agreement with the trade school" }],
          ["3.3", { es: "Formación en oficios", en: "Trade training" }, { es: "20 personas formadas", en: "20 people trained" }],
          ["4.1", { es: "Encuentros de vinculación", en: "Connection sessions" }, { es: "Participación de las participantes en los talleres a empresas", en: "Participants take part in company workshops" }],
          ["4.2", { es: "Propuesta de perfiles", en: "Profile proposals" }, { es: "Perfil por empresa, elaborado con la psicóloga", en: "Profile per company, prepared with the psychologist" }],
          ["4.3", { es: "Alta en Primer Paso y XMí", en: "Enrolment in Primer Paso and XMí" }, { es: "20 personas incorporadas", en: "20 people placed" }],
          ["4.4", { es: "Seguimiento psicosocial", en: "Psychosocial follow-up" }, { es: "Registro de casos durante 12 meses", en: "Case log over 12 months" }],
          ["5", { es: "Cierre", en: "Close" }, { es: "Informe de resultados y lecciones aprendidas", en: "Results and lessons-learned report" }]
        ] }
    ] },

    { key: "data", blocks: [
      { type: "table", title: { es: "Sistema de monitoreo", en: "Monitoring system" },
        head: [{ es: "Indicador", en: "Indicator" }, { es: "Fórmula", en: "Formula" }, { es: "Fuente", en: "Source" }, { es: "Frecuencia", en: "Frequency" }],
        rows: [
          [{ es: "Retención en formación", en: "Training retention" }, { es: "Completan / registradas", en: "Completed / registered" }, { es: "Base de datos y escuela", en: "Database and school" }, { es: "Mensual", en: "Monthly" }],
          [{ es: "Tasa de colocación", en: "Placement rate" }, { es: "Incorporadas / formadas", en: "Placed / trained" }, { es: "Altas en programas", en: "Programme enrolments" }, { es: "Por hito", en: "Per milestone" }],
          [{ es: "Asistencia en la práctica", en: "Placement attendance" }, { es: "Días asistidos / días previstos", en: "Days attended / days planned" }, { es: "Empresas y seguimiento", en: "Companies and follow-up" }, { es: "Mensual", en: "Monthly" }],
          [{ es: "Finalización de la práctica", en: "Placement completion" }, { es: "Completan 12 meses / incorporadas", en: "Complete 12 months / placed" }, { es: "Programas provinciales", en: "Provincial programmes" }, { es: "Al cierre", en: "At close" }],
          [{ es: "Contratación", en: "Hiring" }, { es: "Contratadas / completan la práctica", en: "Hired / completed placement" }, { es: "Empresas", en: "Companies" }, { es: "Al cierre", en: "At close" }],
          [{ es: "Retención de empresas", en: "Company retention" }, { es: "Empresas que completan / inician", en: "Companies completing / starting" }, { es: "Listas de asistencia", en: "Attendance lists" }, { es: "Por hito", en: "Per milestone" }]
        ] },
      { type: "timeline", title: { es: "Puntos de control: qué se observó y qué se decidió", en: "Checkpoints: what was observed and what was decided" }, outLabel: { es: "Decisión", en: "Decision" },
        items: [
          { when: { es: "PC1 · agosto 2018", en: "CP1 · August 2018" }, title: { es: "Fin de la sensibilización", en: "End of awareness stage" }, text: { es: "Parte de las empresas bajaba su participación.", en: "Some companies were participating less." }, out: { es: "Sumar a las participantes a los talleres para crear vínculo directo.", en: "Bring participants into the workshops to build direct connection." } },
          { when: { es: "PC2 · octubre 2018", en: "CP2 · October 2018" }, title: { es: "Fin de la formación", en: "End of training" }, text: { es: "20 de 25 completaron; las pérdidas se concentraron en la contactabilidad.", en: "20 of 25 completed; losses were concentrated in reachability." }, out: { es: "Priorizar el contacto presencial y a través de organizaciones.", en: "Prioritise in-person contact and contact through organisations." } },
          { when: { es: "PC3 · enero 2019", en: "CP3 · January 2019" }, title: { es: "Tercer mes de práctica", en: "Third month of placement" }, text: { es: "Aparece el ausentismo.", en: "Absenteeism appears." }, out: { es: "Intensificar el seguimiento de la psicóloga y las trabajadoras sociales.", en: "Step up follow-up by the psychologist and social workers." } },
          { when: { es: "PC4 · octubre 2019", en: "CP4 · October 2019" }, title: { es: "Fin de la práctica", en: "End of placement" }, text: { es: "15 de 20 completaron.", en: "15 of 20 completed." }, out: { es: "Gestionar con cada empresa la contratación.", en: "Work with each company on hiring." } },
          { when: { es: "PC5 · noviembre 2019", en: "CP5 · November 2019" }, title: { es: "Cierre", en: "Close" }, text: { es: "13 contratadas; 20 de 30 empresas completaron.", en: "13 hired; 20 of 30 companies completed." }, out: { es: "Informe de resultados y lecciones aprendidas.", en: "Results and lessons-learned report." } }
        ] }
    ] },

    { key: "results", blocks: [
      { type: "p", text: { es: "De 25 personas registradas, 20 completaron una formación en oficios, las 20 ingresaron a empresas a través de programas provinciales de empleo, 15 completaron el año de práctica y 13 fueron contratadas formalmente. Del lado de la demanda, 20 de las 30 empresas que iniciaron completaron el proceso.",
                           en: "Of 25 registered participants, 20 completed trade training, all 20 were placed in companies through provincial employment programmes, 15 completed the year-long placement and 13 were formally hired. On the employer side, 20 of the 30 companies that started completed the process." } }
    ] },

    { key: "risks", blocks: [
      { type: "table", title: { es: "Matriz de riesgos (probabilidad × impacto, de 1 a 3)", en: "Risk matrix (probability × impact, 1 to 3)" },
        head: [{ es: "Riesgo", en: "Risk" }, { es: "Nivel", en: "Level" }, { es: "Respuesta", en: "Response" }, { es: "¿Ocurrió?", en: "Did it happen?" }],
        num: [1],
        rows: [
          [{ es: "Las empresas abandonan el proceso", en: "Companies drop out" }, "6", { es: "Mitigar: piloto con contactos existentes y vínculo directo con las participantes.", en: "Mitigate: pilot with existing contacts and direct connection with participants." }, { es: "Sí: 30 iniciaron, 20 completaron.", en: "Yes: 30 started, 20 completed." }],
          [{ es: "Se pierde el contacto con participantes sin teléfono", en: "Losing contact with participants without a phone" }, "6", { es: "Mitigar: turnos presenciales fijos y contacto a través de organizaciones.", en: "Mitigate: fixed in-person appointments and contact through organisations." }, { es: "Sí: 5 de 25 no iniciaron la formación.", en: "Yes: 5 of 25 did not start training." }],
          [{ es: "Ausentismo durante la práctica", en: "Absenteeism during the placement" }, "9", { es: "Mitigar: seguimiento psicosocial intensivo en los primeros meses.", en: "Mitigate: intensive psychosocial follow-up in the first months." }, { es: "Sí: 5 de 20 no completaron.", en: "Yes: 5 of 20 did not complete." }],
          [{ es: "Crisis personales (vivienda, salud)", en: "Personal crises (housing, health)" }, "9", { es: "Transferir: derivación a programas y redes de la Secretaría.", en: "Transfer: referral to the Secretariat's programmes and networks." }, { es: "Sí, en casos individuales.", en: "Yes, in individual cases." }],
          [{ es: "Discriminación en el lugar de trabajo", en: "Workplace discrimination" }, "6", { es: "Mitigar: talleres al personal y canal directo con el equipo.", en: "Mitigate: staff workshops and a direct channel to the team." }, { es: "Sí, por parte de clientes. Los propios empleados gestionaron la situación.", en: "Yes, from customers. Co-workers handled the situation themselves." }],
          [{ es: "Cambio en el calendario de Primer Paso / XMí", en: "Change in the Primer Paso / XMí calendar" }, "6", { es: "Mitigar: alinear la formación para terminar en octubre de 2018.", en: "Mitigate: align training to end in October 2018." }, { es: "No.", en: "No." }],
          [{ es: "Crisis económica", en: "Economic crisis" }, "6", { es: "Aceptar y monitorear.", en: "Accept and monitor." }, { es: "Una cafetería cerró.", en: "One café closed down." }],
          [{ es: "Cambio de prioridades tras las elecciones provinciales de 2019", en: "Change in priorities after the 2019 provincial elections" }, "2", { es: "Aceptar y documentar resultados para sostener el aval.", en: "Accept and document results to keep backing." }, { es: "No.", en: "No." }]
        ] }
    ] },

    { key: "learnings", blocks: [
      { type: "list", items: [
        { es: "<b>La vinculación personal sostuvo el matching.</b> Que las participantes contaran su historia en los talleres convirtió la sensibilización en vínculo, y todas las personas formadas fueron incorporadas.", en: "<b>Personal connection made matching work.</b> Participants telling their stories in the workshops turned awareness into connection, and everyone who was trained was placed." },
        { es: "<b>La contactabilidad es un riesgo de diseño, no un imprevisto.</b> Con una población en situación de calle, los canales de contacto tienen que planificarse desde el inicio.", en: "<b>Reachability is a design risk, not an accident.</b> With people experiencing homelessness, contact channels have to be planned from day one." },
        { es: "<b>Los primeros meses de práctica concentran la deserción.</b> El acompañamiento tiene que ser más intenso al comienzo.", en: "<b>Drop-out concentrates in the first months of the placement.</b> Support has to be most intense at the start." },
        { es: "<b>La brecha digital es más profunda que un curso de 3 meses.</b> La informática básica resultó la formación más difícil.", en: "<b>The digital divide runs deeper than a 3-month course.</b> Basic IT proved the hardest training." },
        { es: "<b>Articular recursos existentes permite ejecutar sin presupuesto específico</b>, pero deja al proyecto dependiendo de calendarios y decisiones de terceros.", en: "<b>Pooling existing resources makes it possible to deliver with no dedicated budget</b>, but leaves the project dependent on other people's calendars and decisions." }
      ] }
    ] },

    { key: "today", blocks: [
      { type: "list", title: { es: "Qué cambiaría con un enfoque de datos", en: "What I would change with a data approach" }, items: [
        { es: "Una base de datos estructurada por cohorte, con alertas tempranas de ausentismo.", en: "A database structured by cohort, with early absenteeism alerts." },
        { es: "Un tablero con el embudo actualizado cada mes.", en: "A dashboard with the funnel updated monthly." },
        { es: "Encuestas antes y después en las empresas para medir el cambio de actitudes.", en: "Before-and-after surveys in companies to measure changes in attitudes." },
        { es: "Seguimiento de las personas contratadas a los 6 y 12 meses para medir la permanencia real.", en: "Follow-up of hired participants at 6 and 12 months to measure actual retention." },
        { es: "La documentación del proyecto en un repositorio compartido, para que no se pierda como ocurrió con la original.", en: "Project documentation in a shared repository, so it isn't lost as the original was." }
      ] }
    ] },

    { key: "takeaways", blocks: [
      { type: "list", items: [
        { es: "Elegir una alternativa con criterios explícitos: factibilidad de 24/30 frente a 13–18 de las otras opciones.", en: "Choosing an alternative with explicit criteria: a feasibility score of 24/30 against 13–18 for the other options." },
        { es: "Ejecutar sin presupuesto específico, articulando los recursos de cuatro actores.", en: "Delivering with no dedicated budget by pooling resources from four partners." },
        { es: "Gestionar riesgos en una población muy vulnerable y ajustar el rumbo en cada punto de control.", en: "Managing risk with a highly vulnerable population and adjusting course at each checkpoint." },
        { es: "Medir resultados con un embudo, no con actividades.", en: "Measuring results with a funnel, not with activities." }
      ] }
    ] }
  ]
});
