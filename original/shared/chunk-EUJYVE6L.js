import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/component-DxL4SVuQ.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e, t = 0) => new Intl.NumberFormat(`en-US`, { minimumFractionDigits: t, maximumFractionDigits: t }).format(e);
var a = (e, t) => t ? `${e}\xA0${t}` : e;
var o = new Intl.DateTimeFormat(`en-US`, { month: `short`, day: `numeric` });
function s(e) {
  let t = Math.ceil((e.getTime() - Date.now()) / 864e5);
  return t <= 0 ? `Resets today` : t === 1 ? `Resets tomorrow` : `Resets in ${t}\xA0days`;
}
var c = [`var(--ui-um-c1)`, `var(--ui-um-c2)`, `var(--ui-um-c3)`, `var(--ui-um-c4)`, `var(--ui-um-c5)`];
var l = (e) => 1 - (1 - e) ** 4;
var u = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function d(e, t, r2) {
  let [i2, a2] = (0, n3.useState)(() => Object.fromEntries(Object.keys(e).map((e2) => [e2, 0]))), o2 = (0, n3.useRef)(i2), s2 = (0, n3.useRef)(false), c2 = JSON.stringify(e);
  return (0, n3.useEffect)(() => {
    let e2 = JSON.parse(c2), n4 = { ...o2.current };
    if (u()) {
      o2.current = e2, a2(e2);
      return;
    }
    let i3 = Object.values(e2).some((e3) => e3 !== 0), d2 = i3 && !s2.current ? t : r2;
    i3 && (s2.current = true);
    let f2 = performance.now(), p2 = 0, m2 = (t2) => {
      let r3 = Math.min(1, (t2 - f2) / d2), i4 = l(r3), s3 = {};
      for (let t3 in e2) s3[t3] = (n4[t3] ?? 0) + (e2[t3] - (n4[t3] ?? 0)) * i4;
      o2.current = s3, a2(s3), r3 < 1 && (p2 = requestAnimationFrame(m2));
    };
    return p2 = requestAnimationFrame(m2), () => cancelAnimationFrame(p2);
  }, [c2]), (e2) => i2[e2] ?? 0;
}
function f(e, t, n4) {
  if (!e || !t) return;
  let r2 = e.querySelector(n4);
  if (!r2 || !r2.offsetWidth) {
    t.style.opacity = `0`;
    return;
  }
  let i2 = !t.dataset.ready;
  i2 && (t.style.transition = `none`), t.style.opacity = `1`, t.style.width = `${r2.offsetWidth}px`, t.style.height = `${r2.offsetHeight}px`, t.style.transform = `translate(${r2.offsetLeft}px, ${r2.offsetTop}px)`, i2 && (t.dataset.ready = `1`, t.offsetWidth, t.style.transition = ``);
}
function p(e, t) {
  let n4 = [...t];
  return e.forEach((e2, r2) => {
    t.some((t2) => t2.label === e2.label) || n4.splice(Math.min(r2, n4.length), 0, { ...e2, value: 0, leaving: true });
  }), n4;
}
function m({ total: e, used: t, limits: l2 = [], periods: u2, period: m2, defaultPeriod: te, onPeriodChange: ne, resetAt: h, daily: re, onUpgrade: ie, title: g = `Usage`, plan: _, unit: v = `credits`, warnAt: y = 0.8, upgradeLabel: ae = `Upgrade`, topUpLabel: oe = `Add credits`, className: se }) {
  let b = (0, n3.useId)(), x = (0, n3.useRef)(null), S = (0, n3.useRef)(null), C = (0, n3.useRef)(null), w = (0, n3.useRef)(null), T = (0, n3.useRef)(null), ce = (0, n3.useRef)(null), le = (0, n3.useRef)(null), [ue, de] = (0, n3.useState)(te ?? u2?.[0]?.id), E = m2 ?? ue, [fe, pe] = (0, n3.useState)(false), [D, O] = (0, n3.useState)(null), [k, me] = (0, n3.useState)(null), [A, j] = (0, n3.useState)(null), [he, ge] = (0, n3.useState)(``), M = (0, n3.useRef)(/* @__PURE__ */ new Map()), _e = (e2) => e2.color ? e2.color : (M.current.has(e2.label) || M.current.set(e2.label, c[M.current.size % c.length]), M.current.get(e2.label)), N = t.map((e2) => ({ ...e2, color: _e(e2) })), [P, F] = (0, n3.useState)(N), ve = t.map((e2) => `${e2.label}:${e2.value}:${e2.color ?? ``}`).join(`|`), I = (0, n3.useRef)(true);
  (0, n3.useLayoutEffect)(() => {
    if (I.current) {
      I.current = false;
      return;
    }
    F((e3) => p(e3.filter((e4) => !e4.leaving), N));
    let e2 = window.setTimeout(() => F((e3) => e3.filter((e4) => !e4.leaving)), 460);
    return () => clearTimeout(e2);
  }, [ve]), (0, n3.useEffect)(() => {
    let e2 = x.current;
    if (!e2 || typeof IntersectionObserver > `u`) {
      pe(true);
      return;
    }
    let t2 = new IntersectionObserver((e3) => {
      e3.some((e4) => e4.isIntersecting) && (pe(true), t2.disconnect());
    }, { threshold: 0.2 });
    return t2.observe(e2), () => t2.disconnect();
  }, []);
  let L = t.reduce((e2, t2) => e2 + Math.max(0, t2.value), 0), R = e > 0 ? L / e : 0, z = R >= 1 ? `limit` : R >= y ? `warn` : `ok`, ye = Math.max(e, L) || 1, B = { used: L, left: Math.max(0, e - L), pct: R * 100 };
  if (P.forEach((e2) => B[`r:${e2.label}`] = e2.leaving ? 0 : Math.max(0, e2.value)), l2.forEach((e2) => B[`l:${e2.label}`] = e2.used), re?.forEach((e2, t2) => B[`d:${t2}`] = e2.value ?? 0), !fe) for (let e2 in B) B[e2] = 0;
  let V = d(B, 1200, 650), H = 0, U = P.map((e2) => {
    let t2 = V(`r:${e2.label}`) / ye * 100, n4 = { ...e2, left: H, width: t2 };
    return H += t2, n4;
  }), W = P.find((e2) => e2.label === D && !e2.leaving), G = P.find((e2) => e2.label === k), K = U.find((e2) => e2.label === k), be = K ? Math.min(100, Math.max(0, K.left + K.width / 2)) : 50, q = (e2) => {
    O(e2), e2 && me(e2);
  }, xe = (e2) => {
    let t2 = e2.currentTarget.getBoundingClientRect(), n4 = (e2.clientX - t2.left) / t2.width * 100;
    return U.find((e3) => !e3.leaving && e3.width > 0 && n4 >= e3.left && n4 <= e3.left + e3.width)?.label ?? null;
  }, Se = (e2) => {
    let t2 = P.filter((e3) => !e3.leaving && e3.value > 0);
    if (!t2.length) return;
    let n4 = t2.findIndex((e3) => e3.label === D);
    if (e2.key === `ArrowRight`) q(t2[(n4 + 1) % t2.length].label);
    else if (e2.key === `ArrowLeft`) q(t2[(n4 - 1 + t2.length) % t2.length].label);
    else if (e2.key === `Escape`) q(null);
    else return;
    e2.preventDefault();
  }, J = re ?? [], Ce = Math.max(1, ...J.map((e2) => e2.value ?? 0)), Y = J.filter((e2) => e2.value !== null), X = Y.length ? Y.reduce((e2, t2) => e2 + (t2.value ?? 0), 0) / Y.length : 0, we = (e2) => {
    let t2 = e2.currentTarget.getBoundingClientRect(), n4 = Math.floor((e2.clientX - t2.left) / t2.width * J.length);
    return Math.min(J.length - 1, Math.max(0, n4));
  }, Te = (e2) => {
    if (J.length) {
      if (e2.key === `ArrowRight`) j((e3) => Math.min(J.length - 1, e3 === null ? 0 : e3 + 1));
      else if (e2.key === `ArrowLeft`) j((e3) => Math.max(0, e3 === null ? J.length - 1 : e3 - 1));
      else if (e2.key === `Escape`) j(null);
      else return;
      e2.preventDefault();
    }
  }, Z = A === null ? void 0 : J[A], Ee = (0, n3.useRef)(J.length), De = (0, n3.useRef)(false);
  Ee.current !== J.length && (Ee.current = J.length, De.current = true);
  let Oe = (e2) => {
    e2 !== E && (m2 === void 0 && de(e2), ne?.(e2), O(null), j(null));
  }, ke = (e2) => {
    if (!u2?.length) return;
    let t2 = u2.findIndex((e3) => e3.id === E), n4 = -1;
    e2.key === `ArrowRight` || e2.key === `ArrowDown` ? n4 = (t2 + 1) % u2.length : (e2.key === `ArrowLeft` || e2.key === `ArrowUp`) && (n4 = (t2 - 1 + u2.length) % u2.length), !(n4 < 0) && (e2.preventDefault(), Oe(u2[n4].id), w.current?.querySelectorAll(`[role=radio]`)[n4]?.focus());
  };
  (0, n3.useLayoutEffect)(() => {
    f(w.current, T.current, `[aria-checked="true"]`);
  }), (0, n3.useLayoutEffect)(() => {
    let e2 = w.current;
    if (!e2) return;
    let t2 = new ResizeObserver(() => f(e2, T.current, `[aria-checked="true"]`));
    return t2.observe(e2), () => t2.disconnect();
  }, []), (0, n3.useLayoutEffect)(() => {
    let e2 = S.current, t2 = C.current;
    if (!e2 || !t2) return;
    let n4 = () => e2.style.height = `${t2.offsetHeight}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    return r2.observe(t2), () => r2.disconnect();
  }, []), (0, n3.useLayoutEffect)(() => {
    let e2 = ce.current, t2 = le.current;
    if (!e2 || !t2) return;
    let n4 = () => e2.style.width = `${t2.offsetWidth}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    return r2.observe(t2), () => r2.disconnect();
  }, []);
  let Ae = (0, n3.useRef)(z);
  (0, n3.useEffect)(() => {
    Ae.current !== z && (Ae.current = z, ge(z === `limit` ? `${g}: limit reached, ${i(L)} of ${i(e)} ${v} used` : z === `warn` ? `${g}: running low, ${Math.round(R * 100)}% of ${v} used` : `${g}: ${i(L)} of ${i(e)} ${v} used`));
  }, [z]);
  let Q = h === void 0 ? null : new Date(h), $ = z !== `ok`, je = V(`pct`);
  return (0, r.jsxs)(`section`, { ref: x, className: [`ui-um`, se].filter(Boolean).join(` `), "aria-labelledby": `${b}-title`, "data-state": z, children: [(0, r.jsx)(`style`, { href: `ui-usage-meter`, precedence: `default`, children: ee }), (0, r.jsx)(`div`, { ref: S, className: `ui-um__card`, children: (0, r.jsxs)(`div`, { ref: C, className: `ui-um__inner`, children: [(0, r.jsxs)(`header`, { className: `ui-um__head`, children: [(0, r.jsxs)(`div`, { className: `ui-um__heading`, children: [(0, r.jsx)(`h3`, { id: `${b}-title`, className: `ui-um__title`, children: g }), (_ || Q) && (0, r.jsxs)(`p`, { className: `ui-um__sub`, children: [_, _ && Q && (0, r.jsx)(`span`, { className: `ui-um__sep`, children: `\xB7` }), Q && (0, r.jsx)(`time`, { dateTime: Q.toISOString(), title: `Resets on ${o.format(Q)}`, children: s(Q) })] })] }), u2 && u2.length > 1 && (0, r.jsxs)(`div`, { ref: w, className: `ui-um__switch`, role: `radiogroup`, "aria-label": `Period`, onKeyDown: ke, children: [(0, r.jsx)(`span`, { ref: T, className: `ui-um__pill`, "aria-hidden": `true` }), u2.map((e2) => (0, r.jsx)(`button`, { type: `button`, role: `radio`, "aria-checked": e2.id === E, tabIndex: e2.id === E ? 0 : -1, className: `ui-um__option`, onClick: () => Oe(e2.id), children: e2.label }, e2.id))] })] }), (0, r.jsxs)(`div`, { className: `ui-um__figure`, children: [(0, r.jsxs)(`p`, { className: `ui-um__amount`, children: [(0, r.jsx)(`span`, { className: `ui-um__big`, children: i(V(`used`)) }), (0, r.jsxs)(`span`, { className: `ui-um__of`, children: [`of `, a(i(e), v)] })] }), (0, r.jsxs)(`span`, { className: `ui-um__pct`, "data-state": z, children: [$ && (0, r.jsx)(`span`, { className: `ui-um__dot`, "aria-hidden": `true` }), i(Math.min(je, 999)), `%`] })] }), (0, r.jsxs)(`div`, { className: `ui-um__bar`, tabIndex: 0, role: `group`, "aria-label": `${i(L)} of ${i(e)} ${v} used \u2013 arrow keys read each category`, "data-active": W ? `` : void 0, onPointerMove: (e2) => e2.pointerType === `mouse` && q(xe(e2)), onPointerLeave: (e2) => e2.pointerType === `mouse` && q(null), onPointerUp: (e2) => {
    if (e2.pointerType === `mouse`) return;
    let t2 = xe(e2);
    q(t2 === D ? null : t2);
  }, onKeyDown: Se, onBlur: () => q(null), children: [(0, r.jsx)(`div`, { className: `ui-um__track`, role: `meter`, "aria-valuemin": 0, "aria-valuemax": e, "aria-valuenow": Math.min(L, e), "aria-valuetext": `${i(L)} of ${i(e)} ${v}`, children: U.map((e2) => (0, r.jsx)(`span`, { className: `ui-um__seg`, "data-active": e2.label === D || void 0, style: { width: `${e2.width}%`, background: e2.color } }, e2.label)) }), (0, r.jsx)(`div`, { className: `ui-um__tip`, "data-open": W ? `` : void 0, style: { left: `${be}%`, "--ui-um-tip-x": `${-be}%` }, "aria-live": `polite`, children: G && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(`span`, { className: `ui-um__tip-label`, children: [(0, r.jsx)(`span`, { className: `ui-um__swatch`, style: { background: G.color } }), G.label] }), (0, r.jsxs)(`span`, { className: `ui-um__tip-value`, children: [a(i(G.value), v), (0, r.jsxs)(`span`, { className: `ui-um__muted`, children: [` \xB7 `, i(L ? G.value / L * 100 : 0), `%`] })] })] }) })] }), (0, r.jsx)(`ul`, { className: `ui-um__legend`, "aria-label": `By category`, "data-active": W ? `` : void 0, children: P.map((e2) => {
    let t2 = V(`r:${e2.label}`);
    return (0, r.jsx)(`li`, { className: `ui-um__row`, "data-leaving": e2.leaving || void 0, children: (0, r.jsxs)(`div`, { className: `ui-um__item`, "data-active": e2.label === D || void 0, onPointerEnter: (t3) => t3.pointerType === `mouse` && !e2.leaving && q(e2.label), onPointerLeave: (e3) => e3.pointerType === `mouse` && q(null), onPointerUp: (t3) => t3.pointerType !== `mouse` && !e2.leaving && q(e2.label === D ? null : e2.label), children: [(0, r.jsx)(`span`, { className: `ui-um__swatch`, style: { background: e2.color } }), (0, r.jsx)(`span`, { className: `ui-um__label`, children: e2.label }), (0, r.jsx)(`span`, { className: `ui-um__value`, children: i(t2) }), (0, r.jsxs)(`span`, { className: `ui-um__share`, children: [i(V(`used`) ? t2 / V(`used`) * 100 : 0), `%`] })] }) }, e2.label);
  }) }), J.length > 0 && (0, r.jsxs)(`div`, { className: `ui-um__daily`, children: [(0, r.jsxs)(`div`, { className: `ui-um__daily-head`, children: [(0, r.jsx)(`span`, { children: `Per day` }), (0, r.jsx)(`span`, { className: `ui-um__daily-read`, children: Z ? (0, r.jsxs)(r.Fragment, { children: [Z.label, ` \xB7 `, (0, r.jsx)(`b`, { children: Z.value === null ? `\u2013` : a(i(Z.value), v) })] }) : (0, r.jsxs)(r.Fragment, { children: [`Avg `, (0, r.jsx)(`b`, { children: i(X) }), ` / day`] }) }, Z ? `d${A}` : `avg`)] }), (0, r.jsx)(`div`, { className: `ui-um__spark`, tabIndex: 0, role: `img`, "aria-label": `${g} per day, ${i(X)} ${v} on average \u2013 arrow keys read each day`, "data-hover": A !== null || void 0, "data-regrow": De.current || void 0, "data-few": J.length <= 14 || void 0, onPointerMove: (e2) => j(we(e2)), onPointerDown: (e2) => j(we(e2)), onPointerLeave: (e2) => e2.pointerType === `mouse` && j(null), onKeyDown: Te, onBlur: () => j(null), children: J.map((e2, t2) => (0, r.jsx)(`span`, { className: `ui-um__day`, "data-future": e2.value === null || void 0, "data-active": t2 === A || void 0, style: { "--i": t2 }, children: (0, r.jsx)(`span`, { style: { height: e2.value === null ? void 0 : `${Math.max(4, V(`d:${t2}`) / Ce * 100)}%` } }) }, t2)) }, J.length)] }), l2.length > 0 && (0, r.jsx)(`ul`, { className: `ui-um__limits`, "aria-label": `Plan limits`, style: { "--n": Math.min(3, l2.length) }, children: l2.map((e2) => {
    let t2 = e2.total == null || !isFinite(e2.total), n4 = e2.decimals ?? (Number.isInteger(e2.used) && (t2 || Number.isInteger(e2.total)) ? 0 : 1), o2 = t2 ? 0 : e2.used / Math.max(e2.total, 1e-9), s2 = t2 ? `ok` : o2 >= 1 ? `limit` : o2 >= y ? `warn` : `ok`, c2 = V(`l:${e2.label}`), l3 = t2 ? `\u221E` : i(e2.total, Number.isInteger(e2.total) ? 0 : n4);
    return (0, r.jsxs)(`li`, { className: `ui-um__limit`, "data-state": s2, children: [(0, r.jsxs)(`span`, { className: `ui-um__limit-label`, children: [e2.label, s2 !== `ok` && (0, r.jsx)(`span`, { className: `ui-um__dot`, "aria-label": s2 === `limit` ? `At the limit` : `Close to the limit` })] }), (0, r.jsxs)(`span`, { className: `ui-um__limit-value`, children: [i(c2, n4), (0, r.jsxs)(`span`, { className: `ui-um__muted`, children: [` of `, a(l3, t2 ? void 0 : e2.unit)] })] }), t2 ? (0, r.jsx)(`span`, { className: `ui-um__thin`, "data-unlimited": ``, "aria-label": `${e2.label}: ${i(e2.used, n4)}, unlimited`, role: `img` }) : (0, r.jsx)(`span`, { className: `ui-um__thin`, role: `meter`, "aria-label": e2.label, "aria-valuemin": 0, "aria-valuemax": e2.total, "aria-valuenow": Math.min(e2.used, e2.total), "aria-valuetext": `${i(e2.used, n4)} of ${a(l3, e2.unit)}`, children: (0, r.jsx)(`span`, { style: { width: `${Math.min(100, c2 / Math.max(e2.total, 1e-9) * 100)}%` } }) })] }, e2.label);
  }) })] }) }), (0, r.jsxs)(`div`, { className: `ui-um__foot`, children: [(0, r.jsxs)(`span`, { className: `ui-um__status`, children: [$ && (0, r.jsx)(`span`, { className: `ui-um__dot`, "aria-hidden": `true` }), z === `limit` ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`b`, { children: `Limit reached` }), L > e && (0, r.jsx)(`span`, { className: `ui-um__muted`, children: a(i(L - e), `over`) })] }) : (0, r.jsxs)(r.Fragment, { children: [z === `warn` && (0, r.jsx)(`b`, { children: `Running low` }), (0, r.jsxs)(`span`, { className: z === `warn` ? `ui-um__muted` : void 0, children: [a(i(V(`left`)), v), ` left`] })] })] }, z), (0, r.jsx)(`button`, { ref: ce, type: `button`, className: `ui-um__action`, "data-strong": $ || void 0, onClick: () => ie?.(z), children: (0, r.jsx)(`span`, { ref: le, className: `ui-um__action-inner`, children: (0, r.jsx)(`span`, { className: `ui-um__action-text`, children: $ ? oe : ae }, $ ? `top-up` : `upgrade`) }) })] }), (0, r.jsx)(`span`, { className: `ui-um__live`, "aria-live": `polite`, children: he })] });
}
var ee = `.ui-um{--ui-um-tray: #f0f0f0;--ui-um-card: #ffffff;--ui-um-line: #ececec;--ui-um-ink: #171717;--ui-um-text: #404040;--ui-um-muted: #8f8f8f;--ui-um-faint: #b5b5b5;--ui-um-well: #f4f4f5;--ui-um-hover: #f4f4f5;--ui-um-track: #efeff1;--ui-um-fill: #4a4a4f;--ui-um-spark: #dcdce0;--ui-um-accent: #2f6bff;--ui-um-warn: #f59e0b;--ui-um-warn-text: #b45309;--ui-um-c1: #2f6bff;--ui-um-c2: #74a0ff;--ui-um-c3: #b4cbff;--ui-um-c4: #a8a8ae;--ui-um-c5: #d4d4d8;--ui-um-focus: rgba(23, 23, 23, 0.22);--ui-um-tip-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.16), 0 2px 6px rgba(0, 0, 0, 0.06);--ui-um-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;container-type: inline-size;position: relative;display: grid;width: 100%;max-width: 460px;padding: 4px;border-radius: 20px;background: var(--ui-um-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 1.45;color: var(--ui-um-text);-webkit-font-smoothing: antialiased}.ui-um *, .ui-um *::before, .ui-um *::after{box-sizing: border-box}:where(.ui-um) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-um) :is(h3, p, ul){margin: 0;padding: 0}:where(.ui-um) ul{list-style: none}.ui-um :is(button, [tabindex="0"]):focus-visible{outline: 2px solid var(--ui-um-focus);outline-offset: 2px}.ui-um b{font-weight: 500;color: var(--ui-um-ink)}.ui-um__muted{color: var(--ui-um-muted)}.ui-um__card{overflow: hidden;border-radius: 16px;background: var(--ui-um-card);box-shadow: 0 0 0 1px var(--ui-um-line), 0 1px 2px rgba(0, 0, 0, 0.04);transition: height 360ms var(--ui-um-ease)}.ui-um__inner{display: flow-root;padding: 14px 16px 18px}.ui-um__head{display: flex;align-items: flex-start;justify-content: space-between;gap: 12px}.ui-um__heading{min-width: 0;padding-top: 2px}.ui-um__title{overflow: hidden;font-size: 14px;font-weight: 600;line-height: 20px;color: var(--ui-um-ink);white-space: nowrap;text-overflow: ellipsis}.ui-um__sub{font-size: 12.5px;color: var(--ui-um-muted);white-space: nowrap;overflow: hidden;text-overflow: ellipsis}.ui-um__sep{margin: 0 6px;color: var(--ui-um-faint)}.ui-um__switch{position: relative;display: grid;grid-auto-columns: auto;grid-auto-flow: column;flex: none;padding: 2px;border-radius: 10px;background: var(--ui-um-well);box-shadow: inset 0 0 0 1px var(--ui-um-line)}.ui-um__pill{position: absolute;top: 0;left: 0;border-radius: 8px;background: var(--ui-um-card);box-shadow: 0 0 0 1px var(--ui-um-line), 0 1px 2px rgba(0, 0, 0, 0.06);opacity: 0;pointer-events: none;transition: transform 320ms var(--ui-um-ease), width 320ms var(--ui-um-ease), height 320ms var(--ui-um-ease), opacity 200ms ease}.ui-um__option{position: relative;z-index: 1;min-width: 0;height: 26px;padding: 0 9px;overflow: hidden;border-radius: 8px;font-size: 12px;font-weight: 500;color: var(--ui-um-muted);white-space: nowrap;text-overflow: ellipsis;transition: color 200ms ease}.ui-um__option:hover, .ui-um__option[aria-checked="true"]{color: var(--ui-um-ink)}.ui-um__figure{display: flex;align-items: baseline;justify-content: space-between;gap: 12px;margin-top: 18px}.ui-um__amount{display: flex;flex-wrap: wrap;align-items: baseline;column-gap: 6px;min-width: 0}.ui-um__big{font-size: 28px;font-weight: 600;line-height: 34px;letter-spacing: -0.02em;color: var(--ui-um-ink);font-variant-numeric: tabular-nums}.ui-um__of{font-size: 13px;color: var(--ui-um-muted);font-variant-numeric: tabular-nums;white-space: nowrap}.ui-um__pct{display: inline-flex;flex: none;align-items: center;gap: 6px;font-size: 13px;font-weight: 500;color: var(--ui-um-text);font-variant-numeric: tabular-nums;transition: color 260ms ease}.ui-um__pct[data-state="warn"]{color: var(--ui-um-warn-text)}.ui-um__pct[data-state="limit"]{color: var(--ui-um-ink)}.ui-um__dot{display: inline-block;flex: none;width: 6px;height: 6px;border-radius: 50%;background: var(--ui-um-warn);animation: ui-um-pop 420ms cubic-bezier(0.34, 1.56, 0.64, 1) both}.ui-um[data-state="limit"] .ui-um__pct .ui-um__dot, .ui-um[data-state="limit"] .ui-um__status .ui-um__dot, .ui-um__limit[data-state="limit"] .ui-um__dot{box-shadow: 0 0 0 3px color-mix(in srgb, var(--ui-um-warn) 22%, transparent)}.ui-um__bar{position: relative;margin-top: 10px;padding: 4px 0;border-radius: 6px;cursor: default}.ui-um__track{display: flex;height: 10px;overflow: hidden;border-radius: 5px;background: var(--ui-um-track)}.ui-um__seg{position: relative;flex: none;height: 100%;overflow: hidden;transition: opacity 200ms ease}.ui-um__seg::after{content: "";position: absolute;top: 0;right: 0;bottom: 0;width: 2px;background: var(--ui-um-card)}.ui-um__bar[data-active] .ui-um__seg:not([data-active]){opacity: 0.28}.ui-um__tip{position: absolute;bottom: calc(100% + 6px);z-index: 2;display: grid;gap: 1px;padding: 7px 10px 8px;border: 1px solid var(--ui-um-line);border-radius: 10px;background: var(--ui-um-card);box-shadow: var(--ui-um-tip-shadow);white-space: nowrap;pointer-events: none;opacity: 0;transform: translate(var(--ui-um-tip-x), 4px) scale(0.97);transition: left 260ms var(--ui-um-ease), transform 260ms var(--ui-um-ease), opacity 160ms ease}.ui-um__tip[data-open]{opacity: 1;transform: translate(var(--ui-um-tip-x), 0)}.ui-um__tip-label{display: flex;align-items: center;gap: 7px;font-size: 12px;color: var(--ui-um-muted)}.ui-um__tip-value{font-size: 13px;font-weight: 500;color: var(--ui-um-ink);font-variant-numeric: tabular-nums}.ui-um__tip-value .ui-um__muted{font-weight: 400}.ui-um__legend{display: grid;margin-top: 10px}.ui-um__row{display: grid;grid-template-rows: 1fr;animation: ui-um-grow 380ms var(--ui-um-ease) both;transition: grid-template-rows 320ms var(--ui-um-ease) 80ms, opacity 200ms ease}.ui-um__row[data-leaving]{grid-template-rows: 0fr;opacity: 0;pointer-events: none}.ui-um__item{display: flex;align-items: center;gap: 10px;min-height: 0;height: 30px;margin: 0 -8px;padding: 0 8px;overflow: hidden;border-radius: 8px;transition: background-color 160ms ease, opacity 200ms ease}.ui-um__row[data-leaving] .ui-um__item{background: none}.ui-um__item[data-active]{background: var(--ui-um-hover)}.ui-um__legend[data-active] .ui-um__item:not([data-active]){opacity: 0.45}.ui-um__swatch{flex: none;width: 8px;height: 8px;border-radius: 2.5px}.ui-um__label{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-um-text)}.ui-um__value{color: var(--ui-um-ink);font-weight: 500;font-variant-numeric: tabular-nums}.ui-um__share{width: 40px;text-align: right;color: var(--ui-um-muted);font-variant-numeric: tabular-nums}.ui-um__daily{margin-top: 12px}.ui-um__daily-head{display: flex;justify-content: space-between;gap: 12px;font-size: 12px;color: var(--ui-um-muted);white-space: nowrap}.ui-um__daily-read{font-variant-numeric: tabular-nums;animation: ui-um-in 220ms var(--ui-um-ease) both}.ui-um__spark{display: flex;align-items: stretch;gap: 2px;height: 34px;margin-top: 8px;border-radius: 4px;cursor: default}.ui-um__spark[data-few]{gap: 5px}.ui-um__day{display: flex;flex: 1 1 0;align-items: flex-end;min-width: 0}.ui-um__day > span{width: 100%;border-radius: 2px;background: var(--ui-um-spark);transform-origin: bottom;transition: background-color 160ms ease, opacity 160ms ease}.ui-um__spark[data-regrow] .ui-um__day > span{animation: ui-um-rise 520ms var(--ui-um-ease) both;animation-delay: calc(var(--i) * 18ms)}.ui-um__day[data-future] > span{height: 2px;background: var(--ui-um-track)}.ui-um__spark[data-hover] .ui-um__day:not([data-active]) > span{opacity: 0.6}.ui-um__day[data-active] > span{background: var(--ui-um-accent)}.ui-um__limits{display: grid;grid-template-columns: repeat(var(--n, 3), minmax(0, 1fr));gap: 12px 18px;margin-top: 16px;padding-top: 14px;border-top: 1px solid var(--ui-um-line)}.ui-um__limit{display: grid;grid-template-columns: minmax(0, 1fr);align-content: start;min-width: 0}.ui-um__limit-label{display: flex;align-items: center;gap: 6px;min-width: 0;overflow: hidden;font-size: 12px;color: var(--ui-um-muted);white-space: nowrap}.ui-um__limit-value{overflow: hidden;color: var(--ui-um-ink);font-weight: 500;font-variant-numeric: tabular-nums;white-space: nowrap;text-overflow: ellipsis}.ui-um__limit-value .ui-um__muted{font-weight: 400}.ui-um__thin{position: relative;display: block;height: 4px;margin-top: 7px;overflow: hidden;border-radius: 2px;background: var(--ui-um-track)}.ui-um__thin > span{position: absolute;top: 0;bottom: 0;left: 0;border-radius: inherit;background: var(--ui-um-fill)}.ui-um__thin[data-unlimited]{background: repeating-linear-gradient(-45deg, var(--ui-um-track) 0 3px, transparent 3px 6px)}.ui-um__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 44px;padding: 6px 2px 2px 12px;font-size: 12.5px;color: var(--ui-um-muted)}.ui-um__status{display: flex;align-items: center;gap: 7px;min-width: 0;overflow: hidden;white-space: nowrap;font-variant-numeric: tabular-nums;animation: ui-um-in 260ms var(--ui-um-ease) both}.ui-um__status > :last-child{overflow: hidden;text-overflow: ellipsis}.ui-um__action{display: inline-flex;flex: none;justify-content: center;height: 32px;overflow: hidden;border-radius: 14px;font-size: 13px;font-weight: 500;color: var(--ui-um-ink);background: var(--ui-um-card);box-shadow: 0 0 0 1px var(--ui-um-line), 0 1px 2px rgba(0, 0, 0, 0.04);transition: background-color 280ms ease, color 280ms ease, box-shadow 280ms ease, width 320ms var(--ui-um-ease), transform 140ms ease}.ui-um__action:hover{background: var(--ui-um-hover)}.ui-um__action:active{transform: scale(0.97)}.ui-um__action[data-strong]{background: var(--ui-um-ink);color: var(--ui-um-card);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 6px 14px -6px rgba(0, 0, 0, 0.35);animation: ui-um-nudge 520ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-um__action[data-strong]:hover{background: var(--ui-um-ink);opacity: 0.88}.ui-um__action-inner{display: inline-flex;align-items: center;flex: none;height: 100%;padding: 0 14px;white-space: nowrap}.ui-um__action-text{animation: ui-um-in 260ms var(--ui-um-ease) both}.ui-um__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-um-in{from{opacity: 0;transform: translateY(3px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-um-grow{from{grid-template-rows: 0fr;opacity: 0}to{grid-template-rows: 1fr;opacity: 1}}@keyframes ui-um-rise{from{transform: scaleY(0)}to{transform: none}}@keyframes ui-um-pop{0%{transform: scale(0.3)}60%{transform: scale(1.25)}100%{transform: scale(1)}}@keyframes ui-um-nudge{0%{transform: scale(0.94)}60%{transform: scale(1.04)}100%{transform: scale(1)}}@container (max-width: 400px){.ui-um__inner{padding: 12px 14px 16px}.ui-um__head{flex-direction: column;align-items: stretch;gap: 12px}.ui-um__switch{grid-auto-columns: minmax(0, auto)}.ui-um__option{padding: 0 6px}.ui-um__big{font-size: 26px}.ui-um__limits{grid-template-columns: minmax(0, 1fr);gap: 12px}.ui-um__limit{grid-template-columns: minmax(0, 1fr) auto;column-gap: 12px}.ui-um__limit-value{font-size: 12.5px}.ui-um__thin{grid-column: 1 / -1;margin-top: 6px}}@container (max-width: 300px){.ui-um__of{font-size: 12px}.ui-um__share{width: 34px}}@media (hover: none) and (pointer: coarse){.ui-um__option{height: 34px}.ui-um__item{height: 36px}.ui-um__action{height: 38px;border-radius: 13px}.ui-um__foot{min-height: 50px}.ui-um__bar{padding: 10px 0;margin-top: 4px}}@media (prefers-reduced-motion: reduce){.ui-um *, .ui-um *::before, .ui-um *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-um{--ui-um-tray: #111113;--ui-um-card: #19191b;--ui-um-line: #2a2a2e;--ui-um-ink: #ededed;--ui-um-text: #c8c8cc;--ui-um-muted: #8b8b92;--ui-um-faint: #5c5c63;--ui-um-well: #111113;--ui-um-hover: #232326;--ui-um-track: #2a2a2e;--ui-um-fill: #b4b4ba;--ui-um-spark: #3a3a40;--ui-um-accent: #6d8bff;--ui-um-warn: #f5a524;--ui-um-warn-text: #f5b350;--ui-um-c1: #6d8bff;--ui-um-c2: #4c66c9;--ui-um-c3: #34468a;--ui-um-c4: #6b6b72;--ui-um-c5: #45454b;--ui-um-focus: rgba(255, 255, 255, 0.3);--ui-um-tip-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.5), 0 2px 6px rgba(0, 0, 0, 0.35)}:where(.dark, [data-theme="dark"]) .ui-um__pill{background: #2a2a2e;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-um__tip{background: #2a2a2d;border-color: rgba(255, 255, 255, 0.1)}`;

export {
  m
};
