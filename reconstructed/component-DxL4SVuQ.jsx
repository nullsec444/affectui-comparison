// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
const n = t_1();
const r = t();
const i = (e, t = 0) => new Intl.NumberFormat(`en-US`, {
  minimumFractionDigits: t,
  maximumFractionDigits: t
}).format(e);
const a = (e, t) => {
  if (t) {
    return `${e} ${t}`;
  }
  return e;
};
const o = new Intl.DateTimeFormat(`en-US`, {
  month: `short`,
  day: `numeric`
});
function s(e) {
  let t = Math.ceil((e.getTime() - Date.now()) / 86400000);
  if (t <= 0) {
    return `Resets today`;
  }
  if (t === 1) {
    return `Resets tomorrow`;
  }
  return `Resets in ${t} days`;
}
const c = [`var(--ui-um-c1)`, `var(--ui-um-c2)`, `var(--ui-um-c3)`, `var(--ui-um-c4)`, `var(--ui-um-c5)`];
const l = e => 1 - (1 - e) ** 4;
const u = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function useD(e, t, r) {
  let [i, setI] = n.useState(() => Object.fromEntries(Object.keys(e).map(e => [e, 0])));
  let oRef = n.useRef(i);
  let sRef = n.useRef(false);
  let c = JSON.stringify(e);
  n.useEffect(() => {
    let e = JSON.parse(c);
    let n = {
      ...oRef.current
    };
    if (u()) {
      oRef.current = e;
      setI(e);
      return;
    }
    let i = Object.values(e).some(e => e !== 0);
    let d = i && !sRef.current ? t : r;
    if (i) {
      sRef.current = true;
    }
    let f = performance.now();
    let p = 0;
    let m = t => {
      let r = Math.min(1, (t - f) / d);
      let i = l(r);
      let s = {};
      for (let t in e) {
        s[t] = (n[t] ?? 0) + (e[t] - (n[t] ?? 0)) * i;
      }
      oRef.current = s;
      setI(s);
      if (r < 1) {
        p = requestAnimationFrame(m);
      }
    };
    p = requestAnimationFrame(m);
    return () => cancelAnimationFrame(p);
  }, [c]);
  return e => i[e] ?? 0;
}
function f(e, t, n) {
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
function p(e, t) {
  let n = [...t];
  e.forEach((e, r) => {
    if (!t.some(t => t.label === e.label)) {
      n.splice(Math.min(r, n.length), 0, {
        ...e,
        value: 0,
        leaving: true
      });
    }
  });
  return n;
}
function MComponent({
  total,
  used,
  limits = [],
  periods,
  period,
  defaultPeriod,
  onPeriodChange,
  resetAt,
  daily,
  onUpgrade,
  title = `Usage`,
  plan,
  unit = `credits`,
  warnAt = 0.8,
  upgradeLabel = `Upgrade`,
  topUpLabel = `Add credits`,
  className
}) {
  let b = n.useId();
  let xRef = n.useRef(null);
  let SRef = n.useRef(null);
  let CRef = n.useRef(null);
  let wRef = n.useRef(null);
  let TRef = n.useRef(null);
  let ceRef = n.useRef(null);
  let leRef = n.useRef(null);
  let [ue, setUe] = n.useState(defaultPeriod ?? periods?.[0]?.id);
  let E = period ?? ue;
  let [fe, setFe] = n.useState(false);
  let [D, setD] = n.useState(null);
  let [k, setK] = n.useState(null);
  let [A, setA] = n.useState(null);
  let [he, setHe] = n.useState(``);
  let MRef = n.useRef(new Map());
  let _e = e => {
    if (e.color) {
      return e.color;
    }
    if (!MRef.current.has(e.label)) {
      MRef.current.set(e.label, c[MRef.current.size % c.length]);
    }
    return MRef.current.get(e.label);
  };
  let N = used.map(e => ({
    ...e,
    color: _e(e)
  }));
  let [P, setP] = n.useState(N);
  let ve = used.map(e => `${e.label}:${e.value}:${e.color ?? ``}`).join(`|`);
  let IRef = n.useRef(true);
  n.useLayoutEffect(() => {
    if (IRef.current) {
      IRef.current = false;
      return;
    }
    setP(e => p(e.filter(e => !e.leaving), N));
    let e = window.setTimeout(() => setP(e => e.filter(e => !e.leaving)), 460);
    return () => clearTimeout(e);
  }, [ve]);
  n.useEffect(() => {
    let xRef_current = xRef.current;
    if (!xRef_current || typeof IntersectionObserver > `u`) {
      setFe(true);
      return;
    }
    let t = new IntersectionObserver(e => {
      if (e.some(e => e.isIntersecting)) {
        setFe(true);
        t.disconnect();
      }
    }, {
      threshold: 0.2
    });
    t.observe(xRef_current);
    return () => t.disconnect();
  }, []);
  let used_1 = used.reduce((acc, item) => acc + Math.max(0, item.value), 0);
  let R = total > 0 ? used_1 / total : 0;
  let z = R >= 1 ? `limit` : R >= warnAt ? `warn` : `ok`;
  let ye = Math.max(total, used_1) || 1;
  let B = {
    used: used_1,
    left: Math.max(0, total - used_1),
    pct: R * 100
  };
  P.forEach(e => B[`r:${e.label}`] = e.leaving ? 0 : Math.max(0, e.value));
  limits.forEach(e => B[`l:${e.label}`] = e.used);
  daily?.forEach((e, t) => B[`d:${t}`] = e.value ?? 0);
  if (!fe) {
    for (let e in B) {
      B[e] = 0;
    }
  }
  let V = useD(B, 1200, 650);
  let left = 0;
  let U = P.map(e => {
    let width = V(`r:${e.label}`) / ye * 100;
    let n = {
      ...e,
      left,
      width
    };
    left += width;
    return n;
  });
  let W = P.find(e => e.label === D && !e.leaving);
  let G = P.find(e => e.label === k);
  let K = U.find(e => e.label === k);
  let be = K ? Math.min(100, Math.max(0, K.left + K.width / 2)) : 50;
  let q = e => {
    setD(e);
    if (e) {
      setK(e);
    }
  };
  let xe = e => {
    let t = e.currentTarget.getBoundingClientRect();
    let n = (e.clientX - t.left) / t.width * 100;
    return U.find(e => !e.leaving && e.width > 0 && n >= e.left && n <= e.left + e.width)?.label ?? null;
  };
  let Se = e => {
    let t = P.filter(e => !e.leaving && e.value > 0);
    if (!t.length) {
      return;
    }
    let n = t.findIndex(e => e.label === D);
    if (e.key === `ArrowRight`) {
      q(t[(n + 1) % t.length].label);
    } else if (e.key === `ArrowLeft`) {
      q(t[(n - 1 + t.length) % t.length].label);
    } else if (e.key === `Escape`) {
      q(null);
    } else {
      return;
    }
    e.preventDefault();
  };
  let J = daily ?? [];
  let Ce = Math.max(1, ...J.map(e => e.value ?? 0));
  let Y = J.filter(e => e.value !== null);
  let X = Y.length ? Y.reduce((acc, item) => acc + (item.value ?? 0), 0) / Y.length : 0;
  let we = e => {
    let t = e.currentTarget.getBoundingClientRect();
    let n = Math.floor((e.clientX - t.left) / t.width * J.length);
    return Math.min(J.length - 1, Math.max(0, n));
  };
  let Te = e => {
    if (J.length) {
      if (e.key === `ArrowRight`) {
        setA(e => Math.min(J.length - 1, e === null ? 0 : e + 1));
      } else if (e.key === `ArrowLeft`) {
        setA(e => Math.max(0, e === null ? J.length - 1 : e - 1));
      } else if (e.key === `Escape`) {
        setA(null);
      } else {
        return;
      }
      e.preventDefault();
    }
  };
  let Z = A === null ? undefined : J[A];
  let EeRef = n.useRef(J.length);
  let DeRef = n.useRef(false);
  if (EeRef.current !== J.length) {
    EeRef.current = J.length;
    DeRef.current = true;
  }
  let Oe = e => {
    if (e !== E) {
      if (period === undefined) {
        setUe(e);
      }
      onPeriodChange?.(e);
      setD(null);
      setA(null);
    }
  };
  let ke = e => {
    if (!periods?.length) {
      return;
    }
    let t = periods.findIndex(e => e.id === E);
    let n = -1;
    if (e.key === `ArrowRight` || e.key === `ArrowDown`) {
      n = (t + 1) % periods.length;
    } else if (e.key === `ArrowLeft` || e.key === `ArrowUp`) {
      n = (t - 1 + periods.length) % periods.length;
    }
    if (!(n < 0)) {
      e.preventDefault();
      Oe(periods[n].id);
      wRef.current?.querySelectorAll(`[role=radio]`)[n]?.focus();
    }
  };
  n.useLayoutEffect(() => {
    f(wRef.current, TRef.current, `[aria-checked="true"]`);
  });
  n.useLayoutEffect(() => {
    let wRef_current = wRef.current;
    if (!wRef_current) {
      return;
    }
    let t = new ResizeObserver(() => f(wRef_current, TRef.current, `[aria-checked="true"]`));
    t.observe(wRef_current);
    return () => t.disconnect();
  }, []);
  n.useLayoutEffect(() => {
    let SRef_current = SRef.current;
    let CRef_current = CRef.current;
    if (!SRef_current || !CRef_current) {
      return;
    }
    let n = () => SRef_current.style.height = `${CRef_current.offsetHeight}px`;
    n();
    let r = new ResizeObserver(n);
    r.observe(CRef_current);
    return () => r.disconnect();
  }, []);
  n.useLayoutEffect(() => {
    let ceRef_current = ceRef.current;
    let leRef_current = leRef.current;
    if (!ceRef_current || !leRef_current) {
      return;
    }
    let n = () => ceRef_current.style.width = `${leRef_current.offsetWidth}px`;
    n();
    let r = new ResizeObserver(n);
    r.observe(leRef_current);
    return () => r.disconnect();
  }, []);
  let AeRef = n.useRef(z);
  n.useEffect(() => {
    if (AeRef.current !== z) {
      AeRef.current = z;
      setHe(z === `limit` ? `${title}: limit reached, ${i(used_1)} of ${i(total)} ${unit} used` : z === `warn` ? `${title}: running low, ${Math.round(R * 100)}% of ${unit} used` : `${title}: ${i(used_1)} of ${i(total)} ${unit} used`);
    }
  }, [z]);
  let Q = resetAt === undefined ? null : new Date(resetAt);
  let $ = z !== `ok`;
  let je = V(`pct`);
  return <section ref={xRef} className={[`ui-um`, className].filter(Boolean).join(` `)} aria-labelledby={`${b}-title`} data-state={z}><style href={`ui-usage-meter`} precedence={`default`}>{ee}</style><div ref={SRef} className={`ui-um__card`}><div ref={CRef} className={`ui-um__inner`}><header className={`ui-um__head`}><div className={`ui-um__heading`}><h3 id={`${b}-title`} className={`ui-um__title`}>{title}</h3>{(plan || Q) && <p className={`ui-um__sub`}>{plan}{plan && Q && <span className={`ui-um__sep`}>{`·`}</span>}{Q && <time dateTime={Q.toISOString()} title={`Resets on ${o.format(Q)}`}>{s(Q)}</time>}</p>}</div>{periods && periods.length > 1 && <div ref={wRef} className={`ui-um__switch`} role={`radiogroup`} aria-label={`Period`} onKeyDown={ke}><span ref={TRef} className={`ui-um__pill`} aria-hidden={`true`} />{periods.map(e => <button key={e.id} type={`button`} role={`radio`} aria-checked={e.id === E} tabIndex={e.id === E ? 0 : -1} className={`ui-um__option`} onClick={() => Oe(e.id)}>{e.label}</button>)}</div>}</header><div className={`ui-um__figure`}><p className={`ui-um__amount`}><span className={`ui-um__big`}>{i(V(`used`))}</span><span className={`ui-um__of`}>{`of `}{a(i(total), unit)}</span></p><span className={`ui-um__pct`} data-state={z}>{$ && <span className={`ui-um__dot`} aria-hidden={`true`} />}{i(Math.min(je, 999))}{`%`}</span></div><div className={`ui-um__bar`} tabIndex={0} role={`group`} aria-label={`${i(used_1)} of ${i(total)} ${unit} used – arrow keys read each category`} data-active={W ? `` : undefined} onPointerMove={e => e.pointerType === `mouse` && q(xe(e))} onPointerLeave={e => e.pointerType === `mouse` && q(null)} onPointerUp={e => {
          if (e.pointerType === `mouse`) {
            return;
          }
          let t = xe(e);
          q(t === D ? null : t);
        }} onKeyDown={Se} onBlur={() => q(null)}><div className={`ui-um__track`} role={`meter`} aria-valuemin={0} aria-valuemax={total} aria-valuenow={Math.min(used_1, total)} aria-valuetext={`${i(used_1)} of ${i(total)} ${unit}`}>{U.map(e => <span key={e.label} className={`ui-um__seg`} data-active={e.label === D || undefined} style={{
              width: `${e.width}%`,
              background: e.color
            }} />)}</div><div className={`ui-um__tip`} data-open={W ? `` : undefined} style={{
            left: `${be}%`,
            "--ui-um-tip-x": `${-be}%`
          }} aria-live={`polite`}>{G && <><span className={`ui-um__tip-label`}><span className={`ui-um__swatch`} style={{
                  background: G.color
                }} />{G.label}</span><span className={`ui-um__tip-value`}>{a(i(G.value), unit)}<span className={`ui-um__muted`}>{` · `}{i(used_1 ? G.value / used_1 * 100 : 0)}{`%`}</span></span></>}</div></div><ul className={`ui-um__legend`} aria-label={`By category`} data-active={W ? `` : undefined}>{P.map(e => {
            let t = V(`r:${e.label}`);
            return <li key={e.label} className={`ui-um__row`} data-leaving={e.leaving || undefined}><div className={`ui-um__item`} data-active={e.label === D || undefined} onPointerEnter={t => t.pointerType === `mouse` && !e.leaving && q(e.label)} onPointerLeave={e => e.pointerType === `mouse` && q(null)} onPointerUp={t => t.pointerType !== `mouse` && !e.leaving && q(e.label === D ? null : e.label)}><span className={`ui-um__swatch`} style={{
                  background: e.color
                }} /><span className={`ui-um__label`}>{e.label}</span><span className={`ui-um__value`}>{i(t)}</span><span className={`ui-um__share`}>{i(V(`used`) ? t / V(`used`) * 100 : 0)}{`%`}</span></div></li>;
          })}</ul>{J.length > 0 && <div className={`ui-um__daily`}><div className={`ui-um__daily-head`}><span>{`Per day`}</span><span key={Z ? `d${A}` : `avg`} className={`ui-um__daily-read`}>{Z ? <>{Z.label}{` · `}<b>{Z.value === null ? `–` : a(i(Z.value), unit)}</b></> : <>{`Avg `}<b>{i(X)}</b>{` / day`}</>}</span></div><div key={J.length} className={`ui-um__spark`} tabIndex={0} role={`img`} aria-label={`${title} per day, ${i(X)} ${unit} on average – arrow keys read each day`} data-hover={A !== null || undefined} data-regrow={DeRef.current || undefined} data-few={J.length <= 14 || undefined} onPointerMove={e => setA(we(e))} onPointerDown={e => setA(we(e))} onPointerLeave={e => e.pointerType === `mouse` && setA(null)} onKeyDown={Te} onBlur={() => setA(null)}>{J.map((e, t) => <span key={t} className={`ui-um__day`} data-future={e.value === null || undefined} data-active={t === A || undefined} style={{
              "--i": t
            }}><span style={{
                height: e.value === null ? undefined : `${Math.max(4, V(`d:${t}`) / Ce * 100)}%`
              }} /></span>)}</div></div>}{limits.length > 0 && <ul className={`ui-um__limits`} aria-label={`Plan limits`} style={{
          "--n": Math.min(3, limits.length)
        }}>{limits.map(e => {
            let t = e.total == null || !isFinite(e.total);
            let n = e.decimals ?? (Number.isInteger(e.used) && (t || Number.isInteger(e.total)) ? 0 : 1);
            let o = t ? 0 : e.used / Math.max(e.total, 1e-9);
            let s = t ? `ok` : o >= 1 ? `limit` : o >= warnAt ? `warn` : `ok`;
            let c = V(`l:${e.label}`);
            let l = t ? `∞` : i(e.total, Number.isInteger(e.total) ? 0 : n);
            return <li key={e.label} className={`ui-um__limit`} data-state={s}><span className={`ui-um__limit-label`}>{e.label}{s !== `ok` && <span className={`ui-um__dot`} aria-label={s === `limit` ? `At the limit` : `Close to the limit`} />}</span><span className={`ui-um__limit-value`}>{i(c, n)}<span className={`ui-um__muted`}>{` of `}{a(l, t ? undefined : e.unit)}</span></span>{t ? <span className={`ui-um__thin`} data-unlimited={``} aria-label={`${e.label}: ${i(e.used, n)}, unlimited`} role={`img`} /> : <span className={`ui-um__thin`} role={`meter`} aria-label={e.label} aria-valuemin={0} aria-valuemax={e.total} aria-valuenow={Math.min(e.used, e.total)} aria-valuetext={`${i(e.used, n)} of ${a(l, e.unit)}`}><span style={{
                  width: `${Math.min(100, c / Math.max(e.total, 1e-9) * 100)}%`
                }} /></span>}</li>;
          })}</ul>}</div></div><div className={`ui-um__foot`}><span key={z} className={`ui-um__status`}>{$ && <span className={`ui-um__dot`} aria-hidden={`true`} />}{z === `limit` ? <><b>{`Limit reached`}</b>{used_1 > total && <span className={`ui-um__muted`}>{a(i(used_1 - total), `over`)}</span>}</> : <>{z === `warn` && <b>{`Running low`}</b>}<span className={z === `warn` ? `ui-um__muted` : undefined}>{a(i(V(`left`)), unit)}{` left`}</span></>}</span><button ref={ceRef} type={`button`} className={`ui-um__action`} data-strong={$ || undefined} onClick={() => onUpgrade?.(z)}><span ref={leRef} className={`ui-um__action-inner`}><span key={$ ? `top-up` : `upgrade`} className={`ui-um__action-text`}>{$ ? topUpLabel : upgradeLabel}</span></span></button></div><span className={`ui-um__live`} aria-live={`polite`}>{he}</span></section>;
}
var ee = `.ui-um{--ui-um-tray: #f0f0f0;--ui-um-card: #ffffff;--ui-um-line: #ececec;--ui-um-ink: #171717;--ui-um-text: #404040;--ui-um-muted: #8f8f8f;--ui-um-faint: #b5b5b5;--ui-um-well: #f4f4f5;--ui-um-hover: #f4f4f5;--ui-um-track: #efeff1;--ui-um-fill: #4a4a4f;--ui-um-spark: #dcdce0;--ui-um-accent: #2f6bff;--ui-um-warn: #f59e0b;--ui-um-warn-text: #b45309;--ui-um-c1: #2f6bff;--ui-um-c2: #74a0ff;--ui-um-c3: #b4cbff;--ui-um-c4: #a8a8ae;--ui-um-c5: #d4d4d8;--ui-um-focus: rgba(23, 23, 23, 0.22);--ui-um-tip-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.16), 0 2px 6px rgba(0, 0, 0, 0.06);--ui-um-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;container-type: inline-size;position: relative;display: grid;width: 100%;max-width: 460px;padding: 4px;border-radius: 20px;background: var(--ui-um-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 1.45;color: var(--ui-um-text);-webkit-font-smoothing: antialiased}.ui-um *, .ui-um *::before, .ui-um *::after{box-sizing: border-box}:where(.ui-um) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-um) :is(h3, p, ul){margin: 0;padding: 0}:where(.ui-um) ul{list-style: none}.ui-um :is(button, [tabindex="0"]):focus-visible{outline: 2px solid var(--ui-um-focus);outline-offset: 2px}.ui-um b{font-weight: 500;color: var(--ui-um-ink)}.ui-um__muted{color: var(--ui-um-muted)}.ui-um__card{overflow: hidden;border-radius: 16px;background: var(--ui-um-card);box-shadow: 0 0 0 1px var(--ui-um-line), 0 1px 2px rgba(0, 0, 0, 0.04);transition: height 360ms var(--ui-um-ease)}.ui-um__inner{display: flow-root;padding: 14px 16px 18px}.ui-um__head{display: flex;align-items: flex-start;justify-content: space-between;gap: 12px}.ui-um__heading{min-width: 0;padding-top: 2px}.ui-um__title{overflow: hidden;font-size: 14px;font-weight: 600;line-height: 20px;color: var(--ui-um-ink);white-space: nowrap;text-overflow: ellipsis}.ui-um__sub{font-size: 12.5px;color: var(--ui-um-muted);white-space: nowrap;overflow: hidden;text-overflow: ellipsis}.ui-um__sep{margin: 0 6px;color: var(--ui-um-faint)}.ui-um__switch{position: relative;display: grid;grid-auto-columns: auto;grid-auto-flow: column;flex: none;padding: 2px;border-radius: 10px;background: var(--ui-um-well);box-shadow: inset 0 0 0 1px var(--ui-um-line)}.ui-um__pill{position: absolute;top: 0;left: 0;border-radius: 8px;background: var(--ui-um-card);box-shadow: 0 0 0 1px var(--ui-um-line), 0 1px 2px rgba(0, 0, 0, 0.06);opacity: 0;pointer-events: none;transition: transform 320ms var(--ui-um-ease), width 320ms var(--ui-um-ease), height 320ms var(--ui-um-ease), opacity 200ms ease}.ui-um__option{position: relative;z-index: 1;min-width: 0;height: 26px;padding: 0 9px;overflow: hidden;border-radius: 8px;font-size: 12px;font-weight: 500;color: var(--ui-um-muted);white-space: nowrap;text-overflow: ellipsis;transition: color 200ms ease}.ui-um__option:hover, .ui-um__option[aria-checked="true"]{color: var(--ui-um-ink)}.ui-um__figure{display: flex;align-items: baseline;justify-content: space-between;gap: 12px;margin-top: 18px}.ui-um__amount{display: flex;flex-wrap: wrap;align-items: baseline;column-gap: 6px;min-width: 0}.ui-um__big{font-size: 28px;font-weight: 600;line-height: 34px;letter-spacing: -0.02em;color: var(--ui-um-ink);font-variant-numeric: tabular-nums}.ui-um__of{font-size: 13px;color: var(--ui-um-muted);font-variant-numeric: tabular-nums;white-space: nowrap}.ui-um__pct{display: inline-flex;flex: none;align-items: center;gap: 6px;font-size: 13px;font-weight: 500;color: var(--ui-um-text);font-variant-numeric: tabular-nums;transition: color 260ms ease}.ui-um__pct[data-state="warn"]{color: var(--ui-um-warn-text)}.ui-um__pct[data-state="limit"]{color: var(--ui-um-ink)}.ui-um__dot{display: inline-block;flex: none;width: 6px;height: 6px;border-radius: 50%;background: var(--ui-um-warn);animation: ui-um-pop 420ms cubic-bezier(0.34, 1.56, 0.64, 1) both}.ui-um[data-state="limit"] .ui-um__pct .ui-um__dot, .ui-um[data-state="limit"] .ui-um__status .ui-um__dot, .ui-um__limit[data-state="limit"] .ui-um__dot{box-shadow: 0 0 0 3px color-mix(in srgb, var(--ui-um-warn) 22%, transparent)}.ui-um__bar{position: relative;margin-top: 10px;padding: 4px 0;border-radius: 6px;cursor: default}.ui-um__track{display: flex;height: 10px;overflow: hidden;border-radius: 5px;background: var(--ui-um-track)}.ui-um__seg{position: relative;flex: none;height: 100%;overflow: hidden;transition: opacity 200ms ease}.ui-um__seg::after{content: "";position: absolute;top: 0;right: 0;bottom: 0;width: 2px;background: var(--ui-um-card)}.ui-um__bar[data-active] .ui-um__seg:not([data-active]){opacity: 0.28}.ui-um__tip{position: absolute;bottom: calc(100% + 6px);z-index: 2;display: grid;gap: 1px;padding: 7px 10px 8px;border: 1px solid var(--ui-um-line);border-radius: 10px;background: var(--ui-um-card);box-shadow: var(--ui-um-tip-shadow);white-space: nowrap;pointer-events: none;opacity: 0;transform: translate(var(--ui-um-tip-x), 4px) scale(0.97);transition: left 260ms var(--ui-um-ease), transform 260ms var(--ui-um-ease), opacity 160ms ease}.ui-um__tip[data-open]{opacity: 1;transform: translate(var(--ui-um-tip-x), 0)}.ui-um__tip-label{display: flex;align-items: center;gap: 7px;font-size: 12px;color: var(--ui-um-muted)}.ui-um__tip-value{font-size: 13px;font-weight: 500;color: var(--ui-um-ink);font-variant-numeric: tabular-nums}.ui-um__tip-value .ui-um__muted{font-weight: 400}.ui-um__legend{display: grid;margin-top: 10px}.ui-um__row{display: grid;grid-template-rows: 1fr;animation: ui-um-grow 380ms var(--ui-um-ease) both;transition: grid-template-rows 320ms var(--ui-um-ease) 80ms, opacity 200ms ease}.ui-um__row[data-leaving]{grid-template-rows: 0fr;opacity: 0;pointer-events: none}.ui-um__item{display: flex;align-items: center;gap: 10px;min-height: 0;height: 30px;margin: 0 -8px;padding: 0 8px;overflow: hidden;border-radius: 8px;transition: background-color 160ms ease, opacity 200ms ease}.ui-um__row[data-leaving] .ui-um__item{background: none}.ui-um__item[data-active]{background: var(--ui-um-hover)}.ui-um__legend[data-active] .ui-um__item:not([data-active]){opacity: 0.45}.ui-um__swatch{flex: none;width: 8px;height: 8px;border-radius: 2.5px}.ui-um__label{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-um-text)}.ui-um__value{color: var(--ui-um-ink);font-weight: 500;font-variant-numeric: tabular-nums}.ui-um__share{width: 40px;text-align: right;color: var(--ui-um-muted);font-variant-numeric: tabular-nums}.ui-um__daily{margin-top: 12px}.ui-um__daily-head{display: flex;justify-content: space-between;gap: 12px;font-size: 12px;color: var(--ui-um-muted);white-space: nowrap}.ui-um__daily-read{font-variant-numeric: tabular-nums;animation: ui-um-in 220ms var(--ui-um-ease) both}.ui-um__spark{display: flex;align-items: stretch;gap: 2px;height: 34px;margin-top: 8px;border-radius: 4px;cursor: default}.ui-um__spark[data-few]{gap: 5px}.ui-um__day{display: flex;flex: 1 1 0;align-items: flex-end;min-width: 0}.ui-um__day > span{width: 100%;border-radius: 2px;background: var(--ui-um-spark);transform-origin: bottom;transition: background-color 160ms ease, opacity 160ms ease}.ui-um__spark[data-regrow] .ui-um__day > span{animation: ui-um-rise 520ms var(--ui-um-ease) both;animation-delay: calc(var(--i) * 18ms)}.ui-um__day[data-future] > span{height: 2px;background: var(--ui-um-track)}.ui-um__spark[data-hover] .ui-um__day:not([data-active]) > span{opacity: 0.6}.ui-um__day[data-active] > span{background: var(--ui-um-accent)}.ui-um__limits{display: grid;grid-template-columns: repeat(var(--n, 3), minmax(0, 1fr));gap: 12px 18px;margin-top: 16px;padding-top: 14px;border-top: 1px solid var(--ui-um-line)}.ui-um__limit{display: grid;grid-template-columns: minmax(0, 1fr);align-content: start;min-width: 0}.ui-um__limit-label{display: flex;align-items: center;gap: 6px;min-width: 0;overflow: hidden;font-size: 12px;color: var(--ui-um-muted);white-space: nowrap}.ui-um__limit-value{overflow: hidden;color: var(--ui-um-ink);font-weight: 500;font-variant-numeric: tabular-nums;white-space: nowrap;text-overflow: ellipsis}.ui-um__limit-value .ui-um__muted{font-weight: 400}.ui-um__thin{position: relative;display: block;height: 4px;margin-top: 7px;overflow: hidden;border-radius: 2px;background: var(--ui-um-track)}.ui-um__thin > span{position: absolute;top: 0;bottom: 0;left: 0;border-radius: inherit;background: var(--ui-um-fill)}.ui-um__thin[data-unlimited]{background: repeating-linear-gradient(-45deg, var(--ui-um-track) 0 3px, transparent 3px 6px)}.ui-um__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 44px;padding: 6px 2px 2px 12px;font-size: 12.5px;color: var(--ui-um-muted)}.ui-um__status{display: flex;align-items: center;gap: 7px;min-width: 0;overflow: hidden;white-space: nowrap;font-variant-numeric: tabular-nums;animation: ui-um-in 260ms var(--ui-um-ease) both}.ui-um__status > :last-child{overflow: hidden;text-overflow: ellipsis}.ui-um__action{display: inline-flex;flex: none;justify-content: center;height: 32px;overflow: hidden;border-radius: 14px;font-size: 13px;font-weight: 500;color: var(--ui-um-ink);background: var(--ui-um-card);box-shadow: 0 0 0 1px var(--ui-um-line), 0 1px 2px rgba(0, 0, 0, 0.04);transition: background-color 280ms ease, color 280ms ease, box-shadow 280ms ease, width 320ms var(--ui-um-ease), transform 140ms ease}.ui-um__action:hover{background: var(--ui-um-hover)}.ui-um__action:active{transform: scale(0.97)}.ui-um__action[data-strong]{background: var(--ui-um-ink);color: var(--ui-um-card);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 6px 14px -6px rgba(0, 0, 0, 0.35);animation: ui-um-nudge 520ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-um__action[data-strong]:hover{background: var(--ui-um-ink);opacity: 0.88}.ui-um__action-inner{display: inline-flex;align-items: center;flex: none;height: 100%;padding: 0 14px;white-space: nowrap}.ui-um__action-text{animation: ui-um-in 260ms var(--ui-um-ease) both}.ui-um__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-um-in{from{opacity: 0;transform: translateY(3px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-um-grow{from{grid-template-rows: 0fr;opacity: 0}to{grid-template-rows: 1fr;opacity: 1}}@keyframes ui-um-rise{from{transform: scaleY(0)}to{transform: none}}@keyframes ui-um-pop{0%{transform: scale(0.3)}60%{transform: scale(1.25)}100%{transform: scale(1)}}@keyframes ui-um-nudge{0%{transform: scale(0.94)}60%{transform: scale(1.04)}100%{transform: scale(1)}}@container (max-width: 400px){.ui-um__inner{padding: 12px 14px 16px}.ui-um__head{flex-direction: column;align-items: stretch;gap: 12px}.ui-um__switch{grid-auto-columns: minmax(0, auto)}.ui-um__option{padding: 0 6px}.ui-um__big{font-size: 26px}.ui-um__limits{grid-template-columns: minmax(0, 1fr);gap: 12px}.ui-um__limit{grid-template-columns: minmax(0, 1fr) auto;column-gap: 12px}.ui-um__limit-value{font-size: 12.5px}.ui-um__thin{grid-column: 1 / -1;margin-top: 6px}}@container (max-width: 300px){.ui-um__of{font-size: 12px}.ui-um__share{width: 34px}}@media (hover: none) and (pointer: coarse){.ui-um__option{height: 34px}.ui-um__item{height: 36px}.ui-um__action{height: 38px;border-radius: 13px}.ui-um__foot{min-height: 50px}.ui-um__bar{padding: 10px 0;margin-top: 4px}}@media (prefers-reduced-motion: reduce){.ui-um *, .ui-um *::before, .ui-um *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-um{--ui-um-tray: #111113;--ui-um-card: #19191b;--ui-um-line: #2a2a2e;--ui-um-ink: #ededed;--ui-um-text: #c8c8cc;--ui-um-muted: #8b8b92;--ui-um-faint: #5c5c63;--ui-um-well: #111113;--ui-um-hover: #232326;--ui-um-track: #2a2a2e;--ui-um-fill: #b4b4ba;--ui-um-spark: #3a3a40;--ui-um-accent: #6d8bff;--ui-um-warn: #f5a524;--ui-um-warn-text: #f5b350;--ui-um-c1: #6d8bff;--ui-um-c2: #4c66c9;--ui-um-c3: #34468a;--ui-um-c4: #6b6b72;--ui-um-c5: #45454b;--ui-um-focus: rgba(255, 255, 255, 0.3);--ui-um-tip-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.5), 0 2px 6px rgba(0, 0, 0, 0.35)}:where(.dark, [data-theme="dark"]) .ui-um__pill{background: #2a2a2e;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-um__tip{background: #2a2a2d;border-color: rgba(255, 255, 255, 0.1)}`;
export { MComponent as t };
