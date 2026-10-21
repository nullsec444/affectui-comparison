import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = [
    `blue`,
    `violet`,
    `amber`,
    `green`,
    `red`,
    `gray`
];
const a = /\{([A-Za-z0-9_-]+)\}/g;
const o = (body)=>{
    let t = [];
    let n = 0;
    for (let r of body.matchAll(a)){
        if (r.index > n) {
            t.push({
                text: body.slice(n, r.index)
            });
        }
        let i = r.index + r[0].length;
        let tail = /^[.,;:!?)\]"'’…]+/.exec(body.slice(i))?.[0] ?? ``;
        t.push({
            name: r[1],
            tail
        });
        n = i + tail.length;
    }
    if (n < body.length) {
        t.push({
            text: body.slice(n)
        });
    }
    return t;
};
const s = (body)=>[
        ...new Set([
            ...body.matchAll(a)
        ].map((e)=>e[1]))
    ];
const c = (body, values)=>body.replace(a, (e, n)=>{
        if (values[n]?.trim()) {
            return values[n];
        }
        return e;
    });
const l = (e)=>Math.max(1, Math.round(e.length / 4));
const u = (e)=>{
    let t = {};
    for (let n of s(e.body)){
        t[n] = e.variables?.[n]?.default ?? ``;
    }
    return t;
};
const d = (e)=>1 - (1 - e) ** 4;
const f = ()=>typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function useP(e, t) {
    let [r, setR] = n.useState(e);
    let aRef = n.useRef(e);
    n.useEffect(()=>{
        let aRef_current = aRef.current;
        if (f() || aRef_current === e) {
            aRef.current = e;
            setR(e);
            return;
        }
        let r = performance.now();
        let o = 0;
        let s = (c)=>{
            let l = Math.min(1, (c - r) / t);
            aRef.current = aRef_current + (e - aRef_current) * d(l);
            setR(aRef.current);
            if (l < 1) {
                o = requestAnimationFrame(s);
            }
        };
        o = requestAnimationFrame(s);
        return ()=>cancelAnimationFrame(o);
    }, [
        e,
        t
    ]);
    return r;
}
function M1Component({ id, tone, children }) {
    let aRef = n.useRef({
        id,
        tone,
        node: children
    });
    let [o, setO] = n.useState(id);
    let [c, setC] = n.useState(null);
    if (o !== id) {
        setO(id);
        setC(aRef.current);
    }
    aRef.current = {
        id,
        tone,
        node: children
    };
    n.useEffect(()=>{
        if (!c) {
            return;
        }
        let e = window.setTimeout(()=>setC(null), 260);
        return ()=>window.clearTimeout(e);
    }, [
        c
    ]);
    return <span className={`ui-plic__swap`}>{c && <span key={`out-${c.id}`} className={`ui-plic__swap-item`} data-out={``} data-tone={c.tone} aria-hidden={`true`}>{c.node}</span>}<span key={id} className={`ui-plic__swap-item`} data-tone={tone}>{children}</span></span>;
}
const h = {
    stroke: `currentColor`,
    strokeWidth: 1.1,
    strokeLinecap: `round`,
    strokeLinejoin: `round`
};
const G1Component = ()=><svg width={`16`} height={`16`} viewBox={`0 0 16 16`} fill={`none`} aria-hidden={`true`}><circle cx={`7.25`} cy={`7.25`} r={`4.25`} {...h}/><path d={`m10.5 10.5 3 3`} {...h}/></svg>;
const EeComponent = ()=><svg width={`16`} height={`16`} viewBox={`0 0 16 16`} fill={`none`} aria-hidden={`true`}><rect x={`5.5`} y={`5.5`} width={`8`} height={`8`} rx={`1.75`} {...h}/><path d={`M10.5 5.5V4.25A1.75 1.75 0 0 0 8.75 2.5h-4.5A1.75 1.75 0 0 0 2.5 4.25v4.5c0 .97.78 1.75 1.75 1.75H5.5`} {...h}/></svg>;
const TeComponent = ()=><svg width={`16`} height={`16`} viewBox={`0 0 16 16`} fill={`none`} aria-hidden={`true`}><path d={`m3.5 8.25 3 3 6-6.5`} {...h} strokeWidth={1.4}/></svg>;
const NeComponent = ()=><svg width={`16`} height={`16`} viewBox={`0 0 16 16`} fill={`none`} aria-hidden={`true`}><path d={`M3.5 8h9M9 4.5 12.5 8 9 11.5`} {...h} strokeWidth={1.25}/></svg>;
function Component({ template, tone, values, flash, idBase, onChange, onHint, onEnter, out }) {
    let p = o(template.body);
    let m = s(template.body);
    let length = m.filter((e)=>values[e]?.trim()).length;
    let g = (name)=>{
        if (flash && flash.name === name) {
            if (flash.n % 2) {
                return `a`;
            }
            return `b`;
        }
    };
    return <div className={`ui-plic__panel`} data-out={out ? `` : undefined} aria-hidden={out || undefined} inert={out}><div className={`ui-plic__panel-head`}><span className={`ui-plic__panel-title`}>{template.title}</span>{template.category && <span className={`ui-plic__tag`} data-tone={tone}>{template.category}</span>}{m.length > 0 && <span className={`ui-plic__count`}><span className={`ui-plic__bars`} aria-hidden={`true`}>{m.map((e)=><span key={e} className={`ui-plic__bar`} data-on={values[e]?.trim() ? `` : undefined}/>)}</span>{length}{` of `}{m.length}{` filled`}</span>}</div><p className={`ui-plic__body`}>{p.map((t, a)=>{
        if (`text` in t) {
            return <n.Fragment key={a}>{t.text}</n.Fragment>;
        }
        return <span key={a} className={`ui-plic__glue`}><span className={`ui-plic__token`} data-filled={values[t.name]?.trim() ? `` : undefined} data-flash={g(t.name)} onPointerEnter={(e)=>e.pointerType === `mouse` && onHint?.(t.name)} onPointerLeave={(e)=>e.pointerType === `mouse` && onHint?.(null)}><span className={`ui-plic__sizer`} aria-hidden={`true`}>{values[t.name] || t.name}</span><input className={`ui-plic__input`} data-var={t.name} size={1} value={values[t.name] ?? ``} placeholder={t.name} aria-label={template.variables?.[t.name]?.description ? `${t.name} – ${template.variables[t.name].description}` : t.name} spellCheck={false} autoComplete={`off`} onChange={(e)=>onChange?.(t.name, e.target.value)} onFocus={()=>onHint?.(t.name)} onBlur={()=>onHint?.(null)} onKeyDown={(e)=>{
            if (e.key === `Enter`) {
                e.preventDefault();
                onEnter?.(t.name);
            }
        }}/></span>{t.tail}</span>;
    })}</p><div className={`ui-plic__label`} id={`${idBase}-preview`}>{`Preview`}</div><div className={`ui-plic__preview`} aria-labelledby={`${idBase}-preview`} role={`region`}>{p.map((e, t)=>{
        if (`text` in e) {
            return <n.Fragment key={t}>{e.text}</n.Fragment>;
        }
        return <span key={t} className={`ui-plic__glue`}>{values[e.name]?.trim() ? <span className={`ui-plic__fill`} data-flash={g(e.name)}>{values[e.name]}</span> : <span className={`ui-plic__hole`}>{`{${e.name}}`}</span>}{e.tail}</span>;
    })}</div></div>;
}
function V1Component({ templates, value, defaultValue, onSelect, onUse, onCopy, title = `Prompts`, useLabel = `Use prompt`, className }) {
    let idBase = n.useId();
    let [S, setS] = n.useState(defaultValue ?? templates[0]?.id);
    let ae = value ?? S;
    let C = templates.find((e)=>e.id === ae) ?? templates[0];
    let [w, setW] = n.useState(``);
    let [oe, setOe] = n.useState({});
    let E = (e)=>({
            ...u(e),
            ...oe[e.id]
        });
    let [flash, setFlash] = n.useState(null);
    let [O, setO] = n.useState(null);
    let [le, setLe] = n.useState(false);
    let [j, setJ] = n.useState(null);
    let [N, setN] = n.useState(``);
    let F = (()=>{
        let t = new Map;
        for (let n of templates){
            if (n.category && !t.has(n.category)) {
                t.set(n.category, i[t.size % i.length]);
            }
        }
        return (e)=>e.tone ?? t.get(e.category ?? ``) ?? `gray`;
    })();
    let I = w.trim().toLowerCase();
    let L = I ? templates.filter((e)=>[
            e.title,
            e.category ?? ``,
            e.body
        ].some((e)=>e.toLowerCase().includes(I))) : templates;
    let R = (e)=>{
        if (e !== ae) {
            if (value === undefined) {
                setS(e);
            }
            onSelect?.(e);
        }
    };
    let [z, setZ] = n.useState(null);
    let [V, setV] = n.useState(C?.id);
    if (C && V !== C.id) {
        if (V && !f()) {
            setZ({
                id: V,
                key: Date.now()
            });
        }
        setV(C.id);
        setO(null);
        setFlash(null);
    }
    n.useEffect(()=>{
        if (!z) {
            return;
        }
        let e = window.setTimeout(()=>setZ(null), 260);
        return ()=>window.clearTimeout(e);
    }, [
        z
    ]);
    let H = z ? templates.find((e)=>e.id === z.id) : undefined;
    let URef = n.useRef(null);
    let WRef = n.useRef(new Map);
    let [G, setG] = n.useState({
        y: 0,
        h: 0,
        on: false,
        moved: false
    });
    let fe = L.map((e)=>e.id).join(`|`);
    n.useLayoutEffect(()=>{
        let e = ()=>{
            let e = C ? WRef.current.get(C.id) : undefined;
            setG((t)=>{
                if (e) {
                    return {
                        y: e.offsetTop,
                        h: e.offsetHeight,
                        on: true,
                        moved: t.on
                    };
                }
                return {
                    ...t,
                    on: false,
                    moved: false
                };
            });
        };
        e();
        let URef_current = URef.current;
        if (!URef_current || typeof ResizeObserver > `u`) {
            return;
        }
        let n = new ResizeObserver(e);
        n.observe(URef_current);
        return ()=>n.disconnect();
    }, [
        C?.id,
        fe
    ]);
    let onKeyDown = (e)=>{
        if (!L.length) {
            return;
        }
        let t = L.findIndex((e)=>e.id === C?.id);
        let n = -1;
        if (e.key === `ArrowDown`) {
            n = t < 0 ? 0 : Math.min(L.length - 1, t + 1);
        } else if (e.key === `ArrowUp`) {
            n = t < 0 ? L.length - 1 : Math.max(0, t - 1);
        } else if (e.key === `Home`) {
            n = 0;
        } else if (e.key === `End`) {
            n = L.length - 1;
        } else {
            return;
        }
        e.preventDefault();
        R(L[n].id);
        WRef.current.get(L[n].id)?.focus();
    };
    let values = C ? E(C) : {};
    let q = C ? s(C.body) : [];
    let J = q.filter((e)=>!values[e]?.trim());
    let Y = !!C && J.length === 0;
    let X = C ? c(C.body, values) : ``;
    let me = useP(l(X), 420);
    let onChange = (e, t)=>{
        if (!C) {
            return;
        }
        let n = C.id;
        setOe((r)=>({
                ...r,
                [n]: {
                    ...E(C),
                    ...r[n],
                    [e]: t
                }
            }));
        setFlash((t)=>({
                name: e,
                n: (t?.n ?? 0) + 1
            }));
    };
    let [ge, setGe] = n.useState(0);
    let veRef = n.useRef(Y);
    let yeRef = n.useRef(C?.id);
    n.useEffect(()=>{
        if (Y && !veRef.current && yeRef.current === C?.id) {
            setGe((e)=>e + 1);
            setN(`All variables filled`);
        }
        veRef.current = Y;
        yeRef.current = C?.id;
    }, [
        Y,
        C?.id
    ]);
    let beRef = n.useRef(null);
    let onEnter = (e)=>{
        let t = [
            ...beRef.current?.querySelectorAll(`.ui-plic__panel:not([data-out]) .ui-plic__input`) ?? []
        ];
        let n = t.findIndex((t)=>t.dataset.var === e);
        let r = [
            ...t.slice(n + 1),
            ...t.slice(0, n)
        ].find((e)=>!e.value.trim());
        if (r) {
            r.focus();
        } else if (Y) {
            onClick_1();
        }
    };
    let onClick = async ()=>{
        try {
            await navigator.clipboard?.writeText(X);
        } catch  {}
        onCopy?.(X);
        setJ({
            id: Date.now(),
            kind: `copied`
        });
        setN(`Prompt copied`);
    };
    let onClick_1 = ()=>{
        if (Y && C) {
            onUse?.(X, C, values);
            setJ({
                id: Date.now(),
                kind: `used`
            });
            setN(`${C.title} used`);
        }
    };
    n.useEffect(()=>{
        if (!j) {
            return;
        }
        let e = window.setTimeout(()=>setJ(null), 1800);
        return ()=>window.clearTimeout(e);
    }, [
        j
    ]);
    n.useEffect(()=>{
        if (!N) {
            return;
        }
        let e = window.setTimeout(()=>setN(``), 2000);
        return ()=>window.clearTimeout(e);
    }, [
        N
    ]);
    let Z = <>{`~`}{Math.round(me)}{` tokens`}</>;
    let id = `tokens`;
    let tone;
    let $ = O && q.includes(O) ? O : null;
    if (j) {
        Z = j.kind === `copied` ? `Copied to clipboard` : `Prompt sent`;
        id = `${j.kind}-${j.id}`;
        tone = `ok`;
    } else if ($) {
        let e = C?.variables?.[$]?.description;
        Z = <><b>{$}</b>{` · `}{e ?? (values[$]?.trim() ? `filled` : `fill this in`)}</>;
        id = `hint-${$}`;
    } else {
        if (le && !Y) {
            Z = `Fill ${J.length} more to use`;
            id = `missing`;
        }
    }
    return <div ref={beRef} className={[
        `ui-plic`,
        className
    ].filter(Boolean).join(` `)} role={`group`} aria-labelledby={`${idBase}-title`}><style href={`ui-prompt-library-clean`} precedence={`default`}>{re}</style><div className={`ui-plic__card`}><div className={`ui-plic__cols`}><div className={`ui-plic__side`}><div className={`ui-plic__side-head`}><span id={`${idBase}-title`} className={`ui-plic__title`}>{title}</span><span className={`ui-plic__total`}>{templates.length}</span></div><label className={`ui-plic__search`}><G1Component/><input type={`search`} value={w} placeholder={`Search templates`} aria-label={`Search templates`} aria-controls={`${idBase}-list`} onChange={(e)=>setW(e.target.value)} onKeyDown={(e)=>{
        if (e.key === `ArrowDown` && L.length) {
            e.preventDefault();
            let t = L.find((e)=>e.id === C?.id) ?? L[0];
            R(t.id);
            WRef.current.get(t.id)?.focus();
        } else {
            if (e.key === `Escape` && w) {
                e.preventDefault();
                setW(``);
            }
        }
    }}/></label><div ref={URef} id={`${idBase}-list`} className={`ui-plic__list`} role={`listbox`} aria-label={`Templates`} onKeyDown={onKeyDown}><span className={`ui-plic__glide`} aria-hidden={`true`} data-on={G.on ? `` : undefined} data-moved={G.moved ? `` : undefined} style={{
        transform: `translateY(${G.y}px)`,
        height: G.h
    }}/>{L.map((e)=>{
        let t = e.id === C?.id;
        let n = t || !L.some((e)=>e.id === C?.id) && e === L[0];
        return <div key={e.id} ref={(t)=>{
            if (t) {
                WRef.current.set(e.id, t);
            } else {
                WRef.current.delete(e.id);
            }
        }} className={`ui-plic__option`} role={`option`} aria-selected={t} tabIndex={n ? 0 : -1} onClick={()=>R(e.id)} onKeyDown={(t)=>{
            if (t.key === `Enter` || t.key === ` `) {
                t.preventDefault();
                R(e.id);
            }
        }}><span className={`ui-plic__option-title`}>{e.title}</span>{e.category && <span className={`ui-plic__tag`} data-tone={F(e)}>{e.category}</span>}</div>;
    })}{L.length === 0 && <div className={`ui-plic__empty`}>{`No templates match`}</div>}</div></div><div className={`ui-plic__main`}>{H && <Component key={`out-${z.key}`} template={H} tone={F(H)} values={E(H)} flash={null} idBase={`${idBase}-out`} out/>}{C && <Component key={C.id} template={C} tone={F(C)} values={values} flash={flash} idBase={idBase} onChange={onChange} onHint={setO} onEnter={onEnter}/>}</div></div><div className={`ui-plic__foot`}><span className={`ui-plic__caption`}><M1Component id={id} tone={tone}>{Z}</M1Component></span><button type={`button`} className={`ui-plic__copy`} onClick={onClick} aria-label={`Copy prompt`} disabled={!C}><span key={j?.kind === `copied` ? `done` : `copy`} className={`ui-plic__copy-icon`} data-done={j?.kind === `copied` ? `` : undefined}>{j?.kind === `copied` ? <TeComponent/> : <EeComponent/>}</span><span className={`ui-plic__copy-text`}>{`Copy`}</span></button><button type={`button`} className={`ui-plic__use`} aria-disabled={!Y} data-pulse={ge ? ge % 2 ? `a` : `b` : undefined} onClick={onClick_1} onPointerEnter={()=>setLe(true)} onPointerLeave={()=>setLe(false)} onFocus={()=>setLe(true)} onBlur={()=>setLe(false)}>{useLabel}<NeComponent/></button></div></div><span className={`ui-plic__sr`} role={`status`} aria-live={`polite`}>{N}</span></div>;
}
var re = `.ui-plic{--ui-plic-card: #ffffff;--ui-plic-ink: rgba(0, 0, 0, 0.88);--ui-plic-strong: #000000;--ui-plic-text: rgba(0, 0, 0, 0.61);--ui-plic-muted: rgba(0, 0, 0, 0.45);--ui-plic-faint: rgba(0, 0, 0, 0.27);--ui-plic-icon: rgba(0, 0, 0, 0.447);--ui-plic-line: rgba(0, 0, 0, 0.06);--ui-plic-line-strong: rgba(0, 0, 0, 0.1);--ui-plic-wash: rgba(0, 0, 0, 0.03);--ui-plic-well: rgba(0, 0, 0, 0.025);--ui-plic-fill: rgba(0, 0, 0, 0.06);--ui-plic-accent: rgba(0, 96, 226, 0.765);--ui-plic-accent-bg: rgba(0, 96, 226, 0.05);--ui-plic-pulse: rgba(0, 0, 0, 0.2);--ui-plic-accent-flash: rgba(0, 96, 226, 0.16);--ui-plic-on-ink: #fcfcfc;--ui-plic-ok: #1a9a52;--ui-plic-blue: #1f5fc4;--ui-plic-blue-bg: rgba(0, 96, 226, 0.07);--ui-plic-violet: #5b45b8;--ui-plic-violet-bg: rgba(91, 91, 214, 0.08);--ui-plic-amber: #93600a;--ui-plic-amber-bg: rgba(232, 162, 12, 0.1);--ui-plic-green: #17804a;--ui-plic-green-bg: rgba(26, 154, 82, 0.08);--ui-plic-red: #c0363b;--ui-plic-red-bg: rgba(229, 72, 77, 0.08);--ui-plic-gray: rgba(0, 0, 0, 0.61);--ui-plic-gray-bg: rgba(0, 0, 0, 0.05);--ui-plic-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-plic-focus: rgba(0, 96, 226, 0.35);--ui-plic-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;width: 100%;max-width: 640px;min-width: 0;container-type: inline-size;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-plic-ink);text-align: left;-webkit-font-smoothing: antialiased}.ui-plic *, .ui-plic *::before, .ui-plic *::after{box-sizing: border-box}:where(.ui-plic) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-plic) input{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;outline: none}.ui-plic button:focus-visible, .ui-plic__option:focus-visible{outline: 2px solid var(--ui-plic-focus);outline-offset: 1px}:where(.ui-plic) svg{display: block;flex: none}.ui-plic b{font-weight: 500;color: var(--ui-plic-ink)}.ui-plic p{margin: 0}.ui-plic__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-plic__card{overflow: hidden;border-radius: 10px;background: var(--ui-plic-card);box-shadow: var(--ui-plic-shadow)}.ui-plic__cols{display: grid;grid-template-columns: 220px minmax(0, 1fr)}.ui-plic__side{min-width: 0;padding: 12px 8px 8px;border-right: 0.5px solid var(--ui-plic-line)}.ui-plic__side-head{display: flex;align-items: center;gap: 6px;height: 20px;padding: 0 8px}.ui-plic__title{overflow: hidden;font-weight: 500;color: var(--ui-plic-strong);white-space: nowrap;text-overflow: ellipsis}.ui-plic__total{font-size: 12px;line-height: 16px;color: var(--ui-plic-faint);font-variant-numeric: tabular-nums}.ui-plic__search{display: flex;align-items: center;gap: 6px;height: 28px;margin-top: 10px;padding: 0 8px 0 6px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-plic-line-strong);color: var(--ui-plic-icon);cursor: text;transition: box-shadow 160ms ease}.ui-plic__search:hover{box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.16)}.ui-plic__search:focus-within{outline: 2px solid var(--ui-plic-focus);outline-offset: 1px}.ui-plic__search input{flex: 1;min-width: 0;height: 100%;font-size: 13px;color: var(--ui-plic-ink);caret-color: var(--ui-plic-accent);-webkit-appearance: none;appearance: none}.ui-plic__search input::placeholder{color: var(--ui-plic-faint)}.ui-plic__search input::-webkit-search-cancel-button{-webkit-appearance: none}.ui-plic__list{position: relative;isolation: isolate;display: flex;flex-direction: column;gap: 2px;margin-top: 8px}.ui-plic__glide{position: absolute;top: 0;left: 0;right: 0;z-index: -1;border-radius: 6px;background: var(--ui-plic-fill);opacity: 0;pointer-events: none;transition: opacity 140ms ease}.ui-plic__glide[data-on]{opacity: 1}.ui-plic__glide[data-moved]{transition: transform 90ms ease-out, height 90ms ease-out, opacity 140ms ease}.ui-plic__option{position: relative;display: flex;align-items: center;gap: 8px;height: 32px;padding: 0 6px 0 8px;border-radius: 6px;color: var(--ui-plic-text);cursor: pointer;user-select: none;transition: color 140ms ease;-webkit-tap-highlight-color: transparent}.ui-plic__option::before{content: "";position: absolute;inset: 0;z-index: -1;border-radius: inherit;transition: background-color 140ms ease}.ui-plic__option:hover:not([aria-selected="true"])::before{background: var(--ui-plic-wash)}.ui-plic__option:hover, .ui-plic__option[aria-selected="true"]{color: var(--ui-plic-ink)}.ui-plic__option-title{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-plic__empty{height: 32px;padding: 0 8px;line-height: 32px;color: var(--ui-plic-muted)}.ui-plic__tag{flex: none;height: 18px;padding: 0 6px;border-radius: 5px;font-size: 11px;font-weight: 500;line-height: 18px;white-space: nowrap;color: var(--ui-plic-gray);background: var(--ui-plic-gray-bg)}.ui-plic__tag[data-tone="blue"]{color: var(--ui-plic-blue);background: var(--ui-plic-blue-bg)}.ui-plic__tag[data-tone="violet"]{color: var(--ui-plic-violet);background: var(--ui-plic-violet-bg)}.ui-plic__tag[data-tone="amber"]{color: var(--ui-plic-amber);background: var(--ui-plic-amber-bg)}.ui-plic__tag[data-tone="green"]{color: var(--ui-plic-green);background: var(--ui-plic-green-bg)}.ui-plic__tag[data-tone="red"]{color: var(--ui-plic-red);background: var(--ui-plic-red-bg)}.ui-plic__main{display: grid;min-width: 0}.ui-plic__panel{grid-area: 1 / 1;min-width: 0;padding: 12px 16px 16px;animation: ui-plic-in 360ms var(--ui-plic-ease) both}.ui-plic__panel[data-out]{animation: ui-plic-out 240ms ease both;pointer-events: none}.ui-plic__panel-head{display: flex;align-items: center;gap: 8px;min-height: 20px}.ui-plic__panel-title{min-width: 0;overflow: hidden;font-weight: 500;color: var(--ui-plic-strong);white-space: nowrap;text-overflow: ellipsis}.ui-plic__count{display: inline-flex;flex: none;align-items: center;gap: 8px;margin-left: auto;font-size: 12px;line-height: 16px;color: var(--ui-plic-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-plic__bars{display: inline-flex;gap: 2px}.ui-plic__bar{width: 6px;height: 6px;border-radius: 1.5px;background: var(--ui-plic-fill);transition: background-color 300ms ease}.ui-plic__bar[data-on]{background: var(--ui-plic-accent)}.ui-plic__body{margin-top: 10px !important;font-size: 13px;line-height: 28px;color: var(--ui-plic-ink);overflow-wrap: anywhere}.ui-plic__glue{white-space: nowrap}.ui-plic__preview .ui-plic__glue{white-space: inherit}.ui-plic__token{position: relative;display: inline-grid;vertical-align: top;max-width: 100%;height: 22px;margin: 3px 0;padding: 0 6px;border-radius: 5px;background: var(--ui-plic-wash);box-shadow: inset 0 0 0 0.5px var(--ui-plic-line-strong);line-height: 22px;color: var(--ui-plic-ink);cursor: text;transition: background-color 200ms ease, box-shadow 200ms ease, color 200ms ease}.ui-plic__token:hover{background: var(--ui-plic-fill)}.ui-plic__token[data-filled]{background: var(--ui-plic-accent-bg);box-shadow: inset 0 0 0 0.5px transparent}.ui-plic__token:focus-within{outline: 2px solid var(--ui-plic-focus);outline-offset: 1px}.ui-plic__token[data-flash="a"]{animation: ui-plic-flash-a 900ms ease-out}.ui-plic__token[data-flash="b"]{animation: ui-plic-flash-b 900ms ease-out}.ui-plic__sizer, .ui-plic__input{grid-area: 1 / 1;min-width: 2ch;font-size: 13px;line-height: 22px;white-space: pre}.ui-plic__sizer{padding-right: 1px;font-weight: 500;visibility: hidden;overflow: hidden}.ui-plic__input{width: 100%;height: 22px;color: inherit;font-weight: 500;text-overflow: ellipsis;caret-color: var(--ui-plic-accent)}.ui-plic__input::placeholder{color: var(--ui-plic-muted);font-weight: 400;opacity: 1}.ui-plic__label{margin-top: 12px;font-size: 10px;font-weight: 500;line-height: 16px;letter-spacing: 0.5px;text-transform: uppercase;color: var(--ui-plic-muted)}.ui-plic__preview{margin-top: 4px;padding: 8px 12px;border-radius: 8px;background: var(--ui-plic-well);box-shadow: inset 0 0 0 0.5px var(--ui-plic-line);font-size: 13px;line-height: 20px;color: var(--ui-plic-text);white-space: pre-wrap;overflow-wrap: anywhere}.ui-plic__fill{border-radius: 4px;color: var(--ui-plic-ink);font-weight: 500;box-decoration-break: clone;-webkit-box-decoration-break: clone}.ui-plic__fill[data-flash="a"]{animation: ui-plic-mark-a 1100ms ease-out}.ui-plic__fill[data-flash="b"]{animation: ui-plic-mark-b 1100ms ease-out}.ui-plic__hole{color: var(--ui-plic-faint)}.ui-plic__foot{display: flex;align-items: center;gap: 8px;height: 44px;padding: 0 8px 0 16px;border-top: 0.5px solid var(--ui-plic-line)}.ui-plic__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-plic-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-plic__swap{display: grid;min-width: 0}.ui-plic__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;animation: ui-plic-swap-in 320ms ease both}.ui-plic__swap-item[data-out]{animation: ui-plic-swap-out 220ms ease both}.ui-plic__swap-item[data-tone="ok"]{color: var(--ui-plic-ok)}.ui-plic__copy{display: inline-flex;flex: none;align-items: center;gap: 6px;height: 28px;padding: 0 10px 0 8px;border-radius: 6px;background: var(--ui-plic-card);box-shadow: var(--ui-plic-shadow);font-size: 13px;font-weight: 500;color: var(--ui-plic-strong);white-space: nowrap;transition: background-color 160ms ease}.ui-plic__copy:hover:not(:disabled){background: color-mix(in srgb, var(--ui-plic-card), #000 3%)}.ui-plic__copy-icon{display: grid;place-items: center;width: 16px;height: 16px;color: var(--ui-plic-icon);animation: ui-plic-swap-in 300ms ease both}.ui-plic__copy-icon[data-done]{color: var(--ui-plic-ok)}.ui-plic__use{position: relative;display: inline-flex;flex: none;align-items: center;gap: 6px;height: 28px;padding: 0 8px 0 10px;border-radius: 6px;background: var(--ui-plic-ink);font-size: 13px;font-weight: 500;color: var(--ui-plic-on-ink);white-space: nowrap;transition: background-color 200ms ease, color 200ms ease}.ui-plic__use svg{transition: transform 220ms var(--ui-plic-ease)}.ui-plic__use:hover:not([aria-disabled="true"]){background: var(--ui-plic-strong)}.ui-plic__use:hover:not([aria-disabled="true"]) svg{transform: translateX(2px)}.ui-plic__use[aria-disabled="true"]{background: var(--ui-plic-fill);color: var(--ui-plic-muted);cursor: default}.ui-plic__use[data-pulse="a"]{animation: ui-plic-pulse-a 1400ms ease-out}.ui-plic__use[data-pulse="b"]{animation: ui-plic-pulse-b 1400ms ease-out}@keyframes ui-plic-in{from{opacity: 0;filter: blur(2px);transform: translateY(3px)}}@keyframes ui-plic-out{to{opacity: 0;filter: blur(2px)}}@keyframes ui-plic-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-plic-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@keyframes ui-plic-flash-a{from{background-color: var(--ui-plic-accent-flash)}}@keyframes ui-plic-flash-b{from{background-color: var(--ui-plic-accent-flash)}}@keyframes ui-plic-mark-a{from{background-color: var(--ui-plic-accent-flash);box-shadow: 0 0 0 2px var(--ui-plic-accent-flash)}to{background-color: transparent;box-shadow: 0 0 0 2px transparent}}@keyframes ui-plic-mark-b{from{background-color: var(--ui-plic-accent-flash);box-shadow: 0 0 0 2px var(--ui-plic-accent-flash)}to{background-color: transparent;box-shadow: 0 0 0 2px transparent}}@keyframes ui-plic-pulse-a{0%{box-shadow: 0 0 0 0 var(--ui-plic-pulse)}60%, 100%{box-shadow: 0 0 0 6px transparent}}@keyframes ui-plic-pulse-b{0%{box-shadow: 0 0 0 0 var(--ui-plic-pulse)}60%, 100%{box-shadow: 0 0 0 6px transparent}}@container (max-width: 540px){.ui-plic__cols{grid-template-columns: minmax(0, 1fr)}.ui-plic__side{border-right: 0;border-bottom: 0.5px solid var(--ui-plic-line)}}@container (max-width: 360px){.ui-plic__copy{width: 28px;padding: 0;justify-content: center}.ui-plic__copy-text{display: none}.ui-plic__count .ui-plic__bars{display: none}.ui-plic__panel{padding: 12px 12px 14px}.ui-plic__foot{padding-left: 12px}}@media (pointer: coarse){.ui-plic__option{height: 40px}.ui-plic__search{height: 36px}.ui-plic__copy, .ui-plic__use{height: 34px}.ui-plic__copy{padding-right: 12px}.ui-plic__foot{height: 50px}.ui-plic__body{line-height: 32px}.ui-plic__token, .ui-plic__input, .ui-plic__sizer{height: 26px;line-height: 26px}}@media (prefers-reduced-motion: reduce){.ui-plic *, .ui-plic *::before, .ui-plic *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-plic{--ui-plic-card: #1c1c1e;--ui-plic-ink: rgba(255, 255, 255, 0.9);--ui-plic-strong: #ffffff;--ui-plic-text: rgba(255, 255, 255, 0.62);--ui-plic-muted: rgba(255, 255, 255, 0.46);--ui-plic-faint: rgba(255, 255, 255, 0.3);--ui-plic-icon: rgba(255, 255, 255, 0.5);--ui-plic-line: rgba(255, 255, 255, 0.08);--ui-plic-line-strong: rgba(255, 255, 255, 0.12);--ui-plic-wash: rgba(255, 255, 255, 0.04);--ui-plic-well: rgba(255, 255, 255, 0.03);--ui-plic-fill: rgba(255, 255, 255, 0.08);--ui-plic-accent: #4d8dff;--ui-plic-accent-bg: rgba(77, 141, 255, 0.14);--ui-plic-pulse: rgba(255, 255, 255, 0.25);--ui-plic-accent-flash: rgba(77, 141, 255, 0.3);--ui-plic-on-ink: #1c1c1e;--ui-plic-ok: #3ec27a;--ui-plic-blue: #8fb4ff;--ui-plic-blue-bg: rgba(77, 141, 255, 0.14);--ui-plic-violet: #b7a6f5;--ui-plic-violet-bg: rgba(130, 120, 240, 0.15);--ui-plic-amber: #f2c063;--ui-plic-amber-bg: rgba(232, 162, 12, 0.14);--ui-plic-green: #6fd69c;--ui-plic-green-bg: rgba(26, 154, 82, 0.16);--ui-plic-red: #ff9a9d;--ui-plic-red-bg: rgba(229, 72, 77, 0.15);--ui-plic-gray: rgba(255, 255, 255, 0.62);--ui-plic-gray-bg: rgba(255, 255, 255, 0.08);--ui-plic-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-plic-focus: rgba(77, 141, 255, 0.45)}:where(.dark, [data-theme="dark"]) .ui-plic__search:hover{box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.18)}:where(.dark, [data-theme="dark"]) .ui-plic__copy:hover:not(:disabled){background: #232326}:where(.dark, [data-theme="dark"]) .ui-plic__use:hover:not([aria-disabled="true"]){background: #ffffff}`;
const templates = [
    {
        id: `meeting`,
        title: `Summarize a meeting`,
        category: `Notes`,
        body: `Summarize the meeting below for {audience} in under {length}. Lead with the decisions, then list open questions about {topic}.`,
        variables: {
            audience: {
                description: `Who reads the summary`
            },
            length: {
                description: `How long it may be`,
                default: `150 words`
            },
            topic: {
                description: `What the open questions are about`
            }
        }
    },
    {
        id: `release`,
        title: `Write release notes`,
        category: `Product`,
        body: `Write release notes for {product} {version} for {audience}. Keep the tone {tone} and group the changes into New, Improved and Fixed.`,
        variables: {
            product: {
                description: `Name of the product`
            },
            version: {
                description: `Version number, e.g. 2.4`
            },
            audience: {
                description: `Who reads the notes`
            },
            tone: {
                description: `How it should sound`,
                default: `friendly`
            }
        }
    },
    {
        id: `error`,
        title: `Explain an error`,
        category: `Debug`,
        body: `Explain this {language} error in plain words: {error}. Say what most likely caused it and suggest a fix that works with {framework}.`,
        variables: {
            language: {
                description: `Programming language`
            },
            error: {
                description: `The error message`
            },
            framework: {
                description: `Framework or runtime in use`
            }
        }
    },
    {
        id: `email`,
        title: `Draft a cold email`,
        category: `Sales`,
        body: `Draft a short cold email to {name}, {role} at {company}. Open with {hook} and ask for a 15-minute call. No more than {length}.`,
        variables: {
            name: {
                description: `First name of the person`
            },
            role: {
                description: `Their job title`
            },
            company: {
                description: `Where they work`
            },
            hook: {
                description: `Something specific about them`
            },
            length: {
                description: `How long it may be`,
                default: `120 words`
            }
        }
    }
];
const b = [
    {
        id: `release`,
        type: [
            [
                `product`,
                `Relay`
            ],
            [
                `version`,
                `2.4`
            ],
            [
                `audience`,
                `existing customers`
            ]
        ]
    },
    {
        id: `error`,
        type: [
            [
                `language`,
                `TypeScript`
            ],
            [
                `error`,
                `Cannot read properties of undefined`
            ],
            [
                `framework`,
                `Next.js`
            ]
        ]
    },
    {
        id: `meeting`,
        type: [
            [
                `audience`,
                `the design team`
            ],
            [
                `topic`,
                `the onboarding flow`
            ]
        ]
    }
];
function x(e, t) {
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`)?.set?.call(e, t);
    e.dispatchEvent(new Event(`input`, {
        bubbles: true
    }));
}
function SComponent() {
    let eRef = n.useRef(null);
    let [t, setT] = n.useState(0);
    let [value, setValue] = n.useState(`meeting`);
    let sRef = n.useRef(false);
    n.useEffect(()=>{
        let n = b[t % b.length];
        let r = [
            [
                t === 0 ? 700 : 900,
                ()=>setValue(n.id)
            ]
        ];
        n.type.forEach(([n, i], a)=>{
            for(let o = 1; o <= i.length; o++){
                let s = o === 1 ? a === 0 && t === 0 ? 2500 : 520 : 55 + o * 37 % 40;
                r.push([
                    s,
                    ()=>{
                        let t = eRef.current?.querySelector(`.ui-plic__panel:not([data-out]) .ui-plic__input[data-var="${n}"]`);
                        if (t) {
                            x(t, i.slice(0, o));
                        }
                    }
                ]);
            }
        });
        r.push([
            3600,
            ()=>setT((e)=>e + 1)
        ]);
        let a = 0;
        let c = 0;
        let l = ()=>{
            if (!(sRef.current || a >= r.length)) {
                c = window.setTimeout(()=>{
                    if (!sRef.current) {
                        r[a][1]();
                        a++;
                        l();
                    }
                }, r[a][0]);
            }
        };
        l();
        return ()=>window.clearTimeout(c);
    }, [
        t
    ]);
    let c = ()=>sRef.current = true;
    return <div ref={eRef} className={`pli-demo`} onPointerEnter={c} onPointerDownCapture={c} onKeyDownCapture={c} onFocusCapture={c}><V1Component key={t} templates={templates} value={value} onSelect={setValue} onUse={()=>{}}/></div>;
}
export { SComponent as default };
