import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/component-7zQPnK-d.js
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
  let c2 = n4.slice(o2, n4.length - s2), l2 = r2.slice(o2, r2.length - s2), u2 = c2.length, d2 = l2.length, f = n4.slice(0, o2).map((e2) => ({ t: 0, s: e2 }));
  if (u2 * d2 > 4e6) c2.forEach((e2) => f.push({ t: 1, s: e2 })), l2.forEach((e2) => f.push({ t: 2, s: e2 }));
  else {
    let e2 = d2 + 1, t2 = new Uint16Array((u2 + 1) * e2);
    for (let n6 = u2 - 1; n6 >= 0; n6--) for (let r4 = d2 - 1; r4 >= 0; r4--) t2[n6 * e2 + r4] = c2[n6] === l2[r4] ? t2[(n6 + 1) * e2 + r4 + 1] + 1 : Math.max(t2[(n6 + 1) * e2 + r4], t2[n6 * e2 + r4 + 1]);
    let n5 = 0, r3 = 0;
    for (; n5 < u2 && r3 < d2; ) c2[n5] === l2[r3] ? (f.push({ t: 0, s: c2[n5] }), n5++, r3++) : t2[(n5 + 1) * e2 + r3] >= t2[n5 * e2 + r3 + 1] ? f.push({ t: 1, s: c2[n5++] }) : f.push({ t: 2, s: l2[r3++] });
    for (; n5 < u2; ) f.push({ t: 1, s: c2[n5++] });
    for (; r3 < d2; ) f.push({ t: 2, s: l2[r3++] });
  }
  n4.slice(n4.length - s2).forEach((e2) => f.push({ t: 0, s: e2 }));
  for (let e2 = 0; e2 < f.length; e2++) {
    if (f[e2].t === 0 || e2 > 0 && f[e2 - 1].t !== 0) continue;
    let t2 = f[e2].t, n5 = e2;
    for (; n5 < f.length && f[n5].t === t2; ) n5++;
    if (!(n5 < f.length && f[n5].t !== 0)) {
      for (; n5 < f.length && f[n5].t === 0 && f[n5].s === f[e2].s && a(f[e2].s); ) f[n5] = { t: t2, s: f[n5].s }, f[e2] = { t: 0, s: f[e2].s }, e2++, n5++;
      e2 = n5 - 1;
    }
  }
  let p = [];
  for (let e2 of f) {
    let t2 = p[p.length - 1];
    if (e2.t === 0) t2?.type === `equal` ? t2.text += e2.s : p.push({ type: `equal`, text: e2.s });
    else {
      t2?.type !== `change` && p.push({ type: `change`, remove: ``, insert: `` });
      let n5 = p[p.length - 1];
      e2.t === 1 ? n5.remove += e2.s : n5.insert += e2.s;
    }
  }
  let m = [];
  for (let e2 = 0; e2 < p.length; e2++) {
    let t2 = p[e2], n5 = m[m.length - 1], r3 = p[e2 + 1];
    if (t2.type === `equal` && a(t2.text) && n5?.type === `change` && r3?.type === `change`) {
      n5.remove += t2.text + r3.remove, n5.insert += t2.text + r3.insert, e2++;
      continue;
    }
    m.push({ ...t2 });
  }
  let h = [], g = (e2) => {
    if (!e2) return;
    let t2 = h[h.length - 1];
    t2?.type === `equal` ? t2.text += e2 : h.push({ type: `equal`, text: e2 });
  };
  for (let e2 of m) {
    if (e2.type === `equal`) {
      g(e2.text);
      continue;
    }
    let { remove: t2, insert: n5 } = e2, r3 = ``, i2 = ``;
    if (t2 && n5) {
      let e3 = t2.match(/^\s+/)?.[0] ?? ``;
      e3 && n5.startsWith(e3) && e3.length < t2.length && e3.length < n5.length && (r3 = e3, t2 = t2.slice(e3.length), n5 = n5.slice(e3.length));
      let a2 = t2.match(/\s+$/)?.[0] ?? ``;
      a2 && n5.endsWith(a2) && a2.length < t2.length && a2.length < n5.length && (i2 = a2, t2 = t2.slice(0, -a2.length), n5 = n5.slice(0, -a2.length));
    }
    g(r3), h.push({ type: `change`, remove: t2, insert: n5 }), g(i2);
  }
  return h;
}
var s = (e) => `${e} suggestion${e === 1 ? `` : `s`}`;
var c = (e) => `\u201C${e.trim()}\u201D`;
var l = (e) => e.remove.trim() && e.insert.trim() ? `replace ${c(e.remove)} with ${c(e.insert)}` : e.insert.trim() ? `add ${c(e.insert)}` : `remove ${c(e.remove)}`;
function u({ original: e = ``, suggested: t = ``, changes: i2, onChange: a2, onDone: c2, label: u2, ref: f, className: p }) {
  let m = (0, n3.useMemo)(() => i2 ?? o(e, t), [i2, e, t]), h = (0, n3.useMemo)(() => JSON.stringify(m), [m]), g = (0, n3.useMemo)(() => {
    let e2 = [];
    return m.forEach((t2, n4) => {
      t2.type === `change` && e2.push({ seg: n4, remove: t2.remove, insert: t2.insert });
    }), e2;
  }, [m]), [_, v] = (0, n3.useState)({}), [y, b] = (0, n3.useState)([]), [x, S] = (0, n3.useState)(null), [C, w] = (0, n3.useState)(null), [T, E] = (0, n3.useState)(null), [D, O] = (0, n3.useState)(``), [k, A] = (0, n3.useState)(h);
  k !== h && (A(h), v({}), b([]), S(null), w(null), E(null));
  let j = (0, n3.useRef)(null), M = (0, n3.useRef)(null), N = (0, n3.useRef)(null), P = (0, n3.useRef)(null), F = (0, n3.useRef)([]), I = (0, n3.useRef)(0), L = (0, n3.useRef)(null), R = (0, n3.useRef)(null), z = (0, n3.useRef)({ onChange: a2, onDone: c2 });
  z.current = { onChange: a2, onDone: c2 };
  let B = g.map((e2, t2) => t2).filter((e2) => !_[e2]), V = g.length > 0 && B.length === 0, H = (e2) => m.map((t2, n4) => t2.type === `equal` ? t2.text : e2[g.findIndex((e3) => e3.seg === n4)] === `accepted` ? t2.insert : t2.remove).join(``), U = (0, n3.useRef)({ decisions: _, history: y, list: g, pending: B });
  U.current = { decisions: _, history: y, list: g, pending: B };
  let W = (e2, t2, n4 = false) => {
    let { decisions: r2, list: i3 } = U.current, a3 = e2.filter((e3) => e3 >= 0 && e3 < i3.length && !r2[e3]);
    if (!a3.length) return;
    let o2 = { ...r2 };
    a3.forEach((e3) => o2[e3] = t2);
    let c3 = i3.length - Object.keys(o2).length;
    v(o2), b((e3) => [...e3, a3]), E(null), R.current = Math.max(...a3);
    let u3 = t2 === `accepted` ? `Accepted` : `Rejected`, d2 = a3.length === 1 ? l(i3[a3[0]]).replace(/^./, (e3) => e3.toUpperCase()) : `${a3.length} suggestions`;
    if (O(`${u3}: ${d2}. ${c3 ? `${s(c3)} left.` : `All changes reviewed.`}`), n4) {
      let e3 = Math.max(...a3), t3 = i3.map((e4, t4) => t4).filter((e4) => !o2[e4]);
      L.current = c3 ? t3.find((t4) => t4 > e3) ?? t3[0] : `undo`;
    }
    let f2 = H(o2);
    z.current.onChange?.(f2), c3 || z.current.onDone?.(f2);
  }, G = (e2 = false) => {
    let { decisions: t2, history: n4 } = U.current, r2 = n4[n4.length - 1];
    if (!r2) return;
    let i3 = { ...t2 };
    r2.forEach((e3) => delete i3[e3]), v(i3), b(n4.slice(0, -1)), O(`Undone. ${s(U.current.list.length - Object.keys(i3).length)} left.`), e2 && (L.current = Math.min(...r2)), z.current.onChange?.(H(i3));
  }, K = () => {
    v({}), b([]), E(null), S(null), O(``), R.current = null;
  };
  (0, n3.useImperativeHandle)(f, () => ({ highlight: (e2) => E(e2), accept: (e2) => W([e2], `accepted`), reject: (e2) => W([e2], `rejected`), acceptAll: () => W(U.current.pending, `accepted`), rejectAll: () => W(U.current.pending, `rejected`), undo: () => G(), reset: K })), (0, n3.useLayoutEffect)(() => {
    let e2 = L.current;
    e2 !== null && (L.current = null, e2 === `undo` ? P.current?.focus() : F.current[e2]?.focus());
  }, [_]);
  let q = [x, C, T].find((e2) => e2 !== null && !_[e2] && e2 < g.length) ?? null;
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
  }, [q, _]);
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
  }, ne = g.length, $ = -1;
  return (0, r.jsxs)(`div`, { ref: j, className: [`ui-df`, p].filter(Boolean).join(` `), "data-done": V || void 0, onKeyDown: (e2) => {
    e2.key === `Escape` && T !== null && E(null);
  }, children: [(0, r.jsx)(`style`, { href: `ui-inline-diff`, precedence: `default`, children: d }), u2 && (0, r.jsxs)(`div`, { className: `ui-df__label`, children: [(0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [(0, r.jsx)(`path`, { d: `M8 1.75c.3 2.9 1.35 3.95 4.25 4.25-2.9.3-3.95 1.35-4.25 4.25C7.7 7.35 6.65 6.3 3.75 6 6.65 5.7 7.7 4.65 8 1.75Z` }), (0, r.jsx)(`path`, { d: `M12.5 10.25c.15 1.25.6 1.7 1.75 1.75-1.15.15-1.6.6-1.75 1.75-.15-1.15-.6-1.6-1.75-1.75 1.15-.05 1.6-.5 1.75-1.75Z` })] }), (0, r.jsx)(`span`, { children: u2 })] }), (0, r.jsxs)(`div`, { ref: M, className: `ui-df__card`, children: [(0, r.jsx)(`div`, { className: `ui-df__head`, children: (0, r.jsxs)(`div`, { className: `ui-df__bar`, children: [(0, r.jsxs)(`div`, { className: `ui-df__layer`, "data-show": !V || void 0, inert: V, "aria-hidden": V || void 0, children: [(0, r.jsxs)(`span`, { className: `ui-df__count`, children: [(0, r.jsx)(`span`, { className: `ui-df__num`, children: B.length }), (0, r.jsx)(`span`, { className: `ui-df__word`, children: B.length === 1 ? `suggestion` : `suggestions` })] }), (0, r.jsxs)(`span`, { className: `ui-df__actions`, children: [(0, r.jsxs)(`span`, { className: `ui-df__nav`, onMouseDown: (e2) => e2.preventDefault(), children: [(0, r.jsx)(`button`, { type: `button`, className: `ui-df__icon`, onClick: () => J(-1), disabled: !B.length, "aria-label": `Previous suggestion`, children: (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M10 12.5 5.5 8 10 3.5` }) }) }), (0, r.jsx)(`button`, { type: `button`, className: `ui-df__icon`, onClick: () => J(1), disabled: !B.length, "aria-label": `Next suggestion`, children: (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M6 3.5 10.5 8 6 12.5` }) }) })] }), (0, r.jsx)(`button`, { type: `button`, className: `ui-df__btn`, onClick: () => W(B, `rejected`), disabled: !B.length, children: `Reject all` }), (0, r.jsx)(`button`, { type: `button`, className: `ui-df__btn ui-df__btn--primary`, onClick: () => W(B, `accepted`), disabled: !B.length, children: `Accept all` })] })] }), (0, r.jsxs)(`div`, { className: `ui-df__layer`, "data-show": V || void 0, inert: !V, "aria-hidden": !V || void 0, children: [(0, r.jsxs)(`span`, { className: `ui-df__count ui-df__count--done`, children: [(0, r.jsx)(`svg`, { className: `ui-df__ok`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M3.75 8.4 6.6 11.1 12.25 5`, pathLength: 1 }) }), `All changes reviewed`] }), (0, r.jsxs)(`button`, { ref: P, type: `button`, className: `ui-df__btn`, onClick: () => G(true), disabled: !y.length, children: [(0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [(0, r.jsx)(`path`, { d: `M5.5 4 2.75 6.75 5.5 9.5` }), (0, r.jsx)(`path`, { d: `M3 6.75h6.5a3.75 3.75 0 0 1 0 7.5H7.5` })] }), `Undo`] })] })] }) }), (0, r.jsx)(`div`, { className: `ui-df__body`, children: (0, r.jsx)(`p`, { className: `ui-df__text`, children: m.map((e2, t2) => {
    if (e2.type === `equal`) return (0, r.jsx)(`span`, { children: e2.text }, t2);
    $++;
    let n4 = $, i3 = _[n4] ?? `pending`, a3 = i3 === `pending`;
    return (0, r.jsxs)(`span`, { ref: (e3) => {
      F.current[n4] = e3;
    }, className: `ui-df__chg`, "data-state": i3, "data-active": q === n4 || void 0, tabIndex: a3 ? 0 : void 0, role: a3 ? `button` : void 0, "aria-label": a3 ? `Suggestion ${n4 + 1} of ${ne}: ${l(e2)}. Press Y to accept, N to reject` : void 0, onKeyDown: a3 ? (e3) => te(e3, n4) : void 0, onFocus: () => w(n4), onBlur: () => w((e3) => e3 === n4 ? null : e3), onMouseEnter: () => Z(n4), onMouseLeave: Q, children: [e2.remove && (0, r.jsx)(`del`, { className: `ui-df__del`, "aria-hidden": i3 === `accepted` || void 0, children: e2.remove }), e2.insert && (0, r.jsx)(`ins`, { className: `ui-df__ins`, "aria-hidden": i3 === `rejected` || void 0, children: e2.insert })] }, t2);
  }) }) }), (0, r.jsxs)(`div`, { ref: N, className: `ui-df__pop`, "data-open": q !== null || void 0, "data-snap": Y?.snap || void 0, style: Y ? { left: Y.left, top: Y.top } : void 0, role: `group`, "aria-label": `Review suggestion`, "aria-hidden": q === null || void 0, onMouseEnter: () => q !== null && Z(q), onMouseLeave: Q, onMouseDown: (e2) => e2.preventDefault(), children: [(0, r.jsxs)(`button`, { type: `button`, tabIndex: -1, className: `ui-df__pbtn`, "aria-label": `Accept suggestion`, onClick: () => q !== null && W([q], `accepted`, C === q), children: [(0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M3.75 8.4 6.6 11.1 12.25 5` }) }), `Accept`, (0, r.jsx)(`kbd`, { children: `Y` })] }), (0, r.jsx)(`span`, { className: `ui-df__sep`, "aria-hidden": `true` }), (0, r.jsxs)(`button`, { type: `button`, tabIndex: -1, className: `ui-df__pbtn`, "aria-label": `Reject suggestion`, onClick: () => q !== null && W([q], `rejected`, C === q), children: [(0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M4.5 4.5l7 7M11.5 4.5l-7 7` }) }), `Reject`, (0, r.jsx)(`kbd`, { children: `N` })] })] })] }), (0, r.jsx)(`span`, { className: `ui-df__sr`, role: `status`, "aria-live": `polite`, children: D })] });
}
var d = `.ui-df{--ui-df-ink: #171717;--ui-df-text: #525252;--ui-df-muted: #8a8a8a;--ui-df-tray: #f0f0f0;--ui-df-line: #ececec;--ui-df-bg: #ffffff;--ui-df-soft: #f5f5f5;--ui-df-add: rgba(34, 160, 90, 0.1);--ui-df-add-strong: rgba(34, 160, 90, 0.18);--ui-df-add-ink: #18794e;--ui-df-del: rgba(220, 60, 60, 0.08);--ui-df-del-strong: rgba(220, 60, 60, 0.15);--ui-df-del-ink: #b42318;--ui-df-strike: rgba(180, 35, 24, 0.55);--ui-df-ok: #1f8a4c;--ui-df-pop: #171717;--ui-df-pop-ink: #ffffff;--ui-df-pop-soft: rgba(255, 255, 255, 0.14);--ui-df-pop-kbd: rgba(255, 255, 255, 0.55);--ui-df-primary: #171717;--ui-df-primary-ink: #ffffff;--ui-df-focus: rgba(23, 23, 23, 0.35);--ui-df-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);--ui-df-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;display: grid;width: 100%;min-width: 0;padding: 4px;border-radius: 20px;background: var(--ui-df-tray);color: var(--ui-df-text);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;-webkit-font-smoothing: antialiased;text-align: left}.ui-df *, .ui-df *::before, .ui-df *::after{box-sizing: border-box}.ui-df__label{display: flex;align-items: center;gap: 6px;min-width: 0;padding: 6px 8px 4px;color: var(--ui-df-muted);font-size: 12.5px;line-height: 1.3;letter-spacing: -0.003em}.ui-df__label span{overflow: hidden;text-overflow: ellipsis;white-space: nowrap}.ui-df__label svg{flex: none;width: 13px;height: 13px;fill: currentColor}.ui-df__card{position: relative;min-width: 0;border-radius: 16px;background: var(--ui-df-bg);box-shadow: 0 0 0 1px var(--ui-df-line), var(--ui-df-shadow)}.ui-df__head{padding: 10px 10px 10px 16px;border-bottom: 1px solid var(--ui-df-line)}.ui-df__bar{display: grid}.ui-df__layer{grid-area: 1 / 1;display: flex;flex-wrap: wrap;align-items: center;justify-content: space-between;gap: 8px;min-width: 0;opacity: 0;visibility: hidden;transform: translateY(4px);filter: blur(2px);transition: opacity 260ms ease, transform 420ms var(--ui-df-ease), filter 260ms ease, visibility 0s 420ms}.ui-df__layer[data-show]{opacity: 1;visibility: visible;transform: none;filter: none;transition: opacity 320ms ease 80ms, transform 460ms var(--ui-df-ease) 80ms, filter 320ms ease 80ms, visibility 0s}.ui-df__card{container: ui-df-card / inline-size}@container ui-df-card (max-width: 400px){.ui-df__word{position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap}}.ui-df__count{display: inline-flex;align-items: center;gap: 7px;color: var(--ui-df-ink);font-size: 13px;font-weight: 500;line-height: 1;letter-spacing: -0.006em;white-space: nowrap}.ui-df__num{display: inline-grid;place-items: center;min-width: 20px;height: 20px;padding: 0 6px;border-radius: 999px;background: var(--ui-df-add);color: var(--ui-df-add-ink);font-size: 11.5px;font-weight: 600;font-variant-numeric: tabular-nums}.ui-df__ok{width: 16px;height: 16px;fill: none;stroke: var(--ui-df-ok);stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round;stroke-dasharray: 1;stroke-dashoffset: 1}.ui-df[data-done] .ui-df__ok{animation: ui-df-draw 420ms var(--ui-df-ease) 220ms forwards}.ui-df__actions{display: inline-flex;align-items: center;gap: 6px;margin-left: auto}.ui-df__nav{display: inline-flex;gap: 2px;margin-right: 2px}.ui-df__btn, .ui-df__icon{appearance: none;display: inline-flex;align-items: center;justify-content: center;gap: 6px;height: 30px;margin: 0;border: 0;border-radius: 8px;background: transparent;color: var(--ui-df-ink);font: inherit;font-size: 13px;font-weight: 500;line-height: 1;letter-spacing: -0.006em;white-space: nowrap;cursor: pointer;transition: background-color 160ms ease, color 160ms ease, opacity 160ms ease, transform 160ms var(--ui-df-ease);-webkit-tap-highlight-color: transparent}.ui-df__btn{padding: 0 11px;box-shadow: inset 0 0 0 1px var(--ui-df-line)}.ui-df__icon{width: 28px;color: var(--ui-df-muted)}.ui-df__btn svg, .ui-df__icon svg{width: 14px;height: 14px;fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round}.ui-df__btn:hover:not(:disabled){background: var(--ui-df-soft)}.ui-df__icon:hover:not(:disabled){background: var(--ui-df-soft);color: var(--ui-df-ink)}.ui-df__btn--primary{background: var(--ui-df-primary);color: var(--ui-df-primary-ink);box-shadow: none}.ui-df__btn--primary:hover:not(:disabled){background: var(--ui-df-primary);opacity: 0.88}.ui-df__btn:active:not(:disabled), .ui-df__icon:active:not(:disabled){transform: scale(0.97)}.ui-df__btn:disabled, .ui-df__icon:disabled{opacity: 0.4;cursor: default}.ui-df__btn:focus-visible, .ui-df__icon:focus-visible{outline: 2px solid var(--ui-df-focus);outline-offset: 2px}.ui-df__body{padding: 16px 18px 18px}.ui-df__text{margin: 0;color: var(--ui-df-text);font-size: 15px;line-height: 1.65;letter-spacing: -0.006em;white-space: pre-line;overflow-wrap: anywhere}.ui-df__chg{border-radius: 4px;cursor: pointer;scroll-margin: 64px 0 24px}.ui-df__chg:not([data-state="pending"]){cursor: auto}.ui-df__chg:focus{outline: none}.ui-df__chg:focus-visible{outline: 2px solid var(--ui-df-focus);outline-offset: 2px}.ui-df__del, .ui-df__ins{padding: 1px 2px;border-radius: 4px;-webkit-box-decoration-break: clone;box-decoration-break: clone;font-size: 1em;transition: background-color 360ms ease, color 360ms ease, text-decoration-color 300ms ease, font-size 460ms var(--ui-df-ease), padding 460ms var(--ui-df-ease), margin 460ms var(--ui-df-ease), opacity 300ms ease}.ui-df__del{background: var(--ui-df-del);color: var(--ui-df-del-ink);text-decoration: line-through;text-decoration-color: var(--ui-df-strike);text-decoration-thickness: 1.2px}.ui-df__ins{background: var(--ui-df-add);color: var(--ui-df-add-ink);text-decoration: none}.ui-df__del + .ui-df__ins{margin-left: 3px}.ui-df__chg[data-active] .ui-df__del{background: var(--ui-df-del-strong)}.ui-df__chg[data-active] .ui-df__ins{background: var(--ui-df-add-strong)}.ui-df__chg[data-state="accepted"] .ui-df__del, .ui-df__chg[data-state="rejected"] .ui-df__ins{font-size: 0;padding: 0;margin: 0;opacity: 0}.ui-df__chg[data-state="accepted"] .ui-df__ins, .ui-df__chg[data-state="rejected"] .ui-df__del{padding: 0;margin: 0;background: transparent;color: inherit;text-decoration-color: transparent}.ui-df__pop{position: absolute;top: 0;left: 0;z-index: 2;display: flex;align-items: center;gap: 2px;padding: 3px;border-radius: 10px;background: var(--ui-df-pop);color: var(--ui-df-pop-ink);box-shadow: 0 6px 20px -6px rgba(0, 0, 0, 0.35), 0 1px 2px rgba(0, 0, 0, 0.2);opacity: 0;visibility: hidden;transform: translateY(4px) scale(0.96);transform-origin: 50% 100%;pointer-events: none;transition: opacity 180ms ease, transform 260ms var(--ui-df-ease), left 320ms var(--ui-df-ease), top 320ms var(--ui-df-ease), visibility 0s 260ms}.ui-df__pop[data-open]{opacity: 1;visibility: visible;transform: none;pointer-events: auto;transition: opacity 180ms ease, transform 300ms var(--ui-df-ease), left 320ms var(--ui-df-ease), top 320ms var(--ui-df-ease), visibility 0s}.ui-df__pop[data-snap]{transition-property: opacity, transform, visibility}.ui-df__pbtn{appearance: none;display: inline-flex;align-items: center;gap: 6px;height: 28px;margin: 0;padding: 0 8px 0 7px;border: 0;border-radius: 7px;background: transparent;color: inherit;font: inherit;font-size: 12.5px;font-weight: 500;line-height: 1;white-space: nowrap;cursor: pointer;transition: background-color 140ms ease}.ui-df__pbtn:hover{background: var(--ui-df-pop-soft)}.ui-df__pbtn svg{width: 14px;height: 14px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-df__pbtn kbd{display: inline-grid;place-items: center;min-width: 17px;height: 17px;padding: 0 4px;border-radius: 4px;background: var(--ui-df-pop-soft);color: var(--ui-df-pop-kbd);font: inherit;font-size: 10.5px;font-weight: 500}.ui-df__sep{width: 1px;height: 16px;background: var(--ui-df-pop-soft)}.ui-df__sr{position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap;border: 0}@keyframes ui-df-draw{to{stroke-dashoffset: 0}}@media (max-width: 400px){.ui-df__nav{display: none}.ui-df__head{padding-left: 14px}.ui-df__label{padding-left: 6px}.ui-df__body{padding: 14px 14px 16px}}@media (hover: none) and (pointer: coarse){.ui-df__pbtn kbd{display: none}.ui-df__pbtn{height: 34px;padding: 0 11px 0 9px}}@media (prefers-reduced-motion: reduce){.ui-df *, .ui-df *::before, .ui-df *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;transition-duration: 1ms !important;transition-delay: 0ms !important}.ui-df__layer{filter: none;transform: none}}:where(.dark, [data-theme="dark"]) .ui-df{--ui-df-ink: #ededed;--ui-df-text: #b4b4b8;--ui-df-muted: #8b8b92;--ui-df-tray: #111113;--ui-df-line: #2a2a2e;--ui-df-bg: #19191b;--ui-df-soft: #232326;--ui-df-add: rgba(60, 200, 120, 0.13);--ui-df-add-strong: rgba(60, 200, 120, 0.22);--ui-df-add-ink: #6ee7a8;--ui-df-del: rgba(240, 90, 90, 0.12);--ui-df-del-strong: rgba(240, 90, 90, 0.2);--ui-df-del-ink: #ff8a80;--ui-df-strike: rgba(255, 138, 128, 0.6);--ui-df-ok: #5fd68f;--ui-df-pop: #f4f4f5;--ui-df-pop-ink: #171717;--ui-df-pop-soft: rgba(0, 0, 0, 0.08);--ui-df-pop-kbd: rgba(0, 0, 0, 0.5);--ui-df-primary: #ededed;--ui-df-primary-ink: #19191b;--ui-df-focus: rgba(255, 255, 255, 0.35);--ui-df-shadow: 0 1px 2px rgba(0, 0, 0, 0.3)}`;

export {
  u
};
