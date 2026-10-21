import {
  M,
  i2 as i,
  t
} from "./chunk-JMTRCM7A.js";
import {
  Fragment,
  jsx,
  jsxs,
  n
} from "./chunk-57INBORX.js";

// reconstructed/LegalPage-Bm3lx0aM.jsx
var i2 = n();
var owner = {
  name: `Florian H\xF6ller`,
  trade: `adfects`,
  street: `Romana Dmowskiego 1b/40`,
  city: `50-203 Wroc\u0142aw`,
  country: `Poland`,
  email: `hello@affectui.com`,
  phone: `+48 608 678 868`,
  vat: `PL8982328320`
};
var o = `October 20, 2026`;
var SComponent = () => /* @__PURE__ */ jsx("a", { href: `mailto:${owner.email}`, children: owner.email });
var CComponent = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  owner.name,
  `, trading as `,
  owner.trade,
  `, `,
  owner.street,
  `, `,
  owner.city,
  `, `,
  owner.country,
  `, VAT ID `,
  owner.vat
] });
var l = {
  terms: {
    title: `Terms of Service`,
    lead: `The rules for using ${t.name} and for buying a Pro license. Written to be read, not skimmed past.`,
    body: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h2", { children: `1. Who we are` }),
      /* @__PURE__ */ jsxs("p", { children: [
        t.name,
        ` is run by `,
        /* @__PURE__ */ jsx(CComponent, {}),
        `. In these terms, \u201Cwe\u201D and \u201Cus\u201D means this business, and \u201Cyou\u201D means the person or company using the site or buying a license. You can reach us at `,
        /* @__PURE__ */ jsx(SComponent, {}),
        `.`
      ] }),
      /* @__PURE__ */ jsx("h2", { children: `2. What these terms cover` }),
      /* @__PURE__ */ jsx("p", { children: `These terms apply to the website, the free components, blocks and illustrations, the Pro license, your account and the shadcn registry we run. By creating an account or buying a license you agree to them. If you buy for a company, you confirm that you may accept these terms on its behalf.` }),
      /* @__PURE__ */ jsx("h2", { children: `3. Your account` }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: `You sign in with a link sent to your email. Keep access to that inbox safe \u2013 whoever controls it controls the account.` }),
        /* @__PURE__ */ jsx("li", { children: `Your personal access key for the CLI is yours alone. Don't share it, and create a new one if it leaks.` }),
        /* @__PURE__ */ jsx("li", { children: `You must be at least 16 years old, or the age of digital consent where you live.` })
      ] }),
      /* @__PURE__ */ jsx("h2", { children: `4. Free items` }),
      /* @__PURE__ */ jsx("p", { children: `Items marked as free are open source under the MIT license and published in our public GitHub repository. You may use, change and ship them in personal and commercial projects, as long as the license notice stays with the code.` }),
      /* @__PURE__ */ jsx("h2", { children: `5. The Pro license` }),
      /* @__PURE__ */ jsx("p", { children: `A Pro purchase gives you a lasting, non-exclusive license to the source code of every Pro item, including the ones we add later.` }),
      /* @__PURE__ */ jsxs("p", { children: [
        `The `,
        /* @__PURE__ */ jsx(M, { to: `/license`, children: `License page` }),
        ` explains this section in plain words, with common cases.`
      ] }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: `Individual` }),
          ` covers one person. `,
          /* @__PURE__ */ jsx("strong", { children: `Team` }),
          ` covers `,
          i.teamSeats,
          ` seats; the buyer manages who holds a seat.`
        ] }),
        /* @__PURE__ */ jsx("li", { children: `Use Pro items in as many personal, commercial and client projects as you like, and change them freely.` }),
        /* @__PURE__ */ jsx("li", { children: `Ship them as part of a finished product \u2013 a website, an app, a client project. People using that product don't need a license.` })
      ] }),
      /* @__PURE__ */ jsx("p", { children: `What the license does not allow:` }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: `Selling, sharing or publishing Pro source on its own \u2013 for example in a public repository, a UI kit, a template marketplace or a component library.` }),
        /* @__PURE__ */ jsx("li", { children: `Building a product whose main purpose is to let others create interfaces with Pro items, such as a page builder or a design tool.` }),
        /* @__PURE__ */ jsx("li", { children: `Passing your license, seat or access key to someone else, or using one seat for several people.` })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        `\u201CLifetime\u201D means for as long as we run `,
        t.name,
        `. If we ever stop, you keep the right to use everything you received until then.`
      ] }),
      /* @__PURE__ */ jsx("h2", { children: `6. Logos and third-party content` }),
      /* @__PURE__ */ jsx("p", { children: `Some previews show logos of other companies, such as Figma, Slack or Stripe, as sample content. Those marks belong to their owners and are not part of any license we give. Replace them before you ship, or make sure you may use them.` }),
      /* @__PURE__ */ jsx("h2", { children: `7. Prices and payment` }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: `Prices are one-time payments in US dollars, shown on the pricing page. Any tax that applies is shown at checkout.` }),
        /* @__PURE__ */ jsx("li", { children: `Payments are handled by Stripe. We never see or store your full card details.` }),
        /* @__PURE__ */ jsx("li", { children: `The contract is made when the payment succeeds. Your access starts right after that, and you receive a receipt by email.` }),
        /* @__PURE__ */ jsx("li", { children: `We may change prices for future purchases; a price you paid never changes afterwards.` })
      ] }),
      /* @__PURE__ */ jsx("h2", { children: `8. Right of withdrawal and refunds` }),
      /* @__PURE__ */ jsxs("p", { children: [
        `Pro is digital content you get immediately. At checkout you ask for immediate access and confirm you know that your 14-day right of withdrawal ends once access starts. Your statutory rights if something doesn't work as described stay unaffected. Details are in the `,
        /* @__PURE__ */ jsx(M, { to: `/refund`, children: `refund policy` }),
        `.`
      ] }),
      /* @__PURE__ */ jsx("h2", { children: `9. Fair use of the site` }),
      /* @__PURE__ */ jsx("p", { children: `Don't try to get Pro source without a license, overload or scrape the site or registry, or get around access controls. We may suspend accounts that break these terms or the license; we will tell you why and, unless the breach is serious, give you a chance to fix it first.` }),
      /* @__PURE__ */ jsx("h2", { children: `10. Our components and your projects` }),
      /* @__PURE__ */ jsx("p", { children: `We build every item with care and test it in current browsers. Still, you decide where you use it: please test it in your project, including accessibility and security for your use case. We keep the site and registry running as well as we can but can't promise they are never down.` }),
      /* @__PURE__ */ jsx("h2", { children: `11. Liability` }),
      /* @__PURE__ */ jsx("p", { children: `We are fully liable for damage caused on purpose or by gross negligence, and for harm to life, body or health. For anything else, our total liability is limited to the amount you paid us in the 12 months before the claim, and we are not liable for lost profit or indirect damage. None of this limits rights that consumers have by law and that cannot be excluded.` }),
      /* @__PURE__ */ jsx("h2", { children: `12. Changes to these terms` }),
      /* @__PURE__ */ jsx("p", { children: `We may update these terms, for example when we add features or the law changes. We'll email you about important changes at least 30 days before they apply. Changes never take away rights you already paid for.` }),
      /* @__PURE__ */ jsx("h2", { children: `13. Law and disputes` }),
      /* @__PURE__ */ jsx("p", { children: `Polish law applies. If you are a consumer, you also keep the protection of the mandatory laws of the country you live in, and you may bring a claim in your own country. For businesses, the courts of Wroc\u0142aw are responsible. If something goes wrong, please write to us first \u2013 most things are solved in a day.` })
    ] })
  },
  privacy: {
    title: `Privacy Policy`,
    lead: `What we collect, why, who helps us, and what you can ask for. Short version: as little as possible \u2013 and analytics and ad measurement only if you say yes.`,
    body: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h2", { children: `1. Who is responsible` }),
      /* @__PURE__ */ jsxs("p", { children: [
        `The controller under the GDPR is `,
        /* @__PURE__ */ jsx(CComponent, {}),
        `. Questions about your data go to `,
        /* @__PURE__ */ jsx(SComponent, {}),
        `.`
      ] }),
      /* @__PURE__ */ jsx("h2", { children: `2. What we collect and why` }),
      /* @__PURE__ */ jsx("h3", { children: `Visiting the site` }),
      /* @__PURE__ */ jsx("p", { children: `Our host Vercel processes technical data such as IP address, browser and the pages requested, to deliver the site and keep it secure. We count page views with Vercel Web Analytics, which works without cookies and shows us only aggregated numbers. Legal basis: our legitimate interest in a working, secure site (Art. 6(1)(f) GDPR). The font is served from our own domain, so no data goes to font providers.` }),
      /* @__PURE__ */ jsx("p", { children: `To see which items are popular, we count when a component's code or install command is copied and when an item is installed with the CLI. We store only the item, the kind of action and the time \u2013 no IP address, no account, nothing that identifies you. Legal basis: our legitimate interest in improving the library (Art. 6(1)(f) GDPR). This anonymous count covers the free items.` }),
      /* @__PURE__ */ jsx("h3", { children: `Analytics and ad measurement \u2013 only with your consent` }),
      /* @__PURE__ */ jsx("p", { children: `If you click \u201CAccept\u201D in the cookie banner, we use Google Analytics 4 by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. It sets cookies and records which pages you visit, how you got here, your device type, browser and approximate location (country and region), and steps such as opening the checkout, completing a purchase (amount and plan) or sending the contact form. We use this to understand how the site is used and to measure and improve our ads on Google. If you have Google's ad personalization turned on, Google may link the visit to your Google account (Google signals). Your IP address is not stored by Google Analytics. Legal basis: your consent (Art. 6(1)(a) GDPR, and for the cookies Art. 5(3) of the ePrivacy Directive as implemented in national law).` }),
      /* @__PURE__ */ jsxs("p", { children: [
        `With the same consent we use the Meta pixel by Meta Platforms Ireland Limited, Merrion Road, Dublin 4, Ireland. It sets cookies and tells Meta which pages you visit and the same steps (opening the checkout, a purchase with amount and plan, sending the contact form), together with your IP address and browser. When you buy, our server also reports the purchase directly to Meta (Conversions API) with your email address and country in hashed form, so Meta can link it to the ad you came from even if the pixel is blocked \u2013 this, too, only if you accepted cookies before checkout. We use this to measure our ads on Facebook and Instagram and to show them to people likely to be interested. If you have a Meta account, Meta may link the data to it. For collecting and sending this data we and Meta are joint controllers (Art. 26 GDPR); Meta is responsible for what it does with the data afterwards, see`,
        ` `,
        /* @__PURE__ */ jsx("a", { href: `https://www.facebook.com/privacy/policy/`, target: `_blank`, rel: `noreferrer`, children: `Meta's privacy policy` }),
        `. Legal basis: your consent, as above.`
      ] }),
      /* @__PURE__ */ jsx("p", { children: `Without your consent nothing is loaded from Google or Meta and no data goes there. You can withdraw your consent at any time under \u201CCookie settings\u201D in the footer; the Google and Meta cookies are then removed. Analytics data is kept for 14 months.` }),
      /* @__PURE__ */ jsx("h3", { children: `Using Pro` }),
      /* @__PURE__ */ jsx("p", { children: `When a Pro member fetches Pro code \u2013 in the Code tab, with the CLI, through the MCP server or as a download \u2013 we note which account fetched which item and when. We don't store the IP address with it. We do this to spot misuse, such as shared access keys or mass downloads, to enforce the license, and to see which Pro items are used. Legal basis: our legitimate interest in protecting the library and improving it (Art. 6(1)(f) GDPR).` }),
      /* @__PURE__ */ jsx("h3", { children: `Your account` }),
      /* @__PURE__ */ jsx("p", { children: `When you sign in we store your email address, sign-in times, your plan and \u2013 for teams \u2013 the emails of the seats you add. Access keys are stored only as a one-way hash. Legal basis: providing the service you asked for (Art. 6(1)(b) GDPR).` }),
      /* @__PURE__ */ jsx("h3", { children: `Buying Pro` }),
      /* @__PURE__ */ jsx("p", { children: `Stripe processes your payment. We receive your name, email, country, the amount, and a VAT ID if you enter one \u2013 never your full card details. We keep purchase records as tax law requires. Legal basis: the contract and our legal obligations (Art. 6(1)(b) and (c) GDPR).` }),
      /* @__PURE__ */ jsx("h3", { children: `Contacting us` }),
      /* @__PURE__ */ jsx("p", { children: `When you use the contact form we store your name, email, message and \u2013 if you add them \u2013 company and seat count, and forward them to our mailbox to answer you. Legal basis: answering your request (Art. 6(1)(b) and (f) GDPR).` }),
      /* @__PURE__ */ jsx("h3", { children: `On your device` }),
      /* @__PURE__ */ jsx("p", { children: `We keep your sign-in session, your theme choice and your cookie choice in your browser's local storage. These are needed for the site to work. Google Analytics cookies (names starting with \u201C_ga\u201D) and Meta cookies (\u201C_fbp\u201D, \u201C_fbc\u201D) are only set after you accept them in the cookie banner.` }),
      /* @__PURE__ */ jsx("h2", { children: `3. Who helps us` }),
      /* @__PURE__ */ jsx("p", { children: `These providers process data on our behalf, under data processing agreements (Meta, as noted, together with us):` }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: `Vercel Inc.` }),
          ` (USA) \u2013 hosting and page-view counting`
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: `Supabase` }),
          ` \u2013 database, sign-in and sign-in emails, stored in the EU (Ireland)`
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: `Stripe Payments Europe Ltd.` }),
          ` (Ireland) \u2013 payments`
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: `Resend` }),
          ` (USA) \u2013 forwarding contact form messages to our mailbox`
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: `Google Ireland Limited` }),
          ` (Ireland) \u2013 Google Analytics, only with your consent; data may be processed by Google LLC in the USA`
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: `Meta Platforms Ireland Limited` }),
          ` (Ireland) \u2013 Meta pixel and Conversions API, only with your consent, as joint controller (see above); data may be processed by Meta Platforms Inc. in the USA`
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { children: `Where data goes to the USA, it is protected by the EU-US Data Privacy Framework or the EU Standard Contractual Clauses. We don't sell your data and don't share it with anyone else, unless the law requires it.` }),
      /* @__PURE__ */ jsx("h2", { children: `4. How long we keep it` }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: `Account data: until you delete your account.` }),
        /* @__PURE__ */ jsx("li", { children: `Purchase records: five years after the end of the year of purchase, as Polish tax law requires.` }),
        /* @__PURE__ */ jsx("li", { children: `Contact requests: up to 12 months after the conversation ended.` }),
        /* @__PURE__ */ jsx("li", { children: `The record of fetched Pro items: 12 months, and it is deleted with your account.` }),
        /* @__PURE__ */ jsx("li", { children: `Server logs: a few days, at most 30.` }),
        /* @__PURE__ */ jsx("li", { children: `Google Analytics data: 14 months.` }),
        /* @__PURE__ */ jsx("li", { children: `Meta pixel and Conversions API data: up to 2 years, as set by Meta.` })
      ] }),
      /* @__PURE__ */ jsx("h2", { children: `5. Your rights` }),
      /* @__PURE__ */ jsxs("p", { children: [
        `You may ask for access to your data, correction, deletion, restriction, a copy to take elsewhere, and you may object to processing based on legitimate interest. Write to `,
        /* @__PURE__ */ jsx(SComponent, {}),
        ` \u2013 we answer within one month. You can also complain to a data protection authority; in Poland that is the President of the Personal Data Protection Office (UODO), ul. Stawki 2, 00-193 Warszawa.`
      ] }),
      /* @__PURE__ */ jsx("h2", { children: `6. Changes` }),
      /* @__PURE__ */ jsx("p", { children: `If we change how we use your data, we update this page and tell you about important changes by email.` })
    ] })
  },
  refund: {
    title: `Refund Policy`,
    lead: `Pro is source code you receive the moment you pay. That's why purchases are final \u2013 with clear exceptions when something is on us.`,
    body: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: `legal__summary`, children: [
        /* @__PURE__ */ jsx("strong", { children: `In short:` }),
        ` try everything in the live previews before you buy. If something you bought doesn't work as described and we can't fix it within 14 days, you get your money back. Mistakes on our side are always refunded. Write to `,
        /* @__PURE__ */ jsx(SComponent, {}),
        `.`
      ] }),
      /* @__PURE__ */ jsx("h2", { children: `Why purchases are final` }),
      /* @__PURE__ */ jsx("p", { children: `A Pro license is a one-time payment that unlocks source code you can copy right away \u2013 it can't be returned like a physical product. Every Pro item has a working preview and full docs on the site, so you can check it before paying.` }),
      /* @__PURE__ */ jsx("h2", { children: `When you get your money back` }),
      /* @__PURE__ */ jsx("h3", { children: `Something doesn't work` }),
      /* @__PURE__ */ jsx("p", { children: `If a Pro item doesn't do what its page says \u2013 it fails to install, throws errors in a supported setup, or behaves differently from its docs \u2013 email us with what you tried. We'll fix it or offer a working alternative within 14 days. If we can't, we refund the full purchase.` }),
      /* @__PURE__ */ jsx("h3", { children: `A mistake on our side` }),
      /* @__PURE__ */ jsx("p", { children: `Charged twice, charged the wrong amount, or a technical error at checkout? We refund the wrong payment in full, no questions asked.` }),
      /* @__PURE__ */ jsx("h3", { children: `Wrong plan` }),
      /* @__PURE__ */ jsx("p", { children: `Bought Individual but meant Team, or picked too many seats? Tell us within 14 days and we switch you to the right plan and settle the difference.` }),
      /* @__PURE__ */ jsx("h2", { children: `Your right of withdrawal` }),
      /* @__PURE__ */ jsx("p", { children: `If you are a consumer in the EU or the UK, you normally have 14 days to withdraw from an online purchase. For digital content this right ends once delivery starts, if you agreed to that. At checkout you ask for immediate access to Pro and confirm that you lose the right of withdrawal when it starts. Your statutory rights for digital content that doesn't conform to the contract are not affected.` }),
      /* @__PURE__ */ jsx("h2", { children: `How a refund works` }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          `Email `,
          /* @__PURE__ */ jsx(SComponent, {}),
          ` from the address you bought with, or include your receipt.`
        ] }),
        /* @__PURE__ */ jsx("li", { children: `We answer within two business days.` }),
        /* @__PURE__ */ jsx("li", { children: `Refunds go back to the original payment method and usually show within 5\u201310 business days.` })
      ] }),
      /* @__PURE__ */ jsx("h2", { children: `After a refund` }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: `Pro access for that purchase ends, for you and any team seats on it.` }),
        /* @__PURE__ */ jsx("li", { children: `Access keys linked to the license stop working.` }),
        /* @__PURE__ */ jsx("li", { children: `The license ends: please remove Pro source that isn't already part of a shipped product. Free items stay yours.` }),
        /* @__PURE__ */ jsx("li", { children: `A launch price belongs to the original purchase; buying again later means today's price.` })
      ] }),
      /* @__PURE__ */ jsx("h2", { children: `Before you dispute a payment` }),
      /* @__PURE__ */ jsx("p", { children: `Please write to us first. We reply fast, and a bank dispute costs a fee and takes weeks even when it goes your way.` })
    ] })
  },
  imprint: {
    title: `Imprint`,
    lead: `Information under Art. 5 of the Polish Act on Providing Services by Electronic Means.`,
    body: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("p", { children: [
        owner.name,
        /* @__PURE__ */ jsx("br", {}),
        owner.street,
        /* @__PURE__ */ jsx("br", {}),
        owner.city,
        /* @__PURE__ */ jsx("br", {}),
        owner.country
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        `Business: design agency, trading as `,
        owner.trade,
        /* @__PURE__ */ jsx("br", {}),
        `VAT ID: `,
        owner.vat
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        `Email: `,
        /* @__PURE__ */ jsx(SComponent, {}),
        /* @__PURE__ */ jsx("br", {}),
        `Phone: `,
        /* @__PURE__ */ jsx("a", { href: `tel:${owner.phone.replace(/\s/g, ``)}`, children: owner.phone })
      ] }),
      /* @__PURE__ */ jsx("p", { children: `We are not obliged and not willing to take part in dispute resolution proceedings before a consumer arbitration board. Please contact us directly if something is wrong.` })
    ] })
  }
};
var legalSlugs = Object.keys(l);
var d = [{
  slug: `terms`,
  label: `Terms`
}, {
  slug: `privacy`,
  label: `Privacy`
}, {
  slug: `refund`,
  label: `Refund`
}, {
  slug: `imprint`,
  label: `Imprint`
}];
function LegalPage({
  slug
}) {
  let t2 = l[slug];
  return /* @__PURE__ */ jsxs("article", { className: `legal`, children: [
    /* @__PURE__ */ jsxs("header", { className: `legal__head`, children: [
      /* @__PURE__ */ jsx("h1", { className: `legal__title`, children: t2.title }),
      /* @__PURE__ */ jsx("p", { className: `legal__lead`, children: t2.lead }),
      slug !== `imprint` && /* @__PURE__ */ jsxs("p", { className: `legal__date`, children: [
        `Last updated `,
        o
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `legal__body`, children: t2.body }),
    /* @__PURE__ */ jsxs("footer", { className: `legal__foot`, children: [
      /* @__PURE__ */ jsxs("nav", { "aria-label": `Legal pages`, children: [
        /* @__PURE__ */ jsx(M, { to: `/license`, children: `License` }),
        d.filter((t3) => t3.slug !== slug).map((e) => /* @__PURE__ */ jsx(M, { to: `/${e.slug}`, children: e.label }, e.slug))
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        `Questions? `,
        /* @__PURE__ */ jsx(M, { to: `/contact`, children: `Contact us` }),
        ` or write to `,
        /* @__PURE__ */ jsx(SComponent, {}),
        `.`
      ] })
    ] })
  ] });
}

export {
  owner,
  legalSlugs,
  LegalPage
};
