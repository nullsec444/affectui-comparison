import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = [
    1,
    -0.84,
    1.12
];
const a = [
    0,
    0.42,
    0.18
];
const o = (e, t)=>{
    if (t > 0) {
        return (e % t + t) % t;
    }
    return 0;
};
const s = (e, t, n)=>Math.min(n, Math.max(t, e));
const c = (name)=>name.split(/\s+/).filter(Boolean).slice(0, 2).map((e)=>e[0].toUpperCase()).join(``);
const l = (clientWidth, columns)=>Math.min(columns, clientWidth >= 740 ? 3 : clientWidth >= 480 ? 2 : 1);
function UComponent({ items, columns = 3, speed = 28, pauseOnHover = true, label = `What customers say`, className }) {
    let hRef = n.useRef(null);
    let gRef = n.useRef([]);
    let _RefRef = n.useRef([]);
    let vRef = n.useRef([]);
    let yRef = n.useRef([]);
    let bRef = n.useRef([]);
    let xRef = n.useRef([]);
    let SRef = n.useRef([]);
    let [C, setC] = n.useState(columns);
    let [T, setT] = n.useState([]);
    let [D, setD] = n.useState(false);
    let k = Array.from({
        length: C
    }, (t, n)=>items.filter((e, t)=>t % C === n));
    let ARef = n.useRef({
        speed,
        pauseOnHover,
        count: C
    });
    ARef.current = {
        speed,
        pauseOnHover,
        count: C
    };
    n.useEffect(()=>{
        let e = window.matchMedia(`(prefers-reduced-motion: reduce)`);
        let t = ()=>setD(e.matches);
        t();
        e.addEventListener(`change`, t);
        return ()=>e.removeEventListener(`change`, t);
    }, []);
    n.useLayoutEffect(()=>{
        let hRef_current = hRef.current;
        if (!hRef_current) {
            return;
        }
        let n = ()=>setC(l(hRef_current.clientWidth, columns));
        n();
        let r = new ResizeObserver(n);
        r.observe(hRef_current);
        return ()=>r.disconnect();
    }, [
        columns
    ]);
    n.useEffect(()=>{
        if (D) {
            return;
        }
        let e = ()=>{
            let e = k.map((e, t)=>{
                let n = vRef.current[t];
                let r = gRef.current[t];
                if (!n || !r) {
                    return 2;
                }
                let i = r.getBoundingClientRect().height / (r.offsetHeight || 1) || 1;
                let h = n.getBoundingClientRect().height / i;
                let s = yRef.current[t] ??= {
                    y: h * (a[t] ?? 0),
                    v: 0,
                    h,
                    drag: null,
                    seek: 0
                };
                if (s.h > 0 && h > 0 && s.h !== h) {
                    s.y = s.y / s.h * h;
                }
                s.h = h;
                if (h > 0) {
                    return Math.min(12, Math.ceil(r.clientHeight / h) + 1);
                }
                return 2;
            });
            yRef.current.length = k.length;
            setT((t)=>{
                if (t.length === e.length && t.every((t, n)=>t === e[n])) {
                    return t;
                }
                return e;
            });
        };
        e();
        let t = new ResizeObserver(e);
        for (let e of [
            ...vRef.current.slice(0, C),
            ...gRef.current.slice(0, C)
        ]){
            if (e) {
                t.observe(e);
            }
        }
        return ()=>t.disconnect();
    }, [
        D,
        C,
        items
    ]);
    n.useEffect(()=>{
        let hRef_current = hRef.current;
        if (D || !hRef_current) {
            return;
        }
        let t = 0;
        let n = 0;
        let r = false;
        let a = (e)=>{
            let c = n ? Math.min(0.05, (e - n) / 1000) : 0;
            n = e;
            let { speed, pauseOnHover, count } = ARef.current;
            for(let e = 0; e < count; e++){
                let t = yRef.current[e];
                let n = _RefRef.current[e];
                if (!t || !n || t.h <= 0) {
                    continue;
                }
                let r = count === 1 ? 1 : i[e % 3];
                let a = xRef.current[e] || SRef.current[e] || pauseOnHover && bRef.current[e];
                if (!t.drag) {
                    let e = a ? 0 : speed * r;
                    let n = Math.abs(t.v - e) > Math.max(120, speed * 2) ? 0.55 : a ? 0.32 : 0.7;
                    t.v += (e - t.v) * (1 - Math.exp(-c / n));
                    t.y += t.v * c;
                    if (t.seek) {
                        let e = t.seek * (1 - Math.exp(-c / 0.12));
                        t.y += e;
                        t.seek = Math.abs(t.seek - e) < 0.5 ? 0 : t.seek - e;
                    }
                }
                t.y = SRef.current[e] ? s(t.y, -t.h, t.h * 2) : o(t.y, t.h);
                n.style.transform = `translate3d(0, ${-(t.h + t.y)}px, 0)`;
            }
            t = r ? requestAnimationFrame(a) : 0;
        };
        let c = new IntersectionObserver(([e])=>{
            r = e.isIntersecting;
            if (r && !t) {
                n = 0;
                t = requestAnimationFrame(a);
            }
        });
        c.observe(hRef_current);
        return ()=>{
            c.disconnect();
            cancelAnimationFrame(t);
        };
    }, [
        D
    ]);
    let j = (e)=>(t)=>{
            let n = yRef.current[e];
            if (n) {
                if (t.pointerType === `touch`) {
                    xRef.current[e] = true;
                    return;
                }
                if (t.button === 0) {
                    n.drag = {
                        id: t.pointerId,
                        lastY: t.clientY,
                        lastT: t.timeStamp,
                        moved: 0,
                        captured: false
                    };
                    n.v = 0;
                }
            }
        };
    let M = (e)=>(t)=>{
            let n = yRef.current[e];
            let r = n?.drag;
            if (!n || !r || r.id !== t.pointerId) {
                return;
            }
            let t_currentTarget = t.currentTarget;
            let a = t_currentTarget.getBoundingClientRect().height / (t_currentTarget.offsetHeight || 1) || 1;
            let o = (t.clientY - r.lastY) / a;
            let s = Math.max(1, t.timeStamp - r.lastT) / 1000;
            r.moved += Math.abs(o);
            if (!r.captured && r.moved > 4) {
                r.captured = true;
                t_currentTarget.setPointerCapture(t.pointerId);
                t_currentTarget.setAttribute(`data-dragging`, ``);
            }
            n.y -= o;
            n.v = n.v * 0.6 + -o / s * 0.4;
            r.lastY = t.clientY;
            r.lastT = t.timeStamp;
        };
    let N = (e)=>(t)=>{
            xRef.current[e] = false;
            let n = yRef.current[e];
            let r = n?.drag;
            if (n && r && r.id === t.pointerId && (t.timeStamp - r.lastT > 80 && (n.v = 0), n.v = s(n.v, -2400, 2400), n.drag = null, t.currentTarget.removeAttribute(`data-dragging`), r.captured)) {
                let e = t.currentTarget;
                let n = (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                };
                e.addEventListener(`click`, n, {
                    capture: true,
                    once: true
                });
                setTimeout(()=>e.removeEventListener(`click`, n, {
                        capture: true
                    }), 0);
            }
        };
    let P = (e)=>(t)=>{
            let n = yRef.current[e];
            let r = gRef.current[e];
            if (D || !n || !r || n.h <= 0 || !t.currentTarget.matches(`:focus-visible`)) {
                return;
            }
            let offsetTop = t.currentTarget.parentElement.offsetTop;
            let offsetHeight = t.currentTarget.offsetHeight;
            let r_clientHeight = r.clientHeight;
            let s = Math.min(56, r_clientHeight * 0.12);
            n.y = [
                n.y - n.h,
                n.y,
                n.y + n.h
            ].reduce((acc, item)=>{
                if (Math.abs(offsetTop - item - r_clientHeight / 2) < Math.abs(offsetTop - acc - r_clientHeight / 2)) {
                    return item;
                }
                return acc;
            });
            let c = offsetTop - n.y;
            n.seek = offsetHeight > r_clientHeight - s * 2 || c < s ? c - s : c + offsetHeight > r_clientHeight - s ? c + offsetHeight - (r_clientHeight - s) : 0;
        };
    let FComponent = (e, t, n, key)=>{
        let a = [
            e.role,
            e.company
        ].filter(Boolean).join(`\xA0· `);
        let o = e.rating ? s(Math.round(e.rating), 1, 5) : 0;
        return <li key={key} className={`ui-tw__item`}><figure className={`ui-tw__card`} tabIndex={n ? 0 : undefined} onFocus={n ? P(t) : undefined}>{o ? <div className={`ui-tw__stars`} role={`img`} aria-label={`Rated ${o} out of 5`}>{Array.from({
            length: 5
        }, (e, t)=><svg key={t} viewBox={`0 0 16 16`} aria-hidden={`true`} data-on={t < o || undefined}><path d={`M8 1.6l1.9 3.95 4.35.6-3.17 3.03.78 4.32L8 11.43 4.14 13.5l.78-4.32L1.75 6.15l4.35-.6L8 1.6z`}/></svg>)}</div> : null}<blockquote className={`ui-tw__quote`}><p>{e.quote}</p></blockquote><figcaption className={`ui-tw__who`}>{e.avatar ? <img className={`ui-tw__avatar`} src={e.avatar} alt={``} width={36} height={36} loading={`lazy`} decoding={`async`} draggable={false}/> : <span className={`ui-tw__avatar ui-tw__avatar--initials`} aria-hidden={`true`}>{c(e.name)}</span>}<span className={`ui-tw__id`}><span className={`ui-tw__name`}><span className={`ui-tw__name-text`}>{e.name}</span>{e.verified ? <svg className={`ui-tw__verified`} viewBox={`0 0 16 16`} role={`img`} aria-label={`Verified customer`}><circle cx={`8`} cy={`8`} r={`7`}/><path d={`M5.2 8.1l1.9 1.9 3.7-3.8`} fill={`none`} stroke={`var(--ui-tw-card)`} strokeWidth={`1.6`} strokeLinecap={`round`} strokeLinejoin={`round`}/></svg> : null}</span>{a ? <span className={`ui-tw__meta`}>{a}</span> : null}</span></figcaption></figure></li>;
    };
    let className_1 = [
        `ui-tw`,
        className
    ].filter(Boolean).join(` `);
    return <><style href={`ui-testimonial-wall`} precedence={`default`}>{d}</style><div ref={hRef} className={className_1} role={`region`} aria-label={label} data-cols={C} data-static={D || undefined} style={{
        "--ui-tw-cols": C
    }}>{k.map((e, t)=>{
        if (D) {
            return <div key={t} className={`ui-tw__col`}><ul className={`ui-tw__set`}>{e.map((e, n)=>FComponent(e, t, true, String(n)))}</ul></div>;
        }
        return <div key={t} ref={(e)=>{
            gRef.current[t] = e;
        }} className={`ui-tw__col`} onPointerEnter={(e)=>{
            if (e.pointerType !== `touch`) {
                bRef.current[t] = true;
            }
        }} onPointerLeave={()=>bRef.current[t] = false} onPointerDown={j(t)} onPointerMove={M(t)} onPointerUp={N(t)} onPointerCancel={N(t)} onFocus={(e)=>SRef.current[t] = e.target.matches(`:focus-visible`)} onBlur={(e)=>{
            if (!e.currentTarget.contains(e.relatedTarget)) {
                SRef.current[t] = false;
            }
        }}><div ref={(e)=>{
            _RefRef.current[t] = e;
        }} className={`ui-tw__track`} style={{
            transform: `translate3d(0, ${-((yRef.current[t]?.h ?? 0) + (yRef.current[t]?.y ?? 0))}px, 0)`
        }}>{Array.from({
            length: 1 + Math.max(2, T[t] ?? 2)
        }, (n, i)=>{
            let a = i === 1;
            return <ul key={a ? `real` : i} ref={a ? (e)=>{
                vRef.current[t] = e;
            } : undefined} className={`ui-tw__set`} aria-hidden={!a || undefined} inert={!a || undefined}>{e.map((e, n)=>FComponent(e, t, a, `${i}-${n}`))}</ul>;
        })}</div></div>;
    })}</div></>;
}
var d = `
.ui-tw {
  --ui-tw-card: #ffffff;
  --ui-tw-line: #ececec;
  --ui-tw-ink: #171717;
  --ui-tw-text: #404040;
  --ui-tw-muted: #8f8f8f;
  --ui-tw-faint: #b5b5b5;
  --ui-tw-star: #a3a3a8;
  --ui-tw-star-off: #e2e2e5;
  --ui-tw-initials: #f0f0f1;
  --ui-tw-shadow: 0 0 0 1px var(--ui-tw-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  --ui-tw-lift: 0 0 0 1px var(--ui-tw-line), 0 2px 4px rgba(0, 0, 0, 0.03), 0 12px 28px -10px rgba(0, 0, 0, 0.14);
  --ui-tw-focus: #2f6bff;
  --ui-tw-gap: 16px;
  --ui-tw-fade: 96px;
  --ui-tw-dim: 0.62;
  --ui-tw-ease: cubic-bezier(0.22, 1, 0.36, 1);
  container-type: inline-size;
  display: grid;
  grid-template-columns: repeat(var(--ui-tw-cols, 3), minmax(0, 1fr));
  /* One row exactly as tall as the wall, so a column's height never follows its (repeated) content */
  grid-template-rows: minmax(0, 1fr);
  gap: var(--ui-tw-gap);
  width: 100%;
  min-width: 0;
  height: var(--ui-tw-height, 600px);
  /* Room at the sides for the lifted card's shadow; the wall clips everything else */
  padding-inline: 12px;
  box-sizing: border-box;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(180deg, transparent, #000 var(--ui-tw-fade), #000 calc(100% - var(--ui-tw-fade)), transparent);
  mask-image: linear-gradient(180deg, transparent, #000 var(--ui-tw-fade), #000 calc(100% - var(--ui-tw-fade)), transparent);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.ui-tw__col {
  position: relative;
  min-width: 0;
  min-height: 0;
  height: 100%;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
.ui-tw__col[data-dragging] { cursor: grabbing; }
.ui-tw__track { will-change: transform; }
.ui-tw__set {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
}
/* Every card carries its gap below, so one set's height is exactly the wrap distance */
.ui-tw__item { margin-bottom: var(--ui-tw-gap); }

.ui-tw__card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
  padding: 18px 20px 18px;
  border-radius: 16px;
  background: var(--ui-tw-card);
  box-shadow: var(--ui-tw-shadow);
  color: var(--ui-tw-text);
  transition: transform 320ms var(--ui-tw-ease), box-shadow 320ms var(--ui-tw-ease), opacity 320ms var(--ui-tw-ease);
}
.ui-tw__card:focus { outline: none; }
.ui-tw__card:focus-visible { outline: 2px solid var(--ui-tw-focus); outline-offset: 2px; }

.ui-tw__stars { display: flex; gap: 2px; margin-bottom: -4px; }
.ui-tw__stars svg { width: 13px; height: 13px; fill: var(--ui-tw-star-off); }
.ui-tw__stars svg[data-on] { fill: var(--ui-tw-star); }

.ui-tw__quote { margin: 0; }
.ui-tw__quote p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: -0.006em;
  text-wrap: pretty;
  overflow-wrap: break-word;
}

.ui-tw__who { display: flex; align-items: center; gap: 10px; min-width: 0; }
.ui-tw__avatar {
  flex: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--ui-tw-initials);
  /* A hairline ring keeps light photos from melting into the card */
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  pointer-events: none;
}
.ui-tw__avatar--initials {
  display: grid;
  place-items: center;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: var(--ui-tw-muted);
}
.ui-tw__id { display: grid; gap: 1px; min-width: 0; }
.ui-tw__name {
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  font-size: 13.5px;
  font-weight: 500;
  line-height: 18px;
  color: var(--ui-tw-ink);
}
/* The name wins over the role: it shrinks last and only then truncates */
.ui-tw__name-text { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ui-tw__verified { flex: none; width: 14px; height: 14px; fill: var(--ui-tw-faint); }
.ui-tw__meta {
  min-width: 0;
  overflow-wrap: break-word;
  font-size: 12.5px;
  line-height: 17px;
  color: var(--ui-tw-muted);
}

/* Hover: the card under the pointer lifts a little, the rest of the wall steps back */
@media (hover: hover) {
  .ui-tw__col:not([data-dragging]) .ui-tw__card:hover { transform: translateY(-3px); box-shadow: var(--ui-tw-lift); }
  .ui-tw:has(.ui-tw__col:not([data-dragging]) .ui-tw__card:hover) .ui-tw__card:not(:hover) { opacity: var(--ui-tw-dim); }
}
/* Keyboard focus gets the same lift */
.ui-tw__card:focus-visible { transform: translateY(-3px); box-shadow: var(--ui-tw-lift); }

/* Narrow walls (one column on phones): roomier, more readable quotes */
@container (max-width: 479px) {
  .ui-tw__card { padding: 18px 18px 18px; }
  .ui-tw__quote p { font-size: 15px; line-height: 1.58; }
}
@container (max-width: 739px) {
  .ui-tw__col { --ui-tw-gap: 14px; }
}

/* Reduced motion: a static masonry that shows every quote – no fixed height, no fade */
.ui-tw[data-static] {
  height: auto;
  grid-template-rows: auto;
  overflow: visible;
  -webkit-mask-image: none;
  mask-image: none;
}
.ui-tw[data-static] .ui-tw__col { height: auto; cursor: auto; user-select: auto; -webkit-user-select: auto; }

@media (prefers-reduced-motion: reduce) {
  .ui-tw__card { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tw {
  --ui-tw-card: #19191b;
  --ui-tw-line: #2a2a2e;
  --ui-tw-ink: #ededed;
  --ui-tw-text: #c8c8cc;
  --ui-tw-muted: #8b8b92;
  --ui-tw-faint: #6b6b72;
  --ui-tw-star: #7a7a82;
  --ui-tw-star-off: #2f2f34;
  --ui-tw-initials: #232327;
  --ui-tw-shadow: 0 0 0 1px var(--ui-tw-line);
  --ui-tw-lift: 0 0 0 1px #34343a, 0 12px 28px -10px rgba(0, 0, 0, 0.6);
  --ui-tw-focus: #6d8bff;
}
:where(.dark, [data-theme="dark"]) .ui-tw__avatar { box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06); }
`;
const items = [
    {
        quote: `We replaced three half-finished internal kits with it in a sprint. Our product finally looks like one product.`,
        name: `Lena Hartmann`,
        role: `Design Lead`,
        company: `Fieldnote`,
        avatar: `/avatars/lena.jpg`,
        rating: 5
    },
    {
        quote: `The motion is the part nobody notices – which is exactly the point.`,
        name: `Jonas Weber`,
        role: `Staff Engineer`,
        company: `Ledgerline`,
        avatar: `/avatars/jonas.jpg`,
        verified: true
    },
    {
        quote: `I opened the date range picker expecting to fix the keyboard handling. There was nothing to fix. Focus, arrows, Escape, screen reader labels – all there, and it still felt light.`,
        name: `Priya Raman`,
        role: `Frontend Engineer`,
        company: `Tidepool Health`,
        verified: true
    },
    {
        quote: `Copy, paste, ship. Then actually read the code and learn something.`,
        name: `Mara Lindqvist`,
        role: `Product Designer`,
        company: `Kitewise`,
        avatar: `/avatars/mara.jpg`,
        rating: 5
    },
    {
        quote: `Our designers stopped redlining spacing in reviews. The defaults are calm and consistent, and dark mode just works without a second pass.`,
        name: `Daniel Okafor`,
        role: `Head of Design`,
        company: `Northpeak`
    },
    {
        quote: `Every component is one file with no dependencies. Our bundle audit took five minutes.`,
        name: `Noah Fischer`,
        role: `Tech Lead`,
        company: `Parcelwise`,
        avatar: `/avatars/noah.jpg`,
        verified: true
    },
    {
        quote: `It feels like it was built by people who care about the last 5%.`,
        name: `Camille Roux`,
        role: `Design Engineer`,
        company: `Sundial`,
        rating: 5
    },
    {
        quote: `We shipped a new onboarding flow in two days. The dropzone and the command menu alone saved us a week of polish – the empty states and the little transitions were already better than what we had planned.`,
        name: `Sofia Marino`,
        role: `Product Manager`,
        company: `Brightloop`,
        avatar: `/avatars/sofia.jpg`,
        verified: true
    },
    {
        quote: `Finally a library that doesn't look like every other AI-generated dashboard.`,
        name: `Elif Demir`,
        role: `Brand Designer`,
        company: `Harbor Studio`,
        rating: 5
    },
    {
        quote: `The phone layouts are the real surprise. Everything holds up at 320 pixels, which I can't say about our own app.`,
        name: `Theo Brandt`,
        role: `Mobile Engineer`,
        company: `Copperleaf`,
        avatar: `/avatars/theo.jpg`
    },
    {
        quote: `Accessible by default, without me having to argue for it in planning.`,
        name: `Marcus Lee`,
        role: `Accessibility Lead`,
        company: `Quillstack`,
        verified: true
    },
    {
        quote: `I use it as a reference as much as a library. When a junior asks how a height animation should feel, I just send them the source.`,
        name: `Hana Sato`,
        role: `Principal Designer`,
        company: `Plainview`,
        rating: 5
    }
];
function PComponent() {
    return <div className={`testimonial-wall-demo`}><header className={`testimonial-wall-demo__head`}><p className={`testimonial-wall-demo__eyebrow`}>{`Testimonials`}</p><h2 className={`testimonial-wall-demo__title`}>{`Loved by product teams`}</h2></header><UComponent items={items} speed={26} label={`What product teams say`}/></div>;
}
export { PComponent as default };
