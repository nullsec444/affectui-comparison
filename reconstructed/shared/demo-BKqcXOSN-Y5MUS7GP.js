import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";
import "./chunk-JTXQSSYA.js";
import "./chunk-CTH3ASD6.js";

// reconstructed/demo-BKqcXOSN.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function IComponent({
  title = `Getting started`,
  steps: steps2,
  autoPlay = false,
  interval = 2200,
  onChange,
  className
}) {
  let [l, setL] = n3.useState(() => new Set(steps2.filter((e) => e.done).map((e) => e.id)));
  let [d, setD] = n3.useState(autoPlay);
  let steps_length = steps2.length;
  let l_size = l.size;
  let h = steps_length ? l_size / steps_length : 0;
  let g = (e) => setL((n4) => {
    let r2 = new Set(n4);
    if (r2.has(e)) {
      r2.delete(e);
    } else {
      r2.add(e);
    }
    onChange?.(steps2.map((e2) => ({
      ...e2,
      done: r2.has(e2.id)
    })));
    return r2;
  });
  n3.useEffect(() => {
    if (!d) {
      return;
    }
    let e = steps2.find((e2) => !l.has(e2.id));
    let n4 = window.setTimeout(() => {
      if (e) {
        g(e.id);
      } else {
        setL(new Set(steps2.filter((e2) => e2.done).map((e2) => e2.id)));
      }
    }, e ? interval : interval * 2);
    return () => clearTimeout(n4);
  }, [d, l]);
  return /* @__PURE__ */ jsxs("div", { className: [`ui-progress`, className].filter(Boolean).join(` `), "data-complete": l_size === steps_length || void 0, onPointerDown: () => setD(false), onKeyDown: () => setD(false), children: [
    /* @__PURE__ */ jsx("style", { href: `ui-progress-tracker`, precedence: `default`, children: a }),
    /* @__PURE__ */ jsxs("div", { className: `ui-progress__head`, children: [
      /* @__PURE__ */ jsx("h3", { className: `ui-progress__title`, children: title }),
      /* @__PURE__ */ jsxs("span", { className: `ui-progress__count`, "aria-hidden": `true`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-progress__digit`, children: l_size }, l_size),
        `/`,
        steps_length
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `ui-progress__bar`, role: `progressbar`, "aria-label": title, "aria-valuemin": 0, "aria-valuemax": steps_length, "aria-valuenow": l_size, "aria-valuetext": `${l_size} of ${steps_length} done`, children: /* @__PURE__ */ jsx("span", { className: `ui-progress__fill`, style: {
      transform: `scaleX(${h})`
    }, children: /* @__PURE__ */ jsx("span", { className: `ui-progress__shine` }, l_size) }) }),
    /* @__PURE__ */ jsx("ul", { className: `ui-progress__list`, children: steps2.map((e, t) => {
      let n4 = l.has(e.id);
      return /* @__PURE__ */ jsx("li", { style: {
        animationDelay: `${180 + t * 90}ms`
      }, children: /* @__PURE__ */ jsxs("button", { type: `button`, role: `checkbox`, "aria-checked": n4, className: `ui-progress__step`, onClick: () => g(e.id), children: [
        /* @__PURE__ */ jsx("span", { className: `ui-progress__check`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, children: /* @__PURE__ */ jsx("path", { d: `M6.5 12.5l3.5 3.5 7.5-8`, pathLength: 1 }) }) }),
        /* @__PURE__ */ jsx("span", { className: `ui-progress__label`, children: /* @__PURE__ */ jsx("span", { children: e.label }) }),
        e.icon && /* @__PURE__ */ jsx("span", { className: `ui-progress__icon`, "aria-hidden": `true`, children: e.icon })
      ] }) }, e.id);
    }) })
  ] });
}
var a = `
/* Colors and motion as variables \u2013 override them on .ui-progress (see Theming in the docs) */
.ui-progress {
  --ui-pg-card: #ffffff;
  --ui-pg-line: #e5e5e5;
  --ui-pg-ink: #171717;
  --ui-pg-muted: #a3a3a3;
  --ui-pg-ring: #8f8f8f;
  --ui-pg-track: #f0f0f0;
  --ui-pg-hover: #f7f7f7;
  --ui-pg-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ui-pg-pop: cubic-bezier(0.34, 1.56, 0.64, 1);

  box-sizing: border-box;
  width: 100%;
  max-width: 360px;
  padding: 22px 16px 14px;
  background: var(--ui-pg-card);
  border: 1px solid var(--ui-pg-line);
  border-radius: 20px;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.03),
    0 8px 24px rgba(0, 0, 0, 0.035);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-pg-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-progress *,
.ui-progress *::before,
.ui-progress *::after {
  box-sizing: border-box;
}

.ui-progress__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 0 6px;
}
.ui-progress__title {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.01em;
}
.ui-progress__count {
  font-size: 14px;
  color: var(--ui-pg-muted);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
/* The number rolls in from below whenever it changes */
.ui-progress__digit {
  display: inline-block;
  animation: ui-progress-roll 560ms var(--ui-pg-ease);
}

.ui-progress__bar {
  position: relative;
  height: 8px;
  margin: 16px 6px 12px;
  border-radius: 999px;
  background: var(--ui-pg-track);
  overflow: hidden;
}
.ui-progress__fill {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--ui-pg-ink);
  transform-origin: 0 50%;
  overflow: hidden;
  transition: transform 1100ms var(--ui-pg-ease);
}
.ui-progress__shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 30%, rgba(255, 255, 255, 0.28) 50%, transparent 70%) 0 0 / 220% 100%
    no-repeat;
  animation: ui-progress-shine 1400ms ease-out both;
}

.ui-progress__list {
  display: grid;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
}
/* On mount the card settles in, then the rows fade up one after another */
.ui-progress {
  animation: ui-progress-in 520ms var(--ui-pg-ease) both;
}
.ui-progress__list > li {
  position: relative;
  animation: ui-progress-row-in 640ms var(--ui-pg-ease) both;
}

.ui-progress__step {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin: 0;
  padding: 9px 6px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  font: inherit;
  font-size: 15px;
  line-height: 1.45;
  color: inherit;
  text-align: left;
  cursor: pointer;
  transition: background-color 160ms ease;
}
.ui-progress__step:hover {
  background: var(--ui-pg-hover);
}
.ui-progress__step:focus-visible {
  outline: 2px solid rgba(23, 23, 23, 0.22);
  outline-offset: 0;
}

/* Checkbox: the ring fills and pops, then the tick draws itself */
.ui-progress__check {
  position: relative;
  flex: none;
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  border: 1.5px solid var(--ui-pg-ring);
  border-radius: 50%;
  background: transparent;
  transition:
    background-color 220ms var(--ui-pg-ease),
    border-color 220ms var(--ui-pg-ease);
}
.ui-progress__check svg {
  width: 14px;
  height: 14px;
  fill: none;
  stroke: #ffffff;
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  transition: stroke-dashoffset 120ms ease-in;
}
.ui-progress__step[aria-checked="true"] .ui-progress__check {
  background: var(--ui-pg-ink);
  border-color: var(--ui-pg-ink);
  animation: ui-progress-pop 560ms var(--ui-pg-ease);
}
.ui-progress__step[aria-checked="true"] .ui-progress__check svg {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 420ms var(--ui-pg-ease) 160ms;
}

/* Label: grays out while a line strikes through it, line by line */
.ui-progress__label {
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 300ms ease;
}
.ui-progress__label > span {
  background: linear-gradient(currentColor, currentColor) 0 58% / 0% 1.5px no-repeat;
  transition: background-size 380ms var(--ui-pg-ease);
}
.ui-progress__step[aria-checked="true"] .ui-progress__label {
  color: var(--ui-pg-muted);
}
.ui-progress__step[aria-checked="true"] .ui-progress__label > span {
  background-size: 100% 1.5px;
  transition: background-size 620ms var(--ui-pg-ease) 220ms;
}

.ui-progress__icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 18px;
  height: 18px;
  transition: opacity 300ms ease;
}
.ui-progress__icon > svg {
  width: 100%;
  height: 100%;
}
.ui-progress__step[aria-checked="true"] .ui-progress__icon {
  opacity: 0.45;
}

@keyframes ui-progress-pop {
  0% { transform: scale(0.9); }
  60% { transform: scale(1.06); }
  100% { transform: scale(1); }
}
@keyframes ui-progress-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
}
@keyframes ui-progress-row-in {
  from {
    opacity: 0;
    filter: blur(3px);
    transform: translateY(8px);
  }
}
@keyframes ui-progress-roll {
  from { opacity: 0; transform: translateY(60%); }
  to { opacity: 1; transform: none; }
}
@keyframes ui-progress-shine {
  from { background-position: 120% 0; opacity: 1; }
  to { background-position: -20% 0; opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-progress,
  .ui-progress *,
  .ui-progress *::before,
  .ui-progress *::after {
    animation: none !important;
    transition-duration: 1ms !important;
    transition-delay: 0ms !important;
  }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-progress {
  --ui-pg-card: #232326;
  --ui-pg-line: rgba(255, 255, 255, 0.08);
  --ui-pg-ink: #ededed;
  --ui-pg-muted: #8f8f8f;
  --ui-pg-ring: #6b6b70;
  --ui-pg-track: rgba(255, 255, 255, 0.1);
  --ui-pg-hover: #2a2a2d;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.4),
    0 8px 24px rgba(0, 0, 0, 0.35);
}
/* The filled check is light in dark mode, so the tick turns dark */
:where(.dark, [data-theme="dark"]) .ui-progress__check svg { stroke: #121213; }
:where(.dark, [data-theme="dark"]) .ui-progress__shine {
  background-image: linear-gradient(90deg, transparent 30%, rgba(255, 255, 255, 0.7) 50%, transparent 70%);
}
:where(.dark, [data-theme="dark"]) .ui-progress__step:focus-visible { outline-color: rgba(237, 237, 237, 0.3); }
`;
var steps = [{
  id: `tools`,
  label: `Connect your tools`
}, {
  id: `notify`,
  label: `Turn on notifications`
}, {
  id: `updates`,
  label: `Catch up on blockers`
}, {
  id: `priorities`,
  label: `Summarize priorities`
}, {
  id: `project`,
  label: `Create a project`,
  done: true
}];
function SComponent() {
  return /* @__PURE__ */ jsx("div", { className: `progress-demo`, children: /* @__PURE__ */ jsx(IComponent, { steps, autoPlay: true }) });
}
export {
  SComponent as default
};
