import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo.clean-Dkj-1MDj.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = {
  low: `Low`,
  medium: `Medium`,
  high: `High`
};
function A1Component({
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
  actions = `card`,
  className
}) {
  let v = n3.useId();
  let [de, setDe] = n3.useState(defaultStatus);
  let b = status ?? de;
  let x = b !== `pending`;
  let [S, setS] = n3.useState(false);
  let [w, setW] = n3.useState(false);
  let [E, setE] = n3.useState(`user`);
  let [O, setO] = n3.useState(() => {
    if (x) {
      return Date.now();
    }
    return null;
  });
  let [fe, setFe] = n3.useState(``);
  let [pe, setPe] = n3.useState(false);
  let [me, setMe] = n3.useState(false);
  let [he, setHe] = n3.useState(`\u2318`);
  let [N, setN] = n3.useState(b);
  let [P, setP] = n3.useState(false);
  let [I, setI] = n3.useState(false);
  if (N !== b) {
    setN(b);
    if (b === `pending`) {
      setP(false);
      setI(true);
      setS(false);
      setW(false);
      setE(`user`);
      setO(null);
      setFe(``);
    } else {
      setP(N === `pending`);
      setI(false);
      setO(Date.now());
      setFe(`${b === `approved` ? `Approved` : E === `timeout` ? `Expired` : `Denied`}: ${title}`);
    }
  }
  let RRef = n3.useRef(null);
  let zRef = n3.useRef(null);
  let BRef = n3.useRef(null);
  let VRef = n3.useRef(false);
  n3.useEffect(() => {
    let e = navigator.userAgentData?.platform ?? navigator.platform ?? ``;
    if (!/mac|iphone|ipad|ipod/i.test(e || navigator.userAgent)) {
      setHe(`Ctrl`);
    }
  }, []);
  let H = async () => {
    if (x || w) {
      return;
    }
    let e = onApprove?.({
      always: S
    });
    if (e && typeof e.then == `function`) {
      setW(true);
      try {
        await e;
      } catch {
        setW(false);
        return;
      }
      setW(false);
    }
    if (status === void 0) {
      setDe(`approved`);
    }
  };
  let U = (reason = `user`) => {
    if (!(x || w && reason === `user`)) {
      setE(reason);
      if (reason === `timeout`) {
        onExpire?.();
      }
      onDeny?.({
        reason
      });
      if (status === void 0) {
        setDe(`denied`);
      }
    }
  };
  let onKeyDown = (e) => {
    if (!(x || w || e.defaultPrevented)) {
      if (e.key === `Enter` && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        H();
      } else if (e.key === `Escape`) {
        e.preventDefault();
        U(`user`);
      }
    }
  };
  let W = expiresIn && expiresIn > 0 ? expiresIn * 1e3 : 0;
  let GRef = n3.useRef(W);
  let [K, setK] = n3.useState(Math.ceil(W / 1e3));
  let JRef = n3.useRef(() => {
  });
  n3.useLayoutEffect(() => {
    JRef.current = () => U(`timeout`);
  });
  n3.useEffect(() => {
    if (b === `pending`) {
      GRef.current = W;
      setK(Math.ceil(W / 1e3));
    }
  }, [b, W]);
  let Y = pe || me || w;
  n3.useEffect(() => {
    if (!W || x || Y) {
      return;
    }
    let e = performance.now();
    let t = 0;
    let n4 = (r2) => {
      GRef.current -= r2 - e;
      e = r2;
      setK(Math.max(0, Math.ceil(GRef.current / 1e3)));
      if (GRef.current <= 0) {
        JRef.current();
        return;
      }
      t = requestAnimationFrame(n4);
    };
    t = requestAnimationFrame(n4);
    return () => cancelAnimationFrame(t);
  }, [W, x, Y]);
  let XRef = n3.useRef(0);
  let ZRef = n3.useRef(false);
  let yeRef = n3.useRef(false);
  n3.useEffect(() => {
    let RRef_current = RRef.current;
    if (!RRef_current || typeof ResizeObserver > `u`) {
      return;
    }
    let t = new ResizeObserver(() => {
      if (!ZRef.current) {
        XRef.current = RRef_current.offsetHeight;
      }
    });
    t.observe(RRef_current);
    return () => t.disconnect();
  }, []);
  n3.useLayoutEffect(() => {
    let RRef_current = RRef.current;
    if (!RRef_current) {
      return;
    }
    if (!yeRef.current) {
      yeRef.current = true;
      XRef.current = RRef_current.offsetHeight;
      return;
    }
    let document_activeElement = document.activeElement;
    if (x && document_activeElement && RRef_current.contains(document_activeElement)) {
      zRef.current?.focus({
        preventScroll: true
      });
    }
    if (!x && VRef.current) {
      BRef.current?.focus({
        preventScroll: true
      });
    }
    VRef.current = false;
    let XRef_current = XRef.current;
    RRef_current.style.height = ``;
    let e_offsetHeight = RRef_current.offsetHeight;
    if (!XRef_current || XRef_current === e_offsetHeight) {
      return;
    }
    ZRef.current = true;
    RRef_current.style.height = `${XRef_current}px`;
    RRef_current.offsetHeight;
    RRef_current.style.height = `${e_offsetHeight}px`;
    let i2 = window.setTimeout(() => {
      RRef_current.style.height = ``;
      ZRef.current = false;
      XRef.current = RRef_current.offsetHeight;
    }, 560);
    return () => {
      window.clearTimeout(i2);
      RRef_current.style.height = ``;
      ZRef.current = false;
    };
  }, [x]);
  let [, setBe] = n3.useState(0);
  n3.useEffect(() => {
    if (!x) {
      return;
    }
    let e = window.setInterval(() => setBe((e2) => e2 + 1), 3e4);
    return () => window.clearInterval(e);
  }, [x]);
  let Q = `${v}-title`;
  let id = `${v}-row`;
  let Se = `${v}-desc`;
  let Ce = `${v}-timer`;
  let $ = preview ?? children;
  let we = b === `approved` ? `Approved` : E === `timeout` ? `Expired` : `Denied`;
  let Te = [description ? Se : null, W && !x ? Ce : null].filter(Boolean).join(` `);
  let Ee = allowAlways && /* @__PURE__ */ jsxs("label", { className: `ui-apc__always`, children: [
    /* @__PURE__ */ jsxs("span", { className: `ui-apc__box`, children: [
      /* @__PURE__ */ jsx("input", { type: `checkbox`, checked: S, disabled: w, onChange: (e) => setS(e.target.checked) }),
      /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M4 8.3 6.8 11 12 5.2` }) })
    ] }),
    /* @__PURE__ */ jsx("span", { className: `ui-apc__always-label`, children: alwaysLabel })
  ] });
  let De = /* @__PURE__ */ jsxs("div", { className: `ui-apc__foot`, children: [
    actions === `card` && Ee,
    W > 0 && /* @__PURE__ */ jsxs("span", { className: `ui-apc__expires`, "data-paused": Y || void 0, "data-low": K <= 10 || void 0, "aria-hidden": `true`, children: [
      /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, children: [
        /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `6` }),
        /* @__PURE__ */ jsx("path", { d: `M8 5v3.2l2 1.3` })
      ] }),
      `Expires in `,
      o(K)
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `ui-apc__actions`, children: [
      onEdit && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-apc__btn ui-apc__btn--ghost`, "aria-disabled": w || void 0, onClick: () => !w && onEdit(), children: editLabel }),
      /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-apc__btn ui-apc__btn--quiet ui-apc__deny`, "aria-keyshortcuts": `Escape`, "aria-disabled": w || void 0, onClick: () => U(`user`), children: [
        denyLabel,
        shortcuts && /* @__PURE__ */ jsx("kbd", { className: `ui-apc__kbd`, "aria-hidden": `true`, children: `Esc` })
      ] }),
      /* @__PURE__ */ jsxs("button", { ref: BRef, type: `button`, className: `ui-apc__btn ui-apc__btn--primary ui-apc__approve`, "aria-keyshortcuts": `Meta+Enter Control+Enter`, "aria-disabled": w || void 0, onClick: () => void H(), children: [
        approveLabel,
        w ? /* @__PURE__ */ jsx("svg", { className: `ui-apc__spinner`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `6` }) }) : shortcuts && /* @__PURE__ */ jsx("kbd", { className: `ui-apc__kbd`, "aria-hidden": `true`, children: he === `\u2318` ? `\u2318\u21B5` : `Ctrl \u21B5` })
      ] })
    ] })
  ] });
  return /* @__PURE__ */ jsxs("div", { ref: RRef, className: [`ui-apc`, className].filter(Boolean).join(` `), role: `group`, "aria-labelledby": x ? id : Q, "aria-describedby": Te || void 0, "aria-busy": w || void 0, "data-status": b, "data-busy": w || void 0, "data-label": label_1 ? `` : void 0, "data-actions": actions, onKeyDown, onPointerEnter: () => setPe(true), onPointerLeave: () => setPe(false), onFocus: () => setMe(true), onBlur: (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setMe(false);
    }
  }, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-approval-card-clean`, precedence: `default`, children: c }),
    label_1 && /* @__PURE__ */ jsx("div", { className: `ui-apc__label`, children: label_1 }),
    (!x || P) && /* @__PURE__ */ jsxs("div", { className: `ui-apc__pending`, "data-leaving": P || void 0, "data-entering": I || void 0, inert: P, "aria-hidden": P || void 0, onAnimationEnd: (e) => {
      if (e.target === e.currentTarget) {
        if (P) {
          setP(false);
        }
        if (I) {
          setI(false);
        }
      }
    }, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-apc__card`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-apc__head`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-apc__icon`, "aria-hidden": `true`, children: icon ?? /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, children: [
            /* @__PURE__ */ jsx("path", { d: `M12 3 5 5.8v5.4c0 4.3 2.9 8.2 7 9.8 4.1-1.6 7-5.5 7-9.8V5.8L12 3Z` }),
            /* @__PURE__ */ jsx("path", { d: `m9.2 12.2 2 2 3.8-4` })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: `ui-apc__titles`, children: [
            /* @__PURE__ */ jsx("h3", { className: `ui-apc__title`, id: P ? void 0 : Q, children: title }),
            description && /* @__PURE__ */ jsx("p", { className: `ui-apc__desc`, id: P ? void 0 : Se, children: description })
          ] }),
          risk && /* @__PURE__ */ jsxs("span", { className: `ui-apc__risk`, "data-risk": risk, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-apc__risk-dot`, "aria-hidden": `true` }),
            i[risk],
            /* @__PURE__ */ jsx("span", { className: `ui-apc__risk-word`, children: ` risk` })
          ] })
        ] }),
        ($ || details?.length) && /* @__PURE__ */ jsxs("div", { className: `ui-apc__preview`, children: [
          $ && /* @__PURE__ */ jsx("div", { className: `ui-apc__custom`, children: $ }),
          details?.length ? /* @__PURE__ */ jsx("dl", { className: `ui-apc__details`, children: details.map((e, t) => /* @__PURE__ */ jsxs("div", { className: `ui-apc__detail`, children: [
            /* @__PURE__ */ jsx("dt", { children: e.label }),
            /* @__PURE__ */ jsx("dd", { children: e.value })
          ] }, e.label + t)) }) : null
        ] }),
        actions === `tray` && Ee,
        actions === `card` && De
      ] }),
      actions === `tray` && De,
      W > 0 && /* @__PURE__ */ jsx("span", { className: `ui-apc__sr`, id: P ? void 0 : Ce, children: `Expires in ${K} seconds unless approved. The timer pauses while the card is hovered or focused.` })
    ] }),
    x && /* @__PURE__ */ jsxs("div", { ref: zRef, className: `ui-apc__card ui-apc__resolved`, tabIndex: -1, "data-status": b, onFocus: () => VRef.current = true, onBlur: (e) => {
      if (e.relatedTarget || e.currentTarget.isConnected) {
        VRef.current = false;
      }
    }, children: [
      /* @__PURE__ */ jsx("span", { className: `ui-apc__mark`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, children: b === `approved` ? /* @__PURE__ */ jsx("path", { d: `M4.2 8.4 6.9 11 11.8 5.6`, pathLength: 1 }) : /* @__PURE__ */ jsx("path", { d: `M5.2 5.2 10.8 10.8M10.8 5.2 5.2 10.8`, pathLength: 1 }) }) }),
      /* @__PURE__ */ jsx("span", { className: `ui-apc__row-title`, id, children: title }),
      /* @__PURE__ */ jsxs("span", { className: `ui-apc__row-status`, children: [
        we,
        b === `approved` && S && /* @__PURE__ */ jsx("span", { className: `ui-apc__row-extra`, children: ` \xB7 Always` }),
        O !== null && /* @__PURE__ */ jsxs("span", { className: `ui-apc__row-time`, children: [
          ` \xB7 `,
          s(O)
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("span", { className: `ui-apc__sr`, role: `status`, "aria-live": `polite`, children: fe })
  ] });
}
function o(e) {
  return `${Math.floor(e / 60)}:${String(e % 60).padStart(2, `0`)}`;
}
function s(e) {
  let t = Math.floor((Date.now() - e) / 1e3);
  if (t < 60) {
    return `just now`;
  }
  if (t < 3600) {
    return `${Math.floor(t / 60)} min ago`;
  }
  return `${Math.floor(t / 3600)} h ago`;
}
var c = `.ui-apc{--ui-apc-tray: #f0f0f0;--ui-apc-bg: #ffffff;--ui-apc-ink: #171717;--ui-apc-text: #6b6b6b;--ui-apc-muted: #8a8a8a;--ui-apc-line: #ececec;--ui-apc-soft: #fafafa;--ui-apc-tile: #f4f4f4;--ui-apc-hover: #e4e4e5;--ui-apc-primary: #171717;--ui-apc-primary-hover: #2e2e2e;--ui-apc-primary-ink: #ffffff;--ui-apc-primary-kbd: rgba(255, 255, 255, 0.14);--ui-apc-primary-kbd-ink: rgba(255, 255, 255, 0.72);--ui-apc-kbd: rgba(0, 0, 0, 0.055);--ui-apc-box: #d4d4d4;--ui-apc-box-hover: #b5b5b5;--ui-apc-ring: rgba(23, 23, 23, 0.32);--ui-apc-timer-low: #b7791f;--ui-apc-low-bg: #f2f2f2;--ui-apc-low-ink: #6b6b6b;--ui-apc-med-bg: #fbf3e2;--ui-apc-med-ink: #8a5a00;--ui-apc-high-bg: #fdeceb;--ui-apc-high-ink: #b42318;--ui-apc-ok-bg: #e9f6ee;--ui-apc-ok-ink: #1a7f45;--ui-apc-no-bg: #f2f2f2;--ui-apc-no-ink: #6b6b6b;--ui-apc-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;min-width: 0;overflow: hidden;container-type: inline-size;padding: 4px;border-radius: 20px;background: var(--ui-apc-tray);color: var(--ui-apc-text);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 1.45;letter-spacing: -0.006em;text-align: left;-webkit-font-smoothing: antialiased;transition: height 520ms var(--ui-apc-ease)}.ui-apc *, .ui-apc *::before, .ui-apc *::after{box-sizing: border-box}.ui-apc__card{position: relative;border-radius: 16px;background: var(--ui-apc-bg);box-shadow: 0 0 0 1px var(--ui-apc-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-apc__pending > .ui-apc__card{padding: 16px}.ui-apc__pending[data-leaving]{position: absolute;top: 4px;left: 4px;right: 4px;pointer-events: none;animation: ui-apc-out 280ms var(--ui-apc-ease) both}.ui-apc__pending[data-entering]{animation: ui-apc-in 420ms var(--ui-apc-ease) 80ms both}.ui-apc[data-busy] .ui-apc__pending{pointer-events: none}.ui-apc__head{display: grid;grid-template-columns: auto minmax(0, 1fr) auto;align-items: start;gap: 12px}.ui-apc__icon{display: grid;place-items: center;width: 32px;height: 32px;border-radius: 9px;background: transparent;box-shadow: inset 0 0 0 1px var(--ui-apc-line);color: var(--ui-apc-ink)}.ui-apc__icon svg{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.7;stroke-linecap: round;stroke-linejoin: round}.ui-apc__titles{min-width: 0;padding-top: 1px}.ui-apc__title{margin: 0;overflow: hidden;color: var(--ui-apc-ink);font-size: 14px;font-weight: 550;line-height: 20px;letter-spacing: -0.011em;white-space: nowrap;text-overflow: ellipsis}.ui-apc__desc{margin: 1px 0 0;overflow: hidden;font-size: 13px;line-height: 18px;white-space: nowrap;text-overflow: ellipsis}.ui-apc__risk{display: inline-flex;align-items: center;gap: 6px;height: 22px;margin-top: 1px;padding: 0 7px;border-radius: 6px;background: var(--ui-apc-low-bg);color: var(--ui-apc-low-ink);font-size: 12px;font-weight: 500;line-height: 1;white-space: nowrap}.ui-apc__risk-dot{display: none}.ui-apc__risk-word{white-space: pre}.ui-apc__risk[data-risk="medium"]{background: var(--ui-apc-med-bg);color: var(--ui-apc-med-ink)}.ui-apc__risk[data-risk="high"]{background: var(--ui-apc-high-bg);color: var(--ui-apc-high-ink)}.ui-apc__preview{display: grid;gap: 12px;margin-top: 14px;padding-top: 14px;border-top: 1px solid var(--ui-apc-line)}.ui-apc__custom{min-width: 0}.ui-apc__custom + .ui-apc__details{padding-top: 2px}.ui-apc__details{display: grid;grid-template-columns: max-content minmax(0, 1fr);gap: 6px 16px;margin: 0}.ui-apc__detail{display: contents}.ui-apc__detail dt{color: var(--ui-apc-muted)}.ui-apc__detail dd{min-width: 0;margin: 0;overflow: hidden;color: var(--ui-apc-ink);white-space: nowrap;text-overflow: ellipsis}.ui-apc__always{display: flex;width: fit-content;max-width: 100%;margin-top: 14px;align-items: center;gap: 8px;min-width: 0;cursor: pointer;user-select: none}.ui-apc__always-label{overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-apc__box{position: relative;display: grid;flex: none;width: 16px;height: 16px}.ui-apc__box input{appearance: none;-webkit-appearance: none;width: 16px;height: 16px;margin: 0;border-radius: 5px;background: var(--ui-apc-bg);box-shadow: inset 0 0 0 1px var(--ui-apc-box);cursor: pointer;transition: background-color 160ms ease, box-shadow 160ms ease}.ui-apc__box input:hover{box-shadow: inset 0 0 0 1px var(--ui-apc-box-hover)}.ui-apc__box input:checked{background: var(--ui-apc-primary);box-shadow: inset 0 0 0 1px var(--ui-apc-primary)}.ui-apc__box input:focus-visible{outline: none;box-shadow: inset 0 0 0 1px var(--ui-apc-primary), 0 0 0 2px var(--ui-apc-bg), 0 0 0 4px var(--ui-apc-ring)}.ui-apc__box svg{position: absolute;inset: 0;width: 16px;height: 16px;fill: none;stroke: var(--ui-apc-primary-ink);stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round;opacity: 0;transform: scale(0.6);transition: opacity 160ms ease, transform 260ms var(--ui-apc-ease);pointer-events: none}.ui-apc__box input:checked + svg{opacity: 1;transform: none}.ui-apc__label{overflow: hidden;padding: 6px 8px 4px;color: var(--ui-apc-muted);font-size: 12.5px;line-height: 16px;white-space: nowrap;text-overflow: ellipsis}.ui-apc[data-label] .ui-apc__pending[data-leaving]{top: 30px}.ui-apc[data-actions="card"]{padding: 0;border-radius: 16px;background: transparent}.ui-apc[data-actions="card"] .ui-apc__card{box-shadow: inset 0 0 0 1px var(--ui-apc-line)}.ui-apc[data-actions="card"] .ui-apc__pending[data-leaving]{top: 0;left: 0;right: 0}.ui-apc[data-actions="card"][data-label] .ui-apc__pending[data-leaving]{top: 26px}.ui-apc[data-actions="card"] .ui-apc__label{padding-left: 2px}.ui-apc__card > .ui-apc__foot{min-height: 0;margin-top: 16px;padding: 14px 0 0;border-top: 1px solid var(--ui-apc-line)}.ui-apc__card > .ui-apc__foot .ui-apc__always{margin-top: 0}.ui-apc__foot{display: flex;flex-wrap: wrap;align-items: center;gap: 6px 12px;min-height: 44px;padding: 6px 2px 2px 10px}.ui-apc__expires{display: inline-flex;align-items: center;gap: 6px;min-width: 0;color: var(--ui-apc-muted);font-size: 12.5px;font-variant-numeric: tabular-nums;white-space: nowrap;transition: color 300ms ease}.ui-apc__expires svg{width: 14px;height: 14px;flex: none;fill: none;stroke: currentColor;stroke-width: 1.5;stroke-linecap: round;stroke-linejoin: round}.ui-apc__expires[data-low]{color: var(--ui-apc-timer-low)}.ui-apc__actions{display: flex;flex: 0 0 auto;gap: 4px;margin-left: auto}.ui-apc__btn{display: inline-flex;align-items: center;justify-content: center;gap: 8px;height: 34px;padding: 0 12px;border: 0;border-radius: 10px;font: inherit;font-size: 13px;font-weight: 500;line-height: 1;white-space: nowrap;cursor: pointer;-webkit-tap-highlight-color: transparent;transition: background-color 160ms ease, box-shadow 160ms ease, transform 160ms var(--ui-apc-ease), opacity 160ms ease}.ui-apc__btn:active, .ui-apc__btn[data-pressed]{transform: scale(0.97)}.ui-apc__btn:focus-visible{outline: none}.ui-apc__btn--primary{padding-right: 8px;background: var(--ui-apc-primary);color: var(--ui-apc-primary-ink);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12)}.ui-apc__btn--primary:hover, .ui-apc__btn--primary[data-pressed]{background: var(--ui-apc-primary-hover)}.ui-apc__btn--primary:focus-visible{box-shadow: 0 0 0 2px var(--ui-apc-tray), 0 0 0 4px var(--ui-apc-ring)}.ui-apc__btn--quiet{padding-right: 8px;background: transparent;color: var(--ui-apc-ink)}.ui-apc__btn--quiet:hover, .ui-apc__btn--quiet[data-pressed]{background: var(--ui-apc-hover)}.ui-apc__btn--quiet:focus-visible{box-shadow: 0 0 0 2px var(--ui-apc-ring)}.ui-apc__btn--ghost{background: transparent;color: var(--ui-apc-text)}.ui-apc__btn--ghost:hover{background: var(--ui-apc-hover);color: var(--ui-apc-ink)}.ui-apc__btn--ghost:focus-visible{box-shadow: 0 0 0 2px var(--ui-apc-ring)}.ui-apc[data-busy] .ui-apc__btn:not(.ui-apc__approve), .ui-apc[data-busy] .ui-apc__always{opacity: 0.5}.ui-apc[data-busy] .ui-apc__approve{cursor: progress}.ui-apc__kbd{display: inline-grid;place-items: center;min-width: 20px;height: 20px;padding: 0 5px;border-radius: 6px;background: var(--ui-apc-kbd);color: var(--ui-apc-muted);font: inherit;font-size: 11px;font-weight: 500;line-height: 1}.ui-apc__btn--primary .ui-apc__kbd{background: var(--ui-apc-primary-kbd);color: var(--ui-apc-primary-kbd-ink)}.ui-apc__spinner{width: 20px;height: 14px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-dasharray: 26 38;transform-origin: 50% 50%;animation: ui-apc-spin 800ms linear infinite}.ui-apc__resolved{display: flex;align-items: center;gap: 10px;min-height: 48px;padding: 12px 14px;outline: none;animation: ui-apc-in 420ms var(--ui-apc-ease) 120ms both}.ui-apc__resolved:focus-visible{box-shadow: 0 0 0 1px var(--ui-apc-line), inset 0 0 0 2px var(--ui-apc-ring)}.ui-apc__mark{display: grid;flex: none;place-items: center;width: 22px;height: 22px;border-radius: 50%;background: var(--ui-apc-ok-bg);color: var(--ui-apc-ok-ink);animation: ui-apc-pop 460ms var(--ui-apc-ease) 140ms both}.ui-apc__resolved[data-status="denied"] .ui-apc__mark{background: var(--ui-apc-no-bg);color: var(--ui-apc-no-ink)}.ui-apc__mark svg{width: 14px;height: 14px;fill: none;stroke: currentColor;stroke-width: 1.9;stroke-linecap: round;stroke-linejoin: round}.ui-apc__mark path{stroke-dasharray: 1;stroke-dashoffset: 1;animation: ui-apc-draw 420ms var(--ui-apc-ease) 300ms forwards}.ui-apc__row-title{flex: 1 1 auto;min-width: 0;overflow: hidden;color: var(--ui-apc-ink);font-size: 13.5px;font-weight: 500;white-space: nowrap;text-overflow: ellipsis}.ui-apc__row-status{flex: none;color: var(--ui-apc-muted);white-space: nowrap}.ui-apc__sr{position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap;border: 0}@container (max-width: 400px){.ui-apc__actions{flex: 1 1 100%;margin-left: 0}.ui-apc__foot{padding-left: 2px}.ui-apc__expires{padding-left: 8px}.ui-apc__actions .ui-apc__btn{flex: 1 1 0;min-width: 0;padding: 0 10px}.ui-apc__kbd{display: none}}@container (max-width: 340px){.ui-apc__pending > .ui-apc__card{padding: 14px}.ui-apc__head{gap: 10px}.ui-apc__risk-word{display: none}.ui-apc__row-time{display: none}.ui-apc__details{column-gap: 12px}}@media (hover: none){.ui-apc__kbd{display: none}}@keyframes ui-apc-out{to{opacity: 0;transform: translateY(-6px) scale(0.985);filter: blur(2px)}}@keyframes ui-apc-in{from{opacity: 0;transform: translateY(4px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-apc-pop{from{opacity: 0;transform: scale(0.5)}to{opacity: 1;transform: none}}@keyframes ui-apc-draw{to{stroke-dashoffset: 0}}@keyframes ui-apc-spin{to{transform: rotate(360deg)}}@media (prefers-reduced-motion: reduce){.ui-apc, .ui-apc *, .ui-apc *::before, .ui-apc *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;transition-duration: 1ms !important}.ui-apc__spinner{animation: ui-apc-spin 1.6s linear infinite !important}.ui-apc__mark path{stroke-dashoffset: 0}}:where(.dark, [data-theme="dark"]) .ui-apc{--ui-apc-tray: #111113;--ui-apc-bg: #19191b;--ui-apc-ink: #ededed;--ui-apc-text: #a1a1a1;--ui-apc-muted: #8b8b92;--ui-apc-line: #2a2a2e;--ui-apc-soft: #1f1f22;--ui-apc-tile: #1f1f22;--ui-apc-hover: #222225;--ui-apc-primary: #ededed;--ui-apc-primary-hover: #ffffff;--ui-apc-primary-ink: #19191b;--ui-apc-primary-kbd: rgba(0, 0, 0, 0.08);--ui-apc-primary-kbd-ink: rgba(25, 25, 27, 0.6);--ui-apc-kbd: rgba(255, 255, 255, 0.07);--ui-apc-box: rgba(255, 255, 255, 0.2);--ui-apc-box-hover: rgba(255, 255, 255, 0.32);--ui-apc-ring: rgba(255, 255, 255, 0.4);--ui-apc-timer-low: #e0a84a;--ui-apc-low-bg: rgba(255, 255, 255, 0.07);--ui-apc-low-ink: #a1a1a1;--ui-apc-med-bg: rgba(232, 183, 92, 0.12);--ui-apc-med-ink: #e8b75c;--ui-apc-high-bg: rgba(240, 138, 128, 0.12);--ui-apc-high-ink: #f08a80;--ui-apc-ok-bg: rgba(92, 201, 138, 0.13);--ui-apc-ok-ink: #5cc98a;--ui-apc-no-bg: rgba(255, 255, 255, 0.07);--ui-apc-no-ink: #a1a1a1}`;
var l = [`M`, `J`, `S`, `A`];
function UComponent() {
  let [e, setE] = n3.useState(`pending`);
  let [i2, setI] = n3.useState(false);
  let [s2, setS] = n3.useState(false);
  let uRef = n3.useRef(null);
  n3.useEffect(() => {
    if (i2) {
      return;
    }
    let n4 = [];
    if (e === `pending`) {
      if (s2) {
        return;
      }
      let e2 = () => uRef.current?.querySelector(`.ui-apc__approve`);
      n4.push(window.setTimeout(() => e2()?.setAttribute(`data-pressed`, ``), 2800));
      n4.push(window.setTimeout(() => {
        e2()?.removeAttribute(`data-pressed`);
        e2()?.click();
      }, 3e3));
    } else {
      n4.push(window.setTimeout(() => setE(`pending`), 3200));
    }
    return () => {
      n4.forEach(clearTimeout);
      uRef.current?.querySelector(`.ui-apc__approve`)?.removeAttribute(`data-pressed`);
    };
  }, [e, i2, s2]);
  let d = () => setI(true);
  return /* @__PURE__ */ jsx("div", { className: `ap-demo`, children: /* @__PURE__ */ jsxs("div", { ref: uRef, className: `ap-demo__chat`, onPointerDown: d, onKeyDown: d, onPointerEnter: () => setS(true), onPointerLeave: () => setS(false), children: [
    /* @__PURE__ */ jsxs("div", { className: `ap-demo__agent`, children: [
      /* @__PURE__ */ jsx("span", { className: `ap-demo__bot`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, children: /* @__PURE__ */ jsx("path", { d: `M12 3.5 13.9 9l5.6 1.9-5.6 1.9L12 18.5l-1.9-5.7-5.6-1.9L10.1 9 12 3.5Z` }) }) }),
      /* @__PURE__ */ jsx("p", { className: `ap-demo__msg`, children: `I drafted the October newsletter. Ready to send?` })
    ] }),
    /* @__PURE__ */ jsx(A1Component, { title: `Send campaign email`, description: `October product update \xB7 Newsletter`, risk: `medium`, icon: /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, children: [
      /* @__PURE__ */ jsx("path", { d: `M4 6.5h16v11H4z` }),
      /* @__PURE__ */ jsx("path", { d: `m4.5 7 7.5 6 7.5-6` })
    ] }), status: e, onApprove: () => new Promise((resolve) => window.setTimeout(resolve, 700)).then(() => setE(`approved`)), onDeny: () => setE(`denied`), details: [{
      label: `Subject`,
      value: `What's new in October`
    }, {
      label: `Send`,
      value: `Today, 9:00 AM`
    }], children: /* @__PURE__ */ jsxs("div", { className: `ap-demo__people`, children: [
      /* @__PURE__ */ jsx("span", { className: `ap-demo__avatars`, "aria-hidden": `true`, children: l.map((e2, t) => /* @__PURE__ */ jsx("span", { className: `ap-demo__avatar`, "data-i": t, children: e2 }, e2)) }),
      /* @__PURE__ */ jsxs("span", { className: `ap-demo__to`, children: [
        /* @__PURE__ */ jsx("span", { className: `ap-demo__names`, children: `Mia, Jonas, Sara, Alex` }),
        /* @__PURE__ */ jsx("span", { className: `ap-demo__more`, children: `+38 more` })
      ] })
    ] }) }),
    i2 && e !== `pending` && /* @__PURE__ */ jsx("button", { type: `button`, className: `ap-demo__replay`, onClick: () => setE(`pending`), children: `Replay` })
  ] }) });
}

export {
  UComponent
};
