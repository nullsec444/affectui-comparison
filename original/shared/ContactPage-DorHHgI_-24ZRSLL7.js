import {
  e
} from "./chunk-JFKWZ3CE.js";
import {
  Fa,
  I,
  Ps,
  ga,
  i2 as i,
  j,
  t
} from "./chunk-JMKFK6OM.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/ContactPage-DorHHgI_.js
init_react_BkAXpnfr();
var u = n();
var d = n2();
var f = { general: { title: `Get in touch`, sub: `Questions, feedback or ideas for new components \u2013 we reply within one business day.`, message: `` }, support: { title: `Get help`, sub: `Tell us what you're stuck on and we'll get back to you within one business day.`, message: `` }, enterprise: { title: `Talk to our team`, sub: `More than ${i.teamSeats} seats? Leave your details and we'll get back to you with a custom license.`, message: `Hi, we'd like a team license for more than ${i.teamSeats} people.` } };
function p() {
  let [e2] = (0, u.useState)(() => {
    let e3 = new URLSearchParams(window.location.search).get(`topic`);
    return e3 === `enterprise` || e3 === `support` ? e3 : `general`;
  }), r = f[e2], [p2, m] = (0, u.useState)(``), [h, g] = (0, u.useState)(``), [_, v] = (0, u.useState)(``), [y, b] = (0, u.useState)(String(i.teamSeats + 5)), [x, S] = (0, u.useState)(r.message), [C, w] = (0, u.useState)(``), [T, E] = (0, u.useState)(`idle`), [D, O] = (0, u.useState)(null), k = p2.trim().length > 0 && /^\S+@\S+\.\S+$/.test(h);
  return (0, d.jsxs)(`div`, { className: `login`, children: [(0, d.jsxs)(`button`, { className: `btn btn--ghost login__back`, onClick: () => window.history.length > 1 ? window.history.back() : ga(`/pricing`), children: [(0, d.jsx)(j, { icon: e, size: 14 }), `Back`] }), (0, d.jsxs)(`div`, { className: `login__card`, children: [(0, d.jsx)(Fa, { size: 28, className: `login__mark` }), (0, d.jsx)(`h1`, { className: `login__title`, children: r.title }), (0, d.jsx)(`p`, { className: `login__sub`, children: r.sub }), T === `sent` ? (0, d.jsxs)(`div`, { className: `login__sent`, role: `status`, children: [(0, d.jsx)(`strong`, { children: `Thanks, we got it` }), (0, d.jsxs)(`span`, { children: [`We'll reply to `, h, ` within one business day.`] }), (0, d.jsx)(I, { to: `/pricing`, className: `btn btn--ghost`, children: `Back to pricing` })] }) : (0, d.jsxs)(`form`, { className: `login__form`, onSubmit: async (t2) => {
    if (t2.preventDefault(), k && T !== `sending`) {
      E(`sending`), O(null);
      try {
        let t3 = await fetch(`/api/contact`, { method: `POST`, headers: { "Content-Type": `application/json` }, body: JSON.stringify({ topic: e2, name: p2, email: h, company: _, seats: y, message: x, website: C }) }), n3 = await t3.json().catch(() => ({}));
        if (!t3.ok) throw Error(n3.error ?? `Could not send your request. Please try again.`);
        Ps(e2), E(`sent`);
      } catch (e3) {
        O(e3 instanceof Error ? e3.message : `Could not send your request. Please try again.`), E(`idle`);
      }
    }
  }, children: [(0, d.jsxs)(`label`, { className: `login__field`, children: [(0, d.jsx)(`span`, { children: `Name` }), (0, d.jsx)(`input`, { value: p2, onChange: (e3) => m(e3.target.value), placeholder: `Jane Doe`, autoComplete: `name`, autoFocus: true, required: true, maxLength: 120 })] }), (0, d.jsxs)(`label`, { className: `login__field`, children: [(0, d.jsx)(`span`, { children: `Email` }), (0, d.jsx)(`input`, { type: `email`, value: h, onChange: (e3) => g(e3.target.value), placeholder: `you@example.com`, autoComplete: `email`, required: true, maxLength: 200 })] }), e2 === `enterprise` ? (0, d.jsxs)(`div`, { className: `contact__row`, children: [(0, d.jsxs)(`label`, { className: `login__field`, children: [(0, d.jsx)(`span`, { children: `Company` }), (0, d.jsx)(`input`, { value: _, onChange: (e3) => v(e3.target.value), placeholder: `Acme Inc.`, autoComplete: `organization`, maxLength: 160 })] }), (0, d.jsxs)(`label`, { className: `login__field`, children: [(0, d.jsx)(`span`, { children: `Seats` }), (0, d.jsx)(`input`, { type: `number`, inputMode: `numeric`, min: i.teamSeats + 1, value: y, onChange: (e3) => b(e3.target.value) })] })] }) : null, (0, d.jsx)(`input`, { className: `contact__trap`, tabIndex: -1, autoComplete: `off`, "aria-hidden": `true`, value: C, onChange: (e3) => w(e3.target.value), name: `website` }), (0, d.jsxs)(`label`, { className: `login__field`, children: [(0, d.jsx)(`span`, { children: `Message` }), (0, d.jsx)(`textarea`, { value: x, onChange: (e3) => S(e3.target.value), rows: 4, maxLength: 4e3, placeholder: e2 === `enterprise` ? void 0 : `How can we help?` })] }), (0, d.jsx)(`button`, { className: `tier__cta tier__cta--primary login__submit`, type: `submit`, disabled: !k || T === `sending`, children: T === `sending` ? `Sending\u2026` : `Send request` }), D && (0, d.jsx)(`p`, { className: `login__error`, children: D })] }), (0, d.jsx)(`p`, { className: `login__legal`, children: e2 === `enterprise` ? (0, d.jsxs)(d.Fragment, { children: [`Up to `, i.teamSeats, ` seats you can buy right away on `, (0, d.jsx)(I, { to: `/pricing`, children: `Pricing` }), `.`] }) : (0, d.jsxs)(d.Fragment, { children: [`Prefer email? Write to `, (0, d.jsx)(`a`, { href: `mailto:${t.contactEmail}`, children: t.contactEmail })] }) })] })] });
}
export {
  p as ContactPage
};
