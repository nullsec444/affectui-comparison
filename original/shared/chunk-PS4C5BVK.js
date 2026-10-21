import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-BOLhhfTT.js
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
var l = ({ d: e, className: t }) => (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, className: i(`ui-sf__glyph`, t), "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: e }) });
var u = { check: `M5.5 12.5l4 4L18.5 8`, close: `M7 7l10 10M17 7 7 17`, back: `M14.5 6l-6 6 6 6` };
var d = ({ className: e }) => (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, className: i(`ui-sf__draw`, e), "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: u.check, pathLength: 1 }) });
var f = (0, n3.createContext)({ errors: {}, shake: 0, report: () => {
} });
var p = (0, n3.createContext)(null);
function m({ steps: e, initialValues: t, onComplete: o2, initialStep: s2 = 0, step: c2, onStepChange: p2, submitLabel: m2 = `Finish`, submittingLabel: h2 = `Creating\u2026`, success: g2, className: _2 }) {
  let v2 = e.length, [y2, b2] = (0, n3.useState)(s2), C2 = Math.max(0, Math.min(v2 - 1, c2 ?? y2)), [w2, T2] = (0, n3.useState)(t), E2 = (0, n3.useRef)(w2), [D2, O] = (0, n3.useState)(C2), k = Math.max(D2, C2), [ee, A] = (0, n3.useState)({}), [j, te] = (0, n3.useState)(0), [M, N] = (0, n3.useState)(null), [P, F] = (0, n3.useState)(false), [I, L] = (0, n3.useState)(``), [R, z] = (0, n3.useState)(false), [ne, B] = (0, n3.useState)(``), V = (0, n3.useRef)(null), H = (0, n3.useRef)(null), U = (0, n3.useRef)(null), W = (0, n3.useRef)(null), G = (0, n3.useRef)(false), K = (0, n3.useRef)(false), q = (0, n3.useRef)({}), re = (0, n3.useCallback)((e2, t2) => {
    q.current = { ...q.current, [e2]: t2 ?? void 0 };
  }, []), J = (0, n3.useId)(), Y = R ? v2 : C2, [X, Z] = (0, n3.useState)({ index: Y, from: null, dir: 1 });
  X.index !== Y && Z({ index: Y, from: X.index, dir: Y > X.index ? 1 : -1 }), (0, n3.useEffect)(() => {
    if (X.from === null) return;
    let e2 = window.setTimeout(() => Z((e3) => ({ ...e3, from: null })), 420);
    return () => clearTimeout(e2);
  }, [X.index, X.from]);
  let ie = (0, n3.useCallback)((e2) => {
    E2.current = { ...E2.current, ...e2 }, T2(E2.current);
  }, []), Q = (t2) => {
    let n4 = Math.max(0, Math.min(v2 - 1, t2));
    n4 !== C2 && (G.current = true, K.current = true, q.current = {}, c2 === void 0 && b2(n4), p2?.(n4), O((e2) => Math.max(e2, n4)), L(``), B(`Step ${n4 + 1} of ${v2}: ${e[n4].title}`));
  }, ae = () => {
    let t2 = { ...q.current, ...e[C2].validate?.(E2.current) };
    return a(t2) ? (A((e2) => ({ ...e2, [C2]: true })), te((e2) => e2 + 1), B(Object.values(t2).find(Boolean) ?? `Check this step`), false) : (A((e2) => ({ ...e2, [C2]: false })), true);
  }, oe = async (e2) => {
    if (e2?.preventDefault(), !(P || R || !ae())) {
      if (C2 < v2 - 1) {
        M !== null && M > C2 ? (N(null), Q(M)) : Q(C2 + 1);
        return;
      }
      F(true), L(``);
      try {
        await o2?.(E2.current), G.current = true, K.current = true, z(true), B(`All done`);
      } catch (e3) {
        let t2 = e3 instanceof Error && e3.message ? e3.message : `Something went wrong \u2013 try again`;
        L(t2), B(t2);
      } finally {
        F(false);
      }
    }
  }, se = () => {
    N(null), Q(C2 - 1);
  }, ce = (t2) => {
    let n4 = e.findIndex((e2) => e2.id === t2);
    n4 < 0 || n4 === C2 || n4 > C2 && !ae() || (N(n4 < C2 ? C2 : null), Q(n4));
  }, le = () => {
    E2.current = t, T2(t), A({}), N(null), O(s2), z(false), L(``), G.current = true, K.current = true, q.current = {}, c2 === void 0 && b2(s2), p2?.(s2);
  };
  (0, n3.useEffect)(() => {
    if (!G.current) return;
    G.current = false;
    let e2 = H.current?.querySelector(`[data-pane="current"]`);
    (e2?.querySelector(`input:not([type="hidden"]):not(:disabled), textarea, select`) ?? e2?.querySelector(`.ui-sf__heading`))?.focus({ preventScroll: true });
  }, [Y]), (0, n3.useEffect)(() => {
    j && H.current?.querySelector(`[data-pane="current"] [aria-invalid="true"]`)?.focus({ preventScroll: true });
  }, [j]), (0, n3.useLayoutEffect)(() => {
    let e2 = H.current, t2 = e2?.querySelector(`[data-pane="current"]`);
    if (!e2 || !t2) return;
    let n4 = !e2.dataset.ready, r2 = () => e2.style.height = `${t2.offsetHeight}px`;
    n4 && (e2.style.transition = `none`), r2(), n4 && (e2.dataset.ready = `1`, e2.offsetWidth, e2.style.transition = ``);
    let i2 = new ResizeObserver(r2);
    return i2.observe(t2), () => i2.disconnect();
  }, [Y]), (0, n3.useLayoutEffect)(() => {
    let e2 = U.current, t2 = W.current;
    if (!e2 || !t2) return;
    let n4 = () => e2.style.width = `${t2.offsetWidth}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    return r2.observe(t2), () => r2.disconnect();
  }, []);
  let $ = e[C2], ue = ee[C2] ? $.validate?.(w2) ?? {} : {}, de = !a($.validate?.(w2)), fe = C2 === v2 - 1, pe = P ? h2 : fe ? m2 : M !== null && M > C2 ? `Back to ${e[M].title.toLowerCase()}` : `Continue`, me = { values: w2, setValues: ie, errors: ue, goTo: ce, next: () => V.current?.requestSubmit() }, he = (t2) => {
    if (t2 >= v2) return g2 ? g2(w2, le) : (0, r.jsx)(x, { title: `All set`, description: `Everything is saved. You can change it any time.` });
    let n4 = e[t2], i2 = t2 === C2 ? me : { ...me, errors: {} };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`h2`, { className: `ui-sf__heading`, tabIndex: -1, id: `${J}-h${t2}`, children: n4.heading ?? n4.title }), n4.description && (0, r.jsx)(`p`, { className: `ui-sf__desc`, children: n4.description }), (0, r.jsx)(`div`, { className: `ui-sf__body`, children: n4.render(i2) })] });
  }, ge = X.from !== null && X.from !== X.index ? [X.from, X.index] : [X.index];
  return (0, r.jsxs)(`div`, { className: i(`ui-sf`, _2), style: { "--ui-sf-n": v2 }, children: [(0, r.jsx)(`style`, { href: `ui-stepper-form`, precedence: `default`, children: S }), (0, r.jsxs)(`div`, { className: `ui-sf__head`, children: [(0, r.jsx)(`div`, { className: `ui-sf__steps`, children: (0, r.jsx)(`ol`, { className: `ui-sf__list`, "aria-label": `Progress`, children: e.map((e2, t2) => {
    let n4 = R || t2 < k && t2 !== C2 ? `done` : t2 === C2 ? `current` : `upcoming`, i2 = !R && !P && t2 !== C2 && t2 <= k, a2 = (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`span`, { className: `ui-sf__mark`, children: n4 === `done` ? (0, r.jsx)(d, {}, `check`) : (0, r.jsxs)(`span`, { children: [t2 + 1, `.`] }, `num`) }), (0, r.jsx)(`span`, { className: `ui-sf__step-label`, children: e2.title }), (0, r.jsx)(`span`, { className: `ui-sf__sr`, children: n4 === `done` ? ` (done)` : n4 === `current` ? ` (current)` : `` })] });
    return (0, r.jsx)(`li`, { className: `ui-sf__step`, "data-state": n4, "aria-current": !R && t2 === C2 ? `step` : void 0, children: i2 ? (0, r.jsx)(`button`, { type: `button`, className: `ui-sf__step-btn`, onClick: () => ce(e2.id), children: a2 }) : (0, r.jsx)(`span`, { className: `ui-sf__step-btn`, children: a2 }) }, e2.id);
  }) }) }), (0, r.jsx)(`div`, { className: `ui-sf__compact`, "aria-hidden": `true`, children: (0, r.jsx)(`span`, { className: `ui-sf__compact-text`, children: R ? (0, r.jsxs)(r.Fragment, { children: [`All `, v2, ` steps done`] }) : (0, r.jsxs)(r.Fragment, { children: [`Step `, C2 + 1, ` of `, v2, (0, r.jsx)(`span`, { className: `ui-sf__compact-dot`, children: `\xB7` }), (0, r.jsx)(`span`, { className: `ui-sf__compact-title`, children: $.title })] }) }, R ? `done` : C2) })] }), (0, r.jsxs)(`form`, { ref: V, className: `ui-sf__card`, noValidate: true, onSubmit: oe, "aria-labelledby": R ? void 0 : `${J}-h${C2}`, children: [(0, r.jsx)(`div`, { ref: H, className: `ui-sf__viewport`, children: ge.map((e2) => {
    let t2 = e2 === X.index;
    return (0, r.jsx)(`div`, { className: `ui-sf__pane`, "data-pane": t2 ? `current` : `leaving`, "data-dir": X.dir, "data-first": !K.current || void 0, inert: !t2, "aria-hidden": !t2 || void 0, children: (0, r.jsx)(f.Provider, { value: { errors: t2 && e2 === C2 ? ue : {}, shake: t2 ? j : 0, report: re }, children: he(e2) }) }, e2);
  }) }), (0, r.jsx)(`div`, { className: `ui-sf__foot-fold`, "data-hidden": R || void 0, children: (0, r.jsxs)(`div`, { className: `ui-sf__foot`, inert: R, children: [(0, r.jsxs)(`button`, { type: `button`, className: `ui-sf__btn ui-sf__btn-ghost`, "data-hidden": C2 === 0 || void 0, disabled: C2 === 0 || P, onClick: se, children: [(0, r.jsx)(l, { d: u.back }), `Back`] }), I && (0, r.jsx)(`span`, { className: `ui-sf__submit-error`, role: `alert`, children: I }), (0, r.jsx)(`button`, { ref: U, type: `submit`, className: `ui-sf__btn ui-sf__btn-primary`, "aria-disabled": !de || P || void 0, "data-busy": P || void 0, children: (0, r.jsxs)(`span`, { ref: W, className: `ui-sf__btn-inner`, children: [P && (0, r.jsx)(`span`, { className: `ui-sf__spinner`, "aria-hidden": `true` }), (0, r.jsx)(`span`, { className: `ui-sf__btn-label`, children: pe }, pe)] }) })] }) })] }), (0, r.jsx)(`span`, { className: `ui-sf__sr`, "aria-live": `polite`, children: ne })] });
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
  return (0, r.jsxs)(`div`, { className: `ui-sf__field`, "data-invalid": x2 || void 0, children: [(0, r.jsxs)(`label`, { className: `ui-sf__label`, htmlFor: _2, children: [t, a2 && (0, r.jsx)(`span`, { className: `ui-sf__optional`, children: `Optional` })] }), (0, r.jsx)(`div`, { ref: v2, className: `ui-sf__control`, children: (0, r.jsx)(p.Provider, { value: { id: _2, invalid: x2, describedBy: x2 ? `${_2}-msg` : i2 ? `${_2}-hint` : void 0, flag: S2 }, children: o2 }) }), (0, r.jsx)(`div`, { className: `ui-sf__fold`, "data-open": x2 || void 0, children: (0, r.jsx)(`div`, { children: (0, r.jsx)(`p`, { className: `ui-sf__msg`, id: `${_2}-msg`, children: b2.current }, b2.current) }) }), i2 && (0, r.jsx)(`div`, { className: `ui-sf__fold`, "data-open": !x2 || void 0, children: (0, r.jsx)(`div`, { children: (0, r.jsx)(`p`, { className: `ui-sf__hint`, id: `${_2}-hint`, children: i2 }) }) })] });
}
function g({ prefix: e, className: t, ...a2 }) {
  let o2 = (0, n3.useContext)(p);
  return (0, r.jsxs)(`div`, { className: i(`ui-sf__input`, t), "data-invalid": o2?.invalid || void 0, children: [e && (0, r.jsx)(`span`, { className: `ui-sf__prefix`, "aria-hidden": `true`, children: e }), (0, r.jsx)(`input`, { id: o2?.id, "aria-invalid": o2?.invalid || void 0, "aria-describedby": o2?.describedBy, autoComplete: `off`, spellCheck: false, ...a2 })] });
}
var _ = /^[^\s@,;]+@[^\s@,;]+\.[^\s@,;]{2,}$/;
function v({ value: e, onChange: t, placeholder: i2 = `name@company.com`, validate: a2 = (e2, t2) => _.test(e2) ? t2.includes(e2) ? `Already on the list` : null : `That doesn't look like an email address`, max: s2 }) {
  let c2 = (0, n3.useContext)(p), [d2, f2] = (0, n3.useState)(``), [m2, h2] = (0, n3.useState)([]), g2 = (0, n3.useRef)(null), v2 = (0, n3.useRef)(null), y2 = (0, n3.useRef)(e);
  y2.current = e;
  let b2 = (e2) => {
    let n4 = e2.split(/[\s,;]+/).map((e3) => e3.trim().toLowerCase()).filter(Boolean);
    if (!n4.length) return true;
    let r2 = [...y2.current], i3 = [], o2 = null;
    for (let e3 of n4) {
      let t2 = s2 !== void 0 && r2.length >= s2 ? `Up to ${s2}` : a2(e3, r2);
      t2 ? (o2 ??= t2, i3.push(e3)) : r2.push(e3);
    }
    return r2.length !== y2.current.length && (y2.current = r2, t(r2)), f2(i3.join(`, `)), c2?.flag(o2), !o2;
  }, x2 = (e2) => {
    if (m2.includes(e2)) return;
    h2((t2) => [...t2, e2]);
    let n4 = v2.current?.querySelector(`[data-entry="${CSS.escape(e2)}"]`), r2 = () => {
      h2((t2) => t2.filter((t3) => t3 !== e2)), t(y2.current.filter((t2) => t2 !== e2));
    };
    n4 && n4.animate && !o() ? n4.animate([{ width: `${n4.offsetWidth}px`, marginRight: `0px`, opacity: 1, transform: `none` }, { width: `0px`, marginRight: `-6px`, opacity: 0, transform: `scale(0.85)` }], { duration: 240, easing: `cubic-bezier(0.22, 1, 0.36, 1)`, fill: `forwards` }).onfinish = r2 : r2();
  };
  return (0, r.jsxs)(`div`, { className: `ui-sf__tags`, "data-invalid": c2?.invalid || void 0, onClick: (e2) => e2.target === e2.currentTarget && g2.current?.focus(), children: [e.length > 0 && (0, r.jsx)(`ul`, { ref: v2, className: `ui-sf__chips`, "aria-label": `Added`, children: e.map((e2) => (0, r.jsxs)(`li`, { className: `ui-sf__chip`, "data-entry": e2, "data-leaving": m2.includes(e2) || void 0, children: [(0, r.jsx)(`span`, { className: `ui-sf__chip-text`, title: e2, children: e2 }), (0, r.jsx)(`button`, { type: `button`, className: `ui-sf__chip-x`, "aria-label": `Remove ${e2}`, onClick: () => x2(e2), children: (0, r.jsx)(l, { d: u.close }) })] }, e2)) }), (0, r.jsx)(`input`, { ref: g2, id: c2?.id, type: `email`, inputMode: `email`, autoComplete: `off`, spellCheck: false, className: `ui-sf__tags-input`, placeholder: e.length ? `Add another` : i2, value: d2, "aria-invalid": c2?.invalid || void 0, "aria-describedby": c2?.describedBy, onChange: (e2) => {
    f2(e2.target.value), c2?.flag(null);
  }, onKeyDown: (t2) => {
    t2.key === `Enter` && d2.trim() || t2.key === `,` || t2.key === `;` ? (t2.preventDefault(), b2(d2)) : t2.key === `Backspace` && !d2 && e.length && (t2.preventDefault(), x2(e[e.length - 1]));
  }, onPaste: (e2) => {
    let t2 = e2.clipboardData.getData(`text`);
    /[\s,;]/.test(t2.trim()) && (e2.preventDefault(), b2(`${d2} ${t2}`));
  }, onBlur: () => d2.trim() && b2(d2) })] });
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
  }, []), (0, r.jsxs)(`div`, { ref: o2, className: `ui-sf__choices`, role: `radiogroup`, "aria-label": a2, onKeyDown: (n4) => {
    let r2 = i2.findIndex((t2) => t2.value === e), a3 = n4.key === `ArrowRight` || n4.key === `ArrowDown` ? 1 : n4.key === `ArrowLeft` || n4.key === `ArrowUp` ? -1 : 0;
    if (a3) {
      n4.preventDefault();
      let e2 = i2[(r2 + a3 + i2.length) % i2.length];
      t(e2.value), o2.current?.querySelector(`[data-value="${CSS.escape(e2.value)}"]`)?.focus();
    } else n4.key === `Enter` && (n4.preventDefault(), n4.currentTarget.closest(`form`)?.requestSubmit());
  }, children: [(0, r.jsx)(`span`, { ref: s2, className: `ui-sf__ring`, "aria-hidden": `true` }), i2.map((n4) => {
    let i3 = n4.value === e;
    return (0, r.jsxs)(`button`, { type: `button`, role: `radio`, "aria-checked": i3, tabIndex: i3 ? 0 : -1, "data-value": n4.value, className: `ui-sf__choice`, onClick: () => t(n4.value), children: [(0, r.jsxs)(`span`, { className: `ui-sf__choice-top`, children: [(0, r.jsx)(`span`, { className: `ui-sf__choice-title`, children: n4.title }), n4.badge && (0, r.jsx)(`span`, { className: `ui-sf__badge`, children: n4.badge }), (0, r.jsx)(`span`, { className: `ui-sf__radio`, "aria-hidden": `true` })] }), n4.aside && (0, r.jsx)(`span`, { className: `ui-sf__choice-aside`, children: n4.aside }), n4.description && (0, r.jsx)(`span`, { className: `ui-sf__choice-desc`, children: n4.description })] }, n4.value);
  })] });
}
function b({ rows: e, onEdit: t }) {
  return (0, r.jsx)(`dl`, { className: `ui-sf__review`, children: e.map((e2) => (0, r.jsxs)(`div`, { className: `ui-sf__review-row`, children: [(0, r.jsx)(`dt`, { children: e2.label }), (0, r.jsx)(`dd`, { children: e2.value }), e2.step && t && (0, r.jsx)(`button`, { type: `button`, className: `ui-sf__edit`, "aria-label": `Edit ${e2.label.toLowerCase()}`, onClick: () => t(e2.step), children: `Edit` })] }, e2.label)) });
}
function x({ title: e, description: t, children: n4 }) {
  return (0, r.jsxs)(`div`, { className: `ui-sf__success`, children: [(0, r.jsx)(`span`, { className: `ui-sf__success-check`, children: (0, r.jsx)(d, {}) }), (0, r.jsx)(`h2`, { className: `ui-sf__heading`, tabIndex: -1, children: e }), t && (0, r.jsx)(`p`, { className: `ui-sf__desc`, children: t }), n4 && (0, r.jsx)(`div`, { className: `ui-sf__success-actions`, children: n4 })] });
}
var S = `.ui-sf{--ui-sf-tray: #f0f0f0;--ui-sf-card: #ffffff;--ui-sf-line: #ececec;--ui-sf-ink: #171717;--ui-sf-text: #404040;--ui-sf-muted: #8f8f8f;--ui-sf-faint: #b5b5b5;--ui-sf-edge: #dcdcdf;--ui-sf-field: #ffffff;--ui-sf-hover: #f2f2f3;--ui-sf-chip: #f2f2f3;--ui-sf-track: #e2e2e5;--ui-sf-accent: #2f6bff;--ui-sf-accent-soft: rgba(47, 107, 255, 0.05);--ui-sf-danger: #e5484d;--ui-sf-on-ink: #ffffff;--ui-sf-focus: rgba(23, 23, 23, 0.22);--ui-sf-ring: rgba(23, 23, 23, 0.08);--ui-sf-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;container-type: inline-size;display: grid;width: 100%;max-width: 520px;padding: 4px;border-radius: 20px;background: var(--ui-sf-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13.5px;line-height: 1.45;color: var(--ui-sf-text);-webkit-font-smoothing: antialiased}.ui-sf *, .ui-sf *::before, .ui-sf *::after{box-sizing: border-box}:where(.ui-sf) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-sf) svg{display: block;flex: none}:where(.ui-sf) :is(h2, p, dl, dd, ul, ol){margin: 0}.ui-sf button:focus-visible{outline: 2px solid var(--ui-sf-focus);outline-offset: 2px}.ui-sf__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-sf__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-sf__draw{width: 14px;height: 14px;fill: none;stroke: currentColor;stroke-width: 2.6;stroke-linecap: round;stroke-linejoin: round}.ui-sf__draw path{stroke-dasharray: 1;stroke-dashoffset: 1;animation: ui-sf-draw 360ms var(--ui-sf-ease) 80ms forwards}.ui-sf__head{padding: 6px 6px 4px}.ui-sf__steps{position: relative}.ui-sf__list{display: grid;grid-template-columns: repeat(var(--ui-sf-n), minmax(0, 1fr));padding: 0;list-style: none}.ui-sf__step{position: relative;display: grid;justify-items: center;min-width: 0}.ui-sf__step-btn{display: inline-flex;align-items: center;gap: 5px;min-width: 0;max-width: 100%;height: 26px;padding: 0 6px;border-radius: 8px;line-height: 1;cursor: default;transition: background-color 200ms ease}button.ui-sf__step-btn{cursor: pointer}button.ui-sf__step-btn:hover{background: var(--ui-sf-ring)}.ui-sf__mark{display: inline-flex;flex: none;align-items: center;justify-content: center;min-width: 14px;font-size: 12.5px;line-height: 1;font-variant-numeric: tabular-nums;color: var(--ui-sf-faint);transition: color 260ms ease}.ui-sf__mark > span{line-height: 1;animation: ui-sf-in 260ms var(--ui-sf-ease) both}.ui-sf__mark .ui-sf__draw{width: 13px;height: 13px;stroke-width: 2.4}.ui-sf__step[data-state="current"] .ui-sf__mark{color: var(--ui-sf-ink)}.ui-sf__step[data-state="done"] .ui-sf__mark{color: var(--ui-sf-ink)}.ui-sf__step-label{overflow: hidden;max-width: 100%;font-size: 12.5px;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-sf-muted);transition: color 260ms ease}.ui-sf__step[data-state="done"] .ui-sf__step-label{color: var(--ui-sf-text)}.ui-sf__step[data-state="current"] .ui-sf__step-label{color: var(--ui-sf-ink);font-weight: 500}button.ui-sf__step-btn:hover .ui-sf__step-label{color: var(--ui-sf-ink)}.ui-sf__compact{display: none;gap: 8px;padding: 0 6px}.ui-sf__compact-text{display: flex;align-items: baseline;min-width: 0;font-size: 12.5px;font-variant-numeric: tabular-nums;color: var(--ui-sf-muted);white-space: nowrap;animation: ui-sf-in 280ms var(--ui-sf-ease) both}.ui-sf__compact-dot{margin: 0 6px;color: var(--ui-sf-faint)}.ui-sf__compact-title{overflow: hidden;text-overflow: ellipsis;color: var(--ui-sf-ink);font-weight: 500}.ui-sf__card{display: grid;border-radius: 16px;background: var(--ui-sf-card);box-shadow: 0 0 0 1px var(--ui-sf-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-sf__viewport{position: relative;overflow: hidden;transition: height 380ms var(--ui-sf-ease)}.ui-sf__pane{padding: 20px 20px 8px;animation: ui-sf-enter 380ms var(--ui-sf-ease) both}.ui-sf__pane[data-dir="-1"]{animation-name: ui-sf-enter-back}.ui-sf__pane[data-first]{animation: none}.ui-sf__pane[data-pane="leaving"]{position: absolute;top: 0;left: 0;right: 0;pointer-events: none;animation: ui-sf-leave 300ms var(--ui-sf-ease) both}.ui-sf__pane[data-pane="leaving"][data-dir="-1"]{animation-name: ui-sf-leave-back}.ui-sf__heading{font-size: 16px;font-weight: 600;line-height: 1.3;letter-spacing: -0.01em;color: var(--ui-sf-ink);outline: none}.ui-sf__desc{margin-top: 4px;color: var(--ui-sf-muted);text-wrap: pretty}.ui-sf__body{display: grid;gap: 14px;margin-top: 18px}.ui-sf__field{display: grid;min-width: 0}.ui-sf__label{display: flex;align-items: baseline;justify-content: space-between;gap: 8px;margin-bottom: 6px;font-size: 12.5px;font-weight: 500;color: var(--ui-sf-ink)}.ui-sf__optional{font-weight: 400;color: var(--ui-sf-muted)}.ui-sf__control{min-width: 0}.ui-sf__input, .ui-sf__tags{display: flex;align-items: center;min-width: 0;min-height: 38px;border-radius: 10px;background: var(--ui-sf-field);box-shadow: inset 0 0 0 1px var(--ui-sf-edge), 0 1px 2px rgba(0, 0, 0, 0.03);transition: box-shadow 180ms ease;cursor: text}.ui-sf__input:hover, .ui-sf__tags:hover{box-shadow: inset 0 0 0 1px var(--ui-sf-faint), 0 1px 2px rgba(0, 0, 0, 0.03)}.ui-sf__input:focus-within, .ui-sf__tags:focus-within{box-shadow: inset 0 0 0 1px var(--ui-sf-ink), 0 0 0 3px var(--ui-sf-ring)}.ui-sf__input[data-invalid], .ui-sf__tags[data-invalid]{box-shadow: inset 0 0 0 1px var(--ui-sf-danger)}.ui-sf__input[data-invalid]:focus-within, .ui-sf__tags[data-invalid]:focus-within{box-shadow: inset 0 0 0 1px var(--ui-sf-danger), 0 0 0 3px rgba(229, 72, 77, 0.12)}.ui-sf__input input, .ui-sf__tags-input{flex: 1;min-width: 0;height: 36px;padding: 0 12px;border: 0;outline: none;background: none;font: inherit;font-size: 14px;color: var(--ui-sf-ink)}.ui-sf__input input::placeholder, .ui-sf__tags-input::placeholder{color: var(--ui-sf-faint)}.ui-sf__prefix{flex: none;padding-left: 12px;font-size: 14px;color: var(--ui-sf-muted);white-space: nowrap;user-select: none}.ui-sf__prefix + input{padding-left: 1px}.ui-sf__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 260ms var(--ui-sf-ease), opacity 200ms ease}.ui-sf__fold[data-open]{grid-template-rows: 1fr;opacity: 1}.ui-sf__fold > div{min-height: 0;overflow: hidden}.ui-sf__msg, .ui-sf__hint{padding-top: 6px;font-size: 12.5px;text-wrap: pretty}.ui-sf__msg{color: var(--ui-sf-danger);animation: ui-sf-in 240ms var(--ui-sf-ease) both}.ui-sf__hint{color: var(--ui-sf-muted)}.ui-sf__tags{flex-wrap: wrap;gap: 6px;padding: 5px}.ui-sf__chips{display: contents;padding: 0;list-style: none}.ui-sf__chip{display: inline-flex;align-items: center;gap: 2px;min-width: 0;max-width: 100%;height: 28px;padding: 0 2px 0 10px;overflow: hidden;border-radius: 8px;background: var(--ui-sf-chip);font-size: 13px;color: var(--ui-sf-ink);white-space: nowrap;animation: ui-sf-chip 300ms var(--ui-sf-ease) both}.ui-sf__chip[data-leaving]{pointer-events: none}.ui-sf__chip-text{overflow: hidden;text-overflow: ellipsis}.ui-sf__chip-x{display: grid;place-items: center;flex: none;width: 24px;height: 24px;border-radius: 6px;color: var(--ui-sf-muted);transition: background-color 140ms ease, color 140ms ease}.ui-sf__chip-x .ui-sf__glyph{width: 13px;height: 13px}.ui-sf__chip-x:hover{background: var(--ui-sf-track);color: var(--ui-sf-ink)}.ui-sf__chip[data-leaving] .ui-sf__chip-x{background: none}.ui-sf__tags-input{flex: 1 1 140px;height: 28px;padding: 0 7px}.ui-sf__choices{position: relative;display: grid;grid-auto-columns: minmax(0, 1fr);grid-auto-flow: column;gap: 8px}.ui-sf__ring{position: absolute;top: 0;left: 0;z-index: 2;border-radius: 12px;box-shadow: inset 0 0 0 1.5px var(--ui-sf-accent), 0 0 0 3px rgba(47, 107, 255, 0.1);opacity: 0;pointer-events: none;transition: transform 380ms var(--ui-sf-ease), width 380ms var(--ui-sf-ease), height 380ms var(--ui-sf-ease), opacity 200ms ease}.ui-sf__choice{position: relative;display: grid;align-content: start;gap: 2px;min-width: 0;padding: 12px;border-radius: 12px;background: var(--ui-sf-field);box-shadow: inset 0 0 0 1px var(--ui-sf-edge);text-align: left;transition: background-color 200ms ease, box-shadow 200ms ease}.ui-sf__choice:hover{box-shadow: inset 0 0 0 1px var(--ui-sf-faint)}.ui-sf__choice[aria-checked="true"]{background: var(--ui-sf-accent-soft);box-shadow: inset 0 0 0 1px transparent}.ui-sf__choice:focus-visible{outline-offset: 3px}.ui-sf__choice-top{display: flex;align-items: center;gap: 6px;min-width: 0}.ui-sf__choice-title{overflow: hidden;font-weight: 600;color: var(--ui-sf-ink);white-space: nowrap;text-overflow: ellipsis}.ui-sf__badge{flex: none;padding: 1px 6px;border-radius: 6px;background: var(--ui-sf-chip);font-size: 11px;font-weight: 500;color: var(--ui-sf-text)}.ui-sf__radio{position: relative;flex: none;width: 16px;height: 16px;margin-left: auto;border-radius: 50%;box-shadow: inset 0 0 0 1.5px var(--ui-sf-edge);transition: box-shadow 220ms ease}.ui-sf__radio::after{content: "";position: absolute;inset: 4px;border-radius: 50%;background: var(--ui-sf-accent);transform: scale(0);transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-sf__choice[aria-checked="true"] .ui-sf__radio{box-shadow: inset 0 0 0 1.5px var(--ui-sf-accent)}.ui-sf__choice[aria-checked="true"] .ui-sf__radio::after{transform: scale(1)}.ui-sf__choice-aside{font-size: 13px;font-variant-numeric: tabular-nums;color: var(--ui-sf-ink)}.ui-sf__choice-desc{margin-top: 4px;font-size: 12px;line-height: 1.4;color: var(--ui-sf-muted);text-wrap: pretty}.ui-sf__review{display: grid;border-radius: 12px;box-shadow: inset 0 0 0 1px var(--ui-sf-line)}.ui-sf__review-row{display: grid;grid-template-columns: 96px minmax(0, 1fr) auto;align-items: baseline;gap: 12px;padding: 11px 8px 11px 14px}.ui-sf__review-row + .ui-sf__review-row{border-top: 1px solid var(--ui-sf-line)}.ui-sf__review dt{font-size: 12.5px;color: var(--ui-sf-muted)}.ui-sf__review dd{min-width: 0;color: var(--ui-sf-ink);overflow-wrap: break-word}.ui-sf__edit{height: 26px;margin: -4px 0;padding: 0 8px;border-radius: 7px;font-size: 12.5px;font-weight: 500;color: var(--ui-sf-text);transition: background-color 140ms ease, color 140ms ease}.ui-sf__edit:hover{background: var(--ui-sf-hover);color: var(--ui-sf-ink)}.ui-sf__success{display: grid;justify-items: center;padding: 20px 0 14px;text-align: center}.ui-sf__success-check{display: grid;place-items: center;width: 44px;height: 44px;margin-bottom: 14px;border-radius: 50%;background: var(--ui-sf-ink);color: var(--ui-sf-on-ink);box-shadow: 0 0 0 6px var(--ui-sf-ring);animation: ui-sf-pop 520ms cubic-bezier(0.34, 1.56, 0.64, 1) 120ms both}.ui-sf__success-check .ui-sf__draw{width: 20px;height: 20px}.ui-sf__success-check .ui-sf__draw path{animation-delay: 320ms}.ui-sf__success .ui-sf__heading{animation: ui-sf-in 340ms var(--ui-sf-ease) 220ms both}.ui-sf__success .ui-sf__desc{max-width: 40ch;text-wrap: balance;animation: ui-sf-in 340ms var(--ui-sf-ease) 290ms both}.ui-sf__success-actions{display: flex;flex-wrap: wrap;justify-content: center;gap: 8px;margin-top: 16px;animation: ui-sf-in 340ms var(--ui-sf-ease) 360ms both}.ui-sf__foot-fold{position: sticky;bottom: 0;z-index: 3;display: grid;grid-template-rows: 1fr;border-radius: 0 0 16px 16px;background: var(--ui-sf-card);transition: grid-template-rows 360ms var(--ui-sf-ease), opacity 220ms ease}.ui-sf__foot-fold[data-hidden]{grid-template-rows: 0fr;opacity: 0}.ui-sf__foot{display: flex;align-items: center;gap: 10px;min-height: 0;overflow: hidden;padding: 12px 16px 16px}.ui-sf__btn{display: inline-flex;align-items: center;justify-content: center;flex: none;height: 36px;border-radius: 10px;font-weight: 500;white-space: nowrap;transition: background-color 140ms ease, opacity 200ms ease, transform 140ms ease, width 320ms var(--ui-sf-ease), visibility 200ms}.ui-sf__btn-ghost{gap: 4px;padding: 0 12px 0 8px;color: var(--ui-sf-text)}.ui-sf__btn-ghost:hover{background: var(--ui-sf-hover);color: var(--ui-sf-ink)}.ui-sf__btn-ghost[data-hidden]{opacity: 0;visibility: hidden}.ui-sf__btn-primary{margin-left: auto;overflow: hidden;background: var(--ui-sf-ink);color: var(--ui-sf-on-ink)}.ui-sf__btn-primary:hover{opacity: 0.88}.ui-sf__btn-primary:active{transform: scale(0.97)}.ui-sf__btn-primary[aria-disabled="true"]{opacity: 0.4}.ui-sf__btn-primary[data-busy]{opacity: 0.75;cursor: progress}.ui-sf__btn-inner{display: inline-flex;flex: none;align-items: center;gap: 8px;padding: 0 15px}.ui-sf__btn-label{animation: ui-sf-in 260ms var(--ui-sf-ease) both}.ui-sf__btn-secondary{padding: 0 14px;color: var(--ui-sf-text);box-shadow: inset 0 0 0 1px var(--ui-sf-edge)}.ui-sf__btn-secondary:hover{background: var(--ui-sf-hover);color: var(--ui-sf-ink)}.ui-sf__spinner{width: 13px;height: 13px;border-radius: 50%;border: 1.8px solid currentColor;border-right-color: transparent;animation: ui-sf-spin 700ms linear infinite}.ui-sf__submit-error{min-width: 0;font-size: 12.5px;color: var(--ui-sf-danger);animation: ui-sf-in 240ms var(--ui-sf-ease) both}@keyframes ui-sf-in{from{opacity: 0;transform: translateY(4px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-sf-enter{from{opacity: 0;transform: translateX(28px)}to{opacity: 1;transform: none}}@keyframes ui-sf-enter-back{from{opacity: 0;transform: translateX(-28px)}to{opacity: 1;transform: none}}@keyframes ui-sf-leave{to{opacity: 0;transform: translateX(-28px)}}@keyframes ui-sf-leave-back{to{opacity: 0;transform: translateX(28px)}}@keyframes ui-sf-draw{to{stroke-dashoffset: 0}}@keyframes ui-sf-pop{0%{opacity: 0;transform: scale(0.4)}60%{opacity: 1;transform: scale(1.08)}100%{opacity: 1;transform: scale(1)}}@keyframes ui-sf-chip{from{opacity: 0;transform: scale(0.85)}to{opacity: 1;transform: none}}@keyframes ui-sf-spin{to{transform: rotate(360deg)}}@container (max-width: 420px){.ui-sf__head{padding: 12px 8px 12px}.ui-sf__steps{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%)}.ui-sf__compact{display: grid}.ui-sf__pane{padding: 18px 16px 6px}.ui-sf__foot{padding: 12px 12px 12px}.ui-sf__btn{height: 40px}.ui-sf__choices{grid-template-columns: minmax(0, 1fr);grid-auto-flow: row}.ui-sf__choice{grid-template-columns: minmax(0, 1fr) auto;column-gap: 10px}.ui-sf__choice-top{grid-column: 1}.ui-sf__choice-aside{grid-column: 2;grid-row: 1;align-self: center}.ui-sf__choice-desc{grid-column: 1 / -1;margin-top: 2px}.ui-sf__radio{order: -1;margin-left: 0;margin-right: 2px}.ui-sf__review-row{grid-template-columns: minmax(0, 1fr) auto;row-gap: 2px;padding-left: 12px}.ui-sf__review dt{grid-column: 1}.ui-sf__review dd{grid-column: 1;grid-row: 2}.ui-sf__edit{grid-column: 2;grid-row: 1 / span 2;align-self: center;margin: 0}}@media (hover: none) and (pointer: coarse){.ui-sf__input input, .ui-sf__tags-input, .ui-sf__prefix{font-size: 16px}.ui-sf__input, .ui-sf__tags{min-height: 44px}.ui-sf__input input{height: 42px}.ui-sf__chip{height: 32px}.ui-sf__chip-x{width: 30px;height: 30px}.ui-sf__btn{height: 42px}.ui-sf__edit{height: 36px;padding: 0 12px}.ui-sf__step-btn{padding: 4px;margin: -4px 0}}@media (prefers-reduced-motion: reduce){.ui-sf *, .ui-sf *::before, .ui-sf *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-sf{--ui-sf-tray: #111113;--ui-sf-card: #19191b;--ui-sf-line: #2a2a2e;--ui-sf-ink: #ededed;--ui-sf-text: #c8c8cc;--ui-sf-muted: #8b8b92;--ui-sf-faint: #5c5c63;--ui-sf-edge: #34343a;--ui-sf-field: #1d1d20;--ui-sf-hover: #232326;--ui-sf-chip: #2a2a2e;--ui-sf-track: #2e2e33;--ui-sf-accent: #6d8bff;--ui-sf-accent-soft: rgba(109, 139, 255, 0.08);--ui-sf-danger: #ff6369;--ui-sf-on-ink: #111113;--ui-sf-focus: rgba(255, 255, 255, 0.3);--ui-sf-ring: rgba(255, 255, 255, 0.08)}`;
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
    return (0, r.jsx)(b, { onEdit: t, rows: [{ label: `Workspace`, value: (0, r.jsxs)(r.Fragment, { children: [e2.name, (0, r.jsxs)(`span`, { className: `sf-demo__sub`, children: [`affect.app/`, e2.slug] })] }), step: `workspace` }, { label: `Teammates`, value: i2 ? (0, r.jsxs)(r.Fragment, { children: [i2, ` `, i2 === 1 ? `invite` : `invites`, (0, r.jsx)(`span`, { className: `sf-demo__sub`, children: e2.invites.join(`, `) })] }) : `Just you for now`, step: `team` }, { label: `Plan`, value: (0, r.jsxs)(r.Fragment, { children: [n4.title, (0, r.jsxs)(`span`, { className: `sf-demo__muted`, children: [` \xB7 `, n4.aside] })] }), step: `plan` }] });
  } }], initialValues: { name: ``, slug: ``, slugEdited: false, invites: [`maya@northwind.studio`, `leo@northwind.studio`], plan: `pro` }, submitLabel: `Create workspace`, onComplete: () => new Promise((e2) => setTimeout(e2, 1100)), success: (t, n4) => (0, r.jsx)(x, { title: `${t.name} is ready`, description: t.invites.length ? `${t.invites.length} ${t.invites.length === 1 ? `invite is` : `invites are`} on the way. Your trial runs for 14\xA0days.` : `Your trial runs for 14\xA0days.`, children: (0, r.jsx)(`button`, { type: `button`, className: `ui-sf__btn ui-sf__btn-secondary`, onClick: () => {
    e.current = true, n4();
  }, children: `Start over` }) }) }) });
}

export {
  D
};
