// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
const n = t_1();
const r = t();
const i = e => {
  if (Math.abs(e) >= 1000) {
    return `${+(e / 1000).toFixed(Math.abs(e) >= 10000 ? 0 : 1)}k`;
  }
  return `${Math.round(e)}`;
};
function a(e) {
  let t = e / 2 || 1;
  let n = 10 ** Math.floor(Math.log10(t));
  return ([1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10].find(e => e * n >= t) ?? 10) * n * 2;
}
function O1Component({
  title,
  value,
  delta,
  labels,
  tooltipLabels,
  series,
  format = i,
  footer,
  defaultIndex,
  className
}) {
  let [h, setH] = n.useState(null);
  let _ = h ?? defaultIndex ?? null;
  let [v, setV] = n.useState(_ ?? 0);
  if (_ !== null && _ !== v) {
    setV(_);
  }
  let labels_length = labels.length;
  let x = a(Math.max(...series.flatMap(e => e.values)));
  let S = e => {
    if (labels_length > 1) {
      return e / (labels_length - 1) * 100;
    }
    return 50;
  };
  let C = e => (1 - e / x) * 100;
  let w = e => {
    let t = e.currentTarget.getBoundingClientRect();
    let n = Math.min(1, Math.max(0, (e.clientX - t.left) / t.width));
    return Math.round(n * (labels_length - 1));
  };
  let onKeyDown = e => {
    let t = _ ?? (e.key === `ArrowLeft` ? labels_length : -1);
    if (e.key === `ArrowRight`) {
      setH(Math.min(labels_length - 1, t + 1));
    } else if (e.key === `ArrowLeft`) {
      setH(Math.max(0, t - 1));
    } else if (e.key === `Escape`) {
      setH(null);
    } else {
      return;
    }
    e.preventDefault();
  };
  let E = series.map(e => ({
    ...e,
    value: e.values[v] ?? 0
  })).sort((e, t) => t.value - e.value);
  let D = S(v) > 50;
  let O = [0, Math.round(labels_length / 2 - 0.5), labels_length - 1].filter((e, t, n) => n.indexOf(e) === t);
  return <><style href={`ui-kpi-chart-clean`} precedence={`default`}>{s}</style><section className={[`ui-kpic`, className].filter(Boolean).join(` `)}><div className={`ui-kpic__body`}><h3 className={`ui-kpic__title`}>{title}</h3><p className={`ui-kpic__value`}>{value}{delta !== undefined && delta !== 0 && <span className={`ui-kpic__delta`} data-trend={delta > 0 ? `up` : `down`}>{delta > 0 ? `+` : `−`}{format(Math.abs(delta))}</span>}</p><div className={`ui-kpic__chart`}><div className={`ui-kpic__yaxis`} aria-hidden={`true`}><span>{format(x)}</span><span>{format(x / 2)}</span><span>{format(0)}</span></div><div className={`ui-kpic__plot`} tabIndex={0} role={`group`} aria-label={`${title} chart – use the arrow keys to read the values per day`} onPointerMove={e => setH(w(e))} onPointerDown={e => setH(w(e))} onPointerLeave={() => setH(null)} onBlur={() => setH(null)} onKeyDown={onKeyDown}><span className={`ui-kpic__grid`} style={{
              top: `0%`
            }} /><span className={`ui-kpic__grid`} style={{
              top: `50%`
            }} /><span className={`ui-kpic__grid`} style={{
              top: `100%`
            }} /><svg className={`ui-kpic__lines`} viewBox={`0 0 100 100`} preserveAspectRatio={`none`} aria-hidden={`true`}>{series.map(e => <polyline key={e.label} points={e.values.map((e, t) => `${S(t)},${C(e)}`).join(` `)} stroke={e.color} vectorEffect={`non-scaling-stroke`} />)}</svg><div className={`ui-kpic__marker`} data-open={_ !== null || undefined} aria-hidden={`true`}><span className={`ui-kpic__guide`} style={{
                left: `${S(v)}%`
              }} />{series.map(e => <span key={e.label} className={`ui-kpic__dot`} style={{
                left: `${S(v)}%`,
                top: `${C(e.values[v] ?? 0)}%`,
                background: e.color
              }} />)}</div><div className={`ui-kpic__tooltip`} data-open={_ !== null || undefined} data-side={D ? `left` : `right`} style={{
              left: `${S(v)}%`
            }} role={`status`} aria-live={`polite`}><p className={`ui-kpic__date`}>{(tooltipLabels ?? labels)[v]}</p><ul>{E.map(e => <li key={e.label}><span className={`ui-kpic__swatch`} style={{
                    background: e.color
                  }} /><span className={`ui-kpic__label`}>{e.label}</span><span className={`ui-kpic__num`}>{format(e.value)}</span></li>)}</ul></div></div><div className={`ui-kpic__xaxis`} aria-hidden={`true`}>{O.map(e => <span key={e} style={{
              left: `${S(e)}%`
            }} data-edge={e === 0 ? `start` : e === labels_length - 1 ? `end` : undefined}>{labels[e]}</span>)}</div></div></div>{footer && <p className={`ui-kpic__footer`}>{footer}</p>}</section></>;
}
var s = `.ui-kpic{--ui-kpic-card: #ffffff;--ui-kpic-pop: #ffffff;--ui-kpic-ink: rgba(0, 0, 0, 0.88);--ui-kpic-strong: #000000;--ui-kpic-text: rgba(0, 0, 0, 0.61);--ui-kpic-muted: rgba(0, 0, 0, 0.45);--ui-kpic-line: rgba(0, 0, 0, 0.06);--ui-kpic-grid: rgba(0, 0, 0, 0.06);--ui-kpic-guide: rgba(0, 0, 0, 0.12);--ui-kpic-up: #1a9a52;--ui-kpic-up-bg: rgba(26, 154, 82, 0.08);--ui-kpic-down: #e5484d;--ui-kpic-down-bg: rgba(229, 72, 77, 0.08);--ui-kpic-focus: rgba(0, 96, 226, 0.35);--ui-kpic-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-kpic-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-kpic-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;container-type: inline-size;width: 100%;max-width: 460px;border-radius: 10px;background: var(--ui-kpic-card);box-shadow: var(--ui-kpic-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-kpic-ink);-webkit-font-smoothing: antialiased;font-variant-numeric: tabular-nums}.ui-kpic *, .ui-kpic *::before, .ui-kpic *::after{box-sizing: border-box}.ui-kpic__body{padding: 14px 16px 12px}.ui-kpic__title{margin: 0;overflow: hidden;font-size: 15px;font-weight: 500;line-height: 24px;color: var(--ui-kpic-strong);white-space: nowrap;text-overflow: ellipsis}.ui-kpic__value{display: flex;align-items: center;gap: 8px;margin: 6px 0 0;font-size: 24px;font-weight: 500;line-height: 32px;letter-spacing: -0.02em;color: var(--ui-kpic-strong)}.ui-kpic__delta{display: inline-flex;align-items: center;height: 20px;padding: 0 6px;border-radius: 5px;font-size: 12px;font-weight: 500;line-height: 16px;letter-spacing: 0}.ui-kpic__delta[data-trend="up"]{background: var(--ui-kpic-up-bg);color: var(--ui-kpic-up)}.ui-kpic__delta[data-trend="down"]{background: var(--ui-kpic-down-bg);color: var(--ui-kpic-down)}.ui-kpic__chart{display: grid;grid-template-columns: auto 1fr;grid-template-rows: 124px 16px;column-gap: 10px;row-gap: 8px;margin-top: 20px}.ui-kpic__yaxis{display: flex;flex-direction: column;justify-content: space-between;margin: -8px 0;font-size: 11px;line-height: 16px;text-align: right;color: var(--ui-kpic-muted)}.ui-kpic__plot{position: relative;touch-action: pan-y;outline: none;cursor: crosshair}.ui-kpic__plot:focus-visible{border-radius: 4px;outline: 2px solid var(--ui-kpic-focus);outline-offset: 4px}.ui-kpic__grid{position: absolute;left: 0;right: 0;height: 0;border-top: 0.5px solid var(--ui-kpic-grid)}.ui-kpic__lines{position: absolute;inset: 0;width: 100%;height: 100%;overflow: visible;animation: ui-kpic-draw 1100ms var(--ui-kpic-ease) both}.ui-kpic__lines polyline{fill: none;stroke-width: 1.5;stroke-linecap: round;stroke-linejoin: round}.ui-kpic__marker{position: absolute;inset: 0;pointer-events: none;opacity: 0;transition: opacity 140ms ease}.ui-kpic__marker[data-open]{opacity: 1}.ui-kpic__guide, .ui-kpic__dot{position: absolute;transition: left 90ms ease-out, top 90ms ease-out}.ui-kpic__guide{top: -4px;bottom: 0;width: 0;border-left: 1px solid var(--ui-kpic-guide);margin-left: -0.5px}.ui-kpic__dot{width: 8px;height: 8px;margin: -4px 0 0 -4px;border-radius: 50%;box-shadow: 0 0 0 2px var(--ui-kpic-card)}.ui-kpic__tooltip{position: absolute;top: -8px;z-index: 2;min-width: 160px;padding: 6px 10px 8px;border-radius: 10px;background: var(--ui-kpic-pop);box-shadow: var(--ui-kpic-shadow-pop);pointer-events: none;opacity: 0;transform: translateX(var(--ui-kpic-shift)) scale(0.98);transition: left 90ms ease-out, opacity 140ms ease, transform 180ms var(--ui-kpic-ease)}.ui-kpic__tooltip[data-side="right"]{--ui-kpic-shift: 14px;transform-origin: left top}.ui-kpic__tooltip[data-side="left"]{--ui-kpic-shift: calc(-100% - 14px);transform-origin: right top}.ui-kpic__tooltip[data-open]{opacity: 1;transform: translateX(var(--ui-kpic-shift))}.ui-kpic__date{margin: 0;font-size: 13px;line-height: 20px;font-weight: 500;color: var(--ui-kpic-strong);white-space: nowrap}.ui-kpic__tooltip ul{display: grid;gap: 0;margin: 4px 0 0;padding: 4px 0 0;border-top: 0.5px solid var(--ui-kpic-line);list-style: none}.ui-kpic__tooltip li{display: flex;align-items: center;gap: 8px;font-size: 12px;line-height: 20px;color: var(--ui-kpic-text)}.ui-kpic__swatch{flex: none;width: 8px;height: 8px;border-radius: 2px}.ui-kpic__label{flex: 1;white-space: nowrap}.ui-kpic__num{padding-left: 16px;color: var(--ui-kpic-ink)}.ui-kpic__xaxis{position: relative;grid-column: 2;font-size: 11px;line-height: 16px;color: var(--ui-kpic-muted)}.ui-kpic__xaxis span{position: absolute;top: 0;white-space: nowrap;transform: translateX(-50%)}.ui-kpic__xaxis span[data-edge="start"]{transform: none}.ui-kpic__xaxis span[data-edge="end"]{transform: translateX(-100%)}.ui-kpic__footer{margin: 0;padding: 10px 16px;border-top: 0.5px solid var(--ui-kpic-line);font-size: 12px;line-height: 16px;color: var(--ui-kpic-muted)}@keyframes ui-kpic-draw{from{clip-path: inset(-10% 100% -10% 0)}to{clip-path: inset(-10% -2% -10% 0)}}@container (max-width: 360px){.ui-kpic__body{padding: 12px 12px 10px}.ui-kpic__chart{grid-template-rows: 112px 16px;column-gap: 8px}.ui-kpic__footer{padding: 10px 12px}.ui-kpic__tooltip{min-width: 144px}.ui-kpic__num{padding-left: 12px}}@media (prefers-reduced-motion: reduce){.ui-kpic__lines{animation: none}.ui-kpic__marker, .ui-kpic__guide, .ui-kpic__dot, .ui-kpic__tooltip{transition: none}}:where(.dark, [data-theme="dark"]) .ui-kpic{--ui-kpic-card: #1c1c1e;--ui-kpic-pop: #252527;--ui-kpic-ink: rgba(255, 255, 255, 0.9);--ui-kpic-strong: #ffffff;--ui-kpic-text: rgba(255, 255, 255, 0.62);--ui-kpic-muted: rgba(255, 255, 255, 0.46);--ui-kpic-line: rgba(255, 255, 255, 0.08);--ui-kpic-grid: rgba(255, 255, 255, 0.08);--ui-kpic-guide: rgba(255, 255, 255, 0.2);--ui-kpic-up: #3ec27a;--ui-kpic-up-bg: rgba(62, 194, 122, 0.14);--ui-kpic-down: #ff6b70;--ui-kpic-down-bg: rgba(229, 72, 77, 0.14);--ui-kpic-focus: rgba(77, 141, 255, 0.5);--ui-kpic-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-kpic-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 28px -10px rgba(0, 0, 0, 0.6)}`;
const labels = [`Mar 3`, `Mar 4`, `Mar 5`, `Mar 6`, `Mar 7`, `Mar 8`, `Mar 9`];
const tooltipLabels = [`Mon, Mar 3`, `Tue, Mar 4`, `Wed, Mar 5`, `Thu, Mar 6`, `Fri, Mar 7`, `Sat, Mar 8`, `Sun, Mar 9`];
const u = [`#2f6bff`, `#ec4899`, `#8b5cf6`, `#14b8a6`, `#a3a3a3`];
const d = [`Organic`, `Paid ads`, `Referral`, `Email`, `Direct`];
const series = (e => e.map((values, t) => ({
  label: d[t],
  color: u[t],
  values
})))([[4200, 4700, 3900, 4600, 5400, 5100, 5900], [3600, 3300, 4400, 4800, 4000, 4500, 4200], [1800, 2300, 2000, 1500, 2400, 2200, 2700], [1200, 1100, 1700, 2100, 1600, 1300, 1500], [600, 900, 700, 800, 1000, 1400, 1100]]);
const format = e => {
  if (e >= 1000) {
    return `$${+(e / 1000).toFixed(1)}k`;
  }
  return `$${Math.round(e)}`;
};
function MComponent() {
  return <div className={`kpi-demo`}><O1Component title={`Revenue`} value={`$96.4k`} delta={7900} format={format} labels={labels} tooltipLabels={tooltipLabels} series={series} footer={`Top 5 channels`} /></div>;
}
export { MComponent as default };
