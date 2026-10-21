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

// reconstructed/demo.clean-D1uXYCFG.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function I1Component({
  options,
  value,
  defaultValue,
  onChange,
  size = `md`,
  variant = `buttons`,
  fullWidth = false,
  kind = `radio`,
  disabled = false,
  "aria-label": aria_label,
  "aria-labelledby": aria_labelledby,
  className
}) {
  let [h, setH] = n3.useState(() => defaultValue ?? options.find((e) => !e.disabled)?.value);
  let _ = value === void 0 ? h : value;
  let vRef = n3.useRef(null);
  let yRef = n3.useRef(null);
  let bRef = n3.useRef(null);
  let xRef = n3.useRef(null);
  let SRef = n3.useRef(_);
  SRef.current = _;
  let CRef = n3.useRef(false);
  let wRef = n3.useRef(0);
  let TRef = n3.useRef(void 0);
  let ERef = n3.useRef(null);
  let D = () => Array.from(bRef.current?.querySelectorAll(`:scope > .ui-segc__opt`) ?? []);
  let O = options.findIndex((e) => e.value === _);
  let k = O >= 0 ? O : options.findIndex((e) => !e.disabled);
  let A = (n4) => {
    let r2 = options.find((e) => e.value === n4);
    if (!(!r2 || r2.disabled || disabled || n4 === SRef.current)) {
      SRef.current = n4;
      if (value === void 0) {
        setH(n4);
      }
      onChange?.(n4);
    }
  };
  let j = () => {
    let e = D();
    if (!e.length || !bRef.current) {
      return;
    }
    let t = getComputedStyle(e[0]);
    let n4 = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight);
    let r2 = e.map((e2) => e2.firstElementChild.offsetWidth + n4);
    if (fullWidth) {
      bRef.current.style.setProperty(`--ui-segc-min`, `${Math.max(...r2)}px`);
      e.forEach((e2) => e2.style.width = ``);
    } else {
      e.forEach((e2, t2) => e2.style.width = `${r2[t2]}px`);
    }
  };
  let M = (e) => {
    let bRef_current = bRef.current;
    let xRef_current = xRef.current;
    if (!bRef_current || !xRef_current) {
      return;
    }
    let r2 = bRef_current.querySelector(`:scope > .ui-segc__opt[data-active]`);
    if (!r2 || !r2.offsetWidth) {
      xRef_current.style.opacity = `0`;
      return;
    }
    let r_offsetLeft = r2.offsetLeft;
    let r_offsetWidth = r2.offsetWidth;
    if (variant === `underline`) {
      let e2 = r2.firstElementChild;
      r_offsetLeft += e2.offsetLeft;
      r_offsetWidth = e2.offsetWidth;
    }
    let o = !xRef_current.dataset.ready || !e && !CRef.current;
    let s2 = parseFloat(xRef_current.style.left) || 0;
    if (!o && r_offsetLeft !== s2) {
      xRef_current.dataset.dir = r_offsetLeft > s2 ? `right` : `left`;
    }
    if (o) {
      xRef_current.style.transition = `none`;
    }
    xRef_current.style.opacity = `1`;
    xRef_current.style.left = `${r_offsetLeft}px`;
    xRef_current.style.right = `${bRef_current.clientWidth - r_offsetLeft - r_offsetWidth}px`;
    if (o) {
      xRef_current.dataset.ready = `1`;
      xRef_current.offsetWidth;
      xRef_current.style.transition = ``;
    }
  };
  let onScroll = () => {
    let yRef_current = yRef.current;
    if (!yRef_current) {
      return;
    }
    let t = yRef_current.scrollWidth - yRef_current.clientWidth;
    vRef.current?.toggleAttribute(`data-overflow`, t > 1);
    yRef_current.style.setProperty(`--ui-segc-fade-l`, yRef_current.scrollLeft > 1 ? `24px` : `0px`);
    yRef_current.style.setProperty(`--ui-segc-fade-r`, yRef_current.scrollLeft < t - 1 ? `24px` : `0px`);
  };
  let P = (e) => {
    let yRef_current = yRef.current;
    let bRef_current = bRef.current;
    let r2 = bRef_current?.querySelector(`:scope > .ui-segc__opt[data-active]`);
    if (!yRef_current || !bRef_current || !r2 || yRef_current.scrollWidth <= yRef_current.clientWidth + 1) {
      return;
    }
    let i = bRef_current.offsetLeft + r2.offsetLeft - (yRef_current.clientWidth - r2.offsetWidth) / 2;
    yRef_current.scrollTo({
      left: Math.max(0, i),
      behavior: e ? `smooth` : `auto`
    });
  };
  n3.useLayoutEffect(() => {
    let bRef_current = bRef.current;
    let yRef_current = yRef.current;
    if (!bRef_current || !yRef_current) {
      return;
    }
    let n4 = () => {
      j();
      M(false);
      onScroll();
    };
    n4();
    let r2 = requestAnimationFrame(() => vRef.current?.setAttribute(`data-ready`, ``));
    let i = 0;
    let a2 = new ResizeObserver(() => {
      cancelAnimationFrame(i);
      i = requestAnimationFrame(n4);
    });
    a2.observe(yRef_current);
    a2.observe(bRef_current);
    bRef_current.querySelectorAll(`.ui-segc__opt, .ui-segc__content`).forEach((e) => a2.observe(e));
    return () => {
      a2.disconnect();
      cancelAnimationFrame(i);
      cancelAnimationFrame(r2);
    };
  }, [options.length, fullWidth, variant, size]);
  n3.useLayoutEffect(() => {
    if (TRef.current === _) {
      return;
    }
    let e = TRef.current === void 0;
    TRef.current = _;
    if (!e) {
      CRef.current = true;
      clearTimeout(wRef.current);
      wRef.current = window.setTimeout(() => CRef.current = false, 240);
    }
    M(!e);
    P(!e);
    let bRef_current = bRef.current;
    if (!e && bRef_current && bRef_current.contains(document.activeElement)) {
      D()[O]?.focus({
        preventScroll: true
      });
    }
  }, [_]);
  n3.useEffect(() => () => clearTimeout(wRef.current), []);
  let onKeyDown = (t) => {
    let n4 = options.filter((e) => !e.disabled);
    if (!n4.length || disabled) {
      return;
    }
    let r2 = kind === `radio` ? [`ArrowLeft`, `ArrowUp`] : [`ArrowLeft`];
    let i = kind === `radio` ? [`ArrowRight`, `ArrowDown`] : [`ArrowRight`];
    let a2 = n4.findIndex((e) => e.value === SRef.current);
    let o;
    if (r2.includes(t.key)) {
      o = n4[(a2 - 1 + n4.length) % n4.length];
    } else if (i.includes(t.key)) {
      o = n4[(a2 + 1) % n4.length];
    } else if (t.key === `Home`) {
      o = n4[0];
    } else if (t.key === `End`) {
      o = n4[n4.length - 1];
    }
    if (o) {
      t.preventDefault();
      A(o.value);
      D()[options.indexOf(o)]?.focus();
    }
  };
  let I = (clientX) => {
    let n4 = -1;
    let r2 = Infinity;
    D().forEach((e, i) => {
      let a2 = e.getBoundingClientRect();
      let o = clientX < a2.left ? a2.left - clientX : clientX > a2.right ? clientX - a2.right : 0;
      if (o < r2) {
        r2 = o;
        n4 = i;
      }
    });
    return options[n4];
  };
  let L = () => {
    ERef.current = null;
    vRef.current?.removeAttribute(`data-pressed`);
  };
  let onPointerDown = (e) => {
    if (disabled || e.button !== 0) {
      return;
    }
    let t = I(e.clientX);
    if (!t || t.disabled) {
      return;
    }
    let touch = e.pointerType === `touch`;
    let drag = !touch || t.value === SRef.current;
    ERef.current = {
      id: e.pointerId,
      touch,
      drag,
      x: e.clientX,
      moved: false
    };
    if (drag) {
      vRef.current?.setAttribute(`data-pressed`, ``);
    }
    if (!touch) {
      A(t.value);
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
      }
    }
  };
  let onPointerMove = (e) => {
    let ERef_current = ERef.current;
    if (!ERef_current || ERef_current.id !== e.pointerId || !ERef_current.moved && Math.abs(e.clientX - ERef_current.x) < (ERef_current.touch ? 8 : 3) || (ERef_current.moved = true, !ERef_current.drag)) {
      return;
    }
    let n4 = I(e.clientX);
    if (n4 && !n4.disabled) {
      A(n4.value);
    }
  };
  let onPointerUp = (e) => {
    let ERef_current = ERef.current;
    if (ERef_current && ERef_current.id === e.pointerId) {
      if (ERef_current.touch && !ERef_current.moved) {
        let t = I(e.clientX);
        if (t) {
          A(t.value);
        }
      }
      L();
    }
  };
  let V = kind === `tabs`;
  return /* @__PURE__ */ jsxs("div", { ref: vRef, className: [`ui-segc`, className].filter(Boolean).join(` `), "data-size": size, "data-variant": variant, "data-full": fullWidth || void 0, "data-disabled": disabled || void 0, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-segmented-control-clean`, precedence: `default`, children: a }),
    /* @__PURE__ */ jsx("div", { ref: yRef, className: `ui-segc__scroller`, onScroll, children: /* @__PURE__ */ jsxs("div", { ref: bRef, className: `ui-segc__track`, role: V ? `tablist` : `radiogroup`, "aria-label": aria_label, "aria-labelledby": aria_labelledby, "aria-disabled": disabled || void 0, "aria-orientation": V ? `horizontal` : void 0, onKeyDown, onPointerDown, onPointerMove, onPointerUp, onPointerCancel: L, onLostPointerCapture: L, children: [
      /* @__PURE__ */ jsx("span", { ref: xRef, className: `ui-segc__pill`, "aria-hidden": `true` }),
      options.map((e, t) => {
        let n4 = t === O;
        return /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-segc__opt`, role: V ? `tab` : `radio`, "aria-checked": V ? void 0 : n4, "aria-selected": V ? n4 : void 0, "aria-controls": V ? e.controls : void 0, "aria-label": e.ariaLabel, "data-active": n4 || void 0, disabled: e.disabled || disabled, tabIndex: t === k ? 0 : -1, onClick: () => A(e.value), children: /* @__PURE__ */ jsxs("span", { className: `ui-segc__content`, children: [
          e.icon && /* @__PURE__ */ jsx("span", { className: `ui-segc__icon`, children: e.icon }),
          e.label != null && /* @__PURE__ */ jsx("span", { className: `ui-segc__label`, children: e.label }),
          e.count != null && /* @__PURE__ */ jsx("span", { className: `ui-segc__count`, children: e.count }, String(e.count)),
          e.badge != null && /* @__PURE__ */ jsx("span", { className: `ui-segc__badge`, children: e.badge })
        ] }) }, e.value);
      })
    ] }) })
  ] });
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
var O1Component = ({
  d
}) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.6`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d }) });
var s = [{
  value: `overview`,
  label: `Overview`
}, {
  value: `analytics`,
  label: `Analytics`
}, {
  value: `reports`,
  label: `Reports`
}, {
  value: `notifications`,
  label: `Notifications`,
  count: 3
}];
var c = [{
  value: `list`,
  label: `List`,
  icon: /* @__PURE__ */ jsx(O1Component, { d: `M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01` })
}, {
  value: `board`,
  label: `Board`,
  icon: /* @__PURE__ */ jsx(O1Component, { d: `M5 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM15 4h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z` })
}, {
  value: `calendar`,
  label: `Calendar`,
  icon: /* @__PURE__ */ jsx(O1Component, { d: `M8 3v3M16 3v3M4 9.5h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z` })
}];
var l = [{
  value: `monthly`,
  label: `Monthly`
}, {
  value: `yearly`,
  label: `Yearly`,
  badge: `Save 20%`
}];
var u = [`analytics`, `reports`, `notifications`, `overview`];
function DComponent() {
  let [e, setE] = n3.useState(`overview`);
  let [a2, setA] = n3.useState(`board`);
  let [d, setD] = n3.useState(`yearly`);
  let pRef = n3.useRef([]);
  let m = n3.useId();
  let h = () => {
    pRef.current.forEach(clearTimeout);
    pRef.current = [];
  };
  n3.useEffect(() => {
    pRef.current = u.map((e2, n4) => window.setTimeout(() => setE(e2), 1e3 + n4 * 1400));
    return h;
  }, []);
  return /* @__PURE__ */ jsx("div", { className: `seg-demo seg-demo--clean`, onPointerDownCapture: h, onKeyDownCapture: h, children: /* @__PURE__ */ jsxs("div", { className: `seg-demo__card`, children: [
    /* @__PURE__ */ jsxs("div", { className: `seg-demo__row`, children: [
      /* @__PURE__ */ jsx("span", { className: `seg-demo__label`, id: `${m}-section`, children: `Dashboard` }),
      /* @__PURE__ */ jsx(I1Component, { options: s, value: e, onChange: setE, "aria-labelledby": `${m}-section` })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `seg-demo__row`, children: [
      /* @__PURE__ */ jsx("span", { className: `seg-demo__label`, id: `${m}-view`, children: `Layout` }),
      /* @__PURE__ */ jsx(I1Component, { options: c, value: a2, onChange: setA, size: `sm`, variant: `tray`, "aria-labelledby": `${m}-view` })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `seg-demo__row`, children: [
      /* @__PURE__ */ jsx("span", { className: `seg-demo__label`, id: `${m}-billing`, children: `Billing` }),
      /* @__PURE__ */ jsx(I1Component, { options: l, value: d, onChange: setD, variant: `underline`, "aria-labelledby": `${m}-billing` })
    ] })
  ] }) });
}
export {
  DComponent as default
};
