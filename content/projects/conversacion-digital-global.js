/* =========================================================
   Proyecto académico · «La conversación digital global»
   Fuente: informe final «proyecto 4: utilización avanzada de IA».
   Dataset sintético (Kaggle); los resultados son los del informe final.
   ========================================================= */
window.PF = window.PF || {};
(window.PF.projects = window.PF.projects || []).push({
  id: "conversacion-digital-global",
  type: "academic",
  sort: 40,
  year: "2026",
  title: { es: "La conversación digital global: modelos de lenguaje, Machine Learning y revisión agéntica", en: "The global digital conversation: language models, machine learning and agentic review" },
  shortTitle: { es: "IA aplicada · Conversación digital", en: "Applied AI · Digital conversation" },
  org: { es: "Proyecto académico de aplicación avanzada de inteligencia artificial y algoritmos", en: "Academic project in advanced applications of artificial intelligence and algorithms" },
  academicNote: { es: "Proyecto realizado en contexto académico.", en: "Project carried out in an academic context." },
  problem: {
    es: "¿Qué hace que un tema domine la conversación digital, y cuánto de lo que propone un modelo de lenguaje se sostiene al ponerlo a prueba?",
    en: "What makes a topic dominate the digital conversation, and how much of what a language model proposes holds up when tested?"
  },
  role: { es: "Autora: diseño del flujo de análisis, implementación e informe.", en: "Author: analysis workflow design, implementation and report." },
  period: "2026",
  method: {
    name: { es: "Flujo de IA encadenado", en: "Chained AI workflow" },
    why: { es: "Cada herramienta cumple una función distinta y su producto alimenta la fase siguiente: generar hipótesis, contrastarlas y delimitar qué puede afirmarse.",
           en: "Each tool has a distinct role and its output feeds the next phase: generate hypotheses, test them and decide what can be claimed." }
  },
  tools: { es: "Python (pandas, scikit-learn, statsmodels, SciPy), LangChain + Groq (Llama 3.3 70B), SHAP y un agente de Microsoft 365 Copilot.",
           en: "Python (pandas, scikit-learn, statsmodels, SciPy), LangChain + Groq (Llama 3.3 70B), SHAP and a Microsoft 365 Copilot agent." },
  metrics: [
    { value: { es: "1 de 4", en: "1 of 4" }, label: { es: "hipótesis del LLM confirmadas sin reservas", en: "LLM hypotheses confirmed without caveats" } },
    { value: "0,69", label: { es: "R² en test del mejor modelo (Gradient Boosting)", en: "test R² of the best model (Gradient Boosting)" } },
    { value: "+26", label: { es: "puntos de R² frente a la regresión lineal", en: "R² points above linear regression" } }
  ],

  card: {
    problem: { es: "¿Qué hace que un tema domine la conversación digital?", en: "What makes a topic dominate the digital conversation?" },
    text: { es: "Abordaje basado en grandes modelos de lenguaje, árboles de decisión, algoritmo SHAP y agentes", en: "An approach based on large language models, decision trees, the SHAP algorithm and agents" },
    points: []
  },
  highlight: {
    title: { es: "Cuatro hipótesis con la misma seguridad, cuatro veredictos distintos", en: "Four equally confident hypotheses, four different verdicts" },
    blocks: [
      { type: "p", text: { es: "El modelo de lenguaje propuso las cuatro hipótesis con el mismo tono de seguridad y argumentos igualmente plausibles. Al contrastarlas, solo una se confirmó sin reservas, dos necesitaron matices y una se descartó.",
                           en: "The language model proposed all four hypotheses with the same confident tone and equally plausible arguments. When tested, only one was confirmed without caveats, two needed nuance and one was rejected." } },
      { type: "verdicts", items: [
        { id: "H1", text: { es: "El sentimiento negativo aumenta la dominancia de un tema.", en: "Negative sentiment increases a topic's dominance." },
          verdict: { es: "Parcialmente confirmada: depende del tema", en: "Partly confirmed: depends on the topic" }, result: "partial",
          evidence: { es: "Efecto principal mínimo (η² = 0,004), pero interacción fuerte con la categoría (η²p = 0,137). La negatividad suma en eventos globales y economía y resta en entretenimiento.", en: "Minimal main effect (η² = 0.004), but a strong interaction with category (η²p = 0.137). Negativity adds in global events and economy and subtracts in entertainment." } },
        { id: "H2", text: { es: "A mayor engagement, mayor trend_score.", en: "More engagement, higher trend_score." },
          verdict: { es: "Confirmada con matiz: efecto no lineal", en: "Confirmed with nuance: non-linear effect" }, result: "partial",
          evidence: { es: "Variable principal en SHAP (0,104); r = 0,60 y ρ = 0,68. El efecto se satura hacia los 6.000 puntos de engagement.", en: "Top variable in SHAP (0.104); r = 0.60 and ρ = 0.68. The effect saturates around 6,000 engagement points." } },
        { id: "H3", text: { es: "Cada país privilegia subcategorías propias (glocalización).", en: "Each country favours its own subcategories (glocalisation)." },
          verdict: { es: "Confirmada dentro del dataset", en: "Confirmed within the dataset" }, result: "yes",
          evidence: { es: "Interacción país × subcategoría significativa (η²p = 0,053). El críquet puntúa un 45 % más en Pakistán e India que en Estados Unidos y Reino Unido.", en: "Significant country × subcategory interaction (η²p = 0.053). Cricket scores 45% higher in Pakistan and India than in the US and UK." } },
        { id: "H4", text: { es: "El idioma de publicación condiciona la difusión.", en: "Publication language shapes reach." },
          verdict: { es: "Rechazada", en: "Rejected" }, result: "no",
          evidence: { es: "Aporte SHAP por debajo de 0,001 y ANOVA no significativo (p = 0,628). El argumento era verosímil y no tenía respaldo en los datos.", en: "SHAP contribution below 0.001 and a non-significant ANOVA (p = 0.628). The argument was plausible and had no support in the data." } }
      ] }
    ]
  },

  sections: [
    { key: "question", blocks: [
      { type: "p", text: { es: "Este trabajo encadena tres usos de la inteligencia artificial para estudiar qué hace que un tema domine la conversación digital, global y localmente, en el marco de la glocalización: la homogeneización cultural que convive con la reafirmación de lo propio.",
                           en: "This project chains three uses of artificial intelligence to study what makes a topic dominate the digital conversation, globally and locally, through the lens of glocalisation: cultural homogenisation coexisting with the reaffirmation of local identity." } },
      { type: "list", items: [
        { es: "¿La negatividad favorece la dominancia de un tema, y lo hace igual en todas las temáticas?", en: "Does negativity help a topic dominate, and equally across all themes?" },
        { es: "¿El engagement impulsa la tendencia de forma lineal?", en: "Does engagement drive trends linearly?" },
        { es: "¿Hay patrones por país compatibles con la glocalización?", en: "Are there country patterns consistent with glocalisation?" },
        { es: "¿Qué hipótesis generadas por un modelo de lenguaje resisten la contrastación empírica?", en: "Which hypotheses generated by a language model survive empirical testing?" }
      ] }
    ] },

    { key: "dataset", blocks: [
      { type: "p", text: { es: "Crossplatform Trending Topics 2026 (Kaggle): 2.500 registros de febrero de 2026 que combinan noticias, redes sociales y búsquedas, en tres idiomas (inglés, hindi y urdu) y cuatro países (Estados Unidos, Reino Unido, India y Pakistán), con cinco categorías y veinte subcategorías. La variable objetivo, trend_score, va de 0 a 1 y se interpreta como medida de dominancia del tema.",
                           en: "Crossplatform Trending Topics 2026 (Kaggle): 2,500 records from February 2026 combining news, social media and search, in three languages (English, Hindi and Urdu) and four countries (US, UK, India and Pakistan), with five categories and twenty subcategories. The target variable, trend_score, ranges from 0 to 1 and is read as a measure of topic dominance." } },
      { type: "note", heading: { es: "Límite declarado: el dataset es sintético", en: "Stated limitation: the dataset is synthetic" },
        text: { es: "Se usa como entorno controlado para ensayar un flujo de análisis replicable, no como retrato de la conversación digital real. Los patrones que se encuentran describen cómo fue construido el dataset.",
                en: "It is used as a controlled environment to test a replicable analysis workflow, not as a portrait of the real digital conversation. The patterns found describe how the dataset was built." } },
      { type: "p", text: { es: "Antes de cualquier análisis, separé entrenamiento (80 %) y test (20 %) con una semilla fija. La exploración y los prompts al modelo de lenguaje usaron solo entrenamiento, para que las hipótesis se formularan sin ver los datos con los que después se evalúan los modelos.",
                           en: "Before any analysis, I split the data into training (80%) and test (20%) with a fixed seed. Exploration and the prompts to the language model used training data only, so hypotheses were formed without seeing the data later used to evaluate the models." } }
    ] },

    { key: "method", blocks: [
      { type: "flow", steps: [
        { title: { es: "Generar hipótesis", en: "Generate hypotheses" }, text: { es: "Resúmenes descriptivos en pandas → tres prompts con LangChain + Groq (Llama 3.3 70B, temperatura 0) → cuatro hipótesis contrastables.", en: "Descriptive summaries in pandas → three prompts via LangChain + Groq (Llama 3.3 70B, temperature 0) → four testable hypotheses." } },
        { title: { es: "Contrastar", en: "Test" }, text: { es: "Regresión lineal (referencia), Random Forest y Gradient Boosting con GridSearchCV; SHAP para explicar; ANOVA y correlaciones como verificación independiente del modelo.", en: "Linear regression (baseline), Random Forest and Gradient Boosting with GridSearchCV; SHAP to explain; ANOVA and correlations as a model-independent check." } },
        { title: { es: "Revisión crítica", en: "Critical review" }, text: { es: "Un agente de Microsoft 365 Copilot con tres reglas: no introducir resultados ausentes, no afirmar causalidad y separar patrones, interpretaciones del LLM, resultados predictivos y conclusiones sostenibles.", en: "A Microsoft 365 Copilot agent with three rules: add no results not in the inputs, claim no causality, and separate patterns, LLM interpretations, predictive results and defensible conclusions." } }
      ],
        loop: { es: "El agente no sustituye la decisión final sobre qué afirmar: ordena la evidencia para que esa decisión sea explícita.", en: "The agent does not replace the final decision on what to claim: it organises the evidence so that the decision is explicit." } }
    ] },

    { key: "findings", blocks: [
      { type: "table", title: { es: "Rendimiento de los modelos", en: "Model performance" },
        head: [{ es: "Modelo", en: "Model" }, { es: "R² (test)", en: "R² (test)" }, { es: "R² CV (5 particiones)", en: "R² CV (5 folds)" }, "RMSE", "MAE"],
        num: [1, 2, 3, 4],
        rows: [
          [{ es: "Regresión lineal (referencia)", en: "Linear regression (baseline)" }, "0,43", "0,41 ± 0,04", "0,133", "0,106"],
          ["Random Forest", "0,63", "0,62 ± 0,03", "0,106", "0,085"],
          { total: true, cells: ["Gradient Boosting", "0,69", "0,67 ± 0,03", "0,098", "0,078"] }
        ],
        caption: { es: "Test con 500 registros; validación cruzada sobre 2.000. Los 26 puntos de R² frente a la regresión lineal son en sí un hallazgo: la dominancia depende de umbrales e interacciones que un modelo aditivo no capta.", en: "Test on 500 records; cross-validation on 2,000. The 26-point R² gap over linear regression is a finding in itself: dominance depends on thresholds and interactions an additive model can't capture." } },
      { type: "pairs", title: { es: "La negatividad suma en unos temas y resta en otros", en: "Negativity adds in some topics and subtracts in others" }, max: 1,
        groups: [
          { title: { es: "Eventos globales", en: "Global events" }, items: [
            { label: { es: "Negativo", en: "Negative" }, value: 0.74, display: "0,74" },
            { label: { es: "Neutral", en: "Neutral" }, value: 0.59, display: "0,59", muted: true } ] },
          { title: { es: "Economía", en: "Economy" }, items: [
            { label: { es: "Negativo", en: "Negative" }, value: 0.72, display: "0,72" },
            { label: { es: "Neutral", en: "Neutral" }, value: 0.56, display: "0,56", muted: true } ] },
          { title: { es: "Entretenimiento", en: "Entertainment" }, items: [
            { label: { es: "Negativo", en: "Negative" }, value: 0.41, display: "0,41" },
            { label: { es: "Neutral", en: "Neutral" }, value: 0.54, display: "0,54", muted: true },
            { label: { es: "Positivo", en: "Positive" }, value: 0.62, display: "0,62", muted: true } ] }
        ],
        dataHead: [{ es: "Categoría · sentimiento", en: "Category · sentiment" }, { es: "trend_score medio", en: "Mean trend_score" }],
        caption: { es: "Trend_score medio por categoría y sentimiento (n = 2.500). En tecnología y deportes la negatividad apenas cambia el resultado.", en: "Mean trend_score by category and sentiment (n = 2,500). In technology and sports, negativity barely changes the result." } },
      { type: "list", title: { es: "Otros hallazgos", en: "Other findings" }, items: [
        { text: { es: "<b>El engagement se satura.</b> Su efecto crece rápido hasta unos 6.000 puntos y luego se estabiliza; solo el 15 % de las publicaciones de test supera ese umbral.", en: "<b>Engagement saturates.</b> Its effect grows quickly up to about 6,000 points and then levels off; only 15% of test posts exceed that threshold." } },
        { text: { es: "<b>Un efecto que nadie anticipó.</b> La fuente, incluida como control, sí importa: las noticias puntúan más (0,59) que las búsquedas (0,54). Ninguna hipótesis del modelo lo había previsto.", en: "<b>An effect nobody anticipated.</b> Source, included as a control, does matter: news scores higher (0.59) than search (0.54). None of the model's hypotheses predicted it." } }
      ] }
    ] },

    { key: "limits", blocks: [
      { type: "p", text: { es: "Lo que más me sorprendió no fueron los modelos, sino la H4. La explicación sobre el alcance del inglés me pareció razonable; probablemente la habría sostenido yo misma. Que no tuviera respaldo en los datos me obligó a revisar cómo leo las salidas de un modelo de lenguaje: la fluidez de un argumento no dice nada sobre su validez.",
                           en: "What surprised me most wasn't the models but H4. The explanation about the reach of English seemed reasonable; I would probably have argued it myself. Finding no support for it in the data made me rethink how I read language model outputs: how fluent an argument is says nothing about whether it is valid." } },
      { type: "p", text: { es: "Hay una paradoja que no quiero esquivar: el agente que revisó al modelo de lenguaje es, a su vez, un modelo de lenguaje. Su revisión funcionó porque le di evidencia cuantitativa y reglas explícitas. El criterio final sobre qué afirmar siguió siendo mío.",
                           en: "There is a paradox I don't want to dodge: the agent that reviewed the language model is itself a language model. Its review worked because I gave it quantitative evidence and explicit rules. The final judgement on what to claim stayed with me." } },
      { type: "list", title: { es: "Si repitiera el trabajo", en: "If I did it again" }, items: [
        { es: "Ejecutaría los prompts varias veces y con distintos modelos, para medir la estabilidad de las hipótesis.", en: "Run the prompts several times and with different models, to measure how stable the hypotheses are." },
        { es: "Reservaría una parte de los datos solo para las pruebas estadísticas: aquí el ANOVA usa la base completa, incluida la partición que inspiró las hipótesis.", en: "Hold out part of the data for the statistical tests only: here the ANOVA uses the full dataset, including the split that inspired the hypotheses." },
        { es: "Aplicaría el flujo a datos reales.", en: "Apply the workflow to real data." }
      ] }
    ] },

    { key: "takeaways", blocks: [
      { type: "list", items: [
        { es: "Usar la IA generativa con criterio: una hipótesis convincente no es una hipótesis comprobada.", en: "Using generative AI with judgement: a convincing hypothesis is not a tested one." },
        { es: "Diseñar un flujo en el que cada herramienta tiene un rol y un producto que alimenta la fase siguiente.", en: "Designing a workflow where each tool has a role and an output that feeds the next phase." },
        { es: "Proteger la validez desde el diseño: separar entrenamiento y test antes de generar hipótesis.", en: "Protecting validity by design: splitting training and test data before generating hypotheses." },
        { es: "Mantener la decisión final en manos humanas y hacerla explícita.", en: "Keeping the final decision in human hands, and making it explicit." }
      ] }
    ] }
  ]
});
