// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { i, o } from "./site-D86YA7B9.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
import { H, M, U, Y, n as S } from "./index-C4AVl5zi.jsx";
import { owner } from "./LegalPage-zAor_usS.jsx";
const l = t();
const u = [`Use Pro items in unlimited personal, commercial and client projects`, `Change, extend and restyle the code however you like`, `Ship it inside finished products – websites, apps, SaaS, client work`, `Keep Pro code in private repositories, including one per client`, `Build an internal base or starter your team reuses across projects`, `Get every Pro item we add later at no extra cost`];
const d = [`Publishing Pro source on its own, for example in a public repository`, `Selling or giving away Pro items as a UI kit, template or component library`, `Building a page builder, design tool or similar product for others with Pro items`, `Sharing your license, seat or access key, or using one seat for several people`];
const f = [{
  title: `Agency with one app per client`,
  text: `You build every client app from a shared internal base. Each client gets their own deployment and a private repo.`,
  ok: true
}, {
  title: `Your own SaaS product`,
  text: `Pro components power the interface of a product you sell. Your customers use it without a license.`,
  ok: true
}, {
  title: `Freelance website for a client`,
  text: `You hand over the finished site and its code. The client may keep developing their site.`,
  ok: true
}, {
  title: `Open source project`,
  text: `The repository is public, so the Pro source would be published on its own. Use the free items there instead.`,
  ok: false
}, {
  title: `Template or UI kit for sale`,
  text: `Selling themes, starters or kits that contain Pro items passes the source on to other developers.`,
  ok: false
}, {
  title: `Website or page builder`,
  text: `A tool whose main purpose is letting others create interfaces with Pro items is not covered.`,
  ok: false
}];
const faqs = [{
  q: `Do the people using my app or my clients need a license?`,
  a: `No. A license is only needed for the people who work with the Pro source code – designers and developers. Users of the finished product never need one.`
}, {
  q: `May my client keep developing the code after handover?`,
  a: `Yes, as part of their product. They may not pull the Pro components out and share, sell or publish them on their own. If their own developers want to use Pro items in new projects, they need their own license.`
}, {
  q: `Which plan do I need for a team?`,
  a: `Individual covers one person. As soon as two or more people work with the Pro code, take Team – it includes ${i.teamSeats} seats you can assign and reassign. For more than ${i.teamSeats} seats we set up a custom license.`
}, {
  q: `Are future Pro items included?`,
  a: `Yes. Your license covers every Pro item we add later, with no extra payment.`
}, {
  q: `What happens to shipped projects after a refund?`,
  a: `Products you already shipped may keep their Pro code. Remove Pro source from anything that isn't shipped yet; the free items stay yours.`
}, {
  q: `My case isn't listed here – what now?`,
  a: `Write to us before you buy and describe what you're building. If your case needs a custom license, we'll set it up.`
}];
export function LicensePage() {
  return <article className={`legal license`}><header className={`legal__head`}><h1 className={`legal__title`}>{`License`}</h1><p className={`legal__lead`}>{`What you can do with `}{o.name}{` Pro – in plain words, with examples, so you know before you buy.`}</p></header><div className={`legal__body`}><div className={`legal__summary`}><strong>{`One payment, unlimited projects – also for your clients.`}</strong>{` Use and change Pro items in anything you build and ship. The only thing you can't do is pass on the Pro source itself.`}</div><h2>{`What's allowed and what isn't`}</h2><div className={`license__rules`}><section className={`license__col`} data-ok><h3>{`You can`}</h3><ul>{u.map(e => <li key={e}><span className={`license__mark`}><H icon={U} size={12} /></span>{e}</li>)}</ul></section><section className={`license__col`}><h3>{`You can't`}</h3><ul>{d.map(e => <li key={e}><span className={`license__mark`}><H icon={Y} size={12} /></span>{e}</li>)}</ul></section></div><h2>{`Common cases`}</h2><div className={`license__cases`}>{f.map(e => <section key={e.title} className={`license__case`} data-ok={e.ok || undefined}><span className={`license__verdict`}><H icon={e.ok ? U : Y} size={12} />{e.ok ? `Covered` : `Not covered`}</span><h3>{e.title}</h3><p>{e.text}</p></section>)}</div><h2>{`Seats`}</h2><p>{`A seat is one designer or developer who works with the Pro source. `}<strong>{`Individual`}</strong>{` covers one person.`}{` `}<strong>{`Team`}</strong>{` covers `}{i.teamSeats}{` seats; the buyer decides who holds them and can reassign a seat when someone leaves. Need more than `}{i.teamSeats}{`? `}<M to={`/contact?topic=enterprise`}>{`Contact us`}</M>{` for a custom license.`}</p><h2>{`Questions`}</h2></div><div className={`license__faq`}><S faqs={faqs} defaultOpen={null} /></div><footer className={`legal__foot`}><nav aria-label={`More`}><M to={`/pricing`}>{`Pricing`}</M><M to={`/terms`}>{`Terms`}</M><M to={`/refund`}>{`Refund`}</M></nav><p>{`This page explains the license in plain words. The binding version is section 5 of our`}{` `}<M to={`/terms`}>{`Terms of Service`}</M>{`. Not sure about your case? `}<M to={`/contact`}>{`Contact us`}</M>{` or write to `}<a href={`mailto:${owner.email}`}>{owner.email}</a>{`.`}</p></footer></article>;
}
