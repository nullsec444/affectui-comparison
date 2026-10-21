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

// reconstructed/demo.clean-Lan03W3V.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e) => /^\/edit\b/i.test(e.text.trim());
var a = (e) => !i(e) && e.text.trim().endsWith(`?`);
function o(e, t) {
  let n4 = Math.max(0, Math.round((t - e) / 1e3));
  if (n4 < 45) {
    return `just now`;
  }
  let r2 = Math.round(n4 / 60);
  if (r2 < 60) {
    return `${r2}min ago`;
  }
  let i2 = Math.round(r2 / 60);
  if (i2 < 24) {
    return `${i2}h ago`;
  }
  return `${Math.round(i2 / 24)}d ago`;
}
function S1Component({
  comments: comments2,
  currentUser,
  title = `Comments`,
  onRunEdit,
  onAdd,
  onClose,
  className
}) {
  let [_, set_] = n3.useState(comments2);
  let [y, setY] = n3.useState(`all`);
  let [x, setX] = n3.useState(true);
  let [C, setC] = n3.useState(false);
  let [T, setT] = n3.useState({});
  let [D, setD] = n3.useState(/* @__PURE__ */ new Set());
  let [k, setK] = n3.useState(``);
  let [j, setJ] = n3.useState(() => Date.now());
  let NRef = n3.useRef(null);
  let PRef = n3.useRef(null);
  let ref = useD(PRef);
  n3.useEffect(() => {
    let e = window.setInterval(() => setJ(Date.now()), 3e4);
    return () => window.clearInterval(e);
  }, []);
  n3.useEffect(() => {
    if (!C) {
      return;
    }
    let e = (e2) => !NRef.current?.contains(e2.target) && setC(false);
    window.addEventListener(`pointerdown`, e);
    return () => window.removeEventListener(`pointerdown`, e);
  }, [C]);
  let I = _.filter((e) => !D.has(e.id));
  let length = I.filter((e) => i(e) && T[e.id] !== `done`).length;
  let R = {
    all: I.length,
    questions: I.filter(a).length,
    edits: length
  };
  let z = n3.useMemo(() => [..._.filter((e) => y === `all` || (y === `questions` ? a(e) : i(e)))].sort((e, t) => (+t.createdAt - e.createdAt) * (x ? 1 : -1)), [_, y, x]);
  let B = async (e) => {
    setT((t) => ({
      ...t,
      [e.id]: `running`
    }));
    try {
      await (onRunEdit ? onRunEdit(e) : new Promise((resolve) => setTimeout(resolve, 1100)));
      setT((t) => ({
        ...t,
        [e.id]: `done`
      }));
    } catch {
      setT((t) => ({
        ...t,
        [e.id]: `idle`
      }));
    }
  };
  let V = () => {
    let text = k.trim();
    if (!text) {
      return;
    }
    let n4 = {
      id: `c-${Date.now()}`,
      author: currentUser,
      createdAt: Date.now(),
      text
    };
    set_((e) => [n4, ...e]);
    setK(``);
    setY(`all`);
    setX(true);
    setJ(Date.now());
    onAdd?.(n4);
    requestAnimationFrame(() => PRef.current?.scrollTo({
      top: 0,
      behavior: `smooth`
    }));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { href: `ui-comments-panel-clean`, precedence: `default`, children: f }),
    /* @__PURE__ */ jsxs("section", { className: [`ui-cpc`, className].filter(Boolean).join(` `), "aria-label": title, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-cpc__head`, children: [
        /* @__PURE__ */ jsx("h3", { className: `ui-cpc__title`, children: title }),
        onClose && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cpc__icon-btn`, "aria-label": `Close ${title.toLowerCase()}`, onClick: onClose, children: /* @__PURE__ */ jsx(UComponent, { d: l.close }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-cpc__bar`, children: [
        /* @__PURE__ */ jsx("div", { className: `ui-cpc__tabs`, role: `tablist`, "aria-label": `Filter comments`, children: [`all`, `questions`, `edits`].map((e) => /* @__PURE__ */ jsxs("button", { type: `button`, role: `tab`, "aria-selected": y === e, className: `ui-cpc__tab`, onClick: () => setY(e), children: [
          {
            all: `All`,
            questions: `Questions`,
            edits: `Edits`
          }[e],
          e === `edits` && R.edits > 0 && /* @__PURE__ */ jsx("span", { className: `ui-cpc__count`, children: R.edits }, R.edits)
        ] }, e)) }),
        /* @__PURE__ */ jsxs("div", { className: `ui-cpc__sort`, ref: NRef, children: [
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cpc__icon-btn`, "aria-label": `Sort comments`, "aria-haspopup": `menu`, "aria-expanded": C, onClick: () => setC((e) => !e), children: /* @__PURE__ */ jsx(UComponent, { d: l.sort }) }),
          C && /* @__PURE__ */ jsx("div", { className: `ui-cpc__menu`, role: `menu`, children: [{
            label: `Newest first`,
            value: true
          }, {
            label: `Oldest first`,
            value: false
          }].map((e) => /* @__PURE__ */ jsxs("button", { type: `button`, role: `menuitemradio`, "aria-checked": x === e.value, className: `ui-cpc__menu-item`, onClick: () => {
            setX(e.value);
            setC(false);
          }, children: [
            e.label,
            x === e.value && /* @__PURE__ */ jsx(UComponent, { d: l.check, className: `ui-cpc__menu-check` })
          ] }, e.label)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-cpc__morph`, ref, children: /* @__PURE__ */ jsxs("ul", { className: `ui-cpc__list`, ref: PRef, "aria-live": `polite`, children: [
        z.length === 0 && /* @__PURE__ */ jsx("li", { className: `ui-cpc__empty`, children: y === `questions` ? `No open questions.` : `No edits to run.` }),
        z.map((e) => {
          let t = i(e);
          let n4 = T[e.id] ?? `idle`;
          let a2 = D.has(e.id);
          return /* @__PURE__ */ jsxs("li", { className: `ui-cpc__item`, "data-resolved": a2 || void 0, children: [
            /* @__PURE__ */ jsxs("div", { className: `ui-cpc__meta`, children: [
              /* @__PURE__ */ jsx(C1Component, { author: e.author }),
              /* @__PURE__ */ jsx("span", { className: `ui-cpc__name`, children: e.author.name }),
              /* @__PURE__ */ jsx("time", { className: `ui-cpc__time`, dateTime: new Date(e.createdAt).toISOString(), children: o(+e.createdAt, j) }),
              /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cpc__resolve`, "aria-pressed": a2, "aria-label": a2 ? `Reopen comment` : `Resolve comment`, title: a2 ? `Reopen` : `Resolve`, onClick: () => setD((t2) => {
                let n5 = new Set(t2);
                if (n5.has(e.id)) {
                  n5.delete(e.id);
                } else {
                  n5.add(e.id);
                }
                return n5;
              }), children: /* @__PURE__ */ jsx(UComponent, { d: l.resolve }) })
            ] }),
            /* @__PURE__ */ jsx("p", { className: `ui-cpc__text`, children: t ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { className: `ui-cpc__command`, children: `/Edit` }),
              ` `,
              e.text.trim().replace(/^\/edit\s*/i, ``)
            ] }) : e.text }),
            t && !a2 && /* @__PURE__ */ jsx("div", { className: `ui-cpc__actions`, children: n4 === `done` ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("span", { className: `ui-cpc__done`, role: `status`, children: [
                /* @__PURE__ */ jsx(UComponent, { d: l.checkSolid, solid: true }),
                `Edit applied`
              ] }),
              /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cpc__link`, onClick: () => setT((t2) => ({
                ...t2,
                [e.id]: `idle`
              })), children: `Undo` })
            ] }) : /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cpc__btn`, disabled: n4 === `running`, onClick: () => B(e), children: n4 === `running` ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { className: `ui-cpc__spinner`, "aria-hidden": `true` }),
              /* @__PURE__ */ jsx("span", { className: `ui-cpc__shimmer`, "data-text": `Running\u2026`, children: `Running\u2026` })
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(UComponent, { d: l.play, solid: true }),
              `Run edit`
            ] }) }) })
          ] }, e.id);
        })
      ] }) }),
      /* @__PURE__ */ jsxs("form", { className: `ui-cpc__composer`, onSubmit: (e) => {
        e.preventDefault();
        V();
      }, children: [
        /* @__PURE__ */ jsx(C1Component, { author: currentUser }),
        /* @__PURE__ */ jsx("input", { className: `ui-cpc__input`, value: k, onChange: (e) => setK(e.target.value), placeholder: `Add a comment or /edit\u2026`, "aria-label": `Add a comment` }),
        /* @__PURE__ */ jsx("button", { type: `submit`, className: `ui-cpc__send`, "aria-label": `Send comment`, disabled: !k.trim(), children: /* @__PURE__ */ jsx(UComponent, { d: l.up }) })
      ] })
    ] })
  ] });
}
function C1Component({
  author
}) {
  let t = author.name.split(` `).map((e) => e[0]).slice(0, 2).join(``);
  if (author.avatar) {
    return /* @__PURE__ */ jsx("img", { className: `ui-cpc__avatar`, src: author.avatar, alt: ``, width: 20, height: 20, loading: `lazy` });
  }
  return /* @__PURE__ */ jsx("span", { className: `ui-cpc__avatar ui-cpc__avatar--initials`, "aria-hidden": `true`, children: t });
}
var l = {
  close: `M4.5 4.5l7 7M11.5 4.5l-7 7`,
  sort: `M2.5 4.5h11M4.5 8h7M6.5 11.5h3`,
  check: `m3.5 8.5 3 3 6-7`,
  resolve: `M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12ZM5.5 8.2l1.7 1.7 3.3-3.8`,
  checkSolid: `M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Zm8.9-1.2a.5.5 0 0 0-.8-.6L7.44 9.23 6.35 8.15a.5.5 0 1 0-.7.7l1.5 1.5a.5.5 0 0 0 .76-.06l2.5-3.5Z`,
  play: `M5 3.6a.8.8 0 0 1 1.2-.7l6.3 3.9a1.4 1.4 0 0 1 0 2.4l-6.3 3.9a.8.8 0 0 1-1.2-.7V3.6Z`,
  up: `M8 12.5v-9M4 7.5l4-4 4 4`
};
var UComponent = ({
  d,
  solid,
  className
}) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, className: [`ui-cpc__glyph`, className].filter(Boolean).join(` `), "data-solid": solid || void 0, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d }) });
function useD(PRef) {
  let tRef = n3.useRef(null);
  n3.useLayoutEffect(() => {
    let tRef_current = tRef.current;
    let e_current = PRef.current;
    if (!tRef_current || !e_current) {
      return;
    }
    let i2 = () => {
      tRef_current.style.height = `${e_current.offsetHeight}px`;
    };
    i2();
    let a2 = new ResizeObserver(i2);
    a2.observe(e_current);
    let o2 = requestAnimationFrame(() => tRef_current.setAttribute(`data-smooth`, ``));
    return () => {
      a2.disconnect();
      cancelAnimationFrame(o2);
    };
  }, [PRef]);
  return tRef;
}
var f = `.ui-cpc{--ui-cpc-card: #ffffff;--ui-cpc-ink: rgba(0, 0, 0, 0.88);--ui-cpc-strong: #000000;--ui-cpc-text: rgba(0, 0, 0, 0.61);--ui-cpc-muted: rgba(0, 0, 0, 0.45);--ui-cpc-faint: rgba(0, 0, 0, 0.27);--ui-cpc-icon: rgba(0, 0, 0, 0.447);--ui-cpc-line: rgba(0, 0, 0, 0.06);--ui-cpc-wash: rgba(0, 0, 0, 0.03);--ui-cpc-fill: rgba(0, 0, 0, 0.06);--ui-cpc-fill-strong: rgba(0, 0, 0, 0.1);--ui-cpc-accent: rgba(0, 96, 226, 0.765);--ui-cpc-focus: rgba(0, 96, 226, 0.35);--ui-cpc-ok: #1a9a52;--ui-cpc-ok-soft: rgba(26, 154, 82, 0.08);--ui-cpc-solid: rgba(0, 0, 0, 0.88);--ui-cpc-on-solid: #fcfcfc;--ui-cpc-shine: rgba(255, 255, 255, 0.82);--ui-cpc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-cpc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-cpc-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;container-type: inline-size;display: flex;flex-direction: column;width: 100%;max-width: 400px;border-radius: 10px;background: var(--ui-cpc-card);box-shadow: var(--ui-cpc-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-cpc-ink);-webkit-font-smoothing: antialiased}.ui-cpc *, .ui-cpc *::before, .ui-cpc *::after{box-sizing: border-box}:where(.ui-cpc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-cpc) svg{display: block;flex: none}.ui-cpc button:focus-visible{outline: 2px solid var(--ui-cpc-focus);outline-offset: 1px}.ui-cpc__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-cpc__glyph[data-solid]{fill: currentColor;stroke: none}.ui-cpc__head{display: flex;align-items: center;justify-content: space-between;gap: 12px;padding: 12px 12px 0 16px}.ui-cpc__title{margin: 0;font-size: 15px;font-weight: 500;line-height: 24px;color: var(--ui-cpc-strong)}.ui-cpc__icon-btn{display: grid;place-items: center;flex: none;width: 28px;height: 28px;border-radius: 6px;color: var(--ui-cpc-icon);transition: background-color 120ms ease, color 120ms ease}.ui-cpc__icon-btn:hover, .ui-cpc__icon-btn[aria-expanded="true"]{background: var(--ui-cpc-wash);color: var(--ui-cpc-ink)}.ui-cpc__bar{display: flex;align-items: center;justify-content: space-between;gap: 8px;padding: 10px 12px 12px 16px;border-bottom: 0.5px solid var(--ui-cpc-line)}.ui-cpc__tabs{display: flex;gap: 8px;min-width: 0}.ui-cpc__tab{display: inline-flex;align-items: center;gap: 6px;flex: none;padding: 4px 10px;border-radius: 6px;box-shadow: inset 0 0 0 0.5px var(--ui-cpc-line);font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-cpc-text);white-space: nowrap;transition: background-color 90ms ease, color 90ms ease}.ui-cpc__tab:hover{background: var(--ui-cpc-wash)}.ui-cpc__tab[aria-selected="true"]{background: var(--ui-cpc-fill);color: var(--ui-cpc-ink)}.ui-cpc__count{display: inline-grid;place-items: center;min-width: 16px;height: 16px;margin-right: -4px;padding: 0 4px;border-radius: 5px;background: var(--ui-cpc-fill);font-size: 11px;font-weight: 500;line-height: 16px;font-variant-numeric: tabular-nums;color: var(--ui-cpc-text);animation: ui-cpc-pop 220ms var(--ui-cpc-ease) both}.ui-cpc__tab[aria-selected="true"] .ui-cpc__count{background: var(--ui-cpc-card);box-shadow: 0 0 0 0.5px var(--ui-cpc-line);color: var(--ui-cpc-ink)}.ui-cpc__sort{position: relative;flex: none}.ui-cpc__menu{position: absolute;top: calc(100% + 6px);right: 0;z-index: 5;display: grid;gap: 2px;min-width: 160px;padding: 4px;border-radius: 10px;background: var(--ui-cpc-card);box-shadow: var(--ui-cpc-shadow-pop);transform-origin: top right;animation: ui-cpc-drop 180ms var(--ui-cpc-ease)}.ui-cpc__menu-item{display: flex;align-items: center;justify-content: space-between;gap: 12px;height: 28px;padding: 0 8px 0 10px;border-radius: 6px;font-size: 13px;line-height: 20px;text-align: left;color: var(--ui-cpc-ink);transition: background-color 90ms ease}.ui-cpc__menu-item:hover{background: var(--ui-cpc-fill)}.ui-cpc__menu-check{color: var(--ui-cpc-accent);stroke-width: 1.4}.ui-cpc__list{max-height: var(--ui-cpc-max-height, 360px);margin: 0;padding: 0;overflow-y: auto;list-style: none;scrollbar-width: thin;scrollbar-color: var(--ui-cpc-fill-strong) transparent}.ui-cpc__item{padding: 12px 16px 14px;border-top: 0.5px solid var(--ui-cpc-line);animation: ui-cpc-in 360ms var(--ui-cpc-ease) both;transition: opacity 220ms ease}.ui-cpc__item:first-child{border-top: 0}.ui-cpc__item[data-resolved]{opacity: 0.5}.ui-cpc__meta{display: flex;align-items: center;gap: 8px;min-width: 0}.ui-cpc__avatar{flex: none;width: 20px;height: 20px;border-radius: 50%;object-fit: cover;box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1)}.ui-cpc__avatar--initials{display: grid;place-items: center;background: var(--ui-cpc-fill);font-size: 9px;font-weight: 500;line-height: 1;color: var(--ui-cpc-text)}.ui-cpc__name{min-width: 0;overflow: hidden;font-size: 13px;font-weight: 500;line-height: 20px;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-cpc-strong)}.ui-cpc__time{flex: none;margin-left: auto;font-size: 12px;line-height: 16px;font-variant-numeric: tabular-nums;white-space: nowrap;color: var(--ui-cpc-faint)}.ui-cpc__resolve{display: grid;place-items: center;flex: none;width: 24px;height: 24px;margin: -2px -4px -2px 0;border-radius: 6px;color: var(--ui-cpc-icon);opacity: 0;transition: opacity 120ms ease, background-color 120ms ease, color 120ms ease}.ui-cpc__item:hover .ui-cpc__resolve, .ui-cpc__resolve:focus-visible, .ui-cpc__resolve[aria-pressed="true"]{opacity: 1}.ui-cpc__resolve:hover{background: var(--ui-cpc-wash);color: var(--ui-cpc-ink)}.ui-cpc__resolve[aria-pressed="true"]{background: var(--ui-cpc-ok-soft);color: var(--ui-cpc-ok)}.ui-cpc__text{margin: 6px 0 0 28px;font-size: 13px;line-height: 20px;color: var(--ui-cpc-ink);overflow-wrap: anywhere}.ui-cpc__item[data-resolved] .ui-cpc__text{text-decoration: line-through;text-decoration-color: var(--ui-cpc-faint)}.ui-cpc__command{font-weight: 500;color: var(--ui-cpc-muted)}.ui-cpc__actions{display: flex;align-items: center;gap: 10px;margin: 10px 0 0 28px}.ui-cpc__btn{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 10px 0 8px;border-radius: 6px;background: var(--ui-cpc-card);box-shadow: var(--ui-cpc-shadow);font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-cpc-strong);transition: background-color 120ms ease, color 120ms ease}.ui-cpc__btn .ui-cpc__glyph{color: var(--ui-cpc-icon)}.ui-cpc__btn:hover:not(:disabled){background: #fafafa}.ui-cpc__btn:disabled{color: var(--ui-cpc-muted);cursor: progress}.ui-cpc__spinner{flex: none;width: 12px;height: 12px;margin: 0 2px;border: 1.2px solid var(--ui-cpc-fill-strong);border-top-color: var(--ui-cpc-accent);border-radius: 50%;animation: ui-cpc-spin 700ms linear infinite}.ui-cpc__shimmer{position: relative;display: inline-block}.ui-cpc__shimmer::after{content: attr(data-text);content: attr(data-text) / "";position: absolute;inset: 0;white-space: nowrap;color: transparent;background: linear-gradient(90deg, transparent 38%, var(--ui-cpc-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;-webkit-background-clip: text;background-clip: text;animation: ui-cpc-sweep 1.3s linear infinite;pointer-events: none}.ui-cpc__done{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 10px 0 8px;border-radius: 6px;background: var(--ui-cpc-ok-soft);font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-cpc-ok);animation: ui-cpc-in 300ms var(--ui-cpc-ease)}.ui-cpc__link{height: 28px;padding: 0 4px;border-radius: 6px;font-size: 13px;line-height: 20px;color: var(--ui-cpc-muted);transition: color 120ms ease, background-color 120ms ease}.ui-cpc__link:hover{background: var(--ui-cpc-wash);color: var(--ui-cpc-ink)}.ui-cpc__empty{padding: 28px 16px;font-size: 13px;line-height: 20px;text-align: center;color: var(--ui-cpc-muted)}.ui-cpc__composer{display: flex;align-items: center;gap: 8px;padding: 8px 8px 8px 16px;border-top: 0.5px solid var(--ui-cpc-line)}.ui-cpc__input{flex: 1;min-width: 0;height: 28px;margin: 0;padding: 0;border: 0;outline: none;background: transparent;font: inherit;font-size: 13px;line-height: 20px;color: var(--ui-cpc-strong);caret-color: var(--ui-cpc-accent)}.ui-cpc__input::placeholder{color: var(--ui-cpc-faint);opacity: 1}.ui-cpc__send{display: grid;place-items: center;flex: none;width: 28px;height: 28px;border-radius: 6px;background: var(--ui-cpc-solid);color: var(--ui-cpc-on-solid);transition: opacity 160ms ease, transform 160ms ease}.ui-cpc__send .ui-cpc__glyph{stroke-width: 1.5}.ui-cpc__send:disabled{opacity: 0.3;cursor: default}.ui-cpc__send:not(:disabled):active{transform: scale(0.94)}@keyframes ui-cpc-in{from{opacity: 0;transform: translateY(3px)}}@keyframes ui-cpc-drop{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}@keyframes ui-cpc-pop{from{opacity: 0;transform: scale(0.8)}}@keyframes ui-cpc-spin{to{transform: rotate(360deg)}}@keyframes ui-cpc-sweep{from{background-position: 100% 0}to{background-position: 0% 0}}.ui-cpc__morph{overflow: hidden}.ui-cpc__morph[data-smooth]{transition: height 380ms var(--ui-cpc-ease)}@container (max-width: 360px){.ui-cpc__head{padding-left: 14px}.ui-cpc__bar{padding-left: 14px;padding-right: 10px}.ui-cpc__tabs{gap: 4px}.ui-cpc__tab{padding: 4px 8px}.ui-cpc__item{padding-left: 14px;padding-right: 14px}.ui-cpc__composer{padding-left: 14px}}@container (max-width: 300px){.ui-cpc__text, .ui-cpc__actions{margin-left: 0}}@media (hover: none) and (pointer: coarse){.ui-cpc__icon-btn, .ui-cpc__send{width: 36px;height: 36px}.ui-cpc__tab{padding: 6px 12px}.ui-cpc__menu-item{height: 36px}.ui-cpc__btn, .ui-cpc__done, .ui-cpc__link{height: 34px}.ui-cpc__input{height: 36px}.ui-cpc__resolve{width: 32px;height: 32px;margin: -6px -6px -6px 0;opacity: 1}}@media (prefers-reduced-motion: reduce){.ui-cpc *, .ui-cpc *::before, .ui-cpc *::after{animation: none !important;transition: none !important}}.ui-cpc input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-cpc textarea:focus-visible, .ui-cpc [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-cpc{--ui-cpc-card: #1c1c1e;--ui-cpc-ink: rgba(255, 255, 255, 0.9);--ui-cpc-strong: #ffffff;--ui-cpc-text: rgba(255, 255, 255, 0.62);--ui-cpc-muted: rgba(255, 255, 255, 0.46);--ui-cpc-faint: rgba(255, 255, 255, 0.3);--ui-cpc-icon: rgba(255, 255, 255, 0.5);--ui-cpc-line: rgba(255, 255, 255, 0.08);--ui-cpc-wash: rgba(255, 255, 255, 0.04);--ui-cpc-fill: rgba(255, 255, 255, 0.08);--ui-cpc-fill-strong: rgba(255, 255, 255, 0.14);--ui-cpc-accent: #4d8dff;--ui-cpc-focus: rgba(77, 141, 255, 0.5);--ui-cpc-ok: #3ec27a;--ui-cpc-ok-soft: rgba(62, 194, 122, 0.14);--ui-cpc-solid: rgba(255, 255, 255, 0.9);--ui-cpc-on-solid: #1c1c1e;--ui-cpc-shine: #ffffff;--ui-cpc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-cpc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 28px -10px rgba(0, 0, 0, 0.6)}:where(.dark, [data-theme="dark"]) .ui-cpc__btn:hover:not(:disabled){background: #232326}:where(.dark, [data-theme="dark"]) .ui-cpc__menu{background: #232326}:where(.dark, [data-theme="dark"]) .ui-cpc__avatar{box-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.14)}`;
var p = (e) => Date.now() - e * 6e4;
var comments = [{
  id: `1`,
  author: {
    name: `Mara Lindqvist`,
    avatar: `/avatars/mara.jpg`
  },
  createdAt: p(2),
  text: `/edit Rename every \u201Ccustomers\u201D to \u201Cmembers\u201D on the pricing page.`
}, {
  id: `2`,
  author: {
    name: `Jonas Weber`,
    avatar: `/avatars/jonas.jpg`
  },
  createdAt: p(5),
  text: `Should we mention the launch discount in the hero too?`
}, {
  id: `3`,
  author: {
    name: `Lena Hart`,
    avatar: `/avatars/lena.jpg`
  },
  createdAt: p(11),
  text: `The new illustrations look great on mobile.`
}, {
  id: `4`,
  author: {
    name: `Theo Brandt`,
    avatar: `/avatars/theo.jpg`
  },
  createdAt: p(18),
  text: `/edit Shorten every FAQ answer to two sentences.`
}, {
  id: `5`,
  author: {
    name: `Sofia Marin`,
    avatar: `/avatars/sofia.jpg`
  },
  createdAt: p(26),
  text: `Can we ship this before Friday?`
}];
function HComponent() {
  return /* @__PURE__ */ jsx("div", { className: `comments-demo`, children: /* @__PURE__ */ jsx(S1Component, { comments, currentUser: {
    name: `Noah Keller`,
    avatar: `/avatars/noah.jpg`
  }, onClose: () => {
  } }) });
}

export {
  HComponent
};
