// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t } from "./react-BkAXpnfr.jsx";
import { i, o } from "./site-D86YA7B9.jsx";
import { t as t_2 } from "./jsx-runtime-CTsRTJUX.jsx";
import { t as t_3 } from "./ArrowLeft01Icon-qNK3q5ZR.jsx";
import { H, M, P, h as h_1, j as L } from "./index-C4AVl5zi.jsx";
const u = t();
const d = t_2();
const f = {
  general: {
    title: `Get in touch`,
    sub: `Questions, feedback or ideas for new components – we reply within one business day.`,
    message: ``
  },
  support: {
    title: `Get help`,
    sub: `Tell us what you're stuck on and we'll get back to you within one business day.`,
    message: ``
  },
  enterprise: {
    title: `Talk to our team`,
    sub: `More than ${i.teamSeats} seats? Leave your details and we'll get back to you with a custom license.`,
    message: `Hi, we'd like a team license for more than ${i.teamSeats} people.`
  }
};
export function ContactPage() {
  let [e] = u.useState(() => {
    let e = new URLSearchParams(window.location.search).get(`topic`);
    if (e === `enterprise` || e === `support`) {
      return e;
    }
    return `general`;
  });
  let r = f[e];
  let [p, setP] = u.useState(``);
  let [h, setH] = u.useState(``);
  let [_, set_] = u.useState(``);
  let [y, setY] = u.useState(String(i.teamSeats + 5));
  let [x, setX] = u.useState(r.message);
  let [C, setC] = u.useState(``);
  let [T, setT] = u.useState(`idle`);
  let [D, setD] = u.useState(null);
  let k = p.trim().length > 0 && /^\S+@\S+\.\S+$/.test(h);
  return <div className={`login`}><button className={`btn btn--ghost login__back`} onClick={() => {
      if (window.history.length > 1) {
        return window.history.back();
      }
      return P(`/pricing`);
    }}><H icon={t_3} size={14} />{`Back`}</button><div className={`login__card`}><L size={28} className={`login__mark`} /><h1 className={`login__title`}>{r.title}</h1><p className={`login__sub`}>{r.sub}</p>{T === `sent` ? <div className={`login__sent`} role={`status`}><strong>{`Thanks, we got it`}</strong><span>{`We'll reply to `}{h}{` within one business day.`}</span><M to={`/pricing`} className={`btn btn--ghost`}>{`Back to pricing`}</M></div> : <form className={`login__form`} onSubmit={async t => {
        t.preventDefault();
        if (k && T !== `sending`) {
          setT(`sending`);
          setD(null);
          try {
            let t = await fetch(`/api/contact`, {
              method: `POST`,
              headers: {
                "Content-Type": `application/json`
              },
              body: JSON.stringify({
                topic: e,
                name: p,
                email: h,
                company: _,
                seats: y,
                message: x,
                website: C
              })
            });
            let n = await t.json().catch(() => ({}));
            if (!t.ok) {
              throw Error(n.error ?? `Could not send your request. Please try again.`);
            }
            h_1(e);
            setT(`sent`);
          } catch (error) {
            setD(error instanceof Error ? error.message : `Could not send your request. Please try again.`);
            setT(`idle`);
          }
        }
      }}><label className={`login__field`}><span>{`Name`}</span><input value={p} onChange={e => setP(e.target.value)} placeholder={`Jane Doe`} autoComplete={`name`} autoFocus required maxLength={120} /></label><label className={`login__field`}><span>{`Email`}</span><input type={`email`} value={h} onChange={e => setH(e.target.value)} placeholder={`you@example.com`} autoComplete={`email`} required maxLength={200} /></label>{e === `enterprise` ? <div className={`contact__row`}><label className={`login__field`}><span>{`Company`}</span><input value={_} onChange={e => set_(e.target.value)} placeholder={`Acme Inc.`} autoComplete={`organization`} maxLength={160} /></label><label className={`login__field`}><span>{`Seats`}</span><input type={`number`} inputMode={`numeric`} min={i.teamSeats + 1} value={y} onChange={e => setY(e.target.value)} /></label></div> : null}<input className={`contact__trap`} tabIndex={-1} autoComplete={`off`} aria-hidden={`true`} value={C} onChange={e => setC(e.target.value)} name={`website`} /><label className={`login__field`}><span>{`Message`}</span><textarea value={x} onChange={e => setX(e.target.value)} rows={4} maxLength={4000} placeholder={e === `enterprise` ? undefined : `How can we help?`} /></label><button className={`tier__cta tier__cta--primary login__submit`} type={`submit`} disabled={!k || T === `sending`}>{T === `sending` ? `Sending…` : `Send request`}</button>{D && <p className={`login__error`}>{D}</p>}</form>}<p className={`login__legal`}>{e === `enterprise` ? <>{`Up to `}{i.teamSeats}{` seats you can buy right away on `}<M to={`/pricing`}>{`Pricing`}</M>{`.`}</> : <>{`Prefer email? Write to `}<a href={`mailto:${o.contactEmail}`}>{o.contactEmail}</a></>}</p></div></div>;
}
