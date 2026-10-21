import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-BgsJzBTE.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e) => new Intl.NumberFormat(`en-US`, { maximumFractionDigits: 0 }).format(e);
var a = [`var(--ui-cb-c1)`, `var(--ui-cb-c2)`, `var(--ui-cb-c3)`, `var(--ui-cb-c4)`, `var(--ui-cb-c5)`];
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
    n4 ? (n4.label = e2.label, e2.color && (n4.color = e2.color)) : E.current.push({ key: t2, label: e2.label, color: e2.color ?? a[E.current.length] ?? `var(--ui-cb-c5)` });
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
  return (0, r.jsxs)(`div`, { className: [`ui-cb`, y].filter(Boolean).join(` `), role: `group`, "aria-labelledby": `${b}-title`, children: [(0, r.jsx)(`style`, { href: `ui-compact-breakdown`, precedence: `default`, children: f }), (0, r.jsxs)(`div`, { className: `ui-cb__card`, children: [(0, r.jsxs)(`header`, { className: `ui-cb__head`, children: [(0, r.jsx)(`h3`, { id: `${b}-title`, className: `ui-cb__title`, children: e }), s2 && s2.length > 1 && (0, r.jsxs)(`div`, { ref: R, className: `ui-cb__switch`, role: `radiogroup`, "aria-label": `Period`, onKeyDown: H, children: [(0, r.jsx)(`span`, { ref: z, className: `ui-cb__pill`, "aria-hidden": `true` }), s2.map((e2) => (0, r.jsx)(`button`, { type: `button`, role: `radio`, "aria-checked": e2.id === C, tabIndex: e2.id === C ? 0 : -1, className: `ui-cb__option`, onClick: () => V(e2.id), children: e2.label }, e2.id))] })] }), (0, r.jsxs)(`div`, { className: `ui-cb__figure`, children: [(0, r.jsx)(`p`, { className: `ui-cb__big`, "aria-hidden": `true`, children: g2(j[`#figure`] ?? 0) }), h2 !== void 0 && !U && (0, r.jsxs)(`span`, { className: `ui-cb__delta`, "data-up": G || void 0, children: [(0, r.jsx)(`svg`, { viewBox: `0 0 12 12`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: G ? `M6 9.5v-7M2.8 5.6 6 2.4l3.2 3.2` : `M6 2.5v7M2.8 6.4 6 9.6l3.2-3.2` }) }), Math.abs(h2).toLocaleString(`en-US`, { maximumFractionDigits: 1 }), `%`] }, `${C}-${h2}`)] }), (0, r.jsx)(`p`, { className: `ui-cb__caption`, "aria-hidden": `true`, children: (0, r.jsx)(`span`, { className: `ui-cb__caption-in`, children: U ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`i`, { className: `ui-cb__swatch`, style: { background: U.color } }), U.label, ` \xB7 `, W(U.key).toFixed(0), `%`] }) : _ }, U?.key ?? `#total`) }), (0, r.jsxs)(`p`, { className: `ui-cb__sr`, children: [_, `: `, g2(O), h2 === void 0 ? `` : `, ${G ? `up` : `down`} ${Math.abs(h2)}% against the previous period`] }), (0, r.jsx)(`div`, { className: `ui-cb__bar`, "data-active": k ? `` : void 0, "aria-hidden": `true`, onPointerLeave: () => T(null), children: E.current.map((e2) => {
    let t2 = W(e2.key);
    return t2 > 0.05 ? (0, r.jsx)(`span`, { className: `ui-cb__seg`, "data-active": e2.key === k || void 0, style: { flexGrow: t2, background: e2.color }, onPointerEnter: () => D.has(e2.key) && T(e2.key) }, e2.key) : null;
  }) }), (0, r.jsx)(`ul`, { className: `ui-cb__list`, "data-active": k ? `` : void 0, onPointerLeave: () => T(null), children: N.map((e2) => (0, r.jsx)(`li`, { ref: (t2) => {
    t2 ? I.current.set(e2.key, t2) : I.current.delete(e2.key);
  }, className: `ui-cb__row`, "data-leaving": e2.leaving || void 0, children: (0, r.jsxs)(`div`, { className: `ui-cb__item`, tabIndex: e2.leaving ? -1 : 0, "data-active": e2.key === k || void 0, onPointerEnter: () => !e2.leaving && T(e2.key), onFocus: () => !e2.leaving && T(e2.key), onBlur: () => T(null), children: [(0, r.jsx)(`i`, { className: `ui-cb__swatch`, style: { background: e2.color } }), (0, r.jsx)(`span`, { className: `ui-cb__label`, children: e2.label }), (0, r.jsx)(`span`, { className: `ui-cb__value`, children: g2(j[e2.key] ?? 0) }), (0, r.jsxs)(`span`, { className: `ui-cb__share`, children: [W(e2.key).toFixed(0), `%`] })] }) }, e2.key)) })] }), v !== null && (0, r.jsx)(`div`, { className: `ui-cb__foot`, children: v ?? (F && (0, r.jsxs)(`span`, { className: `ui-cb__foot-in`, children: [`Largest: `, (0, r.jsx)(`b`, { children: F.label })] }, F.key)) })] });
}
var f = `.ui-cb{--ui-cb-tray: #f0f0f0;--ui-cb-card: #ffffff;--ui-cb-line: #ececec;--ui-cb-ink: #171717;--ui-cb-text: #404040;--ui-cb-muted: #8f8f8f;--ui-cb-well: #f4f4f5;--ui-cb-hover: #f4f4f5;--ui-cb-up: #18794e;--ui-cb-up-bg: rgba(34, 160, 90, 0.1);--ui-cb-down: #b42318;--ui-cb-down-bg: rgba(220, 60, 60, 0.08);--ui-cb-c1: #2f6bff;--ui-cb-c2: #74a0ff;--ui-cb-c3: #b4cbff;--ui-cb-c4: #a8a8ae;--ui-cb-c5: #d4d4d8;--ui-cb-focus: rgba(23, 23, 23, 0.22);--ui-cb-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;container-type: inline-size;display: grid;width: 100%;max-width: 360px;padding: 4px;border-radius: 20px;background: var(--ui-cb-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 1.45;color: var(--ui-cb-text);-webkit-font-smoothing: antialiased}.ui-cb *, .ui-cb *::before, .ui-cb *::after{box-sizing: border-box}:where(.ui-cb) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-cb) :is(h3, p, ul){margin: 0;padding: 0}:where(.ui-cb) ul{list-style: none}.ui-cb :is(button, [tabindex="0"]):focus-visible{outline: 2px solid var(--ui-cb-focus);outline-offset: 2px}.ui-cb b{font-weight: 500;color: var(--ui-cb-ink)}.ui-cb__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap}.ui-cb__card{border-radius: 16px;background: var(--ui-cb-card);box-shadow: 0 0 0 1px var(--ui-cb-line), 0 1px 2px rgba(0, 0, 0, 0.04);padding: 12px 14px 8px}.ui-cb__head{display: flex;align-items: center;justify-content: space-between;gap: 10px;min-height: 30px}.ui-cb__title{overflow: hidden;font-size: 13.5px;font-weight: 600;line-height: 20px;color: var(--ui-cb-ink);white-space: nowrap;text-overflow: ellipsis}.ui-cb__switch{position: relative;display: grid;grid-auto-columns: auto;grid-auto-flow: column;flex: none;padding: 2px;border-radius: 10px;background: var(--ui-cb-well);box-shadow: inset 0 0 0 1px var(--ui-cb-line)}.ui-cb__pill{position: absolute;top: 0;left: 0;border-radius: 8px;background: var(--ui-cb-card);box-shadow: 0 0 0 1px var(--ui-cb-line), 0 1px 2px rgba(0, 0, 0, 0.06);opacity: 0;pointer-events: none;transition: transform 420ms var(--ui-cb-ease), width 420ms var(--ui-cb-ease)}.ui-cb__option{position: relative;z-index: 1;height: 24px;padding: 0 8px;border-radius: 8px;font-size: 12px;font-weight: 500;color: var(--ui-cb-muted);white-space: nowrap;transition: color 200ms ease}.ui-cb__option:hover, .ui-cb__option[aria-checked="true"]{color: var(--ui-cb-ink)}.ui-cb__figure{display: flex;align-items: center;gap: 8px;margin-top: 12px}.ui-cb__big{font-size: 26px;font-weight: 600;line-height: 32px;letter-spacing: -0.02em;color: var(--ui-cb-ink);font-variant-numeric: tabular-nums}.ui-cb__delta{display: inline-flex;align-items: center;gap: 2px;height: 20px;padding: 0 6px 0 4px;border-radius: 999px;background: var(--ui-cb-down-bg);color: var(--ui-cb-down);font-size: 12px;font-weight: 500;font-variant-numeric: tabular-nums;animation: ui-cb-pop 380ms var(--ui-cb-ease) both}.ui-cb__delta[data-up]{background: var(--ui-cb-up-bg);color: var(--ui-cb-up)}.ui-cb__delta svg{width: 12px;height: 12px;fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round}.ui-cb__caption{height: 18px;overflow: hidden;font-size: 12.5px;line-height: 18px;color: var(--ui-cb-muted);font-variant-numeric: tabular-nums}.ui-cb__caption-in{display: inline-flex;align-items: center;gap: 6px;animation: ui-cb-in 260ms var(--ui-cb-ease) both}.ui-cb__bar{display: flex;gap: 2px;height: 8px;margin-top: 12px;padding: 0;border-radius: 4px}.ui-cb__seg{flex: 0 1 0;height: 100%;min-width: 2px;border-radius: 2.5px;transition: opacity 200ms ease, transform 260ms var(--ui-cb-ease)}.ui-cb__seg:first-child{border-radius: 4px 2.5px 2.5px 4px}.ui-cb__seg:last-child{border-radius: 2.5px 4px 4px 2.5px}.ui-cb__bar[data-active] .ui-cb__seg:not([data-active]){opacity: 0.25}.ui-cb__seg[data-active]{transform: scaleY(1.5)}.ui-cb__list{position: relative;display: grid;margin-top: 8px}.ui-cb__row{display: grid;grid-template-rows: 1fr;transition: grid-template-rows 320ms var(--ui-cb-ease), opacity 200ms ease}.ui-cb__row[data-leaving]{grid-template-rows: 0fr;opacity: 0;pointer-events: none}.ui-cb__item{display: flex;align-items: center;gap: 9px;min-height: 0;height: 30px;margin: 0 -8px;padding: 0 8px;overflow: hidden;border-radius: 8px;cursor: default;transition: background-color 160ms ease, opacity 200ms ease}.ui-cb__item[data-active]{background: var(--ui-cb-hover)}.ui-cb__list[data-active] .ui-cb__item:not([data-active]){opacity: 0.45}.ui-cb__swatch{flex: none;width: 8px;height: 8px;border-radius: 2.5px}.ui-cb__label{flex: 1;min-width: 0;overflow: hidden;color: var(--ui-cb-text);white-space: nowrap;text-overflow: ellipsis}.ui-cb__value{color: var(--ui-cb-ink);font-weight: 500;font-variant-numeric: tabular-nums}.ui-cb__share{width: 34px;text-align: right;color: var(--ui-cb-muted);font-variant-numeric: tabular-nums}.ui-cb__foot{display: flex;align-items: center;min-height: 34px;padding: 4px 10px 0;overflow: hidden;font-size: 12.5px;color: var(--ui-cb-muted);white-space: nowrap}.ui-cb__foot-in{overflow: hidden;text-overflow: ellipsis;animation: ui-cb-in 320ms var(--ui-cb-ease) both}@keyframes ui-cb-in{from{opacity: 0;transform: translateY(5px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-cb-pop{from{opacity: 0;transform: scale(0.85)}to{opacity: 1;transform: none}}@container (max-width: 250px){.ui-cb__share{display: none}.ui-cb__option{padding: 0 6px}}@media (hover: none) and (pointer: coarse){.ui-cb__option{height: 32px;padding: 0 10px}.ui-cb__item{height: 36px}}@media (prefers-reduced-motion: reduce){.ui-cb *, .ui-cb *::before, .ui-cb *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-cb{--ui-cb-tray: #111113;--ui-cb-card: #19191b;--ui-cb-line: #2a2a2e;--ui-cb-ink: #ededed;--ui-cb-text: #c8c8cc;--ui-cb-muted: #8b8b92;--ui-cb-well: #222225;--ui-cb-hover: #222225;--ui-cb-up: #6ee7a8;--ui-cb-up-bg: rgba(110, 231, 168, 0.12);--ui-cb-down: #ff8a80;--ui-cb-down-bg: rgba(255, 138, 128, 0.12);--ui-cb-c1: #5b8cff;--ui-cb-c2: #3d63c9;--ui-cb-c3: #2c4388;--ui-cb-c4: #6b6b73;--ui-cb-c5: #3d3d42;--ui-cb-focus: rgba(255, 255, 255, 0.3)}:where(.dark, [data-theme="dark"]) .ui-cb__pill{background: #2a2a2e;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06)}`;
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
