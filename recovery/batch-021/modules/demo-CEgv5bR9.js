import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = (e)=>1 - (1 - e) ** 4;
const a = ()=>typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
const o = (e)=>new Promise((resolve)=>window.setTimeout(resolve, e));
const s = ()=>new Date().toLocaleDateString(`en-US`, {
        month: `short`,
        day: `numeric`
    });
const c = ()=>`m-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
const l = (e)=>{
    if (e) {
        e.style.height = `auto`;
        e.style.height = `${e.scrollHeight}px`;
    }
};
function useU(e, t) {
    let [r, setR] = n.useState(e);
    let sRef = n.useRef(e);
    let c = JSON.stringify(e);
    n.useEffect(()=>{
        let e = JSON.parse(c);
        let n = {
            ...sRef.current
        };
        if (a() || Object.keys(e).every((t)=>n[t] === e[t])) {
            sRef.current = e;
            setR(e);
            return;
        }
        let r = performance.now();
        let l = 0;
        let u = (a)=>{
            let c = Math.min(1, (a - r) / t);
            let d = i(c);
            let f = {};
            for(let t in e){
                f[t] = (n[t] ?? e[t]) + (e[t] - (n[t] ?? e[t])) * d;
            }
            sRef.current = f;
            setR(f);
            if (c < 1) {
                l = requestAnimationFrame(u);
            }
        };
        l = requestAnimationFrame(u);
        return ()=>cancelAnimationFrame(l);
    }, [
        c,
        t
    ]);
    return r;
}
function D1Component({ id, children }) {
    let iRef = n.useRef({
        id,
        node: children
    });
    let [a, setA] = n.useState(id);
    let [s, setS] = n.useState(null);
    if (a !== id) {
        setA(id);
        setS(iRef.current);
    }
    iRef.current = {
        id,
        node: children
    };
    n.useEffect(()=>{
        if (!s) {
            return;
        }
        let e = window.setTimeout(()=>setS(null), 260);
        return ()=>window.clearTimeout(e);
    }, [
        s
    ]);
    return <span className={`ui-mp__swap`}>{s && <span key={`out-${s.id}`} className={`ui-mp__swap-item`} data-out={``} aria-hidden={`true`}>{s.node}</span>}<span key={id} className={`ui-mp__swap-item`}>{children}</span></span>;
}
const f = {
    stroke: `currentColor`,
    strokeWidth: 1.4,
    strokeLinecap: `round`,
    strokeLinejoin: `round`
};
const P1Component = ({ children, size = 14 })=><svg width={size} height={size} viewBox={`0 0 14 14`} fill={`none`} aria-hidden={`true`}>{children}</svg>;
const Ee1Component = ()=><P1Component><path d={`M8.6 3.1 10.9 5.4M2.8 11.2l.5-2.6 6-6a1.2 1.2 0 0 1 1.7 0l.6.6a1.2 1.2 0 0 1 0 1.7l-6 6-2.8.3Z`} {...f}/></P1Component>;
const Te1Component = ()=><P1Component><path d={`M5.3 3.8v6.4M8.7 3.8v6.4`} {...f} strokeWidth={1.6}/></P1Component>;
const Ne1Component = ()=><P1Component><path d={`M4.8 3.6v6.8a.4.4 0 0 0 .6.3l5.2-3.4a.4.4 0 0 0 0-.6L5.4 3.3a.4.4 0 0 0-.6.3Z`} {...f}/></P1Component>;
const Re1Component = ()=><P1Component><path d={`M2.8 4.2h8.4M5.6 4.2V3a.8.8 0 0 1 .8-.8h1.2a.8.8 0 0 1 .8.8v1.2M3.9 4.2l.5 6.6a1 1 0 0 0 1 .9h3.2a1 1 0 0 0 1-.9l.5-6.6`} {...f}/></P1Component>;
const Ie1Component = ()=><P1Component size={12}><path d={`M4.6 2.8 2.4 5l2.2 2.2M2.6 5h5.6a3.2 3.2 0 0 1 0 6.4H6`} {...f}/></P1Component>;
const Ae1Component = ()=><P1Component><path d={`M7 3v8M3 7h8`} {...f}/></P1Component>;
const M1Component = ()=><P1Component><circle cx={`6.2`} cy={`6.2`} r={`3.6`} {...f}/><path d={`m8.9 8.9 2.4 2.4`} {...f}/></P1Component>;
const Oe1Component = ()=><P1Component size={12}><path d={`m4 4 6 6m0-6-6 6`} {...f}/></P1Component>;
const Se1Component = ()=><P1Component><circle cx={`7`} cy={`7`} r={`5.2`} {...f}/><path d={`M7 6.4v3M7 4.6v.01`} {...f} strokeWidth={1.6}/></P1Component>;
const Ce1Component = ()=><P1Component size={12}><path d={`M2.5 7h8M7.5 4l3 3-3 3`} {...f}/></P1Component>;
function Le1Component({ memories, onChange, onAdd, onEdit, onPause, onForget, onRestore, enabled, defaultEnabled = true, onEnabledChange, categories, title = `Memory`, maxHeight = 360, undoFor = 5000, addedSource = `You added`, action, className }) {
    let g = n.useId();
    let ref = n.useRef(null);
    let xeRef = n.useRef(null);
    let [Se, setSe] = n.useState(memories);
    let v = onChange ? memories : Se;
    let yRef = n.useRef(v);
    yRef.current = v;
    let b = (e)=>{
        yRef.current = e;
        if (!onChange) {
            setSe(e);
        }
        onChange?.(e);
    };
    let [we, setWe] = n.useState(defaultEnabled);
    let x = enabled ?? we;
    let Ee = (e)=>{
        setWe(e);
        onEnabledChange?.(e);
    };
    let [S, setS] = n.useState({});
    let [C, setC] = n.useState({});
    let [T, setT] = n.useState(null);
    let [D, setD] = n.useState(false);
    let [O, setO] = n.useState(``);
    let [ke, setKe] = n.useState(null);
    let [j, setJ] = n.useState(null);
    let [Ae, setAe] = n.useState(``);
    let [N, setN] = n.useState(false);
    let [F, setF] = n.useState(``);
    let [Me, setMe] = n.useState(null);
    let [R, setR] = n.useState(null);
    let BRef = n.useRef(null);
    let VRef = n.useRef(true);
    n.useEffect(()=>{
        VRef.current = true;
        return ()=>{
            VRef.current = false;
        };
    }, []);
    n.useEffect(()=>{
        if (!Object.keys(C).length) {
            return;
        }
        let e = 0;
        let t = requestAnimationFrame(()=>{
            e = requestAnimationFrame(()=>setC({}));
        });
        return ()=>{
            cancelAnimationFrame(t);
            cancelAnimationFrame(e);
        };
    }, [
        C
    ]);
    n.useEffect(()=>{
        if (Object.keys(C).length || !BRef.current) {
            return;
        }
        let BRef_current = BRef.current;
        BRef.current = null;
        let t = window.setTimeout(()=>{
            let xeRef_current = xeRef.current;
            let n = xeRef_current?.querySelector(`[data-memory="${CSS.escape(BRef_current)}"]`);
            if (!xeRef_current || !n) {
                return;
            }
            let r = n.offsetTop - xeRef_current.offsetTop;
            if (r < xeRef_current.scrollTop || r + n.offsetHeight > xeRef_current.scrollTop + xeRef_current.clientHeight) {
                xeRef_current.scrollTo({
                    top: r - 8,
                    behavior: a() ? `auto` : `smooth`
                });
            }
        }, 120);
        return ()=>window.clearTimeout(t);
    }, [
        C
    ]);
    n.useEffect(()=>{
        if (!R) {
            return;
        }
        let e = window.setTimeout(()=>setR(null), undoFor);
        return ()=>window.clearTimeout(e);
    }, [
        R,
        undoFor
    ]);
    let H = [
        ...categories ?? []
    ];
    for (let e of v){
        if (!H.includes(e.category)) {
            H.push(e.category);
        }
    }
    let U = v.filter((e)=>!S[e.id]);
    let length = U.filter((e)=>e.paused).length;
    let G = O.trim().toLowerCase();
    let K = (e)=>(!T || e.category === T) && (!G || e.text.toLowerCase().includes(G) || e.category.toLowerCase().includes(G));
    let Ne = (e)=>K(e) && !S[e.id] && !C[e.id];
    let Pe = v.some((e)=>K(e) && !S[e.id]);
    let q = v.find((e)=>e.id === ke) ?? null;
    let Fe = useU({
        total: U.length,
        paused: length
    }, 520);
    let J = Math.round(Fe.total ?? U.length);
    let Ie = Math.round(Fe.paused ?? length);
    let Le = async (memory)=>{
        if (S[memory.id] || (j === memory.id && setJ(null), setKe(null), setS((t)=>({
                ...t,
                [memory.id]: true
            })), a() || await o(320), !VRef.current)) {
            return;
        }
        let index = yRef.current.findIndex((t)=>t.id === memory.id);
        b(yRef.current.filter((t)=>t.id !== memory.id));
        onForget?.(memory.id);
        setS(({ [memory.id]: t, ...rest })=>rest);
        setR({
            memory,
            index,
            key: Date.now()
        });
    };
    let Re = ()=>{
        if (!R) {
            return;
        }
        let { memory, index } = R;
        let n = [
            ...yRef.current
        ];
        n.splice(Math.max(0, Math.min(index, n.length)), 0, memory);
        setC({
            [memory.id]: true
        });
        BRef.current = memory.id;
        if (T && T !== memory.category) {
            setT(null);
        }
        b(n);
        onRestore?.(memory);
        setR(null);
    };
    let ze = (e)=>{
        b(yRef.current.map((t)=>{
            if (t.id === e.id) {
                return {
                    ...t,
                    paused: !t.paused
                };
            }
            return t;
        }));
        onPause?.(e.id, !e.paused);
    };
    let Be = (e)=>{
        setN(false);
        setAe(e.text);
        setJ(e.id);
    };
    let Ve = ()=>{
        let e = j;
        let t = Ae.trim().replace(/\s+/g, ` `);
        setJ(null);
        if (!e) {
            return;
        }
        let n = yRef.current.find((t)=>t.id === e);
        if (n && t && t !== n.text) {
            b(yRef.current.map((n)=>{
                if (n.id === e) {
                    return {
                        ...n,
                        text: t
                    };
                }
                return n;
            }));
            onEdit?.(e, t);
            window.requestAnimationFrame(()=>ref.current?.querySelector(`[data-memory="${CSS.escape(e)}"] [data-act="edit"]`)?.focus({
                    preventScroll: true
                }));
        }
    };
    let He = ()=>{
        let e = j;
        setJ(null);
        if (e) {
            window.requestAnimationFrame(()=>ref.current?.querySelector(`[data-memory="${CSS.escape(e)}"] [data-act="edit"]`)?.focus({
                    preventScroll: true
                }));
        }
    };
    let category = Me ?? T ?? H[0] ?? `General`;
    let Ue = ()=>{
        setJ(null);
        setF(``);
        setMe(T ?? H[0] ?? `General`);
        setN(true);
    };
    let X = ()=>{
        setN(false);
        window.requestAnimationFrame(()=>ref.current?.querySelector(`.ui-mp__add`)?.focus({
                preventScroll: true
            }));
    };
    let We = ()=>{
        let e = F.trim().replace(/\s+/g, ` `);
        if (!e) {
            return;
        }
        let t = {
            id: c(),
            text: e,
            category,
            source: addedSource,
            date: s()
        };
        setC({
            [t.id]: true
        });
        BRef.current = t.id;
        if (T && T !== t.category) {
            setT(null);
        }
        if (G) {
            setO(``);
        }
        b([
            ...yRef.current,
            t
        ]);
        onAdd?.(t);
        setF(``);
        X();
    };
    let Ge = ()=>{
        setD(false);
        setO(``);
        window.requestAnimationFrame(()=>ref.current?.querySelector(`.ui-mp__search-open`)?.focus({
                preventScroll: true
            }));
    };
    let Z = [
        null,
        ...H.filter((e)=>v.some((t)=>t.category === e))
    ];
    let onKeyDown = (e)=>{
        if (![
            `ArrowRight`,
            `ArrowLeft`,
            `ArrowDown`,
            `ArrowUp`,
            `Home`,
            `End`
        ].includes(e.key)) {
            return;
        }
        e.preventDefault();
        let t = Z.indexOf(T);
        let n = e.key === `Home` ? 0 : e.key === `End` ? Z.length - 1 : (t + (e.key === `ArrowRight` || e.key === `ArrowDown` ? 1 : -1) + Z.length) % Z.length;
        setT(Z[n]);
        let r = e.currentTarget.querySelectorAll(`[role='radio']`);
        r[n]?.focus();
        r[n]?.scrollIntoView({
            block: `nearest`,
            inline: `nearest`
        });
    };
    let Q = <><b>{J}</b>{` `}{J === 1 ? `memory` : `memories`}{(Ie > 0 || length > 0) && <>{` · `}{Ie}{` paused`}</>}</>;
    let id = `rest`;
    if (R) {
        Q = <><span className={`ui-mp__forgot`}><span className={`ui-mp__flat`}>{`Forgot “`}</span><b className={`ui-mp__quote`}>{R.memory.text}</b><span className={`ui-mp__flat`}>{`”`}</span></span></>;
        id = `forgot-${R.key}`;
    } else if (j) {
        Q = `Enter to save · Esc to cancel`;
        id = `editing`;
    } else if (N) {
        Q = `Pick a category · Enter to save`;
        id = `adding`;
    } else if (q) {
        Q = <><b>{q.category}</b>{` ·`}{` `}{x ? q.paused ? `paused, not used in answers` : `used in answers` : `memory is off`}</>;
        id = `hot-${q.id}-${+!!q.paused}-${+!!x}`;
    } else if (!x) {
        Q = `Memory is off`;
        id = `off`;
    }
    return <div ref={ref} className={[
        `ui-mp`,
        className
    ].filter(Boolean).join(` `)} role={`group`} aria-labelledby={`${g}-title`} data-off={x ? undefined : ``} style={{
        "--ui-mp-max": `${maxHeight}px`
    }}><style href={`ui-memory-panel`} precedence={`default`}>{ue}</style><div className={`ui-mp__card`}><div className={`ui-mp__head`}><span id={`${g}-title`} className={`ui-mp__title`}>{title}</span><span className={`ui-mp__count`} aria-hidden={`true`}>{J}</span><button type={`button`} role={`switch`} aria-checked={x} aria-controls={`${g}-note`} className={`ui-mp__switch`} onClick={()=>Ee(!x)}><span className={`ui-mp__switch-label`}>{`Use memory`}</span><span className={`ui-mp__track`} aria-hidden={`true`}><span className={`ui-mp__knob`}/></span></button></div><div id={`${g}-note`} className={`ui-mp__fold`} data-open={x ? undefined : ``} inert={x}><div className={`ui-mp__clip`}><p className={`ui-mp__note`}><Se1Component/><span>{`The assistant won't use or save memories in new chats. Nothing here is deleted.`}</span></p></div></div><div className={`ui-mp__filters`} data-searching={D ? `` : undefined}><div className={`ui-mp__chips`} role={`radiogroup`} aria-label={`Category`} inert={D} onKeyDown={onKeyDown}>{Z.map((e)=>{
        let length = U.filter((t)=>!e || t.category === e).length;
        let n = T === e;
        return <button key={e ?? `#all`} type={`button`} role={`radio`} aria-checked={n} tabIndex={n ? 0 : -1} className={`ui-mp__chip`} data-linked={e && q?.category === e ? `` : undefined} onClick={()=>setT(e)}>{e ?? `All`}<span className={`ui-mp__chip-count`}>{length}</span></button>;
    })}</div><div className={`ui-mp__search`} inert={!D}><M1Component/><input className={`ui-mp__input`} type={`text`} value={O} placeholder={`Search memories`} aria-label={`Search memories`} onChange={(e)=>setO(e.target.value)} onKeyDown={(e)=>{
        if (e.key === `Escape`) {
            e.stopPropagation();
            Ge();
        }
    }} ref={(e)=>{
        if (e && D && document.activeElement !== e && !e.dataset.focused) {
            e.dataset.focused = `1`;
            e.focus({
                preventScroll: true
            });
        }
        if (e && !D) {
            delete e.dataset.focused;
        }
    }}/><button type={`button`} className={`ui-mp__icon`} aria-label={`Close search`} onClick={Ge}><Oe1Component/></button></div><button type={`button`} className={`ui-mp__icon ui-mp__search-open`} aria-label={`Search memories`} aria-expanded={D} inert={D} onClick={()=>{
        setT(null);
        setD(true);
    }}><M1Component/></button></div><div ref={xeRef} className={`ui-mp__list`} onPointerLeave={()=>setKe(null)}>{H.map((e)=>{
        let t = v.filter((t)=>t.category === e);
        if (!t.length) {
            return null;
        }
        let n = t.some((e)=>K(e) && !S[e.id]);
        return <section key={e} className={`ui-mp__fold`} data-open={n ? `` : undefined} inert={!n} aria-label={e}><div className={`ui-mp__clip`}><h3 className={`ui-mp__group`}>{e}</h3><ul className={`ui-mp__items`}>{t.map((e)=>{
            let t = j === e.id;
            let n = Ne(e);
            return <li key={e.id} className={`ui-mp__fold ui-mp__fold--row`} data-open={n ? `` : undefined} data-leaving={S[e.id] ? `` : undefined} inert={!n}><div className={`ui-mp__clip`}><div className={`ui-mp__item`} data-memory={e.id} data-paused={e.paused ? `` : undefined} data-hot={ke === e.id ? `` : undefined} data-editing={t ? `` : undefined} onPointerEnter={(t)=>t.pointerType === `mouse` && setKe(e.id)} onFocus={()=>setKe(e.id)} onBlur={(e)=>{
                if (!e.currentTarget.contains(e.relatedTarget)) {
                    setKe(null);
                }
            }}>{t ? <textarea className={`ui-mp__edit`} value={Ae} rows={1} aria-label={`Edit memory`} ref={(e)=>{
                l(e);
                if (e && !e.dataset.focused) {
                    e.dataset.focused = `1`;
                    e.focus({
                        preventScroll: true
                    });
                    e.setSelectionRange(e.value.length, e.value.length);
                }
            }} onChange={(e)=>{
                setAe(e.target.value);
                l(e.target);
            }} onKeyDown={(e)=>{
                if (e.key === `Enter` && !e.shiftKey) {
                    e.preventDefault();
                    Ve();
                } else if (e.key === `Escape`) {
                    e.stopPropagation();
                    He();
                }
            }}/> : <p className={`ui-mp__text`}>{e.text}</p>}<div className={`ui-mp__meta`}><span className={`ui-mp__source`}>{[
                e.source,
                e.date
            ].filter(Boolean).join(` · `)}</span><span className={`ui-mp__tag`} data-on={e.paused ? `` : undefined} aria-hidden={!e.paused}>{`Paused`}</span>{t ? <span className={`ui-mp__acts ui-mp__acts--edit`}><button type={`button`} className={`ui-mp__text-btn`} onClick={He}>{`Cancel`}</button><button type={`button`} className={`ui-mp__text-btn ui-mp__text-btn--main`} onClick={Ve}>{`Save`}</button></span> : <span className={`ui-mp__acts`}><button type={`button`} className={`ui-mp__icon`} data-act={`edit`} aria-label={`Edit “${e.text}”`} title={`Edit`} onClick={()=>Be(e)}><Ee1Component/></button><button type={`button`} className={`ui-mp__icon`} data-act={`pause`} aria-label={`${e.paused ? `Resume` : `Pause`} “${e.text}”`} title={e.paused ? `Resume` : `Pause`} onClick={()=>ze(e)}><span key={e.paused ? `play` : `pause`} className={`ui-mp__icon-swap`}>{e.paused ? <Ne1Component/> : <Te1Component/>}</span></button><button type={`button`} className={`ui-mp__icon ui-mp__icon--forget`} data-act={`forget`} aria-label={`Forget “${e.text}”`} title={`Forget`} onClick={()=>Le(e)}><Re1Component/></button></span>}</div></div></div></li>;
        })}</ul></div></section>;
    })}<div className={`ui-mp__fold`} data-open={Pe ? undefined : ``} inert={Pe}><div className={`ui-mp__clip`}><p className={`ui-mp__empty`}>{v.length === 0 ? `Nothing remembered yet` : G ? `No memory mentions “${O.trim()}”` : `No memories here`}</p></div></div></div><div className={`ui-mp__bottom`}><div className={`ui-mp__fold`} data-open={N ? undefined : ``} inert={N}><div className={`ui-mp__clip`}><button type={`button`} className={`ui-mp__add`} aria-expanded={N} aria-controls={`${g}-new`} onClick={Ue}><Ae1Component/>{`New memory`}</button></div></div><div id={`${g}-new`} className={`ui-mp__fold`} data-open={N ? `` : undefined} inert={!N}><div className={`ui-mp__clip`}><div className={`ui-mp__new`}><textarea className={`ui-mp__edit ui-mp__edit--new`} value={F} rows={1} placeholder={`Something the assistant should remember…`} aria-label={`New memory`} ref={(e)=>{
        l(e);
        if (e && N && !e.dataset.focused) {
            e.dataset.focused = `1`;
            e.focus({
                preventScroll: true
            });
        }
        if (e && !N) {
            delete e.dataset.focused;
        }
    }} onChange={(e)=>{
        setF(e.target.value);
        l(e.target);
    }} onKeyDown={(e)=>{
        if (e.key === `Enter` && !e.shiftKey) {
            e.preventDefault();
            We();
        } else if (e.key === `Escape`) {
            e.stopPropagation();
            X();
        }
    }}/><div className={`ui-mp__new-row`}><div className={`ui-mp__cats`} role={`radiogroup`} aria-label={`Category of the new memory`} onKeyDown={(e)=>{
        let t = H.length ? H : [
            `General`
        ];
        if (![
            `ArrowRight`,
            `ArrowLeft`,
            `ArrowDown`,
            `ArrowUp`
        ].includes(e.key)) {
            return;
        }
        e.preventDefault();
        let n = (t.indexOf(category) + (e.key === `ArrowRight` || e.key === `ArrowDown` ? 1 : -1) + t.length) % t.length;
        setMe(t[n]);
        e.currentTarget.querySelectorAll(`[role='radio']`)[n]?.focus();
    }}>{(H.length ? H : [
        `General`
    ]).map((e)=><button key={e} type={`button`} role={`radio`} aria-checked={category === e} tabIndex={category === e ? 0 : -1} className={`ui-mp__cat`} onClick={()=>setMe(e)}>{e}</button>)}</div><span className={`ui-mp__acts ui-mp__acts--edit`}><button type={`button`} className={`ui-mp__text-btn`} onClick={X}>{`Cancel`}</button><button type={`button`} className={`ui-mp__text-btn ui-mp__text-btn--main`} disabled={!F.trim()} onClick={We}>{`Save`}</button></span></div></div></div></div></div></div><div className={`ui-mp__foot`}><span className={`ui-mp__caption`} aria-live={`polite`}><D1Component id={id}>{Q}</D1Component></span>{R ? <button key={`undo-${R.key}`} type={`button`} className={`ui-mp__action ui-mp__action--undo`} onClick={Re}><Ie1Component/>{`Undo`}</button> : action && <button key={`action`} type={`button`} className={`ui-mp__action`} onClick={action.onClick}>{action.label}<Ce1Component/></button>}</div></div>;
}
var ue = `.ui-mp{--ui-mp-tray: #f0f0f0;--ui-mp-card: #ffffff;--ui-mp-line: #ececec;--ui-mp-ink: #171717;--ui-mp-text: #404040;--ui-mp-muted: #8f8f8f;--ui-mp-well: #f4f4f5;--ui-mp-hover: #ececee;--ui-mp-track: #dcdce0;--ui-mp-accent: #2f6bff;--ui-mp-red: #b42318;--ui-mp-red-bg: rgba(229, 72, 77, 0.1);--ui-mp-tag: #5f5f66;--ui-mp-tag-bg: rgba(110, 110, 120, 0.1);--ui-mp-focus: rgba(23, 23, 23, 0.22);--ui-mp-ease: cubic-bezier(0.32, 0.72, 0.24, 1);box-sizing: border-box;width: 100%;max-width: 380px;min-width: 0;container-type: inline-size;padding: 4px;border-radius: 20px;background: var(--ui-mp-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;color: var(--ui-mp-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-mp *, .ui-mp *::before, .ui-mp *::after{box-sizing: border-box}:where(.ui-mp) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-mp) :is(p, h3, ul){margin: 0;padding: 0;list-style: none;font: inherit}.ui-mp :is(button, input, textarea):focus-visible{outline: 2px solid var(--ui-mp-focus);outline-offset: 2px}.ui-mp svg{display: block;flex: none}.ui-mp b{font-weight: 500;color: var(--ui-mp-ink)}.ui-mp__card{border-radius: 16px;background: var(--ui-mp-card);box-shadow: 0 0 0 1px var(--ui-mp-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-mp__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 420ms var(--ui-mp-ease), opacity 220ms ease}.ui-mp__fold[data-open]{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows 420ms var(--ui-mp-ease), opacity 320ms ease 80ms}.ui-mp__fold--row[data-leaving]{transition: grid-template-rows 320ms var(--ui-mp-ease), opacity 200ms ease, filter 200ms ease;filter: blur(2px)}.ui-mp__clip{min-height: 0;overflow: hidden}.ui-mp__head{display: flex;align-items: center;gap: 8px;height: 48px;padding: 0 12px 0 14px}.ui-mp__title{min-width: 0;overflow: hidden;font-size: 13.5px;font-weight: 600;color: var(--ui-mp-ink);white-space: nowrap;text-overflow: ellipsis}.ui-mp__count{flex: none;min-width: 20px;height: 20px;padding: 0 6px;border-radius: 5px;background: var(--ui-mp-well);font-size: 12px;font-weight: 500;line-height: 20px;text-align: center;color: var(--ui-mp-muted);font-variant-numeric: tabular-nums}.ui-mp__switch{display: inline-flex;flex: none;align-items: center;gap: 8px;height: 28px;margin-left: auto;padding: 0 2px 0 8px;border-radius: 8px;font-size: 12.5px;color: var(--ui-mp-text);transition: background-color 160ms ease}.ui-mp__switch:hover{background: var(--ui-mp-well)}.ui-mp__track{position: relative;width: 28px;height: 16px;border-radius: 8px;background: var(--ui-mp-track);transition: background-color 240ms ease}.ui-mp__knob{position: absolute;top: 2px;left: 2px;width: 12px;height: 12px;border-radius: 50%;background: #fff;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);transition: transform 280ms var(--ui-mp-ease)}.ui-mp__switch[aria-checked="true"] .ui-mp__track{background: var(--ui-mp-ink)}.ui-mp__switch[aria-checked="true"] .ui-mp__knob{transform: translateX(12px)}.ui-mp__note{display: flex;gap: 8px;margin: 0 12px 10px !important;padding: 8px 10px;border-radius: 10px;background: var(--ui-mp-well);font-size: 12.5px;line-height: 18px;color: var(--ui-mp-text)}.ui-mp__note svg{margin-top: 2px;color: var(--ui-mp-muted)}.ui-mp__filters{position: relative;display: grid;grid-template-columns: minmax(0, 1fr) auto;align-items: center;gap: 4px;padding: 0 10px 10px 12px}.ui-mp__chips, .ui-mp__search{grid-area: 1 / 1;transition: opacity 220ms ease, filter 220ms ease}.ui-mp__chips{display: flex;gap: 4px;min-width: 0;margin: -2px -4px;padding: 2px 4px;overflow-x: auto;scrollbar-width: none;mask-image: linear-gradient(90deg, #000 calc(100% - 14px), transparent)}.ui-mp__chips::-webkit-scrollbar{display: none}.ui-mp__chip{display: inline-flex;flex: none;align-items: center;gap: 5px;height: 26px;padding: 0 8px;border-radius: 8px;font-size: 12.5px;color: var(--ui-mp-text);white-space: nowrap;transition: background-color 160ms ease, color 160ms ease, box-shadow 160ms ease}.ui-mp__chip:hover{background: var(--ui-mp-well)}.ui-mp__chip[data-linked]{color: var(--ui-mp-ink)}.ui-mp__chip[data-linked]:not([aria-checked="true"]){background: var(--ui-mp-well)}.ui-mp__chip[aria-checked="true"]{background: var(--ui-mp-well);color: var(--ui-mp-ink);box-shadow: inset 0 0 0 1px var(--ui-mp-line)}.ui-mp__chip-count{font-size: 11.5px;color: var(--ui-mp-muted);font-variant-numeric: tabular-nums}.ui-mp__search{display: flex;align-items: center;gap: 6px;height: 28px;padding: 0 2px 0 8px;border-radius: 8px;background: var(--ui-mp-well);color: var(--ui-mp-muted);opacity: 0;visibility: hidden}.ui-mp__input{flex: 1;min-width: 0;height: 28px;margin: 0;padding: 0;border: 0;background: none;font: inherit;font-size: 12.5px;color: var(--ui-mp-ink);outline: none}.ui-mp__input::placeholder{color: var(--ui-mp-muted)}.ui-mp__search .ui-mp__icon{width: 24px;height: 24px}.ui-mp__filters[data-searching] .ui-mp__chips{opacity: 0;filter: blur(2px)}.ui-mp__filters[data-searching] .ui-mp__search{grid-area: 1 / 1 / 2 / 3;opacity: 1;visibility: visible}.ui-mp__filters[data-searching] .ui-mp__search-open{opacity: 0;visibility: hidden}.ui-mp__search-open{grid-area: 1 / 2;transition: opacity 200ms ease, background-color 160ms ease, color 160ms ease}.ui-mp__list{max-height: var(--ui-mp-max);padding: 2px 6px 6px;overflow-y: auto;overscroll-behavior: contain;scrollbar-width: thin;scrollbar-color: var(--ui-mp-track) transparent;border-top: 1px solid var(--ui-mp-line);transition: opacity 300ms ease}.ui-mp[data-off] .ui-mp__list, .ui-mp[data-off] .ui-mp__filters{opacity: 0.5}.ui-mp[data-off] .ui-mp__list:hover, .ui-mp[data-off] .ui-mp__list:focus-within{opacity: 0.85}.ui-mp__filters{transition: opacity 300ms ease}.ui-mp__group{padding: 10px 8px 2px;font-size: 12px !important;font-weight: 500 !important;line-height: 18px !important;color: var(--ui-mp-muted)}.ui-mp__item{padding: 6px 8px 5px;border-radius: 10px;transition: background-color 160ms ease, opacity 220ms ease}.ui-mp__item[data-hot], .ui-mp__item[data-editing]{background: var(--ui-mp-well)}.ui-mp__text{color: var(--ui-mp-ink);overflow-wrap: anywhere;transition: color 240ms ease}.ui-mp__item[data-paused] .ui-mp__text{color: var(--ui-mp-muted)}.ui-mp__meta{display: flex;align-items: center;gap: 6px;min-height: 24px;font-size: 12px;color: var(--ui-mp-muted)}.ui-mp__source{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-mp__tag{display: inline-flex;flex: none;align-items: center;height: 18px;padding: 0 6px;border-radius: 5px;background: var(--ui-mp-tag-bg);font-size: 11.5px;font-weight: 500;color: var(--ui-mp-tag);opacity: 0;transform: scale(0.9);transition: opacity 220ms ease, transform 280ms var(--ui-mp-ease)}.ui-mp__tag:not([data-on]){position: absolute;visibility: hidden}.ui-mp__tag[data-on]{opacity: 1;transform: none;animation: ui-mp-in 280ms var(--ui-mp-ease) both}.ui-mp__acts{display: inline-flex;flex: none;align-items: center;gap: 2px;margin: -1px -4px -1px auto;opacity: 0;transition: opacity 180ms ease}.ui-mp__item:is([data-hot], :focus-within) .ui-mp__acts, .ui-mp__acts--edit{opacity: 1}.ui-mp__icon{display: grid;flex: none;place-items: center;width: 26px;height: 26px;border-radius: 8px;color: var(--ui-mp-muted);transition: background-color 160ms ease, color 160ms ease, opacity 200ms ease}.ui-mp__icon:hover{background: var(--ui-mp-hover);color: var(--ui-mp-ink)}.ui-mp__icon--forget:hover{background: var(--ui-mp-red-bg);color: var(--ui-mp-red)}.ui-mp__icon-swap{display: grid;animation: ui-mp-in 260ms ease both}.ui-mp__text-btn{display: inline-flex;align-items: center;height: 26px;padding: 0 9px;border-radius: 8px;font-size: 12.5px;font-weight: 500;color: var(--ui-mp-text);transition: background-color 160ms ease, color 160ms ease, opacity 160ms ease}.ui-mp__text-btn:hover{background: var(--ui-mp-hover);color: var(--ui-mp-ink)}.ui-mp__text-btn--main{background: var(--ui-mp-ink);color: var(--ui-mp-card)}.ui-mp__text-btn--main:hover{background: var(--ui-mp-ink);color: var(--ui-mp-card);opacity: 0.86}.ui-mp__text-btn:disabled{cursor: default;opacity: 0.35}.ui-mp__edit{display: block;width: 100%;min-height: 20px;margin: 0;padding: 0;border: 0;background: none;font: inherit;color: var(--ui-mp-ink);resize: none;overflow: hidden;outline: none}.ui-mp__edit::placeholder{color: var(--ui-mp-muted)}.ui-mp__item .ui-mp__edit:focus-visible{outline: none}.ui-mp__empty{padding: 18px 8px 12px;font-size: 12.5px;text-align: center;color: var(--ui-mp-muted)}.ui-mp__bottom{padding: 4px 6px 6px;border-top: 1px solid var(--ui-mp-line)}.ui-mp__add{display: flex;align-items: center;gap: 8px;width: 100%;height: 32px;padding: 0 8px;border-radius: 10px;font-size: 13px;color: var(--ui-mp-muted);transition: background-color 160ms ease, color 160ms ease}.ui-mp__add:hover{background: var(--ui-mp-well);color: var(--ui-mp-ink)}.ui-mp__new{margin: 2px 0 0;padding: 8px 8px 6px;border-radius: 10px;background: var(--ui-mp-well)}.ui-mp__new-row{display: flex;flex-wrap: wrap;align-items: center;justify-content: flex-end;gap: 6px;margin-top: 8px}.ui-mp__cats{display: flex;flex: 1 1 auto;flex-wrap: wrap;gap: 4px;min-width: 0}.ui-mp__cat{display: inline-flex;align-items: center;height: 24px;padding: 0 8px;border-radius: 6px;font-size: 12px;color: var(--ui-mp-muted);transition: background-color 160ms ease, color 160ms ease, box-shadow 160ms ease}.ui-mp__cat:hover{color: var(--ui-mp-ink)}.ui-mp__cat[aria-checked="true"]{background: var(--ui-mp-card);color: var(--ui-mp-ink);box-shadow: 0 0 0 1px var(--ui-mp-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-mp__foot{display: flex;align-items: center;gap: 8px;min-height: 38px;padding: 4px 4px 0 10px}.ui-mp__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-mp-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-mp__swap{display: grid;min-width: 0}.ui-mp__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;animation: ui-mp-swap-in 320ms ease both}.ui-mp__swap-item[data-out]{animation: ui-mp-swap-out 220ms ease both}.ui-mp__forgot{display: flex;min-width: 0}.ui-mp__flat{flex: none;white-space: pre}.ui-mp__quote{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-mp__action{display: inline-flex;flex: none;align-items: center;gap: 5px;height: 26px;padding: 0 8px;border-radius: 10px;font-size: 12.5px;font-weight: 500;color: var(--ui-mp-text);white-space: nowrap;animation: ui-mp-swap-in 300ms ease both;transition: background-color 160ms ease, color 160ms ease}.ui-mp__action:hover{background: var(--ui-mp-card);color: var(--ui-mp-ink)}.ui-mp__action--undo{padding: 0 9px 0 7px;background: var(--ui-mp-card);color: var(--ui-mp-ink);box-shadow: 0 0 0 1px var(--ui-mp-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-mp__action:not(.ui-mp__action--undo) svg{transition: transform 220ms var(--ui-mp-ease)}.ui-mp__action:not(.ui-mp__action--undo):hover svg{transform: translateX(2px)}@keyframes ui-mp-in{from{opacity: 0;transform: scale(0.9)}}@keyframes ui-mp-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-mp-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@container (max-width: 340px){.ui-mp__chip-count{display: none}.ui-mp__chip{padding: 0 7px}}@container (max-width: 320px){.ui-mp__switch-label{display: none}.ui-mp__switch{padding: 0 2px}}@media (pointer: coarse){.ui-mp__acts{opacity: 1}.ui-mp__icon{width: 32px;height: 32px}.ui-mp__meta{min-height: 32px}.ui-mp__chip, .ui-mp__text-btn{height: 32px}.ui-mp__cat{height: 30px}.ui-mp__switch, .ui-mp__add{height: 36px}.ui-mp__action{height: 30px}}@media (prefers-reduced-motion: reduce){.ui-mp *, .ui-mp *::before, .ui-mp *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-mp{--ui-mp-tray: #111113;--ui-mp-card: #19191b;--ui-mp-line: #2a2a2e;--ui-mp-ink: #ededed;--ui-mp-text: #c8c8cc;--ui-mp-muted: #8b8b92;--ui-mp-well: #222225;--ui-mp-hover: #2c2c30;--ui-mp-track: #3a3a40;--ui-mp-red: #ff9b93;--ui-mp-red-bg: rgba(229, 72, 77, 0.16);--ui-mp-tag: #b4b4bb;--ui-mp-tag-bg: rgba(160, 160, 170, 0.14);--ui-mp-focus: rgba(255, 255, 255, 0.3)}:where(.dark, [data-theme="dark"]) .ui-mp__knob{background: #19191b}:where(.dark, [data-theme="dark"]) .ui-mp__switch[aria-checked="false"] .ui-mp__knob{background: #8b8b92}`;
const memories = [
    {
        id: `ts`,
        text: `Prefers TypeScript examples over plain JavaScript`,
        category: `Preferences`,
        source: `From chat`,
        date: `Oct 12`
    },
    {
        id: `short`,
        text: `Likes short answers first, details only when asked`,
        category: `Preferences`,
        source: `You added`,
        date: `Oct 2`
    },
    {
        id: `inter`,
        text: `Designs with Inter and a 4px spacing grid`,
        category: `Preferences`,
        source: `From Figma`,
        date: `Oct 7`
    },
    {
        id: `role`,
        text: `Product designer and front-end developer at a small studio`,
        category: `Work`,
        source: `From chat`,
        date: `Sep 28`
    },
    {
        id: `stack`,
        text: `Ships with React, Vite and Tailwind; deploys on Vercel`,
        category: `Work`,
        source: `From chat`,
        date: `Oct 3`
    },
    {
        id: `notes`,
        text: `Sends release notes to clients every Friday`,
        category: `Work`,
        source: `From chat`,
        date: `Oct 9`
    },
    {
        id: `fintech`,
        text: `Redesigning the onboarding flow for a fintech client, due Oct 24`,
        category: `Projects`,
        source: `From chat`,
        date: `Oct 11`
    },
    {
        id: `tokens`,
        text: `Keeps design tokens in one tokens.json shared with the code`,
        category: `Projects`,
        source: `From chat`,
        date: `Oct 5`
    }
];
function FeComponent() {
    let eRef = n.useRef(null);
    let tRef = n.useRef(false);
    n.useEffect(()=>{
        let n = (t)=>()=>eRef.current?.querySelector(t)?.click();
        let r = (e, t)=>n(`[data-memory="${e}"] [data-act="${t}"]`);
        let i = (e)=>n(`.ui-mp__chip:nth-child(${e})`);
        let a = [
            [
                700,
                r(`short`, `pause`)
            ],
            [
                2700,
                r(`ts`, `forget`)
            ],
            [
                2600,
                n(`.ui-mp__action--undo`)
            ],
            [
                2200,
                i(4)
            ],
            [
                2400,
                i(1)
            ],
            [
                1800,
                r(`short`, `pause`)
            ]
        ];
        let o = 0;
        let s = 0;
        let c = ()=>{
            if (!tRef.current) {
                if (o >= a.length) {
                    o = 0;
                    a[0][0] = 1800;
                }
                s = window.setTimeout(()=>{
                    if (!tRef.current) {
                        a[o][1]();
                        o++;
                        c();
                    }
                }, a[o][0]);
            }
        };
        c();
        return ()=>window.clearTimeout(s);
    }, []);
    let i = ()=>tRef.current = true;
    return <div ref={eRef} className={`mp-demo`} onPointerEnter={i} onPointerDownCapture={i} onKeyDownCapture={i} onFocusCapture={i}><Le1Component memories={memories} maxHeight={330}/></div>;
}
export { FeComponent as default };
