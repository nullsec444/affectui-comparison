import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = {
    agent: `Agent run`,
    subagent: `Sub-agent`,
    llm: `LLM call`,
    tool: `Tool call`
};
const a = {
    running: `Running`,
    done: `Done`,
    failed: `Failed`
};
const o = 1000;
const s = [
    5,
    10,
    15,
    20,
    30,
    45,
    60,
    90,
    120,
    180,
    300,
    450,
    600,
    900,
    1200,
    1800,
    2700,
    3600,
    5400,
    7200
].map((e)=>e * o);
const c = [
    1,
    2,
    3,
    5,
    10,
    15,
    20,
    30,
    60,
    120,
    300,
    600,
    900,
    1800,
    3600
].map((e)=>e * o);
const l = 720;
const u = 280;
const d = 36;
const f = (e)=>{
    if (e === 0) {
        return `$0`;
    }
    if (e < 0.01) {
        return `$${e.toFixed(3)}`;
    }
    if (e < 10) {
        return `$${e.toFixed(2)}`;
    }
    return `$${Math.round(e).toLocaleString(`en-US`)}`;
};
const p = (e)=>{
    if (e < o) {
        return `${Math.max(0, Math.round(e))}ms`;
    }
    if (e < 10 * o) {
        return `${(e / o).toFixed(1)}s`;
    }
    let t = Math.round(e / o);
    if (t < 60) {
        return `${t}s`;
    }
    return `${Math.floor(t / 60)}m ${String(t % 60).padStart(2, `0`)}s`;
};
const m = (e)=>{
    let t = Math.round(e / o);
    if (t < 60) {
        return `${t}s`;
    }
    if (t % 60) {
        return `${Math.floor(t / 60)}m ${t % 60}s`;
    }
    return `${t / 60}m`;
};
const h = (e)=>{
    if (e < 1000) {
        return String(Math.round(e));
    }
    if (e < 100000) {
        return `${(e / 1000).toFixed(1)}k`;
    }
    return `${Math.round(e / 1000)}k`;
};
const g = (e)=>[
        e,
        ...(e.children ?? []).flatMap(g)
    ];
const _ = (e)=>(e.cost ?? 0) + (e.children ?? []).reduce((acc, item)=>acc + _(item), 0);
const v = (e)=>(e.children ?? []).reduce((acc, item)=>{
        let [n, r] = v(item);
        return [
            acc[0] + n,
            acc[1] + r
        ];
    }, [
        e.tokensIn ?? 0,
        e.tokensOut ?? 0
    ]);
