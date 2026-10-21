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

// reconstructed/demo.clean-Bfu_rP8L.jsx
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
    /* @__PURE__ */ jsx("style", { href: `ui-tips-panel-clean`, precedence: `default`, children: s }),
    /* @__PURE__ */ jsxs("section", { className: [`ui-tpc`, className].filter(Boolean).join(` `), "aria-label": title, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-tpc__head`, children: [
        /* @__PURE__ */ jsx("h3", { className: `ui-tpc__title`, children: title }),
        /* @__PURE__ */ jsxs("span", { className: `ui-tpc__count`, "aria-live": `polite`, children: [
          l2.size,
          `/`,
          tips2.length,
          ` done`
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-tpc__body`, children: /* @__PURE__ */ jsx("ul", { className: `ui-tpc__grid`, children: tips2.map((e, t) => {
        let n4 = l2.has(e.id);
        return /* @__PURE__ */ jsxs("li", { className: `ui-tpc__tip`, "data-done": n4 || void 0, style: {
          animationDelay: `${80 + t * 50}ms`
        }, children: [
          /* @__PURE__ */ jsx("p", { className: `ui-tpc__tip-title`, children: e.title }),
          /* @__PURE__ */ jsx("p", { className: `ui-tpc__tip-text`, children: e.description }),
          n4 ? /* @__PURE__ */ jsxs("span", { className: `ui-tpc__done`, role: `status`, children: [
            /* @__PURE__ */ jsx(OComponent, {}),
            e.doneLabel ?? `Done`
          ] }) : /* @__PURE__ */ jsx("button", { type: `button`, className: [`ui-tpc__btn`, e.primary && `ui-tpc__btn--primary`].filter(Boolean).join(` `), onClick: () => {
            setL((t2) => new Set(t2).add(e.id));
            e.onAction?.();
          }, children: e.action })
        ] }, e.id);
      }) }) }),
      onClose && /* @__PURE__ */ jsx("footer", { className: `ui-tpc__foot`, children: /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-tpc__btn`, onClick: onClose, children: closeLabel }) })
    ] })
  ] });
}
var AComponent = ({
  children
}) => /* @__PURE__ */ jsx("kbd", { className: `ui-tpc__kbd`, children });
var OComponent = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, width: `16`, height: `16`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `6.5`, fill: `currentColor` }),
  /* @__PURE__ */ jsx("path", { d: `m5.6 8.1 1.7 1.7 3.2-3.4`, fill: `none`, stroke: `#fff`, strokeWidth: `1.3`, strokeLinecap: `round`, strokeLinejoin: `round` })
] });
var s = `
/* Colors and motion as variables \u2013 override them on .ui-tpc */
.ui-tpc {
  --ui-tpc-card: #ffffff;
  --ui-tpc-strong: #000000;
  --ui-tpc-ink: rgba(0, 0, 0, 0.88);
  --ui-tpc-text: rgba(0, 0, 0, 0.61);
  --ui-tpc-muted: rgba(0, 0, 0, 0.45);
  --ui-tpc-line: rgba(0, 0, 0, 0.06);
  --ui-tpc-wash: rgba(0, 0, 0, 0.015);
  --ui-tpc-hover: rgba(0, 0, 0, 0.03);
  --ui-tpc-ok: #1a9a52;
  --ui-tpc-primary: rgba(0, 0, 0, 0.88);
  --ui-tpc-primary-hover: rgba(0, 0, 0, 0.8);
  --ui-tpc-on-primary: #fcfcfc;
  /* Strokes are shadows: a 0.5px hairline plus a soft lift */
  --ui-tpc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-tpc-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.07);
  --ui-tpc-focus: rgba(0, 96, 226, 0.35);
  /* Height of the tip list before it scrolls */
  --ui-tpc-max-height: 420px;
  --ui-tpc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 760px;
  /* One white card \u2013 the edge is a shadow, not a border */
  border-radius: 10px;
  background: var(--ui-tpc-card);
  box-shadow: var(--ui-tpc-shadow);
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: var(--ui-tpc-ink);
  text-align: left;
  -webkit-font-smoothing: antialiased;
}
.ui-tpc *, .ui-tpc *::before, .ui-tpc *::after { box-sizing: border-box; }
:where(.ui-tpc) button { margin: 0; padding: 0; border: 0; background: none; font: inherit; color: inherit; cursor: pointer; -webkit-tap-highlight-color: transparent; }
.ui-tpc button:focus-visible { outline: 2px solid var(--ui-tpc-focus); outline-offset: 1px; }
:where(.ui-tpc) svg { display: block; flex: none; }

/* ----- Head ----- */
.ui-tpc__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 0.5px solid var(--ui-tpc-line);
}
.ui-tpc__title {
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  color: var(--ui-tpc-strong);
}
.ui-tpc__count {
  font-size: 12px;
  line-height: 16px;
  font-variant-numeric: tabular-nums;
  color: var(--ui-tpc-muted);
  white-space: nowrap;
}

/* ----- The tip list: the only part that scrolls ----- */
.ui-tpc__body {
  container-type: inline-size;
  max-height: var(--ui-tpc-max-height);
  overflow-y: auto;
  scrollbar-width: thin;
}
.ui-tpc__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  margin: 0;
  padding: 12px;
  list-style: none;
}
@container (max-width: 560px) { .ui-tpc__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@container (max-width: 380px) { .ui-tpc__grid { grid-template-columns: minmax(0, 1fr); } }

/* Each tip is a quiet tile: a hairline drawn as an inset shadow */
.ui-tpc__tip {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  border-radius: 8px;
  box-shadow: inset 0 0 0 0.5px var(--ui-tpc-line);
  animation: ui-tpc-in 480ms var(--ui-tpc-ease) both;
  transition: background-color 260ms ease;
}
.ui-tpc__tip[data-done] { background: var(--ui-tpc-wash); }
.ui-tpc__tip-title {
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-tpc-strong);
}
.ui-tpc__tip-text {
  flex: 1;
  margin: 2px 0 12px;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-tpc-text);
}
.ui-tpc__kbd {
  display: inline-grid;
  place-items: center;
  min-width: 20px;
  height: 18px;
  padding: 0 5px;
  border-radius: 5px;
  background: var(--ui-tpc-card);
  box-shadow: var(--ui-tpc-shadow);
  font-family: inherit;
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
  color: var(--ui-tpc-ink);
  vertical-align: 1px;
}

/* Secondary: white with the card shadow */
.ui-tpc__btn {
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 0 10px;
  border-radius: 6px;
  background: var(--ui-tpc-card);
  box-shadow: var(--ui-tpc-shadow);
  font-size: 13px !important;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-tpc-strong);
  white-space: nowrap;
  transition: box-shadow 140ms ease, background-color 140ms ease, transform 160ms var(--ui-tpc-ease);
}
.ui-tpc__btn:hover { box-shadow: var(--ui-tpc-shadow-hover); }
.ui-tpc__btn:active { transform: scale(0.98); }
/* Primary: the dark chip */
.ui-tpc__btn--primary {
  background: var(--ui-tpc-primary);
  box-shadow: none;
  color: var(--ui-tpc-on-primary);
}
.ui-tpc__btn--primary:hover { background: var(--ui-tpc-primary-hover); box-shadow: none; }

.ui-tpc__done {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-tpc-ok);
  animation: ui-tpc-pop 360ms var(--ui-tpc-ease);
}

/* ----- The last row inside the card ----- */
.ui-tpc__foot {
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  border-top: 0.5px solid var(--ui-tpc-line);
}

@keyframes ui-tpc-in {
  from { opacity: 0; transform: translateY(4px); }
}
@keyframes ui-tpc-pop {
  from { opacity: 0; transform: scale(0.94); }
}

@media (pointer: coarse) {
  .ui-tpc__btn, .ui-tpc__done { height: 34px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-tpc__tip, .ui-tpc__done { animation: none; }
  .ui-tpc__tip, .ui-tpc__btn { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tpc {
  --ui-tpc-card: #1c1c1e;
  --ui-tpc-strong: #ffffff;
  --ui-tpc-ink: rgba(255, 255, 255, 0.9);
  --ui-tpc-text: rgba(255, 255, 255, 0.62);
  --ui-tpc-muted: rgba(255, 255, 255, 0.46);
  --ui-tpc-line: rgba(255, 255, 255, 0.08);
  --ui-tpc-wash: rgba(255, 255, 255, 0.03);
  --ui-tpc-hover: rgba(255, 255, 255, 0.04);
  --ui-tpc-ok: #5fd394;
  --ui-tpc-primary: rgba(255, 255, 255, 0.9);
  --ui-tpc-primary-hover: rgba(255, 255, 255, 0.8);
  --ui-tpc-on-primary: #1c1c1e;
  --ui-tpc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-tpc-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-tpc-focus: rgba(77, 141, 255, 0.5);
  color-scheme: dark;
}
:where(.dark, [data-theme="dark"]) .ui-tpc__btn:not(.ui-tpc__btn--primary) { background: #232326; }
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
