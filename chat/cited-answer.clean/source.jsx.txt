// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
const n = t_1();
const r = t();
const i = [`blue`, `violet`, `green`, `amber`, `gray`];
const a = site => i[[...site].reduce((acc, item) => (acc * 31 + item.charCodeAt(0)) % 997, 7) % i.length];
const o = url => {
  if (!url) {
    return ``;
  }
  try {
    return new URL(url).hostname.replace(/^www\./, ``);
  } catch {
    return url;
  }
};
const s = e => e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
const c = new Set([`about`, `after`, `again`, `their`, `there`, `these`, `those`, `which`, `while`, `would`, `could`, `should`, `every`, `other`, `being`, `still`, `where`, `until`, `since`, `under`, `first`, `people`, `thing`, `things`]);
function l(quote, highlight, n) {
  let i = null;
  if (highlight?.length) {
    let e = highlight.filter(e => e.trim()).map(s);
    if (e.length) {
      i = RegExp(`(${e.join(`|`)})`, `gi`);
    }
  } else {
    let e = [...new Set((n.toLowerCase().match(/[a-z0-9%]+/g) ?? []).filter(e => (e.length >= 5 || /\d/.test(e)) && !c.has(e)))];
    if (e.length) {
      i = RegExp(`\\b(${e.map(s).join(`|`)})\\b`, `gi`);
    }
  }
  if (i) {
    return quote.split(i).map((e, t) => {
      if (t % 2) {
        return <mark key={t}>{e}</mark>;
      }
      return e;
    });
  }
  return quote;
}
function U1Component({
  id,
  tone,
  children
}) {
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
  n.useEffect(() => {
    if (!c) {
      return;
    }
    let e = window.setTimeout(() => setC(null), 260);
    return () => window.clearTimeout(e);
  }, [c]);
  return <span className={`ui-cac__swap`}>{c && <span key={`out-${c.id}`} className={`ui-cac__swap-item`} data-out={``} data-tone={c.tone} aria-hidden={`true`}>{c.node}</span>}<span key={id} className={`ui-cac__swap-item`} data-tone={tone}>{children}</span></span>;
}
const D1Component = ({
  d
}) => <svg viewBox={`0 0 16 16`} className={`ui-cac__icon`} aria-hidden={`true`}><path d={d} /></svg>;
const f = {
  close: `M4.75 4.75l6.5 6.5m0-6.5-6.5 6.5`,
  out: `M6.5 4.5h5v5M11.25 4.75 4.5 11.5`,
  copy: `M6.75 5.5h5c.69 0 1.25.56 1.25 1.25v5c0 .69-.56 1.25-1.25 1.25h-5c-.69 0-1.25-.56-1.25-1.25v-5c0-.69.56-1.25 1.25-1.25ZM10.5 3.5A1.25 1.25 0 0 0 9.25 3h-5C3.56 3 3 3.56 3 4.25v5c0 .54.34 1 .82 1.17`,
  done: `M3.75 8.4 6.6 11.2 12.25 5`,
  arrow: `M3.5 8h9M8.75 4.25 12.5 8l-3.75 3.75`
};
function P1Component({
  source
}) {
  return <span className={`ui-cac__glyph`} data-tone={a(source.site)} aria-hidden={`true`}>{source.icon ?? source.site.trim().charAt(0).toUpperCase()}</span>;
}
const m = 4;
function H1Component({
  segments,
  sources,
  pagesRead,
  defaultOpen,
  onOpenSource,
  onPreviewChange,
  action,
  className
}) {
  let v = n.useId();
  let [y, setY] = n.useState(null);
  let [x, setX] = n.useState(defaultOpen && sources.some(e => e.id === defaultOpen) ? defaultOpen : null);
  let CRef = n.useRef(x);
  if (x) {
    CRef.current = x;
  }
  let [w, setW] = n.useState(null);
  let ERef = n.useRef(null);
  let DRef = n.useRef(null);
  let [ee, setEe] = n.useState(sources.length);
  let [k, setK] = n.useState(false);
  let j = e => sources.findIndex(t => t.id === e) + 1;
  let M = e => sources.find(t => t.id === e) ?? null;
  let N = e => sources.some(t => t.id === e);
  n.useLayoutEffect(() => {
    let ERef_current = ERef.current;
    let DRef_current = DRef.current;
    if (!ERef_current || !DRef_current) {
      return;
    }
    let n = () => {
      let n = [...DRef_current.querySelectorAll(`[data-chip]`)].map(e => e.offsetWidth);
      let r = DRef_current.querySelector(`[data-more]`)?.offsetWidth ?? 36;
      let ERef_current_clientWidth = ERef_current.clientWidth;
      if (n.reduce((acc, item) => acc + item, 0) + m * Math.max(0, n.length - 1) <= ERef_current_clientWidth + 0.5) {
        return setEe(n.length);
      }
      let a = 0;
      let o = 0;
      for (; o < n.length; o++) {
        let e = a + (o ? m : 0) + n[o];
        if (e + m + r > ERef_current_clientWidth) {
          break;
        }
        a = e;
      }
      setEe(Math.max(1, o));
    };
    n();
    let r = new ResizeObserver(n);
    r.observe(ERef_current);
    document.fonts?.ready.then(n).catch(() => {});
    return () => r.disconnect();
  }, [sources]);
  let P = k ? sources.length : Math.min(ee, sources.length);
  let F = sources.length - P;
  let I = [];
  segments.forEach((seg, index) => {
    if (seg.paragraph || I.length === 0) {
      I.push([]);
    }
    I[I.length - 1].push({
      seg,
      index
    });
  });
  let length = segments.filter(e => e.text.trim()).length;
  let length_1 = segments.filter(e => e.text.trim() && e.cite?.some(N)).length;
  let z = t => segments.filter(e => e.cite?.includes(t));
  let B = e => {
    let t = x === e ? null : e;
    setX(t);
    onPreviewChange?.(t);
  };
  let onClick = () => {
    if (!x) {
      return;
    }
    let e = x;
    setX(null);
    onPreviewChange?.(null);
    ERef.current?.querySelector(`[data-source="${CSS.escape(e)}"]`)?.focus({
      preventScroll: true
    });
  };
  let H = e => {
    let t = `“${e.quote ?? e.title}” – ${e.title}, ${e.site}${e.url ? ` (${e.url})` : ``}`;
    navigator.clipboard?.writeText(t).catch(() => {});
    setW({
      id: Date.now(),
      source: e.id
    });
  };
  n.useEffect(() => {
    if (!w) {
      return;
    }
    let e = window.setTimeout(() => setW(null), 1800);
    return () => window.clearTimeout(e);
  }, [w]);
  let U = e => {
    if (e.key === `Escape` && x) {
      e.stopPropagation();
      onClick();
    }
  };
  let W = e => {
    let t = [...(ERef.current?.querySelectorAll(`.ui-cac__chip, .ui-cac__more`) ?? [])];
    let n = t.indexOf(e.currentTarget);
    let r = t.length - 1;
    let i = e.key === `ArrowRight` ? Math.min(r, n + 1) : e.key === `ArrowLeft` ? Math.max(0, n - 1) : e.key === `Home` ? 0 : e.key === `End` ? r : null;
    if (!(i === null || n < 0)) {
      e.preventDefault();
      t[i]?.focus();
    }
  };
  let G = y?.source ?? null;
  let K = (seg, index) => {
    if (y) {
      if (y.segment === undefined) {
        if (seg.cite?.includes(y.source)) {
          return `hl`;
        }
        return `dim`;
      }
      if (y.segment === index) {
        return `hl`;
      }
      return undefined;
    }
    if (x && seg.cite?.includes(x)) {
      return `hl`;
    }
  };
  let q = M(G);
  let J = M(x);
  let Y = <><b>{length_1}</b>{` of `}{length}{` `}{length === 1 ? `sentence` : `sentences`}{` backed by a source`}</>;
  let X = `rest`;
  let tone;
  if (w) {
    Y = `Quote copied`;
    X = `copied-${w.id}`;
    tone = `ok`;
  } else if (q && y?.segment !== undefined) {
    Y = <><b>{q.site}</b>{` `}<span className={`ui-cac__dot`}>{`·`}</span>{` `}{q.title}</>;
    X = `mark-${y.segment}-${q.id}`;
  } else if (q) {
    let e = z(q.id).length;
    Y = e ? <><b>{q.site}</b>{` `}<span className={`ui-cac__dot`}>{`·`}</span>{` cited in `}{e}{` `}{e === 1 ? `sentence` : `sentences`}</> : <><b>{q.site}</b>{` `}<span className={`ui-cac__dot`}>{`·`}</span>{` read, not cited`}</>;
    X = `src-${q.id}`;
  } else {
    if (J) {
      Y = <>{`Quote from `}<b>{J.site}</b></>;
      X = `open-${J.id}`;
    }
  }
  let Q = M(x ?? CRef.current);
  let $ = `${v}-preview`;
  let te = [`${sources.length} ${sources.length === 1 ? `source` : `sources`}`, pagesRead === undefined ? null : `${pagesRead} ${pagesRead === 1 ? `page` : `pages`} read`].filter(Boolean);
  return <div className={[`ui-cac`, className].filter(Boolean).join(` `)} role={`group`} aria-label={`Answer with sources`} data-hot={y ? y.segment === undefined ? `source` : `mark` : undefined} onKeyDown={U}><style href={`ui-cited-answer-clean`} precedence={`default`}>{g}</style><div className={`ui-cac__body`}><div className={`ui-cac__head`}><span className={`ui-cac__stack`} aria-hidden={`true`}>{sources.slice(0, 3).map(e => <P1Component key={e.id} source={e} />)}</span><span className={`ui-cac__meta`}>{te.map((e, t) => <span key={e}>{t > 0 && <span className={`ui-cac__dot`}>{` · `}</span>}{e}</span>)}</span></div><div className={`ui-cac__text`} onPointerLeave={() => setY(null)}>{I.map((e, key) => <p key={key} className={`ui-cac__p`}>{e.map(({
            seg,
            index
          }) => {
            let [, n, i, a] = seg.text.match(/^(\s*)([\s\S]*?)(\s*)$/) ?? [``, ``, seg.text, ``];
            let o = (seg.cite ?? []).filter(N);
            let s = K(seg, index);
            let c = o.length ? Math.max(0, i.search(/\S+$/)) : i.length;
            return <span key={index}>{n}<span className={`ui-cac__seg`} data-hl={s === `hl` ? `` : undefined} data-dim={s === `dim` ? `` : undefined}>{i.slice(0, c)}<span className={`ui-cac__keep`}>{i.slice(c)}{o.map(e => {
                    let n = M(e);
                    let i = y?.segment === index && y.source === e || y?.segment === undefined && y?.source === e;
                    return <button key={e} type={`button`} className={`ui-cac__marker`} data-source={e} data-lit={i ? `` : undefined} data-dim={y && !i ? `` : undefined} aria-expanded={x === e} aria-controls={$} aria-label={`Source ${j(e)}: ${n.site} – ${n.title}`} onPointerEnter={n => n.pointerType === `mouse` && setY({
                      source: e,
                      segment: index
                    })} onPointerLeave={e => e.pointerType === `mouse` && setY(null)} onFocus={() => setY({
                      source: e,
                      segment: index
                    })} onBlur={() => setY(null)} onClick={() => B(e)}>{j(e)}</button>;
                  })}</span></span>{a}</span>;
          })}</p>)}</div><div className={`ui-cac__chips`} data-all={k ? `` : undefined} ref={ERef} role={`list`} aria-label={`Sources`} onPointerLeave={() => setY(null)}>{sources.slice(0, P).map((e, t) => {
          let n = G === e.id;
          return <span key={e.id} role={`listitem`} className={`ui-cac__chip-item`}><button type={`button`} className={`ui-cac__chip`} data-source={e.id} data-lit={n ? `` : undefined} data-dim={G && !n ? `` : undefined} aria-expanded={x === e.id} aria-controls={$} aria-label={`Source ${t + 1}: ${e.site} – ${e.title}`} onPointerEnter={t => t.pointerType === `mouse` && setY({
              source: e.id
            })} onFocus={() => setY({
              source: e.id
            })} onBlur={() => setY(null)} onKeyDown={W} onClick={() => B(e.id)}><P1Component source={e} /><span className={`ui-cac__chip-name`}>{e.site}</span><span className={`ui-cac__chip-num`}>{t + 1}</span></button></span>;
        })}{F > 0 && <span role={`listitem`} className={`ui-cac__chip-item`}><button type={`button`} className={`ui-cac__more`} aria-label={`Show ${F} more ${F === 1 ? `source` : `sources`}`} onKeyDown={W} onClick={() => setK(true)}>{`+`}{F}</button></span>}</div><div className={`ui-cac__ruler`} ref={DRef} aria-hidden={`true`}>{sources.map((e, t) => <span key={e.id} className={`ui-cac__chip`} data-chip={``}><P1Component source={e} /><span className={`ui-cac__chip-name`}>{e.site}</span><span className={`ui-cac__chip-num`}>{t + 1}</span></span>)}<span className={`ui-cac__more`} data-more={``}>{`+`}{sources.length}</span></div><div id={$} className={`ui-cac__fold`} data-open={x ? `` : undefined} inert={!x} role={`region`} aria-label={Q ? `Source ${j(Q.id)}: ${Q.site}` : `Source`}><div className={`ui-cac__clip`}>{Q && <div key={Q.id} className={`ui-cac__preview`}><div className={`ui-cac__pv-head`}><P1Component source={Q} /><span className={`ui-cac__pv-meta`}><span className={`ui-cac__pv-domain`}>{o(Q.url) || Q.site}</span>{Q.date && <span className={`ui-cac__pv-date`}><span className={`ui-cac__dot`}>{` · `}</span>{Q.date}</span>}</span><span className={`ui-cac__pv-num`}>{j(Q.id)}</span><button type={`button`} className={`ui-cac__close`} aria-label={`Close source`} onClick={onClick}><D1Component d={f.close} /></button></div><div className={`ui-cac__pv-title`}>{Q.title}</div>{Q.quote && <blockquote className={`ui-cac__quote`}>{l(Q.quote, Q.highlight, z(Q.id).map(e => e.text).join(` `))}</blockquote>}<div className={`ui-cac__pv-actions`}>{Q.url ? <a className={`ui-cac__btn ui-cac__btn--main`} href={Q.url} target={`_blank`} rel={`noreferrer noopener`} onClick={e => {
                if (onOpenSource) {
                  e.preventDefault();
                  onOpenSource(Q);
                }
              }}><D1Component d={f.out} />{`Open source`}</a> : onOpenSource && <button type={`button`} className={`ui-cac__btn ui-cac__btn--main`} onClick={() => onOpenSource(Q)}><D1Component d={f.out} />{`Open source`}</button>}{Q.quote && <button type={`button`} className={`ui-cac__btn`} data-done={w?.source === Q.id ? `` : undefined} aria-label={`Copy quote`} onClick={() => H(Q)}><span key={w?.source === Q.id ? `done` : `idle`} className={`ui-cac__btn-icon`}><D1Component d={w?.source === Q.id ? f.done : f.copy} /></span><span className={`ui-cac__btn-text`}>{w?.source === Q.id ? `Copied` : `Copy quote`}</span></button>}</div></div>}</div></div></div><div className={`ui-cac__foot`}><span className={`ui-cac__caption`} aria-live={`polite`}><U1Component id={X} tone={tone}>{Y}</U1Component></span>{action && <button type={`button`} className={`ui-cac__action`} onClick={action.onClick}>{action.label}<D1Component d={f.arrow} /></button>}</div></div>;
}
var g = `.ui-cac{--ui-cac-card: #ffffff;--ui-cac-ink: rgba(0, 0, 0, 0.88);--ui-cac-strong: #000000;--ui-cac-text: rgba(0, 0, 0, 0.61);--ui-cac-muted: rgba(0, 0, 0, 0.45);--ui-cac-faint: rgba(0, 0, 0, 0.27);--ui-cac-icon: rgba(0, 0, 0, 0.447);--ui-cac-line: rgba(0, 0, 0, 0.06);--ui-cac-fill: rgba(0, 0, 0, 0.06);--ui-cac-fill-strong: rgba(0, 0, 0, 0.1);--ui-cac-wash: rgba(0, 0, 0, 0.03);--ui-cac-hl: rgba(0, 96, 226, 0.07);--ui-cac-mark: rgba(0, 96, 226, 0.1);--ui-cac-ok: #1a9a52;--ui-cac-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-cac-focus: rgba(0, 96, 226, 0.35);--ui-cac-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;max-width: 460px;min-width: 0;container-type: inline-size;border-radius: 10px;background: var(--ui-cac-card);box-shadow: var(--ui-cac-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-cac-ink);text-align: left;-webkit-font-smoothing: antialiased}.ui-cac *, .ui-cac *::before, .ui-cac *::after{box-sizing: border-box}:where(.ui-cac) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-cac :is(button, a):focus-visible{outline: 2px solid var(--ui-cac-focus);outline-offset: 1px}.ui-cac svg{display: block;flex: none}.ui-cac b{font-weight: 500;color: var(--ui-cac-ink)}.ui-cac__dot{color: var(--ui-cac-faint)}.ui-cac__icon{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-cac [data-tone="blue"]{--ui-cac-g: #1f5fd1;--ui-cac-g-bg: rgba(0, 96, 226, 0.08)}.ui-cac [data-tone="violet"]{--ui-cac-g: #6a4fd0;--ui-cac-g-bg: rgba(110, 86, 230, 0.09)}.ui-cac [data-tone="green"]{--ui-cac-g: #1a8a4a;--ui-cac-g-bg: rgba(26, 154, 82, 0.09)}.ui-cac [data-tone="amber"]{--ui-cac-g: #a46a06;--ui-cac-g-bg: rgba(232, 162, 12, 0.12)}.ui-cac [data-tone="gray"]{--ui-cac-g: rgba(0, 0, 0, 0.55);--ui-cac-g-bg: rgba(0, 0, 0, 0.06)}.ui-cac__glyph{display: grid;flex: none;place-items: center;width: 16px;height: 16px;overflow: hidden;border-radius: 4px;background: var(--ui-cac-g-bg);font-size: 9.5px;font-weight: 500;line-height: 1;color: var(--ui-cac-g)}.ui-cac__glyph > :is(img, svg){width: 100%;height: 100%;object-fit: cover}.ui-cac__body{padding: 16px 20px 16px}.ui-cac__head{display: flex;align-items: center;gap: 8px;height: 16px}.ui-cac__stack{display: flex;flex: none}.ui-cac__stack .ui-cac__glyph{box-shadow: 0 0 0 1.5px var(--ui-cac-card)}.ui-cac__stack .ui-cac__glyph + .ui-cac__glyph{margin-left: -4px}.ui-cac__meta{min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-cac-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-cac__text{margin-top: 12px;color: var(--ui-cac-ink)}.ui-cac__p{margin: 0;font-size: 13px;line-height: 22px}.ui-cac__p + .ui-cac__p{margin-top: 10px}.ui-cac__seg{margin: 0 -2px;padding: 2px 2px;border-radius: 4px;-webkit-box-decoration-break: clone;box-decoration-break: clone;transition: background-color 200ms ease, color 200ms ease}.ui-cac__seg[data-hl]{background: var(--ui-cac-hl);color: var(--ui-cac-strong)}.ui-cac__seg[data-dim]{color: var(--ui-cac-faint)}.ui-cac__keep{white-space: nowrap}.ui-cac__marker{position: relative;display: inline-grid;place-items: center;min-width: 16px;height: 16px;margin-left: 3px;padding: 0 4px;border-radius: 4px;background: var(--ui-cac-fill);box-shadow: inset 0 0 0 0.5px var(--ui-cac-line);font-size: 10px;font-weight: 500;line-height: 16px;color: var(--ui-cac-text);vertical-align: 1px;font-variant-numeric: tabular-nums;transition: background-color 160ms ease, color 160ms ease, opacity 200ms ease}.ui-cac__marker + .ui-cac__marker{margin-left: 2px}.ui-cac__marker::after{content: "";position: absolute;inset: -4px -2px}.ui-cac__marker:hover, .ui-cac__marker[data-lit], .ui-cac__marker[aria-expanded="true"]{background: var(--ui-cac-fill-strong);color: var(--ui-cac-ink)}.ui-cac__marker[data-dim]:not([aria-expanded="true"]){opacity: 0.5}.ui-cac__chips{display: flex;gap: ${m}px;margin-top: 16px;min-width: 0}.ui-cac__chips[data-all]{flex-wrap: wrap}.ui-cac__chip-item{display: flex;flex: none;min-width: 0;max-width: 100%}.ui-cac__chip-item:only-child, .ui-cac__chips:not([data-all]) .ui-cac__chip-item:first-child:nth-last-child(2){flex: 0 1 auto}.ui-cac__chip{display: inline-flex;align-items: center;gap: 6px;min-width: 0;max-width: 100%;height: 28px;padding: 0 8px 0 6px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-cac-line);font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-cac-text);white-space: nowrap;transition: background-color 140ms ease, color 140ms ease, opacity 200ms ease}.ui-cac__chip:hover, .ui-cac__chip[data-lit]{background: var(--ui-cac-wash);color: var(--ui-cac-ink)}.ui-cac__chip[aria-expanded="true"]{background: var(--ui-cac-fill);color: var(--ui-cac-ink)}.ui-cac__chip[data-dim]:not([aria-expanded="true"]){opacity: 0.5}.ui-cac__chip-name{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-cac__chip-num{flex: none;margin-left: -1px;font-size: 11px;font-weight: 400;color: var(--ui-cac-faint);font-variant-numeric: tabular-nums}.ui-cac__more{display: inline-grid;flex: none;place-items: center;height: 28px;padding: 0 8px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-cac-line);font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-cac-text);font-variant-numeric: tabular-nums;transition: background-color 140ms ease, color 140ms ease}.ui-cac__more:hover{background: var(--ui-cac-wash);color: var(--ui-cac-ink)}.ui-cac__ruler{position: absolute;top: 0;left: 0;display: flex;gap: ${m}px;height: 0;overflow: hidden;visibility: hidden;pointer-events: none}.ui-cac__ruler > *{flex: none}.ui-cac__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 420ms var(--ui-cac-ease), opacity 220ms ease}.ui-cac__fold[data-open]{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows 420ms var(--ui-cac-ease), opacity 320ms ease 80ms}.ui-cac__clip{min-height: 0;overflow: hidden;margin: 0 -4px -4px;padding: 0 4px 4px}.ui-cac__preview{margin-top: 12px;padding: 10px 12px 12px;border-radius: 8px;background: var(--ui-cac-card);box-shadow: var(--ui-cac-shadow);animation: ui-cac-swap-in 320ms ease both}.ui-cac__pv-head{display: flex;align-items: center;gap: 8px;height: 24px}.ui-cac__pv-meta{flex: 1;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-cac-muted);white-space: nowrap;text-overflow: ellipsis}.ui-cac__pv-domain{color: var(--ui-cac-text)}.ui-cac__pv-num{display: grid;flex: none;place-items: center;min-width: 16px;height: 16px;padding: 0 4px;border-radius: 4px;background: var(--ui-cac-fill);font-size: 10px;font-weight: 500;line-height: 16px;color: var(--ui-cac-text);font-variant-numeric: tabular-nums}.ui-cac__close{display: grid;flex: none;place-items: center;width: 24px;height: 24px;margin-right: -6px;border-radius: 6px;color: var(--ui-cac-icon);transition: background-color 140ms ease, color 140ms ease}.ui-cac__close:hover{background: var(--ui-cac-wash);color: var(--ui-cac-ink)}.ui-cac__pv-title{display: -webkit-box;margin-top: 6px;overflow: hidden;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-cac-strong);-webkit-line-clamp: 2;-webkit-box-orient: vertical}.ui-cac__quote{margin: 8px 0 0;padding: 0 0 0 10px;border-left: 2px solid var(--ui-cac-fill);font-size: 12px;line-height: 20px;color: var(--ui-cac-text)}.ui-cac__quote mark{margin: 0 -1px;padding: 1px 1px;border-radius: 3px;background: var(--ui-cac-mark);color: var(--ui-cac-ink);-webkit-box-decoration-break: clone;box-decoration-break: clone}.ui-cac__pv-actions{display: flex;flex-wrap: wrap;align-items: center;gap: 8px;margin-top: 12px}.ui-cac__btn{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 10px 0 8px;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-cac-text);text-decoration: none;white-space: nowrap;transition: background-color 140ms ease, color 140ms ease}.ui-cac__btn .ui-cac__icon{color: var(--ui-cac-icon);transition: color 140ms ease, transform 220ms var(--ui-cac-ease)}.ui-cac__btn:hover{background: var(--ui-cac-wash);color: var(--ui-cac-ink)}.ui-cac__btn:hover .ui-cac__icon{color: var(--ui-cac-ink)}.ui-cac__btn--main{background: var(--ui-cac-card);box-shadow: var(--ui-cac-shadow);color: var(--ui-cac-strong)}.ui-cac__btn--main:hover{background: #fafafa;color: var(--ui-cac-strong)}.ui-cac__btn--main:hover .ui-cac__icon{transform: translate(1px, -1px)}.ui-cac__btn[data-done], .ui-cac__btn[data-done] .ui-cac__icon{color: var(--ui-cac-ok)}.ui-cac__btn-icon{display: grid;place-items: center;width: 16px;height: 16px;animation: ui-cac-swap-in 280ms ease both}.ui-cac__foot{display: flex;align-items: center;gap: 12px;height: 44px;padding: 0 8px 0 20px;border-top: 0.5px solid var(--ui-cac-line)}.ui-cac__foot:not(:has(.ui-cac__action)){padding-right: 20px}.ui-cac__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-cac-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-cac__swap{display: grid;min-width: 0}.ui-cac__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;animation: ui-cac-swap-in 320ms ease both}.ui-cac__swap-item[data-out]{animation: ui-cac-swap-out 220ms ease both}.ui-cac__swap-item[data-tone="ok"]{color: var(--ui-cac-ok)}.ui-cac__action{display: inline-flex;flex: none;align-items: center;gap: 6px;height: 28px;padding: 0 8px 0 10px;border-radius: 6px;background: var(--ui-cac-card);box-shadow: var(--ui-cac-shadow);font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-cac-strong);white-space: nowrap;transition: background-color 140ms ease}.ui-cac__action .ui-cac__icon{color: var(--ui-cac-icon);transition: transform 220ms var(--ui-cac-ease), color 140ms ease}.ui-cac__action:hover{background: #fafafa}.ui-cac__action:hover .ui-cac__icon{color: var(--ui-cac-ink);transform: translateX(2px)}@keyframes ui-cac-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-cac-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@container (max-width: 400px){.ui-cac__body{padding: 14px 16px 16px}.ui-cac__foot{padding-left: 16px}}@container (max-width: 360px){.ui-cac__pv-num{display: none}}@container (max-width: 280px){.ui-cac__btn-text{display: none}}@media (pointer: coarse){.ui-cac__marker::after{inset: -8px -5px}.ui-cac__chip, .ui-cac__more{height: 34px}.ui-cac__btn{height: 34px}.ui-cac__close{width: 32px;height: 32px;margin-right: -8px}.ui-cac__action{height: 34px}.ui-cac__foot{height: 52px}}@media (prefers-reduced-motion: reduce){.ui-cac *, .ui-cac *::before, .ui-cac *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-cac{--ui-cac-card: #1c1c1e;--ui-cac-ink: rgba(255, 255, 255, 0.9);--ui-cac-strong: #ffffff;--ui-cac-text: rgba(255, 255, 255, 0.62);--ui-cac-muted: rgba(255, 255, 255, 0.46);--ui-cac-faint: rgba(255, 255, 255, 0.3);--ui-cac-icon: rgba(255, 255, 255, 0.5);--ui-cac-line: rgba(255, 255, 255, 0.08);--ui-cac-fill: rgba(255, 255, 255, 0.08);--ui-cac-fill-strong: rgba(255, 255, 255, 0.14);--ui-cac-wash: rgba(255, 255, 255, 0.04);--ui-cac-hl: rgba(77, 141, 255, 0.14);--ui-cac-mark: rgba(77, 141, 255, 0.24);--ui-cac-ok: #3ec27a;--ui-cac-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-cac-focus: rgba(77, 141, 255, 0.5)}:where(.dark, [data-theme="dark"]) .ui-cac__btn--main:hover, :where(.dark, [data-theme="dark"]) .ui-cac__action:hover{background: #232326}:where(.dark, [data-theme="dark"]) .ui-cac [data-tone="blue"]{--ui-cac-g: #9bbcff;--ui-cac-g-bg: rgba(77, 141, 255, 0.16)}:where(.dark, [data-theme="dark"]) .ui-cac [data-tone="violet"]{--ui-cac-g: #c3b4ff;--ui-cac-g-bg: rgba(124, 92, 255, 0.18)}:where(.dark, [data-theme="dark"]) .ui-cac [data-tone="green"]{--ui-cac-g: #6ee7a8;--ui-cac-g-bg: rgba(34, 160, 90, 0.16)}:where(.dark, [data-theme="dark"]) .ui-cac [data-tone="amber"]{--ui-cac-g: #f5c264;--ui-cac-g-bg: rgba(240, 160, 32, 0.16)}:where(.dark, [data-theme="dark"]) .ui-cac [data-tone="gray"]{--ui-cac-g: rgba(255, 255, 255, 0.62);--ui-cac-g-bg: rgba(255, 255, 255, 0.08)}`;
const sources = [{
  id: `caching`,
  site: `Tokenwise`,
  title: `Prompt caching, explained: what gets stored and for how long`,
  url: `https://tokenwise.dev/blog/prompt-caching`,
  date: `Sep 18, 2026`,
  quote: `A cached prefix is read instead of recomputed. On prompts over 10,000 tokens this cut time to first token by up to 80% in our tests, and cached input is billed at a fraction of the normal rate.`,
  highlight: [`read instead of recomputed`, `cut time to first token by up to 80%`]
}, {
  id: `prompts`,
  site: `Latency Notes`,
  title: `Designing cache-friendly prompts`,
  url: `https://latencynotes.io/cache-friendly-prompts`,
  date: `Aug 2, 2026`,
  quote: `Keep the stable part – system prompt, tool definitions, long documents – at the very start, and put anything that changes per request after it. A single changed character early on invalidates everything behind it.`,
  highlight: [`at the very start`, `anything that changes per request after it`, `invalidates everything behind it`]
}, {
  id: `semantic`,
  site: `Inference Weekly`,
  title: `Semantic caching for LLM apps in production`,
  url: `https://inferenceweekly.com/semantic-caching`,
  date: `Jul 24, 2026`,
  quote: `For FAQ-style traffic, the semantic cache answered 31% of requests without calling the model at all, at a median of 40 ms. We only serve a stored answer above a similarity of 0.92.`,
  highlight: [`31% of requests`, `median of 40 ms`]
}];
const segments = [{
  text: `The biggest win is prompt caching: the provider reuses the processed start of your prompt, so a long system prompt isn't recomputed on every call.`,
  cite: [`caching`]
}, {
  text: ` On prompts over 10K tokens that can cut time to first token by up to 80%.`,
  cite: [`caching`]
}, {
  text: ` It only works while that start stays identical, so put the system prompt, tools and long documents first and anything that changes per request last.`,
  cite: [`prompts`, `caching`]
}, {
  text: `For repeated questions, add a semantic cache in front of the model: close matches get a stored answer in about 40 ms,`,
  cite: [`semantic`],
  paragraph: true
}, {
  text: ` which covered nearly a third of FAQ-style traffic in one production setup.`,
  cite: [`semantic`]
}, {
  text: ` Stream the rest, so people see the first words while the answer is still being written.`
}];
function YComponent() {
  let eRef = n.useRef(null);
  let tRef = n.useRef(false);
  let iRef = n.useRef(false);
  n.useEffect(() => {
    let n = t => eRef.current?.querySelector(t);
    let r = (t, n) => {
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
    let a = e => n(`.ui-cac__marker[data-source="${e}"]`);
    let o = [[700, () => r(a(`caching`), `pointerover`)], [2600, () => r(a(`caching`), `pointerout`)], [500, () => a(`prompts`)?.click()], [3800, () => n(`.ui-cac__close`)?.click()], [1800, () => {}]];
    let s = 0;
    let c = 0;
    let l = () => {
      if (!tRef.current) {
        c = window.setTimeout(() => {
          if (!tRef.current) {
            o[s][1]();
            s = (s + 1) % o.length;
            l();
          }
        }, o[s][0]);
      }
    };
    l();
    return () => window.clearTimeout(c);
  }, []);
  let a = () => {
    if (!iRef.current) {
      tRef.current = true;
    }
  };
  return <div ref={eRef} className={`ca-demo`} onPointerEnter={a} onPointerDownCapture={a} onKeyDownCapture={a} onFocusCapture={a}><H1Component segments={segments} sources={sources} pagesRead={12} onOpenSource={() => {}} action={{
      label: `Follow up`,
      onClick: () => {}
    }} /></div>;
}
export { YComponent as default };
