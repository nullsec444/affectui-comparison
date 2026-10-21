import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/component-7zQPnK-d.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = /\s+|[\p{L}\p{N}_'’]+|[^\s\p{L}\p{N}_]/gu;
var a = (e) => /^\s+$/.test(e);
function o(original, suggested) {
  let n4 = original.match(i) ?? [];
  let r2 = suggested.match(i) ?? [];
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
  let m = [];
  for (let e = 0; e < p.length; e++) {
    let t = p[e];
    let n5 = m[m.length - 1];
    let r3 = p[e + 1];
    if (t.type === `equal` && a(t.text) && n5?.type === `change` && r3?.type === `change`) {
      n5.remove += t.text + r3.remove;
      n5.insert += t.text + r3.insert;
      e++;
      continue;
    }
    m.push({
      ...t
    });
  }
  let h = [];
  let g = (text) => {
    if (!text) {
      return;
    }
    let t = h[h.length - 1];
    if (t?.type === `equal`) {
      t.text += text;
    } else {
      h.push({
        type: `equal`,
        text
      });
    }
  };
  for (let e of m) {
    if (e.type === `equal`) {
      g(e.text);
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
    g(r3);
    h.push({
      type: `change`,
      remove,
      insert
    });
    g(i2);
  }
  return h;
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
function UComponent({
  original = ``,
  suggested = ``,
  changes,
  onChange,
  onDone,
  label,
  ref,
  className
}) {
  let m = n3.useMemo(() => changes ?? o(original, suggested), [changes, original, suggested]);
  let h = n3.useMemo(() => JSON.stringify(m), [m]);
  let list = n3.useMemo(() => {
    let e = [];
    m.forEach((t, seg) => {
      if (t.type === `change`) {
        e.push({
          seg,
          remove: t.remove,
          insert: t.insert
        });
      }
    });
    return e;
  }, [m]);
  let [_, set_] = n3.useState({});
  let [y, setY] = n3.useState([]);
  let [x, setX] = n3.useState(null);
  let [C, setC] = n3.useState(null);
  let [T, setT] = n3.useState(null);
  let [D, setD] = n3.useState(``);
  let [k, setK] = n3.useState(h);
  if (k !== h) {
    setK(h);
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
  let pending = list.map((e, t) => t).filter((e) => !_[e]);
  let inert = list.length > 0 && pending.length === 0;
  let H = (e) => m.map((t, n4) => {
    if (t.type === `equal`) {
      return t.text;
    }
    if (e[list.findIndex((e2) => e2.seg === n4)] === `accepted`) {
      return t.insert;
    }
    return t.remove;
  }).join(``);
  let URef = n3.useRef({
    decisions: _,
    history: y,
    list,
    pending
  });
  URef.current = {
    decisions: _,
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
  }, [_]);
  let q = [x, C, T].find((e) => e !== null && !_[e] && e < list.length) ?? null;
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
  }, [q, _]);
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
  return /* @__PURE__ */ jsxs("div", { ref: jRef, className: [`ui-df`, className].filter(Boolean).join(` `), "data-done": inert || void 0, onKeyDown: (e) => {
    if (e.key === `Escape` && T !== null) {
      setT(null);
    }
  }, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-inline-diff`, precedence: `default`, children: d }),
    label && /* @__PURE__ */ jsxs("div", { className: `ui-df__label`, children: [
      /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [
        /* @__PURE__ */ jsx("path", { d: `M8 1.75c.3 2.9 1.35 3.95 4.25 4.25-2.9.3-3.95 1.35-4.25 4.25C7.7 7.35 6.65 6.3 3.75 6 6.65 5.7 7.7 4.65 8 1.75Z` }),
        /* @__PURE__ */ jsx("path", { d: `M12.5 10.25c.15 1.25.6 1.7 1.75 1.75-1.15.15-1.6.6-1.75 1.75-.15-1.15-.6-1.6-1.75-1.75 1.15-.05 1.6-.5 1.75-1.75Z` })
      ] }),
      /* @__PURE__ */ jsx("span", { children: label })
    ] }),
    /* @__PURE__ */ jsxs("div", { ref: MRef, className: `ui-df__card`, children: [
      /* @__PURE__ */ jsx("div", { className: `ui-df__head`, children: /* @__PURE__ */ jsxs("div", { className: `ui-df__bar`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-df__layer`, "data-show": !inert || void 0, inert, "aria-hidden": inert || void 0, children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-df__count`, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-df__num`, children: pending.length }),
            /* @__PURE__ */ jsx("span", { className: `ui-df__word`, children: pending.length === 1 ? `suggestion` : `suggestions` })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: `ui-df__actions`, children: [
            /* @__PURE__ */ jsxs("span", { className: `ui-df__nav`, onMouseDown: (e) => e.preventDefault(), children: [
              /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-df__icon`, onClick: () => J(-1), disabled: !pending.length, "aria-label": `Previous suggestion`, children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M10 12.5 5.5 8 10 3.5` }) }) }),
              /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-df__icon`, onClick: () => J(1), disabled: !pending.length, "aria-label": `Next suggestion`, children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M6 3.5 10.5 8 6 12.5` }) }) })
            ] }),
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-df__btn`, onClick: () => W(pending, `rejected`), disabled: !pending.length, children: `Reject all` }),
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-df__btn ui-df__btn--primary`, onClick: () => W(pending, `accepted`), disabled: !pending.length, children: `Accept all` })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `ui-df__layer`, "data-show": inert || void 0, inert: !inert, "aria-hidden": !inert || void 0, children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-df__count ui-df__count--done`, children: [
            /* @__PURE__ */ jsx("svg", { className: `ui-df__ok`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M3.75 8.4 6.6 11.1 12.25 5`, pathLength: 1 }) }),
            `All changes reviewed`
          ] }),
          /* @__PURE__ */ jsxs("button", { ref: PRef, type: `button`, className: `ui-df__btn`, onClick: () => G(true), disabled: !y.length, children: [
            /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [
              /* @__PURE__ */ jsx("path", { d: `M5.5 4 2.75 6.75 5.5 9.5` }),
              /* @__PURE__ */ jsx("path", { d: `M3 6.75h6.5a3.75 3.75 0 0 1 0 7.5H7.5` })
            ] }),
            `Undo`
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: `ui-df__body`, children: /* @__PURE__ */ jsx("p", { className: `ui-df__text`, children: m.map((e, key) => {
        if (e.type === `equal`) {
          return /* @__PURE__ */ jsx("span", { children: e.text }, key);
        }
        $++;
        let n4 = $;
        let i2 = _[n4] ?? `pending`;
        let a2 = i2 === `pending`;
        return /* @__PURE__ */ jsxs("span", { ref: (e2) => {
          FRef.current[n4] = e2;
        }, className: `ui-df__chg`, "data-state": i2, "data-active": q === n4 || void 0, tabIndex: a2 ? 0 : void 0, role: a2 ? `button` : void 0, "aria-label": a2 ? `Suggestion ${n4 + 1} of ${g_length}: ${l(e)}. Press Y to accept, N to reject` : void 0, onKeyDown: a2 ? (e2) => te(e2, n4) : void 0, onFocus: () => setC(n4), onBlur: () => setC((e2) => {
          if (e2 === n4) {
            return null;
          }
          return e2;
        }), onMouseEnter: () => Z(n4), onMouseLeave, children: [
          e.remove && /* @__PURE__ */ jsx("del", { className: `ui-df__del`, "aria-hidden": i2 === `accepted` || void 0, children: e.remove }),
          e.insert && /* @__PURE__ */ jsx("ins", { className: `ui-df__ins`, "aria-hidden": i2 === `rejected` || void 0, children: e.insert })
        ] }, key);
      }) }) }),
      /* @__PURE__ */ jsxs("div", { ref: NRef, className: `ui-df__pop`, "data-open": q !== null || void 0, "data-snap": Y?.snap || void 0, style: Y ? {
        left: Y.left,
        top: Y.top
      } : void 0, role: `group`, "aria-label": `Review suggestion`, "aria-hidden": q === null || void 0, onMouseEnter: () => q !== null && Z(q), onMouseLeave, onMouseDown: (e) => e.preventDefault(), children: [
        /* @__PURE__ */ jsxs("button", { type: `button`, tabIndex: -1, className: `ui-df__pbtn`, "aria-label": `Accept suggestion`, onClick: () => q !== null && W([q], `accepted`, C === q), children: [
          /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M3.75 8.4 6.6 11.1 12.25 5` }) }),
          `Accept`,
          /* @__PURE__ */ jsx("kbd", { children: `Y` })
        ] }),
        /* @__PURE__ */ jsx("span", { className: `ui-df__sep`, "aria-hidden": `true` }),
        /* @__PURE__ */ jsxs("button", { type: `button`, tabIndex: -1, className: `ui-df__pbtn`, "aria-label": `Reject suggestion`, onClick: () => q !== null && W([q], `rejected`, C === q), children: [
          /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M4.5 4.5l7 7M11.5 4.5l-7 7` }) }),
          `Reject`,
          /* @__PURE__ */ jsx("kbd", { children: `N` })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("span", { className: `ui-df__sr`, role: `status`, "aria-live": `polite`, children: D })
  ] });
}
var d = `.ui-df{--ui-df-ink: #171717;--ui-df-text: #525252;--ui-df-muted: #8a8a8a;--ui-df-tray: #f0f0f0;--ui-df-line: #ececec;--ui-df-bg: #ffffff;--ui-df-soft: #f5f5f5;--ui-df-add: rgba(34, 160, 90, 0.1);--ui-df-add-strong: rgba(34, 160, 90, 0.18);--ui-df-add-ink: #18794e;--ui-df-del: rgba(220, 60, 60, 0.08);--ui-df-del-strong: rgba(220, 60, 60, 0.15);--ui-df-del-ink: #b42318;--ui-df-strike: rgba(180, 35, 24, 0.55);--ui-df-ok: #1f8a4c;--ui-df-pop: #171717;--ui-df-pop-ink: #ffffff;--ui-df-pop-soft: rgba(255, 255, 255, 0.14);--ui-df-pop-kbd: rgba(255, 255, 255, 0.55);--ui-df-primary: #171717;--ui-df-primary-ink: #ffffff;--ui-df-focus: rgba(23, 23, 23, 0.35);--ui-df-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);--ui-df-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;display: grid;width: 100%;min-width: 0;padding: 4px;border-radius: 20px;background: var(--ui-df-tray);color: var(--ui-df-text);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;-webkit-font-smoothing: antialiased;text-align: left}.ui-df *, .ui-df *::before, .ui-df *::after{box-sizing: border-box}.ui-df__label{display: flex;align-items: center;gap: 6px;min-width: 0;padding: 6px 8px 4px;color: var(--ui-df-muted);font-size: 12.5px;line-height: 1.3;letter-spacing: -0.003em}.ui-df__label span{overflow: hidden;text-overflow: ellipsis;white-space: nowrap}.ui-df__label svg{flex: none;width: 13px;height: 13px;fill: currentColor}.ui-df__card{position: relative;min-width: 0;border-radius: 16px;background: var(--ui-df-bg);box-shadow: 0 0 0 1px var(--ui-df-line), var(--ui-df-shadow)}.ui-df__head{padding: 10px 10px 10px 16px;border-bottom: 1px solid var(--ui-df-line)}.ui-df__bar{display: grid}.ui-df__layer{grid-area: 1 / 1;display: flex;flex-wrap: wrap;align-items: center;justify-content: space-between;gap: 8px;min-width: 0;opacity: 0;visibility: hidden;transform: translateY(4px);filter: blur(2px);transition: opacity 260ms ease, transform 420ms var(--ui-df-ease), filter 260ms ease, visibility 0s 420ms}.ui-df__layer[data-show]{opacity: 1;visibility: visible;transform: none;filter: none;transition: opacity 320ms ease 80ms, transform 460ms var(--ui-df-ease) 80ms, filter 320ms ease 80ms, visibility 0s}.ui-df__card{container: ui-df-card / inline-size}@container ui-df-card (max-width: 400px){.ui-df__word{position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap}}.ui-df__count{display: inline-flex;align-items: center;gap: 7px;color: var(--ui-df-ink);font-size: 13px;font-weight: 500;line-height: 1;letter-spacing: -0.006em;white-space: nowrap}.ui-df__num{display: inline-grid;place-items: center;min-width: 20px;height: 20px;padding: 0 6px;border-radius: 999px;background: var(--ui-df-add);color: var(--ui-df-add-ink);font-size: 11.5px;font-weight: 600;font-variant-numeric: tabular-nums}.ui-df__ok{width: 16px;height: 16px;fill: none;stroke: var(--ui-df-ok);stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round;stroke-dasharray: 1;stroke-dashoffset: 1}.ui-df[data-done] .ui-df__ok{animation: ui-df-draw 420ms var(--ui-df-ease) 220ms forwards}.ui-df__actions{display: inline-flex;align-items: center;gap: 6px;margin-left: auto}.ui-df__nav{display: inline-flex;gap: 2px;margin-right: 2px}.ui-df__btn, .ui-df__icon{appearance: none;display: inline-flex;align-items: center;justify-content: center;gap: 6px;height: 30px;margin: 0;border: 0;border-radius: 8px;background: transparent;color: var(--ui-df-ink);font: inherit;font-size: 13px;font-weight: 500;line-height: 1;letter-spacing: -0.006em;white-space: nowrap;cursor: pointer;transition: background-color 160ms ease, color 160ms ease, opacity 160ms ease, transform 160ms var(--ui-df-ease);-webkit-tap-highlight-color: transparent}.ui-df__btn{padding: 0 11px;box-shadow: inset 0 0 0 1px var(--ui-df-line)}.ui-df__icon{width: 28px;color: var(--ui-df-muted)}.ui-df__btn svg, .ui-df__icon svg{width: 14px;height: 14px;fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round}.ui-df__btn:hover:not(:disabled){background: var(--ui-df-soft)}.ui-df__icon:hover:not(:disabled){background: var(--ui-df-soft);color: var(--ui-df-ink)}.ui-df__btn--primary{background: var(--ui-df-primary);color: var(--ui-df-primary-ink);box-shadow: none}.ui-df__btn--primary:hover:not(:disabled){background: var(--ui-df-primary);opacity: 0.88}.ui-df__btn:active:not(:disabled), .ui-df__icon:active:not(:disabled){transform: scale(0.97)}.ui-df__btn:disabled, .ui-df__icon:disabled{opacity: 0.4;cursor: default}.ui-df__btn:focus-visible, .ui-df__icon:focus-visible{outline: 2px solid var(--ui-df-focus);outline-offset: 2px}.ui-df__body{padding: 16px 18px 18px}.ui-df__text{margin: 0;color: var(--ui-df-text);font-size: 15px;line-height: 1.65;letter-spacing: -0.006em;white-space: pre-line;overflow-wrap: anywhere}.ui-df__chg{border-radius: 4px;cursor: pointer;scroll-margin: 64px 0 24px}.ui-df__chg:not([data-state="pending"]){cursor: auto}.ui-df__chg:focus{outline: none}.ui-df__chg:focus-visible{outline: 2px solid var(--ui-df-focus);outline-offset: 2px}.ui-df__del, .ui-df__ins{padding: 1px 2px;border-radius: 4px;-webkit-box-decoration-break: clone;box-decoration-break: clone;font-size: 1em;transition: background-color 360ms ease, color 360ms ease, text-decoration-color 300ms ease, font-size 460ms var(--ui-df-ease), padding 460ms var(--ui-df-ease), margin 460ms var(--ui-df-ease), opacity 300ms ease}.ui-df__del{background: var(--ui-df-del);color: var(--ui-df-del-ink);text-decoration: line-through;text-decoration-color: var(--ui-df-strike);text-decoration-thickness: 1.2px}.ui-df__ins{background: var(--ui-df-add);color: var(--ui-df-add-ink);text-decoration: none}.ui-df__del + .ui-df__ins{margin-left: 3px}.ui-df__chg[data-active] .ui-df__del{background: var(--ui-df-del-strong)}.ui-df__chg[data-active] .ui-df__ins{background: var(--ui-df-add-strong)}.ui-df__chg[data-state="accepted"] .ui-df__del, .ui-df__chg[data-state="rejected"] .ui-df__ins{font-size: 0;padding: 0;margin: 0;opacity: 0}.ui-df__chg[data-state="accepted"] .ui-df__ins, .ui-df__chg[data-state="rejected"] .ui-df__del{padding: 0;margin: 0;background: transparent;color: inherit;text-decoration-color: transparent}.ui-df__pop{position: absolute;top: 0;left: 0;z-index: 2;display: flex;align-items: center;gap: 2px;padding: 3px;border-radius: 10px;background: var(--ui-df-pop);color: var(--ui-df-pop-ink);box-shadow: 0 6px 20px -6px rgba(0, 0, 0, 0.35), 0 1px 2px rgba(0, 0, 0, 0.2);opacity: 0;visibility: hidden;transform: translateY(4px) scale(0.96);transform-origin: 50% 100%;pointer-events: none;transition: opacity 180ms ease, transform 260ms var(--ui-df-ease), left 320ms var(--ui-df-ease), top 320ms var(--ui-df-ease), visibility 0s 260ms}.ui-df__pop[data-open]{opacity: 1;visibility: visible;transform: none;pointer-events: auto;transition: opacity 180ms ease, transform 300ms var(--ui-df-ease), left 320ms var(--ui-df-ease), top 320ms var(--ui-df-ease), visibility 0s}.ui-df__pop[data-snap]{transition-property: opacity, transform, visibility}.ui-df__pbtn{appearance: none;display: inline-flex;align-items: center;gap: 6px;height: 28px;margin: 0;padding: 0 8px 0 7px;border: 0;border-radius: 7px;background: transparent;color: inherit;font: inherit;font-size: 12.5px;font-weight: 500;line-height: 1;white-space: nowrap;cursor: pointer;transition: background-color 140ms ease}.ui-df__pbtn:hover{background: var(--ui-df-pop-soft)}.ui-df__pbtn svg{width: 14px;height: 14px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-df__pbtn kbd{display: inline-grid;place-items: center;min-width: 17px;height: 17px;padding: 0 4px;border-radius: 4px;background: var(--ui-df-pop-soft);color: var(--ui-df-pop-kbd);font: inherit;font-size: 10.5px;font-weight: 500}.ui-df__sep{width: 1px;height: 16px;background: var(--ui-df-pop-soft)}.ui-df__sr{position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap;border: 0}@keyframes ui-df-draw{to{stroke-dashoffset: 0}}@media (max-width: 400px){.ui-df__nav{display: none}.ui-df__head{padding-left: 14px}.ui-df__label{padding-left: 6px}.ui-df__body{padding: 14px 14px 16px}}@media (hover: none) and (pointer: coarse){.ui-df__pbtn kbd{display: none}.ui-df__pbtn{height: 34px;padding: 0 11px 0 9px}}@media (prefers-reduced-motion: reduce){.ui-df *, .ui-df *::before, .ui-df *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;transition-duration: 1ms !important;transition-delay: 0ms !important}.ui-df__layer{filter: none;transform: none}}:where(.dark, [data-theme="dark"]) .ui-df{--ui-df-ink: #ededed;--ui-df-text: #b4b4b8;--ui-df-muted: #8b8b92;--ui-df-tray: #111113;--ui-df-line: #2a2a2e;--ui-df-bg: #19191b;--ui-df-soft: #232326;--ui-df-add: rgba(60, 200, 120, 0.13);--ui-df-add-strong: rgba(60, 200, 120, 0.22);--ui-df-add-ink: #6ee7a8;--ui-df-del: rgba(240, 90, 90, 0.12);--ui-df-del-strong: rgba(240, 90, 90, 0.2);--ui-df-del-ink: #ff8a80;--ui-df-strike: rgba(255, 138, 128, 0.6);--ui-df-ok: #5fd68f;--ui-df-pop: #f4f4f5;--ui-df-pop-ink: #171717;--ui-df-pop-soft: rgba(0, 0, 0, 0.08);--ui-df-pop-kbd: rgba(0, 0, 0, 0.5);--ui-df-primary: #ededed;--ui-df-primary-ink: #19191b;--ui-df-focus: rgba(255, 255, 255, 0.35);--ui-df-shadow: 0 1px 2px rgba(0, 0, 0, 0.3)}`;

export {
  UComponent
};
