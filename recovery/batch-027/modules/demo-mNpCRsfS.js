import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = (e)=>e.reduce((acc, item)=>acc + item, 0);
const a = (e)=>new Intl.NumberFormat(`en-US`, {
        maximumFractionDigits: 0
    }).format(Math.round(e));
const o = (e)=>`$${new Intl.NumberFormat(`en-US`, {
        minimumFractionDigits: Math.abs(e) < 10000 ? 2 : 0,
        maximumFractionDigits: Math.abs(e) < 10000 ? 2 : 0
    }).format(e)}`;
const s = (e)=>1 - (1 - e) ** 4;
const c = (e, t, n)=>e + (t - e) * n;
const l = ()=>typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function u(e, t) {
    if (!e || e.length === 0) {
        return Array(t).fill(0);
    }
    if (e.length === 1) {
        return Array(t).fill(e[0]);
    }
    return Array.from({
        length: t
    }, (n, r)=>{
        let i = r / (t - 1) * (e.length - 1);
        let a = Math.floor(i);
        let o = Math.min(e.length - 1, a + 1);
        return c(e[a], e[o], i - a);
    });
}
function d(e, t, n, r = 6, i = 94) {
    let a = n - t || 1;
    let pts = e.map((n, o)=>[
            o / Math.max(1, e.length - 1) * 100,
            i - (n - t) / a * (i - r)
        ]);
    let line = pts.map((e, t)=>`${t ? `L` : `M`}${e[0].toFixed(2)},${e[1].toFixed(2)}`).join(``);
    return {
        pts,
        line,
        area: `${line}L100,100L0,100Z`
    };
}
const f = (pts, t, n)=>pts[Math.round(t / Math.max(1, n - 1) * (pts.length - 1))];
function useP(e, t, r = 760) {
    let iRef = n.useRef(null);
    let aRef = n.useRef(e);
    let oRef = n.useRef(null);
    let [c, setC] = n.useState({
        key: null,
        t: 0
    });
    if (oRef.current !== t) {
        if (oRef.current !== null) {
            iRef.current = aRef.current;
        }
        oRef.current = t;
    }
    aRef.current = e;
    n.useEffect(()=>{
        if (l()) {
            return setC({
                key: t,
                t: 1
            });
        }
        let e = performance.now();
        let n = 0;
        let i = (a)=>{
            let o = Math.min(1, (a - e) / r);
            setC({
                key: t,
                t: s(o)
            });
            if (o < 1) {
                n = requestAnimationFrame(i);
            }
        };
        n = requestAnimationFrame(i);
        return ()=>cancelAnimationFrame(n);
    }, [
        t,
        r
    ]);
    return {
        from: iRef.current,
        t: c.key === t ? c.t : 0
    };
}
const EeComponent = ()=><svg width={`10`} height={`10`} viewBox={`0 0 10 10`} fill={`none`} aria-hidden={`true`}><path d={`m2.5 3.8 2.5 2.5 2.5-2.5`} stroke={`currentColor`} strokeWidth={`1.4`} strokeLinecap={`round`} strokeLinejoin={`round`}/></svg>;
const M1Component = ()=><svg width={`12`} height={`12`} viewBox={`0 0 12 12`} fill={`none`} aria-hidden={`true`}><path d={`m2.6 6.3 2.2 2.2 4.6-5`} stroke={`currentColor`} strokeWidth={`1.5`} strokeLinecap={`round`} strokeLinejoin={`round`}/></svg>;
const H1Component = ()=><svg width={`13`} height={`13`} viewBox={`0 0 14 14`} fill={`none`} aria-hidden={`true`}><path d={`M2 4.2h5.2M10.2 4.2H12M2 9.8h1.8M6.8 9.8H12`} stroke={`currentColor`} strokeWidth={`1.3`} strokeLinecap={`round`}/><circle cx={`8.7`} cy={`4.2`} r={`1.5`} stroke={`currentColor`} strokeWidth={`1.3`}/><circle cx={`5.3`} cy={`9.8`} r={`1.5`} stroke={`currentColor`} strokeWidth={`1.3`}/></svg>;
const TeComponent = ()=><svg width={`16`} height={`16`} viewBox={`0 0 16 16`} fill={`none`} aria-hidden={`true`}><path d={`M8 1.9 13.3 4.8v6.4L8 14.1 2.7 11.2V4.8L8 1.9Z`} stroke={`currentColor`} strokeWidth={`1.3`} strokeLinejoin={`round`}/><path d={`M2.9 4.9 8 7.7l5.1-2.8M8 7.7V14`} stroke={`currentColor`} strokeWidth={`1.3`} strokeLinejoin={`round`}/></svg>;
function G1Component({ up, good, children }) {
    return <span className={`ui-kb__change`} data-good={good ? `` : undefined}><svg width={`8`} height={`8`} viewBox={`0 0 8 8`} aria-hidden={`true`} style={up ? undefined : {
        transform: `scaleY(-1)`
    }}><path d={`M4 1.2 7.2 6.4H.8L4 1.2Z`} fill={`currentColor`}/></svg>{children}</span>;
}
function NeComponent({ label, value, options, onChange }) {
    let o = n.useId();
    let sRef = n.useRef(null);
    let [c, setC] = n.useState(false);
    let [u, setU] = n.useState(0);
    let f = Math.max(0, options.findIndex((e)=>e.id === value));
    n.useEffect(()=>{
        if (!c) {
            return;
        }
        let e = (e)=>{
            if (!sRef.current?.contains(e.target)) {
                setC(false);
            }
        };
        document.addEventListener(`pointerdown`, e);
        return ()=>document.removeEventListener(`pointerdown`, e);
    }, [
        c
    ]);
    let p = ()=>{
        setU(f);
        setC(true);
    };
    let h = (e)=>{
        setC(false);
        if (options[e] && options[e].id !== value) {
            onChange(options[e].id);
        }
        sRef.current?.querySelector(`button`)?.focus({
            preventScroll: true
        });
    };
    return <div ref={sRef} className={`ui-kb__pick`} data-open={c ? `` : undefined} onKeyDown={(e)=>{
        if (!c) {
            if (e.key === `ArrowDown` || e.key === `ArrowUp`) {
                e.preventDefault();
                p();
            }
            return;
        }
        if (e.key === `Escape`) {
            e.preventDefault();
            e.stopPropagation();
            setC(false);
        } else if (e.key === `ArrowDown` || e.key === `ArrowUp`) {
            e.preventDefault();
            setU((t)=>(t + (e.key === `ArrowDown` ? 1 : -1) + options.length) % options.length);
        } else if (e.key === `Home` || e.key === `End`) {
            e.preventDefault();
            setU(e.key === `Home` ? 0 : options.length - 1);
        } else if (e.key === `Enter` || e.key === ` `) {
            e.preventDefault();
            h(u);
        } else if (e.key === `Tab`) {
            setC(false);
        }
    }}><button type={`button`} className={`ui-kb__pick-button`} role={`combobox`} aria-label={label} aria-haspopup={`listbox`} aria-expanded={c} aria-controls={`${o}-list`} aria-activedescendant={c ? `${o}-${u}` : undefined} onClick={()=>{
        if (c) {
            return setC(false);
        }
        return p();
    }}><span>{options[f]?.label}</span><EeComponent/></button>{c && <ul id={`${o}-list`} className={`ui-kb__menu`} role={`listbox`} aria-label={label}>{options.map((e, t)=><li key={e.id} id={`${o}-${t}`} role={`option`} aria-selected={t === f} className={`ui-kb__option`} data-active={t === u ? `` : undefined} onPointerEnter={()=>setU(t)} onClick={()=>h(t)}><span>{e.label}</span>{t === f && <M1Component/>}</li>)}</ul>}</div>;
}
function ReComponent({ data, ranges, range, defaultRange, onRangeChange, segments, segment, defaultSegment, onSegmentChange, compareLabel = `vs. last period`, currentLabel = `This period`, previousLabel = `Last period`, formatMoney = o, icon, title, setup, action, className }) {
    let E = n.useId().replace(/:/g, ``);
    let [se, setSe] = n.useState(defaultRange ?? ranges[0]?.id);
    let D = range ?? se ?? ranges[0]?.id;
    let [le, setLe] = n.useState(defaultSegment ?? segments?.[0]?.id);
    let O = segment ?? le;
    let k = data[D] ?? Object.values(data)[0];
    let { from, t: t_1 } = useP(k, D);
    let A = O && k.overview.segments?.[O] || k.overview;
    let pe = `${D}/${O ?? ``}`;
    let me = useP(i(A.current), pe);
    let j = (e)=>c(from ? e(from) : 0, e(k), t_1);
    let M = (e, t)=>{
        let n = e(k) ?? [];
        if (n.length >= 2 && n.length <= t) {
            return n;
        }
        return u(n, t);
    };
    let key = D;
    let P = (kind, t)=>{
        if (kind === `count`) {
            return a(t);
        }
        return formatMoney(t);
    };
    let [F, setF] = n.useState(null);
    let [L, setL] = n.useState(null);
    let [z, setZ] = n.useState(null);
    let V = (e)=>{
        let t = (t)=>{
            let n = t.currentTarget.getBoundingClientRect();
            e(Math.min(1, Math.max(0, (t.clientX - n.left) / n.width)));
        };
        let n = (t)=>{
            if (t.pointerType !== `mouse`) {
                e(null);
            }
        };
        return {
            onPointerDown: t,
            onPointerMove: t,
            onPointerUp: n,
            onPointerCancel: n,
            onPointerLeave: ()=>e(null)
        };
    };
    let he = (e)=>{
        setSe(e);
        setF(null);
        setL(null);
        setZ(null);
        onRangeChange?.(e);
    };
    let ge = (e)=>{
        setLe(e);
        setL(null);
        onSegmentChange?.(e);
    };
    let H = M(()=>A.current, 72);
    let U = M(()=>A.previous, 72);
    let _e = Math.max(...H, ...U, 1) * 1.06;
    let ve = Math.min(...H, ...U) * 0.82;
    let W = d(H, ve, _e);
    let ye = d(U, ve, _e);
    let be = c(me.from ?? 0, i(A.current), me.t);
    let G = i(A.previous) ? (i(A.current) - i(A.previous)) / i(A.previous) * 100 : 0;
    let K = L === null ? null : Math.round(L * (A.current.length - 1));
    let q = K === null ? null : f(W.pts, K, A.current.length);
    let J = K === null ? null : f(ye.pts, K, A.current.length);
    let Y = M((e)=>e.focus.values, 48);
    let xe = Math.max(...Y, 1) * 1.05;
    let X = d(Y, Math.min(...Y) * 0.8, xe, 8, 92);
    let Se = j((e)=>i(e.focus.values));
    let Z = k.focus.previous ? (i(k.focus.values) - k.focus.previous) / k.focus.previous * 100 : 0;
    let Q = z === null ? null : Math.round(z * (k.focus.values.length - 1));
    let $ = Q === null ? null : f(X.pts, Q, k.focus.values.length);
    return <div className={[
        `ui-kb`,
        className
    ].filter(Boolean).join(` `)}><style href={`ui-kpi-board`} precedence={`default`}>{ie}</style><div className={`ui-kb__bar`}>{title && <h2 className={`ui-kb__heading`}>{title}</h2>}<NeComponent label={`Date range`} value={D} options={ranges} onChange={he}/></div>{k.stats.map((e, t)=>{
        let n = M((e)=>e.stats[t]?.values, 48);
        let a = Math.max(...n, 1) * 1.08;
        let o = d(n, Math.min(...n) * 0.75, a, 10, 92);
        let s = j((e)=>i(e.stats[t]?.values ?? []));
        let c = e.previous === undefined ? null : i(e.values) - e.previous;
        let l = F?.id === e.id ? Math.round(F.at * (e.values.length - 1)) : null;
        let u = l === null ? null : f(o.pts, l, e.values.length);
        return <section key={e.id} className={`ui-kb__card ui-kb__stat`} aria-label={e.label} style={{
            "--n": t
        }}><header className={`ui-kb__row`}><span className={`ui-kb__pair`}><b>{P(e.kind, s)}</b><span>{e.label}</span></span>{c !== null && <span className={`ui-kb__pair ui-kb__pair--end`}>{c === 0 ? <b>{`0`}</b> : <G1Component up={c > 0} good={e.lowerIsBetter ? c < 0 : c > 0}>{P(e.kind, Math.abs(c))}</G1Component>}<span>{compareLabel}</span></span>}</header><div className={`ui-kb__plot ui-kb__plot--small`} {...V((at)=>setF(at === null ? null : {
                id: e.id,
                at
            }))}><svg key={key} viewBox={`0 0 100 100`} preserveAspectRatio={`none`} aria-hidden={`true`}><path className={`ui-kb__fill`} d={o.area}/><path className={`ui-kb__line`} d={o.line}/></svg>{u && l !== null && <><span className={`ui-kb__rule`} style={{
            left: `${u[0]}%`,
            top: `${u[1]}%`
        }}/><span className={`ui-kb__dot`} style={{
            left: `${u[0]}%`,
            top: `${u[1]}%`
        }}/><span className={`ui-kb__tag`} data-side={u[0] > 62 ? `left` : `right`} style={{
            left: `${u[0]}%`,
            top: `${u[1]}%`
        }}><span>{e.labels[l]}</span><b>{P(e.kind, e.values[l])}</b></span></>}</div><div className={`ui-kb__axis`} aria-hidden={`true`}><span>{e.labels[0]}</span><span>{e.labels[e.labels.length - 1]}</span>{u && l !== null && <span className={`ui-kb__axis-tag`} style={{
            left: `${Math.min(88, Math.max(12, u[0]))}%`
        }}>{e.labels[l]}</span>}</div></section>;
    })}<section className={`ui-kb__card ui-kb__overview`} aria-label={k.overview.title} style={{
        "--n": 3
    }}><header className={`ui-kb__row ui-kb__row--top`}><div><div className={`ui-kb__label`}>{k.overview.title}</div><div className={`ui-kb__figure`}><b>{formatMoney(be)}</b><span className={`ui-kb__vs`}><i data-good={G >= 0 ? `` : undefined}>{G >= 0 ? `+` : `−`}{Math.abs(G).toFixed(1)}{`%`}</i>{` `}{compareLabel}</span></div></div>{segments && O && <NeComponent label={`Segment`} value={O} options={segments} onChange={ge}/>}</header><div className={`ui-kb__plot ui-kb__plot--large`} {...V(setL)}><svg key={pe} viewBox={`0 0 100 100`} preserveAspectRatio={`none`} aria-hidden={`true`}><defs><linearGradient id={`${E}-fade`} x1={`0`} y1={`0`} x2={`0`} y2={`1`}><stop offset={`0`} stopColor={`var(--ui-kb-accent)`} stopOpacity={`0.14`}/><stop offset={`1`} stopColor={`var(--ui-kb-accent)`} stopOpacity={`0`}/></linearGradient></defs>{Array.from({
        length: 19
    }, (e, t)=><path key={t} className={`ui-kb__grid`} d={`M${(t / 18 * 100).toFixed(2)},0V100`}/>)}<path d={W.area} fill={`url(#${E}-fade)`}/><path className={`ui-kb__line ui-kb__line--soft`} d={ye.line}/><path className={`ui-kb__line`} d={W.line}/></svg>{q && J && K !== null && <><span className={`ui-kb__rule`} style={{
        left: `${q[0]}%`,
        top: 0
    }}/><span className={`ui-kb__dot ui-kb__dot--soft`} style={{
        left: `${J[0]}%`,
        top: `${J[1]}%`
    }}/><span className={`ui-kb__dot`} style={{
        left: `${q[0]}%`,
        top: `${q[1]}%`
    }}/><div className={`ui-kb__tip`} data-side={q[0] > 58 ? `left` : `right`} style={{
        left: `${q[0]}%`,
        top: `${Math.min(q[1], J[1])}%`
    }}><div className={`ui-kb__tip-head`}><span>{k.overview.labels[K]}</span><b>{formatMoney(A.current[K] + (A.previous[K] ?? 0))}</b></div><div className={`ui-kb__tip-row`}><i/><span>{currentLabel}</span><b>{formatMoney(A.current[K])}</b></div><div className={`ui-kb__tip-row`} data-soft={``}><i/><span>{previousLabel}</span><b>{formatMoney(A.previous[K] ?? 0)}</b></div></div></>}</div><div className={`ui-kb__axis`} aria-hidden={`true`}><span>{k.overview.labels[0]}</span><span>{k.overview.labels[k.overview.labels.length - 1]}</span></div></section><section className={`ui-kb__card ui-kb__focus`} aria-label={k.focus.title} style={{
        "--n": 4
    }}><header className={`ui-kb__row ui-kb__row--top`}><div className={`ui-kb__product`}><span className={`ui-kb__icon`}>{icon ?? <TeComponent/>}</span><span className={`ui-kb__pair`}><b>{k.focus.title}</b>{k.focus.note && <span>{k.focus.note}</span>}</span></div>{setup && <button type={`button`} className={`ui-kb__setup`} onClick={setup.onClick}><H1Component/>{setup.label}</button>}</header><div className={`ui-kb__label`}>{k.focus.metric}</div><div className={`ui-kb__figure ui-kb__figure--small`}><b>{a(Q === null ? Se : k.focus.values[Q])}{k.focus.unit ? ` ${k.focus.unit}` : ``}</b><span className={`ui-kb__vs`}>{Q === null ? <><G1Component up={Z >= 0} good={Z >= 0}>{Math.abs(Z).toFixed(0)}{`%`}</G1Component>{` `}{compareLabel}</> : k.focus.labels[Q]}</span></div><div className={`ui-kb__plot ui-kb__plot--small`} {...V(setZ)}><svg key={key} viewBox={`0 0 100 100`} preserveAspectRatio={`none`} aria-hidden={`true`}><path className={`ui-kb__fill`} d={X.area}/><path className={`ui-kb__line`} d={X.line}/></svg>{$ && <><span className={`ui-kb__rule`} style={{
        left: `${$[0]}%`,
        top: `${$[1]}%`
    }}/><span className={`ui-kb__dot`} style={{
        left: `${$[0]}%`,
        top: `${$[1]}%`
    }}/></>}</div><div className={`ui-kb__legend`}><span>{previousLabel}</span><b data-soft={``}>{a(j((e)=>e.focus.previous))}</b><span>{currentLabel}</span><b>{a(Se)}</b></div>{action && <button type={`button`} className={`ui-kb__action`} onClick={action.onClick}>{action.label}</button>}</section></div>;
}
var ie = `.ui-kb{--ui-kb-card: #ffffff;--ui-kb-line: #e7e7ea;--ui-kb-ink: #26262b;--ui-kb-text: #55555c;--ui-kb-muted: #96969e;--ui-kb-well: #f6f6f8;--ui-kb-rule: #a4a4ac;--ui-kb-accent: #2f6bff;--ui-kb-soft: #a9c4ff;--ui-kb-good: #12a36b;--ui-kb-bad: #d6453d;--ui-kb-tip: #1c1c20;--ui-kb-focus: rgba(23, 23, 23, 0.22);--ui-kb-ease: cubic-bezier(0.32, 0.72, 0.24, 1);box-sizing: border-box;display: grid;grid-template-columns: repeat(6, minmax(0, 1fr));gap: 8px;width: 100%;min-width: 0;container-type: inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13.5px;line-height: 20px;color: var(--ui-kb-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-kb *, .ui-kb *::before, .ui-kb *::after{box-sizing: border-box}:where(.ui-kb) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-kb button:focus-visible{outline: 2px solid var(--ui-kb-focus);outline-offset: 2px}.ui-kb svg{display: block}.ui-kb b{font-weight: 600;color: var(--ui-kb-ink)}.ui-kb i{font-style: normal}.ui-kb__bar{grid-column: 1 / -1;display: flex;align-items: center;justify-content: flex-end;gap: 12px;min-height: 30px}.ui-kb__heading{flex: 1;min-width: 0;margin: 0;overflow: hidden;font-size: 17px;font-weight: 600;line-height: 24px;letter-spacing: -0.01em;color: var(--ui-kb-ink);white-space: nowrap;text-overflow: ellipsis}.ui-kb__card{grid-column: span 2;display: flex;flex-direction: column;min-width: 0;padding: 16px 16px 14px;border: 1px solid var(--ui-kb-line);border-radius: 12px;background: var(--ui-kb-card);box-shadow: 0 1px 2px rgba(16, 16, 24, 0.04);animation: ui-kb-rise 620ms var(--ui-kb-ease) both;animation-delay: calc(var(--n) * 60ms)}.ui-kb__overview{grid-column: span 4}.ui-kb__focus{padding-bottom: 16px}.ui-kb__row{display: flex;align-items: flex-start;justify-content: space-between;gap: 12px;min-width: 0}.ui-kb__pair{display: grid;min-width: 0;font-variant-numeric: tabular-nums}.ui-kb__pair > *{overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-kb__pair b{font-size: 14px}.ui-kb__pair span{color: var(--ui-kb-muted)}.ui-kb__pair--end{justify-items: end;flex: none;text-align: right}.ui-kb__change{display: inline-flex;align-items: center;gap: 5px;font-size: 14px;font-weight: 600;color: var(--ui-kb-bad);font-variant-numeric: tabular-nums}.ui-kb__change[data-good]{color: var(--ui-kb-good)}.ui-kb__plot{position: relative;margin-top: 14px;border-bottom: 1px solid var(--ui-kb-line);cursor: crosshair;touch-action: pan-y}.ui-kb__plot--small{height: 64px}.ui-kb__plot--large{flex: 1;min-height: 190px;margin-top: 16px;border-bottom: 0}.ui-kb__plot svg{position: absolute;inset: 0;width: 100%;height: 100%;overflow: visible;animation: ui-kb-draw 1100ms var(--ui-kb-ease) both;animation-delay: calc(120ms + var(--n) * 60ms)}.ui-kb__line{fill: none;stroke: var(--ui-kb-accent);stroke-width: 1.5;stroke-linejoin: miter;stroke-linecap: round;vector-effect: non-scaling-stroke}.ui-kb__line--soft{stroke: var(--ui-kb-soft)}.ui-kb__fill{fill: var(--ui-kb-well)}.ui-kb__grid{fill: none;stroke: var(--ui-kb-line);stroke-width: 1;stroke-dasharray: 4 4;vector-effect: non-scaling-stroke}.ui-kb__axis{position: relative;display: flex;justify-content: space-between;height: 16px;margin-top: 8px;font-size: 12px;line-height: 16px;color: var(--ui-kb-muted);white-space: nowrap}.ui-kb__rule{position: absolute;bottom: 0;width: 0;margin-left: -0.5px;border-left: 1px dashed var(--ui-kb-rule);pointer-events: none}.ui-kb__dot{position: absolute;z-index: 1;width: 8px;height: 8px;margin: -4px 0 0 -4px;border: 1.5px solid var(--ui-kb-accent);border-radius: 50%;background: var(--ui-kb-card);pointer-events: none}.ui-kb__dot--soft{border-color: var(--ui-kb-soft)}.ui-kb__tag{position: absolute;z-index: 2;display: inline-flex;gap: 12px;height: 24px;padding: 0 8px;border: 1px solid var(--ui-kb-line);border-radius: 6px;background: var(--ui-kb-card);box-shadow: 0 2px 6px rgba(16, 16, 24, 0.06);font-size: 12px;line-height: 22px;color: var(--ui-kb-text);white-space: nowrap;pointer-events: none;transform: translate(10px, -130%);font-variant-numeric: tabular-nums;animation: ui-kb-in 160ms ease both}.ui-kb__tag[data-side="left"]{transform: translate(calc(-100% - 10px), -130%)}.ui-kb__tag b{font-weight: 500;color: var(--ui-kb-accent)}.ui-kb__axis-tag{position: absolute;top: -4px;height: 22px;padding: 0 7px;border: 1px solid var(--ui-kb-line);border-radius: 6px;background: var(--ui-kb-card);line-height: 20px;color: var(--ui-kb-ink);transform: translateX(-50%)}.ui-kb__row--top{padding-bottom: 14px;border-bottom: 1px solid var(--ui-kb-line)}.ui-kb__label{font-size: 13px;color: var(--ui-kb-text)}.ui-kb__figure{display: flex;flex-wrap: wrap;align-items: baseline;gap: 2px 10px;margin-top: 4px;font-variant-numeric: tabular-nums}.ui-kb__figure b{font-size: 24px;line-height: 30px;letter-spacing: -0.02em}.ui-kb__figure--small b{font-size: 19px;line-height: 26px}.ui-kb__vs{display: inline-flex;align-items: baseline;gap: 5px;font-size: 13px;color: var(--ui-kb-muted);white-space: nowrap}.ui-kb__vs i{font-weight: 600;color: var(--ui-kb-bad)}.ui-kb__vs i[data-good]{color: var(--ui-kb-good)}.ui-kb__vs .ui-kb__change{font-size: 13px}.ui-kb__pick{position: relative;flex: none}.ui-kb__pick-button{display: inline-flex;align-items: center;gap: 8px;height: 30px;padding: 0 9px 0 11px;border: 1px solid var(--ui-kb-line);border-radius: 8px;background: var(--ui-kb-card);box-shadow: 0 1px 1px rgba(16, 16, 24, 0.04);font-size: 12.5px;color: var(--ui-kb-ink);white-space: nowrap;transition: border-color 160ms ease, background-color 160ms ease}.ui-kb__pick-button:hover, .ui-kb__pick[data-open] .ui-kb__pick-button{border-color: #cfcfd6}.ui-kb__pick[data-open] .ui-kb__pick-button{background: var(--ui-kb-well)}.ui-kb__pick-button svg{color: var(--ui-kb-muted);transition: transform 240ms var(--ui-kb-ease)}.ui-kb__pick[data-open] .ui-kb__pick-button svg{transform: rotate(180deg)}.ui-kb__menu{position: absolute;top: calc(100% + 6px);right: 0;z-index: 10;min-width: max(100%, 148px);margin: 0;padding: 4px;border: 1px solid var(--ui-kb-line);border-radius: 10px;background: var(--ui-kb-card);box-shadow: 0 10px 28px rgba(16, 16, 24, 0.1), 0 2px 6px rgba(16, 16, 24, 0.05);list-style: none;transform-origin: 100% 0;animation: ui-kb-menu 200ms var(--ui-kb-ease) both}.ui-kb__option{display: flex;align-items: center;justify-content: space-between;gap: 14px;height: 30px;padding: 0 8px 0 9px;border-radius: 7px;font-size: 12.5px;color: var(--ui-kb-text);white-space: nowrap;cursor: pointer}.ui-kb__option[data-active]{background: var(--ui-kb-well);color: var(--ui-kb-ink)}.ui-kb__option[aria-selected="true"]{font-weight: 500;color: var(--ui-kb-ink)}.ui-kb__option svg{color: var(--ui-kb-accent)}.ui-kb__tip{position: absolute;z-index: 3;min-width: 168px;padding: 9px 11px 10px;border-radius: 8px;background: var(--ui-kb-tip);box-shadow: 0 8px 24px rgba(16, 16, 24, 0.18);font-size: 12.5px;line-height: 20px;color: rgba(255, 255, 255, 0.72);pointer-events: none;transform: translate(14px, calc(-100% - 12px));font-variant-numeric: tabular-nums;animation: ui-kb-in 160ms ease both}.ui-kb__tip[data-side="left"]{transform: translate(calc(-100% - 14px), calc(-100% - 12px))}.ui-kb__tip b{font-weight: 500;color: #fff}.ui-kb__tip-head{display: flex;justify-content: space-between;gap: 16px;margin-bottom: 6px;color: #fff}.ui-kb__tip-head b{color: #4ade9b}.ui-kb__tip-row{display: flex;align-items: center;gap: 7px}.ui-kb__tip-row span{flex: 1}.ui-kb__tip-row i{width: 7px;height: 7px;border: 1.5px solid #7ea2ff;border-radius: 50%}.ui-kb__tip-row[data-soft] i{border-color: #5a6a96}.ui-kb__focus .ui-kb__row--top{align-items: center;min-height: 69px;margin-bottom: 16px}.ui-kb__focus .ui-kb__plot--small{flex: 1;min-height: 64px;margin-top: 16px}.ui-kb__product{display: flex;align-items: center;gap: 12px;min-width: 0}.ui-kb__product b{font-size: 14.5px;font-weight: 500}.ui-kb__icon{display: grid;flex: none;place-items: center;width: 36px;height: 36px;border: 1px solid var(--ui-kb-line);border-radius: 9px;box-shadow: 0 1px 1px rgba(16, 16, 24, 0.04);color: var(--ui-kb-text)}.ui-kb__focus .ui-kb__label{font-size: 12.5px;color: var(--ui-kb-muted)}.ui-kb__legend{display: flex;flex-wrap: wrap;align-items: baseline;gap: 2px 8px;margin-top: 12px;font-size: 12.5px;color: var(--ui-kb-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-kb__legend b{margin-right: 6px;font-weight: 500;color: var(--ui-kb-accent)}.ui-kb__legend b[data-soft]{color: var(--ui-kb-soft)}.ui-kb__setup{display: inline-flex;flex: none;align-items: center;gap: 6px;height: 30px;padding: 0 11px 0 9px;border: 1px solid var(--ui-kb-line);border-radius: 8px;background: var(--ui-kb-card);box-shadow: 0 1px 1px rgba(16, 16, 24, 0.04);font-size: 12.5px;color: var(--ui-kb-ink);white-space: nowrap;transition: border-color 160ms ease, background-color 160ms ease}.ui-kb__setup:hover{border-color: #cfcfd6;background: var(--ui-kb-well)}.ui-kb__setup svg{color: var(--ui-kb-muted)}.ui-kb__action{height: 34px;margin-top: auto;border: 1px solid var(--ui-kb-line);border-radius: 8px;background: var(--ui-kb-card);box-shadow: 0 1px 2px rgba(16, 16, 24, 0.06);font-size: 13px;font-weight: 500;color: var(--ui-kb-ink);transition: background-color 160ms ease}.ui-kb__legend + .ui-kb__action{margin-top: 16px}.ui-kb__action:hover{background: var(--ui-kb-well)}@keyframes ui-kb-rise{from{opacity: 0;transform: translateY(8px)}}@keyframes ui-kb-draw{from{clip-path: inset(0 100% 0 0)}to{clip-path: inset(-8px -8px -8px -8px)}}@keyframes ui-kb-in{from{opacity: 0}}@keyframes ui-kb-menu{from{opacity: 0;transform: translateY(-4px) scale(0.97)}}@container (max-width: 820px){.ui-kb__overview, .ui-kb__focus{grid-column: span 6}.ui-kb__stat .ui-kb__row{flex-direction: column;gap: 2px}.ui-kb__stat .ui-kb__pair--end{justify-items: start;text-align: left}.ui-kb__stat .ui-kb__change{font-size: 12.5px}.ui-kb__stat .ui-kb__pair--end > span:last-child{display: none}}@container (max-width: 600px){.ui-kb{gap: 8px}.ui-kb__card{grid-column: span 6}.ui-kb__stat .ui-kb__row{flex-direction: row;gap: 12px}.ui-kb__stat .ui-kb__pair--end{justify-items: end;text-align: right}.ui-kb__stat .ui-kb__change{font-size: 14px}.ui-kb__stat .ui-kb__pair--end > span:last-child{display: block}.ui-kb__row--top{flex-wrap: wrap}.ui-kb__plot--large{min-height: 160px}}@media (pointer: coarse){.ui-kb__pick-button, .ui-kb__setup{height: 36px}.ui-kb__option{height: 38px}.ui-kb__action{height: 40px}}@media (prefers-reduced-motion: reduce){.ui-kb *, .ui-kb *::before, .ui-kb *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-kb{--ui-kb-card: #19191b;--ui-kb-line: #2a2a2e;--ui-kb-ink: #ededed;--ui-kb-text: #b9b9bf;--ui-kb-muted: #84848c;--ui-kb-well: #202024;--ui-kb-rule: #6a6a72;--ui-kb-accent: #5b8cff;--ui-kb-soft: #37508f;--ui-kb-good: #4ade9b;--ui-kb-bad: #ff8f86;--ui-kb-tip: #2c2c32;--ui-kb-focus: rgba(255, 255, 255, 0.3)}:where(.dark, [data-theme="dark"]) .ui-kb__pick-button:hover, :where(.dark, [data-theme="dark"]) .ui-kb__pick[data-open] .ui-kb__pick-button{border-color: #45454c}:where(.dark, [data-theme="dark"]) .ui-kb__menu{box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5)}`;
const width = 960;
const ranges = [
    {
        id: `7d`,
        label: `Last 7 days`
    },
    {
        id: `30d`,
        label: `Last 30 days`
    },
    {
        id: `90d`,
        label: `Last 90 days`
    }
];
const segments = [
    {
        id: `all`,
        label: `All items`
    },
    {
        id: `pro`,
        label: `Pro`
    },
    {
        id: `team`,
        label: `Team`
    }
];
const b = (e)=>{
    let t = e;
    return ()=>{
        t = (t * 9301 + 49297) % 233280;
        return t / 233280;
    };
};
const x = [
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`
];
const S = new Date(2026, 9, 12);
const ae = (e, t)=>Array.from({
        length: e
    }, (n, r)=>{
        if (r === e - 1) {
            return `Today`;
        }
        let i = new Date(S.getTime() - (e - 1 - r) * t * 86400000);
        return `${i.getDate()} ${x[i.getMonth()]}`;
    });
const C = (e, t, n, r, i)=>{
    let a = b(i);
    let o = 0;
    return Array.from({
        length: e
    }, (i, s)=>{
        let c = a();
        if (c > 0.22) {
            o = o * 0.45 + (a() - 0.5) * r * 0.5;
        }
        let l = c > 0.92 ? r * 0.22 : c < 0.06 ? -r * 0.18 : 0;
        return Math.max(0, Math.round(t * (1 + n * s / e + o + l)));
    });
};
function w(e, t, n, r) {
    let labels = ae(e, t);
    let a = C(e, 156 * t * n, 0.5, 0.5, r);
    let o = C(e, 24 * t * n, 0.45, 0.5, r + 4);
    return {
        stats: [
            {
                id: `revenue`,
                label: `Total revenue`,
                kind: `money`,
                labels,
                values: a,
                previous: Math.round(a.reduce((acc, item)=>acc + item, 0) * 0.83)
            },
            {
                id: `emails`,
                label: `Emails sent`,
                kind: `count`,
                labels,
                values: C(e, 1620 * t * n, 0.1, 0.7, r + 2),
                previous: Math.round(1540 * t * e * n)
            },
            {
                id: `refunds`,
                label: `Refunds`,
                kind: `count`,
                labels,
                values: C(e, Math.max(3, 4 * t) * n, -0.3, 1.5, r + 3),
                previous: Math.round(Math.max(3, 4 * t) * 1.2 * e * n),
                lowerIsBetter: true
            }
        ],
        overview: {
            title: `Sales overview`,
            labels,
            current: C(e, 122 * t * n, 0.9, 0.42, r + 1),
            previous: C(e, 98 * t * n, 0.45, 0.3, r + 7)
        },
        focus: {
            title: `Pro license`,
            note: `One-time`,
            metric: `Licenses sold`,
            unit: `licenses`,
            labels,
            values: o,
            previous: Math.round(o.reduce((acc, item)=>acc + item, 0) * 0.89)
        }
    };
}
function T(e, t, n) {
    let r = w(e, t, 1, n);
    let overview = w(e, t, 0.64, n + 1).overview;
    let overview_1 = w(e, t, 0.36, n + 2).overview;
    return {
        ...r,
        overview: {
            ...r.overview,
            segments: {
                pro: {
                    current: overview.current,
                    previous: overview.previous
                },
                team: {
                    current: overview_1.current,
                    previous: overview_1.previous
                }
            }
        }
    };
}
const data = {
    "7d": T(21, 1 / 3, 11),
    "30d": T(30, 1, 23),
    "90d": T(45, 2, 37)
};
function EComponent() {
    let eRef = n.useRef(null);
    let [t, setT] = n.useState(null);
    let [range, setRange] = n.useState(`30d`);
    let sRef = n.useRef(false);
    n.useLayoutEffect(()=>{
        let eRef_current = eRef.current;
        let n = eRef_current?.closest(`.card__preview`);
        let r = n ?? eRef_current?.closest(`.stage`);
        if (!eRef_current || !r) {
            return;
        }
        let a = ()=>{
            let r_clientWidth = r.clientWidth;
            if (n) {
                return setT({
                    scale: (r_clientWidth - 48) / width,
                    card: true
                });
            }
            if (r_clientWidth < 760) {
                return setT(null);
            }
            setT({
                scale: Math.min(0.82, (r_clientWidth - 168) / width),
                card: false
            });
        };
        a();
        let o = new ResizeObserver(a);
        o.observe(r);
        return ()=>o.disconnect();
    }, []);
    n.useEffect(()=>{
        let e = window.setInterval(()=>{
            if (!sRef.current) {
                setRange((e)=>ranges[(ranges.findIndex((t)=>t.id === e) + 1) % ranges.length].id);
            }
        }, 3600);
        return ()=>window.clearInterval(e);
    }, []);
    let c = ()=>sRef.current = true;
    return <div ref={eRef} className={`kb-demo`} data-fit={t ? t.card ? `card` : `stage` : undefined} onPointerEnter={c} onPointerDownCapture={c} onKeyDownCapture={c} onFocusCapture={c}><div className={`kb-demo__frame`} style={t ? t.card ? {
        width,
        transform: `scale(${t.scale})`
    } : {
        width,
        zoom: t.scale
    } : undefined}><ReComponent data={data} ranges={ranges} range={range} onRangeChange={setRange} segments={segments} compareLabel={`vs. last period`} title={`Dashboard`} setup={{
        label: `Set up`,
        onClick: ()=>{}
    }} action={{
        label: `See full analytics`,
        onClick: ()=>{}
    }}/></div></div>;
}
export { EComponent as default };
