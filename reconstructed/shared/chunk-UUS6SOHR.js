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

// reconstructed/demo.clean-DQ6MZQcD.jsx
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
}) => /* @__PURE__ */ jsxs("span", { className: `ui-aic__state-icon`, "data-status": status, "aria-hidden": `true`, children: [
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
var EeComponent = () => /* @__PURE__ */ jsxs("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("circle", { cx: `5.2`, cy: `5.2`, r: `3.3`, ...p, strokeWidth: 1.2 }),
  /* @__PURE__ */ jsx("path", { d: `m7.7 7.7 2.6 2.6`, ...p, strokeWidth: 1.2 })
] });
var Component = () => /* @__PURE__ */ jsxs("svg", { width: `13`, height: `13`, viewBox: `0 0 14 14`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("rect", { x: `1.8`, y: `2.2`, width: `3.2`, height: `9.6`, rx: `1`, ...p, strokeWidth: 1.2 }),
  /* @__PURE__ */ jsx("rect", { x: `8.9`, y: `2.2`, width: `3.2`, height: `6.4`, rx: `1`, ...p, strokeWidth: 1.2 })
] });
var V1Component = () => /* @__PURE__ */ jsx("svg", { width: `13`, height: `13`, viewBox: `0 0 14 14`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M2.2 3.6h9.6M2.2 7h9.6M2.2 10.4h9.6`, ...p, strokeWidth: 1.2 }) });
function Y1Component({
  tasks,
  onApprove,
  onReject,
  onRetry,
  onOpen,
  title = `Agent inbox`,
  view,
  defaultView = `board`,
  onViewChange,
  className
}) {
  let E = n3.useId();
  let DRef = n3.useRef(null);
  let [O, setO] = n3.useState(defaultView);
  let A = view ?? O;
  let [j, setJ] = n3.useState(null);
  let [N, setN] = n3.useState(() => Date.now());
  let [F, setF] = n3.useState({});
  let L = tasks.map((e) => {
    if (F[e.id]) {
      return {
        ...e,
        ...F[e.id]
      };
    }
    return e;
  });
  let R = L.some((e) => s(e.status));
  n3.useEffect(() => {
    if (!R) {
      return;
    }
    let e = window.setInterval(() => setN(Date.now()), 1e3);
    return () => window.clearInterval(e);
  }, [R]);
  let zRef = n3.useRef({});
  for (let e of L) {
    zRef.current[e.id] ??= Date.now();
  }
  let B = (e) => {
    if (!s(e.status)) {
      return e.elapsed ?? 0;
    }
    let t = e.startedAt === void 0 ? zRef.current[e.id] - (e.elapsed ?? 0) : c(e.startedAt);
    return N - t;
  };
  let [V, setV] = n3.useState(() => Object.fromEntries(L.map((e) => [e.id, a(e.status)])));
  let U = L.map((e) => `${e.id}:${a(e.status)}`).join(`|`);
  n3.useEffect(() => {
    if (!L.some((e2) => V[e2.id] !== a(e2.status))) {
      return;
    }
    let e = window.setTimeout(() => setV(Object.fromEntries(L.map((e2) => [e2.id, a(e2.status)]))), d() ? 0 : 900);
    return () => window.clearTimeout(e);
  }, [U]);
  let W = (e) => V[e.id] ?? a(e.status);
  let GRef = n3.useRef(/* @__PURE__ */ new Map());
  let KRef = n3.useRef(/* @__PURE__ */ new Map());
  let q = JSON.stringify(V) + A;
  if (DRef.current) {
    KRef.current = new Map([...GRef.current].map(([e, t]) => [e, t.getBoundingClientRect()]));
  }
  let JRef = n3.useRef(q);
  n3.useLayoutEffect(() => {
    if (JRef.current !== q && (JRef.current = q, !d())) {
      for (let [e, t] of GRef.current) {
        let n4 = KRef.current.get(e);
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
  }, [q]);
  let Y = (e, status, label, r2) => {
    if (r2) {
      return r2(e);
    }
    setF((r3) => ({
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
  let X = (e) => setJ((t) => {
    if (t === e) {
      return null;
    }
    return e;
  });
  let onKeyDown = (e) => {
    if (e.key === `Escape` && j) {
      e.stopPropagation();
      DRef.current?.querySelector(`[data-id="${j}"] .ui-aic__card-main`)?.focus({
        preventScroll: true
      });
      setJ(null);
    }
  };
  let Q = (e) => {
    setO(e);
    onViewChange?.(e);
  };
  let TeComponent = (e) => {
    let n4 = j === e.id;
    let i2 = (e.steps ?? []).slice(-4);
    let a2 = e.status === `done` ? `Done in ` : e.status === `failed` ? o.failed : `${o[e.status]} \xB7 `;
    let s2 = e.status === `failed` ? `` : u(B(e));
    return /* @__PURE__ */ jsxs("li", { "data-id": e.id, className: `ui-aic__card`, "data-status": e.status, "data-open": n4 ? `` : void 0, ref: (t) => {
      if (t) {
        GRef.current.set(e.id, t);
      } else {
        GRef.current.delete(e.id);
      }
    }, children: [
      /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-aic__card-main`, "aria-expanded": n4, "aria-controls": `${E}-${e.id}`, onClick: () => X(e.id), children: [
        /* @__PURE__ */ jsxs("span", { className: `ui-aic__title-row`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-aic__spark`, children: /* @__PURE__ */ jsx(M1Component, {}) }),
          /* @__PURE__ */ jsx("span", { className: `ui-aic__title`, children: e.title })
        ] }),
        e.description && /* @__PURE__ */ jsx("span", { className: `ui-aic__desc`, children: e.description }),
        /* @__PURE__ */ jsxs("span", { className: `ui-aic__foot`, children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-aic__state`, "data-status": e.status, children: [
            /* @__PURE__ */ jsx(H1Component, { status: e.status }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("span", { className: `ui-aic__state-word`, children: a2 }),
              s2
            ] })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: `ui-aic__meta`, children: [
            e.sources !== void 0 && /* @__PURE__ */ jsxs("span", { title: `Sources read`, children: [
              /* @__PURE__ */ jsx(EeComponent, {}),
              e.sources
            ] }),
            e.tools !== void 0 && /* @__PURE__ */ jsxs("span", { title: `Tool calls`, children: [
              /* @__PURE__ */ jsx(G1Component, {}),
              e.tools
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { id: `${E}-${e.id}`, className: `ui-aic__fold`, "data-open": n4 ? `` : void 0, inert: !n4, children: /* @__PURE__ */ jsx("div", { className: `ui-aic__clip`, children: /* @__PURE__ */ jsxs("div", { className: `ui-aic__more`, children: [
        /* @__PURE__ */ jsx("div", { className: `ui-aic__agent`, children: e.agent }),
        i2.length > 0 && /* @__PURE__ */ jsx("ol", { className: `ui-aic__steps`, children: i2.map((e2, t) => /* @__PURE__ */ jsxs("li", { "data-last": t === i2.length - 1 ? `` : void 0, children: [
          /* @__PURE__ */ jsx("span", { children: e2.label }),
          e2.time && /* @__PURE__ */ jsx("time", { children: e2.time })
        ] }, t)) }),
        /* @__PURE__ */ jsxs("div", { className: `ui-aic__actions`, children: [
          e.status === `waiting` && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-aic__btn`, onClick: () => Y(e, `failed`, `You rejected the request`, onReject), children: `Reject` }),
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-aic__btn ui-aic__btn--primary`, onClick: () => Y(e, `running`, `You approved \u2013 continuing`, onApprove), children: `Approve` })
          ] }),
          e.status === `failed` && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-aic__btn ui-aic__btn--primary`, onClick: () => Y(e, `running`, `Retrying`, onRetry), children: `Retry` }),
          (e.status === `running` || e.status === `done`) && onOpen && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-aic__btn`, onClick: () => onOpen(e), children: `Open` })
        ] })
      ] }) }) })
    ] }, e.id);
  };
  let $ = Object.fromEntries(i.map((e) => [e.id, L.filter((t) => W(t) === e.id).length]));
  let ne = `${L.filter((e) => e.status === `waiting` || e.status === `failed`).length} need you, ${L.filter((e) => e.status === `running`).length} running`;
  return /* @__PURE__ */ jsxs("div", { ref: DRef, className: [`ui-aic`, className].filter(Boolean).join(` `), "data-view": A, onKeyDown, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-agent-inbox-clean`, precedence: `default`, children: b }),
    /* @__PURE__ */ jsxs("div", { className: `ui-aic__bar`, children: [
      /* @__PURE__ */ jsxs("span", { className: `ui-aic__heading`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-aic__crumb`, children: `Agents` }),
        /* @__PURE__ */ jsx("span", { className: `ui-aic__slash`, "aria-hidden": `true`, children: `/` }),
        /* @__PURE__ */ jsx("span", { children: title })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-aic__views`, role: `radiogroup`, "aria-label": `Layout`, children: [`board`, `list`].map((e) => /* @__PURE__ */ jsxs("button", { type: `button`, role: `radio`, "aria-checked": A === e, className: `ui-aic__view`, onClick: () => Q(e), children: [
        e === `board` ? /* @__PURE__ */ jsx(Component, {}) : /* @__PURE__ */ jsx(V1Component, {}),
        e === `board` ? `Board` : `List`
      ] }, e)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `ui-aic__lanes`, children: i.map((e) => /* @__PURE__ */ jsxs("section", { className: `ui-aic__lane`, "aria-label": e.label, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-aic__lane-head`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-aic__lane-spark`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx(M1Component, {}) }),
        /* @__PURE__ */ jsx("span", { className: `ui-aic__lane-name`, children: e.label }),
        /* @__PURE__ */ jsx("span", { className: `ui-aic__count`, children: $[e.id] })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: `ui-aic__cards`, children: [
        L.filter((t) => W(t) === e.id).map(TeComponent),
        $[e.id] === 0 && /* @__PURE__ */ jsx("li", { className: `ui-aic__empty`, children: `Nothing here` })
      ] })
    ] }, e.id)) }),
    /* @__PURE__ */ jsx("span", { className: `ui-aic__sr`, "aria-live": `polite`, children: ne })
  ] });
}
var b = `.ui-aic{--ui-aic-lane: #f4f4f5;--ui-aic-card: #ffffff;--ui-aic-line: #e9e9ec;--ui-aic-ink: #1c1c1f;--ui-aic-text: #55555c;--ui-aic-muted: #8e8e96;--ui-aic-faint: #b4b4bb;--ui-aic-blue: #2f6bff;--ui-aic-amber: #e8a20c;--ui-aic-green: #22a05a;--ui-aic-red: #e5484d;--ui-aic-focus: rgba(23, 23, 23, 0.22);--ui-aic-ease: cubic-bezier(0.32, 0.72, 0.24, 1);box-sizing: border-box;width: 100%;min-width: 0;container-type: inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;color: var(--ui-aic-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-aic *, .ui-aic *::before, .ui-aic *::after{box-sizing: border-box}:where(.ui-aic) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-aic button:focus-visible{outline: 2px solid var(--ui-aic-focus);outline-offset: 2px}.ui-aic ul, .ui-aic ol{margin: 0;padding: 0;list-style: none}.ui-aic svg{display: block;flex: none}.ui-aic__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-aic__bar{display: flex;align-items: center;justify-content: space-between;gap: 12px;margin-bottom: 12px;padding: 0 2px}.ui-aic__heading{display: flex;align-items: center;gap: 10px;min-width: 0;font-size: 14px;font-weight: 500;color: var(--ui-aic-ink);white-space: nowrap}.ui-aic__crumb{color: var(--ui-aic-muted);font-weight: 400}.ui-aic__slash{color: var(--ui-aic-faint)}.ui-aic__views{display: flex;flex: none;gap: 2px;padding: 3px;border-radius: 10px;background: var(--ui-aic-lane)}.ui-aic__view{display: inline-flex;align-items: center;gap: 6px;height: 26px;padding: 0 10px;border-radius: 7px;font-size: 12.5px;font-weight: 500;color: var(--ui-aic-muted);transition: background-color 180ms ease, color 180ms ease, box-shadow 180ms ease}.ui-aic__view:hover{color: var(--ui-aic-ink)}.ui-aic__view[aria-checked="true"]{background: var(--ui-aic-card);color: var(--ui-aic-ink);box-shadow: 0 1px 2px rgba(16, 16, 24, 0.08), 0 0 0 1px rgba(16, 16, 24, 0.04)}.ui-aic__lanes{display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: 8px;align-items: start}.ui-aic__lane{min-width: 0;padding: 4px 4px 4px;border-radius: 14px;background: var(--ui-aic-lane)}.ui-aic__lane-head{display: grid;grid-template-columns: 20px 1fr 20px;align-items: center;height: 34px;padding: 0 8px 0 10px}.ui-aic__lane-spark{color: var(--ui-aic-blue);opacity: 0.7}.ui-aic__lane-name{overflow: hidden;font-size: 11px;font-weight: 500;letter-spacing: 0.08em;text-align: center;text-transform: uppercase;color: var(--ui-aic-muted);white-space: nowrap;text-overflow: ellipsis}.ui-aic__count{display: grid;place-items: center;min-width: 20px;height: 18px;padding: 0 5px;border-radius: 6px;background: rgba(16, 16, 24, 0.06);font-size: 11px;font-weight: 500;color: var(--ui-aic-text);font-variant-numeric: tabular-nums}.ui-aic__cards{display: grid;gap: 6px}.ui-aic__empty{padding: 18px 0 20px;font-size: 12.5px;text-align: center;color: var(--ui-aic-faint)}.ui-aic__card{position: relative;border-radius: 10px;background: var(--ui-aic-card);box-shadow: 0 0 0 1px var(--ui-aic-line), 0 1px 2px rgba(16, 16, 24, 0.04);transition: box-shadow 200ms ease}.ui-aic__card:hover, .ui-aic__card[data-open]{box-shadow: 0 0 0 1px #dcdce1, 0 4px 14px -6px rgba(16, 16, 24, 0.12)}.ui-aic__card-main{display: grid;gap: 6px;width: 100%;padding: 12px 14px 12px 12px;border-radius: 10px;container: aic-card / inline-size}.ui-aic__title-row{display: flex;align-items: center;gap: 10px;min-width: 0}.ui-aic__spark{display: grid;flex: none;place-items: center;width: 16px;color: var(--ui-aic-blue);transition: color 300ms ease}.ui-aic__card[data-status="waiting"] .ui-aic__spark{color: var(--ui-aic-amber)}.ui-aic__card[data-status="failed"] .ui-aic__spark{color: var(--ui-aic-red)}.ui-aic__card[data-status="done"] .ui-aic__spark{color: var(--ui-aic-green)}.ui-aic__title{min-width: 0;overflow: hidden;font-size: 14px;font-weight: 500;line-height: 20px;color: var(--ui-aic-ink);white-space: nowrap;text-overflow: ellipsis}.ui-aic__desc{display: -webkit-box;padding-left: 26px;overflow: hidden;font-size: 13px;line-height: 19px;color: var(--ui-aic-text);-webkit-line-clamp: 2;-webkit-box-orient: vertical}.ui-aic__foot{display: flex;align-items: center;justify-content: space-between;gap: 10px;min-width: 0;margin-top: 4px;padding-left: 26px}.ui-aic__state{display: inline-flex;align-items: center;gap: 8px;min-width: 0;font-size: 12.5px;color: var(--ui-aic-text);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-aic__state > span:last-child{overflow: hidden;text-overflow: ellipsis}.ui-aic__state-icon{display: grid;flex: none;place-items: center;width: 12px;height: 12px;color: var(--ui-aic-blue);animation: ui-aic-pop 360ms var(--ui-aic-ease) both}.ui-aic__state-icon[data-status="running"] svg{animation: ui-aic-spin 900ms linear infinite}.ui-aic__state-icon[data-status="waiting"]{color: var(--ui-aic-amber)}.ui-aic__state-icon[data-status="done"]{color: var(--ui-aic-green)}.ui-aic__state-icon[data-status="failed"]{color: var(--ui-aic-red)}.ui-aic__meta{display: inline-flex;flex: none;align-items: center;font-size: 12px;color: var(--ui-aic-muted);font-variant-numeric: tabular-nums}.ui-aic__meta > span{display: inline-flex;align-items: center;gap: 5px;padding: 0 9px}.ui-aic__meta > span + span{border-left: 1px solid var(--ui-aic-line)}.ui-aic__meta > span:last-child{padding-right: 0}.ui-aic__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 460ms var(--ui-aic-ease), opacity 240ms ease}.ui-aic__fold[data-open]{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows 460ms var(--ui-aic-ease), opacity 320ms ease 100ms}.ui-aic__clip{min-height: 0;overflow: hidden}.ui-aic__more{margin: 0 14px 0 12px;padding: 10px 0 12px;border-top: 1px solid var(--ui-aic-line)}.ui-aic__agent{font-size: 12px;color: var(--ui-aic-muted)}.ui-aic__steps{position: relative;display: grid;gap: 5px;margin-top: 6px !important;padding-left: 12px !important}.ui-aic__steps li{position: relative;display: flex;justify-content: space-between;gap: 10px;font-size: 12.5px;line-height: 18px;color: var(--ui-aic-text)}.ui-aic__steps li::before{content: "";position: absolute;top: 7px;left: -12px;width: 4px;height: 4px;border-radius: 50%;background: var(--ui-aic-faint)}.ui-aic__steps li:not(:last-child)::after{content: "";position: absolute;top: 15px;bottom: -8px;left: -10.5px;width: 1px;background: var(--ui-aic-line)}.ui-aic__steps li[data-last]::before{background: var(--ui-aic-ink)}.ui-aic__steps li > span{min-width: 0}.ui-aic__steps time{flex: none;color: var(--ui-aic-muted)}.ui-aic__actions{display: flex;justify-content: flex-end;gap: 6px;margin-top: 10px}.ui-aic__actions:empty{display: none}.ui-aic__btn{display: inline-flex;align-items: center;height: 28px;padding: 0 12px;border-radius: 8px;box-shadow: inset 0 0 0 1px var(--ui-aic-line);background: var(--ui-aic-card);font-size: 12.5px;font-weight: 500;color: var(--ui-aic-ink);transition: background-color 160ms ease}.ui-aic__btn:hover{background: var(--ui-aic-lane)}.ui-aic__btn--primary{background: var(--ui-aic-ink);box-shadow: none;color: var(--ui-aic-card)}.ui-aic__btn--primary:hover{background: #33333a}.ui-aic[data-view="list"] .ui-aic__lanes{grid-template-columns: minmax(0, 1fr)}.ui-aic[data-view="list"] .ui-aic__lane-head{grid-template-columns: 20px auto 1fr;gap: 4px}.ui-aic[data-view="list"] .ui-aic__lane-name{text-align: left}.ui-aic[data-view="list"] .ui-aic__count{justify-self: start}.ui-aic__lanes{animation: ui-aic-in 320ms ease both}@keyframes ui-aic-spin{to{transform: rotate(360deg)}}@keyframes ui-aic-pop{from{opacity: 0;transform: scale(0.6)}}@keyframes ui-aic-in{from{opacity: 0.4}}@container (max-width: 620px){.ui-aic__views{display: none}.ui-aic .ui-aic__lanes{grid-template-columns: minmax(0, 1fr)}.ui-aic .ui-aic__lane-head{grid-template-columns: 20px auto 1fr;gap: 4px}.ui-aic .ui-aic__lane-name{text-align: left}.ui-aic .ui-aic__count{justify-self: start}}@container aic-card (max-width: 300px){.ui-aic__desc, .ui-aic__foot{padding-left: 0}.ui-aic__state:is([data-status="running"], [data-status="done"]) .ui-aic__state-word{display: none}}@container (max-width: 360px){.ui-aic__desc, .ui-aic__foot{padding-left: 0}.ui-aic__title{white-space: normal}}@media (pointer: coarse){.ui-aic__view{height: 32px}.ui-aic__btn{height: 36px;padding: 0 16px}}@media (prefers-reduced-motion: reduce){.ui-aic *, .ui-aic *::before, .ui-aic *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-aic{--ui-aic-lane: #161618;--ui-aic-card: #1e1e21;--ui-aic-line: #2c2c31;--ui-aic-ink: #ededed;--ui-aic-text: #b6b6bd;--ui-aic-muted: #85858d;--ui-aic-faint: #5c5c63;--ui-aic-blue: #5b8cff;--ui-aic-amber: #f5b638;--ui-aic-green: #3ecf8e;--ui-aic-red: #ff6b66;--ui-aic-focus: rgba(255, 255, 255, 0.3)}:where(.dark, [data-theme="dark"]) .ui-aic__card:hover, :where(.dark, [data-theme="dark"]) .ui-aic__card[data-open]{box-shadow: 0 0 0 1px #3a3a40, 0 6px 18px -8px rgba(0, 0, 0, 0.6)}:where(.dark, [data-theme="dark"]) .ui-aic__count{background: rgba(255, 255, 255, 0.07)}:where(.dark, [data-theme="dark"]) .ui-aic__btn--primary:hover{background: #d6d6da}:where(.dark, [data-theme="dark"]) .ui-aic__state-icon[data-status="failed"] path{stroke: #1e1e21}`;
var x = 6e4;
var S = () => {
  let e = Date.now();
  return [{
    id: `migrate`,
    title: `Migrate users table`,
    description: `Split users into accounts and profiles on Postgres 17. The dry run on staging passed.`,
    agent: `Opus 5.5`,
    status: `waiting`,
    startedAt: e - 6 * x - 12e3,
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
    startedAt: e - 3 * x - 4e4,
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
    startedAt: e - 1 * x - 18e3,
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
function CComponent() {
  let eRef = n3.useRef(null);
  let [t, setT] = n3.useState(0);
  let [tasks, setTasks] = n3.useState(S);
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
      startedAt: Date.now() - 6 * x
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
    elapsed: 6 * x
  }, `Rejected by you`);
  n3.useEffect(() => () => cRef.current.forEach((e) => window.clearTimeout(e)), []);
  n3.useEffect(() => {
    let t2 = (t3) => () => eRef.current?.querySelector(t3)?.click();
    let n4 = [[700, t2(`.ui-aic__card[data-status='waiting'] .ui-aic__card-main`)], [2600, t2(`.ui-aic__card[data-open] .ui-aic__btn--primary`)], [1400, t2(`.ui-aic__card[data-open] .ui-aic__card-main`)], [7e3, () => {
      cRef.current.forEach((e) => window.clearTimeout(e));
      cRef.current = [];
      setTasks(S());
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
  return /* @__PURE__ */ jsx("div", { ref: eRef, className: `aic-demo`, onPointerEnter: m, onPointerDownCapture: m, onKeyDownCapture: m, onFocusCapture: m, children: /* @__PURE__ */ jsx(Y1Component, { tasks, onApprove, onReject, onRetry, onOpen: () => {
  } }, t) });
}

export {
  CComponent
};
