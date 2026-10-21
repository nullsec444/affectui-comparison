import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/component-BpWpTuwn.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e) => typeof e == `string` || typeof e == `number` ? String(e) : ``;
var a = (e) => String.fromCharCode(65 + e % 26);
var o = () => typeof navigator < `u` && /Mac|iPhone|iPad/.test(navigator.platform);
function s(e, t) {
  let n4 = e.trim();
  if (t.type !== `number`) return n4;
  if (n4 === ``) return ``;
  let r2 = Number(n4.replace(/[^\d.,-]/g, ``).replace(/,/g, ``));
  return Number.isFinite(r2) ? r2 : n4;
}
function c({ title: e, icon: t, columns: c2, rows: d2, tagTones: h2 = {}, editable: g2 = true, onRowsChange: _2, onSelectionChange: v2, className: y2 }) {
  let [x, S] = (0, n3.useState)(d2), C = (0, n3.useRef)({ past: [], future: [] }), [w, ie] = (0, n3.useState)(/* @__PURE__ */ new Set()), [T, E] = (0, n3.useState)(null), [D, ae] = (0, n3.useState)(null), [O, oe] = (0, n3.useState)(null), k = (0, n3.useRef)({ active: null, anchor: null }), A = (e2) => {
    k.current.active = e2, ae(e2);
  }, j = (e2) => {
    k.current.anchor = e2, oe(e2);
  }, [M, N] = (0, n3.useState)(null), [P, F] = (0, n3.useState)(false), [, I] = (0, n3.useState)(0), L = (0, n3.useRef)(null), se = b(L), R = (0, n3.useRef)(0), z = (0, n3.useMemo)(() => {
    if (!T) return x;
    let e2 = c2.find((e3) => e3.key === T.key), t2 = T.dir === `asc` ? 1 : -1;
    return [...x].sort((n4, r2) => {
      let a2 = n4[T.key], o2 = r2[T.key];
      return i(a2) === `` ? 1 : i(o2) === `` ? -1 : e2?.type === `number` ? (Number(a2) - Number(o2)) * t2 : i(a2).localeCompare(i(o2), void 0, { numeric: true }) * t2;
    });
  }, [x, T, c2]), B = (e2) => g2 && c2[e2]?.editable !== false, V = (e2) => {
    C.current.past.push(x), C.current.past.length > 100 && C.current.past.shift(), C.current.future = [], S(e2), _2?.(e2);
  }, H = () => {
    let e2 = C.current.past.pop();
    e2 && (C.current.future.push(x), S(e2), _2?.(e2));
  }, U = () => {
    let e2 = C.current.future.pop();
    e2 && (C.current.past.push(x), S(e2), _2?.(e2));
  }, W = (0, n3.useMemo)(() => {
    if (!D) return null;
    let e2 = O ?? D;
    return { r1: Math.min(e2.r, D.r), r2: Math.max(e2.r, D.r), c1: Math.min(e2.c, D.c), c2: Math.max(e2.c, D.c) };
  }, [D, O]), G = (e2, t2) => !!W && e2 >= W.r1 && e2 <= W.r2 && t2 >= W.c1 && t2 <= W.c2, K = (e2, t2) => {
    let n4 = /* @__PURE__ */ new Map();
    t2.forEach((t3, r2) => t3.forEach((t4, i2) => {
      let a2 = z[e2.r + r2], o2 = e2.c + i2, l2 = c2[o2];
      a2 && l2 && B(o2) && n4.set(a2.id, { ...n4.get(a2.id), [l2.key]: s(t4, l2) });
    })), n4.size && V(x.map((e3) => n4.has(e3.id) ? { ...e3, ...n4.get(e3.id) } : e3));
  }, q = (e2, t2 = false) => {
    let n4 = Math.max(0, Math.min(z.length - 1, e2.r)), r2 = Math.max(0, Math.min(c2.length - 1, e2.c));
    t2 ? k.current.anchor || j(k.current.active ?? { r: n4, c: r2 }) : j(null), A({ r: n4, c: r2 });
  }, J = (e2, t2) => {
    B(e2.c) && z[e2.r] && N({ cell: e2, value: t2 ?? i(z[e2.r][c2[e2.c].key]) });
  }, Y = (e2, t2, n4) => {
    if (M && e2) {
      let e3 = n4 ?? M.value;
      e3 !== i(z[M.cell.r]?.[c2[M.cell.c].key]) && K(M.cell, [[e3]]);
    }
    N(null), t2 && q(t2), requestAnimationFrame(() => L.current?.focus({ preventScroll: true }));
  };
  (0, n3.useEffect)(() => {
    D && L.current?.querySelector(`[data-cell="${D.r}-${D.c}"]`)?.scrollIntoView({ block: `nearest`, inline: `nearest` });
  }, [D]), (0, n3.useEffect)(() => {
    if (!P) return;
    let e2 = () => F(false);
    return window.addEventListener(`pointerup`, e2), () => window.removeEventListener(`pointerup`, e2);
  }, [P]);
  let ce = (e2) => {
    if (M) return;
    let t2 = o() ? e2.metaKey : e2.ctrlKey;
    if (t2 && e2.key.toLowerCase() === `z`) return e2.preventDefault(), e2.shiftKey ? U() : H();
    if (t2 && e2.key.toLowerCase() === `y`) return e2.preventDefault(), U();
    if (t2 && e2.key.toLowerCase() === `a`) {
      e2.preventDefault(), j({ r: 0, c: 0 }), A({ r: z.length - 1, c: c2.length - 1 });
      return;
    }
    let n4 = k.current.active;
    if (!n4) {
      (e2.key.startsWith(`Arrow`) || e2.key === `Enter`) && (e2.preventDefault(), q({ r: 0, c: 0 }));
      return;
    }
    let { r: r2, c: i2 } = n4, a2 = t2, s2 = { ArrowUp: { r: a2 ? 0 : r2 - 1, c: i2 }, ArrowDown: { r: a2 ? z.length - 1 : r2 + 1, c: i2 }, ArrowLeft: { r: r2, c: a2 ? 0 : i2 - 1 }, ArrowRight: { r: r2, c: a2 ? c2.length - 1 : i2 + 1 }, Home: { r: t2 ? 0 : r2, c: 0 }, End: { r: t2 ? z.length - 1 : r2, c: c2.length - 1 } };
    if (s2[e2.key]) return e2.preventDefault(), q(s2[e2.key], e2.shiftKey);
    if (e2.key === `Tab`) return e2.preventDefault(), q({ r: r2, c: i2 + (e2.shiftKey ? -1 : 1) });
    if (e2.key === `Enter` || e2.key === `F2`) return e2.preventDefault(), J(n4);
    if (e2.key === `Escape`) return j(null);
    if ((e2.key === `Delete` || e2.key === `Backspace`) && W) {
      e2.preventDefault();
      let t3 = Array.from({ length: W.r2 - W.r1 + 1 }, () => Array.from({ length: W.c2 - W.c1 + 1 }, () => ``));
      return K({ r: W.r1, c: W.c1 }, t3);
    }
    e2.key.length === 1 && !t2 && !e2.altKey && c2[i2].type !== `tag` && (e2.preventDefault(), J(n4, e2.key));
  }, le = () => W ? z.slice(W.r1, W.r2 + 1).map((e2) => c2.slice(W.c1, W.c2 + 1).map((t2) => i(e2[t2.key]).replace(/[\t\n]/g, ` `)).join(`	`)).join(`
`) : ``, X = (e2) => {
    !M && W && (e2.preventDefault(), e2.clipboardData.setData(`text/plain`, le()));
  }, ue = (e2) => {
    if (M || !W) return;
    X(e2);
    let t2 = Array.from({ length: W.r2 - W.r1 + 1 }, () => Array.from({ length: W.c2 - W.c1 + 1 }, () => ``));
    K({ r: W.r1, c: W.c1 }, t2);
  }, de = (e2) => {
    if (M || !D) return;
    e2.preventDefault();
    let t2 = e2.clipboardData.getData(`text/plain`).replace(/\r/g, ``).replace(/\n$/, ``);
    if (!t2) return;
    let n4 = t2.split(`
`).map((e3) => e3.split(`	`));
    if (n4.length === 1 && n4[0].length === 1 && W) {
      let e3 = Array.from({ length: W.r2 - W.r1 + 1 }, () => Array.from({ length: W.c2 - W.c1 + 1 }, () => n4[0][0]));
      return K({ r: W.r1, c: W.c1 }, e3);
    }
    K(W ? { r: W.r1, c: W.c1 } : D, n4);
  }, fe = (e2) => E((t2) => t2?.key === e2 ? t2.dir === `asc` ? { key: e2, dir: `desc` } : null : { key: e2, dir: `asc` }), Z = (e2) => {
    ie(e2), v2?.(x.filter((t2) => e2.has(t2.id)).map((e3) => e3.id));
  }, Q = z.length > 0 && w.size === z.length, pe = w.size > 0 && !Q, me = () => {
    R.current += 1;
    let e2 = c2.find((e3) => e3.type === `title`)?.key ?? c2[0].key, t2 = { id: `new-${R.current}`, [e2]: `` };
    V([...x, t2]), E(null);
    let n4 = { r: x.length, c: Math.max(0, c2.findIndex((t3) => t3.key === e2)) };
    A(n4), j(null), N({ cell: n4, value: `` });
  }, he = () => {
    V(x.filter((e2) => !w.has(e2.id))), Z(/* @__PURE__ */ new Set()), A(null), j(null);
  }, ge = (e2) => e2.options ?? [...new Set(x.map((t2) => i(t2[e2.key])).filter(Boolean))], _e = (() => {
    if (!W || !D) return null;
    if ((W.r2 - W.r1 + 1) * (W.c2 - W.c1 + 1) === 1) return `${a(D.c)}${D.r + 1}`;
    let e2 = 0, t2 = 0, n4 = false;
    for (let r2 = W.r1; r2 <= W.r2; r2++) for (let a2 = W.c1; a2 <= W.c2; a2++) {
      let o2 = z[r2]?.[c2[a2].key];
      i(o2) !== `` && e2++, c2[a2].type === `number` && typeof o2 == `number` && (n4 = true, t2 += o2);
    }
    return `${e2} ${e2 === 1 ? `value` : `values`}${n4 ? ` \xB7 Sum ${t2.toLocaleString(`en-US`)}` : ``}`;
  })(), $ = o() ? `\u2318` : `Ctrl`;
  return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`style`, { href: `ui-data-table`, precedence: `default`, children: re }), (0, r.jsxs)(`section`, { className: [`ui-dt`, y2].filter(Boolean).join(` `), "aria-label": e, children: [(0, r.jsxs)(`header`, { className: `ui-dt__head`, children: [t && (0, r.jsx)(`span`, { className: `ui-dt__title-icon`, children: t }), (0, r.jsx)(`h3`, { className: `ui-dt__title`, children: e }), g2 && (0, r.jsxs)(`div`, { className: `ui-dt__tools`, children: [(0, r.jsx)(`button`, { type: `button`, className: `ui-dt__tool`, "aria-label": `Undo (${$} Z)`, title: `Undo \xB7 ${$} Z`, disabled: !C.current.past.length, onClick: () => {
    H(), I((e2) => e2 + 1);
  }, children: (0, r.jsx)(te, {}) }), (0, r.jsx)(`button`, { type: `button`, className: `ui-dt__tool`, "aria-label": `Redo (${$} Shift Z)`, title: `Redo \xB7 ${$} \u21E7 Z`, disabled: !C.current.future.length, onClick: () => {
    U(), I((e2) => e2 + 1);
  }, children: (0, r.jsx)(m, {}) })] })] }), (0, r.jsx)(`div`, { className: `ui-dt__card`, children: (0, r.jsx)(`div`, { className: `ui-dt__morph`, ref: se, children: (0, r.jsxs)(`div`, { ref: L, className: `ui-dt__scroll`, role: `grid`, "aria-label": e, "aria-rowcount": z.length + 1, "aria-multiselectable": `true`, tabIndex: 0, onKeyDown: ce, onCopy: X, onCut: ue, onPaste: de, "data-dragging": P || void 0, children: [(0, r.jsxs)(`table`, { className: `ui-dt__table`, role: `presentation`, children: [(0, r.jsxs)(`colgroup`, { children: [(0, r.jsx)(`col`, { style: { width: 44 } }), c2.map((e2) => (0, r.jsx)(`col`, { style: e2.width ? { width: e2.width } : void 0 }, e2.key))] }), (0, r.jsx)(`thead`, { children: (0, r.jsxs)(`tr`, { role: `row`, children: [(0, r.jsx)(`th`, { className: `ui-dt__select`, role: `columnheader`, children: (0, r.jsx)(f, { checked: Q, mixed: pe, label: `Select all rows`, onChange: () => Z(Q ? /* @__PURE__ */ new Set() : new Set(z.map((e2) => e2.id))) }) }), c2.map((e2, t2) => {
    let n4 = T?.key === e2.key ? T.dir : null;
    return (0, r.jsx)(`th`, { role: `columnheader`, "aria-sort": n4 === `asc` ? `ascending` : n4 === `desc` ? `descending` : `none`, "data-type": e2.type, "data-col-active": W && t2 >= W.c1 && t2 <= W.c2 || void 0, children: (0, r.jsxs)(`button`, { type: `button`, className: `ui-dt__th`, onClick: () => fe(e2.key), children: [e2.icon && (0, r.jsx)(`span`, { className: `ui-dt__col-icon`, children: e2.icon }), (0, r.jsx)(`span`, { className: `ui-dt__th-label`, children: e2.label }), (0, r.jsx)(`span`, { className: `ui-dt__sort`, "data-dir": n4 ?? void 0, "aria-hidden": `true`, children: (0, r.jsx)(ne, {}) })] }) }, e2.key);
  })] }) }), (0, r.jsx)(`tbody`, { children: z.map((e2, t2) => {
    let n4 = w.has(e2.id);
    return (0, r.jsxs)(`tr`, { role: `row`, "data-selected": n4 || void 0, children: [(0, r.jsx)(`td`, { className: `ui-dt__select`, role: `gridcell`, children: (0, r.jsx)(f, { checked: n4, label: `Select ${i(e2[c2.find((e3) => e3.type === `title`)?.key ?? c2[0].key]) || `row`}`, onChange: () => {
      let t3 = new Set(w);
      t3.has(e2.id) ? t3.delete(e2.id) : t3.add(e2.id), Z(t3);
    } }) }), c2.map((n5, i2) => {
      let a2 = D?.r === t2 && D?.c === i2, o2 = M?.cell.r === t2 && M?.cell.c === i2;
      return (0, r.jsx)(`td`, { role: `gridcell`, "data-cell": `${t2}-${i2}`, "data-type": n5.type, "data-active": a2 || void 0, "data-in-range": G(t2, i2) && !a2 || void 0, "data-editing": o2 || void 0, "aria-selected": G(t2, i2), "aria-readonly": !B(i2) || void 0, onPointerDown: (e3) => {
        o2 || e3.button !== 0 || e3.target.closest(`a`) || (e3.preventDefault(), L.current?.focus({ preventScroll: true }), M && Y(true), q({ r: t2, c: i2 }, e3.shiftKey), F(true));
      }, onPointerEnter: () => {
        P && (k.current.anchor || j(k.current.active), A({ r: t2, c: i2 }));
      }, onDoubleClick: () => J({ r: t2, c: i2 }), children: o2 && M ? (0, r.jsx)(u, { column: n5, value: M.value, options: n5.type === `tag` ? ge(n5) : void 0, onChange: (e3) => N({ cell: M.cell, value: e3 }), onDone: (e3, n6, r2) => Y(e3, n6 ? { r: t2 + +(n6 === `down`), c: i2 + +(n6 === `right`) } : void 0, r2) }) : (0, r.jsx)(l, { column: n5, row: e2, tone: h2 }) }, n5.key);
    })] }, e2.id);
  }) })] }), z.length === 0 && (0, r.jsx)(`p`, { className: `ui-dt__empty`, children: `No rows yet` })] }) }) }), (0, r.jsxs)(`footer`, { className: `ui-dt__foot`, children: [w.size > 0 ? (0, r.jsxs)(`div`, { className: `ui-dt__bulk`, role: `status`, children: [(0, r.jsxs)(`span`, { children: [w.size, ` selected`] }), g2 && (0, r.jsxs)(`button`, { type: `button`, className: `ui-dt__add ui-dt__add--danger`, onClick: he, children: [(0, r.jsx)(p, {}), `Delete`] }), (0, r.jsx)(`button`, { type: `button`, className: `ui-dt__add`, onClick: () => Z(/* @__PURE__ */ new Set()), children: `Clear` })] }) : g2 ? (0, r.jsxs)(`button`, { type: `button`, className: `ui-dt__add`, onClick: me, children: [(0, r.jsx)(ee, {}), `Add row`] }) : (0, r.jsx)(`span`, {}), (0, r.jsx)(`span`, { className: `ui-dt__summary`, "aria-live": `polite`, children: _e ?? (g2 ? `Double-click a cell to edit` : ``) })] })] })] });
}
function l({ column: e, row: t, tone: n4 }) {
  let a2 = t[e.key];
  if (e.type === `title`) return (0, r.jsxs)(`span`, { className: `ui-dt__name`, children: [t.logo ? (0, r.jsx)(`span`, { className: `ui-dt__logo`, children: t.logo }) : (0, r.jsx)(`span`, { className: `ui-dt__logo ui-dt__logo--empty` }), (0, r.jsx)(`span`, { className: `ui-dt__name-text`, "data-empty": i(a2) === `` || void 0, children: i(a2) || `Untitled` })] });
  if (i(a2) === ``) return null;
  if (e.type === `tag`) return (0, r.jsx)(`span`, { className: `ui-dt__tag`, "data-tone": n4[i(a2)] ?? `blue`, children: a2 });
  if (e.type === `link`) {
    let e2 = /^https?:\/\//.test(i(a2)) ? i(a2) : `https://${i(a2)}`;
    return (0, r.jsx)(`a`, { className: `ui-dt__link`, href: e2, target: `_blank`, rel: `noreferrer`, tabIndex: -1, children: i(a2).replace(/^https?:\/\//, ``) });
  }
  return e.type === `number` && typeof a2 == `number` ? (0, r.jsx)(`span`, { className: `ui-dt__text`, children: a2.toLocaleString(`en-US`) }) : (0, r.jsx)(`span`, { className: `ui-dt__text`, children: a2 });
}
function u({ column: e, value: t, options: i2, onChange: a2, onDone: o2 }) {
  let s2 = (0, n3.useRef)(null);
  return (0, n3.useEffect)(() => {
    let e2 = s2.current;
    if (!e2) return;
    e2.focus();
    let t2 = e2.value.length;
    e2.setSelectionRange(t2, t2);
  }, []), i2 ? (0, r.jsx)(d, { label: e.label, value: t, options: i2, onChange: a2, onDone: o2 }) : (0, r.jsx)(`input`, { ref: s2, className: `ui-dt__input`, value: t, inputMode: e.type === `number` ? `decimal` : void 0, "aria-label": e.label, onChange: (e2) => a2(e2.target.value), onBlur: () => o2(true), onKeyDown: (e2) => {
    e2.key === `Enter` ? (e2.preventDefault(), o2(true, `down`)) : e2.key === `Tab` ? (e2.preventDefault(), o2(true, `right`)) : e2.key === `Escape` && (e2.preventDefault(), o2(false));
  } });
}
function d({ label: e, value: t, options: i2, onChange: a2, onDone: o2 }) {
  let s2 = (0, n3.useRef)(null), c2 = (0, n3.useRef)(null), [l2, u2] = (0, n3.useState)(null);
  return (0, n3.useLayoutEffect)(() => {
    let e2 = () => {
      let e3 = s2.current?.closest(`td`), t2 = c2.current;
      if (!e3 || !t2) return;
      let n4 = e3.getBoundingClientRect(), r2 = t2.offsetHeight, i3 = window.innerHeight - n4.top - 4 >= r2 + 8 ? n4.top + 4 : Math.max(8, n4.bottom - 4 - r2);
      u2({ left: n4.left + 6, top: i3, width: Math.max(n4.width - 12, 160) });
    };
    return e2(), window.addEventListener(`scroll`, e2, true), window.addEventListener(`resize`, e2), () => {
      window.removeEventListener(`scroll`, e2, true), window.removeEventListener(`resize`, e2);
    };
  }, []), (0, n3.useEffect)(() => {
    let e2 = (e3) => {
      c2.current?.contains(e3.target) || o2(false);
    };
    return window.addEventListener(`pointerdown`, e2, true), () => window.removeEventListener(`pointerdown`, e2, true);
  }, [o2]), (0, r.jsx)(`span`, { ref: s2, className: `ui-dt__picker-anchor`, children: (0, r.jsx)(`div`, { ref: c2, className: `ui-dt__picker`, role: `listbox`, "aria-label": e, style: l2 ? { left: l2.left, top: l2.top, minWidth: l2.width } : { visibility: `hidden` }, children: i2.map((e2) => (0, r.jsx)(`button`, { type: `button`, role: `option`, "aria-selected": e2 === t, className: `ui-dt__option`, autoFocus: e2 === t || !t && e2 === i2[0], onPointerDown: (e3) => e3.stopPropagation(), onClick: () => {
    a2(e2), o2(true, void 0, e2);
  }, onKeyDown: (e3) => {
    e3.key === `Escape` && o2(false);
    let t2 = [...e3.currentTarget.parentElement?.querySelectorAll(`button`) ?? []], n4 = t2.indexOf(e3.currentTarget);
    e3.key === `ArrowDown` && t2[Math.min(t2.length - 1, n4 + 1)]?.focus(), e3.key === `ArrowUp` && t2[Math.max(0, n4 - 1)]?.focus(), e3.key.startsWith(`Arrow`) && e3.preventDefault();
  }, children: e2 }, e2)) }) });
}
function f({ checked: e, mixed: t, label: n4, onChange: i2 }) {
  return (0, r.jsx)(`button`, { type: `button`, role: `checkbox`, "aria-checked": t ? `mixed` : e, "aria-label": n4, className: `ui-dt__check`, onPointerDown: (e2) => e2.stopPropagation(), onClick: i2, children: (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: t ? (0, r.jsx)(`path`, { d: `M4.5 8h7` }) : (0, r.jsx)(`path`, { d: `m4.25 8.25 2.5 2.5 5-5.5` }) }) });
}
var ee = () => (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, width: `14`, height: `14`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M8 3v10M3 8h10` }) });
var p = () => (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, width: `14`, height: `14`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.4`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.6 8.5h5.8l.6-8.5` }) });
var te = () => (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, width: `15`, height: `15`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.4`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M5.5 3.5 2.5 6.5l3 3M2.5 6.5h7a4 4 0 0 1 0 8H7` }) });
var m = () => (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, width: `15`, height: `15`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.4`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `m10.5 3.5 3 3-3 3M13.5 6.5h-7a4 4 0 0 0 0 8H9` }) });
var ne = () => (0, r.jsx)(`svg`, { viewBox: `0 0 12 12`, width: `11`, height: `11`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.4`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M6 2.5v7M3.5 7l2.5 2.5L8.5 7` }) });
var h = (e) => (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, width: `15`, height: `15`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.3`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: e }) });
var g = () => h(`M3 4h10M3 7h10M3 10h10M3 13h6`);
var _ = () => h(`M3 3h4v4H3zM9 3h4v4H9zM3 9h4v4H3zM9 9h4v4H9z`);
var v = () => h(`M6.5 9.5l3-3M7.25 4.75l1-1a2.5 2.5 0 0 1 3.5 3.5l-1 1M8.75 11.25l-1 1a2.5 2.5 0 0 1-3.5-3.5l1-1`);
var y = () => h(`M3 4.5h10v9H3zM3 7.5h10M6 2.5v3M10 2.5v3`);
function b(e) {
  let t = (0, n3.useRef)(null);
  return (0, n3.useLayoutEffect)(() => {
    let n4 = t.current, r2 = e.current;
    if (!n4 || !r2) return;
    let i2 = () => {
      n4.style.height = `${r2.offsetHeight}px`;
    };
    i2();
    let a2 = new ResizeObserver(i2);
    a2.observe(r2);
    let o2 = requestAnimationFrame(() => n4.setAttribute(`data-smooth`, ``));
    return () => {
      a2.disconnect(), cancelAnimationFrame(o2);
    };
  }, [e]), t;
}
var re = `.ui-dt{--ui-dt-card: #ffffff;--ui-dt-line: #ececec;--ui-dt-grid: #f0f0f0;--ui-dt-ink: #171717;--ui-dt-text: #404040;--ui-dt-muted: #8f8f8f;--ui-dt-faint: #b5b5b5;--ui-dt-hover: #fafafa;--ui-dt-selected: #f5f8ff;--ui-dt-accent: #2f6bff;--ui-dt-range: rgba(47, 107, 255, 0.07);--ui-dt-tray: #f0f0f0;--ui-dt-accent-ink: #2f6bff;--ui-dt-border: #e5e5e5;--ui-dt-col-active: #fafbff;--ui-dt-th-hover: #f6f6f6;--ui-dt-active-blur: #a9c1ff;--ui-dt-edit: #fff;--ui-dt-pop: #fff;--ui-dt-pop-ring: #e5e5e5;--ui-dt-option-hover: #f5f5f5;--ui-dt-check-bg: #fff;--ui-dt-check-border: #d4d4d4;--ui-dt-check-border-hover: #a3a3a3;--ui-dt-check-mark: #fff;--ui-dt-underline: #d4d4d4;--ui-dt-wash: rgba(0, 0, 0, 0.05);--ui-dt-wash-soft: rgba(0, 0, 0, 0.04);--ui-dt-danger: #e5484d;--ui-dt-danger-hover: #d13438;--ui-dt-danger-wash: rgba(229, 72, 77, 0.08);--ui-dt-card-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);--ui-dt-pop-shadow: 0 10px 28px -8px rgba(0, 0, 0, 0.18);box-sizing: border-box;width: 100%;min-width: 0;background: var(--ui-dt-tray);padding: 6px;border-radius: 22px;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-dt-ink);-webkit-font-smoothing: antialiased}.ui-dt *, .ui-dt *::before, .ui-dt *::after{box-sizing: border-box}.ui-dt button{margin: 0;font: inherit;color: inherit;cursor: pointer}.ui-dt__head{display: flex;align-items: center;gap: 10px;padding: 9px 10px 8px 18px;min-height: 46px}.ui-dt__title{margin: 0;font-size: 15px;font-weight: 500;line-height: 22px;letter-spacing: -0.01em}.ui-dt__title-icon{display: grid}.ui-dt__title-icon svg{width: 18px;height: 18px}.ui-dt__tools{display: flex;gap: 2px;margin-left: auto}.ui-dt__tool{display: grid;place-items: center;width: 28px;height: 28px;padding: 0;border: 0;border-radius: 8px;background: transparent;color: var(--ui-dt-text) !important;transition: background-color 140ms ease, opacity 140ms ease}.ui-dt__tool:hover:not(:disabled){background: var(--ui-dt-wash)}.ui-dt__tool:disabled{opacity: 0.35;cursor: default}.ui-dt__tool:focus-visible{outline: 2px solid var(--ui-dt-accent);outline-offset: 1px}.ui-dt__card{overflow: hidden;background: var(--ui-dt-card);border: 1px solid var(--ui-dt-border);border-radius: 16px;box-shadow: var(--ui-dt-card-shadow)}.ui-dt__scroll{overflow-x: auto;scrollbar-width: thin;outline: none}.ui-dt__scroll[data-dragging]{cursor: cell;user-select: none}.ui-dt__table{width: 100%;min-width: 640px;border-collapse: collapse;table-layout: fixed;font-size: 14px;line-height: 20px}.ui-dt__table th, .ui-dt__table td{position: relative;height: 44px;padding: 0 14px;border-top: 1px solid var(--ui-dt-grid);border-left: 1px solid var(--ui-dt-grid);text-align: left;vertical-align: middle;white-space: nowrap;overflow: hidden;text-overflow: ellipsis}.ui-dt__table th:first-child, .ui-dt__table td:first-child{border-left: 0}.ui-dt__table th{padding: 0 6px;font-weight: 450;color: var(--ui-dt-muted);border-top: 0;transition: background-color 140ms ease}.ui-dt__table th[data-col-active]{background: var(--ui-dt-col-active)}.ui-dt__th{display: flex;align-items: center;gap: 8px;width: 100%;height: 32px;padding: 0 8px;border: 0;border-radius: 8px;background: transparent;color: inherit !important;text-align: left;transition: background-color 140ms ease, color 140ms ease}.ui-dt__th:hover{background: var(--ui-dt-th-hover);color: var(--ui-dt-text) !important}.ui-dt__th:focus-visible{outline: 2px solid var(--ui-dt-accent);outline-offset: -2px}.ui-dt__th-label{overflow: hidden;text-overflow: ellipsis}.ui-dt__col-icon{display: grid;color: var(--ui-dt-faint)}.ui-dt__sort{display: grid;margin-left: auto;color: var(--ui-dt-faint);opacity: 0;transition: opacity 140ms ease, transform 220ms cubic-bezier(0.22, 1, 0.36, 1)}.ui-dt__th:hover .ui-dt__sort{opacity: 1}.ui-dt__sort[data-dir]{opacity: 1;color: var(--ui-dt-accent-ink)}.ui-dt__sort[data-dir="asc"]{transform: rotate(180deg)}.ui-dt__table .ui-dt__select{padding: 0;text-align: center}.ui-dt__select .ui-dt__check{margin: 0 auto}.ui-dt__table tbody tr{transition: background-color 140ms ease}.ui-dt__table tbody tr:hover{background: var(--ui-dt-hover)}.ui-dt__table tbody tr[data-selected]{background: var(--ui-dt-selected)}.ui-dt__table td[data-cell]{cursor: cell}.ui-dt__table td[data-in-range]{background: var(--ui-dt-range)}.ui-dt__table td[data-active]::after{content: "";position: absolute;inset: 0;border: 2px solid var(--ui-dt-accent);border-radius: 3px;pointer-events: none}.ui-dt__scroll:not(:focus-within) td[data-active]::after{border-color: var(--ui-dt-active-blur)}.ui-dt__table td[data-editing]{padding: 0;overflow: visible;background: var(--ui-dt-edit)}.ui-dt__input{width: 100%;height: 100%;padding: 0 14px;border: 0;outline: none;background: transparent;font: inherit;color: var(--ui-dt-ink)}.ui-dt__table td[data-type="number"] .ui-dt__input{font-variant-numeric: tabular-nums}.ui-dt__picker-anchor{display: block}.ui-dt__picker{position: fixed;z-index: 50;display: grid;gap: 2px;padding: 4px;border-radius: 12px;background: var(--ui-dt-pop);box-shadow: 0 0 0 1px var(--ui-dt-pop-ring), var(--ui-dt-pop-shadow);animation: ui-dt-drop 180ms cubic-bezier(0.22, 1, 0.36, 1)}.ui-dt__option{height: 30px;padding: 0 10px;border: 0;border-radius: 8px;background: transparent;font-size: 13px !important;text-align: left;color: var(--ui-dt-text) !important}.ui-dt__option:hover, .ui-dt__option:focus-visible{background: var(--ui-dt-option-hover);outline: none}.ui-dt__option[aria-selected="true"]{color: var(--ui-dt-accent-ink) !important;font-weight: 500}.ui-dt__name{display: flex;align-items: center;gap: 10px;min-width: 0}.ui-dt__name-text{overflow: hidden;text-overflow: ellipsis;color: var(--ui-dt-ink)}.ui-dt__name-text[data-empty]{color: var(--ui-dt-faint)}.ui-dt__logo{display: grid;place-items: center;flex: none;width: 18px;height: 18px}.ui-dt__logo svg{width: 100%;height: 100%}.ui-dt__logo--empty{border-radius: 5px;background: var(--ui-dt-grid)}.ui-dt__check{display: grid;place-items: center;flex: none;width: 16px;height: 16px;padding: 0;border: 1px solid var(--ui-dt-check-border);border-radius: 5px;background: var(--ui-dt-check-bg);transition: background-color 140ms ease, border-color 140ms ease}.ui-dt__check:hover{border-color: var(--ui-dt-check-border-hover)}.ui-dt__check:focus-visible{outline: 2px solid var(--ui-dt-accent);outline-offset: 2px}.ui-dt__check svg{width: 12px;height: 12px;fill: none;stroke: var(--ui-dt-check-mark);stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round;opacity: 0;transform: scale(0.6);transition: opacity 140ms ease, transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-dt__check[aria-checked="true"], .ui-dt__check[aria-checked="mixed"]{background: var(--ui-dt-ink);border-color: var(--ui-dt-ink)}.ui-dt__check[aria-checked="true"] svg, .ui-dt__check[aria-checked="mixed"] svg{opacity: 1;transform: none}.ui-dt__tag{display: inline-block;max-width: 100%;padding: 2px 9px;border-radius: 7px;font-size: 13px;font-weight: 450;line-height: 20px;overflow: hidden;text-overflow: ellipsis;vertical-align: middle}.ui-dt__tag[data-tone="blue"]{background: #eef3ff;color: #2f6bff;box-shadow: inset 0 0 0 1px #dce6ff}.ui-dt__tag[data-tone="violet"]{background: #f4f0ff;color: #7c4dff;box-shadow: inset 0 0 0 1px #e7dfff}.ui-dt__tag[data-tone="pink"]{background: #fff0f6;color: #db2777;box-shadow: inset 0 0 0 1px #fde0ec}.ui-dt__tag[data-tone="green"]{background: #edfaf3;color: #15803d;box-shadow: inset 0 0 0 1px #d5f2e2}.ui-dt__tag[data-tone="amber"]{background: #fff6e8;color: #b45309;box-shadow: inset 0 0 0 1px #fde9c8}.ui-dt__tag[data-tone="gray"]{background: #f5f5f5;color: #525252;box-shadow: inset 0 0 0 1px #ebebeb}.ui-dt__link{color: var(--ui-dt-text);text-decoration: underline;text-decoration-color: var(--ui-dt-underline);text-underline-offset: 3px;transition: text-decoration-color 140ms ease, color 140ms ease}.ui-dt__link:hover{color: var(--ui-dt-ink);text-decoration-color: currentColor}.ui-dt__text{color: var(--ui-dt-text);font-variant-numeric: tabular-nums}.ui-dt__empty{margin: 0;padding: 24px;font-size: 14px;text-align: center;color: var(--ui-dt-muted)}.ui-dt__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 44px;padding: 6px 16px 7px 8px}.ui-dt__bulk{display: flex;align-items: center;gap: 4px;padding-left: 10px;font-size: 14px;font-weight: 500}.ui-dt__bulk > span{margin-right: 6px}.ui-dt__add{display: inline-flex;align-items: center;gap: 8px;height: 30px;padding: 0 10px;border: 0;border-radius: 8px;background: none;font-size: 14px;color: var(--ui-dt-muted) !important;transition: background-color 140ms ease, color 140ms ease}.ui-dt__add:hover{background: var(--ui-dt-wash-soft);color: var(--ui-dt-ink) !important}.ui-dt__add--danger{color: var(--ui-dt-danger) !important}.ui-dt__add--danger:hover{background: var(--ui-dt-danger-wash);color: var(--ui-dt-danger-hover) !important}.ui-dt__add:focus-visible{outline: 2px solid var(--ui-dt-accent);outline-offset: 2px}.ui-dt__summary{overflow: hidden;font-size: 13px;font-variant-numeric: tabular-nums;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-dt-muted)}@keyframes ui-dt-drop{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}@media (prefers-reduced-motion: reduce){.ui-dt__table tbody tr, .ui-dt__check, .ui-dt__check svg, .ui-dt__sort{transition: none}.ui-dt__picker{animation: none}}.ui-dt__morph{overflow: hidden}.ui-dt__morph[data-smooth]{transition: height 380ms cubic-bezier(0.22, 1, 0.36, 1)}@media (prefers-reduced-motion: reduce){.ui-dt__morph[data-smooth]{transition: none}}.ui-dt input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-dt textarea:focus-visible, .ui-dt [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-dt{--ui-dt-card: #232326;--ui-dt-line: rgba(255, 255, 255, 0.08);--ui-dt-grid: rgba(255, 255, 255, 0.07);--ui-dt-ink: #ededed;--ui-dt-text: #c4c4c4;--ui-dt-muted: #8f8f8f;--ui-dt-faint: #6b6b70;--ui-dt-hover: rgba(255, 255, 255, 0.03);--ui-dt-selected: rgba(47, 107, 255, 0.12);--ui-dt-range: rgba(47, 107, 255, 0.16);--ui-dt-tray: #161618;--ui-dt-accent-ink: #6b95ff;--ui-dt-border: rgba(255, 255, 255, 0.08);--ui-dt-col-active: rgba(47, 107, 255, 0.08);--ui-dt-th-hover: rgba(255, 255, 255, 0.06);--ui-dt-active-blur: rgba(107, 149, 255, 0.55);--ui-dt-edit: #2a2a2d;--ui-dt-pop: #2a2a2d;--ui-dt-pop-ring: rgba(255, 255, 255, 0.1);--ui-dt-option-hover: #313135;--ui-dt-check-bg: #2a2a2d;--ui-dt-check-border: rgba(255, 255, 255, 0.2);--ui-dt-check-border-hover: rgba(255, 255, 255, 0.36);--ui-dt-check-mark: #121213;--ui-dt-underline: rgba(255, 255, 255, 0.22);--ui-dt-wash: rgba(255, 255, 255, 0.06);--ui-dt-wash-soft: rgba(255, 255, 255, 0.06);--ui-dt-danger: #ff6369;--ui-dt-danger-hover: #ff8589;--ui-dt-danger-wash: rgba(229, 72, 77, 0.14);--ui-dt-card-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);--ui-dt-pop-shadow: 0 12px 30px -8px rgba(0, 0, 0, 0.55)}:where(.dark, [data-theme="dark"]) .ui-dt__tag[data-tone="blue"]{background: rgba(47, 107, 255, 0.16);color: #8aabff;box-shadow: inset 0 0 0 1px rgba(47, 107, 255, 0.28)}:where(.dark, [data-theme="dark"]) .ui-dt__tag[data-tone="violet"]{background: rgba(124, 77, 255, 0.18);color: #b49cff;box-shadow: inset 0 0 0 1px rgba(124, 77, 255, 0.3)}:where(.dark, [data-theme="dark"]) .ui-dt__tag[data-tone="pink"]{background: rgba(236, 72, 153, 0.16);color: #f472b6;box-shadow: inset 0 0 0 1px rgba(236, 72, 153, 0.28)}:where(.dark, [data-theme="dark"]) .ui-dt__tag[data-tone="green"]{background: rgba(34, 197, 94, 0.14);color: #4ade80;box-shadow: inset 0 0 0 1px rgba(34, 197, 94, 0.26)}:where(.dark, [data-theme="dark"]) .ui-dt__tag[data-tone="amber"]{background: rgba(245, 158, 11, 0.14);color: #fbbf24;box-shadow: inset 0 0 0 1px rgba(245, 158, 11, 0.26)}:where(.dark, [data-theme="dark"]) .ui-dt__tag[data-tone="gray"]{background: #2a2a2d;color: #c4c4c4;box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08)}`;

export {
  c,
  g,
  _,
  v,
  y
};
