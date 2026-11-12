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
  tools: { es: "Python (pandas, scikit-learn, statsmodels, Plotly); World Development Indicators y WITS (Banco Mundial), V-Dem v16; un modelo de lenguaje de pesos abiertos (gpt-oss-120b vía Groq) para clasificar indicadores; imputación KNN, PCA, K-means, regresión OLS con errores HC3, pruebas por permutación, bootstrap, corrección de Holm y validación cruzada fuera de muestra. <a href=\"https://github.com/carmelaroman94-png/TFM_portfolio\" rel=\"noopener\">Ver el código en GitHub</a>.",
           en: "Python (pandas, scikit-learn, statsmodels, Plotly); World Development Indicators and WITS (World Bank), V-Dem v16; an open-weights language model (gpt-oss-120b via Groq) to classify indicators; KNN imputation, PCA, K-means, OLS regression with HC3 errors, permutation tests, bootstrap, Holm correction and out-of-sample cross-validation. <a href=\"https://github.com/carmelaroman94-png/TFM_portfolio\" rel=\"noopener\">See the code on GitHub</a>." },
  metrics: [
    { value: "183", label: { es: "países miembros de la ONU analizados", en: "UN member states analysed" } },
    { value: "0,83", label: { es: "kappa de Cohen entre la clasificación del LLM y la humana", en: "Cohen's kappa between LLM and human classification" } },
    { value: "5", label: { es: "perfiles monetario-fiscales de países", en: "monetary-fiscal country profiles" } }
  ],

  dashboardsNote: { es: "Seis dashboards interactivos en dos bloques: análisis exploratorio (datos, clasificación, inflación, distribuciones y casos extremos) y modelado (H1 y H2-H3). <a href=\"https://github.com/carmelaroman94-png/TFM_portfolio\" rel=\"noopener\">Código y notebooks en GitHub</a>.", en: "Six interactive dashboards in two blocks: exploratory analysis (data, classification, inflation, distributions and extreme cases) and modelling (H1 and H2-H3). <a href=\"https://github.com/carmelaroman94-png/TFM_portfolio\" rel=\"noopener\">Code and notebooks on GitHub</a>." },
  dashboards: [
    { name: { es: "Inicio", en: "Overview" },
      text: { es: "Pregunta de investigación, veredicto de cada hipótesis y acceso a todos los análisis.", en: "Research question, verdict on each hypothesis and access to every analysis." },
      src: "https://carmelaroman94-png.github.io/TFM_portfolio/dashboards/index.html" },
    { name: { es: "Datos", en: "Data" },
      text: { es: "Cobertura de las fuentes, del catálogo al universo de análisis y datos faltantes por país.", en: "Source coverage, from catalogue to analysis universe, and missing data by country." },
      src: "https://carmelaroman94-png.github.io/TFM_portfolio/dashboards/01_datos.html" },
    { name: { es: "Clasificación con LLM", en: "LLM classification" },
      text: { es: "Validación del modelo de lenguaje contra la clasificación manual y estabilidad entre corridas.", en: "Validation of the language model against manual labelling and stability across runs." },
      src: "https://carmelaroman94-png.github.io/TFM_portfolio/dashboards/02_clasificacion.html" },
    { name: { es: "Inflación", en: "Inflation" },
      text: { es: "Explorador por país, episodios de inflación alta y los tres estadísticos de trayectoria.", en: "Country explorer, high-inflation episodes and the three path statistics." },
      src: "https://carmelaroman94-png.github.io/TFM_portfolio/dashboards/03_inflacion.html" },
    { name: { es: "Distribuciones y extremos", en: "Distributions and extremes" },
      text: { es: "Forma de las distribuciones, ocho reglas de detección de casos extremos, pruebas y tratamiento.", en: "Shape of the distributions, eight rules for detecting extreme cases, tests and treatment." },
      src: "https://carmelaroman94-png.github.io/TFM_portfolio/dashboards/04_extremos.html" },
    { name: "H1", text: { es: "Perfiles monetario-fiscales y heterogeneidad de la inflación dentro de ellos.", en: "Monetary-fiscal profiles and the heterogeneity of inflation within them." },
      src: "https://carmelaroman94-png.github.io/TFM_portfolio/dashboards/05_h1_perfiles.html" },
    { name: "H2-H3", text: { es: "Aporte de las dimensiones no monetarias, robustez en ocho especificaciones y validación fuera de muestra.", en: "Contribution of the non-monetary dimensions, robustness across eight specifications and out-of-sample validation." },
      src: "https://carmelaroman94-png.github.io/TFM_portfolio/dashboards/06_h2_h3_modelos.html" }
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
          evidence: { es: "El perfil explica el 25 % de la variación de la inflación media, el 1 % de la tendencia y el 35 % de la volatilidad: entre el 65 % y el 99 % ocurre dentro de los grupos. Se mantiene con cualquier configuración estable de clustering, y el perfil explica unas tres veces más que la región.", en: "The profile explains 25% of the variation in mean inflation, 1% of the trend and 35% of the volatility: between 65% and 99% occurs within groups. It holds for every stable clustering configuration, and the profile explains about three times more than region." } },
        { id: "H2", text: { es: "Con perfiles monetario-fiscales comparables, cada dimensión no monetaria (institucional, estructural y sociodemográfica) aporta por separado a explicar las trayectorias.", en: "Given comparable monetary-fiscal profiles, each non-monetary dimension (institutional, structural and socio-demographic) contributes separately to explaining inflation paths." },
          verdict: { es: "No respaldada", en: "Not supported" }, result: "no",
          evidence: { es: "Con las cuatro dimensiones en igualdad de condiciones, ninguna aporta por sí sola después de corregir por comparaciones múltiples (Holm). Solo aparece un caso aislado, con el deflactor, en 1 de 7 especificaciones.", en: "With the four dimensions on an equal footing, none contributes on its own after correcting for multiple comparisons (Holm). Only one isolated case appears, with the deflator, in 1 of 7 specifications." } },
        { id: "H3", text: { es: "Incorporar juntas las cuatro dimensiones caracteriza mejor las trayectorias que la dimensión monetario-fiscal sola.", en: "Combining all four dimensions characterises inflation paths better than the monetary-fiscal dimension alone." },
          verdict: { es: "Parcial: asociación, no predicción", en: "Partial: association, not prediction" }, result: "partial",
          evidence: { es: "El R² ajustado del nivel de inflación pasa de 0,27 a 0,33 (f² = 0,17, efecto mediano; Holm p &lt; 0,001), en 7 de 8 especificaciones; también mejora la volatilidad (0,31 → 0,36). Pero la mejora casi no se traslada a la predicción fuera de muestra y desaparece si el control monetario incluye las tasas de interés nominales.", en: "Adjusted R² for the level of inflation rises from 0.27 to 0.33 (f² = 0.17, a medium effect; Holm p &lt; 0.001) in 7 of 8 specifications; volatility also improves (0.31 → 0.36). But the gain barely carries over to out-of-sample prediction and disappears if the monetary control includes nominal interest rates." } }
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
        { text: { es: "<b>Sin fuga de información:</b> se excluyen de las features el IPC, los deflactores y los índices de precios (son la variable dependiente), las tasas de interés (la real se calcula con el deflactor; las nominales incorporan la inflación esperada) y los niveles no comparables entre países, incluidas las series en moneda local.", en: "<b>No information leakage:</b> CPI, deflators and price indices (the dependent variable), interest rates (the real rate is computed with the deflator; nominal rates embed expected inflation) and levels that are not comparable across countries, including local-currency series, are excluded from the features." } },
        { text: { es: "<b>Cobertura:</b> de 1.010 indicadores candidatos, 553 cumplen el umbral (dato en ≥ 70 % de los países y ≥ 60 % de los años). Con tres estadísticos por serie (media, tendencia y volatilidad) resultan 1.659 features. A la inflación se le exige el mismo 60 % de los años.", en: "<b>Coverage:</b> of 1,010 candidate indicators, 553 meet the threshold (data for ≥ 70% of countries and ≥ 60% of years). With three statistics per series (mean, trend and volatility) this gives 1,659 features. Inflation must meet the same 60% of years." } },
        { text: { es: "<b>Faltantes:</b> se excluyen 10 países con más del 40 % de features sin dato (quedan 183) y el resto se imputa con KNN; k = 8 por validación cruzada (RMSE 0,86, meseta entre k = 5 y k = 10). La inflación nunca se imputa.", en: "<b>Missing data:</b> 10 countries with over 40% missing features are excluded (183 remain) and the rest is imputed with KNN; k = 8 by cross-validation (RMSE 0.86, plateau between k = 5 and k = 10). Inflation is never imputed." } }
      ] }
    ] },

    { key: "data", title: { es: "Análisis exploratorio y casos extremos", en: "Exploratory analysis and extreme cases" }, blocks: [
      { type: "p", text: { es: "Antes de modelar, exploré la forma de las distribuciones y definí cómo tratar los casos extremos. Las trayectorias de inflación son muy asimétricas: unos pocos países concentran valores altísimos (asimetría de 4,5 en la media). El logaritmo la lleva a −0,1, y como ninguna distribución es normal, la inferencia se apoya en errores robustos, permutaciones y bootstrap.",
                           en: "Before modelling, I explored the shape of the distributions and decided how to handle extreme cases. Inflation paths are highly skewed: a few countries concentrate very high values (skewness of 4.5 in the mean). The logarithm brings it down to −0.1, and since no distribution is normal, inference relies on robust errors, permutations and bootstrap." } },
      { type: "kpis", items: [
        { value: "8", label: { es: "reglas explícitas para detectar casos extremos", en: "explicit rules to detect extreme cases" } },
        { value: "58", label: { es: "países marcados por al menos una regla", en: "countries flagged by at least one rule" } },
        { value: "26", label: { es: "fuera de los modelos, siempre por falta de información para medirlos", en: "left out of the models, always for lack of information to measure them" } }
      ] },
      { type: "table", title: { es: "Detección y tratamiento", en: "Detection and treatment" },
        head: [{ es: "Problema", en: "Issue" }, { es: "Criterio", en: "Criterion" }, { es: "Países", en: "Countries" }, { es: "Tratamiento", en: "Treatment" }],
        num: [2],
        rows: [
          [{ es: "Features faltantes", en: "Missing features" }, { es: "&gt; 40 % sin dato", en: "&gt; 40% missing" }, "10", { es: "Excluidos del análisis", en: "Excluded from the analysis" }],
          [{ es: "Inflación sin dato o serie corta", en: "Missing or short inflation series" }, { es: "&lt; 13 de 21 años de IPC", en: "&lt; 13 of 21 years of CPI" }, "10", { es: "Fuera de los modelos; variante con el deflactor", en: "Out of the models; deflator variant" }],
          [{ es: "Perfil monetario atípico", en: "Atypical monetary profile" }, "Tukey (Q3 + 1,5·RIC)", "9", { es: "Fuera del clustering; variante «con atípicos»", en: "Out of the clustering; «with outliers» variant" }],
          [{ es: "Inflación extrema o episodios &gt; 40 %", en: "Extreme inflation or episodes &gt; 40%" }, { es: "Tukey en log; picos anuales", en: "Tukey on logs; annual peaks" }, "21", { es: "Se mantienen; mediana y Theil-Sen como variantes", en: "Kept; median and Theil-Sen as variants" }],
          [{ es: "IPC y deflactor no coinciden", en: "CPI and deflator disagree" }, { es: "Diferencia &gt; 2×", en: "Gap &gt; 2×" }, "13", { es: "Se mantienen; variante con el deflactor", en: "Kept; deflator variant" }],
          [{ es: "Alta influencia en el modelo", en: "High influence on the model" }, "Cook &gt; 4/n", "17", { es: "Se mantienen; reestimación sin ellos y jackknife", en: "Kept; re-estimation without them and jackknife" }]
        ],
        caption: { es: "Algunos países cumplen varias reglas a la vez. Ningún valor de inflación se recorta ni se winsoriza: la inflación alta es parte de lo que se quiere explicar.", en: "Some countries meet several rules at once. No inflation value is trimmed or winsorised: high inflation is part of what the study sets out to explain." } },
      { type: "note", heading: { es: "¿Dependen los resultados de los extremos?", en: "Do the results depend on the extremes?" },
        text: { es: "No. Sin los países más influyentes, la mejora de H3 en el nivel pasa de 0,056 a 0,132; quitando los países de a uno se mantiene entre 0,046 y 0,081, con p &lt; 0,005 en todos los casos. Los extremos no sostienen el resultado; si algo, lo atenúan.",
                en: "No. Without the most influential countries, the H3 gain in the level rises from 0.056 to 0.132; removing countries one at a time it stays between 0.046 and 0.081, with p &lt; 0.005 in every case. The extremes do not drive the result; if anything, they dampen it." } }
    ] },

    { key: "method", blocks: [
      { type: "flow", steps: [
        { title: { es: "PCA por dimensión", en: "PCA by dimension" }, text: { es: "12 PCA independientes (4 dimensiones × 3 estadísticos), tras eliminar duplicados casi exactos (|r| > 0,99); KMO ≥ 0,60 y 70 % de varianza retenida.", en: "12 independent PCAs (4 dimensions × 3 statistics), after removing near-duplicates (|r| > 0.99); KMO ≥ 0.60 and 70% of variance retained." } },
        { title: { es: "Clustering", en: "Clustering" }, text: { es: "Grilla de K-means, jerárquico y mezclas gaussianas sobre el perfil monetario-fiscal. Regla fijada antes de ver los resultados: grupos de ≥ 5 países, estabilidad bootstrap (ARI ≥ 0,60) y máxima silhouette. Elige K-means con k = 5 (ARI 0,86).", en: "A grid of K-means, hierarchical and Gaussian mixtures on the monetary-fiscal profile. Rule fixed before seeing results: groups of ≥ 5 countries, bootstrap stability (ARI ≥ 0.60) and maximum silhouette. It selects K-means with k = 5 (ARI 0.86)." } },
        { title: { es: "Prueba de H1", en: "Testing H1" }, text: { es: "Kruskal-Wallis, prueba por permutación y descomposición de la variación entre y dentro de los grupos, con la región ONU como referencia.", en: "Kruskal-Wallis, a permutation test and a between/within-group decomposition of variation, with UN region as a benchmark." } },
        { title: { es: "Regresión anidada", en: "Nested regression" }, text: { es: "Modelo monetario frente a modelos que añaden cada dimensión (H2) o las tres juntas (H3), con 4 componentes por dimensión para que ningún bloque tenga ventaja. Inferencia con HC3, permutación, bootstrap y corrección de Holm; tamaño del efecto (f²), validación fuera de muestra y ocho especificaciones de robustez.", en: "A monetary model versus models adding each dimension (H2) or all three together (H3), with 4 components per dimension so no block has an advantage. Inference with HC3, permutation, bootstrap and Holm correction; effect size (f²), out-of-sample validation and eight robustness specifications." } }
      ] }
    ] },

    { key: "findings", blocks: [
      { type: "bars", title: { es: "Cinco perfiles monetario-fiscales (K-means, k = 5)", en: "Five monetary-fiscal profiles (K-means, k = 5)" },
        items: [
          { label: { es: "Ingreso medio", en: "Middle income" }, value: 74, display: { es: "74 países", en: "74 countries" } },
          { label: { es: "Baja profundidad financiera", en: "Low financial depth" }, value: 41, display: { es: "41 países", en: "41 countries" } },
          { label: { es: "Avanzadas", en: "Advanced" }, value: 29, display: { es: "29 países", en: "29 countries" } },
          { label: { es: "Rentistas de recursos", en: "Resource-rent economies" }, value: 22, display: { es: "22 países", en: "22 countries" } },
          { label: { es: "Pequeñas con Estado grande", en: "Small, large-state economies" }, value: 8, display: { es: "8 países", en: "8 countries" } }
        ],
        dataHead: [{ es: "Perfil", en: "Profile" }, { es: "Países", en: "Countries" }],
        caption: { es: "174 países agrupados; 9 casos atípicos quedan fuera del clustering. Dentro de un mismo perfil la inflación varía mucho: en «Rentistas de recursos» la media va del 0,4 % (Brunéi) al 47,0 % (Angola).", en: "174 countries grouped; 9 outliers are left out of the clustering. Within a profile inflation varies widely: among resource-rent economies the mean ranges from 0.4% (Brunei) to 47.0% (Angola)." } },
      { type: "list", title: { es: "Conclusiones", en: "Conclusions" }, items: [
        { es: "El perfil monetario-fiscal ordena una parte significativa pero minoritaria de las diferencias: compartir perfil no implica compartir trayectoria inflacionaria.", en: "The monetary-fiscal profile accounts for a significant but minority share of the differences: sharing a profile does not mean sharing an inflation path." },
        { es: "Más allá de ese perfil, las configuraciones no monetarias se asocian con <b>cuánta</b> inflación tiene un país y con <b>cuán estable</b> es, con un efecto de tamaño mediano.", en: "Beyond that profile, non-monetary configurations are associated with <b>how much</b> inflation a country has and <b>how stable</b> it is, with a medium-sized effect." },
        { es: "Ese aporte es conjunto: no se atribuye de forma robusta a una sola dimensión.", en: "That contribution is joint: it cannot be robustly attributed to a single dimension." },
        { es: "Es una asociación, no una herramienta de pronóstico: la mejora casi no se traslada a la predicción de países que el modelo no vio.", en: "It is an association, not a forecasting tool: the gain barely carries over to predicting countries the model has not seen." },
        { es: "Integrar las cuatro dimensiones fue posible combinando Machine Learning (un LLM validado para clasificar indicadores, PCA y clustering) con inferencia estadística tradicional y un enfoque que prioriza la interpretabilidad.", en: "Integrating the four dimensions was possible by combining machine learning (a validated LLM to classify indicators, PCA and clustering) with traditional statistical inference and an approach that prioritises interpretability." }
      ] }
    ] },

    { key: "limits", blocks: [
      { type: "list", title: { es: "Limitaciones", en: "Limitations" }, items: [
        { es: "La serie del IPC excluye los casos más extremos (Argentina solo tiene 2018-2020 en WDI; la de Venezuela termina en 2016; Zimbabue y Sudán del Sur tienen series cortas). La especificación con el deflactor los recupera en parte.", en: "The CPI series misses the most extreme cases (Argentina only has 2018-2020 in WDI; Venezuela's series ends in 2016; Zimbabwe and South Sudan have short series). The deflator specification partly recovers them." },
        { es: "H3 depende de no incluir las tasas de interés nominales en el control monetario: con ellas, la mejora desaparece. La exclusión está justificada (contienen la inflación esperada), pero el resultado es condicional a esa decisión.", en: "H3 depends on not including nominal interest rates in the monetary control: with them, the gain disappears. Excluding them is justified (they embed expected inflation), but the result is conditional on that choice." },
        { es: "Resumir 21 años en tres estadísticos descarta la dinámica: los resultados describen asociaciones entre perfiles de largo plazo, no efectos causales.", en: "Summarising 21 years in three statistics discards the dynamics: results describe associations between long-run profiles, not causal effects." },
        { es: "Las dimensiones comparten un gradiente de desarrollo (|r| hasta 0,9 entre primeros componentes), lo que vuelve imprecisos los coeficientes individuales y frágil la atribución a una dimensión concreta.", en: "The dimensions share a development gradient (|r| up to 0.9 between first components), which makes individual coefficients imprecise and attribution to a single dimension fragile." }
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
        { es: "Distinguir significancia, tamaño del efecto y capacidad predictiva: un resultado puede ser sólido dentro de muestra y no servir para pronosticar.", en: "Distinguishing significance, effect size and predictive power: a result can be solid in-sample and still be useless for forecasting." },
        { es: "Revisar el propio trabajo: la reconstrucción detectó fugas de información y un desbalance entre bloques en la versión entregada, y cambió los veredictos de H2 y H3.", en: "Reviewing my own work: the rebuild found information leakage and an imbalance between blocks in the submitted version, and changed the verdicts for H2 and H3." }
      ] }
    ] }
  ]
});
