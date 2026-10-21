import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo-CQRf-Cg5.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [{ name: `Jonas Weber`, email: `jonas@northwind.io` }, { name: `Lena Hart`, email: `lena@northwind.io` }, { name: `Finance team`, email: `billing@northwind.io` }];
var a = (e) => e.name.split(` `)[0];
var o = [{ id: `friendly`, label: `Friendly`, body: (e) => `Hi ${a(e)}, a heads-up that your Growth plan renews on October 9 for $8,900 a year. If you'd like to add seats or switch to monthly billing, you can review the quote here:` }, { id: `short`, label: `Short`, body: (e) => `Hi ${a(e)}, your Growth plan renews on October 9 ($8,900/year). Quote for changes:` }, { id: `formal`, label: `Formal`, body: (e) => `Dear ${e.name}, this is a reminder that your Growth subscription is scheduled to renew on October 9 at $8,900 per year. Should you wish to adjust seats or billing, please review the attached quote:` }];
function s({ reference: e = `SUB-1182`, account: t = `Northwind Logistics`, amount: s2 = `$8,900`, status: d2 = `Renews in 5 days`, agent: f = `Renewal agent`, contacts: p = i, attachment: m = `Renewal-quote.pdf`, tones: h = o, link: g = { label: `Review quote`, href: `#` }, onSend: _, onDiscard: v, className: y }) {
  let [b, x] = (0, n3.useState)(p[0]), [S, C] = (0, n3.useState)(m), [w, T] = (0, n3.useState)(h[0].id), [E, D] = (0, n3.useState)(null), [O, k] = (0, n3.useState)(false), [A, j] = (0, n3.useState)(false), [M, N] = (0, n3.useState)(`draft`), [P, F] = (0, n3.useState)(0), I = (0, n3.useRef)(null), L = l(I), R = (0, n3.useRef)(null), z = (0, n3.useRef)(null), B = (0, n3.useRef)([]), V = h.find((e2) => e2.id === w).body(b), H = E ?? V;
  (0, n3.useEffect)(() => () => B.current.forEach((e2) => window.clearTimeout(e2)), []), (0, n3.useEffect)(() => {
    if (!A) return;
    let e2 = (e3) => {
      z.current?.contains(e3.target) || j(false);
    }, t2 = (e3) => e3.key === `Escape` && j(false);
    return document.addEventListener(`pointerdown`, e2), document.addEventListener(`keydown`, t2), () => {
      document.removeEventListener(`pointerdown`, e2), document.removeEventListener(`keydown`, t2);
    };
  }, [A]), (0, n3.useLayoutEffect)(() => {
    let e2 = R.current;
    e2 && (e2.style.height = `auto`, e2.style.height = `${e2.scrollHeight}px`);
  }, [O, H]);
  let U = () => {
    D(H), k(true), requestAnimationFrame(() => {
      let e2 = R.current;
      e2 && (e2.focus(), e2.setSelectionRange(e2.value.length, e2.value.length));
    });
  }, W = (e2) => {
    (e2 !== w || E !== null) && (T(e2), D(null), k(false), F((e3) => e3 + 1));
  }, G = (e2) => {
    x(e2), j(false), E !== null && D(E.replace(RegExp(`\\b${a(b)}\\b|${b.name}`, `g`), (t2) => t2 === b.name ? e2.name : a(e2)));
  }, K = () => {
    M === `draft` && (k(false), N(`sending`), B.current.push(window.setTimeout(() => {
      N(`sent`), _?.({ to: b, body: `${H} ${g.label}: ${g.href}`, attachment: S });
    }, 900)));
  }, q = () => {
    k(false), N(`discarded`), v?.();
  }, J = () => N(`draft`), Y = M === `draft` || M === `sending`, X = M === `sent` ? { text: `Sent`, tone: `ok` } : M === `discarded` ? { text: `Discarded`, tone: `muted` } : { text: `Ready for review`, tone: `ok` };
  return (0, r.jsxs)(`div`, { className: [`ui-ed`, y].filter(Boolean).join(` `), children: [(0, r.jsx)(`style`, { href: `ui-email-draft`, precedence: `default`, children: u }), (0, r.jsxs)(`div`, { className: `ui-ed__record`, children: [(0, r.jsxs)(`div`, { className: `ui-ed__ref`, children: [(0, r.jsx)(`span`, { className: `ui-ed__id`, children: e }), (0, r.jsx)(`span`, { className: `ui-ed__status`, children: d2 }), (0, r.jsx)(`span`, { className: `ui-ed__amount`, children: s2 })] }), (0, r.jsx)(`span`, { className: `ui-ed__account`, children: t })] }), (0, r.jsx)(`div`, { className: `ui-ed__outer`, ref: L, children: (0, r.jsx)(`div`, { ref: I, children: Y ? (0, r.jsxs)(`div`, { className: `ui-ed__card`, "data-sending": M === `sending` ? `` : void 0, children: [(0, r.jsxs)(`div`, { className: `ui-ed__meta`, children: [(0, r.jsxs)(`div`, { className: `ui-ed__to`, ref: z, children: [(0, r.jsx)(`span`, { className: `ui-ed__label`, children: `to` }), (0, r.jsxs)(`button`, { type: `button`, className: `ui-ed__recipient`, "aria-haspopup": `listbox`, "aria-expanded": A, onClick: () => j((e2) => !e2), children: [b.name, ` `, (0, r.jsxs)(`span`, { className: `ui-ed__email`, children: [`(`, b.email, `)`] }), (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `m7 10 5 5 5-5` }) })] }), A && (0, r.jsx)(`ul`, { className: `ui-ed__menu`, role: `listbox`, "aria-label": `Recipient`, children: p.map((e2) => (0, r.jsx)(`li`, { children: (0, r.jsxs)(`button`, { type: `button`, role: `option`, "aria-selected": e2.email === b.email, onClick: () => G(e2), children: [(0, r.jsx)(`span`, { className: `ui-ed__avatar`, "aria-hidden": `true`, children: e2.name.split(` `).map((e3) => e3[0]).join(``).slice(0, 2) }), (0, r.jsxs)(`span`, { className: `ui-ed__menu-text`, children: [e2.name, (0, r.jsx)(`small`, { children: e2.email })] }), e2.email === b.email && (0, r.jsx)(`svg`, { className: `ui-ed__tick`, viewBox: `0 0 24 24`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `m6 12.5 4 4 8-9` }) })] }) }, e2.email)) })] }), S ? (0, r.jsxs)(`span`, { className: `ui-ed__file`, children: [(0, r.jsx)(c, { children: (0, r.jsx)(`path`, { d: `m15.5 7.5-6.4 6.4a1.8 1.8 0 0 0 2.5 2.5l6.7-6.7a3.5 3.5 0 0 0-5-5l-6.9 6.9a5.2 5.2 0 0 0 7.4 7.4l6-6` }) }), S, (0, r.jsx)(`button`, { type: `button`, "aria-label": `Remove ${S}`, onClick: () => C(null), children: (0, r.jsx)(c, { children: (0, r.jsx)(`path`, { d: `M7 7l10 10M17 7 7 17` }) }) })] }) : m && (0, r.jsxs)(`button`, { type: `button`, className: `ui-ed__attach`, onClick: () => C(m), children: [(0, r.jsx)(c, { children: (0, r.jsx)(`path`, { d: `M12 6v12M6 12h12` }) }), `Attach `, m] })] }), (0, r.jsx)(`div`, { className: `ui-ed__body`, children: O ? (0, r.jsx)(`textarea`, { ref: R, className: `ui-ed__edit`, value: E ?? ``, onChange: (e2) => D(e2.target.value), onKeyDown: (e2) => {
    e2.key === `Enter` && (e2.metaKey || e2.ctrlKey) && (e2.preventDefault(), K()), e2.key === `Escape` && k(false);
  }, onBlur: () => k(false), "aria-label": `Email text` }) : (0, r.jsxs)(`p`, { className: `ui-ed__text`, onClick: U, title: `Click to edit`, children: [H, ` `, (0, r.jsx)(`a`, { href: g.href, onClick: (e2) => e2.stopPropagation(), children: g.label })] }, P) }), (0, r.jsxs)(`div`, { className: `ui-ed__actions`, children: [(0, r.jsxs)(`div`, { className: `ui-ed__tones`, role: `group`, "aria-label": `Tone`, children: [h.map((e2) => (0, r.jsx)(`button`, { type: `button`, "aria-pressed": w === e2.id && E === null, onClick: () => W(e2.id), children: e2.label }, e2.id)), (0, r.jsx)(`button`, { type: `button`, className: `ui-ed__edit-btn`, "aria-pressed": O, "aria-label": `Edit text`, onClick: U, children: (0, r.jsx)(c, { children: (0, r.jsx)(`path`, { d: `M14.5 5.5 18.5 9.5M5 19l1-4L15.5 5.5l4 4L10 19l-5 0Z` }) }) })] }), (0, r.jsxs)(`div`, { className: `ui-ed__buttons`, children: [(0, r.jsx)(`button`, { type: `button`, className: `ui-ed__secondary`, onClick: q, disabled: M === `sending`, children: `Discard` }), (0, r.jsx)(`button`, { type: `button`, className: `ui-ed__primary`, onClick: K, disabled: M === `sending`, children: M === `sending` ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`span`, { className: `ui-ed__spinner`, "aria-hidden": `true` }), `Sending`] }) : `Send email` })] })] })] }) : (0, r.jsxs)(`div`, { className: `ui-ed__receipt`, role: `status`, children: [(0, r.jsx)(`span`, { className: `ui-ed__receipt-icon`, "data-tone": M === `sent` ? `ok` : `muted`, "aria-hidden": `true`, children: (0, r.jsx)(c, { children: M === `sent` ? (0, r.jsx)(`path`, { d: `m6 12.5 4 4 8-9` }) : (0, r.jsx)(`path`, { d: `M7 7l10 10M17 7 7 17` }) }) }), (0, r.jsx)(`span`, { className: `ui-ed__receipt-text`, children: M === `sent` ? (0, r.jsxs)(r.Fragment, { children: [`Sent to `, (0, r.jsx)(`b`, { children: b.name }), S ? ` with ${S}` : ``] }) : `Draft discarded` }), (0, r.jsx)(`button`, { type: `button`, className: `ui-ed__undo`, onClick: J, children: `Undo` })] }) }) }), (0, r.jsxs)(`div`, { className: `ui-ed__foot`, children: [(0, r.jsx)(`span`, { className: `ui-ed__agent`, children: f }), (0, r.jsx)(`span`, { className: `ui-ed__badge`, "data-tone": X.tone, children: X.text }, X.text), Y && (0, r.jsx)(`span`, { className: `ui-ed__hint`, children: `\u2318 Enter to send` })] })] });
}
var c = ({ children: e }) => (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: e });
function l(e) {
  let t = (0, n3.useRef)(null);
  return (0, n3.useLayoutEffect)(() => {
    let n4 = t.current, r2 = e.current;
    if (!n4 || !r2) return;
    let i2 = () => {
      n4.style.height = `${r2.offsetHeight}px`;
    };
    i2();
    let a2 = new ResizeObserver(i2);
    a2.observe(r2);
    let o2 = requestAnimationFrame(() => n4.setAttribute(`data-smooth`, ``));
    return () => {
      a2.disconnect(), cancelAnimationFrame(o2);
    };
  }, [e]), t;
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
function d() {
  return (0, r.jsx)(`div`, { className: `email-draft-demo`, children: (0, r.jsx)(s, {}) });
}
export {
  d as default
};
