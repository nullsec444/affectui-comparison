import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo-Ddb1Dch3.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = {
  queued: `Queued`,
  running: `Running`,
  waiting: `Needs you`,
  done: `Done`,
  failed: `Failed`,
  stopped: `Stopped`
};
var a = (e) => `$${e < 10 ? e.toFixed(2) : Math.round(e).toLocaleString(`en-US`)}`;
var o = (e) => {
  let t = Math.max(0, Math.round(e / 1e3));
  if (t < 60) {
    return `${t}s`;
  }
  return `${Math.floor(t / 60)}m ${String(t % 60).padStart(2, `0`)}s`;
};
var s = (name) => name.split(/\s+/).map((e) => e[0]).join(``).slice(0, 2).toUpperCase();
var c = (e) => [e, ...(e.children ?? []).flatMap(c)];
var l = (e) => (e.cost ?? 0) + (e.children ?? []).reduce((acc, item) => acc + l(item), 0);
var u = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
var d = (e, ERef_current) => {
  let x = 0;
  let y_1 = 0;
  let i2 = e;
  while (i2 && i2 !== ERef_current) {
    x += i2.offsetLeft;
    y_1 += i2.offsetTop;
    i2 = i2.offsetParent;
  }
  return {
    x,
    y: y_1,
    w: e.offsetWidth,
    h: e.offsetHeight
  };
};
var F1Component = () => /* @__PURE__ */ jsxs("svg", { width: `14`, height: `14`, viewBox: `0 0 14 14`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("path", { d: `M7 1.2c.4 2.9 1.9 4.4 4.8 4.8-2.9.4-4.4 1.9-4.8 4.8C6.6 7.9 5.1 6.4 2.2 6 5.1 5.6 6.6 4.1 7 1.2Z`, fill: `currentColor` }),
  /* @__PURE__ */ jsx("circle", { cx: `11.6`, cy: `11.4`, r: `1.1`, fill: `currentColor`, opacity: `0.55` })
] });
var P1Component = ({
  status
}) => {
  if (status === `running`) {
    return /* @__PURE__ */ jsxs("svg", { className: `ui-agt__spin`, width: `12`, height: `12`, viewBox: `0 0 24 24`, fill: `none`, "aria-hidden": `true`, children: [
      /* @__PURE__ */ jsx("circle", { cx: `12`, cy: `12`, r: `8.5`, stroke: `currentColor`, strokeOpacity: `0.25`, strokeWidth: `2.5` }),
      /* @__PURE__ */ jsx("path", { d: `M12 3.5A8.5 8.5 0 0 1 20.5 12`, stroke: `currentColor`, strokeLinecap: `round`, strokeWidth: `2.5` })
    ] });
  }
  if (status === `done`) {
    return /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 24 24`, fill: `none`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M5 14L8.5 17.5L19 6.5`, stroke: `currentColor`, strokeLinecap: `round`, strokeLinejoin: `round`, strokeWidth: `2.4` }) });
  }
  if (status === `failed`) {
    return /* @__PURE__ */ jsxs("svg", { width: `12`, height: `12`, viewBox: `0 0 24 24`, fill: `none`, "aria-hidden": `true`, children: [
      /* @__PURE__ */ jsx("path", { d: `M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z`, stroke: `currentColor`, strokeLinecap: `round`, strokeLinejoin: `round`, strokeWidth: `2` }),
      /* @__PURE__ */ jsx("path", { d: `M12 9V13`, stroke: `currentColor`, strokeLinecap: `round`, strokeLinejoin: `round`, strokeWidth: `2.2` }),
      /* @__PURE__ */ jsx("path", { d: `M12 16.8V17`, stroke: `currentColor`, strokeLinecap: `round`, strokeLinejoin: `round`, strokeWidth: `2.6` })
    ] });
  }
  if (status === `waiting`) {
    return /* @__PURE__ */ jsxs("svg", { width: `12`, height: `12`, viewBox: `0 0 24 24`, fill: `none`, "aria-hidden": `true`, children: [
      /* @__PURE__ */ jsx("path", { d: `M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z`, stroke: `currentColor`, strokeWidth: `2` }),
      /* @__PURE__ */ jsx("path", { d: `M12 7.5V12L14.5 14.5`, stroke: `currentColor`, strokeLinecap: `round`, strokeLinejoin: `round`, strokeWidth: `2` })
    ] });
  }
  if (status === `stopped`) {
    return /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 24 24`, fill: `none`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("rect", { x: `6`, y: `6`, width: `12`, height: `12`, rx: `2.5`, stroke: `currentColor`, strokeWidth: `2.2` }) });
  }
  return /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 24 24`, fill: `none`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("circle", { cx: `12`, cy: `12`, r: `3.5`, fill: `currentColor` }) });
};
var M1Component = () => /* @__PURE__ */ jsx("svg", { width: `12`, height: `12`, viewBox: `0 0 24 24`, fill: `none`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9`, stroke: `currentColor`, strokeLinecap: `round`, strokeLinejoin: `round`, strokeWidth: `1.8` }) });
var h = 280;
var duration = 420;
var _ = 60;
var easing = `cubic-bezier(0.32, 0.72, 0.24, 1)`;
var y = (e) => [e, ...e.kids.flatMap(y)];
function Ee1Component({
  root,
  collapsed,
  defaultCollapsed = [],
  onCollapsedChange,
  onSelect,
  onResolve,
  now,
  formatCost = a,
  title = `Agents`,
  className
}) {
  let ERef = n3.useRef(null);
  let [D, setD] = n3.useState(defaultCollapsed);
  let k2 = collapsed ?? D;
  let A2 = (e) => {
    let t = k2.includes(e) ? k2.filter((t2) => t2 !== e) : [...k2, e];
    setD(t);
    onCollapsedChange?.(t);
  };
  let [j2, setJ] = n3.useState(null);
  let reRef = n3.useRef(null);
  n3.useEffect(() => {
    if (!j2) {
      return;
    }
    let e = (e2) => {
      if (!reRef.current?.contains(e2.target)) {
        setJ(null);
      }
    };
    document.addEventListener(`pointerdown`, e);
    return () => document.removeEventListener(`pointerdown`, e);
  }, [j2]);
  let N = c(root);
  let ie = N.some((e) => e.status === `running`);
  let [ae, setAe] = n3.useState(() => Date.now());
  n3.useEffect(() => {
    if (!ie || now !== void 0) {
      return;
    }
    let e = window.setInterval(() => setAe(Date.now()), 1e3);
    return () => window.clearInterval(e);
  }, [ie, now]);
  let se = now ?? ae;
  let [P, setP] = n3.useState(true);
  let le = (agent) => ({
    agent,
    kids: k2.includes(agent.id) ? [] : (agent.children ?? []).map(le)
  });
  let F = le(root);
  let I = new Set(y(F).map((e) => e.agent.id));
  let [ue, setUe] = n3.useState([]);
  let fe = ue.filter((e) => !I.has(e.shown.agent.id));
  let pe = (e) => {
    let kids = e.kids.map(pe);
    fe.filter((t) => t.parent === e.agent.id).sort((e2, t) => e2.index - t.index).forEach((e2) => kids.splice(Math.min(e2.index, kids.length), 0, e2.shown));
    return {
      ...e,
      kids
    };
  };
  let L = pe(F);
  let R = y(L);
  let zRef = n3.useRef(/* @__PURE__ */ new Map());
  let meRef = n3.useRef(false);
  let he = 0;
  for (let e of R) {
    if (!(e.leaving !== void 0 || zRef.current.has(e.agent.id))) {
      zRef.current.set(e.agent.id, e === L ? 0 : (meRef.current ? 160 : 200) + he++ * _);
    }
  }
  let BRef = n3.useRef(/* @__PURE__ */ new Map());
  let [V, setV] = n3.useState([]);
  let [H, setH] = n3.useState({
    w: 0,
    h: 0
  });
  let URef = n3.useRef(/* @__PURE__ */ new Map());
  let ve = JSON.stringify([P, k2, R.map((e) => [e.agent.id, e.agent.status, e.leaving ?? ``, e.kids.map((e2) => e2.agent.id)])]);
  let W = () => {
    let ERef_current = ERef.current;
    if (!ERef_current) {
      return;
    }
    let t = ERef_current.getBoundingClientRect();
    let n4 = ERef_current.offsetWidth ? t.width / ERef_current.offsetWidth : 1;
    let r2 = (e) => {
      let r3 = e.getBoundingClientRect();
      return {
        x: (r3.left - t.left) / n4,
        y: (r3.top - t.top) / n4,
        w: r3.width / n4,
        h: r3.height / n4
      };
    };
    let i2 = [];
    let a2 = ERef_current.querySelector(`:scope > .ui-agt__level`);
    let o2 = a2 ? r2(a2).y : null;
    let s2 = (e, t2) => {
      let n5 = BRef.current.get(e.agent.id);
      for (let a3 of e.kids) {
        let c2 = BRef.current.get(a3.agent.id);
        if (n5 && c2) {
          let s3 = r2(n5);
          let l2 = r2(c2);
          let muted = a3.agent.status === `queued` || a3.agent.status === `stopped`;
          let d2 = {
            id: `${e.agent.id}>${a3.agent.id}`,
            muted,
            leaving: a3.leaving,
            enter: zRef.current.get(a3.agent.id) ?? 0
          };
          if (P && t2 === 0) {
            let t3 = s3.x + s3.w / 2;
            let n6 = s3.y + s3.h;
            let r3 = l2.x + l2.w / 2;
            let c3 = l2.y;
            let f = Math.round(n6 + ((o2 ?? c3) - n6) / 2);
            let p = r3 - t3;
            let m = Math.max(0, Math.min(8, Math.abs(p) / 2, (c3 - f) / 2));
            let h2 = Math.sign(p);
            let g = muted ? `M${t3} ${f}` : `M${t3} ${n6}V${f}`;
            let _2 = Math.abs(p) < 12 ? `${g}V${c3}` : `${g}H${r3 - h2 * m}Q${r3} ${f} ${r3} ${f + m}V${c3}`;
            i2.push({
              ...d2,
              d: _2,
              dot: [t3, n6]
            });
            let v = `${e.agent.id}>stem`;
            let y2 = i2.find((e2) => e2.id === v);
            if (y2) {
              y2.muted = y2.muted && muted;
              y2.leaving = y2.leaving === void 0 || a3.leaving === void 0 ? void 0 : Math.max(y2.leaving, a3.leaving);
              y2.enter = Math.min(y2.enter, d2.enter);
            } else {
              i2.push({
                id: v,
                d: `M${t3} ${n6}V${f}`,
                dot: [t3, n6],
                muted,
                leaving: a3.leaving,
                enter: d2.enter
              });
            }
          } else {
            let e2 = s3.x + 21;
            let t3 = s3.y + s3.h;
            let n6 = l2.x;
            let r3 = l2.y + 20;
            let a4 = Math.max(0, Math.min(8, (n6 - e2) / 2, (r3 - t3) / 2));
            let o3 = n6 - e2 < 2 ? `M${e2} ${t3}V${l2.y}` : `M${e2} ${t3}V${r3 - a4}Q${e2} ${r3} ${e2 + a4} ${r3}H${n6}`;
            i2.push({
              ...d2,
              d: o3,
              dot: [e2, t3]
            });
          }
        }
        s2(a3, t2 + 1);
      }
    };
    s2(L, 0);
    for (let e of [...URef.current.keys()]) {
      if (!i2.some((t2) => t2.id === e)) {
        URef.current.delete(e);
      }
    }
    setV(i2);
    setH({
      w: ERef_current.scrollWidth,
      h: ERef_current.scrollHeight
    });
  };
  let GRef = n3.useRef(W);
  GRef.current = W;
  let KRef = n3.useRef(0);
  let qRef = n3.useRef(0);
  let J = (e) => {
    KRef.current = Math.max(KRef.current, performance.now() + e);
    if (qRef.current) {
      return;
    }
    let t = () => {
      GRef.current();
      qRef.current = performance.now() < KRef.current ? requestAnimationFrame(t) : 0;
    };
    qRef.current = requestAnimationFrame(t);
  };
  n3.useEffect(() => () => {
    cancelAnimationFrame(qRef.current);
    qRef.current = 0;
  }, []);
  let YRef = n3.useRef(/* @__PURE__ */ new Map());
  n3.useLayoutEffect(() => {
    let ERef_current = ERef.current;
    if (!ERef_current) {
      return;
    }
    let t = false;
    for (let [n4, r2] of BRef.current) {
      let i2 = d(r2, ERef_current);
      let a2 = YRef.current.get(n4);
      if (a2 && (Math.abs(a2.x - i2.x) > 0.5 || Math.abs(a2.y - i2.y) > 0.5) && !u()) {
        r2.animate([{
          translate: `${a2.x - i2.x}px ${a2.y - i2.y}px`
        }, {
          translate: `0px 0px`
        }], {
          duration,
          easing
        });
        t = true;
      }
      YRef.current.set(n4, i2);
    }
    for (let e of [...YRef.current.keys()]) {
      if (!BRef.current.has(e)) {
        YRef.current.delete(e);
      }
    }
    if (t) {
      J(460);
    }
  });
  let yeRef = n3.useRef(null);
  n3.useLayoutEffect(() => {
    let yeRef_current = yeRef.current;
    yeRef.current = F;
    meRef.current = true;
    for (let e of [...zRef.current.keys()]) {
      if (!R.some((t) => t.agent.id === e && t.leaving === void 0)) {
        zRef.current.delete(e);
      }
    }
    if (!yeRef_current || u()) {
      return;
    }
    let n4 = [];
    let r2 = (e) => e.kids.forEach((shown, index) => {
      if (I.has(shown.agent.id)) {
        r2(shown);
      } else {
        n4.push({
          shown,
          parent: e.agent.id,
          index
        });
      }
    });
    r2(yeRef_current);
    if (!n4.length) {
      return;
    }
    let i2 = n4.flatMap((e) => y(e.shown)).reverse();
    let a2 = new Map(i2.map((e, t) => [e.agent.id, t * _]));
    let o2 = (e) => ({
      ...e,
      leaving: a2.get(e.agent.id) ?? 0,
      kids: e.kids.map(o2)
    });
    let s2 = n4.filter((t) => I.has(t.parent) || t.parent === root.id).map((e) => ({
      ...e,
      shown: o2(e.shown)
    }));
    let c2 = new Set(s2.map((e) => e.shown.agent.id));
    setUe((e) => [...e.filter((e2) => !c2.has(e2.shown.agent.id)), ...s2]);
    let l2 = h + (i2.length - 1) * _;
    window.setTimeout(() => setUe((e) => e.filter((e2) => !c2.has(e2.shown.agent.id))), l2 + 30);
    J(l2 + duration + 60);
  });
  n3.useLayoutEffect(() => {
    W();
    J(900 + he * _);
  }, [ve]);
  n3.useLayoutEffect(() => {
    let ERef_current = ERef.current;
    if (!ERef_current) {
      return;
    }
    let t = new ResizeObserver(() => {
      setP(ERef_current.offsetWidth >= 560);
      GRef.current();
    });
    t.observe(ERef_current);
    return () => t.disconnect();
  }, []);
  let be = Date.now();
  for (let e of V) {
    if (!URef.current.has(e.id)) {
      URef.current.set(e.id, be);
    }
  }
  let xe = new Set(V.filter((e) => be - URef.current.get(e.id) < 700 + e.enter).map((e) => e.id));
  let SeComponent = (e, t) => {
    let e_agent = e.agent;
    let a2 = e_agent.children ?? [];
    let u2 = k2.includes(e_agent.id);
    let d2 = a2.length ? l(e_agent) : e_agent.cost ?? 0;
    let f = e_agent.started ? o((e_agent.ended ?? (e_agent.status === `running` || e_agent.status === `waiting` ? se : e_agent.started)) - e_agent.started) : null;
    let h2 = u2 ? c(e_agent).length - 1 : 0;
    let g = e.leaving !== void 0;
    return /* @__PURE__ */ jsxs("div", { className: `ui-agt__node`, "data-status": e_agent.status, "data-depth": t, "data-leaving": g ? `` : void 0, "aria-hidden": g || void 0, style: {
      animationDelay: `${g ? e.leaving : zRef.current.get(e_agent.id) ?? 0}ms`
    }, ref: (e2) => {
      if (e2) {
        BRef.current.set(e_agent.id, e2);
      } else {
        BRef.current.delete(e_agent.id);
      }
    }, onClick: onSelect && !g ? () => onSelect(e_agent) : void 0, tabIndex: onSelect && !g ? 0 : void 0, onKeyDown: onSelect ? (e2) => {
      if (e2.target === e2.currentTarget && (e2.key === `Enter` || e2.key === ` `)) {
        e2.preventDefault();
        onSelect(e_agent);
      }
    } : void 0, "data-clickable": onSelect ? `` : void 0, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-agt__card`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-agt__top`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-agt__avatar`, "data-logo": e_agent.avatar ? `` : void 0, children: e_agent.avatar ?? s(e_agent.name) }),
          /* @__PURE__ */ jsxs("span", { className: `ui-agt__who`, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-agt__name`, children: e_agent.name }),
            e_agent.model && /* @__PURE__ */ jsx("span", { className: `ui-agt__model`, children: e_agent.model })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: `ui-agt__status`, "data-status": e_agent.status, children: [
            /* @__PURE__ */ jsx(P1Component, { status: e_agent.status }),
            i[e_agent.status]
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: `ui-agt__task`, children: [
          e_agent.tools && e_agent.tools.length > 0 && /* @__PURE__ */ jsx("span", { className: `ui-agt__tools`, "aria-hidden": `true`, children: e_agent.tools.slice(0, 4).map((e2, t2) => /* @__PURE__ */ jsx("span", { className: `ui-agt__tool`, children: e2 }, t2)) }),
          e_agent.task
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-agt__meta`, children: [
        /* @__PURE__ */ jsxs("span", { className: `ui-agt__cost`, title: a2.length ? `This branch, with its sub-agents` : void 0, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-agt__amount`, "data-live": c(e_agent).some((e2) => e2.status === `running`) ? `` : void 0, children: formatCost(d2) }),
          f && /* @__PURE__ */ jsxs("span", { className: `ui-agt__time`, children: [
            ` \xB7 `,
            f
          ] })
        ] }),
        a2.length > 0 && /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-agt__fold`, "aria-expanded": !u2, "aria-label": u2 ? `Show ${h2} sub-agents of ${e_agent.name}` : `Fold the sub-agents of ${e_agent.name}`, tabIndex: g ? -1 : void 0, onClick: (e2) => {
          e2.stopPropagation();
          A2(e_agent.id);
        }, children: [
          u2 ? `+${h2}` : a2.length,
          /* @__PURE__ */ jsx(M1Component, {})
        ] })
      ] })
    ] });
  };
  let CeComponent = (e, t) => /* @__PURE__ */ jsxs("div", { className: `ui-agt__hang`, role: `treeitem`, "aria-expanded": e.agent.children?.length ? !k2.includes(e.agent.id) : void 0, "aria-label": `${e.agent.name}: ${i[e.agent.status]}`, children: [
    SeComponent(e, t),
    e.kids.length > 0 && /* @__PURE__ */ jsx("div", { className: `ui-agt__below`, role: `group`, children: e.kids.map((e2) => CeComponent(e2, t + 1)) })
  ] }, e.agent.id);
  let X = (e, t) => Math.max(t, ...e.kids.map((e2) => X(e2, t + 1)));
  let we = X(L, 0);
  let Te = l(root);
  let length = N.filter((e) => e.status === `running`).length;
  let length_1 = N.filter((e) => e.status === `waiting`).length;
  let length_2 = N.filter((e) => e.status === `failed`).length;
  let Q = j2 ? N.filter((e) => e.status === j2) : [];
  let Oe = (e, t) => {
    onResolve?.(e, t);
    if (Q.length <= 1) {
      setJ(null);
    }
  };
  let $ = /* @__PURE__ */ new Map();
  for (let e of V) {
    let t = e.dot.join(`,`);
    let n4 = $.get(t);
    let leaving = e.leaving;
    if (n4) {
      $.set(t, {
        at: n4.at,
        muted: n4.muted && e.muted,
        leaving: n4.leaving === void 0 || leaving === void 0 ? void 0 : Math.max(n4.leaving, leaving)
      });
    } else {
      $.set(t, {
        at: e.dot,
        muted: e.muted,
        leaving
      });
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: [`ui-agt`, className].filter(Boolean).join(` `), "data-wide": P ? `` : void 0, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-agent-tree`, precedence: `default`, children: te }),
    /* @__PURE__ */ jsxs("header", { ref: reRef, className: `ui-agt__bar`, children: [
      /* @__PURE__ */ jsx("span", { className: `ui-agt__spark`, children: /* @__PURE__ */ jsx(F1Component, {}) }),
      /* @__PURE__ */ jsx("span", { className: `ui-agt__title`, children: title }),
      /* @__PURE__ */ jsxs("span", { className: `ui-agt__sum`, "aria-live": `polite`, children: [
        /* @__PURE__ */ jsx("span", { children: N.length === 1 ? `1 agent` : `${N.length} agents` }),
        length > 0 && /* @__PURE__ */ jsxs("span", { className: `ui-agt__sum-run`, children: [
          length,
          ` running`
        ] }),
        length_1 > 0 && /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-agt__sum-btn`, "data-kind": `waiting`, "aria-expanded": j2 === `waiting`, "aria-haspopup": `dialog`, onClick: () => setJ((e) => {
          if (e === `waiting`) {
            return null;
          }
          return `waiting`;
        }), children: [
          length_1,
          ` needs you`,
          /* @__PURE__ */ jsx(M1Component, {})
        ] }),
        length_2 > 0 && /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-agt__sum-btn`, "data-kind": `failed`, "aria-expanded": j2 === `failed`, "aria-haspopup": `dialog`, onClick: () => setJ((e) => {
          if (e === `failed`) {
            return null;
          }
          return `failed`;
        }), children: [
          length_2,
          ` failed`,
          /* @__PURE__ */ jsx(M1Component, {})
        ] }),
        /* @__PURE__ */ jsx("span", { className: `ui-agt__sum-cost`, children: /* @__PURE__ */ jsx("span", { className: `ui-agt__amount`, "data-live": length > 0 ? `` : void 0, children: formatCost(Te) }) })
      ] }),
      j2 && Q.length > 0 && /* @__PURE__ */ jsx("div", { className: `ui-agt__pop`, role: `dialog`, "aria-label": j2 === `waiting` ? `Agents that need you` : `Agents that failed`, onKeyDown: (e) => e.key === `Escape` && setJ(null), children: Q.map((e, t) => /* @__PURE__ */ jsxs("div", { className: `ui-agt__pop-item`, children: [
        /* @__PURE__ */ jsxs("span", { className: `ui-agt__pop-head`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-agt__status`, "data-status": e.status, children: /* @__PURE__ */ jsx(P1Component, { status: e.status }) }),
          /* @__PURE__ */ jsx("span", { className: `ui-agt__pop-name`, children: e.name }),
          /* @__PURE__ */ jsx("span", { className: `ui-agt__pop-task`, children: e.task })
        ] }),
        (j2 === `waiting` ? e.ask : e.error) && /* @__PURE__ */ jsx("span", { className: `ui-agt__pop-text`, children: j2 === `waiting` ? e.ask : e.error }),
        /* @__PURE__ */ jsxs("span", { className: `ui-agt__pop-actions`, children: [
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-agt__btn`, onClick: () => Oe(e, j2 === `waiting` ? `reject` : `dismiss`), children: j2 === `waiting` ? `Reject` : `Dismiss` }),
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-agt__btn ui-agt__btn--primary`, autoFocus: t === 0, onClick: () => Oe(e, j2 === `waiting` ? `approve` : `retry`), children: j2 === `waiting` ? `Approve` : `Retry` })
        ] })
      ] }, e.id)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { ref: ERef, className: `ui-agt__tree`, role: `tree`, "aria-label": title, style: {
      "--ui-agt-depth": we
    }, children: [
      /* @__PURE__ */ jsx("svg", { className: `ui-agt__links`, width: H.w, height: H.h, "aria-hidden": `true`, children: V.map((e) => /* @__PURE__ */ jsx("g", { "data-muted": e.muted ? `` : void 0, "data-fresh": xe.has(e.id) && e.leaving === void 0 && !u() ? `` : void 0, "data-leaving": e.leaving === void 0 ? void 0 : ``, children: /* @__PURE__ */ jsx("path", { d: e.d, pathLength: 1, className: `ui-agt__link`, style: {
        animationDelay: `${e.leaving === void 0 ? Math.max(0, e.enter - 160) : e.leaving}ms`
      } }) }, e.id)) }),
      /* @__PURE__ */ jsx("div", { className: `ui-agt__root`, role: `treeitem`, "aria-expanded": root.children?.length ? !k2.includes(root.id) : void 0, "aria-label": `${root.name}: ${i[root.status]}`, children: SeComponent(L, 0) }),
      L.kids.length > 0 && /* @__PURE__ */ jsx("div", { className: `ui-agt__level`, role: `group`, children: L.kids.map((e) => CeComponent(e, 1)) }),
      /* @__PURE__ */ jsx("svg", { className: `ui-agt__links ui-agt__dots`, width: H.w, height: H.h, "aria-hidden": `true`, children: [...$].map(([e, t]) => /* @__PURE__ */ jsx("circle", { cx: t.at[0], cy: t.at[1], r: 3.25, className: `ui-agt__dot`, "data-muted": t.muted ? `` : void 0, "data-leaving": t.leaving === void 0 ? void 0 : ``, style: t.leaving === void 0 ? void 0 : {
        animationDelay: `${t.leaving}ms`
      } }, e)) })
    ] })
  ] });
}
var te = `.ui-agt{--ui-agt-tray: #f0f0f0;--ui-agt-card: #ffffff;--ui-agt-ink: #171717;--ui-agt-text: #6b6b6b;--ui-agt-muted: #8a8a8a;--ui-agt-faint: #b8b8b8;--ui-agt-line: #ececec;--ui-agt-chip: #f5f5f5;--ui-agt-accent: #2f6bff;--ui-agt-link: #82bcff;--ui-agt-link-muted: #d6d6d6;--ui-agt-brand-bg: #eaf1ff;--ui-agt-brand-fg: #2456d6;--ui-agt-ok-bg: #e6f6ec;--ui-agt-ok-fg: #1a7f45;--ui-agt-warn-bg: #fff3e0;--ui-agt-warn-fg: #b85c00;--ui-agt-danger-bg: #fdecea;--ui-agt-danger-fg: #c2331f;--ui-agt-ring: rgba(23, 23, 23, 0.22);--ui-agt-card-w: 222px;--ui-agt-indent: 24px;--ui-agt-shine: #c4c4c4;--ui-agt-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;padding: 4px 0;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;line-height: 20px;letter-spacing: -0.006em;color: var(--ui-agt-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-agt *, .ui-agt *::before, .ui-agt *::after{box-sizing: border-box}:where(.ui-agt) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-agt button:focus-visible{outline: 2px solid var(--ui-agt-ring);outline-offset: 2px}.ui-agt p{margin: 0}.ui-agt svg{display: block;flex: none}.ui-agt__bar{position: relative;z-index: 3;display: flex;align-items: center;gap: 8px;min-width: 0;margin: 0 4px 18px}.ui-agt__spark{display: grid;flex: none;place-items: center;width: 16px;color: var(--ui-agt-accent)}.ui-agt__title{flex: none;font-weight: 600;color: var(--ui-agt-ink)}.ui-agt__sum{display: flex;flex-wrap: wrap;justify-content: flex-end;align-items: center;gap: 4px 12px;margin-left: auto;font-size: 12.5px;line-height: 18px;color: var(--ui-agt-muted);font-variant-numeric: tabular-nums}.ui-agt__sum-run{color: var(--ui-agt-brand-fg)}.ui-agt__sum-wait{color: var(--ui-agt-warn-fg)}.ui-agt__sum-fail{color: var(--ui-agt-danger-fg)}.ui-agt__sum-cost{min-width: 46px;color: var(--ui-agt-ink);font-weight: 600;text-align: right}.ui-agt__sum-btn{display: inline-flex;align-items: center;gap: 2px;height: 24px;margin: -3px 0;padding: 0 6px 0 9px;border-radius: 999px;font-size: 12.5px;font-weight: 500;transition: filter 160ms ease}.ui-agt__sum-btn[data-kind="waiting"]{background: var(--ui-agt-warn-bg);color: var(--ui-agt-warn-fg)}.ui-agt__sum-btn[data-kind="failed"]{background: var(--ui-agt-danger-bg);color: var(--ui-agt-danger-fg)}.ui-agt__sum-btn:hover{filter: saturate(1.3) brightness(0.97)}.ui-agt__sum-btn > svg{transition: transform 220ms var(--ui-agt-ease)}.ui-agt__sum-btn[aria-expanded="true"] > svg{transform: rotate(180deg)}.ui-agt__pop{position: absolute;top: calc(100% + 8px);right: 0;z-index: 5;display: grid;gap: 4px;width: 310px;max-width: 100%;padding: 6px;border-radius: 16px;background: var(--ui-agt-card);box-shadow: 0 0 0 1px var(--ui-agt-line), 0 16px 32px -12px rgba(0, 0, 0, 0.2);animation: ui-agt-pop 200ms var(--ui-agt-ease) both}.ui-agt__pop-item{display: grid;gap: 4px;padding: 10px}.ui-agt__pop-item + .ui-agt__pop-item{border-top: 1px solid var(--ui-agt-line)}.ui-agt__pop-head{display: flex;align-items: center;gap: 8px;min-width: 0}.ui-agt__pop-head .ui-agt__status{width: 22px;padding: 0;justify-content: center}.ui-agt__pop-name{flex: none;font-weight: 600;color: var(--ui-agt-ink)}.ui-agt__pop-task{min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-agt-muted);white-space: nowrap;text-overflow: ellipsis}.ui-agt__pop-text{padding-left: 30px;font-size: 12.5px;line-height: 17px;color: var(--ui-agt-text)}.ui-agt__pop-actions{display: flex;justify-content: flex-end;gap: 6px;margin-top: 6px}.ui-agt__btn{display: inline-flex;align-items: center;height: 32px;padding: 0 14px;border-radius: 10px;background: var(--ui-agt-card);box-shadow: 0 0 0 1px var(--ui-agt-line), 0 1px 2px rgba(0, 0, 0, 0.04);font-size: 13.5px;font-weight: 500;color: var(--ui-agt-ink);transition: background-color 160ms ease, opacity 160ms ease}.ui-agt__btn:hover{background: var(--ui-agt-chip)}.ui-agt__btn--primary{background: var(--ui-agt-ink);box-shadow: none;color: var(--ui-agt-card)}.ui-agt__btn--primary:hover{background: var(--ui-agt-ink);opacity: 0.88}.ui-agt__tree{position: relative;display: grid;justify-items: center}.ui-agt__links{position: absolute;top: 0;left: 0;overflow: visible;pointer-events: none}.ui-agt__link{fill: none;stroke: var(--ui-agt-link);stroke-width: 1.75;stroke-linecap: round;transition: stroke 240ms ease}.ui-agt__links [data-muted] .ui-agt__link{stroke: var(--ui-agt-link-muted)}.ui-agt__links [data-fresh] .ui-agt__link{stroke-dasharray: 1 1;stroke-dashoffset: 1;animation: ui-agt-draw 420ms var(--ui-agt-ease) both}.ui-agt__dots{z-index: 2}.ui-agt__dot{fill: var(--ui-agt-dot, #ffffff);stroke: var(--ui-agt-link);stroke-width: 1.75;transition: stroke 240ms ease}.ui-agt__dot[data-muted]{stroke: var(--ui-agt-link-muted)}.ui-agt__root{position: relative;z-index: 1}.ui-agt__level{position: relative;z-index: 1;display: flex;align-items: flex-start;justify-content: center;gap: 8px;width: 100%;margin-top: 40px}.ui-agt__level > .ui-agt__hang{flex: none;width: calc(var(--ui-agt-card-w) + var(--ui-agt-indent))}.ui-agt[data-wide] .ui-agt__root:has(+ .ui-agt__level){margin-right: var(--ui-agt-indent)}.ui-agt__hang{display: grid;align-content: start;gap: 12px}.ui-agt__below{display: grid;gap: 12px;padding-left: var(--ui-agt-indent)}.ui-agt:not([data-wide]) .ui-agt__tree{justify-items: stretch}.ui-agt:not([data-wide]) .ui-agt__tree{container-type: inline-size}.ui-agt__node{width: var(--ui-agt-card-w)}.ui-agt:not([data-wide]) .ui-agt__node{width: calc(100cqw - var(--ui-agt-depth, 0) * var(--ui-agt-indent))}.ui-agt:not([data-wide]) .ui-agt__level{display: grid;gap: 12px;margin-top: 12px;padding-left: var(--ui-agt-indent)}.ui-agt:not([data-wide]) .ui-agt__level{justify-content: stretch}.ui-agt:not([data-wide]) .ui-agt__level > .ui-agt__hang{width: auto}.ui-agt__node{position: relative;display: grid;padding: 4px;border-radius: 16px;background: var(--ui-agt-tray);animation: ui-agt-rise 360ms var(--ui-agt-ease) both;transition: opacity 240ms ease}.ui-agt__card{display: grid;gap: 6px;min-width: 0;padding: 9px 10px 10px 10px;border-radius: 12px;background: var(--ui-agt-card);box-shadow: 0 0 0 1px var(--ui-agt-line), 0 1px 2px rgba(0, 0, 0, 0.04);transition: box-shadow 200ms ease}.ui-agt__node[data-leaving]{animation: ui-agt-leave ${h}ms var(--ui-agt-ease) forwards;pointer-events: none}.ui-agt__links [data-leaving] .ui-agt__link{stroke-dasharray: 1 1;stroke-dashoffset: 0;animation: ui-agt-retract ${h}ms var(--ui-agt-ease) forwards}.ui-agt__dot[data-leaving]{animation: ui-agt-fade ${h}ms ease forwards}.ui-agt__node[data-clickable]{cursor: pointer}.ui-agt__node:focus-visible{outline: 2px solid var(--ui-agt-ring);outline-offset: 2px}.ui-agt__node[data-clickable]:hover .ui-agt__card{box-shadow: 0 0 0 1px #e0e0e0, 0 4px 12px -4px rgba(0, 0, 0, 0.1)}.ui-agt__node[data-status="queued"], .ui-agt__node[data-status="stopped"]{opacity: 0.6}.ui-agt__top{display: flex;align-items: center;gap: 8px;min-width: 0}.ui-agt__avatar{display: grid;flex: none;place-items: center;width: 24px;height: 24px;border-radius: 8px;background: var(--ui-agt-card);box-shadow: 0 0 0 1px var(--ui-agt-line), 0 1px 2px rgba(0, 0, 0, 0.06);font-size: 10px;font-weight: 600;color: var(--ui-agt-text)}.ui-agt__avatar[data-logo] > svg{width: 14px;height: 14px}.ui-agt__who{display: grid;flex: 1;min-width: 0}.ui-agt__name{overflow: hidden;font-size: 13px;font-weight: 600;line-height: 17px;color: var(--ui-agt-ink);white-space: nowrap;text-overflow: ellipsis}.ui-agt__tools{display: inline-flex;margin-right: 6px;vertical-align: top}.ui-agt__tool{display: grid;flex: none;place-items: center;width: 17px;height: 17px;border-radius: 5px;background: var(--ui-agt-card);box-shadow: 0 0 0 1px var(--ui-agt-line), 0 1px 2px rgba(0, 0, 0, 0.06)}.ui-agt__tool + .ui-agt__tool{margin-left: -5px}.ui-agt__tool > svg{width: 10px;height: 10px}.ui-agt__model{overflow: hidden;font-size: 11.5px;line-height: 15px;color: var(--ui-agt-muted);white-space: nowrap;text-overflow: ellipsis}.ui-agt__status{display: inline-flex;flex: none;align-self: start;align-items: center;gap: 3px;height: 20px;padding: 0 7px 0 5px;border-radius: 999px;background: var(--ui-agt-chip);font-size: 11px;font-weight: 500;line-height: 16px;color: var(--ui-agt-text);white-space: nowrap}.ui-agt__status[data-status="running"]{background: var(--ui-agt-brand-bg);color: var(--ui-agt-brand-fg)}.ui-agt__spin{animation: ui-agt-spin 900ms linear infinite}.ui-agt__status[data-status="waiting"]{background: var(--ui-agt-warn-bg);color: var(--ui-agt-warn-fg)}.ui-agt__status[data-status="done"]{background: var(--ui-agt-ok-bg);color: var(--ui-agt-ok-fg)}.ui-agt__status[data-status="failed"]{background: var(--ui-agt-danger-bg);color: var(--ui-agt-danger-fg)}.ui-agt__task{display: -webkit-box;overflow: hidden;margin: -2px -2px -3px !important;padding: 2px 2px 3px;font-size: 12.5px;line-height: 17px;color: var(--ui-agt-text);-webkit-line-clamp: 2;-webkit-box-orient: vertical}.ui-agt__meta{display: flex;align-items: center;gap: 6px;min-height: 30px;padding: 0 4px 0 8px}.ui-agt__cost{flex: 1;min-width: 0;overflow: hidden;font-size: 12px;font-weight: 600;line-height: 16px;color: var(--ui-agt-ink);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-agt__amount[data-live]{background: linear-gradient(90deg, currentColor 0%, currentColor 38%, var(--ui-agt-shine) 50%, currentColor 62%, currentColor 100%) 0 0 / 300% 100%;-webkit-background-clip: text;background-clip: text;-webkit-text-fill-color: transparent;animation: ui-agt-shine 1100ms linear infinite}.ui-agt__time{font-weight: 400;color: var(--ui-agt-muted)}.ui-agt__fold{display: inline-flex;flex: none;align-items: center;gap: 2px;height: 22px;margin-right: -2px;padding: 0 4px 0 6px;border-radius: 999px;font-size: 11.5px;font-weight: 500;color: var(--ui-agt-text);font-variant-numeric: tabular-nums;transition: background-color 160ms ease, color 160ms ease}.ui-agt__fold:hover{background: var(--ui-agt-fold-hover, #e4e4e4);color: var(--ui-agt-ink)}.ui-agt__fold > svg{transition: transform 220ms var(--ui-agt-ease)}.ui-agt__fold[aria-expanded="false"] > svg{transform: rotate(-90deg)}@keyframes ui-agt-shine{from{background-position: 100% 0}to{background-position: 0 0}}@keyframes ui-agt-draw{to{stroke-dashoffset: 0}}@keyframes ui-agt-retract{to{stroke-dashoffset: 1}}@keyframes ui-agt-leave{to{opacity: 0;transform: translateY(4px) scale(0.97)}}@keyframes ui-agt-fade{to{opacity: 0}}@keyframes ui-agt-rise{from{opacity: 0;transform: translateY(6px) scale(0.98)}}@keyframes ui-agt-spin{to{transform: rotate(360deg)}}@keyframes ui-agt-pop{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}@media (pointer: coarse){.ui-agt__fold{height: 32px;padding: 0 10px 0 12px}}@media (prefers-reduced-motion: reduce){.ui-agt *, .ui-agt *::before, .ui-agt *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-agt__node[data-clickable]:hover .ui-agt__card{box-shadow: 0 0 0 1px #34343a, 0 4px 12px -4px rgba(0, 0, 0, 0.5)}:where(.dark, [data-theme="dark"]) .ui-agt{--ui-agt-tray: #19191c;--ui-agt-shine: #6a6a70;--ui-agt-card: #232326;--ui-agt-dot: #111113;--ui-agt-fold-hover: #2a2a2e;--ui-agt-ink: #ededed;--ui-agt-text: #a1a1a6;--ui-agt-muted: #7c7c82;--ui-agt-faint: #4a4a50;--ui-agt-line: #2a2a2e;--ui-agt-chip: #26262a;--ui-agt-accent: #5b9aff;--ui-agt-link: #4f8fdb;--ui-agt-link-muted: #3a3a40;--ui-agt-brand-bg: #16243f;--ui-agt-brand-fg: #8ab4ff;--ui-agt-ok-bg: #12301f;--ui-agt-ok-fg: #3dd68c;--ui-agt-warn-bg: #3a2410;--ui-agt-warn-fg: #ffa057;--ui-agt-danger-bg: #3b1714;--ui-agt-danger-fg: #ff977d;--ui-agt-ring: rgba(237, 237, 237, 0.3)}`;
var B1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 1200 1200`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { fill: `#D97757`, d: `M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z` }) });
var X1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `currentColor`, "aria-hidden": `true`, style: {
  color: `var(--ui-agtc-strong, var(--ui-agt-ink, #000))`
}, children: /* @__PURE__ */ jsx("path", { d: `M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z` }) });
var NeComponent = () => {
  let e = `gm` + n3.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
  return /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: e, x1: `0`, y1: `24`, x2: `24`, y2: `0`, gradientUnits: `userSpaceOnUse`, children: [
      /* @__PURE__ */ jsx("stop", { stopColor: `#1C7DFF` }),
      /* @__PURE__ */ jsx("stop", { offset: `0.52`, stopColor: `#1C69FF` }),
      /* @__PURE__ */ jsx("stop", { offset: `1`, stopColor: `#B04DFF` })
    ] }) }),
    /* @__PURE__ */ jsx("path", { fill: `url(#${e})`, d: `M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81` })
  ] });
};
var SComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `currentColor`, "aria-hidden": `true`, style: {
  color: `var(--ui-agtc-strong, var(--ui-agt-ink, #000))`
}, children: /* @__PURE__ */ jsx("path", { d: `M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z` }) });
var CComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `currentColor`, "aria-hidden": `true`, style: {
  color: `var(--ui-agtc-strong, var(--ui-agt-ink, #181717))`
}, children: /* @__PURE__ */ jsx("path", { d: `M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12` }) });
var W1Component = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 49.883 49.877`, fill: `none`, "aria-hidden": `true`, children: [
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
var TComponent = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 38 57`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("path", { d: `M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z`, fill: `#1ABCFE` }),
  /* @__PURE__ */ jsx("path", { d: `M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z`, fill: `#0ACF83` }),
  /* @__PURE__ */ jsx("path", { d: `M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z`, fill: `#FF7262` }),
  /* @__PURE__ */ jsx("path", { d: `M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z`, fill: `#F24E1E` }),
  /* @__PURE__ */ jsx("path", { d: `M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z`, fill: `#A259FF` })
] });
var EComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `#FF7A59`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z` }) });
var DComponent = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("rect", { width: `24`, height: `24`, rx: `6`, fill: `#635BFF` }),
  /* @__PURE__ */ jsx("path", { fill: `#fff`, transform: `translate(5 5) scale(0.5833)`, d: `M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z` })
] });
var O = [{
  id: `lead`,
  name: `Orchestrator`,
  model: `Opus 5.5`,
  avatar: /* @__PURE__ */ jsx(B1Component, {}),
  tools: [/* @__PURE__ */ jsx(W1Component, {}, `s`), /* @__PURE__ */ jsx(SComponent, {}, `n`), /* @__PURE__ */ jsx(CComponent, {}, `g`)],
  task: `Launch the new pricing page by Friday`,
  at: 0,
  end: 12.6,
  outcome: `done`,
  rate: 0.011
}, {
  id: `research`,
  parent: `lead`,
  name: `Researcher`,
  model: `Sonnet 5.5`,
  avatar: /* @__PURE__ */ jsx(B1Component, {}),
  tools: [/* @__PURE__ */ jsx(SComponent, {}, `n`), /* @__PURE__ */ jsx(W1Component, {}, `s`)],
  task: `Compare the pricing of five competitors`,
  at: 0.8,
  end: 6.4,
  outcome: `done`,
  rate: 4e-3
}, {
  id: `scrape`,
  parent: `research`,
  name: `Scraper`,
  model: `Gemini 3.8 Flash`,
  avatar: /* @__PURE__ */ jsx(NeComponent, {}),
  tools: [/* @__PURE__ */ jsx(SComponent, {}, `n`)],
  task: `Read the pricing pages of Linear, Notion and three more`,
  at: 1.8,
  end: 4.6,
  outcome: `done`,
  rate: 12e-4
}, {
  id: `reviews`,
  parent: `research`,
  name: `Analyst`,
  model: `Sonnet 5.5`,
  avatar: /* @__PURE__ */ jsx(B1Component, {}),
  tools: [/* @__PURE__ */ jsx(EComponent, {}, `h`), /* @__PURE__ */ jsx(SComponent, {}, `n`)],
  task: `Summarize 120 G2 reviews that mention price`,
  at: 2.6,
  end: 6,
  outcome: `done`,
  rate: 3e-3
}, {
  id: `copy`,
  parent: `lead`,
  name: `Writer`,
  model: `Sonnet 5.5`,
  avatar: /* @__PURE__ */ jsx(B1Component, {}),
  tools: [/* @__PURE__ */ jsx(SComponent, {}, `n`), /* @__PURE__ */ jsx(TComponent, {}, `f`)],
  task: `Write the copy for the three plans`,
  at: 1.4,
  end: 10,
  outcome: `done`,
  wait: [5.6, 7.4],
  ask: `Formal or friendly for the plan names? Both drafts are in Notion.`,
  rate: 35e-4
}, {
  id: `build`,
  parent: `lead`,
  name: `Coder`,
  model: `GPT-6 Sol`,
  avatar: /* @__PURE__ */ jsx(X1Component, {}),
  tools: [/* @__PURE__ */ jsx(CComponent, {}, `g`), /* @__PURE__ */ jsx(DComponent, {}, `s`), /* @__PURE__ */ jsx(TComponent, {}, `f`)],
  task: `Build the page and wire up checkout`,
  at: 2,
  end: 12,
  outcome: `done`,
  rate: 6e-3
}, {
  id: `tests`,
  parent: `build`,
  name: `Tester`,
  model: `GPT-6 Mini`,
  avatar: /* @__PURE__ */ jsx(X1Component, {}),
  tools: [/* @__PURE__ */ jsx(CComponent, {}, `g`)],
  task: `Write and run the checkout tests`,
  at: 3.6,
  end: 7,
  outcome: `failed`,
  error: `2 of 14 checkout tests fail \u2013 coupon codes aren't applied`,
  rate: 16e-4
}, {
  id: `retry`,
  parent: `build`,
  name: `Tester`,
  model: `GPT-6 Mini`,
  avatar: /* @__PURE__ */ jsx(X1Component, {}),
  tools: [/* @__PURE__ */ jsx(CComponent, {}, `g`), /* @__PURE__ */ jsx(DComponent, {}, `s`)],
  task: `Fix the coupon test and run all again`,
  at: 7.6,
  end: 10.8,
  outcome: `done`,
  rate: 16e-4
}];
var k = 16;
var A = 8;
var j = (e, t, n4) => {
  let r2 = (i2) => {
    let status = e >= i2.end ? i2.outcome : i2.wait && e >= i2.wait[0] && e < i2.wait[1] ? `waiting` : `running`;
    if (status === `waiting` && n4[i2.id]) {
      status = `running`;
    }
    if (status === `failed` && n4[i2.id]) {
      status = `stopped`;
    }
    let o2 = Math.min(e, i2.end) - i2.at - (i2.wait ? Math.max(0, Math.min(e, i2.wait[1]) - i2.wait[0]) : 0);
    return {
      id: i2.id,
      name: i2.name,
      model: i2.model,
      avatar: i2.avatar,
      tools: i2.tools,
      task: i2.task,
      ask: i2.ask,
      error: i2.error,
      status,
      cost: Math.max(0, o2) * i2.rate * A,
      started: t + i2.at * 1e3 * A,
      ended: e >= i2.end ? t + i2.end * 1e3 * A : void 0,
      children: O.filter((t2) => t2.parent === i2.id && e >= t2.at).map(r2)
    };
  };
  return r2(O[0]);
};
function MComponent() {
  let [e, setE] = n3.useState(0);
  let [i2] = n3.useState(() => Date.now());
  let [collapsed, setCollapsed] = n3.useState([]);
  let [s2, setS] = n3.useState({});
  let lRef = n3.useRef(0);
  let uRef = n3.useRef(false);
  let dRef = n3.useRef(performance.now());
  n3.useEffect(() => {
    let e2 = window.setInterval(() => {
      let e3 = (performance.now() - dRef.current) / 1e3 % 18.5;
      if (e3 < lRef.current) {
        setS({});
      }
      lRef.current = e3;
      setE(e3);
      if (!uRef.current) {
        setCollapsed(e3 >= 9 && e3 < k ? [`research`] : []);
      }
    }, 100);
    return () => window.clearInterval(e2);
  }, []);
  let f = Math.min(e, k);
  return /* @__PURE__ */ jsx("div", { className: `agt-demo`, children: /* @__PURE__ */ jsx(Ee1Component, { root: j(f, i2, s2), onResolve: (e2, t) => setS((n4) => ({
    ...n4,
    [e2.id]: t
  })), now: i2 + f * 1e3 * A, collapsed, onCollapsedChange: (e2) => {
    uRef.current = true;
    setCollapsed(e2);
  } }) });
}

export {
  MComponent
};
