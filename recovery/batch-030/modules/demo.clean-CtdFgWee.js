import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
let i = [];
const a = new Set;
const o = [];
let s = 0;
const c = (e)=>{
    i = e;
    a.forEach((e)=>e());
};
const l = (e)=>{
    a.add(e);
    return ()=>{
        a.delete(e);
    };
};
const u = ()=>i;
const d = ()=>o;
function f(type, title, { id, ...rest } = {}, r = false) {
    let l = id === undefined ? undefined : i.find((e)=>e.id === id && !e.removing);
    if (l) {
        c(i.map((n)=>{
            if (n === l) {
                return {
                    ...n,
                    ...rest,
                    type,
                    title,
                    version: n.version + 1
                };
            }
            return n;
        }));
        return l.id;
    }
    let u = id ?? `toast-${++s}`;
    if (!r) {
        c([
            ...i.filter((e)=>e.id !== u),
            {
                ...rest,
                id: u,
                type,
                title,
                version: 0
            }
        ]);
    }
    return u;
}
const p = 420;
function dismiss(e) {
    let t = i.filter((t)=>!t.removing && (e === undefined || t.id === e));
    if (t.length) {
        c(i.map((e)=>{
            if (t.includes(e)) {
                return {
                    ...e,
                    removing: true
                };
            }
            return e;
        }));
        t.forEach((e)=>e.onDismiss?.(e.id));
        window.setTimeout(()=>c(i.filter((e)=>!(e.removing && t.some((t)=>t.id === e.id)))), p);
    }
}
const h = (title)=>typeof title == `object` && !!title && !n.isValidElement(title) && !Array.isArray(title) && `title` in title;
const g = (title)=>{
    if (h(title)) {
        return title;
    }
    return {
        title,
        description: undefined
    };
};
function promise(e, t, n = {}) {
    let r = typeof e == `function` ? e() : e;
    let i = g(t.loading);
    let id = f(`loading`, i.title, {
        ...n,
        description: i.description
    });
    let o = (e, t)=>{
        let r = g(t);
        f(e, r.title, {
            ...n,
            id,
            description: r.description
        }, true);
    };
    r.then((e)=>o(`success`, typeof t.success == `function` ? t.success(e) : t.success), (e)=>o(`error`, typeof t.error == `function` ? t.error(e) : t.error));
    return r;
}
const v = Object.assign((e, t)=>f(`default`, e, t), {
    success: (e, t)=>f(`success`, e, t),
    error: (e, t)=>f(`error`, e, t),
    info: (e, t)=>f(`info`, e, t),
    loading: (e, t)=>f(`loading`, e, t),
    promise,
    dismiss
});
function Y1Component() {
    return <svg viewBox={`0 0 24 24`} className={`ui-tsc__status`} aria-hidden={`true`}><g className={`ui-tsc__spin`}><circle className={`ui-tsc__ring`} cx={`12`} cy={`12`} r={`9.25`} pathLength={1}/></g><path className={`ui-tsc__mark ui-tsc__check`} d={`M8.3 12.4l2.5 2.5 4.9-5.3`} pathLength={1}/><path className={`ui-tsc__mark ui-tsc__x1`} d={`M9.5 9.5l5 5`} pathLength={1}/><path className={`ui-tsc__mark ui-tsc__x2`} d={`M14.5 9.5l-5 5`} pathLength={1}/><path className={`ui-tsc__info`} d={`M12 11.2v4.6M12 8.2h.01`}/></svg>;
}
const B1Component = ()=><svg viewBox={`0 0 24 24`} className={`ui-tsc__glyph`} aria-hidden={`true`}><path d={`M7.5 7.5l9 9M16.5 7.5l-9 9`}/></svg>;
const x = (e)=>String(e.id);
function SComponent({ t: t_1, layout, edge, paused, defaultDuration, hairline, closeButton, onHeight }) {
    let [u, setU] = n.useState(false);
    let [f, setF] = n.useState(false);
    let [h, setH] = n.useState(null);
    let ref = n.useRef(null);
    let vRef = n.useRef(null);
    let SRef = n.useRef({
        title: t_1.title,
        description: t_1.description,
        version: t_1.version
    });
    let CRef = n.useRef(0);
    let wRef = n.useRef({
        version: -1,
        left: 0
    });
    let TRef = n.useRef(null);
    let ERef = n.useRef(false);
    let D = !!t_1.removing;
    n.useEffect(()=>{
        let e = requestAnimationFrame(()=>requestAnimationFrame(()=>setU(true)));
        return ()=>cancelAnimationFrame(e);
    }, []);
    n.useLayoutEffect(()=>{
        let _Ref_current = ref.current;
        if (!_Ref_current) {
            return;
        }
        let n = x(t_1);
        let r = ()=>onHeight(n, _Ref_current.offsetHeight);
        r();
        let i = new ResizeObserver(r);
        i.observe(_Ref_current);
        return ()=>i.disconnect();
    }, []);
    n.useLayoutEffect(()=>{
        let SRef_current = SRef.current;
        if (SRef_current.version !== t_1.version) {
            SRef.current = {
                title: t_1.title,
                description: t_1.description,
                version: t_1.version
            };
            if (SRef_current.title !== t_1.title || SRef_current.description !== t_1.description) {
                setH(SRef_current);
                window.clearTimeout(CRef.current);
                CRef.current = window.setTimeout(()=>setH(null), 320);
            }
        }
    }, [
        t_1.version
    ]);
    n.useEffect(()=>()=>window.clearTimeout(CRef.current), []);
    let left = t_1.duration ?? defaultDuration;
    let k = t_1.type !== `loading` && Number.isFinite(left);
    let A = k && !paused && !f && !D;
    n.useEffect(()=>{
        if (wRef.current.version !== t_1.version) {
            wRef.current = {
                version: t_1.version,
                left
            };
        }
        if (!A) {
            return;
        }
        let t_1_version = t_1.version;
        let n = Date.now();
        let r = window.setTimeout(()=>dismiss(t_1.id), Math.max(0, wRef.current.left));
        return ()=>{
            window.clearTimeout(r);
            if (wRef.current.version === t_1_version) {
                wRef.current.left -= Date.now() - n;
            }
        };
    }, [
        A,
        t_1.version,
        left,
        t_1.id
    ]);
    let onPointerDown = (e)=>{
        if (!(e.button !== 0 || D || e.target.closest(`button, a, input, textarea, select`))) {
            TRef.current = {
                pointer: e.pointerId,
                x: e.clientX,
                y: e.clientY,
                axis: null,
                samples: []
            };
            ERef.current = false;
        }
    };
    let onPointerMove = (e)=>{
        let TRef_current = TRef.current;
        let vRef_current = vRef.current;
        if (!TRef_current || TRef_current.pointer !== e.pointerId || !vRef_current) {
            return;
        }
        let r = e.clientX - TRef_current.x;
        let a = e.clientY - TRef_current.y;
        if (!TRef_current.axis) {
            if (Math.hypot(r, a) < 6) {
                return;
            }
            TRef_current.axis = Math.abs(r) > Math.abs(a) ? `x` : `y`;
            e.currentTarget.setPointerCapture(e.pointerId);
            ERef.current = true;
            setF(true);
            vRef_current.style.transition = `none`;
        }
        let v_1 = TRef_current.axis === `x` ? r : a;
        let s = TRef_current.axis === `x` || v_1 * edge > 0;
        if (!s) {
            v_1 = Math.sign(v_1) * Math.abs(v_1) ** 0.7 * 0.6;
        }
        let c = TRef_current.axis === `x` ? vRef_current.offsetWidth : vRef_current.offsetHeight * 2;
        vRef_current.style.transform = TRef_current.axis === `x` ? `translateX(${v_1}px)` : `translateY(${v_1}px)`;
        vRef_current.style.opacity = s ? String(Math.max(0.25, 1 - Math.abs(v_1) / (c * 1.1))) : ``;
        TRef_current.samples.push({
            v: v_1,
            at: e.timeStamp
        });
        if (TRef_current.samples.length > 6) {
            TRef_current.samples.shift();
        }
    };
    let N = (t)=>{
        let TRef_current = TRef.current;
        let vRef_current = vRef.current;
        if (!TRef_current || TRef_current.pointer !== t.pointerId || (TRef.current = null, !TRef_current.axis || !vRef_current)) {
            return;
        }
        setF(false);
        let a = TRef_current.samples[TRef_current.samples.length - 1] ?? {
            v: 0,
            at: 0
        };
        let o = TRef_current.samples[0] ?? a;
        let s = a.at > o.at ? (a.v - o.v) / (a.at - o.at) : 0;
        let c = TRef_current.axis === `x` || a.v * edge > 0;
        let l = Math.abs(s) > 0.45 && Math.sign(s) === Math.sign(a.v);
        if (t.type === `pointerup` && c && (Math.abs(a.v) > 64 || l)) {
            let t = (TRef_current.axis === `x` ? vRef_current.offsetWidth : vRef_current.offsetHeight) + 48;
            vRef_current.style.transition = `transform 300ms cubic-bezier(0.22, 1, 0.36, 1), opacity 240ms ease`;
            vRef_current.style.transform = `${TRef_current.axis === `x` ? `translateX` : `translateY`}(${Math.sign(a.v) * t}px)`;
            vRef_current.style.opacity = `0`;
            dismiss(t_1.id);
        } else {
            vRef_current.style.transition = ``;
            vRef_current.style.transform = ``;
            vRef_current.style.opacity = ``;
        }
    };
    let P = -edge;
    let transform = `translateY(${P * layout.y}px) scale(${layout.scale})`;
    if (!u) {
        transform = `translateY(${edge * 100}%) scale(${layout.scale})`;
    }
    if (D) {
        transform = `translateY(${P * layout.y + edge * 10}px) scale(${layout.scale * 0.96})`;
    }
    let I = t_1.type === `loading` ? <Y1Component/> : t_1.icon ?? (t_1.type === "default" ? null : <Y1Component/>);
    return <li className={`ui-tsc__toast`} data-toast-id={x(t_1)} data-type={t_1.type} data-behind={layout.behind || undefined} data-removing={D || undefined} data-swiping={f || undefined} tabIndex={0} inert={layout.hidden || D} style={{
        transform,
        opacity: !u || D || layout.hidden ? 0 : 1,
        height: layout.height ? `${layout.height}px` : undefined,
        zIndex: layout.z
    }} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={N} onPointerCancel={N} onClickCapture={(e)=>{
        if (ERef.current) {
            ERef.current = false;
            e.stopPropagation();
            e.preventDefault();
        }
    }}><div ref={vRef} className={`ui-tsc__swipe`}><div className={`ui-tsc__card`}><div ref={ref} className={`ui-tsc__content`} data-action={t_1.action ? `` : undefined}>{I && <span className={`ui-tsc__icon`} data-type={t_1.icon && t_1.type !== `loading` ? `custom` : t_1.type}>{I}</span>}<div className={`ui-tsc__text`}><div key={t_1.version} className={`ui-tsc__copy`} data-changed={t_1.version > 0 || undefined}><div className={`ui-tsc__title`}>{t_1.title}</div>{t_1.description != null && t_1.description !== `` && <div className={`ui-tsc__desc`}>{t_1.description}</div>}</div>{h && <div key={`ghost-${h.version}`} className={`ui-tsc__copy ui-tsc__ghost`} aria-hidden={`true`}><div className={`ui-tsc__title`}>{h.title}</div>{h.description != null && h.description !== `` && <div className={`ui-tsc__desc`}>{h.description}</div>}</div>}</div>{t_1.action && <button type={`button`} className={`ui-tsc__action`} onClick={(t)=>{
        t_1.action.onClick(t);
        if (!t.defaultPrevented) {
            dismiss(t_1.id);
        }
    }}>{t_1.action.label}</button>}</div>{hairline && k && <span key={t_1.version} className={`ui-tsc__timer`} aria-hidden={`true`} style={{
        animationDuration: `${left}ms`,
        animationPlayState: A ? `running` : `paused`
    }}/>}</div>{closeButton && <button type={`button`} className={`ui-tsc__close`} aria-label={`Dismiss notification`} onClick={()=>dismiss(t_1.id)}><B1Component/></button>}</div></li>;
}
const C = 10;
const w = 0.05;
const T = {
    y: 0,
    scale: 1,
    height: 0,
    z: 0,
    behind: false,
    hidden: true
};
function EComponent({ position = `bottom-right`, inline = false, id, duration = 4000, visibleToasts = 3, expand = false, offset, gap = 10, hotkey = `F8`, hairline = true, closeButton = true, label = `Notifications`, className }) {
    let y = n.useSyncExternalStore(l, u, d);
    let [b, setB] = n.useState({});
    let [O, setO] = n.useState(false);
    let [A, setA] = n.useState(false);
    let [M, setM] = n.useState(false);
    let [P, setP] = n.useState(false);
    let [I, setI] = n.useState(``);
    let [te, setTe] = n.useState(``);
    let LRef = n.useRef(null);
    let RRef = n.useRef(new Map);
    let zRef = n.useRef(0);
    let BRef = n.useRef(null);
    let VRef = n.useRef(`mouse`);
    let HRef = n.useRef(new Map);
    let [U, W] = position.split(`-`);
    let edge = U === `bottom` ? 1 : -1;
    let K = y.filter((e)=>(e.toaster ?? null) === (id ?? null)).reverse();
    let q = K.filter((e)=>!e.removing);
    let J = expand || O || A || M;
    let re = O || A || M || P;
    let Y = Math.max(1, visibleToasts);
    let onHeight = n.useCallback((e, t)=>{
        setB((n)=>{
            if (n[e] === t) {
                return n;
            }
            return {
                ...n,
                [e]: t
            };
        });
    }, []);
    let X = q[0] && b[x(q[0])] || zRef.current;
    if (X) {
        zRef.current = X;
    }
    let Z = new Map;
    let y_1 = 0;
    q.forEach((e, t)=>{
        let height = b[x(e)] ?? 0;
        let r = Math.min(t, Y - 1);
        let i = J ? {
            y: y_1,
            scale: 1,
            height,
            z: q.length - t,
            behind: false,
            hidden: t >= Y
        } : {
            y: r * C,
            scale: 1 - r * w,
            height: t === 0 ? height : X,
            z: q.length - t,
            behind: t > 0,
            hidden: t >= Y
        };
        if (t < Y) {
            y_1 += height + gap;
        }
        Z.set(x(e), i);
        RRef.current.set(x(e), i);
    });
    let ae = Math.min(q.length, Y);
    let oe = q.length ? J ? Math.max(0, y_1 - gap) : X + C * (ae - 1) : 0;
    n.useEffect(()=>{
        let e = new Set(K.map(x));
        setB((t)=>{
            let n = Object.keys(t).filter((t)=>!e.has(t));
            if (!n.length) {
                return t;
            }
            let r = {
                ...t
            };
            n.forEach((e)=>delete r[e]);
            return r;
        });
        RRef.current.forEach((t, n)=>!e.has(n) && RRef.current.delete(n));
        if (!q.length) {
            setM(false);
        }
    }, [
        y
    ]);
    n.useEffect(()=>{
        let LRef_current = LRef.current;
        if (LRef_current) {
            q.forEach((t)=>{
                let n = x(t);
                if (HRef.current.get(n) === t.version) {
                    return;
                }
                HRef.current.set(n, t.version);
                let r = Array.from(LRef_current.querySelectorAll(`[data-toast-id]`)).find((e)=>e.dataset.toastId === n)?.querySelector(`.ui-tsc__copy:not(.ui-tsc__ghost)`)?.textContent?.trim();
                if (r) {
                    (t.type === `error` ? setTe : setI)((e)=>{
                        if (e === r) {
                            return `${r} `;
                        }
                        return r;
                    });
                }
            });
            HRef.current.forEach((e, t)=>!K.some((e)=>x(e) === t) && HRef.current.delete(t));
        }
    }, [
        y
    ]);
    n.useEffect(()=>{
        let e = ()=>setP(document.visibilityState === `hidden`);
        e();
        document.addEventListener(`visibilitychange`, e);
        return ()=>document.removeEventListener(`visibilitychange`, e);
    }, []);
    n.useEffect(()=>{
        if (!M) {
            return;
        }
        let e = (e)=>{
            if (!LRef.current?.contains(e.target)) {
                setM(false);
            }
        };
        document.addEventListener(`pointerdown`, e);
        return ()=>document.removeEventListener(`pointerdown`, e);
    }, [
        M
    ]);
    let $ = ()=>Array.from(LRef.current?.querySelectorAll(`[data-toast-id]:not([data-removing])`) ?? []);
    n.useEffect(()=>{
        if (!hotkey) {
            return;
        }
        let e = (e)=>{
            if (e.key !== hotkey && e.code !== hotkey) {
                return;
            }
            let t = $().find((e)=>!e.inert);
            if (t) {
                e.preventDefault();
                if (!LRef.current?.contains(document.activeElement)) {
                    BRef.current = document.activeElement;
                }
                t.focus();
            }
        };
        window.addEventListener(`keydown`, e);
        return ()=>window.removeEventListener(`keydown`, e);
    }, [
        hotkey
    ]);
    let onKeyDown = (e)=>{
        if (e.key !== `Escape` || !q.length) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        let t = e.target.closest(`[data-toast-id]`);
        let n = q.find((e)=>x(e) === t?.dataset.toastId) ?? q[0];
        let r = q.indexOf(n);
        dismiss(n.id);
        let i = q.filter((e)=>e !== n)[Math.min(r, q.length - 2)];
        let a = i && $().find((e)=>e.dataset.toastId === x(i));
        if (a) {
            a.focus();
        } else if (BRef.current?.isConnected) {
            BRef.current.focus();
        } else {
            document.activeElement?.blur();
        }
    };
    let onFocus = (e)=>{
        if (e.target.matches(`:focus-visible`)) {
            setA(true);
        }
    };
    let onBlur = (e)=>{
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setA(false);
        }
    };
    let style_1 = {
        "--ui-tsc-offset": offset === undefined ? undefined : `${offset}px`
    };
    return <section ref={LRef} className={[
        `ui-tsc`,
        className
    ].filter(Boolean).join(` `)} data-y={U} data-x={W} data-inline={inline || undefined} data-expanded={J || undefined} data-empty={!q.length || undefined} aria-label={hotkey ? `${label} (${hotkey})` : label} tabIndex={-1} style={style_1} onKeyDown={onKeyDown} onFocus={onFocus} onBlur={onBlur} onPointerDownCapture={(e)=>VRef.current = e.pointerType} onPointerEnter={(e)=>e.pointerType === `mouse` && setO(true)} onPointerLeave={(e)=>e.pointerType === `mouse` && setO(false)} onClick={()=>VRef.current !== `mouse` && q.length > 1 && setM(true)}><style href={`ui-toaster-clean`} precedence={`default`}>{D}</style><ol className={`ui-tsc__list`} style={{
        height: `${oe}px`
    }}>{K.map((t_2)=><SComponent key={x(t_2)} t={t_2} layout={Z.get(x(t_2)) ?? RRef.current.get(x(t_2)) ?? T} edge={edge} paused={re || (Z.get(x(t_2))?.hidden ?? false)} defaultDuration={duration} hairline={hairline} closeButton={closeButton} onHeight={onHeight}/>)}</ol><div className={`ui-tsc__sr`} role={`status`} aria-live={`polite`}>{I}</div><div className={`ui-tsc__sr`} role={`alert`}>{te}</div></section>;
}
var D = `.ui-tsc{--ui-tsc-card: #ffffff;--ui-tsc-strong: #000000;--ui-tsc-ink: rgba(0, 0, 0, 0.88);--ui-tsc-text: rgba(0, 0, 0, 0.61);--ui-tsc-icon: rgba(0, 0, 0, 0.447);--ui-tsc-faint: rgba(0, 0, 0, 0.27);--ui-tsc-hairline: rgba(0, 0, 0, 0.1);--ui-tsc-success: #1a9a52;--ui-tsc-danger: #e5484d;--ui-tsc-accent: rgba(0, 96, 226, 0.765);--ui-tsc-focus: rgba(0, 96, 226, 0.35);--ui-tsc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-tsc-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.07);--ui-tsc-shadow-float: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 10px 24px -10px rgba(0, 0, 0, 0.14);--ui-tsc-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-tsc-width: 356px;--ui-tsc-offset: 24px;position: fixed;z-index: 9999;box-sizing: border-box;container-type: inline-size;width: var(--ui-tsc-width);max-width: calc(100% - 2 * var(--ui-tsc-offset));margin: 0;padding: 0;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;font-weight: 400;line-height: 20px;color: var(--ui-tsc-text);text-align: left;-webkit-font-smoothing: antialiased;outline: none}.ui-tsc[data-inline]{position: absolute;z-index: 20;--ui-tsc-offset: 20px}.ui-tsc[data-empty]{pointer-events: none}.ui-tsc *, .ui-tsc *::before, .ui-tsc *::after{box-sizing: border-box}:where(.ui-tsc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-tsc) svg{display: block;flex: none}.ui-tsc button:focus-visible{outline: 2px solid var(--ui-tsc-focus);outline-offset: 1px}.ui-tsc[data-y="bottom"]{bottom: var(--ui-tsc-offset)}.ui-tsc[data-y="top"]{top: var(--ui-tsc-offset)}.ui-tsc[data-x="right"]{right: var(--ui-tsc-offset)}.ui-tsc[data-x="left"]{left: var(--ui-tsc-offset)}.ui-tsc[data-x="center"]{left: 50%;transform: translateX(-50%)}.ui-tsc:not([data-inline])[data-y="bottom"]{bottom: max(var(--ui-tsc-offset), env(safe-area-inset-bottom))}.ui-tsc__list{position: relative;margin: 0;padding: 0;list-style: none}.ui-tsc__toast{position: absolute;left: 0;right: 0;outline: none;touch-action: none;-webkit-user-select: none;user-select: none;transition: transform 440ms var(--ui-tsc-ease), opacity 320ms ease, height 380ms var(--ui-tsc-ease)}.ui-tsc[data-y="bottom"] .ui-tsc__toast{bottom: 0;transform-origin: 50% 0}.ui-tsc[data-y="top"] .ui-tsc__toast{top: 0;transform-origin: 50% 100%}.ui-tsc__toast[data-removing]{pointer-events: none;transition: transform 380ms var(--ui-tsc-ease), opacity 260ms ease, height 380ms var(--ui-tsc-ease)}.ui-tsc__swipe{position: relative;height: 100%;transition: transform 460ms cubic-bezier(0.34, 1.3, 0.64, 1), opacity 260ms ease}.ui-tsc__toast[data-swiping]{cursor: grabbing}.ui-tsc__card{position: relative;height: 100%;overflow: hidden;border-radius: 10px;background: var(--ui-tsc-card);box-shadow: var(--ui-tsc-shadow-float)}.ui-tsc__toast:focus-visible .ui-tsc__card{outline: 2px solid var(--ui-tsc-focus);outline-offset: 2px}.ui-tsc__content{display: flex;align-items: flex-start;gap: 8px;padding: 12px 14px 12px 12px;transition: opacity 260ms ease}.ui-tsc__content[data-action]{padding-right: 12px}.ui-tsc__toast[data-behind] .ui-tsc__content, .ui-tsc__toast[data-behind] .ui-tsc__timer{opacity: 0}.ui-tsc__text{position: relative;flex: 1;min-width: 0}.ui-tsc__title{font-weight: 500;line-height: 20px;color: var(--ui-tsc-strong);overflow-wrap: anywhere}.ui-tsc__desc{font-size: 13px;line-height: 20px;color: var(--ui-tsc-text);overflow-wrap: anywhere}.ui-tsc__copy[data-changed]{animation: ui-tsc-text-in 300ms var(--ui-tsc-ease) both}.ui-tsc__ghost{position: absolute;top: 0;left: 0;right: 0;pointer-events: none;animation: ui-tsc-text-out 220ms ease both}.ui-tsc__icon{display: grid;place-items: center;flex: none;width: 16px;height: 20px;color: var(--ui-tsc-icon);transition: color 300ms ease}.ui-tsc__icon[data-type="success"]{color: var(--ui-tsc-success)}.ui-tsc__icon[data-type="error"]{color: var(--ui-tsc-danger)}.ui-tsc__icon[data-type="info"]{color: var(--ui-tsc-accent)}.ui-tsc__icon[data-type="custom"] > *{width: 16px;height: 16px}.ui-tsc__status{width: 16px;height: 16px;overflow: visible;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-tsc__icon[data-type="success"] .ui-tsc__status, .ui-tsc__icon[data-type="error"] .ui-tsc__status{animation: ui-tsc-pop 460ms cubic-bezier(0.34, 1.56, 0.64, 1) both}.ui-tsc__spin{transform-box: fill-box;transform-origin: center;animation: ui-tsc-spin 760ms linear infinite;animation-play-state: paused}.ui-tsc__icon[data-type="loading"] .ui-tsc__spin{animation-play-state: running}.ui-tsc__ring{stroke-dasharray: 1 0;stroke-opacity: 0.24;transition: stroke-dasharray 560ms var(--ui-tsc-ease), stroke-opacity 360ms ease}.ui-tsc__icon[data-type="loading"] .ui-tsc__ring{stroke-dasharray: 0.28 0.72;stroke-opacity: 1}.ui-tsc__mark{stroke-dasharray: 1;stroke-dashoffset: 1;opacity: 0}.ui-tsc__info{opacity: 0;transition: opacity 240ms ease}.ui-tsc__icon[data-type="success"] .ui-tsc__check, .ui-tsc__icon[data-type="error"] .ui-tsc__x1, .ui-tsc__icon[data-type="error"] .ui-tsc__x2{opacity: 1;stroke-dashoffset: 0;animation: ui-tsc-draw 340ms var(--ui-tsc-ease) 160ms both}.ui-tsc__icon[data-type="error"] .ui-tsc__x2{animation-delay: 260ms}.ui-tsc__icon[data-type="info"] .ui-tsc__info{opacity: 1}.ui-tsc__action{flex: none;align-self: center;height: 28px;margin: -4px 0;padding: 0 10px;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;white-space: nowrap;transition: background-color 140ms ease, box-shadow 140ms ease, transform 160ms var(--ui-tsc-ease)}:where(.ui-tsc) .ui-tsc__action{background: var(--ui-tsc-card);box-shadow: var(--ui-tsc-shadow);color: var(--ui-tsc-strong)}.ui-tsc__action:hover{box-shadow: var(--ui-tsc-shadow-hover)}.ui-tsc__action:active{transform: scale(0.97)}.ui-tsc__close{position: absolute;top: -7px;left: -7px;z-index: 1;display: grid;place-items: center;width: 20px;height: 20px;border-radius: 50%;opacity: 0;transform: scale(0.8);transition: opacity 160ms ease, transform 200ms var(--ui-tsc-ease), color 160ms ease, box-shadow 160ms ease}:where(.ui-tsc) .ui-tsc__close{background: var(--ui-tsc-card);box-shadow: var(--ui-tsc-shadow);color: var(--ui-tsc-icon)}.ui-tsc__close::before{content: "";position: absolute;inset: -6px}.ui-tsc__close:hover{color: var(--ui-tsc-ink);box-shadow: var(--ui-tsc-shadow-hover)}.ui-tsc__toast:not([data-behind]):hover .ui-tsc__close, .ui-tsc__toast:not([data-behind]):focus-within .ui-tsc__close{opacity: 1;transform: none}.ui-tsc__glyph{width: 10px;height: 10px;fill: none;stroke: currentColor;stroke-width: 2.2;stroke-linecap: round}.ui-tsc__timer{position: absolute;left: 12px;right: 12px;bottom: 0;height: 1px;background: var(--ui-tsc-hairline);transform-origin: left;animation-name: ui-tsc-timer;animation-timing-function: linear;animation-fill-mode: both;transition: opacity 260ms ease}.ui-tsc__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-tsc-spin{to{transform: rotate(360deg)}}@keyframes ui-tsc-draw{from{stroke-dashoffset: 1}to{stroke-dashoffset: 0}}@keyframes ui-tsc-pop{0%{transform: scale(0.82)}55%{transform: scale(1.08)}100%{transform: scale(1)}}@keyframes ui-tsc-timer{from{transform: scaleX(1)}to{transform: scaleX(0)}}@keyframes ui-tsc-text-in{from{opacity: 0;transform: translateY(4px);filter: blur(3px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-tsc-text-out{from{opacity: 1}to{opacity: 0;transform: translateY(-4px);filter: blur(3px)}}@container (max-width: 300px){.ui-tsc__content{padding: 10px 12px 10px 10px}}@media (max-width: 600px){.ui-tsc, .ui-tsc[data-x]{left: 12px;right: 12px;width: auto;max-width: none;transform: none}.ui-tsc[data-y="bottom"]{bottom: 12px}.ui-tsc:not([data-inline])[data-y="bottom"]{bottom: max(12px, env(safe-area-inset-bottom))}.ui-tsc[data-y="top"]{top: 12px}}@media (hover: none) and (pointer: coarse){.ui-tsc__toast:not([data-behind]) .ui-tsc__close{opacity: 1;transform: none}.ui-tsc__close{width: 24px;height: 24px;top: -8px;left: -8px}.ui-tsc__close::before{inset: -8px}.ui-tsc__action{height: 36px;margin: -8px -2px -8px 0;padding: 0 14px}}@media (prefers-reduced-motion: reduce){.ui-tsc *:not(.ui-tsc__spin):not(.ui-tsc__timer), .ui-tsc *::before, .ui-tsc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-tsc{--ui-tsc-card: #1c1c1e;--ui-tsc-strong: #ffffff;--ui-tsc-ink: rgba(255, 255, 255, 0.9);--ui-tsc-text: rgba(255, 255, 255, 0.62);--ui-tsc-icon: rgba(255, 255, 255, 0.46);--ui-tsc-faint: rgba(255, 255, 255, 0.3);--ui-tsc-hairline: rgba(255, 255, 255, 0.14);--ui-tsc-success: #3ec27a;--ui-tsc-danger: #ff6369;--ui-tsc-accent: #4d8dff;--ui-tsc-focus: rgba(77, 141, 255, 0.5);--ui-tsc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-tsc-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-tsc-shadow-float: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 12px 28px -10px rgba(0, 0, 0, 0.6)}:where(.dark, [data-theme="dark"]) .ui-tsc .ui-tsc__action{background: rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-tsc .ui-tsc__close{background: #2a2a2d}`;
const O = (e, t = false)=>new Promise((resolve, reject)=>window.setTimeout(()=>{
            if (t) {
                return reject(Error(`Timeout`));
            }
            return resolve();
        }, e));
