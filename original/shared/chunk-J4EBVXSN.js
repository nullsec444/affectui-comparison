import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-BpwDm3_5.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function i(e, t, n4) {
  let r2 = t.find((e2) => e2.id === n4);
  if (!r2) return { blocks: e, suggestions: t };
  let i2 = r2.remove ?? 0, a2 = r2.insert ?? ``, o2 = a2.length - i2;
  return { blocks: e.map(function e2(t2) {
    return t2.id === r2.block ? { ...t2, text: (t2.text ?? ``).slice(0, r2.at) + a2 + (t2.text ?? ``).slice(r2.at + i2) } : t2.rows ? { ...t2, rows: t2.rows.map((t3) => t3.map(e2)) } : t2;
  }), suggestions: t.filter((e2) => e2.id !== n4).map((e2) => e2.block === r2.block && e2.at >= r2.at + i2 ? { ...e2, at: e2.at + o2 } : e2) };
}
var a = (e) => {
  let t = e?.firstChild;
  return t && t.nodeType === 3 ? t : null;
};
function o(e, t, n4) {
  if (n4) {
    let r3 = e.querySelector(`[data-ins="${CSS.escape(n4)}"]`);
    if (r3) {
      let e2 = a(r3);
      if (e2) return [e2, Math.max(0, Math.min(t, e2.length))];
      let n5 = r3.previousElementSibling;
      n5?.tagName === `WBR` && (n5 = n5.previousElementSibling);
      let i2 = a(n5);
      if (i2) return [i2, i2.length];
      let o2 = a(r3.nextElementSibling);
      if (o2) return [o2, 0];
    }
  }
  let r2 = null;
  for (let n5 of e.querySelectorAll(`[data-from]`)) {
    let e2 = a(n5);
    if (!e2) continue;
    let i2 = Number(n5.dataset.from);
    if (t >= i2 && t <= i2 + e2.length && (r2 = [e2, t - i2], t < i2 + e2.length)) break;
  }
  return r2;
}
function s(e, t) {
  let n4 = document.createRange();
  if (!e.length) return null;
  if (t < e.length) return n4.setStart(e, t), n4.setEnd(e, t + 1), n4.getClientRects()[0] ?? null;
  n4.setStart(e, t - 1), n4.setEnd(e, t);
  let r2 = n4.getClientRects(), i2 = r2[r2.length - 1];
  return i2 ? new DOMRect(i2.right, i2.top, 0, i2.height) : null;
}
var c = (e) => e.trim().charAt(0).toUpperCase();
var l = (e) => `$${e.toFixed(2)}`;
var u = `\u200B`;
function d({ agents: e, blocks: t, suggestions: i2 = [], comments: a2 = [], onResolveComment: d2, onReply: p2, cursors: m2, onAccept: h2, onReject: g2, onAcceptAll: _2, following: v2, onFollowingChange: y2, height: b2, tabs: x2, tab: S2, onTabChange: ee2, formatCost: C2 = l, title: w2 = `Untitled`, className: T2 }) {
  let E2 = (0, n3.useRef)(null), D2 = (0, n3.useRef)(null), [O2, te2] = (0, n3.useState)({}), [ne2, k2] = (0, n3.useState)({}), [A2, re2] = (0, n3.useState)({}), [ie2, ae2] = (0, n3.useState)({}), [j2, oe2] = (0, n3.useState)({}), [M2, N2] = (0, n3.useState)(null), [P2, F2] = (0, n3.useState)(``), I = (0, n3.useRef)(0), [se, ce] = (0, n3.useState)(0), [le, ue] = (0, n3.useState)(0), [de, fe] = (0, n3.useState)(0), [pe, me] = (0, n3.useState)(1 / 0), L = (0, n3.useRef)(/* @__PURE__ */ new Map()), [he, ge] = (0, n3.useState)({}), [_e, ve] = (0, n3.useState)(null), R = v2 === void 0 ? _e : v2, ye = (e2) => {
    v2 === void 0 && ve(e2), y2?.(e2);
  }, [z, B] = (0, n3.useState)(null), V = (0, n3.useRef)(0), be = () => {
    let t2 = E2.current;
    if (!t2) return;
    let n4 = t2.getBoundingClientRect(), r2 = t2.offsetWidth ? n4.width / t2.offsetWidth : 1, i3 = (e2) => ({ x: (e2.left - n4.left) / r2, y: (e2.top - n4.top) / r2, w: e2.width / r2, h: e2.height / r2 }), c2 = (e2) => Math.round(e2 * 10) / 10, l2 = {}, u2 = {};
    for (let n5 of e) {
      let e2 = m2[n5.id];
      if (!e2) continue;
      let r3 = t2.querySelector(`[data-block="${CSS.escape(e2.block)}"]`);
      if (!r3) continue;
      let a3 = r3.dataset.kind === `image` ? r3.querySelector(`.ui-agc__img`) : null;
      if (a3) {
        let r4 = i3(a3.getBoundingClientRect()), o2 = e2.point === `corner` ? { x: c2(r4.x + r4.w), y: c2(r4.y + r4.h), h: 0, free: true } : { x: c2(r4.x + r4.w * 0.55), y: c2(r4.y + r4.h * 0.5), h: 0, free: true };
        if (l2[n5.id] = o2, e2.point === `corner` && e2.select) {
          let e3 = t2.querySelector(`[data-agent="${CSS.escape(n5.id)}"]`);
          e3 && (e3.style.transform = `translate(${o2.x}px, ${o2.y}px)`);
        }
        continue;
      }
      let d4 = o(r3, e2.at ?? 0, e2.in), f3 = d4 ? s(...d4) : null;
      if (f3) {
        let e3 = i3(f3);
        l2[n5.id] = { x: c2(e3.x), y: c2(e3.y), h: c2(e3.h) };
      }
      if (e2.select && !e2.in) {
        let t3 = o(r3, e2.at ?? 0), a4 = o(r3, (e2.at ?? 0) + e2.select);
        if (t3 && a4) {
          let e3 = document.createRange();
          e3.setStart(...t3), e3.setEnd(...a4);
          let r4 = [];
          for (let t4 of e3.getClientRects()) {
            if (t4.width < 0.5) continue;
            let e4 = i3(t4), n6 = r4.find((t5) => Math.abs(t5.y - e4.y) < 3);
            if (n6) {
              let t5 = Math.max(n6.x + n6.w, e4.x + e4.w);
              n6.x = Math.min(n6.x, e4.x), n6.w = t5 - n6.x;
            } else r4.push({ ...e4 });
          }
          u2[n5.id] = r4.map((e4) => ({ x: Math.round(e4.x), y: Math.round(e4.y), w: Math.round(e4.w), h: Math.round(e4.h) }));
        }
      }
    }
    let d3 = D2.current ? i3(D2.current.getBoundingClientRect()) : { x: 0, w: t2.offsetWidth }, f2 = {};
    for (let e2 of a2) {
      let n5 = t2.querySelector(`[data-block="${CSS.escape(e2.block)}"]`);
      if (!n5) continue;
      let r3 = e2.at === void 0 ? null : o(n5, e2.at), a3 = r3 ? s(...r3) : null;
      if (a3) {
        let t3 = i3(a3);
        f2[e2.id] = { x: Math.round(t3.x), y: Math.round(t3.y + 3 + (e2.y ?? 0)) };
        continue;
      }
      let c3 = i3(n5.getBoundingClientRect());
      f2[e2.id] = { x: Math.round(d3.x + d3.w * Math.max(0, Math.min(1, e2.x ?? 0.9))), y: Math.round(c3.y + (e2.y ?? 0)) };
    }
    let p3 = {};
    for (let e2 of t2.querySelectorAll(`figure[data-fit]`)) {
      if (getComputedStyle(e2).float === `none`) continue;
      let t3 = e2.nextElementSibling;
      t3 && e2.dataset.block && (p3[e2.dataset.block] = { w: Math.round(e2.offsetWidth), h: Math.max(48, Math.round(t3.offsetHeight)) });
    }
    let h3 = {};
    for (let e2 of a2) {
      let n5 = t2.querySelector(`[data-comment="${CSS.escape(e2.id)}"] .ui-agc__pin-body`);
      n5 && (h3[e2.id] = n5.offsetHeight);
    }
    let g3 = (e2, t3) => JSON.stringify(e2) === JSON.stringify(t3) ? e2 : t3;
    te2((e2) => g3(e2, l2)), k2((e2) => g3(e2, u2)), re2((e2) => g3(e2, f2)), ae2((e2) => g3(e2, h3)), oe2((e2) => g3(e2, p3)), ce(t2.offsetWidth), ue(D2.current?.offsetWidth ?? t2.offsetWidth), fe(t2.offsetHeight);
    let _3 = t2.parentElement;
    for (; _3 && _3 !== document.body && getComputedStyle(_3).overflowX === `visible`; ) _3 = _3.parentElement;
    let v3 = _3 && _3 !== document.body ? _3.getBoundingClientRect().right : window.innerWidth;
    me(Math.round((v3 - n4.left) / r2));
    let y3 = {};
    for (let [e2, t3] of L.current) y3[e2] = t3.offsetWidth;
    ge((e2) => JSON.stringify(e2) === JSON.stringify(y3) ? e2 : y3);
  }, H = (0, n3.useRef)(be);
  H.current = be, (0, n3.useLayoutEffect)(() => {
    for (let e2 of E2.current?.querySelectorAll(`.ui-agc__table-card`) ?? []) {
      let t2 = e2.firstElementChild;
      if (!t2) continue;
      let n4 = `${t2.offsetHeight}px`;
      e2.style.height !== n4 && (e2.style.height ? e2.style.height = n4 : (e2.style.transition = `none`, e2.style.height = n4, e2.offsetHeight, e2.style.transition = ``));
    }
  }), (0, n3.useLayoutEffect)(() => H.current()), (0, n3.useEffect)(() => {
    let e2 = E2.current;
    if (!e2) return;
    let t2 = new ResizeObserver(() => H.current());
    t2.observe(e2), document.fonts?.ready.then(() => H.current());
    let n4 = 0, r2 = 0, i3 = () => {
      H.current(), n4 = performance.now() < r2 ? requestAnimationFrame(i3) : 0;
    }, a3 = (e3) => {
      let t3 = e3.target;
      (t3.classList?.contains(`ui-agc__figure`) || t3.classList?.contains(`ui-agc__table-card`)) && (r2 = performance.now() + 900, n4 ||= requestAnimationFrame(i3));
    };
    return e2.addEventListener(`transitionrun`, a3), () => {
      t2.disconnect(), cancelAnimationFrame(n4), e2.removeEventListener(`transitionrun`, a3);
    };
  }, []);
  let xe = e.filter((e2) => m2[e2.id] && O2[e2.id]).map((e2) => e2.id), U = (0, n3.useRef)(/* @__PURE__ */ new Set()), [, Se] = (0, n3.useState)(0), W = xe.filter((e2) => !U.current.has(e2));
  (0, n3.useEffect)(() => {
    if (!W.length) {
      for (let e3 of [...U.current]) xe.includes(e3) || U.current.delete(e3);
      return;
    }
    let e2 = window.setTimeout(() => {
      W.forEach((e3) => U.current.add(e3)), Se((e3) => e3 + 1);
    }, 40);
    return () => window.clearTimeout(e2);
  });
  let Ce = (0, n3.useRef)({});
  Object.assign(Ce.current, O2);
  let [we, Te] = (0, n3.useState)(``), G = (0, n3.useRef)(null);
  (0, n3.useEffect)(() => {
    let t2 = /* @__PURE__ */ new Set([...i2.map((e2) => e2.id), ...a2.map((e2) => e2.id)]);
    if (G.current) {
      let t3 = i2.find((e2) => !G.current.has(e2.id)), n4 = a2.find((e2) => !G.current.has(e2.id)), r2 = (t4) => e.find((e2) => e2.id === t4)?.name;
      t3 && r2(t3.agent) ? Te(`${r2(t3.agent)} suggests a change${t3.note ? `: ${t3.note}` : ``}`) : n4 && r2(n4.agent) && Te(`${r2(n4.agent)} is writing a comment`);
    }
    G.current = t2;
  }, [i2, a2, e]);
  let Ee = (e2, t2) => {
    window.clearTimeout(V.current);
    let n4 = E2.current;
    if (!n4) return;
    let r2 = n4.getBoundingClientRect(), i3 = n4.offsetWidth ? r2.width / n4.offsetWidth : 1, a3 = t2.getClientRects(), o2 = a3[a3.length - 1] ?? t2.getBoundingClientRect();
    B({ id: e2, box: { x: (o2.left - r2.left) / i3, y: (o2.top - r2.top) / i3, w: o2.width / i3, h: o2.height / i3 } });
  }, K = () => {
    window.clearTimeout(V.current), V.current = window.setTimeout(() => B(null), 140);
  }, q = z ? i2.find((e2) => e2.id === z.id) : void 0;
  (0, n3.useEffect)(() => {
    if (!z) return;
    let e2 = (e3) => e3.key === `Escape` && B(null);
    return document.addEventListener(`keydown`, e2), () => document.removeEventListener(`keydown`, e2);
  }, [z]), (0, n3.useEffect)(() => () => {
    window.clearTimeout(V.current), window.clearTimeout(I.current);
  }, []);
  let J = (t2) => e.find((e2) => e2.id === t2), De = (e2) => J(e2)?.color, Y = (e2) => J(e2)?.name ?? `Agent`, X = (e2) => e2?.avatar ?? (0, r.jsx)(`span`, { className: `ui-agc__face-initial`, children: c(e2?.name ?? `?`) }), Z = (e2) => {
    let t2 = e2.text ?? ``, n4 = i2.filter((t3) => t3.block === e2.id).sort((e3, t3) => e3.at - t3.at), a3 = [], o2 = 0;
    for (let e3 of n4) {
      let n5 = Math.max(o2, Math.min(e3.at, t2.length));
      n5 > o2 && a3.push((0, r.jsx)(`span`, { "data-from": o2, children: t2.slice(o2, n5) }, `t${o2}`));
      let i3 = Math.min(e3.remove ?? 0, t2.length - n5), s2 = { "--ui-agc-c": De(e3.agent) }, c2 = { tabIndex: 0, onMouseEnter: (t3) => Ee(e3.id, t3.currentTarget), onMouseLeave: K, onFocus: (t3) => Ee(e3.id, t3.currentTarget), onBlur: K, "data-open": z?.id === e3.id ? `` : void 0 };
      i3 && a3.push((0, r.jsx)(`del`, { className: `ui-agc__del`, "data-from": n5, "data-sug": e3.id, style: s2, ...c2, "aria-label": `${Y(e3.agent)} suggests removing: ${t2.slice(n5, n5 + i3)}`, children: t2.slice(n5, n5 + i3) }, `d${e3.id}`)), i3 && e3.insert !== void 0 && a3.push((0, r.jsx)(`wbr`, {}, `b${e3.id}`)), e3.insert !== void 0 && a3.push((0, r.jsx)(`ins`, { className: `ui-agc__ins`, "data-ins": e3.id, "data-sug": e3.id, style: s2, ...c2, "aria-label": `${Y(e3.agent)} suggests adding: ${e3.insert}`, children: e3.insert }, `i${e3.id}`)), o2 = n5 + i3;
    }
    return (o2 < t2.length || !a3.length) && a3.push((0, r.jsx)(`span`, { "data-from": o2, children: t2.slice(o2) || u }, `t${o2}`)), a3;
  }, Oe = (t2) => e.find((e2) => m2[e2.id]?.block === t2 && m2[e2.id]?.select), ke = (t2) => {
    let n4 = t2.kind ?? `paragraph`;
    if (n4 === `image`) {
      let e2 = Math.max(0.2, Math.min(1, t2.width ?? 1)), n5 = t2.ratio ?? 16 / 9, i3 = !!t2.float && t2.ratio === void 0, a3 = i3 ? j2[t2.id] : void 0, o2 = Oe(t2.id);
      return (0, r.jsxs)(`figure`, { className: `ui-agc__figure`, "data-block": t2.id, "data-kind": `image`, "data-float": t2.float, "data-fit": i3 ? `` : void 0, style: { width: `${e2 * 100}%` }, children: [(0, r.jsxs)(`div`, { className: `ui-agc__img`, "data-loading": t2.loading ? `` : void 0, "data-held": o2 ? `` : void 0, style: { ...i3 && a3 ? { height: a3.h } : { aspectRatio: String(n5) }, "--ui-agc-c": o2?.color }, role: `img`, "aria-label": t2.loading ? `Image loading` : t2.alt || t2.text || `Image`, children: [t2.loading || !t2.src ? (0, r.jsx)(`span`, { className: `ui-agc__shimmer`, "aria-hidden": `true` }) : (0, r.jsx)(`img`, { src: t2.src, alt: ``, draggable: false }), o2 && (0, r.jsxs)(r.Fragment, { children: [[`tl`, `tr`, `bl`, `br`].map((e3) => (0, r.jsx)(`span`, { className: `ui-agc__handle`, "data-at": e3, "aria-hidden": `true` }, e3)), (0, r.jsx)(`span`, { className: `ui-agc__size`, "aria-hidden": `true`, children: a3 ? `${a3.w * 2} \xD7 ${a3.h * 2}` : `${Math.round(1200 * e2)} \xD7 ${Math.round(1200 * e2 / n5)}` })] })] }), t2.text && (0, r.jsx)(`figcaption`, { className: `ui-agc__caption`, children: t2.text })] }, t2.id);
    }
    if (n4 === `table`) {
      let [n5, ...i3] = t2.rows ?? [], a3 = (e2) => e2.tone ? (0, r.jsx)(`span`, { className: `ui-agc__pill`, "data-tone": e2.tone, "data-block": e2.id, children: Z(e2) }) : (0, r.jsx)(`span`, { className: `ui-agc__cell`, "data-block": e2.id, children: Z(e2) });
      return (0, r.jsx)(`div`, { className: `ui-agc__table-card`, children: (0, r.jsxs)(`table`, { className: `ui-agc__table`, children: [n5 && (0, r.jsx)(`thead`, { children: (0, r.jsx)(`tr`, { children: n5.map((e2) => (0, r.jsx)(`th`, { children: a3(e2) }, e2.id)) }) }), (0, r.jsx)(`tbody`, { children: i3.map((e2, t3) => (0, r.jsx)(`tr`, { children: e2.map((e3) => (0, r.jsx)(`td`, { children: a3(e3) }, e3.id)) }, e2[0]?.id ?? t3)) }), t2.addRow && (0, r.jsx)(`tfoot`, { children: (0, r.jsx)(`tr`, { children: (0, r.jsx)(`td`, { colSpan: n5?.length ?? 1, children: (0, r.jsxs)(`span`, { className: `ui-agc__add`, "data-block": `${t2.id}:add`, "data-hover": e.some((e2) => m2[e2.id]?.block === `${t2.id}:add`) ? `` : void 0, "data-pressed": e.some((e2) => m2[e2.id]?.block === `${t2.id}:add` && m2[e2.id]?.press) ? `` : void 0, children: [(0, r.jsx)(`svg`, { width: `14`, height: `14`, viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, strokeWidth: `2`, strokeLinecap: `round`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M12 5v14M5 12h14` }) }), (0, r.jsx)(`span`, { "data-from": 0, children: `Add row` })] }) }) }) })] }) }, t2.id);
    }
    return n4 === `code` ? (0, r.jsx)(`pre`, { className: `ui-agc__code`, "data-block": t2.id, children: (0, r.jsx)(`code`, { children: Z(t2) }) }, t2.id) : (0, r.jsx)(n4 === `title` ? `h2` : n4 === `heading` ? `h3` : n4 === `item` ? `li` : `p`, { className: `ui-agc__block ui-agc__block--${n4}`, "data-block": t2.id, children: Z(t2) }, t2.id);
  }, Q = [];
  for (let e2 = 0; e2 < t.length; e2++) if (t[e2].kind === `item`) {
    let n4 = [];
    for (; e2 < t.length && t[e2].kind === `item`; ) n4.push(t[e2++]);
    e2--, Q.push((0, r.jsx)(`ul`, { className: `ui-agc__list`, children: n4.map(ke) }, `l${n4[0].id}`));
  } else Q.push(ke(t[e2]));
  let Ae = e.filter((e2) => m2[e2.id]), $ = e.some((e2) => e2.cost !== void 0) ? e.reduce((e2, t2) => e2 + (t2.cost ?? 0), 0) : null, je = new Set(a2.map((e2) => e2.id)), Me = Ae.filter((e2) => m2[e2.id]?.typing).length;
  return (0, r.jsxs)(`div`, { className: [`ui-agc`, T2].filter(Boolean).join(` `), "data-following": R ?? void 0, "data-fade": b2 ? `` : void 0, style: b2 ? { "--ui-agc-height": `${b2}px` } : void 0, children: [(0, r.jsx)(`style`, { href: `ui-agent-cursors`, precedence: `default`, children: f }), x2 && x2.length > 0 && (0, r.jsx)(`div`, { className: `ui-agc__tabs`, role: `tablist`, "aria-label": `Views`, children: x2.map((e2) => (0, r.jsx)(`button`, { type: `button`, role: `tab`, className: `ui-agc__tab`, "aria-selected": e2.id === (S2 ?? x2[0].id), onClick: () => ee2?.(e2.id), children: e2.label }, e2.id)) }), (0, r.jsxs)(`div`, { className: `ui-agc__stage`, ref: E2, children: [(0, r.jsx)(`div`, { className: `ui-agc__shade`, "aria-hidden": `true`, children: (0, r.jsx)(`span`, {}) }), (0, r.jsxs)(`div`, { className: `ui-agc__sheet`, ref: D2, children: [(0, r.jsxs)(`header`, { className: `ui-agc__bar`, children: [(0, r.jsx)(`span`, { className: `ui-agc__doc`, "aria-hidden": `true`, children: (0, r.jsxs)(`svg`, { width: `16`, height: `16`, viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.8`, strokeLinecap: `round`, strokeLinejoin: `round`, children: [(0, r.jsx)(`path`, { d: `M14 2.5H7.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7z` }), (0, r.jsx)(`path`, { d: `M14 2.5V7h4.5M9 12.5h6M9 16h4` })] }) }), (0, r.jsx)(`span`, { className: `ui-agc__title`, children: w2 }), (0, r.jsx)(`div`, { className: `ui-agc__people`, role: `group`, "aria-label": `Agents in this document`, children: e.map((e2) => {
    let t2 = m2[e2.id], n4 = R === e2.id;
    return (0, r.jsxs)(`button`, { type: `button`, className: `ui-agc__face`, "data-here": t2 ? `` : void 0, "data-typing": t2?.typing ? `` : void 0, "aria-pressed": n4, "aria-label": `${n4 ? `Stop following` : `Follow`} ${e2.name}${t2?.doing ? ` \u2013 ${t2.doing}` : t2 ? `` : ` (not in the document)`}`, style: { "--ui-agc-c": e2.color, "--ui-agc-tint": e2.tint }, onClick: () => ye(n4 ? null : e2.id), children: [(0, r.jsx)(`span`, { className: `ui-agc__face-mark`, children: X(e2) }), (0, r.jsxs)(`span`, { className: `ui-agc__face-tip`, "aria-hidden": `true`, children: [(0, r.jsx)(`b`, { children: e2.name }), (0, r.jsx)(`span`, { children: t2?.doing ?? (t2 ? `In the document` : `Away`) })] })] }, e2.id);
  }) }), (0, r.jsxs)(`span`, { className: `ui-agc__sum`, children: [i2.length > 0 ? `${i2.length} suggestion${i2.length === 1 ? `` : `s`}` : Me ? `${Me} typing` : `${Ae.length} here`, $ !== null && (0, r.jsx)(`b`, { className: `ui-agc__spent`, "data-zero": $ === 0 ? `` : void 0, children: C2($) })] }), _2 && (0, r.jsx)(`button`, { type: `button`, className: `ui-agc__all`, disabled: i2.length === 0, onClick: _2, children: `Accept all` })] }), (0, r.jsx)(`div`, { className: `ui-agc__paper`, "aria-hidden": `true` }), (0, r.jsx)(`div`, { className: `ui-agc__marks`, "aria-hidden": `true`, children: e.map((e2) => (ne2[e2.id] ?? []).map((t2, n4) => (0, r.jsx)(`span`, { className: `ui-agc__mark`, "data-dim": R && R !== e2.id ? `` : void 0, style: { left: t2.x - 1, top: t2.y, width: t2.w + 2, height: t2.h, "--ui-agc-c": e2.color } }, `${e2.id}-${n4}`))) }), (0, r.jsx)(`div`, { className: `ui-agc__text`, children: Q }, S2)] }), (0, r.jsx)(`div`, { className: `ui-agc__notes`, children: a2.map((e2) => {
    let t2 = J(e2.agent), n4 = A2[e2.id];
    if (!n4) return null;
    let i3 = !!e2.open || M2 === e2.id, a3 = Math.min(248, Math.max(160, se - 16)), o2 = i3 ? Math.max(8 - n4.x, Math.min(0, se - 8 - (n4.x + a3))) : 0, s2 = de > 0 && n4.y + 190 > de, c2 = () => window.clearTimeout(I.current), l2 = () => {
      window.clearTimeout(I.current), I.current = window.setTimeout(() => N2((t3) => t3 === e2.id ? null : t3), 160);
    };
    return (0, r.jsx)(`div`, { className: `ui-agc__pin`, "data-comment": e2.id, "data-open": i3 ? `` : void 0, "data-up": s2 ? `` : void 0, style: { left: n4.x, top: n4.y, "--ui-agc-c": t2?.color, "--ui-agc-pin-h": `${ie2[e2.id] ?? 120}px`, "--ui-agc-pin-w": `${a3}px`, "--ui-agc-pin-x": `${o2}px` }, onMouseEnter: () => {
      c2(), N2(e2.id);
    }, onMouseLeave: l2, onFocus: () => {
      c2(), N2(e2.id);
    }, onBlur: (e3) => !e3.currentTarget.contains(e3.relatedTarget) && l2(), children: (0, r.jsxs)(`div`, { className: `ui-agc__pin-box`, children: [(0, r.jsx)(`span`, { className: `ui-agc__pin-mark`, children: X(t2) }), (0, r.jsx)(`button`, { type: `button`, className: `ui-agc__pin-hit`, "aria-expanded": i3, "aria-label": `Comment from ${t2?.name ?? `an agent`}: ${e2.text}`, tabIndex: i3 ? -1 : 0 }), (0, r.jsxs)(`div`, { className: `ui-agc__pin-body`, role: `group`, "aria-label": `Comment from ${t2?.name ?? `an agent`}`, "aria-hidden": !i3, children: [(0, r.jsxs)(`div`, { className: `ui-agc__note-head`, children: [(0, r.jsx)(`b`, { children: t2?.name }), (0, r.jsx)(`span`, { children: `now` })] }), (0, r.jsx)(`p`, { className: `ui-agc__note-text`, "data-block": e2.id, children: (0, r.jsx)(`span`, { "data-from": 0, children: e2.text || u }) }), (p2 || d2) && (0, r.jsxs)(`div`, { className: `ui-agc__pin-actions`, children: [p2 ? (0, r.jsx)(`input`, { className: `ui-agc__reply`, value: M2 === e2.id ? P2 : ``, placeholder: `Reply`, "aria-label": `Reply to ${t2?.name ?? `the agent`}`, tabIndex: i3 ? 0 : -1, onChange: (e3) => F2(e3.target.value), onKeyDown: (t3) => {
      t3.key === `Enter` && P2.trim() && (p2(e2, P2.trim()), F2(``)), t3.key === `Escape` && N2(null);
    } }) : (0, r.jsx)(`span`, { className: `ui-agc__reply`, "aria-hidden": `true` }), d2 && (0, r.jsx)(`button`, { type: `button`, className: `ui-agc__resolve`, "aria-label": `Resolve`, title: `Resolve`, tabIndex: i3 ? 0 : -1, onClick: () => {
      N2(null), d2(e2);
    }, children: (0, r.jsx)(`svg`, { width: `14`, height: `14`, viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, strokeWidth: `2.6`, strokeLinecap: `round`, strokeLinejoin: `round`, children: (0, r.jsx)(`path`, { d: `M5 12.5l4.5 4.5L19 7.5` }) }) })] })] })] }) }, e2.id);
  }) }), (0, r.jsx)(`div`, { className: `ui-agc__cursors`, "aria-hidden": `true`, children: e.map((e2) => {
    let t2 = m2[e2.id], n4 = t2 && O2[e2.id] || Ce.current[e2.id];
    if (!n4) return null;
    let i3 = !t2 || !O2[e2.id], a3 = e2.cost === void 0 ? [] : [C2(e2.cost)], o2 = Math.min(0, pe - 8 - (n4.x + 16 + (he[e2.id] ?? 0))), s2 = b2 ? Math.max(0, Math.min(1, (b2 * 0.97 - n4.y) / (b2 * 0.47))) : 1;
    return (0, r.jsx)(`div`, { className: `ui-agc__cursor`, "data-agent": e2.id, "data-gone": i3 ? `` : void 0, "data-arrive": !i3 && W.includes(e2.id) ? `` : void 0, "data-typing": t2?.typing ? `` : void 0, "data-free": n4.free ? `` : void 0, "data-in-note": t2 && je.has(t2.block) ? `` : void 0, "data-press": t2?.press ? `` : void 0, "data-drag": t2?.point === `corner` && t2.select ? `` : void 0, "data-dim": R && R !== e2.id ? `` : void 0, style: { transform: `translate(${n4.x}px, ${n4.y}px)`, "--ui-agc-c": e2.color, "--ui-agc-h": `${n4.h}px`, "--ui-agc-shift": `${o2}px` }, children: (0, r.jsxs)(`div`, { className: `ui-agc__cursor-in`, style: s2 < 1 ? { opacity: s2 } : void 0, children: [(0, r.jsx)(`span`, { className: `ui-agc__caret` }), (0, r.jsx)(`svg`, { className: `ui-agc__arrow`, viewBox: `-2.186 -0.256 18.514 22.277`, children: (0, r.jsx)(`path`, { transform: `rotate(21.37)`, d: `M13.92 4.07c1.69.66 3.03 1.18 3.94 1.68.46.25.87.53 1.16.86.31.35.51.79.48 1.29-.03.51-.27.92-.62 1.23-.33.3-.77.53-1.25.74-.96.4-2.36.78-4.12 1.26-.56.15-.98.27-1.26.37-.26.1-.38.18-.47.27-.09.09-.17.21-.27.47-.1.28-.22.7-.37 1.26-.48 1.76-.86 3.16-1.26 4.12-.2.49-.44.93-.74 1.25-.32.35-.72.6-1.23.62-.51.03-.94-.17-1.29-.48-.33-.29-.61-.7-.86-1.16-.5-.91-1.02-2.25-1.68-3.94L1.66 7.76C.96 5.99.41 4.59.16 3.51-.09 2.44-.12 1.39.63.63 1.39-.12 2.44-.09 3.51.16c1.08.25 2.48.8 4.25 1.5l6.16 2.41Z` }) }), (0, r.jsxs)(`span`, { className: `ui-agc__flag`, ref: (t3) => {
      t3 ? L.current.set(e2.id, t3) : L.current.delete(e2.id);
    }, children: [(0, r.jsxs)(`span`, { className: `ui-agc__flag-row`, children: [(0, r.jsx)(`span`, { className: `ui-agc__flag-name`, children: e2.name }), a3.length > 0 && (0, r.jsx)(`span`, { className: `ui-agc__flag-tags`, children: a3.map((e3, t3) => (0, r.jsx)(`span`, { className: `ui-agc__flag-tag`, children: e3 }, t3)) })] }), (0, r.jsx)(`span`, { className: `ui-agc__flag-doing`, "data-on": t2?.doing ? `` : void 0, children: (0, r.jsx)(`span`, { children: t2?.doing ?? `` }) })] })] }) }, e2.id);
  }) }), z && q && (0, r.jsxs)(`div`, { className: `ui-agc__pop`, role: `dialog`, "aria-label": `Suggestion from ${Y(q.agent)}`, style: { left: Math.max(0, Math.min(z.box.x, le - 260)), top: z.box.y + z.box.h + 6, "--ui-agc-c": De(q.agent) }, onMouseEnter: () => window.clearTimeout(V.current), onMouseLeave: K, onFocus: () => window.clearTimeout(V.current), onBlur: K, children: [(0, r.jsxs)(`div`, { className: `ui-agc__pop-head`, children: [(0, r.jsx)(`span`, { className: `ui-agc__pop-mark`, children: X(J(q.agent)) }), (0, r.jsx)(`b`, { children: Y(q.agent) }), (0, r.jsx)(`span`, { children: q.remove && q.insert ? `suggests a rewrite` : q.remove ? `suggests removing` : `suggests adding` })] }), q.note && (0, r.jsx)(`p`, { className: `ui-agc__pop-note`, children: q.note }), (0, r.jsxs)(`div`, { className: `ui-agc__pop-actions`, children: [g2 && (0, r.jsx)(`button`, { type: `button`, className: `ui-agc__btn`, onClick: () => {
    B(null), g2(q);
  }, children: `Reject` }), h2 && (0, r.jsx)(`button`, { type: `button`, className: `ui-agc__btn ui-agc__btn--primary`, onClick: () => {
    B(null), h2(q);
  }, children: `Accept` })] })] })] }), (0, r.jsx)(`span`, { className: `ui-agc__live`, role: `status`, "aria-live": `polite`, children: we })] });
}
var f = `.ui-agc{--ui-agc-card: #ffffff;--ui-agc-tray: #f0f0f0;--ui-agc-ink: #171717;--ui-agc-text: #3d3d3d;--ui-agc-muted: #8a8a8a;--ui-agc-line: #ececec;--ui-agc-grid: #f0f0f0;--ui-agc-stroke: #efefef;--ui-agc-gap: 18px;--ui-agc-chip: #f5f5f5;--ui-agc-shimmer: #f0f0f0;--ui-agc-shine: #fafafa;--ui-agc-code: rgba(0, 0, 0, 0.035);--ui-agc-ring: rgba(23, 23, 23, 0.22);--ui-agc-agent: #1f1f22;--ui-agc-flag: #141416;--ui-agc-flag-ink: #ffffff;--ui-agc-flag-soft: rgba(255, 255, 255, 0.14);--ui-agc-edge: linear-gradient(90deg, #ff4fa3, #8b6bff 55%, #3b8bff);--ui-agc-c: var(--ui-agc-agent);--ui-agc-glide: 560ms;--ui-agc-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;line-height: 20px;letter-spacing: -0.006em;color: var(--ui-agc-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-agc *, .ui-agc *::before, .ui-agc *::after{box-sizing: border-box}:where(.ui-agc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-agc button:focus-visible{outline: 2px solid var(--ui-agc-ring);outline-offset: 2px}.ui-agc svg{display: block;flex: none}.ui-agc__stage{position: relative}.ui-agc{container: agc / inline-size}.ui-agc__tabs{display: flex;gap: 6px;margin: 0 0 6px}.ui-agc__tab{height: 30px;padding: 0 12px;border-radius: 9px;background: rgba(0, 0, 0, 0.05);font-size: 13px;font-weight: 500;color: var(--ui-agc-muted);transition: background-color 160ms ease, color 160ms ease, box-shadow 160ms ease}.ui-agc__tab:hover{color: var(--ui-agc-ink)}.ui-agc__tab[aria-selected="true"]{background: var(--ui-agc-card);box-shadow: inset 0 0 0 1px var(--ui-agc-stroke), 0 1px 2px rgba(0, 0, 0, 0.05);color: var(--ui-agc-ink)}:where(.dark, [data-theme="dark"]) .ui-agc__tab{background: rgba(255, 255, 255, 0.06)}.ui-agc__text{animation: ui-agc-view 380ms var(--ui-agc-ease) both}@keyframes ui-agc-view{from{opacity: 0;filter: blur(2px);transform: translateY(4px)}}.ui-agc__table-card{overflow: hidden;border-radius: 12px;box-shadow: inset 0 0 0 1px var(--ui-agc-line), 0 1px 2px rgba(0, 0, 0, 0.04);transition: height 420ms var(--ui-agc-ease)}.ui-agc__table{width: 100%;border-collapse: collapse;table-layout: fixed;font-size: 13.5px;line-height: 20px}.ui-agc__table :is(th, td){height: 40px;padding: 0 12px;border-top: 1px solid var(--ui-agc-grid);border-left: 1px solid var(--ui-agc-grid);text-align: left;vertical-align: middle;white-space: nowrap;overflow: hidden;text-overflow: ellipsis}.ui-agc__table :is(th, td):first-child{border-left: 0}.ui-agc__table th:first-child{width: 38%}.ui-agc__table th{border-top: 0;font-size: 12.5px;font-weight: 500;color: var(--ui-agc-muted)}.ui-agc__table td{color: var(--ui-agc-ink)}.ui-agc__table tfoot td{height: 44px;padding: 0 6px}.ui-agc__add{display: inline-flex;align-items: center;gap: 8px;height: 30px;padding: 0 10px;border-radius: 8px;font-size: 13.5px;font-weight: 500;color: var(--ui-agc-muted);transition: background-color 140ms ease, color 140ms ease, transform 140ms ease}.ui-agc__add[data-hover]{background: rgba(0, 0, 0, 0.04);color: var(--ui-agc-ink)}.ui-agc__add[data-pressed]{background: rgba(0, 0, 0, 0.08);transform: scale(0.97)}:where(.dark, [data-theme="dark"]) .ui-agc__add[data-hover]{background: rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-agc__add[data-pressed]{background: rgba(255, 255, 255, 0.1)}.ui-agc__table tbody tr{animation: ui-agc-row 420ms var(--ui-agc-ease) both}@keyframes ui-agc-row{from{opacity: 0;transform: translateY(-6px)}}.ui-agc__pill{display: inline-flex;align-items: center;height: 22px;padding: 0 8px;border-radius: 999px;background: var(--ui-agc-pill-bg);font-size: 12px;font-weight: 500;color: var(--ui-agc-pill-fg)}.ui-agc__pill[data-tone="gray"]{--ui-agc-pill-bg: rgba(0, 0, 0, 0.05);--ui-agc-pill-fg: #6b6b6b}.ui-agc__pill[data-tone="blue"]{--ui-agc-pill-bg: #eaf1ff;--ui-agc-pill-fg: #2456d6}.ui-agc__pill[data-tone="green"]{--ui-agc-pill-bg: #e6f6ec;--ui-agc-pill-fg: #1a7f45}.ui-agc__pill[data-tone="amber"]{--ui-agc-pill-bg: #fff3e0;--ui-agc-pill-fg: #b85c00}:where(.dark, [data-theme="dark"]) .ui-agc__pill[data-tone="gray"]{--ui-agc-pill-bg: rgba(255, 255, 255, 0.08);--ui-agc-pill-fg: #a1a1a6}:where(.dark, [data-theme="dark"]) .ui-agc__pill[data-tone="blue"]{--ui-agc-pill-bg: #16243f;--ui-agc-pill-fg: #8ab4ff}:where(.dark, [data-theme="dark"]) .ui-agc__pill[data-tone="green"]{--ui-agc-pill-bg: #12301f;--ui-agc-pill-fg: #3dd68c}:where(.dark, [data-theme="dark"]) .ui-agc__pill[data-tone="amber"]{--ui-agc-pill-bg: #3a2410;--ui-agc-pill-fg: #ffa057}.ui-agc__sheet{position: relative;overflow: hidden;border-radius: 20px;background: var(--ui-agc-tray)}.ui-agc__paper{position: absolute;inset: 48px 4px 4px;z-index: 0;border-radius: 16px;background: var(--ui-agc-card);box-shadow: 0 0 0 1px var(--ui-agc-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-agc[data-fade] .ui-agc__sheet{height: var(--ui-agc-height)}.ui-agc__shade{position: absolute;inset: -40px;pointer-events: none}.ui-agc__shade > span{position: absolute;inset: 40px;border-radius: 20px;box-shadow: 0 0 0 1px var(--ui-agc-stroke), 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 10px rgba(0, 0, 0, 0.055)}.ui-agc[data-fade] .ui-agc__shade{bottom: auto;height: calc(var(--ui-agc-height) + 80px)}.ui-agc[data-fade] .ui-agc__sheet{-webkit-mask: linear-gradient(#000 0, #000 calc(var(--ui-agc-height) * 0.5), transparent calc(var(--ui-agc-height) * 0.97));mask: linear-gradient(#000 0, #000 calc(var(--ui-agc-height) * 0.5), transparent calc(var(--ui-agc-height) * 0.97))}.ui-agc[data-fade] .ui-agc__shade{-webkit-mask: linear-gradient(#000 0, #000 calc(40px + var(--ui-agc-height) * 0.5), transparent calc(40px + var(--ui-agc-height) * 0.97));mask: linear-gradient(#000 0, #000 calc(40px + var(--ui-agc-height) * 0.5), transparent calc(40px + var(--ui-agc-height) * 0.97))}.ui-agc__bar{position: relative;z-index: 3;display: flex;align-items: center;gap: 8px;min-width: 0;height: 48px;padding: 0 12px 0 16px}.ui-agc__doc{display: grid;flex: none;place-items: center;color: var(--ui-agc-muted)}.ui-agc__title{flex: 1;min-width: 0;overflow: hidden;font-size: 13.5px;font-weight: 500;color: var(--ui-agc-muted);white-space: nowrap;text-overflow: ellipsis}.ui-agc__sum{flex: none;font-size: 12.5px;color: var(--ui-agc-muted);font-variant-numeric: tabular-nums}.ui-agc__spent{margin-left: 8px;font-weight: 600;color: var(--ui-agc-ink);transition: opacity 200ms ease}.ui-agc__spent[data-zero]{opacity: 0.35}.ui-agc__all{flex: none;height: 28px;padding: 0 11px;border-radius: 9px;background: var(--ui-agc-ink);font-size: 12.5px;font-weight: 500;color: var(--ui-agc-card);transition: opacity 160ms ease}.ui-agc__all:hover:not(:disabled){opacity: 0.86}.ui-agc__all:disabled{opacity: 0.2;cursor: default}.ui-agc__people{display: flex;flex: none;align-items: center}.ui-agc__face:first-child{margin-left: 0}.ui-agc__face{position: relative;display: grid;place-items: center;width: 28px;height: 28px;margin-left: 4px;border-radius: 50%;background: var(--ui-agc-card);box-shadow: 0 0 0 2px var(--ui-agc-tray), inset 0 0 0 1.5px var(--ui-agc-line);transition: transform 220ms var(--ui-agc-ease), opacity 220ms ease, box-shadow 220ms ease}.ui-agc__face:not([data-here]){opacity: 0.4}.ui-agc__face[data-here]::before{content: "";position: absolute;inset: 0;border-radius: 50%;background: conic-gradient(from 0deg, transparent 0deg, transparent 60deg, var(--ui-agc-c) 360deg);-webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1.5px));mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1.5px));animation: ui-agc-spin 850ms linear infinite}.ui-agc__face:hover, .ui-agc__face[aria-pressed="true"]{z-index: 1;transform: translateY(-1px)}.ui-agc__face[aria-pressed="true"]{background: var(--ui-agc-tint, color-mix(in srgb, var(--ui-agc-c) 16%, var(--ui-agc-card)))}.ui-agc__face-mark, .ui-agc__note-mark{display: grid;place-items: center;width: 14px;height: 14px}.ui-agc__face-mark svg, .ui-agc__note-mark svg{width: 14px;height: 14px}.ui-agc__face-initial{font-size: 11px;font-weight: 600;line-height: 1;color: var(--ui-agc-c)}.ui-agc__face-tip{position: absolute;top: calc(100% + 8px);right: -6px;z-index: 4;padding: 5px 9px;border-radius: 8px;background: var(--ui-agc-ink);font-size: 12px;line-height: 16px;color: var(--ui-agc-card);white-space: nowrap;opacity: 0;transform: translateY(-2px);pointer-events: none;transition: opacity 140ms ease, transform 140ms ease}.ui-agc__face-tip{display: grid;gap: 1px;text-align: left}.ui-agc__face-tip b{font-weight: 600}.ui-agc__face-tip > span{opacity: 0.75}.ui-agc__face:hover .ui-agc__face-tip, .ui-agc__face:focus-visible .ui-agc__face-tip{opacity: 1;transform: none}.ui-agc__text{position: relative;z-index: 1;padding: 36px 48px 48px;font-size: 14px;line-height: 23px;color: var(--ui-agc-text)}.ui-agc__block{margin: 0}.ui-agc__text > * + *{margin-top: var(--ui-agc-gap)}.ui-agc__block--title{font-size: 22px;font-weight: 650;line-height: 28px;letter-spacing: -0.022em;color: var(--ui-agc-ink)}.ui-agc__text > .ui-agc__block--title + *{margin-top: 12px}.ui-agc__block--heading{font-size: 15.5px;font-weight: 600;line-height: 24px;letter-spacing: -0.012em;color: var(--ui-agc-ink)}.ui-agc__text > .ui-agc__block--heading:not(:first-child){margin-top: calc(var(--ui-agc-gap) + 10px)}.ui-agc__text > .ui-agc__block--heading + *{margin-top: 8px}.ui-agc__list{margin: 0;padding: 0 0 0 20px}.ui-agc__list .ui-agc__block + .ui-agc__block{margin-top: 4px}.ui-agc__block--item::marker{color: var(--ui-agc-muted)}.ui-agc__code{margin: 0;padding: 14px 16px;overflow: hidden;border-radius: 12px;background: var(--ui-agc-code);box-shadow: inset 0 0 0 1px var(--ui-agc-line);font-family: ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace;font-size: 12.5px;line-height: 20px;letter-spacing: 0;color: var(--ui-agc-ink);white-space: pre-wrap}.ui-agc__code code{font: inherit}.ui-agc__figure{margin: 0}.ui-agc__text::after{content: "";display: block;clear: both}.ui-agc__figure{max-width: 100%;transition: width 620ms var(--ui-agc-ease)}.ui-agc__figure[data-float="left"]{float: left;margin: var(--ui-agc-gap) 24px 8px 0}.ui-agc__figure[data-float="right"]{float: right;margin: var(--ui-agc-gap) 0 8px 24px}.ui-agc__text > .ui-agc__figure[data-float]{margin-top: var(--ui-agc-gap)}.ui-agc__text > :is(.ui-agc__block--heading, .ui-agc__code, .ui-agc__list){clear: both}.ui-agc__sheet{container-type: inline-size}@container (max-width: 480px){.ui-agc__figure[data-float]{float: none;margin: 0 0 12px}}.ui-agc__img{position: relative;display: grid;width: 100%;border-radius: 12px;background: var(--ui-agc-shimmer);transition: box-shadow 200ms ease}.ui-agc__img > img{width: 100%;height: 100%;border-radius: inherit;object-fit: cover;animation: ui-agc-fade 500ms ease both}.ui-agc__shimmer{display: block;width: 100%;height: 100%;border-radius: inherit;background: linear-gradient(100deg, var(--ui-agc-shimmer) 35%, var(--ui-agc-shine) 50%, var(--ui-agc-shimmer) 65%) 0 0 / 300% 100%;animation: ui-agc-shimmer 1600ms linear infinite}.ui-agc__img[data-held]{box-shadow: 0 0 0 2px var(--ui-agc-c)}.ui-agc__handle{position: absolute;width: 10px;height: 10px;border-radius: 3px;background: #ffffff;box-shadow: 0 0 0 1.5px var(--ui-agc-c), 0 1px 3px rgba(0, 0, 0, 0.18);animation: ui-agc-fade 160ms ease both}.ui-agc__handle[data-at="tl"]{top: -5px;left: -5px}.ui-agc__handle[data-at="tr"]{top: -5px;right: -5px}.ui-agc__handle[data-at="bl"]{bottom: -5px;left: -5px}.ui-agc__handle[data-at="br"]{right: -5px;bottom: -5px}.ui-agc__size{position: absolute;bottom: 10px;left: 50%;translate: -50% 0;padding: 0 7px;border-radius: 6px;background: var(--ui-agc-c);font-size: 11.5px;font-weight: 600;line-height: 20px;color: #ffffff;white-space: nowrap;font-variant-numeric: tabular-nums;animation: ui-agc-fade 160ms ease both}.ui-agc__caption{margin-top: 8px;font-size: 12.5px;line-height: 18px;color: var(--ui-agc-muted)}.ui-agc__ins, .ui-agc__del{border-radius: 3px;outline: none;cursor: pointer;transition: background-color 160ms ease;-webkit-box-decoration-break: clone;box-decoration-break: clone}.ui-agc__ins{padding: 1px 0;background: color-mix(in srgb, var(--ui-agc-c) 12%, transparent);color: var(--ui-agc-ink);text-decoration: underline 1.5px var(--ui-agc-c);text-underline-offset: 4px;animation: ui-agc-in 300ms ease both}.ui-agc__del{color: var(--ui-agc-muted);text-decoration: line-through 1.5px var(--ui-agc-c)}.ui-agc__ins:hover, .ui-agc__ins[data-open], .ui-agc__ins:focus-visible{background: color-mix(in srgb, var(--ui-agc-c) 22%, transparent)}.ui-agc__del:hover, .ui-agc__del[data-open], .ui-agc__del:focus-visible{background: color-mix(in srgb, var(--ui-agc-c) 10%, transparent)}.ui-agc__marks{position: absolute;inset: 0;z-index: 0;pointer-events: none}.ui-agc__mark{position: absolute;border-radius: 3px;background: color-mix(in srgb, var(--ui-agc-c) 20%, transparent);animation: ui-agc-fade 220ms ease both;transition: opacity 220ms ease}.ui-agc__mark[data-dim]{opacity: 0.25}.ui-agc__notes{position: absolute;inset: 0;z-index: 4;pointer-events: none}.ui-agc__pin{position: absolute;width: 0;height: 0;pointer-events: auto;animation: ui-agc-fade 260ms ease both}.ui-agc__pin{--ui-agc-pin: 30px}.ui-agc__pin-box{position: absolute;top: calc(var(--ui-agc-pin) * -1);left: var(--ui-agc-pin-x, 0px);width: var(--ui-agc-pin);height: var(--ui-agc-pin);overflow: hidden;border-radius: 15px 15px 15px 3px;background: var(--ui-agc-flag);color: var(--ui-agc-flag-ink);box-shadow: 0 0 0 1px var(--ui-agc-flag-soft), 0 8px 20px -8px rgba(0, 0, 0, 0.45);transition: left 340ms var(--ui-agc-ease), width 340ms var(--ui-agc-ease), height 340ms var(--ui-agc-ease), border-radius 340ms var(--ui-agc-ease), box-shadow 340ms ease}.ui-agc__pin[data-up] .ui-agc__pin-box{top: auto;bottom: 0}.ui-agc__pin[data-open]{z-index: 1}.ui-agc__pin[data-open] .ui-agc__pin-box{width: var(--ui-agc-pin-w, 248px);height: var(--ui-agc-pin-h);border-radius: 14px;box-shadow: 0 0 0 1px var(--ui-agc-flag-soft), 0 16px 32px -14px rgba(0, 0, 0, 0.4)}.ui-agc__pin-mark{--ui-agc-ink: var(--ui-agc-flag-ink)}.ui-agc__pin-mark{position: absolute;z-index: 1;top: 7px;left: 7px;display: grid;place-items: center;width: 16px;height: 16px;transition: top 340ms var(--ui-agc-ease), left 340ms var(--ui-agc-ease), width 340ms var(--ui-agc-ease), height 340ms var(--ui-agc-ease);pointer-events: none}.ui-agc__pin-mark svg{width: 100%;height: 100%}.ui-agc__pin[data-open] .ui-agc__pin-mark{top: 11px;left: 12px;width: 14px;height: 14px}.ui-agc__pin-hit{position: absolute;inset: 0;z-index: 2;border-radius: inherit}.ui-agc__pin[data-open] .ui-agc__pin-hit{pointer-events: none}.ui-agc__pin-body{position: absolute;top: 0;left: 0;display: grid;gap: 4px;width: var(--ui-agc-pin-w, 248px);padding: 10px 10px 10px 12px;opacity: 0;transition: opacity 120ms ease}.ui-agc__pin[data-up] .ui-agc__pin-body{top: auto;bottom: 0}.ui-agc__pin[data-open] .ui-agc__pin-body{opacity: 1;transition: opacity 200ms ease 140ms}.ui-agc__pin-body .ui-agc__note-head{padding-left: 22px;color: color-mix(in srgb, var(--ui-agc-flag-ink) 50%, transparent)}.ui-agc__pin-body .ui-agc__note-head b{color: var(--ui-agc-flag-ink)}.ui-agc__pin-body .ui-agc__note-text{color: color-mix(in srgb, var(--ui-agc-flag-ink) 86%, transparent)}.ui-agc__note-head{display: flex;align-items: center;gap: 6px;font-size: 12px;line-height: 16px;color: var(--ui-agc-muted)}.ui-agc__note-head b{font-weight: 600;color: var(--ui-agc-ink)}.ui-agc__note-head > span:last-child{margin-left: auto}.ui-agc__note-text{margin: 0;font-size: 13px;line-height: 19px;color: var(--ui-agc-text)}.ui-agc__pin-actions{display: flex;gap: 6px;margin-top: 6px}.ui-agc__reply{flex: 1;min-width: 0;height: 30px;padding: 0 10px;border: 0;border-radius: 9px;background: var(--ui-agc-flag-soft);box-shadow: inset 0 0 0 1px var(--ui-agc-flag-soft);font: inherit;font-size: 13px;color: var(--ui-agc-flag-ink);outline: none}.ui-agc__reply::placeholder{color: color-mix(in srgb, var(--ui-agc-flag-ink) 45%, transparent)}.ui-agc__reply:focus-visible{box-shadow: 0 0 0 1px var(--ui-agc-ring), 0 0 0 3px color-mix(in srgb, var(--ui-agc-ring) 40%, transparent)}.ui-agc__resolve{display: grid;flex: none;place-items: center;width: 30px;height: 30px;border-radius: 9px;background: var(--ui-agc-flag-ink);color: var(--ui-agc-flag);transition: opacity 160ms ease}.ui-agc__resolve:hover{opacity: 0.86}.ui-agc__cursors{position: absolute;inset: 0;z-index: 3;pointer-events: none}.ui-agc__cursor-in{transition: opacity 260ms ease}.ui-agc__cursor{position: absolute;top: 0;left: 0;transition: transform var(--ui-agc-glide) var(--ui-agc-ease), opacity 260ms ease;will-change: transform}.ui-agc__cursor[data-typing]{transition: transform 110ms linear, opacity 260ms ease}.ui-agc__cursor[data-drag]{transition: opacity 260ms ease}.ui-agc__cursor[data-arrive]{transition: none;opacity: 0}.ui-agc__cursor:not([data-arrive]):not([data-gone]){animation: ui-agc-pop 300ms var(--ui-agc-ease) both}.ui-agc__cursor[data-gone]{opacity: 0}.ui-agc__cursor[data-dim]{opacity: 0.22}.ui-agc__cursor[data-gone][data-dim]{opacity: 0}.ui-agc__caret{position: absolute;top: 0;left: -1px;width: 2px;height: var(--ui-agc-h, 18px);border-radius: 1px;background: var(--ui-agc-c);animation: ui-agc-blink 1100ms steps(1, end) infinite}.ui-agc__cursor[data-typing] .ui-agc__caret{animation: none}.ui-agc__cursor[data-free] .ui-agc__caret{display: none}.ui-agc__arrow{position: absolute;z-index: 1;top: calc(var(--ui-agc-h, 18px) - 6px);left: 0;width: 19px;height: 23px;overflow: visible;filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.22))}.ui-agc__cursor[data-free] .ui-agc__arrow{top: -0.6px;left: -2.3px}.ui-agc__arrow{transform-origin: 2px 1px;transition: transform 140ms ease}.ui-agc__cursor[data-press] .ui-agc__arrow{transform: scale(0.82)}.ui-agc__arrow path{fill: var(--ui-agc-c);stroke: #ffffff;stroke-width: 1.4;paint-order: stroke}.ui-agc__flag{position: absolute;top: calc(var(--ui-agc-h, 18px) + 15px);left: calc(16px + var(--ui-agc-shift, 0px));display: grid;width: max-content;padding: 6px 10px 6px;border-bottom: 1px solid transparent;border-radius: 10px;background: linear-gradient(var(--ui-agc-flag), var(--ui-agc-flag)) padding-box, var(--ui-agc-edge) border-box;box-shadow: 0 8px 18px -8px rgba(255, 79, 163, 0.5), 6px 8px 18px -8px rgba(59, 139, 255, 0.5), 0 2px 6px -2px rgba(0, 0, 0, 0.3);font-size: 12px;font-weight: 600;line-height: 16px;color: var(--ui-agc-flag-ink);white-space: nowrap}.ui-agc__cursor[data-in-note] .ui-agc__flag{opacity: 0}.ui-agc__cursor[data-free] .ui-agc__flag{top: 21px;left: calc(14px + var(--ui-agc-shift, 0px))}.ui-agc__flag-row{display: flex;align-items: center;gap: 12px}.ui-agc__flag-tags{display: flex;gap: 4px;margin-left: auto}.ui-agc__flag-tag{padding: 0 5px;border-radius: 5px;background: var(--ui-agc-flag-soft);font-size: 10.5px;font-weight: 600;line-height: 16px;font-variant-numeric: tabular-nums}.ui-agc__flag-doing{display: block;max-height: 0;overflow: hidden;opacity: 0;transition: max-height 320ms var(--ui-agc-ease), opacity 200ms ease, margin-top 320ms var(--ui-agc-ease)}.ui-agc__flag-doing > span{display: block;width: max-content;font-size: 11.5px;font-weight: 500;white-space: nowrap}.ui-agc__flag-doing[data-on]{max-height: 18px;margin-top: 1px;opacity: 0.9}.ui-agc__cursor[data-dim] .ui-agc__flag-doing{max-height: 0;opacity: 0}.ui-agc__pop{position: absolute;z-index: 5;display: grid;gap: 6px;width: 260px;padding: 10px;border-radius: 14px;background: var(--ui-agc-card);box-shadow: 0 0 0 1px var(--ui-agc-line), 0 16px 32px -12px rgba(0, 0, 0, 0.22);animation: ui-agc-rise 180ms var(--ui-agc-ease) both}.ui-agc__pop-head{display: flex;align-items: center;gap: 6px;font-size: 12.5px;line-height: 18px;color: var(--ui-agc-muted)}.ui-agc__pop-head b{font-weight: 600;color: var(--ui-agc-ink)}.ui-agc__pop-mark{display: grid;flex: none;place-items: center;width: 14px;height: 14px}.ui-agc__pop-mark svg{width: 100%;height: 100%}.ui-agc__pop-note{margin: 0;font-size: 12.5px;line-height: 18px;color: var(--ui-agc-text)}.ui-agc__pop-actions{display: flex;justify-content: flex-end;gap: 6px;margin-top: 2px}.ui-agc__btn{display: inline-flex;align-items: center;height: 30px;padding: 0 12px;border-radius: 9px;background: var(--ui-agc-card);box-shadow: 0 0 0 1px var(--ui-agc-line), 0 1px 2px rgba(0, 0, 0, 0.04);font-size: 13px;font-weight: 500;color: var(--ui-agc-ink);transition: background-color 160ms ease, opacity 160ms ease}.ui-agc__btn:hover{background: var(--ui-agc-chip)}.ui-agc__btn--primary{background: var(--ui-agc-ink);box-shadow: none;color: var(--ui-agc-card)}.ui-agc__btn--primary:hover{background: var(--ui-agc-ink);opacity: 0.86}.ui-agc__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap}@keyframes ui-agc-blink{0%, 55%{opacity: 1}56%, 100%{opacity: 0}}@keyframes ui-agc-pop{from{opacity: 0;scale: 0.85}}@keyframes ui-agc-fade{from{opacity: 0}}@keyframes ui-agc-in{from{background-color: transparent}}@keyframes ui-agc-rise{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}@keyframes ui-agc-spin{to{transform: rotate(360deg)}}@keyframes ui-agc-shimmer{from{background-position: 100% 0}to{background-position: 0 0}}@media (max-width: 520px){.ui-agc__text{padding: 26px 22px 36px;font-size: 14px;line-height: 23px}.ui-agc__block--title{font-size: 20px;line-height: 26px}.ui-agc__sum{display: none}}@container agc (max-width: 480px){.ui-agc__bar{gap: 6px;padding: 0 8px 0 12px}.ui-agc__title{display: none}.ui-agc__doc{margin-right: auto}.ui-agc__face{width: 26px;height: 26px;margin-left: 2px}.ui-agc__all{padding: 0 9px;font-size: 12px}.ui-agc__text{padding: 24px 20px 32px}.ui-agc__flag{padding: 4px 8px 4px;border-radius: 8px;font-size: 11px;line-height: 14px}.ui-agc__flag-tag{padding: 0 4px;font-size: 10px;line-height: 14px}.ui-agc__flag-doing > span{font-size: 10.5px}.ui-agc__flag-row{gap: 8px}.ui-agc__table{font-size: 11.5px;line-height: 16px}.ui-agc__table :is(th, td){height: auto;padding: 8px 5px;white-space: normal;text-overflow: clip}.ui-agc__table :is(th, td):first-child{padding-left: 9px}.ui-agc__table th{font-size: 11px}.ui-agc__table th:first-child{width: 30%}.ui-agc__pill{display: inline-block;height: auto;min-height: 18px;padding: 1px 6px;font-size: 10.5px;line-height: 16px;white-space: normal}}@container agc (max-width: 340px){.ui-agc__text{padding-right: 12px;padding-left: 12px}.ui-agc__table{font-size: 11px}.ui-agc__table th:first-child{width: 28%}}@media (pointer: coarse){.ui-agc__face{width: 32px;height: 32px}.ui-agc__btn{height: 36px;padding: 0 14px}}@media (prefers-reduced-motion: reduce){.ui-agc *, .ui-agc *::before, .ui-agc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-agc{--ui-agc-card: #1f1f22;--ui-agc-tray: #161618;--ui-agc-ink: #ededed;--ui-agc-text: #c4c4c8;--ui-agc-muted: #7c7c82;--ui-agc-line: #2e2e33;--ui-agc-grid: #29292d;--ui-agc-stroke: #2c2c31;--ui-agc-chip: #2a2a2e;--ui-agc-shimmer: #29292d;--ui-agc-shine: #36363b;--ui-agc-code: rgba(255, 255, 255, 0.04);--ui-agc-ring: rgba(237, 237, 237, 0.3);--ui-agc-agent: #e4e4e7;--ui-agc-flag: #f4f4f5;--ui-agc-flag-ink: #141416;--ui-agc-flag-soft: rgba(0, 0, 0, 0.08)}:where(.dark, [data-theme="dark"]) .ui-agc__arrow path{stroke: #1f1f22}:where(.dark, [data-theme="dark"]) .ui-agc__handle{background: #1f1f22}`;
var p = () => (0, r.jsx)(`svg`, { viewBox: `0 0 1200 1200`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { fill: `#D97757`, d: `M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z` }) });
var m = () => (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, fill: `currentColor`, "aria-hidden": `true`, style: { color: `var(--ui-agc-ink, #000)` }, children: (0, r.jsx)(`path`, { d: `M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z` }) });
var h = () => {
  let e = `gm` + (0, n3.useId)().replace(/[^a-zA-Z0-9_-]/g, ``);
  return (0, r.jsxs)(`svg`, { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: [(0, r.jsx)(`defs`, { children: (0, r.jsxs)(`linearGradient`, { id: e, x1: `0`, y1: `24`, x2: `24`, y2: `0`, gradientUnits: `userSpaceOnUse`, children: [(0, r.jsx)(`stop`, { stopColor: `#1C7DFF` }), (0, r.jsx)(`stop`, { offset: `0.52`, stopColor: `#1C69FF` }), (0, r.jsx)(`stop`, { offset: `1`, stopColor: `#B04DFF` })] }) }), (0, r.jsx)(`path`, { fill: `url(#${e})`, d: `M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81` })] });
};
var g = () => (0, r.jsx)(`svg`, { viewBox: `-2 -2 29 29`, "aria-hidden": `true`, children: [[[0, 4], `#FFD800`], [[0, 1, 3, 4], `#FFAF00`], [[0, 1, 2, 3, 4], `#FF8205`], [[0, 2, 4], `#FA500F`], [[0, 4], `#E10500`]].flatMap(([e, t], n4) => e.map((e2) => (0, r.jsx)(`rect`, { x: e2 * 5, y: n4 * 5, width: `5`, height: `5`, fill: t }, `${e2}-${n4}`))) });
var _ = [{ id: `research`, name: `Researcher`, avatar: (0, r.jsx)(p, {}) }, { id: `designer`, name: `Designer`, avatar: (0, r.jsx)(h, {}) }, { id: `coder`, name: `Coder`, avatar: (0, r.jsx)(g, {}) }, { id: `writer`, name: `Writer`, avatar: (0, r.jsx)(m, {}) }];
var v = [{ id: `title`, kind: `title`, text: `Pulse 2.0 \u2013 launch brief` }, { id: `why`, text: `Teams lose about 40% of their week to status updates. Pulse turns that work into a short daily brief, so nobody has to write one.` }, { id: `hero`, kind: `image`, loading: true, width: 0.5, float: `left`, alt: `Hero image, still rendering` }, { id: `beside`, text: `The hero is the brief itself: one calm screen a team lead reads on Monday morning. Short, current and written from the work, so the week starts without a status meeting.` }, { id: `h-roll`, kind: `heading`, text: `Rollout` }, { id: `code`, kind: `code`, text: `const rollout = {
  waitlist: "Nov 3",
  everyone: "second week of November",
};` }, { id: `ship`, text: `Launch week: one short post, a demo video and an email to the waitlist.` }, { id: `h-what`, kind: `heading`, text: `What ships` }, { id: `i1`, kind: `item`, text: `Daily briefs for every project, written from the work itself` }, { id: `i2`, kind: `item`, text: `Nudges when a task has been quiet for too long` }];
var y = { research: 0.011, designer: 0.016, coder: 8e-3, writer: 6e-3, planner: 0.012, analyst: 9e-3, ops: 7e-3, reviewer: 5e-3 };
var b = { blocks: v, suggestions: [], comments: [{ id: `n0`, agent: `coder`, block: `code`, x: 0.025, y: 12, text: `Should waitlist and everyone share one date format? I'd use "Nov 3" everywhere.` }], cursors: {} };
var x = (e, t) => v.find((t2) => t2.id === e).text.indexOf(t);
var S = (e, t) => (n4) => ({ ...n4, cursors: { ...n4.cursors, [e]: t } });
var ee = (e, t) => (n4) => ({ ...n4, blocks: n4.blocks.map((n5) => n5.id === e ? { ...n5, ...t } : n5) });
var C = (e, t, n4, r2, i2, a2) => [[e, (e2) => ({ ...e2, suggestions: [...e2.suggestions, { ...n4, agent: t, insert: `` }], cursors: { ...e2.cursors, [t]: { block: n4.block, at: 0, in: n4.id, doing: i2, typing: true } } })], ...[...r2].map((o2, s2) => [e + 260 + s2 * a2, (e2) => e2.suggestions.some((e3) => e3.id === n4.id) ? { ...e2, suggestions: e2.suggestions.map((e3) => e3.id === n4.id ? { ...e3, insert: r2.slice(0, s2 + 1) } : e3), cursors: { ...e2.cursors, [t]: { block: n4.block, at: s2 + 1, in: n4.id, doing: i2, typing: true } } } : e2])];
var w = (e, t, n4, r2, i2, a2, o2) => [[e, (e2) => ({ ...e2, comments: [...e2.comments, { id: n4, agent: t, ...r2, text: ``, open: true }], cursors: { ...e2.cursors, [t]: { block: n4, at: 0, doing: a2, typing: true } } })], ...[...i2].map((r3, s2) => [e + 360 + s2 * o2, (e2) => ({ ...e2, comments: e2.comments.map((e3) => e3.id === n4 ? { ...e3, text: i2.slice(0, s2 + 1) } : e3), cursors: { ...e2.cursors, [t]: { block: n4, at: s2 + 1, doing: a2, typing: true } } })])];
var T = `second week of November`;
var E = `Q3 survey of 1,240 teams: 38%, not 40%.`;
var D = [[400, S(`research`, { block: `why`, at: x(`why`, `about 40%`), doing: `Checking the numbers` })], [650, S(`designer`, { block: `hero`, doing: `Waiting for the render` })], [900, S(`coder`, { block: `code`, at: x(`code`, T), doing: `Reading the config` })], [1150, S(`writer`, { block: `title`, at: x(`title`, `brief`), doing: `Reading the brief` })], [1600, S(`research`, { block: `why`, at: x(`why`, `about 40%`), select: 9, doing: `Checking the numbers` })], [2e3, S(`coder`, { block: `code`, at: x(`code`, T), select: 23, doing: `Fixing the date` })], [2700, S(`designer`, { block: `hero`, point: `corner`, doing: `Resizing the hero` })], [3200, S(`designer`, { block: `hero`, point: `corner`, select: 1, doing: `Resizing the hero` })], [3550, ee(`hero`, { width: 0.36 })], [4300, S(`designer`, { block: `hero`, doing: `Looks right` })], ...C(2600, `research`, { id: `r1`, block: `why`, at: x(`why`, `about 40%`), remove: 9, note: `Q3 survey of 1,240 teams` }, `38%`, `Fixing the number`, 170), ...C(3300, `coder`, { id: `c1`, block: `code`, at: x(`code`, T), remove: 23, note: `Matches the launch calendar` }, `Nov 10`, `Fixing the date`, 120), [2400, S(`writer`, { block: `title`, at: x(`title`, `brief`), select: 5, doing: `Finding a sharper title` })], ...C(4200, `writer`, { id: `w1`, block: `title`, at: x(`title`, `brief`), remove: 5, note: `It's a plan with dates now, not a brief` }, `plan`, `Renaming`, 120), ...w(5400, `research`, `n1`, { block: `why`, x: 0.025, y: 12 }, E, `Adding the source`, 36), [8064, (e) => ({ ...e, comments: e.comments.map((e2) => e2.id === `n1` ? { ...e2, open: false } : e2) })], [5600, S(`designer`, null)], [6300, S(`coder`, { block: `code`, at: x(`code`, `waitlist`), doing: `Checking the rest` })], [8300, S(`research`, { block: `why`, at: x(`why`, `daily brief`), doing: `Done` })], [8600, S(`coder`, null)], [9600, S(`research`, null)], [5150, S(`writer`, null)]];
var O = 7600;
var te = 12800;
var ne = 1600;
var k = [{ id: `planner`, name: `Planner`, avatar: (0, r.jsx)(h, {}) }, { id: `analyst`, name: `Analyst`, avatar: (0, r.jsx)(p, {}) }, { id: `ops`, name: `Ops`, avatar: (0, r.jsx)(g, {}) }, { id: `reviewer`, name: `Reviewer`, avatar: (0, r.jsx)(m, {}) }];
var A = (e, t) => t.map((t2, n4) => typeof t2 == `string` ? { id: `t-${e}-${n4}`, text: t2 } : { id: `t-${e}-${n4}`, text: t2[0], tone: t2[1] });
var re = [{ id: `t-title`, kind: `title`, text: `Pulse 2.0 \u2013 launch tasks` }, { id: `tasks`, kind: `table`, addRow: true, rows: [A(0, [`Task`, `Owner`, `Due`, `Status`]), A(1, [`Write the launch post`, `Writer`, `Nov 3`, [`Doing`, `blue`]]), A(2, [`Record the demo video`, `Designer`, `Nov 5`, [`To do`, `gray`]]), A(3, [`Email the waitlist`, `Ops`, `Nov 12`, [`To do`, `gray`]]), A(4, [`Live Q&A`, `\u2014`, `Nov 14`, [`Idea`, `amber`]])] }];
var ie = (e, t) => (n4) => ({ ...n4, blocks: n4.blocks.map((n5) => n5.id === `tasks` ? { ...n5, rows: [...n5.rows ?? [], t.map((t2, n6) => ({ id: `t-${e}-${n6}`, text: ``, tone: t2 }))] } : n5) });
var ae = (e, t) => (n4) => ({ ...n4, blocks: n4.blocks.map((n5) => n5.rows ? { ...n5, rows: n5.rows.map((n6) => n6.map((n7) => n7.id === e ? { ...n7, text: t } : n7)) } : n5) });
var j = (e, t, n4, r2, i2) => {
  let a2 = (e2) => S(t, { block: `tasks:add`, at: 0, doing: `Adding a task`, press: e2 || void 0 }), o2 = [[e, a2(false)], [e + 650, a2(true)], [e + 800, (e2) => ie(n4, [void 0, void 0, void 0, `gray`])(a2(false)(e2))]], s2 = e + 1300;
  return r2.forEach((e2, r3) => {
    let a3 = `t-${n4}-${r3}`;
    o2.push([s2, S(t, { block: a3, at: 0, doing: `Adding a task`, typing: true })]), [...e2].forEach((n5, r4) => o2.push([s2 + 120 + r4 * i2, (n6) => ({ ...ae(a3, e2.slice(0, r4 + 1))(n6), cursors: { ...n6.cursors, [t]: { block: a3, at: r4 + 1, doing: `Adding a task`, typing: true } } })])), s2 += 120 + e2.length * i2 + 260;
  }), o2.push([s2, S(t, { block: `t-${n4}-0`, at: 0, doing: `Done` })]), o2;
};
var oe = { blocks: re, suggestions: [], comments: [], cursors: {} };
var M = [[400, S(`planner`, { block: `t-3-2`, at: 0, doing: `Checking the dates` })], [650, S(`analyst`, { block: `t-4-1`, at: 0, doing: `Finding an owner` })], [900, S(`ops`, { block: `t-2-3`, at: 0, doing: `Updating the status` })], [1150, S(`reviewer`, { block: `t-1-0`, at: 6, doing: `Reading the tasks` })], [1600, S(`planner`, { block: `t-3-2`, at: 0, select: 6, doing: `Fixing the date` })], [1900, S(`analyst`, { block: `t-4-1`, at: 0, select: 1, doing: `Finding an owner` })], [2200, S(`ops`, { block: `t-2-3`, at: 0, select: 5, doing: `Updating the status` })], ...C(2500, `planner`, { id: `p1`, block: `t-3-2`, at: 0, remove: 6, note: `Matches the rollout config` }, `Nov 10`, `Fixing the date`, 120), ...C(3e3, `analyst`, { id: `a1`, block: `t-4-1`, at: 0, remove: 1, note: `Maya ran the last two` }, `Maya`, `Assigning`, 110), ...C(3500, `ops`, { id: `o1`, block: `t-2-3`, at: 0, remove: 5, note: `The shoot is booked for Tuesday` }, `Doing`, `Updating the status`, 110), ...w(3600, `reviewer`, `q1`, { block: `t-1-0`, at: 6 }, `Draft is in \u2013 ready for review today.`, `Leaving a note`, 38), [6304, (e) => ({ ...e, comments: e.comments.map((e2) => e2.id === `q1` ? { ...e2, open: false } : e2) })], ...j(4900, `analyst`, 5, [`Press kit`, `Designer`, `Nov 8`, `To do`], 55), [6300, S(`planner`, { block: `t-4-2`, at: 0, doing: `Checking the Q&A date` })], ...j(7200, `planner`, 6, [`Partner email`, `Ops`, `Nov 11`, `To do`], 50), [7e3, S(`ops`, null)], [6200, S(`reviewer`, { block: `t-2-0`, at: 7, doing: `Reading on` })], [9e3, S(`reviewer`, null)], [10200, S(`analyst`, null)], [12200, S(`planner`, null)]];
var N = { doc: { agents: _, start: b, script: D, accept: `r1` }, table: { agents: k, start: oe, script: M, accept: `p1` } };
var P = [{ id: `doc`, label: `Doc` }, { id: `table`, label: `Table` }];
function F() {
  let [e, t] = (0, n3.useState)(`doc`), a2 = N[e], [o2, s2] = (0, n3.useState)(b), [c2, l2] = (0, n3.useState)(0), u2 = (0, n3.useRef)(false), [f2, p2] = (0, n3.useState)({}), m2 = (0, n3.useRef)(o2.cursors);
  m2.current = o2.cursors, (0, n3.useEffect)(() => {
    let e2 = window.setInterval(() => {
      p2((e3) => {
        let t2 = { ...e3 };
        for (let e4 of [..._, ...k]) {
          let n4 = m2.current[e4.id];
          if (!n4) continue;
          let r2 = t2[e4.id] ?? { cost: 0.04 + Math.random() * 0.1 };
          t2[e4.id] = { cost: r2.cost + y[e4.id] * (n4.typing ? 1.8 : 1) };
        }
        return t2;
      });
    }, 500);
    return () => window.clearInterval(e2);
  }, []), (0, n3.useEffect)(() => {
    let { script: t2, accept: n4, start: r2 } = N[e], a3 = t2.map(([e2, t3]) => window.setTimeout(() => s2((e3) => t3(e3)), e2));
    return a3.push(window.setTimeout(() => {
      u2.current || s2((e2) => e2.suggestions.some((e3) => e3.id === n4) ? { ...e2, ...i(e2.blocks, e2.suggestions, n4) } : e2);
    }, O), window.setTimeout(() => {
      u2.current || (s2((e2) => ({ ...e2, cursors: {} })), a3.push(window.setTimeout(() => {
        s2(r2), p2({}), l2((e2) => e2 + 1);
      }, ne)));
    }, te)), () => a3.forEach((e2) => window.clearTimeout(e2));
  }, [c2, e]);
  let h2 = (n4) => {
    n4 !== e && n4 in N && (u2.current = false, s2(N[n4].start), p2({}), t(n4));
  }, g2 = (e2, t2) => {
    u2.current = true, s2((n4) => t2 ? { ...n4, ...i(n4.blocks, n4.suggestions, e2.id) } : { ...n4, suggestions: n4.suggestions.filter((t3) => t3.id !== e2.id) });
  };
  return (0, r.jsx)(`div`, { className: `agc-demo`, children: (0, r.jsx)(d, { title: `Product / Launches`, tabs: P, tab: e, onTabChange: h2, agents: a2.agents.map((e2) => ({ ...e2, ...f2[e2.id] })), blocks: o2.blocks, suggestions: o2.suggestions, comments: o2.comments, cursors: o2.cursors, height: 620, onResolveComment: (e2) => {
    u2.current = true, s2((t2) => ({ ...t2, comments: t2.comments.filter((t3) => t3.id !== e2.id) }));
  }, onReply: () => {
    u2.current = true;
  }, onAccept: (e2) => g2(e2, true), onReject: (e2) => g2(e2, false), onAcceptAll: () => {
    u2.current = true, s2((e2) => e2.suggestions.reduce((e3, t2) => ({ ...e3, ...i(e3.blocks, e3.suggestions, t2.id) }), e2));
  } }) });
}

export {
  F
};
