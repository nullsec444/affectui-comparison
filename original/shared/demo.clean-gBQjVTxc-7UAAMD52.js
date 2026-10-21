import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo.clean-gBQjVTxc.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = 12;
function a({ notices: e, onDismiss: t, className: a2 }) {
  let [u2, d2] = (0, n3.useState)(e), [f, p] = (0, n3.useState)(/* @__PURE__ */ new Set()), [m, h] = (0, n3.useState)({}), g = (0, n3.useRef)(/* @__PURE__ */ new Map()), _ = u2.filter((e2) => !f.has(e2.id)), v = Math.min(_.length - 1, 2);
  (0, n3.useLayoutEffect)(() => {
    let e2 = () => {
      let e3 = {};
      g.current.forEach((t3, n4) => e3[n4] = t3.offsetHeight), h(e3);
    };
    e2();
    let t2 = new ResizeObserver(e2);
    return g.current.forEach((e3) => t2.observe(e3)), () => t2.disconnect();
  }, [u2]);
  let y = (e2) => {
    p((t2) => new Set(t2).add(e2.id)), t?.(e2), window.setTimeout(() => {
      d2((t2) => t2.filter((t3) => t3.id !== e2.id)), p((t2) => {
        let n4 = new Set(t2);
        return n4.delete(e2.id), n4;
      });
    }, 320);
  }, b = _[0] ? m[_[0].id] ?? 0 : 0;
  return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`style`, { href: `ui-notification-stack-clean`, precedence: `default`, children: l }), (0, r.jsx)(`section`, { className: [`ui-nsc`, a2].filter(Boolean).join(` `), "aria-label": `Notifications`, style: { height: _.length ? b + v * i : 0 }, children: u2.map((e2) => {
    let t2 = _.findIndex((t3) => t3.id === e2.id), n4 = t2 === -1, a3 = Math.max(0, t2), l2 = !n4 && a3 > 0, u3 = n4 || a3 === 0 ? 0 : b - (m[e2.id] ?? b) + Math.min(a3, 2) * i, d3 = n4 ? 1 : 1 - Math.min(a3, 2) * 0.05;
    return (0, r.jsxs)(`article`, { ref: (t3) => {
      t3 ? g.current.set(e2.id, t3) : g.current.delete(e2.id);
    }, className: `ui-nsc__card`, "data-depth": n4 ? void 0 : a3, "data-leaving": n4 || void 0, "aria-labelledby": `${e2.id}-title`, "aria-hidden": l2 || void 0, inert: l2 || n4, style: { zIndex: n4 ? 10 : 10 - a3, transform: n4 ? void 0 : `translateY(${u3}px) scale(${d3})`, opacity: a3 > 2 ? 0 : void 0 }, children: [(0, r.jsx)(o, { kind: e2.pattern ?? `orbit` }), (0, r.jsxs)(`div`, { className: `ui-nsc__body`, children: [(0, r.jsxs)(`div`, { className: `ui-nsc__top`, children: [e2.badge ? (0, r.jsx)(`span`, { className: `ui-nsc__badge`, children: e2.badge }) : (0, r.jsx)(`span`, {}), (0, r.jsx)(`button`, { type: `button`, className: `ui-nsc__close`, "aria-label": `Dismiss ${e2.title}`, onClick: (t3) => {
      t3.stopPropagation(), y(e2);
    }, children: (0, r.jsx)(s, {}) })] }), (0, r.jsx)(`h3`, { id: `${e2.id}-title`, className: `ui-nsc__title`, children: e2.title }), (0, r.jsx)(`p`, { className: `ui-nsc__text`, children: e2.text }), e2.action && (e2.action.href ? (0, r.jsxs)(`a`, { className: `ui-nsc__btn`, href: e2.action.href, onClick: e2.action.onClick, ...e2.action.external ? { target: `_blank`, rel: `noreferrer` } : {}, children: [e2.action.label, e2.action.external && (0, r.jsx)(c, {})] }) : (0, r.jsx)(`button`, { type: `button`, className: `ui-nsc__btn`, onClick: e2.action.onClick, children: e2.action.label }))] })] }, e2.id);
  }) })] });
}
function o({ kind: e }) {
  return (0, r.jsxs)(`svg`, { className: `ui-nsc__pattern`, viewBox: `0 0 220 160`, fill: `none`, "aria-hidden": `true`, children: [e === `orbit` && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`circle`, { cx: `190`, cy: `10`, r: `46` }), (0, r.jsx)(`circle`, { cx: `190`, cy: `10`, r: `86` }), (0, r.jsx)(`circle`, { cx: `190`, cy: `10`, r: `128` }), (0, r.jsx)(`path`, { d: `M60 160 220 0M0 58h220M150 0v160` }), (0, r.jsx)(`circle`, { cx: `150`, cy: `58`, r: `3.5`, className: `ui-nsc__dot` })] }), e === `grid` && (0, r.jsxs)(r.Fragment, { children: [[30, 60, 90, 120, 150, 180, 210].map((e2) => (0, r.jsx)(`path`, { d: `M${e2} 0v160` }, `x${e2}`)), [20, 50, 80, 110, 140].map((e2) => (0, r.jsx)(`path`, { d: `M0 ${e2}h220` }, `y${e2}`)), (0, r.jsx)(`rect`, { x: `150`, y: `50`, width: `30`, height: `30`, className: `ui-nsc__fill` }), (0, r.jsx)(`circle`, { cx: `180`, cy: `50`, r: `3.5`, className: `ui-nsc__dot` })] }), e === `rays` && (0, r.jsxs)(r.Fragment, { children: [[0, 1, 2, 3, 4, 5, 6, 7].map((e2) => (0, r.jsx)(`path`, { d: `M210 6 L${210 - Math.cos(e2 * Math.PI / 16) * 230} ${6 + Math.sin(e2 * Math.PI / 16) * 230}` }, e2)), (0, r.jsx)(`path`, { d: `M120 6a90 90 0 0 0 90 90` }), (0, r.jsx)(`circle`, { cx: `146`, cy: `70`, r: `3.5`, className: `ui-nsc__dot` })] })] });
}
var s = () => (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, width: `16`, height: `16`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.1`, strokeLinecap: `round`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `m4 4 8 8M12 4l-8 8` }) });
var c = () => (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, width: `16`, height: `16`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.1`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M5 11 11 5M6 5h5v5` }) });
var l = `
/* Colors and motion as variables \u2013 override them on .ui-nsc */
.ui-nsc {
  --ui-nsc-card: #ffffff;
  --ui-nsc-strong: #000000;
  --ui-nsc-ink: rgba(0, 0, 0, 0.88);
  --ui-nsc-text: rgba(0, 0, 0, 0.61);
  --ui-nsc-icon: rgba(0, 0, 0, 0.447);
  --ui-nsc-line: rgba(0, 0, 0, 0.06);
  --ui-nsc-wash: rgba(0, 0, 0, 0.03);
  --ui-nsc-fill: rgba(0, 0, 0, 0.06);
  --ui-nsc-art: rgba(0, 0, 0, 0.07);
  --ui-nsc-accent: rgba(0, 96, 226, 0.765);
  --ui-nsc-accent-bg: rgba(0, 96, 226, 0.05);
  --ui-nsc-focus: rgba(0, 96, 226, 0.35);
  /* Strokes are shadows: a 0.5px hairline plus a soft lift */
  --ui-nsc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-nsc-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.07);
  --ui-nsc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  box-sizing: border-box;
  container-type: inline-size;
  width: 100%;
  max-width: 380px;
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: var(--ui-nsc-ink);
  text-align: left;
  -webkit-font-smoothing: antialiased;
  transition: height 460ms var(--ui-nsc-ease);
}
.ui-nsc *, .ui-nsc *::before, .ui-nsc *::after { box-sizing: border-box; }
:where(.ui-nsc) button { margin: 0; padding: 0; border: 0; background: none; font: inherit; color: inherit; cursor: pointer; -webkit-tap-highlight-color: transparent; }
:where(.ui-nsc) svg { flex: none; }
.ui-nsc button:focus-visible,
.ui-nsc a:focus-visible { outline: 2px solid var(--ui-nsc-focus); outline-offset: 1px; }

