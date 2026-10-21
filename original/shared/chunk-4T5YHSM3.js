import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-Dcdtba_V.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function i({ children: e, colors: t, speed: i2 = 8, sweep: o2 = true, as: s = `span`, className: c }) {
  let l = (0, n3.useRef)(null), [u, d] = (0, n3.useState)(o2 ? `idle` : `in`);
  (0, n3.useEffect)(() => {
    if (!o2) return d(`in`);
    let e2 = l.current;
    if (!e2 || typeof IntersectionObserver > `u`) return d(`in`);
    let t2 = new IntersectionObserver((e3) => {
      e3.some((e4) => e4.isIntersecting) && (d(`in`), t2.disconnect());
    }, { threshold: 0.6 });
    return t2.observe(e2), () => t2.disconnect();
  }, [o2]);
  let f = { "--ui-gt-speed": `${i2}s` };
  if (t?.length) {
    let [e2, n4 = e2, r2 = e2, i3 = n4] = t;
    Object.assign(f, { "--ui-gt-c1": e2, "--ui-gt-c2": n4, "--ui-gt-c3": r2, "--ui-gt-c4": i3 });
  }
  return (0, r.jsxs)(s, { ref: l, className: [`ui-gt`, c].filter(Boolean).join(` `), "data-state": u, "data-sweep": o2 ? `` : void 0, style: f, children: [(0, r.jsx)(`style`, { href: `ui-gradient-text`, precedence: `default`, children: a }), (0, r.jsx)(`span`, { className: `ui-gt__base`, children: e }), (0, r.jsx)(`span`, { className: `ui-gt__fill`, "aria-hidden": `true`, children: e })] });
}
var a = `.ui-gt{--ui-gt-c1: #dd0674;--ui-gt-c2: #5e3ee0;--ui-gt-c3: #ff5fae;--ui-gt-c4: #7c5cff;--ui-gt-sweep: 1100ms;position: relative;display: inline-block;margin: 0;font: inherit;letter-spacing: inherit}.ui-gt__base{color: inherit;transition: color 240ms ease}.ui-gt__fill{position: absolute;inset: 0;pointer-events: none;user-select: none;color: transparent;-webkit-text-fill-color: transparent;background-image: radial-gradient(closest-side, var(--ui-gt-c3), transparent), radial-gradient(closest-side, var(--ui-gt-c4), transparent), radial-gradient(closest-side, var(--ui-gt-c1), transparent), linear-gradient(100deg, var(--ui-gt-c1) 10%, var(--ui-gt-c2) 90%);background-size: 70% 170%, 80% 190%, 60% 160%, 100% 100%;background-repeat: no-repeat;background-position: -20% 30%, 120% 70%, 50% -40%, 0 0;-webkit-background-clip: text;background-clip: text;clip-path: inset(-0.25em -0.25em -0.25em -0.25em);animation: ui-gt-flow var(--ui-gt-speed) ease-in-out infinite}.ui-gt[data-sweep][data-state="idle"] .ui-gt__fill{clip-path: inset(-0.25em 100% -0.25em -0.25em)}.ui-gt[data-sweep] .ui-gt__fill{transition: clip-path var(--ui-gt-sweep) cubic-bezier(0.65, 0, 0.25, 1)}.ui-gt[data-state="in"] .ui-gt__base{color: transparent}.ui-gt[data-sweep][data-state="in"] .ui-gt__base{transition-delay: calc(var(--ui-gt-sweep) - 200ms)}@keyframes ui-gt-flow{0%, 100%{background-position: -20% 30%, 120% 70%, 50% -40%, 0 0}25%{background-position: 40% 110%, 60% -10%, 110% 60%, 0 0}50%{background-position: 120% 40%, -20% 40%, 40% 140%, 0 0}75%{background-position: 60% -30%, 30% 120%, -10% 30%, 0 0}}@media (prefers-reduced-motion: reduce){.ui-gt .ui-gt__fill, .ui-gt[data-sweep][data-state="idle"] .ui-gt__fill{animation: none;transition: none;clip-path: inset(-0.25em -0.25em -0.25em -0.25em)}.ui-gt .ui-gt__base, .ui-gt[data-sweep] .ui-gt__base{color: transparent;transition: none}}:where(.dark, [data-theme="dark"]) .ui-gt{--ui-gt-c1: #f472b6;--ui-gt-c2: #a78bfa;--ui-gt-c3: #f9a8d4;--ui-gt-c4: #c4b5fd}`;
function o() {
  let [e, t] = (0, n3.useState)(0);
  return (0, r.jsxs)(`div`, { className: `gradient-text-demo`, children: [(0, r.jsxs)(`h2`, { className: `gradient-text-demo__title`, children: [`Interfaces people actually`, ` `, (0, r.jsx)(i, { children: `feel.` }, e)] }), (0, r.jsx)(`button`, { type: `button`, className: `gradient-text-demo__replay`, onClick: () => t((e2) => e2 + 1), children: `Replay` })] });
}

export {
  o
};
