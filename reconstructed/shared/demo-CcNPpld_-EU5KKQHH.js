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

// reconstructed/demo-CcNPpld_.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function IComponent({
  decisions: decisions2,
  onDecide,
  className
}) {
  let [c, setC] = n3.useState(() => Object.fromEntries(decisions2.map((e) => [e.id, {
    open: !e.collapsed
  }])));
  let u = (e, t) => setC((n4) => ({
    ...n4,
    [e]: {
      ...n4[e],
      ...t
    }
  }));
  let length = decisions2.filter((e) => !c[e.id]?.answered).length;
  let f = (n4, r2) => {
    u(n4.id, {
      answered: r2 === `primary` ? n4.primary : n4.secondary
    });
    onDecide?.(n4, r2);
    window.setTimeout(() => {
      setC((t) => {
        let r3 = {
          ...t,
          [n4.id]: {
            ...t[n4.id],
            gone: true
          }
        };
        let i = decisions2.find((e) => e.id !== n4.id && !r3[e.id]?.open && !r3[e.id]?.answered);
        if (i) {
          r3[i.id] = {
            ...r3[i.id],
            open: true
          };
        }
        return r3;
      });
    }, 1100);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { href: `ui-decision-inbox`, precedence: `default`, children: s }),
    /* @__PURE__ */ jsxs("section", { className: [`ui-di`, className].filter(Boolean).join(` `), "data-clear": length === 0 || void 0, children: [
      /* @__PURE__ */ jsx("header", { className: `ui-di__head`, "aria-live": `polite`, children: length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(AComponent, {}),
        /* @__PURE__ */ jsxs("span", { children: [
          length,
          ` `,
          length === 1 ? `needs` : `need`,
          ` your input`
        ] })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(OComponent, {}),
        /* @__PURE__ */ jsx("span", { children: `All caught up` })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: `ui-di__card`, children: [
        decisions2.map((e) => {
          let t = c[e.id] ?? {
            open: true
          };
          return /* @__PURE__ */ jsx("div", { className: `ui-di__row`, "data-gone": t.gone || void 0, inert: t.gone, children: /* @__PURE__ */ jsx("div", { className: `ui-di__row-inner`, children: /* @__PURE__ */ jsxs("div", { className: `ui-di__item`, "data-open": t.open || void 0, "data-answered": t.answered ? true : void 0, children: [
            t.open ? /* @__PURE__ */ jsx("p", { className: `ui-di__title`, children: e.title }) : /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-di__title ui-di__title--folded`, onClick: () => u(e.id, {
              open: true
            }), children: e.title }),
            /* @__PURE__ */ jsx("div", { className: `ui-di__body`, "data-open": t.open || void 0, children: /* @__PURE__ */ jsxs("div", { className: `ui-di__body-inner`, children: [
              e.detail && /* @__PURE__ */ jsx("p", { className: `ui-di__detail`, children: e.detail }),
              /* @__PURE__ */ jsx("div", { className: `ui-di__actions`, children: t.answered ? /* @__PURE__ */ jsxs("span", { className: `ui-di__done`, role: `status`, children: [
                /* @__PURE__ */ jsx(OComponent, {}),
                t.answered
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-di__btn ui-di__btn--primary`, onClick: () => f(e, `primary`), children: e.primary }),
                /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-di__btn`, onClick: () => f(e, `secondary`), children: e.secondary })
              ] }) })
            ] }) })
          ] }) }) }, e.id);
        }),
        /* @__PURE__ */ jsx("p", { className: `ui-di__empty`, children: `Nothing waiting on you \u2013 new decisions show up here.` })
      ] })
    ] })
  ] });
}
var AComponent = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, width: `16`, height: `16`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("path", { d: `M6.7 2.3a1.5 1.5 0 0 1 2.6 0l5.4 9.4A1.5 1.5 0 0 1 13.4 14H2.6a1.5 1.5 0 0 1-1.3-2.3Z`, fill: `currentColor` }),
  /* @__PURE__ */ jsx("path", { d: `M8 5.6v3.6`, stroke: `#fff`, strokeWidth: `1.5`, strokeLinecap: `round` }),
  /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `11.4`, r: `0.85`, fill: `#fff` })
] });
var OComponent = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, width: `16`, height: `16`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `7`, fill: `currentColor` }),
  /* @__PURE__ */ jsx("path", { d: `m5 8.2 2 2 4-4.2`, fill: `none`, stroke: `#fff`, strokeWidth: `1.6`, strokeLinecap: `round`, strokeLinejoin: `round` })
] });
var s = `
.ui-di {
  --ui-di-tray: #f0f0f0;
  --ui-di-card: #ffffff;
  --ui-di-line: #f0f0f0;
  --ui-di-ink: #171717;
  --ui-di-text: #404040;
  --ui-di-muted: #8f8f8f;
  --ui-di-faint: #b5b5b5;
  --ui-di-alert: #e8590c;
  --ui-di-ok: #1f8a4c;
  --ui-di-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  width: 100%;
  max-width: 440px;
  /* Like the Chat Composer: a gray tray with the heading, the white card sits on top of it */
  background: var(--ui-di-tray);
  /* The gray tray frames the white card on every side */
  padding: 6px;
  border-radius: 22px;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-di-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-di *, .ui-di *::before, .ui-di *::after { box-sizing: border-box; }
.ui-di button { margin: 0; font: inherit; cursor: pointer; }
.ui-di button:focus-visible { outline: 2px solid #2f6bff; outline-offset: 2px; }

.ui-di__head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 18px 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-di-alert);
  transition: color 300ms ease;
}
.ui-di[data-clear] .ui-di__head { color: var(--ui-di-ok); }

.ui-di__card {
  overflow: hidden;
  background: var(--ui-di-card);
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}

/* Rows fold away with a height transition once answered */
.ui-di__row {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 460ms var(--ui-di-ease), opacity 300ms ease;
}
.ui-di__row[data-gone] { grid-template-rows: 0fr; opacity: 0; }
.ui-di__row-inner { min-height: 0; overflow: hidden; }
.ui-di__row + .ui-di__row .ui-di__item { border-top: 1px solid var(--ui-di-line); }
.ui-di__row[data-gone] + .ui-di__row .ui-di__item { border-top-color: transparent; }

.ui-di__item { padding: 16px 20px 14px; }
.ui-di__item:not([data-open]) { padding-bottom: 16px; }
.ui-di__title {
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: var(--ui-di-ink);
}
.ui-di__title--folded {
  color: var(--ui-di-faint);
  transition: color 160ms ease;
}
.ui-di__title--folded:hover { color: var(--ui-di-muted); }

.ui-di__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 420ms var(--ui-di-ease);
}
.ui-di__body[data-open] { grid-template-rows: 1fr; }
/* Room around the buttons so the clipping for the fold never cuts their ring and shadow */
.ui-di__body-inner {
  min-height: 0;
  overflow: hidden;
  margin: 0 -4px -4px;
  padding: 0 4px 4px;
}
.ui-di__detail {
  margin: 4px 0 0;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-di-muted);
}
.ui-di__actions {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 30px;
  margin-top: 12px;
}

.ui-di__btn {
  height: 30px;
  padding: 0 12px;
  border: 0;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0 0 0 1px #e5e5e5, 0 1px 2px rgba(0, 0, 0, 0.04);
  font-size: 13px !important;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-di-ink);
  transition: background-color 160ms ease, transform 160ms ease;
}
.ui-di__btn:hover { background: #f7f7f7; }
.ui-di__btn:active { transform: scale(0.98); }
.ui-di__btn--primary {
  background: linear-gradient(#323137, #201e25);
  box-shadow: 0 0 0 1px #0d0d0d, 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  color: #fff;
}
.ui-di__btn--primary:hover { background: linear-gradient(#3b3a41, #26242b); }

.ui-di__done {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-di-ok);
  animation: ui-di-in 360ms var(--ui-di-ease);
}

.ui-di__empty {
  display: none;
  margin: 0;
  padding: 18px 20px;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-di-muted);
}
.ui-di[data-clear] .ui-di__empty { display: block; animation: ui-di-in 420ms var(--ui-di-ease) 300ms both; }

@keyframes ui-di-in {
  from { opacity: 0; transform: translateY(3px); }
}

@media (prefers-reduced-motion: reduce) {
  .ui-di__row, .ui-di__body { transition: none; }
  .ui-di__done, .ui-di__empty { animation: none !important; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-di {
  --ui-di-tray: #161618;
  --ui-di-card: #232326;
  --ui-di-line: rgba(255, 255, 255, 0.08);
  --ui-di-ink: #ededed;
  --ui-di-text: #c4c4c4;
  --ui-di-muted: #8f8f8f;
  --ui-di-faint: #6b6b70;
  --ui-di-alert: #fb8a3c;
  --ui-di-ok: #3fbf74;
}
:where(.dark, [data-theme="dark"]) .ui-di__card {
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}
:where(.dark, [data-theme="dark"]) .ui-di__btn {
  background: #2a2a2d;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 1px 2px rgba(0, 0, 0, 0.4);
}
:where(.dark, [data-theme="dark"]) .ui-di__btn:hover { background: #313135; }
/* The dark primary button inverts, like on the site */
:where(.dark, [data-theme="dark"]) .ui-di__btn--primary {
  background: linear-gradient(#f4f4f5, #e4e4e7);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3), inset 0 1px 0 #ffffff;
  color: #121213;
}
:where(.dark, [data-theme="dark"]) .ui-di__btn--primary:hover { background: linear-gradient(#ffffff, #ececef); }
`;
var decisions = [{
  id: `rollout`,
  title: `Roll out the new onboarding to everyone?`,
  detail: `Test won with +8% activation \xB7 2 weeks of data`,
  primary: `Roll out`,
  secondary: `Keep testing`
}, {
  id: `renewal`,
  title: `Renew Figma for the design team?`,
  detail: `12 seats \xB7 $1,800 per year \xB7 renews in 5 days`,
  primary: `Renew`,
  secondary: `Change seats`
}];
function LComponent() {
  let [key, setKey] = n3.useState(0);
  let [a, setA] = n3.useState(decisions.length);
  return /* @__PURE__ */ jsx("div", { className: `decision-demo`, children: /* @__PURE__ */ jsx(IComponent, { decisions, onDecide: () => {
    if (a > 1) {
      return setA(a - 1);
    }
    window.setTimeout(() => {
      setA(decisions.length);
      setKey((e) => e + 1);
    }, 3200);
  } }, key) });
}
export {
  LComponent as default
};
