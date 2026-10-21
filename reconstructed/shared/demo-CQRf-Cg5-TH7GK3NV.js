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

// reconstructed/demo-CQRf-Cg5.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [{
  name: `Jonas Weber`,
  email: `jonas@northwind.io`
}, {
  name: `Lena Hart`,
  email: `lena@northwind.io`
}, {
  name: `Finance team`,
  email: `billing@northwind.io`
}];
var a = (e) => e.name.split(` `)[0];
var o = [{
  id: `friendly`,
  label: `Friendly`,
  body: (e) => `Hi ${a(e)}, a heads-up that your Growth plan renews on October 9 for $8,900 a year. If you'd like to add seats or switch to monthly billing, you can review the quote here:`
}, {
  id: `short`,
  label: `Short`,
  body: (e) => `Hi ${a(e)}, your Growth plan renews on October 9 ($8,900/year). Quote for changes:`
}, {
  id: `formal`,
  label: `Formal`,
  body: (e) => `Dear ${e.name}, this is a reminder that your Growth subscription is scheduled to renew on October 9 at $8,900 per year. Should you wish to adjust seats or billing, please review the attached quote:`
}];
function S1Component({
  reference = `SUB-1182`,
  account = `Northwind Logistics`,
  amount = `$8,900`,
  status = `Renews in 5 days`,
  agent = `Renewal agent`,
  contacts = i,
  attachment = `Renewal-quote.pdf`,
  tones = o,
  link = {
    label: `Review quote`,
    href: `#`
  },
  onSend,
  onDiscard,
  className
}) {
  let [b, setB] = n3.useState(contacts[0]);
  let [S, setS] = n3.useState(attachment);
  let [w, setW] = n3.useState(tones[0].id);
  let [E, setE] = n3.useState(null);
  let [O, setO] = n3.useState(false);
  let [A, setA] = n3.useState(false);
  let [M, setM] = n3.useState(`draft`);
  let [key, setKey] = n3.useState(0);
  let IRef = n3.useRef(null);
  let ref = useL(IRef);
  let RRef = n3.useRef(null);
  let zRef = n3.useRef(null);
  let BRef = n3.useRef([]);
  let V = tones.find((e) => e.id === w).body(b);
  let H = E ?? V;
  n3.useEffect(() => () => BRef.current.forEach((e) => window.clearTimeout(e)), []);
  n3.useEffect(() => {
    if (!A) {
      return;
    }
    let e = (e2) => {
      if (!zRef.current?.contains(e2.target)) {
        setA(false);
      }
    };
    let t = (e2) => e2.key === `Escape` && setA(false);
    document.addEventListener(`pointerdown`, e);
    document.addEventListener(`keydown`, t);
    return () => {
      document.removeEventListener(`pointerdown`, e);
      document.removeEventListener(`keydown`, t);
    };
  }, [A]);
  n3.useLayoutEffect(() => {
    let RRef_current = RRef.current;
    if (RRef_current) {
      RRef_current.style.height = `auto`;
      RRef_current.style.height = `${RRef_current.scrollHeight}px`;
    }
  }, [O, H]);
  let U = () => {
    setE(H);
    setO(true);
    requestAnimationFrame(() => {
      let RRef_current = RRef.current;
      if (RRef_current) {
        RRef_current.focus();
        RRef_current.setSelectionRange(RRef_current.value.length, RRef_current.value.length);
      }
    });
  };
  let W = (e) => {
    if (e !== w || E !== null) {
      setW(e);
      setE(null);
      setO(false);
      setKey((e2) => e2 + 1);
    }
  };
  let G = (e) => {
    setB(e);
    setA(false);
    if (E !== null) {
      setE(E.replace(RegExp(`\\b${a(b)}\\b|${b.name}`, `g`), (t) => {
        if (t === b.name) {
          return e.name;
        }
        return a(e);
      }));
    }
  };
  let K = () => {
    if (M === `draft`) {
      setO(false);
      setM(`sending`);
      BRef.current.push(window.setTimeout(() => {
        setM(`sent`);
        onSend?.({
          to: b,
          body: `${H} ${link.label}: ${link.href}`,
          attachment: S
        });
      }, 900));
    }
  };
  let q = () => {
    setO(false);
    setM(`discarded`);
    onDiscard?.();
  };
  let J = () => setM(`draft`);
  let Y = M === `draft` || M === `sending`;
  let X = M === `sent` ? {
    text: `Sent`,
    tone: `ok`
  } : M === `discarded` ? {
    text: `Discarded`,
    tone: `muted`
  } : {
    text: `Ready for review`,
    tone: `ok`
  };
  return /* @__PURE__ */ jsxs("div", { className: [`ui-ed`, className].filter(Boolean).join(` `), children: [
    /* @__PURE__ */ jsx("style", { href: `ui-email-draft`, precedence: `default`, children: u }),
    /* @__PURE__ */ jsxs("div", { className: `ui-ed__record`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-ed__ref`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-ed__id`, children: reference }),
        /* @__PURE__ */ jsx("span", { className: `ui-ed__status`, children: status }),
        /* @__PURE__ */ jsx("span", { className: `ui-ed__amount`, children: amount })
      ] }),
      /* @__PURE__ */ jsx("span", { className: `ui-ed__account`, children: account })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `ui-ed__outer`, ref, children: /* @__PURE__ */ jsx("div", { ref: IRef, children: Y ? /* @__PURE__ */ jsxs("div", { className: `ui-ed__card`, "data-sending": M === `sending` ? `` : void 0, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-ed__meta`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-ed__to`, ref: zRef, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-ed__label`, children: `to` }),
          /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-ed__recipient`, "aria-haspopup": `listbox`, "aria-expanded": A, onClick: () => setA((e) => !e), children: [
            b.name,
            ` `,
            /* @__PURE__ */ jsxs("span", { className: `ui-ed__email`, children: [
              `(`,
              b.email,
              `)`
            ] }),
            /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m7 10 5 5 5-5` }) })
          ] }),
          A && /* @__PURE__ */ jsx("ul", { className: `ui-ed__menu`, role: `listbox`, "aria-label": `Recipient`, children: contacts.map((e) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", { type: `button`, role: `option`, "aria-selected": e.email === b.email, onClick: () => G(e), children: [
            /* @__PURE__ */ jsx("span", { className: `ui-ed__avatar`, "aria-hidden": `true`, children: e.name.split(` `).map((e2) => e2[0]).join(``).slice(0, 2) }),
            /* @__PURE__ */ jsxs("span", { className: `ui-ed__menu-text`, children: [
              e.name,
              /* @__PURE__ */ jsx("small", { children: e.email })
            ] }),
            e.email === b.email && /* @__PURE__ */ jsx("svg", { className: `ui-ed__tick`, viewBox: `0 0 24 24`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `m6 12.5 4 4 8-9` }) })
          ] }) }, e.email)) })
        ] }),
        S ? /* @__PURE__ */ jsxs("span", { className: `ui-ed__file`, children: [
          /* @__PURE__ */ jsx(C1Component, { children: /* @__PURE__ */ jsx("path", { d: `m15.5 7.5-6.4 6.4a1.8 1.8 0 0 0 2.5 2.5l6.7-6.7a3.5 3.5 0 0 0-5-5l-6.9 6.9a5.2 5.2 0 0 0 7.4 7.4l6-6` }) }),
          S,
          /* @__PURE__ */ jsx("button", { type: `button`, "aria-label": `Remove ${S}`, onClick: () => setS(null), children: /* @__PURE__ */ jsx(C1Component, { children: /* @__PURE__ */ jsx("path", { d: `M7 7l10 10M17 7 7 17` }) }) })
        ] }) : attachment && /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-ed__attach`, onClick: () => setS(attachment), children: [
          /* @__PURE__ */ jsx(C1Component, { children: /* @__PURE__ */ jsx("path", { d: `M12 6v12M6 12h12` }) }),
          `Attach `,
          attachment
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-ed__body`, children: O ? /* @__PURE__ */ jsx("textarea", { ref: RRef, className: `ui-ed__edit`, value: E ?? ``, onChange: (e) => setE(e.target.value), onKeyDown: (e) => {
        if (e.key === `Enter` && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          K();
        }
        if (e.key === `Escape`) {
          setO(false);
        }
      }, onBlur: () => setO(false), "aria-label": `Email text` }) : /* @__PURE__ */ jsxs("p", { className: `ui-ed__text`, onClick: U, title: `Click to edit`, children: [
        H,
        ` `,
        /* @__PURE__ */ jsx("a", { href: link.href, onClick: (e) => e.stopPropagation(), children: link.label })
      ] }, key) }),
      /* @__PURE__ */ jsxs("div", { className: `ui-ed__actions`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-ed__tones`, role: `group`, "aria-label": `Tone`, children: [
          tones.map((e) => /* @__PURE__ */ jsx("button", { type: `button`, "aria-pressed": w === e.id && E === null, onClick: () => W(e.id), children: e.label }, e.id)),
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-ed__edit-btn`, "aria-pressed": O, "aria-label": `Edit text`, onClick: U, children: /* @__PURE__ */ jsx(C1Component, { children: /* @__PURE__ */ jsx("path", { d: `M14.5 5.5 18.5 9.5M5 19l1-4L15.5 5.5l4 4L10 19l-5 0Z` }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `ui-ed__buttons`, children: [
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-ed__secondary`, onClick: q, disabled: M === `sending`, children: `Discard` }),
          /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-ed__primary`, onClick: K, disabled: M === `sending`, children: M === `sending` ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: `ui-ed__spinner`, "aria-hidden": `true` }),
            `Sending`
          ] }) : `Send email` })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxs("div", { className: `ui-ed__receipt`, role: `status`, children: [
      /* @__PURE__ */ jsx("span", { className: `ui-ed__receipt-icon`, "data-tone": M === `sent` ? `ok` : `muted`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx(C1Component, { children: M === `sent` ? /* @__PURE__ */ jsx("path", { d: `m6 12.5 4 4 8-9` }) : /* @__PURE__ */ jsx("path", { d: `M7 7l10 10M17 7 7 17` }) }) }),
      /* @__PURE__ */ jsx("span", { className: `ui-ed__receipt-text`, children: M === `sent` ? /* @__PURE__ */ jsxs(Fragment, { children: [
        `Sent to `,
        /* @__PURE__ */ jsx("b", { children: b.name }),
        S ? ` with ${S}` : ``
      ] }) : `Draft discarded` }),
      /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-ed__undo`, onClick: J, children: `Undo` })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: `ui-ed__foot`, children: [
      /* @__PURE__ */ jsx("span", { className: `ui-ed__agent`, children: agent }),
      /* @__PURE__ */ jsx("span", { className: `ui-ed__badge`, "data-tone": X.tone, children: X.text }, X.text),
      Y && /* @__PURE__ */ jsx("span", { className: `ui-ed__hint`, children: `\u2318 Enter to send` })
    ] })
  ] });
}
var C1Component = ({
  children
}) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, "aria-hidden": `true`, children });
function useL(IRef) {
  let tRef = n3.useRef(null);
  n3.useLayoutEffect(() => {
    let tRef_current = tRef.current;
    let e_current = IRef.current;
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
  }, [IRef]);
  return tRef;
}
var u = `
.ui-ed {
  --ui-ed-tray: #f0f0f0;
  --ui-ed-card: #ffffff;
  --ui-ed-card-line: #e5e5e5;
  --ui-ed-line: #ececec;
  --ui-ed-ink: #171717;
  --ui-ed-text: #404040;
  --ui-ed-muted: #8f8f8f;
  --ui-ed-chip: #f5f5f5;
  --ui-ed-chip-line: #ebebeb;
  --ui-ed-hover: #f5f5f5;
  --ui-ed-warn: #c2570c;
  --ui-ed-warn-bg: #fdeedd;
  --ui-ed-ok: #2f7d32;
  --ui-ed-ok-bg: #e8f5e6;
  --ui-ed-btn-top: #323137;
  --ui-ed-btn-bottom: #201e25;
  --ui-ed-btn-ring: #0d0d0d;
  --ui-ed-btn-text: #ffffff;
  --ui-ed-focus: #2f6bff;
  --ui-ed-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  --ui-ed-ease: cubic-bezier(0.22, 1, 0.36, 1);
  width: 100%;
  max-width: 520px;
  padding: 6px;
  border-radius: 20px;
  background: var(--ui-ed-tray);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-ed-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-ed *, .ui-ed *::before, .ui-ed *::after { box-sizing: border-box; }
.ui-ed button { font: inherit; color: inherit; margin: 0; cursor: pointer; -webkit-tap-highlight-color: transparent; }
.ui-ed button:focus-visible, .ui-ed a:focus-visible { outline: 2px solid var(--ui-ed-focus); outline-offset: 2px; }
.ui-ed svg { width: 15px; height: 15px; flex: none; fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }

/* ---------- Record on the tray ---------- */

.ui-ed__record { display: grid; gap: 2px; padding: 8px 10px 10px; }
.ui-ed__ref { display: flex; align-items: center; gap: 8px; min-width: 0; }
.ui-ed__id { font-size: 15px; font-weight: 500; letter-spacing: -0.01em; }
.ui-ed__status {
  padding: 2px 8px;
  border-radius: 8px;
  background: var(--ui-ed-warn-bg);
  font-size: 12.5px;
  font-weight: 500;
  color: var(--ui-ed-warn);
  white-space: nowrap;
}
.ui-ed__amount { margin-left: auto; font-size: 15px; font-weight: 500; font-variant-numeric: tabular-nums; }
.ui-ed__account { font-size: 13px; color: var(--ui-ed-muted); }

.ui-ed__outer { position: relative; }
.ui-ed__outer[data-smooth] { transition: height 360ms var(--ui-ed-ease); }

/* ---------- Email card ---------- */

.ui-ed__card {
  border: 1px solid var(--ui-ed-card-line);
  border-radius: 16px;
  background: var(--ui-ed-card);
  box-shadow: var(--ui-ed-shadow);
  animation: ui-ed-in 320ms var(--ui-ed-ease) both;
  transition: opacity 220ms ease;
}
.ui-ed__card[data-sending] { opacity: 0.7; pointer-events: none; }

.ui-ed__meta {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 0 14px;
  padding: 12px 0 11px;
  border-bottom: 1px solid var(--ui-ed-line);
}
.ui-ed__to { position: relative; display: flex; align-items: center; gap: 6px; min-width: 0; }
.ui-ed__label { font-size: 13px; color: var(--ui-ed-muted); }
.ui-ed__recipient {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  height: 26px;
  padding: 0 6px 0 8px;
  border: 0;
  border-radius: 8px;
  background: var(--ui-ed-chip);
  box-shadow: inset 0 0 0 1px var(--ui-ed-chip-line);
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  transition: background-color 160ms ease;
}
.ui-ed__recipient:hover { background: color-mix(in srgb, var(--ui-ed-chip) 80%, var(--ui-ed-ink) 6%); }
.ui-ed__email { overflow: hidden; text-overflow: ellipsis; color: var(--ui-ed-muted); }
.ui-ed__recipient svg { width: 14px; height: 14px; color: var(--ui-ed-muted); transition: transform 220ms var(--ui-ed-ease); }
.ui-ed__recipient[aria-expanded="true"] svg { transform: rotate(180deg); }

.ui-ed__menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 18px;
  z-index: 5;
  display: grid;
  gap: 2px;
  min-width: 250px;
  margin: 0;
  padding: 5px;
  list-style: none;
  border-radius: 12px;
  background: var(--ui-ed-card);
  box-shadow: 0 0 0 1px var(--ui-ed-card-line), 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ui-ed-menu 200ms var(--ui-ed-ease) both;
  transform-origin: top left;
}
.ui-ed__menu button {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 7px 8px;
  border: 0;
  border-radius: 8px;
  background: none;
  text-align: left;
  font-size: 13px;
}
.ui-ed__menu button:hover { background: var(--ui-ed-hover); }
.ui-ed__avatar {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  flex: none;
  border-radius: 50%;
  background: var(--ui-ed-chip);
  box-shadow: inset 0 0 0 1px var(--ui-ed-chip-line);
  font-size: 10.5px;
  font-weight: 600;
  color: var(--ui-ed-text);
}
.ui-ed__menu-text { display: grid; flex: 1; min-width: 0; }
.ui-ed__menu-text small { font-size: 12px; color: var(--ui-ed-muted); overflow: hidden; text-overflow: ellipsis; }
.ui-ed__tick { color: var(--ui-ed-ink); }

.ui-ed__file {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  color: var(--ui-ed-muted);
  white-space: nowrap;
}
.ui-ed__file button,
.ui-ed__attach {
  display: grid;
  place-items: center;
  border: 0;
  background: none;
  color: var(--ui-ed-muted) !important;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-ed__file button { width: 20px; height: 20px; padding: 0; border-radius: 6px; }
.ui-ed__file button svg { width: 13px; height: 13px; }
.ui-ed__file button:hover { background: var(--ui-ed-hover); color: var(--ui-ed-ink) !important; }
.ui-ed__attach { display: inline-flex; gap: 4px; padding: 3px 6px; border-radius: 8px; font-size: 13px; white-space: nowrap; }
.ui-ed__attach:hover { background: var(--ui-ed-hover); color: var(--ui-ed-ink) !important; }

/* Body */
.ui-ed__body { padding: 12px 14px 4px; }
.ui-ed__text {
  margin: -4px -6px;
  padding: 4px 6px;
  border-radius: 8px;
  font-size: 15px;
  line-height: 1.6;
  color: var(--ui-ed-text);
  cursor: text;
  transition: background-color 160ms ease;
  animation: ui-ed-fade 280ms ease both;
}
.ui-ed__text:hover { background: var(--ui-ed-hover); }
.ui-ed__text a {
  color: var(--ui-ed-text);
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, var(--ui-ed-text) 35%, transparent);
  text-decoration-thickness: 1.5px;
  text-underline-offset: 4px;
}
.ui-ed__text a:hover { text-decoration-color: currentColor; }
.ui-ed__edit {
  display: block;
  width: calc(100% + 12px);
  margin: -4px -6px;
  padding: 4px 6px;
  border: 0;
  border-radius: 8px;
  background: var(--ui-ed-hover);
  box-shadow: inset 0 0 0 1px var(--ui-ed-chip-line);
  outline: none;
  resize: none;
  overflow: hidden;
  font: inherit;
  font-size: 15px;
  line-height: 1.6;
  color: var(--ui-ed-ink);
}

/* Actions */
.ui-ed__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px 10px 10px 14px;
}
.ui-ed__tones { display: flex; align-items: center; gap: 2px; }
.ui-ed__tones button {
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 0 9px;
  border: 0;
  border-radius: 8px;
  background: none;
  font-size: 12.5px;
  color: var(--ui-ed-muted) !important;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-ed__tones button:hover { color: var(--ui-ed-ink) !important; }
.ui-ed__tones button[aria-pressed="true"] { background: var(--ui-ed-chip); color: var(--ui-ed-ink) !important; box-shadow: inset 0 0 0 1px var(--ui-ed-chip-line); }
.ui-ed__tones .ui-ed__edit-btn { width: 28px; padding: 0; justify-content: center; margin-left: 4px; }
.ui-ed__buttons { display: flex; gap: 8px; margin-left: auto; }
.ui-ed__secondary,
.ui-ed__primary {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 36px;
  padding: 0 14px;
  border: 0;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 160ms ease, transform 160ms ease, filter 160ms ease;
}
.ui-ed__secondary { background: var(--ui-ed-card); box-shadow: inset 0 0 0 1px var(--ui-ed-card-line); color: var(--ui-ed-text) !important; }
.ui-ed__secondary:hover { background: var(--ui-ed-hover); }
.ui-ed__primary {
  background: linear-gradient(180deg, var(--ui-ed-btn-top), var(--ui-ed-btn-bottom));
  box-shadow: 0 0 0 1px var(--ui-ed-btn-ring), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  color: var(--ui-ed-btn-text) !important;
}
.ui-ed__primary:hover { filter: brightness(1.12); }
.ui-ed__secondary:active, .ui-ed__primary:active { transform: scale(0.98); }
.ui-ed__spinner {
  width: 13px;
  height: 13px;
  border: 1.8px solid color-mix(in srgb, var(--ui-ed-btn-text) 30%, transparent);
  border-top-color: var(--ui-ed-btn-text);
  border-radius: 50%;
  animation: ui-ed-spin 700ms linear infinite;
}

/* ---------- Receipt after send / discard ---------- */

.ui-ed__receipt {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 10px 12px 12px;
  border: 1px solid var(--ui-ed-card-line);
  border-radius: 16px;
  background: var(--ui-ed-card);
  box-shadow: var(--ui-ed-shadow);
  font-size: 14px;
  color: var(--ui-ed-text);
  animation: ui-ed-in 320ms var(--ui-ed-ease) both;
}
.ui-ed__receipt b { font-weight: 500; color: var(--ui-ed-ink); }
.ui-ed__receipt-icon {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  flex: none;
  border-radius: 50%;
  background: var(--ui-ed-chip);
  color: var(--ui-ed-muted);
}
.ui-ed__receipt-icon[data-tone="ok"] { background: var(--ui-ed-ok-bg); color: var(--ui-ed-ok); }
.ui-ed__receipt-icon svg { width: 14px; height: 14px; stroke-width: 2.2; }
.ui-ed__receipt-text { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ui-ed__undo {
  padding: 4px 8px;
  border: 0;
  border-radius: 8px;
  background: none;
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-ed-ink) !important;
  transition: background-color 160ms ease;
}
.ui-ed__undo:hover { background: var(--ui-ed-hover); }

/* ---------- Footer on the tray ---------- */

.ui-ed__foot { display: flex; align-items: center; gap: 8px; padding: 10px 10px 6px; }
.ui-ed__agent { font-size: 14px; color: var(--ui-ed-ink); }
.ui-ed__badge {
  padding: 2px 8px;
  border-radius: 8px;
  font-size: 12.5px;
  font-weight: 500;
  animation: ui-ed-fade 260ms ease both;
}
.ui-ed__badge[data-tone="ok"] { background: var(--ui-ed-ok-bg); color: var(--ui-ed-ok); }
.ui-ed__badge[data-tone="muted"] { background: var(--ui-ed-chip); color: var(--ui-ed-muted); }
.ui-ed__hint { margin-left: auto; font-size: 12px; color: var(--ui-ed-muted); }

@keyframes ui-ed-in { from { opacity: 0; transform: translateY(4px) scale(0.99); } }
@keyframes ui-ed-fade { from { opacity: 0; } }
@keyframes ui-ed-menu { from { opacity: 0; transform: scale(0.96) translateY(-4px); } }
@keyframes ui-ed-spin { to { transform: rotate(360deg); } }

@media (max-width: 480px) {
  .ui-ed__email, .ui-ed__hint { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-ed__outer[data-smooth] { transition: none; }
  .ui-ed__card, .ui-ed__receipt, .ui-ed__text, .ui-ed__badge, .ui-ed__menu { animation: none; }
}


/* Text fields: no focus box while typing \u2013 also against global :focus-visible rules of the host page */
.ui-ed input:not([type="checkbox"]):not([type="radio"]):focus-visible,
.ui-ed textarea:focus-visible,
.ui-ed [contenteditable]:focus-visible { outline: none; }
/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ed {
  --ui-ed-tray: #161618;
  --ui-ed-card: #232326;
  --ui-ed-card-line: rgba(255, 255, 255, 0.08);
  --ui-ed-line: rgba(255, 255, 255, 0.07);
  --ui-ed-ink: #ededed;
  --ui-ed-text: #c4c4c4;
  --ui-ed-muted: #8f8f8f;
  --ui-ed-chip: #2a2a2d;
  --ui-ed-chip-line: rgba(255, 255, 255, 0.08);
  --ui-ed-hover: rgba(255, 255, 255, 0.05);
  --ui-ed-warn: #fb9a4b;
  --ui-ed-warn-bg: rgba(251, 154, 75, 0.14);
  --ui-ed-ok: #6fd27a;
  --ui-ed-ok-bg: rgba(111, 210, 122, 0.14);
  --ui-ed-btn-top: #f4f4f5;
  --ui-ed-btn-bottom: #e4e4e7;
  --ui-ed-btn-ring: rgba(0, 0, 0, 0.6);
  --ui-ed-btn-text: #121213;
  --ui-ed-focus: #6b95ff;
  --ui-ed-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}
`;
function DComponent() {
  return /* @__PURE__ */ jsx("div", { className: `email-draft-demo`, children: /* @__PURE__ */ jsx(S1Component, {}) });
}
export {
  DComponent as default
};
