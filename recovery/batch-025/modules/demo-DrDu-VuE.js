import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = [
    {
        cx: 115,
        cy: 93,
        r: 43
    },
    {
        cx: 163,
        cy: 111,
        r: 39
    },
    {
        cx: 156,
        cy: 155,
        r: 31
    },
    {
        cx: 107,
        cy: 155,
        r: 35
    },
    {
        cx: 72,
        cy: 126,
        r: 34
    }
];
const a = {
    x: 80,
    y: 100,
    width: 80,
    height: 65
};
const o = {
    y: 106,
    w: 18,
    h: 31,
    left: 96.5,
    right: 127.5
};
const cx = 120;
const c = 120;
const l = 180;
const u = [
    {
        x: 0,
        y: 0
    },
    {
        x: -1,
        y: 0.05
    },
    {
        x: 1,
        y: -0.05
    },
    {
        x: 0,
        y: 0
    },
    {
        x: 0.65,
        y: -0.55
    },
    {
        x: -0.7,
        y: 0.35
    }
];
const d = (e, t, n)=>`translate(${e} ${t}) ${n} translate(${-e} ${-t})`;
const F1Component = ({ offset, color, opacity })=><stop offset={offset} style={{
        stopColor: `var(--ui-fc-${color})`,
        stopOpacity: opacity
    }}/>;
