import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
function IComponent({ variant = `primary`, size = `md`, loading = false, icon, iconRight, children, className, disabled, onClick, type = `button`, ref, ...rest }) {
    let _ = typeof children == `string` ? children : undefined;
    let v = !children && !!(icon || iconRight);
    let yRef = n.useRef(null);
    let bRef = n.useRef(0);
    let [x, setX] = n.useState(false);
    n.useEffect(()=>setX(true), []);
    let C = _ ?? `label`;
    let w = loading && icon ? `spinner` : c(icon);
    let T = c(iconRight);
    let E = `${C}|${w}|${T}`;
    let DRef = n.useRef(E);
    n.useLayoutEffect(()=>{
        let yRef_current = yRef.current;
        if (!yRef_current) {
            return;
        }
        let width = yRef_current.getBoundingClientRect().width;
        let bRef_current = bRef.current;
        let r = DRef.current !== E;
        bRef.current = width;
        DRef.current = E;
        if (!(!r || !bRef_current || Math.abs(bRef_current - width) < 0.5)) {
            if (!window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
                yRef_current.animate([
                    {
                        width: `${bRef_current}px`
                    },
                    {
                        width: `${width}px`
                    }
                ], {
                    duration: 480,
                    easing: `cubic-bezier(0.25, 1, 0.5, 1)`
                });
            }
        }
    });
    return <><style href={`ui-button-clean`} precedence={`default`}>{l}</style><button type={type} className={[
        `ui-buttonc`,
        className
    ].filter(Boolean).join(` `)} data-variant={variant} data-size={size} data-loading={loading || undefined} data-icon-only={v || undefined} data-icon-left={!v && !!icon || undefined} data-icon-right={!v && !!iconRight || undefined} data-ready={x || undefined} ref={(e)=>{
        yRef.current = e;
        if (typeof ref == `function`) {
            ref(e);
        } else if (ref) {
            ref.current = e;
        }
    }} disabled={disabled} aria-busy={loading || undefined} aria-disabled={loading || undefined} onClick={(e)=>{
        if (loading) {
            e.preventDefault();
            return;
        }
        onClick?.(e);
    }} {...rest}>{icon && <span key={`icon-${w}`} className={`ui-buttonc__icon`} aria-hidden={`true`}>{loading ? <AComponent/> : icon}</span>}{children != null && <span key={`label-${C}`} className={`ui-buttonc__label`} data-text={_}>{children}</span>}{iconRight && <span key={`icon-right-${T}`} className={`ui-buttonc__icon`} aria-hidden={`true`}>{iconRight}</span>}</button></>;
}
var AComponent = ()=><svg className={`ui-buttonc__spinner`} viewBox={`0 0 24 24`} fill={`none`} stroke={`currentColor`} strokeWidth={2} strokeLinecap={`round`}><circle cx={`12`} cy={`12`} r={`8.5`} opacity={0.2}/><path d={`M12 3.5a8.5 8.5 0 0 1 8.5 8.5`}/></svg>;
const o = new WeakMap;
let s = 1;
function c(e) {
    if (!n.isValidElement(e) || typeof e.type == `string`) {
        return 0;
    }
    let e_type = e.type;
    if (!o.has(e_type)) {
        o.set(e_type, s++);
    }
    return o.get(e_type);
}
var l = `
/* Colors and motion as variables – override them on .ui-buttonc (see Theming in the docs) */
.ui-buttonc {
  --ui-btnc-title: #000;
  --ui-btnc-ink: rgba(0, 0, 0, 0.88);
  --ui-btnc-muted: rgba(0, 0, 0, 0.61);
  --ui-btnc-icon: rgba(0, 0, 0, 0.447);
  --ui-btnc-solid: rgba(0, 0, 0, 0.88);
  --ui-btnc-solid-hover: rgba(0, 0, 0, 0.8);
  --ui-btnc-on-solid: #fcfcfc;
  --ui-btnc-surface: #ffffff;
  --ui-btnc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-btnc-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.07);
  --ui-btnc-wash: rgba(0, 0, 0, 0.03);
  --ui-btnc-danger: #e5484d;
  --ui-btnc-danger-bg: rgba(229, 72, 77, 0.08);
  --ui-btnc-danger-bg-hover: rgba(229, 72, 77, 0.12);
  --ui-btnc-shine: rgba(255, 255, 255, 0.82);
  --ui-btnc-shine-on-solid: #ffffff;
  --ui-btnc-focus: rgba(0, 96, 226, 0.35);
  --ui-btnc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ui-btnc-load: 650ms;

  --h: 28px;
  --px: 10px;
  --gap: 6px;
  --fs: 13px;
  --lh: 20px;
  --icon: 16px;
  --radius: 6px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap);
  box-sizing: border-box;
  height: var(--h);
  padding: 0 var(--px);
  margin: 0;
  border: 0;
  border-radius: var(--radius);
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: var(--fs);
  font-weight: 500;
  line-height: var(--lh);
  letter-spacing: 0;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  transition:
    background-color 140ms ease,
    color 140ms ease,
    box-shadow 140ms ease,
    transform 160ms var(--ui-btnc-ease),
    opacity 140ms ease;
}

/* Sizes: 24 · 28 · 32 high */
.ui-buttonc[data-size="sm"] {
  --h: 24px;
  --px: 8px;
  --gap: 4px;
  --fs: 12px;
  --lh: 16px;
  --icon: 14px;
  --radius: 6px;
}
.ui-buttonc[data-size="lg"] {
  --h: 32px;
  --px: 12px;
  --gap: 6px;
  --fs: 13px;
  --icon: 16px;
  --radius: 6px;
}
/* An icon sits closer to the edge than the text, so both look evenly spaced */
.ui-buttonc[data-icon-left] {
  padding-left: calc(var(--px) - 2px);
}
.ui-buttonc[data-icon-right] {
  padding-right: calc(var(--px) - 2px);
}
.ui-buttonc[data-icon-only] {
  width: var(--h);
  padding: 0;
}

/* primary: a dark chip */
.ui-buttonc[data-variant="primary"] {
  background: var(--ui-btnc-solid);
  color: var(--ui-btnc-on-solid);
}
.ui-buttonc[data-variant="primary"]:hover:not(:disabled) {
  background: var(--ui-btnc-solid-hover);
}

/* secondary: white with the card's hairline shadow */
.ui-buttonc[data-variant="secondary"] {
  background: var(--ui-btnc-surface);
  color: var(--ui-btnc-title);
  box-shadow: var(--ui-btnc-shadow);
}
.ui-buttonc[data-variant="secondary"] .ui-buttonc__icon {
  color: var(--ui-btnc-icon);
}
.ui-buttonc[data-variant="secondary"]:hover:not(:disabled) {
  box-shadow: var(--ui-btnc-shadow-hover);
}

/* ghost: a muted label, a soft wash appears on hover */
.ui-buttonc[data-variant="ghost"] {
  background: transparent;
  color: var(--ui-btnc-muted);
}
.ui-buttonc[data-variant="ghost"] .ui-buttonc__icon {
  color: var(--ui-btnc-icon);
}
.ui-buttonc[data-variant="ghost"]:hover:not(:disabled) {
  background: var(--ui-btnc-wash);
  color: var(--ui-btnc-ink);
}
.ui-buttonc[data-variant="ghost"]:hover:not(:disabled) .ui-buttonc__icon {
  color: var(--ui-btnc-ink);
}

/* destructive: red label on a minimal red fill, no stroke */
.ui-buttonc[data-variant="destructive"] {
  background: var(--ui-btnc-danger-bg);
  color: var(--ui-btnc-danger);
}
.ui-buttonc[data-variant="destructive"]:hover:not(:disabled) {
  background: var(--ui-btnc-danger-bg-hover);
}

.ui-buttonc .ui-buttonc__icon {
  transition: color 140ms ease;
}
.ui-buttonc:active:not(:disabled):not([data-loading]) {
  transform: scale(0.97);
}
.ui-buttonc:focus-visible {
  outline: 2px solid var(--ui-btnc-focus);
  outline-offset: 1px;
}
.ui-buttonc:disabled {
  opacity: 0.4;
  cursor: default;
}
.ui-buttonc[data-loading] {
  cursor: default;
}

.ui-buttonc__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: var(--icon);
  height: var(--icon);
}
.ui-buttonc__icon > svg {
  width: 100%;
  height: 100%;
}

/* Morph: the button clips while its width glides; changed parts blur in */
.ui-buttonc {
  overflow: clip;
}
.ui-buttonc[data-ready] .ui-buttonc__label {
  animation: ui-buttonc-label-in 480ms cubic-bezier(0.25, 1, 0.5, 1) both;
}
.ui-buttonc[data-ready] .ui-buttonc__icon {
  animation: ui-buttonc-icon-in 520ms cubic-bezier(0.25, 1, 0.5, 1) both;
}

/* Loading: a light band sweeps across a copy of the dimmed label */
.ui-buttonc__label {
  position: relative;
}
.ui-buttonc__label::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  position: absolute;
  inset: 0;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(90deg, transparent 38%, var(--ui-btnc-shine) 50%, transparent 62%) 100% 0 / 300% 100%
    no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  opacity: 0;
  pointer-events: none;
}
.ui-buttonc[data-variant="primary"] .ui-buttonc__label::after {
  --ui-btnc-shine: var(--ui-btnc-shine-on-solid);
}
.ui-buttonc[data-loading] .ui-buttonc__label {
  color: color-mix(in srgb, currentColor 50%, transparent);
}
.ui-buttonc[data-loading] .ui-buttonc__label::after {
  opacity: 1;
  animation: ui-buttonc-sweep calc(var(--ui-btnc-load) * 1.6) linear infinite;
}
.ui-buttonc__spinner {
  animation: ui-buttonc-spin 900ms linear infinite;
}

@keyframes ui-buttonc-label-in {
  from {
    opacity: 0;
    filter: blur(3px);
    transform: translateY(25%);
  }
}
@keyframes ui-buttonc-icon-in {
  from {
    opacity: 0;
    filter: blur(2px);
    transform: scale(0.7);
  }
}

@keyframes ui-buttonc-spin {
  to {
    transform: rotate(1turn);
  }
}

@keyframes ui-buttonc-sweep {
  from {
    background-position: 100% 0;
  }
  to {
    background-position: 0% 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ui-buttonc[data-ready] .ui-buttonc__label,
  .ui-buttonc[data-ready] .ui-buttonc__icon {
    animation: none;
  }
  .ui-buttonc {
    transition-duration: 1ms;
  }
  .ui-buttonc[data-loading] .ui-buttonc__label::after {
    animation: none;
    opacity: 0;
  }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-buttonc {
  /* primary inverts: a light chip with dark text */
  --ui-btnc-solid: rgba(255, 255, 255, 0.9);
  --ui-btnc-solid-hover: rgba(255, 255, 255, 0.82);
  --ui-btnc-on-solid: #161618;
  --ui-btnc-shine-on-solid: #ffffff;

  --ui-btnc-title: rgba(255, 255, 255, 0.9);
  --ui-btnc-ink: rgba(255, 255, 255, 0.9);
  --ui-btnc-muted: rgba(255, 255, 255, 0.62);
  --ui-btnc-icon: rgba(255, 255, 255, 0.5);
  --ui-btnc-surface: #1c1c1e;
  --ui-btnc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-btnc-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-btnc-wash: rgba(255, 255, 255, 0.06);
  --ui-btnc-danger: #ff6369;
  --ui-btnc-danger-bg: rgba(229, 72, 77, 0.14);
  --ui-btnc-danger-bg-hover: rgba(229, 72, 77, 0.2);
  --ui-btnc-shine: #ffffff;
  --ui-btnc-focus: rgba(77, 141, 255, 0.5);
}
`;
const u = {
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 1.6,
    strokeLinecap: `round`,
    strokeLinejoin: `round`
};
const D1Component = ()=><svg viewBox={`0 0 24 24`} {...u}><path d={`M12 5.5V19`}/><path d={`M18 11s-4.42-6-6-6-6 6-6 6`}/></svg>;
const FComponent = ()=><svg viewBox={`0 0 24 24`} {...u}><path d={`M18.5 12H5`}/><path d={`M13 18s6-4.42 6-6-6-6-6-6`}/></svg>;
const PComponent = ()=><svg viewBox={`0 0 24 24`} {...u}><path d={`M12 4v16M20 12H4`}/></svg>;
const MComponent = ()=><svg viewBox={`0 0 24 24`} {...u} strokeWidth={2.5}><path d={`M6 12h.01M12 12h.01M18 12h.01`}/></svg>;
const HComponent = ()=><svg viewBox={`0 0 24 24`} {...u}><path d={`M7.5 14.5c0-3.3 0-4.95 1.03-5.97C9.55 7.5 11.2 7.5 14.5 7.5s4.95 0 5.97 1.03c1.03 1.02 1.03 2.67 1.03 5.97s0 4.95-1.03 5.97c-1.02 1.03-2.67 1.03-5.97 1.03s-4.95 0-5.97-1.03C7.5 19.45 7.5 17.8 7.5 14.5Z`}/><path d={`M7.5 16.5c-1.4 0-2.1 0-2.66-.2a3 3 0 0 1-2.14-2.14c-.2-.57-.2-1.27-.2-2.66v-2c0-3.3 0-4.95 1.03-5.97C4.55 2.5 6.2 2.5 9.5 2.5h2c1.4 0 2.1 0 2.66.2a3 3 0 0 1 2.14 2.14c.2.57.2 1.27.2 2.66`}/></svg>;
const GComponent = ()=><svg viewBox={`0 0 24 24`} {...u}><path d={`M16.5 7.5S13.19 3 12 3 7.5 7.5 7.5 7.5M12 4v11`}/><path d={`M3 16.5v1.5A3 3 0 0 0 6 21h12a3 3 0 0 0 3-3v-1.5`}/></svg>;
const Component = ()=><svg viewBox={`0 0 24 24`} {...u}><path d={`m19.5 5.5-.62 10.03c-.16 2.56-.24 3.84-.88 4.76a4 4 0 0 1-1.2 1.13C15.84 22 14.56 22 12 22s-3.86 0-4.82-.59a4 4 0 0 1-1.2-1.13c-.64-.92-.72-2.2-.88-4.76L4.5 5.5`}/><path d={`M3 5.5h18M16.06 5.5l-.69-1.41c-.45-.94-.68-1.4-1.07-1.7a2 2 0 0 0-.27-.17C13.6 2 13.07 2 12.03 2c-1.06 0-1.6 0-2.04.23a2 2 0 0 0-.27.18c-.4.3-.62.79-1.06 1.76L8.05 5.5M9.5 16.5v-6M14.5 16.5v-6`}/></svg>;
const VComponent = ()=><svg viewBox={`0 0 24 24`} {...u}><path d={`M5 14l3.5 3.5L19 6.5`}/></svg>;
function useY(e = 1600) {
    let [t, setT] = n.useState(false);
    let iRef = n.useRef(undefined);
    n.useEffect(()=>()=>clearTimeout(iRef.current), []);
    return [
        t,
        ()=>{
            clearTimeout(iRef.current);
            setT(true);
            iRef.current = window.setTimeout(()=>setT(false), e);
        }
    ];
}
function BComponent({ children }) {
    let tRef = n.useRef(null);
    let [i, setI] = n.useState(0);
    n.useLayoutEffect(()=>{
        let e = tRef.current?.firstElementChild;
        if (!e) {
            return;
        }
        let width = e.getBoundingClientRect().width;
        if (width > i) {
            setI(width);
        }
    });
    return <span ref={tRef} className={`button-demo__slot`} style={{
        minWidth: i || undefined
    }}>{children}</span>;
}
function XComponent() {
    let [e, setE] = n.useState(`idle`);
    n.useEffect(()=>{
        if (e !== `loading`) {
            return;
        }
        let n = window.setTimeout(()=>setE(`done`), 1600);
        return ()=>clearTimeout(n);
    }, [
        e
    ]);
    return <div className={`button-demo__row button-demo__compact`}><BComponent><IComponent variant={`ghost`} onClick={()=>setE(`idle`)}>{`Cancel`}</IComponent></BComponent><BComponent><IComponent variant={`secondary`} icon={e === `done` ? <VComponent/> : <GComponent/>} loading={e === `loading`} onClick={()=>setE((e)=>{
            if (e === `idle`) {
                return `loading`;
            }
            return e;
        })}>{e === `done` ? `Done` : `Upload`}</IComponent></BComponent><BComponent><IComponent iconRight=<D1Component/>>{`Send`}</IComponent></BComponent></div>;
}
function SComponent() {
    let [e, t] = useY();
    let [a, o] = useY();
    let [s, setS] = n.useState(`idle`);
    n.useEffect(()=>{
        if (s !== `loading`) {
            return;
        }
        let e = window.setTimeout(()=>setS(`done`), 1800);
        return ()=>clearTimeout(e);
    }, [
        s
    ]);
    return <div className={`button-demo__showcase`}><section><h4>{`Styles`}</h4><div className={`button-demo__row`}><BComponent><IComponent>{`Save changes`}</IComponent></BComponent><BComponent><IComponent variant={`secondary`}>{`Secondary`}</IComponent></BComponent><BComponent><IComponent variant={`ghost`}>{`Ghost`}</IComponent></BComponent><BComponent><IComponent variant={`destructive`} icon=<Component/>>{`Delete`}</IComponent></BComponent></div></section><section><h4>{`Icons and sizes`}</h4><div className={`button-demo__row`}><BComponent><IComponent variant={`secondary`} size={`sm`} icon=<PComponent/>>{`Add item`}</IComponent></BComponent><BComponent><IComponent iconRight=<FComponent/>>{`Continue`}</IComponent></BComponent><BComponent><IComponent variant={`ghost`} icon=<MComponent/> aria-label={`More options`}/></BComponent><BComponent><IComponent variant={`secondary`} size={`lg`}>{`Large`}</IComponent></BComponent></div></section><section><h4>{`Feedback and states`}</h4><div className={`button-demo__row`}><BComponent><IComponent variant={`secondary`} icon={e ? <VComponent/> : <HComponent/>} onClick={t}>{e ? `Copied` : `Copy link`}</IComponent></BComponent><BComponent><IComponent variant={`secondary`} icon={a ? <VComponent/> : <HComponent/>} aria-label={a ? `Copied` : `Copy`} onClick={o}/></BComponent><BComponent><IComponent variant={`secondary`} icon={s === `done` ? <VComponent/> : <GComponent/>} loading={s === `loading`} onClick={()=>setS((e)=>{
            if (e === `loading`) {
                return e;
            }
            return `loading`;
        })}>{`Upload file`}</IComponent></BComponent><BComponent><IComponent variant={`secondary`} disabled>{`Disabled`}</IComponent></BComponent></div><p className={`button-demo__status`} aria-live={`polite`}>{s === `loading` ? `Uploading…` : s === `done` ? `Upload complete` : ` `}</p></section></div>;
}
function CComponent() {
    return <div className={`button-demo`}><XComponent/><SComponent/></div>;
}
export { CComponent as default };
