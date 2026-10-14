/* =========================================================
   Proyecto académico · TFM «Multicausalidad de la inflación»
   Fuentes: presentación de la defensa (presentacionTFM.pptx) y TFM FINAL.pdf.
   ========================================================= */
window.PF = window.PF || {};
(window.PF.projects = window.PF.projects || []).push({
  id: "tfm-inflacion",
  type: "academic",
  sort: 50,
  year: "2026",
  title: { es: "Multicausalidad de la inflación: un estudio comparativo con técnicas de Machine Learning", en: "The multicausality of inflation: a comparative study with machine learning" },
  shortTitle: { es: "TFM · Inflación", en: "Thesis · Inflation" },
  org: { es: "Trabajo de Fin de Máster · Máster en Ciencia de Datos aplicada a las Ciencias Sociales, Universidad de Granada", en: "Master's thesis · Master's in Data Science applied to the Social Sciences, Universidad de Granada" },
  academicNote: { es: "Proyecto realizado en contexto académico.", en: "Project carried out in an academic context." },
  problem: {
    es: "La literatura explica la inflación desde tradiciones distintas (monetaria, institucional, estructural y sociodemográfica) cuyos resultados varían según el contexto. ¿Cómo analizarlas juntas en un único estudio empírico?",
    en: "The literature explains inflation from different traditions (monetary, institutional, structural and socio-demographic) whose results vary by context. How can they be analysed together in a single empirical study?"
  },
  role: { es: "Autora. Gestioné la investigación de punta a punta: pregunta, construcción del dataset, método, análisis y conclusiones.", en: "Author. I ran the research end to end: question, dataset construction, method, analysis and conclusions." },
  period: "2026",
  method: {
    name: { es: "Investigación cuantitativa", en: "Quantitative research" },
    why: { es: "Machine Learning como herramienta exploratoria, con cuidado de no caer en un trabajo puramente data-driven: la teoría decide las dimensiones.",
           en: "Machine learning as an exploratory tool, careful not to become purely data-driven: theory decides the dimensions." }
  },
  tools: { es: "World Development Indicators y concentración de mercado (Banco Mundial), V-Dem (Universidad de Gotemburgo); un modelo de lenguaje de pesos abiertos para clasificar indicadores; PCA, K-means, clustering jerárquico, mezclas gaussianas, Kruskal-Wallis y regresión OLS con bootstrap.",
           en: "World Development Indicators and market concentration (World Bank), V-Dem (University of Gothenburg); an open-weights language model to classify indicators; PCA, K-means, hierarchical clustering, Gaussian mixtures, Kruskal-Wallis and OLS regression with bootstrap." },
  metrics: [
    { value: "0,86", label: { es: "kappa de Cohen entre la clasificación del LLM y la humana", en: "Cohen's kappa between LLM and human classification" } },
    { value: "12", label: { es: "PCA independientes (4 dimensiones × 3 estadísticos)", en: "independent PCAs (4 dimensions × 3 statistics)" } },
    { value: "4", label: { es: "perfiles monetario-fiscales de países", en: "monetary-fiscal country profiles" } }
  ],

  card: {
    problem: null,
    pointsTitle: { es: "Herramientas:", en: "Tools:" },
    points: [
      { es: "Modelos de lenguaje", en: "Language models" },
      "Clustering",
      { es: "Reducción de dimensionalidad", en: "Dimensionality reduction" },
      { es: "Regresiones", en: "Regression models" }
    ]
  },
  highlight: {
    title: { es: "Tres hipótesis, tres veredictos", en: "Three hypotheses, three verdicts" },
    blocks: [
      { type: "verdicts", items: [
        { id: "H1", text: { es: "La similitud en los perfiles monetario-fiscales no implica necesariamente trayectorias inflacionarias homogéneas entre países.", en: "Similar monetary-fiscal profiles do not necessarily imply homogeneous inflation paths across countries." },
          verdict: { es: "Se comprueba", en: "Supported" }, result: "yes",
          evidence: { es: "Mismo perfil, distinta inflación: el test de Kruskal-Wallis entre los cuatro perfiles da H = 41,99 (p &lt; 0,001). En las economías avanzadas, la dimensión monetario-fiscal por sí sola muestra mayor capacidad.", en: "Same profile, different inflation: Kruskal-Wallis across the four profiles gives H = 41.99 (p &lt; 0.001). In advanced economies, the monetary-fiscal dimension alone shows more explanatory power." } },
        { id: "H2", text: { es: "Con perfiles monetario-fiscales comparables, las diferencias persistentes en las trayectorias se asocian a configuraciones institucionales, estructurales y sociodemográficas diferenciadas.", en: "Given comparable monetary-fiscal profiles, persistent differences in inflation paths are associated with distinct institutional, structural and socio-demographic configurations." },
          verdict: { es: "No se comprueba", en: "Not supported" }, result: "no",
          evidence: { es: "Ninguna dimensión, por sí sola, resiste. La institucional fue significativa en tendencia y volatilidad, pero no superó las pruebas más robustas.", en: "No single dimension holds up. The institutional one was significant for trend and volatility but did not pass the most robust checks." } },
        { id: "H3", text: { es: "Incorporar juntas las variables monetarias, institucionales, estructurales y sociodemográficas caracteriza mejor las trayectorias que la dimensión monetario-fiscal sola.", en: "Combining monetary, institutional, structural and socio-demographic variables characterises inflation paths better than the monetary-fiscal dimension alone." },
          verdict: { es: "Solo en la volatilidad", en: "Only for volatility" }, result: "partial",
          evidence: { es: "Las cuatro dimensiones mejoran la caracterización de la volatilidad de la inflación; el efecto sobrevive a los tres chequeos y no aparece en el nivel medio ni en la tendencia.", en: "The four dimensions improve how inflation volatility is characterised; the effect survives all three checks and does not appear in the mean level or trend." } }
      ] }
    ]
  },

  sections: [
    { key: "question", blocks: [
      { type: "note", heading: { es: "Pregunta de investigación", en: "Research question" },
        text: { es: "¿En qué medida la similitud de los perfiles monetario-fiscales se asocia a la convergencia inflacionaria entre países, y qué papel juegan las diferencias institucionales, estructurales y sociodemográficas en la persistencia de la heterogeneidad?",
                en: "To what extent are similar monetary-fiscal profiles associated with inflation convergence across countries, and what role do institutional, structural and socio-demographic differences play in persistent heterogeneity?" } },
      { type: "p", text: { es: "<b>Objetivo general:</b> analizar comparativamente las trayectorias inflacionarias de los países entre 2000 y 2020, evaluando si la similitud monetario-fiscal basta para producir trayectorias homogéneas y si la heterogeneidad observada se asocia con configuraciones institucionales, estructurales y sociodemográficas diferenciadas.",
                           en: "<b>Overall objective:</b> compare countries' inflation paths between 2000 and 2020, assessing whether monetary-fiscal similarity is enough to produce homogeneous paths, and whether the observed heterogeneity is associated with distinct institutional, structural and socio-demographic configurations." } },
      { type: "list", title: { es: "Cuatro tradiciones teóricas, cuatro dimensiones", en: "Four theoretical traditions, four dimensions" }, items: [
        { es: "<b>Monetario-fiscal</b> (Friedman): expansión monetaria, agregados, tasas, crédito y variables fiscales.", en: "<b>Monetary-fiscal</b> (Friedman): monetary expansion, aggregates, rates, credit and fiscal variables." },
        { es: "<b>Institucional</b> (Cukierman; Acemoglu): independencia del banco central, credibilidad y calidad democrática.", en: "<b>Institutional</b> (Cukierman; Acemoglu): central bank independence, credibility and democratic quality." },
        { es: "<b>Estructural</b> (Prebisch): pugna distributiva, posición centro-periferia y estructura del mercado.", en: "<b>Structural</b> (Prebisch): distributive conflict, core-periphery position and market structure." },
        { es: "<b>Sociodemográfica</b> (Coibion): expectativas heterogéneas; educación e ingreso condicionan el acceso a la información.", en: "<b>Socio-demographic</b> (Coibion): heterogeneous expectations; education and income shape access to information." }
      ] }
    ] },

    { key: "dataset", blocks: [
      { type: "p", text: { es: "Construí un dataset propio para los países miembros de la ONU entre 2000 y 2020, a partir de tres fuentes: World Development Indicators (Banco Mundial), Varieties of Democracy (Universidad de Gotemburgo) y el índice Herfindahl-Hirschman de concentración de mercado (Banco Mundial).",
                           en: "I built my own dataset for UN member states between 2000 and 2020 from three sources: World Development Indicators (World Bank), Varieties of Democracy (University of Gothenburg) and the Herfindahl-Hirschman market concentration index (World Bank)." } },
      { type: "list", title: { es: "Decisiones de construcción", en: "Construction decisions" }, items: [
        { text: { es: "<b>Recorte del universo:</b> filtrar por miembros de la ONU eleva del 10 % al 24 % los indicadores con cobertura de entre el 98 % y el 100 %.", en: "<b>Scope:</b> filtering to UN members raises the share of indicators with 98–100% coverage from 10% to 24%." } },
        { text: { es: "<b>Clasificación con un LLM, validada:</b> un modelo de lenguaje de pesos abiertos y versionado (reproducible) clasificó los indicadores en las cuatro dimensiones. Se validó contra 100 indicadores etiquetados a mano (kappa de Cohen = 0,86); los casos de baja confianza se marcaron como ambiguos y se revisaron manualmente.", en: "<b>LLM classification, validated:</b> an open-weights, versioned (reproducible) language model classified indicators into the four dimensions. It was validated against 100 hand-labelled indicators (Cohen's kappa = 0.86); low-confidence cases were flagged as ambiguous and reviewed manually." } },
        { text: { es: "<b>Tres estadísticos por serie:</b> media, tendencia (pendiente de una regresión lineal sobre el año) y volatilidad (desviación estándar de los residuos).", en: "<b>Three statistics per series:</b> mean, trend (slope of a linear regression on year) and volatility (standard deviation of the residuals)." } },
        { text: { es: "<b>Faltantes:</b> exclusión de 9 países con más del 40 % de indicadores faltantes e imputación KNN; se probaron k = 3, 5, 8, 10, 15 y 20 con validación cruzada y k = 5 dio el menor RMSE (0,863).", en: "<b>Missing data:</b> 9 countries with over 40% missing indicators were excluded and the rest imputed with KNN; k = 3, 5, 8, 10, 15 and 20 were cross-validated and k = 5 gave the lowest RMSE (0.863)." } }
      ] }
    ] },

    { key: "method", blocks: [
      { type: "flow", steps: [
        { title: { es: "PCA por dimensión", en: "PCA by dimension" }, text: { es: "12 PCA independientes (4 dimensiones × 3 estadísticos): reducen la redundancia sin perder interpretabilidad.", en: "12 independent PCAs (4 dimensions × 3 statistics): less redundancy without losing interpretability." } },
        { title: { es: "Clustering", en: "Clustering" }, text: { es: "Países agrupados por perfil monetario-fiscal con K-means, jerárquico y mezclas gaussianas; ningún grupo con menos de 5 países; silhouette, Davies-Bouldin, Calinski-Harabasz y ARI para comparar. Elección final: GMM (tied), k = 4, por estabilidad e interpretabilidad.", en: "Countries grouped by monetary-fiscal profile with K-means, hierarchical and Gaussian mixtures; no group under 5 countries; silhouette, Davies-Bouldin, Calinski-Harabasz and ARI to compare. Final choice: GMM (tied), k = 4, for stability and interpretability." } },
        { title: { es: "Trayectorias de inflación", en: "Inflation paths" }, text: { es: "Descriptivos y test de Kruskal-Wallis para contrastar H1.", en: "Descriptive statistics and a Kruskal-Wallis test for H1." } },
        { title: { es: "Regresión anidada", en: "Nested regression" }, text: { es: "Modelo A (solo monetaria) frente a Modelo B (cuatro dimensiones), con ΔR² ajustado y bootstrap de 2.000 remuestreos para H2 y H3.", en: "Model A (monetary only) vs Model B (four dimensions), with adjusted ΔR² and a 2,000-resample bootstrap for H2 and H3." } }
      ] }
    ] },

    { key: "findings", blocks: [
      { type: "bars", title: { es: "Cuatro perfiles monetario-fiscales (GMM, k = 4)", en: "Four monetary-fiscal profiles (GMM, k = 4)" },
        items: [
          { label: { es: "Amplio / heterogéneo", en: "Broad / heterogeneous" }, value: 105, display: { es: "105 países", en: "105 countries" } },
          { label: { es: "Avanzadas", en: "Advanced" }, value: 40, display: { es: "40 países", en: "40 countries" } },
          { label: { es: "Rentistas de recursos", en: "Resource-rent economies" }, value: 16, display: { es: "16 países", en: "16 countries" } },
          { label: { es: "Transición postsoviética", en: "Post-Soviet transition" }, value: 11, display: { es: "11 países", en: "11 countries" } }
        ],
        dataHead: [{ es: "Perfil", en: "Profile" }, { es: "Países", en: "Countries" }],
        caption: { es: "Dentro de un mismo perfil, la inflación varía enormemente.", en: "Within the same profile, inflation varies enormously." } },
      { type: "list", title: { es: "Conclusiones", en: "Conclusions" }, items: [
        { es: "La dimensión monetario-fiscal es una condición necesaria, pero no suficiente, para comprender la inflación.", en: "The monetary-fiscal dimension is necessary but not sufficient to understand inflation." },
        { es: "Las cuatro dimensiones juntas caracterizan mejor la volatilidad o estabilidad inflacionaria, y una inflación impredecible también genera costos económicos y sociales.", en: "Taken together, the four dimensions better characterise inflation volatility or stability, and unpredictable inflation also has economic and social costs." },
        { es: "Integrar las cuatro dimensiones fue posible gracias al Machine Learning (un modelo de lenguaje para clasificar indicadores, clustering para los perfiles y PCA para reducir dimensionalidad), combinado con técnicas tradicionales como la regresión y un abordaje que prioriza la interpretabilidad.", en: "Integrating the four dimensions was possible thanks to machine learning (a language model to classify indicators, clustering for the profiles and PCA to reduce dimensionality), combined with traditional techniques such as regression and an approach that prioritises interpretability." }
      ] }
    ] },

    { key: "limits", blocks: [
      { type: "p", text: { es: "Es un aporte exploratorio y asociativo, que permite comparar un conjunto amplio de países y variables y pone en diálogo, desde lo empírico, tradiciones teóricas distintas. Una versión siguiente debería:",
                           en: "It is an exploratory, associative contribution that allows comparison across a wide set of countries and variables, and brings different theoretical traditions into empirical dialogue. A next version should:" } },
      { type: "list", items: [
        { es: "Explorar relaciones no lineales.", en: "Explore non-linear relationships." },
        { es: "Hacer comparaciones regionales: los antecedentes muestran que el contexto importa.", en: "Make regional comparisons: previous studies show that context matters." },
        { es: "Mejorar la operacionalización de las dimensiones teóricas y usar más estadísticos de trayectoria.", en: "Improve how the theoretical dimensions are operationalised and use more path statistics." },
        { es: "Agrupar trayectorias temporales completas para captar la forma dinámica de la inflación, no solo tres estadísticos resumen.", en: "Cluster full time paths to capture the dynamic shape of inflation, not just three summary statistics." }
      ] }
    ] },

    { key: "takeaways", blocks: [
      { type: "list", items: [
        { es: "Gestionar una investigación de punta a punta, con una decisión documentada en cada etapa.", en: "Running a research project end to end, with a documented decision at each stage." },
        { es: "Validar una herramienta de IA antes de confiar en ella: kappa de 0,86 contra el etiquetado humano.", en: "Validating an AI tool before relying on it: a kappa of 0.86 against human labelling." },
        { es: "Elegir el modelo final por estabilidad e interpretabilidad, no solo por métricas.", en: "Choosing the final model for stability and interpretability, not just metrics." },
        { es: "Declarar límites y proponer los siguientes pasos.", en: "Stating limitations and proposing next steps." }
      ] }
    ] }
  ]
});
