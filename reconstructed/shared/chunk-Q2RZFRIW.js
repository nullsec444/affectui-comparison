import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo.clean-CtdFgWee.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [];
var a = /* @__PURE__ */ new Set();
var o = [];
var s = 0;
var c = (e) => {
  i = e;
  a.forEach((e2) => e2());
};
var l = (e) => {
  a.add(e);
  return () => {
    a.delete(e);
  };
};
var u = () => i;
var d = () => o;
function f(type, title, {
  id,
  ...rest
} = {}, r2 = false) {
  let l2 = id === void 0 ? void 0 : i.find((e) => e.id === id && !e.removing);
  if (l2) {
    c(i.map((n4) => {
      if (n4 === l2) {
        return {
          ...n4,
          ...rest,
          type,
          title,
          version: n4.version + 1
        };
      }
      return n4;
    }));
    return l2.id;
  }
  let u2 = id ?? `toast-${++s}`;
  if (!r2) {
    c([...i.filter((e) => e.id !== u2), {
      ...rest,
      id: u2,
      type,
      title,
      version: 0
    }]);
  }
  return u2;
}
var p = 420;
function dismiss(e) {
  let t = i.filter((t2) => !t2.removing && (e === void 0 || t2.id === e));
  if (t.length) {
    c(i.map((e2) => {
      if (t.includes(e2)) {
        return {
          ...e2,
          removing: true
        };
      }
      return e2;
    }));
    t.forEach((e2) => e2.onDismiss?.(e2.id));
    window.setTimeout(() => c(i.filter((e2) => !(e2.removing && t.some((t2) => t2.id === e2.id)))), p);
  }
}
var h = (title) => typeof title == `object` && !!title && !n3.isValidElement(title) && !Array.isArray(title) && `title` in title;
var g = (title) => {
  if (h(title)) {
    return title;
  }
  return {
    title,
    description: void 0
  };
};
function promise(e, t, n4 = {}) {
  let r2 = typeof e == `function` ? e() : e;
  let i2 = g(t.loading);
  let id = f(`loading`, i2.title, {
    ...n4,
    description: i2.description
  });
  let o2 = (e2, t2) => {
    let r3 = g(t2);
    f(e2, r3.title, {
      ...n4,
      id,
      description: r3.description
    }, true);
  };
  r2.then((e2) => o2(`success`, typeof t.success == `function` ? t.success(e2) : t.success), (e2) => o2(`error`, typeof t.error == `function` ? t.error(e2) : t.error));
  return r2;
}
var v = Object.assign((e, t) => f(`default`, e, t), {
  success: (e, t) => f(`success`, e, t),
  error: (e, t) => f(`error`, e, t),
  info: (e, t) => f(`info`, e, t),
  loading: (e, t) => f(`loading`, e, t),
  promise,
  dismiss
});
function Y1Component() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, className: `ui-tsc__status`, "aria-hidden": `true`, children: [
    /* @__PURE__ */ jsx("g", { className: `ui-tsc__spin`, children: /* @__PURE__ */ jsx("circle", { className: `ui-tsc__ring`, cx: `12`, cy: `12`, r: `9.25`, pathLength: 1 }) }),
    /* @__PURE__ */ jsx("path", { className: `ui-tsc__mark ui-tsc__check`, d: `M8.3 12.4l2.5 2.5 4.9-5.3`, pathLength: 1 }),
    /* @__PURE__ */ jsx("path", { className: `ui-tsc__mark ui-tsc__x1`, d: `M9.5 9.5l5 5`, pathLength: 1 }),
    /* @__PURE__ */ jsx("path", { className: `ui-tsc__mark ui-tsc__x2`, d: `M14.5 9.5l-5 5`, pathLength: 1 }),
    /* @__PURE__ */ jsx("path", { className: `ui-tsc__info`, d: `M12 11.2v4.6M12 8.2h.01` })
  ] });
}
var B1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, className: `ui-tsc__glyph`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M7.5 7.5l9 9M16.5 7.5l-9 9` }) });
var x = (e) => String(e.id);
function SComponent({
  t: t_1,
  layout,
  edge,
  paused,
  defaultDuration,
  hairline,
  closeButton,
  onHeight
}) {
  let [u2, setU] = n3.useState(false);
  let [f2, setF] = n3.useState(false);
  let [h2, setH] = n3.useState(null);
  let ref = n3.useRef(null);
  let vRef = n3.useRef(null);
  let SRef = n3.useRef({
    title: t_1.title,
    description: t_1.description,
    version: t_1.version
  });
  let CRef = n3.useRef(0);
  let wRef = n3.useRef({
    version: -1,
    left: 0
  });
  let TRef = n3.useRef(null);
  let ERef = n3.useRef(false);
  let D2 = !!t_1.removing;
  n3.useEffect(() => {
    let e = requestAnimationFrame(() => requestAnimationFrame(() => setU(true)));
    return () => cancelAnimationFrame(e);
  }, []);
  n3.useLayoutEffect(() => {
    let _Ref_current = ref.current;
    if (!_Ref_current) {
      return;
    }
    let n4 = x(t_1);
    let r2 = () => onHeight(n4, _Ref_current.offsetHeight);
    r2();
    let i2 = new ResizeObserver(r2);
    i2.observe(_Ref_current);
    return () => i2.disconnect();
  }, []);
  n3.useLayoutEffect(() => {
    let SRef_current = SRef.current;
    if (SRef_current.version !== t_1.version) {
      SRef.current = {
        title: t_1.title,
        description: t_1.description,
        version: t_1.version
      };
      if (SRef_current.title !== t_1.title || SRef_current.description !== t_1.description) {
        setH(SRef_current);
        window.clearTimeout(CRef.current);
        CRef.current = window.setTimeout(() => setH(null), 320);
      }
    }
  }, [t_1.version]);
  n3.useEffect(() => () => window.clearTimeout(CRef.current), []);
  let left = t_1.duration ?? defaultDuration;
  let k = t_1.type !== `loading` && Number.isFinite(left);
  let A2 = k && !paused && !f2 && !D2;
  n3.useEffect(() => {
    if (wRef.current.version !== t_1.version) {
      wRef.current = {
        version: t_1.version,
        left
      };
    }
    if (!A2) {
      return;
    }
    let t_1_version = t_1.version;
    let n4 = Date.now();
    let r2 = window.setTimeout(() => dismiss(t_1.id), Math.max(0, wRef.current.left));
    return () => {
      window.clearTimeout(r2);
      if (wRef.current.version === t_1_version) {
        wRef.current.left -= Date.now() - n4;
      }
    };
  }, [A2, t_1.version, left, t_1.id]);
  let onPointerDown = (e) => {
    if (!(e.button !== 0 || D2 || e.target.closest(`button, a, input, textarea, select`))) {
      TRef.current = {
        pointer: e.pointerId,
        x: e.clientX,
        y: e.clientY,
        axis: null,
        samples: []
      };
      ERef.current = false;
    }
  };
  let onPointerMove = (e) => {
    let TRef_current = TRef.current;
    let vRef_current = vRef.current;
    if (!TRef_current || TRef_current.pointer !== e.pointerId || !vRef_current) {
      return;
    }
    let r2 = e.clientX - TRef_current.x;
    let a2 = e.clientY - TRef_current.y;
    if (!TRef_current.axis) {
      if (Math.hypot(r2, a2) < 6) {
        return;
      }
      TRef_current.axis = Math.abs(r2) > Math.abs(a2) ? `x` : `y`;
      e.currentTarget.setPointerCapture(e.pointerId);
      ERef.current = true;
      setF(true);
      vRef_current.style.transition = `none`;
    }
    let v_1 = TRef_current.axis === `x` ? r2 : a2;
    let s2 = TRef_current.axis === `x` || v_1 * edge > 0;
    if (!s2) {
      v_1 = Math.sign(v_1) * Math.abs(v_1) ** 0.7 * 0.6;
    }
    let c2 = TRef_current.axis === `x` ? vRef_current.offsetWidth : vRef_current.offsetHeight * 2;
    vRef_current.style.transform = TRef_current.axis === `x` ? `translateX(${v_1}px)` : `translateY(${v_1}px)`;
    vRef_current.style.opacity = s2 ? String(Math.max(0.25, 1 - Math.abs(v_1) / (c2 * 1.1))) : ``;
    TRef_current.samples.push({
      v: v_1,
      at: e.timeStamp
    });
    if (TRef_current.samples.length > 6) {
      TRef_current.samples.shift();
    }
  };
  let N = (t) => {
    let TRef_current = TRef.current;
    let vRef_current = vRef.current;
    if (!TRef_current || TRef_current.pointer !== t.pointerId || (TRef.current = null, !TRef_current.axis || !vRef_current)) {
      return;
    }
    setF(false);
    let a2 = TRef_current.samples[TRef_current.samples.length - 1] ?? {
      v: 0,
      at: 0
    };
    let o2 = TRef_current.samples[0] ?? a2;
    let s2 = a2.at > o2.at ? (a2.v - o2.v) / (a2.at - o2.at) : 0;
    let c2 = TRef_current.axis === `x` || a2.v * edge > 0;
    let l2 = Math.abs(s2) > 0.45 && Math.sign(s2) === Math.sign(a2.v);
    if (t.type === `pointerup` && c2 && (Math.abs(a2.v) > 64 || l2)) {
      let t2 = (TRef_current.axis === `x` ? vRef_current.offsetWidth : vRef_current.offsetHeight) + 48;
      vRef_current.style.transition = `transform 300ms cubic-bezier(0.22, 1, 0.36, 1), opacity 240ms ease`;
      vRef_current.style.transform = `${TRef_current.axis === `x` ? `translateX` : `translateY`}(${Math.sign(a2.v) * t2}px)`;
      vRef_current.style.opacity = `0`;
      dismiss(t_1.id);
    } else {
      vRef_current.style.transition = ``;
      vRef_current.style.transform = ``;
      vRef_current.style.opacity = ``;
    }
  };
  let P = -edge;
  let transform = `translateY(${P * layout.y}px) scale(${layout.scale})`;
  if (!u2) {
    transform = `translateY(${edge * 100}%) scale(${layout.scale})`;
  }
  if (D2) {
    transform = `translateY(${P * layout.y + edge * 10}px) scale(${layout.scale * 0.96})`;
  }
  let I = t_1.type === `loading` ? /* @__PURE__ */ jsx(Y1Component, {}) : t_1.icon ?? (t_1.type === "default" ? null : /* @__PURE__ */ jsx(Y1Component, {}));
  return /* @__PURE__ */ jsx("li", { className: `ui-tsc__toast`, "data-toast-id": x(t_1), "data-type": t_1.type, "data-behind": layout.behind || void 0, "data-removing": D2 || void 0, "data-swiping": f2 || void 0, tabIndex: 0, inert: layout.hidden || D2, style: {
    transform,
    opacity: !u2 || D2 || layout.hidden ? 0 : 1,
    height: layout.height ? `${layout.height}px` : void 0,
    zIndex: layout.z
  }, onPointerDown, onPointerMove, onPointerUp: N, onPointerCancel: N, onClickCapture: (e) => {
    if (ERef.current) {
      ERef.current = false;
      e.stopPropagation();
      e.preventDefault();
    }
  }, children: /* @__PURE__ */ jsxs("div", { ref: vRef, className: `ui-tsc__swipe`, children: [
    /* @__PURE__ */ jsxs("div", { className: `ui-tsc__card`, children: [
      /* @__PURE__ */ jsxs("div", { ref, className: `ui-tsc__content`, "data-action": t_1.action ? `` : void 0, children: [
        I && /* @__PURE__ */ jsx("span", { className: `ui-tsc__icon`, "data-type": t_1.icon && t_1.type !== `loading` ? `custom` : t_1.type, children: I }),
        /* @__PURE__ */ jsxs("div", { className: `ui-tsc__text`, children: [
          /* @__PURE__ */ jsxs("div", { className: `ui-tsc__copy`, "data-changed": t_1.version > 0 || void 0, children: [
            /* @__PURE__ */ jsx("div", { className: `ui-tsc__title`, children: t_1.title }),
            t_1.description != null && t_1.description !== `` && /* @__PURE__ */ jsx("div", { className: `ui-tsc__desc`, children: t_1.description })
          ] }, t_1.version),
          h2 && /* @__PURE__ */ jsxs("div", { className: `ui-tsc__copy ui-tsc__ghost`, "aria-hidden": `true`, children: [
            /* @__PURE__ */ jsx("div", { className: `ui-tsc__title`, children: h2.title }),
            h2.description != null && h2.description !== `` && /* @__PURE__ */ jsx("div", { className: `ui-tsc__desc`, children: h2.description })
          ] }, `ghost-${h2.version}`)
        ] }),
        t_1.action && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-tsc__action`, onClick: (t) => {
          t_1.action.onClick(t);
          if (!t.defaultPrevented) {
            dismiss(t_1.id);
          }
        }, children: t_1.action.label })
      ] }),
      hairline && k && /* @__PURE__ */ jsx("span", { className: `ui-tsc__timer`, "aria-hidden": `true`, style: {
        animationDuration: `${left}ms`,
        animationPlayState: A2 ? `running` : `paused`
      } }, t_1.version)
    ] }),
    closeButton && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-tsc__close`, "aria-label": `Dismiss notification`, onClick: () => dismiss(t_1.id), children: /* @__PURE__ */ jsx(B1Component, {}) })
  ] }) });
}
var C = 10;
var w = 0.05;
var T = {
  y: 0,
  scale: 1,
  height: 0,
  z: 0,
  behind: false,
  hidden: true
};
function EComponent({
  position = `bottom-right`,
  inline = false,
  id,
  duration = 4e3,
  visibleToasts = 3,
  expand = false,
  offset,
  gap = 10,
  hotkey = `F8`,
  hairline = true,
  closeButton = true,
  label = `Notifications`,
  className
}) {
  let y = n3.useSyncExternalStore(l, u, d);
  let [b, setB] = n3.useState({});
  let [O2, setO] = n3.useState(false);
  let [A2, setA] = n3.useState(false);
  let [M, setM] = n3.useState(false);
  let [P, setP] = n3.useState(false);
  let [I, setI] = n3.useState(``);
  let [te, setTe] = n3.useState(``);
  let LRef = n3.useRef(null);
  let RRef = n3.useRef(/* @__PURE__ */ new Map());
  let zRef = n3.useRef(0);
  let BRef = n3.useRef(null);
  let VRef = n3.useRef(`mouse`);
  let HRef = n3.useRef(/* @__PURE__ */ new Map());
  let [U, W] = position.split(`-`);
  let edge = U === `bottom` ? 1 : -1;
  let K = y.filter((e) => (e.toaster ?? null) === (id ?? null)).reverse();
  let q = K.filter((e) => !e.removing);
  let J = expand || O2 || A2 || M;
  let re = O2 || A2 || M || P;
  let Y = Math.max(1, visibleToasts);
  let onHeight = n3.useCallback((e, t) => {
    setB((n4) => {
      if (n4[e] === t) {
        return n4;
      }
      return {
        ...n4,
        [e]: t
      };
    });
  }, []);
  let X = q[0] && b[x(q[0])] || zRef.current;
  if (X) {
    zRef.current = X;
  }
  let Z = /* @__PURE__ */ new Map();
  let y_1 = 0;
  q.forEach((e, t) => {
    let height = b[x(e)] ?? 0;
    let r2 = Math.min(t, Y - 1);
    let i2 = J ? {
      y: y_1,
      scale: 1,
      height,
      z: q.length - t,
      behind: false,
      hidden: t >= Y
    } : {
      y: r2 * C,
      scale: 1 - r2 * w,
      height: t === 0 ? height : X,
      z: q.length - t,
      behind: t > 0,
      hidden: t >= Y
    };
    if (t < Y) {
      y_1 += height + gap;
    }
    Z.set(x(e), i2);
    RRef.current.set(x(e), i2);
  });
  let ae = Math.min(q.length, Y);
  let oe = q.length ? J ? Math.max(0, y_1 - gap) : X + C * (ae - 1) : 0;
  n3.useEffect(() => {
    let e = new Set(K.map(x));
    setB((t) => {
      let n4 = Object.keys(t).filter((t2) => !e.has(t2));
      if (!n4.length) {
        return t;
      }
      let r2 = {
        ...t
      };
      n4.forEach((e2) => delete r2[e2]);
      return r2;
    });
    RRef.current.forEach((t, n4) => !e.has(n4) && RRef.current.delete(n4));
    if (!q.length) {
      setM(false);
    }
  }, [y]);
  n3.useEffect(() => {
    let LRef_current = LRef.current;
    if (LRef_current) {
      q.forEach((t) => {
        let n4 = x(t);
        if (HRef.current.get(n4) === t.version) {
          return;
        }
        HRef.current.set(n4, t.version);
        let r2 = Array.from(LRef_current.querySelectorAll(`[data-toast-id]`)).find((e) => e.dataset.toastId === n4)?.querySelector(`.ui-tsc__copy:not(.ui-tsc__ghost)`)?.textContent?.trim();
        if (r2) {
          (t.type === `error` ? setTe : setI)((e) => {
            if (e === r2) {
              return `${r2}\xA0`;
            }
            return r2;
          });
        }
      });
      HRef.current.forEach((e, t) => !K.some((e2) => x(e2) === t) && HRef.current.delete(t));
    }
  }, [y]);
  n3.useEffect(() => {
    let e = () => setP(document.visibilityState === `hidden`);
    e();
    document.addEventListener(`visibilitychange`, e);
    return () => document.removeEventListener(`visibilitychange`, e);
  }, []);
  n3.useEffect(() => {
    if (!M) {
      return;
    }
    let e = (e2) => {
      if (!LRef.current?.contains(e2.target)) {
        setM(false);
      }
    };
    document.addEventListener(`pointerdown`, e);
    return () => document.removeEventListener(`pointerdown`, e);
  }, [M]);
  let $ = () => Array.from(LRef.current?.querySelectorAll(`[data-toast-id]:not([data-removing])`) ?? []);
  n3.useEffect(() => {
    if (!hotkey) {
      return;
    }
    let e = (e2) => {
      if (e2.key !== hotkey && e2.code !== hotkey) {
        return;
      }
      let t = $().find((e3) => !e3.inert);
      if (t) {
        e2.preventDefault();
        if (!LRef.current?.contains(document.activeElement)) {
          BRef.current = document.activeElement;
        }
        t.focus();
      }
    };
    window.addEventListener(`keydown`, e);
    return () => window.removeEventListener(`keydown`, e);
  }, [hotkey]);
  let onKeyDown = (e) => {
    if (e.key !== `Escape` || !q.length) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    let t = e.target.closest(`[data-toast-id]`);
    let n4 = q.find((e2) => x(e2) === t?.dataset.toastId) ?? q[0];
    let r2 = q.indexOf(n4);
    dismiss(n4.id);
    let i2 = q.filter((e2) => e2 !== n4)[Math.min(r2, q.length - 2)];
    let a2 = i2 && $().find((e2) => e2.dataset.toastId === x(i2));
    if (a2) {
      a2.focus();
    } else if (BRef.current?.isConnected) {
      BRef.current.focus();
    } else {
      document.activeElement?.blur();
    }
  };
  let onFocus = (e) => {
    if (e.target.matches(`:focus-visible`)) {
      setA(true);
    }
  };
  let onBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setA(false);
    }
  };
  let style_1 = {
    "--ui-tsc-offset": offset === void 0 ? void 0 : `${offset}px`
  };
  return /* @__PURE__ */ jsxs("section", { ref: LRef, className: [`ui-tsc`, className].filter(Boolean).join(` `), "data-y": U, "data-x": W, "data-inline": inline || void 0, "data-expanded": J || void 0, "data-empty": !q.length || void 0, "aria-label": hotkey ? `${label} (${hotkey})` : label, tabIndex: -1, style: style_1, onKeyDown, onFocus, onBlur, onPointerDownCapture: (e) => VRef.current = e.pointerType, onPointerEnter: (e) => e.pointerType === `mouse` && setO(true), onPointerLeave: (e) => e.pointerType === `mouse` && setO(false), onClick: () => VRef.current !== `mouse` && q.length > 1 && setM(true), children: [
    /* @__PURE__ */ jsx("style", { href: `ui-toaster-clean`, precedence: `default`, children: D }),
    /* @__PURE__ */ jsx("ol", { className: `ui-tsc__list`, style: {
      height: `${oe}px`
    }, children: K.map((t_2) => /* @__PURE__ */ jsx(SComponent, { t: t_2, layout: Z.get(x(t_2)) ?? RRef.current.get(x(t_2)) ?? T, edge, paused: re || (Z.get(x(t_2))?.hidden ?? false), defaultDuration: duration, hairline, closeButton, onHeight }, x(t_2))) }),
    /* @__PURE__ */ jsx("div", { className: `ui-tsc__sr`, role: `status`, "aria-live": `polite`, children: I }),
    /* @__PURE__ */ jsx("div", { className: `ui-tsc__sr`, role: `alert`, children: te })
  ] });
}
var D = `.ui-tsc{--ui-tsc-card: #ffffff;--ui-tsc-strong: #000000;--ui-tsc-ink: rgba(0, 0, 0, 0.88);--ui-tsc-text: rgba(0, 0, 0, 0.61);--ui-tsc-icon: rgba(0, 0, 0, 0.447);--ui-tsc-faint: rgba(0, 0, 0, 0.27);--ui-tsc-hairline: rgba(0, 0, 0, 0.1);--ui-tsc-success: #1a9a52;--ui-tsc-danger: #e5484d;--ui-tsc-accent: rgba(0, 96, 226, 0.765);--ui-tsc-focus: rgba(0, 96, 226, 0.35);--ui-tsc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-tsc-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.07);--ui-tsc-shadow-float: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 10px 24px -10px rgba(0, 0, 0, 0.14);--ui-tsc-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-tsc-width: 356px;--ui-tsc-offset: 24px;position: fixed;z-index: 9999;box-sizing: border-box;container-type: inline-size;width: var(--ui-tsc-width);max-width: calc(100% - 2 * var(--ui-tsc-offset));margin: 0;padding: 0;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;font-weight: 400;line-height: 20px;color: var(--ui-tsc-text);text-align: left;-webkit-font-smoothing: antialiased;outline: none}.ui-tsc[data-inline]{position: absolute;z-index: 20;--ui-tsc-offset: 20px}.ui-tsc[data-empty]{pointer-events: none}.ui-tsc *, .ui-tsc *::before, .ui-tsc *::after{box-sizing: border-box}:where(.ui-tsc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-tsc) svg{display: block;flex: none}.ui-tsc button:focus-visible{outline: 2px solid var(--ui-tsc-focus);outline-offset: 1px}.ui-tsc[data-y="bottom"]{bottom: var(--ui-tsc-offset)}.ui-tsc[data-y="top"]{top: var(--ui-tsc-offset)}.ui-tsc[data-x="right"]{right: var(--ui-tsc-offset)}.ui-tsc[data-x="left"]{left: var(--ui-tsc-offset)}.ui-tsc[data-x="center"]{left: 50%;transform: translateX(-50%)}.ui-tsc:not([data-inline])[data-y="bottom"]{bottom: max(var(--ui-tsc-offset), env(safe-area-inset-bottom))}.ui-tsc__list{position: relative;margin: 0;padding: 0;list-style: none}.ui-tsc__toast{position: absolute;left: 0;right: 0;outline: none;touch-action: none;-webkit-user-select: none;user-select: none;transition: transform 440ms var(--ui-tsc-ease), opacity 320ms ease, height 380ms var(--ui-tsc-ease)}.ui-tsc[data-y="bottom"] .ui-tsc__toast{bottom: 0;transform-origin: 50% 0}.ui-tsc[data-y="top"] .ui-tsc__toast{top: 0;transform-origin: 50% 100%}.ui-tsc__toast[data-removing]{pointer-events: none;transition: transform 380ms var(--ui-tsc-ease), opacity 260ms ease, height 380ms var(--ui-tsc-ease)}.ui-tsc__swipe{position: relative;height: 100%;transition: transform 460ms cubic-bezier(0.34, 1.3, 0.64, 1), opacity 260ms ease}.ui-tsc__toast[data-swiping]{cursor: grabbing}.ui-tsc__card{position: relative;height: 100%;overflow: hidden;border-radius: 10px;background: var(--ui-tsc-card);box-shadow: var(--ui-tsc-shadow-float)}.ui-tsc__toast:focus-visible .ui-tsc__card{outline: 2px solid var(--ui-tsc-focus);outline-offset: 2px}.ui-tsc__content{display: flex;align-items: flex-start;gap: 8px;padding: 12px 14px 12px 12px;transition: opacity 260ms ease}.ui-tsc__content[data-action]{padding-right: 12px}.ui-tsc__toast[data-behind] .ui-tsc__content, .ui-tsc__toast[data-behind] .ui-tsc__timer{opacity: 0}.ui-tsc__text{position: relative;flex: 1;min-width: 0}.ui-tsc__title{font-weight: 500;line-height: 20px;color: var(--ui-tsc-strong);overflow-wrap: anywhere}.ui-tsc__desc{font-size: 13px;line-height: 20px;color: var(--ui-tsc-text);overflow-wrap: anywhere}.ui-tsc__copy[data-changed]{animation: ui-tsc-text-in 300ms var(--ui-tsc-ease) both}.ui-tsc__ghost{position: absolute;top: 0;left: 0;right: 0;pointer-events: none;animation: ui-tsc-text-out 220ms ease both}.ui-tsc__icon{display: grid;place-items: center;flex: none;width: 16px;height: 20px;color: var(--ui-tsc-icon);transition: color 300ms ease}.ui-tsc__icon[data-type="success"]{color: var(--ui-tsc-success)}.ui-tsc__icon[data-type="error"]{color: var(--ui-tsc-danger)}.ui-tsc__icon[data-type="info"]{color: var(--ui-tsc-accent)}.ui-tsc__icon[data-type="custom"] > *{width: 16px;height: 16px}.ui-tsc__status{width: 16px;height: 16px;overflow: visible;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-tsc__icon[data-type="success"] .ui-tsc__status, .ui-tsc__icon[data-type="error"] .ui-tsc__status{animation: ui-tsc-pop 460ms cubic-bezier(0.34, 1.56, 0.64, 1) both}.ui-tsc__spin{transform-box: fill-box;transform-origin: center;animation: ui-tsc-spin 760ms linear infinite;animation-play-state: paused}.ui-tsc__icon[data-type="loading"] .ui-tsc__spin{animation-play-state: running}.ui-tsc__ring{stroke-dasharray: 1 0;stroke-opacity: 0.24;transition: stroke-dasharray 560ms var(--ui-tsc-ease), stroke-opacity 360ms ease}.ui-tsc__icon[data-type="loading"] .ui-tsc__ring{stroke-dasharray: 0.28 0.72;stroke-opacity: 1}.ui-tsc__mark{stroke-dasharray: 1;stroke-dashoffset: 1;opacity: 0}.ui-tsc__info{opacity: 0;transition: opacity 240ms ease}.ui-tsc__icon[data-type="success"] .ui-tsc__check, .ui-tsc__icon[data-type="error"] .ui-tsc__x1, .ui-tsc__icon[data-type="error"] .ui-tsc__x2{opacity: 1;stroke-dashoffset: 0;animation: ui-tsc-draw 340ms var(--ui-tsc-ease) 160ms both}.ui-tsc__icon[data-type="error"] .ui-tsc__x2{animation-delay: 260ms}.ui-tsc__icon[data-type="info"] .ui-tsc__info{opacity: 1}.ui-tsc__action{flex: none;align-self: center;height: 28px;margin: -4px 0;padding: 0 10px;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;white-space: nowrap;transition: background-color 140ms ease, box-shadow 140ms ease, transform 160ms var(--ui-tsc-ease)}:where(.ui-tsc) .ui-tsc__action{background: var(--ui-tsc-card);box-shadow: var(--ui-tsc-shadow);color: var(--ui-tsc-strong)}.ui-tsc__action:hover{box-shadow: var(--ui-tsc-shadow-hover)}.ui-tsc__action:active{transform: scale(0.97)}.ui-tsc__close{position: absolute;top: -7px;left: -7px;z-index: 1;display: grid;place-items: center;width: 20px;height: 20px;border-radius: 50%;opacity: 0;transform: scale(0.8);transition: opacity 160ms ease, transform 200ms var(--ui-tsc-ease), color 160ms ease, box-shadow 160ms ease}:where(.ui-tsc) .ui-tsc__close{background: var(--ui-tsc-card);box-shadow: var(--ui-tsc-shadow);color: var(--ui-tsc-icon)}.ui-tsc__close::before{content: "";position: absolute;inset: -6px}.ui-tsc__close:hover{color: var(--ui-tsc-ink);box-shadow: var(--ui-tsc-shadow-hover)}.ui-tsc__toast:not([data-behind]):hover .ui-tsc__close, .ui-tsc__toast:not([data-behind]):focus-within .ui-tsc__close{opacity: 1;transform: none}.ui-tsc__glyph{width: 10px;height: 10px;fill: none;stroke: currentColor;stroke-width: 2.2;stroke-linecap: round}.ui-tsc__timer{position: absolute;left: 12px;right: 12px;bottom: 0;height: 1px;background: var(--ui-tsc-hairline);transform-origin: left;animation-name: ui-tsc-timer;animation-timing-function: linear;animation-fill-mode: both;transition: opacity 260ms ease}.ui-tsc__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-tsc-spin{to{transform: rotate(360deg)}}@keyframes ui-tsc-draw{from{stroke-dashoffset: 1}to{stroke-dashoffset: 0}}@keyframes ui-tsc-pop{0%{transform: scale(0.82)}55%{transform: scale(1.08)}100%{transform: scale(1)}}@keyframes ui-tsc-timer{from{transform: scaleX(1)}to{transform: scaleX(0)}}@keyframes ui-tsc-text-in{from{opacity: 0;transform: translateY(4px);filter: blur(3px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-tsc-text-out{from{opacity: 1}to{opacity: 0;transform: translateY(-4px);filter: blur(3px)}}@container (max-width: 300px){.ui-tsc__content{padding: 10px 12px 10px 10px}}@media (max-width: 600px){.ui-tsc, .ui-tsc[data-x]{left: 12px;right: 12px;width: auto;max-width: none;transform: none}.ui-tsc[data-y="bottom"]{bottom: 12px}.ui-tsc:not([data-inline])[data-y="bottom"]{bottom: max(12px, env(safe-area-inset-bottom))}.ui-tsc[data-y="top"]{top: 12px}}@media (hover: none) and (pointer: coarse){.ui-tsc__toast:not([data-behind]) .ui-tsc__close{opacity: 1;transform: none}.ui-tsc__close{width: 24px;height: 24px;top: -8px;left: -8px}.ui-tsc__close::before{inset: -8px}.ui-tsc__action{height: 36px;margin: -8px -2px -8px 0;padding: 0 14px}}@media (prefers-reduced-motion: reduce){.ui-tsc *:not(.ui-tsc__spin):not(.ui-tsc__timer), .ui-tsc *::before, .ui-tsc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-tsc{--ui-tsc-card: #1c1c1e;--ui-tsc-strong: #ffffff;--ui-tsc-ink: rgba(255, 255, 255, 0.9);--ui-tsc-text: rgba(255, 255, 255, 0.62);--ui-tsc-icon: rgba(255, 255, 255, 0.46);--ui-tsc-faint: rgba(255, 255, 255, 0.3);--ui-tsc-hairline: rgba(255, 255, 255, 0.14);--ui-tsc-success: #3ec27a;--ui-tsc-danger: #ff6369;--ui-tsc-accent: #4d8dff;--ui-tsc-focus: rgba(77, 141, 255, 0.5);--ui-tsc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-tsc-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-tsc-shadow-float: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 12px 28px -10px rgba(0, 0, 0, 0.6)}:where(.dark, [data-theme="dark"]) .ui-tsc .ui-tsc__action{background: rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-tsc .ui-tsc__close{background: #2a2a2d}`;
var O = (e, t = false) => new Promise((resolve, reject) => window.setTimeout(() => {
  if (t) {
    return reject(Error(`Timeout`));
  }
  return resolve();
}, e));
var K1Component = ({
  d: d2
}) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: d2 }) });
var A = {
  save: `M6 4h9.5L20 8.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8 4v4.5h7V4M8 20v-6h8v6`,
  trash: `M4.5 7h15M10 11v5.5M14 11v5.5M6 7l.8 11.2A2 2 0 0 0 8.8 20h6.4a2 2 0 0 0 2-1.8L18 7M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2`,
  upload: `M12 15V4M7.5 8.5 12 4l4.5 4.5M5 15v3.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V15`,
  sync: `M19.5 12a7.5 7.5 0 0 1-13.3 4.8M4.5 12a7.5 7.5 0 0 1 13.3-4.8M18 3.5v4h-4M6 20.5v-4h4`,
  doc: `M7 3.5h7l4.5 4.5v11a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5zM14 3.5V8h4.5M8.5 12.5h7M8.5 16h5`
};
function JComponent() {
  let e = n3.useId();
  let tRef = n3.useRef(/* @__PURE__ */ new Set());
  let i2 = (t = {}) => ({
    toaster: e,
    ...t
  });
  let a2 = (e2) => tRef.current.add(e2);
  let o2 = (e2) => a2(v.success(`Draft saved`, i2({
    description: `Q3 Board Report \xB7 all changes kept`,
    ...e2
  })));
  let s2 = (e2) => a2(v(`File moved to trash`, {
    ...i2(e2),
    description: `Budget-2027.xlsx`,
    icon: /* @__PURE__ */ jsx(K1Component, { d: A.trash }),
    action: {
      label: `Undo`,
      onClick: () => a2(v.success(`File restored`, i2({
        description: `Budget-2027.xlsx is back in Reports`
      })))
    }
  }));
  let c2 = (t) => {
    let n4 = `${e}-upload-${Date.now()}`;
    a2(n4);
    v.promise(O(2400), {
      loading: {
        title: `Uploading report\u2026`,
        description: `Q3-Board-Report.pdf \xB7 4.2\xA0MB`
      },
      success: {
        title: `Report uploaded`,
        description: `Shared with 4 people in Finance`
      },
      error: `Upload failed`
    }, {
      ...i2(t),
      id: n4
    });
  };
  n3.useEffect(() => {
    let e2 = [window.setTimeout(() => o2({
      duration: 9e3
    }), 500), window.setTimeout(() => s2({
      duration: 9e3
    }), 1300), window.setTimeout(() => c2({
      duration: 9e3
    }), 2100)];
    let tRef_current = tRef.current;
    return () => {
      e2.forEach(clearTimeout);
      tRef_current.forEach((e3) => v.dismiss(e3));
      tRef_current.clear();
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: `toaster-demo toaster-demo--clean`, children: /* @__PURE__ */ jsxs("div", { className: `toaster-demo__col`, children: [
    /* @__PURE__ */ jsxs("div", { className: `toaster-demo__panel`, children: [
      /* @__PURE__ */ jsxs("div", { className: `toaster-demo__card`, children: [
        /* @__PURE__ */ jsxs("div", { className: `toaster-demo__head`, children: [
          /* @__PURE__ */ jsx("span", { className: `toaster-demo__doc`, children: /* @__PURE__ */ jsx(K1Component, { d: A.doc }) }),
          /* @__PURE__ */ jsxs("div", { className: `toaster-demo__meta`, children: [
            /* @__PURE__ */ jsx("span", { className: `toaster-demo__name`, children: `Q3 Board Report` }),
            /* @__PURE__ */ jsx("span", { className: `toaster-demo__sub`, children: `Finance \xB7 edited 2 min ago` })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `toaster-demo__grid`, children: [
          /* @__PURE__ */ jsxs("button", { type: `button`, className: `toaster-demo__btn`, onClick: () => o2(), children: [
            /* @__PURE__ */ jsx(K1Component, { d: A.save }),
            `Save draft`
          ] }),
          /* @__PURE__ */ jsxs("button", { type: `button`, className: `toaster-demo__btn`, onClick: () => s2(), children: [
            /* @__PURE__ */ jsx(K1Component, { d: A.trash }),
            `Delete file`
          ] }),
          /* @__PURE__ */ jsxs("button", { type: `button`, className: `toaster-demo__btn`, onClick: () => c2(), children: [
            /* @__PURE__ */ jsx(K1Component, { d: A.upload }),
            `Upload report`
          ] }),
          /* @__PURE__ */ jsxs("button", { type: `button`, className: `toaster-demo__btn`, onClick: () => {
            let t = `${e}-sync-${Date.now()}`;
            a2(t);
            v.promise(O(2200, true), {
              loading: `Syncing with Google Drive\u2026`,
              success: `Synced`,
              error: {
                title: `Couldn't sync`,
                description: `Google Drive didn't respond. Try again in a minute.`
              }
            }, i2({
              id: t
            }));
          }, children: [
            /* @__PURE__ */ jsx(K1Component, { d: A.sync }),
            `Sync`
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: `toaster-demo__foot`, children: [
        `Press `,
        /* @__PURE__ */ jsx("kbd", { children: `F8` }),
        ` to jump to notifications`
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `toaster-demo__slot`, children: /* @__PURE__ */ jsx(EComponent, { id: e, inline: true, position: `top-center` }) })
  ] }) });
}

export {
  JComponent
};
