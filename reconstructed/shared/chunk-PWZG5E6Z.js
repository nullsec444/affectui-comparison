import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo-BijqyLh8.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function IComponent({
  children,
  maxTilt = 10,
  glare = true,
  scale = 1.02,
  perspective = 900,
  className
}) {
  let lRef = n3.useRef(null);
  let uRef = n3.useRef(null);
  let dRef = n3.useRef(0);
  let fRef = n3.useRef(null);
  let pRef = n3.useRef(false);
  n3.useEffect(() => {
    let e = window.matchMedia(`(prefers-reduced-motion: reduce)`);
    let t = () => pRef.current = e.matches;
    t();
    e.addEventListener(`change`, t);
    return () => {
      e.removeEventListener(`change`, t);
      cancelAnimationFrame(dRef.current);
    };
  }, []);
  let m = () => {
    dRef.current = 0;
    let lRef_current = lRef.current;
    let uRef_current = uRef.current;
    let fRef_current = fRef.current;
    if (!lRef_current || !uRef_current || !fRef_current) {
      return;
    }
    let i = lRef_current.getBoundingClientRect();
    let a2 = Math.min(Math.max((fRef_current.x - i.left) / i.width, 0), 1);
    let o = Math.min(Math.max((fRef_current.y - i.top) / i.height, 0), 1);
    uRef_current.style.setProperty(`--rx`, `${((0.5 - o) * 2 * maxTilt).toFixed(2)}deg`);
    uRef_current.style.setProperty(`--ry`, `${((a2 - 0.5) * 2 * maxTilt).toFixed(2)}deg`);
    uRef_current.style.setProperty(`--gx`, `${(a2 * 100).toFixed(1)}%`);
    uRef_current.style.setProperty(`--gy`, `${(o * 100).toFixed(1)}%`);
  };
  let onPointerMove = (e) => {
    if (e.pointerType === `touch`) {
      return;
    }
    let uRef_current = uRef.current;
    if (uRef_current && !uRef_current.hasAttribute(`data-active`)) {
      uRef_current.setAttribute(`data-active`, ``);
    }
    if (!pRef.current) {
      fRef.current = {
        x: e.clientX,
        y: e.clientY
      };
      dRef.current ||= requestAnimationFrame(m);
    }
  };
  let g = () => {
    cancelAnimationFrame(dRef.current);
    dRef.current = 0;
    fRef.current = null;
    let uRef_current = uRef.current;
    if (uRef_current) {
      uRef_current.removeAttribute(`data-active`);
      uRef_current.style.setProperty(`--rx`, `0deg`);
      uRef_current.style.setProperty(`--ry`, `0deg`);
    }
  };
  let style_1 = {
    "--ui-tc-perspective": `${perspective}px`,
    "--ui-tc-scale": scale
  };
  return /* @__PURE__ */ jsxs("div", { ref: lRef, className: [`ui-tc`, className].filter(Boolean).join(` `), style: style_1, onPointerMove, onPointerLeave: g, onPointerCancel: g, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-tilt-card`, precedence: `default`, children: a }),
    /* @__PURE__ */ jsxs("div", { ref: uRef, className: `ui-tc-card`, children: [
      children,
      glare && /* @__PURE__ */ jsx("span", { className: `ui-tc-glare`, "aria-hidden": `true` })
    ] })
  ] });
}
var a = `.ui-tc{--ui-tc-radius: 20px;--ui-tc-shadow: 0 1px 2px rgba(0, 0, 0, 0.06), 0 8px 24px -12px rgba(0, 0, 0, 0.18);--ui-tc-shadow-active: 0 2px 4px rgba(0, 0, 0, 0.05), 0 24px 48px -16px rgba(0, 0, 0, 0.3);--ui-tc-glare-color: rgba(255, 255, 255, 0.32);--ui-tc-spring: cubic-bezier(0.34, 1.36, 0.64, 1);display: inline-block;perspective: var(--ui-tc-perspective)}.ui-tc-card{--rx: 0deg;--ry: 0deg;--gx: 50%;--gy: 50%;--ui-tc-lift: 0px;--ui-tc-s: 1;position: relative;overflow: hidden;border-radius: var(--ui-tc-radius);box-shadow: var(--ui-tc-shadow);transform: translateY(var(--ui-tc-lift)) rotateX(var(--rx)) rotateY(var(--ry)) scale(var(--ui-tc-s));transition: transform 700ms var(--ui-tc-spring), box-shadow 500ms ease;will-change: transform}.ui-tc-card[data-active]{--ui-tc-s: var(--ui-tc-scale);--ui-tc-lift: -2px;box-shadow: var(--ui-tc-shadow-active);transition: transform 140ms ease-out, box-shadow 300ms ease}.ui-tc:has(:focus-visible) .ui-tc-card{--ui-tc-lift: -4px;box-shadow: var(--ui-tc-shadow-active)}.ui-tc-glare{position: absolute;inset: 0;z-index: 1;border-radius: inherit;pointer-events: none;background: radial-gradient(circle at var(--gx) var(--gy), var(--ui-tc-glare-color), transparent 55%);mix-blend-mode: soft-light;opacity: 0;transition: opacity 400ms ease}.ui-tc-card[data-active] .ui-tc-glare{opacity: 1}@media (hover: none), (pointer: coarse){.ui-tc-card[data-active]{--ui-tc-s: 1}}@media (prefers-reduced-motion: reduce){.ui-tc-card, .ui-tc-card[data-active], .ui-tc:has(:focus-visible) .ui-tc-card{transform: none;transition: box-shadow 300ms ease}.ui-tc-glare{display: none}}:where(.dark, [data-theme="dark"]) .ui-tc{--ui-tc-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 8px 24px -12px rgba(0, 0, 0, 0.6);--ui-tc-shadow-active: 0 2px 4px rgba(0, 0, 0, 0.4), 0 28px 56px -16px rgba(0, 0, 0, 0.75);--ui-tc-glare-color: rgba(255, 255, 255, 0.24)}`;
function OComponent() {
  return /* @__PURE__ */ jsxs("div", { className: `tilt-card-demo`, children: [
    /* @__PURE__ */ jsx(IComponent, { children: /* @__PURE__ */ jsxs("div", { className: `tilt-card-demo__card`, children: [
      /* @__PURE__ */ jsxs("div", { className: `tilt-card-demo__top`, children: [
        /* @__PURE__ */ jsxs("span", { className: `tilt-card-demo__brand`, children: [
          `affectUI `,
          /* @__PURE__ */ jsx("b", { children: `Pro` })
        ] }),
        /* @__PURE__ */ jsx("svg", { className: `tilt-card-demo__wave`, viewBox: `0 0 24 24`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M8.5 7.5a7 7 0 0 1 0 9M12 5a10.5 10.5 0 0 1 0 14M15.5 2.5a14 14 0 0 1 0 19` }) })
      ] }),
      /* @__PURE__ */ jsx("span", { className: `tilt-card-demo__chip`, "aria-hidden": `true` }),
      /* @__PURE__ */ jsx("div", { className: `tilt-card-demo__number`, children: `\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4821` }),
      /* @__PURE__ */ jsxs("div", { className: `tilt-card-demo__bottom`, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: `tilt-card-demo__label`, children: `Member` }),
          /* @__PURE__ */ jsx("span", { className: `tilt-card-demo__value`, children: `Alex Morgan` })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: `tilt-card-demo__label`, children: `Since` }),
          /* @__PURE__ */ jsx("span", { className: `tilt-card-demo__value`, children: `10/26` })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("p", { className: `tilt-card-demo__caption`, children: `Move your pointer over the card` })
  ] });
}

export {
  OComponent
};
