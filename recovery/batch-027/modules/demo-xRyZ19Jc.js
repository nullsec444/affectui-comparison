import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = [
    `blue`,
    `violet`,
    `green`,
    `amber`,
    `gray`
];
const a = (site)=>i[[
        ...site
    ].reduce((acc, item)=>(acc * 31 + item.charCodeAt(0)) % 997, 7) % i.length];
const o = (url)=>{
    if (!url) {
        return ``;
    }
    try {
        return new URL(url).hostname.replace(/^www\./, ``);
    } catch  {
        return url;
    }
};
const s = (e)=>e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
const c = new Set([
    `about`,
    `after`,
    `again`,
    `their`,
    `there`,
    `these`,
    `those`,
    `which`,
    `while`,
    `would`,
    `could`,
    `should`,
    `every`,
    `other`,
    `being`,
    `still`,
    `where`,
    `until`,
    `since`,
    `under`,
    `first`,
    `people`,
    `thing`,
    `things`
]);
function l(quote, highlight, n) {
    let i = null;
    if (highlight?.length) {
        let e = highlight.filter((e)=>e.trim()).map(s);
        if (e.length) {
            i = RegExp(`(${e.join(`|`)})`, `gi`);
        }
    } else {
        let e = [
            ...new Set((n.toLowerCase().match(/[a-z0-9%]+/g) ?? []).filter((e)=>(e.length >= 5 || /\d/.test(e)) && !c.has(e)))
        ];
        if (e.length) {
            i = RegExp(`\\b(${e.map(s).join(`|`)})\\b`, `gi`);
        }
    }
    if (i) {
        return quote.split(i).map((e, t)=>{
            if (t % 2) {
                return <mark key={t}>{e}</mark>;
            }
            return e;
        });
    }
    return quote;
}
function U1Component({ id, tone, children }) {
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
    return <span className={`ui-ca__swap`}>{c && <span key={`out-${c.id}`} className={`ui-ca__swap-item`} data-out={``} data-tone={c.tone} aria-hidden={`true`}>{c.node}</span>}<span key={id} className={`ui-ca__swap-item`} data-tone={tone}>{children}</span></span>;
}
const d = {
    stroke: `currentColor`,
    strokeWidth: 1.4,
    strokeLinecap: `round`,
    strokeLinejoin: `round`
};
const F1Component = ()=><svg width={`10`} height={`10`} viewBox={`0 0 10 10`} fill={`none`} aria-hidden={`true`}><path d={`m2.5 2.5 5 5m0-5-5 5`} {...d}/></svg>;
const P1Component = ()=><svg width={`12`} height={`12`} viewBox={`0 0 12 12`} fill={`none`} aria-hidden={`true`}><path d={`M4.5 3h4.5v4.5M8.8 3.2 3 9`} {...d}/></svg>;
const M1Component = ()=><svg width={`12`} height={`12`} viewBox={`0 0 12 12`} fill={`none`} aria-hidden={`true`}><rect x={`4.2`} y={`4.2`} width={`5.8`} height={`5.8`} rx={`1.4`} {...d}/><path d={`M7.8 2.6A1.2 1.2 0 0 0 6.6 2H3.2A1.2 1.2 0 0 0 2 3.2v3.4a1.2 1.2 0 0 0 .6 1`} {...d}/></svg>;
const H1Component = ()=><svg width={`12`} height={`12`} viewBox={`0 0 12 12`} fill={`none`} aria-hidden={`true`}><path d={`m2.6 6.3 2.2 2.2 4.6-5`} {...d} strokeWidth={1.6}/></svg>;
const G1Component = ()=><svg width={`12`} height={`12`} viewBox={`0 0 12 12`} fill={`none`} aria-hidden={`true`}><path d={`M2.5 6h7M6.5 3l3 3-3 3`} {...d}/></svg>;
function Component({ source }) {
    return <span className={`ui-ca__glyph`} data-tone={a(source.site)} aria-hidden={`true`}>{source.icon ?? source.site.trim().charAt(0).toUpperCase()}</span>;
}
function V1Component({ segments, sources, pagesRead, defaultOpen, onOpenSource, onPreviewChange, action, className }) {
    let b = n.useId();
    let [x, setX] = n.useState(null);
    let [C, setC] = n.useState(defaultOpen && sources.some((e)=>e.id === defaultOpen) ? defaultOpen : null);
    let TRef = n.useRef(C);
    if (C) {
        TRef.current = C;
    }
    let [E, setE] = n.useState(null);
    let ORef = n.useRef(null);
    let k = (e)=>sources.findIndex((t)=>t.id === e) + 1;
    let A = (e)=>sources.find((t)=>t.id === e) ?? null;
    let j = (e)=>sources.some((t)=>t.id === e);
    let M = [];
    segments.forEach((seg, index)=>{
        if (seg.paragraph || M.length === 0) {
            M.push([]);
        }
        M[M.length - 1].push({
            seg,
            index
        });
    });
    let length = segments.filter((e)=>e.text.trim()).length;
    let length_1 = segments.filter((e)=>e.text.trim() && e.cite?.some(j)).length;
    let F = (t)=>segments.filter((e)=>e.cite?.includes(t));
    let I = (e)=>{
        let t = C === e ? null : e;
        setC(t);
        onPreviewChange?.(t);
    };
    let onClick = ()=>{
        if (!C) {
            return;
        }
        let e = C;
        setC(null);
        onPreviewChange?.(null);
        ORef.current?.querySelector(`[data-source="${CSS.escape(e)}"]`)?.focus({
            preventScroll: true
        });
    };
    let R = (e)=>{
        let t = `“${e.quote ?? e.title}” – ${e.title}, ${e.site}${e.url ? ` (${e.url})` : ``}`;
        navigator.clipboard?.writeText(t).catch(()=>{});
        setE({
            id: Date.now(),
            source: e.id
        });
    };
    n.useEffect(()=>{
        if (!E) {
            return;
        }
        let e = window.setTimeout(()=>setE(null), 1800);
        return ()=>window.clearTimeout(e);
    }, [
        E
    ]);
    let onKeyDown = (e)=>{
        if (e.key === `Escape` && C) {
            e.stopPropagation();
            onClick();
        }
    };
    let B = (e, n)=>{
        let r = sources.length - 1;
        let i = e.key === `ArrowRight` ? Math.min(r, n + 1) : e.key === `ArrowLeft` ? Math.max(0, n - 1) : e.key === `Home` ? 0 : e.key === `End` ? r : null;
        if (i !== null) {
            e.preventDefault();
            ORef.current?.querySelectorAll(`.ui-ca__chip`)[i]?.focus();
        }
    };
    let V = x?.source ?? null;
    let H = (seg, index)=>{
        if (x) {
            if (x.segment === undefined) {
                if (seg.cite?.includes(x.source)) {
                    return `hl`;
                }
                return `dim`;
            }
            if (x.segment === index) {
                return `hl`;
            }
            return undefined;
        }
        if (C && seg.cite?.includes(C)) {
            return `hl`;
        }
    };
    let U = A(V);
    let W = A(C);
    let G = <><b>{length_1}</b>{` of `}{length}{` `}{length === 1 ? `sentence` : `sentences`}{` backed by a source`}</>;
    let K = `rest`;
    let tone;
    if (E) {
        G = `Quote copied`;
        K = `copied-${E.id}`;
        tone = `ok`;
    } else if (U && x?.segment !== undefined) {
        G = <><b>{U.site}</b>{` · `}{U.title}</>;
        K = `mark-${x.segment}-${U.id}`;
    } else if (U) {
        let e = F(U.id).length;
        G = e ? <><b>{U.site}</b>{` · cited in `}{e}{` `}{e === 1 ? `sentence` : `sentences`}</> : <><b>{U.site}</b>{` · read, not cited`}</>;
        K = `src-${U.id}`;
    } else {
        if (W) {
            G = <>{`Quote from `}<b>{W.site}</b></>;
            K = `open-${W.id}`;
        }
    }
    let J = A(C ?? TRef.current);
    let Y = `${b}-preview`;
    let X = [
        `${sources.length} ${sources.length === 1 ? `source` : `sources`}`,
        pagesRead === undefined ? null : `${pagesRead} ${pagesRead === 1 ? `page` : `pages`} read`
    ].filter(Boolean).join(` · `);
    return <div className={[
        `ui-ca`,
        className
    ].filter(Boolean).join(` `)} role={`group`} aria-label={`Answer with sources`} data-hot={x ? x.segment === undefined ? `source` : `mark` : undefined} onKeyDown={onKeyDown}><style href={`ui-cited-answer`} precedence={`default`}>{y}</style><div className={`ui-ca__card`}><div className={`ui-ca__head`}><span className={`ui-ca__stack`} aria-hidden={`true`}>{sources.slice(0, 3).map((e)=><Component key={e.id} source={e}/>)}</span><span className={`ui-ca__meta`}>{X}</span></div><div className={`ui-ca__text`} onPointerLeave={()=>setX(null)}>{M.map((e, key)=><p key={key} className={`ui-ca__p`}>{e.map(({ seg, index })=>{
            let [, n, i, a] = seg.text.match(/^(\s*)([\s\S]*?)(\s*)$/) ?? [
                ``,
                ``,
                seg.text,
                ``
            ];
            let o = (seg.cite ?? []).filter(j);
            let s = H(seg, index);
            let c = o.length ? Math.max(0, i.search(/\S+$/)) : i.length;
            return <span key={index}>{n}<span className={`ui-ca__seg`} data-hl={s === `hl` ? `` : undefined} data-dim={s === `dim` ? `` : undefined}>{i.slice(0, c)}<span className={`ui-ca__keep`}>{i.slice(c)}{o.map((e)=>{
                let n = A(e);
                let i = x?.segment === index && x.source === e || x?.segment === undefined && x?.source === e;
                return <button key={e} type={`button`} className={`ui-ca__marker`} data-source={e} data-lit={i ? `` : undefined} data-dim={x && !i ? `` : undefined} aria-expanded={C === e} aria-controls={Y} aria-label={`Source ${k(e)}: ${n.site} – ${n.title}`} onPointerEnter={(n)=>n.pointerType === `mouse` && setX({
                        source: e,
                        segment: index
                    })} onPointerLeave={(e)=>e.pointerType === `mouse` && setX(null)} onFocus={()=>setX({
                        source: e,
                        segment: index
                    })} onBlur={()=>setX(null)} onClick={()=>I(e)}>{k(e)}</button>;
            })}</span></span>{a}</span>;
        })}</p>)}</div><div id={Y} className={`ui-ca__fold`} data-open={C ? `` : undefined} inert={!C} role={`region`} aria-label={J ? `Source ${k(J.id)}: ${J.site}` : `Source`}><div className={`ui-ca__clip`}>{J && <div key={J.id} className={`ui-ca__preview`}><div className={`ui-ca__pv-head`}><Component source={J}/><span className={`ui-ca__pv-meta`}><span className={`ui-ca__pv-domain`}>{o(J.url) || J.site}</span>{J.date && <span className={`ui-ca__pv-date`}>{` · `}{J.date}</span>}</span><span className={`ui-ca__pv-num`}>{k(J.id)}</span><button type={`button`} className={`ui-ca__close`} aria-label={`Close source`} onClick={onClick}><F1Component/></button></div><div className={`ui-ca__pv-title`}>{J.title}</div>{J.quote && <blockquote className={`ui-ca__quote`}>{l(J.quote, J.highlight, F(J.id).map((e)=>e.text).join(` `))}</blockquote>}<div className={`ui-ca__pv-actions`}>{J.url ? <a className={`ui-ca__btn ui-ca__btn--main`} href={J.url} target={`_blank`} rel={`noreferrer noopener`} onClick={(e)=>{
        if (onOpenSource) {
            e.preventDefault();
            onOpenSource(J);
        }
    }}>{`Open source`}<P1Component/></a> : onOpenSource && <button type={`button`} className={`ui-ca__btn ui-ca__btn--main`} onClick={()=>onOpenSource(J)}>{`Open source`}<P1Component/></button>}{J.quote && <button type={`button`} className={`ui-ca__btn`} data-done={E?.source === J.id ? `` : undefined} aria-label={`Copy quote`} onClick={()=>R(J)}><span key={E?.source === J.id ? `done` : `idle`} className={`ui-ca__btn-icon`}>{E?.source === J.id ? <H1Component/> : <M1Component/>}</span><span className={`ui-ca__btn-text`}>{E?.source === J.id ? `Copied` : `Copy quote`}</span></button>}</div></div>}</div></div></div><div className={`ui-ca__chips`} ref={ORef} role={`list`} aria-label={`Sources`} onPointerLeave={()=>setX(null)}>{sources.map((e, t)=>{
        let n = V === e.id;
        return <span key={e.id} role={`listitem`} className={`ui-ca__chip-item`}><button type={`button`} className={`ui-ca__chip`} data-source={e.id} data-lit={n ? `` : undefined} data-dim={V && !n ? `` : undefined} aria-expanded={C === e.id} aria-controls={Y} aria-label={`Source ${t + 1}: ${e.site} – ${e.title}`} onPointerEnter={(t)=>t.pointerType === `mouse` && setX({
                source: e.id
            })} onFocus={()=>setX({
                source: e.id
            })} onBlur={()=>setX(null)} onKeyDown={(e)=>B(e, t)} onClick={()=>I(e.id)}><Component source={e}/><span className={`ui-ca__chip-name`}>{e.site}</span><span className={`ui-ca__chip-num`}>{t + 1}</span></button></span>;
    })}</div><div className={`ui-ca__foot`}><span className={`ui-ca__caption`} aria-live={`polite`}><U1Component id={K} tone={tone}>{G}</U1Component></span>{action && <button type={`button`} className={`ui-ca__action`} onClick={action.onClick}>{action.label}<G1Component/></button>}</div></div>;
}
var y = `.ui-ca{--ui-ca-tray: #f0f0f0;--ui-ca-card: #ffffff;--ui-ca-line: #ececec;--ui-ca-ink: #171717;--ui-ca-text: #404040;--ui-ca-muted: #8f8f8f;--ui-ca-faded: #b4b4b8;--ui-ca-well: #f4f4f5;--ui-ca-accent: #2f6bff;--ui-ca-hl: rgba(47, 107, 255, 0.1);--ui-ca-mark: rgba(47, 107, 255, 0.16);--ui-ca-ok: #18794e;--ui-ca-focus: rgba(23, 23, 23, 0.22);--ui-ca-ease: cubic-bezier(0.32, 0.72, 0.24, 1);box-sizing: border-box;width: 100%;max-width: 460px;min-width: 0;container-type: inline-size;padding: 4px;border-radius: 20px;background: var(--ui-ca-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;color: var(--ui-ca-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-ca *, .ui-ca *::before, .ui-ca *::after{box-sizing: border-box}:where(.ui-ca) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-ca :is(button, a):focus-visible{outline: 2px solid var(--ui-ca-focus);outline-offset: 2px}.ui-ca svg{display: block;flex: none}.ui-ca b{font-weight: 500;color: var(--ui-ca-ink)}.ui-ca [data-tone="blue"]{--ui-ca-g: #1f55d6;--ui-ca-g-bg: rgba(47, 107, 255, 0.12)}.ui-ca [data-tone="violet"]{--ui-ca-g: #6941c6;--ui-ca-g-bg: rgba(124, 92, 255, 0.13)}.ui-ca [data-tone="green"]{--ui-ca-g: #18794e;--ui-ca-g-bg: rgba(34, 160, 90, 0.13)}.ui-ca [data-tone="amber"]{--ui-ca-g: #96590a;--ui-ca-g-bg: rgba(240, 160, 32, 0.18)}.ui-ca [data-tone="gray"]{--ui-ca-g: #5f5f66;--ui-ca-g-bg: rgba(110, 110, 120, 0.12)}.ui-ca__glyph{display: grid;flex: none;place-items: center;width: 16px;height: 16px;overflow: hidden;border-radius: 5px;background: var(--ui-ca-g-bg);font-size: 9.5px;font-weight: 600;line-height: 1;color: var(--ui-ca-g)}.ui-ca__glyph > :is(img, svg){width: 100%;height: 100%;object-fit: cover}.ui-ca__card{padding: 12px 16px 14px;border-radius: 16px;background: var(--ui-ca-card);box-shadow: 0 0 0 1px var(--ui-ca-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-ca__head{display: flex;align-items: center;gap: 8px;min-height: 22px}.ui-ca__stack{display: flex;flex: none}.ui-ca__stack .ui-ca__glyph{box-shadow: 0 0 0 1.5px var(--ui-ca-card)}.ui-ca__stack .ui-ca__glyph + .ui-ca__glyph{margin-left: -4px}.ui-ca__meta{min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-ca-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-ca__text{margin-top: 8px;color: var(--ui-ca-text)}.ui-ca__p{margin: 0;font-size: 13.5px;line-height: 23px}.ui-ca__p + .ui-ca__p{margin-top: 10px}.ui-ca__seg{margin: 0 -2px;padding: 2px 2px;border-radius: 5px;-webkit-box-decoration-break: clone;box-decoration-break: clone;transition: background-color 220ms ease, color 220ms ease}.ui-ca__seg[data-hl]{background: var(--ui-ca-hl);color: var(--ui-ca-ink)}.ui-ca__seg[data-dim]{color: var(--ui-ca-faded)}.ui-ca__keep{white-space: nowrap}.ui-ca__marker{position: relative;display: inline-grid;place-items: center;min-width: 16px;height: 16px;margin-left: 3px;padding: 0 4px;border-radius: 5px;background: var(--ui-ca-well);box-shadow: inset 0 0 0 1px var(--ui-ca-line);font-size: 10.5px;font-weight: 600;line-height: 16px;color: var(--ui-ca-text);vertical-align: 1px;font-variant-numeric: tabular-nums;transition: background-color 180ms ease, color 180ms ease, box-shadow 180ms ease, opacity 220ms ease}.ui-ca__marker + .ui-ca__marker{margin-left: 2px}.ui-ca__marker::after{content: "";position: absolute;inset: -4px -2px}.ui-ca__marker:hover, .ui-ca__marker[data-lit]{background: var(--ui-ca-accent);box-shadow: inset 0 0 0 1px var(--ui-ca-accent);color: #fff}.ui-ca__marker[aria-expanded="true"]{background: var(--ui-ca-ink);box-shadow: inset 0 0 0 1px var(--ui-ca-ink);color: var(--ui-ca-card)}.ui-ca__marker[data-dim]:not([aria-expanded="true"]){opacity: 0.5}.ui-ca__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 420ms var(--ui-ca-ease), opacity 220ms ease}.ui-ca__fold[data-open]{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows 420ms var(--ui-ca-ease), opacity 320ms ease 80ms}.ui-ca__clip{min-height: 0;overflow: hidden}.ui-ca__preview{margin-top: 12px;padding: 10px 12px 12px;border-radius: 12px;background: var(--ui-ca-well);animation: ui-ca-swap-in 320ms ease both}.ui-ca__pv-head{display: flex;align-items: center;gap: 8px;height: 22px}.ui-ca__pv-meta{flex: 1;min-width: 0;overflow: hidden;font-size: 12px;color: var(--ui-ca-muted);white-space: nowrap;text-overflow: ellipsis}.ui-ca__pv-domain{color: var(--ui-ca-text)}.ui-ca__pv-num{display: grid;flex: none;place-items: center;min-width: 18px;height: 18px;padding: 0 5px;border-radius: 5px;background: var(--ui-ca-card);box-shadow: inset 0 0 0 1px var(--ui-ca-line);font-size: 10.5px;font-weight: 600;color: var(--ui-ca-text);font-variant-numeric: tabular-nums}.ui-ca__close{display: grid;flex: none;place-items: center;width: 22px;height: 22px;margin-right: -4px;border-radius: 7px;color: var(--ui-ca-muted);transition: background-color 160ms ease, color 160ms ease}.ui-ca__close:hover{background: var(--ui-ca-line);color: var(--ui-ca-ink)}.ui-ca__pv-title{display: -webkit-box;margin-top: 6px;overflow: hidden;font-size: 13.5px;font-weight: 600;line-height: 20px;color: var(--ui-ca-ink);-webkit-line-clamp: 2;-webkit-box-orient: vertical}.ui-ca__quote{margin: 8px 0 0;padding: 0 0 0 10px;border-left: 2px solid var(--ui-ca-line);font-size: 12.5px;line-height: 20px;color: var(--ui-ca-text)}.ui-ca__quote mark{margin: 0 -1px;padding: 1px 1px;border-radius: 3px;background: var(--ui-ca-mark);color: var(--ui-ca-ink);-webkit-box-decoration-break: clone;box-decoration-break: clone}.ui-ca__pv-actions{display: flex;flex-wrap: wrap;align-items: center;gap: 6px;margin-top: 12px}.ui-ca__btn{display: inline-flex;align-items: center;gap: 5px;height: 28px;padding: 0 9px;border-radius: 8px;font-size: 12.5px;font-weight: 500;color: var(--ui-ca-text);text-decoration: none;white-space: nowrap;transition: background-color 160ms ease, color 160ms ease}.ui-ca__btn:hover{background: var(--ui-ca-line);color: var(--ui-ca-ink)}.ui-ca__btn--main{padding: 0 8px 0 10px;background: var(--ui-ca-card);box-shadow: 0 0 0 1px var(--ui-ca-line), 0 1px 2px rgba(0, 0, 0, 0.04);color: var(--ui-ca-ink)}.ui-ca__btn--main:hover{background: var(--ui-ca-card)}.ui-ca__btn--main svg{transition: transform 220ms var(--ui-ca-ease)}.ui-ca__btn--main:hover svg{transform: translate(1px, -1px)}.ui-ca__btn[data-done]{color: var(--ui-ca-ok)}.ui-ca__btn-icon{display: grid;place-items: center;width: 12px;height: 12px;animation: ui-ca-swap-in 280ms ease both}.ui-ca__chips{display: flex;flex-wrap: wrap;gap: 4px;padding: 6px 4px 0}.ui-ca__chip-item{display: flex;min-width: 0;max-width: 100%}.ui-ca__chip{display: inline-flex;align-items: center;gap: 6px;min-width: 0;max-width: 100%;height: 28px;padding: 0 8px 0 6px;border-radius: 8px;font-size: 12.5px;color: var(--ui-ca-text);transition: background-color 160ms ease, box-shadow 160ms ease, opacity 220ms ease, color 160ms ease}.ui-ca__chip:hover, .ui-ca__chip[data-lit]{background: var(--ui-ca-card);box-shadow: 0 0 0 1px var(--ui-ca-line), 0 1px 2px rgba(0, 0, 0, 0.04);color: var(--ui-ca-ink)}.ui-ca__chip[aria-expanded="true"]{background: var(--ui-ca-card);box-shadow: 0 0 0 1px var(--ui-ca-line), 0 1px 2px rgba(0, 0, 0, 0.04), inset 0 0 0 1px color-mix(in srgb, var(--ui-ca-ink) 45%, transparent);color: var(--ui-ca-ink)}.ui-ca__chip[data-dim]{opacity: 0.45}.ui-ca__chip-name{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-ca__chip-num{flex: none;font-size: 11.5px;color: var(--ui-ca-muted);font-variant-numeric: tabular-nums}.ui-ca__foot{display: flex;align-items: center;gap: 8px;min-height: 36px;padding: 2px 4px 0 10px}.ui-ca__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-ca-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-ca__swap{display: grid;min-width: 0}.ui-ca__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;animation: ui-ca-swap-in 320ms ease both}.ui-ca__swap-item[data-out]{animation: ui-ca-swap-out 220ms ease both}.ui-ca__swap-item[data-tone="ok"]{color: var(--ui-ca-ok)}.ui-ca__action{display: inline-flex;flex: none;align-items: center;gap: 4px;height: 26px;padding: 0 6px 0 8px;border-radius: 10px;font-size: 12.5px;font-weight: 500;color: var(--ui-ca-text);white-space: nowrap;transition: background-color 160ms ease, color 160ms ease}.ui-ca__action:hover{background: var(--ui-ca-card);color: var(--ui-ca-ink)}.ui-ca__action svg{transition: transform 220ms var(--ui-ca-ease)}.ui-ca__action:hover svg{transform: translateX(2px)}@keyframes ui-ca-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-ca-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@container (max-width: 360px){.ui-ca__card{padding: 12px 14px 12px}.ui-ca__pv-num{display: none}}@container (max-width: 280px){.ui-ca__btn-text{display: none}}@media (pointer: coarse){.ui-ca__marker::after{inset: -8px -5px}.ui-ca__chip{height: 34px}.ui-ca__btn{height: 34px}.ui-ca__close{width: 30px;height: 30px;margin-right: -7px}.ui-ca__action{height: 30px}}@media (prefers-reduced-motion: reduce){.ui-ca *, .ui-ca *::before, .ui-ca *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-ca{--ui-ca-tray: #111113;--ui-ca-card: #19191b;--ui-ca-line: #2a2a2e;--ui-ca-ink: #ededed;--ui-ca-text: #c8c8cc;--ui-ca-muted: #8b8b92;--ui-ca-faded: #5c5c63;--ui-ca-well: #222225;--ui-ca-accent: #4f82ff;--ui-ca-hl: rgba(79, 130, 255, 0.16);--ui-ca-mark: rgba(79, 130, 255, 0.28);--ui-ca-ok: #6ee7a8;--ui-ca-focus: rgba(255, 255, 255, 0.3)}:where(.dark, [data-theme="dark"]) .ui-ca [data-tone="blue"]{--ui-ca-g: #9bb8ff;--ui-ca-g-bg: rgba(79, 130, 255, 0.2)}:where(.dark, [data-theme="dark"]) .ui-ca [data-tone="violet"]{--ui-ca-g: #c3b1ff;--ui-ca-g-bg: rgba(124, 92, 255, 0.22)}:where(.dark, [data-theme="dark"]) .ui-ca [data-tone="green"]{--ui-ca-g: #6ee7a8;--ui-ca-g-bg: rgba(34, 160, 90, 0.2)}:where(.dark, [data-theme="dark"]) .ui-ca [data-tone="amber"]{--ui-ca-g: #f5c264;--ui-ca-g-bg: rgba(240, 160, 32, 0.2)}:where(.dark, [data-theme="dark"]) .ui-ca [data-tone="gray"]{--ui-ca-g: #b4b4bb;--ui-ca-g-bg: rgba(110, 110, 120, 0.22)}`;
const sources = [
    {
        id: `caching`,
        site: `Tokenwise`,
        title: `Prompt caching, explained: what gets stored and for how long`,
        url: `https://tokenwise.dev/blog/prompt-caching`,
        date: `Sep 18, 2026`,
        quote: `A cached prefix is read instead of recomputed. On prompts over 10,000 tokens this cut time to first token by up to 80% in our tests, and cached input is billed at a fraction of the normal rate.`,
        highlight: [
            `read instead of recomputed`,
            `cut time to first token by up to 80%`
        ]
    },
    {
        id: `prompts`,
        site: `Latency Notes`,
        title: `Designing cache-friendly prompts`,
        url: `https://latencynotes.io/cache-friendly-prompts`,
        date: `Aug 2, 2026`,
        quote: `Keep the stable part – system prompt, tool definitions, long documents – at the very start, and put anything that changes per request after it. A single changed character early on invalidates everything behind it.`,
        highlight: [
            `at the very start`,
            `anything that changes per request after it`,
            `invalidates everything behind it`
        ]
    },
    {
        id: `semantic`,
        site: `Inference Weekly`,
        title: `Semantic caching for LLM apps in production`,
        url: `https://inferenceweekly.com/semantic-caching`,
        date: `Jul 24, 2026`,
        quote: `For FAQ-style traffic, the semantic cache answered 31% of requests without calling the model at all, at a median of 40 ms. We only serve a stored answer above a similarity of 0.92.`,
        highlight: [
            `31% of requests`,
            `median of 40 ms`
        ]
    }
];
const segments = [
    {
        text: `The biggest win is prompt caching: the provider reuses the processed start of your prompt, so a long system prompt isn't recomputed on every call.`,
        cite: [
            `caching`
        ]
    },
    {
        text: ` On prompts over 10K tokens that can cut time to first token by up to 80%.`,
        cite: [
            `caching`
        ]
    },
    {
        text: ` It only works while that start stays identical, so put the system prompt, tools and long documents first and anything that changes per request last.`,
        cite: [
            `prompts`,
            `caching`
        ]
    },
    {
        text: `For repeated questions, add a semantic cache in front of the model: close matches get a stored answer in about 40 ms,`,
        cite: [
            `semantic`
        ],
        paragraph: true
    },
    {
        text: ` which covered nearly a third of FAQ-style traffic in one production setup.`,
        cite: [
            `semantic`
        ]
    },
    {
        text: ` Stream the rest, so people see the first words while the answer is still being written.`
    }
];
function SComponent() {
    let eRef = n.useRef(null);
    let tRef = n.useRef(false);
    let iRef = n.useRef(false);
    n.useEffect(()=>{
        let n = (t)=>eRef.current?.querySelector(t);
        let r = (t, n)=>{
            if (t) {
                iRef.current = true;
                t.dispatchEvent(new PointerEvent(n, {
                    bubbles: true,
                    pointerType: `mouse`,
                    relatedTarget: n === `pointerout` ? eRef.current : null
                }));
                iRef.current = false;
            }
        };
        let a = (e)=>n(`.ui-ca__marker[data-source="${e}"]`);
        let o = [
            [
                700,
                ()=>r(a(`caching`), `pointerover`)
            ],
            [
                2600,
                ()=>r(a(`caching`), `pointerout`)
            ],
            [
                500,
                ()=>a(`prompts`)?.click()
            ],
            [
                3800,
                ()=>n(`.ui-ca__close`)?.click()
            ],
            [
                1800,
                ()=>{}
            ]
        ];
        let s = 0;
        let c = 0;
        let l = ()=>{
            if (!tRef.current) {
                c = window.setTimeout(()=>{
                    if (!tRef.current) {
                        o[s][1]();
                        s = (s + 1) % o.length;
                        l();
                    }
                }, o[s][0]);
            }
        };
        l();
        return ()=>window.clearTimeout(c);
    }, []);
    let a = ()=>{
        if (!iRef.current) {
            tRef.current = true;
        }
    };
    return <div ref={eRef} className={`ca-demo`} onPointerEnter={a} onPointerDownCapture={a} onKeyDownCapture={a} onFocusCapture={a}><V1Component segments={segments} sources={sources} pagesRead={12} onOpenSource={()=>{}} action={{
        label: `Follow up`,
        onClick: ()=>{}
    }}/></div>;
}
export { SComponent as default };
