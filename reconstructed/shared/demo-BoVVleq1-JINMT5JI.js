import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";
import "./chunk-JTXQSSYA.js";
import "./chunk-CTH3ASD6.js";

// reconstructed/demo-BoVVleq1.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e) => `${Math.floor(e / 60)}:${String(e % 60).padStart(2, `0`)}`;
var a = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
var o = {
  check: `M5.5 12.5l4 4L18.5 8`,
  alert: `M12 8v4.5M12 16h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z`
};
function S1Component({
  length = 6,
  separator = false,
  numeric = true,
  value,
  defaultValue = ``,
  onChange,
  onComplete,
  status = `idle`,
  errorMessage = `That code didn't work. Try again.`,
  clearOnError = true,
  successLabel = `Verified`,
  onResend,
  resendIn = 30,
  align = `start`,
  disabled = false,
  autoFocus = false,
  label = `Verification code`,
  className
}) {
  let b = (t) => {
    let n4 = ``;
    for (let r2 of t) {
      let t2 = numeric ? /[0-9]/.test(r2) ? r2 : `` : /[a-z0-9]/i.test(r2) ? r2.toUpperCase() : ``;
      if (t2 && n4.length < length) {
        n4 += t2;
      }
    }
    return n4;
  };
  let [ie, setIe] = n3.useState(() => b(defaultValue));
  let x = b(value ?? ie);
  let [S, setS] = n3.useState(Math.min(x.length, length - 1));
  let [w, setW] = n3.useState(false);
  let [E, setE] = n3.useState(false);
  let [oe, setOe] = n3.useState(false);
  let [k, setK] = n3.useState(false);
  let [j, setJ] = n3.useState(resendIn);
  let [se, setSe] = n3.useState(``);
  let PRef = n3.useRef(null);
  let FRef = n3.useRef(null);
  let IRef = n3.useRef(null);
  let LRef = n3.useRef(null);
  let RRef = n3.useRef(null);
  let zRef = n3.useRef([]);
  let BRef = n3.useRef([]);
  let V = n3.useId();
  let HRef = n3.useRef(x);
  let URef = n3.useRef([]);
  let WRef = n3.useRef([]);
  let ceRef = n3.useRef(0);
  if (HRef.current !== x) {
    let e = HRef.current;
    let t = [...x].map((t2, n5) => t2 !== e[n5]);
    let n4 = t.indexOf(true);
    let r2 = t.filter(Boolean).length > 1;
    t.forEach((e2, t2) => {
      if (e2) {
        URef.current[t2] = ++ceRef.current;
        WRef.current[t2] = r2 ? (t2 - n4) * 45 : 0;
      }
    });
    HRef.current = x;
  }
  let G = Math.min(S, x.length, length - 1);
  let K = separator === true ? Math.floor(length / 2) : typeof separator == `number` ? separator : 0;
  let q = status === `verifying` || status === `success`;
  let J = q || k || disabled;
  let Y = status === `error` && E;
  let le = !q && !disabled && (w || x.length > 0 && x.length < length);
  let X = (t, n4, r2 = true) => {
    if (value === void 0) {
      setIe(t);
    }
    if (t !== x) {
      onChange?.(t);
    }
    setS(Math.max(0, Math.min(n4, t.length, length - 1)));
    if (r2) {
      if (E && t.length) {
        setE(false);
      }
      if (t.length === length && t !== x) {
        onComplete?.(t);
      }
    }
  };
  let ue = (currentTarget) => {
    if (J) {
      return;
    }
    let e_value = currentTarget.value;
    let n4 = currentTarget.selectionStart ?? e_value.length;
    let r2 = b(e_value);
    let length2 = b(e_value.slice(0, n4)).length;
    if (r2 === x) {
      currentTarget.value = x;
      Z();
      return;
    }
    X(r2, length2);
  };
  let onPaste = (t) => {
    t.preventDefault();
    if (J) {
      return;
    }
    let n4 = b(t.clipboardData.getData(`text`));
    if (!n4) {
      return;
    }
    if (n4.length >= length) {
      return X(n4.slice(0, length), length - 1);
    }
    let r2 = (x.slice(0, G) + n4 + x.slice(G + n4.length)).slice(0, length);
    X(r2, G + n4.length);
  };
  let onKeyDown = (t) => {
    let n4 = Math.min(x.length, length - 1);
    let r2 = {
      ArrowLeft: G - 1,
      ArrowRight: G + 1,
      Home: 0,
      End: n4,
      ArrowUp: 0,
      ArrowDown: n4
    };
    if (t.key in r2 && !t.shiftKey && !t.metaKey) {
      t.preventDefault();
      setS(Math.max(0, Math.min(r2[t.key], n4)));
    }
  };
  let pe = (clientX) => {
    let n4 = zRef.current.findIndex((e) => e && clientX < e.getBoundingClientRect().right + 4);
    if (n4 < 0) {
      n4 = length - 1;
    }
    setS(Math.min(n4, x.length, length - 1));
    requestAnimationFrame(Z);
  };
  let Z = () => {
    let PRef_current = PRef.current;
    if (!PRef_current || document.activeElement !== PRef_current) {
      return;
    }
    let n4 = Math.min(S, x.length, length - 1);
    if (n4 < x.length) {
      PRef_current.setSelectionRange(n4, n4 + 1);
    } else {
      PRef_current.setSelectionRange(n4, n4);
    }
  };
  n3.useLayoutEffect(Z);
  n3.useEffect(() => {
    if (autoFocus) {
      PRef.current?.focus({
        preventScroll: true
      });
    }
  }, [autoFocus]);
  n3.useLayoutEffect(() => {
    let IRef_current = IRef.current;
    let t = zRef.current[G];
    if (IRef_current && t) {
      let n4 = !IRef_current.dataset.ready;
      if (n4) {
        IRef_current.style.transition = `none`;
      }
      IRef_current.style.width = `${t.offsetWidth}px`;
      IRef_current.style.height = `${t.offsetHeight}px`;
      IRef_current.style.transform = `translate(${t.offsetLeft}px, ${t.offsetTop}px)`;
      if (n4) {
        IRef_current.dataset.ready = `1`;
        IRef_current.offsetWidth;
        IRef_current.style.transition = ``;
      }
    }
    let LRef_current = LRef.current;
    let FRef_current = FRef.current;
    if (LRef_current && FRef_current && RRef.current) {
      LRef_current.style.width = `${status === `success` ? RRef.current.offsetWidth : FRef_current.offsetWidth}px`;
    }
  });
  n3.useEffect(() => {
    let FRef_current = FRef.current;
    if (!FRef_current) {
      return;
    }
    let t = new ResizeObserver(() => {
      let IRef_current = IRef.current;
      let n4 = zRef.current[G];
      if (IRef_current && n4) {
        IRef_current.style.width = `${n4.offsetWidth}px`;
        IRef_current.style.height = `${n4.offsetHeight}px`;
        IRef_current.style.transform = `translate(${n4.offsetLeft}px, ${n4.offsetTop}px)`;
      }
      if (LRef.current && status !== `success`) {
        LRef.current.style.width = `${FRef_current.offsetWidth}px`;
      }
    });
    t.observe(FRef_current);
    return () => t.disconnect();
  }, [G, status]);
  let QRef = n3.useRef(status);
  n3.useEffect(() => {
    let QRef_current = QRef.current;
    QRef.current = status;
    if (status !== QRef_current) {
      if (status === `verifying`) {
        setSe(`Verifying code`);
      }
      if (status === `success`) {
        setSe(successLabel);
      }
      if (status !== `error`) {
        setE(false);
        return;
      }
      setE(true);
      setSe(typeof errorMessage == `string` ? errorMessage : `That code didn't work`);
      if (!a()) {
        FRef.current?.animate([{
          transform: `none`
        }, {
          transform: `translateX(-6px)`
        }, {
          transform: `translateX(5px)`
        }, {
          transform: `translateX(-3px)`
        }, {
          transform: `translateX(2px)`
        }, {
          transform: `none`
        }], {
          duration: 420,
          easing: `ease-out`
        });
      }
      if (clearOnError) {
        setK(true);
        BRef.current.push(window.setTimeout(() => setOe(true), 700), window.setTimeout(() => {
          setOe(false);
          setK(false);
          X(``, 0, false);
        }, 980));
      }
    }
  }, [status]);
  n3.useEffect(() => () => BRef.current.forEach(clearTimeout), []);
  n3.useEffect(() => {
    if (j <= 0) {
      if (onResend && resendIn > 0) {
        setSe(`You can resend the code now`);
      }
      return;
    }
    let e = window.setTimeout(() => setJ((e2) => e2 - 1), 1e3);
    return () => clearTimeout(e);
  }, [j]);
  let onClick = () => {
    onResend?.();
    setJ(resendIn);
    setSe(`A new code is on its way`);
  };
  let $ = [];
  for (let t = 0; t < length; t++) {
    if (K > 0 && K < length && t === K) {
      $.push(/* @__PURE__ */ jsx("span", { className: `ui-otp__sep` }, `sep`));
    }
    let n4 = x[t];
    $.push(/* @__PURE__ */ jsx("span", { ref: (e) => {
      zRef.current[t] = e;
    }, className: `ui-otp__box`, "data-filled": n4 ? `` : void 0, style: {
      "--i": t
    }, children: n4 && /* @__PURE__ */ jsx("span", { className: `ui-otp__char`, style: {
      animationDelay: `${WRef.current[t] ?? 0}ms`
    }, children: n4 }, URef.current[t]) }, t));
  }
  return /* @__PURE__ */ jsxs("div", { className: [`ui-otp`, className].filter(Boolean).join(` `), "data-status": status, "data-error": Y || void 0, "data-align": align, "data-disabled": disabled || void 0, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-otp-input`, precedence: `default`, children: c }),
    /* @__PURE__ */ jsx("div", { className: `ui-otp__field`, children: /* @__PURE__ */ jsxs("div", { ref: FRef, className: `ui-otp__slots`, "data-clearing": oe || void 0, style: {
      "--n": length,
      "--sep-w": K > 0 && K < length ? `calc(var(--ui-otp-gap) + 10px)` : `0px`
    }, children: [
      $,
      /* @__PURE__ */ jsx("span", { ref: IRef, className: `ui-otp__ring`, "data-show": le || void 0, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("span", { className: `ui-otp__caret`, "data-show": w && !x[G] && !J || void 0 }) }),
      /* @__PURE__ */ jsx("span", { ref: LRef, className: `ui-otp__pill`, "aria-hidden": `true`, children: /* @__PURE__ */ jsxs("span", { ref: RRef, className: `ui-otp__pill-inner`, children: [
        /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, className: `ui-otp__check`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: o.check, pathLength: 1 }) }),
        successLabel
      ] }) }),
      /* @__PURE__ */ jsx("input", { ref: PRef, className: `ui-otp__input`, type: `text`, value: x, inputMode: numeric ? `numeric` : `text`, pattern: numeric ? `[0-9]*` : void 0, autoComplete: `one-time-code`, autoCapitalize: numeric ? `off` : `characters`, autoCorrect: `off`, spellCheck: false, enterKeyHint: `done`, "aria-label": `${label}, ${length} ${numeric ? `digits` : `characters`}`, "aria-invalid": Y || void 0, "aria-describedby": Y ? `${V}-msg` : void 0, disabled, readOnly: q || k, onChange: (e) => ue(e.currentTarget), onPaste, onKeyDown, onFocus: () => {
        setW(true);
        requestAnimationFrame(Z);
      }, onBlur: () => setW(false), onPointerUp: (e) => pe(e.clientX), onSelect: (e) => {
        let e_currentTarget = e.currentTarget;
        let n4 = G < x.length ? [G, G + 1] : [G, G];
        if (e_currentTarget.selectionStart !== n4[0] || e_currentTarget.selectionEnd !== n4[1]) {
          Z();
        }
      } })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: `ui-otp__msg`, "data-show": Y || void 0, children: /* @__PURE__ */ jsx("div", { className: `ui-otp__msg-inner`, children: /* @__PURE__ */ jsxs("p", { id: `${V}-msg`, className: `ui-otp__msg-text`, children: [
      /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, className: `ui-otp__alert`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: o.alert }) }),
      /* @__PURE__ */ jsx("span", { children: errorMessage })
    ] }) }) }),
    onResend && /* @__PURE__ */ jsxs("div", { className: `ui-otp__resend`, "data-hidden": status === `success` || void 0, children: [
      /* @__PURE__ */ jsx("span", { className: `ui-otp__resend-q`, children: `Didn't get a code?` }),
      ` `,
      j > 0 ? /* @__PURE__ */ jsxs("span", { className: `ui-otp__swap ui-otp__wait`, children: [
        `Resend in`,
        `\xA0`,
        /* @__PURE__ */ jsx("span", { className: `ui-otp__time`, children: i(j) })
      ] }, `wait`) : /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-otp__swap ui-otp__resend-btn`, onClick, disabled: disabled || q, children: `Resend code` }, `go`)
    ] }),
    /* @__PURE__ */ jsx("span", { className: `ui-otp__live`, "aria-live": `polite`, children: se })
  ] });
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
var ee = (e) => {
  if (e > 0) {
    return `That code didn't work. ${e} ${e === 1 ? `try` : `tries`} left.`;
  }
  return `That code didn't work. Request a new code.`;
};
function DComponent() {
  let [value, setValue] = n3.useState(``);
  let [i2, setI] = n3.useState(`idle`);
  let [o2, setO] = n3.useState(3);
  let dRef = n3.useRef([]);
  let fRef = n3.useRef(true);
  let p = (e, t) => dRef.current.push(window.setTimeout(t, e));
  let m = () => {
    dRef.current.forEach(clearTimeout);
    dRef.current = [];
  };
  let onComplete = (e) => {
    setI(`verifying`);
    p(1e3, () => {
      if (e === l) {
        setI(`success`);
        p(3200, () => {
          setValue(``);
          setI(`idle`);
          setO(3);
        });
      } else {
        setO((e2) => Math.max(0, e2 - 1));
        setI(`error`);
      }
    });
  };
  n3.useEffect(() => {
    let e = 700;
    let n4 = (n5) => {
      for (let r2 = 1; r2 <= n5.length; r2++) {
        let i3 = n5.slice(0, r2);
        p(e, () => setValue(i3));
        e += 150;
      }
    };
    n4(u);
    p(e + 150, () => onComplete(u));
    e += 2850;
    p(e, () => setI(`idle`));
    n4(l);
    p(e + 150, () => {
      fRef.current = false;
      onComplete(l);
    });
    return m;
  }, []);
  let g = () => {
    if (fRef.current) {
      fRef.current = false;
      m();
      setValue(``);
      setI(`idle`);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: `otp-demo`, onPointerDownCapture: g, onKeyDownCapture: g, onFocusCapture: g, children: /* @__PURE__ */ jsxs("div", { className: `otp-demo__tray`, children: [
    /* @__PURE__ */ jsxs("div", { className: `otp-demo__card`, children: [
      /* @__PURE__ */ jsx("span", { className: `otp-demo__icon`, "aria-hidden": `true`, children: /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, children: [
        /* @__PURE__ */ jsx("rect", { x: `3.5`, y: `5.5`, width: `17`, height: `13`, rx: `2.5` }),
        /* @__PURE__ */ jsx("path", { d: `M4.5 7.5l7.5 5.5 7.5-5.5` })
      ] }) }),
      /* @__PURE__ */ jsx("h3", { className: `otp-demo__title`, children: `Check your email` }),
      /* @__PURE__ */ jsxs("p", { className: `otp-demo__text`, children: [
        `We sent a code to `,
        /* @__PURE__ */ jsx("strong", { children: `maya@acme.com` })
      ] }),
      /* @__PURE__ */ jsx(S1Component, { className: `otp-demo__otp`, separator: true, align: `center`, value, status: i2, errorMessage: ee(o2), onChange: (e) => {
        setValue(e);
        if (i2 === `error` && e) {
          setI(`idle`);
        }
      }, onComplete, onResend: () => setO(3), resendIn: 30 })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: `otp-demo__hint`, children: [
      `Demo code: `,
      /* @__PURE__ */ jsxs("span", { children: [
        `482`,
        `\xA0`,
        `913`
      ] })
    ] })
  ] }) });
}
export {
  DComponent as default
};
