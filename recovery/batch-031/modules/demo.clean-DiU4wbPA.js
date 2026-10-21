import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = [
    {
        id: `todo`,
        label: `To do`,
        tone: `violet`
    },
    {
        id: `progress`,
        label: `In progress`,
        tone: `amber`
    },
    {
        id: `review`,
        label: `In review`,
        tone: `blue`
    },
    {
        id: `done`,
        label: `Done`,
        tone: `green`
    }
];
const a = (name)=>name.trim().split(/\s+/).slice(0, 2).map((e)=>e.charAt(0).toUpperCase()).join(``);
const o = (name)=>[
        ...name
    ].reduce((acc, item)=>(acc * 31 + item.charCodeAt(0)) % 360, 7);
function s(e, t, n, r) {
    let i = (e)=>{
        let t = e * Math.PI * 2 - Math.PI / 2;
        return `${(r + n * Math.cos(t)).toFixed(2)} ${(r + n * Math.sin(t)).toFixed(2)}`;
    };
    return `M ${i(e)} A ${n} ${n} 0 ${+(t - e > 0.5)} 1 ${i(t)}`;
}
function C1Component({ tone }) {
    let t = {
        stroke: `currentColor`,
        strokeWidth: 1.2,
        strokeLinecap: `round`,
        strokeLinejoin: `round`
    };
    return <svg width={`12`} height={`12`} viewBox={`0 0 12 12`} fill={`none`} aria-hidden={`true`}>{(tone === `gray` || tone === `violet`) && <circle cx={`6`} cy={`6`} r={`4.25`} {...t} strokeDasharray={`2.2 2.25`}/>}{tone === `amber` && <><circle cx={`6`} cy={`6`} r={`4.25`} {...t}/><path d={`M6 3.4a2.6 2.6 0 0 1 0 5.2V3.4Z`} fill={`currentColor`}/></>}{tone === `blue` && <><path d={`M1.2 6S3 2.7 6 2.7 10.8 6 10.8 6 9 9.3 6 9.3 1.2 6 1.2 6Z`} {...t}/><circle cx={`6`} cy={`6`} r={`1.4`} fill={`currentColor`}/></>}{tone === `green` && <><circle cx={`6`} cy={`6`} r={`4.25`} {...t}/><path d={`m4.1 6.1 1.3 1.3 2.5-2.7`} {...t}/></>}{tone === `red` && <><circle cx={`6`} cy={`6`} r={`4.25`} {...t}/><path d={`M6 3.8v2.6M6 8.2v.01`} {...t}/></>}</svg>;
}
const L1Component = ()=><svg width={`12`} height={`12`} viewBox={`0 0 12 12`} fill={`none`} aria-hidden={`true`}><path d={`M2.5 6h7M6.5 3l3 3-3 3`} stroke={`currentColor`} strokeWidth={`1.4`} strokeLinecap={`round`} strokeLinejoin={`round`}/></svg>;
const U1Component = ()=><svg width={`16`} height={`16`} viewBox={`0 0 16 16`} fill={`none`} aria-hidden={`true`}><circle className={`ui-pcc__ring`} cx={`8`} cy={`8`} r={`6.3`}/><circle className={`ui-pcc__disc`} cx={`8`} cy={`8`} r={`7`}/><path className={`ui-pcc__tick`} d={`m5.2 8.2 1.9 1.9 3.7-4`}/></svg>;
function D1Component({ member }) {
    return <span className={`ui-pcc__avatar`} style={{
        "--ui-pcc-hue": o(member.name)
    }}>{member.avatar ? <img src={member.avatar} alt={``}/> : a(member.name)}</span>;
}
function F1Component({ title, tasks, onTasksChange, statuses = i, status, onStatusChange, due, members = [], action, hint, trigger = `hover`, open, defaultOpen = false, onOpenChange, className }) {
    let C = n.useId();
    let [w, setW] = n.useState(defaultOpen);
    let E = open ?? w;
    let [te, setTe] = n.useState({});
    let [re, setRe] = n.useState();
    let O = tasks.map((e)=>({
            ...e,
            done: onTasksChange ? !!e.done : te[e.id] ?? !!e.done
        }));
    let length = O.filter((e)=>e.done).length;
    let A = statuses.find((e)=>e.id === (onStatusChange ? status : re ?? status)) ?? statuses[0];
    let [j, setJ] = n.useState(null);
    let [N, setN] = n.useState(null);
    let [F, setF] = n.useState(null);
    let [L, setL] = n.useState(false);
    let z = N ?? F;
    let B = (e)=>!z || e.assignee === z;
    let VRef = n.useRef(null);
    let HRef = n.useRef(0);
    let U = (e)=>{
        window.clearTimeout(HRef.current);
        if (e !== E) {
            if (!e) {
                setL(false);
                setJ(null);
                setN(null);
            }
            setW(e);
            onOpenChange?.(e);
        }
    };
    let W = (e, t)=>{
        window.clearTimeout(HRef.current);
        HRef.current = window.setTimeout(()=>U(e), t);
    };
    n.useEffect(()=>()=>window.clearTimeout(HRef.current), []);
    let G = trigger === `hover`;
    let onPointerEnter = (e)=>{
        if (G && e.pointerType === `mouse`) {
            W(true, 90);
        }
    };
    let onPointerLeave = (e)=>{
        if (G && e.pointerType === `mouse`) {
            W(false, 220);
        }
    };
    n.useEffect(()=>{
        if (!E) {
            return;
        }
        let e = (e)=>{
            if (!VRef.current?.contains(e.target)) {
                U(false);
            }
        };
        document.addEventListener(`pointerdown`, e);
        return ()=>document.removeEventListener(`pointerdown`, e);
    });
    let onKeyDown = (e)=>{
        if (e.key === `Escape` && E) {
            e.stopPropagation();
            if (L) {
                return setL(false);
            }
            U(false);
            VRef.current?.querySelector(`.ui-pcc__toggle`)?.focus({
                preventScroll: true
            });
        }
    };
    let K = (e)=>{
        let t = O.map((t)=>{
            if (t.id === e) {
                return {
                    ...t,
                    done: !t.done
                };
            }
            return t;
        });
        setTe(Object.fromEntries(t.map((e)=>[
                e.id,
                !!e.done
            ])));
        onTasksChange?.(t.map(({ id, label, done, assignee })=>({
                id,
                label,
                done,
                assignee
            })));
    };
    let se = (e)=>{
        setRe(e);
        onStatusChange?.(e);
        setL(false);
    };
    let q = O.find((e)=>e.id === j);
    let J = O.length - length;
    let Y = hint ?? (J === 0 ? `All done` : `${J} left`);
    let X = `rest`;
    if (q) {
        Y = q.assignee ? <>{q.done ? `Done by` : `Assigned to`}{` `}<b>{q.assignee}</b></> : q.done ? `Done` : `Nobody on it yet`;
        X = `task-${q.id}`;
    } else if (z) {
        let e = O.filter((e)=>e.assignee === z);
        Y = <><b>{z}</b>{` · `}{e.filter((e)=>e.done).length}{` of `}{e.length}{` `}{`done`}</>;
        X = `person-${z}`;
    }
    let r_1 = 12.5;
    let Q = O.length > 1 ? 0.055 : 0;
    let $ = 1 / Math.max(O.length, 1);
    return <div ref={VRef} className={[
        `ui-pcc`,
        className
    ].filter(Boolean).join(` `)} data-open={E ? `` : undefined} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} onKeyDown={onKeyDown}><style href={`ui-project-card-clean`} precedence={`default`}>{ee}</style><div className={`ui-pcc__card`}><div className={`ui-pcc__head`}><button type={`button`} className={`ui-pcc__toggle`} aria-expanded={E} aria-controls={`${C}-body`} aria-label={`${title}: ${length} of ${O.length} done, ${A?.label ?? ``}${due ? `, due ${due}` : ``}`} onClick={()=>U(!E)}/><span className={`ui-pcc__progress`} data-live={E ? `` : undefined}><svg width={32} height={32} viewBox={`0 0 32 32`} fill={`none`} aria-hidden={`true`} onPointerLeave={()=>setJ(null)}>{O.length === 1 ? <circle className={`ui-pcc__seg`} cx={16} cy={16} r={r_1} data-done={O[0].done ? `` : undefined} data-hot={j === O[0].id ? `` : undefined} onPointerEnter={()=>setJ(O[0].id)} onClick={()=>K(O[0].id)}/> : O.map((e, t)=><path key={e.id} className={`ui-pcc__seg`} d={s(t * $ + Q / 2, (t + 1) * $ - Q / 2, r_1, 16)} data-done={e.done ? `` : undefined} data-hot={j === e.id ? `` : undefined} data-dim={B(e) ? undefined : ``} onPointerEnter={()=>setJ(e.id)} onClick={()=>K(e.id)}/>)}</svg><span key={length} className={`ui-pcc__num`}>{length}</span></span><span className={`ui-pcc__titles`}><span className={`ui-pcc__name`}>{title}</span><span className={`ui-pcc__sub`}><button type={`button`} className={`ui-pcc__status`} data-tone={A?.tone ?? `gray`} aria-expanded={L} aria-controls={`${C}-status`} tabIndex={E ? 0 : -1} onClick={()=>setL((e)=>!e)}>{A?.icon ?? <C1Component tone={A?.tone ?? `gray`}/>}{A?.label}</button>{due && <span className={`ui-pcc__due`}><span className={`ui-pcc__due-word`}>{`Due `}</span>{due}</span>}</span></span>{members.length > 0 && <span className={`ui-pcc__people`} onPointerLeave={()=>setN(null)}>{members.map((e)=><button key={e.name} type={`button`} className={`ui-pcc__member`} aria-label={`Only ${e.name}'s subtasks`} aria-pressed={F === e.name} data-on={z === e.name ? `` : undefined} data-off={z && z !== e.name ? `` : undefined} tabIndex={E ? 0 : -1} onPointerEnter={(t)=>t.pointerType === `mouse` && setN(e.name)} onFocus={()=>setN(e.name)} onBlur={()=>setN(null)} onClick={()=>setF((t)=>{
                if (t === e.name) {
                    return null;
                }
                return e.name;
            })}><D1Component member={e}/></button>)}</span>}</div><div id={`${C}-body`} className={`ui-pcc__fold`} inert={!E}><div className={`ui-pcc__body`}><div id={`${C}-status`} className={`ui-pcc__fold ui-pcc__fold--status`} data-open={L ? `` : undefined} inert={!L}><div className={`ui-pcc__clip`}><div className={`ui-pcc__options`} role={`radiogroup`} aria-label={`Status`}>{statuses.map((e)=><button key={e.id} type={`button`} role={`radio`} aria-checked={e.id === A?.id} className={`ui-pcc__option`} data-tone={e.tone ?? `gray`} onClick={()=>se(e.id)}>{e.icon ?? <span className={`ui-pcc__dot`} aria-hidden={`true`}/>}{e.label}</button>)}</div></div></div>{O.length > 0 && <ul className={`ui-pcc__tasks`} onPointerLeave={()=>setJ(null)}>{O.map((e)=>{
        let t = members.find((t)=>t.name === e.assignee);
        return <li key={e.id}><button type={`button`} className={`ui-pcc__task`} role={`checkbox`} aria-checked={e.done} data-hot={j === e.id ? `` : undefined} data-dim={B(e) ? undefined : ``} onPointerEnter={(t)=>t.pointerType === `mouse` && setJ(e.id)} onFocus={()=>setJ(e.id)} onBlur={()=>setJ(null)} onClick={()=>K(e.id)}><U1Component/><span className={`ui-pcc__label`}>{e.label}</span>{t && <D1Component member={t}/>}</button></li>;
    })}</ul>}</div></div><div className={`ui-pcc__fold`} inert={!E}><div className={`ui-pcc__clip`}><div className={`ui-pcc__foot`}><span className={`ui-pcc__caption`} aria-live={`polite`}><span key={X}>{Y}</span></span>{action && <button type={`button`} className={`ui-pcc__action`} onClick={action.onClick}>{action.label}<L1Component/></button>}</div></div></div></div></div>;
}
var ee = `.ui-pcc{--ui-pcc-card: #ffffff;--ui-pcc-ink: rgba(0, 0, 0, 0.88);--ui-pcc-strong: #000000;--ui-pcc-text: rgba(0, 0, 0, 0.61);--ui-pcc-muted: rgba(0, 0, 0, 0.45);--ui-pcc-faint: rgba(0, 0, 0, 0.27);--ui-pcc-icon: rgba(0, 0, 0, 0.447);--ui-pcc-line: rgba(0, 0, 0, 0.06);--ui-pcc-fill: rgba(0, 0, 0, 0.06);--ui-pcc-wash: rgba(0, 0, 0, 0.03);--ui-pcc-ring: rgba(0, 0, 0, 0.08);--ui-pcc-ring-hot: rgba(0, 0, 0, 0.2);--ui-pcc-accent: rgba(0, 96, 226, 0.765);--ui-pcc-primary: rgba(0, 0, 0, 0.88);--ui-pcc-on-primary: #fcfcfc;--ui-pcc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-pcc-focus: rgba(0, 96, 226, 0.35);--ui-pcc-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-pcc-time: 520ms;box-sizing: border-box;width: 100%;max-width: 320px;container-type: inline-size;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-pcc-ink);text-align: left;-webkit-font-smoothing: antialiased}.ui-pcc *, .ui-pcc *::before, .ui-pcc *::after{box-sizing: border-box}:where(.ui-pcc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-pcc button:focus-visible{outline: 2px solid var(--ui-pcc-focus);outline-offset: 1px}:where(.ui-pcc) svg{display: block;flex: none}.ui-pcc b{font-weight: 500;color: var(--ui-pcc-ink)}.ui-pcc [data-tone="red"]{--ui-pcc-tag: #d93d42;--ui-pcc-tag-bg: rgba(229, 72, 77, 0.08)}.ui-pcc [data-tone="amber"]{--ui-pcc-tag: #a86f00;--ui-pcc-tag-bg: rgba(232, 162, 12, 0.1)}.ui-pcc [data-tone="green"]{--ui-pcc-tag: #1a9a52;--ui-pcc-tag-bg: rgba(26, 154, 82, 0.08)}.ui-pcc [data-tone="blue"]{--ui-pcc-tag: rgba(0, 96, 226, 0.9);--ui-pcc-tag-bg: rgba(0, 96, 226, 0.06)}.ui-pcc [data-tone="violet"]{--ui-pcc-tag: #5b5bd6;--ui-pcc-tag-bg: rgba(91, 91, 214, 0.08)}.ui-pcc [data-tone="gray"]{--ui-pcc-tag: rgba(0, 0, 0, 0.61);--ui-pcc-tag-bg: rgba(0, 0, 0, 0.05)}.ui-pcc__card{border-radius: 10px;background: var(--ui-pcc-card);box-shadow: var(--ui-pcc-shadow)}.ui-pcc__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows var(--ui-pcc-time) var(--ui-pcc-ease), opacity 260ms ease}.ui-pcc__fold > *{min-height: 0;overflow: hidden}.ui-pcc[data-open] > .ui-pcc__card > .ui-pcc__fold, .ui-pcc__fold--status[data-open]{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows var(--ui-pcc-time) var(--ui-pcc-ease), opacity 380ms ease 120ms}.ui-pcc__head{position: relative;display: flex;align-items: center;gap: 10px;padding: 12px}.ui-pcc__toggle{position: absolute;inset: 0;border-radius: 10px}.ui-pcc__head > :not(.ui-pcc__toggle){position: relative;pointer-events: none}.ui-pcc[data-open] :is(.ui-pcc__status, .ui-pcc__member), .ui-pcc__progress[data-live] .ui-pcc__seg{pointer-events: auto}.ui-pcc__progress{display: grid;flex: none;place-items: center;width: 32px;height: 32px}.ui-pcc__progress > *{grid-area: 1 / 1}.ui-pcc__seg{fill: none;stroke: var(--ui-pcc-ring);stroke-width: 3;stroke-linecap: round;cursor: pointer;transition: stroke 220ms ease, stroke-width 240ms var(--ui-pcc-ease), opacity 220ms ease}.ui-pcc__seg[data-done]{stroke: var(--ui-pcc-accent)}.ui-pcc__seg[data-hot]{stroke-width: 4.25;stroke: var(--ui-pcc-ring-hot)}.ui-pcc__seg[data-done][data-hot]{stroke: var(--ui-pcc-accent)}.ui-pcc__seg[data-dim]{opacity: 0.3}.ui-pcc__num{font-size: 12px;font-weight: 500;line-height: 1;color: var(--ui-pcc-strong);font-variant-numeric: tabular-nums;pointer-events: none;animation: ui-pcc-num 320ms var(--ui-pcc-ease) both}.ui-pcc__titles{display: grid;grid-template-columns: minmax(0, 1fr);flex: 1;min-width: 0}.ui-pcc__name{overflow: hidden;font-size: 13px;line-height: 20px;font-weight: 500;color: var(--ui-pcc-strong);white-space: nowrap;text-overflow: ellipsis}.ui-pcc__sub{display: flex;align-items: center;gap: 6px;min-width: 0;height: 20px;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-pcc-muted);white-space: nowrap}.ui-pcc__status{display: inline-flex;flex: none;align-items: center;gap: 5px;height: 20px;padding: 0 6px 0 5px;border-radius: 5px;background: var(--ui-pcc-tag-bg);font-size: 12px;line-height: 16px;font-weight: 500;color: var(--ui-pcc-tag);transition: box-shadow 160ms ease}.ui-pcc[data-open] .ui-pcc__status:hover, .ui-pcc__status[aria-expanded="true"]{box-shadow: inset 0 0 0 0.5px color-mix(in srgb, var(--ui-pcc-tag) 35%, transparent)}.ui-pcc__due{min-width: 0;overflow: hidden;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-pcc__people{display: flex;flex: none}.ui-pcc__member{position: relative;border-radius: 50%;transition: transform 240ms var(--ui-pcc-ease), opacity 220ms ease}.ui-pcc__member + .ui-pcc__member{margin-left: -5px}.ui-pcc__member[data-on]{z-index: 1;transform: scale(1.1)}.ui-pcc__member[data-off]{opacity: 0.4}.ui-pcc__member[aria-pressed="true"] .ui-pcc__avatar{box-shadow: 0 0 0 1.5px var(--ui-pcc-card), 0 0 0 2.5px var(--ui-pcc-accent)}.ui-pcc__avatar{display: grid;flex: none;place-items: center;width: 20px;height: 20px;overflow: hidden;border-radius: 50%;background: hsl(var(--ui-pcc-hue) 60% 92%);box-shadow: 0 0 0 1.5px var(--ui-pcc-card);font-size: 9px;font-weight: 500;line-height: 1;color: hsl(var(--ui-pcc-hue) 40% 36%);transition: box-shadow 200ms ease}.ui-pcc__avatar img{width: 100%;height: 100%;object-fit: cover}.ui-pcc__body{padding: 0 12px}.ui-pcc__options{display: flex;gap: 4px;margin: -2px -12px 0;padding: 3px 12px 12px;overflow-x: auto;scrollbar-width: none}.ui-pcc__options::-webkit-scrollbar{display: none}.ui-pcc__option{display: inline-flex;flex: none;align-items: center;gap: 5px;height: 24px;padding: 2px 7px 2px 6px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-pcc-line);font-size: 12px;line-height: 16px;font-weight: 500;color: var(--ui-pcc-text);white-space: nowrap;transition: background-color 120ms ease-out, color 120ms ease-out}.ui-pcc__option svg{color: var(--ui-pcc-tag)}.ui-pcc__dot{flex: none;width: 6px;height: 6px;border-radius: 1.5px;background: var(--ui-pcc-tag)}.ui-pcc__option:hover{background: var(--ui-pcc-wash);color: var(--ui-pcc-ink)}.ui-pcc__option[aria-checked="true"]{background: var(--ui-pcc-fill);color: var(--ui-pcc-ink)}.ui-pcc__tasks{margin: 0;padding: 6px 0;border-top: 0.5px solid var(--ui-pcc-line);list-style: none}.ui-pcc__task{display: flex;align-items: center;gap: 10px;width: calc(100% + 12px);height: 32px;margin: 0 -6px;padding: 0 6px;border-radius: 6px;color: var(--ui-pcc-ink);transition: background-color 90ms ease-out, color 200ms ease, opacity 220ms ease}.ui-pcc__task[data-hot]{background: var(--ui-pcc-wash)}.ui-pcc__task[data-dim]{opacity: 0.35}.ui-pcc__label{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-pcc__task .ui-pcc__avatar{width: 18px;height: 18px;font-size: 8px;opacity: 0;transform: translateX(4px);transition: opacity 200ms ease, transform 240ms var(--ui-pcc-ease)}.ui-pcc__task:is([data-hot], :focus-visible) .ui-pcc__avatar{opacity: 1;transform: none}.ui-pcc__ring{fill: none;stroke: var(--ui-pcc-faint);stroke-width: 1.1;transition: stroke 160ms ease}.ui-pcc__task[data-hot] .ui-pcc__ring{stroke: var(--ui-pcc-icon)}.ui-pcc__disc{fill: var(--ui-pcc-accent);transform-origin: 8px 8px;transform: scale(0);transition: transform 340ms var(--ui-pcc-ease)}.ui-pcc__tick{fill: none;stroke: #ffffff;stroke-width: 1.5;stroke-linecap: round;stroke-linejoin: round;stroke-dasharray: 9;stroke-dashoffset: 9;transition: stroke-dashoffset 280ms var(--ui-pcc-ease) 80ms}.ui-pcc__task[aria-checked="true"] .ui-pcc__disc{transform: scale(1)}.ui-pcc__task[aria-checked="true"] .ui-pcc__tick{stroke-dashoffset: 0}.ui-pcc__task[aria-checked="true"]{color: var(--ui-pcc-muted)}.ui-pcc__foot{display: flex;align-items: center;gap: 8px;height: 44px;padding: 0 8px 0 12px;border-top: 0.5px solid var(--ui-pcc-line)}.ui-pcc__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-pcc-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-pcc__caption > span{display: inline-block;animation: ui-pcc-in 280ms var(--ui-pcc-ease) both}.ui-pcc__action{display: inline-flex;align-items: center;gap: 4px;flex: none;height: 28px;padding: 0 7px 0 10px;border-radius: 6px;background: var(--ui-pcc-primary);font-size: 13px;line-height: 20px;font-weight: 500;color: var(--ui-pcc-on-primary);white-space: nowrap;transition: opacity 160ms ease}.ui-pcc__action:hover{opacity: 0.9}.ui-pcc__action svg{transition: transform 220ms var(--ui-pcc-ease)}.ui-pcc__action:hover svg{transform: translateX(2px)}@keyframes ui-pcc-in{from{opacity: 0;transform: translateY(3px)}}@keyframes ui-pcc-num{from{opacity: 0;transform: scale(0.8)}}@container (max-width: 290px){.ui-pcc__due-word{display: none}.ui-pcc__member + .ui-pcc__member{margin-left: -8px}.ui-pcc__head{gap: 8px;padding: 10px}.ui-pcc__body{padding: 0 10px}.ui-pcc__sub{gap: 4px}.ui-pcc__status{padding: 0 5px 0 4px}.ui-pcc__options{margin: -2px -10px 0;padding: 3px 10px 10px}.ui-pcc__option{padding: 2px 6px}.ui-pcc__dot{display: none}.ui-pcc__foot{padding: 0 8px 0 10px}}@media (pointer: coarse){.ui-pcc__task{height: 38px}.ui-pcc__task .ui-pcc__avatar{opacity: 1;transform: none}.ui-pcc__option{height: 32px;padding: 0 7px 0 6px}.ui-pcc__foot{height: 52px}.ui-pcc__action{height: 34px}}@media (prefers-reduced-motion: reduce){.ui-pcc *, .ui-pcc *::before, .ui-pcc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-pcc{--ui-pcc-card: #1c1c1e;--ui-pcc-ink: rgba(255, 255, 255, 0.9);--ui-pcc-strong: #ffffff;--ui-pcc-text: rgba(255, 255, 255, 0.62);--ui-pcc-muted: rgba(255, 255, 255, 0.46);--ui-pcc-faint: rgba(255, 255, 255, 0.3);--ui-pcc-icon: rgba(255, 255, 255, 0.5);--ui-pcc-line: rgba(255, 255, 255, 0.08);--ui-pcc-fill: rgba(255, 255, 255, 0.08);--ui-pcc-wash: rgba(255, 255, 255, 0.04);--ui-pcc-ring: rgba(255, 255, 255, 0.1);--ui-pcc-ring-hot: rgba(255, 255, 255, 0.26);--ui-pcc-accent: #4d8dff;--ui-pcc-primary: rgba(255, 255, 255, 0.9);--ui-pcc-on-primary: #1c1c1e;--ui-pcc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-pcc-focus: rgba(77, 141, 255, 0.5)}:where(.dark, [data-theme="dark"]) .ui-pcc__avatar{background: hsl(var(--ui-pcc-hue) 26% 26%);color: hsl(var(--ui-pcc-hue) 60% 82%)}:where(.dark, [data-theme="dark"]) .ui-pcc [data-tone="red"]{--ui-pcc-tag: #ff8a8d;--ui-pcc-tag-bg: rgba(229, 72, 77, 0.14)}:where(.dark, [data-theme="dark"]) .ui-pcc [data-tone="amber"]{--ui-pcc-tag: #f5c264;--ui-pcc-tag-bg: rgba(232, 162, 12, 0.14)}:where(.dark, [data-theme="dark"]) .ui-pcc [data-tone="green"]{--ui-pcc-tag: #5fd394;--ui-pcc-tag-bg: rgba(26, 154, 82, 0.14)}:where(.dark, [data-theme="dark"]) .ui-pcc [data-tone="blue"]{--ui-pcc-tag: #8fb6ff;--ui-pcc-tag-bg: rgba(77, 141, 255, 0.14)}:where(.dark, [data-theme="dark"]) .ui-pcc [data-tone="violet"]{--ui-pcc-tag: #ababf5;--ui-pcc-tag-bg: rgba(91, 91, 214, 0.18)}:where(.dark, [data-theme="dark"]) .ui-pcc [data-tone="gray"]{--ui-pcc-tag: rgba(255, 255, 255, 0.62);--ui-pcc-tag-bg: rgba(255, 255, 255, 0.08)}`;
const tasks = [
    {
        id: `welcome`,
        label: `Welcome screen`,
        done: true,
        assignee: `Mara`
    },
    {
        id: `workspace`,
        label: `Workspace setup`,
        done: true,
        assignee: `Jonas`
    },
    {
        id: `invite`,
        label: `Invite teammates`,
        done: true,
        assignee: `Mara`
    },
    {
        id: `checklist`,
        label: `First-run checklist`,
        assignee: `Priya`
    },
    {
        id: `emails`,
        label: `Lifecycle emails`,
        assignee: `Jonas`
    }
];
const members = [
    {
        name: `Mara`
    },
    {
        name: `Jonas`
    },
    {
        name: `Priya`
    }
];
function HComponent() {
    let [open, setOpen] = n.useState(false);
    let iRef = n.useRef(false);
    n.useEffect(()=>{
        let e = ()=>{
            if (!iRef.current) {
                setOpen((e)=>!e);
            }
        };
        let n = 0;
        let r = window.setTimeout(()=>{
            e();
            n = window.setInterval(e, 3400);
        }, 700);
        return ()=>{
            window.clearTimeout(r);
            window.clearInterval(n);
        };
    }, []);
    let a = ()=>iRef.current = true;
    return <div className={`pc-demo`} onPointerEnter={a} onPointerDownCapture={a} onKeyDownCapture={a} onFocusCapture={a}><F1Component title={`Onboarding flow`} tasks={tasks} status={`progress`} due={`Oct 24`} members={members} action={{
        label: `Open`,
        onClick: ()=>{}
    }} open={open} onOpenChange={setOpen}/></div>;
}
export { HComponent as default };
