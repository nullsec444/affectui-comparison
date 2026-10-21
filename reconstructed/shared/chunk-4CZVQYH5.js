import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo-Dcdtba_V.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function IComponent({
  children,
  colors,
  speed = 8,
  sweep = true,
  as: _Component = `span`,
  className
}) {
  let lRef = n3.useRef(null);
  let [u, setU] = n3.useState(sweep ? `idle` : `in`);
  n3.useEffect(() => {
    if (!sweep) {
      return setU(`in`);
    }
    let lRef_current = lRef.current;
    if (!lRef_current || typeof IntersectionObserver > `u`) {
      return setU(`in`);
    }
    let t = new IntersectionObserver((e) => {
      if (e.some((e2) => e2.isIntersecting)) {
        setU(`in`);
        t.disconnect();
      }
    }, {
      threshold: 0.6
    });
    t.observe(lRef_current);
    return () => t.disconnect();
  }, [sweep]);
  let style_1 = {
    "--ui-gt-speed": `${speed}s`
  };
  if (colors?.length) {
    let [e, n4 = e, r2 = e, i = n4] = colors;
    Object.assign(style_1, {
      "--ui-gt-c1": e,
      "--ui-gt-c2": n4,
      "--ui-gt-c3": r2,
      "--ui-gt-c4": i
    });
  }
  return /* @__PURE__ */ jsx(_Component, { ref: lRef, className: [`ui-gt`, className].filter(Boolean).join(` `), "data-state": u, "data-sweep": sweep ? `` : void 0, style: style_1, children: [/* @__PURE__ */ jsx("style", { href: `ui-gradient-text`, precedence: `default`, children: a }), /* @__PURE__ */ jsx("span", { className: `ui-gt__base`, children }), /* @__PURE__ */ jsx("span", { className: `ui-gt__fill`, "aria-hidden": `true`, children })] });
}
var a = `.ui-gt{--ui-gt-c1: #dd0674;--ui-gt-c2: #5e3ee0;--ui-gt-c3: #ff5fae;--ui-gt-c4: #7c5cff;--ui-gt-sweep: 1100ms;position: relative;display: inline-block;margin: 0;font: inherit;letter-spacing: inherit}.ui-gt__base{color: inherit;transition: color 240ms ease}.ui-gt__fill{position: absolute;inset: 0;pointer-events: none;user-select: none;color: transparent;-webkit-text-fill-color: transparent;background-image: radial-gradient(closest-side, var(--ui-gt-c3), transparent), radial-gradient(closest-side, var(--ui-gt-c4), transparent), radial-gradient(closest-side, var(--ui-gt-c1), transparent), linear-gradient(100deg, var(--ui-gt-c1) 10%, var(--ui-gt-c2) 90%);background-size: 70% 170%, 80% 190%, 60% 160%, 100% 100%;background-repeat: no-repeat;background-position: -20% 30%, 120% 70%, 50% -40%, 0 0;-webkit-background-clip: text;background-clip: text;clip-path: inset(-0.25em -0.25em -0.25em -0.25em);animation: ui-gt-flow var(--ui-gt-speed) ease-in-out infinite}.ui-gt[data-sweep][data-state="idle"] .ui-gt__fill{clip-path: inset(-0.25em 100% -0.25em -0.25em)}.ui-gt[data-sweep] .ui-gt__fill{transition: clip-path var(--ui-gt-sweep) cubic-bezier(0.65, 0, 0.25, 1)}.ui-gt[data-state="in"] .ui-gt__base{color: transparent}.ui-gt[data-sweep][data-state="in"] .ui-gt__base{transition-delay: calc(var(--ui-gt-sweep) - 200ms)}@keyframes ui-gt-flow{0%, 100%{background-position: -20% 30%, 120% 70%, 50% -40%, 0 0}25%{background-position: 40% 110%, 60% -10%, 110% 60%, 0 0}50%{background-position: 120% 40%, -20% 40%, 40% 140%, 0 0}75%{background-position: 60% -30%, 30% 120%, -10% 30%, 0 0}}@media (prefers-reduced-motion: reduce){.ui-gt .ui-gt__fill, .ui-gt[data-sweep][data-state="idle"] .ui-gt__fill{animation: none;transition: none;clip-path: inset(-0.25em -0.25em -0.25em -0.25em)}.ui-gt .ui-gt__base, .ui-gt[data-sweep] .ui-gt__base{color: transparent;transition: none}}:where(.dark, [data-theme="dark"]) .ui-gt{--ui-gt-c1: #f472b6;--ui-gt-c2: #a78bfa;--ui-gt-c3: #f9a8d4;--ui-gt-c4: #c4b5fd}`;
function OComponent() {
  let [key, setKey] = n3.useState(0);
  return /* @__PURE__ */ jsxs("div", { className: `gradient-text-demo`, children: [
    /* @__PURE__ */ jsxs("h2", { className: `gradient-text-demo__title`, children: [
      `Interfaces people actually`,
      ` `,
      /* @__PURE__ */ jsx(IComponent, { children: `feel.` }, key)
    ] }),
    /* @__PURE__ */ jsx("button", { type: `button`, className: `gradient-text-demo__replay`, onClick: () => setKey((e) => e + 1), children: `Replay` })
  ] });
}

export {
  OComponent
};
