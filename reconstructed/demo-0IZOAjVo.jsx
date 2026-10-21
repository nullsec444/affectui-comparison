// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
const n = t_1();
const r = t();
function i(e) {
  let t = Array.from(e);
  let n = [];
  let r = 0;
  let i = 0;
  for (let e = t.length - 1; e >= 0; e--) {
    let char = t[e];
    if (char >= `0` && char <= `9`) {
      n.unshift({
        key: `d${r++}`,
        digit: char.charCodeAt(0) - 48
      });
    } else {
      n.unshift({
        key: `s${i++}`,
        char
      });
    }
  }
  return n;
}
const a = e => (e % 10 + 10) % 10;
const o = e => 1 - (1 - e) ** 4;
const s = (e, t) => {
  e.style.transform = `translateY(${-a(t) / 11 * 100}%)`;
};
function C1Component({
  value,
  format,
  locale,
  duration = 900,
  delay = 0,
  className
}) {
  let p = JSON.stringify(format ?? {});
  let m = n.useMemo(() => new Intl.NumberFormat(locale, format).format(value), [value, locale, p]);
  let h = n.useMemo(() => i(m), [m]);
  let gRef = n.useRef(null);
  let _RefRef = n.useRef(new Map());
  let vRef = n.useRef(new Map());
  let yRef = n.useRef(0);
  let bRef = n.useRef(true);
  let xRef = n.useRef(false);
  let SRef = n.useRef(new Set());
  let CRef = n.useRef(new Set());
  let [w, setW] = n.useState(false);
  let E = new Set(h.filter(e => `digit` in e).map(e => e.key));
  for (let e of E) {
    if (xRef.current && !CRef.current.has(e)) {
      SRef.current.add(e);
    }
  }
  for (let e of SRef.current) {
    if (!E.has(e)) {
      SRef.current.delete(e);
    }
  }
  CRef.current = E;
  n.useEffect(() => {
    xRef.current = true;
    let gRef_current = gRef.current;
    if (!gRef_current || typeof IntersectionObserver > `u`) {
      setW(true);
      return;
    }
    let t = 0;
    let n = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        n.disconnect();
        t = window.setTimeout(() => setW(true), delay);
      }
    }, {
      threshold: 0.3
    });
    n.observe(gRef_current);
    return () => {
      n.disconnect();
      clearTimeout(t);
    };
  }, []);
  n.useEffect(() => {
    if (!w) {
      return;
    }
    if (value !== yRef.current) {
      bRef.current = value > yRef.current;
    }
    yRef.current = value;
    let matches = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
    let n = new Set();
    for (let e of h) {
      if (!(`digit` in e)) {
        continue;
      }
      n.add(e.key);
      let r = _RefRef.current.get(e.key) ?? {
        pos: 0,
        from: 0,
        to: 0
      };
      let i = bRef.current ? a(e.digit - r.pos) : -a(r.pos - e.digit);
      r.from = r.pos;
      r.to = r.pos + i;
      if (matches) {
        r.pos = r.from = r.to;
      }
      _RefRef.current.set(e.key, r);
    }
    for (let e of _RefRef.current.keys()) {
      if (!n.has(e)) {
        _RefRef.current.delete(e);
      }
    }
    let r = () => {
      for (let [e, t] of _RefRef.current) {
        let n = vRef.current.get(e);
        if (n) {
          s(n, t.pos);
        }
      }
    };
    if (matches) {
      return r();
    }
    let i = 0;
    let c = performance.now();
    let l = e => {
      let t = Math.min(1, (e - c) / duration);
      let n = o(t);
      for (let e of _RefRef.current.values()) {
        e.pos = e.from + (e.to - e.from) * n;
      }
      r();
      if (t < 1) {
        i = requestAnimationFrame(l);
      }
    };
    i = requestAnimationFrame(l);
    return () => cancelAnimationFrame(i);
  }, [h, w, value, duration]);
  return <><style href={`ui-number-ticker`} precedence={`default`}>{l}</style><span ref={gRef} className={[`ui-nt`, className].filter(Boolean).join(` `)} aria-live={`polite`}><span className={`ui-nt__sr`}>{m}</span><span className={`ui-nt__track`} aria-hidden={`true`}>{h.map(e => {
          if (`digit` in e) {
            return <span key={e.key} className={`ui-nt__col`} data-enter={SRef.current.has(e.key) || undefined}><span className={`ui-nt__stack`} ref={t => {
                if (t) {
                  vRef.current.set(e.key, t);
                  s(t, _RefRef.current.get(e.key)?.pos ?? 0);
                  return () => {
                    if (vRef.current.get(e.key) === t) {
                      vRef.current.delete(e.key);
                    }
                  };
                }
              }}>{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((e, key) => <span key={key} className={`ui-nt__cell`}>{e}</span>)}</span></span>;
          }
          return <span key={e.key} className={`ui-nt__static`}>{e.char}</span>;
        })}</span></span></>;
}
var l = `
.ui-nt {
  --ui-nt-lh: 1.15em;
  --ui-nt-ease: cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  display: inline-flex;
  line-height: var(--ui-nt-lh);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.ui-nt__sr {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}
.ui-nt__track {
  display: inline-flex;
  align-items: flex-start;
  height: var(--ui-nt-lh);
  line-height: var(--ui-nt-lh);
}
.ui-nt__col {
  display: inline-block;
  height: var(--ui-nt-lh);
  overflow: hidden;
  /* Soft top and bottom edges while digits pass through */
  -webkit-mask-image: linear-gradient(transparent, #000 14%, #000 86%, transparent);
  mask-image: linear-gradient(transparent, #000 14%, #000 86%, transparent);
}
.ui-nt__col[data-enter] { animation: ui-nt-in 450ms var(--ui-nt-ease) both; }
.ui-nt__stack {
  display: flex;
  flex-direction: column;
  will-change: transform;
}
.ui-nt__cell,
.ui-nt__static {
  display: block;
  height: var(--ui-nt-lh);
  text-align: center;
}
.ui-nt__static { white-space: pre; }

@keyframes ui-nt-in {
  from { opacity: 0; transform: translateY(-35%); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-nt__col[data-enter] { animation: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html>.
   The ticker inherits its color, so nothing needs to change here. */
:where(.dark, [data-theme="dark"]) .ui-nt {
  --ui-nt-lh: 1.15em;
}
`;
const u = {
  style: `currency`,
  currency: `USD`,
  maximumFractionDigits: 0
};
const d = {
  style: `percent`,
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
  signDisplay: `exceptZero`
};
const f = (e, t) => Math.round(e + Math.random() * (t - e));
function PComponent() {
  let [value, setValue] = n.useState(48240);
  let [i, setI] = n.useState(0.124);
  let o = e => {
    setValue(t => Math.max(0, t + e * f(600, 6400)));
    setI(t => Math.round((t + e * f(8, 46) / 1000) * 1000) / 1000);
  };
  return <div className={`number-ticker-demo`}><div className={`ntd-card`}><div className={`ntd-head`}><span className={`ntd-label`}>{`Revenue`}</span><span className={`ntd-period`}>{`This month`}</span></div><div className={`ntd-value`}><C1Component value={value} format={u} locale={`en-US`} /></div><div className={`ntd-meta`}><span className={`ntd-delta`} data-down={i < 0 || undefined}><svg viewBox={`0 0 12 12`} width={`10`} height={`10`} aria-hidden={`true`}><path d={`M6 2.5v7M2.75 5.75 6 2.5l3.25 3.25`} fill={`none`} stroke={`currentColor`} strokeWidth={`1.6`} strokeLinecap={`round`} strokeLinejoin={`round`} /></svg><C1Component value={i} format={d} locale={`en-US`} duration={700} delay={150} /></span><span className={`ntd-vs`}>{`vs last month`}</span></div><div className={`ntd-actions`}><button type={`button`} className={`ntd-btn`} aria-label={`Decrease revenue`} onClick={() => o(-1)}>{`−`}</button><button type={`button`} className={`ntd-btn`} aria-label={`Increase revenue`} onClick={() => o(1)}>{`+`}</button></div></div></div>;
}
export { PComponent as default };
