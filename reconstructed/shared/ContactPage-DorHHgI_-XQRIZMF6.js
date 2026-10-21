import {
  t as t2
} from "./chunk-YTXPIDO7.js";
import {
  FaComponent,
  J1Component,
  M,
  Ps,
  ga,
  i2 as i,
  t
} from "./chunk-PUFXUNH5.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  Fragment,
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";
import "./chunk-JTXQSSYA.js";
import "./chunk-CTH3ASD6.js";

// reconstructed/ContactPage-DorHHgI_.jsx
init_react_BkAXpnfr();
var u = n();
var d = n2();
var f = {
  general: {
    title: `Get in touch`,
    sub: `Questions, feedback or ideas for new components \u2013 we reply within one business day.`,
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
function ContactPage() {
  let [e] = u.useState(() => {
    let e2 = new URLSearchParams(window.location.search).get(`topic`);
    if (e2 === `enterprise` || e2 === `support`) {
      return e2;
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
  return /* @__PURE__ */ jsxs("div", { className: `login`, children: [
    /* @__PURE__ */ jsxs("button", { className: `btn btn--ghost login__back`, onClick: () => {
      if (window.history.length > 1) {
        return window.history.back();
      }
      return ga(`/pricing`);
    }, children: [
      /* @__PURE__ */ jsx(J1Component, { icon: t2, size: 14 }),
      `Back`
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `login__card`, children: [
      /* @__PURE__ */ jsx(FaComponent, { size: 28, className: `login__mark` }),
      /* @__PURE__ */ jsx("h1", { className: `login__title`, children: r.title }),
      /* @__PURE__ */ jsx("p", { className: `login__sub`, children: r.sub }),
      T === `sent` ? /* @__PURE__ */ jsxs("div", { className: `login__sent`, role: `status`, children: [
        /* @__PURE__ */ jsx("strong", { children: `Thanks, we got it` }),
        /* @__PURE__ */ jsxs("span", { children: [
          `We'll reply to `,
          h,
          ` within one business day.`
        ] }),
        /* @__PURE__ */ jsx(M, { to: `/pricing`, className: `btn btn--ghost`, children: `Back to pricing` })
      ] }) : /* @__PURE__ */ jsxs("form", { className: `login__form`, onSubmit: async (t3) => {
        t3.preventDefault();
        if (k && T !== `sending`) {
          setT(`sending`);
          setD(null);
          try {
            let t4 = await fetch(`/api/contact`, {
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
            let n3 = await t4.json().catch(() => ({}));
            if (!t4.ok) {
              throw Error(n3.error ?? `Could not send your request. Please try again.`);
            }
            Ps(e);
            setT(`sent`);
          } catch (error) {
            setD(error instanceof Error ? error.message : `Could not send your request. Please try again.`);
            setT(`idle`);
          }
        }
      }, children: [
        /* @__PURE__ */ jsxs("label", { className: `login__field`, children: [
          /* @__PURE__ */ jsx("span", { children: `Name` }),
          /* @__PURE__ */ jsx("input", { value: p, onChange: (e2) => setP(e2.target.value), placeholder: `Jane Doe`, autoComplete: `name`, autoFocus: true, required: true, maxLength: 120 })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: `login__field`, children: [
          /* @__PURE__ */ jsx("span", { children: `Email` }),
          /* @__PURE__ */ jsx("input", { type: `email`, value: h, onChange: (e2) => setH(e2.target.value), placeholder: `you@example.com`, autoComplete: `email`, required: true, maxLength: 200 })
        ] }),
        e === `enterprise` ? /* @__PURE__ */ jsxs("div", { className: `contact__row`, children: [
          /* @__PURE__ */ jsxs("label", { className: `login__field`, children: [
            /* @__PURE__ */ jsx("span", { children: `Company` }),
            /* @__PURE__ */ jsx("input", { value: _, onChange: (e2) => set_(e2.target.value), placeholder: `Acme Inc.`, autoComplete: `organization`, maxLength: 160 })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: `login__field`, children: [
            /* @__PURE__ */ jsx("span", { children: `Seats` }),
            /* @__PURE__ */ jsx("input", { type: `number`, inputMode: `numeric`, min: i.teamSeats + 1, value: y, onChange: (e2) => setY(e2.target.value) })
          ] })
        ] }) : null,
        /* @__PURE__ */ jsx("input", { className: `contact__trap`, tabIndex: -1, autoComplete: `off`, "aria-hidden": `true`, value: C, onChange: (e2) => setC(e2.target.value), name: `website` }),
        /* @__PURE__ */ jsxs("label", { className: `login__field`, children: [
          /* @__PURE__ */ jsx("span", { children: `Message` }),
          /* @__PURE__ */ jsx("textarea", { value: x, onChange: (e2) => setX(e2.target.value), rows: 4, maxLength: 4e3, placeholder: e === `enterprise` ? void 0 : `How can we help?` })
        ] }),
        /* @__PURE__ */ jsx("button", { className: `tier__cta tier__cta--primary login__submit`, type: `submit`, disabled: !k || T === `sending`, children: T === `sending` ? `Sending\u2026` : `Send request` }),
        D && /* @__PURE__ */ jsx("p", { className: `login__error`, children: D })
      ] }),
      /* @__PURE__ */ jsx("p", { className: `login__legal`, children: e === `enterprise` ? /* @__PURE__ */ jsxs(Fragment, { children: [
        `Up to `,
        i.teamSeats,
        ` seats you can buy right away on `,
        /* @__PURE__ */ jsx(M, { to: `/pricing`, children: `Pricing` }),
        `.`
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        `Prefer email? Write to `,
        /* @__PURE__ */ jsx("a", { href: `mailto:${t.contactEmail}`, children: t.contactEmail })
      ] }) })
    ] })
  ] });
}
export {
  ContactPage
};
