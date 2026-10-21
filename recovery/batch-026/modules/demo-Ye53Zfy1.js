import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = ()=>typeof window < `u` && window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;
function AComponent({ id, children, duration = 420, blur = 10, morph = `height`, as = `div`, className, style: style_1 }) {
    let fRef = n.useRef(null);
    let pRef = n.useRef(null);
    let [m, setM] = n.useState(null);
    let gRef = n.useRef(id);
    let _RefRef = n.useRef(children);
    let vRef = n.useRef({
        w: 0,
        h: 0
    });
    let yRef = n.useRef(false);
    let bRef = n.useRef(0);
    let xRef = n.useRef(0);
    n.useLayoutEffect(()=>{
        let fRef_current = fRef.current;
        let pRef_current = pRef.current;
        if (id === gRef.current || !fRef_current || !pRef_current) {
            _RefRef.current = children;
            return;
        }
        gRef.current = id;
        let _Ref_current = _RefRef.current;
        _RefRef.current = children;
        window.clearTimeout(bRef.current);
        let s = {
            w: pRef_current.offsetWidth,
            h: pRef_current.offsetHeight
        };
        if (i() || duration <= 0) {
            setM(null);
            fRef_current.style.height = fRef_current.style.width = fRef_current.style.transition = ``;
            fRef_current.removeAttribute(`data-busy`);
            yRef.current = false;
            vRef.current = s;
            return;
        }
        let l = fRef_current.getBoundingClientRect();
        let u = yRef.current ? {
            w: l.width,
            h: l.height
        } : vRef.current;
        setM({
            id: gRef.current,
            node: _Ref_current,
            n: ++xRef.current,
            w: vRef.current.w,
            h: vRef.current.h
        });
        vRef.current = s;
        yRef.current = true;
        fRef_current.setAttribute(`data-busy`, ``);
        if (morph !== `none`) {
            fRef_current.style.transition = `none`;
            fRef_current.style.height = `${u.h}px`;
            if (morph === `both`) {
                fRef_current.style.width = `${u.w}px`;
            }
            fRef_current.offsetHeight;
            let e = `${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
            fRef_current.style.transition = morph === `both` ? `height ${e}, width ${e}` : `height ${e}`;
            fRef_current.style.height = `${s.h}px`;
            if (morph === `both`) {
                fRef_current.style.width = `${s.w}px`;
            }
        }
        bRef.current = window.setTimeout(()=>{
            fRef_current.style.height = fRef_current.style.width = fRef_current.style.transition = ``;
            fRef_current.removeAttribute(`data-busy`);
            yRef.current = false;
            setM(null);
        }, duration + 30);
    });
    n.useEffect(()=>{
        let pRef_current = pRef.current;
        if (!pRef_current || typeof ResizeObserver > `u`) {
            return;
        }
        let t = new ResizeObserver(()=>{
            if (!yRef.current) {
                vRef.current = {
                    w: pRef_current.offsetWidth,
                    h: pRef_current.offsetHeight
                };
            }
        });
        t.observe(pRef_current);
        vRef.current = {
            w: pRef_current.offsetWidth,
            h: pRef_current.offsetHeight
        };
        return ()=>t.disconnect();
    }, [
        id
    ]);
    n.useEffect(()=>()=>window.clearTimeout(bRef.current), []);
    let style_2 = {
        "--ui-bx-duration": `${duration}ms`,
        "--ui-bx-blur": `${blur}px`,
        ...style_1
    };
    let C = as;
    return <><style href={`ui-blur-crossfade`} precedence={`default`}>{o}</style>{r.jsxs(as, {
        ref: fRef,
        className: [
            `ui-bx`,
            `ui-bx--${morph}`,
            className
        ].filter(Boolean).join(` `),
        style: style_2,
        children: [
            <C key={`c-${id}`} ref={pRef} className={`ui-bx__layer${m ? ` ui-bx__layer--in` : ``}`}>{children}</C>,
            m && <C key={`x-${m.id}-${m.n}`} className={`ui-bx__layer ui-bx__layer--out`} aria-hidden={`true`} inert style={{
                width: m.w || undefined
            }}>{m.node}</C>
        ]
    })}</>;
}
var o = `.ui-bx{--ui-bx-duration: 420ms;--ui-bx-blur: 10px;--ui-bx-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;display: block}.ui-bx--both{display: inline-block;vertical-align: top}.ui-bx[data-busy]{overflow: hidden}.ui-bx__layer{display: block}.ui-bx--both > .ui-bx__layer{width: max-content}.ui-bx__layer--out{position: absolute;top: 0;left: 0;pointer-events: none}.ui-bx--height > .ui-bx__layer--out, .ui-bx--none > .ui-bx__layer--out{right: 0}.ui-bx--both > .ui-bx__layer--out{left: 50%;translate: -50% 0}.ui-bx--both > .ui-bx__layer--in{margin-left: 50%;translate: -50% 0}.ui-bx__layer--in{animation: ui-bx-in var(--ui-bx-duration) var(--ui-bx-ease) both}.ui-bx__layer--out{animation: ui-bx-out calc(var(--ui-bx-duration) * 0.8) ease-in both}@keyframes ui-bx-in{from{opacity: 0;filter: blur(var(--ui-bx-blur));transform: scale(0.98)}to{opacity: 1;filter: blur(0);transform: scale(1)}}@keyframes ui-bx-out{from{opacity: 1;filter: blur(0);transform: scale(1)}to{opacity: 0;filter: blur(var(--ui-bx-blur));transform: scale(1.02)}}@media (prefers-reduced-motion: reduce){.ui-bx__layer--in, .ui-bx__layer--out{animation: none}.ui-bx__layer--out{display: none}}:where(.dark, [data-theme="dark"]) .ui-bx{color: inherit}`;
const s = [
    {
        tag: `Shipped`,
        text: `Dark mode is live for everyone.`
    },
    {
        tag: `Improved`,
        text: `Search now looks through comments and attachments too, and results show up while you type – no more waiting for the full page.`
    },
    {
        tag: `Fixed`,
        text: `Exports keep their column order, even with hidden fields in between.`
    }
];
function CComponent() {
    let eRef = n.useRef(null);
    let [t, setT] = n.useState(`idle`);
    let [o, setO] = n.useState(0);
    let lRef = n.useRef([]);
    let u = ()=>{
        if (t === `idle`) {
            setT(`busy`);
            lRef.current.push(window.setTimeout(()=>setT(`done`), 1500), window.setTimeout(()=>setT(`idle`), 3600));
        }
    };
    let d = ()=>setO((e)=>(e + 1) % s.length);
    n.useEffect(()=>()=>lRef.current.forEach((e)=>window.clearTimeout(e)), []);
    n.useEffect(()=>{
        if (!eRef.current?.closest(`.card__preview`)) {
            return;
        }
        let t = 0;
        let n = window.setInterval(()=>{
            t++;
            if (t % 2) {
                setO((e)=>(e + 1) % s.length);
            } else {
                setT((e)=>{
                    if (e === `idle`) {
                        return `busy`;
                    }
                    if (e === `busy`) {
                        return `done`;
                    }
                    return `idle`;
                });
            }
        }, 1300);
        return ()=>window.clearInterval(n);
    }, []);
    let f = s[o];
    return <div className={`blur-crossfade-demo`} ref={eRef}><div className={`bxd-card`}><div className={`bxd-head`}><div className={`bxd-meta`}><span className={`bxd-title`}>{`Release 2.4`}</span><span className={`bxd-sub`}>{`3 changes · draft`}</span></div><button type={`button`} className={`bxd-primary`} data-status={t} onClick={u} aria-live={`polite`}><AComponent id={t} morph={`both`} as={`span`} blur={6} duration={380}>{t === `idle` && <span className={`bxd-btn`}>{`Publish`}</span>}{t === `busy` && <span className={`bxd-btn`}><span className={`bxd-spin`} aria-hidden={`true`}/>{`Publishing…`}</span>}{t === `done` && <span className={`bxd-btn`}><svg viewBox={`0 0 16 16`} width={`14`} height={`14`} fill={`none`} stroke={`currentColor`} strokeWidth={`1.8`} strokeLinecap={`round`} strokeLinejoin={`round`} aria-hidden={`true`}><path d={`M3.5 8.5l3 3 6-7`}/></svg>{`Published`}</span>}</AComponent></button></div><div className={`bxd-panel`}><AComponent id={o}><div className={`bxd-note`}><span className={`bxd-tag`} data-kind={f.tag}>{f.tag}</span><p>{f.text}</p></div></AComponent></div><div className={`bxd-foot`}><span className={`bxd-dots`} aria-hidden={`true`}>{s.map((e, t)=><i key={t} data-on={t === o || undefined}/>)}</span><button type={`button`} className={`bxd-chip`} onClick={d}>{`Next`}</button></div></div></div>;
}
export { CComponent as default };
