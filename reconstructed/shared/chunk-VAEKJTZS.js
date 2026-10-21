import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo-V6j80N0E.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = 6e4;
var a = (e) => `$${e < 10 ? e.toFixed(2) : Math.round(e).toLocaleString(`en-US`)}`;
var o = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
var easing = `cubic-bezier(0.32, 0.72, 0.24, 1)`;
var c = (e) => {
  let t = new Date(e);
  return `${String(t.getHours()).padStart(2, `0`)}:${String(t.getMinutes()).padStart(2, `0`)}`;
};
var l = (name) => name.split(/\s+/).map((e) => e[0]).join(``).slice(0, 2).toUpperCase();
var U1Component = () => /* @__PURE__ */ jsxs("svg", { width: `14`, height: `14`, viewBox: `0 0 14 14`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("path", { d: `M7 1.2c.4 2.9 1.9 4.4 4.8 4.8-2.9.4-4.4 1.9-4.8 4.8C6.6 7.9 5.1 6.4 2.2 6 5.1 5.6 6.6 4.1 7 1.2Z`, fill: `currentColor` }),
  /* @__PURE__ */ jsx("circle", { cx: `11.6`, cy: `11.4`, r: `1.1`, fill: `currentColor`, opacity: `0.55` })
] });
var D1Component = () => /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, "aria-hidden": `true`, children: [3, 6, 9].map((cy) => [4.3, 7.7].map((cx) => /* @__PURE__ */ jsx("circle", { cx, cy, r: `0.95`, fill: `currentColor` }, `${cx}-${cy}`))) });
var F1Component = () => /* @__PURE__ */ jsxs("svg", { width: `12`, height: `12`, viewBox: `0 0 12 12`, "aria-hidden": `true`, className: `ui-db__spin`, children: [
  /* @__PURE__ */ jsx("circle", { cx: `6`, cy: `6`, r: `4.6`, fill: `none`, stroke: `currentColor`, strokeOpacity: `0.25`, strokeWidth: `1.6` }),
  /* @__PURE__ */ jsx("path", { d: `M6 1.4a4.6 4.6 0 0 1 4.6 4.6`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.6`, strokeLinecap: `round` })
] });
var p = (e) => {
  if (e && e.offsetWidth) {
    return e.getBoundingClientRect().width / e.offsetWidth;
  }
  return 1;
};
function M1Component({
  agents: agents2,
  tasks,
  onAssign,
  now,
  mode,
  defaultMode = `manual`,
  onModeChange,
  suggestion,
  formatCost = a,
  title = `Delegate`,
  className
}) {
  let S = n3.useId();
  let CRef = n3.useRef(null);
  let [w2, setW] = n3.useState({});
  let [E, setE] = n3.useState(null);
  let [O, setO] = n3.useState(null);
  let [A, setA] = n3.useState(null);
  let [ne, setNe] = n3.useState(0);
  let [ie, setIe] = n3.useState(``);
  let [ae, setAe] = n3.useState(() => Date.now());
  n3.useEffect(() => {
    if (now !== void 0) {
      return;
    }
    let e = window.setInterval(() => setAe(Date.now()), 3e4);
    return () => window.clearInterval(e);
  }, [now]);
  let N = now ?? ae;
  let [se, setSe] = n3.useState(defaultMode);
  let P = mode ?? se;
  let le = (e) => {
    setSe(e);
    onModeChange?.(e);
  };
  let FRef = n3.useRef([]);
  let I = tasks.map((e) => {
    if (e.id in w2) {
      return {
        ...e,
        agentId: w2[e.id]
      };
    }
    return e;
  });
  let L = [...I].sort((e, t) => {
    let n4 = FRef.current.indexOf(e.id);
    let r2 = FRef.current.indexOf(t.id);
    return (n4 < 0 ? -1 : n4) - (r2 < 0 ? -1 : r2);
  });
  let R = L.filter((e) => !e.agentId);
  let z = (e) => L.filter((t) => t.agentId === e);
  let ue = (t) => agents2.find((e) => e.id === t);
  let B = (e, t) => {
    let n4 = z(e.id).filter((e2) => e2.id !== t?.id);
    if (!n4.length && !t) {
      return null;
    }
    let r2 = n4.length ? e.current ?? n4[0].estimate : 0;
    let a2 = n4.slice(1).reduce((acc, item) => acc + item.estimate, 0);
    return N + (r2 + a2 + (t?.estimate ?? 0)) * i;
  };
  let de = (agent) => {
    let t = z(agent.id);
    if (t.length) {
      return (agent.current ?? t[0].estimate) + t.slice(1).reduce((acc, item) => acc + item.estimate, 0);
    }
    return 0;
  };
  let V = (e, t) => {
    if (e.rate == null) {
      return null;
    }
    return e.rate * t;
  };
  let H = agents2.reduce((acc, agent) => {
    let n4 = V(agent, de(agent));
    if (n4 == null) {
      return acc;
    }
    return (acc ?? 0) + n4;
  }, null);
  let U = (e, t) => {
    let n4 = I.find((t2) => t2.id === e);
    if (!n4 || (n4.agentId ?? null) === t) {
      return;
    }
    FRef.current = [...FRef.current.filter((t2) => t2 !== e), e];
    let r2 = t ? ue(t)?.name : null;
    setIe(r2 ? `${n4.title} \u2192 ${r2}` : `${n4.title} is unassigned again`);
    if (onAssign) {
      onAssign(e, t);
    } else {
      setW((n5) => ({
        ...n5,
        [e]: t
      }));
    }
  };
  let fe = () => [...agents2].sort((e, t) => (B(e) ?? N) - (B(t) ?? N))[0];
  let W = R[0]?.id;
  n3.useEffect(() => {
    if (P !== `auto` || !W || E) {
      return;
    }
    let e = window.setTimeout(() => {
      let e2 = fe();
      if (e2) {
        U(W, e2.id);
      }
    }, o() ? 0 : 900);
    return () => window.clearTimeout(e);
  }, [P, W, E]);
  let GRef = n3.useRef(/* @__PURE__ */ new Map());
  let K = (e) => (t) => {
    if (t) {
      GRef.current.set(e, t);
    } else {
      GRef.current.delete(e);
    }
  };
  let qRef = n3.useRef(/* @__PURE__ */ new Map());
  let JRef = n3.useRef(null);
  let Y = JSON.stringify(L.map((e) => [e.id, e.agentId ?? null]));
  let XRef = n3.useRef(Y);
  if (CRef.current && Y !== XRef.current) {
    qRef.current = new Map([...GRef.current].map(([e, t]) => [e, t.getBoundingClientRect()]));
  }
  n3.useLayoutEffect(() => {
    if (XRef.current === Y) {
      return;
    }
    XRef.current = Y;
    let JRef_current = JRef.current;
    JRef.current = null;
    if (o()) {
      return;
    }
    let t = p(CRef.current);
    for (let [n4, r2] of GRef.current) {
      let i2 = JRef_current?.id === n4 ? JRef_current.rect : qRef.current.get(n4);
      if (!i2) {
        continue;
      }
      let a2 = r2.getBoundingClientRect();
      let o2 = (i2.left - a2.left) / t;
      let c2 = (i2.top - a2.top) / t;
      if (Math.abs(o2) < 1 && Math.abs(c2) < 1) {
        continue;
      }
      let l2 = Math.abs(i2.width - a2.width) > 8 || Math.abs(i2.height - a2.height) > 4;
      r2.animate([{
        transform: `translate(${o2}px, ${c2}px)`,
        opacity: l2 ? 0.4 : 1,
        zIndex: 3
      }, {
        transform: `none`,
        opacity: 1,
        zIndex: 3
      }], {
        duration: 480,
        easing
      });
    }
  }, [Y]);
  let ZRef = n3.useRef(null);
  let pe = (clientX, clientY) => {
    let n4 = document.elementFromPoint(clientX, clientY);
    let r2 = n4?.closest(`[data-agent]`);
    if (r2 && CRef.current?.contains(r2)) {
      return r2.dataset.agent ?? null;
    }
    let i2 = n4?.closest(`[data-pile]`);
    if (i2 && CRef.current?.contains(i2)) {
      return `pile`;
    }
    return null;
  };
  let me = (e, id, from) => {
    if (e.button === 0) {
      ZRef.current = {
        id,
        x: e.clientX,
        y: e.clientY,
        el: e.currentTarget,
        from
      };
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };
  let onPointerMove = (e) => {
    let ZRef_current = ZRef.current;
    if (ZRef_current) {
      if (E) {
        setE({
          ...E,
          x: e.clientX,
          y: e.clientY
        });
      } else {
        if (Math.hypot(e.clientX - ZRef_current.x, e.clientY - ZRef_current.y) < 4) {
          return;
        }
        let n4 = ZRef_current.el.getBoundingClientRect();
        setE({
          id: ZRef_current.id,
          x: e.clientX,
          y: e.clientY,
          dx: ZRef_current.x - n4.left,
          dy: ZRef_current.y - n4.top,
          w: Math.max(n4.width, 200),
          from: ZRef_current.from
        });
        setA(null);
      }
      setO(pe(e.clientX, e.clientY));
    }
  };
  let onPointerUp = (e) => {
    let ZRef_current = ZRef.current;
    ZRef.current = null;
    if (!ZRef_current || !E) {
      return;
    }
    let n4 = pe(e.clientX, e.clientY);
    let r2 = CRef.current?.querySelector(`.ui-db__ghost`);
    if (r2 && n4) {
      JRef.current = {
        id: E.id,
        rect: r2.getBoundingClientRect()
      };
    }
    setE(null);
    setO(null);
    if (n4 === `pile`) {
      U(E.id, null);
    } else if (n4) {
      U(E.id, n4);
    }
  };
  let _e = (t, n4) => {
    let r2 = Number(t.key);
    if (r2 >= 1 && r2 <= agents2.length) {
      t.preventDefault();
      U(n4, agents2[r2 - 1].id);
      setA(null);
      return;
    }
    if (A === n4) {
      if (t.key === `ArrowDown` || t.key === `ArrowUp`) {
        t.preventDefault();
        setNe((n5) => (n5 + (t.key === `ArrowDown` ? 1 : -1) + agents2.length) % agents2.length);
      } else if (t.key === `Enter` || t.key === ` `) {
        t.preventDefault();
        U(n4, agents2[ne].id);
        setA(null);
      } else if (t.key === `Escape`) {
        t.preventDefault();
        setA(null);
      }
    } else if (t.key === `Enter` || t.key === ` `) {
      t.preventDefault();
      setA(n4);
      setNe(0);
      setIe(`Picked up ${I.find((e) => e.id === n4)?.title}. Choose an agent with the arrow keys, Enter to hand it over.`);
    }
  };
  let ve = E ? O : A ? agents2[ne]?.id : suggestion?.agentId ?? null;
  let Q = I.find((e) => e.id === (E?.id ?? A ?? suggestion?.taskId));
  let Component2 = (e) => {
    if (e.tools?.length) {
      return /* @__PURE__ */ jsx("span", { className: `ui-db__tools`, "aria-hidden": `true`, children: e.tools.slice(0, 3).map((e2, key) => /* @__PURE__ */ jsx("span", { className: `ui-db__tool`, children: e2 }, key)) });
    }
    return null;
  };
  return /* @__PURE__ */ jsxs("div", { ref: CRef, className: [`ui-db`, className].filter(Boolean).join(` `), "data-dragging": E ? `` : void 0, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-delegate-board`, precedence: `default`, children: h }),
    /* @__PURE__ */ jsxs("header", { className: `ui-db__bar`, children: [
      /* @__PURE__ */ jsx("span", { className: `ui-db__spark`, children: /* @__PURE__ */ jsx(U1Component, {}) }),
      /* @__PURE__ */ jsx("span", { className: `ui-db__title`, children: title }),
      /* @__PURE__ */ jsx("span", { className: `ui-db__hint`, children: P === `auto` ? `New tasks go to whoever is free first` : `Drag a task onto an agent` }),
      /* @__PURE__ */ jsxs("button", { type: `button`, role: `switch`, "aria-checked": P === `auto`, className: `ui-db__auto`, onClick: () => le(P === `auto` ? `manual` : `auto`), children: [
        /* @__PURE__ */ jsx("span", { className: `ui-db__auto-label`, children: `Auto` }),
        /* @__PURE__ */ jsx("span", { className: `ui-db__switch`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("span", {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `ui-db__card`, children: /* @__PURE__ */ jsxs("div", { className: `ui-db__body`, children: [
      /* @__PURE__ */ jsxs("section", { className: `ui-db__pile`, "data-pile": ``, "data-over": O === `pile` && E?.from === `queue` ? `` : void 0, "aria-labelledby": `${S}-pile`, children: [
        /* @__PURE__ */ jsxs("h4", { className: `ui-db__head`, id: `${S}-pile`, children: [
          `Unassigned `,
          /* @__PURE__ */ jsx("span", { className: `ui-db__count`, children: R.length })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: `ui-db__tasks`, children: [
          R.map((e) => /* @__PURE__ */ jsx("li", { ref: K(e.id), className: `ui-db__task-slot`, children: /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-db__task`, "data-task-id": e.id, "data-dragging": E?.id === e.id ? `` : void 0, "data-picked": A === e.id || suggestion?.taskId === e.id ? `` : void 0, "aria-describedby": `${S}-how`, onPointerDown: (t) => me(t, e.id, `pile`), onPointerMove, onPointerUp, onPointerCancel: () => {
            ZRef.current = null;
            setE(null);
            setO(null);
          }, onKeyDown: (t) => _e(t, e.id), children: [
            /* @__PURE__ */ jsx("span", { className: `ui-db__grip`, children: /* @__PURE__ */ jsx(D1Component, {}) }),
            /* @__PURE__ */ jsxs("span", { className: `ui-db__task-main`, children: [
              /* @__PURE__ */ jsx("span", { className: `ui-db__task-title`, children: e.title }),
              /* @__PURE__ */ jsxs("span", { className: `ui-db__task-meta`, children: [
                Component2(e),
                `~`,
                e.estimate,
                ` min`
              ] })
            ] })
          ] }) }, e.id)),
          R.length === 0 && /* @__PURE__ */ jsx("li", { className: `ui-db__empty`, children: `Everything is handed out` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: `ui-db__agents`, "aria-labelledby": `${S}-agents`, children: [
        /* @__PURE__ */ jsxs("h4", { className: `ui-db__head`, id: `${S}-agents`, children: [
          `Agents`,
          H != null && H > 0 && /* @__PURE__ */ jsxs("span", { className: `ui-db__spend`, children: [
            formatCost(H),
            ` in queues`
          ] }, Math.round(H * 100))
        ] }),
        /* @__PURE__ */ jsx("ul", { className: `ui-db__roster`, children: agents2.map((e, t) => {
          let n4 = z(e.id);
          let i2 = B(e);
          let a2 = ve === e.id;
          let o2 = a2 && Q && Q.agentId !== e.id ? B(e, Q) : null;
          let s = o2 && Q ? V(e, Q.estimate) : null;
          return /* @__PURE__ */ jsxs("li", { className: `ui-db__agent`, "data-agent": e.id, "data-target": a2 ? `` : void 0, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-db__avatar`, "data-logo": e.avatar ? `` : void 0, children: e.avatar ?? l(e.name) }),
            /* @__PURE__ */ jsxs("span", { className: `ui-db__who`, children: [
              /* @__PURE__ */ jsxs("span", { className: `ui-db__name-line`, children: [
                /* @__PURE__ */ jsx("span", { className: `ui-db__name`, children: e.name }),
                /* @__PURE__ */ jsx("span", { className: `ui-db__key`, "aria-hidden": `true`, children: t + 1 })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: `ui-db__model`, children: [
                e.model,
                e.rate != null && /* @__PURE__ */ jsxs("span", { className: `ui-db__rate`, children: [
                  formatCost(e.rate),
                  `/min`
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: `ui-db__load`, children: [
              s != null && /* @__PURE__ */ jsxs("span", { className: `ui-db__price`, children: [
                `+`,
                formatCost(s)
              ] }, `price`),
              o2 ? /* @__PURE__ */ jsxs("span", { className: `ui-db__tag`, "data-kind": `preview`, children: [
                `+`,
                Q?.estimate,
                `m until `,
                c(o2)
              ] }, `preview`) : i2 ? /* @__PURE__ */ jsxs("span", { className: `ui-db__tag`, "data-kind": `busy`, children: [
                `Busy until `,
                c(i2)
              ] }, i2) : /* @__PURE__ */ jsx("span", { className: `ui-db__tag`, "data-kind": `free`, children: `Free` }, `free`)
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: `ui-db__queue`, "aria-label": `${e.name}'s queue`, children: [
              n4.slice(0, 3).map((e2, t2) => /* @__PURE__ */ jsx("li", { ref: K(e2.id), className: `ui-db__chip-slot`, children: /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-db__chip`, "data-chip-id": e2.id, "data-running": t2 === 0 ? `` : void 0, "data-dragging": E?.id === e2.id ? `` : void 0, title: `${e2.title} \xB7 ~${e2.estimate} min`, onPointerDown: (t3) => me(t3, e2.id, `queue`), onPointerMove, onPointerUp, onKeyDown: (t3) => _e(t3, e2.id), children: [
                t2 === 0 ? /* @__PURE__ */ jsx(F1Component, {}) : Component2(e2),
                /* @__PURE__ */ jsx("span", { className: `ui-db__chip-title`, children: e2.title })
              ] }) }, e2.id)),
              n4.length > 3 && /* @__PURE__ */ jsxs("li", { className: `ui-db__more`, children: [
                /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-db__chip ui-db__chip--more`, "aria-describedby": `${S}-${e.id}-more`, children: [
                  `+`,
                  n4.length - 3
                ] }),
                /* @__PURE__ */ jsx("span", { className: `ui-db__tip`, id: `${S}-${e.id}-more`, role: `tooltip`, children: /* @__PURE__ */ jsx("ul", { className: `ui-db__tip-list`, children: n4.slice(3).map((e2) => /* @__PURE__ */ jsxs("li", { children: [
                  Component2(e2),
                  /* @__PURE__ */ jsx("span", { children: e2.title }),
                  /* @__PURE__ */ jsxs("span", { className: `ui-db__tip-min`, children: [
                    `~`,
                    e2.estimate,
                    ` min`
                  ] })
                ] }, e2.id)) }) })
              ] })
            ] })
          ] }, e.id);
        }) })
      ] })
    ] }) }),
    E && Q && (() => {
      let CRef_current = CRef.current;
      let t = p(CRef_current);
      let n4 = CRef_current?.getBoundingClientRect();
      let i2 = ((E.x - E.dx - (n4?.left ?? 0)) / t).toFixed(1);
      let a2 = ((E.y - E.dy - (n4?.top ?? 0)) / t).toFixed(1);
      return /* @__PURE__ */ jsxs("div", { className: `ui-db__ghost`, style: {
        left: `${i2}px`,
        top: `${a2}px`,
        width: E.w / t
      }, "aria-hidden": `true`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-db__grip`, children: /* @__PURE__ */ jsx(D1Component, {}) }),
        /* @__PURE__ */ jsxs("span", { className: `ui-db__task-main`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-db__task-title`, children: Q.title }),
          /* @__PURE__ */ jsxs("span", { className: `ui-db__task-meta`, children: [
            Component2(Q),
            `~`,
            Q.estimate,
            ` min`
          ] })
        ] })
      ] });
    })(),
    /* @__PURE__ */ jsx("span", { className: `ui-db__sr`, id: `${S}-how`, children: `Drag onto an agent, or press Enter, choose with the arrow keys and press Enter again. Number keys hand it over at once.` }),
    /* @__PURE__ */ jsx("span", { className: `ui-db__sr`, "aria-live": `polite`, children: ie })
  ] });
}
var h = `.ui-db{--ui-db-tray: #f0f0f0;--ui-db-card: #ffffff;--ui-db-strong: #171717;--ui-db-ink: #171717;--ui-db-text: #6b6b6b;--ui-db-muted: #8a8a8a;--ui-db-faint: #b8b8b8;--ui-db-line: #ececec;--ui-db-wash: #f6f6f6;--ui-db-lane: #f4f4f5;--ui-db-switch-off: #dcdcdf;--ui-db-fill: #ececec;--ui-db-accent: #2f6bff;--ui-db-brand-bg: rgba(47, 107, 255, 0.08);--ui-db-brand-fg: #2f6bff;--ui-db-warn-bg: #fff3e0;--ui-db-warn-fg: #b85c00;--ui-db-ok-bg: #eaf6ef;--ui-db-ok-fg: #17824a;--ui-db-focus: rgba(23, 23, 23, 0.22);--ui-db-target-bg: rgba(47, 107, 255, 0.045);--ui-db-target-edge: rgba(47, 107, 255, 0.32);--ui-db-shadow: 0 0 0 1px #ececec, 0 1px 2px rgba(0, 0, 0, 0.04);--ui-db-lift: 0 0 0 1px #e4e4e7, 0 18px 36px -12px rgba(0, 0, 0, 0.28), 0 2px 6px rgba(0, 0, 0, 0.06);--ui-db-ease: cubic-bezier(0.32, 0.72, 0.24, 1);position: relative;box-sizing: border-box;width: 100%;max-width: 720px;padding: 4px;border-radius: 20px;background: var(--ui-db-tray);container-type: inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;letter-spacing: -0.006em;font-size: 13.5px;font-weight: 400;line-height: 20px;color: var(--ui-db-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-db[data-dragging]{cursor: grabbing;user-select: none;-webkit-user-select: none}.ui-db *, .ui-db *::before, .ui-db *::after{box-sizing: border-box}:where(.ui-db) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-db button:focus-visible{outline: 2px solid var(--ui-db-focus);outline-offset: 1px}.ui-db ul{margin: 0;padding: 0;list-style: none}.ui-db h4{margin: 0}.ui-db svg{display: block;flex: none}.ui-db__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-db__card{border-radius: 16px;background: var(--ui-db-card);box-shadow: var(--ui-db-shadow)}.ui-db__bar{display: flex;align-items: center;gap: 10px;min-width: 0;padding: 8px 6px 10px 14px}.ui-db__spark{display: grid;flex: none;place-items: center;width: 16px;color: var(--ui-db-accent)}.ui-db__title{font-weight: 600;color: var(--ui-db-strong);white-space: nowrap}.ui-db__hint{flex: 1;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-db-muted);white-space: nowrap;text-overflow: ellipsis}.ui-db__auto{display: inline-flex;flex: none;align-items: center;gap: 8px;height: 28px;padding: 0 2px 0 6px;border-radius: 6px}.ui-db__auto-label{font-size: 13px;font-weight: 500;color: var(--ui-db-strong);transition: opacity 200ms ease}.ui-db__auto[aria-checked="false"] .ui-db__auto-label{opacity: 0.45}.ui-db__switch{position: relative;width: 30px;height: 18px;border-radius: 999px;background: var(--ui-db-switch-off);transition: background-color 220ms ease}.ui-db__switch > span{position: absolute;top: 2px;left: 2px;width: 14px;height: 14px;border-radius: 50%;background: #fff;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18), 0 0 0 0.5px rgba(0, 0, 0, 0.04);transition: transform 240ms var(--ui-db-ease)}.ui-db__auto[aria-checked="true"] .ui-db__switch{background: var(--ui-db-accent)}.ui-db__auto[aria-checked="true"] .ui-db__switch > span{transform: translateX(12px)}.ui-db__body{display: grid;grid-template-columns: 236px minmax(0, 1fr)}.ui-db__head{display: flex;align-items: center;gap: 6px;margin: 0 4px 8px !important;font-size: 12px;font-weight: 400;line-height: 16px;color: var(--ui-db-muted)}.ui-db__count{display: grid;place-items: center;min-width: 16px;height: 16px;padding: 0 4px;border-radius: 4px;background: var(--ui-db-card);box-shadow: var(--ui-db-shadow);font-size: 10px;font-weight: 500;color: var(--ui-db-text);font-variant-numeric: tabular-nums}.ui-db__pile{margin: 12px 0 12px 12px;padding: 10px 6px 6px;border-radius: 14px;background: var(--ui-db-lane);transition: background-color 200ms ease, box-shadow 200ms ease}.ui-db__pile .ui-db__head{margin-left: 6px !important}.ui-db__pile[data-over]{box-shadow: inset 0 0 0 1px var(--ui-db-line)}.ui-db__tasks{display: grid;gap: 4px}.ui-db__task, .ui-db__ghost{display: flex;align-items: flex-start;gap: 8px;width: 100%;padding: 10px 12px 10px 8px;border-radius: 12px;background: var(--ui-db-card);box-shadow: var(--ui-db-shadow);cursor: grab;touch-action: none;transition: opacity 160ms ease, box-shadow 160ms ease}.ui-db__task:hover{box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 2px 6px -2px rgba(0, 0, 0, 0.12)}.ui-db__task[data-dragging], .ui-db__chip[data-dragging]{opacity: 0.35}.ui-db__task[data-picked]{background: var(--ui-db-target-bg);box-shadow: inset 0 0 0 0.5px var(--ui-db-target-edge), var(--ui-db-shadow)}.ui-db__grip{display: grid;flex: none;place-items: center;width: 12px;height: 20px;color: var(--ui-db-faint)}.ui-db__task-main{display: grid;gap: 2px;min-width: 0}.ui-db__task-title{overflow: hidden;font-weight: 500;color: var(--ui-db-ink);white-space: nowrap;text-overflow: ellipsis}.ui-db__task-meta{display: flex;align-items: center;gap: 6px;font-size: 12px;line-height: 16px;color: var(--ui-db-muted);font-variant-numeric: tabular-nums}.ui-db__tools{display: flex;gap: 4px}.ui-db__tool, .ui-db__tool > svg{display: grid;width: 12px;height: 12px}.ui-db__empty{display: grid;place-items: center;min-height: 52px;padding: 8px 10px;font-size: 12px;line-height: 16px;color: var(--ui-db-muted);text-align: center}.ui-db__ghost{position: absolute;z-index: 1000;box-shadow: var(--ui-db-lift);cursor: grabbing;pointer-events: none;transform: rotate(1.5deg) scale(1.02)}.ui-db__agents{padding: 14px 12px 12px}.ui-db__roster{display: grid;gap: 4px}.ui-db__agent{display: grid;grid-template-columns: 30px minmax(0, 1fr) auto;grid-template-areas: "avatar who load" "avatar queue queue";column-gap: 12px;row-gap: 8px;padding: 10px;border-radius: 12px;transition: background-color 180ms ease, box-shadow 180ms ease}.ui-db[data-dragging] .ui-db__agent{box-shadow: inset 0 0 0 0.5px var(--ui-db-line)}.ui-db__agent[data-target]{background: var(--ui-db-target-bg)}.ui-db__avatar{grid-area: avatar;display: grid;place-items: center;width: 30px;height: 30px;border-radius: 50%;background: var(--ui-db-fill);font-size: 10px;font-weight: 500;color: var(--ui-db-text)}.ui-db__avatar[data-logo]{background: var(--ui-db-card);box-shadow: var(--ui-db-shadow)}.ui-db__avatar > svg{width: 15px;height: 15px}.ui-db__who{grid-area: who;display: grid;min-width: 0}.ui-db__name-line{display: flex;align-items: center;gap: 6px;min-width: 0}.ui-db__name{overflow: hidden;font-weight: 500;color: var(--ui-db-ink);white-space: nowrap;text-overflow: ellipsis}.ui-db__key{display: none;place-items: center;min-width: 16px;height: 16px;padding: 0 4px;border-radius: 4px;background: var(--ui-db-card);box-shadow: var(--ui-db-shadow);font-size: 10px;font-weight: 500;color: var(--ui-db-muted)}.ui-db:focus-within .ui-db__key{display: grid}.ui-db__model{overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-db-muted);white-space: nowrap;text-overflow: ellipsis}.ui-db__load{grid-area: load;align-self: start;display: flex;align-items: center;gap: 8px}.ui-db__spend{margin-left: auto;font-variant-numeric: tabular-nums;animation: ui-db-in 260ms var(--ui-db-ease) both}.ui-db__rate{margin-left: 6px;color: var(--ui-db-faint);font-variant-numeric: tabular-nums}.ui-db__price{font-size: 11px;font-weight: 500;line-height: 16px;color: var(--ui-db-brand-fg);white-space: nowrap;font-variant-numeric: tabular-nums;animation: ui-db-in 260ms var(--ui-db-ease) both}.ui-db__tag{display: inline-flex;align-items: center;height: 22px;padding: 0 9px;border-radius: 999px;font-size: 11px;font-weight: 500;line-height: 16px;white-space: nowrap;font-variant-numeric: tabular-nums;animation: ui-db-in 260ms var(--ui-db-ease) both}.ui-db__tag[data-kind="free"]{background: var(--ui-db-ok-bg);color: var(--ui-db-ok-fg)}.ui-db__tag[data-kind="busy"]{background: var(--ui-db-fill);color: var(--ui-db-text)}.ui-db__tag[data-kind="preview"]{background: var(--ui-db-card);box-shadow: var(--ui-db-shadow);color: var(--ui-db-brand-fg)}.ui-db__queue{grid-area: queue;display: flex;flex-wrap: wrap;gap: 4px;min-width: 0}.ui-db__queue:empty{display: none}.ui-db__chip-slot{min-width: 0;max-width: 100%}.ui-db__chip{display: flex;align-items: center;gap: 5px;max-width: 100%;height: 26px;padding: 0 10px 0 7px;border-radius: 999px;background: var(--ui-db-card);box-shadow: var(--ui-db-shadow);font-size: 12px;line-height: 16px;color: var(--ui-db-text);cursor: grab;touch-action: none}.ui-db__chip[data-running]{background: var(--ui-db-brand-bg);box-shadow: none;color: var(--ui-db-brand-fg);font-weight: 500}.ui-db__chip-title{min-width: 0;max-width: 150px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-db__more{position: relative}.ui-db__chip--more{padding: 0 8px;font-weight: 500;color: var(--ui-db-text);cursor: default}.ui-db__tip{position: absolute;bottom: calc(100% + 6px);left: 50%;z-index: 10;display: grid;width: max-content;max-width: none;padding: 10px 12px;border-radius: 12px;background: rgba(24, 24, 27, 0.92);-webkit-backdrop-filter: blur(8px);backdrop-filter: blur(8px);box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.35);font-size: 12.5px;line-height: 17px;color: rgba(255, 255, 255, 0.86);text-align: left;opacity: 0;visibility: hidden;transform: translate(-50%, 3px);transition: opacity 160ms ease, transform 160ms ease, visibility 0s linear 160ms;pointer-events: none}.ui-db__more:hover .ui-db__tip, .ui-db__more:focus-within .ui-db__tip{opacity: 1;visibility: visible;transform: translate(-50%, 0);transition: opacity 160ms ease, transform 160ms ease, visibility 0s}.ui-db__tip-list{display: grid;gap: 2px}.ui-db__tip-list li{display: flex;align-items: center;gap: 6px;white-space: nowrap}.ui-db__tip{--ui-dbc-strong: #fff;--ui-db-ink: #fff}.ui-db__tip-min{color: rgba(255, 255, 255, 0.5)}.ui-db__spin{animation: ui-db-spin 900ms linear infinite}@keyframes ui-db-spin{to{transform: rotate(360deg)}}@keyframes ui-db-in{from{opacity: 0;transform: translateY(2px)}}@container (max-width: 560px){.ui-db__body{grid-template-columns: minmax(0, 1fr)}.ui-db__pile{margin: 12px 12px 0}.ui-db__hint{display: none}}@media (pointer: coarse){.ui-db__auto{height: 34px}.ui-db__chip{height: 30px}}@media (prefers-reduced-motion: reduce){.ui-db *, .ui-db *::before, .ui-db *::after{animation: none !important;transition: none !important}.ui-db__ghost{transform: none}}:where(.dark, [data-theme="dark"]) .ui-db{--ui-db-tray: #111113;--ui-db-card: #19191b;--ui-db-strong: #ffffff;--ui-db-ink: rgba(255, 255, 255, 0.9);--ui-db-text: rgba(255, 255, 255, 0.62);--ui-db-muted: rgba(255, 255, 255, 0.45);--ui-db-faint: rgba(255, 255, 255, 0.28);--ui-db-line: rgba(255, 255, 255, 0.08);--ui-db-wash: rgba(255, 255, 255, 0.04);--ui-db-lane: #141416;--ui-db-switch-off: rgba(255, 255, 255, 0.16);--ui-db-fill: rgba(255, 255, 255, 0.08);--ui-db-accent: #5b9aff;--ui-db-brand-bg: #0077ff3a;--ui-db-brand-fg: #70b8ff;--ui-db-warn-bg: #fb6a0025;--ui-db-warn-fg: #ffa057;--ui-db-ok-bg: #22ff991e;--ui-db-ok-fg: #46fea5d4;--ui-db-focus: rgba(91, 154, 255, 0.45);--ui-db-target-bg: rgba(91, 154, 255, 0.08);--ui-db-target-edge: rgba(112, 184, 255, 0.35);--ui-db-shadow: 0 0 0 1px #2a2a2e, 0 1px 2px rgba(0, 0, 0, 0.3);--ui-db-lift: 0 0 0 1px #333338, 0 18px 36px -12px rgba(0, 0, 0, 0.7)}:where(.dark, [data-theme="dark"]) .ui-db__tip{background: rgba(250, 250, 250, 0.94);box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.6);color: rgba(0, 0, 0, 0.82)}:where(.dark, [data-theme="dark"]) .ui-db__tip{--ui-dbc-strong: rgba(0, 0, 0, 0.88);--ui-db-ink: rgba(0, 0, 0, 0.88)}:where(.dark, [data-theme="dark"]) .ui-db__tip-min{color: rgba(0, 0, 0, 0.5)}:where(.dark, [data-theme="dark"])`;
var G1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 1200 1200`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { fill: `#D97757`, d: `M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z` }) });
var EeComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `currentColor`, "aria-hidden": `true`, style: {
  color: `var(--ui-dbc-strong, var(--ui-db-ink, #000))`
}, children: /* @__PURE__ */ jsx("path", { d: `M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z` }) });
var Component = () => {
  let id = `gm` + n3.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
  return /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id, x1: `0`, y1: `24`, x2: `24`, y2: `0`, gradientUnits: `userSpaceOnUse`, children: [
      /* @__PURE__ */ jsx("stop", { stopColor: `#1C7DFF` }),
      /* @__PURE__ */ jsx("stop", { offset: `0.52`, stopColor: `#1C69FF` }),
      /* @__PURE__ */ jsx("stop", { offset: `1`, stopColor: `#B04DFF` })
    ] }) }),
    /* @__PURE__ */ jsx("path", { fill: `url(#${id})`, d: `M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81` })
  ] });
};
var V1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `currentColor`, "aria-hidden": `true`, style: {
  color: `var(--ui-dbc-strong, var(--ui-db-ink, #000))`
}, children: /* @__PURE__ */ jsx("path", { d: `M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z` }) });
var Y1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `currentColor`, "aria-hidden": `true`, style: {
  color: `var(--ui-dbc-strong, var(--ui-db-ink, #181717))`
}, children: /* @__PURE__ */ jsx("path", { d: `M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12` }) });
var B1Component = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 49.883 49.877`, fill: `none`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsxs("g", { transform: `translate(0 0)`, children: [
    /* @__PURE__ */ jsx("path", { d: `M18.3549 10.4784C15.4713 10.4784 13.1157 8.12279 13.1157 5.2392C13.1157 2.35561 15.4713 0 18.3549 0C21.2385 0 23.5941 2.35561 23.5941 5.2392V10.4784H18.3549Z`, fill: `#36C5F0` }),
    /* @__PURE__ */ jsx("path", { d: `M18.3575 13.12C21.2411 13.12 23.5967 15.4756 23.5967 18.3592C23.5967 21.2428 21.2411 23.5984 18.3575 23.5984H5.2392C2.35561 23.5984 0 21.2428 0 18.3592C0 15.4756 2.35561 13.12 5.2392 13.12H18.3575Z`, fill: `#36C5F0` })
  ] }),
  /* @__PURE__ */ jsxs("g", { transform: `translate(26.28 0)`, children: [
    /* @__PURE__ */ jsx("path", { d: `M13.1244 18.3592C13.1244 15.4756 15.48 13.12 18.3636 13.12C21.2472 13.12 23.6028 15.4756 23.6028 18.3592C23.6028 21.2428 21.2472 23.5984 18.3636 23.5984H13.1244V18.3592Z`, fill: `#2EB67D` }),
    /* @__PURE__ */ jsx("path", { d: `M10.4785 18.3575C10.4785 21.2411 8.12286 23.5967 5.23927 23.5967C2.35568 23.5967 7.4362e-05 21.2411 7.4362e-05 18.3575V5.2392C7.4362e-05 2.35561 2.35568 0 5.23927 0C8.12286 0 10.4785 2.35561 10.4785 5.2392V18.3575Z`, fill: `#2EB67D` })
  ] }),
  /* @__PURE__ */ jsxs("g", { transform: `translate(0 26.28)`, children: [
    /* @__PURE__ */ jsx("path", { d: `M10.4784 5.2392C10.4784 8.12279 8.12279 10.4784 5.2392 10.4784C2.35561 10.4784 0 8.12279 0 5.2392C0 2.35561 2.35561 0 5.2392 0H10.4784V5.2392Z`, fill: `#E01E5A` }),
    /* @__PURE__ */ jsx("path", { d: `M13.1157 5.2392C13.1157 2.35561 15.4713 0 18.3549 0C21.2385 0 23.5941 2.35561 23.5941 5.2392V18.3575C23.5941 21.2411 21.2385 23.5967 18.3549 23.5967C15.4713 23.5967 13.1157 21.2411 13.1157 18.3575V5.2392Z`, fill: `#E01E5A` })
  ] }),
  /* @__PURE__ */ jsxs("g", { transform: `translate(26.28 26.28)`, children: [
    /* @__PURE__ */ jsx("path", { d: `M5.23927 13.1157C8.12286 13.1157 10.4785 15.4713 10.4785 18.3549C10.4785 21.2385 8.12286 23.5941 5.23927 23.5941C2.35568 23.5941 7.4362e-05 21.2385 7.4362e-05 18.3549V13.1157H5.23927Z`, fill: `#ECB22E` }),
    /* @__PURE__ */ jsx("path", { d: `M5.23927 10.4784C2.35568 10.4784 7.4362e-05 8.12279 7.4362e-05 5.2392C7.4362e-05 2.35561 2.35568 0 5.23927 0H18.3576C21.2412 0 23.5968 2.35561 23.5968 5.2392C23.5968 8.12279 21.2412 10.4784 18.3576 10.4784H5.23927Z`, fill: `#ECB22E` })
  ] })
] });
var X1Component = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 38 57`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("path", { d: `M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z`, fill: `#1ABCFE` }),
  /* @__PURE__ */ jsx("path", { d: `M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z`, fill: `#0ACF83` }),
  /* @__PURE__ */ jsx("path", { d: `M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z`, fill: `#FF7262` }),
  /* @__PURE__ */ jsx("path", { d: `M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z`, fill: `#F24E1E` }),
  /* @__PURE__ */ jsx("path", { d: `M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z`, fill: `#A259FF` })
] });
var TeComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `#FF7A59`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z` }) });
var SComponent = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("rect", { width: `24`, height: `24`, rx: `6`, fill: `#635BFF` }),
  /* @__PURE__ */ jsx("path", { fill: `#fff`, transform: `translate(5 5) scale(0.5833)`, d: `M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z` })
] });
var agents = [{
  id: `research`,
  name: `Researcher`,
  model: `Opus 5.5`,
  avatar: /* @__PURE__ */ jsx(G1Component, {}),
  current: 6,
  rate: 0.08
}, {
  id: `writer`,
  name: `Writer`,
  model: `Sonnet 5.5`,
  avatar: /* @__PURE__ */ jsx(G1Component, {}),
  rate: 0.03
}, {
  id: `coder`,
  name: `Coder`,
  model: `GPT-6 Sol`,
  avatar: /* @__PURE__ */ jsx(EeComponent, {}),
  current: 14,
  rate: 0.06
}, {
  id: `ops`,
  name: `Ops`,
  model: `Gemini 3.8 Flash`,
  avatar: /* @__PURE__ */ jsx(Component, {}),
  rate: 0.01
}];
var w = [{
  id: `scan`,
  title: `Competitor scan`,
  estimate: 10,
  tools: [/* @__PURE__ */ jsx(V1Component, {}, `n`)],
  agentId: `research`
}, {
  id: `auth`,
  title: `Refactor auth`,
  estimate: 20,
  tools: [/* @__PURE__ */ jsx(Y1Component, {}, `g`)],
  agentId: `coder`
}, {
  id: `sdk`,
  title: `Upgrade Stripe SDK`,
  estimate: 8,
  tools: [/* @__PURE__ */ jsx(SComponent, {}, `s`), /* @__PURE__ */ jsx(Y1Component, {}, `g`)],
  agentId: `coder`
}, {
  id: `notes`,
  title: `Write release notes`,
  estimate: 12,
  tools: [/* @__PURE__ */ jsx(V1Component, {}, `n`), /* @__PURE__ */ jsx(Y1Component, {}, `g`)]
}, {
  id: `flaky`,
  title: `Fix flaky checkout test`,
  estimate: 20,
  tools: [/* @__PURE__ */ jsx(Y1Component, {}, `g`)]
}, {
  id: `churn`,
  title: `Summarize churn calls`,
  estimate: 15,
  tools: [/* @__PURE__ */ jsx(B1Component, {}, `s`), /* @__PURE__ */ jsx(V1Component, {}, `n`)]
}, {
  id: `pricing`,
  title: `Update pricing page`,
  estimate: 10,
  tools: [/* @__PURE__ */ jsx(X1Component, {}, `f`)]
}, {
  id: `crm`,
  title: `Clean up CRM duplicates`,
  estimate: 18,
  tools: [/* @__PURE__ */ jsx(TeComponent, {}, `h`)]
}];
function TComponent() {
  let [tasks, setTasks] = n3.useState(w);
  let [suggestion, setSuggestion] = n3.useState(null);
  let [mode, setMode] = n3.useState(`manual`);
  let cRef = n3.useRef(null);
  let lRef = n3.useRef(true);
  let uRef = n3.useRef([]);
  let d = (e, t) => uRef.current.push(window.setTimeout(e, t));
  let onAssign = (e, agentId) => setTasks((t) => [...t.filter((t2) => t2.id !== e), {
    ...t.find((t2) => t2.id === e),
    agentId
  }]);
  let p2 = (taskId, agentId, n4) => {
    d(() => setSuggestion({
      taskId,
      agentId
    }), n4);
    d(() => {
      setSuggestion(null);
      onAssign(taskId, agentId);
    }, n4 + 1100);
  };
  let h2 = () => {
    uRef.current.forEach((e) => window.clearTimeout(e));
    uRef.current = [];
    setTasks(w);
    setSuggestion(null);
    setMode(`manual`);
    if (lRef.current) {
      p2(`notes`, `writer`, 1200);
      p2(`flaky`, `coder`, 3200);
      p2(`sdk`, `ops`, 5200);
      d(() => setMode(`auto`), 7200);
      d(h2, 13500);
    }
  };
  n3.useEffect(() => {
    h2();
    return () => uRef.current.forEach((e) => window.clearTimeout(e));
  }, []);
  let g = (isTrusted) => {
    if (isTrusted && lRef.current) {
      lRef.current = false;
      uRef.current.forEach((e) => window.clearTimeout(e));
      setSuggestion(null);
    }
  };
  return /* @__PURE__ */ jsx("div", { ref: cRef, className: `db-demo`, onPointerDownCapture: (e) => g(e.nativeEvent.isTrusted), onKeyDownCapture: (e) => g(e.nativeEvent.isTrusted), children: /* @__PURE__ */ jsx(M1Component, { agents, tasks, suggestion, mode, onModeChange: setMode, onAssign, title: `Delegate` }) });
}

export {
  TComponent
};
