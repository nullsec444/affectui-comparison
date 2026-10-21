import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo.clean-SPg51xTG.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e) => `${Math.floor(e / 60)}:${String(e % 60).padStart(2, `0`)}`;
var a = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
var o = { check: `M5.5 12.5l4 4L18.5 8`, alert: `M12 8v4.5M12 16h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z` };
function s({ length: e = 6, separator: t = false, numeric: s2 = true, value: l2, defaultValue: u2 = ``, onChange: ee2, onComplete: d2, status: f = `idle`, errorMessage: p = `That code didn't work. Try again.`, clearOnError: m = true, successLabel: h = `Verified`, onResend: g, resendIn: _ = 30, align: te = `start`, disabled: v = false, autoFocus: y = false, label: ne = `Verification code`, className: re }) {
  let b = (t2) => {
    let n4 = ``;
    for (let r2 of t2) {
      let t3 = s2 ? /[0-9]/.test(r2) ? r2 : `` : /[a-z0-9]/i.test(r2) ? r2.toUpperCase() : ``;
      t3 && n4.length < e && (n4 += t3);
    }
    return n4;
  }, [ie, ae] = (0, n3.useState)(() => b(u2)), x = b(l2 ?? ie), [S, C] = (0, n3.useState)(Math.min(x.length, e - 1)), [w, T] = (0, n3.useState)(false), [E, D] = (0, n3.useState)(false), [oe, O] = (0, n3.useState)(false), [k, A] = (0, n3.useState)(false), [j, M] = (0, n3.useState)(_), [se, N] = (0, n3.useState)(``), P = (0, n3.useRef)(null), F = (0, n3.useRef)(null), I = (0, n3.useRef)(null), L = (0, n3.useRef)(null), R = (0, n3.useRef)(null), z = (0, n3.useRef)([]), B = (0, n3.useRef)([]), V = (0, n3.useId)(), H = (0, n3.useRef)(x), U = (0, n3.useRef)([]), W = (0, n3.useRef)([]), ce = (0, n3.useRef)(0);
  if (H.current !== x) {
    let e2 = H.current, t2 = [...x].map((t3, n5) => t3 !== e2[n5]), n4 = t2.indexOf(true), r2 = t2.filter(Boolean).length > 1;
    t2.forEach((e3, t3) => {
      e3 && (U.current[t3] = ++ce.current, W.current[t3] = r2 ? (t3 - n4) * 45 : 0);
    }), H.current = x;
  }
  let G = Math.min(S, x.length, e - 1), K = t === true ? Math.floor(e / 2) : typeof t == `number` ? t : 0, q = f === `verifying` || f === `success`, J = q || k || v, Y = f === `error` && E, le = !q && !v && (w || x.length > 0 && x.length < e), X = (t2, n4, r2 = true) => {
    l2 === void 0 && ae(t2), t2 !== x && ee2?.(t2), C(Math.max(0, Math.min(n4, t2.length, e - 1))), r2 && (E && t2.length && D(false), t2.length === e && t2 !== x && d2?.(t2));
  }, ue = (e2) => {
    if (J) return;
    let t2 = e2.value, n4 = e2.selectionStart ?? t2.length, r2 = b(t2), i2 = b(t2.slice(0, n4)).length;
    if (r2 === x) {
      e2.value = x, Z();
      return;
    }
    X(r2, i2);
  }, de = (t2) => {
    if (t2.preventDefault(), J) return;
    let n4 = b(t2.clipboardData.getData(`text`));
    if (!n4) return;
    if (n4.length >= e) return X(n4.slice(0, e), e - 1);
    let r2 = (x.slice(0, G) + n4 + x.slice(G + n4.length)).slice(0, e);
    X(r2, G + n4.length);
  }, fe = (t2) => {
    let n4 = Math.min(x.length, e - 1), r2 = { ArrowLeft: G - 1, ArrowRight: G + 1, Home: 0, End: n4, ArrowUp: 0, ArrowDown: n4 };
    t2.key in r2 && !t2.shiftKey && !t2.metaKey && (t2.preventDefault(), C(Math.max(0, Math.min(r2[t2.key], n4))));
  }, pe = (t2) => {
    let n4 = z.current.findIndex((e2) => e2 && t2 < e2.getBoundingClientRect().right + 4);
    n4 < 0 && (n4 = e - 1), C(Math.min(n4, x.length, e - 1)), requestAnimationFrame(Z);
  }, Z = () => {
    let t2 = P.current;
    if (!t2 || document.activeElement !== t2) return;
    let n4 = Math.min(S, x.length, e - 1);
    n4 < x.length ? t2.setSelectionRange(n4, n4 + 1) : t2.setSelectionRange(n4, n4);
  };
  (0, n3.useLayoutEffect)(Z), (0, n3.useEffect)(() => {
    y && P.current?.focus({ preventScroll: true });
  }, [y]), (0, n3.useLayoutEffect)(() => {
    let e2 = I.current, t2 = z.current[G];
    if (e2 && t2) {
      let n5 = !e2.dataset.ready;
      n5 && (e2.style.transition = `none`), e2.style.width = `${t2.offsetWidth}px`, e2.style.height = `${t2.offsetHeight}px`, e2.style.transform = `translate(${t2.offsetLeft}px, ${t2.offsetTop}px)`, n5 && (e2.dataset.ready = `1`, e2.offsetWidth, e2.style.transition = ``);
    }
    let n4 = L.current, r2 = F.current;
    n4 && r2 && R.current && (n4.style.width = `${f === `success` ? R.current.offsetWidth : r2.offsetWidth}px`);
  }), (0, n3.useEffect)(() => {
    let e2 = F.current;
    if (!e2) return;
    let t2 = new ResizeObserver(() => {
      let t3 = I.current, n4 = z.current[G];
      t3 && n4 && (t3.style.width = `${n4.offsetWidth}px`, t3.style.height = `${n4.offsetHeight}px`, t3.style.transform = `translate(${n4.offsetLeft}px, ${n4.offsetTop}px)`), L.current && f !== `success` && (L.current.style.width = `${e2.offsetWidth}px`);
    });
    return t2.observe(e2), () => t2.disconnect();
  }, [G, f]);
  let Q = (0, n3.useRef)(f);
  (0, n3.useEffect)(() => {
    let e2 = Q.current;
    if (Q.current = f, f !== e2) {
      if (f === `verifying` && N(`Verifying code`), f === `success` && N(h), f !== `error`) {
        D(false);
        return;
      }
      D(true), N(typeof p == `string` ? p : `That code didn't work`), a() || F.current?.animate([{ transform: `none` }, { transform: `translateX(-6px)` }, { transform: `translateX(5px)` }, { transform: `translateX(-3px)` }, { transform: `translateX(2px)` }, { transform: `none` }], { duration: 420, easing: `ease-out` }), m && (A(true), B.current.push(window.setTimeout(() => O(true), 700), window.setTimeout(() => {
        O(false), A(false), X(``, 0, false);
      }, 980)));
    }
  }, [f]), (0, n3.useEffect)(() => () => B.current.forEach(clearTimeout), []), (0, n3.useEffect)(() => {
    if (j <= 0) {
      g && _ > 0 && N(`You can resend the code now`);
      return;
    }
    let e2 = window.setTimeout(() => M((e3) => e3 - 1), 1e3);
    return () => clearTimeout(e2);
  }, [j]);
  let me = () => {
    g?.(), M(_), N(`A new code is on its way`);
  }, $ = [];
  for (let t2 = 0; t2 < e; t2++) {
    K > 0 && K < e && t2 === K && $.push((0, r.jsx)(`span`, { className: `ui-otpc__sep` }, `sep`));
    let n4 = x[t2];
    $.push((0, r.jsx)(`span`, { ref: (e2) => {
      z.current[t2] = e2;
    }, className: `ui-otpc__box`, "data-filled": n4 ? `` : void 0, style: { "--i": t2 }, children: n4 && (0, r.jsx)(`span`, { className: `ui-otpc__char`, style: { animationDelay: `${W.current[t2] ?? 0}ms` }, children: n4 }, U.current[t2]) }, t2));
  }
  return (0, r.jsxs)(`div`, { className: [`ui-otpc`, re].filter(Boolean).join(` `), "data-status": f, "data-error": Y || void 0, "data-align": te, "data-disabled": v || void 0, children: [(0, r.jsx)(`style`, { href: `ui-otp-input-clean`, precedence: `default`, children: c }), (0, r.jsx)(`div`, { className: `ui-otpc__field`, children: (0, r.jsxs)(`div`, { ref: F, className: `ui-otpc__slots`, "data-clearing": oe || void 0, style: { "--n": e, "--sep-w": K > 0 && K < e ? `calc(var(--ui-otpc-gap) + 8px)` : `0px` }, children: [$, (0, r.jsx)(`span`, { ref: I, className: `ui-otpc__ring`, "data-show": le || void 0, "aria-hidden": `true`, children: (0, r.jsx)(`span`, { className: `ui-otpc__caret`, "data-show": w && !x[G] && !J || void 0 }) }), (0, r.jsx)(`span`, { ref: L, className: `ui-otpc__pill`, "aria-hidden": `true`, children: (0, r.jsxs)(`span`, { ref: R, className: `ui-otpc__pill-inner`, children: [(0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, className: `ui-otpc__check`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: o.check, pathLength: 1 }) }), h] }) }), (0, r.jsx)(`input`, { ref: P, className: `ui-otpc__input`, type: `text`, value: x, inputMode: s2 ? `numeric` : `text`, pattern: s2 ? `[0-9]*` : void 0, autoComplete: `one-time-code`, autoCapitalize: s2 ? `off` : `characters`, autoCorrect: `off`, spellCheck: false, enterKeyHint: `done`, "aria-label": `${ne}, ${e} ${s2 ? `digits` : `characters`}`, "aria-invalid": Y || void 0, "aria-describedby": Y ? `${V}-msg` : void 0, disabled: v, readOnly: q || k, onChange: (e2) => ue(e2.currentTarget), onPaste: de, onKeyDown: fe, onFocus: () => {
    T(true), requestAnimationFrame(Z);
  }, onBlur: () => T(false), onPointerUp: (e2) => pe(e2.clientX), onSelect: (e2) => {
    let t2 = e2.currentTarget, n4 = G < x.length ? [G, G + 1] : [G, G];
    (t2.selectionStart !== n4[0] || t2.selectionEnd !== n4[1]) && Z();
  } })] }) }), (0, r.jsx)(`div`, { className: `ui-otpc__msg`, "data-show": Y || void 0, children: (0, r.jsx)(`div`, { className: `ui-otpc__msg-inner`, children: (0, r.jsxs)(`p`, { id: `${V}-msg`, className: `ui-otpc__msg-text`, children: [(0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, className: `ui-otpc__alert`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: o.alert }) }), (0, r.jsx)(`span`, { children: p })] }) }) }), g && (0, r.jsxs)(`div`, { className: `ui-otpc__resend`, "data-hidden": f === `success` || void 0, children: [(0, r.jsx)(`span`, { className: `ui-otpc__resend-q`, children: `Didn't get a code?` }), ` `, j > 0 ? (0, r.jsxs)(`span`, { className: `ui-otpc__swap ui-otpc__wait`, children: [`Resend in`, `\xA0`, (0, r.jsx)(`span`, { className: `ui-otpc__time`, children: i(j) })] }, `wait`) : (0, r.jsx)(`button`, { type: `button`, className: `ui-otpc__swap ui-otpc__resend-btn`, onClick: me, disabled: v || q, children: `Resend code` }, `go`)] }), (0, r.jsx)(`span`, { className: `ui-otpc__live`, "aria-live": `polite`, children: se })] });
}
var c = `
/* Colors, size and motion as variables \u2013 override them on .ui-otpc */
.ui-otpc {
  --ui-otpc-box: 40px;
  --ui-otpc-gap: 8px;
  --ui-otpc-card: #ffffff;
  --ui-otpc-ink: rgba(0, 0, 0, 0.88);
  --ui-otpc-strong: #000000;
  --ui-otpc-text: rgba(0, 0, 0, 0.61);
  --ui-otpc-muted: rgba(0, 0, 0, 0.45);
  --ui-otpc-faint: rgba(0, 0, 0, 0.27);
  --ui-otpc-icon: rgba(0, 0, 0, 0.447);
  --ui-otpc-line: rgba(0, 0, 0, 0.06);
  --ui-otpc-fill: rgba(0, 0, 0, 0.06);
  --ui-otpc-wash: rgba(0, 0, 0, 0.03);
  --ui-otpc-shine: rgba(255, 255, 255, 0.82);
  --ui-otpc-accent: rgba(0, 96, 226, 0.765);
  --ui-otpc-focus: rgba(0, 96, 226, 0.35);
  --ui-otpc-danger: #e5484d;
  --ui-otpc-success: #1a9a52;
  --ui-otpc-danger-tint: rgba(229, 72, 77, 0.08);
  --ui-otpc-success-tint: rgba(26, 154, 82, 0.08);
  /* Strokes are shadows: a 0.5px hairline plus a soft lift */
  --ui-otpc-lift: 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-otpc-shadow: 0 0 0 0.5px var(--ui-otpc-line), var(--ui-otpc-lift);
  --ui-otpc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  container-type: inline-size;
  display: grid;
  justify-self: stretch; /* it sizes the boxes from its own width, so it must never shrink to fit them */
  width: 100%;
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: var(--ui-otpc-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-otpc *, .ui-otpc *::before, .ui-otpc *::after { box-sizing: border-box; }
:where(.ui-otpc) button { margin: 0; padding: 0; border: 0; background: none; font: inherit; color: inherit; cursor: pointer; }
.ui-otpc[data-align="center"] { justify-items: center; text-align: center; }
.ui-otpc[data-disabled] { opacity: 0.55; }

.ui-otpc__field { display: flex; min-width: 0; padding: 3px 0; }
.ui-otpc[data-align="center"] .ui-otpc__field { justify-content: center; }

/* The cells scale down to fit their container (phones at 320px), up to --ui-otpc-box */
.ui-otpc__slots {
  --size: min(var(--ui-otpc-box), calc((100cqi - 6px - (var(--n) - 1) * var(--ui-otpc-gap) - var(--sep-w)) / var(--n)));
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--ui-otpc-gap);
}
/* White cells with the card's hairline shadow */
.ui-otpc__box {
  position: relative;
  display: grid;
  place-items: center;
  flex: none;
  width: var(--size);
  height: calc(var(--size) * 1.1);
  overflow: hidden;
  border-radius: calc(var(--size) * 0.2);
  background: var(--ui-otpc-card);
  box-shadow: var(--ui-otpc-shadow);
  font-size: min(15px, calc(var(--size) * 0.375));
  line-height: 24px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  color: var(--ui-otpc-ink);
  transition: box-shadow 220ms ease, background-color 220ms ease, color 220ms ease, transform 380ms var(--ui-otpc-ease), opacity 260ms ease;
}
.ui-otpc__sep { flex: none; width: 8px; height: 1px; border-radius: 1px; background: var(--ui-otpc-faint); transition: opacity 200ms ease; }

/* Digits pop in \u2013 a small lift out of a blur, no bounce */
.ui-otpc__char { display: block; animation: ui-otpc-pop 280ms var(--ui-otpc-ease) both; }
.ui-otpc__slots[data-clearing] .ui-otpc__char { animation: ui-otpc-out 240ms ease both; animation-delay: calc((var(--n) - var(--i)) * 22ms) !important; }

/* One blue outline glides from cell to cell; its thin caret blinks softly in an empty cell */
.ui-otpc__ring {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: grid;
  place-items: center;
  border-radius: calc(var(--size) * 0.2);
  box-shadow: 0 0 0 0.5px var(--ui-otpc-accent), 0 0 0 2px var(--ui-otpc-focus);
  opacity: 0;
  pointer-events: none;
  transition: transform 260ms var(--ui-otpc-ease), width 260ms var(--ui-otpc-ease), opacity 180ms ease, box-shadow 220ms ease;
}
.ui-otpc__ring[data-show] { opacity: 1; }
.ui-otpc__caret { width: 1px; height: 18px; max-height: 42%; border-radius: 1px; background: var(--ui-otpc-accent); opacity: 0; }
.ui-otpc__caret[data-show] { animation: ui-otpc-blink 1.1s ease-in-out infinite; }

/* The real input lies over the cells, invisible \u2013 it takes taps, keys, paste and SMS autofill */
.ui-otpc__input {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  background: transparent;
  color: transparent;
  -webkit-text-fill-color: transparent;
  caret-color: transparent;
  font-size: 16px; /* iOS doesn't zoom into inputs of 16px and up */
  letter-spacing: -1em;
  cursor: text;
  appearance: none;
}
.ui-otpc__input::selection { background: transparent; }
.ui-otpc__input:-webkit-autofill { -webkit-box-shadow: 0 0 0 100px transparent inset; transition: background-color 9999s; }
.ui-otpc__input[readonly], .ui-otpc__input:disabled { cursor: default; }

/* Verifying: the digits turn gray and a lighter band passes over the cells, one after another */
.ui-otpc__box::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, transparent 20%, var(--ui-otpc-shine) 50%, transparent 80%);
  transform: translateX(-120%);
  opacity: 0;
  pointer-events: none;
}
.ui-otpc[data-status="verifying"] .ui-otpc__box::after { opacity: 1; animation: ui-otpc-shimmer 1.3s ease-in-out infinite; animation-delay: calc(var(--i) * 70ms); }
.ui-otpc[data-status="verifying"] .ui-otpc__box { background: var(--ui-otpc-wash); box-shadow: 0 0 0 0.5px var(--ui-otpc-line); color: var(--ui-otpc-text); }

/* Error: no red strokes \u2013 the cells get a faint red fill and the digits turn red */
.ui-otpc[data-error] .ui-otpc__box { background: var(--ui-otpc-danger-tint); color: var(--ui-otpc-danger); }

/* Success: the cells slide together and fade while one frame morphs into the "Verified" chip */
.ui-otpc__pill {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  display: grid;
  place-items: center;
  height: calc(var(--size) * 1.1);
  overflow: hidden;
  border-radius: calc(var(--size) * 0.2);
  background: var(--ui-otpc-card);
  box-shadow: var(--ui-otpc-shadow);
  opacity: 0;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: width 300ms var(--ui-otpc-ease), background-color 300ms ease, opacity 160ms ease 140ms;
}
.ui-otpc__pill-inner {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 14px 0 12px;
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  white-space: nowrap;
  color: var(--ui-otpc-ink);
  opacity: 0;
  transition: opacity 160ms ease;
}
.ui-otpc__check { width: 16px; height: 16px; flex: none; fill: none; stroke: var(--ui-otpc-success); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.ui-otpc__check path { stroke-dasharray: 1; stroke-dashoffset: 1; transition: stroke-dashoffset 120ms ease; }
.ui-otpc[data-status="success"] .ui-otpc__box {
  transform: translateX(calc(((var(--n) - 1) / 2 - var(--i)) * (var(--size) + var(--ui-otpc-gap)))) scale(0.7);
  opacity: 0;
  transition: transform 340ms var(--ui-otpc-ease), opacity 220ms ease 120ms;
}
.ui-otpc[data-status="success"] .ui-otpc__sep { opacity: 0; }
.ui-otpc[data-status="success"] .ui-otpc__pill {
  background: var(--ui-otpc-success-tint);
  opacity: 1;
  transition: width 460ms var(--ui-otpc-ease) 220ms, background-color 300ms ease 300ms, opacity 160ms ease 120ms;
}
.ui-otpc[data-status="success"] .ui-otpc__pill-inner { opacity: 1; transition: opacity 240ms ease 460ms; }
.ui-otpc[data-status="success"] .ui-otpc__check path { stroke-dashoffset: 0; transition: stroke-dashoffset 380ms var(--ui-otpc-ease) 560ms; }

/* The error message grows in below, then folds away */
.ui-otpc__msg { display: grid; grid-template-rows: 0fr; width: 100%; transition: grid-template-rows 300ms var(--ui-otpc-ease); }
.ui-otpc__msg[data-show] { grid-template-rows: 1fr; }
.ui-otpc__msg-inner { min-height: 0; overflow: hidden; }
.ui-otpc__msg-text {
  margin: 0;
  padding-top: 8px;
  font-size: 12px;
  line-height: 16px;
  text-wrap: balance;
  color: var(--ui-otpc-text);
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 200ms ease, transform 300ms var(--ui-otpc-ease);
}
.ui-otpc__msg[data-show] .ui-otpc__msg-text { opacity: 1; transform: none; transition-delay: 60ms; }
/* The icon sits inline, so a wrapped message stays centered with it */
.ui-otpc__alert { display: inline-block; width: 14px; height: 14px; margin-right: 6px; vertical-align: -3px; fill: none; stroke: var(--ui-otpc-danger); stroke-width: 1.7; stroke-linecap: round; }

/* Resend: a countdown that turns into a tab-style button */
.ui-otpc__resend {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 8px;
  min-height: 28px;
  margin-top: 12px;
  font-size: 12px;
  line-height: 16px;
  font-variant-numeric: tabular-nums;
  color: var(--ui-otpc-muted);
  transition: opacity 220ms ease;
}
.ui-otpc[data-align="center"] .ui-otpc__resend { justify-content: center; }
.ui-otpc__resend[data-hidden] { opacity: 0; visibility: hidden; transition: opacity 220ms ease, visibility 0s 220ms; }
.ui-otpc__swap { display: inline-block; animation: ui-otpc-in 260ms var(--ui-otpc-ease) both; }
.ui-otpc__wait { color: var(--ui-otpc-text); }
.ui-otpc__time { display: inline-block; min-width: 3.4ch; text-align: left; color: var(--ui-otpc-ink); }
.ui-otpc__resend-btn {
  position: relative;
  padding: 4px 10px;
  border-radius: 6px;
  box-shadow: inset 0 0 0 0.5px var(--ui-otpc-line);
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  color: var(--ui-otpc-text);
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-otpc__resend-btn:hover { background: var(--ui-otpc-wash); color: var(--ui-otpc-ink); }
.ui-otpc__resend-btn:active { background: var(--ui-otpc-fill); }
.ui-otpc__resend-btn:focus-visible { outline: 2px solid var(--ui-otpc-focus); outline-offset: 1px; }
.ui-otpc__resend-btn:disabled { color: var(--ui-otpc-faint); background: none; cursor: default; }
.ui-otpc__live { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@keyframes ui-otpc-pop { from { opacity: 0; transform: translateY(4px) scale(0.7); filter: blur(3px); } to { opacity: 1; transform: none; filter: none; } }
@keyframes ui-otpc-out { to { opacity: 0; transform: translateY(-4px) scale(0.8); filter: blur(2px); } }
@keyframes ui-otpc-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
@keyframes ui-otpc-shimmer { 0% { transform: translateX(-120%); } 55%, 100% { transform: translateX(120%); } }
@keyframes ui-otpc-in { from { opacity: 0; transform: translateY(3px); filter: blur(2px); } to { opacity: 1; transform: none; filter: none; } }

/* Narrow containers (phones): tighter gaps, the question before "Resend" drops first */
@container (max-width: 340px) {
  .ui-otpc__slots { --ui-otpc-gap: 6px; }
  .ui-otpc__sep { width: 6px; }
}
@container (max-width: 250px) {
  .ui-otpc__resend-q { display: none; }
}
/* Touch screens: a taller Resend button */
@media (hover: none) and (pointer: coarse) {
  .ui-otpc__resend-btn { padding: 7px 12px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-otpc *, .ui-otpc *::before, .ui-otpc *::after { animation: none !important; transition: none !important; }
  .ui-otpc__caret[data-show] { opacity: 1; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-otpc {
  --ui-otpc-card: #1c1c1e;
  --ui-otpc-ink: rgba(255, 255, 255, 0.9);
  --ui-otpc-strong: #ffffff;
  --ui-otpc-text: rgba(255, 255, 255, 0.62);
  --ui-otpc-muted: rgba(255, 255, 255, 0.46);
  --ui-otpc-faint: rgba(255, 255, 255, 0.3);
  --ui-otpc-icon: rgba(255, 255, 255, 0.5);
  --ui-otpc-line: rgba(255, 255, 255, 0.1);
  --ui-otpc-fill: rgba(255, 255, 255, 0.08);
  --ui-otpc-wash: rgba(255, 255, 255, 0.03);
  --ui-otpc-shine: rgba(255, 255, 255, 0.1);
  --ui-otpc-accent: #4d8dff;
  --ui-otpc-focus: rgba(77, 141, 255, 0.5);
  --ui-otpc-danger: #ff6369;
  --ui-otpc-success: #3ec27a;
  --ui-otpc-danger-tint: rgba(255, 99, 105, 0.14);
  --ui-otpc-success-tint: rgba(62, 194, 122, 0.14);
  --ui-otpc-lift: 0 1px 2px 0 rgba(0, 0, 0, 0.4);
}
`;
var l = `482913`;
var u = `481973`;
var ee = (e) => e > 0 ? `That code didn't work. ${e} ${e === 1 ? `try` : `tries`} left.` : `That code didn't work. Request a new code.`;
function d() {
  let [e, t] = (0, n3.useState)(``), [i2, a2] = (0, n3.useState)(`idle`), [o2, c2] = (0, n3.useState)(3), d2 = (0, n3.useRef)([]), f = (0, n3.useRef)(true), p = (e2, t2) => d2.current.push(window.setTimeout(t2, e2)), m = () => {
    d2.current.forEach(clearTimeout), d2.current = [];
  }, h = (e2) => {
    a2(`verifying`), p(1e3, () => {
      e2 === l ? (a2(`success`), p(3200, () => {
        t(``), a2(`idle`), c2(3);
      })) : (c2((e3) => Math.max(0, e3 - 1)), a2(`error`));
    });
  };
  (0, n3.useEffect)(() => {
    let e2 = 700, n4 = (n5) => {
      for (let r2 = 1; r2 <= n5.length; r2++) {
        let i3 = n5.slice(0, r2);
        p(e2, () => t(i3)), e2 += 150;
      }
    };
    return n4(u), p(e2 + 150, () => h(u)), e2 += 2850, p(e2, () => a2(`idle`)), n4(l), p(e2 + 150, () => {
      f.current = false, h(l);
    }), m;
  }, []);
  let g = () => {
    f.current && (f.current = false, m(), t(``), a2(`idle`));
  };
  return (0, r.jsx)(`div`, { className: `otp-demo`, onPointerDownCapture: g, onKeyDownCapture: g, onFocusCapture: g, children: (0, r.jsxs)(`div`, { className: `otp-democ`, children: [(0, r.jsxs)(`div`, { className: `otp-democ__body`, children: [(0, r.jsx)(`span`, { className: `otp-democ__icon`, "aria-hidden": `true`, children: (0, r.jsxs)(`svg`, { viewBox: `0 0 16 16`, children: [(0, r.jsx)(`rect`, { x: `1.75`, y: `3.25`, width: `12.5`, height: `9.5`, rx: `2` }), (0, r.jsx)(`path`, { d: `M2.5 4.75l5.5 4 5.5-4` })] }) }), (0, r.jsx)(`h3`, { className: `otp-democ__title`, children: `Check your email` }), (0, r.jsxs)(`p`, { className: `otp-democ__text`, children: [`We sent a code to `, (0, r.jsx)(`strong`, { children: `maya@acme.com` })] }), (0, r.jsx)(s, { className: `otp-demo__otp`, separator: true, align: `center`, value: e, status: i2, errorMessage: ee(o2), onChange: (e2) => {
    t(e2), i2 === `error` && e2 && a2(`idle`);
  }, onComplete: h, onResend: () => c2(3), resendIn: 30 })] }), (0, r.jsxs)(`p`, { className: `otp-democ__hint`, children: [`Demo code: `, (0, r.jsxs)(`span`, { children: [`482`, `\xA0`, `913`] })] })] }) });
}
export {
  d as default
};
