import {
  DComponent
} from "./chunk-KCKKNLM6.js";
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

// reconstructed/demo-BbZ2lqOk.jsx
init_react_BkAXpnfr();
var r = n();
var i = n2();
var a = [`No priority`, `Low`, `Medium`, `High`, `Urgent`];
function O1Component({
  tasks: tasks2,
  statuses: statuses2,
  labels: labels2,
  people: people2,
  path = [`Northwind`, `Launch`, `Sprint 12`],
  onChange,
  className
}) {
  let [_, set_] = r.useState(tasks2);
  let [y, setY] = r.useState(``);
  let [x, setX] = r.useState(/* @__PURE__ */ new Set());
  let [C, setC] = r.useState(false);
  let [T, setT] = r.useState(null);
  let [D, setD] = r.useState(false);
  let [k, setK] = r.useState(null);
  let [j, setJ] = r.useState(null);
  let [N, setN] = r.useState(``);
  let [F, setF] = r.useState(null);
  let LRef = r.useRef(tasks2.length + 300);
  let RRef = r.useRef(null);
  let z = (e) => {
    set_(e);
    onChange?.(e);
  };
  let B = (e, t) => z(_.map((n3) => {
    if (n3.id === e) {
      return {
        ...n3,
        ...t
      };
    }
    return n3;
  }));
  r.useEffect(() => {
    if (!T) {
      return;
    }
    let e = (e2) => !RRef.current?.contains(e2.target) && setT(null);
    window.addEventListener(`pointerdown`, e);
    return () => window.removeEventListener(`pointerdown`, e);
  }, [T]);
  r.useEffect(() => {
    if (!k) {
      return;
    }
    let e = (e2) => e2.key === `Escape` && setK(null);
    window.addEventListener(`keydown`, e);
    return () => window.removeEventListener(`keydown`, e);
  }, [k]);
  let V = y.trim().toLowerCase();
  let H = r.useMemo(() => _.filter((e) => (!V || `${e.key} ${e.title}`.toLowerCase().includes(V)) && (x.size === 0 || e.labels.some((e2) => x.has(e2)))), [_, V, x]);
  let U = (assignee) => people2.find((t) => t.id === assignee);
  let W = (e) => labels2.find((t) => t.id === e);
  let G = _.find((e) => e.id === k) ?? null;
  let K = (e, over) => {
    if (!F) {
      return;
    }
    e.preventDefault();
    e.dataTransfer.dropEffect = `move`;
    let n3 = [...e.currentTarget.querySelectorAll(`[data-card]`)].filter((e2) => e2.dataset.card !== F.id);
    let n_length = n3.length;
    for (let t = 0; t < n3.length; t++) {
      let i2 = n3[t].getBoundingClientRect();
      if (e.clientY < i2.top + i2.height / 2) {
        n_length = t;
        break;
      }
    }
    if (F.over !== over || F.index !== n_length) {
      setF({
        ...F,
        over,
        index: n_length
      });
    }
  };
  let q = (status) => {
    if (!F) {
      return;
    }
    let t = _.find((e) => e.id === F.id);
    if (!t) {
      return setF(null);
    }
    let n3 = _.filter((e) => e.id !== F.id);
    let r2 = n3.filter((t2) => t2.status === status && H.some((e) => e.id === t2.id));
    let i2 = r2[F.index ?? r2.length];
    let a2 = {
      ...t,
      status
    };
    let o = i2 ? n3.indexOf(i2) : n3.length;
    z([...n3.slice(0, o), a2, ...n3.slice(o)]);
    setF(null);
  };
  let J = (status) => {
    let title = N.trim();
    setJ(null);
    setN(``);
    if (!title) {
      return;
    }
    LRef.current += 1;
    let n3 = {
      id: `t-${LRef.current}`,
      key: `NW-${LRef.current}`,
      title,
      status,
      priority: 0,
      labels: [],
      created: (/* @__PURE__ */ new Date()).toLocaleDateString(`en-US`, {
        month: `short`,
        day: `numeric`
      })
    };
    z([n3, ..._]);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { href: `ui-task-board`, precedence: `default`, children: p }),
    /* @__PURE__ */ jsxs("section", { className: [`ui-tb`, className].filter(Boolean).join(` `), "aria-label": path.join(` / `), "data-compact": C || void 0, children: [
      /* @__PURE__ */ jsx("header", { className: `ui-tb__top`, children: /* @__PURE__ */ jsxs("nav", { className: `ui-tb__crumbs`, "aria-label": `Breadcrumb`, children: [
        /* @__PURE__ */ jsxs("span", { className: `ui-tb__logo`, "aria-hidden": `true`, children: [
          /* @__PURE__ */ jsx("i", {}),
          /* @__PURE__ */ jsx("i", {}),
          /* @__PURE__ */ jsx("i", {})
        ] }),
        path.map((e, t) => /* @__PURE__ */ jsxs("span", { className: `ui-tb__crumb`, "aria-current": t === path.length - 1 ? `page` : void 0, children: [
          t > 0 && /* @__PURE__ */ jsx(U1Component, {}),
          e
        ] }, e)),
        /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-tb__icon`, "aria-pressed": D, "aria-label": D ? `Remove from favorites` : `Add to favorites`, onClick: () => setD((e) => !e), children: /* @__PURE__ */ jsx(D1Component, { filled: D }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: `ui-tb__bar`, children: [
        /* @__PURE__ */ jsxs("span", { className: `ui-tb__count`, children: [
          H.length,
          ` `,
          H.length === 1 ? `task` : `tasks`,
          H.length !== _.length && /* @__PURE__ */ jsxs("span", { children: [
            ` of `,
            _.length
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `ui-tb__tools`, children: [
          /* @__PURE__ */ jsxs("label", { className: `ui-tb__search`, children: [
            /* @__PURE__ */ jsx(F1Component, { d: `M7 12.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM11 11l3.5 3.5`, size: 14 }),
            /* @__PURE__ */ jsx("input", { type: `search`, value: y, onChange: (e) => setY(e.target.value), placeholder: `Search`, "aria-label": `Search tasks` })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `ui-tb__menu-wrap`, ref: RRef, children: [
            /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-tb__icon`, "aria-label": `Filter by label`, "aria-haspopup": `menu`, "aria-expanded": T === `filter`, "data-active": x.size > 0 || void 0, onClick: () => setT(T ? null : `filter`), children: [
              /* @__PURE__ */ jsx(F1Component, { d: `M2.5 4.5h11M4.5 8h7M6.5 11.5h3` }),
              x.size > 0 && /* @__PURE__ */ jsx("span", { className: `ui-tb__dot` })
            ] }),
            T === `filter` && /* @__PURE__ */ jsxs("div", { className: `ui-tb__menu`, role: `menu`, children: [
              /* @__PURE__ */ jsx("p", { className: `ui-tb__menu-title`, children: `Labels` }),
              labels2.map((e) => /* @__PURE__ */ jsxs("button", { type: `button`, role: `menuitemcheckbox`, "aria-checked": x.has(e.id), className: `ui-tb__menu-item`, onClick: () => setX((t) => {
                let n3 = new Set(t);
                if (n3.has(e.id)) {
                  n3.delete(e.id);
                } else {
                  n3.add(e.id);
                }
                return n3;
              }), children: [
                /* @__PURE__ */ jsx("span", { className: `ui-tb__swatch`, style: {
                  background: e.color
                } }),
                e.label,
                x.has(e.id) && /* @__PURE__ */ jsx(F1Component, { d: `m3.5 8.5 3 3 6-7`, size: 14 })
              ] }, e.id)),
              x.size > 0 && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-tb__menu-item ui-tb__menu-clear`, onClick: () => setX(/* @__PURE__ */ new Set()), children: `Clear filter` })
            ] })
          ] }),
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-tb__icon`, "aria-pressed": C, "aria-label": `Compact cards`, title: `Compact cards`, onClick: () => setC((e) => !e), children: /* @__PURE__ */ jsx(F1Component, { d: `M2.5 3.5h11v3h-11zM2.5 9.5h11v3h-11z` }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-tb__columns`, children: statuses2.map((e) => {
        let t = H.filter((t2) => t2.status === e.id);
        let n3 = F?.over === e.id;
        return /* @__PURE__ */ jsxs("div", { className: `ui-tb__column`, "data-over": n3 || void 0, onDragOver: (t2) => K(t2, e.id), onDragLeave: (e2) => {
          if (!e2.currentTarget.contains(e2.relatedTarget) && F) {
            setF({
              id: F.id
            });
          }
        }, onDrop: (t2) => {
          t2.preventDefault();
          q(e.id);
        }, children: [
          /* @__PURE__ */ jsxs("div", { className: `ui-tb__col-head`, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-tb__status`, children: e.icon }),
            /* @__PURE__ */ jsx("span", { className: `ui-tb__col-title`, children: e.label }),
            /* @__PURE__ */ jsx("span", { className: `ui-tb__col-count`, children: t.length }),
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-tb__icon ui-tb__add`, "aria-label": `Add task to ${e.label}`, onClick: () => {
              setJ(e.id);
              setN(``);
            }, children: /* @__PURE__ */ jsx(F1Component, { d: `M8 3v10M3 8h10`, size: 14 }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `ui-tb__cards`, children: [
            j === e.id && /* @__PURE__ */ jsx("form", { className: `ui-tb__new`, onSubmit: (t2) => {
              t2.preventDefault();
              J(e.id);
            }, children: /* @__PURE__ */ jsx("input", { autoFocus: true, value: N, onChange: (e2) => setN(e2.target.value), onBlur: () => J(e.id), onKeyDown: (e2) => e2.key === `Escape` && (setJ(null), setN(``)), placeholder: `Task title, then Enter`, "aria-label": `New task in ${e.label}` }) }),
            t.map((t2, r2) => {
              let o = U(t2.assignee);
              return /* @__PURE__ */ jsxs("div", { className: `ui-tb__slot`, children: [
                n3 && F?.index === r2 && /* @__PURE__ */ jsx("span", { className: `ui-tb__drop` }),
                /* @__PURE__ */ jsxs("article", { className: `ui-tb__card`, "data-card": t2.id, "data-dragging": F?.id === t2.id || void 0, draggable: true, tabIndex: 0, "aria-label": `${t2.key} ${t2.title}`, onDragStart: (e2) => {
                  e2.dataTransfer.setData(`text/plain`, t2.id);
                  e2.dataTransfer.effectAllowed = `move`;
                  setF({
                    id: t2.id
                  });
                }, onDragEnd: () => setF(null), onClick: () => setK(t2.id), onKeyDown: (e2) => {
                  if (e2.key === `Enter` || e2.key === ` `) {
                    e2.preventDefault();
                    setK(t2.id);
                  }
                }, children: [
                  /* @__PURE__ */ jsxs("div", { className: `ui-tb__card-top`, children: [
                    /* @__PURE__ */ jsx("span", { className: `ui-tb__key`, children: t2.key }),
                    o && /* @__PURE__ */ jsx(S1Component, { person: o, size: 18 })
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: `ui-tb__card-title`, children: [
                    /* @__PURE__ */ jsx("span", { className: `ui-tb__status`, children: e.icon }),
                    /* @__PURE__ */ jsx("span", { children: t2.title })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: `ui-tb__props`, children: [
                    /* @__PURE__ */ jsx("span", { className: `ui-tb__prop`, title: a[t2.priority], children: /* @__PURE__ */ jsx(C1Component, { level: t2.priority }) }),
                    t2.estimate && /* @__PURE__ */ jsxs("span", { className: `ui-tb__prop`, title: `Estimate`, children: [
                      /* @__PURE__ */ jsx(F1Component, { d: `M8 2.5 13.5 12h-11Z`, size: 12 }),
                      t2.estimate
                    ] }),
                    t2.dueIn !== void 0 && /* @__PURE__ */ jsxs("span", { className: `ui-tb__prop`, "data-tone": t2.dueIn < 0 ? `late` : t2.dueIn <= 2 ? `soon` : void 0, children: [
                      /* @__PURE__ */ jsx(F1Component, { d: `M8 14.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM8 6v3l2 1.2M6.5 1.5h3`, size: 12 }),
                      t2.dueIn < 0 ? `${-t2.dueIn}d late` : t2.dueIn === 0 ? `Today` : `${t2.dueIn}d`
                    ] }),
                    t2.subtasks && /* @__PURE__ */ jsxs("span", { className: `ui-tb__prop`, children: [
                      /* @__PURE__ */ jsx(L1Component, { done: t2.subtasks[0], total: t2.subtasks[1] }),
                      t2.subtasks[0],
                      `/`,
                      t2.subtasks[1]
                    ] }),
                    t2.pullRequest && /* @__PURE__ */ jsxs("span", { className: `ui-tb__prop`, children: [
                      /* @__PURE__ */ jsx(F1Component, { d: `M4.5 4v8M4.5 4a1.5 1.5 0 1 0 0-.01M11.5 12a1.5 1.5 0 1 0 0 .01M11.5 10.5V6.5a2 2 0 0 0-2-2H7.5M8.5 3.5l-1 1 1 1`, size: 12 }),
                      `#`,
                      t2.pullRequest
                    ] }),
                    t2.labels.map((e2) => {
                      let t3 = W(e2);
                      if (t3) {
                        return /* @__PURE__ */ jsxs("span", { className: `ui-tb__prop`, children: [
                          /* @__PURE__ */ jsx("span", { className: `ui-tb__swatch ui-tb__swatch--dot`, style: {
                            background: t3.color
                          } }),
                          t3.label
                        ] }, e2);
                      }
                      return null;
                    })
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: `ui-tb__created`, children: [
                    `Created `,
                    t2.created
                  ] })
                ] })
              ] }, t2.id);
            }),
            n3 && F?.index === t.length && /* @__PURE__ */ jsx("span", { className: `ui-tb__drop` }),
            t.length === 0 && j !== e.id && /* @__PURE__ */ jsx("p", { className: `ui-tb__empty`, children: `Drop tasks here` })
          ] })
        ] }, e.id);
      }) }),
      /* @__PURE__ */ jsx("div", { className: `ui-tb__scrim`, "data-open": G ? true : void 0, onClick: () => setK(null), "aria-hidden": `true` }),
      /* @__PURE__ */ jsx("aside", { className: `ui-tb__panel`, "data-open": G ? true : void 0, "aria-label": `Task details`, inert: !G, children: G && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-tb__panel-head`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-tb__key`, children: G.key }),
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-tb__icon`, "aria-label": `Close details`, onClick: () => setK(null), children: /* @__PURE__ */ jsx(F1Component, { d: `m4 4 8 8M12 4l-8 8` }) })
        ] }),
        /* @__PURE__ */ jsx("textarea", { className: `ui-tb__title-input`, value: G.title, rows: 2, onChange: (e) => B(G.id, {
          title: e.target.value
        }), "aria-label": `Title` }),
        /* @__PURE__ */ jsxs("dl", { className: `ui-tb__fields`, children: [
          /* @__PURE__ */ jsx("dt", { children: `Status` }),
          /* @__PURE__ */ jsx("dd", { className: `ui-tb__choices`, children: statuses2.map((e) => /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-tb__choice`, "aria-pressed": G.status === e.id, onClick: () => B(G.id, {
            status: e.id
          }), children: [
            /* @__PURE__ */ jsx("span", { className: `ui-tb__status`, children: e.icon }),
            e.label
          ] }, e.id)) }),
          /* @__PURE__ */ jsx("dt", { children: `Priority` }),
          /* @__PURE__ */ jsx("dd", { className: `ui-tb__choices`, children: [4, 3, 2, 1, 0].map((e) => /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-tb__choice`, "aria-pressed": G.priority === e, onClick: () => B(G.id, {
            priority: e
          }), children: [
            /* @__PURE__ */ jsx(C1Component, { level: e }),
            a[e]
          ] }, e)) }),
          /* @__PURE__ */ jsx("dt", { children: `Labels` }),
          /* @__PURE__ */ jsx("dd", { className: `ui-tb__choices`, children: labels2.map((e) => {
            let t = G.labels.includes(e.id);
            return /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-tb__choice`, "aria-pressed": t, onClick: () => B(G.id, {
              labels: t ? G.labels.filter((t2) => t2 !== e.id) : [...G.labels, e.id]
            }), children: [
              /* @__PURE__ */ jsx("span", { className: `ui-tb__swatch ui-tb__swatch--dot`, style: {
                background: e.color
              } }),
              e.label
            ] }, e.id);
          }) }),
          /* @__PURE__ */ jsx("dt", { children: `Assignee` }),
          /* @__PURE__ */ jsx("dd", { className: `ui-tb__choices`, children: people2.map((e) => /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-tb__choice`, "aria-pressed": G.assignee === e.id, onClick: () => B(G.id, {
            assignee: G.assignee === e.id ? void 0 : e.id
          }), children: [
            /* @__PURE__ */ jsx(S1Component, { person: e, size: 16 }),
            e.name.split(` `)[0]
          ] }, e.id)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `ui-tb__panel-foot`, children: [
          /* @__PURE__ */ jsxs("span", { children: [
            `Created `,
            G.created
          ] }),
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-tb__delete`, onClick: () => {
            z(_.filter((e) => e.id !== G.id));
            setK(null);
          }, children: `Delete task` })
        ] })
      ] }) })
    ] })
  ] });
}
function S1Component({
  person,
  size
}) {
  if (person.avatar) {
    return /* @__PURE__ */ jsx("img", { className: `ui-tb__avatar`, src: person.avatar, alt: person.name, title: person.name, width: size, height: size, loading: `lazy` });
  }
  return /* @__PURE__ */ jsx("span", { className: `ui-tb__avatar ui-tb__avatar--initials`, style: {
    width: size,
    height: size
  }, title: person.name, children: person.name[0] });
}
function C1Component({
  level
}) {
  if (level === 4) {
    return /* @__PURE__ */ jsxs("svg", { className: `ui-tb__prio`, viewBox: `0 0 14 14`, width: `14`, height: `14`, "aria-hidden": `true`, children: [
      /* @__PURE__ */ jsx("rect", { x: `1`, y: `1`, width: `12`, height: `12`, rx: `3`, fill: `#ec4899` }),
      /* @__PURE__ */ jsx("path", { d: `M7 3.8v4M7 9.9v.3`, stroke: `#fff`, strokeWidth: `1.6`, strokeLinecap: `round` })
    ] });
  }
  return /* @__PURE__ */ jsx("svg", { className: `ui-tb__prio`, viewBox: `0 0 14 14`, width: `14`, height: `14`, "aria-hidden": `true`, children: [0, 1, 2].map((t) => /* @__PURE__ */ jsx("rect", { x: 2 + t * 4, y: 9 - t * 3, width: `2.4`, height: 3 + t * 3, rx: `0.8`, className: level > t ? `ui-tb__prio-on` : `ui-tb__prio-off` }, t)) });
}
function L1Component({
  done,
  total
}) {
  let n3 = 2 * Math.PI * 5;
  return /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 14 14`, width: `12`, height: `12`, "aria-hidden": `true`, children: [
    /* @__PURE__ */ jsx("circle", { className: `ui-tb__ring-track`, cx: `7`, cy: `7`, r: `5`, fill: `none`, strokeWidth: `2` }),
    /* @__PURE__ */ jsx("circle", { cx: `7`, cy: `7`, r: `5`, fill: `none`, stroke: `#2f6bff`, strokeWidth: `2`, strokeDasharray: `${done / Math.max(1, total) * n3} ${n3}`, transform: `rotate(-90 7 7)` })
  ] });
}
var U1Component = () => /* @__PURE__ */ jsx(F1Component, { d: `m6 4 4 4-4 4`, size: 12 });
var D1Component = ({
  filled
}) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, width: `15`, height: `15`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m8 1.8 1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.6l-3.8 2 .7-4.3-3.1-3 4.3-.6Z`, fill: filled ? `#f5b400` : `none`, stroke: filled ? `#f5b400` : `currentColor`, strokeWidth: `1.3`, strokeLinejoin: `round` }) });
var F1Component = ({
  d,
  size = 16
}) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, width: size, height: size, fill: `none`, stroke: `currentColor`, strokeWidth: `1.4`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d }) });
var p = `.ui-tb{--ui-tb-tray: #f6f6f6;--ui-tb-card: #ffffff;--ui-tb-line: #ececec;--ui-tb-ink: #171717;--ui-tb-text: #404040;--ui-tb-muted: #8f8f8f;--ui-tb-accent: #2f6bff;--ui-tb-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;min-width: 0;overflow: hidden;container-type: inline-size;background: #fff;border: 1px solid #e5e5e5;border-radius: 20px;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-tb-ink);-webkit-font-smoothing: antialiased}.ui-tb *, .ui-tb *::before, .ui-tb *::after{box-sizing: border-box}.ui-tb button{margin: 0;font: inherit;color: inherit;cursor: pointer}.ui-tb button:focus-visible, .ui-tb [tabindex]:focus-visible{outline: 2px solid var(--ui-tb-accent);outline-offset: 2px}.ui-tb__top{display: flex;align-items: center;min-height: 48px;padding: 0 14px 0 18px;border-bottom: 1px solid var(--ui-tb-line)}.ui-tb__crumbs{display: flex;align-items: center;gap: 6px;font-size: 14px}.ui-tb__logo{display: inline-flex;align-items: flex-end;gap: 2px;height: 14px;margin-right: 4px}.ui-tb__logo i{width: 3px;border-radius: 1px;background: var(--ui-tb-accent)}.ui-tb__logo i:nth-child(1){height: 6px;opacity: 0.45}.ui-tb__logo i:nth-child(2){height: 10px;opacity: 0.7}.ui-tb__logo i:nth-child(3){height: 14px}.ui-tb__crumb{display: inline-flex;align-items: center;gap: 6px;white-space: nowrap;color: var(--ui-tb-muted)}@container (max-width: 420px){.ui-tb__crumb:not(:nth-last-of-type(-n + 2)){display: none}}.ui-tb__crumb svg{color: #c4c4c4}.ui-tb__crumb[aria-current]{color: var(--ui-tb-ink);font-weight: 500}.ui-tb__icon{position: relative;display: grid;place-items: center;width: 28px;height: 28px;padding: 0;border: 0;border-radius: 8px;background: transparent;color: var(--ui-tb-muted) !important;transition: background-color 140ms ease, color 140ms ease}.ui-tb__icon:hover{background: #f3f3f3;color: var(--ui-tb-ink) !important}.ui-tb__icon[aria-pressed="true"], .ui-tb__icon[data-active]{background: #eef3ff;color: var(--ui-tb-accent) !important}.ui-tb__dot{position: absolute;top: 4px;right: 4px;width: 6px;height: 6px;border-radius: 50%;background: var(--ui-tb-accent)}.ui-tb__bar{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 46px;padding: 0 12px 0 18px}.ui-tb__count{font-size: 13px;font-variant-numeric: tabular-nums;white-space: nowrap;color: var(--ui-tb-text)}.ui-tb__count span{color: var(--ui-tb-muted)}.ui-tb__tools{display: flex;align-items: center;gap: 4px}.ui-tb__search{display: flex;align-items: center;gap: 6px;width: clamp(110px, 30vw, 170px);height: 30px;margin-right: 4px;padding: 0 10px;border-radius: 9px;background: #f5f5f5;color: var(--ui-tb-muted);transition: box-shadow 160ms ease, background-color 160ms ease}.ui-tb__search:focus-within{background: #fff;box-shadow: 0 0 0 1px var(--ui-tb-accent), 0 0 0 3px rgba(47, 107, 255, 0.12)}.ui-tb__search input{flex: 1;min-width: 0;border: 0;outline: none;background: transparent;font: inherit;font-size: 13px;color: var(--ui-tb-ink)}.ui-tb__search input::-webkit-search-cancel-button{display: none}.ui-tb__menu-wrap{position: relative}.ui-tb__menu{position: absolute;top: calc(100% + 6px);right: 0;z-index: 8;display: grid;gap: 2px;min-width: 180px;padding: 6px 4px 4px;border-radius: 12px;background: #fff;box-shadow: 0 0 0 1px #e5e5e5, 0 12px 30px -8px rgba(0, 0, 0, 0.2);animation: ui-tb-drop 180ms var(--ui-tb-ease)}.ui-tb__menu-title{margin: 0 0 2px;padding: 0 10px;font-size: 11.5px;color: var(--ui-tb-muted)}.ui-tb__menu-item{display: flex;align-items: center;gap: 8px;height: 30px;padding: 0 10px;border: 0;border-radius: 8px;background: transparent;font-size: 13px !important;text-align: left}.ui-tb__menu-item svg{margin-left: auto;color: var(--ui-tb-accent)}.ui-tb__menu-item:hover{background: #f5f5f5}.ui-tb__menu-clear{color: var(--ui-tb-muted) !important}.ui-tb__swatch{flex: none;width: 8px;height: 8px;border-radius: 2px}.ui-tb__swatch--dot{border-radius: 50%}.ui-tb__prio-on{fill: #525252}.ui-tb__prio-off{fill: #d4d4d4}.ui-tb__ring-track{stroke: #e0e0e0}.ui-tb__columns{display: grid;grid-auto-columns: minmax(224px, 1fr);grid-auto-flow: column;gap: 10px;padding: 0 12px 12px;overflow-x: auto;scrollbar-width: thin}.ui-tb__column{display: flex;flex-direction: column;min-height: 300px;padding: 4px 6px 6px;border-radius: 16px;background: var(--ui-tb-tray);transition: background-color 160ms ease, box-shadow 160ms ease}.ui-tb__column[data-over]{background: #eaeffc;box-shadow: inset 0 0 0 1px #cddbff}.ui-tb__col-head{display: flex;align-items: center;gap: 8px;height: 38px;padding: 0 4px 0 8px}.ui-tb__col-title{font-size: 13.5px;font-weight: 500}.ui-tb__col-count{font-size: 12.5px;font-variant-numeric: tabular-nums;color: var(--ui-tb-muted)}.ui-tb__add{margin-left: auto}.ui-tb__status{display: grid;place-items: center;flex: none;width: 15px;height: 15px}.ui-tb__status svg{width: 15px;height: 15px}.ui-tb__cards{display: grid;align-content: start;gap: 6px;flex: 1}.ui-tb__slot{display: grid;gap: 6px}.ui-tb__card{padding: 10px 12px 11px;border-radius: 12px;background: var(--ui-tb-card);box-shadow: 0 0 0 1px #e8e8e8, 0 1px 2px rgba(0, 0, 0, 0.04);cursor: grab;animation: ui-tb-in 320ms var(--ui-tb-ease) both;transition: box-shadow 160ms ease, opacity 160ms ease, transform 200ms var(--ui-tb-ease)}.ui-tb__card:hover{box-shadow: 0 0 0 1px #dcdcdc, 0 6px 16px -8px rgba(0, 0, 0, 0.14)}.ui-tb__card:active{cursor: grabbing}.ui-tb__card[data-dragging]{opacity: 0.35;transform: scale(0.98)}.ui-tb__card-top{display: flex;align-items: center;justify-content: space-between;min-height: 18px}.ui-tb__key{font-size: 12px;font-variant-numeric: tabular-nums;color: var(--ui-tb-muted)}.ui-tb__avatar{flex: none;border-radius: 50%;object-fit: cover;box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06)}.ui-tb__avatar--initials{display: grid;place-items: center;background: #eef3ff;font-size: 9px;font-weight: 600;color: var(--ui-tb-accent)}.ui-tb__card-title{display: flex;gap: 8px;margin: 4px 0 0;font-size: 13.5px;font-weight: 450;line-height: 19px}.ui-tb__card-title .ui-tb__status{margin-top: 2px}.ui-tb__props{display: flex;flex-wrap: wrap;gap: 5px;margin-top: 9px}.ui-tb__prop{display: inline-flex;align-items: center;gap: 5px;height: 22px;padding: 0 7px;border-radius: 7px;box-shadow: inset 0 0 0 1px #ebebeb;font-size: 11.5px;font-variant-numeric: tabular-nums;white-space: nowrap;color: var(--ui-tb-text)}.ui-tb__prop svg{flex: none;color: var(--ui-tb-muted)}.ui-tb__prop[data-tone="soon"]{color: #b45309}.ui-tb__prop[data-tone="soon"] svg{color: #f59e0b}.ui-tb__prop[data-tone="late"]{color: #db2777;background: #fff5f9;box-shadow: inset 0 0 0 1px #fde0ec}.ui-tb__prop[data-tone="late"] svg{color: #ec4899}.ui-tb__created{margin: 9px 0 0;font-size: 11.5px;color: var(--ui-tb-muted)}.ui-tb[data-compact] .ui-tb__props, .ui-tb[data-compact] .ui-tb__created{display: none}.ui-tb__drop{display: block;height: 3px;margin: -1px 4px;border-radius: 2px;background: var(--ui-tb-accent);animation: ui-tb-grow 160ms var(--ui-tb-ease)}.ui-tb__empty{display: grid;place-items: center;height: 80px;margin: 0;border: 1px dashed #d9d9d9;border-radius: 12px;font-size: 12.5px;color: var(--ui-tb-muted)}.ui-tb__new input{width: 100%;height: 40px;padding: 0 12px;border: 0;border-radius: 12px;outline: none;background: #fff;box-shadow: 0 0 0 1px var(--ui-tb-accent), 0 0 0 3px rgba(47, 107, 255, 0.12);font: inherit;font-size: 13.5px}.ui-tb__scrim{position: absolute;inset: 0;z-index: 9;background: rgba(23, 23, 23, 0.08);opacity: 0;pointer-events: none;transition: opacity 240ms ease}.ui-tb__scrim[data-open]{opacity: 1;pointer-events: auto}.ui-tb__panel{position: absolute;top: 8px;right: 8px;bottom: 8px;z-index: 10;display: flex;flex-direction: column;width: min(360px, calc(100% - 16px));padding: 14px 16px 14px;overflow-y: auto;border-radius: 16px;background: #fff;box-shadow: 0 0 0 1px #e5e5e5, 0 20px 50px -12px rgba(0, 0, 0, 0.25);transform: translateX(calc(100% + 24px));transition: transform 380ms var(--ui-tb-ease)}.ui-tb__panel[data-open]{transform: none}.ui-tb__panel-head{display: flex;align-items: center;justify-content: space-between}.ui-tb__title-input{margin: 8px -6px 0;padding: 4px 6px;border: 0;border-radius: 8px;outline: none;resize: none;font: inherit;font-size: 17px;font-weight: 600;line-height: 23px;color: var(--ui-tb-ink)}.ui-tb__title-input:focus{background: #f7f7f7}.ui-tb__fields{display: grid;gap: 6px;margin: 14px 0 0}.ui-tb__fields dt{margin-top: 8px;font-size: 12px;color: var(--ui-tb-muted)}.ui-tb__fields dd{margin: 0}.ui-tb__choices{display: flex;flex-wrap: wrap;gap: 5px}.ui-tb__choice{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 9px;border: 0;border-radius: 8px;background: #fff;box-shadow: inset 0 0 0 1px #e8e8e8;font-size: 12.5px !important;color: var(--ui-tb-text) !important;transition: background-color 140ms ease, box-shadow 140ms ease}.ui-tb__choice:hover{background: #f7f7f7}.ui-tb__choice[aria-pressed="true"]{background: #eef3ff;box-shadow: inset 0 0 0 1px #cddbff;color: var(--ui-tb-ink) !important}.ui-tb__panel-foot{display: flex;align-items: center;justify-content: space-between;margin-top: auto;padding-top: 16px;font-size: 12px;color: var(--ui-tb-muted)}.ui-tb__delete{height: 28px;padding: 0 10px;border: 0;border-radius: 8px;background: transparent;font-size: 12.5px !important;color: #e5484d !important}.ui-tb__delete:hover{background: #fff1f1}@keyframes ui-tb-in{from{opacity: 0;transform: translateY(3px)}}@keyframes ui-tb-drop{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}@keyframes ui-tb-grow{from{transform: scaleX(0.6);opacity: 0}}@media (prefers-reduced-motion: reduce){.ui-tb__card, .ui-tb__menu, .ui-tb__drop{animation: none}.ui-tb__panel, .ui-tb__scrim, .ui-tb__card{transition: none}}.ui-tb input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-tb textarea:focus-visible, .ui-tb [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-tb{--ui-tb-tray: #161618;--ui-tb-card: #232326;--ui-tb-line: rgba(255, 255, 255, 0.08);--ui-tb-ink: #ededed;--ui-tb-text: #c4c4c4;--ui-tb-muted: #8f8f8f;background: #232326;border-color: rgba(255, 255, 255, 0.08)}:where(.dark, [data-theme="dark"]) .ui-tb__crumb svg{color: #6b6b70}:where(.dark, [data-theme="dark"]) .ui-tb__icon:hover{background: rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-tb__icon[aria-pressed="true"], :where(.dark, [data-theme="dark"]) .ui-tb__icon[data-active]{background: rgba(47, 107, 255, 0.16);color: #6b95ff !important}:where(.dark, [data-theme="dark"]) .ui-tb__search{background: #2a2a2d}:where(.dark, [data-theme="dark"]) .ui-tb__search:focus-within{background: #2a2a2d;box-shadow: 0 0 0 1px var(--ui-tb-accent), 0 0 0 3px rgba(47, 107, 255, 0.24)}:where(.dark, [data-theme="dark"]) .ui-tb__menu{background: #2a2a2d;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 12px 30px -8px rgba(0, 0, 0, 0.5)}:where(.dark, [data-theme="dark"]) .ui-tb__menu-item:hover{background: rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-tb__menu-item svg{color: #6b95ff}:where(.dark, [data-theme="dark"]) .ui-tb__column[data-over]{background: rgba(47, 107, 255, 0.12);box-shadow: inset 0 0 0 1px rgba(47, 107, 255, 0.4)}:where(.dark, [data-theme="dark"]) .ui-tb__card{box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08), 0 1px 2px rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-tb__card:hover{box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14), 0 6px 16px -8px rgba(0, 0, 0, 0.5)}:where(.dark, [data-theme="dark"]) .ui-tb__avatar{box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08)}:where(.dark, [data-theme="dark"]) .ui-tb__avatar--initials{background: rgba(47, 107, 255, 0.16);color: #6b95ff}:where(.dark, [data-theme="dark"]) .ui-tb__prop{box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1)}:where(.dark, [data-theme="dark"]) .ui-tb__prop[data-tone="soon"]{color: #fbbf24}:where(.dark, [data-theme="dark"]) .ui-tb__prop[data-tone="late"]{color: #f472b6;background: rgba(236, 72, 153, 0.14);box-shadow: inset 0 0 0 1px rgba(236, 72, 153, 0.28)}:where(.dark, [data-theme="dark"]) .ui-tb__prio-on{fill: #c4c4c4}:where(.dark, [data-theme="dark"]) .ui-tb__prio-off{fill: #4a4a4f}:where(.dark, [data-theme="dark"]) .ui-tb__ring-track{stroke: rgba(255, 255, 255, 0.14)}:where(.dark, [data-theme="dark"]) .ui-tb__empty{border-color: rgba(255, 255, 255, 0.14)}:where(.dark, [data-theme="dark"]) .ui-tb__new input{background: #2a2a2d;color: var(--ui-tb-ink);box-shadow: 0 0 0 1px var(--ui-tb-accent), 0 0 0 3px rgba(47, 107, 255, 0.24)}:where(.dark, [data-theme="dark"]) .ui-tb__scrim{background: rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-tb__panel{background: #232326;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 20px 50px -12px rgba(0, 0, 0, 0.6)}:where(.dark, [data-theme="dark"]) .ui-tb__title-input{background: transparent}:where(.dark, [data-theme="dark"]) .ui-tb__title-input:focus{background: #2a2a2d}:where(.dark, [data-theme="dark"]) .ui-tb__choice{background: #2a2a2d;box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08)}:where(.dark, [data-theme="dark"]) .ui-tb__choice:hover{background: #313135}:where(.dark, [data-theme="dark"]) .ui-tb__choice[aria-pressed="true"]{background: rgba(47, 107, 255, 0.16);box-shadow: inset 0 0 0 1px rgba(47, 107, 255, 0.45)}:where(.dark, [data-theme="dark"]) .ui-tb__delete{color: #ff6b70 !important}:where(.dark, [data-theme="dark"]) .ui-tb__delete:hover{background: rgba(229, 72, 77, 0.14)}`;
var statuses = [{
  id: `todo`,
  label: `Todo`,
  icon: /* @__PURE__ */ jsx(DComponent, { kind: `todo`, color: `#8f8f8f` })
}, {
  id: `review`,
  label: `In review`,
  icon: /* @__PURE__ */ jsx(DComponent, { kind: `review`, color: `#8b5cf6` })
}, {
  id: `next`,
  label: `Up next`,
  icon: /* @__PURE__ */ jsx(DComponent, { kind: `backlog`, color: `#7aa2ff` })
}, {
  id: `progress`,
  label: `In progress`,
  icon: /* @__PURE__ */ jsx(DComponent, { kind: `progress`, color: `#f59e0b` })
}, {
  id: `done`,
  label: `Done`,
  icon: /* @__PURE__ */ jsx(DComponent, { kind: `done`, color: `#2f6bff` })
}];
var labels = [{
  id: `web`,
  label: `Website`,
  color: `#2f6bff`
}, {
  id: `billing`,
  label: `Billing`,
  color: `#8b5cf6`
}, {
  id: `mobile`,
  label: `Mobile`,
  color: `#14b8a6`
}, {
  id: `bug`,
  label: `Bug`,
  color: `#ec4899`
}, {
  id: `feature`,
  label: `Feature`,
  color: `#a9c1ff`
}];
var people = [{
  id: `mara`,
  name: `Mara Lindqvist`,
  avatar: `/avatars/mara.jpg`
}, {
  id: `jonas`,
  name: `Jonas Weber`,
  avatar: `/avatars/jonas.jpg`
}, {
  id: `lena`,
  name: `Lena Hart`,
  avatar: `/avatars/lena.jpg`
}, {
  id: `theo`,
  name: `Theo Brandt`,
  avatar: `/avatars/theo.jpg`
}, {
  id: `sofia`,
  name: `Sofia Marin`,
  avatar: `/avatars/sofia.jpg`
}];
var tasks = [{
  id: `1`,
  key: `NW-214`,
  title: `Add the launch banner to the marketing site`,
  status: `todo`,
  priority: 2,
  estimate: `M`,
  labels: [`web`, `feature`],
  assignee: `mara`,
  created: `Oct 2`
}, {
  id: `2`,
  key: `NW-209`,
  title: `Currency rounding in annual invoices`,
  status: `todo`,
  priority: 3,
  labels: [`billing`, `bug`],
  assignee: `theo`,
  dueIn: 2,
  created: `Sep 28`
}, {
  id: `3`,
  key: `NW-197`,
  title: `Follow up with the beta customers about pricing`,
  status: `todo`,
  priority: 1,
  labels: [],
  assignee: `sofia`,
  subtasks: [2, 4],
  created: `Sep 24`
}, {
  id: `4`,
  key: `NW-221`,
  title: `Review the onboarding copy for the new plans`,
  status: `review`,
  priority: 2,
  labels: [`web`],
  assignee: `lena`,
  dueIn: 1,
  created: `Oct 2`
}, {
  id: `5`,
  key: `NW-205`,
  title: `Add usage limits to the plan comparison table`,
  status: `review`,
  priority: 3,
  estimate: `L`,
  labels: [`web`, `feature`],
  assignee: `jonas`,
  created: `Sep 27`
}, {
  id: `6`,
  key: `NW-188`,
  title: `Push notification opt-in on iOS`,
  status: `review`,
  priority: 2,
  labels: [`mobile`],
  assignee: `mara`,
  pullRequest: 412,
  created: `Sep 21`
}, {
  id: `7`,
  key: `NW-226`,
  title: `Record the launch walkthrough video`,
  status: `next`,
  priority: 4,
  labels: [`feature`],
  assignee: `sofia`,
  dueIn: -1,
  created: `Oct 1`
}, {
  id: `8`,
  key: `NW-217`,
  title: `Plan the press outreach for launch week`,
  status: `next`,
  priority: 2,
  estimate: `S`,
  labels: [],
  assignee: `lena`,
  created: `Sep 30`
}, {
  id: `9`,
  key: `NW-199`,
  title: `Summarize the beta feedback into one doc`,
  status: `next`,
  priority: 1,
  labels: [],
  assignee: `theo`,
  subtasks: [1, 3],
  created: `Sep 25`
}, {
  id: `10`,
  key: `NW-230`,
  title: `Export guide for the help center`,
  status: `progress`,
  priority: 2,
  labels: [`web`],
  assignee: `jonas`,
  created: `Sep 30`
}, {
  id: `11`,
  key: `NW-201`,
  title: `Proration when teams add seats mid-month`,
  status: `progress`,
  priority: 3,
  labels: [`billing`],
  assignee: `theo`,
  dueIn: 4,
  created: `Sep 23`
}, {
  id: `12`,
  key: `NW-176`,
  title: `Offline mode for the task list`,
  status: `progress`,
  priority: 2,
  estimate: `XL`,
  labels: [`mobile`, `feature`],
  assignee: `mara`,
  pullRequest: 398,
  created: `Sep 16`
}, {
  id: `13`,
  key: `NW-160`,
  title: `Dark mode for the dashboard`,
  status: `done`,
  priority: 2,
  labels: [`web`, `feature`],
  assignee: `lena`,
  created: `Sep 12`
}, {
  id: `14`,
  key: `NW-171`,
  title: `Fix crash when uploading large avatars`,
  status: `done`,
  priority: 3,
  labels: [`mobile`, `bug`],
  assignee: `jonas`,
  created: `Sep 15`
}];
var width = 1240;
function YComponent() {
  let eRef = r.useRef(null);
  let [t, setT] = r.useState(null);
  r.useLayoutEffect(() => {
    let eRef_current = eRef.current;
    let r2 = eRef_current?.closest(`.card__preview`);
    let i2 = r2 ?? eRef_current?.closest(`.stage`);
    if (!eRef_current || !i2) {
      return;
    }
    let a2 = () => {
      let i_clientWidth = i2.clientWidth;
      if (r2) {
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
    a2();
    let o = new ResizeObserver(a2);
    o.observe(i2);
    return () => o.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("div", { ref: eRef, className: `board-demo`, "data-fit": t ? t.card ? `card` : `stage` : void 0, children: /* @__PURE__ */ jsx("div", { className: `board-demo__frame`, style: t ? t.card ? {
    width,
    transform: `scale(${t.scale})`
  } : {
    width,
    zoom: t.scale
  } : void 0, children: /* @__PURE__ */ jsx(O1Component, { tasks, statuses, labels, people }) }) });
}

export {
  YComponent
};
