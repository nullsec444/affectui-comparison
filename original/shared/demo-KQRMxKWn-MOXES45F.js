import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo-KQRMxKWn.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [{ title: `Triggered by events`, hint: `Webhooks`, icon: `bolt` }, { title: `Grounded in your data`, hint: `Context`, icon: `database` }, { title: `Connected to your apps`, hint: `APIs`, icon: `plug` }, { title: `Works with any model`, hint: `Routing`, icon: `spark` }, { title: `Traced at every step`, hint: `Logs`, icon: `pulse` }];
var a = 104;
var o = 26;
var s = 34;
var c = 9;
var l = 168;
var u = 109;
function d({ items: e = i, defaultIndex: t = 0, interval: d2 = 2600, onChange: m2, className: h }) {
  let g = `ui-lyr` + (0, n3.useId)().replace(/[^a-zA-Z0-9_-]/g, ``), _ = e.slice(0, 5), [v, y] = (0, n3.useState)(Math.min(t, _.length - 1)), [b, x] = (0, n3.useState)(false), S = (0, n3.useRef)(false);
  (0, n3.useEffect)(() => {
    if (b || S.current || _.length < 2 || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) return;
    let e2 = window.setInterval(() => y((e3) => (e3 + 1) % _.length), d2);
    return () => window.clearInterval(e2);
  }, [b, d2, _.length]);
  let C = (e2) => {
    S.current = true, y(e2), m2?.(e2);
  }, w = _.length - 1, T = (e2) => u + e2 * o - (e2 < v ? 58 : e2 === v && v < w ? s : 0);
  return (0, r.jsxs)(`div`, { className: [`ui-lyr`, h].filter(Boolean).join(` `), onMouseEnter: () => x(true), onMouseLeave: () => x(false), onFocus: () => x(true), onBlur: () => x(false), children: [(0, r.jsx)(`style`, { href: `ui-layer-stack`, precedence: `default`, children: p }), (0, r.jsxs)(`svg`, { className: `ui-lyr-stack`, viewBox: `0 0 600 400`, "aria-hidden": `true`, children: [(0, r.jsx)(`defs`, { children: (0, r.jsx)(`filter`, { id: `${g}-glow`, x: `-60%`, y: `-120%`, width: `220%`, height: `340%`, children: (0, r.jsx)(`feGaussianBlur`, { stdDeviation: `14` }) }) }), _.map((e2, t2) => (0, r.jsxs)(`g`, { className: `ui-lyr-layer`, "data-active": t2 === v ? `` : void 0, "data-above": t2 < v ? `` : void 0, style: { transform: `translate(${l}px, ${T(t2)}px)` }, children: [(0, r.jsx)(`ellipse`, { className: `ui-lyr-glow`, cx: 0, cy: 79, rx: 70, ry: 24, filter: `url(#${g}-glow)` }), (0, r.jsxs)(`g`, { transform: `translate(0 ${c}) matrix(1 0.5 -1 0.5 0 0)`, children: [(0, r.jsx)(`rect`, { className: `ui-lyr-side`, width: a, height: a, rx: 9 }), (0, r.jsx)(`rect`, { className: `ui-lyr-side-on`, width: a, height: a, rx: 9 })] }), (0, r.jsxs)(`g`, { transform: `matrix(1 0.5 -1 0.5 0 0)`, children: [(0, r.jsx)(`rect`, { className: `ui-lyr-face`, width: a, height: a, rx: 9 }), (0, r.jsx)(`rect`, { className: `ui-lyr-face-on`, width: a, height: a, rx: 9 }), (0, r.jsx)(`g`, { className: `ui-lyr-icon`, transform: `translate(${a / 2 - 18} ${a / 2 - 18}) scale(1.5)`, children: f[e2.icon ?? `bolt`] })] })] }, t2)).reverse()] }), (0, r.jsxs)(`div`, { className: `ui-lyr-menu`, role: `tablist`, "aria-label": `Layers`, "aria-orientation": `vertical`, children: [(0, r.jsx)(`span`, { className: `ui-lyr-pill`, "aria-hidden": `true`, style: { transform: `translateY(calc(${v} * var(--ui-lyr-row)))` } }), _.map((e2, t2) => (0, r.jsxs)(`button`, { type: `button`, role: `tab`, "aria-selected": t2 === v, tabIndex: t2 === v ? 0 : -1, className: `ui-lyr-row`, onClick: () => C(t2), onKeyDown: (e3) => {
    let n4 = e3.key === `ArrowDown` ? t2 + 1 : e3.key === `ArrowUp` ? t2 - 1 : null;
    if (n4 === null) return;
    e3.preventDefault();
    let r2 = (n4 + _.length) % _.length;
    C(r2), e3.currentTarget.parentElement?.children[r2 + 1]?.focus();
  }, children: [(0, r.jsx)(`span`, { className: `ui-lyr-title`, children: e2.title }), e2.hint && (0, r.jsx)(`span`, { className: `ui-lyr-hint`, children: e2.hint })] }, t2))] })] });
}
var f = { bolt: (0, r.jsx)(`path`, { d: `M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z` }), database: (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`ellipse`, { cx: `12`, cy: `6`, rx: `7`, ry: `3` }), (0, r.jsx)(`path`, { d: `M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3` })] }), plug: (0, r.jsx)(`path`, { d: `M9 3v5M15 3v5M6.5 8h11v3a5.5 5.5 0 0 1-11 0V8ZM12 16.5V21` }), spark: (0, r.jsx)(`path`, { d: `M12 3c.6 4.6 2.4 6.4 7 7-4.6.6-6.4 2.4-7 7-.6-4.6-2.4-6.4-7-7 4.6-.6 6.4-2.4 7-7ZM18.5 15.5c.2 1.5.8 2.1 2.3 2.3-1.5.2-2.1.8-2.3 2.3-.2-1.5-.8-2.1-2.3-2.3 1.5-.2 2.1-.8 2.3-2.3Z` }), pulse: (0, r.jsx)(`path`, { d: `M3 12h4l2.5-6 5 12 2.5-6h4` }) };
var p = `
.ui-lyr {
  /* 1 unit of the 600 \xD7 400 layout grid */
  --u: calc(100cqw / 600);
  --ui-lyr-row: calc(52 * var(--u));
  /* The accent blue used across the library */
  --ui-lyr-accent: #2f6bff;
  --ui-lyr-accent-deep: #2557d9;
  --ui-lyr-tint: #e9f0ff;
  --ui-lyr-glow: rgba(47, 107, 255, 0.28);
  --ui-lyr-face: rgba(255, 255, 255, 0.6);
  --ui-lyr-edge: rgba(10, 10, 10, 0.11);
  --ui-lyr-side: #ececef;
  --ui-lyr-face-above: rgba(255, 255, 255, 0.3);
  --ui-lyr-side-above: rgba(236, 236, 239, 0.55);
  --ui-lyr-panel: #f5f5f5;
  --ui-lyr-pill: #ffffff;
  --ui-lyr-pill-ring: #e5e5e5;
  --ui-lyr-text: #171717;
  --ui-lyr-muted: #8f8f8f;
  --ui-lyr-ease: cubic-bezier(0.65, 0, 0.25, 1);
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  container-type: inline-size;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.ui-lyr *, .ui-lyr *::before, .ui-lyr *::after { box-sizing: border-box; }

/* ---------- Stack ---------- */

.ui-lyr-stack { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.ui-lyr-layer { transition: transform 560ms var(--ui-lyr-ease); }
.ui-lyr-glow {
  fill: var(--ui-lyr-glow);
  opacity: 0;
  transition: opacity 420ms ease;
}
.ui-lyr-layer[data-active] .ui-lyr-glow { opacity: 1; }
.ui-lyr-side-on {
  fill: var(--ui-lyr-accent-deep);
  opacity: 0;
  transition: opacity 360ms ease;
}
.ui-lyr-side {
  fill: var(--ui-lyr-side);
  stroke: var(--ui-lyr-edge);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
  transition: fill 360ms ease, stroke 360ms ease;
}
.ui-lyr-face {
  fill: var(--ui-lyr-face);
  stroke: var(--ui-lyr-edge);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
  transition: fill 360ms ease, stroke 360ms ease;
}
.ui-lyr-face-on {
  fill: var(--ui-lyr-tint);
  stroke: var(--ui-lyr-accent);
  opacity: 0;
  stroke-width: 1.6;
  vector-effect: non-scaling-stroke;
  transition: opacity 360ms ease;
}
.ui-lyr-icon {
  fill: none;
  stroke: var(--ui-lyr-accent);
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0;
  transition: opacity 300ms ease;
}
/* Layers above the chosen one turn more glassy, so its color shows through */
.ui-lyr-layer[data-above] .ui-lyr-face { fill: var(--ui-lyr-face-above); }
.ui-lyr-layer[data-above] .ui-lyr-side { fill: var(--ui-lyr-side-above); }
.ui-lyr-layer[data-active] .ui-lyr-side-on { opacity: 1; }
.ui-lyr-layer[data-active] .ui-lyr-face-on { opacity: 1; }
.ui-lyr-layer[data-active] .ui-lyr-icon { opacity: 1; transition-delay: 120ms; }

/* ---------- Menu ---------- */

.ui-lyr-menu {
  position: absolute;
  left: calc(326 * var(--u));
  top: 50%;
  width: calc(248 * var(--u));
  padding: calc(8 * var(--u));
  transform: translateY(-50%);
  border-radius: calc(18 * var(--u));
  background: var(--ui-lyr-panel);
}
/* White card that glides behind the chosen row */
.ui-lyr-pill {
  position: absolute;
  left: calc(8 * var(--u));
  right: calc(8 * var(--u));
  top: calc(8 * var(--u));
  height: var(--ui-lyr-row);
  border-radius: calc(12 * var(--u));
  background: var(--ui-lyr-pill);
  box-shadow: 0 0 0 1px var(--ui-lyr-pill-ring), 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: transform 460ms var(--ui-lyr-ease);
}
.ui-lyr-row {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: calc(10 * var(--u));
  width: 100%;
  height: var(--ui-lyr-row);
  margin: 0;
  padding: 0 calc(14 * var(--u));
  border: 0;
  border-radius: calc(12 * var(--u));
  background: transparent;
  font: inherit;
  text-align: left;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.ui-lyr-row:focus-visible { outline: 2px solid var(--ui-lyr-accent); outline-offset: -2px; }
.ui-lyr-title {
  min-width: 0;
  overflow: hidden;
  font-size: calc(14 * var(--u));
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.01em;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--ui-lyr-text);
  transition: color 300ms ease;
}
.ui-lyr-hint {
  flex: none;
  font-size: calc(12 * var(--u));
  line-height: 1.3;
  color: var(--ui-lyr-muted);
}
.ui-lyr-row[aria-selected="true"] .ui-lyr-title { color: var(--ui-lyr-accent); }

@media (prefers-reduced-motion: reduce) {
  .ui-lyr-layer, .ui-lyr-glow, .ui-lyr-pill { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-lyr {
  --ui-lyr-accent: #6b95ff;
  --ui-lyr-accent-deep: #2f6bff;
  --ui-lyr-tint: #1f2c4d;
  --ui-lyr-glow: rgba(47, 107, 255, 0.3);
  --ui-lyr-face: rgba(255, 255, 255, 0.04);
  --ui-lyr-edge: rgba(255, 255, 255, 0.13);
  --ui-lyr-side: #26262a;
  --ui-lyr-face-above: rgba(255, 255, 255, 0.025);
  --ui-lyr-side-above: rgba(38, 38, 42, 0.5);
  --ui-lyr-panel: #161618;
  --ui-lyr-pill: #232326;
  --ui-lyr-pill-ring: rgba(255, 255, 255, 0.08);
  --ui-lyr-text: #ededed;
  --ui-lyr-muted: #8f8f8f;
}
`;
function m() {
  return (0, r.jsx)(`div`, { className: `layer-stack-demo`, children: (0, r.jsx)(d, {}) });
}
export {
  m as default
};
