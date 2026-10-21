import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = (e)=>{
    let t = e.toLowerCase();
    if (t.includes(`remind`)) {
        return `Hi team, just a friendly nudge: the report is due this Friday. If anything is holding you up, let me know today and we'll sort it out together. Thanks!`;
    }
    if (t.includes(`shorter`) || t.includes(`short`)) {
        return `Here's a tighter version: “Thanks for the quick turnaround – the new draft reads much better. Let's ship it Friday.”`;
    }
    if (t.includes(`tone`)) {
        return `I softened the opening and swapped the direct ask for a question, so it sounds friendly but still clear about the deadline.`;
    }
    if (t.includes(`reply`)) {
        return `Hi Sam, thanks for the update! Thursday works for me – I'll bring the revised numbers so we can decide on the spot.`;
    }
    if (t.includes(`email`) || t.includes(`polish`)) {
        return `I fixed two typos, split the long second paragraph and moved your main ask to the first line, so it's the first thing they read.`;
    }
    return `Got it. Here's a first draft – tell me if it should sound more formal, shorter or more playful, and I'll adjust it.`;
};
function A1Component({ name = `Quill`, tagline = `Your writing companion.`, greeting = `What should we write?`, suggestions = [
    `Polish my email`,
    `Make it shorter`,
    `Fix the tone`,
    `Draft a reply`
], placeholder = `Ask anything…`, respond = i, speech = `auto`, dictation = `Write a friendly reminder that the report is due on Friday`, className }) {
    let [p, setP] = n.useState([]);
    let [h, setH] = n.useState(``);
    let [_, set_] = n.useState(``);
    let [y, setY] = n.useState(false);
    let [x, setX] = n.useState(false);
    let [C, setC] = n.useState(null);
    let TRef = n.useRef(1);
    let ERef = n.useRef(null);
    let DRef = n.useRef(null);
    let ORef = n.useRef(null);
    let kRef = n.useRef(``);
    let ARef = n.useRef([]);
    let j = (e, t)=>ARef.current.push(window.setTimeout(e, t));
    n.useEffect(()=>()=>{
            ARef.current.forEach((e)=>window.clearTimeout(e));
            ORef.current?.abort();
        }, []);
    n.useLayoutEffect(()=>{
        let DRef_current = DRef.current;
        if (DRef_current) {
            DRef_current.style.height = `auto`;
            DRef_current.style.height = `${Math.min(DRef_current.scrollHeight, 103)}px`;
            if (y || document.activeElement !== DRef_current) {
                DRef_current.scrollTop = DRef_current.scrollHeight;
            }
        }
    }, [
        h,
        _,
        y
    ]);
    n.useEffect(()=>{
        let ERef_current = ERef.current;
        if (ERef_current) {
            ERef_current.scrollTo({
                top: ERef_current.scrollHeight,
                behavior: `smooth`
            });
        }
    }, [
        p,
        C
    ]);
    let M = p.length > 0;
    n.useEffect(()=>{
        let ERef_current = ERef.current;
        if (!ERef_current) {
            return;
        }
        let e_clientHeight = ERef_current.clientHeight;
        let n = new ResizeObserver(()=>{
            if (ERef_current.clientHeight < e_clientHeight) {
                ERef_current.scrollTop = ERef_current.scrollHeight;
            }
            e_clientHeight = ERef_current.clientHeight;
        });
        n.observe(ERef_current);
        return ()=>n.disconnect();
    }, [
        M
    ]);
    let N = async (e)=>{
        let text = e.trim();
        if (!text || x) {
            return;
        }
        setH(``);
        set_(``);
        let n = {
            id: TRef.current++,
            role: `user`,
            text
        };
        setP((e)=>[
                ...e,
                n
            ]);
        setX(true);
        let [r] = await Promise.all([
            Promise.resolve(respond(text)),
            new Promise((resolve)=>j(()=>resolve(null), 700))
        ]);
        let id = TRef.current++;
        setP((e)=>[
                ...e,
                {
                    id,
                    role: `assistant`,
                    text: r
                }
            ]);
        let length = r.split(/\s+/).length;
        if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
            setC(null);
            setX(false);
            return;
        }
        for(let words = 1; words <= length; words++){
            j(()=>setC({
                    id,
                    words
                }), words * 38);
        }
        j(()=>{
            setC(null);
            setX(false);
        }, length * 38 + 60);
    };
    let onSubmit = (e)=>{
        e.preventDefault();
        N(h);
    };
    let F = (e)=>{
        setY(false);
        set_(``);
        if (e.trim()) {
            setH(e.trim());
            j(()=>N(e), 450);
        }
    };
    let I = ()=>{
        setY(true);
        setH(``);
        let e = dictation.split(/\s+/);
        e.forEach((t, n)=>j(()=>set_(e.slice(0, n + 1).join(` `)), 260 + n * 170));
        j(()=>F(dictation), 260 + e.length * 170 + 500);
    };
    let L = ()=>{
        if (x) {
            return;
        }
        let e = speech === `auto` ? window.SpeechRecognition ?? window.webkitSpeechRecognition : undefined;
        if (!e) {
            return I();
        }
        let t = new e;
        t.lang = navigator.language || `en-US`;
        t.interimResults = true;
        t.continuous = false;
        kRef.current = ``;
        t.onresult = (e)=>{
            let t = ``;
            for(let n = e.resultIndex; n < e.results.length; n++){
                let result = e.results[n];
                if (result.isFinal) {
                    kRef.current += result[0].transcript;
                } else {
                    t += result[0].transcript;
                }
            }
            set_(`${kRef.current}${t}`);
        };
        t.onerror = (e)=>{
            ORef.current = null;
            if (e.error === `not-allowed` || e.error === `service-not-allowed` || e.error === `network`) {
                I();
            } else {
                setY(false);
            }
        };
        t.onend = ()=>{
            if (ORef.current === t) {
                ORef.current = null;
                F(kRef.current);
            }
        };
        ORef.current = t;
        setH(``);
        set_(``);
        setY(true);
        try {
            t.start();
        } catch  {
            ORef.current = null;
            I();
        }
    };
    let R = ()=>{
        if (ORef.current) {
            ORef.current.stop();
        }
    };
    let onClick = ()=>{
        ARef.current.forEach((e)=>window.clearTimeout(e));
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
    let B = (e)=>{
        if (C?.id === e.id) {
            return e.text.split(/\s+/).slice(0, C.words).join(` `);
        }
        return e.text;
    };
    return <div className={[
        `ui-wa`,
        className
    ].filter(Boolean).join(` `)} data-chat={M ? `` : undefined}><style href={`ui-writing-assistant`} precedence={`default`}>{o}</style><header className={`ui-wa__head`}><div><h3 className={`ui-wa__name`}>{name}</h3><p className={`ui-wa__tagline`}>{tagline}</p></div><button type={`button`} className={`ui-wa__new`} aria-label={`New chat`} onClick={onClick} tabIndex={M ? 0 : -1}><svg viewBox={`0 0 24 24`} aria-hidden={`true`}><path d={`M12 5.5v13M5.5 12h13`}/></svg></button></header><div className={`ui-wa__panel`}><div className={`ui-wa__glow`} aria-hidden={`true`}><span className={`ui-wa__blob ui-wa__blob--pink`}/><span className={`ui-wa__blob ui-wa__blob--violet`}/><span className={`ui-wa__blob ui-wa__blob--blue`}/></div><div className={`ui-wa__body`}>{M ? <div className={`ui-wa__messages`} ref={ERef} aria-live={`polite`}>{p.map((e)=><p key={e.id} className={`ui-wa__msg ui-wa__msg--${e.role}`}>{B(e)}</p>)}{x && !C && p[p.length - 1]?.role === `user` && <p className={`ui-wa__msg ui-wa__msg--assistant ui-wa__typing`} aria-label={`Writing`}><i/><i/><i/></p>}</div> : <div className={`ui-wa__welcome`}><p className={`ui-wa__greeting`}>{greeting}</p><div className={`ui-wa__chips`}>{suggestions.map((e)=><button key={e} type={`button`} className={`ui-wa__chip`} onClick={()=>N(e)}>{e}</button>)}</div></div>}<form className={`ui-wa__row`} onSubmit={onSubmit}><div className={`ui-wa__field`} data-listening={y ? `` : undefined}><textarea ref={DRef} rows={1} value={y ? _ : h} readOnly={y} onChange={(e)=>setH(e.target.value)} onKeyDown={(e)=>{
        if (e.key === `Enter` && !e.shiftKey && !e.nativeEvent.isComposing) {
            e.preventDefault();
            N(h);
        }
    }} placeholder={y ? `Listening…` : placeholder} aria-label={`Message`}/>{h && !y && <button type={`submit`} className={`ui-wa__send`} aria-label={`Send`} disabled={x}><svg viewBox={`0 0 24 24`} aria-hidden={`true`}><path d={`M12 18.5v-13M6.5 11 12 5.5l5.5 5.5`}/></svg></button>}</div><button type={`button`} className={`ui-wa__mic`} data-listening={y ? `` : undefined} aria-pressed={y} aria-label={y ? `Stop dictation` : `Dictate`} onClick={y ? R : L} disabled={x && !y}><span className={`ui-wa__pulse`} aria-hidden={`true`}/>{y ? <span className={`ui-wa__wave`} aria-hidden={`true`}><i/><i/><i/></span> : <svg viewBox={`0 0 24 24`} aria-hidden={`true`}><path d={`M12 3.5a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0v-5a3 3 0 0 1 3-3ZM6 11.5a6 6 0 0 0 12 0M12 17.5v3`}/></svg>}</button></form></div></div></div>;
}
var o = `.ui-wa{--ui-wa-card: #ffffff;--ui-wa-panel: #fbfbfb;--ui-wa-line: #ececec;--ui-wa-ink: #171717;--ui-wa-text: #404040;--ui-wa-muted: #8f8f8f;--ui-wa-chip: rgba(0, 0, 0, 0.055);--ui-wa-chip-hover: rgba(0, 0, 0, 0.09);--ui-wa-field: #ffffff;--ui-wa-focus-line: #d4d4d4;--ui-wa-user: rgba(0, 0, 0, 0.06);--ui-wa-assistant: rgba(255, 255, 255, 0.85);--ui-wa-pink: #ec4899;--ui-wa-violet: #8b5cf6;--ui-wa-blue: #2f6bff;--ui-wa-glow: 0.28;--ui-wa-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 12px 32px rgba(0, 0, 0, 0.06);--ui-wa-ease: cubic-bezier(0.22, 1, 0.36, 1);width: 100%;max-width: 380px;padding: 8px;border: 1px solid var(--ui-wa-line);border-radius: 32px;background: var(--ui-wa-card);box-shadow: var(--ui-wa-shadow);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-wa-ink);-webkit-font-smoothing: antialiased}.ui-wa *, .ui-wa *::before, .ui-wa *::after{box-sizing: border-box}.ui-wa button{font: inherit;color: inherit;margin: 0;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-wa :focus-visible:not(textarea){outline: 2px solid var(--ui-wa-blue);outline-offset: 2px}.ui-wa__head{display: flex;align-items: flex-start;justify-content: space-between;padding: 18px 18px 16px}.ui-wa__name{margin: 0;font-size: 20px;font-weight: 500;letter-spacing: -0.02em}.ui-wa__tagline{margin: 3px 0 0;font-size: 13px;color: var(--ui-wa-muted)}.ui-wa__new{display: grid;place-items: center;width: 30px;height: 30px;padding: 0;border: 0;border-radius: 50%;background: var(--ui-wa-chip);color: var(--ui-wa-text) !important;opacity: 0;transform: scale(0.8);pointer-events: none;transition: opacity 220ms ease, transform 320ms var(--ui-wa-ease), background-color 160ms ease}.ui-wa[data-chat] .ui-wa__new{opacity: 1;transform: none;pointer-events: auto}.ui-wa__new:hover{background: var(--ui-wa-chip-hover)}.ui-wa__new svg{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round}.ui-wa__panel{position: relative;overflow: hidden;border-radius: 24px;background: var(--ui-wa-panel);box-shadow: inset 0 0 0 1px var(--ui-wa-line)}.ui-wa__glow{position: absolute;inset: 0;pointer-events: none}.ui-wa__blob{position: absolute;border-radius: 50%;filter: blur(34px);opacity: var(--ui-wa-glow);animation: ui-wa-drift-a 6s ease-in-out infinite alternate}.ui-wa__blob--pink{left: -18%;top: 46%;width: 60%;height: 42%;background: var(--ui-wa-pink)}.ui-wa__blob--violet{right: -16%;top: 36%;width: 56%;height: 44%;background: var(--ui-wa-violet);animation-name: ui-wa-drift-b;animation-duration: 7s}.ui-wa__blob--blue{left: 22%;bottom: -16%;width: 64%;height: 42%;background: var(--ui-wa-blue);animation-name: ui-wa-drift-c;animation-duration: 5.5s}.ui-wa[data-chat] .ui-wa__blob{opacity: calc(var(--ui-wa-glow) * 0.6)}.ui-wa__body{position: relative;display: flex;flex-direction: column;justify-content: flex-end;gap: 18px;height: 340px;padding: 18px 14px 14px}.ui-wa__welcome{display: grid;gap: 14px;padding: 0 4px;animation: ui-wa-in 380ms var(--ui-wa-ease) both}.ui-wa__greeting{margin: 0;font-size: 24px;font-weight: 500;line-height: 1.15;letter-spacing: -0.025em;color: var(--ui-wa-ink)}.ui-wa__chips{display: flex;flex-wrap: wrap;gap: 6px}.ui-wa__chip{height: 32px;padding: 0 13px;border: 0;border-radius: 999px;background: var(--ui-wa-chip);font-size: 13px;color: var(--ui-wa-text) !important;backdrop-filter: blur(8px);transition: background-color 160ms ease, transform 160ms ease}.ui-wa__chip:hover{background: var(--ui-wa-chip-hover)}.ui-wa__chip:active{transform: scale(0.97)}.ui-wa__messages{display: flex;flex-direction: column;gap: 8px;min-height: 0;margin: -4px -4px 0;padding: 4px;overflow-y: auto;scrollbar-width: none;-webkit-mask-image: linear-gradient(transparent, #000 18px, #000 calc(100% - 16px), transparent);mask-image: linear-gradient(transparent, #000 18px, #000 calc(100% - 16px), transparent);padding-bottom: 14px}.ui-wa__msg{max-width: 86%;margin: 0;padding: 9px 13px;font-size: 13.5px;line-height: 1.45;white-space: pre-wrap;animation: ui-wa-in 320ms var(--ui-wa-ease) both}.ui-wa__msg--user{align-self: flex-end;border-radius: 18px 18px 6px 18px;background: var(--ui-wa-user)}.ui-wa__msg--assistant{align-self: flex-start;border-radius: 18px 18px 18px 6px;background: var(--ui-wa-assistant);box-shadow: 0 0 0 1px var(--ui-wa-line);backdrop-filter: blur(10px)}.ui-wa__typing{display: inline-flex;gap: 4px;padding: 13px 14px}.ui-wa__typing i{width: 6px;height: 6px;border-radius: 50%;background: var(--ui-wa-muted);animation: ui-wa-dot 1s ease-in-out infinite}.ui-wa__typing i:nth-child(2){animation-delay: 0.15s}.ui-wa__typing i:nth-child(3){animation-delay: 0.3s}.ui-wa__row{display: flex;align-items: flex-end;gap: 8px}.ui-wa__field{position: relative;flex: 1;min-width: 0;display: flex;align-items: flex-end;gap: 8px;min-height: 54px;padding: 7px 7px 7px 20px;border-radius: 27px;background: var(--ui-wa-field);box-shadow: 0 0 0 1px var(--ui-wa-line), 0 6px 18px rgba(0, 0, 0, 0.06), inset 0 -2px 6px rgba(0, 0, 0, 0.02);transition: box-shadow 220ms ease}.ui-wa__field:focus-within{box-shadow: 0 0 0 1px var(--ui-wa-focus-line), 0 6px 18px rgba(0, 0, 0, 0.06)}.ui-wa__field textarea{flex: 1;min-width: 0;height: 40px;margin: 0;padding: 9.5px 0;border: 0;background: none;outline: none;resize: none;font: inherit;font-size: 14.5px;line-height: 21px;color: var(--ui-wa-ink);overflow-y: auto;scrollbar-width: none;-webkit-mask-image: linear-gradient(transparent, #000 9px);mask-image: linear-gradient(transparent, #000 9px)}.ui-wa__field textarea::-webkit-scrollbar{display: none}.ui-wa__field textarea::placeholder{color: var(--ui-wa-muted)}.ui-wa__field[data-listening] textarea{color: var(--ui-wa-text)}.ui-wa__send{display: grid;place-items: center;flex: none;width: 38px;height: 38px;padding: 0;border: 0;border-radius: 50%;background: var(--ui-wa-ink);color: var(--ui-wa-card) !important;animation: ui-wa-pop 280ms var(--ui-wa-ease) both}.ui-wa__send:disabled{opacity: 0.5;cursor: default}.ui-wa__send svg{width: 17px;height: 17px;fill: none;stroke: currentColor;stroke-width: 2.2;stroke-linecap: round;stroke-linejoin: round}.ui-wa__mic{position: relative;display: grid;place-items: center;flex: none;width: 54px;height: 54px;padding: 0;border: 0;border-radius: 50%;background: var(--ui-wa-field);box-shadow: 0 0 0 1px var(--ui-wa-line), 0 6px 18px rgba(0, 0, 0, 0.06);transition: transform 200ms var(--ui-wa-ease), background-color 220ms ease}.ui-wa__mic:active{transform: scale(0.95)}.ui-wa__mic:disabled{opacity: 0.6;cursor: default}.ui-wa__mic svg{position: relative;width: 22px;height: 22px;fill: none;stroke: var(--ui-wa-ink);stroke-width: 1.7;stroke-linecap: round;stroke-linejoin: round}.ui-wa__mic[data-listening]{background: var(--ui-wa-ink);box-shadow: 0 0 0 1px var(--ui-wa-ink), 0 6px 18px rgba(0, 0, 0, 0.12)}.ui-wa__pulse{position: absolute;inset: 0;border-radius: 50%;box-shadow: 0 0 0 0 color-mix(in srgb, var(--ui-wa-ink) 18%, transparent);opacity: 0}.ui-wa__mic[data-listening] .ui-wa__pulse{opacity: 1;animation: ui-wa-ring 1.6s ease-out infinite}.ui-wa__wave{position: relative;display: flex;align-items: center;gap: 3px;height: 16px}.ui-wa__wave i{width: 3px;height: 100%;border-radius: 2px;background: var(--ui-wa-card);transform: scaleY(0.35);animation: ui-wa-wave 1.1s ease-in-out infinite}.ui-wa__wave i:nth-child(2){animation-delay: -0.35s}.ui-wa__wave i:nth-child(3){animation-delay: -0.7s}@keyframes ui-wa-in{from{opacity: 0;transform: translateY(6px)}}@keyframes ui-wa-pop{from{opacity: 0;transform: scale(0.6)}}@keyframes ui-wa-ring{0%{box-shadow: 0 0 0 0 color-mix(in srgb, var(--ui-wa-ink) 16%, transparent)}100%{box-shadow: 0 0 0 12px transparent}}@keyframes ui-wa-wave{0%, 100%{transform: scaleY(0.35)}50%{transform: scaleY(1)}}@keyframes ui-wa-dot{0%, 100%{opacity: 0.3;transform: translateY(0)}50%{opacity: 1;transform: translateY(-2px)}}@keyframes ui-wa-drift-a{0%{transform: translate(0, 0) scale(1)}50%{transform: translate(55%, -22%) scale(1.25)}100%{transform: translate(20%, 14%) scale(0.85)}}@keyframes ui-wa-drift-b{0%{transform: translate(0, 0) scale(1)}50%{transform: translate(-55%, 24%) scale(0.85)}100%{transform: translate(-22%, -16%) scale(1.25)}}@keyframes ui-wa-drift-c{0%{transform: translate(0, 0) scale(1)}50%{transform: translate(-45%, -26%) scale(1.2)}100%{transform: translate(30%, -10%) scale(0.88)}}@media (prefers-reduced-motion: reduce){.ui-wa__blob, .ui-wa__welcome, .ui-wa__msg, .ui-wa__send, .ui-wa__mic[data-listening] .ui-wa__pulse, .ui-wa__wave i, .ui-wa__typing i{animation: none}.ui-wa__wave i{transform: scaleY(0.7)}}.ui-wa input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-wa textarea:focus-visible, .ui-wa [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-wa{--ui-wa-card: #232326;--ui-wa-panel: #1c1c1f;--ui-wa-line: rgba(255, 255, 255, 0.08);--ui-wa-ink: #ededed;--ui-wa-text: #c4c4c4;--ui-wa-muted: #8f8f8f;--ui-wa-chip: rgba(255, 255, 255, 0.07);--ui-wa-chip-hover: rgba(255, 255, 255, 0.11);--ui-wa-field: #2a2a2d;--ui-wa-focus-line: rgba(255, 255, 255, 0.2);--ui-wa-user: rgba(255, 255, 255, 0.08);--ui-wa-assistant: rgba(42, 42, 45, 0.85);--ui-wa-pink: #f472b6;--ui-wa-violet: #a78bfa;--ui-wa-blue: #4d82ff;--ui-wa-glow: 0.26;--ui-wa-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.3)}`;
function SComponent() {
    return <div className={`writing-assistant-demo`}><A1Component/></div>;
}
export { SComponent as default };
