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

// reconstructed/demo.clean-gBQjVTxc.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = 12;
function AComponent({
  notices: notices2,
  onDismiss,
  className
}) {
  let [u, setU] = n3.useState(notices2);
  let [f, setF] = n3.useState(/* @__PURE__ */ new Set());
  let [m, setM] = n3.useState({});
  let gRef = n3.useRef(/* @__PURE__ */ new Map());
  let _ = u.filter((e) => !f.has(e.id));
  let v = Math.min(_.length - 1, 2);
  n3.useLayoutEffect(() => {
    let e = () => {
      let e2 = {};
      gRef.current.forEach((t2, n4) => e2[n4] = t2.offsetHeight);
      setM(e2);
    };
    e();
    let t = new ResizeObserver(e);
    gRef.current.forEach((e2) => t.observe(e2));
    return () => t.disconnect();
  }, [u]);
  let y = (e) => {
    setF((t) => new Set(t).add(e.id));
    onDismiss?.(e);
    window.setTimeout(() => {
      setU((t) => t.filter((t2) => t2.id !== e.id));
      setF((t) => {
        let n4 = new Set(t);
        n4.delete(e.id);
        return n4;
      });
    }, 320);
  };
  let b = _[0] ? m[_[0].id] ?? 0 : 0;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { href: `ui-notification-stack-clean`, precedence: `default`, children: l }),
    /* @__PURE__ */ jsx("section", { className: [`ui-nsc`, className].filter(Boolean).join(` `), "aria-label": `Notifications`, style: {
      height: _.length ? b + v * i : 0
    }, children: u.map((e) => {
      let t = _.findIndex((t2) => t2.id === e.id);
      let n4 = t === -1;
      let a = Math.max(0, t);
      let l2 = !n4 && a > 0;
      let u2 = n4 || a === 0 ? 0 : b - (m[e.id] ?? b) + Math.min(a, 2) * i;
      let d = n4 ? 1 : 1 - Math.min(a, 2) * 0.05;
      return /* @__PURE__ */ jsxs("article", { ref: (t2) => {
        if (t2) {
          gRef.current.set(e.id, t2);
        } else {
          gRef.current.delete(e.id);
        }
      }, className: `ui-nsc__card`, "data-depth": n4 ? void 0 : a, "data-leaving": n4 || void 0, "aria-labelledby": `${e.id}-title`, "aria-hidden": l2 || void 0, inert: l2 || n4, style: {
        zIndex: n4 ? 10 : 10 - a,
        transform: n4 ? void 0 : `translateY(${u2}px) scale(${d})`,
        opacity: a > 2 ? 0 : void 0
      }, children: [
        /* @__PURE__ */ jsx(OComponent, { kind: e.pattern ?? `orbit` }),
        /* @__PURE__ */ jsxs("div", { className: `ui-nsc__body`, children: [
          /* @__PURE__ */ jsxs("div", { className: `ui-nsc__top`, children: [
            e.badge ? /* @__PURE__ */ jsx("span", { className: `ui-nsc__badge`, children: e.badge }) : /* @__PURE__ */ jsx("span", {}),
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-nsc__close`, "aria-label": `Dismiss ${e.title}`, onClick: (t2) => {
              t2.stopPropagation();
              y(e);
            }, children: /* @__PURE__ */ jsx(SComponent, {}) })
          ] }),
          /* @__PURE__ */ jsx("h3", { id: `${e.id}-title`, className: `ui-nsc__title`, children: e.title }),
          /* @__PURE__ */ jsx("p", { className: `ui-nsc__text`, children: e.text }),
          e.action && (e.action.href ? /* @__PURE__ */ jsxs("a", { className: `ui-nsc__btn`, href: e.action.href, onClick: e.action.onClick, ...e.action.external ? {
            target: `_blank`,
            rel: `noreferrer`
          } : {}, children: [
            e.action.label,
            e.action.external && /* @__PURE__ */ jsx(CComponent, {})
          ] }) : /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-nsc__btn`, onClick: e.action.onClick, children: e.action.label }))
        ] })
      ] }, e.id);
    }) })
  ] });
}
function OComponent({
  kind
}) {
  return /* @__PURE__ */ jsxs("svg", { className: `ui-nsc__pattern`, viewBox: `0 0 220 160`, fill: `none`, "aria-hidden": `true`, children: [
    kind === `orbit` && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("circle", { cx: `190`, cy: `10`, r: `46` }),
      /* @__PURE__ */ jsx("circle", { cx: `190`, cy: `10`, r: `86` }),
      /* @__PURE__ */ jsx("circle", { cx: `190`, cy: `10`, r: `128` }),
      /* @__PURE__ */ jsx("path", { d: `M60 160 220 0M0 58h220M150 0v160` }),
      /* @__PURE__ */ jsx("circle", { cx: `150`, cy: `58`, r: `3.5`, className: `ui-nsc__dot` })
    ] }),
    kind === `grid` && /* @__PURE__ */ jsxs(Fragment, { children: [
      [30, 60, 90, 120, 150, 180, 210].map((e) => /* @__PURE__ */ jsx("path", { d: `M${e} 0v160` }, `x${e}`)),
      [20, 50, 80, 110, 140].map((e) => /* @__PURE__ */ jsx("path", { d: `M0 ${e}h220` }, `y${e}`)),
      /* @__PURE__ */ jsx("rect", { x: `150`, y: `50`, width: `30`, height: `30`, className: `ui-nsc__fill` }),
      /* @__PURE__ */ jsx("circle", { cx: `180`, cy: `50`, r: `3.5`, className: `ui-nsc__dot` })
    ] }),
    kind === `rays` && /* @__PURE__ */ jsxs(Fragment, { children: [
      [0, 1, 2, 3, 4, 5, 6, 7].map((e) => /* @__PURE__ */ jsx("path", { d: `M210 6 L${210 - Math.cos(e * Math.PI / 16) * 230} ${6 + Math.sin(e * Math.PI / 16) * 230}` }, e)),
      /* @__PURE__ */ jsx("path", { d: `M120 6a90 90 0 0 0 90 90` }),
      /* @__PURE__ */ jsx("circle", { cx: `146`, cy: `70`, r: `3.5`, className: `ui-nsc__dot` })
    ] })
  ] });
}
var SComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, width: `16`, height: `16`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.1`, strokeLinecap: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m4 4 8 8M12 4l-8 8` }) });
var CComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, width: `16`, height: `16`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.1`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M5 11 11 5M6 5h5v5` }) });
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
var notices = [{
  id: `dark-mode`,
  badge: `New`,
  title: `Dark mode is here`,
  text: `Every screen now follows your system theme \u2013 or pick one yourself in settings.`,
  action: {
    label: `Try it`
  },
  pattern: `orbit`
}, {
  id: `maintenance`,
  badge: `Notice`,
  title: `Scheduled maintenance`,
  text: `We'll be offline on Sunday from 02:00 to 03:00 UTC. Your data stays safe.`,
  action: {
    label: `View status`,
    href: `#`,
    external: true
  },
  pattern: `grid`
}, {
  id: `invite`,
  badge: `Invite`,
  title: `Mara invited you to Design Ops`,
  text: `Join the workspace to see shared projects, files and comments.`,
  action: {
    label: `Accept invite`
  },
  pattern: `rays`
}];
function DComponent() {
  let [key, setKey] = n3.useState(0);
  let [i2, setI] = n3.useState(notices.length);
  return /* @__PURE__ */ jsx("div", { className: `notice-demo`, children: /* @__PURE__ */ jsx(AComponent, { notices, onDismiss: () => {
    if (i2 > 1) {
      return setI(i2 - 1);
    }
    window.setTimeout(() => {
      setI(notices.length);
      setKey((e) => e + 1);
    }, 1200);
  } }, key) });
}
export {
  DComponent as default
};
