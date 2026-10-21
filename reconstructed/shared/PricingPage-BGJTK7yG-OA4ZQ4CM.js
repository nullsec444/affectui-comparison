import {
  Ca,
  Di,
  Fs,
  J1Component,
  Ls,
  M,
  Oi,
  QcComponent,
  Qi,
  Vi,
  a,
  ha,
  i2 as i,
  useFs,
  vo
} from "./chunk-4F2T52KM.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";
import "./chunk-JTXQSSYA.js";
import "./chunk-CTH3ASD6.js";

// reconstructed/PricingPage-BGJTK7yG.jsx
init_react_BkAXpnfr();
var _ = [[`path`, {
  d: `M12 1.25C11.6453 1.25 11.2831 1.35888 10.9148 1.49784C10.5419 1.63848 10.0762 1.84521 9.49544 2.10302C8.64182 2.48194 7.5152 2.91682 6.30676 3.26034L6.30675 3.26034C5.42488 3.51101 4.71192 3.71367 4.17183 3.9231C3.62905 4.13358 3.13694 4.39466 2.80565 4.83324C2.48481 5.258 2.36138 5.75424 2.30469 6.28941C2.24997 6.80596 2.24998 7.4541 2.25 8.23883V8.23885V11.1833C2.25 14.2392 3.62946 16.6624 5.29669 18.4686C6.95877 20.2691 8.93883 21.4939 10.2439 22.1827L10.3069 22.216C10.8627 22.5098 11.3171 22.75 12 22.75C12.683 22.75 13.1373 22.5098 13.6931 22.216L13.7561 22.1827C15.0612 21.4939 17.0412 20.2691 18.7033 18.4686C20.3705 16.6624 21.75 14.2392 21.75 11.1833V8.23883C21.75 7.45411 21.75 6.80597 21.6953 6.28941C21.6386 5.75424 21.5152 5.258 21.1943 4.83324C20.8631 4.39466 20.371 4.13358 19.8282 3.9231C19.2881 3.71368 18.5751 3.51102 17.6933 3.26036L17.6933 3.26035L17.6932 3.26033C16.4848 2.91682 15.3581 2.48193 14.5045 2.103C13.9238 1.8452 13.4581 1.63848 13.0852 1.49784C12.7169 1.35888 12.3547 1.25 12 1.25ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7V7.42416C10.6347 7.52886 10.0701 7.7612 9.61196 8.09711C8.97319 8.56549 8.5 9.2746 8.5 10.1278C8.5 10.8783 8.76936 11.572 9.45777 12.0328C10.0819 12.4507 10.9522 12.6062 12 12.6062C12.9582 12.6062 13.5279 12.7501 13.8421 12.9537C14.088 13.1131 14.25 13.354 14.25 13.8726C14.25 14.3084 14.0711 14.5775 13.7369 14.777C13.3572 15.0037 12.7608 15.1391 12 15.1391C11.3002 15.1391 10.7004 14.9471 10.2971 14.676C9.88907 14.4018 9.75 14.1036 9.75 13.8726C9.75 13.4584 9.41421 13.1226 9 13.1226C8.58579 13.1226 8.25 13.4584 8.25 13.8726C8.25 14.7554 8.78251 15.4654 9.46029 15.921C9.9609 16.2574 10.5786 16.4867 11.25 16.585V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V16.6006C13.3866 16.5325 13.9974 16.3684 14.5057 16.065C15.2573 15.6163 15.75 14.8772 15.75 13.8726C15.75 12.951 15.412 12.1837 14.6579 11.6949C13.9721 11.2504 13.0418 11.1062 12 11.1062C11.0478 11.1062 10.5431 10.9543 10.2922 10.7864C10.1056 10.6615 10 10.4909 10 10.1278C10 9.86732 10.1424 9.56819 10.499 9.30676C10.855 9.04566 11.3833 8.86133 12 8.86133C12.6167 8.86133 13.145 9.04566 13.5011 9.30676C13.8576 9.56819 14 9.86732 14 10.1278C14 10.542 14.3358 10.8778 14.75 10.8778C15.1642 10.8778 15.5 10.542 15.5 10.1278C15.5 9.2746 15.0268 8.56549 14.388 8.09711C13.9299 7.7612 13.3653 7.52886 12.75 7.42416V7Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `0`
}]];
var v = n();
var y = n2();
var b = (e) => `$${Math.round(e).toLocaleString(`en-US`)}`;
var x = null;
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
var length = 31;
function WComponent({
  label: label_1,
  value,
  min,
  max,
  step,
  format,
  onChange
}) {
  let s = v.useId();
  let c = (value - min) / (max - min) * 100;
  let lRef = v.useRef(null);
  let uRef = v.useRef(null);
  let dRef = v.useRef(value);
  dRef.current = value;
  let f = (e) => {
    let t = lRef.current?.getBoundingClientRect();
    if (!t) {
      return;
    }
    let a2 = Math.min(1, Math.max(0, (e.clientX - t.left) / t.width));
    let s2 = Math.min(max, Math.max(min, min + Math.round(a2 * (max - min) / step) * step));
    if (s2 !== dRef.current) {
      dRef.current = s2;
      S();
      onChange(s2);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: `calc__field`, style: {
    "--fill": `${c}%`
  }, onPointerDown: (e) => {
    if (e.button === 0) {
      e.preventDefault();
      e.currentTarget.setPointerCapture(e.pointerId);
      uRef.current?.focus({
        preventScroll: true
      });
      f(e);
    }
  }, onPointerMove: (e) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      f(e);
    }
  }, children: [
    /* @__PURE__ */ jsx("label", { htmlFor: s, className: `calc__name`, children: label_1 }),
    /* @__PURE__ */ jsxs("div", { className: `calc__scale`, ref: lRef, children: [
      /* @__PURE__ */ jsx("span", { className: `calc__ticks`, "aria-hidden": `true`, children: Array.from({
        length
      }, (e, t) => /* @__PURE__ */ jsx("span", { "data-on": t / 30 * 100 <= c ? `` : void 0, "data-major": t % 5 == 0 ? `` : void 0 }, t)) }),
      /* @__PURE__ */ jsx("span", { className: `calc__mark`, "aria-hidden": `true` }),
      /* @__PURE__ */ jsx("input", { ref: uRef, id: s, type: `range`, min, max, step, value, onChange: (e) => {
        S();
        onChange(Number(e.target.value));
      } })
    ] }),
    /* @__PURE__ */ jsx("output", { htmlFor: s, children: format(value) })
  ] });
}
function TComponent({
  price
}) {
  let [t, setT] = v.useState(10);
  let [r, setR] = v.useState(6);
  let [a2, setA] = v.useState(75);
  let c = t * r;
  let l = c * a2;
  let u = c / 8;
  let d = Math.max(l - price, 0);
  return /* @__PURE__ */ jsxs("section", { className: `calc`, "aria-labelledby": `calc-title`, children: [
    /* @__PURE__ */ jsxs("div", { className: `calc__head`, children: [
      /* @__PURE__ */ jsx("h2", { id: `calc-title`, children: `What would it cost to build yourself?` }),
      /* @__PURE__ */ jsx("p", { children: `Polished states, motion, dark mode and keyboard support take time. Here's roughly how much.` })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `calc__tray`, children: /* @__PURE__ */ jsxs("div", { className: `calc__card`, children: [
      /* @__PURE__ */ jsxs("div", { className: `calc__inputs`, children: [
        /* @__PURE__ */ jsx(WComponent, { label: `Pieces you need`, value: t, min: 1, max: 40, step: 1, format: (e) => String(e), onChange: setT }),
        /* @__PURE__ */ jsx(WComponent, { label: `Hours per piece`, value: r, min: 1, max: 24, step: 1, format: (e) => `${e} h`, onChange: setR }),
        /* @__PURE__ */ jsx(WComponent, { label: `Your hourly rate`, value: a2, min: 20, max: 250, step: 5, format: (e) => `$${e}`, onChange: setA })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `calc__result`, "aria-live": `polite`, children: [
        /* @__PURE__ */ jsx("span", { className: `calc__label`, children: `Building it yourself` }),
        /* @__PURE__ */ jsx("span", { className: `calc__big`, children: b(l) }),
        /* @__PURE__ */ jsxs("span", { className: `calc__note`, children: [
          c,
          ` hours \xB7 about `,
          u < 10 ? u.toFixed(1).replace(/\.0$/, ``) : Math.round(u),
          ` working days`
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `calc__compare`, children: [
          /* @__PURE__ */ jsxs("div", { className: `calc__pro`, children: [
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("span", { className: `calc__bolt`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx(J1Component, { icon: Vi, size: 10 }) }),
              `affectUI Pro`
            ] }),
            /* @__PURE__ */ jsxs("b", { children: [
              b(price),
              ` once`
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `calc__save`, children: [
            /* @__PURE__ */ jsx("span", { children: `You keep` }),
            /* @__PURE__ */ jsx("b", { children: b(d) })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
var faqs = [{
  q: `What am I actually buying?`,
  a: `The source. Every Pro component, block, illustration and motion effect as the single file it is built from, installable with the shadcn CLI or by copy and paste \u2013 plus every future item. You pay once and keep it.`
}, {
  q: `Pay once, really?`,
  a: `Yes. Individual and Teams are one-time purchases with lifetime updates \u2013 no subscription, no renewal.`
}, {
  q: `What are the founder and early access prices?`,
  a: `${a.map((e, t) => `${t === 0 ? `The first ${e.until} Individual licenses` : `the next ${e.until - a[t - 1].until}`} cost $${e.price}`).join(`, `)}, after that $${i.individual}. Everyone keeps everything they bought, including all future updates.`
}, {
  q: `How do team seats work?`,
  a: `One Team license covers ${i.teamSeats} seats. Every seat is one designer or developer with their own access. Need more than ${i.teamSeats}? Contact us and we'll set up a custom license.`
}, {
  q: `Can I use it in client work?`,
  a: `Yes. Individual and Teams include a commercial license for unlimited projects, for you and your clients. The License page shows common cases, from agencies with one app per client to your own SaaS.`
}, {
  q: `Can I try it before I buy?`,
  a: `Every preview and all docs are open. The free items are yours to keep, no account needed.`
}, {
  q: `How do I get access or ask for help?`,
  a: `After checkout you sign in with the same email and get access right away. For questions, reach out via the support link.`
}];
function PricingPage() {
  let {
    offer,
    loaded
  } = useFs();
  v.useEffect(() => {
    Ls();
  }, []);
  let rRef = v.useRef(null);
  let cRef = v.useRef(null);
  v.useEffect(() => {
    let e = document.referrer ? new URL(document.referrer) : null;
    let from = ha ?? (e ? e.host === window.location.host ? e.pathname : `ext ${e.hostname}` : `direct`);
    vo(`Pricing view`, {
      from
    });
    let n3 = /* @__PURE__ */ new Set();
    let o = new IntersectionObserver((e2) => e2.forEach((e3) => {
      let part = e3.target.dataset.part;
      if (e3.isIntersecting && !n3.has(part)) {
        n3.add(part);
        vo(`Pricing scroll`, {
          from: part
        });
      }
    }), {
      threshold: 0.6
    });
    [rRef.current, cRef.current].forEach((e2) => e2 && o.observe(e2));
    return () => o.disconnect();
  }, []);
  let length2 = Oi.filter((e) => !e.pro).length;
  return /* @__PURE__ */ jsxs("div", { className: `pricing`, children: [
    /* @__PURE__ */ jsxs("header", { className: `pricing__head`, children: [
      /* @__PURE__ */ jsx("h1", { className: `pricing__title`, children: `Pricing` }),
      /* @__PURE__ */ jsxs("p", { className: `pricing__sub`, children: [
        `Pay once, keep everything. `,
        length2,
        ` items are free forever, Pro unlocks the rest.`
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `tiers`, ref: rRef, "data-part": `plans`, children: [
      /* @__PURE__ */ jsxs("article", { className: `tier`, children: [
        /* @__PURE__ */ jsx("h2", { className: `tier__name`, children: `Free` }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(MComponent, { amount: 0, per: `forever` }),
          /* @__PURE__ */ jsx("div", { className: `tier__pills`, children: /* @__PURE__ */ jsxs("span", { className: `pill`, children: [
            length2,
            ` free items`
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("hr", { className: `tier__divider` }),
        /* @__PURE__ */ jsxs("ul", { className: `tier__features`, children: [
          /* @__PURE__ */ jsxs(PComponent, { children: [
            length2,
            ` free items, yours to keep`
          ] }),
          /* @__PURE__ */ jsx(PComponent, { children: `Copy, shadcn CLI or MCP for Claude, Cursor and Codex` }),
          /* @__PURE__ */ jsx(PComponent, { children: `Live previews for everything` }),
          /* @__PURE__ */ jsx(PComponent, { children: `Light and dark themes` }),
          /* @__PURE__ */ jsx(PComponent, { children: `Community support` })
        ] }),
        /* @__PURE__ */ jsx(M, { to: `/components`, className: `tier__cta tier__cta--secondary`, children: `Browse components` })
      ] }),
      /* @__PURE__ */ jsxs("article", { className: `tier tier--pro`, children: [
        /* @__PURE__ */ jsxs("h2", { className: `tier__name`, children: [
          `Individual`,
          offer && /* @__PURE__ */ jsx("span", { className: `pill pill--pro tier__badge-pill`, children: offer.badge })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(MComponent, { amount: offer ? offer.price : i.individual, was: offer ? i.individual : void 0, per: `once` }),
          offer ? /* @__PURE__ */ jsxs("div", { className: `founder`, children: [
            /* @__PURE__ */ jsx("div", { className: `founder__bar`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("span", { style: {
              width: `${((offer.until - (loaded ? offer.left : offer.until)) / offer.until * 100).toFixed(1)}%`
            } }) }),
            /* @__PURE__ */ jsxs("span", { className: `founder__label`, children: [
              loaded ? `${offer.left} of ${offer.until} ${offer.id === `founder` ? `founder spots` : `spots`} left` : `First ${offer.until} buyers`,
              `, then `,
              O(i.individual)
            ] })
          ] }) : /* @__PURE__ */ jsxs("div", { className: `tier__pills`, children: [
            /* @__PURE__ */ jsx("span", { className: `pill pill--pro`, children: `All Pro items` }),
            /* @__PURE__ */ jsx("span", { className: `pill`, children: `One-time purchase` })
          ] })
        ] }),
        /* @__PURE__ */ jsx("hr", { className: `tier__divider` }),
        /* @__PURE__ */ jsxs("ul", { className: `tier__features`, children: [
          /* @__PURE__ */ jsx(PComponent, { children: `Everything in Free` }),
          /* @__PURE__ */ jsxs(PComponent, { children: [
            Di.length,
            ` complete app screens \u2013 agent runs, evals, chat, CRM, billing`
          ] }),
          /* @__PURE__ */ jsx(PComponent, { children: `All Pro components, blocks, illustrations and motion` }),
          /* @__PURE__ */ jsx(PComponent, { children: `Unlimited commercial projects` }),
          /* @__PURE__ */ jsx(PComponent, { children: `Lifetime updates` }),
          /* @__PURE__ */ jsx(PComponent, { children: `Access key for the CLI and the MCP server` }),
          /* @__PURE__ */ jsx(PComponent, { children: `Support within 24 hours` })
        ] }),
        /* @__PURE__ */ jsx(NComponent, { kind: `individual` })
      ] }),
      /* @__PURE__ */ jsxs("article", { className: `tier tier--team`, children: [
        /* @__PURE__ */ jsxs("h2", { className: `tier__name`, children: [
          `Team`,
          /* @__PURE__ */ jsxs("span", { className: `pill pill--team tier__badge-pill`, children: [
            i.teamSeats,
            ` seats`
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(MComponent, { amount: i.team, per: `once` }),
          /* @__PURE__ */ jsxs("div", { className: `tier__pills`, children: [
            /* @__PURE__ */ jsxs("span", { className: `pill`, children: [
              `$`,
              (i.team / i.teamSeats).toFixed(2),
              ` per seat`
            ] }),
            /* @__PURE__ */ jsxs(M, { to: `/contact?topic=enterprise`, className: `seats__more`, children: [
              `More than `,
              i.teamSeats,
              ` seats? Contact us`
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("hr", { className: `tier__divider` }),
        /* @__PURE__ */ jsxs("ul", { className: `tier__features`, children: [
          /* @__PURE__ */ jsx(PComponent, { children: `Everything in Individual` }),
          /* @__PURE__ */ jsxs(PComponent, { children: [
            i.teamSeats,
            ` seats on one license`
          ] }),
          /* @__PURE__ */ jsx(PComponent, { children: `POs and custom invoicing` }),
          /* @__PURE__ */ jsx(PComponent, { children: `Priority component requests` }),
          /* @__PURE__ */ jsx(PComponent, { children: `Support within 12 hours` })
        ] }),
        /* @__PURE__ */ jsx(NComponent, { kind: `team`, seats: i.teamSeats })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: `pricing__license`, children: [
      `Client projects, agencies, SaaS \u2013 `,
      /* @__PURE__ */ jsx(M, { to: `/license`, children: `see what the license covers` })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `guarantee`, children: [
      /* @__PURE__ */ jsx("span", { className: `guarantee__icon`, children: /* @__PURE__ */ jsx("span", { className: `guarantee__tile`, children: /* @__PURE__ */ jsx(J1Component, { icon: _, size: 22 }) }) }),
      /* @__PURE__ */ jsx("span", { className: `guarantee__rule`, "aria-hidden": `true` }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: `Works as described, or your money back.` }),
        ` If a Pro item doesn't do what its page says and we can't fix it within 14 days, you get a full refund. `,
        /* @__PURE__ */ jsx(M, { to: `/refund`, children: `Refund policy` })
      ] })
    ] }),
    /* @__PURE__ */ jsx(AComponent, {}),
    /* @__PURE__ */ jsx(TComponent, { price: offer ? offer.price : i.individual }),
    /* @__PURE__ */ jsx(JComponent, {}),
    /* @__PURE__ */ jsx("section", { className: `review`, "aria-label": `What customers say`, children: /* @__PURE__ */ jsxs("figure", { className: `review__card`, children: [
      /* @__PURE__ */ jsx("blockquote", { children: `\u201CWe rebuilt the core screens of recruitpilot with affectUI. Every component feels like a senior designer obsessed over it \u2013 the motion, the spacing, the dark mode \u2013 and it drops straight into our React app. We shipped in days what would have taken us weeks, and our users noticed right away.\u201D` }),
      /* @__PURE__ */ jsxs("figcaption", { children: [
        /* @__PURE__ */ jsx("img", { src: `/avatars/mike.jpg`, alt: ``, width: 44, height: 44 }),
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx("strong", { children: `Mike` }),
          /* @__PURE__ */ jsx("span", { children: `recruitpilot` })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: `faq`, "aria-labelledby": `faq-title`, ref: cRef, "data-part": `faq`, children: [
      /* @__PURE__ */ jsx("h2", { id: `faq-title`, className: `faq__title`, children: `FAQ` }),
      /* @__PURE__ */ jsx(QcComponent, { faqs })
    ] })
  ] });
}
var O = (e) => `$${e.toLocaleString(`en-US`)}`;
var k = () => {
  let e = /* @__PURE__ */ new Date();
  return new Date(e.getFullYear(), e.getMonth(), e.getDate() - (e.getDay() + 6) % 7).getTime();
};
function AComponent() {
  let e = [`assistant-home`, `integrations`, `crm`].map((e2) => Di.find((t) => t.slug === e2)).filter((e2) => e2 !== void 0);
  return /* @__PURE__ */ jsxs("section", { className: `fresh fresh--screens`, "aria-labelledby": `screens-title`, children: [
    /* @__PURE__ */ jsxs("div", { className: `fresh__head`, children: [
      /* @__PURE__ */ jsxs("h2", { id: `screens-title`, children: [
        Di.length,
        ` complete screens, included`
      ] }),
      /* @__PURE__ */ jsx("p", { children: `Whole app views for AI products, not just parts \u2013 plug in your data and ship the screen. All of them are part of Pro.` })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `fresh__row`, children: e.map((e2) => /* @__PURE__ */ jsxs(M, { to: Ca(e2), className: `fresh__item`, children: [
      /* @__PURE__ */ jsx("span", { className: `fresh__shot`, children: /* @__PURE__ */ jsx("img", { src: `/previews/${e2.slug}.webp`, alt: ``, loading: `lazy` }) }),
      /* @__PURE__ */ jsxs("span", { className: `fresh__name`, children: [
        e2.name,
        /* @__PURE__ */ jsx("span", { className: `pill pill--pro fresh__pro`, children: `Pro` })
      ] })
    ] }, e2.slug)) }),
    /* @__PURE__ */ jsx("div", { className: `fresh__more`, children: /* @__PURE__ */ jsxs(M, { to: `/screens`, className: `btn btn--secondary`, children: [
      `Browse all `,
      Di.length,
      ` screens`
    ] }) })
  ] });
}
function JComponent() {
  let e = k();
  let t = Oi.filter((t2) => t2.added && Date.parse(t2.added) >= e).sort((e2, t2) => Date.parse(t2.added) - Date.parse(e2.added));
  let length2 = Oi.filter((e2) => e2.pro).length;
  if (t.length < 3) {
    return null;
  }
  return /* @__PURE__ */ jsxs("section", { className: `fresh`, "aria-labelledby": `fresh-title`, children: [
    /* @__PURE__ */ jsxs("div", { className: `fresh__head`, children: [
      /* @__PURE__ */ jsxs("h2", { id: `fresh-title`, children: [
        t.length,
        ` new this week`
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        length2,
        ` Pro items today, `,
        Oi.length - length2,
        ` free \u2013 and the library grows every week. Everything new is included.`
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `fresh__row`, children: t.slice(0, 6).map((e2) => /* @__PURE__ */ jsxs(M, { to: Ca(e2), className: `fresh__item`, children: [
      /* @__PURE__ */ jsx("span", { className: `fresh__shot`, children: /* @__PURE__ */ jsx("img", { src: `/previews/${e2.slug}.webp`, alt: ``, loading: `lazy` }) }),
      /* @__PURE__ */ jsxs("span", { className: `fresh__name`, children: [
        e2.name,
        e2.pro && /* @__PURE__ */ jsx("span", { className: `pill pill--pro fresh__pro`, children: `Pro` })
      ] })
    ] }, e2.slug)) })
  ] });
}
function MComponent({
  amount,
  was,
  per,
  rolling
}) {
  let i2 = O(amount);
  return /* @__PURE__ */ jsxs("p", { className: `tier__price`, "aria-label": `${i2} ${per}${was ? `, was ${O(was)}` : ``}`, children: [
    was && /* @__PURE__ */ jsx("s", { className: `tier__was`, "aria-hidden": `true`, children: O(was) }),
    /* @__PURE__ */ jsx("span", { className: `tier__amount`, "aria-hidden": `true`, children: rolling ? i2.split(``).map((e, t) => /* @__PURE__ */ jsx("span", { className: `price__digit`, children: e }, `${i2.length - t}-${e}`)) : i2 }),
    /* @__PURE__ */ jsxs("span", { className: `tier__per`, "aria-hidden": `true`, children: [
      `/`,
      per
    ] })
  ] });
}
function NComponent({
  kind,
  seats = 1
}) {
  let [n3, setN] = v.useState(false);
  let [a2, setA] = v.useState(null);
  return /* @__PURE__ */ jsxs("div", { className: `tier__checkout`, children: [
    /* @__PURE__ */ jsx("button", { type: `button`, className: `tier__cta tier__cta--primary`, disabled: n3, onClick: async () => {
      vo(`Plan click`, {
        plan: kind,
        item: `pricing`
      });
      setN(true);
      setA(null);
      try {
        await Fs(kind, seats);
      } catch (error) {
        let item = error instanceof Error ? error.message : `Checkout is not available right now.`;
        vo(`Checkout error`, {
          plan: kind,
          item
        });
        setA(item);
        setN(false);
      }
    }, children: n3 ? `Opening checkout\u2026` : `Get lifetime access` }),
    a2 && /* @__PURE__ */ jsx("p", { className: `tier__error`, role: `alert`, children: a2 })
  ] });
}
function PComponent({
  children
}) {
  return /* @__PURE__ */ jsxs("li", { children: [
    /* @__PURE__ */ jsx("span", { className: `tier__check`, children: /* @__PURE__ */ jsx(J1Component, { icon: Qi, size: 11 }) }),
    /* @__PURE__ */ jsx("span", { children })
  ] });
}
export {
  PricingPage
};
