import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo.clean-OeBBW_7u.js
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
function c({ title: e, icon: t, columns: c2, rows: d2, tagTones: p2 = {}, editable: m2 = true, onRowsChange: h2, onSelectionChange: g2, className: _2 }) {
  let [v2, y2] = (0, n3.useState)(d2), b2 = (0, n3.useRef)({ past: [], future: [] }), [x2, S2] = (0, n3.useState)(/* @__PURE__ */ new Set()), [C2, w2] = (0, n3.useState)(null), [T2, E2] = (0, n3.useState)(null), [D2, O2] = (0, n3.useState)(null), k = (0, n3.useRef)({ active: null, anchor: null }), A = (e2) => {
    k.current.active = e2, E2(e2);
  }, j = (e2) => {
    k.current.anchor = e2, O2(e2);
  }, [M, N] = (0, n3.useState)(null), [P, F] = (0, n3.useState)(false), [, I] = (0, n3.useState)(0), L = (0, n3.useRef)(null), se = ae(L), R = (0, n3.useRef)(0), z = (0, n3.useMemo)(() => {
    if (!C2) return v2;
    let e2 = c2.find((e3) => e3.key === C2.key), t2 = C2.dir === `asc` ? 1 : -1;
    return [...v2].sort((n4, r2) => {
      let a2 = n4[C2.key], o2 = r2[C2.key];
      return i(a2) === `` ? 1 : i(o2) === `` ? -1 : e2?.type === `number` ? (Number(a2) - Number(o2)) * t2 : i(a2).localeCompare(i(o2), void 0, { numeric: true }) * t2;
    });
  }, [v2, C2, c2]), B = (e2) => m2 && c2[e2]?.editable !== false, V = (e2) => {
    b2.current.past.push(v2), b2.current.past.length > 100 && b2.current.past.shift(), b2.current.future = [], y2(e2), h2?.(e2);
  }, H = () => {
    let e2 = b2.current.past.pop();
    e2 && (b2.current.future.push(v2), y2(e2), h2?.(e2));
  }, U = () => {
    let e2 = b2.current.future.pop();
    e2 && (b2.current.past.push(v2), y2(e2), h2?.(e2));
  }, W = (0, n3.useMemo)(() => {
    if (!T2) return null;
    let e2 = D2 ?? T2;
    return { r1: Math.min(e2.r, T2.r), r2: Math.max(e2.r, T2.r), c1: Math.min(e2.c, T2.c), c2: Math.max(e2.c, T2.c) };
  }, [T2, D2]), G = (e2, t2) => !!W && e2 >= W.r1 && e2 <= W.r2 && t2 >= W.c1 && t2 <= W.c2, K = (e2, t2) => {
    let n4 = /* @__PURE__ */ new Map();
    t2.forEach((t3, r2) => t3.forEach((t4, i2) => {
      let a2 = z[e2.r + r2], o2 = e2.c + i2, l2 = c2[o2];
      a2 && l2 && B(o2) && n4.set(a2.id, { ...n4.get(a2.id), [l2.key]: s(t4, l2) });
    })), n4.size && V(v2.map((e3) => n4.has(e3.id) ? { ...e3, ...n4.get(e3.id) } : e3));
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
    T2 && L.current?.querySelector(`[data-cell="${T2.r}-${T2.c}"]`)?.scrollIntoView({ block: `nearest`, inline: `nearest` });
  }, [T2]), (0, n3.useEffect)(() => {
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
    if (M || !T2) return;
    e2.preventDefault();
    let t2 = e2.clipboardData.getData(`text/plain`).replace(/\r/g, ``).replace(/\n$/, ``);
    if (!t2) return;
    let n4 = t2.split(`
`).map((e3) => e3.split(`	`));
    if (n4.length === 1 && n4[0].length === 1 && W) {
      let e3 = Array.from({ length: W.r2 - W.r1 + 1 }, () => Array.from({ length: W.c2 - W.c1 + 1 }, () => n4[0][0]));
      return K({ r: W.r1, c: W.c1 }, e3);
    }
    K(W ? { r: W.r1, c: W.c1 } : T2, n4);
  }, fe = (e2) => w2((t2) => t2?.key === e2 ? t2.dir === `asc` ? { key: e2, dir: `desc` } : null : { key: e2, dir: `asc` }), Z = (e2) => {
    S2(e2), g2?.(v2.filter((t2) => e2.has(t2.id)).map((e3) => e3.id));
  }, Q = z.length > 0 && x2.size === z.length, pe = x2.size > 0 && !Q, me = () => {
    R.current += 1;
    let e2 = c2.find((e3) => e3.type === `title`)?.key ?? c2[0].key, t2 = { id: `new-${R.current}`, [e2]: `` };
    V([...v2, t2]), w2(null);
    let n4 = { r: v2.length, c: Math.max(0, c2.findIndex((t3) => t3.key === e2)) };
    A(n4), j(null), N({ cell: n4, value: `` });
  }, he = () => {
    V(v2.filter((e2) => !x2.has(e2.id))), Z(/* @__PURE__ */ new Set()), A(null), j(null);
  }, ge = (e2) => e2.options ?? [...new Set(v2.map((t2) => i(t2[e2.key])).filter(Boolean))], _e = (() => {
    if (!W || !T2) return null;
    if ((W.r2 - W.r1 + 1) * (W.c2 - W.c1 + 1) === 1) return `${a(T2.c)}${T2.r + 1}`;
    let e2 = 0, t2 = 0, n4 = false;
    for (let r2 = W.r1; r2 <= W.r2; r2++) for (let a2 = W.c1; a2 <= W.c2; a2++) {
      let o2 = z[r2]?.[c2[a2].key];
      i(o2) !== `` && e2++, c2[a2].type === `number` && typeof o2 == `number` && (n4 = true, t2 += o2);
    }
    return `${e2} ${e2 === 1 ? `value` : `values`}${n4 ? ` \xB7 Sum ${t2.toLocaleString(`en-US`)}` : ``}`;
  })(), $ = o() ? `\u2318` : `Ctrl`;
  return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`style`, { href: `ui-data-table-clean`, precedence: `default`, children: oe }), (0, r.jsxs)(`section`, { className: [`ui-dtc`, _2].filter(Boolean).join(` `), "aria-label": e, children: [(0, r.jsxs)(`header`, { className: `ui-dtc__head`, children: [t && (0, r.jsx)(`span`, { className: `ui-dtc__title-icon`, children: t }), (0, r.jsx)(`h3`, { className: `ui-dtc__title`, children: e }), m2 && (0, r.jsxs)(`div`, { className: `ui-dtc__tools`, children: [(0, r.jsx)(`button`, { type: `button`, className: `ui-dtc__tool`, "aria-label": `Undo (${$} Z)`, title: `Undo \xB7 ${$} Z`, disabled: !b2.current.past.length, onClick: () => {
    H(), I((e2) => e2 + 1);
  }, children: (0, r.jsx)(ne, {}) }), (0, r.jsx)(`button`, { type: `button`, className: `ui-dtc__tool`, "aria-label": `Redo (${$} Shift Z)`, title: `Redo \xB7 ${$} \u21E7 Z`, disabled: !b2.current.future.length, onClick: () => {
    U(), I((e2) => e2 + 1);
  }, children: (0, r.jsx)(re, {}) })] })] }), (0, r.jsx)(`div`, { className: `ui-dtc__body`, children: (0, r.jsx)(`div`, { className: `ui-dtc__morph`, ref: se, children: (0, r.jsxs)(`div`, { ref: L, className: `ui-dtc__scroll`, role: `grid`, "aria-label": e, "aria-rowcount": z.length + 1, "aria-multiselectable": `true`, tabIndex: 0, onKeyDown: ce, onCopy: X, onCut: ue, onPaste: de, "data-dragging": P || void 0, children: [(0, r.jsxs)(`table`, { className: `ui-dtc__table`, role: `presentation`, children: [(0, r.jsxs)(`colgroup`, { children: [(0, r.jsx)(`col`, { style: { width: 40 } }), c2.map((e2) => (0, r.jsx)(`col`, { style: e2.width ? { width: e2.width } : void 0 }, e2.key))] }), (0, r.jsx)(`thead`, { children: (0, r.jsxs)(`tr`, { role: `row`, children: [(0, r.jsx)(`th`, { className: `ui-dtc__select`, role: `columnheader`, children: (0, r.jsx)(f, { checked: Q, mixed: pe, label: `Select all rows`, onChange: () => Z(Q ? /* @__PURE__ */ new Set() : new Set(z.map((e2) => e2.id))) }) }), c2.map((e2, t2) => {
    let n4 = C2?.key === e2.key ? C2.dir : null;
    return (0, r.jsx)(`th`, { role: `columnheader`, "aria-sort": n4 === `asc` ? `ascending` : n4 === `desc` ? `descending` : `none`, "data-type": e2.type, "data-col-active": W && t2 >= W.c1 && t2 <= W.c2 || void 0, children: (0, r.jsxs)(`button`, { type: `button`, className: `ui-dtc__th`, onClick: () => fe(e2.key), children: [e2.icon && (0, r.jsx)(`span`, { className: `ui-dtc__col-icon`, children: e2.icon }), (0, r.jsx)(`span`, { className: `ui-dtc__th-label`, children: e2.label }), (0, r.jsx)(`span`, { className: `ui-dtc__sort`, "data-dir": n4 ?? void 0, "aria-hidden": `true`, children: (0, r.jsx)(ie, {}) })] }) }, e2.key);
  })] }) }), (0, r.jsx)(`tbody`, { children: z.map((e2, t2) => {
    let n4 = x2.has(e2.id);
    return (0, r.jsxs)(`tr`, { role: `row`, "data-selected": n4 || void 0, children: [(0, r.jsx)(`td`, { className: `ui-dtc__select`, role: `gridcell`, children: (0, r.jsx)(f, { checked: n4, label: `Select ${i(e2[c2.find((e3) => e3.type === `title`)?.key ?? c2[0].key]) || `row`}`, onChange: () => {
      let t3 = new Set(x2);
      t3.has(e2.id) ? t3.delete(e2.id) : t3.add(e2.id), Z(t3);
    } }) }), c2.map((n5, i2) => {
      let a2 = T2?.r === t2 && T2?.c === i2, o2 = M?.cell.r === t2 && M?.cell.c === i2;
      return (0, r.jsx)(`td`, { role: `gridcell`, "data-cell": `${t2}-${i2}`, "data-type": n5.type, "data-active": a2 || void 0, "data-in-range": G(t2, i2) && !a2 || void 0, "data-editing": o2 || void 0, "aria-selected": G(t2, i2), "aria-readonly": !B(i2) || void 0, onPointerDown: (e3) => {
        o2 || e3.button !== 0 || e3.target.closest(`a`) || (e3.preventDefault(), L.current?.focus({ preventScroll: true }), M && Y(true), q({ r: t2, c: i2 }, e3.shiftKey), F(true));
      }, onPointerEnter: () => {
        P && (k.current.anchor || j(k.current.active), A({ r: t2, c: i2 }));
      }, onDoubleClick: () => J({ r: t2, c: i2 }), children: o2 && M ? (0, r.jsx)(u, { column: n5, value: M.value, options: n5.type === `tag` ? ge(n5) : void 0, tones: p2, onChange: (e3) => N({ cell: M.cell, value: e3 }), onDone: (e3, n6, r2) => Y(e3, n6 ? { r: t2 + +(n6 === `down`), c: i2 + +(n6 === `right`) } : void 0, r2) }) : (0, r.jsx)(l, { column: n5, row: e2, tone: p2 }) }, n5.key);
    })] }, e2.id);
  }) })] }), z.length === 0 && (0, r.jsx)(`p`, { className: `ui-dtc__empty`, children: `No rows yet` })] }) }) }), (0, r.jsxs)(`footer`, { className: `ui-dtc__foot`, children: [x2.size > 0 ? (0, r.jsxs)(`div`, { className: `ui-dtc__bulk`, role: `status`, children: [(0, r.jsxs)(`span`, { children: [x2.size, ` selected`] }), m2 && (0, r.jsxs)(`button`, { type: `button`, className: `ui-dtc__add ui-dtc__add--danger`, onClick: he, children: [(0, r.jsx)(te, {}), `Delete`] }), (0, r.jsx)(`button`, { type: `button`, className: `ui-dtc__add`, onClick: () => Z(/* @__PURE__ */ new Set()), children: `Clear` })] }) : m2 ? (0, r.jsxs)(`button`, { type: `button`, className: `ui-dtc__add`, onClick: me, children: [(0, r.jsx)(ee, {}), `Add row`] }) : (0, r.jsx)(`span`, {}), (0, r.jsx)(`span`, { className: `ui-dtc__summary`, "aria-live": `polite`, children: _e ?? (m2 ? `Double-click a cell to edit` : ``) })] })] })] });
}
function l({ column: e, row: t, tone: n4 }) {
  let a2 = t[e.key];
  if (e.type === `title`) return (0, r.jsxs)(`span`, { className: `ui-dtc__name`, children: [t.logo ? (0, r.jsx)(`span`, { className: `ui-dtc__logo`, children: t.logo }) : (0, r.jsx)(`span`, { className: `ui-dtc__logo ui-dtc__logo--empty` }), (0, r.jsx)(`span`, { className: `ui-dtc__name-text`, "data-empty": i(a2) === `` || void 0, children: i(a2) || `Untitled` })] });
  if (i(a2) === ``) return null;
  if (e.type === `tag`) return (0, r.jsx)(`span`, { className: `ui-dtc__tag`, "data-tone": n4[i(a2)] ?? `blue`, children: a2 });
  if (e.type === `link`) {
    let e2 = /^https?:\/\//.test(i(a2)) ? i(a2) : `https://${i(a2)}`;
    return (0, r.jsx)(`a`, { className: `ui-dtc__link`, href: e2, target: `_blank`, rel: `noreferrer`, tabIndex: -1, children: i(a2).replace(/^https?:\/\//, ``) });
  }
  return e.type === `number` && typeof a2 == `number` ? (0, r.jsx)(`span`, { className: `ui-dtc__text`, children: a2.toLocaleString(`en-US`) }) : (0, r.jsx)(`span`, { className: `ui-dtc__text`, children: a2 });
}
function u({ column: e, value: t, options: i2, tones: a2 = {}, onChange: o2, onDone: s2 }) {
  let c2 = (0, n3.useRef)(null);
  return (0, n3.useEffect)(() => {
    let e2 = c2.current;
    if (!e2) return;
    e2.focus();
    let t2 = e2.value.length;
    e2.setSelectionRange(t2, t2);
  }, []), i2 ? (0, r.jsx)(d, { label: e.label, value: t, options: i2, tones: a2, onChange: o2, onDone: s2 }) : (0, r.jsx)(`input`, { ref: c2, className: `ui-dtc__input`, value: t, inputMode: e.type === `number` ? `decimal` : void 0, "aria-label": e.label, onChange: (e2) => o2(e2.target.value), onBlur: () => s2(true), onKeyDown: (e2) => {
    e2.key === `Enter` ? (e2.preventDefault(), s2(true, `down`)) : e2.key === `Tab` ? (e2.preventDefault(), s2(true, `right`)) : e2.key === `Escape` && (e2.preventDefault(), s2(false));
  } });
}
function d({ label: e, value: t, options: i2, tones: a2, onChange: o2, onDone: s2 }) {
  let c2 = (0, n3.useRef)(null), l2 = (0, n3.useRef)(null), u2 = (0, n3.useRef)(null), [d2, f2] = (0, n3.useState)(null);
  return (0, n3.useLayoutEffect)(() => {
    let e2 = () => {
      let e3 = c2.current?.closest(`td`), t2 = l2.current;
      if (!e3 || !t2) return;
      let n4 = e3.getBoundingClientRect(), r2 = t2.offsetHeight, i3 = window.innerHeight - n4.top - 4 >= r2 + 8 ? n4.top + 4 : Math.max(8, n4.bottom - 4 - r2), a3 = u2.current?.getBoundingClientRect() ?? { left: 0, top: 0 };
      f2({ left: n4.left + 6 - a3.left, top: i3 - a3.top, width: Math.max(n4.width - 12, 160) });
    };
    return e2(), window.addEventListener(`scroll`, e2, true), window.addEventListener(`resize`, e2), () => {
      window.removeEventListener(`scroll`, e2, true), window.removeEventListener(`resize`, e2);
    };
  }, []), (0, n3.useEffect)(() => {
    let e2 = (e3) => {
      l2.current?.contains(e3.target) || s2(false);
    };
    return window.addEventListener(`pointerdown`, e2, true), () => window.removeEventListener(`pointerdown`, e2, true);
  }, [s2]), (0, r.jsxs)(`span`, { ref: c2, className: `ui-dtc__picker-anchor`, children: [(0, r.jsx)(`span`, { ref: u2, className: `ui-dtc__picker-origin`, "aria-hidden": `true` }), (0, r.jsx)(`div`, { ref: l2, className: `ui-dtc__picker`, role: `listbox`, "aria-label": e, style: d2 ? { left: d2.left, top: d2.top, minWidth: d2.width } : { visibility: `hidden` }, children: i2.map((e2) => (0, r.jsxs)(`button`, { type: `button`, role: `option`, "aria-selected": e2 === t, className: `ui-dtc__option`, autoFocus: e2 === t || !t && e2 === i2[0], onPointerDown: (e3) => e3.stopPropagation(), onClick: () => {
    o2(e2), s2(true, void 0, e2);
  }, onKeyDown: (e3) => {
    e3.key === `Escape` && s2(false);
    let t2 = [...e3.currentTarget.parentElement?.querySelectorAll(`button`) ?? []], n4 = t2.indexOf(e3.currentTarget);
    e3.key === `ArrowDown` && t2[Math.min(t2.length - 1, n4 + 1)]?.focus(), e3.key === `ArrowUp` && t2[Math.max(0, n4 - 1)]?.focus(), e3.key.startsWith(`Arrow`) && e3.preventDefault();
  }, children: [(0, r.jsx)(`span`, { className: `ui-dtc__tag`, "data-tone": a2[e2] ?? `blue`, children: e2 }), (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, className: `ui-dtc__option-check`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `m4 8.25 2.6 2.6L12 5.25` }) })] }, e2)) })] });
}
function f({ checked: e, mixed: t, label: n4, onChange: i2 }) {
  return (0, r.jsx)(`button`, { type: `button`, role: `checkbox`, "aria-checked": t ? `mixed` : e, "aria-label": n4, className: `ui-dtc__check`, onPointerDown: (e2) => e2.stopPropagation(), onClick: i2, children: (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: t ? (0, r.jsx)(`path`, { d: `M5 8h6` }) : (0, r.jsx)(`path`, { d: `m4.5 8.25 2.25 2.25L11.5 5.75` }) }) });
}
var p = (e, t = 16) => (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, width: t, height: t, fill: `none`, stroke: `currentColor`, strokeWidth: `1.1`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: e }) });
var ee = () => p(`M8 3.5v9M3.5 8h9`);
var te = () => p(`M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.6 8.5h5.8l.6-8.5`);
var ne = () => p(`M5.5 3.5 2.5 6.5l3 3M2.5 6.5h7a3.5 3.5 0 0 1 0 7H7`);
var re = () => p(`m10.5 3.5 3 3-3 3M13.5 6.5h-7a3.5 3.5 0 0 0 0 7H9`);
var ie = () => p(`M8 3.5v9M5 9.5l3 3 3-3`, 12);
var m = (e) => p(e, 14);
var h = () => m(`M3 4h10M3 7h10M3 10h10M3 13h6`);
var g = () => m(`M3 3h4v4H3zM9 3h4v4H9zM3 9h4v4H3zM9 9h4v4H9z`);
var _ = () => m(`M6.5 9.5l3-3M7.25 4.75l1-1a2.5 2.5 0 0 1 3.5 3.5l-1 1M8.75 11.25l-1 1a2.5 2.5 0 0 1-3.5-3.5l1-1`);
var v = () => m(`M3 4.5h10v9H3zM3 7.5h10M6 2.5v3M10 2.5v3`);
function ae(e) {
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
var oe = `.ui-dtc{--ui-dtc-card: #ffffff;--ui-dtc-ink: rgba(0, 0, 0, 0.88);--ui-dtc-strong: #000000;--ui-dtc-text: rgba(0, 0, 0, 0.61);--ui-dtc-muted: rgba(0, 0, 0, 0.45);--ui-dtc-faint: rgba(0, 0, 0, 0.27);--ui-dtc-icon: rgba(0, 0, 0, 0.447);--ui-dtc-line: rgba(0, 0, 0, 0.06);--ui-dtc-fill: rgba(0, 0, 0, 0.06);--ui-dtc-wash: rgba(0, 0, 0, 0.03);--ui-dtc-row-hover: rgba(0, 0, 0, 0.015);--ui-dtc-accent: rgba(0, 96, 226, 0.765);--ui-dtc-selected: rgba(0, 96, 226, 0.05);--ui-dtc-active-blur: rgba(0, 96, 226, 0.35);--ui-dtc-check-ring: rgba(0, 0, 0, 0.22);--ui-dtc-check-ring-hover: rgba(0, 0, 0, 0.4);--ui-dtc-check-on: rgba(0, 0, 0, 0.88);--ui-dtc-check-mark: #fcfcfc;--ui-dtc-underline: rgba(0, 0, 0, 0.16);--ui-dtc-danger: #e5484d;--ui-dtc-danger-wash: rgba(229, 72, 77, 0.08);--ui-dtc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-dtc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-dtc-focus: rgba(0, 96, 226, 0.35);--ui-dtc-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;width: 100%;min-width: 0;overflow: hidden;border-radius: 10px;background: var(--ui-dtc-card);box-shadow: var(--ui-dtc-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-dtc-ink);-webkit-font-smoothing: antialiased}.ui-dtc *, .ui-dtc *::before, .ui-dtc *::after{box-sizing: border-box}:where(.ui-dtc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-dtc) svg{display: block;flex: none}.ui-dtc button:focus-visible, .ui-dtc a:focus-visible{outline: 2px solid var(--ui-dtc-focus);outline-offset: 1px}.ui-dtc__head{display: flex;align-items: center;gap: 8px;min-height: 52px;padding: 12px 12px 12px 16px}.ui-dtc__title{margin: 0;overflow: hidden;font-size: 15px;font-weight: 500;line-height: 24px;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-dtc-strong)}.ui-dtc__title-icon{display: grid;flex: none}.ui-dtc__title-icon svg{width: 18px;height: 18px}.ui-dtc__tools{display: flex;gap: 2px;margin-left: auto}.ui-dtc__tool{display: grid;place-items: center;width: 28px;height: 28px;border-radius: 6px;color: var(--ui-dtc-icon);transition: background-color 140ms ease, color 140ms ease, opacity 140ms ease}.ui-dtc__tool:hover:not(:disabled){background: var(--ui-dtc-wash);color: var(--ui-dtc-ink)}.ui-dtc__tool:disabled{opacity: 0.4;cursor: default}.ui-dtc__scroll{overflow-x: auto;scrollbar-width: thin;outline: none}.ui-dtc__scroll[data-dragging]{cursor: cell;user-select: none}.ui-dtc__table{width: 100%;min-width: 600px;border-collapse: collapse;table-layout: fixed;font-size: 13px;line-height: 20px}.ui-dtc__table th, .ui-dtc__table td{position: relative;height: 40px;padding: 0 12px;border-top: 0.5px solid var(--ui-dtc-line);text-align: left;vertical-align: middle;white-space: nowrap;overflow: hidden;text-overflow: ellipsis}.ui-dtc__table th{height: 36px;padding: 0 6px;font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-dtc-text);transition: color 140ms ease}.ui-dtc__table th[data-col-active]{color: var(--ui-dtc-ink)}.ui-dtc__th{display: flex;align-items: center;gap: 6px;width: 100%;height: 28px;padding: 0 6px;border-radius: 6px;text-align: left;transition: background-color 140ms ease, color 140ms ease}.ui-dtc__th:hover{background: var(--ui-dtc-wash);color: var(--ui-dtc-ink)}.ui-dtc__th:focus-visible{outline-offset: -2px}.ui-dtc__th-label{overflow: hidden;text-overflow: ellipsis;white-space: nowrap}.ui-dtc__col-icon{display: grid;color: var(--ui-dtc-icon)}.ui-dtc__sort{display: grid;margin-left: auto;color: var(--ui-dtc-icon);opacity: 0;transition: opacity 140ms ease, transform 220ms var(--ui-dtc-ease)}.ui-dtc__th:hover .ui-dtc__sort{opacity: 1}.ui-dtc__sort[data-dir]{opacity: 1;color: var(--ui-dtc-accent)}.ui-dtc__sort[data-dir="asc"]{transform: rotate(180deg)}.ui-dtc__table .ui-dtc__select{padding: 0;text-align: center}.ui-dtc__select .ui-dtc__check{margin: 0 auto}.ui-dtc__table tbody tr{transition: background-color 120ms ease}.ui-dtc__table tbody tr:hover{background: var(--ui-dtc-row-hover)}.ui-dtc__table tbody tr[data-selected]{background: var(--ui-dtc-selected)}.ui-dtc__table td[data-cell]{cursor: cell}.ui-dtc__table td[data-in-range]{background: var(--ui-dtc-selected)}.ui-dtc__table td[data-active]::after{content: "";position: absolute;inset: 1px;border-radius: 4px;box-shadow: inset 0 0 0 1.5px var(--ui-dtc-accent);pointer-events: none}.ui-dtc__scroll:not(:focus-within) td[data-active]::after{box-shadow: inset 0 0 0 1px var(--ui-dtc-active-blur)}.ui-dtc__table td[data-editing]{padding: 0;overflow: visible;background: var(--ui-dtc-card)}.ui-dtc__input{width: 100%;height: 100%;padding: 0 12px;border: 0;outline: none;background: transparent;font: inherit;color: var(--ui-dtc-ink);caret-color: var(--ui-dtc-accent)}.ui-dtc__table td[data-type="number"] .ui-dtc__input{font-variant-numeric: tabular-nums}.ui-dtc__picker-anchor{display: block}.ui-dtc__picker-origin{position: fixed;left: 0;top: 0;width: 0;height: 0;pointer-events: none}.ui-dtc__picker{position: fixed;z-index: 50;display: grid;gap: 2px;padding: 4px;border-radius: 10px;background: var(--ui-dtc-card);box-shadow: var(--ui-dtc-shadow-pop);animation: ui-dtc-drop 180ms var(--ui-dtc-ease)}.ui-dtc__option{display: flex;align-items: center;justify-content: space-between;gap: 12px;height: 32px;padding: 0 6px;border-radius: 6px;text-align: left}.ui-dtc__option:hover, .ui-dtc__option:focus-visible{background: var(--ui-dtc-fill);outline: none}.ui-dtc__option-check{width: 16px;height: 16px;fill: none;stroke: var(--ui-dtc-accent);stroke-width: 1.5;stroke-linecap: round;stroke-linejoin: round;opacity: 0}.ui-dtc__option[aria-selected="true"] .ui-dtc__option-check{opacity: 1}.ui-dtc__name{display: flex;align-items: center;gap: 8px;min-width: 0}.ui-dtc__name-text{overflow: hidden;text-overflow: ellipsis;font-weight: 500;color: var(--ui-dtc-ink)}.ui-dtc__name-text[data-empty]{font-weight: 400;color: var(--ui-dtc-faint)}.ui-dtc__logo{display: grid;place-items: center;flex: none;width: 16px;height: 16px}.ui-dtc__logo svg{width: 100%;height: 100%}.ui-dtc__logo--empty{border-radius: 4px;background: var(--ui-dtc-fill)}.ui-dtc__check{display: grid;place-items: center;flex: none;width: 14px;height: 14px;border-radius: 4px;background: var(--ui-dtc-card);box-shadow: inset 0 0 0 0.5px var(--ui-dtc-check-ring), 0 1px 1px 0 rgba(0, 0, 0, 0.04);transition: background-color 140ms ease, box-shadow 140ms ease}.ui-dtc__check:hover{box-shadow: inset 0 0 0 0.5px var(--ui-dtc-check-ring-hover), 0 1px 1px 0 rgba(0, 0, 0, 0.04)}.ui-dtc__check:focus-visible{outline-offset: 2px}.ui-dtc__check svg{width: 12px;height: 12px;fill: none;stroke: var(--ui-dtc-check-mark);stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round;opacity: 0;transform: scale(0.6);transition: opacity 140ms ease, transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-dtc__check[aria-checked="true"], .ui-dtc__check[aria-checked="mixed"]{background: var(--ui-dtc-check-on);box-shadow: none}.ui-dtc__check[aria-checked="true"] svg, .ui-dtc__check[aria-checked="mixed"] svg{opacity: 1;transform: none}.ui-dtc__tag{display: inline-block;max-width: 100%;height: 20px;padding: 0 6px;border-radius: 5px;overflow: hidden;font-size: 12px;font-weight: 500;line-height: 20px;white-space: nowrap;text-overflow: ellipsis;vertical-align: middle}.ui-dtc__tag[data-tone="blue"]{background: rgba(0, 96, 226, 0.08);color: #1f63d6}.ui-dtc__tag[data-tone="violet"]{background: rgba(124, 77, 255, 0.09);color: #6c45e0}.ui-dtc__tag[data-tone="pink"]{background: rgba(219, 39, 119, 0.08);color: #c22a6e}.ui-dtc__tag[data-tone="green"]{background: rgba(26, 154, 82, 0.09);color: #157a43}.ui-dtc__tag[data-tone="amber"]{background: rgba(232, 162, 12, 0.12);color: #9a6200}.ui-dtc__tag[data-tone="gray"]{background: rgba(0, 0, 0, 0.05);color: var(--ui-dtc-text)}.ui-dtc__link{color: var(--ui-dtc-text);text-decoration: underline;text-decoration-color: var(--ui-dtc-underline);text-decoration-thickness: 1px;text-underline-offset: 3px;transition: text-decoration-color 140ms ease, color 140ms ease}.ui-dtc__link:hover{color: var(--ui-dtc-ink);text-decoration-color: currentColor}.ui-dtc__text{color: var(--ui-dtc-text);font-variant-numeric: tabular-nums}.ui-dtc__empty{margin: 0;padding: 24px;border-top: 0.5px solid var(--ui-dtc-line);text-align: center;color: var(--ui-dtc-muted)}.ui-dtc__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 44px;padding: 8px 16px 8px 8px;border-top: 0.5px solid var(--ui-dtc-line)}.ui-dtc__bulk{display: flex;align-items: center;gap: 2px;min-width: 0;padding-left: 8px}.ui-dtc__bulk > span{margin-right: 8px;font-weight: 500;white-space: nowrap;color: var(--ui-dtc-ink)}.ui-dtc__add{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 10px 0 8px;border-radius: 6px;font-weight: 500;white-space: nowrap;color: var(--ui-dtc-text);transition: background-color 140ms ease, color 140ms ease}.ui-dtc__add svg{color: var(--ui-dtc-icon);transition: color 140ms ease}.ui-dtc__add:not(:has(svg)){padding: 0 10px}.ui-dtc__add:hover{background: var(--ui-dtc-wash);color: var(--ui-dtc-ink)}.ui-dtc__add:hover svg{color: var(--ui-dtc-ink)}.ui-dtc__add--danger, .ui-dtc__add--danger svg, .ui-dtc__add--danger:hover svg{color: var(--ui-dtc-danger)}.ui-dtc__add--danger:hover{background: var(--ui-dtc-danger-wash);color: var(--ui-dtc-danger)}.ui-dtc__summary{min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;font-variant-numeric: tabular-nums;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-dtc-muted)}@keyframes ui-dtc-drop{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}.ui-dtc__morph{overflow: hidden}.ui-dtc__morph[data-smooth]{transition: height 380ms var(--ui-dtc-ease)}@media (max-width: 480px){.ui-dtc__head{padding-left: 14px}.ui-dtc__foot{padding-right: 14px}}@media (hover: none) and (pointer: coarse){.ui-dtc__tool{width: 36px;height: 36px}.ui-dtc__add{height: 36px}.ui-dtc__table td{height: 44px}.ui-dtc__option{height: 40px}.ui-dtc__check{position: relative}.ui-dtc__check::after{content: "";position: absolute;inset: -12px}}@media (prefers-reduced-motion: reduce){.ui-dtc *, .ui-dtc *::before, .ui-dtc *::after{animation: none !important;transition: none !important}}.ui-dtc input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-dtc textarea:focus-visible, .ui-dtc [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-dtc{--ui-dtc-card: #1c1c1e;--ui-dtc-ink: rgba(255, 255, 255, 0.9);--ui-dtc-strong: #ffffff;--ui-dtc-text: rgba(255, 255, 255, 0.62);--ui-dtc-muted: rgba(255, 255, 255, 0.46);--ui-dtc-faint: rgba(255, 255, 255, 0.3);--ui-dtc-icon: rgba(255, 255, 255, 0.5);--ui-dtc-line: rgba(255, 255, 255, 0.08);--ui-dtc-fill: rgba(255, 255, 255, 0.08);--ui-dtc-wash: rgba(255, 255, 255, 0.05);--ui-dtc-row-hover: rgba(255, 255, 255, 0.025);--ui-dtc-accent: #4d8dff;--ui-dtc-selected: rgba(77, 141, 255, 0.14);--ui-dtc-active-blur: rgba(77, 141, 255, 0.5);--ui-dtc-check-ring: rgba(255, 255, 255, 0.28);--ui-dtc-check-ring-hover: rgba(255, 255, 255, 0.45);--ui-dtc-check-on: rgba(255, 255, 255, 0.9);--ui-dtc-check-mark: #1c1c1e;--ui-dtc-underline: rgba(255, 255, 255, 0.22);--ui-dtc-danger: #ff6369;--ui-dtc-danger-wash: rgba(229, 72, 77, 0.14);--ui-dtc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-dtc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 28px -10px rgba(0, 0, 0, 0.6);--ui-dtc-focus: rgba(77, 141, 255, 0.5)}:where(.dark, [data-theme="dark"]) .ui-dtc__check{box-shadow: inset 0 0 0 0.5px var(--ui-dtc-check-ring)}:where(.dark, [data-theme="dark"]) .ui-dtc__check[aria-checked="true"], :where(.dark, [data-theme="dark"]) .ui-dtc__check[aria-checked="mixed"]{box-shadow: none}:where(.dark, [data-theme="dark"]) .ui-dtc__tag[data-tone="blue"]{background: rgba(77, 141, 255, 0.16);color: #8ab4ff}:where(.dark, [data-theme="dark"]) .ui-dtc__tag[data-tone="violet"]{background: rgba(124, 77, 255, 0.18);color: #b49cff}:where(.dark, [data-theme="dark"]) .ui-dtc__tag[data-tone="pink"]{background: rgba(236, 72, 153, 0.16);color: #f48cc4}:where(.dark, [data-theme="dark"]) .ui-dtc__tag[data-tone="green"]{background: rgba(62, 194, 122, 0.15);color: #6fd69b}:where(.dark, [data-theme="dark"]) .ui-dtc__tag[data-tone="amber"]{background: rgba(245, 158, 11, 0.15);color: #f5c04a}:where(.dark, [data-theme="dark"]) .ui-dtc__tag[data-tone="gray"]{background: rgba(255, 255, 255, 0.08);color: var(--ui-dtc-text)}`;
var y = () => (0, r.jsxs)(`svg`, { viewBox: `0 0 38 57`, "aria-hidden": `true`, children: [(0, r.jsx)(`path`, { d: `M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z`, fill: `#1ABCFE` }), (0, r.jsx)(`path`, { d: `M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z`, fill: `#0ACF83` }), (0, r.jsx)(`path`, { d: `M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z`, fill: `#FF7262` }), (0, r.jsx)(`path`, { d: `M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z`, fill: `#F24E1E` }), (0, r.jsx)(`path`, { d: `M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z`, fill: `#A259FF` })] });
var b = () => (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, fill: `#5E6AD2`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z` }) });
var x = () => (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, fill: `#171717`, className: `data-table-demo__mono`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M24 22.525H0l12-21.05 12 21.05z` }) });
var S = () => (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, fill: `#171717`, className: `data-table-demo__mono`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z` }) });
var C = () => (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, fill: `#625DF5`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M24 10.665h-7.018l6.078-3.509-1.335-2.312-6.078 3.509 3.508-6.077L16.843.94l-3.508 6.077V0h-2.67v7.018L7.156.94 4.844 2.275l3.509 6.077-6.078-3.508L.94 7.156l6.078 3.509H0v2.67h7.017L.94 16.844l1.335 2.313 6.077-3.508-3.509 6.077 2.312 1.335 3.509-6.078V24h2.67v-7.017l3.508 6.077 2.312-1.335-3.509-6.078 6.078 3.509 1.335-2.313-6.077-3.508h7.017v-2.67H24zm-12 4.966a3.645 3.645 0 1 1 0-7.29 3.645 3.645 0 0 1 0 7.29z` }) });
var w = () => (0, r.jsxs)(`svg`, { viewBox: `0 0 20 20`, "aria-hidden": `true`, children: [(0, r.jsx)(`rect`, { x: `2`, y: `2`, width: `16`, height: `16`, rx: `4.5`, fill: `#0060e2` }), (0, r.jsx)(`path`, { d: `M6 7.5h8M6 10h8M6 12.5h5`, stroke: `#fff`, strokeWidth: `1.4`, strokeLinecap: `round` })] });
var T = [{ key: `tool`, label: `Tool`, icon: (0, r.jsx)(h, {}), type: `title`, width: `30%` }, { key: `category`, label: `Category`, icon: (0, r.jsx)(g, {}), type: `tag`, width: `26%` }, { key: `website`, label: `Website`, icon: (0, r.jsx)(_, {}), type: `link` }, { key: `renews`, label: `Renews`, icon: (0, r.jsx)(v, {}), type: `text`, width: `18%` }];
var E = [{ id: `figma`, tool: `Figma`, logo: (0, r.jsx)(y, {}), category: `Design`, website: `https://figma.com`, renews: `Mar 12, 2026` }, { id: `linear`, tool: `Linear`, logo: (0, r.jsx)(b, {}), category: `Issue tracking`, website: `https://linear.app`, renews: `Jan 4, 2026` }, { id: `vercel`, tool: `Vercel`, logo: (0, r.jsx)(x, {}), category: `Hosting`, website: `https://vercel.com`, renews: `Aug 21, 2026` }, { id: `framer`, tool: `Framer`, logo: (0, r.jsx)(S, {}), category: `Website`, website: `https://framer.com`, renews: `May 2, 2026` }, { id: `loom`, tool: `Loom`, logo: (0, r.jsx)(C, {}), category: `Video`, website: `https://loom.com`, renews: `Nov 18, 2026` }];
var D = { width: 720, height: 352 };
function O() {
  let e = (0, n3.useRef)(null), [t, i2] = (0, n3.useState)(null);
  return (0, n3.useLayoutEffect)(() => {
    let t2 = e.current?.closest(`.card__preview`);
    if (!t2) return;
    let n4 = () => i2(Math.min((t2.clientWidth - 48) / D.width, (t2.clientHeight - 80) / D.height));
    n4();
    let r2 = new ResizeObserver(n4);
    return r2.observe(t2), () => r2.disconnect();
  }, []), (0, r.jsx)(`div`, { ref: e, className: `data-table-demo`, style: t === null ? void 0 : { "--fit": t }, children: (0, r.jsx)(c, { title: `Design Stack`, icon: (0, r.jsx)(w, {}), columns: T, rows: E, tagTones: { Design: `violet`, "Issue tracking": `blue`, Hosting: `gray`, Website: `pink`, Video: `green` } }) });
}

export {
  O
};
