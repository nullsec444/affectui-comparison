import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = (e)=>new Intl.NumberFormat(`en-US`, {
        maximumFractionDigits: 0
    }).format(e);
const a = [
    `var(--ui-cbc-c1)`,
    `var(--ui-cbc-c2)`,
    `var(--ui-cbc-c3)`,
    `var(--ui-cbc-c4)`,
    `var(--ui-cbc-c5)`
];
const easing = `cubic-bezier(0.22, 1, 0.36, 1)`;
const s = (e)=>1 - (1 - e) ** 4;
const c = ()=>typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
const l = (e)=>e.id ?? e.label;
function useU(e, t, r) {
    let [i, setI] = n.useState(()=>Object.fromEntries(Object.keys(e).map((e)=>[
                e,
                0
            ])));
    let oRef = n.useRef(i);
    let lRef = n.useRef(false);
    let u = JSON.stringify(e);
    n.useEffect(()=>{
        let e = JSON.parse(u);
        let n = {
            ...oRef.current
        };
        if (c()) {
            oRef.current = e;
            setI(e);
            return;
        }
        let i = lRef.current ? r : t;
        lRef.current = true;
        let d = performance.now();
        let f = 0;
        let p = (t)=>{
            let r = Math.min(1, (t - d) / i);
            let c = s(r);
            let l = {};
            for(let t in e){
                l[t] = (n[t] ?? 0) + (e[t] - (n[t] ?? 0)) * c;
            }
            oRef.current = l;
            setI(l);
            if (r < 1) {
                f = requestAnimationFrame(p);
            }
        };
        f = requestAnimationFrame(p);
        return ()=>cancelAnimationFrame(f);
    }, [
        u
    ]);
    return i;
}
function D1Component({ title = `Breakdown`, items, periods, period, defaultPeriod, onPeriodChange, delta, format = i, totalLabel = `Total`, footer, className }) {
    let b = n.useId();
    let [x, setX] = n.useState(defaultPeriod ?? periods?.[0]?.id);
    let C = period ?? x;
    let [w, setW] = n.useState(null);
    let ERef = n.useRef([]);
    for (let e of items){
        let t = l(e);
        let n = ERef.current.find((e)=>e.key === t);
        if (n) {
            n.label = e.label;
            if (e.color) {
                n.color = e.color;
            }
        } else {
            ERef.current.push({
                key: t,
                label: e.label,
                color: e.color ?? a[ERef.current.length] ?? `var(--ui-cbc-c5)`
            });
        }
    }
    let D = new Map(items.map((e)=>[
            l(e),
            Math.max(0, e.value)
        ]));
    let O = [
        ...D.values()
    ].reduce((acc, item)=>acc + item, 0);
    let k = w !== null && D.has(w) ? w : null;
    let A = {
        "#total": O,
        "#figure": k ? D.get(k) ?? 0 : O
    };
    for (let e of ERef.current){
        A[e.key] = D.get(e.key) ?? 0;
    }
    let j = useU(A, 900, 620);
    let M = Math.max(j[`#total`] ?? 0, 0.0001);
    let N = ERef.current.map((e)=>({
            ...e,
            value: D.get(e.key) ?? 0,
            leaving: !D.has(e.key)
        })).filter((e)=>!e.leaving || (j[e.key] ?? 0) > 0.5).sort((e, t)=>Number(e.leaving) - Number(t.leaving) || t.value - e.value);
    let P = N.map((e)=>e.key).join(`|`);
    let F = N.find((e)=>!e.leaving);
    let IRef = n.useRef(new Map);
    let LRef = n.useRef(new Map);
    n.useLayoutEffect(()=>{
        let e = new Map;
        IRef.current.forEach((t, n)=>e.set(n, t.offsetTop));
        if (!c()) {
            e.forEach((e, t)=>{
                let n = LRef.current.get(t);
                let r = IRef.current.get(t);
                if (r && n !== undefined && n !== e) {
                    r.animate([
                        {
                            transform: `translateY(${n - e}px)`
                        },
                        {
                            transform: `none`
                        }
                    ], {
                        duration: 560,
                        easing
                    });
                }
            });
        }
        LRef.current = e;
    }, [
        P
    ]);
    let RRef = n.useRef(null);
    let zRef = n.useRef(null);
    let BRef = n.useRef(false);
    n.useLayoutEffect(()=>{
        let RRef_current = RRef.current;
        let zRef_current = zRef.current;
        let n = RRef_current?.querySelector(`[aria-checked="true"]`);
        if (!RRef_current || !zRef_current || !n) {
            return;
        }
        let r = ()=>{
            if (!BRef.current) {
                zRef_current.style.transition = `none`;
            }
            zRef_current.style.width = `${n.offsetWidth}px`;
            zRef_current.style.height = `${n.offsetHeight}px`;
            zRef_current.style.transform = `translate(${n.offsetLeft}px, ${n.offsetTop}px)`;
            zRef_current.style.opacity = `1`;
            BRef.current ||= (zRef_current.offsetWidth, zRef_current.style.transition = ``, true);
        };
        r();
        let i = new ResizeObserver(r);
        i.observe(RRef_current);
        return ()=>i.disconnect();
    }, [
        C,
        periods?.length
    ]);
    let V = (e)=>{
        if (period === undefined) {
            setX(e);
        }
        onPeriodChange?.(e);
    };
    let onKeyDown = (e)=>{
        if (!periods?.length) {
            return;
        }
        let t = periods.findIndex((e)=>e.id === C);
        let n = e.key === `ArrowRight` || e.key === `ArrowDown` ? t + 1 : e.key === `ArrowLeft` || e.key === `ArrowUp` ? t - 1 : e.key === `Home` ? 0 : e.key === `End` ? periods.length - 1 : null;
        if (n === null) {
            return;
        }
        e.preventDefault();
        let r = periods[(n + periods.length) % periods.length];
        V(r.id);
        requestAnimationFrame(()=>RRef.current?.querySelector(`[aria-checked="true"]`)?.focus());
    };
    let U = k ? N.find((e)=>e.key === k) : undefined;
    let W = (key)=>(j[key] ?? 0) / M * 100;
    let G = (delta ?? 0) >= 0;
    return <div className={[
        `ui-cbc`,
        className
    ].filter(Boolean).join(` `)} role={`group`} aria-labelledby={`${b}-title`}><style href={`ui-compact-breakdown-clean`} precedence={`default`}>{f}</style><div className={`ui-cbc__body`}><header className={`ui-cbc__head`}><h3 id={`${b}-title`} className={`ui-cbc__title`}>{title}</h3>{periods && periods.length > 1 && <div ref={RRef} className={`ui-cbc__switch`} role={`radiogroup`} aria-label={`Period`} onKeyDown={onKeyDown}><span ref={zRef} className={`ui-cbc__pill`} aria-hidden={`true`}/>{periods.map((e)=><button key={e.id} type={`button`} role={`radio`} aria-checked={e.id === C} tabIndex={e.id === C ? 0 : -1} className={`ui-cbc__option`} onClick={()=>V(e.id)}>{e.label}</button>)}</div>}</header><div className={`ui-cbc__figure`}><p className={`ui-cbc__big`} aria-hidden={`true`}>{format(j[`#figure`] ?? 0)}</p>{delta !== undefined && !U && <span key={`${C}-${delta}`} className={`ui-cbc__delta`} data-up={G || undefined}><svg viewBox={`0 0 12 12`} aria-hidden={`true`}><path d={G ? `M6 9.5v-7M2.8 5.6 6 2.4l3.2 3.2` : `M6 2.5v7M2.8 6.4 6 9.6l3.2-3.2`}/></svg>{Math.abs(delta).toLocaleString(`en-US`, {
        maximumFractionDigits: 1
    })}{`%`}</span>}</div><p className={`ui-cbc__caption`} aria-hidden={`true`}><span key={U?.key ?? `#total`} className={`ui-cbc__caption-in`}>{U ? <><i className={`ui-cbc__swatch`} style={{
        background: U.color
    }}/>{U.label}{` · `}{W(U.key).toFixed(0)}{`%`}</> : totalLabel}</span></p><p className={`ui-cbc__sr`}>{totalLabel}{`: `}{format(O)}{delta === undefined ? `` : `, ${G ? `up` : `down`} ${Math.abs(delta)}% against the previous period`}</p><div className={`ui-cbc__bar`} data-active={k ? `` : undefined} aria-hidden={`true`} onPointerLeave={()=>setW(null)}>{ERef.current.map((e)=>{
        let flexGrow = W(e.key);
        if (flexGrow > 0.05) {
            return <span key={e.key} className={`ui-cbc__seg`} data-active={e.key === k || undefined} style={{
                flexGrow,
                background: e.color
            }} onPointerEnter={()=>D.has(e.key) && setW(e.key)}/>;
        }
        return null;
    })}</div><ul className={`ui-cbc__list`} data-active={k ? `` : undefined} onPointerLeave={()=>setW(null)}>{N.map((e)=><li key={e.key} ref={(t)=>{
            if (t) {
                IRef.current.set(e.key, t);
            } else {
                IRef.current.delete(e.key);
            }
        }} className={`ui-cbc__row`} data-leaving={e.leaving || undefined}><div className={`ui-cbc__item`} tabIndex={e.leaving ? -1 : 0} data-active={e.key === k || undefined} onPointerEnter={()=>!e.leaving && setW(e.key)} onFocus={()=>!e.leaving && setW(e.key)} onBlur={()=>setW(null)}><i className={`ui-cbc__swatch`} style={{
            background: e.color
        }}/><span className={`ui-cbc__label`}>{e.label}</span><span className={`ui-cbc__value`}>{format(j[e.key] ?? 0)}</span><span className={`ui-cbc__share`}>{W(e.key).toFixed(0)}{`%`}</span></div></li>)}</ul></div>{footer !== null && <div className={`ui-cbc__foot`}>{footer ?? (F && <span key={F.key} className={`ui-cbc__foot-in`}>{`Largest: `}<b>{F.label}</b></span>)}</div>}</div>;
}
var f = `.ui-cbc{--ui-cbc-card: #ffffff;--ui-cbc-ink: rgba(0, 0, 0, 0.88);--ui-cbc-strong: #000000;--ui-cbc-text: rgba(0, 0, 0, 0.61);--ui-cbc-muted: rgba(0, 0, 0, 0.45);--ui-cbc-faint: rgba(0, 0, 0, 0.27);--ui-cbc-line: rgba(0, 0, 0, 0.06);--ui-cbc-wash: rgba(0, 0, 0, 0.03);--ui-cbc-fill: rgba(0, 0, 0, 0.06);--ui-cbc-up: #1a9a52;--ui-cbc-up-bg: rgba(26, 154, 82, 0.08);--ui-cbc-down: #e5484d;--ui-cbc-down-bg: rgba(229, 72, 77, 0.08);--ui-cbc-c1: rgba(0, 96, 226, 0.765);--ui-cbc-c2: rgba(0, 96, 226, 0.5);--ui-cbc-c3: rgba(0, 96, 226, 0.32);--ui-cbc-c4: rgba(0, 96, 226, 0.18);--ui-cbc-c5: rgba(0, 0, 0, 0.14);--ui-cbc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-cbc-focus: rgba(0, 96, 226, 0.35);--ui-cbc-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-cbc-snap: cubic-bezier(0.25, 0.9, 0.3, 1);box-sizing: border-box;container-type: inline-size;display: grid;width: 100%;max-width: 360px;overflow: hidden;border-radius: 10px;background: var(--ui-cbc-card);box-shadow: var(--ui-cbc-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-cbc-ink);-webkit-font-smoothing: antialiased}.ui-cbc *, .ui-cbc *::before, .ui-cbc *::after{box-sizing: border-box}:where(.ui-cbc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-cbc) :is(h3, p, ul){margin: 0;padding: 0}:where(.ui-cbc) ul{list-style: none}:where(.ui-cbc) svg{display: block;flex: none}.ui-cbc :is(button, [tabindex="0"]):focus-visible{outline: 2px solid var(--ui-cbc-focus);outline-offset: 1px}.ui-cbc b{font-weight: 500;color: var(--ui-cbc-ink)}.ui-cbc__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap}.ui-cbc__body{padding: 16px 16px 10px}.ui-cbc__head{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 28px}.ui-cbc__title{overflow: hidden;font-size: 15px;font-weight: 500;line-height: 24px;color: var(--ui-cbc-strong);white-space: nowrap;text-overflow: ellipsis}.ui-cbc__switch{position: relative;display: grid;grid-auto-columns: auto;grid-auto-flow: column;gap: 4px;flex: none}.ui-cbc__pill{position: absolute;top: 0;left: 0;border-radius: 6px;background: var(--ui-cbc-fill);opacity: 0;pointer-events: none;transition: transform 200ms var(--ui-cbc-snap), width 200ms var(--ui-cbc-snap)}.ui-cbc__option{position: relative;z-index: 1;height: 28px;padding: 4px 10px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-cbc-line);font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-cbc-text);white-space: nowrap;transition: color 90ms ease, background-color 90ms ease}.ui-cbc__option[aria-checked="true"]{color: var(--ui-cbc-ink)}@media (hover: hover){.ui-cbc__option[aria-checked="false"]:hover{background: var(--ui-cbc-wash)}}.ui-cbc__figure{display: flex;align-items: center;gap: 8px;margin-top: 14px}.ui-cbc__big{font-size: 24px;font-weight: 500;line-height: 32px;letter-spacing: -0.02em;color: var(--ui-cbc-strong);font-variant-numeric: tabular-nums}.ui-cbc__delta{display: inline-flex;align-items: center;gap: 2px;height: 20px;padding: 0 6px 0 4px;border-radius: 5px;background: var(--ui-cbc-down-bg);color: var(--ui-cbc-down);font-size: 12px;font-weight: 500;line-height: 16px;font-variant-numeric: tabular-nums;animation: ui-cbc-pop 380ms var(--ui-cbc-ease) both}.ui-cbc__delta[data-up]{background: var(--ui-cbc-up-bg);color: var(--ui-cbc-up)}.ui-cbc__delta svg{width: 12px;height: 12px;fill: none;stroke: currentColor;stroke-width: 1.3;stroke-linecap: round;stroke-linejoin: round}.ui-cbc__caption{height: 16px;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-cbc-muted);font-variant-numeric: tabular-nums}.ui-cbc__caption-in{display: inline-flex;align-items: center;gap: 6px;animation: ui-cbc-in 260ms var(--ui-cbc-ease) both}.ui-cbc__bar{display: flex;gap: 2px;height: 6px;margin-top: 16px;padding: 0;border-radius: 3px}.ui-cbc__seg{flex: 0 1 0;height: 100%;min-width: 2px;border-radius: 1.5px;transition: opacity 160ms ease, transform 200ms var(--ui-cbc-ease)}.ui-cbc__seg:first-child{border-radius: 3px 1.5px 1.5px 3px}.ui-cbc__seg:last-child{border-radius: 1.5px 3px 3px 1.5px}.ui-cbc__bar[data-active] .ui-cbc__seg:not([data-active]){opacity: 0.3}.ui-cbc__seg[data-active]{transform: scaleY(1.5)}.ui-cbc__list{position: relative;display: grid;margin-top: 10px}.ui-cbc__row{display: grid;grid-template-rows: 1fr;transition: grid-template-rows 320ms var(--ui-cbc-ease), opacity 200ms ease}.ui-cbc__row[data-leaving]{grid-template-rows: 0fr;opacity: 0;pointer-events: none}.ui-cbc__item{display: flex;align-items: center;gap: 10px;min-height: 0;height: 32px;margin: 0 -8px;padding: 0 8px;overflow: hidden;border-radius: 6px;cursor: default;transition: background-color 90ms ease-out, opacity 160ms ease}.ui-cbc__item[data-active]{background: var(--ui-cbc-wash)}.ui-cbc__list[data-active] .ui-cbc__item:not([data-active]){opacity: 0.45}.ui-cbc__swatch{flex: none;width: 8px;height: 8px;border-radius: 2px}.ui-cbc__label{flex: 1;min-width: 0;overflow: hidden;color: var(--ui-cbc-ink);white-space: nowrap;text-overflow: ellipsis}.ui-cbc__value{color: var(--ui-cbc-ink);font-weight: 500;font-variant-numeric: tabular-nums}.ui-cbc__share{width: 34px;font-size: 12px;line-height: 16px;text-align: right;color: var(--ui-cbc-muted);font-variant-numeric: tabular-nums}.ui-cbc__foot{display: flex;align-items: center;min-height: 40px;padding: 0 16px;overflow: hidden;border-top: 0.5px solid var(--ui-cbc-line);font-size: 12px;line-height: 16px;color: var(--ui-cbc-muted);white-space: nowrap}.ui-cbc__foot-in{overflow: hidden;text-overflow: ellipsis;animation: ui-cbc-in 320ms var(--ui-cbc-ease) both}@keyframes ui-cbc-in{from{opacity: 0;transform: translateY(4px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-cbc-pop{from{opacity: 0;transform: scale(0.85)}to{opacity: 1;transform: none}}@container (max-width: 320px){.ui-cbc__body{padding: 14px 14px 8px}.ui-cbc__foot{padding: 0 14px}.ui-cbc__switch{gap: 2px}.ui-cbc__option{padding: 4px 8px}}@container (max-width: 250px){.ui-cbc__share{display: none}.ui-cbc__option{padding: 4px 6px}}@media (hover: none) and (pointer: coarse){.ui-cbc__option{height: 32px;padding: 6px 10px}.ui-cbc__item{height: 40px}.ui-cbc__foot{min-height: 44px}}@media (prefers-reduced-motion: reduce){.ui-cbc *, .ui-cbc *::before, .ui-cbc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-cbc{--ui-cbc-card: #1c1c1e;--ui-cbc-ink: rgba(255, 255, 255, 0.9);--ui-cbc-strong: #ffffff;--ui-cbc-text: rgba(255, 255, 255, 0.62);--ui-cbc-muted: rgba(255, 255, 255, 0.46);--ui-cbc-faint: rgba(255, 255, 255, 0.3);--ui-cbc-line: rgba(255, 255, 255, 0.08);--ui-cbc-wash: rgba(255, 255, 255, 0.04);--ui-cbc-fill: rgba(255, 255, 255, 0.08);--ui-cbc-up: #3ec27a;--ui-cbc-up-bg: rgba(62, 194, 122, 0.14);--ui-cbc-down: #ff6b70;--ui-cbc-down-bg: rgba(229, 72, 77, 0.14);--ui-cbc-c1: #4d8dff;--ui-cbc-c2: rgba(77, 141, 255, 0.62);--ui-cbc-c3: rgba(77, 141, 255, 0.4);--ui-cbc-c4: rgba(77, 141, 255, 0.22);--ui-cbc-c5: rgba(255, 255, 255, 0.16);--ui-cbc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-cbc-focus: rgba(77, 141, 255, 0.5)}`;
const periods = [
    {
        id: `7d`,
        label: `7d`
    },
    {
        id: `30d`,
        label: `30d`
    },
    {
        id: `90d`,
        label: `90d`
    }
];
const m = {
    "7d": {
        delta: 12.4,
        items: [
            {
                label: `Direct`,
                value: 4820
            },
            {
                label: `Organic search`,
                value: 3910
            },
            {
                label: `Referrals`,
                value: 2240
            },
            {
                label: `Social`,
                value: 1680
            },
            {
                label: `Email`,
                value: 940
            }
        ]
    },
    "30d": {
        delta: 8.1,
        items: [
            {
                label: `Organic search`,
                value: 18400
            },
            {
                label: `Direct`,
                value: 16900
            },
            {
                label: `Social`,
                value: 9800
            },
            {
                label: `Referrals`,
                value: 7300
            },
            {
                label: `Email`,
                value: 5200
            }
        ]
    },
    "90d": {
        delta: -3.2,
        items: [
            {
                label: `Organic search`,
                value: 51200
            },
            {
                label: `Social`,
                value: 38600
            },
            {
                label: `Direct`,
                value: 36100
            },
            {
                label: `Email`,
                value: 21400
            },
            {
                label: `Referrals`,
                value: 16900
            }
        ]
    }
};
const format = (e)=>`$${Math.round(e).toLocaleString(`en-US`)}`;
function GComponent() {
    let [e, setE] = n.useState(`7d`);
    let iRef = n.useRef(false);
    n.useEffect(()=>{
        let e = window.setInterval(()=>{
            if (!iRef.current) {
                setE((e)=>periods[(periods.findIndex((t)=>t.id === e) + 1) % periods.length].id);
            }
        }, 2800);
        return ()=>window.clearInterval(e);
    }, []);
    let a = ()=>iRef.current = true;
    return <div className={`cb-demo`} onPointerEnter={a} onPointerDownCapture={a} onKeyDownCapture={a} onFocusCapture={a}><D1Component title={`Revenue by channel`} periods={periods} period={e} onPeriodChange={setE} items={m[e].items} delta={m[e].delta} format={format} totalLabel={`Total revenue`}/></div>;
}
export { GComponent as default };
