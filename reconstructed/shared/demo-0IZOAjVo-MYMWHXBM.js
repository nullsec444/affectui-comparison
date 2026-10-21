import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  Fragment,
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";
import "./chunk-JTXQSSYA.js";
import "./chunk-CTH3ASD6.js";

// reconstructed/demo-0IZOAjVo.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function i(e) {
  let t = Array.from(e);
  let n4 = [];
  let r2 = 0;
  let i2 = 0;
  for (let e2 = t.length - 1; e2 >= 0; e2--) {
    let char = t[e2];
    if (char >= `0` && char <= `9`) {
      n4.unshift({
        key: `d${r2++}`,
        digit: char.charCodeAt(0) - 48
      });
    } else {
      n4.unshift({
        key: `s${i2++}`,
        char
      });
    }
  }
  return n4;
}
var a = (e) => (e % 10 + 10) % 10;
var o = (e) => 1 - (1 - e) ** 4;
var s = (e, t) => {
  e.style.transform = `translateY(${-a(t) / 11 * 100}%)`;
};
function C1Component({
  value,
  format,
  locale,
  duration = 900,
  delay = 0,
  className
}) {
  let p = JSON.stringify(format ?? {});
  let m = n3.useMemo(() => new Intl.NumberFormat(locale, format).format(value), [value, locale, p]);
  let h = n3.useMemo(() => i(m), [m]);
  let gRef = n3.useRef(null);
  let _RefRef = n3.useRef(/* @__PURE__ */ new Map());
  let vRef = n3.useRef(/* @__PURE__ */ new Map());
  let yRef = n3.useRef(0);
  let bRef = n3.useRef(true);
  let xRef = n3.useRef(false);
  let SRef = n3.useRef(/* @__PURE__ */ new Set());
  let CRef = n3.useRef(/* @__PURE__ */ new Set());
  let [w, setW] = n3.useState(false);
  let E = new Set(h.filter((e) => `digit` in e).map((e) => e.key));
  for (let e of E) {
    if (xRef.current && !CRef.current.has(e)) {
      SRef.current.add(e);
    }
  }
  for (let e of SRef.current) {
    if (!E.has(e)) {
      SRef.current.delete(e);
    }
  }
  CRef.current = E;
  n3.useEffect(() => {
    xRef.current = true;
    let gRef_current = gRef.current;
    if (!gRef_current || typeof IntersectionObserver > `u`) {
      setW(true);
      return;
    }
    let t = 0;
    let n4 = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        n4.disconnect();
        t = window.setTimeout(() => setW(true), delay);
      }
    }, {
      threshold: 0.3
    });
    n4.observe(gRef_current);
    return () => {
      n4.disconnect();
      clearTimeout(t);
    };
  }, []);
  n3.useEffect(() => {
    if (!w) {
      return;
    }
    if (value !== yRef.current) {
      bRef.current = value > yRef.current;
    }
    yRef.current = value;
    let matches = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
    let n4 = /* @__PURE__ */ new Set();
    for (let e of h) {
      if (!(`digit` in e)) {
        continue;
      }
      n4.add(e.key);
      let r3 = _RefRef.current.get(e.key) ?? {
        pos: 0,
        from: 0,
        to: 0
      };
      let i3 = bRef.current ? a(e.digit - r3.pos) : -a(r3.pos - e.digit);
      r3.from = r3.pos;
      r3.to = r3.pos + i3;
      if (matches) {
        r3.pos = r3.from = r3.to;
      }
      _RefRef.current.set(e.key, r3);
    }
    for (let e of _RefRef.current.keys()) {
      if (!n4.has(e)) {
        _RefRef.current.delete(e);
      }
    }
    let r2 = () => {
      for (let [e, t] of _RefRef.current) {
        let n5 = vRef.current.get(e);
        if (n5) {
          s(n5, t.pos);
        }
      }
    };
    if (matches) {
      return r2();
    }
    let i2 = 0;
    let c = performance.now();
    let l2 = (e) => {
      let t = Math.min(1, (e - c) / duration);
      let n5 = o(t);
      for (let e2 of _RefRef.current.values()) {
        e2.pos = e2.from + (e2.to - e2.from) * n5;
      }
      r2();
      if (t < 1) {
        i2 = requestAnimationFrame(l2);
      }
    };
    i2 = requestAnimationFrame(l2);
    return () => cancelAnimationFrame(i2);
  }, [h, w, value, duration]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { href: `ui-number-ticker`, precedence: `default`, children: l }),
    /* @__PURE__ */ jsxs("span", { ref: gRef, className: [`ui-nt`, className].filter(Boolean).join(` `), "aria-live": `polite`, children: [
      /* @__PURE__ */ jsx("span", { className: `ui-nt__sr`, children: m }),
      /* @__PURE__ */ jsx("span", { className: `ui-nt__track`, "aria-hidden": `true`, children: h.map((e) => {
        if (`digit` in e) {
          return /* @__PURE__ */ jsx("span", { className: `ui-nt__col`, "data-enter": SRef.current.has(e.key) || void 0, children: /* @__PURE__ */ jsx("span", { className: `ui-nt__stack`, ref: (t) => {
            if (t) {
              vRef.current.set(e.key, t);
              s(t, _RefRef.current.get(e.key)?.pos ?? 0);
              return () => {
                if (vRef.current.get(e.key) === t) {
                  vRef.current.delete(e.key);
                }
              };
            }
          }, children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((e2, key) => /* @__PURE__ */ jsx("span", { className: `ui-nt__cell`, children: e2 }, key)) }) }, e.key);
        }
        return /* @__PURE__ */ jsx("span", { className: `ui-nt__static`, children: e.char }, e.key);
      }) })
    ] })
  ] });
}
var l = `
.ui-nt {
  --ui-nt-lh: 1.15em;
  --ui-nt-ease: cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  display: inline-flex;
  line-height: var(--ui-nt-lh);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.ui-nt__sr {
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
.ui-nt__track {
  display: inline-flex;
  align-items: flex-start;
  height: var(--ui-nt-lh);
  line-height: var(--ui-nt-lh);
}
.ui-nt__col {
  display: inline-block;
  height: var(--ui-nt-lh);
  overflow: hidden;
  /* Soft top and bottom edges while digits pass through */
  -webkit-mask-image: linear-gradient(transparent, #000 14%, #000 86%, transparent);
  mask-image: linear-gradient(transparent, #000 14%, #000 86%, transparent);
}
.ui-nt__col[data-enter] { animation: ui-nt-in 450ms var(--ui-nt-ease) both; }
.ui-nt__stack {
  display: flex;
  flex-direction: column;
  will-change: transform;
}
.ui-nt__cell,
.ui-nt__static {
  display: block;
  height: var(--ui-nt-lh);
  text-align: center;
}
.ui-nt__static { white-space: pre; }

@keyframes ui-nt-in {
  from { opacity: 0; transform: translateY(-35%); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-nt__col[data-enter] { animation: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html>.
   The ticker inherits its color, so nothing needs to change here. */
:where(.dark, [data-theme="dark"]) .ui-nt {
  --ui-nt-lh: 1.15em;
}
`;
var u = {
  style: `currency`,
  currency: `USD`,
  maximumFractionDigits: 0
};
var d = {
  style: `percent`,
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
  signDisplay: `exceptZero`
};
var f = (e, t) => Math.round(e + Math.random() * (t - e));
function PComponent() {
  let [value, setValue] = n3.useState(48240);
  let [i2, setI] = n3.useState(0.124);
  let o2 = (e) => {
    setValue((t) => Math.max(0, t + e * f(600, 6400)));
    setI((t) => Math.round((t + e * f(8, 46) / 1e3) * 1e3) / 1e3);
  };
  return /* @__PURE__ */ jsx("div", { className: `number-ticker-demo`, children: /* @__PURE__ */ jsxs("div", { className: `ntd-card`, children: [
    /* @__PURE__ */ jsxs("div", { className: `ntd-head`, children: [
      /* @__PURE__ */ jsx("span", { className: `ntd-label`, children: `Revenue` }),
      /* @__PURE__ */ jsx("span", { className: `ntd-period`, children: `This month` })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `ntd-value`, children: /* @__PURE__ */ jsx(C1Component, { value, format: u, locale: `en-US` }) }),
    /* @__PURE__ */ jsxs("div", { className: `ntd-meta`, children: [
      /* @__PURE__ */ jsxs("span", { className: `ntd-delta`, "data-down": i2 < 0 || void 0, children: [
        /* @__PURE__ */ jsx("svg", { viewBox: `0 0 12 12`, width: `10`, height: `10`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M6 2.5v7M2.75 5.75 6 2.5l3.25 3.25`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.6`, strokeLinecap: `round`, strokeLinejoin: `round` }) }),
        /* @__PURE__ */ jsx(C1Component, { value: i2, format: d, locale: `en-US`, duration: 700, delay: 150 })
      ] }),
      /* @__PURE__ */ jsx("span", { className: `ntd-vs`, children: `vs last month` })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `ntd-actions`, children: [
      /* @__PURE__ */ jsx("button", { type: `button`, className: `ntd-btn`, "aria-label": `Decrease revenue`, onClick: () => o2(-1), children: `\u2212` }),
      /* @__PURE__ */ jsx("button", { type: `button`, className: `ntd-btn`, "aria-label": `Increase revenue`, onClick: () => o2(1), children: `+` })
    ] })
  ] }) });
}
export {
  PComponent as default
};
