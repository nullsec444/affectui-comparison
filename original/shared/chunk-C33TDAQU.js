import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-BhVeTwOS.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e) => {
  let t = e.toLowerCase();
  return t.includes(`remind`) ? `Hi team, just a friendly nudge: the report is due this Friday. If anything is holding you up, let me know today and we'll sort it out together. Thanks!` : t.includes(`shorter`) || t.includes(`short`) ? `Here's a tighter version: \u201CThanks for the quick turnaround \u2013 the new draft reads much better. Let's ship it Friday.\u201D` : t.includes(`tone`) ? `I softened the opening and swapped the direct ask for a question, so it sounds friendly but still clear about the deadline.` : t.includes(`reply`) ? `Hi Sam, thanks for the update! Thursday works for me \u2013 I'll bring the revised numbers so we can decide on the spot.` : t.includes(`email`) || t.includes(`polish`) ? `I fixed two typos, split the long second paragraph and moved your main ask to the first line, so it's the first thing they read.` : `Got it. Here's a first draft \u2013 tell me if it should sound more formal, shorter or more playful, and I'll adjust it.`;
};
function a({ name: e = `Quill`, tagline: t = `Your writing companion.`, greeting: a2 = `What should we write?`, suggestions: s2 = [`Polish my email`, `Make it shorter`, `Fix the tone`, `Draft a reply`], placeholder: c = `Ask anything\u2026`, respond: l = i, speech: u = `auto`, dictation: d = `Write a friendly reminder that the report is due on Friday`, className: f }) {
  let [p, m] = (0, n3.useState)([]), [h, g] = (0, n3.useState)(``), [_, v] = (0, n3.useState)(``), [y, b] = (0, n3.useState)(false), [x, S] = (0, n3.useState)(false), [C, w] = (0, n3.useState)(null), T = (0, n3.useRef)(1), E = (0, n3.useRef)(null), D = (0, n3.useRef)(null), O = (0, n3.useRef)(null), k = (0, n3.useRef)(``), A = (0, n3.useRef)([]), j = (e2, t2) => A.current.push(window.setTimeout(e2, t2));
  (0, n3.useEffect)(() => () => {
    A.current.forEach((e2) => window.clearTimeout(e2)), O.current?.abort();
  }, []), (0, n3.useLayoutEffect)(() => {
    let e2 = D.current;
    e2 && (e2.style.height = `auto`, e2.style.height = `${Math.min(e2.scrollHeight, 103)}px`, (y || document.activeElement !== e2) && (e2.scrollTop = e2.scrollHeight));
  }, [h, _, y]), (0, n3.useEffect)(() => {
    let e2 = E.current;
    e2 && e2.scrollTo({ top: e2.scrollHeight, behavior: `smooth` });
  }, [p, C]);
  let M = p.length > 0;
  (0, n3.useEffect)(() => {
    let e2 = E.current;
    if (!e2) return;
    let t2 = e2.clientHeight, n4 = new ResizeObserver(() => {
      e2.clientHeight < t2 && (e2.scrollTop = e2.scrollHeight), t2 = e2.clientHeight;
    });
    return n4.observe(e2), () => n4.disconnect();
  }, [M]);
  let N = async (e2) => {
    let t2 = e2.trim();
    if (!t2 || x) return;
    g(``), v(``);
    let n4 = { id: T.current++, role: `user`, text: t2 };
    m((e3) => [...e3, n4]), S(true);
    let [r2] = await Promise.all([Promise.resolve(l(t2)), new Promise((e3) => j(() => e3(null), 700))]), i2 = T.current++;
    m((e3) => [...e3, { id: i2, role: `assistant`, text: r2 }]);
    let a3 = r2.split(/\s+/).length;
    if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
      w(null), S(false);
      return;
    }
    for (let e3 = 1; e3 <= a3; e3++) j(() => w({ id: i2, words: e3 }), e3 * 38);
    j(() => {
      w(null), S(false);
    }, a3 * 38 + 60);
  }, P = (e2) => {
    e2.preventDefault(), N(h);
  }, F = (e2) => {
    b(false), v(``), e2.trim() && (g(e2.trim()), j(() => N(e2), 450));
  }, I = () => {
    b(true), g(``);
    let e2 = d.split(/\s+/);
    e2.forEach((t2, n4) => j(() => v(e2.slice(0, n4 + 1).join(` `)), 260 + n4 * 170)), j(() => F(d), 260 + e2.length * 170 + 500);
  }, L = () => {
    if (x) return;
    let e2 = u === `auto` ? window.SpeechRecognition ?? window.webkitSpeechRecognition : void 0;
    if (!e2) return I();
    let t2 = new e2();
    t2.lang = navigator.language || `en-US`, t2.interimResults = true, t2.continuous = false, k.current = ``, t2.onresult = (e3) => {
      let t3 = ``;
      for (let n4 = e3.resultIndex; n4 < e3.results.length; n4++) {
        let r2 = e3.results[n4];
        r2.isFinal ? k.current += r2[0].transcript : t3 += r2[0].transcript;
      }
      v(`${k.current}${t3}`);
    }, t2.onerror = (e3) => {
      O.current = null, e3.error === `not-allowed` || e3.error === `service-not-allowed` || e3.error === `network` ? I() : b(false);
    }, t2.onend = () => {
      O.current === t2 && (O.current = null, F(k.current));
    }, O.current = t2, g(``), v(``), b(true);
    try {
      t2.start();
    } catch {
      O.current = null, I();
    }
  }, R = () => {
    O.current && O.current.stop();
  }, z = () => {
    A.current.forEach((e2) => window.clearTimeout(e2)), A.current = [], O.current?.abort(), O.current = null, m([]), g(``), v(``), b(false), S(false), w(null);
  }, B = (e2) => C?.id === e2.id ? e2.text.split(/\s+/).slice(0, C.words).join(` `) : e2.text;
  return (0, r.jsxs)(`div`, { className: [`ui-wa`, f].filter(Boolean).join(` `), "data-chat": M ? `` : void 0, children: [(0, r.jsx)(`style`, { href: `ui-writing-assistant`, precedence: `default`, children: o }), (0, r.jsxs)(`header`, { className: `ui-wa__head`, children: [(0, r.jsxs)(`div`, { children: [(0, r.jsx)(`h3`, { className: `ui-wa__name`, children: e }), (0, r.jsx)(`p`, { className: `ui-wa__tagline`, children: t })] }), (0, r.jsx)(`button`, { type: `button`, className: `ui-wa__new`, "aria-label": `New chat`, onClick: z, tabIndex: M ? 0 : -1, children: (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M12 5.5v13M5.5 12h13` }) }) })] }), (0, r.jsxs)(`div`, { className: `ui-wa__panel`, children: [(0, r.jsxs)(`div`, { className: `ui-wa__glow`, "aria-hidden": `true`, children: [(0, r.jsx)(`span`, { className: `ui-wa__blob ui-wa__blob--pink` }), (0, r.jsx)(`span`, { className: `ui-wa__blob ui-wa__blob--violet` }), (0, r.jsx)(`span`, { className: `ui-wa__blob ui-wa__blob--blue` })] }), (0, r.jsxs)(`div`, { className: `ui-wa__body`, children: [M ? (0, r.jsxs)(`div`, { className: `ui-wa__messages`, ref: E, "aria-live": `polite`, children: [p.map((e2) => (0, r.jsx)(`p`, { className: `ui-wa__msg ui-wa__msg--${e2.role}`, children: B(e2) }, e2.id)), x && !C && p[p.length - 1]?.role === `user` && (0, r.jsxs)(`p`, { className: `ui-wa__msg ui-wa__msg--assistant ui-wa__typing`, "aria-label": `Writing`, children: [(0, r.jsx)(`i`, {}), (0, r.jsx)(`i`, {}), (0, r.jsx)(`i`, {})] })] }) : (0, r.jsxs)(`div`, { className: `ui-wa__welcome`, children: [(0, r.jsx)(`p`, { className: `ui-wa__greeting`, children: a2 }), (0, r.jsx)(`div`, { className: `ui-wa__chips`, children: s2.map((e2) => (0, r.jsx)(`button`, { type: `button`, className: `ui-wa__chip`, onClick: () => N(e2), children: e2 }, e2)) })] }), (0, r.jsxs)(`form`, { className: `ui-wa__row`, onSubmit: P, children: [(0, r.jsxs)(`div`, { className: `ui-wa__field`, "data-listening": y ? `` : void 0, children: [(0, r.jsx)(`textarea`, { ref: D, rows: 1, value: y ? _ : h, readOnly: y, onChange: (e2) => g(e2.target.value), onKeyDown: (e2) => {
    e2.key === `Enter` && !e2.shiftKey && !e2.nativeEvent.isComposing && (e2.preventDefault(), N(h));
  }, placeholder: y ? `Listening\u2026` : c, "aria-label": `Message` }), h && !y && (0, r.jsx)(`button`, { type: `submit`, className: `ui-wa__send`, "aria-label": `Send`, disabled: x, children: (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M12 18.5v-13M6.5 11 12 5.5l5.5 5.5` }) }) })] }), (0, r.jsxs)(`button`, { type: `button`, className: `ui-wa__mic`, "data-listening": y ? `` : void 0, "aria-pressed": y, "aria-label": y ? `Stop dictation` : `Dictate`, onClick: y ? R : L, disabled: x && !y, children: [(0, r.jsx)(`span`, { className: `ui-wa__pulse`, "aria-hidden": `true` }), y ? (0, r.jsxs)(`span`, { className: `ui-wa__wave`, "aria-hidden": `true`, children: [(0, r.jsx)(`i`, {}), (0, r.jsx)(`i`, {}), (0, r.jsx)(`i`, {})] }) : (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M12 3.5a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0v-5a3 3 0 0 1 3-3ZM6 11.5a6 6 0 0 0 12 0M12 17.5v3` }) })] })] })] })] })] });
}
var o = `.ui-wa{--ui-wa-card: #ffffff;--ui-wa-panel: #fbfbfb;--ui-wa-line: #ececec;--ui-wa-ink: #171717;--ui-wa-text: #404040;--ui-wa-muted: #8f8f8f;--ui-wa-chip: rgba(0, 0, 0, 0.055);--ui-wa-chip-hover: rgba(0, 0, 0, 0.09);--ui-wa-field: #ffffff;--ui-wa-focus-line: #d4d4d4;--ui-wa-user: rgba(0, 0, 0, 0.06);--ui-wa-assistant: rgba(255, 255, 255, 0.85);--ui-wa-pink: #ec4899;--ui-wa-violet: #8b5cf6;--ui-wa-blue: #2f6bff;--ui-wa-glow: 0.28;--ui-wa-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 12px 32px rgba(0, 0, 0, 0.06);--ui-wa-ease: cubic-bezier(0.22, 1, 0.36, 1);width: 100%;max-width: 380px;padding: 8px;border: 1px solid var(--ui-wa-line);border-radius: 32px;background: var(--ui-wa-card);box-shadow: var(--ui-wa-shadow);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-wa-ink);-webkit-font-smoothing: antialiased}.ui-wa *, .ui-wa *::before, .ui-wa *::after{box-sizing: border-box}.ui-wa button{font: inherit;color: inherit;margin: 0;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-wa :focus-visible:not(textarea){outline: 2px solid var(--ui-wa-blue);outline-offset: 2px}.ui-wa__head{display: flex;align-items: flex-start;justify-content: space-between;padding: 18px 18px 16px}.ui-wa__name{margin: 0;font-size: 20px;font-weight: 500;letter-spacing: -0.02em}.ui-wa__tagline{margin: 3px 0 0;font-size: 13px;color: var(--ui-wa-muted)}.ui-wa__new{display: grid;place-items: center;width: 30px;height: 30px;padding: 0;border: 0;border-radius: 50%;background: var(--ui-wa-chip);color: var(--ui-wa-text) !important;opacity: 0;transform: scale(0.8);pointer-events: none;transition: opacity 220ms ease, transform 320ms var(--ui-wa-ease), background-color 160ms ease}.ui-wa[data-chat] .ui-wa__new{opacity: 1;transform: none;pointer-events: auto}.ui-wa__new:hover{background: var(--ui-wa-chip-hover)}.ui-wa__new svg{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round}.ui-wa__panel{position: relative;overflow: hidden;border-radius: 24px;background: var(--ui-wa-panel);box-shadow: inset 0 0 0 1px var(--ui-wa-line)}.ui-wa__glow{position: absolute;inset: 0;pointer-events: none}.ui-wa__blob{position: absolute;border-radius: 50%;filter: blur(34px);opacity: var(--ui-wa-glow);animation: ui-wa-drift-a 6s ease-in-out infinite alternate}.ui-wa__blob--pink{left: -18%;top: 46%;width: 60%;height: 42%;background: var(--ui-wa-pink)}.ui-wa__blob--violet{right: -16%;top: 36%;width: 56%;height: 44%;background: var(--ui-wa-violet);animation-name: ui-wa-drift-b;animation-duration: 7s}.ui-wa__blob--blue{left: 22%;bottom: -16%;width: 64%;height: 42%;background: var(--ui-wa-blue);animation-name: ui-wa-drift-c;animation-duration: 5.5s}.ui-wa[data-chat] .ui-wa__blob{opacity: calc(var(--ui-wa-glow) * 0.6)}.ui-wa__body{position: relative;display: flex;flex-direction: column;justify-content: flex-end;gap: 18px;height: 340px;padding: 18px 14px 14px}.ui-wa__welcome{display: grid;gap: 14px;padding: 0 4px;animation: ui-wa-in 380ms var(--ui-wa-ease) both}.ui-wa__greeting{margin: 0;font-size: 24px;font-weight: 500;line-height: 1.15;letter-spacing: -0.025em;color: var(--ui-wa-ink)}.ui-wa__chips{display: flex;flex-wrap: wrap;gap: 6px}.ui-wa__chip{height: 32px;padding: 0 13px;border: 0;border-radius: 999px;background: var(--ui-wa-chip);font-size: 13px;color: var(--ui-wa-text) !important;backdrop-filter: blur(8px);transition: background-color 160ms ease, transform 160ms ease}.ui-wa__chip:hover{background: var(--ui-wa-chip-hover)}.ui-wa__chip:active{transform: scale(0.97)}.ui-wa__messages{display: flex;flex-direction: column;gap: 8px;min-height: 0;margin: -4px -4px 0;padding: 4px;overflow-y: auto;scrollbar-width: none;-webkit-mask-image: linear-gradient(transparent, #000 18px, #000 calc(100% - 16px), transparent);mask-image: linear-gradient(transparent, #000 18px, #000 calc(100% - 16px), transparent);padding-bottom: 14px}.ui-wa__msg{max-width: 86%;margin: 0;padding: 9px 13px;font-size: 13.5px;line-height: 1.45;white-space: pre-wrap;animation: ui-wa-in 320ms var(--ui-wa-ease) both}.ui-wa__msg--user{align-self: flex-end;border-radius: 18px 18px 6px 18px;background: var(--ui-wa-user)}.ui-wa__msg--assistant{align-self: flex-start;border-radius: 18px 18px 18px 6px;background: var(--ui-wa-assistant);box-shadow: 0 0 0 1px var(--ui-wa-line);backdrop-filter: blur(10px)}.ui-wa__typing{display: inline-flex;gap: 4px;padding: 13px 14px}.ui-wa__typing i{width: 6px;height: 6px;border-radius: 50%;background: var(--ui-wa-muted);animation: ui-wa-dot 1s ease-in-out infinite}.ui-wa__typing i:nth-child(2){animation-delay: 0.15s}.ui-wa__typing i:nth-child(3){animation-delay: 0.3s}.ui-wa__row{display: flex;align-items: flex-end;gap: 8px}.ui-wa__field{position: relative;flex: 1;min-width: 0;display: flex;align-items: flex-end;gap: 8px;min-height: 54px;padding: 7px 7px 7px 20px;border-radius: 27px;background: var(--ui-wa-field);box-shadow: 0 0 0 1px var(--ui-wa-line), 0 6px 18px rgba(0, 0, 0, 0.06), inset 0 -2px 6px rgba(0, 0, 0, 0.02);transition: box-shadow 220ms ease}.ui-wa__field:focus-within{box-shadow: 0 0 0 1px var(--ui-wa-focus-line), 0 6px 18px rgba(0, 0, 0, 0.06)}.ui-wa__field textarea{flex: 1;min-width: 0;height: 40px;margin: 0;padding: 9.5px 0;border: 0;background: none;outline: none;resize: none;font: inherit;font-size: 14.5px;line-height: 21px;color: var(--ui-wa-ink);overflow-y: auto;scrollbar-width: none;-webkit-mask-image: linear-gradient(transparent, #000 9px);mask-image: linear-gradient(transparent, #000 9px)}.ui-wa__field textarea::-webkit-scrollbar{display: none}.ui-wa__field textarea::placeholder{color: var(--ui-wa-muted)}.ui-wa__field[data-listening] textarea{color: var(--ui-wa-text)}.ui-wa__send{display: grid;place-items: center;flex: none;width: 38px;height: 38px;padding: 0;border: 0;border-radius: 50%;background: var(--ui-wa-ink);color: var(--ui-wa-card) !important;animation: ui-wa-pop 280ms var(--ui-wa-ease) both}.ui-wa__send:disabled{opacity: 0.5;cursor: default}.ui-wa__send svg{width: 17px;height: 17px;fill: none;stroke: currentColor;stroke-width: 2.2;stroke-linecap: round;stroke-linejoin: round}.ui-wa__mic{position: relative;display: grid;place-items: center;flex: none;width: 54px;height: 54px;padding: 0;border: 0;border-radius: 50%;background: var(--ui-wa-field);box-shadow: 0 0 0 1px var(--ui-wa-line), 0 6px 18px rgba(0, 0, 0, 0.06);transition: transform 200ms var(--ui-wa-ease), background-color 220ms ease}.ui-wa__mic:active{transform: scale(0.95)}.ui-wa__mic:disabled{opacity: 0.6;cursor: default}.ui-wa__mic svg{position: relative;width: 22px;height: 22px;fill: none;stroke: var(--ui-wa-ink);stroke-width: 1.7;stroke-linecap: round;stroke-linejoin: round}.ui-wa__mic[data-listening]{background: var(--ui-wa-ink);box-shadow: 0 0 0 1px var(--ui-wa-ink), 0 6px 18px rgba(0, 0, 0, 0.12)}.ui-wa__pulse{position: absolute;inset: 0;border-radius: 50%;box-shadow: 0 0 0 0 color-mix(in srgb, var(--ui-wa-ink) 18%, transparent);opacity: 0}.ui-wa__mic[data-listening] .ui-wa__pulse{opacity: 1;animation: ui-wa-ring 1.6s ease-out infinite}.ui-wa__wave{position: relative;display: flex;align-items: center;gap: 3px;height: 16px}.ui-wa__wave i{width: 3px;height: 100%;border-radius: 2px;background: var(--ui-wa-card);transform: scaleY(0.35);animation: ui-wa-wave 1.1s ease-in-out infinite}.ui-wa__wave i:nth-child(2){animation-delay: -0.35s}.ui-wa__wave i:nth-child(3){animation-delay: -0.7s}@keyframes ui-wa-in{from{opacity: 0;transform: translateY(6px)}}@keyframes ui-wa-pop{from{opacity: 0;transform: scale(0.6)}}@keyframes ui-wa-ring{0%{box-shadow: 0 0 0 0 color-mix(in srgb, var(--ui-wa-ink) 16%, transparent)}100%{box-shadow: 0 0 0 12px transparent}}@keyframes ui-wa-wave{0%, 100%{transform: scaleY(0.35)}50%{transform: scaleY(1)}}@keyframes ui-wa-dot{0%, 100%{opacity: 0.3;transform: translateY(0)}50%{opacity: 1;transform: translateY(-2px)}}@keyframes ui-wa-drift-a{0%{transform: translate(0, 0) scale(1)}50%{transform: translate(55%, -22%) scale(1.25)}100%{transform: translate(20%, 14%) scale(0.85)}}@keyframes ui-wa-drift-b{0%{transform: translate(0, 0) scale(1)}50%{transform: translate(-55%, 24%) scale(0.85)}100%{transform: translate(-22%, -16%) scale(1.25)}}@keyframes ui-wa-drift-c{0%{transform: translate(0, 0) scale(1)}50%{transform: translate(-45%, -26%) scale(1.2)}100%{transform: translate(30%, -10%) scale(0.88)}}@media (prefers-reduced-motion: reduce){.ui-wa__blob, .ui-wa__welcome, .ui-wa__msg, .ui-wa__send, .ui-wa__mic[data-listening] .ui-wa__pulse, .ui-wa__wave i, .ui-wa__typing i{animation: none}.ui-wa__wave i{transform: scaleY(0.7)}}.ui-wa input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-wa textarea:focus-visible, .ui-wa [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-wa{--ui-wa-card: #232326;--ui-wa-panel: #1c1c1f;--ui-wa-line: rgba(255, 255, 255, 0.08);--ui-wa-ink: #ededed;--ui-wa-text: #c4c4c4;--ui-wa-muted: #8f8f8f;--ui-wa-chip: rgba(255, 255, 255, 0.07);--ui-wa-chip-hover: rgba(255, 255, 255, 0.11);--ui-wa-field: #2a2a2d;--ui-wa-focus-line: rgba(255, 255, 255, 0.2);--ui-wa-user: rgba(255, 255, 255, 0.08);--ui-wa-assistant: rgba(42, 42, 45, 0.85);--ui-wa-pink: #f472b6;--ui-wa-violet: #a78bfa;--ui-wa-blue: #4d82ff;--ui-wa-glow: 0.26;--ui-wa-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.3)}`;
function s() {
  return (0, r.jsx)(`div`, { className: `writing-assistant-demo`, children: (0, r.jsx)(a, {}) });
}

export {
  s
};
