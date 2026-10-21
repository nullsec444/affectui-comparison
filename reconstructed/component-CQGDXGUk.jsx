// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
const n = t_1();
const r = t();
const i = 700;
const a = 160;
function OComponent({
  steps,
  doneLabel = `Finished thinking`,
  stepMs = 1300,
  loop = false,
  onDone,
  className
}) {
  let [p, setP] = n.useState(0);
  let [h, setH] = n.useState(0);
  let [_, set_] = n.useState(false);
  let [y, setY] = n.useState(0);
  let [x, setX] = n.useState(true);
  let [C, setC] = n.useState(() => new Set());
  let TRef = n.useRef(0);
  let ERef = n.useRef(false);
  n.useEffect(() => {
    TRef.current = Date.now();
    setH(0);
    set_(false);
    setY(0);
    setX(true);
    setC(new Set());
    let t = [];
    let n = i;
    steps.forEach((e, r) => {
      t.push(window.setTimeout(() => setH(r + 1), n));
      n += stepMs + (e.kind === `search` ? (e.sources.length + 1) * a : 0);
    });
    t.push(window.setTimeout(() => {
      let e = Math.max(1, Math.round((Date.now() - TRef.current) / 1000));
      setY(e);
      set_(true);
      onDone?.(e);
    }, n));
    if (loop) {
      t.push(window.setTimeout(() => !ERef.current && setP(e => e + 1), n + 4000));
    }
    return () => t.forEach(clearTimeout);
  }, [p, steps, stepMs, loop]);
  n.useEffect(() => {
    if (_) {
      return;
    }
    let e = window.setInterval(() => setY(Math.floor((Date.now() - TRef.current) / 1000)), 250);
    return () => clearInterval(e);
  }, [_, p]);
  let D = _ ? -1 : h - 1;
  return <div key={p} className={[`ui-think`, className].filter(Boolean).join(` `)} data-done={_ || undefined}><style href={`ui-thinking-state`} precedence={`default`}>{l}</style><button type={`button`} className={`ui-think__head`} aria-expanded={x} onClick={() => setX(e => !e)}><span className={`ui-think__chevron`} aria-hidden={`true`}><svg viewBox={`0 0 24 24`}><path d={`M18 9s-4.419 6-6 6c-1.581 0-6-6-6-6`} /></svg></span><span key={_ ? `done` : `busy`} className={`ui-think__title`}>{_ ? `Worked for ${c(y)}` : <><span className={`ui-think__shimmer`} data-text={`Thinking`}>{`Thinking`}</span><span className={`ui-think__time`}>{c(y)}</span></>}</span></button><div className={`ui-think__body`} data-open={x}><ol className={`ui-think__list`} aria-live={`polite`}>{steps.slice(0, h).map((e, t) => {
          let n = t === D;
          let i = e.kind === `search` && n ? e.activeLabel ?? `Searching` : e.label;
          return <li key={t} className={`ui-think__item`} data-kind={e.kind} data-active={n || undefined}><span className={`ui-think__node`} aria-hidden={`true`}>{e.kind === `search` ? <svg viewBox={`0 0 24 24`} className={`ui-think__globe`}><path d={`M22 12A10 10 0 1 0 12 22`} /><path d={`M20 5.7c-.93.07-2.13.43-2.96 1.5-1.5 1.94-3 2.1-4 1.46-1.5-.97-.24-2.54-2-3.4-1.15-.56-1.31-2.07-.67-3.26`} /><path d={`M2 11c.76.66 1.83 1.27 3.09 1.27 2.6 0 3.12.5 3.12 2.48s0 1.99.52 3.48c.34.97.46 1.94-.22 2.77`} /><path d={`m19.9 19.93 2.1 2.07m-.89-4.95a4.05 4.05 0 1 1-8.11 0 4.05 4.05 0 0 1 8.11 0Z`} /></svg> : <span className={`ui-think__dot`} />}</span><div className={`ui-think__content`}><span className={n ? `ui-think__label ui-think__shimmer` : `ui-think__label`} data-text={i}>{i}</span>{e.kind === `search` && <div className={`ui-think__sources`}>{[...e.sources, ...(C.has(t) ? e.moreSources ?? [] : [])].map((source, n) => <S1Component key={source.label + n} source={source} delay={n < e.sources.length ? 120 + n * a : (n - e.sources.length) * 70} />)}{e.moreSources?.length ? <button type={`button`} className={`ui-think__source ui-think__more`} aria-expanded={C.has(t)} style={{
                  animationDelay: `${120 + e.sources.length * a}ms`
                }} onClick={() => {
                  ERef.current = true;
                  setC(e => {
                    let n = new Set(e);
                    if (n.has(t)) {
                      n.delete(t);
                    } else {
                      n.add(t);
                    }
                    return n;
                  });
                }}>{C.has(t) ? `Show less` : `+${e.moreSources.length} more`}</button> : null}</div>}</div></li>;
        })}{_ && <li className={`ui-think__item`} data-kind={`done`}><span className={`ui-think__node`} aria-hidden={`true`}><svg viewBox={`0 0 24 24`} className={`ui-think__check`}><circle cx={`12`} cy={`12`} r={`10`} /><path d={`M8 12.5l2.5 2.5L16 9`} /></svg></span><div className={`ui-think__content`}><span className={`ui-think__label`}>{doneLabel}</span></div></li>}</ol></div></div>;
}
function S1Component({
  source,
  delay
}) {
  let n = source.tooltip ?? source.href?.replace(/^https?:\/\//, ``);
  let i = <>{source.icon && <span className={`ui-think__favicon`}>{source.icon}</span>}<span className={`ui-think__source-label`}>{source.label}</span>{n && <span className={`ui-think__tip`} aria-hidden={`true`}>{n}</span>}</>;
  let a = {
    className: `ui-think__source`,
    "data-count": !source.icon || undefined,
    style: {
      animationDelay: `${delay}ms`
    }
  };
  if (source.href) {
    return <a {...a} href={source.href} target={`_blank`} rel={`noreferrer`}>{i}</a>;
  }
  return <span {...a}>{i}</span>;
}
var c = e => {
  if (e < 60) {
    return `${e}s`;
  }
  return `${Math.floor(e / 60)}m ${String(e % 60).padStart(2, `0`)}s`;
};
var l = `.ui-think{--ui-tk-ink: #171717;--ui-tk-text: #525252;--ui-tk-muted: #8a8a8a;--ui-tk-line: #e5e5e5;--ui-tk-chip: #f0f0f0;--ui-tk-done: #2f6bff;--ui-tk-shine: rgba(255, 255, 255, 0.82);--ui-tk-dot: #b5b5b5;--ui-tk-chip-hover: #e6e6e6;--ui-tk-tip-text: #fff;--ui-tk-focus: rgba(23, 23, 23, 0.22);--ui-tk-ease: cubic-bezier(0.22, 1, 0.36, 1);width: 100%;max-width: 440px;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;line-height: 1.45;color: var(--ui-tk-text);-webkit-font-smoothing: antialiased}.ui-think *, .ui-think *::before, .ui-think *::after{box-sizing: border-box}.ui-think svg{display: block;width: 100%;height: 100%}.ui-think__head{display: inline-flex;align-items: center;gap: 10px;margin: 0 0 0 -4px;padding: 4px 8px 4px 4px;border: 0;border-radius: 8px;background: none;font: inherit;font-size: 15px;color: var(--ui-tk-muted);cursor: pointer;transition: background-color 160ms ease, color 160ms ease}.ui-think__head:hover{background: var(--ui-tk-chip);color: var(--ui-tk-text)}.ui-think__head:focus-visible{outline: 2px solid var(--ui-tk-focus);outline-offset: 2px}.ui-think__chevron{width: 18px;height: 18px;fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round;transform: rotate(-90deg);transition: transform 260ms var(--ui-tk-ease)}.ui-think__head[aria-expanded="true"] .ui-think__chevron{transform: none}.ui-think__title{display: inline-flex;gap: 8px;animation: ui-think-in 420ms var(--ui-tk-ease) both}.ui-think__time{font-variant-numeric: tabular-nums}.ui-think__body{display: grid;grid-template-rows: 1fr;transition: grid-template-rows 360ms var(--ui-tk-ease), opacity 260ms ease}.ui-think__body[data-open="false"]{grid-template-rows: 0fr;opacity: 0}.ui-think__body[data-open="false"] .ui-think__list{overflow: hidden}.ui-think__list{min-height: 0;overflow: visible;margin: 0;padding: 10px 0 0;list-style: none}.ui-think__item{position: relative;display: grid;grid-template-columns: 20px minmax(0, 1fr);gap: 12px;padding-bottom: 12px;animation: ui-think-in 520ms var(--ui-tk-ease) both}.ui-think__item:not(:last-child)::before{content: "";position: absolute;left: 9.5px;top: 24px;bottom: 2px;width: 1px;background: var(--ui-tk-line);transform-origin: top;animation: ui-think-line 520ms var(--ui-tk-ease) both}.ui-think__node{display: grid;place-items: center;width: 20px;height: 21px}.ui-think__globe{width: 18px !important;height: 18px !important;fill: none;stroke: var(--ui-tk-muted);stroke-width: 1.5;stroke-linecap: round;stroke-linejoin: round}.ui-think__dot{width: 7px;height: 7px;border-radius: 50%;background: var(--ui-tk-dot);transition: background-color 300ms ease, transform 300ms ease}.ui-think__item[data-active] .ui-think__dot{background: var(--ui-tk-ink);animation: ui-think-pulse 1.2s ease-in-out infinite}.ui-think__check{width: 18px !important;height: 18px !important;animation: ui-think-pop 460ms cubic-bezier(0.34, 1.56, 0.64, 1) both}.ui-think__check circle{fill: var(--ui-tk-done)}.ui-think__check path{fill: none;stroke: #fff;stroke-width: 2.2;stroke-linecap: round;stroke-linejoin: round;stroke-dasharray: 14;stroke-dashoffset: 14;animation: ui-think-draw 360ms var(--ui-tk-ease) 180ms forwards}.ui-think__content{min-width: 0;padding-top: 0.5px}.ui-think__label{display: inline-block;color: var(--ui-tk-muted);transition: color 300ms ease}.ui-think__item[data-active] .ui-think__label, .ui-think__item[data-kind="done"] .ui-think__label{color: var(--ui-tk-text)}.ui-think__sources{display: flex;flex-wrap: wrap;gap: 6px;margin-top: 8px}.ui-think__source{display: inline-flex;align-items: center;gap: 6px;max-width: 100%;height: 28px;padding: 0 10px 0 6px;border-radius: 8px;background: var(--ui-tk-chip);font-size: 13px;color: var(--ui-tk-ink);animation: ui-think-chip 420ms var(--ui-tk-ease) both}a.ui-think__source, .ui-think__more{position: relative;border: 0;font: inherit;font-size: 13px;text-decoration: none;cursor: pointer;transition: background-color 160ms ease, color 160ms ease}a.ui-think__source:hover{background: var(--ui-tk-chip-hover)}.ui-think__more{padding: 0 10px;background: none;color: var(--ui-tk-muted)}.ui-think__more:hover{background: var(--ui-tk-chip);color: var(--ui-tk-ink)}a.ui-think__source:focus-visible, .ui-think__more:focus-visible{outline: 2px solid var(--ui-tk-focus);outline-offset: 2px}.ui-think__tip{position: absolute;left: 50%;bottom: calc(100% + 6px);z-index: 2;padding: 4px 8px;border-radius: 6px;background: var(--ui-tk-ink);color: var(--ui-tk-tip-text);font-size: 12px;line-height: 1.3;white-space: nowrap;pointer-events: none;opacity: 0;transform: translate(-50%, 4px);transition: opacity 140ms ease, transform 200ms var(--ui-tk-ease)}.ui-think__source:hover .ui-think__tip, .ui-think__source:focus-visible .ui-think__tip{opacity: 1;transform: translate(-50%, 0);transition-delay: 250ms}.ui-think__source[data-count]{padding: 0 10px;background: none;color: var(--ui-tk-muted)}.ui-think__source-label{overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-think__favicon{display: grid;place-items: center;flex: none;width: 18px;height: 18px;border-radius: 5px;overflow: hidden}.ui-think__shimmer{position: relative}.ui-think__shimmer::after{content: attr(data-text);content: attr(data-text) / "";position: absolute;inset: 0;white-space: nowrap;color: transparent;background: linear-gradient(90deg, transparent 38%, var(--ui-tk-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;-webkit-background-clip: text;background-clip: text;animation: ui-think-sweep 1.6s linear infinite;pointer-events: none}@keyframes ui-think-in{from{opacity: 0;transform: translateY(6px);filter: blur(3px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-think-line{from{transform: scaleY(0)}to{transform: scaleY(1)}}@keyframes ui-think-chip{from{opacity: 0;transform: translateY(4px) scale(0.92)}to{opacity: 1;transform: none}}@keyframes ui-think-pulse{50%{transform: scale(0.7);opacity: 0.5}}@keyframes ui-think-pop{0%{transform: scale(0.5)}60%{transform: scale(1.12)}100%{transform: scale(1)}}@keyframes ui-think-draw{to{stroke-dashoffset: 0}}@keyframes ui-think-sweep{from{background-position: 100% 0}to{background-position: 0% 0}}@media (prefers-reduced-motion: reduce){.ui-think *, .ui-think *::before, .ui-think *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;animation-iteration-count: 1 !important;transition-duration: 1ms !important}.ui-think__shimmer::after{display: none}.ui-think__check path{stroke-dashoffset: 0}}:where(.dark, [data-theme="dark"]) .ui-think{--ui-tk-ink: #ededed;--ui-tk-text: #c4c4c4;--ui-tk-muted: #8f8f8f;--ui-tk-line: rgba(255, 255, 255, 0.1);--ui-tk-chip: #2a2a2d;--ui-tk-chip-hover: #313135;--ui-tk-shine: rgba(255, 255, 255, 0.95);--ui-tk-dot: #5c5c61;--ui-tk-tip-text: #121213;--ui-tk-focus: rgba(255, 255, 255, 0.3)}`;
export { OComponent as t };
