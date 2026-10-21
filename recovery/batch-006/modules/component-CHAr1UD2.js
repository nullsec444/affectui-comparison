import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = [
    `#2f6bff`,
    `#8b5cf6`,
    `#ec4899`,
    `#7aa2ff`,
    `#c4b5fd`,
    `#a3a3a3`,
    `#f9a8d4`
];
function a(e) {
    if (e <= 0) {
        return 5;
    }
    let t = e / 5;
    let n = 10 ** Math.floor(Math.log10(t));
    return [
        1,
        2,
        2.5,
        5,
        10
    ].find((e)=>e * n >= t) * n * 5;
}
const o = (e)=>{
    if (Number.isInteger(e)) {
        return e.toLocaleString(`en-US`);
    }
    return e.toFixed(1);
};
function SComponent({ records, dimensions, measures, title = `Workload`, defaultMeasure, defaultSlice, defaultSegment, className }) {
    let [g, setG] = n.useState(defaultMeasure ?? measures[0].key);
    let [v, setV] = n.useState(defaultSlice ?? dimensions[0].key);
    let [b, setB] = n.useState(defaultSegment ?? dimensions[1]?.key ?? `none`);
    let [S, setS] = n.useState(new Set);
    let [w, setW] = n.useState(null);
    let ERef = n.useRef(null);
    let ref = useF(ERef);
    let O = measures.find((e)=>e.key === g) ?? measures[0];
    let k = dimensions.find((e)=>e.key === v) ?? dimensions[0];
    let A = b === `none` ? null : dimensions.find((e)=>e.key === b) ?? null;
    let j = A ? A.values : [
        `All`
    ];
    let M = (e, t)=>A?.colors?.[e] ?? (A ? i[t % i.length] : `#2f6bff`);
    n.useEffect(()=>setS(new Set), [
        b
    ]);
    let N = n.useMemo(()=>k.values.map((t)=>{
            let cells = {};
            for (let e of j){
                cells[e] = 0;
            }
            for (let r of records){
                if (r[k.key] !== t) {
                    continue;
                }
                let e = A ? String(r[A.key]) : `All`;
                if (e in cells) {
                    cells[e] += O.field ? Number(r[O.field]) || 0 : 1;
                }
            }
            return {
                value: t,
                cells,
                total: j.reduce((acc, item)=>acc + (S.has(item) ? 0 : cells[item]), 0)
            };
        }), [
        records,
        k,
        A,
        j,
        O,
        S
    ]);
    let P = N.reduce((acc, item)=>acc + item.total, 0);
    let F = a(Math.max(0, ...N.map((e)=>e.total)));
    let I = [
        5,
        4,
        3,
        2,
        1,
        0
    ].map((e)=>F / 5 * e);
    let L = N.find((e)=>e.value === w) ?? null;
    let R = L ? N.indexOf(L) : -1;
    let z = (e)=>setS((t)=>{
            let n = new Set(t);
            if (n.has(e)) {
                n.delete(e);
            } else if (n.size < j.length - 1) {
                n.add(e);
            }
            return n;
        });
    let options = dimensions.map((e)=>({
            value: e.key,
            label: e.label
        }));
    return <><style href={`ui-breakdown-chart`} precedence={`default`}>{p}</style><section className={[
        `ui-bc`,
        className
    ].filter(Boolean).join(` `)} aria-label={title}><header className={`ui-bc__head`}><span className={`ui-bc__title`}>{title}</span><span className={`ui-bc__total`}><strong>{o(P)}</strong>{` `}{O.unit}</span></header><div className={`ui-bc__card`}><div className={`ui-bc__controls`}><C1Component label={`Measure`} value={g} onChange={setG} options={measures.map((e)=>({
            value: e.key,
            label: e.label
        }))}/><C1Component label={`Slice`} value={v} onChange={(e)=>{
        setV(e);
        if (e === b) {
            setB(`none`);
        }
    }} options={options}/><C1Component label={`Segment`} value={b} onChange={setB} options={[
        {
            value: `none`,
            label: `None`
        },
        ...options.filter((e)=>e.value !== v)
    ]}/></div><div className={`ui-bc__chart`} onPointerLeave={()=>setW(null)}><div className={`ui-bc__plot`}>{I.map((e)=><span key={e} className={`ui-bc__grid`} style={{
            bottom: `${e / F * 100}%`
        }} data-zero={e === 0 || undefined}><span className={`ui-bc__tick`}>{o(e)}</span></span>)}<div className={`ui-bc__bars`} style={{
        gridTemplateColumns: `repeat(${N.length}, minmax(0, 1fr))`
    }}>{N.map((e)=><button key={e.value} type={`button`} className={`ui-bc__col`} data-dim={w && w !== e.value || undefined} data-active={w === e.value || undefined} aria-label={`${e.value}: ${o(e.total)} ${O.unit}`} onPointerEnter={()=>setW(e.value)} onFocus={()=>setW(e.value)} onBlur={()=>setW(null)}><span className={`ui-bc__rest`} style={{
            bottom: `${e.total / F * 100}%`
        }}/><span className={`ui-bc__bar`} style={{
            height: `${e.total / F * 100}%`
        }}>{j.map((t, n)=>{
            if (S.has(t) || !e.cells[t]) {
                return null;
            }
            return <span key={t} className={`ui-bc__seg`} style={{
                flexGrow: e.cells[t],
                background: M(t, n)
            }}/>;
        })}</span></button>)}</div>{L && <div className={`ui-bc__tooltip`} role={`status`} style={{
        left: `${(R + 0.5) / N.length * 100}%`
    }} data-side={(R + 0.5) / N.length > 0.5 ? `left` : `right`}><p className={`ui-bc__tip-head`}><span className={`ui-bc__tip-label`}>{k.icons?.[L.value]}{L.value}</span><strong>{o(L.total)}</strong></p>{A && <ul>{j.map((seg, i_1)=>({
            seg,
            i: i_1,
            v: L.cells[seg]
        })).filter((e)=>e.v && !S.has(e.seg)).sort((e, t)=>t.v - e.v).map((e)=><li key={e.seg}><span className={`ui-bc__swatch`} style={{
            background: M(e.seg, e.i)
        }}/><span className={`ui-bc__tip-seg`}>{e.seg}</span><span>{o(e.v)}</span></li>)}</ul>}</div>}</div><div className={`ui-bc__xaxis`} style={{
        gridTemplateColumns: `repeat(${N.length}, minmax(0, 1fr))`
    }}>{N.map((e)=><span key={e.value} className={`ui-bc__xlabel`} data-active={w === e.value || undefined} title={e.value}>{w === e.value ? <span className={`ui-bc__pill`}>{k.icons?.[e.value]}{e.value}</span> : k.icons?.[e.value] ?? <span className={`ui-bc__xtext`}>{e.value}</span>}</span>)}</div></div><div className={`ui-bc__morph`} ref={ref}><div className={`ui-bc__table-wrap`} ref={ERef}><table className={`ui-bc__table`}><thead><tr><th scope={`col`}>{k.label}</th><th scope={`col`} data-num>{O.label}</th>{A && j.map((e, t)=><th key={e} scope={`col`} data-num data-hidden={S.has(e) || undefined}><span className={`ui-bc__th-seg`}><span className={`ui-bc__swatch`} style={{
            background: M(e, t)
        }}/>{e}</span></th>)}</tr></thead><tbody>{N.map((e)=><tr key={e.value} data-active={w === e.value || undefined} onPointerEnter={()=>setW(e.value)} onPointerLeave={()=>setW(null)}><th scope={`row`}><span className={`ui-bc__row-label`}>{k.icons?.[e.value]}{e.value}</span></th><td data-num>{o(e.total)}</td>{A && j.map((t)=><td key={t} data-num data-hidden={S.has(t) || undefined}>{o(e.cells[t])}</td>)}</tr>)}</tbody></table></div></div></div><footer className={`ui-bc__foot`}>{A ? <div className={`ui-bc__legend`} role={`group`} aria-label={`${A.label} – click to show or hide`}>{j.map((e, t)=><button key={e} type={`button`} className={`ui-bc__chip`} aria-pressed={!S.has(e)} onClick={()=>z(e)}><span className={`ui-bc__swatch`} style={{
            background: M(e, t)
        }}/>{e}</button>)}</div> : <span className={`ui-bc__hint`}>{`Pick a segment to split the bars`}</span>}{S.size > 0 && <button type={`button`} className={`ui-bc__reset`} onClick={()=>setS(new Set)}>{`Show all`}</button>}</footer></section></>;
}
function C1Component({ label, value, options, onChange }) {
    let [o, setO] = n.useState(false);
    let cRef = n.useRef(null);
    let id = n.useId();
    n.useEffect(()=>{
        if (!o) {
            return;
        }
        let e = (e)=>!cRef.current?.contains(e.target) && setO(false);
        let t = (e)=>e.key === `Escape` && setO(false);
        window.addEventListener(`pointerdown`, e);
        window.addEventListener(`keydown`, t);
        return ()=>{
            window.removeEventListener(`pointerdown`, e);
            window.removeEventListener(`keydown`, t);
        };
    }, [
        o
    ]);
    let f = options.find((e)=>e.value === value)?.label ?? value;
    return <div className={`ui-bc__select`} ref={cRef}><span className={`ui-bc__select-label`} id={id}>{label}</span><button type={`button`} className={`ui-bc__select-btn`} aria-haspopup={`listbox`} aria-expanded={o} aria-labelledby={id} onClick={()=>setO((e)=>!e)}><span>{f}</span><L1Component/></button>{o && <div className={`ui-bc__menu`} role={`listbox`} aria-labelledby={id}>{options.map((e)=><button key={e.value} type={`button`} role={`option`} aria-selected={e.value === value} className={`ui-bc__option`} autoFocus={e.value === value} onClick={()=>{
            onChange(e.value);
            setO(false);
        }} onKeyDown={(e)=>{
            let t = [
                ...e.currentTarget.parentElement?.querySelectorAll(`button`) ?? []
            ];
            let n = t.indexOf(e.currentTarget);
            if (e.key === `ArrowDown`) {
                t[Math.min(t.length - 1, n + 1)]?.focus();
            }
            if (e.key === `ArrowUp`) {
                t[Math.max(0, n - 1)]?.focus();
            }
            if (e.key.startsWith(`Arrow`)) {
                e.preventDefault();
            }
        }}>{e.label}{e.value === value && <UComponent/>}</button>)}</div>}</div>;
}
var L1Component = ()=><svg viewBox={`0 0 16 16`} width={`14`} height={`14`} fill={`none`} stroke={`currentColor`} strokeWidth={`1.5`} strokeLinecap={`round`} strokeLinejoin={`round`} aria-hidden={`true`}><path d={`m4.5 6.25 3.5 3.5 3.5-3.5`}/></svg>;
var UComponent = ()=><svg viewBox={`0 0 16 16`} width={`14`} height={`14`} fill={`none`} stroke={`currentColor`} strokeWidth={`1.5`} strokeLinecap={`round`} strokeLinejoin={`round`} aria-hidden={`true`}><path d={`m3.5 8.5 3 3 6-7`}/></svg>;
const DComponent = ({ kind, color = `currentColor` })=><svg viewBox={`0 0 16 16`} width={`15`} height={`15`} fill={`none`} stroke={color} strokeWidth={`1.4`} strokeLinecap={`round`} strokeLinejoin={`round`} aria-hidden={`true`}>{kind === `backlog` && <path d={`M2.5 9.5 4 3.5h8l1.5 6M2.5 9.5v3h11v-3M2.5 9.5H6l.8 1.5h2.4l.8-1.5h3.5`}/>}{kind === `todo` && <rect x={`3`} y={`3`} width={`10`} height={`10`} rx={`2.5`}/>}{kind === `progress` && <><circle cx={`8`} cy={`8`} r={`5.5`}/><path d={`M8 5v3l2 1.5`}/></>}{kind === `review` && <><path d={`M1.8 8S4 3.8 8 3.8 14.2 8 14.2 8 12 12.2 8 12.2 1.8 8 1.8 8Z`}/><circle cx={`8`} cy={`8`} r={`1.8`}/></>}{kind === `done` && <><rect x={`2.5`} y={`2.5`} width={`11`} height={`11`} rx={`3`} fill={color} stroke={`none`}/><path d={`m5.5 8.2 1.8 1.8 3.3-3.6`} stroke={`#fff`} strokeWidth={`1.5`}/></>}{kind === `canceled` && <><circle cx={`8`} cy={`8`} r={`5.5`}/><path d={`m4.2 11.8 7.6-7.6`}/></>}</svg>;
function useF(ERef) {
    let tRef = n.useRef(null);
    n.useLayoutEffect(()=>{
        let tRef_current = tRef.current;
        let e_current = ERef.current;
        if (!tRef_current || !e_current) {
            return;
        }
        let i = ()=>{
            tRef_current.style.height = `${e_current.offsetHeight}px`;
        };
        i();
        let a = new ResizeObserver(i);
        a.observe(e_current);
        let o = requestAnimationFrame(()=>tRef_current.setAttribute(`data-smooth`, ``));
        return ()=>{
            a.disconnect();
            cancelAnimationFrame(o);
        };
    }, [
        ERef
    ]);
    return tRef;
}
var p = `.ui-bc{--ui-bc-tray: #f0f0f0;--ui-bc-card: #ffffff;--ui-bc-line: #ececec;--ui-bc-grid: #ebebeb;--ui-bc-ink: #171717;--ui-bc-text: #404040;--ui-bc-muted: #8f8f8f;--ui-bc-accent: #2f6bff;--ui-bc-accent-ink: #2f6bff;--ui-bc-border: #e5e5e5;--ui-bc-surface-hover: #f8f8f8;--ui-bc-option-hover: #f5f5f5;--ui-bc-zero: #dcdcdc;--ui-bc-rest: #f2f2f2;--ui-bc-head-bg: #fcfcfc;--ui-bc-row-active: #f6f6f6;--ui-bc-wash: rgba(0, 0, 0, 0.05);--ui-bc-accent-wash: rgba(47, 107, 255, 0.08);--ui-bc-card-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);--ui-bc-btn-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);--ui-bc-pop-shadow: 0 10px 28px -8px rgba(0, 0, 0, 0.18);--ui-bc-tip-shadow: 0 10px 26px -8px rgba(0, 0, 0, 0.18);--ui-bc-pill-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);--ui-bc-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;width: 100%;max-width: 560px;background: var(--ui-bc-tray);padding: 6px;border-radius: 22px;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-bc-ink);-webkit-font-smoothing: antialiased;font-variant-numeric: tabular-nums}.ui-bc *, .ui-bc *::before, .ui-bc *::after{box-sizing: border-box}.ui-bc button{margin: 0;font: inherit;color: inherit;cursor: pointer}.ui-bc button:focus-visible{outline: 2px solid var(--ui-bc-accent);outline-offset: 2px}.ui-bc__head{display: flex;align-items: baseline;justify-content: space-between;gap: 12px;padding: 11px 18px 10px;font-size: 14px;line-height: 20px}.ui-bc__title{font-weight: 500}.ui-bc__total{color: var(--ui-bc-muted)}.ui-bc__total strong{font-size: 15px;font-weight: 600;color: var(--ui-bc-ink)}.ui-bc__card{overflow: hidden;background: var(--ui-bc-card);border: 1px solid var(--ui-bc-border);border-radius: 16px;box-shadow: var(--ui-bc-card-shadow)}.ui-bc__controls{display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: 10px;padding: 16px 18px 4px}.ui-bc__select{position: relative;display: grid;grid-template-columns: minmax(0, 1fr);gap: 6px;min-width: 0}.ui-bc__select-label{font-size: 12px;line-height: 16px;color: var(--ui-bc-muted)}.ui-bc__select-btn{display: flex;align-items: center;justify-content: space-between;gap: 8px;height: 34px;padding: 0 10px 0 12px;border: 0;border-radius: 10px;background: var(--ui-bc-card);box-shadow: 0 0 0 1px var(--ui-bc-border), var(--ui-bc-btn-shadow);font-size: 13px !important;font-weight: 500;text-align: left;transition: background-color 140ms ease}.ui-bc__select-btn span{overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-bc__select-btn svg{flex: none;color: var(--ui-bc-muted);transition: transform 200ms var(--ui-bc-ease)}.ui-bc__select-btn[aria-expanded="true"] svg{transform: rotate(180deg)}.ui-bc__select-btn:hover{background: var(--ui-bc-surface-hover)}.ui-bc__menu{position: absolute;top: calc(100% + 6px);left: 0;right: 0;z-index: 6;display: grid;gap: 2px;padding: 4px;border-radius: 12px;background: var(--ui-bc-card);box-shadow: 0 0 0 1px var(--ui-bc-border), var(--ui-bc-pop-shadow);animation: ui-bc-drop 180ms var(--ui-bc-ease)}.ui-bc__option{display: flex;align-items: center;justify-content: space-between;height: 30px;padding: 0 10px;border: 0;border-radius: 8px;background: transparent;font-size: 13px !important;text-align: left}.ui-bc__option:hover, .ui-bc__option:focus-visible{background: var(--ui-bc-option-hover);outline: none}.ui-bc__option[aria-selected="true"]{color: var(--ui-bc-accent-ink) !important;font-weight: 500}.ui-bc__chart{padding: 22px 18px 12px}.ui-bc__plot{position: relative;height: 200px;margin-right: 30px}.ui-bc__grid{position: absolute;left: 0;right: 0;height: 0;border-top: 1px dashed var(--ui-bc-grid)}.ui-bc__grid[data-zero]{border-top-style: solid;border-color: var(--ui-bc-zero)}.ui-bc__tick{position: absolute;right: -30px;top: -8px;width: 26px;font-size: 11px;line-height: 16px;text-align: right;color: var(--ui-bc-muted)}.ui-bc__bars{position: absolute;inset: 0;display: grid;gap: 4px}.ui-bc__col{position: relative;display: flex;align-items: flex-end;justify-content: center;height: 100%;padding: 0;border: 0;background: transparent;transition: opacity 200ms ease}.ui-bc__col:focus-visible{outline-offset: 4px}.ui-bc__col[data-dim]{opacity: 0.38}.ui-bc__rest{position: absolute;top: 0;left: 50%;width: 10px;margin-left: -5px;background: var(--ui-bc-rest);opacity: 0;transition: opacity 180ms ease, bottom 520ms var(--ui-bc-ease)}.ui-bc__col[data-active] .ui-bc__rest{opacity: 1}.ui-bc__bar{position: relative;display: flex;flex-direction: column-reverse;gap: 1px;width: 10px;min-height: 0;overflow: hidden;transition: height 520ms var(--ui-bc-ease)}.ui-bc__seg{flex-basis: 0;min-height: 2px;transition: flex-grow 520ms var(--ui-bc-ease), background-color 300ms ease}.ui-bc__tooltip{position: absolute;z-index: 4;min-width: 150px;padding: 9px 11px 10px;border-radius: 12px;background: var(--ui-bc-card);box-shadow: 0 0 0 1px var(--ui-bc-border), var(--ui-bc-tip-shadow);top: 0;pointer-events: none;transition: left 200ms var(--ui-bc-ease);animation: ui-bc-pop 160ms var(--ui-bc-ease)}.ui-bc__tooltip[data-side="right"]{transform: translateX(22px)}.ui-bc__tooltip[data-side="left"]{transform: translateX(calc(-100% - 22px))}.ui-bc__tip-head{display: flex;align-items: center;justify-content: space-between;gap: 14px;margin: 0;font-size: 13px;font-weight: 500;line-height: 20px}.ui-bc__tip-label{display: inline-flex;align-items: center;gap: 6px;white-space: nowrap}.ui-bc__tooltip ul{display: grid;gap: 2px;margin: 6px 0 0;padding: 6px 0 0;border-top: 1px solid var(--ui-bc-line);list-style: none}.ui-bc__tooltip li{display: flex;align-items: center;gap: 7px;font-size: 12px;line-height: 18px;color: var(--ui-bc-text)}.ui-bc__tip-seg{flex: 1;white-space: nowrap}.ui-bc__swatch{flex: none;width: 8px;height: 8px;border-radius: 2px}.ui-bc__xaxis{display: grid;gap: 4px;margin: 8px 30px 0 0}.ui-bc__xlabel{display: grid;place-items: center;height: 24px;min-width: 0;color: var(--ui-bc-muted)}.ui-bc__xlabel{position: relative;overflow: visible}.ui-bc__pill{position: absolute;top: 50%;left: 50%;z-index: 2;display: inline-flex;align-items: center;gap: 6px;height: 24px;padding: 0 10px 0 7px;border-radius: 999px;background: var(--ui-bc-card);box-shadow: 0 0 0 1px var(--ui-bc-border), var(--ui-bc-pill-shadow);font-size: 12px;font-weight: 500;white-space: nowrap;color: var(--ui-bc-ink);transform: translate(-50%, -50%);animation: ui-bc-pill 200ms var(--ui-bc-ease)}.ui-bc__xtext{overflow: hidden;max-width: 100%;font-size: 11px;white-space: nowrap;text-overflow: ellipsis}.ui-bc__table-wrap{overflow-x: auto;border-top: 1px solid var(--ui-bc-line);scrollbar-width: thin}.ui-bc__table{width: 100%;border-collapse: collapse;font-size: 13px;line-height: 18px}.ui-bc__table th, .ui-bc__table td{height: 38px;padding: 0 14px;border-top: 1px solid var(--ui-bc-line);text-align: left;white-space: nowrap}.ui-bc__table thead th{border-top: 0;font-weight: 450;color: var(--ui-bc-muted);background: var(--ui-bc-head-bg)}.ui-bc__table [data-num]{text-align: right}.ui-bc__table tbody th{position: sticky;left: 0;z-index: 1;background: var(--ui-bc-card);font-weight: 450}.ui-bc__table tbody tr{transition: background-color 140ms ease}.ui-bc__table tbody tr[data-active] th, .ui-bc__table tbody tr[data-active] td{background: var(--ui-bc-row-active)}.ui-bc__table td{color: var(--ui-bc-text)}.ui-bc__table [data-hidden]{opacity: 0.35}.ui-bc__row-label, .ui-bc__th-seg{display: inline-flex;align-items: center;gap: 8px}.ui-bc__foot{display: flex;align-items: center;justify-content: space-between;gap: 10px;min-height: 44px;padding: 6px 10px 7px 10px}.ui-bc__legend{display: flex;flex-wrap: wrap;gap: 2px}.ui-bc__chip{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 9px;border: 0;border-radius: 8px;background: transparent;font-size: 12.5px !important;color: var(--ui-bc-text) !important;transition: background-color 140ms ease, opacity 160ms ease}.ui-bc__chip:hover{background: var(--ui-bc-wash)}.ui-bc__chip[aria-pressed="false"]{opacity: 0.45;text-decoration: line-through}.ui-bc__hint{padding-left: 8px;font-size: 12.5px;color: var(--ui-bc-muted)}.ui-bc__reset{flex: none;height: 28px;padding: 0 10px;border: 0;border-radius: 8px;background: transparent;font-size: 12.5px !important;font-weight: 500;color: var(--ui-bc-accent-ink) !important}.ui-bc__reset:hover{background: var(--ui-bc-accent-wash)}@keyframes ui-bc-drop{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}@keyframes ui-bc-pop{from{opacity: 0}}@keyframes ui-bc-pill{from{opacity: 0;transform: translate(-50%, -50%) scale(0.92)}}@media (prefers-reduced-motion: reduce){.ui-bc__bar, .ui-bc__seg, .ui-bc__tooltip, .ui-bc__col, .ui-bc__rest{transition: none}.ui-bc__menu, .ui-bc__tooltip, .ui-bc__pill{animation: none}}.ui-bc__morph{overflow: hidden}.ui-bc__morph[data-smooth]{transition: height 380ms cubic-bezier(0.22, 1, 0.36, 1)}@media (prefers-reduced-motion: reduce){.ui-bc__morph[data-smooth]{transition: none}}:where(.dark, [data-theme="dark"]) .ui-bc{--ui-bc-tray: #161618;--ui-bc-card: #232326;--ui-bc-line: rgba(255, 255, 255, 0.08);--ui-bc-grid: rgba(255, 255, 255, 0.09);--ui-bc-ink: #ededed;--ui-bc-text: #c4c4c4;--ui-bc-muted: #8f8f8f;--ui-bc-accent-ink: #6b95ff;--ui-bc-border: rgba(255, 255, 255, 0.08);--ui-bc-surface-hover: #2a2a2d;--ui-bc-option-hover: #313135;--ui-bc-zero: rgba(255, 255, 255, 0.16);--ui-bc-rest: rgba(255, 255, 255, 0.06);--ui-bc-head-bg: #262629;--ui-bc-row-active: #2a2a2d;--ui-bc-wash: rgba(255, 255, 255, 0.06);--ui-bc-accent-wash: rgba(47, 107, 255, 0.16);--ui-bc-card-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);--ui-bc-btn-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);--ui-bc-pop-shadow: 0 12px 30px -8px rgba(0, 0, 0, 0.5);--ui-bc-tip-shadow: 0 12px 28px -8px rgba(0, 0, 0, 0.5);--ui-bc-pill-shadow: 0 2px 6px rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-bc__menu, :where(.dark, [data-theme="dark"]) .ui-bc__tooltip, :where(.dark, [data-theme="dark"]) .ui-bc__pill{background: #2a2a2d;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), var(--ui-bc-pop-shadow)}:where(.dark, [data-theme="dark"]) .ui-bc__select-btn{background: #2a2a2d}:where(.dark, [data-theme="dark"]) .ui-bc__select-btn:hover{background: #313135}`;
export { DComponent as n, SComponent as t };
