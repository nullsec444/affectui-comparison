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

// reconstructed/demo-9sHHhTyA.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [{
  id: `todo`,
  label: `To do`,
  tone: `violet`
}, {
  id: `progress`,
  label: `In progress`,
  tone: `amber`
}, {
  id: `review`,
  label: `In review`,
  tone: `blue`
}, {
  id: `done`,
  label: `Done`,
  tone: `green`
}];
var a = (name) => name.trim().split(/\s+/).slice(0, 2).map((e) => e.charAt(0).toUpperCase()).join(``);
var o = (name) => [...name].reduce((acc, item) => (acc * 31 + item.charCodeAt(0)) % 360, 7);
function s(e, t, n4, r2) {
  let i2 = (e2) => {
    let t2 = e2 * Math.PI * 2 - Math.PI / 2;
    return `${(r2 + n4 * Math.cos(t2)).toFixed(2)} ${(r2 + n4 * Math.sin(t2)).toFixed(2)}`;
  };
  return `M ${i2(e)} A ${n4} ${n4} 0 ${+(t - e > 0.5)} 1 ${i2(t)}`;
}
function C1Component({
  tone
}) {
  let t = {
    stroke: `currentColor`,
    strokeWidth: 1.5,
    strokeLinecap: `round`,
    strokeLinejoin: `round`
  };
  return /* @__PURE__ */ jsxs("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, children: [
    (tone === `gray` || tone === `violet`) && /* @__PURE__ */ jsx("circle", { cx: `6`, cy: `6`, r: `4.25`, ...t, strokeDasharray: `2.2 2.25` }),
    tone === `amber` && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("circle", { cx: `6`, cy: `6`, r: `4.25`, ...t }),
      /* @__PURE__ */ jsx("path", { d: `M6 3.4a2.6 2.6 0 0 1 0 5.2V3.4Z`, fill: `currentColor` })
    ] }),
    tone === `blue` && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("path", { d: `M1.2 6S3 2.7 6 2.7 10.8 6 10.8 6 9 9.3 6 9.3 1.2 6 1.2 6Z`, ...t }),
      /* @__PURE__ */ jsx("circle", { cx: `6`, cy: `6`, r: `1.4`, fill: `currentColor` })
    ] }),
    tone === `green` && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("circle", { cx: `6`, cy: `6`, r: `4.25`, ...t }),
      /* @__PURE__ */ jsx("path", { d: `m4.1 6.1 1.3 1.3 2.5-2.7`, ...t })
    ] }),
    tone === `red` && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("circle", { cx: `6`, cy: `6`, r: `4.25`, ...t }),
      /* @__PURE__ */ jsx("path", { d: `M6 3.8v2.6M6 8.2v.01`, ...t })
    ] })
  ] });
}
var L1Component = () => /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M2.5 6h7M6.5 3l3 3-3 3`, stroke: `currentColor`, strokeWidth: `1.4`, strokeLinecap: `round`, strokeLinejoin: `round` }) });
var U1Component = () => /* @__PURE__ */ jsxs("svg", { width: `16`, height: `16`, viewBox: `0 0 16 16`, fill: `none`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("circle", { className: `ui-pc__ring`, cx: `8`, cy: `8`, r: `6.3` }),
  /* @__PURE__ */ jsx("circle", { className: `ui-pc__disc`, cx: `8`, cy: `8`, r: `7` }),
  /* @__PURE__ */ jsx("path", { className: `ui-pc__tick`, d: `m5.2 8.2 1.9 1.9 3.7-4` })
] });
function D1Component({
  member
}) {
  return /* @__PURE__ */ jsx("span", { className: `ui-pc__avatar`, style: {
    "--ui-pc-hue": o(member.name)
  }, children: member.avatar ? /* @__PURE__ */ jsx("img", { src: member.avatar, alt: `` }) : a(member.name) });
}
function F1Component({
  title,
  tasks: tasks2,
  onTasksChange,
  statuses = i,
  status,
  onStatusChange,
  due,
  members: members2 = [],
  action,
  hint,
  trigger = `hover`,
  open,
  defaultOpen = false,
  onOpenChange,
  className
}) {
  let C = n3.useId();
  let [w, setW] = n3.useState(defaultOpen);
  let E = open ?? w;
  let [te, setTe] = n3.useState({});
  let [re, setRe] = n3.useState();
  let O = tasks2.map((e) => ({
    ...e,
    done: onTasksChange ? !!e.done : te[e.id] ?? !!e.done
  }));
  let length = O.filter((e) => e.done).length;
  let A = statuses.find((e) => e.id === (onStatusChange ? status : re ?? status)) ?? statuses[0];
  let [j, setJ] = n3.useState(null);
  let [N, setN] = n3.useState(null);
  let [F, setF] = n3.useState(null);
  let [L, setL] = n3.useState(false);
  let z = N ?? F;
  let B = (e) => !z || e.assignee === z;
  let VRef = n3.useRef(null);
  let HRef = n3.useRef(0);
  let U = (e) => {
    window.clearTimeout(HRef.current);
    if (e !== E) {
      if (!e) {
        setL(false);
        setJ(null);
        setN(null);
      }
      setW(e);
      onOpenChange?.(e);
    }
  };
  let W = (e, t) => {
    window.clearTimeout(HRef.current);
    HRef.current = window.setTimeout(() => U(e), t);
  };
  n3.useEffect(() => () => window.clearTimeout(HRef.current), []);
  let G = trigger === `hover`;
  let onPointerEnter = (e) => {
    if (G && e.pointerType === `mouse`) {
      W(true, 90);
    }
  };
  let onPointerLeave = (e) => {
    if (G && e.pointerType === `mouse`) {
      W(false, 220);
    }
  };
  n3.useEffect(() => {
    if (!E) {
      return;
    }
    let e = (e2) => {
      if (!VRef.current?.contains(e2.target)) {
        U(false);
      }
    };
    document.addEventListener(`pointerdown`, e);
    return () => document.removeEventListener(`pointerdown`, e);
  });
  let onKeyDown = (e) => {
    if (e.key === `Escape` && E) {
      e.stopPropagation();
      if (L) {
        return setL(false);
      }
      U(false);
      VRef.current?.querySelector(`.ui-pc__toggle`)?.focus({
        preventScroll: true
      });
    }
  };
  let K = (e) => {
    let t = O.map((t2) => {
      if (t2.id === e) {
        return {
          ...t2,
          done: !t2.done
        };
      }
      return t2;
    });
    setTe(Object.fromEntries(t.map((e2) => [e2.id, !!e2.done])));
    onTasksChange?.(t.map(({
      id,
      label,
      done,
      assignee
    }) => ({
      id,
      label,
      done,
      assignee
    })));
  };
  let se = (e) => {
    setRe(e);
    onStatusChange?.(e);
    setL(false);
  };
  let q = O.find((e) => e.id === j);
  let J = O.length - length;
  let Y = hint ?? (J === 0 ? `All done` : `${J} left`);
  let X = `rest`;
  if (q) {
    Y = q.assignee ? /* @__PURE__ */ jsxs(Fragment, { children: [
      q.done ? `Done by` : `Assigned to`,
      ` `,
      /* @__PURE__ */ jsx("b", { children: q.assignee })
    ] }) : q.done ? `Done` : `Nobody on it yet`;
    X = `task-${q.id}`;
  } else if (z) {
    let e = O.filter((e2) => e2.assignee === z);
    Y = /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: z }),
      ` \xB7 `,
      e.filter((e2) => e2.done).length,
      ` of `,
      e.length,
      ` `,
      `done`
    ] });
    X = `person-${z}`;
  }
  let r_1 = 12.5;
  let Q = O.length > 1 ? 0.055 : 0;
  let $ = 1 / Math.max(O.length, 1);
  return /* @__PURE__ */ jsxs("div", { ref: VRef, className: [`ui-pc`, className].filter(Boolean).join(` `), "data-open": E ? `` : void 0, onPointerEnter, onPointerLeave, onKeyDown, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-project-card`, precedence: `default`, children: ee }),
    /* @__PURE__ */ jsxs("div", { className: `ui-pc__card`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-pc__head`, children: [
        /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-pc__toggle`, "aria-expanded": E, "aria-controls": `${C}-body`, "aria-label": `${title}: ${length} of ${O.length} done, ${A?.label ?? ``}${due ? `, due ${due}` : ``}`, onClick: () => U(!E) }),
        /* @__PURE__ */ jsxs("span", { className: `ui-pc__progress`, "data-live": E ? `` : void 0, children: [
          /* @__PURE__ */ jsx("svg", { width: 32, height: 32, viewBox: `0 0 32 32`, fill: `none`, "aria-hidden": `true`, onPointerLeave: () => setJ(null), children: O.length === 1 ? /* @__PURE__ */ jsx("circle", { className: `ui-pc__seg`, cx: 16, cy: 16, r: r_1, "data-done": O[0].done ? `` : void 0, "data-hot": j === O[0].id ? `` : void 0, onPointerEnter: () => setJ(O[0].id), onClick: () => K(O[0].id) }) : O.map((e, t) => /* @__PURE__ */ jsx("path", { className: `ui-pc__seg`, d: s(t * $ + Q / 2, (t + 1) * $ - Q / 2, r_1, 16), "data-done": e.done ? `` : void 0, "data-hot": j === e.id ? `` : void 0, "data-dim": B(e) ? void 0 : ``, onPointerEnter: () => setJ(e.id), onClick: () => K(e.id) }, e.id)) }),
          /* @__PURE__ */ jsx("span", { className: `ui-pc__num`, children: length }, length)
        ] }),
        /* @__PURE__ */ jsxs("span", { className: `ui-pc__titles`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-pc__name`, children: title }),
          /* @__PURE__ */ jsxs("span", { className: `ui-pc__sub`, children: [
            /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-pc__status`, "data-tone": A?.tone ?? `gray`, "aria-expanded": L, "aria-controls": `${C}-status`, tabIndex: E ? 0 : -1, onClick: () => setL((e) => !e), children: [
              A?.icon ?? /* @__PURE__ */ jsx(C1Component, { tone: A?.tone ?? `gray` }),
              A?.label
            ] }),
            due && /* @__PURE__ */ jsxs("span", { className: `ui-pc__due`, children: [
              /* @__PURE__ */ jsx("span", { className: `ui-pc__due-word`, children: `Due ` }),
              due
            ] })
          ] })
        ] }),
        members2.length > 0 && /* @__PURE__ */ jsx("span", { className: `ui-pc__people`, onPointerLeave: () => setN(null), children: members2.map((e) => /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-pc__member`, "aria-label": `Only ${e.name}'s subtasks`, "aria-pressed": F === e.name, "data-on": z === e.name ? `` : void 0, "data-off": z && z !== e.name ? `` : void 0, tabIndex: E ? 0 : -1, onPointerEnter: (t) => t.pointerType === `mouse` && setN(e.name), onFocus: () => setN(e.name), onBlur: () => setN(null), onClick: () => setF((t) => {
          if (t === e.name) {
            return null;
          }
          return e.name;
        }), children: /* @__PURE__ */ jsx(D1Component, { member: e }) }, e.name)) })
      ] }),
      /* @__PURE__ */ jsx("div", { id: `${C}-body`, className: `ui-pc__fold`, inert: !E, children: /* @__PURE__ */ jsxs("div", { className: `ui-pc__body`, children: [
        /* @__PURE__ */ jsx("div", { id: `${C}-status`, className: `ui-pc__fold ui-pc__fold--status`, "data-open": L ? `` : void 0, inert: !L, children: /* @__PURE__ */ jsx("div", { className: `ui-pc__clip`, children: /* @__PURE__ */ jsx("div", { className: `ui-pc__options`, role: `radiogroup`, "aria-label": `Status`, children: statuses.map((e) => /* @__PURE__ */ jsxs("button", { type: `button`, role: `radio`, "aria-checked": e.id === A?.id, className: `ui-pc__option`, "data-tone": e.tone ?? `gray`, onClick: () => se(e.id), children: [
          e.icon ?? /* @__PURE__ */ jsx(C1Component, { tone: e.tone ?? `gray` }),
          e.label
        ] }, e.id)) }) }) }),
        O.length > 0 && /* @__PURE__ */ jsx("ul", { className: `ui-pc__tasks`, onPointerLeave: () => setJ(null), children: O.map((e) => {
          let t = members2.find((t2) => t2.name === e.assignee);
          return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-pc__task`, role: `checkbox`, "aria-checked": e.done, "data-hot": j === e.id ? `` : void 0, "data-dim": B(e) ? void 0 : ``, onPointerEnter: (t2) => t2.pointerType === `mouse` && setJ(e.id), onFocus: () => setJ(e.id), onBlur: () => setJ(null), onClick: () => K(e.id), children: [
            /* @__PURE__ */ jsx(U1Component, {}),
            /* @__PURE__ */ jsx("span", { className: `ui-pc__label`, children: e.label }),
            t && /* @__PURE__ */ jsx(D1Component, { member: t })
          ] }) }, e.id);
        }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `ui-pc__fold`, inert: !E, children: /* @__PURE__ */ jsx("div", { className: `ui-pc__clip`, children: /* @__PURE__ */ jsxs("div", { className: `ui-pc__foot`, children: [
      /* @__PURE__ */ jsx("span", { className: `ui-pc__caption`, "aria-live": `polite`, children: /* @__PURE__ */ jsx("span", { children: Y }, X) }),
      action && /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-pc__action`, onClick: action.onClick, children: [
        action.label,
        /* @__PURE__ */ jsx(L1Component, {})
      ] })
    ] }) }) })
  ] });
}
var ee = `.ui-pc{--ui-pc-tray: #f0f0f0;--ui-pc-card: #ffffff;--ui-pc-line: #ececec;--ui-pc-ink: #171717;--ui-pc-text: #404040;--ui-pc-muted: #8f8f8f;--ui-pc-well: #f4f4f5;--ui-pc-ring: #dcdce0;--ui-pc-focus: rgba(23, 23, 23, 0.22);--ui-pc-ease: cubic-bezier(0.32, 0.72, 0.24, 1);--ui-pc-time: 520ms;box-sizing: border-box;width: 100%;max-width: 320px;container-type: inline-size;padding: 4px;border-radius: 20px;background: var(--ui-pc-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;color: var(--ui-pc-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-pc *, .ui-pc *::before, .ui-pc *::after{box-sizing: border-box}:where(.ui-pc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-pc button:focus-visible{outline: 2px solid var(--ui-pc-focus);outline-offset: 2px}.ui-pc svg{display: block;flex: none}.ui-pc b{font-weight: 500;color: var(--ui-pc-ink)}.ui-pc [data-tone="red"]{--ui-pc-tag: #b42318;--ui-pc-tag-bg: rgba(229, 72, 77, 0.1);--ui-pc-tag-on: rgba(229, 72, 77, 0.18)}.ui-pc [data-tone="amber"]{--ui-pc-tag: #96590a;--ui-pc-tag-bg: rgba(240, 160, 32, 0.14);--ui-pc-tag-on: rgba(240, 160, 32, 0.24)}.ui-pc [data-tone="green"]{--ui-pc-tag: #18794e;--ui-pc-tag-bg: rgba(34, 160, 90, 0.11);--ui-pc-tag-on: rgba(34, 160, 90, 0.2)}.ui-pc [data-tone="blue"]{--ui-pc-tag: #1f55d6;--ui-pc-tag-bg: rgba(47, 107, 255, 0.09);--ui-pc-tag-on: rgba(47, 107, 255, 0.17)}.ui-pc [data-tone="violet"]{--ui-pc-tag: #6941c6;--ui-pc-tag-bg: rgba(124, 92, 255, 0.1);--ui-pc-tag-on: rgba(124, 92, 255, 0.18)}.ui-pc [data-tone="gray"]{--ui-pc-tag: #5f5f66;--ui-pc-tag-bg: rgba(110, 110, 120, 0.09);--ui-pc-tag-on: rgba(110, 110, 120, 0.17)}.ui-pc__card{border-radius: 16px;background: var(--ui-pc-card);box-shadow: 0 0 0 1px var(--ui-pc-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-pc__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows var(--ui-pc-time) var(--ui-pc-ease), opacity 260ms ease}.ui-pc__fold > *{min-height: 0;overflow: hidden}.ui-pc[data-open] > .ui-pc__fold, .ui-pc[data-open] > .ui-pc__card > .ui-pc__fold, .ui-pc__fold--status[data-open]{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows var(--ui-pc-time) var(--ui-pc-ease), opacity 380ms ease 120ms}.ui-pc__head{position: relative;display: flex;align-items: center;gap: 10px;padding: 10px 12px}.ui-pc__toggle{position: absolute;inset: 0;border-radius: 16px}.ui-pc__head > :not(.ui-pc__toggle){position: relative;pointer-events: none}.ui-pc[data-open] :is(.ui-pc__status, .ui-pc__member), .ui-pc__progress[data-live] .ui-pc__seg{pointer-events: auto}.ui-pc__progress{display: grid;flex: none;place-items: center;width: 32px;height: 32px}.ui-pc__progress > *{grid-area: 1 / 1}.ui-pc__seg{fill: none;stroke: var(--ui-pc-ring);stroke-width: 3;stroke-linecap: round;cursor: pointer;transition: stroke 260ms ease, stroke-width 260ms var(--ui-pc-ease), opacity 240ms ease}.ui-pc__seg[data-done]{stroke: var(--ui-pc-ink)}.ui-pc__seg[data-hot]{stroke-width: 4.5;stroke: var(--ui-pc-muted)}.ui-pc__seg[data-done][data-hot]{stroke: var(--ui-pc-ink)}.ui-pc__seg[data-dim]{opacity: 0.3}.ui-pc__num{font-size: 11.5px;font-weight: 600;line-height: 1;color: var(--ui-pc-ink);font-variant-numeric: tabular-nums;pointer-events: none;animation: ui-pc-num 320ms var(--ui-pc-ease) both}.ui-pc__titles{display: grid;grid-template-columns: minmax(0, 1fr);flex: 1;min-width: 0}.ui-pc__name{overflow: hidden;font-size: 13.5px;font-weight: 600;color: var(--ui-pc-ink);white-space: nowrap;text-overflow: ellipsis}.ui-pc__sub{display: flex;align-items: center;gap: 6px;min-width: 0;height: 20px;margin-top: 1px;overflow: hidden;font-size: 12px;line-height: 20px;color: var(--ui-pc-muted);white-space: nowrap}.ui-pc__status{display: inline-flex;flex: none;align-items: center;gap: 4px;height: 20px;padding: 0 7px 0 5px;border-radius: 5px;background: var(--ui-pc-tag-bg);font-weight: 500;color: var(--ui-pc-tag);transition: background-color 200ms ease, color 200ms ease}.ui-pc[data-open] .ui-pc__status:hover, .ui-pc__status[aria-expanded="true"]{background: var(--ui-pc-tag-on)}.ui-pc__due{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-pc__people{display: flex;flex: none}.ui-pc__member{position: relative;border-radius: 50%;transition: transform 260ms var(--ui-pc-ease), opacity 240ms ease}.ui-pc__member + .ui-pc__member{margin-left: -6px}.ui-pc__member[data-on]{z-index: 1;transform: scale(1.12)}.ui-pc__member[data-off]{opacity: 0.4}.ui-pc__member[aria-pressed="true"] .ui-pc__avatar{box-shadow: 0 0 0 1.5px var(--ui-pc-card), 0 0 0 3px var(--ui-pc-ink)}.ui-pc__avatar{display: grid;flex: none;place-items: center;width: 20px;height: 20px;overflow: hidden;border-radius: 50%;background: hsl(var(--ui-pc-hue) 70% 90%);box-shadow: 0 0 0 1.5px var(--ui-pc-card);font-size: 9px;font-weight: 600;line-height: 1;color: hsl(var(--ui-pc-hue) 45% 34%);transition: box-shadow 200ms ease}.ui-pc__avatar img{width: 100%;height: 100%;object-fit: cover}.ui-pc__body{padding: 0 12px}.ui-pc__options{display: flex;flex-wrap: wrap;gap: 4px;padding-bottom: 10px}.ui-pc__option{display: inline-flex;align-items: center;gap: 5px;height: 24px;padding: 0 9px 0 7px;border-radius: 6px;background: var(--ui-pc-tag-bg);font-size: 12px;font-weight: 500;color: var(--ui-pc-tag);white-space: nowrap;transition: background-color 160ms ease, box-shadow 160ms ease}.ui-pc__option:hover{background: var(--ui-pc-tag-on)}.ui-pc__option[aria-checked="true"]{background: var(--ui-pc-tag-on);box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ui-pc-tag) 34%, transparent)}.ui-pc__tasks{margin: 0;padding: 8px 0;border-top: 1px solid var(--ui-pc-line);list-style: none}.ui-pc__task{display: flex;align-items: center;gap: 9px;width: calc(100% + 12px);height: 30px;margin: 0 -6px;padding: 0 6px;border-radius: 8px;color: var(--ui-pc-text);transition: background-color 160ms ease, color 200ms ease, opacity 240ms ease}.ui-pc__task[data-hot]{background: var(--ui-pc-well)}.ui-pc__task[data-dim]{opacity: 0.35}.ui-pc__label{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-pc__task .ui-pc__avatar{width: 18px;height: 18px;font-size: 8px;opacity: 0;transform: translateX(4px);transition: opacity 200ms ease, transform 260ms var(--ui-pc-ease)}.ui-pc__task:is([data-hot], :focus-visible) .ui-pc__avatar{opacity: 1;transform: none}.ui-pc__ring{fill: none;stroke: #c9c9ce;stroke-width: 1.4;transition: stroke 160ms ease}.ui-pc__task[data-hot] .ui-pc__ring{stroke: var(--ui-pc-muted)}.ui-pc__disc{fill: var(--ui-pc-ink);transform-origin: 8px 8px;transform: scale(0);transition: transform 340ms var(--ui-pc-ease)}.ui-pc__tick{fill: none;stroke: var(--ui-pc-card);stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round;stroke-dasharray: 9;stroke-dashoffset: 9;transition: stroke-dashoffset 280ms var(--ui-pc-ease) 80ms}.ui-pc__task[aria-checked="true"] .ui-pc__disc{transform: scale(1)}.ui-pc__task[aria-checked="true"] .ui-pc__tick{stroke-dashoffset: 0}.ui-pc__task[aria-checked="true"]{color: var(--ui-pc-muted)}.ui-pc__foot{display: flex;align-items: center;gap: 8px;height: 38px;padding: 4px 4px 0 10px}.ui-pc__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-pc-muted);white-space: nowrap;text-overflow: ellipsis}.ui-pc__caption > span{display: inline-block;animation: ui-pc-in 280ms var(--ui-pc-ease) both}.ui-pc__action{display: inline-flex;align-items: center;gap: 4px;flex: none;height: 26px;padding: 0 6px 0 8px;border-radius: 10px;font-size: 12.5px;font-weight: 500;color: var(--ui-pc-text);white-space: nowrap;transition: background-color 160ms ease, color 160ms ease}.ui-pc__action:hover{background: var(--ui-pc-card);color: var(--ui-pc-ink)}.ui-pc__action svg{transition: transform 220ms var(--ui-pc-ease)}.ui-pc__action:hover svg{transform: translateX(2px)}@keyframes ui-pc-in{from{opacity: 0;transform: translateY(3px)}}@keyframes ui-pc-num{from{opacity: 0;transform: scale(0.8)}}@container (max-width: 290px){.ui-pc__due-word{display: none}.ui-pc__member + .ui-pc__member{margin-left: -9px}.ui-pc__head{gap: 8px}.ui-pc__sub{gap: 4px}.ui-pc__status{padding: 0 6px 0 4px}}@media (pointer: coarse){.ui-pc__task{height: 36px}.ui-pc__task .ui-pc__avatar{opacity: 1;transform: none}.ui-pc__option{height: 30px}.ui-pc__action{height: 30px}}@media (prefers-reduced-motion: reduce){.ui-pc *, .ui-pc *::before, .ui-pc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-pc{--ui-pc-tray: #111113;--ui-pc-card: #19191b;--ui-pc-line: #2a2a2e;--ui-pc-ink: #ededed;--ui-pc-text: #c8c8cc;--ui-pc-muted: #8b8b92;--ui-pc-well: #222225;--ui-pc-ring: #3a3a40;--ui-pc-focus: rgba(255, 255, 255, 0.3)}:where(.dark, [data-theme="dark"]) .ui-pc__ring{stroke: #4a4a50}:where(.dark, [data-theme="dark"]) .ui-pc__avatar{background: hsl(var(--ui-pc-hue) 30% 26%);color: hsl(var(--ui-pc-hue) 70% 82%)}:where(.dark, [data-theme="dark"]) .ui-pc [data-tone="red"]{--ui-pc-tag: #ff9b93}:where(.dark, [data-theme="dark"]) .ui-pc [data-tone="amber"]{--ui-pc-tag: #f5c264}:where(.dark, [data-theme="dark"]) .ui-pc [data-tone="green"]{--ui-pc-tag: #6ee7a8}:where(.dark, [data-theme="dark"]) .ui-pc [data-tone="blue"]{--ui-pc-tag: #9bb8ff}:where(.dark, [data-theme="dark"]) .ui-pc [data-tone="violet"]{--ui-pc-tag: #c3b1ff}:where(.dark, [data-theme="dark"]) .ui-pc [data-tone="gray"]{--ui-pc-tag: #b4b4bb}`;
var tasks = [{
  id: `welcome`,
  label: `Welcome screen`,
  done: true,
  assignee: `Mara`
}, {
  id: `workspace`,
  label: `Workspace setup`,
  done: true,
  assignee: `Jonas`
}, {
  id: `invite`,
  label: `Invite teammates`,
  done: true,
  assignee: `Mara`
}, {
  id: `checklist`,
  label: `First-run checklist`,
  assignee: `Priya`
}, {
  id: `emails`,
  label: `Lifecycle emails`,
  assignee: `Jonas`
}];
var members = [{
  name: `Mara`
}, {
  name: `Jonas`
}, {
  name: `Priya`
}];
function HComponent() {
  let [open, setOpen] = n3.useState(false);
  let iRef = n3.useRef(false);
  n3.useEffect(() => {
    let e = () => {
      if (!iRef.current) {
        setOpen((e2) => !e2);
      }
    };
    let n4 = 0;
    let r2 = window.setTimeout(() => {
      e();
      n4 = window.setInterval(e, 3400);
    }, 700);
    return () => {
      window.clearTimeout(r2);
      window.clearInterval(n4);
    };
  }, []);
  let a2 = () => iRef.current = true;
  return /* @__PURE__ */ jsx("div", { className: `pc-demo`, onPointerEnter: a2, onPointerDownCapture: a2, onKeyDownCapture: a2, onFocusCapture: a2, children: /* @__PURE__ */ jsx(F1Component, { title: `Onboarding flow`, tasks, status: `progress`, due: `Oct 24`, members, action: {
    label: `Open`,
    onClick: () => {
    }
  }, open, onOpenChange: setOpen }) });
}

export {
  HComponent
};
