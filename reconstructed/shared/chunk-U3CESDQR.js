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

// reconstructed/component-BpWpTuwn.jsx
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
function CComponent({
  title,
  icon,
  columns,
  rows,
  tagTones = {},
  editable = true,
  onRowsChange,
  onSelectionChange,
  className
}) {
  let [x, setX] = n3.useState(rows);
  let CRef = n3.useRef({
    past: [],
    future: []
  });
  let [w, setW] = n3.useState(/* @__PURE__ */ new Set());
  let [T, setT] = n3.useState(null);
  let [D, setD] = n3.useState(null);
  let [O, setO] = n3.useState(null);
  let kRef = n3.useRef({
    active: null,
    anchor: null
  });
  let A = (e) => {
    kRef.current.active = e;
    setD(e);
  };
  let j = (e) => {
    kRef.current.anchor = e;
    setO(e);
  };
  let [M, setM] = n3.useState(null);
  let [P, setP] = n3.useState(false);
  let [, setI] = n3.useState(0);
  let LRef = n3.useRef(null);
  let ref = useB(LRef);
  let RRef = n3.useRef(0);
  let z = n3.useMemo(() => {
    if (!T) {
      return x;
    }
    let e = columns.find((e2) => e2.key === T.key);
    let t = T.dir === `asc` ? 1 : -1;
    return [...x].sort((n4, r2) => {
      let a2 = n4[T.key];
      let o2 = r2[T.key];
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
  }, [x, T, columns]);
  let B = (e) => editable && columns[e]?.editable !== false;
  let V = (e) => {
    CRef.current.past.push(x);
    if (CRef.current.past.length > 100) {
      CRef.current.past.shift();
    }
    CRef.current.future = [];
    setX(e);
    onRowsChange?.(e);
  };
  let H = () => {
    let e = CRef.current.past.pop();
    if (e) {
      CRef.current.future.push(x);
      setX(e);
      onRowsChange?.(e);
    }
  };
  let U = () => {
    let e = CRef.current.future.pop();
    if (e) {
      CRef.current.past.push(x);
      setX(e);
      onRowsChange?.(e);
    }
  };
  let W = n3.useMemo(() => {
    if (!D) {
      return null;
    }
    let e = O ?? D;
    return {
      r1: Math.min(e.r, D.r),
      r2: Math.max(e.r, D.r),
      c1: Math.min(e.c, D.c),
      c2: Math.max(e.c, D.c)
    };
  }, [D, O]);
  let G = (e, t) => !!W && e >= W.r1 && e <= W.r2 && t >= W.c1 && t <= W.c2;
  let K = (e, t) => {
    let n4 = /* @__PURE__ */ new Map();
    t.forEach((t2, r2) => t2.forEach((t3, i2) => {
      let a2 = z[e.r + r2];
      let o2 = e.c + i2;
      let l = columns[o2];
      if (a2 && l && B(o2)) {
        n4.set(a2.id, {
          ...n4.get(a2.id),
          [l.key]: s(t3, l)
        });
      }
    }));
    if (n4.size) {
      V(x.map((e2) => {
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
    let c = Math.max(0, Math.min(columns.length - 1, e.c));
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
        value: t ?? i(z[e.r][columns[e.c].key])
      });
    }
  };
  let Y = (e, t, n4) => {
    if (M && e) {
      let e2 = n4 ?? M.value;
      if (e2 !== i(z[M.cell.r]?.[columns[M.cell.c].key])) {
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
    if (D) {
      LRef.current?.querySelector(`[data-cell="${D.r}-${D.c}"]`)?.scrollIntoView({
        block: `nearest`,
        inline: `nearest`
      });
    }
  }, [D]);
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
        c: columns.length - 1
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
        c: a2 ? columns.length - 1 : c + 1
      },
      Home: {
        r: t ? 0 : r2,
        c: 0
      },
      End: {
        r: t ? z.length - 1 : r2,
        c: columns.length - 1
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
    if (e.key.length === 1 && !t && !e.altKey && columns[c].type !== `tag`) {
      e.preventDefault();
      J(active, e.key);
    }
  };
  let le = () => {
    if (W) {
      return z.slice(W.r1, W.r2 + 1).map((e) => columns.slice(W.c1, W.c2 + 1).map((t) => i(e[t.key]).replace(/[\t\n]/g, ` `)).join(`	`)).join(`
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
    if (M || !D) {
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
    } : D, n4);
  };
  let fe = (key) => setT((t) => {
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
    setW(e);
    onSelectionChange?.(x.filter((t) => e.has(t.id)).map((e2) => e2.id));
  };
  let Q = z.length > 0 && w.size === z.length;
  let mixed = w.size > 0 && !Q;
  let me = () => {
    RRef.current += 1;
    let e = columns.find((e2) => e2.type === `title`)?.key ?? columns[0].key;
    let t = {
      id: `new-${RRef.current}`,
      [e]: ``
    };
    V([...x, t]);
    setT(null);
    let n4 = {
      r: x.length,
      c: Math.max(0, columns.findIndex((t2) => t2.key === e))
    };
    A(n4);
    j(null);
    setM({
      cell: n4,
      value: ``
    });
  };
  let he = () => {
    V(x.filter((e) => !w.has(e.id)));
    Z(/* @__PURE__ */ new Set());
    A(null);
    j(null);
  };
  let ge = (column) => column.options ?? [...new Set(x.map((t) => i(t[column.key])).filter(Boolean))];
  let _e = (() => {
    if (!W || !D) {
      return null;
    }
    if ((W.r2 - W.r1 + 1) * (W.c2 - W.c1 + 1) === 1) {
      return `${a(D.c)}${D.r + 1}`;
    }
    let e = 0;
    let t = 0;
    let n4 = false;
    for (let r2 = W.r1; r2 <= W.r2; r2++) {
      for (let a2 = W.c1; a2 <= W.c2; a2++) {
        let o2 = z[r2]?.[columns[a2].key];
        if (i(o2) !== ``) {
          e++;
        }
        if (columns[a2].type === `number` && typeof o2 == `number`) {
          n4 = true;
          t += o2;
        }
      }
    }
    return `${e} ${e === 1 ? `value` : `values`}${n4 ? ` \xB7 Sum ${t.toLocaleString(`en-US`)}` : ``}`;
  })();
  let $ = o() ? `\u2318` : `Ctrl`;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { href: `ui-data-table`, precedence: `default`, children: re }),
    /* @__PURE__ */ jsxs("section", { className: [`ui-dt`, className].filter(Boolean).join(` `), "aria-label": title, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-dt__head`, children: [
        icon && /* @__PURE__ */ jsx("span", { className: `ui-dt__title-icon`, children: icon }),
        /* @__PURE__ */ jsx("h3", { className: `ui-dt__title`, children: title }),
        editable && /* @__PURE__ */ jsxs("div", { className: `ui-dt__tools`, children: [
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-dt__tool`, "aria-label": `Undo (${$} Z)`, title: `Undo \xB7 ${$} Z`, disabled: !CRef.current.past.length, onClick: () => {
            H();
            setI((e) => e + 1);
          }, children: /* @__PURE__ */ jsx(TeComponent, {}) }),
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-dt__tool`, "aria-label": `Redo (${$} Shift Z)`, title: `Redo \xB7 ${$} \u21E7 Z`, disabled: !CRef.current.future.length, onClick: () => {
            U();
            setI((e) => e + 1);
          }, children: /* @__PURE__ */ jsx(M1Component, {}) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-dt__card`, children: /* @__PURE__ */ jsx("div", { className: `ui-dt__morph`, ref, children: /* @__PURE__ */ jsxs("div", { ref: LRef, className: `ui-dt__scroll`, role: `grid`, "aria-label": title, "aria-rowcount": z.length + 1, "aria-multiselectable": `true`, tabIndex: 0, onKeyDown, onCopy, onCut, onPaste, "data-dragging": P || void 0, children: [
        /* @__PURE__ */ jsxs("table", { className: `ui-dt__table`, role: `presentation`, children: [
          /* @__PURE__ */ jsxs("colgroup", { children: [
            /* @__PURE__ */ jsx("col", { style: {
              width: 44
            } }),
            columns.map((e) => /* @__PURE__ */ jsx("col", { style: e.width ? {
              width: e.width
            } : void 0 }, e.key))
          ] }),
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { role: `row`, children: [
            /* @__PURE__ */ jsx("th", { className: `ui-dt__select`, role: `columnheader`, children: /* @__PURE__ */ jsx(F1Component, { checked: Q, mixed, label: `Select all rows`, onChange: () => Z(Q ? /* @__PURE__ */ new Set() : new Set(z.map((e) => e.id))) }) }),
            columns.map((e, t) => {
              let n4 = T?.key === e.key ? T.dir : null;
              return /* @__PURE__ */ jsx("th", { role: `columnheader`, "aria-sort": n4 === `asc` ? `ascending` : n4 === `desc` ? `descending` : `none`, "data-type": e.type, "data-col-active": W && t >= W.c1 && t <= W.c2 || void 0, children: /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-dt__th`, onClick: () => fe(e.key), children: [
                e.icon && /* @__PURE__ */ jsx("span", { className: `ui-dt__col-icon`, children: e.icon }),
                /* @__PURE__ */ jsx("span", { className: `ui-dt__th-label`, children: e.label }),
                /* @__PURE__ */ jsx("span", { className: `ui-dt__sort`, "data-dir": n4 ?? void 0, "aria-hidden": `true`, children: /* @__PURE__ */ jsx(NeComponent, {}) })
              ] }) }, e.key);
            })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: z.map((row, r_1) => {
            let n4 = w.has(row.id);
            return /* @__PURE__ */ jsxs("tr", { role: `row`, "data-selected": n4 || void 0, children: [
              /* @__PURE__ */ jsx("td", { className: `ui-dt__select`, role: `gridcell`, children: /* @__PURE__ */ jsx(F1Component, { checked: n4, label: `Select ${i(row[columns.find((e) => e.type === `title`)?.key ?? columns[0].key]) || `row`}`, onChange: () => {
                let t = new Set(w);
                if (t.has(row.id)) {
                  t.delete(row.id);
                } else {
                  t.add(row.id);
                }
                Z(t);
              } }) }),
              columns.map((column, c) => {
                let a2 = D?.r === r_1 && D?.c === c;
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
                }), children: o2 && M ? /* @__PURE__ */ jsx(U1Component, { column, value: M.value, options: column.type === `tag` ? ge(column) : void 0, onChange: (value) => setM({
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
        z.length === 0 && /* @__PURE__ */ jsx("p", { className: `ui-dt__empty`, children: `No rows yet` })
      ] }) }) }),
      /* @__PURE__ */ jsxs("footer", { className: `ui-dt__foot`, children: [
        w.size > 0 ? /* @__PURE__ */ jsxs("div", { className: `ui-dt__bulk`, role: `status`, children: [
          /* @__PURE__ */ jsxs("span", { children: [
            w.size,
            ` selected`
          ] }),
          editable && /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-dt__add ui-dt__add--danger`, onClick: he, children: [
            /* @__PURE__ */ jsx(P1Component, {}),
            `Delete`
          ] }),
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-dt__add`, onClick: () => Z(/* @__PURE__ */ new Set()), children: `Clear` })
        ] }) : editable ? /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-dt__add`, onClick: me, children: [
          /* @__PURE__ */ jsx(EeComponent, {}),
          `Add row`
        ] }) : /* @__PURE__ */ jsx("span", {}),
        /* @__PURE__ */ jsx("span", { className: `ui-dt__summary`, "aria-live": `polite`, children: _e ?? (editable ? `Double-click a cell to edit` : ``) })
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
    return /* @__PURE__ */ jsxs("span", { className: `ui-dt__name`, children: [
      row.logo ? /* @__PURE__ */ jsx("span", { className: `ui-dt__logo`, children: row.logo }) : /* @__PURE__ */ jsx("span", { className: `ui-dt__logo ui-dt__logo--empty` }),
      /* @__PURE__ */ jsx("span", { className: `ui-dt__name-text`, "data-empty": i(a2) === `` || void 0, children: i(a2) || `Untitled` })
    ] });
  }
  if (i(a2) === ``) {
    return null;
  }
  if (column.type === `tag`) {
    return /* @__PURE__ */ jsx("span", { className: `ui-dt__tag`, "data-tone": tone[i(a2)] ?? `blue`, children: a2 });
  }
  if (column.type === `link`) {
    let href = /^https?:\/\//.test(i(a2)) ? i(a2) : `https://${i(a2)}`;
    return /* @__PURE__ */ jsx("a", { className: `ui-dt__link`, href, target: `_blank`, rel: `noreferrer`, tabIndex: -1, children: i(a2).replace(/^https?:\/\//, ``) });
  }
  if (column.type === `number` && typeof a2 == `number`) {
    return /* @__PURE__ */ jsx("span", { className: `ui-dt__text`, children: a2.toLocaleString(`en-US`) });
  }
  return /* @__PURE__ */ jsx("span", { className: `ui-dt__text`, children: a2 });
}
function U1Component({
  column,
  value,
  options,
  onChange,
  onDone
}) {
  let sRef = n3.useRef(null);
  n3.useEffect(() => {
    let sRef_current = sRef.current;
    if (!sRef_current) {
      return;
    }
    sRef_current.focus();
    let length = sRef_current.value.length;
    sRef_current.setSelectionRange(length, length);
  }, []);
  if (options) {
    return /* @__PURE__ */ jsx(D1Component, { label: column.label, value, options, onChange, onDone });
  }
  return /* @__PURE__ */ jsx("input", { ref: sRef, className: `ui-dt__input`, value, inputMode: column.type === `number` ? `decimal` : void 0, "aria-label": column.label, onChange: (e) => onChange(e.target.value), onBlur: () => onDone(true), onKeyDown: (e) => {
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
  onChange,
  onDone
}) {
  let sRef = n3.useRef(null);
  let cRef = n3.useRef(null);
  let [l, setL] = n3.useState(null);
  n3.useLayoutEffect(() => {
    let e = () => {
      let e2 = sRef.current?.closest(`td`);
      let cRef_current = cRef.current;
      if (!e2 || !cRef_current) {
        return;
      }
      let n4 = e2.getBoundingClientRect();
      let t_offsetHeight = cRef_current.offsetHeight;
      let top = window.innerHeight - n4.top - 4 >= t_offsetHeight + 8 ? n4.top + 4 : Math.max(8, n4.bottom - 4 - t_offsetHeight);
      setL({
        left: n4.left + 6,
        top,
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
      if (!cRef.current?.contains(e2.target)) {
        onDone(false);
      }
    };
    window.addEventListener(`pointerdown`, e, true);
    return () => window.removeEventListener(`pointerdown`, e, true);
  }, [onDone]);
  return /* @__PURE__ */ jsx("span", { ref: sRef, className: `ui-dt__picker-anchor`, children: /* @__PURE__ */ jsx("div", { ref: cRef, className: `ui-dt__picker`, role: `listbox`, "aria-label": label, style: l ? {
    left: l.left,
    top: l.top,
    minWidth: l.width
  } : {
    visibility: `hidden`
  }, children: options.map((e) => /* @__PURE__ */ jsx("button", { type: `button`, role: `option`, "aria-selected": e === value, className: `ui-dt__option`, autoFocus: e === value || !value && e === options[0], onPointerDown: (e2) => e2.stopPropagation(), onClick: () => {
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
  }, children: e }, e)) }) });
}
function F1Component({
  checked,
  mixed,
  label,
  onChange
}) {
  return /* @__PURE__ */ jsx("button", { type: `button`, role: `checkbox`, "aria-checked": mixed ? `mixed` : checked, "aria-label": label, className: `ui-dt__check`, onPointerDown: (e) => e.stopPropagation(), onClick: onChange, children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: mixed ? /* @__PURE__ */ jsx("path", { d: `M4.5 8h7` }) : /* @__PURE__ */ jsx("path", { d: `m4.25 8.25 2.5 2.5 5-5.5` }) }) });
}
var EeComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, width: `14`, height: `14`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M8 3v10M3 8h10` }) });
var P1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, width: `14`, height: `14`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.4`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.6 8.5h5.8l.6-8.5` }) });
var TeComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, width: `15`, height: `15`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.4`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M5.5 3.5 2.5 6.5l3 3M2.5 6.5h7a4 4 0 0 1 0 8H7` }) });
var M1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, width: `15`, height: `15`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.4`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m10.5 3.5 3 3-3 3M13.5 6.5h-7a4 4 0 0 0 0 8H9` }) });
var NeComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 12 12`, width: `11`, height: `11`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.4`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M6 2.5v7M3.5 7l2.5 2.5L8.5 7` }) });
var HComponent = (d) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, width: `15`, height: `15`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.3`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d }) });
var g = () => HComponent(`M3 4h10M3 7h10M3 10h10M3 13h6`);
var _ = () => HComponent(`M3 3h4v4H3zM9 3h4v4H9zM3 9h4v4H3zM9 9h4v4H9z`);
var v = () => HComponent(`M6.5 9.5l3-3M7.25 4.75l1-1a2.5 2.5 0 0 1 3.5 3.5l-1 1M8.75 11.25l-1 1a2.5 2.5 0 0 1-3.5-3.5l1-1`);
var y = () => HComponent(`M3 4.5h10v9H3zM3 7.5h10M6 2.5v3M10 2.5v3`);
function useB(LRef) {
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
var re = `.ui-dt{--ui-dt-card: #ffffff;--ui-dt-line: #ececec;--ui-dt-grid: #f0f0f0;--ui-dt-ink: #171717;--ui-dt-text: #404040;--ui-dt-muted: #8f8f8f;--ui-dt-faint: #b5b5b5;--ui-dt-hover: #fafafa;--ui-dt-selected: #f5f8ff;--ui-dt-accent: #2f6bff;--ui-dt-range: rgba(47, 107, 255, 0.07);--ui-dt-tray: #f0f0f0;--ui-dt-accent-ink: #2f6bff;--ui-dt-border: #e5e5e5;--ui-dt-col-active: #fafbff;--ui-dt-th-hover: #f6f6f6;--ui-dt-active-blur: #a9c1ff;--ui-dt-edit: #fff;--ui-dt-pop: #fff;--ui-dt-pop-ring: #e5e5e5;--ui-dt-option-hover: #f5f5f5;--ui-dt-check-bg: #fff;--ui-dt-check-border: #d4d4d4;--ui-dt-check-border-hover: #a3a3a3;--ui-dt-check-mark: #fff;--ui-dt-underline: #d4d4d4;--ui-dt-wash: rgba(0, 0, 0, 0.05);--ui-dt-wash-soft: rgba(0, 0, 0, 0.04);--ui-dt-danger: #e5484d;--ui-dt-danger-hover: #d13438;--ui-dt-danger-wash: rgba(229, 72, 77, 0.08);--ui-dt-card-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);--ui-dt-pop-shadow: 0 10px 28px -8px rgba(0, 0, 0, 0.18);box-sizing: border-box;width: 100%;min-width: 0;background: var(--ui-dt-tray);padding: 6px;border-radius: 22px;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-dt-ink);-webkit-font-smoothing: antialiased}.ui-dt *, .ui-dt *::before, .ui-dt *::after{box-sizing: border-box}.ui-dt button{margin: 0;font: inherit;color: inherit;cursor: pointer}.ui-dt__head{display: flex;align-items: center;gap: 10px;padding: 9px 10px 8px 18px;min-height: 46px}.ui-dt__title{margin: 0;font-size: 15px;font-weight: 500;line-height: 22px;letter-spacing: -0.01em}.ui-dt__title-icon{display: grid}.ui-dt__title-icon svg{width: 18px;height: 18px}.ui-dt__tools{display: flex;gap: 2px;margin-left: auto}.ui-dt__tool{display: grid;place-items: center;width: 28px;height: 28px;padding: 0;border: 0;border-radius: 8px;background: transparent;color: var(--ui-dt-text) !important;transition: background-color 140ms ease, opacity 140ms ease}.ui-dt__tool:hover:not(:disabled){background: var(--ui-dt-wash)}.ui-dt__tool:disabled{opacity: 0.35;cursor: default}.ui-dt__tool:focus-visible{outline: 2px solid var(--ui-dt-accent);outline-offset: 1px}.ui-dt__card{overflow: hidden;background: var(--ui-dt-card);border: 1px solid var(--ui-dt-border);border-radius: 16px;box-shadow: var(--ui-dt-card-shadow)}.ui-dt__scroll{overflow-x: auto;scrollbar-width: thin;outline: none}.ui-dt__scroll[data-dragging]{cursor: cell;user-select: none}.ui-dt__table{width: 100%;min-width: 640px;border-collapse: collapse;table-layout: fixed;font-size: 14px;line-height: 20px}.ui-dt__table th, .ui-dt__table td{position: relative;height: 44px;padding: 0 14px;border-top: 1px solid var(--ui-dt-grid);border-left: 1px solid var(--ui-dt-grid);text-align: left;vertical-align: middle;white-space: nowrap;overflow: hidden;text-overflow: ellipsis}.ui-dt__table th:first-child, .ui-dt__table td:first-child{border-left: 0}.ui-dt__table th{padding: 0 6px;font-weight: 450;color: var(--ui-dt-muted);border-top: 0;transition: background-color 140ms ease}.ui-dt__table th[data-col-active]{background: var(--ui-dt-col-active)}.ui-dt__th{display: flex;align-items: center;gap: 8px;width: 100%;height: 32px;padding: 0 8px;border: 0;border-radius: 8px;background: transparent;color: inherit !important;text-align: left;transition: background-color 140ms ease, color 140ms ease}.ui-dt__th:hover{background: var(--ui-dt-th-hover);color: var(--ui-dt-text) !important}.ui-dt__th:focus-visible{outline: 2px solid var(--ui-dt-accent);outline-offset: -2px}.ui-dt__th-label{overflow: hidden;text-overflow: ellipsis}.ui-dt__col-icon{display: grid;color: var(--ui-dt-faint)}.ui-dt__sort{display: grid;margin-left: auto;color: var(--ui-dt-faint);opacity: 0;transition: opacity 140ms ease, transform 220ms cubic-bezier(0.22, 1, 0.36, 1)}.ui-dt__th:hover .ui-dt__sort{opacity: 1}.ui-dt__sort[data-dir]{opacity: 1;color: var(--ui-dt-accent-ink)}.ui-dt__sort[data-dir="asc"]{transform: rotate(180deg)}.ui-dt__table .ui-dt__select{padding: 0;text-align: center}.ui-dt__select .ui-dt__check{margin: 0 auto}.ui-dt__table tbody tr{transition: background-color 140ms ease}.ui-dt__table tbody tr:hover{background: var(--ui-dt-hover)}.ui-dt__table tbody tr[data-selected]{background: var(--ui-dt-selected)}.ui-dt__table td[data-cell]{cursor: cell}.ui-dt__table td[data-in-range]{background: var(--ui-dt-range)}.ui-dt__table td[data-active]::after{content: "";position: absolute;inset: 0;border: 2px solid var(--ui-dt-accent);border-radius: 3px;pointer-events: none}.ui-dt__scroll:not(:focus-within) td[data-active]::after{border-color: var(--ui-dt-active-blur)}.ui-dt__table td[data-editing]{padding: 0;overflow: visible;background: var(--ui-dt-edit)}.ui-dt__input{width: 100%;height: 100%;padding: 0 14px;border: 0;outline: none;background: transparent;font: inherit;color: var(--ui-dt-ink)}.ui-dt__table td[data-type="number"] .ui-dt__input{font-variant-numeric: tabular-nums}.ui-dt__picker-anchor{display: block}.ui-dt__picker{position: fixed;z-index: 50;display: grid;gap: 2px;padding: 4px;border-radius: 12px;background: var(--ui-dt-pop);box-shadow: 0 0 0 1px var(--ui-dt-pop-ring), var(--ui-dt-pop-shadow);animation: ui-dt-drop 180ms cubic-bezier(0.22, 1, 0.36, 1)}.ui-dt__option{height: 30px;padding: 0 10px;border: 0;border-radius: 8px;background: transparent;font-size: 13px !important;text-align: left;color: var(--ui-dt-text) !important}.ui-dt__option:hover, .ui-dt__option:focus-visible{background: var(--ui-dt-option-hover);outline: none}.ui-dt__option[aria-selected="true"]{color: var(--ui-dt-accent-ink) !important;font-weight: 500}.ui-dt__name{display: flex;align-items: center;gap: 10px;min-width: 0}.ui-dt__name-text{overflow: hidden;text-overflow: ellipsis;color: var(--ui-dt-ink)}.ui-dt__name-text[data-empty]{color: var(--ui-dt-faint)}.ui-dt__logo{display: grid;place-items: center;flex: none;width: 18px;height: 18px}.ui-dt__logo svg{width: 100%;height: 100%}.ui-dt__logo--empty{border-radius: 5px;background: var(--ui-dt-grid)}.ui-dt__check{display: grid;place-items: center;flex: none;width: 16px;height: 16px;padding: 0;border: 1px solid var(--ui-dt-check-border);border-radius: 5px;background: var(--ui-dt-check-bg);transition: background-color 140ms ease, border-color 140ms ease}.ui-dt__check:hover{border-color: var(--ui-dt-check-border-hover)}.ui-dt__check:focus-visible{outline: 2px solid var(--ui-dt-accent);outline-offset: 2px}.ui-dt__check svg{width: 12px;height: 12px;fill: none;stroke: var(--ui-dt-check-mark);stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round;opacity: 0;transform: scale(0.6);transition: opacity 140ms ease, transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-dt__check[aria-checked="true"], .ui-dt__check[aria-checked="mixed"]{background: var(--ui-dt-ink);border-color: var(--ui-dt-ink)}.ui-dt__check[aria-checked="true"] svg, .ui-dt__check[aria-checked="mixed"] svg{opacity: 1;transform: none}.ui-dt__tag{display: inline-block;max-width: 100%;padding: 2px 9px;border-radius: 7px;font-size: 13px;font-weight: 450;line-height: 20px;overflow: hidden;text-overflow: ellipsis;vertical-align: middle}.ui-dt__tag[data-tone="blue"]{background: #eef3ff;color: #2f6bff;box-shadow: inset 0 0 0 1px #dce6ff}.ui-dt__tag[data-tone="violet"]{background: #f4f0ff;color: #7c4dff;box-shadow: inset 0 0 0 1px #e7dfff}.ui-dt__tag[data-tone="pink"]{background: #fff0f6;color: #db2777;box-shadow: inset 0 0 0 1px #fde0ec}.ui-dt__tag[data-tone="green"]{background: #edfaf3;color: #15803d;box-shadow: inset 0 0 0 1px #d5f2e2}.ui-dt__tag[data-tone="amber"]{background: #fff6e8;color: #b45309;box-shadow: inset 0 0 0 1px #fde9c8}.ui-dt__tag[data-tone="gray"]{background: #f5f5f5;color: #525252;box-shadow: inset 0 0 0 1px #ebebeb}.ui-dt__link{color: var(--ui-dt-text);text-decoration: underline;text-decoration-color: var(--ui-dt-underline);text-underline-offset: 3px;transition: text-decoration-color 140ms ease, color 140ms ease}.ui-dt__link:hover{color: var(--ui-dt-ink);text-decoration-color: currentColor}.ui-dt__text{color: var(--ui-dt-text);font-variant-numeric: tabular-nums}.ui-dt__empty{margin: 0;padding: 24px;font-size: 14px;text-align: center;color: var(--ui-dt-muted)}.ui-dt__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 44px;padding: 6px 16px 7px 8px}.ui-dt__bulk{display: flex;align-items: center;gap: 4px;padding-left: 10px;font-size: 14px;font-weight: 500}.ui-dt__bulk > span{margin-right: 6px}.ui-dt__add{display: inline-flex;align-items: center;gap: 8px;height: 30px;padding: 0 10px;border: 0;border-radius: 8px;background: none;font-size: 14px;color: var(--ui-dt-muted) !important;transition: background-color 140ms ease, color 140ms ease}.ui-dt__add:hover{background: var(--ui-dt-wash-soft);color: var(--ui-dt-ink) !important}.ui-dt__add--danger{color: var(--ui-dt-danger) !important}.ui-dt__add--danger:hover{background: var(--ui-dt-danger-wash);color: var(--ui-dt-danger-hover) !important}.ui-dt__add:focus-visible{outline: 2px solid var(--ui-dt-accent);outline-offset: 2px}.ui-dt__summary{overflow: hidden;font-size: 13px;font-variant-numeric: tabular-nums;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-dt-muted)}@keyframes ui-dt-drop{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}@media (prefers-reduced-motion: reduce){.ui-dt__table tbody tr, .ui-dt__check, .ui-dt__check svg, .ui-dt__sort{transition: none}.ui-dt__picker{animation: none}}.ui-dt__morph{overflow: hidden}.ui-dt__morph[data-smooth]{transition: height 380ms cubic-bezier(0.22, 1, 0.36, 1)}@media (prefers-reduced-motion: reduce){.ui-dt__morph[data-smooth]{transition: none}}.ui-dt input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-dt textarea:focus-visible, .ui-dt [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-dt{--ui-dt-card: #232326;--ui-dt-line: rgba(255, 255, 255, 0.08);--ui-dt-grid: rgba(255, 255, 255, 0.07);--ui-dt-ink: #ededed;--ui-dt-text: #c4c4c4;--ui-dt-muted: #8f8f8f;--ui-dt-faint: #6b6b70;--ui-dt-hover: rgba(255, 255, 255, 0.03);--ui-dt-selected: rgba(47, 107, 255, 0.12);--ui-dt-range: rgba(47, 107, 255, 0.16);--ui-dt-tray: #161618;--ui-dt-accent-ink: #6b95ff;--ui-dt-border: rgba(255, 255, 255, 0.08);--ui-dt-col-active: rgba(47, 107, 255, 0.08);--ui-dt-th-hover: rgba(255, 255, 255, 0.06);--ui-dt-active-blur: rgba(107, 149, 255, 0.55);--ui-dt-edit: #2a2a2d;--ui-dt-pop: #2a2a2d;--ui-dt-pop-ring: rgba(255, 255, 255, 0.1);--ui-dt-option-hover: #313135;--ui-dt-check-bg: #2a2a2d;--ui-dt-check-border: rgba(255, 255, 255, 0.2);--ui-dt-check-border-hover: rgba(255, 255, 255, 0.36);--ui-dt-check-mark: #121213;--ui-dt-underline: rgba(255, 255, 255, 0.22);--ui-dt-wash: rgba(255, 255, 255, 0.06);--ui-dt-wash-soft: rgba(255, 255, 255, 0.06);--ui-dt-danger: #ff6369;--ui-dt-danger-hover: #ff8589;--ui-dt-danger-wash: rgba(229, 72, 77, 0.14);--ui-dt-card-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);--ui-dt-pop-shadow: 0 12px 30px -8px rgba(0, 0, 0, 0.55)}:where(.dark, [data-theme="dark"]) .ui-dt__tag[data-tone="blue"]{background: rgba(47, 107, 255, 0.16);color: #8aabff;box-shadow: inset 0 0 0 1px rgba(47, 107, 255, 0.28)}:where(.dark, [data-theme="dark"]) .ui-dt__tag[data-tone="violet"]{background: rgba(124, 77, 255, 0.18);color: #b49cff;box-shadow: inset 0 0 0 1px rgba(124, 77, 255, 0.3)}:where(.dark, [data-theme="dark"]) .ui-dt__tag[data-tone="pink"]{background: rgba(236, 72, 153, 0.16);color: #f472b6;box-shadow: inset 0 0 0 1px rgba(236, 72, 153, 0.28)}:where(.dark, [data-theme="dark"]) .ui-dt__tag[data-tone="green"]{background: rgba(34, 197, 94, 0.14);color: #4ade80;box-shadow: inset 0 0 0 1px rgba(34, 197, 94, 0.26)}:where(.dark, [data-theme="dark"]) .ui-dt__tag[data-tone="amber"]{background: rgba(245, 158, 11, 0.14);color: #fbbf24;box-shadow: inset 0 0 0 1px rgba(245, 158, 11, 0.26)}:where(.dark, [data-theme="dark"]) .ui-dt__tag[data-tone="gray"]{background: #2a2a2d;color: #c4c4c4;box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08)}`;

export {
  CComponent,
  g,
  _,
  v,
  y
};
