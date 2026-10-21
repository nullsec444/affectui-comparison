import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo.clean-DRfoB4wl.js
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
  }, [c2]), (0, r.jsxs)(`span`, { className: `ui-plic__swap`, children: [c2 && (0, r.jsx)(`span`, { className: `ui-plic__swap-item`, "data-out": ``, "data-tone": c2.tone, "aria-hidden": `true`, children: c2.node }, `out-${c2.id}`), (0, r.jsx)(`span`, { className: `ui-plic__swap-item`, "data-tone": t, children: i2 }, e)] });
}
var h = { stroke: `currentColor`, strokeWidth: 1.1, strokeLinecap: `round`, strokeLinejoin: `round` };
var g = () => (0, r.jsxs)(`svg`, { width: `16`, height: `16`, viewBox: `0 0 16 16`, fill: `none`, "aria-hidden": `true`, children: [(0, r.jsx)(`circle`, { cx: `7.25`, cy: `7.25`, r: `4.25`, ...h }), (0, r.jsx)(`path`, { d: `m10.5 10.5 3 3`, ...h })] });
var ee = () => (0, r.jsxs)(`svg`, { width: `16`, height: `16`, viewBox: `0 0 16 16`, fill: `none`, "aria-hidden": `true`, children: [(0, r.jsx)(`rect`, { x: `5.5`, y: `5.5`, width: `8`, height: `8`, rx: `1.75`, ...h }), (0, r.jsx)(`path`, { d: `M10.5 5.5V4.25A1.75 1.75 0 0 0 8.75 2.5h-4.5A1.75 1.75 0 0 0 2.5 4.25v4.5c0 .97.78 1.75 1.75 1.75H5.5`, ...h })] });
var te = () => (0, r.jsx)(`svg`, { width: `16`, height: `16`, viewBox: `0 0 16 16`, fill: `none`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `m3.5 8.25 3 3 6-6.5`, ...h, strokeWidth: 1.4 }) });
var ne = () => (0, r.jsx)(`svg`, { width: `16`, height: `16`, viewBox: `0 0 16 16`, fill: `none`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M3.5 8h9M9 4.5 12.5 8 9 11.5`, ...h, strokeWidth: 1.25 }) });
function _({ template: e, tone: t, values: i2, flash: a2, idBase: c2, onChange: l2, onHint: u2, onEnter: d2, out: f2 }) {
  let p2 = o(e.body), m2 = s(e.body), h2 = m2.filter((e2) => i2[e2]?.trim()).length, g2 = (e2) => a2 && a2.name === e2 ? a2.n % 2 ? `a` : `b` : void 0;
  return (0, r.jsxs)(`div`, { className: `ui-plic__panel`, "data-out": f2 ? `` : void 0, "aria-hidden": f2 || void 0, inert: f2, children: [(0, r.jsxs)(`div`, { className: `ui-plic__panel-head`, children: [(0, r.jsx)(`span`, { className: `ui-plic__panel-title`, children: e.title }), e.category && (0, r.jsx)(`span`, { className: `ui-plic__tag`, "data-tone": t, children: e.category }), m2.length > 0 && (0, r.jsxs)(`span`, { className: `ui-plic__count`, children: [(0, r.jsx)(`span`, { className: `ui-plic__bars`, "aria-hidden": `true`, children: m2.map((e2) => (0, r.jsx)(`span`, { className: `ui-plic__bar`, "data-on": i2[e2]?.trim() ? `` : void 0 }, e2)) }), h2, ` of `, m2.length, ` filled`] })] }), (0, r.jsx)(`p`, { className: `ui-plic__body`, children: p2.map((t2, a3) => `text` in t2 ? (0, r.jsx)(n3.Fragment, { children: t2.text }, a3) : (0, r.jsxs)(`span`, { className: `ui-plic__glue`, children: [(0, r.jsxs)(`span`, { className: `ui-plic__token`, "data-filled": i2[t2.name]?.trim() ? `` : void 0, "data-flash": g2(t2.name), onPointerEnter: (e2) => e2.pointerType === `mouse` && u2?.(t2.name), onPointerLeave: (e2) => e2.pointerType === `mouse` && u2?.(null), children: [(0, r.jsx)(`span`, { className: `ui-plic__sizer`, "aria-hidden": `true`, children: i2[t2.name] || t2.name }), (0, r.jsx)(`input`, { className: `ui-plic__input`, "data-var": t2.name, size: 1, value: i2[t2.name] ?? ``, placeholder: t2.name, "aria-label": e.variables?.[t2.name]?.description ? `${t2.name} \u2013 ${e.variables[t2.name].description}` : t2.name, spellCheck: false, autoComplete: `off`, onChange: (e2) => l2?.(t2.name, e2.target.value), onFocus: () => u2?.(t2.name), onBlur: () => u2?.(null), onKeyDown: (e2) => {
    e2.key === `Enter` && (e2.preventDefault(), d2?.(t2.name));
  } })] }), t2.tail] }, a3)) }), (0, r.jsx)(`div`, { className: `ui-plic__label`, id: `${c2}-preview`, children: `Preview` }), (0, r.jsx)(`div`, { className: `ui-plic__preview`, "aria-labelledby": `${c2}-preview`, role: `region`, children: p2.map((e2, t2) => `text` in e2 ? (0, r.jsx)(n3.Fragment, { children: e2.text }, t2) : (0, r.jsxs)(`span`, { className: `ui-plic__glue`, children: [i2[e2.name]?.trim() ? (0, r.jsx)(`span`, { className: `ui-plic__fill`, "data-flash": g2(e2.name), children: i2[e2.name] }) : (0, r.jsx)(`span`, { className: `ui-plic__hole`, children: `{${e2.name}}` }), e2.tail] }, t2)) })] });
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
    let t2 = [...be.current?.querySelectorAll(`.ui-plic__panel:not([data-out]) .ui-plic__input`) ?? []], n4 = t2.findIndex((t3) => t3.dataset.var === e2), r2 = [...t2.slice(n4 + 1), ...t2.slice(0, n4)].find((e3) => !e3.value.trim());
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
  return (0, r.jsxs)(`div`, { ref: be, className: [`ui-plic`, b2].filter(Boolean).join(` `), role: `group`, "aria-labelledby": `${x2}-title`, children: [(0, r.jsx)(`style`, { href: `ui-prompt-library-clean`, precedence: `default`, children: re }), (0, r.jsxs)(`div`, { className: `ui-plic__card`, children: [(0, r.jsxs)(`div`, { className: `ui-plic__cols`, children: [(0, r.jsxs)(`div`, { className: `ui-plic__side`, children: [(0, r.jsxs)(`div`, { className: `ui-plic__side-head`, children: [(0, r.jsx)(`span`, { id: `${x2}-title`, className: `ui-plic__title`, children: v2 }), (0, r.jsx)(`span`, { className: `ui-plic__total`, children: e.length })] }), (0, r.jsxs)(`label`, { className: `ui-plic__search`, children: [(0, r.jsx)(g, {}), (0, r.jsx)(`input`, { type: `search`, value: w, placeholder: `Search templates`, "aria-label": `Search templates`, "aria-controls": `${x2}-list`, onChange: (e2) => T(e2.target.value), onKeyDown: (e2) => {
    if (e2.key === `ArrowDown` && L.length) {
      e2.preventDefault();
      let t2 = L.find((e3) => e3.id === C?.id) ?? L[0];
      R(t2.id), W.current.get(t2.id)?.focus();
    } else e2.key === `Escape` && w && (e2.preventDefault(), T(``));
  } })] }), (0, r.jsxs)(`div`, { ref: U, id: `${x2}-list`, className: `ui-plic__list`, role: `listbox`, "aria-label": `Templates`, onKeyDown: pe, children: [(0, r.jsx)(`span`, { className: `ui-plic__glide`, "aria-hidden": `true`, "data-on": G.on ? `` : void 0, "data-moved": G.moved ? `` : void 0, style: { transform: `translateY(${G.y}px)`, height: G.h } }), L.map((e2) => {
    let t2 = e2.id === C?.id, n4 = t2 || !L.some((e3) => e3.id === C?.id) && e2 === L[0];
    return (0, r.jsxs)(`div`, { ref: (t3) => {
      t3 ? W.current.set(e2.id, t3) : W.current.delete(e2.id);
    }, className: `ui-plic__option`, role: `option`, "aria-selected": t2, tabIndex: n4 ? 0 : -1, onClick: () => R(e2.id), onKeyDown: (t3) => {
      (t3.key === `Enter` || t3.key === ` `) && (t3.preventDefault(), R(e2.id));
    }, children: [(0, r.jsx)(`span`, { className: `ui-plic__option-title`, children: e2.title }), e2.category && (0, r.jsx)(`span`, { className: `ui-plic__tag`, "data-tone": F(e2), children: e2.category })] }, e2.id);
  }), L.length === 0 && (0, r.jsx)(`div`, { className: `ui-plic__empty`, children: `No templates match` })] })] }), (0, r.jsxs)(`div`, { className: `ui-plic__main`, children: [H && (0, r.jsx)(_, { template: H, tone: F(H), values: E(H), flash: null, idBase: `${x2}-out`, out: true }, `out-${z.key}`), C && (0, r.jsx)(_, { template: C, tone: F(C), values: K, flash: ce, idBase: x2, onChange: he, onHint: k, onEnter: xe }, C.id)] })] }), (0, r.jsxs)(`div`, { className: `ui-plic__foot`, children: [(0, r.jsx)(`span`, { className: `ui-plic__caption`, children: (0, r.jsx)(m, { id: Q, tone: we, children: Z }) }), (0, r.jsxs)(`button`, { type: `button`, className: `ui-plic__copy`, onClick: Se, "aria-label": `Copy prompt`, disabled: !C, children: [(0, r.jsx)(`span`, { className: `ui-plic__copy-icon`, "data-done": j?.kind === `copied` ? `` : void 0, children: j?.kind === `copied` ? (0, r.jsx)(te, {}) : (0, r.jsx)(ee, {}) }, j?.kind === `copied` ? `done` : `copy`), (0, r.jsx)(`span`, { className: `ui-plic__copy-text`, children: `Copy` })] }), (0, r.jsxs)(`button`, { type: `button`, className: `ui-plic__use`, "aria-disabled": !Y, "data-pulse": ge ? ge % 2 ? `a` : `b` : void 0, onClick: Ce, onPointerEnter: () => A(true), onPointerLeave: () => A(false), onFocus: () => A(true), onBlur: () => A(false), children: [y2, (0, r.jsx)(ne, {})] })] })] }), (0, r.jsx)(`span`, { className: `ui-plic__sr`, role: `status`, "aria-live": `polite`, children: N })] });
}
var re = `.ui-plic{--ui-plic-card: #ffffff;--ui-plic-ink: rgba(0, 0, 0, 0.88);--ui-plic-strong: #000000;--ui-plic-text: rgba(0, 0, 0, 0.61);--ui-plic-muted: rgba(0, 0, 0, 0.45);--ui-plic-faint: rgba(0, 0, 0, 0.27);--ui-plic-icon: rgba(0, 0, 0, 0.447);--ui-plic-line: rgba(0, 0, 0, 0.06);--ui-plic-line-strong: rgba(0, 0, 0, 0.1);--ui-plic-wash: rgba(0, 0, 0, 0.03);--ui-plic-well: rgba(0, 0, 0, 0.025);--ui-plic-fill: rgba(0, 0, 0, 0.06);--ui-plic-accent: rgba(0, 96, 226, 0.765);--ui-plic-accent-bg: rgba(0, 96, 226, 0.05);--ui-plic-pulse: rgba(0, 0, 0, 0.2);--ui-plic-accent-flash: rgba(0, 96, 226, 0.16);--ui-plic-on-ink: #fcfcfc;--ui-plic-ok: #1a9a52;--ui-plic-blue: #1f5fc4;--ui-plic-blue-bg: rgba(0, 96, 226, 0.07);--ui-plic-violet: #5b45b8;--ui-plic-violet-bg: rgba(91, 91, 214, 0.08);--ui-plic-amber: #93600a;--ui-plic-amber-bg: rgba(232, 162, 12, 0.1);--ui-plic-green: #17804a;--ui-plic-green-bg: rgba(26, 154, 82, 0.08);--ui-plic-red: #c0363b;--ui-plic-red-bg: rgba(229, 72, 77, 0.08);--ui-plic-gray: rgba(0, 0, 0, 0.61);--ui-plic-gray-bg: rgba(0, 0, 0, 0.05);--ui-plic-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-plic-focus: rgba(0, 96, 226, 0.35);--ui-plic-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;width: 100%;max-width: 640px;min-width: 0;container-type: inline-size;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-plic-ink);text-align: left;-webkit-font-smoothing: antialiased}.ui-plic *, .ui-plic *::before, .ui-plic *::after{box-sizing: border-box}:where(.ui-plic) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-plic) input{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;outline: none}.ui-plic button:focus-visible, .ui-plic__option:focus-visible{outline: 2px solid var(--ui-plic-focus);outline-offset: 1px}:where(.ui-plic) svg{display: block;flex: none}.ui-plic b{font-weight: 500;color: var(--ui-plic-ink)}.ui-plic p{margin: 0}.ui-plic__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-plic__card{overflow: hidden;border-radius: 10px;background: var(--ui-plic-card);box-shadow: var(--ui-plic-shadow)}.ui-plic__cols{display: grid;grid-template-columns: 220px minmax(0, 1fr)}.ui-plic__side{min-width: 0;padding: 12px 8px 8px;border-right: 0.5px solid var(--ui-plic-line)}.ui-plic__side-head{display: flex;align-items: center;gap: 6px;height: 20px;padding: 0 8px}.ui-plic__title{overflow: hidden;font-weight: 500;color: var(--ui-plic-strong);white-space: nowrap;text-overflow: ellipsis}.ui-plic__total{font-size: 12px;line-height: 16px;color: var(--ui-plic-faint);font-variant-numeric: tabular-nums}.ui-plic__search{display: flex;align-items: center;gap: 6px;height: 28px;margin-top: 10px;padding: 0 8px 0 6px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-plic-line-strong);color: var(--ui-plic-icon);cursor: text;transition: box-shadow 160ms ease}.ui-plic__search:hover{box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.16)}.ui-plic__search:focus-within{outline: 2px solid var(--ui-plic-focus);outline-offset: 1px}.ui-plic__search input{flex: 1;min-width: 0;height: 100%;font-size: 13px;color: var(--ui-plic-ink);caret-color: var(--ui-plic-accent);-webkit-appearance: none;appearance: none}.ui-plic__search input::placeholder{color: var(--ui-plic-faint)}.ui-plic__search input::-webkit-search-cancel-button{-webkit-appearance: none}.ui-plic__list{position: relative;isolation: isolate;display: flex;flex-direction: column;gap: 2px;margin-top: 8px}.ui-plic__glide{position: absolute;top: 0;left: 0;right: 0;z-index: -1;border-radius: 6px;background: var(--ui-plic-fill);opacity: 0;pointer-events: none;transition: opacity 140ms ease}.ui-plic__glide[data-on]{opacity: 1}.ui-plic__glide[data-moved]{transition: transform 90ms ease-out, height 90ms ease-out, opacity 140ms ease}.ui-plic__option{position: relative;display: flex;align-items: center;gap: 8px;height: 32px;padding: 0 6px 0 8px;border-radius: 6px;color: var(--ui-plic-text);cursor: pointer;user-select: none;transition: color 140ms ease;-webkit-tap-highlight-color: transparent}.ui-plic__option::before{content: "";position: absolute;inset: 0;z-index: -1;border-radius: inherit;transition: background-color 140ms ease}.ui-plic__option:hover:not([aria-selected="true"])::before{background: var(--ui-plic-wash)}.ui-plic__option:hover, .ui-plic__option[aria-selected="true"]{color: var(--ui-plic-ink)}.ui-plic__option-title{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-plic__empty{height: 32px;padding: 0 8px;line-height: 32px;color: var(--ui-plic-muted)}.ui-plic__tag{flex: none;height: 18px;padding: 0 6px;border-radius: 5px;font-size: 11px;font-weight: 500;line-height: 18px;white-space: nowrap;color: var(--ui-plic-gray);background: var(--ui-plic-gray-bg)}.ui-plic__tag[data-tone="blue"]{color: var(--ui-plic-blue);background: var(--ui-plic-blue-bg)}.ui-plic__tag[data-tone="violet"]{color: var(--ui-plic-violet);background: var(--ui-plic-violet-bg)}.ui-plic__tag[data-tone="amber"]{color: var(--ui-plic-amber);background: var(--ui-plic-amber-bg)}.ui-plic__tag[data-tone="green"]{color: var(--ui-plic-green);background: var(--ui-plic-green-bg)}.ui-plic__tag[data-tone="red"]{color: var(--ui-plic-red);background: var(--ui-plic-red-bg)}.ui-plic__main{display: grid;min-width: 0}.ui-plic__panel{grid-area: 1 / 1;min-width: 0;padding: 12px 16px 16px;animation: ui-plic-in 360ms var(--ui-plic-ease) both}.ui-plic__panel[data-out]{animation: ui-plic-out 240ms ease both;pointer-events: none}.ui-plic__panel-head{display: flex;align-items: center;gap: 8px;min-height: 20px}.ui-plic__panel-title{min-width: 0;overflow: hidden;font-weight: 500;color: var(--ui-plic-strong);white-space: nowrap;text-overflow: ellipsis}.ui-plic__count{display: inline-flex;flex: none;align-items: center;gap: 8px;margin-left: auto;font-size: 12px;line-height: 16px;color: var(--ui-plic-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-plic__bars{display: inline-flex;gap: 2px}.ui-plic__bar{width: 6px;height: 6px;border-radius: 1.5px;background: var(--ui-plic-fill);transition: background-color 300ms ease}.ui-plic__bar[data-on]{background: var(--ui-plic-accent)}.ui-plic__body{margin-top: 10px !important;font-size: 13px;line-height: 28px;color: var(--ui-plic-ink);overflow-wrap: anywhere}.ui-plic__glue{white-space: nowrap}.ui-plic__preview .ui-plic__glue{white-space: inherit}.ui-plic__token{position: relative;display: inline-grid;vertical-align: top;max-width: 100%;height: 22px;margin: 3px 0;padding: 0 6px;border-radius: 5px;background: var(--ui-plic-wash);box-shadow: inset 0 0 0 0.5px var(--ui-plic-line-strong);line-height: 22px;color: var(--ui-plic-ink);cursor: text;transition: background-color 200ms ease, box-shadow 200ms ease, color 200ms ease}.ui-plic__token:hover{background: var(--ui-plic-fill)}.ui-plic__token[data-filled]{background: var(--ui-plic-accent-bg);box-shadow: inset 0 0 0 0.5px transparent}.ui-plic__token:focus-within{outline: 2px solid var(--ui-plic-focus);outline-offset: 1px}.ui-plic__token[data-flash="a"]{animation: ui-plic-flash-a 900ms ease-out}.ui-plic__token[data-flash="b"]{animation: ui-plic-flash-b 900ms ease-out}.ui-plic__sizer, .ui-plic__input{grid-area: 1 / 1;min-width: 2ch;font-size: 13px;line-height: 22px;white-space: pre}.ui-plic__sizer{padding-right: 1px;font-weight: 500;visibility: hidden;overflow: hidden}.ui-plic__input{width: 100%;height: 22px;color: inherit;font-weight: 500;text-overflow: ellipsis;caret-color: var(--ui-plic-accent)}.ui-plic__input::placeholder{color: var(--ui-plic-muted);font-weight: 400;opacity: 1}.ui-plic__label{margin-top: 12px;font-size: 10px;font-weight: 500;line-height: 16px;letter-spacing: 0.5px;text-transform: uppercase;color: var(--ui-plic-muted)}.ui-plic__preview{margin-top: 4px;padding: 8px 12px;border-radius: 8px;background: var(--ui-plic-well);box-shadow: inset 0 0 0 0.5px var(--ui-plic-line);font-size: 13px;line-height: 20px;color: var(--ui-plic-text);white-space: pre-wrap;overflow-wrap: anywhere}.ui-plic__fill{border-radius: 4px;color: var(--ui-plic-ink);font-weight: 500;box-decoration-break: clone;-webkit-box-decoration-break: clone}.ui-plic__fill[data-flash="a"]{animation: ui-plic-mark-a 1100ms ease-out}.ui-plic__fill[data-flash="b"]{animation: ui-plic-mark-b 1100ms ease-out}.ui-plic__hole{color: var(--ui-plic-faint)}.ui-plic__foot{display: flex;align-items: center;gap: 8px;height: 44px;padding: 0 8px 0 16px;border-top: 0.5px solid var(--ui-plic-line)}.ui-plic__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-plic-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-plic__swap{display: grid;min-width: 0}.ui-plic__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;animation: ui-plic-swap-in 320ms ease both}.ui-plic__swap-item[data-out]{animation: ui-plic-swap-out 220ms ease both}.ui-plic__swap-item[data-tone="ok"]{color: var(--ui-plic-ok)}.ui-plic__copy{display: inline-flex;flex: none;align-items: center;gap: 6px;height: 28px;padding: 0 10px 0 8px;border-radius: 6px;background: var(--ui-plic-card);box-shadow: var(--ui-plic-shadow);font-size: 13px;font-weight: 500;color: var(--ui-plic-strong);white-space: nowrap;transition: background-color 160ms ease}.ui-plic__copy:hover:not(:disabled){background: color-mix(in srgb, var(--ui-plic-card), #000 3%)}.ui-plic__copy-icon{display: grid;place-items: center;width: 16px;height: 16px;color: var(--ui-plic-icon);animation: ui-plic-swap-in 300ms ease both}.ui-plic__copy-icon[data-done]{color: var(--ui-plic-ok)}.ui-plic__use{position: relative;display: inline-flex;flex: none;align-items: center;gap: 6px;height: 28px;padding: 0 8px 0 10px;border-radius: 6px;background: var(--ui-plic-ink);font-size: 13px;font-weight: 500;color: var(--ui-plic-on-ink);white-space: nowrap;transition: background-color 200ms ease, color 200ms ease}.ui-plic__use svg{transition: transform 220ms var(--ui-plic-ease)}.ui-plic__use:hover:not([aria-disabled="true"]){background: var(--ui-plic-strong)}.ui-plic__use:hover:not([aria-disabled="true"]) svg{transform: translateX(2px)}.ui-plic__use[aria-disabled="true"]{background: var(--ui-plic-fill);color: var(--ui-plic-muted);cursor: default}.ui-plic__use[data-pulse="a"]{animation: ui-plic-pulse-a 1400ms ease-out}.ui-plic__use[data-pulse="b"]{animation: ui-plic-pulse-b 1400ms ease-out}@keyframes ui-plic-in{from{opacity: 0;filter: blur(2px);transform: translateY(3px)}}@keyframes ui-plic-out{to{opacity: 0;filter: blur(2px)}}@keyframes ui-plic-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-plic-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@keyframes ui-plic-flash-a{from{background-color: var(--ui-plic-accent-flash)}}@keyframes ui-plic-flash-b{from{background-color: var(--ui-plic-accent-flash)}}@keyframes ui-plic-mark-a{from{background-color: var(--ui-plic-accent-flash);box-shadow: 0 0 0 2px var(--ui-plic-accent-flash)}to{background-color: transparent;box-shadow: 0 0 0 2px transparent}}@keyframes ui-plic-mark-b{from{background-color: var(--ui-plic-accent-flash);box-shadow: 0 0 0 2px var(--ui-plic-accent-flash)}to{background-color: transparent;box-shadow: 0 0 0 2px transparent}}@keyframes ui-plic-pulse-a{0%{box-shadow: 0 0 0 0 var(--ui-plic-pulse)}60%, 100%{box-shadow: 0 0 0 6px transparent}}@keyframes ui-plic-pulse-b{0%{box-shadow: 0 0 0 0 var(--ui-plic-pulse)}60%, 100%{box-shadow: 0 0 0 6px transparent}}@container (max-width: 540px){.ui-plic__cols{grid-template-columns: minmax(0, 1fr)}.ui-plic__side{border-right: 0;border-bottom: 0.5px solid var(--ui-plic-line)}}@container (max-width: 360px){.ui-plic__copy{width: 28px;padding: 0;justify-content: center}.ui-plic__copy-text{display: none}.ui-plic__count .ui-plic__bars{display: none}.ui-plic__panel{padding: 12px 12px 14px}.ui-plic__foot{padding-left: 12px}}@media (pointer: coarse){.ui-plic__option{height: 40px}.ui-plic__search{height: 36px}.ui-plic__copy, .ui-plic__use{height: 34px}.ui-plic__copy{padding-right: 12px}.ui-plic__foot{height: 50px}.ui-plic__body{line-height: 32px}.ui-plic__token, .ui-plic__input, .ui-plic__sizer{height: 26px;line-height: 26px}}@media (prefers-reduced-motion: reduce){.ui-plic *, .ui-plic *::before, .ui-plic *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-plic{--ui-plic-card: #1c1c1e;--ui-plic-ink: rgba(255, 255, 255, 0.9);--ui-plic-strong: #ffffff;--ui-plic-text: rgba(255, 255, 255, 0.62);--ui-plic-muted: rgba(255, 255, 255, 0.46);--ui-plic-faint: rgba(255, 255, 255, 0.3);--ui-plic-icon: rgba(255, 255, 255, 0.5);--ui-plic-line: rgba(255, 255, 255, 0.08);--ui-plic-line-strong: rgba(255, 255, 255, 0.12);--ui-plic-wash: rgba(255, 255, 255, 0.04);--ui-plic-well: rgba(255, 255, 255, 0.03);--ui-plic-fill: rgba(255, 255, 255, 0.08);--ui-plic-accent: #4d8dff;--ui-plic-accent-bg: rgba(77, 141, 255, 0.14);--ui-plic-pulse: rgba(255, 255, 255, 0.25);--ui-plic-accent-flash: rgba(77, 141, 255, 0.3);--ui-plic-on-ink: #1c1c1e;--ui-plic-ok: #3ec27a;--ui-plic-blue: #8fb4ff;--ui-plic-blue-bg: rgba(77, 141, 255, 0.14);--ui-plic-violet: #b7a6f5;--ui-plic-violet-bg: rgba(130, 120, 240, 0.15);--ui-plic-amber: #f2c063;--ui-plic-amber-bg: rgba(232, 162, 12, 0.14);--ui-plic-green: #6fd69c;--ui-plic-green-bg: rgba(26, 154, 82, 0.16);--ui-plic-red: #ff9a9d;--ui-plic-red-bg: rgba(229, 72, 77, 0.15);--ui-plic-gray: rgba(255, 255, 255, 0.62);--ui-plic-gray-bg: rgba(255, 255, 255, 0.08);--ui-plic-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-plic-focus: rgba(77, 141, 255, 0.45)}:where(.dark, [data-theme="dark"]) .ui-plic__search:hover{box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.18)}:where(.dark, [data-theme="dark"]) .ui-plic__copy:hover:not(:disabled){background: #232326}:where(.dark, [data-theme="dark"]) .ui-plic__use:hover:not([aria-disabled="true"]){background: #ffffff}`;
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
          let t2 = e.current?.querySelector(`.ui-plic__panel:not([data-out]) .ui-plic__input[data-var="${n5}"]`);
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
