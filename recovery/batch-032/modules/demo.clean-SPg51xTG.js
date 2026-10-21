import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = (e)=>`${Math.floor(e / 60)}:${String(e % 60).padStart(2, `0`)}`;
const a = ()=>typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
const o = {
    check: `M5.5 12.5l4 4L18.5 8`,
    alert: `M12 8v4.5M12 16h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z`
};
function S1Component({ length = 6, separator = false, numeric = true, value, defaultValue = ``, onChange, onComplete, status = `idle`, errorMessage = `That code didn't work. Try again.`, clearOnError = true, successLabel = `Verified`, onResend, resendIn = 30, align = `start`, disabled = false, autoFocus = false, label = `Verification code`, className }) {
    let b = (t)=>{
        let n = ``;
        for (let r of t){
            let t = numeric ? /[0-9]/.test(r) ? r : `` : /[a-z0-9]/i.test(r) ? r.toUpperCase() : ``;
            if (t && n.length < length) {
                n += t;
            }
        }
        return n;
    };
    let [ie, setIe] = n.useState(()=>b(defaultValue));
    let x = b(value ?? ie);
    let [S, setS] = n.useState(Math.min(x.length, length - 1));
    let [w, setW] = n.useState(false);
    let [E, setE] = n.useState(false);
    let [oe, setOe] = n.useState(false);
    let [k, setK] = n.useState(false);
    let [j, setJ] = n.useState(resendIn);
    let [se, setSe] = n.useState(``);
    let PRef = n.useRef(null);
    let FRef = n.useRef(null);
    let IRef = n.useRef(null);
    let LRef = n.useRef(null);
    let RRef = n.useRef(null);
    let zRef = n.useRef([]);
    let BRef = n.useRef([]);
    let V = n.useId();
    let HRef = n.useRef(x);
    let URef = n.useRef([]);
    let WRef = n.useRef([]);
    let ceRef = n.useRef(0);
    if (HRef.current !== x) {
        let e = HRef.current;
        let t = [
            ...x
        ].map((t, n)=>t !== e[n]);
        let n = t.indexOf(true);
        let r = t.filter(Boolean).length > 1;
        t.forEach((e, t)=>{
            if (e) {
                URef.current[t] = ++ceRef.current;
                WRef.current[t] = r ? (t - n) * 45 : 0;
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
    let X = (t, n, r = true)=>{
        if (value === undefined) {
            setIe(t);
        }
        if (t !== x) {
            onChange?.(t);
        }
        setS(Math.max(0, Math.min(n, t.length, length - 1)));
        if (r) {
            if (E && t.length) {
                setE(false);
            }
            if (t.length === length && t !== x) {
                onComplete?.(t);
            }
        }
    };
    let ue = (currentTarget)=>{
        if (J) {
            return;
        }
        let e_value = currentTarget.value;
        let n = currentTarget.selectionStart ?? e_value.length;
        let r = b(e_value);
        let length = b(e_value.slice(0, n)).length;
        if (r === x) {
            currentTarget.value = x;
            Z();
            return;
        }
        X(r, length);
    };
    let onPaste = (t)=>{
        t.preventDefault();
        if (J) {
            return;
        }
        let n = b(t.clipboardData.getData(`text`));
        if (!n) {
            return;
        }
        if (n.length >= length) {
            return X(n.slice(0, length), length - 1);
        }
        let r = (x.slice(0, G) + n + x.slice(G + n.length)).slice(0, length);
        X(r, G + n.length);
    };
    let onKeyDown = (t)=>{
        let n = Math.min(x.length, length - 1);
        let r = {
            ArrowLeft: G - 1,
            ArrowRight: G + 1,
            Home: 0,
            End: n,
            ArrowUp: 0,
            ArrowDown: n
        };
        if (t.key in r && !t.shiftKey && !t.metaKey) {
            t.preventDefault();
            setS(Math.max(0, Math.min(r[t.key], n)));
        }
    };
    let pe = (clientX)=>{
        let n = zRef.current.findIndex((e)=>e && clientX < e.getBoundingClientRect().right + 4);
        if (n < 0) {
            n = length - 1;
        }
        setS(Math.min(n, x.length, length - 1));
        requestAnimationFrame(Z);
    };
    let Z = ()=>{
        let PRef_current = PRef.current;
        if (!PRef_current || document.activeElement !== PRef_current) {
            return;
        }
        let n = Math.min(S, x.length, length - 1);
        if (n < x.length) {
            PRef_current.setSelectionRange(n, n + 1);
        } else {
            PRef_current.setSelectionRange(n, n);
        }
    };
    n.useLayoutEffect(Z);
    n.useEffect(()=>{
        if (autoFocus) {
            PRef.current?.focus({
                preventScroll: true
            });
        }
    }, [
        autoFocus
    ]);
    n.useLayoutEffect(()=>{
        let IRef_current = IRef.current;
        let t = zRef.current[G];
        if (IRef_current && t) {
            let n = !IRef_current.dataset.ready;
            if (n) {
                IRef_current.style.transition = `none`;
            }
            IRef_current.style.width = `${t.offsetWidth}px`;
            IRef_current.style.height = `${t.offsetHeight}px`;
            IRef_current.style.transform = `translate(${t.offsetLeft}px, ${t.offsetTop}px)`;
            if (n) {
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
    n.useEffect(()=>{
        let FRef_current = FRef.current;
        if (!FRef_current) {
            return;
        }
        let t = new ResizeObserver(()=>{
            let IRef_current = IRef.current;
            let n = zRef.current[G];
            if (IRef_current && n) {
                IRef_current.style.width = `${n.offsetWidth}px`;
                IRef_current.style.height = `${n.offsetHeight}px`;
                IRef_current.style.transform = `translate(${n.offsetLeft}px, ${n.offsetTop}px)`;
            }
            if (LRef.current && status !== `success`) {
                LRef.current.style.width = `${FRef_current.offsetWidth}px`;
            }
        });
        t.observe(FRef_current);
        return ()=>t.disconnect();
    }, [
        G,
        status
    ]);
    let QRef = n.useRef(status);
    n.useEffect(()=>{
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
                FRef.current?.animate([
                    {
                        transform: `none`
                    },
                    {
                        transform: `translateX(-6px)`
                    },
                    {
                        transform: `translateX(5px)`
                    },
                    {
                        transform: `translateX(-3px)`
                    },
                    {
                        transform: `translateX(2px)`
                    },
                    {
                        transform: `none`
                    }
                ], {
                    duration: 420,
                    easing: `ease-out`
                });
            }
            if (clearOnError) {
                setK(true);
                BRef.current.push(window.setTimeout(()=>setOe(true), 700), window.setTimeout(()=>{
                    setOe(false);
                    setK(false);
                    X(``, 0, false);
                }, 980));
            }
        }
    }, [
        status
    ]);
    n.useEffect(()=>()=>BRef.current.forEach(clearTimeout), []);
    n.useEffect(()=>{
        if (j <= 0) {
            if (onResend && resendIn > 0) {
                setSe(`You can resend the code now`);
            }
            return;
        }
        let e = window.setTimeout(()=>setJ((e)=>e - 1), 1000);
        return ()=>clearTimeout(e);
    }, [
        j
    ]);
    let onClick = ()=>{
        onResend?.();
        setJ(resendIn);
        setSe(`A new code is on its way`);
    };
    let $ = [];
    for(let t = 0; t < length; t++){
        if (K > 0 && K < length && t === K) {
            $.push(<span key={`sep`} className={`ui-otpc__sep`}/>);
        }
        let n = x[t];
        $.push(<span key={t} ref={(e)=>{
            zRef.current[t] = e;
        }} className={`ui-otpc__box`} data-filled={n ? `` : undefined} style={{
            "--i": t
        }}>{n && <span key={URef.current[t]} className={`ui-otpc__char`} style={{
            animationDelay: `${WRef.current[t] ?? 0}ms`
        }}>{n}</span>}</span>);
    }
    return <div className={[
        `ui-otpc`,
        className
    ].filter(Boolean).join(` `)} data-status={status} data-error={Y || undefined} data-align={align} data-disabled={disabled || undefined}><style href={`ui-otp-input-clean`} precedence={`default`}>{c}</style><div className={`ui-otpc__field`}><div ref={FRef} className={`ui-otpc__slots`} data-clearing={oe || undefined} style={{
        "--n": length,
        "--sep-w": K > 0 && K < length ? `calc(var(--ui-otpc-gap) + 8px)` : `0px`
    }}>{$}<span ref={IRef} className={`ui-otpc__ring`} data-show={le || undefined} aria-hidden={`true`}><span className={`ui-otpc__caret`} data-show={w && !x[G] && !J || undefined}/></span><span ref={LRef} className={`ui-otpc__pill`} aria-hidden={`true`}><span ref={RRef} className={`ui-otpc__pill-inner`}><svg viewBox={`0 0 24 24`} className={`ui-otpc__check`} aria-hidden={`true`}><path d={o.check} pathLength={1}/></svg>{successLabel}</span></span><input ref={PRef} className={`ui-otpc__input`} type={`text`} value={x} inputMode={numeric ? `numeric` : `text`} pattern={numeric ? `[0-9]*` : undefined} autoComplete={`one-time-code`} autoCapitalize={numeric ? `off` : `characters`} autoCorrect={`off`} spellCheck={false} enterKeyHint={`done`} aria-label={`${label}, ${length} ${numeric ? `digits` : `characters`}`} aria-invalid={Y || undefined} aria-describedby={Y ? `${V}-msg` : undefined} disabled={disabled} readOnly={q || k} onChange={(e)=>ue(e.currentTarget)} onPaste={onPaste} onKeyDown={onKeyDown} onFocus={()=>{
        setW(true);
        requestAnimationFrame(Z);
    }} onBlur={()=>setW(false)} onPointerUp={(e)=>pe(e.clientX)} onSelect={(e)=>{
        let e_currentTarget = e.currentTarget;
        let n = G < x.length ? [
            G,
            G + 1
        ] : [
            G,
            G
        ];
        if (e_currentTarget.selectionStart !== n[0] || e_currentTarget.selectionEnd !== n[1]) {
            Z();
        }
    }}/></div></div><div className={`ui-otpc__msg`} data-show={Y || undefined}><div className={`ui-otpc__msg-inner`}><p id={`${V}-msg`} className={`ui-otpc__msg-text`}><svg viewBox={`0 0 24 24`} className={`ui-otpc__alert`} aria-hidden={`true`}><path d={o.alert}/></svg><span>{errorMessage}</span></p></div></div>{onResend && <div className={`ui-otpc__resend`} data-hidden={status === `success` || undefined}><span className={`ui-otpc__resend-q`}>{`Didn't get a code?`}</span>{` `}{j > 0 ? <span key={`wait`} className={`ui-otpc__swap ui-otpc__wait`}>{`Resend in`}{`\xA0`}<span className={`ui-otpc__time`}>{i(j)}</span></span> : <button key={`go`} type={`button`} className={`ui-otpc__swap ui-otpc__resend-btn`} onClick={onClick} disabled={disabled || q}>{`Resend code`}</button>}</div>}<span className={`ui-otpc__live`} aria-live={`polite`}>{se}</span></div>;
}
var c = `
/* Colors, size and motion as variables – override them on .ui-otpc */
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

/* Digits pop in – a small lift out of a blur, no bounce */
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

/* The real input lies over the cells, invisible – it takes taps, keys, paste and SMS autofill */
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

/* Error: no red strokes – the cells get a faint red fill and the digits turn red */
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
const l = `482913`;
const u = `481973`;
const ee = (e)=>{
    if (e > 0) {
        return `That code didn't work. ${e} ${e === 1 ? `try` : `tries`} left.`;
    }
    return `That code didn't work. Request a new code.`;
};
function DComponent() {
    let [value, setValue] = n.useState(``);
    let [i, setI] = n.useState(`idle`);
    let [o, setO] = n.useState(3);
    let dRef = n.useRef([]);
    let fRef = n.useRef(true);
    let p = (e, t)=>dRef.current.push(window.setTimeout(t, e));
    let m = ()=>{
        dRef.current.forEach(clearTimeout);
        dRef.current = [];
    };
    let onComplete = (e)=>{
        setI(`verifying`);
        p(1000, ()=>{
            if (e === l) {
                setI(`success`);
                p(3200, ()=>{
                    setValue(``);
                    setI(`idle`);
                    setO(3);
                });
            } else {
                setO((e)=>Math.max(0, e - 1));
                setI(`error`);
            }
        });
    };
    n.useEffect(()=>{
        let e = 700;
        let n = (n)=>{
            for(let r = 1; r <= n.length; r++){
                let i = n.slice(0, r);
                p(e, ()=>setValue(i));
                e += 150;
            }
        };
        n(u);
        p(e + 150, ()=>onComplete(u));
        e += 2850;
        p(e, ()=>setI(`idle`));
        n(l);
        p(e + 150, ()=>{
            fRef.current = false;
            onComplete(l);
        });
        return m;
    }, []);
    let g = ()=>{
        if (fRef.current) {
            fRef.current = false;
            m();
            setValue(``);
            setI(`idle`);
        }
    };
    return <div className={`otp-demo`} onPointerDownCapture={g} onKeyDownCapture={g} onFocusCapture={g}><div className={`otp-democ`}><div className={`otp-democ__body`}><span className={`otp-democ__icon`} aria-hidden={`true`}><svg viewBox={`0 0 16 16`}><rect x={`1.75`} y={`3.25`} width={`12.5`} height={`9.5`} rx={`2`}/><path d={`M2.5 4.75l5.5 4 5.5-4`}/></svg></span><h3 className={`otp-democ__title`}>{`Check your email`}</h3><p className={`otp-democ__text`}>{`We sent a code to `}<strong>{`maya@acme.com`}</strong></p><S1Component className={`otp-demo__otp`} separator align={`center`} value={value} status={i} errorMessage={ee(o)} onChange={(e)=>{
        setValue(e);
        if (i === `error` && e) {
            setI(`idle`);
        }
    }} onComplete={onComplete} onResend={()=>setO(3)} resendIn={30}/></div><p className={`otp-democ__hint`}>{`Demo code: `}<span>{`482`}{`\xA0`}{`913`}</span></p></div></div>;
}
export { DComponent as default };
