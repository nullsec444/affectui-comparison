import {
  supabase
} from "./chunk-DLU6UPHF.js";
import {
  GcComponent,
  Hc1Component,
  IComponent,
  Ko,
  M,
  Ns,
  Sa1Component,
  Ti,
  ga,
  r,
  t,
  z
} from "./chunk-4F2T52KM.js";
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

// reconstructed/AccountPage-DvJClPAR.jsx
init_react_BkAXpnfr();
var h = n();
var g = n2();
function AccountPage({
  user,
  tab
}) {
  let n3 = useC(user);
  let r2 = n3.license?.kind === `team`;
  return /* @__PURE__ */ jsxs("div", { className: `account`, children: [
    /* @__PURE__ */ jsxs("nav", { className: `account__nav`, "aria-label": `Profile`, children: [
      /* @__PURE__ */ jsx("span", { className: `sidebar__label`, children: `Profile` }),
      /* @__PURE__ */ jsx(M, { to: `/account`, className: `nav-link`, "aria-current": tab === `account` ? `page` : void 0, children: `Account` }),
      r2 && /* @__PURE__ */ jsx(M, { to: `/account/team`, className: `nav-link`, "aria-current": tab === `team` ? `page` : void 0, children: `Team` }),
      /* @__PURE__ */ jsx(M, { to: `/account/downloads`, className: `nav-link`, "aria-current": tab === `downloads` ? `page` : void 0, children: `Downloads` })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `account__main`, children: tab === `downloads` ? /* @__PURE__ */ jsx(XComponent, { user }) : tab === `team` ? /* @__PURE__ */ jsx(KComponent, { user, ...n3 }) : /* @__PURE__ */ jsx(V1Component, { user, ...n3 }) })
  ] });
}
function V1Component({
  user,
  license,
  reload
}) {
  let o = user.plan === `pro`;
  let s = !!(license && license.owner_email.toLowerCase() === user.email.toLowerCase());
  let l = useD(o, reload);
  let u = useE(reload);
  let d = o ? license?.kind === `team` ? s ? `${t.name} Pro \xB7 Team, ${license.seats} seats` : `${t.name} Pro \xB7 Team member` : `${t.name} Pro \xB7 Individual` : `No active plan`;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { className: `account__title`, children: `Account` }),
    l && /* @__PURE__ */ jsx("p", { className: `account__notice`, role: `status`, children: l === `waiting` ? `Thanks for your purchase! Activating your license\u2026` : l === `done` ? `Your license is active \u2013 enjoy every Pro item.` : `Payment received. Activation takes a little longer \u2013 reload this page in a minute.` }),
    u && /* @__PURE__ */ jsx("p", { className: u.ok ? `account__notice` : `account__notice account__notice--error`, role: `status`, children: u.text }),
    /* @__PURE__ */ jsxs("section", { className: `plan`, children: [
      /* @__PURE__ */ jsxs("div", { className: `plan__head`, children: [
        /* @__PURE__ */ jsx("h2", { children: d }),
        !o && /* @__PURE__ */ jsx(Hc1Component, {})
      ] }),
      /* @__PURE__ */ jsx("span", { className: `plan__rule` }),
      /* @__PURE__ */ jsx("p", { children: o ? license?.kind === `team` && !s ? /* @__PURE__ */ jsxs(Fragment, { children: [
        `You're signed in as `,
        /* @__PURE__ */ jsx("strong", { children: user.email }),
        ` with a seat on the team license of`,
        ` `,
        /* @__PURE__ */ jsx("strong", { children: license.owner_email }),
        `.`
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        `You're signed in as `,
        /* @__PURE__ */ jsx("strong", { children: user.email }),
        ` with a lifetime`,
        ` `,
        license?.kind === `team` ? `team` : `Pro`,
        ` license.`
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        `You're signed in as `,
        /* @__PURE__ */ jsx("strong", { children: user.email }),
        `, which has no plan.`
      ] }) })
    ] }),
    !o && /* @__PURE__ */ jsx(TComponent, {}),
    license?.kind === `team` && /* @__PURE__ */ jsx("p", { className: `doc__p account__team-link`, children: /* @__PURE__ */ jsx(M, { to: `/account/team`, className: `doc__link`, children: s ? `Manage team and invites \u2192` : `See your team \u2192` }) }),
    /* @__PURE__ */ jsxs("div", { className: `settings`, children: [
      /* @__PURE__ */ jsxs("div", { className: `settings__row`, children: [
        /* @__PURE__ */ jsx("span", { children: `Email` }),
        /* @__PURE__ */ jsx("span", { className: `settings__value`, children: user.email })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `settings__row`, children: [
        /* @__PURE__ */ jsx("span", { children: `Log out of all devices` }),
        /* @__PURE__ */ jsx("button", { className: `btn btn--secondary`, onClick: async () => {
          await z(true);
          ga(`/`);
        }, children: `Log out` })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `settings__row`, children: [
        /* @__PURE__ */ jsx("span", { children: `Delete account` }),
        /* @__PURE__ */ jsx("button", { className: `btn btn--secondary btn--danger`, onClick: () => {
          window.location.href = `${t.links.support}`;
        }, children: `Delete` })
      ] })
    ] })
  ] });
}
var y = [{
  kind: `components`,
  label: `Download component library`
}, {
  kind: `screens`,
  label: `Download screens`
}, {
  kind: `blocks`,
  label: `Download blocks`
}, {
  kind: `illustrations`,
  label: `Download illustrations`
}, {
  kind: `motion`,
  label: `Download motion`
}];
function BComponent({
  kind
}) {
  let [t2, setT] = h.useState(`idle`);
  return /* @__PURE__ */ jsx("button", { className: `btn btn--secondary`, type: `button`, onClick: async () => {
    setT(`busy`);
    let {
      data
    } = await supabase.auth.getSession();
    let r2 = await fetch(`/api/download?kind=${kind}`, {
      headers: {
        Authorization: `Bearer ${data.session?.access_token ?? ``}`
      }
    }).catch(() => null);
    if (!r2?.ok) {
      return setT(`error`);
    }
    let i = URL.createObjectURL(await r2.blob());
    let a = document.createElement(`a`);
    a.href = i;
    a.download = `affectui-${kind}.zip`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(i), 1e3);
    setT(`idle`);
  }, disabled: t2 === `busy`, children: t2 === `busy` ? `Preparing\u2026` : t2 === `error` ? `Try again` : `Download` });
}
function XComponent({
  user
}) {
  let t2 = user.plan === `pro`;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { className: `account__title`, children: `Downloads` }),
    /* @__PURE__ */ jsx("div", { className: `settings`, children: y.map(({
      kind,
      label
    }) => /* @__PURE__ */ jsxs("div", { className: `settings__row`, children: [
      /* @__PURE__ */ jsx("span", { children: label }),
      t2 ? /* @__PURE__ */ jsx(BComponent, { kind }) : /* @__PURE__ */ jsx(Hc1Component, {})
    ] }, kind)) }),
    /* @__PURE__ */ jsxs("section", { className: `account__section`, children: [
      /* @__PURE__ */ jsx("h2", { className: `doc__h2`, children: `Install with the CLI` }),
      /* @__PURE__ */ jsxs("p", { className: `doc__p`, children: [
        `With a components.json in your project, install free components by their address (see`,
        ` `,
        /* @__PURE__ */ jsx(M, { to: `/docs/installation`, className: `doc__link`, children: `Installation` }),
        `).`
      ] }),
      /* @__PURE__ */ jsx(Sa1Component, { command: (e) => r(Ti.find((e2) => !e2.pro)?.slug ?? `chat-composer`, e) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: `account__section`, children: [
      /* @__PURE__ */ jsx("h2", { className: `doc__h2`, children: `Access key` }),
      /* @__PURE__ */ jsxs("p", { className: `doc__p`, children: [
        `Your personal key installs Pro items with the shadcn CLI. Add it as`,
        ` `,
        /* @__PURE__ */ jsx("code", { className: `token`, children: `AFFECTUI_TOKEN` }),
        ` to your `,
        /* @__PURE__ */ jsx("code", { className: `token`, children: `.env.local` }),
        ` or as a CI secret \u2013 never commit it. Setup:`,
        ` `,
        /* @__PURE__ */ jsx(M, { to: `/docs/installation#pro`, className: `doc__link`, children: `Pro components` }),
        `.`
      ] }),
      t2 ? /* @__PURE__ */ jsx(SComponent, {}) : /* @__PURE__ */ jsx(GcComponent, { compact: true, label: `Your access key` })
    ] })
  ] });
}
function SComponent() {
  let [e, setE] = h.useState(void 0);
  let [n3, setN] = h.useState(null);
  let [i, setI] = h.useState(false);
  let [o, setO] = h.useState(null);
  let l = () => supabase.from(`api_keys`).select(`key_hint, created_at, last_used_at`).maybeSingle().then(({
    data
  }) => setE(data ?? null));
  h.useEffect(() => {
    l();
  }, []);
  let onClick = async () => {
    if (e && !window.confirm(`Replace your key? The old one stops working right away.`)) {
      return;
    }
    setI(true);
    setO(null);
    let {
      data,
      error
    } = await supabase.rpc(`create_api_key`);
    setI(false);
    if (error || typeof data != `string`) {
      return setO(error?.message ?? `Could not create a key.`);
    }
    setN(data);
    l();
  };
  let d = (e2) => new Date(e2).toLocaleDateString(`en`, {
    day: `numeric`,
    month: `short`,
    year: `numeric`
  });
  return /* @__PURE__ */ jsxs("div", { className: `access-key`, children: [
    n3 ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: `command command--block`, children: [
        /* @__PURE__ */ jsx("code", { children: n3 }),
        /* @__PURE__ */ jsx(IComponent, { value: n3 })
      ] }),
      /* @__PURE__ */ jsx("p", { className: `doc__p access-key__note`, children: `Copy it now \u2013 for your security it won't be shown again.` })
    ] }) : e ? /* @__PURE__ */ jsx("div", { className: `settings`, children: /* @__PURE__ */ jsxs("div", { className: `settings__row`, children: [
      /* @__PURE__ */ jsxs("span", { children: [
        `aui_\u2022\u2022\u2022\u2022`,
        e.key_hint,
        /* @__PURE__ */ jsxs("span", { className: `access-key__meta`, children: [
          ` `,
          `\xB7 created `,
          d(e.created_at),
          e.last_used_at ? ` \xB7 last used ${d(e.last_used_at)}` : ` \xB7 not used yet`
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { className: `btn btn--secondary`, onClick, disabled: i, children: i ? `Creating\u2026` : `Replace key` })
    ] }) }) : e === null ? /* @__PURE__ */ jsx("button", { className: `btn btn--secondary`, onClick, disabled: i, children: i ? `Creating\u2026` : `Create access key` }) : null,
    o && /* @__PURE__ */ jsx("p", { className: `doc__p access-key__note`, children: o })
  ] });
}
function useC(user) {
  let [license, setLicense] = h.useState(null);
  let [members, setMembers] = h.useState([]);
  let reload = h.useCallback(async () => {
    let {
      data
    } = await supabase.from(`licenses`).select(`id, kind, seats, owner_email, created_at`).order(`created_at`, {
      ascending: false
    });
    let r2 = data ?? [];
    let a = r2.filter((t2) => t2.owner_email.toLowerCase() === user.email.toLowerCase());
    let o = a.find((e) => e.kind === `team`) ?? a[0] ?? r2[0] ?? null;
    setLicense(o);
    if (o?.kind === `team` && a.includes(o)) {
      let {
        data: data_1
      } = await supabase.from(`license_members`).select(`email, added_at`).eq(`license_id`, o.id).order(`added_at`);
      setMembers(data_1 ?? []);
    } else {
      setMembers([]);
    }
  }, [user.email]);
  h.useEffect(() => {
    reload();
  }, [reload, user.plan]);
  return {
    license,
    members,
    reload
  };
}
async function w(e) {
  let t2 = (await supabase.auth.getSession()).data.session?.access_token;
  let n3 = await fetch(`/api/license-claim`, {
    method: `POST`,
    headers: {
      "Content-Type": `application/json`,
      ...t2 ? {
        Authorization: `Bearer ${t2}`
      } : {}
    },
    body: JSON.stringify(e)
  }).catch(() => null);
  let r2 = await n3?.json().catch(() => null);
  if (n3?.ok) {
    return {
      ok: true,
      kind: r2?.kind
    };
  }
  return {
    ok: false,
    error: r2?.error ?? `Something went wrong. Try again.`
  };
}
function TComponent() {
  let [e, setE] = h.useState(``);
  let [n3, setN] = h.useState(`idle`);
  let [a, setA] = h.useState(null);
  return /* @__PURE__ */ jsxs("section", { className: `account__section claim`, children: [
    /* @__PURE__ */ jsx("h2", { className: `doc__h2`, children: `Bought Pro with a different email?` }),
    n3 === `sent` ? /* @__PURE__ */ jsxs("p", { className: `doc__p`, children: [
      `If there's a purchase on `,
      /* @__PURE__ */ jsx("strong", { children: e.trim() }),
      `, we've sent a link there. Open it while signed in to this account and Pro moves over. Nothing arrived? Check spam, or`,
      ` `,
      /* @__PURE__ */ jsx(M, { to: `/contact`, className: `doc__link`, children: `contact us` }),
      `.`
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("p", { className: `doc__p`, children: `Enter the address you paid with. We email a link to it \u2013 open it here and your license moves to this account.` }),
      /* @__PURE__ */ jsxs("form", { className: `team__add`, onSubmit: async (t2) => {
        t2.preventDefault();
        if (!e.trim() || n3 === `busy`) {
          return;
        }
        setN(`busy`);
        setA(null);
        let i = await w({
          action: `request`,
          email: e.trim()
        });
        if (!i.ok) {
          setN(`idle`);
          return setA(i.error);
        }
        setN(`sent`);
      }, children: [
        /* @__PURE__ */ jsx("input", { type: `email`, value: e, onChange: (e2) => setE(e2.target.value), placeholder: `email@used-at-checkout.com`, "aria-label": `Email used at checkout`, required: true }),
        /* @__PURE__ */ jsx("button", { className: `btn btn--primary`, type: `submit`, disabled: n3 === `busy`, children: n3 === `busy` ? `Sending\u2026` : `Send link` })
      ] })
    ] }),
    a && /* @__PURE__ */ jsx("p", { className: `doc__p account__error`, children: a })
  ] });
}
function useE(reload) {
  let [t2, setT] = h.useState(null);
  h.useEffect(() => {
    let t3 = new URLSearchParams(window.location.search);
    let token = t3.get(`claim`);
    if (!token) {
      return;
    }
    t3.delete(`claim`);
    let i = t3.toString();
    window.history.replaceState(window.history.state, ``, `${window.location.pathname}${i ? `?${i}` : ``}`);
    setT({
      ok: true,
      text: `Linking your purchase\u2026`
    });
    w({
      action: `confirm`,
      token
    }).then(async (t4) => {
      if (!t4.ok) {
        return setT({
          ok: false,
          text: t4.error
        });
      }
      await Ko();
      await reload();
      setT({
        ok: true,
        text: `Your purchase is linked \u2013 Pro is unlocked on this account.`
      });
    });
  }, [reload]);
  return t2;
}
function useD(e, reload) {
  let [n3, setN] = h.useState(() => {
    if (new URLSearchParams(window.location.search).get(`checkout`) === `success`) {
      return `waiting`;
    }
    return null;
  });
  h.useEffect(() => {
    if (new URLSearchParams(window.location.search).get(`checkout`) === `success`) {
      Ns();
    }
  }, []);
  h.useEffect(() => {
    if (n3 !== `waiting`) {
      return;
    }
    if (e) {
      setN(`done`);
      reload();
      return;
    }
    let i = 0;
    let a = window.setInterval(async () => {
      i += 1;
      if ((await Ko())?.plan === `pro`) {
        clearInterval(a);
      } else if (i >= 15) {
        clearInterval(a);
        setN(`slow`);
      }
    }, 2e3);
    return () => clearInterval(a);
  }, [n3, e, reload]);
  return n3;
}
async function O(email) {
  let t2 = (await supabase.auth.getSession()).data.session?.access_token;
  let n3 = await fetch(`/api/team-invite`, {
    method: `POST`,
    headers: {
      "Content-Type": `application/json`,
      ...t2 ? {
        Authorization: `Bearer ${t2}`
      } : {}
    },
    body: JSON.stringify({
      email
    })
  }).catch(() => null);
  if (n3?.ok) {
    return null;
  }
  return (await n3?.json().catch(() => null))?.error ?? `The invite email could not be sent.`;
}
function KComponent({
  user,
  license,
  members,
  reload
}) {
  let [o, setO] = h.useState(``);
  let [l, setL] = h.useState(false);
  let [d, setD] = h.useState(null);
  let [p, setP] = h.useState(null);
  let [v, setV] = h.useState(null);
  if (!license || license.kind !== `team`) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h1", { className: `account__title`, children: `Team` }),
      /* @__PURE__ */ jsx("p", { className: `doc__p`, children: `This account has no team license.` })
    ] });
  }
  if (license.owner_email.toLowerCase() !== user.email.toLowerCase()) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h1", { className: `account__title`, children: `Team` }),
      /* @__PURE__ */ jsxs("section", { className: `plan`, children: [
        /* @__PURE__ */ jsx("div", { className: `plan__head`, children: /* @__PURE__ */ jsx("h2", { children: `Team member` }) }),
        /* @__PURE__ */ jsx("span", { className: `plan__rule` }),
        /* @__PURE__ */ jsxs("p", { children: [
          `You hold a seat on the team license of `,
          /* @__PURE__ */ jsx("strong", { children: license.owner_email }),
          `. Pro is unlocked for`,
          ` `,
          /* @__PURE__ */ jsx("strong", { children: user.email }),
          ` as long as they keep you on the team.`
        ] })
      ] })
    ] });
  }
  let b = members.length + 1;
  let x = b >= license.seats;
  let S = (email) => `Hi! I added you to our ${t.name} Pro team license. Sign in at ${window.location.origin}/login with ${email || `the email I added`} and every Pro component unlocks right away.`;
  let onSubmit = async (e) => {
    e.preventDefault();
    let p_email = o.trim();
    if (!p_email || l) {
      return;
    }
    setL(true);
    setD(null);
    setP(null);
    let {
      error
    } = await supabase.rpc(`team_add_member`, {
      p_email
    });
    if (error) {
      setL(false);
      return setD(error.message);
    }
    setO(``);
    reload();
    let r2 = await O(p_email);
    setL(false);
    if (r2) {
      setD(`${p_email} was added, but the invite email failed: ${r2}`);
    } else {
      setP(`${p_email} was added and got an invite email.`);
    }
  };
  let w2 = async (email) => {
    setV(email);
    setD(null);
    setP(null);
    let t2 = await O(email);
    setV(null);
    if (t2) {
      setD(t2);
    } else {
      setP(`Invite sent again to ${email}.`);
    }
  };
  let T = async (email) => {
    if (!window.confirm(`Remove ${email} from your team? They lose Pro access right away.`)) {
      return;
    }
    setD(null);
    let {
      error
    } = await supabase.rpc(`team_remove_member`, {
      p_email: email
    });
    if (error) {
      return setD(error.message);
    }
    reload();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { className: `account__title`, children: `Team` }),
    /* @__PURE__ */ jsxs("section", { className: `plan`, children: [
      /* @__PURE__ */ jsx("div", { className: `plan__head`, children: /* @__PURE__ */ jsxs("h2", { children: [
        b,
        ` of `,
        license.seats,
        ` seats used`
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: `team__meter`, role: `img`, "aria-label": `${b} of ${license.seats} seats used`, children: Array.from({
        length: license.seats
      }, (e, t2) => /* @__PURE__ */ jsx("span", { "data-on": t2 < b || void 0 }, t2)) }),
      /* @__PURE__ */ jsx("p", { children: `Add a teammate by email \u2013 they get an invite right away and Pro as soon as they sign in with that address. No extra purchase, no license key to share. Remove someone and their seat is free again.` })
    ] }),
    x ? /* @__PURE__ */ jsxs("p", { className: `doc__p doc__p--spaced`, children: [
      `All seats are taken.`,
      ` `,
      /* @__PURE__ */ jsx(M, { to: `/contact?topic=enterprise`, className: `doc__link`, children: `Need more seats? Contact us` })
    ] }) : /* @__PURE__ */ jsxs("form", { className: `team__add`, onSubmit, children: [
      /* @__PURE__ */ jsx("input", { type: `email`, value: o, onChange: (e) => setO(e.target.value), placeholder: `teammate@company.com`, "aria-label": `Team member email`, required: true }),
      /* @__PURE__ */ jsx("button", { className: `btn btn--primary`, type: `submit`, disabled: l, children: l ? `Adding\u2026` : `Add and invite` })
    ] }),
    d && /* @__PURE__ */ jsx("p", { className: `doc__p account__error`, children: d }),
    p && /* @__PURE__ */ jsx("p", { className: `doc__p team__notice`, role: `status`, children: p }),
    /* @__PURE__ */ jsxs("div", { className: `settings team__list`, children: [
      /* @__PURE__ */ jsx("div", { className: `settings__row`, children: /* @__PURE__ */ jsxs("span", { children: [
        user.email,
        ` `,
        /* @__PURE__ */ jsx("span", { className: `team__role`, children: `Owner` })
      ] }) }),
      members.map((e) => /* @__PURE__ */ jsxs("div", { className: `settings__row`, children: [
        /* @__PURE__ */ jsxs("span", { children: [
          e.email,
          ` `,
          /* @__PURE__ */ jsxs("span", { className: `team__role`, children: [
            `Added `,
            new Date(e.added_at).toLocaleDateString(`en`, {
              month: `short`,
              day: `numeric`
            })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: `team__actions`, children: [
          /* @__PURE__ */ jsx(IComponent, { value: S(e.email), className: `team__copy`, label: `Copy invite` }),
          /* @__PURE__ */ jsx("button", { className: `btn btn--secondary`, onClick: () => w2(e.email), disabled: v === e.email, children: v === e.email ? `Sending\u2026` : `Resend invite` }),
          /* @__PURE__ */ jsx("button", { className: `btn btn--secondary`, onClick: () => T(e.email), children: `Remove` })
        ] })
      ] }, e.email))
    ] })
  ] });
}
export {
  AccountPage
};