const K1Component = ({ d })=><svg viewBox={`0 0 24 24`} aria-hidden={`true`}><path d={d}/></svg>;
const A = {
    save: `M6 4h9.5L20 8.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8 4v4.5h7V4M8 20v-6h8v6`,
    trash: `M4.5 7h15M10 11v5.5M14 11v5.5M6 7l.8 11.2A2 2 0 0 0 8.8 20h6.4a2 2 0 0 0 2-1.8L18 7M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2`,
    upload: `M12 15V4M7.5 8.5 12 4l4.5 4.5M5 15v3.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V15`,
    sync: `M19.5 12a7.5 7.5 0 0 1-13.3 4.8M4.5 12a7.5 7.5 0 0 1 13.3-4.8M18 3.5v4h-4M6 20.5v-4h4`,
    doc: `M7 3.5h7l4.5 4.5v11a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5zM14 3.5V8h4.5M8.5 12.5h7M8.5 16h5`
};
function JComponent() {
    let e = n.useId();
    let tRef = n.useRef(new Set);
    let i = (t = {})=>({
            toaster: e,
            ...t
        });
    let a = (e)=>tRef.current.add(e);
    let o = (e)=>a(v.success(`Draft saved`, i({
            description: `Q3 Board Report · all changes kept`,
            ...e
        })));
    let s = (e)=>a(v(`File moved to trash`, {
            ...i(e),
            description: `Budget-2027.xlsx`,
            icon: <K1Component d={A.trash}/>,
            action: {
                label: `Undo`,
                onClick: ()=>a(v.success(`File restored`, i({
                        description: `Budget-2027.xlsx is back in Reports`
                    })))
            }
        }));
    let c = (t)=>{
        let n = `${e}-upload-${Date.now()}`;
        a(n);
        v.promise(O(2400), {
            loading: {
                title: `Uploading report…`,
                description: `Q3-Board-Report.pdf · 4.2\xA0MB`
            },
            success: {
                title: `Report uploaded`,
                description: `Shared with 4 people in Finance`
            },
            error: `Upload failed`
        }, {
            ...i(t),
            id: n
        });
    };
    n.useEffect(()=>{
        let e = [
            window.setTimeout(()=>o({
                    duration: 9000
                }), 500),
            window.setTimeout(()=>s({
                    duration: 9000
                }), 1300),
            window.setTimeout(()=>c({
                    duration: 9000
                }), 2100)
        ];
        let tRef_current = tRef.current;
        return ()=>{
            e.forEach(clearTimeout);
            tRef_current.forEach((e)=>v.dismiss(e));
            tRef_current.clear();
        };
    }, []);
    return <div className={`toaster-demo toaster-demo--clean`}><div className={`toaster-demo__col`}><div className={`toaster-demo__panel`}><div className={`toaster-demo__card`}><div className={`toaster-demo__head`}><span className={`toaster-demo__doc`}><K1Component d={A.doc}/></span><div className={`toaster-demo__meta`}><span className={`toaster-demo__name`}>{`Q3 Board Report`}</span><span className={`toaster-demo__sub`}>{`Finance · edited 2 min ago`}</span></div></div><div className={`toaster-demo__grid`}><button type={`button`} className={`toaster-demo__btn`} onClick={()=>o()}><K1Component d={A.save}/>{`Save draft`}</button><button type={`button`} className={`toaster-demo__btn`} onClick={()=>s()}><K1Component d={A.trash}/>{`Delete file`}</button><button type={`button`} className={`toaster-demo__btn`} onClick={()=>c()}><K1Component d={A.upload}/>{`Upload report`}</button><button type={`button`} className={`toaster-demo__btn`} onClick={()=>{
        let t = `${e}-sync-${Date.now()}`;
        a(t);
        v.promise(O(2200, true), {
            loading: `Syncing with Google Drive…`,
            success: `Synced`,
            error: {
                title: `Couldn't sync`,
                description: `Google Drive didn't respond. Try again in a minute.`
            }
        }, i({
            id: t
        }));
    }}><K1Component d={A.sync}/>{`Sync`}</button></div></div><p className={`toaster-demo__foot`}>{`Press `}<kbd>{`F8`}</kbd>{` to jump to notifications`}</p></div><div className={`toaster-demo__slot`}><EComponent id={e} inline position={`top-center`}/></div></div></div>;
}
export { JComponent as default };
