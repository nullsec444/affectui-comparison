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

// reconstructed/component-CabyG3jS.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = 0;
var a = () => `step-${Date.now().toString(36)}-${(i++).toString(36)}`;
var o = Array.from({
  length: 8
}, (e, t) => t);
var s = (_Ref_current, t, n4) => {
  let r2 = _Ref_current.slice();
  let [i2] = r2.splice(t, 1);
  r2.splice(n4, 0, i2);
  return r2;
};
var c = () => typeof window < `u` && !!window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;
var ee = (e) => {
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
var l = (e) => {
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
var u = (e) => {
  let t = Math.max(1, Math.round(e / 1e3));
  if (t < 60) {
    return `${t}s`;
  }
  return `${Math.floor(t / 60)}m ${String(t % 60).padStart(2, `0`)}s`;
};
var te = {
  pending: `Pending`,
  active: `In progress`,
  done: `Done`,
  failed: `Failed`,
  skipped: `Skipped`
};
function DComponent({
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
  let [oe, setOe] = n3.useState(defaultSteps);
  let h = steps ?? oe;
  let g = status === `draft`;
  let _RefRef = n3.useRef(h);
  _RefRef.current = h;
  let [v, setV] = n3.useState(null);
  let bRef = n3.useRef(v);
  bRef.current = v;
  let [x, setX] = n3.useState(``);
  let [C, setC] = n3.useState([]);
  let [le, setLe] = n3.useState(null);
  let [ue, setUe] = n3.useState(``);
  let [, setFe] = n3.useState(0);
  let [T, setT] = n3.useState(null);
  let peRef = n3.useRef(null);
  let DRef = n3.useRef(null);
  let ORef = n3.useRef(/* @__PURE__ */ new Map());
  let kRef = n3.useRef(/* @__PURE__ */ new Map());
  let ARef = n3.useRef(null);
  let jRef = n3.useRef(null);
  let MRef = n3.useRef(/* @__PURE__ */ new Set());
  let NRef = n3.useRef(/* @__PURE__ */ new Set());
  let PRef = n3.useRef(/* @__PURE__ */ new Map());
  let FRef = n3.useRef(/* @__PURE__ */ new Map());
  let IRef = n3.useRef(null);
  let LRef = n3.useRef(/* @__PURE__ */ new Map());
  let R = n3.useId();
  let me = (e, t) => {
    let n4 = window.setTimeout(() => {
      NRef.current.delete(n4);
      e();
    }, t);
    NRef.current.add(n4);
  };
  n3.useEffect(() => {
    let NRef_current = NRef.current;
    return () => NRef_current.forEach((e) => window.clearTimeout(e));
  }, []);
  let z = (t) => {
    if (steps === void 0) {
      setOe(t);
    }
    onChange?.(t);
  };
  let B = (e) => setUe((t) => {
    if (t === e) {
      return `${e}\xA0`;
    }
    return e;
  });
  let V = h.map((e) => e.id).join(`
`);
  let HRef = n3.useRef(V);
  n3.useLayoutEffect(() => {
    let e = HRef.current !== V;
    HRef.current = V;
    let t = /* @__PURE__ */ new Map();
    let n4 = e && !c();
    ORef.current.forEach((r2, i2) => {
      let r_offsetTop = r2.offsetTop;
      t.set(i2, r_offsetTop);
      if (!e) {
        return;
      }
      let o2 = kRef.current.get(i2);
      if (n4 && o2 !== void 0 && o2 !== r_offsetTop) {
        r2.style.transition = `none`;
        r2.style.transform = `translateY(${o2 - r_offsetTop}px)`;
        r2.getBoundingClientRect();
      }
      r2.style.transition = ``;
      r2.style.transform = ``;
    });
    kRef.current = t;
    if (jRef.current) {
      let e2 = ORef.current.get(jRef.current);
      jRef.current = null;
      if (e2 && document.activeElement !== e2) {
        e2.focus();
      }
    }
  });
  let URef = n3.useRef(status);
  n3.useLayoutEffect(() => {
    let URef_current = URef.current;
    URef.current = status;
    if (status === `running` && (IRef.current === null || URef_current === `done`)) {
      IRef.current = Date.now();
    }
    if (status === `draft`) {
      IRef.current = null;
      setT(null);
    }
    if (status === `done`) {
      let e = _RefRef.current.reduce((acc, item) => acc + (item.duration ?? FRef.current.get(item.id) ?? 0), 0);
      setT(IRef.current === null ? e : Date.now() - IRef.current);
    }
  }, [status]);
  n3.useLayoutEffect(() => {
    h.forEach((e) => {
      let t = e.status ?? `pending`;
      if (t === `active`) {
        if (!PRef.current.has(e.id)) {
          PRef.current.set(e.id, Date.now());
        }
      } else if (PRef.current.has(e.id)) {
        if (t === `done`) {
          FRef.current.set(e.id, Date.now() - PRef.current.get(e.id));
        }
        PRef.current.delete(e.id);
      }
      if (t === `pending`) {
        FRef.current.delete(e.id);
      }
    });
  });
  n3.useEffect(() => {
    if (status !== `running`) {
      return;
    }
    let e = window.setInterval(() => setFe((e2) => e2 + 1), 100);
    return () => window.clearInterval(e);
  }, [status]);
  n3.useEffect(() => {
    let e = [];
    h.forEach((t, n4) => {
      let r2 = t.status ?? `pending`;
      let i2 = LRef.current.get(t.id);
      if (!g && i2 !== void 0 && i2 !== r2) {
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
      LRef.current.set(t.id, r2);
    });
    if (e.length) {
      B(e.join(`. `));
    }
  });
  n3.useEffect(() => {
    if (status === `running`) {
      B(`Running plan`);
    }
    if (status === `done` && T !== null) {
      B(`Plan done in ${u(T)}`);
    }
  }, [status, T]);
  n3.useEffect(() => {
    if (!g) {
      setV(null);
      setX(``);
    }
  }, [g]);
  let W = (e) => {
    if (e) {
      ORef.current.get(e)?.focus();
    } else {
      DRef.current?.focus();
    }
  };
  let he = (e, t) => {
    let _Ref_current = _RefRef.current;
    let r2 = _Ref_current.findIndex((t2) => t2.id === e);
    let i2 = r2 + t;
    if (!(r2 < 0 || i2 < 0 || i2 >= _Ref_current.length)) {
      jRef.current = e;
      z(s(_Ref_current, r2, i2));
      B(`Moved \u201C${_Ref_current[r2].title}\u201D to position ${i2 + 1} of ${_Ref_current.length}`);
    }
  };
  let G = (e) => {
    if (!g || C.includes(e)) {
      return;
    }
    let _Ref_current = _RefRef.current;
    let n4 = _Ref_current.findIndex((t) => t.id === e);
    if (n4 < 0) {
      return;
    }
    let r2 = ORef.current.get(e);
    if (r2?.contains(document.activeElement)) {
      W((_Ref_current[n4 + 1] ?? _Ref_current[n4 - 1])?.id);
    }
    B(`Removed \u201C${_Ref_current[n4].title}\u201D`);
    if (!r2 || c()) {
      z(_Ref_current.filter((t) => t.id !== e));
      return;
    }
    r2.style.height = `${r2.offsetHeight}px`;
    r2.getBoundingClientRect();
    setC((t) => [...t, e]);
    me(() => {
      r2.style.height = ``;
      setC((t) => t.filter((t2) => t2 !== e));
      z(_RefRef.current.filter((t) => t.id !== e));
    }, 260);
  };
  let K = (e) => {
    if (!g) {
      return;
    }
    let t = _RefRef.current.find((t2) => t2.id === e);
    if (t) {
      setV({
        id: e,
        value: t.title
      });
    }
  };
  let q = (e, t = false) => {
    let bRef_current = bRef.current;
    if (!bRef_current) {
      return;
    }
    bRef.current = null;
    setV(null);
    if (t) {
      jRef.current = bRef_current.id;
    }
    let r2 = bRef_current.value.trim();
    let i2 = _RefRef.current.find((e2) => e2.id === bRef_current.id);
    if (e && i2 && r2 && r2 !== i2.title) {
      z(_RefRef.current.map((e2) => {
        if (e2.id === bRef_current.id) {
          return {
            ...e2,
            title: r2
          };
        }
        return e2;
      }));
      B(`Renamed to \u201C${r2}\u201D`);
    }
  };
  let ge = () => {
    let e = x.trim();
    if (!e) {
      return;
    }
    let t = a();
    MRef.current.add(t);
    z([..._RefRef.current, {
      id: t,
      title: e
    }]);
    setX(``);
    B(`Added \u201C${e}\u201D as step ${_RefRef.current.length + 1}`);
  };
  let _e = (e, t) => {
    if (!g || e.target !== e.currentTarget) {
      return;
    }
    let _Ref_current = _RefRef.current;
    let r2 = _Ref_current.findIndex((e2) => e2.id === t);
    if (e.altKey && (e.key === `ArrowUp` || e.key === `ArrowDown`)) {
      e.preventDefault();
      he(t, e.key === `ArrowUp` ? -1 : 1);
    } else if (e.key === `ArrowUp` || e.key === `ArrowDown`) {
      e.preventDefault();
      let t2 = _Ref_current[r2 + (e.key === `ArrowUp` ? -1 : 1)];
      if (t2) {
        W(t2.id);
      } else if (e.key === `ArrowDown`) {
        DRef.current?.focus();
      }
    } else {
      if (e.key === `Enter` || e.key === `F2`) {
        e.preventDefault();
        K(t);
      } else if (e.key === `Delete` || e.key === `Backspace`) {
        e.preventDefault();
        G(t);
      }
    }
  };
  let ve = (e, t) => {
    if (!g || e.button !== 0 || bRef.current || C.length) {
      return;
    }
    let ids = _RefRef.current.map((e2) => e2.id);
    let r2 = ids.map((e2) => ORef.current.get(e2));
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
    ARef.current = {
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
    setLe(t);
  };
  let onPointerMove = (e) => {
    let ARef_current = ARef.current;
    if (!ARef_current || ARef_current.pointer !== e.pointerId) {
      return;
    }
    let n4 = ARef_current.ids.length - 1;
    let r2 = ARef_current.tops[0] - ARef_current.tops[ARef_current.from];
    let i2 = ARef_current.tops[n4] + ARef_current.heights[n4] - (ARef_current.tops[ARef_current.from] + ARef_current.heights[ARef_current.from]);
    ARef_current.dy = Math.min(i2, Math.max(r2, (e.clientY - ARef_current.startY) / ARef_current.scale));
    ORef.current.get(ARef_current.id)?.style.setProperty(`transform`, `translateY(${ARef_current.dy}px)`);
    let a2 = ARef_current.tops[ARef_current.from] + ARef_current.dy + ARef_current.heights[ARef_current.from] / 2;
    let o2 = 0;
    ARef_current.ids.forEach((e2, n5) => {
      if (n5 !== ARef_current.from && ARef_current.tops[n5] + ARef_current.heights[n5] / 2 < a2) {
        o2++;
      }
    });
    if (o2 === ARef_current.to) {
      return;
    }
    ARef_current.to = o2;
    let s2 = ARef_current.heights[ARef_current.from];
    ARef_current.ids.forEach((e2, n5) => {
      if (n5 === ARef_current.from) {
        return;
      }
      let r3 = ARef_current.from < o2 && n5 > ARef_current.from && n5 <= o2 ? -s2 : o2 < ARef_current.from && n5 >= o2 && n5 < ARef_current.from ? s2 : 0;
      let i3 = ORef.current.get(e2);
      if (i3) {
        i3.style.transform = r3 ? `translateY(${r3}px)` : ``;
      }
    });
  };
  let J = (e) => {
    let ARef_current = ARef.current;
    if (!ARef_current || ARef_current.pointer !== e.pointerId) {
      return;
    }
    ARef.current = null;
    setLe(null);
    if (ARef_current.to === ARef_current.from) {
      let e2 = ORef.current.get(ARef_current.id);
      if (e2) {
        e2.style.transform = ``;
      }
      return;
    }
    ORef.current.forEach((e2, t) => {
      kRef.current.set(t, e2.offsetTop + ee(e2));
      e2.style.transition = `none`;
      e2.style.transform = ``;
    });
    let _Ref_current = _RefRef.current;
    let r2 = _Ref_current.find((e2) => e2.id === ARef_current.id);
    z(s(_Ref_current, ARef_current.from, ARef_current.to));
    requestAnimationFrame(() => ORef.current.forEach((e2) => e2.style.transition = ``));
    if (r2) {
      B(`Moved \u201C${r2.title}\u201D to position ${ARef_current.to + 1} of ${_Ref_current.length}`);
    }
  };
  let h_length = h.length;
  let X = (e) => e.status ?? `pending`;
  let Z = h.findIndex((e) => X(e) === `active`);
  let be = h.findIndex((e) => X(e) === `failed`);
  let length = h.filter((e) => X(e) === `done` || X(e) === `skipped`).length;
  let Se = Date.now();
  let Q = `draft`;
  let $ = ``;
  if (status === `done`) {
    Q = `done`;
    $ = `Done in ${u(T ?? 0)}`;
  } else {
    if (status === `running`) {
      if (be >= 0 && Z < 0) {
        Q = `failed`;
        $ = `Stopped \xB7 step ${be + 1} failed`;
      } else {
        Q = `running`;
        $ = `Running \xB7 ${Z >= 0 ? Z + 1 : Math.min(length + 1, h_length)} of ${h_length}`;
      }
    }
  }
  let Ce = IRef.current === null ? 0 : Se - IRef.current;
  return /* @__PURE__ */ jsxs("div", { ref: peRef, className: [`ui-pl`, className].filter(Boolean).join(` `), "data-status": status, "data-dragging": le ? `` : void 0, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-agent-plan`, precedence: `default`, children: re }),
    /* @__PURE__ */ jsxs("div", { className: `ui-pl__card`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-pl__head`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-pl__meta`, children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-pl__state`, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-pl__state-icon`, "aria-hidden": `true`, children: /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, children: [
              /* @__PURE__ */ jsx("path", { d: `M6.5 4.5h7M6.5 8h7M6.5 11.5h7` }),
              /* @__PURE__ */ jsx("circle", { cx: `3.25`, cy: `4.5`, r: `.6` }),
              /* @__PURE__ */ jsx("circle", { cx: `3.25`, cy: `8`, r: `.6` }),
              /* @__PURE__ */ jsx("circle", { cx: `3.25`, cy: `11.5`, r: `.6` })
            ] }) }),
            /* @__PURE__ */ jsxs("span", { className: `ui-pl__state-label`, children: [
              `Plan \xB7 `,
              h_length,
              ` `,
              h_length === 1 ? `step` : `steps`
            ] })
          ] }),
          g && estimate ? /* @__PURE__ */ jsxs("span", { className: `ui-pl__estimate`, children: [
            /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [
              /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `6` }),
              /* @__PURE__ */ jsx("path", { d: `M8 5v3.2l2 1.3` })
            ] }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("span", { className: `ui-pl__sr`, children: `Estimated time ` }),
              estimate
            ] })
          ] }) : null
        ] }),
        title && /* @__PURE__ */ jsx("h3", { className: `ui-pl__title`, children: title })
      ] }),
      /* @__PURE__ */ jsx("p", { id: R, className: `ui-pl__sr`, children: `Press Enter to rename, Alt plus arrow keys to move, Delete to remove.` }),
      /* @__PURE__ */ jsx("ol", { className: `ui-pl__list`, "aria-label": title ? `Plan: ${title}` : `Plan`, children: h.map((e, t) => {
        let n4 = X(e);
        let i2 = g && v?.id === e.id;
        let a2 = e.duration ?? FRef.current.get(e.id);
        let o2 = PRef.current.get(e.id);
        return /* @__PURE__ */ jsxs("li", { ref: (t2) => {
          if (t2) {
            ORef.current.set(e.id, t2);
          }
          return () => {
            ORef.current.delete(e.id);
          };
        }, className: `ui-pl__step`, "data-step": g ? void 0 : n4, "data-dragging": le === e.id ? `` : void 0, "data-removing": C.includes(e.id) ? `` : void 0, "data-enter": MRef.current.has(e.id) ? `` : void 0, onAnimationEnd: (t2) => {
          if (t2.target === t2.currentTarget) {
            MRef.current.delete(e.id);
          }
        }, tabIndex: g && !i2 ? 0 : void 0, "aria-describedby": g ? R : void 0, "aria-current": n4 === `active` && !g ? `step` : void 0, onKeyDown: (t2) => _e(t2, e.id), children: [
          g && /* @__PURE__ */ jsx("span", { className: `ui-pl__grip`, "aria-hidden": `true`, title: `Drag to reorder`, onPointerDown: (t2) => ve(t2, e.id), onPointerMove, onPointerUp: J, onPointerCancel: J, children: /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, children: [
            /* @__PURE__ */ jsx("circle", { cx: `6`, cy: `4`, r: `1.1` }),
            /* @__PURE__ */ jsx("circle", { cx: `10`, cy: `4`, r: `1.1` }),
            /* @__PURE__ */ jsx("circle", { cx: `6`, cy: `8`, r: `1.1` }),
            /* @__PURE__ */ jsx("circle", { cx: `10`, cy: `8`, r: `1.1` }),
            /* @__PURE__ */ jsx("circle", { cx: `6`, cy: `12`, r: `1.1` }),
            /* @__PURE__ */ jsx("circle", { cx: `10`, cy: `12`, r: `1.1` })
          ] }) }),
          /* @__PURE__ */ jsx("span", { className: `ui-pl__marker`, "aria-hidden": `true`, children: g || n4 === `pending` ? /* @__PURE__ */ jsx("span", { className: `ui-pl__num`, children: t + 1 }) : n4 === `active` ? /* @__PURE__ */ jsx(NeComponent, {}) : n4 === `done` ? /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, className: `ui-pl__mark`, children: /* @__PURE__ */ jsx("path", { d: `M4.2 8.4 6.8 11l5-5.6`, pathLength: 1, className: `ui-pl__draw` }) }) : n4 === `failed` ? /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, className: `ui-pl__mark`, children: /* @__PURE__ */ jsx("path", { d: `M8 4.2v4.4M8 11.6h.01` }) }) : /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, className: `ui-pl__mark`, children: /* @__PURE__ */ jsx("path", { d: `M5 8h6` }) }) }),
          /* @__PURE__ */ jsxs("div", { className: `ui-pl__main`, children: [
            i2 ? /* @__PURE__ */ jsx("input", { className: `ui-pl__edit`, value: v.value, "aria-label": `Rename step ${t + 1}`, autoFocus: true, onFocus: (e2) => e2.currentTarget.select(), onChange: (t2) => setV({
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
            } }) : /* @__PURE__ */ jsx("span", { className: `ui-pl__name`, onDoubleClick: () => K(e.id), children: e.title }),
            (e.detail || e.tool) && /* @__PURE__ */ jsxs("span", { className: `ui-pl__sub`, children: [
              e.detail && /* @__PURE__ */ jsx("span", { className: `ui-pl__detail`, children: e.detail }),
              e.tool && /* @__PURE__ */ jsx("code", { className: `ui-pl__tool`, children: e.tool })
            ] }),
            !g && /* @__PURE__ */ jsxs("span", { className: `ui-pl__sr`, children: [
              `, `,
              te[n4]
            ] }),
            !g && n4 === `failed` && /* @__PURE__ */ jsxs("span", { className: `ui-pl__fail`, children: [
              /* @__PURE__ */ jsx("span", { className: `ui-pl__error`, children: e.error ?? `This step failed` }),
              onRetry && /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-pl__retry`, onClick: () => onRetry(e.id), children: [
                /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [
                  /* @__PURE__ */ jsx("path", { d: `M13 8a5 5 0 1 1-1.6-3.7` }),
                  /* @__PURE__ */ jsx("path", { d: `M13 3v2.6h-2.6` })
                ] }),
                `Retry from here`
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("span", { className: `ui-pl__aside`, children: g ? /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-pl__remove`, "aria-label": `Remove step ${t + 1}: ${e.title}`, onClick: () => G(e.id), children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M4.5 4.5l7 7M11.5 4.5l-7 7` }) }) }) : n4 === `active` ? /* @__PURE__ */ jsx("span", { className: `ui-pl__time`, "aria-hidden": `true`, children: l(o2 === void 0 ? 0 : Se - o2) }) : n4 === `done` && a2 !== void 0 ? /* @__PURE__ */ jsxs("span", { className: `ui-pl__time ui-pl__time--done`, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-pl__sr`, children: `took ` }),
            l(a2)
          ] }) : n4 === `skipped` ? /* @__PURE__ */ jsx("span", { className: `ui-pl__time`, "aria-hidden": `true`, children: `Skipped` }) : null }),
          t < h_length - 1 && /* @__PURE__ */ jsx("span", { className: `ui-pl__rail`, "aria-hidden": `true` })
        ] }, e.id);
      }) }),
      /* @__PURE__ */ jsx("div", { className: `ui-pl__tail`, inert: !g, children: /* @__PURE__ */ jsx("div", { className: `ui-pl__tail-inner`, children: /* @__PURE__ */ jsxs("label", { className: `ui-pl__add`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-pl__add-icon`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, children: /* @__PURE__ */ jsx("path", { d: `M8 4.5v7M4.5 8h7` }) }) }),
        /* @__PURE__ */ jsx("input", { ref: DRef, value: x, placeholder: `Add step`, "aria-label": `Add a step at the end`, enterKeyHint: `done`, onChange: (e) => setX(e.target.value), onKeyDown: (e) => {
          if (e.key === `Enter`) {
            e.preventDefault();
            ge();
          } else if (e.key === `Escape`) {
            setX(``);
          } else if (e.key === `ArrowUp` && !x) {
            let t = _RefRef.current[_RefRef.current.length - 1];
            if (t) {
              e.preventDefault();
              W(t.id);
            }
          }
        } })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `ui-pl__foot`, "data-phase": Q, children: Q === `draft` ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("span", { className: `ui-pl__hint`, "aria-hidden": `true`, children: `Drag to reorder \xB7 double-click to rename` }),
      /* @__PURE__ */ jsxs("span", { className: `ui-pl__actions`, children: [
        onCancel && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-pl__btn ui-pl__btn--quiet`, onClick: onCancel, children: `Cancel` }),
        /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-pl__btn ui-pl__btn--primary ui-pl__run`, disabled: !h_length, onClick: () => onRun?.(_RefRef.current), children: [
          `Run plan`,
          /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M5.5 3.8v8.4L12 8z` }) })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("span", { className: `ui-pl__status`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-pl__status-icon`, "aria-hidden": `true`, children: Q === `running` ? /* @__PURE__ */ jsx(NeComponent, {}) : Q === `done` ? /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, children: [
          /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `6.5` }),
          /* @__PURE__ */ jsx("path", { d: `M5.4 8.2 7.2 10l3.4-3.8`, pathLength: 1, className: `ui-pl__draw` })
        ] }) : /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, children: [
          /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `6.5` }),
          /* @__PURE__ */ jsx("path", { d: `M8 4.9v3.6M8 11h.01` })
        ] }) }),
        /* @__PURE__ */ jsx("span", { className: `ui-pl__status-label`, children: $ })
      ] }),
      Q === `running` ? /* @__PURE__ */ jsx("span", { className: `ui-pl__elapsed`, "aria-hidden": `true`, children: u(Ce) }) : Q === `done` && onRun ? /* @__PURE__ */ jsx("span", { className: `ui-pl__actions`, children: /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-pl__btn ui-pl__btn--quiet ui-pl__again`, onClick: () => onRun(_RefRef.current), children: [
        /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [
          /* @__PURE__ */ jsx("path", { d: `M13 8a5 5 0 1 1-1.6-3.7` }),
          /* @__PURE__ */ jsx("path", { d: `M13 3v2.6h-2.6` })
        ] }),
        `Run again`
      ] }) }) : null
    ] }) }, Q),
    /* @__PURE__ */ jsx("p", { className: `ui-pl__sr`, role: `status`, "aria-live": `polite`, children: ue })
  ] });
}
function NeComponent() {
  return /* @__PURE__ */ jsx("svg", { className: `ui-pl__spinner`, viewBox: `0 0 16 16`, children: o.map((e) => /* @__PURE__ */ jsx("line", { x1: `8`, y1: `1.75`, x2: `8`, y2: `4.75`, transform: `rotate(${e * 45} 8 8)`, style: {
    animationDelay: `${(e - 8) * 100}ms`
  } }, e)) });
}
var re = `.ui-pl{--ui-pl-tray: #f0f0f0;--ui-pl-card: #ffffff;--ui-pl-ink: #171717;--ui-pl-text: #6b6b6b;--ui-pl-muted: #8a8a8a;--ui-pl-faint: #b8b8b8;--ui-pl-line: #ececec;--ui-pl-raise: #ffffff;--ui-pl-hover: #f6f6f6;--ui-pl-quiet-hover: #e4e4e5;--ui-pl-press: rgba(23, 23, 23, 0.05);--ui-pl-chip: #f3f3f3;--ui-pl-chip-text: #555555;--ui-pl-marker: #f0f0f0;--ui-pl-rail: #c4c4c8;--ui-pl-on-ink: #ffffff;--ui-pl-red: #c2331f;--ui-pl-red-bg: #fdf3f1;--ui-pl-red-ring: rgba(194, 51, 31, 0.32);--ui-pl-ring: rgba(23, 23, 23, 0.22);--ui-pl-lift: 0 1px 2px rgba(0, 0, 0, 0.06), 0 12px 28px -10px rgba(0, 0, 0, 0.2);--ui-pl-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-pl-inset: 30px;container-type: inline-size;position: relative;box-sizing: border-box;display: grid;width: 100%;max-width: 460px;padding: 4px;border-radius: 20px;background: var(--ui-pl-tray);color: var(--ui-pl-text);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;line-height: 20px;letter-spacing: -0.006em;text-align: left;-webkit-font-smoothing: antialiased}.ui-pl__card{position: relative;border-radius: 16px;background: var(--ui-pl-card);box-shadow: 0 0 0 1px var(--ui-pl-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-pl:not([data-status="draft"]){--ui-pl-inset: 14px}.ui-pl[data-dragging]{cursor: grabbing;user-select: none;-webkit-user-select: none}.ui-pl *, .ui-pl *::before, .ui-pl *::after{box-sizing: border-box}.ui-pl svg{display: block;width: 100%;height: 100%;overflow: visible}:where(.ui-pl) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;letter-spacing: inherit;color: inherit;cursor: pointer}.ui-pl__sr{position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap;border: 0}.ui-pl__head{display: grid;gap: 4px;padding: 16px 18px 8px}.ui-pl__meta{display: flex;align-items: center;gap: 10px;min-height: 18px;font-size: 12.5px;line-height: 18px;color: var(--ui-pl-muted)}.ui-pl__state{display: inline-flex;align-items: center;gap: 7px;min-width: 0}.ui-pl__state-label{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-pl__state-icon, .ui-pl__status-icon{flex: none;width: 13px;height: 13px;fill: none;stroke: currentColor;stroke-width: 1.5;stroke-linecap: round;stroke-linejoin: round}.ui-pl__state-icon circle[r=".6"]{fill: currentColor}.ui-pl__estimate{display: inline-flex;align-items: center;gap: 5px;margin-left: auto;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-pl__estimate svg{width: 13px;height: 13px;fill: none;stroke: currentColor;stroke-width: 1.4;stroke-linecap: round;stroke-linejoin: round}.ui-pl__title{margin: 0;color: var(--ui-pl-ink);font-size: 15px;font-weight: 600;line-height: 22px;letter-spacing: -0.012em;text-wrap: balance}.ui-pl__list{position: relative;margin: 0;padding: 2px 6px 6px;list-style: none}.ui-pl__step{position: relative;display: grid;grid-template-columns: 22px minmax(0, 1fr) auto;column-gap: 12px;align-items: start;padding: 10px 10px 10px var(--ui-pl-inset);border-radius: 10px;outline: none;transition: transform 420ms var(--ui-pl-ease), padding 420ms var(--ui-pl-ease), height 260ms var(--ui-pl-ease), opacity 180ms ease, background-color 160ms ease, box-shadow 200ms ease}.ui-pl[data-status="draft"] .ui-pl__step:hover{background: var(--ui-pl-hover)}.ui-pl__step:focus-visible{outline: 2px solid var(--ui-pl-ring);outline-offset: 0}.ui-pl__step[data-dragging]{z-index: 2;background: var(--ui-pl-raise) !important;box-shadow: inset 0 0 0 1px var(--ui-pl-line), var(--ui-pl-lift);transition: background-color 160ms ease, box-shadow 200ms ease}.ui-pl__step[data-removing]{height: 0 !important;padding-top: 0;padding-bottom: 0;overflow: hidden;opacity: 0;pointer-events: none}.ui-pl__step[data-enter]{animation: ui-pl-enter 380ms var(--ui-pl-ease) both}.ui-pl__grip{position: absolute;top: 10px;left: 6px;display: grid;place-items: center;width: 18px;height: 22px;margin-top: -1px;border-radius: 5px;color: var(--ui-pl-faint);fill: currentColor;cursor: grab;touch-action: none;opacity: 0;transition: opacity 160ms ease, color 160ms ease, background-color 160ms ease}.ui-pl__grip svg{width: 14px;height: 14px}.ui-pl__step:hover .ui-pl__grip, .ui-pl__step:focus-visible .ui-pl__grip, .ui-pl__step[data-dragging] .ui-pl__grip{opacity: 1}.ui-pl__grip:hover, .ui-pl__step[data-dragging] .ui-pl__grip{color: var(--ui-pl-text);background: var(--ui-pl-press)}.ui-pl__step[data-dragging] .ui-pl__grip{cursor: grabbing}.ui-pl__marker{position: relative;z-index: 1;display: grid;place-items: center;justify-self: center;width: 20px;height: 20px;border-radius: 999px;background: var(--ui-pl-card);box-shadow: inset 0 0 0 1px var(--ui-pl-line);color: var(--ui-pl-muted);font-size: 11px;font-weight: 500;line-height: 1;font-variant-numeric: tabular-nums;transition: background-color 320ms ease, color 320ms ease, box-shadow 320ms ease}.ui-pl__marker > *{grid-area: 1 / 1;animation: ui-pl-pop 360ms var(--ui-pl-ease) both}.ui-pl__num{animation: none !important}.ui-pl__marker .ui-pl__spinner{width: 13px;height: 13px}.ui-pl__mark{width: 11px !important;height: 11px !important;fill: none;stroke: currentColor;stroke-width: 1.9;stroke-linecap: round;stroke-linejoin: round}.ui-pl__step[data-step="active"] .ui-pl__marker{box-shadow: none;color: var(--ui-pl-ink)}.ui-pl__step[data-step="done"] .ui-pl__marker{background: var(--ui-pl-marker);box-shadow: none;color: var(--ui-pl-ink)}.ui-pl__step[data-step="failed"] .ui-pl__marker{background: var(--ui-pl-red-bg);box-shadow: inset 0 0 0 1px var(--ui-pl-red-ring);color: var(--ui-pl-red)}.ui-pl__step[data-step="skipped"] .ui-pl__marker{box-shadow: none;outline: 1px dashed var(--ui-pl-faint);outline-offset: -1px}.ui-pl__draw{stroke-dasharray: 1;stroke-dashoffset: 1;animation: ui-pl-draw 420ms var(--ui-pl-ease) 80ms forwards}.ui-pl__spinner line{stroke: currentColor;stroke-width: 1.7;stroke-linecap: round;opacity: 0.18;animation: ui-pl-ray 800ms linear infinite}.ui-pl__main{display: grid;gap: 2px;min-width: 0}.ui-pl__name{color: var(--ui-pl-ink);font-weight: 500;overflow-wrap: anywhere;transition: color 300ms ease}.ui-pl[data-status="draft"] .ui-pl__name{cursor: text}.ui-pl__step[data-step="pending"] .ui-pl__name{color: var(--ui-pl-text)}.ui-pl__step[data-step="skipped"] .ui-pl__name{color: var(--ui-pl-muted);text-decoration: line-through;text-decoration-color: var(--ui-pl-faint)}.ui-pl__sub{display: flex;flex-wrap: wrap;align-items: center;gap: 3px 8px;min-width: 0;color: var(--ui-pl-muted);font-size: 12.5px;line-height: 18px}.ui-pl__detail{min-width: 0;overflow-wrap: anywhere}.ui-pl__tool{padding: 1px 6px;border-radius: 6px;background: var(--ui-pl-chip);color: var(--ui-pl-chip-text);font-family: ui-monospace, "SF Mono", Menlo, monospace;font-size: 11px;line-height: 16px;letter-spacing: 0;white-space: nowrap}.ui-pl__edit{width: calc(100% + 14px);height: 26px;margin: -3px -7px;padding: 0 6px;border: 0;border-radius: 7px;background: var(--ui-pl-raise);box-shadow: inset 0 0 0 1px var(--ui-pl-line), 0 0 0 3px var(--ui-pl-press);color: var(--ui-pl-ink);font: inherit;font-weight: 500;letter-spacing: inherit;outline: none}.ui-pl__fail{display: grid;justify-items: start;gap: 8px;margin-top: 4px;animation: ui-pl-fade 360ms var(--ui-pl-ease) both}.ui-pl__error{color: var(--ui-pl-red);font-size: 12.5px;line-height: 18px;overflow-wrap: anywhere}.ui-pl__retry{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 10px 0 9px;border-radius: 8px;background: var(--ui-pl-raise);box-shadow: inset 0 0 0 1px var(--ui-pl-line), 0 1px 2px rgba(0, 0, 0, 0.04);color: var(--ui-pl-ink);font-size: 12.5px;font-weight: 500;transition: background-color 160ms ease, transform 160ms var(--ui-pl-ease)}.ui-pl__retry svg{width: 13px;height: 13px;fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round}.ui-pl__retry:hover{background: var(--ui-pl-hover)}.ui-pl__retry:active{transform: scale(0.97)}.ui-pl__aside{display: flex;align-items: center;min-height: 20px;color: var(--ui-pl-muted);font-size: 12.5px;font-variant-numeric: tabular-nums;white-space: nowrap}.ui-pl__time{animation: ui-pl-fade 300ms ease both}.ui-pl__step[data-step="active"] .ui-pl__time{color: var(--ui-pl-ink)}.ui-pl__remove{display: grid;place-items: center;width: 24px;height: 24px;margin: -2px -4px 0 0;border-radius: 7px;color: var(--ui-pl-faint);fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;opacity: 0;transition: opacity 160ms ease, color 160ms ease, background-color 160ms ease}.ui-pl__remove svg{width: 14px;height: 14px}.ui-pl__step:hover .ui-pl__remove, .ui-pl__step:focus-visible .ui-pl__remove, .ui-pl__remove:focus-visible{opacity: 1}.ui-pl__remove:hover{color: var(--ui-pl-ink);background: var(--ui-pl-press)}.ui-pl__remove:focus-visible, .ui-pl__retry:focus-visible, .ui-pl__btn:focus-visible{outline: 2px solid var(--ui-pl-ring);outline-offset: 1px}.ui-pl__rail{position: absolute;top: 35px;bottom: -5px;left: calc(var(--ui-pl-inset) + 10.5px);width: 1px;overflow: hidden;background: var(--ui-pl-line);opacity: 0;pointer-events: none;transition: opacity 300ms ease}.ui-pl:not([data-status="draft"]) .ui-pl__rail{opacity: 1;transition-delay: 240ms}.ui-pl__rail::after{content: "";position: absolute;inset: 0;background: var(--ui-pl-rail);transform: scaleY(0);transform-origin: top;transition: transform 560ms var(--ui-pl-ease)}.ui-pl__step[data-step="done"] .ui-pl__rail::after, .ui-pl__step[data-step="skipped"] .ui-pl__rail::after{transform: scaleY(1)}.ui-pl__tail{display: grid;grid-template-rows: 1fr;transition: grid-template-rows 420ms var(--ui-pl-ease), opacity 260ms ease}.ui-pl:not([data-status="draft"]) .ui-pl__tail{grid-template-rows: 0fr;opacity: 0}.ui-pl__tail-inner{min-height: 0;overflow: hidden}.ui-pl__add{display: grid;grid-template-columns: 22px minmax(0, 1fr);column-gap: 12px;align-items: center;margin: 0 6px 8px;padding: 7px 10px 7px var(--ui-pl-inset);border-radius: 10px;cursor: text;transition: background-color 160ms ease}.ui-pl__add:hover, .ui-pl__add:focus-within{background: var(--ui-pl-hover)}.ui-pl__add-icon{display: grid;place-items: center;width: 22px;height: 22px;border-radius: 999px;outline: 1px dashed var(--ui-pl-faint);outline-offset: -1px;color: var(--ui-pl-muted);fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round}.ui-pl__add-icon svg{width: 12px;height: 12px}.ui-pl__add input{width: 100%;min-width: 0;height: 22px;padding: 0;border: 0;background: none;color: var(--ui-pl-ink);font: inherit;letter-spacing: inherit;outline: none}.ui-pl__add input::placeholder{color: var(--ui-pl-muted);opacity: 1}.ui-pl__foot{display: flex;align-items: center;gap: 12px;min-height: 46px;padding: 0 6px 0 12px;font-size: 12.5px;color: var(--ui-pl-muted);animation: ui-pl-fade 320ms var(--ui-pl-ease) both}.ui-pl__hint{min-width: 0;overflow: hidden;color: var(--ui-pl-muted);font-size: 12px;text-overflow: ellipsis;white-space: nowrap}.ui-pl__actions{display: flex;flex: none;gap: 8px;margin-left: auto}.ui-pl__btn{display: inline-flex;align-items: center;gap: 6px;height: 32px;padding: 0 13px;border-radius: 9px;font-size: 13px;font-weight: 500;white-space: nowrap;transition: background-color 160ms ease, opacity 160ms ease, transform 160ms var(--ui-pl-ease)}.ui-pl__btn:active{transform: scale(0.97)}.ui-pl__btn--primary{padding-right: 11px;background: var(--ui-pl-ink);color: var(--ui-pl-on-ink);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12)}.ui-pl__btn--primary:hover{opacity: 0.88}.ui-pl__btn--primary:disabled{opacity: 0.4;cursor: default;transform: none}.ui-pl__btn--primary svg{width: 12px;height: 12px;fill: currentColor}.ui-pl__btn--quiet{padding: 0 11px;color: var(--ui-pl-text)}.ui-pl__btn--quiet:hover{background: var(--ui-pl-quiet-hover);color: var(--ui-pl-ink)}.ui-pl__btn--quiet svg{width: 13px;height: 13px;fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round}.ui-pl__status{display: inline-flex;align-items: center;gap: 8px;min-width: 0;color: var(--ui-pl-ink)}.ui-pl__foot[data-phase="failed"] .ui-pl__status{color: var(--ui-pl-red)}.ui-pl__status-label{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-pl__elapsed{margin-left: auto;padding-right: 6px;font-variant-numeric: tabular-nums;white-space: nowrap}@media (hover: none){.ui-pl__grip, .ui-pl__remove{opacity: 1}}@container (max-width: 400px){.ui-pl__hint{display: none}}@container (max-width: 340px){.ui-pl__head{padding: 14px 14px 8px}.ui-pl__list{padding-inline: 4px}.ui-pl__step, .ui-pl__add{column-gap: 10px;padding-right: 8px}.ui-pl__add{margin-inline: 4px}.ui-pl__foot{padding-left: 10px}.ui-pl__btn{padding: 0 11px}}@keyframes ui-pl-fade{from{opacity: 0;transform: translateY(3px)}to{opacity: 1;transform: none}}@keyframes ui-pl-enter{from{opacity: 0;transform: translateY(6px)}to{opacity: 1;transform: none}}@keyframes ui-pl-pop{from{opacity: 0;transform: scale(0.5)}to{opacity: 1;transform: none}}@keyframes ui-pl-draw{to{stroke-dashoffset: 0}}@keyframes ui-pl-ray{0%{opacity: 1}100%{opacity: 0.18}}@media (prefers-reduced-motion: reduce){.ui-pl *, .ui-pl *::before, .ui-pl *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;animation-iteration-count: 1 !important;transition-duration: 1ms !important;transition-delay: 0ms !important}.ui-pl__spinner line{opacity: 0.6}.ui-pl__draw{stroke-dashoffset: 0}}:where(.dark, [data-theme="dark"]) .ui-pl{--ui-pl-tray: #111113;--ui-pl-card: #19191b;--ui-pl-ink: #ededed;--ui-pl-text: #a1a1a1;--ui-pl-muted: #8b8b92;--ui-pl-faint: #5c5c63;--ui-pl-line: #2a2a2e;--ui-pl-raise: #1f1f22;--ui-pl-hover: #1f1f22;--ui-pl-quiet-hover: #222225;--ui-pl-press: rgba(255, 255, 255, 0.07);--ui-pl-chip: #232326;--ui-pl-chip-text: #b4b4b4;--ui-pl-marker: #26262a;--ui-pl-rail: #4a4a50;--ui-pl-on-ink: #19191b;--ui-pl-red: #f2786b;--ui-pl-red-bg: rgba(242, 120, 107, 0.08);--ui-pl-red-ring: rgba(242, 120, 107, 0.4);--ui-pl-ring: rgba(237, 237, 237, 0.3);--ui-pl-lift: 0 1px 2px rgba(0, 0, 0, 0.4), 0 14px 32px -10px rgba(0, 0, 0, 0.7)}`;

export {
  DComponent
};
