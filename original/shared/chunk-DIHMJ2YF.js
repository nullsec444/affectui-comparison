import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-B-TgH1P-.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = { k: 1, v1: [926.8, 565.8], c: [302.1, 297.3], l: [291.3, 291.3], bottom: 1222.8, r: [3155.8, 361.3], v4: [2493.8, 565.8], v3: [2189.3, 565.8], m2: [1898.8, 428.8], m1: [1510.8, 428.8], v2: [1230.8, 565.8] };
var a = { k: 0.8427, v1: [781.039, 476.815], c: [254.588, 250.543], l: [245.486, 245.486], bottom: 1030.49, r: [2659.48, 304.477], v4: [2101.59, 476.815], v3: [1844.98, 476.815], m2: [1600.17, 361.361], m1: [1273.19, 361.361], v2: [1037.23, 476.815] };
var o = 110;
var s = 80;
function c(e, t) {
  let n4 = { l: o * Math.sin(t), m: -110 * Math.sin(t + 0.5), r: o * Math.sin(t + 1), vL: s * Math.sin(t + Math.PI / 2 + 0.25), vR: s * Math.sin(t - Math.PI / 2 + 0.75) }, r2 = (t2, n5) => (t2[1] + n5 * e.k).toFixed(1);
  return `M${e.v1[0]} ${r2(e.v1, n4.vL)}C${e.v1[0]} ${r2(e.v1, n4.vL)} ${e.c[0]} ${r2(e.c, n4.l)} ${e.l[0]} ${r2(e.l, n4.l)}V${e.bottom}H${e.r[0]}V${r2(e.r, n4.r)}L${e.v4[0]} ${r2(e.v4, n4.vR)}H${e.v3[0]}V${r2(e.v3, n4.vR)}L${e.m2[0]} ${r2(e.m2, n4.m)}H${e.m1[0]}V${r2(e.m1, n4.m)}L${e.v2[0]} ${r2(e.v2, n4.vL)}H${e.v1[0]}V${r2(e.v1, n4.vL)}Z`;
}
function l({ children: e, colors: t = [`#FF7700`, `#FF0055`, `#0073FF`], speed: o2 = 3, className: s2 }) {
  let l2 = `ui-gf` + (0, n3.useId)().replace(/[^a-zA-Z0-9_-]/g, ``), u2 = (0, n3.useRef)(null), f2 = (0, n3.useRef)(null), p = (0, n3.useRef)(null);
  return (0, n3.useEffect)(() => {
    let e2 = u2.current;
    if (!e2) return;
    let t2 = o2 > 0 && !window.matchMedia(`(prefers-reduced-motion: reduce)`).matches, n4 = 0, r2 = 0, s3 = (e3) => {
      if (n4 = requestAnimationFrame(s3), e3 - r2 < 32) return;
      r2 = e3;
      let t3 = e3 / (o2 * 1e3) * Math.PI * 2;
      f2.current?.setAttribute(`d`, c(i, t3)), p.current?.setAttribute(`d`, c(a, t3));
    };
    if (typeof IntersectionObserver > `u`) return t2 && (n4 = requestAnimationFrame(s3)), () => cancelAnimationFrame(n4);
    let l3 = new IntersectionObserver(([r3]) => {
      cancelAnimationFrame(n4), e2.toggleAttribute(`data-paused`, !r3.isIntersecting), r3.isIntersecting && t2 && (n4 = requestAnimationFrame(s3));
    });
    return l3.observe(e2), () => {
      l3.disconnect(), cancelAnimationFrame(n4);
    };
  }, [o2]), (0, r.jsxs)(`div`, { ref: u2, className: [`ui-gf`, s2].filter(Boolean).join(` `), children: [(0, r.jsx)(`style`, { href: `ui-gradient-floor`, precedence: `default`, children: d }), (0, r.jsx)(`div`, { className: `ui-gf-layer ui-gf-layer--color`, "aria-hidden": `true`, children: (0, r.jsx)(`div`, { className: `ui-gf-bleed`, children: (0, r.jsxs)(`svg`, { viewBox: `0 0 3447.1 1514.1`, preserveAspectRatio: `none`, children: [(0, r.jsx)(`defs`, { children: (0, r.jsxs)(`linearGradient`, { id: `${l2}-fill`, x1: `1723.8`, y1: `423.3`, x2: `1723.8`, y2: `894.3`, gradientUnits: `userSpaceOnUse`, children: [(0, r.jsx)(`stop`, { stopColor: t[0] }), (0, r.jsx)(`stop`, { offset: `0.302885`, stopColor: t[1] }), (0, r.jsx)(`stop`, { offset: `0.673077`, stopColor: t[2] })] }) }), (0, r.jsx)(`path`, { ref: f2, d: c(i, 0), fill: `url(#${l2}-fill)` })] }) }) }), (0, r.jsx)(`div`, { className: `ui-gf-layer ui-gf-layer--light`, "aria-hidden": `true`, children: (0, r.jsx)(`div`, { className: `ui-gf-bleed`, children: (0, r.jsx)(`svg`, { viewBox: `0 0 2904.96 1275.97`, preserveAspectRatio: `none`, children: (0, r.jsx)(`path`, { ref: p, d: c(a, 0), fill: `#fff`, fillOpacity: `0.8` }) }) }) }), e != null && (0, r.jsx)(`div`, { className: `ui-gf-content`, children: e })] });
}
var u = (e) => `calc(${e} * 100cqw / 2200)`;
var d = `.ui-gf{position: relative;container-type: inline-size;overflow: hidden;isolation: isolate;background: var(--ui-gf-bg, #fafafa)}.ui-gf-layer{position: absolute;pointer-events: none}.ui-gf-layer--color{left: ${u(-290)};bottom: ${u(-484.5)};width: ${u(2864.5)};height: ${u(931.5)}}.ui-gf-layer--light{left: ${u(-65)};bottom: ${u(-507)};width: ${u(2414)};height: ${u(785)};mix-blend-mode: plus-lighter}.ui-gf-bleed{position: absolute;inset: -31.27% -10.17%;transform-origin: 50% 70%;will-change: transform}.ui-gf-bleed svg{position: absolute;top: 0;left: 0;display: block;width: 25%;height: 25%;overflow: visible;transform: scale(4);transform-origin: 0 0;will-change: transform}.ui-gf-layer--color svg{filter: blur(calc(${u(145.65)} / 4))}.ui-gf-layer--light svg{filter: blur(calc(${u(122.74)} / 4))}.ui-gf-layer--color .ui-gf-bleed{animation: ui-gf-drift-color 2.5s ease-in-out infinite}.ui-gf-layer--light .ui-gf-bleed{animation: ui-gf-drift-light 2.5s ease-in-out infinite}@keyframes ui-gf-drift-color{0%, 100%{transform: translate(0, 0) scale(1, 1)}33%{transform: translate(${u(-120)}, ${u(-20)}) scale(1.05, 1.08)}66%{transform: translate(${u(100)}, ${u(12)}) scale(0.98, 0.96)}}@keyframes ui-gf-drift-light{0%, 100%{transform: translate(0, 0) scale(1, 1)}33%{transform: translate(${u(-100)}, ${u(-10)}) scale(1.03, 1)}66%{transform: translate(${u(85)}, ${u(10)}) scale(0.98, 0.94)}}.ui-gf[data-paused] .ui-gf-bleed{animation-play-state: paused}.ui-gf-content{position: relative;z-index: 1;height: 100%}:where(.dark, [data-theme="dark"]) .ui-gf{--ui-gf-bg: #111113}@media (prefers-reduced-motion: reduce){.ui-gf-bleed{animation: none}}`;
function f() {
  return (0, r.jsx)(`div`, { className: `gradient-floor-demo`, children: (0, r.jsx)(l, { className: `gradient-floor-demo__panel` }) });
}

export {
  f
};
