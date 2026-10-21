import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = `\0create`;
const easing = `cubic-bezier(0.22, 1, 0.36, 1)`;
const o = ()=>typeof window < `u` && window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;
const s = (label)=>{
    let t = label.trim().split(/\s+/);
    return ((t[0]?.[0] ?? ``) + (t.length > 1 ? t[t.length - 1][0] : ``)).toUpperCase();
};
function C1Component({ text, query }) {
    let n = query ? text.toLowerCase().indexOf(query.toLowerCase()) : -1;
    if (n < 0) {
        return <>{text}</>;
    }
    return <>{text.slice(0, n)}<mark>{text.slice(n, n + query.length)}</mark>{text.slice(n + query.length)}</>;
}
function L1Component({ option }) {
    if (option.icon) {
        return <span className={`ui-cbx__icon`}>{option.icon}</span>;
    }
    if (typeof option.avatar == `string`) {
        return <img className={`ui-cbx__avatar`} src={option.avatar} alt={``}/>;
    }
    if (option.avatar) {
        return <span className={`ui-cbx__avatar`} aria-hidden={`true`}>{s(option.label)}</span>;
    }
    if (option.color) {
        return <span className={`ui-cbx__dot`} style={{
            background: option.color
        }} aria-hidden={`true`}/>;
    }
    return null;
}
const U1Component = ({ d, className })=><svg viewBox={`0 0 24 24`} className={[
        `ui-cbx__glyph`,
        className
    ].filter(Boolean).join(` `)} aria-hidden={`true`}><path d={d}/></svg>;
