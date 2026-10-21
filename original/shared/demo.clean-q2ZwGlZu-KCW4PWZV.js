import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo.clean-q2ZwGlZu.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function i({ name: e, summary: t, icon: i2, status: a2, args: s2, result: m2, error: h2, startedAt: g2, duration: _2, defaultOpen: y2 = false, open: b2, onOpenChange: x2, openOnError: S2 = true, onRetry: C2, maxCodeHeight: w2 = 220, className: T2 }) {
  let E = (0, n3.useId)(), [D, O] = (0, n3.useState)(y2), k = b2 ?? D, A = (e2) => {
    b2 === void 0 && O(e2), x2?.(e2);
  }, [j, M] = (0, n3.useState)(a2), [N, P] = (0, n3.useState)(false);
  a2 !== j && (M(a2), b2 === void 0 && S2 && (a2 === `error` && !D ? (O(true), P(true)) : j === `error` && N && (O(false), P(false))));
  let F = f(a2 === `running`, g2, false), I = a2 === `running` ? F ?? 0 : _2 ?? F, L = a2 === `running` ? `${e} running` : a2 === `success` ? `${e} finished` : `${e} failed${h2 ? `: ${h2}` : ``}`;
  return (0, r.jsxs)(`div`, { className: [`ui-tcc`, T2].filter(Boolean).join(` `), "data-status": a2, "data-open": k || void 0, children: [(0, r.jsx)(`style`, { href: `ui-tool-call-clean`, precedence: `default`, children: v }), (0, r.jsx)(`span`, { className: `ui-tcc-sr`, role: `status`, "aria-live": `polite`, children: L }), (0, r.jsxs)(`button`, { type: `button`, className: `ui-tcc__head`, "aria-expanded": k, "aria-controls": `${E}-body`, onClick: () => {
    P(false), A(!k);
  }, children: [(0, r.jsx)(`span`, { className: `ui-tcc__icon`, "aria-hidden": `true`, children: i2 ?? (0, r.jsx)(d, {}) }), (0, r.jsxs)(`span`, { className: `ui-tcc__main`, children: [(0, r.jsx)(`code`, { className: `ui-tcc__name`, children: e }), t != null && (0, r.jsx)(`span`, { className: `ui-tcc__summary`, title: typeof t == `string` ? t : void 0, children: t })] }), (0, r.jsxs)(`span`, { className: `ui-tcc__status`, children: [a2 === `running` && (0, r.jsx)(c, {}), a2 === `success` && (0, r.jsxs)(`svg`, { className: `ui-tcc__ok`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [(0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `7` }), (0, r.jsx)(`path`, { d: `M5.1 8.2 7.1 10.1 10.9 6`, pathLength: 1 })] }), a2 === `error` && (0, r.jsx)(l, {}), (0, r.jsx)(`span`, { className: `ui-tcc__time`, children: a2 === `error` ? `Failed` : I == null ? null : p(I, a2 === `running`) })] }, a2), (0, r.jsx)(u, {})] }), (0, r.jsx)(`div`, { className: `ui-tcc__body`, id: `${E}-body`, inert: !k, children: (0, r.jsx)(`div`, { className: `ui-tcc__clip`, children: (0, r.jsxs)(`div`, { className: `ui-tcc__sections`, children: [a2 === `error` && (0, r.jsxs)(`div`, { className: `ui-tcc__error`, children: [(0, r.jsx)(l, {}), (0, r.jsx)(`p`, { className: `ui-tcc__error-text`, children: h2 ?? `The tool call failed.` }), C2 && (0, r.jsxs)(`button`, { type: `button`, className: `ui-tcc__retry`, onClick: C2, children: [(0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [(0, r.jsx)(`path`, { d: `M2.75 8a5.25 5.25 0 1 0 1.6-3.77` }), (0, r.jsx)(`path`, { d: `M2.5 2.5v2.75h2.75` })] }), `Retry`] })] }), s2 !== void 0 && (0, r.jsx)(o, { label: `Arguments`, value: s2, cap: w2 }), m2 === void 0 ? a2 === `running` ? (0, r.jsxs)(`div`, { className: `ui-tcc__section`, children: [(0, r.jsx)(`div`, { className: `ui-tcc__section-head`, children: (0, r.jsx)(`span`, { className: `ui-tcc__label`, children: `Result` }) }), (0, r.jsx)(`p`, { className: `ui-tcc__pending`, children: `Waiting for result\u2026` })] }) : null : (0, r.jsx)(o, { label: `Result`, value: m2, cap: w2 }), s2 === void 0 && m2 === void 0 && a2 === `success` && (0, r.jsx)(`p`, { className: `ui-tcc__pending`, children: `No arguments or result.` })] }) }) })] });
}
function a({ children: e, label: t, runningLabel: i2 = `Using tools\u2026`, duration: a2, defaultOpen: o2 = false, open: s2, onOpenChange: c2, className: l2 }) {
  let m2 = (0, n3.useId)(), [h2, g2] = (0, n3.useState)(o2), _2 = s2 ?? h2, y2 = n3.Children.toArray(e).filter(n3.isValidElement).map((e2) => e2.props), b2 = y2.some((e2) => e2.status === `running`), x2 = y2.filter((e2) => e2.status === `error`).length, S2 = f(b2, void 0, true), C2 = y2.length && y2.every((e2) => e2.duration != null) ? y2.reduce((e2, t2) => e2 + (t2.duration ?? 0), 0) : null, w2 = b2 ? S2 : a2 ?? C2 ?? S2, T2 = `Used ${y2.length} ${y2.length === 1 ? `tool` : `tools`}`, E = b2 ? i2 : t ?? T2, D = y2.slice(-3);
  return (0, r.jsxs)(`div`, { className: [`ui-tcc-group`, l2].filter(Boolean).join(` `), "data-running": b2 || void 0, "data-open": _2 || void 0, children: [(0, r.jsx)(`style`, { href: `ui-tool-call-clean`, precedence: `default`, children: v }), (0, r.jsx)(`span`, { className: `ui-tcc-sr`, role: `status`, "aria-live": `polite`, children: b2 ? i2 : `${T2}${x2 ? `, ${x2} failed` : ``}` }), (0, r.jsxs)(`button`, { type: `button`, className: `ui-tcc-group__head`, "aria-expanded": _2, "aria-controls": `${m2}-list`, onClick: () => {
    s2 === void 0 && g2(!_2), c2?.(!_2);
  }, children: [(0, r.jsx)(`span`, { className: `ui-tcc-group__stack`, "aria-hidden": `true`, children: D.map((e2, t2) => (0, r.jsx)(`span`, { className: `ui-tcc__icon`, children: e2.icon ?? (0, r.jsx)(d, {}) }, y2.length - D.length + t2)) }), (0, r.jsxs)(`span`, { className: `ui-tcc-group__title`, children: [(0, r.jsx)(`span`, { className: b2 ? `ui-tcc-group__label ui-tcc__shine` : `ui-tcc-group__label`, "data-text": E, children: E }), !b2 && x2 > 0 && (0, r.jsxs)(`span`, { className: `ui-tcc-group__failed`, children: [`\xB7 `, x2, ` failed`] }), w2 != null && (0, r.jsxs)(`span`, { className: `ui-tcc-group__time`, children: [`\xB7 `, p(w2, b2)] })] }, b2 ? `busy` : `done`), (0, r.jsx)(u, {})] }), (0, r.jsx)(`div`, { className: `ui-tcc__body`, id: `${m2}-list`, inert: !_2, children: (0, r.jsx)(`div`, { className: `ui-tcc__clip`, children: (0, r.jsx)(`div`, { className: `ui-tcc-group__list`, children: e }) }) })] });
}
function o({ label: e, value: t, cap: i2 }) {
  let { text: a2, json: o2 } = m(t), c2 = (0, n3.useRef)(null), [l2, u2] = (0, n3.useState)(false), [d2, f2] = (0, n3.useState)(0);
  (0, n3.useLayoutEffect)(() => {
    let e2 = c2.current, t2 = e2?.firstElementChild;
    if (!e2 || !t2) return;
    let n4 = () => f2(e2.scrollHeight);
    n4();
    let r2 = new ResizeObserver(n4);
    return r2.observe(t2), () => r2.disconnect();
  }, [a2]);
  let p2 = d2 > i2 + 24;
  return (0, r.jsxs)(`div`, { className: `ui-tcc__section`, children: [(0, r.jsxs)(`div`, { className: `ui-tcc__section-head`, children: [(0, r.jsx)(`span`, { className: `ui-tcc__label`, children: e }), (0, r.jsx)(s, { text: a2, label: e.toLowerCase() })] }), (0, r.jsx)(`pre`, { ref: c2, className: `ui-tcc__code`, "data-capped": p2 && !l2 || void 0, style: p2 ? { maxHeight: l2 ? d2 : i2 } : void 0, children: (0, r.jsx)(`code`, { children: o2 ? g(a2) : a2 }) }), p2 && (0, r.jsx)(`button`, { type: `button`, className: `ui-tcc__more`, "aria-expanded": l2, onClick: () => u2(!l2), children: l2 ? `Show less` : `Show all` })] });
}
function s({ text: e, label: t }) {
  let [i2, a2] = (0, n3.useState)(false);
  return (0, n3.useEffect)(() => {
    if (!i2) return;
    let e2 = window.setTimeout(() => a2(false), 1400);
    return () => window.clearTimeout(e2);
  }, [i2]), (0, r.jsxs)(`button`, { type: `button`, className: `ui-tcc__copy`, "data-copied": i2 || void 0, "aria-label": i2 ? `Copied` : `Copy ${t}`, title: i2 ? `Copied` : `Copy ${t}`, onClick: () => _(e).then((e2) => e2 && a2(true)), children: [(0, r.jsxs)(`svg`, { className: `ui-tcc__copy-icon`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [(0, r.jsx)(`rect`, { x: `5.5`, y: `5.5`, width: `8.5`, height: `8.5`, rx: `2` }), (0, r.jsx)(`path`, { d: `M10.5 3.75v-.25A1.5 1.5 0 0 0 9 2H3.5A1.5 1.5 0 0 0 2 3.5V9a1.5 1.5 0 0 0 1.5 1.5h.25` })] }), (0, r.jsx)(`svg`, { className: `ui-tcc__copy-done`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M3.5 8.4 6.6 11.3 12.5 4.9`, pathLength: 1 }) })] });
}
function c() {
  return (0, r.jsxs)(`svg`, { className: `ui-tcc__spinner`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [(0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `6` }), (0, r.jsx)(`path`, { d: `M8 2a6 6 0 0 1 6 6` })] });
}
function l() {
  return (0, r.jsxs)(`svg`, { className: `ui-tcc__err`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [(0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `7` }), (0, r.jsx)(`path`, { d: `M8 4.9v3.5M8 10.9v.1` })] });
}
function u() {
  return (0, r.jsx)(`svg`, { className: `ui-tcc__chevron`, viewBox: `0 0 12 12`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M3.5 5.25 6 7.75l2.5-2.5` }) });
}
function d() {
  return (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, children: (0, r.jsx)(`path`, { d: `M10.2 2.4a3.5 3.5 0 0 0-4.3 4.6L2.6 10.3a1.4 1.4 0 0 0 2 2L7.9 9a3.5 3.5 0 0 0 4.6-4.3l-2 2-1.6-.4-.4-1.6 1.7-2.3Z` }) });
}
function f(e, t, r2) {
  let i2 = (0, n3.useRef)(null), a2 = (0, n3.useRef)(0), [o2, s2] = (0, n3.useState)(null);
  return (0, n3.useEffect)(() => {
    if (!e) {
      i2.current !== null && (a2.current += Date.now() - i2.current, i2.current = null, s2(a2.current));
      return;
    }
    r2 || (a2.current = 0), i2.current = t ?? Date.now();
    let n4 = () => s2(a2.current + Date.now() - (i2.current ?? Date.now()));
    n4();
    let o3 = window.setInterval(n4, 100);
    return () => window.clearInterval(o3);
  }, [e, t, r2]), o2;
}
function p(e, t) {
  if (!t && e < 1e3) return `${Math.max(1, Math.round(e))}ms`;
  if (e < 6e4) return `${(Math.floor(e / 100) / 10).toFixed(1)}s`;
  let n4 = Math.floor(e / 1e3);
  return `${Math.floor(n4 / 60)}m ${String(n4 % 60).padStart(2, `0`)}s`;
}
function m(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t.startsWith(`{`) || t.startsWith(`[`)) try {
      return { text: JSON.stringify(JSON.parse(t), null, 2), json: true };
    } catch {
    }
    return { text: e, json: false };
  }
  try {
    let t = JSON.stringify(e, null, 2);
    return t === void 0 ? { text: String(e), json: false } : { text: t, json: true };
  } catch {
    return { text: String(e), json: false };
  }
}
var h = /("(?:[^"\\]|\\.)*")(\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;
function g(e) {
  let t = [], n4 = new RegExp(h.source, `g`), i2 = 0, a2;
  for (; a2 = n4.exec(e); ) {
    if (a2.index > i2 && t.push(e.slice(i2, a2.index)), a2[1] && a2[2]) t.push((0, r.jsx)(`span`, { className: `ui-tcc__t-key`, children: a2[1] }, a2.index), a2[2]);
    else {
      let e2 = a2[1] ? `str` : /^[tfn]/.test(a2[0]) ? `lit` : `num`;
      t.push((0, r.jsx)(`span`, { className: `ui-tcc__t-${e2}`, children: a2[0] }, a2.index));
    }
    i2 = a2.index + a2[0].length;
  }
  return i2 < e.length && t.push(e.slice(i2)), t;
}
async function _(e) {
  try {
    return await navigator.clipboard.writeText(e), true;
  } catch {
    let t = document.createElement(`textarea`);
    t.value = e, t.style.cssText = `position:fixed;opacity:0`, document.body.appendChild(t), t.select();
    let n4 = document.execCommand(`copy`);
    return t.remove(), n4;
  }
}
var v = `
/* Colors and motion as variables \u2013 override them on .ui-tcc / .ui-tcc-group */
.ui-tcc,
.ui-tcc-group {
  --ui-tcc-card: #ffffff;
  --ui-tcc-strong: #000000;
  --ui-tcc-ink: rgba(0, 0, 0, 0.88);
  --ui-tcc-text: rgba(0, 0, 0, 0.61);
  --ui-tcc-muted: rgba(0, 0, 0, 0.45);
  --ui-tcc-faint: rgba(0, 0, 0, 0.27);
  --ui-tcc-icon: rgba(0, 0, 0, 0.447);
  --ui-tcc-line: rgba(0, 0, 0, 0.06);
  --ui-tcc-wash: rgba(0, 0, 0, 0.03);
  --ui-tcc-wash-big: rgba(0, 0, 0, 0.015);
  /* The code panel: a 2% black frame, kept opaque so the fade of capped blocks can end on it */
  --ui-tcc-code: #fafafa;
  --ui-tcc-accent: rgba(0, 96, 226, 0.765);
  --ui-tcc-red: #d93a2b;
  --ui-tcc-red-bg: rgba(217, 58, 43, 0.04);
  --ui-tcc-red-line: rgba(217, 58, 43, 0.14);
  --ui-tcc-key: rgba(0, 0, 0, 0.88);
  --ui-tcc-str: rgba(0, 123, 172, 0.9);
  --ui-tcc-num: #b25b0c;
  --ui-tcc-lit: #5b5bd6;
  --ui-tcc-shine: rgba(255, 255, 255, 0.82);
  /* Strokes are shadows: a 0.5px hairline plus a soft lift */
  --ui-tcc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-tcc-focus: rgba(0, 96, 226, 0.35);
  --ui-tcc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ui-tcc-mono: ui-monospace, "SF Mono", Menlo, monospace;
  box-sizing: border-box;
  container-type: inline-size;
  min-width: 0;
  color: var(--ui-tcc-ink);
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
.ui-tcc *,
.ui-tcc-group * { box-sizing: border-box; }

.ui-tcc {
  position: relative;
  border-radius: 10px;
  background: var(--ui-tcc-card);
  box-shadow: var(--ui-tcc-shadow);
}
.ui-tcc-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Header row: icon, name + summary, status, chevron \u2013 everything truncates before it overflows */
.ui-tcc__head {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 44px;
  padding: 0 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 160ms ease, border-radius 0ms linear 380ms;
}
.ui-tcc[data-open] .ui-tcc__head {
  border-radius: 10px 10px 0 0;
  transition: background-color 160ms ease;
}
.ui-tcc__head:focus-visible,
.ui-tcc-group__head:focus-visible,
.ui-tcc__copy:focus-visible,
.ui-tcc__more:focus-visible,
.ui-tcc__retry:focus-visible {
  outline: 2px solid var(--ui-tcc-focus);
  outline-offset: 1px;
}
@media (hover: hover) {
  .ui-tcc__head:hover { background: var(--ui-tcc-wash-big); }
  .ui-tcc__head:hover .ui-tcc__chevron { stroke: var(--ui-tcc-ink); }
  .ui-tcc-group__head:hover { background: var(--ui-tcc-wash); color: var(--ui-tcc-ink); }
  .ui-tcc__copy:hover { background: var(--ui-tcc-wash-big); color: var(--ui-tcc-ink); }
  .ui-tcc__more:hover { color: var(--ui-tcc-ink); }
  .ui-tcc__retry:hover { background: var(--ui-tcc-wash-big); }
}

/* The tool's icon: a plain 16px glyph, no tile */
.ui-tcc__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 16px;
  height: 16px;
  color: var(--ui-tcc-icon);
}
.ui-tcc__icon > svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }

.ui-tcc__main {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex: 1;
  min-width: 0;
}
.ui-tcc__name {
  flex: 0 1 auto;
  max-width: 55%;
  overflow: hidden;
  color: var(--ui-tcc-strong);
  font-family: var(--ui-tcc-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ui-tcc__summary {
  flex: 1 1 0;
  min-width: 0;
  overflow: hidden;
  color: var(--ui-tcc-text);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ui-tcc__status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: none;
  color: var(--ui-tcc-muted);
  font-size: 12px;
  line-height: 16px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  animation: ui-tcc-in 360ms var(--ui-tcc-ease) both;
}
.ui-tcc[data-status="error"] .ui-tcc__status { color: var(--ui-tcc-red); font-weight: 500; }
.ui-tcc__status > svg { width: 14px; height: 14px; flex: none; fill: none; stroke-linecap: round; stroke-linejoin: round; }
.ui-tcc__spinner circle { stroke: var(--ui-tcc-line); stroke-width: 1.6; }
.ui-tcc__spinner path { stroke: var(--ui-tcc-accent); stroke-width: 1.6; }
.ui-tcc__spinner { animation: ui-tcc-spin 800ms linear infinite; }
/* Done: a solid blue dot whose white check draws itself */
.ui-tcc__ok { animation: ui-tcc-pop 460ms cubic-bezier(0.34, 1.56, 0.64, 1) both; }
.ui-tcc__ok circle { fill: var(--ui-tcc-accent); }
.ui-tcc__ok path { stroke: #fff; stroke-width: 1.5; stroke-dasharray: 1; stroke-dashoffset: 1; animation: ui-tcc-draw 360ms var(--ui-tcc-ease) 160ms forwards; }
.ui-tcc__err circle { fill: var(--ui-tcc-red); }
.ui-tcc__err path { stroke: #fff; stroke-width: 1.6; stroke-linecap: round; }

.ui-tcc__chevron {
  flex: none;
  width: 12px;
  height: 12px;
  fill: none;
  stroke: var(--ui-tcc-icon);
  stroke-width: 1.2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 360ms var(--ui-tcc-ease), stroke 160ms ease;
}
.ui-tcc[data-open] > .ui-tcc__head .ui-tcc__chevron,
.ui-tcc-group[data-open] > .ui-tcc-group__head .ui-tcc__chevron { transform: rotate(180deg); }

/* Body: grows from 0fr to 1fr, so the height animates without measuring */
.ui-tcc__body {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 380ms var(--ui-tcc-ease), opacity 240ms ease;
}
.ui-tcc[data-open] > .ui-tcc__body,
.ui-tcc-group[data-open] > .ui-tcc__body {
  grid-template-rows: 1fr;
  opacity: 1;
}
.ui-tcc__clip { min-height: 0; overflow: hidden; }
.ui-tcc__sections {
  display: grid;
  gap: 14px;
  padding: 12px 14px 14px;
  border-top: 0.5px solid var(--ui-tcc-line);
}

.ui-tcc__section { display: grid; gap: 6px; min-width: 0; }
.ui-tcc__section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 28px;
}
/* Tiny uppercase labels: "ARGUMENTS", "RESULT" */
.ui-tcc__label {
  color: var(--ui-tcc-muted);
  font-size: 10px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.ui-tcc__pending { margin: 0; color: var(--ui-tcc-muted); font-size: 12px; line-height: 16px; }

/* Copy: a small white icon button with the card's hairline */
.ui-tcc__copy {
  all: unset;
  position: relative;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: var(--ui-tcc-card);
  box-shadow: var(--ui-tcc-shadow);
  color: var(--ui-tcc-icon);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-tcc__copy svg {
  position: absolute;
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: opacity 200ms ease, transform 320ms var(--ui-tcc-ease), filter 200ms ease;
}
.ui-tcc__copy-icon rect { fill: currentColor; stroke: none; }
.ui-tcc__copy-done { opacity: 0; transform: scale(0.6); filter: blur(2px); stroke-width: 1.7; }
.ui-tcc__copy[data-copied] { color: var(--ui-tcc-accent); }
.ui-tcc__copy[data-copied] .ui-tcc__copy-icon { opacity: 0; transform: scale(0.6); filter: blur(2px); }
.ui-tcc__copy[data-copied] .ui-tcc__copy-done { opacity: 1; transform: none; filter: none; }

/* Code: a faint panel with a 0.5px frame; wraps instead of scrolling sideways, capped blocks fade out */
.ui-tcc__code {
  position: relative;
  margin: 0;
  padding: 10px 12px;
  overflow: hidden;
  border-radius: 8px;
  background: var(--ui-tcc-code);
  box-shadow: inset 0 0 0 0.5px var(--ui-tcc-line);
  color: var(--ui-tcc-muted);
  font-family: var(--ui-tcc-mono);
  font-size: 12px;
  line-height: 20px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  tab-size: 2;
  transition: max-height 420ms var(--ui-tcc-ease);
}
.ui-tcc__code code { display: block; font: inherit; }
.ui-tcc__code::after {
  content: "";
  position: absolute;
  left: 0.5px;
  right: 0.5px;
  bottom: 0.5px;
  height: 56px;
  border-radius: 0 0 7.5px 7.5px;
  background: linear-gradient(to bottom, transparent, var(--ui-tcc-code));
  opacity: 0;
  transition: opacity 240ms ease;
  pointer-events: none;
}
.ui-tcc__code[data-capped]::after { opacity: 1; }
.ui-tcc__t-key { color: var(--ui-tcc-key); }
.ui-tcc__t-str { color: var(--ui-tcc-str); }
.ui-tcc__t-num { color: var(--ui-tcc-num); }
.ui-tcc__t-lit { color: var(--ui-tcc-lit); }

.ui-tcc__more {
  all: unset;
  justify-self: start;
  padding: 2px 4px;
  margin-left: -4px;
  border-radius: 6px;
  color: var(--ui-tcc-text);
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: color 160ms ease;
}

/* Error: the message on a faint red panel and an optional white Retry button */
.ui-tcc__error {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 8px 8px 8px 12px;
  border-radius: 8px;
  background: var(--ui-tcc-red-bg);
  box-shadow: inset 0 0 0 0.5px var(--ui-tcc-red-line);
}
.ui-tcc__error > .ui-tcc__err { flex: none; align-self: flex-start; width: 16px; height: 16px; margin-top: 6px; }
.ui-tcc__error-text {
  flex: 1;
  min-width: 0;
  margin: 0;
  color: var(--ui-tcc-red);
  font-size: 13px;
  line-height: 20px;
  overflow-wrap: anywhere;
}
.ui-tcc__retry {
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: none;
  height: 28px;
  padding: 0 10px 0 6px;
  border-radius: 6px;
  background: var(--ui-tcc-card);
  box-shadow: var(--ui-tcc-shadow);
  color: var(--ui-tcc-strong);
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 160ms ease;
}
.ui-tcc__retry svg { width: 16px; height: 16px; fill: none; stroke: var(--ui-tcc-icon); stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.ui-tcc__retry:active svg { transform: rotate(-60deg); transition: transform 200ms var(--ui-tcc-ease); }

/* Group: one quiet line with the tool icons stacked on small white tiles, the cards below */
.ui-tcc-group { display: grid; }
.ui-tcc-group__head {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-self: start;
  max-width: 100%;
  min-height: 32px;
  margin-left: -6px;
  padding: 4px 10px 4px 6px;
  border-radius: 8px;
  color: var(--ui-tcc-ink);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-tcc-group__stack { display: flex; flex: none; padding: 0.5px; }
.ui-tcc-group__stack .ui-tcc__icon {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: var(--ui-tcc-card);
  box-shadow: var(--ui-tcc-shadow);
  animation: ui-tcc-pop 420ms var(--ui-tcc-ease) both;
}
.ui-tcc-group__stack .ui-tcc__icon + .ui-tcc__icon { margin-left: -4px; }
.ui-tcc-group__stack .ui-tcc__icon > svg { width: 12px; height: 12px; stroke-width: 1.5; }
.ui-tcc-group__title {
  display: flex;
  align-items: baseline;
  gap: 6px;
  min-width: 0;
  white-space: nowrap;
  animation: ui-tcc-in 360ms var(--ui-tcc-ease) both;
}
.ui-tcc-group__label {
  position: relative;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  color: inherit;
  font-weight: 500;
}
.ui-tcc-group__label.ui-tcc__shine { color: var(--ui-tcc-muted); }
.ui-tcc-group__failed { flex: none; color: var(--ui-tcc-red); }
.ui-tcc-group__time { flex: none; color: var(--ui-tcc-faint); font-variant-numeric: tabular-nums; }
.ui-tcc-group__list { display: grid; gap: 8px; padding: 6px 0 2px; }

/* A soft light sweeping over "Using tools\u2026" */
.ui-tcc__shine::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  position: absolute;
  inset: 0;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(90deg, transparent 38%, var(--ui-tcc-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ui-tcc-sweep 1.8s linear infinite;
  pointer-events: none;
}

@keyframes ui-tcc-in {
  from { opacity: 0; transform: translateY(3px); filter: blur(2px); }
  to { opacity: 1; transform: none; filter: none; }
}
@keyframes ui-tcc-pop {
  from { opacity: 0; transform: scale(0.6); }
  to { opacity: 1; transform: none; }
}
@keyframes ui-tcc-spin { to { transform: rotate(360deg); } }
@keyframes ui-tcc-draw { to { stroke-dashoffset: 0; } }
@keyframes ui-tcc-sweep {
  from { background-position: 100% 0; }
  to { background-position: 0% 0; }
}

/* Narrow (phones): a little less padding, the summary gives way first */
@container (max-width: 360px) {
  .ui-tcc__head { gap: 8px; padding: 0 12px; }
  .ui-tcc__sections { padding: 12px 12px 12px; }
}
/* Touch screens: bigger tap targets */
@media (pointer: coarse) {
  .ui-tcc__head { min-height: 52px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-tcc *,
  .ui-tcc-group *,
  .ui-tcc *::after,
  .ui-tcc-group *::after {
    animation-duration: 1ms !important;
    animation-delay: 0ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
  .ui-tcc__shine::after { display: none; }
  .ui-tcc__ok path { stroke-dashoffset: 0; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tcc,
:where(.dark, [data-theme="dark"]) .ui-tcc-group {
  --ui-tcc-card: #1c1c1e;
  --ui-tcc-strong: #ffffff;
  --ui-tcc-ink: rgba(255, 255, 255, 0.9);
  --ui-tcc-text: rgba(255, 255, 255, 0.62);
  --ui-tcc-muted: rgba(255, 255, 255, 0.46);
  --ui-tcc-faint: rgba(255, 255, 255, 0.3);
  --ui-tcc-icon: rgba(255, 255, 255, 0.5);
  --ui-tcc-line: rgba(255, 255, 255, 0.08);
  --ui-tcc-wash: rgba(255, 255, 255, 0.04);
  --ui-tcc-wash-big: rgba(255, 255, 255, 0.025);
  --ui-tcc-code: #212123;
  --ui-tcc-accent: #4d8dff;
  --ui-tcc-red: #ff7b72;
  --ui-tcc-red-bg: rgba(255, 110, 100, 0.07);
  --ui-tcc-red-line: rgba(255, 110, 100, 0.18);
  --ui-tcc-key: rgba(255, 255, 255, 0.9);
  --ui-tcc-str: #5fc8e8;
  --ui-tcc-num: #f2a65a;
  --ui-tcc-lit: #a5a5ff;
  --ui-tcc-shine: #ffffff;
  --ui-tcc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-tcc-focus: rgba(77, 141, 255, 0.5);
}
`;
var y = [0, 1500, 2700, 4300, 5400, 6700, 8e3];
var b = 11500;
var x = { results: [{ title: `HubSpot Sales Hub pricing`, url: `https://www.hubspot.com/pricing/sales`, price_per_seat: 90 }, { title: `Pipedrive plans and pricing`, url: `https://www.pipedrive.com/en/pricing`, price_per_seat: 49 }, { title: `Attio pricing`, url: `https://attio.com/pricing`, price_per_seat: 59 }, { title: `Salesforce Starter Suite`, url: `https://www.salesforce.com/sales/pricing`, price_per_seat: 25 }, { title: `Close CRM pricing`, url: `https://www.close.com/pricing`, price_per_seat: 49 }], total: 5, cached: false };
function S() {
  let [e, t] = (0, n3.useState)(0), [o2, s2] = (0, n3.useState)(0), [c2, l2] = (0, n3.useState)(true), u2 = (0, n3.useRef)(false);
  (0, n3.useEffect)(() => {
    u2.current = false, s2(0), l2(true);
    let e2 = y.slice(1).map((e3, t2) => window.setTimeout(() => s2((e4) => Math.max(e4, t2 + 1)), e3));
    return e2.push(window.setTimeout(() => !u2.current && l2(false), y[6])), e2.push(window.setTimeout(() => !u2.current && t((e3) => e3 + 1), b)), () => e2.forEach(clearTimeout);
  }, [e]);
  let d2 = o2 === 2 ? `error` : o2 >= 4 ? `success` : `running`;
  return (0, r.jsx)(`div`, { className: `tc-demo`, children: (0, r.jsxs)(`div`, { className: `tc-demo__chat`, children: [(0, r.jsx)(`p`, { className: `tc-demo__you`, children: `Compare CRM pricing for our 10-person team and check open deals.` }), (0, r.jsxs)(a, { open: c2, onOpenChange: (e2) => {
    u2.current = true, l2(e2);
  }, children: [(0, r.jsx)(i, { name: `search_web`, icon: (0, r.jsx)(C, {}), status: o2 >= 1 ? `success` : `running`, summary: o2 >= 1 ? `Searched the web for 'CRM pricing 2026'` : `Searching the web for 'CRM pricing 2026'`, args: { query: `CRM pricing 2026 small sales team`, max_results: 5 }, result: o2 >= 1 ? x : void 0 }), o2 >= 1 && (0, r.jsx)(i, { name: `fetch_page`, icon: (0, r.jsx)(w, {}), status: d2, summary: d2 === `success` ? `Read hubspot.com/pricing` : `Reading hubspot.com/pricing`, args: { url: `https://www.hubspot.com/pricing/sales`, timeout_ms: 8e3 }, result: d2 === `success` ? { status: 200, title: `Sales Hub Pricing`, words: 2140 } : void 0, error: `Request timed out after 8s \u2013 hubspot.com didn't respond.`, onRetry: () => s2((e2) => Math.max(e2, 3)) }), o2 >= 4 && (0, r.jsx)(i, { name: `crm.list_deals`, icon: (0, r.jsx)(T, {}), status: o2 >= 5 ? `success` : `running`, summary: o2 >= 5 ? `Found 4 open deals in negotiation` : `Looking up open deals`, args: { stage: `negotiation`, owner: `me`, limit: 10 }, result: o2 >= 5 ? { count: 4, deals: [{ name: `Northwind`, value: 18400 }, { name: `Globex`, value: 9600 }] } : void 0 })] }, e)] }) });
}
function C() {
  return (0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, children: [(0, r.jsx)(`circle`, { cx: `7`, cy: `7`, r: `4.25` }), (0, r.jsx)(`path`, { d: `m10.25 10.25 3 3` })] });
}
function w() {
  return (0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, children: [(0, r.jsx)(`path`, { d: `M4 2.75h5l3 3v7.5H4z` }), (0, r.jsx)(`path`, { d: `M9 2.75v3h3M6 9h4M6 11h3` })] });
}
function T() {
  return (0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, children: [(0, r.jsx)(`ellipse`, { cx: `8`, cy: `4`, rx: `4.75`, ry: `1.75` }), (0, r.jsx)(`path`, { d: `M3.25 4v8c0 .97 2.13 1.75 4.75 1.75s4.75-.78 4.75-1.75V4M3.25 8c0 .97 2.13 1.75 4.75 1.75S12.75 8.97 12.75 8` })] });
}
export {
  S as default
};
