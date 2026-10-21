import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = {
    idle: `Tap to speak`,
    listening: `Listening`,
    thinking: `Thinking`,
    speaking: `Speaking`
};
const a = [
    `idle`,
    `listening`,
    `thinking`,
    `speaking`
];
const o = {
    idle: 0.16,
    listening: 0.3,
    thinking: 1.9,
    speaking: 0.42
};
const s = (e, t = 0, n = 1)=>Math.min(n, Math.max(t, e));
const c = ()=>typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function l(e, t) {
    t.style.color = e;
    let n = getComputedStyle(t).color.match(/[\d.]+/g);
    if (n) {
        return [
            Number(n[0]),
            Number(n[1]),
            Number(n[2])
        ];
    }
    return [
        23,
        23,
        23
    ];
}
function U1Component({ state = `idle`, level, size = 220, dots = 520, accent, label = true, interactive = true, onPress, className, style: style_1 }) {
    let yRef = n.useRef(null);
    let bRef = n.useRef({
        state,
        level,
        interactive
    });
    bRef.current = {
        state,
        level,
        interactive
    };
    let xRef = n.useRef(()=>{});
    n.useEffect(()=>{
        let yRef_current = yRef.current;
        let t = yRef_current?.getContext(`2d`);
        if (!yRef_current || !t) {
            return;
        }
        let n = Math.max(60, Math.round(dots));
        let r = new Float32Array(n * 3);
        let i = Math.PI * (3 - Math.sqrt(5));
        for(let e = 0; e < n; e++){
            let t = 1 - e / (n - 1) * 2;
            let a = Math.sqrt(1 - t * t);
            r[e * 3] = Math.cos(i * e) * a;
            r[e * 3 + 1] = t;
            r[e * 3 + 2] = Math.sin(i * e) * a;
        }
        let d = Math.min(window.devicePixelRatio || 1, 2.5);
        yRef_current.width = Math.round(size * d);
        yRef_current.height = Math.round(size * d);
        let p = document.createElement(`span`);
        p.style.display = `none`;
        yRef_current.parentElement?.appendChild(p);
        let m = [
            23,
            23,
            23
        ];
        let h = [
            47,
            107,
            255
        ];
        let g = ()=>{
            let t = getComputedStyle(yRef_current);
            m = l(t.color, p);
            h = l(t.getPropertyValue(`--ui-vo-accent`).trim() || `#2f6bff`, p);
        };
        g();
        let _ = {
            idle: 0,
            listening: 0,
            thinking: 0,
            speaking: 0
        };
        _[bRef.current.state] = 1;
        let v = 0;
        let S = 0;
        let C = {
            x: 0,
            y: 0,
            on: false,
            strength: 0
        };
        let w = performance.now();
        let T = 0;
        let E = 0;
        let D = true;
        let O = c();
        let k = (e)=>{
            let i = Math.min(0.05, (e - w) / 1000);
            w = e;
            let c = e / 1000;
            let bRef_current = bRef.current;
            if (++E % 30 == 0) {
                g();
            }
            let f = 0;
            for (let e of a){
                _[e] += (+(e === bRef_current.state) - _[e]) * Math.min(1, i * 5);
                f += _[e] * o[e];
            }
            v += f * i;
            let p = bRef_current.state === `listening` ? s(0.35 + 0.35 * Math.sin(c * 2.1) * Math.sin(c * 5.3) + 0.3 * Math.sin(c * 9.7 + 1) * Math.sin(c * 0.9)) : s(0.3 + 0.7 * Math.abs(Math.sin(c * 4.1)) * (0.5 + 0.5 * Math.sin(c * 1.3 + 2)));
            let y = bRef_current.level === undefined ? p : s(bRef_current.level);
            S += (y - S) * Math.min(1, i * 12);
            C.strength += ((C.on && bRef_current.interactive ? 1 : 0) - C.strength) * Math.min(1, i * 8);
            let x = size;
            let A = x / 2;
            let j = x * 0.32;
            let M = 0.32 + _.thinking * 0.55;
            let N = Math.sin(M);
            let P = Math.cos(M);
            let F = Math.sin(v);
            let I = Math.cos(v);
            let L = x * 0.2;
            let R = Math.max(0.9, x / 190);
            t.setTransform(d, 0, 0, d, 0, 0);
            t.clearRect(0, 0, x, x);
            let z = (_.listening + _.speaking) * S * 0.16 + _.thinking * 0.05;
            if (z > 0.004) {
                let e = t.createRadialGradient(A, A, j * 0.2, A, A, j * 1.55);
                e.addColorStop(0, `rgba(${h[0]}, ${h[1]}, ${h[2]}, ${z})`);
                e.addColorStop(1, `rgba(${h[0]}, ${h[1]}, ${h[2]}, 0)`);
                t.fillStyle = e;
                t.fillRect(0, 0, x, x);
            }
            for(let e = 0; e < n; e++){
                let n = r[e * 3];
                let i = r[e * 3 + 1];
                let a = r[e * 3 + 2];
                let o = (Math.sin(n * 3.1 + c * 2.3) + Math.sin(i * 4.3 - c * 1.7) + Math.sin(a * 5.2 + c * 2.9)) / 3;
                let l = _.idle * 0.022 * Math.sin(c * 1.3 + i * 2);
                let u = _.listening * S * 0.3 * Math.max(0, o) ** 1.4;
                let d = _.speaking * S * 0.13 * Math.sin(i * 7.5 - c * 7);
                let f = l + u + d;
                let p = n * (1 + f);
                let g = i * (1 + f);
                let y = a * (1 + f);
                let b = 0;
                let w = 1;
                if (_.thinking > 0.001) {
                    let t = Math.hypot(n, a) || 1;
                    let r = 1 + 0.035 * Math.sin(c * 3 + e * 0.7);
                    let o = _.thinking;
                    p += (n / t * r - p) * o;
                    g += (i * 0.2 - g) * o;
                    w = 1 - o * (1 - s((Math.hypot(n, a) - 0.25) * 2.2));
                    y += (a / t * r - y) * o;
                    let l = Math.atan2(a, n) + v;
                    b = o * Math.max(0, Math.cos(l - c * 2.2)) ** 6;
                }
                let T = p * I + y * F;
                let E = -p * F + y * I;
                let D = g * P - E * N;
                let O = g * N + E * P;
                let k = 3.4 / (3.4 - O);
                let M = A + T * j * k;
                let z = A + D * j * k;
                if (C.strength > 0.01) {
                    let e = M - C.x;
                    let t = z - C.y;
                    let n = Math.hypot(e, t) || 1;
                    if (n < L) {
                        let r = (1 - n / L) ** 2 * x * 0.07 * C.strength;
                        M += e / n * r;
                        z += t / n * r;
                    }
                }
                let B = (O + 1.3) / 2.6;
                let V = s(Math.abs(u + d) * 9 + b);
                let H = R * (0.55 + 0.75 * B) * k * (1 + V * 0.5);
                let U = s(0.12 + 0.88 * B ** 1.6 + V * 0.3) * w;
                if (U < 0.01) {
                    continue;
                }
                let W = Math.round(m[0] + (h[0] - m[0]) * V);
                let G = Math.round(m[1] + (h[1] - m[1]) * V);
                let K = Math.round(m[2] + (h[2] - m[2]) * V);
                t.fillStyle = `rgba(${W}, ${G}, ${K}, ${U.toFixed(3)})`;
                t.beginPath();
                t.arc(M, z, H, 0, Math.PI * 2);
                t.fill();
            }
            if (!O && D) {
                T = requestAnimationFrame(k);
            }
        };
        xRef.current = ()=>{
            if (O) {
                for (let e of a){
                    _[e] = +(e === bRef.current.state);
                }
                S = bRef.current.level ?? 0.6;
                w = performance.now();
                k(w);
            }
        };
        let A = ()=>{
            cancelAnimationFrame(T);
            w = performance.now();
            T = requestAnimationFrame(k);
        };
        let j = `IntersectionObserver` in window ? new IntersectionObserver(([e])=>{
            D = e.isIntersecting && !document.hidden;
            if (D) {
                A();
            }
        }) : null;
        j?.observe(yRef_current);
        let M = ()=>{
            D = !document.hidden;
            if (D) {
                A();
            }
        };
        document.addEventListener(`visibilitychange`, M);
        A();
        let N = (t)=>{
            let n = yRef_current.getBoundingClientRect();
            let r = size / (n.width || size);
            C.x = (t.clientX - n.left) * r;
            C.y = (t.clientY - n.top) * r;
            C.on = t.pointerType === `mouse`;
        };
        let P = ()=>C.on = false;
        yRef_current.addEventListener(`pointermove`, N);
        yRef_current.addEventListener(`pointerleave`, P);
        return ()=>{
            cancelAnimationFrame(T);
            j?.disconnect();
            document.removeEventListener(`visibilitychange`, M);
            yRef_current.removeEventListener(`pointermove`, N);
            yRef_current.removeEventListener(`pointerleave`, P);
            p.remove();
        };
    }, [
        size,
        dots
    ]);
    n.useEffect(()=>xRef.current(), [
        state,
        level
    ]);
    let S = label === false ? null : ({
        ...i,
        ...typeof label == `object` ? label : {}
    })[state];
    let style_2 = {
        ...style_1,
        "--ui-vo-size": `${size}px`,
        ...accent ? {
            "--ui-vo-accent": accent
        } : {}
    };
    let w = <><canvas ref={yRef} className={`ui-vo__canvas`} aria-hidden={`true`}/>{S !== null && <span className={`ui-vo__label`} aria-live={`polite`}><span key={state}>{S}{state !== `idle` && <span className={`ui-vo__dots`} aria-hidden={`true`}><i/><i/><i/></span>}</span></span>}</>;
    return <><style href={`ui-voice-orb`} precedence={`default`}>{d}</style>{onPress ? <button type={`button`} className={[
        `ui-vo`,
        className
    ].filter(Boolean).join(` `)} data-state={state} style={style_2} aria-label={S ? undefined : `Voice assistant: ${i[state]}`} onClick={onPress}>{w}</button> : <div className={[
        `ui-vo`,
        className
    ].filter(Boolean).join(` `)} data-state={state} style={style_2} role={`img`} aria-label={`Voice assistant: ${S ?? i[state]}`}>{w}</div>}</>;
}
var d = `.ui-vo{--ui-vo-ink: #171717;--ui-vo-muted: #8f8f8f;--ui-vo-accent: #2f6bff;--ui-vo-focus: rgba(23, 23, 23, 0.22);display: inline-grid;justify-items: center;gap: 2px;margin: 0;padding: 0;border: 0;background: none;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-vo-ink);-webkit-font-smoothing: antialiased;-webkit-tap-highlight-color: transparent}button.ui-vo{border-radius: 24px;cursor: pointer}button.ui-vo:focus-visible{outline: 2px solid var(--ui-vo-focus);outline-offset: 4px}.ui-vo__canvas{display: block;width: var(--ui-vo-size);height: var(--ui-vo-size);color: var(--ui-vo-ink);transition: transform 500ms cubic-bezier(0.32, 0.72, 0.24, 1)}button.ui-vo:active .ui-vo__canvas{transform: scale(0.97)}.ui-vo__label{height: 20px;overflow: hidden;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-vo-muted);white-space: nowrap}.ui-vo__label > span{display: inline-flex;align-items: baseline;gap: 1px;animation: ui-vo-in 360ms cubic-bezier(0.32, 0.72, 0.24, 1) both}.ui-vo[data-state="listening"] .ui-vo__label, .ui-vo[data-state="speaking"] .ui-vo__label{color: var(--ui-vo-ink)}.ui-vo__dots{display: inline-flex;gap: 2px;margin-left: 2px}.ui-vo__dots i{width: 2.5px;height: 2.5px;border-radius: 50%;background: currentColor;animation: ui-vo-blink 1.2s ease-in-out infinite}.ui-vo__dots i:nth-child(2){animation-delay: 0.16s}.ui-vo__dots i:nth-child(3){animation-delay: 0.32s}@keyframes ui-vo-in{from{opacity: 0;transform: translateY(5px);filter: blur(3px)}}@keyframes ui-vo-blink{0%, 100%{opacity: 0.25}40%{opacity: 1}}@media (prefers-reduced-motion: reduce){.ui-vo *, .ui-vo *::before, .ui-vo *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-vo{--ui-vo-ink: #ededed;--ui-vo-muted: #8b8b92;--ui-vo-accent: #6f9bff;--ui-vo-focus: rgba(255, 255, 255, 0.3)}`;
const f = [
    {
        state: `idle`,
        label: `Idle`,
        ms: 2000
    },
    {
        state: `listening`,
        label: `Listening`,
        ms: 3200
    },
    {
        state: `thinking`,
        label: `Thinking`,
        ms: 2600
    },
    {
        state: `speaking`,
        label: `Speaking`,
        ms: 3600
    }
];
function PComponent() {
    let [e, setE] = n.useState(0);
    let iRef = n.useRef(false);
    n.useEffect(()=>{
        if (iRef.current) {
            return;
        }
        let n = window.setTimeout(()=>setE((e)=>(e + 1) % f.length), f[e].ms);
        return ()=>window.clearTimeout(n);
    }, [
        e
    ]);
    let a = (e)=>{
        iRef.current = true;
        setE(e);
    };
    return <div className={`vo-demo`}><U1Component state={f[e].state} onPress={()=>a((e + 1) % f.length)}/><div className={`segmented vo-demo__states`} role={`radiogroup`} aria-label={`State`}>{f.map((t, n)=><button key={t.state} type={`button`} role={`radio`} aria-checked={n === e} onClick={()=>a(n)}>{t.label}</button>)}</div></div>;
}
export { PComponent as default };
