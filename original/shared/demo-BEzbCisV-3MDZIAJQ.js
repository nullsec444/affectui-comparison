import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo-BEzbCisV.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function i({ text: e, by: t = `word`, stagger: i2 = 40, delay: o2 = 0, duration: s = 700, as: c = `p`, once: l = true, className: u }) {
  let d = (0, n3.useRef)(null), [f, p] = (0, n3.useState)(false);
  (0, n3.useEffect)(() => {
    let e2 = d.current;
    if (!e2 || typeof IntersectionObserver > `u`) return p(true);
    let t2 = new IntersectionObserver((e3) => {
      for (let n4 of e3) n4.isIntersecting ? (p(true), l && t2.disconnect()) : l || p(false);
    }, { threshold: 0.3 });
    return t2.observe(e2), () => t2.disconnect();
  }, [l]);
  let m = 0, h = e.split(/(\s+)/).map((e2, n4) => e2 === `` ? null : /^\s+$/.test(e2) ? e2 : t === `word` ? (0, r.jsx)(`span`, { className: `ui-trv__p`, style: { "--ui-trv-i": m++ }, children: e2 }, n4) : (0, r.jsx)(`span`, { className: `ui-trv__w`, children: Array.from(e2).map((e3, t2) => (0, r.jsx)(`span`, { className: `ui-trv__p`, style: { "--ui-trv-i": m++ }, children: e3 }, t2)) }, n4));
  return (0, r.jsxs)(c, { ref: d, className: [`ui-trv`, u].filter(Boolean).join(` `), "data-shown": f ? `` : void 0, style: { "--ui-trv-stagger": `${i2}ms`, "--ui-trv-delay": `${o2}ms`, "--ui-trv-duration": `${s}ms` }, children: [(0, r.jsx)(`style`, { href: `ui-text-reveal`, precedence: `default`, children: a }), (0, r.jsx)(`span`, { className: `ui-trv__sr`, children: e }), (0, r.jsx)(`span`, { "aria-hidden": `true`, children: h })] });
}
var a = `
.ui-trv {
  --ui-trv-blur: 8px;
  --ui-trv-rise: 0.35em;
  --ui-trv-ease: cubic-bezier(0.2, 0.7, 0.2, 1);
}
.ui-trv__sr {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}
.ui-trv__w {
  display: inline-block;
  white-space: nowrap;
}
.ui-trv__p {
  display: inline-block;
  opacity: 0;
  filter: blur(var(--ui-trv-blur));
  transform: translateY(var(--ui-trv-rise));
  will-change: opacity, filter, transform;
}
.ui-trv[data-shown] .ui-trv__p {
  animation: ui-trv-in var(--ui-trv-duration) var(--ui-trv-ease) both;
  animation-delay: calc(var(--ui-trv-delay) + var(--ui-trv-i) * var(--ui-trv-stagger));
}
@keyframes ui-trv-in {
  from {
    opacity: 0;
    filter: blur(var(--ui-trv-blur));
    transform: translateY(var(--ui-trv-rise));
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: none;
  }
}

/* Reduced motion: the text is simply there */
@media (prefers-reduced-motion: reduce) {
  .ui-trv .ui-trv__p,
  .ui-trv[data-shown] .ui-trv__p {
    opacity: 1;
    filter: none;
    transform: none;
    animation: none;
  }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html>.
   The text takes its color from the parent, so only the blur softens a touch on dark backgrounds */
:where(.dark, [data-theme="dark"]) .ui-trv {
  --ui-trv-blur: 6px;
}
`;
function o() {
  let [e, t] = (0, n3.useState)(0);
  return (0, r.jsxs)(`div`, { className: `text-reveal-demo`, children: [(0, r.jsxs)(`div`, { className: `text-reveal-demo__copy`, children: [(0, r.jsx)(i, { as: `h2`, className: `text-reveal-demo__title`, text: `Words that arrive one at a time.` }), (0, r.jsx)(i, { className: `text-reveal-demo__body`, text: `Each word fades in out of a soft blur and rises into place, so a sentence reads like it is being spoken.`, delay: 260, stagger: 22 })] }, e), (0, r.jsx)(`button`, { type: `button`, className: `text-reveal-demo__replay`, onClick: () => t((e2) => e2 + 1), children: `Replay` })] });
}
export {
  o as default
};
