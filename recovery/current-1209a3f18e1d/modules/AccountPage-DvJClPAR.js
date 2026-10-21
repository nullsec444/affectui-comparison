import { t } from "./react-BkAXpnfr.js";
import { o as o_1, t as t_2 } from "./site-D86YA7B9.js";
import { t as t_3 } from "./jsx-runtime-CTsRTJUX.js";
import { M, P, R, V, a as C1, g as g_1, o as U, tt, w as w_1, x } from "./index-CxCSU7QX.js";
import { supabase } from "./supabaseClient-MZLUyPvg.js";
const h = t();
const g = t_3();
export function AccountPage({ user, tab }) {
    let n = useC(user);
    let r = n.license?.kind === `team`;
    return <div className={`account`}><nav className={`account__nav`} aria-label={`Profile`}><span className={`sidebar__label`}>{`Profile`}</span><M to={`/account`} className={`nav-link`} aria-current={tab === `account` ? `page` : undefined}>{`Account`}</M>{r && <M to={`/account/team`} className={`nav-link`} aria-current={tab === `team` ? `page` : undefined}>{`Team`}</M>}<M to={`/account/downloads`} className={`nav-link`} aria-current={tab === `downloads` ? `page` : undefined}>{`Downloads`}</M></nav><div className={`account__main`}>{tab === `downloads` ? <XComponent user={user}/> : tab === `team` ? <KComponent user={user} {...n}/> : <V1Component user={user} {...n}/>}</div></div>;
}
function V1Component({ user, license, reload }) {
    let o = user.plan === `pro`;
    let s = !!(license && license.owner_email.toLowerCase() === user.email.toLowerCase());
    let l = useD(o, reload);
    let u = useE(reload);
    let d = o ? license?.kind === `team` ? s ? `${o_1.name} Pro · Team, ${license.seats} seats` : `${o_1.name} Pro · Team member` : `${o_1.name} Pro · Individual` : `No active plan`;
    return <><h1 className={`account__title`}>{`Account`}</h1>{l && <p className={`account__notice`} role={`status`}>{l === `waiting` ? `Thanks for your purchase! Activating your license…` : l === `done` ? `Your license is active – enjoy every Pro item.` : `Payment received. Activation takes a little longer – reload this page in a minute.`}</p>}{u && <p className={u.ok ? `account__notice` : `account__notice account__notice--error`} role={`status`}>{u.text}</p>}<section className={`plan`}><div className={`plan__head`}><h2>{d}</h2>{!o && <C1/>}</div><span className={`plan__rule`}/><p>{o ? license?.kind === `team` && !s ? <>{`You're signed in as `}<strong>{user.email}</strong>{` with a seat on the team license of`}{` `}<strong>{license.owner_email}</strong>{`.`}</> : <>{`You're signed in as `}<strong>{user.email}</strong>{` with a lifetime`}{` `}{license?.kind === `team` ? `team` : `Pro`}{` license.`}</> : <>{`You're signed in as `}<strong>{user.email}</strong>{`, which has no plan.`}</>}</p></section>{!o && <TComponent/>}{license?.kind === `team` && <p className={`doc__p account__team-link`}><M to={`/account/team`} className={`doc__link`}>{s ? `Manage team and invites →` : `See your team →`}</M></p>}<div className={`settings`}><div className={`settings__row`}><span>{`Email`}</span><span className={`settings__value`}>{user.email}</span></div><div className={`settings__row`}><span>{`Log out of all devices`}</span><button className={`btn btn--secondary`} onClick={async ()=>{
        await w_1(true);
        P(`/`);
    }}>{`Log out`}</button></div><div className={`settings__row`}><span>{`Delete account`}</span><button className={`btn btn--secondary btn--danger`} onClick={()=>{
        window.location.href = `${o_1.links.support}`;
    }}>{`Delete`}</button></div></div></>;
}
const y = [
    {
        kind: `components`,
        label: `Download component library`
    },
    {
        kind: `screens`,
        label: `Download screens`
    },
    {
        kind: `blocks`,
        label: `Download blocks`
    },
    {
        kind: `illustrations`,
        label: `Download illustrations`
    },
    {
        kind: `motion`,
        label: `Download motion`
    }
];
function BComponent({ kind }) {
    let [t, setT] = h.useState(`idle`);
    return <button className={`btn btn--secondary`} type={`button`} onClick={async ()=>{
        setT(`busy`);
        let { data } = await supabase.auth.getSession();
        let r = await fetch(`/api/download?kind=${kind}`, {
            headers: {
                Authorization: `Bearer ${data.session?.access_token ?? ``}`
            }
        }).catch(()=>null);
        if (!r?.ok) {
            return setT(`error`);
        }
        let i = URL.createObjectURL(await r.blob());
        let a = document.createElement(`a`);
        a.href = i;
        a.download = `affectui-${kind}.zip`;
        a.click();
        setTimeout(()=>URL.revokeObjectURL(i), 1000);
        setT(`idle`);
    }} disabled={t === `busy`}>{t === `busy` ? `Preparing…` : t === `error` ? `Try again` : `Download`}</button>;
}
function XComponent({ user }) {
    let t = user.plan === `pro`;
    return <><h1 className={`account__title`}>{`Downloads`}</h1><div className={`settings`}>{y.map(({ kind, label })=><div key={kind} className={`settings__row`}><span>{label}</span>{t ? <BComponent kind={kind}/> : <C1/>}</div>)}</div><section className={`account__section`}><h2 className={`doc__h2`}>{`Install with the CLI`}</h2><p className={`doc__p`}>{`With a components.json in your project, install free components by their address (see`}{` `}<M to={`/docs/installation`} className={`doc__link`}>{`Installation`}</M>{`).`}</p><R command={(e)=>t_2(tt.find((e)=>!e.pro)?.slug ?? `chat-composer`, e)}/></section><section className={`account__section`}><h2 className={`doc__h2`}>{`Access key`}</h2><p className={`doc__p`}>{`Your personal key installs Pro items with the shadcn CLI. Add it as`}{` `}<code className={`token`}>{`AFFECTUI_TOKEN`}</code>{` to your `}<code className={`token`}>{`.env.local`}</code>{` or as a CI secret – never commit it. Setup:`}{` `}<M to={`/docs/installation#pro`} className={`doc__link`}>{`Pro components`}</M>{`.`}</p>{t ? <SComponent/> : <U compact label={`Your access key`}/>}</section></>;
}
function SComponent() {
    let [e, setE] = h.useState(undefined);
    let [n, setN] = h.useState(null);
    let [i, setI] = h.useState(false);
    let [o, setO] = h.useState(null);
    let l = ()=>supabase.from(`api_keys`).select(`key_hint, created_at, last_used_at`).maybeSingle().then(({ data })=>setE(data ?? null));
    h.useEffect(()=>{
        l();
    }, []);
    let onClick = async ()=>{
        if (e && !window.confirm(`Replace your key? The old one stops working right away.`)) {
            return;
        }
        setI(true);
        setO(null);
        let { data, error } = await supabase.rpc(`create_api_key`);
        setI(false);
        if (error || typeof data != `string`) {
            return setO(error?.message ?? `Could not create a key.`);
        }
        setN(data);
        l();
    };
    let d = (e)=>new Date(e).toLocaleDateString(`en`, {
            day: `numeric`,
            month: `short`,
            year: `numeric`
        });
    return <div className={`access-key`}>{n ? <><div className={`command command--block`}><code>{n}</code><V value={n}/></div><p className={`doc__p access-key__note`}>{`Copy it now – for your security it won't be shown again.`}</p></> : e ? <div className={`settings`}><div className={`settings__row`}><span>{`aui_••••`}{e.key_hint}<span className={`access-key__meta`}>{` `}{`· created `}{d(e.created_at)}{e.last_used_at ? ` · last used ${d(e.last_used_at)}` : ` · not used yet`}</span></span><button className={`btn btn--secondary`} onClick={onClick} disabled={i}>{i ? `Creating…` : `Replace key`}</button></div></div> : e === null ? <button className={`btn btn--secondary`} onClick={onClick} disabled={i}>{i ? `Creating…` : `Create access key`}</button> : null}{o && <p className={`doc__p access-key__note`}>{o}</p>}</div>;
}
function useC(user) {
    let [license, setLicense] = h.useState(null);
    let [members, setMembers] = h.useState([]);
    let reload = h.useCallback(async ()=>{
        let { data } = await supabase.from(`licenses`).select(`id, kind, seats, owner_email, created_at`).order(`created_at`, {
            ascending: false
        });
        let r = data ?? [];
        let a = r.filter((t)=>t.owner_email.toLowerCase() === user.email.toLowerCase());
        let o = a.find((e)=>e.kind === `team`) ?? a[0] ?? r[0] ?? null;
        setLicense(o);
        if (o?.kind === `team` && a.includes(o)) {
            let { data: data_1 } = await supabase.from(`license_members`).select(`email, added_at`).eq(`license_id`, o.id).order(`added_at`);
            setMembers(data_1 ?? []);
        } else {
            setMembers([]);
        }
    }, [
        user.email
    ]);
    h.useEffect(()=>{
        reload();
    }, [
        reload,
        user.plan
    ]);
    return {
        license,
        members,
        reload
    };
}
async function w(e) {
    let t = (await supabase.auth.getSession()).data.session?.access_token;
    let n = await fetch(`/api/license-claim`, {
        method: `POST`,
        headers: {
            "Content-Type": `application/json`,
            ...t ? {
                Authorization: `Bearer ${t}`
            } : {}
        },
        body: JSON.stringify(e)
    }).catch(()=>null);
    let r = await n?.json().catch(()=>null);
    if (n?.ok) {
        return {
            ok: true,
            kind: r?.kind
        };
    }
    return {
        ok: false,
        error: r?.error ?? `Something went wrong. Try again.`
    };
}
function TComponent() {
    let [e, setE] = h.useState(``);
    let [n, setN] = h.useState(`idle`);
    let [a, setA] = h.useState(null);
    return <section className={`account__section claim`}><h2 className={`doc__h2`}>{`Bought Pro with a different email?`}</h2>{n === `sent` ? <p className={`doc__p`}>{`If there's a purchase on `}<strong>{e.trim()}</strong>{`, we've sent a link there. Open it while signed in to this account and Pro moves over. Nothing arrived? Check spam, or`}{` `}<M to={`/contact`} className={`doc__link`}>{`contact us`}</M>{`.`}</p> : <><p className={`doc__p`}>{`Enter the address you paid with. We email a link to it – open it here and your license moves to this account.`}</p><form className={`team__add`} onSubmit={async (t)=>{
        t.preventDefault();
        if (!e.trim() || n === `busy`) {
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
    }}><input type={`email`} value={e} onChange={(e)=>setE(e.target.value)} placeholder={`email@used-at-checkout.com`} aria-label={`Email used at checkout`} required/><button className={`btn btn--primary`} type={`submit`} disabled={n === `busy`}>{n === `busy` ? `Sending…` : `Send link`}</button></form></>}{a && <p className={`doc__p account__error`}>{a}</p>}</section>;
}
function useE(reload) {
    let [t, setT] = h.useState(null);
    h.useEffect(()=>{
        let t = new URLSearchParams(window.location.search);
        let token = t.get(`claim`);
        if (!token) {
            return;
        }
        t.delete(`claim`);
        let i = t.toString();
        window.history.replaceState(window.history.state, ``, `${window.location.pathname}${i ? `?${i}` : ``}`);
        setT({
            ok: true,
            text: `Linking your purchase…`
        });
        w({
            action: `confirm`,
            token
        }).then(async (t)=>{
            if (!t.ok) {
                return setT({
                    ok: false,
                    text: t.error
                });
            }
            await x();
            await reload();
            setT({
                ok: true,
                text: `Your purchase is linked – Pro is unlocked on this account.`
            });
        });
    }, [
        reload
    ]);
    return t;
}
function useD(e, reload) {
    let [n, setN] = h.useState(()=>{
        if (new URLSearchParams(window.location.search).get(`checkout`) === `success`) {
            return `waiting`;
        }
        return null;
    });
    h.useEffect(()=>{
        if (new URLSearchParams(window.location.search).get(`checkout`) === `success`) {
            g_1();
        }
    }, []);
    h.useEffect(()=>{
        if (n !== `waiting`) {
            return;
        }
        if (e) {
            setN(`done`);
            reload();
            return;
        }
        let i = 0;
        let a = window.setInterval(async ()=>{
            i += 1;
            if ((await x())?.plan === `pro`) {
                clearInterval(a);
            } else if (i >= 15) {
                clearInterval(a);
                setN(`slow`);
            }
        }, 2000);
        return ()=>clearInterval(a);
    }, [
        n,
        e,
        reload
    ]);
    return n;
}
async function O(email) {
    let t = (await supabase.auth.getSession()).data.session?.access_token;
    let n = await fetch(`/api/team-invite`, {
        method: `POST`,
        headers: {
            "Content-Type": `application/json`,
            ...t ? {
                Authorization: `Bearer ${t}`
            } : {}
        },
        body: JSON.stringify({
            email
        })
    }).catch(()=>null);
    if (n?.ok) {
        return null;
    }
    return (await n?.json().catch(()=>null))?.error ?? `The invite email could not be sent.`;
}
function KComponent({ user, license, members, reload }) {
    let [o, setO] = h.useState(``);
    let [l, setL] = h.useState(false);
    let [d, setD] = h.useState(null);
    let [p, setP] = h.useState(null);
    let [v, setV] = h.useState(null);
    if (!license || license.kind !== `team`) {
        return <><h1 className={`account__title`}>{`Team`}</h1><p className={`doc__p`}>{`This account has no team license.`}</p></>;
    }
    if (license.owner_email.toLowerCase() !== user.email.toLowerCase()) {
        return <><h1 className={`account__title`}>{`Team`}</h1><section className={`plan`}><div className={`plan__head`}><h2>{`Team member`}</h2></div><span className={`plan__rule`}/><p>{`You hold a seat on the team license of `}<strong>{license.owner_email}</strong>{`. Pro is unlocked for`}{` `}<strong>{user.email}</strong>{` as long as they keep you on the team.`}</p></section></>;
    }
    let b = members.length + 1;
    let x = b >= license.seats;
    let S = (email)=>`Hi! I added you to our ${o_1.name} Pro team license. Sign in at ${window.location.origin}/login with ${email || `the email I added`} and every Pro component unlocks right away.`;
    let onSubmit = async (e)=>{
        e.preventDefault();
        let p_email = o.trim();
        if (!p_email || l) {
            return;
        }
        setL(true);
        setD(null);
        setP(null);
        let { error } = await supabase.rpc(`team_add_member`, {
            p_email
        });
        if (error) {
            setL(false);
            return setD(error.message);
        }
        setO(``);
        reload();
        let r = await O(p_email);
        setL(false);
        if (r) {
            setD(`${p_email} was added, but the invite email failed: ${r}`);
        } else {
            setP(`${p_email} was added and got an invite email.`);
        }
    };
    let w = async (email)=>{
        setV(email);
        setD(null);
        setP(null);
        let t = await O(email);
        setV(null);
        if (t) {
            setD(t);
        } else {
            setP(`Invite sent again to ${email}.`);
        }
    };
    let T = async (email)=>{
        if (!window.confirm(`Remove ${email} from your team? They lose Pro access right away.`)) {
            return;
        }
        setD(null);
        let { error } = await supabase.rpc(`team_remove_member`, {
            p_email: email
        });
        if (error) {
            return setD(error.message);
        }
        reload();
    };
    return <><h1 className={`account__title`}>{`Team`}</h1><section className={`plan`}><div className={`plan__head`}><h2>{b}{` of `}{license.seats}{` seats used`}</h2></div><div className={`team__meter`} role={`img`} aria-label={`${b} of ${license.seats} seats used`}>{Array.from({
        length: license.seats
    }, (e, t)=><span key={t} data-on={t < b || undefined}/>)}</div><p>{`Add a teammate by email – they get an invite right away and Pro as soon as they sign in with that address. No extra purchase, no license key to share. Remove someone and their seat is free again.`}</p></section>{x ? <p className={`doc__p doc__p--spaced`}>{`All seats are taken.`}{` `}<M to={`/contact?topic=enterprise`} className={`doc__link`}>{`Need more seats? Contact us`}</M></p> : <form className={`team__add`} onSubmit={onSubmit}><input type={`email`} value={o} onChange={(e)=>setO(e.target.value)} placeholder={`teammate@company.com`} aria-label={`Team member email`} required/><button className={`btn btn--primary`} type={`submit`} disabled={l}>{l ? `Adding…` : `Add and invite`}</button></form>}{d && <p className={`doc__p account__error`}>{d}</p>}{p && <p className={`doc__p team__notice`} role={`status`}>{p}</p>}<div className={`settings team__list`}><div className={`settings__row`}><span>{user.email}{` `}<span className={`team__role`}>{`Owner`}</span></span></div>{members.map((e)=><div key={e.email} className={`settings__row`}><span>{e.email}{` `}<span className={`team__role`}>{`Added `}{new Date(e.added_at).toLocaleDateString(`en`, {
            month: `short`,
            day: `numeric`
        })}</span></span><span className={`team__actions`}><V value={S(e.email)} className={`team__copy`} label={`Copy invite`}/><button className={`btn btn--secondary`} onClick={()=>w(e.email)} disabled={v === e.email}>{v === e.email ? `Sending…` : `Resend invite`}</button><button className={`btn btn--secondary`} onClick={()=>T(e.email)}>{`Remove`}</button></span></div>)}</div></>;
}