const y = ()=>typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
const ee = (e)=>{
    if (e < 0.5) {
        return 4 * e * e * e;
    }
    return 1 - (-2 * e + 2) ** 3 / 2;
};
const B1Component = ()=><svg width={`14`} height={`14`} viewBox={`0 0 14 14`} aria-hidden={`true`}><path d={`M7 1.2c.4 2.9 1.9 4.4 4.8 4.8-2.9.4-4.4 1.9-4.8 4.8C6.6 7.9 5.1 6.4 2.2 6 5.1 5.6 6.6 4.1 7 1.2Z`} fill={`currentColor`}/><circle cx={`11.6`} cy={`11.4`} r={`1.1`} fill={`currentColor`} opacity={`0.55`}/></svg>;
const Te1Component = ()=><svg width={`12`} height={`12`} viewBox={`0 0 24 24`} fill={`none`} aria-hidden={`true`}><path d={`M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`1.8`}/></svg>;
const Ne1Component = ()=><svg width={`12`} height={`12`} viewBox={`0 0 24 24`} fill={`none`} aria-hidden={`true`}><path d={`M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`2`}/><path d={`M12 9V13`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`2.2`}/><path d={`M12 16.8V17`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`2.6`}/></svg>;
const Re1Component = ()=><svg className={`ui-tw__spin`} width={`12`} height={`12`} viewBox={`0 0 24 24`} fill={`none`} aria-hidden={`true`}><circle cx={`12`} cy={`12`} r={`8.5`} stroke={`currentColor`} strokeOpacity={`0.25`} strokeWidth={`2.5`}/><path d={`M12 3.5A8.5 8.5 0 0 1 20.5 12`} stroke={`currentColor`} strokeLinecap={`round`} strokeWidth={`2.5`}/></svg>;
const Ie1Component = ()=><svg width={`14`} height={`14`} viewBox={`0 0 24 24`} fill={`none`} aria-hidden={`true`}><path d={`M19 5L5 19M5 5L19 19`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`1.8`}/></svg>;
function Ae1Component({ root, now, startedAt, collapsed, defaultCollapsed = [], onCollapsedChange, openId, defaultOpenId = null, onOpenChange, markSlowest = true, minRange = 10 * o, formatCost = f, title = `Trace`, className }) {
    let ORef = n.useRef(null);
    let ueRef = n.useRef(null);
    let deRef = n.useRef(null);
    let kRef = n.useRef(null);
    let ARef = n.useRef(null);
    let jRef = n.useRef(new Map);
    let [fe, setFe] = n.useState(defaultCollapsed);
    let M = collapsed ?? fe;
    let me = (e)=>{
        let t = M.includes(e) ? M.filter((t)=>t !== e) : [
            ...M,
            e
        ];
        setFe(t);
        onCollapsedChange?.(t);
    };
    let [he, setHe] = n.useState(defaultOpenId);
    let N = g(root);
    let P = openId === undefined ? he : openId;
    let F = P ? N.find((e)=>e.id === P) : undefined;
    let I = (e)=>{
        setHe(e);
        onOpenChange?.(e, e ? N.find((t)=>t.id === e) : undefined);
    };
    let L = N.some((e)=>e.status === `running`);
    let [_e, set_e] = n.useState(()=>Date.now());
    n.useEffect(()=>{
        if (now !== undefined || startedAt === undefined || !L) {
            return;
        }
        let e = window.setInterval(()=>set_e(Date.now()), 100);
        return ()=>window.clearInterval(e);
    }, [
        L,
        now,
        startedAt
    ]);
    let ye = Math.max(0, ...N.map((e)=>e.end ?? e.start));
    let R = now ?? (startedAt !== undefined && L ? _e - startedAt : ye);
    let be = (e)=>e.end ?? (e.status === `running` ? Math.max(R, e.start) : e.start);
    let z = (e)=>Math.max(0, be(e) - e.start);
    let [B, setB] = n.useState(0);
    let Se = Math.max(L ? R : 0, ...N.map(be));
    let Ce = Math.max(minRange, Se * 1.2);
    let V = s.find((e)=>e >= Ce) ?? Math.ceil(Ce / 3600000) * 3600000;
    let we = Math.min(8, Math.max(3, Math.round((B || 600) / 96)));
    let Te = c.find((e)=>V / e <= we) ?? V / we;
    let H = [];
    for(let e = 0; e < V - 1; e += Te){
        H.push(e);
    }
    let EeRef = n.useRef([]);
    let [De, setDe] = n.useState([]);
    let ke = H.join(`,`);
    n.useLayoutEffect(()=>{
        let e = EeRef.current.filter((e)=>!H.includes(e));
        EeRef.current = H;
        if (e.length && !y()) {
            setDe((t)=>[
                    ...t.filter((t)=>!H.includes(t) && !e.includes(t)),
                    ...e
                ]);
            window.setTimeout(()=>setDe((t)=>t.filter((t)=>!e.includes(t) || EeRef.current.includes(t))), 520);
        }
    }, [
        ke
    ]);
    let AeRef = n.useRef(V);
    let URef = n.useRef(0);
    let jeRef = n.useRef(true);
    n.useLayoutEffect(()=>{
        let ORef_current = ORef.current;
        if (!ORef_current) {
            return;
        }
        let t = (t)=>{
            AeRef.current = t;
            ORef_current.style.setProperty(`--ui-tw-range`, String(t));
        };
        cancelAnimationFrame(URef.current);
        if (jeRef.current || y()) {
            jeRef.current = false;
            t(V);
            return;
        }
        let AeRef_current = AeRef.current;
        if (AeRef_current === V) {
            return;
        }
        let r = performance.now();
        let i = ()=>{
            let e = Math.min(1, (performance.now() - r) / l);
            t(AeRef_current + (V - AeRef_current) * ee(e));
            if (e < 1) {
                URef.current = requestAnimationFrame(i);
            }
        };
        URef.current = requestAnimationFrame(i);
    }, [
        V
    ]);
    n.useEffect(()=>()=>cancelAnimationFrame(URef.current), []);
    n.useLayoutEffect(()=>{
        let deRef_current = deRef.current;
        if (!deRef_current) {
            return;
        }
        let t = new ResizeObserver(()=>setB(deRef_current.offsetWidth));
        t.observe(deRef_current);
        return ()=>t.disconnect();
    }, []);
    let W = [];
    let Me = (span, depth, parentId, hidden)=>{
        W.push({
            span,
            depth,
            parentId,
            hidden
        });
        let i = hidden || M.includes(span.id);
        for (let n of span.children ?? []){
            Me(n, depth + 1, span.id, i);
        }
    };
    Me(root, 0, undefined, false);
    let Ne = new Set(W.map((e)=>e.span.id));
    let [Pe, setPe] = n.useState([]);
    let IeRef = n.useRef([]);
    n.useLayoutEffect(()=>{
        let IeRef_current = IeRef.current;
        IeRef.current = W;
        if (y()) {
            return;
        }
        let t = IeRef_current.filter((e)=>!Ne.has(e.span.id));
        if (!t.length) {
            return;
        }
        let n = t.map((n, r)=>({
                row: {
                    ...n,
                    leaving: Math.min(240, (t.length - 1 - r) * 22)
                },
                index: IeRef_current.indexOf(n)
            }));
        let r = new Set(n.map((e)=>e.row.span.id));
        setPe((e)=>[
                ...e.filter((e)=>!r.has(e.row.span.id)),
                ...n
            ]);
        window.setTimeout(()=>setPe((e)=>e.filter((e)=>!r.has(e.row.span.id))), 580);
    });
    let G = [
        ...W
    ];
    let Le = Pe.filter((e)=>!Ne.has(e.row.span.id)).sort((e, t)=>e.index - t.index);
    let Re = Le.some((e)=>e.row.depth === 0);
    for (let e of Le){
        if (Re) {
            G.push(e.row);
        } else {
            G.splice(Math.min(e.index, G.length), 0, e.row);
        }
    }
    let K = G.filter((e)=>!e.hidden && e.leaving === undefined);
    let qRef = n.useRef(new Map);
    let zeRef = n.useRef(false);
    let Be = 0;
    for (let e of G){
        if (!(e.leaving !== undefined || qRef.current.has(e.span.id))) {
            qRef.current.set(e.span.id, Math.min(400, (zeRef.current ? 0 : 60) + Be++ * d));
        }
    }
    n.useLayoutEffect(()=>{
        zeRef.current = true;
        for (let e of [
            ...qRef.current.keys()
        ]){
            if (!G.some((t)=>t.span.id === e && t.leaving === undefined)) {
                qRef.current.delete(e);
            }
        }
    });
    let [Ve, setVe] = n.useState(root.id);
    let Y = (e)=>G.find((t)=>t.span.id === e);
    let X = Ve;
    for(let t = Y(X); t && (t.hidden || t.leaving !== undefined); t = Y(t.parentId)){
        X = t.parentId ?? root.id;
    }
    if (!K.some((e)=>e.span.id === X)) {
        X = K[0]?.span.id ?? root.id;
    }
    let Z = (e)=>{
        if (e) {
            setVe(e.span.id);
            jRef.current.get(e.span.id)?.focus();
        }
    };
    let He = (e, t)=>{
        if (e.target !== e.currentTarget) {
            return;
        }
        let n = K.findIndex((e)=>e.span.id === t.span.id);
        let r = (t.span.children ?? []).length > 0;
        let i = M.includes(t.span.id);
        let a = {
            ArrowDown: ()=>Z(K[n + 1]),
            ArrowUp: ()=>Z(K[n - 1]),
            Home: ()=>Z(K[0]),
            End: ()=>Z(K[K.length - 1]),
            ArrowRight: ()=>{
                if (r && i) {
                    return me(t.span.id);
                }
                if (r) {
                    return Z(K[n + 1]);
                }
            },
            ArrowLeft: ()=>{
                if (r && !i) {
                    return me(t.span.id);
                }
                return Z(Y(t.parentId));
            },
            Enter: ()=>I(P === t.span.id ? null : t.span.id),
            " ": ()=>I(P === t.span.id ? null : t.span.id),
            Escape: ()=>P && I(null)
        };
        if (a[e.key]) {
            e.preventDefault();
            a[e.key]();
        }
    };
    let [Ue, setUe] = n.useState(null);
    let GeRef = n.useRef(undefined);
    n.useLayoutEffect(()=>{
        let GeRef_current = GeRef.current;
        GeRef.current = F;
        if (GeRef_current && !F && !y()) {
            setUe(GeRef_current);
            let t = window.setTimeout(()=>setUe(null), 170);
            return ()=>window.clearTimeout(t);
        }
        if (F) {
            setUe(null);
        }
    }, [
        F?.id
    ]);
    let Q = F ?? Ue ?? undefined;
    n.useEffect(()=>{
        if (!F) {
            return;
        }
        let e = (e)=>{
            let e_target = e.target;
            if (!(ARef.current?.contains(e_target) || kRef.current?.contains(e_target))) {
                I(null);
            }
        };
        document.addEventListener(`pointerdown`, e);
        return ()=>document.removeEventListener(`pointerdown`, e);
    });
    n.useLayoutEffect(()=>{
        let ARef_current = ARef.current;
        let ueRef_current = ueRef.current;
        let n = Q ? jRef.current.get(Q.id) : undefined;
        if (!ARef_current || !ueRef_current || !n) {
            return;
        }
        let r = ueRef_current.getBoundingClientRect();
        let i = ueRef_current.offsetWidth ? r.width / ueRef_current.offsetWidth : 1;
        let a = n.getBoundingClientRect();
        let o = n.querySelector(`[data-bar]`)?.getBoundingClientRect();
        let e_offsetWidth = ARef_current.offsetWidth;
        let e_offsetHeight = ARef_current.offsetHeight;
        let l = (a.top - r.top) / i;
        let u = (a.bottom - r.top) / i + 6;
        let d = n.offsetHeight || 1;
        let f = kRef.current ? (kRef.current.getBoundingClientRect().top - r.top) / i + 4 : 0;
        let p = l - e_offsetHeight - 6;
        let m = f + Math.floor((p - f) / d) * d;
        let h = m >= f ? m : p;
        let g = u + e_offsetHeight > ueRef_current.offsetHeight + 24 && h > 0 ? h : u;
        let _ = o ? (o.left - r.left) / i : 8;
        ARef_current.style.left = `${Math.max(8, Math.min(_, ueRef_current.offsetWidth - e_offsetWidth - 8))}px`;
        ARef_current.style.top = `${g}px`;
        ARef_current.dataset.side = g === h ? `above` : `below`;
    });
    let Ke = N.filter((e)=>e.kind === `llm` || e.kind === `tool`);
    let [qe, Je] = v(root);
    let length = N.filter((e)=>e.status === `failed`).length;
    let Xe = Ke.filter((e)=>e.status !== `running` && e.end !== undefined);
    let Ze = markSlowest && Xe.length > 1 ? Xe.reduce((acc, item)=>{
        if (z(item) > z(acc)) {
            return item;
        }
        return acc;
    }) : undefined;
    let $ = root.status === `running` || L ? `running` : root.status === `failed` ? `failed` : `done`;
    let QeComponent = (e)=>{
        let e_span = e.span;
        let n = e_span.children ?? [];
        let o = n.length > 0 && M.includes(e_span.id);
        let s = e.leaving !== undefined;
        let c = z(e_span);
        let l = n.length ? _(e_span) : e_span.cost;
        let u = l !== undefined && l > 0 && (e_span.kind !== `tool` || e_span.cost !== undefined);
        let d = `${p(c)}${u ? ` · ${formatCost(l)}` : ``}`;
        let f = Ze?.id === e_span.id;
        let m = (e)=>e / V * B;
        let h = d.length * 6.4 + (f ? 58 : 0) + 8;
        let v = !B || m(e_span.start + c) + 6 + h <= B ? `after` : m(c) >= h + 10 ? `inside` : m(e_span.start) >= h + 6 ? `before` : `inside`;
        let y = o ? g(e_span).length - 1 : 0;
        let ee = o || n.length ? g(e_span).slice(1).filter((e)=>e.kind === `llm` || e.kind === `tool`) : [];
        let b = qRef.current.get(e_span.id) ?? 0;
        let style = {
            "--s": e_span.start,
            "--d": c
        };
        return <div key={s ? `${e_span.id}~out` : e_span.id} ref={s ? undefined : (e)=>{
            if (e) {
                jRef.current.set(e_span.id, e);
            } else {
                jRef.current.delete(e_span.id);
            }
        }} className={`ui-tw__row`} role={`treeitem`} aria-level={e.depth + 1} aria-expanded={n.length ? !o : undefined} aria-selected={P === e_span.id} aria-hidden={e.hidden || s || undefined} aria-label={`${e_span.name}, ${i[e_span.kind]}, ${a[e_span.status]}, ${d}`} tabIndex={!e.hidden && !s && X === e_span.id ? 0 : -1} data-kind={e_span.kind} data-status={e_span.status} data-parent={n.length ? `` : undefined} data-hidden={e.hidden ? `` : undefined} data-folded={o ? `` : undefined} data-leaving={s ? `` : undefined} data-open={P === e_span.id ? `` : undefined} style={{
            animationDelay: `${s ? e.leaving : b}ms`
        }} onClick={()=>{
            if (!s) {
                setVe(e_span.id);
                I(P === e_span.id ? null : e_span.id);
            }
        }} onFocus={(e)=>e.target === e.currentTarget && setVe(e_span.id)} onKeyDown={(t)=>He(t, e)}><div className={`ui-tw__name`}>{e.depth > 0 && <span className={`ui-tw__guides`} style={{
            width: `calc(${e.depth} * var(--ui-tw-indent))`
        }} aria-hidden={`true`}/>}<span className={`ui-tw__chev`} data-leaf={n.length ? undefined : ``} aria-hidden={`true`} onClick={(e)=>{
            if (n.length && !s) {
                e.stopPropagation();
                setVe(e_span.id);
                me(e_span.id);
            }
        }}>{n.length > 0 && <Te1Component/>}</span><span className={`ui-tw__icon`} data-logo={e_span.icon ? `` : undefined}>{e_span.icon ?? <span className={`ui-tw__swatch`}/>}</span><span className={`ui-tw__label`}><span className={`ui-tw__title`}>{e_span.name}</span>{e_span.detail && <span className={`ui-tw__detail`}>{e_span.detail}</span>}</span>{y > 0 && <span className={`ui-tw__more`}>{`+`}{y}</span>}{e_span.status === `running` && !n.length && <span className={`ui-tw__state`} data-status={`running`}><Re1Component/></span>}{e_span.status === `failed` && <span className={`ui-tw__state`} data-status={`failed`}><Ne1Component/></span>}<span className={`ui-tw__meta`}>{f && <span className={`ui-tw__slow`} title={`Slowest`}>{`Slowest`}</span>}<span className={`ui-tw__amount`} data-live={e_span.status === `running` ? `` : undefined}>{p(c)}{u && <span className={`ui-tw__meta-cost`}>{` · `}{formatCost(l)}</span>}</span></span></div><div className={`ui-tw__track`}><span className={`ui-tw__bar`} data-bar={``} data-kind={e_span.kind} data-status={e_span.status} style={{
            ...style,
            animationDelay: `${b + 60}ms`
        }}/>{ee.map((e)=><span key={e.id} className={`ui-tw__mark`} data-kind={e.kind} data-status={e.status} style={{
                "--s": e.start,
                "--d": z(e)
            }} aria-hidden={`true`}/>)}<span className={`ui-tw__tag`} data-side={v} style={style}><span className={`ui-tw__amount`} data-live={e_span.status === `running` ? `` : undefined}>{d}</span>{f && <span className={`ui-tw__slow`}>{`Slowest`}</span>}</span></div></div>;
    };
    let EComponent = (e)=>{
        let t = (e.children ?? []).length > 0;
        let [n, o] = v(e);
        let s = t ? _(e) : e.cost;
        let c = [
            [
                `Duration`,
                p(z(e))
            ],
            [
                `Started`,
                `+${p(e.start)}`
            ],
            ...s !== undefined && s > 0 ? [
                [
                    `Cost`,
                    formatCost(s)
                ]
            ] : [],
            ...n > 0 ? [
                [
                    `Tokens in`,
                    h(n)
                ]
            ] : [],
            ...o > 0 ? [
                [
                    `Tokens out`,
                    h(o)
                ]
            ] : [],
            ...t ? [
                [
                    `Spans`,
                    String(g(e).length - 1)
                ]
            ] : []
        ];
        return <div ref={ARef} className={`ui-tw__pop`} role={`dialog`} aria-label={`${e.name} details`} data-closing={F ? undefined : ``} data-kind={e.kind} data-status={e.status} onKeyDown={(t)=>{
            if (t.key === `Escape`) {
                t.stopPropagation();
                I(null);
                jRef.current.get(e.id)?.focus();
            }
        }}><div className={`ui-tw__pop-head`}><span className={`ui-tw__icon`} data-logo={e.icon ? `` : undefined}>{e.icon ?? <span className={`ui-tw__swatch`}/>}</span><span className={`ui-tw__pop-who`}><span className={`ui-tw__pop-name`}>{e.name}</span><span className={`ui-tw__pop-kind`}>{i[e.kind]}{e.model ? ` · ${e.model}` : e.detail ? ` · ${e.detail}` : ``}</span></span><span className={`ui-tw__pill`} data-status={e.status}>{a[e.status]}</span><button type={`button`} className={`ui-tw__close`} aria-label={`Close details`} onClick={()=>{
            I(null);
            jRef.current.get(e.id)?.focus();
        }}><Ie1Component/></button></div><dl className={`ui-tw__pop-stats`}>{c.map(([e, t])=><div key={e}><dt>{e}</dt><dd>{t}</dd></div>)}</dl>{e.error && <p className={`ui-tw__pop-error`}><Ne1Component/>{e.error}</p>}{e.input && <div className={`ui-tw__pop-io`}><span>{`Input`}</span><p>{e.input}</p></div>}{e.output && <div className={`ui-tw__pop-io`}><span>{`Output`}</span><p>{e.output}</p></div>}</div>;
    };
    let et = [
        {
            label: `Duration`,
            value: p(z(root)),
            live: $ === `running`
        },
        {
            label: `Cost`,
            value: formatCost(_(root)),
            live: $ === `running`
        },
        {
            label: `Tokens`,
            value: h(qe + Je),
            live: $ === `running`
        },
        {
            label: `LLM calls`,
            value: String(N.filter((e)=>e.kind === `llm`).length)
        },
        {
            label: `Tool calls`,
            value: String(N.filter((e)=>e.kind === `tool`).length)
        },
        {
            label: `Errors`,
            value: String(length),
            kind: length ? `failed` : undefined
        }
    ];
    let tt = [
        ...H.map((e)=>({
                v: e,
                leaving: false
            })),
        ...De.filter((e)=>!H.includes(e)).map((e)=>({
                v: e,
                leaving: true
            }))
    ];
    return <div ref={ORef} className={[
        `ui-tw`,
        className
    ].filter(Boolean).join(` `)} data-live={$ === `running` ? `` : undefined} style={{
        "--ui-tw-at": R
    }}><style href={`ui-trace-waterfall`} precedence={`default`}>{oe}</style><header className={`ui-tw__bar-head`}><span className={`ui-tw__spark`}><B1Component/></span><span className={`ui-tw__heading`}>{title}</span><span className={`ui-tw__task`}>{root.input ?? root.name}</span><span className={`ui-tw__pill`} data-status={$} aria-live={`polite`}>{$ === `running` && <span className={`ui-tw__pulse`} aria-hidden={`true`}/>}{$ === `running` ? `Live` : a[$]}</span></header><div className={`ui-tw__card`}><dl className={`ui-tw__stats`}>{et.map((e)=><div key={e.label} className={`ui-tw__stat`} data-kind={e.kind}><dt>{e.label}</dt><dd><span className={`ui-tw__amount`} data-live={e.live ? `` : undefined}>{e.value}</span></dd></div>)}</dl><div ref={ueRef} className={`ui-tw__body`}><div ref={deRef} className={`ui-tw__layer`} aria-hidden={`true`}>{tt.map(({ v, leaving })=><span key={v} className={`ui-tw__tick`} data-zero={v === 0 ? `` : undefined} data-leaving={leaving ? `` : undefined} style={{
            "--v": v
        }}><span>{m(v)}</span></span>)}{$ === `running` && <span className={`ui-tw__now`}/>}</div><div className={`ui-tw__axis`} aria-hidden={`true`}><span>{`Span`}</span></div><div ref={kRef} className={`ui-tw__rows`} role={`tree`} aria-label={title}>{G.map(QeComponent)}</div>{Q && EComponent(Q)}</div></div></div>;
}
var oe = `.ui-tw{--ui-tw-tray: #f0f0f0;--ui-tw-card: #ffffff;--ui-tw-strong: #171717;--ui-tw-ink: #171717;--ui-tw-text: #6b6b6b;--ui-tw-muted: #8a8a8a;--ui-tw-faint: #b8b8b8;--ui-tw-line: #ececec;--ui-tw-grid: #f1f1f1;--ui-tw-guide: #e6e6e6;--ui-tw-hover: rgba(0, 0, 0, 0.022);--ui-tw-selected: rgba(47, 107, 255, 0.05);--ui-tw-chip: #f5f5f5;--ui-tw-wash: #f7f7f7;--ui-tw-accent: #2f6bff;--ui-tw-now: rgba(47, 107, 255, 0.55);--ui-tw-agent-bg: #eef0f3;--ui-tw-agent-edge: #d3d8e0;--ui-tw-agent-ink: #4b5363;--ui-tw-agent-mark: #9aa3b2;--ui-tw-llm-bg: #efecff;--ui-tw-llm-edge: #cbc2fb;--ui-tw-llm-ink: #5a45d4;--ui-tw-llm-mark: #8d7cf0;--ui-tw-tool-bg: #e4f5f1;--ui-tw-tool-edge: #a9ddd1;--ui-tw-tool-ink: #0e7a67;--ui-tw-tool-mark: #3db39a;--ui-tw-error-bg: #fde8e5;--ui-tw-error-edge: #f1a397;--ui-tw-error-ink: #c2331f;--ui-tw-error-mark: #e5604c;--ui-tw-brand-bg: #eaf1ff;--ui-tw-brand-fg: #2456d6;--ui-tw-ok-bg: #e6f6ec;--ui-tw-ok-fg: #1a7f45;--ui-tw-slow-bg: #fff3e0;--ui-tw-slow-fg: #b85c00;--ui-tw-ring: rgba(23, 23, 23, 0.22);--ui-tw-shine: #c4c4c4;--ui-tw-shadow: 0 0 0 1px #ececec, 0 1px 2px rgba(0, 0, 0, 0.04);--ui-tw-pop: 0 0 0 1px #ececec, 0 16px 36px -12px rgba(0, 0, 0, 0.22);--ui-tw-row: 32px;--ui-tw-bar: 16px;--ui-tw-axis: 30px;--ui-tw-name: 236px;--ui-tw-pad: 10px;--ui-tw-gap: 14px;--ui-tw-end: 16px;--ui-tw-indent: 14px;--ui-tw-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-tw-range: 10000;position: relative;box-sizing: border-box;width: 100%;padding: 4px;border-radius: 20px;background: var(--ui-tw-tray);container: ui-tw / inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;font-weight: 400;line-height: 20px;letter-spacing: -0.006em;color: var(--ui-tw-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-tw *, .ui-tw *::before, .ui-tw *::after{box-sizing: border-box}:where(.ui-tw) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-tw button:focus-visible{outline: 2px solid var(--ui-tw-ring);outline-offset: 1px}.ui-tw :is(p, dl, dd){margin: 0}.ui-tw svg{display: block;flex: none}.ui-tw__bar-head{display: flex;align-items: center;gap: 8px;min-width: 0;padding: 8px 8px 12px 12px}.ui-tw__spark{display: grid;flex: none;place-items: center;width: 16px;color: var(--ui-tw-accent)}.ui-tw__heading{flex: none;font-weight: 600;color: var(--ui-tw-strong)}.ui-tw__task{flex: 1;min-width: 0;overflow: hidden;font-size: 13px;color: var(--ui-tw-muted);white-space: nowrap;text-overflow: ellipsis}.ui-tw__pill{display: inline-flex;flex: none;align-items: center;gap: 6px;height: 22px;padding: 0 9px;border-radius: 999px;background: var(--ui-tw-chip);font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-tw-text);white-space: nowrap}.ui-tw__bar-head .ui-tw__pill{background: var(--ui-tw-card);box-shadow: var(--ui-tw-shadow)}.ui-tw__pill[data-status="running"]{color: var(--ui-tw-brand-fg)}.ui-tw__pop .ui-tw__pill[data-status="running"]{background: var(--ui-tw-brand-bg)}.ui-tw__pill[data-status="done"]{color: var(--ui-tw-ok-fg)}.ui-tw__pop .ui-tw__pill[data-status="done"]{background: var(--ui-tw-ok-bg)}.ui-tw__pill[data-status="failed"]{color: var(--ui-tw-error-ink)}.ui-tw__pop .ui-tw__pill[data-status="failed"]{background: var(--ui-tw-error-bg)}.ui-tw__pulse{width: 6px;height: 6px;border-radius: 50%;background: currentColor;animation: ui-tw-pulse 1400ms ease-in-out infinite}.ui-tw__card{border-radius: 16px;background: var(--ui-tw-card);box-shadow: var(--ui-tw-shadow)}.ui-tw__stats{display: grid;grid-template-columns: repeat(6, minmax(0, 1fr));padding: 14px 0;border-bottom: 1px solid var(--ui-tw-line)}.ui-tw__stat{display: grid;gap: 2px;min-width: 0;padding: 0 16px}.ui-tw__stat:first-child{padding-left: 22px}.ui-tw__stat:last-child{padding-right: 10px}.ui-tw__stat + .ui-tw__stat{border-left: 1px solid var(--ui-tw-line)}.ui-tw__stat dt{overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-tw-muted);white-space: nowrap;text-overflow: ellipsis}.ui-tw__stat dd{overflow: hidden;font-size: 16px;font-weight: 600;line-height: 22px;letter-spacing: -0.01em;color: var(--ui-tw-ink);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-tw__stat[data-kind="failed"] dd{color: var(--ui-tw-error-ink)}.ui-tw__body{position: relative;padding-bottom: 18px}.ui-tw__layer{position: absolute;top: 0;bottom: 0;left: calc(var(--ui-tw-pad) + var(--ui-tw-name) + var(--ui-tw-gap));right: var(--ui-tw-end);overflow: hidden;pointer-events: none}.ui-tw__tick{position: absolute;top: 0;bottom: 0;left: calc(var(--v) * 100% / var(--ui-tw-range));width: 1px;background: var(--ui-tw-grid);animation: ui-tw-fade 420ms ease both;transition: opacity 420ms ease}.ui-tw__tick[data-zero]{background: var(--ui-tw-line)}.ui-tw__tick[data-leaving]{opacity: 0}.ui-tw__tick > span{position: absolute;top: 8px;left: 6px;font-size: 11px;line-height: 14px;color: var(--ui-tw-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-tw__now{position: absolute;top: 0;bottom: 0;left: calc(var(--ui-tw-at) * 100% / var(--ui-tw-range));width: 1px;background: var(--ui-tw-now)}.ui-tw__now::before{content: "";position: absolute;top: calc(var(--ui-tw-axis) - 3px);left: -2.5px;width: 6px;height: 6px;border-radius: 50%;background: var(--ui-tw-accent);box-shadow: 0 0 0 3px var(--ui-tw-card)}.ui-tw__axis{display: flex;align-items: center;height: var(--ui-tw-axis);padding-left: calc(var(--ui-tw-pad) + 6px);border-bottom: 1px solid var(--ui-tw-line);font-size: 11px;line-height: 14px;color: var(--ui-tw-muted)}.ui-tw__rows{position: relative;padding-top: 4px}.ui-tw__row{display: grid;grid-template-columns: var(--ui-tw-name) minmax(0, 1fr);column-gap: var(--ui-tw-gap);height: var(--ui-tw-row);padding: 0 var(--ui-tw-end) 0 var(--ui-tw-pad);overflow: hidden;outline: none;cursor: pointer;transition: height 360ms var(--ui-tw-ease), opacity 260ms ease, background-color 140ms ease;animation: ui-tw-row 420ms var(--ui-tw-ease) backwards}.ui-tw__row:hover{background: var(--ui-tw-hover)}.ui-tw__row[data-open]{background: var(--ui-tw-selected)}.ui-tw__row:focus-visible{box-shadow: inset 0 0 0 2px var(--ui-tw-ring)}.ui-tw__row:is([data-hidden], [data-leaving]){height: 0;opacity: 0;pointer-events: none}.ui-tw__row[data-leaving]{animation: ui-tw-leave ${u}ms var(--ui-tw-ease) both}.ui-tw__row[data-leaving][data-hidden]{animation: none}.ui-tw__row[data-leaving] :is(.ui-tw__bar, .ui-tw__tag, .ui-tw__more, .ui-tw__slow){animation: none}.ui-tw__name{display: flex;align-items: center;min-width: 0;height: var(--ui-tw-row)}.ui-tw__guides{flex: none;align-self: stretch;background: repeating-linear-gradient(90deg, transparent 0 7.5px, var(--ui-tw-guide) 7.5px 8.5px, transparent 8.5px var(--ui-tw-indent))}.ui-tw__chev{display: grid;flex: none;place-items: center;width: 16px;height: 20px;margin-right: 4px;border-radius: 5px;color: var(--ui-tw-muted);transition: background-color 140ms ease, color 140ms ease}.ui-tw__chev:not([data-leaf]):hover{background: var(--ui-tw-chip);color: var(--ui-tw-ink)}.ui-tw__chev > svg{transition: transform 240ms var(--ui-tw-ease)}.ui-tw__row[data-folded] .ui-tw__chev > svg{transform: rotate(-90deg)}.ui-tw__icon{display: grid;flex: none;place-items: center;width: 20px;height: 20px;margin-right: 8px;border-radius: 6px;background: var(--ui-tw-card);box-shadow: 0 0 0 1px var(--ui-tw-line), 0 1px 2px rgba(0, 0, 0, 0.06)}.ui-tw__icon > svg{width: 12px;height: 12px}.ui-tw__swatch{width: 8px;height: 8px;border-radius: 2.5px;background: var(--k-mark)}.ui-tw__label{display: flex;align-items: baseline;gap: 6px;flex: 1;min-width: 0;overflow: hidden;white-space: nowrap}.ui-tw__title{flex: none;max-width: 100%;overflow: hidden;font-size: 13px;color: var(--ui-tw-ink);text-overflow: ellipsis}.ui-tw__row[data-parent] .ui-tw__title{font-weight: 500}.ui-tw__detail{min-width: 0;overflow: hidden;font-size: 12px;color: var(--ui-tw-muted);text-overflow: ellipsis}.ui-tw__more{flex: none;height: 18px;margin-left: 6px;padding: 0 6px;border-radius: 999px;background: var(--ui-tw-chip);font-size: 11px;font-weight: 500;line-height: 18px;color: var(--ui-tw-text);font-variant-numeric: tabular-nums;animation: ui-tw-pop 220ms var(--ui-tw-ease) both}.ui-tw__state{display: grid;flex: none;place-items: center;width: 16px;margin-left: 4px}.ui-tw__state[data-status="running"]{color: var(--ui-tw-brand-fg)}.ui-tw__state[data-status="failed"]{color: var(--ui-tw-error-ink)}.ui-tw__spin{animation: ui-tw-spin 900ms linear infinite}.ui-tw__meta{display: none}.ui-tw [data-kind]{--k-bg: var(--ui-tw-agent-bg);--k-edge: var(--ui-tw-agent-edge);--k-ink: var(--ui-tw-agent-ink);--k-mark: var(--ui-tw-agent-mark)}.ui-tw [data-kind="llm"]{--k-bg: var(--ui-tw-llm-bg);--k-edge: var(--ui-tw-llm-edge);--k-ink: var(--ui-tw-llm-ink);--k-mark: var(--ui-tw-llm-mark)}.ui-tw [data-kind="tool"]{--k-bg: var(--ui-tw-tool-bg);--k-edge: var(--ui-tw-tool-edge);--k-ink: var(--ui-tw-tool-ink);--k-mark: var(--ui-tw-tool-mark)}.ui-tw [data-kind][data-status="failed"]{--k-bg: var(--ui-tw-error-bg);--k-edge: var(--ui-tw-error-edge);--k-ink: var(--ui-tw-error-ink);--k-mark: var(--ui-tw-error-mark)}.ui-tw__track{position: relative;min-width: 0;height: var(--ui-tw-row);overflow: hidden}.ui-tw__bar{position: absolute;top: calc(50% - var(--ui-tw-bar) / 2);left: calc(var(--s) * 100% / var(--ui-tw-range));width: max(3px, calc(var(--d) * 100% / var(--ui-tw-range)));height: var(--ui-tw-bar);overflow: hidden;border-radius: 5px;background: var(--k-bg);box-shadow: inset 0 0 0 1px var(--k-edge);transition: box-shadow 160ms ease, background-color 240ms ease, opacity 240ms ease;animation: ui-tw-grow 560ms var(--ui-tw-ease) backwards}.ui-tw__row:is(:hover, [data-open]) .ui-tw__bar{box-shadow: inset 0 0 0 1px var(--k-mark)}.ui-tw__row[data-folded] .ui-tw__bar{opacity: 0.75}.ui-tw__mark{position: absolute;top: calc(50% - 3px);left: calc(var(--s) * 100% / var(--ui-tw-range));width: max(2px, calc(var(--d) * 100% / var(--ui-tw-range)));height: 6px;border-radius: 2px;background: var(--k-mark);opacity: 0;transform: scaleY(0.2);transition: opacity 200ms ease, transform 200ms var(--ui-tw-ease);pointer-events: none}.ui-tw__row[data-folded] .ui-tw__mark{opacity: 0.85;transform: none;transition-delay: 140ms}.ui-tw__bar[data-status="running"]::before{content: "";position: absolute;inset: 0;background: linear-gradient(90deg, transparent, var(--ui-tw-card), transparent) -60px 0 / 60px 100% no-repeat;opacity: 0.7;animation: ui-tw-sweep 1500ms linear infinite}.ui-tw__bar[data-status="running"]::after{content: "";position: absolute;top: 0;right: 0;bottom: 0;width: min(28px, 100%);background: linear-gradient(90deg, transparent, var(--k-edge));animation: ui-tw-glow 1100ms ease-in-out infinite alternate}.ui-tw__tag{position: absolute;top: calc(50% - 9px);display: flex;align-items: center;gap: 6px;height: 18px;padding: 0 4px;border-radius: 5px;background: var(--ui-tw-card);font-size: 11.5px;line-height: 16px;color: var(--ui-tw-text);white-space: nowrap;font-variant-numeric: tabular-nums;pointer-events: none}.ui-tw__tag[data-side="after"]{left: calc((var(--s) + var(--d)) * 100% / var(--ui-tw-range) + 2px)}.ui-tw__tag[data-side="inside"]{right: calc(100% - (var(--s) + var(--d)) * 100% / var(--ui-tw-range) + 2px);flex-direction: row-reverse;background: none;color: var(--k-ink)}.ui-tw__tag[data-side="before"]{right: calc(100% - var(--s) * 100% / var(--ui-tw-range) + 2px);flex-direction: row-reverse}.ui-tw__row[data-open] .ui-tw__tag{background: none}.ui-tw__row[data-status="failed"] .ui-tw__tag{color: var(--ui-tw-error-ink)}.ui-tw__slow{flex: none;height: 16px;padding: 0 5px;border-radius: 4px;background: var(--ui-tw-slow-bg);font-size: 10.5px;font-weight: 500;line-height: 16px;color: var(--ui-tw-slow-fg);animation: ui-tw-pop 260ms var(--ui-tw-ease) both}.ui-tw__amount[data-live]{background: linear-gradient(90deg, currentColor 0%, currentColor 38%, var(--ui-tw-shine) 50%, currentColor 62%, currentColor 100%) 0 0 / 300% 100%;-webkit-background-clip: text;background-clip: text;-webkit-text-fill-color: transparent;animation: ui-tw-shine 1100ms linear infinite}.ui-tw__pop{position: absolute;top: 0;left: 0;z-index: 5;display: grid;gap: 10px;width: min(330px, calc(100% - 16px));padding: 12px;border-radius: 16px;background: var(--ui-tw-card);box-shadow: var(--ui-tw-pop);cursor: auto;transform-origin: 24px top;animation: ui-tw-open 220ms var(--ui-tw-ease) both}.ui-tw__pop[data-side="above"]{transform-origin: 24px bottom}.ui-tw__pop[data-closing]{animation: ui-tw-close 160ms ease forwards;pointer-events: none}.ui-tw__pop-head{display: flex;align-items: center;gap: 0;min-width: 0}.ui-tw__pop-head .ui-tw__icon{width: 28px;height: 28px;margin-right: 10px;border-radius: 8px}.ui-tw__pop-head .ui-tw__icon > svg{width: 15px;height: 15px}.ui-tw__pop-who{display: grid;flex: 1;min-width: 0}.ui-tw__pop-name{overflow: hidden;font-size: 13.5px;font-weight: 600;line-height: 18px;color: var(--ui-tw-strong);white-space: nowrap;text-overflow: ellipsis}.ui-tw__pop-kind{overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-tw-muted);white-space: nowrap;text-overflow: ellipsis}.ui-tw__pop-head .ui-tw__pill{height: 20px;margin-left: 8px;padding: 0 7px;font-size: 11px}.ui-tw__close{display: grid;flex: none;place-items: center;width: 28px;height: 28px;margin: -2px -4px 0 4px;border-radius: 8px;color: var(--ui-tw-muted);transition: background-color 140ms ease, color 140ms ease}.ui-tw__close:hover{background: var(--ui-tw-chip);color: var(--ui-tw-ink)}.ui-tw__pop-stats{display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: 8px;padding: 10px 12px;border-radius: 10px;background: var(--ui-tw-wash)}.ui-tw__pop-stats dt{font-size: 11px;line-height: 14px;color: var(--ui-tw-muted)}.ui-tw__pop-stats dd{font-size: 13px;font-weight: 600;line-height: 18px;color: var(--ui-tw-ink);font-variant-numeric: tabular-nums}.ui-tw__pop-error{display: flex;gap: 8px;padding: 8px 10px;border-radius: 10px;background: var(--ui-tw-error-bg);font-size: 12.5px;line-height: 17px;color: var(--ui-tw-error-ink)}.ui-tw__pop-error > svg{margin-top: 2.5px}.ui-tw__pop-io{display: grid;gap: 2px}.ui-tw__pop-io > span{font-size: 11px;line-height: 14px;color: var(--ui-tw-muted)}.ui-tw__pop-io > p{display: -webkit-box;overflow: hidden;font-size: 12.5px;line-height: 17px;color: var(--ui-tw-text);-webkit-line-clamp: 3;-webkit-box-orient: vertical}@container ui-tw (max-width: 560px){.ui-tw__bar-head{padding: 8px 8px 10px 10px}.ui-tw__stats{grid-template-columns: repeat(3, minmax(0, 1fr));row-gap: 12px;padding: 12px 0}.ui-tw__stat{padding: 0 12px}.ui-tw__stat:is(:first-child, :nth-child(4)){padding-left: 16px}.ui-tw__stat:is(:nth-child(3), :last-child){padding-right: 8px}.ui-tw__stat:nth-child(4){border-left: 0}.ui-tw__stat dd{font-size: 15px}.ui-tw__card{--ui-tw-row: 48px;--ui-tw-bar: 10px;--ui-tw-end: 12px}.ui-tw__layer{left: var(--ui-tw-pad);right: var(--ui-tw-end)}.ui-tw__tick{bottom: auto;height: var(--ui-tw-axis)}.ui-tw__tick[data-zero]{background: var(--ui-tw-grid)}.ui-tw__now{bottom: auto;height: var(--ui-tw-axis)}.ui-tw__axis > span{display: none}.ui-tw__row{grid-template-columns: minmax(0, 1fr);grid-template-rows: 30px 12px;column-gap: 0}.ui-tw__name{height: 30px}.ui-tw__track{height: 12px}.ui-tw__bar{border-radius: 3.5px}.ui-tw__mark{top: calc(50% - 2px);height: 4px}.ui-tw__tag{display: none}.ui-tw__meta{display: flex;flex: none;align-items: center;gap: 6px;margin-left: 8px;font-size: 11.5px;line-height: 16px;color: var(--ui-tw-text);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-tw__row[data-status="failed"] .ui-tw__meta{color: var(--ui-tw-error-ink)}.ui-tw__pop-stats{grid-template-columns: repeat(2, minmax(0, 1fr))}}@container ui-tw (max-width: 400px){.ui-tw__meta-cost{display: none}.ui-tw__meta .ui-tw__slow{width: 6px;height: 6px;padding: 0;border-radius: 50%;background: var(--ui-tw-slow-fg);font-size: 0}}@container ui-tw (max-width: 360px){.ui-tw__detail{display: none}}@keyframes ui-tw-row{from{height: 0;opacity: 0;transform: translateY(-4px)}}@keyframes ui-tw-leave{from{height: var(--ui-tw-row);opacity: 1}to{height: 0;opacity: 0}}@keyframes ui-tw-grow{from{clip-path: inset(0 100% 0 0 round 5px)}to{clip-path: inset(0 0 0 0 round 5px)}}@keyframes ui-tw-fade{from{opacity: 0}}@keyframes ui-tw-pop{from{opacity: 0;transform: scale(0.9)}}@keyframes ui-tw-open{from{opacity: 0;transform: translateY(-4px) scale(0.96)}}@keyframes ui-tw-close{to{opacity: 0;transform: translateY(-3px) scale(0.97)}}@keyframes ui-tw-sweep{to{background-position: calc(100% + 60px) 0}}@keyframes ui-tw-glow{from{opacity: 0.45}to{opacity: 1}}@keyframes ui-tw-pulse{50%{opacity: 0.35}}@keyframes ui-tw-spin{to{transform: rotate(360deg)}}@keyframes ui-tw-shine{from{background-position: 100% 0}to{background-position: 0 0}}@media (pointer: coarse){.ui-tw__chev{width: 24px;height: 28px;margin-left: -4px}}@media (prefers-reduced-motion: reduce){.ui-tw *, .ui-tw *::before, .ui-tw *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-tw{--ui-tw-tray: #19191c;--ui-tw-card: #232326;--ui-tw-strong: #ededed;--ui-tw-ink: #ededed;--ui-tw-text: #a1a1a6;--ui-tw-muted: #7c7c82;--ui-tw-faint: #4a4a50;--ui-tw-line: #2e2e33;--ui-tw-grid: #2a2a2e;--ui-tw-guide: #34343a;--ui-tw-hover: rgba(255, 255, 255, 0.025);--ui-tw-selected: rgba(91, 154, 255, 0.08);--ui-tw-chip: #2c2c30;--ui-tw-wash: #1d1d20;--ui-tw-accent: #5b9aff;--ui-tw-now: rgba(91, 154, 255, 0.6);--ui-tw-agent-bg: #2c2f35;--ui-tw-agent-edge: #41464f;--ui-tw-agent-ink: #b8c0cc;--ui-tw-agent-mark: #7a8291;--ui-tw-llm-bg: #2a2545;--ui-tw-llm-edge: #4c3fa0;--ui-tw-llm-ink: #b6a9ff;--ui-tw-llm-mark: #8d7cf0;--ui-tw-tool-bg: #16302b;--ui-tw-tool-edge: #285f54;--ui-tw-tool-ink: #62d5bb;--ui-tw-tool-mark: #3db39a;--ui-tw-error-bg: #3b1714;--ui-tw-error-edge: #74302a;--ui-tw-error-ink: #ff977d;--ui-tw-error-mark: #e5604c;--ui-tw-brand-bg: #16243f;--ui-tw-brand-fg: #8ab4ff;--ui-tw-ok-bg: #12301f;--ui-tw-ok-fg: #3dd68c;--ui-tw-slow-bg: #3a2410;--ui-tw-slow-fg: #ffa057;--ui-tw-ring: rgba(237, 237, 237, 0.3);--ui-tw-shine: #6a6a70;--ui-tw-shadow: 0 0 0 1px #2e2e33, 0 1px 2px rgba(0, 0, 0, 0.3);--ui-tw-pop: 0 0 0 1px #34343a, 0 16px 36px -12px rgba(0, 0, 0, 0.6)}`;
const X1Component = ()=><svg viewBox={`0 0 1200 1200`} aria-hidden={`true`}><path fill={`#D97757`} d={`M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z`}/></svg>;
const SComponent = ()=><svg viewBox={`0 0 24 24`} fill={`currentColor`} aria-hidden={`true`} style={{
        color: `var(--ui-twc-strong, var(--ui-tw-ink, #000))`
    }}><path d={`M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z`}/></svg>;
