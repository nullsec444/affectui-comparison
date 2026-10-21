// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
const n = t_1();
const r = t();
function IComponent({
  text,
  by = `word`,
  stagger = 40,
  delay = 0,
  duration = 700,
  as: _Component = `p`,
  once = true,
  className
}) {
  let dRef = n.useRef(null);
  let [f, setF] = n.useState(false);
  n.useEffect(() => {
    let dRef_current = dRef.current;
    if (!dRef_current || typeof IntersectionObserver > `u`) {
      return setF(true);
    }
    let t = new IntersectionObserver(e => {
      for (let n of e) {
        if (n.isIntersecting) {
          setF(true);
          if (once) {
            t.disconnect();
          }
        } else if (!once) {
          setF(false);
        }
      }
    }, {
      threshold: 0.3
    });
    t.observe(dRef_current);
    return () => t.disconnect();
  }, [once]);
  let m = 0;
  let h = text.split(/(\s+)/).map((e, n) => {
    if (e === ``) {
      return null;
    }
    if (/^\s+$/.test(e)) {
      return e;
    }
    if (by === `word`) {
      return <span key={n} className={`ui-trv__p`} style={{
        "--ui-trv-i": m++
      }}>{e}</span>;
    }
    return <span key={n} className={`ui-trv__w`}>{Array.from(e).map((e, t) => <span key={t} className={`ui-trv__p`} style={{
        "--ui-trv-i": m++
      }}>{e}</span>)}</span>;
  });
  return <_Component ref={dRef} className={[`ui-trv`, className].filter(Boolean).join(` `)} data-shown={f ? `` : undefined} style={{
    "--ui-trv-stagger": `${stagger}ms`,
    "--ui-trv-delay": `${delay}ms`,
    "--ui-trv-duration": `${duration}ms`
  }} children={[<style href={`ui-text-reveal`} precedence={`default`}>{a}</style>, <span className={`ui-trv__sr`}>{text}</span>, <span aria-hidden={`true`}>{h}</span>]} />;
}
var a = `
.ui-trv {
  --ui-trv-blur: 8px;
  --ui-trv-rise: 0.35em;
  --ui-trv-ease: cubic-bezier(0.2, 0.7, 0.2, 1);
}
.ui-trv__sr {
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
.ui-trv__w {
  display: inline-block;
  white-space: nowrap;
}
.ui-trv__p {
  display: inline-block;
  opacity: 0;
  filter: blur(var(--ui-trv-blur));
  transform: translateY(var(--ui-trv-rise));
  will-change: opacity, filter, transform;
}
.ui-trv[data-shown] .ui-trv__p {
  animation: ui-trv-in var(--ui-trv-duration) var(--ui-trv-ease) both;
  animation-delay: calc(var(--ui-trv-delay) + var(--ui-trv-i) * var(--ui-trv-stagger));
}
@keyframes ui-trv-in {
  from {
    opacity: 0;
    filter: blur(var(--ui-trv-blur));
    transform: translateY(var(--ui-trv-rise));
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: none;
  }
}

/* Reduced motion: the text is simply there */
@media (prefers-reduced-motion: reduce) {
  .ui-trv .ui-trv__p,
  .ui-trv[data-shown] .ui-trv__p {
    opacity: 1;
    filter: none;
    transform: none;
    animation: none;
  }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html>.
   The text takes its color from the parent, so only the blur softens a touch on dark backgrounds */
:where(.dark, [data-theme="dark"]) .ui-trv {
  --ui-trv-blur: 6px;
}
`;
function OComponent() {
  let [e, setE] = n.useState(0);
  return <div className={`text-reveal-demo`}><div key={e} className={`text-reveal-demo__copy`}><IComponent as={`h2`} className={`text-reveal-demo__title`} text={`Words that arrive one at a time.`} /><IComponent className={`text-reveal-demo__body`} text={`Each word fades in out of a soft blur and rises into place, so a sentence reads like it is being spoken.`} delay={260} stagger={22} /></div><button type={`button`} className={`text-reveal-demo__replay`} onClick={() => setE(e => e + 1)}>{`Replay`}</button></div>;
}
export { OComponent as default };
