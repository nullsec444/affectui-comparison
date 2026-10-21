import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo.clean-BXz9gUDp.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = /\s+|[\p{L}\p{N}_'’]+|[^\s\p{L}\p{N}_]/gu;
var a = (e) => /^\s+$/.test(e);
function o(original2, suggested2) {
  let n4 = original2.match(i) ?? [];
  let r2 = suggested2.match(i) ?? [];
  let o2 = 0;
  while (o2 < n4.length && o2 < r2.length && n4[o2] === r2[o2]) {
    o2++;
  }
  let s2 = 0;
  while (s2 < n4.length - o2 && s2 < r2.length - o2 && n4[n4.length - 1 - s2] === r2[r2.length - 1 - s2]) {
    s2++;
  }
  let c2 = n4.slice(o2, n4.length - s2);
  let l2 = r2.slice(o2, r2.length - s2);
  let c_length = c2.length;
  let l_length = l2.length;
  let f = n4.slice(0, o2).map((e) => ({
    t: 0,
    s: e
  }));
  if (c_length * l_length > 4e6) {
    c2.forEach((e) => f.push({
      t: 1,
      s: e
    }));
    l2.forEach((e) => f.push({
      t: 2,
      s: e
    }));
  } else {
    let e = l_length + 1;
    let t = new Uint16Array((c_length + 1) * e);
    for (let n6 = c_length - 1; n6 >= 0; n6--) {
      for (let r4 = l_length - 1; r4 >= 0; r4--) {
        t[n6 * e + r4] = c2[n6] === l2[r4] ? t[(n6 + 1) * e + r4 + 1] + 1 : Math.max(t[(n6 + 1) * e + r4], t[n6 * e + r4 + 1]);
      }
    }
    let n5 = 0;
    let r3 = 0;
    while (n5 < c_length && r3 < l_length) {
      if (c2[n5] === l2[r3]) {
        f.push({
          t: 0,
          s: c2[n5]
        });
        n5++;
        r3++;
      } else if (t[(n5 + 1) * e + r3] >= t[n5 * e + r3 + 1]) {
        f.push({
          t: 1,
          s: c2[n5++]
        });
      } else {
        f.push({
          t: 2,
          s: l2[r3++]
        });
      }
    }
    while (n5 < c_length) {
      f.push({
        t: 1,
        s: c2[n5++]
      });
    }
    while (r3 < l_length) {
      f.push({
        t: 2,
        s: l2[r3++]
      });
    }
  }
  n4.slice(n4.length - s2).forEach((e) => f.push({
    t: 0,
    s: e
  }));
  for (let e = 0; e < f.length; e++) {
    if (f[e].t === 0 || e > 0 && f[e - 1].t !== 0) {
      continue;
    }
    let t = f[e].t;
    let n5 = e;
    while (n5 < f.length && f[n5].t === t) {
      n5++;
    }
    if (!(n5 < f.length && f[n5].t !== 0)) {
      while (n5 < f.length && f[n5].t === 0 && f[n5].s === f[e].s && a(f[e].s)) {
        f[n5] = {
          t,
          s: f[n5].s
        };
        f[e] = {
          t: 0,
          s: f[e].s
        };
        e++;
        n5++;
      }
      e = n5 - 1;
    }
  }
  let p = [];
  for (let e of f) {
    let t = p[p.length - 1];
    if (e.t === 0) {
      if (t?.type === `equal`) {
        t.text += e.s;
      } else {
        p.push({
          type: `equal`,
          text: e.s
        });
      }
    } else {
      if (t?.type !== `change`) {
        p.push({
          type: `change`,
          remove: ``,
          insert: ``
        });
      }
      let n5 = p[p.length - 1];
      if (e.t === 1) {
        n5.remove += e.s;
      } else {
        n5.insert += e.s;
      }
    }
  }
  let m2 = [];
  for (let e = 0; e < p.length; e++) {
    let t = p[e];
    let n5 = m2[m2.length - 1];
    let r3 = p[e + 1];
    if (t.type === `equal` && a(t.text) && n5?.type === `change` && r3?.type === `change`) {
      n5.remove += t.text + r3.remove;
      n5.insert += t.text + r3.insert;
      e++;
      continue;
    }
    m2.push({
      ...t
    });
  }
  let h2 = [];
  let g2 = (text) => {
    if (!text) {
      return;
    }
    let t = h2[h2.length - 1];
    if (t?.type === `equal`) {
      t.text += text;
    } else {
      h2.push({
        type: `equal`,
        text
      });
    }
  };
  for (let e of m2) {
    if (e.type === `equal`) {
      g2(e.text);
      continue;
    }
    let {
      remove,
      insert
    } = e;
    let r3 = ``;
    let i2 = ``;
    if (remove && insert) {
      let e2 = remove.match(/^\s+/)?.[0] ?? ``;
      if (e2 && insert.startsWith(e2) && e2.length < remove.length && e2.length < insert.length) {
        r3 = e2;
        remove = remove.slice(e2.length);
        insert = insert.slice(e2.length);
      }
      let a2 = remove.match(/\s+$/)?.[0] ?? ``;
      if (a2 && insert.endsWith(a2) && a2.length < remove.length && a2.length < insert.length) {
        i2 = a2;
        remove = remove.slice(0, -a2.length);
        insert = insert.slice(0, -a2.length);
      }
    }
    g2(r3);
    h2.push({
      type: `change`,
      remove,
      insert
    });
    g2(i2);
  }
  return h2;
}
var s = (e) => `${e} suggestion${e === 1 ? `` : `s`}`;
var c = (e) => `\u201C${e.trim()}\u201D`;
var l = (e) => {
  if (e.remove.trim() && e.insert.trim()) {
    return `replace ${c(e.remove)} with ${c(e.insert)}`;
  }
  if (e.insert.trim()) {
    return `add ${c(e.insert)}`;
  }
  return `remove ${c(e.remove)}`;
};
function U1Component({
  original: original2 = ``,
  suggested: suggested2 = ``,
  changes,
  onChange,
  onDone,
  label,
  ref,
  className
}) {
  let m2 = n3.useMemo(() => changes ?? o(original2, suggested2), [changes, original2, suggested2]);
  let h2 = n3.useMemo(() => JSON.stringify(m2), [m2]);
  let list = n3.useMemo(() => {
    let e = [];
    m2.forEach((t, seg) => {
      if (t.type === `change`) {
        e.push({
          seg,
          remove: t.remove,
          insert: t.insert
        });
      }
    });
    return e;
  }, [m2]);
  let [_2, set_] = n3.useState({});
  let [y, setY] = n3.useState([]);
  let [x, setX] = n3.useState(null);
  let [C, setC] = n3.useState(null);
  let [T, setT] = n3.useState(null);
  let [D, setD] = n3.useState(``);
  let [k, setK] = n3.useState(h2);
  if (k !== h2) {
    setK(h2);
    set_({});
    setY([]);
    setX(null);
    setC(null);
    setT(null);
  }
  let jRef = n3.useRef(null);
  let MRef = n3.useRef(null);
  let NRef = n3.useRef(null);
  let PRef = n3.useRef(null);
  let FRef = n3.useRef([]);
  let IRef = n3.useRef(0);
  let LRef = n3.useRef(null);
  let RRef = n3.useRef(null);
  let zRef = n3.useRef({
    onChange,
    onDone
  });
  zRef.current = {
    onChange,
    onDone
  };
  let pending = list.map((e, t) => t).filter((e) => !_2[e]);
  let inert = list.length > 0 && pending.length === 0;
  let H = (e) => m2.map((t, n4) => {
    if (t.type === `equal`) {
      return t.text;
    }
    if (e[list.findIndex((e2) => e2.seg === n4)] === `accepted`) {
      return t.insert;
    }
    return t.remove;
  }).join(``);
  let URef = n3.useRef({
    decisions: _2,
    history: y,
    list,
    pending
  });
  URef.current = {
    decisions: _2,
    history: y,
    list,
    pending
  };
  let W = (e, t, n4 = false) => {
    let {
      decisions,
      list: list2
    } = URef.current;
    let a2 = e.filter((e2) => e2 >= 0 && e2 < list2.length && !decisions[e2]);
    if (!a2.length) {
      return;
    }
    let o2 = {
      ...decisions
    };
    a2.forEach((e2) => o2[e2] = t);
    let c2 = list2.length - Object.keys(o2).length;
    set_(o2);
    setY((e2) => [...e2, a2]);
    setT(null);
    RRef.current = Math.max(...a2);
    let u = t === `accepted` ? `Accepted` : `Rejected`;
    let d2 = a2.length === 1 ? l(list2[a2[0]]).replace(/^./, (e2) => e2.toUpperCase()) : `${a2.length} suggestions`;
    setD(`${u}: ${d2}. ${c2 ? `${s(c2)} left.` : `All changes reviewed.`}`);
    if (n4) {
      let e2 = Math.max(...a2);
      let t2 = list2.map((e3, t3) => t3).filter((e3) => !o2[e3]);
      LRef.current = c2 ? t2.find((t3) => t3 > e2) ?? t2[0] : `undo`;
    }
    let f = H(o2);
    zRef.current.onChange?.(f);
    if (!c2) {
      zRef.current.onDone?.(f);
    }
  };
  let G = (e = false) => {
    let {
      decisions,
      history
    } = URef.current;
    let r2 = history[history.length - 1];
    if (!r2) {
      return;
    }
    let i2 = {
      ...decisions
    };
    r2.forEach((e2) => delete i2[e2]);
    set_(i2);
    setY(history.slice(0, -1));
    setD(`Undone. ${s(URef.current.list.length - Object.keys(i2).length)} left.`);
    if (e) {
      LRef.current = Math.min(...r2);
    }
    zRef.current.onChange?.(H(i2));
  };
  let reset = () => {
    set_({});
    setY([]);
    setT(null);
    setX(null);
    setD(``);
    RRef.current = null;
  };
  n3.useImperativeHandle(ref, () => ({
    highlight: (e) => setT(e),
    accept: (e) => W([e], `accepted`),
    reject: (e) => W([e], `rejected`),
    acceptAll: () => W(URef.current.pending, `accepted`),
    rejectAll: () => W(URef.current.pending, `rejected`),
    undo: () => G(),
    reset
  }));
  n3.useLayoutEffect(() => {
    let LRef_current = LRef.current;
    if (LRef_current !== null) {
      LRef.current = null;
      if (LRef_current === `undo`) {
        PRef.current?.focus();
      } else {
        FRef.current[LRef_current]?.focus();
      }
    }
  }, [_2]);
  let q = [x, C, T].find((e) => e !== null && !_2[e] && e < list.length) ?? null;
  n3.useEffect(() => {
    if (q !== null) {
      RRef.current = q;
    }
  }, [q]);
  let J = (e) => {
    let pending2 = URef.current.pending;
    if (!pending2.length) {
      return;
    }
    let n4 = q ?? RRef.current ?? (e === 1 ? -1 : Infinity);
    let r2 = e === 1 ? pending2.find((e2) => e2 > n4) ?? pending2[0] : [...pending2].reverse().find((e2) => e2 < n4) ?? pending2[pending2.length - 1];
    window.clearTimeout(IRef.current);
    setX(null);
    setT(r2);
    RRef.current = r2;
    let i2 = FRef.current[r2];
    if (!i2) {
      return;
    }
    if (C !== null) {
      i2.focus({
        preventScroll: true
      });
    }
    let a2 = window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;
    i2.scrollIntoView({
      block: `nearest`,
      inline: `nearest`,
      behavior: a2 ? `auto` : `smooth`
    });
  };
  n3.useEffect(() => {
    if (T === null) {
      return;
    }
    let e = (e2) => {
      if (!jRef.current?.contains(e2.target)) {
        setT(null);
      }
    };
    document.addEventListener(`pointerdown`, e);
    return () => document.removeEventListener(`pointerdown`, e);
  }, [T]);
  let [Y, setY_1] = n3.useState(null);
  let XRef = n3.useRef(false);
  n3.useLayoutEffect(() => {
    let e = () => {
      let MRef_current = MRef.current;
      let NRef_current = NRef.current;
      let n4 = q === null ? null : FRef.current[q];
      if (!MRef_current || !NRef_current || !n4) {
        return;
      }
      let r2 = MRef_current.getBoundingClientRect();
      let i2 = r2.width ? MRef_current.offsetWidth / r2.width : 1;
      let a2 = n4.getClientRects()[0] ?? n4.getBoundingClientRect();
      let t_offsetWidth = NRef_current.offsetWidth;
      let t_offsetHeight = NRef_current.offsetHeight;
      let c2 = (a2.left - r2.left + a2.width / 2) * i2;
      let left = Math.min(Math.max(c2 - t_offsetWidth / 2, 8), Math.max(8, MRef_current.offsetWidth - t_offsetWidth - 8));
      let top = (a2.top - r2.top) * i2 - t_offsetHeight - 6;
      setY_1({
        left,
        top,
        snap: !XRef.current
      });
      XRef.current = true;
    };
    if (q === null) {
      XRef.current = false;
      return;
    }
    e();
    let t = new ResizeObserver(e);
    if (MRef.current) {
      t.observe(MRef.current);
    }
    return () => t.disconnect();
  }, [q, _2]);
  let Z = (e) => {
    window.clearTimeout(IRef.current);
    setX(e);
  };
  let onMouseLeave = () => {
    window.clearTimeout(IRef.current);
    IRef.current = window.setTimeout(() => setX(null), 140);
  };
  n3.useEffect(() => () => window.clearTimeout(IRef.current), []);
  let te = (e, t) => {
    if (e.metaKey || e.ctrlKey || e.altKey) {
      return;
    }
    let n4 = e.key.toLowerCase();
    if (n4 === `y` || n4 === `enter`) {
      e.preventDefault();
      W([t], `accepted`, true);
    } else if (n4 === `n` || n4 === `backspace` || n4 === `delete`) {
      e.preventDefault();
      W([t], `rejected`, true);
    } else if (n4 === `escape`) {
      e.currentTarget.blur();
    }
  };
  let g_length = list.length;
  let $ = -1;
  return /* @__PURE__ */ jsxs("div", { ref: jRef, className: [`ui-dfc`, className].filter(Boolean).join(` `), "data-done": inert || void 0, onKeyDown: (e) => {
    if (e.key === `Escape` && T !== null) {
      setT(null);
    }
  }, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-inline-diff-clean`, precedence: `default`, children: d }),
    /* @__PURE__ */ jsxs("div", { ref: MRef, className: `ui-dfc__card`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-dfc__body`, children: [
        label && /* @__PURE__ */ jsxs("div", { className: `ui-dfc__label`, children: [
          /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [
            /* @__PURE__ */ jsx("path", { d: `M8 1.75c.3 2.9 1.35 3.95 4.25 4.25-2.9.3-3.95 1.35-4.25 4.25C7.7 7.35 6.65 6.3 3.75 6 6.65 5.7 7.7 4.65 8 1.75Z` }),
            /* @__PURE__ */ jsx("path", { d: `M12.5 10.25c.15 1.25.6 1.7 1.75 1.75-1.15.15-1.6.6-1.75 1.75-.15-1.15-.6-1.6-1.75-1.75 1.15-.05 1.6-.5 1.75-1.75Z` })
          ] }),
          /* @__PURE__ */ jsx("span", { children: label })
        ] }),
        /* @__PURE__ */ jsx("p", { className: `ui-dfc__text`, children: m2.map((e, key) => {
          if (e.type === `equal`) {
            return /* @__PURE__ */ jsx("span", { children: e.text }, key);
          }
          $++;
          let n4 = $;
          let i2 = _2[n4] ?? `pending`;
          let a2 = i2 === `pending`;
          return /* @__PURE__ */ jsxs("span", { ref: (e2) => {
            FRef.current[n4] = e2;
          }, className: `ui-dfc__chg`, "data-state": i2, "data-active": q === n4 || void 0, tabIndex: a2 ? 0 : void 0, role: a2 ? `button` : void 0, "aria-label": a2 ? `Suggestion ${n4 + 1} of ${g_length}: ${l(e)}. Press Y to accept, N to reject` : void 0, onKeyDown: a2 ? (e2) => te(e2, n4) : void 0, onFocus: () => setC(n4), onBlur: () => setC((e2) => {
            if (e2 === n4) {
              return null;
            }
            return e2;
          }), onMouseEnter: () => Z(n4), onMouseLeave, children: [
            e.remove && /* @__PURE__ */ jsx("del", { className: `ui-dfc__del`, "aria-hidden": i2 === `accepted` || void 0, children: e.remove }),
            e.insert && /* @__PURE__ */ jsx("ins", { className: `ui-dfc__ins`, "aria-hidden": i2 === `rejected` || void 0, children: e.insert })
          ] }, key);
        }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-dfc__foot`, children: /* @__PURE__ */ jsxs("div", { className: `ui-dfc__bar`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-dfc__layer`, "data-show": !inert || void 0, inert, "aria-hidden": inert || void 0, children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-dfc__count`, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-dfc__num`, children: pending.length }),
            /* @__PURE__ */ jsx("span", { className: `ui-dfc__word`, children: pending.length === 1 ? `suggestion` : `suggestions` })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: `ui-dfc__actions`, children: [
            /* @__PURE__ */ jsxs("span", { className: `ui-dfc__nav`, onMouseDown: (e) => e.preventDefault(), children: [
              /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-dfc__icon`, onClick: () => J(-1), disabled: !pending.length, "aria-label": `Previous suggestion`, children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M10 12.5 5.5 8 10 3.5` }) }) }),
              /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-dfc__icon`, onClick: () => J(1), disabled: !pending.length, "aria-label": `Next suggestion`, children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M6 3.5 10.5 8 6 12.5` }) }) })
            ] }),
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-dfc__btn`, onClick: () => W(pending, `rejected`), disabled: !pending.length, children: `Reject all` }),
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-dfc__btn ui-dfc__btn--primary`, onClick: () => W(pending, `accepted`), disabled: !pending.length, children: `Accept all` })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `ui-dfc__layer`, "data-show": inert || void 0, inert: !inert, "aria-hidden": !inert || void 0, children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-dfc__count ui-dfc__count--done`, children: [
            /* @__PURE__ */ jsx("svg", { className: `ui-dfc__ok`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M3.75 8.4 6.6 11.1 12.25 5`, pathLength: 1 }) }),
            `All changes reviewed`
          ] }),
          /* @__PURE__ */ jsxs("button", { ref: PRef, type: `button`, className: `ui-dfc__btn`, onClick: () => G(true), disabled: !y.length, children: [
            /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [
              /* @__PURE__ */ jsx("path", { d: `M5.5 4 2.75 6.75 5.5 9.5` }),
              /* @__PURE__ */ jsx("path", { d: `M3 6.75h6.5a3.75 3.75 0 0 1 0 7.5H7.5` })
            ] }),
            `Undo`
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { ref: NRef, className: `ui-dfc__pop`, "data-open": q !== null || void 0, "data-snap": Y?.snap || void 0, style: Y ? {
        left: Y.left,
        top: Y.top
      } : void 0, role: `group`, "aria-label": `Review suggestion`, "aria-hidden": q === null || void 0, onMouseEnter: () => q !== null && Z(q), onMouseLeave, onMouseDown: (e) => e.preventDefault(), children: [
        /* @__PURE__ */ jsxs("button", { type: `button`, tabIndex: -1, className: `ui-dfc__pbtn ui-dfc__pbtn--primary`, "aria-label": `Accept suggestion`, onClick: () => q !== null && W([q], `accepted`, C === q), children: [
          /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M3.75 8.4 6.6 11.1 12.25 5` }) }),
          `Accept`,
          /* @__PURE__ */ jsx("kbd", { children: `Y` })
        ] }),
        /* @__PURE__ */ jsxs("button", { type: `button`, tabIndex: -1, className: `ui-dfc__pbtn`, "aria-label": `Reject suggestion`, onClick: () => q !== null && W([q], `rejected`, C === q), children: [
          /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M4.5 4.5l7 7M11.5 4.5l-7 7` }) }),
          `Reject`,
          /* @__PURE__ */ jsx("kbd", { children: `N` })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("span", { className: `ui-dfc__sr`, role: `status`, "aria-live": `polite`, children: D })
  ] });
}
var d = `.ui-dfc{--ui-dfc-card: #ffffff;--ui-dfc-ink: rgba(0, 0, 0, 0.88);--ui-dfc-strong: #000000;--ui-dfc-text: rgba(0, 0, 0, 0.61);--ui-dfc-muted: rgba(0, 0, 0, 0.45);--ui-dfc-faint: rgba(0, 0, 0, 0.27);--ui-dfc-icon: rgba(0, 0, 0, 0.447);--ui-dfc-line: rgba(0, 0, 0, 0.06);--ui-dfc-fill: rgba(0, 0, 0, 0.06);--ui-dfc-wash: rgba(0, 0, 0, 0.03);--ui-dfc-accent: rgba(0, 96, 226, 0.765);--ui-dfc-add: rgba(26, 154, 82, 0.1);--ui-dfc-add-strong: rgba(26, 154, 82, 0.16);--ui-dfc-del: rgba(229, 72, 77, 0.08);--ui-dfc-del-strong: rgba(229, 72, 77, 0.14);--ui-dfc-del-ink: rgba(0, 0, 0, 0.45);--ui-dfc-strike: rgba(229, 72, 77, 0.6);--ui-dfc-ok: #1a9a52;--ui-dfc-primary: rgba(0, 0, 0, 0.88);--ui-dfc-primary-ink: #fcfcfc;--ui-dfc-primary-kbd: rgba(255, 255, 255, 0.16);--ui-dfc-primary-kbd-ink: rgba(255, 255, 255, 0.66);--ui-dfc-secondary-hover: #fafafa;--ui-dfc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-dfc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-dfc-focus: rgba(0, 96, 226, 0.35);--ui-dfc-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;display: grid;width: 100%;min-width: 0;color: var(--ui-dfc-ink);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;-webkit-font-smoothing: antialiased;text-align: left}.ui-dfc *, .ui-dfc *::before, .ui-dfc *::after{box-sizing: border-box}:where(.ui-dfc) button{appearance: none;margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-dfc) svg{display: block;flex: none}.ui-dfc__card{position: relative;min-width: 0;border-radius: 10px;background: var(--ui-dfc-card);box-shadow: var(--ui-dfc-shadow);container: ui-dfc-card / inline-size}.ui-dfc__label{display: flex;align-items: center;gap: 6px;min-width: 0;margin: 0 0 8px;color: var(--ui-dfc-text);font-size: 12px;line-height: 16px}.ui-dfc__label span{overflow: hidden;text-overflow: ellipsis;white-space: nowrap}.ui-dfc__label svg{width: 16px;height: 16px;fill: var(--ui-dfc-accent)}.ui-dfc__body{padding: 16px 16px 18px}.ui-dfc__text{margin: 0;color: var(--ui-dfc-ink);font-size: 13px;line-height: 22px;white-space: pre-line;overflow-wrap: anywhere}.ui-dfc__chg{border-radius: 4px;cursor: pointer;scroll-margin: 64px 0 72px}.ui-dfc__chg:not([data-state="pending"]){cursor: auto}.ui-dfc__chg:focus{outline: none}.ui-dfc__chg:focus-visible{outline: 2px solid var(--ui-dfc-focus);outline-offset: 1px}.ui-dfc__del, .ui-dfc__ins{padding: 1px 2px;border-radius: 4px;-webkit-box-decoration-break: clone;box-decoration-break: clone;font-size: 1em;transition: background-color 360ms ease, color 360ms ease, text-decoration-color 300ms ease, font-size 460ms var(--ui-dfc-ease), padding 460ms var(--ui-dfc-ease), margin 460ms var(--ui-dfc-ease), opacity 300ms ease}.ui-dfc__del{background: var(--ui-dfc-del);color: var(--ui-dfc-del-ink);text-decoration: line-through;text-decoration-color: var(--ui-dfc-strike);text-decoration-thickness: 1px}.ui-dfc__ins{background: var(--ui-dfc-add);color: var(--ui-dfc-ink);text-decoration: none}.ui-dfc__del + .ui-dfc__ins{margin-left: 3px}.ui-dfc__chg[data-active] .ui-dfc__del{background: var(--ui-dfc-del-strong)}.ui-dfc__chg[data-active] .ui-dfc__ins{background: var(--ui-dfc-add-strong)}.ui-dfc__chg[data-state="accepted"] .ui-dfc__del, .ui-dfc__chg[data-state="rejected"] .ui-dfc__ins{font-size: 0;padding: 0;margin: 0;opacity: 0}.ui-dfc__chg[data-state="accepted"] .ui-dfc__ins, .ui-dfc__chg[data-state="rejected"] .ui-dfc__del{padding: 0;margin: 0;background: transparent;color: inherit;text-decoration-color: transparent}.ui-dfc__foot{display: grid;align-items: center;min-height: 44px;padding: 8px 8px 8px 16px;border-top: 0.5px solid var(--ui-dfc-line)}.ui-dfc__bar{display: grid}.ui-dfc__layer{grid-area: 1 / 1;display: flex;flex-wrap: wrap;align-items: center;justify-content: space-between;gap: 8px;min-width: 0;opacity: 0;visibility: hidden;transform: translateY(4px);filter: blur(2px);transition: opacity 260ms ease, transform 420ms var(--ui-dfc-ease), filter 260ms ease, visibility 0s 420ms}.ui-dfc__layer[data-show]{opacity: 1;visibility: visible;transform: none;filter: none;transition: opacity 320ms ease 80ms, transform 460ms var(--ui-dfc-ease) 80ms, filter 320ms ease 80ms, visibility 0s}@container ui-dfc-card (max-width: 400px){.ui-dfc__word{position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap}}.ui-dfc__count{display: inline-flex;align-items: center;gap: 8px;color: var(--ui-dfc-text);font-size: 13px;line-height: 20px;white-space: nowrap}.ui-dfc__count--done{gap: 6px;color: var(--ui-dfc-ink);font-weight: 500}.ui-dfc__num{display: inline-grid;place-items: center;min-width: 20px;height: 20px;padding: 0 6px;border-radius: 5px;background: var(--ui-dfc-fill);color: var(--ui-dfc-ink);font-size: 12px;font-weight: 500;font-variant-numeric: tabular-nums}.ui-dfc__ok{width: 16px;height: 16px;fill: none;stroke: var(--ui-dfc-ok);stroke-width: 1.5;stroke-linecap: round;stroke-linejoin: round;stroke-dasharray: 1;stroke-dashoffset: 1}.ui-dfc[data-done] .ui-dfc__ok{animation: ui-dfc-draw 420ms var(--ui-dfc-ease) 220ms forwards}.ui-dfc__actions{display: inline-flex;align-items: center;gap: 8px;margin-left: auto}.ui-dfc__nav{display: inline-flex;gap: 2px}.ui-dfc__btn, .ui-dfc__icon{display: inline-flex;align-items: center;justify-content: center;gap: 6px;height: 28px;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;white-space: nowrap;transition: background-color 160ms ease, color 160ms ease, opacity 160ms ease, transform 160ms var(--ui-dfc-ease)}.ui-dfc__btn{padding: 0 10px;background: var(--ui-dfc-card);box-shadow: var(--ui-dfc-shadow);color: var(--ui-dfc-strong)}.ui-dfc__btn:has(svg){padding: 0 10px 0 8px}.ui-dfc__icon{width: 28px;color: var(--ui-dfc-icon)}.ui-dfc__btn svg, .ui-dfc__icon svg, .ui-dfc__pbtn svg{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-dfc__btn svg{color: var(--ui-dfc-icon)}.ui-dfc__btn:hover:not(:disabled){background: var(--ui-dfc-secondary-hover)}.ui-dfc__icon:hover:not(:disabled){background: var(--ui-dfc-wash);color: var(--ui-dfc-ink)}.ui-dfc__btn--primary{background: var(--ui-dfc-primary);color: var(--ui-dfc-primary-ink);box-shadow: none}.ui-dfc__btn--primary:hover:not(:disabled){background: var(--ui-dfc-primary);opacity: 0.9}.ui-dfc__btn:active:not(:disabled), .ui-dfc__icon:active:not(:disabled){transform: scale(0.97)}.ui-dfc__btn:disabled, .ui-dfc__icon:disabled{opacity: 0.4;cursor: default}.ui-dfc__btn:focus-visible, .ui-dfc__icon:focus-visible{outline: 2px solid var(--ui-dfc-focus);outline-offset: 1px}.ui-dfc__pop{position: absolute;top: 0;left: 0;z-index: 2;display: flex;align-items: center;gap: 4px;padding: 4px;border-radius: 10px;background: var(--ui-dfc-card);box-shadow: var(--ui-dfc-shadow-pop);opacity: 0;visibility: hidden;transform: translateY(4px) scale(0.96);transform-origin: 50% 100%;pointer-events: none;transition: opacity 160ms ease, transform 240ms var(--ui-dfc-ease), left 90ms ease-out, top 90ms ease-out, visibility 0s 240ms}.ui-dfc__pop[data-open]{opacity: 1;visibility: visible;transform: none;pointer-events: auto;transition: opacity 160ms ease, transform 280ms var(--ui-dfc-ease), left 90ms ease-out, top 90ms ease-out, visibility 0s}.ui-dfc__pop[data-snap]{transition-property: opacity, transform, visibility}.ui-dfc__pbtn{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 6px 0 8px;border-radius: 6px;background: var(--ui-dfc-card);box-shadow: var(--ui-dfc-shadow);color: var(--ui-dfc-strong);font-size: 13px;font-weight: 500;line-height: 20px;white-space: nowrap;transition: background-color 140ms ease, opacity 140ms ease}.ui-dfc__pbtn svg{color: var(--ui-dfc-icon)}.ui-dfc__pbtn:hover{background: var(--ui-dfc-secondary-hover)}.ui-dfc__pbtn--primary{background: var(--ui-dfc-primary);box-shadow: none;color: var(--ui-dfc-primary-ink)}.ui-dfc__pbtn--primary svg{color: currentColor}.ui-dfc__pbtn--primary:hover{background: var(--ui-dfc-primary);opacity: 0.9}.ui-dfc__pbtn kbd{display: inline-grid;place-items: center;min-width: 16px;height: 16px;padding: 0 4px;border-radius: 4px;background: var(--ui-dfc-fill);color: var(--ui-dfc-muted);font: inherit;font-size: 10px;font-weight: 500;line-height: 16px}.ui-dfc__pbtn--primary kbd{background: var(--ui-dfc-primary-kbd);color: var(--ui-dfc-primary-kbd-ink)}.ui-dfc__sr{position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap;border: 0}@keyframes ui-dfc-draw{to{stroke-dashoffset: 0}}@container ui-dfc-card (max-width: 360px){.ui-dfc__nav{display: none}.ui-dfc__body{padding: 14px 14px 16px}.ui-dfc__foot{padding-left: 14px}}@media (hover: none) and (pointer: coarse){.ui-dfc__pbtn kbd{display: none}.ui-dfc__pbtn{height: 34px;padding: 0 12px 0 10px}.ui-dfc__btn{height: 34px}.ui-dfc__icon{width: 34px;height: 34px}.ui-dfc__foot{min-height: 52px}}@media (prefers-reduced-motion: reduce){.ui-dfc *, .ui-dfc *::before, .ui-dfc *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;transition-duration: 1ms !important;transition-delay: 0ms !important}.ui-dfc__layer{filter: none;transform: none}}:where(.dark, [data-theme="dark"]) .ui-dfc{--ui-dfc-card: #1c1c1e;--ui-dfc-ink: rgba(255, 255, 255, 0.9);--ui-dfc-strong: #ffffff;--ui-dfc-text: rgba(255, 255, 255, 0.62);--ui-dfc-muted: rgba(255, 255, 255, 0.46);--ui-dfc-faint: rgba(255, 255, 255, 0.3);--ui-dfc-icon: rgba(255, 255, 255, 0.5);--ui-dfc-line: rgba(255, 255, 255, 0.08);--ui-dfc-fill: rgba(255, 255, 255, 0.08);--ui-dfc-wash: rgba(255, 255, 255, 0.04);--ui-dfc-accent: #4d8dff;--ui-dfc-add: rgba(62, 194, 122, 0.14);--ui-dfc-add-strong: rgba(62, 194, 122, 0.22);--ui-dfc-del: rgba(240, 90, 90, 0.14);--ui-dfc-del-strong: rgba(240, 90, 90, 0.22);--ui-dfc-del-ink: rgba(255, 255, 255, 0.46);--ui-dfc-strike: rgba(255, 120, 120, 0.7);--ui-dfc-ok: #3ec27a;--ui-dfc-primary: rgba(255, 255, 255, 0.9);--ui-dfc-primary-ink: #1c1c1e;--ui-dfc-primary-kbd: rgba(0, 0, 0, 0.08);--ui-dfc-primary-kbd-ink: rgba(28, 28, 30, 0.6);--ui-dfc-secondary-hover: #232326;--ui-dfc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-dfc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 28px -10px rgba(0, 0, 0, 0.6);--ui-dfc-focus: rgba(77, 141, 255, 0.5)}:where(.dark, [data-theme="dark"]) .ui-dfc__pop{--ui-dfc-card: #232326;--ui-dfc-secondary-hover: #2a2a2d}`;
var original = `Hi everyone, we are very excited to announce that the new dashboard is now available for all users. It loads a lot faster than before, and you can now export any report to CSV with just a single click. Let us know what you think!`;
var suggested = `Hi everyone, the new dashboard is now live for all users. It loads twice as fast, and you can now export any report to CSV in one click. Let us know what you think!`;
var m = [`accept`, `reject`, `accept`, `accept`];
var h = 1200;
var g = 450;
var _ = 2800;
function VComponent() {
  let eRef = n3.useRef(null);
  let [t, setT] = n3.useState(true);
  n3.useEffect(() => {
    if (!t) {
      return;
    }
    let n4 = [];
    let r2 = 900;
    let i2 = (e, t2) => n4.push(window.setTimeout(t2, e));
    let a3 = () => {
      m.forEach((t2, n5) => {
        i2(r2, () => eRef.current?.highlight(n5));
        r2 += h;
        i2(r2, () => {
          if (t2 === `accept`) {
            return eRef.current?.accept(n5);
          }
          return eRef.current?.reject(n5);
        });
        r2 += g;
      });
      r2 += _;
      i2(r2, () => eRef.current?.reset());
      r2 += 900;
      i2(r2, () => {
        r2 = 0;
        n4.length = 0;
        a3();
      });
    };
    a3();
    return () => n4.forEach((e) => window.clearTimeout(e));
  }, [t]);
  let a2 = () => {
    if (t) {
      setT(false);
      eRef.current?.highlight(null);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: `df-demo`, onPointerDown: a2, onKeyDown: a2, onFocus: a2, onPointerOver: (e) => {
    if (e.target.closest?.(`.ui-dfc__chg, .ui-dfc__pop, button`)) {
      a2();
    }
  }, children: /* @__PURE__ */ jsx(U1Component, { ref: eRef, label: `Suggested by AI \xB7 Make it shorter`, original, suggested }) });
}

export {
  VComponent
};