function P1Component({ background = true, color = `orange`, followPointer = true, className, label = `A frosted white cloud with eyes that floats, looks around and blinks` }) {
    let _ = n.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
    let v = (e)=>`fc${_}-${e}`;
    let yRef = n.useRef(null);
    let bRef = n.useRef(null);
    let xRef = n.useRef(null);
    let SRef = n.useRef(null);
    let CRef = n.useRef(null);
    let wRef = n.useRef(null);
    let TRef = n.useRef(null);
    let ERef = n.useRef(null);
    n.useEffect(()=>{
        let yRef_current = yRef.current;
        if (!yRef_current) {
            return;
        }
        let matches = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
        let n = {
            x: 0,
            y: 0,
            vx: 0,
            vy: 0
        };
        let r = {
            x: 0,
            y: 0
        };
        let i = {
            p: 0,
            v: 0
        };
        let a = false;
        let f = 1.2;
        let m = 1.8;
        let h = -1;
        let g = false;
        let _ = -1;
        let v = 0;
        let D = 0;
        let O = 0;
        let k = (e, t = 0.16)=>{
            if (e < 0 || e > t) {
                return 1;
            }
            return 1 - 0.9 * Math.sin(e / t * Math.PI);
        };
        let A = ()=>{
            let e = matches ? 0 : Math.sin(O * 1.1) * 5;
            let r = matches ? 0 : Math.sin(O * 1.1 + Math.PI / 2) * 0.012;
            let a = 1 + r - i.p * 0.12;
            let u = 1 - r + i.p * 0.1;
            bRef.current?.setAttribute(`transform`, `translate(0 ${e.toFixed(2)}) ${d(cx, l, `scale(${u.toFixed(4)} ${a.toFixed(4)})`)}`);
            xRef.current?.setAttribute(`transform`, `translate(${(n.x * 4).toFixed(2)} ${(n.y * 2).toFixed(2)}) ${d(cx, c, `rotate(${(n.x * 2.5).toFixed(2)}) scale(${(1 - Math.abs(n.x) * 0.025).toFixed(4)} 1)`)}`);
            SRef.current?.setAttribute(`transform`, `translate(${(n.x * 12).toFixed(2)} ${(n.y * 7).toFixed(2)})`);
            TRef.current?.setAttribute(`transform`, `translate(${(-n.x * 7).toFixed(2)} ${(-n.y * 3).toFixed(2)})`);
            let f = h < 0 ? 1 : Math.min(k(O - h), g ? k(O - h - 0.26) : 1);
            let p = k(O - _, 0.34);
            let m = o.y + o.h / 2;
            CRef.current?.setAttribute(`transform`, d(o.left + o.w / 2, m, `scale(1 ${f.toFixed(3)})`));
            wRef.current?.setAttribute(`transform`, d(o.right + o.w / 2, m, `scale(1 ${Math.min(f, p).toFixed(3)})`));
            let v = (e + 5) / 10;
            ERef.current?.setAttribute(`transform`, d(cx, 210, `scale(${(1 - v * 0.12).toFixed(3)} 1)`));
            ERef.current?.setAttribute(`opacity`, (0.34 - v * 0.1).toFixed(3));
        };
        let j = (e)=>{
            let t = Math.min(0.05, (e - (D || e)) / 1000);
            D = e;
            O += t;
            if (!a && O > f) {
                let e = u[Math.floor(Math.random() * u.length)];
                r.x = e.x;
                r.y = e.y;
                f = O + 1.4 + Math.random() * 2.2;
            }
            if (O > m) {
                h = O;
                g = Math.random() < 0.25;
                m = O + 2.4 + Math.random() * 3;
            }
            n.vx += ((r.x - n.x) * 70 - n.vx * 13) * t;
            n.vy += ((r.y - n.y) * 70 - n.vy * 13) * t;
            n.x += n.vx * t;
            n.y += n.vy * t;
            i.v += (-i.p * 220 - i.v * 9) * t;
            i.p += i.v * t;
            A();
            v = requestAnimationFrame(j);
        };
        let M = ()=>{
            if (!(v || matches)) {
                D = 0;
                v = requestAnimationFrame(j);
            }
        };
        let N = ()=>{
            cancelAnimationFrame(v);
            v = 0;
        };
        let P = new IntersectionObserver(([e])=>{
            if (e.isIntersecting) {
                return M();
            }
            return N();
        });
        P.observe(yRef_current);
        let F = (t)=>{
            if (!followPointer) {
                return;
            }
            let n = yRef_current.getBoundingClientRect();
            a = true;
            r.x = Math.max(-1, Math.min(1, ((t.clientX - n.left) / n.width - 0.5) * 2.4));
            r.y = Math.max(-1, Math.min(1, ((t.clientY - n.top) / n.height - 0.5) * 2.4));
        };
        let I = ()=>{
            a = false;
            r.x = 0;
            r.y = 0;
            f = O + 1.2;
        };
        let L = ()=>{
            i.p = 0.9;
            i.v = 0;
            _ = O + 0.12;
            if (matches) {
                M();
                window.setTimeout(N, 1200);
            }
        };
        yRef_current.addEventListener(`pointermove`, F);
        yRef_current.addEventListener(`pointerleave`, I);
        yRef_current.addEventListener(`pointerdown`, L);
        A();
        return ()=>{
            N();
            P.disconnect();
            yRef_current.removeEventListener(`pointermove`, F);
            yRef_current.removeEventListener(`pointerleave`, I);
            yRef_current.removeEventListener(`pointerdown`, L);
        };
    }, [
        followPointer
    ]);
    let D = i.map((e, key)=><circle key={key} {...e}/>);
    let OComponent = (x, ref, n)=>{
        let i = {
            x,
            y: o.y,
            width: o.w,
            height: o.h,
            rx: o.w / 2
        };
        return <g ref={ref}><rect {...i} x={x - 1.5} y={o.y - 1} width={o.w + 3} height={o.h + 3} rx={o.w / 2 + 1.5} className={`ui-fc__eye-drop`} filter={`url(#${v(`edge`)})`}/><rect {...i} fill={`url(#${v(`hole`)})`}/><clipPath id={v(`clip-${n}`)}><rect {...i}/></clipPath><rect {...i} y={o.y + 2.5} className={`ui-fc__eye-shade`} fill={`none`} strokeWidth={`5`} filter={`url(#${v(`edge`)})`} clipPath={`url(#${v(`clip-${n}`)})`}/></g>;
    };
    return <div ref={yRef} className={[
        `ui-fc`,
        className
    ].filter(Boolean).join(` `)} data-bg={background || undefined} data-color={color} role={`img`} aria-label={label}><style href={`ui-frost-cloud`} precedence={`default`}>{m}</style><svg viewBox={`0 0 240 240`} aria-hidden={`true`}><defs><filter id={v(`goo`)} x={`0`} y={`0`} width={`240`} height={`240`} filterUnits={`userSpaceOnUse`}><feGaussianBlur stdDeviation={`3.5`}/><feColorMatrix values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -12`}/></filter><filter id={v(`soft`)} x={`0`} y={`0`} width={`240`} height={`240`} filterUnits={`userSpaceOnUse`}><feGaussianBlur stdDeviation={`12`}/></filter><filter id={v(`halo`)} x={`0`} y={`0`} width={`240`} height={`240`} filterUnits={`userSpaceOnUse`}><feGaussianBlur stdDeviation={`9`}/></filter><filter id={v(`edge`)} x={`0`} y={`0`} width={`240`} height={`240`} filterUnits={`userSpaceOnUse`}><feGaussianBlur stdDeviation={`1.6`}/></filter><filter id={v(`shade`)} x={`0`} y={`0`} width={`240`} height={`240`} filterUnits={`userSpaceOnUse`}><feGaussianBlur stdDeviation={`5`}/></filter><g id={v(`shape`)} filter={`url(#${v(`goo`)})`}>{D}<rect {...a}/></g><mask id={v(`mask`)} maskUnits={`userSpaceOnUse`} x={`0`} y={`0`} width={`240`} height={`240`}><use href={`#${v(`shape`)}`} fill={`#fff`}/></mask><linearGradient id={v(`frost`)} x1={`0`} y1={`50`} x2={`0`} y2={`192`} gradientUnits={`userSpaceOnUse`}><F1Component offset={0} color={`white`}/><F1Component offset={1} color={`frost`} opacity={0.97}/></linearGradient><linearGradient id={v(`hole`)} x1={`0`} y1={`0`} x2={`0`} y2={`1`}><F1Component offset={0} color={`hole-1`}/><F1Component offset={1} color={`hole-2`}/></linearGradient></defs><ellipse ref={ERef} className={`ui-fc__shadow`} cx={cx} cy={`210`} rx={`54`} ry={`7`} filter={`url(#${v(`shade`)})`}/><g ref={bRef}><g ref={xRef}><use href={`#${v(`shape`)}`} className={`ui-fc__halo`} filter={`url(#${v(`halo`)})`}/><use href={`#${v(`shape`)}`} className={`ui-fc__edge`} filter={`url(#${v(`edge`)})`}/><g mask={`url(#${v(`mask`)})`}><rect width={`240`} height={`240`} fill={`url(#${v(`frost`)})`}/><g filter={`url(#${v(`soft`)})`} className={`ui-fc__tint`} transform={`translate(-6 18) ${d(cx, c, `scale(0.84 0.78)`)}`}>{D}<rect {...a}/></g><ellipse ref={TRef} cx={`108`} cy={`78`} rx={`34`} ry={`14`} fill={`#fff`} opacity={`0.75`} filter={`url(#${v(`shade`)})`}/></g><g ref={SRef}>{OComponent(o.left, CRef, `l`)}{OComponent(o.right, wRef, `r`)}</g></g></g></svg></div>;
}
var m = `
/* Palette as variables – blue, or red-orange via data-color="orange" */
.ui-fc {
  --ui-fc-sky-top: #2475ea;
  --ui-fc-sky-bottom: #4ac8f5;
  --ui-fc-sky-light: rgba(110, 225, 255, 0.55);
  --ui-fc-white: #ffffff;
  --ui-fc-frost: #eef8ff;
  --ui-fc-tint: rgba(70, 165, 235, 0.2);
  --ui-fc-hole-1: #3aaef2;
  --ui-fc-hole-2: #62cdfa;
  --ui-fc-eye-drop: rgba(40, 130, 210, 0.1);
  --ui-fc-eye-shade: rgba(10, 90, 190, 0.24);
  --ui-fc-halo: rgba(30, 150, 255, 0.2);
  --ui-fc-edge: rgba(20, 120, 240, 0.4);
  --ui-fc-shadow: rgba(10, 90, 200, 0.55);
  --ui-fc-ground: rgba(10, 80, 190, 0.4);
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 1;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
.ui-fc[data-color="orange"] {
  --ui-fc-sky-top: #e94135;
  --ui-fc-sky-bottom: #fa9842;
  --ui-fc-sky-light: rgba(255, 205, 150, 0.5);
  --ui-fc-frost: #fff5f0;
  --ui-fc-tint: rgba(235, 110, 70, 0.2);
  --ui-fc-hole-1: #f05f42;
  --ui-fc-hole-2: #fba05b;
  --ui-fc-eye-drop: rgba(200, 70, 40, 0.1);
  --ui-fc-eye-shade: rgba(170, 40, 20, 0.24);
  --ui-fc-halo: rgba(240, 100, 60, 0.2);
  --ui-fc-edge: rgba(220, 80, 40, 0.4);
  --ui-fc-shadow: rgba(170, 50, 20, 0.5);
  --ui-fc-ground: rgba(150, 30, 10, 0.36);
}
.ui-fc svg { display: block; width: 100%; max-width: 320px; overflow: visible; }
.ui-fc__halo { fill: var(--ui-fc-halo); }
.ui-fc__edge { fill: var(--ui-fc-edge); }
.ui-fc__shadow { fill: var(--ui-fc-shadow); }
.ui-fc__tint { fill: var(--ui-fc-tint); }
.ui-fc__eye-drop { fill: var(--ui-fc-eye-drop); }
.ui-fc__eye-shade { stroke: var(--ui-fc-eye-shade); }

/* The sky: darker at the top, lighter at the bottom, a brighter patch behind the cloud – fills the whole box */
.ui-fc[data-bg] {
  --ui-fc-halo: rgba(255, 255, 255, 0.75);
  --ui-fc-edge: rgba(255, 255, 255, 0.5);
  --ui-fc-shadow: var(--ui-fc-ground);
  background:
    radial-gradient(60% 55% at 62% 42%, var(--ui-fc-sky-light), transparent 70%),
    linear-gradient(180deg, var(--ui-fc-sky-top), var(--ui-fc-sky-bottom));
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> – a deeper sky */
:where(.dark, [data-theme="dark"]) .ui-fc {
  --ui-fc-sky-top: #1659c8;
  --ui-fc-sky-bottom: #2aa6e6;
  --ui-fc-sky-light: rgba(90, 205, 255, 0.45);
  --ui-fc-ground: rgba(5, 50, 140, 0.5);
}
:where(.dark, [data-theme="dark"]) .ui-fc[data-color="orange"] {
  --ui-fc-sky-top: #bf2722;
  --ui-fc-sky-bottom: #ed701d;
  --ui-fc-sky-light: rgba(255, 175, 120, 0.42);
  --ui-fc-ground: rgba(110, 15, 5, 0.5);
}
:where(.dark, [data-theme="dark"]) .ui-fc:not([data-bg]) {
  --ui-fc-halo: rgba(255, 255, 255, 0.35);
  --ui-fc-edge: rgba(255, 255, 255, 0.25);
}
`;
function HComponent() {
    return <div className={`frost-cloud-demo`}><P1Component/></div>;
}
export { HComponent as default };