const CComponent = ()=>{
    let id = `gm` + n.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
    return <svg viewBox={`0 0 24 24`} aria-hidden={`true`}><defs><linearGradient id={id} x1={`0`} y1={`24`} x2={`24`} y2={`0`} gradientUnits={`userSpaceOnUse`}><stop stopColor={`#1C7DFF`}/><stop offset={`0.52`} stopColor={`#1C69FF`}/><stop offset={`1`} stopColor={`#B04DFF`}/></linearGradient></defs><path fill={`url(#${id})`} d={`M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81`}/></svg>;
};
const W1Component = ()=><svg viewBox={`0 0 24 24`} fill={`currentColor`} aria-hidden={`true`} style={{
        color: `var(--ui-twc-strong, var(--ui-tw-ink, #000))`
    }}><path d={`M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z`}/></svg>;
const TComponent = ()=><svg viewBox={`0 0 24 24`} fill={`currentColor`} aria-hidden={`true`} style={{
        color: `var(--ui-twc-strong, var(--ui-tw-ink, #181717))`
    }}><path d={`M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12`}/></svg>;
const Se1Component = ()=><svg viewBox={`0 0 49.883 49.877`} fill={`none`} aria-hidden={`true`}><g transform={`translate(0 0)`}><path d={`M18.3549 10.4784C15.4713 10.4784 13.1157 8.12279 13.1157 5.2392C13.1157 2.35561 15.4713 0 18.3549 0C21.2385 0 23.5941 2.35561 23.5941 5.2392V10.4784H18.3549Z`} fill={`#36C5F0`}/><path d={`M18.3575 13.12C21.2411 13.12 23.5967 15.4756 23.5967 18.3592C23.5967 21.2428 21.2411 23.5984 18.3575 23.5984H5.2392C2.35561 23.5984 0 21.2428 0 18.3592C0 15.4756 2.35561 13.12 5.2392 13.12H18.3575Z`} fill={`#36C5F0`}/></g><g transform={`translate(26.28 0)`}><path d={`M13.1244 18.3592C13.1244 15.4756 15.48 13.12 18.3636 13.12C21.2472 13.12 23.6028 15.4756 23.6028 18.3592C23.6028 21.2428 21.2472 23.5984 18.3636 23.5984H13.1244V18.3592Z`} fill={`#2EB67D`}/><path d={`M10.4785 18.3575C10.4785 21.2411 8.12286 23.5967 5.23927 23.5967C2.35568 23.5967 7.4362e-05 21.2411 7.4362e-05 18.3575V5.2392C7.4362e-05 2.35561 2.35568 0 5.23927 0C8.12286 0 10.4785 2.35561 10.4785 5.2392V18.3575Z`} fill={`#2EB67D`}/></g><g transform={`translate(0 26.28)`}><path d={`M10.4784 5.2392C10.4784 8.12279 8.12279 10.4784 5.2392 10.4784C2.35561 10.4784 0 8.12279 0 5.2392C0 2.35561 2.35561 0 5.2392 0H10.4784V5.2392Z`} fill={`#E01E5A`}/><path d={`M13.1157 5.2392C13.1157 2.35561 15.4713 0 18.3549 0C21.2385 0 23.5941 2.35561 23.5941 5.2392V18.3575C23.5941 21.2411 21.2385 23.5967 18.3549 23.5967C15.4713 23.5967 13.1157 21.2411 13.1157 18.3575V5.2392Z`} fill={`#E01E5A`}/></g><g transform={`translate(26.28 26.28)`}><path d={`M5.23927 13.1157C8.12286 13.1157 10.4785 15.4713 10.4785 18.3549C10.4785 21.2385 8.12286 23.5941 5.23927 23.5941C2.35568 23.5941 7.4362e-05 21.2385 7.4362e-05 18.3549V13.1157H5.23927Z`} fill={`#ECB22E`}/><path d={`M5.23927 10.4784C2.35568 10.4784 7.4362e-05 8.12279 7.4362e-05 5.2392C7.4362e-05 2.35561 2.35568 0 5.23927 0H18.3576C21.2412 0 23.5968 2.35561 23.5968 5.2392C23.5968 8.12279 21.2412 10.4784 18.3576 10.4784H5.23927Z`} fill={`#ECB22E`}/></g></svg>;
const Ce1Component = ()=><svg viewBox={`0 0 38 57`} aria-hidden={`true`}><path d={`M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z`} fill={`#1ABCFE`}/><path d={`M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z`} fill={`#0ACF83`}/><path d={`M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z`} fill={`#FF7262`}/><path d={`M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z`} fill={`#F24E1E`}/><path d={`M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z`} fill={`#A259FF`}/></svg>;
const EComponent = ()=><svg viewBox={`0 0 24 24`} fill={`#FF7A59`} aria-hidden={`true`}><path d={`M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z`}/></svg>;
const DComponent = ()=><svg viewBox={`0 0 24 24`} aria-hidden={`true`}><rect width={`24`} height={`24`} rx={`6`} fill={`#635BFF`}/><path fill={`#fff`} transform={`translate(5 5) scale(0.5833)`} d={`M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z`}/></svg>;
const Le1Component = ()=><svg viewBox={`0 0 24 24`} fill={`none`} aria-hidden={`true`} style={{
        color: `#3f8f7f`
    }}><circle cx={`11`} cy={`11`} r={`6.5`} stroke={`currentColor`} strokeWidth={`2.2`}/><path d={`M16 16L20 20`} stroke={`currentColor`} strokeLinecap={`round`} strokeWidth={`2.2`}/></svg>;
