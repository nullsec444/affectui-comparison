import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo.clean-B-ER_Luk.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = (e) => {
  let t = e.toLowerCase();
  if (t.includes(`remind`)) {
    return `Hi team, just a friendly nudge: the report is due this Friday. If anything is holding you up, let me know today and we'll sort it out together. Thanks!`;
  }
  if (t.includes(`shorter`) || t.includes(`short`)) {
    return `Here's a tighter version: \u201CThanks for the quick turnaround \u2013 the new draft reads much better. Let's ship it Friday.\u201D`;
  }
  if (t.includes(`tone`)) {
    return `I softened the opening and swapped the direct ask for a question, so it sounds friendly but still clear about the deadline.`;
  }
  if (t.includes(`reply`)) {
    return `Hi Sam, thanks for the update! Thursday works for me \u2013 I'll bring the revised numbers so we can decide on the spot.`;
  }
  if (t.includes(`email`) || t.includes(`polish`)) {
    return `I fixed two typos, split the long second paragraph and moved your main ask to the first line, so it's the first thing they read.`;
  }
  return `Got it. Here's a first draft \u2013 tell me if it should sound more formal, shorter or more playful, and I'll adjust it.`;
};
function A1Component({
  name = `Quill`,
  tagline = `Your writing companion.`,
  greeting = `What should we write?`,
  suggestions = [`Polish my email`, `Make it shorter`, `Fix the tone`, `Draft a reply`],
  placeholder = `Ask anything\u2026`,
  respond = i,
  speech = `auto`,
  dictation = `Write a friendly reminder that the report is due on Friday`,
  className
}) {
  let [p, setP] = n3.useState([]);
  let [h, setH] = n3.useState(``);
  let [_, set_] = n3.useState(``);
  let [y, setY] = n3.useState(false);
  let [x, setX] = n3.useState(false);
  let [C, setC] = n3.useState(null);
  let TRef = n3.useRef(1);
  let ERef = n3.useRef(null);
  let DRef = n3.useRef(null);
  let ORef = n3.useRef(null);
  let kRef = n3.useRef(``);
  let ARef = n3.useRef([]);
  let id = `ui-wac` + n3.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
  let M = (e, t) => ARef.current.push(window.setTimeout(e, t));
  n3.useEffect(() => () => {
    ARef.current.forEach((e) => window.clearTimeout(e));
    ORef.current?.abort();
  }, []);
  n3.useLayoutEffect(() => {
    let DRef_current = DRef.current;
    if (DRef_current) {
      DRef_current.style.height = `auto`;
      DRef_current.style.height = `${Math.min(DRef_current.scrollHeight, 88)}px`;
      if (y || document.activeElement !== DRef_current) {
        DRef_current.scrollTop = DRef_current.scrollHeight;
      }
    }
  }, [h, _, y]);
  n3.useEffect(() => {
    let ERef_current = ERef.current;
    if (ERef_current) {
      ERef_current.scrollTo({
        top: ERef_current.scrollHeight,
        behavior: `smooth`
      });
    }
  }, [p, C]);
  let N = p.length > 0;
  n3.useEffect(() => {
    let ERef_current = ERef.current;
    if (!ERef_current) {
      return;
    }
    let e_clientHeight = ERef_current.clientHeight;
    let n4 = new ResizeObserver(() => {
      if (ERef_current.clientHeight < e_clientHeight) {
        ERef_current.scrollTop = ERef_current.scrollHeight;
      }
      e_clientHeight = ERef_current.clientHeight;
    });
    n4.observe(ERef_current);
    return () => n4.disconnect();
  }, [N]);
  let P = async (e) => {
    let text = e.trim();
    if (!text || x) {
      return;
    }
    setH(``);
    set_(``);
    let n4 = {
      id: TRef.current++,
      role: `user`,
      text
    };
    setP((e2) => [...e2, n4]);
    setX(true);
    let [r2] = await Promise.all([Promise.resolve(respond(text)), new Promise((resolve) => M(() => resolve(null), 700))]);
    let id2 = TRef.current++;
    setP((e2) => [...e2, {
      id: id2,
      role: `assistant`,
      text: r2
    }]);
    let length = r2.split(/\s+/).length;
    if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
      setC(null);
      setX(false);
      return;
    }
    for (let words = 1; words <= length; words++) {
      M(() => setC({
        id: id2,
        words
      }), words * 38);
    }
    M(() => {
      setC(null);
      setX(false);
    }, length * 38 + 60);
  };
  let onSubmit = (e) => {
    e.preventDefault();
    P(h);
  };
  let I = (e) => {
    setY(false);
    set_(``);
    if (e.trim()) {
      setH(e.trim());
      M(() => P(e), 450);
    }
  };
  let L = () => {
    setY(true);
    setH(``);
    let e = dictation.split(/\s+/);
    e.forEach((t, n4) => M(() => set_(e.slice(0, n4 + 1).join(` `)), 260 + n4 * 170));
    M(() => I(dictation), 260 + e.length * 170 + 500);
  };
  let R = () => {
    if (x) {
      return;
    }
    let e = speech === `auto` ? window.SpeechRecognition ?? window.webkitSpeechRecognition : void 0;
    if (!e) {
      return L();
    }
    let t = new e();
    t.lang = navigator.language || `en-US`;
    t.interimResults = true;
    t.continuous = false;
    kRef.current = ``;
    t.onresult = (e2) => {
      let t2 = ``;
      for (let n4 = e2.resultIndex; n4 < e2.results.length; n4++) {
        let result = e2.results[n4];
        if (result.isFinal) {
          kRef.current += result[0].transcript;
        } else {
          t2 += result[0].transcript;
        }
      }
      set_(`${kRef.current}${t2}`);
    };
    t.onerror = (e2) => {
      ORef.current = null;
      if (e2.error === `not-allowed` || e2.error === `service-not-allowed` || e2.error === `network`) {
        L();
      } else {
        setY(false);
      }
    };
    t.onend = () => {
      if (ORef.current === t) {
        ORef.current = null;
        I(kRef.current);
      }
    };
    ORef.current = t;
    setH(``);
    set_(``);
    setY(true);
    try {
      t.start();
    } catch {
      ORef.current = null;
      L();
    }
  };
  let z = () => {
    if (ORef.current) {
      ORef.current.stop();
    }
  };
  let onClick = () => {
    ARef.current.forEach((e) => window.clearTimeout(e));
    ARef.current = [];
    ORef.current?.abort();
    ORef.current = null;
    setP([]);
    setH(``);
    set_(``);
    setY(false);
    setX(false);
    setC(null);
  };
  let V = (e) => {
    if (C?.id === e.id) {
      return e.text.split(/\s+/).slice(0, C.words).join(` `);
    }
    return e.text;
  };
  return /* @__PURE__ */ jsxs("div", { className: [`ui-wac`, className].filter(Boolean).join(` `), "data-chat": N ? `` : void 0, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-writing-assistant-clean`, precedence: `default`, children: o }),
    /* @__PURE__ */ jsxs("header", { className: `ui-wac__head`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-wac__id`, children: [
        /* @__PURE__ */ jsxs("h3", { className: `ui-wac__name`, children: [
          /* @__PURE__ */ jsxs("svg", { className: `ui-wac__mark`, viewBox: `0 0 16 16`, "aria-hidden": `true`, children: [
            /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id, x1: `2`, y1: `2`, x2: `14`, y2: `14`, gradientUnits: `userSpaceOnUse`, children: [
              /* @__PURE__ */ jsx("stop", { stopColor: `var(--ui-wac-pink)` }),
              /* @__PURE__ */ jsx("stop", { offset: `0.5`, stopColor: `var(--ui-wac-violet)` }),
              /* @__PURE__ */ jsx("stop", { offset: `1`, stopColor: `var(--ui-wac-blue)` })
            ] }) }),
            /* @__PURE__ */ jsx("path", { fill: `url(#${id})`, d: `M8 1.5c.3 2.9 1.6 4.2 4.5 4.5-2.9.3-4.2 1.6-4.5 4.5-.3-2.9-1.6-4.2-4.5-4.5 2.9-.3 4.2-1.6 4.5-4.5Z` }),
            /* @__PURE__ */ jsx("path", { fill: `url(#${id})`, d: `M12.25 10c.13 1.3.7 1.87 2 2-1.3.13-1.87.7-2 2-.13-1.3-.7-1.87-2-2 1.3-.13 1.87-.7 2-2Z` })
          ] }),
          name
        ] }),
        /* @__PURE__ */ jsx("p", { className: `ui-wac__tagline`, children: tagline })
      ] }),
      /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-wac__new`, "aria-label": `New chat`, onClick, tabIndex: N ? 0 : -1, children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M12 5v14M5 12h14` }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `ui-wac__body`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-wac__glow`, "aria-hidden": `true`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-wac__blob ui-wac__blob--pink` }),
        /* @__PURE__ */ jsx("span", { className: `ui-wac__blob ui-wac__blob--violet` }),
        /* @__PURE__ */ jsx("span", { className: `ui-wac__blob ui-wac__blob--blue` })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-wac__content`, children: N ? /* @__PURE__ */ jsxs("div", { className: `ui-wac__messages`, ref: ERef, "aria-live": `polite`, children: [
        p.map((e) => /* @__PURE__ */ jsx("p", { className: `ui-wac__msg ui-wac__msg--${e.role}`, children: V(e) }, e.id)),
        x && !C && p[p.length - 1]?.role === `user` && /* @__PURE__ */ jsx("p", { className: `ui-wac__msg ui-wac__msg--assistant ui-wac__typing`, "aria-label": `Writing`, children: /* @__PURE__ */ jsx("span", { className: `ui-wac__shimmer`, "data-text": `Writing\u2026`, "aria-hidden": `true`, children: `Writing\u2026` }) })
      ] }) : /* @__PURE__ */ jsxs("div", { className: `ui-wac__welcome`, children: [
        /* @__PURE__ */ jsx("p", { className: `ui-wac__greeting`, children: greeting }),
        /* @__PURE__ */ jsx("div", { className: `ui-wac__chips`, children: suggestions.map((e) => /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-wac__chip`, onClick: () => P(e), children: e }, e)) })
      ] }) }),
      /* @__PURE__ */ jsxs("form", { className: `ui-wac__row`, onSubmit, children: [
        /* @__PURE__ */ jsx("div", { className: `ui-wac__field`, "data-listening": y ? `` : void 0, children: /* @__PURE__ */ jsx("textarea", { ref: DRef, rows: 1, value: y ? _ : h, readOnly: y, onChange: (e) => setH(e.target.value), onKeyDown: (e) => {
          if (e.key === `Enter` && !e.shiftKey && !e.nativeEvent.isComposing) {
            e.preventDefault();
            P(h);
          }
        }, placeholder: y ? `Listening\u2026` : placeholder, "aria-label": `Message` }) }),
        /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-wac__mic`, "data-listening": y ? `` : void 0, "aria-pressed": y, "aria-label": y ? `Stop dictation` : `Dictate`, onClick: y ? z : R, disabled: x && !y, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-wac__pulse`, "aria-hidden": `true` }),
          y ? /* @__PURE__ */ jsxs("span", { className: `ui-wac__wave`, "aria-hidden": `true`, children: [
            /* @__PURE__ */ jsx("i", {}),
            /* @__PURE__ */ jsx("i", {}),
            /* @__PURE__ */ jsx("i", {})
          ] }) : /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M12 3.5a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0v-5a3 3 0 0 1 3-3ZM6 11.5a6 6 0 0 0 12 0M12 17.5v3` }) })
        ] }),
        h && !y && /* @__PURE__ */ jsx("button", { type: `submit`, className: `ui-wac__send`, "aria-label": `Send`, disabled: x, children: /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M12 19V5.5M6 11c0 0 4.4-6 6-6s6 6 6 6` }) }) })
      ] })
    ] })
  ] });
}
var o = `.ui-wac{--ui-wac-card: #ffffff;--ui-wac-strong: #000000;--ui-wac-ink: rgba(0, 0, 0, 0.88);--ui-wac-text: rgba(0, 0, 0, 0.61);--ui-wac-muted: rgba(0, 0, 0, 0.45);--ui-wac-faint: rgba(0, 0, 0, 0.27);--ui-wac-icon: rgba(0, 0, 0, 0.447);--ui-wac-line: rgba(0, 0, 0, 0.06);--ui-wac-fill: rgba(0, 0, 0, 0.06);--ui-wac-wash: rgba(0, 0, 0, 0.03);--ui-wac-solid: rgba(0, 0, 0, 0.88);--ui-wac-on-solid: #fcfcfc;--ui-wac-accent: rgba(0, 96, 226, 0.765);--ui-wac-accent-wash: rgba(0, 96, 226, 0.08);--ui-wac-accent-ring: rgba(0, 96, 226, 0.22);--ui-wac-shine: rgba(255, 255, 255, 0.82);--ui-wac-pink: #ec4899;--ui-wac-violet: #8b5cf6;--ui-wac-blue: #2f6bff;--ui-wac-glow: 0.13;--ui-wac-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-wac-focus: rgba(0, 96, 226, 0.35);--ui-wac-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;container-type: inline-size;display: flex;flex-direction: column;width: 100%;max-width: 380px;overflow: hidden;border-radius: 10px;background: var(--ui-wac-card);box-shadow: var(--ui-wac-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-wac-ink);-webkit-font-smoothing: antialiased;-webkit-tap-highlight-color: transparent}.ui-wac *, .ui-wac *::before, .ui-wac *::after{box-sizing: border-box}:where(.ui-wac) button{appearance: none;margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-wac) svg{display: block;flex: none}.ui-wac button:focus-visible{outline: 2px solid var(--ui-wac-focus);outline-offset: 1px}.ui-wac__head{display: flex;align-items: center;justify-content: space-between;gap: 12px;padding: 12px 12px 12px 16px;border-bottom: 0.5px solid var(--ui-wac-line)}.ui-wac__id{min-width: 0}.ui-wac__name{display: flex;align-items: center;gap: 6px;margin: 0;font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-wac-strong)}.ui-wac__mark{width: 16px;height: 16px}.ui-wac__tagline{margin: 0;overflow: hidden;font-size: 12px;line-height: 16px;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-wac-text)}.ui-wac__new{display: grid;place-items: center;flex: none;width: 28px;height: 28px;border-radius: 6px;color: var(--ui-wac-icon);opacity: 0;transform: scale(0.8);pointer-events: none;transition: opacity 220ms ease, transform 320ms var(--ui-wac-ease), background-color 160ms ease, color 160ms ease}.ui-wac[data-chat] .ui-wac__new{opacity: 1;transform: none;pointer-events: auto}.ui-wac__new:hover{background: var(--ui-wac-wash);color: var(--ui-wac-ink)}.ui-wac__new svg{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round}.ui-wac__body{position: relative;display: flex;flex-direction: column;height: 340px;overflow: hidden}.ui-wac__content{position: relative;flex: 1;min-height: 0;display: flex;flex-direction: column;justify-content: flex-end;overflow: hidden}.ui-wac__glow{position: absolute;inset: 0;pointer-events: none;opacity: 1;transition: opacity 600ms ease}.ui-wac[data-chat] .ui-wac__glow{opacity: 0.4}.ui-wac__blob{position: absolute;border-radius: 50%;filter: blur(36px);opacity: var(--ui-wac-glow);animation: ui-wac-drift-a 6s ease-in-out infinite alternate}.ui-wac__blob--pink{left: -18%;top: 54%;width: 58%;height: 40%;background: var(--ui-wac-pink)}.ui-wac__blob--violet{right: -16%;top: 46%;width: 54%;height: 42%;background: var(--ui-wac-violet);animation-name: ui-wac-drift-b;animation-duration: 7s}.ui-wac__blob--blue{left: 22%;bottom: -22%;width: 62%;height: 40%;background: var(--ui-wac-blue);animation-name: ui-wac-drift-c;animation-duration: 5.5s}.ui-wac__welcome{position: relative;display: grid;gap: 12px;padding: 16px;animation: ui-wac-in 380ms var(--ui-wac-ease) both}.ui-wac__greeting{margin: 0;font-size: 15px;font-weight: 500;line-height: 24px;color: var(--ui-wac-strong)}.ui-wac__chips{display: flex;flex-wrap: wrap;gap: 6px}.ui-wac__chip{padding: 4px 10px;border-radius: 6px;background: color-mix(in srgb, var(--ui-wac-card) 70%, transparent);box-shadow: inset 0 0 0 0.5px var(--ui-wac-line);font-size: 13px;font-weight: 500;line-height: 20px;white-space: nowrap;color: var(--ui-wac-text);transition: background-color 160ms ease, color 160ms ease, transform 160ms var(--ui-wac-ease)}.ui-wac__chip:hover{background: linear-gradient(var(--ui-wac-wash), var(--ui-wac-wash)), color-mix(in srgb, var(--ui-wac-card) 70%, transparent);color: var(--ui-wac-ink)}.ui-wac__chip:active{transform: scale(0.97)}.ui-wac__messages{position: relative;display: flex;flex-direction: column;gap: 12px;min-height: 0;padding: 16px 16px 14px;overflow-y: auto;scrollbar-width: none;-webkit-mask-image: linear-gradient(transparent, #000 16px, #000 calc(100% - 12px), transparent);mask-image: linear-gradient(transparent, #000 16px, #000 calc(100% - 12px), transparent)}.ui-wac__messages::-webkit-scrollbar{display: none}.ui-wac__msg{max-width: 86%;margin: 0;font-size: 13px;line-height: 20px;white-space: pre-wrap;overflow-wrap: break-word;color: var(--ui-wac-ink);animation: ui-wac-in 320ms var(--ui-wac-ease) both}.ui-wac__msg--user{align-self: flex-end;padding: 6px 10px;border-radius: 10px;background: var(--ui-wac-fill)}.ui-wac__msg--assistant{align-self: flex-start;max-width: 94%}.ui-wac__typing{color: var(--ui-wac-muted)}.ui-wac__shimmer{position: relative;display: inline-block}.ui-wac__shimmer::after{content: attr(data-text);content: attr(data-text) / "";position: absolute;inset: 0;white-space: nowrap;color: transparent;background: linear-gradient(90deg, transparent 38%, var(--ui-wac-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;-webkit-background-clip: text;background-clip: text;animation: ui-wac-sweep 1.3s linear infinite;pointer-events: none}.ui-wac__row{position: relative;flex: none;display: flex;align-items: flex-end;gap: 4px;margin: 0;padding: 6px 10px 10px 16px}.ui-wac__field{flex: 1;min-width: 0;display: flex;margin-right: 4px}.ui-wac__field textarea{display: block;flex: 1;min-width: 0;height: 28px;margin: 0;padding: 4px 0;border: 0;background: none;outline: none;resize: none;font: inherit;font-size: 13px;line-height: 20px;color: var(--ui-wac-strong);caret-color: var(--ui-wac-accent);overflow-y: auto;scrollbar-width: none;-webkit-mask-image: linear-gradient(transparent, #000 4px);mask-image: linear-gradient(transparent, #000 4px)}.ui-wac__field textarea::-webkit-scrollbar{display: none}.ui-wac__field textarea::placeholder{color: var(--ui-wac-faint);opacity: 1}.ui-wac__field[data-listening] textarea{color: var(--ui-wac-text)}.ui-wac__send{display: grid;place-items: center;flex: none;width: 28px;height: 28px;border-radius: 6px;background: var(--ui-wac-solid) !important;color: var(--ui-wac-on-solid);transition: transform 160ms var(--ui-wac-ease), opacity 160ms ease;animation: ui-wac-pop 280ms var(--ui-wac-ease) both}.ui-wac__send:disabled{opacity: 0.4;cursor: default}.ui-wac__send:not(:disabled):active{transform: scale(0.94)}.ui-wac__send svg{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-wac__mic{position: relative;display: grid;place-items: center;flex: none;width: 28px;height: 28px;border-radius: 6px;color: var(--ui-wac-icon);transition: background-color 200ms ease, color 160ms ease, transform 160ms var(--ui-wac-ease)}.ui-wac__mic:not(:disabled):hover{background: var(--ui-wac-wash);color: var(--ui-wac-ink)}.ui-wac__mic:not(:disabled):active{transform: scale(0.94)}.ui-wac__mic:disabled{opacity: 0.5;cursor: default}.ui-wac__mic svg{position: relative;width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round}.ui-wac__mic[data-listening], .ui-wac__mic[data-listening]:hover{background: var(--ui-wac-accent-wash);color: var(--ui-wac-accent)}.ui-wac__pulse{position: absolute;inset: 0;border-radius: 6px;opacity: 0}.ui-wac__mic[data-listening] .ui-wac__pulse{opacity: 1;animation: ui-wac-ring 1.6s ease-out infinite}.ui-wac__wave{position: relative;display: flex;align-items: center;gap: 2px;height: 12px}.ui-wac__wave i{width: 2px;height: 100%;border-radius: 1px;background: currentColor;transform: scaleY(0.35);animation: ui-wac-wave 1.1s ease-in-out infinite}.ui-wac__wave i:nth-child(2){animation-delay: -0.35s}.ui-wac__wave i:nth-child(3){animation-delay: -0.7s}@keyframes ui-wac-in{from{opacity: 0;transform: translateY(6px)}}@keyframes ui-wac-pop{from{opacity: 0;transform: scale(0.6)}}@keyframes ui-wac-sweep{from{background-position: 100% 0}to{background-position: 0% 0}}@keyframes ui-wac-ring{0%{box-shadow: 0 0 0 0 var(--ui-wac-accent-ring)}100%{box-shadow: 0 0 0 7px transparent}}@keyframes ui-wac-wave{0%, 100%{transform: scaleY(0.35)}50%{transform: scaleY(1)}}@keyframes ui-wac-drift-a{0%{transform: translate(0, 0) scale(1)}50%{transform: translate(55%, -22%) scale(1.25)}100%{transform: translate(20%, 14%) scale(0.85)}}@keyframes ui-wac-drift-b{0%{transform: translate(0, 0) scale(1)}50%{transform: translate(-55%, 24%) scale(0.85)}100%{transform: translate(-22%, -16%) scale(1.25)}}@keyframes ui-wac-drift-c{0%{transform: translate(0, 0) scale(1)}50%{transform: translate(-45%, -26%) scale(1.2)}100%{transform: translate(30%, -10%) scale(0.88)}}@container (max-width: 330px){.ui-wac__head{padding-left: 12px}.ui-wac__welcome, .ui-wac__messages{padding-left: 12px;padding-right: 12px}.ui-wac__row{padding-left: 12px}}@media (pointer: coarse){.ui-wac__new, .ui-wac__mic, .ui-wac__send{width: 34px;height: 34px}.ui-wac__chip{padding: 7px 12px}.ui-wac__field textarea{padding: 7px 0}}@media (prefers-reduced-motion: reduce){.ui-wac__blob, .ui-wac__welcome, .ui-wac__msg, .ui-wac__send, .ui-wac__mic[data-listening] .ui-wac__pulse, .ui-wac__wave i, .ui-wac__shimmer::after{animation: none}.ui-wac__wave i{transform: scaleY(0.7)}}.ui-wac input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-wac textarea:focus-visible, .ui-wac [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-wac{--ui-wac-card: #1c1c1e;--ui-wac-strong: #ffffff;--ui-wac-ink: rgba(255, 255, 255, 0.9);--ui-wac-text: rgba(255, 255, 255, 0.62);--ui-wac-muted: rgba(255, 255, 255, 0.46);--ui-wac-faint: rgba(255, 255, 255, 0.3);--ui-wac-icon: rgba(255, 255, 255, 0.5);--ui-wac-line: rgba(255, 255, 255, 0.08);--ui-wac-fill: rgba(255, 255, 255, 0.08);--ui-wac-wash: rgba(255, 255, 255, 0.04);--ui-wac-solid: rgba(255, 255, 255, 0.92);--ui-wac-on-solid: #161618;--ui-wac-accent: #4d8dff;--ui-wac-accent-wash: rgba(77, 141, 255, 0.14);--ui-wac-accent-ring: rgba(77, 141, 255, 0.3);--ui-wac-shine: #ffffff;--ui-wac-pink: #f472b6;--ui-wac-violet: #a78bfa;--ui-wac-blue: #4d82ff;--ui-wac-glow: 0.14;--ui-wac-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-wac-focus: rgba(77, 141, 255, 0.5)}`;
function SComponent() {
  return /* @__PURE__ */ jsx("div", { className: `writing-assistant-demo`, children: /* @__PURE__ */ jsx(A1Component, {}) });
}

export {
  SComponent
};
