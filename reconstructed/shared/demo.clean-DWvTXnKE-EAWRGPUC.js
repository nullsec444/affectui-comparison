import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";
import "./chunk-JTXQSSYA.js";
import "./chunk-CTH3ASD6.js";

// reconstructed/demo.clean-DWvTXnKE.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [`Thinking`, `Searching the web`, `Reading sources`, `Writing response`];
var a = Array.from({
  length: 8
}, (e, t) => t);
function O1Component({
  phases: phases2 = i,
  interval: interval2 = 2200,
  phase,
  loop = false,
  done = false,
  doneLabel = (e) => `Thought for ${e}s`,
  size = `md`,
  variant = `pill`,
  className
}) {
  let [m, setM] = n3.useState(0);
  let [g, setG] = n3.useState(() => Date.now());
  let [v, setV] = n3.useState(null);
  let b = v ?? Math.max(1, Math.round((Date.now() - g) / 1e3));
  if (done && v === null) {
    setV(b);
  }
  if (!done && v !== null) {
    setV(null);
    setG(Date.now());
    setM(0);
  }
  n3.useEffect(() => {
    if (done || phase !== void 0 || phases2.length < 2) {
      return;
    }
    let n4 = window.setInterval(() => {
      setM((t) => {
        if (t + 1 < phases2.length) {
          return t + 1;
        }
        if (loop) {
          return 0;
        }
        return t;
      });
    }, interval2);
    return () => window.clearInterval(n4);
  }, [done, phase, phases2.length, interval2, loop]);
  let x = Math.min(Math.max(phase ?? m, 0), Math.max(phases2.length - 1, 0));
  let text = done ? typeof doneLabel == `function` ? doneLabel(b) : doneLabel : phases2[x] ?? ``;
  let [C, setC] = n3.useState({
    key: 0,
    text
  });
  let [T, setT] = n3.useState(null);
  if (text !== C.text) {
    setT(C);
    setC({
      key: C.key + 1,
      text
    });
  }
  let DRef = n3.useRef(null);
  let ORef = n3.useRef(null);
  let kRef = n3.useRef(false);
  n3.useLayoutEffect(() => {
    let DRef_current = DRef.current;
    let ORef_current = ORef.current;
    if (DRef_current && ORef_current) {
      if (!kRef.current) {
        DRef_current.style.transition = `none`;
      }
      DRef_current.style.width = `${ORef_current.offsetWidth + 1}px`;
      kRef.current ||= (DRef_current.getBoundingClientRect(), DRef_current.style.transition = ``, true);
    }
  }, [C.key]);
  return /* @__PURE__ */ jsxs("span", { className: [`ui-tlc`, className].filter(Boolean).join(` `), "data-size": size, "data-variant": variant, "data-done": done || void 0, role: `status`, "aria-live": `polite`, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-thinking-loader-clean`, precedence: `default`, children: s }),
    /* @__PURE__ */ jsxs("span", { className: `ui-tlc__icon`, "aria-hidden": `true`, children: [
      /* @__PURE__ */ jsx("svg", { className: `ui-tlc__spinner`, viewBox: `0 0 16 16`, children: a.map((e) => /* @__PURE__ */ jsx("line", { x1: `8`, y1: `1.75`, x2: `8`, y2: `4.75`, transform: `rotate(${e * 45} 8 8)`, style: {
        animationDelay: `${(e - 8) * 100}ms`
      } }, e)) }),
      /* @__PURE__ */ jsx("svg", { className: `ui-tlc__check`, viewBox: `0 0 16 16`, children: /* @__PURE__ */ jsx("path", { d: `M3.5 8.4 6.6 11.3 12.5 4.9`, pathLength: 1 }) })
    ] }),
    /* @__PURE__ */ jsxs("span", { ref: DRef, className: `ui-tlc__text`, children: [
      T && /* @__PURE__ */ jsx("span", { className: `ui-tlc__label ui-tlc__label--out`, "aria-hidden": `true`, onAnimationEnd: () => setT(null), children: T.text }, T.key),
      /* @__PURE__ */ jsx("span", { ref: ORef, className: [`ui-tlc__label`, C.key > 0 && `ui-tlc__label--in`, !done && `ui-tlc__shine`].filter(Boolean).join(` `), "data-text": C.text, children: C.text }, C.key)
    ] })
  ] });
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
var phases = [`Thinking`, `Searching the web`, `Reading 12 sources`, `Comparing pricing`, `Writing response`];
var interval = 2e3;
var u = 2600;
function DComponent() {
  let [e, setE] = n3.useState(0);
  let [done, setDone] = n3.useState(false);
  n3.useEffect(() => {
    let e2 = window.setTimeout(() => setDone(true), phases.length * interval);
    let n4 = window.setTimeout(() => {
      setDone(false);
      setE((e3) => e3 + 1);
    }, phases.length * interval + u);
    return () => {
      window.clearTimeout(e2);
      window.clearTimeout(n4);
    };
  }, [e]);
  return /* @__PURE__ */ jsx("div", { className: `tl-demo tl-demo--clean`, children: /* @__PURE__ */ jsxs("div", { className: `tl-demo__chat`, children: [
    /* @__PURE__ */ jsx("p", { className: `tl-demo__you`, children: `Which CRM fits a 10-person sales team best?` }),
    /* @__PURE__ */ jsx(O1Component, { phases, interval, done }, e)
  ] }) });
}
export {
  DComponent as default
};
