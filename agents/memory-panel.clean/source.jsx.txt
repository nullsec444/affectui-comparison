// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
const n = t_1();
const r = t();
const i = e => 1 - (1 - e) ** 4;
const a = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
const o = e => new Promise(resolve => window.setTimeout(resolve, e));
const s = () => new Date().toLocaleDateString(`en-US`, {
  month: `short`,
  day: `numeric`
});
const c = () => `m-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
const l = e => {
  if (e) {
    e.style.height = `auto`;
    e.style.height = `${e.scrollHeight}px`;
  }
};
function useU(e, t) {
  let [r, setR] = n.useState(e);
  let sRef = n.useRef(e);
  let c = JSON.stringify(e);
  n.useEffect(() => {
    let e = JSON.parse(c);
    let n = {
      ...sRef.current
    };
    if (a() || Object.keys(e).every(t => n[t] === e[t])) {
      sRef.current = e;
      setR(e);
      return;
    }
    let r = performance.now();
    let l = 0;
    let u = a => {
      let c = Math.min(1, (a - r) / t);
      let d = i(c);
      let f = {};
      for (let t in e) {
        f[t] = (n[t] ?? e[t]) + (e[t] - (n[t] ?? e[t])) * d;
      }
      sRef.current = f;
      setR(f);
      if (c < 1) {
        l = requestAnimationFrame(u);
      }
    };
    l = requestAnimationFrame(u);
    return () => cancelAnimationFrame(l);
  }, [c, t]);
  return r;
}
function useD(e) {
  let [t, setT] = n.useState(false);
  n.useEffect(() => {
    let e_current = e.current;
    if (!e_current) {
      return;
    }
    let n = () => setT(e_current.scrollLeft + e_current.clientWidth < e_current.scrollWidth - 1);
    n();
    let i = new ResizeObserver(n);
    i.observe(e_current);
    let a = new MutationObserver(n);
    a.observe(e_current, {
      childList: true,
      subtree: true,
      characterData: true
    });
    e_current.addEventListener(`scroll`, n, {
      passive: true
    });
    return () => {
      i.disconnect();
      a.disconnect();
      e_current.removeEventListener(`scroll`, n);
    };
  }, [e]);
  return t;
}
function F1Component({
  id,
  children
}) {
  let iRef = n.useRef({
    id,
    node: children
  });
  let [a, setA] = n.useState(id);
  let [s, setS] = n.useState(null);
  if (a !== id) {
    setA(id);
    setS(iRef.current);
  }
  iRef.current = {
    id,
    node: children
  };
  n.useEffect(() => {
    if (!s) {
      return;
    }
    let e = window.setTimeout(() => setS(null), 260);
    return () => window.clearTimeout(e);
  }, [s]);
  return <span className={`ui-mpc__swap`}>{s && <span key={`out-${s.id}`} className={`ui-mpc__swap-item`} data-out={``} aria-hidden={`true`}>{s.node}</span>}<span key={id} className={`ui-mpc__swap-item`}>{children}</span></span>;
}
const P1Component = ({
  d,
  solid
}) => <svg viewBox={`0 0 16 16`} className={`ui-mpc__glyph`} data-solid={solid || undefined} aria-hidden={`true`}><path d={d} fillRule={`evenodd`} /></svg>;
const Ee1Component = () => <P1Component d={`M9.8 3.7l2.5 2.5M3 13l.6-3 6.9-6.9a1.4 1.4 0 0 1 2 0l.4.4a1.4 1.4 0 0 1 0 2L6 12.4 3 13Z`} />;
const Te1Component = () => <P1Component solid d={`M4.5 3.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-9Zm4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-9Z`} />;
const Ne1Component = () => <P1Component solid d={`M4.5 3.4v9.2a.9.9 0 0 0 1.37.77l7.4-4.6a.9.9 0 0 0 0-1.54l-7.4-4.6a.9.9 0 0 0-1.37.77Z`} />;
const Re1Component = () => <P1Component d={`M2.5 4.5h11M6.5 4.5V3.2a.7.7 0 0 1 .7-.7h1.6a.7.7 0 0 1 .7.7v1.3M4 4.5l.6 8a1.1 1.1 0 0 0 1.1 1h4.6a1.1 1.1 0 0 0 1.1-1l.6-8M6.8 7.2v3.6M9.2 7.2v3.6`} />;
const Ie1Component = () => <P1Component d={`M5.5 3.5 3 6l2.5 2.5M3.2 6h6.3a3.5 3.5 0 0 1 0 7H7`} />;
const Ae1Component = () => <P1Component d={`M8 3.5v9M3.5 8h9`} />;
const Oe1Component = () => <P1Component d={`M7.2 11.9a4.7 4.7 0 1 0 0-9.4 4.7 4.7 0 0 0 0 9.4ZM10.6 10.6l2.9 2.9`} />;
const Se1Component = () => <P1Component d={`m4.5 4.5 7 7m0-7-7 7`} />;
const Ce1Component = () => <P1Component solid d={`M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm0 5.4a.6.6 0 0 0-.6.6v3.6a.6.6 0 0 0 1.2 0V7.5a.6.6 0 0 0-.6-.6Zm0-2.3a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6Z`} />;
const Le1Component = () => <P1Component d={`M3.5 8h9M9 4.5 12.5 8 9 11.5`} />;
function Ue1Component({
  memories,
  onChange,
  onAdd,
  onEdit,
  onPause,
  onForget,
  onRestore,
  enabled,
  defaultEnabled = true,
  onEnabledChange,
  categories,
  title = `Memory`,
  maxHeight = 360,
  undoFor = 5000,
  addedSource = `You added`,
  action,
  className
}) {
  let h = n.useId();
  let gRef = n.useRef(null);
  let CeRef = n.useRef(null);
  let weRef = n.useRef(null);
  let TeRef = n.useRef(null);
  let Ee = useD(weRef);
  let De = useD(TeRef);
  let [Oe, setOe] = n.useState(memories);
  let _ = onChange ? memories : Oe;
  let vRef = n.useRef(_);
  vRef.current = _;
  let y = e => {
    vRef.current = e;
    if (!onChange) {
      setOe(e);
    }
    onChange?.(e);
  };
  let [Ae, setAe] = n.useState(defaultEnabled);
  let b = enabled ?? Ae;
  let Me = e => {
    setAe(e);
    onEnabledChange?.(e);
  };
  let [x, setX] = n.useState({});
  let [S, setS] = n.useState({});
  let [w, setW] = n.useState(null);
  let [E, setE] = n.useState(false);
  let [D, setD] = n.useState(``);
  let [Fe, setFe] = n.useState(null);
  let [A, setA] = n.useState(null);
  let [Ie, setIe] = n.useState(``);
  let [M, setM] = n.useState(false);
  let [P, setP] = n.useState(``);
  let [Re, setRe] = n.useState(null);
  let [L, setL] = n.useState(null);
  let zRef = n.useRef(null);
  let BRef = n.useRef(true);
  n.useEffect(() => {
    BRef.current = true;
    return () => {
      BRef.current = false;
    };
  }, []);
  n.useEffect(() => {
    if (!Object.keys(S).length) {
      return;
    }
    let e = 0;
    let t = requestAnimationFrame(() => {
      e = requestAnimationFrame(() => setS({}));
    });
    return () => {
      cancelAnimationFrame(t);
      cancelAnimationFrame(e);
    };
  }, [S]);
  n.useEffect(() => {
    if (Object.keys(S).length || !zRef.current) {
      return;
    }
    let zRef_current = zRef.current;
    zRef.current = null;
    let t = window.setTimeout(() => {
      let CeRef_current = CeRef.current;
      let n = CeRef_current?.querySelector(`[data-memory="${CSS.escape(zRef_current)}"]`);
      if (!CeRef_current || !n) {
        return;
      }
      let r = n.offsetTop - CeRef_current.offsetTop;
      if (r < CeRef_current.scrollTop || r + n.offsetHeight > CeRef_current.scrollTop + CeRef_current.clientHeight) {
        CeRef_current.scrollTo({
          top: r - 8,
          behavior: a() ? `auto` : `smooth`
        });
      }
    }, 120);
    return () => window.clearTimeout(t);
  }, [S]);
  n.useEffect(() => {
    if (!L) {
      return;
    }
    let e = window.setTimeout(() => setL(null), undoFor);
    return () => window.clearTimeout(e);
  }, [L, undoFor]);
  let V = [...(categories ?? [])];
  for (let e of _) {
    if (!V.includes(e.category)) {
      V.push(e.category);
    }
  }
  let H = _.filter(e => !x[e.id]);
  let length = H.filter(e => e.paused).length;
  let W = D.trim().toLowerCase();
  let G = e => (!w || e.category === w) && (!W || e.text.toLowerCase().includes(W) || e.category.toLowerCase().includes(W));
  let ze = e => G(e) && !x[e.id] && !S[e.id];
  let Be = _.some(e => G(e) && !x[e.id]);
  let K = _.find(e => e.id === Fe) ?? null;
  let Ve = useU({
    total: H.length,
    paused: length
  }, 520);
  let q = Math.round(Ve.total ?? H.length);
  let He = Math.round(Ve.paused ?? length);
  let Ue = async memory => {
    if (x[memory.id] || (A === memory.id && setA(null), setFe(null), setX(t => ({
      ...t,
      [memory.id]: true
    })), a() || (await o(320)), !BRef.current)) {
      return;
    }
    let index = vRef.current.findIndex(t => t.id === memory.id);
    y(vRef.current.filter(t => t.id !== memory.id));
    onForget?.(memory.id);
    setX(({
      [memory.id]: t,
      ...rest
    }) => rest);
    setL({
      memory,
      index,
      key: Date.now()
    });
  };
  let We = () => {
    if (!L) {
      return;
    }
    let {
      memory,
      index
    } = L;
    let n = [...vRef.current];
    n.splice(Math.max(0, Math.min(index, n.length)), 0, memory);
    setS({
      [memory.id]: true
    });
    zRef.current = memory.id;
    if (w && w !== memory.category) {
      setW(null);
    }
    y(n);
    onRestore?.(memory);
    setL(null);
  };
  let Ge = e => {
    y(vRef.current.map(t => {
      if (t.id === e.id) {
        return {
          ...t,
          paused: !t.paused
        };
      }
      return t;
    }));
    onPause?.(e.id, !e.paused);
  };
  let Ke = e => {
    setM(false);
    setIe(e.text);
    setA(e.id);
  };
  let qe = () => {
    let e = A;
    let t = Ie.trim().replace(/\s+/g, ` `);
    setA(null);
    if (!e) {
      return;
    }
    let n = vRef.current.find(t => t.id === e);
    if (n && t && t !== n.text) {
      y(vRef.current.map(n => {
        if (n.id === e) {
          return {
            ...n,
            text: t
          };
        }
        return n;
      }));
      onEdit?.(e, t);
      window.requestAnimationFrame(() => gRef.current?.querySelector(`[data-memory="${CSS.escape(e)}"] [data-act="edit"]`)?.focus({
        preventScroll: true
      }));
    }
  };
  let J = () => {
    let e = A;
    setA(null);
    if (e) {
      window.requestAnimationFrame(() => gRef.current?.querySelector(`[data-memory="${CSS.escape(e)}"] [data-act="edit"]`)?.focus({
        preventScroll: true
      }));
    }
  };
  let category = Re ?? w ?? V[0] ?? `General`;
  let Je = () => {
    setA(null);
    setP(``);
    setRe(w ?? V[0] ?? `General`);
    setM(true);
  };
  let X = () => {
    setM(false);
    window.requestAnimationFrame(() => gRef.current?.querySelector(`.ui-mpc__add`)?.focus({
      preventScroll: true
    }));
  };
  let Ye = () => {
    let e = P.trim().replace(/\s+/g, ` `);
    if (!e) {
      return;
    }
    let t = {
      id: c(),
      text: e,
      category,
      source: addedSource,
      date: s()
    };
    setS({
      [t.id]: true
    });
    zRef.current = t.id;
    if (w && w !== t.category) {
      setW(null);
    }
    if (W) {
      setD(``);
    }
    y([...vRef.current, t]);
    onAdd?.(t);
    setP(``);
    X();
  };
  let Xe = () => {
    setE(false);
    setD(``);
    window.requestAnimationFrame(() => gRef.current?.querySelector(`.ui-mpc__search-open`)?.focus({
      preventScroll: true
    }));
  };
  let Z = [null, ...V.filter(e => _.some(t => t.category === e))];
  let onKeyDown = e => {
    if (![`ArrowRight`, `ArrowLeft`, `ArrowDown`, `ArrowUp`, `Home`, `End`].includes(e.key)) {
      return;
    }
    e.preventDefault();
    let t = Z.indexOf(w);
    let n = e.key === `Home` ? 0 : e.key === `End` ? Z.length - 1 : (t + (e.key === `ArrowRight` || e.key === `ArrowDown` ? 1 : -1) + Z.length) % Z.length;
    setW(Z[n]);
    let r = e.currentTarget.querySelectorAll(`[role='radio']`);
    r[n]?.focus();
    r[n]?.scrollIntoView({
      block: `nearest`,
      inline: `nearest`
    });
  };
  let Q = <><b>{q}</b>{` `}{q === 1 ? `memory` : `memories`}{(He > 0 || length > 0) && <>{` · `}{He}{` paused`}</>}</>;
  let id = `rest`;
  if (L) {
    Q = <><span className={`ui-mpc__forgot`}><span className={`ui-mpc__flat`}>{`Forgot “`}</span><b className={`ui-mpc__quote`}>{L.memory.text}</b><span className={`ui-mpc__flat`}>{`”`}</span></span></>;
    id = `forgot-${L.key}`;
  } else if (A) {
    Q = `Enter to save · Esc to cancel`;
    id = `editing`;
  } else if (M) {
    Q = `Pick a category · Enter to save`;
    id = `adding`;
  } else if (K) {
    Q = <><b>{K.category}</b>{` ·`}{` `}{b ? K.paused ? `paused, not used in answers` : `used in answers` : `memory is off`}</>;
    id = `hot-${K.id}-${+!!K.paused}-${+!!b}`;
  } else if (!b) {
    Q = `Memory is off`;
    id = `off`;
  }
  return <div ref={gRef} className={[`ui-mpc`, className].filter(Boolean).join(` `)} role={`group`} aria-labelledby={`${h}-title`} data-off={b ? undefined : ``} style={{
    "--ui-mpc-max": `${maxHeight}px`
  }}><style href={`ui-memory-panel-clean`} precedence={`default`}>{de}</style><div className={`ui-mpc__card`}><div className={`ui-mpc__head`}><span id={`${h}-title`} className={`ui-mpc__title`}>{title}</span><span className={`ui-mpc__count`} aria-hidden={`true`}>{q}</span><button type={`button`} role={`switch`} aria-checked={b} aria-controls={`${h}-note`} className={`ui-mpc__switch`} onClick={() => Me(!b)}><span className={`ui-mpc__switch-label`}>{`Use memory`}</span><span className={`ui-mpc__track`} aria-hidden={`true`}><span className={`ui-mpc__knob`} /></span></button></div><div id={`${h}-note`} className={`ui-mpc__fold`} data-open={b ? undefined : ``} inert={b}><div className={`ui-mpc__clip`}><p className={`ui-mpc__note`}><Ce1Component /><span>{`The assistant won't use or save memories in new chats. Nothing here is deleted.`}</span></p></div></div><div className={`ui-mpc__filters`} data-searching={E ? `` : undefined}><div ref={weRef} className={`ui-mpc__chips`} data-more={Ee ? `` : undefined} role={`radiogroup`} aria-label={`Category`} inert={E} onKeyDown={onKeyDown}>{Z.map(e => {
            let length = H.filter(t => !e || t.category === e).length;
            let n = w === e;
            return <button key={e ?? `#all`} type={`button`} role={`radio`} aria-checked={n} tabIndex={n ? 0 : -1} className={`ui-mpc__chip`} data-linked={e && K?.category === e ? `` : undefined} onClick={() => setW(e)}>{e ?? `All`}<span className={`ui-mpc__chip-count`}>{length}</span></button>;
          })}</div><div className={`ui-mpc__search`} inert={!E}><Oe1Component /><input className={`ui-mpc__input`} type={`text`} value={D} placeholder={`Search memories`} aria-label={`Search memories`} onChange={e => setD(e.target.value)} onKeyDown={e => {
            if (e.key === `Escape`) {
              e.stopPropagation();
              Xe();
            }
          }} ref={e => {
            if (e && E && document.activeElement !== e && !e.dataset.focused) {
              e.dataset.focused = `1`;
              e.focus({
                preventScroll: true
              });
            }
            if (e && !E) {
              delete e.dataset.focused;
            }
          }} /><button type={`button`} className={`ui-mpc__icon`} aria-label={`Close search`} onClick={Xe}><Se1Component /></button></div><button type={`button`} className={`ui-mpc__icon ui-mpc__search-open`} aria-label={`Search memories`} aria-expanded={E} inert={E} onClick={() => {
          setW(null);
          setE(true);
        }}><Oe1Component /></button></div><div ref={CeRef} className={`ui-mpc__list`} onPointerLeave={() => setFe(null)}>{V.map(e => {
          let t = _.filter(t => t.category === e);
          if (!t.length) {
            return null;
          }
          let n = t.some(e => G(e) && !x[e.id]);
          return <section key={e} className={`ui-mpc__fold`} data-open={n ? `` : undefined} inert={!n} aria-label={e}><div className={`ui-mpc__clip`}><h3 className={`ui-mpc__group`}>{e}</h3><ul className={`ui-mpc__items`}>{t.map(e => {
                  let t = A === e.id;
                  let n = ze(e);
                  return <li key={e.id} className={`ui-mpc__fold ui-mpc__fold--row`} data-open={n ? `` : undefined} data-leaving={x[e.id] ? `` : undefined} inert={!n}><div className={`ui-mpc__clip`}><div className={`ui-mpc__item`} data-memory={e.id} data-paused={e.paused ? `` : undefined} data-hot={Fe === e.id ? `` : undefined} data-editing={t ? `` : undefined} onPointerEnter={t => t.pointerType === `mouse` && setFe(e.id)} onFocus={() => setFe(e.id)} onBlur={e => {
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                          setFe(null);
                        }
                      }}>{t ? <textarea className={`ui-mpc__edit`} value={Ie} rows={1} aria-label={`Edit memory`} ref={e => {
                          l(e);
                          if (e && !e.dataset.focused) {
                            e.dataset.focused = `1`;
                            e.focus({
                              preventScroll: true
                            });
                            e.setSelectionRange(e.value.length, e.value.length);
                          }
                        }} onChange={e => {
                          setIe(e.target.value);
                          l(e.target);
                        }} onKeyDown={e => {
                          if (e.key === `Enter` && !e.shiftKey) {
                            e.preventDefault();
                            qe();
                          } else if (e.key === `Escape`) {
                            e.stopPropagation();
                            J();
                          }
                        }} /> : <p className={`ui-mpc__text`}>{e.text}</p>}<div className={`ui-mpc__meta`}><span className={`ui-mpc__source`}>{e.source}{e.source && e.date && <span className={`ui-mpc__dot`}>{` · `}</span>}{e.date}</span><span className={`ui-mpc__tag`} data-on={e.paused ? `` : undefined} aria-hidden={!e.paused}>{`Paused`}</span>{t ? <span className={`ui-mpc__acts ui-mpc__acts--edit`}><button type={`button`} className={`ui-mpc__text-btn`} onClick={J}>{`Cancel`}</button><button type={`button`} className={`ui-mpc__text-btn ui-mpc__text-btn--main`} onClick={qe}>{`Save`}</button></span> : <span className={`ui-mpc__acts`}><button type={`button`} className={`ui-mpc__icon`} data-act={`edit`} aria-label={`Edit “${e.text}”`} title={`Edit`} onClick={() => Ke(e)}><Ee1Component /></button><button type={`button`} className={`ui-mpc__icon`} data-act={`pause`} aria-label={`${e.paused ? `Resume` : `Pause`} “${e.text}”`} title={e.paused ? `Resume` : `Pause`} onClick={() => Ge(e)}><span key={e.paused ? `play` : `pause`} className={`ui-mpc__icon-swap`}>{e.paused ? <Ne1Component /> : <Te1Component />}</span></button><button type={`button`} className={`ui-mpc__icon ui-mpc__icon--forget`} data-act={`forget`} aria-label={`Forget “${e.text}”`} title={`Forget`} onClick={() => Ue(e)}><Re1Component /></button></span>}</div></div></div></li>;
                })}</ul></div></section>;
        })}<div className={`ui-mpc__fold`} data-open={Be ? undefined : ``} inert={Be}><div className={`ui-mpc__clip`}><p className={`ui-mpc__empty`}>{_.length === 0 ? `Nothing remembered yet` : W ? `No memory mentions “${D.trim()}”` : `No memories here`}</p></div></div></div><div className={`ui-mpc__bottom`}><div className={`ui-mpc__fold`} data-open={M ? undefined : ``} inert={M}><div className={`ui-mpc__clip`}><button type={`button`} className={`ui-mpc__add`} aria-expanded={M} aria-controls={`${h}-new`} onClick={Je}><Ae1Component />{`New memory`}</button></div></div><div id={`${h}-new`} className={`ui-mpc__fold`} data-open={M ? `` : undefined} inert={!M}><div className={`ui-mpc__clip`}><div className={`ui-mpc__new`}><textarea className={`ui-mpc__edit ui-mpc__edit--new`} value={P} rows={1} placeholder={`Something the assistant should remember…`} aria-label={`New memory`} ref={e => {
                l(e);
                if (e && M && !e.dataset.focused) {
                  e.dataset.focused = `1`;
                  e.focus({
                    preventScroll: true
                  });
                }
                if (e && !M) {
                  delete e.dataset.focused;
                }
              }} onChange={e => {
                setP(e.target.value);
                l(e.target);
              }} onKeyDown={e => {
                if (e.key === `Enter` && !e.shiftKey) {
                  e.preventDefault();
                  Ye();
                } else if (e.key === `Escape`) {
                  e.stopPropagation();
                  X();
                }
              }} /><div className={`ui-mpc__new-row`}><div ref={TeRef} className={`ui-mpc__cats`} data-more={De ? `` : undefined} role={`radiogroup`} aria-label={`Category of the new memory`} onKeyDown={e => {
                  let t = V.length ? V : [`General`];
                  if (![`ArrowRight`, `ArrowLeft`, `ArrowDown`, `ArrowUp`].includes(e.key)) {
                    return;
                  }
                  e.preventDefault();
                  let n = (t.indexOf(category) + (e.key === `ArrowRight` || e.key === `ArrowDown` ? 1 : -1) + t.length) % t.length;
                  setRe(t[n]);
                  e.currentTarget.querySelectorAll(`[role='radio']`)[n]?.focus();
                }}>{(V.length ? V : [`General`]).map(e => <button key={e} type={`button`} role={`radio`} aria-checked={category === e} tabIndex={category === e ? 0 : -1} className={`ui-mpc__cat`} onClick={() => setRe(e)}>{e}</button>)}</div><span className={`ui-mpc__acts ui-mpc__acts--edit`}><button type={`button`} className={`ui-mpc__text-btn`} onClick={X}>{`Cancel`}</button><button type={`button`} className={`ui-mpc__text-btn ui-mpc__text-btn--main`} disabled={!P.trim()} onClick={Ye}>{`Save`}</button></span></div></div></div></div></div><div className={`ui-mpc__foot`}><span className={`ui-mpc__caption`} aria-live={`polite`}><F1Component id={id}>{Q}</F1Component></span>{L ? <button key={`undo-${L.key}`} type={`button`} className={`ui-mpc__action ui-mpc__action--undo`} onClick={We}><Ie1Component />{`Undo`}</button> : action && <button key={`action`} type={`button`} className={`ui-mpc__action`} onClick={action.onClick}>{action.label}<Le1Component /></button>}</div></div></div>;
}
var de = `.ui-mpc{--ui-mpc-card: #ffffff;--ui-mpc-ink: rgba(0, 0, 0, 0.88);--ui-mpc-strong: #000000;--ui-mpc-text: rgba(0, 0, 0, 0.61);--ui-mpc-muted: rgba(0, 0, 0, 0.45);--ui-mpc-faint: rgba(0, 0, 0, 0.27);--ui-mpc-icon: rgba(0, 0, 0, 0.447);--ui-mpc-line: rgba(0, 0, 0, 0.06);--ui-mpc-wash: rgba(0, 0, 0, 0.03);--ui-mpc-fill: rgba(0, 0, 0, 0.06);--ui-mpc-fill-strong: rgba(0, 0, 0, 0.1);--ui-mpc-accent: rgba(0, 96, 226, 0.765);--ui-mpc-focus: rgba(0, 96, 226, 0.35);--ui-mpc-red: #e5484d;--ui-mpc-red-soft: rgba(229, 72, 77, 0.08);--ui-mpc-amber: #9a6a00;--ui-mpc-amber-soft: rgba(232, 162, 12, 0.12);--ui-mpc-solid: rgba(0, 0, 0, 0.88);--ui-mpc-on-solid: #fcfcfc;--ui-mpc-knob: #ffffff;--ui-mpc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-mpc-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;width: 100%;max-width: 400px;min-width: 0;container-type: inline-size;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-mpc-ink);text-align: left;-webkit-font-smoothing: antialiased}.ui-mpc *, .ui-mpc *::before, .ui-mpc *::after{box-sizing: border-box}:where(.ui-mpc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-mpc) :is(p, h3, ul){margin: 0;padding: 0;list-style: none;font: inherit}.ui-mpc button:focus-visible{outline: 2px solid var(--ui-mpc-focus);outline-offset: 1px}.ui-mpc :is(input, textarea):focus-visible{outline: none}:where(.ui-mpc) svg{display: block;flex: none}.ui-mpc b{font-weight: 500;color: var(--ui-mpc-ink)}.ui-mpc__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-mpc__glyph[data-solid]{fill: currentColor;stroke: none}.ui-mpc__card{border-radius: 10px;background: var(--ui-mpc-card);box-shadow: var(--ui-mpc-shadow)}.ui-mpc__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 420ms var(--ui-mpc-ease), opacity 220ms ease}.ui-mpc__fold[data-open]{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows 420ms var(--ui-mpc-ease), opacity 320ms ease 80ms}.ui-mpc__fold--row[data-leaving]{transition: grid-template-rows 320ms var(--ui-mpc-ease), opacity 200ms ease, filter 200ms ease;filter: blur(2px)}.ui-mpc__clip{min-height: 0;overflow: hidden}.ui-mpc__head{display: flex;align-items: center;gap: 8px;padding: 12px 10px 0 16px}.ui-mpc__title{min-width: 0;overflow: hidden;font-size: 15px;font-weight: 500;line-height: 24px;color: var(--ui-mpc-strong);white-space: nowrap;text-overflow: ellipsis}.ui-mpc__count{flex: none;min-width: 20px;height: 18px;padding: 0 5px;border-radius: 5px;background: var(--ui-mpc-fill);font-size: 11px;font-weight: 500;line-height: 18px;text-align: center;color: var(--ui-mpc-text);font-variant-numeric: tabular-nums}.ui-mpc__switch{display: inline-flex;flex: none;align-items: center;gap: 8px;height: 28px;margin-left: auto;padding: 0 6px 0 8px;border-radius: 6px;color: var(--ui-mpc-text);transition: background-color 90ms ease, color 90ms ease}.ui-mpc__switch:hover{background: var(--ui-mpc-wash);color: var(--ui-mpc-ink)}.ui-mpc__track{position: relative;width: 26px;height: 16px;border-radius: 5px;background: var(--ui-mpc-fill-strong);transition: background-color 220ms ease}.ui-mpc__knob{position: absolute;top: 2px;left: 2px;width: 12px;height: 12px;border-radius: 3.5px;background: var(--ui-mpc-knob);box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.16);transition: transform 260ms var(--ui-mpc-ease)}.ui-mpc__switch[aria-checked="true"] .ui-mpc__track{background: var(--ui-mpc-accent)}.ui-mpc__switch[aria-checked="true"] .ui-mpc__knob{transform: translateX(10px)}.ui-mpc__note{display: flex;gap: 8px;margin: 10px 12px 0 16px !important;padding: 8px 10px;border-radius: 8px;background: var(--ui-mpc-wash);font-size: 12px !important;line-height: 16px !important;color: var(--ui-mpc-text)}.ui-mpc__note .ui-mpc__glyph{color: var(--ui-mpc-icon)}.ui-mpc__filters{position: relative;display: grid;grid-template-columns: minmax(0, 1fr) auto;align-items: center;gap: 8px;padding: 12px 10px 12px 16px;border-bottom: 0.5px solid var(--ui-mpc-line);transition: opacity 300ms ease}.ui-mpc__chips, .ui-mpc__search{grid-area: 1 / 1;transition: opacity 220ms ease, filter 220ms ease}.ui-mpc__chips{display: flex;gap: 4px;min-width: 0;margin: -3px;padding: 3px;overflow-x: auto;scrollbar-width: none}.ui-mpc__chips[data-more], .ui-mpc__cats[data-more]{-webkit-mask-image: linear-gradient(90deg, #000 calc(100% - 24px), transparent);mask-image: linear-gradient(90deg, #000 calc(100% - 24px), transparent)}.ui-mpc__chips::-webkit-scrollbar{display: none}.ui-mpc__chip{display: inline-flex;flex: none;align-items: center;gap: 6px;padding: 4px 10px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-mpc-line);font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-mpc-text);white-space: nowrap;transition: background-color 90ms ease, color 90ms ease}.ui-mpc__chip:hover{background: var(--ui-mpc-wash)}.ui-mpc__chip[data-linked]{color: var(--ui-mpc-ink)}.ui-mpc__chip[aria-checked="true"]{background: var(--ui-mpc-fill);color: var(--ui-mpc-ink)}.ui-mpc__chip-count{font-size: 12px;font-weight: 400;color: var(--ui-mpc-muted);font-variant-numeric: tabular-nums}.ui-mpc__chip[aria-checked="true"] .ui-mpc__chip-count{color: var(--ui-mpc-text)}.ui-mpc__search{display: flex;align-items: center;gap: 6px;height: 28px;padding: 0 2px 0 8px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-mpc-line);background: var(--ui-mpc-wash);color: var(--ui-mpc-icon);opacity: 0;visibility: hidden}.ui-mpc__input{flex: 1;min-width: 0;height: 28px;margin: 0;padding: 0;border: 0;background: none;font: inherit;font-size: 13px;color: var(--ui-mpc-strong);caret-color: var(--ui-mpc-accent);outline: none}.ui-mpc__input::placeholder{color: var(--ui-mpc-faint);opacity: 1}.ui-mpc__search .ui-mpc__icon{width: 24px;height: 24px}.ui-mpc__filters[data-searching] .ui-mpc__chips{opacity: 0;filter: blur(2px)}.ui-mpc__filters[data-searching] .ui-mpc__search{grid-area: 1 / 1 / 2 / 3;opacity: 1;visibility: visible}.ui-mpc__filters[data-searching] .ui-mpc__search-open{opacity: 0;visibility: hidden}.ui-mpc__search-open{grid-area: 1 / 2;transition: opacity 200ms ease, background-color 90ms ease, color 90ms ease}.ui-mpc__list{max-height: var(--ui-mpc-max);padding: 2px 6px 6px;overflow-y: auto;overscroll-behavior: contain;scrollbar-width: thin;scrollbar-color: var(--ui-mpc-fill-strong) transparent;transition: opacity 300ms ease}.ui-mpc[data-off] .ui-mpc__list, .ui-mpc[data-off] .ui-mpc__filters{opacity: 0.5}.ui-mpc[data-off] .ui-mpc__list:hover, .ui-mpc[data-off] .ui-mpc__list:focus-within{opacity: 0.85}.ui-mpc__group{padding: 12px 10px 4px;font-size: 10px !important;font-weight: 500 !important;line-height: 16px !important;letter-spacing: 0.5px;text-transform: uppercase;color: var(--ui-mpc-muted)}.ui-mpc__item{padding: 8px 10px 7px;border-radius: 8px;transition: background-color 90ms ease-out, opacity 220ms ease}.ui-mpc__item[data-hot], .ui-mpc__item[data-editing]{background: var(--ui-mpc-wash)}.ui-mpc__text{color: var(--ui-mpc-ink);overflow-wrap: anywhere;transition: color 240ms ease}.ui-mpc__item[data-paused] .ui-mpc__text{color: var(--ui-mpc-muted)}.ui-mpc__meta{display: flex;align-items: center;gap: 6px;min-height: 20px;margin-top: 2px;font-size: 12px;line-height: 16px;color: var(--ui-mpc-muted)}.ui-mpc__source{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-mpc__dot{color: var(--ui-mpc-faint)}.ui-mpc__tag{display: inline-flex;flex: none;align-items: center;height: 18px;padding: 0 6px;border-radius: 5px;background: var(--ui-mpc-amber-soft);font-size: 11px;font-weight: 500;line-height: 16px;color: var(--ui-mpc-amber);opacity: 0;transform: scale(0.9);transition: opacity 220ms ease, transform 280ms var(--ui-mpc-ease)}.ui-mpc__tag:not([data-on]){position: absolute;visibility: hidden}.ui-mpc__tag[data-on]{opacity: 1;transform: none;animation: ui-mpc-in 280ms var(--ui-mpc-ease) both}.ui-mpc__acts{display: inline-flex;flex: none;align-items: center;gap: 2px;margin: -4px -6px -4px auto;opacity: 0;transition: opacity 120ms ease}.ui-mpc__item:is([data-hot], :focus-within) .ui-mpc__acts, .ui-mpc__acts--edit{opacity: 1}.ui-mpc__acts--edit{gap: 4px;margin-top: 4px;margin-right: -2px;margin-bottom: 0}.ui-mpc__item[data-editing]{padding-bottom: 8px}.ui-mpc__icon{display: grid;flex: none;place-items: center;width: 28px;height: 28px;border-radius: 6px;color: var(--ui-mpc-icon);transition: background-color 90ms ease, color 90ms ease, opacity 200ms ease}.ui-mpc__icon:hover{background: var(--ui-mpc-wash);color: var(--ui-mpc-ink)}.ui-mpc__item .ui-mpc__icon:hover{background: var(--ui-mpc-fill)}.ui-mpc__item .ui-mpc__icon--forget:hover{background: var(--ui-mpc-red-soft);color: var(--ui-mpc-red)}.ui-mpc__icon-swap{display: grid;animation: ui-mpc-in 260ms ease both}.ui-mpc__text-btn{display: inline-flex;flex: none;align-items: center;height: 28px;padding: 0 10px;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-mpc-text);white-space: nowrap;transition: background-color 90ms ease, color 90ms ease, opacity 160ms ease}.ui-mpc__text-btn:hover{background: var(--ui-mpc-fill);color: var(--ui-mpc-ink)}.ui-mpc__text-btn--main, .ui-mpc__text-btn--main:hover{background: var(--ui-mpc-solid);color: var(--ui-mpc-on-solid)}.ui-mpc__text-btn--main:hover{opacity: 0.88}.ui-mpc__text-btn:disabled{cursor: default;opacity: 0.3}.ui-mpc__edit{display: block;width: 100%;min-height: 20px;margin: 0;padding: 0;border: 0;background: none;font: inherit;color: var(--ui-mpc-strong);caret-color: var(--ui-mpc-accent);resize: none;overflow: hidden;outline: none}.ui-mpc__edit::placeholder{color: var(--ui-mpc-faint);opacity: 1}.ui-mpc__empty{padding: 20px 8px 14px;font-size: 13px;text-align: center;color: var(--ui-mpc-muted)}.ui-mpc__bottom{padding: 6px;border-top: 0.5px solid var(--ui-mpc-line)}.ui-mpc__add{display: flex;align-items: center;gap: 8px;width: 100%;height: 32px;padding: 0 10px;border-radius: 6px;color: var(--ui-mpc-text);transition: background-color 90ms ease, color 90ms ease}.ui-mpc__add .ui-mpc__glyph{color: var(--ui-mpc-icon);transition: color 90ms ease}.ui-mpc__add:hover{background: var(--ui-mpc-wash);color: var(--ui-mpc-ink)}.ui-mpc__add:hover .ui-mpc__glyph{color: var(--ui-mpc-ink)}.ui-mpc__new{padding: 6px 4px 2px 10px}.ui-mpc__new-row{display: flex;align-items: center;gap: 8px;margin-top: 10px}.ui-mpc__cats{display: flex;flex: 1 1 auto;gap: 4px;min-width: 0;margin: -3px;padding: 3px;overflow-x: auto;scrollbar-width: none}.ui-mpc__cats::-webkit-scrollbar{display: none}.ui-mpc__cat{display: inline-flex;flex: none;align-items: center;padding: 4px 8px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-mpc-line);font-size: 12px;font-weight: 500;line-height: 20px;color: var(--ui-mpc-text);white-space: nowrap;transition: background-color 90ms ease, color 90ms ease}.ui-mpc__cat:hover{background: var(--ui-mpc-wash)}.ui-mpc__cat[aria-checked="true"]{background: var(--ui-mpc-fill);color: var(--ui-mpc-ink)}.ui-mpc__new .ui-mpc__acts--edit{margin: 0}.ui-mpc__foot{display: flex;align-items: center;gap: 8px;min-height: 44px;padding: 0 8px 0 16px;border-top: 0.5px solid var(--ui-mpc-line)}.ui-mpc__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-mpc-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-mpc__swap{display: grid;min-width: 0}.ui-mpc__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;animation: ui-mpc-swap-in 320ms ease both}.ui-mpc__swap-item[data-out]{animation: ui-mpc-swap-out 220ms ease both}.ui-mpc__forgot{display: flex;min-width: 0}.ui-mpc__flat{flex: none;white-space: pre}.ui-mpc__quote{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-mpc__action{display: inline-flex;flex: none;align-items: center;gap: 4px;height: 28px;padding: 0 6px 0 10px;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-mpc-text);white-space: nowrap;animation: ui-mpc-swap-in 300ms ease both;transition: background-color 90ms ease, color 90ms ease}.ui-mpc__action .ui-mpc__glyph{color: var(--ui-mpc-icon);transition: transform 220ms var(--ui-mpc-ease), color 90ms ease}.ui-mpc__action:hover{background: var(--ui-mpc-wash);color: var(--ui-mpc-ink)}.ui-mpc__action:not(.ui-mpc__action--undo):hover .ui-mpc__glyph{transform: translateX(2px);color: var(--ui-mpc-ink)}.ui-mpc__action--undo{gap: 6px;padding: 0 10px 0 8px;background: var(--ui-mpc-card);box-shadow: var(--ui-mpc-shadow);color: var(--ui-mpc-strong)}.ui-mpc__action--undo:hover{background: #fafafa;color: var(--ui-mpc-strong)}@keyframes ui-mpc-in{from{opacity: 0;transform: scale(0.9)}}@keyframes ui-mpc-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-mpc-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@container (max-width: 360px){.ui-mpc__chip-count{display: none}.ui-mpc__head{padding-left: 14px}.ui-mpc__filters{padding-left: 14px}.ui-mpc__foot{padding-left: 14px}.ui-mpc__note{margin-left: 14px !important}}@container (max-width: 320px){.ui-mpc__switch-label{display: none}.ui-mpc__switch{padding: 0 6px}.ui-mpc__chip{padding: 4px 8px}}@media (pointer: coarse){.ui-mpc__acts{opacity: 1}.ui-mpc__icon{width: 34px;height: 34px}.ui-mpc__acts{margin-top: -7px;margin-bottom: -7px}.ui-mpc__acts--edit{margin-top: 4px;margin-bottom: 0}.ui-mpc__chip{padding: 6px 12px}.ui-mpc__cat{padding: 5px 10px}.ui-mpc__text-btn, .ui-mpc__action{height: 34px}.ui-mpc__switch, .ui-mpc__add{height: 36px}.ui-mpc__search, .ui-mpc__input{height: 34px}.ui-mpc__foot{min-height: 52px}}@media (prefers-reduced-motion: reduce){.ui-mpc *, .ui-mpc *::before, .ui-mpc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-mpc{--ui-mpc-card: #1c1c1e;--ui-mpc-ink: rgba(255, 255, 255, 0.9);--ui-mpc-strong: #ffffff;--ui-mpc-text: rgba(255, 255, 255, 0.62);--ui-mpc-muted: rgba(255, 255, 255, 0.46);--ui-mpc-faint: rgba(255, 255, 255, 0.3);--ui-mpc-icon: rgba(255, 255, 255, 0.5);--ui-mpc-line: rgba(255, 255, 255, 0.08);--ui-mpc-wash: rgba(255, 255, 255, 0.04);--ui-mpc-fill: rgba(255, 255, 255, 0.08);--ui-mpc-fill-strong: rgba(255, 255, 255, 0.14);--ui-mpc-accent: #4d8dff;--ui-mpc-focus: rgba(77, 141, 255, 0.5);--ui-mpc-red: #ff8589;--ui-mpc-red-soft: rgba(229, 72, 77, 0.14);--ui-mpc-amber: #f0b93a;--ui-mpc-amber-soft: rgba(232, 162, 12, 0.14);--ui-mpc-solid: rgba(255, 255, 255, 0.9);--ui-mpc-on-solid: #1c1c1e;--ui-mpc-knob: #ffffff;--ui-mpc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-mpc__action--undo:hover{background: #232326}:where(.dark, [data-theme="dark"]) .ui-mpc__switch[aria-checked="false"] .ui-mpc__knob{background: rgba(255, 255, 255, 0.55)}`;
const memories = [{
  id: `ts`,
  text: `Prefers TypeScript examples over plain JavaScript`,
  category: `Preferences`,
  source: `From chat`,
  date: `Oct 12`
}, {
  id: `short`,
  text: `Likes short answers first, details only when asked`,
  category: `Preferences`,
  source: `You added`,
  date: `Oct 2`
}, {
  id: `inter`,
  text: `Designs with Inter and a 4px spacing grid`,
  category: `Preferences`,
  source: `From Figma`,
  date: `Oct 7`
}, {
  id: `role`,
  text: `Product designer and front-end developer at a small studio`,
  category: `Work`,
  source: `From chat`,
  date: `Sep 28`
}, {
  id: `stack`,
  text: `Ships with React, Vite and Tailwind; deploys on Vercel`,
  category: `Work`,
  source: `From chat`,
  date: `Oct 3`
}, {
  id: `notes`,
  text: `Sends release notes to clients every Friday`,
  category: `Work`,
  source: `From chat`,
  date: `Oct 9`
}, {
  id: `fintech`,
  text: `Redesigning the onboarding flow for a fintech client, due Oct 24`,
  category: `Projects`,
  source: `From chat`,
  date: `Oct 11`
}, {
  id: `tokens`,
  text: `Keeps design tokens in one tokens.json shared with the code`,
  category: `Projects`,
  source: `From chat`,
  date: `Oct 5`
}];
function PeComponent() {
  let eRef = n.useRef(null);
  let tRef = n.useRef(false);
  n.useEffect(() => {
    let n = t => () => eRef.current?.querySelector(t)?.click();
    let r = (e, t) => n(`[data-memory="${e}"] [data-act="${t}"]`);
    let i = e => n(`.ui-mpc__chip:nth-child(${e})`);
    let a = [[700, r(`short`, `pause`)], [2700, r(`ts`, `forget`)], [2600, n(`.ui-mpc__action--undo`)], [2200, i(4)], [2400, i(1)], [1800, r(`short`, `pause`)]];
    let o = 0;
    let s = 0;
    let c = () => {
      if (!tRef.current) {
        if (o >= a.length) {
          o = 0;
          a[0][0] = 1800;
        }
        s = window.setTimeout(() => {
          if (!tRef.current) {
            a[o][1]();
            o++;
            c();
          }
        }, a[o][0]);
      }
    };
    c();
    return () => window.clearTimeout(s);
  }, []);
  let i = () => tRef.current = true;
  return <div ref={eRef} className={`mp-demo`} onPointerEnter={i} onPointerDownCapture={i} onKeyDownCapture={i} onFocusCapture={i}><Ue1Component memories={memories} maxHeight={330} /></div>;
}
export { PeComponent as default };
