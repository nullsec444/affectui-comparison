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

// reconstructed/demo-Bq86T0RX.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [{
  id: `needs`,
  label: `Needs you`
}, {
  id: `running`,
  label: `Running`
}, {
  id: `done`,
  label: `Done`
}];
var a = (status) => {
  if (status === `waiting` || status === `failed`) {
    return `needs`;
  }
  if (status === `running`) {
    return `running`;
  }
  return `done`;
};
var o = {
  waiting: `Waiting for you`,
  running: `Running`,
  done: `Done`,
  failed: `Failed`
};
var s = (status) => status === `running` || status === `waiting`;
var c = (startedAt) => {
  if (typeof startedAt == `number`) {
    return startedAt;
  }
  return startedAt.getTime();
};
var l = (e) => String(e).padStart(2, `0`);
var u = (e) => {
  let t = Math.max(0, Math.floor(e / 1e3));
  if (t < 60) {
    return `${t}s`;
  }
  let n4 = Math.floor(t / 60);
  if (n4 < 60) {
    return `${n4}m ${l(t % 60)}s`;
  }
  return `${Math.floor(n4 / 60)}h ${l(n4 % 60)}m`;
};
var d = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
var easing = `cubic-bezier(0.32, 0.72, 0.24, 1)`;
var p = {
  fill: `none`,
  stroke: `currentColor`,
  strokeWidth: 1.4,
  strokeLinecap: `round`,
  strokeLinejoin: `round`
};
var M1Component = () => /* @__PURE__ */ jsxs("svg", { width: `14`, height: `14`, viewBox: `0 0 14 14`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("path", { d: `M7 1.2c.4 2.9 1.9 4.4 4.8 4.8-2.9.4-4.4 1.9-4.8 4.8C6.6 7.9 5.1 6.4 2.2 6 5.1 5.6 6.6 4.1 7 1.2Z`, fill: `currentColor` }),
  /* @__PURE__ */ jsx("circle", { cx: `11.6`, cy: `11.4`, r: `1.1`, fill: `currentColor`, opacity: `0.55` })
] });
var H1Component = ({
  status
}) => /* @__PURE__ */ jsxs("span", { className: `ui-ai__state-icon`, "data-status": status, "aria-hidden": `true`, children: [
  status === `running` && /* @__PURE__ */ jsxs("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, children: [
    /* @__PURE__ */ jsx("circle", { cx: `6`, cy: `6`, r: `4.6`, fill: `none`, stroke: `currentColor`, strokeOpacity: `0.25`, strokeWidth: `1.6` }),
    /* @__PURE__ */ jsx("path", { d: `M6 1.4a4.6 4.6 0 0 1 4.6 4.6`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.6`, strokeLinecap: `round` })
  ] }),
  status === `waiting` && /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, children: /* @__PURE__ */ jsx("path", { d: `M6 1.6 11 10.2H1L6 1.6Z`, fill: `currentColor` }) }),
  status === `done` && /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, children: /* @__PURE__ */ jsx("circle", { cx: `6`, cy: `6`, r: `3.4`, fill: `currentColor` }) }),
  status === `failed` && /* @__PURE__ */ jsxs("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, children: [
    /* @__PURE__ */ jsx("circle", { cx: `6`, cy: `6`, r: `4.8`, fill: `currentColor` }),
    /* @__PURE__ */ jsx("path", { d: `M6 3.6v2.8M6 8.3v.1`, stroke: `#fff`, strokeWidth: `1.5`, strokeLinecap: `round` })
  ] })
] });
var G1Component = () => /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M7.6 1.6a2.6 2.6 0 0 0-2.4 3.5L1.7 8.6a1.1 1.1 0 0 0 1.6 1.6l3.5-3.5a2.6 2.6 0 0 0 3.5-2.4l-1.5 1.1-1.5-.4-.4-1.5 1.1-1.5c-.1 0-.3-.4-.4-.4Z`, ...p, strokeWidth: 1.2 }) });
var Component = () => /* @__PURE__ */ jsxs("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("circle", { cx: `5.2`, cy: `5.2`, r: `3.3`, ...p, strokeWidth: 1.2 }),
  /* @__PURE__ */ jsx("path", { d: `m7.7 7.7 2.6 2.6`, ...p, strokeWidth: 1.2 })
] });
var V1Component = () => /* @__PURE__ */ jsxs("svg", { width: `13`, height: `13`, viewBox: `0 0 14 14`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("rect", { x: `1.8`, y: `2.2`, width: `3.2`, height: `9.6`, rx: `1`, ...p, strokeWidth: 1.2 }),
  /* @__PURE__ */ jsx("rect", { x: `8.9`, y: `2.2`, width: `3.2`, height: `6.4`, rx: `1`, ...p, strokeWidth: 1.2 })
] });
var Y1Component = () => /* @__PURE__ */ jsx("svg", { width: `13`, height: `13`, viewBox: `0 0 14 14`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M2.2 3.6h9.6M2.2 7h9.6M2.2 10.4h9.6`, ...p, strokeWidth: 1.2 }) });
var B1Component = () => /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M6 2.2v7.6M2.2 6h7.6`, ...p, strokeWidth: 1.5 }) });
function X1Component({
  tasks,
  onApprove,
  onReject,
  onRetry,
  onOpen,
  title = `Agent inbox`,
  action,
  view,
  defaultView = `board`,
  onViewChange,
  className
}) {
  let k = n3.useId();
  let ARef = n3.useRef(null);
  let [j, setJ] = n3.useState(defaultView);
  let N = view ?? j;
  let [P, setP] = n3.useState(null);
  let [I, setI] = n3.useState(() => Date.now());
  let [R, setR] = n3.useState({});
  let B = tasks.map((e) => {
    if (R[e.id]) {
      return {
        ...e,
        ...R[e.id]
      };
    }
    return e;
  });
  let V = B.some((e) => s(e.status));
  n3.useEffect(() => {
    if (!V) {
      return;
    }
    let e = window.setInterval(() => setI(Date.now()), 1e3);
    return () => window.clearInterval(e);
  }, [V]);
  let HRef = n3.useRef({});
  for (let e of B) {
    HRef.current[e.id] ??= Date.now();
  }
  let U = (e) => {
    if (!s(e.status)) {
      return e.elapsed ?? 0;
    }
    let t = e.startedAt === void 0 ? HRef.current[e.id] - (e.elapsed ?? 0) : c(e.startedAt);
    return I - t;
  };
  let [W, setW] = n3.useState(() => Object.fromEntries(B.map((e) => [e.id, a(e.status)])));
  let K = B.map((e) => `${e.id}:${a(e.status)}`).join(`|`);
  n3.useEffect(() => {
    if (!B.some((e2) => W[e2.id] !== a(e2.status))) {
      return;
    }
    let e = window.setTimeout(() => setW(Object.fromEntries(B.map((e2) => [e2.id, a(e2.status)]))), d() ? 0 : 900);
    return () => window.clearTimeout(e);
  }, [K]);
  let q = (e) => W[e.id] ?? a(e.status);
  let JRef = n3.useRef(/* @__PURE__ */ new Map());
  let YRef = n3.useRef(/* @__PURE__ */ new Map());
  let X = JSON.stringify(W) + N;
  if (ARef.current) {
    YRef.current = new Map([...JRef.current].map(([e, t]) => [e, t.getBoundingClientRect()]));
  }
  let ZRef = n3.useRef(X);
  n3.useLayoutEffect(() => {
    if (ZRef.current !== X && (ZRef.current = X, !d())) {
      for (let [e, t] of JRef.current) {
        let n4 = YRef.current.get(e);
        if (!n4) {
          t.animate([{
            opacity: 0,
            transform: `translateY(6px)`
          }, {
            opacity: 1,
            transform: `none`
          }], {
            duration: 380,
            easing
          });
          continue;
        }
        let r2 = t.getBoundingClientRect();
        let i2 = n4.left - r2.left;
        let a2 = n4.top - r2.top;
        if (!(Math.abs(i2) < 1 && Math.abs(a2) < 1)) {
          t.animate([{
            transform: `translate(${i2}px, ${a2}px)`,
            zIndex: 2
          }, {
            transform: `none`,
            zIndex: 2
          }], {
            duration: 560,
            easing
          });
        }
      }
    }
  }, [X]);
  let Q = (e, status, label, r2) => {
    if (r2) {
      return r2(e);
    }
    setR((r3) => ({
      ...r3,
      [e.id]: {
        status,
        startedAt: Date.now(),
        steps: [...e.steps ?? [], {
          label,
          time: `now`
        }]
      }
    }));
  };
  let ee = (e) => setP((t) => {
    if (t === e) {
      return null;
    }
    return e;
  });
  let onKeyDown = (e) => {
    if (e.key === `Escape` && P) {
      e.stopPropagation();
      ARef.current?.querySelector(`[data-id="${P}"] .ui-ai__card-main`)?.focus({
        preventScroll: true
      });
      setP(null);
    }
  };
  let ne = (e) => {
    setJ(e);
    onViewChange?.(e);
  };
  let ReComponent = (e) => {
    let n4 = P === e.id;
    let i2 = (e.steps ?? []).slice(-4);
    let a2 = e.status === `done` ? `Done in ` : e.status === `failed` ? o.failed : `${o[e.status]} \xB7 `;
    let s2 = e.status === `failed` ? `` : u(U(e));
    return /* @__PURE__ */ jsxs("li", { "data-id": e.id, className: `ui-ai__card`, "data-status": e.status, "data-open": n4 ? `` : void 0, ref: (t) => {
      if (t) {
        JRef.current.set(e.id, t);
      } else {
        JRef.current.delete(e.id);
      }
    }, children: [
      /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-ai__card-main`, "aria-expanded": n4, "aria-controls": `${k}-${e.id}`, onClick: () => ee(e.id), children: [
        /* @__PURE__ */ jsxs("span", { className: `ui-ai__title-row`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-ai__spark`, children: /* @__PURE__ */ jsx(M1Component, {}) }),
          /* @__PURE__ */ jsx("span", { className: `ui-ai__title`, children: e.title })
        ] }),
        e.description && /* @__PURE__ */ jsx("span", { className: `ui-ai__desc`, children: e.description }),
        /* @__PURE__ */ jsxs("span", { className: `ui-ai__foot`, children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-ai__state`, "data-status": e.status, children: [
            /* @__PURE__ */ jsx(H1Component, { status: e.status }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("span", { className: `ui-ai__state-word`, children: a2 }),
              s2
            ] })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: `ui-ai__meta`, children: [
            e.sources !== void 0 && /* @__PURE__ */ jsxs("span", { title: `Sources read`, children: [
              /* @__PURE__ */ jsx(Component, {}),
              e.sources
            ] }),
            e.tools !== void 0 && /* @__PURE__ */ jsxs("span", { title: `Tool calls`, children: [
              /* @__PURE__ */ jsx(G1Component, {}),
              e.tools
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { id: `${k}-${e.id}`, className: `ui-ai__fold`, "data-open": n4 ? `` : void 0, inert: !n4, children: /* @__PURE__ */ jsx("div", { className: `ui-ai__clip`, children: /* @__PURE__ */ jsxs("div", { className: `ui-ai__more`, children: [
        /* @__PURE__ */ jsx("div", { className: `ui-ai__agent`, children: e.agent }),
        i2.length > 0 && /* @__PURE__ */ jsx("ol", { className: `ui-ai__steps`, children: i2.map((e2, t) => /* @__PURE__ */ jsxs("li", { "data-last": t === i2.length - 1 ? `` : void 0, children: [
          /* @__PURE__ */ jsx("span", { children: e2.label }),
          e2.time && /* @__PURE__ */ jsx("time", { children: e2.time })
        ] }, t)) }),
        /* @__PURE__ */ jsxs("div", { className: `ui-ai__actions`, children: [
          e.status === `waiting` && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-ai__btn`, onClick: () => Q(e, `failed`, `You rejected the request`, onReject), children: `Reject` }),
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-ai__btn ui-ai__btn--primary`, onClick: () => Q(e, `running`, `You approved \u2013 continuing`, onApprove), children: `Approve` })
          ] }),
          e.status === `failed` && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-ai__btn ui-ai__btn--primary`, onClick: () => Q(e, `running`, `Retrying`, onRetry), children: `Retry` }),
          (e.status === `running` || e.status === `done`) && onOpen && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-ai__btn`, onClick: () => onOpen(e), children: `Open` })
        ] })
      ] }) }) })
    ] }, e.id);
  };
  let $ = Object.fromEntries(i.map((e) => [e.id, B.filter((t) => q(t) === e.id).length]));
  let ie = `${B.filter((e) => e.status === `waiting` || e.status === `failed`).length} need you, ${B.filter((e) => e.status === `running`).length} running`;
  return /* @__PURE__ */ jsxs("div", { ref: ARef, className: [`ui-ai`, className].filter(Boolean).join(` `), "data-view": N, onKeyDown, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-agent-inbox`, precedence: `default`, children: S }),
    /* @__PURE__ */ jsxs("div", { className: `ui-ai__bar`, children: [
      /* @__PURE__ */ jsxs("span", { className: `ui-ai__heading`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-ai__crumb`, children: `Agents` }),
        /* @__PURE__ */ jsx("span", { className: `ui-ai__slash`, "aria-hidden": `true`, children: `/` }),
        /* @__PURE__ */ jsx("span", { children: title })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-ai__tools`, children: [
        action && /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-ai__action`, onClick: action.onClick, children: [
          /* @__PURE__ */ jsx(B1Component, {}),
          action.label
        ] }),
        /* @__PURE__ */ jsx("div", { className: `ui-ai__views`, role: `radiogroup`, "aria-label": `Layout`, children: [`board`, `list`].map((e) => /* @__PURE__ */ jsxs("button", { type: `button`, role: `radio`, "aria-checked": N === e, className: `ui-ai__view`, onClick: () => ne(e), children: [
          e === `board` ? /* @__PURE__ */ jsx(V1Component, {}) : /* @__PURE__ */ jsx(Y1Component, {}),
          e === `board` ? `Board` : `List`
        ] }, e)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `ui-ai__lanes`, children: i.map((e) => /* @__PURE__ */ jsxs("section", { className: `ui-ai__lane`, "aria-label": e.label, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-ai__lane-head`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-ai__lane-spark`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx(M1Component, {}) }),
        /* @__PURE__ */ jsx("span", { className: `ui-ai__lane-name`, children: e.label }),
        /* @__PURE__ */ jsx("span", { className: `ui-ai__count`, children: $[e.id] })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: `ui-ai__cards`, children: [
        B.filter((t) => q(t) === e.id).map(ReComponent),
        $[e.id] === 0 && /* @__PURE__ */ jsx("li", { className: `ui-ai__empty`, children: `Nothing here` })
      ] })
    ] }, e.id)) }),
    /* @__PURE__ */ jsx("span", { className: `ui-ai__sr`, "aria-live": `polite`, children: ie })
  ] });
}
var S = `.ui-ai{--ui-ai-tray: #f0f0f0;--ui-ai-card: #ffffff;--ui-ai-line: #ececec;--ui-ai-chip: #f5f5f5;--ui-ai-track: #e6e6e6;--ui-ai-ink: #171717;--ui-ai-text: #6b6b6b;--ui-ai-muted: #8a8a8a;--ui-ai-faint: #b8b8b8;--ui-ai-blue: #2f6bff;--ui-ai-amber: #d98a00;--ui-ai-green: #1a9a52;--ui-ai-red: #e0453a;--ui-ai-brand-bg: #eaf1ff;--ui-ai-brand-fg: #2456d6;--ui-ai-warn-bg: #fff3e0;--ui-ai-warn-fg: #b85c00;--ui-ai-ok-bg: #e6f6ec;--ui-ai-ok-fg: #1a7f45;--ui-ai-danger-bg: #fdecea;--ui-ai-danger-fg: #c2331f;--ui-ai-ring: rgba(23, 23, 23, 0.22);--ui-ai-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;width: 100%;min-width: 0;padding: 4px;border-radius: 20px;background: var(--ui-ai-tray);container-type: inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;line-height: 20px;letter-spacing: -0.006em;color: var(--ui-ai-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-ai *, .ui-ai *::before, .ui-ai *::after{box-sizing: border-box}:where(.ui-ai) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-ai button:focus-visible{outline: 2px solid var(--ui-ai-ring);outline-offset: 2px}.ui-ai ul, .ui-ai ol{margin: 0;padding: 0;list-style: none}.ui-ai svg{display: block;flex: none}.ui-ai__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-ai__bar{display: flex;align-items: center;justify-content: space-between;gap: 12px;padding: 8px 8px 10px 14px}.ui-ai__heading{display: flex;align-items: center;gap: 8px;min-width: 0;font-size: 14px;font-weight: 600;color: var(--ui-ai-ink);white-space: nowrap}.ui-ai__crumb{color: var(--ui-ai-muted);font-weight: 500}.ui-ai__slash{color: var(--ui-ai-faint);font-weight: 400}.ui-ai__tools{display: flex;flex: none;align-items: center;gap: 8px}.ui-ai__action{display: inline-flex;align-items: center;gap: 6px;height: 30px;padding: 0 12px 0 10px;border-radius: 999px;font-size: 13px;font-weight: 500;color: var(--ui-ai-ink);transition: background-color 160ms ease}.ui-ai__action:hover{background: var(--ui-ai-track)}.ui-ai__views{display: flex;flex: none;padding: 3px;border-radius: 12px;background: var(--ui-ai-track)}.ui-ai__view{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 12px;border-radius: 9px;font-size: 13px;font-weight: 500;color: var(--ui-ai-muted);transition: background-color 200ms ease, color 200ms ease, box-shadow 200ms ease}.ui-ai__view:hover{color: var(--ui-ai-ink)}.ui-ai__view[aria-checked="true"]{background: var(--ui-ai-card);color: var(--ui-ai-ink);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)}.ui-ai__lanes{display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: 4px;align-items: start}.ui-ai__lane{min-width: 0}.ui-ai__lane-head{display: flex;align-items: center;gap: 8px;height: 32px;padding: 0 10px}.ui-ai__lane-spark{display: grid;color: var(--ui-ai-blue)}.ui-ai__lane[aria-label="Needs you"] .ui-ai__lane-spark{color: var(--ui-ai-amber)}.ui-ai__lane[aria-label="Done"] .ui-ai__lane-spark{color: var(--ui-ai-green)}.ui-ai__lane-name{overflow: hidden;font-size: 13px;font-weight: 600;color: var(--ui-ai-ink);white-space: nowrap;text-overflow: ellipsis}.ui-ai__count{display: grid;place-items: center;min-width: 20px;height: 20px;padding: 0 6px;border-radius: 999px;background: var(--ui-ai-card);box-shadow: 0 0 0 1px var(--ui-ai-line);font-size: 11.5px;font-weight: 500;color: var(--ui-ai-text);font-variant-numeric: tabular-nums}.ui-ai__cards{display: grid;gap: 4px}.ui-ai__empty{padding: 18px 0 20px;border-radius: 16px;box-shadow: inset 0 0 0 1px var(--ui-ai-track);font-size: 13px;text-align: center;color: var(--ui-ai-muted)}.ui-ai__card{position: relative;border-radius: 16px;background: var(--ui-ai-card);box-shadow: 0 0 0 1px var(--ui-ai-line), 0 1px 2px rgba(0, 0, 0, 0.04);transition: box-shadow 200ms ease}.ui-ai__card:hover, .ui-ai__card[data-open]{box-shadow: 0 0 0 1px #e0e0e0, 0 6px 16px -8px rgba(0, 0, 0, 0.14)}.ui-ai__card-main{display: grid;gap: 6px;width: 100%;padding: 14px 14px 12px;border-radius: 16px;container: ai-card / inline-size}.ui-ai__title-row{display: flex;align-items: center;gap: 10px;min-width: 0}.ui-ai__spark{display: grid;flex: none;place-items: center;width: 16px;color: var(--ui-ai-blue);transition: color 300ms ease}.ui-ai__card[data-status="waiting"] .ui-ai__spark{color: var(--ui-ai-amber)}.ui-ai__card[data-status="failed"] .ui-ai__spark{color: var(--ui-ai-red)}.ui-ai__card[data-status="done"] .ui-ai__spark{color: var(--ui-ai-green)}.ui-ai__title{min-width: 0;overflow: hidden;font-size: 14px;font-weight: 600;line-height: 20px;color: var(--ui-ai-ink);white-space: nowrap;text-overflow: ellipsis}.ui-ai__desc{display: -webkit-box;padding-left: 26px;overflow: hidden;font-size: 13px;line-height: 19px;color: var(--ui-ai-text);-webkit-line-clamp: 2;-webkit-box-orient: vertical}.ui-ai__foot{display: flex;align-items: center;justify-content: space-between;gap: 10px;min-width: 0;margin-top: 6px;padding-left: 26px}.ui-ai__state{display: inline-flex;align-items: center;gap: 6px;min-width: 0;height: 24px;padding: 0 10px 0 8px;border-radius: 999px;background: var(--ui-ai-brand-bg);font-size: 12.5px;font-weight: 500;color: var(--ui-ai-brand-fg);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-ai__state[data-status="waiting"]{background: var(--ui-ai-warn-bg);color: var(--ui-ai-warn-fg)}.ui-ai__state[data-status="done"]{background: var(--ui-ai-ok-bg);color: var(--ui-ai-ok-fg)}.ui-ai__state[data-status="failed"]{background: var(--ui-ai-danger-bg);color: var(--ui-ai-danger-fg)}.ui-ai__state > span:last-child{overflow: hidden;text-overflow: ellipsis}.ui-ai__state-icon{display: grid;flex: none;place-items: center;width: 12px;height: 12px;color: currentColor;animation: ui-ai-pop 360ms var(--ui-ai-ease) both}.ui-ai__state-icon[data-status="running"] svg{animation: ui-ai-spin 900ms linear infinite}.ui-ai__meta{display: inline-flex;flex: none;align-items: center;font-size: 12.5px;color: var(--ui-ai-muted);font-variant-numeric: tabular-nums}.ui-ai__meta > span{display: inline-flex;align-items: center;gap: 5px;padding: 0 9px}.ui-ai__meta > span + span{border-left: 1px solid var(--ui-ai-line)}.ui-ai__meta > span:last-child{padding-right: 0}.ui-ai__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 460ms var(--ui-ai-ease), opacity 240ms ease}.ui-ai__fold[data-open]{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows 460ms var(--ui-ai-ease), opacity 320ms ease 100ms}.ui-ai__clip{min-height: 0;overflow: hidden}.ui-ai__more{margin: 0 14px;padding: 12px 0 14px;border-top: 1px solid var(--ui-ai-line)}.ui-ai__agent{font-size: 12.5px;font-weight: 500;color: var(--ui-ai-muted)}.ui-ai__steps{position: relative;display: grid;gap: 6px;margin-top: 8px !important;padding-left: 14px !important}.ui-ai__steps li{position: relative;display: flex;justify-content: space-between;gap: 10px;font-size: 13px;line-height: 18px;color: var(--ui-ai-text)}.ui-ai__steps li::before{content: "";position: absolute;top: 6px;left: -14px;width: 6px;height: 6px;border-radius: 50%;background: var(--ui-ai-faint)}.ui-ai__steps li:not(:last-child)::after{content: "";position: absolute;top: 15px;bottom: -9px;left: -11.5px;width: 1px;background: var(--ui-ai-line)}.ui-ai__steps li[data-last]::before{background: var(--ui-ai-ink)}.ui-ai__steps li > span{min-width: 0}.ui-ai__steps time{flex: none;color: var(--ui-ai-muted)}.ui-ai__actions{display: flex;justify-content: flex-end;gap: 6px;margin-top: 12px}.ui-ai__actions:empty{display: none}.ui-ai__btn{display: inline-flex;align-items: center;height: 32px;padding: 0 14px;border-radius: 10px;background: var(--ui-ai-card);box-shadow: 0 0 0 1px var(--ui-ai-line), 0 1px 2px rgba(0, 0, 0, 0.04);font-size: 13.5px;font-weight: 500;color: var(--ui-ai-ink);transition: background-color 160ms ease, opacity 160ms ease}.ui-ai__btn:hover{background: var(--ui-ai-chip)}.ui-ai__btn--primary{background: var(--ui-ai-ink);box-shadow: none;color: var(--ui-ai-card)}.ui-ai__btn--primary:hover{background: var(--ui-ai-ink);opacity: 0.88}.ui-ai[data-view="list"] .ui-ai__lanes{grid-template-columns: minmax(0, 1fr);gap: 8px}.ui-ai__lanes{animation: ui-ai-in 320ms ease both}@keyframes ui-ai-spin{to{transform: rotate(360deg)}}@keyframes ui-ai-pop{from{opacity: 0;transform: scale(0.6)}}@keyframes ui-ai-in{from{opacity: 0.4}}@container (max-width: 620px){.ui-ai__views{display: none}.ui-ai .ui-ai__lanes{grid-template-columns: minmax(0, 1fr);gap: 8px}}@container ai-card (max-width: 300px){.ui-ai__desc, .ui-ai__foot{padding-left: 0}.ui-ai__state:not([data-status="failed"]) .ui-ai__state-word{display: none}}@container (max-width: 360px){.ui-ai__desc, .ui-ai__foot{padding-left: 0}.ui-ai__title{white-space: normal}}@media (pointer: coarse){.ui-ai__view{height: 34px}.ui-ai__btn{height: 40px;padding: 0 18px}}@media (prefers-reduced-motion: reduce){.ui-ai *, .ui-ai *::before, .ui-ai *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-ai{--ui-ai-tray: #111113;--ui-ai-card: #1c1c1f;--ui-ai-line: #2a2a2e;--ui-ai-chip: #26262a;--ui-ai-track: #1f1f22;--ui-ai-ink: #ededed;--ui-ai-text: #a1a1a6;--ui-ai-muted: #7c7c82;--ui-ai-faint: #4a4a50;--ui-ai-blue: #5b9aff;--ui-ai-amber: #f5b638;--ui-ai-green: #3ecf8e;--ui-ai-red: #ff6b66;--ui-ai-brand-bg: #16243f;--ui-ai-brand-fg: #8ab4ff;--ui-ai-warn-bg: #3a2410;--ui-ai-warn-fg: #ffa057;--ui-ai-ok-bg: #12301f;--ui-ai-ok-fg: #3dd68c;--ui-ai-danger-bg: #3b1714;--ui-ai-danger-fg: #ff977d;--ui-ai-ring: rgba(237, 237, 237, 0.3)}:where(.dark, [data-theme="dark"]) .ui-ai__card:hover, :where(.dark, [data-theme="dark"]) .ui-ai__card[data-open]{box-shadow: 0 0 0 1px #34343a, 0 6px 18px -8px rgba(0, 0, 0, 0.6)}:where(.dark, [data-theme="dark"]) .ui-ai__view[aria-checked="true"]{box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-ai__state-icon[data-status="failed"] path{stroke: var(--ui-ai-danger-bg)}`;
var C = 6e4;
var w = () => {
  let e = Date.now();
  return [{
    id: `migrate`,
    title: `Migrate users table`,
    description: `Split users into accounts and profiles on Postgres 17. The dry run on staging passed.`,
    agent: `Opus 5.5`,
    status: `waiting`,
    startedAt: e - 6 * C - 12e3,
    tools: 14,
    sources: 9,
    steps: [{
      label: `Read schema and 14 migrations`,
      time: `6m ago`
    }, {
      label: `Wrote migration 0042_split_users`,
      time: `4m ago`
    }, {
      label: `Dry run on staging \u2013 no errors`,
      time: `2m ago`
    }, {
      label: `Wants to run it on production`,
      time: `1m ago`
    }]
  }, {
    id: `crm`,
    title: `Clean up CRM contacts`,
    description: `Matched 1,312 likely duplicates, then the merge hit the API rate limit.`,
    agent: `Haiku 5.5`,
    status: `failed`,
    elapsed: 161e3,
    tools: 6,
    sources: 2,
    steps: [{
      label: `Loaded 18,240 contacts`,
      time: `9m ago`
    }, {
      label: `Matched 1,312 likely duplicates`,
      time: `8m ago`
    }, {
      label: `Merge stopped \u2013 API rate limit (429)`,
      time: `7m ago`
    }]
  }, {
    id: `review`,
    title: `Review PR #482`,
    description: `Billing webhooks: reading the diff and the test run, writing comments.`,
    agent: `Sonnet 5.5`,
    status: `running`,
    startedAt: e - 3 * C - 4e4,
    tools: 21,
    sources: 12,
    steps: [{
      label: `Read 12 changed files`,
      time: `2m ago`
    }, {
      label: `Ran the test suite \u2013 214 passed`,
      time: `1m ago`
    }, {
      label: `Writing review comments`,
      time: `now`
    }]
  }, {
    id: `notes`,
    title: `Release notes v2.4`,
    description: `Grouping 23 merged pull requests into features and fixes.`,
    agent: `Sonnet 5.5`,
    status: `running`,
    startedAt: e - 1 * C - 18e3,
    tools: 5,
    sources: 23,
    steps: [{
      label: `Collected 23 merged pull requests`,
      time: `1m ago`
    }, {
      label: `Drafting the highlights`,
      time: `now`
    }]
  }, {
    id: `digest`,
    title: `Weekly metrics digest`,
    description: `Pulled numbers from three dashboards and posted the summary to #metrics.`,
    agent: `Haiku 5.5`,
    status: `done`,
    elapsed: 252e3,
    tools: 8,
    sources: 3,
    steps: [{
      label: `Pulled numbers from 3 dashboards`,
      time: `22m ago`
    }, {
      label: `Posted to #metrics`,
      time: `18m ago`
    }]
  }];
};
function TComponent() {
  let eRef = n3.useRef(null);
  let [t, setT] = n3.useState(0);
  let [tasks, setTasks] = n3.useState(w);
  let sRef = n3.useRef(false);
  let cRef = n3.useRef([]);
  let l2 = (e, t2, label) => setTasks((r2) => r2.map((r3) => {
    if (r3.id === e) {
      return {
        ...r3,
        ...t2,
        steps: label ? [...r3.steps ?? [], {
          label,
          time: `now`
        }] : r3.steps
      };
    }
    return r3;
  }));
  let u2 = (e, t2) => cRef.current.push(window.setTimeout(e, t2));
  let onApprove = (e) => {
    l2(e.id, {
      status: `running`,
      startedAt: Date.now() - 6 * C
    }, `Approved by you \u2013 running on production`);
    u2(() => l2(e.id, {
      status: `done`,
      elapsed: 408e3,
      tools: 17
    }, `Migrated 48,210 rows`), 4200);
  };
  let onRetry = (e) => {
    l2(e.id, {
      status: `running`,
      startedAt: Date.now(),
      elapsed: void 0
    }, `Retrying with a slower pace`);
    u2(() => l2(e.id, {
      status: `done`,
      elapsed: 4200
    }, `Merged 1,312 duplicates`), 4200);
  };
  let onReject = (e) => l2(e.id, {
    status: `failed`,
    elapsed: 6 * C
  }, `Rejected by you`);
  n3.useEffect(() => () => cRef.current.forEach((e) => window.clearTimeout(e)), []);
  n3.useEffect(() => {
    let t2 = (t3) => () => eRef.current?.querySelector(t3)?.click();
    let n4 = [[700, t2(`.ui-ai__card[data-status='waiting'] .ui-ai__card-main`)], [2600, t2(`.ui-ai__card[data-open] .ui-ai__btn--primary`)], [1400, t2(`.ui-ai__card[data-open] .ui-ai__card-main`)], [7e3, () => {
      cRef.current.forEach((e) => window.clearTimeout(e));
      cRef.current = [];
      setTasks(w());
      setT((e) => e + 1);
    }]];
    let r2 = 0;
    let a2 = 0;
    let l3 = () => {
      if (!(sRef.current || r2 >= n4.length)) {
        a2 = window.setTimeout(() => {
          if (!sRef.current) {
            n4[r2][1]();
            r2++;
            l3();
          }
        }, n4[r2][0]);
      }
    };
    l3();
    return () => window.clearTimeout(a2);
  }, [t]);
  let m = () => sRef.current = true;
  return /* @__PURE__ */ jsx("div", { ref: eRef, className: `aic-demo`, onPointerEnter: m, onPointerDownCapture: m, onKeyDownCapture: m, onFocusCapture: m, children: /* @__PURE__ */ jsx(X1Component, { tasks, onApprove, onReject, onRetry, onOpen: () => {
  } }, t) });
}

export {
  TComponent
};
