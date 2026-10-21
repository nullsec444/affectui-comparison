import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = (e)=>{
    if (Math.abs(e) >= 1000) {
        return `${+(e / 1000).toFixed(Math.abs(e) >= 10000 ? 0 : 1)}k`;
    }
    return `${Math.round(e)}`;
};
function a(e) {
    let t = e / 2 || 1;
    let n = 10 ** Math.floor(Math.log10(t));
    return ([
        1,
        1.5,
        2,
        2.5,
        3,
        4,
        5,
        6,
        8,
        10
    ].find((e)=>e * n >= t) ?? 10) * n * 2;
}
function OComponent({ title, value, delta, labels, tooltipLabels, series, format = i, footer, defaultIndex, className }) {
    let [h, setH] = n.useState(null);
    let _ = h ?? defaultIndex ?? null;
    let [v, setV] = n.useState(_ ?? 0);
    if (_ !== null && _ !== v) {
        setV(_);
    }
    let labels_length = labels.length;
    let x = a(Math.max(...series.flatMap((e)=>e.values)));
    let S = (e)=>{
        if (labels_length > 1) {
            return e / (labels_length - 1) * 100;
        }
        return 50;
    };
    let C = (e)=>(1 - e / x) * 100;
    let w = (e)=>{
        let t = e.currentTarget.getBoundingClientRect();
        let n = Math.min(1, Math.max(0, (e.clientX - t.left) / t.width));
        return Math.round(n * (labels_length - 1));
    };
    let onKeyDown = (e)=>{
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
    let E = series.map((e)=>({
            ...e,
            value: e.values[v] ?? 0
        })).sort((e, t)=>t.value - e.value);
    let D = S(v) > 50;
    let O = [
        0,
        Math.round(labels_length / 2 - 0.5),
        labels_length - 1
    ].filter((e, t, n)=>n.indexOf(e) === t);
    return <><style href={`ui-kpi-chart`} precedence={`default`}>{s}</style><section className={[
        `ui-kpi`,
        className
    ].filter(Boolean).join(` `)}><h3 className={`ui-kpi__title`}>{title}</h3><p className={`ui-kpi__value`}>{value}{delta !== undefined && delta !== 0 && <span className={`ui-kpi__delta`} data-trend={delta > 0 ? `up` : `down`}>{delta > 0 ? `+` : `−`}{format(Math.abs(delta))}</span>}</p><div className={`ui-kpi__chart`}><div className={`ui-kpi__yaxis`} aria-hidden={`true`}><span>{format(x)}</span><span>{format(x / 2)}</span><span>{format(0)}</span></div><div className={`ui-kpi__plot`} tabIndex={0} role={`group`} aria-label={`${title} chart – use the arrow keys to read the values per day`} onPointerMove={(e)=>setH(w(e))} onPointerDown={(e)=>setH(w(e))} onPointerLeave={()=>setH(null)} onBlur={()=>setH(null)} onKeyDown={onKeyDown}><span className={`ui-kpi__grid`} style={{
        top: `0%`
    }}/><span className={`ui-kpi__grid`} style={{
        top: `50%`
    }}/><span className={`ui-kpi__grid`} style={{
        top: `100%`
    }}/><svg className={`ui-kpi__lines`} viewBox={`0 0 100 100`} preserveAspectRatio={`none`} aria-hidden={`true`}>{series.map((e)=><polyline key={e.label} points={e.values.map((e, t)=>`${S(t)},${C(e)}`).join(` `)} stroke={e.color} vectorEffect={`non-scaling-stroke`}/>)}</svg><div className={`ui-kpi__marker`} data-open={_ !== null || undefined} aria-hidden={`true`}><span className={`ui-kpi__guide`} style={{
        left: `${S(v)}%`
    }}/>{series.map((e)=><span key={e.label} className={`ui-kpi__dot`} style={{
            left: `${S(v)}%`,
            top: `${C(e.values[v] ?? 0)}%`,
            background: e.color
        }}/>)}</div><div className={`ui-kpi__tooltip`} data-open={_ !== null || undefined} data-side={D ? `left` : `right`} style={{
        left: `${S(v)}%`
    }} role={`status`} aria-live={`polite`}><p className={`ui-kpi__date`}>{(tooltipLabels ?? labels)[v]}</p><ul>{E.map((e)=><li key={e.label}><span className={`ui-kpi__swatch`} style={{
            background: e.color
        }}/><span className={`ui-kpi__label`}>{e.label}</span><span className={`ui-kpi__num`}>{format(e.value)}</span></li>)}</ul></div></div><div className={`ui-kpi__xaxis`} aria-hidden={`true`}>{O.map((e)=><span key={e} style={{
            left: `${S(e)}%`
        }} data-edge={e === 0 ? `start` : e === labels_length - 1 ? `end` : undefined}>{labels[e]}</span>)}</div></div>{footer && <p className={`ui-kpi__footer`}>{footer}</p>}</section></>;
}
var s = `.ui-kpi{--ui-kpi-card: #ffffff;--ui-kpi-line: #ebebeb;--ui-kpi-grid: #f0f0f0;--ui-kpi-ink: #171717;--ui-kpi-muted: #8f8f8f;--ui-kpi-up: #1f8a4c;--ui-kpi-down: #e5484d;--ui-kpi-guide: #d9d9d9;--ui-kpi-label: #525252;--ui-kpi-ring-gap: #fff;--ui-kpi-ring: rgba(23, 23, 23, 0.25);--ui-kpi-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 8px 24px rgba(0, 0, 0, 0.035);--ui-kpi-tip-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04);--ui-kpi-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;width: 100%;max-width: 460px;padding: 20px 20px 18px;background: var(--ui-kpi-card);border: 1px solid var(--ui-kpi-line);border-radius: 20px;box-shadow: var(--ui-kpi-shadow);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-kpi-ink);-webkit-font-smoothing: antialiased;font-variant-numeric: tabular-nums}.ui-kpi *, .ui-kpi *::before, .ui-kpi *::after{box-sizing: border-box}.ui-kpi__title{margin: 0;font-size: 14px;font-weight: 400;line-height: 20px;color: var(--ui-kpi-muted)}.ui-kpi__value{display: flex;align-items: baseline;gap: 10px;margin: 8px 0 0;font-size: 28px;font-weight: 500;line-height: 34px;letter-spacing: -0.02em}.ui-kpi__delta{font-size: 14px;font-weight: 450;letter-spacing: 0}.ui-kpi__delta[data-trend="up"]{color: var(--ui-kpi-up)}.ui-kpi__delta[data-trend="down"]{color: var(--ui-kpi-down)}.ui-kpi__chart{display: grid;grid-template-columns: auto 1fr;grid-template-rows: 116px 20px;column-gap: 12px;row-gap: 8px;margin-top: 24px}.ui-kpi__yaxis{display: flex;flex-direction: column;justify-content: space-between;margin: -9px 0;font-size: 12px;line-height: 18px;text-align: right;color: var(--ui-kpi-muted)}.ui-kpi__plot{position: relative;touch-action: pan-y;outline: none;cursor: crosshair}.ui-kpi__plot:focus-visible{border-radius: 4px;box-shadow: 0 0 0 4px var(--ui-kpi-ring-gap), 0 0 0 6px var(--ui-kpi-ring)}.ui-kpi__grid{position: absolute;left: 0;right: 0;height: 1px;background: var(--ui-kpi-grid)}.ui-kpi__lines{position: absolute;inset: 0;width: 100%;height: 100%;overflow: visible;animation: ui-kpi-draw 1100ms var(--ui-kpi-ease) both}.ui-kpi__lines polyline{fill: none;stroke-width: 2;stroke-linecap: round;stroke-linejoin: round}.ui-kpi__marker{position: absolute;inset: 0;pointer-events: none;opacity: 0;transition: opacity 160ms ease}.ui-kpi__marker[data-open]{opacity: 1}.ui-kpi__guide, .ui-kpi__dot{position: absolute;transition: left 220ms var(--ui-kpi-ease), top 220ms var(--ui-kpi-ease)}.ui-kpi__guide{top: -4px;bottom: 0;width: 1px;margin-left: -0.5px;background: var(--ui-kpi-guide)}.ui-kpi__dot{width: 10px;height: 10px;margin: -5px 0 0 -5px;border-radius: 50%;box-shadow: 0 0 0 2px var(--ui-kpi-card)}.ui-kpi__tooltip{position: absolute;top: -12px;z-index: 2;min-width: 176px;padding: 10px 12px 12px;background: var(--ui-kpi-card);border: 1px solid var(--ui-kpi-line);border-radius: 12px;box-shadow: var(--ui-kpi-tip-shadow);pointer-events: none;opacity: 0;transform: translateX(var(--ui-kpi-shift)) scale(0.97);transition: left 220ms var(--ui-kpi-ease), opacity 160ms ease, transform 220ms var(--ui-kpi-ease)}.ui-kpi__tooltip[data-side="right"]{--ui-kpi-shift: 14px;transform-origin: left top}.ui-kpi__tooltip[data-side="left"]{--ui-kpi-shift: calc(-100% - 14px);transform-origin: right top}.ui-kpi__tooltip[data-open]{opacity: 1;transform: translateX(var(--ui-kpi-shift))}.ui-kpi__date{margin: 0 0 6px;font-size: 12px;line-height: 18px;color: var(--ui-kpi-muted)}.ui-kpi__tooltip ul{display: grid;gap: 4px;margin: 0;padding: 0;list-style: none}.ui-kpi__tooltip li{display: flex;align-items: center;gap: 8px;font-size: 13px;line-height: 20px}.ui-kpi__swatch{flex: none;width: 10px;height: 2px;border-radius: 1px}.ui-kpi__label{flex: 1;white-space: nowrap;color: var(--ui-kpi-label)}.ui-kpi__num{padding-left: 16px;font-weight: 500}.ui-kpi__xaxis{position: relative;grid-column: 2;font-size: 12px;line-height: 20px;color: var(--ui-kpi-muted)}.ui-kpi__xaxis span{position: absolute;top: 0;white-space: nowrap;transform: translateX(-50%)}.ui-kpi__xaxis span[data-edge="start"]{transform: none}.ui-kpi__xaxis span[data-edge="end"]{transform: translateX(-100%)}.ui-kpi__footer{margin: 16px 0 0;font-size: 13px;line-height: 18px;color: var(--ui-kpi-muted)}@keyframes ui-kpi-draw{from{clip-path: inset(-10% 100% -10% 0)}to{clip-path: inset(-10% -2% -10% 0)}}@media (prefers-reduced-motion: reduce){.ui-kpi__lines{animation: none}.ui-kpi__marker, .ui-kpi__guide, .ui-kpi__dot, .ui-kpi__tooltip{transition: none}}:where(.dark, [data-theme="dark"]) .ui-kpi{--ui-kpi-card: #232326;--ui-kpi-line: rgba(255, 255, 255, 0.08);--ui-kpi-grid: rgba(255, 255, 255, 0.06);--ui-kpi-ink: #ededed;--ui-kpi-muted: #8f8f8f;--ui-kpi-up: #3dd68c;--ui-kpi-down: #ff6369;--ui-kpi-guide: rgba(255, 255, 255, 0.2);--ui-kpi-label: #c4c4c4;--ui-kpi-ring-gap: #232326;--ui-kpi-ring: rgba(237, 237, 237, 0.35);--ui-kpi-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.35);--ui-kpi-tip-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.5), 0 2px 6px rgba(0, 0, 0, 0.35), 0 0 0 0.5px rgba(255, 255, 255, 0.04)}:where(.dark, [data-theme="dark"]) .ui-kpi__tooltip{background: #2a2a2d;border-color: rgba(255, 255, 255, 0.1)}`;
export { OComponent as t };