/* One white card per notice \u2013 the edge is a shadow, not a border */
.ui-nsc__card {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  border-radius: 10px;
  background: var(--ui-nsc-card);
  box-shadow: var(--ui-nsc-shadow);
  transform-origin: 50% 100%;
  transition:
    transform 460ms var(--ui-nsc-ease),
    opacity 300ms ease,
    box-shadow 300ms ease;
}
/* Cards behind show only their edge */
.ui-nsc__card > * { transition: opacity 260ms ease; }
.ui-nsc__card:not([data-depth="0"]) > * { opacity: 0; }
.ui-nsc__card[data-leaving] {
  opacity: 0;
  transform: translateX(40px) scale(0.98) !important;
  transition: transform 320ms var(--ui-nsc-ease), opacity 240ms ease;
}

/* Quiet hairline art in the top-right corner, with one blue mark */
.ui-nsc__pattern {
  position: absolute;
  top: 0;
  right: 0;
  width: 220px;
  height: 160px;
  stroke: var(--ui-nsc-art);
  stroke-width: 0.75;
  pointer-events: none;
  -webkit-mask-image: radial-gradient(120% 110% at 100% 0%, #000 20%, transparent 70%);
  mask-image: radial-gradient(120% 110% at 100% 0%, #000 20%, transparent 70%);
}
.ui-nsc__dot { fill: var(--ui-nsc-accent); stroke: none; }
.ui-nsc__fill { fill: var(--ui-nsc-accent-bg); }

.ui-nsc__body {
  position: relative;
  padding: 12px 12px 16px 16px;
}
.ui-nsc__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 28px;
  margin-bottom: 8px;
}
/* Tiny label: tinted fill, 10px uppercase */
.ui-nsc__badge {
  padding: 2px 6px;
  border-radius: 5px;
  background: var(--ui-nsc-fill);
  font-size: 10px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--ui-nsc-text);
}
/* Ghost icon button */
.ui-nsc__close {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  transition: background-color 140ms ease, color 140ms ease;
}
:where(.ui-nsc) .ui-nsc__close { color: var(--ui-nsc-icon); }
.ui-nsc__close:hover { background: var(--ui-nsc-wash); color: var(--ui-nsc-ink); }
.ui-nsc__title {
  margin: 0;
  padding-right: 4px;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  color: var(--ui-nsc-strong);
}
.ui-nsc__text {
  margin: 2px 0 0;
  padding-right: 4px;
  max-width: 38ch;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-nsc-text);
}
/* Secondary button: white with the card's hairline shadow */
.ui-nsc__btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  margin-top: 12px;
  padding: 0 10px;
  border-radius: 6px;
  white-space: nowrap;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
  transition: background-color 140ms ease, box-shadow 140ms ease, transform 160ms var(--ui-nsc-ease);
}
:where(.ui-nsc) .ui-nsc__btn { background: var(--ui-nsc-card); box-shadow: var(--ui-nsc-shadow); color: var(--ui-nsc-strong); }
.ui-nsc__btn:has(svg) { padding: 0 8px 0 10px; }
.ui-nsc__btn:hover { box-shadow: var(--ui-nsc-shadow-hover); }
.ui-nsc__btn:active { transform: scale(0.97); }
.ui-nsc__btn svg { color: var(--ui-nsc-icon); }

