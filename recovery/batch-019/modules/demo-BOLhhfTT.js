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
const L1Component = ({ d, className })=><svg viewBox={`0 0 24 24`} className={i(`ui-sf__glyph`, className)} aria-hidden={`true`}><path d={d}/></svg>;
const u = {
    check: `M5.5 12.5l4 4L18.5 8`,
    close: `M7 7l10 10M17 7 7 17`,
    back: `M14.5 6l-6 6 6 6`
};
const D1Component = ({ className })=><svg viewBox={`0 0 24 24`} className={i(`ui-sf__draw`, className)} aria-hidden={`true`}><path d={u.check} pathLength={1}/></svg>;
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
    let VRef = n.useRef(null);
    let HRef = n.useRef(null);
    let URef = n.useRef(null);
    let WRef = n.useRef(null);
    let GRef = n.useRef(false);
    let KRef = n.useRef(false);
    let qRef = n.useRef({});
    let report = n.useCallback((e, t)=>{
        qRef.current = {
            ...qRef.current,
            [e]: t ?? undefined
        };
    }, []);
    let J = n.useId();
    let index = R ? steps_length : C;
    let [X, setX] = n.useState({
        index,
        from: null,
        dir: 1
    });
    if (X.index !== index) {
        setX({
            index,
            from: X.index,
            dir: index > X.index ? 1 : -1
        });
    }
    n.useEffect(()=>{
        if (X.from === null) {
            return;
        }
        let e = window.setTimeout(()=>setX((e)=>({
                    ...e,
                    from: null
                })), 420);
        return ()=>clearTimeout(e);
    }, [
        X.index,
        X.from
    ]);
    let setValues = n.useCallback((e)=>{
        ERef.current = {
            ...ERef.current,
            ...e
        };
        setW(ERef.current);
    }, []);
    let Q = (t)=>{
        let n = Math.max(0, Math.min(steps_length - 1, t));
        if (n !== C) {
            GRef.current = true;
            KRef.current = true;
            qRef.current = {};
            if (step === undefined) {
                setY(n);
            }
            onStepChange?.(n);
            setD((e)=>Math.max(e, n));
            setI(``);
            setNe(`Step ${n + 1} of ${steps_length}: ${steps[n].title}`);
        }
    };
    let ae = ()=>{
        let t = {
            ...qRef.current,
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
        if (!(P || R || !ae())) {
            if (C < steps_length - 1) {
                if (M !== null && M > C) {
                    setM(null);
                    Q(M);
                } else {
                    Q(C + 1);
                }
                return;
            }
            setP(true);
            setI(``);
            try {
                await onComplete?.(ERef.current);
                GRef.current = true;
                KRef.current = true;
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
        Q(C - 1);
    };
    let goTo = (t)=>{
        let n = steps.findIndex((e)=>e.id === t);
        if (!(n < 0 || n === C || n > C && !ae())) {
            setM(n < C ? C : null);
            Q(n);
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
        GRef.current = true;
        KRef.current = true;
        qRef.current = {};
        if (step === undefined) {
            setY(initialStep);
        }
        onStepChange?.(initialStep);
    };
    n.useEffect(()=>{
        if (!GRef.current) {
            return;
        }
        GRef.current = false;
        let e = HRef.current?.querySelector(`[data-pane="current"]`);
        (e?.querySelector(`input:not([type="hidden"]):not(:disabled), textarea, select`) ?? e?.querySelector(`.ui-sf__heading`))?.focus({
            preventScroll: true
        });
    }, [
        index
    ]);
    n.useEffect(()=>{
        if (j) {
            HRef.current?.querySelector(`[data-pane="current"] [aria-invalid="true"]`)?.focus({
                preventScroll: true
            });
        }
    }, [
        j
    ]);
    n.useLayoutEffect(()=>{
        let HRef_current = HRef.current;
        let t = HRef_current?.querySelector(`[data-pane="current"]`);
        if (!HRef_current || !t) {
            return;
        }
        let n = !HRef_current.dataset.ready;
        let r = ()=>HRef_current.style.height = `${t.offsetHeight}px`;
        if (n) {
            HRef_current.style.transition = `none`;
        }
        r();
        if (n) {
            HRef_current.dataset.ready = `1`;
            HRef_current.offsetWidth;
            HRef_current.style.transition = ``;
        }
        let i = new ResizeObserver(r);
        i.observe(t);
        return ()=>i.disconnect();
    }, [
        index
    ]);
    n.useLayoutEffect(()=>{
        let URef_current = URef.current;
        let WRef_current = WRef.current;
        if (!URef_current || !WRef_current) {
            return;
        }
        let n = ()=>URef_current.style.width = `${WRef_current.offsetWidth}px`;
        n();
        let r = new ResizeObserver(n);
        r.observe(WRef_current);
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
        next: ()=>VRef.current?.requestSubmit()
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
        return <><h2 className={`ui-sf__heading`} tabIndex={-1} id={`${J}-h${t}`}>{n.heading ?? n.title}</h2>{n.description && <p className={`ui-sf__desc`}>{n.description}</p>}<div className={`ui-sf__body`}>{n.render(i)}</div></>;
    };
    let ge = X.from !== null && X.from !== X.index ? [
        X.from,
        X.index
    ] : [
        X.index
    ];
    return <div className={i(`ui-sf`, className)} style={{
        "--ui-sf-n": steps_length
    }}><style href={`ui-stepper-form`} precedence={`default`}>{S}</style><div className={`ui-sf__head`}><div className={`ui-sf__steps`}><ol className={`ui-sf__list`} aria-label={`Progress`}>{steps.map((e, t)=>{
        let n = R || t < k && t !== C ? `done` : t === C ? `current` : `upcoming`;
        let i = !R && !P && t !== C && t <= k;
        let a = <><span className={`ui-sf__mark`}>{n === `done` ? <D1Component key={`check`}/> : <span key={`num`}>{t + 1}{`.`}</span>}</span><span className={`ui-sf__step-label`}>{e.title}</span><span className={`ui-sf__sr`}>{n === `done` ? ` (done)` : n === `current` ? ` (current)` : ``}</span></>;
        return <li key={e.id} className={`ui-sf__step`} data-state={n} aria-current={!R && t === C ? `step` : undefined}>{i ? <button type={`button`} className={`ui-sf__step-btn`} onClick={()=>goTo(e.id)}>{a}</button> : <span className={`ui-sf__step-btn`}>{a}</span>}</li>;
    })}</ol></div><div className={`ui-sf__compact`} aria-hidden={`true`}><span key={R ? `done` : C} className={`ui-sf__compact-text`}>{R ? <>{`All `}{steps_length}{` steps done`}</> : <>{`Step `}{C + 1}{` of `}{steps_length}<span className={`ui-sf__compact-dot`}>{`·`}</span><span className={`ui-sf__compact-title`}>{$.title}</span></>}</span></div></div><form ref={VRef} className={`ui-sf__card`} noValidate onSubmit={onSubmit} aria-labelledby={R ? undefined : `${J}-h${C}`}><div ref={HRef} className={`ui-sf__viewport`}>{ge.map((e)=>{
        let t = e === X.index;
        return <div key={e} className={`ui-sf__pane`} data-pane={t ? `current` : `leaving`} data-dir={X.dir} data-first={!KRef.current || undefined} inert={!t} aria-hidden={!t || undefined}><FContext.Provider value={{
            errors: t && e === C ? errors : {},
            shake: t ? j : 0,
            report
        }}>{HeComponent(e)}</FContext.Provider></div>;
    })}</div><div className={`ui-sf__foot-fold`} data-hidden={R || undefined}><div className={`ui-sf__foot`} inert={R}><button type={`button`} className={`ui-sf__btn ui-sf__btn-ghost`} data-hidden={C === 0 || undefined} disabled={C === 0 || P} onClick={onClick}><L1Component d={u.back}/>{`Back`}</button>{I && <span className={`ui-sf__submit-error`} role={`alert`}>{I}</span>}<button ref={URef} type={`submit`} className={`ui-sf__btn ui-sf__btn-primary`} aria-disabled={!de || P || undefined} data-busy={P || undefined}><span ref={WRef} className={`ui-sf__btn-inner`}>{P && <span className={`ui-sf__spinner`} aria-hidden={`true`}/>}<span key={pe} className={`ui-sf__btn-label`}>{pe}</span></span></button></div></div></form><span className={`ui-sf__sr`} aria-live={`polite`}>{ne}</span></div>;
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
    return <div className={`ui-sf__field`} data-invalid={invalid || undefined}><label className={`ui-sf__label`} htmlFor={_}>{label_1}{optional && <span className={`ui-sf__optional`}>{`Optional`}</span>}</label><div ref={vRef} className={`ui-sf__control`}><PContext.Provider value={{
        id: _,
        invalid,
        describedBy: invalid ? `${_}-msg` : hint ? `${_}-hint` : undefined,
        flag
    }}>{children}</PContext.Provider></div><div className={`ui-sf__fold`} data-open={invalid || undefined}><div><p key={bRef.current} className={`ui-sf__msg`} id={`${_}-msg`}>{bRef.current}</p></div></div>{hint && <div className={`ui-sf__fold`} data-open={!invalid || undefined}><div><p className={`ui-sf__hint`} id={`${_}-hint`}>{hint}</p></div></div>}</div>;
}
function G1Component({ prefix, className, ...rest }) {
    let o = n.useContext(PContext);
    return <div className={i(`ui-sf__input`, className)} data-invalid={o?.invalid || undefined}>{prefix && <span className={`ui-sf__prefix`} aria-hidden={`true`}>{prefix}</span>}<input id={o?.id} aria-invalid={o?.invalid || undefined} aria-describedby={o?.describedBy} autoComplete={`off`} spellCheck={false} {...rest}/></div>;
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
    let b = (e)=>{
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
    let x = (e)=>{
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
    return <div className={`ui-sf__tags`} data-invalid={c?.invalid || undefined} onClick={(e)=>e.target === e.currentTarget && gRef.current?.focus()}>{value.length > 0 && <ul ref={vRef} className={`ui-sf__chips`} aria-label={`Added`}>{value.map((e)=><li key={e} className={`ui-sf__chip`} data-entry={e} data-leaving={m.includes(e) || undefined}><span className={`ui-sf__chip-text`} title={e}>{e}</span><button type={`button`} className={`ui-sf__chip-x`} aria-label={`Remove ${e}`} onClick={()=>x(e)}><L1Component d={u.close}/></button></li>)}</ul>}<input ref={gRef} id={c?.id} type={`email`} inputMode={`email`} autoComplete={`off`} spellCheck={false} className={`ui-sf__tags-input`} placeholder={value.length ? `Add another` : placeholder} value={d} aria-invalid={c?.invalid || undefined} aria-describedby={c?.describedBy} onChange={(e)=>{
        setD(e.target.value);
        c?.flag(null);
    }} onKeyDown={(t)=>{
        if (t.key === `Enter` && d.trim() || t.key === `,` || t.key === `;`) {
            t.preventDefault();
            b(d);
        } else if (t.key === `Backspace` && !d && value.length) {
            t.preventDefault();
            x(value[value.length - 1]);
        }
    }} onPaste={(e)=>{
        let t = e.clipboardData.getData(`text`);
        if (/[\s,;]/.test(t.trim())) {
            e.preventDefault();
            b(`${d} ${t}`);
        }
    }} onBlur={()=>d.trim() && b(d)}/></div>;
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
    return <div ref={oRef} className={`ui-sf__choices`} role={`radiogroup`} aria-label={label} onKeyDown={(n)=>{
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
    }}><span ref={sRef} className={`ui-sf__ring`} aria-hidden={`true`}/>{options.map((n)=>{
        let i = n.value === value;
        return <button key={n.value} type={`button`} role={`radio`} aria-checked={i} tabIndex={i ? 0 : -1} data-value={n.value} className={`ui-sf__choice`} onClick={()=>onChange(n.value)}><span className={`ui-sf__choice-top`}><span className={`ui-sf__choice-title`}>{n.title}</span>{n.badge && <span className={`ui-sf__badge`}>{n.badge}</span>}<span className={`ui-sf__radio`} aria-hidden={`true`}/></span>{n.aside && <span className={`ui-sf__choice-aside`}>{n.aside}</span>}{n.description && <span className={`ui-sf__choice-desc`}>{n.description}</span>}</button>;
    })}</div>;
}
function B1Component({ rows, onEdit }) {
    return <dl className={`ui-sf__review`}>{rows.map((e)=><div key={e.label} className={`ui-sf__review-row`}><dt>{e.label}</dt><dd>{e.value}</dd>{e.step && onEdit && <button type={`button`} className={`ui-sf__edit`} aria-label={`Edit ${e.label.toLowerCase()}`} onClick={()=>onEdit(e.step)}>{`Edit`}</button>}</div>)}</dl>;
}
function X1Component({ title, description, children }) {
    return <div className={`ui-sf__success`}><span className={`ui-sf__success-check`}><D1Component/></span><h2 className={`ui-sf__heading`} tabIndex={-1}>{title}</h2>{description && <p className={`ui-sf__desc`}>{description}</p>}{children && <div className={`ui-sf__success-actions`}>{children}</div>}</div>;
}
var S = `.ui-sf{--ui-sf-tray: #f0f0f0;--ui-sf-card: #ffffff;--ui-sf-line: #ececec;--ui-sf-ink: #171717;--ui-sf-text: #404040;--ui-sf-muted: #8f8f8f;--ui-sf-faint: #b5b5b5;--ui-sf-edge: #dcdcdf;--ui-sf-field: #ffffff;--ui-sf-hover: #f2f2f3;--ui-sf-chip: #f2f2f3;--ui-sf-track: #e2e2e5;--ui-sf-accent: #2f6bff;--ui-sf-accent-soft: rgba(47, 107, 255, 0.05);--ui-sf-danger: #e5484d;--ui-sf-on-ink: #ffffff;--ui-sf-focus: rgba(23, 23, 23, 0.22);--ui-sf-ring: rgba(23, 23, 23, 0.08);--ui-sf-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;container-type: inline-size;display: grid;width: 100%;max-width: 520px;padding: 4px;border-radius: 20px;background: var(--ui-sf-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13.5px;line-height: 1.45;color: var(--ui-sf-text);-webkit-font-smoothing: antialiased}.ui-sf *, .ui-sf *::before, .ui-sf *::after{box-sizing: border-box}:where(.ui-sf) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-sf) svg{display: block;flex: none}:where(.ui-sf) :is(h2, p, dl, dd, ul, ol){margin: 0}.ui-sf button:focus-visible{outline: 2px solid var(--ui-sf-focus);outline-offset: 2px}.ui-sf__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-sf__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-sf__draw{width: 14px;height: 14px;fill: none;stroke: currentColor;stroke-width: 2.6;stroke-linecap: round;stroke-linejoin: round}.ui-sf__draw path{stroke-dasharray: 1;stroke-dashoffset: 1;animation: ui-sf-draw 360ms var(--ui-sf-ease) 80ms forwards}.ui-sf__head{padding: 6px 6px 4px}.ui-sf__steps{position: relative}.ui-sf__list{display: grid;grid-template-columns: repeat(var(--ui-sf-n), minmax(0, 1fr));padding: 0;list-style: none}.ui-sf__step{position: relative;display: grid;justify-items: center;min-width: 0}.ui-sf__step-btn{display: inline-flex;align-items: center;gap: 5px;min-width: 0;max-width: 100%;height: 26px;padding: 0 6px;border-radius: 8px;line-height: 1;cursor: default;transition: background-color 200ms ease}button.ui-sf__step-btn{cursor: pointer}button.ui-sf__step-btn:hover{background: var(--ui-sf-ring)}.ui-sf__mark{display: inline-flex;flex: none;align-items: center;justify-content: center;min-width: 14px;font-size: 12.5px;line-height: 1;font-variant-numeric: tabular-nums;color: var(--ui-sf-faint);transition: color 260ms ease}.ui-sf__mark > span{line-height: 1;animation: ui-sf-in 260ms var(--ui-sf-ease) both}.ui-sf__mark .ui-sf__draw{width: 13px;height: 13px;stroke-width: 2.4}.ui-sf__step[data-state="current"] .ui-sf__mark{color: var(--ui-sf-ink)}.ui-sf__step[data-state="done"] .ui-sf__mark{color: var(--ui-sf-ink)}.ui-sf__step-label{overflow: hidden;max-width: 100%;font-size: 12.5px;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-sf-muted);transition: color 260ms ease}.ui-sf__step[data-state="done"] .ui-sf__step-label{color: var(--ui-sf-text)}.ui-sf__step[data-state="current"] .ui-sf__step-label{color: var(--ui-sf-ink);font-weight: 500}button.ui-sf__step-btn:hover .ui-sf__step-label{color: var(--ui-sf-ink)}.ui-sf__compact{display: none;gap: 8px;padding: 0 6px}.ui-sf__compact-text{display: flex;align-items: baseline;min-width: 0;font-size: 12.5px;font-variant-numeric: tabular-nums;color: var(--ui-sf-muted);white-space: nowrap;animation: ui-sf-in 280ms var(--ui-sf-ease) both}.ui-sf__compact-dot{margin: 0 6px;color: var(--ui-sf-faint)}.ui-sf__compact-title{overflow: hidden;text-overflow: ellipsis;color: var(--ui-sf-ink);font-weight: 500}.ui-sf__card{display: grid;border-radius: 16px;background: var(--ui-sf-card);box-shadow: 0 0 0 1px var(--ui-sf-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-sf__viewport{position: relative;overflow: hidden;transition: height 380ms var(--ui-sf-ease)}.ui-sf__pane{padding: 20px 20px 8px;animation: ui-sf-enter 380ms var(--ui-sf-ease) both}.ui-sf__pane[data-dir="-1"]{animation-name: ui-sf-enter-back}.ui-sf__pane[data-first]{animation: none}.ui-sf__pane[data-pane="leaving"]{position: absolute;top: 0;left: 0;right: 0;pointer-events: none;animation: ui-sf-leave 300ms var(--ui-sf-ease) both}.ui-sf__pane[data-pane="leaving"][data-dir="-1"]{animation-name: ui-sf-leave-back}.ui-sf__heading{font-size: 16px;font-weight: 600;line-height: 1.3;letter-spacing: -0.01em;color: var(--ui-sf-ink);outline: none}.ui-sf__desc{margin-top: 4px;color: var(--ui-sf-muted);text-wrap: pretty}.ui-sf__body{display: grid;gap: 14px;margin-top: 18px}.ui-sf__field{display: grid;min-width: 0}.ui-sf__label{display: flex;align-items: baseline;justify-content: space-between;gap: 8px;margin-bottom: 6px;font-size: 12.5px;font-weight: 500;color: var(--ui-sf-ink)}.ui-sf__optional{font-weight: 400;color: var(--ui-sf-muted)}.ui-sf__control{min-width: 0}.ui-sf__input, .ui-sf__tags{display: flex;align-items: center;min-width: 0;min-height: 38px;border-radius: 10px;background: var(--ui-sf-field);box-shadow: inset 0 0 0 1px var(--ui-sf-edge), 0 1px 2px rgba(0, 0, 0, 0.03);transition: box-shadow 180ms ease;cursor: text}.ui-sf__input:hover, .ui-sf__tags:hover{box-shadow: inset 0 0 0 1px var(--ui-sf-faint), 0 1px 2px rgba(0, 0, 0, 0.03)}.ui-sf__input:focus-within, .ui-sf__tags:focus-within{box-shadow: inset 0 0 0 1px var(--ui-sf-ink), 0 0 0 3px var(--ui-sf-ring)}.ui-sf__input[data-invalid], .ui-sf__tags[data-invalid]{box-shadow: inset 0 0 0 1px var(--ui-sf-danger)}.ui-sf__input[data-invalid]:focus-within, .ui-sf__tags[data-invalid]:focus-within{box-shadow: inset 0 0 0 1px var(--ui-sf-danger), 0 0 0 3px rgba(229, 72, 77, 0.12)}.ui-sf__input input, .ui-sf__tags-input{flex: 1;min-width: 0;height: 36px;padding: 0 12px;border: 0;outline: none;background: none;font: inherit;font-size: 14px;color: var(--ui-sf-ink)}.ui-sf__input input::placeholder, .ui-sf__tags-input::placeholder{color: var(--ui-sf-faint)}.ui-sf__prefix{flex: none;padding-left: 12px;font-size: 14px;color: var(--ui-sf-muted);white-space: nowrap;user-select: none}.ui-sf__prefix + input{padding-left: 1px}.ui-sf__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 260ms var(--ui-sf-ease), opacity 200ms ease}.ui-sf__fold[data-open]{grid-template-rows: 1fr;opacity: 1}.ui-sf__fold > div{min-height: 0;overflow: hidden}.ui-sf__msg, .ui-sf__hint{padding-top: 6px;font-size: 12.5px;text-wrap: pretty}.ui-sf__msg{color: var(--ui-sf-danger);animation: ui-sf-in 240ms var(--ui-sf-ease) both}.ui-sf__hint{color: var(--ui-sf-muted)}.ui-sf__tags{flex-wrap: wrap;gap: 6px;padding: 5px}.ui-sf__chips{display: contents;padding: 0;list-style: none}.ui-sf__chip{display: inline-flex;align-items: center;gap: 2px;min-width: 0;max-width: 100%;height: 28px;padding: 0 2px 0 10px;overflow: hidden;border-radius: 8px;background: var(--ui-sf-chip);font-size: 13px;color: var(--ui-sf-ink);white-space: nowrap;animation: ui-sf-chip 300ms var(--ui-sf-ease) both}.ui-sf__chip[data-leaving]{pointer-events: none}.ui-sf__chip-text{overflow: hidden;text-overflow: ellipsis}.ui-sf__chip-x{display: grid;place-items: center;flex: none;width: 24px;height: 24px;border-radius: 6px;color: var(--ui-sf-muted);transition: background-color 140ms ease, color 140ms ease}.ui-sf__chip-x .ui-sf__glyph{width: 13px;height: 13px}.ui-sf__chip-x:hover{background: var(--ui-sf-track);color: var(--ui-sf-ink)}.ui-sf__chip[data-leaving] .ui-sf__chip-x{background: none}.ui-sf__tags-input{flex: 1 1 140px;height: 28px;padding: 0 7px}.ui-sf__choices{position: relative;display: grid;grid-auto-columns: minmax(0, 1fr);grid-auto-flow: column;gap: 8px}.ui-sf__ring{position: absolute;top: 0;left: 0;z-index: 2;border-radius: 12px;box-shadow: inset 0 0 0 1.5px var(--ui-sf-accent), 0 0 0 3px rgba(47, 107, 255, 0.1);opacity: 0;pointer-events: none;transition: transform 380ms var(--ui-sf-ease), width 380ms var(--ui-sf-ease), height 380ms var(--ui-sf-ease), opacity 200ms ease}.ui-sf__choice{position: relative;display: grid;align-content: start;gap: 2px;min-width: 0;padding: 12px;border-radius: 12px;background: var(--ui-sf-field);box-shadow: inset 0 0 0 1px var(--ui-sf-edge);text-align: left;transition: background-color 200ms ease, box-shadow 200ms ease}.ui-sf__choice:hover{box-shadow: inset 0 0 0 1px var(--ui-sf-faint)}.ui-sf__choice[aria-checked="true"]{background: var(--ui-sf-accent-soft);box-shadow: inset 0 0 0 1px transparent}.ui-sf__choice:focus-visible{outline-offset: 3px}.ui-sf__choice-top{display: flex;align-items: center;gap: 6px;min-width: 0}.ui-sf__choice-title{overflow: hidden;font-weight: 600;color: var(--ui-sf-ink);white-space: nowrap;text-overflow: ellipsis}.ui-sf__badge{flex: none;padding: 1px 6px;border-radius: 6px;background: var(--ui-sf-chip);font-size: 11px;font-weight: 500;color: var(--ui-sf-text)}.ui-sf__radio{position: relative;flex: none;width: 16px;height: 16px;margin-left: auto;border-radius: 50%;box-shadow: inset 0 0 0 1.5px var(--ui-sf-edge);transition: box-shadow 220ms ease}.ui-sf__radio::after{content: "";position: absolute;inset: 4px;border-radius: 50%;background: var(--ui-sf-accent);transform: scale(0);transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-sf__choice[aria-checked="true"] .ui-sf__radio{box-shadow: inset 0 0 0 1.5px var(--ui-sf-accent)}.ui-sf__choice[aria-checked="true"] .ui-sf__radio::after{transform: scale(1)}.ui-sf__choice-aside{font-size: 13px;font-variant-numeric: tabular-nums;color: var(--ui-sf-ink)}.ui-sf__choice-desc{margin-top: 4px;font-size: 12px;line-height: 1.4;color: var(--ui-sf-muted);text-wrap: pretty}.ui-sf__review{display: grid;border-radius: 12px;box-shadow: inset 0 0 0 1px var(--ui-sf-line)}.ui-sf__review-row{display: grid;grid-template-columns: 96px minmax(0, 1fr) auto;align-items: baseline;gap: 12px;padding: 11px 8px 11px 14px}.ui-sf__review-row + .ui-sf__review-row{border-top: 1px solid var(--ui-sf-line)}.ui-sf__review dt{font-size: 12.5px;color: var(--ui-sf-muted)}.ui-sf__review dd{min-width: 0;color: var(--ui-sf-ink);overflow-wrap: break-word}.ui-sf__edit{height: 26px;margin: -4px 0;padding: 0 8px;border-radius: 7px;font-size: 12.5px;font-weight: 500;color: var(--ui-sf-text);transition: background-color 140ms ease, color 140ms ease}.ui-sf__edit:hover{background: var(--ui-sf-hover);color: var(--ui-sf-ink)}.ui-sf__success{display: grid;justify-items: center;padding: 20px 0 14px;text-align: center}.ui-sf__success-check{display: grid;place-items: center;width: 44px;height: 44px;margin-bottom: 14px;border-radius: 50%;background: var(--ui-sf-ink);color: var(--ui-sf-on-ink);box-shadow: 0 0 0 6px var(--ui-sf-ring);animation: ui-sf-pop 520ms cubic-bezier(0.34, 1.56, 0.64, 1) 120ms both}.ui-sf__success-check .ui-sf__draw{width: 20px;height: 20px}.ui-sf__success-check .ui-sf__draw path{animation-delay: 320ms}.ui-sf__success .ui-sf__heading{animation: ui-sf-in 340ms var(--ui-sf-ease) 220ms both}.ui-sf__success .ui-sf__desc{max-width: 40ch;text-wrap: balance;animation: ui-sf-in 340ms var(--ui-sf-ease) 290ms both}.ui-sf__success-actions{display: flex;flex-wrap: wrap;justify-content: center;gap: 8px;margin-top: 16px;animation: ui-sf-in 340ms var(--ui-sf-ease) 360ms both}.ui-sf__foot-fold{position: sticky;bottom: 0;z-index: 3;display: grid;grid-template-rows: 1fr;border-radius: 0 0 16px 16px;background: var(--ui-sf-card);transition: grid-template-rows 360ms var(--ui-sf-ease), opacity 220ms ease}.ui-sf__foot-fold[data-hidden]{grid-template-rows: 0fr;opacity: 0}.ui-sf__foot{display: flex;align-items: center;gap: 10px;min-height: 0;overflow: hidden;padding: 12px 16px 16px}.ui-sf__btn{display: inline-flex;align-items: center;justify-content: center;flex: none;height: 36px;border-radius: 10px;font-weight: 500;white-space: nowrap;transition: background-color 140ms ease, opacity 200ms ease, transform 140ms ease, width 320ms var(--ui-sf-ease), visibility 200ms}.ui-sf__btn-ghost{gap: 4px;padding: 0 12px 0 8px;color: var(--ui-sf-text)}.ui-sf__btn-ghost:hover{background: var(--ui-sf-hover);color: var(--ui-sf-ink)}.ui-sf__btn-ghost[data-hidden]{opacity: 0;visibility: hidden}.ui-sf__btn-primary{margin-left: auto;overflow: hidden;background: var(--ui-sf-ink);color: var(--ui-sf-on-ink)}.ui-sf__btn-primary:hover{opacity: 0.88}.ui-sf__btn-primary:active{transform: scale(0.97)}.ui-sf__btn-primary[aria-disabled="true"]{opacity: 0.4}.ui-sf__btn-primary[data-busy]{opacity: 0.75;cursor: progress}.ui-sf__btn-inner{display: inline-flex;flex: none;align-items: center;gap: 8px;padding: 0 15px}.ui-sf__btn-label{animation: ui-sf-in 260ms var(--ui-sf-ease) both}.ui-sf__btn-secondary{padding: 0 14px;color: var(--ui-sf-text);box-shadow: inset 0 0 0 1px var(--ui-sf-edge)}.ui-sf__btn-secondary:hover{background: var(--ui-sf-hover);color: var(--ui-sf-ink)}.ui-sf__spinner{width: 13px;height: 13px;border-radius: 50%;border: 1.8px solid currentColor;border-right-color: transparent;animation: ui-sf-spin 700ms linear infinite}.ui-sf__submit-error{min-width: 0;font-size: 12.5px;color: var(--ui-sf-danger);animation: ui-sf-in 240ms var(--ui-sf-ease) both}@keyframes ui-sf-in{from{opacity: 0;transform: translateY(4px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-sf-enter{from{opacity: 0;transform: translateX(28px)}to{opacity: 1;transform: none}}@keyframes ui-sf-enter-back{from{opacity: 0;transform: translateX(-28px)}to{opacity: 1;transform: none}}@keyframes ui-sf-leave{to{opacity: 0;transform: translateX(-28px)}}@keyframes ui-sf-leave-back{to{opacity: 0;transform: translateX(28px)}}@keyframes ui-sf-draw{to{stroke-dashoffset: 0}}@keyframes ui-sf-pop{0%{opacity: 0;transform: scale(0.4)}60%{opacity: 1;transform: scale(1.08)}100%{opacity: 1;transform: scale(1)}}@keyframes ui-sf-chip{from{opacity: 0;transform: scale(0.85)}to{opacity: 1;transform: none}}@keyframes ui-sf-spin{to{transform: rotate(360deg)}}@container (max-width: 420px){.ui-sf__head{padding: 12px 8px 12px}.ui-sf__steps{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%)}.ui-sf__compact{display: grid}.ui-sf__pane{padding: 18px 16px 6px}.ui-sf__foot{padding: 12px 12px 12px}.ui-sf__btn{height: 40px}.ui-sf__choices{grid-template-columns: minmax(0, 1fr);grid-auto-flow: row}.ui-sf__choice{grid-template-columns: minmax(0, 1fr) auto;column-gap: 10px}.ui-sf__choice-top{grid-column: 1}.ui-sf__choice-aside{grid-column: 2;grid-row: 1;align-self: center}.ui-sf__choice-desc{grid-column: 1 / -1;margin-top: 2px}.ui-sf__radio{order: -1;margin-left: 0;margin-right: 2px}.ui-sf__review-row{grid-template-columns: minmax(0, 1fr) auto;row-gap: 2px;padding-left: 12px}.ui-sf__review dt{grid-column: 1}.ui-sf__review dd{grid-column: 1;grid-row: 2}.ui-sf__edit{grid-column: 2;grid-row: 1 / span 2;align-self: center;margin: 0}}@media (hover: none) and (pointer: coarse){.ui-sf__input input, .ui-sf__tags-input, .ui-sf__prefix{font-size: 16px}.ui-sf__input, .ui-sf__tags{min-height: 44px}.ui-sf__input input{height: 42px}.ui-sf__chip{height: 32px}.ui-sf__chip-x{width: 30px;height: 30px}.ui-sf__btn{height: 42px}.ui-sf__edit{height: 36px;padding: 0 12px}.ui-sf__step-btn{padding: 4px;margin: -4px 0}}@media (prefers-reduced-motion: reduce){.ui-sf *, .ui-sf *::before, .ui-sf *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-sf{--ui-sf-tray: #111113;--ui-sf-card: #19191b;--ui-sf-line: #2a2a2e;--ui-sf-ink: #ededed;--ui-sf-text: #c8c8cc;--ui-sf-muted: #8b8b92;--ui-sf-faint: #5c5c63;--ui-sf-edge: #34343a;--ui-sf-field: #1d1d20;--ui-sf-hover: #232326;--ui-sf-chip: #2a2a2e;--ui-sf-track: #2e2e33;--ui-sf-accent: #6d8bff;--ui-sf-accent-soft: rgba(109, 139, 255, 0.08);--ui-sf-danger: #ff6369;--ui-sf-on-ink: #111113;--ui-sf-focus: rgba(255, 255, 255, 0.3);--ui-sf-ring: rgba(255, 255, 255, 0.08)}`;
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
                        value: <>{values.name}<span className={`sf-demo__sub`}>{`affect.app/`}{values.slug}</span></>,
                        step: `workspace`
                    },
                    {
                        label: `Teammates`,
                        value: length ? <>{length}{` `}{length === 1 ? `invite` : `invites`}<span className={`sf-demo__sub`}>{values.invites.join(`, `)}</span></> : `Just you for now`,
                        step: `team`
                    },
                    {
                        label: `Plan`,
                        value: <>{n.title}<span className={`sf-demo__muted`}>{` · `}{n.aside}</span></>,
                        step: `plan`
                    }
                ]}/>;
            }
        }
    ]} initialValues={{
        name: ``,
        slug: ``,
        slugEdited: false,
        invites: [
            `maya@northwind.studio`,
            `leo@northwind.studio`
        ],
        plan: `pro`
    }} submitLabel={`Create workspace`} onComplete={()=>new Promise((resolve)=>setTimeout(resolve, 1100))} success={(t, n)=><X1Component title={`${t.name} is ready`} description={t.invites.length ? `${t.invites.length} ${t.invites.length === 1 ? `invite is` : `invites are`} on the way. Your trial runs for 14\u00a0days.` : `Your trial runs for 14\xA0days.`}><button type={`button`} className={`ui-sf__btn ui-sf__btn-secondary`} onClick={()=>{
            eRef.current = true;
            n();
        }}>{`Start over`}</button></X1Component>}/></div>;
}
export { DComponent as default };
