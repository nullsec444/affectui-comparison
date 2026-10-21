import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo.clean-D1uXYCFG.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function i({ options: e, value: t, defaultValue: i2, onChange: o2, size: s2 = `md`, variant: c2 = `buttons`, fullWidth: l2 = false, kind: u2 = `radio`, disabled: d2 = false, "aria-label": f, "aria-labelledby": p, className: m }) {
  let [h, g] = (0, n3.useState)(() => i2 ?? e.find((e2) => !e2.disabled)?.value), _ = t === void 0 ? h : t, v = (0, n3.useRef)(null), y = (0, n3.useRef)(null), b = (0, n3.useRef)(null), x = (0, n3.useRef)(null), S = (0, n3.useRef)(_);
  S.current = _;
  let C = (0, n3.useRef)(false), w = (0, n3.useRef)(0), T = (0, n3.useRef)(void 0), E = (0, n3.useRef)(null), D = () => Array.from(b.current?.querySelectorAll(`:scope > .ui-segc__opt`) ?? []), O = e.findIndex((e2) => e2.value === _), k = O >= 0 ? O : e.findIndex((e2) => !e2.disabled), A = (n4) => {
    let r2 = e.find((e2) => e2.value === n4);
    !r2 || r2.disabled || d2 || n4 === S.current || (S.current = n4, t === void 0 && g(n4), o2?.(n4));
  }, j = () => {
    let e2 = D();
    if (!e2.length || !b.current) return;
    let t2 = getComputedStyle(e2[0]), n4 = parseFloat(t2.paddingLeft) + parseFloat(t2.paddingRight), r2 = e2.map((e3) => e3.firstElementChild.offsetWidth + n4);
    l2 ? (b.current.style.setProperty(`--ui-segc-min`, `${Math.max(...r2)}px`), e2.forEach((e3) => e3.style.width = ``)) : e2.forEach((e3, t3) => e3.style.width = `${r2[t3]}px`);
  }, M = (e2) => {
    let t2 = b.current, n4 = x.current;
    if (!t2 || !n4) return;
    let r2 = t2.querySelector(`:scope > .ui-segc__opt[data-active]`);
    if (!r2 || !r2.offsetWidth) {
      n4.style.opacity = `0`;
      return;
    }
    let i3 = r2.offsetLeft, a2 = r2.offsetWidth;
    if (c2 === `underline`) {
      let e3 = r2.firstElementChild;
      i3 += e3.offsetLeft, a2 = e3.offsetWidth;
    }
    let o3 = !n4.dataset.ready || !e2 && !C.current, s3 = parseFloat(n4.style.left) || 0;
    !o3 && i3 !== s3 && (n4.dataset.dir = i3 > s3 ? `right` : `left`), o3 && (n4.style.transition = `none`), n4.style.opacity = `1`, n4.style.left = `${i3}px`, n4.style.right = `${t2.clientWidth - i3 - a2}px`, o3 && (n4.dataset.ready = `1`, n4.offsetWidth, n4.style.transition = ``);
  }, N = () => {
    let e2 = y.current;
    if (!e2) return;
    let t2 = e2.scrollWidth - e2.clientWidth;
    v.current?.toggleAttribute(`data-overflow`, t2 > 1), e2.style.setProperty(`--ui-segc-fade-l`, e2.scrollLeft > 1 ? `24px` : `0px`), e2.style.setProperty(`--ui-segc-fade-r`, e2.scrollLeft < t2 - 1 ? `24px` : `0px`);
  }, P = (e2) => {
    let t2 = y.current, n4 = b.current, r2 = n4?.querySelector(`:scope > .ui-segc__opt[data-active]`);
    if (!t2 || !n4 || !r2 || t2.scrollWidth <= t2.clientWidth + 1) return;
    let i3 = n4.offsetLeft + r2.offsetLeft - (t2.clientWidth - r2.offsetWidth) / 2;
    t2.scrollTo({ left: Math.max(0, i3), behavior: e2 ? `smooth` : `auto` });
  };
  (0, n3.useLayoutEffect)(() => {
    let e2 = b.current, t2 = y.current;
    if (!e2 || !t2) return;
    let n4 = () => {
      j(), M(false), N();
    };
    n4();
    let r2 = requestAnimationFrame(() => v.current?.setAttribute(`data-ready`, ``)), i3 = 0, a2 = new ResizeObserver(() => {
      cancelAnimationFrame(i3), i3 = requestAnimationFrame(n4);
    });
    return a2.observe(t2), a2.observe(e2), e2.querySelectorAll(`.ui-segc__opt, .ui-segc__content`).forEach((e3) => a2.observe(e3)), () => {
      a2.disconnect(), cancelAnimationFrame(i3), cancelAnimationFrame(r2);
    };
  }, [e.length, l2, c2, s2]), (0, n3.useLayoutEffect)(() => {
    if (T.current === _) return;
    let e2 = T.current === void 0;
    T.current = _, e2 || (C.current = true, clearTimeout(w.current), w.current = window.setTimeout(() => C.current = false, 240)), M(!e2), P(!e2);
    let t2 = b.current;
    !e2 && t2 && t2.contains(document.activeElement) && D()[O]?.focus({ preventScroll: true });
  }, [_]), (0, n3.useEffect)(() => () => clearTimeout(w.current), []);
  let F = (t2) => {
    let n4 = e.filter((e2) => !e2.disabled);
    if (!n4.length || d2) return;
    let r2 = u2 === `radio` ? [`ArrowLeft`, `ArrowUp`] : [`ArrowLeft`], i3 = u2 === `radio` ? [`ArrowRight`, `ArrowDown`] : [`ArrowRight`], a2 = n4.findIndex((e2) => e2.value === S.current), o3;
    r2.includes(t2.key) ? o3 = n4[(a2 - 1 + n4.length) % n4.length] : i3.includes(t2.key) ? o3 = n4[(a2 + 1) % n4.length] : t2.key === `Home` ? o3 = n4[0] : t2.key === `End` && (o3 = n4[n4.length - 1]), o3 && (t2.preventDefault(), A(o3.value), D()[e.indexOf(o3)]?.focus());
  }, I = (t2) => {
    let n4 = -1, r2 = 1 / 0;
    return D().forEach((e2, i3) => {
      let a2 = e2.getBoundingClientRect(), o3 = t2 < a2.left ? a2.left - t2 : t2 > a2.right ? t2 - a2.right : 0;
      o3 < r2 && (r2 = o3, n4 = i3);
    }), e[n4];
  }, L = () => {
    E.current = null, v.current?.removeAttribute(`data-pressed`);
  }, R = (e2) => {
    if (d2 || e2.button !== 0) return;
    let t2 = I(e2.clientX);
    if (!t2 || t2.disabled) return;
    let n4 = e2.pointerType === `touch`, r2 = !n4 || t2.value === S.current;
    if (E.current = { id: e2.pointerId, touch: n4, drag: r2, x: e2.clientX, moved: false }, r2 && v.current?.setAttribute(`data-pressed`, ``), !n4) {
      A(t2.value);
      try {
        e2.currentTarget.setPointerCapture(e2.pointerId);
      } catch {
      }
    }
  }, z = (e2) => {
    let t2 = E.current;
    if (!t2 || t2.id !== e2.pointerId || !t2.moved && Math.abs(e2.clientX - t2.x) < (t2.touch ? 8 : 3) || (t2.moved = true, !t2.drag)) return;
    let n4 = I(e2.clientX);
    n4 && !n4.disabled && A(n4.value);
  }, B = (e2) => {
    let t2 = E.current;
    if (t2 && t2.id === e2.pointerId) {
      if (t2.touch && !t2.moved) {
        let t3 = I(e2.clientX);
        t3 && A(t3.value);
      }
      L();
    }
  }, V = u2 === `tabs`;
  return (0, r.jsxs)(`div`, { ref: v, className: [`ui-segc`, m].filter(Boolean).join(` `), "data-size": s2, "data-variant": c2, "data-full": l2 || void 0, "data-disabled": d2 || void 0, children: [(0, r.jsx)(`style`, { href: `ui-segmented-control-clean`, precedence: `default`, children: a }), (0, r.jsx)(`div`, { ref: y, className: `ui-segc__scroller`, onScroll: N, children: (0, r.jsxs)(`div`, { ref: b, className: `ui-segc__track`, role: V ? `tablist` : `radiogroup`, "aria-label": f, "aria-labelledby": p, "aria-disabled": d2 || void 0, "aria-orientation": V ? `horizontal` : void 0, onKeyDown: F, onPointerDown: R, onPointerMove: z, onPointerUp: B, onPointerCancel: L, onLostPointerCapture: L, children: [(0, r.jsx)(`span`, { ref: x, className: `ui-segc__pill`, "aria-hidden": `true` }), e.map((e2, t2) => {
    let n4 = t2 === O;
    return (0, r.jsx)(`button`, { type: `button`, className: `ui-segc__opt`, role: V ? `tab` : `radio`, "aria-checked": V ? void 0 : n4, "aria-selected": V ? n4 : void 0, "aria-controls": V ? e2.controls : void 0, "aria-label": e2.ariaLabel, "data-active": n4 || void 0, disabled: e2.disabled || d2, tabIndex: t2 === k ? 0 : -1, onClick: () => A(e2.value), children: (0, r.jsxs)(`span`, { className: `ui-segc__content`, children: [e2.icon && (0, r.jsx)(`span`, { className: `ui-segc__icon`, children: e2.icon }), e2.label != null && (0, r.jsx)(`span`, { className: `ui-segc__label`, children: e2.label }), e2.count != null && (0, r.jsx)(`span`, { className: `ui-segc__count`, children: e2.count }, String(e2.count)), e2.badge != null && (0, r.jsx)(`span`, { className: `ui-segc__badge`, children: e2.badge })] }) }, e2.value);
  })] }) })] });
}
var a = `
/* Animatable custom properties: the equal segment width and the soft edges glide too */
@property --ui-segc-min { syntax: "<length>"; inherits: true; initial-value: 0px; }
@property --ui-segc-fade-l { syntax: "<length>"; inherits: false; initial-value: 0px; }
@property --ui-segc-fade-r { syntax: "<length>"; inherits: false; initial-value: 0px; }

.ui-segc {
  --ui-segc-ink: rgba(0, 0, 0, 0.88);
  --ui-segc-text: rgba(0, 0, 0, 0.61);
  --ui-segc-hover-text: rgba(0, 0, 0, 0.75);
  --ui-segc-line: rgba(0, 0, 0, 0.06);
  --ui-segc-wash: rgba(0, 0, 0, 0.03);
  --ui-segc-fill: rgba(0, 0, 0, 0.06);
  --ui-segc-track: rgba(0, 0, 0, 0.04);
  --ui-segc-card: #ffffff;
  --ui-segc-card-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-segc-accent: rgba(0, 96, 226, 0.765);
  --ui-segc-accent-soft: rgba(0, 96, 226, 0.08);
  --ui-segc-focus: rgba(0, 96, 226, 0.35);
  --ui-segc-ease: cubic-bezier(0.25, 0.9, 0.3, 1);
  /* Size: md \u2013 28px chips, 4px 10px */
  --ui-segc-h: 28px;
  --ui-segc-px: 10px;
  --ui-segc-fs: 13px;
  --ui-segc-lh: 20px;
  --ui-segc-icon: 16px;
  --ui-segc-gap: 8px;
  --ui-segc-pad: 2px;
  --ui-segc-ring: 3px;
  box-sizing: border-box;
  display: inline-flex;
  max-width: 100%;
  min-width: 0;
  vertical-align: middle;
  border-radius: 8px;
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: var(--ui-segc-fs);
  font-weight: 500;
  line-height: var(--ui-segc-lh);
  color: var(--ui-segc-text);
  -webkit-font-smoothing: antialiased;
}
.ui-segc[data-size="sm"] { --ui-segc-h: 24px; --ui-segc-px: 8px; --ui-segc-fs: 12px; --ui-segc-lh: 16px; --ui-segc-icon: 14px; --ui-segc-gap: 6px; }
.ui-segc[data-size="lg"] { --ui-segc-h: 32px; --ui-segc-px: 12px; --ui-segc-icon: 16px; --ui-segc-gap: 8px; }
.ui-segc[data-full] { display: flex; width: 100%; }
.ui-segc[data-disabled] { opacity: 0.5; pointer-events: none; }
.ui-segc *, .ui-segc *::before, .ui-segc *::after { box-sizing: border-box; }
:where(.ui-segc) button { margin: 0; padding: 0; border: 0; background: none; font: inherit; color: inherit; cursor: pointer; }
:where(.ui-segc) svg { display: block; flex: none; }

/* Scrolls sideways only when it doesn't fit; the padding keeps focus rings from being cut off */
.ui-segc__scroller {
  position: relative;
  flex: 1;
  min-width: 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding: var(--ui-segc-pad);
  border-radius: inherit;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 var(--ui-segc-fade-l), #000 calc(100% - var(--ui-segc-fade-r)), transparent);
  mask-image: linear-gradient(to right, transparent, #000 var(--ui-segc-fade-l), #000 calc(100% - var(--ui-segc-fade-r)), transparent);
  transition: --ui-segc-fade-l 160ms ease, --ui-segc-fade-r 160ms ease;
}
.ui-segc__scroller::-webkit-scrollbar { display: none; }

.ui-segc__track {
  position: relative;
  display: flex;
  width: max-content;
  min-width: 100%;
  /* Horizontal drags move the indicator; vertical ones still scroll the page */
  touch-action: pan-y;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
/* When it scrolls, swipes scroll it instead of dragging the indicator */
.ui-segc[data-overflow] .ui-segc__track { touch-action: pan-x pan-y; }
/* Equal segments, each as wide as the widest one needs */
.ui-segc[data-full] .ui-segc__track { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(var(--ui-segc-min), 1fr); }
.ui-segc[data-ready] .ui-segc__track { transition: --ui-segc-min 200ms var(--ui-segc-ease); }

/* An option */
.ui-segc__opt {
  position: relative;
  z-index: 1;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  height: var(--ui-segc-h);
  padding: 0 var(--ui-segc-px);
  overflow: clip;
  border-radius: 6px;
  white-space: nowrap;
  /* Hover washes are short and crisp, in and out */
  transition: color 90ms ease, background-color 90ms ease;
}
.ui-segc[data-ready]:not([data-full]) .ui-segc__opt { transition: color 90ms ease, background-color 90ms ease, width 200ms var(--ui-segc-ease); }
.ui-segc__opt[data-active] { color: var(--ui-segc-ink); }
.ui-segc__opt:disabled { opacity: 0.4; cursor: not-allowed; }
.ui-segc__opt:focus-visible { outline: 2px solid var(--ui-segc-focus); outline-offset: 1px; }
@media (hover: hover) {
  .ui-segc__opt:not([data-active]):not(:disabled):hover { background-color: var(--ui-segc-wash); }
}

.ui-segc__content { display: inline-flex; flex: none; align-items: center; gap: 6px; }
.ui-segc[data-size="sm"] .ui-segc__content { gap: 5px; }
.ui-segc__icon { display: grid; place-items: center; width: var(--ui-segc-icon); height: var(--ui-segc-icon); color: rgba(0, 0, 0, 0.447); transition: color 90ms ease; }
.ui-segc__opt[data-active] .ui-segc__icon { color: var(--ui-segc-ink); }
.ui-segc__icon svg { width: 100%; height: 100%; }
.ui-segc__label { display: block; }

.ui-segc__count {
  display: inline-grid;
  place-items: center;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 5px;
  background: var(--ui-segc-fill);
  font-size: 11px;
  line-height: 16px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  color: var(--ui-segc-text);
  animation: ui-segc-in 200ms var(--ui-segc-ease) both;
}
.ui-segc__opt[data-active] .ui-segc__count { background: var(--ui-segc-card); box-shadow: 0 0 0 0.5px var(--ui-segc-line); color: var(--ui-segc-ink); }
.ui-segc[data-size="sm"] .ui-segc__count { min-width: 14px; height: 14px; padding: 0 3px; border-radius: 4px; font-size: 10px; line-height: 14px; }
.ui-segc__badge {
  display: inline-flex;
  align-items: center;
  height: 18px;
  padding: 0 6px;
  border-radius: 5px;
  background: var(--ui-segc-accent-soft);
  font-size: 11px;
  line-height: 16px;
  font-weight: 500;
  color: var(--ui-segc-accent);
}
.ui-segc[data-size="sm"] .ui-segc__badge { height: 16px; padding: 0 5px; font-size: 10px; }

/* The indicator: left and right edges slide separately \u2013 the one facing the target leads a touch. Short and crisp */
.ui-segc__pill {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 100%;
  z-index: 0;
  border-radius: 6px;
  background: var(--ui-segc-fill);
  opacity: 0;
  pointer-events: none;
  transition: left 200ms var(--ui-segc-ease), right 200ms var(--ui-segc-ease), scale 120ms var(--ui-segc-ease), opacity 120ms ease;
}
.ui-segc__pill[data-dir="right"] { transition-duration: 220ms, 160ms, 120ms, 120ms; }
.ui-segc__pill[data-dir="left"] { transition-duration: 160ms, 220ms, 120ms, 120ms; }
/* Press feedback: the indicator gives a little while held or dragged */
.ui-segc[data-pressed]:not([data-variant="underline"]) .ui-segc__pill { scale: 0.97; }

/* Buttons (default): separate chips with a hairline; the light-gray fill slides to the active one.
   The control reaches a few px past its box so focus rings are never clipped, and still lines up with its neighbours */
.ui-segc[data-variant="buttons"] { --ui-segc-pad: var(--ui-segc-ring); margin: calc(var(--ui-segc-ring) * -1); max-width: calc(100% + var(--ui-segc-ring) * 2); }
.ui-segc[data-variant="buttons"][data-full] { width: calc(100% + var(--ui-segc-ring) * 2); }
.ui-segc[data-variant="buttons"] .ui-segc__track { gap: var(--ui-segc-gap); }
.ui-segc[data-variant="buttons"] .ui-segc__opt { box-shadow: inset 0 0 0 0.5px var(--ui-segc-line); }

/* Tray: a compact light-gray track with a white raised pill */
.ui-segc[data-variant="tray"] { background: var(--ui-segc-track); }
.ui-segc[data-variant="tray"] .ui-segc__opt { height: calc(var(--ui-segc-h) - var(--ui-segc-pad) * 2); }
.ui-segc[data-variant="tray"] .ui-segc__pill { background: var(--ui-segc-card); box-shadow: var(--ui-segc-card-shadow); }

/* Underline: text tabs on a hairline */
.ui-segc[data-variant="underline"] { --ui-segc-px: 2px; --ui-segc-gap: 20px; border-radius: 0; box-shadow: inset 0 -0.5px 0 var(--ui-segc-line); }
.ui-segc[data-variant="underline"] .ui-segc__scroller { padding: 0; }
.ui-segc[data-variant="underline"]:not([data-full]) .ui-segc__track { gap: var(--ui-segc-gap); }
.ui-segc[data-variant="underline"][data-full] { --ui-segc-px: 10px; }
.ui-segc[data-variant="underline"] .ui-segc__opt { height: calc(var(--ui-segc-h) + 6px); }
.ui-segc[data-variant="underline"] .ui-segc__opt:focus-visible { outline-offset: -2px; }
.ui-segc[data-variant="underline"] .ui-segc__pill { top: auto; height: 1.5px; border-radius: 1.5px 1.5px 0 0; background: var(--ui-segc-ink); }
@media (hover: hover) {
  .ui-segc[data-variant="underline"] .ui-segc__opt:not([data-active]):not(:disabled):hover { background-color: transparent; color: var(--ui-segc-hover-text); }
}

@keyframes ui-segc-in { from { opacity: 0; transform: translateY(2px); filter: blur(2px); } to { opacity: 1; transform: none; filter: none; } }

/* Touch screens: every option at least 40px tall */
@media (hover: none) and (pointer: coarse) {
  .ui-segc[data-size] { --ui-segc-h: 40px; }
  .ui-segc[data-size="lg"] { --ui-segc-h: 44px; }
  .ui-segc[data-variant="tray"][data-size] { --ui-segc-h: 44px; }
  .ui-segc[data-variant="underline"] .ui-segc__opt { height: var(--ui-segc-h); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-segc *, .ui-segc *::before, .ui-segc *::after { animation: none !important; transition: none !important; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-segc {
  --ui-segc-ink: rgba(255, 255, 255, 0.9);
  --ui-segc-text: rgba(255, 255, 255, 0.62);
  --ui-segc-hover-text: rgba(255, 255, 255, 0.78);
  --ui-segc-line: rgba(255, 255, 255, 0.08);
  --ui-segc-wash: rgba(255, 255, 255, 0.04);
  --ui-segc-fill: rgba(255, 255, 255, 0.08);
  --ui-segc-track: rgba(255, 255, 255, 0.05);
  --ui-segc-card: #2c2c2f;
  --ui-segc-card-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px rgba(0, 0, 0, 0.4);
  --ui-segc-accent: #4d8dff;
  --ui-segc-accent-soft: rgba(77, 141, 255, 0.14);
  --ui-segc-focus: rgba(77, 141, 255, 0.45);
}
:where(.dark, [data-theme="dark"]) .ui-segc__icon { color: rgba(255, 255, 255, 0.46); }
:where(.dark, [data-theme="dark"]) .ui-segc__opt[data-active] .ui-segc__icon { color: var(--ui-segc-ink); }
`;
var o = ({ d: e }) => (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.6`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: e }) });
var s = [{ value: `overview`, label: `Overview` }, { value: `analytics`, label: `Analytics` }, { value: `reports`, label: `Reports` }, { value: `notifications`, label: `Notifications`, count: 3 }];
var c = [{ value: `list`, label: `List`, icon: (0, r.jsx)(o, { d: `M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01` }) }, { value: `board`, label: `Board`, icon: (0, r.jsx)(o, { d: `M5 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM15 4h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z` }) }, { value: `calendar`, label: `Calendar`, icon: (0, r.jsx)(o, { d: `M8 3v3M16 3v3M4 9.5h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z` }) }];
var l = [{ value: `monthly`, label: `Monthly` }, { value: `yearly`, label: `Yearly`, badge: `Save 20%` }];
var u = [`analytics`, `reports`, `notifications`, `overview`];
function d() {
  let [e, t] = (0, n3.useState)(`overview`), [a2, o2] = (0, n3.useState)(`board`), [d2, f] = (0, n3.useState)(`yearly`), p = (0, n3.useRef)([]), m = (0, n3.useId)(), h = () => {
    p.current.forEach(clearTimeout), p.current = [];
  };
  return (0, n3.useEffect)(() => (p.current = u.map((e2, n4) => window.setTimeout(() => t(e2), 1e3 + n4 * 1400)), h), []), (0, r.jsx)(`div`, { className: `seg-demo seg-demo--clean`, onPointerDownCapture: h, onKeyDownCapture: h, children: (0, r.jsxs)(`div`, { className: `seg-demo__card`, children: [(0, r.jsxs)(`div`, { className: `seg-demo__row`, children: [(0, r.jsx)(`span`, { className: `seg-demo__label`, id: `${m}-section`, children: `Dashboard` }), (0, r.jsx)(i, { options: s, value: e, onChange: t, "aria-labelledby": `${m}-section` })] }), (0, r.jsxs)(`div`, { className: `seg-demo__row`, children: [(0, r.jsx)(`span`, { className: `seg-demo__label`, id: `${m}-view`, children: `Layout` }), (0, r.jsx)(i, { options: c, value: a2, onChange: o2, size: `sm`, variant: `tray`, "aria-labelledby": `${m}-view` })] }), (0, r.jsxs)(`div`, { className: `seg-demo__row`, children: [(0, r.jsx)(`span`, { className: `seg-demo__label`, id: `${m}-billing`, children: `Billing` }), (0, r.jsx)(i, { options: l, value: d2, onChange: f, variant: `underline`, "aria-labelledby": `${m}-billing` })] })] }) });
}
export {
  d as default
};
