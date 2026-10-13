/* =========================================================
   Caso laboral · Grupo tecnológico X (pseudónimo)
   Fuente: documento de trabajo del caso (borrador v2, Scrum).
   Cifras reales del CRM, publicadas sin nombrar a la empresa.
   ========================================================= */
window.PF = window.PF || {};
(window.PF.projects = window.PF.projects || []).push({
  id: "grupo-tecnologico-x",
  type: "work",
  sort: 300,
  year: "2026",
  title: { es: "Calidad del dato comercial y analítica del pipeline", en: "Commercial data quality and pipeline analytics" },
  shortTitle: "Grupo tecnológico X",
  org: { es: "Grupo tecnológico X · empresa de software española", en: "Grupo tecnológico X · Spanish software company" },
  orgNote: {
    es: "«Grupo tecnológico X» es un pseudónimo que preserva la identidad de la empresa; el contexto es real: una empresa de software española. Las cifras son reales y se publican sin nombrar a la empresa. En los dashboards, los nombres comerciales de los productos se sustituyeron por letras.",
    en: "“Grupo tecnológico X” is a pseudonym that protects the company's identity; the context is real: a Spanish software company. The figures are real and are published without naming the company. In the dashboards, product brand names were replaced by letters."
  },
  problem: {
    es: "Marketing y Comercial no podían evaluar sus acciones ni priorizar oportunidades: el dato del CRM se recogía sin criterios comunes y no existía ninguna herramienta analítica.",
    en: "Marketing and Sales could not evaluate their actions or prioritise opportunities: CRM data was captured without shared criteria and there was no analytical tool."
  },
  role: {
    es: "Data Project Manager (prácticas de máster). Gestioné el proyecto y, como la empresa no tenía analista de datos, asumí también el trabajo analítico.",
    en: "Data Project Manager (master's internship). I managed the project and, since the company had no data analyst, I also took on the analytical work."
  },
  period: { es: "Abril–mayo de 2026, 8 semanas, híbrido", en: "April–May 2026, 8 weeks, hybrid" },
  method: {
    name: { es: "Scrum ligero", en: "Lightweight Scrum" },
    why: { es: "El alcance no estaba cerrado: el diagnóstico iba a cambiar las prioridades, y los ciclos cortos con revisión permitían ajustar el rumbo con Marketing.",
           en: "Scope was not fixed: the diagnosis was going to change priorities, and short cycles with a review made it possible to adjust course with Marketing." }
  },
  tools: { es: "CRM Microsoft Dynamics 365, Python (pandas, Plotly, scikit-learn) en Google Colab y VS Code, Power BI, Excel y Google Calendar.",
           en: "Microsoft Dynamics 365 CRM, Python (pandas, Plotly, scikit-learn) in Google Colab and VS Code, Power BI, Excel and Google Calendar." },
  metrics: [
    { value: "3", label: { es: "áreas coordinadas", en: "teams coordinated" }, ev: "real" },
    { value: "4", label: { es: "sprints de 2 semanas", en: "two-week sprints" }, ev: "real" },
    { value: "6.452", label: { es: "oportunidades diagnosticadas", en: "opportunities diagnosed" }, ev: "real" },
    { value: "96 %", label: { es: "sin «fase de canalización» registrada", en: "with no pipeline stage recorded" }, ev: "real" }
  ],
  deliverables: [
    { es: "Dos informes de hallazgos para Marketing (base de oportunidades; customer journey y Cloud), con recomendaciones de mejora y análisis de factibilidad.", en: "Two findings reports for Marketing (opportunity base; customer journey and Cloud), with improvement recommendations and feasibility analysis." },
    { es: "Bases de potenciales y oportunidades integradas y sistematizadas.", en: "Lead and opportunity databases, integrated and systematised." },
    { es: "Tres dashboards interactivos en HTML: pipeline de oportunidades, ciclo de ventas completo y unidad Cloud.", en: "Three interactive HTML dashboards: opportunity pipeline, full sales cycle and the Cloud unit." },
    { es: "Panel en Power BI centrado en ciclos de venta, segmentado por unidad de negocio y producto.", en: "Power BI panel focused on sales cycles, segmented by business unit and product." },
    { es: "Modelo de probabilidad de venta con recomendaciones.", en: "Sales probability model with recommendations." }
  ],

  card: {
    points: [
      { es: "<b>4</b> sprints de 2 semanas", en: "<b>4</b> two-week sprints" },
      { es: "Trabajo interdepartamental para conectar necesidades y propuestas técnicas", en: "Cross-department work to connect needs with technical proposals" },
      { es: "<b>Entregables:</b> informe con recomendaciones de mejora, dashboards interactivos para mejorar la toma de decisiones", en: "<b>Deliverables:</b> report with improvement recommendations, interactive dashboards to support decision-making" }
    ]
  },
  highlight: {
    title: { es: "Del hallazgo a la decisión", en: "From finding to decision" },
    blocks: [
      { type: "table",
        summary: { es: "Hallazgos del análisis, decisión tomada y estado de cada una", en: "Analysis findings, decision taken and status of each" },
        head: [{ es: "Hallazgo", en: "Finding" }, { es: "Decisión o acción", en: "Decision or action" }, { es: "Estado", en: "Status" }],
        rows: [
          [{ es: "El 28 % de las oportunidades no tenía unidad de negocio y no existía una clasificación por sector.", en: "28% of opportunities had no business unit and there was no sector classification." },
           { es: "Envié a Ventas un Excel para clasificar cada tipo de oportunidad por unidad de negocio y sector.", en: "I sent Sales a spreadsheet to classify each opportunity type by business unit and sector." },
           { es: "<b>Implementado.</b> Ventas lo completó: se infirieron las unidades faltantes (quedaron 18 registros sin asignar) y se creó la variable de sector.", en: "<b>Implemented.</b> Sales completed it: missing units were inferred (18 records left unassigned) and a sector variable was created." }],
          [{ es: "64 oportunidades (el 4 % de las 1.519 abiertas) llevaban más de 350 días abiertas y distorsionaban los tiempos medios.", en: "64 opportunities (4% of the 1,519 open ones) had been open for over 350 days and distorted average times." },
           { es: "Las separé en una base aparte.", en: "I moved them to a separate base." },
           { es: "<b>Implementado.</b> Se enviaron a los comerciales para su corrección.", en: "<b>Implemented.</b> They were sent to the sales reps for correction." }],
          [{ es: "Casi la mitad de los registros entra como potencial, pero más del 60 % se pierde antes de ser oportunidad. El 72 % de las oportunidades viene de clientes previos y el win rate es del 44 %.", en: "Almost half of all records enter as leads, but over 60% are lost before becoming opportunities. 72% of opportunities come from existing clients and the win rate is 44%." },
           { es: "Recomendé priorizar la calificación de leads por encima del proceso comercial, que funcionaba bien.", en: "I recommended prioritising lead qualification over the sales process, which was working well." },
           { es: "Recomendación entregada.", en: "Recommendation delivered." }],
          [{ es: "Cloud, unidad prioritaria: sus ventas ganadas se cierran en una mediana de 7 días y las perdidas en 62. Las perdidas tienen mayor importe (mediana de 300 € frente a 84 €).", en: "Cloud, a priority unit: won deals close in a median of 7 days and lost ones in 62. Lost deals are larger (median €300 vs €84)." },
           { es: "Análisis en profundidad de Cloud, a petición de la empresa. Recomendé campañas de reactivación temprana a las 2–3 semanas y acompañamiento específico para las oportunidades grandes.", en: "In-depth analysis of Cloud, at the company's request. I recommended early reactivation campaigns at 2–3 weeks and dedicated follow-up for large opportunities." },
           { es: "Recomendación entregada.", en: "Recommendation delivered." }],
          [{ es: "Ningún servicio se dirige solo al sector público, aunque crecer en ese sector era un objetivo de 2026.", en: "No service targets the public sector alone, although growing in that sector was a 2026 goal." },
           { es: "Lo compartí con Marketing y con la dirección.", en: "I shared it with Marketing and senior management." },
           { es: "Hallazgo compartido.", en: "Finding shared." }],
          [{ es: "En noviembre de 2025 las oportunidades del Producto C se multiplicaron por seis respecto a su nivel habitual, en Editorial y distribución: la unidad que pierde el 70 % de sus oportunidades cerradas.", en: "In November 2025, Product C opportunities rose sixfold over their usual level, in Publishing and distribution: the unit that loses 70% of its closed opportunities." },
           { es: "Lo señalé a Marketing para identificar qué acción generó el pico y revisar por qué esa unidad pierde la mayoría de sus oportunidades.", en: "I flagged it to Marketing to identify which action caused the spike and to review why that unit loses most of its opportunities." },
           { es: "Hallazgo compartido.", en: "Finding shared." }],
          [{ es: "El 11 de noviembre de 2025 se crearon 113 oportunidades y 98 se perdieron.", en: "On 11 November 2025, 113 opportunities were created and 98 were lost." },
           { es: "Segmenté esas oportunidades por tipo para identificar su origen.", en: "I segmented those opportunities by type to identify their origin." },
           { es: "Hallazgo compartido.", en: "Finding shared." }]
        ],
        caption: { es: "Hallazgos y decisiones con datos reales del proyecto. La columna «Estado» indica solo lo que consta.", en: "Findings and decisions use real project data. The “Status” column states only what is documented." },
        ev: "real" }
    ]
  },

  sections: [
    { key: "context", blocks: [
      { type: "p", text: { es: "Empresa tecnológica española con varias unidades de negocio (software sectorial, cloud, BI, web y marketing online, entre otras). La gestión comercial se registra en el CRM Microsoft Dynamics 365, en dos bases: <b>potenciales</b> (leads aún no calificados) y <b>oportunidades</b> (leads calificados hasta su cierre como ganados o perdidos).",
                           en: "A Spanish tech company with several business units (sector software, cloud, BI, web and online marketing, among others). Sales activity is recorded in Microsoft Dynamics 365 CRM in two bases: <b>leads</b> (not yet qualified) and <b>opportunities</b> (qualified leads tracked until they are won or lost)." } },
      { type: "p", text: { es: "La empresa no tenía un perfil de analista de datos. Uno de sus objetivos estratégicos del año era crecer en ventas al sector público.",
                           en: "The company had no data analyst. One of its strategic goals for the year was to grow sales to the public sector." } },
      { type: "p", text: { es: "Me propusieron un proyecto libre dentro de la empresa. Empecé pidiendo micro-reuniones con actores clave del organigrama para detectar oportunidades de mejora.",
                           en: "I was offered an open project within the company. I started by requesting short meetings with key people across the organisation chart to spot improvement opportunities." } }
    ] },

    { key: "challenge", blocks: [
      { type: "p", text: { es: "Marketing no tenía ninguna herramienta visual para evaluar con indicadores sus acciones (campañas, eventos, fidelización). El diagnóstico mostró por qué: los campos que permitían medir estaban vacíos.",
                           en: "Marketing had no visual tool to evaluate its actions (campaigns, events, loyalty) with indicators. The diagnosis showed why: the fields needed for measurement were empty." } },
      { type: "bars", title: { es: "Campos sin dato en las 6.452 oportunidades", en: "Empty fields across the 6,452 opportunities" }, ev: "real", max: 100,
        items: [
          { label: { es: "Fase de canalización", en: "Pipeline stage" }, value: 96, display: "96 %" },
          { label: { es: "Necesidad del cliente", en: "Customer need" }, value: 92, display: "92 %" },
          { label: { es: "Estimación económica", en: "Estimated value" }, value: 53, display: "53 %" },
          { label: { es: "Unidad de negocio", en: "Business unit" }, value: 28, display: "28 %" }
        ],
        dataHead: [{ es: "Campo", en: "Field" }, { es: "% de oportunidades sin dato", en: "% of opportunities with no data" }],
        caption: { es: "Sin la fase de canalización era imposible medir el tiempo por etapa.", en: "Without the pipeline stage it was impossible to measure time per stage." } },
      { type: "list", items: [
        { es: "En los formularios, los campos obligatorios no eran útiles y los útiles no se llenaban; además, algunos se superponían.", en: "In the forms, the mandatory fields were not useful and the useful ones were left blank; some also overlapped." },
        { es: "Registros anómalos: 64 oportunidades abiertas desde hacía más de 350 días y 93 ventas ganadas en Cloud con importe cero o negativo.", en: "Anomalous records: 64 opportunities open for more than 350 days and 93 won Cloud deals with a zero or negative amount." },
        { es: "Ciclos de venta muy dispersos en productos homogéneos vendidos al mismo tiempo: una señal de recursos mal asignados o de poca estrategia por tipo de producto.", en: "Highly scattered sales cycles for similar products sold at the same time: a sign of poorly allocated resources or little strategy by product type." }
      ] },
      { type: "note", text: { es: "Sin datos fiables no se podía saber qué oportunidades merecía la pena impulsar y cuáles consumían recursos sin perspectiva de cierre.",
                              en: "Without reliable data there was no way to know which opportunities were worth pushing and which were consuming resources with no prospect of closing." } }
    ] },

    { key: "objectives", blocks: [
      { type: "p", text: { es: "<b>Objetivo del producto:</b> que el equipo comercial y la dirección de Marketing puedan priorizar oportunidades con información fiable sobre el recorrido comercial completo.",
                           en: "<b>Product goal:</b> enable the sales team and the head of Marketing to prioritise opportunities with reliable information about the full sales journey." } },
      { type: "list", items: [
        { es: "Diagnosticar los gaps de captura y calidad del dato junto a Marketing, Comercial y Calidad, y evaluar la factibilidad de corregirlos.", en: "Diagnose data capture and quality gaps together with Marketing, Sales and Quality, and assess the feasibility of fixing them." },
        { es: "Integrar las bases de potenciales y oportunidades para reconstruir el ciclo comercial completo y sus embudos.", en: "Integrate the lead and opportunity bases to rebuild the full sales cycle and its funnels." },
        { es: "Producir información para decidir: dashboards de pipeline, ciclos y unidad Cloud, y un panel de KPIs en Power BI.", en: "Produce decision-ready information: pipeline, cycle and Cloud unit dashboards, and a KPI panel in Power BI." },
        { es: "Estimar la probabilidad de venta de las oportunidades abiertas para apoyar la priorización.", en: "Estimate the sales probability of open opportunities to support prioritisation." }
      ] }
    ] },

    { key: "role", blocks: [
      { type: "p", text: { es: "Gestioné y coordiné el proyecto. Reportaba a la directora de Marketing, que validaba mis decisiones.",
                           en: "I managed and coordinated the project, reporting to the head of Marketing, who validated my decisions." } },
      { type: "list", items: [
        { es: "<b>Gestión:</b> ordenar el trabajo en sprints, mantener el backlog, coordinar con Marketing, Comercial y Calidad, preparar las revisiones y comunicar resultados.", en: "<b>Management:</b> organising work into sprints, maintaining the backlog, coordinating with Marketing, Sales and Quality, preparing reviews and communicating results." },
        { es: "<b>Análisis:</b> como no había analista, asumí por iniciativa propia la extracción, limpieza, integración, análisis, visualización y modelado.", en: "<b>Analysis:</b> as there was no analyst, I took on extraction, cleaning, integration, analysis, visualisation and modelling on my own initiative." }
      ] },
      { type: "note", text: { es: "Identifiqué que el proyecto no podía avanzar sin capacidad analítica y decidí cubrirla yo, sin dejar de coordinar a las tres áreas.",
                              en: "I saw that the project could not move forward without analytical capacity and decided to cover it myself, while still coordinating the three teams." } }
    ] },

    { key: "approach", blocks: [
      { type: "table", title: { es: "Cómo se aplicó Scrum", en: "How Scrum was applied" },
        head: [{ es: "Elemento", en: "Element" }, { es: "Cómo se aplicó", en: "How it was applied" }],
        rows: [
          ["Product Owner", { es: "Directora de Marketing: validaba prioridades y aceptaba entregables.", en: "Head of Marketing: validated priorities and accepted deliverables." }],
          [{ es: "Scrum Master / gestión", en: "Scrum Master / management" }, { es: "Yo: organizaba sprints, backlog, reuniones y riesgos.", en: "Me: I organised sprints, backlog, meetings and risks." }],
          [{ es: "Equipo de desarrollo", en: "Development team" }, { es: "Calidad, para implementar las mejoras de recolección; yo, en el rol de analista de datos.", en: "Quality, to implement data-capture improvements; me, as data analyst." }],
          ["Sprints", { es: "4 sprints de 2 semanas.", en: "4 two-week sprints." }],
          ["Sprint planning", { es: "Reunión con la directora de Marketing al inicio de cada sprint.", en: "Meeting with the head of Marketing at the start of each sprint." }],
          ["Sprint review", { es: "Presentación de avances a Marketing y a las áreas implicadas al cierre de cada sprint.", en: "Progress presented to Marketing and the teams involved at the end of each sprint." }],
          ["Daily", { es: "No fue necesaria.", en: "Not needed." }],
          [{ es: "Retrospectiva", en: "Retrospective" }, { es: "No existió formalmente.", en: "Not held formally." }],
          ["Definition of Done", { es: "Entregable revisado por la PO, con datos documentados, dashboards y conclusiones explicadas.", en: "Deliverable reviewed by the PO, with documented data, dashboards and explained conclusions." }]
        ] },
      { type: "note", text: { es: "Adapté Scrum a la escala del proyecto y lo declaro así: sin daily ni retrospectiva formal. La revisión con la Product Owner al cierre de cada sprint era el punto de inspección y ajuste.",
                              en: "I adapted Scrum to the project's scale and say so openly: no daily or formal retrospective. The review with the Product Owner at the end of each sprint was the point for inspection and adjustment." } }
    ] },

    { key: "stakeholders", blocks: [
      { type: "matrix", title: { es: "Interés e influencia", en: "Interest and influence" },
        items: [
          { name: { es: "Directora de Marketing", en: "Head of Marketing" }, role: "Product Owner", interest: "high", influence: "high", strategy: { es: "Validación en cada sprint.", en: "Validation in every sprint." } },
          { name: { es: "Calidad", en: "Quality" }, interest: "high", influence: "high", strategy: { es: "Delegar la mejora de procesos en la recolección de datos.", en: "Delegate process improvement in data collection." } },
          { name: { es: "Director de ventas", en: "Head of Sales" }, interest: "high", influence: "mid", strategy: { es: "Entender las necesidades de venta.", en: "Understand sales needs." } },
          { name: { es: "Comerciales", en: "Sales reps" }, interest: "low", influence: "high", strategy: { es: "Acordar las necesidades a resolver y los cambios en la forma de trabajo.", en: "Agree on the needs to solve and on changes to how they work." } },
          { name: { es: "Responsables de la unidad Cloud", en: "Cloud unit leads" }, role: { es: "marketing", en: "marketing" }, interest: "high", influence: "low", strategy: { es: "Acordar necesidades y prioridades para generar campañas específicas.", en: "Agree on needs and priorities for targeted campaigns." } }
        ] },
      { type: "raci", title: { es: "Matriz RACI", en: "RACI matrix" },
        roles: [{ es: "Yo", en: "Me" }, { es: "Dir. Marketing", en: "Head of Mktg" }, { es: "Dir. ventas", en: "Head of Sales" }, { es: "Comerciales", en: "Sales reps" }, { es: "Calidad", en: "Quality" }, { es: "Resp. Cloud", en: "Cloud lead" }, { es: "Dirección", en: "Management" }],
        rows: [
          { task: { es: "Diagnóstico de calidad del dato", en: "Data quality diagnosis" }, cells: ["R", "A", "C", "C", "C", "C", "C"] },
          { task: { es: "Análisis de factibilidad", en: "Feasibility analysis" }, cells: ["R", "A", "C", "C", "R", "", "I"] },
          { task: { es: "Propuestas de mejora en la recolección", en: "Data-capture improvement proposals" }, cells: ["R", "C", "I", "I", "A", "I", "I"] },
          { task: { es: "Acompañar el proceso de mejora", en: "Supporting the improvement process" }, cells: ["C", "I", "I", "I", "R", "I", "A"] },
          { task: { es: "Integración de bases", en: "Database integration" }, cells: ["R", "A", "", "", "", "", ""] },
          { task: { es: "Dashboards y panel de KPIs", en: "Dashboards and KPI panel" }, cells: ["R", "A", "I", "", "I", "I", "I"] },
          { task: { es: "Modelo de probabilidad de venta", en: "Sales probability model" }, cells: ["R", "A", "C", "I", "I", "I", "I"] }
        ] }
    ] },

    { key: "planning", blocks: [
      { type: "timeline", title: { es: "Sprints: objetivo e incremento", en: "Sprints: goal and increment" }, ev: "real", outLabel: { es: "Incremento", en: "Increment" },
        items: [
          { when: { es: "Sprint 1 · semanas 1 y 2", en: "Sprint 1 · weeks 1–2" }, title: { es: "Entender el estado de la cuestión y presentar propuestas de mejora", en: "Understand the current state and present improvement proposals" }, out: { es: "Dashboard exploratorio y primer listado de gaps de calidad con sugerencias de mejora.", en: "Exploratory dashboard and a first list of quality gaps with suggested improvements." } },
          { when: { es: "Sprint 2 · semanas 3 y 4", en: "Sprint 2 · weeks 3–4" }, title: { es: "Reconstruir el recorrido comercial completo", en: "Rebuild the full sales journey" }, out: { es: "Bases integradas, dashboard de ciclos y customer journey.", en: "Integrated bases, cycle and customer journey dashboard." } },
          { when: { es: "Sprint 3 · semanas 5 y 6", en: "Sprint 3 · weeks 5–6" }, title: { es: "Segmentar por unidad, profundizar en la unidad prioritaria y fijar indicadores", en: "Segment by unit, dig into the priority unit and set indicators" }, out: { es: "Dashboard de la unidad Cloud y panel de Power BI.", en: "Cloud unit dashboard and Power BI panel." } },
          { when: { es: "Sprint 4 · semanas 7 y 8", en: "Sprint 4 · weeks 7–8" }, title: { es: "Elaborar un modelo de probabilidad de cierre exitoso", en: "Build a model of the probability of closing a sale" }, out: { es: "Informe con evaluación y recomendaciones.", en: "Report with evaluation and recommendations." } }
        ] },
      { type: "p", text: { es: "Seguimiento de tareas en Excel y calendario de sprints y reuniones en Google Calendar. Por la escala del proyecto no hizo falta un Gantt.",
                           en: "Tasks were tracked in Excel and the sprint and meeting calendar in Google Calendar. Given the project's scale, a Gantt chart was not needed." } }
    ] },

    { key: "data", blocks: [
      { type: "p", text: { es: "Fuente: CRM Microsoft Dynamics 365, de enero de 2025 a abril de 2026. Construí tres bases, cada una para una pregunta distinta:",
                           en: "Source: Microsoft Dynamics 365 CRM, January 2025 to April 2026. I built three bases, each for a different question:" } },
      { type: "kpis", items: [
        { value: "6.452", label: { es: "oportunidades, para el análisis exploratorio", en: "opportunities, for exploratory analysis" }, ev: "real" },
        { value: "9.625", label: { es: "registros de potenciales y oportunidades unidos, para el customer journey", en: "joined lead and opportunity records, for the customer journey" }, ev: "real" },
        { value: "4.933", label: { es: "oportunidades cerradas, para el análisis segmentado", en: "closed opportunities, for segmented analysis" }, ev: "real" }
      ] },
      { type: "list", title: { es: "Indicadores calculados", en: "Indicators calculated" }, items: [
        { es: "Ciclo de potencial a oportunidad, de oportunidad a cierre y ciclo total.", en: "Lead-to-opportunity cycle, opportunity-to-close cycle and total cycle." },
        { es: "Tasas de éxito y fracaso por unidad de negocio.", en: "Win and loss rates by business unit." },
        { es: "Distribución por sector (público, privado o ambos) y fuga del embudo por etapa.", en: "Distribution by sector (public, private or both) and funnel leakage by stage." },
        { es: "Relación entre la duración del ciclo y el valor económico.", en: "Relationship between cycle length and deal value." }
      ] },
      { type: "note", heading: { es: "Una decisión de método", en: "A methodological decision" },
        text: { es: "No eliminé los casos extremos (275 ventas ganadas después de 93 días y 92 perdidas después de 232): los traté por separado, porque podían corresponder a clientes del sector público, con ciclos más largos.",
                en: "I did not remove extreme cases (275 deals won after 93 days and 92 lost after 232): I analysed them separately, because they could correspond to public-sector clients with longer cycles." } },
      { type: "pairs", title: { es: "Unidad Cloud: las perdidas tardan más y valen más", en: "Cloud unit: lost deals take longer and are worth more" }, ev: "real",
        groups: [
          { title: { es: "Días hasta el cierre (mediana)", en: "Days to close (median)" }, items: [
            { label: { es: "Ganadas", en: "Won" }, value: 7, display: { es: "7 días", en: "7 days" } },
            { label: { es: "Perdidas", en: "Lost" }, value: 62, display: { es: "62 días", en: "62 days" }, muted: true } ] },
          { title: { es: "Importe (mediana)", en: "Amount (median)" }, items: [
            { label: { es: "Ganadas", en: "Won" }, value: 84, display: "84 €" },
            { label: { es: "Perdidas", en: "Lost" }, value: 300, display: "300 €", muted: true } ] }
        ],
        dataHead: [{ es: "Medida", en: "Measure" }, { es: "Valor", en: "Value" }],
        caption: { es: "De aquí salió la recomendación: reactivar a las 2–3 semanas y acompañar de forma específica las oportunidades grandes.", en: "This led to the recommendation: reactivate at 2–3 weeks and give large opportunities dedicated follow-up." } },
      { type: "note", heading: { es: "Antes de modelar, comprobar la intuición", en: "Before modelling, test the intuition" },
        text: { es: "El 70 % de las fechas estimadas de cierre eran acertadas y la estimación de éxito de los comerciales coincidía mayoritariamente con el resultado. Por eso el modelo de probabilidad de venta (Random Forest y Gradient Boosting) se planteó como apoyo a esa intuición, no como sustituto.",
                en: "70% of estimated close dates were accurate and the sales reps' success estimates mostly matched the outcome. So the sales probability model (Random Forest and Gradient Boosting) was framed as support for that intuition, not a replacement." } },
      { type: "embed", name: { es: "Dashboard 1 · Pipeline de oportunidades", en: "Dashboard 1 · Opportunity pipeline" },
        text: { es: "Evolución de la creación de oportunidades, ciclos de las abiertas y tasas de éxito por unidad.", en: "Opportunity creation over time, cycles of open opportunities and win rates by unit." },
        src: "dashboards/oportunidades.html" },
      { type: "embed", name: { es: "Dashboard 2 · Ciclo de ventas y customer journey", en: "Dashboard 2 · Sales cycle and customer journey" },
        text: { es: "Recorrido completo de potencial a cierre, fuga del embudo por etapa y segmentación por unidad y tipo.", en: "Full journey from lead to close, funnel leakage by stage and segmentation by unit and type." },
        src: "dashboards/ciclos.html" },
      { type: "embed", name: { es: "Dashboard 3 · Unidad Cloud", en: "Dashboard 3 · Cloud unit" },
        text: { es: "Ciclos de ganadas frente a perdidas, relación entre duración e importe y atribución por canal.", en: "Won vs lost cycles, relationship between length and amount, and channel attribution." },
        src: "dashboards/cloud.html" }
    ] },

    { key: "results", blocks: [
      { type: "list", items: [
        { es: "Ventas clasificó cada tipo de oportunidad por unidad de negocio y sector: nació la variable de sector y solo quedaron 18 registros sin unidad.", en: "Sales classified every opportunity type by business unit and sector: a sector variable was created and only 18 records were left without a unit." },
        { es: "Las 64 oportunidades abiertas desde hacía más de 350 días volvieron a los comerciales para su corrección.", en: "The 64 opportunities open for over 350 days went back to the sales reps for correction." },
        { es: "Marketing y la dirección recibieron recomendaciones concretas (calificación de leads, reactivación temprana en Cloud) y un hallazgo estratégico: no había oferta específica para el sector público, un objetivo del año.", en: "Marketing and senior management received concrete recommendations (lead qualification, early reactivation in Cloud) and a strategic finding: there was no specific offer for the public sector, one of the year's goals." },
        { es: "La empresa pasó de no tener ninguna herramienta analítica a tener tres dashboards interactivos, un panel de KPIs y bases integradas.", en: "The company went from having no analytical tool to having three interactive dashboards, a KPI panel and integrated databases." }
      ] }
    ] },

    { key: "risks", blocks: [
      { type: "table",
        head: [{ es: "Dificultad", en: "Challenge" }, { es: "Respuesta", en: "Response" }],
        rows: [
          [{ es: "No había analista de datos y el proyecto no podía avanzar sin esa capacidad.", en: "There was no data analyst and the project could not move forward without that capacity." }, { es: "Asumí el trabajo analítico sin dejar la coordinación de las tres áreas.", en: "I took on the analytical work while still coordinating the three teams." }],
          [{ es: "Campos críticos vacíos que impedían medir el tiempo por etapa.", en: "Empty critical fields that made it impossible to measure time per stage." }, { es: "Integración de bases para reconstruir el ciclo y propuestas de mejora de la recolección, delegadas en Calidad.", en: "Integrated the bases to rebuild the cycle and proposed data-capture improvements, delegated to Quality." }],
          [{ es: "Casos extremos que distorsionaban las medias.", en: "Extreme cases distorting the averages." }, { es: "Separarlos y analizarlos aparte en lugar de eliminarlos.", en: "Separated and analysed them instead of deleting them." }],
          [{ es: "Picos anómalos de creación y pérdida de oportunidades en un solo día.", en: "Unusual one-day spikes in opportunities created and lost." }, { es: "Segmentación por tipo para identificar el origen antes de sacar conclusiones.", en: "Segmentation by type to find the origin before drawing conclusions." }]
        ] }
    ] },

    { key: "today", blocks: [
      { type: "list", title: { es: "Qué sumaría para medir el éxito del proyecto", en: "What I would add to measure the project's success" }, ev: "ilu", items: [
        { es: "Un KPI de éxito del propio proyecto: % de oportunidades con los campos críticos completos, medido cada mes desde la línea de base (fase de canalización: 4 % completa).", en: "A success KPI for the project itself: % of opportunities with critical fields completed, measured monthly from the baseline (pipeline stage: 4% complete)." },
        { es: "Un árbol de métricas del embudo: potencial → oportunidad → ganada, con tasa de conversión y tiempo por etapa.", en: "A funnel metric tree: lead → opportunity → won, with conversion rate and time per stage." },
        { es: "Un backlog visible en un tablero compartido, en lugar del Excel de seguimiento.", en: "A visible backlog on a shared board instead of the tracking spreadsheet." }
      ] }
    ] },

    { key: "takeaways", blocks: [
      { type: "list", items: [
        { es: "Convertir un encargo abierto en un problema concreto, a partir de conversaciones con las áreas.", en: "Turning an open brief into a concrete problem through conversations with each team." },
        { es: "Adaptar Scrum a la escala real del proyecto y explicar qué se usó y qué no.", en: "Adapting Scrum to the project's real scale and being explicit about what was used and what wasn't." },
        { es: "Detectar un hueco de capacidad y cubrirlo sin perder la coordinación.", en: "Spotting a capability gap and covering it without losing coordination." },
        { es: "Llevar cada hallazgo de datos a una decisión con responsable: Ventas, comerciales, Marketing y dirección.", en: "Turning each data finding into a decision with an owner: Sales, sales reps, Marketing and senior management." }
      ] }
    ] }
  ]
});
