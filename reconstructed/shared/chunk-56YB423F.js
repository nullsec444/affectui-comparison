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

// reconstructed/component-BUgiZiPt.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function IComponent({
  title = `Setup guide`,
  groups,
  onEdit,
  onClose,
  onChange,
  className
}) {
  let [h, setH] = n3.useState(() => new Set(groups.flatMap((e) => e.tasks.filter((e2) => e2.done).map((e2) => e2.id))));
  let _ = groups.find((e) => e.tasks.some((e2) => !h.has(e2.id)));
  let [v, setV] = n3.useState(_?.id ?? null);
  let [b, setB] = n3.useState(false);
  let S = groups.reduce((acc, group) => acc + group.tasks.length, 0);
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
      let e2 = groups.find((e3) => e3.tasks.some((e4) => !r2.has(e4.id)));
      window.setTimeout(() => setV(e2?.id ?? null), 420);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { href: `ui-setup-guide`, precedence: `default`, children: d }),
    /* @__PURE__ */ jsxs("section", { className: [`ui-sg`, className].filter(Boolean).join(` `), "aria-label": title, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-sg__head`, children: [
        /* @__PURE__ */ jsx("h3", { className: `ui-sg__title`, children: title }),
        /* @__PURE__ */ jsxs("div", { className: `ui-sg__actions`, children: [
          onEdit && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-sg__edit`, onClick: onEdit, children: `Edit` }),
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-sg__icon-btn`, "aria-label": b ? `Expand setup guide` : `Minimize setup guide`, "aria-expanded": !b, onClick: () => setB((e) => !e), children: b ? /* @__PURE__ */ jsx(S1Component, {}) : /* @__PURE__ */ jsx(OComponent, {}) }),
          onClose && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-sg__icon-btn`, "aria-label": `Close setup guide`, onClick: onClose, children: /* @__PURE__ */ jsx(C1Component, {}) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("span", { className: `ui-sg__track`, role: `progressbar`, "aria-label": `${title} progress`, "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": Math.round(C * 100), children: /* @__PURE__ */ jsx("span", { className: `ui-sg__fill`, style: {
        transform: `scaleX(${C})`
      } }) }),
      /* @__PURE__ */ jsx("div", { className: `ui-sg__body`, "data-hidden": b || void 0, children: /* @__PURE__ */ jsx("div", { className: `ui-sg__groups`, children: groups.map((e) => {
        let t = v === e.id;
        let n4 = e.tasks.every((e2) => h.has(e2.id));
        let i = e.tasks.find((e2) => !h.has(e2.id))?.id;
        let o = e.tasks.findIndex((e2) => e2.id === i);
        let id = `ui-sg-${e.id}`;
        return /* @__PURE__ */ jsxs("div", { className: `ui-sg__group`, "data-open": t || void 0, children: [
          /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-sg__group-head`, "aria-expanded": t, "aria-controls": id, onClick: () => setV(t ? null : e.id), children: [
            /* @__PURE__ */ jsx("span", { className: `ui-sg__group-title`, "data-done": n4 || void 0, children: e.title }),
            /* @__PURE__ */ jsx(AComponent, {})
          ] }),
          /* @__PURE__ */ jsx("div", { className: `ui-sg__panel`, id, inert: !t, children: /* @__PURE__ */ jsx("ul", { className: `ui-sg__tasks`, children: e.tasks.map((t2, n5) => {
            let i2 = h.has(t2.id);
            let disabled = !i2 && o !== -1 && n5 > o;
            let s = i2 ? `done` : disabled ? `locked` : `current`;
            return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-sg__task`, "data-state": s, disabled, "aria-pressed": i2, onClick: () => w(e, t2.id), children: [
              /* @__PURE__ */ jsx("span", { className: `ui-sg__mark`, "aria-hidden": `true`, children: s === `done` ? /* @__PURE__ */ jsx(LComponent, {}) : s === `locked` ? /* @__PURE__ */ jsx(UComponent, {}) : null }),
              /* @__PURE__ */ jsx("span", { className: `ui-sg__task-label`, children: t2.label })
            ] }) }, t2.id);
          }) }) })
        ] }, e.id);
      }) }) })
    ] })
  ] });
}
var AComponent = () => /* @__PURE__ */ jsx("svg", { className: `ui-sg__chevron`, viewBox: `0 0 16 16`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.6`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m4.5 6.25 3.5 3.5 3.5-3.5` }) });
var OComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M9.5 2.5v4h4M9.5 6.5l4.5-4.5M6.5 13.5v-4h-4M6.5 9.5 2 14` }) });
var S1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M10 2h4v4M14 2 9.5 6.5M6 14H2v-4M2 14l4.5-4.5` }) });
var C1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m3.5 3.5 9 9M12.5 3.5l-9 9` }) });
var LComponent = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `7`, fill: `currentColor` }),
  /* @__PURE__ */ jsx("path", { d: `m5 8.2 2 2 4-4.2`, fill: `none`, stroke: `#fff`, strokeWidth: `1.6`, strokeLinecap: `round`, strokeLinejoin: `round` })
] });
var UComponent = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.5`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `6` }),
  /* @__PURE__ */ jsx("path", { d: `m4 12 8-8` })
] });
var d = `.ui-sg{--ui-sg-card: #ffffff;--ui-sg-line: #ececec;--ui-sg-ink: #171717;--ui-sg-text: #262626;--ui-sg-muted: #a3a3a3;--ui-sg-icon: #737373;--ui-sg-track: #ececec;--ui-sg-accent: #2f6bff;--ui-sg-open: #f6f6f7;--ui-sg-dot: #e1e3e8;--ui-sg-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;width: 100%;max-width: 320px;padding: 16px 8px 8px;background: var(--ui-sg-card);border: 1px solid var(--ui-sg-line);border-radius: 20px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 8px 24px rgba(0, 0, 0, 0.035);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-sg-ink);-webkit-font-smoothing: antialiased}.ui-sg *, .ui-sg *::before, .ui-sg *::after{box-sizing: border-box}.ui-sg button{margin: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}.ui-sg button:focus-visible{outline: 2px solid var(--ui-sg-accent);outline-offset: 2px}.ui-sg__head{display: flex;align-items: center;justify-content: space-between;gap: 12px;padding: 0 8px}.ui-sg__title{margin: 0;font-size: 15px;font-weight: 600;line-height: 22px}.ui-sg__actions{display: flex;align-items: center;gap: 4px;margin-right: -4px}.ui-sg__edit{padding: 2px 6px;border-radius: 6px;font-size: 14px;line-height: 20px;color: var(--ui-sg-accent) !important;transition: opacity 160ms ease}.ui-sg__edit:hover{opacity: 0.75}.ui-sg__icon-btn{display: grid;place-items: center;width: 26px;height: 26px;border-radius: 7px;color: var(--ui-sg-icon) !important;transition: background-color 160ms ease, color 160ms ease}.ui-sg__icon-btn:hover{background: #f2f2f2 !important;color: var(--ui-sg-ink) !important}.ui-sg__icon-btn svg{width: 16px;height: 16px}.ui-sg__track{display: block;height: 5px;margin: 10px 8px 8px;overflow: hidden;border-radius: 3px;background: var(--ui-sg-track)}.ui-sg__fill{display: block;height: 100%;border-radius: inherit;background: var(--ui-sg-accent);transform-origin: left center;transition: transform 700ms var(--ui-sg-ease)}.ui-sg__body{display: grid;grid-template-rows: 1fr;transition: grid-template-rows 420ms var(--ui-sg-ease), opacity 260ms ease}.ui-sg__body[data-hidden]{grid-template-rows: 0fr;opacity: 0}.ui-sg__groups{min-height: 0;overflow: hidden}.ui-sg__group{border-radius: 12px;transition: background-color 260ms ease}.ui-sg__group[data-open]{background: var(--ui-sg-open)}.ui-sg__group-head{display: flex;align-items: center;justify-content: space-between;gap: 12px;width: 100%;padding: 11px 12px;border-radius: 12px;text-align: left}.ui-sg__group-title{position: relative;font-size: 14px;font-weight: 600;line-height: 20px;transition: color 300ms ease}.ui-sg__group-title::after{content: "";position: absolute;left: 0;right: 0;top: 52%;height: 1.5px;border-radius: 1px;background: currentColor;transform: scaleX(0);transform-origin: left center;transition: transform 420ms var(--ui-sg-ease)}.ui-sg__group-title[data-done]::after{transform: scaleX(1)}.ui-sg__chevron{flex: none;width: 16px;height: 16px;color: var(--ui-sg-icon);transition: transform 320ms var(--ui-sg-ease)}.ui-sg__group[data-open] .ui-sg__chevron{transform: rotate(180deg)}.ui-sg__panel{display: grid;grid-template-rows: 0fr;transition: grid-template-rows 380ms var(--ui-sg-ease)}.ui-sg__group[data-open] .ui-sg__panel{grid-template-rows: 1fr}.ui-sg__tasks{min-height: 0;overflow: hidden;margin: 0;padding: 0;list-style: none}.ui-sg__tasks li:last-child{padding-bottom: 8px}.ui-sg__task{display: flex;align-items: flex-start;gap: 12px;width: 100%;padding: 7px 12px;border-radius: 10px;text-align: left;opacity: 0;transform: translateY(-4px);transition: opacity 260ms ease, transform 320ms var(--ui-sg-ease), color 260ms ease}.ui-sg__group[data-open] .ui-sg__task{opacity: 1;transform: none;transition-delay: 80ms}.ui-sg__task[data-state="current"]{color: var(--ui-sg-text)}.ui-sg__task[data-state="current"]:hover .ui-sg__mark{background: #d3d7de}.ui-sg__task[data-state="locked"]{color: var(--ui-sg-muted);cursor: default}.ui-sg__task[data-state="done"]{color: var(--ui-sg-muted)}.ui-sg__mark{display: grid;place-items: center;flex: none;width: 16px;height: 16px;margin-top: 2px;border-radius: 50%;transition: background-color 200ms ease}.ui-sg__task[data-state="current"] .ui-sg__mark{background: var(--ui-sg-dot)}.ui-sg__task[data-state="locked"] .ui-sg__mark{color: #d4d4d4}.ui-sg__task[data-state="done"] .ui-sg__mark{color: var(--ui-sg-accent)}.ui-sg__mark svg{width: 16px;height: 16px}.ui-sg__task[data-state="done"] .ui-sg__mark svg{animation: ui-sg-pop 420ms var(--ui-sg-ease)}.ui-sg__task-label{font-size: 14px;line-height: 20px;text-decoration-line: line-through;text-decoration-color: transparent;text-decoration-thickness: 1.5px;transition: text-decoration-color 260ms ease}.ui-sg__task[data-state="done"] .ui-sg__task-label{text-decoration-color: currentColor}@keyframes ui-sg-pop{from{transform: scale(0.5);opacity: 0}}@media (prefers-reduced-motion: reduce){.ui-sg__fill, .ui-sg__body, .ui-sg__panel, .ui-sg__task, .ui-sg__chevron, .ui-sg__group-title::after{transition: none}.ui-sg__mark svg{animation: none !important}}:where(.dark, [data-theme="dark"]) .ui-sg{--ui-sg-card: #232326;--ui-sg-line: rgba(255, 255, 255, 0.08);--ui-sg-ink: #ededed;--ui-sg-text: #dcdcdc;--ui-sg-muted: #8f8f8f;--ui-sg-icon: #8f8f8f;--ui-sg-track: rgba(255, 255, 255, 0.1);--ui-sg-open: #2a2a2d;--ui-sg-dot: #3a3a3f;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.35)}:where(.dark, [data-theme="dark"]) .ui-sg__edit{color: #6b95ff !important}:where(.dark, [data-theme="dark"]) .ui-sg__icon-btn:hover{background: rgba(255, 255, 255, 0.06) !important}:where(.dark, [data-theme="dark"]) .ui-sg__task[data-state="current"]:hover .ui-sg__mark{background: #4a4a50}:where(.dark, [data-theme="dark"]) .ui-sg__task[data-state="locked"] .ui-sg__mark{color: #4a4a50}`;

export {
  IComponent
};
