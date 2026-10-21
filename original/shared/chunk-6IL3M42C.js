import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-CEgv5bR9.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e) => 1 - (1 - e) ** 4;
var a = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
var o = (e) => new Promise((t) => window.setTimeout(t, e));
var s = () => (/* @__PURE__ */ new Date()).toLocaleDateString(`en-US`, { month: `short`, day: `numeric` });
var c = () => `m-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
var l = (e) => {
  e && (e.style.height = `auto`, e.style.height = `${e.scrollHeight}px`);
};
function u(e, t) {
  let [r2, o2] = (0, n3.useState)(e), s2 = (0, n3.useRef)(e), c2 = JSON.stringify(e);
  return (0, n3.useEffect)(() => {
    let e2 = JSON.parse(c2), n4 = { ...s2.current };
    if (a() || Object.keys(e2).every((t2) => n4[t2] === e2[t2])) {
      s2.current = e2, o2(e2);
      return;
    }
    let r3 = performance.now(), l2 = 0, u2 = (a2) => {
      let c3 = Math.min(1, (a2 - r3) / t), d2 = i(c3), f2 = {};
      for (let t2 in e2) f2[t2] = (n4[t2] ?? e2[t2]) + (e2[t2] - (n4[t2] ?? e2[t2])) * d2;
      s2.current = f2, o2(f2), c3 < 1 && (l2 = requestAnimationFrame(u2));
    };
    return l2 = requestAnimationFrame(u2), () => cancelAnimationFrame(l2);
  }, [c2, t]), r2;
}
function d({ id: e, children: t }) {
  let i2 = (0, n3.useRef)({ id: e, node: t }), [a2, o2] = (0, n3.useState)(e), [s2, c2] = (0, n3.useState)(null);
  return a2 !== e && (o2(e), c2(i2.current)), i2.current = { id: e, node: t }, (0, n3.useEffect)(() => {
    if (!s2) return;
    let e2 = window.setTimeout(() => c2(null), 260);
    return () => window.clearTimeout(e2);
  }, [s2]), (0, r.jsxs)(`span`, { className: `ui-mp__swap`, children: [s2 && (0, r.jsx)(`span`, { className: `ui-mp__swap-item`, "data-out": ``, "aria-hidden": `true`, children: s2.node }, `out-${s2.id}`), (0, r.jsx)(`span`, { className: `ui-mp__swap-item`, children: t }, e)] });
}
var f = { stroke: `currentColor`, strokeWidth: 1.4, strokeLinecap: `round`, strokeLinejoin: `round` };
var p = ({ children: e, size: t = 14 }) => (0, r.jsx)(`svg`, { width: t, height: t, viewBox: `0 0 14 14`, fill: `none`, "aria-hidden": `true`, children: e });
var ee = () => (0, r.jsx)(p, { children: (0, r.jsx)(`path`, { d: `M8.6 3.1 10.9 5.4M2.8 11.2l.5-2.6 6-6a1.2 1.2 0 0 1 1.7 0l.6.6a1.2 1.2 0 0 1 0 1.7l-6 6-2.8.3Z`, ...f }) });
var te = () => (0, r.jsx)(p, { children: (0, r.jsx)(`path`, { d: `M5.3 3.8v6.4M8.7 3.8v6.4`, ...f, strokeWidth: 1.6 }) });
var ne = () => (0, r.jsx)(p, { children: (0, r.jsx)(`path`, { d: `M4.8 3.6v6.8a.4.4 0 0 0 .6.3l5.2-3.4a.4.4 0 0 0 0-.6L5.4 3.3a.4.4 0 0 0-.6.3Z`, ...f }) });
var re = () => (0, r.jsx)(p, { children: (0, r.jsx)(`path`, { d: `M2.8 4.2h8.4M5.6 4.2V3a.8.8 0 0 1 .8-.8h1.2a.8.8 0 0 1 .8.8v1.2M3.9 4.2l.5 6.6a1 1 0 0 0 1 .9h3.2a1 1 0 0 0 1-.9l.5-6.6`, ...f }) });
var ie = () => (0, r.jsx)(p, { size: 12, children: (0, r.jsx)(`path`, { d: `M4.6 2.8 2.4 5l2.2 2.2M2.6 5h5.6a3.2 3.2 0 0 1 0 6.4H6`, ...f }) });
var ae = () => (0, r.jsx)(p, { children: (0, r.jsx)(`path`, { d: `M7 3v8M3 7h8`, ...f }) });
var m = () => (0, r.jsxs)(p, { children: [(0, r.jsx)(`circle`, { cx: `6.2`, cy: `6.2`, r: `3.6`, ...f }), (0, r.jsx)(`path`, { d: `m8.9 8.9 2.4 2.4`, ...f })] });
var oe = () => (0, r.jsx)(p, { size: 12, children: (0, r.jsx)(`path`, { d: `m4 4 6 6m0-6-6 6`, ...f }) });
var se = () => (0, r.jsxs)(p, { children: [(0, r.jsx)(`circle`, { cx: `7`, cy: `7`, r: `5.2`, ...f }), (0, r.jsx)(`path`, { d: `M7 6.4v3M7 4.6v.01`, ...f, strokeWidth: 1.6 })] });
var ce = () => (0, r.jsx)(p, { size: 12, children: (0, r.jsx)(`path`, { d: `M2.5 7h8M7.5 4l3 3-3 3`, ...f }) });
function le({ memories: e, onChange: t, onAdd: i2, onEdit: f2, onPause: p2, onForget: le2, onRestore: de2, enabled: fe2, defaultEnabled: pe = true, onEnabledChange: me, categories: he, title: ge = `Memory`, maxHeight: _e = 360, undoFor: ve = 5e3, addedSource: ye = `You added`, action: h, className: be }) {
  let g = (0, n3.useId)(), _ = (0, n3.useRef)(null), xe = (0, n3.useRef)(null), [Se, Ce] = (0, n3.useState)(e), v = t ? e : Se, y = (0, n3.useRef)(v);
  y.current = v;
  let b = (e2) => {
    y.current = e2, t || Ce(e2), t?.(e2);
  }, [we, Te] = (0, n3.useState)(pe), x = fe2 ?? we, Ee = (e2) => {
    Te(e2), me?.(e2);
  }, [S, De] = (0, n3.useState)({}), [C, w] = (0, n3.useState)({}), [T, E] = (0, n3.useState)(null), [D, Oe] = (0, n3.useState)(false), [O, k] = (0, n3.useState)(``), [ke, A] = (0, n3.useState)(null), [j, M] = (0, n3.useState)(null), [Ae, je] = (0, n3.useState)(``), [N, P] = (0, n3.useState)(false), [F, I] = (0, n3.useState)(``), [Me, L] = (0, n3.useState)(null), [R, z] = (0, n3.useState)(null), B = (0, n3.useRef)(null), V = (0, n3.useRef)(true);
  (0, n3.useEffect)(() => (V.current = true, () => {
    V.current = false;
  }), []), (0, n3.useEffect)(() => {
    if (!Object.keys(C).length) return;
    let e2 = 0, t2 = requestAnimationFrame(() => {
      e2 = requestAnimationFrame(() => w({}));
    });
    return () => {
      cancelAnimationFrame(t2), cancelAnimationFrame(e2);
    };
  }, [C]), (0, n3.useEffect)(() => {
    if (Object.keys(C).length || !B.current) return;
    let e2 = B.current;
    B.current = null;
    let t2 = window.setTimeout(() => {
      let t3 = xe.current, n4 = t3?.querySelector(`[data-memory="${CSS.escape(e2)}"]`);
      if (!t3 || !n4) return;
      let r2 = n4.offsetTop - t3.offsetTop;
      (r2 < t3.scrollTop || r2 + n4.offsetHeight > t3.scrollTop + t3.clientHeight) && t3.scrollTo({ top: r2 - 8, behavior: a() ? `auto` : `smooth` });
    }, 120);
    return () => window.clearTimeout(t2);
  }, [C]), (0, n3.useEffect)(() => {
    if (!R) return;
    let e2 = window.setTimeout(() => z(null), ve);
    return () => window.clearTimeout(e2);
  }, [R, ve]);
  let H = [...he ?? []];
  for (let e2 of v) H.includes(e2.category) || H.push(e2.category);
  let U = v.filter((e2) => !S[e2.id]), W = U.filter((e2) => e2.paused).length, G = O.trim().toLowerCase(), K = (e2) => (!T || e2.category === T) && (!G || e2.text.toLowerCase().includes(G) || e2.category.toLowerCase().includes(G)), Ne = (e2) => K(e2) && !S[e2.id] && !C[e2.id], Pe = v.some((e2) => K(e2) && !S[e2.id]), q = v.find((e2) => e2.id === ke) ?? null, Fe = u({ total: U.length, paused: W }, 520), J = Math.round(Fe.total ?? U.length), Ie = Math.round(Fe.paused ?? W), Le = async (e2) => {
    if (S[e2.id] || (j === e2.id && M(null), A(null), De((t3) => ({ ...t3, [e2.id]: true })), a() || await o(320), !V.current)) return;
    let t2 = y.current.findIndex((t3) => t3.id === e2.id);
    b(y.current.filter((t3) => t3.id !== e2.id)), le2?.(e2.id), De(({ [e2.id]: t3, ...n4 }) => n4), z({ memory: e2, index: t2, key: Date.now() });
  }, Re = () => {
    if (!R) return;
    let { memory: e2, index: t2 } = R, n4 = [...y.current];
    n4.splice(Math.max(0, Math.min(t2, n4.length)), 0, e2), w({ [e2.id]: true }), B.current = e2.id, T && T !== e2.category && E(null), b(n4), de2?.(e2), z(null);
  }, ze = (e2) => {
    b(y.current.map((t2) => t2.id === e2.id ? { ...t2, paused: !t2.paused } : t2)), p2?.(e2.id, !e2.paused);
  }, Be = (e2) => {
    P(false), je(e2.text), M(e2.id);
  }, Ve = () => {
    let e2 = j, t2 = Ae.trim().replace(/\s+/g, ` `);
    if (M(null), !e2) return;
    let n4 = y.current.find((t3) => t3.id === e2);
    n4 && t2 && t2 !== n4.text && (b(y.current.map((n5) => n5.id === e2 ? { ...n5, text: t2 } : n5)), f2?.(e2, t2), window.requestAnimationFrame(() => _.current?.querySelector(`[data-memory="${CSS.escape(e2)}"] [data-act="edit"]`)?.focus({ preventScroll: true })));
  }, He = () => {
    let e2 = j;
    M(null), e2 && window.requestAnimationFrame(() => _.current?.querySelector(`[data-memory="${CSS.escape(e2)}"] [data-act="edit"]`)?.focus({ preventScroll: true }));
  }, Y = Me ?? T ?? H[0] ?? `General`, Ue = () => {
    M(null), I(``), L(T ?? H[0] ?? `General`), P(true);
  }, X = () => {
    P(false), window.requestAnimationFrame(() => _.current?.querySelector(`.ui-mp__add`)?.focus({ preventScroll: true }));
  }, We = () => {
    let e2 = F.trim().replace(/\s+/g, ` `);
    if (!e2) return;
    let t2 = { id: c(), text: e2, category: Y, source: ye, date: s() };
    w({ [t2.id]: true }), B.current = t2.id, T && T !== t2.category && E(null), G && k(``), b([...y.current, t2]), i2?.(t2), I(``), X();
  }, Ge = () => {
    Oe(false), k(``), window.requestAnimationFrame(() => _.current?.querySelector(`.ui-mp__search-open`)?.focus({ preventScroll: true }));
  }, Z = [null, ...H.filter((e2) => v.some((t2) => t2.category === e2))], Ke = (e2) => {
    if (![`ArrowRight`, `ArrowLeft`, `ArrowDown`, `ArrowUp`, `Home`, `End`].includes(e2.key)) return;
    e2.preventDefault();
    let t2 = Z.indexOf(T), n4 = e2.key === `Home` ? 0 : e2.key === `End` ? Z.length - 1 : (t2 + (e2.key === `ArrowRight` || e2.key === `ArrowDown` ? 1 : -1) + Z.length) % Z.length;
    E(Z[n4]);
    let r2 = e2.currentTarget.querySelectorAll(`[role='radio']`);
    r2[n4]?.focus(), r2[n4]?.scrollIntoView({ block: `nearest`, inline: `nearest` });
  }, Q = (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`b`, { children: J }), ` `, J === 1 ? `memory` : `memories`, (Ie > 0 || W > 0) && (0, r.jsxs)(r.Fragment, { children: [` \xB7 `, Ie, ` paused`] })] }), $ = `rest`;
  return R ? (Q = (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)(`span`, { className: `ui-mp__forgot`, children: [(0, r.jsx)(`span`, { className: `ui-mp__flat`, children: `Forgot \u201C` }), (0, r.jsx)(`b`, { className: `ui-mp__quote`, children: R.memory.text }), (0, r.jsx)(`span`, { className: `ui-mp__flat`, children: `\u201D` })] }) }), $ = `forgot-${R.key}`) : j ? (Q = `Enter to save \xB7 Esc to cancel`, $ = `editing`) : N ? (Q = `Pick a category \xB7 Enter to save`, $ = `adding`) : q ? (Q = (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`b`, { children: q.category }), ` \xB7`, ` `, x ? q.paused ? `paused, not used in answers` : `used in answers` : `memory is off`] }), $ = `hot-${q.id}-${+!!q.paused}-${+!!x}`) : x || (Q = `Memory is off`, $ = `off`), (0, r.jsxs)(`div`, { ref: _, className: [`ui-mp`, be].filter(Boolean).join(` `), role: `group`, "aria-labelledby": `${g}-title`, "data-off": x ? void 0 : ``, style: { "--ui-mp-max": `${_e}px` }, children: [(0, r.jsx)(`style`, { href: `ui-memory-panel`, precedence: `default`, children: ue }), (0, r.jsxs)(`div`, { className: `ui-mp__card`, children: [(0, r.jsxs)(`div`, { className: `ui-mp__head`, children: [(0, r.jsx)(`span`, { id: `${g}-title`, className: `ui-mp__title`, children: ge }), (0, r.jsx)(`span`, { className: `ui-mp__count`, "aria-hidden": `true`, children: J }), (0, r.jsxs)(`button`, { type: `button`, role: `switch`, "aria-checked": x, "aria-controls": `${g}-note`, className: `ui-mp__switch`, onClick: () => Ee(!x), children: [(0, r.jsx)(`span`, { className: `ui-mp__switch-label`, children: `Use memory` }), (0, r.jsx)(`span`, { className: `ui-mp__track`, "aria-hidden": `true`, children: (0, r.jsx)(`span`, { className: `ui-mp__knob` }) })] })] }), (0, r.jsx)(`div`, { id: `${g}-note`, className: `ui-mp__fold`, "data-open": x ? void 0 : ``, inert: x, children: (0, r.jsx)(`div`, { className: `ui-mp__clip`, children: (0, r.jsxs)(`p`, { className: `ui-mp__note`, children: [(0, r.jsx)(se, {}), (0, r.jsx)(`span`, { children: `The assistant won't use or save memories in new chats. Nothing here is deleted.` })] }) }) }), (0, r.jsxs)(`div`, { className: `ui-mp__filters`, "data-searching": D ? `` : void 0, children: [(0, r.jsx)(`div`, { className: `ui-mp__chips`, role: `radiogroup`, "aria-label": `Category`, inert: D, onKeyDown: Ke, children: Z.map((e2) => {
    let t2 = U.filter((t3) => !e2 || t3.category === e2).length, n4 = T === e2;
    return (0, r.jsxs)(`button`, { type: `button`, role: `radio`, "aria-checked": n4, tabIndex: n4 ? 0 : -1, className: `ui-mp__chip`, "data-linked": e2 && q?.category === e2 ? `` : void 0, onClick: () => E(e2), children: [e2 ?? `All`, (0, r.jsx)(`span`, { className: `ui-mp__chip-count`, children: t2 })] }, e2 ?? `#all`);
  }) }), (0, r.jsxs)(`div`, { className: `ui-mp__search`, inert: !D, children: [(0, r.jsx)(m, {}), (0, r.jsx)(`input`, { className: `ui-mp__input`, type: `text`, value: O, placeholder: `Search memories`, "aria-label": `Search memories`, onChange: (e2) => k(e2.target.value), onKeyDown: (e2) => {
    e2.key === `Escape` && (e2.stopPropagation(), Ge());
  }, ref: (e2) => {
    e2 && D && document.activeElement !== e2 && !e2.dataset.focused && (e2.dataset.focused = `1`, e2.focus({ preventScroll: true })), e2 && !D && delete e2.dataset.focused;
  } }), (0, r.jsx)(`button`, { type: `button`, className: `ui-mp__icon`, "aria-label": `Close search`, onClick: Ge, children: (0, r.jsx)(oe, {}) })] }), (0, r.jsx)(`button`, { type: `button`, className: `ui-mp__icon ui-mp__search-open`, "aria-label": `Search memories`, "aria-expanded": D, inert: D, onClick: () => {
    E(null), Oe(true);
  }, children: (0, r.jsx)(m, {}) })] }), (0, r.jsxs)(`div`, { ref: xe, className: `ui-mp__list`, onPointerLeave: () => A(null), children: [H.map((e2) => {
    let t2 = v.filter((t3) => t3.category === e2);
    if (!t2.length) return null;
    let n4 = t2.some((e3) => K(e3) && !S[e3.id]);
    return (0, r.jsx)(`section`, { className: `ui-mp__fold`, "data-open": n4 ? `` : void 0, inert: !n4, "aria-label": e2, children: (0, r.jsxs)(`div`, { className: `ui-mp__clip`, children: [(0, r.jsx)(`h3`, { className: `ui-mp__group`, children: e2 }), (0, r.jsx)(`ul`, { className: `ui-mp__items`, children: t2.map((e3) => {
      let t3 = j === e3.id, n5 = Ne(e3);
      return (0, r.jsx)(`li`, { className: `ui-mp__fold ui-mp__fold--row`, "data-open": n5 ? `` : void 0, "data-leaving": S[e3.id] ? `` : void 0, inert: !n5, children: (0, r.jsx)(`div`, { className: `ui-mp__clip`, children: (0, r.jsxs)(`div`, { className: `ui-mp__item`, "data-memory": e3.id, "data-paused": e3.paused ? `` : void 0, "data-hot": ke === e3.id ? `` : void 0, "data-editing": t3 ? `` : void 0, onPointerEnter: (t4) => t4.pointerType === `mouse` && A(e3.id), onFocus: () => A(e3.id), onBlur: (e4) => {
        e4.currentTarget.contains(e4.relatedTarget) || A(null);
      }, children: [t3 ? (0, r.jsx)(`textarea`, { className: `ui-mp__edit`, value: Ae, rows: 1, "aria-label": `Edit memory`, ref: (e4) => {
        l(e4), e4 && !e4.dataset.focused && (e4.dataset.focused = `1`, e4.focus({ preventScroll: true }), e4.setSelectionRange(e4.value.length, e4.value.length));
      }, onChange: (e4) => {
        je(e4.target.value), l(e4.target);
      }, onKeyDown: (e4) => {
        e4.key === `Enter` && !e4.shiftKey ? (e4.preventDefault(), Ve()) : e4.key === `Escape` && (e4.stopPropagation(), He());
      } }) : (0, r.jsx)(`p`, { className: `ui-mp__text`, children: e3.text }), (0, r.jsxs)(`div`, { className: `ui-mp__meta`, children: [(0, r.jsx)(`span`, { className: `ui-mp__source`, children: [e3.source, e3.date].filter(Boolean).join(` \xB7 `) }), (0, r.jsx)(`span`, { className: `ui-mp__tag`, "data-on": e3.paused ? `` : void 0, "aria-hidden": !e3.paused, children: `Paused` }), t3 ? (0, r.jsxs)(`span`, { className: `ui-mp__acts ui-mp__acts--edit`, children: [(0, r.jsx)(`button`, { type: `button`, className: `ui-mp__text-btn`, onClick: He, children: `Cancel` }), (0, r.jsx)(`button`, { type: `button`, className: `ui-mp__text-btn ui-mp__text-btn--main`, onClick: Ve, children: `Save` })] }) : (0, r.jsxs)(`span`, { className: `ui-mp__acts`, children: [(0, r.jsx)(`button`, { type: `button`, className: `ui-mp__icon`, "data-act": `edit`, "aria-label": `Edit \u201C${e3.text}\u201D`, title: `Edit`, onClick: () => Be(e3), children: (0, r.jsx)(ee, {}) }), (0, r.jsx)(`button`, { type: `button`, className: `ui-mp__icon`, "data-act": `pause`, "aria-label": `${e3.paused ? `Resume` : `Pause`} \u201C${e3.text}\u201D`, title: e3.paused ? `Resume` : `Pause`, onClick: () => ze(e3), children: (0, r.jsx)(`span`, { className: `ui-mp__icon-swap`, children: e3.paused ? (0, r.jsx)(ne, {}) : (0, r.jsx)(te, {}) }, e3.paused ? `play` : `pause`) }), (0, r.jsx)(`button`, { type: `button`, className: `ui-mp__icon ui-mp__icon--forget`, "data-act": `forget`, "aria-label": `Forget \u201C${e3.text}\u201D`, title: `Forget`, onClick: () => Le(e3), children: (0, r.jsx)(re, {}) })] })] })] }) }) }, e3.id);
    }) })] }) }, e2);
  }), (0, r.jsx)(`div`, { className: `ui-mp__fold`, "data-open": Pe ? void 0 : ``, inert: Pe, children: (0, r.jsx)(`div`, { className: `ui-mp__clip`, children: (0, r.jsx)(`p`, { className: `ui-mp__empty`, children: v.length === 0 ? `Nothing remembered yet` : G ? `No memory mentions \u201C${O.trim()}\u201D` : `No memories here` }) }) })] }), (0, r.jsxs)(`div`, { className: `ui-mp__bottom`, children: [(0, r.jsx)(`div`, { className: `ui-mp__fold`, "data-open": N ? void 0 : ``, inert: N, children: (0, r.jsx)(`div`, { className: `ui-mp__clip`, children: (0, r.jsxs)(`button`, { type: `button`, className: `ui-mp__add`, "aria-expanded": N, "aria-controls": `${g}-new`, onClick: Ue, children: [(0, r.jsx)(ae, {}), `New memory`] }) }) }), (0, r.jsx)(`div`, { id: `${g}-new`, className: `ui-mp__fold`, "data-open": N ? `` : void 0, inert: !N, children: (0, r.jsx)(`div`, { className: `ui-mp__clip`, children: (0, r.jsxs)(`div`, { className: `ui-mp__new`, children: [(0, r.jsx)(`textarea`, { className: `ui-mp__edit ui-mp__edit--new`, value: F, rows: 1, placeholder: `Something the assistant should remember\u2026`, "aria-label": `New memory`, ref: (e2) => {
    l(e2), e2 && N && !e2.dataset.focused && (e2.dataset.focused = `1`, e2.focus({ preventScroll: true })), e2 && !N && delete e2.dataset.focused;
  }, onChange: (e2) => {
    I(e2.target.value), l(e2.target);
  }, onKeyDown: (e2) => {
    e2.key === `Enter` && !e2.shiftKey ? (e2.preventDefault(), We()) : e2.key === `Escape` && (e2.stopPropagation(), X());
  } }), (0, r.jsxs)(`div`, { className: `ui-mp__new-row`, children: [(0, r.jsx)(`div`, { className: `ui-mp__cats`, role: `radiogroup`, "aria-label": `Category of the new memory`, onKeyDown: (e2) => {
    let t2 = H.length ? H : [`General`];
    if (![`ArrowRight`, `ArrowLeft`, `ArrowDown`, `ArrowUp`].includes(e2.key)) return;
    e2.preventDefault();
    let n4 = (t2.indexOf(Y) + (e2.key === `ArrowRight` || e2.key === `ArrowDown` ? 1 : -1) + t2.length) % t2.length;
    L(t2[n4]), e2.currentTarget.querySelectorAll(`[role='radio']`)[n4]?.focus();
  }, children: (H.length ? H : [`General`]).map((e2) => (0, r.jsx)(`button`, { type: `button`, role: `radio`, "aria-checked": Y === e2, tabIndex: Y === e2 ? 0 : -1, className: `ui-mp__cat`, onClick: () => L(e2), children: e2 }, e2)) }), (0, r.jsxs)(`span`, { className: `ui-mp__acts ui-mp__acts--edit`, children: [(0, r.jsx)(`button`, { type: `button`, className: `ui-mp__text-btn`, onClick: X, children: `Cancel` }), (0, r.jsx)(`button`, { type: `button`, className: `ui-mp__text-btn ui-mp__text-btn--main`, disabled: !F.trim(), onClick: We, children: `Save` })] })] })] }) }) })] })] }), (0, r.jsxs)(`div`, { className: `ui-mp__foot`, children: [(0, r.jsx)(`span`, { className: `ui-mp__caption`, "aria-live": `polite`, children: (0, r.jsx)(d, { id: $, children: Q }) }), R ? (0, r.jsxs)(`button`, { type: `button`, className: `ui-mp__action ui-mp__action--undo`, onClick: Re, children: [(0, r.jsx)(ie, {}), `Undo`] }, `undo-${R.key}`) : h && (0, r.jsxs)(`button`, { type: `button`, className: `ui-mp__action`, onClick: h.onClick, children: [h.label, (0, r.jsx)(ce, {})] }, `action`)] })] });
}
var ue = `.ui-mp{--ui-mp-tray: #f0f0f0;--ui-mp-card: #ffffff;--ui-mp-line: #ececec;--ui-mp-ink: #171717;--ui-mp-text: #404040;--ui-mp-muted: #8f8f8f;--ui-mp-well: #f4f4f5;--ui-mp-hover: #ececee;--ui-mp-track: #dcdce0;--ui-mp-accent: #2f6bff;--ui-mp-red: #b42318;--ui-mp-red-bg: rgba(229, 72, 77, 0.1);--ui-mp-tag: #5f5f66;--ui-mp-tag-bg: rgba(110, 110, 120, 0.1);--ui-mp-focus: rgba(23, 23, 23, 0.22);--ui-mp-ease: cubic-bezier(0.32, 0.72, 0.24, 1);box-sizing: border-box;width: 100%;max-width: 380px;min-width: 0;container-type: inline-size;padding: 4px;border-radius: 20px;background: var(--ui-mp-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;color: var(--ui-mp-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-mp *, .ui-mp *::before, .ui-mp *::after{box-sizing: border-box}:where(.ui-mp) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-mp) :is(p, h3, ul){margin: 0;padding: 0;list-style: none;font: inherit}.ui-mp :is(button, input, textarea):focus-visible{outline: 2px solid var(--ui-mp-focus);outline-offset: 2px}.ui-mp svg{display: block;flex: none}.ui-mp b{font-weight: 500;color: var(--ui-mp-ink)}.ui-mp__card{border-radius: 16px;background: var(--ui-mp-card);box-shadow: 0 0 0 1px var(--ui-mp-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-mp__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 420ms var(--ui-mp-ease), opacity 220ms ease}.ui-mp__fold[data-open]{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows 420ms var(--ui-mp-ease), opacity 320ms ease 80ms}.ui-mp__fold--row[data-leaving]{transition: grid-template-rows 320ms var(--ui-mp-ease), opacity 200ms ease, filter 200ms ease;filter: blur(2px)}.ui-mp__clip{min-height: 0;overflow: hidden}.ui-mp__head{display: flex;align-items: center;gap: 8px;height: 48px;padding: 0 12px 0 14px}.ui-mp__title{min-width: 0;overflow: hidden;font-size: 13.5px;font-weight: 600;color: var(--ui-mp-ink);white-space: nowrap;text-overflow: ellipsis}.ui-mp__count{flex: none;min-width: 20px;height: 20px;padding: 0 6px;border-radius: 5px;background: var(--ui-mp-well);font-size: 12px;font-weight: 500;line-height: 20px;text-align: center;color: var(--ui-mp-muted);font-variant-numeric: tabular-nums}.ui-mp__switch{display: inline-flex;flex: none;align-items: center;gap: 8px;height: 28px;margin-left: auto;padding: 0 2px 0 8px;border-radius: 8px;font-size: 12.5px;color: var(--ui-mp-text);transition: background-color 160ms ease}.ui-mp__switch:hover{background: var(--ui-mp-well)}.ui-mp__track{position: relative;width: 28px;height: 16px;border-radius: 8px;background: var(--ui-mp-track);transition: background-color 240ms ease}.ui-mp__knob{position: absolute;top: 2px;left: 2px;width: 12px;height: 12px;border-radius: 50%;background: #fff;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);transition: transform 280ms var(--ui-mp-ease)}.ui-mp__switch[aria-checked="true"] .ui-mp__track{background: var(--ui-mp-ink)}.ui-mp__switch[aria-checked="true"] .ui-mp__knob{transform: translateX(12px)}.ui-mp__note{display: flex;gap: 8px;margin: 0 12px 10px !important;padding: 8px 10px;border-radius: 10px;background: var(--ui-mp-well);font-size: 12.5px;line-height: 18px;color: var(--ui-mp-text)}.ui-mp__note svg{margin-top: 2px;color: var(--ui-mp-muted)}.ui-mp__filters{position: relative;display: grid;grid-template-columns: minmax(0, 1fr) auto;align-items: center;gap: 4px;padding: 0 10px 10px 12px}.ui-mp__chips, .ui-mp__search{grid-area: 1 / 1;transition: opacity 220ms ease, filter 220ms ease}.ui-mp__chips{display: flex;gap: 4px;min-width: 0;margin: -2px -4px;padding: 2px 4px;overflow-x: auto;scrollbar-width: none;mask-image: linear-gradient(90deg, #000 calc(100% - 14px), transparent)}.ui-mp__chips::-webkit-scrollbar{display: none}.ui-mp__chip{display: inline-flex;flex: none;align-items: center;gap: 5px;height: 26px;padding: 0 8px;border-radius: 8px;font-size: 12.5px;color: var(--ui-mp-text);white-space: nowrap;transition: background-color 160ms ease, color 160ms ease, box-shadow 160ms ease}.ui-mp__chip:hover{background: var(--ui-mp-well)}.ui-mp__chip[data-linked]{color: var(--ui-mp-ink)}.ui-mp__chip[data-linked]:not([aria-checked="true"]){background: var(--ui-mp-well)}.ui-mp__chip[aria-checked="true"]{background: var(--ui-mp-well);color: var(--ui-mp-ink);box-shadow: inset 0 0 0 1px var(--ui-mp-line)}.ui-mp__chip-count{font-size: 11.5px;color: var(--ui-mp-muted);font-variant-numeric: tabular-nums}.ui-mp__search{display: flex;align-items: center;gap: 6px;height: 28px;padding: 0 2px 0 8px;border-radius: 8px;background: var(--ui-mp-well);color: var(--ui-mp-muted);opacity: 0;visibility: hidden}.ui-mp__input{flex: 1;min-width: 0;height: 28px;margin: 0;padding: 0;border: 0;background: none;font: inherit;font-size: 12.5px;color: var(--ui-mp-ink);outline: none}.ui-mp__input::placeholder{color: var(--ui-mp-muted)}.ui-mp__search .ui-mp__icon{width: 24px;height: 24px}.ui-mp__filters[data-searching] .ui-mp__chips{opacity: 0;filter: blur(2px)}.ui-mp__filters[data-searching] .ui-mp__search{grid-area: 1 / 1 / 2 / 3;opacity: 1;visibility: visible}.ui-mp__filters[data-searching] .ui-mp__search-open{opacity: 0;visibility: hidden}.ui-mp__search-open{grid-area: 1 / 2;transition: opacity 200ms ease, background-color 160ms ease, color 160ms ease}.ui-mp__list{max-height: var(--ui-mp-max);padding: 2px 6px 6px;overflow-y: auto;overscroll-behavior: contain;scrollbar-width: thin;scrollbar-color: var(--ui-mp-track) transparent;border-top: 1px solid var(--ui-mp-line);transition: opacity 300ms ease}.ui-mp[data-off] .ui-mp__list, .ui-mp[data-off] .ui-mp__filters{opacity: 0.5}.ui-mp[data-off] .ui-mp__list:hover, .ui-mp[data-off] .ui-mp__list:focus-within{opacity: 0.85}.ui-mp__filters{transition: opacity 300ms ease}.ui-mp__group{padding: 10px 8px 2px;font-size: 12px !important;font-weight: 500 !important;line-height: 18px !important;color: var(--ui-mp-muted)}.ui-mp__item{padding: 6px 8px 5px;border-radius: 10px;transition: background-color 160ms ease, opacity 220ms ease}.ui-mp__item[data-hot], .ui-mp__item[data-editing]{background: var(--ui-mp-well)}.ui-mp__text{color: var(--ui-mp-ink);overflow-wrap: anywhere;transition: color 240ms ease}.ui-mp__item[data-paused] .ui-mp__text{color: var(--ui-mp-muted)}.ui-mp__meta{display: flex;align-items: center;gap: 6px;min-height: 24px;font-size: 12px;color: var(--ui-mp-muted)}.ui-mp__source{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-mp__tag{display: inline-flex;flex: none;align-items: center;height: 18px;padding: 0 6px;border-radius: 5px;background: var(--ui-mp-tag-bg);font-size: 11.5px;font-weight: 500;color: var(--ui-mp-tag);opacity: 0;transform: scale(0.9);transition: opacity 220ms ease, transform 280ms var(--ui-mp-ease)}.ui-mp__tag:not([data-on]){position: absolute;visibility: hidden}.ui-mp__tag[data-on]{opacity: 1;transform: none;animation: ui-mp-in 280ms var(--ui-mp-ease) both}.ui-mp__acts{display: inline-flex;flex: none;align-items: center;gap: 2px;margin: -1px -4px -1px auto;opacity: 0;transition: opacity 180ms ease}.ui-mp__item:is([data-hot], :focus-within) .ui-mp__acts, .ui-mp__acts--edit{opacity: 1}.ui-mp__icon{display: grid;flex: none;place-items: center;width: 26px;height: 26px;border-radius: 8px;color: var(--ui-mp-muted);transition: background-color 160ms ease, color 160ms ease, opacity 200ms ease}.ui-mp__icon:hover{background: var(--ui-mp-hover);color: var(--ui-mp-ink)}.ui-mp__icon--forget:hover{background: var(--ui-mp-red-bg);color: var(--ui-mp-red)}.ui-mp__icon-swap{display: grid;animation: ui-mp-in 260ms ease both}.ui-mp__text-btn{display: inline-flex;align-items: center;height: 26px;padding: 0 9px;border-radius: 8px;font-size: 12.5px;font-weight: 500;color: var(--ui-mp-text);transition: background-color 160ms ease, color 160ms ease, opacity 160ms ease}.ui-mp__text-btn:hover{background: var(--ui-mp-hover);color: var(--ui-mp-ink)}.ui-mp__text-btn--main{background: var(--ui-mp-ink);color: var(--ui-mp-card)}.ui-mp__text-btn--main:hover{background: var(--ui-mp-ink);color: var(--ui-mp-card);opacity: 0.86}.ui-mp__text-btn:disabled{cursor: default;opacity: 0.35}.ui-mp__edit{display: block;width: 100%;min-height: 20px;margin: 0;padding: 0;border: 0;background: none;font: inherit;color: var(--ui-mp-ink);resize: none;overflow: hidden;outline: none}.ui-mp__edit::placeholder{color: var(--ui-mp-muted)}.ui-mp__item .ui-mp__edit:focus-visible{outline: none}.ui-mp__empty{padding: 18px 8px 12px;font-size: 12.5px;text-align: center;color: var(--ui-mp-muted)}.ui-mp__bottom{padding: 4px 6px 6px;border-top: 1px solid var(--ui-mp-line)}.ui-mp__add{display: flex;align-items: center;gap: 8px;width: 100%;height: 32px;padding: 0 8px;border-radius: 10px;font-size: 13px;color: var(--ui-mp-muted);transition: background-color 160ms ease, color 160ms ease}.ui-mp__add:hover{background: var(--ui-mp-well);color: var(--ui-mp-ink)}.ui-mp__new{margin: 2px 0 0;padding: 8px 8px 6px;border-radius: 10px;background: var(--ui-mp-well)}.ui-mp__new-row{display: flex;flex-wrap: wrap;align-items: center;justify-content: flex-end;gap: 6px;margin-top: 8px}.ui-mp__cats{display: flex;flex: 1 1 auto;flex-wrap: wrap;gap: 4px;min-width: 0}.ui-mp__cat{display: inline-flex;align-items: center;height: 24px;padding: 0 8px;border-radius: 6px;font-size: 12px;color: var(--ui-mp-muted);transition: background-color 160ms ease, color 160ms ease, box-shadow 160ms ease}.ui-mp__cat:hover{color: var(--ui-mp-ink)}.ui-mp__cat[aria-checked="true"]{background: var(--ui-mp-card);color: var(--ui-mp-ink);box-shadow: 0 0 0 1px var(--ui-mp-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-mp__foot{display: flex;align-items: center;gap: 8px;min-height: 38px;padding: 4px 4px 0 10px}.ui-mp__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-mp-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-mp__swap{display: grid;min-width: 0}.ui-mp__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;animation: ui-mp-swap-in 320ms ease both}.ui-mp__swap-item[data-out]{animation: ui-mp-swap-out 220ms ease both}.ui-mp__forgot{display: flex;min-width: 0}.ui-mp__flat{flex: none;white-space: pre}.ui-mp__quote{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-mp__action{display: inline-flex;flex: none;align-items: center;gap: 5px;height: 26px;padding: 0 8px;border-radius: 10px;font-size: 12.5px;font-weight: 500;color: var(--ui-mp-text);white-space: nowrap;animation: ui-mp-swap-in 300ms ease both;transition: background-color 160ms ease, color 160ms ease}.ui-mp__action:hover{background: var(--ui-mp-card);color: var(--ui-mp-ink)}.ui-mp__action--undo{padding: 0 9px 0 7px;background: var(--ui-mp-card);color: var(--ui-mp-ink);box-shadow: 0 0 0 1px var(--ui-mp-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-mp__action:not(.ui-mp__action--undo) svg{transition: transform 220ms var(--ui-mp-ease)}.ui-mp__action:not(.ui-mp__action--undo):hover svg{transform: translateX(2px)}@keyframes ui-mp-in{from{opacity: 0;transform: scale(0.9)}}@keyframes ui-mp-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-mp-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@container (max-width: 340px){.ui-mp__chip-count{display: none}.ui-mp__chip{padding: 0 7px}}@container (max-width: 320px){.ui-mp__switch-label{display: none}.ui-mp__switch{padding: 0 2px}}@media (pointer: coarse){.ui-mp__acts{opacity: 1}.ui-mp__icon{width: 32px;height: 32px}.ui-mp__meta{min-height: 32px}.ui-mp__chip, .ui-mp__text-btn{height: 32px}.ui-mp__cat{height: 30px}.ui-mp__switch, .ui-mp__add{height: 36px}.ui-mp__action{height: 30px}}@media (prefers-reduced-motion: reduce){.ui-mp *, .ui-mp *::before, .ui-mp *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-mp{--ui-mp-tray: #111113;--ui-mp-card: #19191b;--ui-mp-line: #2a2a2e;--ui-mp-ink: #ededed;--ui-mp-text: #c8c8cc;--ui-mp-muted: #8b8b92;--ui-mp-well: #222225;--ui-mp-hover: #2c2c30;--ui-mp-track: #3a3a40;--ui-mp-red: #ff9b93;--ui-mp-red-bg: rgba(229, 72, 77, 0.16);--ui-mp-tag: #b4b4bb;--ui-mp-tag-bg: rgba(160, 160, 170, 0.14);--ui-mp-focus: rgba(255, 255, 255, 0.3)}:where(.dark, [data-theme="dark"]) .ui-mp__knob{background: #19191b}:where(.dark, [data-theme="dark"]) .ui-mp__switch[aria-checked="false"] .ui-mp__knob{background: #8b8b92}`;
var de = [{ id: `ts`, text: `Prefers TypeScript examples over plain JavaScript`, category: `Preferences`, source: `From chat`, date: `Oct 12` }, { id: `short`, text: `Likes short answers first, details only when asked`, category: `Preferences`, source: `You added`, date: `Oct 2` }, { id: `inter`, text: `Designs with Inter and a 4px spacing grid`, category: `Preferences`, source: `From Figma`, date: `Oct 7` }, { id: `role`, text: `Product designer and front-end developer at a small studio`, category: `Work`, source: `From chat`, date: `Sep 28` }, { id: `stack`, text: `Ships with React, Vite and Tailwind; deploys on Vercel`, category: `Work`, source: `From chat`, date: `Oct 3` }, { id: `notes`, text: `Sends release notes to clients every Friday`, category: `Work`, source: `From chat`, date: `Oct 9` }, { id: `fintech`, text: `Redesigning the onboarding flow for a fintech client, due Oct 24`, category: `Projects`, source: `From chat`, date: `Oct 11` }, { id: `tokens`, text: `Keeps design tokens in one tokens.json shared with the code`, category: `Projects`, source: `From chat`, date: `Oct 5` }];
function fe() {
  let e = (0, n3.useRef)(null), t = (0, n3.useRef)(false);
  (0, n3.useEffect)(() => {
    let n4 = (t2) => () => e.current?.querySelector(t2)?.click(), r2 = (e2, t2) => n4(`[data-memory="${e2}"] [data-act="${t2}"]`), i3 = (e2) => n4(`.ui-mp__chip:nth-child(${e2})`), a2 = [[700, r2(`short`, `pause`)], [2700, r2(`ts`, `forget`)], [2600, n4(`.ui-mp__action--undo`)], [2200, i3(4)], [2400, i3(1)], [1800, r2(`short`, `pause`)]], o2 = 0, s2 = 0, c2 = () => {
      t.current || (o2 >= a2.length && (o2 = 0, a2[0][0] = 1800), s2 = window.setTimeout(() => {
        t.current || (a2[o2][1](), o2++, c2());
      }, a2[o2][0]));
    };
    return c2(), () => window.clearTimeout(s2);
  }, []);
  let i2 = () => t.current = true;
  return (0, r.jsx)(`div`, { ref: e, className: `mp-demo`, onPointerEnter: i2, onPointerDownCapture: i2, onKeyDownCapture: i2, onFocusCapture: i2, children: (0, r.jsx)(le, { memories: de, maxHeight: 330 }) });
}

export {
  fe
};
