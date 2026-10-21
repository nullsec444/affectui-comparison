import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo.clean-BYDkomFg.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (...e) => e.filter(Boolean).join(` `);
var a = (e) => !!e && Object.values(e).some(Boolean);
var o = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function s(e) {
  e && !o() && e.animate && e.animate([{ transform: `none` }, { transform: `translateX(-4px)` }, { transform: `translateX(4px)` }, { transform: `translateX(-2px)` }, { transform: `none` }], { duration: 340, easing: `ease-out` });
}
function c(e, t, n4) {
  if (!e || !t) return;
  let r2 = e.querySelector(n4);
  if (!r2 || !r2.offsetWidth) {
    t.style.opacity = `0`;
    return;
  }
  let i2 = !t.dataset.ready;
  i2 && (t.style.transition = `none`), t.style.opacity = `1`, t.style.width = `${r2.offsetWidth}px`, t.style.height = `${r2.offsetHeight}px`, t.style.transform = `translate(${r2.offsetLeft}px, ${r2.offsetTop}px)`, i2 && (t.dataset.ready = `1`, t.offsetWidth, t.style.transition = ``);
}
var l = ({ d: e, className: t }) => (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, className: i(`ui-sfc__glyph`, t), "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: e }) });
var u = { check: `M5.5 12.5l4 4L18.5 8`, close: `M7 7l10 10M17 7 7 17`, back: `M14.5 6l-6 6 6 6` };
var d = ({ className: e }) => (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, className: i(`ui-sfc__draw`, e), "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: u.check, pathLength: 1 }) });
var f = (0, n3.createContext)({ errors: {}, shake: 0, report: () => {
} });
var p = (0, n3.createContext)(null);
function m({ steps: e, initialValues: t, onComplete: o2, initialStep: s2 = 0, step: c2, onStepChange: p2, submitLabel: m2 = `Finish`, submittingLabel: h2 = `Creating\u2026`, success: g2, className: _2 }) {
  let v2 = e.length, [y2, b2] = (0, n3.useState)(s2), C2 = Math.max(0, Math.min(v2 - 1, c2 ?? y2)), [w2, T2] = (0, n3.useState)(t), E2 = (0, n3.useRef)(w2), [D2, O] = (0, n3.useState)(C2), k = Math.max(D2, C2), [ee, A] = (0, n3.useState)({}), [j, te] = (0, n3.useState)(0), [M, N] = (0, n3.useState)(null), [P, F] = (0, n3.useState)(false), [I, L] = (0, n3.useState)(``), [R, z] = (0, n3.useState)(false), [ne, B] = (0, n3.useState)(``), re = (0, n3.useRef)(null), V = (0, n3.useRef)(null), H = (0, n3.useRef)(null), U = (0, n3.useRef)(null), W = (0, n3.useRef)(false), G = (0, n3.useRef)(false), K = (0, n3.useRef)({}), ie = (0, n3.useCallback)((e2, t2) => {
    K.current = { ...K.current, [e2]: t2 ?? void 0 };
  }, []), q = (0, n3.useId)(), J = R ? v2 : C2, [Y, X] = (0, n3.useState)({ index: J, from: null, dir: 1 });
  Y.index !== J && X({ index: J, from: Y.index, dir: J > Y.index ? 1 : -1 }), (0, n3.useEffect)(() => {
    if (Y.from === null) return;
    let e2 = window.setTimeout(() => X((e3) => ({ ...e3, from: null })), 420);
    return () => clearTimeout(e2);
  }, [Y.index, Y.from]);
  let ae = (0, n3.useCallback)((e2) => {
    E2.current = { ...E2.current, ...e2 }, T2(E2.current);
  }, []), Z = (t2) => {
    let n4 = Math.max(0, Math.min(v2 - 1, t2));
    n4 !== C2 && (W.current = true, G.current = true, K.current = {}, c2 === void 0 && b2(n4), p2?.(n4), O((e2) => Math.max(e2, n4)), L(``), B(`Step ${n4 + 1} of ${v2}: ${e[n4].title}`));
  }, Q = () => {
    let t2 = { ...K.current, ...e[C2].validate?.(E2.current) };
    return a(t2) ? (A((e2) => ({ ...e2, [C2]: true })), te((e2) => e2 + 1), B(Object.values(t2).find(Boolean) ?? `Check this step`), false) : (A((e2) => ({ ...e2, [C2]: false })), true);
  }, oe = async (e2) => {
    if (e2?.preventDefault(), !(P || R || !Q())) {
      if (C2 < v2 - 1) {
        M !== null && M > C2 ? (N(null), Z(M)) : Z(C2 + 1);
        return;
      }
      F(true), L(``);
      try {
        await o2?.(E2.current), W.current = true, G.current = true, z(true), B(`All done`);
      } catch (e3) {
        let t2 = e3 instanceof Error && e3.message ? e3.message : `Something went wrong \u2013 try again`;
        L(t2), B(t2);
      } finally {
        F(false);
      }
    }
  }, se = () => {
    N(null), Z(C2 - 1);
  }, ce = (t2) => {
    let n4 = e.findIndex((e2) => e2.id === t2);
    n4 < 0 || n4 === C2 || n4 > C2 && !Q() || (N(n4 < C2 ? C2 : null), Z(n4));
  }, le = () => {
    E2.current = t, T2(t), A({}), N(null), O(s2), z(false), L(``), W.current = true, G.current = true, K.current = {}, c2 === void 0 && b2(s2), p2?.(s2);
  };
  (0, n3.useEffect)(() => {
    if (!W.current) return;
    W.current = false;
    let e2 = V.current?.querySelector(`[data-pane="current"]`);
    (e2?.querySelector(`input:not([type="hidden"]):not(:disabled), textarea, select`) ?? e2?.querySelector(`.ui-sfc__heading`))?.focus({ preventScroll: true });
  }, [J]), (0, n3.useEffect)(() => {
    j && V.current?.querySelector(`[data-pane="current"] [aria-invalid="true"]`)?.focus({ preventScroll: true });
  }, [j]), (0, n3.useLayoutEffect)(() => {
    let e2 = V.current, t2 = e2?.querySelector(`[data-pane="current"]`);
    if (!e2 || !t2) return;
    let n4 = !e2.dataset.ready, r2 = () => e2.style.height = `${t2.offsetHeight}px`;
    n4 && (e2.style.transition = `none`), r2(), n4 && (e2.dataset.ready = `1`, e2.offsetWidth, e2.style.transition = ``);
    let i2 = new ResizeObserver(r2);
    return i2.observe(t2), () => i2.disconnect();
  }, [J]), (0, n3.useLayoutEffect)(() => {
    let e2 = H.current, t2 = U.current;
    if (!e2 || !t2) return;
    let n4 = () => e2.style.width = `${t2.offsetWidth}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    return r2.observe(t2), () => r2.disconnect();
  }, []);
  let $ = e[C2], ue = ee[C2] ? $.validate?.(w2) ?? {} : {}, de = !a($.validate?.(w2)), fe = C2 === v2 - 1, pe = P ? h2 : fe ? m2 : M !== null && M > C2 ? `Back to ${e[M].title.toLowerCase()}` : `Continue`, me = { values: w2, setValues: ae, errors: ue, goTo: ce, next: () => re.current?.requestSubmit() }, he = (t2) => {
    if (t2 >= v2) return g2 ? g2(w2, le) : (0, r.jsx)(x, { title: `All set`, description: `Everything is saved. You can change it any time.` });
    let n4 = e[t2], i2 = t2 === C2 ? me : { ...me, errors: {} };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`h2`, { className: `ui-sfc__heading`, tabIndex: -1, id: `${q}-h${t2}`, children: n4.heading ?? n4.title }), n4.description && (0, r.jsx)(`p`, { className: `ui-sfc__desc`, children: n4.description }), (0, r.jsx)(`div`, { className: `ui-sfc__body`, children: n4.render(i2) })] });
  }, ge = Y.from !== null && Y.from !== Y.index ? [Y.from, Y.index] : [Y.index];
  return (0, r.jsxs)(`div`, { className: i(`ui-sfc`, _2), style: { "--ui-sfc-n": v2 }, children: [(0, r.jsx)(`style`, { href: `ui-stepper-form-clean`, precedence: `default`, children: S }), (0, r.jsxs)(`div`, { className: `ui-sfc__head`, children: [(0, r.jsx)(`div`, { className: `ui-sfc__steps`, children: (0, r.jsx)(`ol`, { className: `ui-sfc__list`, "aria-label": `Progress`, children: e.map((e2, t2) => {
    let n4 = R || t2 < k && t2 !== C2 ? `done` : t2 === C2 ? `current` : `upcoming`, i2 = !R && !P && t2 !== C2 && t2 <= k, a2 = (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`span`, { className: `ui-sfc__bar`, "aria-hidden": `true` }), (0, r.jsx)(`span`, { className: `ui-sfc__mark`, children: n4 === `done` ? (0, r.jsx)(d, {}, `check`) : (0, r.jsx)(`span`, { children: t2 + 1 }, `num`) }), (0, r.jsx)(`span`, { className: `ui-sfc__step-label`, children: e2.title }), (0, r.jsx)(`span`, { className: `ui-sfc__sr`, children: n4 === `done` ? ` (done)` : n4 === `current` ? ` (current)` : `` })] });
    return (0, r.jsx)(`li`, { className: `ui-sfc__step`, "data-state": n4, "aria-current": !R && t2 === C2 ? `step` : void 0, children: i2 ? (0, r.jsx)(`button`, { type: `button`, className: `ui-sfc__step-btn`, onClick: () => ce(e2.id), children: a2 }) : (0, r.jsx)(`span`, { className: `ui-sfc__step-btn`, children: a2 }) }, e2.id);
  }) }) }), (0, r.jsx)(`div`, { className: `ui-sfc__compact`, "aria-hidden": `true`, children: (0, r.jsx)(`span`, { className: `ui-sfc__compact-text`, children: R ? (0, r.jsxs)(r.Fragment, { children: [`All `, v2, ` steps done`] }) : (0, r.jsxs)(r.Fragment, { children: [`Step `, C2 + 1, ` of `, v2, (0, r.jsx)(`span`, { className: `ui-sfc__compact-dot`, children: `\xB7` }), (0, r.jsx)(`span`, { className: `ui-sfc__compact-title`, children: $.title })] }) }, R ? `done` : C2) })] }), (0, r.jsxs)(`form`, { ref: re, className: `ui-sfc__card`, noValidate: true, onSubmit: oe, "aria-labelledby": R ? void 0 : `${q}-h${C2}`, children: [(0, r.jsx)(`div`, { ref: V, className: `ui-sfc__viewport`, children: ge.map((e2) => {
    let t2 = e2 === Y.index;
    return (0, r.jsx)(`div`, { className: `ui-sfc__pane`, "data-pane": t2 ? `current` : `leaving`, "data-dir": Y.dir, "data-first": !G.current || void 0, inert: !t2, "aria-hidden": !t2 || void 0, children: (0, r.jsx)(f.Provider, { value: { errors: t2 && e2 === C2 ? ue : {}, shake: t2 ? j : 0, report: ie }, children: he(e2) }) }, e2);
  }) }), (0, r.jsx)(`div`, { className: `ui-sfc__foot-fold`, "data-hidden": R || void 0, children: (0, r.jsxs)(`div`, { className: `ui-sfc__foot`, inert: R, children: [(0, r.jsxs)(`button`, { type: `button`, className: `ui-sfc__btn ui-sfc__btn-ghost`, "data-hidden": C2 === 0 || void 0, disabled: C2 === 0 || P, onClick: se, children: [(0, r.jsx)(l, { d: u.back }), `Back`] }), I && (0, r.jsx)(`span`, { className: `ui-sfc__submit-error`, role: `alert`, children: I }), (0, r.jsx)(`button`, { ref: H, type: `submit`, className: `ui-sfc__btn ui-sfc__btn-primary`, "aria-disabled": !de || P || void 0, "data-busy": P || void 0, children: (0, r.jsxs)(`span`, { ref: U, className: `ui-sfc__btn-inner`, children: [P && (0, r.jsx)(`span`, { className: `ui-sfc__spinner`, "aria-hidden": `true` }), (0, r.jsx)(`span`, { className: `ui-sfc__btn-label`, children: pe }, pe)] }) })] }) })] }), (0, r.jsx)(`span`, { className: `ui-sfc__sr`, "aria-live": `polite`, children: ne })] });
}
function h({ name: e, label: t, hint: i2, optional: a2, children: o2 }) {
  let { errors: c2, shake: l2, report: u2 } = (0, n3.useContext)(f), [d2, m2] = (0, n3.useState)(null), [h2, g2] = (0, n3.useState)(0), _2 = (0, n3.useId)(), v2 = (0, n3.useRef)(null), y2 = c2[e] ?? d2 ?? ``, b2 = (0, n3.useRef)(y2);
  y2 && (b2.current = y2);
  let x2 = !!y2;
  (0, n3.useEffect)(() => {
    l2 && (c2[e] || d2) && s(v2.current);
  }, [l2]), (0, n3.useEffect)(() => {
    h2 && s(v2.current);
  }, [h2]);
  let S2 = (0, n3.useCallback)((t2) => {
    m2(t2), u2(e, t2), t2 && g2((e2) => e2 + 1);
  }, [e, u2]);
  return (0, r.jsxs)(`div`, { className: `ui-sfc__field`, "data-invalid": x2 || void 0, children: [(0, r.jsxs)(`label`, { className: `ui-sfc__label`, htmlFor: _2, children: [t, a2 && (0, r.jsx)(`span`, { className: `ui-sfc__optional`, children: `Optional` })] }), (0, r.jsx)(`div`, { ref: v2, className: `ui-sfc__control`, children: (0, r.jsx)(p.Provider, { value: { id: _2, invalid: x2, describedBy: x2 ? `${_2}-msg` : i2 ? `${_2}-hint` : void 0, flag: S2 }, children: o2 }) }), (0, r.jsx)(`div`, { className: `ui-sfc__fold`, "data-open": x2 || void 0, children: (0, r.jsx)(`div`, { children: (0, r.jsx)(`p`, { className: `ui-sfc__msg`, id: `${_2}-msg`, children: b2.current }, b2.current) }) }), i2 && (0, r.jsx)(`div`, { className: `ui-sfc__fold`, "data-open": !x2 || void 0, children: (0, r.jsx)(`div`, { children: (0, r.jsx)(`p`, { className: `ui-sfc__hint`, id: `${_2}-hint`, children: i2 }) }) })] });
}
function g({ prefix: e, className: t, ...a2 }) {
  let o2 = (0, n3.useContext)(p);
  return (0, r.jsxs)(`div`, { className: i(`ui-sfc__input`, t), "data-invalid": o2?.invalid || void 0, children: [e && (0, r.jsx)(`span`, { className: `ui-sfc__prefix`, "aria-hidden": `true`, children: e }), (0, r.jsx)(`input`, { id: o2?.id, "aria-invalid": o2?.invalid || void 0, "aria-describedby": o2?.describedBy, autoComplete: `off`, spellCheck: false, ...a2 })] });
}
var _ = /^[^\s@,;]+@[^\s@,;]+\.[^\s@,;]{2,}$/;
function v({ value: e, onChange: t, placeholder: i2 = `name@company.com`, validate: a2 = (e2, t2) => _.test(e2) ? t2.includes(e2) ? `Already on the list` : null : `That doesn't look like an email address`, max: s2 }) {
  let c2 = (0, n3.useContext)(p), [d2, f2] = (0, n3.useState)(``), [m2, h2] = (0, n3.useState)([]), g2 = (0, n3.useRef)(null), v2 = (0, n3.useRef)(null), y2 = (0, n3.useRef)(e);
  y2.current = e;
  let b2 = (0, n3.useRef)(null), x2 = (0, n3.useRef)(e.length);
  (0, n3.useLayoutEffect)(() => {
    let t2 = b2.current;
    t2 && e.length > x2.current && t2.scrollTo({ left: t2.scrollWidth, behavior: o() ? `auto` : `smooth` }), x2.current = e.length;
  }, [e.length]);
  let S2 = (e2) => {
    let n4 = e2.split(/[\s,;]+/).map((e3) => e3.trim().toLowerCase()).filter(Boolean);
    if (!n4.length) return true;
    let r2 = [...y2.current], i3 = [], o2 = null;
    for (let e3 of n4) {
      let t2 = s2 !== void 0 && r2.length >= s2 ? `Up to ${s2}` : a2(e3, r2);
      t2 ? (o2 ??= t2, i3.push(e3)) : r2.push(e3);
    }
    return r2.length !== y2.current.length && (y2.current = r2, t(r2)), f2(i3.join(`, `)), c2?.flag(o2), !o2;
  }, C2 = (e2) => {
    if (m2.includes(e2)) return;
    h2((t2) => [...t2, e2]);
    let n4 = v2.current?.querySelector(`[data-entry="${CSS.escape(e2)}"]`), r2 = () => {
      h2((t2) => t2.filter((t3) => t3 !== e2)), t(y2.current.filter((t2) => t2 !== e2));
    };
    n4 && n4.animate && !o() ? n4.animate([{ width: `${n4.offsetWidth}px`, marginRight: `0px`, opacity: 1, transform: `none` }, { width: `0px`, marginRight: `-6px`, opacity: 0, transform: `scale(0.85)` }], { duration: 240, easing: `cubic-bezier(0.22, 1, 0.36, 1)`, fill: `forwards` }).onfinish = r2 : r2();
  };
  return (0, r.jsxs)(`div`, { ref: b2, className: `ui-sfc__tags`, "data-invalid": c2?.invalid || void 0, onClick: (e2) => e2.target === e2.currentTarget && g2.current?.focus(), children: [e.length > 0 && (0, r.jsx)(`ul`, { ref: v2, className: `ui-sfc__chips`, "aria-label": `Added`, children: e.map((e2) => (0, r.jsxs)(`li`, { className: `ui-sfc__chip`, "data-entry": e2, "data-leaving": m2.includes(e2) || void 0, children: [(0, r.jsx)(`span`, { className: `ui-sfc__chip-text`, title: e2, children: e2 }), (0, r.jsx)(`button`, { type: `button`, className: `ui-sfc__chip-x`, "aria-label": `Remove ${e2}`, onClick: () => C2(e2), children: (0, r.jsx)(l, { d: u.close }) })] }, e2)) }), (0, r.jsx)(`input`, { ref: g2, id: c2?.id, type: `email`, inputMode: `email`, autoComplete: `off`, spellCheck: false, className: `ui-sfc__tags-input`, placeholder: e.length ? `Add another` : i2, value: d2, "aria-invalid": c2?.invalid || void 0, "aria-describedby": c2?.describedBy, onChange: (e2) => {
    f2(e2.target.value), c2?.flag(null);
  }, onKeyDown: (t2) => {
    t2.key === `Enter` && d2.trim() || t2.key === `,` || t2.key === `;` ? (t2.preventDefault(), S2(d2)) : t2.key === `Backspace` && !d2 && e.length && (t2.preventDefault(), C2(e[e.length - 1]));
  }, onPaste: (e2) => {
    let t2 = e2.clipboardData.getData(`text`);
    /[\s,;]/.test(t2.trim()) && (e2.preventDefault(), S2(`${d2} ${t2}`));
  }, onBlur: () => d2.trim() && S2(d2) })] });
}
function y({ value: e, onChange: t, options: i2, label: a2 }) {
  let o2 = (0, n3.useRef)(null), s2 = (0, n3.useRef)(null);
  return (0, n3.useLayoutEffect)(() => {
    c(o2.current, s2.current, `[aria-checked="true"]`);
  }), (0, n3.useEffect)(() => {
    let e2 = o2.current;
    if (!e2) return;
    let t2 = new ResizeObserver(() => c(e2, s2.current, `[aria-checked="true"]`));
    return t2.observe(e2), () => t2.disconnect();
  }, []), (0, r.jsxs)(`div`, { ref: o2, className: `ui-sfc__choices`, role: `radiogroup`, "aria-label": a2, onKeyDown: (n4) => {
    let r2 = i2.findIndex((t2) => t2.value === e), a3 = n4.key === `ArrowRight` || n4.key === `ArrowDown` ? 1 : n4.key === `ArrowLeft` || n4.key === `ArrowUp` ? -1 : 0;
    if (a3) {
      n4.preventDefault();
      let e2 = i2[(r2 + a3 + i2.length) % i2.length];
      t(e2.value), o2.current?.querySelector(`[data-value="${CSS.escape(e2.value)}"]`)?.focus();
    } else n4.key === `Enter` && (n4.preventDefault(), n4.currentTarget.closest(`form`)?.requestSubmit());
  }, children: [(0, r.jsx)(`span`, { ref: s2, className: `ui-sfc__ring`, "aria-hidden": `true` }), i2.map((n4) => {
    let i3 = n4.value === e;
    return (0, r.jsxs)(`button`, { type: `button`, role: `radio`, "aria-checked": i3, tabIndex: i3 ? 0 : -1, "data-value": n4.value, className: `ui-sfc__choice`, onClick: () => t(n4.value), children: [(0, r.jsxs)(`span`, { className: `ui-sfc__choice-top`, children: [(0, r.jsx)(`span`, { className: `ui-sfc__choice-title`, children: n4.title }), n4.badge && (0, r.jsx)(`span`, { className: `ui-sfc__badge`, children: n4.badge }), (0, r.jsx)(`span`, { className: `ui-sfc__radio`, "aria-hidden": `true` })] }), n4.aside && (0, r.jsx)(`span`, { className: `ui-sfc__choice-aside`, children: n4.aside }), n4.description && (0, r.jsx)(`span`, { className: `ui-sfc__choice-desc`, children: n4.description })] }, n4.value);
  })] });
}
function b({ rows: e, onEdit: t }) {
  return (0, r.jsx)(`dl`, { className: `ui-sfc__review`, children: e.map((e2) => (0, r.jsxs)(`div`, { className: `ui-sfc__review-row`, children: [(0, r.jsx)(`dt`, { children: e2.label }), (0, r.jsx)(`dd`, { children: e2.value }), e2.step && t && (0, r.jsx)(`button`, { type: `button`, className: `ui-sfc__edit`, "aria-label": `Edit ${e2.label.toLowerCase()}`, onClick: () => t(e2.step), children: `Edit` })] }, e2.label)) });
}
function x({ title: e, description: t, children: n4 }) {
  return (0, r.jsxs)(`div`, { className: `ui-sfc__success`, children: [(0, r.jsx)(`span`, { className: `ui-sfc__success-check`, children: (0, r.jsx)(d, {}) }), (0, r.jsx)(`h2`, { className: `ui-sfc__heading`, tabIndex: -1, children: e }), t && (0, r.jsx)(`p`, { className: `ui-sfc__desc`, children: t }), n4 && (0, r.jsx)(`div`, { className: `ui-sfc__success-actions`, children: n4 })] });
}
var S = `.ui-sfc{--ui-sfc-card: #ffffff;--ui-sfc-ink: rgba(0, 0, 0, 0.88);--ui-sfc-strong: #000000;--ui-sfc-text: rgba(0, 0, 0, 0.61);--ui-sfc-muted: rgba(0, 0, 0, 0.45);--ui-sfc-faint: rgba(0, 0, 0, 0.27);--ui-sfc-icon: rgba(0, 0, 0, 0.447);--ui-sfc-line: rgba(0, 0, 0, 0.06);--ui-sfc-fill: rgba(0, 0, 0, 0.06);--ui-sfc-fill-strong: rgba(0, 0, 0, 0.1);--ui-sfc-wash: rgba(0, 0, 0, 0.03);--ui-sfc-wash-soft: rgba(0, 0, 0, 0.015);--ui-sfc-accent: rgba(0, 96, 226, 0.765);--ui-sfc-accent-soft: rgba(0, 96, 226, 0.08);--ui-sfc-accent-fill: rgba(0, 96, 226, 0.05);--ui-sfc-accent-line: rgba(0, 96, 226, 0.35);--ui-sfc-ok: #1a9a52;--ui-sfc-ok-soft: rgba(26, 154, 82, 0.1);--ui-sfc-danger: #e5484d;--ui-sfc-danger-soft: rgba(229, 72, 77, 0.55);--ui-sfc-chip: rgba(0, 0, 0, 0.88);--ui-sfc-chip-hover: rgba(0, 0, 0, 0.8);--ui-sfc-on-chip: #fcfcfc;--ui-sfc-white-hover: #fafafa;--ui-sfc-focus: rgba(0, 96, 226, 0.35);--ui-sfc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-sfc-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.12), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-sfc-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;container-type: inline-size;display: grid;width: 100%;max-width: 520px;border-radius: 10px;background: var(--ui-sfc-card);box-shadow: var(--ui-sfc-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-sfc-ink);-webkit-font-smoothing: antialiased}.ui-sfc *, .ui-sfc *::before, .ui-sfc *::after{box-sizing: border-box}:where(.ui-sfc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-sfc) svg{display: block;flex: none}:where(.ui-sfc) :is(h2, p, dl, dd, ul, ol){margin: 0}.ui-sfc button:focus-visible{outline: 2px solid var(--ui-sfc-focus);outline-offset: 1px}.ui-sfc__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.65;stroke-linecap: round;stroke-linejoin: round}.ui-sfc__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-sfc__draw{width: 14px;height: 14px;fill: none;stroke: currentColor;stroke-width: 2.2;stroke-linecap: round;stroke-linejoin: round}.ui-sfc__draw path{stroke-dasharray: 1;stroke-dashoffset: 1;animation: ui-sfc-draw 360ms var(--ui-sfc-ease) 80ms forwards}.ui-sfc__head{padding: 16px 20px 0}.ui-sfc__steps{position: relative}.ui-sfc__list{display: grid;grid-template-columns: repeat(var(--ui-sfc-n), minmax(0, 1fr));gap: 8px;padding: 0;list-style: none}.ui-sfc__step{position: relative;display: grid;min-width: 0}.ui-sfc__step-btn{display: grid;grid-template-columns: auto minmax(0, 1fr);align-items: center;column-gap: 6px;row-gap: 6px;min-width: 0;margin: -4px;padding: 4px 4px 2px;border-radius: 6px;text-align: left;cursor: default;transition: background-color 100ms ease}button.ui-sfc__step-btn{cursor: pointer}button.ui-sfc__step-btn:hover{background: var(--ui-sfc-wash)}.ui-sfc__bar{position: relative;grid-column: 1 / -1;height: 2px;overflow: hidden;border-radius: 1px;background: var(--ui-sfc-line)}.ui-sfc__bar::after{content: "";position: absolute;inset: 0;border-radius: inherit;background: var(--ui-sfc-accent);transform: scaleX(0);transform-origin: left center;transition: transform 360ms var(--ui-sfc-ease)}.ui-sfc__step:not([data-state="upcoming"]) .ui-sfc__bar::after{transform: none}.ui-sfc__mark{display: inline-flex;flex: none;align-items: center;justify-content: flex-start;min-width: 12px;height: 16px;font-size: 10px;font-weight: 500;line-height: 16px;font-variant-numeric: tabular-nums;color: var(--ui-sfc-faint);transition: color 200ms ease}.ui-sfc__mark > span{animation: ui-sfc-in 260ms var(--ui-sfc-ease) both}.ui-sfc__mark .ui-sfc__draw{width: 12px;height: 12px;stroke-width: 2.4}.ui-sfc__step[data-state="current"] .ui-sfc__mark{color: var(--ui-sfc-accent)}.ui-sfc__step[data-state="done"] .ui-sfc__mark{color: var(--ui-sfc-accent)}.ui-sfc__step-label{overflow: hidden;min-width: 0;font-size: 10px;font-weight: 500;line-height: 16px;letter-spacing: 0.5px;text-transform: uppercase;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-sfc-muted);transition: color 200ms ease}.ui-sfc__step[data-state="done"] .ui-sfc__step-label{color: var(--ui-sfc-text)}.ui-sfc__step[data-state="current"] .ui-sfc__step-label{color: var(--ui-sfc-strong)}button.ui-sfc__step-btn:hover .ui-sfc__step-label{color: var(--ui-sfc-ink)}.ui-sfc__compact{display: none}.ui-sfc__compact-text{display: flex;min-width: 0;font-size: 10px;font-weight: 500;line-height: 16px;letter-spacing: 0.5px;text-transform: uppercase;font-variant-numeric: tabular-nums;color: var(--ui-sfc-muted);white-space: nowrap;animation: ui-sfc-in 280ms var(--ui-sfc-ease) both}.ui-sfc__compact-dot{margin: 0 6px;color: var(--ui-sfc-faint)}.ui-sfc__compact-title{overflow: hidden;text-overflow: ellipsis;color: var(--ui-sfc-strong)}.ui-sfc__card{display: grid;min-width: 0}.ui-sfc__viewport{position: relative;overflow: hidden;transition: height 360ms var(--ui-sfc-ease)}.ui-sfc__pane{padding: 20px 20px 20px;animation: ui-sfc-enter 360ms var(--ui-sfc-ease) both}.ui-sfc__pane[data-dir="-1"]{animation-name: ui-sfc-enter-back}.ui-sfc__pane[data-first]{animation: none}.ui-sfc__pane[data-pane="leaving"]{position: absolute;top: 0;left: 0;right: 0;pointer-events: none;animation: ui-sfc-leave 280ms var(--ui-sfc-ease) both}.ui-sfc__pane[data-pane="leaving"][data-dir="-1"]{animation-name: ui-sfc-leave-back}.ui-sfc__heading{font-size: 15px;font-weight: 500;line-height: 24px;color: var(--ui-sfc-strong);outline: none}.ui-sfc__desc{color: var(--ui-sfc-text);text-wrap: pretty}.ui-sfc__body{display: grid;gap: 16px;margin-top: 16px}.ui-sfc__field{display: grid;min-width: 0}.ui-sfc__label{display: flex;align-items: baseline;justify-content: space-between;gap: 8px;margin: 0 0 6px 2px;font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-sfc-text)}.ui-sfc__optional{font-weight: 400;color: var(--ui-sfc-muted)}.ui-sfc__control{min-width: 0}.ui-sfc__input, .ui-sfc__tags{display: flex;align-items: center;min-width: 0;height: 32px;border-radius: 8px;background: var(--ui-sfc-card);box-shadow: var(--ui-sfc-shadow);transition: box-shadow 120ms ease;cursor: text}.ui-sfc__input:hover, .ui-sfc__tags:hover{box-shadow: var(--ui-sfc-shadow-hover)}.ui-sfc__input:focus-within, .ui-sfc__tags:focus-within{outline: 2px solid var(--ui-sfc-focus);outline-offset: 1px}.ui-sfc__input[data-invalid], .ui-sfc__tags[data-invalid]{box-shadow: 0 0 0 0.5px var(--ui-sfc-danger), 0 1px 2px 0 rgba(229, 72, 77, 0.08)}.ui-sfc__input[data-invalid]:focus-within, .ui-sfc__tags[data-invalid]:focus-within{outline-color: rgba(229, 72, 77, 0.3)}.ui-sfc__input input, .ui-sfc__tags-input{flex: 1;min-width: 0;height: 32px;margin: 0;padding: 0 10px;border: 0;outline: none;background: none;font: inherit;color: var(--ui-sfc-ink)}.ui-sfc__input input::placeholder, .ui-sfc__tags-input::placeholder{color: var(--ui-sfc-faint)}.ui-sfc__prefix{flex: none;padding-left: 10px;color: var(--ui-sfc-muted);white-space: nowrap;user-select: none}.ui-sfc__prefix + input{padding-left: 0}.ui-sfc__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 260ms var(--ui-sfc-ease), opacity 200ms ease}.ui-sfc__fold[data-open]{grid-template-rows: 1fr;opacity: 1}.ui-sfc__fold > div{min-height: 0;overflow: hidden}.ui-sfc__msg, .ui-sfc__hint{padding: 6px 0 0 2px;font-size: 12px;line-height: 16px;text-wrap: pretty}.ui-sfc__msg{color: var(--ui-sfc-danger);animation: ui-sfc-in 240ms var(--ui-sfc-ease) both}.ui-sfc__hint{color: var(--ui-sfc-muted)}.ui-sfc__tags{gap: 4px;padding: 0 4px;overflow-x: auto;overflow-y: hidden;scrollbar-width: none;overscroll-behavior-x: contain}.ui-sfc__tags::-webkit-scrollbar{display: none}.ui-sfc__chips{display: contents;padding: 0;list-style: none}.ui-sfc__chip{display: inline-flex;flex: none;align-items: center;gap: 2px;max-width: 220px;height: 24px;padding: 0 3px 0 8px;overflow: hidden;border-radius: 6px;background: var(--ui-sfc-fill);font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-sfc-ink);white-space: nowrap;animation: ui-sfc-chip 260ms var(--ui-sfc-ease) both}.ui-sfc__chip[data-leaving]{pointer-events: none}.ui-sfc__chip-text{overflow: hidden;text-overflow: ellipsis}.ui-sfc__chip-x{display: grid;place-items: center;flex: none;width: 18px;height: 18px;border-radius: 4px;color: var(--ui-sfc-icon);transition: background-color 100ms ease, color 100ms ease}.ui-sfc__chip-x .ui-sfc__glyph{width: 12px;height: 12px;stroke-width: 1.9}.ui-sfc__chip-x:hover{background: var(--ui-sfc-fill);color: var(--ui-sfc-ink)}.ui-sfc__chip[data-leaving] .ui-sfc__chip-x{background: none}.ui-sfc__tags-input{flex: 1 0 140px;height: 24px;padding: 0 6px}.ui-sfc__tags-input:first-child{padding-left: 6px}.ui-sfc__choices{position: relative;display: grid;grid-auto-columns: minmax(0, 1fr);grid-auto-flow: column;gap: 8px}.ui-sfc__ring{position: absolute;top: 0;left: 0;z-index: 2;border-radius: 8px;box-shadow: 0 0 0 0.5px var(--ui-sfc-accent-line);opacity: 0;pointer-events: none;transition: transform 260ms var(--ui-sfc-ease), width 260ms var(--ui-sfc-ease), height 260ms var(--ui-sfc-ease), opacity 160ms ease}.ui-sfc__choice{position: relative;display: grid;align-content: start;gap: 2px;min-width: 0;padding: 10px 12px 12px;border-radius: 8px;background: var(--ui-sfc-card);box-shadow: var(--ui-sfc-shadow);text-align: left;transition: background-color 100ms ease}.ui-sfc__choice:hover{background: var(--ui-sfc-wash-soft)}.ui-sfc__choice[aria-checked="true"]{background: var(--ui-sfc-accent-fill)}.ui-sfc__choice:focus-visible{outline-offset: 3px}.ui-sfc__choice-top{display: flex;align-items: center;gap: 6px;min-width: 0}.ui-sfc__choice-title{overflow: hidden;font-weight: 500;color: var(--ui-sfc-strong);white-space: nowrap;text-overflow: ellipsis}.ui-sfc__badge{flex: none;padding: 0 5px;border-radius: 5px;background: var(--ui-sfc-accent-soft);font-size: 11px;font-weight: 500;line-height: 16px;color: var(--ui-sfc-accent)}.ui-sfc__radio{position: relative;flex: none;width: 14px;height: 14px;margin-left: auto;border-radius: 50%;box-shadow: inset 0 0 0 1px var(--ui-sfc-fill-strong);transition: box-shadow 200ms ease}.ui-sfc__radio::after{content: "";position: absolute;inset: 3.5px;border-radius: 50%;background: var(--ui-sfc-accent);transform: scale(0);transition: transform 280ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-sfc__choice[aria-checked="true"] .ui-sfc__radio{box-shadow: inset 0 0 0 1px var(--ui-sfc-accent)}.ui-sfc__choice[aria-checked="true"] .ui-sfc__radio::after{transform: scale(1)}.ui-sfc__choice-aside{font-variant-numeric: tabular-nums;color: var(--ui-sfc-ink)}.ui-sfc__choice-desc{margin-top: 2px;font-size: 12px;line-height: 16px;color: var(--ui-sfc-text);text-wrap: pretty}.ui-sfc__review{display: grid;border-radius: 8px;box-shadow: var(--ui-sfc-shadow)}.ui-sfc__review-row{display: grid;grid-template-columns: 96px minmax(0, 1fr) auto;align-items: baseline;gap: 12px;padding: 10px 8px 10px 12px}.ui-sfc__review-row + .ui-sfc__review-row{border-top: 0.5px solid var(--ui-sfc-line)}.ui-sfc__review dt{font-size: 12px;line-height: 20px;color: var(--ui-sfc-muted)}.ui-sfc__review dd{min-width: 0;color: var(--ui-sfc-ink);overflow-wrap: break-word}.ui-sfc__edit{height: 24px;margin: -2px 0;padding: 0 8px;border-radius: 6px;font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-sfc-text);transition: background-color 100ms ease, color 100ms ease}.ui-sfc__edit:hover{background: var(--ui-sfc-wash);color: var(--ui-sfc-ink)}.ui-sfc__success{display: grid;justify-items: center;padding: 16px 0 8px;text-align: center}.ui-sfc__success-check{display: grid;place-items: center;width: 36px;height: 36px;margin-bottom: 12px;border-radius: 50%;background: var(--ui-sfc-ok-soft);color: var(--ui-sfc-ok);animation: ui-sfc-pop 520ms cubic-bezier(0.34, 1.56, 0.64, 1) 120ms both}.ui-sfc__success-check .ui-sfc__draw{width: 18px;height: 18px;stroke-width: 2}.ui-sfc__success-check .ui-sfc__draw path{animation-delay: 320ms}.ui-sfc__success .ui-sfc__heading{animation: ui-sfc-in 340ms var(--ui-sfc-ease) 220ms both}.ui-sfc__success .ui-sfc__desc{max-width: 40ch;text-wrap: balance;animation: ui-sfc-in 340ms var(--ui-sfc-ease) 290ms both}.ui-sfc__success-actions{display: flex;flex-wrap: wrap;justify-content: center;gap: 8px;margin-top: 16px;animation: ui-sfc-in 340ms var(--ui-sfc-ease) 360ms both}.ui-sfc__foot-fold{position: sticky;bottom: 0;z-index: 3;display: grid;grid-template-rows: 1fr;border-radius: 0 0 10px 10px;background: var(--ui-sfc-card);transition: grid-template-rows 340ms var(--ui-sfc-ease), opacity 200ms ease}.ui-sfc__foot-fold[data-hidden]{grid-template-rows: 0fr;opacity: 0}.ui-sfc__foot{display: flex;align-items: center;gap: 12px;min-height: 0;overflow: hidden;padding: 0 12px;border-top: 0.5px solid var(--ui-sfc-line)}.ui-sfc__foot::before{content: "";flex: none;width: 0;height: 48px;margin-right: -12px}.ui-sfc__btn{display: inline-flex;align-items: center;justify-content: center;flex: none;height: 28px;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;white-space: nowrap;transition: background-color 100ms ease, opacity 200ms ease, transform 120ms ease, width 300ms var(--ui-sfc-ease), visibility 200ms}.ui-sfc__btn-ghost, .ui-sfc__btn-secondary{gap: 6px;padding: 0 10px 0 8px;background: var(--ui-sfc-card);box-shadow: var(--ui-sfc-shadow);color: var(--ui-sfc-strong)}.ui-sfc__btn-secondary{padding: 0 10px}.ui-sfc__btn-ghost .ui-sfc__glyph{color: var(--ui-sfc-icon)}.ui-sfc__btn-ghost:hover, .ui-sfc__btn-secondary:hover{background: var(--ui-sfc-white-hover)}.ui-sfc__btn-ghost[data-hidden]{opacity: 0;visibility: hidden}.ui-sfc__btn-primary{margin-left: auto;overflow: hidden;background: var(--ui-sfc-chip);color: var(--ui-sfc-on-chip)}.ui-sfc__btn-primary:hover{background: var(--ui-sfc-chip-hover)}.ui-sfc__btn:active{transform: scale(0.97)}.ui-sfc__btn-primary[aria-disabled="true"]{opacity: 0.35}.ui-sfc__btn-primary[data-busy]{opacity: 0.7;cursor: progress}.ui-sfc__btn-inner{display: inline-flex;flex: none;align-items: center;gap: 6px;padding: 0 10px}.ui-sfc__btn-label{animation: ui-sfc-in 240ms var(--ui-sfc-ease) both}.ui-sfc__spinner{width: 12px;height: 12px;border-radius: 50%;border: 1.5px solid currentColor;border-right-color: transparent;animation: ui-sfc-spin 700ms linear infinite}.ui-sfc__submit-error{min-width: 0;font-size: 12px;line-height: 16px;color: var(--ui-sfc-danger);animation: ui-sfc-in 240ms var(--ui-sfc-ease) both}@keyframes ui-sfc-in{from{opacity: 0;transform: translateY(3px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-sfc-enter{from{opacity: 0;transform: translateX(24px)}to{opacity: 1;transform: none}}@keyframes ui-sfc-enter-back{from{opacity: 0;transform: translateX(-24px)}to{opacity: 1;transform: none}}@keyframes ui-sfc-leave{to{opacity: 0;transform: translateX(-24px)}}@keyframes ui-sfc-leave-back{to{opacity: 0;transform: translateX(24px)}}@keyframes ui-sfc-draw{to{stroke-dashoffset: 0}}@keyframes ui-sfc-pop{0%{opacity: 0;transform: scale(0.4)}60%{opacity: 1;transform: scale(1.08)}100%{opacity: 1;transform: scale(1)}}@keyframes ui-sfc-chip{from{opacity: 0;transform: scale(0.85)}to{opacity: 1;transform: none}}@keyframes ui-sfc-spin{to{transform: rotate(360deg)}}@container (max-width: 420px){.ui-sfc__head{padding: 14px 16px 0}.ui-sfc__compact{display: flex;margin-bottom: 8px}.ui-sfc__step-btn{row-gap: 0;padding-bottom: 4px}.ui-sfc__mark, .ui-sfc__step-label{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-sfc__pane{padding: 16px 16px 16px}.ui-sfc__foot{padding: 0 12px}.ui-sfc__choices{grid-template-columns: minmax(0, 1fr);grid-auto-flow: row}.ui-sfc__choice{grid-template-columns: minmax(0, 1fr) auto;column-gap: 10px;padding: 10px 12px}.ui-sfc__choice-top{grid-column: 1}.ui-sfc__choice-aside{grid-column: 2;grid-row: 1;align-self: center}.ui-sfc__choice-desc{grid-column: 1 / -1;margin-top: 0}.ui-sfc__radio{order: -1;margin-left: 0;margin-right: 2px}.ui-sfc__review-row{grid-template-columns: minmax(0, 1fr) auto;row-gap: 0}.ui-sfc__review dt{grid-column: 1}.ui-sfc__review dd{grid-column: 1;grid-row: 2}.ui-sfc__edit{grid-column: 2;grid-row: 1 / span 2;align-self: center;margin: 0}}@media (hover: none) and (pointer: coarse){.ui-sfc__input input, .ui-sfc__tags-input, .ui-sfc__prefix{font-size: 16px}.ui-sfc__input, .ui-sfc__tags, .ui-sfc__input input{height: 40px}.ui-sfc__chip{height: 30px}.ui-sfc__chip-x{width: 26px;height: 26px}.ui-sfc__tags-input{height: 30px}.ui-sfc__btn{height: 36px}.ui-sfc__foot::before{height: 56px}.ui-sfc__edit{height: 34px;padding: 0 12px}.ui-sfc__step-btn{padding-top: 10px;padding-bottom: 8px;margin: -10px -4px -8px}}@media (prefers-reduced-motion: reduce){.ui-sfc *, .ui-sfc *::before, .ui-sfc *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-sfc{--ui-sfc-card: #1c1c1e;--ui-sfc-ink: rgba(255, 255, 255, 0.9);--ui-sfc-strong: #ffffff;--ui-sfc-text: rgba(255, 255, 255, 0.62);--ui-sfc-muted: rgba(255, 255, 255, 0.46);--ui-sfc-faint: rgba(255, 255, 255, 0.3);--ui-sfc-icon: rgba(255, 255, 255, 0.5);--ui-sfc-line: rgba(255, 255, 255, 0.08);--ui-sfc-fill: rgba(255, 255, 255, 0.08);--ui-sfc-fill-strong: rgba(255, 255, 255, 0.16);--ui-sfc-wash: rgba(255, 255, 255, 0.04);--ui-sfc-wash-soft: rgba(255, 255, 255, 0.025);--ui-sfc-accent: #4d8dff;--ui-sfc-accent-soft: rgba(77, 141, 255, 0.14);--ui-sfc-accent-fill: rgba(77, 141, 255, 0.09);--ui-sfc-accent-line: rgba(77, 141, 255, 0.5);--ui-sfc-ok: #3ec27a;--ui-sfc-ok-soft: rgba(62, 194, 122, 0.14);--ui-sfc-danger: #ff6369;--ui-sfc-chip: rgba(255, 255, 255, 0.9);--ui-sfc-chip-hover: rgba(255, 255, 255, 0.8);--ui-sfc-on-chip: #111113;--ui-sfc-white-hover: #232326;--ui-sfc-focus: rgba(77, 141, 255, 0.5);--ui-sfc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-sfc-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.4)}`;
var C = (e) => e.toLowerCase().normalize(`NFKD`).replace(/[̀-ͯ]/g, ``).replace(/[^a-z0-9]+/g, `-`).replace(/^-+|-+$/g, ``).slice(0, 32);
var w = [{ value: `free`, title: `Free`, aside: `$0`, description: `Up to 3 members and 5 projects` }, { value: `pro`, title: `Pro`, aside: `$12\xA0/\xA0seat`, description: `Unlimited projects, guests and history`, badge: `Popular` }, { value: `business`, title: `Business`, aside: `$24\xA0/\xA0seat`, description: `SSO, audit log and priority support` }];
var T = `Northwind Studio`;
function E({ ctx: e, autoplay: t }) {
  let { values: i2, setValues: a2 } = e, o2 = (0, n3.useRef)(0), s2 = () => {
    clearTimeout(o2.current), t.current = false;
  }, c2 = (e2) => a2({ name: e2, ...i2.slugEdited ? {} : { slug: C(e2) } });
  return (0, n3.useEffect)(() => {
    if (!t.current) return;
    let e2 = 0, n4 = () => {
      e2 += 1, a2({ name: T.slice(0, e2), slug: C(T.slice(0, e2)) }), e2 < 16 ? o2.current = window.setTimeout(n4, 55 + Math.random() * 45) : t.current = false;
    };
    return o2.current = window.setTimeout(n4, 650), () => clearTimeout(o2.current);
  }, []), (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(h, { name: `name`, label: `Workspace name`, children: (0, r.jsx)(g, { value: i2.name, placeholder: `Acme Inc.`, maxLength: 48, onFocus: s2, onChange: (e2) => c2(e2.target.value) }) }), (0, r.jsx)(h, { name: `slug`, label: `Workspace URL`, hint: `Lowercase letters, numbers and dashes`, children: (0, r.jsx)(g, { prefix: `affect.app/`, value: i2.slug, placeholder: `acme`, maxLength: 32, onFocus: s2, onChange: (e2) => a2({ slug: e2.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ``), slugEdited: true }) }) })] });
}
function D() {
  let e = (0, n3.useRef)(true);
  return (0, r.jsx)(`div`, { className: `stepper-form-demo`, children: (0, r.jsx)(m, { steps: [{ id: `workspace`, title: `Workspace`, heading: `Name your workspace`, description: `This is where your team's projects live.`, render: (t) => (0, r.jsx)(E, { ctx: t, autoplay: e }), validate: (e2) => ({ name: e2.name.trim().length < 2 ? `Give your workspace a name` : void 0, slug: e2.slug.length < 3 ? `Use at least 3 characters` : void 0 }) }, { id: `team`, title: `Team`, heading: `Invite your teammates`, description: `They'll get an email with a link to join.`, render: ({ values: e2, setValues: t }) => (0, r.jsx)(h, { name: `invites`, label: `Email addresses`, hint: `Press Enter or comma to add`, optional: true, children: (0, r.jsx)(v, { value: e2.invites, max: 20, onChange: (e3) => t({ invites: e3 }) }) }) }, { id: `plan`, title: `Plan`, heading: `Pick a plan`, description: `Every plan starts with a 14\u2011day trial.`, render: ({ values: e2, setValues: t }) => (0, r.jsx)(y, { label: `Plan`, value: e2.plan, options: w, onChange: (e3) => t({ plan: e3 }) }) }, { id: `review`, title: `Review`, heading: `Review and create`, description: `Everything can be changed later in settings.`, render: ({ values: e2, goTo: t }) => {
    let n4 = w.find((t2) => t2.value === e2.plan), i2 = e2.invites.length;
    return (0, r.jsx)(b, { onEdit: t, rows: [{ label: `Workspace`, value: (0, r.jsxs)(r.Fragment, { children: [e2.name, (0, r.jsxs)(`span`, { className: `sfc-demo__sub`, children: [`affect.app/`, e2.slug] })] }), step: `workspace` }, { label: `Teammates`, value: i2 ? (0, r.jsxs)(r.Fragment, { children: [i2, ` `, i2 === 1 ? `invite` : `invites`, (0, r.jsx)(`span`, { className: `sfc-demo__sub`, children: e2.invites.join(`, `) })] }) : `Just you for now`, step: `team` }, { label: `Plan`, value: (0, r.jsxs)(r.Fragment, { children: [n4.title, (0, r.jsxs)(`span`, { className: `sfc-demo__muted`, children: [` \xB7 `, n4.aside] })] }), step: `plan` }] });
  } }], initialValues: { name: ``, slug: ``, slugEdited: false, invites: [], plan: `pro` }, submitLabel: `Create workspace`, onComplete: () => new Promise((e2) => setTimeout(e2, 1100)), success: (t, n4) => (0, r.jsx)(x, { title: `${t.name} is ready`, description: t.invites.length ? `${t.invites.length} ${t.invites.length === 1 ? `invite is` : `invites are`} on the way. Your trial runs for 14\xA0days.` : `Your trial runs for 14\xA0days.`, children: (0, r.jsx)(`button`, { type: `button`, className: `ui-sfc__btn ui-sfc__btn-secondary`, onClick: () => {
    e.current = true, n4();
  }, children: `Start over` }) }) }) });
}

export {
  D
};
