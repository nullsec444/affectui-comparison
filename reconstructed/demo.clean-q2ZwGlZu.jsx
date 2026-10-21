// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
const n = t_1();
const r = t();
function I1Component({
  name,
  summary,
  icon,
  status,
  args,
  result,
  error,
  startedAt,
  duration,
  defaultOpen = false,
  open,
  onOpenChange,
  openOnError = true,
  onRetry,
  maxCodeHeight = 220,
  className
}) {
  let E = n.useId();
  let [D, setD] = n.useState(defaultOpen);
  let k = open ?? D;
  let A = e => {
    if (open === undefined) {
      setD(e);
    }
    onOpenChange?.(e);
  };
  let [j, setJ] = n.useState(status);
  let [N, setN] = n.useState(false);
  if (status !== j) {
    setJ(status);
    if (open === undefined && openOnError) {
      if (status === `error` && !D) {
        setD(true);
        setN(true);
      } else if (j === `error` && N) {
        setD(false);
        setN(false);
      }
    }
  }
  let F = useF(status === `running`, startedAt, false);
  let I = status === `running` ? F ?? 0 : duration ?? F;
  let L = status === `running` ? `${name} running` : status === `success` ? `${name} finished` : `${name} failed${error ? `: ${error}` : ``}`;
  return <div className={[`ui-tcc`, className].filter(Boolean).join(` `)} data-status={status} data-open={k || undefined}><style href={`ui-tool-call-clean`} precedence={`default`}>{v}</style><span className={`ui-tcc-sr`} role={`status`} aria-live={`polite`}>{L}</span><button type={`button`} className={`ui-tcc__head`} aria-expanded={k} aria-controls={`${E}-body`} onClick={() => {
      setN(false);
      A(!k);
    }}><span className={`ui-tcc__icon`} aria-hidden={`true`}>{icon ?? <D1Component />}</span><span className={`ui-tcc__main`}><code className={`ui-tcc__name`}>{name}</code>{summary != null && <span className={`ui-tcc__summary`} title={typeof summary == `string` ? summary : undefined}>{summary}</span>}</span><span key={status} className={`ui-tcc__status`}>{status === `running` && <C1Component />}{status === `success` && <svg className={`ui-tcc__ok`} viewBox={`0 0 16 16`} aria-hidden={`true`}><circle cx={`8`} cy={`8`} r={`7`} /><path d={`M5.1 8.2 7.1 10.1 10.9 6`} pathLength={1} /></svg>}{status === `error` && <L1Component />}<span className={`ui-tcc__time`}>{status === `error` ? `Failed` : I == null ? null : p(I, status === `running`)}</span></span><UComponent /></button><div className={`ui-tcc__body`} id={`${E}-body`} inert={!k}><div className={`ui-tcc__clip`}><div className={`ui-tcc__sections`}>{status === `error` && <div className={`ui-tcc__error`}><L1Component /><p className={`ui-tcc__error-text`}>{error ?? `The tool call failed.`}</p>{onRetry && <button type={`button`} className={`ui-tcc__retry`} onClick={onRetry}><svg viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M2.75 8a5.25 5.25 0 1 0 1.6-3.77`} /><path d={`M2.5 2.5v2.75h2.75`} /></svg>{`Retry`}</button>}</div>}{args !== undefined && <O1Component label={`Arguments`} value={args} cap={maxCodeHeight} />}{result === undefined ? status === `running` ? <div className={`ui-tcc__section`}><div className={`ui-tcc__section-head`}><span className={`ui-tcc__label`}>{`Result`}</span></div><p className={`ui-tcc__pending`}>{`Waiting for result…`}</p></div> : null : <O1Component label={`Result`} value={result} cap={maxCodeHeight} />}{args === undefined && result === undefined && status === `success` && <p className={`ui-tcc__pending`}>{`No arguments or result.`}</p>}</div></div></div></div>;
}
function A1Component({
  children,
  label,
  runningLabel = `Using tools…`,
  duration,
  defaultOpen = false,
  open,
  onOpenChange,
  className
}) {
  let m = n.useId();
  let [h, setH] = n.useState(defaultOpen);
  let _ = open ?? h;
  let y = n.Children.toArray(children).filter(n.isValidElement).map(e => e.props);
  let b = y.some(e => e.status === `running`);
  let length = y.filter(e => e.status === `error`).length;
  let S = useF(b, undefined, true);
  let C = y.length && y.every(e => e.duration != null) ? y.reduce((acc, item) => acc + (item.duration ?? 0), 0) : null;
  let w = b ? S : duration ?? C ?? S;
  let T = `Used ${y.length} ${y.length === 1 ? `tool` : `tools`}`;
  let E = b ? runningLabel : label ?? T;
  let D = y.slice(-3);
  return <div className={[`ui-tcc-group`, className].filter(Boolean).join(` `)} data-running={b || undefined} data-open={_ || undefined}><style href={`ui-tool-call-clean`} precedence={`default`}>{v}</style><span className={`ui-tcc-sr`} role={`status`} aria-live={`polite`}>{b ? runningLabel : `${T}${length ? `, ${length} failed` : ``}`}</span><button type={`button`} className={`ui-tcc-group__head`} aria-expanded={_} aria-controls={`${m}-list`} onClick={() => {
      if (open === undefined) {
        setH(!_);
      }
      onOpenChange?.(!_);
    }}><span className={`ui-tcc-group__stack`} aria-hidden={`true`}>{D.map((e, t) => <span key={y.length - D.length + t} className={`ui-tcc__icon`}>{e.icon ?? <D1Component />}</span>)}</span><span key={b ? `busy` : `done`} className={`ui-tcc-group__title`}><span className={b ? `ui-tcc-group__label ui-tcc__shine` : `ui-tcc-group__label`} data-text={E}>{E}</span>{!b && length > 0 && <span className={`ui-tcc-group__failed`}>{`· `}{length}{` failed`}</span>}{w != null && <span className={`ui-tcc-group__time`}>{`· `}{p(w, b)}</span>}</span><UComponent /></button><div className={`ui-tcc__body`} id={`${m}-list`} inert={!_}><div className={`ui-tcc__clip`}><div className={`ui-tcc-group__list`}>{children}</div></div></div></div>;
}
function O1Component({
  label,
  value,
  cap
}) {
  let {
    text,
    json
  } = m(value);
  let cRef = n.useRef(null);
  let [l, setL] = n.useState(false);
  let [d, setD] = n.useState(0);
  n.useLayoutEffect(() => {
    let cRef_current = cRef.current;
    let t = cRef_current?.firstElementChild;
    if (!cRef_current || !t) {
      return;
    }
    let n = () => setD(cRef_current.scrollHeight);
    n();
    let r = new ResizeObserver(n);
    r.observe(t);
    return () => r.disconnect();
  }, [text]);
  let p = d > cap + 24;
  return <div className={`ui-tcc__section`}><div className={`ui-tcc__section-head`}><span className={`ui-tcc__label`}>{label}</span><S1Component text={text} label={label.toLowerCase()} /></div><pre ref={cRef} className={`ui-tcc__code`} data-capped={p && !l || undefined} style={p ? {
      maxHeight: l ? d : cap
    } : undefined}><code>{json ? GComponent(text) : text}</code></pre>{p && <button type={`button`} className={`ui-tcc__more`} aria-expanded={l} onClick={() => setL(!l)}>{l ? `Show less` : `Show all`}</button>}</div>;
}
function S1Component({
  text,
  label
}) {
  let [i, setI] = n.useState(false);
  n.useEffect(() => {
    if (!i) {
      return;
    }
    let e = window.setTimeout(() => setI(false), 1400);
    return () => window.clearTimeout(e);
  }, [i]);
  return <button type={`button`} className={`ui-tcc__copy`} data-copied={i || undefined} aria-label={i ? `Copied` : `Copy ${label}`} title={i ? `Copied` : `Copy ${label}`} onClick={() => _(text).then(e => e && setI(true))}><svg className={`ui-tcc__copy-icon`} viewBox={`0 0 16 16`} aria-hidden={`true`}><rect x={`5.5`} y={`5.5`} width={`8.5`} height={`8.5`} rx={`2`} /><path d={`M10.5 3.75v-.25A1.5 1.5 0 0 0 9 2H3.5A1.5 1.5 0 0 0 2 3.5V9a1.5 1.5 0 0 0 1.5 1.5h.25`} /></svg><svg className={`ui-tcc__copy-done`} viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M3.5 8.4 6.6 11.3 12.5 4.9`} pathLength={1} /></svg></button>;
}
function C1Component() {
  return <svg className={`ui-tcc__spinner`} viewBox={`0 0 16 16`} aria-hidden={`true`}><circle cx={`8`} cy={`8`} r={`6`} /><path d={`M8 2a6 6 0 0 1 6 6`} /></svg>;
}
function L1Component() {
  return <svg className={`ui-tcc__err`} viewBox={`0 0 16 16`} aria-hidden={`true`}><circle cx={`8`} cy={`8`} r={`7`} /><path d={`M8 4.9v3.5M8 10.9v.1`} /></svg>;
}
function UComponent() {
  return <svg className={`ui-tcc__chevron`} viewBox={`0 0 12 12`} aria-hidden={`true`}><path d={`M3.5 5.25 6 7.75l2.5-2.5`} /></svg>;
}
function D1Component() {
  return <svg viewBox={`0 0 16 16`}><path d={`M10.2 2.4a3.5 3.5 0 0 0-4.3 4.6L2.6 10.3a1.4 1.4 0 0 0 2 2L7.9 9a3.5 3.5 0 0 0 4.6-4.3l-2 2-1.6-.4-.4-1.6 1.7-2.3Z`} /></svg>;
}
function useF(e, t, r) {
  let iRef = n.useRef(null);
  let aRef = n.useRef(0);
  let [o, setO] = n.useState(null);
  n.useEffect(() => {
    if (!e) {
      if (iRef.current !== null) {
        aRef.current += Date.now() - iRef.current;
        iRef.current = null;
        setO(aRef.current);
      }
      return;
    }
    if (!r) {
      aRef.current = 0;
    }
    iRef.current = t ?? Date.now();
    let n = () => setO(aRef.current + Date.now() - (iRef.current ?? Date.now()));
    n();
    let o = window.setInterval(n, 100);
    return () => window.clearInterval(o);
  }, [e, t, r]);
  return o;
}
function p(e, t) {
  if (!t && e < 1000) {
    return `${Math.max(1, Math.round(e))}ms`;
  }
  if (e < 60000) {
    return `${(Math.floor(e / 100) / 10).toFixed(1)}s`;
  }
  let n = Math.floor(e / 1000);
  return `${Math.floor(n / 60)}m ${String(n % 60).padStart(2, `0`)}s`;
}
function m(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t.startsWith(`{`) || t.startsWith(`[`)) {
      try {
        return {
          text: JSON.stringify(JSON.parse(t), null, 2),
          json: true
        };
      } catch {}
    }
    return {
      text: e,
      json: false
    };
  }
  try {
    let t = JSON.stringify(e, null, 2);
    if (t === undefined) {
      return {
        text: String(e),
        json: false
      };
    }
    return {
      text: t,
      json: true
    };
  } catch {
    return {
      text: String(e),
      json: false
    };
  }
}
const h = /("(?:[^"\\]|\\.)*")(\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;
function GComponent(text) {
  let t = [];
  let n = new RegExp(h.source, `g`);
  let i = 0;
  let a;
  while (a = n.exec(text)) {
    if (a.index > i) {
      t.push(text.slice(i, a.index));
    }
    if (a[1] && a[2]) {
      t.push(<span key={a.index} className={`ui-tcc__t-key`}>{a[1]}</span>, a[2]);
    } else {
      let e = a[1] ? `str` : /^[tfn]/.test(a[0]) ? `lit` : `num`;
      t.push(<span key={a.index} className={`ui-tcc__t-${e}`}>{a[0]}</span>);
    }
    i = a.index + a[0].length;
  }
  if (i < text.length) {
    t.push(text.slice(i));
  }
  return t;
}
async function _(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    let t = document.createElement(`textarea`);
    t.value = text;
    t.style.cssText = `position:fixed;opacity:0`;
    document.body.appendChild(t);
    t.select();
    let n = document.execCommand(`copy`);
    t.remove();
    return n;
  }
}
var v = `
/* Colors and motion as variables – override them on .ui-tcc / .ui-tcc-group */
.ui-tcc,
.ui-tcc-group {
  --ui-tcc-card: #ffffff;
  --ui-tcc-strong: #000000;
  --ui-tcc-ink: rgba(0, 0, 0, 0.88);
  --ui-tcc-text: rgba(0, 0, 0, 0.61);
  --ui-tcc-muted: rgba(0, 0, 0, 0.45);
  --ui-tcc-faint: rgba(0, 0, 0, 0.27);
  --ui-tcc-icon: rgba(0, 0, 0, 0.447);
  --ui-tcc-line: rgba(0, 0, 0, 0.06);
  --ui-tcc-wash: rgba(0, 0, 0, 0.03);
  --ui-tcc-wash-big: rgba(0, 0, 0, 0.015);
  /* The code panel: a 2% black frame, kept opaque so the fade of capped blocks can end on it */
  --ui-tcc-code: #fafafa;
  --ui-tcc-accent: rgba(0, 96, 226, 0.765);
  --ui-tcc-red: #d93a2b;
  --ui-tcc-red-bg: rgba(217, 58, 43, 0.04);
  --ui-tcc-red-line: rgba(217, 58, 43, 0.14);
  --ui-tcc-key: rgba(0, 0, 0, 0.88);
  --ui-tcc-str: rgba(0, 123, 172, 0.9);
  --ui-tcc-num: #b25b0c;
  --ui-tcc-lit: #5b5bd6;
  --ui-tcc-shine: rgba(255, 255, 255, 0.82);
  /* Strokes are shadows: a 0.5px hairline plus a soft lift */
  --ui-tcc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-tcc-focus: rgba(0, 96, 226, 0.35);
  --ui-tcc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ui-tcc-mono: ui-monospace, "SF Mono", Menlo, monospace;
  box-sizing: border-box;
  container-type: inline-size;
  min-width: 0;
  color: var(--ui-tcc-ink);
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
.ui-tcc *,
.ui-tcc-group * { box-sizing: border-box; }

.ui-tcc {
  position: relative;
  border-radius: 10px;
  background: var(--ui-tcc-card);
  box-shadow: var(--ui-tcc-shadow);
}
.ui-tcc-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Header row: icon, name + summary, status, chevron – everything truncates before it overflows */
.ui-tcc__head {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 44px;
  padding: 0 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 160ms ease, border-radius 0ms linear 380ms;
}
.ui-tcc[data-open] .ui-tcc__head {
  border-radius: 10px 10px 0 0;
  transition: background-color 160ms ease;
}
.ui-tcc__head:focus-visible,
.ui-tcc-group__head:focus-visible,
.ui-tcc__copy:focus-visible,
.ui-tcc__more:focus-visible,
.ui-tcc__retry:focus-visible {
  outline: 2px solid var(--ui-tcc-focus);
  outline-offset: 1px;
}
@media (hover: hover) {
  .ui-tcc__head:hover { background: var(--ui-tcc-wash-big); }
  .ui-tcc__head:hover .ui-tcc__chevron { stroke: var(--ui-tcc-ink); }
  .ui-tcc-group__head:hover { background: var(--ui-tcc-wash); color: var(--ui-tcc-ink); }
  .ui-tcc__copy:hover { background: var(--ui-tcc-wash-big); color: var(--ui-tcc-ink); }
  .ui-tcc__more:hover { color: var(--ui-tcc-ink); }
  .ui-tcc__retry:hover { background: var(--ui-tcc-wash-big); }
}

/* The tool's icon: a plain 16px glyph, no tile */
.ui-tcc__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 16px;
  height: 16px;
  color: var(--ui-tcc-icon);
}
.ui-tcc__icon > svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }

.ui-tcc__main {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex: 1;
  min-width: 0;
}
.ui-tcc__name {
  flex: 0 1 auto;
  max-width: 55%;
  overflow: hidden;
  color: var(--ui-tcc-strong);
  font-family: var(--ui-tcc-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ui-tcc__summary {
  flex: 1 1 0;
  min-width: 0;
  overflow: hidden;
  color: var(--ui-tcc-text);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ui-tcc__status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: none;
  color: var(--ui-tcc-muted);
  font-size: 12px;
  line-height: 16px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  animation: ui-tcc-in 360ms var(--ui-tcc-ease) both;
}
.ui-tcc[data-status="error"] .ui-tcc__status { color: var(--ui-tcc-red); font-weight: 500; }
.ui-tcc__status > svg { width: 14px; height: 14px; flex: none; fill: none; stroke-linecap: round; stroke-linejoin: round; }
.ui-tcc__spinner circle { stroke: var(--ui-tcc-line); stroke-width: 1.6; }
.ui-tcc__spinner path { stroke: var(--ui-tcc-accent); stroke-width: 1.6; }
.ui-tcc__spinner { animation: ui-tcc-spin 800ms linear infinite; }
/* Done: a solid blue dot whose white check draws itself */
.ui-tcc__ok { animation: ui-tcc-pop 460ms cubic-bezier(0.34, 1.56, 0.64, 1) both; }
.ui-tcc__ok circle { fill: var(--ui-tcc-accent); }
.ui-tcc__ok path { stroke: #fff; stroke-width: 1.5; stroke-dasharray: 1; stroke-dashoffset: 1; animation: ui-tcc-draw 360ms var(--ui-tcc-ease) 160ms forwards; }
.ui-tcc__err circle { fill: var(--ui-tcc-red); }
.ui-tcc__err path { stroke: #fff; stroke-width: 1.6; stroke-linecap: round; }

.ui-tcc__chevron {
  flex: none;
  width: 12px;
  height: 12px;
  fill: none;
  stroke: var(--ui-tcc-icon);
  stroke-width: 1.2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 360ms var(--ui-tcc-ease), stroke 160ms ease;
}
.ui-tcc[data-open] > .ui-tcc__head .ui-tcc__chevron,
.ui-tcc-group[data-open] > .ui-tcc-group__head .ui-tcc__chevron { transform: rotate(180deg); }

/* Body: grows from 0fr to 1fr, so the height animates without measuring */
.ui-tcc__body {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 380ms var(--ui-tcc-ease), opacity 240ms ease;
}
.ui-tcc[data-open] > .ui-tcc__body,
.ui-tcc-group[data-open] > .ui-tcc__body {
  grid-template-rows: 1fr;
  opacity: 1;
}
.ui-tcc__clip { min-height: 0; overflow: hidden; }
.ui-tcc__sections {
  display: grid;
  gap: 14px;
  padding: 12px 14px 14px;
  border-top: 0.5px solid var(--ui-tcc-line);
}

.ui-tcc__section { display: grid; gap: 6px; min-width: 0; }
.ui-tcc__section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 28px;
}
/* Tiny uppercase labels: "ARGUMENTS", "RESULT" */
.ui-tcc__label {
  color: var(--ui-tcc-muted);
  font-size: 10px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.ui-tcc__pending { margin: 0; color: var(--ui-tcc-muted); font-size: 12px; line-height: 16px; }

/* Copy: a small white icon button with the card's hairline */
.ui-tcc__copy {
  all: unset;
  position: relative;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: var(--ui-tcc-card);
  box-shadow: var(--ui-tcc-shadow);
  color: var(--ui-tcc-icon);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-tcc__copy svg {
  position: absolute;
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: opacity 200ms ease, transform 320ms var(--ui-tcc-ease), filter 200ms ease;
}
.ui-tcc__copy-icon rect { fill: currentColor; stroke: none; }
.ui-tcc__copy-done { opacity: 0; transform: scale(0.6); filter: blur(2px); stroke-width: 1.7; }
.ui-tcc__copy[data-copied] { color: var(--ui-tcc-accent); }
.ui-tcc__copy[data-copied] .ui-tcc__copy-icon { opacity: 0; transform: scale(0.6); filter: blur(2px); }
.ui-tcc__copy[data-copied] .ui-tcc__copy-done { opacity: 1; transform: none; filter: none; }

/* Code: a faint panel with a 0.5px frame; wraps instead of scrolling sideways, capped blocks fade out */
.ui-tcc__code {
  position: relative;
  margin: 0;
  padding: 10px 12px;
  overflow: hidden;
  border-radius: 8px;
  background: var(--ui-tcc-code);
  box-shadow: inset 0 0 0 0.5px var(--ui-tcc-line);
  color: var(--ui-tcc-muted);
  font-family: var(--ui-tcc-mono);
  font-size: 12px;
  line-height: 20px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  tab-size: 2;
  transition: max-height 420ms var(--ui-tcc-ease);
}
.ui-tcc__code code { display: block; font: inherit; }
.ui-tcc__code::after {
  content: "";
  position: absolute;
  left: 0.5px;
  right: 0.5px;
  bottom: 0.5px;
  height: 56px;
  border-radius: 0 0 7.5px 7.5px;
  background: linear-gradient(to bottom, transparent, var(--ui-tcc-code));
  opacity: 0;
  transition: opacity 240ms ease;
  pointer-events: none;
}
.ui-tcc__code[data-capped]::after { opacity: 1; }
.ui-tcc__t-key { color: var(--ui-tcc-key); }
.ui-tcc__t-str { color: var(--ui-tcc-str); }
.ui-tcc__t-num { color: var(--ui-tcc-num); }
.ui-tcc__t-lit { color: var(--ui-tcc-lit); }

.ui-tcc__more {
  all: unset;
  justify-self: start;
  padding: 2px 4px;
  margin-left: -4px;
  border-radius: 6px;
  color: var(--ui-tcc-text);
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: color 160ms ease;
}

/* Error: the message on a faint red panel and an optional white Retry button */
.ui-tcc__error {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 8px 8px 8px 12px;
  border-radius: 8px;
  background: var(--ui-tcc-red-bg);
  box-shadow: inset 0 0 0 0.5px var(--ui-tcc-red-line);
}
.ui-tcc__error > .ui-tcc__err { flex: none; align-self: flex-start; width: 16px; height: 16px; margin-top: 6px; }
.ui-tcc__error-text {
  flex: 1;
  min-width: 0;
  margin: 0;
  color: var(--ui-tcc-red);
  font-size: 13px;
  line-height: 20px;
  overflow-wrap: anywhere;
}
.ui-tcc__retry {
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: none;
  height: 28px;
  padding: 0 10px 0 6px;
  border-radius: 6px;
  background: var(--ui-tcc-card);
  box-shadow: var(--ui-tcc-shadow);
  color: var(--ui-tcc-strong);
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 160ms ease;
}
.ui-tcc__retry svg { width: 16px; height: 16px; fill: none; stroke: var(--ui-tcc-icon); stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.ui-tcc__retry:active svg { transform: rotate(-60deg); transition: transform 200ms var(--ui-tcc-ease); }

/* Group: one quiet line with the tool icons stacked on small white tiles, the cards below */
.ui-tcc-group { display: grid; }
.ui-tcc-group__head {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-self: start;
  max-width: 100%;
  min-height: 32px;
  margin-left: -6px;
  padding: 4px 10px 4px 6px;
  border-radius: 8px;
  color: var(--ui-tcc-ink);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-tcc-group__stack { display: flex; flex: none; padding: 0.5px; }
.ui-tcc-group__stack .ui-tcc__icon {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: var(--ui-tcc-card);
  box-shadow: var(--ui-tcc-shadow);
  animation: ui-tcc-pop 420ms var(--ui-tcc-ease) both;
}
.ui-tcc-group__stack .ui-tcc__icon + .ui-tcc__icon { margin-left: -4px; }
.ui-tcc-group__stack .ui-tcc__icon > svg { width: 12px; height: 12px; stroke-width: 1.5; }
.ui-tcc-group__title {
  display: flex;
  align-items: baseline;
  gap: 6px;
  min-width: 0;
  white-space: nowrap;
  animation: ui-tcc-in 360ms var(--ui-tcc-ease) both;
}
.ui-tcc-group__label {
  position: relative;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  color: inherit;
  font-weight: 500;
}
.ui-tcc-group__label.ui-tcc__shine { color: var(--ui-tcc-muted); }
.ui-tcc-group__failed { flex: none; color: var(--ui-tcc-red); }
.ui-tcc-group__time { flex: none; color: var(--ui-tcc-faint); font-variant-numeric: tabular-nums; }
.ui-tcc-group__list { display: grid; gap: 8px; padding: 6px 0 2px; }

/* A soft light sweeping over "Using tools…" */
.ui-tcc__shine::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  position: absolute;
  inset: 0;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(90deg, transparent 38%, var(--ui-tcc-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ui-tcc-sweep 1.8s linear infinite;
  pointer-events: none;
}

@keyframes ui-tcc-in {
  from { opacity: 0; transform: translateY(3px); filter: blur(2px); }
  to { opacity: 1; transform: none; filter: none; }
}
@keyframes ui-tcc-pop {
  from { opacity: 0; transform: scale(0.6); }
  to { opacity: 1; transform: none; }
}
@keyframes ui-tcc-spin { to { transform: rotate(360deg); } }
@keyframes ui-tcc-draw { to { stroke-dashoffset: 0; } }
@keyframes ui-tcc-sweep {
  from { background-position: 100% 0; }
  to { background-position: 0% 0; }
}

/* Narrow (phones): a little less padding, the summary gives way first */
@container (max-width: 360px) {
  .ui-tcc__head { gap: 8px; padding: 0 12px; }
  .ui-tcc__sections { padding: 12px 12px 12px; }
}
/* Touch screens: bigger tap targets */
@media (pointer: coarse) {
  .ui-tcc__head { min-height: 52px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-tcc *,
  .ui-tcc-group *,
  .ui-tcc *::after,
  .ui-tcc-group *::after {
    animation-duration: 1ms !important;
    animation-delay: 0ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
  .ui-tcc__shine::after { display: none; }
  .ui-tcc__ok path { stroke-dashoffset: 0; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tcc,
:where(.dark, [data-theme="dark"]) .ui-tcc-group {
  --ui-tcc-card: #1c1c1e;
  --ui-tcc-strong: #ffffff;
  --ui-tcc-ink: rgba(255, 255, 255, 0.9);
  --ui-tcc-text: rgba(255, 255, 255, 0.62);
  --ui-tcc-muted: rgba(255, 255, 255, 0.46);
  --ui-tcc-faint: rgba(255, 255, 255, 0.3);
  --ui-tcc-icon: rgba(255, 255, 255, 0.5);
  --ui-tcc-line: rgba(255, 255, 255, 0.08);
  --ui-tcc-wash: rgba(255, 255, 255, 0.04);
  --ui-tcc-wash-big: rgba(255, 255, 255, 0.025);
  --ui-tcc-code: #212123;
  --ui-tcc-accent: #4d8dff;
  --ui-tcc-red: #ff7b72;
  --ui-tcc-red-bg: rgba(255, 110, 100, 0.07);
  --ui-tcc-red-line: rgba(255, 110, 100, 0.18);
  --ui-tcc-key: rgba(255, 255, 255, 0.9);
  --ui-tcc-str: #5fc8e8;
  --ui-tcc-num: #f2a65a;
  --ui-tcc-lit: #a5a5ff;
  --ui-tcc-shine: #ffffff;
  --ui-tcc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-tcc-focus: rgba(77, 141, 255, 0.5);
}
`;
const y = [0, 1500, 2700, 4300, 5400, 6700, 8000];
const b = 11500;
const x = {
  results: [{
    title: `HubSpot Sales Hub pricing`,
    url: `https://www.hubspot.com/pricing/sales`,
    price_per_seat: 90
  }, {
    title: `Pipedrive plans and pricing`,
    url: `https://www.pipedrive.com/en/pricing`,
    price_per_seat: 49
  }, {
    title: `Attio pricing`,
    url: `https://attio.com/pricing`,
    price_per_seat: 59
  }, {
    title: `Salesforce Starter Suite`,
    url: `https://www.salesforce.com/sales/pricing`,
    price_per_seat: 25
  }, {
    title: `Close CRM pricing`,
    url: `https://www.close.com/pricing`,
    price_per_seat: 49
  }],
  total: 5,
  cached: false
};
function SComponent() {
  let [e, setE] = n.useState(0);
  let [o, setO] = n.useState(0);
  let [open, setOpen] = n.useState(true);
  let uRef = n.useRef(false);
  n.useEffect(() => {
    uRef.current = false;
    setO(0);
    setOpen(true);
    let e = y.slice(1).map((e, t) => window.setTimeout(() => setO(e => Math.max(e, t + 1)), e));
    e.push(window.setTimeout(() => !uRef.current && setOpen(false), y[6]));
    e.push(window.setTimeout(() => !uRef.current && setE(e => e + 1), b));
    return () => e.forEach(clearTimeout);
  }, [e]);
  let status = o === 2 ? `error` : o >= 4 ? `success` : `running`;
  return <div className={`tc-demo`}><div className={`tc-demo__chat`}><p className={`tc-demo__you`}>{`Compare CRM pricing for our 10-person team and check open deals.`}</p><A1Component key={e} open={open} onOpenChange={e => {
        uRef.current = true;
        setOpen(e);
      }}><I1Component name={`search_web`} icon=<CComponent /> status={o >= 1 ? `success` : `running`} summary={o >= 1 ? `Searched the web for 'CRM pricing 2026'` : `Searching the web for 'CRM pricing 2026'`} args={{
          query: `CRM pricing 2026 small sales team`,
          max_results: 5
        }} result={o >= 1 ? x : undefined} />{o >= 1 && <I1Component name={`fetch_page`} icon=<WComponent /> status={status} summary={status === `success` ? `Read hubspot.com/pricing` : `Reading hubspot.com/pricing`} args={{
          url: `https://www.hubspot.com/pricing/sales`,
          timeout_ms: 8000
        }} result={status === `success` ? {
          status: 200,
          title: `Sales Hub Pricing`,
          words: 2140
        } : undefined} error={`Request timed out after 8s – hubspot.com didn't respond.`} onRetry={() => setO(e => Math.max(e, 3))} />}{o >= 4 && <I1Component name={`crm.list_deals`} icon=<TComponent /> status={o >= 5 ? `success` : `running`} summary={o >= 5 ? `Found 4 open deals in negotiation` : `Looking up open deals`} args={{
          stage: `negotiation`,
          owner: `me`,
          limit: 10
        }} result={o >= 5 ? {
          count: 4,
          deals: [{
            name: `Northwind`,
            value: 18400
          }, {
            name: `Globex`,
            value: 9600
          }]
        } : undefined} />}</A1Component></div></div>;
}
function CComponent() {
  return <svg viewBox={`0 0 16 16`}><circle cx={`7`} cy={`7`} r={`4.25`} /><path d={`m10.25 10.25 3 3`} /></svg>;
}
function WComponent() {
  return <svg viewBox={`0 0 16 16`}><path d={`M4 2.75h5l3 3v7.5H4z`} /><path d={`M9 2.75v3h3M6 9h4M6 11h3`} /></svg>;
}
function TComponent() {
  return <svg viewBox={`0 0 16 16`}><ellipse cx={`8`} cy={`4`} rx={`4.75`} ry={`1.75`} /><path d={`M3.25 4v8c0 .97 2.13 1.75 4.75 1.75s4.75-.78 4.75-1.75V4M3.25 8c0 .97 2.13 1.75 4.75 1.75S12.75 8.97 12.75 8`} /></svg>;
}
export { SComponent as default };
