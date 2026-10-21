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

// reconstructed/demo-Bp-um2Aj.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e, t) => {
  if (t > 0) {
    return (e % t + t) % t;
  }
  return 0;
};
var a = (e, t, n4) => Math.min(n4, Math.max(t, e));
function O1Component({
  logos: logos2,
  speed = 40,
  direction = `left`,
  rows = 1,
  gap = 56,
  pauseOnHover = true,
  grayscale = true,
  labels = `none`,
  label = `Logos of companies using the product`,
  className
}) {
  let hRef = n3.useRef(null);
  let gRef = n3.useRef([]);
  let _RefRef = n3.useRef([]);
  let vRef = n3.useRef([]);
  let yRef = n3.useRef([]);
  let bRef = n3.useRef(false);
  let xRef = n3.useRef(false);
  let [S, setS] = n3.useState([]);
  let [w, setW] = n3.useState(false);
  let split = rows === 2 && logos2.length > 1 ? [{
    logos: logos2.filter((e, t) => t % 2 == 0),
    dir: direction === `left` ? 1 : -1
  }, {
    logos: logos2.filter((e, t) => t % 2 == 1),
    dir: direction === `left` ? -1 : 1
  }] : [{
    logos: logos2,
    dir: direction === `left` ? 1 : -1
  }];
  let DRef = n3.useRef({
    speed,
    pauseOnHover,
    split
  });
  DRef.current = {
    speed,
    pauseOnHover,
    split
  };
  n3.useEffect(() => {
    let e = window.matchMedia(`(prefers-reduced-motion: reduce)`);
    let t = () => setW(e.matches);
    t();
    e.addEventListener(`change`, t);
    return () => e.removeEventListener(`change`, t);
  }, []);
  n3.useEffect(() => {
    if (w) {
      return;
    }
    let e = () => {
      let e2 = split.map((e3, t2) => {
        let n4 = _RefRef.current[t2];
        let r2 = vRef.current[t2];
        if (!n4 || !r2) {
          return 2;
        }
        let width = n4.getBoundingClientRect().width;
        let a2 = yRef.current[t2] ??= {
          x: t2 * width * 0.5,
          v: 0,
          w: width,
          drag: null,
          seek: 0
        };
        if (a2.w > 0 && width > 0 && a2.w !== width) {
          a2.x = a2.x / a2.w * width;
        }
        a2.w = width;
        if (width > 0) {
          return Math.ceil(r2.clientWidth / width) + 1;
        }
        return 2;
      });
      setS((t2) => {
        if (t2.length === e2.length && t2.every((t3, n4) => t3 === e2[n4])) {
          return t2;
        }
        return e2;
      });
    };
    e();
    let t = new ResizeObserver(e);
    for (let e2 of [..._RefRef.current, ...vRef.current]) {
      if (e2) {
        t.observe(e2);
      }
    }
    return () => t.disconnect();
  }, [w, split.length, logos2, gap, labels]);
  n3.useEffect(() => {
    let hRef_current = hRef.current;
    if (w || !hRef_current) {
      return;
    }
    let t = 0;
    let n4 = 0;
    let r2 = false;
    let a2 = (e) => {
      let o2 = n4 ? Math.min(0.05, (e - n4) / 1e3) : 0;
      n4 = e;
      let {
        speed: speed2,
        pauseOnHover: pauseOnHover2,
        split: split2
      } = DRef.current;
      let u = pauseOnHover2 && (bRef.current || xRef.current);
      split2.forEach((e2, t2) => {
        let n5 = yRef.current[t2];
        let r3 = gRef.current[t2];
        if (!(!n5 || !r3 || n5.w <= 0)) {
          if (!n5.drag) {
            let t3 = u ? 0 : speed2 * e2.dir;
            let r4 = Math.abs(n5.v - t3) > Math.max(120, speed2 * 2) ? 0.55 : u ? 0.32 : 0.7;
            n5.v += (t3 - n5.v) * (1 - Math.exp(-o2 / r4));
            n5.x += n5.v * o2;
            if (n5.seek) {
              let e3 = n5.seek * (1 - Math.exp(-o2 / 0.12));
              n5.x += e3;
              n5.seek = Math.abs(n5.seek - e3) < 0.5 ? 0 : n5.seek - e3;
            }
          }
          n5.x = i(n5.x, n5.w);
          r3.style.transform = `translate3d(${-n5.x}px, 0, 0)`;
        }
      });
      t = r2 ? requestAnimationFrame(a2) : 0;
    };
    let o = new IntersectionObserver(([e]) => {
      r2 = e.isIntersecting;
      if (r2 && !t) {
        n4 = 0;
        t = requestAnimationFrame(a2);
      }
    });
    o.observe(hRef_current);
    return () => {
      o.disconnect();
      cancelAnimationFrame(t);
    };
  }, [w]);
  let O = (e) => (t) => {
    let n4 = yRef.current[e];
    if (!(!n4 || t.pointerType === `mouse` && t.button !== 0)) {
      n4.drag = {
        id: t.pointerId,
        lastX: t.clientX,
        lastT: t.timeStamp,
        moved: 0,
        captured: false
      };
      n4.v = 0;
    }
  };
  let k = (e) => (t) => {
    let n4 = yRef.current[e];
    let r2 = n4?.drag;
    if (!n4 || !r2 || r2.id !== t.pointerId) {
      return;
    }
    let i2 = t.clientX - r2.lastX;
    let a2 = Math.max(1, t.timeStamp - r2.lastT) / 1e3;
    r2.moved += Math.abs(i2);
    if (!r2.captured && r2.moved > 4) {
      r2.captured = true;
      t.currentTarget.setPointerCapture(t.pointerId);
      t.currentTarget.setAttribute(`data-dragging`, ``);
    }
    n4.x -= i2;
    n4.v = n4.v * 0.6 + -i2 / a2 * 0.4;
    r2.lastX = t.clientX;
    r2.lastT = t.timeStamp;
  };
  let A = (e) => (t) => {
    let n4 = yRef.current[e];
    let r2 = n4?.drag;
    if (n4 && r2 && r2.id === t.pointerId && (t.timeStamp - r2.lastT > 80 && (n4.v = 0), n4.v = a(n4.v, -2400, 2400), n4.drag = null, t.currentTarget.removeAttribute(`data-dragging`), r2.captured)) {
      let e2 = t.currentTarget;
      let n5 = (e3) => {
        e3.preventDefault();
        e3.stopPropagation();
      };
      e2.addEventListener(`click`, n5, {
        capture: true,
        once: true
      });
      setTimeout(() => e2.removeEventListener(`click`, n5, {
        capture: true
      }), 0);
    }
  };
  let j = (e) => (t) => {
    let n4 = yRef.current[e];
    let r2 = vRef.current[e];
    if (w || !n4 || !r2) {
      return;
    }
    let i2 = r2.getBoundingClientRect();
    let a2 = t.currentTarget.getBoundingClientRect();
    let o = Math.min(96, i2.width * 0.15);
    if (a2.left < i2.left + o) {
      n4.seek = a2.left - (i2.left + o);
    } else if (a2.right > i2.right - o) {
      n4.seek = a2.right - (i2.right - o);
    }
  };
  let MComponent = (e, t, n4) => {
    let i2 = e.svg ?? (e.src ? /* @__PURE__ */ jsx("img", { src: e.src, alt: ``, draggable: false }) : null);
    let a2 = /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("span", { className: `ui-lm__mark`, "aria-hidden": `true`, children: i2 }),
      labels === `none` ? /* @__PURE__ */ jsx("span", { className: `ui-lm__sr`, children: e.name }) : /* @__PURE__ */ jsx("span", { className: `ui-lm__name`, children: e.name })
    ] });
    return /* @__PURE__ */ jsx("li", { className: `ui-lm__item`, style: {
      "--ui-lm-brand": e.color,
      "--ui-lm-scale": e.scale
    }, children: e.href ? /* @__PURE__ */ jsx("a", { className: `ui-lm__link`, href: e.href, draggable: false, tabIndex: n4 ? void 0 : -1, onFocus: n4 ? j(t) : void 0, children: a2 }) : /* @__PURE__ */ jsx("span", { className: `ui-lm__link`, children: a2 }) }, e.name);
  };
  let style_1 = {
    "--ui-lm-gap": `${gap}px`
  };
  let className_1 = [`ui-lm`, className].filter(Boolean).join(` `);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { href: `ui-logo-marquee`, precedence: `default`, children: s }),
    /* @__PURE__ */ jsx("div", { ref: hRef, className: className_1, style: style_1, role: `region`, "aria-label": label, "data-labels": labels, "data-grayscale": grayscale || void 0, "data-static": w || void 0, onPointerEnter: (e) => {
      if (e.pointerType !== `touch`) {
        bRef.current = true;
      }
    }, onPointerLeave: () => bRef.current = false, onFocus: (e) => xRef.current = e.target.matches(`:focus-visible`), onBlur: (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        xRef.current = false;
      }
    }, children: w ? /* @__PURE__ */ jsx("ul", { className: `ui-lm__wrap`, children: logos2.map((e) => MComponent(e, 0, true)) }) : split.map((e, t) => /* @__PURE__ */ jsx("div", { ref: (e2) => {
      vRef.current[t] = e2;
    }, className: `ui-lm__row`, onPointerDown: O(t), onPointerMove: k(t), onPointerUp: A(t), onPointerCancel: A(t), children: /* @__PURE__ */ jsx("div", { ref: (e2) => {
      gRef.current[t] = e2;
    }, className: `ui-lm__track`, children: Array.from({
      length: Math.max(2, S[t] ?? 2)
    }, (n4, i2) => /* @__PURE__ */ jsx("ul", { ref: i2 === 0 ? (e2) => {
      _RefRef.current[t] = e2;
    } : void 0, className: `ui-lm__set`, "aria-hidden": i2 > 0 || void 0, inert: i2 > 0 || void 0, children: e.logos.map((e2) => MComponent(e2, t, i2 === 0)) }, i2)) }) }, t)) })
  ] });
}
var s = `
.ui-lm {
  --ui-lm-h: 28px;
  --ui-lm-g: var(--ui-lm-gap, 56px);
  --ui-lm-row-gap: 20px;
  --ui-lm-fade: min(14%, 120px);
  --ui-lm-muted: #9a9a9a;
  --ui-lm-ink: #171717;
  --ui-lm-label: #8f8f8f;
  --ui-lm-dim: 0.75;
  --ui-lm-focus: #2f6bff;
  --ui-lm-ease: cubic-bezier(0.22, 1, 0.36, 1);
  container-type: inline-size;
  display: grid;
  gap: var(--ui-lm-row-gap);
  width: 100%;
  min-width: 0;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}
/* Narrow containers (phones): smaller logos, tighter gaps */
@container (max-width: 520px) {
  .ui-lm__row, .ui-lm__wrap { --ui-lm-h: 22px; --ui-lm-g: calc(var(--ui-lm-gap, 56px) * 0.62); }
}

.ui-lm__row {
  overflow: hidden;
  /* Vertical page scroll stays native; horizontal swipes scrub the strip */
  touch-action: pan-y;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 var(--ui-lm-fade), #000 calc(100% - var(--ui-lm-fade)), transparent);
  mask-image: linear-gradient(90deg, transparent, #000 var(--ui-lm-fade), #000 calc(100% - var(--ui-lm-fade)), transparent);
  /* Room for focus rings so they aren't clipped */
  padding-block: 6px;
}
.ui-lm__row[data-dragging] { cursor: grabbing; }
.ui-lm__track {
  display: flex;
  width: max-content;
  will-change: transform;
}
.ui-lm__set,
.ui-lm__wrap {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}
.ui-lm__set { flex: none; }
/* Every logo carries its gap on the right, so one set's width is exactly the wrap distance */
.ui-lm__item { flex: none; margin-inline-end: var(--ui-lm-g); }

.ui-lm__link {
  display: flex;
  align-items: center;
  gap: calc(var(--ui-lm-h) * 0.32);
  border-radius: 8px;
  color: var(--ui-lm-muted);
  text-decoration: none;
  transition: color 260ms var(--ui-lm-ease), opacity 260ms var(--ui-lm-ease), filter 260ms var(--ui-lm-ease);
  -webkit-user-drag: none;
}
.ui-lm[data-labels="below"] .ui-lm__link { flex-direction: column; gap: 8px; }
.ui-lm__link:focus-visible { outline: 2px solid var(--ui-lm-focus); outline-offset: 4px; }

/* Consistent optical height: every mark fills the same box, nudged by its own scale */
.ui-lm__mark {
  display: grid;
  place-items: center;
  height: var(--ui-lm-h);
  transition: color 260ms var(--ui-lm-ease);
}
.ui-lm__mark > svg,
.ui-lm__mark > img {
  display: block;
  height: calc(var(--ui-lm-h) * var(--ui-lm-scale, 1));
  width: auto;
  max-width: calc(var(--ui-lm-h) * 5);
  pointer-events: none;
}
.ui-lm__name {
  font-size: calc(var(--ui-lm-h) * 0.68);
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1;
  white-space: nowrap;
}
.ui-lm[data-labels="below"] .ui-lm__name {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--ui-lm-label);
}
.ui-lm__sr {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

/* Grayscale: muted marks, images without colour \u2013 the hovered logo lifts to its brand colour */
.ui-lm[data-grayscale] .ui-lm__mark > img { filter: grayscale(1); opacity: 0.6; transition: filter 260ms var(--ui-lm-ease), opacity 260ms var(--ui-lm-ease); }
.ui-lm:not([data-grayscale]) .ui-lm__mark { color: var(--ui-lm-brand, var(--ui-lm-ink)); }
.ui-lm:not([data-grayscale]) .ui-lm__link { color: var(--ui-lm-ink); }
@media (hover: hover) {
  .ui-lm__link:hover,
  .ui-lm__link:focus-visible { color: var(--ui-lm-ink); }
  .ui-lm[data-grayscale] .ui-lm__link:hover .ui-lm__mark,
  .ui-lm[data-grayscale] .ui-lm__link:focus-visible .ui-lm__mark { color: var(--ui-lm-brand, var(--ui-lm-ink)); }
  .ui-lm[data-grayscale] .ui-lm__link:hover img { filter: none; opacity: 1; }
  /* Full colour: the others step back a little while one is hovered */
  .ui-lm:not([data-grayscale]) .ui-lm__set:has(.ui-lm__link:hover) .ui-lm__link:not(:hover) { opacity: var(--ui-lm-dim); }
  /* No colour flicker under the pointer while scrubbing */
  .ui-lm[data-grayscale] .ui-lm__row[data-dragging] .ui-lm__link { color: var(--ui-lm-muted); }
  .ui-lm[data-grayscale] .ui-lm__row[data-dragging] .ui-lm__mark { color: inherit; }
}

/* Reduced motion: a static, centred, wrapping row */
.ui-lm__wrap {
  flex-wrap: wrap;
  justify-content: center;
  row-gap: calc(var(--ui-lm-g) * 0.5);
  padding-inline: 8px;
}
.ui-lm__wrap .ui-lm__item { margin-inline: calc(var(--ui-lm-g) * 0.5); }

@media (hover: none) and (pointer: coarse) {
  /* Bigger touch targets for linked logos */
  a.ui-lm__link { min-height: 40px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-lm__link, .ui-lm__mark, .ui-lm__mark > img { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-lm {
  --ui-lm-muted: #7a7a82;
  --ui-lm-ink: #ededed;
  --ui-lm-label: #8b8b92;
  --ui-lm-focus: #6d8bff;
}
`;
var logos = [{
  name: `Vercel`,
  scale: 0.86,
  svg: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `currentColor`, children: /* @__PURE__ */ jsx("path", { d: `m12 1.608 12 20.784H0Z` }) })
}, {
  name: `Linear`,
  color: `#5E6AD2`,
  svg: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `currentColor`, children: /* @__PURE__ */ jsx("path", { d: `M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z` }) })
}, {
  name: `Notion`,
  svg: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `currentColor`, children: /* @__PURE__ */ jsx("path", { d: `M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z` }) })
}, {
  name: `Stripe`,
  color: `#635BFF`,
  scale: 0.96,
  svg: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `currentColor`, children: /* @__PURE__ */ jsx("path", { d: `M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z` }) })
}, {
  name: `Figma`,
  color: `#F24E1E`,
  svg: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `currentColor`, children: /* @__PURE__ */ jsx("path", { d: `M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z` }) })
}, {
  name: `Slack`,
  color: `#E01E5A`,
  scale: 0.92,
  svg: /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 2447.6 2452.5`, fill: `currentColor`, fillRule: `evenodd`, clipRule: `evenodd`, children: [
    /* @__PURE__ */ jsx("path", { d: `m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z` }),
    /* @__PURE__ */ jsx("path", { d: `m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z` }),
    /* @__PURE__ */ jsx("path", { d: `m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z` }),
    /* @__PURE__ */ jsx("path", { d: `m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0` })
  ] })
}, {
  name: `GitHub`,
  scale: 0.96,
  svg: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `currentColor`, children: /* @__PURE__ */ jsx("path", { d: `M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12` }) })
}, {
  name: `Shopify`,
  color: `#5E8E3E`,
  svg: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `currentColor`, children: /* @__PURE__ */ jsx("path", { d: `M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z` }) })
}, {
  name: `Spotify`,
  color: `#1ED760`,
  scale: 0.94,
  svg: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `currentColor`, children: /* @__PURE__ */ jsx("path", { d: `M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z` }) })
}, {
  name: `Airbnb`,
  color: `#FF5A5F`,
  svg: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 1991.3 2143.2`, fill: `currentColor`, children: /* @__PURE__ */ jsx("path", { d: `m1851.6 1735.6c-15 111.6-90.1 208.1-195.2 251-51.5 21.4-107.3 27.9-163.1 21.4-53.6-6.4-107.3-23.6-163-55.7-77.2-43-154.5-109.4-244.6-208.1 141.6-173.8 227.4-332.5 259.6-474.1 15-66.5 17.2-126.6 10.7-182.4-8.6-53.6-27.9-103-57.9-145.9-66.5-96.5-178.1-152.3-302.5-152.3s-236 57.9-302.5 152.3c-30 42.9-49.3 92.3-57.9 145.9-8.6 55.8-6.4 118 10.7 182.4 32.2 141.6 120.1 302.5 259.6 476.2-88 98.7-167.3 165.2-244.6 208.1-55.8 32.2-109.4 49.4-163 55.8-55.3 6.2-111.2-1.2-163-21.4-105.1-42.9-180.2-139.5-195.2-251-6.4-53.6-2.1-107.2 19.3-167.3 6.4-21.5 17.2-42.9 27.9-68.6 15-34.3 32.2-70.8 49.3-107.3l2.2-4.3c148-319.7 306.8-645.8 472-963.3l6.4-12.9c17.2-32.1 34.3-66.5 51.5-98.7 17.2-34.3 36.5-66.5 60.1-94.4 45.1-51.5 105.1-79.4 171.6-79.4s126.6 27.9 171.6 79.4c23.6 27.9 42.9 60.1 60.1 94.4 17.2 32.2 34.3 66.5 51.5 98.6l6.5 12.9c163 319.6 321.8 645.7 469.8 965.4v2.1c17.2 34.3 32.2 73 49.3 107.3 10.7 25.8 21.5 47.2 27.9 68.6 17.1 55.9 23.5 109.5 14.9 165.3zm-856-100.9c-115.8-145.9-190.9-283.2-216.7-399-10.7-49.4-12.9-92.3-6.4-130.9 4.3-34.3 17.2-64.4 34.3-90.1 40.8-57.9 109.4-94.4 188.8-94.4s150.2 34.4 188.8 94.4c17.2 25.8 30 55.8 34.3 90.1 6.4 38.6 4.3 83.7-6.4 130.9-25.7 113.7-100.8 251-216.7 399zm967.6-111.5c-10.7-25.7-21.5-53.6-32.2-77.2-17.2-38.6-34.3-75.1-49.4-109.4l-2.1-2.1c-148-321.8-306.8-647.9-474.1-969.7l-6.4-12.9c-17.2-32.2-34.3-66.5-51.5-100.8-21.5-38.6-42.9-79.4-77.2-118-68.7-85.9-167.4-133.1-272.5-133.1-107.3 0-203.8 47.2-274.7 128.7-32.2 38.6-55.8 79.4-77.2 118-17.2 34.3-34.3 68.6-51.5 100.8l-6.4 12.8c-165.2 321.8-326.1 647.9-474.1 969.7l-2.1 4.3c-15 34.3-32.2 70.8-49.4 109.4-11.5 25.4-22.2 51.2-32.2 77.2-27.9 79.4-36.5 154.5-25.8 231.7 23.6 160.9 130.9 296.1 278.9 356.1 55.8 23.6 113.7 34.3 173.8 34.3 17.2 0 38.6-2.1 55.8-4.3 70.8-8.6 143.7-32.1 214.5-72.9 88-49.3 171.6-120.1 266-223.1 94.4 103 180.2 173.8 266 223.1 70.8 40.8 143.7 64.3 214.5 72.9 17.2 2.2 38.6 4.3 55.8 4.3 60.1 0 120.1-10.7 173.8-34.3 150.2-60.1 255.3-197.4 278.9-356.1 17.2-75 8.6-150-19.2-229.4z` }) })
}];
function LComponent() {
  return /* @__PURE__ */ jsxs("div", { className: `logo-marquee-demo`, children: [
    /* @__PURE__ */ jsx("p", { className: `logo-marquee-demo__caption`, children: `Trusted by teams at` }),
    /* @__PURE__ */ jsx(O1Component, { logos, rows: 2, speed: 36, labels: `beside`, label: `Companies that use the product` })
  ] });
}
export {
  LComponent as default
};
