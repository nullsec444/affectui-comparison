import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo.clean-BjIF1-j-.js
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
var l = (e) => {
  let t = getComputedStyle(e).transform;
  if (!t || t === `none`) return 0;
  try {
    return new DOMMatrixReadOnly(t).m42;
  } catch {
    return 0;
  }
};
var u = (e) => {
  let t = Math.max(0, e) / 1e3;
  if (t < 10) return `${t.toFixed(1)}s`;
  if (t < 60) return `${Math.round(t)}s`;
  let n4 = Math.round(t);
  return `${Math.floor(n4 / 60)}m ${String(n4 % 60).padStart(2, `0`)}s`;
};
var d = (e) => {
  let t = Math.max(1, Math.round(e / 1e3));
  return t < 60 ? `${t}s` : `${Math.floor(t / 60)}m ${String(t % 60).padStart(2, `0`)}s`;
};
var f = { pending: `Pending`, active: `In progress`, done: `Done`, failed: `Failed`, skipped: `Skipped` };
function p({ steps: e, defaultSteps: t = [], status: i2 = `draft`, onChange: o2, onRun: p2, onCancel: g2, onRetry: _2, title: v2, estimate: y2, className: b }) {
  let [ee, te] = (0, n3.useState)(t), x = e ?? ee, S = i2 === `draft`, C = (0, n3.useRef)(x);
  C.current = x;
  let [w, T] = (0, n3.useState)(null), E = (0, n3.useRef)(w);
  E.current = w;
  let [D, O] = (0, n3.useState)(``), [k, ne] = (0, n3.useState)([]), [A, re] = (0, n3.useState)(null), [ie, ae] = (0, n3.useState)(``), [, oe] = (0, n3.useState)(0), [j, se] = (0, n3.useState)(null), ce = (0, n3.useRef)(null), M = (0, n3.useRef)(null), N = (0, n3.useRef)(/* @__PURE__ */ new Map()), P = (0, n3.useRef)(/* @__PURE__ */ new Map()), F = (0, n3.useRef)(null), I = (0, n3.useRef)(null), L = (0, n3.useRef)(/* @__PURE__ */ new Set()), R = (0, n3.useRef)(/* @__PURE__ */ new Set()), z = (0, n3.useRef)(/* @__PURE__ */ new Map()), B = (0, n3.useRef)(/* @__PURE__ */ new Map()), V = (0, n3.useRef)(null), le = (0, n3.useRef)(/* @__PURE__ */ new Map()), H = (0, n3.useId)(), ue = (e2, t2) => {
    let n4 = window.setTimeout(() => {
      R.current.delete(n4), e2();
    }, t2);
    R.current.add(n4);
  };
  (0, n3.useEffect)(() => {
    let e2 = R.current;
    return () => e2.forEach((e3) => window.clearTimeout(e3));
  }, []);
  let U = (t2) => {
    e === void 0 && te(t2), o2?.(t2);
  }, W = (e2) => ae((t2) => t2 === e2 ? `${e2}\xA0` : e2), G = x.map((e2) => e2.id).join(`
`), de = (0, n3.useRef)(G);
  (0, n3.useLayoutEffect)(() => {
    let e2 = de.current !== G;
    de.current = G;
    let t2 = /* @__PURE__ */ new Map(), n4 = e2 && !c();
    if (N.current.forEach((r2, i3) => {
      let a2 = r2.offsetTop;
      if (t2.set(i3, a2), !e2) return;
      let o3 = P.current.get(i3);
      n4 && o3 !== void 0 && o3 !== a2 && (r2.style.transition = `none`, r2.style.transform = `translateY(${o3 - a2}px)`, r2.getBoundingClientRect()), r2.style.transition = ``, r2.style.transform = ``;
    }), P.current = t2, I.current) {
      let e3 = N.current.get(I.current);
      I.current = null, e3 && document.activeElement !== e3 && e3.focus();
    }
  });
  let fe = (0, n3.useRef)(i2);
  (0, n3.useLayoutEffect)(() => {
    let e2 = fe.current;
    if (fe.current = i2, i2 === `running` && (V.current === null || e2 === `done`) && (V.current = Date.now()), i2 === `draft` && (V.current = null, se(null)), i2 === `done`) {
      let e3 = C.current.reduce((e4, t2) => e4 + (t2.duration ?? B.current.get(t2.id) ?? 0), 0);
      se(V.current === null ? e3 : Date.now() - V.current);
    }
  }, [i2]), (0, n3.useLayoutEffect)(() => {
    x.forEach((e2) => {
      let t2 = e2.status ?? `pending`;
      t2 === `active` ? z.current.has(e2.id) || z.current.set(e2.id, Date.now()) : z.current.has(e2.id) && (t2 === `done` && B.current.set(e2.id, Date.now() - z.current.get(e2.id)), z.current.delete(e2.id)), t2 === `pending` && B.current.delete(e2.id);
    });
  }), (0, n3.useEffect)(() => {
    if (i2 !== `running`) return;
    let e2 = window.setInterval(() => oe((e3) => e3 + 1), 100);
    return () => window.clearInterval(e2);
  }, [i2]), (0, n3.useEffect)(() => {
    let e2 = [];
    x.forEach((t2, n4) => {
      let r2 = t2.status ?? `pending`, i3 = le.current.get(t2.id);
      !S && i3 !== void 0 && i3 !== r2 && (r2 === `done` && e2.push(`Step ${n4 + 1} done: ${t2.title}`), r2 === `failed` && e2.push(`Step ${n4 + 1} failed: ${t2.title}${t2.error ? `. ${t2.error}` : ``}`), r2 === `skipped` && e2.push(`Step ${n4 + 1} skipped`)), le.current.set(t2.id, r2);
    }), e2.length && W(e2.join(`. `));
  }), (0, n3.useEffect)(() => {
    i2 === `running` && W(`Running plan`), i2 === `done` && j !== null && W(`Plan done in ${d(j)}`);
  }, [i2, j]), (0, n3.useEffect)(() => {
    S || (T(null), O(``));
  }, [S]);
  let K = (e2) => {
    e2 ? N.current.get(e2)?.focus() : M.current?.focus();
  }, pe = (e2, t2) => {
    let n4 = C.current, r2 = n4.findIndex((t3) => t3.id === e2), i3 = r2 + t2;
    r2 < 0 || i3 < 0 || i3 >= n4.length || (I.current = e2, U(s(n4, r2, i3)), W(`Moved \u201C${n4[r2].title}\u201D to position ${i3 + 1} of ${n4.length}`));
  }, me = (e2) => {
    if (!S || k.includes(e2)) return;
    let t2 = C.current, n4 = t2.findIndex((t3) => t3.id === e2);
    if (n4 < 0) return;
    let r2 = N.current.get(e2);
    if (r2?.contains(document.activeElement) && K((t2[n4 + 1] ?? t2[n4 - 1])?.id), W(`Removed \u201C${t2[n4].title}\u201D`), !r2 || c()) {
      U(t2.filter((t3) => t3.id !== e2));
      return;
    }
    r2.style.height = `${r2.offsetHeight}px`, r2.getBoundingClientRect(), ne((t3) => [...t3, e2]), ue(() => {
      r2.style.height = ``, ne((t3) => t3.filter((t4) => t4 !== e2)), U(C.current.filter((t3) => t3.id !== e2));
    }, 260);
  }, he = (e2) => {
    if (!S) return;
    let t2 = C.current.find((t3) => t3.id === e2);
    t2 && T({ id: e2, value: t2.title });
  }, q = (e2, t2 = false) => {
    let n4 = E.current;
    if (!n4) return;
    E.current = null, T(null), t2 && (I.current = n4.id);
    let r2 = n4.value.trim(), i3 = C.current.find((e3) => e3.id === n4.id);
    e2 && i3 && r2 && r2 !== i3.title && (U(C.current.map((e3) => e3.id === n4.id ? { ...e3, title: r2 } : e3)), W(`Renamed to \u201C${r2}\u201D`));
  }, ge = () => {
    let e2 = D.trim();
    if (!e2) return;
    let t2 = a();
    L.current.add(t2), U([...C.current, { id: t2, title: e2 }]), O(``), W(`Added \u201C${e2}\u201D as step ${C.current.length + 1}`);
  }, _e = (e2, t2) => {
    if (!S || e2.target !== e2.currentTarget) return;
    let n4 = C.current, r2 = n4.findIndex((e3) => e3.id === t2);
    if (e2.altKey && (e2.key === `ArrowUp` || e2.key === `ArrowDown`)) e2.preventDefault(), pe(t2, e2.key === `ArrowUp` ? -1 : 1);
    else if (e2.key === `ArrowUp` || e2.key === `ArrowDown`) {
      e2.preventDefault();
      let t3 = n4[r2 + (e2.key === `ArrowUp` ? -1 : 1)];
      t3 ? K(t3.id) : e2.key === `ArrowDown` && M.current?.focus();
    } else e2.key === `Enter` || e2.key === `F2` ? (e2.preventDefault(), he(t2)) : (e2.key === `Delete` || e2.key === `Backspace`) && (e2.preventDefault(), me(t2));
  }, ve = (e2, t2) => {
    if (!S || e2.button !== 0 || E.current || k.length) return;
    let n4 = C.current.map((e3) => e3.id), r2 = n4.map((e3) => N.current.get(e3));
    if (r2.some((e3) => !e3)) return;
    let i3 = r2, a2 = n4.indexOf(t2), o3 = i3[a2], s2 = o3.offsetHeight ? o3.getBoundingClientRect().height / o3.offsetHeight : 1;
    e2.preventDefault();
    try {
      e2.currentTarget.setPointerCapture(e2.pointerId);
    } catch {
    }
    F.current = { id: t2, pointer: e2.pointerId, ids: n4, from: a2, to: a2, startY: e2.clientY, scale: s2 || 1, dy: 0, tops: i3.map((e3) => e3.offsetTop), heights: i3.map((e3) => e3.offsetHeight) }, re(t2);
  }, ye = (e2) => {
    let t2 = F.current;
    if (!t2 || t2.pointer !== e2.pointerId) return;
    let n4 = t2.ids.length - 1, r2 = t2.tops[0] - t2.tops[t2.from], i3 = t2.tops[n4] + t2.heights[n4] - (t2.tops[t2.from] + t2.heights[t2.from]);
    t2.dy = Math.min(i3, Math.max(r2, (e2.clientY - t2.startY) / t2.scale)), N.current.get(t2.id)?.style.setProperty(`transform`, `translateY(${t2.dy}px)`);
    let a2 = t2.tops[t2.from] + t2.dy + t2.heights[t2.from] / 2, o3 = 0;
    if (t2.ids.forEach((e3, n5) => {
      n5 !== t2.from && t2.tops[n5] + t2.heights[n5] / 2 < a2 && o3++;
    }), o3 === t2.to) return;
    t2.to = o3;
    let s2 = t2.heights[t2.from];
    t2.ids.forEach((e3, n5) => {
      if (n5 === t2.from) return;
      let r3 = t2.from < o3 && n5 > t2.from && n5 <= o3 ? -s2 : o3 < t2.from && n5 >= o3 && n5 < t2.from ? s2 : 0, i4 = N.current.get(e3);
      i4 && (i4.style.transform = r3 ? `translateY(${r3}px)` : ``);
    });
  }, J = (e2) => {
    let t2 = F.current;
    if (!t2 || t2.pointer !== e2.pointerId) return;
    if (F.current = null, re(null), t2.to === t2.from) {
      let e3 = N.current.get(t2.id);
      e3 && (e3.style.transform = ``);
      return;
    }
    N.current.forEach((e3, t3) => {
      P.current.set(t3, e3.offsetTop + l(e3)), e3.style.transition = `none`, e3.style.transform = ``;
    });
    let n4 = C.current, r2 = n4.find((e3) => e3.id === t2.id);
    U(s(n4, t2.from, t2.to)), requestAnimationFrame(() => N.current.forEach((e3) => e3.style.transition = ``)), r2 && W(`Moved \u201C${r2.title}\u201D to position ${t2.to + 1} of ${n4.length}`);
  }, Y = x.length, X = (e2) => e2.status ?? `pending`, Z = x.findIndex((e2) => X(e2) === `active`), be = x.findIndex((e2) => X(e2) === `failed`), xe = x.filter((e2) => X(e2) === `done` || X(e2) === `skipped`).length, Se = Date.now(), Q = `draft`, $ = ``;
  i2 === `done` ? (Q = `done`, $ = `Done in ${d(j ?? 0)}`) : i2 === `running` && (be >= 0 && Z < 0 ? (Q = `failed`, $ = `Stopped \xB7 step ${be + 1} failed`) : (Q = `running`, $ = `Running \xB7 ${Z >= 0 ? Z + 1 : Math.min(xe + 1, Y)} of ${Y}`));
  let Ce = V.current === null ? 0 : Se - V.current;
  return (0, r.jsxs)(`div`, { ref: ce, className: [`ui-plc`, b].filter(Boolean).join(` `), "data-status": i2, "data-dragging": A ? `` : void 0, children: [(0, r.jsx)(`style`, { href: `ui-agent-plan-clean`, precedence: `default`, children: h }), (0, r.jsxs)(`div`, { className: `ui-plc__card`, children: [(0, r.jsxs)(`div`, { className: `ui-plc__head`, children: [(0, r.jsxs)(`div`, { className: `ui-plc__meta`, children: [(0, r.jsxs)(`span`, { className: `ui-plc__state`, children: [(0, r.jsx)(`span`, { className: `ui-plc__state-icon`, "aria-hidden": `true`, children: (0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, children: [(0, r.jsx)(`path`, { d: `M6.5 4.5h7M6.5 8h7M6.5 11.5h7` }), (0, r.jsx)(`circle`, { cx: `3.25`, cy: `4.5`, r: `.6` }), (0, r.jsx)(`circle`, { cx: `3.25`, cy: `8`, r: `.6` }), (0, r.jsx)(`circle`, { cx: `3.25`, cy: `11.5`, r: `.6` })] }) }), (0, r.jsxs)(`span`, { className: `ui-plc__state-label`, children: [`Plan \xB7 `, Y, ` `, Y === 1 ? `step` : `steps`] })] }), S && y2 ? (0, r.jsxs)(`span`, { className: `ui-plc__estimate`, children: [(0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [(0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `6` }), (0, r.jsx)(`path`, { d: `M8 5v3.2l2 1.3` })] }), (0, r.jsxs)(`span`, { children: [(0, r.jsx)(`span`, { className: `ui-plc__sr`, children: `Estimated time ` }), y2] })] }) : null] }), v2 && (0, r.jsx)(`h3`, { className: `ui-plc__title`, children: v2 })] }), (0, r.jsx)(`p`, { id: H, className: `ui-plc__sr`, children: `Press Enter to rename, Alt plus arrow keys to move, Delete to remove.` }), (0, r.jsx)(`ol`, { className: `ui-plc__list`, "aria-label": v2 ? `Plan: ${v2}` : `Plan`, children: x.map((e2, t2) => {
    let n4 = X(e2), i3 = S && w?.id === e2.id, a2 = e2.duration ?? B.current.get(e2.id), o3 = z.current.get(e2.id);
    return (0, r.jsxs)(`li`, { ref: (t3) => (t3 && N.current.set(e2.id, t3), () => {
      N.current.delete(e2.id);
    }), className: `ui-plc__step`, "data-step": S ? void 0 : n4, "data-dragging": A === e2.id ? `` : void 0, "data-removing": k.includes(e2.id) ? `` : void 0, "data-enter": L.current.has(e2.id) ? `` : void 0, onAnimationEnd: (t3) => {
      t3.target === t3.currentTarget && L.current.delete(e2.id);
    }, tabIndex: S && !i3 ? 0 : void 0, "aria-describedby": S ? H : void 0, "aria-current": n4 === `active` && !S ? `step` : void 0, onKeyDown: (t3) => _e(t3, e2.id), children: [S && (0, r.jsx)(`span`, { className: `ui-plc__grip`, "aria-hidden": `true`, title: `Drag to reorder`, onPointerDown: (t3) => ve(t3, e2.id), onPointerMove: ye, onPointerUp: J, onPointerCancel: J, children: (0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, children: [(0, r.jsx)(`circle`, { cx: `6`, cy: `4`, r: `1.1` }), (0, r.jsx)(`circle`, { cx: `10`, cy: `4`, r: `1.1` }), (0, r.jsx)(`circle`, { cx: `6`, cy: `8`, r: `1.1` }), (0, r.jsx)(`circle`, { cx: `10`, cy: `8`, r: `1.1` }), (0, r.jsx)(`circle`, { cx: `6`, cy: `12`, r: `1.1` }), (0, r.jsx)(`circle`, { cx: `10`, cy: `12`, r: `1.1` })] }) }), (0, r.jsx)(`span`, { className: `ui-plc__marker`, "aria-hidden": `true`, children: S || n4 === `pending` ? (0, r.jsx)(`span`, { className: `ui-plc__num`, children: t2 + 1 }) : n4 === `active` ? (0, r.jsx)(m, {}) : n4 === `done` ? (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, className: `ui-plc__mark`, children: (0, r.jsx)(`path`, { d: `M4.2 8.4 6.8 11l5-5.6`, pathLength: 1, className: `ui-plc__draw` }) }) : n4 === `failed` ? (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, className: `ui-plc__mark`, children: (0, r.jsx)(`path`, { d: `M8 4.2v4.4M8 11.6h.01` }) }) : (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, className: `ui-plc__mark`, children: (0, r.jsx)(`path`, { d: `M5 8h6` }) }) }), (0, r.jsxs)(`div`, { className: `ui-plc__main`, children: [i3 ? (0, r.jsx)(`input`, { className: `ui-plc__edit`, value: w.value, "aria-label": `Rename step ${t2 + 1}`, autoFocus: true, onFocus: (e3) => e3.currentTarget.select(), onChange: (t3) => T({ id: e2.id, value: t3.target.value }), onBlur: () => q(true), onKeyDown: (e3) => {
      e3.key === `Enter` ? (e3.preventDefault(), q(true, true)) : e3.key === `Escape` && (e3.preventDefault(), e3.stopPropagation(), q(false, true));
    } }) : (0, r.jsx)(`span`, { className: `ui-plc__name`, onDoubleClick: () => he(e2.id), children: e2.title }), (e2.detail || e2.tool) && (0, r.jsxs)(`span`, { className: `ui-plc__sub`, children: [e2.detail && (0, r.jsx)(`span`, { className: `ui-plc__detail`, children: e2.detail }), e2.tool && (0, r.jsx)(`code`, { className: `ui-plc__tool`, children: e2.tool })] }), !S && (0, r.jsxs)(`span`, { className: `ui-plc__sr`, children: [`, `, f[n4]] }), !S && n4 === `failed` && (0, r.jsxs)(`span`, { className: `ui-plc__fail`, children: [(0, r.jsx)(`span`, { className: `ui-plc__error`, children: e2.error ?? `This step failed` }), _2 && (0, r.jsxs)(`button`, { type: `button`, className: `ui-plc__retry`, onClick: () => _2(e2.id), children: [(0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [(0, r.jsx)(`path`, { d: `M13 8a5 5 0 1 1-1.6-3.7` }), (0, r.jsx)(`path`, { d: `M13 3v2.6h-2.6` })] }), `Retry from here`] })] })] }), (0, r.jsx)(`span`, { className: `ui-plc__aside`, children: S ? (0, r.jsx)(`button`, { type: `button`, className: `ui-plc__remove`, "aria-label": `Remove step ${t2 + 1}: ${e2.title}`, onClick: () => me(e2.id), children: (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M4.5 4.5l7 7M11.5 4.5l-7 7` }) }) }) : n4 === `active` ? (0, r.jsx)(`span`, { className: `ui-plc__time`, "aria-hidden": `true`, children: u(o3 === void 0 ? 0 : Se - o3) }) : n4 === `done` && a2 !== void 0 ? (0, r.jsxs)(`span`, { className: `ui-plc__time ui-plc__time--done`, children: [(0, r.jsx)(`span`, { className: `ui-plc__sr`, children: `took ` }), u(a2)] }) : n4 === `skipped` ? (0, r.jsx)(`span`, { className: `ui-plc__time`, "aria-hidden": `true`, children: `Skipped` }) : null }), t2 < Y - 1 && (0, r.jsx)(`span`, { className: `ui-plc__rail`, "aria-hidden": `true` })] }, e2.id);
  }) }), (0, r.jsx)(`div`, { className: `ui-plc__tail`, inert: !S, children: (0, r.jsx)(`div`, { className: `ui-plc__tail-inner`, children: (0, r.jsxs)(`label`, { className: `ui-plc__add`, children: [(0, r.jsx)(`span`, { className: `ui-plc__add-icon`, "aria-hidden": `true`, children: (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, children: (0, r.jsx)(`path`, { d: `M8 4.5v7M4.5 8h7` }) }) }), (0, r.jsx)(`input`, { ref: M, value: D, placeholder: `Add step`, "aria-label": `Add a step at the end`, enterKeyHint: `done`, onChange: (e2) => O(e2.target.value), onKeyDown: (e2) => {
    if (e2.key === `Enter`) e2.preventDefault(), ge();
    else if (e2.key === `Escape`) O(``);
    else if (e2.key === `ArrowUp` && !D) {
      let t2 = C.current[C.current.length - 1];
      t2 && (e2.preventDefault(), K(t2.id));
    }
  } })] }) }) }), (0, r.jsx)(`div`, { className: `ui-plc__foot`, "data-phase": Q, children: Q === `draft` ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`span`, { className: `ui-plc__hint`, "aria-hidden": `true`, children: `Drag to reorder \xB7 double-click to rename` }), (0, r.jsxs)(`span`, { className: `ui-plc__actions`, children: [g2 && (0, r.jsx)(`button`, { type: `button`, className: `ui-plc__btn ui-plc__btn--secondary`, onClick: g2, children: `Cancel` }), (0, r.jsxs)(`button`, { type: `button`, className: `ui-plc__btn ui-plc__btn--primary ui-plc__run`, disabled: !Y, onClick: () => p2?.(C.current), children: [`Run plan`, (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M5.5 3.8v8.4L12 8z` }) })] })] })] }) : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(`span`, { className: `ui-plc__status`, children: [(0, r.jsx)(`span`, { className: `ui-plc__status-icon`, "aria-hidden": `true`, children: Q === `running` ? (0, r.jsx)(m, {}) : Q === `done` ? (0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, className: `ui-plc__badge`, children: [(0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `7` }), (0, r.jsx)(`path`, { d: `M5.2 8.2 7.1 10l3.7-4`, pathLength: 1, className: `ui-plc__draw` })] }) : (0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, className: `ui-plc__badge`, children: [(0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `7` }), (0, r.jsx)(`path`, { d: `M8 4.8v3.8M8 11.2h.01` })] }) }), (0, r.jsx)(`span`, { className: Q === `running` ? `ui-plc__status-label ui-plc__shimmer` : `ui-plc__status-label`, "data-text": $, children: $ })] }), Q === `running` ? (0, r.jsx)(`span`, { className: `ui-plc__elapsed`, "aria-hidden": `true`, children: d(Ce) }) : Q === `done` && p2 ? (0, r.jsx)(`span`, { className: `ui-plc__actions`, children: (0, r.jsxs)(`button`, { type: `button`, className: `ui-plc__btn ui-plc__btn--secondary ui-plc__again`, onClick: () => p2(C.current), children: [(0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [(0, r.jsx)(`path`, { d: `M13 8a5 5 0 1 1-1.6-3.7` }), (0, r.jsx)(`path`, { d: `M13 3v2.6h-2.6` })] }), `Run again`] }) }) : null] }) }, Q)] }), (0, r.jsx)(`p`, { className: `ui-plc__sr`, role: `status`, "aria-live": `polite`, children: ie })] });
}
function m() {
  return (0, r.jsx)(`svg`, { className: `ui-plc__spinner`, viewBox: `0 0 16 16`, children: o.map((e) => (0, r.jsx)(`line`, { x1: `8`, y1: `1.75`, x2: `8`, y2: `4.75`, transform: `rotate(${e * 45} 8 8)`, style: { animationDelay: `${(e - 8) * 100}ms` } }, e)) });
}
var h = `.ui-plc{--ui-plc-card: #ffffff;--ui-plc-ink: rgba(0, 0, 0, 0.88);--ui-plc-strong: #000000;--ui-plc-text: rgba(0, 0, 0, 0.61);--ui-plc-muted: rgba(0, 0, 0, 0.45);--ui-plc-faint: rgba(0, 0, 0, 0.27);--ui-plc-icon: rgba(0, 0, 0, 0.447);--ui-plc-line: rgba(0, 0, 0, 0.06);--ui-plc-ring: rgba(0, 0, 0, 0.1);--ui-plc-rail: rgba(0, 0, 0, 0.08);--ui-plc-fill: rgba(0, 0, 0, 0.06);--ui-plc-wash: rgba(0, 0, 0, 0.03);--ui-plc-chip: rgba(0, 0, 0, 0.045);--ui-plc-accent: rgba(0, 96, 226, 0.765);--ui-plc-on-accent: #ffffff;--ui-plc-red: #e5484d;--ui-plc-red-bg: rgba(229, 72, 77, 0.08);--ui-plc-primary: rgba(0, 0, 0, 0.88);--ui-plc-primary-hover: rgba(0, 0, 0, 0.78);--ui-plc-on-primary: #fcfcfc;--ui-plc-raise-hover: #fafafa;--ui-plc-shine: rgba(255, 255, 255, 0.82);--ui-plc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-plc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-plc-focus: rgba(0, 96, 226, 0.35);--ui-plc-edit-glow: rgba(0, 96, 226, 0.1);--ui-plc-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-plc-inset: 30px;container-type: inline-size;position: relative;box-sizing: border-box;display: grid;width: 100%;max-width: 440px;color: var(--ui-plc-ink);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;font-weight: 400;line-height: 20px;text-align: left;-webkit-font-smoothing: antialiased}.ui-plc__card{position: relative;border-radius: 10px;background: var(--ui-plc-card);box-shadow: var(--ui-plc-shadow)}.ui-plc:not([data-status="draft"]){--ui-plc-inset: 10px}.ui-plc[data-dragging]{cursor: grabbing;user-select: none;-webkit-user-select: none}.ui-plc *, .ui-plc *::before, .ui-plc *::after{box-sizing: border-box}.ui-plc svg{display: block;width: 100%;height: 100%;overflow: visible}:where(.ui-plc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;letter-spacing: inherit;color: inherit;cursor: pointer}.ui-plc__sr{position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap;border: 0}.ui-plc__head{display: grid;gap: 4px;padding: 16px 16px 10px}.ui-plc__meta{display: flex;align-items: center;gap: 10px;min-height: 16px;font-size: 12px;line-height: 16px;color: var(--ui-plc-muted)}.ui-plc__state{display: inline-flex;align-items: center;gap: 6px;min-width: 0}.ui-plc__state-label{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-plc__state-icon{flex: none;width: 16px;height: 16px;color: var(--ui-plc-icon);fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-plc__state-icon circle[r=".6"]{fill: currentColor}.ui-plc__estimate{display: inline-flex;align-items: center;gap: 6px;margin-left: auto;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-plc__estimate svg{width: 16px;height: 16px;color: var(--ui-plc-icon);fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-plc__title{margin: 0;color: var(--ui-plc-strong);font-size: 15px;font-weight: 500;line-height: 24px;text-wrap: balance}.ui-plc__list{position: relative;margin: 0;padding: 0 6px 6px;list-style: none}.ui-plc__step{position: relative;display: grid;grid-template-columns: 20px minmax(0, 1fr) auto;column-gap: 10px;align-items: start;padding: 8px 10px 8px var(--ui-plc-inset);border-radius: 6px;outline: none;transition: transform 420ms var(--ui-plc-ease), padding 420ms var(--ui-plc-ease), height 260ms var(--ui-plc-ease), opacity 180ms ease, background-color 140ms ease, box-shadow 200ms ease}.ui-plc[data-status="draft"] .ui-plc__step:hover{background: var(--ui-plc-wash)}.ui-plc__step:focus-visible{outline: 2px solid var(--ui-plc-focus);outline-offset: 0}.ui-plc__step[data-dragging]{z-index: 2;background: var(--ui-plc-card) !important;box-shadow: var(--ui-plc-shadow-pop);transition: background-color 140ms ease, box-shadow 200ms ease}.ui-plc__step[data-removing]{height: 0 !important;padding-top: 0;padding-bottom: 0;overflow: hidden;opacity: 0;pointer-events: none}.ui-plc__step[data-enter]{animation: ui-plc-enter 380ms var(--ui-plc-ease) both}.ui-plc__grip{position: absolute;top: 8px;left: 6px;display: grid;place-items: center;width: 18px;height: 20px;border-radius: 5px;color: var(--ui-plc-faint);fill: currentColor;cursor: grab;touch-action: none;opacity: 0;transition: opacity 140ms ease, color 140ms ease, background-color 140ms ease}.ui-plc__grip svg{width: 16px;height: 16px}.ui-plc__step:hover .ui-plc__grip, .ui-plc__step:focus-visible .ui-plc__grip, .ui-plc__step[data-dragging] .ui-plc__grip{opacity: 1}.ui-plc__grip:hover, .ui-plc__step[data-dragging] .ui-plc__grip{color: var(--ui-plc-icon);background: var(--ui-plc-fill)}.ui-plc__step[data-dragging] .ui-plc__grip{cursor: grabbing}.ui-plc__marker{position: relative;z-index: 1;display: grid;place-items: center;width: 20px;height: 20px;border-radius: 50%;background: var(--ui-plc-card);box-shadow: inset 0 0 0 0.5px var(--ui-plc-ring), 0 1px 1px -1px rgba(0, 0, 0, 0.1);color: var(--ui-plc-muted);font-size: 11px;font-weight: 500;line-height: 1;font-variant-numeric: tabular-nums;transition: background-color 320ms ease, color 320ms ease, box-shadow 320ms ease}.ui-plc__marker > *{grid-area: 1 / 1;animation: ui-plc-pop 360ms var(--ui-plc-ease) both}.ui-plc__num{animation: none !important}.ui-plc__marker .ui-plc__spinner{width: 14px;height: 14px}.ui-plc__mark{width: 12px !important;height: 12px !important;fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round}.ui-plc__step[data-step="active"] .ui-plc__marker{box-shadow: none;color: var(--ui-plc-accent)}.ui-plc__step[data-step="done"] .ui-plc__marker{background: var(--ui-plc-accent);box-shadow: none;color: var(--ui-plc-on-accent)}.ui-plc__step[data-step="failed"] .ui-plc__marker{background: var(--ui-plc-red-bg);box-shadow: none;color: var(--ui-plc-red)}.ui-plc__step[data-step="skipped"] .ui-plc__marker{box-shadow: none;outline: 1px dashed var(--ui-plc-faint);outline-offset: -1px}.ui-plc__draw{stroke-dasharray: 1;stroke-dashoffset: 1;animation: ui-plc-draw 420ms var(--ui-plc-ease) 80ms forwards}.ui-plc__spinner line{stroke: currentColor;stroke-width: 1.4;stroke-linecap: round;opacity: 0.18;animation: ui-plc-ray 800ms linear infinite}.ui-plc__main{display: grid;gap: 2px;min-width: 0}.ui-plc__name{color: var(--ui-plc-ink);font-weight: 500;overflow-wrap: anywhere;transition: color 300ms ease}.ui-plc[data-status="draft"] .ui-plc__name{cursor: text}.ui-plc__step[data-step="pending"] .ui-plc__name{color: var(--ui-plc-text)}.ui-plc__step[data-step="skipped"] .ui-plc__name{color: var(--ui-plc-muted);text-decoration: line-through;text-decoration-color: var(--ui-plc-faint)}.ui-plc__sub{display: flex;flex-wrap: wrap;align-items: center;gap: 4px 8px;min-width: 0;color: var(--ui-plc-muted);font-size: 12px;line-height: 16px}.ui-plc__detail{min-width: 0;overflow-wrap: anywhere}.ui-plc__tool{padding: 0 5px;border-radius: 5px;background: var(--ui-plc-chip);color: var(--ui-plc-text);font-family: ui-monospace, "SF Mono", Menlo, monospace;font-size: 11px;line-height: 16px;letter-spacing: 0;white-space: nowrap}.ui-plc__edit{width: calc(100% + 14px);height: 28px;margin: -4px -7px;padding: 0 6px;border: 0;border-radius: 6px;background: var(--ui-plc-card);box-shadow: 0 0 0 0.5px var(--ui-plc-focus), 0 0 0 3px var(--ui-plc-edit-glow);color: var(--ui-plc-ink);font: inherit;font-weight: 500;letter-spacing: inherit;outline: none}.ui-plc__fail{display: grid;justify-items: start;gap: 8px;margin-top: 4px;animation: ui-plc-fade 360ms var(--ui-plc-ease) both}.ui-plc__error{color: var(--ui-plc-red);font-size: 12px;line-height: 16px;overflow-wrap: anywhere}.ui-plc__retry, .ui-plc__btn{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 10px;border-radius: 6px;font-size: 13px;font-weight: 500;white-space: nowrap;transition: background-color 140ms ease, opacity 140ms ease, transform 160ms var(--ui-plc-ease)}.ui-plc__retry, .ui-plc__btn--secondary{background: var(--ui-plc-card);box-shadow: var(--ui-plc-shadow);color: var(--ui-plc-strong)}.ui-plc__retry, .ui-plc__again{padding: 0 10px 0 8px}.ui-plc__retry svg, .ui-plc__btn--secondary svg{width: 16px;height: 16px;color: var(--ui-plc-icon);fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-plc__retry:hover, .ui-plc__btn--secondary:hover{background: var(--ui-plc-raise-hover)}.ui-plc__retry:active, .ui-plc__btn:active{transform: scale(0.97)}.ui-plc__aside{display: flex;align-items: center;min-height: 20px;color: var(--ui-plc-muted);font-size: 12px;font-variant-numeric: tabular-nums;white-space: nowrap}.ui-plc__time{animation: ui-plc-fade 300ms ease both}.ui-plc__step[data-step="active"] .ui-plc__time{color: var(--ui-plc-ink)}.ui-plc__remove{display: grid;place-items: center;width: 28px;height: 28px;margin: -4px -6px -4px 0;border-radius: 6px;color: var(--ui-plc-icon);fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;opacity: 0;transition: opacity 140ms ease, color 140ms ease, background-color 140ms ease}.ui-plc__remove svg{width: 16px;height: 16px}.ui-plc__step:hover .ui-plc__remove, .ui-plc__step:focus-visible .ui-plc__remove, .ui-plc__remove:focus-visible{opacity: 1}.ui-plc__remove:hover{color: var(--ui-plc-ink);background: var(--ui-plc-wash)}.ui-plc__remove:focus-visible, .ui-plc__retry:focus-visible, .ui-plc__btn:focus-visible{outline: 2px solid var(--ui-plc-focus);outline-offset: 1px}.ui-plc__rail{position: absolute;top: 31px;bottom: -5px;left: calc(var(--ui-plc-inset) + 9.5px);width: 1px;overflow: hidden;background: var(--ui-plc-rail);opacity: 0;pointer-events: none;transition: opacity 300ms ease}.ui-plc:not([data-status="draft"]) .ui-plc__rail{opacity: 1;transition-delay: 240ms}.ui-plc__rail::after{content: "";position: absolute;inset: 0;background: var(--ui-plc-accent);transform: scaleY(0);transform-origin: top;transition: transform 560ms var(--ui-plc-ease)}.ui-plc__step[data-step="done"] .ui-plc__rail::after, .ui-plc__step[data-step="skipped"] .ui-plc__rail::after{transform: scaleY(1)}.ui-plc__tail{display: grid;grid-template-rows: 1fr;transition: grid-template-rows 420ms var(--ui-plc-ease), opacity 260ms ease}.ui-plc:not([data-status="draft"]) .ui-plc__tail{grid-template-rows: 0fr;opacity: 0}.ui-plc__tail-inner{min-height: 0;overflow: hidden}.ui-plc__add{display: grid;grid-template-columns: 20px minmax(0, 1fr);column-gap: 10px;align-items: center;margin: -4px 6px 8px;padding: 6px 10px 6px var(--ui-plc-inset);border-radius: 6px;cursor: text;transition: background-color 140ms ease}.ui-plc__add:hover, .ui-plc__add:focus-within{background: var(--ui-plc-wash)}.ui-plc__add-icon{display: grid;place-items: center;width: 20px;height: 20px;color: var(--ui-plc-icon);fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round}.ui-plc__add-icon svg{width: 16px;height: 16px}.ui-plc__add input{width: 100%;min-width: 0;height: 20px;padding: 0;border: 0;background: none;color: var(--ui-plc-ink);font: inherit;letter-spacing: inherit;outline: none}.ui-plc__add input::placeholder{color: var(--ui-plc-faint);opacity: 1}.ui-plc__foot{display: flex;align-items: center;gap: 12px;min-height: 48px;padding: 0 10px 0 16px;border-top: 0.5px solid var(--ui-plc-line);color: var(--ui-plc-muted);font-size: 12px;line-height: 16px}.ui-plc__foot > *{animation: ui-plc-fade 320ms var(--ui-plc-ease) both}.ui-plc__hint{min-width: 0;overflow: hidden;text-overflow: ellipsis;white-space: nowrap}.ui-plc__actions{display: flex;flex: none;gap: 8px;margin-left: auto}.ui-plc__btn--primary{padding: 0 8px 0 10px;background: var(--ui-plc-primary);color: var(--ui-plc-on-primary)}.ui-plc__btn--primary:hover{background: var(--ui-plc-primary-hover)}.ui-plc__btn--primary:disabled{opacity: 0.4;cursor: default;transform: none}.ui-plc__btn--primary svg{width: 16px;height: 16px;fill: currentColor}.ui-plc__status{display: inline-flex;align-items: center;gap: 8px;min-width: 0;color: var(--ui-plc-ink);font-size: 13px;line-height: 20px}.ui-plc__status-icon{flex: none;width: 16px;height: 16px;color: var(--ui-plc-accent)}.ui-plc__status-icon .ui-plc__spinner{width: 14px;height: 14px;margin: 1px}.ui-plc__badge circle{fill: currentColor}.ui-plc__badge path{fill: none;stroke: var(--ui-plc-on-accent);stroke-width: 1.4;stroke-linecap: round;stroke-linejoin: round}.ui-plc__foot[data-phase="failed"] .ui-plc__status-icon{color: var(--ui-plc-red-bg)}.ui-plc__foot[data-phase="failed"] .ui-plc__badge path{stroke: var(--ui-plc-red);stroke-width: 1.6}.ui-plc__foot[data-phase="failed"] .ui-plc__status{color: var(--ui-plc-red)}.ui-plc__status-label{position: relative;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-plc__foot[data-phase="done"] .ui-plc__status-label{font-weight: 500}.ui-plc__shimmer{color: var(--ui-plc-muted)}.ui-plc__shimmer::after{content: attr(data-text);content: attr(data-text) / "";position: absolute;inset: 0;white-space: nowrap;color: transparent;background: linear-gradient(90deg, transparent 38%, var(--ui-plc-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;-webkit-background-clip: text;background-clip: text;animation: ui-plc-sweep 1.6s linear infinite;pointer-events: none}.ui-plc__elapsed{margin-left: auto;padding-right: 6px;color: var(--ui-plc-faint);font-variant-numeric: tabular-nums;white-space: nowrap}@media (hover: none){.ui-plc__grip, .ui-plc__remove{opacity: 1}}@media (pointer: coarse){.ui-plc__foot{min-height: 56px}.ui-plc__btn, .ui-plc__retry{height: 36px}.ui-plc__remove{width: 36px;height: 36px;margin: -8px -10px -8px 0}.ui-plc__grip::after{content: "";position: absolute;inset: -8px -6px}}@container (max-width: 400px){.ui-plc__hint{display: none}}@container (max-width: 340px){.ui-plc__head{padding: 14px 14px 10px}.ui-plc__list{padding-inline: 4px}.ui-plc__step, .ui-plc__add{column-gap: 8px;padding-right: 8px}.ui-plc__add{margin-inline: 4px}.ui-plc__foot{padding-left: 14px}}@keyframes ui-plc-fade{from{opacity: 0;transform: translateY(3px)}to{opacity: 1;transform: none}}@keyframes ui-plc-enter{from{opacity: 0;transform: translateY(6px)}to{opacity: 1;transform: none}}@keyframes ui-plc-pop{from{opacity: 0;transform: scale(0.5)}to{opacity: 1;transform: none}}@keyframes ui-plc-draw{to{stroke-dashoffset: 0}}@keyframes ui-plc-ray{0%{opacity: 1}100%{opacity: 0.18}}@keyframes ui-plc-sweep{from{background-position: 100% 0}to{background-position: 0% 0}}@media (prefers-reduced-motion: reduce){.ui-plc *, .ui-plc *::before, .ui-plc *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;animation-iteration-count: 1 !important;transition-duration: 1ms !important;transition-delay: 0ms !important}.ui-plc__spinner line{opacity: 0.6}.ui-plc__draw{stroke-dashoffset: 0}.ui-plc__shimmer::after{display: none}}:where(.dark, [data-theme="dark"]) .ui-plc{--ui-plc-card: #1c1c1e;--ui-plc-ink: rgba(255, 255, 255, 0.9);--ui-plc-strong: #ffffff;--ui-plc-text: rgba(255, 255, 255, 0.62);--ui-plc-muted: rgba(255, 255, 255, 0.46);--ui-plc-faint: rgba(255, 255, 255, 0.3);--ui-plc-icon: rgba(255, 255, 255, 0.5);--ui-plc-line: rgba(255, 255, 255, 0.08);--ui-plc-ring: rgba(255, 255, 255, 0.14);--ui-plc-rail: rgba(255, 255, 255, 0.1);--ui-plc-fill: rgba(255, 255, 255, 0.08);--ui-plc-wash: rgba(255, 255, 255, 0.04);--ui-plc-chip: rgba(255, 255, 255, 0.07);--ui-plc-accent: #4d8dff;--ui-plc-red: #ff6b70;--ui-plc-red-bg: rgba(229, 72, 77, 0.14);--ui-plc-primary: rgba(255, 255, 255, 0.9);--ui-plc-primary-hover: rgba(255, 255, 255, 0.8);--ui-plc-on-primary: #1c1c1e;--ui-plc-raise-hover: #232326;--ui-plc-shine: #ffffff;--ui-plc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-plc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 28px -10px rgba(0, 0, 0, 0.6);--ui-plc-focus: rgba(77, 141, 255, 0.5);--ui-plc-edit-glow: rgba(77, 141, 255, 0.14)}:where(.dark, [data-theme="dark"]) .ui-plc__marker{box-shadow: inset 0 0 0 0.5px var(--ui-plc-ring)}`;
var g = [{ id: `revenue`, title: `Pull Q3 revenue and ARR`, detail: `Monthly revenue, ARR and net retention`, tool: `stripe.query` }, { id: `launches`, title: `Summarize product launches`, detail: `Shipped projects and adoption`, tool: `linear.search` }, { id: `slides`, title: `Build the KPI slides`, detail: `Six charts in the board template`, tool: `slides.create` }, { id: `memo`, title: `Draft the board memo`, detail: `One page, wins, risks and asks`, tool: `docs.write` }, { id: `email`, title: `Send the draft to Maya for review`, tool: `gmail.draft` }];
var _ = { revenue: 1300, launches: 1100, slides: 1400, memo: 1250, email: 900 };
var v = `slides`;
function y() {
  let [e, t] = (0, n3.useState)(g), [i2, a2] = (0, n3.useState)(`draft`), o2 = (0, n3.useRef)(null), s2 = (0, n3.useRef)(true), c2 = (0, n3.useRef)([]), l2 = (0, n3.useRef)([]), u2 = (0, n3.useRef)(i2);
  u2.current = i2;
  let d2 = (0, n3.useRef)(true), f2 = (e2, t2, n4) => {
    e2.current.push(window.setTimeout(t2, n4));
  }, m2 = (e2) => {
    e2.current.forEach((e3) => window.clearTimeout(e3)), e2.current = [];
  }, h2 = (e2) => o2.current?.querySelector(e2)?.click(), y2 = (e2, n4) => t((t2) => t2.map((t3) => t3.id === e2 ? { ...t3, ...n4 } : t3)), b = (e2, t2) => {
    if (t2 >= e2.length) {
      a2(`done`), s2.current ? f2(c2, S, 3600) : f2(l2, x, 3200);
      return;
    }
    let n4 = e2[t2];
    y2(n4.id, { status: `active`, error: void 0 });
    let r2 = _[n4.id] ?? 1200;
    f2(l2, () => {
      if (n4.id === v && d2.current) {
        d2.current = false, y2(n4.id, { status: `failed`, error: `Slides API timed out after 30s` }), s2.current && f2(c2, () => h2(`.ui-plc__retry`), 1700);
        return;
      }
      y2(n4.id, { status: `done` }), b(e2, t2 + 1);
    }, r2);
  }, ee = (e2) => {
    m2(l2), d2.current = true;
    let n4 = e2.map(({ status: e3, error: t2, duration: n5, ...r2 }) => r2);
    t(n4), a2(`running`), f2(l2, () => b(n4, 0), 350);
  }, te = (e2) => {
    m2(l2);
    let n4 = [];
    t((t2) => {
      let r2 = t2.findIndex((t3) => t3.id === e2);
      return n4 = t2.map((e3, t3) => t3 >= r2 ? { ...e3, status: `pending`, error: void 0 } : e3), n4;
    }), f2(l2, () => b(n4, n4.findIndex((t2) => t2.id === e2)), 250);
  }, x = () => {
    t((e2) => e2.map(({ status: e3, error: t2, duration: n4, ...r2 }) => r2)), a2(`draft`);
  }, S = () => {
    m2(l2), t(g), a2(`draft`), f2(c2, () => t((e2) => {
      let t2 = e2.findIndex((e3) => e3.id === `memo`);
      if (t2 < 1) return e2;
      let n4 = e2.slice(), [r2] = n4.splice(t2, 1);
      return n4.splice(t2 - 1, 0, r2), n4;
    }), 1500), f2(c2, () => h2(`.ui-plc__run`), 3e3);
  };
  (0, n3.useEffect)(() => (S(), () => {
    m2(c2), m2(l2);
  }), []);
  let C = (e2) => {
    e2 && s2.current && (s2.current = false, m2(c2), u2.current === `done` && f2(l2, x, 1200));
  };
  return (0, r.jsx)(`div`, { ref: o2, className: `pl-demo`, onPointerDownCapture: (e2) => C(e2.nativeEvent.isTrusted), onKeyDownCapture: (e2) => C(e2.nativeEvent.isTrusted), children: (0, r.jsx)(p, { title: `Prepare the Q3 board update`, estimate: `~2 min`, steps: e, status: i2, onChange: t, onRun: ee, onCancel: () => {
    m2(l2), t(g), a2(`draft`);
  }, onRetry: te }) });
}

export {
  y
};
