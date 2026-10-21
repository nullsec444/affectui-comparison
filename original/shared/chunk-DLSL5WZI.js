import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo.clean-BXz9gUDp.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = /\s+|[\p{L}\p{N}_'’]+|[^\s\p{L}\p{N}_]/gu;
var a = (e) => /^\s+$/.test(e);
function o(e, t) {
  let n4 = e.match(i) ?? [], r2 = t.match(i) ?? [], o2 = 0;
  for (; o2 < n4.length && o2 < r2.length && n4[o2] === r2[o2]; ) o2++;
  let s2 = 0;
  for (; s2 < n4.length - o2 && s2 < r2.length - o2 && n4[n4.length - 1 - s2] === r2[r2.length - 1 - s2]; ) s2++;
  let c2 = n4.slice(o2, n4.length - s2), l2 = r2.slice(o2, r2.length - s2), u2 = c2.length, d2 = l2.length, f2 = n4.slice(0, o2).map((e2) => ({ t: 0, s: e2 }));
  if (u2 * d2 > 4e6) c2.forEach((e2) => f2.push({ t: 1, s: e2 })), l2.forEach((e2) => f2.push({ t: 2, s: e2 }));
  else {
    let e2 = d2 + 1, t2 = new Uint16Array((u2 + 1) * e2);
    for (let n6 = u2 - 1; n6 >= 0; n6--) for (let r4 = d2 - 1; r4 >= 0; r4--) t2[n6 * e2 + r4] = c2[n6] === l2[r4] ? t2[(n6 + 1) * e2 + r4 + 1] + 1 : Math.max(t2[(n6 + 1) * e2 + r4], t2[n6 * e2 + r4 + 1]);
    let n5 = 0, r3 = 0;
    for (; n5 < u2 && r3 < d2; ) c2[n5] === l2[r3] ? (f2.push({ t: 0, s: c2[n5] }), n5++, r3++) : t2[(n5 + 1) * e2 + r3] >= t2[n5 * e2 + r3 + 1] ? f2.push({ t: 1, s: c2[n5++] }) : f2.push({ t: 2, s: l2[r3++] });
    for (; n5 < u2; ) f2.push({ t: 1, s: c2[n5++] });
    for (; r3 < d2; ) f2.push({ t: 2, s: l2[r3++] });
  }
  n4.slice(n4.length - s2).forEach((e2) => f2.push({ t: 0, s: e2 }));
  for (let e2 = 0; e2 < f2.length; e2++) {
    if (f2[e2].t === 0 || e2 > 0 && f2[e2 - 1].t !== 0) continue;
    let t2 = f2[e2].t, n5 = e2;
    for (; n5 < f2.length && f2[n5].t === t2; ) n5++;
    if (!(n5 < f2.length && f2[n5].t !== 0)) {
      for (; n5 < f2.length && f2[n5].t === 0 && f2[n5].s === f2[e2].s && a(f2[e2].s); ) f2[n5] = { t: t2, s: f2[n5].s }, f2[e2] = { t: 0, s: f2[e2].s }, e2++, n5++;
      e2 = n5 - 1;
    }
  }
  let p2 = [];
  for (let e2 of f2) {
    let t2 = p2[p2.length - 1];
    if (e2.t === 0) t2?.type === `equal` ? t2.text += e2.s : p2.push({ type: `equal`, text: e2.s });
    else {
      t2?.type !== `change` && p2.push({ type: `change`, remove: ``, insert: `` });
      let n5 = p2[p2.length - 1];
      e2.t === 1 ? n5.remove += e2.s : n5.insert += e2.s;
    }
  }
  let m2 = [];
  for (let e2 = 0; e2 < p2.length; e2++) {
    let t2 = p2[e2], n5 = m2[m2.length - 1], r3 = p2[e2 + 1];
    if (t2.type === `equal` && a(t2.text) && n5?.type === `change` && r3?.type === `change`) {
      n5.remove += t2.text + r3.remove, n5.insert += t2.text + r3.insert, e2++;
      continue;
    }
    m2.push({ ...t2 });
  }
  let h2 = [], g2 = (e2) => {
    if (!e2) return;
    let t2 = h2[h2.length - 1];
    t2?.type === `equal` ? t2.text += e2 : h2.push({ type: `equal`, text: e2 });
  };
  for (let e2 of m2) {
    if (e2.type === `equal`) {
      g2(e2.text);
      continue;
    }
    let { remove: t2, insert: n5 } = e2, r3 = ``, i2 = ``;
    if (t2 && n5) {
      let e3 = t2.match(/^\s+/)?.[0] ?? ``;
      e3 && n5.startsWith(e3) && e3.length < t2.length && e3.length < n5.length && (r3 = e3, t2 = t2.slice(e3.length), n5 = n5.slice(e3.length));
      let a2 = t2.match(/\s+$/)?.[0] ?? ``;
      a2 && n5.endsWith(a2) && a2.length < t2.length && a2.length < n5.length && (i2 = a2, t2 = t2.slice(0, -a2.length), n5 = n5.slice(0, -a2.length));
    }
    g2(r3), h2.push({ type: `change`, remove: t2, insert: n5 }), g2(i2);
  }
  return h2;
}
var s = (e) => `${e} suggestion${e === 1 ? `` : `s`}`;
var c = (e) => `\u201C${e.trim()}\u201D`;
var l = (e) => e.remove.trim() && e.insert.trim() ? `replace ${c(e.remove)} with ${c(e.insert)}` : e.insert.trim() ? `add ${c(e.insert)}` : `remove ${c(e.remove)}`;
function u({ original: e = ``, suggested: t = ``, changes: i2, onChange: a2, onDone: c2, label: u2, ref: f2, className: p2 }) {
  let m2 = (0, n3.useMemo)(() => i2 ?? o(e, t), [i2, e, t]), h2 = (0, n3.useMemo)(() => JSON.stringify(m2), [m2]), g2 = (0, n3.useMemo)(() => {
    let e2 = [];
    return m2.forEach((t2, n4) => {
      t2.type === `change` && e2.push({ seg: n4, remove: t2.remove, insert: t2.insert });
    }), e2;
  }, [m2]), [_2, v2] = (0, n3.useState)({}), [y, b] = (0, n3.useState)([]), [x, S] = (0, n3.useState)(null), [C, w] = (0, n3.useState)(null), [T, E] = (0, n3.useState)(null), [D, O] = (0, n3.useState)(``), [k, A] = (0, n3.useState)(h2);
  k !== h2 && (A(h2), v2({}), b([]), S(null), w(null), E(null));
  let j = (0, n3.useRef)(null), M = (0, n3.useRef)(null), N = (0, n3.useRef)(null), P = (0, n3.useRef)(null), F = (0, n3.useRef)([]), I = (0, n3.useRef)(0), L = (0, n3.useRef)(null), R = (0, n3.useRef)(null), z = (0, n3.useRef)({ onChange: a2, onDone: c2 });
  z.current = { onChange: a2, onDone: c2 };
  let B = g2.map((e2, t2) => t2).filter((e2) => !_2[e2]), V = g2.length > 0 && B.length === 0, H = (e2) => m2.map((t2, n4) => t2.type === `equal` ? t2.text : e2[g2.findIndex((e3) => e3.seg === n4)] === `accepted` ? t2.insert : t2.remove).join(``), U = (0, n3.useRef)({ decisions: _2, history: y, list: g2, pending: B });
  U.current = { decisions: _2, history: y, list: g2, pending: B };
  let W = (e2, t2, n4 = false) => {
    let { decisions: r2, list: i3 } = U.current, a3 = e2.filter((e3) => e3 >= 0 && e3 < i3.length && !r2[e3]);
    if (!a3.length) return;
    let o2 = { ...r2 };
    a3.forEach((e3) => o2[e3] = t2);
    let c3 = i3.length - Object.keys(o2).length;
    v2(o2), b((e3) => [...e3, a3]), E(null), R.current = Math.max(...a3);
    let u3 = t2 === `accepted` ? `Accepted` : `Rejected`, d2 = a3.length === 1 ? l(i3[a3[0]]).replace(/^./, (e3) => e3.toUpperCase()) : `${a3.length} suggestions`;
    if (O(`${u3}: ${d2}. ${c3 ? `${s(c3)} left.` : `All changes reviewed.`}`), n4) {
      let e3 = Math.max(...a3), t3 = i3.map((e4, t4) => t4).filter((e4) => !o2[e4]);
      L.current = c3 ? t3.find((t4) => t4 > e3) ?? t3[0] : `undo`;
    }
    let f3 = H(o2);
    z.current.onChange?.(f3), c3 || z.current.onDone?.(f3);
  }, G = (e2 = false) => {
    let { decisions: t2, history: n4 } = U.current, r2 = n4[n4.length - 1];
    if (!r2) return;
    let i3 = { ...t2 };
    r2.forEach((e3) => delete i3[e3]), v2(i3), b(n4.slice(0, -1)), O(`Undone. ${s(U.current.list.length - Object.keys(i3).length)} left.`), e2 && (L.current = Math.min(...r2)), z.current.onChange?.(H(i3));
  }, K = () => {
    v2({}), b([]), E(null), S(null), O(``), R.current = null;
  };
  (0, n3.useImperativeHandle)(f2, () => ({ highlight: (e2) => E(e2), accept: (e2) => W([e2], `accepted`), reject: (e2) => W([e2], `rejected`), acceptAll: () => W(U.current.pending, `accepted`), rejectAll: () => W(U.current.pending, `rejected`), undo: () => G(), reset: K })), (0, n3.useLayoutEffect)(() => {
    let e2 = L.current;
    e2 !== null && (L.current = null, e2 === `undo` ? P.current?.focus() : F.current[e2]?.focus());
  }, [_2]);
  let q = [x, C, T].find((e2) => e2 !== null && !_2[e2] && e2 < g2.length) ?? null;
  (0, n3.useEffect)(() => {
    q !== null && (R.current = q);
  }, [q]);
  let J = (e2) => {
    let t2 = U.current.pending;
    if (!t2.length) return;
    let n4 = q ?? R.current ?? (e2 === 1 ? -1 : 1 / 0), r2 = e2 === 1 ? t2.find((e3) => e3 > n4) ?? t2[0] : [...t2].reverse().find((e3) => e3 < n4) ?? t2[t2.length - 1];
    window.clearTimeout(I.current), S(null), E(r2), R.current = r2;
    let i3 = F.current[r2];
    if (!i3) return;
    C !== null && i3.focus({ preventScroll: true });
    let a3 = window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;
    i3.scrollIntoView({ block: `nearest`, inline: `nearest`, behavior: a3 ? `auto` : `smooth` });
  };
  (0, n3.useEffect)(() => {
    if (T === null) return;
    let e2 = (e3) => {
      j.current?.contains(e3.target) || E(null);
    };
    return document.addEventListener(`pointerdown`, e2), () => document.removeEventListener(`pointerdown`, e2);
  }, [T]);
  let [Y, ee] = (0, n3.useState)(null), X = (0, n3.useRef)(false);
  (0, n3.useLayoutEffect)(() => {
    let e2 = () => {
      let e3 = M.current, t3 = N.current, n4 = q === null ? null : F.current[q];
      if (!e3 || !t3 || !n4) return;
      let r2 = e3.getBoundingClientRect(), i3 = r2.width ? e3.offsetWidth / r2.width : 1, a3 = n4.getClientRects()[0] ?? n4.getBoundingClientRect(), o2 = t3.offsetWidth, s2 = t3.offsetHeight, c3 = (a3.left - r2.left + a3.width / 2) * i3, l2 = Math.min(Math.max(c3 - o2 / 2, 8), Math.max(8, e3.offsetWidth - o2 - 8)), u3 = (a3.top - r2.top) * i3 - s2 - 6;
      ee({ left: l2, top: u3, snap: !X.current }), X.current = true;
    };
    if (q === null) {
      X.current = false;
      return;
    }
    e2();
    let t2 = new ResizeObserver(e2);
    return M.current && t2.observe(M.current), () => t2.disconnect();
  }, [q, _2]);
  let Z = (e2) => {
    window.clearTimeout(I.current), S(e2);
  }, Q = () => {
    window.clearTimeout(I.current), I.current = window.setTimeout(() => S(null), 140);
  };
  (0, n3.useEffect)(() => () => window.clearTimeout(I.current), []);
  let te = (e2, t2) => {
    if (e2.metaKey || e2.ctrlKey || e2.altKey) return;
    let n4 = e2.key.toLowerCase();
    n4 === `y` || n4 === `enter` ? (e2.preventDefault(), W([t2], `accepted`, true)) : n4 === `n` || n4 === `backspace` || n4 === `delete` ? (e2.preventDefault(), W([t2], `rejected`, true)) : n4 === `escape` && e2.currentTarget.blur();
  }, ne = g2.length, $ = -1;
  return (0, r.jsxs)(`div`, { ref: j, className: [`ui-dfc`, p2].filter(Boolean).join(` `), "data-done": V || void 0, onKeyDown: (e2) => {
    e2.key === `Escape` && T !== null && E(null);
  }, children: [(0, r.jsx)(`style`, { href: `ui-inline-diff-clean`, precedence: `default`, children: d }), (0, r.jsxs)(`div`, { ref: M, className: `ui-dfc__card`, children: [(0, r.jsxs)(`div`, { className: `ui-dfc__body`, children: [u2 && (0, r.jsxs)(`div`, { className: `ui-dfc__label`, children: [(0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [(0, r.jsx)(`path`, { d: `M8 1.75c.3 2.9 1.35 3.95 4.25 4.25-2.9.3-3.95 1.35-4.25 4.25C7.7 7.35 6.65 6.3 3.75 6 6.65 5.7 7.7 4.65 8 1.75Z` }), (0, r.jsx)(`path`, { d: `M12.5 10.25c.15 1.25.6 1.7 1.75 1.75-1.15.15-1.6.6-1.75 1.75-.15-1.15-.6-1.6-1.75-1.75 1.15-.05 1.6-.5 1.75-1.75Z` })] }), (0, r.jsx)(`span`, { children: u2 })] }), (0, r.jsx)(`p`, { className: `ui-dfc__text`, children: m2.map((e2, t2) => {
    if (e2.type === `equal`) return (0, r.jsx)(`span`, { children: e2.text }, t2);
    $++;
    let n4 = $, i3 = _2[n4] ?? `pending`, a3 = i3 === `pending`;
    return (0, r.jsxs)(`span`, { ref: (e3) => {
      F.current[n4] = e3;
    }, className: `ui-dfc__chg`, "data-state": i3, "data-active": q === n4 || void 0, tabIndex: a3 ? 0 : void 0, role: a3 ? `button` : void 0, "aria-label": a3 ? `Suggestion ${n4 + 1} of ${ne}: ${l(e2)}. Press Y to accept, N to reject` : void 0, onKeyDown: a3 ? (e3) => te(e3, n4) : void 0, onFocus: () => w(n4), onBlur: () => w((e3) => e3 === n4 ? null : e3), onMouseEnter: () => Z(n4), onMouseLeave: Q, children: [e2.remove && (0, r.jsx)(`del`, { className: `ui-dfc__del`, "aria-hidden": i3 === `accepted` || void 0, children: e2.remove }), e2.insert && (0, r.jsx)(`ins`, { className: `ui-dfc__ins`, "aria-hidden": i3 === `rejected` || void 0, children: e2.insert })] }, t2);
  }) })] }), (0, r.jsx)(`div`, { className: `ui-dfc__foot`, children: (0, r.jsxs)(`div`, { className: `ui-dfc__bar`, children: [(0, r.jsxs)(`div`, { className: `ui-dfc__layer`, "data-show": !V || void 0, inert: V, "aria-hidden": V || void 0, children: [(0, r.jsxs)(`span`, { className: `ui-dfc__count`, children: [(0, r.jsx)(`span`, { className: `ui-dfc__num`, children: B.length }), (0, r.jsx)(`span`, { className: `ui-dfc__word`, children: B.length === 1 ? `suggestion` : `suggestions` })] }), (0, r.jsxs)(`span`, { className: `ui-dfc__actions`, children: [(0, r.jsxs)(`span`, { className: `ui-dfc__nav`, onMouseDown: (e2) => e2.preventDefault(), children: [(0, r.jsx)(`button`, { type: `button`, className: `ui-dfc__icon`, onClick: () => J(-1), disabled: !B.length, "aria-label": `Previous suggestion`, children: (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M10 12.5 5.5 8 10 3.5` }) }) }), (0, r.jsx)(`button`, { type: `button`, className: `ui-dfc__icon`, onClick: () => J(1), disabled: !B.length, "aria-label": `Next suggestion`, children: (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M6 3.5 10.5 8 6 12.5` }) }) })] }), (0, r.jsx)(`button`, { type: `button`, className: `ui-dfc__btn`, onClick: () => W(B, `rejected`), disabled: !B.length, children: `Reject all` }), (0, r.jsx)(`button`, { type: `button`, className: `ui-dfc__btn ui-dfc__btn--primary`, onClick: () => W(B, `accepted`), disabled: !B.length, children: `Accept all` })] })] }), (0, r.jsxs)(`div`, { className: `ui-dfc__layer`, "data-show": V || void 0, inert: !V, "aria-hidden": !V || void 0, children: [(0, r.jsxs)(`span`, { className: `ui-dfc__count ui-dfc__count--done`, children: [(0, r.jsx)(`svg`, { className: `ui-dfc__ok`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M3.75 8.4 6.6 11.1 12.25 5`, pathLength: 1 }) }), `All changes reviewed`] }), (0, r.jsxs)(`button`, { ref: P, type: `button`, className: `ui-dfc__btn`, onClick: () => G(true), disabled: !y.length, children: [(0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [(0, r.jsx)(`path`, { d: `M5.5 4 2.75 6.75 5.5 9.5` }), (0, r.jsx)(`path`, { d: `M3 6.75h6.5a3.75 3.75 0 0 1 0 7.5H7.5` })] }), `Undo`] })] })] }) }), (0, r.jsxs)(`div`, { ref: N, className: `ui-dfc__pop`, "data-open": q !== null || void 0, "data-snap": Y?.snap || void 0, style: Y ? { left: Y.left, top: Y.top } : void 0, role: `group`, "aria-label": `Review suggestion`, "aria-hidden": q === null || void 0, onMouseEnter: () => q !== null && Z(q), onMouseLeave: Q, onMouseDown: (e2) => e2.preventDefault(), children: [(0, r.jsxs)(`button`, { type: `button`, tabIndex: -1, className: `ui-dfc__pbtn ui-dfc__pbtn--primary`, "aria-label": `Accept suggestion`, onClick: () => q !== null && W([q], `accepted`, C === q), children: [(0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M3.75 8.4 6.6 11.1 12.25 5` }) }), `Accept`, (0, r.jsx)(`kbd`, { children: `Y` })] }), (0, r.jsxs)(`button`, { type: `button`, tabIndex: -1, className: `ui-dfc__pbtn`, "aria-label": `Reject suggestion`, onClick: () => q !== null && W([q], `rejected`, C === q), children: [(0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M4.5 4.5l7 7M11.5 4.5l-7 7` }) }), `Reject`, (0, r.jsx)(`kbd`, { children: `N` })] })] })] }), (0, r.jsx)(`span`, { className: `ui-dfc__sr`, role: `status`, "aria-live": `polite`, children: D })] });
}
var d = `.ui-dfc{--ui-dfc-card: #ffffff;--ui-dfc-ink: rgba(0, 0, 0, 0.88);--ui-dfc-strong: #000000;--ui-dfc-text: rgba(0, 0, 0, 0.61);--ui-dfc-muted: rgba(0, 0, 0, 0.45);--ui-dfc-faint: rgba(0, 0, 0, 0.27);--ui-dfc-icon: rgba(0, 0, 0, 0.447);--ui-dfc-line: rgba(0, 0, 0, 0.06);--ui-dfc-fill: rgba(0, 0, 0, 0.06);--ui-dfc-wash: rgba(0, 0, 0, 0.03);--ui-dfc-accent: rgba(0, 96, 226, 0.765);--ui-dfc-add: rgba(26, 154, 82, 0.1);--ui-dfc-add-strong: rgba(26, 154, 82, 0.16);--ui-dfc-del: rgba(229, 72, 77, 0.08);--ui-dfc-del-strong: rgba(229, 72, 77, 0.14);--ui-dfc-del-ink: rgba(0, 0, 0, 0.45);--ui-dfc-strike: rgba(229, 72, 77, 0.6);--ui-dfc-ok: #1a9a52;--ui-dfc-primary: rgba(0, 0, 0, 0.88);--ui-dfc-primary-ink: #fcfcfc;--ui-dfc-primary-kbd: rgba(255, 255, 255, 0.16);--ui-dfc-primary-kbd-ink: rgba(255, 255, 255, 0.66);--ui-dfc-secondary-hover: #fafafa;--ui-dfc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-dfc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-dfc-focus: rgba(0, 96, 226, 0.35);--ui-dfc-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;display: grid;width: 100%;min-width: 0;color: var(--ui-dfc-ink);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;-webkit-font-smoothing: antialiased;text-align: left}.ui-dfc *, .ui-dfc *::before, .ui-dfc *::after{box-sizing: border-box}:where(.ui-dfc) button{appearance: none;margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-dfc) svg{display: block;flex: none}.ui-dfc__card{position: relative;min-width: 0;border-radius: 10px;background: var(--ui-dfc-card);box-shadow: var(--ui-dfc-shadow);container: ui-dfc-card / inline-size}.ui-dfc__label{display: flex;align-items: center;gap: 6px;min-width: 0;margin: 0 0 8px;color: var(--ui-dfc-text);font-size: 12px;line-height: 16px}.ui-dfc__label span{overflow: hidden;text-overflow: ellipsis;white-space: nowrap}.ui-dfc__label svg{width: 16px;height: 16px;fill: var(--ui-dfc-accent)}.ui-dfc__body{padding: 16px 16px 18px}.ui-dfc__text{margin: 0;color: var(--ui-dfc-ink);font-size: 13px;line-height: 22px;white-space: pre-line;overflow-wrap: anywhere}.ui-dfc__chg{border-radius: 4px;cursor: pointer;scroll-margin: 64px 0 72px}.ui-dfc__chg:not([data-state="pending"]){cursor: auto}.ui-dfc__chg:focus{outline: none}.ui-dfc__chg:focus-visible{outline: 2px solid var(--ui-dfc-focus);outline-offset: 1px}.ui-dfc__del, .ui-dfc__ins{padding: 1px 2px;border-radius: 4px;-webkit-box-decoration-break: clone;box-decoration-break: clone;font-size: 1em;transition: background-color 360ms ease, color 360ms ease, text-decoration-color 300ms ease, font-size 460ms var(--ui-dfc-ease), padding 460ms var(--ui-dfc-ease), margin 460ms var(--ui-dfc-ease), opacity 300ms ease}.ui-dfc__del{background: var(--ui-dfc-del);color: var(--ui-dfc-del-ink);text-decoration: line-through;text-decoration-color: var(--ui-dfc-strike);text-decoration-thickness: 1px}.ui-dfc__ins{background: var(--ui-dfc-add);color: var(--ui-dfc-ink);text-decoration: none}.ui-dfc__del + .ui-dfc__ins{margin-left: 3px}.ui-dfc__chg[data-active] .ui-dfc__del{background: var(--ui-dfc-del-strong)}.ui-dfc__chg[data-active] .ui-dfc__ins{background: var(--ui-dfc-add-strong)}.ui-dfc__chg[data-state="accepted"] .ui-dfc__del, .ui-dfc__chg[data-state="rejected"] .ui-dfc__ins{font-size: 0;padding: 0;margin: 0;opacity: 0}.ui-dfc__chg[data-state="accepted"] .ui-dfc__ins, .ui-dfc__chg[data-state="rejected"] .ui-dfc__del{padding: 0;margin: 0;background: transparent;color: inherit;text-decoration-color: transparent}.ui-dfc__foot{display: grid;align-items: center;min-height: 44px;padding: 8px 8px 8px 16px;border-top: 0.5px solid var(--ui-dfc-line)}.ui-dfc__bar{display: grid}.ui-dfc__layer{grid-area: 1 / 1;display: flex;flex-wrap: wrap;align-items: center;justify-content: space-between;gap: 8px;min-width: 0;opacity: 0;visibility: hidden;transform: translateY(4px);filter: blur(2px);transition: opacity 260ms ease, transform 420ms var(--ui-dfc-ease), filter 260ms ease, visibility 0s 420ms}.ui-dfc__layer[data-show]{opacity: 1;visibility: visible;transform: none;filter: none;transition: opacity 320ms ease 80ms, transform 460ms var(--ui-dfc-ease) 80ms, filter 320ms ease 80ms, visibility 0s}@container ui-dfc-card (max-width: 400px){.ui-dfc__word{position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap}}.ui-dfc__count{display: inline-flex;align-items: center;gap: 8px;color: var(--ui-dfc-text);font-size: 13px;line-height: 20px;white-space: nowrap}.ui-dfc__count--done{gap: 6px;color: var(--ui-dfc-ink);font-weight: 500}.ui-dfc__num{display: inline-grid;place-items: center;min-width: 20px;height: 20px;padding: 0 6px;border-radius: 5px;background: var(--ui-dfc-fill);color: var(--ui-dfc-ink);font-size: 12px;font-weight: 500;font-variant-numeric: tabular-nums}.ui-dfc__ok{width: 16px;height: 16px;fill: none;stroke: var(--ui-dfc-ok);stroke-width: 1.5;stroke-linecap: round;stroke-linejoin: round;stroke-dasharray: 1;stroke-dashoffset: 1}.ui-dfc[data-done] .ui-dfc__ok{animation: ui-dfc-draw 420ms var(--ui-dfc-ease) 220ms forwards}.ui-dfc__actions{display: inline-flex;align-items: center;gap: 8px;margin-left: auto}.ui-dfc__nav{display: inline-flex;gap: 2px}.ui-dfc__btn, .ui-dfc__icon{display: inline-flex;align-items: center;justify-content: center;gap: 6px;height: 28px;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;white-space: nowrap;transition: background-color 160ms ease, color 160ms ease, opacity 160ms ease, transform 160ms var(--ui-dfc-ease)}.ui-dfc__btn{padding: 0 10px;background: var(--ui-dfc-card);box-shadow: var(--ui-dfc-shadow);color: var(--ui-dfc-strong)}.ui-dfc__btn:has(svg){padding: 0 10px 0 8px}.ui-dfc__icon{width: 28px;color: var(--ui-dfc-icon)}.ui-dfc__btn svg, .ui-dfc__icon svg, .ui-dfc__pbtn svg{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-dfc__btn svg{color: var(--ui-dfc-icon)}.ui-dfc__btn:hover:not(:disabled){background: var(--ui-dfc-secondary-hover)}.ui-dfc__icon:hover:not(:disabled){background: var(--ui-dfc-wash);color: var(--ui-dfc-ink)}.ui-dfc__btn--primary{background: var(--ui-dfc-primary);color: var(--ui-dfc-primary-ink);box-shadow: none}.ui-dfc__btn--primary:hover:not(:disabled){background: var(--ui-dfc-primary);opacity: 0.9}.ui-dfc__btn:active:not(:disabled), .ui-dfc__icon:active:not(:disabled){transform: scale(0.97)}.ui-dfc__btn:disabled, .ui-dfc__icon:disabled{opacity: 0.4;cursor: default}.ui-dfc__btn:focus-visible, .ui-dfc__icon:focus-visible{outline: 2px solid var(--ui-dfc-focus);outline-offset: 1px}.ui-dfc__pop{position: absolute;top: 0;left: 0;z-index: 2;display: flex;align-items: center;gap: 4px;padding: 4px;border-radius: 10px;background: var(--ui-dfc-card);box-shadow: var(--ui-dfc-shadow-pop);opacity: 0;visibility: hidden;transform: translateY(4px) scale(0.96);transform-origin: 50% 100%;pointer-events: none;transition: opacity 160ms ease, transform 240ms var(--ui-dfc-ease), left 90ms ease-out, top 90ms ease-out, visibility 0s 240ms}.ui-dfc__pop[data-open]{opacity: 1;visibility: visible;transform: none;pointer-events: auto;transition: opacity 160ms ease, transform 280ms var(--ui-dfc-ease), left 90ms ease-out, top 90ms ease-out, visibility 0s}.ui-dfc__pop[data-snap]{transition-property: opacity, transform, visibility}.ui-dfc__pbtn{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 6px 0 8px;border-radius: 6px;background: var(--ui-dfc-card);box-shadow: var(--ui-dfc-shadow);color: var(--ui-dfc-strong);font-size: 13px;font-weight: 500;line-height: 20px;white-space: nowrap;transition: background-color 140ms ease, opacity 140ms ease}.ui-dfc__pbtn svg{color: var(--ui-dfc-icon)}.ui-dfc__pbtn:hover{background: var(--ui-dfc-secondary-hover)}.ui-dfc__pbtn--primary{background: var(--ui-dfc-primary);box-shadow: none;color: var(--ui-dfc-primary-ink)}.ui-dfc__pbtn--primary svg{color: currentColor}.ui-dfc__pbtn--primary:hover{background: var(--ui-dfc-primary);opacity: 0.9}.ui-dfc__pbtn kbd{display: inline-grid;place-items: center;min-width: 16px;height: 16px;padding: 0 4px;border-radius: 4px;background: var(--ui-dfc-fill);color: var(--ui-dfc-muted);font: inherit;font-size: 10px;font-weight: 500;line-height: 16px}.ui-dfc__pbtn--primary kbd{background: var(--ui-dfc-primary-kbd);color: var(--ui-dfc-primary-kbd-ink)}.ui-dfc__sr{position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap;border: 0}@keyframes ui-dfc-draw{to{stroke-dashoffset: 0}}@container ui-dfc-card (max-width: 360px){.ui-dfc__nav{display: none}.ui-dfc__body{padding: 14px 14px 16px}.ui-dfc__foot{padding-left: 14px}}@media (hover: none) and (pointer: coarse){.ui-dfc__pbtn kbd{display: none}.ui-dfc__pbtn{height: 34px;padding: 0 12px 0 10px}.ui-dfc__btn{height: 34px}.ui-dfc__icon{width: 34px;height: 34px}.ui-dfc__foot{min-height: 52px}}@media (prefers-reduced-motion: reduce){.ui-dfc *, .ui-dfc *::before, .ui-dfc *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;transition-duration: 1ms !important;transition-delay: 0ms !important}.ui-dfc__layer{filter: none;transform: none}}:where(.dark, [data-theme="dark"]) .ui-dfc{--ui-dfc-card: #1c1c1e;--ui-dfc-ink: rgba(255, 255, 255, 0.9);--ui-dfc-strong: #ffffff;--ui-dfc-text: rgba(255, 255, 255, 0.62);--ui-dfc-muted: rgba(255, 255, 255, 0.46);--ui-dfc-faint: rgba(255, 255, 255, 0.3);--ui-dfc-icon: rgba(255, 255, 255, 0.5);--ui-dfc-line: rgba(255, 255, 255, 0.08);--ui-dfc-fill: rgba(255, 255, 255, 0.08);--ui-dfc-wash: rgba(255, 255, 255, 0.04);--ui-dfc-accent: #4d8dff;--ui-dfc-add: rgba(62, 194, 122, 0.14);--ui-dfc-add-strong: rgba(62, 194, 122, 0.22);--ui-dfc-del: rgba(240, 90, 90, 0.14);--ui-dfc-del-strong: rgba(240, 90, 90, 0.22);--ui-dfc-del-ink: rgba(255, 255, 255, 0.46);--ui-dfc-strike: rgba(255, 120, 120, 0.7);--ui-dfc-ok: #3ec27a;--ui-dfc-primary: rgba(255, 255, 255, 0.9);--ui-dfc-primary-ink: #1c1c1e;--ui-dfc-primary-kbd: rgba(0, 0, 0, 0.08);--ui-dfc-primary-kbd-ink: rgba(28, 28, 30, 0.6);--ui-dfc-secondary-hover: #232326;--ui-dfc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-dfc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 28px -10px rgba(0, 0, 0, 0.6);--ui-dfc-focus: rgba(77, 141, 255, 0.5)}:where(.dark, [data-theme="dark"]) .ui-dfc__pop{--ui-dfc-card: #232326;--ui-dfc-secondary-hover: #2a2a2d}`;
var f = `Hi everyone, we are very excited to announce that the new dashboard is now available for all users. It loads a lot faster than before, and you can now export any report to CSV with just a single click. Let us know what you think!`;
var p = `Hi everyone, the new dashboard is now live for all users. It loads twice as fast, and you can now export any report to CSV in one click. Let us know what you think!`;
var m = [`accept`, `reject`, `accept`, `accept`];
var h = 1200;
var g = 450;
var _ = 2800;
function v() {
  let e = (0, n3.useRef)(null), [t, i2] = (0, n3.useState)(true);
  (0, n3.useEffect)(() => {
    if (!t) return;
    let n4 = [], r2 = 900, i3 = (e2, t2) => n4.push(window.setTimeout(t2, e2)), a3 = () => {
      m.forEach((t2, n5) => {
        i3(r2, () => e.current?.highlight(n5)), r2 += h, i3(r2, () => t2 === `accept` ? e.current?.accept(n5) : e.current?.reject(n5)), r2 += g;
      }), r2 += _, i3(r2, () => e.current?.reset()), r2 += 900, i3(r2, () => {
        r2 = 0, n4.length = 0, a3();
      });
    };
    return a3(), () => n4.forEach((e2) => window.clearTimeout(e2));
  }, [t]);
  let a2 = () => {
    t && (i2(false), e.current?.highlight(null));
  };
  return (0, r.jsx)(`div`, { className: `df-demo`, onPointerDown: a2, onKeyDown: a2, onFocus: a2, onPointerOver: (e2) => {
    e2.target.closest?.(`.ui-dfc__chg, .ui-dfc__pop, button`) && a2();
  }, children: (0, r.jsx)(u, { ref: e, label: `Suggested by AI \xB7 Make it shorter`, original: f, suggested: p }) });
}

export {
  v
};
