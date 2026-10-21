import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-C580yDTY.js
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
  }, [s2]), (0, r.jsxs)(`span`, { className: `ui-mdp__swap`, children: [s2 && (0, r.jsx)(`span`, { className: `ui-mdp__swap-item`, "data-out": ``, "aria-hidden": `true`, children: s2.node }, `out-${s2.id}`), (0, r.jsx)(`span`, { className: `ui-mdp__swap-item`, children: t }, e)] });
}
var m = { stroke: `currentColor`, strokeWidth: 1.4, strokeLinecap: `round`, strokeLinejoin: `round` };
var ee = () => (0, r.jsx)(`svg`, { className: `ui-mdp__chevron`, width: `12`, height: `12`, viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `m3 4.5 3 3 3-3`, ...m }) });
var te = () => (0, r.jsx)(`svg`, { className: `ui-mdp__check`, width: `14`, height: `14`, viewBox: `0 0 14 14`, fill: `none`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `m3.4 7.3 2.4 2.4 4.8-5.2`, ...m, strokeWidth: 1.6 }) });
var h = () => (0, r.jsx)(`svg`, { width: `14`, height: `14`, viewBox: `0 0 14 14`, fill: `none`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M5.3 10.6h3.4M5.8 12.3h2.4M7 1.7a3.9 3.9 0 0 0-2.3 7c.4.3.6.7.6 1.1v.1h3.4v-.1c0-.4.2-.8.6-1.1A3.9 3.9 0 0 0 7 1.7Z`, ...m }) });
var ne = () => (0, r.jsxs)(`svg`, { width: `14`, height: `14`, viewBox: `0 0 14 14`, fill: `none`, "aria-hidden": `true`, children: [(0, r.jsx)(`circle`, { cx: `7`, cy: `7`, r: `5.3`, ...m }), (0, r.jsx)(`path`, { d: `M1.9 7h10.2M7 1.7c1.4 1.5 2 3.3 2 5.3s-.6 3.8-2 5.3c-1.4-1.5-2-3.3-2-5.3s.6-3.8 2-5.3Z`, ...m })] });
function g({ model: e }) {
  return (0, r.jsx)(`span`, { className: `ui-mdp__glyph`, "aria-hidden": `true`, children: e.icon ?? e.name.trim().charAt(0).toUpperCase() });
}
function _({ models: e, value: t, defaultValue: s2, onChange: c2, thinking: m2, defaultThinking: _2 = false, onThinkingChange: v2, webSearch: y2, defaultWebSearch: ie = false, onWebSearchChange: ae, effort: oe, defaultEffort: se = `medium`, onEffortChange: b, open: x, defaultOpen: S = false, onOpenChange: ce, align: C = `start`, side: le = `bottom`, className: ue }) {
  let w = (0, n3.useId)(), T = (0, n3.useRef)(null), E = (0, n3.useRef)(null), D = (0, n3.useRef)(null), [de, fe] = (0, n3.useState)(s2 ?? e[0]?.id), [pe, me] = (0, n3.useState)(_2), [he, ge] = (0, n3.useState)(ie), [_e, ve] = (0, n3.useState)(se), [ye, be] = (0, n3.useState)(S), O = t ?? de, k = m2 ?? pe, A = y2 ?? he, j = oe ?? _e, M = x ?? ye, N = Math.max(0, e.findIndex((e2) => e2.id === O)), P = e[N], [F, I] = (0, n3.useState)(N), [L, R] = (0, n3.useState)(false), [xe, z] = (0, n3.useState)(null), B = e[L ? F : N] ?? P, V = (e2, t2) => {
    e2 !== M && (e2 ? (I(N), R(false)) : z(null), be(e2), ce?.(e2)), t2 === `list` && requestAnimationFrame(() => D.current?.focus({ preventScroll: true })), t2 === `trigger` && E.current?.focus({ preventScroll: true });
  }, H = (0, n3.useRef)(M);
  (0, n3.useEffect)(() => {
    M && !H.current && (I(N), R(false)), H.current = M;
  }, [M, N]);
  let U = (0, n3.useRef)(null), [W, Se] = (0, n3.useState)(0);
  (0, n3.useLayoutEffect)(() => {
    if (!M) return;
    let e2 = () => {
      let e3 = E.current?.getBoundingClientRect(), t2 = U.current?.offsetWidth ?? 0;
      if (!e3 || !t2) return;
      let n4 = document.documentElement.clientWidth, r2 = C === `end` ? e3.right - t2 : e3.left;
      Se(r2 < 12 ? 12 - r2 : r2 + t2 > n4 - 12 ? Math.min(0, n4 - 12 - (r2 + t2)) : 0);
    };
    return e2(), window.addEventListener(`resize`, e2), () => window.removeEventListener(`resize`, e2);
  }, [M, C]), (0, n3.useEffect)(() => {
    if (!M) return;
    let e2 = (e3) => {
      T.current?.contains(e3.target) || V(false);
    };
    return document.addEventListener(`pointerdown`, e2), () => document.removeEventListener(`pointerdown`, e2);
  });
  let Ce = () => T.current?.contains(document.activeElement) ?? false, G = (t2) => {
    let n4 = e[t2];
    n4 && (fe(n4.id), n4.id !== O && c2?.(n4.id), V(false, Ce() ? `trigger` : void 0));
  }, we = () => {
    me(!k), v2?.(!k);
  }, Te = () => {
    ge(!A), ae?.(!A);
  }, K = (e2) => {
    ve(e2), e2 !== j && b?.(e2);
  }, Ee = (e2) => {
    (e2.key === `ArrowDown` || e2.key === `ArrowUp`) && (e2.preventDefault(), V(true, `list`));
  }, q = (t2) => {
    let n4 = e.length;
    if (!n4) return;
    let r2 = (e2) => {
      t2.preventDefault(), I((e2 % n4 + n4) % n4), R(true);
    };
    t2.key === `ArrowDown` ? r2(F + 1) : t2.key === `ArrowUp` ? r2(F - 1) : t2.key === `Home` ? r2(0) : t2.key === `End` ? r2(n4 - 1) : (t2.key === `Enter` || t2.key === ` `) && (t2.preventDefault(), G(F));
  }, De = (e2) => {
    let t2 = i.findIndex((e3) => e3.id === j), n4 = e2.key === `ArrowRight` || e2.key === `ArrowDown` ? 1 : e2.key === `ArrowLeft` || e2.key === `ArrowUp` ? -1 : 0;
    if (!n4) return;
    e2.preventDefault();
    let r2 = i[(t2 + n4 + i.length) % i.length];
    K(r2.id), T.current?.querySelector(`[data-effort="${r2.id}"]`)?.focus();
  }, Oe = (e2) => {
    e2.key === `Escape` && M && (e2.stopPropagation(), V(false, `trigger`));
  }, ke = k ? a[j] : 1, J = (B?.latencyMs ?? 0) * ke, Y = B?.pricePerM ?? 0, X = f({ latency: J, price: Y }, 560), Ae = B?.latencyMs !== void 0 || B?.pricePerM !== void 0, Z, Q, $;
  if (xe === `search`) Z = A ? `Looks things up on the web when it helps` : `Answers from what it already knows`, Q = `search-${A}`, $ = Z;
  else if (!Ae) Z = B?.description ?? B?.name ?? ``, Q = `plain-${B?.id}`, $ = `${B?.name ?? ``}: ${Z}`;
  else {
    let e2 = [], t2 = [];
    B.latencyMs !== void 0 && (e2.push((0, r.jsxs)(`span`, { children: [`~`, (0, r.jsx)(`b`, { children: u(X.latency ?? J) }), ` first token`] }, `l`)), t2.push(`about ${u(J)} to the first token`)), B.pricePerM !== void 0 && (e2.push((0, r.jsxs)(`span`, { children: [(0, r.jsx)(`b`, { children: d(X.price ?? Y, Y) }), ` / M tokens`] }, `p`)), t2.push(`${d(Y, Y)} per million tokens`)), Z = e2.flatMap((e3, t3) => t3 ? [(0, r.jsx)(`span`, { className: `ui-mdp__dot`, children: ` \xB7 ` }, `d${t3}`), e3] : [e3]), Q = `stats`, $ = `${B.name}: ${t2.join(`, `)}`;
  }
  let je = e[F] ? `${w}-opt-${e[F].id}` : void 0;
  return (0, r.jsxs)(`div`, { ref: T, className: [`ui-mdp`, ue].filter(Boolean).join(` `), "data-open": M ? `` : void 0, "data-align": C, "data-side": le, onKeyDown: Oe, onBlur: (e2) => {
    M && e2.relatedTarget && !T.current?.contains(e2.relatedTarget) && V(false);
  }, children: [(0, r.jsx)(`style`, { href: `ui-model-picker`, precedence: `default`, children: re }), (0, r.jsxs)(`button`, { ref: E, type: `button`, className: `ui-mdp__trigger`, "aria-haspopup": `dialog`, "aria-expanded": M, "aria-controls": `${w}-menu`, "aria-label": `Model: ${P?.name ?? `none`}${k ? `, extended thinking` : ``}`, onClick: () => V(!M, M ? void 0 : `list`), onKeyDown: Ee, children: [P && (0, r.jsx)(g, { model: P }), (0, r.jsx)(`span`, { className: `ui-mdp__name`, children: (0, r.jsx)(p, { id: P?.id ?? `none`, children: P?.name ?? `Choose a model` }) }), (0, r.jsx)(`span`, { className: `ui-mdp__flag`, "data-on": k ? `` : void 0, "aria-hidden": `true`, children: (0, r.jsx)(`span`, { children: (0, r.jsx)(h, {}) }) }), (0, r.jsx)(ee, {})] }), (0, r.jsxs)(`div`, { id: `${w}-menu`, ref: U, className: `ui-mdp__pop`, style: W ? { translate: `${W}px 0` } : void 0, role: `dialog`, "aria-label": `Model settings`, inert: !M, children: [(0, r.jsxs)(`div`, { className: `ui-mdp__card`, children: [(0, r.jsxs)(`div`, { className: `ui-mdp__head`, "aria-hidden": `true`, children: [(0, r.jsx)(`span`, { children: `Model` }), (0, r.jsx)(`span`, { className: `ui-mdp__cols`, children: o.map((e2) => (0, r.jsx)(`span`, { children: e2.label }, e2.key)) })] }), (0, r.jsx)(`div`, { ref: D, className: `ui-mdp__list`, role: `listbox`, "aria-label": `Model`, tabIndex: 0, "aria-activedescendant": M ? je : void 0, "data-pointing": L ? `` : void 0, onKeyDown: q, onPointerLeave: () => R(false), children: e.map((e2, t2) => {
    let n4 = e2.speed !== void 0 || e2.quality !== void 0 || e2.cost !== void 0;
    return (0, r.jsxs)(`div`, { id: `${w}-opt-${e2.id}`, role: `option`, "aria-selected": t2 === N, "aria-label": `${e2.name}${e2.description ? `, ${e2.description}` : ``}${n4 ? `. Speed ${e2.speed ?? 0}, quality ${e2.quality ?? 0}, cost ${e2.cost ?? 0} of 5` : ``}`, className: `ui-mdp__option`, "data-active": t2 === F ? `` : void 0, "data-lit": e2.id === B?.id ? `` : void 0, onPointerEnter: (e3) => {
      e3.pointerType === `mouse` && (I(t2), R(true));
    }, onClick: () => G(t2), children: [(0, r.jsx)(g, { model: e2 }), (0, r.jsxs)(`span`, { className: `ui-mdp__text`, children: [(0, r.jsxs)(`span`, { className: `ui-mdp__title`, children: [(0, r.jsx)(`span`, { className: `ui-mdp__title-name`, children: e2.name }), t2 === N && (0, r.jsx)(te, {})] }), e2.description && (0, r.jsx)(`span`, { className: `ui-mdp__desc`, children: e2.description })] }), n4 ? (0, r.jsx)(`span`, { className: `ui-mdp__bars`, "aria-hidden": `true`, children: o.map((t3, n5) => {
      let i2 = l(e2[t3.key] ?? 0);
      return (0, r.jsx)(`span`, { className: `ui-mdp__meter`, style: { "--c": n5 }, children: [0, 1, 2, 3, 4].map((e3) => (0, r.jsx)(`span`, { className: `ui-mdp__seg`, "data-on": e3 < i2 ? `` : void 0, style: { "--s": e3 } }, e3)) }, t3.key);
    }) }) : (0, r.jsx)(`span`, { className: `ui-mdp__varies`, "aria-hidden": `true`, children: `Varies` })] }, e2.id);
  }) }), (0, r.jsxs)(`div`, { className: `ui-mdp__settings`, children: [(0, r.jsxs)(`button`, { type: `button`, role: `switch`, "aria-checked": k, className: `ui-mdp__toggle`, onClick: we, children: [(0, r.jsx)(`span`, { className: `ui-mdp__toggle-icon`, children: (0, r.jsx)(h, {}) }), (0, r.jsx)(`span`, { className: `ui-mdp__toggle-label`, children: `Extended thinking` }), (0, r.jsx)(`span`, { className: `ui-mdp__switch`, "aria-hidden": `true` })] }), (0, r.jsx)(`div`, { className: `ui-mdp__fold`, "data-open": k ? `` : void 0, inert: !k, children: (0, r.jsx)(`div`, { className: `ui-mdp__clip`, children: (0, r.jsxs)(`div`, { className: `ui-mdp__effort`, children: [(0, r.jsx)(`span`, { className: `ui-mdp__effort-label`, id: `${w}-effort`, children: `Effort` }), (0, r.jsxs)(`div`, { className: `ui-mdp__segmented`, role: `radiogroup`, "aria-labelledby": `${w}-effort`, style: { "--i": i.findIndex((e2) => e2.id === j) }, onKeyDown: De, children: [(0, r.jsx)(`span`, { className: `ui-mdp__thumb`, "aria-hidden": `true` }), i.map((e2) => (0, r.jsx)(`button`, { type: `button`, role: `radio`, "aria-checked": e2.id === j, tabIndex: e2.id === j ? 0 : -1, "data-effort": e2.id, className: `ui-mdp__seg-btn`, onClick: () => K(e2.id), children: e2.label }, e2.id))] })] }) }) }), (0, r.jsxs)(`button`, { type: `button`, role: `switch`, "aria-checked": A, className: `ui-mdp__toggle`, onClick: Te, onPointerEnter: (e2) => e2.pointerType === `mouse` && z(`search`), onPointerLeave: () => z(null), onFocus: () => z(`search`), onBlur: () => z(null), children: [(0, r.jsx)(`span`, { className: `ui-mdp__toggle-icon`, children: (0, r.jsx)(ne, {}) }), (0, r.jsx)(`span`, { className: `ui-mdp__toggle-label`, children: `Web search` }), (0, r.jsx)(`span`, { className: `ui-mdp__switch`, "aria-hidden": `true` })] })] })] }), (0, r.jsxs)(`div`, { className: `ui-mdp__foot`, children: [(0, r.jsx)(`span`, { className: `ui-mdp__caption`, "aria-hidden": `true`, children: (0, r.jsx)(p, { id: Q, children: Z }) }), (0, r.jsxs)(`span`, { className: `ui-mdp__keys`, "aria-hidden": `true`, children: [(0, r.jsx)(`kbd`, { children: `\u2191\u2193` }), (0, r.jsx)(`kbd`, { children: `\u21B5` })] }), (0, r.jsx)(`span`, { className: `ui-mdp__sr`, "aria-live": `polite`, children: M ? $ : `` })] })] })] });
}
var re = `.ui-mdp{--ui-mdp-tray: #f0f0f0;--ui-mdp-card: #ffffff;--ui-mdp-line: #ececec;--ui-mdp-ink: #171717;--ui-mdp-text: #404040;--ui-mdp-muted: #8f8f8f;--ui-mdp-well: #f4f4f5;--ui-mdp-bar: #d4d4d9;--ui-mdp-bar-off: #e6e6ea;--ui-mdp-switch: #dcdce0;--ui-mdp-knob: #ffffff;--ui-mdp-focus: rgba(23, 23, 23, 0.22);--ui-mdp-ease: cubic-bezier(0.32, 0.72, 0.24, 1);position: relative;display: inline-block;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;color: var(--ui-mdp-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-mdp *, .ui-mdp *::before, .ui-mdp *::after{box-sizing: border-box}:where(.ui-mdp) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-mdp button:focus-visible, .ui-mdp__list:focus-visible{outline: 2px solid var(--ui-mdp-focus);outline-offset: 2px}.ui-mdp svg{display: block;flex: none}.ui-mdp b{font-weight: 500;color: var(--ui-mdp-ink)}.ui-mdp__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-mdp__trigger{display: inline-flex;align-items: center;gap: 7px;max-width: 100%;height: 30px;padding: 0 8px 0 6px;border-radius: 10px;font-weight: 500;color: var(--ui-mdp-ink);white-space: nowrap;transition: background-color 160ms ease}.ui-mdp__trigger:hover, .ui-mdp[data-open] .ui-mdp__trigger{background: var(--ui-mdp-well)}.ui-mdp__trigger .ui-mdp__glyph{width: 18px;height: 18px}.ui-mdp__name{display: grid;min-width: 0}.ui-mdp__chevron{color: var(--ui-mdp-muted);transition: transform 300ms var(--ui-mdp-ease)}.ui-mdp[data-open] .ui-mdp__chevron{transform: rotate(180deg)}.ui-mdp__flag{display: grid;grid-template-columns: 0fr;margin-left: -7px;opacity: 0;color: var(--ui-mdp-muted);transition: grid-template-columns 360ms var(--ui-mdp-ease), margin 360ms var(--ui-mdp-ease), opacity 220ms ease}.ui-mdp__flag > span{min-width: 0;overflow: hidden}.ui-mdp__flag[data-on]{grid-template-columns: 1fr;margin-left: -3px;opacity: 1;transition: grid-template-columns 360ms var(--ui-mdp-ease), margin 360ms var(--ui-mdp-ease), opacity 280ms ease 80ms}.ui-mdp__glyph{display: grid;flex: none;place-items: center;width: 22px;height: 22px;overflow: hidden;border-radius: 6px;background: var(--ui-mdp-card);box-shadow: inset 0 0 0 1px var(--ui-mdp-line);font-size: 10.5px;font-weight: 600;line-height: 1;color: var(--ui-mdp-ink)}.ui-mdp__glyph > svg, .ui-mdp__glyph > img{width: 12px;height: 12px}.ui-mdp__pop{position: absolute;z-index: 30;top: calc(100% + 6px);left: 0;width: min(320px, calc(100vw - 32px));container-type: inline-size;padding: 4px;border-radius: 20px;background: var(--ui-mdp-tray);box-shadow: 0 12px 32px -12px rgba(0, 0, 0, 0.16), 0 2px 6px rgba(0, 0, 0, 0.04);transform-origin: top left;opacity: 0;visibility: hidden;transform: translateY(-4px) scale(0.96);transition: opacity 160ms ease, transform 220ms var(--ui-mdp-ease), visibility 0s linear 220ms}.ui-mdp[data-align="end"] .ui-mdp__pop{left: auto;right: 0;transform-origin: top right}.ui-mdp[data-side="top"] .ui-mdp__pop{top: auto;bottom: calc(100% + 6px);transform-origin: bottom left;transform: translateY(4px) scale(0.96)}.ui-mdp[data-side="top"][data-align="end"] .ui-mdp__pop{transform-origin: bottom right}.ui-mdp[data-open] .ui-mdp__pop{opacity: 1;visibility: visible;transform: none;transition: opacity 200ms ease, transform 320ms var(--ui-mdp-ease), visibility 0s}.ui-mdp__card{padding: 6px;border-radius: 16px;background: var(--ui-mdp-card);box-shadow: 0 0 0 1px var(--ui-mdp-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-mdp__head{display: flex;align-items: center;justify-content: space-between;gap: 12px;height: 24px;padding: 0 10px;font-size: 11px;line-height: 16px;color: var(--ui-mdp-muted)}.ui-mdp__cols{display: grid;grid-template-columns: repeat(3, 34px);gap: 8px}.ui-mdp__cols > span{display: flex;justify-content: center;white-space: nowrap}.ui-mdp__list{display: grid;gap: 1px;border-radius: 10px}.ui-mdp__option{display: flex;align-items: center;gap: 10px;min-height: 48px;padding: 6px 10px;border-radius: 10px;cursor: pointer;transition: background-color 160ms ease, opacity 220ms ease}.ui-mdp__list[data-pointing] .ui-mdp__option[data-active]{background: var(--ui-mdp-well)}.ui-mdp__list:focus-visible{outline: none}.ui-mdp__list:focus-visible .ui-mdp__option[data-active]{background: var(--ui-mdp-well);box-shadow: inset 0 0 0 1.5px var(--ui-mdp-focus)}.ui-mdp__list[data-pointing] .ui-mdp__option:not([data-active]){opacity: 0.5}.ui-mdp__text{display: grid;flex: 1;min-width: 0}.ui-mdp__title{display: flex;align-items: center;gap: 4px;min-width: 0;font-weight: 500;color: var(--ui-mdp-ink)}.ui-mdp__title-name{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-mdp__check{color: var(--ui-mdp-ink);animation: ui-mdp-pop 320ms var(--ui-mdp-ease) both}.ui-mdp__desc{overflow: hidden;font-size: 12px;line-height: 17px;color: var(--ui-mdp-muted);white-space: nowrap;text-overflow: ellipsis}.ui-mdp__bars{display: grid;flex: none;grid-template-columns: repeat(3, 34px);gap: 8px}.ui-mdp__meter{display: grid;grid-template-columns: repeat(5, 1fr);gap: 2px;height: 5px}.ui-mdp__seg{border-radius: 1.5px;background: var(--ui-mdp-bar-off);transition: background-color 180ms ease, transform 260ms var(--ui-mdp-ease)}.ui-mdp__seg[data-on]{background: var(--ui-mdp-bar)}.ui-mdp__option[data-lit] .ui-mdp__seg[data-on]{background: var(--ui-mdp-ink);transition-delay: calc(var(--c) * 70ms + var(--s) * 45ms);animation: ui-mdp-fill 360ms var(--ui-mdp-ease) both;animation-delay: calc(var(--c) * 70ms + var(--s) * 45ms)}.ui-mdp__varies{flex: none;width: 118px;font-size: 11.5px;color: var(--ui-mdp-muted);text-align: center}.ui-mdp__settings{margin-top: 6px;padding-top: 6px;border-top: 1px solid var(--ui-mdp-line)}.ui-mdp__toggle{display: flex;align-items: center;gap: 10px;width: 100%;height: 34px;padding: 0 10px;border-radius: 10px;color: var(--ui-mdp-text);transition: background-color 160ms ease}.ui-mdp__toggle:hover{background: var(--ui-mdp-well)}.ui-mdp__toggle-icon{display: grid;flex: none;place-items: center;width: 22px;color: var(--ui-mdp-muted);transition: color 200ms ease}.ui-mdp__toggle[aria-checked="true"] .ui-mdp__toggle-icon{color: var(--ui-mdp-ink)}.ui-mdp__toggle-label{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-mdp__switch{position: relative;flex: none;width: 28px;height: 16px;border-radius: 8px;background: var(--ui-mdp-switch);transition: background-color 220ms ease}.ui-mdp__switch::after{content: "";position: absolute;top: 2px;left: 2px;width: 12px;height: 12px;border-radius: 50%;background: var(--ui-mdp-knob);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);transition: transform 280ms var(--ui-mdp-ease)}.ui-mdp__toggle[aria-checked="true"] .ui-mdp__switch{background: var(--ui-mdp-ink)}.ui-mdp__toggle[aria-checked="true"] .ui-mdp__switch::after{transform: translateX(12px)}.ui-mdp__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 420ms var(--ui-mdp-ease), opacity 220ms ease}.ui-mdp__fold[data-open]{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows 420ms var(--ui-mdp-ease), opacity 320ms ease 100ms}.ui-mdp__clip{min-height: 0;overflow: hidden}.ui-mdp__effort{display: flex;align-items: center;gap: 10px;padding: 2px 10px 6px 42px}.ui-mdp__effort-label{flex: 1;min-width: 0;font-size: 12.5px;color: var(--ui-mdp-muted)}.ui-mdp__segmented{position: relative;display: grid;flex: none;grid-template-columns: repeat(3, 58px);padding: 2px;border-radius: 9px;background: var(--ui-mdp-well);box-shadow: inset 0 0 0 1px var(--ui-mdp-line)}.ui-mdp__thumb{position: absolute;top: 2px;bottom: 2px;left: 2px;width: 58px;border-radius: 7px;background: var(--ui-mdp-card);box-shadow: 0 0 0 1px var(--ui-mdp-line), 0 1px 2px rgba(0, 0, 0, 0.06);transform: translateX(calc(var(--i) * 100%));transition: transform 320ms var(--ui-mdp-ease)}.ui-mdp__seg-btn{position: relative;height: 24px;border-radius: 7px;font-size: 12px;font-weight: 500;color: var(--ui-mdp-muted);text-align: center !important;transition: color 200ms ease}.ui-mdp__seg-btn[aria-checked="true"]{color: var(--ui-mdp-ink)}.ui-mdp__seg-btn:hover{color: var(--ui-mdp-ink)}.ui-mdp__foot{display: flex;align-items: center;gap: 8px;height: 38px;padding: 4px 8px 0 12px}.ui-mdp__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-mdp-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-mdp__dot{color: var(--ui-mdp-muted)}.ui-mdp__swap{display: grid;min-width: 0}.ui-mdp__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;animation: ui-mdp-swap-in 320ms ease both}.ui-mdp__swap-item[data-out]{animation: ui-mdp-swap-out 220ms ease both}.ui-mdp__keys{display: flex;flex: none;gap: 3px}.ui-mdp__keys kbd{display: grid;place-items: center;min-width: 20px;height: 18px;padding: 0 4px;border-radius: 5px;background: var(--ui-mdp-card);box-shadow: 0 0 0 1px var(--ui-mdp-line);font-family: inherit;font-size: 10.5px;line-height: 1;color: var(--ui-mdp-muted)}@keyframes ui-mdp-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-mdp-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@keyframes ui-mdp-pop{from{opacity: 0;transform: scale(0.6)}}@keyframes ui-mdp-fill{0%{transform: scaleY(1)}45%{transform: scaleY(1.6)}100%{transform: scaleY(1)}}@container (max-width: 300px){.ui-mdp__option .ui-mdp__glyph{display: none}.ui-mdp__cols, .ui-mdp__bars{grid-template-columns: repeat(3, 30px);gap: 6px}.ui-mdp__varies{width: 102px}.ui-mdp__keys{display: none}.ui-mdp__effort{padding-left: 10px}.ui-mdp__segmented{grid-template-columns: repeat(3, 52px)}.ui-mdp__thumb{width: 52px}}@media (pointer: coarse){.ui-mdp__trigger{height: 36px}.ui-mdp__option{min-height: 54px}.ui-mdp__toggle{height: 42px}.ui-mdp__seg-btn{height: 30px}.ui-mdp__keys{display: none}}@media (prefers-reduced-motion: reduce){.ui-mdp *, .ui-mdp *::before, .ui-mdp *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-mdp{--ui-mdp-tray: #111113;--ui-mdp-card: #19191b;--ui-mdp-line: #2a2a2e;--ui-mdp-ink: #ededed;--ui-mdp-text: #c8c8cc;--ui-mdp-muted: #8b8b92;--ui-mdp-well: #222225;--ui-mdp-bar: #55555c;--ui-mdp-bar-off: #303035;--ui-mdp-switch: #3a3a40;--ui-mdp-knob: #ededed;--ui-mdp-focus: rgba(255, 255, 255, 0.3)}:where(.dark, [data-theme="dark"]) .ui-mdp__pop{box-shadow: 0 0 0 1px #222225, 0 12px 32px -12px rgba(0, 0, 0, 0.6)}:where(.dark, [data-theme="dark"]) .ui-mdp__toggle[aria-checked="true"] .ui-mdp__switch::after{background: #19191b}`;
var v = [{ id: `opus`, name: `Opus 5.5`, description: `Hardest problems`, speed: 2, quality: 5, cost: 5, latencyMs: 2100, pricePerM: 25 }, { id: `sonnet`, name: `Sonnet 5.5`, description: `Everyday work`, speed: 4, quality: 4, cost: 3, latencyMs: 900, pricePerM: 15 }, { id: `haiku`, name: `Haiku 5.5`, description: `Quick and light`, speed: 5, quality: 3, cost: 1, latencyMs: 400, pricePerM: 4 }, { id: `auto`, name: `Auto`, description: `Picks per message`, icon: (0, r.jsx)(() => (0, r.jsx)(`svg`, { viewBox: `0 0 12 12`, fill: `none`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M6 1.5 7.1 4.9 10.5 6 7.1 7.1 6 10.5 4.9 7.1 1.5 6 4.9 4.9Z`, fill: `currentColor` }) }), {}) }];
function y() {
  let e = (0, n3.useRef)(null), [t, i2] = (0, n3.useState)(0), [a2, o2] = (0, n3.useState)(false), s2 = (0, n3.useRef)(false), c2 = (0, n3.useRef)(false);
  (0, n3.useEffect)(() => {
    let t2 = (t3) => e.current?.querySelector(t3) ?? null, n4 = (e2, t3, n5 = {}) => {
      e2 && (c2.current = true, e2.dispatchEvent(new PointerEvent(t3, { bubbles: true, pointerType: `mouse`, ...n5 })), c2.current = false);
    }, r2 = (e2) => t2(`.ui-mdp__option:nth-child(${e2})`), a3 = (e2) => () => n4(r2(e2), `pointerover`), l3 = () => n4(t2(`.ui-mdp__option[data-active]`), `pointerout`, { relatedTarget: t2(`.ui-mdp__settings`) }), u2 = [[700, () => o2(true)], [800, a3(1)], [2800, a3(3)], [1200, a3(1)], [1300, () => {
      l3(), t2(`.ui-mdp__toggle`)?.click();
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
  return (0, r.jsx)(`div`, { ref: e, className: `mdp-demo`, onPointerEnter: l2, onPointerDownCapture: l2, onKeyDownCapture: l2, onFocusCapture: l2, onClick: (e2) => e2.target.closest(`.ui-mdp__pop`) && e2.stopPropagation(), children: (0, r.jsxs)(`div`, { className: `mdp-demo__composer`, children: [(0, r.jsx)(`div`, { className: `mdp-demo__text`, children: `Ask anything\u2026` }), (0, r.jsxs)(`div`, { className: `mdp-demo__bar`, children: [(0, r.jsx)(_, { models: v, defaultValue: `sonnet`, open: a2, onOpenChange: o2 }, t), (0, r.jsx)(`span`, { className: `mdp-demo__send`, "aria-hidden": `true`, children: (0, r.jsx)(`svg`, { width: `14`, height: `14`, viewBox: `0 0 14 14`, fill: `none`, children: (0, r.jsx)(`path`, { d: `M7 11.5v-9M3.2 6.3 7 2.5l3.8 3.8`, stroke: `currentColor`, strokeWidth: `1.6`, strokeLinecap: `round`, strokeLinejoin: `round` }) }) })] })] }) });
}

export {
  y
};
