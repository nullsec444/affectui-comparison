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

// reconstructed/demo-D2Q4vYDw.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function IComponent({
  title = `Tips`,
  tips: tips2,
  onClose,
  closeLabel = `Close`,
  className
}) {
  let [l2, setL] = n3.useState(/* @__PURE__ */ new Set());
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { href: `ui-tips-panel`, precedence: `default`, children: s }),
    /* @__PURE__ */ jsxs("section", { className: [`ui-tp`, className].filter(Boolean).join(` `), "aria-label": title, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-tp__head`, children: [
        /* @__PURE__ */ jsx("h3", { className: `ui-tp__title`, children: title }),
        /* @__PURE__ */ jsxs("span", { className: `ui-tp__count`, "aria-live": `polite`, children: [
          l2.size,
          `/`,
          tips2.length,
          ` done`
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-tp__card`, children: /* @__PURE__ */ jsx("ul", { className: `ui-tp__grid`, children: tips2.map((e, t) => {
        let n4 = l2.has(e.id);
        return /* @__PURE__ */ jsxs("li", { className: `ui-tp__tip`, "data-done": n4 || void 0, style: {
          animationDelay: `${80 + t * 50}ms`
        }, children: [
          /* @__PURE__ */ jsx("p", { className: `ui-tp__tip-title`, children: e.title }),
          /* @__PURE__ */ jsx("p", { className: `ui-tp__tip-text`, children: e.description }),
          n4 ? /* @__PURE__ */ jsxs("span", { className: `ui-tp__done`, role: `status`, children: [
            /* @__PURE__ */ jsx(OComponent, {}),
            e.doneLabel ?? `Done`
          ] }) : /* @__PURE__ */ jsx("button", { type: `button`, className: [`ui-tp__btn`, e.primary && `ui-tp__btn--primary`].filter(Boolean).join(` `), onClick: () => {
            setL((t2) => new Set(t2).add(e.id));
            e.onAction?.();
          }, children: e.action })
        ] }, e.id);
      }) }) }),
      onClose && /* @__PURE__ */ jsx("footer", { className: `ui-tp__foot`, children: /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-tp__btn`, onClick: onClose, children: closeLabel }) })
    ] })
  ] });
}
var AComponent = ({
  children
}) => /* @__PURE__ */ jsx("kbd", { className: `ui-tp__kbd`, children });
var OComponent = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, width: `16`, height: `16`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `7`, fill: `currentColor` }),
  /* @__PURE__ */ jsx("path", { d: `m5 8.2 2 2 4-4.2`, fill: `none`, stroke: `#fff`, strokeWidth: `1.6`, strokeLinecap: `round`, strokeLinejoin: `round` })
] });
var s = `
.ui-tp {
  --ui-tp-tray: #f0f0f0;
  --ui-tp-card: #ffffff;
  --ui-tp-line: #ececec;
  --ui-tp-ink: #171717;
  --ui-tp-muted: #737373;
  --ui-tp-ok: #2f6bff;
  /* Height of the tip list before it scrolls */
  --ui-tp-max-height: 420px;
  --ui-tp-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  width: 100%;
  max-width: 760px;
  /* Like the Chat Composer: a gray tray with heading and footer, the white card sits on top of it */
  background: var(--ui-tp-tray);
  /* The gray tray frames the white card on every side */
  padding: 6px;
  border-radius: 22px;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-tp-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-tp *, .ui-tp *::before, .ui-tp *::after { box-sizing: border-box; }
.ui-tp button { margin: 0; font: inherit; cursor: pointer; }
.ui-tp button:focus-visible { outline: 2px solid var(--ui-tp-ok); outline-offset: 2px; }

.ui-tp__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 13px 20px 12px;
}
.ui-tp__title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.01em;
}
.ui-tp__count {
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  color: var(--ui-tp-muted);
}

.ui-tp__card {
  container-type: inline-size;
  max-height: var(--ui-tp-max-height);
  overflow-y: auto;
  scrollbar-width: thin;
  background: var(--ui-tp-card);
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}
.ui-tp__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin: 0;
  padding: 14px;
  list-style: none;
}
@container (max-width: 560px) { .ui-tp__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@container (max-width: 380px) { .ui-tp__grid { grid-template-columns: minmax(0, 1fr); } }

.ui-tp__tip {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 16px 14px;
  border: 1px solid var(--ui-tp-line);
  border-radius: 14px;
  animation: ui-tp-in 480ms var(--ui-tp-ease) both;
  transition: background-color 260ms ease, border-color 260ms ease;
}
.ui-tp__tip[data-done] { background: #fafafa; }
.ui-tp__tip-title {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
.ui-tp__tip-text {
  flex: 1;
  margin: 6px 0 14px;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-tp-muted);
}
.ui-tp__kbd {
  display: inline-grid;
  place-items: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 0 0 1px #e5e5e5, 0 1px 0 #e5e5e5;
  font-family: inherit;
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
  color: var(--ui-tp-ink);
  vertical-align: 1px;
}

.ui-tp__btn {
  height: 30px;
  padding: 0 12px;
  border: 0;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0 0 0 1px #e5e5e5, 0 1px 2px rgba(0, 0, 0, 0.04);
  font-size: 13px !important;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-tp-ink);
  transition: background-color 160ms ease, transform 160ms ease;
}
.ui-tp__btn:hover { background: #f7f7f7; }
.ui-tp__btn:active { transform: scale(0.98); }
.ui-tp__btn--primary {
  background: linear-gradient(#323137, #201e25);
  box-shadow: 0 0 0 1px #0d0d0d, 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  color: #fff;
}
.ui-tp__btn--primary:hover { background: linear-gradient(#3b3a41, #26242b); }

.ui-tp__done {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-tp-ok);
  animation: ui-tp-pop 360ms var(--ui-tp-ease);
}

.ui-tp__foot { padding: 8px 10px 10px; }
.ui-tp:not(:has(.ui-tp__foot)) { padding-bottom: 8px; }

@keyframes ui-tp-in {
  from { opacity: 0; transform: translateY(4px); }
}
@keyframes ui-tp-pop {
  from { opacity: 0; transform: scale(0.94); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-tp__tip, .ui-tp__done { animation: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tp {
  --ui-tp-tray: #161618;
  --ui-tp-card: #232326;
  --ui-tp-line: rgba(255, 255, 255, 0.08);
  --ui-tp-ink: #ededed;
  --ui-tp-muted: #8f8f8f;
  --ui-tp-ok: #6b95ff;
}
:where(.dark, [data-theme="dark"]) .ui-tp__card {
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  color-scheme: dark;
}
:where(.dark, [data-theme="dark"]) .ui-tp__tip[data-done] { background: #2a2a2d; }
:where(.dark, [data-theme="dark"]) .ui-tp__kbd {
  background: #2a2a2d;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
}
:where(.dark, [data-theme="dark"]) .ui-tp__btn {
  background: #2a2a2d;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 1px 2px rgba(0, 0, 0, 0.4);
}
:where(.dark, [data-theme="dark"]) .ui-tp__btn:hover { background: #313135; }
/* The dark primary button inverts, like on the site */
:where(.dark, [data-theme="dark"]) .ui-tp__btn--primary {
  background: linear-gradient(#f4f4f5, #e4e4e7);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3), inset 0 1px 0 #ffffff;
  color: #121213;
}
:where(.dark, [data-theme="dark"]) .ui-tp__btn--primary:hover { background: linear-gradient(#ffffff, #ececef); }
`;
var tips = [{
  id: `invite`,
  title: `Invite your team`,
  description: `Work on projects together and keep feedback in one place.`,
  action: `Invite`,
  doneLabel: `Invite sent`
}, {
  id: `search`,
  title: `Quick search`,
  description: /* @__PURE__ */ jsxs(Fragment, { children: [
    `Press `,
    /* @__PURE__ */ jsx(AComponent, { children: `\u2318K` }),
    ` to jump to any page, project or setting.`
  ] }),
  action: `Try it`,
  doneLabel: `Got it`
}, {
  id: `digest`,
  title: `Weekly digest`,
  description: `Get a short summary of what changed every Monday morning.`,
  action: `Turn on`,
  doneLabel: `Turned on`
}, {
  id: `slack`,
  title: `Connect Slack`,
  description: `Post an update to a channel when something needs your attention.`,
  action: `Connect`,
  doneLabel: `Connected`
}, {
  id: `mobile`,
  title: `Mobile app`,
  description: `Check activity and approve requests while you're on the go.`,
  action: `Get the app`,
  doneLabel: `Link sent`
}, {
  id: `pro`,
  title: `Ready for Pro?`,
  description: `Unlimited projects, priority support and advanced analytics.`,
  action: `See plans`,
  doneLabel: `Opened`,
  primary: true
}, {
  id: `theme`,
  title: `Dark mode`,
  description: `Switch the theme or follow your system setting automatically.`,
  action: `Switch`,
  doneLabel: `Switched`
}, {
  id: `api`,
  title: `API keys`,
  description: `Automate your workflow and pull data into your own tools.`,
  action: `Create key`,
  doneLabel: `Key created`
}, {
  id: `export`,
  title: `Export data`,
  description: `Download every project as CSV whenever you need a copy.`,
  action: `Export`,
  doneLabel: `Export started`
}];
var l = {
  width: 720,
  height: 410
};
function UComponent() {
  let eRef = n3.useRef(null);
  let [t, setT] = n3.useState(null);
  let [key, setKey] = n3.useState(0);
  let [u, setU] = n3.useState(false);
  n3.useLayoutEffect(() => {
    let t2 = eRef.current?.closest(`.card__preview`);
    if (!t2) {
      return;
    }
    let n4 = () => setT(Math.min((t2.clientWidth - 48) / l.width, (t2.clientHeight - 80) / l.height));
    n4();
    let r2 = new ResizeObserver(n4);
    r2.observe(t2);
    return () => r2.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("div", { ref: eRef, className: `tips-demo`, "data-closing": u || void 0, style: t === null ? void 0 : {
    "--fit": t
  }, children: /* @__PURE__ */ jsx(IComponent, { tips, onClose: () => {
    setU(true);
    window.setTimeout(() => {
      setKey((e) => e + 1);
      setU(false);
    }, 900);
  } }, key) });
}
export {
  UComponent as default
};
