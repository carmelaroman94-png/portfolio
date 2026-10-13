/* =========================================================
   app.js · Motor del portfolio
   - Lee el contenido de window.PF (content/*.js)
   - Resuelve el idioma (?lang=es|en)
   - Pinta cabecera, pie y la página indicada en <body data-page="...">
   Sin dependencias externas.
   ========================================================= */
(function () {
  "use strict";

  var PF = window.PF || { site: {}, projects: [] };
  var SITE = PF.site;
  var UI = SITE.ui || {};

  /* ---------- Idioma ---------- */
  var params = new URLSearchParams(location.search);
  var LANG = (function () {
    var q = params.get("lang");
    if (q === "es" || q === "en") { store("lang", q); return q; }
    var saved = read("lang");
    if (saved === "es" || saved === "en") return saved;
    return (navigator.language || "es").toLowerCase().indexOf("es") === 0 ? "es" : "en";
  })();
  document.documentElement.lang = LANG;

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* almacenamiento no disponible */ } }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  /* Traduce: acepta string (igual en ambos idiomas) u objeto {es, en} */
  function t(x) {
    if (x === null || x === undefined) return "";
    if (typeof x === "string" || typeof x === "number") return String(x);
    if (Array.isArray(x)) return x.map(t);
    return x[LANG] !== undefined ? x[LANG] : (x.es !== undefined ? x.es : "");
  }
  function ui(key) { return t(UI[key]) || key; }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* Enlaces internos que conservan el idioma */
  function url(page, extra) {
    var q = "lang=" + LANG + (extra ? "&" + extra : "");
    return page + "?" + q;
  }
  function caseUrl(id) { return url("case.html", "id=" + encodeURIComponent(id)); }

  /* ---------- Evidencia ---------- */
  var EV = {
    real: { es: "Real", en: "Actual data" },
    rec: { es: "Reconstruido", en: "Reconstructed" },
    ilu: { es: "Ilustrativo", en: "Illustrative" }
  };
  function ev(kind) {
    if (!kind || !EV[kind]) return "";
    return '<span class="ev ev--' + kind + '">' + esc(t(EV[kind])) + "</span>";
  }

  /* ---------- Iconos de «Cómo trabajo» (SVG de trazo) ---------- */
  function svg(paths) {
    return '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" focusable="false">' + paths + "</svg>";
  }
  var ICONS = {
    // un camino que se abre en dos: elegir el marco según el problema
    method: svg('<path d="M12 22v-8"/><path d="M12 14 4 4"/><path d="M12 14l8-10"/><path d="M4 9.5V4h5.5"/><path d="M14.5 4H20v5.5"/>'),
    // entregas que crecen paso a paso, con validación
    increments: svg('<path d="M2 21.5h20"/><rect x="3.5" y="15.5" width="4.5" height="6" rx="1"/><rect x="9.75" y="10.5" width="4.5" height="11" rx="1"/><rect x="16" y="5.5" width="4.5" height="16" rx="1"/><path d="m3 6.5 2.2 2.2L9.5 4.4"/>'),
    // diana: objetivos concretos y medibles
    target: svg('<circle cx="11" cy="13" r="9"/><circle cx="11" cy="13" r="5.2"/><circle cx="11" cy="13" r="1.4"/><path d="M11 13 21 3"/><path d="M17 3h4v4"/>'),
    // oreja: escucha activa
    listen: svg('<path d="M5 9a7 7 0 1 1 14 0c0 6.5-6.5 6.8-6.5 10.5a3.5 3.5 0 0 1-7 0"/><path d="M15.5 9a3 3 0 0 0-6 0v1.2a2.3 2.3 0 1 1 0 4.6"/>'),
    // tres personas: trabajo colaborativo
    team: svg('<circle cx="12" cy="7" r="3.5"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/><circle cx="4.5" cy="10" r="2.5"/><path d="M1 19.5a4 4 0 0 1 5-3.9"/><circle cx="19.5" cy="10" r="2.5"/><path d="M23 19.5a4 4 0 0 0-5-3.9"/>')
  };


  /* ---------- Cabecera y pie ---------- */
  function header(active) {
    var other = LANG === "es" ? "en" : "es";
    var p = new URLSearchParams(location.search); p.set("lang", other);
    var switchHref = location.pathname.split("/").pop() + "?" + p.toString();
    return '<a class="skip-link" href="#main">' + esc(ui("skip")) + "</a>" +
      '<header class="site-header"><div class="wrap">' +
      '<a class="brand" href="' + url("home.html") + '">Carmela Roman <span>' + esc(t(SITE.role)) + "</span></a>" +
      '<nav class="nav" aria-label="' + esc(ui("nav_label")) + '">' +
      '<a href="' + url("about.html") + '"' + (active === "about" ? ' aria-current="page"' : "") + ">" + esc(ui("nav_about")) + "</a>" +
      '<a href="' + url("projects.html") + '"' + (active === "projects" || active === "case" ? ' aria-current="page"' : "") + ">" + esc(ui("nav_projects")) + "</a>" +
      '<a class="lang-switch" href="' + esc(switchHref) + '" lang="' + other + '" hreflang="' + other + '">' + (other === "en" ? "English" : "Español") + "</a>" +
      "</nav></div></header>";
  }

  function footer() {
    var c = SITE.contact || {};
    return '<footer class="site-footer"><div class="wrap">' +
      "<div>Bianca Carmela Roman · " + esc(t(SITE.role)) + "<br>" + esc(ui("dash_lang_note")) + "</div>" +
      '<div class="footer-links">' +
      '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>" +
      '<a href="' + esc(c.linkedin) + '" rel="noopener">LinkedIn</a>' +
      "</div></div></footer>";
  }

  /* ---------- Bloques de contenido ---------- */
  function block(b) {
    if (!b) return "";
    var title = b.title ? '<h4 class="block-title">' + t(b.title) + (b.ev ? " " + ev(b.ev) : "") + "</h4>" : "";
    var cap = b.caption ? '<p class="caption">' + t(b.caption) + (b.ev && !b.title ? " " + ev(b.ev) : "") + "</p>" : "";
    var inner = "";
    switch (b.type) {
      case "p":
        return '<p class="block">' + t(b.text) + (b.ev ? " " + ev(b.ev) : "") + "</p>";
      case "list":
        inner = "<ul>" + b.items.map(function (i) {
          if (typeof i === "object" && i.text) return "<li>" + t(i.text) + (i.ev ? " " + ev(i.ev) : "") + "</li>";
          return "<li>" + t(i) + "</li>";
        }).join("") + "</ul>";
        break;
      case "note":
        inner = '<div class="callout">' + (b.heading ? "<h4>" + t(b.heading) + "</h4>" : "") + "<p>" + t(b.text) + "</p></div>";
        break;
      case "table": inner = table(b); break;
      case "kpis": inner = figures(b.items); break;
      case "bars": inner = bars(b); break;
      case "pairs": inner = pairs(b); break;
      case "funnel": inner = funnel(b); break;
      case "timeline": inner = timeline(b.items, b.outLabel); break;
      case "flow": inner = flow(b); break;
      case "raci": inner = raci(b); break;
      case "matrix": inner = matrix(b); break;
      case "verdicts": inner = verdicts(b.items); break;
      case "embed": inner = embed(b); break;
      default: inner = "";
    }
    return '<div class="block">' + title + inner + cap + "</div>";
  }

  function table(b) {
    var head = "<thead><tr>" + b.head.map(function (h, i) {
      return '<th scope="col"' + (b.num && b.num.indexOf(i) > -1 ? ' class="num"' : "") + ">" + t(h) + "</th>";
    }).join("") + "</tr></thead>";
    var body = "<tbody>" + b.rows.map(function (r) {
      var cells = r.cells || r;
      return "<tr" + (r.total ? ' class="is-total"' : "") + ">" + cells.map(function (c, i) {
        var tag = i === 0 && b.rowHeaders !== false ? "th" : "td";
        var cls = b.num && b.num.indexOf(i) > -1 ? ' class="num"' : "";
        var content = typeof c === "object" && c !== null && c.v !== undefined ? t(c.v) + (c.ev ? " " + ev(c.ev) : "") : t(c);
        return "<" + tag + (tag === "th" ? ' scope="row"' : "") + cls + ">" + content + "</" + tag + ">";
      }).join("") + "</tr>";
    }).join("") + "</tbody>";
    return '<div class="table-scroll"><table>' + (b.summary ? "<caption class=\"visually-hidden\">" + t(b.summary) + "</caption>" : "") + head + body + "</table></div>";
  }

  function figures(items) {
    return '<ul class="figures">' + items.map(function (k) {
      return '<li><span class="figure-value">' + t(k.value) + '</span><span class="figure-label">' + t(k.label) + "</span>" +
        (k.ev ? '<span class="figure-ev">' + ev(k.ev) + "</span>" : "") + "</li>";
    }).join("") + "</ul>";
  }

  function dataTable(head, rows) {
    return '<details class="data-toggle"><summary>' + esc(ui("see_data")) + "</summary>" +
      table({ head: head, rows: rows, num: [1] }) + "</details>";
  }

  function bars(b) {
    var max = b.max || Math.max.apply(null, b.items.map(function (i) { return i.value; }));
    var html = '<ul class="hbars">' + b.items.map(function (i) {
      var pct = Math.max(0, Math.min(100, (i.value / max) * 100));
      var label = t(i.display || String(i.value));
      var inside = pct > 18;
      return '<li class="hbar" title="' + esc(t(i.label) + ": " + label) + '">' +
        '<span class="hbar-label">' + t(i.label) + "</span>" +
        '<span class="hbar-track" aria-hidden="true"><span class="hbar-fill' + (i.muted ? " is-muted" : "") + '" style="width:' + pct.toFixed(1) + '%"></span>' +
        '<span class="hbar-value" style="' + (inside ? "left:0.5rem;color:#1E2A25" : "left:calc(" + pct.toFixed(1) + "% + 0.5rem)") + '">' + esc(label) + "</span></span>" +
        '<span class="visually-hidden">' + esc(label) + "</span></li>";
    }).join("") + "</ul>";
    if (b.dataHead) html += dataTable(b.dataHead, b.items.map(function (i) { return [t(i.label), t(i.display || String(i.value))]; }));
    return html;
  }

  function pairs(b) {
    return '<div class="pairs">' + b.groups.map(function (g) {
      return '<div class="pair"><h4>' + t(g.title) + "</h4>" + bars({ items: g.items, max: b.max }) + "</div>";
    }).join("") + "</div>" +
      (b.dataHead ? dataTable(b.dataHead, b.groups.reduce(function (acc, g) {
        return acc.concat(g.items.map(function (i) { return [t(g.title) + " · " + t(i.label), t(i.display)]; }));
      }, [])) : "");
  }

  function funnel(b) {
    var max = b.steps[0].value;
    return '<ol class="funnel">' + b.steps.map(function (s, idx) {
      var prev = idx > 0 ? b.steps[idx - 1].value : null;
      var conv = prev ? Math.round((s.value / prev) * 100) : null;
      var pct = (s.value / max) * 100;
      return '<li class="funnel-step">' +
        (idx > 0 && s.loss ? '<p class="funnel-loss">' + t(s.loss) + "</p>" : "") +
        '<div class="funnel-row"><div class="funnel-bar" style="width:' + pct.toFixed(1) + '%">' + s.value + "</div>" +
        '<div class="funnel-meta"><span class="lbl">' + t(s.label) + "</span>" +
        (conv !== null ? '<span class="conv">' + conv + (LANG === "es" ? " % " : "% ") + esc(ui("of_previous")) + "</span>" : "") +
        "</div></div></li>";
    }).join("") + "</ol>";
  }

  function timeline(items, outLabel) {
    var lbl = outLabel ? t(outLabel) : esc(ui("output"));
    return '<ol class="tl">' + items.map(function (i) {
      return '<li class="tl-item"><div class="tl-when">' + t(i.when) + "</div>" +
        (i.title ? '<div class="tl-title">' + t(i.title) + (i.ev ? " " + ev(i.ev) : "") + "</div>" : "") +
        (i.text ? "<p>" + t(i.text) + "</p>" : "") +
        (i.out ? '<p class="small muted"><b>' + lbl + ":</b> " + t(i.out) + "</p>" : "") + "</li>";
    }).join("") + "</ol>";
  }

  function flow(b) {
    return '<ol class="flow">' + b.steps.map(function (s) {
      return "<li><h4>" + t(s.title) + "</h4>" + (s.text ? "<p>" + t(s.text) + "</p>" : "") + "</li>";
    }).join("") + "</ol>" + (b.loop ? '<p class="flow-loop">' + t(b.loop) + "</p>" : "");
  }

  function verdicts(items) {
    return '<ul class="verdicts">' + items.map(function (v) {
      return '<li class="verdict"><span class="verdict-id">' + esc(v.id) + "</span><div>" +
        '<p class="verdict-text">' + t(v.text) + "</p>" +
        '<span class="verdict-result" data-v="' + v.result + '">' + t(v.verdict) + "</span>" +
        (v.evidence ? '<p class="small muted" style="margin-top:.5rem">' + t(v.evidence) + "</p>" : "") +
        "</div></li>";
    }).join("") + "</ul>";
  }

  var raciCount = 0;
  function raci(b) {
    var id = "raci-" + (++raciCount);
    var head = "<thead><tr><th scope=\"col\">" + esc(ui("activity")) + "</th>" + b.roles.map(function (r, i) {
      return '<th scope="col" class="num"><button type="button" data-col="' + (i + 1) + '" aria-pressed="false">' + t(r) + "</button></th>";
    }).join("") + "</tr></thead>";
    var body = "<tbody>" + b.rows.map(function (r) {
      return '<tr tabindex="0"><th scope="row">' + t(r.task) + "</th>" + r.cells.map(function (c, i) {
        return '<td class="raci-cell" data-col="' + (i + 1) + '" data-v="' + esc(c) + '" title="' + esc(c ? t(SITE.raci[c]) : "—") + '">' + (c || "—") + "</td>";
      }).join("") + "</tr>";
    }).join("") + "</tbody>";
    var key = '<div class="raci-key">' + ["R", "A", "C", "I"].map(function (k) { return "<span><b>" + k + "</b> = " + esc(t(SITE.raci[k])) + "</span>"; }).join("") + "</div>";
    return '<p class="small muted">' + esc(ui("raci_hint")) + '</p><div class="table-scroll"><table class="raci" id="' + id + '">' + head + body + "</table></div>" + key;
  }

  var matrixCount = 0;
  function matrix(b) {
    var id = "mx-" + (++matrixCount);
    var levels = ["high", "mid", "low"]; // filas: influencia alta arriba
    var cols = ["low", "mid", "high"];   // columnas: interés bajo a la izquierda
    var cells = "";
    levels.forEach(function (inf) {
      cols.forEach(function (int) {
        var actors = b.items.filter(function (a) { return a.influence === inf && a.interest === int; });
        var key = (inf === "high" || inf === "mid") && int === "high";
        cells += '<div class="matrix-cell' + (key ? " is-key" : "") + '">' + actors.map(function (a, k) {
          return '<button type="button" class="actor" aria-expanded="false" aria-controls="' + id + '-detail" data-detail="' +
            esc("<b>" + t(a.name) + "</b> " + (a.role ? "(" + t(a.role) + "). " : "") + t(a.strategy)) + '">' + t(a.name) + "</button>";
        }).join("") + "</div>";
      });
    });
    return '<div class="matrix-wrap" id="' + id + '">' +
      '<div class="matrix-ylabel">' + esc(ui("influence")) + " ↑</div>" +
      '<div class="matrix" role="group" aria-label="' + esc(ui("matrix_label")) + '">' + cells + "</div>" +
      '<div></div><div class="matrix-axis"><span>' + esc(ui("low")) + "</span><span>" + esc(ui("interest")) + " →</span><span>" + esc(ui("high")) + "</span></div>" +
      "</div>" +
      '<p class="actor-detail callout" id="' + id + '-detail" aria-live="polite">' + esc(ui("matrix_hint")) + "</p>";
  }

  function embed(b) {
    var external = /^https?:/.test(b.src);
    return '<div class="embed"><h4>' + t(b.name) + "</h4>" + (b.text ? '<p class="small muted">' + t(b.text) + "</p>" : "") +
      '<div class="embed-actions">' +
      '<button type="button" class="btn btn--quiet" data-embed="' + esc(b.src) + '" data-title="' + esc(t(b.name)) + '">' + esc(ui("load_here")) + "</button>" +
      '<a class="btn btn--quiet" href="' + esc(b.src) + '" target="_blank" rel="noopener">' + esc(ui(external ? "open_new" : "open_full")) + "</a>" +
      "</div></div>";
  }

  /* ---------- Componentes compartidos ---------- */
  function caseRow(p) {
    var figs = (p.metrics || []).slice(0, 3).map(function (m) {
      return "<li><b>" + t(m.value) + "</b>" + t(m.label) + "</li>";
    }).join("");
    return '<li class="case-row" data-type="' + p.type + '">' +
      '<div class="case-year">' + esc(p.year) + "</div>" +
      "<div>" +
      '<h3 class="case-title"><a href="' + caseUrl(p.id) + '">' + t(p.title) + "</a></h3>" +
      '<p class="case-org">' + t(p.org) + "</p>" +
      '<p class="case-problem">' + t(p.problem) + "</p>" +
      (figs ? '<ul class="case-figures">' + figs + "</ul>" : "") +
      "</div>" +
      '<div class="case-side"><span class="method-chip">' + t(p.method.name) + "</span>" +
      '<span class="context-chip">' + esc(ui(p.type === "work" ? "ctx_work" : "ctx_academic")) + "</span>" +
      '<a class="btn btn--quiet" href="' + caseUrl(p.id) + '">' + esc(ui("read_case")) + "</a></div>" +
      "</li>";
  }

  function bySort(a, b) { return (b.sort || 0) - (a.sort || 0); }

  /* ---------- Páginas ---------- */
  function pageHome() {
    var h = SITE.home;
    return '<section class="welcome"><div class="wrap">' +
      "<h1>" + t(h.title) + "</h1>" +
      '<p class="welcome-lead">' + t(h.lead) + "</p>" +
      '<div class="doors">' +
      '<a class="door" href="' + url("about.html") + '"><span class="door-title">' + esc(ui("nav_about")) + '</span><span class="door-text">' + t(h.about_text) + "</span></a>" +
      '<a class="door" href="' + url("projects.html") + '"><span class="door-title">' + esc(ui("nav_projects")) + '</span><span class="door-text">' + t(h.projects_text) + "</span></a>" +
      "</div></div></section>";
  }

  function pageAbout() {
    var a = SITE.about;
    var journey = '<ol class="journey">' + a.timeline.map(function (y, i) {
      var body = (y.paras || []).map(function (p) { return "<p>" + t(p) + "</p>"; }).join("") +
        (y.list ? "<ul" + (y.list.length > 6 ? ' class="cols"' : "") + ">" + y.list.map(function (l) { return "<li>" + t(l) + "</li>"; }).join("") + "</ul>" : "") +
        (y.after || []).map(function (p) { return "<p>" + t(p) + "</p>"; }).join("") +
        (y.callout ? '<div class="callout"><h4>' + t(y.callout.heading) + "</h4><p>" + t(y.callout.text) + "</p></div>" : "") +
        (y.links ? '<p class="small">' + y.links.map(function (l) { return '<a href="' + caseUrl(l.id) + '">' + t(l.label) + "</a>"; }).join(" &nbsp; ") + "</p>" : "");
      return '<li><div class="journey-year">' + esc(y.year) + "</div>" +
        "<details" + (i === a.timeline.length - 1 ? " open" : "") + "><summary>" + t(y.title) + "</summary>" +
        '<div class="journey-body">' + body + "</div></details></li>";
    }).join("") + "</ol>";

    var principles = '<ul class="principle-list">' + a.principles.map(function (p) {
      return "<li>" + (ICONS[p.icon] ? '<span class="p-icon" aria-hidden="true">' + ICONS[p.icon] + "</span>" : "") +
        "<h3>" + t(p.title) + "</h3>" + (p.text ? "<p>" + t(p.text) + "</p>" : "") + "</li>";
    }).join("") + "</ul>";

    var skills = '<div class="skills">' + a.skills.map(function (s) {
      return "<div><h3>" + t(s.title) + "</h3><p>" + t(s.text) + "</p></div>";
    }).join("") + "</div>";

    var langs = '<ul class="langs">' + a.languages.map(function (l) {
      return "<li>" + t(l.name) + "<b>" + t(l.level) + "</b></li>";
    }).join("") + "</ul>";

    var edu = "<ul>" + a.education.map(function (e) { return "<li>" + t(e) + "</li>"; }).join("") + "</ul>";

    return '<section class="page-head"><div class="wrap"><h1>' + esc(ui("nav_about")) + "</h1>" +
      a.intro.map(function (p) { return "<p>" + t(p) + "</p>"; }).join("") + "</div></section>" +
      '<section class="section"><div class="wrap"><h2>' + t(a.timeline_title) + "</h2>" +
      '<p class="section-intro">' + t(a.timeline_intro) + "</p>" + journey + "</div></section>" +
      '<section class="section"><div class="wrap"><h2>' + t(a.principles_title) + "</h2>" + principles + "</div></section>" +
      '<section class="section"><div class="wrap"><h2>' + t(a.skills_title) + "</h2>" + skills +
      "<h3 style=\"margin-top:2rem\">" + t(a.languages_title) + "</h3>" + langs +
      "<h3 style=\"margin-top:2rem\">" + t(a.education_title) + "</h3>" + edu + "</div></section>";
  }

  function pageProjects() {
    var pr = SITE.projectsPage;
    var all = PF.projects.slice().sort(bySort);
    var work = all.filter(function (p) { return p.type === "work"; });
    var acad = all.filter(function (p) { return p.type === "academic"; });

    var methods = '<div class="method-grid">' + pr.methods.map(function (m) {
      return '<div class="method-card"><h3>' + t(m.name) + '</h3><p class="when">' + t(m.when) + "</p><p>" + t(m.why) + "</p>" +
        '<p class="small"><a href="' + caseUrl(m.case) + '">' + t(m.caseLabel) + "</a></p></div>";
    }).join("") + "</div>";

    var gallery = SITE.gallery;
    var tiles = '<div class="gallery">' + gallery.items.map(function (g) {
      return '<div class="tile"><h3>' + t(g.name) + "</h3><p>" + t(g.text) + "</p>" +
        '<button type="button" class="btn btn--quiet" data-view="' + esc(g.src) + '" data-title="' + esc(t(g.name)) + '">' + esc(ui("open_dashboard")) + "</button></div>";
    }).join("") + "</div>";

    return '<section class="page-head"><div class="wrap"><h1>' + esc(ui("nav_projects")) + "</h1><p>" + t(pr.intro) + "</p></div></section>" +
      '<section class="section" id="laborales"><div class="wrap"><h2>' + t(pr.work_title) + '</h2><p class="section-intro">' + t(pr.work_intro) + "</p>" +
      '<ul class="case-list">' + work.map(caseRow).join("") + "</ul></div></section>" +
      '<section class="section"><div class="wrap"><h2>' + t(pr.methods_title) + '</h2><p class="section-intro">' + t(pr.methods_intro) + "</p>" + methods + "</div></section>" +
      '<section class="section" id="academicos"><div class="wrap"><h2>' + t(pr.academic_title) + "</h2>" +
      '<div class="callout" style="margin-bottom:1.5rem"><p>' + t(pr.academic_note) + "</p></div>" +
      '<ul class="case-list">' + acad.map(caseRow).join("") + "</ul></div></section>" +
      '<section class="section" id="visualizacion"><div class="wrap"><h2>' + t(gallery.title) + '</h2><p class="section-intro">' + t(gallery.intro) + "</p>" +
      '<ol class="principles">' + gallery.principles.map(function (p) { return "<li><b>" + t(p.name) + "</b><span>" + t(p.text) + "</span></li>"; }).join("") + "</ol>" +
      tiles + '<p class="caption">' + t(gallery.note) + "</p></div></section>" +
      '<dialog class="viewer" id="viewer"><div class="viewer-bar"><h2 id="viewer-title"></h2><button type="button" class="btn btn--quiet" data-close>' + esc(ui("close")) + '</button></div><iframe title="" loading="lazy" allowfullscreen></iframe></dialog>';
  }

  function pageCase() {
    var id = params.get("id");
    var list = PF.projects.slice().sort(bySort);
    var idx = list.findIndex(function (p) { return p.id === id; });
    var p = list[idx];
    if (!p) {
      return '<section class="page-head"><div class="wrap"><h1>' + esc(ui("not_found")) + '</h1><p><a href="' + url("projects.html") + '">' + esc(ui("back_projects")) + "</a></p></div></section>";
    }
    document.title = t(p.title) + " | Carmela Roman";

    var summary = '<dl class="summary">' +
      '<div class="wide"><dt>' + esc(ui("problem")) + "</dt><dd>" + t(p.problem) + "</dd></div>" +
      "<div><dt>" + esc(ui("role")) + "</dt><dd>" + t(p.role) + "</dd></div>" +
      "<div><dt>" + esc(ui("period")) + "</dt><dd>" + t(p.period) + "</dd></div>" +
      "<div><dt>" + esc(ui("method")) + "</dt><dd><b>" + t(p.method.name) + "</b><br><span class=\"small muted\">" + t(p.method.why) + "</span></dd></div>" +
      (p.tools ? "<div><dt>" + esc(ui("tools")) + "</dt><dd class=\"small\">" + t(p.tools) + "</dd></div>" : "") +
      "</dl>";

    var deliverables = p.deliverables ? "<h2>" + esc(ui("deliverables")) + '</h2><ul class="deliverables">' +
      p.deliverables.map(function (d) { return "<li>" + t(d) + "</li>"; }).join("") + "</ul>" : "";

    var highlight = p.highlight ? '<section class="highlight" aria-label="' + esc(t(p.highlight.title)) + '"><h2>' + t(p.highlight.title) + "</h2>" +
      p.highlight.blocks.map(block).join("") + "</section>" : "";

    var secs = (p.sections || []).map(function (s, i) {
      var label = t(SITE.sections[s.key]) || t(s.title);
      return '<details class="sec"' + (i === 0 ? " open" : "") + ' id="' + esc(s.key) + '"><summary><span class="sec-n">' + String(i + 1).padStart(2, "0") + "</span>" + esc(label) + "</summary>" +
        '<div class="sec-body">' + s.blocks.map(block).join("") + "</div></details>";
    }).join("");

    var prev = list[idx - 1], next = list[idx + 1];
    var pager = '<nav class="case-pager" aria-label="' + esc(ui("more_cases")) + '">' +
      (prev ? '<a class="btn btn--quiet" href="' + caseUrl(prev.id) + '">' + esc(ui("prev")) + ": " + t(prev.shortTitle || prev.title) + "</a>" : "<span></span>") +
      (next ? '<a class="btn btn--quiet" href="' + caseUrl(next.id) + '">' + esc(ui("next")) + ": " + t(next.shortTitle || next.title) + "</a>" : "") +
      "</nav>";

    return '<article><header class="case-head"><div class="wrap">' +
      '<p class="crumbs"><a href="' + url("projects.html") + '">' + esc(ui("nav_projects")) + "</a> / " + esc(ui(p.type === "work" ? "ctx_work" : "ctx_academic")) + "</p>" +
      "<h1>" + t(p.title) + "</h1>" +
      '<p class="org-line">' + t(p.org) + "</p>" +
      (p.orgNote ? '<p class="org-note">' + t(p.orgNote) + "</p>" : "") +
      (p.academicNote ? '<p class="org-note">' + t(p.academicNote) + "</p>" : "") +
      summary +
      (p.metrics ? figures(p.metrics) : "") +
      "</div></header>" +
      '<div class="wrap">' + highlight + deliverables +
      '<div class="sections-bar"><h2 style="margin:0">' + esc(ui("case_detail")) + '</h2><div><button type="button" class="btn btn--quiet" data-toggle-all>' + esc(ui("open_all")) + "</button></div></div>" +
      secs + pager + "</div></article>";
  }

  /* ---------- Interacciones ---------- */
  function wire(root) {
    // Abrir / cerrar todas las secciones
    root.querySelectorAll("[data-toggle-all]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var secs = root.querySelectorAll("details.sec");
        var open = Array.prototype.some.call(secs, function (d) { return !d.open; });
        secs.forEach(function (d) { d.open = open; });
        btn.textContent = ui(open ? "close_all" : "open_all");
      });
    });

    // RACI: filtrar por persona/área
    root.querySelectorAll("table.raci").forEach(function (tbl) {
      tbl.querySelectorAll("thead button").forEach(function (b) {
        b.addEventListener("click", function () {
          var col = b.getAttribute("data-col");
          var on = b.getAttribute("aria-pressed") !== "true";
          tbl.querySelectorAll("thead button").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
          tbl.querySelectorAll("td.raci-cell").forEach(function (td) { td.classList.toggle("is-col", on && td.getAttribute("data-col") === col); });
          tbl.classList.toggle("is-filtered", on);
          if (on) b.setAttribute("aria-pressed", "true");
        });
      });
    });

    // Matriz de stakeholders: detalle bajo demanda
    root.querySelectorAll(".matrix-wrap").forEach(function (wrap) {
      var detail = document.getElementById(wrap.id + "-detail");
      wrap.querySelectorAll(".actor").forEach(function (btn) {
        btn.addEventListener("click", function () {
          wrap.querySelectorAll(".actor").forEach(function (x) { x.setAttribute("aria-expanded", "false"); });
          btn.setAttribute("aria-expanded", "true");
          detail.innerHTML = btn.getAttribute("data-detail");
        });
      });
    });

    // Embebidos: se cargan solo cuando se piden
    root.querySelectorAll("[data-embed]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var box = btn.closest(".embed");
        var existing = box.querySelector("iframe");
        if (existing) { existing.remove(); btn.textContent = ui("load_here"); return; }
        var f = document.createElement("iframe");
        f.className = "embed-frame"; f.src = btn.getAttribute("data-embed");
        f.title = btn.getAttribute("data-title"); f.loading = "lazy"; f.setAttribute("allowfullscreen", "");
        box.appendChild(f); btn.textContent = ui("hide");
      });
    });

    // Filtros en Proyectos (laboral / académico)
    root.querySelectorAll("[data-filter]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var v = btn.getAttribute("data-filter");
        root.querySelectorAll("[data-filter]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === btn)); });
        root.querySelectorAll(".case-row").forEach(function (row) { row.hidden = v !== "all" && row.getAttribute("data-type") !== v; });
      });
    });

    // Visor de dashboards (galería)
    var dlg = root.querySelector("#viewer");
    if (dlg) {
      var frame = dlg.querySelector("iframe");
      root.querySelectorAll("[data-view]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          frame.src = btn.getAttribute("data-view");
          frame.title = btn.getAttribute("data-title");
          dlg.querySelector("#viewer-title").textContent = btn.getAttribute("data-title");
          if (dlg.showModal) dlg.showModal(); else window.open(frame.src, "_blank");
        });
      });
      dlg.querySelector("[data-close]").addEventListener("click", function () { dlg.close(); });
      dlg.addEventListener("close", function () { frame.src = "about:blank"; });
    }
  }

  /* ---------- Arranque ---------- */
  var page = document.body.getAttribute("data-page");
  var render = { home: pageHome, about: pageAbout, projects: pageProjects, "case": pageCase }[page];
  var titles = { home: "home_title", about: "nav_about", projects: "nav_projects" };
  if (titles[page]) document.title = ui(titles[page]) + " | Carmela Roman";

  var mount = document.getElementById("app");
  mount.innerHTML = header(page) + '<main id="main" tabindex="-1">' + (render ? render() : "") + "</main>" + footer();
  wire(mount);
})();
