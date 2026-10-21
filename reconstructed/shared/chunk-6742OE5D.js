import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  Fragment,
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo.clean-OeBBW_7u.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e) => {
  if (typeof e == `string` || typeof e == `number`) {
    return String(e);
  }
  return ``;
};
var a = (e) => String.fromCharCode(65 + e % 26);
var o = () => typeof navigator < `u` && /Mac|iPhone|iPad/.test(navigator.platform);
function s(e, t) {
  let n4 = e.trim();
  if (t.type !== `number`) {
    return n4;
  }
  if (n4 === ``) {
    return ``;
  }
  let r2 = Number(n4.replace(/[^\d.,-]/g, ``).replace(/,/g, ``));
  if (Number.isFinite(r2)) {
    return r2;
  }
  return n4;
}
function C1Component({
  title,
  icon,
  columns: columns2,
  rows: rows2,
  tagTones = {},
  editable = true,
  onRowsChange,
  onSelectionChange,
  className
}) {
  let [v, setV] = n3.useState(rows2);
  let bRef = n3.useRef({
    past: [],
    future: []
  });
  let [x, setX] = n3.useState(/* @__PURE__ */ new Set());
  let [C, setC] = n3.useState(null);
  let [T, setT] = n3.useState(null);
  let [D2, setD] = n3.useState(null);
  let kRef = n3.useRef({
    active: null,
    anchor: null
  });
  let A = (e) => {
    kRef.current.active = e;
    setT(e);
  };
  let j = (e) => {
    kRef.current.anchor = e;
    setD(e);
  };
  let [M, setM] = n3.useState(null);
  let [P, setP] = n3.useState(false);
  let [, setI] = n3.useState(0);
  let LRef = n3.useRef(null);
  let ref = useAe(LRef);
  let RRef = n3.useRef(0);
  let z = n3.useMemo(() => {
    if (!C) {
      return v;
    }
    let e = columns2.find((e2) => e2.key === C.key);
    let t = C.dir === `asc` ? 1 : -1;
    return [...v].sort((n4, r2) => {
      let a2 = n4[C.key];
      let o2 = r2[C.key];
      if (i(a2) === ``) {
        return 1;
      }
      if (i(o2) === ``) {
        return -1;
      }
      if (e?.type === `number`) {
        return (Number(a2) - Number(o2)) * t;
      }
      return i(a2).localeCompare(i(o2), void 0, {
        numeric: true
      }) * t;
    });
  }, [v, C, columns2]);
  let B = (e) => editable && columns2[e]?.editable !== false;
  let V = (e) => {
    bRef.current.past.push(v);
    if (bRef.current.past.length > 100) {
      bRef.current.past.shift();
    }
    bRef.current.future = [];
    setV(e);
    onRowsChange?.(e);
  };
  let H = () => {
    let e = bRef.current.past.pop();
    if (e) {
      bRef.current.future.push(v);
      setV(e);
      onRowsChange?.(e);
    }
  };
  let U = () => {
    let e = bRef.current.future.pop();
    if (e) {
      bRef.current.past.push(v);
      setV(e);
      onRowsChange?.(e);
    }
  };
  let W = n3.useMemo(() => {
    if (!T) {
      return null;
    }
    let e = D2 ?? T;
    return {
      r1: Math.min(e.r, T.r),
      r2: Math.max(e.r, T.r),
      c1: Math.min(e.c, T.c),
      c2: Math.max(e.c, T.c)
    };
  }, [T, D2]);
  let G = (e, t) => !!W && e >= W.r1 && e <= W.r2 && t >= W.c1 && t <= W.c2;
  let K = (e, t) => {
    let n4 = /* @__PURE__ */ new Map();
    t.forEach((t2, r2) => t2.forEach((t3, i2) => {
      let a2 = z[e.r + r2];
      let o2 = e.c + i2;
      let l = columns2[o2];
      if (a2 && l && B(o2)) {
        n4.set(a2.id, {
          ...n4.get(a2.id),
          [l.key]: s(t3, l)
        });
      }
    }));
    if (n4.size) {
      V(v.map((e2) => {
        if (n4.has(e2.id)) {
          return {
            ...e2,
            ...n4.get(e2.id)
          };
        }
        return e2;
      }));
    }
  };
  let q = (e, t = false) => {
    let r_1 = Math.max(0, Math.min(z.length - 1, e.r));
    let c = Math.max(0, Math.min(columns2.length - 1, e.c));
    if (t) {
      if (!kRef.current.anchor) {
        j(kRef.current.active ?? {
          r: r_1,
          c
        });
      }
    } else {
      j(null);
    }
    A({
      r: r_1,
      c
    });
  };
  let J = (e, t) => {
    if (B(e.c) && z[e.r]) {
      setM({
        cell: e,
        value: t ?? i(z[e.r][columns2[e.c].key])
      });
    }
  };
  let Y = (e, t, n4) => {
    if (M && e) {
      let e2 = n4 ?? M.value;
      if (e2 !== i(z[M.cell.r]?.[columns2[M.cell.c].key])) {
        K(M.cell, [[e2]]);
      }
    }
    setM(null);
    if (t) {
      q(t);
    }
    requestAnimationFrame(() => LRef.current?.focus({
      preventScroll: true
    }));
  };
  n3.useEffect(() => {
    if (T) {
      LRef.current?.querySelector(`[data-cell="${T.r}-${T.c}"]`)?.scrollIntoView({
        block: `nearest`,
        inline: `nearest`
      });
    }
  }, [T]);
  n3.useEffect(() => {
    if (!P) {
      return;
    }
    let e = () => setP(false);
    window.addEventListener(`pointerup`, e);
    return () => window.removeEventListener(`pointerup`, e);
  }, [P]);
  let onKeyDown = (e) => {
    if (M) {
      return;
    }
    let t = o() ? e.metaKey : e.ctrlKey;
    if (t && e.key.toLowerCase() === `z`) {
      e.preventDefault();
      if (e.shiftKey) {
        return U();
      }
      return H();
    }
    if (t && e.key.toLowerCase() === `y`) {
      e.preventDefault();
      return U();
    }
    if (t && e.key.toLowerCase() === `a`) {
      e.preventDefault();
      j({
        r: 0,
        c: 0
      });
      A({
        r: z.length - 1,
        c: columns2.length - 1
      });
      return;
    }
    let active = kRef.current.active;
    if (!active) {
      if (e.key.startsWith(`Arrow`) || e.key === `Enter`) {
        e.preventDefault();
        q({
          r: 0,
          c: 0
        });
      }
      return;
    }
    let {
      r: r2,
      c
    } = active;
    let a2 = t;
    let s2 = {
      ArrowUp: {
        r: a2 ? 0 : r2 - 1,
        c
      },
      ArrowDown: {
        r: a2 ? z.length - 1 : r2 + 1,
        c
      },
      ArrowLeft: {
        r: r2,
        c: a2 ? 0 : c - 1
      },
      ArrowRight: {
        r: r2,
        c: a2 ? columns2.length - 1 : c + 1
      },
      Home: {
        r: t ? 0 : r2,
        c: 0
      },
      End: {
        r: t ? z.length - 1 : r2,
        c: columns2.length - 1
      }
    };
    if (s2[e.key]) {
      e.preventDefault();
      return q(s2[e.key], e.shiftKey);
    }
    if (e.key === `Tab`) {
      e.preventDefault();
      return q({
        r: r2,
        c: c + (e.shiftKey ? -1 : 1)
      });
    }
    if (e.key === `Enter` || e.key === `F2`) {
      e.preventDefault();
      return J(active);
    }
    if (e.key === `Escape`) {
      return j(null);
    }
    if ((e.key === `Delete` || e.key === `Backspace`) && W) {
      e.preventDefault();
      let t2 = Array.from({
        length: W.r2 - W.r1 + 1
      }, () => Array.from({
        length: W.c2 - W.c1 + 1
      }, () => ``));
      return K({
        r: W.r1,
        c: W.c1
      }, t2);
    }
    if (e.key.length === 1 && !t && !e.altKey && columns2[c].type !== `tag`) {
      e.preventDefault();
      J(active, e.key);
    }
  };
  let le = () => {
    if (W) {
      return z.slice(W.r1, W.r2 + 1).map((e) => columns2.slice(W.c1, W.c2 + 1).map((t) => i(e[t.key]).replace(/[\t\n]/g, ` `)).join(`	`)).join(`
`);
    }
    return ``;
  };
  let onCopy = (e) => {
    if (!M && W) {
      e.preventDefault();
      e.clipboardData.setData(`text/plain`, le());
    }
  };
  let onCut = (e) => {
    if (M || !W) {
      return;
    }
    onCopy(e);
    let t = Array.from({
      length: W.r2 - W.r1 + 1
    }, () => Array.from({
      length: W.c2 - W.c1 + 1
    }, () => ``));
    K({
      r: W.r1,
      c: W.c1
    }, t);
  };
  let onPaste = (e) => {
    if (M || !T) {
      return;
    }
    e.preventDefault();
    let t = e.clipboardData.getData(`text/plain`).replace(/\r/g, ``).replace(/\n$/, ``);
    if (!t) {
      return;
    }
    let n4 = t.split(`
`).map((e2) => e2.split(`	`));
    if (n4.length === 1 && n4[0].length === 1 && W) {
      let e2 = Array.from({
        length: W.r2 - W.r1 + 1
      }, () => Array.from({
        length: W.c2 - W.c1 + 1
      }, () => n4[0][0]));
      return K({
        r: W.r1,
        c: W.c1
      }, e2);
    }
    K(W ? {
      r: W.r1,
      c: W.c1
    } : T, n4);
  };
  let fe = (key) => setC((t) => {
    if (t?.key === key) {
      if (t.dir === `asc`) {
        return {
          key,
          dir: `desc`
        };
      }
      return null;
    }
    return {
      key,
      dir: `asc`
    };
  });
  let Z = (e) => {
    setX(e);
    onSelectionChange?.(v.filter((t) => e.has(t.id)).map((e2) => e2.id));
  };
  let Q = z.length > 0 && x.size === z.length;
  let mixed = x.size > 0 && !Q;
  let me = () => {
    RRef.current += 1;
    let e = columns2.find((e2) => e2.type === `title`)?.key ?? columns2[0].key;
    let t = {
      id: `new-${RRef.current}`,
      [e]: ``
    };
    V([...v, t]);
    setC(null);
    let n4 = {
      r: v.length,
      c: Math.max(0, columns2.findIndex((t2) => t2.key === e))
    };
    A(n4);
    j(null);
    setM({
      cell: n4,
      value: ``
    });
  };
  let he = () => {
    V(v.filter((e) => !x.has(e.id)));
    Z(/* @__PURE__ */ new Set());
    A(null);
    j(null);
  };
  let ge = (column) => column.options ?? [...new Set(v.map((t) => i(t[column.key])).filter(Boolean))];
  let _e = (() => {
    if (!W || !T) {
      return null;
    }
    if ((W.r2 - W.r1 + 1) * (W.c2 - W.c1 + 1) === 1) {
      return `${a(T.c)}${T.r + 1}`;
    }
    let e = 0;
    let t = 0;
    let n4 = false;
    for (let r2 = W.r1; r2 <= W.r2; r2++) {
      for (let a2 = W.c1; a2 <= W.c2; a2++) {
        let o2 = z[r2]?.[columns2[a2].key];
        if (i(o2) !== ``) {
          e++;
        }
        if (columns2[a2].type === `number` && typeof o2 == `number`) {
          n4 = true;
          t += o2;
        }
      }
    }
    return `${e} ${e === 1 ? `value` : `values`}${n4 ? ` \xB7 Sum ${t.toLocaleString(`en-US`)}` : ``}`;
  })();
  let $ = o() ? `\u2318` : `Ctrl`;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { href: `ui-data-table-clean`, precedence: `default`, children: oe }),
    /* @__PURE__ */ jsxs("section", { className: [`ui-dtc`, className].filter(Boolean).join(` `), "aria-label": title, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-dtc__head`, children: [
        icon && /* @__PURE__ */ jsx("span", { className: `ui-dtc__title-icon`, children: icon }),
        /* @__PURE__ */ jsx("h3", { className: `ui-dtc__title`, children: title }),
        editable && /* @__PURE__ */ jsxs("div", { className: `ui-dtc__tools`, children: [
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-dtc__tool`, "aria-label": `Undo (${$} Z)`, title: `Undo \xB7 ${$} Z`, disabled: !bRef.current.past.length, onClick: () => {
            H();
            setI((e) => e + 1);
          }, children: /* @__PURE__ */ jsx(Ne, {}) }),
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-dtc__tool`, "aria-label": `Redo (${$} Shift Z)`, title: `Redo \xB7 ${$} \u21E7 Z`, disabled: !bRef.current.future.length, onClick: () => {
            U();
            setI((e) => e + 1);
          }, children: /* @__PURE__ */ jsx(Re, {}) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-dtc__body`, children: /* @__PURE__ */ jsx("div", { className: `ui-dtc__morph`, ref, children: /* @__PURE__ */ jsxs("div", { ref: LRef, className: `ui-dtc__scroll`, role: `grid`, "aria-label": title, "aria-rowcount": z.length + 1, "aria-multiselectable": `true`, tabIndex: 0, onKeyDown, onCopy, onCut, onPaste, "data-dragging": P || void 0, children: [
        /* @__PURE__ */ jsxs("table", { className: `ui-dtc__table`, role: `presentation`, children: [
          /* @__PURE__ */ jsxs("colgroup", { children: [
            /* @__PURE__ */ jsx("col", { style: {
              width: 40
            } }),
            columns2.map((e) => /* @__PURE__ */ jsx("col", { style: e.width ? {
              width: e.width
            } : void 0 }, e.key))
          ] }),
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { role: `row`, children: [
            /* @__PURE__ */ jsx("th", { className: `ui-dtc__select`, role: `columnheader`, children: /* @__PURE__ */ jsx(F1Component, { checked: Q, mixed, label: `Select all rows`, onChange: () => Z(Q ? /* @__PURE__ */ new Set() : new Set(z.map((e) => e.id))) }) }),
            columns2.map((e, t) => {
              let n4 = C?.key === e.key ? C.dir : null;
              return /* @__PURE__ */ jsx("th", { role: `columnheader`, "aria-sort": n4 === `asc` ? `ascending` : n4 === `desc` ? `descending` : `none`, "data-type": e.type, "data-col-active": W && t >= W.c1 && t <= W.c2 || void 0, children: /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-dtc__th`, onClick: () => fe(e.key), children: [
                e.icon && /* @__PURE__ */ jsx("span", { className: `ui-dtc__col-icon`, children: e.icon }),
                /* @__PURE__ */ jsx("span", { className: `ui-dtc__th-label`, children: e.label }),
                /* @__PURE__ */ jsx("span", { className: `ui-dtc__sort`, "data-dir": n4 ?? void 0, "aria-hidden": `true`, children: /* @__PURE__ */ jsx(Ie, {}) })
              ] }) }, e.key);
            })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: z.map((row, r_1) => {
            let n4 = x.has(row.id);
            return /* @__PURE__ */ jsxs("tr", { role: `row`, "data-selected": n4 || void 0, children: [
              /* @__PURE__ */ jsx("td", { className: `ui-dtc__select`, role: `gridcell`, children: /* @__PURE__ */ jsx(F1Component, { checked: n4, label: `Select ${i(row[columns2.find((e) => e.type === `title`)?.key ?? columns2[0].key]) || `row`}`, onChange: () => {
                let t = new Set(x);
                if (t.has(row.id)) {
                  t.delete(row.id);
                } else {
                  t.add(row.id);
                }
                Z(t);
              } }) }),
              columns2.map((column, c) => {
                let a2 = T?.r === r_1 && T?.c === c;
                let o2 = M?.cell.r === r_1 && M?.cell.c === c;
                return /* @__PURE__ */ jsx("td", { role: `gridcell`, "data-cell": `${r_1}-${c}`, "data-type": column.type, "data-active": a2 || void 0, "data-in-range": G(r_1, c) && !a2 || void 0, "data-editing": o2 || void 0, "aria-selected": G(r_1, c), "aria-readonly": !B(c) || void 0, onPointerDown: (e) => {
                  if (!(o2 || e.button !== 0 || e.target.closest(`a`))) {
                    e.preventDefault();
                    LRef.current?.focus({
                      preventScroll: true
                    });
                    if (M) {
                      Y(true);
                    }
                    q({
                      r: r_1,
                      c
                    }, e.shiftKey);
                    setP(true);
                  }
                }, onPointerEnter: () => {
                  if (P) {
                    if (!kRef.current.anchor) {
                      j(kRef.current.active);
                    }
                    A({
                      r: r_1,
                      c
                    });
                  }
                }, onDoubleClick: () => J({
                  r: r_1,
                  c
                }), children: o2 && M ? /* @__PURE__ */ jsx(U1Component, { column, value: M.value, options: column.type === `tag` ? ge(column) : void 0, tones: tagTones, onChange: (value) => setM({
                  cell: M.cell,
                  value
                }), onDone: (e, n5, r2) => Y(e, n5 ? {
                  r: r_1 + +(n5 === `down`),
                  c: c + +(n5 === `right`)
                } : void 0, r2) }) : /* @__PURE__ */ jsx(L1Component, { column, row, tone: tagTones }) }, column.key);
              })
            ] }, row.id);
          }) })
        ] }),
        z.length === 0 && /* @__PURE__ */ jsx("p", { className: `ui-dtc__empty`, children: `No rows yet` })
      ] }) }) }),
      /* @__PURE__ */ jsxs("footer", { className: `ui-dtc__foot`, children: [
        x.size > 0 ? /* @__PURE__ */ jsxs("div", { className: `ui-dtc__bulk`, role: `status`, children: [
          /* @__PURE__ */ jsxs("span", { children: [
            x.size,
            ` selected`
          ] }),
          editable && /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-dtc__add ui-dtc__add--danger`, onClick: he, children: [
            /* @__PURE__ */ jsx(Te, {}),
            `Delete`
          ] }),
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-dtc__add`, onClick: () => Z(/* @__PURE__ */ new Set()), children: `Clear` })
        ] }) : editable ? /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-dtc__add`, onClick: me, children: [
          /* @__PURE__ */ jsx(Ee, {}),
          `Add row`
        ] }) : /* @__PURE__ */ jsx("span", {}),
        /* @__PURE__ */ jsx("span", { className: `ui-dtc__summary`, "aria-live": `polite`, children: _e ?? (editable ? `Double-click a cell to edit` : ``) })
      ] })
    ] })
  ] });
}
function L1Component({
  column,
  row,
  tone
}) {
  let a2 = row[column.key];
  if (column.type === `title`) {
    return /* @__PURE__ */ jsxs("span", { className: `ui-dtc__name`, children: [
      row.logo ? /* @__PURE__ */ jsx("span", { className: `ui-dtc__logo`, children: row.logo }) : /* @__PURE__ */ jsx("span", { className: `ui-dtc__logo ui-dtc__logo--empty` }),
      /* @__PURE__ */ jsx("span", { className: `ui-dtc__name-text`, "data-empty": i(a2) === `` || void 0, children: i(a2) || `Untitled` })
    ] });
  }
  if (i(a2) === ``) {
    return null;
  }
  if (column.type === `tag`) {
    return /* @__PURE__ */ jsx("span", { className: `ui-dtc__tag`, "data-tone": tone[i(a2)] ?? `blue`, children: a2 });
  }
  if (column.type === `link`) {
    let href = /^https?:\/\//.test(i(a2)) ? i(a2) : `https://${i(a2)}`;
    return /* @__PURE__ */ jsx("a", { className: `ui-dtc__link`, href, target: `_blank`, rel: `noreferrer`, tabIndex: -1, children: i(a2).replace(/^https?:\/\//, ``) });
  }
  if (column.type === `number` && typeof a2 == `number`) {
    return /* @__PURE__ */ jsx("span", { className: `ui-dtc__text`, children: a2.toLocaleString(`en-US`) });
  }
  return /* @__PURE__ */ jsx("span", { className: `ui-dtc__text`, children: a2 });
}
function U1Component({
  column,
  value,
  options,
  tones = {},
  onChange,
  onDone
}) {
  let cRef = n3.useRef(null);
  n3.useEffect(() => {
    let cRef_current = cRef.current;
    if (!cRef_current) {
      return;
    }
    cRef_current.focus();
    let length = cRef_current.value.length;
    cRef_current.setSelectionRange(length, length);
  }, []);
  if (options) {
    return /* @__PURE__ */ jsx(D1Component, { label: column.label, value, options, tones, onChange, onDone });
  }
  return /* @__PURE__ */ jsx("input", { ref: cRef, className: `ui-dtc__input`, value, inputMode: column.type === `number` ? `decimal` : void 0, "aria-label": column.label, onChange: (e) => onChange(e.target.value), onBlur: () => onDone(true), onKeyDown: (e) => {
    if (e.key === `Enter`) {
      e.preventDefault();
      onDone(true, `down`);
    } else if (e.key === `Tab`) {
      e.preventDefault();
      onDone(true, `right`);
    } else if (e.key === `Escape`) {
      e.preventDefault();
      onDone(false);
    }
  } });
}
function D1Component({
  label,
  value,
  options,
  tones,
  onChange,
  onDone
}) {
  let cRef = n3.useRef(null);
  let lRef = n3.useRef(null);
  let uRef = n3.useRef(null);
  let [d, setD] = n3.useState(null);
  n3.useLayoutEffect(() => {
    let e = () => {
      let e2 = cRef.current?.closest(`td`);
      let lRef_current = lRef.current;
      if (!e2 || !lRef_current) {
        return;
      }
      let n4 = e2.getBoundingClientRect();
      let t_offsetHeight = lRef_current.offsetHeight;
      let i2 = window.innerHeight - n4.top - 4 >= t_offsetHeight + 8 ? n4.top + 4 : Math.max(8, n4.bottom - 4 - t_offsetHeight);
      let a2 = uRef.current?.getBoundingClientRect() ?? {
        left: 0,
        top: 0
      };
      setD({
        left: n4.left + 6 - a2.left,
        top: i2 - a2.top,
        width: Math.max(n4.width - 12, 160)
      });
    };
    e();
    window.addEventListener(`scroll`, e, true);
    window.addEventListener(`resize`, e);
    return () => {
      window.removeEventListener(`scroll`, e, true);
      window.removeEventListener(`resize`, e);
    };
  }, []);
  n3.useEffect(() => {
    let e = (e2) => {
      if (!lRef.current?.contains(e2.target)) {
        onDone(false);
      }
    };
    window.addEventListener(`pointerdown`, e, true);
    return () => window.removeEventListener(`pointerdown`, e, true);
  }, [onDone]);
  return /* @__PURE__ */ jsxs("span", { ref: cRef, className: `ui-dtc__picker-anchor`, children: [
    /* @__PURE__ */ jsx("span", { ref: uRef, className: `ui-dtc__picker-origin`, "aria-hidden": `true` }),
    /* @__PURE__ */ jsx("div", { ref: lRef, className: `ui-dtc__picker`, role: `listbox`, "aria-label": label, style: d ? {
      left: d.left,
      top: d.top,
      minWidth: d.width
    } : {
      visibility: `hidden`
    }, children: options.map((e) => /* @__PURE__ */ jsxs("button", { type: `button`, role: `option`, "aria-selected": e === value, className: `ui-dtc__option`, autoFocus: e === value || !value && e === options[0], onPointerDown: (e2) => e2.stopPropagation(), onClick: () => {
      onChange(e);
      onDone(true, void 0, e);
    }, onKeyDown: (e2) => {
      if (e2.key === `Escape`) {
        onDone(false);
      }
      let t = [...e2.currentTarget.parentElement?.querySelectorAll(`button`) ?? []];
      let n4 = t.indexOf(e2.currentTarget);
      if (e2.key === `ArrowDown`) {
        t[Math.min(t.length - 1, n4 + 1)]?.focus();
      }
      if (e2.key === `ArrowUp`) {
        t[Math.max(0, n4 - 1)]?.focus();
      }
      if (e2.key.startsWith(`Arrow`)) {
        e2.preventDefault();
      }
    }, children: [
      /* @__PURE__ */ jsx("span", { className: `ui-dtc__tag`, "data-tone": tones[e] ?? `blue`, children: e }),
      /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, className: `ui-dtc__option-check`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m4 8.25 2.6 2.6L12 5.25` }) })
    ] }, e)) })
  ] });
}
function F1Component({
  checked,
  mixed,
  label,
  onChange
}) {
  return /* @__PURE__ */ jsx("button", { type: `button`, role: `checkbox`, "aria-checked": mixed ? `mixed` : checked, "aria-label": label, className: `ui-dtc__check`, onPointerDown: (e) => e.stopPropagation(), onClick: onChange, children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: mixed ? /* @__PURE__ */ jsx("path", { d: `M5 8h6` }) : /* @__PURE__ */ jsx("path", { d: `m4.5 8.25 2.25 2.25L11.5 5.75` }) }) });
}
var PComponent = (d, t = 16) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, width: t, height: t, fill: `none`, stroke: `currentColor`, strokeWidth: `1.1`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d }) });
var Ee = () => PComponent(`M8 3.5v9M3.5 8h9`);
var Te = () => PComponent(`M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.6 8.5h5.8l.6-8.5`);
var Ne = () => PComponent(`M5.5 3.5 2.5 6.5l3 3M2.5 6.5h7a3.5 3.5 0 0 1 0 7H7`);
var Re = () => PComponent(`m10.5 3.5 3 3-3 3M13.5 6.5h-7a3.5 3.5 0 0 0 0 7H9`);
var Ie = () => PComponent(`M8 3.5v9M5 9.5l3 3 3-3`, 12);
var m = (e) => PComponent(e, 14);
var H1 = () => m(`M3 4h10M3 7h10M3 10h10M3 13h6`);
var G1 = () => m(`M3 3h4v4H3zM9 3h4v4H9zM3 9h4v4H3zM9 9h4v4H9z`);
var _ = () => m(`M6.5 9.5l3-3M7.25 4.75l1-1a2.5 2.5 0 0 1 3.5 3.5l-1 1M8.75 11.25l-1 1a2.5 2.5 0 0 1-3.5-3.5l1-1`);
var V1 = () => m(`M3 4.5h10v9H3zM3 7.5h10M6 2.5v3M10 2.5v3`);
function useAe(LRef) {
  let tRef = n3.useRef(null);
  n3.useLayoutEffect(() => {
    let tRef_current = tRef.current;
    let e_current = LRef.current;
    if (!tRef_current || !e_current) {
      return;
    }
    let i2 = () => {
      tRef_current.style.height = `${e_current.offsetHeight}px`;
    };
    i2();
    let a2 = new ResizeObserver(i2);
    a2.observe(e_current);
    let o2 = requestAnimationFrame(() => tRef_current.setAttribute(`data-smooth`, ``));
    return () => {
      a2.disconnect();
      cancelAnimationFrame(o2);
    };
  }, [LRef]);
  return tRef;
}
var oe = `.ui-dtc{--ui-dtc-card: #ffffff;--ui-dtc-ink: rgba(0, 0, 0, 0.88);--ui-dtc-strong: #000000;--ui-dtc-text: rgba(0, 0, 0, 0.61);--ui-dtc-muted: rgba(0, 0, 0, 0.45);--ui-dtc-faint: rgba(0, 0, 0, 0.27);--ui-dtc-icon: rgba(0, 0, 0, 0.447);--ui-dtc-line: rgba(0, 0, 0, 0.06);--ui-dtc-fill: rgba(0, 0, 0, 0.06);--ui-dtc-wash: rgba(0, 0, 0, 0.03);--ui-dtc-row-hover: rgba(0, 0, 0, 0.015);--ui-dtc-accent: rgba(0, 96, 226, 0.765);--ui-dtc-selected: rgba(0, 96, 226, 0.05);--ui-dtc-active-blur: rgba(0, 96, 226, 0.35);--ui-dtc-check-ring: rgba(0, 0, 0, 0.22);--ui-dtc-check-ring-hover: rgba(0, 0, 0, 0.4);--ui-dtc-check-on: rgba(0, 0, 0, 0.88);--ui-dtc-check-mark: #fcfcfc;--ui-dtc-underline: rgba(0, 0, 0, 0.16);--ui-dtc-danger: #e5484d;--ui-dtc-danger-wash: rgba(229, 72, 77, 0.08);--ui-dtc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-dtc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-dtc-focus: rgba(0, 96, 226, 0.35);--ui-dtc-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;width: 100%;min-width: 0;overflow: hidden;border-radius: 10px;background: var(--ui-dtc-card);box-shadow: var(--ui-dtc-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-dtc-ink);-webkit-font-smoothing: antialiased}.ui-dtc *, .ui-dtc *::before, .ui-dtc *::after{box-sizing: border-box}:where(.ui-dtc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-dtc) svg{display: block;flex: none}.ui-dtc button:focus-visible, .ui-dtc a:focus-visible{outline: 2px solid var(--ui-dtc-focus);outline-offset: 1px}.ui-dtc__head{display: flex;align-items: center;gap: 8px;min-height: 52px;padding: 12px 12px 12px 16px}.ui-dtc__title{margin: 0;overflow: hidden;font-size: 15px;font-weight: 500;line-height: 24px;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-dtc-strong)}.ui-dtc__title-icon{display: grid;flex: none}.ui-dtc__title-icon svg{width: 18px;height: 18px}.ui-dtc__tools{display: flex;gap: 2px;margin-left: auto}.ui-dtc__tool{display: grid;place-items: center;width: 28px;height: 28px;border-radius: 6px;color: var(--ui-dtc-icon);transition: background-color 140ms ease, color 140ms ease, opacity 140ms ease}.ui-dtc__tool:hover:not(:disabled){background: var(--ui-dtc-wash);color: var(--ui-dtc-ink)}.ui-dtc__tool:disabled{opacity: 0.4;cursor: default}.ui-dtc__scroll{overflow-x: auto;scrollbar-width: thin;outline: none}.ui-dtc__scroll[data-dragging]{cursor: cell;user-select: none}.ui-dtc__table{width: 100%;min-width: 600px;border-collapse: collapse;table-layout: fixed;font-size: 13px;line-height: 20px}.ui-dtc__table th, .ui-dtc__table td{position: relative;height: 40px;padding: 0 12px;border-top: 0.5px solid var(--ui-dtc-line);text-align: left;vertical-align: middle;white-space: nowrap;overflow: hidden;text-overflow: ellipsis}.ui-dtc__table th{height: 36px;padding: 0 6px;font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-dtc-text);transition: color 140ms ease}.ui-dtc__table th[data-col-active]{color: var(--ui-dtc-ink)}.ui-dtc__th{display: flex;align-items: center;gap: 6px;width: 100%;height: 28px;padding: 0 6px;border-radius: 6px;text-align: left;transition: background-color 140ms ease, color 140ms ease}.ui-dtc__th:hover{background: var(--ui-dtc-wash);color: var(--ui-dtc-ink)}.ui-dtc__th:focus-visible{outline-offset: -2px}.ui-dtc__th-label{overflow: hidden;text-overflow: ellipsis;white-space: nowrap}.ui-dtc__col-icon{display: grid;color: var(--ui-dtc-icon)}.ui-dtc__sort{display: grid;margin-left: auto;color: var(--ui-dtc-icon);opacity: 0;transition: opacity 140ms ease, transform 220ms var(--ui-dtc-ease)}.ui-dtc__th:hover .ui-dtc__sort{opacity: 1}.ui-dtc__sort[data-dir]{opacity: 1;color: var(--ui-dtc-accent)}.ui-dtc__sort[data-dir="asc"]{transform: rotate(180deg)}.ui-dtc__table .ui-dtc__select{padding: 0;text-align: center}.ui-dtc__select .ui-dtc__check{margin: 0 auto}.ui-dtc__table tbody tr{transition: background-color 120ms ease}.ui-dtc__table tbody tr:hover{background: var(--ui-dtc-row-hover)}.ui-dtc__table tbody tr[data-selected]{background: var(--ui-dtc-selected)}.ui-dtc__table td[data-cell]{cursor: cell}.ui-dtc__table td[data-in-range]{background: var(--ui-dtc-selected)}.ui-dtc__table td[data-active]::after{content: "";position: absolute;inset: 1px;border-radius: 4px;box-shadow: inset 0 0 0 1.5px var(--ui-dtc-accent);pointer-events: none}.ui-dtc__scroll:not(:focus-within) td[data-active]::after{box-shadow: inset 0 0 0 1px var(--ui-dtc-active-blur)}.ui-dtc__table td[data-editing]{padding: 0;overflow: visible;background: var(--ui-dtc-card)}.ui-dtc__input{width: 100%;height: 100%;padding: 0 12px;border: 0;outline: none;background: transparent;font: inherit;color: var(--ui-dtc-ink);caret-color: var(--ui-dtc-accent)}.ui-dtc__table td[data-type="number"] .ui-dtc__input{font-variant-numeric: tabular-nums}.ui-dtc__picker-anchor{display: block}.ui-dtc__picker-origin{position: fixed;left: 0;top: 0;width: 0;height: 0;pointer-events: none}.ui-dtc__picker{position: fixed;z-index: 50;display: grid;gap: 2px;padding: 4px;border-radius: 10px;background: var(--ui-dtc-card);box-shadow: var(--ui-dtc-shadow-pop);animation: ui-dtc-drop 180ms var(--ui-dtc-ease)}.ui-dtc__option{display: flex;align-items: center;justify-content: space-between;gap: 12px;height: 32px;padding: 0 6px;border-radius: 6px;text-align: left}.ui-dtc__option:hover, .ui-dtc__option:focus-visible{background: var(--ui-dtc-fill);outline: none}.ui-dtc__option-check{width: 16px;height: 16px;fill: none;stroke: var(--ui-dtc-accent);stroke-width: 1.5;stroke-linecap: round;stroke-linejoin: round;opacity: 0}.ui-dtc__option[aria-selected="true"] .ui-dtc__option-check{opacity: 1}.ui-dtc__name{display: flex;align-items: center;gap: 8px;min-width: 0}.ui-dtc__name-text{overflow: hidden;text-overflow: ellipsis;font-weight: 500;color: var(--ui-dtc-ink)}.ui-dtc__name-text[data-empty]{font-weight: 400;color: var(--ui-dtc-faint)}.ui-dtc__logo{display: grid;place-items: center;flex: none;width: 16px;height: 16px}.ui-dtc__logo svg{width: 100%;height: 100%}.ui-dtc__logo--empty{border-radius: 4px;background: var(--ui-dtc-fill)}.ui-dtc__check{display: grid;place-items: center;flex: none;width: 14px;height: 14px;border-radius: 4px;background: var(--ui-dtc-card);box-shadow: inset 0 0 0 0.5px var(--ui-dtc-check-ring), 0 1px 1px 0 rgba(0, 0, 0, 0.04);transition: background-color 140ms ease, box-shadow 140ms ease}.ui-dtc__check:hover{box-shadow: inset 0 0 0 0.5px var(--ui-dtc-check-ring-hover), 0 1px 1px 0 rgba(0, 0, 0, 0.04)}.ui-dtc__check:focus-visible{outline-offset: 2px}.ui-dtc__check svg{width: 12px;height: 12px;fill: none;stroke: var(--ui-dtc-check-mark);stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round;opacity: 0;transform: scale(0.6);transition: opacity 140ms ease, transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-dtc__check[aria-checked="true"], .ui-dtc__check[aria-checked="mixed"]{background: var(--ui-dtc-check-on);box-shadow: none}.ui-dtc__check[aria-checked="true"] svg, .ui-dtc__check[aria-checked="mixed"] svg{opacity: 1;transform: none}.ui-dtc__tag{display: inline-block;max-width: 100%;height: 20px;padding: 0 6px;border-radius: 5px;overflow: hidden;font-size: 12px;font-weight: 500;line-height: 20px;white-space: nowrap;text-overflow: ellipsis;vertical-align: middle}.ui-dtc__tag[data-tone="blue"]{background: rgba(0, 96, 226, 0.08);color: #1f63d6}.ui-dtc__tag[data-tone="violet"]{background: rgba(124, 77, 255, 0.09);color: #6c45e0}.ui-dtc__tag[data-tone="pink"]{background: rgba(219, 39, 119, 0.08);color: #c22a6e}.ui-dtc__tag[data-tone="green"]{background: rgba(26, 154, 82, 0.09);color: #157a43}.ui-dtc__tag[data-tone="amber"]{background: rgba(232, 162, 12, 0.12);color: #9a6200}.ui-dtc__tag[data-tone="gray"]{background: rgba(0, 0, 0, 0.05);color: var(--ui-dtc-text)}.ui-dtc__link{color: var(--ui-dtc-text);text-decoration: underline;text-decoration-color: var(--ui-dtc-underline);text-decoration-thickness: 1px;text-underline-offset: 3px;transition: text-decoration-color 140ms ease, color 140ms ease}.ui-dtc__link:hover{color: var(--ui-dtc-ink);text-decoration-color: currentColor}.ui-dtc__text{color: var(--ui-dtc-text);font-variant-numeric: tabular-nums}.ui-dtc__empty{margin: 0;padding: 24px;border-top: 0.5px solid var(--ui-dtc-line);text-align: center;color: var(--ui-dtc-muted)}.ui-dtc__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 44px;padding: 8px 16px 8px 8px;border-top: 0.5px solid var(--ui-dtc-line)}.ui-dtc__bulk{display: flex;align-items: center;gap: 2px;min-width: 0;padding-left: 8px}.ui-dtc__bulk > span{margin-right: 8px;font-weight: 500;white-space: nowrap;color: var(--ui-dtc-ink)}.ui-dtc__add{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 10px 0 8px;border-radius: 6px;font-weight: 500;white-space: nowrap;color: var(--ui-dtc-text);transition: background-color 140ms ease, color 140ms ease}.ui-dtc__add svg{color: var(--ui-dtc-icon);transition: color 140ms ease}.ui-dtc__add:not(:has(svg)){padding: 0 10px}.ui-dtc__add:hover{background: var(--ui-dtc-wash);color: var(--ui-dtc-ink)}.ui-dtc__add:hover svg{color: var(--ui-dtc-ink)}.ui-dtc__add--danger, .ui-dtc__add--danger svg, .ui-dtc__add--danger:hover svg{color: var(--ui-dtc-danger)}.ui-dtc__add--danger:hover{background: var(--ui-dtc-danger-wash);color: var(--ui-dtc-danger)}.ui-dtc__summary{min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;font-variant-numeric: tabular-nums;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-dtc-muted)}@keyframes ui-dtc-drop{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}.ui-dtc__morph{overflow: hidden}.ui-dtc__morph[data-smooth]{transition: height 380ms var(--ui-dtc-ease)}@media (max-width: 480px){.ui-dtc__head{padding-left: 14px}.ui-dtc__foot{padding-right: 14px}}@media (hover: none) and (pointer: coarse){.ui-dtc__tool{width: 36px;height: 36px}.ui-dtc__add{height: 36px}.ui-dtc__table td{height: 44px}.ui-dtc__option{height: 40px}.ui-dtc__check{position: relative}.ui-dtc__check::after{content: "";position: absolute;inset: -12px}}@media (prefers-reduced-motion: reduce){.ui-dtc *, .ui-dtc *::before, .ui-dtc *::after{animation: none !important;transition: none !important}}.ui-dtc input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-dtc textarea:focus-visible, .ui-dtc [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-dtc{--ui-dtc-card: #1c1c1e;--ui-dtc-ink: rgba(255, 255, 255, 0.9);--ui-dtc-strong: #ffffff;--ui-dtc-text: rgba(255, 255, 255, 0.62);--ui-dtc-muted: rgba(255, 255, 255, 0.46);--ui-dtc-faint: rgba(255, 255, 255, 0.3);--ui-dtc-icon: rgba(255, 255, 255, 0.5);--ui-dtc-line: rgba(255, 255, 255, 0.08);--ui-dtc-fill: rgba(255, 255, 255, 0.08);--ui-dtc-wash: rgba(255, 255, 255, 0.05);--ui-dtc-row-hover: rgba(255, 255, 255, 0.025);--ui-dtc-accent: #4d8dff;--ui-dtc-selected: rgba(77, 141, 255, 0.14);--ui-dtc-active-blur: rgba(77, 141, 255, 0.5);--ui-dtc-check-ring: rgba(255, 255, 255, 0.28);--ui-dtc-check-ring-hover: rgba(255, 255, 255, 0.45);--ui-dtc-check-on: rgba(255, 255, 255, 0.9);--ui-dtc-check-mark: #1c1c1e;--ui-dtc-underline: rgba(255, 255, 255, 0.22);--ui-dtc-danger: #ff6369;--ui-dtc-danger-wash: rgba(229, 72, 77, 0.14);--ui-dtc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-dtc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 28px -10px rgba(0, 0, 0, 0.6);--ui-dtc-focus: rgba(77, 141, 255, 0.5)}:where(.dark, [data-theme="dark"]) .ui-dtc__check{box-shadow: inset 0 0 0 0.5px var(--ui-dtc-check-ring)}:where(.dark, [data-theme="dark"]) .ui-dtc__check[aria-checked="true"], :where(.dark, [data-theme="dark"]) .ui-dtc__check[aria-checked="mixed"]{box-shadow: none}:where(.dark, [data-theme="dark"]) .ui-dtc__tag[data-tone="blue"]{background: rgba(77, 141, 255, 0.16);color: #8ab4ff}:where(.dark, [data-theme="dark"]) .ui-dtc__tag[data-tone="violet"]{background: rgba(124, 77, 255, 0.18);color: #b49cff}:where(.dark, [data-theme="dark"]) .ui-dtc__tag[data-tone="pink"]{background: rgba(236, 72, 153, 0.16);color: #f48cc4}:where(.dark, [data-theme="dark"]) .ui-dtc__tag[data-tone="green"]{background: rgba(62, 194, 122, 0.15);color: #6fd69b}:where(.dark, [data-theme="dark"]) .ui-dtc__tag[data-tone="amber"]{background: rgba(245, 158, 11, 0.15);color: #f5c04a}:where(.dark, [data-theme="dark"]) .ui-dtc__tag[data-tone="gray"]{background: rgba(255, 255, 255, 0.08);color: var(--ui-dtc-text)}`;
var Y1Component = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 38 57`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("path", { d: `M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z`, fill: `#1ABCFE` }),
  /* @__PURE__ */ jsx("path", { d: `M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z`, fill: `#0ACF83` }),
  /* @__PURE__ */ jsx("path", { d: `M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z`, fill: `#FF7262` }),
  /* @__PURE__ */ jsx("path", { d: `M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z`, fill: `#F24E1E` }),
  /* @__PURE__ */ jsx("path", { d: `M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z`, fill: `#A259FF` })
] });
var B1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `#5E6AD2`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z` }) });
var X1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `#171717`, className: `data-table-demo__mono`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M24 22.525H0l12-21.05 12 21.05z` }) });
var SComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `#171717`, className: `data-table-demo__mono`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z` }) });
var CComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `#625DF5`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M24 10.665h-7.018l6.078-3.509-1.335-2.312-6.078 3.509 3.508-6.077L16.843.94l-3.508 6.077V0h-2.67v7.018L7.156.94 4.844 2.275l3.509 6.077-6.078-3.508L.94 7.156l6.078 3.509H0v2.67h7.017L.94 16.844l1.335 2.313 6.077-3.508-3.509 6.077 2.312 1.335 3.509-6.078V24h2.67v-7.017l3.508 6.077 2.312-1.335-3.509-6.078 6.078 3.509 1.335-2.313-6.077-3.508h7.017v-2.67H24zm-12 4.966a3.645 3.645 0 1 1 0-7.29 3.645 3.645 0 0 1 0 7.29z` }) });
var W1Component = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 20 20`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("rect", { x: `2`, y: `2`, width: `16`, height: `16`, rx: `4.5`, fill: `#0060e2` }),
  /* @__PURE__ */ jsx("path", { d: `M6 7.5h8M6 10h8M6 12.5h5`, stroke: `#fff`, strokeWidth: `1.4`, strokeLinecap: `round` })
] });
var columns = [{
  key: `tool`,
  label: `Tool`,
  icon: /* @__PURE__ */ jsx(H1, {}),
  type: `title`,
  width: `30%`
}, {
  key: `category`,
  label: `Category`,
  icon: /* @__PURE__ */ jsx(G1, {}),
  type: `tag`,
  width: `26%`
}, {
  key: `website`,
  label: `Website`,
  icon: /* @__PURE__ */ jsx(_, {}),
  type: `link`
}, {
  key: `renews`,
  label: `Renews`,
  icon: /* @__PURE__ */ jsx(V1, {}),
  type: `text`,
  width: `18%`
}];
var rows = [{
  id: `figma`,
  tool: `Figma`,
  logo: /* @__PURE__ */ jsx(Y1Component, {}),
  category: `Design`,
  website: `https://figma.com`,
  renews: `Mar 12, 2026`
}, {
  id: `linear`,
  tool: `Linear`,
  logo: /* @__PURE__ */ jsx(B1Component, {}),
  category: `Issue tracking`,
  website: `https://linear.app`,
  renews: `Jan 4, 2026`
}, {
  id: `vercel`,
  tool: `Vercel`,
  logo: /* @__PURE__ */ jsx(X1Component, {}),
  category: `Hosting`,
  website: `https://vercel.com`,
  renews: `Aug 21, 2026`
}, {
  id: `framer`,
  tool: `Framer`,
  logo: /* @__PURE__ */ jsx(SComponent, {}),
  category: `Website`,
  website: `https://framer.com`,
  renews: `May 2, 2026`
}, {
  id: `loom`,
  tool: `Loom`,
  logo: /* @__PURE__ */ jsx(CComponent, {}),
  category: `Video`,
  website: `https://loom.com`,
  renews: `Nov 18, 2026`
}];
var D = {
  width: 720,
  height: 352
};
function OComponent() {
  let eRef = n3.useRef(null);
  let [t, setT] = n3.useState(null);
  n3.useLayoutEffect(() => {
    let t2 = eRef.current?.closest(`.card__preview`);
    if (!t2) {
      return;
    }
    let n4 = () => setT(Math.min((t2.clientWidth - 48) / D.width, (t2.clientHeight - 80) / D.height));
    n4();
    let r2 = new ResizeObserver(n4);
    r2.observe(t2);
    return () => r2.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("div", { ref: eRef, className: `data-table-demo`, style: t === null ? void 0 : {
    "--fit": t
  }, children: /* @__PURE__ */ jsx(C1Component, { title: `Design Stack`, icon: /* @__PURE__ */ jsx(W1Component, {}), columns, rows, tagTones: {
    Design: `violet`,
    "Issue tracking": `blue`,
    Hosting: `gray`,
    Website: `pink`,
    Video: `green`
  } }) });
}

export {
  OComponent
};
