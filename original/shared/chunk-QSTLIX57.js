import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo.clean-Dkj-1MDj.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = { low: `Low`, medium: `Medium`, high: `High` };
function a({ title: e, description: t, risk: a2, icon: l2, details: u2, preview: d, children: ee, status: f, defaultStatus: te = `pending`, onApprove: ne, onDeny: re, onEdit: p, expiresIn: m, onExpire: ie, allowAlways: ae = true, alwaysLabel: oe = `Always allow this action`, approveLabel: se = `Approve`, denyLabel: ce = `Deny`, editLabel: le = `Edit`, shortcuts: h = true, label: g, actions: _ = `card`, className: ue }) {
  let v = (0, n3.useId)(), [de, y] = (0, n3.useState)(te), b = f ?? de, x = b !== `pending`, [S, C] = (0, n3.useState)(false), [w, T] = (0, n3.useState)(false), [E, D] = (0, n3.useState)(`user`), [O, k] = (0, n3.useState)(() => x ? Date.now() : null), [fe, A] = (0, n3.useState)(``), [pe, j] = (0, n3.useState)(false), [me, M] = (0, n3.useState)(false), [he, ge] = (0, n3.useState)(`\u2318`), [N, _e] = (0, n3.useState)(b), [P, F] = (0, n3.useState)(false), [I, L] = (0, n3.useState)(false);
  N !== b && (_e(b), b === `pending` ? (F(false), L(true), C(false), T(false), D(`user`), k(null), A(``)) : (F(N === `pending`), L(false), k(Date.now()), A(`${b === `approved` ? `Approved` : E === `timeout` ? `Expired` : `Denied`}: ${e}`)));
  let R = (0, n3.useRef)(null), z = (0, n3.useRef)(null), B = (0, n3.useRef)(null), V = (0, n3.useRef)(false);
  (0, n3.useEffect)(() => {
    let e2 = navigator.userAgentData?.platform ?? navigator.platform ?? ``;
    /mac|iphone|ipad|ipod/i.test(e2 || navigator.userAgent) || ge(`Ctrl`);
  }, []);
  let H = async () => {
    if (x || w) return;
    let e2 = ne?.({ always: S });
    if (e2 && typeof e2.then == `function`) {
      T(true);
      try {
        await e2;
      } catch {
        T(false);
        return;
      }
      T(false);
    }
    f === void 0 && y(`approved`);
  }, U = (e2 = `user`) => {
    x || w && e2 === `user` || (D(e2), e2 === `timeout` && ie?.(), re?.({ reason: e2 }), f === void 0 && y(`denied`));
  }, ve = (e2) => {
    x || w || e2.defaultPrevented || (e2.key === `Enter` && (e2.metaKey || e2.ctrlKey) ? (e2.preventDefault(), H()) : e2.key === `Escape` && (e2.preventDefault(), U(`user`)));
  }, W = m && m > 0 ? m * 1e3 : 0, G = (0, n3.useRef)(W), [K, q] = (0, n3.useState)(Math.ceil(W / 1e3)), J = (0, n3.useRef)(() => {
  });
  (0, n3.useLayoutEffect)(() => {
    J.current = () => U(`timeout`);
  }), (0, n3.useEffect)(() => {
    b === `pending` && (G.current = W, q(Math.ceil(W / 1e3)));
  }, [b, W]);
  let Y = pe || me || w;
  (0, n3.useEffect)(() => {
    if (!W || x || Y) return;
    let e2 = performance.now(), t2 = 0, n4 = (r2) => {
      if (G.current -= r2 - e2, e2 = r2, q(Math.max(0, Math.ceil(G.current / 1e3))), G.current <= 0) {
        J.current();
        return;
      }
      t2 = requestAnimationFrame(n4);
    };
    return t2 = requestAnimationFrame(n4), () => cancelAnimationFrame(t2);
  }, [W, x, Y]);
  let X = (0, n3.useRef)(0), Z = (0, n3.useRef)(false), ye = (0, n3.useRef)(false);
  (0, n3.useEffect)(() => {
    let e2 = R.current;
    if (!e2 || typeof ResizeObserver > `u`) return;
    let t2 = new ResizeObserver(() => {
      Z.current || (X.current = e2.offsetHeight);
    });
    return t2.observe(e2), () => t2.disconnect();
  }, []), (0, n3.useLayoutEffect)(() => {
    let e2 = R.current;
    if (!e2) return;
    if (!ye.current) {
      ye.current = true, X.current = e2.offsetHeight;
      return;
    }
    let t2 = document.activeElement;
    x && t2 && e2.contains(t2) && z.current?.focus({ preventScroll: true }), !x && V.current && B.current?.focus({ preventScroll: true }), V.current = false;
    let n4 = X.current;
    e2.style.height = ``;
    let r2 = e2.offsetHeight;
    if (!n4 || n4 === r2) return;
    Z.current = true, e2.style.height = `${n4}px`, e2.offsetHeight, e2.style.height = `${r2}px`;
    let i2 = window.setTimeout(() => {
      e2.style.height = ``, Z.current = false, X.current = e2.offsetHeight;
    }, 560);
    return () => {
      window.clearTimeout(i2), e2.style.height = ``, Z.current = false;
    };
  }, [x]);
  let [, be] = (0, n3.useState)(0);
  (0, n3.useEffect)(() => {
    if (!x) return;
    let e2 = window.setInterval(() => be((e3) => e3 + 1), 3e4);
    return () => window.clearInterval(e2);
  }, [x]);
  let Q = `${v}-title`, xe = `${v}-row`, Se = `${v}-desc`, Ce = `${v}-timer`, $ = d ?? ee, we = b === `approved` ? `Approved` : E === `timeout` ? `Expired` : `Denied`, Te = [t ? Se : null, W && !x ? Ce : null].filter(Boolean).join(` `), Ee = ae && (0, r.jsxs)(`label`, { className: `ui-apc__always`, children: [(0, r.jsxs)(`span`, { className: `ui-apc__box`, children: [(0, r.jsx)(`input`, { type: `checkbox`, checked: S, disabled: w, onChange: (e2) => C(e2.target.checked) }), (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M4 8.3 6.8 11 12 5.2` }) })] }), (0, r.jsx)(`span`, { className: `ui-apc__always-label`, children: oe })] }), De = (0, r.jsxs)(`div`, { className: `ui-apc__foot`, children: [_ === `card` && Ee, W > 0 && (0, r.jsxs)(`span`, { className: `ui-apc__expires`, "data-paused": Y || void 0, "data-low": K <= 10 || void 0, "aria-hidden": `true`, children: [(0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, children: [(0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `6` }), (0, r.jsx)(`path`, { d: `M8 5v3.2l2 1.3` })] }), `Expires in `, o(K)] }), (0, r.jsxs)(`div`, { className: `ui-apc__actions`, children: [p && (0, r.jsx)(`button`, { type: `button`, className: `ui-apc__btn ui-apc__btn--ghost`, "aria-disabled": w || void 0, onClick: () => !w && p(), children: le }), (0, r.jsxs)(`button`, { type: `button`, className: `ui-apc__btn ui-apc__btn--quiet ui-apc__deny`, "aria-keyshortcuts": `Escape`, "aria-disabled": w || void 0, onClick: () => U(`user`), children: [ce, h && (0, r.jsx)(`kbd`, { className: `ui-apc__kbd`, "aria-hidden": `true`, children: `Esc` })] }), (0, r.jsxs)(`button`, { ref: B, type: `button`, className: `ui-apc__btn ui-apc__btn--primary ui-apc__approve`, "aria-keyshortcuts": `Meta+Enter Control+Enter`, "aria-disabled": w || void 0, onClick: () => void H(), children: [se, w ? (0, r.jsx)(`svg`, { className: `ui-apc__spinner`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: (0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `6` }) }) : h && (0, r.jsx)(`kbd`, { className: `ui-apc__kbd`, "aria-hidden": `true`, children: he === `\u2318` ? `\u2318\u21B5` : `Ctrl \u21B5` })] })] })] });
  return (0, r.jsxs)(`div`, { ref: R, className: [`ui-apc`, ue].filter(Boolean).join(` `), role: `group`, "aria-labelledby": x ? xe : Q, "aria-describedby": Te || void 0, "aria-busy": w || void 0, "data-status": b, "data-busy": w || void 0, "data-label": g ? `` : void 0, "data-actions": _, onKeyDown: ve, onPointerEnter: () => j(true), onPointerLeave: () => j(false), onFocus: () => M(true), onBlur: (e2) => {
    e2.currentTarget.contains(e2.relatedTarget) || M(false);
  }, children: [(0, r.jsx)(`style`, { href: `ui-approval-card-clean`, precedence: `default`, children: c }), g && (0, r.jsx)(`div`, { className: `ui-apc__label`, children: g }), (!x || P) && (0, r.jsxs)(`div`, { className: `ui-apc__pending`, "data-leaving": P || void 0, "data-entering": I || void 0, inert: P, "aria-hidden": P || void 0, onAnimationEnd: (e2) => {
    e2.target === e2.currentTarget && (P && F(false), I && L(false));
  }, children: [(0, r.jsxs)(`div`, { className: `ui-apc__card`, children: [(0, r.jsxs)(`div`, { className: `ui-apc__head`, children: [(0, r.jsx)(`span`, { className: `ui-apc__icon`, "aria-hidden": `true`, children: l2 ?? (0, r.jsxs)(`svg`, { viewBox: `0 0 24 24`, children: [(0, r.jsx)(`path`, { d: `M12 3 5 5.8v5.4c0 4.3 2.9 8.2 7 9.8 4.1-1.6 7-5.5 7-9.8V5.8L12 3Z` }), (0, r.jsx)(`path`, { d: `m9.2 12.2 2 2 3.8-4` })] }) }), (0, r.jsxs)(`div`, { className: `ui-apc__titles`, children: [(0, r.jsx)(`h3`, { className: `ui-apc__title`, id: P ? void 0 : Q, children: e }), t && (0, r.jsx)(`p`, { className: `ui-apc__desc`, id: P ? void 0 : Se, children: t })] }), a2 && (0, r.jsxs)(`span`, { className: `ui-apc__risk`, "data-risk": a2, children: [(0, r.jsx)(`span`, { className: `ui-apc__risk-dot`, "aria-hidden": `true` }), i[a2], (0, r.jsx)(`span`, { className: `ui-apc__risk-word`, children: ` risk` })] })] }), ($ || u2?.length) && (0, r.jsxs)(`div`, { className: `ui-apc__preview`, children: [$ && (0, r.jsx)(`div`, { className: `ui-apc__custom`, children: $ }), u2?.length ? (0, r.jsx)(`dl`, { className: `ui-apc__details`, children: u2.map((e2, t2) => (0, r.jsxs)(`div`, { className: `ui-apc__detail`, children: [(0, r.jsx)(`dt`, { children: e2.label }), (0, r.jsx)(`dd`, { children: e2.value })] }, e2.label + t2)) }) : null] }), _ === `tray` && Ee, _ === `card` && De] }), _ === `tray` && De, W > 0 && (0, r.jsx)(`span`, { className: `ui-apc__sr`, id: P ? void 0 : Ce, children: `Expires in ${K} seconds unless approved. The timer pauses while the card is hovered or focused.` })] }), x && (0, r.jsxs)(`div`, { ref: z, className: `ui-apc__card ui-apc__resolved`, tabIndex: -1, "data-status": b, onFocus: () => V.current = true, onBlur: (e2) => {
    (e2.relatedTarget || e2.currentTarget.isConnected) && (V.current = false);
  }, children: [(0, r.jsx)(`span`, { className: `ui-apc__mark`, "aria-hidden": `true`, children: (0, r.jsx)(`svg`, { viewBox: `0 0 16 16`, children: b === `approved` ? (0, r.jsx)(`path`, { d: `M4.2 8.4 6.9 11 11.8 5.6`, pathLength: 1 }) : (0, r.jsx)(`path`, { d: `M5.2 5.2 10.8 10.8M10.8 5.2 5.2 10.8`, pathLength: 1 }) }) }), (0, r.jsx)(`span`, { className: `ui-apc__row-title`, id: xe, children: e }), (0, r.jsxs)(`span`, { className: `ui-apc__row-status`, children: [we, b === `approved` && S && (0, r.jsx)(`span`, { className: `ui-apc__row-extra`, children: ` \xB7 Always` }), O !== null && (0, r.jsxs)(`span`, { className: `ui-apc__row-time`, children: [` \xB7 `, s(O)] })] })] }), (0, r.jsx)(`span`, { className: `ui-apc__sr`, role: `status`, "aria-live": `polite`, children: fe })] });
}
function o(e) {
  return `${Math.floor(e / 60)}:${String(e % 60).padStart(2, `0`)}`;
}
function s(e) {
  let t = Math.floor((Date.now() - e) / 1e3);
  return t < 60 ? `just now` : t < 3600 ? `${Math.floor(t / 60)} min ago` : `${Math.floor(t / 3600)} h ago`;
}
var c = `.ui-apc{--ui-apc-tray: #f0f0f0;--ui-apc-bg: #ffffff;--ui-apc-ink: #171717;--ui-apc-text: #6b6b6b;--ui-apc-muted: #8a8a8a;--ui-apc-line: #ececec;--ui-apc-soft: #fafafa;--ui-apc-tile: #f4f4f4;--ui-apc-hover: #e4e4e5;--ui-apc-primary: #171717;--ui-apc-primary-hover: #2e2e2e;--ui-apc-primary-ink: #ffffff;--ui-apc-primary-kbd: rgba(255, 255, 255, 0.14);--ui-apc-primary-kbd-ink: rgba(255, 255, 255, 0.72);--ui-apc-kbd: rgba(0, 0, 0, 0.055);--ui-apc-box: #d4d4d4;--ui-apc-box-hover: #b5b5b5;--ui-apc-ring: rgba(23, 23, 23, 0.32);--ui-apc-timer-low: #b7791f;--ui-apc-low-bg: #f2f2f2;--ui-apc-low-ink: #6b6b6b;--ui-apc-med-bg: #fbf3e2;--ui-apc-med-ink: #8a5a00;--ui-apc-high-bg: #fdeceb;--ui-apc-high-ink: #b42318;--ui-apc-ok-bg: #e9f6ee;--ui-apc-ok-ink: #1a7f45;--ui-apc-no-bg: #f2f2f2;--ui-apc-no-ink: #6b6b6b;--ui-apc-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;min-width: 0;overflow: hidden;container-type: inline-size;padding: 4px;border-radius: 20px;background: var(--ui-apc-tray);color: var(--ui-apc-text);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 1.45;letter-spacing: -0.006em;text-align: left;-webkit-font-smoothing: antialiased;transition: height 520ms var(--ui-apc-ease)}.ui-apc *, .ui-apc *::before, .ui-apc *::after{box-sizing: border-box}.ui-apc__card{position: relative;border-radius: 16px;background: var(--ui-apc-bg);box-shadow: 0 0 0 1px var(--ui-apc-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-apc__pending > .ui-apc__card{padding: 16px}.ui-apc__pending[data-leaving]{position: absolute;top: 4px;left: 4px;right: 4px;pointer-events: none;animation: ui-apc-out 280ms var(--ui-apc-ease) both}.ui-apc__pending[data-entering]{animation: ui-apc-in 420ms var(--ui-apc-ease) 80ms both}.ui-apc[data-busy] .ui-apc__pending{pointer-events: none}.ui-apc__head{display: grid;grid-template-columns: auto minmax(0, 1fr) auto;align-items: start;gap: 12px}.ui-apc__icon{display: grid;place-items: center;width: 32px;height: 32px;border-radius: 9px;background: transparent;box-shadow: inset 0 0 0 1px var(--ui-apc-line);color: var(--ui-apc-ink)}.ui-apc__icon svg{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.7;stroke-linecap: round;stroke-linejoin: round}.ui-apc__titles{min-width: 0;padding-top: 1px}.ui-apc__title{margin: 0;overflow: hidden;color: var(--ui-apc-ink);font-size: 14px;font-weight: 550;line-height: 20px;letter-spacing: -0.011em;white-space: nowrap;text-overflow: ellipsis}.ui-apc__desc{margin: 1px 0 0;overflow: hidden;font-size: 13px;line-height: 18px;white-space: nowrap;text-overflow: ellipsis}.ui-apc__risk{display: inline-flex;align-items: center;gap: 6px;height: 22px;margin-top: 1px;padding: 0 7px;border-radius: 6px;background: var(--ui-apc-low-bg);color: var(--ui-apc-low-ink);font-size: 12px;font-weight: 500;line-height: 1;white-space: nowrap}.ui-apc__risk-dot{display: none}.ui-apc__risk-word{white-space: pre}.ui-apc__risk[data-risk="medium"]{background: var(--ui-apc-med-bg);color: var(--ui-apc-med-ink)}.ui-apc__risk[data-risk="high"]{background: var(--ui-apc-high-bg);color: var(--ui-apc-high-ink)}.ui-apc__preview{display: grid;gap: 12px;margin-top: 14px;padding-top: 14px;border-top: 1px solid var(--ui-apc-line)}.ui-apc__custom{min-width: 0}.ui-apc__custom + .ui-apc__details{padding-top: 2px}.ui-apc__details{display: grid;grid-template-columns: max-content minmax(0, 1fr);gap: 6px 16px;margin: 0}.ui-apc__detail{display: contents}.ui-apc__detail dt{color: var(--ui-apc-muted)}.ui-apc__detail dd{min-width: 0;margin: 0;overflow: hidden;color: var(--ui-apc-ink);white-space: nowrap;text-overflow: ellipsis}.ui-apc__always{display: flex;width: fit-content;max-width: 100%;margin-top: 14px;align-items: center;gap: 8px;min-width: 0;cursor: pointer;user-select: none}.ui-apc__always-label{overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-apc__box{position: relative;display: grid;flex: none;width: 16px;height: 16px}.ui-apc__box input{appearance: none;-webkit-appearance: none;width: 16px;height: 16px;margin: 0;border-radius: 5px;background: var(--ui-apc-bg);box-shadow: inset 0 0 0 1px var(--ui-apc-box);cursor: pointer;transition: background-color 160ms ease, box-shadow 160ms ease}.ui-apc__box input:hover{box-shadow: inset 0 0 0 1px var(--ui-apc-box-hover)}.ui-apc__box input:checked{background: var(--ui-apc-primary);box-shadow: inset 0 0 0 1px var(--ui-apc-primary)}.ui-apc__box input:focus-visible{outline: none;box-shadow: inset 0 0 0 1px var(--ui-apc-primary), 0 0 0 2px var(--ui-apc-bg), 0 0 0 4px var(--ui-apc-ring)}.ui-apc__box svg{position: absolute;inset: 0;width: 16px;height: 16px;fill: none;stroke: var(--ui-apc-primary-ink);stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round;opacity: 0;transform: scale(0.6);transition: opacity 160ms ease, transform 260ms var(--ui-apc-ease);pointer-events: none}.ui-apc__box input:checked + svg{opacity: 1;transform: none}.ui-apc__label{overflow: hidden;padding: 6px 8px 4px;color: var(--ui-apc-muted);font-size: 12.5px;line-height: 16px;white-space: nowrap;text-overflow: ellipsis}.ui-apc[data-label] .ui-apc__pending[data-leaving]{top: 30px}.ui-apc[data-actions="card"]{padding: 0;border-radius: 16px;background: transparent}.ui-apc[data-actions="card"] .ui-apc__card{box-shadow: inset 0 0 0 1px var(--ui-apc-line)}.ui-apc[data-actions="card"] .ui-apc__pending[data-leaving]{top: 0;left: 0;right: 0}.ui-apc[data-actions="card"][data-label] .ui-apc__pending[data-leaving]{top: 26px}.ui-apc[data-actions="card"] .ui-apc__label{padding-left: 2px}.ui-apc__card > .ui-apc__foot{min-height: 0;margin-top: 16px;padding: 14px 0 0;border-top: 1px solid var(--ui-apc-line)}.ui-apc__card > .ui-apc__foot .ui-apc__always{margin-top: 0}.ui-apc__foot{display: flex;flex-wrap: wrap;align-items: center;gap: 6px 12px;min-height: 44px;padding: 6px 2px 2px 10px}.ui-apc__expires{display: inline-flex;align-items: center;gap: 6px;min-width: 0;color: var(--ui-apc-muted);font-size: 12.5px;font-variant-numeric: tabular-nums;white-space: nowrap;transition: color 300ms ease}.ui-apc__expires svg{width: 14px;height: 14px;flex: none;fill: none;stroke: currentColor;stroke-width: 1.5;stroke-linecap: round;stroke-linejoin: round}.ui-apc__expires[data-low]{color: var(--ui-apc-timer-low)}.ui-apc__actions{display: flex;flex: 0 0 auto;gap: 4px;margin-left: auto}.ui-apc__btn{display: inline-flex;align-items: center;justify-content: center;gap: 8px;height: 34px;padding: 0 12px;border: 0;border-radius: 10px;font: inherit;font-size: 13px;font-weight: 500;line-height: 1;white-space: nowrap;cursor: pointer;-webkit-tap-highlight-color: transparent;transition: background-color 160ms ease, box-shadow 160ms ease, transform 160ms var(--ui-apc-ease), opacity 160ms ease}.ui-apc__btn:active, .ui-apc__btn[data-pressed]{transform: scale(0.97)}.ui-apc__btn:focus-visible{outline: none}.ui-apc__btn--primary{padding-right: 8px;background: var(--ui-apc-primary);color: var(--ui-apc-primary-ink);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12)}.ui-apc__btn--primary:hover, .ui-apc__btn--primary[data-pressed]{background: var(--ui-apc-primary-hover)}.ui-apc__btn--primary:focus-visible{box-shadow: 0 0 0 2px var(--ui-apc-tray), 0 0 0 4px var(--ui-apc-ring)}.ui-apc__btn--quiet{padding-right: 8px;background: transparent;color: var(--ui-apc-ink)}.ui-apc__btn--quiet:hover, .ui-apc__btn--quiet[data-pressed]{background: var(--ui-apc-hover)}.ui-apc__btn--quiet:focus-visible{box-shadow: 0 0 0 2px var(--ui-apc-ring)}.ui-apc__btn--ghost{background: transparent;color: var(--ui-apc-text)}.ui-apc__btn--ghost:hover{background: var(--ui-apc-hover);color: var(--ui-apc-ink)}.ui-apc__btn--ghost:focus-visible{box-shadow: 0 0 0 2px var(--ui-apc-ring)}.ui-apc[data-busy] .ui-apc__btn:not(.ui-apc__approve), .ui-apc[data-busy] .ui-apc__always{opacity: 0.5}.ui-apc[data-busy] .ui-apc__approve{cursor: progress}.ui-apc__kbd{display: inline-grid;place-items: center;min-width: 20px;height: 20px;padding: 0 5px;border-radius: 6px;background: var(--ui-apc-kbd);color: var(--ui-apc-muted);font: inherit;font-size: 11px;font-weight: 500;line-height: 1}.ui-apc__btn--primary .ui-apc__kbd{background: var(--ui-apc-primary-kbd);color: var(--ui-apc-primary-kbd-ink)}.ui-apc__spinner{width: 20px;height: 14px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-dasharray: 26 38;transform-origin: 50% 50%;animation: ui-apc-spin 800ms linear infinite}.ui-apc__resolved{display: flex;align-items: center;gap: 10px;min-height: 48px;padding: 12px 14px;outline: none;animation: ui-apc-in 420ms var(--ui-apc-ease) 120ms both}.ui-apc__resolved:focus-visible{box-shadow: 0 0 0 1px var(--ui-apc-line), inset 0 0 0 2px var(--ui-apc-ring)}.ui-apc__mark{display: grid;flex: none;place-items: center;width: 22px;height: 22px;border-radius: 50%;background: var(--ui-apc-ok-bg);color: var(--ui-apc-ok-ink);animation: ui-apc-pop 460ms var(--ui-apc-ease) 140ms both}.ui-apc__resolved[data-status="denied"] .ui-apc__mark{background: var(--ui-apc-no-bg);color: var(--ui-apc-no-ink)}.ui-apc__mark svg{width: 14px;height: 14px;fill: none;stroke: currentColor;stroke-width: 1.9;stroke-linecap: round;stroke-linejoin: round}.ui-apc__mark path{stroke-dasharray: 1;stroke-dashoffset: 1;animation: ui-apc-draw 420ms var(--ui-apc-ease) 300ms forwards}.ui-apc__row-title{flex: 1 1 auto;min-width: 0;overflow: hidden;color: var(--ui-apc-ink);font-size: 13.5px;font-weight: 500;white-space: nowrap;text-overflow: ellipsis}.ui-apc__row-status{flex: none;color: var(--ui-apc-muted);white-space: nowrap}.ui-apc__sr{position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap;border: 0}@container (max-width: 400px){.ui-apc__actions{flex: 1 1 100%;margin-left: 0}.ui-apc__foot{padding-left: 2px}.ui-apc__expires{padding-left: 8px}.ui-apc__actions .ui-apc__btn{flex: 1 1 0;min-width: 0;padding: 0 10px}.ui-apc__kbd{display: none}}@container (max-width: 340px){.ui-apc__pending > .ui-apc__card{padding: 14px}.ui-apc__head{gap: 10px}.ui-apc__risk-word{display: none}.ui-apc__row-time{display: none}.ui-apc__details{column-gap: 12px}}@media (hover: none){.ui-apc__kbd{display: none}}@keyframes ui-apc-out{to{opacity: 0;transform: translateY(-6px) scale(0.985);filter: blur(2px)}}@keyframes ui-apc-in{from{opacity: 0;transform: translateY(4px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-apc-pop{from{opacity: 0;transform: scale(0.5)}to{opacity: 1;transform: none}}@keyframes ui-apc-draw{to{stroke-dashoffset: 0}}@keyframes ui-apc-spin{to{transform: rotate(360deg)}}@media (prefers-reduced-motion: reduce){.ui-apc, .ui-apc *, .ui-apc *::before, .ui-apc *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;transition-duration: 1ms !important}.ui-apc__spinner{animation: ui-apc-spin 1.6s linear infinite !important}.ui-apc__mark path{stroke-dashoffset: 0}}:where(.dark, [data-theme="dark"]) .ui-apc{--ui-apc-tray: #111113;--ui-apc-bg: #19191b;--ui-apc-ink: #ededed;--ui-apc-text: #a1a1a1;--ui-apc-muted: #8b8b92;--ui-apc-line: #2a2a2e;--ui-apc-soft: #1f1f22;--ui-apc-tile: #1f1f22;--ui-apc-hover: #222225;--ui-apc-primary: #ededed;--ui-apc-primary-hover: #ffffff;--ui-apc-primary-ink: #19191b;--ui-apc-primary-kbd: rgba(0, 0, 0, 0.08);--ui-apc-primary-kbd-ink: rgba(25, 25, 27, 0.6);--ui-apc-kbd: rgba(255, 255, 255, 0.07);--ui-apc-box: rgba(255, 255, 255, 0.2);--ui-apc-box-hover: rgba(255, 255, 255, 0.32);--ui-apc-ring: rgba(255, 255, 255, 0.4);--ui-apc-timer-low: #e0a84a;--ui-apc-low-bg: rgba(255, 255, 255, 0.07);--ui-apc-low-ink: #a1a1a1;--ui-apc-med-bg: rgba(232, 183, 92, 0.12);--ui-apc-med-ink: #e8b75c;--ui-apc-high-bg: rgba(240, 138, 128, 0.12);--ui-apc-high-ink: #f08a80;--ui-apc-ok-bg: rgba(92, 201, 138, 0.13);--ui-apc-ok-ink: #5cc98a;--ui-apc-no-bg: rgba(255, 255, 255, 0.07);--ui-apc-no-ink: #a1a1a1}`;
var l = [`M`, `J`, `S`, `A`];
function u() {
  let [e, t] = (0, n3.useState)(`pending`), [i2, o2] = (0, n3.useState)(false), [s2, c2] = (0, n3.useState)(false), u2 = (0, n3.useRef)(null);
  (0, n3.useEffect)(() => {
    if (i2) return;
    let n4 = [];
    if (e === `pending`) {
      if (s2) return;
      let e2 = () => u2.current?.querySelector(`.ui-apc__approve`);
      n4.push(window.setTimeout(() => e2()?.setAttribute(`data-pressed`, ``), 2800)), n4.push(window.setTimeout(() => {
        e2()?.removeAttribute(`data-pressed`), e2()?.click();
      }, 3e3));
    } else n4.push(window.setTimeout(() => t(`pending`), 3200));
    return () => {
      n4.forEach(clearTimeout), u2.current?.querySelector(`.ui-apc__approve`)?.removeAttribute(`data-pressed`);
    };
  }, [e, i2, s2]);
  let d = () => o2(true);
  return (0, r.jsx)(`div`, { className: `ap-demo`, children: (0, r.jsxs)(`div`, { ref: u2, className: `ap-demo__chat`, onPointerDown: d, onKeyDown: d, onPointerEnter: () => c2(true), onPointerLeave: () => c2(false), children: [(0, r.jsxs)(`div`, { className: `ap-demo__agent`, children: [(0, r.jsx)(`span`, { className: `ap-demo__bot`, "aria-hidden": `true`, children: (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, children: (0, r.jsx)(`path`, { d: `M12 3.5 13.9 9l5.6 1.9-5.6 1.9L12 18.5l-1.9-5.7-5.6-1.9L10.1 9 12 3.5Z` }) }) }), (0, r.jsx)(`p`, { className: `ap-demo__msg`, children: `I drafted the October newsletter. Ready to send?` })] }), (0, r.jsx)(a, { title: `Send campaign email`, description: `October product update \xB7 Newsletter`, risk: `medium`, icon: (0, r.jsxs)(`svg`, { viewBox: `0 0 24 24`, children: [(0, r.jsx)(`path`, { d: `M4 6.5h16v11H4z` }), (0, r.jsx)(`path`, { d: `m4.5 7 7.5 6 7.5-6` })] }), status: e, onApprove: () => new Promise((e2) => window.setTimeout(e2, 700)).then(() => t(`approved`)), onDeny: () => t(`denied`), details: [{ label: `Subject`, value: `What's new in October` }, { label: `Send`, value: `Today, 9:00 AM` }], children: (0, r.jsxs)(`div`, { className: `ap-demo__people`, children: [(0, r.jsx)(`span`, { className: `ap-demo__avatars`, "aria-hidden": `true`, children: l.map((e2, t2) => (0, r.jsx)(`span`, { className: `ap-demo__avatar`, "data-i": t2, children: e2 }, e2)) }), (0, r.jsxs)(`span`, { className: `ap-demo__to`, children: [(0, r.jsx)(`span`, { className: `ap-demo__names`, children: `Mia, Jonas, Sara, Alex` }), (0, r.jsx)(`span`, { className: `ap-demo__more`, children: `+38 more` })] })] }) }), i2 && e !== `pending` && (0, r.jsx)(`button`, { type: `button`, className: `ap-demo__replay`, onClick: () => t(`pending`), children: `Replay` })] }) });
}

export {
  u
};
