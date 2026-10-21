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

// reconstructed/demo.clean-BjIF1-j-.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = 0;
var a = () => `step-${Date.now().toString(36)}-${(i++).toString(36)}`;
var o = Array.from({
  length: 8
}, (e, t) => t);
var s = (CRef_current, t, n4) => {
  let r2 = CRef_current.slice();
  let [i2] = r2.splice(t, 1);
  r2.splice(n4, 0, i2);
  return r2;
};
var c = () => typeof window < `u` && !!window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;
var l = (e) => {
  let transform = getComputedStyle(e).transform;
  if (!transform || transform === `none`) {
    return 0;
  }
  try {
    return new DOMMatrixReadOnly(transform).m42;
  } catch {
    return 0;
  }
};
var u = (e) => {
  let t = Math.max(0, e) / 1e3;
  if (t < 10) {
    return `${t.toFixed(1)}s`;
  }
  if (t < 60) {
    return `${Math.round(t)}s`;
  }
  let n4 = Math.round(t);
  return `${Math.floor(n4 / 60)}m ${String(n4 % 60).padStart(2, `0`)}s`;
};
var d = (e) => {
  let t = Math.max(1, Math.round(e / 1e3));
  if (t < 60) {
    return `${t}s`;
  }
  return `${Math.floor(t / 60)}m ${String(t % 60).padStart(2, `0`)}s`;
};
var f = {
  pending: `Pending`,
  active: `In progress`,
  done: `Done`,
  failed: `Failed`,
  skipped: `Skipped`
};
function P1Component({
  steps,
  defaultSteps = [],
  status = `draft`,
  onChange,
  onRun,
  onCancel,
  onRetry,
  title,
  estimate,
  className
}) {
  let [ee, setEe] = n3.useState(defaultSteps);
  let x = steps ?? ee;
  let S = status === `draft`;
  let CRef = n3.useRef(x);
  CRef.current = x;
  let [w, setW] = n3.useState(null);
  let ERef = n3.useRef(w);
  ERef.current = w;
  let [D, setD] = n3.useState(``);
  let [k, setK] = n3.useState([]);
  let [A, setA] = n3.useState(null);
  let [ie, setIe] = n3.useState(``);
  let [, setOe] = n3.useState(0);
  let [j, setJ] = n3.useState(null);
  let ceRef = n3.useRef(null);
  let MRef = n3.useRef(null);
  let NRef = n3.useRef(/* @__PURE__ */ new Map());
  let PRef = n3.useRef(/* @__PURE__ */ new Map());
  let FRef = n3.useRef(null);
  let IRef = n3.useRef(null);
  let LRef = n3.useRef(/* @__PURE__ */ new Set());
  let RRef = n3.useRef(/* @__PURE__ */ new Set());
  let zRef = n3.useRef(/* @__PURE__ */ new Map());
  let BRef = n3.useRef(/* @__PURE__ */ new Map());
  let VRef = n3.useRef(null);
  let leRef = n3.useRef(/* @__PURE__ */ new Map());
  let H = n3.useId();
  let ue = (e, t) => {
    let n4 = window.setTimeout(() => {
      RRef.current.delete(n4);
      e();
    }, t);
    RRef.current.add(n4);
  };
  n3.useEffect(() => {
    let RRef_current = RRef.current;
    return () => RRef_current.forEach((e) => window.clearTimeout(e));
  }, []);
  let U = (t) => {
    if (steps === void 0) {
      setEe(t);
    }
    onChange?.(t);
  };
  let W = (e) => setIe((t) => {
    if (t === e) {
      return `${e}\xA0`;
    }
    return e;
  });
  let G = x.map((e) => e.id).join(`
`);
  let deRef = n3.useRef(G);
  n3.useLayoutEffect(() => {
    let e = deRef.current !== G;
    deRef.current = G;
    let t = /* @__PURE__ */ new Map();
    let n4 = e && !c();
    NRef.current.forEach((r2, i2) => {
      let r_offsetTop = r2.offsetTop;
      t.set(i2, r_offsetTop);
      if (!e) {
        return;
      }
      let o2 = PRef.current.get(i2);
      if (n4 && o2 !== void 0 && o2 !== r_offsetTop) {
        r2.style.transition = `none`;
        r2.style.transform = `translateY(${o2 - r_offsetTop}px)`;
        r2.getBoundingClientRect();
      }
      r2.style.transition = ``;
      r2.style.transform = ``;
    });
    PRef.current = t;
    if (IRef.current) {
      let e2 = NRef.current.get(IRef.current);
      IRef.current = null;
      if (e2 && document.activeElement !== e2) {
        e2.focus();
      }
    }
  });
  let feRef = n3.useRef(status);
  n3.useLayoutEffect(() => {
    let feRef_current = feRef.current;
    feRef.current = status;
    if (status === `running` && (VRef.current === null || feRef_current === `done`)) {
      VRef.current = Date.now();
    }
    if (status === `draft`) {
      VRef.current = null;
      setJ(null);
    }
    if (status === `done`) {
      let e = CRef.current.reduce((acc, item) => acc + (item.duration ?? BRef.current.get(item.id) ?? 0), 0);
      setJ(VRef.current === null ? e : Date.now() - VRef.current);
    }
  }, [status]);
  n3.useLayoutEffect(() => {
    x.forEach((e) => {
      let t = e.status ?? `pending`;
      if (t === `active`) {
        if (!zRef.current.has(e.id)) {
          zRef.current.set(e.id, Date.now());
        }
      } else if (zRef.current.has(e.id)) {
        if (t === `done`) {
          BRef.current.set(e.id, Date.now() - zRef.current.get(e.id));
        }
        zRef.current.delete(e.id);
      }
      if (t === `pending`) {
        BRef.current.delete(e.id);
      }
    });
  });
  n3.useEffect(() => {
    if (status !== `running`) {
      return;
    }
    let e = window.setInterval(() => setOe((e2) => e2 + 1), 100);
    return () => window.clearInterval(e);
  }, [status]);
  n3.useEffect(() => {
    let e = [];
    x.forEach((t, n4) => {
      let r2 = t.status ?? `pending`;
      let i2 = leRef.current.get(t.id);
      if (!S && i2 !== void 0 && i2 !== r2) {
        if (r2 === `done`) {
          e.push(`Step ${n4 + 1} done: ${t.title}`);
        }
        if (r2 === `failed`) {
          e.push(`Step ${n4 + 1} failed: ${t.title}${t.error ? `. ${t.error}` : ``}`);
        }
        if (r2 === `skipped`) {
          e.push(`Step ${n4 + 1} skipped`);
        }
      }
      leRef.current.set(t.id, r2);
    });
    if (e.length) {
      W(e.join(`. `));
    }
  });
  n3.useEffect(() => {
    if (status === `running`) {
      W(`Running plan`);
    }
    if (status === `done` && j !== null) {
      W(`Plan done in ${d(j)}`);
    }
  }, [status, j]);
  n3.useEffect(() => {
    if (!S) {
      setW(null);
      setD(``);
    }
  }, [S]);
  let K = (e) => {
    if (e) {
      NRef.current.get(e)?.focus();
    } else {
      MRef.current?.focus();
    }
  };
  let pe = (e, t) => {
    let CRef_current = CRef.current;
    let r2 = CRef_current.findIndex((t2) => t2.id === e);
    let i2 = r2 + t;
    if (!(r2 < 0 || i2 < 0 || i2 >= CRef_current.length)) {
      IRef.current = e;
      U(s(CRef_current, r2, i2));
      W(`Moved \u201C${CRef_current[r2].title}\u201D to position ${i2 + 1} of ${CRef_current.length}`);
    }
  };
  let me = (e) => {
    if (!S || k.includes(e)) {
      return;
    }
    let CRef_current = CRef.current;
    let n4 = CRef_current.findIndex((t) => t.id === e);
    if (n4 < 0) {
      return;
    }
    let r2 = NRef.current.get(e);
    if (r2?.contains(document.activeElement)) {
      K((CRef_current[n4 + 1] ?? CRef_current[n4 - 1])?.id);
    }
    W(`Removed \u201C${CRef_current[n4].title}\u201D`);
    if (!r2 || c()) {
      U(CRef_current.filter((t) => t.id !== e));
      return;
    }
    r2.style.height = `${r2.offsetHeight}px`;
    r2.getBoundingClientRect();
    setK((t) => [...t, e]);
    ue(() => {
      r2.style.height = ``;
      setK((t) => t.filter((t2) => t2 !== e));
      U(CRef.current.filter((t) => t.id !== e));
    }, 260);
  };
  let he = (e) => {
    if (!S) {
      return;
    }
    let t = CRef.current.find((t2) => t2.id === e);
    if (t) {
      setW({
        id: e,
        value: t.title
      });
    }
  };
  let q = (e, t = false) => {
    let ERef_current = ERef.current;
    if (!ERef_current) {
      return;
    }
    ERef.current = null;
    setW(null);
    if (t) {
      IRef.current = ERef_current.id;
    }
    let r2 = ERef_current.value.trim();
    let i2 = CRef.current.find((e2) => e2.id === ERef_current.id);
    if (e && i2 && r2 && r2 !== i2.title) {
      U(CRef.current.map((e2) => {
        if (e2.id === ERef_current.id) {
          return {
            ...e2,
            title: r2
          };
        }
        return e2;
      }));
      W(`Renamed to \u201C${r2}\u201D`);
    }
  };
  let ge = () => {
    let e = D.trim();
    if (!e) {
      return;
    }
    let t = a();
    LRef.current.add(t);
    U([...CRef.current, {
      id: t,
      title: e
    }]);
    setD(``);
    W(`Added \u201C${e}\u201D as step ${CRef.current.length + 1}`);
  };
  let _e = (e, t) => {
    if (!S || e.target !== e.currentTarget) {
      return;
    }
    let CRef_current = CRef.current;
    let r2 = CRef_current.findIndex((e2) => e2.id === t);
    if (e.altKey && (e.key === `ArrowUp` || e.key === `ArrowDown`)) {
      e.preventDefault();
      pe(t, e.key === `ArrowUp` ? -1 : 1);
    } else if (e.key === `ArrowUp` || e.key === `ArrowDown`) {
      e.preventDefault();
      let t2 = CRef_current[r2 + (e.key === `ArrowUp` ? -1 : 1)];
      if (t2) {
        K(t2.id);
      } else if (e.key === `ArrowDown`) {
        MRef.current?.focus();
      }
    } else {
      if (e.key === `Enter` || e.key === `F2`) {
        e.preventDefault();
        he(t);
      } else if (e.key === `Delete` || e.key === `Backspace`) {
        e.preventDefault();
        me(t);
      }
    }
  };
  let ve = (e, t) => {
    if (!S || e.button !== 0 || ERef.current || k.length) {
      return;
    }
    let ids = CRef.current.map((e2) => e2.id);
    let r2 = ids.map((e2) => NRef.current.get(e2));
    if (r2.some((e2) => !e2)) {
      return;
    }
    let i2 = r2;
    let a2 = ids.indexOf(t);
    let o2 = i2[a2];
    let s2 = o2.offsetHeight ? o2.getBoundingClientRect().height / o2.offsetHeight : 1;
    e.preventDefault();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
    }
    FRef.current = {
      id: t,
      pointer: e.pointerId,
      ids,
      from: a2,
      to: a2,
      startY: e.clientY,
      scale: s2 || 1,
      dy: 0,
      tops: i2.map((e2) => e2.offsetTop),
      heights: i2.map((e2) => e2.offsetHeight)
    };
    setA(t);
  };
  let onPointerMove = (e) => {
    let FRef_current = FRef.current;
    if (!FRef_current || FRef_current.pointer !== e.pointerId) {
      return;
    }
    let n4 = FRef_current.ids.length - 1;
    let r2 = FRef_current.tops[0] - FRef_current.tops[FRef_current.from];
    let i2 = FRef_current.tops[n4] + FRef_current.heights[n4] - (FRef_current.tops[FRef_current.from] + FRef_current.heights[FRef_current.from]);
    FRef_current.dy = Math.min(i2, Math.max(r2, (e.clientY - FRef_current.startY) / FRef_current.scale));
    NRef.current.get(FRef_current.id)?.style.setProperty(`transform`, `translateY(${FRef_current.dy}px)`);
    let a2 = FRef_current.tops[FRef_current.from] + FRef_current.dy + FRef_current.heights[FRef_current.from] / 2;
    let o2 = 0;
    FRef_current.ids.forEach((e2, n5) => {
      if (n5 !== FRef_current.from && FRef_current.tops[n5] + FRef_current.heights[n5] / 2 < a2) {
        o2++;
      }
    });
    if (o2 === FRef_current.to) {
      return;
    }
    FRef_current.to = o2;
    let s2 = FRef_current.heights[FRef_current.from];
    FRef_current.ids.forEach((e2, n5) => {
      if (n5 === FRef_current.from) {
        return;
      }
      let r3 = FRef_current.from < o2 && n5 > FRef_current.from && n5 <= o2 ? -s2 : o2 < FRef_current.from && n5 >= o2 && n5 < FRef_current.from ? s2 : 0;
      let i3 = NRef.current.get(e2);
      if (i3) {
        i3.style.transform = r3 ? `translateY(${r3}px)` : ``;
      }
    });
  };
  let J = (e) => {
    let FRef_current = FRef.current;
    if (!FRef_current || FRef_current.pointer !== e.pointerId) {
      return;
    }
    FRef.current = null;
    setA(null);
    if (FRef_current.to === FRef_current.from) {
      let e2 = NRef.current.get(FRef_current.id);
      if (e2) {
        e2.style.transform = ``;
      }
      return;
    }
    NRef.current.forEach((e2, t) => {
      PRef.current.set(t, e2.offsetTop + l(e2));
      e2.style.transition = `none`;
      e2.style.transform = ``;
    });
    let CRef_current = CRef.current;
    let r2 = CRef_current.find((e2) => e2.id === FRef_current.id);
    U(s(CRef_current, FRef_current.from, FRef_current.to));
    requestAnimationFrame(() => NRef.current.forEach((e2) => e2.style.transition = ``));
    if (r2) {
      W(`Moved \u201C${r2.title}\u201D to position ${FRef_current.to + 1} of ${CRef_current.length}`);
    }
  };
  let x_length = x.length;
  let X = (e) => e.status ?? `pending`;
  let Z = x.findIndex((e) => X(e) === `active`);
  let be = x.findIndex((e) => X(e) === `failed`);
  let length = x.filter((e) => X(e) === `done` || X(e) === `skipped`).length;
  let Se = Date.now();
  let Q = `draft`;
  let $ = ``;
  if (status === `done`) {
    Q = `done`;
    $ = `Done in ${d(j ?? 0)}`;
  } else {
    if (status === `running`) {
      if (be >= 0 && Z < 0) {
        Q = `failed`;
        $ = `Stopped \xB7 step ${be + 1} failed`;
      } else {
        Q = `running`;
        $ = `Running \xB7 ${Z >= 0 ? Z + 1 : Math.min(length + 1, x_length)} of ${x_length}`;
      }
    }
  }
  let Ce = VRef.current === null ? 0 : Se - VRef.current;
  return /* @__PURE__ */ jsxs("div", { ref: ceRef, className: [`ui-plc`, className].filter(Boolean).join(` `), "data-status": status, "data-dragging": A ? `` : void 0, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-agent-plan-clean`, precedence: `default`, children: h }),
    /* @__PURE__ */ jsxs("div", { className: `ui-plc__card`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-plc__head`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-plc__meta`, children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-plc__state`, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-plc__state-icon`, "aria-hidden": `true`, children: /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, children: [
              /* @__PURE__ */ jsx("path", { d: `M6.5 4.5h7M6.5 8h7M6.5 11.5h7` }),
              /* @__PURE__ */ jsx("circle", { cx: `3.25`, cy: `4.5`, r: `.6` }),
              /* @__PURE__ */ jsx("circle", { cx: `3.25`, cy: `8`, r: `.6` }),
              /* @__PURE__ */ jsx("circle", { cx: `3.25`, cy: `11.5`, r: `.6` })
            ] }) }),
            /* @__PURE__ */ jsxs("span", { className: `ui-plc__state-label`, children: [
              `Plan \xB7 `,
              x_length,
              ` `,
              x_length === 1 ? `step` : `steps`
            ] })
          ] }),
          S && estimate ? /* @__PURE__ */ jsxs("span", { className: `ui-plc__estimate`, children: [
            /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [
              /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `6` }),
              /* @__PURE__ */ jsx("path", { d: `M8 5v3.2l2 1.3` })
            ] }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("span", { className: `ui-plc__sr`, children: `Estimated time ` }),
              estimate
            ] })
          ] }) : null
        ] }),
        title && /* @__PURE__ */ jsx("h3", { className: `ui-plc__title`, children: title })
      ] }),
      /* @__PURE__ */ jsx("p", { id: H, className: `ui-plc__sr`, children: `Press Enter to rename, Alt plus arrow keys to move, Delete to remove.` }),
      /* @__PURE__ */ jsx("ol", { className: `ui-plc__list`, "aria-label": title ? `Plan: ${title}` : `Plan`, children: x.map((e, t) => {
        let n4 = X(e);
        let i2 = S && w?.id === e.id;
        let a2 = e.duration ?? BRef.current.get(e.id);
        let o2 = zRef.current.get(e.id);
        return /* @__PURE__ */ jsxs("li", { ref: (t2) => {
          if (t2) {
            NRef.current.set(e.id, t2);
          }
          return () => {
            NRef.current.delete(e.id);
          };
        }, className: `ui-plc__step`, "data-step": S ? void 0 : n4, "data-dragging": A === e.id ? `` : void 0, "data-removing": k.includes(e.id) ? `` : void 0, "data-enter": LRef.current.has(e.id) ? `` : void 0, onAnimationEnd: (t2) => {
          if (t2.target === t2.currentTarget) {
            LRef.current.delete(e.id);
          }
        }, tabIndex: S && !i2 ? 0 : void 0, "aria-describedby": S ? H : void 0, "aria-current": n4 === `active` && !S ? `step` : void 0, onKeyDown: (t2) => _e(t2, e.id), children: [
          S && /* @__PURE__ */ jsx("span", { className: `ui-plc__grip`, "aria-hidden": `true`, title: `Drag to reorder`, onPointerDown: (t2) => ve(t2, e.id), onPointerMove, onPointerUp: J, onPointerCancel: J, children: /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, children: [
            /* @__PURE__ */ jsx("circle", { cx: `6`, cy: `4`, r: `1.1` }),
            /* @__PURE__ */ jsx("circle", { cx: `10`, cy: `4`, r: `1.1` }),
            /* @__PURE__ */ jsx("circle", { cx: `6`, cy: `8`, r: `1.1` }),
            /* @__PURE__ */ jsx("circle", { cx: `10`, cy: `8`, r: `1.1` }),
            /* @__PURE__ */ jsx("circle", { cx: `6`, cy: `12`, r: `1.1` }),
            /* @__PURE__ */ jsx("circle", { cx: `10`, cy: `12`, r: `1.1` })
          ] }) }),
          /* @__PURE__ */ jsx("span", { className: `ui-plc__marker`, "aria-hidden": `true`, children: S || n4 === `pending` ? /* @__PURE__ */ jsx("span", { className: `ui-plc__num`, children: t + 1 }) : n4 === `active` ? /* @__PURE__ */ jsx(M1Component, {}) : n4 === `done` ? /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, className: `ui-plc__mark`, children: /* @__PURE__ */ jsx("path", { d: `M4.2 8.4 6.8 11l5-5.6`, pathLength: 1, className: `ui-plc__draw` }) }) : n4 === `failed` ? /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, className: `ui-plc__mark`, children: /* @__PURE__ */ jsx("path", { d: `M8 4.2v4.4M8 11.6h.01` }) }) : /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, className: `ui-plc__mark`, children: /* @__PURE__ */ jsx("path", { d: `M5 8h6` }) }) }),
          /* @__PURE__ */ jsxs("div", { className: `ui-plc__main`, children: [
            i2 ? /* @__PURE__ */ jsx("input", { className: `ui-plc__edit`, value: w.value, "aria-label": `Rename step ${t + 1}`, autoFocus: true, onFocus: (e2) => e2.currentTarget.select(), onChange: (t2) => setW({
              id: e.id,
              value: t2.target.value
            }), onBlur: () => q(true), onKeyDown: (e2) => {
              if (e2.key === `Enter`) {
                e2.preventDefault();
                q(true, true);
              } else if (e2.key === `Escape`) {
                e2.preventDefault();
                e2.stopPropagation();
                q(false, true);
              }
            } }) : /* @__PURE__ */ jsx("span", { className: `ui-plc__name`, onDoubleClick: () => he(e.id), children: e.title }),
            (e.detail || e.tool) && /* @__PURE__ */ jsxs("span", { className: `ui-plc__sub`, children: [
              e.detail && /* @__PURE__ */ jsx("span", { className: `ui-plc__detail`, children: e.detail }),
              e.tool && /* @__PURE__ */ jsx("code", { className: `ui-plc__tool`, children: e.tool })
            ] }),
            !S && /* @__PURE__ */ jsxs("span", { className: `ui-plc__sr`, children: [
              `, `,
              f[n4]
            ] }),
            !S && n4 === `failed` && /* @__PURE__ */ jsxs("span", { className: `ui-plc__fail`, children: [
              /* @__PURE__ */ jsx("span", { className: `ui-plc__error`, children: e.error ?? `This step failed` }),
              onRetry && /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-plc__retry`, onClick: () => onRetry(e.id), children: [
                /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [
                  /* @__PURE__ */ jsx("path", { d: `M13 8a5 5 0 1 1-1.6-3.7` }),
                  /* @__PURE__ */ jsx("path", { d: `M13 3v2.6h-2.6` })
                ] }),
                `Retry from here`
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("span", { className: `ui-plc__aside`, children: S ? /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-plc__remove`, "aria-label": `Remove step ${t + 1}: ${e.title}`, onClick: () => me(e.id), children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M4.5 4.5l7 7M11.5 4.5l-7 7` }) }) }) : n4 === `active` ? /* @__PURE__ */ jsx("span", { className: `ui-plc__time`, "aria-hidden": `true`, children: u(o2 === void 0 ? 0 : Se - o2) }) : n4 === `done` && a2 !== void 0 ? /* @__PURE__ */ jsxs("span", { className: `ui-plc__time ui-plc__time--done`, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-plc__sr`, children: `took ` }),
            u(a2)
          ] }) : n4 === `skipped` ? /* @__PURE__ */ jsx("span", { className: `ui-plc__time`, "aria-hidden": `true`, children: `Skipped` }) : null }),
          t < x_length - 1 && /* @__PURE__ */ jsx("span", { className: `ui-plc__rail`, "aria-hidden": `true` })
        ] }, e.id);
      }) }),
      /* @__PURE__ */ jsx("div", { className: `ui-plc__tail`, inert: !S, children: /* @__PURE__ */ jsx("div", { className: `ui-plc__tail-inner`, children: /* @__PURE__ */ jsxs("label", { className: `ui-plc__add`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-plc__add-icon`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, children: /* @__PURE__ */ jsx("path", { d: `M8 4.5v7M4.5 8h7` }) }) }),
        /* @__PURE__ */ jsx("input", { ref: MRef, value: D, placeholder: `Add step`, "aria-label": `Add a step at the end`, enterKeyHint: `done`, onChange: (e) => setD(e.target.value), onKeyDown: (e) => {
          if (e.key === `Enter`) {
            e.preventDefault();
            ge();
          } else if (e.key === `Escape`) {
            setD(``);
          } else if (e.key === `ArrowUp` && !D) {
            let t = CRef.current[CRef.current.length - 1];
            if (t) {
              e.preventDefault();
              K(t.id);
            }
          }
        } })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: `ui-plc__foot`, "data-phase": Q, children: Q === `draft` ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("span", { className: `ui-plc__hint`, "aria-hidden": `true`, children: `Drag to reorder \xB7 double-click to rename` }),
        /* @__PURE__ */ jsxs("span", { className: `ui-plc__actions`, children: [
          onCancel && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-plc__btn ui-plc__btn--secondary`, onClick: onCancel, children: `Cancel` }),
          /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-plc__btn ui-plc__btn--primary ui-plc__run`, disabled: !x_length, onClick: () => onRun?.(CRef.current), children: [
            `Run plan`,
            /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M5.5 3.8v8.4L12 8z` }) })
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("span", { className: `ui-plc__status`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-plc__status-icon`, "aria-hidden": `true`, children: Q === `running` ? /* @__PURE__ */ jsx(M1Component, {}) : Q === `done` ? /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, className: `ui-plc__badge`, children: [
            /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `7` }),
            /* @__PURE__ */ jsx("path", { d: `M5.2 8.2 7.1 10l3.7-4`, pathLength: 1, className: `ui-plc__draw` })
          ] }) : /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, className: `ui-plc__badge`, children: [
            /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `7` }),
            /* @__PURE__ */ jsx("path", { d: `M8 4.8v3.8M8 11.2h.01` })
          ] }) }),
          /* @__PURE__ */ jsx("span", { className: Q === `running` ? `ui-plc__status-label ui-plc__shimmer` : `ui-plc__status-label`, "data-text": $, children: $ })
        ] }),
        Q === `running` ? /* @__PURE__ */ jsx("span", { className: `ui-plc__elapsed`, "aria-hidden": `true`, children: d(Ce) }) : Q === `done` && onRun ? /* @__PURE__ */ jsx("span", { className: `ui-plc__actions`, children: /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-plc__btn ui-plc__btn--secondary ui-plc__again`, onClick: () => onRun(CRef.current), children: [
          /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [
            /* @__PURE__ */ jsx("path", { d: `M13 8a5 5 0 1 1-1.6-3.7` }),
            /* @__PURE__ */ jsx("path", { d: `M13 3v2.6h-2.6` })
          ] }),
          `Run again`
        ] }) }) : null
      ] }) }, Q)
    ] }),
    /* @__PURE__ */ jsx("p", { className: `ui-plc__sr`, role: `status`, "aria-live": `polite`, children: ie })
  ] });
}
function M1Component() {
  return /* @__PURE__ */ jsx("svg", { className: `ui-plc__spinner`, viewBox: `0 0 16 16`, children: o.map((e) => /* @__PURE__ */ jsx("line", { x1: `8`, y1: `1.75`, x2: `8`, y2: `4.75`, transform: `rotate(${e * 45} 8 8)`, style: {
    animationDelay: `${(e - 8) * 100}ms`
  } }, e)) });
}
var h = `.ui-plc{--ui-plc-card: #ffffff;--ui-plc-ink: rgba(0, 0, 0, 0.88);--ui-plc-strong: #000000;--ui-plc-text: rgba(0, 0, 0, 0.61);--ui-plc-muted: rgba(0, 0, 0, 0.45);--ui-plc-faint: rgba(0, 0, 0, 0.27);--ui-plc-icon: rgba(0, 0, 0, 0.447);--ui-plc-line: rgba(0, 0, 0, 0.06);--ui-plc-ring: rgba(0, 0, 0, 0.1);--ui-plc-rail: rgba(0, 0, 0, 0.08);--ui-plc-fill: rgba(0, 0, 0, 0.06);--ui-plc-wash: rgba(0, 0, 0, 0.03);--ui-plc-chip: rgba(0, 0, 0, 0.045);--ui-plc-accent: rgba(0, 96, 226, 0.765);--ui-plc-on-accent: #ffffff;--ui-plc-red: #e5484d;--ui-plc-red-bg: rgba(229, 72, 77, 0.08);--ui-plc-primary: rgba(0, 0, 0, 0.88);--ui-plc-primary-hover: rgba(0, 0, 0, 0.78);--ui-plc-on-primary: #fcfcfc;--ui-plc-raise-hover: #fafafa;--ui-plc-shine: rgba(255, 255, 255, 0.82);--ui-plc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-plc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-plc-focus: rgba(0, 96, 226, 0.35);--ui-plc-edit-glow: rgba(0, 96, 226, 0.1);--ui-plc-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-plc-inset: 30px;container-type: inline-size;position: relative;box-sizing: border-box;display: grid;width: 100%;max-width: 440px;color: var(--ui-plc-ink);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;font-weight: 400;line-height: 20px;text-align: left;-webkit-font-smoothing: antialiased}.ui-plc__card{position: relative;border-radius: 10px;background: var(--ui-plc-card);box-shadow: var(--ui-plc-shadow)}.ui-plc:not([data-status="draft"]){--ui-plc-inset: 10px}.ui-plc[data-dragging]{cursor: grabbing;user-select: none;-webkit-user-select: none}.ui-plc *, .ui-plc *::before, .ui-plc *::after{box-sizing: border-box}.ui-plc svg{display: block;width: 100%;height: 100%;overflow: visible}:where(.ui-plc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;letter-spacing: inherit;color: inherit;cursor: pointer}.ui-plc__sr{position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap;border: 0}.ui-plc__head{display: grid;gap: 4px;padding: 16px 16px 10px}.ui-plc__meta{display: flex;align-items: center;gap: 10px;min-height: 16px;font-size: 12px;line-height: 16px;color: var(--ui-plc-muted)}.ui-plc__state{display: inline-flex;align-items: center;gap: 6px;min-width: 0}.ui-plc__state-label{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-plc__state-icon{flex: none;width: 16px;height: 16px;color: var(--ui-plc-icon);fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-plc__state-icon circle[r=".6"]{fill: currentColor}.ui-plc__estimate{display: inline-flex;align-items: center;gap: 6px;margin-left: auto;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-plc__estimate svg{width: 16px;height: 16px;color: var(--ui-plc-icon);fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-plc__title{margin: 0;color: var(--ui-plc-strong);font-size: 15px;font-weight: 500;line-height: 24px;text-wrap: balance}.ui-plc__list{position: relative;margin: 0;padding: 0 6px 6px;list-style: none}.ui-plc__step{position: relative;display: grid;grid-template-columns: 20px minmax(0, 1fr) auto;column-gap: 10px;align-items: start;padding: 8px 10px 8px var(--ui-plc-inset);border-radius: 6px;outline: none;transition: transform 420ms var(--ui-plc-ease), padding 420ms var(--ui-plc-ease), height 260ms var(--ui-plc-ease), opacity 180ms ease, background-color 140ms ease, box-shadow 200ms ease}.ui-plc[data-status="draft"] .ui-plc__step:hover{background: var(--ui-plc-wash)}.ui-plc__step:focus-visible{outline: 2px solid var(--ui-plc-focus);outline-offset: 0}.ui-plc__step[data-dragging]{z-index: 2;background: var(--ui-plc-card) !important;box-shadow: var(--ui-plc-shadow-pop);transition: background-color 140ms ease, box-shadow 200ms ease}.ui-plc__step[data-removing]{height: 0 !important;padding-top: 0;padding-bottom: 0;overflow: hidden;opacity: 0;pointer-events: none}.ui-plc__step[data-enter]{animation: ui-plc-enter 380ms var(--ui-plc-ease) both}.ui-plc__grip{position: absolute;top: 8px;left: 6px;display: grid;place-items: center;width: 18px;height: 20px;border-radius: 5px;color: var(--ui-plc-faint);fill: currentColor;cursor: grab;touch-action: none;opacity: 0;transition: opacity 140ms ease, color 140ms ease, background-color 140ms ease}.ui-plc__grip svg{width: 16px;height: 16px}.ui-plc__step:hover .ui-plc__grip, .ui-plc__step:focus-visible .ui-plc__grip, .ui-plc__step[data-dragging] .ui-plc__grip{opacity: 1}.ui-plc__grip:hover, .ui-plc__step[data-dragging] .ui-plc__grip{color: var(--ui-plc-icon);background: var(--ui-plc-fill)}.ui-plc__step[data-dragging] .ui-plc__grip{cursor: grabbing}.ui-plc__marker{position: relative;z-index: 1;display: grid;place-items: center;width: 20px;height: 20px;border-radius: 50%;background: var(--ui-plc-card);box-shadow: inset 0 0 0 0.5px var(--ui-plc-ring), 0 1px 1px -1px rgba(0, 0, 0, 0.1);color: var(--ui-plc-muted);font-size: 11px;font-weight: 500;line-height: 1;font-variant-numeric: tabular-nums;transition: background-color 320ms ease, color 320ms ease, box-shadow 320ms ease}.ui-plc__marker > *{grid-area: 1 / 1;animation: ui-plc-pop 360ms var(--ui-plc-ease) both}.ui-plc__num{animation: none !important}.ui-plc__marker .ui-plc__spinner{width: 14px;height: 14px}.ui-plc__mark{width: 12px !important;height: 12px !important;fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round}.ui-plc__step[data-step="active"] .ui-plc__marker{box-shadow: none;color: var(--ui-plc-accent)}.ui-plc__step[data-step="done"] .ui-plc__marker{background: var(--ui-plc-accent);box-shadow: none;color: var(--ui-plc-on-accent)}.ui-plc__step[data-step="failed"] .ui-plc__marker{background: var(--ui-plc-red-bg);box-shadow: none;color: var(--ui-plc-red)}.ui-plc__step[data-step="skipped"] .ui-plc__marker{box-shadow: none;outline: 1px dashed var(--ui-plc-faint);outline-offset: -1px}.ui-plc__draw{stroke-dasharray: 1;stroke-dashoffset: 1;animation: ui-plc-draw 420ms var(--ui-plc-ease) 80ms forwards}.ui-plc__spinner line{stroke: currentColor;stroke-width: 1.4;stroke-linecap: round;opacity: 0.18;animation: ui-plc-ray 800ms linear infinite}.ui-plc__main{display: grid;gap: 2px;min-width: 0}.ui-plc__name{color: var(--ui-plc-ink);font-weight: 500;overflow-wrap: anywhere;transition: color 300ms ease}.ui-plc[data-status="draft"] .ui-plc__name{cursor: text}.ui-plc__step[data-step="pending"] .ui-plc__name{color: var(--ui-plc-text)}.ui-plc__step[data-step="skipped"] .ui-plc__name{color: var(--ui-plc-muted);text-decoration: line-through;text-decoration-color: var(--ui-plc-faint)}.ui-plc__sub{display: flex;flex-wrap: wrap;align-items: center;gap: 4px 8px;min-width: 0;color: var(--ui-plc-muted);font-size: 12px;line-height: 16px}.ui-plc__detail{min-width: 0;overflow-wrap: anywhere}.ui-plc__tool{padding: 0 5px;border-radius: 5px;background: var(--ui-plc-chip);color: var(--ui-plc-text);font-family: ui-monospace, "SF Mono", Menlo, monospace;font-size: 11px;line-height: 16px;letter-spacing: 0;white-space: nowrap}.ui-plc__edit{width: calc(100% + 14px);height: 28px;margin: -4px -7px;padding: 0 6px;border: 0;border-radius: 6px;background: var(--ui-plc-card);box-shadow: 0 0 0 0.5px var(--ui-plc-focus), 0 0 0 3px var(--ui-plc-edit-glow);color: var(--ui-plc-ink);font: inherit;font-weight: 500;letter-spacing: inherit;outline: none}.ui-plc__fail{display: grid;justify-items: start;gap: 8px;margin-top: 4px;animation: ui-plc-fade 360ms var(--ui-plc-ease) both}.ui-plc__error{color: var(--ui-plc-red);font-size: 12px;line-height: 16px;overflow-wrap: anywhere}.ui-plc__retry, .ui-plc__btn{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 10px;border-radius: 6px;font-size: 13px;font-weight: 500;white-space: nowrap;transition: background-color 140ms ease, opacity 140ms ease, transform 160ms var(--ui-plc-ease)}.ui-plc__retry, .ui-plc__btn--secondary{background: var(--ui-plc-card);box-shadow: var(--ui-plc-shadow);color: var(--ui-plc-strong)}.ui-plc__retry, .ui-plc__again{padding: 0 10px 0 8px}.ui-plc__retry svg, .ui-plc__btn--secondary svg{width: 16px;height: 16px;color: var(--ui-plc-icon);fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-plc__retry:hover, .ui-plc__btn--secondary:hover{background: var(--ui-plc-raise-hover)}.ui-plc__retry:active, .ui-plc__btn:active{transform: scale(0.97)}.ui-plc__aside{display: flex;align-items: center;min-height: 20px;color: var(--ui-plc-muted);font-size: 12px;font-variant-numeric: tabular-nums;white-space: nowrap}.ui-plc__time{animation: ui-plc-fade 300ms ease both}.ui-plc__step[data-step="active"] .ui-plc__time{color: var(--ui-plc-ink)}.ui-plc__remove{display: grid;place-items: center;width: 28px;height: 28px;margin: -4px -6px -4px 0;border-radius: 6px;color: var(--ui-plc-icon);fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;opacity: 0;transition: opacity 140ms ease, color 140ms ease, background-color 140ms ease}.ui-plc__remove svg{width: 16px;height: 16px}.ui-plc__step:hover .ui-plc__remove, .ui-plc__step:focus-visible .ui-plc__remove, .ui-plc__remove:focus-visible{opacity: 1}.ui-plc__remove:hover{color: var(--ui-plc-ink);background: var(--ui-plc-wash)}.ui-plc__remove:focus-visible, .ui-plc__retry:focus-visible, .ui-plc__btn:focus-visible{outline: 2px solid var(--ui-plc-focus);outline-offset: 1px}.ui-plc__rail{position: absolute;top: 31px;bottom: -5px;left: calc(var(--ui-plc-inset) + 9.5px);width: 1px;overflow: hidden;background: var(--ui-plc-rail);opacity: 0;pointer-events: none;transition: opacity 300ms ease}.ui-plc:not([data-status="draft"]) .ui-plc__rail{opacity: 1;transition-delay: 240ms}.ui-plc__rail::after{content: "";position: absolute;inset: 0;background: var(--ui-plc-accent);transform: scaleY(0);transform-origin: top;transition: transform 560ms var(--ui-plc-ease)}.ui-plc__step[data-step="done"] .ui-plc__rail::after, .ui-plc__step[data-step="skipped"] .ui-plc__rail::after{transform: scaleY(1)}.ui-plc__tail{display: grid;grid-template-rows: 1fr;transition: grid-template-rows 420ms var(--ui-plc-ease), opacity 260ms ease}.ui-plc:not([data-status="draft"]) .ui-plc__tail{grid-template-rows: 0fr;opacity: 0}.ui-plc__tail-inner{min-height: 0;overflow: hidden}.ui-plc__add{display: grid;grid-template-columns: 20px minmax(0, 1fr);column-gap: 10px;align-items: center;margin: -4px 6px 8px;padding: 6px 10px 6px var(--ui-plc-inset);border-radius: 6px;cursor: text;transition: background-color 140ms ease}.ui-plc__add:hover, .ui-plc__add:focus-within{background: var(--ui-plc-wash)}.ui-plc__add-icon{display: grid;place-items: center;width: 20px;height: 20px;color: var(--ui-plc-icon);fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round}.ui-plc__add-icon svg{width: 16px;height: 16px}.ui-plc__add input{width: 100%;min-width: 0;height: 20px;padding: 0;border: 0;background: none;color: var(--ui-plc-ink);font: inherit;letter-spacing: inherit;outline: none}.ui-plc__add input::placeholder{color: var(--ui-plc-faint);opacity: 1}.ui-plc__foot{display: flex;align-items: center;gap: 12px;min-height: 48px;padding: 0 10px 0 16px;border-top: 0.5px solid var(--ui-plc-line);color: var(--ui-plc-muted);font-size: 12px;line-height: 16px}.ui-plc__foot > *{animation: ui-plc-fade 320ms var(--ui-plc-ease) both}.ui-plc__hint{min-width: 0;overflow: hidden;text-overflow: ellipsis;white-space: nowrap}.ui-plc__actions{display: flex;flex: none;gap: 8px;margin-left: auto}.ui-plc__btn--primary{padding: 0 8px 0 10px;background: var(--ui-plc-primary);color: var(--ui-plc-on-primary)}.ui-plc__btn--primary:hover{background: var(--ui-plc-primary-hover)}.ui-plc__btn--primary:disabled{opacity: 0.4;cursor: default;transform: none}.ui-plc__btn--primary svg{width: 16px;height: 16px;fill: currentColor}.ui-plc__status{display: inline-flex;align-items: center;gap: 8px;min-width: 0;color: var(--ui-plc-ink);font-size: 13px;line-height: 20px}.ui-plc__status-icon{flex: none;width: 16px;height: 16px;color: var(--ui-plc-accent)}.ui-plc__status-icon .ui-plc__spinner{width: 14px;height: 14px;margin: 1px}.ui-plc__badge circle{fill: currentColor}.ui-plc__badge path{fill: none;stroke: var(--ui-plc-on-accent);stroke-width: 1.4;stroke-linecap: round;stroke-linejoin: round}.ui-plc__foot[data-phase="failed"] .ui-plc__status-icon{color: var(--ui-plc-red-bg)}.ui-plc__foot[data-phase="failed"] .ui-plc__badge path{stroke: var(--ui-plc-red);stroke-width: 1.6}.ui-plc__foot[data-phase="failed"] .ui-plc__status{color: var(--ui-plc-red)}.ui-plc__status-label{position: relative;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-plc__foot[data-phase="done"] .ui-plc__status-label{font-weight: 500}.ui-plc__shimmer{color: var(--ui-plc-muted)}.ui-plc__shimmer::after{content: attr(data-text);content: attr(data-text) / "";position: absolute;inset: 0;white-space: nowrap;color: transparent;background: linear-gradient(90deg, transparent 38%, var(--ui-plc-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;-webkit-background-clip: text;background-clip: text;animation: ui-plc-sweep 1.6s linear infinite;pointer-events: none}.ui-plc__elapsed{margin-left: auto;padding-right: 6px;color: var(--ui-plc-faint);font-variant-numeric: tabular-nums;white-space: nowrap}@media (hover: none){.ui-plc__grip, .ui-plc__remove{opacity: 1}}@media (pointer: coarse){.ui-plc__foot{min-height: 56px}.ui-plc__btn, .ui-plc__retry{height: 36px}.ui-plc__remove{width: 36px;height: 36px;margin: -8px -10px -8px 0}.ui-plc__grip::after{content: "";position: absolute;inset: -8px -6px}}@container (max-width: 400px){.ui-plc__hint{display: none}}@container (max-width: 340px){.ui-plc__head{padding: 14px 14px 10px}.ui-plc__list{padding-inline: 4px}.ui-plc__step, .ui-plc__add{column-gap: 8px;padding-right: 8px}.ui-plc__add{margin-inline: 4px}.ui-plc__foot{padding-left: 14px}}@keyframes ui-plc-fade{from{opacity: 0;transform: translateY(3px)}to{opacity: 1;transform: none}}@keyframes ui-plc-enter{from{opacity: 0;transform: translateY(6px)}to{opacity: 1;transform: none}}@keyframes ui-plc-pop{from{opacity: 0;transform: scale(0.5)}to{opacity: 1;transform: none}}@keyframes ui-plc-draw{to{stroke-dashoffset: 0}}@keyframes ui-plc-ray{0%{opacity: 1}100%{opacity: 0.18}}@keyframes ui-plc-sweep{from{background-position: 100% 0}to{background-position: 0% 0}}@media (prefers-reduced-motion: reduce){.ui-plc *, .ui-plc *::before, .ui-plc *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;animation-iteration-count: 1 !important;transition-duration: 1ms !important;transition-delay: 0ms !important}.ui-plc__spinner line{opacity: 0.6}.ui-plc__draw{stroke-dashoffset: 0}.ui-plc__shimmer::after{display: none}}:where(.dark, [data-theme="dark"]) .ui-plc{--ui-plc-card: #1c1c1e;--ui-plc-ink: rgba(255, 255, 255, 0.9);--ui-plc-strong: #ffffff;--ui-plc-text: rgba(255, 255, 255, 0.62);--ui-plc-muted: rgba(255, 255, 255, 0.46);--ui-plc-faint: rgba(255, 255, 255, 0.3);--ui-plc-icon: rgba(255, 255, 255, 0.5);--ui-plc-line: rgba(255, 255, 255, 0.08);--ui-plc-ring: rgba(255, 255, 255, 0.14);--ui-plc-rail: rgba(255, 255, 255, 0.1);--ui-plc-fill: rgba(255, 255, 255, 0.08);--ui-plc-wash: rgba(255, 255, 255, 0.04);--ui-plc-chip: rgba(255, 255, 255, 0.07);--ui-plc-accent: #4d8dff;--ui-plc-red: #ff6b70;--ui-plc-red-bg: rgba(229, 72, 77, 0.14);--ui-plc-primary: rgba(255, 255, 255, 0.9);--ui-plc-primary-hover: rgba(255, 255, 255, 0.8);--ui-plc-on-primary: #1c1c1e;--ui-plc-raise-hover: #232326;--ui-plc-shine: #ffffff;--ui-plc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-plc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 28px -10px rgba(0, 0, 0, 0.6);--ui-plc-focus: rgba(77, 141, 255, 0.5);--ui-plc-edit-glow: rgba(77, 141, 255, 0.14)}:where(.dark, [data-theme="dark"]) .ui-plc__marker{box-shadow: inset 0 0 0 0.5px var(--ui-plc-ring)}`;
var g = [{
  id: `revenue`,
  title: `Pull Q3 revenue and ARR`,
  detail: `Monthly revenue, ARR and net retention`,
  tool: `stripe.query`
}, {
  id: `launches`,
  title: `Summarize product launches`,
  detail: `Shipped projects and adoption`,
  tool: `linear.search`
}, {
  id: `slides`,
  title: `Build the KPI slides`,
  detail: `Six charts in the board template`,
  tool: `slides.create`
}, {
  id: `memo`,
  title: `Draft the board memo`,
  detail: `One page, wins, risks and asks`,
  tool: `docs.write`
}, {
  id: `email`,
  title: `Send the draft to Maya for review`,
  tool: `gmail.draft`
}];
var _ = {
  revenue: 1300,
  launches: 1100,
  slides: 1400,
  memo: 1250,
  email: 900
};
var v = `slides`;
function YComponent() {
  let [steps, setSteps] = n3.useState(g);
  let [i2, setI] = n3.useState(`draft`);
  let oRef = n3.useRef(null);
  let sRef = n3.useRef(true);
  let cRef = n3.useRef([]);
  let lRef = n3.useRef([]);
  let uRef = n3.useRef(i2);
  uRef.current = i2;
  let dRef = n3.useRef(true);
  let f2 = (e, t, n4) => {
    e.current.push(window.setTimeout(t, n4));
  };
  let m = (e) => {
    e.current.forEach((e2) => window.clearTimeout(e2));
    e.current = [];
  };
  let h2 = (e) => oRef.current?.querySelector(e)?.click();
  let y = (e, n4) => setSteps((t) => t.map((t2) => {
    if (t2.id === e) {
      return {
        ...t2,
        ...n4
      };
    }
    return t2;
  }));
  let b = (e, t) => {
    if (t >= e.length) {
      setI(`done`);
      if (sRef.current) {
        f2(cRef, S, 3600);
      } else {
        f2(lRef, x, 3200);
      }
      return;
    }
    let n4 = e[t];
    y(n4.id, {
      status: `active`,
      error: void 0
    });
    let r2 = _[n4.id] ?? 1200;
    f2(lRef, () => {
      if (n4.id === v && dRef.current) {
        dRef.current = false;
        y(n4.id, {
          status: `failed`,
          error: `Slides API timed out after 30s`
        });
        if (sRef.current) {
          f2(cRef, () => h2(`.ui-plc__retry`), 1700);
        }
        return;
      }
      y(n4.id, {
        status: `done`
      });
      b(e, t + 1);
    }, r2);
  };
  let onRun = (e) => {
    m(lRef);
    dRef.current = true;
    let n4 = e.map(({
      status,
      error,
      duration,
      ...rest
    }) => rest);
    setSteps(n4);
    setI(`running`);
    f2(lRef, () => b(n4, 0), 350);
  };
  let onRetry = (e) => {
    m(lRef);
    let n4 = [];
    setSteps((t) => {
      let r2 = t.findIndex((t2) => t2.id === e);
      n4 = t.map((e2, t2) => {
        if (t2 >= r2) {
          return {
            ...e2,
            status: `pending`,
            error: void 0
          };
        }
        return e2;
      });
      return n4;
    });
    f2(lRef, () => b(n4, n4.findIndex((t) => t.id === e)), 250);
  };
  let x = () => {
    setSteps((e) => e.map(({
      status,
      error,
      duration,
      ...rest
    }) => rest));
    setI(`draft`);
  };
  let S = () => {
    m(lRef);
    setSteps(g);
    setI(`draft`);
    f2(cRef, () => setSteps((e) => {
      let t = e.findIndex((e2) => e2.id === `memo`);
      if (t < 1) {
        return e;
      }
      let n4 = e.slice();
      let [r2] = n4.splice(t, 1);
      n4.splice(t - 1, 0, r2);
      return n4;
    }), 1500);
    f2(cRef, () => h2(`.ui-plc__run`), 3e3);
  };
  n3.useEffect(() => {
    S();
    return () => {
      m(cRef);
      m(lRef);
    };
  }, []);
  let C = (isTrusted) => {
    if (isTrusted && sRef.current) {
      sRef.current = false;
      m(cRef);
      if (uRef.current === `done`) {
        f2(lRef, x, 1200);
      }
    }
  };
  return /* @__PURE__ */ jsx("div", { ref: oRef, className: `pl-demo`, onPointerDownCapture: (e) => C(e.nativeEvent.isTrusted), onKeyDownCapture: (e) => C(e.nativeEvent.isTrusted), children: /* @__PURE__ */ jsx(P1Component, { title: `Prepare the Q3 board update`, estimate: `~2 min`, steps, status: i2, onChange: setSteps, onRun, onCancel: () => {
    m(lRef);
    setSteps(g);
    setI(`draft`);
  }, onRetry }) });
}

export {
  YComponent
};
