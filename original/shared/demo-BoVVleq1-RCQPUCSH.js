import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo-BoVVleq1.js
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
    K > 0 && K < e && t2 === K && $.push((0, r.jsx)(`span`, { className: `ui-otp__sep` }, `sep`));
    let n4 = x[t2];
    $.push((0, r.jsx)(`span`, { ref: (e2) => {
      z.current[t2] = e2;
    }, className: `ui-otp__box`, "data-filled": n4 ? `` : void 0, style: { "--i": t2 }, children: n4 && (0, r.jsx)(`span`, { className: `ui-otp__char`, style: { animationDelay: `${W.current[t2] ?? 0}ms` }, children: n4 }, U.current[t2]) }, t2));
  }
  return (0, r.jsxs)(`div`, { className: [`ui-otp`, re].filter(Boolean).join(` `), "data-status": f, "data-error": Y || void 0, "data-align": te, "data-disabled": v || void 0, children: [(0, r.jsx)(`style`, { href: `ui-otp-input`, precedence: `default`, children: c }), (0, r.jsx)(`div`, { className: `ui-otp__field`, children: (0, r.jsxs)(`div`, { ref: F, className: `ui-otp__slots`, "data-clearing": oe || void 0, style: { "--n": e, "--sep-w": K > 0 && K < e ? `calc(var(--ui-otp-gap) + 10px)` : `0px` }, children: [$, (0, r.jsx)(`span`, { ref: I, className: `ui-otp__ring`, "data-show": le || void 0, "aria-hidden": `true`, children: (0, r.jsx)(`span`, { className: `ui-otp__caret`, "data-show": w && !x[G] && !J || void 0 }) }), (0, r.jsx)(`span`, { ref: L, className: `ui-otp__pill`, "aria-hidden": `true`, children: (0, r.jsxs)(`span`, { ref: R, className: `ui-otp__pill-inner`, children: [(0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, className: `ui-otp__check`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: o.check, pathLength: 1 }) }), h] }) }), (0, r.jsx)(`input`, { ref: P, className: `ui-otp__input`, type: `text`, value: x, inputMode: s2 ? `numeric` : `text`, pattern: s2 ? `[0-9]*` : void 0, autoComplete: `one-time-code`, autoCapitalize: s2 ? `off` : `characters`, autoCorrect: `off`, spellCheck: false, enterKeyHint: `done`, "aria-label": `${ne}, ${e} ${s2 ? `digits` : `characters`}`, "aria-invalid": Y || void 0, "aria-describedby": Y ? `${V}-msg` : void 0, disabled: v, readOnly: q || k, onChange: (e2) => ue(e2.currentTarget), onPaste: de, onKeyDown: fe, onFocus: () => {
    T(true), requestAnimationFrame(Z);
  }, onBlur: () => T(false), onPointerUp: (e2) => pe(e2.clientX), onSelect: (e2) => {
    let t2 = e2.currentTarget, n4 = G < x.length ? [G, G + 1] : [G, G];
    (t2.selectionStart !== n4[0] || t2.selectionEnd !== n4[1]) && Z();
  } })] }) }), (0, r.jsx)(`div`, { className: `ui-otp__msg`, "data-show": Y || void 0, children: (0, r.jsx)(`div`, { className: `ui-otp__msg-inner`, children: (0, r.jsxs)(`p`, { id: `${V}-msg`, className: `ui-otp__msg-text`, children: [(0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, className: `ui-otp__alert`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: o.alert }) }), (0, r.jsx)(`span`, { children: p })] }) }) }), g && (0, r.jsxs)(`div`, { className: `ui-otp__resend`, "data-hidden": f === `success` || void 0, children: [(0, r.jsx)(`span`, { className: `ui-otp__resend-q`, children: `Didn't get a code?` }), ` `, j > 0 ? (0, r.jsxs)(`span`, { className: `ui-otp__swap ui-otp__wait`, children: [`Resend in`, `\xA0`, (0, r.jsx)(`span`, { className: `ui-otp__time`, children: i(j) })] }, `wait`) : (0, r.jsx)(`button`, { type: `button`, className: `ui-otp__swap ui-otp__resend-btn`, onClick: me, disabled: v || q, children: `Resend code` }, `go`)] }), (0, r.jsx)(`span`, { className: `ui-otp__live`, "aria-live": `polite`, children: se })] });
}
var c = `
/* Colors, size and motion as variables \u2013 override them on .ui-otp */
.ui-otp {
  --ui-otp-box: 48px;
  --ui-otp-gap: 8px;
  --ui-otp-bg: #fafafa;
  --ui-otp-card: #ffffff;
  --ui-otp-line: #e4e4e7;
  --ui-otp-line-strong: #cfcfd4;
  --ui-otp-ink: #171717;
  --ui-otp-text: #404040;
  --ui-otp-muted: #8f8f8f;
  --ui-otp-faint: #c4c4c8;
  --ui-otp-halo: rgba(23, 23, 23, 0.07);
  --ui-otp-wait: #f2f2f3;
  --ui-otp-shine: rgba(255, 255, 255, 0.95);
  --ui-otp-danger: #e5484d;
  --ui-otp-danger-line: rgba(229, 72, 77, 0.6);
  --ui-otp-danger-halo: rgba(229, 72, 77, 0.12);
  --ui-otp-success: #2f9e5b;
  --ui-otp-accent: #2f6bff;
  --ui-otp-focus: rgba(23, 23, 23, 0.22);
  --ui-otp-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  container-type: inline-size;
  display: grid;
  justify-self: stretch; /* it sizes the boxes from its own width, so it must never shrink to fit them */
  width: 100%;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13.5px;
  line-height: 1.45;
  color: var(--ui-otp-text);
  -webkit-font-smoothing: antialiased;
}
.ui-otp *, .ui-otp *::before, .ui-otp *::after { box-sizing: border-box; }
.ui-otp[data-align="center"] { justify-items: center; text-align: center; }
.ui-otp[data-disabled] { opacity: 0.55; }

.ui-otp__field { display: flex; min-width: 0; }
.ui-otp[data-align="center"] .ui-otp__field { justify-content: center; }

/* The boxes scale down to fit their container (phones at 320px), up to --ui-otp-box */
.ui-otp__slots {
  --size: min(var(--ui-otp-box), calc((100cqi - (var(--n) - 1) * var(--ui-otp-gap) - var(--sep-w)) / var(--n)));
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--ui-otp-gap);
}
.ui-otp__box {
  position: relative;
  display: grid;
  place-items: center;
  flex: none;
  width: var(--size);
  height: calc(var(--size) * 1.18);
  overflow: hidden;
  border-radius: calc(var(--size) * 0.24);
  background: var(--ui-otp-bg);
  box-shadow: inset 0 0 0 1px var(--ui-otp-line);
  font-size: calc(var(--size) * 0.46);
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  color: var(--ui-otp-ink);
  transition: box-shadow 220ms ease, background-color 220ms ease, transform 380ms var(--ui-otp-ease), opacity 260ms ease;
}
.ui-otp__box[data-filled] { background: var(--ui-otp-card); box-shadow: inset 0 0 0 1px var(--ui-otp-line-strong); }
.ui-otp__sep { flex: none; width: 10px; height: 2px; border-radius: 1px; background: var(--ui-otp-faint); transition: opacity 200ms ease; }

/* Digits pop in \u2013 a small lift out of a blur, no bounce */
.ui-otp__char { display: block; animation: ui-otp-pop 280ms var(--ui-otp-ease) both; }
.ui-otp__slots[data-clearing] .ui-otp__char { animation: ui-otp-out 240ms ease both; animation-delay: calc((var(--n) - var(--i)) * 22ms) !important; }

/* One ring glides from box to box; its caret blinks softly in an empty box */
.ui-otp__ring {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: grid;
  place-items: center;
  border-radius: calc(var(--size) * 0.24);
  box-shadow: inset 0 0 0 1.5px var(--ui-otp-ink), 0 0 0 4px var(--ui-otp-halo);
  opacity: 0;
  pointer-events: none;
  transition: transform 260ms var(--ui-otp-ease), width 260ms var(--ui-otp-ease), opacity 180ms ease, box-shadow 220ms ease;
}
.ui-otp__ring[data-show] { opacity: 1; }
.ui-otp__caret { width: 1.5px; height: 40%; border-radius: 1px; background: var(--ui-otp-ink); opacity: 0; }
.ui-otp__caret[data-show] { animation: ui-otp-blink 1.1s ease-in-out infinite; }

/* The real input lies over the boxes, invisible \u2013 it takes taps, keys, paste and SMS autofill */
.ui-otp__input {
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
.ui-otp__input::selection { background: transparent; }
.ui-otp__input:-webkit-autofill { -webkit-box-shadow: 0 0 0 100px transparent inset; transition: background-color 9999s; }
.ui-otp__input[readonly], .ui-otp__input:disabled { cursor: default; }
/* Keyboard focus is shown by the ring \u2013 a thin outline joins it for keyboard users */
.ui-otp__slots:has(.ui-otp__input:focus-visible) .ui-otp__ring { box-shadow: inset 0 0 0 1.5px var(--ui-otp-ink), 0 0 0 4px var(--ui-otp-halo), 0 0 0 6px var(--ui-otp-focus); }

/* Verifying: a soft light passes over the boxes, one after another */
.ui-otp__box::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, transparent 20%, var(--ui-otp-shine) 50%, transparent 80%);
  transform: translateX(-120%);
  opacity: 0;
  pointer-events: none;
}
.ui-otp[data-status="verifying"] .ui-otp__box::after { opacity: 1; animation: ui-otp-shimmer 1.3s ease-in-out infinite; animation-delay: calc(var(--i) * 70ms); }
.ui-otp[data-status="verifying"] .ui-otp__box { background: var(--ui-otp-wait); box-shadow: inset 0 0 0 1px var(--ui-otp-line); color: var(--ui-otp-text); }

/* Error: only the borders turn red */
.ui-otp[data-error] .ui-otp__box { box-shadow: inset 0 0 0 1px var(--ui-otp-danger-line); }
.ui-otp[data-error] .ui-otp__ring { box-shadow: inset 0 0 0 1.5px var(--ui-otp-danger), 0 0 0 4px var(--ui-otp-danger-halo); }
.ui-otp[data-error] .ui-otp__caret { background: var(--ui-otp-danger); }

/* Success: the boxes slide together and fade while one frame morphs into the "Verified" pill */
.ui-otp__pill {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  display: grid;
  place-items: center;
  height: calc(var(--size) * 1.18);
  overflow: hidden;
  border-radius: calc(var(--size) * 0.24);
  background: var(--ui-otp-card);
  box-shadow: inset 0 0 0 1px var(--ui-otp-line-strong);
  opacity: 0;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: width 300ms var(--ui-otp-ease), height 300ms var(--ui-otp-ease), border-radius 300ms var(--ui-otp-ease), opacity 160ms ease 140ms;
}
.ui-otp__pill-inner {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 15px 0 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  color: var(--ui-otp-ink);
  opacity: 0;
  transition: opacity 160ms ease;
}
.ui-otp__check { flex: none; width: 17px; height: 17px; fill: none; stroke: var(--ui-otp-success); stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; }
.ui-otp__check path { stroke-dasharray: 1; stroke-dashoffset: 1; transition: stroke-dashoffset 120ms ease; }
.ui-otp[data-status="success"] .ui-otp__box {
  transform: translateX(calc(((var(--n) - 1) / 2 - var(--i)) * (var(--size) + var(--ui-otp-gap)))) scale(0.7);
  opacity: 0;
  transition: transform 340ms var(--ui-otp-ease), opacity 220ms ease 120ms;
}
.ui-otp[data-status="success"] .ui-otp__sep { opacity: 0; }
/* The pill settles at a compact height, not the height of the boxes */
.ui-otp[data-status="success"] .ui-otp__pill {
  height: 36px;
  border-radius: 999px;
  opacity: 1;
  transition: width 460ms var(--ui-otp-ease) 220ms, height 460ms var(--ui-otp-ease) 220ms, border-radius 460ms var(--ui-otp-ease) 220ms, opacity 160ms ease 120ms;
}
.ui-otp[data-status="success"] .ui-otp__pill-inner { opacity: 1; transition: opacity 240ms ease 460ms; }
.ui-otp[data-status="success"] .ui-otp__check path { stroke-dashoffset: 0; transition: stroke-dashoffset 380ms var(--ui-otp-ease) 560ms; }

/* The error message grows in below, then folds away */
.ui-otp__msg { display: grid; grid-template-rows: 0fr; width: 100%; transition: grid-template-rows 300ms var(--ui-otp-ease); }
.ui-otp__msg[data-show] { grid-template-rows: 1fr; }
.ui-otp__msg-inner { min-height: 0; overflow: hidden; }
.ui-otp__msg-text {
  margin: 0;
  padding-top: 10px;
  font-size: 13px;
  text-wrap: balance;
  color: var(--ui-otp-text);
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 200ms ease, transform 300ms var(--ui-otp-ease);
}
.ui-otp__msg[data-show] .ui-otp__msg-text { opacity: 1; transform: none; transition-delay: 60ms; }
/* The icon sits inline, so a wrapped message stays centered with it */
.ui-otp__alert { display: inline-block; width: 15px; height: 15px; margin-right: 6px; vertical-align: -3px; fill: none; stroke: var(--ui-otp-danger); stroke-width: 2; stroke-linecap: round; }

/* Resend: a countdown that turns into a button */
.ui-otp__resend { margin-top: 14px; font-size: 13px; font-variant-numeric: tabular-nums; color: var(--ui-otp-muted); transition: opacity 220ms ease; }
.ui-otp__resend[data-hidden] { opacity: 0; visibility: hidden; transition: opacity 220ms ease, visibility 0s 220ms; }
.ui-otp__swap { display: inline-block; animation: ui-otp-in 260ms var(--ui-otp-ease) both; }
.ui-otp__wait { color: var(--ui-otp-text); }
.ui-otp__time { display: inline-block; min-width: 3.4ch; text-align: left; }
.ui-otp__resend-btn {
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  font-weight: 500;
  color: var(--ui-otp-accent);
  cursor: pointer;
}
.ui-otp__resend-btn::before { content: ""; position: absolute; inset: -6px -8px; border-radius: 8px; }
.ui-otp__resend-btn:hover { text-decoration: underline; text-underline-offset: 3px; }
.ui-otp__resend-btn:focus-visible { outline: 2px solid var(--ui-otp-focus); outline-offset: 3px; border-radius: 4px; }
.ui-otp__resend-btn:disabled { color: var(--ui-otp-muted); cursor: default; text-decoration: none; }
.ui-otp__live { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@keyframes ui-otp-pop { from { opacity: 0; transform: translateY(4px) scale(0.7); filter: blur(3px); } to { opacity: 1; transform: none; filter: none; } }
@keyframes ui-otp-out { to { opacity: 0; transform: translateY(-4px) scale(0.8); filter: blur(2px); } }
@keyframes ui-otp-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
@keyframes ui-otp-shimmer { 0% { transform: translateX(-120%); } 55%, 100% { transform: translateX(120%); } }
@keyframes ui-otp-in { from { opacity: 0; transform: translateY(3px); filter: blur(2px); } to { opacity: 1; transform: none; filter: none; } }

/* Narrow containers (phones): tighter gaps, the question before "Resend" drops first */
@container (max-width: 360px) {
  .ui-otp__slots { --ui-otp-gap: 6px; }
  .ui-otp__sep { width: 8px; }
}
@container (max-width: 250px) {
  .ui-otp__resend-q { display: none; }
}
/* Touch screens: a bigger target for Resend */
@media (hover: none) and (pointer: coarse) {
  .ui-otp__resend-btn::before { inset: -11px -12px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-otp *, .ui-otp *::before, .ui-otp *::after { animation: none !important; transition: none !important; }
  .ui-otp__caret[data-show] { opacity: 1; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-otp {
  --ui-otp-bg: #1d1d20;
  --ui-otp-card: #19191b;
  --ui-otp-line: #2a2a2e;
  --ui-otp-line-strong: #3a3a40;
  --ui-otp-ink: #ededed;
  --ui-otp-text: #c8c8cc;
  --ui-otp-muted: #8b8b92;
  --ui-otp-faint: #4a4a50;
  --ui-otp-halo: rgba(255, 255, 255, 0.08);
  --ui-otp-wait: #1d1d20;
  --ui-otp-shine: rgba(255, 255, 255, 0.07);
  --ui-otp-danger: #ff6369;
  --ui-otp-danger-line: rgba(255, 99, 105, 0.55);
  --ui-otp-danger-halo: rgba(255, 99, 105, 0.14);
  --ui-otp-success: #4cc38a;
  --ui-otp-accent: #6d8bff;
  --ui-otp-focus: rgba(255, 255, 255, 0.3);
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
  return (0, r.jsx)(`div`, { className: `otp-demo`, onPointerDownCapture: g, onKeyDownCapture: g, onFocusCapture: g, children: (0, r.jsxs)(`div`, { className: `otp-demo__tray`, children: [(0, r.jsxs)(`div`, { className: `otp-demo__card`, children: [(0, r.jsx)(`span`, { className: `otp-demo__icon`, "aria-hidden": `true`, children: (0, r.jsxs)(`svg`, { viewBox: `0 0 24 24`, children: [(0, r.jsx)(`rect`, { x: `3.5`, y: `5.5`, width: `17`, height: `13`, rx: `2.5` }), (0, r.jsx)(`path`, { d: `M4.5 7.5l7.5 5.5 7.5-5.5` })] }) }), (0, r.jsx)(`h3`, { className: `otp-demo__title`, children: `Check your email` }), (0, r.jsxs)(`p`, { className: `otp-demo__text`, children: [`We sent a code to `, (0, r.jsx)(`strong`, { children: `maya@acme.com` })] }), (0, r.jsx)(s, { className: `otp-demo__otp`, separator: true, align: `center`, value: e, status: i2, errorMessage: ee(o2), onChange: (e2) => {
    t(e2), i2 === `error` && e2 && a2(`idle`);
  }, onComplete: h, onResend: () => c2(3), resendIn: 30 })] }), (0, r.jsxs)(`p`, { className: `otp-demo__hint`, children: [`Demo code: `, (0, r.jsxs)(`span`, { children: [`482`, `\xA0`, `913`] })] })] }) });
}
export {
  d as default
};
