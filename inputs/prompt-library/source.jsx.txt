// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
const n = t_1();
const r = t();
const i = [`blue`, `violet`, `amber`, `green`, `red`, `gray`];
const a = /\{([A-Za-z0-9_-]+)\}/g;
const o = body => {
  let t = [];
  let n = 0;
  for (let r of body.matchAll(a)) {
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
const s = body => [...new Set([...body.matchAll(a)].map(e => e[1]))];
const c = (body, values) => body.replace(a, (e, n) => {
  if (values[n]?.trim()) {
    return values[n];
  }
  return e;
});
const l = e => Math.max(1, Math.round(e.length / 4));
const u = e => {
  let t = {};
  for (let n of s(e.body)) {
    t[n] = e.variables?.[n]?.default ?? ``;
  }
  return t;
};
const d = e => 1 - (1 - e) ** 4;
const f = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function useP(e, t) {
  let [r, setR] = n.useState(e);
  let aRef = n.useRef(e);
  n.useEffect(() => {
    let aRef_current = aRef.current;
    if (f() || aRef_current === e) {
      aRef.current = e;
      setR(e);
      return;
    }
    let r = performance.now();
    let o = 0;
    let s = c => {
      let l = Math.min(1, (c - r) / t);
      aRef.current = aRef_current + (e - aRef_current) * d(l);
      setR(aRef.current);
      if (l < 1) {
        o = requestAnimationFrame(s);
      }
    };
    o = requestAnimationFrame(s);
    return () => cancelAnimationFrame(o);
  }, [e, t]);
  return r;
}
function M1Component({
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
  return <span className={`ui-pli__swap`}>{c && <span key={`out-${c.id}`} className={`ui-pli__swap-item`} data-out={``} data-tone={c.tone} aria-hidden={`true`}>{c.node}</span>}<span key={id} className={`ui-pli__swap-item`} data-tone={tone}>{children}</span></span>;
}
const h = {
  stroke: `currentColor`,
  strokeWidth: 1.4,
  strokeLinecap: `round`,
  strokeLinejoin: `round`
};
const G1Component = () => <svg width={`13`} height={`13`} viewBox={`0 0 13 13`} fill={`none`} aria-hidden={`true`}><circle cx={`5.8`} cy={`5.8`} r={`3.8`} {...h} /><path d={`m8.6 8.6 2.4 2.4`} {...h} /></svg>;
const EeComponent = () => <svg width={`12`} height={`12`} viewBox={`0 0 12 12`} fill={`none`} aria-hidden={`true`}><rect x={`3.8`} y={`3.8`} width={`6.4`} height={`6.4`} rx={`1.6`} {...h} /><path d={`M8.2 3.6V3.2A1.4 1.4 0 0 0 6.8 1.8H3.2a1.4 1.4 0 0 0-1.4 1.4v3.6a1.4 1.4 0 0 0 1.4 1.4h.4`} {...h} /></svg>;
const TeComponent = () => <svg width={`12`} height={`12`} viewBox={`0 0 12 12`} fill={`none`} aria-hidden={`true`}><path d={`m2.6 6.3 2.2 2.2 4.6-5`} {...h} strokeWidth={1.6} /></svg>;
const NeComponent = () => <svg width={`12`} height={`12`} viewBox={`0 0 12 12`} fill={`none`} aria-hidden={`true`}><path d={`M2.5 6h7M6.5 3l3 3-3 3`} {...h} /></svg>;
function Component({
  template,
  tone,
  values,
  flash,
  idBase,
  onChange,
  onHint,
  onEnter,
  out
}) {
  let p = o(template.body);
  let m = s(template.body);
  let length = m.filter(e => values[e]?.trim()).length;
  let g = name => {
    if (flash && flash.name === name) {
      if (flash.n % 2) {
        return `a`;
      }
      return `b`;
    }
  };
  return <div className={`ui-pli__panel`} data-out={out ? `` : undefined} aria-hidden={out || undefined} inert={out}><div className={`ui-pli__panel-head`}><span className={`ui-pli__panel-title`}>{template.title}</span>{template.category && <span className={`ui-pli__tag`} data-tone={tone}>{template.category}</span>}{m.length > 0 && <span className={`ui-pli__count`}><span className={`ui-pli__bars`} aria-hidden={`true`}>{m.map(e => <span key={e} className={`ui-pli__bar`} data-on={values[e]?.trim() ? `` : undefined} />)}</span>{length}{` of `}{m.length}{` filled`}</span>}</div><p className={`ui-pli__body`}>{p.map((t, a) => {
        if (`text` in t) {
          return <n.Fragment key={a}>{t.text}</n.Fragment>;
        }
        return <span key={a} className={`ui-pli__glue`}><span className={`ui-pli__token`} data-filled={values[t.name]?.trim() ? `` : undefined} data-flash={g(t.name)} onPointerEnter={e => e.pointerType === `mouse` && onHint?.(t.name)} onPointerLeave={e => e.pointerType === `mouse` && onHint?.(null)}><span className={`ui-pli__sizer`} aria-hidden={`true`}>{values[t.name] || t.name}</span><input className={`ui-pli__input`} data-var={t.name} size={1} value={values[t.name] ?? ``} placeholder={t.name} aria-label={template.variables?.[t.name]?.description ? `${t.name} – ${template.variables[t.name].description}` : t.name} spellCheck={false} autoComplete={`off`} onChange={e => onChange?.(t.name, e.target.value)} onFocus={() => onHint?.(t.name)} onBlur={() => onHint?.(null)} onKeyDown={e => {
              if (e.key === `Enter`) {
                e.preventDefault();
                onEnter?.(t.name);
              }
            }} /></span>{t.tail}</span>;
      })}</p><div className={`ui-pli__label`} id={`${idBase}-preview`}>{`Preview`}</div><div className={`ui-pli__preview`} aria-labelledby={`${idBase}-preview`} role={`region`}>{p.map((e, t) => {
        if (`text` in e) {
          return <n.Fragment key={t}>{e.text}</n.Fragment>;
        }
        return <span key={t} className={`ui-pli__glue`}>{values[e.name]?.trim() ? <span className={`ui-pli__fill`} data-flash={g(e.name)}>{values[e.name]}</span> : <span className={`ui-pli__hole`}>{`{${e.name}}`}</span>}{e.tail}</span>;
      })}</div></div>;
}
function V1Component({
  templates,
  value,
  defaultValue,
  onSelect,
  onUse,
  onCopy,
  title = `Prompts`,
  useLabel = `Use prompt`,
  className
}) {
  let idBase = n.useId();
  let [S, setS] = n.useState(defaultValue ?? templates[0]?.id);
  let ae = value ?? S;
  let C = templates.find(e => e.id === ae) ?? templates[0];
  let [w, setW] = n.useState(``);
  let [oe, setOe] = n.useState({});
  let E = e => ({
    ...u(e),
    ...oe[e.id]
  });
  let [flash, setFlash] = n.useState(null);
  let [O, setO] = n.useState(null);
  let [le, setLe] = n.useState(false);
  let [j, setJ] = n.useState(null);
  let [N, setN] = n.useState(``);
  let F = (() => {
    let t = new Map();
    for (let n of templates) {
      if (n.category && !t.has(n.category)) {
        t.set(n.category, i[t.size % i.length]);
      }
    }
    return e => e.tone ?? t.get(e.category ?? ``) ?? `gray`;
  })();
  let I = w.trim().toLowerCase();
  let L = I ? templates.filter(e => [e.title, e.category ?? ``, e.body].some(e => e.toLowerCase().includes(I))) : templates;
  let R = e => {
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
  n.useEffect(() => {
    if (!z) {
      return;
    }
    let e = window.setTimeout(() => setZ(null), 260);
    return () => window.clearTimeout(e);
  }, [z]);
  let H = z ? templates.find(e => e.id === z.id) : undefined;
  let URef = n.useRef(null);
  let WRef = n.useRef(new Map());
  let [G, setG] = n.useState({
    y: 0,
    h: 0,
    on: false,
    moved: false
  });
  let fe = L.map(e => e.id).join(`|`);
  n.useLayoutEffect(() => {
    let e = () => {
      let e = C ? WRef.current.get(C.id) : undefined;
      setG(t => {
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
    return () => n.disconnect();
  }, [C?.id, fe]);
  let onKeyDown = e => {
    if (!L.length) {
      return;
    }
    let t = L.findIndex(e => e.id === C?.id);
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
  let J = q.filter(e => !values[e]?.trim());
  let Y = !!C && J.length === 0;
  let X = C ? c(C.body, values) : ``;
  let me = useP(l(X), 420);
  let onChange = (e, t) => {
    if (!C) {
      return;
    }
    let n = C.id;
    setOe(r => ({
      ...r,
      [n]: {
        ...E(C),
        ...r[n],
        [e]: t
      }
    }));
    setFlash(t => ({
      name: e,
      n: (t?.n ?? 0) + 1
    }));
  };
  let [ge, setGe] = n.useState(0);
  let veRef = n.useRef(Y);
  let yeRef = n.useRef(C?.id);
  n.useEffect(() => {
    if (Y && !veRef.current && yeRef.current === C?.id) {
      setGe(e => e + 1);
      setN(`All variables filled`);
    }
    veRef.current = Y;
    yeRef.current = C?.id;
  }, [Y, C?.id]);
  let beRef = n.useRef(null);
  let onEnter = e => {
    let t = [...(beRef.current?.querySelectorAll(`.ui-pli__panel:not([data-out]) .ui-pli__input`) ?? [])];
    let n = t.findIndex(t => t.dataset.var === e);
    let r = [...t.slice(n + 1), ...t.slice(0, n)].find(e => !e.value.trim());
    if (r) {
      r.focus();
    } else if (Y) {
      onClick_1();
    }
  };
  let onClick = async () => {
    try {
      await navigator.clipboard?.writeText(X);
    } catch {}
    onCopy?.(X);
    setJ({
      id: Date.now(),
      kind: `copied`
    });
    setN(`Prompt copied`);
  };
  let onClick_1 = () => {
    if (Y && C) {
      onUse?.(X, C, values);
      setJ({
        id: Date.now(),
        kind: `used`
      });
      setN(`${C.title} used`);
    }
  };
  n.useEffect(() => {
    if (!j) {
      return;
    }
    let e = window.setTimeout(() => setJ(null), 1800);
    return () => window.clearTimeout(e);
  }, [j]);
  n.useEffect(() => {
    if (!N) {
      return;
    }
    let e = window.setTimeout(() => setN(``), 2000);
    return () => window.clearTimeout(e);
  }, [N]);
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
  return <div ref={beRef} className={[`ui-pli`, className].filter(Boolean).join(` `)} role={`group`} aria-labelledby={`${idBase}-title`}><style href={`ui-prompt-library`} precedence={`default`}>{re}</style><div className={`ui-pli__card`}><div className={`ui-pli__side`}><div className={`ui-pli__side-head`}><span id={`${idBase}-title`} className={`ui-pli__title`}>{title}</span><span className={`ui-pli__total`}>{templates.length}</span></div><label className={`ui-pli__search`}><G1Component /><input type={`search`} value={w} placeholder={`Search templates`} aria-label={`Search templates`} aria-controls={`${idBase}-list`} onChange={e => setW(e.target.value)} onKeyDown={e => {
            if (e.key === `ArrowDown` && L.length) {
              e.preventDefault();
              let t = L.find(e => e.id === C?.id) ?? L[0];
              R(t.id);
              WRef.current.get(t.id)?.focus();
            } else {
              if (e.key === `Escape` && w) {
                e.preventDefault();
                setW(``);
              }
            }
          }} /></label><div ref={URef} id={`${idBase}-list`} className={`ui-pli__list`} role={`listbox`} aria-label={`Templates`} onKeyDown={onKeyDown}><span className={`ui-pli__glide`} aria-hidden={`true`} data-on={G.on ? `` : undefined} data-moved={G.moved ? `` : undefined} style={{
            transform: `translateY(${G.y}px)`,
            height: G.h
          }} />{L.map(e => {
            let t = e.id === C?.id;
            let n = t || !L.some(e => e.id === C?.id) && e === L[0];
            return <div key={e.id} ref={t => {
              if (t) {
                WRef.current.set(e.id, t);
              } else {
                WRef.current.delete(e.id);
              }
            }} className={`ui-pli__option`} role={`option`} aria-selected={t} tabIndex={n ? 0 : -1} onClick={() => R(e.id)} onKeyDown={t => {
              if (t.key === `Enter` || t.key === ` `) {
                t.preventDefault();
                R(e.id);
              }
            }}><span className={`ui-pli__option-title`}>{e.title}</span>{e.category && <span className={`ui-pli__tag`} data-tone={F(e)}>{e.category}</span>}</div>;
          })}{L.length === 0 && <div className={`ui-pli__empty`}>{`No templates match`}</div>}</div></div><div className={`ui-pli__main`}>{H && <Component key={`out-${z.key}`} template={H} tone={F(H)} values={E(H)} flash={null} idBase={`${idBase}-out`} out />}{C && <Component key={C.id} template={C} tone={F(C)} values={values} flash={flash} idBase={idBase} onChange={onChange} onHint={setO} onEnter={onEnter} />}</div></div><div className={`ui-pli__foot`}><span className={`ui-pli__caption`}><M1Component id={id} tone={tone}>{Z}</M1Component></span><button type={`button`} className={`ui-pli__copy`} onClick={onClick} aria-label={`Copy prompt`} disabled={!C}><span key={j?.kind === `copied` ? `done` : `copy`} className={`ui-pli__copy-icon`}>{j?.kind === `copied` ? <TeComponent /> : <EeComponent />}</span><span className={`ui-pli__copy-text`}>{`Copy`}</span></button><button type={`button`} className={`ui-pli__use`} aria-disabled={!Y} data-pulse={ge ? ge % 2 ? `a` : `b` : undefined} onClick={onClick_1} onPointerEnter={() => setLe(true)} onPointerLeave={() => setLe(false)} onFocus={() => setLe(true)} onBlur={() => setLe(false)}>{useLabel}<NeComponent /></button></div><span className={`ui-pli__sr`} role={`status`} aria-live={`polite`}>{N}</span></div>;
}
var re = `.ui-pli{--ui-pli-tray: #f0f0f0;--ui-pli-card: #ffffff;--ui-pli-line: #ececec;--ui-pli-ink: #171717;--ui-pli-text: #404040;--ui-pli-muted: #8f8f8f;--ui-pli-well: #f4f4f5;--ui-pli-accent: #2f6bff;--ui-pli-accent-ink: #1f55d6;--ui-pli-accent-bg: rgba(47, 107, 255, 0.09);--ui-pli-accent-flash: rgba(47, 107, 255, 0.24);--ui-pli-hole: #b4b4b9;--ui-pli-on-ink: #ffffff;--ui-pli-ok: #18794e;--ui-pli-blue: #2f6bff;--ui-pli-blue-bg: rgba(47, 107, 255, 0.1);--ui-pli-violet: #6941c6;--ui-pli-violet-bg: rgba(105, 65, 198, 0.1);--ui-pli-amber: #96590a;--ui-pli-amber-bg: rgba(240, 160, 32, 0.14);--ui-pli-green: #18794e;--ui-pli-green-bg: rgba(34, 160, 90, 0.11);--ui-pli-red: #b42318;--ui-pli-red-bg: rgba(229, 72, 77, 0.1);--ui-pli-gray: #5f5f66;--ui-pli-gray-bg: #f0f0f2;--ui-pli-focus: rgba(23, 23, 23, 0.22);--ui-pli-ease: cubic-bezier(0.32, 0.72, 0.24, 1);box-sizing: border-box;width: 100%;max-width: 640px;min-width: 0;container-type: inline-size;padding: 4px;border-radius: 20px;background: var(--ui-pli-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;color: var(--ui-pli-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-pli *, .ui-pli *::before, .ui-pli *::after{box-sizing: border-box}:where(.ui-pli) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-pli) input{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;outline: none}.ui-pli button:focus-visible, .ui-pli__option:focus-visible{outline: 2px solid var(--ui-pli-focus);outline-offset: 2px}.ui-pli svg{display: block;flex: none}.ui-pli b{font-weight: 500;color: var(--ui-pli-ink)}.ui-pli p{margin: 0}.ui-pli__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-pli__card{display: grid;grid-template-columns: 220px minmax(0, 1fr);border-radius: 16px;background: var(--ui-pli-card);box-shadow: 0 0 0 1px var(--ui-pli-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-pli__side{min-width: 0;padding: 12px 8px 8px;border-right: 1px solid var(--ui-pli-line)}.ui-pli__side-head{display: flex;align-items: center;gap: 6px;height: 22px;padding: 0 6px}.ui-pli__title{overflow: hidden;font-size: 13px;font-weight: 500;color: var(--ui-pli-text);white-space: nowrap;text-overflow: ellipsis}.ui-pli__total{font-size: 12px;color: var(--ui-pli-muted);font-variant-numeric: tabular-nums}.ui-pli__search{display: flex;align-items: center;gap: 7px;height: 30px;margin-top: 8px;padding: 0 9px;border-radius: 8px;background: var(--ui-pli-well);color: var(--ui-pli-muted);cursor: text;transition: box-shadow 160ms ease}.ui-pli__search:focus-within{box-shadow: 0 0 0 1px var(--ui-pli-line), 0 0 0 3px var(--ui-pli-focus)}.ui-pli__search input{flex: 1;min-width: 0;height: 100%;font-size: 12.5px;color: var(--ui-pli-ink);-webkit-appearance: none;appearance: none}.ui-pli__search input::placeholder{color: var(--ui-pli-muted)}.ui-pli__search input::-webkit-search-cancel-button{-webkit-appearance: none}.ui-pli__list{position: relative;display: flex;flex-direction: column;gap: 2px;margin-top: 6px}.ui-pli__glide{position: absolute;top: 0;left: 0;right: 0;border-radius: 9px;background: var(--ui-pli-well);opacity: 0;pointer-events: none;transition: opacity 180ms ease}.ui-pli__glide[data-on]{opacity: 1}.ui-pli__glide[data-moved]{transition: transform 340ms var(--ui-pli-ease), height 340ms var(--ui-pli-ease), opacity 180ms ease}.ui-pli__option{position: relative;display: flex;align-items: center;gap: 8px;height: 34px;padding: 0 6px 0 8px;border-radius: 9px;color: var(--ui-pli-text);cursor: pointer;user-select: none;transition: color 160ms ease;-webkit-tap-highlight-color: transparent}.ui-pli__option::before{content: "";position: absolute;inset: 0;z-index: -1;border-radius: inherit;transition: background-color 160ms ease}.ui-pli__list{isolation: isolate}.ui-pli__glide{z-index: -1}.ui-pli__option:hover:not([aria-selected="true"])::before{background: color-mix(in srgb, var(--ui-pli-well) 55%, transparent)}.ui-pli__option[aria-selected="true"]{color: var(--ui-pli-ink)}.ui-pli__option-title{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-pli__empty{height: 34px;padding: 0 8px;font-size: 12.5px;line-height: 34px;color: var(--ui-pli-muted)}.ui-pli__tag{flex: none;height: 18px;padding: 0 5px;border-radius: 5px;font-size: 11px;font-weight: 500;line-height: 18px;white-space: nowrap;color: var(--ui-pli-gray);background: var(--ui-pli-gray-bg)}.ui-pli__tag[data-tone="blue"]{color: var(--ui-pli-blue);background: var(--ui-pli-blue-bg)}.ui-pli__tag[data-tone="violet"]{color: var(--ui-pli-violet);background: var(--ui-pli-violet-bg)}.ui-pli__tag[data-tone="amber"]{color: var(--ui-pli-amber);background: var(--ui-pli-amber-bg)}.ui-pli__tag[data-tone="green"]{color: var(--ui-pli-green);background: var(--ui-pli-green-bg)}.ui-pli__tag[data-tone="red"]{color: var(--ui-pli-red);background: var(--ui-pli-red-bg)}.ui-pli__main{display: grid;min-width: 0}.ui-pli__panel{grid-area: 1 / 1;min-width: 0;padding: 12px 14px 14px;animation: ui-pli-in 360ms ease both}.ui-pli__panel[data-out]{animation: ui-pli-out 240ms ease both;pointer-events: none}.ui-pli__panel-head{display: flex;align-items: center;gap: 8px;min-height: 22px}.ui-pli__panel-title{min-width: 0;overflow: hidden;font-size: 13.5px;font-weight: 600;color: var(--ui-pli-ink);white-space: nowrap;text-overflow: ellipsis}.ui-pli__count{display: inline-flex;flex: none;align-items: center;gap: 7px;margin-left: auto;font-size: 12px;color: var(--ui-pli-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-pli__bars{display: inline-flex;gap: 2px}.ui-pli__bar{width: 8px;height: 4px;border-radius: 2px;background: var(--ui-pli-line);transition: background-color 300ms ease}.ui-pli__bar[data-on]{background: var(--ui-pli-accent)}.ui-pli__body{margin-top: 10px !important;font-size: 13px;line-height: 26px;color: var(--ui-pli-text);overflow-wrap: anywhere}.ui-pli__glue{white-space: nowrap}.ui-pli__preview .ui-pli__glue{white-space: inherit}.ui-pli__token{position: relative;display: inline-grid;vertical-align: top;max-width: 100%;height: 22px;margin: 2px 0;padding: 0 6px;border-radius: 6px;background: var(--ui-pli-well);box-shadow: inset 0 0 0 1px var(--ui-pli-line);line-height: 22px;color: var(--ui-pli-muted);cursor: text;transition: background-color 200ms ease, box-shadow 200ms ease, color 200ms ease}.ui-pli__token:hover{box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ui-pli-muted) 45%, transparent)}.ui-pli__token[data-filled]{background: var(--ui-pli-accent-bg);box-shadow: none;color: var(--ui-pli-accent-ink)}.ui-pli__token:focus-within{box-shadow: inset 0 0 0 1px var(--ui-pli-accent), 0 0 0 3px var(--ui-pli-accent-bg)}.ui-pli__token[data-flash="a"]{animation: ui-pli-flash-a 900ms ease-out}.ui-pli__token[data-flash="b"]{animation: ui-pli-flash-b 900ms ease-out}.ui-pli__sizer, .ui-pli__input{grid-area: 1 / 1;min-width: 2ch;font-size: 13px;line-height: 22px;white-space: pre}.ui-pli__sizer{padding-right: 1px;font-weight: 500;visibility: hidden;overflow: hidden}.ui-pli__input{width: 100%;height: 22px;color: inherit;font-weight: 500;text-overflow: ellipsis}.ui-pli__input::placeholder{color: var(--ui-pli-muted);font-weight: 400;opacity: 1}.ui-pli__label{margin-top: 12px;font-size: 12px;color: var(--ui-pli-muted)}.ui-pli__preview{margin-top: 4px;padding: 9px 11px;border-radius: 10px;background: var(--ui-pli-well);font-size: 12.5px;line-height: 20px;color: var(--ui-pli-text);white-space: pre-wrap;overflow-wrap: anywhere}.ui-pli__fill{border-radius: 4px;color: var(--ui-pli-ink);font-weight: 500;box-decoration-break: clone;-webkit-box-decoration-break: clone}.ui-pli__fill[data-flash="a"]{animation: ui-pli-mark-a 1100ms ease-out}.ui-pli__fill[data-flash="b"]{animation: ui-pli-mark-b 1100ms ease-out}.ui-pli__hole{color: var(--ui-pli-hole)}.ui-pli__foot{display: flex;align-items: center;gap: 4px;min-height: 40px;padding: 4px 2px 0 10px}.ui-pli__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-pli-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-pli__swap{display: grid;min-width: 0}.ui-pli__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;animation: ui-pli-swap-in 320ms ease both}.ui-pli__swap-item[data-out]{animation: ui-pli-swap-out 220ms ease both}.ui-pli__swap-item[data-tone="ok"]{color: var(--ui-pli-ok)}.ui-pli__copy{display: inline-flex;flex: none;align-items: center;gap: 5px;height: 28px;padding: 0 9px 0 8px;border-radius: 10px;font-size: 12.5px;font-weight: 500;color: var(--ui-pli-text);white-space: nowrap;transition: background-color 160ms ease, color 160ms ease}.ui-pli__copy:hover:not(:disabled){background: var(--ui-pli-card);color: var(--ui-pli-ink)}.ui-pli__copy-icon{display: grid;place-items: center;width: 12px;height: 12px;animation: ui-pli-swap-in 300ms ease both}.ui-pli__use{position: relative;display: inline-flex;flex: none;align-items: center;gap: 5px;height: 28px;padding: 0 9px 0 11px;border-radius: 10px;background: var(--ui-pli-ink);font-size: 12.5px;font-weight: 500;color: var(--ui-pli-on-ink);white-space: nowrap;transition: background-color 200ms ease, color 200ms ease, opacity 200ms ease}.ui-pli__use svg{transition: transform 220ms var(--ui-pli-ease)}.ui-pli__use:hover:not([aria-disabled="true"]) svg{transform: translateX(2px)}.ui-pli__use[aria-disabled="true"]{background: color-mix(in srgb, var(--ui-pli-ink) 10%, transparent);color: var(--ui-pli-muted);cursor: default}.ui-pli__use[data-pulse="a"]{animation: ui-pli-pulse-a 1400ms ease-out}.ui-pli__use[data-pulse="b"]{animation: ui-pli-pulse-b 1400ms ease-out}@keyframes ui-pli-in{from{opacity: 0;filter: blur(2px);transform: translateY(3px)}}@keyframes ui-pli-out{to{opacity: 0;filter: blur(2px)}}@keyframes ui-pli-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-pli-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@keyframes ui-pli-flash-a{from{background-color: var(--ui-pli-accent-flash)}}@keyframes ui-pli-flash-b{from{background-color: var(--ui-pli-accent-flash)}}@keyframes ui-pli-mark-a{from{background-color: var(--ui-pli-accent-flash);box-shadow: 0 0 0 2px var(--ui-pli-accent-flash)}to{background-color: transparent;box-shadow: 0 0 0 2px transparent}}@keyframes ui-pli-mark-b{from{background-color: var(--ui-pli-accent-flash);box-shadow: 0 0 0 2px var(--ui-pli-accent-flash)}to{background-color: transparent;box-shadow: 0 0 0 2px transparent}}@keyframes ui-pli-pulse-a{0%{box-shadow: 0 0 0 0 color-mix(in srgb, var(--ui-pli-ink) 30%, transparent)}60%, 100%{box-shadow: 0 0 0 8px transparent}}@keyframes ui-pli-pulse-b{0%{box-shadow: 0 0 0 0 color-mix(in srgb, var(--ui-pli-ink) 30%, transparent)}60%, 100%{box-shadow: 0 0 0 8px transparent}}@container (max-width: 540px){.ui-pli__card{grid-template-columns: minmax(0, 1fr)}.ui-pli__side{border-right: 0;border-bottom: 1px solid var(--ui-pli-line)}}@container (max-width: 360px){.ui-pli__copy{width: 28px;padding: 0;justify-content: center}.ui-pli__copy-text{display: none}.ui-pli__count .ui-pli__bars{display: none}}@media (pointer: coarse){.ui-pli__option{height: 40px}.ui-pli__search{height: 36px}.ui-pli__copy, .ui-pli__use{height: 34px}.ui-pli__body{line-height: 30px}.ui-pli__token, .ui-pli__input, .ui-pli__sizer{height: 26px;line-height: 26px}}@media (prefers-reduced-motion: reduce){.ui-pli *, .ui-pli *::before, .ui-pli *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-pli{--ui-pli-tray: #111113;--ui-pli-card: #19191b;--ui-pli-line: #2a2a2e;--ui-pli-ink: #ededed;--ui-pli-text: #c8c8cc;--ui-pli-muted: #8b8b92;--ui-pli-well: #222225;--ui-pli-accent: #4f82ff;--ui-pli-accent-ink: #9dbbff;--ui-pli-accent-bg: rgba(79, 130, 255, 0.16);--ui-pli-accent-flash: rgba(79, 130, 255, 0.36);--ui-pli-hole: #5c5c63;--ui-pli-on-ink: #111113;--ui-pli-ok: #6ee7a8;--ui-pli-blue: #8fb1ff;--ui-pli-blue-bg: rgba(79, 130, 255, 0.16);--ui-pli-violet: #b9a2f5;--ui-pli-violet-bg: rgba(150, 110, 240, 0.16);--ui-pli-amber: #f5c264;--ui-pli-amber-bg: rgba(240, 160, 32, 0.15);--ui-pli-green: #6ee7a8;--ui-pli-green-bg: rgba(34, 160, 90, 0.16);--ui-pli-red: #ff9b93;--ui-pli-red-bg: rgba(229, 72, 77, 0.16);--ui-pli-gray: #b4b4ba;--ui-pli-gray-bg: #26262a;--ui-pli-focus: rgba(255, 255, 255, 0.3)}`;
const templates = [{
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
}, {
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
}, {
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
}, {
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
}];
const b = [{
  id: `release`,
  type: [[`product`, `Relay`], [`version`, `2.4`], [`audience`, `existing customers`]]
}, {
  id: `error`,
  type: [[`language`, `TypeScript`], [`error`, `Cannot read properties of undefined`], [`framework`, `Next.js`]]
}, {
  id: `meeting`,
  type: [[`audience`, `the design team`], [`topic`, `the onboarding flow`]]
}];
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
  n.useEffect(() => {
    let n = b[t % b.length];
    let r = [[t === 0 ? 700 : 900, () => setValue(n.id)]];
    n.type.forEach(([n, i], a) => {
      for (let o = 1; o <= i.length; o++) {
        let s = o === 1 ? a === 0 && t === 0 ? 2500 : 520 : 55 + o * 37 % 40;
        r.push([s, () => {
          let t = eRef.current?.querySelector(`.ui-pli__panel:not([data-out]) .ui-pli__input[data-var="${n}"]`);
          if (t) {
            x(t, i.slice(0, o));
          }
        }]);
      }
    });
    r.push([3600, () => setT(e => e + 1)]);
    let a = 0;
    let c = 0;
    let l = () => {
      if (!(sRef.current || a >= r.length)) {
        c = window.setTimeout(() => {
          if (!sRef.current) {
            r[a][1]();
            a++;
            l();
          }
        }, r[a][0]);
      }
    };
    l();
    return () => window.clearTimeout(c);
  }, [t]);
  let c = () => sRef.current = true;
  return <div ref={eRef} className={`pli-demo`} onPointerEnter={c} onPointerDownCapture={c} onKeyDownCapture={c} onFocusCapture={c}><V1Component key={t} templates={templates} value={value} onSelect={setValue} onUse={() => {}} /></div>;
}
export { SComponent as default };
