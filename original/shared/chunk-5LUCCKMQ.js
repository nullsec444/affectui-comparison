import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo.clean-BmiiHyGl.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e) => new Intl.NumberFormat(`en-US`, { maximumFractionDigits: 0 }).format(e);
var a = [`var(--ui-cbc-c1)`, `var(--ui-cbc-c2)`, `var(--ui-cbc-c3)`, `var(--ui-cbc-c4)`, `var(--ui-cbc-c5)`];
var o = `cubic-bezier(0.22, 1, 0.36, 1)`;
var s = (e) => 1 - (1 - e) ** 4;
var c = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
var l = (e) => e.id ?? e.label;
function u(e, t, r2) {
  let [i2, a2] = (0, n3.useState)(() => Object.fromEntries(Object.keys(e).map((e2) => [e2, 0]))), o2 = (0, n3.useRef)(i2), l2 = (0, n3.useRef)(false), u2 = JSON.stringify(e);
  return (0, n3.useEffect)(() => {
    let e2 = JSON.parse(u2), n4 = { ...o2.current };
    if (c()) {
      o2.current = e2, a2(e2);
      return;
    }
    let i3 = l2.current ? r2 : t;
    l2.current = true;
    let d2 = performance.now(), f2 = 0, p2 = (t2) => {
      let r3 = Math.min(1, (t2 - d2) / i3), c2 = s(r3), l3 = {};
      for (let t3 in e2) l3[t3] = (n4[t3] ?? 0) + (e2[t3] - (n4[t3] ?? 0)) * c2;
      o2.current = l3, a2(l3), r3 < 1 && (f2 = requestAnimationFrame(p2));
    };
    return f2 = requestAnimationFrame(p2), () => cancelAnimationFrame(f2);
  }, [u2]), i2;
}
function d({ title: e = `Breakdown`, items: t, periods: s2, period: d2, defaultPeriod: p2, onPeriodChange: m2, delta: h2, format: g2 = i, totalLabel: _ = `Total`, footer: v, className: y }) {
  let b = (0, n3.useId)(), [x, S] = (0, n3.useState)(p2 ?? s2?.[0]?.id), C = d2 ?? x, [w, T] = (0, n3.useState)(null), E = (0, n3.useRef)([]);
  for (let e2 of t) {
    let t2 = l(e2), n4 = E.current.find((e3) => e3.key === t2);
    n4 ? (n4.label = e2.label, e2.color && (n4.color = e2.color)) : E.current.push({ key: t2, label: e2.label, color: e2.color ?? a[E.current.length] ?? `var(--ui-cbc-c5)` });
  }
  let D = new Map(t.map((e2) => [l(e2), Math.max(0, e2.value)])), O = [...D.values()].reduce((e2, t2) => e2 + t2, 0), k = w !== null && D.has(w) ? w : null, A = { "#total": O, "#figure": k ? D.get(k) ?? 0 : O };
  for (let e2 of E.current) A[e2.key] = D.get(e2.key) ?? 0;
  let j = u(A, 900, 620), M = Math.max(j[`#total`] ?? 0, 1e-4), N = E.current.map((e2) => ({ ...e2, value: D.get(e2.key) ?? 0, leaving: !D.has(e2.key) })).filter((e2) => !e2.leaving || (j[e2.key] ?? 0) > 0.5).sort((e2, t2) => Number(e2.leaving) - Number(t2.leaving) || t2.value - e2.value), P = N.map((e2) => e2.key).join(`|`), F = N.find((e2) => !e2.leaving), I = (0, n3.useRef)(/* @__PURE__ */ new Map()), L = (0, n3.useRef)(/* @__PURE__ */ new Map());
  (0, n3.useLayoutEffect)(() => {
    let e2 = /* @__PURE__ */ new Map();
    I.current.forEach((t2, n4) => e2.set(n4, t2.offsetTop)), c() || e2.forEach((e3, t2) => {
      let n4 = L.current.get(t2), r2 = I.current.get(t2);
      r2 && n4 !== void 0 && n4 !== e3 && r2.animate([{ transform: `translateY(${n4 - e3}px)` }, { transform: `none` }], { duration: 560, easing: o });
    }), L.current = e2;
  }, [P]);
  let R = (0, n3.useRef)(null), z = (0, n3.useRef)(null), B = (0, n3.useRef)(false);
  (0, n3.useLayoutEffect)(() => {
    let e2 = R.current, t2 = z.current, n4 = e2?.querySelector(`[aria-checked="true"]`);
    if (!e2 || !t2 || !n4) return;
    let r2 = () => {
      B.current || (t2.style.transition = `none`), t2.style.width = `${n4.offsetWidth}px`, t2.style.height = `${n4.offsetHeight}px`, t2.style.transform = `translate(${n4.offsetLeft}px, ${n4.offsetTop}px)`, t2.style.opacity = `1`, B.current ||= (t2.offsetWidth, t2.style.transition = ``, true);
    };
    r2();
    let i2 = new ResizeObserver(r2);
    return i2.observe(e2), () => i2.disconnect();
  }, [C, s2?.length]);
  let V = (e2) => {
    d2 === void 0 && S(e2), m2?.(e2);
  }, H = (e2) => {
    if (!s2?.length) return;
    let t2 = s2.findIndex((e3) => e3.id === C), n4 = e2.key === `ArrowRight` || e2.key === `ArrowDown` ? t2 + 1 : e2.key === `ArrowLeft` || e2.key === `ArrowUp` ? t2 - 1 : e2.key === `Home` ? 0 : e2.key === `End` ? s2.length - 1 : null;
    if (n4 === null) return;
    e2.preventDefault();
    let r2 = s2[(n4 + s2.length) % s2.length];
    V(r2.id), requestAnimationFrame(() => R.current?.querySelector(`[aria-checked="true"]`)?.focus());
  }, U = k ? N.find((e2) => e2.key === k) : void 0, W = (e2) => (j[e2] ?? 0) / M * 100, G = (h2 ?? 0) >= 0;
  return (0, r.jsxs)(`div`, { className: [`ui-cbc`, y].filter(Boolean).join(` `), role: `group`, "aria-labelledby": `${b}-title`, children: [(0, r.jsx)(`style`, { href: `ui-compact-breakdown-clean`, precedence: `default`, children: f }), (0, r.jsxs)(`div`, { className: `ui-cbc__body`, children: [(0, r.jsxs)(`header`, { className: `ui-cbc__head`, children: [(0, r.jsx)(`h3`, { id: `${b}-title`, className: `ui-cbc__title`, children: e }), s2 && s2.length > 1 && (0, r.jsxs)(`div`, { ref: R, className: `ui-cbc__switch`, role: `radiogroup`, "aria-label": `Period`, onKeyDown: H, children: [(0, r.jsx)(`span`, { ref: z, className: `ui-cbc__pill`, "aria-hidden": `true` }), s2.map((e2) => (0, r.jsx)(`button`, { type: `button`, role: `radio`, "aria-checked": e2.id === C, tabIndex: e2.id === C ? 0 : -1, className: `ui-cbc__option`, onClick: () => V(e2.id), children: e2.label }, e2.id))] })] }), (0, r.jsxs)(`div`, { className: `ui-cbc__figure`, children: [(0, r.jsx)(`p`, { className: `ui-cbc__big`, "aria-hidden": `true`, children: g2(j[`#figure`] ?? 0) }), h2 !== void 0 && !U && (0, r.jsxs)(`span`, { className: `ui-cbc__delta`, "data-up": G || void 0, children: [(0, r.jsx)(`svg`, { viewBox: `0 0 12 12`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: G ? `M6 9.5v-7M2.8 5.6 6 2.4l3.2 3.2` : `M6 2.5v7M2.8 6.4 6 9.6l3.2-3.2` }) }), Math.abs(h2).toLocaleString(`en-US`, { maximumFractionDigits: 1 }), `%`] }, `${C}-${h2}`)] }), (0, r.jsx)(`p`, { className: `ui-cbc__caption`, "aria-hidden": `true`, children: (0, r.jsx)(`span`, { className: `ui-cbc__caption-in`, children: U ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`i`, { className: `ui-cbc__swatch`, style: { background: U.color } }), U.label, ` \xB7 `, W(U.key).toFixed(0), `%`] }) : _ }, U?.key ?? `#total`) }), (0, r.jsxs)(`p`, { className: `ui-cbc__sr`, children: [_, `: `, g2(O), h2 === void 0 ? `` : `, ${G ? `up` : `down`} ${Math.abs(h2)}% against the previous period`] }), (0, r.jsx)(`div`, { className: `ui-cbc__bar`, "data-active": k ? `` : void 0, "aria-hidden": `true`, onPointerLeave: () => T(null), children: E.current.map((e2) => {
    let t2 = W(e2.key);
    return t2 > 0.05 ? (0, r.jsx)(`span`, { className: `ui-cbc__seg`, "data-active": e2.key === k || void 0, style: { flexGrow: t2, background: e2.color }, onPointerEnter: () => D.has(e2.key) && T(e2.key) }, e2.key) : null;
  }) }), (0, r.jsx)(`ul`, { className: `ui-cbc__list`, "data-active": k ? `` : void 0, onPointerLeave: () => T(null), children: N.map((e2) => (0, r.jsx)(`li`, { ref: (t2) => {
    t2 ? I.current.set(e2.key, t2) : I.current.delete(e2.key);
  }, className: `ui-cbc__row`, "data-leaving": e2.leaving || void 0, children: (0, r.jsxs)(`div`, { className: `ui-cbc__item`, tabIndex: e2.leaving ? -1 : 0, "data-active": e2.key === k || void 0, onPointerEnter: () => !e2.leaving && T(e2.key), onFocus: () => !e2.leaving && T(e2.key), onBlur: () => T(null), children: [(0, r.jsx)(`i`, { className: `ui-cbc__swatch`, style: { background: e2.color } }), (0, r.jsx)(`span`, { className: `ui-cbc__label`, children: e2.label }), (0, r.jsx)(`span`, { className: `ui-cbc__value`, children: g2(j[e2.key] ?? 0) }), (0, r.jsxs)(`span`, { className: `ui-cbc__share`, children: [W(e2.key).toFixed(0), `%`] })] }) }, e2.key)) })] }), v !== null && (0, r.jsx)(`div`, { className: `ui-cbc__foot`, children: v ?? (F && (0, r.jsxs)(`span`, { className: `ui-cbc__foot-in`, children: [`Largest: `, (0, r.jsx)(`b`, { children: F.label })] }, F.key)) })] });
}
var f = `.ui-cbc{--ui-cbc-card: #ffffff;--ui-cbc-ink: rgba(0, 0, 0, 0.88);--ui-cbc-strong: #000000;--ui-cbc-text: rgba(0, 0, 0, 0.61);--ui-cbc-muted: rgba(0, 0, 0, 0.45);--ui-cbc-faint: rgba(0, 0, 0, 0.27);--ui-cbc-line: rgba(0, 0, 0, 0.06);--ui-cbc-wash: rgba(0, 0, 0, 0.03);--ui-cbc-fill: rgba(0, 0, 0, 0.06);--ui-cbc-up: #1a9a52;--ui-cbc-up-bg: rgba(26, 154, 82, 0.08);--ui-cbc-down: #e5484d;--ui-cbc-down-bg: rgba(229, 72, 77, 0.08);--ui-cbc-c1: rgba(0, 96, 226, 0.765);--ui-cbc-c2: rgba(0, 96, 226, 0.5);--ui-cbc-c3: rgba(0, 96, 226, 0.32);--ui-cbc-c4: rgba(0, 96, 226, 0.18);--ui-cbc-c5: rgba(0, 0, 0, 0.14);--ui-cbc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-cbc-focus: rgba(0, 96, 226, 0.35);--ui-cbc-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-cbc-snap: cubic-bezier(0.25, 0.9, 0.3, 1);box-sizing: border-box;container-type: inline-size;display: grid;width: 100%;max-width: 360px;overflow: hidden;border-radius: 10px;background: var(--ui-cbc-card);box-shadow: var(--ui-cbc-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-cbc-ink);-webkit-font-smoothing: antialiased}.ui-cbc *, .ui-cbc *::before, .ui-cbc *::after{box-sizing: border-box}:where(.ui-cbc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-cbc) :is(h3, p, ul){margin: 0;padding: 0}:where(.ui-cbc) ul{list-style: none}:where(.ui-cbc) svg{display: block;flex: none}.ui-cbc :is(button, [tabindex="0"]):focus-visible{outline: 2px solid var(--ui-cbc-focus);outline-offset: 1px}.ui-cbc b{font-weight: 500;color: var(--ui-cbc-ink)}.ui-cbc__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap}.ui-cbc__body{padding: 16px 16px 10px}.ui-cbc__head{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 28px}.ui-cbc__title{overflow: hidden;font-size: 15px;font-weight: 500;line-height: 24px;color: var(--ui-cbc-strong);white-space: nowrap;text-overflow: ellipsis}.ui-cbc__switch{position: relative;display: grid;grid-auto-columns: auto;grid-auto-flow: column;gap: 4px;flex: none}.ui-cbc__pill{position: absolute;top: 0;left: 0;border-radius: 6px;background: var(--ui-cbc-fill);opacity: 0;pointer-events: none;transition: transform 200ms var(--ui-cbc-snap), width 200ms var(--ui-cbc-snap)}.ui-cbc__option{position: relative;z-index: 1;height: 28px;padding: 4px 10px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-cbc-line);font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-cbc-text);white-space: nowrap;transition: color 90ms ease, background-color 90ms ease}.ui-cbc__option[aria-checked="true"]{color: var(--ui-cbc-ink)}@media (hover: hover){.ui-cbc__option[aria-checked="false"]:hover{background: var(--ui-cbc-wash)}}.ui-cbc__figure{display: flex;align-items: center;gap: 8px;margin-top: 14px}.ui-cbc__big{font-size: 24px;font-weight: 500;line-height: 32px;letter-spacing: -0.02em;color: var(--ui-cbc-strong);font-variant-numeric: tabular-nums}.ui-cbc__delta{display: inline-flex;align-items: center;gap: 2px;height: 20px;padding: 0 6px 0 4px;border-radius: 5px;background: var(--ui-cbc-down-bg);color: var(--ui-cbc-down);font-size: 12px;font-weight: 500;line-height: 16px;font-variant-numeric: tabular-nums;animation: ui-cbc-pop 380ms var(--ui-cbc-ease) both}.ui-cbc__delta[data-up]{background: var(--ui-cbc-up-bg);color: var(--ui-cbc-up)}.ui-cbc__delta svg{width: 12px;height: 12px;fill: none;stroke: currentColor;stroke-width: 1.3;stroke-linecap: round;stroke-linejoin: round}.ui-cbc__caption{height: 16px;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-cbc-muted);font-variant-numeric: tabular-nums}.ui-cbc__caption-in{display: inline-flex;align-items: center;gap: 6px;animation: ui-cbc-in 260ms var(--ui-cbc-ease) both}.ui-cbc__bar{display: flex;gap: 2px;height: 6px;margin-top: 16px;padding: 0;border-radius: 3px}.ui-cbc__seg{flex: 0 1 0;height: 100%;min-width: 2px;border-radius: 1.5px;transition: opacity 160ms ease, transform 200ms var(--ui-cbc-ease)}.ui-cbc__seg:first-child{border-radius: 3px 1.5px 1.5px 3px}.ui-cbc__seg:last-child{border-radius: 1.5px 3px 3px 1.5px}.ui-cbc__bar[data-active] .ui-cbc__seg:not([data-active]){opacity: 0.3}.ui-cbc__seg[data-active]{transform: scaleY(1.5)}.ui-cbc__list{position: relative;display: grid;margin-top: 10px}.ui-cbc__row{display: grid;grid-template-rows: 1fr;transition: grid-template-rows 320ms var(--ui-cbc-ease), opacity 200ms ease}.ui-cbc__row[data-leaving]{grid-template-rows: 0fr;opacity: 0;pointer-events: none}.ui-cbc__item{display: flex;align-items: center;gap: 10px;min-height: 0;height: 32px;margin: 0 -8px;padding: 0 8px;overflow: hidden;border-radius: 6px;cursor: default;transition: background-color 90ms ease-out, opacity 160ms ease}.ui-cbc__item[data-active]{background: var(--ui-cbc-wash)}.ui-cbc__list[data-active] .ui-cbc__item:not([data-active]){opacity: 0.45}.ui-cbc__swatch{flex: none;width: 8px;height: 8px;border-radius: 2px}.ui-cbc__label{flex: 1;min-width: 0;overflow: hidden;color: var(--ui-cbc-ink);white-space: nowrap;text-overflow: ellipsis}.ui-cbc__value{color: var(--ui-cbc-ink);font-weight: 500;font-variant-numeric: tabular-nums}.ui-cbc__share{width: 34px;font-size: 12px;line-height: 16px;text-align: right;color: var(--ui-cbc-muted);font-variant-numeric: tabular-nums}.ui-cbc__foot{display: flex;align-items: center;min-height: 40px;padding: 0 16px;overflow: hidden;border-top: 0.5px solid var(--ui-cbc-line);font-size: 12px;line-height: 16px;color: var(--ui-cbc-muted);white-space: nowrap}.ui-cbc__foot-in{overflow: hidden;text-overflow: ellipsis;animation: ui-cbc-in 320ms var(--ui-cbc-ease) both}@keyframes ui-cbc-in{from{opacity: 0;transform: translateY(4px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-cbc-pop{from{opacity: 0;transform: scale(0.85)}to{opacity: 1;transform: none}}@container (max-width: 320px){.ui-cbc__body{padding: 14px 14px 8px}.ui-cbc__foot{padding: 0 14px}.ui-cbc__switch{gap: 2px}.ui-cbc__option{padding: 4px 8px}}@container (max-width: 250px){.ui-cbc__share{display: none}.ui-cbc__option{padding: 4px 6px}}@media (hover: none) and (pointer: coarse){.ui-cbc__option{height: 32px;padding: 6px 10px}.ui-cbc__item{height: 40px}.ui-cbc__foot{min-height: 44px}}@media (prefers-reduced-motion: reduce){.ui-cbc *, .ui-cbc *::before, .ui-cbc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-cbc{--ui-cbc-card: #1c1c1e;--ui-cbc-ink: rgba(255, 255, 255, 0.9);--ui-cbc-strong: #ffffff;--ui-cbc-text: rgba(255, 255, 255, 0.62);--ui-cbc-muted: rgba(255, 255, 255, 0.46);--ui-cbc-faint: rgba(255, 255, 255, 0.3);--ui-cbc-line: rgba(255, 255, 255, 0.08);--ui-cbc-wash: rgba(255, 255, 255, 0.04);--ui-cbc-fill: rgba(255, 255, 255, 0.08);--ui-cbc-up: #3ec27a;--ui-cbc-up-bg: rgba(62, 194, 122, 0.14);--ui-cbc-down: #ff6b70;--ui-cbc-down-bg: rgba(229, 72, 77, 0.14);--ui-cbc-c1: #4d8dff;--ui-cbc-c2: rgba(77, 141, 255, 0.62);--ui-cbc-c3: rgba(77, 141, 255, 0.4);--ui-cbc-c4: rgba(77, 141, 255, 0.22);--ui-cbc-c5: rgba(255, 255, 255, 0.16);--ui-cbc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-cbc-focus: rgba(77, 141, 255, 0.5)}`;
var p = [{ id: `7d`, label: `7d` }, { id: `30d`, label: `30d` }, { id: `90d`, label: `90d` }];
var m = { "7d": { delta: 12.4, items: [{ label: `Direct`, value: 4820 }, { label: `Organic search`, value: 3910 }, { label: `Referrals`, value: 2240 }, { label: `Social`, value: 1680 }, { label: `Email`, value: 940 }] }, "30d": { delta: 8.1, items: [{ label: `Organic search`, value: 18400 }, { label: `Direct`, value: 16900 }, { label: `Social`, value: 9800 }, { label: `Referrals`, value: 7300 }, { label: `Email`, value: 5200 }] }, "90d": { delta: -3.2, items: [{ label: `Organic search`, value: 51200 }, { label: `Social`, value: 38600 }, { label: `Direct`, value: 36100 }, { label: `Email`, value: 21400 }, { label: `Referrals`, value: 16900 }] } };
var h = (e) => `$${Math.round(e).toLocaleString(`en-US`)}`;
function g() {
  let [e, t] = (0, n3.useState)(`7d`), i2 = (0, n3.useRef)(false);
  (0, n3.useEffect)(() => {
    let e2 = window.setInterval(() => {
      i2.current || t((e3) => p[(p.findIndex((t2) => t2.id === e3) + 1) % p.length].id);
    }, 2800);
    return () => window.clearInterval(e2);
  }, []);
  let a2 = () => i2.current = true;
  return (0, r.jsx)(`div`, { className: `cb-demo`, onPointerEnter: a2, onPointerDownCapture: a2, onKeyDownCapture: a2, onFocusCapture: a2, children: (0, r.jsx)(d, { title: `Revenue by channel`, periods: p, period: e, onPeriodChange: t, items: m[e].items, delta: m[e].delta, format: h, totalLabel: `Total revenue` }) });
}

export {
  g
};
