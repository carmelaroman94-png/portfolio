# Portfolio · Bianca Carmela Roman

**Project Manager | especialista en datos**

Portfolio profesional bilingüe (español / inglés) que muestra mi evolución desde la gestión de proyectos sociales hasta la gestión de proyectos digitales y basados en datos. Cada caso explica qué problema había, qué metodología elegí y por qué, qué decisiones tomé y qué resultados se obtuvieron.

Sitio publicado: <https://carmelaroman94-png.github.io/portfolio/>

## Qué contiene

| Página | Contenido |
| --- | --- |
| `index.html` | Portada: foto, nombre, rol, descripción en inglés y elección de idioma. |
| `home.html` | Bienvenida y acceso a «Acerca de mí» y «Proyectos». |
| `about.html` | Línea de tiempo, cómo trabajo, habilidades, idiomas y formación. |
| `projects.html` | Casos laborales, proyectos académicos y laboratorio de visualización. |
| `case.html?id=…` | Una página por caso, con resumen visible y secciones desplegables. |

Casos, del más reciente al más antiguo:

1. **Grupo tecnológico X** (2026): calidad del dato comercial y analítica del pipeline. Scrum ligero.
2. **Development International** (2024–2025): huella de trabajo infantil en las importaciones de EE. UU. CRISP-DM + Kanban.
3. **Ministerio de Justicia y DDHH de Córdoba** (2018–2019): inclusión laboral de personas trans. PM4R + Marco Lógico.

Proyectos académicos: TFM sobre la multicausalidad de la inflación y «La conversación digital global» (IA aplicada).

## Cómo está construido

HTML, CSS y JavaScript sin frameworks ni paso de compilación. Elegí esta opción porque es fácil de mantener, carga rápido y se puede explicar entera en una entrevista.

- **El contenido está separado del diseño.** Todos los textos están en `content/`. Para cambiar una frase no hace falta tocar HTML.
- **Cifras en los dos idiomas:** las cifras sueltas se escriben en formato español (`6.452`, `0,86`, `96 %`) y en inglés se muestran como `6,452`, `0.86` y `96%`.
- **Un único motor** (`assets/js/app.js`) lee el contenido, aplica el idioma elegido y dibuja cada página.
- **Detalles bajo demanda:** cada caso muestra primero el resumen (problema, rol, período, metodología, cifras clave y entregables) y deja el detalle en secciones desplegables. Los dashboards de Grupo tecnológico X se muestran en pestañas y el Power BI de Development International se carga al abrir la sección.
- **Accesibilidad:** contraste AA o superior con la paleta del sitio, navegación por teclado, enlace para saltar al contenido, gráficos con su tabla de datos, etiquetas que no dependen solo del color y respeto por la preferencia de movimiento reducido.

```
portfolio/
├── index.html            Portada
├── home.html             Inicio
├── about.html            Acerca de mí
├── projects.html         Proyectos
├── case.html             Plantilla de caso (?id=…)
├── 404.html
├── assets/
│   ├── css/styles.css    Estilos y paleta
│   ├── js/app.js         Motor del sitio
│   └── img/              Foto e icono
├── content/
│   ├── site.js           Textos generales, línea de tiempo, habilidades, galería
│   └── projects/         Un archivo por caso
├── dashboards/           Dashboards HTML del caso Grupo tecnológico X
├── docs/EDITAR.md        Guía para editar contenido
└── index_es.html, index_en.html, proyecto_gestion_*.html, dashboard_*.html
                          Redirecciones desde las direcciones del portfolio anterior
```

## Verlo en local

Abre `index.html` en el navegador. También funciona con un servidor local:

```bash
python3 -m http.server 8000
# y abre http://localhost:8000
```

## Editar el contenido

Todo el texto está en `content/site.js` y en `content/projects/*.js`. Cada texto tiene su versión en los dos idiomas:

```js
title: { es: "Calidad del dato comercial", en: "Commercial data quality" }
```

La guía completa, con los tipos de bloque disponibles (tablas, barras, embudo, línea de tiempo, RACI, matriz de stakeholders, veredictos de hipótesis, dashboards embebidos), está en [`docs/EDITAR.md`](docs/EDITAR.md).

## Publicar en GitHub Pages

1. En el repositorio `portfolio`, entra en **Add file → Upload files**.
2. Arrastra **el contenido** de esta carpeta (todos los archivos y subcarpetas, no la carpeta `portfolio` en sí) y pulsa **Commit changes**. Los archivos con el mismo nombre que los anteriores se reemplazan.
3. En **Settings → Pages** debe figurar **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
4. En uno o dos minutos el sitio queda publicado en la misma dirección de siempre. Los enlaces antiguos (`index_es.html`, `dashboard_cloud.html`…) redirigen a las páginas nuevas.

## Datos, fuentes y confidencialidad

- **Grupo tecnológico X** es un pseudónimo que preserva la identidad de la empresa; el contexto es una empresa de software española.
- **Development International:** fuentes públicas: USA Trade Online (U.S. Census Bureau), lista de bienes del ILAB (Departamento de Trabajo de EE. UU.) y coeficientes regionales de Alsamawi et al. (2019, OCDE/UNICEF). Las empresas usuarias no se nombran.
- **Ministerio de Córdoba:** por respeto a las participantes, no hay nombres, fotos ni empresas identificables.
- **La conversación digital global** usa un dataset sintético (Crossplatform Trending Topics 2026, Kaggle), declarado como límite en el propio caso.
- Los dashboards de Power BI se muestran en su idioma original.

---

### English summary

Bilingual (Spanish / English) portfolio of a Project Manager specialised in data. Plain HTML, CSS and JavaScript, no build step, published with GitHub Pages. Content lives in `content/` and is rendered by `assets/js/app.js`. “Grupo tecnológico X” is a pseudonym for a Spanish software company.
