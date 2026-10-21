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
const c = [`var(--ui-umc-c1)`, `var(--ui-umc-c2)`, `var(--ui-umc-c3)`, `var(--ui-umc-c4)`, `var(--ui-umc-c5)`];
const l = e => 1 - (1 - e) ** 4;
const u = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function useEe(e, t, r) {
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
    let ee = i && !sRef.current ? t : r;
    if (i) {
      sRef.current = true;
    }
    let d = performance.now();
    let f = 0;
    let p = t => {
      let r = Math.min(1, (t - d) / ee);
      let i = l(r);
      let s = {};
      for (let t in e) {
        s[t] = (n[t] ?? 0) + (e[t] - (n[t] ?? 0)) * i;
      }
      oRef.current = s;
      setI(s);
      if (r < 1) {
        f = requestAnimationFrame(p);
      }
    };
    f = requestAnimationFrame(p);
    return () => cancelAnimationFrame(f);
  }, [c]);
  return e => i[e] ?? 0;
}
function d(e, t, n) {
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
function f(e, t) {
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
function P1Component({
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
  let S = n.useId();
  let CRef = n.useRef(null);
  let wRef = n.useRef(null);
  let TRef = n.useRef(null);
  let ERef = n.useRef(null);
  let DRef = n.useRef(null);
  let oeRef = n.useRef(null);
  let seRef = n.useRef(null);
  let [ce, setCe] = n.useState(defaultPeriod ?? periods?.[0]?.id);
  let O = period ?? ce;
  let [ue, setUe] = n.useState(false);
  let [k, setK] = n.useState(null);
  let [pe, setPe] = n.useState(null);
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
    setP(e => f(e.filter(e => !e.leaving), N));
    let e = window.setTimeout(() => setP(e => e.filter(e => !e.leaving)), 460);
    return () => clearTimeout(e);
  }, [ve]);
  n.useEffect(() => {
    let CRef_current = CRef.current;
    if (!CRef_current || typeof IntersectionObserver > `u`) {
      setUe(true);
      return;
    }
    let t = new IntersectionObserver(e => {
      if (e.some(e => e.isIntersecting)) {
        setUe(true);
        t.disconnect();
      }
    }, {
      threshold: 0.2
    });
    t.observe(CRef_current);
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
  if (!ue) {
    for (let e in B) {
      B[e] = 0;
    }
  }
  let V = useEe(B, 1200, 650);
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
  let W = P.find(e => e.label === k && !e.leaving);
  let G = P.find(e => e.label === pe);
  let K = U.find(e => e.label === pe);
  let be = K ? Math.min(100, Math.max(0, K.left + K.width / 2)) : 50;
  let q = e => {
    setK(e);
    if (e) {
      setPe(e);
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
    let n = t.findIndex(e => e.label === k);
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
    if (e !== O) {
      if (period === undefined) {
        setCe(e);
      }
      onPeriodChange?.(e);
      setK(null);
      setA(null);
    }
  };
  let ke = e => {
    if (!periods?.length) {
      return;
    }
    let t = periods.findIndex(e => e.id === O);
    let n = -1;
    if (e.key === `ArrowRight` || e.key === `ArrowDown`) {
      n = (t + 1) % periods.length;
    } else if (e.key === `ArrowLeft` || e.key === `ArrowUp`) {
      n = (t - 1 + periods.length) % periods.length;
    }
    if (!(n < 0)) {
      e.preventDefault();
      Oe(periods[n].id);
      ERef.current?.querySelectorAll(`[role=radio]`)[n]?.focus();
    }
  };
  n.useLayoutEffect(() => {
    d(ERef.current, DRef.current, `[aria-checked="true"]`);
  });
  n.useLayoutEffect(() => {
    let ERef_current = ERef.current;
    if (!ERef_current) {
      return;
    }
    let t = new ResizeObserver(() => d(ERef_current, DRef.current, `[aria-checked="true"]`));
    t.observe(ERef_current);
    return () => t.disconnect();
  }, []);
  n.useLayoutEffect(() => {
    let wRef_current = wRef.current;
    let TRef_current = TRef.current;
    if (!wRef_current || !TRef_current) {
      return;
    }
    let n = () => wRef_current.style.height = `${TRef_current.offsetHeight}px`;
    n();
    let r = new ResizeObserver(n);
    r.observe(TRef_current);
    return () => r.disconnect();
  }, []);
  n.useLayoutEffect(() => {
    let oeRef_current = oeRef.current;
    let seRef_current = seRef.current;
    if (!oeRef_current || !seRef_current) {
      return;
    }
    let n = () => oeRef_current.style.width = `${seRef_current.offsetWidth}px`;
    n();
    let r = new ResizeObserver(n);
    r.observe(seRef_current);
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
  return <section ref={CRef} className={[`ui-umc`, className].filter(Boolean).join(` `)} aria-labelledby={`${S}-title`} data-state={z}><style href={`ui-usage-meter-clean`} precedence={`default`}>{te}</style><div ref={wRef} className={`ui-umc__card`}><div ref={TRef} className={`ui-umc__inner`}><header className={`ui-umc__head`}><div className={`ui-umc__heading`}><h3 id={`${S}-title`} className={`ui-umc__title`}>{title}</h3>{(plan || Q) && <p className={`ui-umc__sub`}>{plan}{plan && Q && <span className={`ui-umc__sep`}>{`·`}</span>}{Q && <time dateTime={Q.toISOString()} title={`Resets on ${o.format(Q)}`}>{s(Q)}</time>}</p>}</div>{periods && periods.length > 1 && <div ref={ERef} className={`ui-umc__switch`} role={`radiogroup`} aria-label={`Period`} onKeyDown={ke}><span ref={DRef} className={`ui-umc__pill`} aria-hidden={`true`} />{periods.map(e => <button key={e.id} type={`button`} role={`radio`} aria-checked={e.id === O} tabIndex={e.id === O ? 0 : -1} className={`ui-umc__option`} onClick={() => Oe(e.id)}>{e.label}</button>)}</div>}</header><div className={`ui-umc__figure`}><p className={`ui-umc__amount`}><span className={`ui-umc__big`}>{i(V(`used`))}</span><span className={`ui-umc__of`}>{`of `}{a(i(total), unit)}</span></p><span className={`ui-umc__pct`} data-state={z}>{$ && <span className={`ui-umc__dot`} aria-hidden={`true`} />}{i(Math.min(je, 999))}{`%`}</span></div><div className={`ui-umc__bar`} tabIndex={0} role={`group`} aria-label={`${i(used_1)} of ${i(total)} ${unit} used – arrow keys read each category`} data-active={W ? `` : undefined} onPointerMove={e => e.pointerType === `mouse` && q(xe(e))} onPointerLeave={e => e.pointerType === `mouse` && q(null)} onPointerUp={e => {
          if (e.pointerType === `mouse`) {
            return;
          }
          let t = xe(e);
          q(t === k ? null : t);
        }} onKeyDown={Se} onBlur={() => q(null)}><div className={`ui-umc__track`} role={`meter`} aria-valuemin={0} aria-valuemax={total} aria-valuenow={Math.min(used_1, total)} aria-valuetext={`${i(used_1)} of ${i(total)} ${unit}`}>{U.map(e => <span key={e.label} className={`ui-umc__seg`} data-active={e.label === k || undefined} style={{
              width: `${e.width}%`,
              background: e.color
            }} />)}</div><div className={`ui-umc__tip`} data-open={W ? `` : undefined} style={{
            left: `${be}%`,
            "--ui-umc-tip-x": `${-be}%`
          }} aria-live={`polite`}>{G && <><span className={`ui-umc__tip-label`}><span className={`ui-umc__swatch`} style={{
                  background: G.color
                }} />{G.label}</span><span className={`ui-umc__tip-value`}>{a(i(G.value), unit)}<span className={`ui-umc__muted`}>{` · `}{i(used_1 ? G.value / used_1 * 100 : 0)}{`%`}</span></span></>}</div></div><ul className={`ui-umc__legend`} aria-label={`By category`} data-active={W ? `` : undefined}>{P.map(e => {
            let t = V(`r:${e.label}`);
            return <li key={e.label} className={`ui-umc__row`} data-leaving={e.leaving || undefined}><div className={`ui-umc__item`} data-active={e.label === k || undefined} onPointerEnter={t => t.pointerType === `mouse` && !e.leaving && q(e.label)} onPointerLeave={e => e.pointerType === `mouse` && q(null)} onPointerUp={t => t.pointerType !== `mouse` && !e.leaving && q(e.label === k ? null : e.label)}><span className={`ui-umc__swatch`} style={{
                  background: e.color
                }} /><span className={`ui-umc__label`}>{e.label}</span><span className={`ui-umc__value`}>{i(t)}</span><span className={`ui-umc__share`}>{i(V(`used`) ? t / V(`used`) * 100 : 0)}{`%`}</span></div></li>;
          })}</ul>{J.length > 0 && <div className={`ui-umc__daily`}><div className={`ui-umc__daily-head`}><span>{`Per day`}</span><span key={Z ? `d${A}` : `avg`} className={`ui-umc__daily-read`}>{Z ? <>{Z.label}{` · `}<b>{Z.value === null ? `–` : a(i(Z.value), unit)}</b></> : <>{`Avg `}<b>{i(X)}</b>{` / day`}</>}</span></div><div key={J.length} className={`ui-umc__spark`} tabIndex={0} role={`img`} aria-label={`${title} per day, ${i(X)} ${unit} on average – arrow keys read each day`} data-hover={A !== null || undefined} data-regrow={DeRef.current || undefined} data-few={J.length <= 14 || undefined} onPointerMove={e => setA(we(e))} onPointerDown={e => setA(we(e))} onPointerLeave={e => e.pointerType === `mouse` && setA(null)} onKeyDown={Te} onBlur={() => setA(null)}>{J.map((e, t) => <span key={t} className={`ui-umc__day`} data-future={e.value === null || undefined} data-active={t === A || undefined} style={{
              "--i": t
            }}><span style={{
                height: e.value === null ? undefined : `${Math.max(4, V(`d:${t}`) / Ce * 100)}%`
              }} /></span>)}</div></div>}{limits.length > 0 && <ul className={`ui-umc__limits`} aria-label={`Plan limits`} style={{
          "--n": Math.min(3, limits.length)
        }}>{limits.map(e => {
            let t = e.total == null || !isFinite(e.total);
            let n = e.decimals ?? (Number.isInteger(e.used) && (t || Number.isInteger(e.total)) ? 0 : 1);
            let o = t ? 0 : e.used / Math.max(e.total, 1e-9);
            let s = t ? `ok` : o >= 1 ? `limit` : o >= warnAt ? `warn` : `ok`;
            let c = V(`l:${e.label}`);
            let l = t ? `∞` : i(e.total, Number.isInteger(e.total) ? 0 : n);
            return <li key={e.label} className={`ui-umc__limit`} data-state={s}><span className={`ui-umc__limit-label`}>{e.label}{s !== `ok` && <span className={`ui-umc__dot`} aria-label={s === `limit` ? `At the limit` : `Close to the limit`} />}</span><span className={`ui-umc__limit-value`}>{i(c, n)}<span className={`ui-umc__muted`}>{` of `}{a(l, t ? undefined : e.unit)}</span></span>{t ? <span className={`ui-umc__thin`} data-unlimited={``} aria-label={`${e.label}: ${i(e.used, n)}, unlimited`} role={`img`} /> : <span className={`ui-umc__thin`} role={`meter`} aria-label={e.label} aria-valuemin={0} aria-valuemax={e.total} aria-valuenow={Math.min(e.used, e.total)} aria-valuetext={`${i(e.used, n)} of ${a(l, e.unit)}`}><span style={{
                  width: `${Math.min(100, c / Math.max(e.total, 1e-9) * 100)}%`
                }} /></span>}</li>;
          })}</ul>}</div></div><div className={`ui-umc__foot`}><span key={z} className={`ui-umc__status`}>{$ && <span className={`ui-umc__dot`} aria-hidden={`true`} />}{z === `limit` ? <><b>{`Limit reached`}</b>{used_1 > total && <span className={`ui-umc__muted`}>{a(i(used_1 - total), `over`)}</span>}</> : <>{z === `warn` && <b>{`Running low`}</b>}<span className={z === `warn` ? `ui-umc__muted` : undefined}>{a(i(V(`left`)), unit)}{` left`}</span></>}</span><button ref={oeRef} type={`button`} className={`ui-umc__action`} data-strong={$ || undefined} onClick={() => onUpgrade?.(z)}><span ref={seRef} className={`ui-umc__action-inner`}><span key={$ ? `top-up` : `upgrade`} className={`ui-umc__action-text`}>{$ ? topUpLabel : upgradeLabel}</span></span></button></div><span className={`ui-umc__live`} aria-live={`polite`}>{he}</span></section>;
}
var te = `.ui-umc{--ui-umc-card: #ffffff;--ui-umc-strong: #000000;--ui-umc-ink: rgba(0, 0, 0, 0.88);--ui-umc-text: rgba(0, 0, 0, 0.61);--ui-umc-muted: rgba(0, 0, 0, 0.45);--ui-umc-faint: rgba(0, 0, 0, 0.27);--ui-umc-line: rgba(0, 0, 0, 0.06);--ui-umc-wash: rgba(0, 0, 0, 0.03);--ui-umc-fill: rgba(0, 0, 0, 0.06);--ui-umc-track: rgba(0, 0, 0, 0.06);--ui-umc-spark: rgba(0, 0, 0, 0.12);--ui-umc-accent: rgba(0, 96, 226, 0.765);--ui-umc-warn: #e8a20c;--ui-umc-warn-text: #b07800;--ui-umc-warn-bg: rgba(232, 162, 12, 0.12);--ui-umc-full: #e5484d;--ui-umc-full-text: #d63f44;--ui-umc-full-bg: rgba(229, 72, 77, 0.08);--ui-umc-c1: rgba(0, 96, 226, 0.765);--ui-umc-c2: rgba(0, 96, 226, 0.5);--ui-umc-c3: rgba(0, 96, 226, 0.3);--ui-umc-c4: rgba(0, 96, 226, 0.16);--ui-umc-c5: rgba(0, 0, 0, 0.14);--ui-umc-dark: rgba(0, 0, 0, 0.88);--ui-umc-on-dark: #fcfcfc;--ui-umc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-umc-tip-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 8px 20px -8px rgba(0, 0, 0, 0.14);--ui-umc-focus: rgba(0, 96, 226, 0.35);--ui-umc-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;container-type: inline-size;position: relative;display: grid;width: 100%;max-width: 460px;border-radius: 10px;background: var(--ui-umc-card);box-shadow: var(--ui-umc-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-umc-ink);text-align: left;-webkit-font-smoothing: antialiased}.ui-umc *, .ui-umc *::before, .ui-umc *::after{box-sizing: border-box}:where(.ui-umc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-umc) :is(h3, p, ul){margin: 0;padding: 0}:where(.ui-umc) ul{list-style: none}.ui-umc :is(button, [tabindex="0"]):focus-visible{outline: 2px solid var(--ui-umc-focus);outline-offset: 1px}.ui-umc b{font-weight: 500;color: var(--ui-umc-ink)}.ui-umc__muted{color: var(--ui-umc-muted)}.ui-umc__card{overflow: hidden;border-radius: 10px 10px 0 0;transition: height 360ms var(--ui-umc-ease)}.ui-umc__inner{display: flow-root;padding: 16px 16px 16px}.ui-umc__head{display: flex;align-items: flex-start;justify-content: space-between;gap: 12px}.ui-umc__heading{min-width: 0}.ui-umc__title{overflow: hidden;font-size: 15px;font-weight: 500;line-height: 24px;color: var(--ui-umc-strong);white-space: nowrap;text-overflow: ellipsis}.ui-umc__sub{overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-umc-muted);white-space: nowrap;text-overflow: ellipsis}.ui-umc__sep{margin: 0 6px;color: var(--ui-umc-faint)}.ui-umc__switch{position: relative;display: grid;grid-auto-columns: auto;grid-auto-flow: column;gap: 8px;flex: none}.ui-umc__pill{position: absolute;top: 0;left: 0;border-radius: 6px;background: var(--ui-umc-fill);opacity: 0;pointer-events: none;transition: transform 320ms var(--ui-umc-ease), width 320ms var(--ui-umc-ease), height 320ms var(--ui-umc-ease), opacity 200ms ease}.ui-umc__option{position: relative;z-index: 1;min-width: 0;height: 28px;padding: 4px 10px;overflow: hidden;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-umc-line);font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-umc-text);white-space: nowrap;text-overflow: ellipsis;transition: color 200ms ease, background-color 120ms ease}.ui-umc__option[aria-checked="true"]{color: var(--ui-umc-ink)}@media (hover: hover){.ui-umc__option[aria-checked="false"]:hover{background: var(--ui-umc-wash);color: var(--ui-umc-ink)}}.ui-umc__figure{display: flex;align-items: center;justify-content: space-between;gap: 12px;margin-top: 14px}.ui-umc__amount{display: flex;flex-wrap: wrap;align-items: baseline;column-gap: 8px;min-width: 0}.ui-umc__big{font-size: 24px;font-weight: 500;line-height: 32px;letter-spacing: -0.24px;color: var(--ui-umc-strong);font-variant-numeric: tabular-nums}.ui-umc__of{font-size: 12px;line-height: 16px;color: var(--ui-umc-muted);font-variant-numeric: tabular-nums;white-space: nowrap}.ui-umc__pct{display: inline-flex;flex: none;align-items: center;gap: 5px;height: 20px;padding: 0 6px;border-radius: 5px;background: var(--ui-umc-fill);font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-umc-text);font-variant-numeric: tabular-nums;transition: color 260ms ease, background-color 260ms ease}.ui-umc__pct[data-state="warn"]{background: var(--ui-umc-warn-bg);color: var(--ui-umc-warn-text)}.ui-umc__pct[data-state="limit"]{background: var(--ui-umc-full-bg);color: var(--ui-umc-full-text)}.ui-umc__dot{display: inline-block;flex: none;width: 6px;height: 6px;border-radius: 50%;background: var(--ui-umc-warn);animation: ui-umc-pop 420ms cubic-bezier(0.34, 1.56, 0.64, 1) both}.ui-umc[data-state="limit"] :is(.ui-umc__pct, .ui-umc__status) .ui-umc__dot, .ui-umc__limit[data-state="limit"] .ui-umc__dot{background: var(--ui-umc-full)}.ui-umc__bar{position: relative;margin-top: 10px;padding: 4px 0;border-radius: 4px;cursor: default}.ui-umc__track{display: flex;height: 8px;overflow: hidden;border-radius: 4px;background: var(--ui-umc-track)}.ui-umc__seg{position: relative;flex: none;height: 100%;overflow: hidden;transition: opacity 200ms ease}.ui-umc__seg::after{content: "";position: absolute;top: 0;right: 0;bottom: 0;width: 2px;background: var(--ui-umc-card)}.ui-umc__bar[data-active] .ui-umc__seg:not([data-active]){opacity: 0.3}.ui-umc__tip{position: absolute;bottom: calc(100% + 6px);z-index: 2;display: grid;gap: 2px;padding: 6px 10px 7px;border-radius: 8px;background: var(--ui-umc-card);box-shadow: var(--ui-umc-tip-shadow);white-space: nowrap;pointer-events: none;opacity: 0;transform: translate(var(--ui-umc-tip-x), 4px) scale(0.97);transition: left 260ms var(--ui-umc-ease), transform 260ms var(--ui-umc-ease), opacity 160ms ease}.ui-umc__tip[data-open]{opacity: 1;transform: translate(var(--ui-umc-tip-x), 0)}.ui-umc__tip-label{display: flex;align-items: center;gap: 6px;font-size: 12px;line-height: 16px;color: var(--ui-umc-muted)}.ui-umc__tip-value{font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-umc-ink);font-variant-numeric: tabular-nums}.ui-umc__tip-value .ui-umc__muted{font-weight: 400}.ui-umc__legend{display: grid;margin-top: 10px}.ui-umc__row{display: grid;grid-template-rows: 1fr;animation: ui-umc-grow 380ms var(--ui-umc-ease) both;transition: grid-template-rows 320ms var(--ui-umc-ease) 80ms, opacity 200ms ease}.ui-umc__row[data-leaving]{grid-template-rows: 0fr;opacity: 0;pointer-events: none}.ui-umc__item{display: flex;align-items: center;gap: 10px;min-height: 0;height: 32px;margin: 0 -8px;padding: 0 8px;overflow: hidden;border-radius: 6px;transition: background-color 120ms ease-out, opacity 200ms ease}.ui-umc__row[data-leaving] .ui-umc__item{background: none}.ui-umc__item[data-active]{background: var(--ui-umc-wash)}.ui-umc__legend[data-active] .ui-umc__item:not([data-active]){opacity: 0.45}.ui-umc__swatch{flex: none;width: 8px;height: 8px;border-radius: 2px}.ui-umc__label{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-umc-ink)}.ui-umc__value{color: var(--ui-umc-ink);font-weight: 500;font-variant-numeric: tabular-nums}.ui-umc__share{width: 40px;font-size: 12px;line-height: 16px;text-align: right;color: var(--ui-umc-muted);font-variant-numeric: tabular-nums}.ui-umc__daily{margin-top: 14px}.ui-umc__daily-head{display: flex;align-items: center;justify-content: space-between;gap: 12px;font-size: 12px;line-height: 16px;color: var(--ui-umc-muted);white-space: nowrap}.ui-umc__daily-head > :first-child{font-size: 10px;font-weight: 500;line-height: 16px;letter-spacing: 0.5px;text-transform: uppercase}.ui-umc__daily-read{font-variant-numeric: tabular-nums;animation: ui-umc-in 220ms var(--ui-umc-ease) both}.ui-umc__spark{display: flex;align-items: stretch;gap: 2px;height: 32px;margin-top: 8px;border-radius: 4px;cursor: default}.ui-umc__spark[data-few]{gap: 5px}.ui-umc__day{display: flex;flex: 1 1 0;align-items: flex-end;min-width: 0}.ui-umc__day > span{width: 100%;border-radius: 2px;background: var(--ui-umc-spark);transform-origin: bottom;transition: background-color 160ms ease, opacity 160ms ease}.ui-umc__spark[data-regrow] .ui-umc__day > span{animation: ui-umc-rise 520ms var(--ui-umc-ease) both;animation-delay: calc(var(--i) * 18ms)}.ui-umc__day[data-future] > span{height: 2px;background: var(--ui-umc-track)}.ui-umc__spark[data-hover] .ui-umc__day:not([data-active]) > span{opacity: 0.6}.ui-umc__day[data-active] > span{background: var(--ui-umc-accent)}.ui-umc__limits{display: grid;grid-template-columns: repeat(var(--n, 3), minmax(0, 1fr));gap: 12px 18px;margin-top: 16px;padding-top: 14px;border-top: 0.5px solid var(--ui-umc-line)}.ui-umc__limit{display: grid;grid-template-columns: minmax(0, 1fr);align-content: start;min-width: 0}.ui-umc__limit-label{display: flex;align-items: center;gap: 6px;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-umc-muted);white-space: nowrap}.ui-umc__limit-value{overflow: hidden;color: var(--ui-umc-ink);font-weight: 500;font-variant-numeric: tabular-nums;white-space: nowrap;text-overflow: ellipsis}.ui-umc__limit-value .ui-umc__muted{font-weight: 400}.ui-umc__thin{position: relative;display: block;height: 4px;margin-top: 6px;overflow: hidden;border-radius: 2px;background: var(--ui-umc-track)}.ui-umc__thin > span{position: absolute;top: 0;bottom: 0;left: 0;border-radius: inherit;background: var(--ui-umc-accent);transition: background-color 260ms ease}.ui-umc__limit[data-state="warn"] .ui-umc__thin > span{background: var(--ui-umc-warn)}.ui-umc__limit[data-state="limit"] .ui-umc__thin > span{background: var(--ui-umc-full)}.ui-umc__thin[data-unlimited]{background: repeating-linear-gradient(-45deg, var(--ui-umc-track) 0 3px, transparent 3px 6px)}.ui-umc__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 44px;padding: 0 8px 0 16px;border-top: 0.5px solid var(--ui-umc-line);font-size: 12px;line-height: 16px;color: var(--ui-umc-muted)}.ui-umc__status{display: flex;align-items: center;gap: 6px;min-width: 0;overflow: hidden;white-space: nowrap;font-variant-numeric: tabular-nums;animation: ui-umc-in 260ms var(--ui-umc-ease) both}.ui-umc__status > :last-child{overflow: hidden;text-overflow: ellipsis}.ui-umc__action{display: inline-flex;flex: none;justify-content: center;height: 28px;overflow: hidden;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-umc-strong);background: var(--ui-umc-card);box-shadow: var(--ui-umc-shadow);transition: background-color 280ms ease, color 280ms ease, box-shadow 280ms ease, width 320ms var(--ui-umc-ease), transform 140ms ease}.ui-umc__action:hover{background: #fafafa}.ui-umc__action:active{transform: scale(0.97)}.ui-umc__action[data-strong]{background: var(--ui-umc-dark);color: var(--ui-umc-on-dark);box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);animation: ui-umc-nudge 520ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-umc__action[data-strong]:hover{background: var(--ui-umc-dark);opacity: 0.88}.ui-umc__action-inner{display: inline-flex;align-items: center;flex: none;height: 100%;padding: 0 10px;white-space: nowrap}.ui-umc__action-text{animation: ui-umc-in 260ms var(--ui-umc-ease) both}.ui-umc__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-umc-in{from{opacity: 0;transform: translateY(3px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-umc-grow{from{grid-template-rows: 0fr;opacity: 0}to{grid-template-rows: 1fr;opacity: 1}}@keyframes ui-umc-rise{from{transform: scaleY(0)}to{transform: none}}@keyframes ui-umc-pop{0%{transform: scale(0.3)}60%{transform: scale(1.25)}100%{transform: scale(1)}}@keyframes ui-umc-nudge{0%{transform: scale(0.94)}60%{transform: scale(1.04)}100%{transform: scale(1)}}@container (max-width: 400px){.ui-umc__inner{padding: 14px 14px 14px}.ui-umc__foot{padding: 0 8px 0 14px}.ui-umc__head{flex-direction: column;align-items: stretch;gap: 12px}.ui-umc__switch{grid-auto-columns: minmax(0, auto);gap: 4px}.ui-umc__option{padding: 4px 8px}.ui-umc__limits{grid-template-columns: minmax(0, 1fr);gap: 12px}.ui-umc__limit{grid-template-columns: minmax(0, 1fr) auto;column-gap: 12px}.ui-umc__limit-value{font-size: 12px;line-height: 16px}.ui-umc__thin{grid-column: 1 / -1;margin-top: 6px}}@container (max-width: 300px){.ui-umc__option{padding: 4px 6px}.ui-umc__share{width: 34px}}@media (hover: none) and (pointer: coarse){.ui-umc__option{height: 34px;padding: 7px 10px}.ui-umc__item{height: 36px}.ui-umc__action{height: 36px}.ui-umc__foot{min-height: 52px}.ui-umc__bar{padding: 10px 0;margin-top: 4px}}@media (prefers-reduced-motion: reduce){.ui-umc *, .ui-umc *::before, .ui-umc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-umc{--ui-umc-card: #1c1c1e;--ui-umc-strong: #ffffff;--ui-umc-ink: rgba(255, 255, 255, 0.9);--ui-umc-text: rgba(255, 255, 255, 0.62);--ui-umc-muted: rgba(255, 255, 255, 0.46);--ui-umc-faint: rgba(255, 255, 255, 0.3);--ui-umc-line: rgba(255, 255, 255, 0.08);--ui-umc-wash: rgba(255, 255, 255, 0.04);--ui-umc-fill: rgba(255, 255, 255, 0.08);--ui-umc-track: rgba(255, 255, 255, 0.08);--ui-umc-spark: rgba(255, 255, 255, 0.16);--ui-umc-accent: #4d8dff;--ui-umc-warn: #f0b43a;--ui-umc-warn-text: #f0b43a;--ui-umc-warn-bg: rgba(232, 162, 12, 0.16);--ui-umc-full: #ff6b70;--ui-umc-full-text: #ff8a8e;--ui-umc-full-bg: rgba(229, 72, 77, 0.14);--ui-umc-c1: #4d8dff;--ui-umc-c2: rgba(77, 141, 255, 0.62);--ui-umc-c3: rgba(77, 141, 255, 0.4);--ui-umc-c4: rgba(77, 141, 255, 0.22);--ui-umc-c5: rgba(255, 255, 255, 0.16);--ui-umc-dark: rgba(255, 255, 255, 0.9);--ui-umc-on-dark: #111113;--ui-umc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-umc-tip-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 8px 20px -8px rgba(0, 0, 0, 0.6);--ui-umc-focus: rgba(77, 141, 255, 0.5)}:where(.dark, [data-theme="dark"]) .ui-umc__action:hover{background: #232326}:where(.dark, [data-theme="dark"]) .ui-umc__tip{background: #2a2a2d}`;
const periods = [{
  id: `month`,
  label: `This month`
}, {
  id: `last`,
  label: `Last month`
}, {
  id: `7d`,
  label: `7 days`
}];
const ne = new Intl.DateTimeFormat(`en-US`, {
  month: `short`,
  day: `numeric`
});
const h = (e, t) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
function g(e, length_1, n, r, length = length_1) {
  let a = r;
  let o = () => ((a = a * 16807 % 2147483647) - 1) / 2147483646;
  let s = Array.from({
    length: length_1
  }, (n, r) => {
    let i = h(e, r).getDay();
    return (i === 0 || i === 6 ? 0.45 : 1) * (0.7 + o() * 0.6) * (1 + r / length_1 / 3);
  });
  let c = s.reduce((acc, item) => acc + item, 0);
  let l = s.map(e => Math.round(e / c * n));
  l[l.length - 1] += n - l.reduce((acc, item) => acc + item, 0);
  return Array.from({
    length
  }, (n, r) => ({
    label: ne.format(h(e, r)),
    value: r < length_1 ? l[r] : null
  }));
}
const _ = {
  month: {
    used: [{
      label: `Chat`,
      value: 3980
    }, {
      label: `Search`,
      value: 1640
    }, {
      label: `Image`,
      value: 1120
    }, {
      label: `API`,
      value: 680
    }],
    limits: [{
      label: `Seats`,
      used: 8,
      total: 10
    }, {
      label: `Storage`,
      used: 3.2,
      total: 5,
      unit: `GB`
    }, {
      label: `Projects`,
      used: 12,
      total: null
    }],
    days: e => g(h(e, -21), 22, 7420, 11, 30)
  },
  last: {
    used: [{
      label: `Chat`,
      value: 5210
    }, {
      label: `Search`,
      value: 2140
    }, {
      label: `Image`,
      value: 1690
    }, {
      label: `API`,
      value: 960
    }],
    limits: [{
      label: `Seats`,
      used: 10,
      total: 10
    }, {
      label: `Storage`,
      used: 2.9,
      total: 5,
      unit: `GB`
    }, {
      label: `Projects`,
      used: 11,
      total: null
    }],
    days: e => g(h(e, -51), 30, 10000, 29)
  },
  "7d": {
    used: [{
      label: `Chat`,
      value: 1260
    }, {
      label: `Search`,
      value: 540
    }, {
      label: `API`,
      value: 340
    }],
    limits: [{
      label: `Seats`,
      used: 8,
      total: 10
    }, {
      label: `Storage`,
      used: 3.2,
      total: 5,
      unit: `GB`
    }, {
      label: `Projects`,
      used: 12,
      total: null
    }],
    days: e => g(h(e, -6), 7, 2140, 5)
  }
};
function VComponent() {
  let [e, setE] = n.useState(`month`);
  let iRef = n.useRef(false);
  let a = n.useMemo(() => {
    let e = new Date();
    return new Date(e.getFullYear(), e.getMonth(), e.getDate());
  }, []);
  let daily = n.useMemo(() => _[e].days(a), [e, a]);
  n.useEffect(() => {
    let e = [`last`, `7d`, `month`].map((e, n) => window.setTimeout(() => !iRef.current && setE(e), 3600 + n * 3200));
    return () => e.forEach(clearTimeout);
  }, []);
  return <div className={`usage-demo`} onPointerDown={() => iRef.current = true} onKeyDown={() => iRef.current = true}><P1Component title={`Acme AI`} plan={`Pro plan`} total={10000} used={_[e].used} limits={_[e].limits} daily={daily} periods={periods} period={e} onPeriodChange={setE} resetAt={h(a, 9)} onUpgrade={() => {}} /></div>;
}
export { VComponent as default };
