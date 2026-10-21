// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
const n = t_1();
const r = t();
function IComponent({
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
  return <div className={[`ui-tc`, className].filter(Boolean).join(` `)} data-status={status} data-open={k || undefined}><style href={`ui-tool-call`} precedence={`default`}>{v}</style><span className={`ui-tc-sr`} role={`status`} aria-live={`polite`}>{L}</span><button type={`button`} className={`ui-tc__head`} aria-expanded={k} aria-controls={`${E}-body`} onClick={() => {
      setN(false);
      A(!k);
    }}><span className={`ui-tc__icon`} aria-hidden={`true`}>{icon ?? <D1Component />}</span><span className={`ui-tc__main`}><code className={`ui-tc__name`}>{name}</code>{summary != null && <span className={`ui-tc__summary`} title={typeof summary == `string` ? summary : undefined}>{summary}</span>}</span><span key={status} className={`ui-tc__status`}>{status === `running` && <C1Component />}{status === `success` && <svg className={`ui-tc__ok`} viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M3.5 8.4 6.6 11.3 12.5 4.9`} pathLength={1} /></svg>}{status === `error` && <L1Component />}<span className={`ui-tc__time`}>{status === `error` ? `Failed` : I == null ? null : p(I, status === `running`)}</span></span><UComponent /></button><div className={`ui-tc__body`} id={`${E}-body`} inert={!k}><div className={`ui-tc__clip`}><div className={`ui-tc__sections`}>{status === `error` && <div className={`ui-tc__error`}><L1Component /><p className={`ui-tc__error-text`}>{error ?? `The tool call failed.`}</p>{onRetry && <button type={`button`} className={`ui-tc__retry`} onClick={onRetry}><svg viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M2.75 8a5.25 5.25 0 1 0 1.6-3.77`} /><path d={`M2.5 2.5v2.75h2.75`} /></svg>{`Retry`}</button>}</div>}{args !== undefined && <O1Component label={`Arguments`} value={args} cap={maxCodeHeight} />}{result === undefined ? status === `running` ? <div className={`ui-tc__section`}><div className={`ui-tc__section-head`}><span className={`ui-tc__label`}>{`Result`}</span></div><p className={`ui-tc__pending`}>{`Waiting for result…`}</p></div> : null : <O1Component label={`Result`} value={result} cap={maxCodeHeight} />}{args === undefined && result === undefined && status === `success` && <p className={`ui-tc__pending`}>{`No arguments or result.`}</p>}</div></div></div></div>;
}
function AComponent({
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
  return <div className={[`ui-tc-group`, className].filter(Boolean).join(` `)} data-running={b || undefined} data-open={_ || undefined}><style href={`ui-tool-call`} precedence={`default`}>{v}</style><span className={`ui-tc-sr`} role={`status`} aria-live={`polite`}>{b ? runningLabel : `${T}${length ? `, ${length} failed` : ``}`}</span><button type={`button`} className={`ui-tc-group__head`} aria-expanded={_} aria-controls={`${m}-list`} onClick={() => {
      if (open === undefined) {
        setH(!_);
      }
      onOpenChange?.(!_);
    }}><span className={`ui-tc-group__stack`} aria-hidden={`true`}>{D.map((e, t) => <span key={y.length - D.length + t} className={`ui-tc__icon`}>{e.icon ?? <D1Component />}</span>)}</span><span key={b ? `busy` : `done`} className={`ui-tc-group__title`}><span className={b ? `ui-tc-group__label ui-tc__shine` : `ui-tc-group__label`} data-text={E}>{E}</span>{!b && length > 0 && <span className={`ui-tc-group__failed`}>{`· `}{length}{` failed`}</span>}{w != null && <span className={`ui-tc-group__time`}>{`· `}{p(w, b)}</span>}</span><UComponent /></button><div className={`ui-tc__body`} id={`${m}-list`} inert={!_}><div className={`ui-tc__clip`}><div className={`ui-tc-group__list`}>{children}</div></div></div></div>;
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
  return <div className={`ui-tc__section`}><div className={`ui-tc__section-head`}><span className={`ui-tc__label`}>{label}</span><S1Component text={text} label={label.toLowerCase()} /></div><pre ref={cRef} className={`ui-tc__code`} data-capped={p && !l || undefined} style={p ? {
      maxHeight: l ? d : cap
    } : undefined}><code>{json ? GComponent(text) : text}</code></pre>{p && <button type={`button`} className={`ui-tc__more`} aria-expanded={l} onClick={() => setL(!l)}>{l ? `Show less` : `Show all`}</button>}</div>;
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
  return <button type={`button`} className={`ui-tc__copy`} data-copied={i || undefined} aria-label={i ? `Copied` : `Copy ${label}`} title={i ? `Copied` : `Copy ${label}`} onClick={() => _(text).then(e => e && setI(true))}><svg className={`ui-tc__copy-icon`} viewBox={`0 0 16 16`} aria-hidden={`true`}><rect x={`5.25`} y={`5.25`} width={`8`} height={`8`} rx={`2`} /><path d={`M10.75 5.25v-1a1.5 1.5 0 0 0-1.5-1.5h-4.5a2 2 0 0 0-2 2v4.5a1.5 1.5 0 0 0 1.5 1.5h1`} /></svg><svg className={`ui-tc__copy-done`} viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M3.5 8.4 6.6 11.3 12.5 4.9`} pathLength={1} /></svg></button>;
}
function C1Component() {
  return <svg className={`ui-tc__spinner`} viewBox={`0 0 16 16`} aria-hidden={`true`}><circle cx={`8`} cy={`8`} r={`5.75`} /><path d={`M8 2.25a5.75 5.75 0 0 1 5.75 5.75`} /></svg>;
}
function L1Component() {
  return <svg className={`ui-tc__err`} viewBox={`0 0 16 16`} aria-hidden={`true`}><circle cx={`8`} cy={`8`} r={`6`} /><path d={`M8 5v3.4M8 10.9v.1`} /></svg>;
}
function UComponent() {
  return <svg className={`ui-tc__chevron`} viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M4.5 6.25 8 9.75l3.5-3.5`} /></svg>;
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
      t.push(<span key={a.index} className={`ui-tc__t-key`}>{a[1]}</span>, a[2]);
    } else {
      let e = a[1] ? `str` : /^[tfn]/.test(a[0]) ? `lit` : `num`;
      t.push(<span key={a.index} className={`ui-tc__t-${e}`}>{a[0]}</span>);
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
.ui-tc,
.ui-tc-group {
  --ui-tc-ink: #171717;
  --ui-tc-text: #6b6b6b;
  --ui-tc-muted: #8a8a8a;
  --ui-tc-bg: #ffffff;
  --ui-tc-line: #e7e7e7;
  --ui-tc-hover: #fafafa;
  --ui-tc-tile: #f5f5f5;
  --ui-tc-code: #fafafa;
  --ui-tc-ring: #ffffff;
  --ui-tc-red: #c8372d;
  --ui-tc-red-bg: rgba(200, 55, 45, 0.06);
  --ui-tc-red-line: rgba(200, 55, 45, 0.16);
  --ui-tc-key: #171717;
  --ui-tc-str: #0f7b6c;
  --ui-tc-num: #b25b0c;
  --ui-tc-lit: #6e56cf;
  --ui-tc-shine: rgba(255, 255, 255, 0.82);
  --ui-tc-focus: rgba(23, 23, 23, 0.22);
  --ui-tc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ui-tc-mono: ui-monospace, "SF Mono", Menlo, monospace;
  box-sizing: border-box;
  min-width: 0;
  color: var(--ui-tc-text);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13.5px;
  line-height: 1.4;
  letter-spacing: -0.006em;
  -webkit-font-smoothing: antialiased;
}
.ui-tc *,
.ui-tc-group * { box-sizing: border-box; }

.ui-tc {
  position: relative;
  border-radius: 12px;
  background: var(--ui-tc-bg);
  box-shadow: inset 0 0 0 1px var(--ui-tc-line), 0 1px 2px rgba(0, 0, 0, 0.04);
}
.ui-tc-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Header: icon, name + summary, status, chevron – everything truncates before it overflows */
.ui-tc__head {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 44px;
  padding: 8px 10px 8px 9px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 160ms ease;
}
.ui-tc[data-open] .ui-tc__head { border-radius: 12px 12px 0 0; }
.ui-tc__head:focus-visible,
.ui-tc-group__head:focus-visible,
.ui-tc__copy:focus-visible,
.ui-tc__more:focus-visible,
.ui-tc__retry:focus-visible {
  outline: 2px solid var(--ui-tc-focus);
  outline-offset: 2px;
}
@media (hover: hover) {
  .ui-tc__head:hover { background: var(--ui-tc-hover); }
  .ui-tc-group__head:hover { background: var(--ui-tc-hover); color: var(--ui-tc-ink); }
  .ui-tc__copy:hover { background: var(--ui-tc-hover); color: var(--ui-tc-ink); }
  .ui-tc__more:hover { color: var(--ui-tc-ink); }
  .ui-tc__retry:hover { background: var(--ui-tc-hover); }
}

.ui-tc__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background: var(--ui-tc-tile);
  box-shadow: inset 0 0 0 1px var(--ui-tc-line);
  color: var(--ui-tc-ink);
}
.ui-tc__icon > svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }

