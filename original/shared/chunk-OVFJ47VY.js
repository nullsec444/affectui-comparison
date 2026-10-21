import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-BijqyLh8.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function i({ children: e, maxTilt: t = 10, glare: i2 = true, scale: o2 = 1.02, perspective: s = 900, className: c }) {
  let l = (0, n3.useRef)(null), u = (0, n3.useRef)(null), d = (0, n3.useRef)(0), f = (0, n3.useRef)(null), p = (0, n3.useRef)(false);
  (0, n3.useEffect)(() => {
    let e2 = window.matchMedia(`(prefers-reduced-motion: reduce)`), t2 = () => p.current = e2.matches;
    return t2(), e2.addEventListener(`change`, t2), () => {
      e2.removeEventListener(`change`, t2), cancelAnimationFrame(d.current);
    };
  }, []);
  let m = () => {
    d.current = 0;
    let e2 = l.current, n4 = u.current, r2 = f.current;
    if (!e2 || !n4 || !r2) return;
    let i3 = e2.getBoundingClientRect(), a2 = Math.min(Math.max((r2.x - i3.left) / i3.width, 0), 1), o3 = Math.min(Math.max((r2.y - i3.top) / i3.height, 0), 1);
    n4.style.setProperty(`--rx`, `${((0.5 - o3) * 2 * t).toFixed(2)}deg`), n4.style.setProperty(`--ry`, `${((a2 - 0.5) * 2 * t).toFixed(2)}deg`), n4.style.setProperty(`--gx`, `${(a2 * 100).toFixed(1)}%`), n4.style.setProperty(`--gy`, `${(o3 * 100).toFixed(1)}%`);
  }, h = (e2) => {
    if (e2.pointerType === `touch`) return;
    let t2 = u.current;
    t2 && !t2.hasAttribute(`data-active`) && t2.setAttribute(`data-active`, ``), !p.current && (f.current = { x: e2.clientX, y: e2.clientY }, d.current ||= requestAnimationFrame(m));
  }, g = () => {
    cancelAnimationFrame(d.current), d.current = 0, f.current = null;
    let e2 = u.current;
    e2 && (e2.removeAttribute(`data-active`), e2.style.setProperty(`--rx`, `0deg`), e2.style.setProperty(`--ry`, `0deg`));
  }, _ = { "--ui-tc-perspective": `${s}px`, "--ui-tc-scale": o2 };
  return (0, r.jsxs)(`div`, { ref: l, className: [`ui-tc`, c].filter(Boolean).join(` `), style: _, onPointerMove: h, onPointerLeave: g, onPointerCancel: g, children: [(0, r.jsx)(`style`, { href: `ui-tilt-card`, precedence: `default`, children: a }), (0, r.jsxs)(`div`, { ref: u, className: `ui-tc-card`, children: [e, i2 && (0, r.jsx)(`span`, { className: `ui-tc-glare`, "aria-hidden": `true` })] })] });
}
var a = `.ui-tc{--ui-tc-radius: 20px;--ui-tc-shadow: 0 1px 2px rgba(0, 0, 0, 0.06), 0 8px 24px -12px rgba(0, 0, 0, 0.18);--ui-tc-shadow-active: 0 2px 4px rgba(0, 0, 0, 0.05), 0 24px 48px -16px rgba(0, 0, 0, 0.3);--ui-tc-glare-color: rgba(255, 255, 255, 0.32);--ui-tc-spring: cubic-bezier(0.34, 1.36, 0.64, 1);display: inline-block;perspective: var(--ui-tc-perspective)}.ui-tc-card{--rx: 0deg;--ry: 0deg;--gx: 50%;--gy: 50%;--ui-tc-lift: 0px;--ui-tc-s: 1;position: relative;overflow: hidden;border-radius: var(--ui-tc-radius);box-shadow: var(--ui-tc-shadow);transform: translateY(var(--ui-tc-lift)) rotateX(var(--rx)) rotateY(var(--ry)) scale(var(--ui-tc-s));transition: transform 700ms var(--ui-tc-spring), box-shadow 500ms ease;will-change: transform}.ui-tc-card[data-active]{--ui-tc-s: var(--ui-tc-scale);--ui-tc-lift: -2px;box-shadow: var(--ui-tc-shadow-active);transition: transform 140ms ease-out, box-shadow 300ms ease}.ui-tc:has(:focus-visible) .ui-tc-card{--ui-tc-lift: -4px;box-shadow: var(--ui-tc-shadow-active)}.ui-tc-glare{position: absolute;inset: 0;z-index: 1;border-radius: inherit;pointer-events: none;background: radial-gradient(circle at var(--gx) var(--gy), var(--ui-tc-glare-color), transparent 55%);mix-blend-mode: soft-light;opacity: 0;transition: opacity 400ms ease}.ui-tc-card[data-active] .ui-tc-glare{opacity: 1}@media (hover: none), (pointer: coarse){.ui-tc-card[data-active]{--ui-tc-s: 1}}@media (prefers-reduced-motion: reduce){.ui-tc-card, .ui-tc-card[data-active], .ui-tc:has(:focus-visible) .ui-tc-card{transform: none;transition: box-shadow 300ms ease}.ui-tc-glare{display: none}}:where(.dark, [data-theme="dark"]) .ui-tc{--ui-tc-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 8px 24px -12px rgba(0, 0, 0, 0.6);--ui-tc-shadow-active: 0 2px 4px rgba(0, 0, 0, 0.4), 0 28px 56px -16px rgba(0, 0, 0, 0.75);--ui-tc-glare-color: rgba(255, 255, 255, 0.24)}`;
function o() {
  return (0, r.jsxs)(`div`, { className: `tilt-card-demo`, children: [(0, r.jsx)(i, { children: (0, r.jsxs)(`div`, { className: `tilt-card-demo__card`, children: [(0, r.jsxs)(`div`, { className: `tilt-card-demo__top`, children: [(0, r.jsxs)(`span`, { className: `tilt-card-demo__brand`, children: [`affectUI `, (0, r.jsx)(`b`, { children: `Pro` })] }), (0, r.jsx)(`svg`, { className: `tilt-card-demo__wave`, viewBox: `0 0 24 24`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M8.5 7.5a7 7 0 0 1 0 9M12 5a10.5 10.5 0 0 1 0 14M15.5 2.5a14 14 0 0 1 0 19` }) })] }), (0, r.jsx)(`span`, { className: `tilt-card-demo__chip`, "aria-hidden": `true` }), (0, r.jsx)(`div`, { className: `tilt-card-demo__number`, children: `\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4821` }), (0, r.jsxs)(`div`, { className: `tilt-card-demo__bottom`, children: [(0, r.jsxs)(`div`, { children: [(0, r.jsx)(`span`, { className: `tilt-card-demo__label`, children: `Member` }), (0, r.jsx)(`span`, { className: `tilt-card-demo__value`, children: `Alex Morgan` })] }), (0, r.jsxs)(`div`, { children: [(0, r.jsx)(`span`, { className: `tilt-card-demo__label`, children: `Since` }), (0, r.jsx)(`span`, { className: `tilt-card-demo__value`, children: `10/26` })] })] })] }) }), (0, r.jsx)(`p`, { className: `tilt-card-demo__caption`, children: `Move your pointer over the card` })] });
}

export {
  o
};
