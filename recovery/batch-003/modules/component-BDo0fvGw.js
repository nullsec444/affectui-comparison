import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
function IComponent({ options, value, defaultValue, onChange, size = `md`, variant = `tray`, fullWidth = false, kind = `radio`, disabled = false, "aria-label": aria_label, "aria-labelledby": aria_labelledby, className }) {
    let [h, setH] = n.useState(()=>defaultValue ?? options.find((e)=>!e.disabled)?.value);
    let _ = value === undefined ? h : value;
    let vRef = n.useRef(null);
    let yRef = n.useRef(null);
    let bRef = n.useRef(null);
    let xRef = n.useRef(null);
    let SRef = n.useRef(_);
    SRef.current = _;
    let CRef = n.useRef(false);
    let wRef = n.useRef(0);
    let TRef = n.useRef(undefined);
    let ERef = n.useRef(null);
    let D = ()=>Array.from(bRef.current?.querySelectorAll(`:scope > .ui-seg__opt`) ?? []);
    let O = options.findIndex((e)=>e.value === _);
    let k = O >= 0 ? O : options.findIndex((e)=>!e.disabled);
    let A = (n)=>{
        let r = options.find((e)=>e.value === n);
        if (!(!r || r.disabled || disabled || n === SRef.current)) {
            SRef.current = n;
            if (value === undefined) {
                setH(n);
            }
            onChange?.(n);
        }
    };
    let j = ()=>{
        let e = D();
        if (!e.length || !bRef.current) {
            return;
        }
        let t = getComputedStyle(e[0]);
        let n = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight);
        let r = e.map((e)=>e.firstElementChild.offsetWidth + n);
        if (fullWidth) {
            bRef.current.style.setProperty(`--ui-seg-min`, `${Math.max(...r)}px`);
            e.forEach((e)=>e.style.width = ``);
        } else {
            e.forEach((e, t)=>e.style.width = `${r[t]}px`);
        }
    };
    let M = (e)=>{
        let bRef_current = bRef.current;
        let xRef_current = xRef.current;
        if (!bRef_current || !xRef_current) {
            return;
        }
        let r = bRef_current.querySelector(`:scope > .ui-seg__opt[data-active]`);
        if (!r || !r.offsetWidth) {
            xRef_current.style.opacity = `0`;
            return;
        }
        let r_offsetLeft = r.offsetLeft;
        let r_offsetWidth = r.offsetWidth;
        if (variant === `underline`) {
            let e = r.firstElementChild;
            r_offsetLeft += e.offsetLeft;
            r_offsetWidth = e.offsetWidth;
        }
        let o = !xRef_current.dataset.ready || !e && !CRef.current;
        let s = parseFloat(xRef_current.style.left) || 0;
        if (!o && r_offsetLeft !== s) {
            xRef_current.dataset.dir = r_offsetLeft > s ? `right` : `left`;
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
    let onScroll = ()=>{
        let yRef_current = yRef.current;
        if (!yRef_current) {
            return;
        }
        let t = yRef_current.scrollWidth - yRef_current.clientWidth;
        vRef.current?.toggleAttribute(`data-overflow`, t > 1);
        yRef_current.style.setProperty(`--ui-seg-fade-l`, yRef_current.scrollLeft > 1 ? `24px` : `0px`);
        yRef_current.style.setProperty(`--ui-seg-fade-r`, yRef_current.scrollLeft < t - 1 ? `24px` : `0px`);
    };
    let P = (e)=>{
        let yRef_current = yRef.current;
        let bRef_current = bRef.current;
        let r = bRef_current?.querySelector(`:scope > .ui-seg__opt[data-active]`);
        if (!yRef_current || !bRef_current || !r || yRef_current.scrollWidth <= yRef_current.clientWidth + 1) {
            return;
        }
        let i = bRef_current.offsetLeft + r.offsetLeft - (yRef_current.clientWidth - r.offsetWidth) / 2;
        yRef_current.scrollTo({
            left: Math.max(0, i),
            behavior: e ? `smooth` : `auto`
        });
    };
    n.useLayoutEffect(()=>{
        let bRef_current = bRef.current;
        let yRef_current = yRef.current;
        if (!bRef_current || !yRef_current) {
            return;
        }
        let n = ()=>{
            j();
            M(false);
            onScroll();
        };
        n();
        let r = requestAnimationFrame(()=>vRef.current?.setAttribute(`data-ready`, ``));
        let i = 0;
        let a = new ResizeObserver(()=>{
            cancelAnimationFrame(i);
            i = requestAnimationFrame(n);
        });
        a.observe(yRef_current);
        a.observe(bRef_current);
        bRef_current.querySelectorAll(`.ui-seg__opt, .ui-seg__content`).forEach((e)=>a.observe(e));
        return ()=>{
            a.disconnect();
            cancelAnimationFrame(i);
            cancelAnimationFrame(r);
        };
    }, [
        options.length,
        fullWidth,
        variant,
        size
    ]);
    n.useLayoutEffect(()=>{
        if (TRef.current === _) {
            return;
        }
        let e = TRef.current === undefined;
        TRef.current = _;
        if (!e) {
            CRef.current = true;
            clearTimeout(wRef.current);
            wRef.current = window.setTimeout(()=>CRef.current = false, 440);
        }
        M(!e);
        P(!e);
        let bRef_current = bRef.current;
        if (!e && bRef_current && bRef_current.contains(document.activeElement)) {
            D()[O]?.focus({
                preventScroll: true
            });
        }
    }, [
        _
    ]);
    n.useEffect(()=>()=>clearTimeout(wRef.current), []);
    let onKeyDown = (t)=>{
        let n = options.filter((e)=>!e.disabled);
        if (!n.length || disabled) {
            return;
        }
        let r = kind === `radio` ? [
            `ArrowLeft`,
            `ArrowUp`
        ] : [
            `ArrowLeft`
        ];
        let i = kind === `radio` ? [
            `ArrowRight`,
            `ArrowDown`
        ] : [
            `ArrowRight`
        ];
        let a = n.findIndex((e)=>e.value === SRef.current);
        let o;
        if (r.includes(t.key)) {
            o = n[(a - 1 + n.length) % n.length];
        } else if (i.includes(t.key)) {
            o = n[(a + 1) % n.length];
        } else if (t.key === `Home`) {
            o = n[0];
        } else if (t.key === `End`) {
            o = n[n.length - 1];
        }
        if (o) {
            t.preventDefault();
            A(o.value);
            D()[options.indexOf(o)]?.focus();
        }
    };
    let I = (clientX)=>{
        let n = -1;
        let r = Infinity;
        D().forEach((e, i)=>{
            let a = e.getBoundingClientRect();
            let o = clientX < a.left ? a.left - clientX : clientX > a.right ? clientX - a.right : 0;
            if (o < r) {
                r = o;
                n = i;
            }
        });
        return options[n];
    };
    let L = ()=>{
        ERef.current = null;
        vRef.current?.removeAttribute(`data-pressed`);
    };
    let onPointerDown = (e)=>{
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
            } catch  {}
        }
    };
    let onPointerMove = (e)=>{
        let ERef_current = ERef.current;
        if (!ERef_current || ERef_current.id !== e.pointerId || !ERef_current.moved && Math.abs(e.clientX - ERef_current.x) < (ERef_current.touch ? 8 : 3) || (ERef_current.moved = true, !ERef_current.drag)) {
            return;
        }
        let n = I(e.clientX);
        if (n && !n.disabled) {
            A(n.value);
        }
    };
    let onPointerUp = (e)=>{
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
    return <div ref={vRef} className={[
        `ui-seg`,
        className
    ].filter(Boolean).join(` `)} data-size={size} data-variant={variant} data-full={fullWidth || undefined} data-disabled={disabled || undefined}><style href={`ui-segmented-control`} precedence={`default`}>{a}</style><div ref={yRef} className={`ui-seg__scroller`} onScroll={onScroll}><div ref={bRef} className={`ui-seg__track`} role={V ? `tablist` : `radiogroup`} aria-label={aria_label} aria-labelledby={aria_labelledby} aria-disabled={disabled || undefined} aria-orientation={V ? `horizontal` : undefined} onKeyDown={onKeyDown} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={L} onLostPointerCapture={L}><span ref={xRef} className={`ui-seg__pill`} aria-hidden={`true`}/>{options.map((e, t)=>{
        let n = t === O;
        return <button key={e.value} type={`button`} className={`ui-seg__opt`} role={V ? `tab` : `radio`} aria-checked={V ? undefined : n} aria-selected={V ? n : undefined} aria-controls={V ? e.controls : undefined} aria-label={e.ariaLabel} data-active={n || undefined} disabled={e.disabled || disabled} tabIndex={t === k ? 0 : -1} onClick={()=>A(e.value)}><span className={`ui-seg__content`}>{e.icon && <span className={`ui-seg__icon`}>{e.icon}</span>}{e.label != null && <span className={`ui-seg__label`}><span className={`ui-seg__text`}>{e.label}</span><span className={`ui-seg__text ui-seg__text-bold`} aria-hidden={`true`}>{e.label}</span></span>}{e.count != null && <span key={String(e.count)} className={`ui-seg__count`}>{e.count}</span>}{e.badge != null && <span className={`ui-seg__badge`}>{e.badge}</span>}</span></button>;
    })}</div></div></div>;
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

/* The indicator: left and right edges glide separately – the one facing the target leads, so it stretches and settles */
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
export { IComponent as t };
