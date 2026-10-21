import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo.clean-BjDeSoUM.js
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
var c = [`var(--ui-umc-c1)`, `var(--ui-umc-c2)`, `var(--ui-umc-c3)`, `var(--ui-umc-c4)`, `var(--ui-umc-c5)`];
var l = (e) => 1 - (1 - e) ** 4;
var u = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function ee(e, t, r2) {
  let [i2, a2] = (0, n3.useState)(() => Object.fromEntries(Object.keys(e).map((e2) => [e2, 0]))), o2 = (0, n3.useRef)(i2), s2 = (0, n3.useRef)(false), c2 = JSON.stringify(e);
  return (0, n3.useEffect)(() => {
    let e2 = JSON.parse(c2), n4 = { ...o2.current };
    if (u()) {
      o2.current = e2, a2(e2);
      return;
    }
    let i3 = Object.values(e2).some((e3) => e3 !== 0), ee2 = i3 && !s2.current ? t : r2;
    i3 && (s2.current = true);
    let d2 = performance.now(), f2 = 0, p2 = (t2) => {
      let r3 = Math.min(1, (t2 - d2) / ee2), i4 = l(r3), s3 = {};
      for (let t3 in e2) s3[t3] = (n4[t3] ?? 0) + (e2[t3] - (n4[t3] ?? 0)) * i4;
      o2.current = s3, a2(s3), r3 < 1 && (f2 = requestAnimationFrame(p2));
    };
    return f2 = requestAnimationFrame(p2), () => cancelAnimationFrame(f2);
  }, [c2]), (e2) => i2[e2] ?? 0;
}
function d(e, t, n4) {
  if (!e || !t) return;
  let r2 = e.querySelector(n4);
  if (!r2 || !r2.offsetWidth) {
    t.style.opacity = `0`;
    return;
  }
  let i2 = !t.dataset.ready;
  i2 && (t.style.transition = `none`), t.style.opacity = `1`, t.style.width = `${r2.offsetWidth}px`, t.style.height = `${r2.offsetHeight}px`, t.style.transform = `translate(${r2.offsetLeft}px, ${r2.offsetTop}px)`, i2 && (t.dataset.ready = `1`, t.offsetWidth, t.style.transition = ``);
}
function f(e, t) {
  let n4 = [...t];
  return e.forEach((e2, r2) => {
    t.some((t2) => t2.label === e2.label) || n4.splice(Math.min(r2, n4.length), 0, { ...e2, value: 0, leaving: true });
  }), n4;
}
function p({ total: e, used: t, limits: l2 = [], periods: u2, period: p2, defaultPeriod: m2, onPeriodChange: ne2, resetAt: h2, daily: g2, onUpgrade: _2, title: v2 = `Usage`, plan: y, unit: b = `credits`, warnAt: x = 0.8, upgradeLabel: re = `Upgrade`, topUpLabel: ie = `Add credits`, className: ae }) {
  let S = (0, n3.useId)(), C = (0, n3.useRef)(null), w = (0, n3.useRef)(null), T = (0, n3.useRef)(null), E = (0, n3.useRef)(null), D = (0, n3.useRef)(null), oe = (0, n3.useRef)(null), se = (0, n3.useRef)(null), [ce, le] = (0, n3.useState)(m2 ?? u2?.[0]?.id), O = p2 ?? ce, [ue, de] = (0, n3.useState)(false), [k, fe] = (0, n3.useState)(null), [pe, me] = (0, n3.useState)(null), [A, j] = (0, n3.useState)(null), [he, ge] = (0, n3.useState)(``), M = (0, n3.useRef)(/* @__PURE__ */ new Map()), _e = (e2) => e2.color ? e2.color : (M.current.has(e2.label) || M.current.set(e2.label, c[M.current.size % c.length]), M.current.get(e2.label)), N = t.map((e2) => ({ ...e2, color: _e(e2) })), [P, F] = (0, n3.useState)(N), ve = t.map((e2) => `${e2.label}:${e2.value}:${e2.color ?? ``}`).join(`|`), I = (0, n3.useRef)(true);
  (0, n3.useLayoutEffect)(() => {
    if (I.current) {
      I.current = false;
      return;
    }
    F((e3) => f(e3.filter((e4) => !e4.leaving), N));
    let e2 = window.setTimeout(() => F((e3) => e3.filter((e4) => !e4.leaving)), 460);
    return () => clearTimeout(e2);
  }, [ve]), (0, n3.useEffect)(() => {
    let e2 = C.current;
    if (!e2 || typeof IntersectionObserver > `u`) {
      de(true);
      return;
    }
    let t2 = new IntersectionObserver((e3) => {
      e3.some((e4) => e4.isIntersecting) && (de(true), t2.disconnect());
    }, { threshold: 0.2 });
    return t2.observe(e2), () => t2.disconnect();
  }, []);
  let L = t.reduce((e2, t2) => e2 + Math.max(0, t2.value), 0), R = e > 0 ? L / e : 0, z = R >= 1 ? `limit` : R >= x ? `warn` : `ok`, ye = Math.max(e, L) || 1, B = { used: L, left: Math.max(0, e - L), pct: R * 100 };
  if (P.forEach((e2) => B[`r:${e2.label}`] = e2.leaving ? 0 : Math.max(0, e2.value)), l2.forEach((e2) => B[`l:${e2.label}`] = e2.used), g2?.forEach((e2, t2) => B[`d:${t2}`] = e2.value ?? 0), !ue) for (let e2 in B) B[e2] = 0;
  let V = ee(B, 1200, 650), H = 0, U = P.map((e2) => {
    let t2 = V(`r:${e2.label}`) / ye * 100, n4 = { ...e2, left: H, width: t2 };
    return H += t2, n4;
  }), W = P.find((e2) => e2.label === k && !e2.leaving), G = P.find((e2) => e2.label === pe), K = U.find((e2) => e2.label === pe), be = K ? Math.min(100, Math.max(0, K.left + K.width / 2)) : 50, q = (e2) => {
    fe(e2), e2 && me(e2);
  }, xe = (e2) => {
    let t2 = e2.currentTarget.getBoundingClientRect(), n4 = (e2.clientX - t2.left) / t2.width * 100;
    return U.find((e3) => !e3.leaving && e3.width > 0 && n4 >= e3.left && n4 <= e3.left + e3.width)?.label ?? null;
  }, Se = (e2) => {
    let t2 = P.filter((e3) => !e3.leaving && e3.value > 0);
    if (!t2.length) return;
    let n4 = t2.findIndex((e3) => e3.label === k);
    if (e2.key === `ArrowRight`) q(t2[(n4 + 1) % t2.length].label);
    else if (e2.key === `ArrowLeft`) q(t2[(n4 - 1 + t2.length) % t2.length].label);
    else if (e2.key === `Escape`) q(null);
    else return;
    e2.preventDefault();
  }, J = g2 ?? [], Ce = Math.max(1, ...J.map((e2) => e2.value ?? 0)), Y = J.filter((e2) => e2.value !== null), X = Y.length ? Y.reduce((e2, t2) => e2 + (t2.value ?? 0), 0) / Y.length : 0, we = (e2) => {
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
    e2 !== O && (p2 === void 0 && le(e2), ne2?.(e2), fe(null), j(null));
  }, ke = (e2) => {
    if (!u2?.length) return;
    let t2 = u2.findIndex((e3) => e3.id === O), n4 = -1;
    e2.key === `ArrowRight` || e2.key === `ArrowDown` ? n4 = (t2 + 1) % u2.length : (e2.key === `ArrowLeft` || e2.key === `ArrowUp`) && (n4 = (t2 - 1 + u2.length) % u2.length), !(n4 < 0) && (e2.preventDefault(), Oe(u2[n4].id), E.current?.querySelectorAll(`[role=radio]`)[n4]?.focus());
  };
  (0, n3.useLayoutEffect)(() => {
    d(E.current, D.current, `[aria-checked="true"]`);
  }), (0, n3.useLayoutEffect)(() => {
    let e2 = E.current;
    if (!e2) return;
    let t2 = new ResizeObserver(() => d(e2, D.current, `[aria-checked="true"]`));
    return t2.observe(e2), () => t2.disconnect();
  }, []), (0, n3.useLayoutEffect)(() => {
    let e2 = w.current, t2 = T.current;
    if (!e2 || !t2) return;
    let n4 = () => e2.style.height = `${t2.offsetHeight}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    return r2.observe(t2), () => r2.disconnect();
  }, []), (0, n3.useLayoutEffect)(() => {
    let e2 = oe.current, t2 = se.current;
    if (!e2 || !t2) return;
    let n4 = () => e2.style.width = `${t2.offsetWidth}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    return r2.observe(t2), () => r2.disconnect();
  }, []);
  let Ae = (0, n3.useRef)(z);
  (0, n3.useEffect)(() => {
    Ae.current !== z && (Ae.current = z, ge(z === `limit` ? `${v2}: limit reached, ${i(L)} of ${i(e)} ${b} used` : z === `warn` ? `${v2}: running low, ${Math.round(R * 100)}% of ${b} used` : `${v2}: ${i(L)} of ${i(e)} ${b} used`));
  }, [z]);
  let Q = h2 === void 0 ? null : new Date(h2), $ = z !== `ok`, je = V(`pct`);
  return (0, r.jsxs)(`section`, { ref: C, className: [`ui-umc`, ae].filter(Boolean).join(` `), "aria-labelledby": `${S}-title`, "data-state": z, children: [(0, r.jsx)(`style`, { href: `ui-usage-meter-clean`, precedence: `default`, children: te }), (0, r.jsx)(`div`, { ref: w, className: `ui-umc__card`, children: (0, r.jsxs)(`div`, { ref: T, className: `ui-umc__inner`, children: [(0, r.jsxs)(`header`, { className: `ui-umc__head`, children: [(0, r.jsxs)(`div`, { className: `ui-umc__heading`, children: [(0, r.jsx)(`h3`, { id: `${S}-title`, className: `ui-umc__title`, children: v2 }), (y || Q) && (0, r.jsxs)(`p`, { className: `ui-umc__sub`, children: [y, y && Q && (0, r.jsx)(`span`, { className: `ui-umc__sep`, children: `\xB7` }), Q && (0, r.jsx)(`time`, { dateTime: Q.toISOString(), title: `Resets on ${o.format(Q)}`, children: s(Q) })] })] }), u2 && u2.length > 1 && (0, r.jsxs)(`div`, { ref: E, className: `ui-umc__switch`, role: `radiogroup`, "aria-label": `Period`, onKeyDown: ke, children: [(0, r.jsx)(`span`, { ref: D, className: `ui-umc__pill`, "aria-hidden": `true` }), u2.map((e2) => (0, r.jsx)(`button`, { type: `button`, role: `radio`, "aria-checked": e2.id === O, tabIndex: e2.id === O ? 0 : -1, className: `ui-umc__option`, onClick: () => Oe(e2.id), children: e2.label }, e2.id))] })] }), (0, r.jsxs)(`div`, { className: `ui-umc__figure`, children: [(0, r.jsxs)(`p`, { className: `ui-umc__amount`, children: [(0, r.jsx)(`span`, { className: `ui-umc__big`, children: i(V(`used`)) }), (0, r.jsxs)(`span`, { className: `ui-umc__of`, children: [`of `, a(i(e), b)] })] }), (0, r.jsxs)(`span`, { className: `ui-umc__pct`, "data-state": z, children: [$ && (0, r.jsx)(`span`, { className: `ui-umc__dot`, "aria-hidden": `true` }), i(Math.min(je, 999)), `%`] })] }), (0, r.jsxs)(`div`, { className: `ui-umc__bar`, tabIndex: 0, role: `group`, "aria-label": `${i(L)} of ${i(e)} ${b} used \u2013 arrow keys read each category`, "data-active": W ? `` : void 0, onPointerMove: (e2) => e2.pointerType === `mouse` && q(xe(e2)), onPointerLeave: (e2) => e2.pointerType === `mouse` && q(null), onPointerUp: (e2) => {
    if (e2.pointerType === `mouse`) return;
    let t2 = xe(e2);
    q(t2 === k ? null : t2);
  }, onKeyDown: Se, onBlur: () => q(null), children: [(0, r.jsx)(`div`, { className: `ui-umc__track`, role: `meter`, "aria-valuemin": 0, "aria-valuemax": e, "aria-valuenow": Math.min(L, e), "aria-valuetext": `${i(L)} of ${i(e)} ${b}`, children: U.map((e2) => (0, r.jsx)(`span`, { className: `ui-umc__seg`, "data-active": e2.label === k || void 0, style: { width: `${e2.width}%`, background: e2.color } }, e2.label)) }), (0, r.jsx)(`div`, { className: `ui-umc__tip`, "data-open": W ? `` : void 0, style: { left: `${be}%`, "--ui-umc-tip-x": `${-be}%` }, "aria-live": `polite`, children: G && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(`span`, { className: `ui-umc__tip-label`, children: [(0, r.jsx)(`span`, { className: `ui-umc__swatch`, style: { background: G.color } }), G.label] }), (0, r.jsxs)(`span`, { className: `ui-umc__tip-value`, children: [a(i(G.value), b), (0, r.jsxs)(`span`, { className: `ui-umc__muted`, children: [` \xB7 `, i(L ? G.value / L * 100 : 0), `%`] })] })] }) })] }), (0, r.jsx)(`ul`, { className: `ui-umc__legend`, "aria-label": `By category`, "data-active": W ? `` : void 0, children: P.map((e2) => {
    let t2 = V(`r:${e2.label}`);
    return (0, r.jsx)(`li`, { className: `ui-umc__row`, "data-leaving": e2.leaving || void 0, children: (0, r.jsxs)(`div`, { className: `ui-umc__item`, "data-active": e2.label === k || void 0, onPointerEnter: (t3) => t3.pointerType === `mouse` && !e2.leaving && q(e2.label), onPointerLeave: (e3) => e3.pointerType === `mouse` && q(null), onPointerUp: (t3) => t3.pointerType !== `mouse` && !e2.leaving && q(e2.label === k ? null : e2.label), children: [(0, r.jsx)(`span`, { className: `ui-umc__swatch`, style: { background: e2.color } }), (0, r.jsx)(`span`, { className: `ui-umc__label`, children: e2.label }), (0, r.jsx)(`span`, { className: `ui-umc__value`, children: i(t2) }), (0, r.jsxs)(`span`, { className: `ui-umc__share`, children: [i(V(`used`) ? t2 / V(`used`) * 100 : 0), `%`] })] }) }, e2.label);
  }) }), J.length > 0 && (0, r.jsxs)(`div`, { className: `ui-umc__daily`, children: [(0, r.jsxs)(`div`, { className: `ui-umc__daily-head`, children: [(0, r.jsx)(`span`, { children: `Per day` }), (0, r.jsx)(`span`, { className: `ui-umc__daily-read`, children: Z ? (0, r.jsxs)(r.Fragment, { children: [Z.label, ` \xB7 `, (0, r.jsx)(`b`, { children: Z.value === null ? `\u2013` : a(i(Z.value), b) })] }) : (0, r.jsxs)(r.Fragment, { children: [`Avg `, (0, r.jsx)(`b`, { children: i(X) }), ` / day`] }) }, Z ? `d${A}` : `avg`)] }), (0, r.jsx)(`div`, { className: `ui-umc__spark`, tabIndex: 0, role: `img`, "aria-label": `${v2} per day, ${i(X)} ${b} on average \u2013 arrow keys read each day`, "data-hover": A !== null || void 0, "data-regrow": De.current || void 0, "data-few": J.length <= 14 || void 0, onPointerMove: (e2) => j(we(e2)), onPointerDown: (e2) => j(we(e2)), onPointerLeave: (e2) => e2.pointerType === `mouse` && j(null), onKeyDown: Te, onBlur: () => j(null), children: J.map((e2, t2) => (0, r.jsx)(`span`, { className: `ui-umc__day`, "data-future": e2.value === null || void 0, "data-active": t2 === A || void 0, style: { "--i": t2 }, children: (0, r.jsx)(`span`, { style: { height: e2.value === null ? void 0 : `${Math.max(4, V(`d:${t2}`) / Ce * 100)}%` } }) }, t2)) }, J.length)] }), l2.length > 0 && (0, r.jsx)(`ul`, { className: `ui-umc__limits`, "aria-label": `Plan limits`, style: { "--n": Math.min(3, l2.length) }, children: l2.map((e2) => {
    let t2 = e2.total == null || !isFinite(e2.total), n4 = e2.decimals ?? (Number.isInteger(e2.used) && (t2 || Number.isInteger(e2.total)) ? 0 : 1), o2 = t2 ? 0 : e2.used / Math.max(e2.total, 1e-9), s2 = t2 ? `ok` : o2 >= 1 ? `limit` : o2 >= x ? `warn` : `ok`, c2 = V(`l:${e2.label}`), l3 = t2 ? `\u221E` : i(e2.total, Number.isInteger(e2.total) ? 0 : n4);
    return (0, r.jsxs)(`li`, { className: `ui-umc__limit`, "data-state": s2, children: [(0, r.jsxs)(`span`, { className: `ui-umc__limit-label`, children: [e2.label, s2 !== `ok` && (0, r.jsx)(`span`, { className: `ui-umc__dot`, "aria-label": s2 === `limit` ? `At the limit` : `Close to the limit` })] }), (0, r.jsxs)(`span`, { className: `ui-umc__limit-value`, children: [i(c2, n4), (0, r.jsxs)(`span`, { className: `ui-umc__muted`, children: [` of `, a(l3, t2 ? void 0 : e2.unit)] })] }), t2 ? (0, r.jsx)(`span`, { className: `ui-umc__thin`, "data-unlimited": ``, "aria-label": `${e2.label}: ${i(e2.used, n4)}, unlimited`, role: `img` }) : (0, r.jsx)(`span`, { className: `ui-umc__thin`, role: `meter`, "aria-label": e2.label, "aria-valuemin": 0, "aria-valuemax": e2.total, "aria-valuenow": Math.min(e2.used, e2.total), "aria-valuetext": `${i(e2.used, n4)} of ${a(l3, e2.unit)}`, children: (0, r.jsx)(`span`, { style: { width: `${Math.min(100, c2 / Math.max(e2.total, 1e-9) * 100)}%` } }) })] }, e2.label);
  }) })] }) }), (0, r.jsxs)(`div`, { className: `ui-umc__foot`, children: [(0, r.jsxs)(`span`, { className: `ui-umc__status`, children: [$ && (0, r.jsx)(`span`, { className: `ui-umc__dot`, "aria-hidden": `true` }), z === `limit` ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`b`, { children: `Limit reached` }), L > e && (0, r.jsx)(`span`, { className: `ui-umc__muted`, children: a(i(L - e), `over`) })] }) : (0, r.jsxs)(r.Fragment, { children: [z === `warn` && (0, r.jsx)(`b`, { children: `Running low` }), (0, r.jsxs)(`span`, { className: z === `warn` ? `ui-umc__muted` : void 0, children: [a(i(V(`left`)), b), ` left`] })] })] }, z), (0, r.jsx)(`button`, { ref: oe, type: `button`, className: `ui-umc__action`, "data-strong": $ || void 0, onClick: () => _2?.(z), children: (0, r.jsx)(`span`, { ref: se, className: `ui-umc__action-inner`, children: (0, r.jsx)(`span`, { className: `ui-umc__action-text`, children: $ ? ie : re }, $ ? `top-up` : `upgrade`) }) })] }), (0, r.jsx)(`span`, { className: `ui-umc__live`, "aria-live": `polite`, children: he })] });
}
var te = `.ui-umc{--ui-umc-card: #ffffff;--ui-umc-strong: #000000;--ui-umc-ink: rgba(0, 0, 0, 0.88);--ui-umc-text: rgba(0, 0, 0, 0.61);--ui-umc-muted: rgba(0, 0, 0, 0.45);--ui-umc-faint: rgba(0, 0, 0, 0.27);--ui-umc-line: rgba(0, 0, 0, 0.06);--ui-umc-wash: rgba(0, 0, 0, 0.03);--ui-umc-fill: rgba(0, 0, 0, 0.06);--ui-umc-track: rgba(0, 0, 0, 0.06);--ui-umc-spark: rgba(0, 0, 0, 0.12);--ui-umc-accent: rgba(0, 96, 226, 0.765);--ui-umc-warn: #e8a20c;--ui-umc-warn-text: #b07800;--ui-umc-warn-bg: rgba(232, 162, 12, 0.12);--ui-umc-full: #e5484d;--ui-umc-full-text: #d63f44;--ui-umc-full-bg: rgba(229, 72, 77, 0.08);--ui-umc-c1: rgba(0, 96, 226, 0.765);--ui-umc-c2: rgba(0, 96, 226, 0.5);--ui-umc-c3: rgba(0, 96, 226, 0.3);--ui-umc-c4: rgba(0, 96, 226, 0.16);--ui-umc-c5: rgba(0, 0, 0, 0.14);--ui-umc-dark: rgba(0, 0, 0, 0.88);--ui-umc-on-dark: #fcfcfc;--ui-umc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-umc-tip-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 8px 20px -8px rgba(0, 0, 0, 0.14);--ui-umc-focus: rgba(0, 96, 226, 0.35);--ui-umc-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;container-type: inline-size;position: relative;display: grid;width: 100%;max-width: 460px;border-radius: 10px;background: var(--ui-umc-card);box-shadow: var(--ui-umc-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-umc-ink);text-align: left;-webkit-font-smoothing: antialiased}.ui-umc *, .ui-umc *::before, .ui-umc *::after{box-sizing: border-box}:where(.ui-umc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-umc) :is(h3, p, ul){margin: 0;padding: 0}:where(.ui-umc) ul{list-style: none}.ui-umc :is(button, [tabindex="0"]):focus-visible{outline: 2px solid var(--ui-umc-focus);outline-offset: 1px}.ui-umc b{font-weight: 500;color: var(--ui-umc-ink)}.ui-umc__muted{color: var(--ui-umc-muted)}.ui-umc__card{overflow: hidden;border-radius: 10px 10px 0 0;transition: height 360ms var(--ui-umc-ease)}.ui-umc__inner{display: flow-root;padding: 16px 16px 16px}.ui-umc__head{display: flex;align-items: flex-start;justify-content: space-between;gap: 12px}.ui-umc__heading{min-width: 0}.ui-umc__title{overflow: hidden;font-size: 15px;font-weight: 500;line-height: 24px;color: var(--ui-umc-strong);white-space: nowrap;text-overflow: ellipsis}.ui-umc__sub{overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-umc-muted);white-space: nowrap;text-overflow: ellipsis}.ui-umc__sep{margin: 0 6px;color: var(--ui-umc-faint)}.ui-umc__switch{position: relative;display: grid;grid-auto-columns: auto;grid-auto-flow: column;gap: 8px;flex: none}.ui-umc__pill{position: absolute;top: 0;left: 0;border-radius: 6px;background: var(--ui-umc-fill);opacity: 0;pointer-events: none;transition: transform 320ms var(--ui-umc-ease), width 320ms var(--ui-umc-ease), height 320ms var(--ui-umc-ease), opacity 200ms ease}.ui-umc__option{position: relative;z-index: 1;min-width: 0;height: 28px;padding: 4px 10px;overflow: hidden;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-umc-line);font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-umc-text);white-space: nowrap;text-overflow: ellipsis;transition: color 200ms ease, background-color 120ms ease}.ui-umc__option[aria-checked="true"]{color: var(--ui-umc-ink)}@media (hover: hover){.ui-umc__option[aria-checked="false"]:hover{background: var(--ui-umc-wash);color: var(--ui-umc-ink)}}.ui-umc__figure{display: flex;align-items: center;justify-content: space-between;gap: 12px;margin-top: 14px}.ui-umc__amount{display: flex;flex-wrap: wrap;align-items: baseline;column-gap: 8px;min-width: 0}.ui-umc__big{font-size: 24px;font-weight: 500;line-height: 32px;letter-spacing: -0.24px;color: var(--ui-umc-strong);font-variant-numeric: tabular-nums}.ui-umc__of{font-size: 12px;line-height: 16px;color: var(--ui-umc-muted);font-variant-numeric: tabular-nums;white-space: nowrap}.ui-umc__pct{display: inline-flex;flex: none;align-items: center;gap: 5px;height: 20px;padding: 0 6px;border-radius: 5px;background: var(--ui-umc-fill);font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-umc-text);font-variant-numeric: tabular-nums;transition: color 260ms ease, background-color 260ms ease}.ui-umc__pct[data-state="warn"]{background: var(--ui-umc-warn-bg);color: var(--ui-umc-warn-text)}.ui-umc__pct[data-state="limit"]{background: var(--ui-umc-full-bg);color: var(--ui-umc-full-text)}.ui-umc__dot{display: inline-block;flex: none;width: 6px;height: 6px;border-radius: 50%;background: var(--ui-umc-warn);animation: ui-umc-pop 420ms cubic-bezier(0.34, 1.56, 0.64, 1) both}.ui-umc[data-state="limit"] :is(.ui-umc__pct, .ui-umc__status) .ui-umc__dot, .ui-umc__limit[data-state="limit"] .ui-umc__dot{background: var(--ui-umc-full)}.ui-umc__bar{position: relative;margin-top: 10px;padding: 4px 0;border-radius: 4px;cursor: default}.ui-umc__track{display: flex;height: 8px;overflow: hidden;border-radius: 4px;background: var(--ui-umc-track)}.ui-umc__seg{position: relative;flex: none;height: 100%;overflow: hidden;transition: opacity 200ms ease}.ui-umc__seg::after{content: "";position: absolute;top: 0;right: 0;bottom: 0;width: 2px;background: var(--ui-umc-card)}.ui-umc__bar[data-active] .ui-umc__seg:not([data-active]){opacity: 0.3}.ui-umc__tip{position: absolute;bottom: calc(100% + 6px);z-index: 2;display: grid;gap: 2px;padding: 6px 10px 7px;border-radius: 8px;background: var(--ui-umc-card);box-shadow: var(--ui-umc-tip-shadow);white-space: nowrap;pointer-events: none;opacity: 0;transform: translate(var(--ui-umc-tip-x), 4px) scale(0.97);transition: left 260ms var(--ui-umc-ease), transform 260ms var(--ui-umc-ease), opacity 160ms ease}.ui-umc__tip[data-open]{opacity: 1;transform: translate(var(--ui-umc-tip-x), 0)}.ui-umc__tip-label{display: flex;align-items: center;gap: 6px;font-size: 12px;line-height: 16px;color: var(--ui-umc-muted)}.ui-umc__tip-value{font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-umc-ink);font-variant-numeric: tabular-nums}.ui-umc__tip-value .ui-umc__muted{font-weight: 400}.ui-umc__legend{display: grid;margin-top: 10px}.ui-umc__row{display: grid;grid-template-rows: 1fr;animation: ui-umc-grow 380ms var(--ui-umc-ease) both;transition: grid-template-rows 320ms var(--ui-umc-ease) 80ms, opacity 200ms ease}.ui-umc__row[data-leaving]{grid-template-rows: 0fr;opacity: 0;pointer-events: none}.ui-umc__item{display: flex;align-items: center;gap: 10px;min-height: 0;height: 32px;margin: 0 -8px;padding: 0 8px;overflow: hidden;border-radius: 6px;transition: background-color 120ms ease-out, opacity 200ms ease}.ui-umc__row[data-leaving] .ui-umc__item{background: none}.ui-umc__item[data-active]{background: var(--ui-umc-wash)}.ui-umc__legend[data-active] .ui-umc__item:not([data-active]){opacity: 0.45}.ui-umc__swatch{flex: none;width: 8px;height: 8px;border-radius: 2px}.ui-umc__label{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-umc-ink)}.ui-umc__value{color: var(--ui-umc-ink);font-weight: 500;font-variant-numeric: tabular-nums}.ui-umc__share{width: 40px;font-size: 12px;line-height: 16px;text-align: right;color: var(--ui-umc-muted);font-variant-numeric: tabular-nums}.ui-umc__daily{margin-top: 14px}.ui-umc__daily-head{display: flex;align-items: center;justify-content: space-between;gap: 12px;font-size: 12px;line-height: 16px;color: var(--ui-umc-muted);white-space: nowrap}.ui-umc__daily-head > :first-child{font-size: 10px;font-weight: 500;line-height: 16px;letter-spacing: 0.5px;text-transform: uppercase}.ui-umc__daily-read{font-variant-numeric: tabular-nums;animation: ui-umc-in 220ms var(--ui-umc-ease) both}.ui-umc__spark{display: flex;align-items: stretch;gap: 2px;height: 32px;margin-top: 8px;border-radius: 4px;cursor: default}.ui-umc__spark[data-few]{gap: 5px}.ui-umc__day{display: flex;flex: 1 1 0;align-items: flex-end;min-width: 0}.ui-umc__day > span{width: 100%;border-radius: 2px;background: var(--ui-umc-spark);transform-origin: bottom;transition: background-color 160ms ease, opacity 160ms ease}.ui-umc__spark[data-regrow] .ui-umc__day > span{animation: ui-umc-rise 520ms var(--ui-umc-ease) both;animation-delay: calc(var(--i) * 18ms)}.ui-umc__day[data-future] > span{height: 2px;background: var(--ui-umc-track)}.ui-umc__spark[data-hover] .ui-umc__day:not([data-active]) > span{opacity: 0.6}.ui-umc__day[data-active] > span{background: var(--ui-umc-accent)}.ui-umc__limits{display: grid;grid-template-columns: repeat(var(--n, 3), minmax(0, 1fr));gap: 12px 18px;margin-top: 16px;padding-top: 14px;border-top: 0.5px solid var(--ui-umc-line)}.ui-umc__limit{display: grid;grid-template-columns: minmax(0, 1fr);align-content: start;min-width: 0}.ui-umc__limit-label{display: flex;align-items: center;gap: 6px;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-umc-muted);white-space: nowrap}.ui-umc__limit-value{overflow: hidden;color: var(--ui-umc-ink);font-weight: 500;font-variant-numeric: tabular-nums;white-space: nowrap;text-overflow: ellipsis}.ui-umc__limit-value .ui-umc__muted{font-weight: 400}.ui-umc__thin{position: relative;display: block;height: 4px;margin-top: 6px;overflow: hidden;border-radius: 2px;background: var(--ui-umc-track)}.ui-umc__thin > span{position: absolute;top: 0;bottom: 0;left: 0;border-radius: inherit;background: var(--ui-umc-accent);transition: background-color 260ms ease}.ui-umc__limit[data-state="warn"] .ui-umc__thin > span{background: var(--ui-umc-warn)}.ui-umc__limit[data-state="limit"] .ui-umc__thin > span{background: var(--ui-umc-full)}.ui-umc__thin[data-unlimited]{background: repeating-linear-gradient(-45deg, var(--ui-umc-track) 0 3px, transparent 3px 6px)}.ui-umc__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 44px;padding: 0 8px 0 16px;border-top: 0.5px solid var(--ui-umc-line);font-size: 12px;line-height: 16px;color: var(--ui-umc-muted)}.ui-umc__status{display: flex;align-items: center;gap: 6px;min-width: 0;overflow: hidden;white-space: nowrap;font-variant-numeric: tabular-nums;animation: ui-umc-in 260ms var(--ui-umc-ease) both}.ui-umc__status > :last-child{overflow: hidden;text-overflow: ellipsis}.ui-umc__action{display: inline-flex;flex: none;justify-content: center;height: 28px;overflow: hidden;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-umc-strong);background: var(--ui-umc-card);box-shadow: var(--ui-umc-shadow);transition: background-color 280ms ease, color 280ms ease, box-shadow 280ms ease, width 320ms var(--ui-umc-ease), transform 140ms ease}.ui-umc__action:hover{background: #fafafa}.ui-umc__action:active{transform: scale(0.97)}.ui-umc__action[data-strong]{background: var(--ui-umc-dark);color: var(--ui-umc-on-dark);box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);animation: ui-umc-nudge 520ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-umc__action[data-strong]:hover{background: var(--ui-umc-dark);opacity: 0.88}.ui-umc__action-inner{display: inline-flex;align-items: center;flex: none;height: 100%;padding: 0 10px;white-space: nowrap}.ui-umc__action-text{animation: ui-umc-in 260ms var(--ui-umc-ease) both}.ui-umc__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-umc-in{from{opacity: 0;transform: translateY(3px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-umc-grow{from{grid-template-rows: 0fr;opacity: 0}to{grid-template-rows: 1fr;opacity: 1}}@keyframes ui-umc-rise{from{transform: scaleY(0)}to{transform: none}}@keyframes ui-umc-pop{0%{transform: scale(0.3)}60%{transform: scale(1.25)}100%{transform: scale(1)}}@keyframes ui-umc-nudge{0%{transform: scale(0.94)}60%{transform: scale(1.04)}100%{transform: scale(1)}}@container (max-width: 400px){.ui-umc__inner{padding: 14px 14px 14px}.ui-umc__foot{padding: 0 8px 0 14px}.ui-umc__head{flex-direction: column;align-items: stretch;gap: 12px}.ui-umc__switch{grid-auto-columns: minmax(0, auto);gap: 4px}.ui-umc__option{padding: 4px 8px}.ui-umc__limits{grid-template-columns: minmax(0, 1fr);gap: 12px}.ui-umc__limit{grid-template-columns: minmax(0, 1fr) auto;column-gap: 12px}.ui-umc__limit-value{font-size: 12px;line-height: 16px}.ui-umc__thin{grid-column: 1 / -1;margin-top: 6px}}@container (max-width: 300px){.ui-umc__option{padding: 4px 6px}.ui-umc__share{width: 34px}}@media (hover: none) and (pointer: coarse){.ui-umc__option{height: 34px;padding: 7px 10px}.ui-umc__item{height: 36px}.ui-umc__action{height: 36px}.ui-umc__foot{min-height: 52px}.ui-umc__bar{padding: 10px 0;margin-top: 4px}}@media (prefers-reduced-motion: reduce){.ui-umc *, .ui-umc *::before, .ui-umc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-umc{--ui-umc-card: #1c1c1e;--ui-umc-strong: #ffffff;--ui-umc-ink: rgba(255, 255, 255, 0.9);--ui-umc-text: rgba(255, 255, 255, 0.62);--ui-umc-muted: rgba(255, 255, 255, 0.46);--ui-umc-faint: rgba(255, 255, 255, 0.3);--ui-umc-line: rgba(255, 255, 255, 0.08);--ui-umc-wash: rgba(255, 255, 255, 0.04);--ui-umc-fill: rgba(255, 255, 255, 0.08);--ui-umc-track: rgba(255, 255, 255, 0.08);--ui-umc-spark: rgba(255, 255, 255, 0.16);--ui-umc-accent: #4d8dff;--ui-umc-warn: #f0b43a;--ui-umc-warn-text: #f0b43a;--ui-umc-warn-bg: rgba(232, 162, 12, 0.16);--ui-umc-full: #ff6b70;--ui-umc-full-text: #ff8a8e;--ui-umc-full-bg: rgba(229, 72, 77, 0.14);--ui-umc-c1: #4d8dff;--ui-umc-c2: rgba(77, 141, 255, 0.62);--ui-umc-c3: rgba(77, 141, 255, 0.4);--ui-umc-c4: rgba(77, 141, 255, 0.22);--ui-umc-c5: rgba(255, 255, 255, 0.16);--ui-umc-dark: rgba(255, 255, 255, 0.9);--ui-umc-on-dark: #111113;--ui-umc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-umc-tip-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 8px 20px -8px rgba(0, 0, 0, 0.6);--ui-umc-focus: rgba(77, 141, 255, 0.5)}:where(.dark, [data-theme="dark"]) .ui-umc__action:hover{background: #232326}:where(.dark, [data-theme="dark"]) .ui-umc__tip{background: #2a2a2d}`;
var m = [{ id: `month`, label: `This month` }, { id: `last`, label: `Last month` }, { id: `7d`, label: `7 days` }];
var ne = new Intl.DateTimeFormat(`en-US`, { month: `short`, day: `numeric` });
var h = (e, t) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
function g(e, t, n4, r2, i2 = t) {
  let a2 = r2, o2 = () => ((a2 = a2 * 16807 % 2147483647) - 1) / 2147483646, s2 = Array.from({ length: t }, (n5, r3) => {
    let i3 = h(e, r3).getDay();
    return (i3 === 0 || i3 === 6 ? 0.45 : 1) * (0.7 + o2() * 0.6) * (1 + r3 / t / 3);
  }), c2 = s2.reduce((e2, t2) => e2 + t2, 0), l2 = s2.map((e2) => Math.round(e2 / c2 * n4));
  return l2[l2.length - 1] += n4 - l2.reduce((e2, t2) => e2 + t2, 0), Array.from({ length: i2 }, (n5, r3) => ({ label: ne.format(h(e, r3)), value: r3 < t ? l2[r3] : null }));
}
var _ = { month: { used: [{ label: `Chat`, value: 3980 }, { label: `Search`, value: 1640 }, { label: `Image`, value: 1120 }, { label: `API`, value: 680 }], limits: [{ label: `Seats`, used: 8, total: 10 }, { label: `Storage`, used: 3.2, total: 5, unit: `GB` }, { label: `Projects`, used: 12, total: null }], days: (e) => g(h(e, -21), 22, 7420, 11, 30) }, last: { used: [{ label: `Chat`, value: 5210 }, { label: `Search`, value: 2140 }, { label: `Image`, value: 1690 }, { label: `API`, value: 960 }], limits: [{ label: `Seats`, used: 10, total: 10 }, { label: `Storage`, used: 2.9, total: 5, unit: `GB` }, { label: `Projects`, used: 11, total: null }], days: (e) => g(h(e, -51), 30, 1e4, 29) }, "7d": { used: [{ label: `Chat`, value: 1260 }, { label: `Search`, value: 540 }, { label: `API`, value: 340 }], limits: [{ label: `Seats`, used: 8, total: 10 }, { label: `Storage`, used: 3.2, total: 5, unit: `GB` }, { label: `Projects`, used: 12, total: null }], days: (e) => g(h(e, -6), 7, 2140, 5) } };
function v() {
  let [e, t] = (0, n3.useState)(`month`), i2 = (0, n3.useRef)(false), a2 = (0, n3.useMemo)(() => {
    let e2 = /* @__PURE__ */ new Date();
    return new Date(e2.getFullYear(), e2.getMonth(), e2.getDate());
  }, []), o2 = (0, n3.useMemo)(() => _[e].days(a2), [e, a2]);
  return (0, n3.useEffect)(() => {
    let e2 = [`last`, `7d`, `month`].map((e3, n4) => window.setTimeout(() => !i2.current && t(e3), 3600 + n4 * 3200));
    return () => e2.forEach(clearTimeout);
  }, []), (0, r.jsx)(`div`, { className: `usage-demo`, onPointerDown: () => i2.current = true, onKeyDown: () => i2.current = true, children: (0, r.jsx)(p, { title: `Acme AI`, plan: `Pro plan`, total: 1e4, used: _[e].used, limits: _[e].limits, daily: o2, periods: m, period: e, onPeriodChange: t, resetAt: h(a2, 9), onUpgrade: () => {
  } }) });
}

export {
  v
};
