import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = (...e)=>e.filter(Boolean).join(` `);
const a = (e)=>!!e && Object.values(e).some(Boolean);
const o = ()=>typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function s(e) {
    if (e && !o() && e.animate) {
        e.animate([
            {
                transform: `none`
            },
            {
                transform: `translateX(-4px)`
            },
            {
                transform: `translateX(4px)`
            },
            {
                transform: `translateX(-2px)`
            },
            {
                transform: `none`
            }
        ], {
            duration: 340,
            easing: `ease-out`
        });
    }
}
function c(e, t, n) {
    if (!e || !t) {
        return;
    }
    let r = e.querySelector(n);
    if (!r || !r.offsetWidth) {
        t.style.opacity = `0`;
        return;
    }
    let i = !t.dataset.ready;
    if (i) {
        t.style.transition = `none`;
    }
    t.style.opacity = `1`;
    t.style.width = `${r.offsetWidth}px`;
    t.style.height = `${r.offsetHeight}px`;
    t.style.transform = `translate(${r.offsetLeft}px, ${r.offsetTop}px)`;
    if (i) {
        t.dataset.ready = `1`;
        t.offsetWidth;
        t.style.transition = ``;
    }
}
const L1Component = ({ d, className })=><svg viewBox={`0 0 24 24`} className={i(`ui-sfc__glyph`, className)} aria-hidden={`true`}><path d={d}/></svg>;
const u = {
    check: `M5.5 12.5l4 4L18.5 8`,
    close: `M7 7l10 10M17 7 7 17`,
    back: `M14.5 6l-6 6 6 6`
};
const D1Component = ({ className })=><svg viewBox={`0 0 24 24`} className={i(`ui-sfc__draw`, className)} aria-hidden={`true`}><path d={u.check} pathLength={1}/></svg>;
const FContext = n.createContext({
    errors: {},
    shake: 0,
    report: ()=>{}
});
const PContext = n.createContext(null);
function M1Component({ steps, initialValues, onComplete, initialStep = 0, step, onStepChange, submitLabel = `Finish`, submittingLabel = `Creating…`, success, className }) {
    let steps_length = steps.length;
    let [y, setY] = n.useState(initialStep);
    let C = Math.max(0, Math.min(steps_length - 1, step ?? y));
    let [w, setW] = n.useState(initialValues);
    let ERef = n.useRef(w);
    let [D, setD] = n.useState(C);
    let k = Math.max(D, C);
    let [ee, setEe] = n.useState({});
    let [j, setJ] = n.useState(0);
    let [M, setM] = n.useState(null);
    let [P, setP] = n.useState(false);
    let [I, setI] = n.useState(``);
    let [R, setR] = n.useState(false);
    let [ne, setNe] = n.useState(``);
    let reRef = n.useRef(null);
    let VRef = n.useRef(null);
    let HRef = n.useRef(null);
    let URef = n.useRef(null);
    let WRef = n.useRef(false);
    let GRef = n.useRef(false);
    let KRef = n.useRef({});
    let report = n.useCallback((e, t)=>{
        KRef.current = {
            ...KRef.current,
            [e]: t ?? undefined
        };
    }, []);
    let q = n.useId();
    let index = R ? steps_length : C;
    let [Y, setY_1] = n.useState({
        index,
        from: null,
        dir: 1
    });
    if (Y.index !== index) {
        setY_1({
            index,
            from: Y.index,
            dir: index > Y.index ? 1 : -1
        });
    }
    n.useEffect(()=>{
        if (Y.from === null) {
            return;
        }
        let e = window.setTimeout(()=>setY_1((e)=>({
                    ...e,
                    from: null
                })), 420);
        return ()=>clearTimeout(e);
    }, [
        Y.index,
        Y.from
    ]);
    let setValues = n.useCallback((e)=>{
        ERef.current = {
            ...ERef.current,
            ...e
        };
        setW(ERef.current);
    }, []);
    let Z = (t)=>{
        let n = Math.max(0, Math.min(steps_length - 1, t));
        if (n !== C) {
            WRef.current = true;
            GRef.current = true;
            KRef.current = {};
            if (step === undefined) {
                setY(n);
            }
            onStepChange?.(n);
            setD((e)=>Math.max(e, n));
            setI(``);
            setNe(`Step ${n + 1} of ${steps_length}: ${steps[n].title}`);
        }
    };
    let Q = ()=>{
        let t = {
            ...KRef.current,
            ...steps[C].validate?.(ERef.current)
        };
        if (a(t)) {
            setEe((e)=>({
                    ...e,
                    [C]: true
                }));
            setJ((e)=>e + 1);
            setNe(Object.values(t).find(Boolean) ?? `Check this step`);
            return false;
        }
        setEe((e)=>({
                ...e,
                [C]: false
            }));
        return true;
    };
    let onSubmit = async (e)=>{
        e?.preventDefault();
        if (!(P || R || !Q())) {
            if (C < steps_length - 1) {
                if (M !== null && M > C) {
                    setM(null);
                    Z(M);
                } else {
                    Z(C + 1);
                }
                return;
            }
            setP(true);
            setI(``);
            try {
                await onComplete?.(ERef.current);
                WRef.current = true;
                GRef.current = true;
                setR(true);
                setNe(`All done`);
            } catch (error) {
                let t = error instanceof Error && error.message ? error.message : `Something went wrong – try again`;
                setI(t);
                setNe(t);
            } finally{
                setP(false);
            }
        }
    };
    let onClick = ()=>{
        setM(null);
        Z(C - 1);
    };
    let goTo = (t)=>{
        let n = steps.findIndex((e)=>e.id === t);
        if (!(n < 0 || n === C || n > C && !Q())) {
            setM(n < C ? C : null);
            Z(n);
        }
    };
    let le = ()=>{
        ERef.current = initialValues;
        setW(initialValues);
        setEe({});
        setM(null);
        setD(initialStep);
        setR(false);
        setI(``);
        WRef.current = true;
        GRef.current = true;
        KRef.current = {};
        if (step === undefined) {
            setY(initialStep);
        }
        onStepChange?.(initialStep);
    };
    n.useEffect(()=>{
        if (!WRef.current) {
            return;
        }
        WRef.current = false;
        let e = VRef.current?.querySelector(`[data-pane="current"]`);
        (e?.querySelector(`input:not([type="hidden"]):not(:disabled), textarea, select`) ?? e?.querySelector(`.ui-sfc__heading`))?.focus({
            preventScroll: true
        });
    }, [
        index
    ]);
    n.useEffect(()=>{
        if (j) {
            VRef.current?.querySelector(`[data-pane="current"] [aria-invalid="true"]`)?.focus({
                preventScroll: true
            });
        }
    }, [
        j
    ]);
    n.useLayoutEffect(()=>{
        let VRef_current = VRef.current;
        let t = VRef_current?.querySelector(`[data-pane="current"]`);
        if (!VRef_current || !t) {
            return;
        }
        let n = !VRef_current.dataset.ready;
        let r = ()=>VRef_current.style.height = `${t.offsetHeight}px`;
        if (n) {
            VRef_current.style.transition = `none`;
        }
        r();
        if (n) {
            VRef_current.dataset.ready = `1`;
            VRef_current.offsetWidth;
            VRef_current.style.transition = ``;
        }
        let i = new ResizeObserver(r);
        i.observe(t);
        return ()=>i.disconnect();
    }, [
        index
    ]);
    n.useLayoutEffect(()=>{
        let HRef_current = HRef.current;
        let URef_current = URef.current;
        if (!HRef_current || !URef_current) {
            return;
        }
        let n = ()=>HRef_current.style.width = `${URef_current.offsetWidth}px`;
        n();
        let r = new ResizeObserver(n);
        r.observe(URef_current);
        return ()=>r.disconnect();
    }, []);
    let $ = steps[C];
    let errors = ee[C] ? $.validate?.(w) ?? {} : {};
    let de = !a($.validate?.(w));
    let fe = C === steps_length - 1;
    let pe = P ? submittingLabel : fe ? submitLabel : M !== null && M > C ? `Back to ${steps[M].title.toLowerCase()}` : `Continue`;
    let me = {
        values: w,
        setValues,
        errors,
        goTo,
        next: ()=>reRef.current?.requestSubmit()
    };
    let HeComponent = (t)=>{
        if (t >= steps_length) {
            if (success) {
                return success(w, le);
            }
            return <X1Component title={`All set`} description={`Everything is saved. You can change it any time.`}/>;
        }
        let n = steps[t];
        let i = t === C ? me : {
            ...me,
            errors: {}
        };
        return <><h2 className={`ui-sfc__heading`} tabIndex={-1} id={`${q}-h${t}`}>{n.heading ?? n.title}</h2>{n.description && <p className={`ui-sfc__desc`}>{n.description}</p>}<div className={`ui-sfc__body`}>{n.render(i)}</div></>;
    };
    let ge = Y.from !== null && Y.from !== Y.index ? [
        Y.from,
        Y.index
    ] : [
        Y.index
    ];
    return <div className={i(`ui-sfc`, className)} style={{
        "--ui-sfc-n": steps_length
    }}><style href={`ui-stepper-form-clean`} precedence={`default`}>{S}</style><div className={`ui-sfc__head`}><div className={`ui-sfc__steps`}><ol className={`ui-sfc__list`} aria-label={`Progress`}>{steps.map((e, t)=>{
        let n = R || t < k && t !== C ? `done` : t === C ? `current` : `upcoming`;
        let i = !R && !P && t !== C && t <= k;
        let a = <><span className={`ui-sfc__bar`} aria-hidden={`true`}/><span className={`ui-sfc__mark`}>{n === `done` ? <D1Component key={`check`}/> : <span key={`num`}>{t + 1}</span>}</span><span className={`ui-sfc__step-label`}>{e.title}</span><span className={`ui-sfc__sr`}>{n === `done` ? ` (done)` : n === `current` ? ` (current)` : ``}</span></>;
        return <li key={e.id} className={`ui-sfc__step`} data-state={n} aria-current={!R && t === C ? `step` : undefined}>{i ? <button type={`button`} className={`ui-sfc__step-btn`} onClick={()=>goTo(e.id)}>{a}</button> : <span className={`ui-sfc__step-btn`}>{a}</span>}</li>;
    })}</ol></div><div className={`ui-sfc__compact`} aria-hidden={`true`}><span key={R ? `done` : C} className={`ui-sfc__compact-text`}>{R ? <>{`All `}{steps_length}{` steps done`}</> : <>{`Step `}{C + 1}{` of `}{steps_length}<span className={`ui-sfc__compact-dot`}>{`·`}</span><span className={`ui-sfc__compact-title`}>{$.title}</span></>}</span></div></div><form ref={reRef} className={`ui-sfc__card`} noValidate onSubmit={onSubmit} aria-labelledby={R ? undefined : `${q}-h${C}`}><div ref={VRef} className={`ui-sfc__viewport`}>{ge.map((e)=>{
        let t = e === Y.index;
        return <div key={e} className={`ui-sfc__pane`} data-pane={t ? `current` : `leaving`} data-dir={Y.dir} data-first={!GRef.current || undefined} inert={!t} aria-hidden={!t || undefined}><FContext.Provider value={{
            errors: t && e === C ? errors : {},
            shake: t ? j : 0,
            report
        }}>{HeComponent(e)}</FContext.Provider></div>;
    })}</div><div className={`ui-sfc__foot-fold`} data-hidden={R || undefined}><div className={`ui-sfc__foot`} inert={R}><button type={`button`} className={`ui-sfc__btn ui-sfc__btn-ghost`} data-hidden={C === 0 || undefined} disabled={C === 0 || P} onClick={onClick}><L1Component d={u.back}/>{`Back`}</button>{I && <span className={`ui-sfc__submit-error`} role={`alert`}>{I}</span>}<button ref={HRef} type={`submit`} className={`ui-sfc__btn ui-sfc__btn-primary`} aria-disabled={!de || P || undefined} data-busy={P || undefined}><span ref={URef} className={`ui-sfc__btn-inner`}>{P && <span className={`ui-sfc__spinner`} aria-hidden={`true`}/>}<span key={pe} className={`ui-sfc__btn-label`}>{pe}</span></span></button></div></div></form><span className={`ui-sfc__sr`} aria-live={`polite`}>{ne}</span></div>;
}
function H1Component({ name, label: label_1, hint, optional, children }) {
    let { errors, shake, report } = n.useContext(FContext);
    let [d, setD] = n.useState(null);
    let [h, setH] = n.useState(0);
    let _ = n.useId();
    let vRef = n.useRef(null);
    let y = errors[name] ?? d ?? ``;
    let bRef = n.useRef(y);
    if (y) {
        bRef.current = y;
    }
    let invalid = !!y;
    n.useEffect(()=>{
        if (shake && (errors[name] || d)) {
            s(vRef.current);
        }
    }, [
        shake
    ]);
    n.useEffect(()=>{
        if (h) {
            s(vRef.current);
        }
    }, [
        h
    ]);
    let flag = n.useCallback((t)=>{
        setD(t);
        report(name, t);
        if (t) {
            setH((e)=>e + 1);
        }
    }, [
        name,
        report
    ]);
    return <div className={`ui-sfc__field`} data-invalid={invalid || undefined}><label className={`ui-sfc__label`} htmlFor={_}>{label_1}{optional && <span className={`ui-sfc__optional`}>{`Optional`}</span>}</label><div ref={vRef} className={`ui-sfc__control`}><PContext.Provider value={{
        id: _,
        invalid,
        describedBy: invalid ? `${_}-msg` : hint ? `${_}-hint` : undefined,
        flag
    }}>{children}</PContext.Provider></div><div className={`ui-sfc__fold`} data-open={invalid || undefined}><div><p key={bRef.current} className={`ui-sfc__msg`} id={`${_}-msg`}>{bRef.current}</p></div></div>{hint && <div className={`ui-sfc__fold`} data-open={!invalid || undefined}><div><p className={`ui-sfc__hint`} id={`${_}-hint`}>{hint}</p></div></div>}</div>;
}
function G1Component({ prefix, className, ...rest }) {
    let o = n.useContext(PContext);
    return <div className={i(`ui-sfc__input`, className)} data-invalid={o?.invalid || undefined}>{prefix && <span className={`ui-sfc__prefix`} aria-hidden={`true`}>{prefix}</span>}<input id={o?.id} aria-invalid={o?.invalid || undefined} aria-describedby={o?.describedBy} autoComplete={`off`} spellCheck={false} {...rest}/></div>;
}
const _ = /^[^\s@,;]+@[^\s@,;]+\.[^\s@,;]{2,}$/;
function V1Component({ value, onChange, placeholder = `name@company.com`, validate = (e, t)=>{
    if (_.test(e)) {
        if (t.includes(e)) {
            return `Already on the list`;
        }
        return null;
    }
    return `That doesn't look like an email address`;
}, max }) {
    let c = n.useContext(PContext);
    let [d, setD] = n.useState(``);
    let [m, setM] = n.useState([]);
    let gRef = n.useRef(null);
    let vRef = n.useRef(null);
    let yRef = n.useRef(value);
    yRef.current = value;
    let bRef = n.useRef(null);
    let xRef = n.useRef(value.length);
    n.useLayoutEffect(()=>{
        let bRef_current = bRef.current;
        if (bRef_current && value.length > xRef.current) {
            bRef_current.scrollTo({
                left: bRef_current.scrollWidth,
                behavior: o() ? `auto` : `smooth`
            });
        }
        xRef.current = value.length;
    }, [
        value.length
    ]);
    let S = (e)=>{
        let n = e.split(/[\s,;]+/).map((e)=>e.trim().toLowerCase()).filter(Boolean);
        if (!n.length) {
            return true;
        }
        let r = [
            ...yRef.current
        ];
        let i = [];
        let o = null;
        for (let e of n){
            let t = max !== undefined && r.length >= max ? `Up to ${max}` : validate(e, r);
            if (t) {
                o ??= t;
                i.push(e);
            } else {
                r.push(e);
            }
        }
        if (r.length !== yRef.current.length) {
            yRef.current = r;
            onChange(r);
        }
        setD(i.join(`, `));
        c?.flag(o);
        return !o;
    };
    let C = (e)=>{
        if (m.includes(e)) {
            return;
        }
        setM((t)=>[
                ...t,
                e
            ]);
        let n = vRef.current?.querySelector(`[data-entry="${CSS.escape(e)}"]`);
        let r = ()=>{
            setM((t)=>t.filter((t)=>t !== e));
            onChange(yRef.current.filter((t)=>t !== e));
        };
        if (n && n.animate && !o()) {
            n.animate([
                {
                    width: `${n.offsetWidth}px`,
                    marginRight: `0px`,
                    opacity: 1,
                    transform: `none`
                },
                {
                    width: `0px`,
                    marginRight: `-6px`,
                    opacity: 0,
                    transform: `scale(0.85)`
                }
            ], {
                duration: 240,
                easing: `cubic-bezier(0.22, 1, 0.36, 1)`,
                fill: `forwards`
            }).onfinish = r;
        } else {
            r();
        }
    };
    return <div ref={bRef} className={`ui-sfc__tags`} data-invalid={c?.invalid || undefined} onClick={(e)=>e.target === e.currentTarget && gRef.current?.focus()}>{value.length > 0 && <ul ref={vRef} className={`ui-sfc__chips`} aria-label={`Added`}>{value.map((e)=><li key={e} className={`ui-sfc__chip`} data-entry={e} data-leaving={m.includes(e) || undefined}><span className={`ui-sfc__chip-text`} title={e}>{e}</span><button type={`button`} className={`ui-sfc__chip-x`} aria-label={`Remove ${e}`} onClick={()=>C(e)}><L1Component d={u.close}/></button></li>)}</ul>}<input ref={gRef} id={c?.id} type={`email`} inputMode={`email`} autoComplete={`off`} spellCheck={false} className={`ui-sfc__tags-input`} placeholder={value.length ? `Add another` : placeholder} value={d} aria-invalid={c?.invalid || undefined} aria-describedby={c?.describedBy} onChange={(e)=>{
        setD(e.target.value);
        c?.flag(null);
    }} onKeyDown={(t)=>{
        if (t.key === `Enter` && d.trim() || t.key === `,` || t.key === `;`) {
            t.preventDefault();
            S(d);
        } else if (t.key === `Backspace` && !d && value.length) {
            t.preventDefault();
            C(value[value.length - 1]);
        }
    }} onPaste={(e)=>{
        let t = e.clipboardData.getData(`text`);
        if (/[\s,;]/.test(t.trim())) {
            e.preventDefault();
            S(`${d} ${t}`);
        }
    }} onBlur={()=>d.trim() && S(d)}/></div>;
}
function Y1Component({ value, onChange, options, label }) {
    let oRef = n.useRef(null);
    let sRef = n.useRef(null);
    n.useLayoutEffect(()=>{
        c(oRef.current, sRef.current, `[aria-checked="true"]`);
    });
    n.useEffect(()=>{
        let oRef_current = oRef.current;
        if (!oRef_current) {
            return;
        }
        let t = new ResizeObserver(()=>c(oRef_current, sRef.current, `[aria-checked="true"]`));
        t.observe(oRef_current);
        return ()=>t.disconnect();
    }, []);
    return <div ref={oRef} className={`ui-sfc__choices`} role={`radiogroup`} aria-label={label} onKeyDown={(n)=>{
        let r = options.findIndex((t)=>t.value === value);
        let a = n.key === `ArrowRight` || n.key === `ArrowDown` ? 1 : n.key === `ArrowLeft` || n.key === `ArrowUp` ? -1 : 0;
        if (a) {
            n.preventDefault();
            let e = options[(r + a + options.length) % options.length];
            onChange(e.value);
            oRef.current?.querySelector(`[data-value="${CSS.escape(e.value)}"]`)?.focus();
        } else {
            if (n.key === `Enter`) {
                n.preventDefault();
                n.currentTarget.closest(`form`)?.requestSubmit();
            }
        }
    }}><span ref={sRef} className={`ui-sfc__ring`} aria-hidden={`true`}/>{options.map((n)=>{
        let i = n.value === value;
        return <button key={n.value} type={`button`} role={`radio`} aria-checked={i} tabIndex={i ? 0 : -1} data-value={n.value} className={`ui-sfc__choice`} onClick={()=>onChange(n.value)}><span className={`ui-sfc__choice-top`}><span className={`ui-sfc__choice-title`}>{n.title}</span>{n.badge && <span className={`ui-sfc__badge`}>{n.badge}</span>}<span className={`ui-sfc__radio`} aria-hidden={`true`}/></span>{n.aside && <span className={`ui-sfc__choice-aside`}>{n.aside}</span>}{n.description && <span className={`ui-sfc__choice-desc`}>{n.description}</span>}</button>;
    })}</div>;
}
function B1Component({ rows, onEdit }) {
    return <dl className={`ui-sfc__review`}>{rows.map((e)=><div key={e.label} className={`ui-sfc__review-row`}><dt>{e.label}</dt><dd>{e.value}</dd>{e.step && onEdit && <button type={`button`} className={`ui-sfc__edit`} aria-label={`Edit ${e.label.toLowerCase()}`} onClick={()=>onEdit(e.step)}>{`Edit`}</button>}</div>)}</dl>;
}
function X1Component({ title, description, children }) {
    return <div className={`ui-sfc__success`}><span className={`ui-sfc__success-check`}><D1Component/></span><h2 className={`ui-sfc__heading`} tabIndex={-1}>{title}</h2>{description && <p className={`ui-sfc__desc`}>{description}</p>}{children && <div className={`ui-sfc__success-actions`}>{children}</div>}</div>;
}
var S = `.ui-sfc{--ui-sfc-card: #ffffff;--ui-sfc-ink: rgba(0, 0, 0, 0.88);--ui-sfc-strong: #000000;--ui-sfc-text: rgba(0, 0, 0, 0.61);--ui-sfc-muted: rgba(0, 0, 0, 0.45);--ui-sfc-faint: rgba(0, 0, 0, 0.27);--ui-sfc-icon: rgba(0, 0, 0, 0.447);--ui-sfc-line: rgba(0, 0, 0, 0.06);--ui-sfc-fill: rgba(0, 0, 0, 0.06);--ui-sfc-fill-strong: rgba(0, 0, 0, 0.1);--ui-sfc-wash: rgba(0, 0, 0, 0.03);--ui-sfc-wash-soft: rgba(0, 0, 0, 0.015);--ui-sfc-accent: rgba(0, 96, 226, 0.765);--ui-sfc-accent-soft: rgba(0, 96, 226, 0.08);--ui-sfc-accent-fill: rgba(0, 96, 226, 0.05);--ui-sfc-accent-line: rgba(0, 96, 226, 0.35);--ui-sfc-ok: #1a9a52;--ui-sfc-ok-soft: rgba(26, 154, 82, 0.1);--ui-sfc-danger: #e5484d;--ui-sfc-danger-soft: rgba(229, 72, 77, 0.55);--ui-sfc-chip: rgba(0, 0, 0, 0.88);--ui-sfc-chip-hover: rgba(0, 0, 0, 0.8);--ui-sfc-on-chip: #fcfcfc;--ui-sfc-white-hover: #fafafa;--ui-sfc-focus: rgba(0, 96, 226, 0.35);--ui-sfc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-sfc-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.12), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-sfc-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;container-type: inline-size;display: grid;width: 100%;max-width: 520px;border-radius: 10px;background: var(--ui-sfc-card);box-shadow: var(--ui-sfc-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-sfc-ink);-webkit-font-smoothing: antialiased}.ui-sfc *, .ui-sfc *::before, .ui-sfc *::after{box-sizing: border-box}:where(.ui-sfc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-sfc) svg{display: block;flex: none}:where(.ui-sfc) :is(h2, p, dl, dd, ul, ol){margin: 0}.ui-sfc button:focus-visible{outline: 2px solid var(--ui-sfc-focus);outline-offset: 1px}.ui-sfc__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.65;stroke-linecap: round;stroke-linejoin: round}.ui-sfc__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-sfc__draw{width: 14px;height: 14px;fill: none;stroke: currentColor;stroke-width: 2.2;stroke-linecap: round;stroke-linejoin: round}.ui-sfc__draw path{stroke-dasharray: 1;stroke-dashoffset: 1;animation: ui-sfc-draw 360ms var(--ui-sfc-ease) 80ms forwards}.ui-sfc__head{padding: 16px 20px 0}.ui-sfc__steps{position: relative}.ui-sfc__list{display: grid;grid-template-columns: repeat(var(--ui-sfc-n), minmax(0, 1fr));gap: 8px;padding: 0;list-style: none}.ui-sfc__step{position: relative;display: grid;min-width: 0}.ui-sfc__step-btn{display: grid;grid-template-columns: auto minmax(0, 1fr);align-items: center;column-gap: 6px;row-gap: 6px;min-width: 0;margin: -4px;padding: 4px 4px 2px;border-radius: 6px;text-align: left;cursor: default;transition: background-color 100ms ease}button.ui-sfc__step-btn{cursor: pointer}button.ui-sfc__step-btn:hover{background: var(--ui-sfc-wash)}.ui-sfc__bar{position: relative;grid-column: 1 / -1;height: 2px;overflow: hidden;border-radius: 1px;background: var(--ui-sfc-line)}.ui-sfc__bar::after{content: "";position: absolute;inset: 0;border-radius: inherit;background: var(--ui-sfc-accent);transform: scaleX(0);transform-origin: left center;transition: transform 360ms var(--ui-sfc-ease)}.ui-sfc__step:not([data-state="upcoming"]) .ui-sfc__bar::after{transform: none}.ui-sfc__mark{display: inline-flex;flex: none;align-items: center;justify-content: flex-start;min-width: 12px;height: 16px;font-size: 10px;font-weight: 500;line-height: 16px;font-variant-numeric: tabular-nums;color: var(--ui-sfc-faint);transition: color 200ms ease}.ui-sfc__mark > span{animation: ui-sfc-in 260ms var(--ui-sfc-ease) both}.ui-sfc__mark .ui-sfc__draw{width: 12px;height: 12px;stroke-width: 2.4}.ui-sfc__step[data-state="current"] .ui-sfc__mark{color: var(--ui-sfc-accent)}.ui-sfc__step[data-state="done"] .ui-sfc__mark{color: var(--ui-sfc-accent)}.ui-sfc__step-label{overflow: hidden;min-width: 0;font-size: 10px;font-weight: 500;line-height: 16px;letter-spacing: 0.5px;text-transform: uppercase;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-sfc-muted);transition: color 200ms ease}.ui-sfc__step[data-state="done"] .ui-sfc__step-label{color: var(--ui-sfc-text)}.ui-sfc__step[data-state="current"] .ui-sfc__step-label{color: var(--ui-sfc-strong)}button.ui-sfc__step-btn:hover .ui-sfc__step-label{color: var(--ui-sfc-ink)}.ui-sfc__compact{display: none}.ui-sfc__compact-text{display: flex;min-width: 0;font-size: 10px;font-weight: 500;line-height: 16px;letter-spacing: 0.5px;text-transform: uppercase;font-variant-numeric: tabular-nums;color: var(--ui-sfc-muted);white-space: nowrap;animation: ui-sfc-in 280ms var(--ui-sfc-ease) both}.ui-sfc__compact-dot{margin: 0 6px;color: var(--ui-sfc-faint)}.ui-sfc__compact-title{overflow: hidden;text-overflow: ellipsis;color: var(--ui-sfc-strong)}.ui-sfc__card{display: grid;min-width: 0}.ui-sfc__viewport{position: relative;overflow: hidden;transition: height 360ms var(--ui-sfc-ease)}.ui-sfc__pane{padding: 20px 20px 20px;animation: ui-sfc-enter 360ms var(--ui-sfc-ease) both}.ui-sfc__pane[data-dir="-1"]{animation-name: ui-sfc-enter-back}.ui-sfc__pane[data-first]{animation: none}.ui-sfc__pane[data-pane="leaving"]{position: absolute;top: 0;left: 0;right: 0;pointer-events: none;animation: ui-sfc-leave 280ms var(--ui-sfc-ease) both}.ui-sfc__pane[data-pane="leaving"][data-dir="-1"]{animation-name: ui-sfc-leave-back}.ui-sfc__heading{font-size: 15px;font-weight: 500;line-height: 24px;color: var(--ui-sfc-strong);outline: none}.ui-sfc__desc{color: var(--ui-sfc-text);text-wrap: pretty}.ui-sfc__body{display: grid;gap: 16px;margin-top: 16px}.ui-sfc__field{display: grid;min-width: 0}.ui-sfc__label{display: flex;align-items: baseline;justify-content: space-between;gap: 8px;margin: 0 0 6px 2px;font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-sfc-text)}.ui-sfc__optional{font-weight: 400;color: var(--ui-sfc-muted)}.ui-sfc__control{min-width: 0}.ui-sfc__input, .ui-sfc__tags{display: flex;align-items: center;min-width: 0;height: 32px;border-radius: 8px;background: var(--ui-sfc-card);box-shadow: var(--ui-sfc-shadow);transition: box-shadow 120ms ease;cursor: text}.ui-sfc__input:hover, .ui-sfc__tags:hover{box-shadow: var(--ui-sfc-shadow-hover)}.ui-sfc__input:focus-within, .ui-sfc__tags:focus-within{outline: 2px solid var(--ui-sfc-focus);outline-offset: 1px}.ui-sfc__input[data-invalid], .ui-sfc__tags[data-invalid]{box-shadow: 0 0 0 0.5px var(--ui-sfc-danger), 0 1px 2px 0 rgba(229, 72, 77, 0.08)}.ui-sfc__input[data-invalid]:focus-within, .ui-sfc__tags[data-invalid]:focus-within{outline-color: rgba(229, 72, 77, 0.3)}.ui-sfc__input input, .ui-sfc__tags-input{flex: 1;min-width: 0;height: 32px;margin: 0;padding: 0 10px;border: 0;outline: none;background: none;font: inherit;color: var(--ui-sfc-ink)}.ui-sfc__input input::placeholder, .ui-sfc__tags-input::placeholder{color: var(--ui-sfc-faint)}.ui-sfc__prefix{flex: none;padding-left: 10px;color: var(--ui-sfc-muted);white-space: nowrap;user-select: none}.ui-sfc__prefix + input{padding-left: 0}.ui-sfc__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 260ms var(--ui-sfc-ease), opacity 200ms ease}.ui-sfc__fold[data-open]{grid-template-rows: 1fr;opacity: 1}.ui-sfc__fold > div{min-height: 0;overflow: hidden}.ui-sfc__msg, .ui-sfc__hint{padding: 6px 0 0 2px;font-size: 12px;line-height: 16px;text-wrap: pretty}.ui-sfc__msg{color: var(--ui-sfc-danger);animation: ui-sfc-in 240ms var(--ui-sfc-ease) both}.ui-sfc__hint{color: var(--ui-sfc-muted)}.ui-sfc__tags{gap: 4px;padding: 0 4px;overflow-x: auto;overflow-y: hidden;scrollbar-width: none;overscroll-behavior-x: contain}.ui-sfc__tags::-webkit-scrollbar{display: none}.ui-sfc__chips{display: contents;padding: 0;list-style: none}.ui-sfc__chip{display: inline-flex;flex: none;align-items: center;gap: 2px;max-width: 220px;height: 24px;padding: 0 3px 0 8px;overflow: hidden;border-radius: 6px;background: var(--ui-sfc-fill);font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-sfc-ink);white-space: nowrap;animation: ui-sfc-chip 260ms var(--ui-sfc-ease) both}.ui-sfc__chip[data-leaving]{pointer-events: none}.ui-sfc__chip-text{overflow: hidden;text-overflow: ellipsis}.ui-sfc__chip-x{display: grid;place-items: center;flex: none;width: 18px;height: 18px;border-radius: 4px;color: var(--ui-sfc-icon);transition: background-color 100ms ease, color 100ms ease}.ui-sfc__chip-x .ui-sfc__glyph{width: 12px;height: 12px;stroke-width: 1.9}.ui-sfc__chip-x:hover{background: var(--ui-sfc-fill);color: var(--ui-sfc-ink)}.ui-sfc__chip[data-leaving] .ui-sfc__chip-x{background: none}.ui-sfc__tags-input{flex: 1 0 140px;height: 24px;padding: 0 6px}.ui-sfc__tags-input:first-child{padding-left: 6px}.ui-sfc__choices{position: relative;display: grid;grid-auto-columns: minmax(0, 1fr);grid-auto-flow: column;gap: 8px}.ui-sfc__ring{position: absolute;top: 0;left: 0;z-index: 2;border-radius: 8px;box-shadow: 0 0 0 0.5px var(--ui-sfc-accent-line);opacity: 0;pointer-events: none;transition: transform 260ms var(--ui-sfc-ease), width 260ms var(--ui-sfc-ease), height 260ms var(--ui-sfc-ease), opacity 160ms ease}.ui-sfc__choice{position: relative;display: grid;align-content: start;gap: 2px;min-width: 0;padding: 10px 12px 12px;border-radius: 8px;background: var(--ui-sfc-card);box-shadow: var(--ui-sfc-shadow);text-align: left;transition: background-color 100ms ease}.ui-sfc__choice:hover{background: var(--ui-sfc-wash-soft)}.ui-sfc__choice[aria-checked="true"]{background: var(--ui-sfc-accent-fill)}.ui-sfc__choice:focus-visible{outline-offset: 3px}.ui-sfc__choice-top{display: flex;align-items: center;gap: 6px;min-width: 0}.ui-sfc__choice-title{overflow: hidden;font-weight: 500;color: var(--ui-sfc-strong);white-space: nowrap;text-overflow: ellipsis}.ui-sfc__badge{flex: none;padding: 0 5px;border-radius: 5px;background: var(--ui-sfc-accent-soft);font-size: 11px;font-weight: 500;line-height: 16px;color: var(--ui-sfc-accent)}.ui-sfc__radio{position: relative;flex: none;width: 14px;height: 14px;margin-left: auto;border-radius: 50%;box-shadow: inset 0 0 0 1px var(--ui-sfc-fill-strong);transition: box-shadow 200ms ease}.ui-sfc__radio::after{content: "";position: absolute;inset: 3.5px;border-radius: 50%;background: var(--ui-sfc-accent);transform: scale(0);transition: transform 280ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-sfc__choice[aria-checked="true"] .ui-sfc__radio{box-shadow: inset 0 0 0 1px var(--ui-sfc-accent)}.ui-sfc__choice[aria-checked="true"] .ui-sfc__radio::after{transform: scale(1)}.ui-sfc__choice-aside{font-variant-numeric: tabular-nums;color: var(--ui-sfc-ink)}.ui-sfc__choice-desc{margin-top: 2px;font-size: 12px;line-height: 16px;color: var(--ui-sfc-text);text-wrap: pretty}.ui-sfc__review{display: grid;border-radius: 8px;box-shadow: var(--ui-sfc-shadow)}.ui-sfc__review-row{display: grid;grid-template-columns: 96px minmax(0, 1fr) auto;align-items: baseline;gap: 12px;padding: 10px 8px 10px 12px}.ui-sfc__review-row + .ui-sfc__review-row{border-top: 0.5px solid var(--ui-sfc-line)}.ui-sfc__review dt{font-size: 12px;line-height: 20px;color: var(--ui-sfc-muted)}.ui-sfc__review dd{min-width: 0;color: var(--ui-sfc-ink);overflow-wrap: break-word}.ui-sfc__edit{height: 24px;margin: -2px 0;padding: 0 8px;border-radius: 6px;font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-sfc-text);transition: background-color 100ms ease, color 100ms ease}.ui-sfc__edit:hover{background: var(--ui-sfc-wash);color: var(--ui-sfc-ink)}.ui-sfc__success{display: grid;justify-items: center;padding: 16px 0 8px;text-align: center}.ui-sfc__success-check{display: grid;place-items: center;width: 36px;height: 36px;margin-bottom: 12px;border-radius: 50%;background: var(--ui-sfc-ok-soft);color: var(--ui-sfc-ok);animation: ui-sfc-pop 520ms cubic-bezier(0.34, 1.56, 0.64, 1) 120ms both}.ui-sfc__success-check .ui-sfc__draw{width: 18px;height: 18px;stroke-width: 2}.ui-sfc__success-check .ui-sfc__draw path{animation-delay: 320ms}.ui-sfc__success .ui-sfc__heading{animation: ui-sfc-in 340ms var(--ui-sfc-ease) 220ms both}.ui-sfc__success .ui-sfc__desc{max-width: 40ch;text-wrap: balance;animation: ui-sfc-in 340ms var(--ui-sfc-ease) 290ms both}.ui-sfc__success-actions{display: flex;flex-wrap: wrap;justify-content: center;gap: 8px;margin-top: 16px;animation: ui-sfc-in 340ms var(--ui-sfc-ease) 360ms both}.ui-sfc__foot-fold{position: sticky;bottom: 0;z-index: 3;display: grid;grid-template-rows: 1fr;border-radius: 0 0 10px 10px;background: var(--ui-sfc-card);transition: grid-template-rows 340ms var(--ui-sfc-ease), opacity 200ms ease}.ui-sfc__foot-fold[data-hidden]{grid-template-rows: 0fr;opacity: 0}.ui-sfc__foot{display: flex;align-items: center;gap: 12px;min-height: 0;overflow: hidden;padding: 0 12px;border-top: 0.5px solid var(--ui-sfc-line)}.ui-sfc__foot::before{content: "";flex: none;width: 0;height: 48px;margin-right: -12px}.ui-sfc__btn{display: inline-flex;align-items: center;justify-content: center;flex: none;height: 28px;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;white-space: nowrap;transition: background-color 100ms ease, opacity 200ms ease, transform 120ms ease, width 300ms var(--ui-sfc-ease), visibility 200ms}.ui-sfc__btn-ghost, .ui-sfc__btn-secondary{gap: 6px;padding: 0 10px 0 8px;background: var(--ui-sfc-card);box-shadow: var(--ui-sfc-shadow);color: var(--ui-sfc-strong)}.ui-sfc__btn-secondary{padding: 0 10px}.ui-sfc__btn-ghost .ui-sfc__glyph{color: var(--ui-sfc-icon)}.ui-sfc__btn-ghost:hover, .ui-sfc__btn-secondary:hover{background: var(--ui-sfc-white-hover)}.ui-sfc__btn-ghost[data-hidden]{opacity: 0;visibility: hidden}.ui-sfc__btn-primary{margin-left: auto;overflow: hidden;background: var(--ui-sfc-chip);color: var(--ui-sfc-on-chip)}.ui-sfc__btn-primary:hover{background: var(--ui-sfc-chip-hover)}.ui-sfc__btn:active{transform: scale(0.97)}.ui-sfc__btn-primary[aria-disabled="true"]{opacity: 0.35}.ui-sfc__btn-primary[data-busy]{opacity: 0.7;cursor: progress}.ui-sfc__btn-inner{display: inline-flex;flex: none;align-items: center;gap: 6px;padding: 0 10px}.ui-sfc__btn-label{animation: ui-sfc-in 240ms var(--ui-sfc-ease) both}.ui-sfc__spinner{width: 12px;height: 12px;border-radius: 50%;border: 1.5px solid currentColor;border-right-color: transparent;animation: ui-sfc-spin 700ms linear infinite}.ui-sfc__submit-error{min-width: 0;font-size: 12px;line-height: 16px;color: var(--ui-sfc-danger);animation: ui-sfc-in 240ms var(--ui-sfc-ease) both}@keyframes ui-sfc-in{from{opacity: 0;transform: translateY(3px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-sfc-enter{from{opacity: 0;transform: translateX(24px)}to{opacity: 1;transform: none}}@keyframes ui-sfc-enter-back{from{opacity: 0;transform: translateX(-24px)}to{opacity: 1;transform: none}}@keyframes ui-sfc-leave{to{opacity: 0;transform: translateX(-24px)}}@keyframes ui-sfc-leave-back{to{opacity: 0;transform: translateX(24px)}}@keyframes ui-sfc-draw{to{stroke-dashoffset: 0}}@keyframes ui-sfc-pop{0%{opacity: 0;transform: scale(0.4)}60%{opacity: 1;transform: scale(1.08)}100%{opacity: 1;transform: scale(1)}}@keyframes ui-sfc-chip{from{opacity: 0;transform: scale(0.85)}to{opacity: 1;transform: none}}@keyframes ui-sfc-spin{to{transform: rotate(360deg)}}@container (max-width: 420px){.ui-sfc__head{padding: 14px 16px 0}.ui-sfc__compact{display: flex;margin-bottom: 8px}.ui-sfc__step-btn{row-gap: 0;padding-bottom: 4px}.ui-sfc__mark, .ui-sfc__step-label{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-sfc__pane{padding: 16px 16px 16px}.ui-sfc__foot{padding: 0 12px}.ui-sfc__choices{grid-template-columns: minmax(0, 1fr);grid-auto-flow: row}.ui-sfc__choice{grid-template-columns: minmax(0, 1fr) auto;column-gap: 10px;padding: 10px 12px}.ui-sfc__choice-top{grid-column: 1}.ui-sfc__choice-aside{grid-column: 2;grid-row: 1;align-self: center}.ui-sfc__choice-desc{grid-column: 1 / -1;margin-top: 0}.ui-sfc__radio{order: -1;margin-left: 0;margin-right: 2px}.ui-sfc__review-row{grid-template-columns: minmax(0, 1fr) auto;row-gap: 0}.ui-sfc__review dt{grid-column: 1}.ui-sfc__review dd{grid-column: 1;grid-row: 2}.ui-sfc__edit{grid-column: 2;grid-row: 1 / span 2;align-self: center;margin: 0}}@media (hover: none) and (pointer: coarse){.ui-sfc__input input, .ui-sfc__tags-input, .ui-sfc__prefix{font-size: 16px}.ui-sfc__input, .ui-sfc__tags, .ui-sfc__input input{height: 40px}.ui-sfc__chip{height: 30px}.ui-sfc__chip-x{width: 26px;height: 26px}.ui-sfc__tags-input{height: 30px}.ui-sfc__btn{height: 36px}.ui-sfc__foot::before{height: 56px}.ui-sfc__edit{height: 34px;padding: 0 12px}.ui-sfc__step-btn{padding-top: 10px;padding-bottom: 8px;margin: -10px -4px -8px}}@media (prefers-reduced-motion: reduce){.ui-sfc *, .ui-sfc *::before, .ui-sfc *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-sfc{--ui-sfc-card: #1c1c1e;--ui-sfc-ink: rgba(255, 255, 255, 0.9);--ui-sfc-strong: #ffffff;--ui-sfc-text: rgba(255, 255, 255, 0.62);--ui-sfc-muted: rgba(255, 255, 255, 0.46);--ui-sfc-faint: rgba(255, 255, 255, 0.3);--ui-sfc-icon: rgba(255, 255, 255, 0.5);--ui-sfc-line: rgba(255, 255, 255, 0.08);--ui-sfc-fill: rgba(255, 255, 255, 0.08);--ui-sfc-fill-strong: rgba(255, 255, 255, 0.16);--ui-sfc-wash: rgba(255, 255, 255, 0.04);--ui-sfc-wash-soft: rgba(255, 255, 255, 0.025);--ui-sfc-accent: #4d8dff;--ui-sfc-accent-soft: rgba(77, 141, 255, 0.14);--ui-sfc-accent-fill: rgba(77, 141, 255, 0.09);--ui-sfc-accent-line: rgba(77, 141, 255, 0.5);--ui-sfc-ok: #3ec27a;--ui-sfc-ok-soft: rgba(62, 194, 122, 0.14);--ui-sfc-danger: #ff6369;--ui-sfc-chip: rgba(255, 255, 255, 0.9);--ui-sfc-chip-hover: rgba(255, 255, 255, 0.8);--ui-sfc-on-chip: #111113;--ui-sfc-white-hover: #232326;--ui-sfc-focus: rgba(77, 141, 255, 0.5);--ui-sfc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-sfc-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.4)}`;
const C = (e)=>e.toLowerCase().normalize(`NFKD`).replace(/[̀-ͯ]/g, ``).replace(/[^a-z0-9]+/g, `-`).replace(/^-+|-+$/g, ``).slice(0, 32);
const options = [
    {
        value: `free`,
        title: `Free`,
        aside: `$0`,
        description: `Up to 3 members and 5 projects`
    },
    {
        value: `pro`,
        title: `Pro`,
        aside: `$12\xA0/\xA0seat`,
        description: `Unlimited projects, guests and history`,
        badge: `Popular`
    },
    {
        value: `business`,
        title: `Business`,
        aside: `$24\xA0/\xA0seat`,
        description: `SSO, audit log and priority support`
    }
];
const T = `Northwind Studio`;
function EComponent({ ctx, autoplay }) {
    let { values, setValues } = ctx;
    let oRef = n.useRef(0);
    let onFocus = ()=>{
        clearTimeout(oRef.current);
        autoplay.current = false;
    };
    let c = (e)=>setValues({
            name: e,
            ...values.slugEdited ? {} : {
                slug: C(e)
            }
        });
    n.useEffect(()=>{
        if (!autoplay.current) {
            return;
        }
        let e = 0;
        let n = ()=>{
            e += 1;
            setValues({
                name: T.slice(0, e),
                slug: C(T.slice(0, e))
            });
            if (e < 16) {
                oRef.current = window.setTimeout(n, 55 + Math.random() * 45);
            } else {
                autoplay.current = false;
            }
        };
        oRef.current = window.setTimeout(n, 650);
        return ()=>clearTimeout(oRef.current);
    }, []);
    return <><H1Component name={`name`} label={`Workspace name`}><G1Component value={values.name} placeholder={`Acme Inc.`} maxLength={48} onFocus={onFocus} onChange={(e)=>c(e.target.value)}/></H1Component><H1Component name={`slug`} label={`Workspace URL`} hint={`Lowercase letters, numbers and dashes`}><G1Component prefix={`affect.app/`} value={values.slug} placeholder={`acme`} maxLength={32} onFocus={onFocus} onChange={(e)=>setValues({
            slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ``),
            slugEdited: true
        })}/></H1Component></>;
}
function DComponent() {
    let eRef = n.useRef(true);
    return <div className={`stepper-form-demo`}><M1Component steps={[
        {
            id: `workspace`,
            title: `Workspace`,
            heading: `Name your workspace`,
            description: `This is where your team's projects live.`,
            render: (ctx)=><EComponent ctx={ctx} autoplay={eRef}/>,
            validate: (e)=>({
                    name: e.name.trim().length < 2 ? `Give your workspace a name` : undefined,
                    slug: e.slug.length < 3 ? `Use at least 3 characters` : undefined
                })
        },
        {
            id: `team`,
            title: `Team`,
            heading: `Invite your teammates`,
            description: `They'll get an email with a link to join.`,
            render: ({ values, setValues })=><H1Component name={`invites`} label={`Email addresses`} hint={`Press Enter or comma to add`} optional><V1Component value={values.invites} max={20} onChange={(invites)=>setValues({
                        invites
                    })}/></H1Component>
        },
        {
            id: `plan`,
            title: `Plan`,
            heading: `Pick a plan`,
            description: `Every plan starts with a 14‑day trial.`,
            render: ({ values, setValues })=><Y1Component label={`Plan`} value={values.plan} options={options} onChange={(plan)=>setValues({
                        plan
                    })}/>
        },
        {
            id: `review`,
            title: `Review`,
            heading: `Review and create`,
            description: `Everything can be changed later in settings.`,
            render: ({ values, goTo })=>{
                let n = options.find((t)=>t.value === values.plan);
                let length = values.invites.length;
                return <B1Component onEdit={goTo} rows={[
                    {
                        label: `Workspace`,
                        value: <>{values.name}<span className={`sfc-demo__sub`}>{`affect.app/`}{values.slug}</span></>,
                        step: `workspace`
                    },
                    {
                        label: `Teammates`,
                        value: length ? <>{length}{` `}{length === 1 ? `invite` : `invites`}<span className={`sfc-demo__sub`}>{values.invites.join(`, `)}</span></> : `Just you for now`,
                        step: `team`
                    },
                    {
                        label: `Plan`,
                        value: <>{n.title}<span className={`sfc-demo__muted`}>{` · `}{n.aside}</span></>,
                        step: `plan`
                    }
                ]}/>;
            }
        }
    ]} initialValues={{
        name: ``,
        slug: ``,
        slugEdited: false,
        invites: [],
        plan: `pro`
    }} submitLabel={`Create workspace`} onComplete={()=>new Promise((resolve)=>setTimeout(resolve, 1100))} success={(t, n)=><X1Component title={`${t.name} is ready`} description={t.invites.length ? `${t.invites.length} ${t.invites.length === 1 ? `invite is` : `invites are`} on the way. Your trial runs for 14\u00a0days.` : `Your trial runs for 14\xA0days.`}><button type={`button`} className={`ui-sfc__btn ui-sfc__btn-secondary`} onClick={()=>{
            eRef.current = true;
            n();
        }}>{`Start over`}</button></X1Component>}/></div>;
}
export { DComponent as default };