.ui-tc__main {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex: 1;
  min-width: 0;
}
.ui-tc__name {
  flex: 0 1 auto;
  max-width: 55%;
  overflow: hidden;
  color: var(--ui-tc-ink);
  font-family: var(--ui-tc-mono);
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ui-tc__summary {
  flex: 1 1 0;
  min-width: 0;
  overflow: hidden;
  color: var(--ui-tc-text);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ui-tc__status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: none;
  color: var(--ui-tc-muted);
  font-size: 12.5px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  animation: ui-tc-in 360ms var(--ui-tc-ease) both;
}
.ui-tc[data-status="error"] .ui-tc__status { color: var(--ui-tc-red); }
.ui-tc__status > svg { width: 14px; height: 14px; flex: none; fill: none; stroke-linecap: round; stroke-linejoin: round; }
.ui-tc__spinner circle { stroke: currentColor; stroke-width: 1.6; opacity: 0.22; }
.ui-tc__spinner path { stroke: var(--ui-tc-ink); stroke-width: 1.6; }
.ui-tc__spinner { animation: ui-tc-spin 800ms linear infinite; }
.ui-tc__ok { stroke: var(--ui-tc-ink); stroke-width: 1.8; }
.ui-tc__ok path { stroke-dasharray: 1; stroke-dashoffset: 1; animation: ui-tc-draw 360ms var(--ui-tc-ease) 80ms forwards; }
.ui-tc__err { stroke: var(--ui-tc-red); stroke-width: 1.5; }

.ui-tc__chevron {
  flex: none;
  width: 14px;
  height: 14px;
  fill: none;
  stroke: var(--ui-tc-muted);
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 360ms var(--ui-tc-ease);
}
.ui-tc[data-open] > .ui-tc__head .ui-tc__chevron,
.ui-tc-group[data-open] > .ui-tc-group__head .ui-tc__chevron { transform: rotate(180deg); }

/* Body: grows from 0fr to 1fr, so the height animates without measuring */
.ui-tc__body {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 380ms var(--ui-tc-ease), opacity 240ms ease;
}
.ui-tc[data-open] > .ui-tc__body,
.ui-tc-group[data-open] > .ui-tc__body {
  grid-template-rows: 1fr;
  opacity: 1;
}
.ui-tc__clip { min-height: 0; overflow: hidden; }
.ui-tc__sections {
  display: grid;
  gap: 12px;
  padding: 12px;
  border-top: 1px solid var(--ui-tc-line);
}

.ui-tc__section { display: grid; gap: 6px; min-width: 0; }
.ui-tc__section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 24px;
}
.ui-tc__label { color: var(--ui-tc-muted); font-size: 12px; font-weight: 500; }
.ui-tc__pending { margin: 0; color: var(--ui-tc-muted); font-size: 12.5px; }

