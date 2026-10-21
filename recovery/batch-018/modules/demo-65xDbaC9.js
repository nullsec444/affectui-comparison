import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = [
    {
        id: `milestone`,
        label: `Milestone`,
        months: 0
    },
    {
        id: `1m`,
        label: `1 month`,
        months: 1
    },
    {
        id: `3m`,
        label: `3 months`,
        months: 3
    },
    {
        id: `6m`,
        label: `6 months`,
        months: 6
    },
    {
        id: `12m`,
        label: `12 months`,
        months: 12
    }
];
const a = [
    {
        id: `once`,
        label: `Once`,
        perYear: 0
    },
    {
        id: `monthly`,
        label: `Monthly`,
        perYear: 12
    },
    {
        id: `quarterly`,
        label: `Quarterly`,
        perYear: 4
    },
    {
        id: `yearly`,
        label: `Yearly`,
        perYear: 1
    }
];
const o = [
    {
        name: `Set-up fee`,
        repeat: `once`,
        price: 4999
    },
    {
        name: `Platform licence`,
        repeat: `monthly`,
        price: 1200
    },
    {
        name: `Premium support`,
        repeat: `monthly`,
        price: 350
    },
    {
        name: `Extra seats (10)`,
        repeat: `monthly`,
        price: 240
    },
    {
        name: `Onboarding workshop`,
        repeat: `once`,
        price: 1500
    }
];
let s = 0;
const c = ()=>`l${++s}`;
function L1Component({ title = `Create a billing schedule`, phase = `Build-out phase`, currency = `$`, catalog = o, defaultLines = [
    {
        id: `seed-1`,
        kind: `product`,
        name: `Set-up fee`,
        repeat: `once`,
        price: 4999,
        timing: `advance`
    }
], defaultStart = `2026-01-01`, onChange, className }) {
    let [S, setS] = n.useState(phase);
    let [w, setW] = n.useState(defaultStart);
    let [E, setE] = n.useState(`milestone`);
    let [O, setO] = n.useState(defaultLines);
    let [A, setA] = n.useState(null);
    let MRef = n.useRef(null);
    let ref = useG(MRef);
    n.useEffect(()=>{
        onChange?.({
            phase: S,
            start: w,
            duration: E,
            lines: O
        });
    }, [
        S,
        w,
        E,
        O,
        onChange
    ]);
    let P = (e)=>`${currency}${e.toLocaleString(`en-US`, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`;
    let F = (e)=>{
        let t = new Date(`${e}T12:00:00`);
        if (isNaN(t.getTime())) {
            return `–`;
        }
        return t.toLocaleDateString(`en-GB`, {
            day: `numeric`,
            month: `short`,
            year: `numeric`
        });
    };
    let I = i.find((e)=>e.id === E);
    let L = (()=>{
        if (!I.months) {
            return `Milestone`;
        }
        let e = new Date(`${w}T12:00:00`);
        if (isNaN(e.getTime())) {
            return `–`;
        }
        e.setMonth(e.getMonth() + I.months);
        e.setDate(e.getDate() - 1);
        return F(e.toISOString().slice(0, 10));
    })();
    let R = (e, t)=>setO((n)=>n.map((n)=>{
                if (n.id === e) {
                    return {
                        ...n,
                        ...t
                    };
                }
                return n;
            }));
    let z = (e)=>setO((t)=>t.filter((t)=>t.id !== e));
    let B = (e)=>{
        setO((t)=>[
                ...t.filter((e)=>e.kind === `product`),
                {
                    id: c(),
                    kind: `product`,
                    ...e,
                    timing: `advance`
                },
                ...t.filter((e)=>e.kind !== `product`)
            ]);
        setA(null);
    };
    let V = O.some((e)=>e.kind === `discount`);
    let H = O.some((e)=>e.kind === `minimum`);
    let U = O.filter((e)=>e.kind === `product`);
    let W = O.find((e)=>e.kind === `discount`);
    let G = O.find((e)=>e.kind === `minimum`);
    let K = 1 - (W?.percent ?? 0) / 100;
    let q = U.filter((e)=>e.timing === `advance`).reduce((acc, item)=>acc + item.price, 0) * K;
    let J = I.months || 1;
    let Y = U.reduce((acc, item)=>{
        let perYear = a.find((e)=>e.id === item.repeat).perYear;
        return acc + (perYear ? item.price * Math.max(1, Math.round(perYear * J / 12)) : item.price);
    }, 0) * K;
    let X = Math.max(Y, G?.amount ?? 0);
    return <div className={[
        `ui-bs`,
        className
    ].filter(Boolean).join(` `)}><style href={`ui-billing-schedule`} precedence={`default`}>{_}</style><p className={`ui-bs__title`}>{title}</p><div className={`ui-bs__card`}><div className={`ui-bs__summary`}><input className={`ui-bs__phase`} value={S} onChange={(e)=>setS(e.target.value)} aria-label={`Phase name`} size={Math.max(6, S.length)}/><span>{F(w)}</span><svg viewBox={`0 0 24 24`} aria-hidden={`true`}><path d={`M5 12h14m0 0-5-5m5 5-5 5`}/></svg><span key={L} className={`ui-bs__end`}>{L}</span></div><div className={`ui-bs__fields`}><label className={`ui-bs__field`}><span>{`Start date`}</span><span className={`ui-bs__input`}><input type={`date`} value={w} onChange={(e)=>setW(e.target.value)}/><P1Component d={`M7 4v3M17 4v3M4.5 9.5h15M6 6h12a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 18 20H6a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 6 6Z`}/></span></label><div className={`ui-bs__field`}><span id={`ui-bs-duration`}>{`Duration`}</span><H1Component open={A === `duration`} onOpenChange={(e)=>setA(e ? `duration` : null)} label={I.label} labelledBy={`ui-bs-duration`}>{i.map((e)=><button key={e.id} type={`button`} role={`option`} aria-selected={e.id === E} onClick={()=>{
            setE(e.id);
            return setA(null);
        }}>{e.label}{e.id === E && <P1Component d={`m6 12.5 4 4 8-9`}/>}</button>)}</H1Component></div></div><div className={`ui-bs__table`} role={`table`} aria-label={`Billing lines`}><div className={`ui-bs__row ui-bs__row--head`} role={`row`}><span role={`columnheader`}>{`Name`}</span><span role={`columnheader`}>{`Repeats`}</span><span role={`columnheader`} className={`ui-bs__right`}>{`Price`}</span></div><div className={`ui-bs__rows-outer`} ref={ref}><div ref={MRef}>{O.length === 0 && <p className={`ui-bs__empty`}>{`No products yet – add one below.`}</p>}{O.map((e)=><div key={e.id} className={`ui-bs__row`} role={`row`} data-kind={e.kind}><span role={`cell`} className={`ui-bs__name`}>{e.kind !== `product` && <span className={`ui-bs__tag`} aria-hidden={`true`}><P1Component d={e.kind === `discount` ? d : d_2}/></span>}<span className={`ui-bs__name-text`}>{e.name}</span></span><span role={`cell`}>{e.kind === `product` ? <label className={`ui-bs__repeat`}><P1Component d={d_1}/><select value={e.repeat} onChange={(t)=>R(e.id, {
                repeat: t.target.value
            })} aria-label={`${e.name} repeats`}>{a.map((e)=><option key={e.id} value={e.id}>{e.label}</option>)}</select></label> : <span className={`ui-bs__muted`}>{e.kind === `discount` ? `Whole phase` : `Per phase`}</span>}</span><span role={`cell`} className={`ui-bs__price`}><span className={`ui-bs__price-main`}>{e.kind === `product` && <><M1Component value={e.price} prefix={currency} onChange={(price)=>R(e.id, {
                price
            })} label={`${e.name} price`}/><span className={`ui-bs__muted`}>{`/ `}{e.repeat === `once` ? `once` : a.find((t)=>t.id === e.repeat).label.toLowerCase().replace(`ly`, ``)}</span></>}{e.kind === `discount` && <><M1Component value={e.percent} suffix={`%`} max={100} onChange={(percent)=>R(e.id, {
                percent
            })} label={`Discount percent`}/><span className={`ui-bs__muted`}>{`off`}</span></>}{e.kind === `minimum` && <><M1Component value={e.amount} prefix={currency} onChange={(amount)=>R(e.id, {
                amount
            })} label={`Minimum commitment`}/><span className={`ui-bs__muted`}>{`minimum`}</span></>}<button type={`button`} className={`ui-bs__remove`} aria-label={`Remove ${e.name}`} onClick={()=>z(e.id)}><P1Component d={`M7 7l10 10M17 7 7 17`}/></button></span>{e.kind === `product` && <select className={`ui-bs__timing`} value={e.timing} onChange={(t)=>R(e.id, {
                timing: t.target.value
            })} aria-label={`${e.name} billed`}><option value={`advance`}>{`Billed in advance`}</option><option value={`arrears`}>{`Billed in arrears`}</option></select>}</span></div>)}</div></div></div><div className={`ui-bs__actions`}><H1Component open={A === `product`} onOpenChange={(e)=>setA(e ? `product` : null)} label=<><P1Component d={`M12 5.5v13M5.5 12h13`}/>{`Add product`}</> button up>{catalog.map((e)=><button key={e.name} type={`button`} role={`option`} aria-selected={false} onClick={()=>B(e)}><span>{e.name}<small>{P(e.price)}{` · `}{a.find((t)=>t.id === e.repeat).label.toLowerCase()}</small></span></button>)}</H1Component><span className={`ui-bs__spacer`}/><button type={`button`} className={`ui-bs__btn`} disabled={V} onClick={()=>setO((e)=>[
                ...e,
                {
                    id: c(),
                    kind: `discount`,
                    name: `Discount`,
                    percent: 10
                }
            ])}><P1Component d={d}/>{`Add discount`}</button><button type={`button`} className={`ui-bs__btn`} disabled={H} onClick={()=>setO((e)=>[
                ...e,
                {
                    id: c(),
                    kind: `minimum`,
                    name: `Minimum commitment`,
                    amount: 10000
                }
            ])}><P1Component d={d_2}/>{`Add minimum`}</button></div></div><div className={`ui-bs__totals`} aria-live={`polite`}><span>{`First invoice `}<b>{P(q)}</b></span><span>{I.months ? `Phase total (${I.label})` : `Phase total`}{` `}<b>{P(X)}</b>{G && X === G.amount && Y < G.amount && <em>{`minimum applies`}</em>}</span></div></div>;
}
var d_1 = `M17 3.5 19.5 6 17 8.5M19.5 6H9a5 5 0 0 0-5 5M7 20.5 4.5 18 7 15.5M4.5 18H15a5 5 0 0 0 5-5`;
var d = `M9 15 15 9M9.5 9.5h.01M14.5 14.5h.01M12 3l2.1 1.6 2.6-.2.9 2.5 2.3 1.2-.4 2.6L21 12.6l-1.5 2.1.4 2.6-2.3 1.2-.9 2.5-2.6-.2L12 21.4l-2.1-1.6-2.6.2-.9-2.5L4.1 16.3l.4-2.6L3 12l1.5-2.1-.4-2.6 2.3-1.2.9-2.5 2.6.2Z`;
var d_2 = `M5 19.5h14M7 15.5h10M9 11.5h6M10 7.5h4M12 4v1`;
var P1Component = ({ d })=><svg viewBox={`0 0 24 24`} aria-hidden={`true`}><path d={d}/></svg>;
function M1Component({ value, onChange, prefix, suffix, max, label }) {
    let [c, setC] = n.useState(null);
    let u = c ?? value.toLocaleString(`en-US`, {
        minimumFractionDigits: suffix ? 0 : 2,
        maximumFractionDigits: 2
    });
    return <span className={`ui-bs__num`}>{prefix}<input value={u} inputMode={`decimal`} aria-label={label} size={Math.max(2, u.length)} onFocus={()=>setC(String(value))} onChange={(e)=>setC(e.target.value.replace(/[^\d.]/g, ``))} onBlur={()=>{
        onChange(Math.max(0, Math.min(max ?? Infinity, parseFloat(c ?? ``) || 0)));
        setC(null);
    }} onKeyDown={(e)=>e.key === `Enter` && e.target.blur()}/>{suffix}</span>;
}
function H1Component({ open, onOpenChange, label, labelledBy, accent, button: button_1, up, children }) {
    let uRef = n.useRef(null);
    n.useEffect(()=>{
        if (!open) {
            return;
        }
        let n = (e)=>!uRef.current?.contains(e.target) && onOpenChange(false);
        let r = (e)=>e.key === `Escape` && onOpenChange(false);
        document.addEventListener(`pointerdown`, n);
        document.addEventListener(`keydown`, r);
        return ()=>{
            document.removeEventListener(`pointerdown`, n);
            document.removeEventListener(`keydown`, r);
        };
    }, [
        open,
        onOpenChange
    ]);
    return <div className={`ui-bs__dd`} ref={uRef}><button type={`button`} className={button_1 ? `ui-bs__btn` : accent ? `ui-bs__select ui-bs__select--accent` : `ui-bs__select`} aria-haspopup={`listbox`} aria-expanded={open} aria-labelledby={labelledBy} onClick={()=>onOpenChange(!open)}><span className={`ui-bs__select-label`}>{label}</span>{!button_1 && <P1Component d={`m7 10 5 5 5-5`}/>}</button>{open && <div className={`ui-bs__menu`} role={`listbox`} data-up={up ? `` : undefined}>{children}</div>}</div>;
}
function useG(MRef) {
    let tRef = n.useRef(null);
    n.useLayoutEffect(()=>{
        let tRef_current = tRef.current;
        let e_current = MRef.current;
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
        MRef
    ]);
    return tRef;
}
var _ = `.ui-bs{--ui-bs-tray: #f0f0f0;--ui-bs-card: #ffffff;--ui-bs-card-line: #e5e5e5;--ui-bs-line: #ececec;--ui-bs-inset: #f7f7f7;--ui-bs-ink: #171717;--ui-bs-text: #404040;--ui-bs-muted: #8f8f8f;--ui-bs-hover: #f5f5f5;--ui-bs-grad-a: #c7d7ff;--ui-bs-grad-b: #e4d9ff;--ui-bs-grad-c: #fbe0ef;--ui-bs-grad-text: #3550b0;--ui-bs-focus: #2f6bff;--ui-bs-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);--ui-bs-ease: cubic-bezier(0.22, 1, 0.36, 1);width: 100%;max-width: 560px;padding: 6px;border-radius: 20px;background: var(--ui-bs-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-bs-ink);-webkit-font-smoothing: antialiased}.ui-bs *, .ui-bs *::before, .ui-bs *::after{box-sizing: border-box}.ui-bs button, .ui-bs select, .ui-bs input{font: inherit;color: inherit;margin: 0}.ui-bs button{cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-bs :focus-visible{outline: 2px solid var(--ui-bs-focus);outline-offset: 2px}.ui-bs svg{width: 16px;height: 16px;flex: none;fill: none;stroke: currentColor;stroke-width: 1.7;stroke-linecap: round;stroke-linejoin: round}.ui-bs__title{margin: 0;padding: 10px 10px 12px;font-size: 15px;font-weight: 500;letter-spacing: -0.01em}.ui-bs__card{padding: 12px;border: 1px solid var(--ui-bs-card-line);border-radius: 16px;background: var(--ui-bs-card);box-shadow: var(--ui-bs-shadow)}.ui-bs__summary{display: flex;align-items: center;gap: 8px;padding: 2px 2px 12px;font-size: 14px;color: var(--ui-bs-text)}.ui-bs__phase{min-width: 0;padding: 2px 4px;margin-left: -4px !important;border: 0;border-radius: 6px;background: none;font-weight: 500;color: var(--ui-bs-ink) !important;outline: none;transition: background-color 160ms ease}.ui-bs__phase:hover, .ui-bs__phase:focus{background: var(--ui-bs-hover)}.ui-bs__summary svg{width: 15px;height: 15px;color: var(--ui-bs-muted)}.ui-bs__end{animation: ui-bs-fade 260ms ease both}.ui-bs__fields{display: grid;grid-template-columns: 1fr 1fr;gap: 10px;padding: 10px;border-radius: 12px;background: var(--ui-bs-inset)}.ui-bs__field{display: grid;gap: 7px;min-width: 0;font-size: 13px;color: var(--ui-bs-text)}.ui-bs__input, .ui-bs__select{position: relative;display: flex;align-items: center;justify-content: space-between;gap: 8px;width: 100%;height: 40px;padding: 0 12px;border: 0;border-radius: 10px;background: var(--ui-bs-card);box-shadow: inset 0 0 0 1px var(--ui-bs-card-line), 0 1px 1px rgba(0, 0, 0, 0.03);font-size: 14px;color: var(--ui-bs-ink) !important;text-align: left}.ui-bs__input input{flex: 1;min-width: 0;height: 100%;border: 0;background: none;outline: none}.ui-bs__input input::-webkit-calendar-picker-indicator{position: absolute;inset: 0;width: auto;height: auto;opacity: 0;cursor: pointer}.ui-bs__input svg{color: var(--ui-bs-text);pointer-events: none}.ui-bs__input:focus-within{box-shadow: inset 0 0 0 1px var(--ui-bs-focus)}.ui-bs__select svg{color: var(--ui-bs-muted);transition: transform 220ms var(--ui-bs-ease)}.ui-bs__select[aria-expanded="true"] svg{transform: rotate(180deg)}.ui-bs__select--accent{background: linear-gradient(100deg, var(--ui-bs-grad-a), var(--ui-bs-grad-b) 60%, var(--ui-bs-grad-c));box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5), 0 1px 2px rgba(47, 107, 255, 0.12);color: var(--ui-bs-grad-text) !important}.ui-bs__select--accent svg{color: var(--ui-bs-grad-text)}.ui-bs__dd{position: relative}.ui-bs__menu{position: absolute;top: calc(100% + 6px);left: 0;right: 0;z-index: 5;display: grid;gap: 2px;min-width: 220px;padding: 5px;border-radius: 12px;background: var(--ui-bs-card);box-shadow: 0 0 0 1px var(--ui-bs-card-line), 0 10px 30px rgba(0, 0, 0, 0.1);animation: ui-bs-menu 200ms var(--ui-bs-ease) both;transform-origin: top}.ui-bs__menu[data-up]{top: auto;bottom: calc(100% + 6px);right: auto;transform-origin: bottom left}.ui-bs__menu button{display: flex;align-items: center;justify-content: space-between;gap: 10px;padding: 8px 10px;border: 0;border-radius: 8px;background: none;font-size: 13.5px;text-align: left}.ui-bs__menu button:hover{background: var(--ui-bs-hover)}.ui-bs__menu small{display: block;margin-top: 1px;font-size: 12px;color: var(--ui-bs-muted)}.ui-bs__table{margin-top: 6px}.ui-bs__row{display: grid;grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr) 216px;align-items: center;gap: 14px;min-height: 52px;padding: 6px 4px 6px 6px;border-bottom: 1px solid var(--ui-bs-line);font-size: 14px;animation: ui-bs-row 320ms var(--ui-bs-ease) both}.ui-bs__row--head{min-height: 40px;font-size: 13px;color: var(--ui-bs-muted);animation: none}.ui-bs__right{text-align: right;padding-right: 30px}.ui-bs__rows-outer{overflow: hidden}.ui-bs__rows-outer[data-smooth]{transition: height 320ms var(--ui-bs-ease)}.ui-bs__empty{margin: 0;padding: 16px 6px;font-size: 13px;color: var(--ui-bs-muted)}.ui-bs__name{display: flex;align-items: center;gap: 8px;min-width: 0}.ui-bs__name-text{min-width: 0;overflow: hidden;text-overflow: ellipsis;white-space: nowrap}.ui-bs__tag{display: grid;place-items: center;width: 22px;height: 22px;flex: none;border-radius: 7px;background: var(--ui-bs-inset);color: var(--ui-bs-text)}.ui-bs__tag svg{width: 13px;height: 13px}.ui-bs__muted{font-size: 13px;color: var(--ui-bs-muted);white-space: nowrap}.ui-bs__repeat{position: relative;display: inline-flex;align-items: center;gap: 6px;color: var(--ui-bs-text)}.ui-bs__repeat select, .ui-bs__timing{padding: 3px 4px;margin-left: -4px !important;border: 0;border-radius: 6px;background: none;appearance: none;cursor: pointer;transition: background-color 160ms ease}.ui-bs__repeat select:hover, .ui-bs__timing:hover{background: var(--ui-bs-hover)}.ui-bs__timing{margin: 0 28px 0 0 !important;padding: 1px 4px !important;font-size: 12px;color: var(--ui-bs-muted) !important;text-align: right}.ui-bs__price{display: grid;justify-items: end;min-width: 0}.ui-bs__price-main{display: flex;align-items: center;gap: 4px;white-space: nowrap}.ui-bs__num{display: inline-flex;align-items: center;color: var(--ui-bs-ink);font-variant-numeric: tabular-nums}.ui-bs__num input{padding: 3px 1px;border: 0;border-radius: 6px;background: none;outline: none;text-align: right;font-variant-numeric: tabular-nums;transition: background-color 160ms ease, box-shadow 160ms ease}.ui-bs__num input:hover{background: var(--ui-bs-hover)}.ui-bs__num input:focus{background: var(--ui-bs-card);box-shadow: inset 0 0 0 1px var(--ui-bs-focus)}.ui-bs__remove{display: grid;place-items: center;width: 24px;height: 24px;margin-left: 4px !important;padding: 0;border: 0;border-radius: 7px;background: none;color: var(--ui-bs-muted) !important;opacity: 0;transition: opacity 160ms ease, background-color 160ms ease, color 160ms ease}.ui-bs__remove svg{width: 13px;height: 13px}.ui-bs__row:hover .ui-bs__remove, .ui-bs__remove:focus-visible{opacity: 1}.ui-bs__remove:hover{background: var(--ui-bs-hover);color: var(--ui-bs-ink) !important}.ui-bs__actions{display: flex;align-items: center;gap: 8px;margin-top: 12px;padding: 10px;border-radius: 12px;background: var(--ui-bs-inset)}.ui-bs__spacer{flex: 1}.ui-bs__btn{display: inline-flex;align-items: center;gap: 8px;height: 40px;padding: 0 14px;border: 0;border-radius: 10px;background: var(--ui-bs-card);box-shadow: inset 0 0 0 1px var(--ui-bs-card-line), 0 1px 1px rgba(0, 0, 0, 0.03);font-size: 13.5px;color: var(--ui-bs-ink) !important;white-space: nowrap;transition: background-color 160ms ease, opacity 200ms ease, transform 160ms ease}.ui-bs__btn:hover:not(:disabled){background: var(--ui-bs-hover)}.ui-bs__btn:active:not(:disabled){transform: scale(0.98)}.ui-bs__btn:disabled{opacity: 0.45;cursor: default}.ui-bs__btn svg{color: var(--ui-bs-text)}.ui-bs__select-label{display: inline-flex;align-items: center;gap: 8px}.ui-bs__totals{display: flex;justify-content: space-between;gap: 12px;flex-wrap: wrap;padding: 12px 10px 6px;font-size: 13px;color: var(--ui-bs-muted)}.ui-bs__totals b{margin-left: 4px;font-weight: 600;color: var(--ui-bs-ink);font-variant-numeric: tabular-nums}.ui-bs__totals em{margin-left: 6px;font-style: normal;font-size: 12px;color: var(--ui-bs-grad-text)}@keyframes ui-bs-fade{from{opacity: 0}}@keyframes ui-bs-row{from{opacity: 0;transform: translateY(-4px)}}@keyframes ui-bs-menu{from{opacity: 0;transform: scale(0.97) translateY(-4px)}}@media (max-width: 520px){.ui-bs__fields{grid-template-columns: 1fr}.ui-bs__summary{flex-wrap: wrap;row-gap: 2px}.ui-bs__row{grid-template-columns: minmax(0, 1fr);gap: 2px;padding: 10px 4px 10px 6px}.ui-bs__row > :nth-child(2){display: none}.ui-bs__row--head{display: none}.ui-bs__price{justify-items: stretch}.ui-bs__price-main{justify-content: flex-start}.ui-bs__timing{justify-self: start;margin: 0 0 0 -4px !important}.ui-bs__remove{opacity: 1;margin-left: auto !important}.ui-bs__actions{flex-wrap: wrap}.ui-bs__spacer{display: none}}@media (prefers-reduced-motion: reduce){.ui-bs__rows-outer[data-smooth]{transition: none}.ui-bs__row, .ui-bs__menu, .ui-bs__end{animation: none}}.ui-bs input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-bs textarea:focus-visible, .ui-bs [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-bs{--ui-bs-tray: #161618;--ui-bs-card: #232326;--ui-bs-card-line: rgba(255, 255, 255, 0.08);--ui-bs-line: rgba(255, 255, 255, 0.07);--ui-bs-inset: #1c1c1f;--ui-bs-ink: #ededed;--ui-bs-text: #c4c4c4;--ui-bs-muted: #8f8f8f;--ui-bs-hover: rgba(255, 255, 255, 0.05);--ui-bs-grad-a: #2a3a6b;--ui-bs-grad-b: #3a2d66;--ui-bs-grad-c: #4a2240;--ui-bs-grad-text: #c9d6ff;--ui-bs-focus: #6b95ff;--ui-bs-shadow: 0 1px 2px rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-bs__input input{color-scheme: dark}`;
function VComponent() {
    return <div className={`billing-schedule-demo`}><L1Component/></div>;
}
export { VComponent as default };
