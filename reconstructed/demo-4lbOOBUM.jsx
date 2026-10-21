// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
import { l as N1, u as onNavigate } from "./index-CxCSU7QX.jsx";
import { t as I1 } from "./component-x-U6EJWL.jsx";
import { t as A1 } from "./component-BDo0fvGw.jsx";
import { t as O1 } from "./component-DxL4SVuQ.jsx";
import { t as t_2 } from "./Analytics01Icon-DzRjULbW.jsx";
import { C, D, E, S, _ as __1, b, c as M1, l as H1, n as G1, o as _, p as V1, r as Y1, s as B1, t as X1, y } from "./component-qs8CseUl.jsx";
import { t as t_3 } from "./BubbleChatIcon-pbmBjpVO.jsx";
import { t as t_4 } from "./Copy01Icon-DrPxamgF.jsx";
import { t as t_5 } from "./Delete02Icon-CsyBlwAn.jsx";
import { t as t_6 } from "./Download04Icon-C2-aGxK5.jsx";
import { t as t_7 } from "./Globe02Icon-jOAiZzRC.jsx";
import { t as t_8 } from "./Mail01Icon-qGLuNJQs.jsx";
import { t as t_9 } from "./MoreHorizontalIcon-CBUy2huH.jsx";
import { t as t_10 } from "./UserAdd01Icon-CeNWxiQ5.jsx";
const j = [[`path`, {
  d: `M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `0`
}], [`path`, {
  d: `M10 16H11.5`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `1`
}], [`path`, {
  d: `M14.5 16L18 16`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `2`
}], [`path`, {
  d: `M2 9H22`,
  stroke: `currentColor`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `3`
}]];
const M = [[`path`, {
  d: `M5 21C9.20998 16.2487 13.9412 9.9475 21 14.6734`,
  stroke: `currentColor`,
  strokeWidth: `1.5`,
  key: `0`
}], [`path`, {
  d: `M17 4.50012C17.4915 3.99442 18.7998 2.00012 19.5 2.00012M22 4.50012C21.5085 3.99442 20.2002 2.00012 19.5 2.00012M19.5 2.00012V10.0001`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `1`
}], [`path`, {
  d: `M20.9999 13C20.998 17.147 20.9472 19.2703 19.6088 20.6088C18.2175 22 15.9783 22 11.5 22C7.02166 22 4.78249 22 3.39124 20.6088C2 19.2175 2 16.9783 2 12.5C2 8.02166 2 5.78249 3.39124 4.39124C4.78249 3 7.02166 3 11.5 3C11.6699 3 14 3.00008 14 3.00008`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeWidth: `1.5`,
  key: `2`
}]];
const N = [[`path`, {
  d: `M15.5 14.5C18.8137 14.5 21.5 11.8137 21.5 8.5C21.5 5.18629 18.8137 2.5 15.5 2.5C12.1863 2.5 9.5 5.18629 9.5 8.5C9.5 9.38041 9.68962 10.2165 10.0303 10.9697L2.5 18.5V21.5H5.5V19.5H7.5V17.5H9.5L13.0303 13.9697C13.7835 14.3104 14.6196 14.5 15.5 14.5Z`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `0`
}], [`path`, {
  d: `M17.5 6.5L16.5 7.5`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `1`
}]];
const P = t_1();
const F = t();
const nav = [{
  label: `New chat`,
  icon: C
}, {
  label: `Chat`,
  icon: t_3
}, {
  label: `Folders`,
  icon: E
}, {
  label: `Integrations`,
  icon: D
}, {
  label: `Analytics`,
  icon: t_2
}, {
  label: `Settings`,
  icon: b
}];
const items = [`General`, `Members`, `Billing`, `API keys`];
const R = [{
  id: `starter`,
  name: `Starter`,
  monthly: 19,
  yearly: 15,
  blurb: `For individuals trying things out`,
  features: [`10,000 credits / month`, `3 seats`, `10 GB storage`]
}, {
  id: `pro`,
  name: `Pro`,
  monthly: 49,
  yearly: 39,
  blurb: `For small teams shipping every day`,
  features: [`50,000 credits / month`, `10 seats`, `100 GB storage`, `Agents and API access`]
}, {
  id: `team`,
  name: `Team`,
  monthly: 99,
  yearly: 79,
  blurb: `For growing teams with more seats`,
  features: [`150,000 credits / month`, `25 seats`, `1 TB storage`, `SSO and audit log`]
}];
const z = `Nov 12, 2026`;
const B = [{
  id: `INV-2026-0412`,
  date: `Oct 12, 2026`,
  amount: `$49.00`,
  status: `Due`
}, {
  id: `INV-2026-0371`,
  date: `Sep 12, 2026`,
  amount: `$49.00`,
  status: `Paid`
}, {
  id: `INV-2026-0329`,
  date: `Aug 12, 2026`,
  amount: `$69.00`,
  status: `Paid`
}, {
  id: `INV-2026-0288`,
  date: `Jul 12, 2026`,
  amount: `$49.00`,
  status: `Paid`
}, {
  id: `INV-2026-0240`,
  date: `Jun 12, 2026`,
  amount: `$49.00`,
  status: `Paid`
}];
const V = [{
  id: `m1`,
  name: `Alex Morgan`,
  email: `alex@acme.com`,
  role: `Owner`
}, {
  id: `m2`,
  name: `Priya Shah`,
  email: `priya@acme.com`,
  role: `Admin`
}, {
  id: `m3`,
  name: `Jonas Weber`,
  email: `jonas@acme.com`,
  role: `Member`
}, {
  id: `m4`,
  name: `Mia Chen`,
  email: `mia@acme.com`,
  role: `Member`
}, {
  id: `m5`,
  name: `Leo Martins`,
  email: `leo@acme.com`,
  role: `Viewer`
}];
const H = [`Admin`, `Member`, `Viewer`].map(e => ({
  value: e,
  label: e
}));
const U = [{
  id: `k1`,
  name: `Production`,
  secret: `sk-live-4f9a2c71d0e84b6a8F2q`,
  created: `Mar 4, 2026`,
  lastUsed: `2 minutes ago`
}, {
  id: `k2`,
  name: `Staging`,
  secret: `sk-test-91bd03e6aa7c4f12Lm7x`,
  created: `May 18, 2026`,
  lastUsed: `Yesterday`
}, {
  id: `k3`,
  name: `Zapier sync`,
  secret: `sk-live-0c6e57b2f1a948d3Qz4k`,
  created: `Aug 2, 2026`,
  lastUsed: `Sep 28, 2026`
}];
const W = [{
  value: `eu`,
  label: `Europe (Frankfurt)`
}, {
  value: `us`,
  label: `United States (Virginia)`
}, {
  value: `ap`,
  label: `Asia Pacific (Singapore)`
}];
const daily = Array.from({
  length: 30
}, (e, t) => ({
  label: `Oct ${t + 1}`,
  value: t < 10 ? Math.round(900 + 650 * Math.abs(Math.sin(t * 1.3)) + t * 40) : null
}));
const K = secret => `${secret.slice(0, 8)}••••••••••••${secret.slice(-4)}`;
const q = name => name.split(/[\s@.]+/).filter(Boolean).slice(0, 2).map(e => e[0].toUpperCase()).join(``);
function JComponent({
  defaultTab = `Billing`,
  ...rest
}) {
  let [n, setN] = P.useState(defaultTab);
  let [i, toast] = __1();
  return <X1 active={`Settings`} nav={nav} {...rest}><style href={`ui-settings-billing`} precedence={`default`}>{$}</style><div className={`ui-sb`}><h1 className={`ui-as-page-title`}>{`Settings`}</h1><p className={`ui-as-page-sub`}>{`Manage your workspace, your team, your plan and access to the API.`}</p><div className={`ui-as-toolbar ui-sb__bar`}><V1 items={items} value={n} onChange={e => setN(e)} /></div><div key={n} className={`ui-sb__body`}>{n === `General` && <XComponent workspace={rest.workspace ?? `Acme`} toast={toast} />}{n === `Members` && <ZComponent toast={toast} />}{n === `Billing` && <YComponent toast={toast} />}{n === `API keys` && <QComponent toast={toast} />}</div></div>{i}</X1>;
}
function YComponent({
  toast
}) {
  let [t, setT] = P.useState({
    id: `pro`,
    cycle: `monthly`
  });
  let [r, setR] = P.useState(`monthly`);
  let [c, setC] = P.useState(false);
  let [u, setU] = P.useState(`billing@acme.com`);
  let [f, setF] = P.useState(null);
  let mRef = P.useRef(null);
  let h = R.find(e => e.id === t.id);
  let g = t.cycle === `monthly` ? `$${h.monthly}/mo` : `$${h.yearly * 12}/yr`;
  return <><div className={`ui-sb-overview`}><div className={`ui-sb-usage ui-as-rise`} style={{
        "--i": 0
      }}><O1 title={`Usage this period`} plan={`${h.name} plan`} total={50000} used={[{
          label: `Chat`,
          value: 18400
        }, {
          label: `Agents`,
          value: 9200
        }, {
          label: `API`,
          value: 4100
        }, {
          label: `Images`,
          value: 2300
        }]} limits={[{
          label: `Seats`,
          used: 8,
          total: 10
        }, {
          label: `Storage`,
          used: 42.6,
          total: 100,
          unit: `GB`
        }]} daily={daily} resetAt={new Date(2026, 10, 12)} onUpgrade={t => toast(t === `ok` ? `Opening plans` : `1,000 credits added`)} /></div><div className={`ui-sb-stack`}><section className={`ui-sb-card ui-sb-plan ui-as-rise`} style={{
          "--i": 1
        }}><div className={`ui-sb-plan__top`}><span className={`ui-sb-cap`}>{`Current plan`}</span><span className={`ui-sb-pill`} data-tone={c ? `amber` : `green`}>{c ? `Cancels soon` : `Active`}</span></div><strong className={`ui-sb-plan__name`}>{h.name}{` `}<span>{`· `}{g}</span></strong><p className={`ui-sb-muted`}>{c ? `Your plan ends on ${z}. You keep every feature until then.` : `Renews on ${z} · billed ${t.cycle}`}</p><div className={`ui-sb-actions`}><I1 size={`sm`} onClick={() => mRef.current?.scrollIntoView({
              behavior: `smooth`,
              block: `start`
            })}>{`Change plan`}</I1>{c ? <I1 size={`sm`} variant={`secondary`} onClick={() => {
              setC(false);
              toast(`${h.name} plan resumed`);
            }}>{`Resume plan`}</I1> : <I1 size={`sm`} variant={`ghost`} onClick={() => {
              setC(true);
              toast(`Plan canceled – active until ${z}`);
            }}>{`Cancel plan`}</I1>}</div></section><section className={`ui-sb-card ui-sb-pay ui-as-rise`} style={{
          "--i": 2
        }}><div className={`ui-sb-pay__row`}><span className={`ui-sb-visa`} aria-hidden={`true`}>{`VISA`}</span><span className={`ui-sb-pay__text`}><b>{`Visa •••• 4242`}</b><span>{`Expires 08/2028`}</span></span><I1 size={`sm`} variant={`secondary`} icon=<_ icon={j} size={14} /> onClick={() => toast(`Payment method updated`)}>{`Update`}</I1></div><div className={`ui-sb-pay__row`}><span className={`ui-sb-tile`} aria-hidden={`true`}><_ icon={t_8} size={15} /></span>{f === null ? <><span className={`ui-sb-pay__text`}><b>{u}</b><span>{`Invoices and receipts go here`}</span></span><I1 size={`sm`} variant={`secondary`} onClick={() => setF(u)}>{`Edit`}</I1></> : <form className={`ui-sb-inline`} onSubmit={t => {
              t.preventDefault();
              if (f?.includes(`@`)) {
                setU(f.trim());
                setF(null);
                toast(`Billing email updated`);
              }
            }}><input className={`ui-sb-input`} type={`email`} autoFocus value={f} aria-label={`Billing email`} onChange={e => setF(e.target.value)} onKeyDown={e => e.key === `Escape` && setF(null)} /><I1 size={`sm`} type={`submit`} disabled={!f.includes(`@`)}>{`Save`}</I1><I1 size={`sm`} variant={`ghost`} type={`button`} onClick={() => setF(null)}>{`Cancel`}</I1></form>}</div></section></div></div><section ref={mRef} className={`ui-sb-section`}><div className={`ui-sb-section__head`}><div><h2 className={`ui-sb-h2`}>{`Plans`}</h2><p className={`ui-sb-muted`}>{`Switch any time – we prorate the difference.`}</p></div><A1 size={`sm`} aria-label={`Billing period`} value={r} onChange={setR} options={[{
          value: `monthly`,
          label: `Monthly`
        }, {
          value: `yearly`,
          label: `Yearly`,
          badge: `−20%`
        }]} /></div><div className={`ui-sb-plans`}>{R.map((a, o) => {
          let disabled = a.id === t.id && r === t.cycle;
          let c = a.id === t.id ? `Switch to ${r}` : `Switch to ${a.name}`;
          return <div key={a.id} className={`ui-sb-card ui-sb-tier ui-as-rise`} data-current={a.id === t.id || undefined} style={{
            "--i": o
          }}><div className={`ui-sb-tier__top`}><b>{a.name}</b>{a.id === t.id && <span className={`ui-sb-pill`}>{`Current`}</span>}</div><div className={`ui-sb-tier__price`}><strong key={r}>{`$`}{r === `monthly` ? a.monthly : a.yearly}</strong><span>{`/ month`}{r === `yearly` ? `, billed yearly` : ``}</span></div><p className={`ui-sb-muted`}>{a.blurb}</p><ul className={`ui-sb-tier__list`}>{a.features.map(e => <li key={e}><_ icon={y} size={14} />{e}</li>)}</ul><I1 size={`sm`} variant={disabled ? `secondary` : a.id === `team` ? `primary` : `secondary`} disabled={disabled} onClick={() => {
              setT({
                id: a.id,
                cycle: r
              });
              setC(false);
              toast(`Switched to ${a.name} · ${r}`);
            }}>{disabled ? `Current plan` : c}</I1></div>;
        })}</div></section><section className={`ui-sb-section`}><div className={`ui-sb-section__head`}><h2 className={`ui-sb-h2`}>{`Invoices`}</h2><I1 size={`sm`} variant={`secondary`} icon=<_ icon={t_6} size={14} /> onClick={() => toast(`Downloading all invoices`)}>{`Download all`}</I1></div><div className={`ui-sb-table-wrap`}><table className={`ui-sb-table`}><thead><tr><th>{`Date`}</th><th>{`Invoice`}</th><th className={`ui-sb-num`}>{`Amount`}</th><th>{`Status`}</th><th aria-label={`Download`} /></tr></thead><tbody>{B.map(t => <tr key={t.id}><td>{t.date}</td><td className={`ui-sb-mono`}>{t.id}</td><td className={`ui-sb-num`}>{t.amount}</td><td><span className={`ui-sb-pill`} data-tone={t.status === `Paid` ? `green` : `amber`}>{t.status}</span></td><td className={`ui-sb-end`}><B1 icon={t_6} label={`Download ${t.id}`} onClick={() => toast(`Downloaded ${t.id}.pdf`)} /></td></tr>)}</tbody></table></div></section></>;
}
function XComponent({
  workspace,
  toast
}) {
  let nRef = P.useRef({
    name: workspace,
    region: `eu`
  });
  let [r, setR] = P.useState(workspace);
  let [o, setO] = P.useState(`eu`);
  let c = r.trim() !== nRef.current.name || o !== nRef.current.region;
  return <form className={`ui-sb-tray ui-sb-form ui-as-rise`} onSubmit={e => {
    e.preventDefault();
    if (c && r.trim()) {
      nRef.current = {
        name: r.trim(),
        region: o
      };
      setR(r.trim());
      toast(`Workspace settings saved`);
    }
  }}><div className={`ui-sb-card ui-sb-form__fields`}><div className={`ui-sb-field`}><span className={`ui-sb-field__label`}><b>{`Logo`}</b><span>{`Shown in the sidebar and on invites. Square, at least 128 px.`}</span></span><div className={`ui-sb-logo-row`}><span className={`ui-sb-logo`}>{(r.trim() || `A`)[0].toUpperCase()}</span><I1 type={`button`} size={`sm`} variant={`secondary`} icon=<_ icon={M} size={14} /> onClick={() => toast(`Logo uploaded`)}>{`Upload`}</I1></div></div><label className={`ui-sb-field`}><span className={`ui-sb-field__label`}><b>{`Workspace name`}</b><span>{`Your team sees this name everywhere.`}</span></span><input className={`ui-sb-input`} value={r} onChange={e => setR(e.target.value)} /></label><div className={`ui-sb-field`}><span className={`ui-sb-field__label`}><b>{`Data region`}</b><span>{`Where chats, files and embeddings are stored.`}</span></span><div><M1 value={o} options={W} onChange={setO} icon={t_7} align={`start`} /></div></div></div><div className={`ui-sb-form__foot`}><I1 type={`button`} size={`sm`} variant={`ghost`} disabled={!c} onClick={() => {
        setR(nRef.current.name);
        return setO(nRef.current.region);
      }}>{`Discard`}</I1><I1 type={`submit`} size={`sm`} disabled={!c || !r.trim()}>{`Save changes`}</I1></div></form>;
}
function ZComponent({
  toast
}) {
  let [t, setT] = P.useState(V);
  let [open, setOpen] = P.useState(false);
  let [o, setO] = P.useState(``);
  let c = /^\S+@\S+\.\S+$/.test(o.trim());
  return <section className={`ui-sb-section ui-sb-section--first`}><div className={`ui-sb-section__head`}><div><h2 className={`ui-sb-h2`}>{`Members`}</h2><p className={`ui-sb-muted`}>{t.length}{` of 10 seats used`}</p></div><span className={`ui-as-anchor`}><I1 size={`sm`} icon=<_ icon={t_10} size={14} /> onClick={() => setOpen(e => !e)}>{`Invite`}</I1><H1 open={open} onClose={() => setOpen(false)} align={`end`} className={`ui-as-menu ui-sb-invite`}><form onSubmit={t => {
            t.preventDefault();
            if (!c) {
              return;
            }
            let email = o.trim();
            setT(e => [...e, {
              id: `m${Date.now()}`,
              name: email.split(`@`)[0],
              email,
              role: `Member`,
              invited: true
            }]);
            setO(``);
            setOpen(false);
            toast(`Invite sent to ${email}`);
          }}><b>{`Invite a teammate`}</b><span>{`They get an email with a link to join.`}</span><input className={`ui-sb-input`} autoFocus type={`email`} value={o} placeholder={`name@company.com`} aria-label={`Email address`} onChange={e => setO(e.target.value)} /><I1 size={`sm`} type={`submit`} disabled={!c}>{`Send invite`}</I1></form></H1></span></div><div className={`ui-sb-tray`}><div className={`ui-sb-tray__head`} aria-hidden={`true`}><span>{`Member`}</span><span className={`ui-sb-tray__end`}>{`Role`}</span></div><div className={`ui-sb-card ui-sb-list`}>{t.map((t, r) => <div key={t.id} className={`ui-sb-row ui-as-rise`} style={{
          "--i": r
        }}><span className={`ui-sb-avatar`} data-tone={r % 4}>{q(t.name)}</span><span className={`ui-sb-row__text`}><b>{t.name}{t.invited && <span className={`ui-sb-pill`}>{`Invited`}</span>}</b><span>{t.email}</span></span>{t.role === `Owner` ? <span className={`ui-sb-role`}>{`Owner`}</span> : <M1 value={t.role} options={H} onChange={role => {
            setT(e => e.map(e => {
              if (e.id === t.id) {
                return {
                  ...e,
                  role
                };
              }
              return e;
            }));
            toast(`${t.name} is now ${role.toLowerCase() === `admin` ? `an` : `a`} ${role}`);
          }} />}{t.role === `Owner` ? <span className={`ui-sb-row__spacer`} /> : <G1 align={`end`} items={[...(t.invited ? [{
            label: `Resend invite`,
            icon: t_8,
            onSelect: () => toast(`Invite resent to ${t.email}`)
          }] : []), {
            label: t.invited ? `Revoke invite` : `Remove from workspace`,
            icon: t_5,
            danger: true,
            onSelect: () => {
              setT(e => e.filter(e => e.id !== t.id));
              toast(t.invited ? `Invite to ${t.email} revoked` : `${t.name} removed`);
            }
          }]} trigger={({
            open,
            toggle
          }) => <button type={`button`} className={`ui-as-tool`} aria-label={`More for ${t.name}`} aria-expanded={open} onClick={toggle}><_ icon={t_9} size={15} /></button>} />}</div>)}</div></div></section>;
}
function QComponent({
  toast
}) {
  let [t, setT] = P.useState(U);
  let onClick = () => {
    let r = t.length + 1;
    let secret = `sk-live-${Array.from({
      length: 20
    }, () => `0123456789abcdefABCDEFxyz`[Math.floor(Math.random() * 25)]).join(``)}`;
    setT(e => [{
      id: `k${Date.now()}`,
      name: `New key ${r}`,
      secret,
      created: `Just now`,
      lastUsed: `Never`
    }, ...e]);
    toast(`API key created`);
  };
  let a = t => {
    navigator.clipboard?.writeText(t.secret).catch(() => {});
    toast(`${t.name} key copied`);
  };
  return <section className={`ui-sb-section ui-sb-section--first`}><div className={`ui-sb-section__head`}><div><h2 className={`ui-sb-h2`}>{`API keys`}</h2><p className={`ui-sb-muted`}>{`Keys give full access to this workspace – keep them secret.`}</p></div><I1 size={`sm`} icon=<_ icon={S} size={14} /> onClick={onClick}>{`Create key`}</I1></div>{t.length === 0 ? <div className={`ui-as-rise`}><Y1 title={`No API keys`} text={`Create a key to call the API from your own code.`} /></div> : <div className={`ui-sb-tray`}><div className={`ui-sb-tray__head`} aria-hidden={`true`}><span>{`Name`}</span><span className={`ui-sb-tray__end ui-sb-tray__end--key`}>{`Key`}</span></div><div className={`ui-sb-card ui-sb-list`}>{t.map((t, r) => <div key={t.id} className={`ui-sb-row ui-as-rise`} style={{
          "--i": r
        }}><span className={`ui-sb-tile`} aria-hidden={`true`}><_ icon={N} size={15} /></span><span className={`ui-sb-row__text`}><b>{t.name}</b><span>{`Created `}{t.created}{` · last used `}{t.lastUsed}</span></span><code className={`ui-sb-key`}>{K(t.secret)}</code><B1 icon={t_4} label={`Copy ${t.name} key`} onClick={() => a(t)} /><button type={`button`} className={`ui-as-tool ui-sb-danger`} aria-label={`Revoke ${t.name} key`} title={`Revoke`} onClick={() => {
            setT(e => e.filter(e => e.id !== t.id));
            toast(`${t.name} key revoked`);
          }}><_ icon={t_5} size={15} /></button></div>)}</div></div>}</section>;
}
var $ = `.ui-sb{width: min(1040px, calc(100% - 64px));margin: 0 auto;padding: 40px 0 64px}.ui-sb__bar{position: sticky;top: 0;z-index: 5;margin: 10px -16px 0;padding: 18px 16px 12px;background: var(--panel)}.ui-sb__bar::after{content: "";position: absolute;left: 0;right: 0;top: 100%;height: 24px;background: linear-gradient(to bottom, var(--panel), transparent);pointer-events: none}.ui-sb__body{margin-top: 14px}.ui-sb-card{border-radius: 14px;background: var(--card);box-shadow: 0 0 0 1px var(--line), var(--shadow)}.ui-sb-cap{font-size: 13px;color: var(--muted)}.ui-sb-muted{margin: 0;font-size: 13px;line-height: 19px;color: var(--muted)}.ui-sb-h2{margin: 0;font-size: 15px;line-height: 20px;font-weight: 500;color: var(--ink)}.ui-sb-actions{display: flex;align-items: center;gap: 6px}.ui-sb-pill{display: inline-flex;align-items: center;height: 20px;padding: 0 7px;border-radius: 999px;background: var(--chip);font-size: 11.5px;font-weight: 500;line-height: 1;color: var(--text);white-space: nowrap}.ui-sb-pill[data-tone="green"]{background: #ecfdf3;color: #15803d}.ui-sb-pill[data-tone="amber"]{background: #fff7e6;color: #b45309}:where(.dark, [data-theme="dark"]) .ui-sb-pill[data-tone="green"]{background: rgba(34, 197, 94, 0.14);color: #4ade80}:where(.dark, [data-theme="dark"]) .ui-sb-pill[data-tone="amber"]{background: rgba(245, 158, 11, 0.14);color: #fbbf24}.ui-sb-overview{display: grid;gap: 16px}.ui-sb-stack{display: grid;grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);gap: 16px;align-items: stretch}.ui-sb-usage .ui-um{max-width: none}@container ui-as-main (min-width: 901px){.ui-sb-usage .ui-um__inner{display: grid;grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);column-gap: 40px;padding: 16px 20px 18px}.ui-sb-usage .ui-um__head{grid-column: 1;grid-row: 1}.ui-sb-usage .ui-um__figure{grid-column: 1;grid-row: 2}.ui-sb-usage .ui-um__bar{grid-column: 1;grid-row: 3}.ui-sb-usage .ui-um__legend{grid-column: 1;grid-row: 4;grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);column-gap: 24px}.ui-sb-usage .ui-um__daily{grid-column: 2;grid-row: 1 / span 3;align-self: end;margin-top: 0}.ui-sb-usage .ui-um__daily .ui-um__spark{height: 64px}.ui-sb-usage .ui-um__limits{grid-column: 2;grid-row: 4;align-self: start;margin-top: 10px}}.ui-sb-plan{display: grid;gap: 8px;padding: 16px 18px 18px}.ui-sb-plan__top{display: flex;align-items: center;justify-content: space-between}.ui-sb-plan__name{font-size: 22px;line-height: 28px;font-weight: 500;letter-spacing: -0.02em;color: var(--ink)}.ui-sb-plan__name span{color: var(--muted);font-weight: 400}.ui-sb-plan .ui-sb-actions{margin-top: 8px}.ui-sb-pay{display: grid;padding: 4px 18px}.ui-sb-pay__row{display: flex;align-items: center;gap: 12px;min-height: 64px}.ui-sb-pay__row + .ui-sb-pay__row{border-top: 1px solid var(--line-soft)}.ui-sb-pay__text{display: grid;flex: 1;gap: 2px;min-width: 0}.ui-sb-pay__text b, .ui-sb-row__text b{display: flex;align-items: center;gap: 8px;overflow: hidden;font-size: 13.5px;line-height: 19px;font-weight: 500;color: var(--ink);white-space: nowrap;text-overflow: ellipsis}.ui-sb-pay__text span, .ui-sb-row__text > span{overflow: hidden;font-size: 12.5px;line-height: 17px;color: var(--muted);white-space: nowrap;text-overflow: ellipsis}.ui-sb-visa{display: grid;place-items: center;flex: none;width: 42px;height: 28px;border-radius: 6px;background: #1a1f71;font-size: 11px;font-style: italic;font-weight: 800;letter-spacing: 0.02em;color: #ffffff}.ui-sb-tile{display: grid;place-items: center;flex: none;width: 32px;height: 32px;border-radius: 9px;background: var(--chip);color: var(--muted)}.ui-sb-pay .ui-sb-tile{width: 42px;height: 28px;border-radius: 6px}.ui-sb-inline{display: flex;flex: 1;align-items: center;gap: 6px;min-width: 0}.ui-sb-inline .ui-sb-input{flex: 1;min-width: 0}.ui-sb-input{height: 34px;padding: 0 10px;border: 0;border-radius: 9px;background: var(--card);box-shadow: 0 0 0 1px var(--line);font: inherit;font-size: 13px;color: var(--ink);outline: none;transition: box-shadow 140ms ease}.ui-sb-input::placeholder{color: var(--placeholder)}.ui-sb-input:focus{box-shadow: 0 0 0 1px var(--line-strong), 0 0 0 3px var(--hover)}.ui-sb-section{margin-top: 40px;scroll-margin-top: 72px}.ui-sb-section--first{margin-top: 10px}.ui-sb-section__head{display: flex;align-items: flex-end;justify-content: space-between;gap: 16px;margin-bottom: 14px}.ui-sb-section__head .ui-sb-muted{margin-top: 2px}.ui-sb-plans{display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: 16px}.ui-sb-tier{display: flex;flex-direction: column;gap: 10px;padding: 16px 18px 18px}.ui-sb-tier[data-current]{box-shadow: 0 0 0 1px color-mix(in srgb, var(--ink) 22%, transparent), 0 0 0 5px color-mix(in srgb, var(--ink) 6%, transparent), var(--shadow)}.ui-sb-tier__top{display: flex;align-items: center;justify-content: space-between;height: 20px}.ui-sb-tier__top b{font-size: 14px;font-weight: 500;color: var(--ink)}.ui-sb-tier__price{display: flex;align-items: baseline;gap: 6px}.ui-sb-tier__price strong{font-size: 26px;line-height: 32px;font-weight: 500;letter-spacing: -0.02em;color: var(--ink);font-variant-numeric: tabular-nums;animation: ui-as-rise 360ms var(--ease) both}.ui-sb-tier__price span{font-size: 12.5px;color: var(--muted)}.ui-sb-tier__list{display: grid;gap: 7px;flex: 1;margin: 4px 0 6px;padding: 12px 0 0;border-top: 1px solid var(--line-soft);list-style: none}.ui-sb-tier__list li{display: flex;align-items: center;gap: 8px;font-size: 13px;color: var(--text)}.ui-sb-tier__list svg{color: var(--muted)}.ui-sb-tier .ui-button{width: 100%}.ui-sb-table-wrap{overflow-x: auto;padding: 0 4px 4px;border-radius: 18px;background: var(--tray)}.ui-sb-table{width: 100%;border-collapse: separate;border-spacing: 0;font-size: 13px}.ui-sb-table th{height: 38px;padding: 0 18px;font-size: 12px;font-weight: 500;color: var(--muted);text-align: left;white-space: nowrap}.ui-sb-table td{height: 52px;padding: 0 18px;background: var(--card);color: var(--text);white-space: nowrap;transition: background-color 140ms ease}.ui-sb-table tbody tr + tr td{border-top: 1px solid var(--line-soft)}.ui-sb-table tbody tr:first-child td{border-top: 1px solid var(--line)}.ui-sb-table tbody tr:last-child td{border-bottom: 1px solid var(--line)}.ui-sb-table tbody td:first-child{border-left: 1px solid var(--line)}.ui-sb-table tbody td:last-child{border-right: 1px solid var(--line)}.ui-sb-table tbody tr:first-child td:first-child{border-top-left-radius: 14px}.ui-sb-table tbody tr:first-child td:last-child{border-top-right-radius: 14px}.ui-sb-table tbody tr:last-child td:first-child{border-bottom-left-radius: 14px}.ui-sb-table tbody tr:last-child td:last-child{border-bottom-right-radius: 14px}.ui-sb-table tbody tr:hover td{background: var(--subtle)}.ui-sb-table .ui-sb-num{text-align: right;font-variant-numeric: tabular-nums}.ui-sb-table td.ui-sb-num{color: var(--ink)}.ui-sb-table .ui-sb-end{width: 1%;padding-right: 12px}.ui-sb-mono{font-variant-numeric: tabular-nums;color: var(--muted) !important}.ui-sb-tray{padding: 0 4px 4px;border-radius: 18px;background: var(--tray)}.ui-sb-tray > .ui-sb-card{box-shadow: 0 0 0 1px var(--line)}.ui-sb-tray__head{display: flex;align-items: center;justify-content: space-between;height: 38px;padding: 0 18px;font-size: 12px;font-weight: 500;color: var(--muted)}.ui-sb-tray__end{padding-right: 44px}.ui-sb-tray__end--key{padding-right: 258px}.ui-sb-form{display: grid;padding: 4px}.ui-sb-form__fields{padding: 4px 22px}.ui-sb-field{display: grid;grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);gap: 24px;align-items: center;padding: 20px 0}.ui-sb-field + .ui-sb-field{border-top: 1px solid var(--line-soft)}.ui-sb-field__label{display: grid;gap: 3px}.ui-sb-field__label b{font-size: 13.5px;font-weight: 500;color: var(--ink)}.ui-sb-field__label span{font-size: 12.5px;line-height: 17px;color: var(--muted)}.ui-sb-logo-row{display: flex;align-items: center;gap: 12px}.ui-sb-logo{display: grid;place-items: center;width: 44px;height: 44px;border-radius: 12px;background: var(--ink);font-size: 18px;font-weight: 600;color: var(--on-ink)}.ui-sb-form__foot{display: flex;justify-content: flex-end;gap: 6px;padding: 6px 2px 2px}.ui-sb-list{display: grid;padding: 4px 8px}.ui-sb-row{display: flex;align-items: center;gap: 12px;min-height: 60px;padding: 0 10px}.ui-sb-row + .ui-sb-row{border-top: 1px solid var(--line-soft)}.ui-sb-row__text{display: grid;flex: 1;gap: 2px;min-width: 0}.ui-sb-row__spacer{width: 32px;flex: none}.ui-sb-role{padding: 0 10px;font-size: 13px;color: var(--muted)}.ui-sb-avatar{display: grid;place-items: center;flex: none;width: 32px;height: 32px;border-radius: 50%;background: #eef3ff;font-size: 12px;font-weight: 500;color: #3756d9}.ui-sb-avatar[data-tone="1"]{background: #fdf2f8;color: #be185d}.ui-sb-avatar[data-tone="2"]{background: #ecfdf3;color: #15803d}.ui-sb-avatar[data-tone="3"]{background: #fff7e6;color: #b45309}:where(.dark, [data-theme="dark"]) .ui-sb-avatar{background: rgba(109, 139, 255, 0.16);color: #a5b8ff}:where(.dark, [data-theme="dark"]) .ui-sb-avatar[data-tone="1"]{background: rgba(236, 72, 153, 0.16);color: #f9a8d4}:where(.dark, [data-theme="dark"]) .ui-sb-avatar[data-tone="2"]{background: rgba(34, 197, 94, 0.14);color: #86efac}:where(.dark, [data-theme="dark"]) .ui-sb-avatar[data-tone="3"]{background: rgba(245, 158, 11, 0.14);color: #fcd34d}.ui-sb-key{padding: 5px 9px;border-radius: 8px;background: var(--chip);font-family: ui-monospace, "SF Mono", Menlo, monospace;font-size: 12px;color: var(--text);white-space: nowrap}.ui-sb-danger:hover{color: #dc2626}.ui-sb-danger:hover svg{color: #dc2626}.ui-sb-invite{width: 280px;padding: 14px}.ui-sb-invite form{display: grid;gap: 6px}.ui-sb-invite b{font-size: 13.5px;font-weight: 500;color: var(--ink)}.ui-sb-invite span{font-size: 12.5px;color: var(--muted)}.ui-sb-invite .ui-sb-input{margin: 6px 0 4px}@container ui-as-main (max-width: 900px){.ui-sb-stack{grid-template-columns: minmax(0, 1fr)}.ui-sb-plans{grid-template-columns: minmax(0, 1fr)}}@container ui-as-main (max-width: 640px){.ui-sb-field{grid-template-columns: minmax(0, 1fr);gap: 10px}.ui-sb-key, .ui-sb-tray__end--key{display: none}.ui-sb-section__head{flex-wrap: wrap;align-items: flex-start}}@container ui-as (max-width: 900px){.ui-sb{width: calc(100% - 48px)}}@container ui-as (max-width: 600px){.ui-sb{width: calc(100% - 32px);padding: 52px 0 48px}.ui-sb__bar{margin: 6px -12px 0;padding: 14px 12px 10px;overflow-x: auto}.ui-sb-pay{padding: 4px 14px}.ui-sb-pay__row{flex-wrap: wrap;padding: 12px 0}.ui-sb-form__fields{padding: 4px 16px}.ui-sb-tray__end{display: none}}`;
function EeComponent() {
  return <N1><JComponent onNavigate={onNavigate} /></N1>;
}
export { EeComponent as default };
