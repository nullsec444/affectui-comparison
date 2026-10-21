import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo.clean-B7cgzOPZ.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [{ id: `low`, label: `Low` }, { id: `medium`, label: `Medium` }, { id: `high`, label: `High` }];
var a = { low: 1.6, medium: 2.5, high: 4 };
var o = [{ key: `speed`, label: `Speed` }, { key: `quality`, label: `Quality` }, { key: `cost`, label: `Cost` }];
var s = (e) => 1 - (1 - e) ** 4;
var c = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
var l = (e) => Math.max(0, Math.min(5, Math.round(e)));
var u = (e) => `${(e / 1e3).toFixed(1)}s`;
var d = (e, t) => `$${e.toFixed(Number.isInteger(t) ? 0 : 2)}`;
function f(e, t) {
  let [r2, i2] = (0, n3.useState)(e), a2 = (0, n3.useRef)(e), o2 = JSON.stringify(e);
  return (0, n3.useEffect)(() => {
    let e2 = JSON.parse(o2), n4 = { ...a2.current };
    if (c() || Object.keys(e2).every((t2) => n4[t2] === e2[t2])) {
      a2.current = e2, i2(e2);
      return;
    }
    let r3 = performance.now(), l2 = 0, u2 = (o3) => {
      let c2 = Math.min(1, (o3 - r3) / t), d2 = s(c2), f2 = {};
      for (let t2 in e2) f2[t2] = (n4[t2] ?? e2[t2]) + (e2[t2] - (n4[t2] ?? e2[t2])) * d2;
      a2.current = f2, i2(f2), c2 < 1 && (l2 = requestAnimationFrame(u2));
    };
    return l2 = requestAnimationFrame(u2), () => cancelAnimationFrame(l2);
  }, [o2, t]), r2;
}
function p({ id: e, children: t }) {
  let i2 = (0, n3.useRef)({ id: e, node: t }), [a2, o2] = (0, n3.useState)(e), [s2, c2] = (0, n3.useState)(null);
  return a2 !== e && (o2(e), c2(i2.current)), i2.current = { id: e, node: t }, (0, n3.useEffect)(() => {
    if (!s2) return;
    let e2 = window.setTimeout(() => c2(null), 260);
    return () => window.clearTimeout(e2);
  }, [s2]), (0, r.jsxs)(`span`, { className: `ui-mdpc__swap`, children: [s2 && (0, r.jsx)(`span`, { className: `ui-mdpc__swap-item`, "data-out": ``, "aria-hidden": `true`, children: s2.node }, `out-${s2.id}`), (0, r.jsx)(`span`, { className: `ui-mdpc__swap-item`, children: t }, e)] });
}
var m = { stroke: `currentColor`, strokeWidth: 1.2, strokeLinecap: `round`, strokeLinejoin: `round` };
var ee = () => (0, r.jsx)(`svg`, { className: `ui-mdpc__chevron`, width: `14`, height: `14`, viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `m3 4.5 3 3 3-3`, ...m }) });
var te = () => (0, r.jsx)(`svg`, { className: `ui-mdpc__check`, width: `16`, height: `16`, viewBox: `0 0 14 14`, fill: `none`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `m3.4 7.3 2.4 2.4 4.8-5.2`, ...m, strokeWidth: 1.3 }) });
var h = () => (0, r.jsx)(`svg`, { width: `16`, height: `16`, viewBox: `0 0 14 14`, fill: `none`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M5.3 10.6h3.4M5.8 12.3h2.4M7 1.7a3.9 3.9 0 0 0-2.3 7c.4.3.6.7.6 1.1v.1h3.4v-.1c0-.4.2-.8.6-1.1A3.9 3.9 0 0 0 7 1.7Z`, ...m }) });
var ne = () => (0, r.jsxs)(`svg`, { width: `16`, height: `16`, viewBox: `0 0 14 14`, fill: `none`, "aria-hidden": `true`, children: [(0, r.jsx)(`circle`, { cx: `7`, cy: `7`, r: `5.3`, ...m }), (0, r.jsx)(`path`, { d: `M1.9 7h10.2M7 1.7c1.4 1.5 2 3.3 2 5.3s-.6 3.8-2 5.3c-1.4-1.5-2-3.3-2-5.3s.6-3.8 2-5.3Z`, ...m })] });
function g({ model: e }) {
  return (0, r.jsx)(`span`, { className: `ui-mdpc__glyph`, "aria-hidden": `true`, children: e.icon ?? e.name.trim().charAt(0).toUpperCase() });
}
function _({ models: e, value: t, defaultValue: s2, onChange: c2, thinking: m2, defaultThinking: _2 = false, onThinkingChange: v2, webSearch: y2, defaultWebSearch: ie = false, onWebSearchChange: ae, effort: oe, defaultEffort: se = `medium`, onEffortChange: ce, open: le, defaultOpen: b = false, onOpenChange: ue, align: x = `start`, side: de = `bottom`, className: fe }) {
  let S = (0, n3.useId)(), C = (0, n3.useRef)(null), w = (0, n3.useRef)(null), T = (0, n3.useRef)(null), [pe, me] = (0, n3.useState)(s2 ?? e[0]?.id), [he, ge] = (0, n3.useState)(_2), [_e, ve] = (0, n3.useState)(ie), [ye, be] = (0, n3.useState)(se), [xe, Se] = (0, n3.useState)(b), E = t ?? pe, D = m2 ?? he, O = y2 ?? _e, k = oe ?? ye, A = le ?? xe, j = Math.max(0, e.findIndex((e2) => e2.id === E)), M = e[j], [N, P] = (0, n3.useState)(j), [F, I] = (0, n3.useState)(false), [Ce, L] = (0, n3.useState)(null), R = e[F ? N : j] ?? M, z = (e2, t2) => {
    e2 !== A && (e2 ? (P(j), I(false)) : L(null), Se(e2), ue?.(e2)), t2 === `list` && requestAnimationFrame(() => T.current?.focus({ preventScroll: true })), t2 === `trigger` && w.current?.focus({ preventScroll: true });
  }, B = (0, n3.useRef)(A);
  (0, n3.useEffect)(() => {
    A && !B.current && (P(j), I(false)), B.current = A;
  }, [A, j]);
  let V = (0, n3.useRef)(null), [H, we] = (0, n3.useState)(0);
  (0, n3.useLayoutEffect)(() => {
    if (!A) return;
    let e2 = () => {
      let e3 = w.current?.getBoundingClientRect(), t2 = V.current?.offsetWidth ?? 0;
      if (!e3 || !t2) return;
      let n4 = document.documentElement.clientWidth, r2 = x === `end` ? e3.right - t2 : e3.left;
      we(r2 < 12 ? 12 - r2 : r2 + t2 > n4 - 12 ? Math.min(0, n4 - 12 - (r2 + t2)) : 0);
    };
    return e2(), window.addEventListener(`resize`, e2), () => window.removeEventListener(`resize`, e2);
  }, [A, x]), (0, n3.useEffect)(() => {
    if (!A) return;
    let e2 = (e3) => {
      C.current?.contains(e3.target) || z(false);
    };
    return document.addEventListener(`pointerdown`, e2), () => document.removeEventListener(`pointerdown`, e2);
  });
  let Te = () => C.current?.contains(document.activeElement) ?? false, U = (t2) => {
    let n4 = e[t2];
    n4 && (me(n4.id), n4.id !== E && c2?.(n4.id), z(false, Te() ? `trigger` : void 0));
  }, Ee = () => {
    ge(!D), v2?.(!D);
  }, De = () => {
    ve(!O), ae?.(!O);
  }, W = (e2) => {
    be(e2), e2 !== k && ce?.(e2);
  }, Oe = (e2) => {
    (e2.key === `ArrowDown` || e2.key === `ArrowUp`) && (e2.preventDefault(), z(true, `list`));
  }, ke = (t2) => {
    let n4 = e.length;
    if (!n4) return;
    let r2 = (e2) => {
      t2.preventDefault(), P((e2 % n4 + n4) % n4), I(true);
    };
    t2.key === `ArrowDown` ? r2(N + 1) : t2.key === `ArrowUp` ? r2(N - 1) : t2.key === `Home` ? r2(0) : t2.key === `End` ? r2(n4 - 1) : (t2.key === `Enter` || t2.key === ` `) && (t2.preventDefault(), U(N));
  }, G = (0, n3.useRef)(null), [K, Ae] = (0, n3.useState)(null);
  (0, n3.useLayoutEffect)(() => {
    let e2 = G.current?.querySelector(`[data-effort="${k}"]`);
    e2 && Ae({ x: e2.offsetLeft, w: e2.offsetWidth });
  }, [k, A, D]);
  let je = (e2) => {
    let t2 = i.findIndex((e3) => e3.id === k), n4 = e2.key === `ArrowRight` || e2.key === `ArrowDown` ? 1 : e2.key === `ArrowLeft` || e2.key === `ArrowUp` ? -1 : 0;
    if (!n4) return;
    e2.preventDefault();
    let r2 = i[(t2 + n4 + i.length) % i.length];
    W(r2.id), C.current?.querySelector(`[data-effort="${r2.id}"]`)?.focus();
  }, Me = (e2) => {
    e2.key === `Escape` && A && (e2.stopPropagation(), z(false, `trigger`));
  }, Ne = D ? a[k] : 1, q = (R?.latencyMs ?? 0) * Ne, J = R?.pricePerM ?? 0, Y = f({ latency: q, price: J }, 560), X = R?.latencyMs !== void 0 || R?.pricePerM !== void 0, Z, Q, $;
  if (Ce === `search`) Z = O ? `Looks things up on the web when it helps` : `Answers from what it already knows`, Q = `search-${O}`, $ = Z;
  else if (!X) Z = R?.description ?? R?.name ?? ``, Q = `plain-${R?.id}`, $ = `${R?.name ?? ``}: ${Z}`;
  else {
    let e2 = [], t2 = [];
    R.latencyMs !== void 0 && (e2.push((0, r.jsxs)(`span`, { children: [`~`, (0, r.jsx)(`b`, { children: u(Y.latency ?? q) }), ` first token`] }, `l`)), t2.push(`about ${u(q)} to the first token`)), R.pricePerM !== void 0 && (e2.push((0, r.jsxs)(`span`, { children: [(0, r.jsx)(`b`, { children: d(Y.price ?? J, J) }), ` / M tokens`] }, `p`)), t2.push(`${d(J, J)} per million tokens`)), Z = e2.flatMap((e3, t3) => t3 ? [(0, r.jsx)(`span`, { className: `ui-mdpc__dot`, children: ` \xB7 ` }, `d${t3}`), e3] : [e3]), Q = `stats`, $ = `${R.name}: ${t2.join(`, `)}`;
  }
  let Pe = e[N] ? `${S}-opt-${e[N].id}` : void 0;
  return (0, r.jsxs)(`div`, { ref: C, className: [`ui-mdpc`, fe].filter(Boolean).join(` `), "data-open": A ? `` : void 0, "data-align": x, "data-side": de, onKeyDown: Me, onBlur: (e2) => {
    A && e2.relatedTarget && !C.current?.contains(e2.relatedTarget) && z(false);
  }, children: [(0, r.jsx)(`style`, { href: `ui-model-picker-clean`, precedence: `default`, children: re }), (0, r.jsxs)(`button`, { ref: w, type: `button`, className: `ui-mdpc__trigger`, "aria-haspopup": `dialog`, "aria-expanded": A, "aria-controls": `${S}-menu`, "aria-label": `Model: ${M?.name ?? `none`}${D ? `, extended thinking` : ``}`, onClick: () => z(!A, A ? void 0 : `list`), onKeyDown: Oe, children: [M && (0, r.jsx)(g, { model: M }), (0, r.jsx)(`span`, { className: `ui-mdpc__name`, children: (0, r.jsx)(p, { id: M?.id ?? `none`, children: M?.name ?? `Choose a model` }) }), (0, r.jsx)(`span`, { className: `ui-mdpc__flag`, "data-on": D ? `` : void 0, "aria-hidden": `true`, children: (0, r.jsx)(`span`, { children: (0, r.jsx)(h, {}) }) }), (0, r.jsx)(ee, {})] }), (0, r.jsxs)(`div`, { id: `${S}-menu`, ref: V, className: `ui-mdpc__pop`, style: H ? { translate: `${H}px 0` } : void 0, role: `dialog`, "aria-label": `Model settings`, inert: !A, children: [(0, r.jsxs)(`div`, { className: `ui-mdpc__card`, children: [(0, r.jsxs)(`div`, { className: `ui-mdpc__head`, "aria-hidden": `true`, children: [(0, r.jsx)(`span`, { children: `Model` }), (0, r.jsx)(`span`, { className: `ui-mdpc__cols`, children: o.map((e2) => (0, r.jsx)(`span`, { children: e2.label }, e2.key)) })] }), (0, r.jsx)(`div`, { ref: T, className: `ui-mdpc__list`, role: `listbox`, "aria-label": `Model`, tabIndex: 0, "aria-activedescendant": A ? Pe : void 0, "data-pointing": F ? `` : void 0, onKeyDown: ke, onPointerLeave: () => I(false), children: e.map((e2, t2) => {
    let n4 = e2.speed !== void 0 || e2.quality !== void 0 || e2.cost !== void 0;
    return (0, r.jsxs)(`div`, { id: `${S}-opt-${e2.id}`, role: `option`, "aria-selected": t2 === j, "aria-label": `${e2.name}${e2.description ? `, ${e2.description}` : ``}${n4 ? `. Speed ${e2.speed ?? 0}, quality ${e2.quality ?? 0}, cost ${e2.cost ?? 0} of 5` : ``}`, className: `ui-mdpc__option`, "data-active": t2 === N ? `` : void 0, "data-lit": e2.id === R?.id ? `` : void 0, onPointerEnter: (e3) => {
      e3.pointerType === `mouse` && (P(t2), I(true));
    }, onClick: () => U(t2), children: [(0, r.jsx)(g, { model: e2 }), (0, r.jsxs)(`span`, { className: `ui-mdpc__text`, children: [(0, r.jsxs)(`span`, { className: `ui-mdpc__title`, children: [(0, r.jsx)(`span`, { className: `ui-mdpc__title-name`, children: e2.name }), t2 === j && (0, r.jsx)(te, {})] }), e2.description && (0, r.jsx)(`span`, { className: `ui-mdpc__desc`, children: e2.description })] }), n4 ? (0, r.jsx)(`span`, { className: `ui-mdpc__bars`, "aria-hidden": `true`, children: o.map((t3, n5) => {
      let i2 = l(e2[t3.key] ?? 0);
      return (0, r.jsx)(`span`, { className: `ui-mdpc__meter`, style: { "--c": n5 }, children: [0, 1, 2, 3, 4].map((e3) => (0, r.jsx)(`span`, { className: `ui-mdpc__seg`, "data-on": e3 < i2 ? `` : void 0, style: { "--s": e3 } }, e3)) }, t3.key);
    }) }) : (0, r.jsx)(`span`, { className: `ui-mdpc__varies`, "aria-hidden": `true`, children: `Varies` })] }, e2.id);
  }) }), (0, r.jsxs)(`div`, { className: `ui-mdpc__settings`, children: [(0, r.jsxs)(`button`, { type: `button`, role: `switch`, "aria-checked": D, className: `ui-mdpc__toggle`, onClick: Ee, children: [(0, r.jsx)(`span`, { className: `ui-mdpc__toggle-icon`, children: (0, r.jsx)(h, {}) }), (0, r.jsx)(`span`, { className: `ui-mdpc__toggle-label`, children: `Extended thinking` }), (0, r.jsx)(`span`, { className: `ui-mdpc__switch`, "aria-hidden": `true` })] }), (0, r.jsx)(`div`, { className: `ui-mdpc__fold`, "data-open": D ? `` : void 0, inert: !D, children: (0, r.jsx)(`div`, { className: `ui-mdpc__clip`, children: (0, r.jsxs)(`div`, { className: `ui-mdpc__effort`, children: [(0, r.jsx)(`span`, { className: `ui-mdpc__effort-label`, id: `${S}-effort`, children: `Effort` }), (0, r.jsxs)(`div`, { ref: G, className: `ui-mdpc__segmented`, role: `radiogroup`, "aria-labelledby": `${S}-effort`, style: K ? { "--x": `${K.x}px`, "--w": `${K.w}px` } : void 0, onKeyDown: je, children: [(0, r.jsx)(`span`, { className: `ui-mdpc__thumb`, "aria-hidden": `true` }), i.map((e2) => (0, r.jsx)(`button`, { type: `button`, role: `radio`, "aria-checked": e2.id === k, tabIndex: e2.id === k ? 0 : -1, "data-effort": e2.id, className: `ui-mdpc__seg-btn`, onClick: () => W(e2.id), children: e2.label }, e2.id))] })] }) }) }), (0, r.jsxs)(`button`, { type: `button`, role: `switch`, "aria-checked": O, className: `ui-mdpc__toggle`, onClick: De, onPointerEnter: (e2) => e2.pointerType === `mouse` && L(`search`), onPointerLeave: () => L(null), onFocus: () => L(`search`), onBlur: () => L(null), children: [(0, r.jsx)(`span`, { className: `ui-mdpc__toggle-icon`, children: (0, r.jsx)(ne, {}) }), (0, r.jsx)(`span`, { className: `ui-mdpc__toggle-label`, children: `Web search` }), (0, r.jsx)(`span`, { className: `ui-mdpc__switch`, "aria-hidden": `true` })] })] })] }), (0, r.jsxs)(`div`, { className: `ui-mdpc__foot`, children: [(0, r.jsx)(`span`, { className: `ui-mdpc__caption`, "aria-hidden": `true`, children: (0, r.jsx)(p, { id: Q, children: Z }) }), (0, r.jsxs)(`span`, { className: `ui-mdpc__keys`, "aria-hidden": `true`, children: [(0, r.jsx)(`kbd`, { children: `\u2191\u2193` }), (0, r.jsx)(`kbd`, { children: `\u21B5` })] }), (0, r.jsx)(`span`, { className: `ui-mdpc__sr`, "aria-live": `polite`, children: A ? $ : `` })] })] })] });
}
var re = `.ui-mdpc{--ui-mdpc-card: #ffffff;--ui-mdpc-strong: #000000;--ui-mdpc-ink: rgba(0, 0, 0, 0.88);--ui-mdpc-text: rgba(0, 0, 0, 0.61);--ui-mdpc-muted: rgba(0, 0, 0, 0.45);--ui-mdpc-faint: rgba(0, 0, 0, 0.27);--ui-mdpc-icon: rgba(0, 0, 0, 0.447);--ui-mdpc-line: rgba(0, 0, 0, 0.06);--ui-mdpc-line-strong: rgba(0, 0, 0, 0.1);--ui-mdpc-fill: rgba(0, 0, 0, 0.06);--ui-mdpc-wash: rgba(0, 0, 0, 0.03);--ui-mdpc-bar: rgba(0, 0, 0, 0.2);--ui-mdpc-bar-off: rgba(0, 0, 0, 0.06);--ui-mdpc-switch: rgba(0, 0, 0, 0.1);--ui-mdpc-knob: #ffffff;--ui-mdpc-accent: rgba(0, 96, 226, 0.765);--ui-mdpc-focus: rgba(0, 96, 226, 0.35);--ui-mdpc-shadow-tile: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 1px -1px rgba(0, 0, 0, 0.1);--ui-mdpc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-mdpc-ease: cubic-bezier(0.32, 0.72, 0.24, 1);position: relative;display: inline-block;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-mdpc-ink);text-align: left;-webkit-font-smoothing: antialiased}.ui-mdpc *, .ui-mdpc *::before, .ui-mdpc *::after{box-sizing: border-box}:where(.ui-mdpc) button{appearance: none;margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-mdpc button:focus-visible{outline: 2px solid var(--ui-mdpc-focus);outline-offset: 1px}.ui-mdpc svg{display: block;flex: none}.ui-mdpc b{font-weight: 500;color: var(--ui-mdpc-ink)}.ui-mdpc__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-mdpc__trigger{display: inline-flex;align-items: center;gap: 6px;max-width: 100%;height: 28px;padding: 0 6px 0 6px;border-radius: 6px;font-weight: 500;color: var(--ui-mdpc-text);white-space: nowrap;transition: background-color 160ms ease, color 160ms ease}.ui-mdpc__trigger:hover, .ui-mdpc[data-open] .ui-mdpc__trigger{background: var(--ui-mdpc-wash);color: var(--ui-mdpc-ink)}.ui-mdpc__trigger .ui-mdpc__glyph{width: 18px;height: 18px;border-radius: 5px;font-size: 10px}.ui-mdpc__trigger .ui-mdpc__glyph > svg{width: 10px;height: 10px}.ui-mdpc__name{display: grid;min-width: 0}.ui-mdpc__chevron{margin-left: -2px;color: var(--ui-mdpc-icon);transition: transform 300ms var(--ui-mdpc-ease)}.ui-mdpc[data-open] .ui-mdpc__chevron{transform: rotate(180deg)}.ui-mdpc__flag{display: grid;grid-template-columns: 0fr;margin-left: -6px;opacity: 0;color: var(--ui-mdpc-accent);transition: grid-template-columns 360ms var(--ui-mdpc-ease), margin 360ms var(--ui-mdpc-ease), opacity 220ms ease}.ui-mdpc__flag > span{min-width: 0;overflow: hidden}.ui-mdpc__flag[data-on]{grid-template-columns: 1fr;margin-left: -2px;opacity: 1;transition: grid-template-columns 360ms var(--ui-mdpc-ease), margin 360ms var(--ui-mdpc-ease), opacity 280ms ease 80ms}.ui-mdpc__glyph{display: grid;flex: none;place-items: center;width: 20px;height: 20px;overflow: hidden;border-radius: 5px;background: var(--ui-mdpc-card);box-shadow: var(--ui-mdpc-shadow-tile);font-size: 10px;font-weight: 500;line-height: 1;color: var(--ui-mdpc-strong)}.ui-mdpc__glyph > svg, .ui-mdpc__glyph > img{width: 12px;height: 12px}.ui-mdpc__pop{position: absolute;z-index: 30;top: calc(100% + 6px);left: 0;width: min(320px, calc(100vw - 32px));container-type: inline-size;border-radius: 10px;background: var(--ui-mdpc-card);box-shadow: var(--ui-mdpc-shadow-pop);transform-origin: top left;opacity: 0;visibility: hidden;transform: translateY(-4px) scale(0.96);transition: opacity 160ms ease, transform 220ms var(--ui-mdpc-ease), visibility 0s linear 220ms}.ui-mdpc[data-align="end"] .ui-mdpc__pop{left: auto;right: 0;transform-origin: top right}.ui-mdpc[data-side="top"] .ui-mdpc__pop{top: auto;bottom: calc(100% + 6px);transform-origin: bottom left;transform: translateY(4px) scale(0.96)}.ui-mdpc[data-side="top"][data-align="end"] .ui-mdpc__pop{transform-origin: bottom right}.ui-mdpc[data-open] .ui-mdpc__pop{opacity: 1;visibility: visible;transform: none;transition: opacity 200ms ease, transform 320ms var(--ui-mdpc-ease), visibility 0s}.ui-mdpc__card{padding: 4px}.ui-mdpc__head{display: flex;align-items: center;justify-content: space-between;gap: 12px;height: 28px;padding: 4px 8px 0;font-size: 10px;font-weight: 500;line-height: 16px;letter-spacing: 0.5px;text-transform: uppercase;color: var(--ui-mdpc-muted)}.ui-mdpc__cols{display: grid;grid-template-columns: repeat(3, 40px);gap: 8px}.ui-mdpc__cols > span{display: flex;justify-content: center;white-space: nowrap}.ui-mdpc__list{display: grid;gap: 0;border-radius: 6px;outline: none}.ui-mdpc__option{display: flex;align-items: center;gap: 10px;min-height: 44px;padding: 6px 8px;border-radius: 6px;cursor: pointer;transition: background-color 90ms ease-out, opacity 200ms ease}.ui-mdpc__list[data-pointing] .ui-mdpc__option[data-active]{background: var(--ui-mdpc-fill)}.ui-mdpc__list:focus-visible{outline: none}.ui-mdpc__list:focus-visible .ui-mdpc__option[data-active]{background: var(--ui-mdpc-fill);box-shadow: inset 0 0 0 1px var(--ui-mdpc-focus)}.ui-mdpc__list[data-pointing] .ui-mdpc__option:not([data-active]){opacity: 0.55}.ui-mdpc__text{display: grid;flex: 1;min-width: 0}.ui-mdpc__title{display: flex;align-items: center;gap: 4px;min-width: 0;font-weight: 500;color: var(--ui-mdpc-strong)}.ui-mdpc__title-name{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-mdpc__check{color: var(--ui-mdpc-accent);animation: ui-mdpc-pop 320ms var(--ui-mdpc-ease) both}.ui-mdpc__desc{overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-mdpc-text);white-space: nowrap;text-overflow: ellipsis}.ui-mdpc__bars{display: grid;flex: none;grid-template-columns: repeat(3, 40px);gap: 8px}.ui-mdpc__meter{display: grid;grid-template-columns: repeat(5, 1fr);gap: 2px;height: 4px}.ui-mdpc__seg{border-radius: 1px;background: var(--ui-mdpc-bar-off);transition: background-color 180ms ease, transform 260ms var(--ui-mdpc-ease)}.ui-mdpc__seg[data-on]{background: var(--ui-mdpc-bar)}.ui-mdpc__option[data-lit] .ui-mdpc__seg[data-on]{background: var(--ui-mdpc-accent);transition-delay: calc(var(--c) * 70ms + var(--s) * 45ms);animation: ui-mdpc-fill 360ms var(--ui-mdpc-ease) both;animation-delay: calc(var(--c) * 70ms + var(--s) * 45ms)}.ui-mdpc__varies{flex: none;width: 136px;font-size: 12px;line-height: 16px;color: var(--ui-mdpc-muted);text-align: center}.ui-mdpc__settings{margin: 4px -4px 0;padding: 4px 4px 0;border-top: 0.5px solid var(--ui-mdpc-line)}.ui-mdpc__toggle{display: flex;align-items: center;gap: 10px;width: 100%;height: 32px;padding: 0 8px;border-radius: 6px;color: var(--ui-mdpc-ink);transition: background-color 90ms ease-out}.ui-mdpc__toggle:hover{background: var(--ui-mdpc-fill)}.ui-mdpc__toggle-icon{display: grid;flex: none;place-items: center;width: 20px;color: var(--ui-mdpc-icon);transition: color 200ms ease}.ui-mdpc__toggle[aria-checked="true"] .ui-mdpc__toggle-icon{color: var(--ui-mdpc-ink)}.ui-mdpc__toggle-label{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-mdpc__switch{position: relative;flex: none;width: 26px;height: 16px;border-radius: 5px;background: var(--ui-mdpc-switch);transition: background-color 220ms ease}.ui-mdpc__switch::after{content: "";position: absolute;top: 2px;left: 2px;width: 12px;height: 12px;border-radius: 3.5px;background: var(--ui-mdpc-knob);box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.16);transition: transform 280ms var(--ui-mdpc-ease)}.ui-mdpc__toggle[aria-checked="true"] .ui-mdpc__switch{background: var(--ui-mdpc-accent)}.ui-mdpc__toggle[aria-checked="true"] .ui-mdpc__switch::after{transform: translateX(10px)}.ui-mdpc__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 420ms var(--ui-mdpc-ease), opacity 220ms ease}.ui-mdpc__fold[data-open]{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows 420ms var(--ui-mdpc-ease), opacity 320ms ease 100ms}.ui-mdpc__clip{min-height: 0;overflow: hidden}.ui-mdpc__effort{display: flex;align-items: center;gap: 10px;padding: 2px 8px 6px 38px}.ui-mdpc__effort-label{flex: 1;min-width: 0;color: var(--ui-mdpc-text)}.ui-mdpc__segmented{position: relative;display: flex;flex: none;gap: 4px}.ui-mdpc__thumb{position: absolute;top: 0;bottom: 0;left: 0;width: var(--w, 0);border-radius: 5px;background: var(--ui-mdpc-fill);transform: translateX(var(--x, 0));transition: transform 220ms var(--ui-mdpc-ease), width 220ms var(--ui-mdpc-ease)}.ui-mdpc__seg-btn{position: relative;height: 22px;padding: 0 7px;border-radius: 5px;box-shadow: inset 0 0 0 0.5px var(--ui-mdpc-line);font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-mdpc-text);text-align: center !important;transition: color 160ms ease, background-color 160ms ease}.ui-mdpc__seg-btn[aria-checked="true"]{color: var(--ui-mdpc-ink)}.ui-mdpc__seg-btn[aria-checked="false"]:hover{background: var(--ui-mdpc-wash);color: var(--ui-mdpc-ink)}.ui-mdpc__foot{display: flex;align-items: center;gap: 8px;height: 36px;padding: 0 8px 0 12px;border-top: 0.5px solid var(--ui-mdpc-line)}.ui-mdpc__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-mdpc-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-mdpc__dot{color: var(--ui-mdpc-faint)}.ui-mdpc__swap{display: grid;min-width: 0}.ui-mdpc__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;animation: ui-mdpc-swap-in 320ms ease both}.ui-mdpc__swap-item[data-out]{animation: ui-mdpc-swap-out 220ms ease both}.ui-mdpc__keys{display: flex;flex: none;gap: 2px}.ui-mdpc__keys kbd{display: grid;place-items: center;min-width: 20px;height: 20px;padding: 0 5px;border-radius: 5px;box-shadow: inset 0 0 0 0.5px var(--ui-mdpc-line-strong);font-family: inherit;font-size: 11px;font-weight: 500;line-height: 16px;color: var(--ui-mdpc-muted)}@keyframes ui-mdpc-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-mdpc-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@keyframes ui-mdpc-pop{from{opacity: 0;transform: scale(0.6)}}@keyframes ui-mdpc-fill{0%{transform: scaleY(1)}45%{transform: scaleY(1.6)}100%{transform: scaleY(1)}}@container (max-width: 300px){.ui-mdpc__option .ui-mdpc__glyph{display: none}.ui-mdpc__keys{display: none}.ui-mdpc__effort{padding-left: 8px}}@media (pointer: coarse){.ui-mdpc__trigger{height: 34px}.ui-mdpc__option{min-height: 52px}.ui-mdpc__toggle{height: 40px}.ui-mdpc__seg-btn{height: 30px;padding: 0 10px}.ui-mdpc__keys{display: none}}@media (prefers-reduced-motion: reduce){.ui-mdpc *, .ui-mdpc *::before, .ui-mdpc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-mdpc{--ui-mdpc-card: #1c1c1e;--ui-mdpc-strong: #ffffff;--ui-mdpc-ink: rgba(255, 255, 255, 0.9);--ui-mdpc-text: rgba(255, 255, 255, 0.62);--ui-mdpc-muted: rgba(255, 255, 255, 0.46);--ui-mdpc-faint: rgba(255, 255, 255, 0.3);--ui-mdpc-icon: rgba(255, 255, 255, 0.5);--ui-mdpc-line: rgba(255, 255, 255, 0.08);--ui-mdpc-line-strong: rgba(255, 255, 255, 0.12);--ui-mdpc-fill: rgba(255, 255, 255, 0.08);--ui-mdpc-wash: rgba(255, 255, 255, 0.04);--ui-mdpc-bar: rgba(255, 255, 255, 0.24);--ui-mdpc-bar-off: rgba(255, 255, 255, 0.08);--ui-mdpc-switch: rgba(255, 255, 255, 0.14);--ui-mdpc-knob: #ffffff;--ui-mdpc-accent: #4d8dff;--ui-mdpc-focus: rgba(77, 141, 255, 0.5);--ui-mdpc-shadow-tile: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 1px 2px rgba(0, 0, 0, 0.4);--ui-mdpc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 28px -10px rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-mdpc__glyph{background: #2a2a2d}`;
var v = [{ id: `opus`, name: `Opus 5.5`, description: `Hardest problems`, speed: 2, quality: 5, cost: 5, latencyMs: 2100, pricePerM: 25 }, { id: `sonnet`, name: `Sonnet 5.5`, description: `Everyday work`, speed: 4, quality: 4, cost: 3, latencyMs: 900, pricePerM: 15 }, { id: `haiku`, name: `Haiku 5.5`, description: `Quick and light`, speed: 5, quality: 3, cost: 1, latencyMs: 400, pricePerM: 4 }, { id: `auto`, name: `Auto`, description: `Picks per message`, icon: (0, r.jsx)(() => (0, r.jsx)(`svg`, { viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M6 1.5 7.1 4.9 10.5 6 7.1 7.1 6 10.5 4.9 7.1 1.5 6 4.9 4.9Z`, fill: `currentColor` }) }), {}) }];
function y() {
  let e = (0, n3.useRef)(null), [t, i2] = (0, n3.useState)(0), [a2, o2] = (0, n3.useState)(false), s2 = (0, n3.useRef)(false), c2 = (0, n3.useRef)(false);
  (0, n3.useEffect)(() => {
    let t2 = (t3) => e.current?.querySelector(t3) ?? null, n4 = (e2, t3, n5 = {}) => {
      e2 && (c2.current = true, e2.dispatchEvent(new PointerEvent(t3, { bubbles: true, pointerType: `mouse`, ...n5 })), c2.current = false);
    }, r2 = (e2) => t2(`.ui-mdpc__option:nth-child(${e2})`), a3 = (e2) => () => n4(r2(e2), `pointerover`), l3 = () => n4(t2(`.ui-mdpc__option[data-active]`), `pointerout`, { relatedTarget: t2(`.ui-mdpc__settings`) }), u2 = [[700, () => o2(true)], [800, a3(1)], [2800, a3(3)], [1200, a3(1)], [1300, () => {
      l3(), t2(`.ui-mdpc__toggle`)?.click();
    }], [1400, () => t2(`[data-effort="high"]`)?.click()], [1400, a3(1)], [1100, () => r2(1)?.click()], [3200, () => i2((e2) => e2 + 1)]], d2 = 0, f2 = 0, p2 = () => {
      s2.current || d2 >= u2.length || (f2 = window.setTimeout(() => {
        s2.current || (u2[d2][1](), d2++, p2());
      }, u2[d2][0]));
    };
    return p2(), () => window.clearTimeout(f2);
  }, [t]);
  let l2 = () => {
    c2.current || (s2.current = true);
  };
  return (0, r.jsx)(`div`, { ref: e, className: `mdp-demo mdp-demo--clean`, onPointerEnter: l2, onPointerDownCapture: l2, onKeyDownCapture: l2, onFocusCapture: l2, onClick: (e2) => e2.target.closest(`.ui-mdpc__pop`) && e2.stopPropagation(), children: (0, r.jsxs)(`div`, { className: `mdp-demo__composer`, children: [(0, r.jsx)(`div`, { className: `mdp-demo__text`, children: `Ask anything\u2026` }), (0, r.jsxs)(`div`, { className: `mdp-demo__bar`, children: [(0, r.jsx)(_, { models: v, defaultValue: `sonnet`, open: a2, onOpenChange: o2 }, t), (0, r.jsx)(`span`, { className: `mdp-demo__send`, "aria-hidden": `true`, children: (0, r.jsx)(`svg`, { width: `16`, height: `16`, viewBox: `0 0 14 14`, fill: `none`, children: (0, r.jsx)(`path`, { d: `M7 11.5v-9M3.2 6.3 7 2.5l3.8 3.8`, stroke: `currentColor`, strokeWidth: `1.3`, strokeLinecap: `round`, strokeLinejoin: `round` }) }) })] })] }) });
}

export {
  y
};
