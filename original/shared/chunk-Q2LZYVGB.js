import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo.clean-C1W0NbsT.js
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
function d(e) {
  let [t, r2] = (0, n3.useState)(false);
  return (0, n3.useEffect)(() => {
    let t2 = e.current;
    if (!t2) return;
    let n4 = () => r2(t2.scrollLeft + t2.clientWidth < t2.scrollWidth - 1);
    n4();
    let i2 = new ResizeObserver(n4);
    i2.observe(t2);
    let a2 = new MutationObserver(n4);
    return a2.observe(t2, { childList: true, subtree: true, characterData: true }), t2.addEventListener(`scroll`, n4, { passive: true }), () => {
      i2.disconnect(), a2.disconnect(), t2.removeEventListener(`scroll`, n4);
    };
  }, [e]), t;
}
function f({ id: e, children: t }) {
  let i2 = (0, n3.useRef)({ id: e, node: t }), [a2, o2] = (0, n3.useState)(e), [s2, c2] = (0, n3.useState)(null);
  return a2 !== e && (o2(e), c2(i2.current)), i2.current = { id: e, node: t }, (0, n3.useEffect)(() => {
    if (!s2) return;
    let e2 = window.setTimeout(() => c2(null), 260);
    return () => window.clearTimeout(e2);
  }, [s2]), (0, r.jsxs)(`span`, { className: `ui-mpc__swap`, children: [s2 && (0, r.jsx)(`span`, { className: `ui-mpc__swap-item`, "data-out": ``, "aria-hidden": `true`, children: s2.node }, `out-${s2.id}`), (0, r.jsx)(`span`, { className: `ui-mpc__swap-item`, children: t }, e)] });
}
var p = ({ d: e, solid: t }) => (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, className: `ui-mpc__glyph`, "data-solid": t || void 0, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: e, fillRule: `evenodd` }) });
var ee = () => (0, r.jsx)(p, { d: `M9.8 3.7l2.5 2.5M3 13l.6-3 6.9-6.9a1.4 1.4 0 0 1 2 0l.4.4a1.4 1.4 0 0 1 0 2L6 12.4 3 13Z` });
var te = () => (0, r.jsx)(p, { solid: true, d: `M4.5 3.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-9Zm4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-9Z` });
var ne = () => (0, r.jsx)(p, { solid: true, d: `M4.5 3.4v9.2a.9.9 0 0 0 1.37.77l7.4-4.6a.9.9 0 0 0 0-1.54l-7.4-4.6a.9.9 0 0 0-1.37.77Z` });
var re = () => (0, r.jsx)(p, { d: `M2.5 4.5h11M6.5 4.5V3.2a.7.7 0 0 1 .7-.7h1.6a.7.7 0 0 1 .7.7v1.3M4 4.5l.6 8a1.1 1.1 0 0 0 1.1 1h4.6a1.1 1.1 0 0 0 1.1-1l.6-8M6.8 7.2v3.6M9.2 7.2v3.6` });
var ie = () => (0, r.jsx)(p, { d: `M5.5 3.5 3 6l2.5 2.5M3.2 6h6.3a3.5 3.5 0 0 1 0 7H7` });
var ae = () => (0, r.jsx)(p, { d: `M8 3.5v9M3.5 8h9` });
var oe = () => (0, r.jsx)(p, { d: `M7.2 11.9a4.7 4.7 0 1 0 0-9.4 4.7 4.7 0 0 0 0 9.4ZM10.6 10.6l2.9 2.9` });
var se = () => (0, r.jsx)(p, { d: `m4.5 4.5 7 7m0-7-7 7` });
var ce = () => (0, r.jsx)(p, { solid: true, d: `M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm0 5.4a.6.6 0 0 0-.6.6v3.6a.6.6 0 0 0 1.2 0V7.5a.6.6 0 0 0-.6-.6Zm0-2.3a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6Z` });
var le = () => (0, r.jsx)(p, { d: `M3.5 8h9M9 4.5 12.5 8 9 11.5` });
function ue({ memories: e, onChange: t, onAdd: i2, onEdit: p2, onPause: ue2, onForget: fe2, onRestore: pe2, enabled: me, defaultEnabled: he = true, onEnabledChange: ge, categories: _e, title: ve = `Memory`, maxHeight: ye = 360, undoFor: be = 5e3, addedSource: xe = `You added`, action: m, className: Se }) {
  let h = (0, n3.useId)(), g = (0, n3.useRef)(null), Ce = (0, n3.useRef)(null), we = (0, n3.useRef)(null), Te = (0, n3.useRef)(null), Ee = d(we), De = d(Te), [Oe, ke] = (0, n3.useState)(e), _ = t ? e : Oe, v = (0, n3.useRef)(_);
  v.current = _;
  let y = (e2) => {
    v.current = e2, t || ke(e2), t?.(e2);
  }, [Ae, je] = (0, n3.useState)(he), b = me ?? Ae, Me = (e2) => {
    je(e2), ge?.(e2);
  }, [x, Ne] = (0, n3.useState)({}), [S, C] = (0, n3.useState)({}), [w, T] = (0, n3.useState)(null), [E, Pe] = (0, n3.useState)(false), [D, O] = (0, n3.useState)(``), [Fe, k] = (0, n3.useState)(null), [A, j] = (0, n3.useState)(null), [Ie, Le] = (0, n3.useState)(``), [M, N] = (0, n3.useState)(false), [P, F] = (0, n3.useState)(``), [Re, I] = (0, n3.useState)(null), [L, R] = (0, n3.useState)(null), z = (0, n3.useRef)(null), B = (0, n3.useRef)(true);
  (0, n3.useEffect)(() => (B.current = true, () => {
    B.current = false;
  }), []), (0, n3.useEffect)(() => {
    if (!Object.keys(S).length) return;
    let e2 = 0, t2 = requestAnimationFrame(() => {
      e2 = requestAnimationFrame(() => C({}));
    });
    return () => {
      cancelAnimationFrame(t2), cancelAnimationFrame(e2);
    };
  }, [S]), (0, n3.useEffect)(() => {
    if (Object.keys(S).length || !z.current) return;
    let e2 = z.current;
    z.current = null;
    let t2 = window.setTimeout(() => {
      let t3 = Ce.current, n4 = t3?.querySelector(`[data-memory="${CSS.escape(e2)}"]`);
      if (!t3 || !n4) return;
      let r2 = n4.offsetTop - t3.offsetTop;
      (r2 < t3.scrollTop || r2 + n4.offsetHeight > t3.scrollTop + t3.clientHeight) && t3.scrollTo({ top: r2 - 8, behavior: a() ? `auto` : `smooth` });
    }, 120);
    return () => window.clearTimeout(t2);
  }, [S]), (0, n3.useEffect)(() => {
    if (!L) return;
    let e2 = window.setTimeout(() => R(null), be);
    return () => window.clearTimeout(e2);
  }, [L, be]);
  let V = [..._e ?? []];
  for (let e2 of _) V.includes(e2.category) || V.push(e2.category);
  let H = _.filter((e2) => !x[e2.id]), U = H.filter((e2) => e2.paused).length, W = D.trim().toLowerCase(), G = (e2) => (!w || e2.category === w) && (!W || e2.text.toLowerCase().includes(W) || e2.category.toLowerCase().includes(W)), ze = (e2) => G(e2) && !x[e2.id] && !S[e2.id], Be = _.some((e2) => G(e2) && !x[e2.id]), K = _.find((e2) => e2.id === Fe) ?? null, Ve = u({ total: H.length, paused: U }, 520), q = Math.round(Ve.total ?? H.length), He = Math.round(Ve.paused ?? U), Ue = async (e2) => {
    if (x[e2.id] || (A === e2.id && j(null), k(null), Ne((t3) => ({ ...t3, [e2.id]: true })), a() || await o(320), !B.current)) return;
    let t2 = v.current.findIndex((t3) => t3.id === e2.id);
    y(v.current.filter((t3) => t3.id !== e2.id)), fe2?.(e2.id), Ne(({ [e2.id]: t3, ...n4 }) => n4), R({ memory: e2, index: t2, key: Date.now() });
  }, We = () => {
    if (!L) return;
    let { memory: e2, index: t2 } = L, n4 = [...v.current];
    n4.splice(Math.max(0, Math.min(t2, n4.length)), 0, e2), C({ [e2.id]: true }), z.current = e2.id, w && w !== e2.category && T(null), y(n4), pe2?.(e2), R(null);
  }, Ge = (e2) => {
    y(v.current.map((t2) => t2.id === e2.id ? { ...t2, paused: !t2.paused } : t2)), ue2?.(e2.id, !e2.paused);
  }, Ke = (e2) => {
    N(false), Le(e2.text), j(e2.id);
  }, qe = () => {
    let e2 = A, t2 = Ie.trim().replace(/\s+/g, ` `);
    if (j(null), !e2) return;
    let n4 = v.current.find((t3) => t3.id === e2);
    n4 && t2 && t2 !== n4.text && (y(v.current.map((n5) => n5.id === e2 ? { ...n5, text: t2 } : n5)), p2?.(e2, t2), window.requestAnimationFrame(() => g.current?.querySelector(`[data-memory="${CSS.escape(e2)}"] [data-act="edit"]`)?.focus({ preventScroll: true })));
  }, J = () => {
    let e2 = A;
    j(null), e2 && window.requestAnimationFrame(() => g.current?.querySelector(`[data-memory="${CSS.escape(e2)}"] [data-act="edit"]`)?.focus({ preventScroll: true }));
  }, Y = Re ?? w ?? V[0] ?? `General`, Je = () => {
    j(null), F(``), I(w ?? V[0] ?? `General`), N(true);
  }, X = () => {
    N(false), window.requestAnimationFrame(() => g.current?.querySelector(`.ui-mpc__add`)?.focus({ preventScroll: true }));
  }, Ye = () => {
    let e2 = P.trim().replace(/\s+/g, ` `);
    if (!e2) return;
    let t2 = { id: c(), text: e2, category: Y, source: xe, date: s() };
    C({ [t2.id]: true }), z.current = t2.id, w && w !== t2.category && T(null), W && O(``), y([...v.current, t2]), i2?.(t2), F(``), X();
  }, Xe = () => {
    Pe(false), O(``), window.requestAnimationFrame(() => g.current?.querySelector(`.ui-mpc__search-open`)?.focus({ preventScroll: true }));
  }, Z = [null, ...V.filter((e2) => _.some((t2) => t2.category === e2))], Ze = (e2) => {
    if (![`ArrowRight`, `ArrowLeft`, `ArrowDown`, `ArrowUp`, `Home`, `End`].includes(e2.key)) return;
    e2.preventDefault();
    let t2 = Z.indexOf(w), n4 = e2.key === `Home` ? 0 : e2.key === `End` ? Z.length - 1 : (t2 + (e2.key === `ArrowRight` || e2.key === `ArrowDown` ? 1 : -1) + Z.length) % Z.length;
    T(Z[n4]);
    let r2 = e2.currentTarget.querySelectorAll(`[role='radio']`);
    r2[n4]?.focus(), r2[n4]?.scrollIntoView({ block: `nearest`, inline: `nearest` });
  }, Q = (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`b`, { children: q }), ` `, q === 1 ? `memory` : `memories`, (He > 0 || U > 0) && (0, r.jsxs)(r.Fragment, { children: [` \xB7 `, He, ` paused`] })] }), $ = `rest`;
  return L ? (Q = (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)(`span`, { className: `ui-mpc__forgot`, children: [(0, r.jsx)(`span`, { className: `ui-mpc__flat`, children: `Forgot \u201C` }), (0, r.jsx)(`b`, { className: `ui-mpc__quote`, children: L.memory.text }), (0, r.jsx)(`span`, { className: `ui-mpc__flat`, children: `\u201D` })] }) }), $ = `forgot-${L.key}`) : A ? (Q = `Enter to save \xB7 Esc to cancel`, $ = `editing`) : M ? (Q = `Pick a category \xB7 Enter to save`, $ = `adding`) : K ? (Q = (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`b`, { children: K.category }), ` \xB7`, ` `, b ? K.paused ? `paused, not used in answers` : `used in answers` : `memory is off`] }), $ = `hot-${K.id}-${+!!K.paused}-${+!!b}`) : b || (Q = `Memory is off`, $ = `off`), (0, r.jsxs)(`div`, { ref: g, className: [`ui-mpc`, Se].filter(Boolean).join(` `), role: `group`, "aria-labelledby": `${h}-title`, "data-off": b ? void 0 : ``, style: { "--ui-mpc-max": `${ye}px` }, children: [(0, r.jsx)(`style`, { href: `ui-memory-panel-clean`, precedence: `default`, children: de }), (0, r.jsxs)(`div`, { className: `ui-mpc__card`, children: [(0, r.jsxs)(`div`, { className: `ui-mpc__head`, children: [(0, r.jsx)(`span`, { id: `${h}-title`, className: `ui-mpc__title`, children: ve }), (0, r.jsx)(`span`, { className: `ui-mpc__count`, "aria-hidden": `true`, children: q }), (0, r.jsxs)(`button`, { type: `button`, role: `switch`, "aria-checked": b, "aria-controls": `${h}-note`, className: `ui-mpc__switch`, onClick: () => Me(!b), children: [(0, r.jsx)(`span`, { className: `ui-mpc__switch-label`, children: `Use memory` }), (0, r.jsx)(`span`, { className: `ui-mpc__track`, "aria-hidden": `true`, children: (0, r.jsx)(`span`, { className: `ui-mpc__knob` }) })] })] }), (0, r.jsx)(`div`, { id: `${h}-note`, className: `ui-mpc__fold`, "data-open": b ? void 0 : ``, inert: b, children: (0, r.jsx)(`div`, { className: `ui-mpc__clip`, children: (0, r.jsxs)(`p`, { className: `ui-mpc__note`, children: [(0, r.jsx)(ce, {}), (0, r.jsx)(`span`, { children: `The assistant won't use or save memories in new chats. Nothing here is deleted.` })] }) }) }), (0, r.jsxs)(`div`, { className: `ui-mpc__filters`, "data-searching": E ? `` : void 0, children: [(0, r.jsx)(`div`, { ref: we, className: `ui-mpc__chips`, "data-more": Ee ? `` : void 0, role: `radiogroup`, "aria-label": `Category`, inert: E, onKeyDown: Ze, children: Z.map((e2) => {
    let t2 = H.filter((t3) => !e2 || t3.category === e2).length, n4 = w === e2;
    return (0, r.jsxs)(`button`, { type: `button`, role: `radio`, "aria-checked": n4, tabIndex: n4 ? 0 : -1, className: `ui-mpc__chip`, "data-linked": e2 && K?.category === e2 ? `` : void 0, onClick: () => T(e2), children: [e2 ?? `All`, (0, r.jsx)(`span`, { className: `ui-mpc__chip-count`, children: t2 })] }, e2 ?? `#all`);
  }) }), (0, r.jsxs)(`div`, { className: `ui-mpc__search`, inert: !E, children: [(0, r.jsx)(oe, {}), (0, r.jsx)(`input`, { className: `ui-mpc__input`, type: `text`, value: D, placeholder: `Search memories`, "aria-label": `Search memories`, onChange: (e2) => O(e2.target.value), onKeyDown: (e2) => {
    e2.key === `Escape` && (e2.stopPropagation(), Xe());
  }, ref: (e2) => {
    e2 && E && document.activeElement !== e2 && !e2.dataset.focused && (e2.dataset.focused = `1`, e2.focus({ preventScroll: true })), e2 && !E && delete e2.dataset.focused;
  } }), (0, r.jsx)(`button`, { type: `button`, className: `ui-mpc__icon`, "aria-label": `Close search`, onClick: Xe, children: (0, r.jsx)(se, {}) })] }), (0, r.jsx)(`button`, { type: `button`, className: `ui-mpc__icon ui-mpc__search-open`, "aria-label": `Search memories`, "aria-expanded": E, inert: E, onClick: () => {
    T(null), Pe(true);
  }, children: (0, r.jsx)(oe, {}) })] }), (0, r.jsxs)(`div`, { ref: Ce, className: `ui-mpc__list`, onPointerLeave: () => k(null), children: [V.map((e2) => {
    let t2 = _.filter((t3) => t3.category === e2);
    if (!t2.length) return null;
    let n4 = t2.some((e3) => G(e3) && !x[e3.id]);
    return (0, r.jsx)(`section`, { className: `ui-mpc__fold`, "data-open": n4 ? `` : void 0, inert: !n4, "aria-label": e2, children: (0, r.jsxs)(`div`, { className: `ui-mpc__clip`, children: [(0, r.jsx)(`h3`, { className: `ui-mpc__group`, children: e2 }), (0, r.jsx)(`ul`, { className: `ui-mpc__items`, children: t2.map((e3) => {
      let t3 = A === e3.id, n5 = ze(e3);
      return (0, r.jsx)(`li`, { className: `ui-mpc__fold ui-mpc__fold--row`, "data-open": n5 ? `` : void 0, "data-leaving": x[e3.id] ? `` : void 0, inert: !n5, children: (0, r.jsx)(`div`, { className: `ui-mpc__clip`, children: (0, r.jsxs)(`div`, { className: `ui-mpc__item`, "data-memory": e3.id, "data-paused": e3.paused ? `` : void 0, "data-hot": Fe === e3.id ? `` : void 0, "data-editing": t3 ? `` : void 0, onPointerEnter: (t4) => t4.pointerType === `mouse` && k(e3.id), onFocus: () => k(e3.id), onBlur: (e4) => {
        e4.currentTarget.contains(e4.relatedTarget) || k(null);
      }, children: [t3 ? (0, r.jsx)(`textarea`, { className: `ui-mpc__edit`, value: Ie, rows: 1, "aria-label": `Edit memory`, ref: (e4) => {
        l(e4), e4 && !e4.dataset.focused && (e4.dataset.focused = `1`, e4.focus({ preventScroll: true }), e4.setSelectionRange(e4.value.length, e4.value.length));
      }, onChange: (e4) => {
        Le(e4.target.value), l(e4.target);
      }, onKeyDown: (e4) => {
        e4.key === `Enter` && !e4.shiftKey ? (e4.preventDefault(), qe()) : e4.key === `Escape` && (e4.stopPropagation(), J());
      } }) : (0, r.jsx)(`p`, { className: `ui-mpc__text`, children: e3.text }), (0, r.jsxs)(`div`, { className: `ui-mpc__meta`, children: [(0, r.jsxs)(`span`, { className: `ui-mpc__source`, children: [e3.source, e3.source && e3.date && (0, r.jsx)(`span`, { className: `ui-mpc__dot`, children: ` \xB7 ` }), e3.date] }), (0, r.jsx)(`span`, { className: `ui-mpc__tag`, "data-on": e3.paused ? `` : void 0, "aria-hidden": !e3.paused, children: `Paused` }), t3 ? (0, r.jsxs)(`span`, { className: `ui-mpc__acts ui-mpc__acts--edit`, children: [(0, r.jsx)(`button`, { type: `button`, className: `ui-mpc__text-btn`, onClick: J, children: `Cancel` }), (0, r.jsx)(`button`, { type: `button`, className: `ui-mpc__text-btn ui-mpc__text-btn--main`, onClick: qe, children: `Save` })] }) : (0, r.jsxs)(`span`, { className: `ui-mpc__acts`, children: [(0, r.jsx)(`button`, { type: `button`, className: `ui-mpc__icon`, "data-act": `edit`, "aria-label": `Edit \u201C${e3.text}\u201D`, title: `Edit`, onClick: () => Ke(e3), children: (0, r.jsx)(ee, {}) }), (0, r.jsx)(`button`, { type: `button`, className: `ui-mpc__icon`, "data-act": `pause`, "aria-label": `${e3.paused ? `Resume` : `Pause`} \u201C${e3.text}\u201D`, title: e3.paused ? `Resume` : `Pause`, onClick: () => Ge(e3), children: (0, r.jsx)(`span`, { className: `ui-mpc__icon-swap`, children: e3.paused ? (0, r.jsx)(ne, {}) : (0, r.jsx)(te, {}) }, e3.paused ? `play` : `pause`) }), (0, r.jsx)(`button`, { type: `button`, className: `ui-mpc__icon ui-mpc__icon--forget`, "data-act": `forget`, "aria-label": `Forget \u201C${e3.text}\u201D`, title: `Forget`, onClick: () => Ue(e3), children: (0, r.jsx)(re, {}) })] })] })] }) }) }, e3.id);
    }) })] }) }, e2);
  }), (0, r.jsx)(`div`, { className: `ui-mpc__fold`, "data-open": Be ? void 0 : ``, inert: Be, children: (0, r.jsx)(`div`, { className: `ui-mpc__clip`, children: (0, r.jsx)(`p`, { className: `ui-mpc__empty`, children: _.length === 0 ? `Nothing remembered yet` : W ? `No memory mentions \u201C${D.trim()}\u201D` : `No memories here` }) }) })] }), (0, r.jsxs)(`div`, { className: `ui-mpc__bottom`, children: [(0, r.jsx)(`div`, { className: `ui-mpc__fold`, "data-open": M ? void 0 : ``, inert: M, children: (0, r.jsx)(`div`, { className: `ui-mpc__clip`, children: (0, r.jsxs)(`button`, { type: `button`, className: `ui-mpc__add`, "aria-expanded": M, "aria-controls": `${h}-new`, onClick: Je, children: [(0, r.jsx)(ae, {}), `New memory`] }) }) }), (0, r.jsx)(`div`, { id: `${h}-new`, className: `ui-mpc__fold`, "data-open": M ? `` : void 0, inert: !M, children: (0, r.jsx)(`div`, { className: `ui-mpc__clip`, children: (0, r.jsxs)(`div`, { className: `ui-mpc__new`, children: [(0, r.jsx)(`textarea`, { className: `ui-mpc__edit ui-mpc__edit--new`, value: P, rows: 1, placeholder: `Something the assistant should remember\u2026`, "aria-label": `New memory`, ref: (e2) => {
    l(e2), e2 && M && !e2.dataset.focused && (e2.dataset.focused = `1`, e2.focus({ preventScroll: true })), e2 && !M && delete e2.dataset.focused;
  }, onChange: (e2) => {
    F(e2.target.value), l(e2.target);
  }, onKeyDown: (e2) => {
    e2.key === `Enter` && !e2.shiftKey ? (e2.preventDefault(), Ye()) : e2.key === `Escape` && (e2.stopPropagation(), X());
  } }), (0, r.jsxs)(`div`, { className: `ui-mpc__new-row`, children: [(0, r.jsx)(`div`, { ref: Te, className: `ui-mpc__cats`, "data-more": De ? `` : void 0, role: `radiogroup`, "aria-label": `Category of the new memory`, onKeyDown: (e2) => {
    let t2 = V.length ? V : [`General`];
    if (![`ArrowRight`, `ArrowLeft`, `ArrowDown`, `ArrowUp`].includes(e2.key)) return;
    e2.preventDefault();
    let n4 = (t2.indexOf(Y) + (e2.key === `ArrowRight` || e2.key === `ArrowDown` ? 1 : -1) + t2.length) % t2.length;
    I(t2[n4]), e2.currentTarget.querySelectorAll(`[role='radio']`)[n4]?.focus();
  }, children: (V.length ? V : [`General`]).map((e2) => (0, r.jsx)(`button`, { type: `button`, role: `radio`, "aria-checked": Y === e2, tabIndex: Y === e2 ? 0 : -1, className: `ui-mpc__cat`, onClick: () => I(e2), children: e2 }, e2)) }), (0, r.jsxs)(`span`, { className: `ui-mpc__acts ui-mpc__acts--edit`, children: [(0, r.jsx)(`button`, { type: `button`, className: `ui-mpc__text-btn`, onClick: X, children: `Cancel` }), (0, r.jsx)(`button`, { type: `button`, className: `ui-mpc__text-btn ui-mpc__text-btn--main`, disabled: !P.trim(), onClick: Ye, children: `Save` })] })] })] }) }) })] }), (0, r.jsxs)(`div`, { className: `ui-mpc__foot`, children: [(0, r.jsx)(`span`, { className: `ui-mpc__caption`, "aria-live": `polite`, children: (0, r.jsx)(f, { id: $, children: Q }) }), L ? (0, r.jsxs)(`button`, { type: `button`, className: `ui-mpc__action ui-mpc__action--undo`, onClick: We, children: [(0, r.jsx)(ie, {}), `Undo`] }, `undo-${L.key}`) : m && (0, r.jsxs)(`button`, { type: `button`, className: `ui-mpc__action`, onClick: m.onClick, children: [m.label, (0, r.jsx)(le, {})] }, `action`)] })] })] });
}
var de = `.ui-mpc{--ui-mpc-card: #ffffff;--ui-mpc-ink: rgba(0, 0, 0, 0.88);--ui-mpc-strong: #000000;--ui-mpc-text: rgba(0, 0, 0, 0.61);--ui-mpc-muted: rgba(0, 0, 0, 0.45);--ui-mpc-faint: rgba(0, 0, 0, 0.27);--ui-mpc-icon: rgba(0, 0, 0, 0.447);--ui-mpc-line: rgba(0, 0, 0, 0.06);--ui-mpc-wash: rgba(0, 0, 0, 0.03);--ui-mpc-fill: rgba(0, 0, 0, 0.06);--ui-mpc-fill-strong: rgba(0, 0, 0, 0.1);--ui-mpc-accent: rgba(0, 96, 226, 0.765);--ui-mpc-focus: rgba(0, 96, 226, 0.35);--ui-mpc-red: #e5484d;--ui-mpc-red-soft: rgba(229, 72, 77, 0.08);--ui-mpc-amber: #9a6a00;--ui-mpc-amber-soft: rgba(232, 162, 12, 0.12);--ui-mpc-solid: rgba(0, 0, 0, 0.88);--ui-mpc-on-solid: #fcfcfc;--ui-mpc-knob: #ffffff;--ui-mpc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-mpc-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;width: 100%;max-width: 400px;min-width: 0;container-type: inline-size;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-mpc-ink);text-align: left;-webkit-font-smoothing: antialiased}.ui-mpc *, .ui-mpc *::before, .ui-mpc *::after{box-sizing: border-box}:where(.ui-mpc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-mpc) :is(p, h3, ul){margin: 0;padding: 0;list-style: none;font: inherit}.ui-mpc button:focus-visible{outline: 2px solid var(--ui-mpc-focus);outline-offset: 1px}.ui-mpc :is(input, textarea):focus-visible{outline: none}:where(.ui-mpc) svg{display: block;flex: none}.ui-mpc b{font-weight: 500;color: var(--ui-mpc-ink)}.ui-mpc__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-mpc__glyph[data-solid]{fill: currentColor;stroke: none}.ui-mpc__card{border-radius: 10px;background: var(--ui-mpc-card);box-shadow: var(--ui-mpc-shadow)}.ui-mpc__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 420ms var(--ui-mpc-ease), opacity 220ms ease}.ui-mpc__fold[data-open]{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows 420ms var(--ui-mpc-ease), opacity 320ms ease 80ms}.ui-mpc__fold--row[data-leaving]{transition: grid-template-rows 320ms var(--ui-mpc-ease), opacity 200ms ease, filter 200ms ease;filter: blur(2px)}.ui-mpc__clip{min-height: 0;overflow: hidden}.ui-mpc__head{display: flex;align-items: center;gap: 8px;padding: 12px 10px 0 16px}.ui-mpc__title{min-width: 0;overflow: hidden;font-size: 15px;font-weight: 500;line-height: 24px;color: var(--ui-mpc-strong);white-space: nowrap;text-overflow: ellipsis}.ui-mpc__count{flex: none;min-width: 20px;height: 18px;padding: 0 5px;border-radius: 5px;background: var(--ui-mpc-fill);font-size: 11px;font-weight: 500;line-height: 18px;text-align: center;color: var(--ui-mpc-text);font-variant-numeric: tabular-nums}.ui-mpc__switch{display: inline-flex;flex: none;align-items: center;gap: 8px;height: 28px;margin-left: auto;padding: 0 6px 0 8px;border-radius: 6px;color: var(--ui-mpc-text);transition: background-color 90ms ease, color 90ms ease}.ui-mpc__switch:hover{background: var(--ui-mpc-wash);color: var(--ui-mpc-ink)}.ui-mpc__track{position: relative;width: 26px;height: 16px;border-radius: 5px;background: var(--ui-mpc-fill-strong);transition: background-color 220ms ease}.ui-mpc__knob{position: absolute;top: 2px;left: 2px;width: 12px;height: 12px;border-radius: 3.5px;background: var(--ui-mpc-knob);box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.16);transition: transform 260ms var(--ui-mpc-ease)}.ui-mpc__switch[aria-checked="true"] .ui-mpc__track{background: var(--ui-mpc-accent)}.ui-mpc__switch[aria-checked="true"] .ui-mpc__knob{transform: translateX(10px)}.ui-mpc__note{display: flex;gap: 8px;margin: 10px 12px 0 16px !important;padding: 8px 10px;border-radius: 8px;background: var(--ui-mpc-wash);font-size: 12px !important;line-height: 16px !important;color: var(--ui-mpc-text)}.ui-mpc__note .ui-mpc__glyph{color: var(--ui-mpc-icon)}.ui-mpc__filters{position: relative;display: grid;grid-template-columns: minmax(0, 1fr) auto;align-items: center;gap: 8px;padding: 12px 10px 12px 16px;border-bottom: 0.5px solid var(--ui-mpc-line);transition: opacity 300ms ease}.ui-mpc__chips, .ui-mpc__search{grid-area: 1 / 1;transition: opacity 220ms ease, filter 220ms ease}.ui-mpc__chips{display: flex;gap: 4px;min-width: 0;margin: -3px;padding: 3px;overflow-x: auto;scrollbar-width: none}.ui-mpc__chips[data-more], .ui-mpc__cats[data-more]{-webkit-mask-image: linear-gradient(90deg, #000 calc(100% - 24px), transparent);mask-image: linear-gradient(90deg, #000 calc(100% - 24px), transparent)}.ui-mpc__chips::-webkit-scrollbar{display: none}.ui-mpc__chip{display: inline-flex;flex: none;align-items: center;gap: 6px;padding: 4px 10px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-mpc-line);font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-mpc-text);white-space: nowrap;transition: background-color 90ms ease, color 90ms ease}.ui-mpc__chip:hover{background: var(--ui-mpc-wash)}.ui-mpc__chip[data-linked]{color: var(--ui-mpc-ink)}.ui-mpc__chip[aria-checked="true"]{background: var(--ui-mpc-fill);color: var(--ui-mpc-ink)}.ui-mpc__chip-count{font-size: 12px;font-weight: 400;color: var(--ui-mpc-muted);font-variant-numeric: tabular-nums}.ui-mpc__chip[aria-checked="true"] .ui-mpc__chip-count{color: var(--ui-mpc-text)}.ui-mpc__search{display: flex;align-items: center;gap: 6px;height: 28px;padding: 0 2px 0 8px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-mpc-line);background: var(--ui-mpc-wash);color: var(--ui-mpc-icon);opacity: 0;visibility: hidden}.ui-mpc__input{flex: 1;min-width: 0;height: 28px;margin: 0;padding: 0;border: 0;background: none;font: inherit;font-size: 13px;color: var(--ui-mpc-strong);caret-color: var(--ui-mpc-accent);outline: none}.ui-mpc__input::placeholder{color: var(--ui-mpc-faint);opacity: 1}.ui-mpc__search .ui-mpc__icon{width: 24px;height: 24px}.ui-mpc__filters[data-searching] .ui-mpc__chips{opacity: 0;filter: blur(2px)}.ui-mpc__filters[data-searching] .ui-mpc__search{grid-area: 1 / 1 / 2 / 3;opacity: 1;visibility: visible}.ui-mpc__filters[data-searching] .ui-mpc__search-open{opacity: 0;visibility: hidden}.ui-mpc__search-open{grid-area: 1 / 2;transition: opacity 200ms ease, background-color 90ms ease, color 90ms ease}.ui-mpc__list{max-height: var(--ui-mpc-max);padding: 2px 6px 6px;overflow-y: auto;overscroll-behavior: contain;scrollbar-width: thin;scrollbar-color: var(--ui-mpc-fill-strong) transparent;transition: opacity 300ms ease}.ui-mpc[data-off] .ui-mpc__list, .ui-mpc[data-off] .ui-mpc__filters{opacity: 0.5}.ui-mpc[data-off] .ui-mpc__list:hover, .ui-mpc[data-off] .ui-mpc__list:focus-within{opacity: 0.85}.ui-mpc__group{padding: 12px 10px 4px;font-size: 10px !important;font-weight: 500 !important;line-height: 16px !important;letter-spacing: 0.5px;text-transform: uppercase;color: var(--ui-mpc-muted)}.ui-mpc__item{padding: 8px 10px 7px;border-radius: 8px;transition: background-color 90ms ease-out, opacity 220ms ease}.ui-mpc__item[data-hot], .ui-mpc__item[data-editing]{background: var(--ui-mpc-wash)}.ui-mpc__text{color: var(--ui-mpc-ink);overflow-wrap: anywhere;transition: color 240ms ease}.ui-mpc__item[data-paused] .ui-mpc__text{color: var(--ui-mpc-muted)}.ui-mpc__meta{display: flex;align-items: center;gap: 6px;min-height: 20px;margin-top: 2px;font-size: 12px;line-height: 16px;color: var(--ui-mpc-muted)}.ui-mpc__source{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-mpc__dot{color: var(--ui-mpc-faint)}.ui-mpc__tag{display: inline-flex;flex: none;align-items: center;height: 18px;padding: 0 6px;border-radius: 5px;background: var(--ui-mpc-amber-soft);font-size: 11px;font-weight: 500;line-height: 16px;color: var(--ui-mpc-amber);opacity: 0;transform: scale(0.9);transition: opacity 220ms ease, transform 280ms var(--ui-mpc-ease)}.ui-mpc__tag:not([data-on]){position: absolute;visibility: hidden}.ui-mpc__tag[data-on]{opacity: 1;transform: none;animation: ui-mpc-in 280ms var(--ui-mpc-ease) both}.ui-mpc__acts{display: inline-flex;flex: none;align-items: center;gap: 2px;margin: -4px -6px -4px auto;opacity: 0;transition: opacity 120ms ease}.ui-mpc__item:is([data-hot], :focus-within) .ui-mpc__acts, .ui-mpc__acts--edit{opacity: 1}.ui-mpc__acts--edit{gap: 4px;margin-top: 4px;margin-right: -2px;margin-bottom: 0}.ui-mpc__item[data-editing]{padding-bottom: 8px}.ui-mpc__icon{display: grid;flex: none;place-items: center;width: 28px;height: 28px;border-radius: 6px;color: var(--ui-mpc-icon);transition: background-color 90ms ease, color 90ms ease, opacity 200ms ease}.ui-mpc__icon:hover{background: var(--ui-mpc-wash);color: var(--ui-mpc-ink)}.ui-mpc__item .ui-mpc__icon:hover{background: var(--ui-mpc-fill)}.ui-mpc__item .ui-mpc__icon--forget:hover{background: var(--ui-mpc-red-soft);color: var(--ui-mpc-red)}.ui-mpc__icon-swap{display: grid;animation: ui-mpc-in 260ms ease both}.ui-mpc__text-btn{display: inline-flex;flex: none;align-items: center;height: 28px;padding: 0 10px;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-mpc-text);white-space: nowrap;transition: background-color 90ms ease, color 90ms ease, opacity 160ms ease}.ui-mpc__text-btn:hover{background: var(--ui-mpc-fill);color: var(--ui-mpc-ink)}.ui-mpc__text-btn--main, .ui-mpc__text-btn--main:hover{background: var(--ui-mpc-solid);color: var(--ui-mpc-on-solid)}.ui-mpc__text-btn--main:hover{opacity: 0.88}.ui-mpc__text-btn:disabled{cursor: default;opacity: 0.3}.ui-mpc__edit{display: block;width: 100%;min-height: 20px;margin: 0;padding: 0;border: 0;background: none;font: inherit;color: var(--ui-mpc-strong);caret-color: var(--ui-mpc-accent);resize: none;overflow: hidden;outline: none}.ui-mpc__edit::placeholder{color: var(--ui-mpc-faint);opacity: 1}.ui-mpc__empty{padding: 20px 8px 14px;font-size: 13px;text-align: center;color: var(--ui-mpc-muted)}.ui-mpc__bottom{padding: 6px;border-top: 0.5px solid var(--ui-mpc-line)}.ui-mpc__add{display: flex;align-items: center;gap: 8px;width: 100%;height: 32px;padding: 0 10px;border-radius: 6px;color: var(--ui-mpc-text);transition: background-color 90ms ease, color 90ms ease}.ui-mpc__add .ui-mpc__glyph{color: var(--ui-mpc-icon);transition: color 90ms ease}.ui-mpc__add:hover{background: var(--ui-mpc-wash);color: var(--ui-mpc-ink)}.ui-mpc__add:hover .ui-mpc__glyph{color: var(--ui-mpc-ink)}.ui-mpc__new{padding: 6px 4px 2px 10px}.ui-mpc__new-row{display: flex;align-items: center;gap: 8px;margin-top: 10px}.ui-mpc__cats{display: flex;flex: 1 1 auto;gap: 4px;min-width: 0;margin: -3px;padding: 3px;overflow-x: auto;scrollbar-width: none}.ui-mpc__cats::-webkit-scrollbar{display: none}.ui-mpc__cat{display: inline-flex;flex: none;align-items: center;padding: 4px 8px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-mpc-line);font-size: 12px;font-weight: 500;line-height: 20px;color: var(--ui-mpc-text);white-space: nowrap;transition: background-color 90ms ease, color 90ms ease}.ui-mpc__cat:hover{background: var(--ui-mpc-wash)}.ui-mpc__cat[aria-checked="true"]{background: var(--ui-mpc-fill);color: var(--ui-mpc-ink)}.ui-mpc__new .ui-mpc__acts--edit{margin: 0}.ui-mpc__foot{display: flex;align-items: center;gap: 8px;min-height: 44px;padding: 0 8px 0 16px;border-top: 0.5px solid var(--ui-mpc-line)}.ui-mpc__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-mpc-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-mpc__swap{display: grid;min-width: 0}.ui-mpc__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;animation: ui-mpc-swap-in 320ms ease both}.ui-mpc__swap-item[data-out]{animation: ui-mpc-swap-out 220ms ease both}.ui-mpc__forgot{display: flex;min-width: 0}.ui-mpc__flat{flex: none;white-space: pre}.ui-mpc__quote{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-mpc__action{display: inline-flex;flex: none;align-items: center;gap: 4px;height: 28px;padding: 0 6px 0 10px;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-mpc-text);white-space: nowrap;animation: ui-mpc-swap-in 300ms ease both;transition: background-color 90ms ease, color 90ms ease}.ui-mpc__action .ui-mpc__glyph{color: var(--ui-mpc-icon);transition: transform 220ms var(--ui-mpc-ease), color 90ms ease}.ui-mpc__action:hover{background: var(--ui-mpc-wash);color: var(--ui-mpc-ink)}.ui-mpc__action:not(.ui-mpc__action--undo):hover .ui-mpc__glyph{transform: translateX(2px);color: var(--ui-mpc-ink)}.ui-mpc__action--undo{gap: 6px;padding: 0 10px 0 8px;background: var(--ui-mpc-card);box-shadow: var(--ui-mpc-shadow);color: var(--ui-mpc-strong)}.ui-mpc__action--undo:hover{background: #fafafa;color: var(--ui-mpc-strong)}@keyframes ui-mpc-in{from{opacity: 0;transform: scale(0.9)}}@keyframes ui-mpc-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-mpc-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@container (max-width: 360px){.ui-mpc__chip-count{display: none}.ui-mpc__head{padding-left: 14px}.ui-mpc__filters{padding-left: 14px}.ui-mpc__foot{padding-left: 14px}.ui-mpc__note{margin-left: 14px !important}}@container (max-width: 320px){.ui-mpc__switch-label{display: none}.ui-mpc__switch{padding: 0 6px}.ui-mpc__chip{padding: 4px 8px}}@media (pointer: coarse){.ui-mpc__acts{opacity: 1}.ui-mpc__icon{width: 34px;height: 34px}.ui-mpc__acts{margin-top: -7px;margin-bottom: -7px}.ui-mpc__acts--edit{margin-top: 4px;margin-bottom: 0}.ui-mpc__chip{padding: 6px 12px}.ui-mpc__cat{padding: 5px 10px}.ui-mpc__text-btn, .ui-mpc__action{height: 34px}.ui-mpc__switch, .ui-mpc__add{height: 36px}.ui-mpc__search, .ui-mpc__input{height: 34px}.ui-mpc__foot{min-height: 52px}}@media (prefers-reduced-motion: reduce){.ui-mpc *, .ui-mpc *::before, .ui-mpc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-mpc{--ui-mpc-card: #1c1c1e;--ui-mpc-ink: rgba(255, 255, 255, 0.9);--ui-mpc-strong: #ffffff;--ui-mpc-text: rgba(255, 255, 255, 0.62);--ui-mpc-muted: rgba(255, 255, 255, 0.46);--ui-mpc-faint: rgba(255, 255, 255, 0.3);--ui-mpc-icon: rgba(255, 255, 255, 0.5);--ui-mpc-line: rgba(255, 255, 255, 0.08);--ui-mpc-wash: rgba(255, 255, 255, 0.04);--ui-mpc-fill: rgba(255, 255, 255, 0.08);--ui-mpc-fill-strong: rgba(255, 255, 255, 0.14);--ui-mpc-accent: #4d8dff;--ui-mpc-focus: rgba(77, 141, 255, 0.5);--ui-mpc-red: #ff8589;--ui-mpc-red-soft: rgba(229, 72, 77, 0.14);--ui-mpc-amber: #f0b93a;--ui-mpc-amber-soft: rgba(232, 162, 12, 0.14);--ui-mpc-solid: rgba(255, 255, 255, 0.9);--ui-mpc-on-solid: #1c1c1e;--ui-mpc-knob: #ffffff;--ui-mpc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-mpc__action--undo:hover{background: #232326}:where(.dark, [data-theme="dark"]) .ui-mpc__switch[aria-checked="false"] .ui-mpc__knob{background: rgba(255, 255, 255, 0.55)}`;
var fe = [{ id: `ts`, text: `Prefers TypeScript examples over plain JavaScript`, category: `Preferences`, source: `From chat`, date: `Oct 12` }, { id: `short`, text: `Likes short answers first, details only when asked`, category: `Preferences`, source: `You added`, date: `Oct 2` }, { id: `inter`, text: `Designs with Inter and a 4px spacing grid`, category: `Preferences`, source: `From Figma`, date: `Oct 7` }, { id: `role`, text: `Product designer and front-end developer at a small studio`, category: `Work`, source: `From chat`, date: `Sep 28` }, { id: `stack`, text: `Ships with React, Vite and Tailwind; deploys on Vercel`, category: `Work`, source: `From chat`, date: `Oct 3` }, { id: `notes`, text: `Sends release notes to clients every Friday`, category: `Work`, source: `From chat`, date: `Oct 9` }, { id: `fintech`, text: `Redesigning the onboarding flow for a fintech client, due Oct 24`, category: `Projects`, source: `From chat`, date: `Oct 11` }, { id: `tokens`, text: `Keeps design tokens in one tokens.json shared with the code`, category: `Projects`, source: `From chat`, date: `Oct 5` }];
function pe() {
  let e = (0, n3.useRef)(null), t = (0, n3.useRef)(false);
  (0, n3.useEffect)(() => {
    let n4 = (t2) => () => e.current?.querySelector(t2)?.click(), r2 = (e2, t2) => n4(`[data-memory="${e2}"] [data-act="${t2}"]`), i3 = (e2) => n4(`.ui-mpc__chip:nth-child(${e2})`), a2 = [[700, r2(`short`, `pause`)], [2700, r2(`ts`, `forget`)], [2600, n4(`.ui-mpc__action--undo`)], [2200, i3(4)], [2400, i3(1)], [1800, r2(`short`, `pause`)]], o2 = 0, s2 = 0, c2 = () => {
      t.current || (o2 >= a2.length && (o2 = 0, a2[0][0] = 1800), s2 = window.setTimeout(() => {
        t.current || (a2[o2][1](), o2++, c2());
      }, a2[o2][0]));
    };
    return c2(), () => window.clearTimeout(s2);
  }, []);
  let i2 = () => t.current = true;
  return (0, r.jsx)(`div`, { ref: e, className: `mp-demo`, onPointerEnter: i2, onPointerDownCapture: i2, onKeyDownCapture: i2, onFocusCapture: i2, children: (0, r.jsx)(ue, { memories: fe, maxHeight: 330 }) });
}

export {
  pe
};
