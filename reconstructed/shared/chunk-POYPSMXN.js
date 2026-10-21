import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  Fragment,
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo.clean-DgcWwiZH.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function IComponent({
  title = `Setup guide`,
  groups: groups2,
  onEdit,
  onClose,
  onChange,
  className
}) {
  let [h, setH] = n3.useState(() => new Set(groups2.flatMap((e) => e.tasks.filter((e2) => e2.done).map((e2) => e2.id))));
  let _ = groups2.find((e) => e.tasks.some((e2) => !h.has(e2.id)));
  let [v, setV] = n3.useState(_?.id ?? null);
  let [b, setB] = n3.useState(false);
  let S = groups2.reduce((acc, group) => acc + group.tasks.length, 0);
  let C = S ? h.size / S : 0;
  let w = (e, n4) => {
    let r2 = new Set(h);
    if (r2.has(n4)) {
      r2.delete(n4);
    } else {
      r2.add(n4);
    }
    setH(r2);
    onChange?.([...r2]);
    if (e.tasks.every((e2) => r2.has(e2.id))) {
      let e2 = groups2.find((e3) => e3.tasks.some((e4) => !r2.has(e4.id)));
      window.setTimeout(() => setV(e2?.id ?? null), 420);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { href: `ui-setup-guide-clean`, precedence: `default`, children: d }),
    /* @__PURE__ */ jsxs("section", { className: [`ui-sgc`, className].filter(Boolean).join(` `), "aria-label": title, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-sgc__head`, children: [
        /* @__PURE__ */ jsx("h3", { className: `ui-sgc__title`, children: title }),
        /* @__PURE__ */ jsxs("div", { className: `ui-sgc__actions`, children: [
          onEdit && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-sgc__edit`, onClick: onEdit, children: `Edit` }),
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-sgc__icon-btn`, "aria-label": b ? `Expand setup guide` : `Minimize setup guide`, "aria-expanded": !b, onClick: () => setB((e) => !e), children: b ? /* @__PURE__ */ jsx(S1Component, {}) : /* @__PURE__ */ jsx(OComponent, {}) }),
          onClose && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-sgc__icon-btn`, "aria-label": `Close setup guide`, onClick: onClose, children: /* @__PURE__ */ jsx(C1Component, {}) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-sgc__progress`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-sgc__track`, role: `progressbar`, "aria-label": `${title} progress`, "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": Math.round(C * 100), children: /* @__PURE__ */ jsx("span", { className: `ui-sgc__fill`, style: {
          transform: `scaleX(${C})`
        } }) }),
        /* @__PURE__ */ jsxs("span", { className: `ui-sgc__count`, "aria-hidden": `true`, children: [
          h.size,
          `/`,
          S
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-sgc__body`, "data-hidden": b || void 0, children: /* @__PURE__ */ jsx("div", { className: `ui-sgc__groups`, children: groups2.map((e) => {
        let t = v === e.id;
        let n4 = e.tasks.every((e2) => h.has(e2.id));
        let i = e.tasks.find((e2) => !h.has(e2.id))?.id;
        let o = e.tasks.findIndex((e2) => e2.id === i);
        let id = `ui-sgc-${e.id}`;
        return /* @__PURE__ */ jsxs("div", { className: `ui-sgc__group`, "data-open": t || void 0, children: [
          /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-sgc__group-head`, "aria-expanded": t, "aria-controls": id, onClick: () => setV(t ? null : e.id), children: [
            /* @__PURE__ */ jsx("span", { className: `ui-sgc__group-title`, "data-done": n4 || void 0, children: e.title }),
            /* @__PURE__ */ jsx(AComponent, {})
          ] }),
          /* @__PURE__ */ jsx("div", { className: `ui-sgc__panel`, id, inert: !t, children: /* @__PURE__ */ jsx("ul", { className: `ui-sgc__tasks`, children: e.tasks.map((t2, n5) => {
            let i2 = h.has(t2.id);
            let disabled = !i2 && o !== -1 && n5 > o;
            let s = i2 ? `done` : disabled ? `locked` : `current`;
            return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-sgc__task`, "data-state": s, disabled, "aria-pressed": i2, onClick: () => w(e, t2.id), children: [
              /* @__PURE__ */ jsx("span", { className: `ui-sgc__mark`, "aria-hidden": `true`, children: s === `done` ? /* @__PURE__ */ jsx(LComponent, {}) : s === `locked` ? /* @__PURE__ */ jsx(UComponent, {}) : null }),
              /* @__PURE__ */ jsx("span", { className: `ui-sgc__task-label`, children: t2.label })
            ] }) }, t2.id);
          }) }) })
        ] }, e.id);
      }) }) })
    ] })
  ] });
}
var AComponent = () => /* @__PURE__ */ jsx("svg", { className: `ui-sgc__chevron`, viewBox: `0 0 16 16`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.3`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m4.5 6.25 3.5 3.5 3.5-3.5` }) });
var OComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.2`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M9.5 2.5v4h4M9.5 6.5l4.5-4.5M6.5 13.5v-4h-4M6.5 9.5 2 14` }) });
var S1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.2`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M10 2h4v4M14 2 9.5 6.5M6 14H2v-4M2 14l4.5-4.5` }) });
var C1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.2`, strokeLinecap: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m4 4 8 8M12 4l-8 8` }) });
var LComponent = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `7`, fill: `currentColor` }),
  /* @__PURE__ */ jsx("path", { d: `m5.2 8.2 1.9 1.9 3.7-3.9`, fill: `none`, stroke: `var(--ui-sgc-on-accent)`, strokeWidth: `1.4`, strokeLinecap: `round`, strokeLinejoin: `round` })
] });
var UComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.1`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `6.5`, strokeDasharray: `2 2` }) });
var d = `.ui-sgc{--ui-sgc-card: #ffffff;--ui-sgc-strong: #000000;--ui-sgc-ink: rgba(0, 0, 0, 0.88);--ui-sgc-text: rgba(0, 0, 0, 0.61);--ui-sgc-muted: rgba(0, 0, 0, 0.45);--ui-sgc-faint: rgba(0, 0, 0, 0.27);--ui-sgc-icon: rgba(0, 0, 0, 0.447);--ui-sgc-line: rgba(0, 0, 0, 0.06);--ui-sgc-fill: rgba(0, 0, 0, 0.06);--ui-sgc-ring: rgba(0, 0, 0, 0.2);--ui-sgc-wash: rgba(0, 0, 0, 0.03);--ui-sgc-open: rgba(0, 0, 0, 0.025);--ui-sgc-accent: rgba(0, 96, 226, 0.765);--ui-sgc-on-accent: #ffffff;--ui-sgc-focus: rgba(0, 96, 226, 0.35);--ui-sgc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-sgc-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;container-type: inline-size;width: 100%;max-width: 320px;border-radius: 10px;background: var(--ui-sgc-card);box-shadow: var(--ui-sgc-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;font-weight: 400;line-height: 20px;color: var(--ui-sgc-ink);-webkit-font-smoothing: antialiased}.ui-sgc *, .ui-sgc *::before, .ui-sgc *::after{box-sizing: border-box}:where(.ui-sgc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-sgc) svg{display: block;flex: none}.ui-sgc button:focus-visible{outline: 2px solid var(--ui-sgc-focus);outline-offset: 1px}.ui-sgc__head{display: flex;align-items: center;justify-content: space-between;gap: 12px;padding: 12px 10px 0 16px}.ui-sgc__title{overflow: hidden;min-width: 0;margin: 0;font-size: 15px;font-weight: 500;line-height: 24px;color: var(--ui-sgc-strong);white-space: nowrap;text-overflow: ellipsis}.ui-sgc__actions{display: flex;flex: none;align-items: center;gap: 2px}.ui-sgc__edit{height: 28px;padding: 0 8px;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-sgc-text);transition: background-color 100ms ease, color 100ms ease}.ui-sgc__edit:hover{background: var(--ui-sgc-wash);color: var(--ui-sgc-ink)}.ui-sgc__icon-btn{display: grid;place-items: center;width: 28px;height: 28px;border-radius: 6px;color: var(--ui-sgc-icon);transition: background-color 100ms ease, color 100ms ease}.ui-sgc__icon-btn:hover{background: var(--ui-sgc-wash);color: var(--ui-sgc-ink)}.ui-sgc__icon-btn svg{width: 16px;height: 16px}.ui-sgc__progress{display: flex;align-items: center;gap: 10px;padding: 8px 16px 12px}.ui-sgc__track{display: block;flex: 1;height: 4px;overflow: hidden;border-radius: 2px;background: var(--ui-sgc-fill)}.ui-sgc__fill{display: block;height: 100%;border-radius: inherit;background: var(--ui-sgc-accent);transform-origin: left center;transition: transform 700ms var(--ui-sgc-ease)}.ui-sgc__count{flex: none;font-size: 12px;line-height: 16px;font-variant-numeric: tabular-nums;color: var(--ui-sgc-muted)}.ui-sgc__body{display: grid;grid-template-rows: 1fr;transition: grid-template-rows 420ms var(--ui-sgc-ease), opacity 260ms ease}.ui-sgc__body[data-hidden]{grid-template-rows: 0fr;opacity: 0}.ui-sgc__groups{display: grid;gap: 2px;min-height: 0;overflow: hidden;padding: 0 4px;border-top: 0.5px solid var(--ui-sgc-line)}.ui-sgc__groups::before, .ui-sgc__groups::after{content: "";display: block;height: 2px}.ui-sgc__group{border-radius: 8px;transition: background-color 200ms ease}.ui-sgc__group[data-open]{background: var(--ui-sgc-open)}.ui-sgc__group-head{display: flex;align-items: center;justify-content: space-between;gap: 12px;width: 100%;padding: 8px 8px 8px 12px;border-radius: 8px;text-align: left;transition: background-color 100ms ease}.ui-sgc__group-head:hover{background: var(--ui-sgc-wash)}.ui-sgc__group[data-open] .ui-sgc__group-head:hover{background: none}.ui-sgc__group-title{position: relative;min-width: 0;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-sgc-strong);transition: color 300ms ease}.ui-sgc__group-title[data-done]{color: var(--ui-sgc-muted)}.ui-sgc__group-title::after{content: "";position: absolute;left: 0;right: 0;top: 52%;height: 1px;background: currentColor;transform: scaleX(0);transform-origin: left center;transition: transform 420ms var(--ui-sgc-ease)}.ui-sgc__group-title[data-done]::after{transform: scaleX(1)}.ui-sgc__chevron{width: 16px;height: 16px;color: var(--ui-sgc-icon);transition: transform 320ms var(--ui-sgc-ease)}.ui-sgc__group[data-open] .ui-sgc__chevron{transform: rotate(180deg)}.ui-sgc__panel{display: grid;grid-template-rows: 0fr;transition: grid-template-rows 380ms var(--ui-sgc-ease)}.ui-sgc__group[data-open] .ui-sgc__panel{grid-template-rows: 1fr}.ui-sgc__tasks{min-height: 0;overflow: hidden;margin: 0;padding: 0 4px;list-style: none}.ui-sgc__tasks li:last-child{padding-bottom: 6px}.ui-sgc__task{display: flex;align-items: flex-start;gap: 10px;width: 100%;padding: 6px 8px;border-radius: 6px;text-align: left;opacity: 0;transform: translateY(-4px);transition: opacity 260ms ease, transform 320ms var(--ui-sgc-ease), color 260ms ease, background-color 100ms ease}.ui-sgc__group[data-open] .ui-sgc__task{opacity: 1;transform: none;transition-delay: 80ms, 80ms, 0ms, 0ms}.ui-sgc__task:not(:disabled):hover{background: var(--ui-sgc-wash)}.ui-sgc__task[data-state="current"]{color: var(--ui-sgc-ink)}.ui-sgc__task[data-state="locked"]{color: var(--ui-sgc-muted);cursor: default}.ui-sgc__task[data-state="done"]{color: var(--ui-sgc-muted)}.ui-sgc__mark{display: grid;place-items: center;flex: none;width: 16px;height: 16px;margin-top: 2px;border-radius: 50%;transition: box-shadow 160ms ease}.ui-sgc__task[data-state="current"] .ui-sgc__mark{box-shadow: inset 0 0 0 1px var(--ui-sgc-ring)}.ui-sgc__task[data-state="current"]:hover .ui-sgc__mark{box-shadow: inset 0 0 0 1px var(--ui-sgc-accent)}.ui-sgc__task[data-state="locked"] .ui-sgc__mark{color: var(--ui-sgc-faint)}.ui-sgc__task[data-state="done"] .ui-sgc__mark{color: var(--ui-sgc-accent)}.ui-sgc__mark svg{width: 16px;height: 16px}.ui-sgc__task[data-state="done"] .ui-sgc__mark svg{animation: ui-sgc-pop 420ms var(--ui-sgc-ease)}.ui-sgc__task-label{min-width: 0;font-size: 13px;line-height: 20px;text-decoration-line: line-through;text-decoration-color: transparent;text-decoration-thickness: 1px;transition: text-decoration-color 260ms ease}.ui-sgc__task[data-state="done"] .ui-sgc__task-label{text-decoration-color: currentColor}@keyframes ui-sgc-pop{from{transform: scale(0.5);opacity: 0}}@container (max-width: 300px){.ui-sgc__head{padding-left: 12px}.ui-sgc__progress{padding-inline: 12px}.ui-sgc__group-head{padding-left: 10px}}@media (pointer: coarse){.ui-sgc__icon-btn{width: 36px;height: 36px}.ui-sgc__edit{height: 36px}.ui-sgc__group-head{padding-block: 12px}.ui-sgc__task{padding-block: 9px}}@media (prefers-reduced-motion: reduce){.ui-sgc__fill, .ui-sgc__body, .ui-sgc__panel, .ui-sgc__task, .ui-sgc__chevron, .ui-sgc__group, .ui-sgc__group-title::after{transition: none}.ui-sgc__mark svg{animation: none}}:where(.dark, [data-theme="dark"]) .ui-sgc{--ui-sgc-card: #1c1c1e;--ui-sgc-strong: #ffffff;--ui-sgc-ink: rgba(255, 255, 255, 0.9);--ui-sgc-text: rgba(255, 255, 255, 0.62);--ui-sgc-muted: rgba(255, 255, 255, 0.46);--ui-sgc-faint: rgba(255, 255, 255, 0.3);--ui-sgc-icon: rgba(255, 255, 255, 0.5);--ui-sgc-line: rgba(255, 255, 255, 0.08);--ui-sgc-fill: rgba(255, 255, 255, 0.08);--ui-sgc-ring: rgba(255, 255, 255, 0.26);--ui-sgc-wash: rgba(255, 255, 255, 0.04);--ui-sgc-open: rgba(255, 255, 255, 0.03);--ui-sgc-accent: #4d8dff;--ui-sgc-on-accent: #ffffff;--ui-sgc-focus: rgba(77, 141, 255, 0.5);--ui-sgc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4)}`;
var groups = [{
  id: `workspace`,
  title: `Set up your workspace`,
  tasks: [{
    id: `name`,
    label: `Choose a workspace name`
  }, {
    id: `invite`,
    label: `Invite your teammates to collaborate`
  }, {
    id: `calendar`,
    label: `Connect your calendar`
  }]
}, {
  id: `billing`,
  title: `Set up billing`,
  tasks: [{
    id: `card`,
    label: `Add a payment method`
  }, {
    id: `plan`,
    label: `Choose a plan`
  }]
}, {
  id: `verify`,
  title: `Verify your account`,
  tasks: [{
    id: `email`,
    label: `Confirm your email address`,
    done: true
  }]
}];
function PComponent() {
  let [key, setKey] = n3.useState(0);
  return /* @__PURE__ */ jsx("div", { className: `setup-demo`, children: /* @__PURE__ */ jsx(IComponent, { groups, onEdit: () => {
  }, onClose: () => setKey((e) => e + 1) }, key) });
}

export {
  PComponent
};