.ui-tc__copy {
  all: unset;
  position: relative;
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  color: var(--ui-tc-muted);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-tc__copy svg {
  position: absolute;
  width: 14px;
  height: 14px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: opacity 200ms ease, transform 320ms var(--ui-tc-ease), filter 200ms ease;
}
.ui-tc__copy-done { opacity: 0; transform: scale(0.6); filter: blur(2px); stroke-width: 1.7; }
.ui-tc__copy[data-copied] { color: var(--ui-tc-ink); }
.ui-tc__copy[data-copied] .ui-tc__copy-icon { opacity: 0; transform: scale(0.6); filter: blur(2px); }
.ui-tc__copy[data-copied] .ui-tc__copy-done { opacity: 1; transform: none; filter: none; }

/* Code: wraps instead of scrolling sideways; capped blocks fade out at the bottom */
.ui-tc__code {
  position: relative;
  margin: 0;
  padding: 10px 12px;
  overflow: hidden;
  border-radius: 8px;
  background: var(--ui-tc-code);
  box-shadow: inset 0 0 0 1px var(--ui-tc-line);
  color: var(--ui-tc-muted);
  font-family: var(--ui-tc-mono);
  font-size: 12px;
  line-height: 1.6;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  tab-size: 2;
  transition: max-height 420ms var(--ui-tc-ease);
}
.ui-tc__code code { display: block; font: inherit; }
.ui-tc__code::after {
  content: "";
  position: absolute;
  left: 1px;
  right: 1px;
  bottom: 1px;
  height: 56px;
  border-radius: 0 0 7px 7px;
  background: linear-gradient(to bottom, transparent, var(--ui-tc-code));
  opacity: 0;
  transition: opacity 240ms ease;
  pointer-events: none;
}
.ui-tc__code[data-capped]::after { opacity: 1; }
.ui-tc__t-key { color: var(--ui-tc-key); }
.ui-tc__t-str { color: var(--ui-tc-str); }
.ui-tc__t-num { color: var(--ui-tc-num); }
.ui-tc__t-lit { color: var(--ui-tc-lit); }

.ui-tc__more {
  all: unset;
  justify-self: start;
  padding: 2px 4px;
  margin-left: -4px;
  border-radius: 5px;
  color: var(--ui-tc-text);
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
  transition: color 160ms ease;
}

/* Error: the message and an optional retry */
.ui-tc__error {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 9px 10px 9px 11px;
  border-radius: 8px;
  background: var(--ui-tc-red-bg);
  box-shadow: inset 0 0 0 1px var(--ui-tc-red-line);
}
.ui-tc__error > .ui-tc__err { flex: none; width: 14px; height: 14px; margin-top: 2px; fill: none; stroke-linecap: round; }
.ui-tc__error-text {
  flex: 1;
  min-width: 0;
  margin: 0;
  color: var(--ui-tc-red);
  font-size: 13px;
  line-height: 1.45;
  overflow-wrap: anywhere;
}
.ui-tc__retry {
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  flex: none;
  height: 26px;
  margin: -3px 0;
  padding: 0 10px 0 8px;
  border-radius: 7px;
  background: var(--ui-tc-bg);
  box-shadow: inset 0 0 0 1px var(--ui-tc-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  color: var(--ui-tc-ink);
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 160ms ease;
}
.ui-tc__retry svg { width: 13px; height: 13px; fill: none; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.ui-tc__retry:active svg { transform: rotate(-60deg); transition: transform 200ms var(--ui-tc-ease); }

/* Group: one quiet line with the tool icons stacked, the cards below */
.ui-tc-group { display: grid; }
.ui-tc-group__head {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 9px;
  justify-self: start;
  max-width: 100%;
  min-height: 36px;
  padding: 4px 10px 4px 5px;
  border-radius: 10px;
  color: var(--ui-tc-text);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-tc-group__stack { display: flex; flex: none; }
.ui-tc-group__stack .ui-tc__icon {
  width: 24px;
  height: 24px;
  border-radius: 7px;
  box-shadow: inset 0 0 0 1px var(--ui-tc-line), 0 0 0 2px var(--ui-tc-ring);
  animation: ui-tc-pop 420ms var(--ui-tc-ease) both;
}
.ui-tc-group__stack .ui-tc__icon + .ui-tc__icon { margin-left: -5px; }
.ui-tc-group__stack .ui-tc__icon > svg { width: 13px; height: 13px; }
.ui-tc-group__title {
  display: flex;
  align-items: baseline;
  gap: 5px;
  min-width: 0;
  white-space: nowrap;
  animation: ui-tc-in 360ms var(--ui-tc-ease) both;
}
.ui-tc-group__label {
  position: relative;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  color: inherit;
  font-weight: 500;
}
.ui-tc-group__failed { flex: none; color: var(--ui-tc-red); }
.ui-tc-group__time { flex: none; color: var(--ui-tc-muted); font-variant-numeric: tabular-nums; }
.ui-tc-group__list { display: grid; gap: 8px; padding-top: 8px; }

/* A soft light sweeping over "Using tools…" */
.ui-tc__shine::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  position: absolute;
  inset: 0;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(90deg, transparent 38%, var(--ui-tc-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ui-tc-sweep 1.8s linear infinite;
  pointer-events: none;
}

@keyframes ui-tc-in {
  from { opacity: 0; transform: translateY(3px); filter: blur(2px); }
  to { opacity: 1; transform: none; filter: none; }
}
@keyframes ui-tc-pop {
  from { opacity: 0; transform: scale(0.6); }
  to { opacity: 1; transform: none; }
}
@keyframes ui-tc-spin { to { transform: rotate(360deg); } }
@keyframes ui-tc-draw { to { stroke-dashoffset: 0; } }
@keyframes ui-tc-sweep {
  from { background-position: 100% 0; }
  to { background-position: 0% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-tc *,
  .ui-tc-group *,
  .ui-tc *::after,
  .ui-tc-group *::after {
    animation-duration: 1ms !important;
    animation-delay: 0ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
  .ui-tc__shine::after { display: none; }
  .ui-tc__ok path { stroke-dashoffset: 0; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tc,
:where(.dark, [data-theme="dark"]) .ui-tc-group {
  --ui-tc-ink: #ededed;
  --ui-tc-text: #a1a1a1;
  --ui-tc-muted: #7c7c7c;
  --ui-tc-bg: #161618;
  --ui-tc-line: rgba(255, 255, 255, 0.1);
  --ui-tc-hover: rgba(255, 255, 255, 0.035);
  --ui-tc-tile: #1d1d20;
  --ui-tc-code: #1d1d20;
  --ui-tc-ring: #161618;
  --ui-tc-red: #ff7b72;
  --ui-tc-red-bg: rgba(255, 110, 100, 0.08);
  --ui-tc-red-line: rgba(255, 110, 100, 0.2);
  --ui-tc-key: #ededed;
  --ui-tc-str: #5fd4b8;
  --ui-tc-num: #f2a65a;
  --ui-tc-lit: #b5a4ff;
  --ui-tc-shine: rgba(255, 255, 255, 0.95);
  --ui-tc-focus: rgba(255, 255, 255, 0.3);
}
:where(.dark, [data-theme="dark"]) .ui-tc { box-shadow: inset 0 0 0 1px var(--ui-tc-line); }
`;
export { AComponent as n, IComponent as t };
