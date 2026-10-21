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

// reconstructed/demo.clean-CykqoJC9.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (startedAt) => {
  if (typeof startedAt == `number`) {
    return startedAt;
  }
  return startedAt.getTime();
};
var a = (e) => String(e).padStart(2, `0`);
var o = (e) => {
  let t = Math.max(0, Math.floor(e / 1e3));
  if (t < 60) {
    return `${t}s`;
  }
  let n4 = Math.floor(t / 60);
  if (n4 < 60) {
    return `${n4}m ${a(t % 60)}s`;
  }
  return `${Math.floor(n4 / 60)}h ${a(n4 % 60)}m`;
};
var s = (e) => `${(Math.max(0, e) / 1e3).toFixed(1)}s`;
var c = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
var l = () => typeof navigator < `u` && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
var easing = `cubic-bezier(0.32, 0.72, 0.24, 1)`;
var d = {
  fill: `none`,
  stroke: `currentColor`,
  strokeWidth: 1.4,
  strokeLinecap: `round`,
  strokeLinejoin: `round`
};
var F1Component = () => /* @__PURE__ */ jsxs("svg", { width: `14`, height: `14`, viewBox: `0 0 14 14`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("path", { d: `M7 1.2c.4 2.9 1.9 4.4 4.8 4.8-2.9.4-4.4 1.9-4.8 4.8C6.6 7.9 5.1 6.4 2.2 6 5.1 5.6 6.6 4.1 7 1.2Z`, fill: `currentColor` }),
  /* @__PURE__ */ jsx("circle", { cx: `11.6`, cy: `11.4`, r: `1.1`, fill: `currentColor`, opacity: `0.55` })
] });
var P1Component = ({
  status
}) => /* @__PURE__ */ jsxs("span", { className: `ui-stc__step-icon`, "data-status": status, "aria-hidden": `true`, children: [
  status === `done` && /* @__PURE__ */ jsxs("svg", { width: `16`, height: `16`, viewBox: `0 0 16 16`, children: [
    /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `6.5`, fill: `currentColor` }),
    /* @__PURE__ */ jsx("path", { d: `m5.4 8.2 1.8 1.8 3.4-3.7`, fill: `none`, stroke: `#fff`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round` })
  ] }),
  status === `active` && /* @__PURE__ */ jsxs("svg", { width: `16`, height: `16`, viewBox: `0 0 16 16`, children: [
    /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `5.8`, fill: `none`, stroke: `currentColor`, strokeOpacity: `0.2`, strokeWidth: `1.6` }),
    /* @__PURE__ */ jsx("path", { d: `M8 2.2a5.8 5.8 0 0 1 5.8 5.8`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.6`, strokeLinecap: `round` })
  ] }),
  status === `pending` && /* @__PURE__ */ jsx("svg", { width: `16`, height: `16`, viewBox: `0 0 16 16`, children: /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `5.8`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.2`, strokeDasharray: `2 2.2` }) })
] });
var M1Component = () => /* @__PURE__ */ jsxs("svg", { width: `16`, height: `16`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("rect", { x: `4.2`, y: `3.4`, width: `2.6`, height: `9.2`, rx: `0.9`, fill: `currentColor` }),
  /* @__PURE__ */ jsx("rect", { x: `9.2`, y: `3.4`, width: `2.6`, height: `9.2`, rx: `0.9`, fill: `currentColor` })
] });
var H1Component = () => /* @__PURE__ */ jsx("svg", { width: `16`, height: `16`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M5 3.6v8.8c0 .6.6.9 1.1.6l6.6-4.4a.7.7 0 0 0 0-1.2L6.1 3c-.5-.3-1.1 0-1.1.6Z`, fill: `currentColor` }) });
var G1Component = () => /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M6.9 1 2.6 6.6h3l-.5 4.4 4.3-5.6h-3L6.9 1Z`, fill: `currentColor` }) });
var Component = () => /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m3.4 3.4 5.2 5.2M8.6 3.4 3.4 8.6`, ...d }) });
var V1Component = () => /* @__PURE__ */ jsx("svg", { width: `16`, height: `16`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M8 12.6V3.6M4.2 7.2 8 3.4l3.8 3.8`, ...d, strokeWidth: 1.6 }) });
var Y1Component = () => /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m2.8 6.2 2 2 4.4-4.6`, ...d, strokeWidth: 1.5 }) });
var B1Component = () => /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M3 2.4v3.4c0 .9.7 1.6 1.6 1.6h4.6M7.6 5.6l1.8 1.8-1.8 1.8`, ...d, strokeWidth: 1.2 }) });
function X1Component({
  title,
  agent,
  steps,
  queue,
  status = `running`,
  startedAt,
  onQueue,
  onInterrupt,
  onRemove,
  draft,
  onDraftChange,
  onPause,
  onResume,
  placeholder = `Steer the agent\u2026`,
  className
}) {
  let N = n3.useId();
  let PRef = n3.useRef(null);
  let FRef = n3.useRef(null);
  let IRef = n3.useRef(null);
  let [L, setL] = n3.useState(``);
  let R = draft ?? L;
  let z = (e) => {
    setL(e);
    onDraftChange?.(e);
  };
  let [te, setTe] = n3.useState(``);
  let [V, setV] = n3.useState(() => Date.now());
  let H = l() ? `\u2318` : `Ctrl`;
  n3.useEffect(() => {
    if (status !== `running`) {
      return;
    }
    let e = window.setInterval(() => setV(Date.now()), 100);
    return () => window.clearInterval(e);
  }, [status]);
  let reRef = n3.useRef(Date.now());
  let U = V - (startedAt === void 0 ? reRef.current : i(startedAt));
  let WRef = n3.useRef(/* @__PURE__ */ new Map());
  let ie = (e) => {
    if (e.startedAt !== void 0) {
      return V - i(e.startedAt);
    }
    let t = WRef.current.get(e.id);
    if (t === void 0) {
      WRef.current.set(e.id, t = Date.now());
    }
    return V - t;
  };
  let length = steps.filter((e) => e.status === `done`).length;
  let G = status !== `done`;
  let KRef = n3.useRef(/* @__PURE__ */ new Map());
  let q = (e) => (t) => {
    if (t) {
      KRef.current.set(e, t);
    } else {
      KRef.current.delete(e);
    }
  };
  let JRef = n3.useRef(/* @__PURE__ */ new Map());
  let YRef = n3.useRef(0);
  let X = JSON.stringify([steps.map((e) => [e.id, e.status, e.title, (e.notes ?? []).map((e2) => e2.id)]), queue.map((e) => e.id)]);
  let ZRef = n3.useRef(X);
  if (PRef.current && X !== ZRef.current) {
    JRef.current = new Map([...KRef.current].map(([e, t]) => [e, t.getBoundingClientRect()]));
    YRef.current = FRef.current?.offsetHeight ?? 0;
  }
  n3.useLayoutEffect(() => {
    if (ZRef.current === X || (ZRef.current = X, c())) {
      return;
    }
    let FRef_current = FRef.current;
    if (FRef_current && YRef.current && Math.abs(FRef_current.offsetHeight - YRef.current) > 1) {
      FRef_current.animate([{
        height: `${YRef.current}px`
      }, {
        height: `${FRef_current.offsetHeight}px`
      }], {
        duration: 480,
        easing
      });
    }
    for (let [e, t] of KRef.current) {
      let n4 = e.slice(e.indexOf(`:`) + 1);
      let r2 = JRef.current.get(e) ?? (e.startsWith(`note:`) ? JRef.current.get(`queued:${n4}`) : void 0);
      let i2 = t.getBoundingClientRect();
      if (!r2) {
        t.animate([{
          opacity: 0,
          transform: `translateY(6px)`
        }, {
          opacity: 1,
          transform: `none`
        }], {
          duration: 360,
          easing
        });
        continue;
      }
      let a2 = r2.left - i2.left;
      let o2 = r2.top - i2.top;
      if (Math.abs(a2) < 1 && Math.abs(o2) < 1) {
        continue;
      }
      let s2 = !JRef.current.has(e);
      t.animate([{
        transform: `translate(${a2}px, ${o2}px)`,
        zIndex: 2
      }, {
        transform: `none`,
        zIndex: 2
      }], {
        duration: s2 ? 620 : 480,
        easing
      });
      if (s2) {
        t.setAttribute(`data-landed`, ``);
      }
    }
  }, [X]);
  let Q = steps.flatMap((e) => (e.notes ?? []).filter((e2) => e2.picked).map((e2) => e2.id)).join(`|`);
  let $RefRef = n3.useRef(new Set(Q.split(`|`).filter(Boolean)));
  n3.useEffect(() => {
    for (let e of steps) {
      for (let n4 of e.notes ?? []) {
        if (n4.picked && !$RefRef.current.has(n4.id)) {
          $RefRef.current.add(n4.id);
          setTe(`${agent ?? `The agent`} picked up: ${n4.text}`);
        }
      }
    }
  }, [Q]);
  let oe = (e) => {
    let t = R.trim();
    if (t && G) {
      if (e) {
        onInterrupt?.(t);
      } else {
        onQueue?.(t);
      }
      setTe(e ? `Interrupting: ${t}` : `Queued for the next step: ${t}`);
      z(``);
    }
  };
  let onKeyDown = (e) => {
    if (e.key === `Enter` && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      oe(e.metaKey || e.ctrlKey);
    } else if (e.key === `Escape` && R) {
      e.stopPropagation();
      z(``);
    }
  };
  n3.useLayoutEffect(() => {
    let IRef_current = IRef.current;
    if (IRef_current) {
      IRef_current.style.height = `0px`;
      IRef_current.style.height = `${Math.min(IRef_current.scrollHeight, 60)}px`;
    }
  }, [R]);
  let ce = status === `done` ? `Done in ${o(U)}` : status === `paused` ? `Paused` : `Running \xB7 ${o(U)}`;
  return /* @__PURE__ */ jsxs("div", { ref: PRef, className: [`ui-stc`, className].filter(Boolean).join(` `), "data-status": status, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-agent-steering-clean`, precedence: `default`, children: S }),
    /* @__PURE__ */ jsxs("div", { ref: FRef, className: `ui-stc__card`, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-stc__head`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-stc__spark`, children: /* @__PURE__ */ jsx(F1Component, {}) }),
        /* @__PURE__ */ jsxs("div", { className: `ui-stc__heading`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-stc__title`, children: title }),
          /* @__PURE__ */ jsxs("span", { className: `ui-stc__sub`, children: [
            agent && /* @__PURE__ */ jsxs(Fragment, { children: [
              agent,
              /* @__PURE__ */ jsx("span", { className: `ui-stc__dot`, "aria-hidden": `true`, children: `\xB7` })
            ] }),
            status === `done` ? `${steps.length} steps` : `Step ${Math.min(length + 1, steps.length)} of ${steps.length}`
          ] })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: `ui-stc__state`, "data-status": status, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-stc__pulse`, "aria-hidden": `true` }),
          ce
        ] }),
        status === `running` && onPause && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-stc__icon-btn`, "aria-label": `Pause the run`, title: `Pause`, onClick: onPause, children: /* @__PURE__ */ jsx(M1Component, {}) }),
        status === `paused` && onResume && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-stc__icon-btn`, "aria-label": `Resume the run`, title: `Resume`, onClick: onResume, children: /* @__PURE__ */ jsx(H1Component, {}) })
      ] }),
      /* @__PURE__ */ jsx("ol", { className: `ui-stc__plan`, "aria-label": `Plan`, children: steps.map((e) => {
        let status_1 = e.status ?? `pending`;
        return /* @__PURE__ */ jsxs("li", { ref: q(`step:${e.id}`), className: `ui-stc__step`, "data-status": status_1, "aria-current": status_1 === `active` ? `step` : void 0, children: [
          /* @__PURE__ */ jsxs("div", { className: `ui-stc__step-row`, children: [
            /* @__PURE__ */ jsx(P1Component, { status: status_1 }),
            /* @__PURE__ */ jsx("span", { className: `ui-stc__step-title`, children: e.title }),
            /* @__PURE__ */ jsx("span", { className: `ui-stc__step-time`, children: status_1 === `done` && e.duration !== void 0 ? s(e.duration) : status_1 === `active` && status === `running` ? s(ie(e)) : `` })
          ] }),
          (e.notes ?? []).map((e2) => /* @__PURE__ */ jsxs("div", { ref: q(`note:${e2.id}`), className: `ui-stc__note`, "data-picked": e2.picked ?? void 0, children: [
            /* @__PURE__ */ jsx(B1Component, {}),
            /* @__PURE__ */ jsx("span", { className: `ui-stc__note-text`, children: e2.text }),
            e2.picked && /* @__PURE__ */ jsxs("span", { className: `ui-stc__note-tag`, children: [
              /* @__PURE__ */ jsx(Y1Component, {}),
              e2.picked === `now` ? `Interrupted` : `Picked up`
            ] })
          ] }, e2.id))
        ] }, e.id);
      }) }),
      queue.length > 0 && /* @__PURE__ */ jsxs("div", { className: `ui-stc__queue`, ref: q(`queue:box`), children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-stc__label`, children: [
          `Queued for the next step `,
          /* @__PURE__ */ jsx("span", { children: queue.length })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: `ui-stc__queued`, children: queue.map((e) => /* @__PURE__ */ jsxs("li", { ref: q(`queued:${e.id}`), className: `ui-stc__chip`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-stc__chip-text`, children: e.text }),
          onInterrupt && G && /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-stc__chip-btn`, title: `Apply now (${H}\u21B5)`, onClick: () => onInterrupt(e.text, e.id), children: [
            /* @__PURE__ */ jsx(G1Component, {}),
            `Now`
          ] }),
          onRemove && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-stc__chip-x`, "aria-label": `Remove \u201C${e.text}\u201D`, onClick: () => onRemove(e.id), children: /* @__PURE__ */ jsx(Component, {}) })
        ] }, e.id)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-stc__compose`, ref: q(`compose:box`), "data-disabled": G ? void 0 : ``, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-stc__field`, onClick: (e) => !e.target.closest(`button`) && IRef.current?.focus({
          preventScroll: true
        }), children: [
          /* @__PURE__ */ jsx("textarea", { ref: IRef, id: `${N}-field`, rows: 1, value: R, disabled: !G, placeholder: G ? placeholder : `The run has finished`, "aria-label": `Steer the agent`, "aria-describedby": `${N}-hint`, onChange: (e) => z(e.target.value), onKeyDown }),
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-stc__send`, "aria-label": `Queue for the next step`, disabled: !R.trim() || !G, onClick: () => oe(false), children: /* @__PURE__ */ jsx(V1Component, {}) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `ui-stc__hint`, id: `${N}-hint`, children: G ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("kbd", { children: `\u21B5` }),
            ` next step`
          ] }),
          onInterrupt && /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("kbd", { children: H }),
            /* @__PURE__ */ jsx("kbd", { children: `\u21B5` }),
            ` interrupt now`
          ] })
        ] }) : /* @__PURE__ */ jsx("span", { children: `Notes still in the queue were not used` }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("span", { className: `ui-stc__sr`, "aria-live": `polite`, children: te })
  ] });
}
var S = `.ui-stc{--ui-stc-card: #ffffff;--ui-stc-strong: #000000;--ui-stc-ink: rgba(0, 0, 0, 0.88);--ui-stc-text: rgba(0, 0, 0, 0.61);--ui-stc-muted: rgba(0, 0, 0, 0.45);--ui-stc-faint: rgba(0, 0, 0, 0.27);--ui-stc-icon: rgba(0, 0, 0, 0.447);--ui-stc-line: rgba(0, 0, 0, 0.06);--ui-stc-rail: rgba(0, 0, 0, 0.15);--ui-stc-wash: rgba(0, 0, 0, 0.03);--ui-stc-fill: rgba(0, 0, 0, 0.06);--ui-stc-solid: rgba(0, 0, 0, 0.88);--ui-stc-on-solid: #fcfcfc;--ui-stc-accent: rgba(0, 96, 226, 0.765);--ui-stc-accent-bg: rgba(0, 96, 226, 0.06);--ui-stc-amber: #d9930d;--ui-stc-green: #1a9a52;--ui-stc-focus: rgba(0, 96, 226, 0.35);--ui-stc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-stc-ease: cubic-bezier(0.32, 0.72, 0.24, 1);position: relative;box-sizing: border-box;width: 100%;max-width: 460px;container-type: inline-size;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;font-weight: 400;line-height: 20px;color: var(--ui-stc-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-stc *, .ui-stc *::before, .ui-stc *::after{box-sizing: border-box}:where(.ui-stc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-stc button:focus-visible{outline: 2px solid var(--ui-stc-focus);outline-offset: 1px}.ui-stc ol, .ui-stc ul{margin: 0;padding: 0;list-style: none}.ui-stc svg{display: block;flex: none}.ui-stc__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-stc__card{overflow: hidden;border-radius: 10px;background: var(--ui-stc-card);box-shadow: var(--ui-stc-shadow)}.ui-stc__head{display: flex;align-items: center;gap: 10px;min-width: 0;padding: 12px 12px 12px 14px}.ui-stc__spark{display: grid;flex: none;place-items: center;width: 16px;color: var(--ui-stc-accent)}.ui-stc[data-status="paused"] .ui-stc__spark{color: var(--ui-stc-amber)}.ui-stc[data-status="done"] .ui-stc__spark{color: var(--ui-stc-green)}.ui-stc__heading{display: grid;flex: 1;min-width: 0}.ui-stc__title{overflow: hidden;font-weight: 500;color: var(--ui-stc-strong);white-space: nowrap;text-overflow: ellipsis}.ui-stc__sub{overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-stc-muted);white-space: nowrap;text-overflow: ellipsis}.ui-stc__dot{margin: 0 6px;color: var(--ui-stc-faint)}.ui-stc__state{display: inline-flex;flex: none;align-items: center;gap: 7px;font-size: 12px;line-height: 16px;color: var(--ui-stc-text);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-stc__pulse{position: relative;width: 6px;height: 6px;border-radius: 50%;background: var(--ui-stc-accent)}.ui-stc__pulse::after{content: "";position: absolute;inset: -3px;border-radius: 50%;background: var(--ui-stc-accent);opacity: 0;animation: ui-stc-pulse 1600ms ease-out infinite}.ui-stc__state[data-status="paused"] .ui-stc__pulse{background: var(--ui-stc-amber)}.ui-stc__state[data-status="done"] .ui-stc__pulse{background: var(--ui-stc-green)}.ui-stc__state:not([data-status="running"]) .ui-stc__pulse::after{display: none}.ui-stc__icon-btn{display: grid;flex: none;place-items: center;width: 28px;height: 28px;border-radius: 6px;background: var(--ui-stc-card);box-shadow: var(--ui-stc-shadow);color: var(--ui-stc-icon);transition: color 160ms ease, background-color 160ms ease}.ui-stc__icon-btn:hover{color: var(--ui-stc-ink);background: var(--ui-stc-wash)}.ui-stc__plan{display: grid;grid-template-columns: minmax(0, 1fr);padding: 10px 14px 12px !important;border-top: 0.5px solid var(--ui-stc-line)}.ui-stc__step{position: relative;padding: 5px 0}.ui-stc__step:not(:last-child)::after{content: "";position: absolute;top: 25px;bottom: -3px;left: 7.5px;width: 0.5px;background: var(--ui-stc-rail)}.ui-stc__step-row{display: flex;align-items: center;gap: 10px;min-width: 0}.ui-stc__step-icon{display: grid;flex: none;place-items: center;width: 16px;height: 16px;color: var(--ui-stc-faint)}.ui-stc__step-icon[data-status="done"]{color: var(--ui-stc-accent);animation: ui-stc-pop 360ms var(--ui-stc-ease) both}.ui-stc__step-icon[data-status="active"]{color: var(--ui-stc-accent)}.ui-stc__step-icon[data-status="active"] svg{animation: ui-stc-spin 900ms linear infinite}.ui-stc__step-title{flex: 1;min-width: 0;overflow: hidden;color: var(--ui-stc-ink);white-space: nowrap;text-overflow: ellipsis;transition: color 240ms ease}.ui-stc__step[data-status="done"] .ui-stc__step-title{color: var(--ui-stc-text)}.ui-stc__step[data-status="pending"] .ui-stc__step-title{color: var(--ui-stc-muted)}.ui-stc[data-status="running"] .ui-stc__step[data-status="active"] .ui-stc__step-title{font-weight: 500;background: linear-gradient(90deg, var(--ui-stc-ink) 0%, var(--ui-stc-ink) 40%, var(--ui-stc-faint) 50%, var(--ui-stc-ink) 60%, var(--ui-stc-ink) 100%) 0 0 / 300% 100%;-webkit-background-clip: text;background-clip: text;color: transparent;animation: ui-stc-shimmer 2200ms linear infinite}.ui-stc__step[data-status="active"] .ui-stc__step-title{font-weight: 500}.ui-stc__step-time{flex: none;font-size: 12px;color: var(--ui-stc-faint);font-variant-numeric: tabular-nums}.ui-stc__note{display: flex;align-items: flex-start;gap: 6px;margin: 4px 0 2px 26px;padding: 4px 8px 4px 6px;border-radius: 6px;background: var(--ui-stc-wash);box-shadow: inset 0 0 0 0.5px var(--ui-stc-line);font-size: 12px;line-height: 16px;color: var(--ui-stc-ink)}.ui-stc__note > svg{margin-top: 2px;color: var(--ui-stc-muted)}.ui-stc__note-text{flex: 1;min-width: 0}.ui-stc__note-tag{display: inline-flex;flex: none;align-items: center;gap: 3px;color: var(--ui-stc-accent);font-weight: 500;white-space: nowrap}.ui-stc__note[data-landed]{animation: ui-stc-land 1400ms ease both}.ui-stc__queue{padding: 10px 12px 2px 14px;border-top: 0.5px solid var(--ui-stc-line)}.ui-stc__label{display: flex;align-items: center;gap: 6px;margin-bottom: 6px;font-size: 10px;font-weight: 500;line-height: 16px;letter-spacing: 0.5px;text-transform: uppercase;color: var(--ui-stc-muted)}.ui-stc__label span{display: grid;place-items: center;min-width: 16px;height: 16px;padding: 0 4px;border-radius: 4px;background: var(--ui-stc-fill);color: var(--ui-stc-text);letter-spacing: 0;font-variant-numeric: tabular-nums}.ui-stc__queued{display: grid;gap: 6px}.ui-stc__chip{position: relative;display: flex;align-items: center;gap: 6px;min-height: 32px;padding: 4px 4px 4px 10px;border-radius: 8px;background: var(--ui-stc-card);box-shadow: var(--ui-stc-shadow);color: var(--ui-stc-ink)}.ui-stc__chip::before{content: "";position: absolute;top: 8px;bottom: 8px;left: 0;width: 2px;border-radius: 0 2px 2px 0;background: var(--ui-stc-accent)}.ui-stc__chip-text{flex: 1;min-width: 0;font-size: 12.5px;line-height: 18px}.ui-stc__chip-btn{display: inline-flex;flex: none;align-items: center;gap: 4px;height: 24px;padding: 0 8px 0 6px;border-radius: 6px;font-size: 12px;font-weight: 500;color: var(--ui-stc-text);transition: background-color 160ms ease, color 160ms ease}.ui-stc__chip-btn:hover{background: var(--ui-stc-accent-bg);color: var(--ui-stc-accent)}.ui-stc__chip-x{display: grid;flex: none;place-items: center;width: 24px;height: 24px;border-radius: 6px;color: var(--ui-stc-faint);transition: background-color 160ms ease, color 160ms ease}.ui-stc__chip-x:hover{background: var(--ui-stc-wash);color: var(--ui-stc-ink)}.ui-stc__compose{padding: 10px 12px 10px 14px;border-top: 0.5px solid var(--ui-stc-line)}.ui-stc__field{display: flex;align-items: flex-end;gap: 8px;min-height: 36px;padding: 4px 4px 4px 10px;border-radius: 8px;background: var(--ui-stc-wash);box-shadow: inset 0 0 0 0.5px var(--ui-stc-line);cursor: text;transition: box-shadow 160ms ease, background-color 160ms ease}.ui-stc__field:focus-within{background: var(--ui-stc-card);box-shadow: inset 0 0 0 0.5px var(--ui-stc-rail), 0 0 0 3px var(--ui-stc-accent-bg)}.ui-stc__field textarea{flex: 1;min-width: 0;height: 20px;margin: 4px 0;padding: 0;border: 0;outline: none;background: none;font: inherit;color: var(--ui-stc-strong);resize: none}.ui-stc__field textarea::placeholder{color: var(--ui-stc-muted)}.ui-stc__field textarea:focus-visible{outline: none}.ui-stc__send{display: grid;flex: none;place-items: center;width: 28px;height: 28px;border-radius: 6px;background: var(--ui-stc-solid);color: var(--ui-stc-on-solid);transition: opacity 160ms ease, transform 160ms ease}.ui-stc__send:disabled{opacity: 0.18;cursor: default}.ui-stc__send:not(:disabled):active{transform: scale(0.94)}.ui-stc__hint{display: flex;flex-wrap: wrap;align-items: center;gap: 4px 14px;margin-top: 8px;font-size: 12px;line-height: 16px;color: var(--ui-stc-muted)}.ui-stc__hint > span{display: inline-flex;align-items: center;gap: 3px;white-space: nowrap}.ui-stc kbd{display: inline-grid;place-items: center;min-width: 16px;height: 16px;padding: 0 3px;border-radius: 4px;background: var(--ui-stc-card);box-shadow: var(--ui-stc-shadow);font: inherit;font-size: 10px;color: var(--ui-stc-text)}.ui-stc__compose[data-disabled] .ui-stc__field{opacity: 0.6;cursor: default}@keyframes ui-stc-spin{to{transform: rotate(360deg)}}@keyframes ui-stc-pop{from{opacity: 0;transform: scale(0.6)}}@keyframes ui-stc-pulse{from{opacity: 0.45;transform: scale(0.6)}to{opacity: 0;transform: scale(1.8)}}@keyframes ui-stc-shimmer{from{background-position: 100% 0}to{background-position: 0 0}}@keyframes ui-stc-land{0%, 30%{background-color: var(--ui-stc-accent-bg);box-shadow: inset 0 0 0 0.5px var(--ui-stc-focus)}}@container (max-width: 380px){.ui-stc__head{display: grid;grid-template-columns: auto minmax(0, 1fr) auto;column-gap: 10px;row-gap: 8px}.ui-stc__spark{grid-row: 1;align-self: center}.ui-stc__heading{grid-column: 2;grid-row: 1}.ui-stc__state{grid-column: 2;grid-row: 2;justify-self: start}.ui-stc__head > .ui-stc__icon-btn{grid-column: 3;grid-row: 1}.ui-stc__head{padding-left: 12px}.ui-stc__plan, .ui-stc__queue, .ui-stc__compose{padding-left: 12px;padding-right: 12px}}@media (pointer: coarse){.ui-stc__icon-btn, .ui-stc__send{width: 34px;height: 34px}.ui-stc__chip-btn, .ui-stc__chip-x{height: 30px}.ui-stc__chip-x{width: 30px}}@media (prefers-reduced-motion: reduce){.ui-stc *, .ui-stc *::before, .ui-stc *::after{animation: none !important;transition: none !important}.ui-stc[data-status="running"] .ui-stc__step[data-status="active"] .ui-stc__step-title{background: none;color: var(--ui-stc-ink)}}:where(.dark, [data-theme="dark"]) .ui-stc{--ui-stc-card: #1c1c1f;--ui-stc-strong: #ffffff;--ui-stc-ink: rgba(255, 255, 255, 0.9);--ui-stc-text: rgba(255, 255, 255, 0.62);--ui-stc-muted: rgba(255, 255, 255, 0.45);--ui-stc-faint: rgba(255, 255, 255, 0.28);--ui-stc-icon: rgba(255, 255, 255, 0.5);--ui-stc-line: rgba(255, 255, 255, 0.08);--ui-stc-rail: rgba(255, 255, 255, 0.16);--ui-stc-wash: rgba(255, 255, 255, 0.04);--ui-stc-fill: rgba(255, 255, 255, 0.08);--ui-stc-solid: rgba(255, 255, 255, 0.92);--ui-stc-on-solid: #141416;--ui-stc-accent: #5b9aff;--ui-stc-accent-bg: rgba(91, 154, 255, 0.12);--ui-stc-amber: #f5b638;--ui-stc-green: #3ecf8e;--ui-stc-focus: rgba(91, 154, 255, 0.45);--ui-stc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-stc__step-icon[data-status="done"] path{stroke: #1c1c1f}`;
var C = [{
  id: `read`,
  title: `Read schema and 14 migrations`
}, {
  id: `draft`,
  title: `Plan the split into accounts and profiles`
}, {
  id: `write`,
  title: `Write migration 0042_split_users`
}, {
  id: `dry`,
  title: `Dry run on staging`
}, {
  id: `pr`,
  title: `Open a pull request for review`
}];
var w = {
  read: 1400,
  draft: 4600,
  write: 5200,
  dry: 2600,
  pr: 1800
};
var T = {
  write: `Write migration 0042 for Postgres 16`
};
var E = `Use Postgres 16 syntax \u2013 prod isn't on 17 yet`;
var D = `Keep the old users view for a week`;
function OComponent() {
  let [e, setE] = n3.useState(C);
  let [i2, setI] = n3.useState([]);
  let [status, setStatus] = n3.useState(`running`);
  let [draft, setDraft] = n3.useState(``);
  let [startedAt, setStartedAt] = n3.useState(() => Date.now() - 12e4 - 6e3);
  let fRef = n3.useRef(null);
  let pRef = n3.useRef(true);
  let mRef = n3.useRef([]);
  let hRef = n3.useRef([]);
  let gRef = n3.useRef(i2);
  gRef.current = i2;
  let _RefRef = n3.useRef(e);
  _RefRef.current = e;
  let vRef = n3.useRef(0);
  let y = (e2, t, n4) => {
    e2.current.push(window.setTimeout(t, n4));
  };
  let b = (e2) => {
    e2.current.forEach((e3) => window.clearTimeout(e3));
    e2.current = [];
  };
  let S2 = (e2) => fRef.current?.querySelector(e2)?.click();
  let O = (e2) => {
    let _Ref_current = _RefRef.current;
    if (e2 >= _Ref_current.length) {
      setStatus(`done`);
      y(pRef.current ? mRef : hRef, I, pRef.current ? 3800 : 4200);
      return;
    }
    let r2 = _Ref_current[e2].id;
    setE((t) => t.map((t2, n4) => {
      if (n4 === e2) {
        return {
          ...t2,
          status: `active`,
          startedAt: Date.now()
        };
      }
      return t2;
    }));
    y(hRef, () => {
      let gRef_current = gRef.current;
      setE((t) => t.map((t2, r3) => {
        if (r3 === e2) {
          return {
            ...t2,
            status: `done`,
            duration: Date.now() - k(t2.startedAt)
          };
        }
        if (r3 === e2 + 1 && gRef_current.length) {
          return {
            ...t2,
            title: T[t2.id] ?? t2.title,
            notes: [...t2.notes ?? [], ...gRef_current.map((e3) => ({
              ...e3,
              picked: `next`
            }))]
          };
        }
        return t2;
      }));
      if (gRef_current.length) {
        setI([]);
      }
      O(e2 + 1);
    }, w[r2] ?? 2e3);
  };
  let k = (startedAt2) => {
    if (startedAt2 === void 0) {
      return Date.now();
    }
    if (typeof startedAt2 == `number`) {
      return startedAt2;
    }
    return startedAt2.getTime();
  };
  let onQueue = (text) => setI((t) => [...t, {
    id: `n${++vRef.current}`,
    text
  }]);
  let onInterrupt = (text, n4) => {
    let r2 = _RefRef.current.findIndex((e2) => e2.status === `active`);
    if (r2 < 0) {
      return onQueue(text);
    }
    let i3 = {
      id: n4 ?? `n${++vRef.current}`,
      text,
      picked: `now`
    };
    if (n4) {
      setI((e2) => e2.filter((e3) => e3.id !== n4));
    }
    b(hRef);
    setE((e2) => e2.map((e3, t) => {
      if (t === r2) {
        return {
          ...e3,
          notes: [...e3.notes ?? [], i3]
        };
      }
      return e3;
    }));
    y(hRef, () => O(r2), 120);
  };
  let onRemove = (e2) => setI((t) => t.filter((t2) => t2.id !== e2));
  let onPause = () => {
    b(hRef);
    setStatus(`paused`);
  };
  let onResume = () => {
    setStatus(`running`);
    let e2 = _RefRef.current.findIndex((e3) => e3.status === `active`);
    y(hRef, () => O(Math.max(0, e2)), 200);
  };
  let F = (e2, t, n4) => {
    [...e2].forEach((n5, r2) => y(mRef, () => setDraft(e2.slice(0, r2 + 1)), t + r2 * 38));
    if (n4) {
      y(mRef, n4, t + e2.length * 38 + 420);
    }
  };
  let I = () => {
    b(hRef);
    b(mRef);
    setE(C.map((e3, t) => {
      if (t === 0) {
        return {
          ...e3,
          status: `done`,
          duration: 1400
        };
      }
      return e3;
    }));
    setI([]);
    setDraft(``);
    setStatus(`running`);
    setStartedAt(Date.now() - 12e4 - 6e3);
    y(hRef, () => O(1), 200);
    if (!pRef.current) {
      return;
    }
    F(E, 900, () => S2(`.ui-stc__send`));
    let e2 = 200 + w.draft;
    F(D, e2 + 900, () => S2(`.ui-stc__send`));
    y(mRef, () => S2(`.ui-stc__chip-btn`), e2 + 900 + 1292 + 1400);
  };
  n3.useEffect(() => {
    I();
    return () => {
      b(mRef);
      b(hRef);
    };
  }, []);
  let L = (isTrusted) => {
    if (isTrusted && pRef.current) {
      pRef.current = false;
      b(mRef);
      setDraft(``);
    }
  };
  return /* @__PURE__ */ jsx("div", { ref: fRef, className: `steer-demo`, onPointerDownCapture: (e2) => L(e2.nativeEvent.isTrusted), onKeyDownCapture: (e2) => L(e2.nativeEvent.isTrusted), children: /* @__PURE__ */ jsx(X1Component, { title: `Migrate users table`, agent: `Opus 5.5`, steps: e, queue: i2, status, startedAt, draft, onDraftChange: setDraft, onQueue, onInterrupt, onRemove, onPause, onResume }) });
}

export {
  OComponent
};
