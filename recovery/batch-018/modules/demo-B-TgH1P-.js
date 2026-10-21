import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = {
    k: 1,
    v1: [
        926.8,
        565.8
    ],
    c: [
        302.1,
        297.3
    ],
    l: [
        291.3,
        291.3
    ],
    bottom: 1222.8,
    r: [
        3155.8,
        361.3
    ],
    v4: [
        2493.8,
        565.8
    ],
    v3: [
        2189.3,
        565.8
    ],
    m2: [
        1898.8,
        428.8
    ],
    m1: [
        1510.8,
        428.8
    ],
    v2: [
        1230.8,
        565.8
    ]
};
const a = {
    k: 0.8427,
    v1: [
        781.039,
        476.815
    ],
    c: [
        254.588,
        250.543
    ],
    l: [
        245.486,
        245.486
    ],
    bottom: 1030.49,
    r: [
        2659.48,
        304.477
    ],
    v4: [
        2101.59,
        476.815
    ],
    v3: [
        1844.98,
        476.815
    ],
    m2: [
        1600.17,
        361.361
    ],
    m1: [
        1273.19,
        361.361
    ],
    v2: [
        1037.23,
        476.815
    ]
};
const o = 110;
const s = 80;
function c(e, t) {
    let n = {
        l: o * Math.sin(t),
        m: -110 * Math.sin(t + 0.5),
        r: o * Math.sin(t + 1),
        vL: s * Math.sin(t + Math.PI / 2 + 0.25),
        vR: s * Math.sin(t - Math.PI / 2 + 0.75)
    };
    let r = (t, n)=>(t[1] + n * e.k).toFixed(1);
    return `M${e.v1[0]} ${r(e.v1, n.vL)}C${e.v1[0]} ${r(e.v1, n.vL)} ${e.c[0]} ${r(e.c, n.l)} ${e.l[0]} ${r(e.l, n.l)}V${e.bottom}H${e.r[0]}V${r(e.r, n.r)}L${e.v4[0]} ${r(e.v4, n.vR)}H${e.v3[0]}V${r(e.v3, n.vR)}L${e.m2[0]} ${r(e.m2, n.m)}H${e.m1[0]}V${r(e.m1, n.m)}L${e.v2[0]} ${r(e.v2, n.vL)}H${e.v1[0]}V${r(e.v1, n.vL)}Z`;
}
function LComponent({ children, colors = [
    `#FF7700`,
    `#FF0055`,
    `#0073FF`
], speed = 3, className }) {
    let l = `ui-gf` + n.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
    let uRef = n.useRef(null);
    let fRef = n.useRef(null);
    let pRef = n.useRef(null);
    n.useEffect(()=>{
        let uRef_current = uRef.current;
        if (!uRef_current) {
            return;
        }
        let t = speed > 0 && !window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
        let n = 0;
        let r = 0;
        let s = (e)=>{
            n = requestAnimationFrame(s);
            if (e - r < 32) {
                return;
            }
            r = e;
            let t = e / (speed * 1000) * Math.PI * 2;
            fRef.current?.setAttribute(`d`, c(i, t));
            pRef.current?.setAttribute(`d`, c(a, t));
        };
        if (typeof IntersectionObserver > `u`) {
            if (t) {
                n = requestAnimationFrame(s);
            }
            return ()=>cancelAnimationFrame(n);
        }
        let l = new IntersectionObserver(([r])=>{
            cancelAnimationFrame(n);
            uRef_current.toggleAttribute(`data-paused`, !r.isIntersecting);
            if (r.isIntersecting && t) {
                n = requestAnimationFrame(s);
            }
        });
        l.observe(uRef_current);
        return ()=>{
            l.disconnect();
            cancelAnimationFrame(n);
        };
    }, [
        speed
    ]);
    return <div ref={uRef} className={[
        `ui-gf`,
        className
    ].filter(Boolean).join(` `)}><style href={`ui-gradient-floor`} precedence={`default`}>{d}</style><div className={`ui-gf-layer ui-gf-layer--color`} aria-hidden={`true`}><div className={`ui-gf-bleed`}><svg viewBox={`0 0 3447.1 1514.1`} preserveAspectRatio={`none`}><defs><linearGradient id={`${l}-fill`} x1={`1723.8`} y1={`423.3`} x2={`1723.8`} y2={`894.3`} gradientUnits={`userSpaceOnUse`}><stop stopColor={colors[0]}/><stop offset={`0.302885`} stopColor={colors[1]}/><stop offset={`0.673077`} stopColor={colors[2]}/></linearGradient></defs><path ref={fRef} d={c(i, 0)} fill={`url(#${l}-fill)`}/></svg></div></div><div className={`ui-gf-layer ui-gf-layer--light`} aria-hidden={`true`}><div className={`ui-gf-bleed`}><svg viewBox={`0 0 2904.96 1275.97`} preserveAspectRatio={`none`}><path ref={pRef} d={c(a, 0)} fill={`#fff`} fillOpacity={`0.8`}/></svg></div></div>{children != null && <div className={`ui-gf-content`}>{children}</div>}</div>;
}
const u = (e)=>`calc(${e} * 100cqw / 2200)`;
var d = `.ui-gf{position: relative;container-type: inline-size;overflow: hidden;isolation: isolate;background: var(--ui-gf-bg, #fafafa)}.ui-gf-layer{position: absolute;pointer-events: none}.ui-gf-layer--color{left: ${u(-290)};bottom: ${u(-484.5)};width: ${u(2864.5)};height: ${u(931.5)}}.ui-gf-layer--light{left: ${u(-65)};bottom: ${u(-507)};width: ${u(2414)};height: ${u(785)};mix-blend-mode: plus-lighter}.ui-gf-bleed{position: absolute;inset: -31.27% -10.17%;transform-origin: 50% 70%;will-change: transform}.ui-gf-bleed svg{position: absolute;top: 0;left: 0;display: block;width: 25%;height: 25%;overflow: visible;transform: scale(4);transform-origin: 0 0;will-change: transform}.ui-gf-layer--color svg{filter: blur(calc(${u(145.65)} / 4))}.ui-gf-layer--light svg{filter: blur(calc(${u(122.74)} / 4))}.ui-gf-layer--color .ui-gf-bleed{animation: ui-gf-drift-color 2.5s ease-in-out infinite}.ui-gf-layer--light .ui-gf-bleed{animation: ui-gf-drift-light 2.5s ease-in-out infinite}@keyframes ui-gf-drift-color{0%, 100%{transform: translate(0, 0) scale(1, 1)}33%{transform: translate(${u(-120)}, ${u(-20)}) scale(1.05, 1.08)}66%{transform: translate(${u(100)}, ${u(12)}) scale(0.98, 0.96)}}@keyframes ui-gf-drift-light{0%, 100%{transform: translate(0, 0) scale(1, 1)}33%{transform: translate(${u(-100)}, ${u(-10)}) scale(1.03, 1)}66%{transform: translate(${u(85)}, ${u(10)}) scale(0.98, 0.94)}}.ui-gf[data-paused] .ui-gf-bleed{animation-play-state: paused}.ui-gf-content{position: relative;z-index: 1;height: 100%}:where(.dark, [data-theme="dark"]) .ui-gf{--ui-gf-bg: #111113}@media (prefers-reduced-motion: reduce){.ui-gf-bleed{animation: none}}`;
function FComponent() {
    return <div className={`gradient-floor-demo`}><LComponent className={`gradient-floor-demo__panel`}/></div>;
}
export { FComponent as default };
