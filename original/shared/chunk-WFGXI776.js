import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/component-LyBMd15F.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function i({ groups: e, value: t, defaultValue: i2 = {}, onChange: s, defaultOpen: c, title: l = `Filters`, hints: u = true, className: d }) {
  let [f, p] = (0, n3.useState)(i2), m = t ?? f, [h, g] = (0, n3.useState)(() => new Set(c ?? e.slice(0, 1).map((e2) => e2.id))), [_, v] = (0, n3.useState)(null), y = (0, n3.useRef)(null), b = (0, n3.useRef)(null), x = a(b), S = (e2) => {
    t === void 0 && p(e2), s?.(e2);
  }, C = (e2, t2) => m[e2]?.includes(t2) ?? false, w = (e2, t2) => {
    let n4 = m[e2] ?? [];
    S({ ...m, [e2]: n4.includes(t2) ? n4.filter((e3) => e3 !== t2) : [...n4, t2] });
  }, T = (e2) => g((t2) => {
    let n4 = new Set(t2);
    return n4.has(e2) ? n4.delete(e2) : n4.add(e2), n4;
  }), E = e.flatMap((e2) => e2.options.filter((t2) => C(e2.id, t2.id)).map((t2) => ({ group: e2, option: t2, label: `${e2.chipPrefix ?? ``}${t2.label}` }))), D = e.flatMap((e2) => [{ kind: `group`, group: e2 }, ...h.has(e2.id) ? e2.options.map((t2) => ({ kind: `option`, group: e2, option: t2 })) : []]), O = (e2) => e2.kind === `group` ? `g:${e2.group.id}` : `o:${e2.group.id}:${e2.option.id}`, k = (e2) => {
    v(e2), y.current?.querySelector(`[data-key="${CSS.escape(e2)}"]`)?.focus();
  };
  return (0, r.jsxs)(`div`, { className: [`ui-fm`, d].filter(Boolean).join(` `), children: [(0, r.jsx)(`style`, { href: `ui-filter-menu`, precedence: `default`, children: o }), (0, r.jsxs)(`div`, { className: `ui-fm__card`, children: [(0, r.jsxs)(`div`, { className: `ui-fm__head`, children: [(0, r.jsx)(`span`, { className: `ui-fm__title`, children: l }), (0, r.jsx)(`button`, { type: `button`, className: `ui-fm__clear`, disabled: E.length === 0, onClick: () => S({}), children: `Clear all` })] }), (0, r.jsx)(`div`, { className: `ui-fm__chips-outer`, ref: x, children: (0, r.jsx)(`div`, { className: `ui-fm__chips`, ref: b, "aria-live": `polite`, children: E.map((e2) => (0, r.jsxs)(`span`, { className: `ui-fm__chip`, children: [e2.label, (0, r.jsx)(`button`, { type: `button`, "aria-label": `Remove ${e2.label}`, onClick: () => w(e2.group.id, e2.option.id), children: (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M6.5 6.5l11 11M17.5 6.5l-11 11` }) }) })] }, `${e2.group.id}:${e2.option.id}`)) }) }), (0, r.jsx)(`div`, { className: `ui-fm__groups`, ref: y, onKeyDown: (e2) => {
    let t2 = D.findIndex((e3) => O(e3) === _), n4 = D[t2];
    if (e2.key === `ArrowDown` || e2.key === `ArrowUp`) {
      e2.preventDefault();
      let n5 = D[Math.max(0, Math.min(D.length - 1, t2 + (e2.key === `ArrowDown` ? 1 : -1)))] ?? D[0];
      k(O(n5));
    } else if (e2.key === `Home` || e2.key === `End`) e2.preventDefault(), k(O(D[e2.key === `Home` ? 0 : D.length - 1]));
    else if (n4 && (e2.key === `ArrowRight` || e2.key === `ArrowLeft`)) {
      e2.preventDefault();
      let t3 = n4.group.id;
      e2.key === `ArrowRight` && !h.has(t3) && T(t3), e2.key === `ArrowLeft` && (h.has(t3) && T(t3), k(`g:${t3}`));
    } else n4 && (e2.key === `Enter` || e2.key === ` `) && (e2.preventDefault(), n4.kind === `group` ? T(n4.group.id) : w(n4.group.id, n4.option.id));
  }, children: e.map((t2) => {
    let n4 = h.has(t2.id), i3 = m[t2.id]?.length ?? 0, a2 = `g:${t2.id}`;
    return (0, r.jsxs)(`section`, { className: `ui-fm__group`, "data-open": n4 ? `` : void 0, children: [(0, r.jsxs)(`button`, { type: `button`, className: `ui-fm__group-head`, "data-key": a2, tabIndex: _ === a2 || _ === null && t2 === e[0] ? 0 : -1, "aria-expanded": n4, "aria-controls": `${t2.id}-options`, onFocus: () => v(a2), onClick: () => T(t2.id), children: [(0, r.jsx)(`svg`, { className: `ui-fm__chevron`, viewBox: `0 0 24 24`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M6.5 9.5 12 15l5.5-5.5` }) }), (0, r.jsx)(`span`, { className: `ui-fm__group-label`, children: t2.label }), (0, r.jsx)(`span`, { className: `ui-fm__group-count`, children: t2.options.length }), (0, r.jsx)(`span`, { className: `ui-fm__group-picked`, "aria-live": `polite`, children: i3 > 0 ? `${i3} filter${i3 === 1 ? `` : `s`}` : `` })] }), (0, r.jsx)(`div`, { className: `ui-fm__panel`, id: `${t2.id}-options`, role: `group`, "aria-label": t2.label, children: (0, r.jsx)(`div`, { className: `ui-fm__panel-inner`, children: t2.options.map((e2) => {
      let i4 = `o:${t2.id}:${e2.id}`, a3 = C(t2.id, e2.id);
      return (0, r.jsxs)(`button`, { type: `button`, role: `checkbox`, "aria-checked": a3, className: `ui-fm__option`, "data-key": i4, tabIndex: n4 && _ === i4 ? 0 : -1, onFocus: () => v(i4), onClick: () => w(t2.id, e2.id), children: [(0, r.jsx)(`span`, { className: `ui-fm__box`, "aria-hidden": `true`, children: (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, children: (0, r.jsx)(`path`, { d: `m6 12.5 4 4 8-9` }) }) }), e2.label] }, e2.id);
    }) }) })] }, t2.id);
  }) })] }), u && (0, r.jsxs)(`div`, { className: `ui-fm__hints`, "aria-hidden": `true`, children: [(0, r.jsxs)(`span`, { className: `ui-fm__hint`, children: [(0, r.jsx)(`kbd`, { children: (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, children: (0, r.jsx)(`path`, { d: `M12 5v14m0 0-5-5m5 5 5-5` }) }) }), (0, r.jsx)(`kbd`, { children: (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, children: (0, r.jsx)(`path`, { d: `M12 19V5m0 0-5 5m5-5 5 5` }) }) }), `To navigate`] }), (0, r.jsxs)(`span`, { className: `ui-fm__hint`, children: [(0, r.jsx)(`kbd`, { children: (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, children: (0, r.jsx)(`path`, { d: `M18 6v6.5a2 2 0 0 1-2 2H7m0 0 3.5-3.5M7 14.5 10.5 18` }) }) }), `To select`] })] })] });
}
function a(e) {
  let t = (0, n3.useRef)(null);
  return (0, n3.useLayoutEffect)(() => {
    let n4 = t.current, r2 = e.current;
    if (!n4 || !r2) return;
    let i2 = () => {
      n4.style.height = `${r2.offsetHeight}px`;
    };
    i2();
    let a2 = new ResizeObserver(i2);
    a2.observe(r2);
    let o2 = requestAnimationFrame(() => n4.setAttribute(`data-smooth`, ``));
    return () => {
      a2.disconnect(), cancelAnimationFrame(o2);
    };
  }, [e]), t;
}
var o = `
.ui-fm {
  --ui-fm-tray: #f0f0f0;
  --ui-fm-card: #ffffff;
  --ui-fm-card-line: #e5e5e5;
  --ui-fm-ink: #171717;
  --ui-fm-text: #404040;
  --ui-fm-muted: #8f8f8f;
  --ui-fm-chip: #f3f3f3;
  --ui-fm-chip-hover: #ebebeb;
  --ui-fm-box: #f0f0f0;
  --ui-fm-box-line: #e3e3e3;
  --ui-fm-check: #ffffff;
  --ui-fm-row-hover: #f7f7f7;
  --ui-fm-kbd: #ffffff;
  --ui-fm-focus: #2f6bff;
  --ui-fm-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  --ui-fm-ease: cubic-bezier(0.22, 1, 0.36, 1);
  width: 100%;
  max-width: 420px;
  padding: 6px;
  border-radius: 24px;
  background: var(--ui-fm-tray);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-fm-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-fm *, .ui-fm *::before, .ui-fm *::after { box-sizing: border-box; }
.ui-fm button { font: inherit; color: inherit; margin: 0; cursor: pointer; -webkit-tap-highlight-color: transparent; }
.ui-fm button:focus-visible { outline: 2px solid var(--ui-fm-focus); outline-offset: 2px; }

.ui-fm__card {
  padding: 16px 16px 10px;
  border: 1px solid var(--ui-fm-card-line);
  border-radius: 20px;
  background: var(--ui-fm-card);
  box-shadow: var(--ui-fm-shadow);
}

/* ---------- Header ---------- */

.ui-fm__head { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 0 2px; }
.ui-fm__title { font-size: 15px; font-weight: 600; letter-spacing: -0.01em; }
.ui-fm__clear {
  padding: 4px 6px;
  margin-right: -6px !important;
  border: 0;
  border-radius: 8px;
  background: none;
  font-size: 13px;
  color: var(--ui-fm-muted) !important;
  transition: color 160ms ease, background-color 160ms ease, opacity 200ms ease;
}
.ui-fm__clear:hover:not(:disabled) { color: var(--ui-fm-ink) !important; background: var(--ui-fm-row-hover); }
.ui-fm__clear:disabled { opacity: 0.45; cursor: default; }

/* ---------- Chips ---------- */

.ui-fm__chips-outer { overflow: hidden; }
.ui-fm__chips-outer[data-smooth] { transition: height 320ms var(--ui-fm-ease); }
.ui-fm__chips { display: flex; flex-wrap: wrap; gap: 6px; padding-top: 12px; }
.ui-fm__chips:empty { padding-top: 0; }
.ui-fm__chip {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  height: 30px;
  padding: 0 4px 0 11px;
  border-radius: 10px;
  background: var(--ui-fm-chip);
  font-size: 13px;
  color: var(--ui-fm-text);
  white-space: nowrap;
  animation: ui-fm-chip-in 260ms var(--ui-fm-ease) both;
}
.ui-fm__chip button {
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: none;
  color: var(--ui-fm-muted);
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-fm__chip button:hover { background: var(--ui-fm-chip-hover); color: var(--ui-fm-ink); }
.ui-fm__chip svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; }

/* ---------- Groups ---------- */

.ui-fm__groups { display: grid; padding-top: 6px; }
.ui-fm__group-head {
  display: flex;
  align-items: center;
  gap: 7px;
  width: calc(100% + 12px);
  height: 36px;
  margin: 2px -6px 0 !important;
  padding: 0 8px 0 6px;
  border: 0;
  border-radius: 10px;
  background: none;
  text-align: left;
  transition: background-color 160ms ease;
}
.ui-fm__group-head:hover { background: var(--ui-fm-row-hover); }
.ui-fm__chevron {
  width: 16px;
  height: 16px;
  flex: none;
  fill: none;
  stroke: var(--ui-fm-text);
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform: rotate(-90deg);
  transition: transform 260ms var(--ui-fm-ease);
}
.ui-fm__group[data-open] .ui-fm__chevron { transform: none; }
.ui-fm__group-label { font-size: 14px; font-weight: 500; }
.ui-fm__group-count { font-size: 12.5px; color: var(--ui-fm-muted); font-variant-numeric: tabular-nums; }
.ui-fm__group-picked { margin-left: auto; font-size: 12.5px; color: var(--ui-fm-muted); }

.ui-fm__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 320ms var(--ui-fm-ease);
}
.ui-fm__group[data-open] .ui-fm__panel { grid-template-rows: 1fr; }
.ui-fm__panel-inner {
  min-height: 0;
  overflow: hidden;
  display: grid;
  gap: 1px;
  padding: 0 0 0;
  opacity: 0;
  transition: opacity 220ms ease, padding 320ms var(--ui-fm-ease);
}
.ui-fm__group[data-open] .ui-fm__panel-inner { opacity: 1; padding: 2px 0 6px; }

.ui-fm__option {
  display: flex;
  align-items: center;
  gap: 12px;
  width: calc(100% + 12px);
  height: 34px;
  margin: 0 -6px !important;
  padding: 0 6px;
  border: 0;
  border-radius: 10px;
  background: none;
  font-size: 14px;
  color: var(--ui-fm-text) !important;
  text-align: left;
  transition: background-color 160ms ease;
}
.ui-fm__option:hover { background: var(--ui-fm-row-hover); }
.ui-fm__option:focus-visible { outline-offset: -2px; }
.ui-fm__box {
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  flex: none;
  border-radius: 6px;
  background: var(--ui-fm-box);
  box-shadow: inset 0 0 0 1px var(--ui-fm-box-line);
  transition: background-color 180ms ease, box-shadow 180ms ease;
}
.ui-fm__box svg {
  width: 14px;
  height: 14px;
  fill: none;
  stroke: var(--ui-fm-check);
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  transition: stroke-dashoffset 260ms var(--ui-fm-ease);
}
.ui-fm__option[aria-checked="true"] .ui-fm__box { background: var(--ui-fm-ink); box-shadow: inset 0 0 0 1px var(--ui-fm-ink); }
.ui-fm__option[aria-checked="true"] .ui-fm__box svg { stroke-dashoffset: 0; }

/* ---------- Keyboard hints on the tray ---------- */

.ui-fm__hints { display: flex; justify-content: space-between; gap: 12px; padding: 10px 8px 4px; }
.ui-fm__hint { display: inline-flex; align-items: center; gap: 5px; font-size: 12.5px; color: var(--ui-fm-text); }
.ui-fm__hint kbd {
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: var(--ui-fm-kbd);
  box-shadow: 0 0 0 1px var(--ui-fm-card-line), 0 1px 1px rgba(0, 0, 0, 0.04);
}
.ui-fm__hint kbd:last-of-type { margin-right: 4px; }
.ui-fm__hint svg { width: 13px; height: 13px; fill: none; stroke: var(--ui-fm-text); stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round; }

@keyframes ui-fm-chip-in { from { opacity: 0; transform: scale(0.9); } }

@media (prefers-reduced-motion: reduce) {
  .ui-fm__chips-outer[data-smooth], .ui-fm__panel, .ui-fm__panel-inner, .ui-fm__chevron, .ui-fm__box svg { transition: none; }
  .ui-fm__chip { animation: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-fm {
  --ui-fm-tray: #161618;
  --ui-fm-card: #232326;
  --ui-fm-card-line: rgba(255, 255, 255, 0.08);
  --ui-fm-ink: #ededed;
  --ui-fm-text: #c4c4c4;
  --ui-fm-muted: #8f8f8f;
  --ui-fm-chip: #2a2a2d;
  --ui-fm-chip-hover: #313135;
  --ui-fm-box: #2a2a2d;
  --ui-fm-box-line: rgba(255, 255, 255, 0.1);
  --ui-fm-check: #121213;
  --ui-fm-row-hover: rgba(255, 255, 255, 0.05);
  --ui-fm-kbd: #232326;
  --ui-fm-focus: #6b95ff;
  --ui-fm-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}
`;

export {
  i
};
