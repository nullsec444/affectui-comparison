import {
  Fragment,
  jsx,
  jsxs,
  n
} from "./chunk-57INBORX.js";
import "./chunk-JTXQSSYA.js";
import "./chunk-CTH3ASD6.js";

// reconstructed/demo.clean-CUpZACNd.jsx
var t = n();
function NComponent({
  title = `What's changed`,
  period,
  icon,
  changes: changes2,
  className
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { href: `ui-change-summary-clean`, precedence: `default`, children: o }),
    /* @__PURE__ */ jsxs("section", { className: [`ui-csc`, className].filter(Boolean).join(` `), "aria-label": title, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-csc__head`, children: [
        /* @__PURE__ */ jsxs("span", { className: `ui-csc__title`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-csc__icon`, children: icon ?? /* @__PURE__ */ jsx(RComponent, {}) }),
          title
        ] }),
        period && /* @__PURE__ */ jsx("span", { className: `ui-csc__period`, children: period })
      ] }),
      /* @__PURE__ */ jsx("dl", { className: `ui-csc__list`, children: changes2.map((e, n2) => {
        let r = e.tone ?? `neutral`;
        let o2 = e.direction ?? (r === `bad` ? `down` : `up`);
        return /* @__PURE__ */ jsxs("div", { className: `ui-csc__row`, style: {
          animationDelay: `${120 + n2 * 70}ms`
        }, children: [
          /* @__PURE__ */ jsx("dt", { className: `ui-csc__label`, children: e.label }),
          /* @__PURE__ */ jsxs("dd", { className: `ui-csc__change`, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-csc__trend`, "data-tone": r, "aria-hidden": `true`, children: r === `neutral` ? /* @__PURE__ */ jsx(AComponent, {}) : /* @__PURE__ */ jsx(IComponent, { down: o2 === `down` }) }),
            /* @__PURE__ */ jsx("span", { className: `ui-csc__text`, children: e.change })
          ] })
        ] }, e.label);
      }) })
    ] })
  ] });
}
var RComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, width: `16`, height: `16`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.1`, strokeLinecap: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M2.5 4h4M2.5 8h8M6.5 12h7M9.5 4h1` }) });
var IComponent = ({
  down
}) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 12 12`, width: `12`, height: `12`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.25`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: down ? /* @__PURE__ */ jsx("path", { d: `M6 2.5v7M3 6.5l3 3 3-3` }) : /* @__PURE__ */ jsx("path", { d: `M6 9.5v-7M3 5.5l3-3 3 3` }) });
var AComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 12 12`, width: `12`, height: `12`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.25`, strokeLinecap: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M3 6h6` }) });
var o = `
/* Colors and motion as variables \u2013 override them on .ui-csc */
.ui-csc {
  --ui-csc-card: #ffffff;
  --ui-csc-ink: rgba(0, 0, 0, 0.88);
  --ui-csc-strong: #000000;
  --ui-csc-text: rgba(0, 0, 0, 0.61);
  --ui-csc-muted: rgba(0, 0, 0, 0.45);
  --ui-csc-icon: rgba(0, 0, 0, 0.447);
  --ui-csc-line: rgba(0, 0, 0, 0.06);
  --ui-csc-wash: rgba(0, 0, 0, 0.015);
  --ui-csc-good: #1a9a52;
  --ui-csc-good-fill: rgba(26, 154, 82, 0.08);
  --ui-csc-bad: #e5484d;
  --ui-csc-bad-fill: rgba(229, 72, 77, 0.08);
  --ui-csc-neutral-fill: rgba(0, 0, 0, 0.04);
  /* Strokes are shadows: a 0.5px hairline plus a soft lift */
  --ui-csc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-csc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  width: 100%;
  max-width: 480px;
  container-type: inline-size;
  overflow: hidden;
  border-radius: 10px;
  background: var(--ui-csc-card);
  box-shadow: var(--ui-csc-shadow);
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: var(--ui-csc-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-csc *, .ui-csc *::before, .ui-csc *::after { box-sizing: border-box; }
:where(.ui-csc) svg { display: block; flex: none; }

/* Heading row: icon + title, the period on the right */
.ui-csc__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  height: 44px;
  padding: 0 16px;
}
.ui-csc__title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  font-weight: 500;
  white-space: nowrap;
  color: var(--ui-csc-strong);
}
.ui-csc__icon { display: grid; place-items: center; flex: none; width: 16px; height: 16px; color: var(--ui-csc-icon); }
.ui-csc__period { flex: none; font-size: 12px; line-height: 16px; color: var(--ui-csc-muted); }

/* One row per metric, each under a hairline */
.ui-csc__list { margin: 0; }
.ui-csc__row {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  align-items: center;
  gap: 16px;
  min-height: 48px;
  padding: 0 16px;
  border-top: 0.5px solid var(--ui-csc-line);
  animation: ui-csc-in 520ms var(--ui-csc-ease) both;
  transition: background-color 140ms ease;
}
.ui-csc__row:hover { background: var(--ui-csc-wash); }
.ui-csc__label {
  overflow: hidden;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--ui-csc-ink);
}
.ui-csc__change {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  margin: 0;
  color: var(--ui-csc-text);
}
.ui-csc__text { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }

/* Trend mark: a small tinted square, no strokes */
.ui-csc__trend {
  display: grid;
  place-items: center;
  flex: none;
  width: 20px;
  height: 20px;
  border-radius: 5px;
}
.ui-csc__trend[data-tone="good"] { background: var(--ui-csc-good-fill); color: var(--ui-csc-good); }
.ui-csc__trend[data-tone="bad"] { background: var(--ui-csc-bad-fill); color: var(--ui-csc-bad); }
.ui-csc__trend[data-tone="neutral"] { background: var(--ui-csc-neutral-fill); color: var(--ui-csc-icon); }

/* Narrow: each metric stacks above its change, so the text wraps instead of being cut off */
@container (max-width: 400px) {
  .ui-csc__head { padding: 0 14px; }
  .ui-csc__row { grid-template-columns: minmax(0, 1fr); gap: 4px; padding: 10px 14px; }
  .ui-csc__label, .ui-csc__text { white-space: normal; }
  .ui-csc__change { align-items: flex-start; }
}
/* Touch screens: a little more room per row */
@media (pointer: coarse) {
  .ui-csc__row { min-height: 52px; }
}

@keyframes ui-csc-in {
  from { opacity: 0; transform: translateY(4px); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-csc__row { animation: none; transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-csc {
  --ui-csc-card: #1c1c1e;
  --ui-csc-ink: rgba(255, 255, 255, 0.9);
  --ui-csc-strong: #ffffff;
  --ui-csc-text: rgba(255, 255, 255, 0.62);
  --ui-csc-muted: rgba(255, 255, 255, 0.46);
  --ui-csc-icon: rgba(255, 255, 255, 0.5);
  --ui-csc-line: rgba(255, 255, 255, 0.08);
  --ui-csc-wash: rgba(255, 255, 255, 0.025);
  --ui-csc-good: #3ec27a;
  --ui-csc-good-fill: rgba(62, 194, 122, 0.14);
  --ui-csc-bad: #f2777b;
  --ui-csc-bad-fill: rgba(229, 72, 77, 0.14);
  --ui-csc-neutral-fill: rgba(255, 255, 255, 0.08);
  --ui-csc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
}
`;
var changes = [{
  label: `Active users`,
  change: `Up 6.1% to 18.2K`,
  tone: `good`
}, {
  label: `Activation`,
  change: `Climbed to 41%, up 3 pts`,
  tone: `good`
}, {
  label: `Churn`,
  change: `Down to 2.1% from 2.6%`,
  tone: `good`,
  direction: `down`
}, {
  label: `Support tickets`,
  change: `Up 14% to 312`,
  tone: `bad`,
  direction: `up`
}];
function CComponent() {
  return /* @__PURE__ */ jsx("div", { className: `change-demo`, children: /* @__PURE__ */ jsx(NComponent, { period: `This week`, changes }) });
}
export {
  CComponent as default
};