const d = {
    close: `M7 7l10 10M17 7 7 17`,
    check: `M5.5 12.5l4 4L18.5 8`,
    chevron: `M8 10l4 4 4-4`,
    plus: `M12 6v12M6 12h12`
};
function Ee1Component({ animate, leaving, armed, plain, children }) {
    let lRef = n.useRef(null);
    n.useLayoutEffect(()=>{
        let lRef_current = lRef.current;
        if (animate && lRef_current && !o()) {
            lRef_current.animate([
                {
                    gridTemplateColumns: `0fr`,
                    marginRight: `0px`
                },
                {
                    gridTemplateColumns: `1fr`,
                    marginRight: `4px`
                }
            ], {
                duration: 260,
                easing
            });
            lRef_current.firstElementChild?.animate([
                {
                    opacity: 0,
                    transform: `scale(0.6)`
                },
                {
                    opacity: 1,
                    transform: `scale(1.05)`,
                    offset: 0.6
                },
                {
                    opacity: 1,
                    transform: `none`
                }
            ], {
                duration: 340,
                easing
            });
        }
    }, []);
    return <li ref={lRef} className={`ui-cbx__chip`} data-leaving={leaving || undefined} data-armed={armed || undefined} data-plain={plain || undefined}>{children}</li>;
}
function F1Component({ options, multiple = true, value, defaultValue, onChange, placeholder = `Search…`, creatable = false, onCreate, createLabel = (e)=>`Create “${e}”`, maxVisibleTags, label: label_1, defaultOpen = false, emptyText = `No results`, className }) {
    let g = `ui-cbx` + n.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
    let [se, setSe] = n.useState(defaultValue ?? []);
    let _ = value ?? se;
    let [le, setLe] = n.useState([]);
    let [v, setV] = n.useState(defaultOpen);
    let [b, setB] = n.useState(``);
    let [S, setS] = n.useState(null);
    let [w, setW] = n.useState(null);
    let [de, setDe] = n.useState(``);
    let DRef = n.useRef(null);
    let feRef = n.useRef(null);
    let peRef = n.useRef(null);
    let ORef = n.useRef(null);
    let kRef = n.useRef(null);
    let meRef = n.useRef(null);
    let heRef = n.useRef(null);
    let ARef = n.useRef(false);
    let j = n.useMemo(()=>[
            ...options,
            ...le.filter((t)=>!options.some((e)=>e.value === t.value))
        ], [
        options,
        le
    ]);
    let ge = n.useMemo(()=>new Map(j.map((e)=>[
                e.value,
                e
            ])), [
        j
    ]);
    let M = (e)=>ge.get(e) ?? {
            value: e,
            label: e
        };
    let N = b.trim();
    let P = N.toLowerCase();
    let F = n.useMemo(()=>{
        let e = [];
        for (let t of j){
            if (P && !`${t.label} ${t.hint ?? ``} ${t.keywords ?? ``}`.toLowerCase().includes(P)) {
                continue;
            }
            let n = t.group ?? ``;
            let r = e.find((e)=>e.name === n);
            if (!r) {
                e.push(r = {
                    name: n,
                    options: []
                });
            }
            r.options.push(t);
        }
        return e;
    }, [
        j,
        P
    ]);
    let I = creatable && !!N && !j.some((e)=>e.label.toLowerCase() === P);
    let L = [
        ...F.flatMap((e)=>e.options.map((e)=>e.value)),
        ...I ? [
            i
        ] : []
    ];
    let R = S !== null && L.includes(S) ? S : L[0];
    let z = (e)=>`${g}-o${L.indexOf(e)}`;
    let [B, setB_1] = n.useState(()=>_.map((value_1)=>({
                value: value_1
            })));
    let HRef = n.useRef(B);
    HRef.current = B;
    let URef = n.useRef(new Map);
    let WRef = n.useRef(false);
    let _e = _.join(``);
    n.useEffect(()=>{
        let HRef_current = HRef.current;
        let t = false;
        let n = HRef_current.map((e)=>{
            let n = _.includes(e.value);
            if (n && e.leaving) {
                t = true;
                window.clearTimeout(URef.current.get(e.value));
                URef.current.delete(e.value);
                return {
                    value: e.value
                };
            }
            if (!n && !e.leaving) {
                t = true;
                URef.current.set(e.value, window.setTimeout(()=>{
                    URef.current.delete(e.value);
                    setB_1((t)=>t.filter((t)=>!(t.value === e.value && t.leaving)));
                }, 420));
                return {
                    value: e.value,
                    leaving: true
                };
            }
            return e;
        });
        for (let e of _){
            if (!n.some((t)=>t.value === e)) {
                n.push({
                    value: e
                });
                t = true;
            }
        }
        if (t) {
            setB_1(n);
        }
    }, [
        _e
    ]);
    n.useEffect(()=>{
        WRef.current = true;
        let URef_current = URef.current;
        return ()=>URef_current.forEach((e)=>window.clearTimeout(e));
    }, []);
    let G = maxVisibleTags ?? Infinity;
    let ve = 0;
    let K = B.filter((e)=>{
        if (e.leaving) {
            return ve < G;
        }
        return ve++ < G;
    });
    let q = Math.max(0, B.filter((e)=>!e.leaving).length - G);
    let JRef = n.useRef(q);
    let yeRef = n.useRef(`up`);
    if (q !== JRef.current && q > 0) {
        yeRef.current = q > JRef.current ? `up` : `down`;
    }
    if (q > 0) {
        JRef.current = q;
    }
    let be = q || JRef.current;
    let xe = !!w && q > 0 && !K.some((e)=>e.value === w);
    let YRef = n.useRef(_.length);
    let SeRef = n.useRef(`up`);
    if (_.length !== YRef.current) {
        SeRef.current = _.length > YRef.current ? `up` : `down`;
        YRef.current = _.length;
    }
    let Ce = (e, t)=>{
        if (value === undefined) {
            setSe(e);
        }
        onChange?.(e, e.map((e)=>{
            if (t?.value === e) {
                return t;
            }
            return M(e);
        }));
    };
    let X = (e, n)=>setDe(multiple ? `${e}. ${n} selected` : e);
    let Z = (e)=>{
        let n = _.includes(e.value);
        let r = multiple ? n ? _.filter((t)=>t !== e.value) : [
            ..._,
            e.value
        ] : [
            e.value
        ];
        Ce(r, e);
        X(`${e.label} ${n && multiple ? `removed` : `selected`}`, r.length);
        setW(null);
        if (b) {
            setB(``);
        }
        if (!multiple) {
            setV(false);
        }
    };
    let onClick = ()=>{
        let e = onCreate?.(N) || {
            value: N,
            label: N
        };
        setLe((t)=>[
                ...t.filter((t)=>t.value !== e.value),
                e
            ]);
        setS(e.value);
        Z(e);
    };
    let Q = (e)=>{
        let t = _.filter((t)=>t !== e);
        Ce(t);
        X(`${M(e).label} removed`, t.length);
        setW(null);
    };
    let Te = (e)=>{
        if (e === i) {
            onClick();
        } else {
            Z(M(e));
        }
    };
    n.useLayoutEffect(()=>{
        let feRef_current = feRef.current;
        let peRef_current = peRef.current;
        if (!feRef_current || !peRef_current) {
            return;
        }
        let n = ()=>feRef_current.style.height = `${peRef_current.offsetHeight}px`;
        n();
        let r = new ResizeObserver(n);
        r.observe(peRef_current);
        return ()=>r.disconnect();
    }, []);
    n.useLayoutEffect(()=>{
        let kRef_current = kRef.current;
        let meRef_current = meRef.current;
        if (!v || !kRef_current || !meRef_current) {
            return;
        }
        let n = ()=>{
            let n = getComputedStyle(kRef_current);
            let r = parseFloat(n.paddingTop) + parseFloat(n.paddingBottom);
            let i = parseFloat(n.maxHeight) || Infinity;
            kRef_current.style.height = `${Math.min(meRef_current.offsetHeight + r, i)}px`;
        };
        n();
        let r = new ResizeObserver(n);
        r.observe(meRef_current);
        return ()=>r.disconnect();
    }, [
        v
    ]);
    n.useLayoutEffect(()=>{
        let kRef_current = kRef.current;
        let heRef_current = heRef.current;
        if (!v || !kRef_current || !heRef_current) {
            return;
        }
        let n = kRef_current.querySelector(`[data-active]`);
        if (!n) {
            heRef_current.style.opacity = `0`;
            return;
        }
        let r = !heRef_current.dataset.ready;
        if (r) {
            heRef_current.style.transition = `none`;
        }
        heRef_current.style.opacity = `1`;
        heRef_current.style.height = `${n.offsetHeight}px`;
        heRef_current.style.transform = `translateY(${n.offsetTop}px)`;
        if (r) {
            heRef_current.dataset.ready = `1`;
            heRef_current.offsetWidth;
            heRef_current.style.transition = ``;
        }
        if (!ARef.current) {
            return;
        }
        ARef.current = false;
        let n_previousElementSibling = n.previousElementSibling;
        let a = n_previousElementSibling?.classList.contains(`ui-cbx__group-label`) ? n_previousElementSibling.offsetHeight : 0;
        let o = n.offsetTop - 6 - a;
        let s = n.offsetTop + n.offsetHeight + 6;
        if (o < kRef_current.scrollTop) {
            kRef_current.scrollTop = o;
        } else if (s > kRef_current.scrollTop + kRef_current.clientHeight) {
            kRef_current.scrollTop = s - kRef_current.clientHeight;
        }
    });
    n.useEffect(()=>{
        if (!v) {
            return;
        }
        let e = (e)=>{
            if (DRef.current && !DRef.current.contains(e.target)) {
                setV(false);
                setW(null);
            }
        };
        document.addEventListener(`pointerdown`, e);
        return ()=>document.removeEventListener(`pointerdown`, e);
    }, [
        v
    ]);
    let Ee = (e)=>{
        if (!L.length) {
            return;
        }
        ARef.current = true;
        let t = Math.max(0, L.indexOf(R));
        setS(L[(t + e + L.length) % L.length]);
    };
    let onKeyDown = (e)=>{
        if (e.key !== `Backspace`) {
            setW(null);
        }
        if (e.key === `ArrowDown` || e.key === `ArrowUp`) {
            e.preventDefault();
            if (!v) {
                setV(true);
                return;
            }
            Ee(e.key === `ArrowDown` ? 1 : -1);
        } else if (e.key === `Enter`) {
            if (!v || !R) {
                return;
            }
            e.preventDefault();
            Te(R);
        } else if (e.key === `Escape`) {
            if (v) {
                e.preventDefault();
                e.stopPropagation();
                setV(false);
            } else if (b) {
                setB(``);
            }
        } else if (e.key === `Tab`) {
            setV(false);
        } else if (e.key === `Backspace` && !b && _.length) {
            e.preventDefault();
            let t = _[_.length - 1];
            if (w === t) {
                Q(t);
            } else {
                setW(t);
                setDe(`${M(t).label} – press Backspace again to remove`);
            }
        }
    };
    let Oe = (e)=>{
        if (!e.target.closest(`button`)) {
            if (e.target !== ORef.current) {
                e.preventDefault();
            }
            ORef.current?.focus();
            setW(null);
            setV(true);
        }
    };
    let onBlur = (e)=>{
        if (!DRef.current?.contains(e.relatedTarget)) {
            setV(false);
            setW(null);
        }
    };
    let $ = (e)=>e.preventDefault();
    return <div ref={DRef} className={[
        `ui-cbx`,
        className
    ].filter(Boolean).join(` `)} data-open={v || undefined} onBlur={onBlur}><style href={`ui-combobox`} precedence={`default`}>{te}</style>{label_1 && <label className={`ui-cbx__label`} id={`${g}-label`} htmlFor={`${g}-input`}>{label_1}</label>}<div ref={feRef} className={`ui-cbx__field`} onMouseDown={Oe}><div ref={peRef} className={`ui-cbx__field-inner`}>{(K.length > 0 || maxVisibleTags !== undefined) && <ul className={`ui-cbx__chips`} role={`list`} aria-label={`Selected`}>{K.map((e)=>{
        let t = M(e.value);
        let plain = !t.icon && !t.avatar && !t.color;
        return <Ee1Component key={e.value} animate={WRef.current} leaving={e.leaving} armed={w === e.value} plain={plain}><span className={`ui-cbx__chip-body`}><L1Component option={t}/><span className={`ui-cbx__chip-label`}>{t.label}</span><button type={`button`} className={`ui-cbx__chip-x`} tabIndex={-1} aria-label={`Remove ${t.label}`} onMouseDown={$} onClick={()=>Q(e.value)}><U1Component d={d.close}/></button></span></Ee1Component>;
    })}{maxVisibleTags !== undefined && <li className={`ui-cbx__chip ui-cbx__more`} data-hidden={!q || undefined} data-armed={xe || undefined} aria-hidden={!q || undefined}><span className={`ui-cbx__chip-body`}>{`+`}<span className={`ui-cbx__roll`}><span key={be} data-dir={yeRef.current}>{be}</span></span></span></li>}</ul>}<input ref={ORef} id={`${g}-input`} className={`ui-cbx__input`} value={b} placeholder={_.length ? undefined : placeholder} autoComplete={`off`} spellCheck={false} role={`combobox`} aria-expanded={v} aria-controls={`${g}-list`} aria-autocomplete={`list`} aria-activedescendant={v && R ? z(R) : undefined} aria-label={label_1 ? undefined : placeholder} onChange={(e)=>{
        setB(e.target.value);
        setS(null);
        setW(null);
        setV(true);
    }} onKeyDown={onKeyDown}/></div><button type={`button`} className={`ui-cbx__toggle`} tabIndex={-1} aria-label={v ? `Close list` : `Open list`} onMouseDown={$} onClick={()=>{
        ORef.current?.focus();
        setV((e)=>!e);
    }}><U1Component d={d.chevron}/></button></div>{v && <div className={`ui-cbx__pop`} onMouseDown={$}><div className={`ui-cbx__card`}><div ref={kRef} id={`${g}-list`} className={`ui-cbx__list`} role={`listbox`} aria-multiselectable={multiple || undefined} aria-labelledby={label_1 ? `${g}-label` : undefined} aria-label={label_1 ? undefined : `Options`}><span ref={heRef} className={`ui-cbx__pill`} aria-hidden={`true`}/><div ref={meRef} className={`ui-cbx__list-inner`}>{F.map((e, t)=><div key={e.name || `_`} role={`group`} aria-labelledby={e.name ? `${g}-g${t}` : undefined} className={`ui-cbx__group`}>{e.name && <div className={`ui-cbx__group-label`} id={`${g}-g${t}`}>{e.name}</div>}{e.options.map((e)=>{
            let t = _.includes(e.value);
            return <div key={e.value} id={z(e.value)} role={`option`} aria-selected={t} data-active={R === e.value || undefined} className={`ui-cbx__option`} onMouseDown={$} onMouseMove={()=>R !== e.value && setS(e.value)} onClick={()=>{
                setS(e.value);
                Z(e);
            }}><L1Component option={e}/><span className={`ui-cbx__text`}><span className={`ui-cbx__name`}><C1Component text={e.label} query={N}/></span>{e.hint && <span className={`ui-cbx__hint`}><C1Component text={e.hint} query={N}/></span>}</span><U1Component d={d.check} className={`ui-cbx__check`}/></div>;
        })}</div>)}{!F.length && <div key={N} className={`ui-cbx__empty`}>{emptyText}{N && <>{` for “`}{N}{`”`}</>}</div>}{I && <div id={z(i)} role={`option`} aria-selected={false} data-active={R === i || undefined} className={`ui-cbx__option ui-cbx__create`} onMouseDown={$} onMouseMove={()=>R !== i && setS(i)} onClick={onClick}><span className={`ui-cbx__plus`} aria-hidden={`true`}><U1Component d={d.plus}/></span><span className={`ui-cbx__name`}>{createLabel(N)}</span></div>}</div></div></div><div className={`ui-cbx__foot`} aria-hidden={`true`}><span className={`ui-cbx__count`}><span className={`ui-cbx__roll`}><span key={_.length} data-dir={SeRef.current}>{_.length}</span></span>{(multiple || _.length, `\xA0selected`)}</span><span className={`ui-cbx__keys`}><kbd>{`↑`}</kbd><kbd>{`↓`}</kbd><span>{`to move`}</span><kbd>{`↵`}</kbd><span>{`to `}{multiple ? `toggle` : `pick`}</span></span></div></div>}<span className={`ui-cbx__live`} aria-live={`polite`}>{de}</span></div>;
}
var te = `.ui-cbx{--ui-cbx-tray: #f0f0f0;--ui-cbx-card: #ffffff;--ui-cbx-line: #ececec;--ui-cbx-ink: #171717;--ui-cbx-text: #404040;--ui-cbx-muted: #8f8f8f;--ui-cbx-faint: #b5b5b5;--ui-cbx-edge: #d4d4d8;--ui-cbx-active: #f0f0f1;--ui-cbx-chip: #f4f4f5;--ui-cbx-chip-line: #e6e6e8;--ui-cbx-armed: #e4e4e7;--ui-cbx-flash: #d9d9dd;--ui-cbx-avatar: #e9e9ec;--ui-cbx-avatar-ink: #5b5b62;--ui-cbx-mark: rgba(47, 107, 255, 0.14);--ui-cbx-accent: #2f6bff;--ui-cbx-ring: rgba(23, 23, 23, 0.08);--ui-cbx-focus: rgba(23, 23, 23, 0.22);--ui-cbx-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.18), 0 4px 12px -4px rgba(0, 0, 0, 0.06);--ui-cbx-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-cbx-spring: cubic-bezier(0.34, 1.56, 0.64, 1);position: relative;display: block;width: 100%;max-width: 440px;container-type: inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13.5px;line-height: 1.4;color: var(--ui-cbx-text);-webkit-font-smoothing: antialiased}.ui-cbx *, .ui-cbx *::before, .ui-cbx *::after{box-sizing: border-box}:where(.ui-cbx) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-cbx) svg{display: block;flex: none}.ui-cbx__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-cbx__label{display: block;margin: 0 0 7px 2px;font-size: 13px;font-weight: 500;color: var(--ui-cbx-ink)}.ui-cbx__field{position: relative;overflow: hidden;border-radius: 12px;background: var(--ui-cbx-card);box-shadow: 0 0 0 1px var(--ui-cbx-line), 0 1px 2px rgba(0, 0, 0, 0.04);cursor: text;transition: height 300ms var(--ui-cbx-ease), box-shadow 160ms ease}.ui-cbx__field:hover{box-shadow: 0 0 0 1px var(--ui-cbx-edge), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-cbx__field:focus-within{box-shadow: 0 0 0 1px var(--ui-cbx-edge), 0 0 0 4px var(--ui-cbx-ring)}.ui-cbx__field-inner{display: flex;flex-wrap: wrap;align-items: center;row-gap: 4px;min-height: 40px;padding: 6px 40px 6px 6px}.ui-cbx__chips{display: contents;margin: 0;padding: 0;list-style: none}.ui-cbx__chip{display: grid;grid-template-columns: 1fr;min-width: 0;max-width: 100%;overflow: hidden;margin-right: 4px;transition: grid-template-columns 260ms var(--ui-cbx-ease) 160ms, margin-right 260ms var(--ui-cbx-ease) 160ms, opacity 200ms ease 140ms}.ui-cbx__chip[data-leaving]{grid-template-columns: 0fr;margin-right: 0;opacity: 0;pointer-events: none}.ui-cbx__chip-body{display: inline-flex;align-items: center;gap: 6px;min-width: 0;height: 28px;overflow: hidden;padding: 0 3px 0 5px;border-radius: 8px;background: var(--ui-cbx-chip);box-shadow: inset 0 0 0 1px var(--ui-cbx-chip-line);white-space: nowrap;color: var(--ui-cbx-ink);font-size: 13px;transition: background-color 160ms ease, box-shadow 160ms ease}.ui-cbx__chip[data-plain] .ui-cbx__chip-body{padding-left: 9px}.ui-cbx__chip[data-armed] .ui-cbx__chip-body{background: var(--ui-cbx-armed);box-shadow: inset 0 0 0 1px var(--ui-cbx-faint)}.ui-cbx__chip[data-leaving] .ui-cbx__chip-body{animation: ui-cbx-flash 300ms ease-out both}.ui-cbx__chip-label{min-width: 0;max-width: 168px;overflow: hidden;text-overflow: ellipsis}.ui-cbx__chip-x{display: grid;place-items: center;flex: none;width: 20px;height: 20px;border-radius: 6px;color: var(--ui-cbx-muted);transition: background-color 140ms ease, color 140ms ease}.ui-cbx__chip-x:hover{background: var(--ui-cbx-armed);color: var(--ui-cbx-ink)}.ui-cbx__chip-x .ui-cbx__glyph{width: 13px;height: 13px;stroke-width: 2}.ui-cbx__chip .ui-cbx__avatar{width: 18px;height: 18px;font-size: 8.5px}.ui-cbx__chip .ui-cbx__dot{margin: 0 2px}.ui-cbx__more .ui-cbx__chip-body{padding: 0 9px;color: var(--ui-cbx-text);font-variant-numeric: tabular-nums}.ui-cbx__more{transition-delay: 0ms}.ui-cbx__more[data-hidden]{grid-template-columns: 0fr;margin-right: 0;opacity: 0}.ui-cbx__roll{display: inline-grid;overflow: hidden}.ui-cbx__roll > span{animation: ui-cbx-roll-up 300ms var(--ui-cbx-ease) both}.ui-cbx__roll > span[data-dir="down"]{animation-name: ui-cbx-roll-down}.ui-cbx__input{flex: 1 0 72px;min-width: 72px;height: 28px;margin: 0;padding: 0 4px 0 6px;border: 0;background: transparent;font: inherit;color: var(--ui-cbx-ink);outline: none}.ui-cbx__input::placeholder{color: var(--ui-cbx-faint)}.ui-cbx__toggle{position: absolute;top: 6px;right: 6px;display: grid;place-items: center;width: 28px;height: 28px;border-radius: 8px;color: var(--ui-cbx-muted);transition: background-color 140ms ease, color 140ms ease}.ui-cbx__toggle:hover{background: var(--ui-cbx-active);color: var(--ui-cbx-ink)}.ui-cbx__toggle .ui-cbx__glyph{transition: transform 260ms var(--ui-cbx-ease)}.ui-cbx[data-open] .ui-cbx__toggle .ui-cbx__glyph{transform: rotate(180deg)}.ui-cbx__avatar{display: grid;place-items: center;flex: none;width: 24px;height: 24px;border-radius: 50%;object-fit: cover;background: var(--ui-cbx-avatar);color: var(--ui-cbx-avatar-ink);font-size: 9.5px;font-weight: 600;letter-spacing: 0.02em}.ui-cbx__dot{flex: none;width: 8px;height: 8px;margin: 0 4px;border-radius: 50%}.ui-cbx__icon{display: grid;place-items: center;flex: none;width: 18px;height: 18px;color: var(--ui-cbx-muted)}.ui-cbx__icon svg{width: 16px;height: 16px}.ui-cbx__pop{position: absolute;z-index: 30;top: calc(100% + 6px);left: 0;right: 0;padding: 4px;border-radius: 18px;background: var(--ui-cbx-tray);box-shadow: var(--ui-cbx-shadow);transform-origin: top center;animation: ui-cbx-open 240ms var(--ui-cbx-ease) both}.ui-cbx__card{overflow: hidden;border-radius: 14px;background: var(--ui-cbx-card);box-shadow: 0 0 0 1px var(--ui-cbx-line)}.ui-cbx__list{position: relative;max-height: 300px;padding: 4px;overflow-y: auto;overscroll-behavior: contain;scrollbar-width: thin;transition: height 300ms var(--ui-cbx-ease)}.ui-cbx__pill{position: absolute;top: 0;left: 4px;right: 4px;border-radius: 9px;background: var(--ui-cbx-active);opacity: 0;pointer-events: none;transition: transform 220ms var(--ui-cbx-ease), height 220ms var(--ui-cbx-ease), opacity 160ms ease}.ui-cbx__group-label{padding: 9px 8px 4px;font-size: 11.5px;font-weight: 500;color: var(--ui-cbx-faint)}.ui-cbx__group:first-child .ui-cbx__group-label{padding-top: 5px}.ui-cbx__option{position: relative;display: flex;align-items: center;gap: 10px;height: 36px;padding: 0 8px;border-radius: 9px;cursor: pointer;user-select: none;-webkit-tap-highlight-color: transparent}.ui-cbx__text{display: flex;flex: 1;align-items: baseline;gap: 8px;min-width: 0}.ui-cbx__name{flex: 0 0 auto;max-width: 100%;min-width: 0;overflow: hidden;color: var(--ui-cbx-ink);white-space: nowrap;text-overflow: ellipsis}.ui-cbx__hint{flex: 0 100 auto;min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-cbx-muted);white-space: nowrap;text-overflow: ellipsis}.ui-cbx mark{border-radius: 3px;background: var(--ui-cbx-mark);color: inherit}.ui-cbx__check{width: 16px;height: 16px;margin-left: auto;color: var(--ui-cbx-ink);stroke-width: 2.2;opacity: 0;transform: scale(0.4);transition: opacity 120ms ease, transform 160ms ease}.ui-cbx__option[aria-selected="true"] .ui-cbx__check{opacity: 1;transform: none;transition: opacity 160ms ease, transform 380ms var(--ui-cbx-spring)}.ui-cbx__empty{padding: 14px 10px 10px;text-align: center;color: var(--ui-cbx-muted);animation: ui-cbx-in 240ms var(--ui-cbx-ease) both}.ui-cbx__create{animation: ui-cbx-in 240ms var(--ui-cbx-ease) both}.ui-cbx__plus{display: grid;place-items: center;flex: none;width: 24px;height: 24px;border-radius: 50%;color: var(--ui-cbx-muted);box-shadow: inset 0 0 0 1px var(--ui-cbx-edge)}.ui-cbx__plus .ui-cbx__glyph{width: 13px;height: 13px;stroke-width: 2}.ui-cbx__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;height: 32px;padding: 0 10px;font-size: 12px;color: var(--ui-cbx-muted)}.ui-cbx__count{display: inline-flex;font-variant-numeric: tabular-nums}.ui-cbx__keys{display: inline-flex;align-items: center;gap: 3px;white-space: nowrap}.ui-cbx kbd{display: inline-grid;place-items: center;min-width: 18px;height: 18px;padding: 0 4px;border-radius: 5px;background: var(--ui-cbx-card);box-shadow: inset 0 0 0 1px var(--ui-cbx-line), 0 1px 0 var(--ui-cbx-line);font-family: inherit;font-size: 10.5px;font-weight: 500;color: var(--ui-cbx-muted)}.ui-cbx__keys > span{margin: 0 6px 0 2px}.ui-cbx__keys > span:last-child{margin-right: 0}.ui-cbx__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-cbx-open{from{opacity: 0;transform: translateY(-4px) scale(0.98)}to{opacity: 1;transform: none}}@keyframes ui-cbx-in{from{opacity: 0;transform: translateY(3px)}to{opacity: 1;transform: none}}@keyframes ui-cbx-flash{0%{background-color: var(--ui-cbx-chip)}35%{background-color: var(--ui-cbx-flash)}100%{background-color: var(--ui-cbx-flash);transform: scale(0.92)}}@keyframes ui-cbx-roll-up{from{opacity: 0;transform: translateY(70%)}to{opacity: 1;transform: none}}@keyframes ui-cbx-roll-down{from{opacity: 0;transform: translateY(-70%)}to{opacity: 1;transform: none}}@container (max-width: 380px){.ui-cbx__keys{display: none}.ui-cbx__chip-label{max-width: 132px}.ui-cbx__hint{font-size: 12px}.ui-cbx__input{flex-basis: 44px;min-width: 44px}}@media (hover: none) and (pointer: coarse){.ui-cbx__field-inner{min-height: 44px;padding-right: 44px}.ui-cbx__chip-body{height: 32px}.ui-cbx__chip-x{width: 26px;height: 26px}.ui-cbx__input{height: 32px;font-size: 16px}.ui-cbx__toggle{width: 32px;height: 32px}.ui-cbx__option{height: 44px}.ui-cbx__list{max-height: 340px}.ui-cbx__keys{display: none}}@media (prefers-reduced-motion: reduce){.ui-cbx *, .ui-cbx *::before, .ui-cbx *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-cbx{--ui-cbx-tray: #111113;--ui-cbx-card: #19191b;--ui-cbx-line: #2a2a2e;--ui-cbx-ink: #ededed;--ui-cbx-text: #c8c8cc;--ui-cbx-muted: #8b8b92;--ui-cbx-faint: #5c5c63;--ui-cbx-edge: #3a3a40;--ui-cbx-active: #26262a;--ui-cbx-chip: #232326;--ui-cbx-chip-line: #2f2f34;--ui-cbx-armed: #303035;--ui-cbx-flash: #3a3a40;--ui-cbx-avatar: #2c2c31;--ui-cbx-avatar-ink: #b4b4bb;--ui-cbx-mark: rgba(109, 139, 255, 0.24);--ui-cbx-accent: #6d8bff;--ui-cbx-ring: rgba(255, 255, 255, 0.07);--ui-cbx-focus: rgba(255, 255, 255, 0.3);--ui-cbx-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.6)}`;
const options = [
    {
        value: `maya`,
        label: `Maya Chen`,
        hint: `Product Designer`,
        avatar: true,
        group: `Design`
    },
    {
        value: `jonas`,
        label: `Jonas Weber`,
        hint: `Design Lead`,
        avatar: true,
        group: `Design`
    },
    {
        value: `priya`,
        label: `Priya Raman`,
        hint: `Brand Designer`,
        avatar: true,
        group: `Design`
    },
    {
        value: `sara`,
        label: `Sara Okafor`,
        hint: `Staff Engineer`,
        avatar: true,
        group: `Engineering`
    },
    {
        value: `leo`,
        label: `Leo Martins`,
        hint: `Frontend`,
        avatar: true,
        group: `Engineering`
    },
    {
        value: `nina`,
        label: `Nina Petrova`,
        hint: `Backend`,
        avatar: true,
        group: `Engineering`
    },
    {
        value: `tom`,
        label: `Tom Becker`,
        hint: `iOS`,
        avatar: true,
        group: `Engineering`
    },
    {
        value: `elif`,
        label: `Elif Yilmaz`,
        hint: `Head of Product`,
        avatar: true,
        group: `Product`
    },
    {
        value: `daniel`,
        label: `Daniel Kim`,
        hint: `Product Manager`,
        avatar: true,
        group: `Product`
    },
    {
        value: `lucas`,
        label: `Lucas Moreau`,
        hint: `Product Analyst`,
        avatar: true,
        group: `Product`
    }
];
function NeComponent() {
    return <div className={`combobox-demo`}><F1Component label={`Reviewers`} options={options} defaultValue={[
        `maya`,
        `sara`
    ]} placeholder={`Add reviewers…`} maxVisibleTags={4} creatable createLabel={(e)=>`Invite “${e}”`} defaultOpen/></div>;
}
export { NeComponent as default };
