import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
let i = 0;
const a = ()=>`step-${Date.now().toString(36)}-${(i++).toString(36)}`;
const o = Array.from({
    length: 8
}, (e, t)=>t);
const s = (CRef_current, t, n)=>{
    let r = CRef_current.slice();
    let [i] = r.splice(t, 1);
    r.splice(n, 0, i);
    return r;
};
const c = ()=>typeof window < `u` && !!window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;
const l = (e)=>{
    let transform = getComputedStyle(e).transform;
    if (!transform || transform === `none`) {
        return 0;
    }
    try {
        return new DOMMatrixReadOnly(transform).m42;
    } catch  {
        return 0;
    }
};
const u = (e)=>{
    let t = Math.max(0, e) / 1000;
    if (t < 10) {
        return `${t.toFixed(1)}s`;
    }
    if (t < 60) {
        return `${Math.round(t)}s`;
    }
    let n = Math.round(t);
    return `${Math.floor(n / 60)}m ${String(n % 60).padStart(2, `0`)}s`;
};
const d = (e)=>{
    let t = Math.max(1, Math.round(e / 1000));
    if (t < 60) {
        return `${t}s`;
    }
    return `${Math.floor(t / 60)}m ${String(t % 60).padStart(2, `0`)}s`;
};
const f = {
    pending: `Pending`,
    active: `In progress`,
    done: `Done`,
    failed: `Failed`,
    skipped: `Skipped`
};
function P1Component({ steps, defaultSteps = [], status = `draft`, onChange, onRun, onCancel, onRetry, title, estimate, className }) {
    let [ee, setEe] = n.useState(defaultSteps);
    let x = steps ?? ee;
    let S = status === `draft`;
    let CRef = n.useRef(x);
    CRef.current = x;
    let [w, setW] = n.useState(null);
    let ERef = n.useRef(w);
    ERef.current = w;
    let [D, setD] = n.useState(``);
    let [k, setK] = n.useState([]);
    let [A, setA] = n.useState(null);
    let [ie, setIe] = n.useState(``);
    let [, setOe] = n.useState(0);
    let [j, setJ] = n.useState(null);
    let ceRef = n.useRef(null);
    let MRef = n.useRef(null);
    let NRef = n.useRef(new Map);
    let PRef = n.useRef(new Map);
    let FRef = n.useRef(null);
    let IRef = n.useRef(null);
    let LRef = n.useRef(new Set);
    let RRef = n.useRef(new Set);
    let zRef = n.useRef(new Map);
    let BRef = n.useRef(new Map);
    let VRef = n.useRef(null);
    let leRef = n.useRef(new Map);
    let H = n.useId();
    let ue = (e, t)=>{
        let n = window.setTimeout(()=>{
            RRef.current.delete(n);
            e();
        }, t);
        RRef.current.add(n);
    };
    n.useEffect(()=>{
        let RRef_current = RRef.current;
        return ()=>RRef_current.forEach((e)=>window.clearTimeout(e));
    }, []);
    let U = (t)=>{
        if (steps === undefined) {
            setEe(t);
        }
        onChange?.(t);
    };
    let W = (e)=>setIe((t)=>{
            if (t === e) {
                return `${e} `;
            }
            return e;
        });
    let G = x.map((e)=>e.id).join(`
`);
    let deRef = n.useRef(G);
    n.useLayoutEffect(()=>{
        let e = deRef.current !== G;
        deRef.current = G;
        let t = new Map;
        let n = e && !c();
        NRef.current.forEach((r, i)=>{
            let r_offsetTop = r.offsetTop;
            t.set(i, r_offsetTop);
            if (!e) {
                return;
            }
            let o = PRef.current.get(i);
            if (n && o !== undefined && o !== r_offsetTop) {
                r.style.transition = `none`;
                r.style.transform = `translateY(${o - r_offsetTop}px)`;
                r.getBoundingClientRect();
            }
            r.style.transition = ``;
            r.style.transform = ``;
        });
        PRef.current = t;
        if (IRef.current) {
            let e = NRef.current.get(IRef.current);
            IRef.current = null;
            if (e && document.activeElement !== e) {
                e.focus();
            }
        }
    });
    let feRef = n.useRef(status);
    n.useLayoutEffect(()=>{
        let feRef_current = feRef.current;
        feRef.current = status;
        if (status === `running` && (VRef.current === null || feRef_current === `done`)) {
            VRef.current = Date.now();
        }
        if (status === `draft`) {
            VRef.current = null;
            setJ(null);
        }
        if (status === `done`) {
            let e = CRef.current.reduce((acc, item)=>acc + (item.duration ?? BRef.current.get(item.id) ?? 0), 0);
            setJ(VRef.current === null ? e : Date.now() - VRef.current);
        }
    }, [
        status
    ]);
    n.useLayoutEffect(()=>{
        x.forEach((e)=>{
            let t = e.status ?? `pending`;
            if (t === `active`) {
                if (!zRef.current.has(e.id)) {
                    zRef.current.set(e.id, Date.now());
                }
            } else if (zRef.current.has(e.id)) {
                if (t === `done`) {
                    BRef.current.set(e.id, Date.now() - zRef.current.get(e.id));
                }
                zRef.current.delete(e.id);
            }
            if (t === `pending`) {
                BRef.current.delete(e.id);
            }
        });
    });
    n.useEffect(()=>{
        if (status !== `running`) {
            return;
        }
        let e = window.setInterval(()=>setOe((e)=>e + 1), 100);
        return ()=>window.clearInterval(e);
    }, [
        status
    ]);
    n.useEffect(()=>{
        let e = [];
        x.forEach((t, n)=>{
            let r = t.status ?? `pending`;
            let i = leRef.current.get(t.id);
            if (!S && i !== undefined && i !== r) {
                if (r === `done`) {
                    e.push(`Step ${n + 1} done: ${t.title}`);
                }
                if (r === `failed`) {
                    e.push(`Step ${n + 1} failed: ${t.title}${t.error ? `. ${t.error}` : ``}`);
                }
                if (r === `skipped`) {
                    e.push(`Step ${n + 1} skipped`);
                }
            }
            leRef.current.set(t.id, r);
        });
        if (e.length) {
            W(e.join(`. `));
        }
    });
    n.useEffect(()=>{
        if (status === `running`) {
            W(`Running plan`);
        }
        if (status === `done` && j !== null) {
            W(`Plan done in ${d(j)}`);
        }
    }, [
        status,
        j
    ]);
    n.useEffect(()=>{
        if (!S) {
            setW(null);
            setD(``);
        }
    }, [
        S
    ]);
    let K = (e)=>{
        if (e) {
            NRef.current.get(e)?.focus();
        } else {
            MRef.current?.focus();
        }
    };
    let pe = (e, t)=>{
        let CRef_current = CRef.current;
        let r = CRef_current.findIndex((t)=>t.id === e);
        let i = r + t;
        if (!(r < 0 || i < 0 || i >= CRef_current.length)) {
            IRef.current = e;
            U(s(CRef_current, r, i));
            W(`Moved “${CRef_current[r].title}” to position ${i + 1} of ${CRef_current.length}`);
        }
    };
    let me = (e)=>{
        if (!S || k.includes(e)) {
            return;
        }
        let CRef_current = CRef.current;
        let n = CRef_current.findIndex((t)=>t.id === e);
        if (n < 0) {
            return;
        }
        let r = NRef.current.get(e);
        if (r?.contains(document.activeElement)) {
            K((CRef_current[n + 1] ?? CRef_current[n - 1])?.id);
        }
        W(`Removed “${CRef_current[n].title}”`);
        if (!r || c()) {
            U(CRef_current.filter((t)=>t.id !== e));
            return;
        }
        r.style.height = `${r.offsetHeight}px`;
        r.getBoundingClientRect();
        setK((t)=>[
                ...t,
                e
            ]);
        ue(()=>{
            r.style.height = ``;
            setK((t)=>t.filter((t)=>t !== e));
            U(CRef.current.filter((t)=>t.id !== e));
        }, 260);
    };
    let he = (e)=>{
        if (!S) {
            return;
        }
        let t = CRef.current.find((t)=>t.id === e);
        if (t) {
            setW({
                id: e,
                value: t.title
            });
        }
    };
    let q = (e, t = false)=>{
        let ERef_current = ERef.current;
        if (!ERef_current) {
            return;
        }
        ERef.current = null;
        setW(null);
        if (t) {
            IRef.current = ERef_current.id;
        }
        let r = ERef_current.value.trim();
        let i = CRef.current.find((e)=>e.id === ERef_current.id);
        if (e && i && r && r !== i.title) {
            U(CRef.current.map((e)=>{
                if (e.id === ERef_current.id) {
                    return {
                        ...e,
                        title: r
                    };
                }
                return e;
            }));
            W(`Renamed to “${r}”`);
        }
    };
    let ge = ()=>{
        let e = D.trim();
        if (!e) {
            return;
        }
        let t = a();
        LRef.current.add(t);
        U([
            ...CRef.current,
            {
                id: t,
                title: e
            }
        ]);
        setD(``);
        W(`Added “${e}” as step ${CRef.current.length + 1}`);
    };
    let _e = (e, t)=>{
        if (!S || e.target !== e.currentTarget) {
            return;
        }
        let CRef_current = CRef.current;
        let r = CRef_current.findIndex((e)=>e.id === t);
        if (e.altKey && (e.key === `ArrowUp` || e.key === `ArrowDown`)) {
            e.preventDefault();
            pe(t, e.key === `ArrowUp` ? -1 : 1);
        } else if (e.key === `ArrowUp` || e.key === `ArrowDown`) {
            e.preventDefault();
            let t = CRef_current[r + (e.key === `ArrowUp` ? -1 : 1)];
            if (t) {
                K(t.id);
            } else if (e.key === `ArrowDown`) {
                MRef.current?.focus();
            }
        } else {
            if (e.key === `Enter` || e.key === `F2`) {
                e.preventDefault();
                he(t);
            } else if (e.key === `Delete` || e.key === `Backspace`) {
                e.preventDefault();
                me(t);
            }
        }
    };
    let ve = (e, t)=>{
        if (!S || e.button !== 0 || ERef.current || k.length) {
            return;
        }
        let ids = CRef.current.map((e)=>e.id);
        let r = ids.map((e)=>NRef.current.get(e));
        if (r.some((e)=>!e)) {
            return;
        }
        let i = r;
        let a = ids.indexOf(t);
        let o = i[a];
        let s = o.offsetHeight ? o.getBoundingClientRect().height / o.offsetHeight : 1;
        e.preventDefault();
        try {
            e.currentTarget.setPointerCapture(e.pointerId);
        } catch  {}
        FRef.current = {
            id: t,
            pointer: e.pointerId,
            ids,
            from: a,
            to: a,
            startY: e.clientY,
            scale: s || 1,
            dy: 0,
            tops: i.map((e)=>e.offsetTop),
            heights: i.map((e)=>e.offsetHeight)
        };
        setA(t);
    };
    let onPointerMove = (e)=>{
        let FRef_current = FRef.current;
        if (!FRef_current || FRef_current.pointer !== e.pointerId) {
            return;
        }
        let n = FRef_current.ids.length - 1;
        let r = FRef_current.tops[0] - FRef_current.tops[FRef_current.from];
        let i = FRef_current.tops[n] + FRef_current.heights[n] - (FRef_current.tops[FRef_current.from] + FRef_current.heights[FRef_current.from]);
        FRef_current.dy = Math.min(i, Math.max(r, (e.clientY - FRef_current.startY) / FRef_current.scale));
        NRef.current.get(FRef_current.id)?.style.setProperty(`transform`, `translateY(${FRef_current.dy}px)`);
        let a = FRef_current.tops[FRef_current.from] + FRef_current.dy + FRef_current.heights[FRef_current.from] / 2;
        let o = 0;
        FRef_current.ids.forEach((e, n)=>{
            if (n !== FRef_current.from && FRef_current.tops[n] + FRef_current.heights[n] / 2 < a) {
                o++;
            }
        });
        if (o === FRef_current.to) {
            return;
        }
        FRef_current.to = o;
        let s = FRef_current.heights[FRef_current.from];
        FRef_current.ids.forEach((e, n)=>{
            if (n === FRef_current.from) {
                return;
            }
            let r = FRef_current.from < o && n > FRef_current.from && n <= o ? -s : o < FRef_current.from && n >= o && n < FRef_current.from ? s : 0;
            let i = NRef.current.get(e);
            if (i) {
                i.style.transform = r ? `translateY(${r}px)` : ``;
            }
        });
    };
    let J = (e)=>{
        let FRef_current = FRef.current;
        if (!FRef_current || FRef_current.pointer !== e.pointerId) {
            return;
        }
        FRef.current = null;
        setA(null);
        if (FRef_current.to === FRef_current.from) {
            let e = NRef.current.get(FRef_current.id);
            if (e) {
                e.style.transform = ``;
            }
            return;
        }
        NRef.current.forEach((e, t)=>{
            PRef.current.set(t, e.offsetTop + l(e));
            e.style.transition = `none`;
            e.style.transform = ``;
        });
        let CRef_current = CRef.current;
        let r = CRef_current.find((e)=>e.id === FRef_current.id);
        U(s(CRef_current, FRef_current.from, FRef_current.to));
        requestAnimationFrame(()=>NRef.current.forEach((e)=>e.style.transition = ``));
        if (r) {
            W(`Moved “${r.title}” to position ${FRef_current.to + 1} of ${CRef_current.length}`);
        }
    };
    let x_length = x.length;
    let X = (e)=>e.status ?? `pending`;
    let Z = x.findIndex((e)=>X(e) === `active`);
    let be = x.findIndex((e)=>X(e) === `failed`);
    let length = x.filter((e)=>X(e) === `done` || X(e) === `skipped`).length;
    let Se = Date.now();
    let Q = `draft`;
    let $ = ``;
    if (status === `done`) {
        Q = `done`;
        $ = `Done in ${d(j ?? 0)}`;
    } else {
        if (status === `running`) {
            if (be >= 0 && Z < 0) {
                Q = `failed`;
                $ = `Stopped · step ${be + 1} failed`;
            } else {
                Q = `running`;
                $ = `Running · ${Z >= 0 ? Z + 1 : Math.min(length + 1, x_length)} of ${x_length}`;
            }
        }
    }
    let Ce = VRef.current === null ? 0 : Se - VRef.current;
    return <div ref={ceRef} className={[
        `ui-plc`,
        className
    ].filter(Boolean).join(` `)} data-status={status} data-dragging={A ? `` : undefined}><style href={`ui-agent-plan-clean`} precedence={`default`}>{h}</style><div className={`ui-plc__card`}><div className={`ui-plc__head`}><div className={`ui-plc__meta`}><span className={`ui-plc__state`}><span className={`ui-plc__state-icon`} aria-hidden={`true`}><svg viewBox={`0 0 16 16`}><path d={`M6.5 4.5h7M6.5 8h7M6.5 11.5h7`}/><circle cx={`3.25`} cy={`4.5`} r={`.6`}/><circle cx={`3.25`} cy={`8`} r={`.6`}/><circle cx={`3.25`} cy={`11.5`} r={`.6`}/></svg></span><span className={`ui-plc__state-label`}>{`Plan · `}{x_length}{` `}{x_length === 1 ? `step` : `steps`}</span></span>{S && estimate ? <span className={`ui-plc__estimate`}><svg viewBox={`0 0 16 16`} aria-hidden={`true`}><circle cx={`8`} cy={`8`} r={`6`}/><path d={`M8 5v3.2l2 1.3`}/></svg><span><span className={`ui-plc__sr`}>{`Estimated time `}</span>{estimate}</span></span> : null}</div>{title && <h3 className={`ui-plc__title`}>{title}</h3>}</div><p id={H} className={`ui-plc__sr`}>{`Press Enter to rename, Alt plus arrow keys to move, Delete to remove.`}</p><ol className={`ui-plc__list`} aria-label={title ? `Plan: ${title}` : `Plan`}>{x.map((e, t)=>{
        let n = X(e);
        let i = S && w?.id === e.id;
        let a = e.duration ?? BRef.current.get(e.id);
        let o = zRef.current.get(e.id);
        return <li key={e.id} ref={(t)=>{
            if (t) {
                NRef.current.set(e.id, t);
            }
            return ()=>{
                NRef.current.delete(e.id);
            };
        }} className={`ui-plc__step`} data-step={S ? undefined : n} data-dragging={A === e.id ? `` : undefined} data-removing={k.includes(e.id) ? `` : undefined} data-enter={LRef.current.has(e.id) ? `` : undefined} onAnimationEnd={(t)=>{
            if (t.target === t.currentTarget) {
                LRef.current.delete(e.id);
            }
        }} tabIndex={S && !i ? 0 : undefined} aria-describedby={S ? H : undefined} aria-current={n === `active` && !S ? `step` : undefined} onKeyDown={(t)=>_e(t, e.id)}>{S && <span className={`ui-plc__grip`} aria-hidden={`true`} title={`Drag to reorder`} onPointerDown={(t)=>ve(t, e.id)} onPointerMove={onPointerMove} onPointerUp={J} onPointerCancel={J}><svg viewBox={`0 0 16 16`}><circle cx={`6`} cy={`4`} r={`1.1`}/><circle cx={`10`} cy={`4`} r={`1.1`}/><circle cx={`6`} cy={`8`} r={`1.1`}/><circle cx={`10`} cy={`8`} r={`1.1`}/><circle cx={`6`} cy={`12`} r={`1.1`}/><circle cx={`10`} cy={`12`} r={`1.1`}/></svg></span>}<span className={`ui-plc__marker`} aria-hidden={`true`}>{S || n === `pending` ? <span className={`ui-plc__num`}>{t + 1}</span> : n === `active` ? <M1Component/> : n === `done` ? <svg viewBox={`0 0 16 16`} className={`ui-plc__mark`}><path d={`M4.2 8.4 6.8 11l5-5.6`} pathLength={1} className={`ui-plc__draw`}/></svg> : n === `failed` ? <svg viewBox={`0 0 16 16`} className={`ui-plc__mark`}><path d={`M8 4.2v4.4M8 11.6h.01`}/></svg> : <svg viewBox={`0 0 16 16`} className={`ui-plc__mark`}><path d={`M5 8h6`}/></svg>}</span><div className={`ui-plc__main`}>{i ? <input className={`ui-plc__edit`} value={w.value} aria-label={`Rename step ${t + 1}`} autoFocus onFocus={(e)=>e.currentTarget.select()} onChange={(t)=>setW({
                id: e.id,
                value: t.target.value
            })} onBlur={()=>q(true)} onKeyDown={(e)=>{
            if (e.key === `Enter`) {
                e.preventDefault();
                q(true, true);
            } else if (e.key === `Escape`) {
                e.preventDefault();
                e.stopPropagation();
                q(false, true);
            }
        }}/> : <span className={`ui-plc__name`} onDoubleClick={()=>he(e.id)}>{e.title}</span>}{(e.detail || e.tool) && <span className={`ui-plc__sub`}>{e.detail && <span className={`ui-plc__detail`}>{e.detail}</span>}{e.tool && <code className={`ui-plc__tool`}>{e.tool}</code>}</span>}{!S && <span className={`ui-plc__sr`}>{`, `}{f[n]}</span>}{!S && n === `failed` && <span className={`ui-plc__fail`}><span className={`ui-plc__error`}>{e.error ?? `This step failed`}</span>{onRetry && <button type={`button`} className={`ui-plc__retry`} onClick={()=>onRetry(e.id)}><svg viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M13 8a5 5 0 1 1-1.6-3.7`}/><path d={`M13 3v2.6h-2.6`}/></svg>{`Retry from here`}</button>}</span>}</div><span className={`ui-plc__aside`}>{S ? <button type={`button`} className={`ui-plc__remove`} aria-label={`Remove step ${t + 1}: ${e.title}`} onClick={()=>me(e.id)}><svg viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M4.5 4.5l7 7M11.5 4.5l-7 7`}/></svg></button> : n === `active` ? <span className={`ui-plc__time`} aria-hidden={`true`}>{u(o === undefined ? 0 : Se - o)}</span> : n === `done` && a !== undefined ? <span className={`ui-plc__time ui-plc__time--done`}><span className={`ui-plc__sr`}>{`took `}</span>{u(a)}</span> : n === `skipped` ? <span className={`ui-plc__time`} aria-hidden={`true`}>{`Skipped`}</span> : null}</span>{t < x_length - 1 && <span className={`ui-plc__rail`} aria-hidden={`true`}/>}</li>;
    })}</ol><div className={`ui-plc__tail`} inert={!S}><div className={`ui-plc__tail-inner`}><label className={`ui-plc__add`}><span className={`ui-plc__add-icon`} aria-hidden={`true`}><svg viewBox={`0 0 16 16`}><path d={`M8 4.5v7M4.5 8h7`}/></svg></span><input ref={MRef} value={D} placeholder={`Add step`} aria-label={`Add a step at the end`} enterKeyHint={`done`} onChange={(e)=>setD(e.target.value)} onKeyDown={(e)=>{
        if (e.key === `Enter`) {
            e.preventDefault();
            ge();
        } else if (e.key === `Escape`) {
            setD(``);
        } else if (e.key === `ArrowUp` && !D) {
            let t = CRef.current[CRef.current.length - 1];
            if (t) {
                e.preventDefault();
                K(t.id);
            }
        }
    }}/></label></div></div><div key={Q} className={`ui-plc__foot`} data-phase={Q}>{Q === `draft` ? <><span className={`ui-plc__hint`} aria-hidden={`true`}>{`Drag to reorder · double-click to rename`}</span><span className={`ui-plc__actions`}>{onCancel && <button type={`button`} className={`ui-plc__btn ui-plc__btn--secondary`} onClick={onCancel}>{`Cancel`}</button>}<button type={`button`} className={`ui-plc__btn ui-plc__btn--primary ui-plc__run`} disabled={!x_length} onClick={()=>onRun?.(CRef.current)}>{`Run plan`}<svg viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M5.5 3.8v8.4L12 8z`}/></svg></button></span></> : <><span className={`ui-plc__status`}><span className={`ui-plc__status-icon`} aria-hidden={`true`}>{Q === `running` ? <M1Component/> : Q === `done` ? <svg viewBox={`0 0 16 16`} className={`ui-plc__badge`}><circle cx={`8`} cy={`8`} r={`7`}/><path d={`M5.2 8.2 7.1 10l3.7-4`} pathLength={1} className={`ui-plc__draw`}/></svg> : <svg viewBox={`0 0 16 16`} className={`ui-plc__badge`}><circle cx={`8`} cy={`8`} r={`7`}/><path d={`M8 4.8v3.8M8 11.2h.01`}/></svg>}</span><span className={Q === `running` ? `ui-plc__status-label ui-plc__shimmer` : `ui-plc__status-label`} data-text={$}>{$}</span></span>{Q === `running` ? <span className={`ui-plc__elapsed`} aria-hidden={`true`}>{d(Ce)}</span> : Q === `done` && onRun ? <span className={`ui-plc__actions`}><button type={`button`} className={`ui-plc__btn ui-plc__btn--secondary ui-plc__again`} onClick={()=>onRun(CRef.current)}><svg viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M13 8a5 5 0 1 1-1.6-3.7`}/><path d={`M13 3v2.6h-2.6`}/></svg>{`Run again`}</button></span> : null}</>}</div></div><p className={`ui-plc__sr`} role={`status`} aria-live={`polite`}>{ie}</p></div>;
}
function M1Component() {
    return <svg className={`ui-plc__spinner`} viewBox={`0 0 16 16`}>{o.map((e)=><line key={e} x1={`8`} y1={`1.75`} x2={`8`} y2={`4.75`} transform={`rotate(${e * 45} 8 8)`} style={{
            animationDelay: `${(e - 8) * 100}ms`
        }}/>)}</svg>;
}
var h = `.ui-plc{--ui-plc-card: #ffffff;--ui-plc-ink: rgba(0, 0, 0, 0.88);--ui-plc-strong: #000000;--ui-plc-text: rgba(0, 0, 0, 0.61);--ui-plc-muted: rgba(0, 0, 0, 0.45);--ui-plc-faint: rgba(0, 0, 0, 0.27);--ui-plc-icon: rgba(0, 0, 0, 0.447);--ui-plc-line: rgba(0, 0, 0, 0.06);--ui-plc-ring: rgba(0, 0, 0, 0.1);--ui-plc-rail: rgba(0, 0, 0, 0.08);--ui-plc-fill: rgba(0, 0, 0, 0.06);--ui-plc-wash: rgba(0, 0, 0, 0.03);--ui-plc-chip: rgba(0, 0, 0, 0.045);--ui-plc-accent: rgba(0, 96, 226, 0.765);--ui-plc-on-accent: #ffffff;--ui-plc-red: #e5484d;--ui-plc-red-bg: rgba(229, 72, 77, 0.08);--ui-plc-primary: rgba(0, 0, 0, 0.88);--ui-plc-primary-hover: rgba(0, 0, 0, 0.78);--ui-plc-on-primary: #fcfcfc;--ui-plc-raise-hover: #fafafa;--ui-plc-shine: rgba(255, 255, 255, 0.82);--ui-plc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-plc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-plc-focus: rgba(0, 96, 226, 0.35);--ui-plc-edit-glow: rgba(0, 96, 226, 0.1);--ui-plc-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-plc-inset: 30px;container-type: inline-size;position: relative;box-sizing: border-box;display: grid;width: 100%;max-width: 440px;color: var(--ui-plc-ink);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;font-weight: 400;line-height: 20px;text-align: left;-webkit-font-smoothing: antialiased}.ui-plc__card{position: relative;border-radius: 10px;background: var(--ui-plc-card);box-shadow: var(--ui-plc-shadow)}.ui-plc:not([data-status="draft"]){--ui-plc-inset: 10px}.ui-plc[data-dragging]{cursor: grabbing;user-select: none;-webkit-user-select: none}.ui-plc *, .ui-plc *::before, .ui-plc *::after{box-sizing: border-box}.ui-plc svg{display: block;width: 100%;height: 100%;overflow: visible}:where(.ui-plc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;letter-spacing: inherit;color: inherit;cursor: pointer}.ui-plc__sr{position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap;border: 0}.ui-plc__head{display: grid;gap: 4px;padding: 16px 16px 10px}.ui-plc__meta{display: flex;align-items: center;gap: 10px;min-height: 16px;font-size: 12px;line-height: 16px;color: var(--ui-plc-muted)}.ui-plc__state{display: inline-flex;align-items: center;gap: 6px;min-width: 0}.ui-plc__state-label{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-plc__state-icon{flex: none;width: 16px;height: 16px;color: var(--ui-plc-icon);fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-plc__state-icon circle[r=".6"]{fill: currentColor}.ui-plc__estimate{display: inline-flex;align-items: center;gap: 6px;margin-left: auto;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-plc__estimate svg{width: 16px;height: 16px;color: var(--ui-plc-icon);fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-plc__title{margin: 0;color: var(--ui-plc-strong);font-size: 15px;font-weight: 500;line-height: 24px;text-wrap: balance}.ui-plc__list{position: relative;margin: 0;padding: 0 6px 6px;list-style: none}.ui-plc__step{position: relative;display: grid;grid-template-columns: 20px minmax(0, 1fr) auto;column-gap: 10px;align-items: start;padding: 8px 10px 8px var(--ui-plc-inset);border-radius: 6px;outline: none;transition: transform 420ms var(--ui-plc-ease), padding 420ms var(--ui-plc-ease), height 260ms var(--ui-plc-ease), opacity 180ms ease, background-color 140ms ease, box-shadow 200ms ease}.ui-plc[data-status="draft"] .ui-plc__step:hover{background: var(--ui-plc-wash)}.ui-plc__step:focus-visible{outline: 2px solid var(--ui-plc-focus);outline-offset: 0}.ui-plc__step[data-dragging]{z-index: 2;background: var(--ui-plc-card) !important;box-shadow: var(--ui-plc-shadow-pop);transition: background-color 140ms ease, box-shadow 200ms ease}.ui-plc__step[data-removing]{height: 0 !important;padding-top: 0;padding-bottom: 0;overflow: hidden;opacity: 0;pointer-events: none}.ui-plc__step[data-enter]{animation: ui-plc-enter 380ms var(--ui-plc-ease) both}.ui-plc__grip{position: absolute;top: 8px;left: 6px;display: grid;place-items: center;width: 18px;height: 20px;border-radius: 5px;color: var(--ui-plc-faint);fill: currentColor;cursor: grab;touch-action: none;opacity: 0;transition: opacity 140ms ease, color 140ms ease, background-color 140ms ease}.ui-plc__grip svg{width: 16px;height: 16px}.ui-plc__step:hover .ui-plc__grip, .ui-plc__step:focus-visible .ui-plc__grip, .ui-plc__step[data-dragging] .ui-plc__grip{opacity: 1}.ui-plc__grip:hover, .ui-plc__step[data-dragging] .ui-plc__grip{color: var(--ui-plc-icon);background: var(--ui-plc-fill)}.ui-plc__step[data-dragging] .ui-plc__grip{cursor: grabbing}.ui-plc__marker{position: relative;z-index: 1;display: grid;place-items: center;width: 20px;height: 20px;border-radius: 50%;background: var(--ui-plc-card);box-shadow: inset 0 0 0 0.5px var(--ui-plc-ring), 0 1px 1px -1px rgba(0, 0, 0, 0.1);color: var(--ui-plc-muted);font-size: 11px;font-weight: 500;line-height: 1;font-variant-numeric: tabular-nums;transition: background-color 320ms ease, color 320ms ease, box-shadow 320ms ease}.ui-plc__marker > *{grid-area: 1 / 1;animation: ui-plc-pop 360ms var(--ui-plc-ease) both}.ui-plc__num{animation: none !important}.ui-plc__marker .ui-plc__spinner{width: 14px;height: 14px}.ui-plc__mark{width: 12px !important;height: 12px !important;fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round}.ui-plc__step[data-step="active"] .ui-plc__marker{box-shadow: none;color: var(--ui-plc-accent)}.ui-plc__step[data-step="done"] .ui-plc__marker{background: var(--ui-plc-accent);box-shadow: none;color: var(--ui-plc-on-accent)}.ui-plc__step[data-step="failed"] .ui-plc__marker{background: var(--ui-plc-red-bg);box-shadow: none;color: var(--ui-plc-red)}.ui-plc__step[data-step="skipped"] .ui-plc__marker{box-shadow: none;outline: 1px dashed var(--ui-plc-faint);outline-offset: -1px}.ui-plc__draw{stroke-dasharray: 1;stroke-dashoffset: 1;animation: ui-plc-draw 420ms var(--ui-plc-ease) 80ms forwards}.ui-plc__spinner line{stroke: currentColor;stroke-width: 1.4;stroke-linecap: round;opacity: 0.18;animation: ui-plc-ray 800ms linear infinite}.ui-plc__main{display: grid;gap: 2px;min-width: 0}.ui-plc__name{color: var(--ui-plc-ink);font-weight: 500;overflow-wrap: anywhere;transition: color 300ms ease}.ui-plc[data-status="draft"] .ui-plc__name{cursor: text}.ui-plc__step[data-step="pending"] .ui-plc__name{color: var(--ui-plc-text)}.ui-plc__step[data-step="skipped"] .ui-plc__name{color: var(--ui-plc-muted);text-decoration: line-through;text-decoration-color: var(--ui-plc-faint)}.ui-plc__sub{display: flex;flex-wrap: wrap;align-items: center;gap: 4px 8px;min-width: 0;color: var(--ui-plc-muted);font-size: 12px;line-height: 16px}.ui-plc__detail{min-width: 0;overflow-wrap: anywhere}.ui-plc__tool{padding: 0 5px;border-radius: 5px;background: var(--ui-plc-chip);color: var(--ui-plc-text);font-family: ui-monospace, "SF Mono", Menlo, monospace;font-size: 11px;line-height: 16px;letter-spacing: 0;white-space: nowrap}.ui-plc__edit{width: calc(100% + 14px);height: 28px;margin: -4px -7px;padding: 0 6px;border: 0;border-radius: 6px;background: var(--ui-plc-card);box-shadow: 0 0 0 0.5px var(--ui-plc-focus), 0 0 0 3px var(--ui-plc-edit-glow);color: var(--ui-plc-ink);font: inherit;font-weight: 500;letter-spacing: inherit;outline: none}.ui-plc__fail{display: grid;justify-items: start;gap: 8px;margin-top: 4px;animation: ui-plc-fade 360ms var(--ui-plc-ease) both}.ui-plc__error{color: var(--ui-plc-red);font-size: 12px;line-height: 16px;overflow-wrap: anywhere}.ui-plc__retry, .ui-plc__btn{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 10px;border-radius: 6px;font-size: 13px;font-weight: 500;white-space: nowrap;transition: background-color 140ms ease, opacity 140ms ease, transform 160ms var(--ui-plc-ease)}.ui-plc__retry, .ui-plc__btn--secondary{background: var(--ui-plc-card);box-shadow: var(--ui-plc-shadow);color: var(--ui-plc-strong)}.ui-plc__retry, .ui-plc__again{padding: 0 10px 0 8px}.ui-plc__retry svg, .ui-plc__btn--secondary svg{width: 16px;height: 16px;color: var(--ui-plc-icon);fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-plc__retry:hover, .ui-plc__btn--secondary:hover{background: var(--ui-plc-raise-hover)}.ui-plc__retry:active, .ui-plc__btn:active{transform: scale(0.97)}.ui-plc__aside{display: flex;align-items: center;min-height: 20px;color: var(--ui-plc-muted);font-size: 12px;font-variant-numeric: tabular-nums;white-space: nowrap}.ui-plc__time{animation: ui-plc-fade 300ms ease both}.ui-plc__step[data-step="active"] .ui-plc__time{color: var(--ui-plc-ink)}.ui-plc__remove{display: grid;place-items: center;width: 28px;height: 28px;margin: -4px -6px -4px 0;border-radius: 6px;color: var(--ui-plc-icon);fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;opacity: 0;transition: opacity 140ms ease, color 140ms ease, background-color 140ms ease}.ui-plc__remove svg{width: 16px;height: 16px}.ui-plc__step:hover .ui-plc__remove, .ui-plc__step:focus-visible .ui-plc__remove, .ui-plc__remove:focus-visible{opacity: 1}.ui-plc__remove:hover{color: var(--ui-plc-ink);background: var(--ui-plc-wash)}.ui-plc__remove:focus-visible, .ui-plc__retry:focus-visible, .ui-plc__btn:focus-visible{outline: 2px solid var(--ui-plc-focus);outline-offset: 1px}.ui-plc__rail{position: absolute;top: 31px;bottom: -5px;left: calc(var(--ui-plc-inset) + 9.5px);width: 1px;overflow: hidden;background: var(--ui-plc-rail);opacity: 0;pointer-events: none;transition: opacity 300ms ease}.ui-plc:not([data-status="draft"]) .ui-plc__rail{opacity: 1;transition-delay: 240ms}.ui-plc__rail::after{content: "";position: absolute;inset: 0;background: var(--ui-plc-accent);transform: scaleY(0);transform-origin: top;transition: transform 560ms var(--ui-plc-ease)}.ui-plc__step[data-step="done"] .ui-plc__rail::after, .ui-plc__step[data-step="skipped"] .ui-plc__rail::after{transform: scaleY(1)}.ui-plc__tail{display: grid;grid-template-rows: 1fr;transition: grid-template-rows 420ms var(--ui-plc-ease), opacity 260ms ease}.ui-plc:not([data-status="draft"]) .ui-plc__tail{grid-template-rows: 0fr;opacity: 0}.ui-plc__tail-inner{min-height: 0;overflow: hidden}.ui-plc__add{display: grid;grid-template-columns: 20px minmax(0, 1fr);column-gap: 10px;align-items: center;margin: -4px 6px 8px;padding: 6px 10px 6px var(--ui-plc-inset);border-radius: 6px;cursor: text;transition: background-color 140ms ease}.ui-plc__add:hover, .ui-plc__add:focus-within{background: var(--ui-plc-wash)}.ui-plc__add-icon{display: grid;place-items: center;width: 20px;height: 20px;color: var(--ui-plc-icon);fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round}.ui-plc__add-icon svg{width: 16px;height: 16px}.ui-plc__add input{width: 100%;min-width: 0;height: 20px;padding: 0;border: 0;background: none;color: var(--ui-plc-ink);font: inherit;letter-spacing: inherit;outline: none}.ui-plc__add input::placeholder{color: var(--ui-plc-faint);opacity: 1}.ui-plc__foot{display: flex;align-items: center;gap: 12px;min-height: 48px;padding: 0 10px 0 16px;border-top: 0.5px solid var(--ui-plc-line);color: var(--ui-plc-muted);font-size: 12px;line-height: 16px}.ui-plc__foot > *{animation: ui-plc-fade 320ms var(--ui-plc-ease) both}.ui-plc__hint{min-width: 0;overflow: hidden;text-overflow: ellipsis;white-space: nowrap}.ui-plc__actions{display: flex;flex: none;gap: 8px;margin-left: auto}.ui-plc__btn--primary{padding: 0 8px 0 10px;background: var(--ui-plc-primary);color: var(--ui-plc-on-primary)}.ui-plc__btn--primary:hover{background: var(--ui-plc-primary-hover)}.ui-plc__btn--primary:disabled{opacity: 0.4;cursor: default;transform: none}.ui-plc__btn--primary svg{width: 16px;height: 16px;fill: currentColor}.ui-plc__status{display: inline-flex;align-items: center;gap: 8px;min-width: 0;color: var(--ui-plc-ink);font-size: 13px;line-height: 20px}.ui-plc__status-icon{flex: none;width: 16px;height: 16px;color: var(--ui-plc-accent)}.ui-plc__status-icon .ui-plc__spinner{width: 14px;height: 14px;margin: 1px}.ui-plc__badge circle{fill: currentColor}.ui-plc__badge path{fill: none;stroke: var(--ui-plc-on-accent);stroke-width: 1.4;stroke-linecap: round;stroke-linejoin: round}.ui-plc__foot[data-phase="failed"] .ui-plc__status-icon{color: var(--ui-plc-red-bg)}.ui-plc__foot[data-phase="failed"] .ui-plc__badge path{stroke: var(--ui-plc-red);stroke-width: 1.6}.ui-plc__foot[data-phase="failed"] .ui-plc__status{color: var(--ui-plc-red)}.ui-plc__status-label{position: relative;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-plc__foot[data-phase="done"] .ui-plc__status-label{font-weight: 500}.ui-plc__shimmer{color: var(--ui-plc-muted)}.ui-plc__shimmer::after{content: attr(data-text);content: attr(data-text) / "";position: absolute;inset: 0;white-space: nowrap;color: transparent;background: linear-gradient(90deg, transparent 38%, var(--ui-plc-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;-webkit-background-clip: text;background-clip: text;animation: ui-plc-sweep 1.6s linear infinite;pointer-events: none}.ui-plc__elapsed{margin-left: auto;padding-right: 6px;color: var(--ui-plc-faint);font-variant-numeric: tabular-nums;white-space: nowrap}@media (hover: none){.ui-plc__grip, .ui-plc__remove{opacity: 1}}@media (pointer: coarse){.ui-plc__foot{min-height: 56px}.ui-plc__btn, .ui-plc__retry{height: 36px}.ui-plc__remove{width: 36px;height: 36px;margin: -8px -10px -8px 0}.ui-plc__grip::after{content: "";position: absolute;inset: -8px -6px}}@container (max-width: 400px){.ui-plc__hint{display: none}}@container (max-width: 340px){.ui-plc__head{padding: 14px 14px 10px}.ui-plc__list{padding-inline: 4px}.ui-plc__step, .ui-plc__add{column-gap: 8px;padding-right: 8px}.ui-plc__add{margin-inline: 4px}.ui-plc__foot{padding-left: 14px}}@keyframes ui-plc-fade{from{opacity: 0;transform: translateY(3px)}to{opacity: 1;transform: none}}@keyframes ui-plc-enter{from{opacity: 0;transform: translateY(6px)}to{opacity: 1;transform: none}}@keyframes ui-plc-pop{from{opacity: 0;transform: scale(0.5)}to{opacity: 1;transform: none}}@keyframes ui-plc-draw{to{stroke-dashoffset: 0}}@keyframes ui-plc-ray{0%{opacity: 1}100%{opacity: 0.18}}@keyframes ui-plc-sweep{from{background-position: 100% 0}to{background-position: 0% 0}}@media (prefers-reduced-motion: reduce){.ui-plc *, .ui-plc *::before, .ui-plc *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;animation-iteration-count: 1 !important;transition-duration: 1ms !important;transition-delay: 0ms !important}.ui-plc__spinner line{opacity: 0.6}.ui-plc__draw{stroke-dashoffset: 0}.ui-plc__shimmer::after{display: none}}:where(.dark, [data-theme="dark"]) .ui-plc{--ui-plc-card: #1c1c1e;--ui-plc-ink: rgba(255, 255, 255, 0.9);--ui-plc-strong: #ffffff;--ui-plc-text: rgba(255, 255, 255, 0.62);--ui-plc-muted: rgba(255, 255, 255, 0.46);--ui-plc-faint: rgba(255, 255, 255, 0.3);--ui-plc-icon: rgba(255, 255, 255, 0.5);--ui-plc-line: rgba(255, 255, 255, 0.08);--ui-plc-ring: rgba(255, 255, 255, 0.14);--ui-plc-rail: rgba(255, 255, 255, 0.1);--ui-plc-fill: rgba(255, 255, 255, 0.08);--ui-plc-wash: rgba(255, 255, 255, 0.04);--ui-plc-chip: rgba(255, 255, 255, 0.07);--ui-plc-accent: #4d8dff;--ui-plc-red: #ff6b70;--ui-plc-red-bg: rgba(229, 72, 77, 0.14);--ui-plc-primary: rgba(255, 255, 255, 0.9);--ui-plc-primary-hover: rgba(255, 255, 255, 0.8);--ui-plc-on-primary: #1c1c1e;--ui-plc-raise-hover: #232326;--ui-plc-shine: #ffffff;--ui-plc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-plc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 28px -10px rgba(0, 0, 0, 0.6);--ui-plc-focus: rgba(77, 141, 255, 0.5);--ui-plc-edit-glow: rgba(77, 141, 255, 0.14)}:where(.dark, [data-theme="dark"]) .ui-plc__marker{box-shadow: inset 0 0 0 0.5px var(--ui-plc-ring)}`;
const g = [
    {
        id: `revenue`,
        title: `Pull Q3 revenue and ARR`,
        detail: `Monthly revenue, ARR and net retention`,
        tool: `stripe.query`
    },
    {
        id: `launches`,
        title: `Summarize product launches`,
        detail: `Shipped projects and adoption`,
        tool: `linear.search`
    },
    {
        id: `slides`,
        title: `Build the KPI slides`,
        detail: `Six charts in the board template`,
        tool: `slides.create`
    },
    {
        id: `memo`,
        title: `Draft the board memo`,
        detail: `One page, wins, risks and asks`,
        tool: `docs.write`
    },
    {
        id: `email`,
        title: `Send the draft to Maya for review`,
        tool: `gmail.draft`
    }
];
const _ = {
    revenue: 1300,
    launches: 1100,
    slides: 1400,
    memo: 1250,
    email: 900
};
const v = `slides`;
function YComponent() {
    let [steps, setSteps] = n.useState(g);
    let [i, setI] = n.useState(`draft`);
    let oRef = n.useRef(null);
    let sRef = n.useRef(true);
    let cRef = n.useRef([]);
    let lRef = n.useRef([]);
    let uRef = n.useRef(i);
    uRef.current = i;
    let dRef = n.useRef(true);
    let f = (e, t, n)=>{
        e.current.push(window.setTimeout(t, n));
    };
    let m = (e)=>{
        e.current.forEach((e)=>window.clearTimeout(e));
        e.current = [];
    };
    let h = (e)=>oRef.current?.querySelector(e)?.click();
    let y = (e, n)=>setSteps((t)=>t.map((t)=>{
                if (t.id === e) {
                    return {
                        ...t,
                        ...n
                    };
                }
                return t;
            }));
    let b = (e, t)=>{
        if (t >= e.length) {
            setI(`done`);
            if (sRef.current) {
                f(cRef, S, 3600);
            } else {
                f(lRef, x, 3200);
            }
            return;
        }
        let n = e[t];
        y(n.id, {
            status: `active`,
            error: undefined
        });
        let r = _[n.id] ?? 1200;
        f(lRef, ()=>{
            if (n.id === v && dRef.current) {
                dRef.current = false;
                y(n.id, {
                    status: `failed`,
                    error: `Slides API timed out after 30s`
                });
                if (sRef.current) {
                    f(cRef, ()=>h(`.ui-plc__retry`), 1700);
                }
                return;
            }
            y(n.id, {
                status: `done`
            });
            b(e, t + 1);
        }, r);
    };
    let onRun = (e)=>{
        m(lRef);
        dRef.current = true;
        let n = e.map(({ status, error, duration, ...rest })=>rest);
        setSteps(n);
        setI(`running`);
        f(lRef, ()=>b(n, 0), 350);
    };
    let onRetry = (e)=>{
        m(lRef);
        let n = [];
        setSteps((t)=>{
            let r = t.findIndex((t)=>t.id === e);
            n = t.map((e, t)=>{
                if (t >= r) {
                    return {
                        ...e,
                        status: `pending`,
                        error: undefined
                    };
                }
                return e;
            });
            return n;
        });
        f(lRef, ()=>b(n, n.findIndex((t)=>t.id === e)), 250);
    };
    let x = ()=>{
        setSteps((e)=>e.map(({ status, error, duration, ...rest })=>rest));
        setI(`draft`);
    };
    let S = ()=>{
        m(lRef);
        setSteps(g);
        setI(`draft`);
        f(cRef, ()=>setSteps((e)=>{
                let t = e.findIndex((e)=>e.id === `memo`);
                if (t < 1) {
                    return e;
                }
                let n = e.slice();
                let [r] = n.splice(t, 1);
                n.splice(t - 1, 0, r);
                return n;
            }), 1500);
        f(cRef, ()=>h(`.ui-plc__run`), 3000);
    };
    n.useEffect(()=>{
        S();
        return ()=>{
            m(cRef);
            m(lRef);
        };
    }, []);
    let C = (isTrusted)=>{
        if (isTrusted && sRef.current) {
            sRef.current = false;
            m(cRef);
            if (uRef.current === `done`) {
                f(lRef, x, 1200);
            }
        }
    };
    return <div ref={oRef} className={`pl-demo`} onPointerDownCapture={(e)=>C(e.nativeEvent.isTrusted)} onKeyDownCapture={(e)=>C(e.nativeEvent.isTrusted)}><P1Component title={`Prepare the Q3 board update`} estimate={`~2 min`} steps={steps} status={i} onChange={setSteps} onRun={onRun} onCancel={()=>{
        m(lRef);
        setSteps(g);
        setI(`draft`);
    }} onRetry={onRetry}/></div>;
}
export { YComponent as default };
