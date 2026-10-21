import {
  ua
} from "./chunk-TAMDFAP7.js";
import {
  $i,
  I,
  Ko,
  Ns,
  Ti,
  ga,
  gc,
  hc,
  r,
  sa,
  t,
  z
} from "./chunk-OLSFNPAI.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/AccountPage-DvJClPAR.js
init_react_BkAXpnfr();
var h = n();
var g = n2();
function _({ user: e, tab: t2 }) {
  let n3 = C(e), r2 = n3.license?.kind === `team`;
  return (0, g.jsxs)(`div`, { className: `account`, children: [(0, g.jsxs)(`nav`, { className: `account__nav`, "aria-label": `Profile`, children: [(0, g.jsx)(`span`, { className: `sidebar__label`, children: `Profile` }), (0, g.jsx)(I, { to: `/account`, className: `nav-link`, "aria-current": t2 === `account` ? `page` : void 0, children: `Account` }), r2 && (0, g.jsx)(I, { to: `/account/team`, className: `nav-link`, "aria-current": t2 === `team` ? `page` : void 0, children: `Team` }), (0, g.jsx)(I, { to: `/account/downloads`, className: `nav-link`, "aria-current": t2 === `downloads` ? `page` : void 0, children: `Downloads` })] }), (0, g.jsx)(`div`, { className: `account__main`, children: t2 === `downloads` ? (0, g.jsx)(x, { user: e }) : t2 === `team` ? (0, g.jsx)(k, { user: e, ...n3 }) : (0, g.jsx)(v, { user: e, ...n3 }) })] });
}
function v({ user: e, license: n3, reload: r2 }) {
  let o = e.plan === `pro`, s = !!(n3 && n3.owner_email.toLowerCase() === e.email.toLowerCase()), l = D(o, r2), u = E(r2), d = o ? n3?.kind === `team` ? s ? `${t.name} Pro \xB7 Team, ${n3.seats} seats` : `${t.name} Pro \xB7 Team member` : `${t.name} Pro \xB7 Individual` : `No active plan`;
  return (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(`h1`, { className: `account__title`, children: `Account` }), l && (0, g.jsx)(`p`, { className: `account__notice`, role: `status`, children: l === `waiting` ? `Thanks for your purchase! Activating your license\u2026` : l === `done` ? `Your license is active \u2013 enjoy every Pro item.` : `Payment received. Activation takes a little longer \u2013 reload this page in a minute.` }), u && (0, g.jsx)(`p`, { className: u.ok ? `account__notice` : `account__notice account__notice--error`, role: `status`, children: u.text }), (0, g.jsxs)(`section`, { className: `plan`, children: [(0, g.jsxs)(`div`, { className: `plan__head`, children: [(0, g.jsx)(`h2`, { children: d }), !o && (0, g.jsx)(hc, {})] }), (0, g.jsx)(`span`, { className: `plan__rule` }), (0, g.jsx)(`p`, { children: o ? n3?.kind === `team` && !s ? (0, g.jsxs)(g.Fragment, { children: [`You're signed in as `, (0, g.jsx)(`strong`, { children: e.email }), ` with a seat on the team license of`, ` `, (0, g.jsx)(`strong`, { children: n3.owner_email }), `.`] }) : (0, g.jsxs)(g.Fragment, { children: [`You're signed in as `, (0, g.jsx)(`strong`, { children: e.email }), ` with a lifetime`, ` `, n3?.kind === `team` ? `team` : `Pro`, ` license.`] }) : (0, g.jsxs)(g.Fragment, { children: [`You're signed in as `, (0, g.jsx)(`strong`, { children: e.email }), `, which has no plan.`] }) })] }), !o && (0, g.jsx)(T, {}), n3?.kind === `team` && (0, g.jsx)(`p`, { className: `doc__p account__team-link`, children: (0, g.jsx)(I, { to: `/account/team`, className: `doc__link`, children: s ? `Manage team and invites \u2192` : `See your team \u2192` }) }), (0, g.jsxs)(`div`, { className: `settings`, children: [(0, g.jsxs)(`div`, { className: `settings__row`, children: [(0, g.jsx)(`span`, { children: `Email` }), (0, g.jsx)(`span`, { className: `settings__value`, children: e.email })] }), (0, g.jsxs)(`div`, { className: `settings__row`, children: [(0, g.jsx)(`span`, { children: `Log out of all devices` }), (0, g.jsx)(`button`, { className: `btn btn--secondary`, onClick: async () => {
    await z(true), ga(`/`);
  }, children: `Log out` })] }), (0, g.jsxs)(`div`, { className: `settings__row`, children: [(0, g.jsx)(`span`, { children: `Delete account` }), (0, g.jsx)(`button`, { className: `btn btn--secondary btn--danger`, onClick: () => {
    window.location.href = `${t.links.support}`;
  }, children: `Delete` })] })] })] });
}
var y = [{ kind: `components`, label: `Download component library` }, { kind: `screens`, label: `Download screens` }, { kind: `blocks`, label: `Download blocks` }, { kind: `illustrations`, label: `Download illustrations` }, { kind: `motion`, label: `Download motion` }];
function b({ kind: e }) {
  let [t2, n3] = (0, h.useState)(`idle`);
  return (0, g.jsx)(`button`, { className: `btn btn--secondary`, type: `button`, onClick: async () => {
    n3(`busy`);
    let { data: t3 } = await ua.auth.getSession(), r2 = await fetch(`/api/download?kind=${e}`, { headers: { Authorization: `Bearer ${t3.session?.access_token ?? ``}` } }).catch(() => null);
    if (!r2?.ok) return n3(`error`);
    let i = URL.createObjectURL(await r2.blob()), a = document.createElement(`a`);
    a.href = i, a.download = `affectui-${e}.zip`, a.click(), setTimeout(() => URL.revokeObjectURL(i), 1e3), n3(`idle`);
  }, disabled: t2 === `busy`, children: t2 === `busy` ? `Preparing\u2026` : t2 === `error` ? `Try again` : `Download` });
}
function x({ user: e }) {
  let t2 = e.plan === `pro`;
  return (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(`h1`, { className: `account__title`, children: `Downloads` }), (0, g.jsx)(`div`, { className: `settings`, children: y.map(({ kind: e2, label: n3 }) => (0, g.jsxs)(`div`, { className: `settings__row`, children: [(0, g.jsx)(`span`, { children: n3 }), t2 ? (0, g.jsx)(b, { kind: e2 }) : (0, g.jsx)(hc, {})] }, e2)) }), (0, g.jsxs)(`section`, { className: `account__section`, children: [(0, g.jsx)(`h2`, { className: `doc__h2`, children: `Install with the CLI` }), (0, g.jsxs)(`p`, { className: `doc__p`, children: [`With a components.json in your project, install free components by their address (see`, ` `, (0, g.jsx)(I, { to: `/docs/installation`, className: `doc__link`, children: `Installation` }), `).`] }), (0, g.jsx)(sa, { command: (e2) => r(Ti.find((e3) => !e3.pro)?.slug ?? `chat-composer`, e2) })] }), (0, g.jsxs)(`section`, { className: `account__section`, children: [(0, g.jsx)(`h2`, { className: `doc__h2`, children: `Access key` }), (0, g.jsxs)(`p`, { className: `doc__p`, children: [`Your personal key installs Pro items with the shadcn CLI. Add it as`, ` `, (0, g.jsx)(`code`, { className: `token`, children: `AFFECTUI_TOKEN` }), ` to your `, (0, g.jsx)(`code`, { className: `token`, children: `.env.local` }), ` or as a CI secret \u2013 never commit it. Setup:`, ` `, (0, g.jsx)(I, { to: `/docs/installation#pro`, className: `doc__link`, children: `Pro components` }), `.`] }), t2 ? (0, g.jsx)(S, {}) : (0, g.jsx)(gc, { compact: true, label: `Your access key` })] })] });
}
function S() {
  let [e, t2] = (0, h.useState)(void 0), [n3, r2] = (0, h.useState)(null), [i, a] = (0, h.useState)(false), [o, c] = (0, h.useState)(null), l = () => ua.from(`api_keys`).select(`key_hint, created_at, last_used_at`).maybeSingle().then(({ data: e2 }) => t2(e2 ?? null));
  (0, h.useEffect)(() => {
    l();
  }, []);
  let u = async () => {
    if (e && !window.confirm(`Replace your key? The old one stops working right away.`)) return;
    a(true), c(null);
    let { data: t3, error: n4 } = await ua.rpc(`create_api_key`);
    if (a(false), n4 || typeof t3 != `string`) return c(n4?.message ?? `Could not create a key.`);
    r2(t3), l();
  }, d = (e2) => new Date(e2).toLocaleDateString(`en`, { day: `numeric`, month: `short`, year: `numeric` });
  return (0, g.jsxs)(`div`, { className: `access-key`, children: [n3 ? (0, g.jsxs)(g.Fragment, { children: [(0, g.jsxs)(`div`, { className: `command command--block`, children: [(0, g.jsx)(`code`, { children: n3 }), (0, g.jsx)($i, { value: n3 })] }), (0, g.jsx)(`p`, { className: `doc__p access-key__note`, children: `Copy it now \u2013 for your security it won't be shown again.` })] }) : e ? (0, g.jsx)(`div`, { className: `settings`, children: (0, g.jsxs)(`div`, { className: `settings__row`, children: [(0, g.jsxs)(`span`, { children: [`aui_\u2022\u2022\u2022\u2022`, e.key_hint, (0, g.jsxs)(`span`, { className: `access-key__meta`, children: [` `, `\xB7 created `, d(e.created_at), e.last_used_at ? ` \xB7 last used ${d(e.last_used_at)}` : ` \xB7 not used yet`] })] }), (0, g.jsx)(`button`, { className: `btn btn--secondary`, onClick: u, disabled: i, children: i ? `Creating\u2026` : `Replace key` })] }) }) : e === null ? (0, g.jsx)(`button`, { className: `btn btn--secondary`, onClick: u, disabled: i, children: i ? `Creating\u2026` : `Create access key` }) : null, o && (0, g.jsx)(`p`, { className: `doc__p access-key__note`, children: o })] });
}
function C(e) {
  let [t2, n3] = (0, h.useState)(null), [r2, i] = (0, h.useState)([]), a = (0, h.useCallback)(async () => {
    let { data: t3 } = await ua.from(`licenses`).select(`id, kind, seats, owner_email, created_at`).order(`created_at`, { ascending: false }), r3 = t3 ?? [], a2 = r3.filter((t4) => t4.owner_email.toLowerCase() === e.email.toLowerCase()), o = a2.find((e2) => e2.kind === `team`) ?? a2[0] ?? r3[0] ?? null;
    if (n3(o), o?.kind === `team` && a2.includes(o)) {
      let { data: e2 } = await ua.from(`license_members`).select(`email, added_at`).eq(`license_id`, o.id).order(`added_at`);
      i(e2 ?? []);
    } else i([]);
  }, [e.email]);
  return (0, h.useEffect)(() => {
    a();
  }, [a, e.plan]), { license: t2, members: r2, reload: a };
}
async function w(e) {
  let t2 = (await ua.auth.getSession()).data.session?.access_token, n3 = await fetch(`/api/license-claim`, { method: `POST`, headers: { "Content-Type": `application/json`, ...t2 ? { Authorization: `Bearer ${t2}` } : {} }, body: JSON.stringify(e) }).catch(() => null), r2 = await n3?.json().catch(() => null);
  return n3?.ok ? { ok: true, kind: r2?.kind } : { ok: false, error: r2?.error ?? `Something went wrong. Try again.` };
}
function T() {
  let [e, t2] = (0, h.useState)(``), [n3, r2] = (0, h.useState)(`idle`), [a, o] = (0, h.useState)(null);
  return (0, g.jsxs)(`section`, { className: `account__section claim`, children: [(0, g.jsx)(`h2`, { className: `doc__h2`, children: `Bought Pro with a different email?` }), n3 === `sent` ? (0, g.jsxs)(`p`, { className: `doc__p`, children: [`If there's a purchase on `, (0, g.jsx)(`strong`, { children: e.trim() }), `, we've sent a link there. Open it while signed in to this account and Pro moves over. Nothing arrived? Check spam, or`, ` `, (0, g.jsx)(I, { to: `/contact`, className: `doc__link`, children: `contact us` }), `.`] }) : (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(`p`, { className: `doc__p`, children: `Enter the address you paid with. We email a link to it \u2013 open it here and your license moves to this account.` }), (0, g.jsxs)(`form`, { className: `team__add`, onSubmit: async (t3) => {
    if (t3.preventDefault(), !e.trim() || n3 === `busy`) return;
    r2(`busy`), o(null);
    let i = await w({ action: `request`, email: e.trim() });
    if (!i.ok) return r2(`idle`), o(i.error);
    r2(`sent`);
  }, children: [(0, g.jsx)(`input`, { type: `email`, value: e, onChange: (e2) => t2(e2.target.value), placeholder: `email@used-at-checkout.com`, "aria-label": `Email used at checkout`, required: true }), (0, g.jsx)(`button`, { className: `btn btn--primary`, type: `submit`, disabled: n3 === `busy`, children: n3 === `busy` ? `Sending\u2026` : `Send link` })] })] }), a && (0, g.jsx)(`p`, { className: `doc__p account__error`, children: a })] });
}
function E(e) {
  let [t2, n3] = (0, h.useState)(null);
  return (0, h.useEffect)(() => {
    let t3 = new URLSearchParams(window.location.search), r2 = t3.get(`claim`);
    if (!r2) return;
    t3.delete(`claim`);
    let i = t3.toString();
    window.history.replaceState(window.history.state, ``, `${window.location.pathname}${i ? `?${i}` : ``}`), n3({ ok: true, text: `Linking your purchase\u2026` }), w({ action: `confirm`, token: r2 }).then(async (t4) => {
      if (!t4.ok) return n3({ ok: false, text: t4.error });
      await Ko(), await e(), n3({ ok: true, text: `Your purchase is linked \u2013 Pro is unlocked on this account.` });
    });
  }, [e]), t2;
}
function D(e, t2) {
  let [n3, r2] = (0, h.useState)(() => new URLSearchParams(window.location.search).get(`checkout`) === `success` ? `waiting` : null);
  return (0, h.useEffect)(() => {
    new URLSearchParams(window.location.search).get(`checkout`) === `success` && Ns();
  }, []), (0, h.useEffect)(() => {
    if (n3 !== `waiting`) return;
    if (e) {
      r2(`done`), t2();
      return;
    }
    let i = 0, a = window.setInterval(async () => {
      i += 1, (await Ko())?.plan === `pro` ? clearInterval(a) : i >= 15 && (clearInterval(a), r2(`slow`));
    }, 2e3);
    return () => clearInterval(a);
  }, [n3, e, t2]), n3;
}
async function O(e) {
  let t2 = (await ua.auth.getSession()).data.session?.access_token, n3 = await fetch(`/api/team-invite`, { method: `POST`, headers: { "Content-Type": `application/json`, ...t2 ? { Authorization: `Bearer ${t2}` } : {} }, body: JSON.stringify({ email: e }) }).catch(() => null);
  return n3?.ok ? null : (await n3?.json().catch(() => null))?.error ?? `The invite email could not be sent.`;
}
function k({ user: e, license: n3, members: r2, reload: a }) {
  let [o, c] = (0, h.useState)(``), [l, u] = (0, h.useState)(false), [d, f] = (0, h.useState)(null), [p, _2] = (0, h.useState)(null), [v2, y2] = (0, h.useState)(null);
  if (!n3 || n3.kind !== `team`) return (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(`h1`, { className: `account__title`, children: `Team` }), (0, g.jsx)(`p`, { className: `doc__p`, children: `This account has no team license.` })] });
  if (n3.owner_email.toLowerCase() !== e.email.toLowerCase()) return (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(`h1`, { className: `account__title`, children: `Team` }), (0, g.jsxs)(`section`, { className: `plan`, children: [(0, g.jsx)(`div`, { className: `plan__head`, children: (0, g.jsx)(`h2`, { children: `Team member` }) }), (0, g.jsx)(`span`, { className: `plan__rule` }), (0, g.jsxs)(`p`, { children: [`You hold a seat on the team license of `, (0, g.jsx)(`strong`, { children: n3.owner_email }), `. Pro is unlocked for`, ` `, (0, g.jsx)(`strong`, { children: e.email }), ` as long as they keep you on the team.`] })] })] });
  let b2 = r2.length + 1, x2 = b2 >= n3.seats, S2 = (e2) => `Hi! I added you to our ${t.name} Pro team license. Sign in at ${window.location.origin}/login with ${e2 || `the email I added`} and every Pro component unlocks right away.`, C2 = async (e2) => {
    e2.preventDefault();
    let t2 = o.trim();
    if (!t2 || l) return;
    u(true), f(null), _2(null);
    let { error: n4 } = await ua.rpc(`team_add_member`, { p_email: t2 });
    if (n4) return u(false), f(n4.message);
    c(``), a();
    let r3 = await O(t2);
    u(false), r3 ? f(`${t2} was added, but the invite email failed: ${r3}`) : _2(`${t2} was added and got an invite email.`);
  }, w2 = async (e2) => {
    y2(e2), f(null), _2(null);
    let t2 = await O(e2);
    y2(null), t2 ? f(t2) : _2(`Invite sent again to ${e2}.`);
  }, T2 = async (e2) => {
    if (!window.confirm(`Remove ${e2} from your team? They lose Pro access right away.`)) return;
    f(null);
    let { error: t2 } = await ua.rpc(`team_remove_member`, { p_email: e2 });
    if (t2) return f(t2.message);
    a();
  };
  return (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(`h1`, { className: `account__title`, children: `Team` }), (0, g.jsxs)(`section`, { className: `plan`, children: [(0, g.jsx)(`div`, { className: `plan__head`, children: (0, g.jsxs)(`h2`, { children: [b2, ` of `, n3.seats, ` seats used`] }) }), (0, g.jsx)(`div`, { className: `team__meter`, role: `img`, "aria-label": `${b2} of ${n3.seats} seats used`, children: Array.from({ length: n3.seats }, (e2, t2) => (0, g.jsx)(`span`, { "data-on": t2 < b2 || void 0 }, t2)) }), (0, g.jsx)(`p`, { children: `Add a teammate by email \u2013 they get an invite right away and Pro as soon as they sign in with that address. No extra purchase, no license key to share. Remove someone and their seat is free again.` })] }), x2 ? (0, g.jsxs)(`p`, { className: `doc__p doc__p--spaced`, children: [`All seats are taken.`, ` `, (0, g.jsx)(I, { to: `/contact?topic=enterprise`, className: `doc__link`, children: `Need more seats? Contact us` })] }) : (0, g.jsxs)(`form`, { className: `team__add`, onSubmit: C2, children: [(0, g.jsx)(`input`, { type: `email`, value: o, onChange: (e2) => c(e2.target.value), placeholder: `teammate@company.com`, "aria-label": `Team member email`, required: true }), (0, g.jsx)(`button`, { className: `btn btn--primary`, type: `submit`, disabled: l, children: l ? `Adding\u2026` : `Add and invite` })] }), d && (0, g.jsx)(`p`, { className: `doc__p account__error`, children: d }), p && (0, g.jsx)(`p`, { className: `doc__p team__notice`, role: `status`, children: p }), (0, g.jsxs)(`div`, { className: `settings team__list`, children: [(0, g.jsx)(`div`, { className: `settings__row`, children: (0, g.jsxs)(`span`, { children: [e.email, ` `, (0, g.jsx)(`span`, { className: `team__role`, children: `Owner` })] }) }), r2.map((e2) => (0, g.jsxs)(`div`, { className: `settings__row`, children: [(0, g.jsxs)(`span`, { children: [e2.email, ` `, (0, g.jsxs)(`span`, { className: `team__role`, children: [`Added `, new Date(e2.added_at).toLocaleDateString(`en`, { month: `short`, day: `numeric` })] })] }), (0, g.jsxs)(`span`, { className: `team__actions`, children: [(0, g.jsx)($i, { value: S2(e2.email), className: `team__copy`, label: `Copy invite` }), (0, g.jsx)(`button`, { className: `btn btn--secondary`, onClick: () => w2(e2.email), disabled: v2 === e2.email, children: v2 === e2.email ? `Sending\u2026` : `Resend invite` }), (0, g.jsx)(`button`, { className: `btn btn--secondary`, onClick: () => T2(e2.email), children: `Remove` })] })] }, e2.email))] })] });
}
export {
  _ as AccountPage
};
