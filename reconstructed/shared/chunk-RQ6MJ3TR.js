import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/component-D_NiR_dg.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = {
  low: `Low`,
  medium: `Medium`,
  high: `High`
};
function AComponent({
  title,
  description,
  risk,
  icon,
  details,
  preview,
  children,
  status,
  defaultStatus = `pending`,
  onApprove,
  onDeny,
  onEdit,
  expiresIn,
  onExpire,
  allowAlways = true,
  alwaysLabel = `Always allow this action`,
  approveLabel = `Approve`,
  denyLabel = `Deny`,
  editLabel = `Edit`,
  shortcuts = true,
  label: label_1,
  actions = `tray`,
  className
}) {
  let p = n3.useId();
  let [ge, setGe] = n3.useState(defaultStatus);
  let h = status ?? ge;
  let g = h !== `pending`;
  let [_, set_] = n3.useState(false);
  let [y, setY] = n3.useState(false);
  let [x, setX] = n3.useState(`user`);
  let [C, setC] = n3.useState(() => {
    if (g) {
      return Date.now();
    }
    return null;
  });
  let [_e, set_e] = n3.useState(``);
  let [ve, setVe] = n3.useState(false);
  let [ye, setYe] = n3.useState(false);
  let [be, setBe] = n3.useState(`\u2318`);
  let [O, setO] = n3.useState(h);
  let [k, setK] = n3.useState(false);
  let [j, setJ] = n3.useState(false);
  if (O !== h) {
    setO(h);
    if (h === `pending`) {
      setK(false);
      setJ(true);
      set_(false);
      setY(false);
      setX(`user`);
      setC(null);
      set_e(``);
    } else {
      setK(O === `pending`);
      setJ(false);
      setC(Date.now());
      set_e(`${h === `approved` ? `Approved` : x === `timeout` ? `Expired` : `Denied`}: ${title}`);
    }
  }
  let NRef = n3.useRef(null);
  let PRef = n3.useRef(null);
  let FRef = n3.useRef(null);
  let IRef = n3.useRef(false);
  n3.useEffect(() => {
    let e = navigator.userAgentData?.platform ?? navigator.platform ?? ``;
    if (!/mac|iphone|ipad|ipod/i.test(e || navigator.userAgent)) {
      setBe(`Ctrl`);
    }
  }, []);
  let L = async () => {
    if (g || y) {
      return;
    }
    let e = onApprove?.({
      always: _
    });
    if (e && typeof e.then == `function`) {
      setY(true);
      try {
        await e;
      } catch {
        setY(false);
        return;
      }
      setY(false);
    }
    if (status === void 0) {
      setGe(`approved`);
    }
  };
  let R = (reason = `user`) => {
    if (!(g || y && reason === `user`)) {
      setX(reason);
      if (reason === `timeout`) {
        onExpire?.();
      }
      onDeny?.({
        reason
      });
      if (status === void 0) {
        setGe(`denied`);
      }
    }
  };
  let onKeyDown = (e) => {
    if (!(g || y || e.defaultPrevented)) {
      if (e.key === `Enter` && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        L();
      } else if (e.key === `Escape`) {
        e.preventDefault();
        R(`user`);
      }
    }
  };
  let z = expiresIn && expiresIn > 0 ? expiresIn * 1e3 : 0;
  let BRef = n3.useRef(z);
  let [V, setV] = n3.useState(Math.ceil(z / 1e3));
  let URef = n3.useRef(() => {
  });
  n3.useLayoutEffect(() => {
    URef.current = () => R(`timeout`);
  });
  n3.useEffect(() => {
    if (h === `pending`) {
      BRef.current = z;
      setV(Math.ceil(z / 1e3));
    }
  }, [h, z]);
  let W = ve || ye || y;
  n3.useEffect(() => {
    if (!z || g || W) {
      return;
    }
    let e = performance.now();
    let t = 0;
    let n4 = (r2) => {
      BRef.current -= r2 - e;
      e = r2;
      setV(Math.max(0, Math.ceil(BRef.current / 1e3)));
      if (BRef.current <= 0) {
        URef.current();
        return;
      }
      t = requestAnimationFrame(n4);
    };
    t = requestAnimationFrame(n4);
    return () => cancelAnimationFrame(t);
  }, [z, g, W]);
  let GRef = n3.useRef(0);
  let KRef = n3.useRef(false);
  let qRef = n3.useRef(false);
  n3.useEffect(() => {
    let NRef_current = NRef.current;
    if (!NRef_current || typeof ResizeObserver > `u`) {
      return;
    }
    let t = new ResizeObserver(() => {
      if (!KRef.current) {
        GRef.current = NRef_current.offsetHeight;
      }
    });
    t.observe(NRef_current);
    return () => t.disconnect();
  }, []);
  n3.useLayoutEffect(() => {
    let NRef_current = NRef.current;
    if (!NRef_current) {
      return;
    }
    if (!qRef.current) {
      qRef.current = true;
      GRef.current = NRef_current.offsetHeight;
      return;
    }
    let document_activeElement = document.activeElement;
    if (g && document_activeElement && NRef_current.contains(document_activeElement)) {
      PRef.current?.focus({
        preventScroll: true
      });
    }
    if (!g && IRef.current) {
      FRef.current?.focus({
        preventScroll: true
      });
    }
    IRef.current = false;
    let GRef_current = GRef.current;
    NRef_current.style.height = ``;
    let e_offsetHeight = NRef_current.offsetHeight;
    if (!GRef_current || GRef_current === e_offsetHeight) {
      return;
    }
    KRef.current = true;
    NRef_current.style.height = `${GRef_current}px`;
    NRef_current.offsetHeight;
    NRef_current.style.height = `${e_offsetHeight}px`;
    let i2 = window.setTimeout(() => {
      NRef_current.style.height = ``;
      KRef.current = false;
      GRef.current = NRef_current.offsetHeight;
    }, 560);
    return () => {
      window.clearTimeout(i2);
      NRef_current.style.height = ``;
      KRef.current = false;
    };
  }, [g]);
  let [, setWe] = n3.useState(0);
  n3.useEffect(() => {
    if (!g) {
      return;
    }
    let e = window.setInterval(() => setWe((e2) => e2 + 1), 3e4);
    return () => window.clearInterval(e);
  }, [g]);
  let J = `${p}-title`;
  let id = `${p}-row`;
  let X = `${p}-desc`;
  let Z = `${p}-timer`;
  let Q = preview ?? children;
  let Te = h === `approved` ? `Approved` : x === `timeout` ? `Expired` : `Denied`;
  let Ee = [description ? X : null, z && !g ? Z : null].filter(Boolean).join(` `);
  let $ = /* @__PURE__ */ jsxs("div", { className: `ui-ap__foot`, children: [
    z > 0 && /* @__PURE__ */ jsxs("span", { className: `ui-ap__expires`, "data-paused": W || void 0, "data-low": V <= 10 || void 0, "aria-hidden": `true`, children: [
      /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, children: [
        /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `6` }),
        /* @__PURE__ */ jsx("path", { d: `M8 5v3.2l2 1.3` })
      ] }),
      `Expires in `,
      ee(V)
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `ui-ap__actions`, children: [
      onEdit && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-ap__btn ui-ap__btn--ghost`, "aria-disabled": y || void 0, onClick: () => !y && onEdit(), children: editLabel }),
      /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-ap__btn ui-ap__btn--quiet ui-ap__deny`, "aria-keyshortcuts": `Escape`, "aria-disabled": y || void 0, onClick: () => R(`user`), children: [
        denyLabel,
        shortcuts && /* @__PURE__ */ jsx("kbd", { className: `ui-ap__kbd`, "aria-hidden": `true`, children: `Esc` })
      ] }),
      /* @__PURE__ */ jsxs("button", { ref: FRef, type: `button`, className: `ui-ap__btn ui-ap__btn--primary ui-ap__approve`, "aria-keyshortcuts": `Meta+Enter Control+Enter`, "aria-disabled": y || void 0, onClick: () => void L(), children: [
        approveLabel,
        y ? /* @__PURE__ */ jsx("svg", { className: `ui-ap__spinner`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `6` }) }) : shortcuts && /* @__PURE__ */ jsx("kbd", { className: `ui-ap__kbd`, "aria-hidden": `true`, children: be === `\u2318` ? `\u2318\u21B5` : `Ctrl \u21B5` })
      ] })
    ] })
  ] });
  return /* @__PURE__ */ jsxs("div", { ref: NRef, className: [`ui-ap`, className].filter(Boolean).join(` `), role: `group`, "aria-labelledby": g ? id : J, "aria-describedby": Ee || void 0, "aria-busy": y || void 0, "data-status": h, "data-busy": y || void 0, "data-label": label_1 ? `` : void 0, "data-actions": actions, onKeyDown, onPointerEnter: () => setVe(true), onPointerLeave: () => setVe(false), onFocus: () => setYe(true), onBlur: (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setYe(false);
    }
  }, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-approval-card`, precedence: `default`, children: ne }),
    label_1 && /* @__PURE__ */ jsx("div", { className: `ui-ap__label`, children: label_1 }),
    (!g || k) && /* @__PURE__ */ jsxs("div", { className: `ui-ap__pending`, "data-leaving": k || void 0, "data-entering": j || void 0, inert: k, "aria-hidden": k || void 0, onAnimationEnd: (e) => {
      if (e.target === e.currentTarget) {
        if (k) {
          setK(false);
        }
        if (j) {
          setJ(false);
        }
      }
    }, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-ap__card`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-ap__head`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-ap__icon`, "aria-hidden": `true`, children: icon ?? /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, children: [
            /* @__PURE__ */ jsx("path", { d: `M12 3 5 5.8v5.4c0 4.3 2.9 8.2 7 9.8 4.1-1.6 7-5.5 7-9.8V5.8L12 3Z` }),
            /* @__PURE__ */ jsx("path", { d: `m9.2 12.2 2 2 3.8-4` })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: `ui-ap__titles`, children: [
            /* @__PURE__ */ jsx("h3", { className: `ui-ap__title`, id: k ? void 0 : J, children: title }),
            description && /* @__PURE__ */ jsx("p", { className: `ui-ap__desc`, id: k ? void 0 : X, children: description })
          ] }),
          risk && /* @__PURE__ */ jsxs("span", { className: `ui-ap__risk`, "data-risk": risk, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-ap__risk-dot`, "aria-hidden": `true` }),
            i[risk],
            /* @__PURE__ */ jsx("span", { className: `ui-ap__risk-word`, children: ` risk` })
          ] })
        ] }),
        (Q || details?.length) && /* @__PURE__ */ jsxs("div", { className: `ui-ap__preview`, children: [
          Q && /* @__PURE__ */ jsx("div", { className: `ui-ap__custom`, children: Q }),
          details?.length ? /* @__PURE__ */ jsx("dl", { className: `ui-ap__details`, children: details.map((e, t) => /* @__PURE__ */ jsxs("div", { className: `ui-ap__detail`, children: [
            /* @__PURE__ */ jsx("dt", { children: e.label }),
            /* @__PURE__ */ jsx("dd", { children: e.value })
          ] }, e.label + t)) }) : null
        ] }),
        allowAlways && /* @__PURE__ */ jsxs("label", { className: `ui-ap__always`, children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-ap__box`, children: [
            /* @__PURE__ */ jsx("input", { type: `checkbox`, checked: _, disabled: y, onChange: (e) => set_(e.target.checked) }),
            /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M4 8.3 6.8 11 12 5.2` }) })
          ] }),
          /* @__PURE__ */ jsx("span", { className: `ui-ap__always-label`, children: alwaysLabel })
        ] }),
        actions === `card` && $
      ] }),
      actions === `tray` && $,
      z > 0 && /* @__PURE__ */ jsx("span", { className: `ui-ap__sr`, id: k ? void 0 : Z, children: `Expires in ${V} seconds unless approved. The timer pauses while the card is hovered or focused.` })
    ] }),
    g && /* @__PURE__ */ jsxs("div", { ref: PRef, className: `ui-ap__card ui-ap__resolved`, tabIndex: -1, "data-status": h, onFocus: () => IRef.current = true, onBlur: (e) => {
      if (e.relatedTarget || e.currentTarget.isConnected) {
        IRef.current = false;
      }
    }, children: [
      /* @__PURE__ */ jsx("span", { className: `ui-ap__mark`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, children: h === `approved` ? /* @__PURE__ */ jsx("path", { d: `M4.2 8.4 6.9 11 11.8 5.6`, pathLength: 1 }) : /* @__PURE__ */ jsx("path", { d: `M5.2 5.2 10.8 10.8M10.8 5.2 5.2 10.8`, pathLength: 1 }) }) }),
      /* @__PURE__ */ jsx("span", { className: `ui-ap__row-title`, id, children: title }),
      /* @__PURE__ */ jsxs("span", { className: `ui-ap__row-status`, children: [
        Te,
        h === `approved` && _ && /* @__PURE__ */ jsx("span", { className: `ui-ap__row-extra`, children: ` \xB7 Always` }),
        C !== null && /* @__PURE__ */ jsxs("span", { className: `ui-ap__row-time`, children: [
          ` \xB7 `,
          te(C)
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("span", { className: `ui-ap__sr`, role: `status`, "aria-live": `polite`, children: _e })
  ] });
}
function ee(e) {
  return `${Math.floor(e / 60)}:${String(e % 60).padStart(2, `0`)}`;
}
function te(e) {
  let t = Math.floor((Date.now() - e) / 1e3);
  if (t < 60) {
    return `just now`;
  }
  if (t < 3600) {
    return `${Math.floor(t / 60)} min ago`;
  }
  return `${Math.floor(t / 3600)} h ago`;
}
var ne = `.ui-ap{--ui-ap-tray: #f0f0f0;--ui-ap-bg: #ffffff;--ui-ap-ink: #171717;--ui-ap-text: #6b6b6b;--ui-ap-muted: #8a8a8a;--ui-ap-line: #ececec;--ui-ap-soft: #fafafa;--ui-ap-tile: #f4f4f4;--ui-ap-hover: #e4e4e5;--ui-ap-primary: #171717;--ui-ap-primary-hover: #2e2e2e;--ui-ap-primary-ink: #ffffff;--ui-ap-primary-kbd: rgba(255, 255, 255, 0.14);--ui-ap-primary-kbd-ink: rgba(255, 255, 255, 0.72);--ui-ap-kbd: rgba(0, 0, 0, 0.055);--ui-ap-box: #d4d4d4;--ui-ap-box-hover: #b5b5b5;--ui-ap-ring: rgba(23, 23, 23, 0.32);--ui-ap-timer-low: #b7791f;--ui-ap-low-bg: #f2f2f2;--ui-ap-low-ink: #6b6b6b;--ui-ap-med-bg: #fbf3e2;--ui-ap-med-ink: #8a5a00;--ui-ap-high-bg: #fdeceb;--ui-ap-high-ink: #b42318;--ui-ap-ok-bg: #e9f6ee;--ui-ap-ok-ink: #1a7f45;--ui-ap-no-bg: #f2f2f2;--ui-ap-no-ink: #6b6b6b;--ui-ap-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;min-width: 0;overflow: hidden;container-type: inline-size;padding: 4px;border-radius: 20px;background: var(--ui-ap-tray);color: var(--ui-ap-text);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 1.45;letter-spacing: -0.006em;text-align: left;-webkit-font-smoothing: antialiased;transition: height 520ms var(--ui-ap-ease)}.ui-ap *, .ui-ap *::before, .ui-ap *::after{box-sizing: border-box}.ui-ap__card{position: relative;border-radius: 16px;background: var(--ui-ap-bg);box-shadow: 0 0 0 1px var(--ui-ap-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-ap__pending > .ui-ap__card{padding: 16px}.ui-ap__pending[data-leaving]{position: absolute;top: 4px;left: 4px;right: 4px;pointer-events: none;animation: ui-ap-out 280ms var(--ui-ap-ease) both}.ui-ap__pending[data-entering]{animation: ui-ap-in 420ms var(--ui-ap-ease) 80ms both}.ui-ap[data-busy] .ui-ap__pending{pointer-events: none}.ui-ap__head{display: grid;grid-template-columns: auto minmax(0, 1fr) auto;align-items: start;gap: 12px}.ui-ap__icon{display: grid;place-items: center;width: 32px;height: 32px;border-radius: 9px;background: var(--ui-ap-tile);box-shadow: inset 0 0 0 1px var(--ui-ap-line);color: var(--ui-ap-ink)}.ui-ap__icon svg{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.7;stroke-linecap: round;stroke-linejoin: round}.ui-ap__titles{min-width: 0;padding-top: 1px}.ui-ap__title{margin: 0;overflow: hidden;color: var(--ui-ap-ink);font-size: 14px;font-weight: 550;line-height: 20px;letter-spacing: -0.011em;white-space: nowrap;text-overflow: ellipsis}.ui-ap__desc{margin: 1px 0 0;overflow: hidden;font-size: 13px;line-height: 18px;white-space: nowrap;text-overflow: ellipsis}.ui-ap__risk{display: inline-flex;align-items: center;gap: 6px;height: 22px;margin-top: 1px;padding: 0 9px 0 8px;border-radius: 999px;background: var(--ui-ap-low-bg);color: var(--ui-ap-low-ink);font-size: 12px;font-weight: 500;line-height: 1;white-space: nowrap}.ui-ap__risk-dot{width: 6px;height: 6px;border-radius: 50%;background: currentColor;opacity: 0.8}.ui-ap__risk-word{white-space: pre}.ui-ap__risk[data-risk="medium"]{background: var(--ui-ap-med-bg);color: var(--ui-ap-med-ink)}.ui-ap__risk[data-risk="high"]{background: var(--ui-ap-high-bg);color: var(--ui-ap-high-ink)}.ui-ap__preview{display: grid;gap: 12px;margin-top: 14px;padding: 12px;border-radius: 10px;background: var(--ui-ap-soft);box-shadow: inset 0 0 0 1px var(--ui-ap-line)}.ui-ap__custom{min-width: 0}.ui-ap__custom + .ui-ap__details{padding-top: 12px;border-top: 1px solid var(--ui-ap-line)}.ui-ap__details{display: grid;grid-template-columns: max-content minmax(0, 1fr);gap: 6px 16px;margin: 0}.ui-ap__detail{display: contents}.ui-ap__detail dt{color: var(--ui-ap-muted)}.ui-ap__detail dd{min-width: 0;margin: 0;overflow: hidden;color: var(--ui-ap-ink);white-space: nowrap;text-overflow: ellipsis}.ui-ap__always{display: flex;width: fit-content;max-width: 100%;margin-top: 14px;align-items: center;gap: 8px;min-width: 0;cursor: pointer;user-select: none}.ui-ap__always-label{overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-ap__box{position: relative;display: grid;flex: none;width: 16px;height: 16px}.ui-ap__box input{appearance: none;-webkit-appearance: none;width: 16px;height: 16px;margin: 0;border-radius: 5px;background: var(--ui-ap-bg);box-shadow: inset 0 0 0 1px var(--ui-ap-box);cursor: pointer;transition: background-color 160ms ease, box-shadow 160ms ease}.ui-ap__box input:hover{box-shadow: inset 0 0 0 1px var(--ui-ap-box-hover)}.ui-ap__box input:checked{background: var(--ui-ap-primary);box-shadow: inset 0 0 0 1px var(--ui-ap-primary)}.ui-ap__box input:focus-visible{outline: none;box-shadow: inset 0 0 0 1px var(--ui-ap-primary), 0 0 0 2px var(--ui-ap-bg), 0 0 0 4px var(--ui-ap-ring)}.ui-ap__box svg{position: absolute;inset: 0;width: 16px;height: 16px;fill: none;stroke: var(--ui-ap-primary-ink);stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round;opacity: 0;transform: scale(0.6);transition: opacity 160ms ease, transform 260ms var(--ui-ap-ease);pointer-events: none}.ui-ap__box input:checked + svg{opacity: 1;transform: none}.ui-ap__label{overflow: hidden;padding: 6px 8px 4px;color: var(--ui-ap-muted);font-size: 12.5px;line-height: 16px;white-space: nowrap;text-overflow: ellipsis}.ui-ap[data-label] .ui-ap__pending[data-leaving]{top: 30px}.ui-ap__card > .ui-ap__foot{min-height: 0;margin-top: 14px;padding: 0}.ui-ap__foot{display: flex;flex-wrap: wrap;align-items: center;gap: 6px 12px;min-height: 44px;padding: 6px 2px 2px 10px}.ui-ap__expires{display: inline-flex;align-items: center;gap: 6px;min-width: 0;color: var(--ui-ap-muted);font-size: 12.5px;font-variant-numeric: tabular-nums;white-space: nowrap;transition: color 300ms ease}.ui-ap__expires svg{width: 14px;height: 14px;flex: none;fill: none;stroke: currentColor;stroke-width: 1.5;stroke-linecap: round;stroke-linejoin: round}.ui-ap__expires[data-low]{color: var(--ui-ap-timer-low)}.ui-ap__actions{display: flex;flex: 0 0 auto;gap: 4px;margin-left: auto}.ui-ap__btn{display: inline-flex;align-items: center;justify-content: center;gap: 8px;height: 34px;padding: 0 12px;border: 0;border-radius: 10px;font: inherit;font-size: 13px;font-weight: 500;line-height: 1;white-space: nowrap;cursor: pointer;-webkit-tap-highlight-color: transparent;transition: background-color 160ms ease, box-shadow 160ms ease, transform 160ms var(--ui-ap-ease), opacity 160ms ease}.ui-ap__btn:active, .ui-ap__btn[data-pressed]{transform: scale(0.97)}.ui-ap__btn:focus-visible{outline: none}.ui-ap__btn--primary{padding-right: 8px;background: var(--ui-ap-primary);color: var(--ui-ap-primary-ink);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12)}.ui-ap__btn--primary:hover, .ui-ap__btn--primary[data-pressed]{background: var(--ui-ap-primary-hover)}.ui-ap__btn--primary:focus-visible{box-shadow: 0 0 0 2px var(--ui-ap-tray), 0 0 0 4px var(--ui-ap-ring)}.ui-ap__btn--quiet{padding-right: 8px;background: transparent;color: var(--ui-ap-ink)}.ui-ap__btn--quiet:hover, .ui-ap__btn--quiet[data-pressed]{background: var(--ui-ap-hover)}.ui-ap__btn--quiet:focus-visible{box-shadow: 0 0 0 2px var(--ui-ap-ring)}.ui-ap__btn--ghost{background: transparent;color: var(--ui-ap-text)}.ui-ap__btn--ghost:hover{background: var(--ui-ap-hover);color: var(--ui-ap-ink)}.ui-ap__btn--ghost:focus-visible{box-shadow: 0 0 0 2px var(--ui-ap-ring)}.ui-ap[data-busy] .ui-ap__btn:not(.ui-ap__approve), .ui-ap[data-busy] .ui-ap__always{opacity: 0.5}.ui-ap[data-busy] .ui-ap__approve{cursor: progress}.ui-ap__kbd{display: inline-grid;place-items: center;min-width: 20px;height: 20px;padding: 0 5px;border-radius: 6px;background: var(--ui-ap-kbd);color: var(--ui-ap-muted);font: inherit;font-size: 11px;font-weight: 500;line-height: 1}.ui-ap__btn--primary .ui-ap__kbd{background: var(--ui-ap-primary-kbd);color: var(--ui-ap-primary-kbd-ink)}.ui-ap__spinner{width: 20px;height: 14px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-dasharray: 26 38;transform-origin: 50% 50%;animation: ui-ap-spin 800ms linear infinite}.ui-ap__resolved{display: flex;align-items: center;gap: 10px;min-height: 48px;padding: 12px 14px;outline: none;animation: ui-ap-in 420ms var(--ui-ap-ease) 120ms both}.ui-ap__resolved:focus-visible{box-shadow: 0 0 0 1px var(--ui-ap-line), inset 0 0 0 2px var(--ui-ap-ring)}.ui-ap__mark{display: grid;flex: none;place-items: center;width: 22px;height: 22px;border-radius: 50%;background: var(--ui-ap-ok-bg);color: var(--ui-ap-ok-ink);animation: ui-ap-pop 460ms var(--ui-ap-ease) 140ms both}.ui-ap__resolved[data-status="denied"] .ui-ap__mark{background: var(--ui-ap-no-bg);color: var(--ui-ap-no-ink)}.ui-ap__mark svg{width: 14px;height: 14px;fill: none;stroke: currentColor;stroke-width: 1.9;stroke-linecap: round;stroke-linejoin: round}.ui-ap__mark path{stroke-dasharray: 1;stroke-dashoffset: 1;animation: ui-ap-draw 420ms var(--ui-ap-ease) 300ms forwards}.ui-ap__row-title{flex: 1 1 auto;min-width: 0;overflow: hidden;color: var(--ui-ap-ink);font-size: 13.5px;font-weight: 500;white-space: nowrap;text-overflow: ellipsis}.ui-ap__row-status{flex: none;color: var(--ui-ap-muted);white-space: nowrap}.ui-ap__sr{position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap;border: 0}@container (max-width: 400px){.ui-ap__actions{flex: 1 1 100%;margin-left: 0}.ui-ap__foot{padding-left: 2px}.ui-ap__expires{padding-left: 8px}.ui-ap__actions .ui-ap__btn{flex: 1 1 0;min-width: 0;padding: 0 10px}.ui-ap__kbd{display: none}}@container (max-width: 340px){.ui-ap__pending > .ui-ap__card{padding: 14px}.ui-ap__head{gap: 10px}.ui-ap__risk-word{display: none}.ui-ap__row-time{display: none}.ui-ap__details{column-gap: 12px}}@media (hover: none){.ui-ap__kbd{display: none}}@keyframes ui-ap-out{to{opacity: 0;transform: translateY(-6px) scale(0.985);filter: blur(2px)}}@keyframes ui-ap-in{from{opacity: 0;transform: translateY(4px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-ap-pop{from{opacity: 0;transform: scale(0.5)}to{opacity: 1;transform: none}}@keyframes ui-ap-draw{to{stroke-dashoffset: 0}}@keyframes ui-ap-spin{to{transform: rotate(360deg)}}@media (prefers-reduced-motion: reduce){.ui-ap, .ui-ap *, .ui-ap *::before, .ui-ap *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;transition-duration: 1ms !important}.ui-ap__spinner{animation: ui-ap-spin 1.6s linear infinite !important}.ui-ap__mark path{stroke-dashoffset: 0}}:where(.dark, [data-theme="dark"]) .ui-ap{--ui-ap-tray: #111113;--ui-ap-bg: #19191b;--ui-ap-ink: #ededed;--ui-ap-text: #a1a1a1;--ui-ap-muted: #8b8b92;--ui-ap-line: #2a2a2e;--ui-ap-soft: #1f1f22;--ui-ap-tile: #1f1f22;--ui-ap-hover: #222225;--ui-ap-primary: #ededed;--ui-ap-primary-hover: #ffffff;--ui-ap-primary-ink: #19191b;--ui-ap-primary-kbd: rgba(0, 0, 0, 0.08);--ui-ap-primary-kbd-ink: rgba(25, 25, 27, 0.6);--ui-ap-kbd: rgba(255, 255, 255, 0.07);--ui-ap-box: rgba(255, 255, 255, 0.2);--ui-ap-box-hover: rgba(255, 255, 255, 0.32);--ui-ap-ring: rgba(255, 255, 255, 0.4);--ui-ap-timer-low: #e0a84a;--ui-ap-low-bg: rgba(255, 255, 255, 0.07);--ui-ap-low-ink: #a1a1a1;--ui-ap-med-bg: rgba(232, 183, 92, 0.12);--ui-ap-med-ink: #e8b75c;--ui-ap-high-bg: rgba(240, 138, 128, 0.12);--ui-ap-high-ink: #f08a80;--ui-ap-ok-bg: rgba(92, 201, 138, 0.13);--ui-ap-ok-ink: #5cc98a;--ui-ap-no-bg: rgba(255, 255, 255, 0.07);--ui-ap-no-ink: #a1a1a1}`;

export {
  AComponent
};