const InlineComponent = ()=><svg viewBox={`0 0 24 24`} fill={`none`} aria-hidden={`true`} style={{
        color: `#336791`
    }}><ellipse cx={`12`} cy={`6`} rx={`7.5`} ry={`3`} stroke={`currentColor`} strokeWidth={`2`}/><path d={`M4.5 6V18C4.5 19.66 7.86 21 12 21C16.14 21 19.5 19.66 19.5 18V6`} stroke={`currentColor`} strokeWidth={`2`}/><path d={`M4.5 12C4.5 13.66 7.86 15 12 15C16.14 15 19.5 13.66 19.5 12`} stroke={`currentColor`} strokeWidth={`2`}/></svg>;
const InlineComponent_1 = ()=><svg viewBox={`0 0 24 24`} fill={`none`} aria-hidden={`true`} style={{
        color: `#2f6bff`
    }}><circle cx={`12`} cy={`12`} r={`8.5`} stroke={`currentColor`} strokeWidth={`2`}/><path d={`M3.5 12H20.5M12 3.5C14.2 6 15.3 8.9 15.3 12C15.3 15.1 14.2 18 12 20.5C9.8 18 8.7 15.1 8.7 12C8.7 8.9 9.8 6 12 3.5Z`} stroke={`currentColor`} strokeLinejoin={`round`} strokeWidth={`2`}/></svg>;
