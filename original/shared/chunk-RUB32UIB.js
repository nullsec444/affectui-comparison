import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-CctwMXFR.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [`blue`, `violet`, `amber`, `green`, `red`, `gray`];
var a = /\{([A-Za-z0-9_-]+)\}/g;
var o = (e) => {
  let t = [], n4 = 0;
  for (let r2 of e.matchAll(a)) {
    r2.index > n4 && t.push({ text: e.slice(n4, r2.index) });
    let i2 = r2.index + r2[0].length, a2 = /^[.,;:!?)\]"'’…]+/.exec(e.slice(i2))?.[0] ?? ``;
    t.push({ name: r2[1], tail: a2 }), n4 = i2 + a2.length;
  }
  return n4 < e.length && t.push({ text: e.slice(n4) }), t;
};
var s = (e) => [...new Set([...e.matchAll(a)].map((e2) => e2[1]))];
var c = (e, t) => e.replace(a, (e2, n4) => t[n4]?.trim() ? t[n4] : e2);
var l = (e) => Math.max(1, Math.round(e.length / 4));
var u = (e) => {
  let t = {};
  for (let n4 of s(e.body)) t[n4] = e.variables?.[n4]?.default ?? ``;
  return t;
};
var d = (e) => 1 - (1 - e) ** 4;
var f = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function p(e, t) {
  let [r2, i2] = (0, n3.useState)(e), a2 = (0, n3.useRef)(e);
  return (0, n3.useEffect)(() => {
    let n4 = a2.current;
    if (f() || n4 === e) {
      a2.current = e, i2(e);
      return;
    }
    let r3 = performance.now(), o2 = 0, s2 = (c2) => {
      let l2 = Math.min(1, (c2 - r3) / t);
      a2.current = n4 + (e - n4) * d(l2), i2(a2.current), l2 < 1 && (o2 = requestAnimationFrame(s2));
    };
    return o2 = requestAnimationFrame(s2), () => cancelAnimationFrame(o2);
  }, [e, t]), r2;
}
function m({ id: e, tone: t, children: i2 }) {
  let a2 = (0, n3.useRef)({ id: e, tone: t, node: i2 }), [o2, s2] = (0, n3.useState)(e), [c2, l2] = (0, n3.useState)(null);
  return o2 !== e && (s2(e), l2(a2.current)), a2.current = { id: e, tone: t, node: i2 }, (0, n3.useEffect)(() => {
    if (!c2) return;
    let e2 = window.setTimeout(() => l2(null), 260);
    return () => window.clearTimeout(e2);
  }, [c2]), (0, r.jsxs)(`span`, { className: `ui-pli__swap`, children: [c2 && (0, r.jsx)(`span`, { className: `ui-pli__swap-item`, "data-out": ``, "data-tone": c2.tone, "aria-hidden": `true`, children: c2.node }, `out-${c2.id}`), (0, r.jsx)(`span`, { className: `ui-pli__swap-item`, "data-tone": t, children: i2 }, e)] });
}
var h = { stroke: `currentColor`, strokeWidth: 1.4, strokeLinecap: `round`, strokeLinejoin: `round` };
var g = () => (0, r.jsxs)(`svg`, { width: `13`, height: `13`, viewBox: `0 0 13 13`, fill: `none`, "aria-hidden": `true`, children: [(0, r.jsx)(`circle`, { cx: `5.8`, cy: `5.8`, r: `3.8`, ...h }), (0, r.jsx)(`path`, { d: `m8.6 8.6 2.4 2.4`, ...h })] });
var ee = () => (0, r.jsxs)(`svg`, { width: `12`, height: `12`, viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, children: [(0, r.jsx)(`rect`, { x: `3.8`, y: `3.8`, width: `6.4`, height: `6.4`, rx: `1.6`, ...h }), (0, r.jsx)(`path`, { d: `M8.2 3.6V3.2A1.4 1.4 0 0 0 6.8 1.8H3.2a1.4 1.4 0 0 0-1.4 1.4v3.6a1.4 1.4 0 0 0 1.4 1.4h.4`, ...h })] });
var te = () => (0, r.jsx)(`svg`, { width: `12`, height: `12`, viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `m2.6 6.3 2.2 2.2 4.6-5`, ...h, strokeWidth: 1.6 }) });
var ne = () => (0, r.jsx)(`svg`, { width: `12`, height: `12`, viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M2.5 6h7M6.5 3l3 3-3 3`, ...h }) });
function _({ template: e, tone: t, values: i2, flash: a2, idBase: c2, onChange: l2, onHint: u2, onEnter: d2, out: f2 }) {
  let p2 = o(e.body), m2 = s(e.body), h2 = m2.filter((e2) => i2[e2]?.trim()).length, g2 = (e2) => a2 && a2.name === e2 ? a2.n % 2 ? `a` : `b` : void 0;
  return (0, r.jsxs)(`div`, { className: `ui-pli__panel`, "data-out": f2 ? `` : void 0, "aria-hidden": f2 || void 0, inert: f2, children: [(0, r.jsxs)(`div`, { className: `ui-pli__panel-head`, children: [(0, r.jsx)(`span`, { className: `ui-pli__panel-title`, children: e.title }), e.category && (0, r.jsx)(`span`, { className: `ui-pli__tag`, "data-tone": t, children: e.category }), m2.length > 0 && (0, r.jsxs)(`span`, { className: `ui-pli__count`, children: [(0, r.jsx)(`span`, { className: `ui-pli__bars`, "aria-hidden": `true`, children: m2.map((e2) => (0, r.jsx)(`span`, { className: `ui-pli__bar`, "data-on": i2[e2]?.trim() ? `` : void 0 }, e2)) }), h2, ` of `, m2.length, ` filled`] })] }), (0, r.jsx)(`p`, { className: `ui-pli__body`, children: p2.map((t2, a3) => `text` in t2 ? (0, r.jsx)(n3.Fragment, { children: t2.text }, a3) : (0, r.jsxs)(`span`, { className: `ui-pli__glue`, children: [(0, r.jsxs)(`span`, { className: `ui-pli__token`, "data-filled": i2[t2.name]?.trim() ? `` : void 0, "data-flash": g2(t2.name), onPointerEnter: (e2) => e2.pointerType === `mouse` && u2?.(t2.name), onPointerLeave: (e2) => e2.pointerType === `mouse` && u2?.(null), children: [(0, r.jsx)(`span`, { className: `ui-pli__sizer`, "aria-hidden": `true`, children: i2[t2.name] || t2.name }), (0, r.jsx)(`input`, { className: `ui-pli__input`, "data-var": t2.name, size: 1, value: i2[t2.name] ?? ``, placeholder: t2.name, "aria-label": e.variables?.[t2.name]?.description ? `${t2.name} \u2013 ${e.variables[t2.name].description}` : t2.name, spellCheck: false, autoComplete: `off`, onChange: (e2) => l2?.(t2.name, e2.target.value), onFocus: () => u2?.(t2.name), onBlur: () => u2?.(null), onKeyDown: (e2) => {
    e2.key === `Enter` && (e2.preventDefault(), d2?.(t2.name));
  } })] }), t2.tail] }, a3)) }), (0, r.jsx)(`div`, { className: `ui-pli__label`, id: `${c2}-preview`, children: `Preview` }), (0, r.jsx)(`div`, { className: `ui-pli__preview`, "aria-labelledby": `${c2}-preview`, role: `region`, children: p2.map((e2, t2) => `text` in e2 ? (0, r.jsx)(n3.Fragment, { children: e2.text }, t2) : (0, r.jsxs)(`span`, { className: `ui-pli__glue`, children: [i2[e2.name]?.trim() ? (0, r.jsx)(`span`, { className: `ui-pli__fill`, "data-flash": g2(e2.name), children: i2[e2.name] }) : (0, r.jsx)(`span`, { className: `ui-pli__hole`, children: `{${e2.name}}` }), e2.tail] }, t2)) })] });
}
function v({ templates: e, value: t, defaultValue: a2, onSelect: o2, onUse: d2, onCopy: h2, title: v2 = `Prompts`, useLabel: y2 = `Use prompt`, className: b2 }) {
  let x2 = (0, n3.useId)(), [S2, ie] = (0, n3.useState)(a2 ?? e[0]?.id), ae = t ?? S2, C = e.find((e2) => e2.id === ae) ?? e[0], [w, T] = (0, n3.useState)(``), [oe, se] = (0, n3.useState)({}), E = (e2) => ({ ...u(e2), ...oe[e2.id] }), [ce, D] = (0, n3.useState)(null), [O, k] = (0, n3.useState)(null), [le, A] = (0, n3.useState)(false), [j, M] = (0, n3.useState)(null), [N, P] = (0, n3.useState)(``), F = (() => {
    let t2 = /* @__PURE__ */ new Map();
    for (let n4 of e) n4.category && !t2.has(n4.category) && t2.set(n4.category, i[t2.size % i.length]);
    return (e2) => e2.tone ?? t2.get(e2.category ?? ``) ?? `gray`;
  })(), I = w.trim().toLowerCase(), L = I ? e.filter((e2) => [e2.title, e2.category ?? ``, e2.body].some((e3) => e3.toLowerCase().includes(I))) : e, R = (e2) => {
    e2 !== ae && (t === void 0 && ie(e2), o2?.(e2));
  }, [z, B] = (0, n3.useState)(null), [V, ue] = (0, n3.useState)(C?.id);
  C && V !== C.id && (V && !f() && B({ id: V, key: Date.now() }), ue(C.id), k(null), D(null)), (0, n3.useEffect)(() => {
    if (!z) return;
    let e2 = window.setTimeout(() => B(null), 260);
    return () => window.clearTimeout(e2);
  }, [z]);
  let H = z ? e.find((e2) => e2.id === z.id) : void 0, U = (0, n3.useRef)(null), W = (0, n3.useRef)(/* @__PURE__ */ new Map()), [G, de] = (0, n3.useState)({ y: 0, h: 0, on: false, moved: false }), fe = L.map((e2) => e2.id).join(`|`);
  (0, n3.useLayoutEffect)(() => {
    let e2 = () => {
      let e3 = C ? W.current.get(C.id) : void 0;
      de((t3) => e3 ? { y: e3.offsetTop, h: e3.offsetHeight, on: true, moved: t3.on } : { ...t3, on: false, moved: false });
    };
    e2();
    let t2 = U.current;
    if (!t2 || typeof ResizeObserver > `u`) return;
    let n4 = new ResizeObserver(e2);
    return n4.observe(t2), () => n4.disconnect();
  }, [C?.id, fe]);
  let pe = (e2) => {
    if (!L.length) return;
    let t2 = L.findIndex((e3) => e3.id === C?.id), n4 = -1;
    if (e2.key === `ArrowDown`) n4 = t2 < 0 ? 0 : Math.min(L.length - 1, t2 + 1);
    else if (e2.key === `ArrowUp`) n4 = t2 < 0 ? L.length - 1 : Math.max(0, t2 - 1);
    else if (e2.key === `Home`) n4 = 0;
    else if (e2.key === `End`) n4 = L.length - 1;
    else return;
    e2.preventDefault(), R(L[n4].id), W.current.get(L[n4].id)?.focus();
  }, K = C ? E(C) : {}, q = C ? s(C.body) : [], J = q.filter((e2) => !K[e2]?.trim()), Y = !!C && J.length === 0, X = C ? c(C.body, K) : ``, me = p(l(X), 420), he = (e2, t2) => {
    if (!C) return;
    let n4 = C.id;
    se((r2) => ({ ...r2, [n4]: { ...E(C), ...r2[n4], [e2]: t2 } })), D((t3) => ({ name: e2, n: (t3?.n ?? 0) + 1 }));
  }, [ge, _e] = (0, n3.useState)(0), ve = (0, n3.useRef)(Y), ye = (0, n3.useRef)(C?.id);
  (0, n3.useEffect)(() => {
    Y && !ve.current && ye.current === C?.id && (_e((e2) => e2 + 1), P(`All variables filled`)), ve.current = Y, ye.current = C?.id;
  }, [Y, C?.id]);
  let be = (0, n3.useRef)(null), xe = (e2) => {
    let t2 = [...be.current?.querySelectorAll(`.ui-pli__panel:not([data-out]) .ui-pli__input`) ?? []], n4 = t2.findIndex((t3) => t3.dataset.var === e2), r2 = [...t2.slice(n4 + 1), ...t2.slice(0, n4)].find((e3) => !e3.value.trim());
    r2 ? r2.focus() : Y && Ce();
  }, Se = async () => {
    try {
      await navigator.clipboard?.writeText(X);
    } catch {
    }
    h2?.(X), M({ id: Date.now(), kind: `copied` }), P(`Prompt copied`);
  }, Ce = () => {
    Y && C && (d2?.(X, C, K), M({ id: Date.now(), kind: `used` }), P(`${C.title} used`));
  };
  (0, n3.useEffect)(() => {
    if (!j) return;
    let e2 = window.setTimeout(() => M(null), 1800);
    return () => window.clearTimeout(e2);
  }, [j]), (0, n3.useEffect)(() => {
    if (!N) return;
    let e2 = window.setTimeout(() => P(``), 2e3);
    return () => window.clearTimeout(e2);
  }, [N]);
  let Z = (0, r.jsxs)(r.Fragment, { children: [`~`, Math.round(me), ` tokens`] }), Q = `tokens`, we, $ = O && q.includes(O) ? O : null;
  if (j) Z = j.kind === `copied` ? `Copied to clipboard` : `Prompt sent`, Q = `${j.kind}-${j.id}`, we = `ok`;
  else if ($) {
    let e2 = C?.variables?.[$]?.description;
    Z = (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`b`, { children: $ }), ` \xB7 `, e2 ?? (K[$]?.trim() ? `filled` : `fill this in`)] }), Q = `hint-${$}`;
  } else le && !Y && (Z = `Fill ${J.length} more to use`, Q = `missing`);
  return (0, r.jsxs)(`div`, { ref: be, className: [`ui-pli`, b2].filter(Boolean).join(` `), role: `group`, "aria-labelledby": `${x2}-title`, children: [(0, r.jsx)(`style`, { href: `ui-prompt-library`, precedence: `default`, children: re }), (0, r.jsxs)(`div`, { className: `ui-pli__card`, children: [(0, r.jsxs)(`div`, { className: `ui-pli__side`, children: [(0, r.jsxs)(`div`, { className: `ui-pli__side-head`, children: [(0, r.jsx)(`span`, { id: `${x2}-title`, className: `ui-pli__title`, children: v2 }), (0, r.jsx)(`span`, { className: `ui-pli__total`, children: e.length })] }), (0, r.jsxs)(`label`, { className: `ui-pli__search`, children: [(0, r.jsx)(g, {}), (0, r.jsx)(`input`, { type: `search`, value: w, placeholder: `Search templates`, "aria-label": `Search templates`, "aria-controls": `${x2}-list`, onChange: (e2) => T(e2.target.value), onKeyDown: (e2) => {
    if (e2.key === `ArrowDown` && L.length) {
      e2.preventDefault();
      let t2 = L.find((e3) => e3.id === C?.id) ?? L[0];
      R(t2.id), W.current.get(t2.id)?.focus();
    } else e2.key === `Escape` && w && (e2.preventDefault(), T(``));
  } })] }), (0, r.jsxs)(`div`, { ref: U, id: `${x2}-list`, className: `ui-pli__list`, role: `listbox`, "aria-label": `Templates`, onKeyDown: pe, children: [(0, r.jsx)(`span`, { className: `ui-pli__glide`, "aria-hidden": `true`, "data-on": G.on ? `` : void 0, "data-moved": G.moved ? `` : void 0, style: { transform: `translateY(${G.y}px)`, height: G.h } }), L.map((e2) => {
    let t2 = e2.id === C?.id, n4 = t2 || !L.some((e3) => e3.id === C?.id) && e2 === L[0];
    return (0, r.jsxs)(`div`, { ref: (t3) => {
      t3 ? W.current.set(e2.id, t3) : W.current.delete(e2.id);
    }, className: `ui-pli__option`, role: `option`, "aria-selected": t2, tabIndex: n4 ? 0 : -1, onClick: () => R(e2.id), onKeyDown: (t3) => {
      (t3.key === `Enter` || t3.key === ` `) && (t3.preventDefault(), R(e2.id));
    }, children: [(0, r.jsx)(`span`, { className: `ui-pli__option-title`, children: e2.title }), e2.category && (0, r.jsx)(`span`, { className: `ui-pli__tag`, "data-tone": F(e2), children: e2.category })] }, e2.id);
  }), L.length === 0 && (0, r.jsx)(`div`, { className: `ui-pli__empty`, children: `No templates match` })] })] }), (0, r.jsxs)(`div`, { className: `ui-pli__main`, children: [H && (0, r.jsx)(_, { template: H, tone: F(H), values: E(H), flash: null, idBase: `${x2}-out`, out: true }, `out-${z.key}`), C && (0, r.jsx)(_, { template: C, tone: F(C), values: K, flash: ce, idBase: x2, onChange: he, onHint: k, onEnter: xe }, C.id)] })] }), (0, r.jsxs)(`div`, { className: `ui-pli__foot`, children: [(0, r.jsx)(`span`, { className: `ui-pli__caption`, children: (0, r.jsx)(m, { id: Q, tone: we, children: Z }) }), (0, r.jsxs)(`button`, { type: `button`, className: `ui-pli__copy`, onClick: Se, "aria-label": `Copy prompt`, disabled: !C, children: [(0, r.jsx)(`span`, { className: `ui-pli__copy-icon`, children: j?.kind === `copied` ? (0, r.jsx)(te, {}) : (0, r.jsx)(ee, {}) }, j?.kind === `copied` ? `done` : `copy`), (0, r.jsx)(`span`, { className: `ui-pli__copy-text`, children: `Copy` })] }), (0, r.jsxs)(`button`, { type: `button`, className: `ui-pli__use`, "aria-disabled": !Y, "data-pulse": ge ? ge % 2 ? `a` : `b` : void 0, onClick: Ce, onPointerEnter: () => A(true), onPointerLeave: () => A(false), onFocus: () => A(true), onBlur: () => A(false), children: [y2, (0, r.jsx)(ne, {})] })] }), (0, r.jsx)(`span`, { className: `ui-pli__sr`, role: `status`, "aria-live": `polite`, children: N })] });
}
var re = `.ui-pli{--ui-pli-tray: #f0f0f0;--ui-pli-card: #ffffff;--ui-pli-line: #ececec;--ui-pli-ink: #171717;--ui-pli-text: #404040;--ui-pli-muted: #8f8f8f;--ui-pli-well: #f4f4f5;--ui-pli-accent: #2f6bff;--ui-pli-accent-ink: #1f55d6;--ui-pli-accent-bg: rgba(47, 107, 255, 0.09);--ui-pli-accent-flash: rgba(47, 107, 255, 0.24);--ui-pli-hole: #b4b4b9;--ui-pli-on-ink: #ffffff;--ui-pli-ok: #18794e;--ui-pli-blue: #2f6bff;--ui-pli-blue-bg: rgba(47, 107, 255, 0.1);--ui-pli-violet: #6941c6;--ui-pli-violet-bg: rgba(105, 65, 198, 0.1);--ui-pli-amber: #96590a;--ui-pli-amber-bg: rgba(240, 160, 32, 0.14);--ui-pli-green: #18794e;--ui-pli-green-bg: rgba(34, 160, 90, 0.11);--ui-pli-red: #b42318;--ui-pli-red-bg: rgba(229, 72, 77, 0.1);--ui-pli-gray: #5f5f66;--ui-pli-gray-bg: #f0f0f2;--ui-pli-focus: rgba(23, 23, 23, 0.22);--ui-pli-ease: cubic-bezier(0.32, 0.72, 0.24, 1);box-sizing: border-box;width: 100%;max-width: 640px;min-width: 0;container-type: inline-size;padding: 4px;border-radius: 20px;background: var(--ui-pli-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;color: var(--ui-pli-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-pli *, .ui-pli *::before, .ui-pli *::after{box-sizing: border-box}:where(.ui-pli) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-pli) input{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;outline: none}.ui-pli button:focus-visible, .ui-pli__option:focus-visible{outline: 2px solid var(--ui-pli-focus);outline-offset: 2px}.ui-pli svg{display: block;flex: none}.ui-pli b{font-weight: 500;color: var(--ui-pli-ink)}.ui-pli p{margin: 0}.ui-pli__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-pli__card{display: grid;grid-template-columns: 220px minmax(0, 1fr);border-radius: 16px;background: var(--ui-pli-card);box-shadow: 0 0 0 1px var(--ui-pli-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-pli__side{min-width: 0;padding: 12px 8px 8px;border-right: 1px solid var(--ui-pli-line)}.ui-pli__side-head{display: flex;align-items: center;gap: 6px;height: 22px;padding: 0 6px}.ui-pli__title{overflow: hidden;font-size: 13px;font-weight: 500;color: var(--ui-pli-text);white-space: nowrap;text-overflow: ellipsis}.ui-pli__total{font-size: 12px;color: var(--ui-pli-muted);font-variant-numeric: tabular-nums}.ui-pli__search{display: flex;align-items: center;gap: 7px;height: 30px;margin-top: 8px;padding: 0 9px;border-radius: 8px;background: var(--ui-pli-well);color: var(--ui-pli-muted);cursor: text;transition: box-shadow 160ms ease}.ui-pli__search:focus-within{box-shadow: 0 0 0 1px var(--ui-pli-line), 0 0 0 3px var(--ui-pli-focus)}.ui-pli__search input{flex: 1;min-width: 0;height: 100%;font-size: 12.5px;color: var(--ui-pli-ink);-webkit-appearance: none;appearance: none}.ui-pli__search input::placeholder{color: var(--ui-pli-muted)}.ui-pli__search input::-webkit-search-cancel-button{-webkit-appearance: none}.ui-pli__list{position: relative;display: flex;flex-direction: column;gap: 2px;margin-top: 6px}.ui-pli__glide{position: absolute;top: 0;left: 0;right: 0;border-radius: 9px;background: var(--ui-pli-well);opacity: 0;pointer-events: none;transition: opacity 180ms ease}.ui-pli__glide[data-on]{opacity: 1}.ui-pli__glide[data-moved]{transition: transform 340ms var(--ui-pli-ease), height 340ms var(--ui-pli-ease), opacity 180ms ease}.ui-pli__option{position: relative;display: flex;align-items: center;gap: 8px;height: 34px;padding: 0 6px 0 8px;border-radius: 9px;color: var(--ui-pli-text);cursor: pointer;user-select: none;transition: color 160ms ease;-webkit-tap-highlight-color: transparent}.ui-pli__option::before{content: "";position: absolute;inset: 0;z-index: -1;border-radius: inherit;transition: background-color 160ms ease}.ui-pli__list{isolation: isolate}.ui-pli__glide{z-index: -1}.ui-pli__option:hover:not([aria-selected="true"])::before{background: color-mix(in srgb, var(--ui-pli-well) 55%, transparent)}.ui-pli__option[aria-selected="true"]{color: var(--ui-pli-ink)}.ui-pli__option-title{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-pli__empty{height: 34px;padding: 0 8px;font-size: 12.5px;line-height: 34px;color: var(--ui-pli-muted)}.ui-pli__tag{flex: none;height: 18px;padding: 0 5px;border-radius: 5px;font-size: 11px;font-weight: 500;line-height: 18px;white-space: nowrap;color: var(--ui-pli-gray);background: var(--ui-pli-gray-bg)}.ui-pli__tag[data-tone="blue"]{color: var(--ui-pli-blue);background: var(--ui-pli-blue-bg)}.ui-pli__tag[data-tone="violet"]{color: var(--ui-pli-violet);background: var(--ui-pli-violet-bg)}.ui-pli__tag[data-tone="amber"]{color: var(--ui-pli-amber);background: var(--ui-pli-amber-bg)}.ui-pli__tag[data-tone="green"]{color: var(--ui-pli-green);background: var(--ui-pli-green-bg)}.ui-pli__tag[data-tone="red"]{color: var(--ui-pli-red);background: var(--ui-pli-red-bg)}.ui-pli__main{display: grid;min-width: 0}.ui-pli__panel{grid-area: 1 / 1;min-width: 0;padding: 12px 14px 14px;animation: ui-pli-in 360ms ease both}.ui-pli__panel[data-out]{animation: ui-pli-out 240ms ease both;pointer-events: none}.ui-pli__panel-head{display: flex;align-items: center;gap: 8px;min-height: 22px}.ui-pli__panel-title{min-width: 0;overflow: hidden;font-size: 13.5px;font-weight: 600;color: var(--ui-pli-ink);white-space: nowrap;text-overflow: ellipsis}.ui-pli__count{display: inline-flex;flex: none;align-items: center;gap: 7px;margin-left: auto;font-size: 12px;color: var(--ui-pli-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-pli__bars{display: inline-flex;gap: 2px}.ui-pli__bar{width: 8px;height: 4px;border-radius: 2px;background: var(--ui-pli-line);transition: background-color 300ms ease}.ui-pli__bar[data-on]{background: var(--ui-pli-accent)}.ui-pli__body{margin-top: 10px !important;font-size: 13px;line-height: 26px;color: var(--ui-pli-text);overflow-wrap: anywhere}.ui-pli__glue{white-space: nowrap}.ui-pli__preview .ui-pli__glue{white-space: inherit}.ui-pli__token{position: relative;display: inline-grid;vertical-align: top;max-width: 100%;height: 22px;margin: 2px 0;padding: 0 6px;border-radius: 6px;background: var(--ui-pli-well);box-shadow: inset 0 0 0 1px var(--ui-pli-line);line-height: 22px;color: var(--ui-pli-muted);cursor: text;transition: background-color 200ms ease, box-shadow 200ms ease, color 200ms ease}.ui-pli__token:hover{box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ui-pli-muted) 45%, transparent)}.ui-pli__token[data-filled]{background: var(--ui-pli-accent-bg);box-shadow: none;color: var(--ui-pli-accent-ink)}.ui-pli__token:focus-within{box-shadow: inset 0 0 0 1px var(--ui-pli-accent), 0 0 0 3px var(--ui-pli-accent-bg)}.ui-pli__token[data-flash="a"]{animation: ui-pli-flash-a 900ms ease-out}.ui-pli__token[data-flash="b"]{animation: ui-pli-flash-b 900ms ease-out}.ui-pli__sizer, .ui-pli__input{grid-area: 1 / 1;min-width: 2ch;font-size: 13px;line-height: 22px;white-space: pre}.ui-pli__sizer{padding-right: 1px;font-weight: 500;visibility: hidden;overflow: hidden}.ui-pli__input{width: 100%;height: 22px;color: inherit;font-weight: 500;text-overflow: ellipsis}.ui-pli__input::placeholder{color: var(--ui-pli-muted);font-weight: 400;opacity: 1}.ui-pli__label{margin-top: 12px;font-size: 12px;color: var(--ui-pli-muted)}.ui-pli__preview{margin-top: 4px;padding: 9px 11px;border-radius: 10px;background: var(--ui-pli-well);font-size: 12.5px;line-height: 20px;color: var(--ui-pli-text);white-space: pre-wrap;overflow-wrap: anywhere}.ui-pli__fill{border-radius: 4px;color: var(--ui-pli-ink);font-weight: 500;box-decoration-break: clone;-webkit-box-decoration-break: clone}.ui-pli__fill[data-flash="a"]{animation: ui-pli-mark-a 1100ms ease-out}.ui-pli__fill[data-flash="b"]{animation: ui-pli-mark-b 1100ms ease-out}.ui-pli__hole{color: var(--ui-pli-hole)}.ui-pli__foot{display: flex;align-items: center;gap: 4px;min-height: 40px;padding: 4px 2px 0 10px}.ui-pli__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-pli-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-pli__swap{display: grid;min-width: 0}.ui-pli__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;animation: ui-pli-swap-in 320ms ease both}.ui-pli__swap-item[data-out]{animation: ui-pli-swap-out 220ms ease both}.ui-pli__swap-item[data-tone="ok"]{color: var(--ui-pli-ok)}.ui-pli__copy{display: inline-flex;flex: none;align-items: center;gap: 5px;height: 28px;padding: 0 9px 0 8px;border-radius: 10px;font-size: 12.5px;font-weight: 500;color: var(--ui-pli-text);white-space: nowrap;transition: background-color 160ms ease, color 160ms ease}.ui-pli__copy:hover:not(:disabled){background: var(--ui-pli-card);color: var(--ui-pli-ink)}.ui-pli__copy-icon{display: grid;place-items: center;width: 12px;height: 12px;animation: ui-pli-swap-in 300ms ease both}.ui-pli__use{position: relative;display: inline-flex;flex: none;align-items: center;gap: 5px;height: 28px;padding: 0 9px 0 11px;border-radius: 10px;background: var(--ui-pli-ink);font-size: 12.5px;font-weight: 500;color: var(--ui-pli-on-ink);white-space: nowrap;transition: background-color 200ms ease, color 200ms ease, opacity 200ms ease}.ui-pli__use svg{transition: transform 220ms var(--ui-pli-ease)}.ui-pli__use:hover:not([aria-disabled="true"]) svg{transform: translateX(2px)}.ui-pli__use[aria-disabled="true"]{background: color-mix(in srgb, var(--ui-pli-ink) 10%, transparent);color: var(--ui-pli-muted);cursor: default}.ui-pli__use[data-pulse="a"]{animation: ui-pli-pulse-a 1400ms ease-out}.ui-pli__use[data-pulse="b"]{animation: ui-pli-pulse-b 1400ms ease-out}@keyframes ui-pli-in{from{opacity: 0;filter: blur(2px);transform: translateY(3px)}}@keyframes ui-pli-out{to{opacity: 0;filter: blur(2px)}}@keyframes ui-pli-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-pli-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@keyframes ui-pli-flash-a{from{background-color: var(--ui-pli-accent-flash)}}@keyframes ui-pli-flash-b{from{background-color: var(--ui-pli-accent-flash)}}@keyframes ui-pli-mark-a{from{background-color: var(--ui-pli-accent-flash);box-shadow: 0 0 0 2px var(--ui-pli-accent-flash)}to{background-color: transparent;box-shadow: 0 0 0 2px transparent}}@keyframes ui-pli-mark-b{from{background-color: var(--ui-pli-accent-flash);box-shadow: 0 0 0 2px var(--ui-pli-accent-flash)}to{background-color: transparent;box-shadow: 0 0 0 2px transparent}}@keyframes ui-pli-pulse-a{0%{box-shadow: 0 0 0 0 color-mix(in srgb, var(--ui-pli-ink) 30%, transparent)}60%, 100%{box-shadow: 0 0 0 8px transparent}}@keyframes ui-pli-pulse-b{0%{box-shadow: 0 0 0 0 color-mix(in srgb, var(--ui-pli-ink) 30%, transparent)}60%, 100%{box-shadow: 0 0 0 8px transparent}}@container (max-width: 540px){.ui-pli__card{grid-template-columns: minmax(0, 1fr)}.ui-pli__side{border-right: 0;border-bottom: 1px solid var(--ui-pli-line)}}@container (max-width: 360px){.ui-pli__copy{width: 28px;padding: 0;justify-content: center}.ui-pli__copy-text{display: none}.ui-pli__count .ui-pli__bars{display: none}}@media (pointer: coarse){.ui-pli__option{height: 40px}.ui-pli__search{height: 36px}.ui-pli__copy, .ui-pli__use{height: 34px}.ui-pli__body{line-height: 30px}.ui-pli__token, .ui-pli__input, .ui-pli__sizer{height: 26px;line-height: 26px}}@media (prefers-reduced-motion: reduce){.ui-pli *, .ui-pli *::before, .ui-pli *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-pli{--ui-pli-tray: #111113;--ui-pli-card: #19191b;--ui-pli-line: #2a2a2e;--ui-pli-ink: #ededed;--ui-pli-text: #c8c8cc;--ui-pli-muted: #8b8b92;--ui-pli-well: #222225;--ui-pli-accent: #4f82ff;--ui-pli-accent-ink: #9dbbff;--ui-pli-accent-bg: rgba(79, 130, 255, 0.16);--ui-pli-accent-flash: rgba(79, 130, 255, 0.36);--ui-pli-hole: #5c5c63;--ui-pli-on-ink: #111113;--ui-pli-ok: #6ee7a8;--ui-pli-blue: #8fb1ff;--ui-pli-blue-bg: rgba(79, 130, 255, 0.16);--ui-pli-violet: #b9a2f5;--ui-pli-violet-bg: rgba(150, 110, 240, 0.16);--ui-pli-amber: #f5c264;--ui-pli-amber-bg: rgba(240, 160, 32, 0.15);--ui-pli-green: #6ee7a8;--ui-pli-green-bg: rgba(34, 160, 90, 0.16);--ui-pli-red: #ff9b93;--ui-pli-red-bg: rgba(229, 72, 77, 0.16);--ui-pli-gray: #b4b4ba;--ui-pli-gray-bg: #26262a;--ui-pli-focus: rgba(255, 255, 255, 0.3)}`;
var y = [{ id: `meeting`, title: `Summarize a meeting`, category: `Notes`, body: `Summarize the meeting below for {audience} in under {length}. Lead with the decisions, then list open questions about {topic}.`, variables: { audience: { description: `Who reads the summary` }, length: { description: `How long it may be`, default: `150 words` }, topic: { description: `What the open questions are about` } } }, { id: `release`, title: `Write release notes`, category: `Product`, body: `Write release notes for {product} {version} for {audience}. Keep the tone {tone} and group the changes into New, Improved and Fixed.`, variables: { product: { description: `Name of the product` }, version: { description: `Version number, e.g. 2.4` }, audience: { description: `Who reads the notes` }, tone: { description: `How it should sound`, default: `friendly` } } }, { id: `error`, title: `Explain an error`, category: `Debug`, body: `Explain this {language} error in plain words: {error}. Say what most likely caused it and suggest a fix that works with {framework}.`, variables: { language: { description: `Programming language` }, error: { description: `The error message` }, framework: { description: `Framework or runtime in use` } } }, { id: `email`, title: `Draft a cold email`, category: `Sales`, body: `Draft a short cold email to {name}, {role} at {company}. Open with {hook} and ask for a 15-minute call. No more than {length}.`, variables: { name: { description: `First name of the person` }, role: { description: `Their job title` }, company: { description: `Where they work` }, hook: { description: `Something specific about them` }, length: { description: `How long it may be`, default: `120 words` } } }];
var b = [{ id: `release`, type: [[`product`, `Relay`], [`version`, `2.4`], [`audience`, `existing customers`]] }, { id: `error`, type: [[`language`, `TypeScript`], [`error`, `Cannot read properties of undefined`], [`framework`, `Next.js`]] }, { id: `meeting`, type: [[`audience`, `the design team`], [`topic`, `the onboarding flow`]] }];
function x(e, t) {
  Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`)?.set?.call(e, t), e.dispatchEvent(new Event(`input`, { bubbles: true }));
}
function S() {
  let e = (0, n3.useRef)(null), [t, i2] = (0, n3.useState)(0), [a2, o2] = (0, n3.useState)(`meeting`), s2 = (0, n3.useRef)(false);
  (0, n3.useEffect)(() => {
    let n4 = b[t % b.length], r2 = [[t === 0 ? 700 : 900, () => o2(n4.id)]];
    n4.type.forEach(([n5, i3], a4) => {
      for (let o3 = 1; o3 <= i3.length; o3++) {
        let s3 = o3 === 1 ? a4 === 0 && t === 0 ? 2500 : 520 : 55 + o3 * 37 % 40;
        r2.push([s3, () => {
          let t2 = e.current?.querySelector(`.ui-pli__panel:not([data-out]) .ui-pli__input[data-var="${n5}"]`);
          t2 && x(t2, i3.slice(0, o3));
        }]);
      }
    }), r2.push([3600, () => i2((e2) => e2 + 1)]);
    let a3 = 0, c3 = 0, l2 = () => {
      s2.current || a3 >= r2.length || (c3 = window.setTimeout(() => {
        s2.current || (r2[a3][1](), a3++, l2());
      }, r2[a3][0]));
    };
    return l2(), () => window.clearTimeout(c3);
  }, [t]);
  let c2 = () => s2.current = true;
  return (0, r.jsx)(`div`, { ref: e, className: `pli-demo`, onPointerEnter: c2, onPointerDownCapture: c2, onKeyDownCapture: c2, onFocusCapture: c2, children: (0, r.jsx)(v, { templates: y, value: a2, onSelect: o2, onUse: () => {
  } }, t) });
}

export {
  S
};
