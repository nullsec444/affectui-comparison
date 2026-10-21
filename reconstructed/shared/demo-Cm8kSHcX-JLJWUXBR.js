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

// reconstructed/demo-Cm8kSHcX.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [{
  cx: 115,
  cy: 93,
  r: 43
}, {
  cx: 163,
  cy: 111,
  r: 39
}, {
  cx: 156,
  cy: 155,
  r: 31
}, {
  cx: 107,
  cy: 155,
  r: 35
}, {
  cx: 72,
  cy: 126,
  r: 34
}];
var a = {
  x: 80,
  y: 100,
  width: 80,
  height: 65
};
var o = {
  y: 106,
  w: 18,
  h: 31,
  left: 96.5,
  right: 127.5
};
var cx = 120;
var c = 120;
var l = 180;
var u = [{
  x: 0,
  y: 0
}, {
  x: -1,
  y: 0.05
}, {
  x: 1,
  y: -0.05
}, {
  x: 0,
  y: 0
}, {
  x: 0.65,
  y: -0.55
}, {
  x: -0.7,
  y: 0.35
}];
var d = (e, t, n4) => `translate(${e} ${t}) ${n4} translate(${-e} ${-t})`;
var F1Component = ({
  offset,
  color,
  opacity
}) => /* @__PURE__ */ jsx("stop", { offset, style: {
  stopColor: `var(--ui-gc-${color})`,
  stopOpacity: opacity
} });
function P1Component({
  background = true,
  color = `blue`,
  followPointer = true,
  className,
  label = `A glowing cloud with eyes that floats, looks around and blinks`
}) {
  let _ = n3.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
  let v = (e) => `gc${_}-${e}`;
  let yRef = n3.useRef(null);
  let bRef = n3.useRef(null);
  let xRef = n3.useRef(null);
  let SRef = n3.useRef(null);
  let CRef = n3.useRef(null);
  let wRef = n3.useRef(null);
  let TRef = n3.useRef(null);
  let ERef = n3.useRef(null);
  n3.useEffect(() => {
    let yRef_current = yRef.current;
    if (!yRef_current) {
      return;
    }
    let matches = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
    let n4 = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0
    };
    let r2 = {
      x: 0,
      y: 0
    };
    let i2 = {
      p: 0,
      v: 0
    };
    let a2 = false;
    let f = 1.2;
    let m2 = 1.8;
    let h = -1;
    let g = false;
    let _2 = -1;
    let v2 = 0;
    let D2 = 0;
    let O = 0;
    let k = (e, t = 0.16) => {
      if (e < 0 || e > t) {
        return 1;
      }
      return 1 - 0.9 * Math.sin(e / t * Math.PI);
    };
    let A = () => {
      let e = matches ? 0 : Math.sin(O * 1.1) * 5;
      let r3 = matches ? 0 : Math.sin(O * 1.1 + Math.PI / 2) * 0.012;
      let a3 = 1 + r3 - i2.p * 0.12;
      let u2 = 1 - r3 + i2.p * 0.1;
      bRef.current?.setAttribute(`transform`, `translate(0 ${e.toFixed(2)}) ${d(cx, l, `scale(${u2.toFixed(4)} ${a3.toFixed(4)})`)}`);
      xRef.current?.setAttribute(`transform`, `translate(${(n4.x * 4).toFixed(2)} ${(n4.y * 2).toFixed(2)}) ${d(cx, c, `rotate(${(n4.x * 2.5).toFixed(2)}) scale(${(1 - Math.abs(n4.x) * 0.025).toFixed(4)} 1)`)}`);
      SRef.current?.setAttribute(`transform`, `translate(${(n4.x * 12).toFixed(2)} ${(n4.y * 7).toFixed(2)})`);
      TRef.current?.setAttribute(`transform`, `translate(${(-n4.x * 7).toFixed(2)} ${(-n4.y * 3).toFixed(2)})`);
      let f2 = h < 0 ? 1 : Math.min(k(O - h), g ? k(O - h - 0.26) : 1);
      let p = k(O - _2, 0.34);
      let m3 = o.y + o.h / 2;
      CRef.current?.setAttribute(`transform`, d(o.left + o.w / 2, m3, `scale(1 ${f2.toFixed(3)})`));
      wRef.current?.setAttribute(`transform`, d(o.right + o.w / 2, m3, `scale(1 ${Math.min(f2, p).toFixed(3)})`));
      let v3 = (e + 5) / 10;
      ERef.current?.setAttribute(`transform`, d(cx, 210, `scale(${(1 - v3 * 0.12).toFixed(3)} 1)`));
      ERef.current?.setAttribute(`opacity`, (0.34 - v3 * 0.1).toFixed(3));
    };
    let j = (e) => {
      let t = Math.min(0.05, (e - (D2 || e)) / 1e3);
      D2 = e;
      O += t;
      if (!a2 && O > f) {
        let e2 = u[Math.floor(Math.random() * u.length)];
        r2.x = e2.x;
        r2.y = e2.y;
        f = O + 1.4 + Math.random() * 2.2;
      }
      if (O > m2) {
        h = O;
        g = Math.random() < 0.25;
        m2 = O + 2.4 + Math.random() * 3;
      }
      n4.vx += ((r2.x - n4.x) * 70 - n4.vx * 13) * t;
      n4.vy += ((r2.y - n4.y) * 70 - n4.vy * 13) * t;
      n4.x += n4.vx * t;
      n4.y += n4.vy * t;
      i2.v += (-i2.p * 220 - i2.v * 9) * t;
      i2.p += i2.v * t;
      A();
      v2 = requestAnimationFrame(j);
    };
    let M = () => {
      if (!(v2 || matches)) {
        D2 = 0;
        v2 = requestAnimationFrame(j);
      }
    };
    let N = () => {
      cancelAnimationFrame(v2);
      v2 = 0;
    };
    let P = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        return M();
      }
      return N();
    });
    P.observe(yRef_current);
    let F = (t) => {
      if (!followPointer) {
        return;
      }
      let n5 = yRef_current.getBoundingClientRect();
      a2 = true;
      r2.x = Math.max(-1, Math.min(1, ((t.clientX - n5.left) / n5.width - 0.5) * 2.4));
      r2.y = Math.max(-1, Math.min(1, ((t.clientY - n5.top) / n5.height - 0.5) * 2.4));
    };
    let I = () => {
      a2 = false;
      r2.x = 0;
      r2.y = 0;
      f = O + 1.2;
    };
    let L = () => {
      i2.p = 0.9;
      i2.v = 0;
      _2 = O + 0.12;
      if (matches) {
        M();
        window.setTimeout(N, 1200);
      }
    };
    yRef_current.addEventListener(`pointermove`, F);
    yRef_current.addEventListener(`pointerleave`, I);
    yRef_current.addEventListener(`pointerdown`, L);
    A();
    return () => {
      N();
      P.disconnect();
      yRef_current.removeEventListener(`pointermove`, F);
      yRef_current.removeEventListener(`pointerleave`, I);
      yRef_current.removeEventListener(`pointerdown`, L);
    };
  }, [followPointer]);
  let D = i.map((e, key) => /* @__PURE__ */ jsx("circle", { ...e }, key));
  let OComponent = (x, ref, n4) => {
    let i2 = {
      x,
      y: o.y,
      width: o.w,
      height: o.h,
      rx: o.w / 2
    };
    return /* @__PURE__ */ jsxs("g", { ref, children: [
      /* @__PURE__ */ jsx("rect", { ...i2, fill: `url(#${v(`eye`)})` }),
      /* @__PURE__ */ jsx("clipPath", { id: v(`clip-${n4}`), children: /* @__PURE__ */ jsx("rect", { ...i2 }) }),
      /* @__PURE__ */ jsx("rect", { ...i2, y: o.y + 2.5, className: `ui-gc__eye-shade`, fill: `none`, strokeWidth: `5`, filter: `url(#${v(`edge`)})`, clipPath: `url(#${v(`clip-${n4}`)})` })
    ] });
  };
  return /* @__PURE__ */ jsxs("div", { ref: yRef, className: [`ui-gc`, className].filter(Boolean).join(` `), "data-bg": background || void 0, "data-color": color, role: `img`, "aria-label": label, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-glow-cloud`, precedence: `default`, children: m }),
    /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 240 240`, "aria-hidden": `true`, children: [
      /* @__PURE__ */ jsxs("defs", { children: [
        /* @__PURE__ */ jsxs("filter", { id: v(`goo`), x: `0`, y: `0`, width: `240`, height: `240`, filterUnits: `userSpaceOnUse`, children: [
          /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: `3.5` }),
          /* @__PURE__ */ jsx("feColorMatrix", { values: `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -12` })
        ] }),
        /* @__PURE__ */ jsx("filter", { id: v(`soft`), x: `0`, y: `0`, width: `240`, height: `240`, filterUnits: `userSpaceOnUse`, children: /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: `7` }) }),
        /* @__PURE__ */ jsx("filter", { id: v(`halo`), x: `0`, y: `0`, width: `240`, height: `240`, filterUnits: `userSpaceOnUse`, children: /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: `9` }) }),
        /* @__PURE__ */ jsx("filter", { id: v(`edge`), x: `0`, y: `0`, width: `240`, height: `240`, filterUnits: `userSpaceOnUse`, children: /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: `1.6` }) }),
        /* @__PURE__ */ jsx("filter", { id: v(`shade`), x: `0`, y: `0`, width: `240`, height: `240`, filterUnits: `userSpaceOnUse`, children: /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: `5` }) }),
        /* @__PURE__ */ jsxs("g", { id: v(`shape`), filter: `url(#${v(`goo`)})`, children: [
          D,
          /* @__PURE__ */ jsx("rect", { ...a })
        ] }),
        /* @__PURE__ */ jsx("mask", { id: v(`mask`), maskUnits: `userSpaceOnUse`, x: `0`, y: `0`, width: `240`, height: `240`, children: /* @__PURE__ */ jsx("use", { href: `#${v(`shape`)}`, fill: `#fff` }) }),
        /* @__PURE__ */ jsxs("linearGradient", { id: v(`rim`), x1: `0`, y1: `56`, x2: `0`, y2: `182`, gradientUnits: `userSpaceOnUse`, children: [
          /* @__PURE__ */ jsx(F1Component, { offset: 0, color: `rim` }),
          /* @__PURE__ */ jsx(F1Component, { offset: 1, color: `white` })
        ] }),
        /* @__PURE__ */ jsxs("radialGradient", { id: v(`body`), cx: `120`, cy: `108`, r: `78`, gradientUnits: `userSpaceOnUse`, children: [
          /* @__PURE__ */ jsx(F1Component, { offset: 0, color: `body-1` }),
          /* @__PURE__ */ jsx(F1Component, { offset: 0.6, color: `body-2` }),
          /* @__PURE__ */ jsx(F1Component, { offset: 1, color: `body-3` })
        ] }),
        /* @__PURE__ */ jsxs("linearGradient", { id: v(`eye`), x1: `0`, y1: `0`, x2: `0`, y2: `1`, children: [
          /* @__PURE__ */ jsx(F1Component, { offset: 0, color: `white` }),
          /* @__PURE__ */ jsx(F1Component, { offset: 1, color: `eye` })
        ] })
      ] }),
      /* @__PURE__ */ jsx("ellipse", { ref: ERef, className: `ui-gc__shadow`, cx, cy: `210`, rx: `54`, ry: `7`, filter: `url(#${v(`shade`)})` }),
      /* @__PURE__ */ jsx("g", { ref: bRef, children: /* @__PURE__ */ jsxs("g", { ref: xRef, children: [
        /* @__PURE__ */ jsx("use", { href: `#${v(`shape`)}`, className: `ui-gc__halo`, filter: `url(#${v(`halo`)})` }),
        /* @__PURE__ */ jsx("use", { href: `#${v(`shape`)}`, className: `ui-gc__edge`, filter: `url(#${v(`edge`)})` }),
        /* @__PURE__ */ jsxs("g", { mask: `url(#${v(`mask`)})`, children: [
          /* @__PURE__ */ jsx("rect", { width: `240`, height: `240`, fill: `url(#${v(`rim`)})` }),
          /* @__PURE__ */ jsxs("g", { filter: `url(#${v(`soft`)})`, fill: `url(#${v(`body`)})`, transform: `translate(0 2) ${d(cx, c, `scale(0.9 0.87)`)}`, children: [
            D,
            /* @__PURE__ */ jsx("rect", { ...a })
          ] }),
          /* @__PURE__ */ jsx("ellipse", { ref: TRef, cx: `104`, cy: `80`, rx: `30`, ry: `12`, fill: `#fff`, opacity: `0.32`, filter: `url(#${v(`shade`)})` })
        ] }),
        /* @__PURE__ */ jsxs("g", { ref: SRef, children: [
          OComponent(o.left, CRef, `l`),
          OComponent(o.right, wRef, `r`)
        ] })
      ] }) })
    ] })
  ] });
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
function HComponent() {
  return /* @__PURE__ */ jsx("div", { className: `glow-cloud-demo`, children: /* @__PURE__ */ jsx(P1Component, {}) });
}
export {
  HComponent as default
};