const O = [
    {
        id: `root`,
        name: `Orchestrator`,
        kind: `agent`,
        detail: `Opus 5.5`,
        model: `Opus 5.5`,
        icon: <X1Component/>,
        at: 0,
        end: 13.6,
        input: `Launch the new pricing page by Friday`,
        output: `Pricing page is live behind a flag – PR #482 open, copy in Notion, plans in HubSpot, #launch told`
    },
    {
        id: `plan`,
        parent: `root`,
        name: `Plan the launch`,
        kind: `llm`,
        detail: `Opus 5.5`,
        model: `Opus 5.5`,
        icon: <X1Component/>,
        at: 0.15,
        end: 1.3,
        tin: 3240,
        tout: 880,
        cost: 0.115,
        input: `Split “launch the new pricing page” into research, copy and build`,
        output: `3 sub-agents: Researcher, Writer, Coder – Slack and HubSpot at the end`
    },
    {
        id: `research`,
        parent: `root`,
        name: `Researcher`,
        kind: `subagent`,
        detail: `Sonnet 5.5`,
        model: `Sonnet 5.5`,
        icon: <X1Component/>,
        at: 1.35,
        end: 6.3,
        input: `Compare the pricing of five competitors`,
        output: `Most charge per seat; two have a free tier – summary in Notion`
    },
    {
        id: `s1`,
        parent: `research`,
        name: `web_search`,
        kind: `tool`,
        detail: `Linear pricing`,
        icon: <Le1Component/>,
        at: 1.5,
        end: 2.4,
        cost: 0.005,
        input: `linear.app pricing per seat 2026`,
        output: `8 results – linear.app/pricing first`
    },
    {
        id: `s2`,
        parent: `research`,
        name: `web_search`,
        kind: `tool`,
        detail: `Notion pricing`,
        icon: <Le1Component/>,
        at: 1.55,
        end: 2.75,
        cost: 0.005,
        input: `notion pricing plans business`,
        output: `10 results – notion.com/pricing first`
    },
    {
        id: `db`,
        parent: `research`,
        name: `Query plan usage`,
        kind: `tool`,
        detail: `Postgres`,
        icon: <InlineComponent/>,
        at: 1.62,
        end: 2.2,
        input: `select plan, count(*) from workspaces group by plan`,
        output: `Free 8,412 · Pro 1,906 · Team 311`
    },
    {
        id: `g2`,
        parent: `research`,
        name: `Read G2 reviews`,
        kind: `tool`,
        detail: `120 pages`,
        icon: <InlineComponent_1/>,
        at: 2.5,
        end: 4.6,
        cost: 0.02,
        input: `g2.com reviews that mention price, last 12 months`,
        output: `120 reviews read – 38 mention per-seat pricing`
    },
    {
        id: `sum`,
        parent: `research`,
        name: `Summarize findings`,
        kind: `llm`,
        detail: `Gemini 3.8 Flash`,
        model: `Gemini 3.8 Flash`,
        icon: <CComponent/>,
        at: 4.65,
        end: 6.2,
        tin: 41200,
        tout: 1350,
        cost: 0.018,
        input: `5 pricing pages, 120 reviews, our plan usage`,
        output: `Per seat wins; keep a free tier; Team at $12 undercuts Linear`
    },
    {
        id: `writer`,
        parent: `root`,
        name: `Writer`,
        kind: `subagent`,
        detail: `Sonnet 5.5`,
        model: `Sonnet 5.5`,
        icon: <X1Component/>,
        at: 1.9,
        end: 8.1,
        input: `Write the copy for the three plans`,
        output: `Copy for Free, Pro and Team – saved in Notion`
    },
    {
        id: `voice`,
        parent: `writer`,
        name: `Read brand voice`,
        kind: `tool`,
        detail: `Notion`,
        icon: <W1Component/>,
        at: 2,
        end: 2.6,
        input: `Brand / Voice and tone`,
        output: `2 pages, 1,840 words`
    },
    {
        id: `frames`,
        parent: `writer`,
        name: `Read pricing frames`,
        kind: `tool`,
        detail: `Figma`,
        icon: <Ce1Component/>,
        at: 2.05,
        end: 2.9,
        input: `Pricing / Desktop, Pricing / Mobile`,
        output: `3 frames – 6 text slots per plan`
    },
    {
        id: `draft`,
        parent: `writer`,
        name: `Draft plan copy`,
        kind: `llm`,
        detail: `Sonnet 5.5`,
        model: `Sonnet 5.5`,
        icon: <X1Component/>,
        at: 3,
        end: 6.9,
        tin: 9800,
        tout: 4100,
        cost: 0.091,
        input: `Voice guide, research summary, 3 frames with 6 slots each`,
        output: `Free: “Start for free” · Pro: “For growing teams” · Team: “Everything, together”`
    },
    {
        id: `save`,
        parent: `writer`,
        name: `Save draft`,
        kind: `tool`,
        detail: `Notion`,
        icon: <W1Component/>,
        at: 7,
        end: 7.6,
        input: `Launch / Pricing copy v1`,
        output: `Page updated – 3 sections`
    },
    {
        id: `coder`,
        parent: `root`,
        name: `Coder`,
        kind: `subagent`,
        detail: `GPT-6 Sol`,
        model: `GPT-6 Sol`,
        icon: <SComponent/>,
        at: 2.6,
        end: 12.4,
        input: `Build the page and wire up checkout`,
        output: `PR #482 – pricing page, Stripe prices, checkout tests green`
    },
    {
        id: `branch`,
        parent: `coder`,
        name: `Create branch`,
        kind: `tool`,
        detail: `GitHub`,
        icon: <TComponent/>,
        at: 2.7,
        end: 3.05,
        input: `feat/pricing-page from main`,
        output: `Branch created`
    },
    {
        id: `code`,
        parent: `coder`,
        name: `Write pricing page`,
        kind: `llm`,
        detail: `GPT-6 Sol`,
        model: `GPT-6 Sol`,
        icon: <SComponent/>,
        at: 3.1,
        end: 6.4,
        tin: 18400,
        tout: 6200,
        cost: 0.162,
        input: `Figma frames, plan copy, the existing /pricing route`,
        output: `pricing/page.tsx, PlanCard.tsx, 3 more files – 412 lines`
    },
    {
        id: `prices`,
        parent: `coder`,
        name: `Create prices`,
        kind: `tool`,
        detail: `Stripe`,
        icon: <DComponent/>,
        at: 6.5,
        end: 7,
        input: `Pro $8 / seat / month, Team $12 / seat / month`,
        output: `2 prices created in test mode`
    },
    {
        id: `tests`,
        parent: `coder`,
        name: `Run checkout tests`,
        kind: `tool`,
        detail: `GitHub`,
        icon: <TComponent/>,
        at: 7.1,
        end: 8.5,
        fails: true,
        input: `pnpm test checkout`,
        error: `2 of 14 checkout tests fail – coupon codes aren't applied to seat prices`
    },
    {
        id: `fix`,
        parent: `coder`,
        name: `Fix coupon handling`,
        kind: `llm`,
        detail: `GPT-6 Sol`,
        model: `GPT-6 Sol`,
        icon: <SComponent/>,
        at: 8.6,
        end: 9.9,
        tin: 12600,
        tout: 1900,
        cost: 0.072,
        input: `The two failing tests and checkout/coupon.ts`,
        output: `Apply the coupon per seat, not to the total – 1 file changed`
    },
    {
        id: `retest`,
        parent: `coder`,
        name: `Run checkout tests`,
        kind: `tool`,
        detail: `retry`,
        icon: <TComponent/>,
        at: 10,
        end: 11.2,
        input: `pnpm test checkout`,
        output: `14 of 14 passed`
    },
    {
        id: `pr`,
        parent: `coder`,
        name: `Open pull request`,
        kind: `tool`,
        detail: `#482`,
        icon: <TComponent/>,
        at: 11.3,
        end: 12.2,
        input: `feat/pricing-page → main`,
        output: `PR #482 opened, 2 reviewers asked`
    },
    {
        id: `crm`,
        parent: `root`,
        name: `Update plans`,
        kind: `tool`,
        detail: `HubSpot`,
        icon: <EComponent/>,
        at: 12.45,
        end: 13,
        input: `Products: Free, Pro, Team`,
        output: `3 products updated`
    },
    {
        id: `notify`,
        parent: `root`,
        name: `Post to #launch`,
        kind: `tool`,
        detail: `Slack`,
        icon: <Se1Component/>,
        at: 12.5,
        end: 13.3,
        input: `Pricing page is ready for review – PR #482`,
        output: `Posted, 3 reactions`
    }
];
const ue = 13.6;
const de = 17;
const k = 6;
const A = (e)=>Math.round(e * 1000 * k);
const j = (e, t)=>{
    let n = (r)=>{
        let i = e >= r.end;
        let a = i ? 1 : Math.max(0, (e - r.at) / (r.end - r.at));
        return {
            id: r.id === `root` ? `run-${t}` : r.id,
            name: r.name,
            kind: r.kind,
            detail: r.detail,
            icon: r.icon,
            model: r.model,
            status: i ? r.fails ? `failed` : `done` : `running`,
            start: A(r.at),
            end: i ? A(r.end) : undefined,
            tokensIn: r.tin,
            tokensOut: r.tout === undefined ? undefined : Math.round(r.tout * a),
            cost: r.cost === undefined ? undefined : r.kind === `llm` ? r.cost * (0.25 + 0.75 * a) : i ? r.cost : undefined,
            input: r.input,
            output: i ? r.output : undefined,
            error: i ? r.error : undefined,
            children: O.filter((t)=>t.parent === r.id && e >= t.at).map(n)
        };
    };
    return n(O[0]);
};
function FeComponent() {
    let [e, setE] = n.useState(0);
    let [i, setI] = n.useState(0);
    let [collapsed, setCollapsed] = n.useState([]);
    let [openId, setOpenId] = n.useState(null);
    let uRef = n.useRef(false);
    n.useEffect(()=>{
        let e = performance.now();
        let n = 0;
        let r = 0;
        let i = ()=>{
            let o = (performance.now() - e) / 1000 % de;
            if (o < n) {
                setI((e)=>e + 1);
            }
            n = o;
            setE(o);
            if (!uRef.current) {
                setCollapsed([
                    ...o >= 6.9 ? [
                        `research`
                    ] : [],
                    ...o >= 8.3 ? [
                        `writer`
                    ] : []
                ]);
                setOpenId(o >= 8.9 && o < 10.9 ? `tests` : null);
            }
            r = requestAnimationFrame(i);
        };
        r = requestAnimationFrame(i);
        return ()=>cancelAnimationFrame(r);
    }, []);
    let d = Math.min(e, ue);
    return <div className={`tw-demo`}><Ae1Component root={j(d, i)} now={A(d)} collapsed={collapsed} onCollapsedChange={(e)=>{
        uRef.current = true;
        setCollapsed(e);
    }} openId={openId} onOpenChange={(e)=>{
        uRef.current = true;
        setOpenId(e);
    }}/></div>;
}
export { FeComponent as default };
