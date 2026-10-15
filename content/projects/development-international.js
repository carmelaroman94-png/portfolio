/* =========================================================
   Caso laboral · Development International
   Fuente: documento «Proyecto 3: Development International».
   ========================================================= */
window.PF = window.PF || {};
(window.PF.projects = window.PF.projects || []).push({
  id: "development-international",
  type: "work",
  sort: 200,
  year: "2024–25",
  title: { es: "La huella de trabajo infantil en las importaciones de EE. UU.", en: "The child labour footprint of US imports" },
  shortTitle: "Development International",
  org: { es: "Development International · ONG alemana de investigación", en: "Development International · German research NGO" },
  problem: {
    es: "DI quería dimensionar el trabajo infantil incorporado en las importaciones de EE. UU., pero no había alcance, fuentes, metodología ni formato de entrega definidos, y el fenómeno no aparece en las estadísticas de comercio.",
    en: "DI wanted to size the child labour embedded in US imports, but there was no defined scope, sources, methodology or deliverable format, and the phenomenon does not appear in trade statistics."
  },
  role: {
    es: "Data Project Manager freelance, responsable de punta a punta: alcance, método, plan, análisis y entrega.",
    en: "Freelance Data Project Manager, accountable end to end: scope, method, plan, analysis and delivery."
  },
  period: { es: "Marzo 2024 – noviembre 2025, en remoto y a tiempo parcial", en: "March 2024 – November 2025, remote and part-time" },
  method: {
    name: "CRISP-DM + Kanban",
    label: { es: "CRISP-DM para ordenar las fases del trabajo con datos + Kanban", en: "CRISP-DM to structure the phases of data work + Kanban" }
  },
  tools: { es: "Python (limpieza), Power Query (modelo relacional), Power BI con DAX, Excel y Trello.", en: "Python (cleaning), Power Query (relational model), Power BI with DAX, Excel and Trello." },
  metrics: [
    { value: "3", label: { es: "fuentes públicas integradas", en: "public sources integrated" } },
    { value: "951", label: { es: "productos HS6 con riesgo identificados (2023)", en: "at-risk HS6 products identified (2023)" } },
    { value: "8", label: { es: "páginas de dashboard publicado", en: "pages in the published dashboard" } },
    { value: "3", label: { es: "indicadores de riesgo nuevos", en: "new risk indicators" } }
  ],
  deliverables: [
    { es: "Dashboard de 8 páginas publicado en la web de DI, con filtros por año, región, país, categoría HS2 y producto HS6, y glosario y fuentes integrados.", en: "8-page dashboard published on DI's website, with filters by year, region, country, HS2 category and HS6 product, plus a built-in glossary and sources." },
    { es: "Informe técnico con una metodología replicable, los principales hallazgos y orientaciones para la acción.", en: "Technical report with a replicable methodology, the main findings and guidance for action." },
    { es: "Base unificada 2019–2023 y tres indicadores de riesgo reutilizables para futuros estudios de DI.", en: "Unified 2019–2023 database and three risk indicators reusable in future DI studies." }
  ],

  card: {
    points: [
      { es: "Se propuso una metodología de trabajo", en: "A working methodology was proposed" },
      { es: "Construcción de métricas", en: "Building metrics" },
      { es: "<b>Entregables:</b> Power BI interactivo + informe técnico", en: "<b>Deliverables:</b> interactive Power BI + technical report" }
    ]
  },
  highlight: {
    title: { es: "Del pedido abierto al producto de datos", en: "From an open request to a data product" },
    blocks: [
      { type: "flow",
        steps: [
          { title: { es: "Tres fuentes internacionales", en: "Three international sources" }, text: { es: "Lista de bienes del ILAB, USA Trade Online (U.S. Census Bureau) y coeficientes regionales de Alsamawi et al. (2019, OCDE/UNICEF).", en: "ILAB list of goods, USA Trade Online (U.S. Census Bureau) and regional coefficients from Alsamawi et al. (2019, OECD/UNICEF)." } },
          { title: { es: "Limpieza y normalización", en: "Cleaning and normalisation" }, text: { es: "Python: países a ISO Alpha-2 y bienes al Sistema Armonizado (HS2 y HS6).", en: "Python: countries to ISO Alpha-2 and goods to the Harmonized System (HS2 and HS6)." } },
          { title: { es: "Modelo relacional", en: "Relational model" }, text: { es: "Power Query: tablas de correspondencia y base unificada 2019–2023.", en: "Power Query: crosswalk tables and a unified 2019–2023 base." } },
          { title: { es: "Tres indicadores", en: "Three indicators" }, text: { es: "Riesgo por volumen, riesgo relativo y Net CL.", en: "Volume risk, relative risk and Net CL." } },
          { title: { es: "Entrega", en: "Delivery" }, text: { es: "Dashboard público en Power BI e informe de hallazgos.", en: "Public Power BI dashboard and findings report." } }
        ] },
      { type: "embed", autoload: true, name: { es: "Dashboard publicado (Power BI)", en: "Published dashboard (Power BI)" },
        text: { es: "8 páginas con filtros por año, región, país y producto.", en: "8 pages with filters by year, region, country and product." },
        src: "https://app.powerbi.com/view?r=eyJrIjoiMzcyMThjM2ItOGJhOS00YmM1LTk2OTktMTk0YTRmOTA1MjZmIiwidCI6Ijg3YmNjZDBkLTdiMjUtNGUzZC04OWZiLWMyYWI5M2E2OGVjOCIsImMiOjh9&embedImagePlaceholder=true&pageName=ReportSection" }
    ]
  },

  sections: [
    { key: "context", blocks: [
      { type: "p", text: { es: "<a href=\"https://www.developmentinternational.org/\" target=\"_blank\" rel=\"noopener\">Development International</a> (DI) es una ONG que genera datos científicos y los publica para aportar evidencia en temas ambientales, sociales y de gobernanza poco medidos. En 2021, junto al grupo Verdes/ALE del Parlamento Europeo, publicó un estudio sobre la huella de trabajo infantil en las importaciones de la Unión Europea de 2019.",
                           en: "<a href=\"https://www.developmentinternational.org/\" target=\"_blank\" rel=\"noopener\">Development International</a> (DI) is an NGO that produces and publishes scientific data to provide evidence on under-measured environmental, social and governance issues. In 2021, together with the Greens/EFA group in the European Parliament, it published a study on the child labour footprint of 2019 EU imports." } },
      { type: "p", text: { es: "Quedaba una pregunta abierta: ¿qué pasa con el otro gran nodo del comercio mundial, Estados Unidos? El director propuso replicar la línea y me encargó el proyecto con un pedido amplio: rastrear la huella de trabajo infantil en las importaciones estadounidenses. No había alcance, fuentes, metodología ni formato de entrega definidos.",
                           en: "One question remained: what about the other major hub of world trade, the United States? The director proposed replicating the study and gave me the project with a broad request: trace the child labour footprint of US imports. There was no defined scope, sources, methodology or deliverable format." } }
    ] },

    { key: "challenge", blocks: [
      { type: "p", text: { es: "Medir algo que por definición se oculta. El trabajo infantil no aparece en las estadísticas de comercio: solo existe una lista oficial (ILAB, Departamento de Trabajo de EE. UU.) de pares bien–país donde se ha detectado, y esa lista no dice cuánto de cada producto lo incorpora.",
                           en: "Measuring something that is hidden by definition. Child labour does not appear in trade statistics: there is only an official list (ILAB, US Department of Labor) of good–country pairs where it has been detected, and the list doesn't say how much of each product involves it." } },
      { type: "list", items: [
        { text: { es: "<b>Datos que no se hablan.</b> La lista ILAB nombra productos en lenguaje natural («café», «juguetes») y países con nombres variables; las bases de importación usan códigos HS. Sin una tabla de correspondencias no había cruce posible.", en: "<b>Data that doesn't connect.</b> The ILAB list names products in plain language (“coffee”, “toys”) and countries inconsistently; import databases use HS codes. Without a crosswalk, no join was possible." } },
        { text: { es: "<b>Riesgo de sobreestimar.</b> Que el café de Colombia esté en la lista no significa que todo el café colombiano lo incorpore. Sin un ajuste, cualquier cifra sería inflada y atacable.", en: "<b>Risk of overestimating.</b> Colombian coffee being on the list doesn't mean all Colombian coffee involves child labour. Without an adjustment, any figure would be inflated and open to attack." } },
        { text: { es: "<b>Usuarios distintos, preguntas distintas.</b> Investigadores que querían rigor y trazabilidad; una dirección que quería mensajes claros; empresas textiles que querían saber qué países y productos de su cadena eran de riesgo.", en: "<b>Different users, different questions.</b> Researchers wanted rigour and traceability; management wanted clear messages; textile companies wanted to know which countries and products in their supply chain were at risk." } }
      ] }
    ] },

    { key: "objectives", blocks: [
      { type: "p", text: { es: "<b>Objetivo general:</b> dar a DI una base empírica y pública para dimensionar el trabajo infantil incorporado en las importaciones de EE. UU. y orientar dónde intervenir.",
                           en: "<b>Overall goal:</b> give DI a public, evidence-based way to size the child labour embedded in US imports and to guide where to act." } },
      { type: "table",
        head: [{ es: "Objetivo específico", en: "Specific objective" }, { es: "Cómo se verifica", en: "How it is verified" }, { es: "Estado", en: "Status" }],
        rows: [
          [{ es: "Construir una base unificada 2019–2023 que cruce importaciones con la lista ILAB a nivel HS6", en: "Build a unified 2019–2023 base joining imports with the ILAB list at HS6 level" }, { es: "951 productos HS6 y 57 categorías HS2 con riesgo identificados (2023)", en: "951 HS6 products and 57 HS2 categories identified as at risk (2023)" }, { es: "Cumplido", en: "Achieved" }],
          [{ es: "Diseñar indicadores que distingan tipos de riesgo", en: "Design indicators that distinguish types of risk" }, { es: "Riesgo por volumen, riesgo relativo y Net CL definidos y calculados", en: "Volume risk, relative risk and Net CL defined and calculated" }, { es: "Cumplido", en: "Achieved" }],
          [{ es: "Hacer el análisis explorable por terceros sin conocimientos técnicos", en: "Make the analysis explorable by non-technical users" }, { es: "Dashboard de 8 páginas con filtros, publicado en la web de DI", en: "8-page dashboard with filters, published on DI's website" }, { es: "Cumplido", en: "Achieved" }],
          [{ es: "Comunicar hallazgos accionables", en: "Communicate actionable findings" }, { es: "Informe de 32 páginas con 21 figuras y recomendaciones de priorización", en: "32-page report with 21 figures and prioritisation recommendations" }, { es: "Entregado, no publicado", en: "Delivered, unpublished" }]
        ] }
    ] },

    { key: "role", blocks: [
      { type: "p", text: { es: "<b>Director:</b> fijó el encargo y validó el resultado final.", en: "<b>Director:</b> set the brief and validated the final result." } },
      { type: "list", title: { es: "Mi rol:", en: "My role:" }, items: [
        { es: "<b>Planificar:</b> definir alcance, planificación, riesgos y comunicación con los usuarios interesados.", en: "<b>Plan:</b> define scope, planning, risks and communication with interested users." },
        { es: "<b>Comunicar:</b> decidir qué preguntas debía responder el dashboard y para quién.", en: "<b>Communicate:</b> decide which questions the dashboard had to answer and for whom." },
        { es: "<b>Analizar:</b> limpieza en Python, modelo en Power Query, medidas DAX, visualización e informe.", en: "<b>Analyse:</b> cleaning in Python, modelling in Power Query, DAX measures, visualisation and the report." }
      ] }
    ] },

    { key: "approach", blocks: [
      { type: "flow", title: { es: "Las 6 fases de CRISP-DM en este proyecto", en: "The 6 CRISP-DM phases in this project" },
        steps: [
          { title: { es: "Entender el problema", en: "Business understanding" }, text: { es: "Traducir el pedido en preguntas medibles, con el estudio europeo de DI de 2021 como precedente.", en: "Turn the request into measurable questions, using DI's 2021 European study as a precedent." } },
          { title: { es: "Entender los datos", en: "Data understanding" }, text: { es: "Elegir fuentes: lista ILAB, USA Trade Online 2019–2023 y coeficientes regionales de Alsamawi et al.", en: "Choose sources: ILAB list, USA Trade Online 2019–2023 and regional coefficients from Alsamawi et al." } },
          { title: { es: "Preparar los datos", en: "Data preparation" }, text: { es: "Limpieza en Python, normalización a ISO Alpha-2 y HS, modelo relacional en Power Query.", en: "Cleaning in Python, normalisation to ISO Alpha-2 and HS, relational model in Power Query." } },
          { title: { es: "Modelar y analizar", en: "Modelling and analysis" }, text: { es: "Tres indicadores e índices temporales base 2019 en DAX.", en: "Three indicators and 2019-based time indices in DAX." } },
          { title: { es: "Evaluar", en: "Evaluation" }, text: { es: "Chequeo de cifras contra fuentes, lectura de anomalías (algodón en 2022, Tayikistán, Egipto) y límites declarados.", en: "Figures checked against sources, anomalies examined (cotton in 2022, Tajikistan, Egypt) and limitations stated." } },
          { title: { es: "Desplegar", en: "Deployment" }, text: { es: "Dashboard publicado en la web de DI e informe de hallazgos.", en: "Dashboard published on DI's website and findings report." } }
        ],
        loop: { es: "CRISP-DM no es lineal, y aquí se notó: al preparar los datos apareció el problema del cruce de nomenclaturas y hubo que volver a la fase de entender los datos para construir las tablas de correspondencia.", en: "CRISP-DM is not linear, and it showed: during data preparation the naming-mismatch problem came up and I had to go back to data understanding to build the crosswalk tables." } },
      { type: "list", title: { es: "Tres principios del enfoque", en: "Three principles behind the approach" }, items: [
        { text: { es: "<b>Partir de un precedente probado:</b> la codificación del estudio europeo de DI, para no reinventar el método y que los resultados fueran comparables.", en: "<b>Start from a proven precedent:</b> the coding of DI's European study, so as not to reinvent the method and to keep results comparable." } },
        { text: { es: "<b>Empezar pequeño y ampliar:</b> primero un año (2019, el del estudio europeo) y una región para validar el cruce y los indicadores; después, la serie completa 2019–2023.", en: "<b>Start small, then scale:</b> first one year (2019, as in the European study) and one region to validate the join and indicators; then the full 2019–2023 series." } },
        { text: { es: "<b>Cada cifra, trazable:</b> fuentes oficiales y públicas, pasos documentados en el informe y límites declarados.", en: "<b>Every figure traceable:</b> official public sources, steps documented in the report and limitations stated." } }
      ] },
      { type: "p", text: { es: "<b>Kanban para el flujo.</b> El trabajo se dividía en paquetes pequeños en un tablero de Trello (por hacer, en curso, en revisión, hecho). Ejemplos de tarjetas: «codificar países ILAB a ISO-2», «mapear bienes ILAB a HS6», «medida DAX índice base 2019», «página Concentration analysis».",
                           en: "<b>Kanban for the flow.</b> Work was split into small packages on a Trello board (to do, in progress, in review, done). Example cards: “code ILAB countries to ISO-2”, “map ILAB goods to HS6”, “DAX measure 2019 base index”, “Concentration analysis page”." } }
    ] },

    { key: "stakeholders", title: { es: "Interesados", en: "Interested parties" }, blocks: [
      { type: "list", items: [
        "Development International",
        { es: "Investigadores", en: "Researchers" },
        { es: "Empresas con intereses en su cadena de suministro", en: "Companies with an interest in their supply chain" }
      ] }
    ] },

    { key: "planning", blocks: [
      { type: "timeline", title: { es: "Cuatro fases con un hito de control entre cada una", en: "Four phases with a control milestone between each" }, outLabel: { es: "Hito de salida", en: "Exit milestone" },
        items: [
          { when: { es: "Mar–jun 2024", en: "Mar–Jun 2024" }, title: { es: "Descubrimiento", en: "Discovery" }, text: { es: "Del encargo a preguntas, fuentes y precedente; diseño de indicadores.", en: "From brief to questions, sources and precedent; indicator design." }, out: { es: "Método definido", en: "Method defined" } },
          { when: { es: "Jul–dic 2024", en: "Jul–Dec 2024" }, title: { es: "Datos", en: "Data" }, text: { es: "Limpieza en Python, países a ISO-2 y bienes a HS, modelo en Power Query.", en: "Cleaning in Python, countries to ISO-2 and goods to HS, model in Power Query." }, out: { es: "Base unificada", en: "Unified base" } },
          { when: { es: "Ene–may 2025", en: "Jan–May 2025" }, title: { es: "Análisis y dashboard", en: "Analysis and dashboard" }, text: { es: "Medidas DAX, 8 páginas con filtros, publicación en la web de DI.", en: "DAX measures, 8 pages with filters, published on DI's website." }, out: { es: "Dashboard publicado", en: "Dashboard published" } },
          { when: { es: "May–nov 2025", en: "May–Nov 2025" }, title: { es: "Informe y cierre", en: "Report and close" }, text: { es: "Informe de 32 páginas, presentaciones y validación del sponsor.", en: "32-page report, presentations and sponsor validation." }, out: { es: "Entrega final", en: "Final delivery" } }
        ],
        caption: { es: "Unos 20 meses en remoto y a tiempo parcial. No se avanzaba a la fase siguiente sin cerrar el entregable de la anterior.", en: "About 20 months, remote and part-time. No phase started until the previous phase's deliverable was closed." } }
    ] },

    { key: "data", blocks: [
      { type: "list", title: { es: "Tres indicadores para tres preguntas", en: "Three indicators for three questions" }, items: [
        { es: "<b>Riesgo por volumen</b> de un país = USD importados de bienes ILAB de ese país. Responde: ¿de dónde viene más cantidad?", en: "<b>Volume risk</b> of a country = USD imported in ILAB goods from that country. Answers: where does the most come from?" },
        { es: "<b>Riesgo relativo</b> de un país = USD con riesgo ÷ USD totales importados de ese país. Responde: ¿qué tan probable es que un producto de ese país esté afectado?", en: "<b>Relative risk</b> of a country = at-risk USD ÷ total USD imported from that country. Answers: how likely is a product from that country to be affected?" },
        { es: "<b>Net CL</b> de un país y un producto = USD importados con riesgo × coeficiente de variación regional de Alsamawi et al. (2019). Estima qué parte del riesgo de trabajo infantil de ese país y ese producto se traslada a las exportaciones.", en: "<b>Net CL</b> of a country and product = at-risk USD imported × the regional variation coefficient from Alsamawi et al. (2019). Estimates how much of that country's and product's child labour risk is carried into exports." }
      ] },
      { type: "bars", title: { es: "Por qué ajustar: el efecto de Net CL en 2019", en: "Why adjust: the effect of Net CL in 2019" },
        items: [
          { label: { es: "Importaciones con riesgo", en: "At-risk imports" }, value: 107300, display: { es: "107.300 M USD", en: "USD 107.3 bn" } },
          { label: { es: "Estimación ajustada (Net CL)", en: "Adjusted estimate (Net CL)" }, value: 25100, display: { es: "25.100 M USD", en: "USD 25.1 bn" } }
        ],
        dataHead: [{ es: "Medida (2019)", en: "Measure (2019)" }, { es: "Valor", en: "Value" }],
        caption: { es: "Sin el ajuste, la estimación habría sido unas cuatro veces mayor y fácil de rebatir.", en: "Without the adjustment, the estimate would have been about four times higher and easy to challenge." } },
      { type: "bars", title: { es: "Por qué un riesgo relativo: lo que el volumen oculta", en: "Why relative risk: what volume hides" }, max: 100,
        items: [
          { label: "Liberia", value: 96, display: "96 %" },
          { label: "China", value: 7, display: "7 %" }
        ],
        dataHead: [{ es: "País", en: "Country" }, { es: "% de sus exportaciones a EE. UU. con riesgo", en: "% of its exports to the US at risk" }],
        caption: { es: "Por volumen, los países pequeños y muy expuestos quedaban invisibles.", en: "By volume alone, small but highly exposed countries were invisible." } },
      { type: "table", title: { es: "Registro de decisiones", en: "Decision log" },
        head: [{ es: "Decisión", en: "Decision" }, { es: "Por qué", en: "Why" }, { es: "Efecto", en: "Effect" }],
        rows: [
          [{ es: "USA Trade Online como fuente de comercio", en: "USA Trade Online as the trade source" }, { es: "Oficial, pública y consistente entre años", en: "Official, public and consistent across years" }, { es: "Cifras comparables 2019–2023", en: "Comparable 2019–2023 figures" }],
          [{ es: "Reutilizar la codificación del estudio europeo de DI", en: "Reuse the coding from DI's European study" }, { es: "Comparabilidad y ahorro de tiempo", en: "Comparability and time savings" }, { es: "Resultados alineados con la línea de investigación de DI", en: "Results aligned with DI's research line" }],
          [{ es: "ISO Alpha-2 como clave común de países", en: "ISO Alpha-2 as the common country key" }, { es: "Cada fuente nombraba los países a su manera", en: "Each source named countries differently" }, { es: "Cruce fiable entre la lista ILAB y las importaciones", en: "Reliable join between the ILAB list and imports" }],
          [{ es: "Bajar a HS6 (productos), no solo HS2 (categorías)", en: "Go down to HS6 (products), not just HS2 (categories)" }, { es: "El riesgo se concentra en productos concretos", en: "Risk is concentrated in specific products" }, { es: "951 productos frente a 57 categorías en 2023", en: "951 products vs 57 categories in 2023" }],
          [{ es: "Ajustar con la variación regional (Net CL)", en: "Adjust with regional variation (Net CL)" }, { es: "No todo el producto listado lleva trabajo infantil", en: "Not every listed product involves child labour" }, { es: "2019: de 107.300 M a 25.100 M USD estimados", en: "2019: from USD 107.3 bn to an estimated USD 25.1 bn" }],
          [{ es: "Crear el indicador de riesgo relativo", en: "Create the relative risk indicator" }, { es: "Por volumen, los países pequeños y expuestos quedaban invisibles", en: "By volume, small exposed countries were invisible" }, { es: "Liberia: 96 %; China: 7 %", en: "Liberia: 96%; China: 7%" }],
          [{ es: "Índices base 2019 para las series", en: "2019-based indices for the series" }, { es: "Comparar evoluciones de magnitudes muy distintas", en: "Compare trends of very different magnitudes" }, { es: "Detectó los picos de algodón de 2022", en: "Revealed the 2022 cotton spikes" }],
          [{ es: "Limpiar en Python y unir en Power Query", en: "Clean in Python, join in Power Query" }, { es: "Python para transformaciones complejas; Power Query para un modelo trazable y actualizable", en: "Python for complex transformations; Power Query for a traceable, refreshable model" }, { es: "Pipeline reproducible", en: "Reproducible pipeline" }]
        ] }
    ] },

    { key: "results", blocks: [
      { type: "p", text: { es: "El proyecto entregó sus dos productos y cumplió sus objetivos de alcance. Estos son los hallazgos que el dashboard y el informe hicieron visibles:",
                           en: "The project delivered both products and met its scope objectives. These are the findings that the dashboard and report made visible:" } },
      { type: "kpis", items: [
        { value: { es: "111.500 M USD", en: "USD 111.5 bn" }, label: { es: "importados por EE. UU. en bienes con riesgo de trabajo infantil (2023)", en: "imported by the US in goods at risk of child labour (2023)" } },
        { value: { es: "25.500 M USD", en: "USD 25.5 bn" }, label: { es: "corresponderían a trabajo infantil incorporado, tras el ajuste regional", en: "would correspond to embedded child labour, after regional adjustment" } },
        { value: "33 %", label: { es: "del valor con riesgo se concentra en 5 de 951 productos", en: "of at-risk value is concentrated in 5 of 951 products" } }
      ] },
      { type: "list", items: [
        { text: { es: "Juguetes (HS95) es la categoría con más riesgo: 24.400 M USD en 2023, el 99 % procedente de China. Cinco de 57 categorías suman el 68 % del valor con riesgo.", en: "Toys (HS95) is the highest-risk category: USD 24.4 bn in 2023, 99% from China. Five of 57 categories account for 68% of at-risk value." } },
        { text: { es: "2022 fue un punto de inflexión, impulsado por el algodón de Tayikistán y Egipto. En 2023 las importaciones con riesgo cayeron 26 puntos de índice frente a 6 del total, casi hasta el nivel de 2019.", en: "2022 was a turning point, driven by cotton from Tajikistan and Egypt. In 2023 at-risk imports fell 26 index points versus 6 for total imports, almost back to 2019 levels." } }
      ] }
    ] },

    { key: "risks", blocks: [
      { type: "p", text: { es: "El mayor problema técnico fue el cruce de nomenclaturas; el mayor riesgo de gestión, la baja implicación de los decisores.",
                           en: "The biggest technical problem was matching naming systems; the biggest management risk was low involvement from decision-makers." } },
      { type: "table",
        head: [{ es: "Riesgo o problema", en: "Risk or issue" }, { es: "Impacto", en: "Impact" }, { es: "Respuesta", en: "Response" }],
        rows: [
          [{ es: "Cada fuente y cada país con su propia nomenclatura", en: "Every source and country with its own naming" }, { es: "Sin cruce no había análisis", en: "No join, no analysis" }, { es: "Tablas de correspondencia a ISO Alpha-2 y códigos HS", en: "Crosswalk tables to ISO Alpha-2 and HS codes" }],
          [{ es: "Sobreestimar el trabajo infantil incorporado", en: "Overestimating embedded child labour" }, { es: "Cifras infladas y atacables", en: "Inflated figures, open to attack" }, { es: "Ajuste con variación regional (Net CL) y límites declarados", en: "Regional variation adjustment (Net CL) and stated limitations" }],
          [{ es: "Coeficientes previos a la pandemia; fenómeno clandestino", en: "Pre-pandemic coefficients; a hidden phenomenon" }, { es: "Precisión limitada", en: "Limited precision" }, { es: "Transparencia metodológica en el informe", en: "Methodological transparency in the report" }]
        ] }
    ] },

    { key: "takeaways", blocks: [
      { type: "list", items: [
        { es: "Convertir una pregunta abierta en alcance, método, plan y entregables.", en: "Turning an open question into scope, method, plan and deliverables." },
        { es: "Diseñar indicadores que responden preguntas distintas y declarar sus límites.", en: "Designing indicators that answer different questions, and stating their limits." },
        { es: "Documentar las decisiones de método con su motivo y su efecto.", en: "Documenting methodological decisions with their rationale and effect." },
        { es: "Sostener un proyecto largo, remoto y a tiempo parcial con hitos de control entre fases.", en: "Sustaining a long, remote, part-time project with control milestones between phases." }
      ] },
      { type: "note", text: { es: "Convertí una pregunta abierta en un producto de datos público: definí el método, construí el pipeline y entregué un dashboard y un informe que hacen visible dónde se concentra el riesgo de trabajo infantil en las importaciones de EE. UU.",
                              en: "I turned an open question into a public data product: I defined the method, built the pipeline and delivered a dashboard and a report that show where the risk of child labour in US imports is concentrated." } }
    ] }
  ]
});
