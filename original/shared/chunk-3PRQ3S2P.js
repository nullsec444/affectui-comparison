import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo.clean-CtdFgWee.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [];
var a = /* @__PURE__ */ new Set();
var o = [];
var s = 0;
var c = (e) => {
  i = e, a.forEach((e2) => e2());
};
var l = (e) => (a.add(e), () => {
  a.delete(e);
});
var u = () => i;
var d = () => o;
function f(e, t, n4 = {}, r2 = false) {
  let { id: a2, ...o2 } = n4, l2 = a2 === void 0 ? void 0 : i.find((e2) => e2.id === a2 && !e2.removing);
  if (l2) return c(i.map((n5) => n5 === l2 ? { ...n5, ...o2, type: e, title: t, version: n5.version + 1 } : n5)), l2.id;
  let u2 = a2 ?? `toast-${++s}`;
  return r2 || c([...i.filter((e2) => e2.id !== u2), { ...o2, id: u2, type: e, title: t, version: 0 }]), u2;
}
var p = 420;
function m(e) {
  let t = i.filter((t2) => !t2.removing && (e === void 0 || t2.id === e));
  t.length && (c(i.map((e2) => t.includes(e2) ? { ...e2, removing: true } : e2)), t.forEach((e2) => e2.onDismiss?.(e2.id)), window.setTimeout(() => c(i.filter((e2) => !(e2.removing && t.some((t2) => t2.id === e2.id)))), p));
}
var h = (e) => typeof e == `object` && !!e && !(0, n3.isValidElement)(e) && !Array.isArray(e) && `title` in e;
var g = (e) => h(e) ? e : { title: e, description: void 0 };
function _(e, t, n4 = {}) {
  let r2 = typeof e == `function` ? e() : e, i2 = g(t.loading), a2 = f(`loading`, i2.title, { ...n4, description: i2.description }), o2 = (e2, t2) => {
    let r3 = g(t2);
    f(e2, r3.title, { ...n4, id: a2, description: r3.description }, true);
  };
  return r2.then((e2) => o2(`success`, typeof t.success == `function` ? t.success(e2) : t.success), (e2) => o2(`error`, typeof t.error == `function` ? t.error(e2) : t.error)), r2;
}
var v = Object.assign((e, t) => f(`default`, e, t), { success: (e, t) => f(`success`, e, t), error: (e, t) => f(`error`, e, t), info: (e, t) => f(`info`, e, t), loading: (e, t) => f(`loading`, e, t), promise: _, dismiss: m });
function y() {
  return (0, r.jsxs)(`svg`, { viewBox: `0 0 24 24`, className: `ui-tsc__status`, "aria-hidden": `true`, children: [(0, r.jsx)(`g`, { className: `ui-tsc__spin`, children: (0, r.jsx)(`circle`, { className: `ui-tsc__ring`, cx: `12`, cy: `12`, r: `9.25`, pathLength: 1 }) }), (0, r.jsx)(`path`, { className: `ui-tsc__mark ui-tsc__check`, d: `M8.3 12.4l2.5 2.5 4.9-5.3`, pathLength: 1 }), (0, r.jsx)(`path`, { className: `ui-tsc__mark ui-tsc__x1`, d: `M9.5 9.5l5 5`, pathLength: 1 }), (0, r.jsx)(`path`, { className: `ui-tsc__mark ui-tsc__x2`, d: `M14.5 9.5l-5 5`, pathLength: 1 }), (0, r.jsx)(`path`, { className: `ui-tsc__info`, d: `M12 11.2v4.6M12 8.2h.01` })] });
}
var b = () => (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, className: `ui-tsc__glyph`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M7.5 7.5l9 9M16.5 7.5l-9 9` }) });
var x = (e) => String(e.id);
function S({ t: e, layout: t, edge: i2, paused: a2, defaultDuration: o2, hairline: s2, closeButton: c2, onHeight: l2 }) {
  let [u2, d2] = (0, n3.useState)(false), [f2, p2] = (0, n3.useState)(false), [h2, g2] = (0, n3.useState)(null), _2 = (0, n3.useRef)(null), v2 = (0, n3.useRef)(null), S2 = (0, n3.useRef)({ title: e.title, description: e.description, version: e.version }), C2 = (0, n3.useRef)(0), w2 = (0, n3.useRef)({ version: -1, left: 0 }), T2 = (0, n3.useRef)(null), E2 = (0, n3.useRef)(false), D2 = !!e.removing;
  (0, n3.useEffect)(() => {
    let e2 = requestAnimationFrame(() => requestAnimationFrame(() => d2(true)));
    return () => cancelAnimationFrame(e2);
  }, []), (0, n3.useLayoutEffect)(() => {
    let t2 = _2.current;
    if (!t2) return;
    let n4 = x(e), r2 = () => l2(n4, t2.offsetHeight);
    r2();
    let i3 = new ResizeObserver(r2);
    return i3.observe(t2), () => i3.disconnect();
  }, []), (0, n3.useLayoutEffect)(() => {
    let t2 = S2.current;
    t2.version !== e.version && (S2.current = { title: e.title, description: e.description, version: e.version }, (t2.title !== e.title || t2.description !== e.description) && (g2(t2), window.clearTimeout(C2.current), C2.current = window.setTimeout(() => g2(null), 320)));
  }, [e.version]), (0, n3.useEffect)(() => () => window.clearTimeout(C2.current), []);
  let O2 = e.duration ?? o2, k2 = e.type !== `loading` && Number.isFinite(O2), A2 = k2 && !a2 && !f2 && !D2;
  (0, n3.useEffect)(() => {
    if (w2.current.version !== e.version && (w2.current = { version: e.version, left: O2 }), !A2) return;
    let t2 = e.version, n4 = Date.now(), r2 = window.setTimeout(() => m(e.id), Math.max(0, w2.current.left));
    return () => {
      window.clearTimeout(r2), w2.current.version === t2 && (w2.current.left -= Date.now() - n4);
    };
  }, [A2, e.version, O2, e.id]);
  let j2 = (e2) => {
    e2.button !== 0 || D2 || e2.target.closest(`button, a, input, textarea, select`) || (T2.current = { pointer: e2.pointerId, x: e2.clientX, y: e2.clientY, axis: null, samples: [] }, E2.current = false);
  }, M = (e2) => {
    let t2 = T2.current, n4 = v2.current;
    if (!t2 || t2.pointer !== e2.pointerId || !n4) return;
    let r2 = e2.clientX - t2.x, a3 = e2.clientY - t2.y;
    if (!t2.axis) {
      if (Math.hypot(r2, a3) < 6) return;
      t2.axis = Math.abs(r2) > Math.abs(a3) ? `x` : `y`, e2.currentTarget.setPointerCapture(e2.pointerId), E2.current = true, p2(true), n4.style.transition = `none`;
    }
    let o3 = t2.axis === `x` ? r2 : a3, s3 = t2.axis === `x` || o3 * i2 > 0;
    s3 || (o3 = Math.sign(o3) * Math.abs(o3) ** 0.7 * 0.6);
    let c3 = t2.axis === `x` ? n4.offsetWidth : n4.offsetHeight * 2;
    n4.style.transform = t2.axis === `x` ? `translateX(${o3}px)` : `translateY(${o3}px)`, n4.style.opacity = s3 ? String(Math.max(0.25, 1 - Math.abs(o3) / (c3 * 1.1))) : ``, t2.samples.push({ v: o3, at: e2.timeStamp }), t2.samples.length > 6 && t2.samples.shift();
  }, N = (t2) => {
    let n4 = T2.current, r2 = v2.current;
    if (!n4 || n4.pointer !== t2.pointerId || (T2.current = null, !n4.axis || !r2)) return;
    p2(false);
    let a3 = n4.samples[n4.samples.length - 1] ?? { v: 0, at: 0 }, o3 = n4.samples[0] ?? a3, s3 = a3.at > o3.at ? (a3.v - o3.v) / (a3.at - o3.at) : 0, c3 = n4.axis === `x` || a3.v * i2 > 0, l3 = Math.abs(s3) > 0.45 && Math.sign(s3) === Math.sign(a3.v);
    if (t2.type === `pointerup` && c3 && (Math.abs(a3.v) > 64 || l3)) {
      let t3 = (n4.axis === `x` ? r2.offsetWidth : r2.offsetHeight) + 48;
      r2.style.transition = `transform 300ms cubic-bezier(0.22, 1, 0.36, 1), opacity 240ms ease`, r2.style.transform = `${n4.axis === `x` ? `translateX` : `translateY`}(${Math.sign(a3.v) * t3}px)`, r2.style.opacity = `0`, m(e.id);
    } else r2.style.transition = ``, r2.style.transform = ``, r2.style.opacity = ``;
  }, P = -i2, F = `translateY(${P * t.y}px) scale(${t.scale})`;
  u2 || (F = `translateY(${i2 * 100}%) scale(${t.scale})`), D2 && (F = `translateY(${P * t.y + i2 * 10}px) scale(${t.scale * 0.96})`);
  let I = e.type === `loading` ? (0, r.jsx)(y, {}) : e.icon ?? (e.type === "default" ? null : (0, r.jsx)(y, {}));
  return (0, r.jsx)(`li`, { className: `ui-tsc__toast`, "data-toast-id": x(e), "data-type": e.type, "data-behind": t.behind || void 0, "data-removing": D2 || void 0, "data-swiping": f2 || void 0, tabIndex: 0, inert: t.hidden || D2, style: { transform: F, opacity: !u2 || D2 || t.hidden ? 0 : 1, height: t.height ? `${t.height}px` : void 0, zIndex: t.z }, onPointerDown: j2, onPointerMove: M, onPointerUp: N, onPointerCancel: N, onClickCapture: (e2) => {
    E2.current && (E2.current = false, e2.stopPropagation(), e2.preventDefault());
  }, children: (0, r.jsxs)(`div`, { ref: v2, className: `ui-tsc__swipe`, children: [(0, r.jsxs)(`div`, { className: `ui-tsc__card`, children: [(0, r.jsxs)(`div`, { ref: _2, className: `ui-tsc__content`, "data-action": e.action ? `` : void 0, children: [I && (0, r.jsx)(`span`, { className: `ui-tsc__icon`, "data-type": e.icon && e.type !== `loading` ? `custom` : e.type, children: I }), (0, r.jsxs)(`div`, { className: `ui-tsc__text`, children: [(0, r.jsxs)(`div`, { className: `ui-tsc__copy`, "data-changed": e.version > 0 || void 0, children: [(0, r.jsx)(`div`, { className: `ui-tsc__title`, children: e.title }), e.description != null && e.description !== `` && (0, r.jsx)(`div`, { className: `ui-tsc__desc`, children: e.description })] }, e.version), h2 && (0, r.jsxs)(`div`, { className: `ui-tsc__copy ui-tsc__ghost`, "aria-hidden": `true`, children: [(0, r.jsx)(`div`, { className: `ui-tsc__title`, children: h2.title }), h2.description != null && h2.description !== `` && (0, r.jsx)(`div`, { className: `ui-tsc__desc`, children: h2.description })] }, `ghost-${h2.version}`)] }), e.action && (0, r.jsx)(`button`, { type: `button`, className: `ui-tsc__action`, onClick: (t2) => {
    e.action.onClick(t2), t2.defaultPrevented || m(e.id);
  }, children: e.action.label })] }), s2 && k2 && (0, r.jsx)(`span`, { className: `ui-tsc__timer`, "aria-hidden": `true`, style: { animationDuration: `${O2}ms`, animationPlayState: A2 ? `running` : `paused` } }, e.version)] }), c2 && (0, r.jsx)(`button`, { type: `button`, className: `ui-tsc__close`, "aria-label": `Dismiss notification`, onClick: () => m(e.id), children: (0, r.jsx)(b, {}) })] }) });
}
var C = 10;
var w = 0.05;
var T = { y: 0, scale: 1, height: 0, z: 0, behind: false, hidden: true };
function E({ position: e = `bottom-right`, inline: t = false, id: i2, duration: a2 = 4e3, visibleToasts: o2 = 3, expand: s2 = false, offset: c2, gap: f2 = 10, hotkey: p2 = `F8`, hairline: h2 = true, closeButton: g2 = true, label: _2 = `Notifications`, className: v2 }) {
  let y2 = (0, n3.useSyncExternalStore)(l, u, d), [b2, E2] = (0, n3.useState)({}), [O2, k2] = (0, n3.useState)(false), [A2, j2] = (0, n3.useState)(false), [M, N] = (0, n3.useState)(false), [P, F] = (0, n3.useState)(false), [I, ee] = (0, n3.useState)(``), [te, ne] = (0, n3.useState)(``), L = (0, n3.useRef)(null), R = (0, n3.useRef)(/* @__PURE__ */ new Map()), z = (0, n3.useRef)(0), B = (0, n3.useRef)(null), V = (0, n3.useRef)(`mouse`), H = (0, n3.useRef)(/* @__PURE__ */ new Map()), [U, W] = e.split(`-`), G = U === `bottom` ? 1 : -1, K = y2.filter((e2) => (e2.toaster ?? null) === (i2 ?? null)).reverse(), q = K.filter((e2) => !e2.removing), J = s2 || O2 || A2 || M, re = O2 || A2 || M || P, Y = Math.max(1, o2), ie = (0, n3.useCallback)((e2, t2) => {
    E2((n4) => n4[e2] === t2 ? n4 : { ...n4, [e2]: t2 });
  }, []), X = q[0] && b2[x(q[0])] || z.current;
  X && (z.current = X);
  let Z = /* @__PURE__ */ new Map(), Q = 0;
  q.forEach((e2, t2) => {
    let n4 = b2[x(e2)] ?? 0, r2 = Math.min(t2, Y - 1), i3 = J ? { y: Q, scale: 1, height: n4, z: q.length - t2, behind: false, hidden: t2 >= Y } : { y: r2 * C, scale: 1 - r2 * w, height: t2 === 0 ? n4 : X, z: q.length - t2, behind: t2 > 0, hidden: t2 >= Y };
    t2 < Y && (Q += n4 + f2), Z.set(x(e2), i3), R.current.set(x(e2), i3);
  });
  let ae = Math.min(q.length, Y), oe = q.length ? J ? Math.max(0, Q - f2) : X + C * (ae - 1) : 0;
  (0, n3.useEffect)(() => {
    let e2 = new Set(K.map(x));
    E2((t2) => {
      let n4 = Object.keys(t2).filter((t3) => !e2.has(t3));
      if (!n4.length) return t2;
      let r2 = { ...t2 };
      return n4.forEach((e3) => delete r2[e3]), r2;
    }), R.current.forEach((t2, n4) => !e2.has(n4) && R.current.delete(n4)), q.length || N(false);
  }, [y2]), (0, n3.useEffect)(() => {
    let e2 = L.current;
    e2 && (q.forEach((t2) => {
      let n4 = x(t2);
      if (H.current.get(n4) === t2.version) return;
      H.current.set(n4, t2.version);
      let r2 = Array.from(e2.querySelectorAll(`[data-toast-id]`)).find((e3) => e3.dataset.toastId === n4)?.querySelector(`.ui-tsc__copy:not(.ui-tsc__ghost)`)?.textContent?.trim();
      r2 && (t2.type === `error` ? ne : ee)((e3) => e3 === r2 ? `${r2}\xA0` : r2);
    }), H.current.forEach((e3, t2) => !K.some((e4) => x(e4) === t2) && H.current.delete(t2)));
  }, [y2]), (0, n3.useEffect)(() => {
    let e2 = () => F(document.visibilityState === `hidden`);
    return e2(), document.addEventListener(`visibilitychange`, e2), () => document.removeEventListener(`visibilitychange`, e2);
  }, []), (0, n3.useEffect)(() => {
    if (!M) return;
    let e2 = (e3) => {
      L.current?.contains(e3.target) || N(false);
    };
    return document.addEventListener(`pointerdown`, e2), () => document.removeEventListener(`pointerdown`, e2);
  }, [M]);
  let $ = () => Array.from(L.current?.querySelectorAll(`[data-toast-id]:not([data-removing])`) ?? []);
  (0, n3.useEffect)(() => {
    if (!p2) return;
    let e2 = (e3) => {
      if (e3.key !== p2 && e3.code !== p2) return;
      let t2 = $().find((e4) => !e4.inert);
      t2 && (e3.preventDefault(), L.current?.contains(document.activeElement) || (B.current = document.activeElement), t2.focus());
    };
    return window.addEventListener(`keydown`, e2), () => window.removeEventListener(`keydown`, e2);
  }, [p2]);
  let se = (e2) => {
    if (e2.key !== `Escape` || !q.length) return;
    e2.preventDefault(), e2.stopPropagation();
    let t2 = e2.target.closest(`[data-toast-id]`), n4 = q.find((e3) => x(e3) === t2?.dataset.toastId) ?? q[0], r2 = q.indexOf(n4);
    m(n4.id);
    let i3 = q.filter((e3) => e3 !== n4)[Math.min(r2, q.length - 2)], a3 = i3 && $().find((e3) => e3.dataset.toastId === x(i3));
    a3 ? a3.focus() : B.current?.isConnected ? B.current.focus() : document.activeElement?.blur();
  }, ce = (e2) => {
    e2.target.matches(`:focus-visible`) && j2(true);
  }, le = (e2) => {
    e2.currentTarget.contains(e2.relatedTarget) || j2(false);
  }, ue = { "--ui-tsc-offset": c2 === void 0 ? void 0 : `${c2}px` };
  return (0, r.jsxs)(`section`, { ref: L, className: [`ui-tsc`, v2].filter(Boolean).join(` `), "data-y": U, "data-x": W, "data-inline": t || void 0, "data-expanded": J || void 0, "data-empty": !q.length || void 0, "aria-label": p2 ? `${_2} (${p2})` : _2, tabIndex: -1, style: ue, onKeyDown: se, onFocus: ce, onBlur: le, onPointerDownCapture: (e2) => V.current = e2.pointerType, onPointerEnter: (e2) => e2.pointerType === `mouse` && k2(true), onPointerLeave: (e2) => e2.pointerType === `mouse` && k2(false), onClick: () => V.current !== `mouse` && q.length > 1 && N(true), children: [(0, r.jsx)(`style`, { href: `ui-toaster-clean`, precedence: `default`, children: D }), (0, r.jsx)(`ol`, { className: `ui-tsc__list`, style: { height: `${oe}px` }, children: K.map((e2) => (0, r.jsx)(S, { t: e2, layout: Z.get(x(e2)) ?? R.current.get(x(e2)) ?? T, edge: G, paused: re || (Z.get(x(e2))?.hidden ?? false), defaultDuration: a2, hairline: h2, closeButton: g2, onHeight: ie }, x(e2))) }), (0, r.jsx)(`div`, { className: `ui-tsc__sr`, role: `status`, "aria-live": `polite`, children: I }), (0, r.jsx)(`div`, { className: `ui-tsc__sr`, role: `alert`, children: te })] });
}
var D = `.ui-tsc{--ui-tsc-card: #ffffff;--ui-tsc-strong: #000000;--ui-tsc-ink: rgba(0, 0, 0, 0.88);--ui-tsc-text: rgba(0, 0, 0, 0.61);--ui-tsc-icon: rgba(0, 0, 0, 0.447);--ui-tsc-faint: rgba(0, 0, 0, 0.27);--ui-tsc-hairline: rgba(0, 0, 0, 0.1);--ui-tsc-success: #1a9a52;--ui-tsc-danger: #e5484d;--ui-tsc-accent: rgba(0, 96, 226, 0.765);--ui-tsc-focus: rgba(0, 96, 226, 0.35);--ui-tsc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-tsc-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.07);--ui-tsc-shadow-float: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 10px 24px -10px rgba(0, 0, 0, 0.14);--ui-tsc-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-tsc-width: 356px;--ui-tsc-offset: 24px;position: fixed;z-index: 9999;box-sizing: border-box;container-type: inline-size;width: var(--ui-tsc-width);max-width: calc(100% - 2 * var(--ui-tsc-offset));margin: 0;padding: 0;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;font-weight: 400;line-height: 20px;color: var(--ui-tsc-text);text-align: left;-webkit-font-smoothing: antialiased;outline: none}.ui-tsc[data-inline]{position: absolute;z-index: 20;--ui-tsc-offset: 20px}.ui-tsc[data-empty]{pointer-events: none}.ui-tsc *, .ui-tsc *::before, .ui-tsc *::after{box-sizing: border-box}:where(.ui-tsc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-tsc) svg{display: block;flex: none}.ui-tsc button:focus-visible{outline: 2px solid var(--ui-tsc-focus);outline-offset: 1px}.ui-tsc[data-y="bottom"]{bottom: var(--ui-tsc-offset)}.ui-tsc[data-y="top"]{top: var(--ui-tsc-offset)}.ui-tsc[data-x="right"]{right: var(--ui-tsc-offset)}.ui-tsc[data-x="left"]{left: var(--ui-tsc-offset)}.ui-tsc[data-x="center"]{left: 50%;transform: translateX(-50%)}.ui-tsc:not([data-inline])[data-y="bottom"]{bottom: max(var(--ui-tsc-offset), env(safe-area-inset-bottom))}.ui-tsc__list{position: relative;margin: 0;padding: 0;list-style: none}.ui-tsc__toast{position: absolute;left: 0;right: 0;outline: none;touch-action: none;-webkit-user-select: none;user-select: none;transition: transform 440ms var(--ui-tsc-ease), opacity 320ms ease, height 380ms var(--ui-tsc-ease)}.ui-tsc[data-y="bottom"] .ui-tsc__toast{bottom: 0;transform-origin: 50% 0}.ui-tsc[data-y="top"] .ui-tsc__toast{top: 0;transform-origin: 50% 100%}.ui-tsc__toast[data-removing]{pointer-events: none;transition: transform 380ms var(--ui-tsc-ease), opacity 260ms ease, height 380ms var(--ui-tsc-ease)}.ui-tsc__swipe{position: relative;height: 100%;transition: transform 460ms cubic-bezier(0.34, 1.3, 0.64, 1), opacity 260ms ease}.ui-tsc__toast[data-swiping]{cursor: grabbing}.ui-tsc__card{position: relative;height: 100%;overflow: hidden;border-radius: 10px;background: var(--ui-tsc-card);box-shadow: var(--ui-tsc-shadow-float)}.ui-tsc__toast:focus-visible .ui-tsc__card{outline: 2px solid var(--ui-tsc-focus);outline-offset: 2px}.ui-tsc__content{display: flex;align-items: flex-start;gap: 8px;padding: 12px 14px 12px 12px;transition: opacity 260ms ease}.ui-tsc__content[data-action]{padding-right: 12px}.ui-tsc__toast[data-behind] .ui-tsc__content, .ui-tsc__toast[data-behind] .ui-tsc__timer{opacity: 0}.ui-tsc__text{position: relative;flex: 1;min-width: 0}.ui-tsc__title{font-weight: 500;line-height: 20px;color: var(--ui-tsc-strong);overflow-wrap: anywhere}.ui-tsc__desc{font-size: 13px;line-height: 20px;color: var(--ui-tsc-text);overflow-wrap: anywhere}.ui-tsc__copy[data-changed]{animation: ui-tsc-text-in 300ms var(--ui-tsc-ease) both}.ui-tsc__ghost{position: absolute;top: 0;left: 0;right: 0;pointer-events: none;animation: ui-tsc-text-out 220ms ease both}.ui-tsc__icon{display: grid;place-items: center;flex: none;width: 16px;height: 20px;color: var(--ui-tsc-icon);transition: color 300ms ease}.ui-tsc__icon[data-type="success"]{color: var(--ui-tsc-success)}.ui-tsc__icon[data-type="error"]{color: var(--ui-tsc-danger)}.ui-tsc__icon[data-type="info"]{color: var(--ui-tsc-accent)}.ui-tsc__icon[data-type="custom"] > *{width: 16px;height: 16px}.ui-tsc__status{width: 16px;height: 16px;overflow: visible;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-tsc__icon[data-type="success"] .ui-tsc__status, .ui-tsc__icon[data-type="error"] .ui-tsc__status{animation: ui-tsc-pop 460ms cubic-bezier(0.34, 1.56, 0.64, 1) both}.ui-tsc__spin{transform-box: fill-box;transform-origin: center;animation: ui-tsc-spin 760ms linear infinite;animation-play-state: paused}.ui-tsc__icon[data-type="loading"] .ui-tsc__spin{animation-play-state: running}.ui-tsc__ring{stroke-dasharray: 1 0;stroke-opacity: 0.24;transition: stroke-dasharray 560ms var(--ui-tsc-ease), stroke-opacity 360ms ease}.ui-tsc__icon[data-type="loading"] .ui-tsc__ring{stroke-dasharray: 0.28 0.72;stroke-opacity: 1}.ui-tsc__mark{stroke-dasharray: 1;stroke-dashoffset: 1;opacity: 0}.ui-tsc__info{opacity: 0;transition: opacity 240ms ease}.ui-tsc__icon[data-type="success"] .ui-tsc__check, .ui-tsc__icon[data-type="error"] .ui-tsc__x1, .ui-tsc__icon[data-type="error"] .ui-tsc__x2{opacity: 1;stroke-dashoffset: 0;animation: ui-tsc-draw 340ms var(--ui-tsc-ease) 160ms both}.ui-tsc__icon[data-type="error"] .ui-tsc__x2{animation-delay: 260ms}.ui-tsc__icon[data-type="info"] .ui-tsc__info{opacity: 1}.ui-tsc__action{flex: none;align-self: center;height: 28px;margin: -4px 0;padding: 0 10px;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;white-space: nowrap;transition: background-color 140ms ease, box-shadow 140ms ease, transform 160ms var(--ui-tsc-ease)}:where(.ui-tsc) .ui-tsc__action{background: var(--ui-tsc-card);box-shadow: var(--ui-tsc-shadow);color: var(--ui-tsc-strong)}.ui-tsc__action:hover{box-shadow: var(--ui-tsc-shadow-hover)}.ui-tsc__action:active{transform: scale(0.97)}.ui-tsc__close{position: absolute;top: -7px;left: -7px;z-index: 1;display: grid;place-items: center;width: 20px;height: 20px;border-radius: 50%;opacity: 0;transform: scale(0.8);transition: opacity 160ms ease, transform 200ms var(--ui-tsc-ease), color 160ms ease, box-shadow 160ms ease}:where(.ui-tsc) .ui-tsc__close{background: var(--ui-tsc-card);box-shadow: var(--ui-tsc-shadow);color: var(--ui-tsc-icon)}.ui-tsc__close::before{content: "";position: absolute;inset: -6px}.ui-tsc__close:hover{color: var(--ui-tsc-ink);box-shadow: var(--ui-tsc-shadow-hover)}.ui-tsc__toast:not([data-behind]):hover .ui-tsc__close, .ui-tsc__toast:not([data-behind]):focus-within .ui-tsc__close{opacity: 1;transform: none}.ui-tsc__glyph{width: 10px;height: 10px;fill: none;stroke: currentColor;stroke-width: 2.2;stroke-linecap: round}.ui-tsc__timer{position: absolute;left: 12px;right: 12px;bottom: 0;height: 1px;background: var(--ui-tsc-hairline);transform-origin: left;animation-name: ui-tsc-timer;animation-timing-function: linear;animation-fill-mode: both;transition: opacity 260ms ease}.ui-tsc__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-tsc-spin{to{transform: rotate(360deg)}}@keyframes ui-tsc-draw{from{stroke-dashoffset: 1}to{stroke-dashoffset: 0}}@keyframes ui-tsc-pop{0%{transform: scale(0.82)}55%{transform: scale(1.08)}100%{transform: scale(1)}}@keyframes ui-tsc-timer{from{transform: scaleX(1)}to{transform: scaleX(0)}}@keyframes ui-tsc-text-in{from{opacity: 0;transform: translateY(4px);filter: blur(3px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-tsc-text-out{from{opacity: 1}to{opacity: 0;transform: translateY(-4px);filter: blur(3px)}}@container (max-width: 300px){.ui-tsc__content{padding: 10px 12px 10px 10px}}@media (max-width: 600px){.ui-tsc, .ui-tsc[data-x]{left: 12px;right: 12px;width: auto;max-width: none;transform: none}.ui-tsc[data-y="bottom"]{bottom: 12px}.ui-tsc:not([data-inline])[data-y="bottom"]{bottom: max(12px, env(safe-area-inset-bottom))}.ui-tsc[data-y="top"]{top: 12px}}@media (hover: none) and (pointer: coarse){.ui-tsc__toast:not([data-behind]) .ui-tsc__close{opacity: 1;transform: none}.ui-tsc__close{width: 24px;height: 24px;top: -8px;left: -8px}.ui-tsc__close::before{inset: -8px}.ui-tsc__action{height: 36px;margin: -8px -2px -8px 0;padding: 0 14px}}@media (prefers-reduced-motion: reduce){.ui-tsc *:not(.ui-tsc__spin):not(.ui-tsc__timer), .ui-tsc *::before, .ui-tsc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-tsc{--ui-tsc-card: #1c1c1e;--ui-tsc-strong: #ffffff;--ui-tsc-ink: rgba(255, 255, 255, 0.9);--ui-tsc-text: rgba(255, 255, 255, 0.62);--ui-tsc-icon: rgba(255, 255, 255, 0.46);--ui-tsc-faint: rgba(255, 255, 255, 0.3);--ui-tsc-hairline: rgba(255, 255, 255, 0.14);--ui-tsc-success: #3ec27a;--ui-tsc-danger: #ff6369;--ui-tsc-accent: #4d8dff;--ui-tsc-focus: rgba(77, 141, 255, 0.5);--ui-tsc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-tsc-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-tsc-shadow-float: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 12px 28px -10px rgba(0, 0, 0, 0.6)}:where(.dark, [data-theme="dark"]) .ui-tsc .ui-tsc__action{background: rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-tsc .ui-tsc__close{background: #2a2a2d}`;
var O = (e, t = false) => new Promise((n4, r2) => window.setTimeout(() => t ? r2(Error(`Timeout`)) : n4(), e));
var k = ({ d: e }) => (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: e }) });
var A = { save: `M6 4h9.5L20 8.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8 4v4.5h7V4M8 20v-6h8v6`, trash: `M4.5 7h15M10 11v5.5M14 11v5.5M6 7l.8 11.2A2 2 0 0 0 8.8 20h6.4a2 2 0 0 0 2-1.8L18 7M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2`, upload: `M12 15V4M7.5 8.5 12 4l4.5 4.5M5 15v3.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V15`, sync: `M19.5 12a7.5 7.5 0 0 1-13.3 4.8M4.5 12a7.5 7.5 0 0 1 13.3-4.8M18 3.5v4h-4M6 20.5v-4h4`, doc: `M7 3.5h7l4.5 4.5v11a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5zM14 3.5V8h4.5M8.5 12.5h7M8.5 16h5` };
function j() {
  let e = (0, n3.useId)(), t = (0, n3.useRef)(/* @__PURE__ */ new Set()), i2 = (t2 = {}) => ({ toaster: e, ...t2 }), a2 = (e2) => t.current.add(e2), o2 = (e2) => a2(v.success(`Draft saved`, i2({ description: `Q3 Board Report \xB7 all changes kept`, ...e2 }))), s2 = (e2) => a2(v(`File moved to trash`, { ...i2(e2), description: `Budget-2027.xlsx`, icon: (0, r.jsx)(k, { d: A.trash }), action: { label: `Undo`, onClick: () => a2(v.success(`File restored`, i2({ description: `Budget-2027.xlsx is back in Reports` }))) } })), c2 = (t2) => {
    let n4 = `${e}-upload-${Date.now()}`;
    a2(n4), v.promise(O(2400), { loading: { title: `Uploading report\u2026`, description: `Q3-Board-Report.pdf \xB7 4.2\xA0MB` }, success: { title: `Report uploaded`, description: `Shared with 4 people in Finance` }, error: `Upload failed` }, { ...i2(t2), id: n4 });
  };
  return (0, n3.useEffect)(() => {
    let e2 = [window.setTimeout(() => o2({ duration: 9e3 }), 500), window.setTimeout(() => s2({ duration: 9e3 }), 1300), window.setTimeout(() => c2({ duration: 9e3 }), 2100)], n4 = t.current;
    return () => {
      e2.forEach(clearTimeout), n4.forEach((e3) => v.dismiss(e3)), n4.clear();
    };
  }, []), (0, r.jsx)(`div`, { className: `toaster-demo toaster-demo--clean`, children: (0, r.jsxs)(`div`, { className: `toaster-demo__col`, children: [(0, r.jsxs)(`div`, { className: `toaster-demo__panel`, children: [(0, r.jsxs)(`div`, { className: `toaster-demo__card`, children: [(0, r.jsxs)(`div`, { className: `toaster-demo__head`, children: [(0, r.jsx)(`span`, { className: `toaster-demo__doc`, children: (0, r.jsx)(k, { d: A.doc }) }), (0, r.jsxs)(`div`, { className: `toaster-demo__meta`, children: [(0, r.jsx)(`span`, { className: `toaster-demo__name`, children: `Q3 Board Report` }), (0, r.jsx)(`span`, { className: `toaster-demo__sub`, children: `Finance \xB7 edited 2 min ago` })] })] }), (0, r.jsxs)(`div`, { className: `toaster-demo__grid`, children: [(0, r.jsxs)(`button`, { type: `button`, className: `toaster-demo__btn`, onClick: () => o2(), children: [(0, r.jsx)(k, { d: A.save }), `Save draft`] }), (0, r.jsxs)(`button`, { type: `button`, className: `toaster-demo__btn`, onClick: () => s2(), children: [(0, r.jsx)(k, { d: A.trash }), `Delete file`] }), (0, r.jsxs)(`button`, { type: `button`, className: `toaster-demo__btn`, onClick: () => c2(), children: [(0, r.jsx)(k, { d: A.upload }), `Upload report`] }), (0, r.jsxs)(`button`, { type: `button`, className: `toaster-demo__btn`, onClick: () => {
    let t2 = `${e}-sync-${Date.now()}`;
    a2(t2), v.promise(O(2200, true), { loading: `Syncing with Google Drive\u2026`, success: `Synced`, error: { title: `Couldn't sync`, description: `Google Drive didn't respond. Try again in a minute.` } }, i2({ id: t2 }));
  }, children: [(0, r.jsx)(k, { d: A.sync }), `Sync`] })] })] }), (0, r.jsxs)(`p`, { className: `toaster-demo__foot`, children: [`Press `, (0, r.jsx)(`kbd`, { children: `F8` }), ` to jump to notifications`] })] }), (0, r.jsx)(`div`, { className: `toaster-demo__slot`, children: (0, r.jsx)(E, { id: e, inline: true, position: `top-center` }) })] }) });
}

export {
  j
};
