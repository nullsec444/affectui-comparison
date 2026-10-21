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

// reconstructed/demo-BEzbCisV.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function IComponent({
  text,
  by = `word`,
  stagger = 40,
  delay = 0,
  duration = 700,
  as: _Component = `p`,
  once = true,
  className
}) {
  let dRef = n3.useRef(null);
  let [f, setF] = n3.useState(false);
  n3.useEffect(() => {
    let dRef_current = dRef.current;
    if (!dRef_current || typeof IntersectionObserver > `u`) {
      return setF(true);
    }
    let t = new IntersectionObserver((e) => {
      for (let n4 of e) {
        if (n4.isIntersecting) {
          setF(true);
          if (once) {
            t.disconnect();
          }
        } else if (!once) {
          setF(false);
        }
      }
    }, {
      threshold: 0.3
    });
    t.observe(dRef_current);
    return () => t.disconnect();
  }, [once]);
  let m = 0;
  let h = text.split(/(\s+)/).map((e, n4) => {
    if (e === ``) {
      return null;
    }
    if (/^\s+$/.test(e)) {
      return e;
    }
    if (by === `word`) {
      return /* @__PURE__ */ jsx("span", { className: `ui-trv__p`, style: {
        "--ui-trv-i": m++
      }, children: e }, n4);
    }
    return /* @__PURE__ */ jsx("span", { className: `ui-trv__w`, children: Array.from(e).map((e2, t) => /* @__PURE__ */ jsx("span", { className: `ui-trv__p`, style: {
      "--ui-trv-i": m++
    }, children: e2 }, t)) }, n4);
  });
  return /* @__PURE__ */ jsx(_Component, { ref: dRef, className: [`ui-trv`, className].filter(Boolean).join(` `), "data-shown": f ? `` : void 0, style: {
    "--ui-trv-stagger": `${stagger}ms`,
    "--ui-trv-delay": `${delay}ms`,
    "--ui-trv-duration": `${duration}ms`
  }, children: [/* @__PURE__ */ jsx("style", { href: `ui-text-reveal`, precedence: `default`, children: a }), /* @__PURE__ */ jsx("span", { className: `ui-trv__sr`, children: text }), /* @__PURE__ */ jsx("span", { "aria-hidden": `true`, children: h })] });
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
function OComponent() {
  let [e, setE] = n3.useState(0);
  return /* @__PURE__ */ jsxs("div", { className: `text-reveal-demo`, children: [
    /* @__PURE__ */ jsxs("div", { className: `text-reveal-demo__copy`, children: [
      /* @__PURE__ */ jsx(IComponent, { as: `h2`, className: `text-reveal-demo__title`, text: `Words that arrive one at a time.` }),
      /* @__PURE__ */ jsx(IComponent, { className: `text-reveal-demo__body`, text: `Each word fades in out of a soft blur and rises into place, so a sentence reads like it is being spoken.`, delay: 260, stagger: 22 })
    ] }, e),
    /* @__PURE__ */ jsx("button", { type: `button`, className: `text-reveal-demo__replay`, onClick: () => setE((e2) => e2 + 1), children: `Replay` })
  ] });
}
export {
  OComponent as default
};
