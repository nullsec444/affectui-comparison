import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo.clean-CykqoJC9.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e) => typeof e == `number` ? e : e.getTime();
var a = (e) => String(e).padStart(2, `0`);
var o = (e) => {
  let t = Math.max(0, Math.floor(e / 1e3));
  if (t < 60) return `${t}s`;
  let n4 = Math.floor(t / 60);
  return n4 < 60 ? `${n4}m ${a(t % 60)}s` : `${Math.floor(n4 / 60)}h ${a(n4 % 60)}m`;
};
var s = (e) => `${(Math.max(0, e) / 1e3).toFixed(1)}s`;
var c = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
var l = () => typeof navigator < `u` && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
var u = `cubic-bezier(0.32, 0.72, 0.24, 1)`;
var d = { fill: `none`, stroke: `currentColor`, strokeWidth: 1.4, strokeLinecap: `round`, strokeLinejoin: `round` };
var f = () => (0, r.jsxs)(`svg`, { width: `14`, height: `14`, viewBox: `0 0 14 14`, "aria-hidden": `true`, children: [(0, r.jsx)(`path`, { d: `M7 1.2c.4 2.9 1.9 4.4 4.8 4.8-2.9.4-4.4 1.9-4.8 4.8C6.6 7.9 5.1 6.4 2.2 6 5.1 5.6 6.6 4.1 7 1.2Z`, fill: `currentColor` }), (0, r.jsx)(`circle`, { cx: `11.6`, cy: `11.4`, r: `1.1`, fill: `currentColor`, opacity: `0.55` })] });
var p = ({ status: e }) => (0, r.jsxs)(`span`, { className: `ui-stc__step-icon`, "data-status": e, "aria-hidden": `true`, children: [e === `done` && (0, r.jsxs)(`svg`, { width: `16`, height: `16`, viewBox: `0 0 16 16`, children: [(0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `6.5`, fill: `currentColor` }), (0, r.jsx)(`path`, { d: `m5.4 8.2 1.8 1.8 3.4-3.7`, fill: `none`, stroke: `#fff`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round` })] }), e === `active` && (0, r.jsxs)(`svg`, { width: `16`, height: `16`, viewBox: `0 0 16 16`, children: [(0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `5.8`, fill: `none`, stroke: `currentColor`, strokeOpacity: `0.2`, strokeWidth: `1.6` }), (0, r.jsx)(`path`, { d: `M8 2.2a5.8 5.8 0 0 1 5.8 5.8`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.6`, strokeLinecap: `round` })] }), e === `pending` && (0, r.jsx)(`svg`, { width: `16`, height: `16`, viewBox: `0 0 16 16`, children: (0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `5.8`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.2`, strokeDasharray: `2 2.2` }) })] });
var m = () => (0, r.jsxs)(`svg`, { width: `16`, height: `16`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [(0, r.jsx)(`rect`, { x: `4.2`, y: `3.4`, width: `2.6`, height: `9.2`, rx: `0.9`, fill: `currentColor` }), (0, r.jsx)(`rect`, { x: `9.2`, y: `3.4`, width: `2.6`, height: `9.2`, rx: `0.9`, fill: `currentColor` })] });
var h = () => (0, r.jsx)(`svg`, { width: `16`, height: `16`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M5 3.6v8.8c0 .6.6.9 1.1.6l6.6-4.4a.7.7 0 0 0 0-1.2L6.1 3c-.5-.3-1.1 0-1.1.6Z`, fill: `currentColor` }) });
var g = () => (0, r.jsx)(`svg`, { width: `12`, height: `12`, viewBox: `0 0 12 12`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M6.9 1 2.6 6.6h3l-.5 4.4 4.3-5.6h-3L6.9 1Z`, fill: `currentColor` }) });
var _ = () => (0, r.jsx)(`svg`, { width: `12`, height: `12`, viewBox: `0 0 12 12`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `m3.4 3.4 5.2 5.2M8.6 3.4 3.4 8.6`, ...d }) });
var v = () => (0, r.jsx)(`svg`, { width: `16`, height: `16`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M8 12.6V3.6M4.2 7.2 8 3.4l3.8 3.8`, ...d, strokeWidth: 1.6 }) });
var y = () => (0, r.jsx)(`svg`, { width: `12`, height: `12`, viewBox: `0 0 12 12`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `m2.8 6.2 2 2 4.4-4.6`, ...d, strokeWidth: 1.5 }) });
var b = () => (0, r.jsx)(`svg`, { width: `12`, height: `12`, viewBox: `0 0 12 12`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M3 2.4v3.4c0 .9.7 1.6 1.6 1.6h4.6M7.6 5.6l1.8 1.8-1.8 1.8`, ...d, strokeWidth: 1.2 }) });
function x({ title: e, agent: t, steps: a2, queue: d2, status: x2 = `running`, startedAt: C2, onQueue: w2, onInterrupt: T2, onRemove: E2, draft: D2, onDraftChange: O2, onPause: k, onResume: A, placeholder: j = `Steer the agent\u2026`, className: M }) {
  let N = (0, n3.useId)(), P = (0, n3.useRef)(null), F = (0, n3.useRef)(null), I = (0, n3.useRef)(null), [L, ee] = (0, n3.useState)(``), R = D2 ?? L, z = (e2) => {
    ee(e2), O2?.(e2);
  }, [te, B] = (0, n3.useState)(``), [V, ne] = (0, n3.useState)(() => Date.now()), H = l() ? `\u2318` : `Ctrl`;
  (0, n3.useEffect)(() => {
    if (x2 !== `running`) return;
    let e2 = window.setInterval(() => ne(Date.now()), 100);
    return () => window.clearInterval(e2);
  }, [x2]);
  let re = (0, n3.useRef)(Date.now()), U = V - (C2 === void 0 ? re.current : i(C2)), W = (0, n3.useRef)(/* @__PURE__ */ new Map()), ie = (e2) => {
    if (e2.startedAt !== void 0) return V - i(e2.startedAt);
    let t2 = W.current.get(e2.id);
    return t2 === void 0 && W.current.set(e2.id, t2 = Date.now()), V - t2;
  }, ae = a2.filter((e2) => e2.status === `done`).length, G = x2 !== `done`, K = (0, n3.useRef)(/* @__PURE__ */ new Map()), q = (e2) => (t2) => {
    t2 ? K.current.set(e2, t2) : K.current.delete(e2);
  }, J = (0, n3.useRef)(/* @__PURE__ */ new Map()), Y = (0, n3.useRef)(0), X = JSON.stringify([a2.map((e2) => [e2.id, e2.status, e2.title, (e2.notes ?? []).map((e3) => e3.id)]), d2.map((e2) => e2.id)]), Z = (0, n3.useRef)(X);
  P.current && X !== Z.current && (J.current = new Map([...K.current].map(([e2, t2]) => [e2, t2.getBoundingClientRect()])), Y.current = F.current?.offsetHeight ?? 0), (0, n3.useLayoutEffect)(() => {
    if (Z.current === X || (Z.current = X, c())) return;
    let e2 = F.current;
    e2 && Y.current && Math.abs(e2.offsetHeight - Y.current) > 1 && e2.animate([{ height: `${Y.current}px` }, { height: `${e2.offsetHeight}px` }], { duration: 480, easing: u });
    for (let [e3, t2] of K.current) {
      let n4 = e3.slice(e3.indexOf(`:`) + 1), r2 = J.current.get(e3) ?? (e3.startsWith(`note:`) ? J.current.get(`queued:${n4}`) : void 0), i2 = t2.getBoundingClientRect();
      if (!r2) {
        t2.animate([{ opacity: 0, transform: `translateY(6px)` }, { opacity: 1, transform: `none` }], { duration: 360, easing: u });
        continue;
      }
      let a3 = r2.left - i2.left, o2 = r2.top - i2.top;
      if (Math.abs(a3) < 1 && Math.abs(o2) < 1) continue;
      let s2 = !J.current.has(e3);
      t2.animate([{ transform: `translate(${a3}px, ${o2}px)`, zIndex: 2 }, { transform: `none`, zIndex: 2 }], { duration: s2 ? 620 : 480, easing: u }), s2 && t2.setAttribute(`data-landed`, ``);
    }
  }, [X]);
  let Q = a2.flatMap((e2) => (e2.notes ?? []).filter((e3) => e3.picked).map((e3) => e3.id)).join(`|`), $ = (0, n3.useRef)(new Set(Q.split(`|`).filter(Boolean)));
  (0, n3.useEffect)(() => {
    for (let e2 of a2) for (let n4 of e2.notes ?? []) n4.picked && !$.current.has(n4.id) && ($.current.add(n4.id), B(`${t ?? `The agent`} picked up: ${n4.text}`));
  }, [Q]);
  let oe = (e2) => {
    let t2 = R.trim();
    t2 && G && (e2 ? T2?.(t2) : w2?.(t2), B(e2 ? `Interrupting: ${t2}` : `Queued for the next step: ${t2}`), z(``));
  }, se = (e2) => {
    e2.key === `Enter` && !e2.shiftKey && !e2.nativeEvent.isComposing ? (e2.preventDefault(), oe(e2.metaKey || e2.ctrlKey)) : e2.key === `Escape` && R && (e2.stopPropagation(), z(``));
  };
  (0, n3.useLayoutEffect)(() => {
    let e2 = I.current;
    e2 && (e2.style.height = `0px`, e2.style.height = `${Math.min(e2.scrollHeight, 60)}px`);
  }, [R]);
  let ce = x2 === `done` ? `Done in ${o(U)}` : x2 === `paused` ? `Paused` : `Running \xB7 ${o(U)}`;
  return (0, r.jsxs)(`div`, { ref: P, className: [`ui-stc`, M].filter(Boolean).join(` `), "data-status": x2, children: [(0, r.jsx)(`style`, { href: `ui-agent-steering-clean`, precedence: `default`, children: S }), (0, r.jsxs)(`div`, { ref: F, className: `ui-stc__card`, children: [(0, r.jsxs)(`header`, { className: `ui-stc__head`, children: [(0, r.jsx)(`span`, { className: `ui-stc__spark`, children: (0, r.jsx)(f, {}) }), (0, r.jsxs)(`div`, { className: `ui-stc__heading`, children: [(0, r.jsx)(`span`, { className: `ui-stc__title`, children: e }), (0, r.jsxs)(`span`, { className: `ui-stc__sub`, children: [t && (0, r.jsxs)(r.Fragment, { children: [t, (0, r.jsx)(`span`, { className: `ui-stc__dot`, "aria-hidden": `true`, children: `\xB7` })] }), x2 === `done` ? `${a2.length} steps` : `Step ${Math.min(ae + 1, a2.length)} of ${a2.length}`] })] }), (0, r.jsxs)(`span`, { className: `ui-stc__state`, "data-status": x2, children: [(0, r.jsx)(`span`, { className: `ui-stc__pulse`, "aria-hidden": `true` }), ce] }), x2 === `running` && k && (0, r.jsx)(`button`, { type: `button`, className: `ui-stc__icon-btn`, "aria-label": `Pause the run`, title: `Pause`, onClick: k, children: (0, r.jsx)(m, {}) }), x2 === `paused` && A && (0, r.jsx)(`button`, { type: `button`, className: `ui-stc__icon-btn`, "aria-label": `Resume the run`, title: `Resume`, onClick: A, children: (0, r.jsx)(h, {}) })] }), (0, r.jsx)(`ol`, { className: `ui-stc__plan`, "aria-label": `Plan`, children: a2.map((e2) => {
    let t2 = e2.status ?? `pending`;
    return (0, r.jsxs)(`li`, { ref: q(`step:${e2.id}`), className: `ui-stc__step`, "data-status": t2, "aria-current": t2 === `active` ? `step` : void 0, children: [(0, r.jsxs)(`div`, { className: `ui-stc__step-row`, children: [(0, r.jsx)(p, { status: t2 }), (0, r.jsx)(`span`, { className: `ui-stc__step-title`, children: e2.title }), (0, r.jsx)(`span`, { className: `ui-stc__step-time`, children: t2 === `done` && e2.duration !== void 0 ? s(e2.duration) : t2 === `active` && x2 === `running` ? s(ie(e2)) : `` })] }), (e2.notes ?? []).map((e3) => (0, r.jsxs)(`div`, { ref: q(`note:${e3.id}`), className: `ui-stc__note`, "data-picked": e3.picked ?? void 0, children: [(0, r.jsx)(b, {}), (0, r.jsx)(`span`, { className: `ui-stc__note-text`, children: e3.text }), e3.picked && (0, r.jsxs)(`span`, { className: `ui-stc__note-tag`, children: [(0, r.jsx)(y, {}), e3.picked === `now` ? `Interrupted` : `Picked up`] })] }, e3.id))] }, e2.id);
  }) }), d2.length > 0 && (0, r.jsxs)(`div`, { className: `ui-stc__queue`, ref: q(`queue:box`), children: [(0, r.jsxs)(`div`, { className: `ui-stc__label`, children: [`Queued for the next step `, (0, r.jsx)(`span`, { children: d2.length })] }), (0, r.jsx)(`ul`, { className: `ui-stc__queued`, children: d2.map((e2) => (0, r.jsxs)(`li`, { ref: q(`queued:${e2.id}`), className: `ui-stc__chip`, children: [(0, r.jsx)(`span`, { className: `ui-stc__chip-text`, children: e2.text }), T2 && G && (0, r.jsxs)(`button`, { type: `button`, className: `ui-stc__chip-btn`, title: `Apply now (${H}\u21B5)`, onClick: () => T2(e2.text, e2.id), children: [(0, r.jsx)(g, {}), `Now`] }), E2 && (0, r.jsx)(`button`, { type: `button`, className: `ui-stc__chip-x`, "aria-label": `Remove \u201C${e2.text}\u201D`, onClick: () => E2(e2.id), children: (0, r.jsx)(_, {}) })] }, e2.id)) })] }), (0, r.jsxs)(`div`, { className: `ui-stc__compose`, ref: q(`compose:box`), "data-disabled": G ? void 0 : ``, children: [(0, r.jsxs)(`div`, { className: `ui-stc__field`, onClick: (e2) => !e2.target.closest(`button`) && I.current?.focus({ preventScroll: true }), children: [(0, r.jsx)(`textarea`, { ref: I, id: `${N}-field`, rows: 1, value: R, disabled: !G, placeholder: G ? j : `The run has finished`, "aria-label": `Steer the agent`, "aria-describedby": `${N}-hint`, onChange: (e2) => z(e2.target.value), onKeyDown: se }), (0, r.jsx)(`button`, { type: `button`, className: `ui-stc__send`, "aria-label": `Queue for the next step`, disabled: !R.trim() || !G, onClick: () => oe(false), children: (0, r.jsx)(v, {}) })] }), (0, r.jsx)(`div`, { className: `ui-stc__hint`, id: `${N}-hint`, children: G ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(`span`, { children: [(0, r.jsx)(`kbd`, { children: `\u21B5` }), ` next step`] }), T2 && (0, r.jsxs)(`span`, { children: [(0, r.jsx)(`kbd`, { children: H }), (0, r.jsx)(`kbd`, { children: `\u21B5` }), ` interrupt now`] })] }) : (0, r.jsx)(`span`, { children: `Notes still in the queue were not used` }) })] })] }), (0, r.jsx)(`span`, { className: `ui-stc__sr`, "aria-live": `polite`, children: te })] });
}
var S = `.ui-stc{--ui-stc-card: #ffffff;--ui-stc-strong: #000000;--ui-stc-ink: rgba(0, 0, 0, 0.88);--ui-stc-text: rgba(0, 0, 0, 0.61);--ui-stc-muted: rgba(0, 0, 0, 0.45);--ui-stc-faint: rgba(0, 0, 0, 0.27);--ui-stc-icon: rgba(0, 0, 0, 0.447);--ui-stc-line: rgba(0, 0, 0, 0.06);--ui-stc-rail: rgba(0, 0, 0, 0.15);--ui-stc-wash: rgba(0, 0, 0, 0.03);--ui-stc-fill: rgba(0, 0, 0, 0.06);--ui-stc-solid: rgba(0, 0, 0, 0.88);--ui-stc-on-solid: #fcfcfc;--ui-stc-accent: rgba(0, 96, 226, 0.765);--ui-stc-accent-bg: rgba(0, 96, 226, 0.06);--ui-stc-amber: #d9930d;--ui-stc-green: #1a9a52;--ui-stc-focus: rgba(0, 96, 226, 0.35);--ui-stc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-stc-ease: cubic-bezier(0.32, 0.72, 0.24, 1);position: relative;box-sizing: border-box;width: 100%;max-width: 460px;container-type: inline-size;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;font-weight: 400;line-height: 20px;color: var(--ui-stc-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-stc *, .ui-stc *::before, .ui-stc *::after{box-sizing: border-box}:where(.ui-stc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-stc button:focus-visible{outline: 2px solid var(--ui-stc-focus);outline-offset: 1px}.ui-stc ol, .ui-stc ul{margin: 0;padding: 0;list-style: none}.ui-stc svg{display: block;flex: none}.ui-stc__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-stc__card{overflow: hidden;border-radius: 10px;background: var(--ui-stc-card);box-shadow: var(--ui-stc-shadow)}.ui-stc__head{display: flex;align-items: center;gap: 10px;min-width: 0;padding: 12px 12px 12px 14px}.ui-stc__spark{display: grid;flex: none;place-items: center;width: 16px;color: var(--ui-stc-accent)}.ui-stc[data-status="paused"] .ui-stc__spark{color: var(--ui-stc-amber)}.ui-stc[data-status="done"] .ui-stc__spark{color: var(--ui-stc-green)}.ui-stc__heading{display: grid;flex: 1;min-width: 0}.ui-stc__title{overflow: hidden;font-weight: 500;color: var(--ui-stc-strong);white-space: nowrap;text-overflow: ellipsis}.ui-stc__sub{overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-stc-muted);white-space: nowrap;text-overflow: ellipsis}.ui-stc__dot{margin: 0 6px;color: var(--ui-stc-faint)}.ui-stc__state{display: inline-flex;flex: none;align-items: center;gap: 7px;font-size: 12px;line-height: 16px;color: var(--ui-stc-text);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-stc__pulse{position: relative;width: 6px;height: 6px;border-radius: 50%;background: var(--ui-stc-accent)}.ui-stc__pulse::after{content: "";position: absolute;inset: -3px;border-radius: 50%;background: var(--ui-stc-accent);opacity: 0;animation: ui-stc-pulse 1600ms ease-out infinite}.ui-stc__state[data-status="paused"] .ui-stc__pulse{background: var(--ui-stc-amber)}.ui-stc__state[data-status="done"] .ui-stc__pulse{background: var(--ui-stc-green)}.ui-stc__state:not([data-status="running"]) .ui-stc__pulse::after{display: none}.ui-stc__icon-btn{display: grid;flex: none;place-items: center;width: 28px;height: 28px;border-radius: 6px;background: var(--ui-stc-card);box-shadow: var(--ui-stc-shadow);color: var(--ui-stc-icon);transition: color 160ms ease, background-color 160ms ease}.ui-stc__icon-btn:hover{color: var(--ui-stc-ink);background: var(--ui-stc-wash)}.ui-stc__plan{display: grid;grid-template-columns: minmax(0, 1fr);padding: 10px 14px 12px !important;border-top: 0.5px solid var(--ui-stc-line)}.ui-stc__step{position: relative;padding: 5px 0}.ui-stc__step:not(:last-child)::after{content: "";position: absolute;top: 25px;bottom: -3px;left: 7.5px;width: 0.5px;background: var(--ui-stc-rail)}.ui-stc__step-row{display: flex;align-items: center;gap: 10px;min-width: 0}.ui-stc__step-icon{display: grid;flex: none;place-items: center;width: 16px;height: 16px;color: var(--ui-stc-faint)}.ui-stc__step-icon[data-status="done"]{color: var(--ui-stc-accent);animation: ui-stc-pop 360ms var(--ui-stc-ease) both}.ui-stc__step-icon[data-status="active"]{color: var(--ui-stc-accent)}.ui-stc__step-icon[data-status="active"] svg{animation: ui-stc-spin 900ms linear infinite}.ui-stc__step-title{flex: 1;min-width: 0;overflow: hidden;color: var(--ui-stc-ink);white-space: nowrap;text-overflow: ellipsis;transition: color 240ms ease}.ui-stc__step[data-status="done"] .ui-stc__step-title{color: var(--ui-stc-text)}.ui-stc__step[data-status="pending"] .ui-stc__step-title{color: var(--ui-stc-muted)}.ui-stc[data-status="running"] .ui-stc__step[data-status="active"] .ui-stc__step-title{font-weight: 500;background: linear-gradient(90deg, var(--ui-stc-ink) 0%, var(--ui-stc-ink) 40%, var(--ui-stc-faint) 50%, var(--ui-stc-ink) 60%, var(--ui-stc-ink) 100%) 0 0 / 300% 100%;-webkit-background-clip: text;background-clip: text;color: transparent;animation: ui-stc-shimmer 2200ms linear infinite}.ui-stc__step[data-status="active"] .ui-stc__step-title{font-weight: 500}.ui-stc__step-time{flex: none;font-size: 12px;color: var(--ui-stc-faint);font-variant-numeric: tabular-nums}.ui-stc__note{display: flex;align-items: flex-start;gap: 6px;margin: 4px 0 2px 26px;padding: 4px 8px 4px 6px;border-radius: 6px;background: var(--ui-stc-wash);box-shadow: inset 0 0 0 0.5px var(--ui-stc-line);font-size: 12px;line-height: 16px;color: var(--ui-stc-ink)}.ui-stc__note > svg{margin-top: 2px;color: var(--ui-stc-muted)}.ui-stc__note-text{flex: 1;min-width: 0}.ui-stc__note-tag{display: inline-flex;flex: none;align-items: center;gap: 3px;color: var(--ui-stc-accent);font-weight: 500;white-space: nowrap}.ui-stc__note[data-landed]{animation: ui-stc-land 1400ms ease both}.ui-stc__queue{padding: 10px 12px 2px 14px;border-top: 0.5px solid var(--ui-stc-line)}.ui-stc__label{display: flex;align-items: center;gap: 6px;margin-bottom: 6px;font-size: 10px;font-weight: 500;line-height: 16px;letter-spacing: 0.5px;text-transform: uppercase;color: var(--ui-stc-muted)}.ui-stc__label span{display: grid;place-items: center;min-width: 16px;height: 16px;padding: 0 4px;border-radius: 4px;background: var(--ui-stc-fill);color: var(--ui-stc-text);letter-spacing: 0;font-variant-numeric: tabular-nums}.ui-stc__queued{display: grid;gap: 6px}.ui-stc__chip{position: relative;display: flex;align-items: center;gap: 6px;min-height: 32px;padding: 4px 4px 4px 10px;border-radius: 8px;background: var(--ui-stc-card);box-shadow: var(--ui-stc-shadow);color: var(--ui-stc-ink)}.ui-stc__chip::before{content: "";position: absolute;top: 8px;bottom: 8px;left: 0;width: 2px;border-radius: 0 2px 2px 0;background: var(--ui-stc-accent)}.ui-stc__chip-text{flex: 1;min-width: 0;font-size: 12.5px;line-height: 18px}.ui-stc__chip-btn{display: inline-flex;flex: none;align-items: center;gap: 4px;height: 24px;padding: 0 8px 0 6px;border-radius: 6px;font-size: 12px;font-weight: 500;color: var(--ui-stc-text);transition: background-color 160ms ease, color 160ms ease}.ui-stc__chip-btn:hover{background: var(--ui-stc-accent-bg);color: var(--ui-stc-accent)}.ui-stc__chip-x{display: grid;flex: none;place-items: center;width: 24px;height: 24px;border-radius: 6px;color: var(--ui-stc-faint);transition: background-color 160ms ease, color 160ms ease}.ui-stc__chip-x:hover{background: var(--ui-stc-wash);color: var(--ui-stc-ink)}.ui-stc__compose{padding: 10px 12px 10px 14px;border-top: 0.5px solid var(--ui-stc-line)}.ui-stc__field{display: flex;align-items: flex-end;gap: 8px;min-height: 36px;padding: 4px 4px 4px 10px;border-radius: 8px;background: var(--ui-stc-wash);box-shadow: inset 0 0 0 0.5px var(--ui-stc-line);cursor: text;transition: box-shadow 160ms ease, background-color 160ms ease}.ui-stc__field:focus-within{background: var(--ui-stc-card);box-shadow: inset 0 0 0 0.5px var(--ui-stc-rail), 0 0 0 3px var(--ui-stc-accent-bg)}.ui-stc__field textarea{flex: 1;min-width: 0;height: 20px;margin: 4px 0;padding: 0;border: 0;outline: none;background: none;font: inherit;color: var(--ui-stc-strong);resize: none}.ui-stc__field textarea::placeholder{color: var(--ui-stc-muted)}.ui-stc__field textarea:focus-visible{outline: none}.ui-stc__send{display: grid;flex: none;place-items: center;width: 28px;height: 28px;border-radius: 6px;background: var(--ui-stc-solid);color: var(--ui-stc-on-solid);transition: opacity 160ms ease, transform 160ms ease}.ui-stc__send:disabled{opacity: 0.18;cursor: default}.ui-stc__send:not(:disabled):active{transform: scale(0.94)}.ui-stc__hint{display: flex;flex-wrap: wrap;align-items: center;gap: 4px 14px;margin-top: 8px;font-size: 12px;line-height: 16px;color: var(--ui-stc-muted)}.ui-stc__hint > span{display: inline-flex;align-items: center;gap: 3px;white-space: nowrap}.ui-stc kbd{display: inline-grid;place-items: center;min-width: 16px;height: 16px;padding: 0 3px;border-radius: 4px;background: var(--ui-stc-card);box-shadow: var(--ui-stc-shadow);font: inherit;font-size: 10px;color: var(--ui-stc-text)}.ui-stc__compose[data-disabled] .ui-stc__field{opacity: 0.6;cursor: default}@keyframes ui-stc-spin{to{transform: rotate(360deg)}}@keyframes ui-stc-pop{from{opacity: 0;transform: scale(0.6)}}@keyframes ui-stc-pulse{from{opacity: 0.45;transform: scale(0.6)}to{opacity: 0;transform: scale(1.8)}}@keyframes ui-stc-shimmer{from{background-position: 100% 0}to{background-position: 0 0}}@keyframes ui-stc-land{0%, 30%{background-color: var(--ui-stc-accent-bg);box-shadow: inset 0 0 0 0.5px var(--ui-stc-focus)}}@container (max-width: 380px){.ui-stc__head{display: grid;grid-template-columns: auto minmax(0, 1fr) auto;column-gap: 10px;row-gap: 8px}.ui-stc__spark{grid-row: 1;align-self: center}.ui-stc__heading{grid-column: 2;grid-row: 1}.ui-stc__state{grid-column: 2;grid-row: 2;justify-self: start}.ui-stc__head > .ui-stc__icon-btn{grid-column: 3;grid-row: 1}.ui-stc__head{padding-left: 12px}.ui-stc__plan, .ui-stc__queue, .ui-stc__compose{padding-left: 12px;padding-right: 12px}}@media (pointer: coarse){.ui-stc__icon-btn, .ui-stc__send{width: 34px;height: 34px}.ui-stc__chip-btn, .ui-stc__chip-x{height: 30px}.ui-stc__chip-x{width: 30px}}@media (prefers-reduced-motion: reduce){.ui-stc *, .ui-stc *::before, .ui-stc *::after{animation: none !important;transition: none !important}.ui-stc[data-status="running"] .ui-stc__step[data-status="active"] .ui-stc__step-title{background: none;color: var(--ui-stc-ink)}}:where(.dark, [data-theme="dark"]) .ui-stc{--ui-stc-card: #1c1c1f;--ui-stc-strong: #ffffff;--ui-stc-ink: rgba(255, 255, 255, 0.9);--ui-stc-text: rgba(255, 255, 255, 0.62);--ui-stc-muted: rgba(255, 255, 255, 0.45);--ui-stc-faint: rgba(255, 255, 255, 0.28);--ui-stc-icon: rgba(255, 255, 255, 0.5);--ui-stc-line: rgba(255, 255, 255, 0.08);--ui-stc-rail: rgba(255, 255, 255, 0.16);--ui-stc-wash: rgba(255, 255, 255, 0.04);--ui-stc-fill: rgba(255, 255, 255, 0.08);--ui-stc-solid: rgba(255, 255, 255, 0.92);--ui-stc-on-solid: #141416;--ui-stc-accent: #5b9aff;--ui-stc-accent-bg: rgba(91, 154, 255, 0.12);--ui-stc-amber: #f5b638;--ui-stc-green: #3ecf8e;--ui-stc-focus: rgba(91, 154, 255, 0.45);--ui-stc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-stc__step-icon[data-status="done"] path{stroke: #1c1c1f}`;
var C = [{ id: `read`, title: `Read schema and 14 migrations` }, { id: `draft`, title: `Plan the split into accounts and profiles` }, { id: `write`, title: `Write migration 0042_split_users` }, { id: `dry`, title: `Dry run on staging` }, { id: `pr`, title: `Open a pull request for review` }];
var w = { read: 1400, draft: 4600, write: 5200, dry: 2600, pr: 1800 };
var T = { write: `Write migration 0042 for Postgres 16` };
var E = `Use Postgres 16 syntax \u2013 prod isn't on 17 yet`;
var D = `Keep the old users view for a week`;
function O() {
  let [e, t] = (0, n3.useState)(C), [i2, a2] = (0, n3.useState)([]), [o2, s2] = (0, n3.useState)(`running`), [c2, l2] = (0, n3.useState)(``), [u2, d2] = (0, n3.useState)(() => Date.now() - 12e4 - 6e3), f2 = (0, n3.useRef)(null), p2 = (0, n3.useRef)(true), m2 = (0, n3.useRef)([]), h2 = (0, n3.useRef)([]), g2 = (0, n3.useRef)(i2);
  g2.current = i2;
  let _2 = (0, n3.useRef)(e);
  _2.current = e;
  let v2 = (0, n3.useRef)(0), y2 = (e2, t2, n4) => {
    e2.current.push(window.setTimeout(t2, n4));
  }, b2 = (e2) => {
    e2.current.forEach((e3) => window.clearTimeout(e3)), e2.current = [];
  }, S2 = (e2) => f2.current?.querySelector(e2)?.click(), O2 = (e2) => {
    let n4 = _2.current;
    if (e2 >= n4.length) {
      s2(`done`), y2(p2.current ? m2 : h2, I, p2.current ? 3800 : 4200);
      return;
    }
    let r2 = n4[e2].id;
    t((t2) => t2.map((t3, n5) => n5 === e2 ? { ...t3, status: `active`, startedAt: Date.now() } : t3)), y2(h2, () => {
      let n5 = g2.current;
      t((t2) => t2.map((t3, r3) => r3 === e2 ? { ...t3, status: `done`, duration: Date.now() - k(t3.startedAt) } : r3 === e2 + 1 && n5.length ? { ...t3, title: T[t3.id] ?? t3.title, notes: [...t3.notes ?? [], ...n5.map((e3) => ({ ...e3, picked: `next` }))] } : t3)), n5.length && a2([]), O2(e2 + 1);
    }, w[r2] ?? 2e3);
  }, k = (e2) => e2 === void 0 ? Date.now() : typeof e2 == `number` ? e2 : e2.getTime(), A = (e2) => a2((t2) => [...t2, { id: `n${++v2.current}`, text: e2 }]), j = (e2, n4) => {
    let r2 = _2.current.findIndex((e3) => e3.status === `active`);
    if (r2 < 0) return A(e2);
    let i3 = { id: n4 ?? `n${++v2.current}`, text: e2, picked: `now` };
    n4 && a2((e3) => e3.filter((e4) => e4.id !== n4)), b2(h2), t((e3) => e3.map((e4, t2) => t2 === r2 ? { ...e4, notes: [...e4.notes ?? [], i3] } : e4)), y2(h2, () => O2(r2), 120);
  }, M = (e2) => a2((t2) => t2.filter((t3) => t3.id !== e2)), N = () => {
    b2(h2), s2(`paused`);
  }, P = () => {
    s2(`running`);
    let e2 = _2.current.findIndex((e3) => e3.status === `active`);
    y2(h2, () => O2(Math.max(0, e2)), 200);
  }, F = (e2, t2, n4) => {
    [...e2].forEach((n5, r2) => y2(m2, () => l2(e2.slice(0, r2 + 1)), t2 + r2 * 38)), n4 && y2(m2, n4, t2 + e2.length * 38 + 420);
  }, I = () => {
    if (b2(h2), b2(m2), t(C.map((e3, t2) => t2 === 0 ? { ...e3, status: `done`, duration: 1400 } : e3)), a2([]), l2(``), s2(`running`), d2(Date.now() - 12e4 - 6e3), y2(h2, () => O2(1), 200), !p2.current) return;
    F(E, 900, () => S2(`.ui-stc__send`));
    let e2 = 200 + w.draft;
    F(D, e2 + 900, () => S2(`.ui-stc__send`)), y2(m2, () => S2(`.ui-stc__chip-btn`), e2 + 900 + 1292 + 1400);
  };
  (0, n3.useEffect)(() => (I(), () => {
    b2(m2), b2(h2);
  }), []);
  let L = (e2) => {
    e2 && p2.current && (p2.current = false, b2(m2), l2(``));
  };
  return (0, r.jsx)(`div`, { ref: f2, className: `steer-demo`, onPointerDownCapture: (e2) => L(e2.nativeEvent.isTrusted), onKeyDownCapture: (e2) => L(e2.nativeEvent.isTrusted), children: (0, r.jsx)(x, { title: `Migrate users table`, agent: `Opus 5.5`, steps: e, queue: i2, status: o2, startedAt: u2, draft: c2, onDraftChange: l2, onQueue: A, onInterrupt: j, onRemove: M, onPause: N, onResume: P }) });
}

export {
  O
};
