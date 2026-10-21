import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo.clean-DWvTXnKE.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [`Thinking`, `Searching the web`, `Reading sources`, `Writing response`];
var a = Array.from({ length: 8 }, (e, t) => t);
function o({ phases: e = i, interval: t = 2200, phase: o2, loop: c2 = false, done: l2 = false, doneLabel: u2 = (e2) => `Thought for ${e2}s`, size: d2 = `md`, variant: f = `pill`, className: p }) {
  let [m, h] = (0, n3.useState)(0), [g, _] = (0, n3.useState)(() => Date.now()), [v, y] = (0, n3.useState)(null), b = v ?? Math.max(1, Math.round((Date.now() - g) / 1e3));
  l2 && v === null && y(b), !l2 && v !== null && (y(null), _(Date.now()), h(0)), (0, n3.useEffect)(() => {
    if (l2 || o2 !== void 0 || e.length < 2) return;
    let n4 = window.setInterval(() => {
      h((t2) => t2 + 1 < e.length ? t2 + 1 : c2 ? 0 : t2);
    }, t);
    return () => window.clearInterval(n4);
  }, [l2, o2, e.length, t, c2]);
  let x = Math.min(Math.max(o2 ?? m, 0), Math.max(e.length - 1, 0)), S = l2 ? typeof u2 == `function` ? u2(b) : u2 : e[x] ?? ``, [C, w] = (0, n3.useState)({ key: 0, text: S }), [T, E] = (0, n3.useState)(null);
  S !== C.text && (E(C), w({ key: C.key + 1, text: S }));
  let D = (0, n3.useRef)(null), O = (0, n3.useRef)(null), k = (0, n3.useRef)(false);
  return (0, n3.useLayoutEffect)(() => {
    let e2 = D.current, t2 = O.current;
    e2 && t2 && (k.current || (e2.style.transition = `none`), e2.style.width = `${t2.offsetWidth + 1}px`, k.current ||= (e2.getBoundingClientRect(), e2.style.transition = ``, true));
  }, [C.key]), (0, r.jsxs)(`span`, { className: [`ui-tlc`, p].filter(Boolean).join(` `), "data-size": d2, "data-variant": f, "data-done": l2 || void 0, role: `status`, "aria-live": `polite`, children: [(0, r.jsx)(`style`, { href: `ui-thinking-loader-clean`, precedence: `default`, children: s }), (0, r.jsxs)(`span`, { className: `ui-tlc__icon`, "aria-hidden": `true`, children: [(0, r.jsx)(`svg`, { className: `ui-tlc__spinner`, viewBox: `0 0 16 16`, children: a.map((e2) => (0, r.jsx)(`line`, { x1: `8`, y1: `1.75`, x2: `8`, y2: `4.75`, transform: `rotate(${e2 * 45} 8 8)`, style: { animationDelay: `${(e2 - 8) * 100}ms` } }, e2)) }), (0, r.jsx)(`svg`, { className: `ui-tlc__check`, viewBox: `0 0 16 16`, children: (0, r.jsx)(`path`, { d: `M3.5 8.4 6.6 11.3 12.5 4.9`, pathLength: 1 }) })] }), (0, r.jsxs)(`span`, { ref: D, className: `ui-tlc__text`, children: [T && (0, r.jsx)(`span`, { className: `ui-tlc__label ui-tlc__label--out`, "aria-hidden": `true`, onAnimationEnd: () => E(null), children: T.text }, T.key), (0, r.jsx)(`span`, { ref: O, className: [`ui-tlc__label`, C.key > 0 && `ui-tlc__label--in`, !l2 && `ui-tlc__shine`].filter(Boolean).join(` `), "data-text": C.text, children: C.text }, C.key)] })] });
}
var s = `
.ui-tlc {
  --ui-tlc-ink: rgba(0, 0, 0, 0.88);
  --ui-tlc-text: rgba(0, 0, 0, 0.61);
  --ui-tlc-accent: rgba(0, 96, 226, 0.765);
  --ui-tlc-bg: #ffffff;
  --ui-tlc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-tlc-shine: rgba(255, 255, 255, 0.82);
  --ui-tlc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ui-tlc-h: 32px;
  --ui-tlc-font: 13px;
  --ui-tlc-lh: 20px;
  --ui-tlc-icon: 16px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  box-sizing: border-box;
  height: var(--ui-tlc-h);
  padding: 0 10px 0 8px;
  border-radius: 8px;
  background: var(--ui-tlc-bg);
  box-shadow: var(--ui-tlc-shadow);
  color: var(--ui-tlc-text);
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: var(--ui-tlc-font);
  font-weight: 500;
  line-height: var(--ui-tlc-lh);
  letter-spacing: -0.003em;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
}
.ui-tlc[data-size="sm"] {
  --ui-tlc-h: 26px;
  --ui-tlc-font: 12px;
  --ui-tlc-lh: 16px;
  --ui-tlc-icon: 14px;
  gap: 5px;
  padding: 0 8px 0 6px;
  border-radius: 6px;
}
.ui-tlc[data-variant="plain"] {
  height: auto;
  padding: 0;
  background: none;
  box-shadow: none;
}

/* Spinner and check share one square and swap with a little scale */
.ui-tlc__icon {
  position: relative;
  flex: none;
  width: var(--ui-tlc-icon);
  height: var(--ui-tlc-icon);
}
.ui-tlc__icon svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  transition: opacity 240ms ease, transform 420ms var(--ui-tlc-ease);
}
/* Thin rays in the accent blue \u2013 they fade one after another, so the spinner turns without rotating */
.ui-tlc__spinner line {
  stroke: var(--ui-tlc-accent);
  stroke-width: 1.1;
  stroke-linecap: round;
  opacity: 0.2;
  animation: ui-tlc-ray 800ms linear infinite;
}
.ui-tlc__check {
  opacity: 0;
  transform: scale(0.6);
  fill: none;
  stroke: var(--ui-tlc-accent);
  stroke-width: 1.2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.ui-tlc__check path {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
}
.ui-tlc[data-done] .ui-tlc__spinner {
  opacity: 0;
  transform: scale(0.6) rotate(-45deg);
}
.ui-tlc[data-done] .ui-tlc__check {
  opacity: 1;
  transform: none;
}
.ui-tlc[data-done] .ui-tlc__check path {
  animation: ui-tlc-draw 360ms var(--ui-tlc-ease) 120ms forwards;
}

/* The text box glides to the width of the incoming label; labels roll through it */
.ui-tlc__text {
  position: relative;
  display: block;
  height: var(--ui-tlc-lh);
  overflow: hidden;
  transition: width 460ms var(--ui-tlc-ease);
}
.ui-tlc__label {
  position: absolute;
  top: 0;
  left: 0;
  line-height: var(--ui-tlc-lh);
  white-space: nowrap;
}
.ui-tlc[data-done] .ui-tlc__label {
  color: var(--ui-tlc-ink);
}
.ui-tlc__label--in {
  animation: ui-tlc-in 460ms var(--ui-tlc-ease) both;
}
.ui-tlc__label--out {
  animation: ui-tlc-out 320ms var(--ui-tlc-ease) both;
}

/* A darker band sweeping through the gray label while it works */
.ui-tlc__shine::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  position: absolute;
  inset: 0;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(90deg, transparent 38%, var(--ui-tlc-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ui-tlc-sweep 1.6s linear infinite;
  pointer-events: none;
}

@keyframes ui-tlc-ray {
  0% { opacity: 1; }
  100% { opacity: 0.2; }
}
@keyframes ui-tlc-in {
  from { opacity: 0; transform: translateY(70%); filter: blur(3px); }
  to { opacity: 1; transform: none; filter: none; }
}
@keyframes ui-tlc-out {
  from { opacity: 1; transform: none; filter: none; }
  to { opacity: 0; transform: translateY(-70%); filter: blur(3px); }
}
@keyframes ui-tlc-draw {
  to { stroke-dashoffset: 0; }
}
@keyframes ui-tlc-sweep {
  from { background-position: 100% 0; }
  to { background-position: 0% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-tlc *,
  .ui-tlc *::after {
    animation-duration: 1ms !important;
    animation-delay: 0ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
  .ui-tlc__spinner line { opacity: 0.6; }
  .ui-tlc__shine::after { display: none; }
  .ui-tlc__check path { stroke-dashoffset: 0; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tlc {
  --ui-tlc-ink: rgba(255, 255, 255, 0.9);
  --ui-tlc-text: rgba(255, 255, 255, 0.62);
  --ui-tlc-accent: #4d8dff;
  --ui-tlc-bg: #1c1c1e;
  --ui-tlc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px rgba(0, 0, 0, 0.4);
  --ui-tlc-shine: #ffffff;
}
`;
var c = [`Thinking`, `Searching the web`, `Reading 12 sources`, `Comparing pricing`, `Writing response`];
var l = 2e3;
var u = 2600;
function d() {
  let [e, t] = (0, n3.useState)(0), [i2, a2] = (0, n3.useState)(false);
  return (0, n3.useEffect)(() => {
    let e2 = window.setTimeout(() => a2(true), c.length * l), n4 = window.setTimeout(() => {
      a2(false), t((e3) => e3 + 1);
    }, c.length * l + u);
    return () => {
      window.clearTimeout(e2), window.clearTimeout(n4);
    };
  }, [e]), (0, r.jsx)(`div`, { className: `tl-demo tl-demo--clean`, children: (0, r.jsxs)(`div`, { className: `tl-demo__chat`, children: [(0, r.jsx)(`p`, { className: `tl-demo__you`, children: `Which CRM fits a 10-person sales team best?` }), (0, r.jsx)(o, { phases: c, interval: l, done: i2 }, e)] }) });
}
export {
  d as default
};
