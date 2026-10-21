import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo.clean-CnchuWt9.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [`blue`, `violet`, `green`, `amber`, `gray`];
var a = (e) => i[[...e].reduce((e2, t) => (e2 * 31 + t.charCodeAt(0)) % 997, 7) % i.length];
var o = (e) => {
  if (!e) return ``;
  try {
    return new URL(e).hostname.replace(/^www\./, ``);
  } catch {
    return e;
  }
};
var s = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
var c = /* @__PURE__ */ new Set([`about`, `after`, `again`, `their`, `there`, `these`, `those`, `which`, `while`, `would`, `could`, `should`, `every`, `other`, `being`, `still`, `where`, `until`, `since`, `under`, `first`, `people`, `thing`, `things`]);
function l(e, t, n4) {
  let i2 = null;
  if (t?.length) {
    let e2 = t.filter((e3) => e3.trim()).map(s);
    e2.length && (i2 = RegExp(`(${e2.join(`|`)})`, `gi`));
  } else {
    let e2 = [...new Set((n4.toLowerCase().match(/[a-z0-9%]+/g) ?? []).filter((e3) => (e3.length >= 5 || /\d/.test(e3)) && !c.has(e3)))];
    e2.length && (i2 = RegExp(`\\b(${e2.map(s).join(`|`)})\\b`, `gi`));
  }
  return i2 ? e.split(i2).map((e2, t2) => t2 % 2 ? (0, r.jsx)(`mark`, { children: e2 }, t2) : e2) : e;
}
function u({ id: e, tone: t, children: i2 }) {
  let a2 = (0, n3.useRef)({ id: e, tone: t, node: i2 }), [o2, s2] = (0, n3.useState)(e), [c2, l2] = (0, n3.useState)(null);
  return o2 !== e && (s2(e), l2(a2.current)), a2.current = { id: e, tone: t, node: i2 }, (0, n3.useEffect)(() => {
    if (!c2) return;
    let e2 = window.setTimeout(() => l2(null), 260);
    return () => window.clearTimeout(e2);
  }, [c2]), (0, r.jsxs)(`span`, { className: `ui-cac__swap`, children: [c2 && (0, r.jsx)(`span`, { className: `ui-cac__swap-item`, "data-out": ``, "data-tone": c2.tone, "aria-hidden": `true`, children: c2.node }, `out-${c2.id}`), (0, r.jsx)(`span`, { className: `ui-cac__swap-item`, "data-tone": t, children: i2 }, e)] });
}
var d = ({ d: e }) => (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, className: `ui-cac__icon`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: e }) });
var f = { close: `M4.75 4.75l6.5 6.5m0-6.5-6.5 6.5`, out: `M6.5 4.5h5v5M11.25 4.75 4.5 11.5`, copy: `M6.75 5.5h5c.69 0 1.25.56 1.25 1.25v5c0 .69-.56 1.25-1.25 1.25h-5c-.69 0-1.25-.56-1.25-1.25v-5c0-.69.56-1.25 1.25-1.25ZM10.5 3.5A1.25 1.25 0 0 0 9.25 3h-5C3.56 3 3 3.56 3 4.25v5c0 .54.34 1 .82 1.17`, done: `M3.75 8.4 6.6 11.2 12.25 5`, arrow: `M3.5 8h9M8.75 4.25 12.5 8l-3.75 3.75` };
function p({ source: e }) {
  return (0, r.jsx)(`span`, { className: `ui-cac__glyph`, "data-tone": a(e.site), "aria-hidden": `true`, children: e.icon ?? e.site.trim().charAt(0).toUpperCase() });
}
var m = 4;
function h({ segments: e, sources: t, pagesRead: i2, defaultOpen: a2, onOpenSource: s2, onPreviewChange: c2, action: h2, className: _2 }) {
  let v2 = (0, n3.useId)(), [y2, b] = (0, n3.useState)(null), [x, S] = (0, n3.useState)(a2 && t.some((e2) => e2.id === a2) ? a2 : null), C = (0, n3.useRef)(x);
  x && (C.current = x);
  let [w, T] = (0, n3.useState)(null), E = (0, n3.useRef)(null), D = (0, n3.useRef)(null), [ee, O] = (0, n3.useState)(t.length), [k, A] = (0, n3.useState)(false), j = (e2) => t.findIndex((t2) => t2.id === e2) + 1, M = (e2) => t.find((t2) => t2.id === e2) ?? null, N = (e2) => t.some((t2) => t2.id === e2);
  (0, n3.useLayoutEffect)(() => {
    let e2 = E.current, t2 = D.current;
    if (!e2 || !t2) return;
    let n4 = () => {
      let n5 = [...t2.querySelectorAll(`[data-chip]`)].map((e3) => e3.offsetWidth), r3 = t2.querySelector(`[data-more]`)?.offsetWidth ?? 36, i3 = e2.clientWidth;
      if (n5.reduce((e3, t3) => e3 + t3, 0) + m * Math.max(0, n5.length - 1) <= i3 + 0.5) return O(n5.length);
      let a3 = 0, o2 = 0;
      for (; o2 < n5.length; o2++) {
        let e3 = a3 + (o2 ? m : 0) + n5[o2];
        if (e3 + m + r3 > i3) break;
        a3 = e3;
      }
      O(Math.max(1, o2));
    };
    n4();
    let r2 = new ResizeObserver(n4);
    return r2.observe(e2), document.fonts?.ready.then(n4).catch(() => {
    }), () => r2.disconnect();
  }, [t]);
  let P = k ? t.length : Math.min(ee, t.length), F = t.length - P, I = [];
  e.forEach((e2, t2) => {
    (e2.paragraph || I.length === 0) && I.push([]), I[I.length - 1].push({ seg: e2, index: t2 });
  });
  let L = e.filter((e2) => e2.text.trim()).length, R = e.filter((e2) => e2.text.trim() && e2.cite?.some(N)).length, z = (t2) => e.filter((e2) => e2.cite?.includes(t2)), B = (e2) => {
    let t2 = x === e2 ? null : e2;
    S(t2), c2?.(t2);
  }, V = () => {
    if (!x) return;
    let e2 = x;
    S(null), c2?.(null), E.current?.querySelector(`[data-source="${CSS.escape(e2)}"]`)?.focus({ preventScroll: true });
  }, H = (e2) => {
    let t2 = `\u201C${e2.quote ?? e2.title}\u201D \u2013 ${e2.title}, ${e2.site}${e2.url ? ` (${e2.url})` : ``}`;
    navigator.clipboard?.writeText(t2).catch(() => {
    }), T({ id: Date.now(), source: e2.id });
  };
  (0, n3.useEffect)(() => {
    if (!w) return;
    let e2 = window.setTimeout(() => T(null), 1800);
    return () => window.clearTimeout(e2);
  }, [w]);
  let U = (e2) => {
    e2.key === `Escape` && x && (e2.stopPropagation(), V());
  }, W = (e2) => {
    let t2 = [...E.current?.querySelectorAll(`.ui-cac__chip, .ui-cac__more`) ?? []], n4 = t2.indexOf(e2.currentTarget), r2 = t2.length - 1, i3 = e2.key === `ArrowRight` ? Math.min(r2, n4 + 1) : e2.key === `ArrowLeft` ? Math.max(0, n4 - 1) : e2.key === `Home` ? 0 : e2.key === `End` ? r2 : null;
    i3 === null || n4 < 0 || (e2.preventDefault(), t2[i3]?.focus());
  }, G = y2?.source ?? null, K = (e2, t2) => {
    if (y2) return y2.segment === void 0 ? e2.cite?.includes(y2.source) ? `hl` : `dim` : y2.segment === t2 ? `hl` : void 0;
    if (x && e2.cite?.includes(x)) return `hl`;
  }, q = M(G), J = M(x), Y = (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`b`, { children: R }), ` of `, L, ` `, L === 1 ? `sentence` : `sentences`, ` backed by a source`] }), X = `rest`, Z;
  if (w) Y = `Quote copied`, X = `copied-${w.id}`, Z = `ok`;
  else if (q && y2?.segment !== void 0) Y = (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`b`, { children: q.site }), ` `, (0, r.jsx)(`span`, { className: `ui-cac__dot`, children: `\xB7` }), ` `, q.title] }), X = `mark-${y2.segment}-${q.id}`;
  else if (q) {
    let e2 = z(q.id).length;
    Y = e2 ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`b`, { children: q.site }), ` `, (0, r.jsx)(`span`, { className: `ui-cac__dot`, children: `\xB7` }), ` cited in `, e2, ` `, e2 === 1 ? `sentence` : `sentences`] }) : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`b`, { children: q.site }), ` `, (0, r.jsx)(`span`, { className: `ui-cac__dot`, children: `\xB7` }), ` read, not cited`] }), X = `src-${q.id}`;
  } else J && (Y = (0, r.jsxs)(r.Fragment, { children: [`Quote from `, (0, r.jsx)(`b`, { children: J.site })] }), X = `open-${J.id}`);
  let Q = M(x ?? C.current), $ = `${v2}-preview`, te = [`${t.length} ${t.length === 1 ? `source` : `sources`}`, i2 === void 0 ? null : `${i2} ${i2 === 1 ? `page` : `pages`} read`].filter(Boolean);
  return (0, r.jsxs)(`div`, { className: [`ui-cac`, _2].filter(Boolean).join(` `), role: `group`, "aria-label": `Answer with sources`, "data-hot": y2 ? y2.segment === void 0 ? `source` : `mark` : void 0, onKeyDown: U, children: [(0, r.jsx)(`style`, { href: `ui-cited-answer-clean`, precedence: `default`, children: g }), (0, r.jsxs)(`div`, { className: `ui-cac__body`, children: [(0, r.jsxs)(`div`, { className: `ui-cac__head`, children: [(0, r.jsx)(`span`, { className: `ui-cac__stack`, "aria-hidden": `true`, children: t.slice(0, 3).map((e2) => (0, r.jsx)(p, { source: e2 }, e2.id)) }), (0, r.jsx)(`span`, { className: `ui-cac__meta`, children: te.map((e2, t2) => (0, r.jsxs)(`span`, { children: [t2 > 0 && (0, r.jsx)(`span`, { className: `ui-cac__dot`, children: ` \xB7 ` }), e2] }, e2)) })] }), (0, r.jsx)(`div`, { className: `ui-cac__text`, onPointerLeave: () => b(null), children: I.map((e2, t2) => (0, r.jsx)(`p`, { className: `ui-cac__p`, children: e2.map(({ seg: e3, index: t3 }) => {
    let [, n4, i3, a3] = e3.text.match(/^(\s*)([\s\S]*?)(\s*)$/) ?? [``, ``, e3.text, ``], o2 = (e3.cite ?? []).filter(N), s3 = K(e3, t3), c3 = o2.length ? Math.max(0, i3.search(/\S+$/)) : i3.length;
    return (0, r.jsxs)(`span`, { children: [n4, (0, r.jsxs)(`span`, { className: `ui-cac__seg`, "data-hl": s3 === `hl` ? `` : void 0, "data-dim": s3 === `dim` ? `` : void 0, children: [i3.slice(0, c3), (0, r.jsxs)(`span`, { className: `ui-cac__keep`, children: [i3.slice(c3), o2.map((e4) => {
      let n5 = M(e4), i4 = y2?.segment === t3 && y2.source === e4 || y2?.segment === void 0 && y2?.source === e4;
      return (0, r.jsx)(`button`, { type: `button`, className: `ui-cac__marker`, "data-source": e4, "data-lit": i4 ? `` : void 0, "data-dim": y2 && !i4 ? `` : void 0, "aria-expanded": x === e4, "aria-controls": $, "aria-label": `Source ${j(e4)}: ${n5.site} \u2013 ${n5.title}`, onPointerEnter: (n6) => n6.pointerType === `mouse` && b({ source: e4, segment: t3 }), onPointerLeave: (e5) => e5.pointerType === `mouse` && b(null), onFocus: () => b({ source: e4, segment: t3 }), onBlur: () => b(null), onClick: () => B(e4), children: j(e4) }, e4);
    })] })] }), a3] }, t3);
  }) }, t2)) }), (0, r.jsxs)(`div`, { className: `ui-cac__chips`, "data-all": k ? `` : void 0, ref: E, role: `list`, "aria-label": `Sources`, onPointerLeave: () => b(null), children: [t.slice(0, P).map((e2, t2) => {
    let n4 = G === e2.id;
    return (0, r.jsx)(`span`, { role: `listitem`, className: `ui-cac__chip-item`, children: (0, r.jsxs)(`button`, { type: `button`, className: `ui-cac__chip`, "data-source": e2.id, "data-lit": n4 ? `` : void 0, "data-dim": G && !n4 ? `` : void 0, "aria-expanded": x === e2.id, "aria-controls": $, "aria-label": `Source ${t2 + 1}: ${e2.site} \u2013 ${e2.title}`, onPointerEnter: (t3) => t3.pointerType === `mouse` && b({ source: e2.id }), onFocus: () => b({ source: e2.id }), onBlur: () => b(null), onKeyDown: W, onClick: () => B(e2.id), children: [(0, r.jsx)(p, { source: e2 }), (0, r.jsx)(`span`, { className: `ui-cac__chip-name`, children: e2.site }), (0, r.jsx)(`span`, { className: `ui-cac__chip-num`, children: t2 + 1 })] }) }, e2.id);
  }), F > 0 && (0, r.jsx)(`span`, { role: `listitem`, className: `ui-cac__chip-item`, children: (0, r.jsxs)(`button`, { type: `button`, className: `ui-cac__more`, "aria-label": `Show ${F} more ${F === 1 ? `source` : `sources`}`, onKeyDown: W, onClick: () => A(true), children: [`+`, F] }) })] }), (0, r.jsxs)(`div`, { className: `ui-cac__ruler`, ref: D, "aria-hidden": `true`, children: [t.map((e2, t2) => (0, r.jsxs)(`span`, { className: `ui-cac__chip`, "data-chip": ``, children: [(0, r.jsx)(p, { source: e2 }), (0, r.jsx)(`span`, { className: `ui-cac__chip-name`, children: e2.site }), (0, r.jsx)(`span`, { className: `ui-cac__chip-num`, children: t2 + 1 })] }, e2.id)), (0, r.jsxs)(`span`, { className: `ui-cac__more`, "data-more": ``, children: [`+`, t.length] })] }), (0, r.jsx)(`div`, { id: $, className: `ui-cac__fold`, "data-open": x ? `` : void 0, inert: !x, role: `region`, "aria-label": Q ? `Source ${j(Q.id)}: ${Q.site}` : `Source`, children: (0, r.jsx)(`div`, { className: `ui-cac__clip`, children: Q && (0, r.jsxs)(`div`, { className: `ui-cac__preview`, children: [(0, r.jsxs)(`div`, { className: `ui-cac__pv-head`, children: [(0, r.jsx)(p, { source: Q }), (0, r.jsxs)(`span`, { className: `ui-cac__pv-meta`, children: [(0, r.jsx)(`span`, { className: `ui-cac__pv-domain`, children: o(Q.url) || Q.site }), Q.date && (0, r.jsxs)(`span`, { className: `ui-cac__pv-date`, children: [(0, r.jsx)(`span`, { className: `ui-cac__dot`, children: ` \xB7 ` }), Q.date] })] }), (0, r.jsx)(`span`, { className: `ui-cac__pv-num`, children: j(Q.id) }), (0, r.jsx)(`button`, { type: `button`, className: `ui-cac__close`, "aria-label": `Close source`, onClick: V, children: (0, r.jsx)(d, { d: f.close }) })] }), (0, r.jsx)(`div`, { className: `ui-cac__pv-title`, children: Q.title }), Q.quote && (0, r.jsx)(`blockquote`, { className: `ui-cac__quote`, children: l(Q.quote, Q.highlight, z(Q.id).map((e2) => e2.text).join(` `)) }), (0, r.jsxs)(`div`, { className: `ui-cac__pv-actions`, children: [Q.url ? (0, r.jsxs)(`a`, { className: `ui-cac__btn ui-cac__btn--main`, href: Q.url, target: `_blank`, rel: `noreferrer noopener`, onClick: (e2) => {
    s2 && (e2.preventDefault(), s2(Q));
  }, children: [(0, r.jsx)(d, { d: f.out }), `Open source`] }) : s2 && (0, r.jsxs)(`button`, { type: `button`, className: `ui-cac__btn ui-cac__btn--main`, onClick: () => s2(Q), children: [(0, r.jsx)(d, { d: f.out }), `Open source`] }), Q.quote && (0, r.jsxs)(`button`, { type: `button`, className: `ui-cac__btn`, "data-done": w?.source === Q.id ? `` : void 0, "aria-label": `Copy quote`, onClick: () => H(Q), children: [(0, r.jsx)(`span`, { className: `ui-cac__btn-icon`, children: (0, r.jsx)(d, { d: w?.source === Q.id ? f.done : f.copy }) }, w?.source === Q.id ? `done` : `idle`), (0, r.jsx)(`span`, { className: `ui-cac__btn-text`, children: w?.source === Q.id ? `Copied` : `Copy quote` })] })] })] }, Q.id) }) })] }), (0, r.jsxs)(`div`, { className: `ui-cac__foot`, children: [(0, r.jsx)(`span`, { className: `ui-cac__caption`, "aria-live": `polite`, children: (0, r.jsx)(u, { id: X, tone: Z, children: Y }) }), h2 && (0, r.jsxs)(`button`, { type: `button`, className: `ui-cac__action`, onClick: h2.onClick, children: [h2.label, (0, r.jsx)(d, { d: f.arrow })] })] })] });
}
var g = `.ui-cac{--ui-cac-card: #ffffff;--ui-cac-ink: rgba(0, 0, 0, 0.88);--ui-cac-strong: #000000;--ui-cac-text: rgba(0, 0, 0, 0.61);--ui-cac-muted: rgba(0, 0, 0, 0.45);--ui-cac-faint: rgba(0, 0, 0, 0.27);--ui-cac-icon: rgba(0, 0, 0, 0.447);--ui-cac-line: rgba(0, 0, 0, 0.06);--ui-cac-fill: rgba(0, 0, 0, 0.06);--ui-cac-fill-strong: rgba(0, 0, 0, 0.1);--ui-cac-wash: rgba(0, 0, 0, 0.03);--ui-cac-hl: rgba(0, 96, 226, 0.07);--ui-cac-mark: rgba(0, 96, 226, 0.1);--ui-cac-ok: #1a9a52;--ui-cac-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-cac-focus: rgba(0, 96, 226, 0.35);--ui-cac-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;max-width: 460px;min-width: 0;container-type: inline-size;border-radius: 10px;background: var(--ui-cac-card);box-shadow: var(--ui-cac-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-cac-ink);text-align: left;-webkit-font-smoothing: antialiased}.ui-cac *, .ui-cac *::before, .ui-cac *::after{box-sizing: border-box}:where(.ui-cac) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-cac :is(button, a):focus-visible{outline: 2px solid var(--ui-cac-focus);outline-offset: 1px}.ui-cac svg{display: block;flex: none}.ui-cac b{font-weight: 500;color: var(--ui-cac-ink)}.ui-cac__dot{color: var(--ui-cac-faint)}.ui-cac__icon{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-cac [data-tone="blue"]{--ui-cac-g: #1f5fd1;--ui-cac-g-bg: rgba(0, 96, 226, 0.08)}.ui-cac [data-tone="violet"]{--ui-cac-g: #6a4fd0;--ui-cac-g-bg: rgba(110, 86, 230, 0.09)}.ui-cac [data-tone="green"]{--ui-cac-g: #1a8a4a;--ui-cac-g-bg: rgba(26, 154, 82, 0.09)}.ui-cac [data-tone="amber"]{--ui-cac-g: #a46a06;--ui-cac-g-bg: rgba(232, 162, 12, 0.12)}.ui-cac [data-tone="gray"]{--ui-cac-g: rgba(0, 0, 0, 0.55);--ui-cac-g-bg: rgba(0, 0, 0, 0.06)}.ui-cac__glyph{display: grid;flex: none;place-items: center;width: 16px;height: 16px;overflow: hidden;border-radius: 4px;background: var(--ui-cac-g-bg);font-size: 9.5px;font-weight: 500;line-height: 1;color: var(--ui-cac-g)}.ui-cac__glyph > :is(img, svg){width: 100%;height: 100%;object-fit: cover}.ui-cac__body{padding: 16px 20px 16px}.ui-cac__head{display: flex;align-items: center;gap: 8px;height: 16px}.ui-cac__stack{display: flex;flex: none}.ui-cac__stack .ui-cac__glyph{box-shadow: 0 0 0 1.5px var(--ui-cac-card)}.ui-cac__stack .ui-cac__glyph + .ui-cac__glyph{margin-left: -4px}.ui-cac__meta{min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-cac-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-cac__text{margin-top: 12px;color: var(--ui-cac-ink)}.ui-cac__p{margin: 0;font-size: 13px;line-height: 22px}.ui-cac__p + .ui-cac__p{margin-top: 10px}.ui-cac__seg{margin: 0 -2px;padding: 2px 2px;border-radius: 4px;-webkit-box-decoration-break: clone;box-decoration-break: clone;transition: background-color 200ms ease, color 200ms ease}.ui-cac__seg[data-hl]{background: var(--ui-cac-hl);color: var(--ui-cac-strong)}.ui-cac__seg[data-dim]{color: var(--ui-cac-faint)}.ui-cac__keep{white-space: nowrap}.ui-cac__marker{position: relative;display: inline-grid;place-items: center;min-width: 16px;height: 16px;margin-left: 3px;padding: 0 4px;border-radius: 4px;background: var(--ui-cac-fill);box-shadow: inset 0 0 0 0.5px var(--ui-cac-line);font-size: 10px;font-weight: 500;line-height: 16px;color: var(--ui-cac-text);vertical-align: 1px;font-variant-numeric: tabular-nums;transition: background-color 160ms ease, color 160ms ease, opacity 200ms ease}.ui-cac__marker + .ui-cac__marker{margin-left: 2px}.ui-cac__marker::after{content: "";position: absolute;inset: -4px -2px}.ui-cac__marker:hover, .ui-cac__marker[data-lit], .ui-cac__marker[aria-expanded="true"]{background: var(--ui-cac-fill-strong);color: var(--ui-cac-ink)}.ui-cac__marker[data-dim]:not([aria-expanded="true"]){opacity: 0.5}.ui-cac__chips{display: flex;gap: ${m}px;margin-top: 16px;min-width: 0}.ui-cac__chips[data-all]{flex-wrap: wrap}.ui-cac__chip-item{display: flex;flex: none;min-width: 0;max-width: 100%}.ui-cac__chip-item:only-child, .ui-cac__chips:not([data-all]) .ui-cac__chip-item:first-child:nth-last-child(2){flex: 0 1 auto}.ui-cac__chip{display: inline-flex;align-items: center;gap: 6px;min-width: 0;max-width: 100%;height: 28px;padding: 0 8px 0 6px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-cac-line);font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-cac-text);white-space: nowrap;transition: background-color 140ms ease, color 140ms ease, opacity 200ms ease}.ui-cac__chip:hover, .ui-cac__chip[data-lit]{background: var(--ui-cac-wash);color: var(--ui-cac-ink)}.ui-cac__chip[aria-expanded="true"]{background: var(--ui-cac-fill);color: var(--ui-cac-ink)}.ui-cac__chip[data-dim]:not([aria-expanded="true"]){opacity: 0.5}.ui-cac__chip-name{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-cac__chip-num{flex: none;margin-left: -1px;font-size: 11px;font-weight: 400;color: var(--ui-cac-faint);font-variant-numeric: tabular-nums}.ui-cac__more{display: inline-grid;flex: none;place-items: center;height: 28px;padding: 0 8px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-cac-line);font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-cac-text);font-variant-numeric: tabular-nums;transition: background-color 140ms ease, color 140ms ease}.ui-cac__more:hover{background: var(--ui-cac-wash);color: var(--ui-cac-ink)}.ui-cac__ruler{position: absolute;top: 0;left: 0;display: flex;gap: ${m}px;height: 0;overflow: hidden;visibility: hidden;pointer-events: none}.ui-cac__ruler > *{flex: none}.ui-cac__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 420ms var(--ui-cac-ease), opacity 220ms ease}.ui-cac__fold[data-open]{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows 420ms var(--ui-cac-ease), opacity 320ms ease 80ms}.ui-cac__clip{min-height: 0;overflow: hidden;margin: 0 -4px -4px;padding: 0 4px 4px}.ui-cac__preview{margin-top: 12px;padding: 10px 12px 12px;border-radius: 8px;background: var(--ui-cac-card);box-shadow: var(--ui-cac-shadow);animation: ui-cac-swap-in 320ms ease both}.ui-cac__pv-head{display: flex;align-items: center;gap: 8px;height: 24px}.ui-cac__pv-meta{flex: 1;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-cac-muted);white-space: nowrap;text-overflow: ellipsis}.ui-cac__pv-domain{color: var(--ui-cac-text)}.ui-cac__pv-num{display: grid;flex: none;place-items: center;min-width: 16px;height: 16px;padding: 0 4px;border-radius: 4px;background: var(--ui-cac-fill);font-size: 10px;font-weight: 500;line-height: 16px;color: var(--ui-cac-text);font-variant-numeric: tabular-nums}.ui-cac__close{display: grid;flex: none;place-items: center;width: 24px;height: 24px;margin-right: -6px;border-radius: 6px;color: var(--ui-cac-icon);transition: background-color 140ms ease, color 140ms ease}.ui-cac__close:hover{background: var(--ui-cac-wash);color: var(--ui-cac-ink)}.ui-cac__pv-title{display: -webkit-box;margin-top: 6px;overflow: hidden;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-cac-strong);-webkit-line-clamp: 2;-webkit-box-orient: vertical}.ui-cac__quote{margin: 8px 0 0;padding: 0 0 0 10px;border-left: 2px solid var(--ui-cac-fill);font-size: 12px;line-height: 20px;color: var(--ui-cac-text)}.ui-cac__quote mark{margin: 0 -1px;padding: 1px 1px;border-radius: 3px;background: var(--ui-cac-mark);color: var(--ui-cac-ink);-webkit-box-decoration-break: clone;box-decoration-break: clone}.ui-cac__pv-actions{display: flex;flex-wrap: wrap;align-items: center;gap: 8px;margin-top: 12px}.ui-cac__btn{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 10px 0 8px;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-cac-text);text-decoration: none;white-space: nowrap;transition: background-color 140ms ease, color 140ms ease}.ui-cac__btn .ui-cac__icon{color: var(--ui-cac-icon);transition: color 140ms ease, transform 220ms var(--ui-cac-ease)}.ui-cac__btn:hover{background: var(--ui-cac-wash);color: var(--ui-cac-ink)}.ui-cac__btn:hover .ui-cac__icon{color: var(--ui-cac-ink)}.ui-cac__btn--main{background: var(--ui-cac-card);box-shadow: var(--ui-cac-shadow);color: var(--ui-cac-strong)}.ui-cac__btn--main:hover{background: #fafafa;color: var(--ui-cac-strong)}.ui-cac__btn--main:hover .ui-cac__icon{transform: translate(1px, -1px)}.ui-cac__btn[data-done], .ui-cac__btn[data-done] .ui-cac__icon{color: var(--ui-cac-ok)}.ui-cac__btn-icon{display: grid;place-items: center;width: 16px;height: 16px;animation: ui-cac-swap-in 280ms ease both}.ui-cac__foot{display: flex;align-items: center;gap: 12px;height: 44px;padding: 0 8px 0 20px;border-top: 0.5px solid var(--ui-cac-line)}.ui-cac__foot:not(:has(.ui-cac__action)){padding-right: 20px}.ui-cac__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-cac-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-cac__swap{display: grid;min-width: 0}.ui-cac__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;animation: ui-cac-swap-in 320ms ease both}.ui-cac__swap-item[data-out]{animation: ui-cac-swap-out 220ms ease both}.ui-cac__swap-item[data-tone="ok"]{color: var(--ui-cac-ok)}.ui-cac__action{display: inline-flex;flex: none;align-items: center;gap: 6px;height: 28px;padding: 0 8px 0 10px;border-radius: 6px;background: var(--ui-cac-card);box-shadow: var(--ui-cac-shadow);font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-cac-strong);white-space: nowrap;transition: background-color 140ms ease}.ui-cac__action .ui-cac__icon{color: var(--ui-cac-icon);transition: transform 220ms var(--ui-cac-ease), color 140ms ease}.ui-cac__action:hover{background: #fafafa}.ui-cac__action:hover .ui-cac__icon{color: var(--ui-cac-ink);transform: translateX(2px)}@keyframes ui-cac-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-cac-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@container (max-width: 400px){.ui-cac__body{padding: 14px 16px 16px}.ui-cac__foot{padding-left: 16px}}@container (max-width: 360px){.ui-cac__pv-num{display: none}}@container (max-width: 280px){.ui-cac__btn-text{display: none}}@media (pointer: coarse){.ui-cac__marker::after{inset: -8px -5px}.ui-cac__chip, .ui-cac__more{height: 34px}.ui-cac__btn{height: 34px}.ui-cac__close{width: 32px;height: 32px;margin-right: -8px}.ui-cac__action{height: 34px}.ui-cac__foot{height: 52px}}@media (prefers-reduced-motion: reduce){.ui-cac *, .ui-cac *::before, .ui-cac *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-cac{--ui-cac-card: #1c1c1e;--ui-cac-ink: rgba(255, 255, 255, 0.9);--ui-cac-strong: #ffffff;--ui-cac-text: rgba(255, 255, 255, 0.62);--ui-cac-muted: rgba(255, 255, 255, 0.46);--ui-cac-faint: rgba(255, 255, 255, 0.3);--ui-cac-icon: rgba(255, 255, 255, 0.5);--ui-cac-line: rgba(255, 255, 255, 0.08);--ui-cac-fill: rgba(255, 255, 255, 0.08);--ui-cac-fill-strong: rgba(255, 255, 255, 0.14);--ui-cac-wash: rgba(255, 255, 255, 0.04);--ui-cac-hl: rgba(77, 141, 255, 0.14);--ui-cac-mark: rgba(77, 141, 255, 0.24);--ui-cac-ok: #3ec27a;--ui-cac-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-cac-focus: rgba(77, 141, 255, 0.5)}:where(.dark, [data-theme="dark"]) .ui-cac__btn--main:hover, :where(.dark, [data-theme="dark"]) .ui-cac__action:hover{background: #232326}:where(.dark, [data-theme="dark"]) .ui-cac [data-tone="blue"]{--ui-cac-g: #9bbcff;--ui-cac-g-bg: rgba(77, 141, 255, 0.16)}:where(.dark, [data-theme="dark"]) .ui-cac [data-tone="violet"]{--ui-cac-g: #c3b4ff;--ui-cac-g-bg: rgba(124, 92, 255, 0.18)}:where(.dark, [data-theme="dark"]) .ui-cac [data-tone="green"]{--ui-cac-g: #6ee7a8;--ui-cac-g-bg: rgba(34, 160, 90, 0.16)}:where(.dark, [data-theme="dark"]) .ui-cac [data-tone="amber"]{--ui-cac-g: #f5c264;--ui-cac-g-bg: rgba(240, 160, 32, 0.16)}:where(.dark, [data-theme="dark"]) .ui-cac [data-tone="gray"]{--ui-cac-g: rgba(255, 255, 255, 0.62);--ui-cac-g-bg: rgba(255, 255, 255, 0.08)}`;
var _ = [{ id: `caching`, site: `Tokenwise`, title: `Prompt caching, explained: what gets stored and for how long`, url: `https://tokenwise.dev/blog/prompt-caching`, date: `Sep 18, 2026`, quote: `A cached prefix is read instead of recomputed. On prompts over 10,000 tokens this cut time to first token by up to 80% in our tests, and cached input is billed at a fraction of the normal rate.`, highlight: [`read instead of recomputed`, `cut time to first token by up to 80%`] }, { id: `prompts`, site: `Latency Notes`, title: `Designing cache-friendly prompts`, url: `https://latencynotes.io/cache-friendly-prompts`, date: `Aug 2, 2026`, quote: `Keep the stable part \u2013 system prompt, tool definitions, long documents \u2013 at the very start, and put anything that changes per request after it. A single changed character early on invalidates everything behind it.`, highlight: [`at the very start`, `anything that changes per request after it`, `invalidates everything behind it`] }, { id: `semantic`, site: `Inference Weekly`, title: `Semantic caching for LLM apps in production`, url: `https://inferenceweekly.com/semantic-caching`, date: `Jul 24, 2026`, quote: `For FAQ-style traffic, the semantic cache answered 31% of requests without calling the model at all, at a median of 40 ms. We only serve a stored answer above a similarity of 0.92.`, highlight: [`31% of requests`, `median of 40 ms`] }];
var v = [{ text: `The biggest win is prompt caching: the provider reuses the processed start of your prompt, so a long system prompt isn't recomputed on every call.`, cite: [`caching`] }, { text: ` On prompts over 10K tokens that can cut time to first token by up to 80%.`, cite: [`caching`] }, { text: ` It only works while that start stays identical, so put the system prompt, tools and long documents first and anything that changes per request last.`, cite: [`prompts`, `caching`] }, { text: `For repeated questions, add a semantic cache in front of the model: close matches get a stored answer in about 40 ms,`, cite: [`semantic`], paragraph: true }, { text: ` which covered nearly a third of FAQ-style traffic in one production setup.`, cite: [`semantic`] }, { text: ` Stream the rest, so people see the first words while the answer is still being written.` }];
function y() {
  let e = (0, n3.useRef)(null), t = (0, n3.useRef)(false), i2 = (0, n3.useRef)(false);
  (0, n3.useEffect)(() => {
    let n4 = (t2) => e.current?.querySelector(t2), r2 = (t2, n5) => {
      t2 && (i2.current = true, t2.dispatchEvent(new PointerEvent(n5, { bubbles: true, pointerType: `mouse`, relatedTarget: n5 === `pointerout` ? e.current : null })), i2.current = false);
    }, a3 = (e2) => n4(`.ui-cac__marker[data-source="${e2}"]`), o2 = [[700, () => r2(a3(`caching`), `pointerover`)], [2600, () => r2(a3(`caching`), `pointerout`)], [500, () => a3(`prompts`)?.click()], [3800, () => n4(`.ui-cac__close`)?.click()], [1800, () => {
    }]], s2 = 0, c2 = 0, l2 = () => {
      t.current || (c2 = window.setTimeout(() => {
        t.current || (o2[s2][1](), s2 = (s2 + 1) % o2.length, l2());
      }, o2[s2][0]));
    };
    return l2(), () => window.clearTimeout(c2);
  }, []);
  let a2 = () => {
    i2.current || (t.current = true);
  };
  return (0, r.jsx)(`div`, { ref: e, className: `ca-demo`, onPointerEnter: a2, onPointerDownCapture: a2, onKeyDownCapture: a2, onFocusCapture: a2, children: (0, r.jsx)(h, { segments: v, sources: _, pagesRead: 12, onOpenSource: () => {
  }, action: { label: `Follow up`, onClick: () => {
  } } }) });
}

export {
  y
};
