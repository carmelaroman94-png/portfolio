/* =========================================================
   Proyecto académico · TFM «Multicausalidad de la inflación»
   Fuente: reconstrucción reproducible en github.com/carmelaroman94-png/TFM_portfolio
   (resultados recalculados; difieren en parte de la versión entregada).
   ========================================================= */
window.PF = window.PF || {};
(window.PF.projects = window.PF.projects || []).push({
  id: "tfm-inflacion",
  type: "academic",
  sort: 50,
  year: "2026",
  title: { es: "Multicausalidad de la inflación: perfiles monetario-fiscales y heterogeneidad de trayectorias (2000-2020)", en: "The multicausality of inflation: monetary-fiscal profiles and heterogeneous inflation paths (2000-2020)" },
  shortTitle: { es: "TFM · Inflación", en: "Thesis · Inflation" },
  org: { es: "Trabajo de Fin de Máster · Máster en Ciencia de Datos aplicada a las Ciencias Sociales, Universidad de Granada", en: "Master's thesis · Master's in Data Science applied to the Social Sciences, Universidad de Granada" },
  academicNote: { es: "Proyecto académico, reconstruido después de la defensa como un pipeline reproducible. Los resultados se recalcularon por completo.", en: "Academic project, rebuilt after the defence as a reproducible pipeline. All results were recalculated." },
  problem: {
    es: "La literatura explica la inflación desde tradiciones distintas (monetaria, institucional, estructural y sociodemográfica) cuyos resultados varían según el contexto. ¿Cómo analizarlas juntas en un único estudio empírico comparado?",
    en: "The literature explains inflation from different traditions (monetary, institutional, structural and socio-demographic) whose results vary by context. How can they be analysed together in a single comparative empirical study?"
  },
  role: { es: "Autora. Gestioné la investigación de punta a punta: pregunta, construcción del dataset, método, análisis, conclusiones y reconstrucción reproducible del código.", en: "Author. I ran the research end to end: question, dataset construction, method, analysis, conclusions and the reproducible rebuild of the code." },
  period: "2026",
  method: {
    name: { es: "Investigación cuantitativa", en: "Quantitative research" },
    why: { es: "Machine Learning como herramienta exploratoria, con cuidado de no caer en un trabajo puramente data-driven: la teoría decide las dimensiones y las reglas de decisión se fijan antes de ver los resultados.",
           en: "Machine learning as an exploratory tool, careful not to become purely data-driven: theory decides the dimensions, and decision rules are fixed before looking at the results." }
  },
  tools: { es: "Python (pandas, scikit-learn, statsmodels, Plotly); World Development Indicators y WITS (Banco Mundial), V-Dem v16; un modelo de lenguaje de pesos abiertos (gpt-oss-120b vía Groq) para clasificar indicadores; imputación KNN, PCA, K-means, regresión OLS con errores HC3, pruebas por permutación, bootstrap y corrección de Holm. <a href=\"https://github.com/carmelaroman94-png/TFM_portfolio\" rel=\"noopener\">Ver el código en GitHub</a>.",
           en: "Python (pandas, scikit-learn, statsmodels, Plotly); World Development Indicators and WITS (World Bank), V-Dem v16; an open-weights language model (gpt-oss-120b via Groq) to classify indicators; KNN imputation, PCA, K-means, OLS regression with HC3 errors, permutation tests, bootstrap and Holm correction. <a href=\"https://github.com/carmelaroman94-png/TFM_portfolio\" rel=\"noopener\">See the code on GitHub</a>." },
  metrics: [
    { value: "183", label: { es: "países miembros de la ONU analizados", en: "UN member states analysed" } },
    { value: "0,83", label: { es: "kappa de Cohen entre la clasificación del LLM y la humana", en: "Cohen's kappa between LLM and human classification" } },
    { value: "5", label: { es: "perfiles monetario-fiscales de países", en: "monetary-fiscal country profiles" } }
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
          verdict: { es: "Respaldada", en: "Supported" }, result: "yes",
          evidence: { es: "El perfil explica el 23 % de la variación de la inflación media, el 2 % de la tendencia y el 31 % de la volatilidad: entre el 69 % y el 98 % ocurre dentro de los grupos. El resultado se mantiene en 13 configuraciones de clustering.", en: "The profile explains 23% of the variation in mean inflation, 2% of the trend and 31% of the volatility: between 69% and 98% occurs within groups. The result holds across 13 clustering configurations." } },
        { id: "H2", text: { es: "Con perfiles monetario-fiscales comparables, cada dimensión no monetaria (institucional, estructural y sociodemográfica) aporta por separado a explicar las trayectorias.", en: "Given comparable monetary-fiscal profiles, each non-monetary dimension (institutional, structural and socio-demographic) contributes separately to explaining inflation paths." },
          verdict: { es: "Evidencia moderada", en: "Moderate evidence" }, result: "partial",
          evidence: { es: "Solo la dimensión estructural, y solo sobre el nivel de inflación: es significativa por F clásico, HC3 y permutación, pero no sobrevive a la corrección de Holm (p = 0,061).", en: "Only the structural dimension, and only for the level of inflation: significant by classical F, HC3 and permutation, but it does not survive the Holm correction (p = 0.061)." } },
        { id: "H3", text: { es: "Incorporar juntas las cuatro dimensiones caracteriza mejor las trayectorias que la dimensión monetario-fiscal sola.", en: "Combining all four dimensions characterises inflation paths better than the monetary-fiscal dimension alone." },
          verdict: { es: "Confirmada para el nivel", en: "Confirmed for the level" }, result: "partial",
          evidence: { es: "El R² ajustado del nivel de inflación pasa de 0,24 a 0,29 (p HC3 = 0,003; permutación = 0,009; Holm = 0,010) y se sostiene en las cuatro especificaciones de robustez. No se confirma para la tendencia ni para la volatilidad.", en: "Adjusted R² for the level of inflation rises from 0.24 to 0.29 (HC3 p = 0.003; permutation = 0.009; Holm = 0.010) and holds across all four robustness specifications. It is not confirmed for trend or volatility." } }
      ] }
    ]
  },

  sections: [
    { key: "question", blocks: [
      { type: "note", heading: { es: "Pregunta de investigación", en: "Research question" },
        text: { es: "¿En qué medida compartir un perfil monetario-fiscal se asocia a la convergencia inflacionaria entre países, y qué aportan las dimensiones institucional, estructural y sociodemográfica a la heterogeneidad restante?",
                en: "To what extent is sharing a monetary-fiscal profile associated with inflation convergence across countries, and what do the institutional, structural and socio-demographic dimensions add to the remaining heterogeneity?" } },
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
      { type: "p", text: { es: "Construí un dataset propio para los 193 miembros de la ONU entre 2000 y 2020 a partir de tres fuentes: World Development Indicators (1.498 indicadores), V-Dem v16 (79 índices de nivel intermedio) y el índice Herfindahl-Hirschman de concentración de exportaciones (WITS). La variable dependiente es la inflación anual del IPC; el deflactor del PIB se usa como alternativa.",
                           en: "I built my own dataset for the 193 UN member states between 2000 and 2020 from three sources: World Development Indicators (1,498 indicators), V-Dem v16 (79 mid-level indices) and the Herfindahl-Hirschman export concentration index (WITS). The dependent variable is annual CPI inflation; the GDP deflator is used as an alternative." } },
      { type: "list", title: { es: "Decisiones de construcción", en: "Construction decisions" }, items: [
        { text: { es: "<b>Clasificación con un LLM, validada:</b> un modelo de pesos abiertos (gpt-oss-120b, temperatura 0) asignó cada indicador a una dimensión. Se compararon tres versiones del codebook contra 100 indicadores etiquetados a mano (accuracy 0,88; kappa 0,83, sin diferencias significativas entre versiones). Todo el universo se clasificó dos veces (89 % de acuerdo en WDI y 97,5 % en V-Dem) y los 162 desacuerdos se resolvieron con revisión documentada.", en: "<b>LLM classification, validated:</b> an open-weights model (gpt-oss-120b, temperature 0) assigned each indicator to a dimension. Three codebook versions were compared against 100 hand-labelled indicators (accuracy 0.88; kappa 0.83, no significant differences between versions). The whole universe was classified twice (89% agreement in WDI and 97.5% in V-Dem) and the 162 disagreements were resolved through documented review." } },
        { text: { es: "<b>Sin fuga de información:</b> se excluyen de las features el IPC, los deflactores y los índices de precios (son la variable dependiente) y los niveles absolutos no comparables entre países.", en: "<b>No information leakage:</b> CPI, deflators and price indices (the dependent variable) are excluded from the features, as are absolute levels that are not comparable across countries." } },
        { text: { es: "<b>Cobertura:</b> de 1.017 indicadores candidatos, 560 cumplen el umbral (dato en ≥ 70 % de los países y ≥ 60 % de los años). Con tres estadísticos por serie (media, tendencia y volatilidad) resultan 1.680 features.", en: "<b>Coverage:</b> of 1,017 candidate indicators, 560 meet the threshold (data for ≥ 70% of countries and ≥ 60% of years). With three statistics per series (mean, trend and volatility) this gives 1,680 features." } },
        { text: { es: "<b>Faltantes:</b> se excluyen 10 países con más del 40 % de features sin dato (quedan 183) y el resto se imputa con KNN; k = 8 por validación cruzada (RMSE 0,86, meseta entre k = 5 y k = 10).", en: "<b>Missing data:</b> 10 countries with over 40% missing features are excluded (183 remain) and the rest is imputed with KNN; k = 8 by cross-validation (RMSE 0.86, plateau between k = 5 and k = 10)." } }
      ] }
    ] },

    { key: "method", blocks: [
      { type: "flow", steps: [
        { title: { es: "PCA por dimensión", en: "PCA by dimension" }, text: { es: "12 PCA independientes (4 dimensiones × 3 estadísticos), tras eliminar duplicados casi exactos (|r| > 0,99); KMO ≥ 0,60 y 70 % de varianza retenida.", en: "12 independent PCAs (4 dimensions × 3 statistics), after removing near-duplicates (|r| > 0.99); KMO ≥ 0.60 and 70% of variance retained." } },
        { title: { es: "Clustering", en: "Clustering" }, text: { es: "Grilla de K-means, jerárquico y mezclas gaussianas sobre el perfil monetario-fiscal. Regla fijada antes de ver los resultados: grupos de ≥ 5 países, estabilidad bootstrap (ARI ≥ 0,60) y máxima silhouette. Elige K-means con k = 5 (ARI 0,82).", en: "A grid of K-means, hierarchical and Gaussian mixtures on the monetary-fiscal profile. Rule fixed before seeing results: groups of ≥ 5 countries, bootstrap stability (ARI ≥ 0.60) and maximum silhouette. It selects K-means with k = 5 (ARI 0.82)." } },
        { title: { es: "Prueba de H1", en: "Testing H1" }, text: { es: "Kruskal-Wallis, prueba por permutación y descomposición de la variación entre y dentro de los grupos.", en: "Kruskal-Wallis, a permutation test and a between/within-group decomposition of variation." } },
        { title: { es: "Regresión anidada", en: "Nested regression" }, text: { es: "Modelo monetario frente a modelos que añaden cada dimensión (H2) o las tres juntas (H3). Inferencia con HC3, permutación y bootstrap del ΔR², con corrección de Holm, y cuatro especificaciones de robustez.", en: "A monetary model versus models adding each dimension (H2) or all three together (H3). Inference with HC3, permutation and bootstrap of ΔR², with Holm correction, and four robustness specifications." } }
      ] }
    ] },

    { key: "findings", blocks: [
      { type: "bars", title: { es: "Cinco perfiles monetario-fiscales (K-means, k = 5)", en: "Five monetary-fiscal profiles (K-means, k = 5)" },
        items: [
          { label: { es: "Ingreso medio", en: "Middle income" }, value: 76, display: { es: "76 países", en: "76 countries" } },
          { label: { es: "Baja profundidad financiera", en: "Low financial depth" }, value: 41, display: { es: "41 países", en: "41 countries" } },
          { label: { es: "Avanzadas", en: "Advanced" }, value: 29, display: { es: "29 países", en: "29 countries" } },
          { label: { es: "Rentistas de recursos", en: "Resource-rent economies" }, value: 22, display: { es: "22 países", en: "22 countries" } },
          { label: { es: "Pequeñas con Estado grande", en: "Small, large-state economies" }, value: 7, display: { es: "7 países", en: "7 countries" } }
        ],
        dataHead: [{ es: "Perfil", en: "Profile" }, { es: "Países", en: "Countries" }],
        caption: { es: "175 países agrupados; 8 casos atípicos quedan fuera del clustering. Dentro de un mismo perfil la inflación varía mucho: en «Rentistas de recursos» la media va del 0,4 % (Brunéi) al 72,7 % (Venezuela).", en: "175 countries grouped; 8 outliers are left out of the clustering. Within a profile inflation varies widely: among resource-rent economies the mean ranges from 0.4% (Brunei) to 72.7% (Venezuela)." } },
      { type: "list", title: { es: "Conclusiones", en: "Conclusions" }, items: [
        { es: "El perfil monetario-fiscal ordena una parte significativa pero minoritaria de las diferencias: compartir perfil no implica compartir trayectoria inflacionaria.", en: "The monetary-fiscal profile accounts for a significant but minority share of the differences: sharing a profile does not mean sharing an inflation path." },
        { es: "Más allá de ese perfil, las configuraciones no monetarias informan sobre <b>cuánta</b> inflación tiene un país, pero no sobre la dirección ni la estabilidad de su trayectoria.", en: "Beyond that profile, non-monetary configurations tell us <b>how much</b> inflation a country has, but not about the direction or stability of its path." },
        { es: "Ese aporte es conjunto: no se atribuye de forma robusta a una sola dimensión.", en: "That contribution is joint: it cannot be robustly attributed to a single dimension." },
        { es: "Integrar las cuatro dimensiones fue posible combinando Machine Learning (un LLM validado para clasificar indicadores, PCA y clustering) con inferencia estadística tradicional y un enfoque que prioriza la interpretabilidad.", en: "Integrating the four dimensions was possible by combining machine learning (a validated LLM to classify indicators, PCA and clustering) with traditional statistical inference and an approach that prioritises interpretability." }
      ] }
    ] },

    { key: "limits", blocks: [
      { type: "list", title: { es: "Limitaciones", en: "Limitations" }, items: [
        { es: "La serie del IPC excluye los casos más extremos (Argentina solo tiene 2018-2020 en WDI; faltan años de Venezuela y Zimbabue). La especificación con el deflactor los recupera en parte.", en: "The CPI series misses the most extreme cases (Argentina only has 2018-2020 in WDI; years are missing for Venezuela and Zimbabwe). The deflator specification partly recovers them." },
        { es: "Resumir 21 años en tres estadísticos descarta la dinámica: los resultados describen asociaciones entre perfiles de largo plazo, no efectos causales.", en: "Summarising 21 years in three statistics discards the dynamics: results describe associations between long-run profiles, not causal effects." },
        { es: "Las dimensiones comparten un gradiente de desarrollo (|r| hasta 0,9 entre primeros componentes), lo que vuelve conservadoras las pruebas y frágil la atribución a una dimensión concreta.", en: "The dimensions share a development gradient (|r| up to 0.9 between first components), which makes the tests conservative and attribution to a single dimension fragile." }
      ] },
      { type: "list", title: { es: "Próximos pasos", en: "Next steps" }, items: [
        { es: "Explorar relaciones no lineales.", en: "Explore non-linear relationships." },
        { es: "Hacer comparaciones regionales: los antecedentes muestran que el contexto importa.", en: "Make regional comparisons: previous studies show that context matters." },
        { es: "Agrupar trayectorias temporales completas para captar la forma dinámica de la inflación, no solo tres estadísticos resumen.", en: "Cluster full time paths to capture the dynamic shape of inflation, not just three summary statistics." }
      ] }
    ] },

    { key: "takeaways", blocks: [
      { type: "list", items: [
        { es: "Gestionar una investigación de punta a punta, con una decisión documentada en cada etapa.", en: "Running a research project end to end, with a documented decision at each stage." },
        { es: "Validar una herramienta de IA antes de confiar en ella: kappa de 0,83 contra el etiquetado humano y doble clasificación del universo completo.", en: "Validating an AI tool before relying on it: a kappa of 0.83 against human labelling and a double classification of the whole universe." },
        { es: "Fijar las reglas de selección del modelo antes de ver los resultados y elegir por estabilidad, no solo por métricas.", en: "Fixing model selection rules before seeing the results and choosing for stability, not just metrics." },
        { es: "Revisar el propio trabajo: la reconstrucción detectó una fuga de información en la versión entregada y cambió dos de los tres veredictos.", en: "Reviewing my own work: the rebuild found information leakage in the submitted version and changed two of the three verdicts." }
      ] }
    ] }
  ]
});
