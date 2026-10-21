// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
const n = t_1();
const r = t();
const i = {
  up: [0, -1],
  down: [0, 1],
  left: [-1, 0],
  right: [1, 0],
  diagonal: [-1, 1]
};
function AComponent({
  children,
  size = 48,
  color,
  speed = 3,
  direction = `diagonal`,
  reveal = true,
  fade = 70,
  className
}) {
  let fRef = n.useRef(null);
  let [p, setP] = n.useState(!reveal);
  n.useEffect(() => {
    if (!reveal) {
      return setP(true);
    }
    let fRef_current = fRef.current;
    if (!fRef_current || typeof IntersectionObserver > `u` || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
      setP(true);
      return;
    }
    let t = new IntersectionObserver(e => {
      if (e.some(e => e.isIntersecting)) {
        setP(true);
        t.disconnect();
      }
    }, {
      threshold: 0.2
    });
    t.observe(fRef_current);
    return () => t.disconnect();
  }, [reveal]);
  let [h, g] = i[direction] ?? i.diagonal;
  let style_1 = {
    "--ui-gb-size": `${size}px`,
    "--ui-gb-dx": `${h * size}px`,
    "--ui-gb-dy": `${g * size}px`,
    "--ui-gb-speed": `${Math.max(speed, 0)}s`,
    "--ui-gb-fade": `${fade}%`,
    ...(color ? {
      "--ui-gb-line": color
    } : {})
  };
  return <div ref={fRef} className={[`ui-gb`, className].filter(Boolean).join(` `)} style={style_1} data-reveal={reveal ? `` : undefined} data-shown={p ? `` : undefined} data-static={speed > 0 ? undefined : ``}><style href={`ui-grid-background`} precedence={`default`}>{o}</style><div className={`ui-gb-grid`} aria-hidden={`true`}><div className={`ui-gb-reveal`}><div className={`ui-gb-lines`} /></div></div><div className={`ui-gb-content`}>{children}</div></div>;
}
var o = `
@property --ui-gb-r {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 0%;
}

.ui-gb {
  --ui-gb-color: rgba(0, 0, 0, 0.07);
  --ui-gb-ease: cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  isolation: isolate;
  overflow: hidden;
}

/* Edge fade: a still radial mask, so the drifting lines dissolve towards the sides */
.ui-gb-grid {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  -webkit-mask-image: radial-gradient(ellipse at center, #000 20%, transparent var(--ui-gb-fade));
  mask-image: radial-gradient(ellipse at center, #000 20%, transparent var(--ui-gb-fade));
}

/* Reveal: a circle from the center grows until it reaches the corners */
.ui-gb-reveal {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.ui-gb[data-reveal] .ui-gb-reveal {
  --ui-gb-r: 0%;
  -webkit-mask-image: radial-gradient(circle farthest-corner at center, #000 var(--ui-gb-r), transparent calc(var(--ui-gb-r) + 12%));
  mask-image: radial-gradient(circle farthest-corner at center, #000 var(--ui-gb-r), transparent calc(var(--ui-gb-r) + 12%));
}
.ui-gb[data-reveal][data-shown] .ui-gb-reveal {
  animation: ui-gb-reveal 1.6s var(--ui-gb-ease) forwards;
}

/* The lines: one cell larger on every side, so a shift by one cell loops seamlessly */
.ui-gb-lines {
  position: absolute;
  inset: calc(var(--ui-gb-size) * -1);
  background-image:
    linear-gradient(to right, var(--ui-gb-line, var(--ui-gb-color)) 1px, transparent 1px),
    linear-gradient(to bottom, var(--ui-gb-line, var(--ui-gb-color)) 1px, transparent 1px);
  background-size: var(--ui-gb-size) var(--ui-gb-size);
  animation: ui-gb-drift var(--ui-gb-speed) linear infinite;
}
.ui-gb[data-static] .ui-gb-lines {
  animation: none;
}

.ui-gb-content {
  position: relative;
  z-index: 1;
  height: 100%;
}

@keyframes ui-gb-drift {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(var(--ui-gb-dx), var(--ui-gb-dy), 0); }
}
@keyframes ui-gb-reveal {
  from { --ui-gb-r: 0%; }
  to { --ui-gb-r: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-gb-lines { animation: none; }
  .ui-gb[data-reveal] .ui-gb-reveal { -webkit-mask-image: none; mask-image: none; animation: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-gb {
  --ui-gb-color: rgba(255, 255, 255, 0.07);
}
`;
function SComponent() {
  return <div className={`grid-background-demo`}><AComponent className={`grid-background-demo__panel`}><div className={`grid-background-demo__inner`}><span className={`grid-background-demo__pill`}>{`New`}</span><h3 className={`grid-background-demo__title`}>{`Build on a steady grid`}</h3><p className={`grid-background-demo__sub`}>{`A quiet backdrop that keeps moving, so your hero never feels static.`}</p></div></AComponent></div>;
}
export { SComponent as default };
