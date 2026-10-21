import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = (e, t, n = [])=>n.includes(e.id) || t === 0 || t === 1 && e.risk !== `safe`;
const a = [
    {
        id: 0,
        label: `Always ask`,
        hint: `Nothing happens without your OK`
    },
    {
        id: 1,
        label: `If risky`,
        hint: `Safe actions run, risky ones wait for you`
    },
    {
        id: 2,
        label: `Full auto`,
        hint: `Everything runs, except what you locked`
    }
];
const o = {
    safe: ``,
    risky: `Risky`,
    destructive: `Destructive`
};
const s = ()=>typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
const easing = `cubic-bezier(0.4, 0, 0.2, 1)`;
const l = (e)=>Math.max(0, Math.min(2, Math.round(e)));
const U1Component = ()=><svg width={`16`} height={`16`} viewBox={`0 0 24 24`} fill={`none`} aria-hidden={`true`}><path d={`M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`1.5`}/><path d={`M12 9V13`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`1.5`}/><path d={`M12.125 16.75H12M12.25 16.75C12.25 16.8881 12.1381 17 12 17C11.8619 17 11.75 16.8881 11.75 16.75C11.75 16.6119 11.8619 16.5 12 16.5C12.1381 16.5 12.25 16.6119 12.25 16.75Z`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`1.5`}/></svg>;
const D1Component = ()=><svg width={`16`} height={`16`} viewBox={`0 0 24 24`} fill={`none`} aria-hidden={`true`}><path d={`M5.92089 5.92089C8.15836 3.68342 9.2771 2.56468 10.5857 2.19562C11.5105 1.93479 12.4895 1.93479 13.4143 2.19562C14.7229 2.56468 15.8416 3.68342 18.0791 5.92089C20.3166 8.15836 21.4353 9.2771 21.8044 10.5857C22.0652 11.5105 22.0652 12.4895 21.8044 13.4143C21.4353 14.7229 20.3166 15.8416 18.0791 18.0791C15.8416 20.3166 14.7229 21.4353 13.4143 21.8044C12.4895 22.0652 11.5105 22.0652 10.5857 21.8044C9.2771 21.4353 8.15836 20.3166 5.92089 18.0791C3.68342 15.8416 2.56468 14.7229 2.19562 13.4143C1.93479 12.4895 1.93479 11.5105 2.19562 10.5857C2.56468 9.2771 3.68342 8.15836 5.92089 5.92089Z`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`1.5`}/><path d={`M12 8V12`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`1.5`}/><path d={`M12.125 15.75H12M12.25 15.75C12.25 15.8881 12.1381 16 12 16C11.8619 16 11.75 15.8881 11.75 15.75C11.75 15.6119 11.8619 15.5 12 15.5C12.1381 15.5 12.25 15.6119 12.25 15.75Z`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`1.5`}/></svg>;
const F1Component = ()=><svg width={`16`} height={`16`} viewBox={`0 0 24 24`} fill={`none`} aria-hidden={`true`}><path d={`M12 14.5V17.5M13 14.5C13 15.0523 12.5523 15.5 12 15.5C11.4477 15.5 11 15.0523 11 14.5C11 13.9477 11.4477 13.5 12 13.5C12.5523 13.5 13 13.9477 13 14.5Z`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`1.5`}/><path d={`M16.5 9V6.5C16.5 4.01472 14.4853 2 12 2C9.51471 2 7.49999 4.01472 7.49999 6.5V9`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`1.5`}/><path d={`M4.2678 18.8447C4.49268 20.515 5.87612 21.8235 7.55965 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.8789 17.7547 20 16.6376 20 15.5C20 14.3624 19.8789 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55965 9.09909C5.87612 9.17649 4.49268 10.485 4.2678 12.1553C4.12104 13.2453 3.99999 14.3624 3.99999 15.5C3.99999 16.6376 4.12104 17.7547 4.2678 18.8447Z`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`1.5`}/></svg>;
const P1Component = ()=><svg width={`16`} height={`16`} viewBox={`0 0 24 24`} fill={`none`} aria-hidden={`true`}><path d={`M12 14.5V17.5M13 14.5C13 15.0523 12.5523 15.5 12 15.5C11.4477 15.5 11 15.0523 11 14.5C11 13.9477 11.4477 13.5 12 13.5C12.5523 13.5 13 13.9477 13 14.5Z`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`1.5`}/><path d={`M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C13.9593 2 15.8664 3.25221 16.5 5`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`1.5`}/><path d={`M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`1.5`}/></svg>;
const M1Component = ()=><svg width={`14`} height={`14`} viewBox={`0 0 14 14`} aria-hidden={`true`}><path d={`M7 1.2c.4 2.9 1.9 4.4 4.8 4.8-2.9.4-4.4 1.9-4.8 4.8C6.6 7.9 5.1 6.4 2.2 6 5.1 5.6 6.6 4.1 7 1.2Z`} fill={`currentColor`}/><circle cx={`11.6`} cy={`11.4`} r={`1.1`} fill={`currentColor`} opacity={`0.55`}/></svg>;
const H1Component = ()=><svg width={`16`} height={`16`} viewBox={`0 0 16 16`} aria-hidden={`true`}><circle cx={`8`} cy={`8`} r={`2.4`} fill={`currentColor`}/></svg>;
function G1Component({ value }) {
    let [t, setT] = n.useState(value);
    let [a, setA] = n.useState(null);
    n.useEffect(()=>{
        if (value !== t) {
            setA(value > t ? `up` : `down`);
            setT(value);
        }
    }, [
        value
    ]);
    return <span key={t} className={`ui-ad__roll`} data-dir={a ?? undefined}>{t}</span>;
}
function Component({ actions, level, defaultLevel = 1, onLevelChange, pinned, defaultPinned = [], onPinnedChange, title = `Agent permissions`, subtitle = `What it may do without asking you`, className }) {
    let E = n.useId();
    let DRef = n.useRef(null);
    let [O, setO] = n.useState(defaultLevel);
    let [A, setA] = n.useState(defaultPinned);
    let M = level ?? O;
    let N = pinned ?? A;
    let P = (e)=>{
        if (e !== M) {
            setO(e);
            onLevelChange?.(e);
        }
    };
    let F = (e)=>{
        let t = N.includes(e) ? N.filter((t)=>t !== e) : [
            ...N,
            e
        ];
        setA(t);
        onPinnedChange?.(t);
    };
    let I = actions.filter((e)=>!i(e, M, N));
    let L = actions.filter((e)=>i(e, M, N));
    let RRef = n.useRef(null);
    let [z, setZ] = n.useState(null);
    n.useLayoutEffect(()=>{
        let e = RRef.current?.querySelector(`[data-level="${M}"]`);
        if (e) {
            setZ({
                x: e.offsetLeft,
                w: e.offsetWidth
            });
        }
    }, [
        M
    ]);
    let onKeyDown = (e)=>{
        let t = e.key === `ArrowRight` || e.key === `ArrowDown` ? 1 : e.key === `ArrowLeft` || e.key === `ArrowUp` ? -1 : 0;
        if (!t) {
            return;
        }
        e.preventDefault();
        let n = l(M + t);
        P(n);
        RRef.current?.querySelector(`[data-level="${n}"]`)?.focus();
    };
    let HRef = n.useRef(new Map);
    let URef = n.useRef(new Map);
    let WRef = n.useRef(null);
    let GRef = n.useRef(0);
    let K = `${I.map((e)=>e.id).join(`,`)}|${L.map((e)=>e.id).join(`,`)}`;
    let qRef = n.useRef(K);
    if (DRef.current && K !== qRef.current) {
        URef.current = new Map([
            ...HRef.current
        ].map(([e, t])=>[
                e,
                t.getBoundingClientRect()
            ]));
        GRef.current = DRef.current?.offsetHeight ?? 0;
    }
    n.useLayoutEffect(()=>{
        if (qRef.current === K || (qRef.current = K, s())) {
            return;
        }
        let DRef_current = DRef.current;
        if (DRef_current && GRef.current && Math.abs(DRef_current.offsetHeight - GRef.current) > 1) {
            DRef_current.animate([
                {
                    height: `${GRef.current}px`
                },
                {
                    height: `${DRef_current.offsetHeight}px`
                }
            ], {
                duration: 420,
                easing
            });
        }
        let t = 0;
        for (let [e, n] of HRef.current){
            let r = URef.current.get(e);
            if (!r) {
                continue;
            }
            let i = n.getBoundingClientRect();
            let a = r.top - i.top;
            if (!(Math.abs(a) < 1)) {
                n.animate([
                    {
                        transform: `translateY(${a}px)`,
                        zIndex: 2
                    },
                    {
                        transform: `none`,
                        zIndex: 2
                    }
                ], {
                    duration: 420,
                    delay: t++ * 20,
                    easing,
                    fill: `backwards`
                });
            }
        }
    }, [
        K
    ]);
    let JComponent = (e, t)=>{
        let n = N.includes(e.id);
        return <li key={e.id} className={`ui-ad__row`} data-asks={t ? `` : undefined} ref={(t)=>{
            if (t) {
                HRef.current.set(e.id, t);
            } else {
                HRef.current.delete(e.id);
            }
        }}><span className={`ui-ad__icon`}>{e.icon ?? <H1Component/>}</span><span className={`ui-ad__name`}><span className={`ui-ad__line`}><span className={`ui-ad__label`}>{e.label}</span>{e.risk !== `safe` && <span className={`ui-ad__risk`} data-risk={e.risk}>{e.risk === `risky` ? <U1Component/> : <D1Component/>}{o[e.risk]}</span>}</span>{e.detail && <span className={`ui-ad__detail`}>{e.detail}</span>}</span><button type={`button`} className={`ui-ad__pin`} aria-pressed={n} aria-label={n ? `${e.label}: always asks – unlock` : `Always ask before: ${e.label}`} title={n ? `Always asks – click to follow the dial again` : `Always ask, whatever the dial says`} onClick={()=>F(e.id)}>{n ? <F1Component/> : <P1Component/>}</button></li>;
    };
    let Y = a[M];
    return <div ref={DRef} className={[
        `ui-ad`,
        className
    ].filter(Boolean).join(` `)} data-level={M}><style href={`ui-autonomy-dial`} precedence={`default`}>{v}</style><div ref={WRef} className={`ui-ad__card`}><header className={`ui-ad__head`}><span className={`ui-ad__spark`}><M1Component/></span><span className={`ui-ad__heading`}><span className={`ui-ad__title`}>{title}</span>{subtitle && <span className={`ui-ad__sub`}>{subtitle}</span>}</span></header><div className={`ui-ad__levels`}><div ref={RRef} className={`ui-ad__segmented`} role={`radiogroup`} aria-label={`Autonomy`} aria-describedby={`${E}-hint`} style={z ? {
        "--x": `${z.x}px`,
        "--w": `${z.w}px`
    } : undefined} onKeyDown={onKeyDown}><span className={`ui-ad__pill`} aria-hidden={`true`}/>{a.map((e)=><button key={e.id} type={`button`} role={`radio`} aria-checked={e.id === M} tabIndex={e.id === M ? 0 : -1} data-level={e.id} className={`ui-ad__level`} onClick={()=>P(e.id)}>{e.label}</button>)}</div><span className={`ui-ad__sr`} id={`${E}-hint`}>{Y.hint}</span></div></div><div className={`ui-ad__groups`}><section className={`ui-ad__group`} aria-labelledby={`${E}-own`}><h4 className={`ui-ad__group-head`} id={`${E}-own`}>{`Runs on its own`}<span className={`ui-ad__count`}><G1Component value={I.length}/></span></h4><ul className={`ui-ad__list`}>{I.map((e)=>JComponent(e, false))}{I.length === 0 && <li className={`ui-ad__empty`}>{`Every action waits for you`}</li>}</ul></section><section className={`ui-ad__group`} aria-labelledby={`${E}-ask`}><h4 className={`ui-ad__group-head`} id={`${E}-ask`}>{`Asks you first`}<span className={`ui-ad__count`}><G1Component value={L.length}/></span></h4><ul className={`ui-ad__list`}>{L.map((e)=>JComponent(e, true))}{L.length === 0 && <li className={`ui-ad__empty`}>{`The agent runs everything itself`}</li>}</ul></section></div><span className={`ui-ad__sr`} aria-live={`polite`}>{`${Y.label}: ${I.length} on its own, ${L.length} ask first`}</span></div>;
}
var v = `.ui-ad{--ui-ad-tray: #f0f0f0;--ui-ad-card: #ffffff;--ui-ad-ink: #171717;--ui-ad-text: #6b6b6b;--ui-ad-muted: #8a8a8a;--ui-ad-faint: #b8b8b8;--ui-ad-line: #ececec;--ui-ad-chip: #f5f5f5;--ui-ad-track: #f0f0f0;--ui-ad-accent: #2f6bff;--ui-ad-warn-bg: #fff3e0;--ui-ad-warn-fg: #b85c00;--ui-ad-danger-bg: #fdecea;--ui-ad-danger-fg: #c2331f;--ui-ad-ring: rgba(23, 23, 23, 0.22);--ui-ad-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;max-width: 420px;padding: 4px;overflow: hidden;border-radius: 20px;background: var(--ui-ad-tray);container-type: inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;line-height: 20px;letter-spacing: -0.006em;color: var(--ui-ad-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-ad *, .ui-ad *::before, .ui-ad *::after{box-sizing: border-box}:where(.ui-ad) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-ad button:focus-visible{outline: 2px solid var(--ui-ad-ring);outline-offset: 2px}.ui-ad ul{margin: 0;padding: 0;list-style: none}.ui-ad h4{margin: 0}.ui-ad svg{display: block;flex: none}.ui-ad__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-ad__card{position: relative;border-radius: 16px;background: var(--ui-ad-card);box-shadow: 0 0 0 1px var(--ui-ad-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-ad__head{display: flex;align-items: center;gap: 12px;padding: 16px 16px 0}.ui-ad__spark{display: grid;flex: none;place-items: center;width: 16px;color: var(--ui-ad-accent)}.ui-ad__heading{display: grid;min-width: 0}.ui-ad__title{overflow: hidden;font-weight: 600;color: var(--ui-ad-ink);white-space: nowrap;text-overflow: ellipsis}.ui-ad__sub{overflow: hidden;font-size: 12.5px;line-height: 18px;color: var(--ui-ad-muted);white-space: nowrap;text-overflow: ellipsis}.ui-ad__levels{padding: 14px 16px 16px}.ui-ad__segmented{position: relative;display: flex;padding: 3px;border-radius: 12px;background: var(--ui-ad-track)}.ui-ad__pill{position: absolute;top: 3px;bottom: 3px;left: 0;width: var(--w, 0);border-radius: 9px;background: var(--ui-ad-card);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);transform: translateX(var(--x, 0));transition: transform 320ms var(--ui-ad-ease), width 320ms var(--ui-ad-ease)}.ui-ad__level{position: relative;flex: 1;height: 30px;padding: 0 10px;border-radius: 9px;font-size: 13px;font-weight: 500;color: var(--ui-ad-muted);text-align: center !important;white-space: nowrap;transition: color 200ms ease}.ui-ad__level[aria-checked="true"]{color: var(--ui-ad-ink)}.ui-ad__level[aria-checked="false"]:hover{color: var(--ui-ad-ink)}.ui-ad__groups{display: grid;gap: 14px;padding: 14px 4px 4px}.ui-ad__group-head{display: flex;align-items: center;gap: 6px;margin: 0 8px 8px !important;font-size: 12.5px;font-weight: 500;line-height: 18px;color: var(--ui-ad-muted)}.ui-ad__count{display: grid;place-items: center;min-width: 18px;height: 18px;padding: 0 5px;overflow: hidden;border-radius: 6px;background: var(--ui-ad-card);box-shadow: 0 0 0 1px var(--ui-ad-line), 0 1px 2px rgba(0, 0, 0, 0.04);font-size: 11px;color: var(--ui-ad-text);font-variant-numeric: tabular-nums}.ui-ad__roll{display: block}.ui-ad__roll[data-dir="up"]{animation: ui-ad-roll-up 360ms var(--ui-ad-ease) both}.ui-ad__roll[data-dir="down"]{animation: ui-ad-roll-down 360ms var(--ui-ad-ease) both}.ui-ad__list{display: grid;gap: 4px}.ui-ad__row{position: relative;display: flex;align-items: center;gap: 12px;min-height: 42px;padding: 4px 6px 4px 14px;border-radius: 12px;background: var(--ui-ad-card);box-shadow: 0 0 0 1px var(--ui-ad-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-ad__icon{display: grid;flex: none;place-items: center;width: 16px;height: 16px;color: var(--ui-ad-muted)}.ui-ad__icon > svg{width: 16px;height: 16px}.ui-ad__name{display: grid;flex: 1;min-width: 0}.ui-ad__line{display: flex;align-items: center;gap: 8px;min-width: 0}.ui-ad__label{overflow: hidden;font-size: 13.5px;font-weight: 500;color: var(--ui-ad-ink);white-space: nowrap;text-overflow: ellipsis}.ui-ad__detail{overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-ad-muted);white-space: nowrap;text-overflow: ellipsis}.ui-ad__risk{display: inline-flex;flex: none;align-items: center;gap: 3px;height: 20px;padding: 0 8px 0 6px;border-radius: 999px;background: var(--ui-ad-warn-bg);font-size: 11.5px;font-weight: 500;line-height: 16px;color: var(--ui-ad-warn-fg)}.ui-ad__risk > svg{width: 12px;height: 12px}.ui-ad__risk[data-risk="destructive"]{background: var(--ui-ad-danger-bg);color: var(--ui-ad-danger-fg)}.ui-ad__pin{display: grid;flex: none;place-items: center;width: 30px;height: 30px;border-radius: 9px;color: var(--ui-ad-faint);opacity: 0;transition: opacity 160ms ease, color 160ms ease, background-color 160ms ease}.ui-ad__row:hover .ui-ad__pin, .ui-ad__pin:focus-visible, .ui-ad__pin[aria-pressed="true"]{opacity: 1}.ui-ad__pin:hover{background: var(--ui-ad-chip);color: var(--ui-ad-ink)}.ui-ad__pin[aria-pressed="true"]{color: var(--ui-ad-text)}.ui-ad__empty{display: flex;align-items: center;justify-content: center;min-height: 42px;padding: 8px 12px;border-radius: 12px;background: rgba(0, 0, 0, 0.035);font-size: 12.5px;line-height: 18px;color: var(--ui-ad-muted);text-align: center}@keyframes ui-ad-roll-up{from{opacity: 0;transform: translateY(70%)}}@keyframes ui-ad-roll-down{from{opacity: 0;transform: translateY(-70%)}}@container (max-width: 340px){.ui-ad__detail{display: none}.ui-ad__level{padding: 0 6px;font-size: 12px}}@media (hover: none){.ui-ad__pin{opacity: 1}}@media (pointer: coarse){.ui-ad__level{height: 36px}.ui-ad__pin{width: 36px;height: 36px}}@media (prefers-reduced-motion: reduce){.ui-ad *, .ui-ad *::before, .ui-ad *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-ad{--ui-ad-tray: #111113;--ui-ad-card: #19191b;--ui-ad-ink: #ededed;--ui-ad-text: #a1a1a1;--ui-ad-muted: #8b8b92;--ui-ad-faint: #5c5c63;--ui-ad-line: #2a2a2e;--ui-ad-chip: #232326;--ui-ad-track: #232326;--ui-ad-accent: #5b8cff;--ui-ad-warn-bg: rgba(255, 160, 87, 0.14);--ui-ad-warn-fg: #ffa057;--ui-ad-danger-bg: rgba(255, 119, 102, 0.14);--ui-ad-danger-fg: #ff977d;--ui-ad-ring: rgba(255, 255, 255, 0.3)}:where(.dark, [data-theme="dark"]) .ui-ad__pill{background: #2c2c30;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-ad__empty{background: rgba(255, 255, 255, 0.04)}`;
const useY = ()=>`lg` + n.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
const B1Component = ()=>{
    let e = useY();
    return <svg viewBox={`0 0 56.4108 44.8722`} fill={`none`} aria-hidden={`true`}><path d={`M44.2255 5.76727H56.4051V41.0239C56.4051 43.148 54.683 44.8701 52.5589 44.8701H46.1486C45.8961 44.8701 45.646 44.8204 45.4127 44.7237C45.1794 44.6271 44.9674 44.4854 44.7888 44.3069C44.6102 44.1283 44.4686 43.9163 44.3719 43.683C44.2753 43.4497 44.2255 43.1996 44.2255 42.947V5.76727Z`} fill={`url(#${e}-0)`}/><path d={`M12.1796 5.76727H0V41.0239C0 43.148 1.72213 44.8701 3.84618 44.8701H10.2565C10.509 44.8701 10.7591 44.8204 10.9924 44.7237C11.2257 44.6271 11.4377 44.4854 11.6163 44.3069C11.7949 44.1283 11.9365 43.9163 12.0332 43.683C12.1298 43.4497 12.1796 43.1996 12.1796 42.947V5.76727Z`} fill={`#FC413D`}/><path d={`M10.0085 1.42778C7.43377 -0.736342 3.5924 -0.403647 1.42828 2.17105C-0.735843 4.74543 -0.403148 8.58681 2.17155 10.7512L26.5557 31.2479C27.0178 31.6362 27.602 31.8492 28.2056 31.8492C28.8091 31.8492 29.3934 31.6362 29.8554 31.2479L54.2396 10.7509C56.814 8.58681 57.1467 4.74543 54.9825 2.17073C52.8184 -0.403648 48.977 -0.736342 46.4027 1.42778L28.2054 16.724L10.0085 1.42778Z`} fill={`url(#${e}-1)`}/><defs><linearGradient id={`${e}-0`} x1={`50.3153`} y1={`5.76727`} x2={`50.3153`} y2={`44.8701`} gradientUnits={`userSpaceOnUse`}><stop stopColor={`#60D673`}/><stop offset={`0.17`} stopColor={`#42C868`}/><stop offset={`0.39`} stopColor={`#0EBC5F`}/><stop offset={`0.62`} stopColor={`#00A9BB`}/><stop offset={`0.86`} stopColor={`#3C90FF`}/><stop offset={`1`} stopColor={`#3186FF`}/></linearGradient><linearGradient id={`${e}-1`} x1={`6.04194e-05`} y1={`6.45153`} x2={`56.4107`} y2={`6.45153`} gradientUnits={`userSpaceOnUse`}><stop offset={`0.08`} stopColor={`#FF63A0`}/><stop offset={`0.3`} stopColor={`#FC413D`}/><stop offset={`0.5`} stopColor={`#FC413D`}/><stop offset={`0.65`} stopColor={`#FC413D`}/><stop offset={`0.72`} stopColor={`#FC5C30`}/><stop offset={`0.86`} stopColor={`#FEB10C`}/><stop offset={`0.91`} stopColor={`#FEC700`}/><stop offset={`0.96`} stopColor={`#FFDB0F`}/></linearGradient></defs></svg>;
};
const InlineComponent = ()=><svg viewBox={`0 0 24 24`} fill={`currentColor`} aria-hidden={`true`} style={{
        color: `var(--ui-adc-strong, var(--ui-ad-ink, #000))`
    }}><path d={`M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z`}/></svg>;
