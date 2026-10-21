import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/component-BDo0fvGw.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function i({ options: e, value: t, defaultValue: i2, onChange: o, size: s = `md`, variant: c = `tray`, fullWidth: l = false, kind: u = `radio`, disabled: d = false, "aria-label": f, "aria-labelledby": p, className: m }) {
  let [h, g] = (0, n3.useState)(() => i2 ?? e.find((e2) => !e2.disabled)?.value), _ = t === void 0 ? h : t, v = (0, n3.useRef)(null), y = (0, n3.useRef)(null), b = (0, n3.useRef)(null), x = (0, n3.useRef)(null), S = (0, n3.useRef)(_);
  S.current = _;
  let C = (0, n3.useRef)(false), w = (0, n3.useRef)(0), T = (0, n3.useRef)(void 0), E = (0, n3.useRef)(null), D = () => Array.from(b.current?.querySelectorAll(`:scope > .ui-seg__opt`) ?? []), O = e.findIndex((e2) => e2.value === _), k = O >= 0 ? O : e.findIndex((e2) => !e2.disabled), A = (n4) => {
    let r2 = e.find((e2) => e2.value === n4);
    !r2 || r2.disabled || d || n4 === S.current || (S.current = n4, t === void 0 && g(n4), o?.(n4));
  }, j = () => {
    let e2 = D();
    if (!e2.length || !b.current) return;
    let t2 = getComputedStyle(e2[0]), n4 = parseFloat(t2.paddingLeft) + parseFloat(t2.paddingRight), r2 = e2.map((e3) => e3.firstElementChild.offsetWidth + n4);
    l ? (b.current.style.setProperty(`--ui-seg-min`, `${Math.max(...r2)}px`), e2.forEach((e3) => e3.style.width = ``)) : e2.forEach((e3, t3) => e3.style.width = `${r2[t3]}px`);
  }, M = (e2) => {
    let t2 = b.current, n4 = x.current;
    if (!t2 || !n4) return;
    let r2 = t2.querySelector(`:scope > .ui-seg__opt[data-active]`);
    if (!r2 || !r2.offsetWidth) {
      n4.style.opacity = `0`;
      return;
    }
    let i3 = r2.offsetLeft, a2 = r2.offsetWidth;
    if (c === `underline`) {
      let e3 = r2.firstElementChild;
      i3 += e3.offsetLeft, a2 = e3.offsetWidth;
    }
    let o2 = !n4.dataset.ready || !e2 && !C.current, s2 = parseFloat(n4.style.left) || 0;
    !o2 && i3 !== s2 && (n4.dataset.dir = i3 > s2 ? `right` : `left`), o2 && (n4.style.transition = `none`), n4.style.opacity = `1`, n4.style.left = `${i3}px`, n4.style.right = `${t2.clientWidth - i3 - a2}px`, o2 && (n4.dataset.ready = `1`, n4.offsetWidth, n4.style.transition = ``);
  }, N = () => {
    let e2 = y.current;
    if (!e2) return;
    let t2 = e2.scrollWidth - e2.clientWidth;
    v.current?.toggleAttribute(`data-overflow`, t2 > 1), e2.style.setProperty(`--ui-seg-fade-l`, e2.scrollLeft > 1 ? `24px` : `0px`), e2.style.setProperty(`--ui-seg-fade-r`, e2.scrollLeft < t2 - 1 ? `24px` : `0px`);
  }, P = (e2) => {
    let t2 = y.current, n4 = b.current, r2 = n4?.querySelector(`:scope > .ui-seg__opt[data-active]`);
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
    return a2.observe(t2), a2.observe(e2), e2.querySelectorAll(`.ui-seg__opt, .ui-seg__content`).forEach((e3) => a2.observe(e3)), () => {
      a2.disconnect(), cancelAnimationFrame(i3), cancelAnimationFrame(r2);
    };
  }, [e.length, l, c, s]), (0, n3.useLayoutEffect)(() => {
    if (T.current === _) return;
    let e2 = T.current === void 0;
    T.current = _, e2 || (C.current = true, clearTimeout(w.current), w.current = window.setTimeout(() => C.current = false, 440)), M(!e2), P(!e2);
    let t2 = b.current;
    !e2 && t2 && t2.contains(document.activeElement) && D()[O]?.focus({ preventScroll: true });
  }, [_]), (0, n3.useEffect)(() => () => clearTimeout(w.current), []);
  let F = (t2) => {
    let n4 = e.filter((e2) => !e2.disabled);
    if (!n4.length || d) return;
    let r2 = u === `radio` ? [`ArrowLeft`, `ArrowUp`] : [`ArrowLeft`], i3 = u === `radio` ? [`ArrowRight`, `ArrowDown`] : [`ArrowRight`], a2 = n4.findIndex((e2) => e2.value === S.current), o2;
    r2.includes(t2.key) ? o2 = n4[(a2 - 1 + n4.length) % n4.length] : i3.includes(t2.key) ? o2 = n4[(a2 + 1) % n4.length] : t2.key === `Home` ? o2 = n4[0] : t2.key === `End` && (o2 = n4[n4.length - 1]), o2 && (t2.preventDefault(), A(o2.value), D()[e.indexOf(o2)]?.focus());
  }, I = (t2) => {
    let n4 = -1, r2 = 1 / 0;
    return D().forEach((e2, i3) => {
      let a2 = e2.getBoundingClientRect(), o2 = t2 < a2.left ? a2.left - t2 : t2 > a2.right ? t2 - a2.right : 0;
      o2 < r2 && (r2 = o2, n4 = i3);
    }), e[n4];
  }, L = () => {
    E.current = null, v.current?.removeAttribute(`data-pressed`);
  }, R = (e2) => {
    if (d || e2.button !== 0) return;
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
  }, V = u === `tabs`;
  return (0, r.jsxs)(`div`, { ref: v, className: [`ui-seg`, m].filter(Boolean).join(` `), "data-size": s, "data-variant": c, "data-full": l || void 0, "data-disabled": d || void 0, children: [(0, r.jsx)(`style`, { href: `ui-segmented-control`, precedence: `default`, children: a }), (0, r.jsx)(`div`, { ref: y, className: `ui-seg__scroller`, onScroll: N, children: (0, r.jsxs)(`div`, { ref: b, className: `ui-seg__track`, role: V ? `tablist` : `radiogroup`, "aria-label": f, "aria-labelledby": p, "aria-disabled": d || void 0, "aria-orientation": V ? `horizontal` : void 0, onKeyDown: F, onPointerDown: R, onPointerMove: z, onPointerUp: B, onPointerCancel: L, onLostPointerCapture: L, children: [(0, r.jsx)(`span`, { ref: x, className: `ui-seg__pill`, "aria-hidden": `true` }), e.map((e2, t2) => {
    let n4 = t2 === O;
    return (0, r.jsx)(`button`, { type: `button`, className: `ui-seg__opt`, role: V ? `tab` : `radio`, "aria-checked": V ? void 0 : n4, "aria-selected": V ? n4 : void 0, "aria-controls": V ? e2.controls : void 0, "aria-label": e2.ariaLabel, "data-active": n4 || void 0, disabled: e2.disabled || d, tabIndex: t2 === k ? 0 : -1, onClick: () => A(e2.value), children: (0, r.jsxs)(`span`, { className: `ui-seg__content`, children: [e2.icon && (0, r.jsx)(`span`, { className: `ui-seg__icon`, children: e2.icon }), e2.label != null && (0, r.jsxs)(`span`, { className: `ui-seg__label`, children: [(0, r.jsx)(`span`, { className: `ui-seg__text`, children: e2.label }), (0, r.jsx)(`span`, { className: `ui-seg__text ui-seg__text-bold`, "aria-hidden": `true`, children: e2.label })] }), e2.count != null && (0, r.jsx)(`span`, { className: `ui-seg__count`, children: e2.count }, String(e2.count)), e2.badge != null && (0, r.jsx)(`span`, { className: `ui-seg__badge`, children: e2.badge })] }) }, e2.value);
  })] }) })] });
}
var a = `
/* Animatable custom properties: the equal segment width and the soft edges glide too */
@property --ui-seg-min { syntax: "<length>"; inherits: true; initial-value: 0px; }
@property --ui-seg-fade-l { syntax: "<length>"; inherits: false; initial-value: 0px; }
@property --ui-seg-fade-r { syntax: "<length>"; inherits: false; initial-value: 0px; }

.ui-seg {
  --ui-seg-tray: #f0f0f0;
  --ui-seg-pill: #ffffff;
  --ui-seg-line: #ececec;
  --ui-seg-ink: #171717;
  --ui-seg-text: #404040;
  --ui-seg-soft: #737373;
  --ui-seg-muted: #8f8f8f;
  --ui-seg-count: rgba(0, 0, 0, 0.06);
  --ui-seg-accent: #2f6bff;
  --ui-seg-accent-soft: rgba(47, 107, 255, 0.1);
  --ui-seg-pill-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.06);
  --ui-seg-focus: rgba(23, 23, 23, 0.22);
  --ui-seg-ease: cubic-bezier(0.22, 1, 0.36, 1);
  /* Size: md */
  --ui-seg-h: 30px;
  --ui-seg-px: 12px;
  --ui-seg-fs: 13.5px;
  --ui-seg-r: 11px;
  --ui-seg-pad: 3px;
  --ui-seg-icon: 15px;
  --ui-seg-gap: 20px;
  box-sizing: border-box;
  display: inline-flex;
  max-width: 100%;
  min-width: 0;
  vertical-align: middle;
  border-radius: var(--ui-seg-r);
  background: var(--ui-seg-tray);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: var(--ui-seg-fs);
  line-height: 1;
  color: var(--ui-seg-soft);
  -webkit-font-smoothing: antialiased;
}
.ui-seg[data-size="sm"] { --ui-seg-h: 26px; --ui-seg-px: 10px; --ui-seg-fs: 12.5px; --ui-seg-r: 9px; --ui-seg-pad: 2px; --ui-seg-icon: 14px; --ui-seg-gap: 16px; }
.ui-seg[data-size="lg"] { --ui-seg-h: 36px; --ui-seg-px: 16px; --ui-seg-fs: 14px; --ui-seg-r: 13px; --ui-seg-pad: 4px; --ui-seg-icon: 16px; --ui-seg-gap: 24px; }
.ui-seg[data-full] { display: flex; width: 100%; }
.ui-seg[data-disabled] { opacity: 0.5; pointer-events: none; }
.ui-seg *, .ui-seg *::before, .ui-seg *::after { box-sizing: border-box; }
:where(.ui-seg) button { margin: 0; border: 0; background: none; font: inherit; color: inherit; cursor: pointer; }
:where(.ui-seg) svg { display: block; flex: none; }

/* Scrolls sideways only when it doesn't fit; the padding keeps focus rings from being cut off */
.ui-seg__scroller {
  position: relative;
  flex: 1;
  min-width: 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding: var(--ui-seg-pad);
  border-radius: inherit;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 var(--ui-seg-fade-l), #000 calc(100% - var(--ui-seg-fade-r)), transparent);
  mask-image: linear-gradient(to right, transparent, #000 var(--ui-seg-fade-l), #000 calc(100% - var(--ui-seg-fade-r)), transparent);
  transition: --ui-seg-fade-l 200ms ease, --ui-seg-fade-r 200ms ease;
}
.ui-seg__scroller::-webkit-scrollbar { display: none; }

.ui-seg__track {
  position: relative;
  display: flex;
  width: max-content;
  min-width: 100%;
  /* Horizontal drags move the pill; vertical ones still scroll the page */
  touch-action: pan-y;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
/* When it scrolls, swipes scroll it instead of dragging the pill */
.ui-seg[data-overflow] .ui-seg__track { touch-action: pan-x pan-y; }
/* Equal segments, each as wide as the widest one needs */
.ui-seg[data-full] .ui-seg__track { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(var(--ui-seg-min), 1fr); }
.ui-seg[data-ready] .ui-seg__track { transition: --ui-seg-min 320ms var(--ui-seg-ease); }

/* An option */
.ui-seg__opt {
  position: relative;
  z-index: 1;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  height: var(--ui-seg-h);
  padding: 0 var(--ui-seg-px);
  overflow: clip;
  border-radius: calc(var(--ui-seg-r) - var(--ui-seg-pad));
  white-space: nowrap;
  transition: color 200ms ease;
}
.ui-seg[data-ready]:not([data-full]) .ui-seg__opt { transition: color 200ms ease, width 320ms var(--ui-seg-ease); }
.ui-seg__opt[data-active] { color: var(--ui-seg-ink); }
.ui-seg__opt:disabled { opacity: 0.4; cursor: not-allowed; }
.ui-seg__opt:focus-visible { outline: 2px solid var(--ui-seg-focus); outline-offset: 0; }
@media (hover: hover) {
  .ui-seg__opt:not([data-active]):not(:disabled):hover { color: var(--ui-seg-text); }
}

.ui-seg__content { display: inline-flex; flex: none; align-items: center; gap: 6px; }
.ui-seg__icon { display: grid; place-items: center; width: var(--ui-seg-icon); height: var(--ui-seg-icon); }
.ui-seg__icon svg { width: 100%; height: 100%; }

/* Regular and semibold copies of the label crossfade */
.ui-seg__label { display: grid; justify-items: center; }
.ui-seg__text { grid-area: 1 / 1; font-weight: 500; transition: opacity 200ms ease; }
.ui-seg__text-bold { font-weight: 600; opacity: 0; }
.ui-seg__opt[data-active] .ui-seg__text { opacity: 0; }
.ui-seg__opt[data-active] .ui-seg__text-bold { opacity: 1; }

.ui-seg__count {
  display: inline-grid;
  place-items: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: var(--ui-seg-count);
  font-size: 11px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--ui-seg-text);
  animation: ui-seg-in 260ms var(--ui-seg-ease) both;
}
.ui-seg[data-size="sm"] .ui-seg__count { min-width: 16px; height: 16px; padding: 0 4px; font-size: 10.5px; }
.ui-seg__badge {
  display: inline-flex;
  align-items: center;
  height: 18px;
  padding: 0 6px;
  border-radius: 6px;
  background: var(--ui-seg-accent-soft);
  font-size: 11px;
  font-weight: 500;
  color: var(--ui-seg-accent);
}

/* The indicator: left and right edges glide separately \u2013 the one facing the target leads, so it stretches and settles */
.ui-seg__pill {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 100%;
  z-index: 0;
  border-radius: calc(var(--ui-seg-r) - var(--ui-seg-pad));
  background: var(--ui-seg-pill);
  box-shadow: var(--ui-seg-pill-shadow);
  opacity: 0;
  pointer-events: none;
  transition: left 380ms var(--ui-seg-ease), right 380ms var(--ui-seg-ease), scale 200ms var(--ui-seg-ease), opacity 160ms ease;
}
.ui-seg__pill[data-dir="right"] { transition-duration: 400ms, 270ms, 200ms, 160ms; }
.ui-seg__pill[data-dir="left"] { transition-duration: 270ms, 400ms, 200ms, 160ms; }
/* Press feedback: the pill gives a little while held or dragged */
.ui-seg[data-pressed]:not([data-variant="underline"]) .ui-seg__pill { scale: 0.97; }

/* Underline variant: text tabs on a hairline */
.ui-seg[data-variant="underline"] { --ui-seg-px: 2px; border-radius: 0; background: none; box-shadow: inset 0 -1px 0 var(--ui-seg-line); }
.ui-seg[data-variant="underline"] .ui-seg__scroller { padding: 0; }
.ui-seg[data-variant="underline"]:not([data-full]) .ui-seg__track { gap: var(--ui-seg-gap); }
.ui-seg[data-variant="underline"][data-full] { --ui-seg-px: 10px; }
.ui-seg[data-variant="underline"] .ui-seg__opt { height: calc(var(--ui-seg-h) + 6px); border-radius: 6px; }
.ui-seg[data-variant="underline"] .ui-seg__opt:focus-visible { outline-offset: -2px; }
.ui-seg[data-variant="underline"] .ui-seg__pill { top: auto; height: 2px; border-radius: 2px 2px 0 0; background: var(--ui-seg-ink); box-shadow: none; }

@keyframes ui-seg-in { from { opacity: 0; transform: translateY(3px); filter: blur(2px); } to { opacity: 1; transform: none; filter: none; } }

/* Touch screens: every option at least 40px tall */
@media (hover: none) and (pointer: coarse) {
  .ui-seg[data-size] { --ui-seg-h: 40px; }
  .ui-seg[data-size="lg"] { --ui-seg-h: 44px; }
  .ui-seg[data-variant="underline"] .ui-seg__opt { height: var(--ui-seg-h); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-seg *, .ui-seg *::before, .ui-seg *::after { animation: none !important; transition: none !important; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-seg {
  --ui-seg-tray: #111113;
  --ui-seg-pill: #26262a;
  --ui-seg-line: #2a2a2e;
  --ui-seg-ink: #ededed;
  --ui-seg-text: #c8c8cc;
  --ui-seg-soft: #8b8b92;
  --ui-seg-muted: #8b8b92;
  --ui-seg-count: rgba(255, 255, 255, 0.08);
  --ui-seg-accent: #6d8bff;
  --ui-seg-accent-soft: rgba(109, 139, 255, 0.14);
  --ui-seg-pill-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 1px 2px rgba(0, 0, 0, 0.4);
  --ui-seg-focus: rgba(255, 255, 255, 0.3);
}
`;

export {
  i
};
