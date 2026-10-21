// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
import { t as N1 } from "./component-MWY_GX0G.jsx";
const r = t_1();
const i = t();
let a = 0;
const o = e => `${e}-${Date.now().toString(36)}-${(a++).toString(36)}`;
async function ee(e) {
  let t = e.toLowerCase();
  await new Promise(resolve => setTimeout(resolve, 900));
  if (/email|mail|announce/.test(t)) {
    return `Here's a short draft:

Subject: Pricing is live

Hi everyone – our new plans are out today. Individual stays at $199 once, and teams now pay per seat. Existing customers keep their price. Reply here with any questions.`;
  }
  if (/summar|notes|interview/.test(t)) {
    return `Three themes stood out:

1. People compare plans in a table before they read anything else.
2. Seat pricing feels fair once the per-seat price is visible.
3. Two interviewees asked for an annual invoice for their finance team.`;
  }
  if (/price|pricing|tier/.test(t)) {
    return `Keep three tiers. Free for discovery, Individual as a one-time purchase, Team priced per seat. Show the per-seat price right under the total – that's what people check first.`;
  }
  return `Good question. I'd start by writing down the outcome you want, then list the two or three steps that get you there. Want me to turn this into a checklist?`;
}
function S1Component({
  userName = `Lena`,
  userAvatar,
  workspace = `N`,
  pinned = [`Writing assistant`, `Data analyst`, `Knowledge base`],
  conversations = te,
  projects = ne,
  respond,
  className
}) {
  let [g, setG] = r.useState(conversations);
  let [v, setV] = r.useState(projects);
  let [b, setB] = r.useState({
    kind: `welcome`
  });
  let [S, setS] = r.useState(false);
  let [w, setW] = r.useState(``);
  let [E, setE] = r.useState(null);
  let [O, setO] = r.useState(null);
  let [A, setA] = r.useState(null);
  let [M, setM] = r.useState(false);
  let [P, setP] = r.useState(``);
  let [I, setI] = r.useState(null);
  let [R, setR] = r.useState(``);
  let [B, setB_1] = r.useState(`recent`);
  let [H, setH] = r.useState(projects[0]?.id ?? ``);
  let WRef = r.useRef(null);
  let GRef = r.useRef(null);
  let KRef = r.useRef(undefined);
  r.useEffect(() => {
    if ((GRef.current?.offsetWidth ?? 1000) <= 720) {
      setS(true);
    }
  }, []);
  r.useEffect(() => () => window.clearInterval(KRef.current), []);
  r.useEffect(() => {
    if (!A && !M) {
      return;
    }
    let e = e => {
      if (!e.target.closest(`[data-popover]`)) {
        setA(null);
      }
    };
    let t = e => {
      if (e.key === `Escape`) {
        setA(null);
        setM(false);
      }
    };
    window.addEventListener(`pointerdown`, e);
    window.addEventListener(`keydown`, t);
    return () => {
      window.removeEventListener(`pointerdown`, e);
      window.removeEventListener(`keydown`, t);
    };
  }, [A, M]);
  let q = b.kind === `chat` ? g.find(e => e.id === b.id) : undefined;
  r.useEffect(() => {
    WRef.current?.scrollTo({
      top: WRef.current.scrollHeight,
      behavior: `smooth`
    });
  }, [q?.messages.length, O?.shown, E]);
  let J = async e => {
    let t = e.trim();
    if (!t || E) {
      return;
    }
    let n = q?.id;
    let r = {
      id: o(`m`),
      role: `user`,
      text: t
    };
    if (n) {
      setG(e => e.map(e => {
        if (e.id === n) {
          return {
            ...e,
            messages: [...e.messages, r]
          };
        }
        return e;
      }));
    } else {
      n = o(`c`);
      let title = t.length > 38 ? `${t.slice(0, 36)}…` : t;
      setG(t => [{
        id: n,
        title,
        messages: [r]
      }, ...t]);
      setB({
        kind: `chat`,
        id: n
      });
    }
    setE(n);
    let i = [...(q?.messages ?? []), r];
    let a = await (respond ? respond(t, i) : ee(t));
    let s = o(`m`);
    setG(e => e.map(e => {
      if (e.id === n) {
        return {
          ...e,
          messages: [...e.messages, {
            id: s,
            role: `assistant`,
            text: a
          }]
        };
      }
      return e;
    }));
    setE(null);
    let length = a.split(/(\s+)/).length;
    setO({
      chat: n,
      msg: s,
      shown: 0
    });
    window.clearInterval(KRef.current);
    KRef.current = window.setInterval(() => {
      setO(e => e && (e.shown >= length ? (window.clearInterval(KRef.current), null) : {
        ...e,
        shown: e.shown + 3
      }));
    }, 40);
  };
  let Y = w.trim().toLowerCase();
  let X = g.filter(e => !Y || e.title.toLowerCase().includes(Y));
  let Z = [...pinned, ...v.filter(e => e.pinned).map(e => e.name)].filter(e => !Y || e.toLowerCase().includes(Y));
  let Q = r.useMemo(() => {
    let e = R.trim().toLowerCase();
    return v.filter(t => !e || `${t.name} ${t.description}`.toLowerCase().includes(e)).sort((e, t) => {
      if (B === `name`) {
        return e.name.localeCompare(t.name);
      }
      return e.updatedDaysAgo - t.updatedDaysAgo;
    });
  }, [v, R, B]);
  let ie = v.find(e => e.id === H);
  let ae = b.kind === `projects` ? `All projects` : q?.title ?? `New chat`;
  let onClick = () => {
    let e = P.trim();
    if (!e) {
      return;
    }
    let t = {
      id: o(`p`),
      name: e,
      description: `New project – add files and chats to it`,
      updatedDaysAgo: 0
    };
    setV(e => [t, ...e]);
    setP(``);
    setM(false);
    setB_1(`recent`);
  };
  let oe = e => {
    if (O?.msg === e.id) {
      return e.text.split(/(\s+)/).slice(0, O.shown).join(``);
    }
    return e.text;
  };
  return <><style href={`ui-ai-workspace`} precedence={`default`}>{re}</style><div ref={GRef} className={[`ui-aw`, className].filter(Boolean).join(` `)} data-collapsed={S || undefined}><aside className={`ui-aw__side`} aria-label={`Workspace`} inert={S}><div className={`ui-aw__side-head`}><span className={`ui-aw__ws`}>{workspace}</span><button type={`button`} className={`ui-aw__icon`} aria-label={`Collapse sidebar`} onClick={() => setS(true)}><U1Component name={`chevronLeft`} /></button></div><label className={`ui-aw__search`}><U1Component name={`search`} size={15} /><input type={`search`} value={w} onChange={e => setW(e.target.value)} placeholder={`Search chats…`} aria-label={`Search chats`} /></label><nav className={`ui-aw__nav`}><button type={`button`} className={`ui-aw__item`} aria-current={b.kind === `welcome` || undefined} onClick={() => setB({
            kind: `welcome`
          })}><U1Component name={`plus`} />{`New chat`}</button><button type={`button`} className={`ui-aw__item`} aria-current={b.kind === `projects` || undefined} onClick={() => setB({
            kind: `projects`
          })}><D1Component />{`Projects`}</button></nav>{Z.length > 0 && <><p className={`ui-aw__group`}>{`Pinned`}</p><div className={`ui-aw__nav`}>{Z.map(e => <button key={e} type={`button`} className={`ui-aw__item`} onClick={() => setB({
              kind: `welcome`
            })}><F1Component /><span className={`ui-aw__ellipsis`}>{e}</span></button>)}</div></>}<p className={`ui-aw__group`}>{`Recents`}</p><div className={`ui-aw__nav ui-aw__recents`}>{X.length === 0 && <p className={`ui-aw__none`}>{`No chats match.`}</p>}{X.map(e => <button key={e.id} type={`button`} className={`ui-aw__item ui-aw__item--plain`} aria-current={b.kind === `chat` && b.id === e.id || undefined} onClick={() => setB({
            kind: `chat`,
            id: e.id
          })}><span className={`ui-aw__ellipsis`}>{e.title}</span></button>)}</div><div className={`ui-aw__user`}>{userAvatar ? <img src={userAvatar} alt={``} width={24} height={24} /> : <span className={`ui-aw__user-dot`}>{userName[0]}</span>}<span>{userName}</span><button type={`button`} className={`ui-aw__icon`} aria-label={`Settings`}><U1Component name={`settings`} /></button></div></aside><main className={`ui-aw__main`}><header className={`ui-aw__bar`}>{S && <button type={`button`} className={`ui-aw__icon`} aria-label={`Open sidebar`} onClick={() => setS(false)}><U1Component name={`panel`} /></button>}<div className={`ui-aw__crumbs`} data-popover><button type={`button`} className={`ui-aw__crumb-btn`} aria-haspopup={`menu`} aria-expanded={A === `project`} onClick={() => setA(A === `project` ? null : `project`)}><span className={`ui-aw__muted`}>{ie?.name ?? `Workspace`}</span><span className={`ui-aw__slash`}>{`/`}</span><span className={`ui-aw__ellipsis`}>{ae}</span><U1Component name={`chevronDown`} size={14} /></button>{A === `project` && <div className={`ui-aw__menu`} role={`menu`}><p className={`ui-aw__menu-title`}>{`Switch project`}</p>{v.slice(0, 6).map(e => <button key={e.id} type={`button`} role={`menuitemradio`} aria-checked={e.id === H} className={`ui-aw__menu-item`} onClick={() => {
                setH(e.id);
                setA(null);
              }}>{e.name}{e.id === H && <U1Component name={`check`} size={14} />}</button>)}</div>}</div><div className={`ui-aw__more`} data-popover><button type={`button`} className={`ui-aw__icon`} aria-label={`More`} aria-haspopup={`menu`} aria-expanded={A === `more`} onClick={() => setA(A === `more` ? null : `more`)}><U1Component name={`moreH`} /></button>{A === `more` && <div className={`ui-aw__menu ui-aw__menu--right`} role={`menu`}><button type={`button`} role={`menuitem`} className={`ui-aw__menu-item`} onClick={() => setA(null)}>{`Share chat`}</button><button type={`button`} role={`menuitem`} className={`ui-aw__menu-item ui-aw__danger`} disabled={!q} onClick={() => {
                if (q) {
                  setG(e => e.filter(e => e.id !== q.id));
                }
                setB({
                  kind: `welcome`
                });
                setA(null);
              }}>{`Delete chat`}</button></div>}</div></header>{b.kind === `welcome` && <section key={`welcome`} className={`ui-aw__welcome`}><h2 className={`ui-aw__hello`}>{`Hello `}{userName}</h2><p className={`ui-aw__sub`}>{`What can I help you with today?`}</p><div className={`ui-aw__composer`}><N1 placeholder={`How can I help you today?`} onSend={e => J(e)} /></div><div className={`ui-aw__starters`}>{[`Summarize my interview notes`, `Draft the pricing announcement email`, `Compare our pricing tiers`].map(e => <button key={e} type={`button`} className={`ui-aw__starter`} onClick={() => J(e)}>{e}</button>)}</div><p className={`ui-aw__disclaimer`}>{`AI can make mistakes – please double-check important answers.`}</p></section>}{b.kind === `chat` && q && <section key={q.id} className={`ui-aw__chat`}><div className={`ui-aw__messages`} ref={WRef} aria-live={`polite`}>{q.messages.map(e => {
              if (e.role === `user`) {
                return <div key={e.id} className={`ui-aw__msg ui-aw__msg--user`}><p>{e.text}</p></div>;
              }
              return <div key={e.id} className={`ui-aw__msg ui-aw__msg--ai`}><span className={`ui-aw__mark`} aria-hidden={`true`} /><div className={`ui-aw__ai-body`}><p>{oe(e)}</p>{O?.msg !== e.id && <C1Component text={e.text} onRetry={() => J(q.messages.filter(e => e.role === `user`).at(-1)?.text ?? ``)} />}</div></div>;
            })}{E === q.id && <div className={`ui-aw__msg ui-aw__msg--ai`}><span className={`ui-aw__mark ui-aw__mark--busy`} aria-hidden={`true`} /><p className={`ui-aw__thinking`}>{`Thinking…`}</p></div>}</div><div className={`ui-aw__composer ui-aw__composer--dock`}><N1 placeholder={`Reply…`} onSend={e => J(e)} /><p className={`ui-aw__disclaimer`}>{`AI can make mistakes – please double-check important answers.`}</p></div></section>}{b.kind === `projects` && <section key={`projects`} className={`ui-aw__projects`}><div className={`ui-aw__projects-head`}><span className={`ui-aw__tile`}><D1Component /></span><div><h2 className={`ui-aw__title`}>{`Projects`}</h2><p className={`ui-aw__sub ui-aw__sub--left`}>{`Keep chats, files and notes for each piece of work together.`}</p></div><button type={`button`} className={`ui-aw__primary`} onClick={() => setM(true)}><U1Component name={`plus`} size={14} />{`Create project`}</button></div><label className={`ui-aw__search ui-aw__search--wide`}><U1Component name={`search`} size={15} /><input type={`search`} value={R} onChange={e => setR(e.target.value)} placeholder={`Search projects…`} aria-label={`Search projects`} /></label><div className={`ui-aw__list-head`}><span>{`All projects (`}{Q.length}{`)`}</span><div className={`ui-aw__sort`} data-popover><button type={`button`} className={`ui-aw__sort-btn`} aria-haspopup={`menu`} aria-expanded={A === `sort`} onClick={() => setA(A === `sort` ? null : `sort`)}>{`Sort by `}<strong>{B === `recent` ? `Recent activity` : `Name`}</strong><U1Component name={`chevronDown`} size={14} /></button>{A === `sort` && <div className={`ui-aw__menu ui-aw__menu--right`} role={`menu`}>{[`recent`, `name`].map(e => <button key={e} type={`button`} role={`menuitemradio`} aria-checked={B === e} className={`ui-aw__menu-item`} onClick={() => {
                  setB_1(e);
                  setA(null);
                }}>{e === `recent` ? `Recent activity` : `Name`}{B === e && <U1Component name={`check`} size={14} />}</button>)}</div>}</div></div><ul className={`ui-aw__grid`}>{Q.map(e => <li key={e.id} className={`ui-aw__project`}><div className={`ui-aw__project-card`}><div className={`ui-aw__project-top`}><D1Component />{I === e.id ? <input className={`ui-aw__rename`} autoFocus defaultValue={e.name} aria-label={`Project name`} onBlur={t => {
                    let n = t.target.value.trim();
                    if (n) {
                      setV(t => t.map(t => {
                        if (t.id === e.id) {
                          return {
                            ...t,
                            name: n
                          };
                        }
                        return t;
                      }));
                    }
                    setI(null);
                  }} onKeyDown={e => {
                    if (e.key === `Enter`) {
                      e.target.blur();
                    }
                    if (e.key === `Escape`) {
                      setI(null);
                    }
                  }} /> : <span className={`ui-aw__project-name`}>{e.name}</span>}{e.pinned && <span className={`ui-aw__pinned`}><F1Component /></span>}<div className={`ui-aw__card-menu`} data-popover><button type={`button`} className={`ui-aw__icon ui-aw__dots`} aria-label={`${e.name} options`} aria-haspopup={`menu`} aria-expanded={A === e.id} onClick={() => setA(A === e.id ? null : e.id)}><U1Component name={`moreV`} /></button>{A === e.id && <div className={`ui-aw__menu ui-aw__menu--right`} role={`menu`}><button type={`button`} role={`menuitem`} className={`ui-aw__menu-item`} onClick={() => {
                        setI(e.id);
                        setA(null);
                      }}><U1Component name={`pencil`} size={14} />{`Rename`}</button><button type={`button`} role={`menuitem`} className={`ui-aw__menu-item`} onClick={() => {
                        setV(t => t.map(t => {
                          if (t.id === e.id) {
                            return {
                              ...t,
                              pinned: !t.pinned
                            };
                          }
                          return t;
                        }));
                        setA(null);
                      }}><F1Component />{e.pinned ? `Unpin` : `Pin`}</button></div>}</div></div><p className={`ui-aw__project-desc`}>{e.description}</p></div><p className={`ui-aw__project-foot`}>{e.updatedDaysAgo === 0 ? `Updated just now` : `Updated ${e.updatedDaysAgo} day${e.updatedDaysAgo === 1 ? `` : `s`} ago`}</p></li>)}</ul>{Q.length === 0 && <p className={`ui-aw__none ui-aw__none--center`}>{`No projects match your search.`}</p>}</section>}<div className={`ui-aw__backdrop`} data-open={M || undefined} onClick={() => setM(false)} aria-hidden={`true`} /><div className={`ui-aw__dialog`} data-open={M || undefined} role={`dialog`} aria-modal={`true`} aria-labelledby={`ui-aw-create`} inert={!M}><div className={`ui-aw__dialog-card`}><h3 id={`ui-aw-create`} className={`ui-aw__dialog-title`}>{`Create project`}</h3><input className={`ui-aw__field`} value={P} onChange={e => setP(e.target.value)} onKeyDown={e => e.key === `Enter` && onClick()} placeholder={`Project name`} aria-label={`Project name`} autoFocus={M} /></div><div className={`ui-aw__dialog-foot`}><button type={`button`} className={`ui-aw__btn`} onClick={() => setM(false)}>{`Cancel`}</button><button type={`button`} className={`ui-aw__primary`} disabled={!P.trim()} onClick={onClick}>{`Create`}</button></div></div></main></div></>;
}
function C1Component({
  text,
  onRetry
}) {
  let [n, setN] = r.useState(false);
  return <div className={`ui-aw__actions`}><button type={`button`} className={`ui-aw__icon`} aria-label={`Copy answer`} onClick={async () => {
      try {
        await navigator.clipboard.writeText(text);
        setN(true);
        setTimeout(() => setN(false), 1400);
      } catch {}
    }}><U1Component name={n ? `check` : `copy`} size={15} /></button><button type={`button`} className={`ui-aw__icon`} aria-label={`Ask again`} onClick={onRetry}><U1Component name={`retry`} size={15} /></button></div>;
}
var te = [{
  id: `c1`,
  title: `Summarize interview notes`,
  messages: [{
    id: `m1`,
    role: `user`,
    text: `Summarize the notes from this week's customer interviews.`
  }, {
    id: `m2`,
    role: `assistant`,
    text: `Three themes stood out:

1. People compare plans in a table before they read anything else.
2. Seat pricing feels fair once the per-seat price is visible.
3. Two interviewees asked for an annual invoice for their finance team.`
  }]
}, {
  id: `c2`,
  title: `Draft launch email`,
  messages: [{
    id: `m3`,
    role: `user`,
    text: `Draft a launch email for the new pricing.`
  }, {
    id: `m4`,
    role: `assistant`,
    text: `Subject: Pricing is live

Hi everyone – our new plans are out today. Existing customers keep their price.`
  }]
}, {
  id: `c3`,
  title: `Rewrite onboarding copy`,
  messages: [{
    id: `m5`,
    role: `user`,
    text: `Make the onboarding copy shorter.`
  }, {
    id: `m6`,
    role: `assistant`,
    text: `Here's a tighter version: “Create your first project – it takes a minute.”`
  }]
}, {
  id: `c4`,
  title: `Plan sprint goals`,
  messages: [{
    id: `m7`,
    role: `user`,
    text: `Help me plan goals for the next sprint.`
  }, {
    id: `m8`,
    role: `assistant`,
    text: `Pick one outcome per team and two stretch goals. Want a template?`
  }]
}];
var ne = [{
  id: `p1`,
  name: `Brand Refresh`,
  description: `Logo, colors and type for the new identity`,
  updatedDaysAgo: 2
}, {
  id: `p2`,
  name: `Customer Research`,
  description: `Interview notes and survey results`,
  updatedDaysAgo: 5
}, {
  id: `p3`,
  name: `Pricing Page`,
  description: `Plans, copy and the comparison table`,
  updatedDaysAgo: 7
}, {
  id: `p4`,
  name: `Mobile App`,
  description: `Navigation patterns and offline mode`,
  updatedDaysAgo: 10
}, {
  id: `p5`,
  name: `Help Center`,
  description: `Guides, FAQs and release notes`,
  updatedDaysAgo: 12
}, {
  id: `p6`,
  name: `Q4 Planning`,
  description: `Goals, budgets and the launch calendar`,
  updatedDaysAgo: 14
}];
const l = {
  plus: [`M12 5v14`, `M5 12h14`],
  search: [`M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z`, `m20 20-4-4`],
  chevronLeft: [`m15 18-6-6 6-6`],
  chevronDown: [`m6 9 6 6 6-6`],
  check: [`M20 6 9 17l-5-5`],
  panel: [`M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z`, `M9 3v18`],
  folder: [`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`],
  pin: [`M12 17v5`, `M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1Z`],
  pencil: [`M21.17 6.81a1 1 0 0 0-3.99-3.99L3.84 16.17a2 2 0 0 0-.5.83l-1.32 4.35a.5.5 0 0 0 .62.62l4.35-1.32a2 2 0 0 0 .83-.5Z`, `m15 5 4 4`],
  settings: [`M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z`, `M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z`],
  moreH: [`M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`, `M19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`, `M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`],
  moreV: [`M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`, `M12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`, `M12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`],
  copy: [`M10 8h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2Z`, `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`],
  retry: [`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`, `M3 3v5h5`]
};
var U1Component = ({
  name,
  size = 16
}) => <svg viewBox={`0 0 24 24`} width={size} height={size} fill={`none`} stroke={`currentColor`} strokeWidth={`1.75`} strokeLinecap={`round`} strokeLinejoin={`round`} aria-hidden={`true`}>{l[name].map(e => <path key={e} d={e} />)}</svg>;
var D1Component = () => <U1Component name={`folder`} />;
var F1Component = () => <U1Component name={`pin`} size={15} />;
var re = `.ui-aw{--ui-aw-side: #f5f5f5;--ui-aw-card: #ffffff;--ui-aw-line: #ececec;--ui-aw-ink: #171717;--ui-aw-text: #404040;--ui-aw-muted: #8f8f8f;--ui-aw-accent: #2f6bff;--ui-aw-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;display: grid;grid-template-columns: 240px minmax(0, 1fr);width: 100%;height: 640px;padding: 8px 8px 8px 0;overflow: hidden;container-type: inline-size;background: var(--ui-aw-side);border-radius: 20px;box-shadow: 0 0 0 1px #e8e8e8;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-aw-ink);-webkit-font-smoothing: antialiased;transition: grid-template-columns 380ms var(--ui-aw-ease), padding 380ms var(--ui-aw-ease)}.ui-aw[data-collapsed]{grid-template-columns: 0px minmax(0, 1fr);padding-left: 8px}.ui-aw *, .ui-aw *::before, .ui-aw *::after{box-sizing: border-box}.ui-aw button{margin: 0;font: inherit;color: inherit;cursor: pointer}.ui-aw button:focus-visible, .ui-aw input:focus-visible{outline: 2px solid var(--ui-aw-accent);outline-offset: 2px}.ui-aw__ellipsis{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;min-width: 0}.ui-aw__muted{color: var(--ui-aw-muted)}.ui-aw__side{display: flex;flex-direction: column;min-width: 0;padding: 6px 8px 4px;overflow: hidden;transition: opacity 240ms ease}.ui-aw[data-collapsed] .ui-aw__side{opacity: 0}.ui-aw__side-head{display: flex;align-items: center;justify-content: space-between;height: 40px;padding: 0 2px 0 6px}.ui-aw__ws{display: grid;place-items: center;width: 28px;height: 28px;border-radius: 8px;background: linear-gradient(#323137, #201e25);box-shadow: 0 0 0 1px #0d0d0d, inset 0 1px 0 rgba(255, 255, 255, 0.14);font-size: 13px;font-weight: 600;color: #fff}.ui-aw__icon{display: grid;place-items: center;flex: none;width: 28px;height: 28px;padding: 0;border: 0;border-radius: 8px;background: transparent;color: var(--ui-aw-muted) !important;transition: background-color 140ms ease, color 140ms ease}.ui-aw__icon:hover{background: rgba(0, 0, 0, 0.05);color: var(--ui-aw-ink) !important}.ui-aw__search{display: flex;align-items: center;gap: 8px;height: 34px;margin: 6px 0 8px;padding: 0 10px;border-radius: 10px;background: #ebebeb;color: var(--ui-aw-muted);transition: box-shadow 160ms ease, background-color 160ms ease}.ui-aw__search:focus-within{background: #fff;box-shadow: 0 0 0 1px var(--ui-aw-accent), 0 0 0 3px rgba(47, 107, 255, 0.12)}.ui-aw__search input{flex: 1;min-width: 0;border: 0;outline: none;background: transparent;font: inherit;font-size: 13.5px;color: var(--ui-aw-ink)}.ui-aw__search input:focus-visible{outline: none}.ui-aw__search input::-webkit-search-cancel-button{display: none}.ui-aw__nav{display: grid;gap: 1px}.ui-aw__item{display: flex;align-items: center;gap: 10px;height: 32px;padding: 0 10px;border: 0;border-radius: 9px;background: transparent;font-size: 13.5px !important;text-align: left;color: var(--ui-aw-text) !important;transition: background-color 140ms ease, color 140ms ease}.ui-aw__item svg{flex: none;color: var(--ui-aw-muted)}.ui-aw__item:hover{background: rgba(0, 0, 0, 0.04);color: var(--ui-aw-ink) !important}.ui-aw__item[aria-current]{background: #e9e9e9;color: var(--ui-aw-ink) !important;font-weight: 500}.ui-aw__item--plain{padding-left: 10px}.ui-aw__group{margin: 16px 10px 4px;font-size: 12px;color: var(--ui-aw-muted)}.ui-aw__recents{overflow-y: auto;min-height: 0;flex: 1;align-content: start;scrollbar-width: none}.ui-aw__none{margin: 4px 10px;font-size: 12.5px;color: var(--ui-aw-muted)}.ui-aw__none--center{text-align: center;margin-top: 24px}.ui-aw__user{display: flex;align-items: center;gap: 10px;height: 44px;padding: 0 2px 0 8px;font-size: 13.5px}.ui-aw__user img, .ui-aw__user-dot{width: 24px;height: 24px;border-radius: 50%;object-fit: cover}.ui-aw__user-dot{display: grid;place-items: center;background: #eef3ff;font-size: 11px;font-weight: 600;color: var(--ui-aw-accent)}.ui-aw__user span:not(.ui-aw__user-dot){flex: 1}.ui-aw__main{position: relative;display: flex;flex-direction: column;min-width: 0;min-height: 0;overflow: hidden;background: var(--ui-aw-card);border: 1px solid #e5e5e5;border-radius: 16px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05)}.ui-aw__bar{display: flex;align-items: center;gap: 8px;height: 48px;padding: 0 10px 0 12px;border-bottom: 1px solid var(--ui-aw-line)}.ui-aw__crumbs, .ui-aw__more, .ui-aw__sort, .ui-aw__card-menu{position: relative}.ui-aw__crumbs{min-width: 0}.ui-aw__crumb-btn{display: flex;align-items: center;gap: 6px;max-width: 100%;height: 30px;padding: 0 8px;border: 0;border-radius: 8px;background: transparent;font-size: 14px !important;font-weight: 500}.ui-aw__crumb-btn:hover{background: #f5f5f5}.ui-aw__crumb-btn svg{flex: none;color: var(--ui-aw-muted)}.ui-aw__slash{color: #c4c4c4;font-weight: 400}.ui-aw__crumb-btn > .ui-aw__muted{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-aw__more{margin-left: auto}.ui-aw__menu{position: absolute;top: calc(100% + 6px);left: 0;z-index: 20;display: grid;gap: 2px;min-width: 190px;padding: 5px;border-radius: 12px;background: #fff;box-shadow: 0 0 0 1px #e5e5e5, 0 12px 30px -8px rgba(0, 0, 0, 0.2);animation: ui-aw-drop 180ms var(--ui-aw-ease)}.ui-aw__menu--right{left: auto;right: 0}.ui-aw__menu-title{margin: 2px 8px 4px;font-size: 11.5px;color: var(--ui-aw-muted)}.ui-aw__menu-item{display: flex;align-items: center;gap: 8px;min-height: 32px;padding: 0 10px;border: 0;border-radius: 8px;background: transparent;font-size: 13px !important;text-align: left;white-space: nowrap}.ui-aw__menu-item:hover:not(:disabled){background: #f5f5f5}.ui-aw__menu-item:disabled{opacity: 0.4;cursor: default}.ui-aw__menu-item svg:last-child:not(:first-child){margin-left: auto;color: var(--ui-aw-accent)}.ui-aw__menu-item[aria-checked="true"]{color: var(--ui-aw-accent) !important;font-weight: 500}.ui-aw__danger{color: #e5484d !important}.ui-aw__welcome{display: flex;flex: 1;flex-direction: column;align-items: center;justify-content: center;padding: 24px;animation: ui-aw-in 420ms var(--ui-aw-ease)}.ui-aw__hello{margin: 0;font-size: 28px;font-weight: 600;letter-spacing: -0.02em}.ui-aw__sub{margin: 6px 0 0;font-size: 15px;color: var(--ui-aw-muted);text-align: center}.ui-aw__sub--left{text-align: left;font-size: 14px}.ui-aw__composer{width: min(640px, 100%);margin-top: 26px}.ui-aw__composer .ui-chat-composer{--ui-cc-span: 3100;max-width: none}.ui-aw__starters{display: flex;flex-wrap: wrap;justify-content: center;gap: 6px;max-width: 640px;margin-top: 14px}.ui-aw__starter{height: 30px;padding: 0 12px;border: 0;border-radius: 999px;background: #fff;box-shadow: 0 0 0 1px #e8e8e8;font-size: 12.5px !important;color: var(--ui-aw-text) !important;max-width: 100%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;transition: background-color 140ms ease, box-shadow 140ms ease}.ui-aw__starter:hover{background: #f7f7f7;box-shadow: 0 0 0 1px #dcdcdc}.ui-aw__disclaimer{margin: 14px 0 0;font-size: 11.5px;text-align: center;color: #a3a3a3}.ui-aw__chat{display: flex;flex: 1;flex-direction: column;min-height: 0;animation: ui-aw-in 360ms var(--ui-aw-ease)}.ui-aw__messages{display: grid;align-content: start;gap: 22px;flex: 1;min-height: 0;padding: 28px max(24px, calc((100% - 620px) / 2)) 16px;overflow-y: auto;scrollbar-width: thin}.ui-aw__msg{animation: ui-aw-in 320ms var(--ui-aw-ease) both}.ui-aw__msg p{margin: 0;white-space: pre-wrap;font-size: 14.5px;line-height: 23px}.ui-aw__msg--user{justify-self: end;max-width: 78%;padding: 10px 14px;border-radius: 16px 16px 4px 16px;background: #f3f3f3}.ui-aw__msg--ai{display: flex;gap: 12px;color: var(--ui-aw-text)}.ui-aw__mark{flex: none;width: 16px;height: 16px;margin-top: 3.5px;border-radius: 50%;background: radial-gradient(circle at 30% 26%, rgba(255, 255, 255, 0.85) 0, rgba(255, 255, 255, 0) 42%), linear-gradient(140deg, #8ec5ff 0%, #2f6bff 48%, #1e3fd6 100%);background-size: 100% 100%, 200% 200%;background-position: 0 0, 0% 0%;box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25), 0 1px 3px rgba(47, 107, 255, 0.35)}.ui-aw__mark--busy{animation: ui-aw-orb 1.6s ease-in-out infinite}.ui-aw__ai-body{min-width: 0}.ui-aw__thinking{background: linear-gradient(90deg, #a3a3a3 0%, #a3a3a3 35%, rgba(255, 255, 255, 0.9) 50%, #a3a3a3 65%, #a3a3a3 100%);background-size: 300% 100%;-webkit-background-clip: text;background-clip: text;-webkit-text-fill-color: transparent;animation: ui-aw-shine 1.6s linear infinite}.ui-aw__actions{display: flex;gap: 2px;margin: 6px 0 0 -6px;opacity: 0.8}.ui-aw__composer--dock{align-self: center;margin: 0;padding: 4px 0 14px}.ui-aw__composer--dock .ui-aw__disclaimer{margin-top: 8px}.ui-aw__projects{flex: 1;min-height: 0;padding: 28px max(24px, calc((100% - 640px) / 2)) 24px;overflow-y: auto;animation: ui-aw-in 360ms var(--ui-aw-ease);scrollbar-width: thin}.ui-aw__projects-head{display: grid;grid-template-columns: auto 1fr auto;align-items: center;gap: 14px}.ui-aw__tile{display: grid;place-items: center;width: 44px;height: 44px;border-radius: 12px;background: #fff;box-shadow: 0 0 0 1px #e5e5e5, 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-aw__title{margin: 0;font-size: 22px;font-weight: 600;letter-spacing: -0.02em}.ui-aw__primary{display: inline-flex;align-items: center;gap: 7px;height: 34px;padding: 0 14px;border: 0;border-radius: 10px;background: linear-gradient(#323137, #201e25);box-shadow: 0 0 0 1px #0d0d0d, 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.12);font-size: 13px !important;font-weight: 500;white-space: nowrap;color: #fff !important}.ui-aw__primary:hover:not(:disabled){background: linear-gradient(#3b3a41, #26242b)}.ui-aw__primary:disabled{opacity: 0.45;cursor: default}.ui-aw__search--wide{margin: 22px 0 16px;height: 38px;background: #f5f5f5}.ui-aw__list-head{display: flex;align-items: center;justify-content: space-between;margin-bottom: 10px;font-size: 13.5px;font-weight: 500}.ui-aw__sort-btn{display: inline-flex;align-items: center;gap: 4px;height: 28px;padding: 0 6px;border: 0;border-radius: 8px;background: transparent;font-size: 13px !important;color: var(--ui-aw-muted) !important}.ui-aw__sort-btn strong{font-weight: 500;color: var(--ui-aw-ink)}.ui-aw__sort-btn:hover{background: #f5f5f5}.ui-aw__grid{display: grid;grid-template-columns: repeat(2, minmax(0, 1fr));gap: 12px;margin: 0;padding: 0;list-style: none}.ui-aw__project{border-radius: 16px;background: var(--ui-aw-side);animation: ui-aw-in 360ms var(--ui-aw-ease) both}.ui-aw__project-card{padding: 14px 14px 14px 16px;border-radius: 16px;background: #fff;box-shadow: 0 0 0 1px #e5e5e5, 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-aw__project-top{display: flex;align-items: center;gap: 10px;min-height: 28px}.ui-aw__project-top > svg{flex: none;color: var(--ui-aw-text)}.ui-aw__project-name{flex: 1;min-width: 0;overflow: hidden;font-size: 14.5px;font-weight: 500;white-space: nowrap;text-overflow: ellipsis}.ui-aw__pinned{display: grid;color: var(--ui-aw-accent)}.ui-aw__dots{opacity: 0}.ui-aw__project:hover .ui-aw__dots, .ui-aw__dots[aria-expanded="true"], .ui-aw__dots:focus-visible{opacity: 1}.ui-aw__rename{flex: 1;min-width: 0;height: 28px;padding: 0 8px;border: 0;border-radius: 7px;outline: none;background: #f5f5f5;box-shadow: 0 0 0 1px var(--ui-aw-accent);font: inherit;font-size: 14px}.ui-aw__project-desc{margin: 4px 0 0 26px;font-size: 13px;line-height: 19px;color: var(--ui-aw-muted)}.ui-aw__project-foot{margin: 0;padding: 9px 16px 10px;font-size: 12px;color: var(--ui-aw-muted)}.ui-aw__backdrop{position: absolute;inset: 0;z-index: 30;background: rgba(23, 23, 23, 0.12);opacity: 0;pointer-events: none;transition: opacity 220ms ease}.ui-aw__backdrop[data-open]{opacity: 1;pointer-events: auto}.ui-aw__dialog{position: absolute;top: 50%;left: 50%;z-index: 31;width: min(380px, calc(100% - 32px));border-radius: 20px;background: var(--ui-aw-side);box-shadow: 0 0 0 1px #e5e5e5, 0 24px 60px -16px rgba(0, 0, 0, 0.3);opacity: 0;pointer-events: none;transform: translate(-50%, -46%) scale(0.98);transition: opacity 220ms ease, transform 320ms var(--ui-aw-ease)}.ui-aw__dialog[data-open]{opacity: 1;pointer-events: auto;transform: translate(-50%, -50%)}.ui-aw__dialog-card{padding: 18px;border-radius: 20px;background: #fff;box-shadow: 0 0 0 1px #e5e5e5}.ui-aw__dialog-title{margin: 0 0 14px;font-size: 16px;font-weight: 600}.ui-aw__field{width: 100%;height: 40px;padding: 0 12px;border: 0;border-radius: 11px;outline: none;background: #fff;box-shadow: 0 0 0 1px #e2e2e2;font: inherit;font-size: 14px}.ui-aw__field:focus{box-shadow: 0 0 0 1px var(--ui-aw-accent), 0 0 0 4px rgba(47, 107, 255, 0.12)}.ui-aw__dialog-foot{display: flex;justify-content: flex-end;gap: 6px;padding: 10px}.ui-aw__btn{height: 34px;padding: 0 14px;border: 0;border-radius: 10px;background: #fff;box-shadow: 0 0 0 1px #e5e5e5;font-size: 13px !important;font-weight: 500}.ui-aw__btn:hover{background: #f7f7f7}@container (max-width: 720px){.ui-aw{grid-template-columns: 0px minmax(0, 1fr);padding-left: 8px}.ui-aw:not([data-collapsed]) .ui-aw__side{position: absolute;inset: 8px auto 8px 8px;z-index: 25;width: 240px;border-radius: 14px;background: var(--ui-aw-side);box-shadow: 0 0 0 1px #e5e5e5, 0 16px 40px -12px rgba(0, 0, 0, 0.25)}.ui-aw__grid{grid-template-columns: minmax(0, 1fr)}.ui-aw__projects-head{grid-template-columns: auto 1fr}.ui-aw__projects-head .ui-aw__primary{grid-column: 1 / -1;justify-self: start}}@container (max-width: 560px){.ui-aw__composer .ui-chat-composer{--ui-cc-span: 1500}.ui-aw__welcome{padding: 24px 16px}}@keyframes ui-aw-in{from{opacity: 0;transform: translateY(4px)}}@keyframes ui-aw-drop{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}@keyframes ui-aw-orb{0%, 100%{background-position: 0 0, 0% 0%;transform: scale(1)}50%{background-position: 0 0, 100% 100%;transform: scale(0.82)}}@keyframes ui-aw-shine{from{background-position: 100% 0}to{background-position: 0% 0}}@media (prefers-reduced-motion: reduce){.ui-aw, .ui-aw__side, .ui-aw__dialog, .ui-aw__backdrop{transition: none}.ui-aw__welcome, .ui-aw__chat, .ui-aw__projects, .ui-aw__msg, .ui-aw__project, .ui-aw__menu, .ui-aw__mark--busy, .ui-aw__thinking{animation: none}}.ui-aw input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-aw textarea:focus-visible, .ui-aw [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-aw{--ui-aw-side: #161618;--ui-aw-card: #232326;--ui-aw-line: rgba(255, 255, 255, 0.08);--ui-aw-ink: #ededed;--ui-aw-text: #c4c4c4;--ui-aw-muted: #8f8f8f;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08)}:where(.dark, [data-theme="dark"]) .ui-aw__ws, :where(.dark, [data-theme="dark"]) .ui-aw__primary{background: linear-gradient(#f4f4f5, #e4e4e7);box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), inset 0 1px 0 #ffffff;color: #121213 !important}:where(.dark, [data-theme="dark"]) .ui-aw__primary{box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.35), inset 0 1px 0 #ffffff}:where(.dark, [data-theme="dark"]) .ui-aw__primary:hover:not(:disabled){background: linear-gradient(#ffffff, #ececef)}:where(.dark, [data-theme="dark"]) .ui-aw__icon:hover, :where(.dark, [data-theme="dark"]) .ui-aw__item:hover{background: rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-aw__search{background: #232326}:where(.dark, [data-theme="dark"]) .ui-aw__search--wide{background: #2a2a2d}:where(.dark, [data-theme="dark"]) .ui-aw__search:focus-within{background: #2a2a2d;box-shadow: 0 0 0 1px var(--ui-aw-accent), 0 0 0 3px rgba(47, 107, 255, 0.24)}:where(.dark, [data-theme="dark"]) .ui-aw__item[aria-current]{background: #2a2a2d}:where(.dark, [data-theme="dark"]) .ui-aw__user-dot{background: rgba(47, 107, 255, 0.16);color: #6b95ff}:where(.dark, [data-theme="dark"]) .ui-aw__main{border-color: rgba(255, 255, 255, 0.08);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-aw__crumb-btn:hover, :where(.dark, [data-theme="dark"]) .ui-aw__sort-btn:hover{background: rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-aw__slash{color: #6b6b70}:where(.dark, [data-theme="dark"]) .ui-aw__menu{background: #2a2a2d;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 12px 30px -8px rgba(0, 0, 0, 0.5)}:where(.dark, [data-theme="dark"]) .ui-aw__menu-item:hover:not(:disabled){background: rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-aw__menu-item svg:last-child:not(:first-child), :where(.dark, [data-theme="dark"]) .ui-aw__menu-item[aria-checked="true"], :where(.dark, [data-theme="dark"]) .ui-aw__pinned{color: #6b95ff !important}:where(.dark, [data-theme="dark"]) .ui-aw__danger{color: #ff6b70 !important}:where(.dark, [data-theme="dark"]) .ui-aw__starter{background: #232326;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1)}:where(.dark, [data-theme="dark"]) .ui-aw__starter:hover{background: #2a2a2d;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.16)}:where(.dark, [data-theme="dark"]) .ui-aw__disclaimer{color: #6b6b70}:where(.dark, [data-theme="dark"]) .ui-aw__msg--user{background: #2a2a2d}:where(.dark, [data-theme="dark"]) .ui-aw__thinking{background-image: linear-gradient(90deg, #6b6b70 0%, #6b6b70 35%, #ededed 50%, #6b6b70 65%, #6b6b70 100%)}:where(.dark, [data-theme="dark"]) .ui-aw__tile, :where(.dark, [data-theme="dark"]) .ui-aw__project-card{background: #232326;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08), 0 1px 2px rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-aw__rename{background: #2a2a2d;color: var(--ui-aw-ink)}:where(.dark, [data-theme="dark"]) .ui-aw__backdrop{background: rgba(0, 0, 0, 0.45)}:where(.dark, [data-theme="dark"]) .ui-aw__dialog{box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08), 0 24px 60px -16px rgba(0, 0, 0, 0.6)}:where(.dark, [data-theme="dark"]) .ui-aw__dialog-card{background: #232326;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08)}:where(.dark, [data-theme="dark"]) .ui-aw__field{background: #2a2a2d;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);color: var(--ui-aw-ink)}:where(.dark, [data-theme="dark"]) .ui-aw__field::placeholder{color: #8f8f8f}:where(.dark, [data-theme="dark"]) .ui-aw__field:focus{box-shadow: 0 0 0 1px var(--ui-aw-accent), 0 0 0 4px rgba(47, 107, 255, 0.24)}:where(.dark, [data-theme="dark"]) .ui-aw__btn{background: #2a2a2d;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1)}:where(.dark, [data-theme="dark"]) .ui-aw__btn:hover{background: #313135}@container (max-width: 720px){:where(.dark, [data-theme="dark"]) .ui-aw:not([data-collapsed]) .ui-aw__side{box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08), 0 16px 40px -12px rgba(0, 0, 0, 0.6)}}`;
const width = 1180;
function MComponent() {
  let eRef = r.useRef(null);
  let [t, setT] = r.useState(null);
  r.useLayoutEffect(() => {
    let eRef_current = eRef.current;
    let r = eRef_current?.closest(`.card__preview`);
    let i = r ?? eRef_current?.closest(`.stage`);
    if (!eRef_current || !i) {
      return;
    }
    let a = () => {
      let i_clientWidth = i.clientWidth;
      if (r) {
        return setT({
          scale: (i_clientWidth - 48) / width,
          card: true
        });
      }
      if (i_clientWidth < 760) {
        return setT(null);
      }
      setT({
        scale: Math.min(0.8, (i_clientWidth - 120) / width),
        card: false
      });
    };
    a();
    let o = new ResizeObserver(a);
    o.observe(i);
    return () => o.disconnect();
  }, []);
  return <div ref={eRef} className={`workspace-demo`} data-fit={t ? t.card ? `card` : `stage` : undefined}><div className={`workspace-demo__frame`} style={t ? t.card ? {
      width,
      transform: `scale(${t.scale})`
    } : {
      width,
      zoom: t.scale
    } : undefined}><S1Component userName={`Lena`} userAvatar={`/avatars/lena.jpg`} /></div></div>;
}
export { MComponent as default };
