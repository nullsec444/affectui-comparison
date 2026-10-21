import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = [
    {
        id: `low`,
        label: `Low`
    },
    {
        id: `medium`,
        label: `Medium`
    },
    {
        id: `high`,
        label: `High`
    }
];
const a = {
    low: 1.6,
    medium: 2.5,
    high: 4
};
const o = [
    {
        key: `speed`,
        label: `Speed`
    },
    {
        key: `quality`,
        label: `Quality`
    },
    {
        key: `cost`,
        label: `Cost`
    }
];
const s = (e)=>1 - (1 - e) ** 4;
const c = ()=>typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
const l = (e)=>Math.max(0, Math.min(5, Math.round(e)));
const u = (e)=>`${(e / 1000).toFixed(1)}s`;
const d = (e, price)=>`$${e.toFixed(Number.isInteger(price) ? 0 : 2)}`;
function useF(e, t) {
    let [r, setR] = n.useState(e);
    let aRef = n.useRef(e);
    let o = JSON.stringify(e);
    n.useEffect(()=>{
        let e = JSON.parse(o);
        let n = {
            ...aRef.current
        };
        if (c() || Object.keys(e).every((t)=>n[t] === e[t])) {
            aRef.current = e;
            setR(e);
            return;
        }
        let r = performance.now();
        let l = 0;
        let u = (o)=>{
            let c = Math.min(1, (o - r) / t);
            let d = s(c);
            let f = {};
            for(let t in e){
                f[t] = (n[t] ?? e[t]) + (e[t] - (n[t] ?? e[t])) * d;
            }
            aRef.current = f;
            setR(f);
            if (c < 1) {
                l = requestAnimationFrame(u);
            }
        };
        l = requestAnimationFrame(u);
        return ()=>cancelAnimationFrame(l);
    }, [
        o,
        t
    ]);
    return r;
}
function P1Component({ id, children }) {
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
    return <span className={`ui-mdpc__swap`}>{s && <span key={`out-${s.id}`} className={`ui-mdpc__swap-item`} data-out={``} aria-hidden={`true`}>{s.node}</span>}<span key={id} className={`ui-mdpc__swap-item`}>{children}</span></span>;
}
const m = {
    stroke: `currentColor`,
    strokeWidth: 1.2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`
};
const Ee1Component = ()=><svg className={`ui-mdpc__chevron`} width={`14`} height={`14`} viewBox={`0 0 12 12`} fill={`none`} aria-hidden={`true`}><path d={`m3 4.5 3 3 3-3`} {...m}/></svg>;
const Te1Component = ()=><svg className={`ui-mdpc__check`} width={`16`} height={`16`} viewBox={`0 0 14 14`} fill={`none`} aria-hidden={`true`}><path d={`m3.4 7.3 2.4 2.4 4.8-5.2`} {...m} strokeWidth={1.3}/></svg>;
const H1Component = ()=><svg width={`16`} height={`16`} viewBox={`0 0 14 14`} fill={`none`} aria-hidden={`true`}><path d={`M5.3 10.6h3.4M5.8 12.3h2.4M7 1.7a3.9 3.9 0 0 0-2.3 7c.4.3.6.7.6 1.1v.1h3.4v-.1c0-.4.2-.8.6-1.1A3.9 3.9 0 0 0 7 1.7Z`} {...m}/></svg>;
const Ne1Component = ()=><svg width={`16`} height={`16`} viewBox={`0 0 14 14`} fill={`none`} aria-hidden={`true`}><circle cx={`7`} cy={`7`} r={`5.3`} {...m}/><path d={`M1.9 7h10.2M7 1.7c1.4 1.5 2 3.3 2 5.3s-.6 3.8-2 5.3c-1.4-1.5-2-3.3-2-5.3s.6-3.8 2-5.3Z`} {...m}/></svg>;
function G1Component({ model }) {
    return <span className={`ui-mdpc__glyph`} aria-hidden={`true`}>{model.icon ?? model.name.trim().charAt(0).toUpperCase()}</span>;
}
function Component({ models, value, defaultValue, onChange, thinking, defaultThinking = false, onThinkingChange, webSearch, defaultWebSearch = false, onWebSearchChange, effort, defaultEffort = `medium`, onEffortChange, open, defaultOpen = false, onOpenChange, align = `start`, side = `bottom`, className }) {
    let S = n.useId();
    let CRef = n.useRef(null);
    let wRef = n.useRef(null);
    let TRef = n.useRef(null);
    let [pe, setPe] = n.useState(defaultValue ?? models[0]?.id);
    let [he, setHe] = n.useState(defaultThinking);
    let [_e, set_e] = n.useState(defaultWebSearch);
    let [ye, setYe] = n.useState(defaultEffort);
    let [xe, setXe] = n.useState(defaultOpen);
    let E = value ?? pe;
    let D = thinking ?? he;
    let O = webSearch ?? _e;
    let k = effort ?? ye;
    let A = open ?? xe;
    let j = Math.max(0, models.findIndex((e)=>e.id === E));
    let M = models[j];
    let [N, setN] = n.useState(j);
    let [F, setF] = n.useState(false);
    let [Ce, setCe] = n.useState(null);
    let R = models[F ? N : j] ?? M;
    let z = (e, t)=>{
        if (e !== A) {
            if (e) {
                setN(j);
                setF(false);
            } else {
                setCe(null);
            }
            setXe(e);
            onOpenChange?.(e);
        }
        if (t === `list`) {
            requestAnimationFrame(()=>TRef.current?.focus({
                    preventScroll: true
                }));
        }
        if (t === `trigger`) {
            wRef.current?.focus({
                preventScroll: true
            });
        }
    };
    let BRef = n.useRef(A);
    n.useEffect(()=>{
        if (A && !BRef.current) {
            setN(j);
            setF(false);
        }
        BRef.current = A;
    }, [
        A,
        j
    ]);
    let VRef = n.useRef(null);
    let [H, setH] = n.useState(0);
    n.useLayoutEffect(()=>{
        if (!A) {
            return;
        }
        let e = ()=>{
            let e = wRef.current?.getBoundingClientRect();
            let t = VRef.current?.offsetWidth ?? 0;
            if (!e || !t) {
                return;
            }
            let clientWidth = document.documentElement.clientWidth;
            let r = align === `end` ? e.right - t : e.left;
            setH(r < 12 ? 12 - r : r + t > clientWidth - 12 ? Math.min(0, clientWidth - 12 - (r + t)) : 0);
        };
        e();
        window.addEventListener(`resize`, e);
        return ()=>window.removeEventListener(`resize`, e);
    }, [
        A,
        align
    ]);
    n.useEffect(()=>{
        if (!A) {
            return;
        }
        let e = (e)=>{
            if (!CRef.current?.contains(e.target)) {
                z(false);
            }
        };
        document.addEventListener(`pointerdown`, e);
        return ()=>document.removeEventListener(`pointerdown`, e);
    });
    let Te = ()=>CRef.current?.contains(document.activeElement) ?? false;
    let U = (t)=>{
        let n = models[t];
        if (n) {
            setPe(n.id);
            if (n.id !== E) {
                onChange?.(n.id);
            }
            z(false, Te() ? `trigger` : undefined);
        }
    };
    let Ee = ()=>{
        setHe(!D);
        onThinkingChange?.(!D);
    };
    let De = ()=>{
        set_e(!O);
        onWebSearchChange?.(!O);
    };
    let W = (e)=>{
        setYe(e);
        if (e !== k) {
            onEffortChange?.(e);
        }
    };
    let Oe = (e)=>{
        if (e.key === `ArrowDown` || e.key === `ArrowUp`) {
            e.preventDefault();
            z(true, `list`);
        }
    };
    let ke = (t)=>{
        let models_length = models.length;
        if (!models_length) {
            return;
        }
        let r = (e)=>{
            t.preventDefault();
            setN((e % models_length + models_length) % models_length);
            setF(true);
        };
        if (t.key === `ArrowDown`) {
            r(N + 1);
        } else if (t.key === `ArrowUp`) {
            r(N - 1);
        } else if (t.key === `Home`) {
            r(0);
        } else if (t.key === `End`) {
            r(models_length - 1);
        } else if (t.key === `Enter` || t.key === ` `) {
            t.preventDefault();
            U(N);
        }
    };
    let GRef = n.useRef(null);
    let [K, setK] = n.useState(null);
    n.useLayoutEffect(()=>{
        let e = GRef.current?.querySelector(`[data-effort="${k}"]`);
        if (e) {
            setK({
                x: e.offsetLeft,
                w: e.offsetWidth
            });
        }
    }, [
        k,
        A,
        D
    ]);
    let je = (e)=>{
        let t = i.findIndex((e)=>e.id === k);
        let n = e.key === `ArrowRight` || e.key === `ArrowDown` ? 1 : e.key === `ArrowLeft` || e.key === `ArrowUp` ? -1 : 0;
        if (!n) {
            return;
        }
        e.preventDefault();
        let r = i[(t + n + i.length) % i.length];
        W(r.id);
        CRef.current?.querySelector(`[data-effort="${r.id}"]`)?.focus();
    };
    let Me = (e)=>{
        if (e.key === `Escape` && A) {
            e.stopPropagation();
            z(false, `trigger`);
        }
    };
    let Ne = D ? a[k] : 1;
    let latency = (R?.latencyMs ?? 0) * Ne;
    let price = R?.pricePerM ?? 0;
    let Y = useF({
        latency,
        price
    }, 560);
    let X = R?.latencyMs !== undefined || R?.pricePerM !== undefined;
    let Z;
    let id;
    let $;
    if (Ce === `search`) {
        Z = O ? `Looks things up on the web when it helps` : `Answers from what it already knows`;
        id = `search-${O}`;
        $ = Z;
    } else if (!X) {
        Z = R?.description ?? R?.name ?? ``;
        id = `plain-${R?.id}`;
        $ = `${R?.name ?? ``}: ${Z}`;
    } else {
        let e = [];
        let t = [];
        if (R.latencyMs !== undefined) {
            e.push(<span key={`l`}>{`~`}<b>{u(Y.latency ?? latency)}</b>{` first token`}</span>);
            t.push(`about ${u(latency)} to the first token`);
        }
        if (R.pricePerM !== undefined) {
            e.push(<span key={`p`}><b>{d(Y.price ?? price, price)}</b>{` / M tokens`}</span>);
            t.push(`${d(price, price)} per million tokens`);
        }
        Z = e.flatMap((e, t)=>{
            if (t) {
                return [
                    <span key={`d${t}`} className={`ui-mdpc__dot`}>{` · `}</span>,
                    e
                ];
            }
            return [
                e
            ];
        });
        id = `stats`;
        $ = `${R.name}: ${t.join(`, `)}`;
    }
    let Pe = models[N] ? `${S}-opt-${models[N].id}` : undefined;
    return <div ref={CRef} className={[
        `ui-mdpc`,
        className
    ].filter(Boolean).join(` `)} data-open={A ? `` : undefined} data-align={align} data-side={side} onKeyDown={Me} onBlur={(e)=>{
        if (A && e.relatedTarget && !CRef.current?.contains(e.relatedTarget)) {
            z(false);
        }
    }}><style href={`ui-model-picker-clean`} precedence={`default`}>{re}</style><button ref={wRef} type={`button`} className={`ui-mdpc__trigger`} aria-haspopup={`dialog`} aria-expanded={A} aria-controls={`${S}-menu`} aria-label={`Model: ${M?.name ?? `none`}${D ? `, extended thinking` : ``}`} onClick={()=>z(!A, A ? undefined : `list`)} onKeyDown={Oe}>{M && <G1Component model={M}/>}<span className={`ui-mdpc__name`}><P1Component id={M?.id ?? `none`}>{M?.name ?? `Choose a model`}</P1Component></span><span className={`ui-mdpc__flag`} data-on={D ? `` : undefined} aria-hidden={`true`}><span><H1Component/></span></span><Ee1Component/></button><div id={`${S}-menu`} ref={VRef} className={`ui-mdpc__pop`} style={H ? {
        translate: `${H}px 0`
    } : undefined} role={`dialog`} aria-label={`Model settings`} inert={!A}><div className={`ui-mdpc__card`}><div className={`ui-mdpc__head`} aria-hidden={`true`}><span>{`Model`}</span><span className={`ui-mdpc__cols`}>{o.map((e)=><span key={e.key}>{e.label}</span>)}</span></div><div ref={TRef} className={`ui-mdpc__list`} role={`listbox`} aria-label={`Model`} tabIndex={0} aria-activedescendant={A ? Pe : undefined} data-pointing={F ? `` : undefined} onKeyDown={ke} onPointerLeave={()=>setF(false)}>{models.map((e, t)=>{
        let n = e.speed !== undefined || e.quality !== undefined || e.cost !== undefined;
        return <div key={e.id} id={`${S}-opt-${e.id}`} role={`option`} aria-selected={t === j} aria-label={`${e.name}${e.description ? `, ${e.description}` : ``}${n ? `. Speed ${e.speed ?? 0}, quality ${e.quality ?? 0}, cost ${e.cost ?? 0} of 5` : ``}`} className={`ui-mdpc__option`} data-active={t === N ? `` : undefined} data-lit={e.id === R?.id ? `` : undefined} onPointerEnter={(e)=>{
            if (e.pointerType === `mouse`) {
                setN(t);
                setF(true);
            }
        }} onClick={()=>U(t)}><G1Component model={e}/><span className={`ui-mdpc__text`}><span className={`ui-mdpc__title`}><span className={`ui-mdpc__title-name`}>{e.name}</span>{t === j && <Te1Component/>}</span>{e.description && <span className={`ui-mdpc__desc`}>{e.description}</span>}</span>{n ? <span className={`ui-mdpc__bars`} aria-hidden={`true`}>{o.map((t, n)=>{
            let i = l(e[t.key] ?? 0);
            return <span key={t.key} className={`ui-mdpc__meter`} style={{
                "--c": n
            }}>{[
                0,
                1,
                2,
                3,
                4
            ].map((e)=><span key={e} className={`ui-mdpc__seg`} data-on={e < i ? `` : undefined} style={{
                    "--s": e
                }}/>)}</span>;
        })}</span> : <span className={`ui-mdpc__varies`} aria-hidden={`true`}>{`Varies`}</span>}</div>;
    })}</div><div className={`ui-mdpc__settings`}><button type={`button`} role={`switch`} aria-checked={D} className={`ui-mdpc__toggle`} onClick={Ee}><span className={`ui-mdpc__toggle-icon`}><H1Component/></span><span className={`ui-mdpc__toggle-label`}>{`Extended thinking`}</span><span className={`ui-mdpc__switch`} aria-hidden={`true`}/></button><div className={`ui-mdpc__fold`} data-open={D ? `` : undefined} inert={!D}><div className={`ui-mdpc__clip`}><div className={`ui-mdpc__effort`}><span className={`ui-mdpc__effort-label`} id={`${S}-effort`}>{`Effort`}</span><div ref={GRef} className={`ui-mdpc__segmented`} role={`radiogroup`} aria-labelledby={`${S}-effort`} style={K ? {
        "--x": `${K.x}px`,
        "--w": `${K.w}px`
    } : undefined} onKeyDown={je}><span className={`ui-mdpc__thumb`} aria-hidden={`true`}/>{i.map((e)=><button key={e.id} type={`button`} role={`radio`} aria-checked={e.id === k} tabIndex={e.id === k ? 0 : -1} data-effort={e.id} className={`ui-mdpc__seg-btn`} onClick={()=>W(e.id)}>{e.label}</button>)}</div></div></div></div><button type={`button`} role={`switch`} aria-checked={O} className={`ui-mdpc__toggle`} onClick={De} onPointerEnter={(e)=>e.pointerType === `mouse` && setCe(`search`)} onPointerLeave={()=>setCe(null)} onFocus={()=>setCe(`search`)} onBlur={()=>setCe(null)}><span className={`ui-mdpc__toggle-icon`}><Ne1Component/></span><span className={`ui-mdpc__toggle-label`}>{`Web search`}</span><span className={`ui-mdpc__switch`} aria-hidden={`true`}/></button></div></div><div className={`ui-mdpc__foot`}><span className={`ui-mdpc__caption`} aria-hidden={`true`}><P1Component id={id}>{Z}</P1Component></span><span className={`ui-mdpc__keys`} aria-hidden={`true`}><kbd>{`↑↓`}</kbd><kbd>{`↵`}</kbd></span><span className={`ui-mdpc__sr`} aria-live={`polite`}>{A ? $ : ``}</span></div></div></div>;
}
var re = `.ui-mdpc{--ui-mdpc-card: #ffffff;--ui-mdpc-strong: #000000;--ui-mdpc-ink: rgba(0, 0, 0, 0.88);--ui-mdpc-text: rgba(0, 0, 0, 0.61);--ui-mdpc-muted: rgba(0, 0, 0, 0.45);--ui-mdpc-faint: rgba(0, 0, 0, 0.27);--ui-mdpc-icon: rgba(0, 0, 0, 0.447);--ui-mdpc-line: rgba(0, 0, 0, 0.06);--ui-mdpc-line-strong: rgba(0, 0, 0, 0.1);--ui-mdpc-fill: rgba(0, 0, 0, 0.06);--ui-mdpc-wash: rgba(0, 0, 0, 0.03);--ui-mdpc-bar: rgba(0, 0, 0, 0.2);--ui-mdpc-bar-off: rgba(0, 0, 0, 0.06);--ui-mdpc-switch: rgba(0, 0, 0, 0.1);--ui-mdpc-knob: #ffffff;--ui-mdpc-accent: rgba(0, 96, 226, 0.765);--ui-mdpc-focus: rgba(0, 96, 226, 0.35);--ui-mdpc-shadow-tile: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 1px -1px rgba(0, 0, 0, 0.1);--ui-mdpc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-mdpc-ease: cubic-bezier(0.32, 0.72, 0.24, 1);position: relative;display: inline-block;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-mdpc-ink);text-align: left;-webkit-font-smoothing: antialiased}.ui-mdpc *, .ui-mdpc *::before, .ui-mdpc *::after{box-sizing: border-box}:where(.ui-mdpc) button{appearance: none;margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-mdpc button:focus-visible{outline: 2px solid var(--ui-mdpc-focus);outline-offset: 1px}.ui-mdpc svg{display: block;flex: none}.ui-mdpc b{font-weight: 500;color: var(--ui-mdpc-ink)}.ui-mdpc__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-mdpc__trigger{display: inline-flex;align-items: center;gap: 6px;max-width: 100%;height: 28px;padding: 0 6px 0 6px;border-radius: 6px;font-weight: 500;color: var(--ui-mdpc-text);white-space: nowrap;transition: background-color 160ms ease, color 160ms ease}.ui-mdpc__trigger:hover, .ui-mdpc[data-open] .ui-mdpc__trigger{background: var(--ui-mdpc-wash);color: var(--ui-mdpc-ink)}.ui-mdpc__trigger .ui-mdpc__glyph{width: 18px;height: 18px;border-radius: 5px;font-size: 10px}.ui-mdpc__trigger .ui-mdpc__glyph > svg{width: 10px;height: 10px}.ui-mdpc__name{display: grid;min-width: 0}.ui-mdpc__chevron{margin-left: -2px;color: var(--ui-mdpc-icon);transition: transform 300ms var(--ui-mdpc-ease)}.ui-mdpc[data-open] .ui-mdpc__chevron{transform: rotate(180deg)}.ui-mdpc__flag{display: grid;grid-template-columns: 0fr;margin-left: -6px;opacity: 0;color: var(--ui-mdpc-accent);transition: grid-template-columns 360ms var(--ui-mdpc-ease), margin 360ms var(--ui-mdpc-ease), opacity 220ms ease}.ui-mdpc__flag > span{min-width: 0;overflow: hidden}.ui-mdpc__flag[data-on]{grid-template-columns: 1fr;margin-left: -2px;opacity: 1;transition: grid-template-columns 360ms var(--ui-mdpc-ease), margin 360ms var(--ui-mdpc-ease), opacity 280ms ease 80ms}.ui-mdpc__glyph{display: grid;flex: none;place-items: center;width: 20px;height: 20px;overflow: hidden;border-radius: 5px;background: var(--ui-mdpc-card);box-shadow: var(--ui-mdpc-shadow-tile);font-size: 10px;font-weight: 500;line-height: 1;color: var(--ui-mdpc-strong)}.ui-mdpc__glyph > svg, .ui-mdpc__glyph > img{width: 12px;height: 12px}.ui-mdpc__pop{position: absolute;z-index: 30;top: calc(100% + 6px);left: 0;width: min(320px, calc(100vw - 32px));container-type: inline-size;border-radius: 10px;background: var(--ui-mdpc-card);box-shadow: var(--ui-mdpc-shadow-pop);transform-origin: top left;opacity: 0;visibility: hidden;transform: translateY(-4px) scale(0.96);transition: opacity 160ms ease, transform 220ms var(--ui-mdpc-ease), visibility 0s linear 220ms}.ui-mdpc[data-align="end"] .ui-mdpc__pop{left: auto;right: 0;transform-origin: top right}.ui-mdpc[data-side="top"] .ui-mdpc__pop{top: auto;bottom: calc(100% + 6px);transform-origin: bottom left;transform: translateY(4px) scale(0.96)}.ui-mdpc[data-side="top"][data-align="end"] .ui-mdpc__pop{transform-origin: bottom right}.ui-mdpc[data-open] .ui-mdpc__pop{opacity: 1;visibility: visible;transform: none;transition: opacity 200ms ease, transform 320ms var(--ui-mdpc-ease), visibility 0s}.ui-mdpc__card{padding: 4px}.ui-mdpc__head{display: flex;align-items: center;justify-content: space-between;gap: 12px;height: 28px;padding: 4px 8px 0;font-size: 10px;font-weight: 500;line-height: 16px;letter-spacing: 0.5px;text-transform: uppercase;color: var(--ui-mdpc-muted)}.ui-mdpc__cols{display: grid;grid-template-columns: repeat(3, 40px);gap: 8px}.ui-mdpc__cols > span{display: flex;justify-content: center;white-space: nowrap}.ui-mdpc__list{display: grid;gap: 0;border-radius: 6px;outline: none}.ui-mdpc__option{display: flex;align-items: center;gap: 10px;min-height: 44px;padding: 6px 8px;border-radius: 6px;cursor: pointer;transition: background-color 90ms ease-out, opacity 200ms ease}.ui-mdpc__list[data-pointing] .ui-mdpc__option[data-active]{background: var(--ui-mdpc-fill)}.ui-mdpc__list:focus-visible{outline: none}.ui-mdpc__list:focus-visible .ui-mdpc__option[data-active]{background: var(--ui-mdpc-fill);box-shadow: inset 0 0 0 1px var(--ui-mdpc-focus)}.ui-mdpc__list[data-pointing] .ui-mdpc__option:not([data-active]){opacity: 0.55}.ui-mdpc__text{display: grid;flex: 1;min-width: 0}.ui-mdpc__title{display: flex;align-items: center;gap: 4px;min-width: 0;font-weight: 500;color: var(--ui-mdpc-strong)}.ui-mdpc__title-name{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-mdpc__check{color: var(--ui-mdpc-accent);animation: ui-mdpc-pop 320ms var(--ui-mdpc-ease) both}.ui-mdpc__desc{overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-mdpc-text);white-space: nowrap;text-overflow: ellipsis}.ui-mdpc__bars{display: grid;flex: none;grid-template-columns: repeat(3, 40px);gap: 8px}.ui-mdpc__meter{display: grid;grid-template-columns: repeat(5, 1fr);gap: 2px;height: 4px}.ui-mdpc__seg{border-radius: 1px;background: var(--ui-mdpc-bar-off);transition: background-color 180ms ease, transform 260ms var(--ui-mdpc-ease)}.ui-mdpc__seg[data-on]{background: var(--ui-mdpc-bar)}.ui-mdpc__option[data-lit] .ui-mdpc__seg[data-on]{background: var(--ui-mdpc-accent);transition-delay: calc(var(--c) * 70ms + var(--s) * 45ms);animation: ui-mdpc-fill 360ms var(--ui-mdpc-ease) both;animation-delay: calc(var(--c) * 70ms + var(--s) * 45ms)}.ui-mdpc__varies{flex: none;width: 136px;font-size: 12px;line-height: 16px;color: var(--ui-mdpc-muted);text-align: center}.ui-mdpc__settings{margin: 4px -4px 0;padding: 4px 4px 0;border-top: 0.5px solid var(--ui-mdpc-line)}.ui-mdpc__toggle{display: flex;align-items: center;gap: 10px;width: 100%;height: 32px;padding: 0 8px;border-radius: 6px;color: var(--ui-mdpc-ink);transition: background-color 90ms ease-out}.ui-mdpc__toggle:hover{background: var(--ui-mdpc-fill)}.ui-mdpc__toggle-icon{display: grid;flex: none;place-items: center;width: 20px;color: var(--ui-mdpc-icon);transition: color 200ms ease}.ui-mdpc__toggle[aria-checked="true"] .ui-mdpc__toggle-icon{color: var(--ui-mdpc-ink)}.ui-mdpc__toggle-label{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-mdpc__switch{position: relative;flex: none;width: 26px;height: 16px;border-radius: 5px;background: var(--ui-mdpc-switch);transition: background-color 220ms ease}.ui-mdpc__switch::after{content: "";position: absolute;top: 2px;left: 2px;width: 12px;height: 12px;border-radius: 3.5px;background: var(--ui-mdpc-knob);box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.16);transition: transform 280ms var(--ui-mdpc-ease)}.ui-mdpc__toggle[aria-checked="true"] .ui-mdpc__switch{background: var(--ui-mdpc-accent)}.ui-mdpc__toggle[aria-checked="true"] .ui-mdpc__switch::after{transform: translateX(10px)}.ui-mdpc__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 420ms var(--ui-mdpc-ease), opacity 220ms ease}.ui-mdpc__fold[data-open]{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows 420ms var(--ui-mdpc-ease), opacity 320ms ease 100ms}.ui-mdpc__clip{min-height: 0;overflow: hidden}.ui-mdpc__effort{display: flex;align-items: center;gap: 10px;padding: 2px 8px 6px 38px}.ui-mdpc__effort-label{flex: 1;min-width: 0;color: var(--ui-mdpc-text)}.ui-mdpc__segmented{position: relative;display: flex;flex: none;gap: 4px}.ui-mdpc__thumb{position: absolute;top: 0;bottom: 0;left: 0;width: var(--w, 0);border-radius: 5px;background: var(--ui-mdpc-fill);transform: translateX(var(--x, 0));transition: transform 220ms var(--ui-mdpc-ease), width 220ms var(--ui-mdpc-ease)}.ui-mdpc__seg-btn{position: relative;height: 22px;padding: 0 7px;border-radius: 5px;box-shadow: inset 0 0 0 0.5px var(--ui-mdpc-line);font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-mdpc-text);text-align: center !important;transition: color 160ms ease, background-color 160ms ease}.ui-mdpc__seg-btn[aria-checked="true"]{color: var(--ui-mdpc-ink)}.ui-mdpc__seg-btn[aria-checked="false"]:hover{background: var(--ui-mdpc-wash);color: var(--ui-mdpc-ink)}.ui-mdpc__foot{display: flex;align-items: center;gap: 8px;height: 36px;padding: 0 8px 0 12px;border-top: 0.5px solid var(--ui-mdpc-line)}.ui-mdpc__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-mdpc-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-mdpc__dot{color: var(--ui-mdpc-faint)}.ui-mdpc__swap{display: grid;min-width: 0}.ui-mdpc__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;animation: ui-mdpc-swap-in 320ms ease both}.ui-mdpc__swap-item[data-out]{animation: ui-mdpc-swap-out 220ms ease both}.ui-mdpc__keys{display: flex;flex: none;gap: 2px}.ui-mdpc__keys kbd{display: grid;place-items: center;min-width: 20px;height: 20px;padding: 0 5px;border-radius: 5px;box-shadow: inset 0 0 0 0.5px var(--ui-mdpc-line-strong);font-family: inherit;font-size: 11px;font-weight: 500;line-height: 16px;color: var(--ui-mdpc-muted)}@keyframes ui-mdpc-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-mdpc-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@keyframes ui-mdpc-pop{from{opacity: 0;transform: scale(0.6)}}@keyframes ui-mdpc-fill{0%{transform: scaleY(1)}45%{transform: scaleY(1.6)}100%{transform: scaleY(1)}}@container (max-width: 300px){.ui-mdpc__option .ui-mdpc__glyph{display: none}.ui-mdpc__keys{display: none}.ui-mdpc__effort{padding-left: 8px}}@media (pointer: coarse){.ui-mdpc__trigger{height: 34px}.ui-mdpc__option{min-height: 52px}.ui-mdpc__toggle{height: 40px}.ui-mdpc__seg-btn{height: 30px;padding: 0 10px}.ui-mdpc__keys{display: none}}@media (prefers-reduced-motion: reduce){.ui-mdpc *, .ui-mdpc *::before, .ui-mdpc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-mdpc{--ui-mdpc-card: #1c1c1e;--ui-mdpc-strong: #ffffff;--ui-mdpc-ink: rgba(255, 255, 255, 0.9);--ui-mdpc-text: rgba(255, 255, 255, 0.62);--ui-mdpc-muted: rgba(255, 255, 255, 0.46);--ui-mdpc-faint: rgba(255, 255, 255, 0.3);--ui-mdpc-icon: rgba(255, 255, 255, 0.5);--ui-mdpc-line: rgba(255, 255, 255, 0.08);--ui-mdpc-line-strong: rgba(255, 255, 255, 0.12);--ui-mdpc-fill: rgba(255, 255, 255, 0.08);--ui-mdpc-wash: rgba(255, 255, 255, 0.04);--ui-mdpc-bar: rgba(255, 255, 255, 0.24);--ui-mdpc-bar-off: rgba(255, 255, 255, 0.08);--ui-mdpc-switch: rgba(255, 255, 255, 0.14);--ui-mdpc-knob: #ffffff;--ui-mdpc-accent: #4d8dff;--ui-mdpc-focus: rgba(77, 141, 255, 0.5);--ui-mdpc-shadow-tile: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 1px 2px rgba(0, 0, 0, 0.4);--ui-mdpc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 28px -10px rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-mdpc__glyph{background: #2a2a2d}`;
const InlineComponent = ()=><svg viewBox={`0 0 12 12`} fill={`none`} aria-hidden={`true`}><path d={`M6 1.5 7.1 4.9 10.5 6 7.1 7.1 6 10.5 4.9 7.1 1.5 6 4.9 4.9Z`} fill={`currentColor`}/></svg>;
const models = [
    {
        id: `opus`,
        name: `Opus 5.5`,
        description: `Hardest problems`,
        speed: 2,
        quality: 5,
        cost: 5,
        latencyMs: 2100,
        pricePerM: 25
    },
    {
        id: `sonnet`,
        name: `Sonnet 5.5`,
        description: `Everyday work`,
        speed: 4,
        quality: 4,
        cost: 3,
        latencyMs: 900,
        pricePerM: 15
    },
    {
        id: `haiku`,
        name: `Haiku 5.5`,
        description: `Quick and light`,
        speed: 5,
        quality: 3,
        cost: 1,
        latencyMs: 400,
        pricePerM: 4
    },
    {
        id: `auto`,
        name: `Auto`,
        description: `Picks per message`,
        icon: <InlineComponent/>
    }
];
function YComponent() {
    let eRef = n.useRef(null);
    let [t, setT] = n.useState(0);
    let [open, setOpen] = n.useState(false);
    let sRef = n.useRef(false);
    let cRef = n.useRef(false);
    n.useEffect(()=>{
        let t = (t)=>eRef.current?.querySelector(t) ?? null;
        let n = (e, t, n = {})=>{
            if (e) {
                cRef.current = true;
                e.dispatchEvent(new PointerEvent(t, {
                    bubbles: true,
                    pointerType: `mouse`,
                    ...n
                }));
                cRef.current = false;
            }
        };
        let r = (e)=>t(`.ui-mdpc__option:nth-child(${e})`);
        let a = (e)=>()=>n(r(e), `pointerover`);
        let l = ()=>n(t(`.ui-mdpc__option[data-active]`), `pointerout`, {
                relatedTarget: t(`.ui-mdpc__settings`)
            });
        let u = [
            [
                700,
                ()=>setOpen(true)
            ],
            [
                800,
                a(1)
            ],
            [
                2800,
                a(3)
            ],
            [
                1200,
                a(1)
            ],
            [
                1300,
                ()=>{
                    l();
                    t(`.ui-mdpc__toggle`)?.click();
                }
            ],
            [
                1400,
                ()=>t(`[data-effort="high"]`)?.click()
            ],
            [
                1400,
                a(1)
            ],
            [
                1100,
                ()=>r(1)?.click()
            ],
            [
                3200,
                ()=>setT((e)=>e + 1)
            ]
        ];
        let d = 0;
        let f = 0;
        let p = ()=>{
            if (!(sRef.current || d >= u.length)) {
                f = window.setTimeout(()=>{
                    if (!sRef.current) {
                        u[d][1]();
                        d++;
                        p();
                    }
                }, u[d][0]);
            }
        };
        p();
        return ()=>window.clearTimeout(f);
    }, [
        t
    ]);
    let l = ()=>{
        if (!cRef.current) {
            sRef.current = true;
        }
    };
    return <div ref={eRef} className={`mdp-demo mdp-demo--clean`} onPointerEnter={l} onPointerDownCapture={l} onKeyDownCapture={l} onFocusCapture={l} onClick={(e)=>e.target.closest(`.ui-mdpc__pop`) && e.stopPropagation()}><div className={`mdp-demo__composer`}><div className={`mdp-demo__text`}>{`Ask anything…`}</div><div className={`mdp-demo__bar`}><Component key={t} models={models} defaultValue={`sonnet`} open={open} onOpenChange={setOpen}/><span className={`mdp-demo__send`} aria-hidden={`true`}><svg width={`16`} height={`16`} viewBox={`0 0 14 14`} fill={`none`}><path d={`M7 11.5v-9M3.2 6.3 7 2.5l3.8 3.8`} stroke={`currentColor`} strokeWidth={`1.3`} strokeLinecap={`round`} strokeLinejoin={`round`}/></svg></span></div></div></div>;
}
export { YComponent as default };
