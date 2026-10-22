// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
const n = t_1();
const r = t();
const i = [`#3c85e9`, `#5b5bd6`, `#80b0f1`, `#1a9a52`, `#e8a20c`, `#e5484d`, `#b3cff6`];
function a(e) {
  if (e <= 0) {
    return 5;
  }
  let t = e / 5;
  let n = 10 ** Math.floor(Math.log10(t));
  return [1, 2, 2.5, 5, 10].find(e => e * n >= t) * n * 5;
}
const o = e => {
  if (Number.isInteger(e)) {
    return e.toLocaleString(`en-US`);
  }
  return e.toFixed(1);
};
function S1Component({
  records,
  dimensions,
  measures,
  title = `Workload`,
  defaultMeasure,
  defaultSlice,
  defaultSegment,
  className
}) {
  let [g, setG] = n.useState(defaultMeasure ?? measures[0].key);
  let [v, setV] = n.useState(defaultSlice ?? dimensions[0].key);
  let [b, setB] = n.useState(defaultSegment ?? dimensions[1]?.key ?? `none`);
  let [S, setS] = n.useState(new Set());
  let [w, setW] = n.useState(null);
  let ERef = n.useRef(null);
  let ref = useF(ERef);
  let O = measures.find(e => e.key === g) ?? measures[0];
  let k = dimensions.find(e => e.key === v) ?? dimensions[0];
  let A = b === `none` ? null : dimensions.find(e => e.key === b) ?? null;
  let j = A ? A.values : [`All`];
  let M = (e, t) => A?.colors?.[e] ?? (A ? i[t % i.length] : i[0]);
  n.useEffect(() => setS(new Set()), [b]);
  let N = n.useMemo(() => k.values.map(t => {
    let cells = {};
    for (let e of j) {
      cells[e] = 0;
    }
    for (let r of records) {
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
      total: j.reduce((acc, item) => acc + (S.has(item) ? 0 : cells[item]), 0)
    };
  }), [records, k, A, j, O, S]);
  let P = N.reduce((acc, item) => acc + item.total, 0);
  let F = a(Math.max(0, ...N.map(e => e.total)));
  let I = [5, 4, 3, 2, 1, 0].map(e => F / 5 * e);
  let L = N.find(e => e.value === w) ?? null;
  let R = L ? N.indexOf(L) : -1;
  let z = e => setS(t => {
    let n = new Set(t);
    if (n.has(e)) {
      n.delete(e);
    } else if (n.size < j.length - 1) {
      n.add(e);
    }
    return n;
  });
  let options = dimensions.map(e => ({
    value: e.key,
    label: e.label
  }));
  return <><style href={`ui-breakdown-chart-clean`} precedence={`default`}>{p}</style><section className={[`ui-bcc`, className].filter(Boolean).join(` `)} aria-label={title}><header className={`ui-bcc__head`}><span className={`ui-bcc__title`}>{title}</span><span className={`ui-bcc__total`}><strong>{o(P)}</strong>{` `}{O.unit}</span></header><div className={`ui-bcc__controls`}><C1Component label={`Measure`} value={g} onChange={setG} options={measures.map(e => ({
          value: e.key,
          label: e.label
        }))} /><C1Component label={`Slice`} value={v} onChange={e => {
          setV(e);
          if (e === b) {
            setB(`none`);
          }
        }} options={options} /><C1Component label={`Segment`} value={b} onChange={setB} options={[{
          value: `none`,
          label: `None`
        }, ...options.filter(e => e.value !== v)]} /></div><div className={`ui-bcc__chart`} onPointerLeave={() => setW(null)}><div className={`ui-bcc__plot`}>{I.map(e => <span key={e} className={`ui-bcc__grid`} style={{
            bottom: `${e / F * 100}%`
          }} data-zero={e === 0 || undefined}><span className={`ui-bcc__tick`}>{o(e)}</span></span>)}<div className={`ui-bcc__bars`} style={{
            gridTemplateColumns: `repeat(${N.length}, minmax(0, 1fr))`
          }}>{N.map(e => <button key={e.value} type={`button`} className={`ui-bcc__col`} data-dim={w && w !== e.value || undefined} data-active={w === e.value || undefined} aria-label={`${e.value}: ${o(e.total)} ${O.unit}`} onPointerEnter={() => setW(e.value)} onFocus={() => setW(e.value)} onBlur={() => setW(null)}><span className={`ui-bcc__rest`} style={{
                bottom: `${e.total / F * 100}%`
              }} /><span className={`ui-bcc__bar`} style={{
                height: `${e.total / F * 100}%`
              }}>{j.map((t, n) => {
                  if (S.has(t) || !e.cells[t]) {
                    return null;
                  }
                  return <span key={t} className={`ui-bcc__seg`} style={{
                    flexGrow: e.cells[t],
                    background: M(t, n)
                  }} />;
                })}</span></button>)}</div>{L && <div className={`ui-bcc__tooltip`} role={`status`} style={{
            left: `${(R + 0.5) / N.length * 100}%`
          }} data-side={(R + 0.5) / N.length > 0.5 ? `left` : `right`}><p className={`ui-bcc__tip-head`}><span className={`ui-bcc__tip-label`}>{k.icons?.[L.value]}{L.value}</span><strong>{o(L.total)}</strong></p>{A && <ul>{j.map((seg, i_1) => ({
                seg,
                i: i_1,
                v: L.cells[seg]
              })).filter(e => e.v && !S.has(e.seg)).sort((e, t) => t.v - e.v).map(e => <li key={e.seg}><span className={`ui-bcc__swatch`} style={{
                  background: M(e.seg, e.i)
                }} /><span className={`ui-bcc__tip-seg`}>{e.seg}</span><span className={`ui-bcc__tip-num`}>{o(e.v)}</span></li>)}</ul>}</div>}</div><div className={`ui-bcc__xaxis`} style={{
          gridTemplateColumns: `repeat(${N.length}, minmax(0, 1fr))`
        }}>{N.map(e => <span key={e.value} className={`ui-bcc__xlabel`} data-active={w === e.value || undefined} title={e.value}>{w === e.value ? <span className={`ui-bcc__pill`}>{k.icons?.[e.value]}{e.value}</span> : k.icons?.[e.value] ?? <span className={`ui-bcc__xtext`}>{e.value}</span>}</span>)}</div></div><div className={`ui-bcc__morph`} ref={ref}><div className={`ui-bcc__table-wrap`} ref={ERef}><table className={`ui-bcc__table`}><thead><tr><th scope={`col`}>{k.label}</th><th scope={`col`} data-num>{O.label}</th>{A && j.map((e, t) => <th key={e} scope={`col`} data-num data-hidden={S.has(e) || undefined}><span className={`ui-bcc__th-seg`}><span className={`ui-bcc__swatch`} style={{
                      background: M(e, t)
                    }} />{e}</span></th>)}</tr></thead><tbody>{N.map(e => <tr key={e.value} data-active={w === e.value || undefined} onPointerEnter={() => setW(e.value)} onPointerLeave={() => setW(null)}><th scope={`row`}><span className={`ui-bcc__row-label`}>{k.icons?.[e.value]}{e.value}</span></th><td data-num data-total>{o(e.total)}</td>{A && j.map(t => <td key={t} data-num data-hidden={S.has(t) || undefined}>{o(e.cells[t])}</td>)}</tr>)}</tbody></table></div></div><footer className={`ui-bcc__foot`}>{A ? <div className={`ui-bcc__legend`} role={`group`} aria-label={`${A.label} – click to show or hide`}>{j.map((e, t) => <button key={e} type={`button`} className={`ui-bcc__chip`} aria-pressed={!S.has(e)} onClick={() => z(e)}><span className={`ui-bcc__swatch`} style={{
              background: M(e, t)
            }} />{e}</button>)}</div> : <span className={`ui-bcc__hint`}>{`Pick a segment to split the bars`}</span>}{S.size > 0 && <button type={`button`} className={`ui-bcc__reset`} onClick={() => setS(new Set())}>{`Show all`}</button>}</footer></section></>;
}
function C1Component({
  label,
  value,
  options,
  onChange
}) {
  let [o, setO] = n.useState(false);
  let cRef = n.useRef(null);
  let id = n.useId();
  n.useEffect(() => {
    if (!o) {
      return;
    }
    let e = e => !cRef.current?.contains(e.target) && setO(false);
    let t = e => e.key === `Escape` && setO(false);
    window.addEventListener(`pointerdown`, e);
    window.addEventListener(`keydown`, t);
    return () => {
      window.removeEventListener(`pointerdown`, e);
      window.removeEventListener(`keydown`, t);
    };
  }, [o]);
  let f = options.find(e => e.value === value)?.label ?? value;
  return <div className={`ui-bcc__select`} ref={cRef}><span className={`ui-bcc__select-label`} id={id}>{label}</span><button type={`button`} className={`ui-bcc__select-btn`} aria-haspopup={`listbox`} aria-expanded={o} aria-labelledby={id} onClick={() => setO(e => !e)}><span>{f}</span><L1Component /></button>{o && <div className={`ui-bcc__menu`} role={`listbox`} aria-labelledby={id}>{options.map(e => <button key={e.value} type={`button`} role={`option`} aria-selected={e.value === value} className={`ui-bcc__option`} autoFocus={e.value === value} onClick={() => {
        onChange(e.value);
        setO(false);
      }} onKeyDown={e => {
        let t = [...(e.currentTarget.parentElement?.querySelectorAll(`button`) ?? [])];
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
      }}><span>{e.label}</span>{e.value === value && <UComponent />}</button>)}</div>}</div>;
}
var L1Component = () => <svg viewBox={`0 0 16 16`} width={`16`} height={`16`} fill={`none`} stroke={`currentColor`} strokeWidth={`1.1`} strokeLinecap={`round`} strokeLinejoin={`round`} aria-hidden={`true`}><path d={`m4.5 6.25 3.5 3.5 3.5-3.5`} /></svg>;
var UComponent = () => <svg viewBox={`0 0 16 16`} width={`16`} height={`16`} fill={`none`} stroke={`currentColor`} strokeWidth={`1.3`} strokeLinecap={`round`} strokeLinejoin={`round`} aria-hidden={`true`}><path d={`m3.5 8.5 3 3 6-7`} /></svg>;
const D1Component = ({
  kind,
  color = `currentColor`
}) => <svg viewBox={`0 0 16 16`} width={`16`} height={`16`} fill={`none`} stroke={color} strokeWidth={`1.1`} strokeLinecap={`round`} strokeLinejoin={`round`} aria-hidden={`true`}>{kind === `backlog` && <path d={`M2.5 9.5 4 3.5h8l1.5 6M2.5 9.5v3h11v-3M2.5 9.5H6l.8 1.5h2.4l.8-1.5h3.5`} />}{kind === `todo` && <rect x={`3`} y={`3`} width={`10`} height={`10`} rx={`2.5`} />}{kind === `progress` && <><circle cx={`8`} cy={`8`} r={`5.5`} /><path d={`M8 5v3l2 1.5`} /></>}{kind === `review` && <><path d={`M1.8 8S4 3.8 8 3.8 14.2 8 14.2 8 12 12.2 8 12.2 1.8 8 1.8 8Z`} /><circle cx={`8`} cy={`8`} r={`1.8`} /></>}{kind === `done` && <><rect x={`2.5`} y={`2.5`} width={`11`} height={`11`} rx={`3`} fill={color} stroke={`none`} /><path d={`m5.5 8.2 1.8 1.8 3.3-3.6`} stroke={`#fff`} strokeWidth={`1.3`} /></>}{kind === `canceled` && <><circle cx={`8`} cy={`8`} r={`5.5`} /><path d={`m4.2 11.8 7.6-7.6`} /></>}</svg>;
function useF(ERef) {
  let tRef = n.useRef(null);
  n.useLayoutEffect(() => {
    let tRef_current = tRef.current;
    let e_current = ERef.current;
    if (!tRef_current || !e_current) {
      return;
    }
    let i = () => {
      tRef_current.style.height = `${e_current.offsetHeight}px`;
    };
    i();
    let a = new ResizeObserver(i);
    a.observe(e_current);
    let o = requestAnimationFrame(() => tRef_current.setAttribute(`data-smooth`, ``));
    return () => {
      a.disconnect();
      cancelAnimationFrame(o);
    };
  }, [ERef]);
  return tRef;
}
var p = `.ui-bcc{--ui-bcc-card: #ffffff;--ui-bcc-ink: rgba(0, 0, 0, 0.88);--ui-bcc-strong: #000000;--ui-bcc-text: rgba(0, 0, 0, 0.61);--ui-bcc-muted: rgba(0, 0, 0, 0.45);--ui-bcc-faint: rgba(0, 0, 0, 0.27);--ui-bcc-icon: rgba(0, 0, 0, 0.447);--ui-bcc-line: rgba(0, 0, 0, 0.06);--ui-bcc-grid: rgba(0, 0, 0, 0.06);--ui-bcc-zero: rgba(0, 0, 0, 0.12);--ui-bcc-fill: rgba(0, 0, 0, 0.06);--ui-bcc-wash: rgba(0, 0, 0, 0.03);--ui-bcc-rest: rgba(0, 0, 0, 0.035);--ui-bcc-accent: rgba(0, 96, 226, 0.765);--ui-bcc-focus: rgba(0, 96, 226, 0.35);--ui-bcc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-bcc-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.12), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-bcc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-bcc-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;container-type: inline-size;width: 100%;max-width: 560px;border-radius: 10px;background: var(--ui-bcc-card);box-shadow: var(--ui-bcc-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-bcc-ink);-webkit-font-smoothing: antialiased;font-variant-numeric: tabular-nums}.ui-bcc *, .ui-bcc *::before, .ui-bcc *::after{box-sizing: border-box}:where(.ui-bcc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-bcc) svg{display: block;flex: none}.ui-bcc button:focus-visible{outline: 2px solid var(--ui-bcc-focus);outline-offset: 1px}.ui-bcc__head{display: flex;align-items: baseline;justify-content: space-between;gap: 12px;padding: 14px 16px 0}.ui-bcc__title{min-width: 0;overflow: hidden;font-size: 15px;line-height: 24px;font-weight: 500;color: var(--ui-bcc-strong);white-space: nowrap;text-overflow: ellipsis}.ui-bcc__total{flex: none;font-size: 12px;line-height: 16px;color: var(--ui-bcc-muted)}.ui-bcc__total strong{font-size: 15px;line-height: 24px;font-weight: 500;color: var(--ui-bcc-ink)}.ui-bcc__controls{display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: 8px;padding: 12px 16px 0}.ui-bcc__select{position: relative;display: grid;grid-template-columns: minmax(0, 1fr);gap: 4px;min-width: 0}.ui-bcc__select-label{padding-left: 2px;font-size: 12px;line-height: 16px;color: var(--ui-bcc-muted)}.ui-bcc__select-btn{display: flex;align-items: center;justify-content: space-between;gap: 6px;height: 28px;padding: 0 6px 0 10px;border-radius: 6px;background: var(--ui-bcc-card);box-shadow: var(--ui-bcc-shadow);font-size: 13px;line-height: 20px;font-weight: 500;color: var(--ui-bcc-strong);text-align: left;transition: box-shadow 160ms ease}.ui-bcc__select-btn:hover{box-shadow: var(--ui-bcc-shadow-hover)}.ui-bcc__select-btn span{overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-bcc__select-btn svg{color: var(--ui-bcc-icon);transition: transform 220ms var(--ui-bcc-ease)}.ui-bcc__select-btn[aria-expanded="true"] svg{transform: rotate(180deg)}.ui-bcc__menu{position: absolute;top: calc(100% + 4px);left: 0;right: 0;z-index: 6;display: grid;gap: 0;min-width: 140px;padding: 4px;border-radius: 10px;background: var(--ui-bcc-card);box-shadow: var(--ui-bcc-shadow-pop);transform-origin: top center;animation: ui-bcc-drop 180ms var(--ui-bcc-ease)}.ui-bcc__option{display: flex;align-items: center;justify-content: space-between;gap: 8px;height: 28px;padding: 0 6px 0 8px;border-radius: 6px;font-size: 13px;line-height: 20px;color: var(--ui-bcc-ink);text-align: left;white-space: nowrap}.ui-bcc__option span{overflow: hidden;text-overflow: ellipsis}.ui-bcc__option:hover, .ui-bcc__option:focus-visible{background: var(--ui-bcc-fill);outline: none}.ui-bcc__option svg{color: var(--ui-bcc-accent)}.ui-bcc__chart{padding: 20px 16px 10px}.ui-bcc__plot{position: relative;height: 196px;margin-right: 28px}.ui-bcc__grid{position: absolute;left: 0;right: 0;height: 0;border-top: 0.5px solid var(--ui-bcc-grid)}.ui-bcc__grid[data-zero]{border-color: var(--ui-bcc-zero)}.ui-bcc__tick{position: absolute;right: -28px;top: -8px;width: 24px;font-size: 11px;line-height: 16px;text-align: right;color: var(--ui-bcc-muted)}.ui-bcc__bars{position: absolute;inset: 0;display: grid;gap: 4px}.ui-bcc__col{position: relative;display: flex;align-items: flex-end;justify-content: center;height: 100%;transition: opacity 200ms ease}.ui-bcc__col:focus-visible{outline-offset: 4px;border-radius: 6px}.ui-bcc__col[data-dim]{opacity: 0.35}.ui-bcc__rest{position: absolute;top: 0;left: 50%;width: 12px;margin-left: -6px;border-radius: 3px 3px 0 0;background: var(--ui-bcc-rest);opacity: 0;transition: opacity 180ms ease, bottom 520ms var(--ui-bcc-ease)}.ui-bcc__col[data-active] .ui-bcc__rest{opacity: 1}.ui-bcc__bar{position: relative;display: flex;flex-direction: column-reverse;gap: 1px;width: 12px;min-height: 0;overflow: hidden;border-radius: 3px 3px 0 0;transition: height 520ms var(--ui-bcc-ease)}.ui-bcc__seg{flex-basis: 0;min-height: 2px;transition: flex-grow 520ms var(--ui-bcc-ease), background-color 300ms ease}.ui-bcc__tooltip{position: absolute;z-index: 4;min-width: 152px;padding: 6px 10px 8px;border-radius: 10px;background: var(--ui-bcc-card);box-shadow: var(--ui-bcc-shadow-pop);top: 0;pointer-events: none;transition: left 200ms var(--ui-bcc-ease);animation: ui-bcc-pop 160ms var(--ui-bcc-ease)}.ui-bcc__tooltip[data-side="right"]{transform: translateX(18px)}.ui-bcc__tooltip[data-side="left"]{transform: translateX(calc(-100% - 18px))}.ui-bcc__tip-head{display: flex;align-items: center;justify-content: space-between;gap: 16px;margin: 0;font-size: 13px;line-height: 20px;font-weight: 500;color: var(--ui-bcc-strong)}.ui-bcc__tip-head strong{font-weight: 500}.ui-bcc__tip-label{display: inline-flex;align-items: center;gap: 6px;white-space: nowrap}.ui-bcc__tooltip ul{display: grid;gap: 0;margin: 4px 0 0;padding: 4px 0 0;border-top: 0.5px solid var(--ui-bcc-line);list-style: none}.ui-bcc__tooltip li{display: flex;align-items: center;gap: 8px;font-size: 12px;line-height: 20px;color: var(--ui-bcc-text)}.ui-bcc__tip-seg{flex: 1;white-space: nowrap}.ui-bcc__tip-num{color: var(--ui-bcc-ink)}.ui-bcc__swatch{flex: none;width: 8px;height: 8px;border-radius: 2px}.ui-bcc__xaxis{display: grid;gap: 4px;margin: 8px 28px 0 0}.ui-bcc__xlabel{position: relative;display: grid;place-items: center;height: 24px;min-width: 0;overflow: visible;color: var(--ui-bcc-icon)}.ui-bcc__pill{position: absolute;top: 50%;left: 50%;z-index: 2;display: inline-flex;align-items: center;gap: 6px;height: 24px;padding: 0 8px 0 6px;border-radius: 6px;background: var(--ui-bcc-card);box-shadow: var(--ui-bcc-shadow);font-size: 12px;line-height: 16px;font-weight: 500;white-space: nowrap;color: var(--ui-bcc-ink);transform: translate(-50%, -50%);animation: ui-bcc-pill 200ms var(--ui-bcc-ease)}.ui-bcc__xtext{overflow: hidden;max-width: 100%;font-size: 11px;line-height: 16px;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-bcc-muted)}.ui-bcc__table-wrap{overflow-x: auto;border-top: 0.5px solid var(--ui-bcc-line);scrollbar-width: thin}.ui-bcc__table{width: 100%;border-collapse: collapse;font-size: 13px;line-height: 20px}.ui-bcc__table th, .ui-bcc__table td{height: 36px;padding: 0 10px;border-top: 0.5px solid var(--ui-bcc-line);background: var(--ui-bcc-card);text-align: left;white-space: nowrap}.ui-bcc__table th:first-child, .ui-bcc__table td:first-child{padding-left: 16px}.ui-bcc__table th:last-child, .ui-bcc__table td:last-child{padding-right: 16px}.ui-bcc__table thead th{height: 32px;border-top: 0;font-size: 10px;line-height: 16px;font-weight: 500;letter-spacing: 0.5px;text-transform: uppercase;color: var(--ui-bcc-muted)}.ui-bcc__table [data-num]{text-align: right}.ui-bcc__table tbody th{position: sticky;left: 0;z-index: 1;font-weight: 400;color: var(--ui-bcc-ink)}.ui-bcc__table tbody tr[data-active] th, .ui-bcc__table tbody tr[data-active] td{background: linear-gradient(var(--ui-bcc-wash), var(--ui-bcc-wash)) var(--ui-bcc-card)}.ui-bcc__table td{color: var(--ui-bcc-text)}.ui-bcc__table td[data-total]{color: var(--ui-bcc-ink)}.ui-bcc__table [data-hidden]{opacity: 0.35}.ui-bcc__row-label, .ui-bcc__th-seg{display: inline-flex;align-items: center;gap: 8px}.ui-bcc__row-label svg{color: var(--ui-bcc-icon)}.ui-bcc__th-seg{gap: 6px}.ui-bcc__foot{display: flex;align-items: center;justify-content: space-between;gap: 8px;min-height: 44px;padding: 8px;border-top: 0.5px solid var(--ui-bcc-line)}.ui-bcc__legend{display: flex;flex-wrap: nowrap;gap: 2px;min-width: 0;overflow-x: auto;scrollbar-width: none}.ui-bcc__legend::-webkit-scrollbar{display: none}.ui-bcc__chip{flex: none}.ui-bcc .ui-bcc__chip:focus-visible{outline-offset: -2px}.ui-bcc__chip{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 8px;border-radius: 6px;font-size: 12px;line-height: 16px;font-weight: 500;color: var(--ui-bcc-text);white-space: nowrap;transition: background-color 140ms ease, color 140ms ease, opacity 160ms ease}.ui-bcc__chip:hover{background: var(--ui-bcc-wash);color: var(--ui-bcc-ink)}.ui-bcc__chip[aria-pressed="false"]{opacity: 0.45;text-decoration: line-through;text-decoration-color: var(--ui-bcc-faint)}.ui-bcc__hint{padding-left: 8px;font-size: 12px;line-height: 16px;color: var(--ui-bcc-muted)}.ui-bcc__reset{flex: none;height: 28px;padding: 0 10px;border-radius: 6px;font-size: 13px;line-height: 20px;font-weight: 500;color: var(--ui-bcc-ink);transition: background-color 140ms ease;animation: ui-bcc-pop 160ms var(--ui-bcc-ease)}.ui-bcc__reset:hover{background: var(--ui-bcc-wash)}@keyframes ui-bcc-drop{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}@keyframes ui-bcc-pop{from{opacity: 0}}@keyframes ui-bcc-pill{from{opacity: 0;transform: translate(-50%, -50%) scale(0.92)}}.ui-bcc__morph{overflow: hidden}.ui-bcc__morph[data-smooth]{transition: height 380ms var(--ui-bcc-ease)}@container (max-width: 420px){.ui-bcc__head{padding: 12px 12px 0}.ui-bcc__controls{gap: 6px;padding: 10px 12px 0}.ui-bcc__select-btn{padding: 0 4px 0 8px}.ui-bcc__chart{padding: 18px 12px 8px}.ui-bcc__plot{height: 168px}.ui-bcc__bar, .ui-bcc__rest{width: 10px}.ui-bcc__rest{margin-left: -5px}.ui-bcc__table th:first-child, .ui-bcc__table td:first-child{padding-left: 12px}.ui-bcc__table th:last-child, .ui-bcc__table td:last-child{padding-right: 12px}.ui-bcc__foot{padding: 6px}.ui-bcc__legend{gap: 0}.ui-bcc__chip{gap: 5px;padding: 0 6px}}@media (hover: none) and (pointer: coarse){.ui-bcc__select-btn{height: 36px}.ui-bcc__option{height: 40px}.ui-bcc__chip, .ui-bcc__reset{height: 36px}}@media (prefers-reduced-motion: reduce){.ui-bcc__bar, .ui-bcc__seg, .ui-bcc__tooltip, .ui-bcc__col, .ui-bcc__rest, .ui-bcc__morph[data-smooth]{transition: none}.ui-bcc__menu, .ui-bcc__tooltip, .ui-bcc__pill, .ui-bcc__reset{animation: none}}:where(.dark, [data-theme="dark"]) .ui-bcc{--ui-bcc-card: #1c1c1e;--ui-bcc-ink: rgba(255, 255, 255, 0.9);--ui-bcc-strong: #ffffff;--ui-bcc-text: rgba(255, 255, 255, 0.62);--ui-bcc-muted: rgba(255, 255, 255, 0.46);--ui-bcc-faint: rgba(255, 255, 255, 0.3);--ui-bcc-icon: rgba(255, 255, 255, 0.5);--ui-bcc-line: rgba(255, 255, 255, 0.08);--ui-bcc-grid: rgba(255, 255, 255, 0.08);--ui-bcc-zero: rgba(255, 255, 255, 0.16);--ui-bcc-fill: rgba(255, 255, 255, 0.08);--ui-bcc-wash: rgba(255, 255, 255, 0.04);--ui-bcc-rest: rgba(255, 255, 255, 0.05);--ui-bcc-accent: #4d8dff;--ui-bcc-focus: rgba(77, 141, 255, 0.5);--ui-bcc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-bcc-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-bcc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 28px -10px rgba(0, 0, 0, 0.6)}:where(.dark, [data-theme="dark"]) .ui-bcc__menu, :where(.dark, [data-theme="dark"]) .ui-bcc__tooltip, :where(.dark, [data-theme="dark"]) .ui-bcc__pill{background: #252527}:where(.dark, [data-theme="dark"]) .ui-bcc__select-btn{background: #232325}`;
const m = {
  Backlog: `#bdbdbd`,
  Todo: `#8c8c8c`,
  "In progress": `#80b0f1`,
  "In review": `#5b5bd6`,
  Done: `#3c85e9`,
  Canceled: `#d4d4d4`
};
const dimensions = [{
  key: `status`,
  label: `Status`,
  values: [`Backlog`, `Todo`, `In progress`, `In review`, `Done`, `Canceled`],
  icons: {
    Backlog: <D1Component kind={`backlog`} color={m.Backlog} />,
    Todo: <D1Component kind={`todo`} color={m.Todo} />,
    "In progress": <D1Component kind={`progress`} color={m[`In progress`]} />,
    "In review": <D1Component kind={`review`} color={m[`In review`]} />,
    Done: <D1Component kind={`done`} color={m.Done} />,
    Canceled: <D1Component kind={`canceled`} color={m.Canceled} />
  }
}, {
  key: `priority`,
  label: `Priority`,
  values: [`Urgent`, `High`, `Medium`, `Low`, `None`],
  colors: {
    Urgent: `#e5484d`,
    High: `#e8a20c`,
    Medium: `#3c85e9`,
    Low: `#b3cff6`,
    None: `#dcdcdc`
  }
}, {
  key: `team`,
  label: `Team`,
  values: [`Design`, `Web`, `Mobile`, `Platform`],
  colors: {
    Design: `#5b5bd6`,
    Web: `#3c85e9`,
    Mobile: `#80b0f1`,
    Platform: `#b3cff6`
  }
}, {
  key: `type`,
  label: `Type`,
  values: [`Feature`, `Bug`, `Chore`],
  colors: {
    Feature: `#3c85e9`,
    Bug: `#e5484d`,
    Chore: `#d4d4d4`
  }
}];
const measures = [{
  key: `count`,
  label: `Task count`,
  unit: `tasks`
}, {
  key: `points`,
  label: `Story points`,
  unit: `points`,
  field: `points`
}];
const records = (() => {
  let e = 7;
  let t = () => ((e = e * 16807 % 2147483647) - 1) / 2147483646;
  let n = (e, n) => {
    let r = t() * n.reduce((acc, item) => acc + item, 0);
    for (let t = 0; t < e.length; t++) {
      if ((r -= n[t]) < 0) {
        return e[t];
      }
    }
    return e[e.length - 1];
  };
  return Array.from({
    length: 212
  }, () => ({
    status: n(dimensions[0].values, [16, 30, 22, 12, 48, 6]),
    priority: n(dimensions[1].values, [6, 18, 34, 22, 20]),
    team: n(dimensions[2].values, [18, 34, 22, 26]),
    type: n(dimensions[3].values, [52, 30, 18]),
    points: n([1, 2, 3, 5, 8], [18, 30, 26, 18, 8])
  }));
})();
function VComponent() {
  return <div className={`breakdown-demo`}><S1Component title={`Sprint 24`} records={records} dimensions={dimensions} measures={measures} /></div>;
}
export { VComponent as default };
