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
const re = e => new Date(e.getFullYear(), Math.floor(e.getMonth() / 3) * 3, 1);
const ie = [{
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
    start: re(e),
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
const ae = [{
  id: `off`,
  label: `Off`
}, {
  id: `previous`,
  label: `Previous period`
}, {
  id: `year`,
  label: `Previous year`
}];
const Component = ({
  d,
  className
}) => <svg viewBox={`0 0 24 24`} className={[`ui-drp__glyph`, className].filter(Boolean).join(` `)} aria-hidden={`true`}><path d={d} /></svg>;
const v = {
  calendar: `M7 3v3M17 3v3M4.5 9.5h15M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z`,
  chevron: `M8 10l4 4 4-4`,
  left: `M14.5 6l-6 6 6 6`,
  right: `M9.5 6l6 6-6 6`,
  arrow: `M5 12h14M13 6l6 6-6 6`
};
function y(e, t, n) {
  if (!e || !t) {
    return;
  }
  let r = e.querySelector(n);
  if (!r || !r.offsetWidth) {
    t.style.opacity = `0`;
    return;
  }
  let i = !t.dataset.ready;
  if (i) {
    t.style.transition = `none`;
  }
  t.style.opacity = `1`;
  t.style.width = `${r.offsetWidth}px`;
  t.style.height = `${r.offsetHeight}px`;
  t.style.transform = `translate(${r.offsetLeft}px, ${r.offsetTop}px)`;
  if (i) {
    t.dataset.ready = `1`;
    t.offsetWidth;
    t.style.transition = ``;
  }
}
function oe(e, weekStartsOn) {
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
  presets = ie,
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
  let [fe, setFe] = n.useState(() => defaultValue ?? {
    start: a(S, -29),
    end: S
  });
  let T = value ?? fe;
  let [E, setE] = n.useState(compare ? defaultCompare : `off`);
  let [D, setD] = n.useState(defaultOpen);
  let [k, setK] = n.useState(T);
  let [j, setJ] = n.useState(null);
  let [N, setN] = n.useState(E);
  let [P, setP] = n.useState(() => o(T.end, -1));
  let [ge, setGe] = n.useState(1);
  let [L, setL] = n.useState(T.end);
  let zRef = n.useRef(null);
  let BRef = n.useRef(null);
  let VRef = n.useRef(null);
  let HRef = n.useRef(null);
  let URef = n.useRef(false);
  let _e = n.useId();
  let veRef = n.useRef(null);
  let yeRef = n.useRef(null);
  let WRef = n.useRef(null);
  let beRef = n.useRef(null);
  let xeRef = n.useRef(null);
  let SeRef = n.useRef(null);
  let GRef = n.useRef(null);
  let Ce = () => {
    setK(T);
    setN(E);
    setP(o(T.end, -1));
    setL(T.end);
    setJ(null);
    setD(true);
  };
  let K = (e = true) => {
    setD(false);
    if (e) {
      HRef.current?.focus();
    }
  };
  n.useEffect(() => {
    if (!D) {
      return;
    }
    let e = e => {
      if (zRef.current && !zRef.current.contains(e.target)) {
        setD(false);
      }
    };
    document.addEventListener(`pointerdown`, e);
    return () => document.removeEventListener(`pointerdown`, e);
  }, [D]);
  n.useLayoutEffect(() => {
    if (D && URef.current) {
      VRef.current?.querySelector(`[data-day="${L.getTime()}"]`)?.focus();
    }
  }, [L, P, D]);
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
  let we = start => {
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
    setL(start);
  };
  let Te = e => {
    let t = e.range(S);
    let n = {
      start: d(i(t.start), w, C),
      end: d(i(t.end), w, C)
    };
    setK(n);
    setJ(null);
    setL(n.end);
    let r = o(n.end, -1);
    if (r.getTime() !== P.getTime()) {
      setGe(r > P ? 1 : -1);
      setP(r);
    }
  };
  let Z = e => {
    setGe(e > 0 ? 1 : -1);
    setP(t => o(t, e));
  };
  let onClick = () => {
    let t = k.end ? f(k.start, k.end) : {
      start: k.start,
      end: k.start
    };
    if (!value) {
      setFe(t);
    }
    setE(N);
    onChange?.(t, compare ? g(t, N) : null, N);
    K();
  };
  let De = e => e > C || !!w && e < w;
  let onKeyDown = e => {
    let t = {
      ArrowLeft: -1,
      ArrowRight: 1,
      ArrowUp: -7,
      ArrowDown: 7
    };
    let n = null;
    if (e.key in t) {
      n = a(L, t[e.key]);
    } else if (e.key === `PageUp`) {
      n = new Date(L.getFullYear(), L.getMonth() - 1, Math.min(L.getDate(), 28));
    } else if (e.key === `PageDown`) {
      n = new Date(L.getFullYear(), L.getMonth() + 1, Math.min(L.getDate(), 28));
    } else if (e.key === `Home`) {
      n = a(L, -((L.getDay() - weekStartsOn + 7) % 7));
    } else if (e.key === `End`) {
      n = a(L, 6 - (L.getDay() - weekStartsOn + 7) % 7);
    }
    if (!n) {
      return;
    }
    e.preventDefault();
    URef.current = true;
    n = d(n, w, C);
    setL(n);
    if (!k.end) {
      setJ(n);
    }
    let r = c(o(P, 1));
    if (n < P) {
      Z(-1);
    } else if (n > r) {
      Z(1);
    }
  };
  let ke = Array.from({
    length: 7
  }, (e, t) => new Intl.DateTimeFormat(`en-US`, {
    weekday: `short`
  }).format(new Date(2026, 0, 4 + weekStartsOn + t)).slice(0, 2));
  let Ae = [P, o(P, 1)];
  let length = Math.max(...Ae.map(e => oe(e, weekStartsOn).length));
  let Q = ee(J.start, J.end);
  let Me = (e, t) => !!t && e >= t.start && e <= t.end;
  if (Y) {
    GRef.current = Y;
  }
  n.useLayoutEffect(() => {
    y(WRef.current, beRef.current, `[aria-selected="true"], [data-active]`);
    y(xeRef.current, SeRef.current, `[aria-checked="true"]`);
  });
  let $RefRef = n.useRef(false);
  n.useEffect(() => {
    if (!D) {
      $RefRef.current = false;
      return;
    }
    let WRef_current = WRef.current;
    let t = WRef_current?.querySelector(`[aria-selected="true"]`);
    if (!WRef_current || !t || WRef_current.scrollWidth <= WRef_current.clientWidth) {
      return;
    }
    let left = Math.max(0, t.offsetLeft - (WRef_current.clientWidth - t.offsetWidth) / 2);
    WRef_current.scrollTo({
      left,
      behavior: $RefRef.current ? `smooth` : `auto`
    });
    $RefRef.current = true;
  }, [D, X?.id]);
  n.useLayoutEffect(() => {
    let BRef_current = BRef.current;
    let veRef_current = veRef.current;
    if (!D || !BRef_current || !veRef_current) {
      return;
    }
    let n = () => BRef_current.style.height = `${veRef_current.offsetHeight + 8}px`;
    n();
    let r = new ResizeObserver(n);
    r.observe(veRef_current);
    return () => r.disconnect();
  }, [D]);
  n.useLayoutEffect(() => {
    let HRef_current = HRef.current;
    let yeRef_current = yeRef.current;
    if (!HRef_current || !yeRef_current) {
      return;
    }
    let n = () => HRef_current.style.width = `${yeRef_current.offsetWidth + 20}px`;
    n();
    let r = new ResizeObserver(n);
    r.observe(yeRef_current);
    return () => r.disconnect();
  }, []);
  return <div ref={zRef} className={[`ui-drp`, className].filter(Boolean).join(` `)} data-open={D || undefined}><style href={`ui-date-range-picker`} precedence={`default`}>{se}</style><button ref={HRef} type={`button`} className={`ui-drp__trigger`} aria-haspopup={`dialog`} aria-expanded={D} aria-controls={`${_e}-panel`} onClick={() => {
      if (D) {
        return K();
      }
      return Ce();
    }}><span ref={yeRef} className={`ui-drp__trigger-inner`}><Component d={v.calendar} /><span key={`${h(T)}-${E}`} className={`ui-drp__trigger-text`}><span className={`ui-drp__trigger-range`}>{h(T)}</span>{compare && E !== `off` && <span className={`ui-drp__trigger-compare`}>{`vs. `}{h(g(T, E))}</span>}</span><Component d={v.chevron} className={`ui-drp__chevron`} /></span></button>{D && <div ref={BRef} id={`${_e}-panel`} role={`dialog`} aria-label={`Choose a date range`} className={`ui-drp__panel`} onKeyDown={e => {
      if (e.key === `Escape`) {
        e.stopPropagation();
        K();
      }
    }}><div ref={veRef} className={`ui-drp__panel-inner`}><div className={`ui-drp__body`}><div ref={WRef} className={`ui-drp__presets`} role={`listbox`} aria-label={`Presets`}><span ref={beRef} className={`ui-drp__pill`} aria-hidden={`true`} />{presets.map(e => <button key={e.id} type={`button`} role={`option`} aria-selected={X?.id === e.id} className={`ui-drp__preset`} onClick={() => Te(e)}>{e.label}</button>)}<span className={`ui-drp__preset ui-drp__preset-custom`} aria-hidden={!!X} data-active={!X || undefined}>{`Custom`}</span></div><div className={`ui-drp__cal`}><div className={`ui-drp__nav`}><button type={`button`} className={`ui-drp__icon-btn`} aria-label={`Previous month`} onClick={() => Z(-1)}><Component d={v.left} /></button><button type={`button`} className={`ui-drp__icon-btn`} aria-label={`Next month`} onClick={() => Z(1)}><Component d={v.right} /></button></div><div key={P.getTime()} ref={VRef} className={`ui-drp__months`} data-dir={ge} onKeyDown={onKeyDown} onPointerLeave={() => !k.end && setJ(null)} onPointerDown={() => URef.current = false}>{Ae.map((e, t) => <div key={e.getTime()} className={`ui-drp__month`} data-second={t === 1 || undefined}><div className={`ui-drp__month-name`} aria-live={t === 0 ? `polite` : undefined}>{te.format(e)}</div><div role={`grid`} aria-label={te.format(e)} className={`ui-drp__grid`}><div role={`row`} className={`ui-drp__weekdays`}>{ke.map(e => <span key={e} role={`columnheader`} className={`ui-drp__weekday`}>{e}</span>)}</div>{Array.from({
                    length
                  }, (t, n) => oe(e, weekStartsOn)[n] ?? Array(7).fill(null)).map((e, key) => <div key={key} role={`row`} className={`ui-drp__week`}>{e.map((e, t) => {
                      if (!e) {
                        return <span key={t} className={`ui-drp__day ui-drp__day-empty`} role={`gridcell`} />;
                      }
                      let n = l(e, J.start);
                      let i = l(e, J.end);
                      let a = Me(e, q);
                      let o = !a && Me(e, Y);
                      let disabled = De(e);
                      return <span key={t} role={`gridcell`} aria-selected={a || n || undefined} className={`ui-drp__day`} data-range={a || undefined} data-start={n || undefined} data-end={i || undefined} data-preview={!k.end && a || undefined} data-compare={o || undefined} data-compare-start={Y && l(e, Y.start) || undefined} data-compare-end={Y && l(e, Y.end) || undefined} data-row-start={t === 0 || e.getDate() === 1 || undefined} data-row-end={t === 6 || l(e, c(e)) || undefined}><button type={`button`} data-day={e.getTime()} tabIndex={l(e, L) ? 0 : -1} disabled={disabled} aria-label={ne.format(e)} aria-current={l(e, S) ? `date` : undefined} onClick={() => we(e)} onPointerEnter={() => !k.end && setJ(e)} onFocus={() => setL(e)}>{e.getDate()}</button></span>;
                    })}</div>)}</div></div>)}</div></div></div><div className={`ui-drp__foot`}><div className={`ui-drp__summary`}><div className={`ui-drp__summary-range`}><span key={`${J.start.getTime()}-${J.end.getTime()}`}>{k.end || j ? h(J) : `${m.format(k.start)} – pick an end`}</span><span key={Q} className={`ui-drp__count`}>{Q}{` `}{Q === 1 ? `day` : `days`}</span></div>{compare && <div className={`ui-drp__compare`}><span className={`ui-drp__compare-label`}>{`Compare`}</span><div ref={xeRef} className={`ui-drp__segments`} role={`radiogroup`} aria-label={`Compare to`}><span ref={SeRef} className={`ui-drp__pill`} aria-hidden={`true`} />{ae.map(e => <button key={e.id} type={`button`} role={`radio`} aria-checked={N === e.id} className={`ui-drp__segment`} onClick={() => setN(e.id)}>{e.label}</button>)}</div></div>}{compare && <div className={`ui-drp__fold`} data-open={!!Y || undefined}><div>{GRef.current && <div key={`${GRef.current.start.getTime()}-${GRef.current.end.getTime()}`} className={`ui-drp__compare-range`}>{`vs. `}{h(GRef.current)}</div>}</div></div>}</div><div className={`ui-drp__buttons`}><button type={`button`} className={`ui-drp__btn`} onClick={() => K()}>{`Cancel`}</button><button type={`button`} className={`ui-drp__btn ui-drp__btn-primary`} disabled={!k.end} onClick={onClick}>{`Apply`}</button></div></div></div></div>}</div>;
}
var se = `.ui-drp{--ui-drp-tray: #f0f0f0;--ui-drp-card: #ffffff;--ui-drp-line: #ececec;--ui-drp-ink: #171717;--ui-drp-text: #404040;--ui-drp-muted: #8f8f8f;--ui-drp-faint: #c4c4c7;--ui-drp-hover: #f2f2f3;--ui-drp-active: #ebebed;--ui-drp-band: rgba(47, 107, 255, 0.1);--ui-drp-band-preview: rgba(47, 107, 255, 0.06);--ui-drp-accent: #2f6bff;--ui-drp-on-accent: #ffffff;--ui-drp-compare: #ececee;--ui-drp-compare-edge: #b9b9be;--ui-drp-focus: rgba(23, 23, 23, 0.22);--ui-drp-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.18), 0 4px 12px -4px rgba(0, 0, 0, 0.06);--ui-drp-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;display: inline-block;max-width: 100%;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 1.4;color: var(--ui-drp-text);-webkit-font-smoothing: antialiased}.ui-drp *, .ui-drp *::before, .ui-drp *::after{box-sizing: border-box}:where(.ui-drp) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-drp) svg{display: block;flex: none}.ui-drp button:focus-visible{outline: 2px solid var(--ui-drp-focus);outline-offset: 2px}.ui-drp__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-drp__trigger{display: inline-flex;align-items: center;overflow: hidden;max-width: 100%;min-height: 38px;padding: 5px 9px 5px 11px;border-radius: 11px;background: var(--ui-drp-card);box-shadow: 0 0 0 1px var(--ui-drp-line), 0 1px 2px rgba(0, 0, 0, 0.04);text-align: left;transition: box-shadow 160ms ease, width 320ms var(--ui-drp-ease)}.ui-drp__trigger-inner{display: inline-flex;flex: none;align-items: center;gap: 10px;max-width: calc(100vw - 56px)}.ui-drp__trigger:hover{box-shadow: 0 0 0 1px var(--ui-drp-faint), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-drp__trigger > .ui-drp__glyph{color: var(--ui-drp-muted)}.ui-drp__trigger-text{display: grid;min-width: 0;animation: ui-drp-in 280ms var(--ui-drp-ease) both}.ui-drp__trigger-range{overflow: hidden;color: var(--ui-drp-ink);font-weight: 500;white-space: nowrap;text-overflow: ellipsis}.ui-drp__trigger-compare{overflow: hidden;font-size: 12px;color: var(--ui-drp-muted);white-space: nowrap;text-overflow: ellipsis}.ui-drp__chevron{color: var(--ui-drp-muted);transition: transform 260ms var(--ui-drp-ease)}.ui-drp[data-open] .ui-drp__chevron{transform: rotate(180deg)}.ui-drp__panel{position: absolute;z-index: 30;top: calc(100% + 8px);left: 0;container-type: inline-size;width: var(--ui-drp-panel-width, min(652px, calc(100vw - 32px)));padding: 4px;border-radius: 20px;background: var(--ui-drp-tray);box-shadow: var(--ui-drp-shadow);overflow: hidden;transform-origin: top left;transition: height 320ms var(--ui-drp-ease);animation: ui-drp-open 260ms var(--ui-drp-ease) both}.ui-drp__pill{position: absolute;top: 0;left: 0;z-index: 0;border-radius: 8px;background: var(--ui-drp-active);opacity: 0;pointer-events: none;transition: transform 320ms var(--ui-drp-ease), width 320ms var(--ui-drp-ease), height 320ms var(--ui-drp-ease), opacity 200ms ease}.ui-drp__body{display: grid;grid-template-columns: 136px 1fr;border-radius: 16px;background: var(--ui-drp-card);box-shadow: 0 0 0 1px var(--ui-drp-line)}.ui-drp__presets{position: relative;display: flex;flex-direction: column;gap: 1px;padding: 6px;border-right: 1px solid var(--ui-drp-line)}.ui-drp__preset{display: flex;align-items: center;height: 30px;padding: 0 10px;border-radius: 8px;text-align: left;white-space: nowrap;color: var(--ui-drp-text);position: relative;z-index: 1;transition: background-color 140ms ease, color 200ms ease}button.ui-drp__preset:hover:not([aria-selected="true"]){background: var(--ui-drp-hover);color: var(--ui-drp-ink)}.ui-drp__preset[aria-selected="true"], .ui-drp__preset-custom[data-active]{color: var(--ui-drp-ink)}.ui-drp__preset-custom{margin-top: auto;color: var(--ui-drp-muted);cursor: default}.ui-drp__cal{position: relative;padding: 12px 14px 10px;overflow: hidden}.ui-drp__nav{position: absolute;top: 8px;left: 10px;right: 10px;z-index: 1;display: flex;justify-content: space-between;pointer-events: none}.ui-drp__nav > *{pointer-events: auto}.ui-drp__icon-btn{display: grid;place-items: center;width: 28px;height: 28px;border-radius: 8px;color: var(--ui-drp-muted);transition: background-color 140ms ease, color 140ms ease}.ui-drp__icon-btn:hover{background: var(--ui-drp-hover);color: var(--ui-drp-ink)}.ui-drp__months{display: grid;grid-template-columns: repeat(2, auto);justify-content: center;gap: 24px;animation: ui-drp-slide 320ms var(--ui-drp-ease) both}.ui-drp__months[data-dir="-1"]{animation-name: ui-drp-slide-back}.ui-drp__month-name{height: 22px;margin-bottom: 6px;font-weight: 600;text-align: center;color: var(--ui-drp-ink)}.ui-drp__grid{display: grid;gap: 2px}.ui-drp__weekdays, .ui-drp__week{display: grid;grid-template-columns: repeat(7, 32px)}.ui-drp__weekday{height: 26px;font-size: 11px;font-weight: 500;line-height: 26px;text-align: center;color: var(--ui-drp-muted)}.ui-drp__day{position: relative;display: grid;height: 32px}.ui-drp__day::before{content: "";position: absolute;inset: 2px 0;transition: background-color 220ms ease, border-radius 220ms var(--ui-drp-ease), left 220ms var(--ui-drp-ease), right 220ms var(--ui-drp-ease)}.ui-drp__day[data-range]::before{background: var(--ui-drp-band)}.ui-drp__day[data-preview]::before{background: var(--ui-drp-band-preview)}.ui-drp__day[data-compare]::before{background: var(--ui-drp-compare)}.ui-drp__day[data-start]::before, .ui-drp__day[data-compare-start]::before, .ui-drp__day[data-row-start]::before{left: 2px;border-top-left-radius: 9px;border-bottom-left-radius: 9px}.ui-drp__day[data-end]::before, .ui-drp__day[data-compare-end]::before, .ui-drp__day[data-row-end]::before{right: 2px;border-top-right-radius: 9px;border-bottom-right-radius: 9px}.ui-drp__day button{position: relative;border-radius: 9px;font-size: 12.5px;font-variant-numeric: tabular-nums;color: var(--ui-drp-ink);transition: background-color 200ms ease, color 200ms ease, box-shadow 200ms ease, transform 160ms var(--ui-drp-ease)}.ui-drp__day button:hover:not(:disabled){background: var(--ui-drp-hover)}.ui-drp__day[data-range] button:hover:not(:disabled){background: transparent;box-shadow: inset 0 0 0 1px var(--ui-drp-accent)}.ui-drp__day button:active:not(:disabled){transform: scale(0.94)}.ui-drp__day button:disabled{color: var(--ui-drp-faint);cursor: default}.ui-drp__day button[aria-current="date"]::after{content: "";position: absolute;left: 50%;bottom: 4px;width: 3px;height: 3px;margin-left: -1.5px;border-radius: 50%;background: currentColor;opacity: 0.55}.ui-drp__day[data-start] button, .ui-drp__day[data-end] button{background: var(--ui-drp-accent) !important;color: var(--ui-drp-on-accent);font-weight: 600;box-shadow: none !important;animation: ui-drp-pick 380ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-drp__day[data-preview][data-end] button{animation: none}.ui-drp__day[data-compare-start] button, .ui-drp__day[data-compare-end] button{box-shadow: inset 0 0 0 1px var(--ui-drp-compare-edge)}.ui-drp__day-empty::before{display: none}.ui-drp__foot{display: flex;align-items: flex-end;justify-content: space-between;gap: 14px;padding: 10px 10px 6px 10px}.ui-drp__summary{display: grid;gap: 6px;min-width: 0}.ui-drp__summary-range{display: flex;align-items: baseline;gap: 8px;color: var(--ui-drp-ink);font-weight: 500}.ui-drp__summary-range > span:first-child{animation: ui-drp-in 280ms var(--ui-drp-ease) both}.ui-drp__count{font-size: 12px;font-weight: 400;font-variant-numeric: tabular-nums;color: var(--ui-drp-muted);animation: ui-drp-in 280ms var(--ui-drp-ease) both}.ui-drp__compare{display: flex;align-items: center;gap: 8px}.ui-drp__compare-label{font-size: 12px;color: var(--ui-drp-muted)}.ui-drp__segments{position: relative;display: inline-flex;padding: 2px;border-radius: 9px;background: var(--ui-drp-card);box-shadow: 0 0 0 1px var(--ui-drp-line)}.ui-drp__segment{position: relative;z-index: 1;height: 24px;padding: 0 8px;border-radius: 7px;font-size: 12px;white-space: nowrap;color: var(--ui-drp-muted);transition: color 200ms ease}.ui-drp__segment:hover{color: var(--ui-drp-ink)}.ui-drp__segment[aria-checked="true"]{color: var(--ui-drp-ink)}.ui-drp__segments .ui-drp__pill{border-radius: 7px}.ui-drp__fold{display: grid;grid-template-rows: 0fr;opacity: 0;margin-top: -6px;transition: grid-template-rows 300ms var(--ui-drp-ease), opacity 200ms ease, margin-top 300ms var(--ui-drp-ease)}.ui-drp__fold[data-open]{grid-template-rows: 1fr;opacity: 1;margin-top: 0}.ui-drp__fold > div{min-height: 0;overflow: hidden}.ui-drp__compare-range{display: flex;align-items: center;gap: 6px;font-size: 12px;color: var(--ui-drp-muted);animation: ui-drp-in 220ms var(--ui-drp-ease) both}.ui-drp__compare-range::before{content: "";width: 14px;height: 8px;border-radius: 3px;background: var(--ui-drp-compare);box-shadow: inset 0 0 0 1px var(--ui-drp-compare-edge)}.ui-drp__buttons{display: flex;flex: none;gap: 6px}.ui-drp__btn{height: 32px;padding: 0 13px;border-radius: 9px;font-weight: 500;color: var(--ui-drp-text);transition: background-color 140ms ease, opacity 140ms ease, transform 140ms ease}.ui-drp__btn:not(.ui-drp__btn-primary):hover{background: var(--ui-drp-active)}.ui-drp__btn-primary{background: var(--ui-drp-ink);color: var(--ui-drp-card)}.ui-drp__btn-primary:hover{opacity: 0.88}.ui-drp__btn-primary:active{transform: scale(0.97)}.ui-drp__btn-primary:disabled{opacity: 0.35;cursor: default}@keyframes ui-drp-open{from{opacity: 0;transform: translateY(-4px) scale(0.98)}to{opacity: 1;transform: none}}@keyframes ui-drp-slide{from{opacity: 0;transform: translateX(14px)}to{opacity: 1;transform: none}}@keyframes ui-drp-slide-back{from{opacity: 0;transform: translateX(-14px)}to{opacity: 1;transform: none}}@keyframes ui-drp-in{from{opacity: 0;transform: translateY(4px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-drp-pick{0%{transform: scale(0.82)}60%{transform: scale(1.06)}100%{transform: scale(1)}}@container (max-width: 600px){.ui-drp__body{grid-template-columns: 1fr}.ui-drp__presets{flex-direction: row;gap: 6px;padding: 10px;overflow-x: auto;border-right: 0;border-bottom: 1px solid var(--ui-drp-line);scrollbar-width: none}.ui-drp__presets::-webkit-scrollbar{display: none}.ui-drp__preset{flex: none;height: 32px;padding: 0 12px;border-radius: 999px;box-shadow: inset 0 0 0 1px var(--ui-drp-line)}.ui-drp__presets .ui-drp__pill{border-radius: 999px}.ui-drp__preset-custom{display: none}.ui-drp__months{grid-template-columns: 1fr;justify-items: center}.ui-drp__month:not([data-second]){display: none}.ui-drp__foot{flex-direction: column;align-items: stretch}.ui-drp__buttons{justify-content: flex-end}.ui-drp__compare{flex-wrap: wrap}}@container (max-width: 340px){.ui-drp__weekdays, .ui-drp__week{grid-template-columns: repeat(7, 1fr)}.ui-drp__cal{padding: 14px 8px 10px}.ui-drp__months{justify-items: stretch}}@media (hover: none) and (pointer: coarse){.ui-drp__day{height: 38px}.ui-drp__weekdays, .ui-drp__week{grid-template-columns: repeat(7, minmax(0, 38px))}.ui-drp__icon-btn{width: 38px;height: 38px}.ui-drp__btn{height: 38px}.ui-drp__segment{height: 30px}}@media (prefers-reduced-motion: reduce){.ui-drp *, .ui-drp *::before, .ui-drp *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-drp{--ui-drp-tray: #111113;--ui-drp-card: #19191b;--ui-drp-line: #2a2a2e;--ui-drp-ink: #ededed;--ui-drp-text: #c8c8cc;--ui-drp-muted: #8b8b92;--ui-drp-faint: #4a4a50;--ui-drp-hover: #232326;--ui-drp-active: #2a2a2e;--ui-drp-band: rgba(109, 139, 255, 0.18);--ui-drp-band-preview: rgba(109, 139, 255, 0.1);--ui-drp-accent: #6d8bff;--ui-drp-on-accent: #0d0d10;--ui-drp-compare: #26262a;--ui-drp-compare-edge: #4a4a50;--ui-drp-focus: rgba(255, 255, 255, 0.3);--ui-drp-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.6)}`;
function XComponent() {
  return <div className={`drp-demo`}><B1Component defaultOpen /></div>;
}
export { XComponent as default };
