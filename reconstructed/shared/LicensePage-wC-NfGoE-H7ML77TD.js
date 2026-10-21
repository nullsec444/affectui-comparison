import {
  owner
} from "./chunk-ILMVYBDI.js";
import {
  Ii,
  J1Component,
  M,
  QcComponent,
  Qi,
  i2 as i,
  t
} from "./chunk-JMTRCM7A.js";
import "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n
} from "./chunk-57INBORX.js";
import "./chunk-JTXQSSYA.js";
import "./chunk-CTH3ASD6.js";

// reconstructed/LicensePage-wC-NfGoE.jsx
var l = n();
var u = [`Use Pro items in unlimited personal, commercial and client projects`, `Change, extend and restyle the code however you like`, `Ship it inside finished products \u2013 websites, apps, SaaS, client work`, `Keep Pro code in private repositories, including one per client`, `Build an internal base or starter your team reuses across projects`, `Get every Pro item we add later at no extra cost`];
var d = [`Publishing Pro source on its own, for example in a public repository`, `Selling or giving away Pro items as a UI kit, template or component library`, `Building a page builder, design tool or similar product for others with Pro items`, `Sharing your license, seat or access key, or using one seat for several people`];
var f = [{
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
var faqs = [{
  q: `Do the people using my app or my clients need a license?`,
  a: `No. A license is only needed for the people who work with the Pro source code \u2013 designers and developers. Users of the finished product never need one.`
}, {
  q: `May my client keep developing the code after handover?`,
  a: `Yes, as part of their product. They may not pull the Pro components out and share, sell or publish them on their own. If their own developers want to use Pro items in new projects, they need their own license.`
}, {
  q: `Which plan do I need for a team?`,
  a: `Individual covers one person. As soon as two or more people work with the Pro code, take Team \u2013 it includes ${i.teamSeats} seats you can assign and reassign. For more than ${i.teamSeats} seats we set up a custom license.`
}, {
  q: `Are future Pro items included?`,
  a: `Yes. Your license covers every Pro item we add later, with no extra payment.`
}, {
  q: `What happens to shipped projects after a refund?`,
  a: `Products you already shipped may keep their Pro code. Remove Pro source from anything that isn't shipped yet; the free items stay yours.`
}, {
  q: `My case isn't listed here \u2013 what now?`,
  a: `Write to us before you buy and describe what you're building. If your case needs a custom license, we'll set it up.`
}];
function LicensePage() {
  return /* @__PURE__ */ jsxs("article", { className: `legal license`, children: [
    /* @__PURE__ */ jsxs("header", { className: `legal__head`, children: [
      /* @__PURE__ */ jsx("h1", { className: `legal__title`, children: `License` }),
      /* @__PURE__ */ jsxs("p", { className: `legal__lead`, children: [
        `What you can do with `,
        t.name,
        ` Pro \u2013 in plain words, with examples, so you know before you buy.`
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `legal__body`, children: [
      /* @__PURE__ */ jsxs("div", { className: `legal__summary`, children: [
        /* @__PURE__ */ jsx("strong", { children: `One payment, unlimited projects \u2013 also for your clients.` }),
        ` Use and change Pro items in anything you build and ship. The only thing you can't do is pass on the Pro source itself.`
      ] }),
      /* @__PURE__ */ jsx("h2", { children: `What's allowed and what isn't` }),
      /* @__PURE__ */ jsxs("div", { className: `license__rules`, children: [
        /* @__PURE__ */ jsxs("section", { className: `license__col`, "data-ok": true, children: [
          /* @__PURE__ */ jsx("h3", { children: `You can` }),
          /* @__PURE__ */ jsx("ul", { children: u.map((e) => /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: `license__mark`, children: /* @__PURE__ */ jsx(J1Component, { icon: Qi, size: 12 }) }),
            e
          ] }, e)) })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: `license__col`, children: [
          /* @__PURE__ */ jsx("h3", { children: `You can't` }),
          /* @__PURE__ */ jsx("ul", { children: d.map((e) => /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: `license__mark`, children: /* @__PURE__ */ jsx(J1Component, { icon: Ii, size: 12 }) }),
            e
          ] }, e)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { children: `Common cases` }),
      /* @__PURE__ */ jsx("div", { className: `license__cases`, children: f.map((e) => /* @__PURE__ */ jsxs("section", { className: `license__case`, "data-ok": e.ok || void 0, children: [
        /* @__PURE__ */ jsxs("span", { className: `license__verdict`, children: [
          /* @__PURE__ */ jsx(J1Component, { icon: e.ok ? Qi : Ii, size: 12 }),
          e.ok ? `Covered` : `Not covered`
        ] }),
        /* @__PURE__ */ jsx("h3", { children: e.title }),
        /* @__PURE__ */ jsx("p", { children: e.text })
      ] }, e.title)) }),
      /* @__PURE__ */ jsx("h2", { children: `Seats` }),
      /* @__PURE__ */ jsxs("p", { children: [
        `A seat is one designer or developer who works with the Pro source. `,
        /* @__PURE__ */ jsx("strong", { children: `Individual` }),
        ` covers one person.`,
        ` `,
        /* @__PURE__ */ jsx("strong", { children: `Team` }),
        ` covers `,
        i.teamSeats,
        ` seats; the buyer decides who holds them and can reassign a seat when someone leaves. Need more than `,
        i.teamSeats,
        `? `,
        /* @__PURE__ */ jsx(M, { to: `/contact?topic=enterprise`, children: `Contact us` }),
        ` for a custom license.`
      ] }),
      /* @__PURE__ */ jsx("h2", { children: `Questions` })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `license__faq`, children: /* @__PURE__ */ jsx(QcComponent, { faqs, defaultOpen: null }) }),
    /* @__PURE__ */ jsxs("footer", { className: `legal__foot`, children: [
      /* @__PURE__ */ jsxs("nav", { "aria-label": `More`, children: [
        /* @__PURE__ */ jsx(M, { to: `/pricing`, children: `Pricing` }),
        /* @__PURE__ */ jsx(M, { to: `/terms`, children: `Terms` }),
        /* @__PURE__ */ jsx(M, { to: `/refund`, children: `Refund` })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        `This page explains the license in plain words. The binding version is section 5 of our`,
        ` `,
        /* @__PURE__ */ jsx(M, { to: `/terms`, children: `Terms of Service` }),
        `. Not sure about your case? `,
        /* @__PURE__ */ jsx(M, { to: `/contact`, children: `Contact us` }),
        ` or write to `,
        /* @__PURE__ */ jsx("a", { href: `mailto:${owner.email}`, children: owner.email }),
        `.`
      ] })
    ] })
  ] });
}
export {
  LicensePage
};
