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

// reconstructed/demo-DrrNKEd7.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [1, -0.84, 1.12];
var a = [0, 0.42, 0.18];
var o = (e, t) => {
  if (t > 0) {
    return (e % t + t) % t;
  }
  return 0;
};
var s = (e, t, n4) => Math.min(n4, Math.max(t, e));
var c = (name) => name.split(/\s+/).filter(Boolean).slice(0, 2).map((e) => e[0].toUpperCase()).join(``);
var l = (clientWidth, columns) => Math.min(columns, clientWidth >= 740 ? 3 : clientWidth >= 480 ? 2 : 1);
function UComponent({
  items: items2,
  columns = 3,
  speed = 28,
  pauseOnHover = true,
  label = `What customers say`,
  className
}) {
  let hRef = n3.useRef(null);
  let gRef = n3.useRef([]);
  let _RefRef = n3.useRef([]);
  let vRef = n3.useRef([]);
  let yRef = n3.useRef([]);
  let bRef = n3.useRef([]);
  let xRef = n3.useRef([]);
  let SRef = n3.useRef([]);
  let [C, setC] = n3.useState(columns);
  let [T, setT] = n3.useState([]);
  let [D, setD] = n3.useState(false);
  let k = Array.from({
    length: C
  }, (t, n4) => items2.filter((e, t2) => t2 % C === n4));
  let ARef = n3.useRef({
    speed,
    pauseOnHover,
    count: C
  });
  ARef.current = {
    speed,
    pauseOnHover,
    count: C
  };
  n3.useEffect(() => {
    let e = window.matchMedia(`(prefers-reduced-motion: reduce)`);
    let t = () => setD(e.matches);
    t();
    e.addEventListener(`change`, t);
    return () => e.removeEventListener(`change`, t);
  }, []);
  n3.useLayoutEffect(() => {
    let hRef_current = hRef.current;
    if (!hRef_current) {
      return;
    }
    let n4 = () => setC(l(hRef_current.clientWidth, columns));
    n4();
    let r2 = new ResizeObserver(n4);
    r2.observe(hRef_current);
    return () => r2.disconnect();
  }, [columns]);
  n3.useEffect(() => {
    if (D) {
      return;
    }
    let e = () => {
      let e2 = k.map((e3, t2) => {
        let n4 = vRef.current[t2];
        let r2 = gRef.current[t2];
        if (!n4 || !r2) {
          return 2;
        }
        let i2 = r2.getBoundingClientRect().height / (r2.offsetHeight || 1) || 1;
        let h = n4.getBoundingClientRect().height / i2;
        let s2 = yRef.current[t2] ??= {
          y: h * (a[t2] ?? 0),
          v: 0,
          h,
          drag: null,
          seek: 0
        };
        if (s2.h > 0 && h > 0 && s2.h !== h) {
          s2.y = s2.y / s2.h * h;
        }
        s2.h = h;
        if (h > 0) {
          return Math.min(12, Math.ceil(r2.clientHeight / h) + 1);
        }
        return 2;
      });
      yRef.current.length = k.length;
      setT((t2) => {
        if (t2.length === e2.length && t2.every((t3, n4) => t3 === e2[n4])) {
          return t2;
        }
        return e2;
      });
    };
    e();
    let t = new ResizeObserver(e);
    for (let e2 of [...vRef.current.slice(0, C), ...gRef.current.slice(0, C)]) {
      if (e2) {
        t.observe(e2);
      }
    }
    return () => t.disconnect();
  }, [D, C, items2]);
  n3.useEffect(() => {
    let hRef_current = hRef.current;
    if (D || !hRef_current) {
      return;
    }
    let t = 0;
    let n4 = 0;
    let r2 = false;
    let a2 = (e) => {
      let c3 = n4 ? Math.min(0.05, (e - n4) / 1e3) : 0;
      n4 = e;
      let {
        speed: speed2,
        pauseOnHover: pauseOnHover2,
        count
      } = ARef.current;
      for (let e2 = 0; e2 < count; e2++) {
        let t2 = yRef.current[e2];
        let n5 = _RefRef.current[e2];
        if (!t2 || !n5 || t2.h <= 0) {
          continue;
        }
        let r3 = count === 1 ? 1 : i[e2 % 3];
        let a3 = xRef.current[e2] || SRef.current[e2] || pauseOnHover2 && bRef.current[e2];
        if (!t2.drag) {
          let e3 = a3 ? 0 : speed2 * r3;
          let n6 = Math.abs(t2.v - e3) > Math.max(120, speed2 * 2) ? 0.55 : a3 ? 0.32 : 0.7;
          t2.v += (e3 - t2.v) * (1 - Math.exp(-c3 / n6));
          t2.y += t2.v * c3;
          if (t2.seek) {
            let e4 = t2.seek * (1 - Math.exp(-c3 / 0.12));
            t2.y += e4;
            t2.seek = Math.abs(t2.seek - e4) < 0.5 ? 0 : t2.seek - e4;
          }
        }
        t2.y = SRef.current[e2] ? s(t2.y, -t2.h, t2.h * 2) : o(t2.y, t2.h);
        n5.style.transform = `translate3d(0, ${-(t2.h + t2.y)}px, 0)`;
      }
      t = r2 ? requestAnimationFrame(a2) : 0;
    };
    let c2 = new IntersectionObserver(([e]) => {
      r2 = e.isIntersecting;
      if (r2 && !t) {
        n4 = 0;
        t = requestAnimationFrame(a2);
      }
    });
    c2.observe(hRef_current);
    return () => {
      c2.disconnect();
      cancelAnimationFrame(t);
    };
  }, [D]);
  let j = (e) => (t) => {
    let n4 = yRef.current[e];
    if (n4) {
      if (t.pointerType === `touch`) {
        xRef.current[e] = true;
        return;
      }
      if (t.button === 0) {
        n4.drag = {
          id: t.pointerId,
          lastY: t.clientY,
          lastT: t.timeStamp,
          moved: 0,
          captured: false
        };
        n4.v = 0;
      }
    }
  };
  let M = (e) => (t) => {
    let n4 = yRef.current[e];
    let r2 = n4?.drag;
    if (!n4 || !r2 || r2.id !== t.pointerId) {
      return;
    }
    let t_currentTarget = t.currentTarget;
    let a2 = t_currentTarget.getBoundingClientRect().height / (t_currentTarget.offsetHeight || 1) || 1;
    let o2 = (t.clientY - r2.lastY) / a2;
    let s2 = Math.max(1, t.timeStamp - r2.lastT) / 1e3;
    r2.moved += Math.abs(o2);
    if (!r2.captured && r2.moved > 4) {
      r2.captured = true;
      t_currentTarget.setPointerCapture(t.pointerId);
      t_currentTarget.setAttribute(`data-dragging`, ``);
    }
    n4.y -= o2;
    n4.v = n4.v * 0.6 + -o2 / s2 * 0.4;
    r2.lastY = t.clientY;
    r2.lastT = t.timeStamp;
  };
  let N = (e) => (t) => {
    xRef.current[e] = false;
    let n4 = yRef.current[e];
    let r2 = n4?.drag;
    if (n4 && r2 && r2.id === t.pointerId && (t.timeStamp - r2.lastT > 80 && (n4.v = 0), n4.v = s(n4.v, -2400, 2400), n4.drag = null, t.currentTarget.removeAttribute(`data-dragging`), r2.captured)) {
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
  let P = (e) => (t) => {
    let n4 = yRef.current[e];
    let r2 = gRef.current[e];
    if (D || !n4 || !r2 || n4.h <= 0 || !t.currentTarget.matches(`:focus-visible`)) {
      return;
    }
    let offsetTop = t.currentTarget.parentElement.offsetTop;
    let offsetHeight = t.currentTarget.offsetHeight;
    let r_clientHeight = r2.clientHeight;
    let s2 = Math.min(56, r_clientHeight * 0.12);
    n4.y = [n4.y - n4.h, n4.y, n4.y + n4.h].reduce((acc, item) => {
      if (Math.abs(offsetTop - item - r_clientHeight / 2) < Math.abs(offsetTop - acc - r_clientHeight / 2)) {
        return item;
      }
      return acc;
    });
    let c2 = offsetTop - n4.y;
    n4.seek = offsetHeight > r_clientHeight - s2 * 2 || c2 < s2 ? c2 - s2 : c2 + offsetHeight > r_clientHeight - s2 ? c2 + offsetHeight - (r_clientHeight - s2) : 0;
  };
  let FComponent = (e, t, n4, key) => {
    let a2 = [e.role, e.company].filter(Boolean).join(`\xA0\xB7 `);
    let o2 = e.rating ? s(Math.round(e.rating), 1, 5) : 0;
    return /* @__PURE__ */ jsx("li", { className: `ui-tw__item`, children: /* @__PURE__ */ jsxs("figure", { className: `ui-tw__card`, tabIndex: n4 ? 0 : void 0, onFocus: n4 ? P(t) : void 0, children: [
      o2 ? /* @__PURE__ */ jsx("div", { className: `ui-tw__stars`, role: `img`, "aria-label": `Rated ${o2} out of 5`, children: Array.from({
        length: 5
      }, (e2, t2) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, "data-on": t2 < o2 || void 0, children: /* @__PURE__ */ jsx("path", { d: `M8 1.6l1.9 3.95 4.35.6-3.17 3.03.78 4.32L8 11.43 4.14 13.5l.78-4.32L1.75 6.15l4.35-.6L8 1.6z` }) }, t2)) }) : null,
      /* @__PURE__ */ jsx("blockquote", { className: `ui-tw__quote`, children: /* @__PURE__ */ jsx("p", { children: e.quote }) }),
      /* @__PURE__ */ jsxs("figcaption", { className: `ui-tw__who`, children: [
        e.avatar ? /* @__PURE__ */ jsx("img", { className: `ui-tw__avatar`, src: e.avatar, alt: ``, width: 36, height: 36, loading: `lazy`, decoding: `async`, draggable: false }) : /* @__PURE__ */ jsx("span", { className: `ui-tw__avatar ui-tw__avatar--initials`, "aria-hidden": `true`, children: c(e.name) }),
        /* @__PURE__ */ jsxs("span", { className: `ui-tw__id`, children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-tw__name`, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-tw__name-text`, children: e.name }),
            e.verified ? /* @__PURE__ */ jsxs("svg", { className: `ui-tw__verified`, viewBox: `0 0 16 16`, role: `img`, "aria-label": `Verified customer`, children: [
              /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `7` }),
              /* @__PURE__ */ jsx("path", { d: `M5.2 8.1l1.9 1.9 3.7-3.8`, fill: `none`, stroke: `var(--ui-tw-card)`, strokeWidth: `1.6`, strokeLinecap: `round`, strokeLinejoin: `round` })
            ] }) : null
          ] }),
          a2 ? /* @__PURE__ */ jsx("span", { className: `ui-tw__meta`, children: a2 }) : null
        ] })
      ] })
    ] }) }, key);
  };
  let className_1 = [`ui-tw`, className].filter(Boolean).join(` `);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { href: `ui-testimonial-wall`, precedence: `default`, children: d }),
    /* @__PURE__ */ jsx("div", { ref: hRef, className: className_1, role: `region`, "aria-label": label, "data-cols": C, "data-static": D || void 0, style: {
      "--ui-tw-cols": C
    }, children: k.map((e, t) => {
      if (D) {
        return /* @__PURE__ */ jsx("div", { className: `ui-tw__col`, children: /* @__PURE__ */ jsx("ul", { className: `ui-tw__set`, children: e.map((e2, n4) => FComponent(e2, t, true, String(n4))) }) }, t);
      }
      return /* @__PURE__ */ jsx("div", { ref: (e2) => {
        gRef.current[t] = e2;
      }, className: `ui-tw__col`, onPointerEnter: (e2) => {
        if (e2.pointerType !== `touch`) {
          bRef.current[t] = true;
        }
      }, onPointerLeave: () => bRef.current[t] = false, onPointerDown: j(t), onPointerMove: M(t), onPointerUp: N(t), onPointerCancel: N(t), onFocus: (e2) => SRef.current[t] = e2.target.matches(`:focus-visible`), onBlur: (e2) => {
        if (!e2.currentTarget.contains(e2.relatedTarget)) {
          SRef.current[t] = false;
        }
      }, children: /* @__PURE__ */ jsx("div", { ref: (e2) => {
        _RefRef.current[t] = e2;
      }, className: `ui-tw__track`, style: {
        transform: `translate3d(0, ${-((yRef.current[t]?.h ?? 0) + (yRef.current[t]?.y ?? 0))}px, 0)`
      }, children: Array.from({
        length: 1 + Math.max(2, T[t] ?? 2)
      }, (n4, i2) => {
        let a2 = i2 === 1;
        return /* @__PURE__ */ jsx("ul", { ref: a2 ? (e2) => {
          vRef.current[t] = e2;
        } : void 0, className: `ui-tw__set`, "aria-hidden": !a2 || void 0, inert: !a2 || void 0, children: e.map((e2, n5) => FComponent(e2, t, a2, `${i2}-${n5}`)) }, a2 ? `real` : i2);
      }) }) }, t);
    }) })
  ] });
}
var d = `
.ui-tw {
  --ui-tw-card: #ffffff;
  --ui-tw-line: #ececec;
  --ui-tw-ink: #171717;
  --ui-tw-text: #404040;
  --ui-tw-muted: #8f8f8f;
  --ui-tw-faint: #b5b5b5;
  --ui-tw-star: #a3a3a8;
  --ui-tw-star-off: #e2e2e5;
  --ui-tw-initials: #f0f0f1;
  --ui-tw-shadow: 0 0 0 1px var(--ui-tw-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  --ui-tw-lift: 0 0 0 1px var(--ui-tw-line), 0 2px 4px rgba(0, 0, 0, 0.03), 0 12px 28px -10px rgba(0, 0, 0, 0.14);
  --ui-tw-focus: #2f6bff;
  --ui-tw-gap: 16px;
  --ui-tw-fade: 96px;
  --ui-tw-dim: 0.62;
  --ui-tw-ease: cubic-bezier(0.22, 1, 0.36, 1);
  container-type: inline-size;
  display: grid;
  grid-template-columns: repeat(var(--ui-tw-cols, 3), minmax(0, 1fr));
  /* One row exactly as tall as the wall, so a column's height never follows its (repeated) content */
  grid-template-rows: minmax(0, 1fr);
  gap: var(--ui-tw-gap);
  width: 100%;
  min-width: 0;
  height: var(--ui-tw-height, 600px);
  /* Room at the sides for the lifted card's shadow; the wall clips everything else */
  padding-inline: 12px;
  box-sizing: border-box;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(180deg, transparent, #000 var(--ui-tw-fade), #000 calc(100% - var(--ui-tw-fade)), transparent);
  mask-image: linear-gradient(180deg, transparent, #000 var(--ui-tw-fade), #000 calc(100% - var(--ui-tw-fade)), transparent);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.ui-tw__col {
  position: relative;
  min-width: 0;
  min-height: 0;
  height: 100%;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
.ui-tw__col[data-dragging] { cursor: grabbing; }
.ui-tw__track { will-change: transform; }
.ui-tw__set {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
}
/* Every card carries its gap below, so one set's height is exactly the wrap distance */
.ui-tw__item { margin-bottom: var(--ui-tw-gap); }

.ui-tw__card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
  padding: 18px 20px 18px;
  border-radius: 16px;
  background: var(--ui-tw-card);
  box-shadow: var(--ui-tw-shadow);
  color: var(--ui-tw-text);
  transition: transform 320ms var(--ui-tw-ease), box-shadow 320ms var(--ui-tw-ease), opacity 320ms var(--ui-tw-ease);
}
.ui-tw__card:focus { outline: none; }
.ui-tw__card:focus-visible { outline: 2px solid var(--ui-tw-focus); outline-offset: 2px; }

.ui-tw__stars { display: flex; gap: 2px; margin-bottom: -4px; }
.ui-tw__stars svg { width: 13px; height: 13px; fill: var(--ui-tw-star-off); }
.ui-tw__stars svg[data-on] { fill: var(--ui-tw-star); }

.ui-tw__quote { margin: 0; }
.ui-tw__quote p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: -0.006em;
  text-wrap: pretty;
  overflow-wrap: break-word;
}

.ui-tw__who { display: flex; align-items: center; gap: 10px; min-width: 0; }
.ui-tw__avatar {
  flex: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--ui-tw-initials);
  /* A hairline ring keeps light photos from melting into the card */
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  pointer-events: none;
}
.ui-tw__avatar--initials {
  display: grid;
  place-items: center;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: var(--ui-tw-muted);
}
.ui-tw__id { display: grid; gap: 1px; min-width: 0; }
.ui-tw__name {
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  font-size: 13.5px;
  font-weight: 500;
  line-height: 18px;
  color: var(--ui-tw-ink);
}
/* The name wins over the role: it shrinks last and only then truncates */
.ui-tw__name-text { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ui-tw__verified { flex: none; width: 14px; height: 14px; fill: var(--ui-tw-faint); }
.ui-tw__meta {
  min-width: 0;
  overflow-wrap: break-word;
  font-size: 12.5px;
  line-height: 17px;
  color: var(--ui-tw-muted);
}

/* Hover: the card under the pointer lifts a little, the rest of the wall steps back */
@media (hover: hover) {
  .ui-tw__col:not([data-dragging]) .ui-tw__card:hover { transform: translateY(-3px); box-shadow: var(--ui-tw-lift); }
  .ui-tw:has(.ui-tw__col:not([data-dragging]) .ui-tw__card:hover) .ui-tw__card:not(:hover) { opacity: var(--ui-tw-dim); }
}
/* Keyboard focus gets the same lift */
.ui-tw__card:focus-visible { transform: translateY(-3px); box-shadow: var(--ui-tw-lift); }

/* Narrow walls (one column on phones): roomier, more readable quotes */
@container (max-width: 479px) {
  .ui-tw__card { padding: 18px 18px 18px; }
  .ui-tw__quote p { font-size: 15px; line-height: 1.58; }
}
@container (max-width: 739px) {
  .ui-tw__col { --ui-tw-gap: 14px; }
}

/* Reduced motion: a static masonry that shows every quote \u2013 no fixed height, no fade */
.ui-tw[data-static] {
  height: auto;
  grid-template-rows: auto;
  overflow: visible;
  -webkit-mask-image: none;
  mask-image: none;
}
.ui-tw[data-static] .ui-tw__col { height: auto; cursor: auto; user-select: auto; -webkit-user-select: auto; }

@media (prefers-reduced-motion: reduce) {
  .ui-tw__card { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tw {
  --ui-tw-card: #19191b;
  --ui-tw-line: #2a2a2e;
  --ui-tw-ink: #ededed;
  --ui-tw-text: #c8c8cc;
  --ui-tw-muted: #8b8b92;
  --ui-tw-faint: #6b6b72;
  --ui-tw-star: #7a7a82;
  --ui-tw-star-off: #2f2f34;
  --ui-tw-initials: #232327;
  --ui-tw-shadow: 0 0 0 1px var(--ui-tw-line);
  --ui-tw-lift: 0 0 0 1px #34343a, 0 12px 28px -10px rgba(0, 0, 0, 0.6);
  --ui-tw-focus: #6d8bff;
}
:where(.dark, [data-theme="dark"]) .ui-tw__avatar { box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06); }
`;
var items = [{
  quote: `We replaced three half-finished internal kits with it in a sprint. Our product finally looks like one product.`,
  name: `Lena Hartmann`,
  role: `Design Lead`,
  company: `Fieldnote`,
  avatar: `../avatars/lena.jpg`,
  rating: 5
}, {
  quote: `The motion is the part nobody notices \u2013 which is exactly the point.`,
  name: `Jonas Weber`,
  role: `Staff Engineer`,
  company: `Ledgerline`,
  avatar: `../avatars/jonas.jpg`,
  verified: true
}, {
  quote: `I opened the date range picker expecting to fix the keyboard handling. There was nothing to fix. Focus, arrows, Escape, screen reader labels \u2013 all there, and it still felt light.`,
  name: `Priya Raman`,
  role: `Frontend Engineer`,
  company: `Tidepool Health`,
  verified: true
}, {
  quote: `Copy, paste, ship. Then actually read the code and learn something.`,
  name: `Mara Lindqvist`,
  role: `Product Designer`,
  company: `Kitewise`,
  avatar: `../avatars/mara.jpg`,
  rating: 5
}, {
  quote: `Our designers stopped redlining spacing in reviews. The defaults are calm and consistent, and dark mode just works without a second pass.`,
  name: `Daniel Okafor`,
  role: `Head of Design`,
  company: `Northpeak`
}, {
  quote: `Every component is one file with no dependencies. Our bundle audit took five minutes.`,
  name: `Noah Fischer`,
  role: `Tech Lead`,
  company: `Parcelwise`,
  avatar: `../avatars/noah.jpg`,
  verified: true
}, {
  quote: `It feels like it was built by people who care about the last 5%.`,
  name: `Camille Roux`,
  role: `Design Engineer`,
  company: `Sundial`,
  rating: 5
}, {
  quote: `We shipped a new onboarding flow in two days. The dropzone and the command menu alone saved us a week of polish \u2013 the empty states and the little transitions were already better than what we had planned.`,
  name: `Sofia Marino`,
  role: `Product Manager`,
  company: `Brightloop`,
  avatar: `../avatars/sofia.jpg`,
  verified: true
}, {
  quote: `Finally a library that doesn't look like every other AI-generated dashboard.`,
  name: `Elif Demir`,
  role: `Brand Designer`,
  company: `Harbor Studio`,
  rating: 5
}, {
  quote: `The phone layouts are the real surprise. Everything holds up at 320 pixels, which I can't say about our own app.`,
  name: `Theo Brandt`,
  role: `Mobile Engineer`,
  company: `Copperleaf`,
  avatar: `../avatars/theo.jpg`
}, {
  quote: `Accessible by default, without me having to argue for it in planning.`,
  name: `Marcus Lee`,
  role: `Accessibility Lead`,
  company: `Quillstack`,
  verified: true
}, {
  quote: `I use it as a reference as much as a library. When a junior asks how a height animation should feel, I just send them the source.`,
  name: `Hana Sato`,
  role: `Principal Designer`,
  company: `Plainview`,
  rating: 5
}];
function PComponent() {
  return /* @__PURE__ */ jsxs("div", { className: `testimonial-wall-demo`, children: [
    /* @__PURE__ */ jsxs("header", { className: `testimonial-wall-demo__head`, children: [
      /* @__PURE__ */ jsx("p", { className: `testimonial-wall-demo__eyebrow`, children: `Testimonials` }),
      /* @__PURE__ */ jsx("h2", { className: `testimonial-wall-demo__title`, children: `Loved by product teams` })
    ] }),
    /* @__PURE__ */ jsx(UComponent, { items, speed: 26, label: `What product teams say` })
  ] });
}
export {
  PComponent as default
};
