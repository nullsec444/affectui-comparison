import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo-Cm8kSHcX.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [{ cx: 115, cy: 93, r: 43 }, { cx: 163, cy: 111, r: 39 }, { cx: 156, cy: 155, r: 31 }, { cx: 107, cy: 155, r: 35 }, { cx: 72, cy: 126, r: 34 }];
var a = { x: 80, y: 100, width: 80, height: 65 };
var o = { y: 106, w: 18, h: 31, left: 96.5, right: 127.5 };
var s = 120;
var c = 120;
var l = 180;
var u = [{ x: 0, y: 0 }, { x: -1, y: 0.05 }, { x: 1, y: -0.05 }, { x: 0, y: 0 }, { x: 0.65, y: -0.55 }, { x: -0.7, y: 0.35 }];
var d = (e, t, n4) => `translate(${e} ${t}) ${n4} translate(${-e} ${-t})`;
var f = ({ offset: e, color: t, opacity: n4 }) => (0, r.jsx)(`stop`, { offset: e, style: { stopColor: `var(--ui-gc-${t})`, stopOpacity: n4 } });
function p({ background: e = true, color: t = `blue`, followPointer: p2 = true, className: h2, label: g = `A glowing cloud with eyes that floats, looks around and blinks` }) {
  let _ = (0, n3.useId)().replace(/[^a-zA-Z0-9_-]/g, ``), v = (e2) => `gc${_}-${e2}`, y = (0, n3.useRef)(null), b = (0, n3.useRef)(null), x = (0, n3.useRef)(null), S = (0, n3.useRef)(null), C = (0, n3.useRef)(null), w = (0, n3.useRef)(null), T = (0, n3.useRef)(null), E = (0, n3.useRef)(null);
  (0, n3.useEffect)(() => {
    let e2 = y.current;
    if (!e2) return;
    let t2 = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches, n4 = { x: 0, y: 0, vx: 0, vy: 0 }, r2 = { x: 0, y: 0 }, i2 = { p: 0, v: 0 }, a2 = false, f2 = 1.2, m2 = 1.8, h3 = -1, g2 = false, _2 = -1, v2 = 0, D2 = 0, O2 = 0, k = (e3, t3 = 0.16) => e3 < 0 || e3 > t3 ? 1 : 1 - 0.9 * Math.sin(e3 / t3 * Math.PI), A = () => {
      let e3 = t2 ? 0 : Math.sin(O2 * 1.1) * 5, r3 = t2 ? 0 : Math.sin(O2 * 1.1 + Math.PI / 2) * 0.012, a3 = 1 + r3 - i2.p * 0.12, u2 = 1 - r3 + i2.p * 0.1;
      b.current?.setAttribute(`transform`, `translate(0 ${e3.toFixed(2)}) ${d(s, l, `scale(${u2.toFixed(4)} ${a3.toFixed(4)})`)}`), x.current?.setAttribute(`transform`, `translate(${(n4.x * 4).toFixed(2)} ${(n4.y * 2).toFixed(2)}) ${d(s, c, `rotate(${(n4.x * 2.5).toFixed(2)}) scale(${(1 - Math.abs(n4.x) * 0.025).toFixed(4)} 1)`)}`), S.current?.setAttribute(`transform`, `translate(${(n4.x * 12).toFixed(2)} ${(n4.y * 7).toFixed(2)})`), T.current?.setAttribute(`transform`, `translate(${(-n4.x * 7).toFixed(2)} ${(-n4.y * 3).toFixed(2)})`);
      let f3 = h3 < 0 ? 1 : Math.min(k(O2 - h3), g2 ? k(O2 - h3 - 0.26) : 1), p3 = k(O2 - _2, 0.34), m3 = o.y + o.h / 2;
      C.current?.setAttribute(`transform`, d(o.left + o.w / 2, m3, `scale(1 ${f3.toFixed(3)})`)), w.current?.setAttribute(`transform`, d(o.right + o.w / 2, m3, `scale(1 ${Math.min(f3, p3).toFixed(3)})`));
      let v3 = (e3 + 5) / 10;
      E.current?.setAttribute(`transform`, d(s, 210, `scale(${(1 - v3 * 0.12).toFixed(3)} 1)`)), E.current?.setAttribute(`opacity`, (0.34 - v3 * 0.1).toFixed(3));
    }, j = (e3) => {
      let t3 = Math.min(0.05, (e3 - (D2 || e3)) / 1e3);
      if (D2 = e3, O2 += t3, !a2 && O2 > f2) {
        let e4 = u[Math.floor(Math.random() * u.length)];
        r2.x = e4.x, r2.y = e4.y, f2 = O2 + 1.4 + Math.random() * 2.2;
      }
      O2 > m2 && (h3 = O2, g2 = Math.random() < 0.25, m2 = O2 + 2.4 + Math.random() * 3), n4.vx += ((r2.x - n4.x) * 70 - n4.vx * 13) * t3, n4.vy += ((r2.y - n4.y) * 70 - n4.vy * 13) * t3, n4.x += n4.vx * t3, n4.y += n4.vy * t3, i2.v += (-i2.p * 220 - i2.v * 9) * t3, i2.p += i2.v * t3, A(), v2 = requestAnimationFrame(j);
    }, M = () => {
      v2 || t2 || (D2 = 0, v2 = requestAnimationFrame(j));
    }, N = () => {
      cancelAnimationFrame(v2), v2 = 0;
    }, P = new IntersectionObserver(([e3]) => e3.isIntersecting ? M() : N());
    P.observe(e2);
    let F = (t3) => {
      if (!p2) return;
      let n5 = e2.getBoundingClientRect();
      a2 = true, r2.x = Math.max(-1, Math.min(1, ((t3.clientX - n5.left) / n5.width - 0.5) * 2.4)), r2.y = Math.max(-1, Math.min(1, ((t3.clientY - n5.top) / n5.height - 0.5) * 2.4));
    }, I = () => {
      a2 = false, r2.x = 0, r2.y = 0, f2 = O2 + 1.2;
    }, L = () => {
      i2.p = 0.9, i2.v = 0, _2 = O2 + 0.12, t2 && (M(), window.setTimeout(N, 1200));
    };
    return e2.addEventListener(`pointermove`, F), e2.addEventListener(`pointerleave`, I), e2.addEventListener(`pointerdown`, L), A(), () => {
      N(), P.disconnect(), e2.removeEventListener(`pointermove`, F), e2.removeEventListener(`pointerleave`, I), e2.removeEventListener(`pointerdown`, L);
    };
  }, [p2]);
  let D = i.map((e2, t2) => (0, r.jsx)(`circle`, { ...e2 }, t2)), O = (e2, t2, n4) => {
    let i2 = { x: e2, y: o.y, width: o.w, height: o.h, rx: o.w / 2 };
    return (0, r.jsxs)(`g`, { ref: t2, children: [(0, r.jsx)(`rect`, { ...i2, fill: `url(#${v(`eye`)})` }), (0, r.jsx)(`clipPath`, { id: v(`clip-${n4}`), children: (0, r.jsx)(`rect`, { ...i2 }) }), (0, r.jsx)(`rect`, { ...i2, y: o.y + 2.5, className: `ui-gc__eye-shade`, fill: `none`, strokeWidth: `5`, filter: `url(#${v(`edge`)})`, clipPath: `url(#${v(`clip-${n4}`)})` })] });
  };
  return (0, r.jsxs)(`div`, { ref: y, className: [`ui-gc`, h2].filter(Boolean).join(` `), "data-bg": e || void 0, "data-color": t, role: `img`, "aria-label": g, children: [(0, r.jsx)(`style`, { href: `ui-glow-cloud`, precedence: `default`, children: m }), (0, r.jsxs)(`svg`, { viewBox: `0 0 240 240`, "aria-hidden": `true`, children: [(0, r.jsxs)(`defs`, { children: [(0, r.jsxs)(`filter`, { id: v(`goo`), x: `0`, y: `0`, width: `240`, height: `240`, filterUnits: `userSpaceOnUse`, children: [(0, r.jsx)(`feGaussianBlur`, { stdDeviation: `3.5` }), (0, r.jsx)(`feColorMatrix`, { values: `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -12` })] }), (0, r.jsx)(`filter`, { id: v(`soft`), x: `0`, y: `0`, width: `240`, height: `240`, filterUnits: `userSpaceOnUse`, children: (0, r.jsx)(`feGaussianBlur`, { stdDeviation: `7` }) }), (0, r.jsx)(`filter`, { id: v(`halo`), x: `0`, y: `0`, width: `240`, height: `240`, filterUnits: `userSpaceOnUse`, children: (0, r.jsx)(`feGaussianBlur`, { stdDeviation: `9` }) }), (0, r.jsx)(`filter`, { id: v(`edge`), x: `0`, y: `0`, width: `240`, height: `240`, filterUnits: `userSpaceOnUse`, children: (0, r.jsx)(`feGaussianBlur`, { stdDeviation: `1.6` }) }), (0, r.jsx)(`filter`, { id: v(`shade`), x: `0`, y: `0`, width: `240`, height: `240`, filterUnits: `userSpaceOnUse`, children: (0, r.jsx)(`feGaussianBlur`, { stdDeviation: `5` }) }), (0, r.jsxs)(`g`, { id: v(`shape`), filter: `url(#${v(`goo`)})`, children: [D, (0, r.jsx)(`rect`, { ...a })] }), (0, r.jsx)(`mask`, { id: v(`mask`), maskUnits: `userSpaceOnUse`, x: `0`, y: `0`, width: `240`, height: `240`, children: (0, r.jsx)(`use`, { href: `#${v(`shape`)}`, fill: `#fff` }) }), (0, r.jsxs)(`linearGradient`, { id: v(`rim`), x1: `0`, y1: `56`, x2: `0`, y2: `182`, gradientUnits: `userSpaceOnUse`, children: [(0, r.jsx)(f, { offset: 0, color: `rim` }), (0, r.jsx)(f, { offset: 1, color: `white` })] }), (0, r.jsxs)(`radialGradient`, { id: v(`body`), cx: `120`, cy: `108`, r: `78`, gradientUnits: `userSpaceOnUse`, children: [(0, r.jsx)(f, { offset: 0, color: `body-1` }), (0, r.jsx)(f, { offset: 0.6, color: `body-2` }), (0, r.jsx)(f, { offset: 1, color: `body-3` })] }), (0, r.jsxs)(`linearGradient`, { id: v(`eye`), x1: `0`, y1: `0`, x2: `0`, y2: `1`, children: [(0, r.jsx)(f, { offset: 0, color: `white` }), (0, r.jsx)(f, { offset: 1, color: `eye` })] })] }), (0, r.jsx)(`ellipse`, { ref: E, className: `ui-gc__shadow`, cx: s, cy: `210`, rx: `54`, ry: `7`, filter: `url(#${v(`shade`)})` }), (0, r.jsx)(`g`, { ref: b, children: (0, r.jsxs)(`g`, { ref: x, children: [(0, r.jsx)(`use`, { href: `#${v(`shape`)}`, className: `ui-gc__halo`, filter: `url(#${v(`halo`)})` }), (0, r.jsx)(`use`, { href: `#${v(`shape`)}`, className: `ui-gc__edge`, filter: `url(#${v(`edge`)})` }), (0, r.jsxs)(`g`, { mask: `url(#${v(`mask`)})`, children: [(0, r.jsx)(`rect`, { width: `240`, height: `240`, fill: `url(#${v(`rim`)})` }), (0, r.jsxs)(`g`, { filter: `url(#${v(`soft`)})`, fill: `url(#${v(`body`)})`, transform: `translate(0 2) ${d(s, c, `scale(0.9 0.87)`)}`, children: [D, (0, r.jsx)(`rect`, { ...a })] }), (0, r.jsx)(`ellipse`, { ref: T, cx: `104`, cy: `80`, rx: `30`, ry: `12`, fill: `#fff`, opacity: `0.32`, filter: `url(#${v(`shade`)})` })] }), (0, r.jsxs)(`g`, { ref: S, children: [O(o.left, C, `l`), O(o.right, w, `r`)] })] }) })] })] });
}
var m = `
/* Palette as variables \u2013 blue, or red-orange via data-color="orange" */
.ui-gc {
  --ui-gc-sky-top: #2475ea;
  --ui-gc-sky-bottom: #4ac8f5;
  --ui-gc-sky-light: rgba(110, 225, 255, 0.55);
  --ui-gc-white: #ffffff;
  --ui-gc-rim: #f4fcff;
  --ui-gc-body-1: #06a3ff;
  --ui-gc-body-2: #18b2ff;
  --ui-gc-body-3: #58cdff;
  --ui-gc-eye: #cdeeff;
  --ui-gc-eye-shade: rgba(30, 140, 230, 0.3);
  --ui-gc-halo: rgba(30, 150, 255, 0.2);
  --ui-gc-edge: rgba(20, 120, 240, 0.4);
  --ui-gc-shadow: rgba(10, 90, 200, 0.55);
  --ui-gc-ground: rgba(10, 80, 190, 0.4);
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 1;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
.ui-gc[data-color="orange"] {
  --ui-gc-sky-top: #e94135;
  --ui-gc-sky-bottom: #fa9842;
  --ui-gc-sky-light: rgba(255, 205, 150, 0.5);
  --ui-gc-rim: #fff9f5;
  --ui-gc-body-1: #f45434;
  --ui-gc-body-2: #fa7342;
  --ui-gc-body-3: #ffb175;
  --ui-gc-eye: #ffe8db;
  --ui-gc-eye-shade: rgba(230, 90, 50, 0.3);
  --ui-gc-halo: rgba(240, 100, 60, 0.2);
  --ui-gc-edge: rgba(220, 80, 40, 0.4);
  --ui-gc-shadow: rgba(170, 50, 20, 0.5);
  --ui-gc-ground: rgba(150, 30, 10, 0.36);
}
.ui-gc svg { display: block; width: 100%; max-width: 320px; overflow: visible; }
.ui-gc__halo { fill: var(--ui-gc-halo); }
.ui-gc__edge { fill: var(--ui-gc-edge); }
.ui-gc__shadow { fill: var(--ui-gc-shadow); }
.ui-gc__eye-shade { stroke: var(--ui-gc-eye-shade); }

/* The sky: darker at the top, lighter at the bottom, a brighter patch behind the cloud \u2013 fills the whole box */
.ui-gc[data-bg] {
  --ui-gc-halo: rgba(255, 255, 255, 0.55);
  --ui-gc-edge: rgba(255, 255, 255, 0.3);
  --ui-gc-shadow: var(--ui-gc-ground);
  background:
    radial-gradient(60% 55% at 62% 42%, var(--ui-gc-sky-light), transparent 70%),
    linear-gradient(180deg, var(--ui-gc-sky-top), var(--ui-gc-sky-bottom));
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> \u2013 a deeper sky */
:where(.dark, [data-theme="dark"]) .ui-gc {
  --ui-gc-sky-top: #1659c8;
  --ui-gc-sky-bottom: #2aa6e6;
  --ui-gc-sky-light: rgba(90, 205, 255, 0.45);
  --ui-gc-ground: rgba(5, 50, 140, 0.5);
}
:where(.dark, [data-theme="dark"]) .ui-gc[data-color="orange"] {
  --ui-gc-sky-top: #bf2722;
  --ui-gc-sky-bottom: #ed701d;
  --ui-gc-sky-light: rgba(255, 175, 120, 0.42);
  --ui-gc-ground: rgba(110, 15, 5, 0.5);
}
:where(.dark, [data-theme="dark"]) .ui-gc:not([data-bg]) {
  --ui-gc-halo: rgba(255, 255, 255, 0.35);
  --ui-gc-edge: rgba(255, 255, 255, 0.25);
}
`;
function h() {
  return (0, r.jsx)(`div`, { className: `glow-cloud-demo`, children: (0, r.jsx)(p, {}) });
}
export {
  h as default
};