const InlineComponent_1 = ()=><svg viewBox={`0 0 24 24`} fill={`#FF7A59`} aria-hidden={`true`}><path d={`M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z`}/></svg>;
const InlineComponent_2 = ()=><svg viewBox={`0 0 24 24`} fill={`#1FA463`} aria-hidden={`true`}><path d={`M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z`}/></svg>;
const InlineComponent_3 = ()=><svg viewBox={`0 0 24 24`} aria-hidden={`true`}><rect width={`24`} height={`24`} rx={`6`} fill={`#635BFF`}/><path fill={`#fff`} transform={`translate(5 5) scale(0.5833)`} d={`M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z`}/></svg>;
const actions = [
    {
        id: `read`,
        label: `Read files and docs`,
        risk: `safe`,
        icon: <InlineComponent/>
    },
    {
        id: `draft`,
        label: `Draft emails`,
        risk: `safe`,
        icon: <B1Component/>
    },
    {
        id: `crm`,
        label: `Update CRM records`,
        risk: `risky`,
        icon: <InlineComponent_1/>
    },
    {
        id: `send`,
        label: `Send emails`,
        risk: `risky`,
        icon: <B1Component/>
    },
    {
        id: `delete`,
        label: `Delete files`,
        risk: `destructive`,
        icon: <InlineComponent_2/>
    },
    {
        id: `spend`,
        label: `Spend money`,
        risk: `destructive`,
        icon: <InlineComponent_3/>
    }
];
const S = [
    {
        level: 1,
        pinned: [
            `spend`
        ]
    },
    {
        level: 2,
        pinned: [
            `spend`
        ]
    },
    {
        level: 2,
        pinned: [
            `spend`,
            `delete`
        ]
    },
    {
        level: 0,
        pinned: [
            `spend`,
            `delete`
        ]
    },
    {
        level: 1,
        pinned: [
            `spend`
        ]
    }
];
function CComponent() {
    let [level, setLevel] = n.useState(1);
    let [pinned, setPinned] = n.useState([
        `spend`
    ]);
    let oRef = n.useRef(true);
    let sRef = n.useRef(0);
    n.useEffect(()=>{
        let e = 0;
        let n = ()=>{
            if (oRef.current) {
                e = (e + 1) % S.length;
                setLevel(S[e].level);
                setPinned(S[e].pinned);
                sRef.current = window.setTimeout(n, 2400);
            }
        };
        sRef.current = window.setTimeout(n, 2000);
        return ()=>window.clearTimeout(sRef.current);
    }, []);
    let c = (isTrusted)=>{
        if (isTrusted && oRef.current) {
            oRef.current = false;
            window.clearTimeout(sRef.current);
        }
    };
    return <div className={`ad-demo`} onPointerDownCapture={(e)=>c(e.nativeEvent.isTrusted)} onKeyDownCapture={(e)=>c(e.nativeEvent.isTrusted)}><Component title={`Sales agent`} subtitle={`What it may do without asking you`} actions={actions} level={level} onLevelChange={setLevel} pinned={pinned} onPinnedChange={setPinned}/></div>;
}
export { CComponent as default };
