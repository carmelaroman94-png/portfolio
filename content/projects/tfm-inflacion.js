/* =========================================================
   Proyecto académico · TFM «Multicausalidad de la inflación»
   Fuente: reconstrucción reproducible en github.com/carmelaroman94-png/TFM_portfolio
   (resultados recalculados; difieren en parte de la versión entregada).
   ========================================================= */
window.PF = window.PF || {};
(window.PF.projects = window.PF.projects || []).push({
  "id": "tfm-inflacion",
  "type": "academic",
  "sort": 50,
  "year": "2026",
  "title": {
    "es": "Multicausalidad de la inflación: perfiles monetario-fiscales y heterogeneidad de trayectorias (2000-2020)",
    "en": "The multicausality of inflation: monetary-fiscal profiles and heterogeneous inflation paths (2000-2020)"
  },
  "shortTitle": {
    "es": "TFM · Inflación",
    "en": "Thesis · Inflation"
  },
  "org": {
    "es": "Trabajo de Fin de Máster · Máster en Ciencia de Datos aplicada a las Ciencias Sociales, Universidad de Granada",
    "en": "Master's thesis · Master's in Data Science applied to the Social Sciences, Universidad de Granada"
  },
  "problem": {
    "es": "La literatura explica la inflación desde tradiciones distintas (monetaria, institucional, estructural y sociodemográfica) cuyos resultados varían según el contexto. ¿Cómo analizarlas juntas en un único estudio empírico comparado?",
    "en": "The literature explains inflation from different traditions (monetary, institutional, structural and socio-demographic) whose results vary by context. How can they be analysed together in a single comparative empirical study?"
  },
  "role": {
    "es": "Autora. Diseñé la metodología y apliqué las técnicas de análisis.",
    "en": "Author. I designed the methodology and applied the analytical techniques."
  },
  "periodLabel": {
    "es": "Período estudiado",
    "en": "Study period"
  },
  "period": "2000-2020",
  "method": {
    "name": {
      "es": "Investigación cuantitativa",
      "en": "Quantitative research"
    },
    "why": {
      "es": "Machine Learning como herramienta exploratoria, con cuidado de no caer en un trabajo puramente data-driven: la teoría decide las dimensiones y las reglas de decisión se fijan antes de ver los resultados.",
      "en": "Machine learning as an exploratory tool, careful not to become purely data-driven: theory decides the dimensions, and decision rules are fixed before looking at the results."
    }
  },
  "tools": {
    "es": "<ul><li>Python y sus librerías: pandas, scikit-learn, statsmodels y Plotly.</li><li>Bases de datos: World Development Indicators (Banco Mundial), WITS y V-Dem v16.</li><li>Modelo de lenguaje: GPT-OSS-120B, ejecutado mediante Groq.</li></ul>",
    "en": "<ul><li>Python and its libraries: pandas, scikit-learn, statsmodels and Plotly.</li><li>Databases: World Development Indicators (World Bank), WITS and V-Dem v16.</li><li>Language model: GPT-OSS-120B, run through Groq.</li></ul>"
  },
  "techniques": {
    "es": "<ul><li>Imputación KNN.</li><li>PCA y K-means.</li><li>Regresión OLS con errores HC3.</li><li>Pruebas por permutación y bootstrap.</li><li>Corrección de Holm.</li><li>Validación cruzada fuera de muestra.</li></ul>",
    "en": "<ul><li>KNN imputation.</li><li>PCA and K-means.</li><li>OLS regression with HC3 errors.</li><li>Permutation tests and bootstrap.</li><li>Holm correction.</li><li>Out-of-sample cross-validation.</li></ul>"
  },
  "card": {
    "problem": null,
    "pointsCols": 2,
    "points": [
      {
        "es": "Modelos de lenguaje",
        "en": "Language models"
      },
      "Clustering",
      {
        "es": "Reducción de dimensionalidad",
        "en": "Dimensionality reduction"
      },
      {
        "es": "Regresiones",
        "en": "Regression models"
      }
    ]
  },
  "before": [
    {
      "title": {
        "es": "Hipótesis",
        "en": "Hypotheses"
      },
      "blocks": [
        {
          "type": "verdicts",
          "items": [
            {
              "id": "H1",
              "text": {
                "es": "La similitud en los perfiles monetario-fiscales no implica necesariamente trayectorias inflacionarias homogéneas entre países.",
                "en": "Similar monetary-fiscal profiles do not necessarily imply homogeneous inflation paths across countries."
              }
            },
            {
              "id": "H2",
              "text": {
                "es": "Con perfiles monetario-fiscales comparables, cada dimensión no monetaria (institucional, estructural y sociodemográfica) aporta por separado a explicar las trayectorias.",
                "en": "Given comparable monetary-fiscal profiles, each non-monetary dimension (institutional, structural and socio-demographic) contributes separately to explaining inflation paths."
              }
            },
            {
              "id": "H3",
              "text": {
                "es": "Incorporar juntas las cuatro dimensiones caracteriza mejor las trayectorias que la dimensión monetario-fiscal sola.",
                "en": "Combining all four dimensions characterises inflation paths better than the monetary-fiscal dimension alone."
              }
            }
          ]
        }
      ]
    },
    {
      "title": {
        "es": "Método",
        "en": "Method"
      },
      "blocks": [
        {
          "type": "flow",
          "steps": [
            {
              "title": {
                "es": "PCA por dimensión",
                "en": "PCA by dimension"
              },
              "text": {
                "es": "12 PCA independientes (4 dimensiones × 3 estadísticos), tras eliminar duplicados casi exactos (|r| > 0,99); KMO ≥ 0,60 y 70 % de varianza retenida.",
                "en": "12 independent PCAs (4 dimensions × 3 statistics), after removing near-duplicates (|r| > 0.99); KMO ≥ 0.60 and 70% of variance retained."
              }
            },
            {
              "title": {
                "es": "Clustering",
                "en": "Clustering"
              },
              "text": {
                "es": "Grilla de K-means, jerárquico y mezclas gaussianas sobre el perfil monetario-fiscal. Regla fijada antes de ver los resultados: grupos de ≥ 5 países, estabilidad bootstrap (ARI ≥ 0,60) y máxima silhouette. Elige K-means con k = 5 (ARI 0,86).",
                "en": "A grid of K-means, hierarchical and Gaussian mixtures on the monetary-fiscal profile. Rule fixed before seeing results: groups of ≥ 5 countries, bootstrap stability (ARI ≥ 0.60) and maximum silhouette. It selects K-means with k = 5 (ARI 0.86)."
              }
            },
            {
              "title": {
                "es": "Prueba de H1",
                "en": "Testing H1"
              },
              "text": {
                "es": "Kruskal-Wallis, prueba por permutación y descomposición de la variación entre y dentro de los grupos, con la región ONU como referencia.",
                "en": "Kruskal-Wallis, a permutation test and a between/within-group decomposition of variation, with UN region as a benchmark."
              }
            },
            {
              "title": {
                "es": "Regresión anidada",
                "en": "Nested regression"
              },
              "text": {
                "es": "Modelo monetario frente a modelos que añaden cada dimensión (H2) o las tres juntas (H3), con 4 componentes por dimensión para que ningún bloque tenga ventaja. Inferencia con HC3, permutación, bootstrap y corrección de Holm; tamaño del efecto (f²), validación fuera de muestra y ocho especificaciones de robustez.",
                "en": "A monetary model versus models adding each dimension (H2) or all three together (H3), with 4 components per dimension so no block has an advantage. Inference with HC3, permutation, bootstrap and Holm correction; effect size (f²), out-of-sample validation and eight robustness specifications."
              }
            }
          ]
        }
      ]
    }
  ],
  "dashboardsNote": {
    "es": "Seis dashboards interactivos en dos bloques: análisis exploratorio (datos, clasificación, inflación, distribuciones y casos extremos) y modelado (H1 y H2-H3).",
    "en": "Six interactive dashboards in two blocks: exploratory analysis (data, classification, inflation, distributions and extreme cases) and modelling (H1 and H2-H3)."
  },
  "dashTabs": false,
  "dashboards": [
    {
      "name": {
        "es": "Inicio",
        "en": "Overview"
      },
      "text": {
        "es": "Pregunta de investigación, veredicto de cada hipótesis y acceso a todos los análisis.",
        "en": "Research question, verdict on each hypothesis and access to every analysis."
      },
      "src": "https://carmelaroman94-png.github.io/TFM_portfolio/dashboards/index.html"
    }
  ],
  "sections": []
});
