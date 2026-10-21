import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo-DrrNKEd7.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [1, -0.84, 1.12];
var a = [0, 0.42, 0.18];
var o = (e, t) => t > 0 ? (e % t + t) % t : 0;
var s = (e, t, n4) => Math.min(n4, Math.max(t, e));
var c = (e) => e.split(/\s+/).filter(Boolean).slice(0, 2).map((e2) => e2[0].toUpperCase()).join(``);
var l = (e, t) => Math.min(t, e >= 740 ? 3 : e >= 480 ? 2 : 1);
function u({ items: e, columns: t = 3, speed: u2 = 28, pauseOnHover: f2 = true, label: p2 = `What customers say`, className: m }) {
  let h = (0, n3.useRef)(null), g = (0, n3.useRef)([]), _ = (0, n3.useRef)([]), v = (0, n3.useRef)([]), y = (0, n3.useRef)([]), b = (0, n3.useRef)([]), x = (0, n3.useRef)([]), S = (0, n3.useRef)([]), [C, w] = (0, n3.useState)(t), [T, E] = (0, n3.useState)([]), [D, O] = (0, n3.useState)(false), k = Array.from({ length: C }, (t2, n4) => e.filter((e2, t3) => t3 % C === n4)), A = (0, n3.useRef)({ speed: u2, pauseOnHover: f2, count: C });
  A.current = { speed: u2, pauseOnHover: f2, count: C }, (0, n3.useEffect)(() => {
    let e2 = window.matchMedia(`(prefers-reduced-motion: reduce)`), t2 = () => O(e2.matches);
    return t2(), e2.addEventListener(`change`, t2), () => e2.removeEventListener(`change`, t2);
  }, []), (0, n3.useLayoutEffect)(() => {
    let e2 = h.current;
    if (!e2) return;
    let n4 = () => w(l(e2.clientWidth, t));
    n4();
    let r2 = new ResizeObserver(n4);
    return r2.observe(e2), () => r2.disconnect();
  }, [t]), (0, n3.useEffect)(() => {
    if (D) return;
    let e2 = () => {
      let e3 = k.map((e4, t3) => {
        let n4 = v.current[t3], r2 = g.current[t3];
        if (!n4 || !r2) return 2;
        let i2 = r2.getBoundingClientRect().height / (r2.offsetHeight || 1) || 1, o2 = n4.getBoundingClientRect().height / i2, s2 = y.current[t3] ??= { y: o2 * (a[t3] ?? 0), v: 0, h: o2, drag: null, seek: 0 };
        return s2.h > 0 && o2 > 0 && s2.h !== o2 && (s2.y = s2.y / s2.h * o2), s2.h = o2, o2 > 0 ? Math.min(12, Math.ceil(r2.clientHeight / o2) + 1) : 2;
      });
      y.current.length = k.length, E((t3) => t3.length === e3.length && t3.every((t4, n4) => t4 === e3[n4]) ? t3 : e3);
    };
    e2();
    let t2 = new ResizeObserver(e2);
    for (let e3 of [...v.current.slice(0, C), ...g.current.slice(0, C)]) e3 && t2.observe(e3);
    return () => t2.disconnect();
  }, [D, C, e]), (0, n3.useEffect)(() => {
    let e2 = h.current;
    if (D || !e2) return;
    let t2 = 0, n4 = 0, r2 = false, a2 = (e3) => {
      let c3 = n4 ? Math.min(0.05, (e3 - n4) / 1e3) : 0;
      n4 = e3;
      let { speed: l2, pauseOnHover: u3, count: d2 } = A.current;
      for (let e4 = 0; e4 < d2; e4++) {
        let t3 = y.current[e4], n5 = _.current[e4];
        if (!t3 || !n5 || t3.h <= 0) continue;
        let r3 = d2 === 1 ? 1 : i[e4 % 3], a3 = x.current[e4] || S.current[e4] || u3 && b.current[e4];
        if (!t3.drag) {
          let e5 = a3 ? 0 : l2 * r3, n6 = Math.abs(t3.v - e5) > Math.max(120, l2 * 2) ? 0.55 : a3 ? 0.32 : 0.7;
          if (t3.v += (e5 - t3.v) * (1 - Math.exp(-c3 / n6)), t3.y += t3.v * c3, t3.seek) {
            let e6 = t3.seek * (1 - Math.exp(-c3 / 0.12));
            t3.y += e6, t3.seek = Math.abs(t3.seek - e6) < 0.5 ? 0 : t3.seek - e6;
          }
        }
        t3.y = S.current[e4] ? s(t3.y, -t3.h, t3.h * 2) : o(t3.y, t3.h), n5.style.transform = `translate3d(0, ${-(t3.h + t3.y)}px, 0)`;
      }
      t2 = r2 ? requestAnimationFrame(a2) : 0;
    }, c2 = new IntersectionObserver(([e3]) => {
      r2 = e3.isIntersecting, r2 && !t2 && (n4 = 0, t2 = requestAnimationFrame(a2));
    });
    return c2.observe(e2), () => {
      c2.disconnect(), cancelAnimationFrame(t2);
    };
  }, [D]);
  let j = (e2) => (t2) => {
    let n4 = y.current[e2];
    if (n4) {
      if (t2.pointerType === `touch`) {
        x.current[e2] = true;
        return;
      }
      t2.button === 0 && (n4.drag = { id: t2.pointerId, lastY: t2.clientY, lastT: t2.timeStamp, moved: 0, captured: false }, n4.v = 0);
    }
  }, M = (e2) => (t2) => {
    let n4 = y.current[e2], r2 = n4?.drag;
    if (!n4 || !r2 || r2.id !== t2.pointerId) return;
    let i2 = t2.currentTarget, a2 = i2.getBoundingClientRect().height / (i2.offsetHeight || 1) || 1, o2 = (t2.clientY - r2.lastY) / a2, s2 = Math.max(1, t2.timeStamp - r2.lastT) / 1e3;
    r2.moved += Math.abs(o2), !r2.captured && r2.moved > 4 && (r2.captured = true, i2.setPointerCapture(t2.pointerId), i2.setAttribute(`data-dragging`, ``)), n4.y -= o2, n4.v = n4.v * 0.6 + -o2 / s2 * 0.4, r2.lastY = t2.clientY, r2.lastT = t2.timeStamp;
  }, N = (e2) => (t2) => {
    x.current[e2] = false;
    let n4 = y.current[e2], r2 = n4?.drag;
    if (n4 && r2 && r2.id === t2.pointerId && (t2.timeStamp - r2.lastT > 80 && (n4.v = 0), n4.v = s(n4.v, -2400, 2400), n4.drag = null, t2.currentTarget.removeAttribute(`data-dragging`), r2.captured)) {
      let e3 = t2.currentTarget, n5 = (e4) => {
        e4.preventDefault(), e4.stopPropagation();
      };
      e3.addEventListener(`click`, n5, { capture: true, once: true }), setTimeout(() => e3.removeEventListener(`click`, n5, { capture: true }), 0);
    }
  }, P = (e2) => (t2) => {
    let n4 = y.current[e2], r2 = g.current[e2];
    if (D || !n4 || !r2 || n4.h <= 0 || !t2.currentTarget.matches(`:focus-visible`)) return;
    let i2 = t2.currentTarget.parentElement.offsetTop, a2 = t2.currentTarget.offsetHeight, o2 = r2.clientHeight, s2 = Math.min(56, o2 * 0.12);
    n4.y = [n4.y - n4.h, n4.y, n4.y + n4.h].reduce((e3, t3) => Math.abs(i2 - t3 - o2 / 2) < Math.abs(i2 - e3 - o2 / 2) ? t3 : e3);
    let c2 = i2 - n4.y;
    n4.seek = a2 > o2 - s2 * 2 || c2 < s2 ? c2 - s2 : c2 + a2 > o2 - s2 ? c2 + a2 - (o2 - s2) : 0;
  }, F = (e2, t2, n4, i2) => {
    let a2 = [e2.role, e2.company].filter(Boolean).join(`\xA0\xB7 `), o2 = e2.rating ? s(Math.round(e2.rating), 1, 5) : 0;
    return (0, r.jsx)(`li`, { className: `ui-tw__item`, children: (0, r.jsxs)(`figure`, { className: `ui-tw__card`, tabIndex: n4 ? 0 : void 0, onFocus: n4 ? P(t2) : void 0, children: [o2 ? (0, r.jsx)(`div`, { className: `ui-tw__stars`, role: `img`, "aria-label": `Rated ${o2} out of 5`, children: Array.from({ length: 5 }, (e3, t3) => (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, "data-on": t3 < o2 || void 0, children: (0, r.jsx)(`path`, { d: `M8 1.6l1.9 3.95 4.35.6-3.17 3.03.78 4.32L8 11.43 4.14 13.5l.78-4.32L1.75 6.15l4.35-.6L8 1.6z` }) }, t3)) }) : null, (0, r.jsx)(`blockquote`, { className: `ui-tw__quote`, children: (0, r.jsx)(`p`, { children: e2.quote }) }), (0, r.jsxs)(`figcaption`, { className: `ui-tw__who`, children: [e2.avatar ? (0, r.jsx)(`img`, { className: `ui-tw__avatar`, src: e2.avatar, alt: ``, width: 36, height: 36, loading: `lazy`, decoding: `async`, draggable: false }) : (0, r.jsx)(`span`, { className: `ui-tw__avatar ui-tw__avatar--initials`, "aria-hidden": `true`, children: c(e2.name) }), (0, r.jsxs)(`span`, { className: `ui-tw__id`, children: [(0, r.jsxs)(`span`, { className: `ui-tw__name`, children: [(0, r.jsx)(`span`, { className: `ui-tw__name-text`, children: e2.name }), e2.verified ? (0, r.jsxs)(`svg`, { className: `ui-tw__verified`, viewBox: `0 0 16 16`, role: `img`, "aria-label": `Verified customer`, children: [(0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `7` }), (0, r.jsx)(`path`, { d: `M5.2 8.1l1.9 1.9 3.7-3.8`, fill: `none`, stroke: `var(--ui-tw-card)`, strokeWidth: `1.6`, strokeLinecap: `round`, strokeLinejoin: `round` })] }) : null] }), a2 ? (0, r.jsx)(`span`, { className: `ui-tw__meta`, children: a2 }) : null] })] })] }) }, i2);
  }, I = [`ui-tw`, m].filter(Boolean).join(` `);
  return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`style`, { href: `ui-testimonial-wall`, precedence: `default`, children: d }), (0, r.jsx)(`div`, { ref: h, className: I, role: `region`, "aria-label": p2, "data-cols": C, "data-static": D || void 0, style: { "--ui-tw-cols": C }, children: k.map((e2, t2) => D ? (0, r.jsx)(`div`, { className: `ui-tw__col`, children: (0, r.jsx)(`ul`, { className: `ui-tw__set`, children: e2.map((e3, n4) => F(e3, t2, true, String(n4))) }) }, t2) : (0, r.jsx)(`div`, { ref: (e3) => {
    g.current[t2] = e3;
  }, className: `ui-tw__col`, onPointerEnter: (e3) => {
    e3.pointerType !== `touch` && (b.current[t2] = true);
  }, onPointerLeave: () => b.current[t2] = false, onPointerDown: j(t2), onPointerMove: M(t2), onPointerUp: N(t2), onPointerCancel: N(t2), onFocus: (e3) => S.current[t2] = e3.target.matches(`:focus-visible`), onBlur: (e3) => {
    e3.currentTarget.contains(e3.relatedTarget) || (S.current[t2] = false);
  }, children: (0, r.jsx)(`div`, { ref: (e3) => {
    _.current[t2] = e3;
  }, className: `ui-tw__track`, style: { transform: `translate3d(0, ${-((y.current[t2]?.h ?? 0) + (y.current[t2]?.y ?? 0))}px, 0)` }, children: Array.from({ length: 1 + Math.max(2, T[t2] ?? 2) }, (n4, i2) => {
    let a2 = i2 === 1;
    return (0, r.jsx)(`ul`, { ref: a2 ? (e3) => {
      v.current[t2] = e3;
    } : void 0, className: `ui-tw__set`, "aria-hidden": !a2 || void 0, inert: !a2 || void 0, children: e2.map((e3, n5) => F(e3, t2, a2, `${i2}-${n5}`)) }, a2 ? `real` : i2);
  }) }) }, t2)) })] });
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
var f = [{ quote: `We replaced three half-finished internal kits with it in a sprint. Our product finally looks like one product.`, name: `Lena Hartmann`, role: `Design Lead`, company: `Fieldnote`, avatar: `/avatars/lena.jpg`, rating: 5 }, { quote: `The motion is the part nobody notices \u2013 which is exactly the point.`, name: `Jonas Weber`, role: `Staff Engineer`, company: `Ledgerline`, avatar: `/avatars/jonas.jpg`, verified: true }, { quote: `I opened the date range picker expecting to fix the keyboard handling. There was nothing to fix. Focus, arrows, Escape, screen reader labels \u2013 all there, and it still felt light.`, name: `Priya Raman`, role: `Frontend Engineer`, company: `Tidepool Health`, verified: true }, { quote: `Copy, paste, ship. Then actually read the code and learn something.`, name: `Mara Lindqvist`, role: `Product Designer`, company: `Kitewise`, avatar: `/avatars/mara.jpg`, rating: 5 }, { quote: `Our designers stopped redlining spacing in reviews. The defaults are calm and consistent, and dark mode just works without a second pass.`, name: `Daniel Okafor`, role: `Head of Design`, company: `Northpeak` }, { quote: `Every component is one file with no dependencies. Our bundle audit took five minutes.`, name: `Noah Fischer`, role: `Tech Lead`, company: `Parcelwise`, avatar: `/avatars/noah.jpg`, verified: true }, { quote: `It feels like it was built by people who care about the last 5%.`, name: `Camille Roux`, role: `Design Engineer`, company: `Sundial`, rating: 5 }, { quote: `We shipped a new onboarding flow in two days. The dropzone and the command menu alone saved us a week of polish \u2013 the empty states and the little transitions were already better than what we had planned.`, name: `Sofia Marino`, role: `Product Manager`, company: `Brightloop`, avatar: `/avatars/sofia.jpg`, verified: true }, { quote: `Finally a library that doesn't look like every other AI-generated dashboard.`, name: `Elif Demir`, role: `Brand Designer`, company: `Harbor Studio`, rating: 5 }, { quote: `The phone layouts are the real surprise. Everything holds up at 320 pixels, which I can't say about our own app.`, name: `Theo Brandt`, role: `Mobile Engineer`, company: `Copperleaf`, avatar: `/avatars/theo.jpg` }, { quote: `Accessible by default, without me having to argue for it in planning.`, name: `Marcus Lee`, role: `Accessibility Lead`, company: `Quillstack`, verified: true }, { quote: `I use it as a reference as much as a library. When a junior asks how a height animation should feel, I just send them the source.`, name: `Hana Sato`, role: `Principal Designer`, company: `Plainview`, rating: 5 }];
function p() {
  return (0, r.jsxs)(`div`, { className: `testimonial-wall-demo`, children: [(0, r.jsxs)(`header`, { className: `testimonial-wall-demo__head`, children: [(0, r.jsx)(`p`, { className: `testimonial-wall-demo__eyebrow`, children: `Testimonials` }), (0, r.jsx)(`h2`, { className: `testimonial-wall-demo__title`, children: `Loved by product teams` })] }), (0, r.jsx)(u, { items: f, speed: 26, label: `What product teams say` })] });
}
export {
  p as default
};
