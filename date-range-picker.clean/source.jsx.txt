// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
const n = t_1();
const r = t();
const i = e => new Date(e.getFullYear(), e.getMonth(), e.getDate());
const a = (e, t) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
const o = (e, t) => new Date(e.getFullYear(), e.getMonth() + t, 1);
const s = e => new Date(e.getFullYear(), e.getMonth(), 1);
const c = e => new Date(e.getFullYear(), e.getMonth() + 1, 0);
const l = (e, t) => !!e && !!t && e.getTime() === t.getTime();
const u = e => Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
const ee = (start, end) => Math.round((u(end) - u(start)) / 86400000) + 1;
const d = (e, t, n) => {
  if (t && e < t) {
    return t;
  }
  if (n && e > n) {
    return n;
  }
  return e;
};
const f = (start, t) => {
  if (start <= t) {
    return {
      start,
      end: t
    };
  }
  return {
    start: t,
    end: start
  };
};
const p = new Intl.DateTimeFormat(`en-US`, {
  month: `short`,
  day: `numeric`
});
const m = new Intl.DateTimeFormat(`en-US`, {
  month: `short`,
  day: `numeric`,
  year: `numeric`
});
const te = new Intl.DateTimeFormat(`en-US`, {
  month: `long`,
  year: `numeric`
});
const ne = new Intl.DateTimeFormat(`en-US`, {
  weekday: `long`,
  month: `long`,
  day: `numeric`,
  year: `numeric`
});
function h({
  start,
  end
}) {
  if (l(start, end)) {
    return m.format(start);
  }
  return `${(start.getFullYear() === end.getFullYear() ? p : m).format(start)} – ${m.format(end)}`;
}
function g(e, t) {
  if (t === `previous`) {
    let t = ee(e.start, e.end);
    return {
      start: a(e.start, -t),
      end: a(e.start, -1)
    };
  }
  if (t === `year`) {
    let t = e => new Date(e.getFullYear() - 1, e.getMonth(), e.getDate());
    return {
      start: t(e.start),
      end: t(e.end)
    };
  }
  return null;
}
const _ = e => new Date(e.getFullYear(), Math.floor(e.getMonth() / 3) * 3, 1);
const re = [{
  id: `today`,
  label: `Today`,
  range: e => ({
    start: e,
    end: e
  })
}, {
  id: `yesterday`,
  label: `Yesterday`,
  range: e => ({
    start: a(e, -1),
    end: a(e, -1)
  })
}, {
  id: `7d`,
  label: `Last 7 days`,
  range: e => ({
    start: a(e, -6),
    end: e
  })
}, {
  id: `30d`,
  label: `Last 30 days`,
  range: e => ({
    start: a(e, -29),
    end: e
  })
}, {
  id: `90d`,
  label: `Last 90 days`,
  range: e => ({
    start: a(e, -89),
    end: e
  })
}, {
  id: `month`,
  label: `This month`,
  range: e => ({
    start: s(e),
    end: e
  })
}, {
  id: `last-month`,
  label: `Last month`,
  range: e => ({
    start: o(e, -1),
    end: c(o(e, -1))
  })
}, {
  id: `quarter`,
  label: `This quarter`,
  range: e => ({
    start: _(e),
    end: e
  })
}, {
  id: `ytd`,
  label: `Year to date`,
  range: e => ({
    start: new Date(e.getFullYear(), 0, 1),
    end: e
  })
}];
const ie = [{
  id: `off`,
  label: `Off`
}, {
  id: `previous`,
  label: `Previous period`
}, {
  id: `year`,
  label: `Previous year`
}];
const V1Component = ({
  d,
  className
}) => <svg viewBox={`0 0 24 24`} className={[`ui-drpc__glyph`, className].filter(Boolean).join(` `)} aria-hidden={`true`}><path d={d} /></svg>;
const y = {
  calendar: `M7 3v3M17 3v3M4.5 9.5h15M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z`,
  chevron: `M8 10l4 4 4-4`,
  left: `M14.5 6l-6 6 6 6`,
  right: `M9.5 6l6 6-6 6`,
  arrow: `M5 12h14M13 6l6 6-6 6`
};
function ae(e, weekStartsOn) {
  let n = (s(e).getDay() - weekStartsOn + 7) % 7;
  let r = c(e).getDate();
  let i = [];
  for (let e = 0; e < n; e++) {
    i.push(null);
  }
  for (let t = 1; t <= r; t++) {
    i.push(new Date(e.getFullYear(), e.getMonth(), t));
  }
  while (i.length % 7) {
    i.push(null);
  }
  let a = [];
  for (let e = 0; e < i.length; e += 7) {
    a.push(i.slice(e, e + 7));
  }
  return a;
}
function B1Component({
  value,
  defaultValue,
  onChange,
  presets = re,
  compare = true,
  defaultCompare = `previous`,
  weekStartsOn = 1,
  max,
  min,
  defaultOpen = false,
  today,
  className
}) {
  let S = n.useMemo(() => i(today ?? new Date()), [today?.getTime()]);
  let C = max ? i(max) : S;
  let w = min ? i(min) : undefined;
  let [de, setDe] = n.useState(() => defaultValue ?? {
    start: a(S, -29),
    end: S
  });
  let T = value ?? de;
  let [E, setE] = n.useState(compare ? defaultCompare : `off`);
  let [D, setD] = n.useState(defaultOpen);
  let [k, setK] = n.useState(T);
  let [j, setJ] = n.useState(null);
  let [N, setN] = n.useState(E);
  let [F, setF] = n.useState(() => o(T.end, -1));
  let [me, setMe] = n.useState(1);
  let [R, setR] = n.useState(T.end);
  let BRef = n.useRef(null);
  let VRef = n.useRef(null);
  let HRef = n.useRef(null);
  let URef = n.useRef(null);
  let WRef = n.useRef(false);
  let he = n.useId();
  let geRef = n.useRef(null);
  let _eRef = n.useRef(null);
  let veRef = n.useRef(null);
  let GRef = n.useRef(null);
  let ye = () => {
    setK(T);
    setN(E);
    setF(o(T.end, -1));
    setR(T.end);
    setJ(null);
    setD(true);
  };
  let K = (e = true) => {
    setD(false);
    if (e) {
      URef.current?.focus();
    }
  };
  n.useEffect(() => {
    if (!D) {
      return;
    }
    let e = e => {
      if (BRef.current && !BRef.current.contains(e.target)) {
        setD(false);
      }
    };
    document.addEventListener(`pointerdown`, e);
    return () => document.removeEventListener(`pointerdown`, e);
  }, [D]);
  n.useLayoutEffect(() => {
    if (D && WRef.current) {
      HRef.current?.querySelector(`[data-day="${R.getTime()}"]`)?.focus();
    }
  }, [R, F, D]);
  let q = k.end ? f(k.start, k.end) : j ? f(k.start, j) : null;
  let J = q ?? {
    start: k.start,
    end: k.start
  };
  let Y = compare && q ? g(q, N) : null;
  let X = k.end ? presets.find(e => {
    let t = e.range(S);
    return l(i(t.start), J.start) && l(i(t.end), J.end);
  }) : undefined;
  let be = start => {
    if (k.end) {
      setK({
        start,
        end: null
      });
    } else {
      let t = f(k.start, start);
      setK(t);
    }
    setJ(null);
    setR(start);
  };
  let xe = e => {
    let t = e.range(S);
    let n = {
      start: d(i(t.start), w, C),
      end: d(i(t.end), w, C)
    };
    setK(n);
    setJ(null);
    setR(n.end);
    let r = o(n.end, -1);
    if (r.getTime() !== F.getTime()) {
      setMe(r > F ? 1 : -1);
      setF(r);
    }
  };
  let Z = e => {
    setMe(e > 0 ? 1 : -1);
    setF(t => o(t, e));
  };
  let onClick = () => {
    let t = k.end ? f(k.start, k.end) : {
      start: k.start,
      end: k.start
    };
    if (!value) {
      setDe(t);
    }
    setE(N);
    onChange?.(t, compare ? g(t, N) : null, N);
    K();
  };
  let Ce = e => e > C || !!w && e < w;
  let onKeyDown = e => {
    let t = {
      ArrowLeft: -1,
      ArrowRight: 1,
      ArrowUp: -7,
      ArrowDown: 7
    };
    let n = null;
    if (e.key in t) {
      n = a(R, t[e.key]);
    } else if (e.key === `PageUp`) {
      n = new Date(R.getFullYear(), R.getMonth() - 1, Math.min(R.getDate(), 28));
    } else if (e.key === `PageDown`) {
      n = new Date(R.getFullYear(), R.getMonth() + 1, Math.min(R.getDate(), 28));
    } else if (e.key === `Home`) {
      n = a(R, -((R.getDay() - weekStartsOn + 7) % 7));
    } else if (e.key === `End`) {
      n = a(R, 6 - (R.getDay() - weekStartsOn + 7) % 7);
    }
    if (!n) {
      return;
    }
    e.preventDefault();
    WRef.current = true;
    n = d(n, w, C);
    setR(n);
    if (!k.end) {
      setJ(n);
    }
    let r = c(o(F, 1));
    if (n < F) {
      Z(-1);
    } else if (n > r) {
      Z(1);
    }
  };
  let Te = Array.from({
    length: 7
  }, (e, t) => new Intl.DateTimeFormat(`en-US`, {
    weekday: `short`
  }).format(new Date(2026, 0, 4 + weekStartsOn + t)).slice(0, 2));
  let Ee = [F, o(F, 1)];
  let length = Math.max(...Ee.map(e => ae(e, weekStartsOn).length));
  let Q = ee(J.start, J.end);
  let Oe = (e, t) => !!t && e >= t.start && e <= t.end;
  if (Y) {
    GRef.current = Y;
  }
  let $RefRef = n.useRef(false);
  n.useEffect(() => {
    if (!D) {
      $RefRef.current = false;
      return;
    }
    let veRef_current = veRef.current;
    let t = veRef_current?.querySelector(`[aria-selected="true"]`);
    if (!veRef_current || !t || veRef_current.scrollWidth <= veRef_current.clientWidth) {
      return;
    }
    let left = Math.max(0, t.offsetLeft - (veRef_current.clientWidth - t.offsetWidth) / 2);
    veRef_current.scrollTo({
      left,
      behavior: $RefRef.current ? `smooth` : `auto`
    });
    $RefRef.current = true;
  }, [D, X?.id]);
  n.useLayoutEffect(() => {
    let VRef_current = VRef.current;
    let geRef_current = geRef.current;
    if (!D || !VRef_current || !geRef_current) {
      return;
    }
    let n = () => VRef_current.style.height = `${geRef_current.offsetHeight}px`;
    n();
    let r = new ResizeObserver(n);
    r.observe(geRef_current);
    return () => r.disconnect();
  }, [D]);
  n.useLayoutEffect(() => {
    let URef_current = URef.current;
    let _eRef_current = _eRef.current;
    if (!URef_current || !_eRef_current) {
      return;
    }
    let n = () => URef_current.style.width = `${_eRef_current.offsetWidth + 16}px`;
    n();
    let r = new ResizeObserver(n);
    r.observe(_eRef_current);
    return () => r.disconnect();
  }, []);
  return <div ref={BRef} className={[`ui-drpc`, className].filter(Boolean).join(` `)} data-open={D || undefined}><style href={`ui-date-range-picker-clean`} precedence={`default`}>{oe}</style><button ref={URef} type={`button`} className={`ui-drpc__trigger`} aria-haspopup={`dialog`} aria-expanded={D} aria-controls={`${he}-panel`} onClick={() => {
      if (D) {
        return K();
      }
      return ye();
    }}><span ref={_eRef} className={`ui-drpc__trigger-inner`}><V1Component d={y.calendar} /><span key={`${h(T)}-${E}`} className={`ui-drpc__trigger-text`}><span className={`ui-drpc__trigger-range`}>{h(T)}</span>{compare && E !== `off` && <span className={`ui-drpc__trigger-compare`}>{`vs. `}{h(g(T, E))}</span>}</span><V1Component d={y.chevron} className={`ui-drpc__chevron`} /></span></button>{D && <div id={`${he}-panel`} role={`dialog`} aria-label={`Choose a date range`} className={`ui-drpc__panel`} onKeyDown={e => {
      if (e.key === `Escape`) {
        e.stopPropagation();
        K();
      }
    }}><div ref={VRef} className={`ui-drpc__clip`}><div ref={geRef} className={`ui-drpc__body`}><div ref={veRef} className={`ui-drpc__presets`} role={`listbox`} aria-label={`Presets`}>{presets.map(e => <button key={e.id} type={`button`} role={`option`} aria-selected={X?.id === e.id} className={`ui-drpc__preset`} onClick={() => xe(e)}>{e.label}</button>)}<span className={`ui-drpc__preset ui-drpc__preset-custom`} aria-hidden={!!X} data-active={!X || undefined}>{`Custom`}</span></div><div className={`ui-drpc__cal`}><div className={`ui-drpc__nav`}><button type={`button`} className={`ui-drpc__icon-btn`} aria-label={`Previous month`} onClick={() => Z(-1)}><V1Component d={y.left} /></button><button type={`button`} className={`ui-drpc__icon-btn`} aria-label={`Next month`} onClick={() => Z(1)}><V1Component d={y.right} /></button></div><div key={F.getTime()} ref={HRef} className={`ui-drpc__months`} data-dir={me} onKeyDown={onKeyDown} onPointerLeave={() => !k.end && setJ(null)} onPointerDown={() => WRef.current = false}>{Ee.map((e, t) => <div key={e.getTime()} className={`ui-drpc__month`} data-second={t === 1 || undefined}><div className={`ui-drpc__month-name`} aria-live={t === 0 ? `polite` : undefined}>{te.format(e)}</div><div role={`grid`} aria-label={te.format(e)} className={`ui-drpc__grid`}><div role={`row`} className={`ui-drpc__weekdays`}>{Te.map(e => <span key={e} role={`columnheader`} className={`ui-drpc__weekday`}>{e}</span>)}</div>{Array.from({
                    length
                  }, (t, n) => ae(e, weekStartsOn)[n] ?? Array(7).fill(null)).map((e, key) => <div key={key} role={`row`} className={`ui-drpc__week`}>{e.map((e, t) => {
                      if (!e) {
                        return <span key={t} className={`ui-drpc__day ui-drpc__day-empty`} role={`gridcell`} />;
                      }
                      let n = l(e, J.start);
                      let i = l(e, J.end);
                      let a = Oe(e, q);
                      let o = !a && Oe(e, Y);
                      let disabled = Ce(e);
                      return <span key={t} role={`gridcell`} aria-selected={a || n || undefined} className={`ui-drpc__day`} data-range={a || undefined} data-start={n || undefined} data-end={i || undefined} data-preview={!k.end && a || undefined} data-compare={o || undefined} data-compare-start={Y && l(e, Y.start) || undefined} data-compare-end={Y && l(e, Y.end) || undefined} data-row-start={t === 0 || e.getDate() === 1 || undefined} data-row-end={t === 6 || l(e, c(e)) || undefined}><button type={`button`} data-day={e.getTime()} tabIndex={l(e, R) ? 0 : -1} disabled={disabled} aria-label={ne.format(e)} aria-current={l(e, S) ? `date` : undefined} onClick={() => be(e)} onPointerEnter={() => !k.end && setJ(e)} onFocus={() => setR(e)}>{e.getDate()}</button></span>;
                    })}</div>)}</div></div>)}</div></div></div></div><div className={`ui-drpc__foot`}><div className={`ui-drpc__summary`}><div className={`ui-drpc__summary-range`}><span key={`${J.start.getTime()}-${J.end.getTime()}`}>{k.end || j ? h(J) : `${m.format(k.start)} – pick an end`}</span><span key={Q} className={`ui-drpc__count`}>{Q}{` `}{Q === 1 ? `day` : `days`}</span></div>{compare && <div className={`ui-drpc__compare`}><span className={`ui-drpc__compare-label`}>{`Compare`}</span><div className={`ui-drpc__segments`} role={`radiogroup`} aria-label={`Compare to`}>{ie.map(e => <button key={e.id} type={`button`} role={`radio`} aria-checked={N === e.id} className={`ui-drpc__segment`} onClick={() => setN(e.id)}>{e.label}</button>)}</div></div>}{compare && <div className={`ui-drpc__fold`} data-open={!!Y || undefined}><div>{GRef.current && <div key={`${GRef.current.start.getTime()}-${GRef.current.end.getTime()}`} className={`ui-drpc__compare-range`}>{`vs. `}{h(GRef.current)}</div>}</div></div>}</div><div className={`ui-drpc__buttons`}><button type={`button`} className={`ui-drpc__btn`} onClick={() => K()}>{`Cancel`}</button><button type={`button`} className={`ui-drpc__btn ui-drpc__btn-primary`} disabled={!k.end} onClick={onClick}>{`Apply`}</button></div></div></div>}</div>;
}
var oe = `.ui-drpc{--ui-drpc-card: #ffffff;--ui-drpc-ink: rgba(0, 0, 0, 0.88);--ui-drpc-strong: #000000;--ui-drpc-text: rgba(0, 0, 0, 0.61);--ui-drpc-muted: rgba(0, 0, 0, 0.45);--ui-drpc-faint: rgba(0, 0, 0, 0.27);--ui-drpc-icon: rgba(0, 0, 0, 0.447);--ui-drpc-line: rgba(0, 0, 0, 0.06);--ui-drpc-wash: rgba(0, 0, 0, 0.03);--ui-drpc-fill: rgba(0, 0, 0, 0.06);--ui-drpc-fill-strong: rgba(0, 0, 0, 0.1);--ui-drpc-chip: rgba(0, 0, 0, 0.88);--ui-drpc-chip-hover: rgba(0, 0, 0, 0.78);--ui-drpc-on-chip: #fcfcfc;--ui-drpc-band: rgba(0, 0, 0, 0.06);--ui-drpc-band-preview: rgba(0, 0, 0, 0.04);--ui-drpc-compare: rgba(0, 96, 226, 0.08);--ui-drpc-compare-edge: rgba(0, 96, 226, 0.4);--ui-drpc-accent: rgba(0, 96, 226, 0.765);--ui-drpc-today-on-chip: #6ea2ff;--ui-drpc-focus: rgba(0, 96, 226, 0.35);--ui-drpc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-drpc-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.12), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-drpc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-drpc-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-drpc-spring: cubic-bezier(0.34, 1.56, 0.64, 1);position: relative;display: inline-block;max-width: 100%;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-drpc-ink);-webkit-font-smoothing: antialiased}.ui-drpc *, .ui-drpc *::before, .ui-drpc *::after{box-sizing: border-box}:where(.ui-drpc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-drpc) svg{display: block;flex: none}.ui-drpc button:focus-visible{outline: 2px solid var(--ui-drpc-focus);outline-offset: 1px}.ui-drpc__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.65;stroke-linecap: round;stroke-linejoin: round}.ui-drpc__trigger{display: inline-flex;align-items: center;overflow: hidden;max-width: 100%;height: 32px;padding: 0 8px;border-radius: 8px;background: var(--ui-drpc-card);box-shadow: var(--ui-drpc-shadow);text-align: left;transition: box-shadow 160ms ease, width 320ms var(--ui-drpc-ease)}.ui-drpc__trigger:hover{box-shadow: var(--ui-drpc-shadow-hover)}.ui-drpc__trigger-inner{display: inline-flex;flex: none;align-items: center;gap: 8px;max-width: calc(100vw - 56px);color: var(--ui-drpc-icon)}.ui-drpc__trigger-text{display: flex;align-items: baseline;gap: 6px;min-width: 0;white-space: nowrap;animation: ui-drpc-in 240ms var(--ui-drpc-ease) both}.ui-drpc__trigger-range{flex: 0 0 auto;max-width: 100%;overflow: hidden;color: var(--ui-drpc-ink);font-weight: 500;text-overflow: ellipsis}.ui-drpc__trigger-compare{flex: 0 1 auto;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-drpc-muted);text-overflow: ellipsis}.ui-drpc__chevron{transition: transform 260ms var(--ui-drpc-ease)}.ui-drpc[data-open] .ui-drpc__chevron{transform: rotate(180deg)}.ui-drpc__panel{position: absolute;z-index: 30;top: calc(100% + 6px);left: 0;container-type: inline-size;width: var(--ui-drpc-panel-width, min(652px, calc(100vw - 32px)));overflow: hidden;border-radius: 10px;background: var(--ui-drpc-card);box-shadow: var(--ui-drpc-shadow-pop);transform-origin: top left;animation: ui-drpc-open 240ms var(--ui-drpc-ease) both}.ui-drpc__clip{overflow: hidden;transition: height 320ms var(--ui-drpc-ease)}.ui-drpc__body{display: grid;grid-template-columns: 140px 1fr}.ui-drpc__presets{position: relative;display: flex;flex-direction: column;gap: 2px;padding: 4px;border-right: 0.5px solid var(--ui-drpc-line)}.ui-drpc__preset{display: flex;align-items: center;flex: none;height: 28px;padding: 0 10px;border-radius: 6px;text-align: left;white-space: nowrap;font-weight: 500;color: var(--ui-drpc-text);transition: background-color 120ms ease, color 120ms ease}button.ui-drpc__preset:hover:not([aria-selected="true"]){background: var(--ui-drpc-wash);color: var(--ui-drpc-ink)}.ui-drpc__preset[aria-selected="true"], .ui-drpc__preset-custom[data-active]{background: var(--ui-drpc-fill);color: var(--ui-drpc-ink)}.ui-drpc__preset-custom{margin-top: auto;color: var(--ui-drpc-faint);cursor: default}.ui-drpc__cal{position: relative;padding: 10px 12px 10px;overflow: hidden}.ui-drpc__nav{position: absolute;top: 10px;left: 12px;right: 12px;z-index: 1;display: flex;justify-content: space-between;pointer-events: none}.ui-drpc__nav > *{pointer-events: auto}.ui-drpc__icon-btn{display: grid;place-items: center;width: 28px;height: 28px;border-radius: 6px;color: var(--ui-drpc-icon);transition: background-color 120ms ease, color 120ms ease}.ui-drpc__icon-btn:hover{background: var(--ui-drpc-wash);color: var(--ui-drpc-ink)}.ui-drpc__months{display: grid;grid-template-columns: repeat(2, auto);justify-content: center;gap: 24px;animation: ui-drpc-slide 320ms var(--ui-drpc-ease) both}.ui-drpc__months[data-dir="-1"]{animation-name: ui-drpc-slide-back}.ui-drpc__month-name{height: 28px;margin-bottom: 4px;font-weight: 500;line-height: 28px;text-align: center;color: var(--ui-drpc-strong)}.ui-drpc__grid{display: grid;gap: 2px}.ui-drpc__weekdays, .ui-drpc__week{display: grid;grid-template-columns: repeat(7, 32px)}.ui-drpc__weekday{height: 24px;font-size: 10px;font-weight: 500;line-height: 24px;letter-spacing: 0.5px;text-transform: uppercase;text-align: center;color: var(--ui-drpc-muted)}.ui-drpc__day{position: relative;display: grid;height: 32px}.ui-drpc__day::before{content: "";position: absolute;inset: 2px 0;transition: background-color 160ms ease, border-radius 220ms var(--ui-drpc-ease), left 220ms var(--ui-drpc-ease), right 220ms var(--ui-drpc-ease)}.ui-drpc__day[data-range]::before{background: var(--ui-drpc-band)}.ui-drpc__day[data-preview]::before{background: var(--ui-drpc-band-preview)}.ui-drpc__day[data-compare]::before{background: var(--ui-drpc-compare)}.ui-drpc__day[data-start]::before, .ui-drpc__day[data-compare-start]::before, .ui-drpc__day[data-row-start]::before{left: 2px;border-top-left-radius: 6px;border-bottom-left-radius: 6px}.ui-drpc__day[data-end]::before, .ui-drpc__day[data-compare-end]::before, .ui-drpc__day[data-row-end]::before{right: 2px;border-top-right-radius: 6px;border-bottom-right-radius: 6px}.ui-drpc__day button{position: relative;margin: 2px;border-radius: 6px;font-size: 13px;line-height: 20px;font-variant-numeric: tabular-nums;color: var(--ui-drpc-ink);transition: background-color 120ms ease, color 120ms ease, box-shadow 120ms ease, transform 160ms var(--ui-drpc-ease)}.ui-drpc__day button:hover:not(:disabled){background: var(--ui-drpc-fill)}.ui-drpc__day button:active:not(:disabled){transform: scale(0.94)}.ui-drpc__day button:disabled{color: var(--ui-drpc-faint);cursor: default}.ui-drpc__day button[aria-current="date"]{color: var(--ui-drpc-accent);font-weight: 500}.ui-drpc__day button[aria-current="date"]::after{content: "";position: absolute;left: 50%;bottom: 3px;width: 4px;height: 4px;margin-left: -2px;border-radius: 50%;background: var(--ui-drpc-accent)}.ui-drpc__day[data-start] button, .ui-drpc__day[data-end] button{background: var(--ui-drpc-chip) !important;color: var(--ui-drpc-on-chip);font-weight: 500;box-shadow: none !important;animation: ui-drpc-pick 380ms var(--ui-drpc-spring)}.ui-drpc__day[data-start] button[aria-current="date"]::after, .ui-drpc__day[data-end] button[aria-current="date"]::after{background: var(--ui-drpc-today-on-chip)}.ui-drpc__day[data-preview][data-end] button{animation: none}.ui-drpc__day[data-compare-start] button, .ui-drpc__day[data-compare-end] button{box-shadow: inset 0 0 0 0.5px var(--ui-drpc-compare-edge)}.ui-drpc__day-empty::before{display: none}.ui-drpc__foot{display: flex;align-items: flex-end;justify-content: space-between;gap: 12px;padding: 10px 10px 10px 14px;border-top: 0.5px solid var(--ui-drpc-line)}.ui-drpc__summary{display: grid;gap: 8px;min-width: 0}.ui-drpc__summary-range{display: flex;align-items: baseline;gap: 8px;min-width: 0;white-space: nowrap;color: var(--ui-drpc-strong);font-weight: 500}.ui-drpc__summary-range > span:first-child{min-width: 0;overflow: hidden;text-overflow: ellipsis;animation: ui-drpc-in 240ms var(--ui-drpc-ease) both}.ui-drpc__count{flex: none;font-size: 12px;line-height: 16px;font-weight: 400;font-variant-numeric: tabular-nums;color: var(--ui-drpc-muted);animation: ui-drpc-in 240ms var(--ui-drpc-ease) both}.ui-drpc__compare{display: flex;align-items: center;gap: 8px}.ui-drpc__compare-label{font-size: 12px;line-height: 16px;color: var(--ui-drpc-muted)}.ui-drpc__segments{display: inline-flex;flex-wrap: wrap;gap: 4px}.ui-drpc__segment{padding: 4px 10px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-drpc-line);font-weight: 500;white-space: nowrap;color: var(--ui-drpc-text);transition: background-color 120ms ease, color 120ms ease}.ui-drpc__segment:hover:not([aria-checked="true"]){background: var(--ui-drpc-wash);color: var(--ui-drpc-ink)}.ui-drpc__segment[aria-checked="true"]{background: var(--ui-drpc-fill);color: var(--ui-drpc-ink)}.ui-drpc__fold{display: grid;grid-template-rows: 0fr;opacity: 0;margin-top: -8px;transition: grid-template-rows 300ms var(--ui-drpc-ease), opacity 200ms ease, margin-top 300ms var(--ui-drpc-ease)}.ui-drpc__fold[data-open]{grid-template-rows: 1fr;opacity: 1;margin-top: 0}.ui-drpc__fold > div{min-height: 0;overflow: hidden}.ui-drpc__compare-range{display: flex;align-items: center;gap: 6px;font-size: 12px;line-height: 16px;color: var(--ui-drpc-muted);animation: ui-drpc-in 220ms var(--ui-drpc-ease) both}.ui-drpc__compare-range::before{content: "";flex: none;width: 14px;height: 8px;border-radius: 3px;background: var(--ui-drpc-compare);box-shadow: inset 0 0 0 0.5px var(--ui-drpc-compare-edge)}.ui-drpc__buttons{display: flex;flex: none;gap: 8px}.ui-drpc__btn{display: inline-flex;align-items: center;height: 28px;padding: 0 10px;border-radius: 6px;background: var(--ui-drpc-card);box-shadow: var(--ui-drpc-shadow);font-weight: 500;color: var(--ui-drpc-strong);transition: background-color 140ms ease, box-shadow 140ms ease, opacity 140ms ease, transform 140ms ease}.ui-drpc__btn:not(.ui-drpc__btn-primary):hover{box-shadow: var(--ui-drpc-shadow-hover)}.ui-drpc__btn-primary{background: var(--ui-drpc-chip);box-shadow: none;color: var(--ui-drpc-on-chip)}.ui-drpc__btn-primary:hover:not(:disabled){background: var(--ui-drpc-chip-hover)}.ui-drpc__btn:active:not(:disabled){transform: scale(0.97)}.ui-drpc__btn-primary:disabled{opacity: 0.35;cursor: default}@keyframes ui-drpc-open{from{opacity: 0;transform: translateY(-4px) scale(0.98)}to{opacity: 1;transform: none}}@keyframes ui-drpc-slide{from{opacity: 0;transform: translateX(14px)}to{opacity: 1;transform: none}}@keyframes ui-drpc-slide-back{from{opacity: 0;transform: translateX(-14px)}to{opacity: 1;transform: none}}@keyframes ui-drpc-in{from{opacity: 0;transform: translateY(3px)}to{opacity: 1;transform: none}}@keyframes ui-drpc-pick{0%{transform: scale(0.82)}60%{transform: scale(1.06)}100%{transform: scale(1)}}@container (max-width: 600px){.ui-drpc__body{grid-template-columns: 1fr}.ui-drpc__presets{flex-direction: row;gap: 4px;padding: 8px;overflow-x: auto;border-right: 0;border-bottom: 0.5px solid var(--ui-drpc-line);scrollbar-width: none}.ui-drpc__presets::-webkit-scrollbar{display: none}.ui-drpc__preset{height: auto;padding: 4px 10px;box-shadow: inset 0 0 0 0.5px var(--ui-drpc-line)}.ui-drpc__preset-custom{display: none}.ui-drpc__months{grid-template-columns: 1fr;justify-items: center}.ui-drpc__month:not([data-second]){display: none}.ui-drpc__foot{flex-direction: column;align-items: stretch;padding: 10px 10px 10px 12px}.ui-drpc__buttons{justify-content: flex-end}.ui-drpc__compare{flex-wrap: wrap}}@container (max-width: 340px){.ui-drpc__weekdays, .ui-drpc__week{grid-template-columns: repeat(7, 1fr)}.ui-drpc__cal{padding: 10px 8px}.ui-drpc__nav{left: 8px;right: 8px}.ui-drpc__months{justify-items: stretch}}@media (hover: none) and (pointer: coarse){.ui-drpc__trigger{height: 40px}.ui-drpc__day{height: 40px}.ui-drpc__weekdays, .ui-drpc__week{grid-template-columns: repeat(7, minmax(0, 40px))}.ui-drpc__icon-btn{width: 36px;height: 36px}.ui-drpc__month-name{height: 36px;line-height: 36px}.ui-drpc__preset{height: 36px}.ui-drpc__btn{height: 36px;padding: 0 14px}.ui-drpc__segment{padding: 8px 12px}}@media (prefers-reduced-motion: reduce){.ui-drpc *, .ui-drpc *::before, .ui-drpc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-drpc{--ui-drpc-card: #1c1c1e;--ui-drpc-ink: rgba(255, 255, 255, 0.9);--ui-drpc-strong: #ffffff;--ui-drpc-text: rgba(255, 255, 255, 0.62);--ui-drpc-muted: rgba(255, 255, 255, 0.46);--ui-drpc-faint: rgba(255, 255, 255, 0.3);--ui-drpc-icon: rgba(255, 255, 255, 0.5);--ui-drpc-line: rgba(255, 255, 255, 0.08);--ui-drpc-wash: rgba(255, 255, 255, 0.04);--ui-drpc-fill: rgba(255, 255, 255, 0.08);--ui-drpc-fill-strong: rgba(255, 255, 255, 0.13);--ui-drpc-chip: rgba(255, 255, 255, 0.9);--ui-drpc-chip-hover: rgba(255, 255, 255, 0.8);--ui-drpc-on-chip: #111113;--ui-drpc-band: rgba(255, 255, 255, 0.08);--ui-drpc-band-preview: rgba(255, 255, 255, 0.05);--ui-drpc-compare: rgba(77, 141, 255, 0.14);--ui-drpc-compare-edge: rgba(77, 141, 255, 0.55);--ui-drpc-accent: #4d8dff;--ui-drpc-today-on-chip: #0060e2;--ui-drpc-focus: rgba(77, 141, 255, 0.5);--ui-drpc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-drpc-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.18), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-drpc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 12px 28px -10px rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.4)}`;
function XComponent() {
  return <div className={`drp-demo`}><B1Component defaultOpen defaultCompare={`off`} /></div>;
}
export { XComponent as default };
