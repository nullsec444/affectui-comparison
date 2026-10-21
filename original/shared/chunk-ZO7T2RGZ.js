import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/component-CabyG3jS.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = 0;
var a = () => `step-${Date.now().toString(36)}-${(i++).toString(36)}`;
var o = Array.from({ length: 8 }, (e, t) => t);
var s = (e, t, n4) => {
  let r2 = e.slice(), [i2] = r2.splice(t, 1);
  return r2.splice(n4, 0, i2), r2;
};
var c = () => typeof window < `u` && !!window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;
var ee = (e) => {
  let t = getComputedStyle(e).transform;
  if (!t || t === `none`) return 0;
  try {
    return new DOMMatrixReadOnly(t).m42;
  } catch {
    return 0;
  }
};
var l = (e) => {
  let t = Math.max(0, e) / 1e3;
  if (t < 10) return `${t.toFixed(1)}s`;
  if (t < 60) return `${Math.round(t)}s`;
  let n4 = Math.round(t);
  return `${Math.floor(n4 / 60)}m ${String(n4 % 60).padStart(2, `0`)}s`;
};
var u = (e) => {
  let t = Math.max(1, Math.round(e / 1e3));
  return t < 60 ? `${t}s` : `${Math.floor(t / 60)}m ${String(t % 60).padStart(2, `0`)}s`;
};
var te = { pending: `Pending`, active: `In progress`, done: `Done`, failed: `Failed`, skipped: `Skipped` };
function d({ steps: e, defaultSteps: t = [], status: i2 = `draft`, onChange: o2, onRun: d2, onCancel: ie, onRetry: f, title: p, estimate: m, className: ae }) {
  let [oe, se] = (0, n3.useState)(t), h = e ?? oe, g = i2 === `draft`, _ = (0, n3.useRef)(h);
  _.current = h;
  let [v, y] = (0, n3.useState)(null), b = (0, n3.useRef)(v);
  b.current = v;
  let [x, S] = (0, n3.useState)(``), [C, ce] = (0, n3.useState)([]), [le, w] = (0, n3.useState)(null), [ue, de] = (0, n3.useState)(``), [, fe] = (0, n3.useState)(0), [T, E] = (0, n3.useState)(null), pe = (0, n3.useRef)(null), D = (0, n3.useRef)(null), O = (0, n3.useRef)(/* @__PURE__ */ new Map()), k = (0, n3.useRef)(/* @__PURE__ */ new Map()), A = (0, n3.useRef)(null), j = (0, n3.useRef)(null), M = (0, n3.useRef)(/* @__PURE__ */ new Set()), N = (0, n3.useRef)(/* @__PURE__ */ new Set()), P = (0, n3.useRef)(/* @__PURE__ */ new Map()), F = (0, n3.useRef)(/* @__PURE__ */ new Map()), I = (0, n3.useRef)(null), L = (0, n3.useRef)(/* @__PURE__ */ new Map()), R = (0, n3.useId)(), me = (e2, t2) => {
    let n4 = window.setTimeout(() => {
      N.current.delete(n4), e2();
    }, t2);
    N.current.add(n4);
  };
  (0, n3.useEffect)(() => {
    let e2 = N.current;
    return () => e2.forEach((e3) => window.clearTimeout(e3));
  }, []);
  let z = (t2) => {
    e === void 0 && se(t2), o2?.(t2);
  }, B = (e2) => de((t2) => t2 === e2 ? `${e2}\xA0` : e2), V = h.map((e2) => e2.id).join(`
`), H = (0, n3.useRef)(V);
  (0, n3.useLayoutEffect)(() => {
    let e2 = H.current !== V;
    H.current = V;
    let t2 = /* @__PURE__ */ new Map(), n4 = e2 && !c();
    if (O.current.forEach((r2, i3) => {
      let a2 = r2.offsetTop;
      if (t2.set(i3, a2), !e2) return;
      let o3 = k.current.get(i3);
      n4 && o3 !== void 0 && o3 !== a2 && (r2.style.transition = `none`, r2.style.transform = `translateY(${o3 - a2}px)`, r2.getBoundingClientRect()), r2.style.transition = ``, r2.style.transform = ``;
    }), k.current = t2, j.current) {
      let e3 = O.current.get(j.current);
      j.current = null, e3 && document.activeElement !== e3 && e3.focus();
    }
  });
  let U = (0, n3.useRef)(i2);
  (0, n3.useLayoutEffect)(() => {
    let e2 = U.current;
    if (U.current = i2, i2 === `running` && (I.current === null || e2 === `done`) && (I.current = Date.now()), i2 === `draft` && (I.current = null, E(null)), i2 === `done`) {
      let e3 = _.current.reduce((e4, t2) => e4 + (t2.duration ?? F.current.get(t2.id) ?? 0), 0);
      E(I.current === null ? e3 : Date.now() - I.current);
    }
  }, [i2]), (0, n3.useLayoutEffect)(() => {
    h.forEach((e2) => {
      let t2 = e2.status ?? `pending`;
      t2 === `active` ? P.current.has(e2.id) || P.current.set(e2.id, Date.now()) : P.current.has(e2.id) && (t2 === `done` && F.current.set(e2.id, Date.now() - P.current.get(e2.id)), P.current.delete(e2.id)), t2 === `pending` && F.current.delete(e2.id);
    });
  }), (0, n3.useEffect)(() => {
    if (i2 !== `running`) return;
    let e2 = window.setInterval(() => fe((e3) => e3 + 1), 100);
    return () => window.clearInterval(e2);
  }, [i2]), (0, n3.useEffect)(() => {
    let e2 = [];
    h.forEach((t2, n4) => {
      let r2 = t2.status ?? `pending`, i3 = L.current.get(t2.id);
      !g && i3 !== void 0 && i3 !== r2 && (r2 === `done` && e2.push(`Step ${n4 + 1} done: ${t2.title}`), r2 === `failed` && e2.push(`Step ${n4 + 1} failed: ${t2.title}${t2.error ? `. ${t2.error}` : ``}`), r2 === `skipped` && e2.push(`Step ${n4 + 1} skipped`)), L.current.set(t2.id, r2);
    }), e2.length && B(e2.join(`. `));
  }), (0, n3.useEffect)(() => {
    i2 === `running` && B(`Running plan`), i2 === `done` && T !== null && B(`Plan done in ${u(T)}`);
  }, [i2, T]), (0, n3.useEffect)(() => {
    g || (y(null), S(``));
  }, [g]);
  let W = (e2) => {
    e2 ? O.current.get(e2)?.focus() : D.current?.focus();
  }, he = (e2, t2) => {
    let n4 = _.current, r2 = n4.findIndex((t3) => t3.id === e2), i3 = r2 + t2;
    r2 < 0 || i3 < 0 || i3 >= n4.length || (j.current = e2, z(s(n4, r2, i3)), B(`Moved \u201C${n4[r2].title}\u201D to position ${i3 + 1} of ${n4.length}`));
  }, G = (e2) => {
    if (!g || C.includes(e2)) return;
    let t2 = _.current, n4 = t2.findIndex((t3) => t3.id === e2);
    if (n4 < 0) return;
    let r2 = O.current.get(e2);
    if (r2?.contains(document.activeElement) && W((t2[n4 + 1] ?? t2[n4 - 1])?.id), B(`Removed \u201C${t2[n4].title}\u201D`), !r2 || c()) {
      z(t2.filter((t3) => t3.id !== e2));
      return;
    }
    r2.style.height = `${r2.offsetHeight}px`, r2.getBoundingClientRect(), ce((t3) => [...t3, e2]), me(() => {
      r2.style.height = ``, ce((t3) => t3.filter((t4) => t4 !== e2)), z(_.current.filter((t3) => t3.id !== e2));
    }, 260);
  }, K = (e2) => {
    if (!g) return;
    let t2 = _.current.find((t3) => t3.id === e2);
    t2 && y({ id: e2, value: t2.title });
  }, q = (e2, t2 = false) => {
    let n4 = b.current;
    if (!n4) return;
    b.current = null, y(null), t2 && (j.current = n4.id);
    let r2 = n4.value.trim(), i3 = _.current.find((e3) => e3.id === n4.id);
    e2 && i3 && r2 && r2 !== i3.title && (z(_.current.map((e3) => e3.id === n4.id ? { ...e3, title: r2 } : e3)), B(`Renamed to \u201C${r2}\u201D`));
  }, ge = () => {
    let e2 = x.trim();
    if (!e2) return;
    let t2 = a();
    M.current.add(t2), z([..._.current, { id: t2, title: e2 }]), S(``), B(`Added \u201C${e2}\u201D as step ${_.current.length + 1}`);
  }, _e = (e2, t2) => {
    if (!g || e2.target !== e2.currentTarget) return;
    let n4 = _.current, r2 = n4.findIndex((e3) => e3.id === t2);
    if (e2.altKey && (e2.key === `ArrowUp` || e2.key === `ArrowDown`)) e2.preventDefault(), he(t2, e2.key === `ArrowUp` ? -1 : 1);
    else if (e2.key === `ArrowUp` || e2.key === `ArrowDown`) {
      e2.preventDefault();
      let t3 = n4[r2 + (e2.key === `ArrowUp` ? -1 : 1)];
      t3 ? W(t3.id) : e2.key === `ArrowDown` && D.current?.focus();
    } else e2.key === `Enter` || e2.key === `F2` ? (e2.preventDefault(), K(t2)) : (e2.key === `Delete` || e2.key === `Backspace`) && (e2.preventDefault(), G(t2));
  }, ve = (e2, t2) => {
    if (!g || e2.button !== 0 || b.current || C.length) return;
    let n4 = _.current.map((e3) => e3.id), r2 = n4.map((e3) => O.current.get(e3));
    if (r2.some((e3) => !e3)) return;
    let i3 = r2, a2 = n4.indexOf(t2), o3 = i3[a2], s2 = o3.offsetHeight ? o3.getBoundingClientRect().height / o3.offsetHeight : 1;
    e2.preventDefault();
    try {
      e2.currentTarget.setPointerCapture(e2.pointerId);
    } catch {
    }
    A.current = { id: t2, pointer: e2.pointerId, ids: n4, from: a2, to: a2, startY: e2.clientY, scale: s2 || 1, dy: 0, tops: i3.map((e3) => e3.offsetTop), heights: i3.map((e3) => e3.offsetHeight) }, w(t2);
  }, ye = (e2) => {
    let t2 = A.current;
    if (!t2 || t2.pointer !== e2.pointerId) return;
    let n4 = t2.ids.length - 1, r2 = t2.tops[0] - t2.tops[t2.from], i3 = t2.tops[n4] + t2.heights[n4] - (t2.tops[t2.from] + t2.heights[t2.from]);
    t2.dy = Math.min(i3, Math.max(r2, (e2.clientY - t2.startY) / t2.scale)), O.current.get(t2.id)?.style.setProperty(`transform`, `translateY(${t2.dy}px)`);
    let a2 = t2.tops[t2.from] + t2.dy + t2.heights[t2.from] / 2, o3 = 0;
    if (t2.ids.forEach((e3, n5) => {
      n5 !== t2.from && t2.tops[n5] + t2.heights[n5] / 2 < a2 && o3++;
    }), o3 === t2.to) return;
    t2.to = o3;
    let s2 = t2.heights[t2.from];
    t2.ids.forEach((e3, n5) => {
      if (n5 === t2.from) return;
      let r3 = t2.from < o3 && n5 > t2.from && n5 <= o3 ? -s2 : o3 < t2.from && n5 >= o3 && n5 < t2.from ? s2 : 0, i4 = O.current.get(e3);
      i4 && (i4.style.transform = r3 ? `translateY(${r3}px)` : ``);
    });
  }, J = (e2) => {
    let t2 = A.current;
    if (!t2 || t2.pointer !== e2.pointerId) return;
    if (A.current = null, w(null), t2.to === t2.from) {
      let e3 = O.current.get(t2.id);
      e3 && (e3.style.transform = ``);
      return;
    }
    O.current.forEach((e3, t3) => {
      k.current.set(t3, e3.offsetTop + ee(e3)), e3.style.transition = `none`, e3.style.transform = ``;
    });
    let n4 = _.current, r2 = n4.find((e3) => e3.id === t2.id);
    z(s(n4, t2.from, t2.to)), requestAnimationFrame(() => O.current.forEach((e3) => e3.style.transition = ``)), r2 && B(`Moved \u201C${r2.title}\u201D to position ${t2.to + 1} of ${n4.length}`);
  }, Y = h.length, X = (e2) => e2.status ?? `pending`, Z = h.findIndex((e2) => X(e2) === `active`), be = h.findIndex((e2) => X(e2) === `failed`), xe = h.filter((e2) => X(e2) === `done` || X(e2) === `skipped`).length, Se = Date.now(), Q = `draft`, $ = ``;
  i2 === `done` ? (Q = `done`, $ = `Done in ${u(T ?? 0)}`) : i2 === `running` && (be >= 0 && Z < 0 ? (Q = `failed`, $ = `Stopped \xB7 step ${be + 1} failed`) : (Q = `running`, $ = `Running \xB7 ${Z >= 0 ? Z + 1 : Math.min(xe + 1, Y)} of ${Y}`));
  let Ce = I.current === null ? 0 : Se - I.current;
  return (0, r.jsxs)(`div`, { ref: pe, className: [`ui-pl`, ae].filter(Boolean).join(` `), "data-status": i2, "data-dragging": le ? `` : void 0, children: [(0, r.jsx)(`style`, { href: `ui-agent-plan`, precedence: `default`, children: re }), (0, r.jsxs)(`div`, { className: `ui-pl__card`, children: [(0, r.jsxs)(`div`, { className: `ui-pl__head`, children: [(0, r.jsxs)(`div`, { className: `ui-pl__meta`, children: [(0, r.jsxs)(`span`, { className: `ui-pl__state`, children: [(0, r.jsx)(`span`, { className: `ui-pl__state-icon`, "aria-hidden": `true`, children: (0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, children: [(0, r.jsx)(`path`, { d: `M6.5 4.5h7M6.5 8h7M6.5 11.5h7` }), (0, r.jsx)(`circle`, { cx: `3.25`, cy: `4.5`, r: `.6` }), (0, r.jsx)(`circle`, { cx: `3.25`, cy: `8`, r: `.6` }), (0, r.jsx)(`circle`, { cx: `3.25`, cy: `11.5`, r: `.6` })] }) }), (0, r.jsxs)(`span`, { className: `ui-pl__state-label`, children: [`Plan \xB7 `, Y, ` `, Y === 1 ? `step` : `steps`] })] }), g && m ? (0, r.jsxs)(`span`, { className: `ui-pl__estimate`, children: [(0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [(0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `6` }), (0, r.jsx)(`path`, { d: `M8 5v3.2l2 1.3` })] }), (0, r.jsxs)(`span`, { children: [(0, r.jsx)(`span`, { className: `ui-pl__sr`, children: `Estimated time ` }), m] })] }) : null] }), p && (0, r.jsx)(`h3`, { className: `ui-pl__title`, children: p })] }), (0, r.jsx)(`p`, { id: R, className: `ui-pl__sr`, children: `Press Enter to rename, Alt plus arrow keys to move, Delete to remove.` }), (0, r.jsx)(`ol`, { className: `ui-pl__list`, "aria-label": p ? `Plan: ${p}` : `Plan`, children: h.map((e2, t2) => {
    let n4 = X(e2), i3 = g && v?.id === e2.id, a2 = e2.duration ?? F.current.get(e2.id), o3 = P.current.get(e2.id);
    return (0, r.jsxs)(`li`, { ref: (t3) => (t3 && O.current.set(e2.id, t3), () => {
      O.current.delete(e2.id);
    }), className: `ui-pl__step`, "data-step": g ? void 0 : n4, "data-dragging": le === e2.id ? `` : void 0, "data-removing": C.includes(e2.id) ? `` : void 0, "data-enter": M.current.has(e2.id) ? `` : void 0, onAnimationEnd: (t3) => {
      t3.target === t3.currentTarget && M.current.delete(e2.id);
    }, tabIndex: g && !i3 ? 0 : void 0, "aria-describedby": g ? R : void 0, "aria-current": n4 === `active` && !g ? `step` : void 0, onKeyDown: (t3) => _e(t3, e2.id), children: [g && (0, r.jsx)(`span`, { className: `ui-pl__grip`, "aria-hidden": `true`, title: `Drag to reorder`, onPointerDown: (t3) => ve(t3, e2.id), onPointerMove: ye, onPointerUp: J, onPointerCancel: J, children: (0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, children: [(0, r.jsx)(`circle`, { cx: `6`, cy: `4`, r: `1.1` }), (0, r.jsx)(`circle`, { cx: `10`, cy: `4`, r: `1.1` }), (0, r.jsx)(`circle`, { cx: `6`, cy: `8`, r: `1.1` }), (0, r.jsx)(`circle`, { cx: `10`, cy: `8`, r: `1.1` }), (0, r.jsx)(`circle`, { cx: `6`, cy: `12`, r: `1.1` }), (0, r.jsx)(`circle`, { cx: `10`, cy: `12`, r: `1.1` })] }) }), (0, r.jsx)(`span`, { className: `ui-pl__marker`, "aria-hidden": `true`, children: g || n4 === `pending` ? (0, r.jsx)(`span`, { className: `ui-pl__num`, children: t2 + 1 }) : n4 === `active` ? (0, r.jsx)(ne, {}) : n4 === `done` ? (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, className: `ui-pl__mark`, children: (0, r.jsx)(`path`, { d: `M4.2 8.4 6.8 11l5-5.6`, pathLength: 1, className: `ui-pl__draw` }) }) : n4 === `failed` ? (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, className: `ui-pl__mark`, children: (0, r.jsx)(`path`, { d: `M8 4.2v4.4M8 11.6h.01` }) }) : (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, className: `ui-pl__mark`, children: (0, r.jsx)(`path`, { d: `M5 8h6` }) }) }), (0, r.jsxs)(`div`, { className: `ui-pl__main`, children: [i3 ? (0, r.jsx)(`input`, { className: `ui-pl__edit`, value: v.value, "aria-label": `Rename step ${t2 + 1}`, autoFocus: true, onFocus: (e3) => e3.currentTarget.select(), onChange: (t3) => y({ id: e2.id, value: t3.target.value }), onBlur: () => q(true), onKeyDown: (e3) => {
      e3.key === `Enter` ? (e3.preventDefault(), q(true, true)) : e3.key === `Escape` && (e3.preventDefault(), e3.stopPropagation(), q(false, true));
    } }) : (0, r.jsx)(`span`, { className: `ui-pl__name`, onDoubleClick: () => K(e2.id), children: e2.title }), (e2.detail || e2.tool) && (0, r.jsxs)(`span`, { className: `ui-pl__sub`, children: [e2.detail && (0, r.jsx)(`span`, { className: `ui-pl__detail`, children: e2.detail }), e2.tool && (0, r.jsx)(`code`, { className: `ui-pl__tool`, children: e2.tool })] }), !g && (0, r.jsxs)(`span`, { className: `ui-pl__sr`, children: [`, `, te[n4]] }), !g && n4 === `failed` && (0, r.jsxs)(`span`, { className: `ui-pl__fail`, children: [(0, r.jsx)(`span`, { className: `ui-pl__error`, children: e2.error ?? `This step failed` }), f && (0, r.jsxs)(`button`, { type: `button`, className: `ui-pl__retry`, onClick: () => f(e2.id), children: [(0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [(0, r.jsx)(`path`, { d: `M13 8a5 5 0 1 1-1.6-3.7` }), (0, r.jsx)(`path`, { d: `M13 3v2.6h-2.6` })] }), `Retry from here`] })] })] }), (0, r.jsx)(`span`, { className: `ui-pl__aside`, children: g ? (0, r.jsx)(`button`, { type: `button`, className: `ui-pl__remove`, "aria-label": `Remove step ${t2 + 1}: ${e2.title}`, onClick: () => G(e2.id), children: (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M4.5 4.5l7 7M11.5 4.5l-7 7` }) }) }) : n4 === `active` ? (0, r.jsx)(`span`, { className: `ui-pl__time`, "aria-hidden": `true`, children: l(o3 === void 0 ? 0 : Se - o3) }) : n4 === `done` && a2 !== void 0 ? (0, r.jsxs)(`span`, { className: `ui-pl__time ui-pl__time--done`, children: [(0, r.jsx)(`span`, { className: `ui-pl__sr`, children: `took ` }), l(a2)] }) : n4 === `skipped` ? (0, r.jsx)(`span`, { className: `ui-pl__time`, "aria-hidden": `true`, children: `Skipped` }) : null }), t2 < Y - 1 && (0, r.jsx)(`span`, { className: `ui-pl__rail`, "aria-hidden": `true` })] }, e2.id);
  }) }), (0, r.jsx)(`div`, { className: `ui-pl__tail`, inert: !g, children: (0, r.jsx)(`div`, { className: `ui-pl__tail-inner`, children: (0, r.jsxs)(`label`, { className: `ui-pl__add`, children: [(0, r.jsx)(`span`, { className: `ui-pl__add-icon`, "aria-hidden": `true`, children: (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, children: (0, r.jsx)(`path`, { d: `M8 4.5v7M4.5 8h7` }) }) }), (0, r.jsx)(`input`, { ref: D, value: x, placeholder: `Add step`, "aria-label": `Add a step at the end`, enterKeyHint: `done`, onChange: (e2) => S(e2.target.value), onKeyDown: (e2) => {
    if (e2.key === `Enter`) e2.preventDefault(), ge();
    else if (e2.key === `Escape`) S(``);
    else if (e2.key === `ArrowUp` && !x) {
      let t2 = _.current[_.current.length - 1];
      t2 && (e2.preventDefault(), W(t2.id));
    }
  } })] }) }) })] }), (0, r.jsx)(`div`, { className: `ui-pl__foot`, "data-phase": Q, children: Q === `draft` ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`span`, { className: `ui-pl__hint`, "aria-hidden": `true`, children: `Drag to reorder \xB7 double-click to rename` }), (0, r.jsxs)(`span`, { className: `ui-pl__actions`, children: [ie && (0, r.jsx)(`button`, { type: `button`, className: `ui-pl__btn ui-pl__btn--quiet`, onClick: ie, children: `Cancel` }), (0, r.jsxs)(`button`, { type: `button`, className: `ui-pl__btn ui-pl__btn--primary ui-pl__run`, disabled: !Y, onClick: () => d2?.(_.current), children: [`Run plan`, (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M5.5 3.8v8.4L12 8z` }) })] })] })] }) : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(`span`, { className: `ui-pl__status`, children: [(0, r.jsx)(`span`, { className: `ui-pl__status-icon`, "aria-hidden": `true`, children: Q === `running` ? (0, r.jsx)(ne, {}) : Q === `done` ? (0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, children: [(0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `6.5` }), (0, r.jsx)(`path`, { d: `M5.4 8.2 7.2 10l3.4-3.8`, pathLength: 1, className: `ui-pl__draw` })] }) : (0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, children: [(0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `6.5` }), (0, r.jsx)(`path`, { d: `M8 4.9v3.6M8 11h.01` })] }) }), (0, r.jsx)(`span`, { className: `ui-pl__status-label`, children: $ })] }), Q === `running` ? (0, r.jsx)(`span`, { className: `ui-pl__elapsed`, "aria-hidden": `true`, children: u(Ce) }) : Q === `done` && d2 ? (0, r.jsx)(`span`, { className: `ui-pl__actions`, children: (0, r.jsxs)(`button`, { type: `button`, className: `ui-pl__btn ui-pl__btn--quiet ui-pl__again`, onClick: () => d2(_.current), children: [(0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [(0, r.jsx)(`path`, { d: `M13 8a5 5 0 1 1-1.6-3.7` }), (0, r.jsx)(`path`, { d: `M13 3v2.6h-2.6` })] }), `Run again`] }) }) : null] }) }, Q), (0, r.jsx)(`p`, { className: `ui-pl__sr`, role: `status`, "aria-live": `polite`, children: ue })] });
}
function ne() {
  return (0, r.jsx)(`svg`, { className: `ui-pl__spinner`, viewBox: `0 0 16 16`, children: o.map((e) => (0, r.jsx)(`line`, { x1: `8`, y1: `1.75`, x2: `8`, y2: `4.75`, transform: `rotate(${e * 45} 8 8)`, style: { animationDelay: `${(e - 8) * 100}ms` } }, e)) });
}
var re = `.ui-pl{--ui-pl-tray: #f0f0f0;--ui-pl-card: #ffffff;--ui-pl-ink: #171717;--ui-pl-text: #6b6b6b;--ui-pl-muted: #8a8a8a;--ui-pl-faint: #b8b8b8;--ui-pl-line: #ececec;--ui-pl-raise: #ffffff;--ui-pl-hover: #f6f6f6;--ui-pl-quiet-hover: #e4e4e5;--ui-pl-press: rgba(23, 23, 23, 0.05);--ui-pl-chip: #f3f3f3;--ui-pl-chip-text: #555555;--ui-pl-marker: #f0f0f0;--ui-pl-rail: #c4c4c8;--ui-pl-on-ink: #ffffff;--ui-pl-red: #c2331f;--ui-pl-red-bg: #fdf3f1;--ui-pl-red-ring: rgba(194, 51, 31, 0.32);--ui-pl-ring: rgba(23, 23, 23, 0.22);--ui-pl-lift: 0 1px 2px rgba(0, 0, 0, 0.06), 0 12px 28px -10px rgba(0, 0, 0, 0.2);--ui-pl-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-pl-inset: 30px;container-type: inline-size;position: relative;box-sizing: border-box;display: grid;width: 100%;max-width: 460px;padding: 4px;border-radius: 20px;background: var(--ui-pl-tray);color: var(--ui-pl-text);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;line-height: 20px;letter-spacing: -0.006em;text-align: left;-webkit-font-smoothing: antialiased}.ui-pl__card{position: relative;border-radius: 16px;background: var(--ui-pl-card);box-shadow: 0 0 0 1px var(--ui-pl-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-pl:not([data-status="draft"]){--ui-pl-inset: 14px}.ui-pl[data-dragging]{cursor: grabbing;user-select: none;-webkit-user-select: none}.ui-pl *, .ui-pl *::before, .ui-pl *::after{box-sizing: border-box}.ui-pl svg{display: block;width: 100%;height: 100%;overflow: visible}:where(.ui-pl) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;letter-spacing: inherit;color: inherit;cursor: pointer}.ui-pl__sr{position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap;border: 0}.ui-pl__head{display: grid;gap: 4px;padding: 16px 18px 8px}.ui-pl__meta{display: flex;align-items: center;gap: 10px;min-height: 18px;font-size: 12.5px;line-height: 18px;color: var(--ui-pl-muted)}.ui-pl__state{display: inline-flex;align-items: center;gap: 7px;min-width: 0}.ui-pl__state-label{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-pl__state-icon, .ui-pl__status-icon{flex: none;width: 13px;height: 13px;fill: none;stroke: currentColor;stroke-width: 1.5;stroke-linecap: round;stroke-linejoin: round}.ui-pl__state-icon circle[r=".6"]{fill: currentColor}.ui-pl__estimate{display: inline-flex;align-items: center;gap: 5px;margin-left: auto;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-pl__estimate svg{width: 13px;height: 13px;fill: none;stroke: currentColor;stroke-width: 1.4;stroke-linecap: round;stroke-linejoin: round}.ui-pl__title{margin: 0;color: var(--ui-pl-ink);font-size: 15px;font-weight: 600;line-height: 22px;letter-spacing: -0.012em;text-wrap: balance}.ui-pl__list{position: relative;margin: 0;padding: 2px 6px 6px;list-style: none}.ui-pl__step{position: relative;display: grid;grid-template-columns: 22px minmax(0, 1fr) auto;column-gap: 12px;align-items: start;padding: 10px 10px 10px var(--ui-pl-inset);border-radius: 10px;outline: none;transition: transform 420ms var(--ui-pl-ease), padding 420ms var(--ui-pl-ease), height 260ms var(--ui-pl-ease), opacity 180ms ease, background-color 160ms ease, box-shadow 200ms ease}.ui-pl[data-status="draft"] .ui-pl__step:hover{background: var(--ui-pl-hover)}.ui-pl__step:focus-visible{outline: 2px solid var(--ui-pl-ring);outline-offset: 0}.ui-pl__step[data-dragging]{z-index: 2;background: var(--ui-pl-raise) !important;box-shadow: inset 0 0 0 1px var(--ui-pl-line), var(--ui-pl-lift);transition: background-color 160ms ease, box-shadow 200ms ease}.ui-pl__step[data-removing]{height: 0 !important;padding-top: 0;padding-bottom: 0;overflow: hidden;opacity: 0;pointer-events: none}.ui-pl__step[data-enter]{animation: ui-pl-enter 380ms var(--ui-pl-ease) both}.ui-pl__grip{position: absolute;top: 10px;left: 6px;display: grid;place-items: center;width: 18px;height: 22px;margin-top: -1px;border-radius: 5px;color: var(--ui-pl-faint);fill: currentColor;cursor: grab;touch-action: none;opacity: 0;transition: opacity 160ms ease, color 160ms ease, background-color 160ms ease}.ui-pl__grip svg{width: 14px;height: 14px}.ui-pl__step:hover .ui-pl__grip, .ui-pl__step:focus-visible .ui-pl__grip, .ui-pl__step[data-dragging] .ui-pl__grip{opacity: 1}.ui-pl__grip:hover, .ui-pl__step[data-dragging] .ui-pl__grip{color: var(--ui-pl-text);background: var(--ui-pl-press)}.ui-pl__step[data-dragging] .ui-pl__grip{cursor: grabbing}.ui-pl__marker{position: relative;z-index: 1;display: grid;place-items: center;justify-self: center;width: 20px;height: 20px;border-radius: 999px;background: var(--ui-pl-card);box-shadow: inset 0 0 0 1px var(--ui-pl-line);color: var(--ui-pl-muted);font-size: 11px;font-weight: 500;line-height: 1;font-variant-numeric: tabular-nums;transition: background-color 320ms ease, color 320ms ease, box-shadow 320ms ease}.ui-pl__marker > *{grid-area: 1 / 1;animation: ui-pl-pop 360ms var(--ui-pl-ease) both}.ui-pl__num{animation: none !important}.ui-pl__marker .ui-pl__spinner{width: 13px;height: 13px}.ui-pl__mark{width: 11px !important;height: 11px !important;fill: none;stroke: currentColor;stroke-width: 1.9;stroke-linecap: round;stroke-linejoin: round}.ui-pl__step[data-step="active"] .ui-pl__marker{box-shadow: none;color: var(--ui-pl-ink)}.ui-pl__step[data-step="done"] .ui-pl__marker{background: var(--ui-pl-marker);box-shadow: none;color: var(--ui-pl-ink)}.ui-pl__step[data-step="failed"] .ui-pl__marker{background: var(--ui-pl-red-bg);box-shadow: inset 0 0 0 1px var(--ui-pl-red-ring);color: var(--ui-pl-red)}.ui-pl__step[data-step="skipped"] .ui-pl__marker{box-shadow: none;outline: 1px dashed var(--ui-pl-faint);outline-offset: -1px}.ui-pl__draw{stroke-dasharray: 1;stroke-dashoffset: 1;animation: ui-pl-draw 420ms var(--ui-pl-ease) 80ms forwards}.ui-pl__spinner line{stroke: currentColor;stroke-width: 1.7;stroke-linecap: round;opacity: 0.18;animation: ui-pl-ray 800ms linear infinite}.ui-pl__main{display: grid;gap: 2px;min-width: 0}.ui-pl__name{color: var(--ui-pl-ink);font-weight: 500;overflow-wrap: anywhere;transition: color 300ms ease}.ui-pl[data-status="draft"] .ui-pl__name{cursor: text}.ui-pl__step[data-step="pending"] .ui-pl__name{color: var(--ui-pl-text)}.ui-pl__step[data-step="skipped"] .ui-pl__name{color: var(--ui-pl-muted);text-decoration: line-through;text-decoration-color: var(--ui-pl-faint)}.ui-pl__sub{display: flex;flex-wrap: wrap;align-items: center;gap: 3px 8px;min-width: 0;color: var(--ui-pl-muted);font-size: 12.5px;line-height: 18px}.ui-pl__detail{min-width: 0;overflow-wrap: anywhere}.ui-pl__tool{padding: 1px 6px;border-radius: 6px;background: var(--ui-pl-chip);color: var(--ui-pl-chip-text);font-family: ui-monospace, "SF Mono", Menlo, monospace;font-size: 11px;line-height: 16px;letter-spacing: 0;white-space: nowrap}.ui-pl__edit{width: calc(100% + 14px);height: 26px;margin: -3px -7px;padding: 0 6px;border: 0;border-radius: 7px;background: var(--ui-pl-raise);box-shadow: inset 0 0 0 1px var(--ui-pl-line), 0 0 0 3px var(--ui-pl-press);color: var(--ui-pl-ink);font: inherit;font-weight: 500;letter-spacing: inherit;outline: none}.ui-pl__fail{display: grid;justify-items: start;gap: 8px;margin-top: 4px;animation: ui-pl-fade 360ms var(--ui-pl-ease) both}.ui-pl__error{color: var(--ui-pl-red);font-size: 12.5px;line-height: 18px;overflow-wrap: anywhere}.ui-pl__retry{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 10px 0 9px;border-radius: 8px;background: var(--ui-pl-raise);box-shadow: inset 0 0 0 1px var(--ui-pl-line), 0 1px 2px rgba(0, 0, 0, 0.04);color: var(--ui-pl-ink);font-size: 12.5px;font-weight: 500;transition: background-color 160ms ease, transform 160ms var(--ui-pl-ease)}.ui-pl__retry svg{width: 13px;height: 13px;fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round}.ui-pl__retry:hover{background: var(--ui-pl-hover)}.ui-pl__retry:active{transform: scale(0.97)}.ui-pl__aside{display: flex;align-items: center;min-height: 20px;color: var(--ui-pl-muted);font-size: 12.5px;font-variant-numeric: tabular-nums;white-space: nowrap}.ui-pl__time{animation: ui-pl-fade 300ms ease both}.ui-pl__step[data-step="active"] .ui-pl__time{color: var(--ui-pl-ink)}.ui-pl__remove{display: grid;place-items: center;width: 24px;height: 24px;margin: -2px -4px 0 0;border-radius: 7px;color: var(--ui-pl-faint);fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;opacity: 0;transition: opacity 160ms ease, color 160ms ease, background-color 160ms ease}.ui-pl__remove svg{width: 14px;height: 14px}.ui-pl__step:hover .ui-pl__remove, .ui-pl__step:focus-visible .ui-pl__remove, .ui-pl__remove:focus-visible{opacity: 1}.ui-pl__remove:hover{color: var(--ui-pl-ink);background: var(--ui-pl-press)}.ui-pl__remove:focus-visible, .ui-pl__retry:focus-visible, .ui-pl__btn:focus-visible{outline: 2px solid var(--ui-pl-ring);outline-offset: 1px}.ui-pl__rail{position: absolute;top: 35px;bottom: -5px;left: calc(var(--ui-pl-inset) + 10.5px);width: 1px;overflow: hidden;background: var(--ui-pl-line);opacity: 0;pointer-events: none;transition: opacity 300ms ease}.ui-pl:not([data-status="draft"]) .ui-pl__rail{opacity: 1;transition-delay: 240ms}.ui-pl__rail::after{content: "";position: absolute;inset: 0;background: var(--ui-pl-rail);transform: scaleY(0);transform-origin: top;transition: transform 560ms var(--ui-pl-ease)}.ui-pl__step[data-step="done"] .ui-pl__rail::after, .ui-pl__step[data-step="skipped"] .ui-pl__rail::after{transform: scaleY(1)}.ui-pl__tail{display: grid;grid-template-rows: 1fr;transition: grid-template-rows 420ms var(--ui-pl-ease), opacity 260ms ease}.ui-pl:not([data-status="draft"]) .ui-pl__tail{grid-template-rows: 0fr;opacity: 0}.ui-pl__tail-inner{min-height: 0;overflow: hidden}.ui-pl__add{display: grid;grid-template-columns: 22px minmax(0, 1fr);column-gap: 12px;align-items: center;margin: 0 6px 8px;padding: 7px 10px 7px var(--ui-pl-inset);border-radius: 10px;cursor: text;transition: background-color 160ms ease}.ui-pl__add:hover, .ui-pl__add:focus-within{background: var(--ui-pl-hover)}.ui-pl__add-icon{display: grid;place-items: center;width: 22px;height: 22px;border-radius: 999px;outline: 1px dashed var(--ui-pl-faint);outline-offset: -1px;color: var(--ui-pl-muted);fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round}.ui-pl__add-icon svg{width: 12px;height: 12px}.ui-pl__add input{width: 100%;min-width: 0;height: 22px;padding: 0;border: 0;background: none;color: var(--ui-pl-ink);font: inherit;letter-spacing: inherit;outline: none}.ui-pl__add input::placeholder{color: var(--ui-pl-muted);opacity: 1}.ui-pl__foot{display: flex;align-items: center;gap: 12px;min-height: 46px;padding: 0 6px 0 12px;font-size: 12.5px;color: var(--ui-pl-muted);animation: ui-pl-fade 320ms var(--ui-pl-ease) both}.ui-pl__hint{min-width: 0;overflow: hidden;color: var(--ui-pl-muted);font-size: 12px;text-overflow: ellipsis;white-space: nowrap}.ui-pl__actions{display: flex;flex: none;gap: 8px;margin-left: auto}.ui-pl__btn{display: inline-flex;align-items: center;gap: 6px;height: 32px;padding: 0 13px;border-radius: 9px;font-size: 13px;font-weight: 500;white-space: nowrap;transition: background-color 160ms ease, opacity 160ms ease, transform 160ms var(--ui-pl-ease)}.ui-pl__btn:active{transform: scale(0.97)}.ui-pl__btn--primary{padding-right: 11px;background: var(--ui-pl-ink);color: var(--ui-pl-on-ink);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12)}.ui-pl__btn--primary:hover{opacity: 0.88}.ui-pl__btn--primary:disabled{opacity: 0.4;cursor: default;transform: none}.ui-pl__btn--primary svg{width: 12px;height: 12px;fill: currentColor}.ui-pl__btn--quiet{padding: 0 11px;color: var(--ui-pl-text)}.ui-pl__btn--quiet:hover{background: var(--ui-pl-quiet-hover);color: var(--ui-pl-ink)}.ui-pl__btn--quiet svg{width: 13px;height: 13px;fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round}.ui-pl__status{display: inline-flex;align-items: center;gap: 8px;min-width: 0;color: var(--ui-pl-ink)}.ui-pl__foot[data-phase="failed"] .ui-pl__status{color: var(--ui-pl-red)}.ui-pl__status-label{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-pl__elapsed{margin-left: auto;padding-right: 6px;font-variant-numeric: tabular-nums;white-space: nowrap}@media (hover: none){.ui-pl__grip, .ui-pl__remove{opacity: 1}}@container (max-width: 400px){.ui-pl__hint{display: none}}@container (max-width: 340px){.ui-pl__head{padding: 14px 14px 8px}.ui-pl__list{padding-inline: 4px}.ui-pl__step, .ui-pl__add{column-gap: 10px;padding-right: 8px}.ui-pl__add{margin-inline: 4px}.ui-pl__foot{padding-left: 10px}.ui-pl__btn{padding: 0 11px}}@keyframes ui-pl-fade{from{opacity: 0;transform: translateY(3px)}to{opacity: 1;transform: none}}@keyframes ui-pl-enter{from{opacity: 0;transform: translateY(6px)}to{opacity: 1;transform: none}}@keyframes ui-pl-pop{from{opacity: 0;transform: scale(0.5)}to{opacity: 1;transform: none}}@keyframes ui-pl-draw{to{stroke-dashoffset: 0}}@keyframes ui-pl-ray{0%{opacity: 1}100%{opacity: 0.18}}@media (prefers-reduced-motion: reduce){.ui-pl *, .ui-pl *::before, .ui-pl *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;animation-iteration-count: 1 !important;transition-duration: 1ms !important;transition-delay: 0ms !important}.ui-pl__spinner line{opacity: 0.6}.ui-pl__draw{stroke-dashoffset: 0}}:where(.dark, [data-theme="dark"]) .ui-pl{--ui-pl-tray: #111113;--ui-pl-card: #19191b;--ui-pl-ink: #ededed;--ui-pl-text: #a1a1a1;--ui-pl-muted: #8b8b92;--ui-pl-faint: #5c5c63;--ui-pl-line: #2a2a2e;--ui-pl-raise: #1f1f22;--ui-pl-hover: #1f1f22;--ui-pl-quiet-hover: #222225;--ui-pl-press: rgba(255, 255, 255, 0.07);--ui-pl-chip: #232326;--ui-pl-chip-text: #b4b4b4;--ui-pl-marker: #26262a;--ui-pl-rail: #4a4a50;--ui-pl-on-ink: #19191b;--ui-pl-red: #f2786b;--ui-pl-red-bg: rgba(242, 120, 107, 0.08);--ui-pl-red-ring: rgba(242, 120, 107, 0.4);--ui-pl-ring: rgba(237, 237, 237, 0.3);--ui-pl-lift: 0 1px 2px rgba(0, 0, 0, 0.4), 0 14px 32px -10px rgba(0, 0, 0, 0.7)}`;

export {
  d
};
