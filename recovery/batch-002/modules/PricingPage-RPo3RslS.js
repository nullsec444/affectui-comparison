import { t } from "./react-BkAXpnfr.js";
import { i, n } from "./site-D86YA7B9.js";
import { t as t_2 } from "./jsx-runtime-CTsRTJUX.js";
import { A, F, H, M, N, U, Z, _ as __1, m, n as P1, nt, p, q } from "./index-C4AVl5zi.js";
const _ = [
    [
        `path`,
        {
            d: `M12 1.25C11.6453 1.25 11.2831 1.35888 10.9148 1.49784C10.5419 1.63848 10.0762 1.84521 9.49544 2.10302C8.64182 2.48194 7.5152 2.91682 6.30676 3.26034L6.30675 3.26034C5.42488 3.51101 4.71192 3.71367 4.17183 3.9231C3.62905 4.13358 3.13694 4.39466 2.80565 4.83324C2.48481 5.258 2.36138 5.75424 2.30469 6.28941C2.24997 6.80596 2.24998 7.4541 2.25 8.23883V8.23885V11.1833C2.25 14.2392 3.62946 16.6624 5.29669 18.4686C6.95877 20.2691 8.93883 21.4939 10.2439 22.1827L10.3069 22.216C10.8627 22.5098 11.3171 22.75 12 22.75C12.683 22.75 13.1373 22.5098 13.6931 22.216L13.7561 22.1827C15.0612 21.4939 17.0412 20.2691 18.7033 18.4686C20.3705 16.6624 21.75 14.2392 21.75 11.1833V8.23883C21.75 7.45411 21.75 6.80597 21.6953 6.28941C21.6386 5.75424 21.5152 5.258 21.1943 4.83324C20.8631 4.39466 20.371 4.13358 19.8282 3.9231C19.2881 3.71368 18.5751 3.51102 17.6933 3.26036L17.6933 3.26035L17.6932 3.26033C16.4848 2.91682 15.3581 2.48193 14.5045 2.103C13.9238 1.8452 13.4581 1.63848 13.0852 1.49784C12.7169 1.35888 12.3547 1.25 12 1.25ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7V7.42416C10.6347 7.52886 10.0701 7.7612 9.61196 8.09711C8.97319 8.56549 8.5 9.2746 8.5 10.1278C8.5 10.8783 8.76936 11.572 9.45777 12.0328C10.0819 12.4507 10.9522 12.6062 12 12.6062C12.9582 12.6062 13.5279 12.7501 13.8421 12.9537C14.088 13.1131 14.25 13.354 14.25 13.8726C14.25 14.3084 14.0711 14.5775 13.7369 14.777C13.3572 15.0037 12.7608 15.1391 12 15.1391C11.3002 15.1391 10.7004 14.9471 10.2971 14.676C9.88907 14.4018 9.75 14.1036 9.75 13.8726C9.75 13.4584 9.41421 13.1226 9 13.1226C8.58579 13.1226 8.25 13.4584 8.25 13.8726C8.25 14.7554 8.78251 15.4654 9.46029 15.921C9.9609 16.2574 10.5786 16.4867 11.25 16.585V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V16.6006C13.3866 16.5325 13.9974 16.3684 14.5057 16.065C15.2573 15.6163 15.75 14.8772 15.75 13.8726C15.75 12.951 15.412 12.1837 14.6579 11.6949C13.9721 11.2504 13.0418 11.1062 12 11.1062C11.0478 11.1062 10.5431 10.9543 10.2922 10.7864C10.1056 10.6615 10 10.4909 10 10.1278C10 9.86732 10.1424 9.56819 10.499 9.30676C10.855 9.04566 11.3833 8.86133 12 8.86133C12.6167 8.86133 13.145 9.04566 13.5011 9.30676C13.8576 9.56819 14 9.86732 14 10.1278C14 10.542 14.3358 10.8778 14.75 10.8778C15.1642 10.8778 15.5 10.542 15.5 10.1278C15.5 9.2746 15.0268 8.56549 14.388 8.09711C13.9299 7.7612 13.3653 7.52886 12.75 7.42416V7Z`,
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            key: `0`
        }
    ]
];
const v = t();
const y = t_2();
const b = (e)=>`$${Math.round(e).toLocaleString(`en-US`)}`;
let x = null;
function S() {
    if (typeof navigator < `u`) {
        if (typeof navigator.vibrate == `function`) {
            navigator.vibrate(6);
            return;
        }
        if (/iPhone|iPad/.test(navigator.userAgent)) {
            if (!x) {
                x = document.createElement(`label`);
                x.setAttribute(`aria-hidden`, `true`);
                x.style.cssText = `position:fixed;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;`;
                let e = document.createElement(`input`);
                e.type = `checkbox`;
                e.setAttribute(`switch`, ``);
                e.tabIndex = -1;
                x.appendChild(e);
                document.body.appendChild(x);
            }
            x.click();
        }
    }
}
const length = 31;
function WComponent({ label: label_1, value, min, max, step, format, onChange }) {
    let s = v.useId();
    let c = (value - min) / (max - min) * 100;
    let lRef = v.useRef(null);
    let uRef = v.useRef(null);
    let dRef = v.useRef(value);
    dRef.current = value;
    let f = (e)=>{
        let t = lRef.current?.getBoundingClientRect();
        if (!t) {
            return;
        }
        let a = Math.min(1, Math.max(0, (e.clientX - t.left) / t.width));
        let s = Math.min(max, Math.max(min, min + Math.round(a * (max - min) / step) * step));
        if (s !== dRef.current) {
            dRef.current = s;
            S();
            onChange(s);
        }
    };
    return <div className={`calc__field`} style={{
        "--fill": `${c}%`
    }} onPointerDown={(e)=>{
        if (e.button === 0) {
            e.preventDefault();
            e.currentTarget.setPointerCapture(e.pointerId);
            uRef.current?.focus({
                preventScroll: true
            });
            f(e);
        }
    }} onPointerMove={(e)=>{
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            f(e);
        }
    }}><label htmlFor={s} className={`calc__name`}>{label_1}</label><div className={`calc__scale`} ref={lRef}><span className={`calc__ticks`} aria-hidden={`true`}>{Array.from({
        length
    }, (e, t)=><span key={t} data-on={t / 30 * 100 <= c ? `` : undefined} data-major={t % 5 == 0 ? `` : undefined}/>)}</span><span className={`calc__mark`} aria-hidden={`true`}/><input ref={uRef} id={s} type={`range`} min={min} max={max} step={step} value={value} onChange={(e)=>{
        S();
        onChange(Number(e.target.value));
    }}/></div><output htmlFor={s}>{format(value)}</output></div>;
}
function TComponent({ price }) {
    let [t, setT] = v.useState(10);
    let [r, setR] = v.useState(6);
    let [a, setA] = v.useState(75);
    let c = t * r;
    let l = c * a;
    let u = c / 8;
    let d = Math.max(l - price, 0);
    return <section className={`calc`} aria-labelledby={`calc-title`}><div className={`calc__head`}><h2 id={`calc-title`}>{`What would it cost to build yourself?`}</h2><p>{`Polished states, motion, dark mode and keyboard support take time. Here's roughly how much.`}</p></div><div className={`calc__tray`}><div className={`calc__card`}><div className={`calc__inputs`}><WComponent label={`Pieces you need`} value={t} min={1} max={40} step={1} format={(e)=>String(e)} onChange={setT}/><WComponent label={`Hours per piece`} value={r} min={1} max={24} step={1} format={(e)=>`${e} h`} onChange={setR}/><WComponent label={`Your hourly rate`} value={a} min={20} max={250} step={5} format={(e)=>`$${e}`} onChange={setA}/></div><div className={`calc__result`} aria-live={`polite`}><span className={`calc__label`}>{`Building it yourself`}</span><span className={`calc__big`}>{b(l)}</span><span className={`calc__note`}>{c}{` hours · about `}{u < 10 ? u.toFixed(1).replace(/\.0$/, ``) : Math.round(u)}{` working days`}</span><div className={`calc__compare`}><div className={`calc__pro`}><span><span className={`calc__bolt`} aria-hidden={`true`}><H icon={q} size={10}/></span>{`affectUI Pro`}</span><b>{b(price)}{` once`}</b></div><div className={`calc__save`}><span>{`You keep`}</span><b>{b(d)}</b></div></div></div></div></div></section>;
}
const faqs = [
    {
        q: `What am I actually buying?`,
        a: `The source. Every Pro component, block, illustration and motion effect as the single file it is built from, installable with the shadcn CLI or by copy and paste – plus every future item. You pay once and keep it.`
    },
    {
        q: `Pay once, really?`,
        a: `Yes. Individual and Teams are one-time purchases with lifetime updates – no subscription, no renewal.`
    },
    {
        q: `What are the founder and early access prices?`,
        a: `${n.map((e, t)=>`${t === 0 ? `The first ${e.until} Individual licenses` : `the next ${e.until - n[t - 1].until}`} cost $${e.price}`).join(`, `)}, after that $${i.individual}. Everyone keeps everything they bought, including all future updates.`
    },
    {
        q: `How do team seats work?`,
        a: `One Team license covers ${i.teamSeats} seats. Every seat is one designer or developer with their own access. Need more than ${i.teamSeats}? Contact us and we'll set up a custom license.`
    },
    {
        q: `Can I use it in client work?`,
        a: `Yes. Individual and Teams include a commercial license for unlimited projects, for you and your clients. The License page shows common cases, from agencies with one app per client to your own SaaS.`
    },
    {
        q: `Can I try it before I buy?`,
        a: `Every preview and all docs are open. The free items are yours to keep, no account needed.`
    },
    {
        q: `How do I get access or ask for help?`,
        a: `After checkout you sign in with the same email and get access right away. For questions, reach out via the support link.`
    }
];
export function PricingPage() {
    let { offer, loaded } = __1();
    v.useEffect(()=>{
        m();
    }, []);
    let rRef = v.useRef(null);
    let cRef = v.useRef(null);
    v.useEffect(()=>{
        let e = document.referrer ? new URL(document.referrer) : null;
        let from = F ?? (e ? e.host === window.location.host ? e.pathname : `ext ${e.hostname}` : `direct`);
        A(`Pricing view`, {
            from
        });
        let n = new Set;
        let o = new IntersectionObserver((e)=>e.forEach((e)=>{
                let part = e.target.dataset.part;
                if (e.isIntersecting && !n.has(part)) {
                    n.add(part);
                    A(`Pricing scroll`, {
                        from: part
                    });
                }
            }), {
            threshold: 0.6
        });
        [
            rRef.current,
            cRef.current
        ].forEach((e)=>e && o.observe(e));
        return ()=>o.disconnect();
    }, []);
    let length = Z.filter((e)=>!e.pro).length;
    return <div className={`pricing`}><header className={`pricing__head`}><h1 className={`pricing__title`}>{`Pricing`}</h1><p className={`pricing__sub`}>{`Pay once, keep everything. `}{length}{` items are free forever, Pro unlocks the rest.`}</p></header><div className={`tiers`} ref={rRef} data-part={`plans`}><article className={`tier`}><h2 className={`tier__name`}>{`Free`}</h2><div><MComponent amount={0} per={`forever`}/><div className={`tier__pills`}><span className={`pill`}>{length}{` free items`}</span></div></div><hr className={`tier__divider`}/><ul className={`tier__features`}><PComponent>{length}{` free items, yours to keep`}</PComponent><PComponent>{`Copy, shadcn CLI or MCP for Claude, Cursor and Codex`}</PComponent><PComponent>{`Live previews for everything`}</PComponent><PComponent>{`Light and dark themes`}</PComponent><PComponent>{`Community support`}</PComponent></ul><M to={`/components`} className={`tier__cta tier__cta--secondary`}>{`Browse components`}</M></article><article className={`tier tier--pro`}><h2 className={`tier__name`}>{`Individual`}{offer && <span className={`pill pill--pro tier__badge-pill`}>{offer.badge}</span>}</h2><div><MComponent amount={offer ? offer.price : i.individual} was={offer ? i.individual : undefined} per={`once`}/>{offer ? <div className={`founder`}><div className={`founder__bar`} aria-hidden={`true`}><span style={{
        width: `${((offer.until - (loaded ? offer.left : offer.until)) / offer.until * 100).toFixed(1)}%`
    }}/></div><span className={`founder__label`}>{loaded ? `${offer.left} of ${offer.until} ${offer.id === `founder` ? `founder spots` : `spots`} left` : `First ${offer.until} buyers`}{`, then `}{O(i.individual)}</span></div> : <div className={`tier__pills`}><span className={`pill pill--pro`}>{`All Pro items`}</span><span className={`pill`}>{`One-time purchase`}</span></div>}</div><hr className={`tier__divider`}/><ul className={`tier__features`}><PComponent>{`Everything in Free`}</PComponent><PComponent>{nt.length}{` complete app screens – agent runs, evals, chat, CRM, billing`}</PComponent><PComponent>{`All Pro components, blocks, illustrations and motion`}</PComponent><PComponent>{`Unlimited commercial projects`}</PComponent><PComponent>{`Lifetime updates`}</PComponent><PComponent>{`Access key for the CLI and the MCP server`}</PComponent><PComponent>{`Support within 24 hours`}</PComponent></ul><NComponent kind={`individual`}/></article><article className={`tier tier--team`}><h2 className={`tier__name`}>{`Team`}<span className={`pill pill--team tier__badge-pill`}>{i.teamSeats}{` seats`}</span></h2><div><MComponent amount={i.team} per={`once`}/><div className={`tier__pills`}><span className={`pill`}>{`$`}{(i.team / i.teamSeats).toFixed(2)}{` per seat`}</span><M to={`/contact?topic=enterprise`} className={`seats__more`}>{`More than `}{i.teamSeats}{` seats? Contact us`}</M></div></div><hr className={`tier__divider`}/><ul className={`tier__features`}><PComponent>{`Everything in Individual`}</PComponent><PComponent>{i.teamSeats}{` seats on one license`}</PComponent><PComponent>{`POs and custom invoicing`}</PComponent><PComponent>{`Priority component requests`}</PComponent><PComponent>{`Support within 12 hours`}</PComponent></ul><NComponent kind={`team`} seats={i.teamSeats}/></article></div><p className={`pricing__license`}>{`Client projects, agencies, SaaS – `}<M to={`/license`}>{`see what the license covers`}</M></p><div className={`guarantee`}><span className={`guarantee__icon`}><span className={`guarantee__tile`}><H icon={_} size={22}/></span></span><span className={`guarantee__rule`} aria-hidden={`true`}/><p><strong>{`Works as described, or your money back.`}</strong>{` If a Pro item doesn't do what its page says and we can't fix it within 14 days, you get a full refund. `}<M to={`/refund`}>{`Refund policy`}</M></p></div><AComponent/><TComponent price={offer ? offer.price : i.individual}/><JComponent/><section className={`review`} aria-label={`What customers say`}><figure className={`review__card`}><blockquote>{`“We rebuilt the core screens of recruitpilot with affectUI. Every component feels like a senior designer obsessed over it – the motion, the spacing, the dark mode – and it drops straight into our React app. We shipped in days what would have taken us weeks, and our users noticed right away.”`}</blockquote><figcaption><img src={`/avatars/mike.jpg`} alt={``} width={44} height={44}/><span><strong>{`Mike`}</strong><span>{`recruitpilot`}</span></span></figcaption></figure></section><section className={`faq`} aria-labelledby={`faq-title`} ref={cRef} data-part={`faq`}><h2 id={`faq-title`} className={`faq__title`}>{`FAQ`}</h2><P1 faqs={faqs}/></section></div>;
}
var O = (e)=>`$${e.toLocaleString(`en-US`)}`;
const k = ()=>{
    let e = new Date;
    return new Date(e.getFullYear(), e.getMonth(), e.getDate() - (e.getDay() + 6) % 7).getTime();
};
function AComponent() {
    let e = [
        `assistant-home`,
        `integrations`,
        `crm`
    ].map((e)=>nt.find((t)=>t.slug === e)).filter((e)=>e !== undefined);
    return <section className={`fresh fresh--screens`} aria-labelledby={`screens-title`}><div className={`fresh__head`}><h2 id={`screens-title`}>{nt.length}{` complete screens, included`}</h2><p>{`Whole app views for AI products, not just parts – plug in your data and ship the screen. All of them are part of Pro.`}</p></div><div className={`fresh__row`}>{e.map((e)=><M key={e.slug} to={N(e)} className={`fresh__item`}><span className={`fresh__shot`}><img src={`/previews/${e.slug}.webp`} alt={``} loading={`lazy`}/></span><span className={`fresh__name`}>{e.name}<span className={`pill pill--pro fresh__pro`}>{`Pro`}</span></span></M>)}</div><div className={`fresh__more`}><M to={`/screens`} className={`btn btn--secondary`}>{`Browse all `}{nt.length}{` screens`}</M></div></section>;
}
function JComponent() {
    let e = k();
    let t = Z.filter((t)=>t.added && Date.parse(t.added) >= e).sort((e, t)=>Date.parse(t.added) - Date.parse(e.added));
    let length = Z.filter((e)=>e.pro).length;
    if (t.length < 3) {
        return null;
    }
    return <section className={`fresh`} aria-labelledby={`fresh-title`}><div className={`fresh__head`}><h2 id={`fresh-title`}>{t.length}{` new this week`}</h2><p>{length}{` Pro items today, `}{Z.length - length}{` free – and the library grows every week. Everything new is included.`}</p></div><div className={`fresh__row`}>{t.slice(0, 6).map((e)=><M key={e.slug} to={N(e)} className={`fresh__item`}><span className={`fresh__shot`}><img src={`/previews/${e.slug}.webp`} alt={``} loading={`lazy`}/></span><span className={`fresh__name`}>{e.name}{e.pro && <span className={`pill pill--pro fresh__pro`}>{`Pro`}</span>}</span></M>)}</div></section>;
}
function MComponent({ amount, was, per, rolling }) {
    let i = O(amount);
    return <p className={`tier__price`} aria-label={`${i} ${per}${was ? `, was ${O(was)}` : ``}`}>{was && <s className={`tier__was`} aria-hidden={`true`}>{O(was)}</s>}<span className={`tier__amount`} aria-hidden={`true`}>{rolling ? i.split(``).map((e, t)=><span key={`${i.length - t}-${e}`} className={`price__digit`}>{e}</span>) : i}</span><span className={`tier__per`} aria-hidden={`true`}>{`/`}{per}</span></p>;
}
function NComponent({ kind, seats = 1 }) {
    let [n, setN] = v.useState(false);
    let [a, setA] = v.useState(null);
    return <div className={`tier__checkout`}><button type={`button`} className={`tier__cta tier__cta--primary`} disabled={n} onClick={async ()=>{
        A(`Plan click`, {
            plan: kind,
            item: `pricing`
        });
        setN(true);
        setA(null);
        try {
            await p(kind, seats);
        } catch (error) {
            let item = error instanceof Error ? error.message : `Checkout is not available right now.`;
            A(`Checkout error`, {
                plan: kind,
                item
            });
            setA(item);
            setN(false);
        }
    }}>{n ? `Opening checkout…` : `Get lifetime access`}</button>{a && <p className={`tier__error`} role={`alert`}>{a}</p>}</div>;
}
function PComponent({ children }) {
    return <li><span className={`tier__check`}><H icon={U} size={11}/></span><span>{children}</span></li>;
}