/* Narrow stacks (phones) */
@container (max-width: 340px) {
  .ui-nsc__body { padding: 10px 10px 14px 14px; }
  .ui-nsc__text { max-width: none; }
}
/* Touch screens: bigger tap targets */
@media (pointer: coarse) {
  .ui-nsc__close { width: 36px; height: 36px; margin: -4px -4px -4px 0; }
  .ui-nsc__btn { height: 36px; padding: 0 14px; }
  .ui-nsc__btn:has(svg) { padding: 0 12px 0 14px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-nsc, .ui-nsc__card, .ui-nsc__card > * { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-nsc {
  --ui-nsc-card: #1c1c1e;
  --ui-nsc-strong: #ffffff;
  --ui-nsc-ink: rgba(255, 255, 255, 0.9);
  --ui-nsc-text: rgba(255, 255, 255, 0.62);
  --ui-nsc-icon: rgba(255, 255, 255, 0.46);
  --ui-nsc-line: rgba(255, 255, 255, 0.08);
  --ui-nsc-wash: rgba(255, 255, 255, 0.04);
  --ui-nsc-fill: rgba(255, 255, 255, 0.08);
  --ui-nsc-art: rgba(255, 255, 255, 0.07);
  --ui-nsc-accent: #4d8dff;
  --ui-nsc-accent-bg: rgba(77, 141, 255, 0.1);
  --ui-nsc-focus: rgba(77, 141, 255, 0.5);
  --ui-nsc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-nsc-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
}
:where(.dark, [data-theme="dark"]) .ui-nsc .ui-nsc__btn { background: rgba(255, 255, 255, 0.04); }
`;
var u = [{ id: `dark-mode`, badge: `New`, title: `Dark mode is here`, text: `Every screen now follows your system theme \u2013 or pick one yourself in settings.`, action: { label: `Try it` }, pattern: `orbit` }, { id: `maintenance`, badge: `Notice`, title: `Scheduled maintenance`, text: `We'll be offline on Sunday from 02:00 to 03:00 UTC. Your data stays safe.`, action: { label: `View status`, href: `#`, external: true }, pattern: `grid` }, { id: `invite`, badge: `Invite`, title: `Mara invited you to Design Ops`, text: `Join the workspace to see shared projects, files and comments.`, action: { label: `Accept invite` }, pattern: `rays` }];
function d() {
  let [e, t] = (0, n3.useState)(0), [i2, o2] = (0, n3.useState)(u.length);
  return (0, r.jsx)(`div`, { className: `notice-demo`, children: (0, r.jsx)(a, { notices: u, onDismiss: () => {
    if (i2 > 1) return o2(i2 - 1);
    window.setTimeout(() => {
      o2(u.length), t((e2) => e2 + 1);
    }, 1200);
  } }, e) });
}
export {
  d as default
};
