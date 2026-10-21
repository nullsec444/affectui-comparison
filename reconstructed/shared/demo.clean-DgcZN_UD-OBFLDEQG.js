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

// reconstructed/demo.clean-DgcZN_UD.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function i(e, t) {
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
function AComponent({
  title = `Comment`,
  messages: messages2,
  currentUser,
  assistant,
  onReply,
  onClose,
  className
}) {
  let [m2, setM] = n3.useState(messages2);
  let [g] = n3.useState(() => new Set(messages2.filter((e) => e.author.assistant).map((e) => e.id)));
  let [_, set_] = n3.useState(/* @__PURE__ */ new Set());
  let [y, setY] = n3.useState(``);
  let [x, setX] = n3.useState(false);
  let [C, setC] = n3.useState(() => Date.now());
  let TRef = n3.useRef(null);
  let ref = useL(TRef);
  n3.useEffect(() => {
    let e = window.setInterval(() => setC(Date.now()), 3e4);
    return () => window.clearInterval(e);
  }, []);
  n3.useEffect(() => {
    TRef.current?.scrollTo({
      top: TRef.current.scrollHeight,
      behavior: `smooth`
    });
  }, [m2.length, x]);
  let D = async () => {
    let text = y.trim();
    if (!text || x) {
      return;
    }
    setY(``);
    setC(Date.now());
    O(true);
    setM((t2) => [...t2, {
      id: `m-${Date.now()}`,
      author: currentUser,
      createdAt: Date.now(),
      text
    }]);
    let t = onReply?.(text);
    if (t) {
      setX(true);
      try {
        let e = await t;
        if (e) {
          setM((t2) => [...t2, {
            ...e,
            createdAt: Date.now()
          }]);
        }
      } finally {
        setX(false);
        setC(Date.now());
      }
    }
  };
  let O = (e) => {
    let TRef_current = TRef.current;
    if (TRef_current) {
      TRef_current.style.maxHeight = e ? `${TRef_current.offsetHeight}px` : ``;
    }
  };
  let k = (e) => {
    O(false);
    set_((t) => {
      let n4 = new Set(t);
      if (n4.has(e)) {
        n4.delete(e);
      } else {
        n4.add(e);
      }
      return n4;
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { href: `ui-comment-thread-clean`, precedence: `default`, children: u }),
    /* @__PURE__ */ jsxs("section", { className: [`ui-ctc`, className].filter(Boolean).join(` `), "aria-label": title, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-ctc__head`, children: [
        /* @__PURE__ */ jsx("h3", { className: `ui-ctc__title`, children: title }),
        /* @__PURE__ */ jsxs("span", { className: `ui-ctc__count`, children: [
          m2.length,
          ` `,
          m2.length === 1 ? `message` : `messages`
        ] }),
        onClose && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-ctc__icon-btn`, "aria-label": `Close comment`, onClick: onClose, children: /* @__PURE__ */ jsx(C1Component, { d: `m4.5 4.5 7 7M11.5 4.5l-7 7` }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-ctc__morph`, ref, children: /* @__PURE__ */ jsxs("div", { className: `ui-ctc__scroll`, ref: TRef, "aria-live": `polite`, children: [
        m2.map((e) => {
          let t = _.has(e.id);
          let n4 = /^\/edit\b/i.test(e.text.trim());
          return /* @__PURE__ */ jsxs("article", { className: `ui-ctc__msg`, "data-delayed": g.has(e.id) || void 0, children: [
            /* @__PURE__ */ jsxs("div", { className: `ui-ctc__meta`, children: [
              /* @__PURE__ */ jsx(O1Component, { author: e.author }),
              /* @__PURE__ */ jsx("span", { className: `ui-ctc__name`, children: e.author.name }),
              /* @__PURE__ */ jsx("time", { className: `ui-ctc__time`, dateTime: new Date(e.createdAt).toISOString(), children: i(+e.createdAt, C) })
            ] }),
            e.text && /* @__PURE__ */ jsx("p", { className: `ui-ctc__text`, children: n4 ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { className: `ui-ctc__command`, children: `/edit` }),
              ` `,
              e.text.trim().replace(/^\/edit\s*/i, ``)
            ] }) : e.text }),
            e.status && /* @__PURE__ */ jsxs("div", { className: `ui-ctc__status`, children: [
              /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-ctc__status-btn`, "aria-expanded": t, disabled: !e.details?.length, onClick: () => k(e.id), children: [
                /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, className: `ui-ctc__check`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Zm8.9-1.2a.5.5 0 0 0-.8-.6L7.44 9.23 6.35 8.15a.5.5 0 1 0-.7.7l1.5 1.5a.5.5 0 0 0 .76-.06l2.5-3.5Z` }) }),
                /* @__PURE__ */ jsx("span", { className: `ui-ctc__status-text`, children: e.status }),
                !!e.details?.length && /* @__PURE__ */ jsx("span", { className: `ui-ctc__chevron`, children: /* @__PURE__ */ jsx(C1Component, { d: `m5 6.5 3 3 3-3` }) })
              ] }),
              !!e.details?.length && /* @__PURE__ */ jsx("div", { className: `ui-ctc__details`, "data-open": t || void 0, inert: !t, children: /* @__PURE__ */ jsx("ul", { children: e.details.map((e2, t2) => /* @__PURE__ */ jsx("li", { style: {
                "--i": t2
              }, children: e2 }, e2)) }) })
            ] })
          ] }, e.id);
        }),
        x && assistant && /* @__PURE__ */ jsxs("article", { className: `ui-ctc__msg`, "aria-label": `${assistant.name} is thinking`, children: [
          /* @__PURE__ */ jsxs("div", { className: `ui-ctc__meta`, children: [
            /* @__PURE__ */ jsx(O1Component, { author: assistant }),
            /* @__PURE__ */ jsx("span", { className: `ui-ctc__name`, children: assistant.name })
          ] }),
          /* @__PURE__ */ jsx("p", { className: `ui-ctc__text`, children: /* @__PURE__ */ jsx("span", { className: `ui-ctc__thinking`, "data-text": `Thinking\u2026`, children: `Thinking\u2026` }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("form", { className: `ui-ctc__composer`, onSubmit: (e) => {
        e.preventDefault();
        D();
      }, children: [
        /* @__PURE__ */ jsx("input", { className: `ui-ctc__input`, value: y, onChange: (e) => setY(e.target.value), placeholder: assistant ? `Reply, or ask @${assistant.name}\u2026` : `Add comment\u2026`, "aria-label": `Reply` }),
        /* @__PURE__ */ jsx("button", { type: `submit`, className: `ui-ctc__send`, "aria-label": `Send reply`, disabled: !y.trim() || x, children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M8 12.5v-9M4.25 7.25 8 3.5l3.75 3.75` }) }) })
      ] })
    ] })
  ] });
}
function O1Component({
  author
}) {
  if (author.avatar && typeof author.avatar != `string`) {
    return /* @__PURE__ */ jsx("span", { className: `ui-ctc__avatar`, children: author.avatar });
  }
  if (typeof author.avatar == `string`) {
    return /* @__PURE__ */ jsx("img", { className: `ui-ctc__avatar`, src: author.avatar, alt: ``, width: 20, height: 20, loading: `lazy` });
  }
  return /* @__PURE__ */ jsx("span", { className: `ui-ctc__avatar ui-ctc__avatar--initials`, "aria-hidden": `true`, children: author.name.split(` `).map((e) => e[0]).slice(0, 2).join(``) });
}
function S1Component() {
  let e = n3.useId();
  return /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, width: `24`, height: `24`, "aria-hidden": `true`, children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: `${e}-fill`, x1: `3`, y1: `3`, x2: `21`, y2: `21`, gradientUnits: `userSpaceOnUse`, children: [
      /* @__PURE__ */ jsx("stop", { offset: `0`, stopColor: `#5b9dff` }),
      /* @__PURE__ */ jsx("stop", { offset: `0.5`, stopColor: `#2f6bff` }),
      /* @__PURE__ */ jsx("stop", { offset: `1`, stopColor: `#8b5cf6` })
    ] }) }),
    /* @__PURE__ */ jsx("circle", { cx: `12`, cy: `12`, r: `12`, fill: `url(#${e}-fill)` })
  ] });
}
var C1Component = ({
  d: d2
}) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, className: `ui-ctc__glyph`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: d2 }) });
function useL(TRef) {
  let tRef = n3.useRef(null);
  n3.useLayoutEffect(() => {
    let tRef_current = tRef.current;
    let e_current = TRef.current;
    if (!tRef_current || !e_current) {
      return;
    }
    let i2 = () => {
      tRef_current.style.height = `${e_current.offsetHeight}px`;
    };
    i2();
    let a = new ResizeObserver(i2);
    a.observe(e_current);
    let o = requestAnimationFrame(() => tRef_current.setAttribute(`data-smooth`, ``));
    return () => {
      a.disconnect();
      cancelAnimationFrame(o);
    };
  }, [TRef]);
  return tRef;
}
var u = `
/* Colors and motion as variables \u2013 override them on .ui-ctc */
.ui-ctc {
  --ui-ctc-card: #ffffff;
  --ui-ctc-strong: #000000;
  --ui-ctc-ink: rgba(0, 0, 0, 0.88);
  --ui-ctc-text: rgba(0, 0, 0, 0.61);
  --ui-ctc-muted: rgba(0, 0, 0, 0.45);
  --ui-ctc-faint: rgba(0, 0, 0, 0.27);
  --ui-ctc-icon: rgba(0, 0, 0, 0.447);
  --ui-ctc-line: rgba(0, 0, 0, 0.06);
  --ui-ctc-tree: rgba(0, 0, 0, 0.1);
  --ui-ctc-fill: rgba(0, 0, 0, 0.06);
  --ui-ctc-wash: rgba(0, 0, 0, 0.03);
  --ui-ctc-solid: rgba(0, 0, 0, 0.88);
  --ui-ctc-on-solid: #fcfcfc;
  --ui-ctc-accent: rgba(0, 96, 226, 0.765);
  --ui-ctc-ok: #1a9a52;
  --ui-ctc-shine: rgba(255, 255, 255, 0.82);
  --ui-ctc-avatar-ring: rgba(0, 0, 0, 0.08);
  /* Strokes are shadows: a 0.5px hairline plus a soft lift */
  --ui-ctc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-ctc-focus: rgba(0, 96, 226, 0.35);
  --ui-ctc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  overflow: hidden;
  border-radius: 10px;
  background: var(--ui-ctc-card);
  box-shadow: var(--ui-ctc-shadow);
  font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: var(--ui-ctc-ink);
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}
.ui-ctc *, .ui-ctc *::before, .ui-ctc *::after { box-sizing: border-box; }
:where(.ui-ctc) button {
  appearance: none;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
:where(.ui-ctc) svg { display: block; flex: none; }
.ui-ctc button:focus-visible { outline: 2px solid var(--ui-ctc-focus); outline-offset: 1px; }
.ui-ctc__glyph { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.1; stroke-linecap: round; stroke-linejoin: round; }

/* ---------- Header ---------- */
.ui-ctc__head {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 48px;
  padding: 10px 10px 10px 16px;
  border-bottom: 0.5px solid var(--ui-ctc-line);
}
.ui-ctc__title { margin: 0; font-size: 13px; font-weight: 500; line-height: 20px; color: var(--ui-ctc-strong); }
.ui-ctc__count { margin-right: auto; font-size: 12px; line-height: 16px; color: var(--ui-ctc-muted); font-variant-numeric: tabular-nums; }
/* Close: a ghost icon button */
.ui-ctc__icon-btn {
  display: grid;
  place-items: center;
  flex: none;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  color: var(--ui-ctc-icon);
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-ctc__icon-btn:hover { background: var(--ui-ctc-wash); color: var(--ui-ctc-ink); }

/* ---------- The conversation ---------- */
.ui-ctc__scroll {
  display: grid;
  gap: 16px;
  align-content: start;
  min-height: var(--ui-ctc-min-height, 0px);
  max-height: var(--ui-ctc-max-height, 340px);
  padding: 16px 16px 12px;
  overflow-y: auto;
  scrollbar-width: none;
  /* Soft edges at the top and towards the reply row, so nothing ends in a hard cut */
  -webkit-mask-image: linear-gradient(transparent, #000 12px, #000 calc(100% - 10px), transparent);
  mask-image: linear-gradient(transparent, #000 12px, #000 calc(100% - 10px), transparent);
}
.ui-ctc__scroll::-webkit-scrollbar { display: none; }
/* Each message builds up piece by piece: name row, text, status \u2013 the assistant's first reply a beat later */
.ui-ctc__msg { --ui-ctc-d: 0ms; min-width: 0; }
.ui-ctc__msg[data-delayed] { --ui-ctc-d: 700ms; }
.ui-ctc__msg > * { animation: ui-ctc-in 420ms var(--ui-ctc-ease) both; animation-delay: var(--ui-ctc-d); }
.ui-ctc__msg > :nth-child(2) { animation-delay: calc(var(--ui-ctc-d) + 80ms); }
.ui-ctc__msg > :nth-child(3) { animation-delay: calc(var(--ui-ctc-d) + 160ms); }
.ui-ctc__meta { display: flex; align-items: center; gap: 8px; min-width: 0; }
.ui-ctc__avatar {
  display: grid;
  place-items: center;
  flex: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
}
img.ui-ctc__avatar { box-shadow: 0 0 0 0.5px var(--ui-ctc-avatar-ring); }
.ui-ctc__avatar svg { width: 100%; height: 100%; }
.ui-ctc__avatar--initials { background: var(--ui-ctc-fill); font-size: 9px; font-weight: 500; line-height: 1; color: var(--ui-ctc-text); }
.ui-ctc__name { min-width: 0; overflow: hidden; font-size: 13px; font-weight: 500; line-height: 20px; white-space: nowrap; text-overflow: ellipsis; color: var(--ui-ctc-strong); }
.ui-ctc__time { flex: none; margin-left: auto; font-size: 12px; line-height: 16px; white-space: nowrap; color: var(--ui-ctc-faint); font-variant-numeric: tabular-nums; }
/* Text and status line up with the name, not the avatar */
.ui-ctc__text { margin: 4px 0 0 28px; font-size: 13px; line-height: 20px; overflow-wrap: break-word; color: var(--ui-ctc-ink); }
/* "/edit": a small gray tag */
.ui-ctc__command {
  display: inline-block;
  margin-right: 1px;
  padding: 0 5px;
  border-radius: 5px;
  background: var(--ui-ctc-fill);
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: var(--ui-ctc-text);
}

/* Status: a ghost row \u2013 a green check, the line, and a chevron to fold the details open */
.ui-ctc__status { margin: 4px 0 0 22px; }
.ui-ctc__status-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
  height: 28px;
  padding: 0 4px 0 6px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-ctc-ink);
  transition: background-color 160ms ease;
}
.ui-ctc__status-btn:hover:not(:disabled) { background: var(--ui-ctc-wash); }
.ui-ctc__status-btn:disabled { cursor: default; }
.ui-ctc__status-text { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-ctc__check { width: 16px; height: 16px; fill: var(--ui-ctc-ok); }
.ui-ctc__chevron { display: grid; color: var(--ui-ctc-icon); transition: transform 260ms var(--ui-ctc-ease), color 160ms ease; }
.ui-ctc__status-btn:hover .ui-ctc__chevron { color: var(--ui-ctc-ink); }
.ui-ctc__status-btn[aria-expanded="true"] .ui-ctc__chevron { transform: rotate(180deg); }
.ui-ctc__details {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 320ms var(--ui-ctc-ease);
}
.ui-ctc__details[data-open] { grid-template-rows: 1fr; }
.ui-ctc__details ul {
  min-height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0 0 0 28px;
  list-style: none;
}
.ui-ctc__details li {
  position: relative;
  margin-top: 4px;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-ctc-text);
  /* Closing: lines fade out quickly while the box folds */
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 160ms ease, transform 220ms var(--ui-ctc-ease);
}
/* Opening: lines come in one after another */
.ui-ctc__details[data-open] li {
  opacity: 1;
  transform: none;
  transition-duration: 320ms, 420ms;
  transition-delay: calc(60ms + var(--i, 0) * 60ms);
}
/* Thin tree lines: each line gets its own corner \u2013 down on the axis of the check icon, then a rounded turn right */
.ui-ctc__details li:first-child { margin-top: 2px; }
.ui-ctc__details li::before {
  content: "";
  position: absolute;
  left: -14.5px;
  top: -3px;
  width: 9px;
  height: 13.5px;
  border-left: 1px solid var(--ui-ctc-tree);
  border-bottom: 1px solid var(--ui-ctc-tree);
  border-bottom-left-radius: 5px;
}
/* The first branch starts with a small gap under the check icon */
.ui-ctc__details li:first-child::before { top: -6px; height: 16.5px; }

/* "Thinking\u2026": a lighter band sweeps across the gray text */
.ui-ctc__thinking { position: relative; display: inline-block; color: var(--ui-ctc-muted); }
.ui-ctc__thinking::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  position: absolute;
  inset: 0;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(90deg, transparent 38%, var(--ui-ctc-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ui-ctc-sweep 1.4s linear infinite;
  pointer-events: none;
}

/* ---------- Reply row: lies right in the card ---------- */
.ui-ctc__composer {
  flex: none;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 4px 10px 10px 16px;
}
.ui-ctc__input {
  flex: 1;
  min-width: 0;
  height: 28px;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  background: transparent;
  font: inherit;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-ctc-strong);
  caret-color: var(--ui-ctc-accent);
}
.ui-ctc__input::placeholder { color: var(--ui-ctc-faint); opacity: 1; }
/* Send: the dark chip \u2013 a quiet gray tile until there is something to send */
.ui-ctc__send {
  display: grid;
  place-items: center;
  flex: none;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: var(--ui-ctc-solid);
  color: var(--ui-ctc-on-solid);
  transition: background-color 180ms ease, color 180ms ease, transform 160ms var(--ui-ctc-ease);
}
.ui-ctc__send:disabled { background: var(--ui-ctc-fill); color: var(--ui-ctc-faint); cursor: default; }
.ui-ctc__send:not(:disabled):active { transform: scale(0.94); }
.ui-ctc__send svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }

@keyframes ui-ctc-in { from { opacity: 0; transform: translateY(4px); } }
@keyframes ui-ctc-sweep { from { background-position: 100% 0; } to { background-position: 0% 0; } }

/* Height changes glide instead of jumping */
.ui-ctc__morph { flex: none; overflow: hidden; }
.ui-ctc__morph[data-smooth] { transition: height 380ms var(--ui-ctc-ease); }

/* Narrow containers: a little less padding */
@container (max-width: 340px) {
  .ui-ctc__head { padding-left: 12px; }
  .ui-ctc__scroll { padding-left: 12px; padding-right: 12px; }
  .ui-ctc__composer { padding-left: 12px; }
}
/* Touch screens: taller hit targets */
@media (pointer: coarse) {
  .ui-ctc__icon-btn, .ui-ctc__send { width: 34px; height: 34px; }
  .ui-ctc__status-btn { height: 34px; }
  .ui-ctc__input { height: 34px; }
  .ui-ctc__details li:first-child::before { top: -9px; height: 19.5px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-ctc__msg > *, .ui-ctc__thinking::after { animation: none; }
  .ui-ctc__details, .ui-ctc__details li, .ui-ctc__chevron, .ui-ctc__morph[data-smooth] { transition: none; }
}

/* Text fields: no focus box while typing \u2013 also against global :focus-visible rules of the host page */
.ui-ctc input:not([type="checkbox"]):not([type="radio"]):focus-visible,
.ui-ctc textarea:focus-visible,
.ui-ctc [contenteditable]:focus-visible { outline: none; }

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ctc {
  --ui-ctc-card: #1c1c1e;
  --ui-ctc-strong: #ffffff;
  --ui-ctc-ink: rgba(255, 255, 255, 0.9);
  --ui-ctc-text: rgba(255, 255, 255, 0.62);
  --ui-ctc-muted: rgba(255, 255, 255, 0.46);
  --ui-ctc-faint: rgba(255, 255, 255, 0.3);
  --ui-ctc-icon: rgba(255, 255, 255, 0.5);
  --ui-ctc-line: rgba(255, 255, 255, 0.08);
  --ui-ctc-tree: rgba(255, 255, 255, 0.14);
  --ui-ctc-fill: rgba(255, 255, 255, 0.08);
  --ui-ctc-wash: rgba(255, 255, 255, 0.04);
  --ui-ctc-solid: rgba(255, 255, 255, 0.92);
  --ui-ctc-on-solid: #161618;
  --ui-ctc-accent: #4d8dff;
  --ui-ctc-ok: #3ec27a;
  --ui-ctc-shine: #ffffff;
  --ui-ctc-avatar-ring: rgba(255, 255, 255, 0.1);
  --ui-ctc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-ctc-focus: rgba(77, 141, 255, 0.5);
}
`;
var d = {
  name: `Atlas`,
  avatar: /* @__PURE__ */ jsx(S1Component, {}),
  assistant: true
};
var f = (e) => Date.now() - e * 6e4;
var messages = [{
  id: `1`,
  author: {
    name: `Lena Lindqvist`,
    avatar: `../avatars/lena.jpg`
  },
  createdAt: f(3),
  text: `/edit Rename every \u201Ccustomers\u201D to \u201Cmembers\u201D on the pricing page.`
}, {
  id: `2`,
  author: d,
  createdAt: f(1),
  text: ``,
  status: `Edit completed`,
  details: [`Renamed 12 mentions in 3 sections`, `Kept \u201Ccustomer support\u201D as it is`, `Left the legal pages untouched`]
}];
var m = [`Done \u2013 I also updated the meta description.`, `Good catch. I'll leave a note for the copy review.`, `On it. You'll see the change in a minute.`];
var h = 0;
function GComponent() {
  return /* @__PURE__ */ jsx("div", { className: `thread-demo`, children: /* @__PURE__ */ jsx(AComponent, { messages, currentUser: {
    name: `Sofia Marin`,
    avatar: `../avatars/sofia.jpg`
  }, assistant: d, onClose: () => {
  }, onReply: (e) => {
    if (!/@atlas/i.test(e)) {
      return;
    }
    let text = m[h++ % m.length];
    return new Promise((resolve) => setTimeout(() => resolve({
      id: `a-${Date.now()}`,
      author: d,
      createdAt: Date.now(),
      text
    }), 1400));
  } }) });
}
export {
  GComponent as default
};
