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

// reconstructed/demo-BpwDm3_5.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function i(blocks2, suggestions, n4) {
  let r2 = suggestions.find((e) => e.id === n4);
  if (!r2) {
    return {
      blocks: blocks2,
      suggestions
    };
  }
  let i2 = r2.remove ?? 0;
  let a2 = r2.insert ?? ``;
  let o2 = a2.length - i2;
  return {
    blocks: blocks2.map(function e(t) {
      if (t.id === r2.block) {
        return {
          ...t,
          text: (t.text ?? ``).slice(0, r2.at) + a2 + (t.text ?? ``).slice(r2.at + i2)
        };
      }
      if (t.rows) {
        return {
          ...t,
          rows: t.rows.map((t2) => t2.map(e))
        };
      }
      return t;
    }),
    suggestions: suggestions.filter((e) => e.id !== n4).map((e) => {
      if (e.block === r2.block && e.at >= r2.at + i2) {
        return {
          ...e,
          at: e.at + o2
        };
      }
      return e;
    })
  };
}
var a = (e) => {
  let t = e?.firstChild;
  if (t && t.nodeType === 3) {
    return t;
  }
  return null;
};
function o(e, t, n4) {
  if (n4) {
    let r3 = e.querySelector(`[data-ins="${CSS.escape(n4)}"]`);
    if (r3) {
      let e2 = a(r3);
      if (e2) {
        return [e2, Math.max(0, Math.min(t, e2.length))];
      }
      let n5 = r3.previousElementSibling;
      if (n5?.tagName === `WBR`) {
        n5 = n5.previousElementSibling;
      }
      let i2 = a(n5);
      if (i2) {
        return [i2, i2.length];
      }
      let o2 = a(r3.nextElementSibling);
      if (o2) {
        return [o2, 0];
      }
    }
  }
  let r2 = null;
  for (let n5 of e.querySelectorAll(`[data-from]`)) {
    let e2 = a(n5);
    if (!e2) {
      continue;
    }
    let i2 = Number(n5.dataset.from);
    if (t >= i2 && t <= i2 + e2.length && (r2 = [e2, t - i2], t < i2 + e2.length)) {
      break;
    }
  }
  return r2;
}
function s(e, t) {
  let n4 = document.createRange();
  if (!e.length) {
    return null;
  }
  if (t < e.length) {
    n4.setStart(e, t);
    n4.setEnd(e, t + 1);
    return n4.getClientRects()[0] ?? null;
  }
  n4.setStart(e, t - 1);
  n4.setEnd(e, t);
  let r2 = n4.getClientRects();
  let i2 = r2[r2.length - 1];
  if (i2) {
    return new DOMRect(i2.right, i2.top, 0, i2.height);
  }
  return null;
}
var c = (e) => e.trim().charAt(0).toUpperCase();
var l = (e) => `$${e.toFixed(2)}`;
var u = `\u200B`;
function D1Component({
  agents,
  blocks: blocks2,
  suggestions = [],
  comments = [],
  onResolveComment,
  onReply,
  cursors,
  onAccept,
  onReject,
  onAcceptAll,
  following,
  onFollowingChange,
  height,
  tabs: tabs2,
  tab,
  onTabChange,
  formatCost = l,
  title = `Untitled`,
  className
}) {
  let ERef = n3.useRef(null);
  let DRef = n3.useRef(null);
  let [O2, setO] = n3.useState({});
  let [ne2, setNe] = n3.useState({});
  let [A2, setA] = n3.useState({});
  let [ie2, setIe] = n3.useState({});
  let [j2, setJ] = n3.useState({});
  let [M2, setM] = n3.useState(null);
  let [P, setP] = n3.useState(``);
  let IRef = n3.useRef(0);
  let [se, setSe] = n3.useState(0);
  let [le, setLe] = n3.useState(0);
  let [de, setDe] = n3.useState(0);
  let [pe, setPe] = n3.useState(Infinity);
  let LRef = n3.useRef(/* @__PURE__ */ new Map());
  let [he, setHe] = n3.useState({});
  let [_e, set_e] = n3.useState(null);
  let R = following === void 0 ? _e : following;
  let ye = (e) => {
    if (following === void 0) {
      set_e(e);
    }
    onFollowingChange?.(e);
  };
  let [z, setZ] = n3.useState(null);
  let VRef = n3.useRef(0);
  let be = () => {
    let ERef_current = ERef.current;
    if (!ERef_current) {
      return;
    }
    let n4 = ERef_current.getBoundingClientRect();
    let r2 = ERef_current.offsetWidth ? n4.width / ERef_current.offsetWidth : 1;
    let i2 = (e) => ({
      x: (e.left - n4.left) / r2,
      y: (e.top - n4.top) / r2,
      w: e.width / r2,
      h: e.height / r2
    });
    let c2 = (e) => Math.round(e * 10) / 10;
    let l2 = {};
    let u2 = {};
    for (let n5 of agents) {
      let e = cursors[n5.id];
      if (!e) {
        continue;
      }
      let r3 = ERef_current.querySelector(`[data-block="${CSS.escape(e.block)}"]`);
      if (!r3) {
        continue;
      }
      let a2 = r3.dataset.kind === `image` ? r3.querySelector(`.ui-agc__img`) : null;
      if (a2) {
        let r4 = i2(a2.getBoundingClientRect());
        let o2 = e.point === `corner` ? {
          x: c2(r4.x + r4.w),
          y: c2(r4.y + r4.h),
          h: 0,
          free: true
        } : {
          x: c2(r4.x + r4.w * 0.55),
          y: c2(r4.y + r4.h * 0.5),
          h: 0,
          free: true
        };
        l2[n5.id] = o2;
        if (e.point === `corner` && e.select) {
          let e2 = ERef_current.querySelector(`[data-agent="${CSS.escape(n5.id)}"]`);
          if (e2) {
            e2.style.transform = `translate(${o2.x}px, ${o2.y}px)`;
          }
        }
        continue;
      }
      let d2 = o(r3, e.at ?? 0, e.in);
      let f3 = d2 ? s(...d2) : null;
      if (f3) {
        let e2 = i2(f3);
        l2[n5.id] = {
          x: c2(e2.x),
          y: c2(e2.y),
          h: c2(e2.h)
        };
      }
      if (e.select && !e.in) {
        let t = o(r3, e.at ?? 0);
        let a3 = o(r3, (e.at ?? 0) + e.select);
        if (t && a3) {
          let e2 = document.createRange();
          e2.setStart(...t);
          e2.setEnd(...a3);
          let r4 = [];
          for (let t2 of e2.getClientRects()) {
            if (t2.width < 0.5) {
              continue;
            }
            let e3 = i2(t2);
            let n6 = r4.find((t3) => Math.abs(t3.y - e3.y) < 3);
            if (n6) {
              let t3 = Math.max(n6.x + n6.w, e3.x + e3.w);
              n6.x = Math.min(n6.x, e3.x);
              n6.w = t3 - n6.x;
            } else {
              r4.push({
                ...e3
              });
            }
          }
          u2[n5.id] = r4.map((e3) => ({
            x: Math.round(e3.x),
            y: Math.round(e3.y),
            w: Math.round(e3.w),
            h: Math.round(e3.h)
          }));
        }
      }
    }
    let d = DRef.current ? i2(DRef.current.getBoundingClientRect()) : {
      x: 0,
      w: ERef_current.offsetWidth
    };
    let f2 = {};
    for (let e of comments) {
      let n5 = ERef_current.querySelector(`[data-block="${CSS.escape(e.block)}"]`);
      if (!n5) {
        continue;
      }
      let r3 = e.at === void 0 ? null : o(n5, e.at);
      let a2 = r3 ? s(...r3) : null;
      if (a2) {
        let t = i2(a2);
        f2[e.id] = {
          x: Math.round(t.x),
          y: Math.round(t.y + 3 + (e.y ?? 0))
        };
        continue;
      }
      let c3 = i2(n5.getBoundingClientRect());
      f2[e.id] = {
        x: Math.round(d.x + d.w * Math.max(0, Math.min(1, e.x ?? 0.9))),
        y: Math.round(c3.y + (e.y ?? 0))
      };
    }
    let p = {};
    for (let e of ERef_current.querySelectorAll(`figure[data-fit]`)) {
      if (getComputedStyle(e).float === `none`) {
        continue;
      }
      let t = e.nextElementSibling;
      if (t && e.dataset.block) {
        p[e.dataset.block] = {
          w: Math.round(e.offsetWidth),
          h: Math.max(48, Math.round(t.offsetHeight))
        };
      }
    }
    let h = {};
    for (let e of comments) {
      let n5 = ERef_current.querySelector(`[data-comment="${CSS.escape(e.id)}"] .ui-agc__pin-body`);
      if (n5) {
        h[e.id] = n5.offsetHeight;
      }
    }
    let g = (e, t) => {
      if (JSON.stringify(e) === JSON.stringify(t)) {
        return e;
      }
      return t;
    };
    setO((e) => g(e, l2));
    setNe((e) => g(e, u2));
    setA((e) => g(e, f2));
    setIe((e) => g(e, h));
    setJ((e) => g(e, p));
    setSe(ERef_current.offsetWidth);
    setLe(DRef.current?.offsetWidth ?? ERef_current.offsetWidth);
    setDe(ERef_current.offsetHeight);
    let t_parentElement = ERef_current.parentElement;
    while (t_parentElement && t_parentElement !== document.body && getComputedStyle(t_parentElement).overflowX === `visible`) {
      t_parentElement = t_parentElement.parentElement;
    }
    let v = t_parentElement && t_parentElement !== document.body ? t_parentElement.getBoundingClientRect().right : window.innerWidth;
    setPe(Math.round((v - n4.left) / r2));
    let y2 = {};
    for (let [e, t] of LRef.current) {
      y2[e] = t.offsetWidth;
    }
    setHe((e) => {
      if (JSON.stringify(e) === JSON.stringify(y2)) {
        return e;
      }
      return y2;
    });
  };
  let HRef = n3.useRef(be);
  HRef.current = be;
  n3.useLayoutEffect(() => {
    for (let e of ERef.current?.querySelectorAll(`.ui-agc__table-card`) ?? []) {
      let t = e.firstElementChild;
      if (!t) {
        continue;
      }
      let n4 = `${t.offsetHeight}px`;
      if (e.style.height !== n4) {
        if (e.style.height) {
          e.style.height = n4;
        } else {
          e.style.transition = `none`;
          e.style.height = n4;
          e.offsetHeight;
          e.style.transition = ``;
        }
      }
    }
  });
  n3.useLayoutEffect(() => HRef.current());
  n3.useEffect(() => {
    let ERef_current = ERef.current;
    if (!ERef_current) {
      return;
    }
    let t = new ResizeObserver(() => HRef.current());
    t.observe(ERef_current);
    document.fonts?.ready.then(() => HRef.current());
    let n4 = 0;
    let r2 = 0;
    let i2 = () => {
      HRef.current();
      n4 = performance.now() < r2 ? requestAnimationFrame(i2) : 0;
    };
    let a2 = (e) => {
      let e_target = e.target;
      if (e_target.classList?.contains(`ui-agc__figure`) || e_target.classList?.contains(`ui-agc__table-card`)) {
        r2 = performance.now() + 900;
        n4 ||= requestAnimationFrame(i2);
      }
    };
    ERef_current.addEventListener(`transitionrun`, a2);
    return () => {
      t.disconnect();
      cancelAnimationFrame(n4);
      ERef_current.removeEventListener(`transitionrun`, a2);
    };
  }, []);
  let xe = agents.filter((e) => cursors[e.id] && O2[e.id]).map((e) => e.id);
  let URef = n3.useRef(/* @__PURE__ */ new Set());
  let [, setSe_1] = n3.useState(0);
  let W = xe.filter((e) => !URef.current.has(e));
  n3.useEffect(() => {
    if (!W.length) {
      for (let e2 of [...URef.current]) {
        if (!xe.includes(e2)) {
          URef.current.delete(e2);
        }
      }
      return;
    }
    let e = window.setTimeout(() => {
      W.forEach((e2) => URef.current.add(e2));
      setSe_1((e2) => e2 + 1);
    }, 40);
    return () => window.clearTimeout(e);
  });
  let CeRef = n3.useRef({});
  Object.assign(CeRef.current, O2);
  let [we, setWe] = n3.useState(``);
  let GRef = n3.useRef(null);
  n3.useEffect(() => {
    let t = /* @__PURE__ */ new Set([...suggestions.map((e) => e.id), ...comments.map((e) => e.id)]);
    if (GRef.current) {
      let t2 = suggestions.find((e) => !GRef.current.has(e.id));
      let n4 = comments.find((e) => !GRef.current.has(e.id));
      let r2 = (agent) => agents.find((e) => e.id === agent)?.name;
      if (t2 && r2(t2.agent)) {
        setWe(`${r2(t2.agent)} suggests a change${t2.note ? `: ${t2.note}` : ``}`);
      } else if (n4 && r2(n4.agent)) {
        setWe(`${r2(n4.agent)} is writing a comment`);
      }
    }
    GRef.current = t;
  }, [suggestions, comments, agents]);
  let Ee = (id, currentTarget) => {
    window.clearTimeout(VRef.current);
    let ERef_current = ERef.current;
    if (!ERef_current) {
      return;
    }
    let r2 = ERef_current.getBoundingClientRect();
    let i2 = ERef_current.offsetWidth ? r2.width / ERef_current.offsetWidth : 1;
    let a2 = currentTarget.getClientRects();
    let o2 = a2[a2.length - 1] ?? currentTarget.getBoundingClientRect();
    setZ({
      id,
      box: {
        x: (o2.left - r2.left) / i2,
        y: (o2.top - r2.top) / i2,
        w: o2.width / i2,
        h: o2.height / i2
      }
    });
  };
  let K = () => {
    window.clearTimeout(VRef.current);
    VRef.current = window.setTimeout(() => setZ(null), 140);
  };
  let q = z ? suggestions.find((e) => e.id === z.id) : void 0;
  n3.useEffect(() => {
    if (!z) {
      return;
    }
    let e = (e2) => e2.key === `Escape` && setZ(null);
    document.addEventListener(`keydown`, e);
    return () => document.removeEventListener(`keydown`, e);
  }, [z]);
  n3.useEffect(() => () => {
    window.clearTimeout(VRef.current);
    window.clearTimeout(IRef.current);
  }, []);
  let J = (agent) => agents.find((e) => e.id === agent);
  let De = (agent) => J(agent)?.color;
  let Y = (agent) => J(agent)?.name ?? `Agent`;
  let XComponent = (e) => e?.avatar ?? /* @__PURE__ */ jsx("span", { className: `ui-agc__face-initial`, children: c(e?.name ?? `?`) });
  let ZComponent = (e) => {
    let t = e.text ?? ``;
    let n4 = suggestions.filter((t2) => t2.block === e.id).sort((e2, t2) => e2.at - t2.at);
    let a2 = [];
    let o2 = 0;
    for (let e2 of n4) {
      let n5 = Math.max(o2, Math.min(e2.at, t.length));
      if (n5 > o2) {
        a2.push(/* @__PURE__ */ jsx("span", { "data-from": o2, children: t.slice(o2, n5) }, `t${o2}`));
      }
      let i2 = Math.min(e2.remove ?? 0, t.length - n5);
      let style = {
        "--ui-agc-c": De(e2.agent)
      };
      let c2 = {
        tabIndex: 0,
        onMouseEnter: (t2) => Ee(e2.id, t2.currentTarget),
        onMouseLeave: K,
        onFocus: (t2) => Ee(e2.id, t2.currentTarget),
        onBlur: K,
        "data-open": z?.id === e2.id ? `` : void 0
      };
      if (i2) {
        a2.push(/* @__PURE__ */ jsx("del", { className: `ui-agc__del`, "data-from": n5, "data-sug": e2.id, style, ...c2, "aria-label": `${Y(e2.agent)} suggests removing: ${t.slice(n5, n5 + i2)}`, children: t.slice(n5, n5 + i2) }, `d${e2.id}`));
      }
      if (i2 && e2.insert !== void 0) {
        a2.push(/* @__PURE__ */ jsx("wbr", {}, `b${e2.id}`));
      }
      if (e2.insert !== void 0) {
        a2.push(/* @__PURE__ */ jsx("ins", { className: `ui-agc__ins`, "data-ins": e2.id, "data-sug": e2.id, style, ...c2, "aria-label": `${Y(e2.agent)} suggests adding: ${e2.insert}`, children: e2.insert }, `i${e2.id}`));
      }
      o2 = n5 + i2;
    }
    if (o2 < t.length || !a2.length) {
      a2.push(/* @__PURE__ */ jsx("span", { "data-from": o2, children: t.slice(o2) || u }, `t${o2}`));
    }
    return a2;
  };
  let Oe = (t) => agents.find((e) => cursors[e.id]?.block === t && cursors[e.id]?.select);
  let KeComponent = (t) => {
    let n4 = t.kind ?? `paragraph`;
    if (n4 === `image`) {
      let e = Math.max(0.2, Math.min(1, t.width ?? 1));
      let n5 = t.ratio ?? 16 / 9;
      let i2 = !!t.float && t.ratio === void 0;
      let a2 = i2 ? j2[t.id] : void 0;
      let o2 = Oe(t.id);
      return /* @__PURE__ */ jsxs("figure", { className: `ui-agc__figure`, "data-block": t.id, "data-kind": `image`, "data-float": t.float, "data-fit": i2 ? `` : void 0, style: {
        width: `${e * 100}%`
      }, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-agc__img`, "data-loading": t.loading ? `` : void 0, "data-held": o2 ? `` : void 0, style: {
          ...i2 && a2 ? {
            height: a2.h
          } : {
            aspectRatio: String(n5)
          },
          "--ui-agc-c": o2?.color
        }, role: `img`, "aria-label": t.loading ? `Image loading` : t.alt || t.text || `Image`, children: [
          t.loading || !t.src ? /* @__PURE__ */ jsx("span", { className: `ui-agc__shimmer`, "aria-hidden": `true` }) : /* @__PURE__ */ jsx("img", { src: t.src, alt: ``, draggable: false }),
          o2 && /* @__PURE__ */ jsxs(Fragment, { children: [
            [`tl`, `tr`, `bl`, `br`].map((e2) => /* @__PURE__ */ jsx("span", { className: `ui-agc__handle`, "data-at": e2, "aria-hidden": `true` }, e2)),
            /* @__PURE__ */ jsx("span", { className: `ui-agc__size`, "aria-hidden": `true`, children: a2 ? `${a2.w * 2} \xD7 ${a2.h * 2}` : `${Math.round(1200 * e)} \xD7 ${Math.round(1200 * e / n5)}` })
          ] })
        ] }),
        t.text && /* @__PURE__ */ jsx("figcaption", { className: `ui-agc__caption`, children: t.text })
      ] }, t.id);
    }
    if (n4 === `table`) {
      let [n5, ...i2] = t.rows ?? [];
      let AComponent = (e) => {
        if (e.tone) {
          return /* @__PURE__ */ jsx("span", { className: `ui-agc__pill`, "data-tone": e.tone, "data-block": e.id, children: ZComponent(e) });
        }
        return /* @__PURE__ */ jsx("span", { className: `ui-agc__cell`, "data-block": e.id, children: ZComponent(e) });
      };
      return /* @__PURE__ */ jsx("div", { className: `ui-agc__table-card`, children: /* @__PURE__ */ jsxs("table", { className: `ui-agc__table`, children: [
        n5 && /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: n5.map((e) => /* @__PURE__ */ jsx("th", { children: AComponent(e) }, e.id)) }) }),
        /* @__PURE__ */ jsx("tbody", { children: i2.map((e, t2) => /* @__PURE__ */ jsx("tr", { children: e.map((e2) => /* @__PURE__ */ jsx("td", { children: AComponent(e2) }, e2.id)) }, e[0]?.id ?? t2)) }),
        t.addRow && /* @__PURE__ */ jsx("tfoot", { children: /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: n5?.length ?? 1, children: /* @__PURE__ */ jsxs("span", { className: `ui-agc__add`, "data-block": `${t.id}:add`, "data-hover": agents.some((e) => cursors[e.id]?.block === `${t.id}:add`) ? `` : void 0, "data-pressed": agents.some((e) => cursors[e.id]?.block === `${t.id}:add` && cursors[e.id]?.press) ? `` : void 0, children: [
          /* @__PURE__ */ jsx("svg", { width: `14`, height: `14`, viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, strokeWidth: `2`, strokeLinecap: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M12 5v14M5 12h14` }) }),
          /* @__PURE__ */ jsx("span", { "data-from": 0, children: `Add row` })
        ] }) }) }) })
      ] }) }, t.id);
    }
    if (n4 === `code`) {
      return /* @__PURE__ */ jsx("pre", { className: `ui-agc__code`, "data-block": t.id, children: /* @__PURE__ */ jsx("code", { children: ZComponent(t) }) }, t.id);
    }
    const Component = n4 === `title` ? `h2` : n4 === `heading` ? `h3` : n4 === `item` ? `li` : `p`;
    return /* @__PURE__ */ jsx(Component, { className: `ui-agc__block ui-agc__block--${n4}`, "data-block": t.id, children: ZComponent(t) }, t.id);
  };
  let Q = [];
  for (let e = 0; e < blocks2.length; e++) {
    if (blocks2[e].kind === `item`) {
      let n4 = [];
      while (e < blocks2.length && blocks2[e].kind === `item`) {
        n4.push(blocks2[e++]);
      }
      e--;
      Q.push(/* @__PURE__ */ jsx("ul", { className: `ui-agc__list`, children: n4.map(KeComponent) }, `l${n4[0].id}`));
    } else {
      Q.push(KeComponent(blocks2[e]));
    }
  }
  let Ae = agents.filter((e) => cursors[e.id]);
  let $ = agents.some((e) => e.cost !== void 0) ? agents.reduce((acc, agent) => acc + (agent.cost ?? 0), 0) : null;
  let je = new Set(comments.map((e) => e.id));
  let length = Ae.filter((e) => cursors[e.id]?.typing).length;
  return /* @__PURE__ */ jsxs("div", { className: [`ui-agc`, className].filter(Boolean).join(` `), "data-following": R ?? void 0, "data-fade": height ? `` : void 0, style: height ? {
    "--ui-agc-height": `${height}px`
  } : void 0, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-agent-cursors`, precedence: `default`, children: f }),
    tabs2 && tabs2.length > 0 && /* @__PURE__ */ jsx("div", { className: `ui-agc__tabs`, role: `tablist`, "aria-label": `Views`, children: tabs2.map((e) => /* @__PURE__ */ jsx("button", { type: `button`, role: `tab`, className: `ui-agc__tab`, "aria-selected": e.id === (tab ?? tabs2[0].id), onClick: () => onTabChange?.(e.id), children: e.label }, e.id)) }),
    /* @__PURE__ */ jsxs("div", { className: `ui-agc__stage`, ref: ERef, children: [
      /* @__PURE__ */ jsx("div", { className: `ui-agc__shade`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("span", {}) }),
      /* @__PURE__ */ jsxs("div", { className: `ui-agc__sheet`, ref: DRef, children: [
        /* @__PURE__ */ jsxs("header", { className: `ui-agc__bar`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-agc__doc`, "aria-hidden": `true`, children: /* @__PURE__ */ jsxs("svg", { width: `16`, height: `16`, viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.8`, strokeLinecap: `round`, strokeLinejoin: `round`, children: [
            /* @__PURE__ */ jsx("path", { d: `M14 2.5H7.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7z` }),
            /* @__PURE__ */ jsx("path", { d: `M14 2.5V7h4.5M9 12.5h6M9 16h4` })
          ] }) }),
          /* @__PURE__ */ jsx("span", { className: `ui-agc__title`, children: title }),
          /* @__PURE__ */ jsx("div", { className: `ui-agc__people`, role: `group`, "aria-label": `Agents in this document`, children: agents.map((e) => {
            let t = cursors[e.id];
            let n4 = R === e.id;
            return /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-agc__face`, "data-here": t ? `` : void 0, "data-typing": t?.typing ? `` : void 0, "aria-pressed": n4, "aria-label": `${n4 ? `Stop following` : `Follow`} ${e.name}${t?.doing ? ` \u2013 ${t.doing}` : t ? `` : ` (not in the document)`}`, style: {
              "--ui-agc-c": e.color,
              "--ui-agc-tint": e.tint
            }, onClick: () => ye(n4 ? null : e.id), children: [
              /* @__PURE__ */ jsx("span", { className: `ui-agc__face-mark`, children: XComponent(e) }),
              /* @__PURE__ */ jsxs("span", { className: `ui-agc__face-tip`, "aria-hidden": `true`, children: [
                /* @__PURE__ */ jsx("b", { children: e.name }),
                /* @__PURE__ */ jsx("span", { children: t?.doing ?? (t ? `In the document` : `Away`) })
              ] })
            ] }, e.id);
          }) }),
          /* @__PURE__ */ jsxs("span", { className: `ui-agc__sum`, children: [
            suggestions.length > 0 ? `${suggestions.length} suggestion${suggestions.length === 1 ? `` : `s`}` : length ? `${length} typing` : `${Ae.length} here`,
            $ !== null && /* @__PURE__ */ jsx("b", { className: `ui-agc__spent`, "data-zero": $ === 0 ? `` : void 0, children: formatCost($) })
          ] }),
          onAcceptAll && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-agc__all`, disabled: suggestions.length === 0, onClick: onAcceptAll, children: `Accept all` })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `ui-agc__paper`, "aria-hidden": `true` }),
        /* @__PURE__ */ jsx("div", { className: `ui-agc__marks`, "aria-hidden": `true`, children: agents.map((e) => (ne2[e.id] ?? []).map((t, n4) => /* @__PURE__ */ jsx("span", { className: `ui-agc__mark`, "data-dim": R && R !== e.id ? `` : void 0, style: {
          left: t.x - 1,
          top: t.y,
          width: t.w + 2,
          height: t.h,
          "--ui-agc-c": e.color
        } }, `${e.id}-${n4}`))) }),
        /* @__PURE__ */ jsx("div", { className: `ui-agc__text`, children: Q }, tab)
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-agc__notes`, children: comments.map((e) => {
        let t = J(e.agent);
        let n4 = A2[e.id];
        if (!n4) {
          return null;
        }
        let i2 = !!e.open || M2 === e.id;
        let a2 = Math.min(248, Math.max(160, se - 16));
        let o2 = i2 ? Math.max(8 - n4.x, Math.min(0, se - 8 - (n4.x + a2))) : 0;
        let s2 = de > 0 && n4.y + 190 > de;
        let c2 = () => window.clearTimeout(IRef.current);
        let onMouseLeave = () => {
          window.clearTimeout(IRef.current);
          IRef.current = window.setTimeout(() => setM((t2) => {
            if (t2 === e.id) {
              return null;
            }
            return t2;
          }), 160);
        };
        return /* @__PURE__ */ jsx("div", { className: `ui-agc__pin`, "data-comment": e.id, "data-open": i2 ? `` : void 0, "data-up": s2 ? `` : void 0, style: {
          left: n4.x,
          top: n4.y,
          "--ui-agc-c": t?.color,
          "--ui-agc-pin-h": `${ie2[e.id] ?? 120}px`,
          "--ui-agc-pin-w": `${a2}px`,
          "--ui-agc-pin-x": `${o2}px`
        }, onMouseEnter: () => {
          c2();
          setM(e.id);
        }, onMouseLeave, onFocus: () => {
          c2();
          setM(e.id);
        }, onBlur: (e2) => !e2.currentTarget.contains(e2.relatedTarget) && onMouseLeave(), children: /* @__PURE__ */ jsxs("div", { className: `ui-agc__pin-box`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-agc__pin-mark`, children: XComponent(t) }),
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-agc__pin-hit`, "aria-expanded": i2, "aria-label": `Comment from ${t?.name ?? `an agent`}: ${e.text}`, tabIndex: i2 ? -1 : 0 }),
          /* @__PURE__ */ jsxs("div", { className: `ui-agc__pin-body`, role: `group`, "aria-label": `Comment from ${t?.name ?? `an agent`}`, "aria-hidden": !i2, children: [
            /* @__PURE__ */ jsxs("div", { className: `ui-agc__note-head`, children: [
              /* @__PURE__ */ jsx("b", { children: t?.name }),
              /* @__PURE__ */ jsx("span", { children: `now` })
            ] }),
            /* @__PURE__ */ jsx("p", { className: `ui-agc__note-text`, "data-block": e.id, children: /* @__PURE__ */ jsx("span", { "data-from": 0, children: e.text || u }) }),
            (onReply || onResolveComment) && /* @__PURE__ */ jsxs("div", { className: `ui-agc__pin-actions`, children: [
              onReply ? /* @__PURE__ */ jsx("input", { className: `ui-agc__reply`, value: M2 === e.id ? P : ``, placeholder: `Reply`, "aria-label": `Reply to ${t?.name ?? `the agent`}`, tabIndex: i2 ? 0 : -1, onChange: (e2) => setP(e2.target.value), onKeyDown: (t2) => {
                if (t2.key === `Enter` && P.trim()) {
                  onReply(e, P.trim());
                  setP(``);
                }
                if (t2.key === `Escape`) {
                  setM(null);
                }
              } }) : /* @__PURE__ */ jsx("span", { className: `ui-agc__reply`, "aria-hidden": `true` }),
              onResolveComment && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-agc__resolve`, "aria-label": `Resolve`, title: `Resolve`, tabIndex: i2 ? 0 : -1, onClick: () => {
                setM(null);
                onResolveComment(e);
              }, children: /* @__PURE__ */ jsx("svg", { width: `14`, height: `14`, viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, strokeWidth: `2.6`, strokeLinecap: `round`, strokeLinejoin: `round`, children: /* @__PURE__ */ jsx("path", { d: `M5 12.5l4.5 4.5L19 7.5` }) }) })
            ] })
          ] })
        ] }) }, e.id);
      }) }),
      /* @__PURE__ */ jsx("div", { className: `ui-agc__cursors`, "aria-hidden": `true`, children: agents.map((e) => {
        let t = cursors[e.id];
        let n4 = t && O2[e.id] || CeRef.current[e.id];
        if (!n4) {
          return null;
        }
        let i2 = !t || !O2[e.id];
        let a2 = e.cost === void 0 ? [] : [formatCost(e.cost)];
        let o2 = Math.min(0, pe - 8 - (n4.x + 16 + (he[e.id] ?? 0)));
        let opacity = height ? Math.max(0, Math.min(1, (height * 0.97 - n4.y) / (height * 0.47))) : 1;
        return /* @__PURE__ */ jsx("div", { className: `ui-agc__cursor`, "data-agent": e.id, "data-gone": i2 ? `` : void 0, "data-arrive": !i2 && W.includes(e.id) ? `` : void 0, "data-typing": t?.typing ? `` : void 0, "data-free": n4.free ? `` : void 0, "data-in-note": t && je.has(t.block) ? `` : void 0, "data-press": t?.press ? `` : void 0, "data-drag": t?.point === `corner` && t.select ? `` : void 0, "data-dim": R && R !== e.id ? `` : void 0, style: {
          transform: `translate(${n4.x}px, ${n4.y}px)`,
          "--ui-agc-c": e.color,
          "--ui-agc-h": `${n4.h}px`,
          "--ui-agc-shift": `${o2}px`
        }, children: /* @__PURE__ */ jsxs("div", { className: `ui-agc__cursor-in`, style: opacity < 1 ? {
          opacity
        } : void 0, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-agc__caret` }),
          /* @__PURE__ */ jsx("svg", { className: `ui-agc__arrow`, viewBox: `-2.186 -0.256 18.514 22.277`, children: /* @__PURE__ */ jsx("path", { transform: `rotate(21.37)`, d: `M13.92 4.07c1.69.66 3.03 1.18 3.94 1.68.46.25.87.53 1.16.86.31.35.51.79.48 1.29-.03.51-.27.92-.62 1.23-.33.3-.77.53-1.25.74-.96.4-2.36.78-4.12 1.26-.56.15-.98.27-1.26.37-.26.1-.38.18-.47.27-.09.09-.17.21-.27.47-.1.28-.22.7-.37 1.26-.48 1.76-.86 3.16-1.26 4.12-.2.49-.44.93-.74 1.25-.32.35-.72.6-1.23.62-.51.03-.94-.17-1.29-.48-.33-.29-.61-.7-.86-1.16-.5-.91-1.02-2.25-1.68-3.94L1.66 7.76C.96 5.99.41 4.59.16 3.51-.09 2.44-.12 1.39.63.63 1.39-.12 2.44-.09 3.51.16c1.08.25 2.48.8 4.25 1.5l6.16 2.41Z` }) }),
          /* @__PURE__ */ jsxs("span", { className: `ui-agc__flag`, ref: (t2) => {
            if (t2) {
              LRef.current.set(e.id, t2);
            } else {
              LRef.current.delete(e.id);
            }
          }, children: [
            /* @__PURE__ */ jsxs("span", { className: `ui-agc__flag-row`, children: [
              /* @__PURE__ */ jsx("span", { className: `ui-agc__flag-name`, children: e.name }),
              a2.length > 0 && /* @__PURE__ */ jsx("span", { className: `ui-agc__flag-tags`, children: a2.map((e2, key) => /* @__PURE__ */ jsx("span", { className: `ui-agc__flag-tag`, children: e2 }, key)) })
            ] }),
            /* @__PURE__ */ jsx("span", { className: `ui-agc__flag-doing`, "data-on": t?.doing ? `` : void 0, children: /* @__PURE__ */ jsx("span", { children: t?.doing ?? `` }) })
          ] })
        ] }) }, e.id);
      }) }),
      z && q && /* @__PURE__ */ jsxs("div", { className: `ui-agc__pop`, role: `dialog`, "aria-label": `Suggestion from ${Y(q.agent)}`, style: {
        left: Math.max(0, Math.min(z.box.x, le - 260)),
        top: z.box.y + z.box.h + 6,
        "--ui-agc-c": De(q.agent)
      }, onMouseEnter: () => window.clearTimeout(VRef.current), onMouseLeave: K, onFocus: () => window.clearTimeout(VRef.current), onBlur: K, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-agc__pop-head`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-agc__pop-mark`, children: XComponent(J(q.agent)) }),
          /* @__PURE__ */ jsx("b", { children: Y(q.agent) }),
          /* @__PURE__ */ jsx("span", { children: q.remove && q.insert ? `suggests a rewrite` : q.remove ? `suggests removing` : `suggests adding` })
        ] }),
        q.note && /* @__PURE__ */ jsx("p", { className: `ui-agc__pop-note`, children: q.note }),
        /* @__PURE__ */ jsxs("div", { className: `ui-agc__pop-actions`, children: [
          onReject && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-agc__btn`, onClick: () => {
            setZ(null);
            onReject(q);
          }, children: `Reject` }),
          onAccept && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-agc__btn ui-agc__btn--primary`, onClick: () => {
            setZ(null);
            onAccept(q);
          }, children: `Accept` })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("span", { className: `ui-agc__live`, role: `status`, "aria-live": `polite`, children: we })
  ] });
}
var f = `.ui-agc{--ui-agc-card: #ffffff;--ui-agc-tray: #f0f0f0;--ui-agc-ink: #171717;--ui-agc-text: #3d3d3d;--ui-agc-muted: #8a8a8a;--ui-agc-line: #ececec;--ui-agc-grid: #f0f0f0;--ui-agc-stroke: #efefef;--ui-agc-gap: 18px;--ui-agc-chip: #f5f5f5;--ui-agc-shimmer: #f0f0f0;--ui-agc-shine: #fafafa;--ui-agc-code: rgba(0, 0, 0, 0.035);--ui-agc-ring: rgba(23, 23, 23, 0.22);--ui-agc-agent: #1f1f22;--ui-agc-flag: #141416;--ui-agc-flag-ink: #ffffff;--ui-agc-flag-soft: rgba(255, 255, 255, 0.14);--ui-agc-edge: linear-gradient(90deg, #ff4fa3, #8b6bff 55%, #3b8bff);--ui-agc-c: var(--ui-agc-agent);--ui-agc-glide: 560ms;--ui-agc-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;line-height: 20px;letter-spacing: -0.006em;color: var(--ui-agc-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-agc *, .ui-agc *::before, .ui-agc *::after{box-sizing: border-box}:where(.ui-agc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-agc button:focus-visible{outline: 2px solid var(--ui-agc-ring);outline-offset: 2px}.ui-agc svg{display: block;flex: none}.ui-agc__stage{position: relative}.ui-agc{container: agc / inline-size}.ui-agc__tabs{display: flex;gap: 6px;margin: 0 0 6px}.ui-agc__tab{height: 30px;padding: 0 12px;border-radius: 9px;background: rgba(0, 0, 0, 0.05);font-size: 13px;font-weight: 500;color: var(--ui-agc-muted);transition: background-color 160ms ease, color 160ms ease, box-shadow 160ms ease}.ui-agc__tab:hover{color: var(--ui-agc-ink)}.ui-agc__tab[aria-selected="true"]{background: var(--ui-agc-card);box-shadow: inset 0 0 0 1px var(--ui-agc-stroke), 0 1px 2px rgba(0, 0, 0, 0.05);color: var(--ui-agc-ink)}:where(.dark, [data-theme="dark"]) .ui-agc__tab{background: rgba(255, 255, 255, 0.06)}.ui-agc__text{animation: ui-agc-view 380ms var(--ui-agc-ease) both}@keyframes ui-agc-view{from{opacity: 0;filter: blur(2px);transform: translateY(4px)}}.ui-agc__table-card{overflow: hidden;border-radius: 12px;box-shadow: inset 0 0 0 1px var(--ui-agc-line), 0 1px 2px rgba(0, 0, 0, 0.04);transition: height 420ms var(--ui-agc-ease)}.ui-agc__table{width: 100%;border-collapse: collapse;table-layout: fixed;font-size: 13.5px;line-height: 20px}.ui-agc__table :is(th, td){height: 40px;padding: 0 12px;border-top: 1px solid var(--ui-agc-grid);border-left: 1px solid var(--ui-agc-grid);text-align: left;vertical-align: middle;white-space: nowrap;overflow: hidden;text-overflow: ellipsis}.ui-agc__table :is(th, td):first-child{border-left: 0}.ui-agc__table th:first-child{width: 38%}.ui-agc__table th{border-top: 0;font-size: 12.5px;font-weight: 500;color: var(--ui-agc-muted)}.ui-agc__table td{color: var(--ui-agc-ink)}.ui-agc__table tfoot td{height: 44px;padding: 0 6px}.ui-agc__add{display: inline-flex;align-items: center;gap: 8px;height: 30px;padding: 0 10px;border-radius: 8px;font-size: 13.5px;font-weight: 500;color: var(--ui-agc-muted);transition: background-color 140ms ease, color 140ms ease, transform 140ms ease}.ui-agc__add[data-hover]{background: rgba(0, 0, 0, 0.04);color: var(--ui-agc-ink)}.ui-agc__add[data-pressed]{background: rgba(0, 0, 0, 0.08);transform: scale(0.97)}:where(.dark, [data-theme="dark"]) .ui-agc__add[data-hover]{background: rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-agc__add[data-pressed]{background: rgba(255, 255, 255, 0.1)}.ui-agc__table tbody tr{animation: ui-agc-row 420ms var(--ui-agc-ease) both}@keyframes ui-agc-row{from{opacity: 0;transform: translateY(-6px)}}.ui-agc__pill{display: inline-flex;align-items: center;height: 22px;padding: 0 8px;border-radius: 999px;background: var(--ui-agc-pill-bg);font-size: 12px;font-weight: 500;color: var(--ui-agc-pill-fg)}.ui-agc__pill[data-tone="gray"]{--ui-agc-pill-bg: rgba(0, 0, 0, 0.05);--ui-agc-pill-fg: #6b6b6b}.ui-agc__pill[data-tone="blue"]{--ui-agc-pill-bg: #eaf1ff;--ui-agc-pill-fg: #2456d6}.ui-agc__pill[data-tone="green"]{--ui-agc-pill-bg: #e6f6ec;--ui-agc-pill-fg: #1a7f45}.ui-agc__pill[data-tone="amber"]{--ui-agc-pill-bg: #fff3e0;--ui-agc-pill-fg: #b85c00}:where(.dark, [data-theme="dark"]) .ui-agc__pill[data-tone="gray"]{--ui-agc-pill-bg: rgba(255, 255, 255, 0.08);--ui-agc-pill-fg: #a1a1a6}:where(.dark, [data-theme="dark"]) .ui-agc__pill[data-tone="blue"]{--ui-agc-pill-bg: #16243f;--ui-agc-pill-fg: #8ab4ff}:where(.dark, [data-theme="dark"]) .ui-agc__pill[data-tone="green"]{--ui-agc-pill-bg: #12301f;--ui-agc-pill-fg: #3dd68c}:where(.dark, [data-theme="dark"]) .ui-agc__pill[data-tone="amber"]{--ui-agc-pill-bg: #3a2410;--ui-agc-pill-fg: #ffa057}.ui-agc__sheet{position: relative;overflow: hidden;border-radius: 20px;background: var(--ui-agc-tray)}.ui-agc__paper{position: absolute;inset: 48px 4px 4px;z-index: 0;border-radius: 16px;background: var(--ui-agc-card);box-shadow: 0 0 0 1px var(--ui-agc-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-agc[data-fade] .ui-agc__sheet{height: var(--ui-agc-height)}.ui-agc__shade{position: absolute;inset: -40px;pointer-events: none}.ui-agc__shade > span{position: absolute;inset: 40px;border-radius: 20px;box-shadow: 0 0 0 1px var(--ui-agc-stroke), 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 10px rgba(0, 0, 0, 0.055)}.ui-agc[data-fade] .ui-agc__shade{bottom: auto;height: calc(var(--ui-agc-height) + 80px)}.ui-agc[data-fade] .ui-agc__sheet{-webkit-mask: linear-gradient(#000 0, #000 calc(var(--ui-agc-height) * 0.5), transparent calc(var(--ui-agc-height) * 0.97));mask: linear-gradient(#000 0, #000 calc(var(--ui-agc-height) * 0.5), transparent calc(var(--ui-agc-height) * 0.97))}.ui-agc[data-fade] .ui-agc__shade{-webkit-mask: linear-gradient(#000 0, #000 calc(40px + var(--ui-agc-height) * 0.5), transparent calc(40px + var(--ui-agc-height) * 0.97));mask: linear-gradient(#000 0, #000 calc(40px + var(--ui-agc-height) * 0.5), transparent calc(40px + var(--ui-agc-height) * 0.97))}.ui-agc__bar{position: relative;z-index: 3;display: flex;align-items: center;gap: 8px;min-width: 0;height: 48px;padding: 0 12px 0 16px}.ui-agc__doc{display: grid;flex: none;place-items: center;color: var(--ui-agc-muted)}.ui-agc__title{flex: 1;min-width: 0;overflow: hidden;font-size: 13.5px;font-weight: 500;color: var(--ui-agc-muted);white-space: nowrap;text-overflow: ellipsis}.ui-agc__sum{flex: none;font-size: 12.5px;color: var(--ui-agc-muted);font-variant-numeric: tabular-nums}.ui-agc__spent{margin-left: 8px;font-weight: 600;color: var(--ui-agc-ink);transition: opacity 200ms ease}.ui-agc__spent[data-zero]{opacity: 0.35}.ui-agc__all{flex: none;height: 28px;padding: 0 11px;border-radius: 9px;background: var(--ui-agc-ink);font-size: 12.5px;font-weight: 500;color: var(--ui-agc-card);transition: opacity 160ms ease}.ui-agc__all:hover:not(:disabled){opacity: 0.86}.ui-agc__all:disabled{opacity: 0.2;cursor: default}.ui-agc__people{display: flex;flex: none;align-items: center}.ui-agc__face:first-child{margin-left: 0}.ui-agc__face{position: relative;display: grid;place-items: center;width: 28px;height: 28px;margin-left: 4px;border-radius: 50%;background: var(--ui-agc-card);box-shadow: 0 0 0 2px var(--ui-agc-tray), inset 0 0 0 1.5px var(--ui-agc-line);transition: transform 220ms var(--ui-agc-ease), opacity 220ms ease, box-shadow 220ms ease}.ui-agc__face:not([data-here]){opacity: 0.4}.ui-agc__face[data-here]::before{content: "";position: absolute;inset: 0;border-radius: 50%;background: conic-gradient(from 0deg, transparent 0deg, transparent 60deg, var(--ui-agc-c) 360deg);-webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1.5px));mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1.5px));animation: ui-agc-spin 850ms linear infinite}.ui-agc__face:hover, .ui-agc__face[aria-pressed="true"]{z-index: 1;transform: translateY(-1px)}.ui-agc__face[aria-pressed="true"]{background: var(--ui-agc-tint, color-mix(in srgb, var(--ui-agc-c) 16%, var(--ui-agc-card)))}.ui-agc__face-mark, .ui-agc__note-mark{display: grid;place-items: center;width: 14px;height: 14px}.ui-agc__face-mark svg, .ui-agc__note-mark svg{width: 14px;height: 14px}.ui-agc__face-initial{font-size: 11px;font-weight: 600;line-height: 1;color: var(--ui-agc-c)}.ui-agc__face-tip{position: absolute;top: calc(100% + 8px);right: -6px;z-index: 4;padding: 5px 9px;border-radius: 8px;background: var(--ui-agc-ink);font-size: 12px;line-height: 16px;color: var(--ui-agc-card);white-space: nowrap;opacity: 0;transform: translateY(-2px);pointer-events: none;transition: opacity 140ms ease, transform 140ms ease}.ui-agc__face-tip{display: grid;gap: 1px;text-align: left}.ui-agc__face-tip b{font-weight: 600}.ui-agc__face-tip > span{opacity: 0.75}.ui-agc__face:hover .ui-agc__face-tip, .ui-agc__face:focus-visible .ui-agc__face-tip{opacity: 1;transform: none}.ui-agc__text{position: relative;z-index: 1;padding: 36px 48px 48px;font-size: 14px;line-height: 23px;color: var(--ui-agc-text)}.ui-agc__block{margin: 0}.ui-agc__text > * + *{margin-top: var(--ui-agc-gap)}.ui-agc__block--title{font-size: 22px;font-weight: 650;line-height: 28px;letter-spacing: -0.022em;color: var(--ui-agc-ink)}.ui-agc__text > .ui-agc__block--title + *{margin-top: 12px}.ui-agc__block--heading{font-size: 15.5px;font-weight: 600;line-height: 24px;letter-spacing: -0.012em;color: var(--ui-agc-ink)}.ui-agc__text > .ui-agc__block--heading:not(:first-child){margin-top: calc(var(--ui-agc-gap) + 10px)}.ui-agc__text > .ui-agc__block--heading + *{margin-top: 8px}.ui-agc__list{margin: 0;padding: 0 0 0 20px}.ui-agc__list .ui-agc__block + .ui-agc__block{margin-top: 4px}.ui-agc__block--item::marker{color: var(--ui-agc-muted)}.ui-agc__code{margin: 0;padding: 14px 16px;overflow: hidden;border-radius: 12px;background: var(--ui-agc-code);box-shadow: inset 0 0 0 1px var(--ui-agc-line);font-family: ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace;font-size: 12.5px;line-height: 20px;letter-spacing: 0;color: var(--ui-agc-ink);white-space: pre-wrap}.ui-agc__code code{font: inherit}.ui-agc__figure{margin: 0}.ui-agc__text::after{content: "";display: block;clear: both}.ui-agc__figure{max-width: 100%;transition: width 620ms var(--ui-agc-ease)}.ui-agc__figure[data-float="left"]{float: left;margin: var(--ui-agc-gap) 24px 8px 0}.ui-agc__figure[data-float="right"]{float: right;margin: var(--ui-agc-gap) 0 8px 24px}.ui-agc__text > .ui-agc__figure[data-float]{margin-top: var(--ui-agc-gap)}.ui-agc__text > :is(.ui-agc__block--heading, .ui-agc__code, .ui-agc__list){clear: both}.ui-agc__sheet{container-type: inline-size}@container (max-width: 480px){.ui-agc__figure[data-float]{float: none;margin: 0 0 12px}}.ui-agc__img{position: relative;display: grid;width: 100%;border-radius: 12px;background: var(--ui-agc-shimmer);transition: box-shadow 200ms ease}.ui-agc__img > img{width: 100%;height: 100%;border-radius: inherit;object-fit: cover;animation: ui-agc-fade 500ms ease both}.ui-agc__shimmer{display: block;width: 100%;height: 100%;border-radius: inherit;background: linear-gradient(100deg, var(--ui-agc-shimmer) 35%, var(--ui-agc-shine) 50%, var(--ui-agc-shimmer) 65%) 0 0 / 300% 100%;animation: ui-agc-shimmer 1600ms linear infinite}.ui-agc__img[data-held]{box-shadow: 0 0 0 2px var(--ui-agc-c)}.ui-agc__handle{position: absolute;width: 10px;height: 10px;border-radius: 3px;background: #ffffff;box-shadow: 0 0 0 1.5px var(--ui-agc-c), 0 1px 3px rgba(0, 0, 0, 0.18);animation: ui-agc-fade 160ms ease both}.ui-agc__handle[data-at="tl"]{top: -5px;left: -5px}.ui-agc__handle[data-at="tr"]{top: -5px;right: -5px}.ui-agc__handle[data-at="bl"]{bottom: -5px;left: -5px}.ui-agc__handle[data-at="br"]{right: -5px;bottom: -5px}.ui-agc__size{position: absolute;bottom: 10px;left: 50%;translate: -50% 0;padding: 0 7px;border-radius: 6px;background: var(--ui-agc-c);font-size: 11.5px;font-weight: 600;line-height: 20px;color: #ffffff;white-space: nowrap;font-variant-numeric: tabular-nums;animation: ui-agc-fade 160ms ease both}.ui-agc__caption{margin-top: 8px;font-size: 12.5px;line-height: 18px;color: var(--ui-agc-muted)}.ui-agc__ins, .ui-agc__del{border-radius: 3px;outline: none;cursor: pointer;transition: background-color 160ms ease;-webkit-box-decoration-break: clone;box-decoration-break: clone}.ui-agc__ins{padding: 1px 0;background: color-mix(in srgb, var(--ui-agc-c) 12%, transparent);color: var(--ui-agc-ink);text-decoration: underline 1.5px var(--ui-agc-c);text-underline-offset: 4px;animation: ui-agc-in 300ms ease both}.ui-agc__del{color: var(--ui-agc-muted);text-decoration: line-through 1.5px var(--ui-agc-c)}.ui-agc__ins:hover, .ui-agc__ins[data-open], .ui-agc__ins:focus-visible{background: color-mix(in srgb, var(--ui-agc-c) 22%, transparent)}.ui-agc__del:hover, .ui-agc__del[data-open], .ui-agc__del:focus-visible{background: color-mix(in srgb, var(--ui-agc-c) 10%, transparent)}.ui-agc__marks{position: absolute;inset: 0;z-index: 0;pointer-events: none}.ui-agc__mark{position: absolute;border-radius: 3px;background: color-mix(in srgb, var(--ui-agc-c) 20%, transparent);animation: ui-agc-fade 220ms ease both;transition: opacity 220ms ease}.ui-agc__mark[data-dim]{opacity: 0.25}.ui-agc__notes{position: absolute;inset: 0;z-index: 4;pointer-events: none}.ui-agc__pin{position: absolute;width: 0;height: 0;pointer-events: auto;animation: ui-agc-fade 260ms ease both}.ui-agc__pin{--ui-agc-pin: 30px}.ui-agc__pin-box{position: absolute;top: calc(var(--ui-agc-pin) * -1);left: var(--ui-agc-pin-x, 0px);width: var(--ui-agc-pin);height: var(--ui-agc-pin);overflow: hidden;border-radius: 15px 15px 15px 3px;background: var(--ui-agc-flag);color: var(--ui-agc-flag-ink);box-shadow: 0 0 0 1px var(--ui-agc-flag-soft), 0 8px 20px -8px rgba(0, 0, 0, 0.45);transition: left 340ms var(--ui-agc-ease), width 340ms var(--ui-agc-ease), height 340ms var(--ui-agc-ease), border-radius 340ms var(--ui-agc-ease), box-shadow 340ms ease}.ui-agc__pin[data-up] .ui-agc__pin-box{top: auto;bottom: 0}.ui-agc__pin[data-open]{z-index: 1}.ui-agc__pin[data-open] .ui-agc__pin-box{width: var(--ui-agc-pin-w, 248px);height: var(--ui-agc-pin-h);border-radius: 14px;box-shadow: 0 0 0 1px var(--ui-agc-flag-soft), 0 16px 32px -14px rgba(0, 0, 0, 0.4)}.ui-agc__pin-mark{--ui-agc-ink: var(--ui-agc-flag-ink)}.ui-agc__pin-mark{position: absolute;z-index: 1;top: 7px;left: 7px;display: grid;place-items: center;width: 16px;height: 16px;transition: top 340ms var(--ui-agc-ease), left 340ms var(--ui-agc-ease), width 340ms var(--ui-agc-ease), height 340ms var(--ui-agc-ease);pointer-events: none}.ui-agc__pin-mark svg{width: 100%;height: 100%}.ui-agc__pin[data-open] .ui-agc__pin-mark{top: 11px;left: 12px;width: 14px;height: 14px}.ui-agc__pin-hit{position: absolute;inset: 0;z-index: 2;border-radius: inherit}.ui-agc__pin[data-open] .ui-agc__pin-hit{pointer-events: none}.ui-agc__pin-body{position: absolute;top: 0;left: 0;display: grid;gap: 4px;width: var(--ui-agc-pin-w, 248px);padding: 10px 10px 10px 12px;opacity: 0;transition: opacity 120ms ease}.ui-agc__pin[data-up] .ui-agc__pin-body{top: auto;bottom: 0}.ui-agc__pin[data-open] .ui-agc__pin-body{opacity: 1;transition: opacity 200ms ease 140ms}.ui-agc__pin-body .ui-agc__note-head{padding-left: 22px;color: color-mix(in srgb, var(--ui-agc-flag-ink) 50%, transparent)}.ui-agc__pin-body .ui-agc__note-head b{color: var(--ui-agc-flag-ink)}.ui-agc__pin-body .ui-agc__note-text{color: color-mix(in srgb, var(--ui-agc-flag-ink) 86%, transparent)}.ui-agc__note-head{display: flex;align-items: center;gap: 6px;font-size: 12px;line-height: 16px;color: var(--ui-agc-muted)}.ui-agc__note-head b{font-weight: 600;color: var(--ui-agc-ink)}.ui-agc__note-head > span:last-child{margin-left: auto}.ui-agc__note-text{margin: 0;font-size: 13px;line-height: 19px;color: var(--ui-agc-text)}.ui-agc__pin-actions{display: flex;gap: 6px;margin-top: 6px}.ui-agc__reply{flex: 1;min-width: 0;height: 30px;padding: 0 10px;border: 0;border-radius: 9px;background: var(--ui-agc-flag-soft);box-shadow: inset 0 0 0 1px var(--ui-agc-flag-soft);font: inherit;font-size: 13px;color: var(--ui-agc-flag-ink);outline: none}.ui-agc__reply::placeholder{color: color-mix(in srgb, var(--ui-agc-flag-ink) 45%, transparent)}.ui-agc__reply:focus-visible{box-shadow: 0 0 0 1px var(--ui-agc-ring), 0 0 0 3px color-mix(in srgb, var(--ui-agc-ring) 40%, transparent)}.ui-agc__resolve{display: grid;flex: none;place-items: center;width: 30px;height: 30px;border-radius: 9px;background: var(--ui-agc-flag-ink);color: var(--ui-agc-flag);transition: opacity 160ms ease}.ui-agc__resolve:hover{opacity: 0.86}.ui-agc__cursors{position: absolute;inset: 0;z-index: 3;pointer-events: none}.ui-agc__cursor-in{transition: opacity 260ms ease}.ui-agc__cursor{position: absolute;top: 0;left: 0;transition: transform var(--ui-agc-glide) var(--ui-agc-ease), opacity 260ms ease;will-change: transform}.ui-agc__cursor[data-typing]{transition: transform 110ms linear, opacity 260ms ease}.ui-agc__cursor[data-drag]{transition: opacity 260ms ease}.ui-agc__cursor[data-arrive]{transition: none;opacity: 0}.ui-agc__cursor:not([data-arrive]):not([data-gone]){animation: ui-agc-pop 300ms var(--ui-agc-ease) both}.ui-agc__cursor[data-gone]{opacity: 0}.ui-agc__cursor[data-dim]{opacity: 0.22}.ui-agc__cursor[data-gone][data-dim]{opacity: 0}.ui-agc__caret{position: absolute;top: 0;left: -1px;width: 2px;height: var(--ui-agc-h, 18px);border-radius: 1px;background: var(--ui-agc-c);animation: ui-agc-blink 1100ms steps(1, end) infinite}.ui-agc__cursor[data-typing] .ui-agc__caret{animation: none}.ui-agc__cursor[data-free] .ui-agc__caret{display: none}.ui-agc__arrow{position: absolute;z-index: 1;top: calc(var(--ui-agc-h, 18px) - 6px);left: 0;width: 19px;height: 23px;overflow: visible;filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.22))}.ui-agc__cursor[data-free] .ui-agc__arrow{top: -0.6px;left: -2.3px}.ui-agc__arrow{transform-origin: 2px 1px;transition: transform 140ms ease}.ui-agc__cursor[data-press] .ui-agc__arrow{transform: scale(0.82)}.ui-agc__arrow path{fill: var(--ui-agc-c);stroke: #ffffff;stroke-width: 1.4;paint-order: stroke}.ui-agc__flag{position: absolute;top: calc(var(--ui-agc-h, 18px) + 15px);left: calc(16px + var(--ui-agc-shift, 0px));display: grid;width: max-content;padding: 6px 10px 6px;border-bottom: 1px solid transparent;border-radius: 10px;background: linear-gradient(var(--ui-agc-flag), var(--ui-agc-flag)) padding-box, var(--ui-agc-edge) border-box;box-shadow: 0 8px 18px -8px rgba(255, 79, 163, 0.5), 6px 8px 18px -8px rgba(59, 139, 255, 0.5), 0 2px 6px -2px rgba(0, 0, 0, 0.3);font-size: 12px;font-weight: 600;line-height: 16px;color: var(--ui-agc-flag-ink);white-space: nowrap}.ui-agc__cursor[data-in-note] .ui-agc__flag{opacity: 0}.ui-agc__cursor[data-free] .ui-agc__flag{top: 21px;left: calc(14px + var(--ui-agc-shift, 0px))}.ui-agc__flag-row{display: flex;align-items: center;gap: 12px}.ui-agc__flag-tags{display: flex;gap: 4px;margin-left: auto}.ui-agc__flag-tag{padding: 0 5px;border-radius: 5px;background: var(--ui-agc-flag-soft);font-size: 10.5px;font-weight: 600;line-height: 16px;font-variant-numeric: tabular-nums}.ui-agc__flag-doing{display: block;max-height: 0;overflow: hidden;opacity: 0;transition: max-height 320ms var(--ui-agc-ease), opacity 200ms ease, margin-top 320ms var(--ui-agc-ease)}.ui-agc__flag-doing > span{display: block;width: max-content;font-size: 11.5px;font-weight: 500;white-space: nowrap}.ui-agc__flag-doing[data-on]{max-height: 18px;margin-top: 1px;opacity: 0.9}.ui-agc__cursor[data-dim] .ui-agc__flag-doing{max-height: 0;opacity: 0}.ui-agc__pop{position: absolute;z-index: 5;display: grid;gap: 6px;width: 260px;padding: 10px;border-radius: 14px;background: var(--ui-agc-card);box-shadow: 0 0 0 1px var(--ui-agc-line), 0 16px 32px -12px rgba(0, 0, 0, 0.22);animation: ui-agc-rise 180ms var(--ui-agc-ease) both}.ui-agc__pop-head{display: flex;align-items: center;gap: 6px;font-size: 12.5px;line-height: 18px;color: var(--ui-agc-muted)}.ui-agc__pop-head b{font-weight: 600;color: var(--ui-agc-ink)}.ui-agc__pop-mark{display: grid;flex: none;place-items: center;width: 14px;height: 14px}.ui-agc__pop-mark svg{width: 100%;height: 100%}.ui-agc__pop-note{margin: 0;font-size: 12.5px;line-height: 18px;color: var(--ui-agc-text)}.ui-agc__pop-actions{display: flex;justify-content: flex-end;gap: 6px;margin-top: 2px}.ui-agc__btn{display: inline-flex;align-items: center;height: 30px;padding: 0 12px;border-radius: 9px;background: var(--ui-agc-card);box-shadow: 0 0 0 1px var(--ui-agc-line), 0 1px 2px rgba(0, 0, 0, 0.04);font-size: 13px;font-weight: 500;color: var(--ui-agc-ink);transition: background-color 160ms ease, opacity 160ms ease}.ui-agc__btn:hover{background: var(--ui-agc-chip)}.ui-agc__btn--primary{background: var(--ui-agc-ink);box-shadow: none;color: var(--ui-agc-card)}.ui-agc__btn--primary:hover{background: var(--ui-agc-ink);opacity: 0.86}.ui-agc__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap}@keyframes ui-agc-blink{0%, 55%{opacity: 1}56%, 100%{opacity: 0}}@keyframes ui-agc-pop{from{opacity: 0;scale: 0.85}}@keyframes ui-agc-fade{from{opacity: 0}}@keyframes ui-agc-in{from{background-color: transparent}}@keyframes ui-agc-rise{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}@keyframes ui-agc-spin{to{transform: rotate(360deg)}}@keyframes ui-agc-shimmer{from{background-position: 100% 0}to{background-position: 0 0}}@media (max-width: 520px){.ui-agc__text{padding: 26px 22px 36px;font-size: 14px;line-height: 23px}.ui-agc__block--title{font-size: 20px;line-height: 26px}.ui-agc__sum{display: none}}@container agc (max-width: 480px){.ui-agc__bar{gap: 6px;padding: 0 8px 0 12px}.ui-agc__title{display: none}.ui-agc__doc{margin-right: auto}.ui-agc__face{width: 26px;height: 26px;margin-left: 2px}.ui-agc__all{padding: 0 9px;font-size: 12px}.ui-agc__text{padding: 24px 20px 32px}.ui-agc__flag{padding: 4px 8px 4px;border-radius: 8px;font-size: 11px;line-height: 14px}.ui-agc__flag-tag{padding: 0 4px;font-size: 10px;line-height: 14px}.ui-agc__flag-doing > span{font-size: 10.5px}.ui-agc__flag-row{gap: 8px}.ui-agc__table{font-size: 11.5px;line-height: 16px}.ui-agc__table :is(th, td){height: auto;padding: 8px 5px;white-space: normal;text-overflow: clip}.ui-agc__table :is(th, td):first-child{padding-left: 9px}.ui-agc__table th{font-size: 11px}.ui-agc__table th:first-child{width: 30%}.ui-agc__pill{display: inline-block;height: auto;min-height: 18px;padding: 1px 6px;font-size: 10.5px;line-height: 16px;white-space: normal}}@container agc (max-width: 340px){.ui-agc__text{padding-right: 12px;padding-left: 12px}.ui-agc__table{font-size: 11px}.ui-agc__table th:first-child{width: 28%}}@media (pointer: coarse){.ui-agc__face{width: 32px;height: 32px}.ui-agc__btn{height: 36px;padding: 0 14px}}@media (prefers-reduced-motion: reduce){.ui-agc *, .ui-agc *::before, .ui-agc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-agc{--ui-agc-card: #1f1f22;--ui-agc-tray: #161618;--ui-agc-ink: #ededed;--ui-agc-text: #c4c4c8;--ui-agc-muted: #7c7c82;--ui-agc-line: #2e2e33;--ui-agc-grid: #29292d;--ui-agc-stroke: #2c2c31;--ui-agc-chip: #2a2a2e;--ui-agc-shimmer: #29292d;--ui-agc-shine: #36363b;--ui-agc-code: rgba(255, 255, 255, 0.04);--ui-agc-ring: rgba(237, 237, 237, 0.3);--ui-agc-agent: #e4e4e7;--ui-agc-flag: #f4f4f5;--ui-agc-flag-ink: #141416;--ui-agc-flag-soft: rgba(0, 0, 0, 0.08)}:where(.dark, [data-theme="dark"]) .ui-agc__arrow path{stroke: #1f1f22}:where(.dark, [data-theme="dark"]) .ui-agc__handle{background: #1f1f22}`;
var P1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 1200 1200`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { fill: `#D97757`, d: `M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z` }) });
var M1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `currentColor`, "aria-hidden": `true`, style: {
  color: `var(--ui-agc-ink, #000)`
}, children: /* @__PURE__ */ jsx("path", { d: `M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z` }) });
var H1Component = () => {
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
var G1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `-2 -2 29 29`, "aria-hidden": `true`, children: [[[0, 4], `#FFD800`], [[0, 1, 3, 4], `#FFAF00`], [[0, 1, 2, 3, 4], `#FF8205`], [[0, 2, 4], `#FA500F`], [[0, 4], `#E10500`]].flatMap(([e, fill], n4) => e.map((e2) => /* @__PURE__ */ jsx("rect", { x: e2 * 5, y: n4 * 5, width: `5`, height: `5`, fill }, `${e2}-${n4}`))) });
var _ = [{
  id: `research`,
  name: `Researcher`,
  avatar: /* @__PURE__ */ jsx(P1Component, {})
}, {
  id: `designer`,
  name: `Designer`,
  avatar: /* @__PURE__ */ jsx(H1Component, {})
}, {
  id: `coder`,
  name: `Coder`,
  avatar: /* @__PURE__ */ jsx(G1Component, {})
}, {
  id: `writer`,
  name: `Writer`,
  avatar: /* @__PURE__ */ jsx(M1Component, {})
}];
var blocks_1 = [{
  id: `title`,
  kind: `title`,
  text: `Pulse 2.0 \u2013 launch brief`
}, {
  id: `why`,
  text: `Teams lose about 40% of their week to status updates. Pulse turns that work into a short daily brief, so nobody has to write one.`
}, {
  id: `hero`,
  kind: `image`,
  loading: true,
  width: 0.5,
  float: `left`,
  alt: `Hero image, still rendering`
}, {
  id: `beside`,
  text: `The hero is the brief itself: one calm screen a team lead reads on Monday morning. Short, current and written from the work, so the week starts without a status meeting.`
}, {
  id: `h-roll`,
  kind: `heading`,
  text: `Rollout`
}, {
  id: `code`,
  kind: `code`,
  text: `const rollout = {
  waitlist: "Nov 3",
  everyone: "second week of November",
};`
}, {
  id: `ship`,
  text: `Launch week: one short post, a demo video and an email to the waitlist.`
}, {
  id: `h-what`,
  kind: `heading`,
  text: `What ships`
}, {
  id: `i1`,
  kind: `item`,
  text: `Daily briefs for every project, written from the work itself`
}, {
  id: `i2`,
  kind: `item`,
  text: `Nudges when a task has been quiet for too long`
}];
var y = {
  research: 0.011,
  designer: 0.016,
  coder: 8e-3,
  writer: 6e-3,
  planner: 0.012,
  analyst: 9e-3,
  ops: 7e-3,
  reviewer: 5e-3
};
var start_1 = {
  blocks: blocks_1,
  suggestions: [],
  comments: [{
    id: `n0`,
    agent: `coder`,
    block: `code`,
    x: 0.025,
    y: 12,
    text: `Should waitlist and everyone share one date format? I'd use "Nov 3" everywhere.`
  }],
  cursors: {}
};
var x = (e, t) => blocks_1.find((t2) => t2.id === e).text.indexOf(t);
var S = (e, t) => (n4) => ({
  ...n4,
  cursors: {
    ...n4.cursors,
    [e]: t
  }
});
var ee = (e, t) => (n4) => ({
  ...n4,
  blocks: n4.blocks.map((n5) => {
    if (n5.id === e) {
      return {
        ...n5,
        ...t
      };
    }
    return n5;
  })
});
var C = (e, t, n4, r2, i2, a2) => [[e, (e2) => ({
  ...e2,
  suggestions: [...e2.suggestions, {
    ...n4,
    agent: t,
    insert: ``
  }],
  cursors: {
    ...e2.cursors,
    [t]: {
      block: n4.block,
      at: 0,
      in: n4.id,
      doing: i2,
      typing: true
    }
  }
})], ...[...r2].map((o2, s2) => [e + 260 + s2 * a2, (e2) => {
  if (e2.suggestions.some((e3) => e3.id === n4.id)) {
    return {
      ...e2,
      suggestions: e2.suggestions.map((e3) => {
        if (e3.id === n4.id) {
          return {
            ...e3,
            insert: r2.slice(0, s2 + 1)
          };
        }
        return e3;
      }),
      cursors: {
        ...e2.cursors,
        [t]: {
          block: n4.block,
          at: s2 + 1,
          in: n4.id,
          doing: i2,
          typing: true
        }
      }
    };
  }
  return e2;
}])];
var w = (e, t, n4, r2, i2, a2, o2) => [[e, (e2) => ({
  ...e2,
  comments: [...e2.comments, {
    id: n4,
    agent: t,
    ...r2,
    text: ``,
    open: true
  }],
  cursors: {
    ...e2.cursors,
    [t]: {
      block: n4,
      at: 0,
      doing: a2,
      typing: true
    }
  }
})], ...[...i2].map((r3, s2) => [e + 360 + s2 * o2, (e2) => ({
  ...e2,
  comments: e2.comments.map((e3) => {
    if (e3.id === n4) {
      return {
        ...e3,
        text: i2.slice(0, s2 + 1)
      };
    }
    return e3;
  }),
  cursors: {
    ...e2.cursors,
    [t]: {
      block: n4,
      at: s2 + 1,
      doing: a2,
      typing: true
    }
  }
})])];
var T = `second week of November`;
var E = `Q3 survey of 1,240 teams: 38%, not 40%.`;
var D = [[400, S(`research`, {
  block: `why`,
  at: x(`why`, `about 40%`),
  doing: `Checking the numbers`
})], [650, S(`designer`, {
  block: `hero`,
  doing: `Waiting for the render`
})], [900, S(`coder`, {
  block: `code`,
  at: x(`code`, T),
  doing: `Reading the config`
})], [1150, S(`writer`, {
  block: `title`,
  at: x(`title`, `brief`),
  doing: `Reading the brief`
})], [1600, S(`research`, {
  block: `why`,
  at: x(`why`, `about 40%`),
  select: 9,
  doing: `Checking the numbers`
})], [2e3, S(`coder`, {
  block: `code`,
  at: x(`code`, T),
  select: 23,
  doing: `Fixing the date`
})], [2700, S(`designer`, {
  block: `hero`,
  point: `corner`,
  doing: `Resizing the hero`
})], [3200, S(`designer`, {
  block: `hero`,
  point: `corner`,
  select: 1,
  doing: `Resizing the hero`
})], [3550, ee(`hero`, {
  width: 0.36
})], [4300, S(`designer`, {
  block: `hero`,
  doing: `Looks right`
})], ...C(2600, `research`, {
  id: `r1`,
  block: `why`,
  at: x(`why`, `about 40%`),
  remove: 9,
  note: `Q3 survey of 1,240 teams`
}, `38%`, `Fixing the number`, 170), ...C(3300, `coder`, {
  id: `c1`,
  block: `code`,
  at: x(`code`, T),
  remove: 23,
  note: `Matches the launch calendar`
}, `Nov 10`, `Fixing the date`, 120), [2400, S(`writer`, {
  block: `title`,
  at: x(`title`, `brief`),
  select: 5,
  doing: `Finding a sharper title`
})], ...C(4200, `writer`, {
  id: `w1`,
  block: `title`,
  at: x(`title`, `brief`),
  remove: 5,
  note: `It's a plan with dates now, not a brief`
}, `plan`, `Renaming`, 120), ...w(5400, `research`, `n1`, {
  block: `why`,
  x: 0.025,
  y: 12
}, E, `Adding the source`, 36), [8064, (e) => ({
  ...e,
  comments: e.comments.map((e2) => {
    if (e2.id === `n1`) {
      return {
        ...e2,
        open: false
      };
    }
    return e2;
  })
})], [5600, S(`designer`, null)], [6300, S(`coder`, {
  block: `code`,
  at: x(`code`, `waitlist`),
  doing: `Checking the rest`
})], [8300, S(`research`, {
  block: `why`,
  at: x(`why`, `daily brief`),
  doing: `Done`
})], [8600, S(`coder`, null)], [9600, S(`research`, null)], [5150, S(`writer`, null)]];
var O = 7600;
var te = 12800;
var ne = 1600;
var k = [{
  id: `planner`,
  name: `Planner`,
  avatar: /* @__PURE__ */ jsx(H1Component, {})
}, {
  id: `analyst`,
  name: `Analyst`,
  avatar: /* @__PURE__ */ jsx(P1Component, {})
}, {
  id: `ops`,
  name: `Ops`,
  avatar: /* @__PURE__ */ jsx(G1Component, {})
}, {
  id: `reviewer`,
  name: `Reviewer`,
  avatar: /* @__PURE__ */ jsx(M1Component, {})
}];
var A = (e, t) => t.map((text, n4) => {
  if (typeof text == `string`) {
    return {
      id: `t-${e}-${n4}`,
      text
    };
  }
  return {
    id: `t-${e}-${n4}`,
    text: text[0],
    tone: text[1]
  };
});
var blocks = [{
  id: `t-title`,
  kind: `title`,
  text: `Pulse 2.0 \u2013 launch tasks`
}, {
  id: `tasks`,
  kind: `table`,
  addRow: true,
  rows: [A(0, [`Task`, `Owner`, `Due`, `Status`]), A(1, [`Write the launch post`, `Writer`, `Nov 3`, [`Doing`, `blue`]]), A(2, [`Record the demo video`, `Designer`, `Nov 5`, [`To do`, `gray`]]), A(3, [`Email the waitlist`, `Ops`, `Nov 12`, [`To do`, `gray`]]), A(4, [`Live Q&A`, `\u2014`, `Nov 14`, [`Idea`, `amber`]])]
}];
var ie = (e, t) => (n4) => ({
  ...n4,
  blocks: n4.blocks.map((n5) => {
    if (n5.id === `tasks`) {
      return {
        ...n5,
        rows: [...n5.rows ?? [], t.map((tone, n6) => ({
          id: `t-${e}-${n6}`,
          text: ``,
          tone
        }))]
      };
    }
    return n5;
  })
});
var ae = (block, text) => (n4) => ({
  ...n4,
  blocks: n4.blocks.map((n5) => {
    if (n5.rows) {
      return {
        ...n5,
        rows: n5.rows.map((n6) => n6.map((n7) => {
          if (n7.id === block) {
            return {
              ...n7,
              text
            };
          }
          return n7;
        }))
      };
    }
    return n5;
  })
});
var j = (e, t, n4, r2, i2) => {
  let a2 = (e2) => S(t, {
    block: `tasks:add`,
    at: 0,
    doing: `Adding a task`,
    press: e2 || void 0
  });
  let o2 = [[e, a2(false)], [e + 650, a2(true)], [e + 800, (e2) => ie(n4, [void 0, void 0, void 0, `gray`])(a2(false)(e2))]];
  let s2 = e + 1300;
  r2.forEach((e2, r3) => {
    let block = `t-${n4}-${r3}`;
    o2.push([s2, S(t, {
      block,
      at: 0,
      doing: `Adding a task`,
      typing: true
    })]);
    [...e2].forEach((n5, r4) => o2.push([s2 + 120 + r4 * i2, (n6) => ({
      ...ae(block, e2.slice(0, r4 + 1))(n6),
      cursors: {
        ...n6.cursors,
        [t]: {
          block,
          at: r4 + 1,
          doing: `Adding a task`,
          typing: true
        }
      }
    })]));
    s2 += 120 + e2.length * i2 + 260;
  });
  o2.push([s2, S(t, {
    block: `t-${n4}-0`,
    at: 0,
    doing: `Done`
  })]);
  return o2;
};
var start = {
  blocks,
  suggestions: [],
  comments: [],
  cursors: {}
};
var M = [[400, S(`planner`, {
  block: `t-3-2`,
  at: 0,
  doing: `Checking the dates`
})], [650, S(`analyst`, {
  block: `t-4-1`,
  at: 0,
  doing: `Finding an owner`
})], [900, S(`ops`, {
  block: `t-2-3`,
  at: 0,
  doing: `Updating the status`
})], [1150, S(`reviewer`, {
  block: `t-1-0`,
  at: 6,
  doing: `Reading the tasks`
})], [1600, S(`planner`, {
  block: `t-3-2`,
  at: 0,
  select: 6,
  doing: `Fixing the date`
})], [1900, S(`analyst`, {
  block: `t-4-1`,
  at: 0,
  select: 1,
  doing: `Finding an owner`
})], [2200, S(`ops`, {
  block: `t-2-3`,
  at: 0,
  select: 5,
  doing: `Updating the status`
})], ...C(2500, `planner`, {
  id: `p1`,
  block: `t-3-2`,
  at: 0,
  remove: 6,
  note: `Matches the rollout config`
}, `Nov 10`, `Fixing the date`, 120), ...C(3e3, `analyst`, {
  id: `a1`,
  block: `t-4-1`,
  at: 0,
  remove: 1,
  note: `Maya ran the last two`
}, `Maya`, `Assigning`, 110), ...C(3500, `ops`, {
  id: `o1`,
  block: `t-2-3`,
  at: 0,
  remove: 5,
  note: `The shoot is booked for Tuesday`
}, `Doing`, `Updating the status`, 110), ...w(3600, `reviewer`, `q1`, {
  block: `t-1-0`,
  at: 6
}, `Draft is in \u2013 ready for review today.`, `Leaving a note`, 38), [6304, (e) => ({
  ...e,
  comments: e.comments.map((e2) => {
    if (e2.id === `q1`) {
      return {
        ...e2,
        open: false
      };
    }
    return e2;
  })
})], ...j(4900, `analyst`, 5, [`Press kit`, `Designer`, `Nov 8`, `To do`], 55), [6300, S(`planner`, {
  block: `t-4-2`,
  at: 0,
  doing: `Checking the Q&A date`
})], ...j(7200, `planner`, 6, [`Partner email`, `Ops`, `Nov 11`, `To do`], 50), [7e3, S(`ops`, null)], [6200, S(`reviewer`, {
  block: `t-2-0`,
  at: 7,
  doing: `Reading on`
})], [9e3, S(`reviewer`, null)], [10200, S(`analyst`, null)], [12200, S(`planner`, null)]];
var N = {
  doc: {
    agents: _,
    start: start_1,
    script: D,
    accept: `r1`
  },
  table: {
    agents: k,
    start,
    script: M,
    accept: `p1`
  }
};
var tabs = [{
  id: `doc`,
  label: `Doc`
}, {
  id: `table`,
  label: `Table`
}];
function FComponent() {
  let [e, setE] = n3.useState(`doc`);
  let a2 = N[e];
  let [o2, setO] = n3.useState(start_1);
  let [c2, setC] = n3.useState(0);
  let uRef = n3.useRef(false);
  let [f2, setF] = n3.useState({});
  let mRef = n3.useRef(o2.cursors);
  mRef.current = o2.cursors;
  n3.useEffect(() => {
    let e2 = window.setInterval(() => {
      setF((e3) => {
        let t = {
          ...e3
        };
        for (let e4 of [..._, ...k]) {
          let n4 = mRef.current[e4.id];
          if (!n4) {
            continue;
          }
          let r2 = t[e4.id] ?? {
            cost: 0.04 + Math.random() * 0.1
          };
          t[e4.id] = {
            cost: r2.cost + y[e4.id] * (n4.typing ? 1.8 : 1)
          };
        }
        return t;
      });
    }, 500);
    return () => window.clearInterval(e2);
  }, []);
  n3.useEffect(() => {
    let {
      script,
      accept,
      start: start2
    } = N[e];
    let a3 = script.map(([e2, t]) => window.setTimeout(() => setO((e3) => t(e3)), e2));
    a3.push(window.setTimeout(() => {
      if (!uRef.current) {
        setO((e2) => {
          if (e2.suggestions.some((e3) => e3.id === accept)) {
            return {
              ...e2,
              ...i(e2.blocks, e2.suggestions, accept)
            };
          }
          return e2;
        });
      }
    }, O), window.setTimeout(() => {
      if (!uRef.current) {
        setO((e2) => ({
          ...e2,
          cursors: {}
        }));
        a3.push(window.setTimeout(() => {
          setO(start2);
          setF({});
          setC((e2) => e2 + 1);
        }, ne));
      }
    }, te));
    return () => a3.forEach((e2) => window.clearTimeout(e2));
  }, [c2, e]);
  let onTabChange = (n4) => {
    if (n4 !== e && n4 in N) {
      uRef.current = false;
      setO(N[n4].start);
      setF({});
      setE(n4);
    }
  };
  let g = (e2, t) => {
    uRef.current = true;
    setO((n4) => {
      if (t) {
        return {
          ...n4,
          ...i(n4.blocks, n4.suggestions, e2.id)
        };
      }
      return {
        ...n4,
        suggestions: n4.suggestions.filter((t2) => t2.id !== e2.id)
      };
    });
  };
  return /* @__PURE__ */ jsx("div", { className: `agc-demo`, children: /* @__PURE__ */ jsx(D1Component, { title: `Product / Launches`, tabs, tab: e, onTabChange, agents: a2.agents.map((e2) => ({
    ...e2,
    ...f2[e2.id]
  })), blocks: o2.blocks, suggestions: o2.suggestions, comments: o2.comments, cursors: o2.cursors, height: 620, onResolveComment: (e2) => {
    uRef.current = true;
    setO((t) => ({
      ...t,
      comments: t.comments.filter((t2) => t2.id !== e2.id)
    }));
  }, onReply: () => {
    uRef.current = true;
  }, onAccept: (e2) => g(e2, true), onReject: (e2) => g(e2, false), onAcceptAll: () => {
    uRef.current = true;
    setO((e2) => e2.suggestions.reduce((acc, suggestion) => ({
      ...acc,
      ...i(acc.blocks, acc.suggestions, suggestion.id)
    }), e2));
  } }) });
}

export {
  FComponent
};
