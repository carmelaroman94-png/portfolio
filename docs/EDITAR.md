# Guía para editar el contenido

Todo el texto del sitio está en dos lugares:

- `content/site.js`: textos de la interfaz, portada de inicio, «Acerca de mí» (línea de tiempo, cómo trabajo, habilidades, idiomas, formación), página de proyectos y laboratorio de visualización.
- `content/projects/<id>.js`: un archivo por caso.

No hace falta tocar `assets/js/app.js` ni el HTML para cambiar contenido.

## Reglas básicas

1. **Cada texto va en los dos idiomas:** `{ es: "…", en: "…" }`. Si un texto es igual en ambos (un nombre propio, una cifra), puede ir como texto simple: `"Power BI"`.
   Las cifras sueltas se escriben en formato español (`"6.452"`, `"0,86"`, `"96 %"`); en inglés el sitio las muestra como `6,452`, `0.86` y `96%`. Si la cifra lleva texto (`"7 días"`), escríbela en los dos idiomas.
2. **Se puede usar HTML sencillo** dentro de los textos: `<b>`, `<i>`, `<a href="…">`. Para el signo «menor que» escribe `&lt;`.
3. **Cuidado con las comillas y las comas.** Cada elemento de una lista termina en coma, salvo el último. Si la página queda en blanco, casi siempre es una coma o una comilla de más o de menos: abre la consola del navegador (F12) y busca el error.

## Añadir un caso nuevo

1. Copia uno de los archivos de `content/projects/` y cámbiale el nombre (por ejemplo, `nuevo-caso.js`).
2. Cambia `id` (el mismo nombre del archivo, sin `.js`), `type` (`"work"` o `"academic"`) y `sort`. El orden es de mayor a menor `sort`: los laborales usan 100–300 y los académicos 40–50.
3. Añade el archivo en las cuatro páginas que cargan contenido (`home.html`, `about.html`, `projects.html` y `case.html`), antes de `assets/js/app.js`:

```html
<script src="content/projects/nuevo-caso.js"></script>
```

## Estructura de un caso

```js
{
  id: "nuevo-caso",
  type: "work",                // "work" o "academic"
  sort: 250,
  year: "2025",
  title: { es: "…", en: "…" },
  shortTitle: "…",             // se usa en los botones Anterior / Siguiente
  org: { es: "…", en: "…" },
  orgNote: { es: "…", en: "…" },        // opcional: nota bajo la organización
  academicNote: { es: "…", en: "…" },   // opcional, para proyectos académicos
  problem: { es: "…", en: "…" },
  role: { es: "…", en: "…" },
  period: { es: "…", en: "…" },
  method: { name: "Scrum", why: { es: "…", en: "…" } },
  tools: { es: "…", en: "…" },
  metrics: [ { value: "6.452", label: { es: "…", en: "…" } } ],  // cifras destacadas del caso (opcional)
  deliverables: [ { es: "…", en: "…" } ],
  highlight: { title: { es: "…", en: "…" }, blocks: [ /* bloques */ ] },     // lo que se ve sin desplegar
  sections: [ { key: "context", blocks: [ /* bloques */ ] } ]                 // secciones desplegables
}
```

Claves de sección disponibles (`key`): `context`, `challenge`, `objectives`, `role`, `approach`, `stakeholders`, `planning`, `data`, `results`, `risks`, `learnings`, `today`, `takeaways`, `question`, `dataset`, `method`, `findings`, `limits`. Sus nombres en pantalla están en `site.js → sections`.

## Tipos de bloque

Todos los bloques aceptan `title` y `caption` opcionales.

| Tipo | Para qué | Campos |
| --- | --- | --- |
| `p` | Párrafo | `text` |
| `list` | Lista | `items` (textos) |
| `note` | Texto destacado | `heading` (opcional), `text` |
| `table` | Tabla | `head`, `rows` (una fila destacada: `{ total: true, cells: [...] }`), `num` (columnas numéricas) |
| `kpis` | Cifras grandes | `items: [{ value, label }]` |
| `bars` | Barras horizontales | `items: [{ label, value, display, muted }]`, `max`, `dataHead` (añade «ver los datos en tabla») |
| `pairs` | Grupos de barras para comparar | `groups: [{ title, items }]`, `max`, `dataHead` |
| `funnel` | Embudo con conversión entre etapas | `steps: [{ label, value, loss }]` |
| `timeline` | Línea de tiempo | `items: [{ when, title, text, out }]`, `outLabel` (nombre del campo `out`) |
| `flow` | Proceso en pasos | `steps: [{ title, text }]`, `loop` (texto sobre la vuelta atrás) |
| `raci` | Matriz RACI filtrable | `roles`, `rows: [{ task, cells: ["R","A","C","I",""] }]` |
| `matrix` | Matriz interés–influencia | `items: [{ name, role, interest, influence, strategy }]` con `low`, `mid` o `high` |
| `verdicts` | Hipótesis y veredictos | `items: [{ id, text, verdict, result, evidence }]`, `result`: `yes`, `partial` o `no` |
| `embed` | Dashboard embebido | `name`, `text`, `src` (ruta local o enlace de Power BI), `autoload` (`true` para mostrarlo sin hacer clic) |

## Cambiar la paleta o la tipografía

Están al principio de `assets/css/styles.css`, en `:root`. Si cambias un color, comprueba el contraste del texto (mínimo 4,5:1 para texto normal).
