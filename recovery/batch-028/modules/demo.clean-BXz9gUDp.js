import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
const n = t_1();
const r = t();
const i = /\s+|[\p{L}\p{N}_'’]+|[^\s\p{L}\p{N}_]/gu;
const a = (e)=>/^\s+$/.test(e);
function o(original, suggested) {
    let n = original.match(i) ?? [];
    let r = suggested.match(i) ?? [];
    let o = 0;
    while(o < n.length && o < r.length && n[o] === r[o]){
        o++;
    }
    let s = 0;
    while(s < n.length - o && s < r.length - o && n[n.length - 1 - s] === r[r.length - 1 - s]){
        s++;
    }
    let c = n.slice(o, n.length - s);
    let l = r.slice(o, r.length - s);
    let c_length = c.length;
    let l_length = l.length;
    let f = n.slice(0, o).map((e)=>({
            t: 0,
            s: e
        }));
    if (c_length * l_length > 4000000) {
        c.forEach((e)=>f.push({
                t: 1,
                s: e
            }));
        l.forEach((e)=>f.push({
                t: 2,
                s: e
            }));
    } else {
        let e = l_length + 1;
        let t = new Uint16Array((c_length + 1) * e);
        for(let n = c_length - 1; n >= 0; n--){
            for(let r = l_length - 1; r >= 0; r--){
                t[n * e + r] = c[n] === l[r] ? t[(n + 1) * e + r + 1] + 1 : Math.max(t[(n + 1) * e + r], t[n * e + r + 1]);
            }
        }
        let n = 0;
        let r = 0;
        while(n < c_length && r < l_length){
            if (c[n] === l[r]) {
                f.push({
                    t: 0,
                    s: c[n]
                });
                n++;
                r++;
            } else if (t[(n + 1) * e + r] >= t[n * e + r + 1]) {
                f.push({
                    t: 1,
                    s: c[n++]
                });
            } else {
                f.push({
                    t: 2,
                    s: l[r++]
                });
            }
        }
        while(n < c_length){
            f.push({
                t: 1,
                s: c[n++]
            });
        }
        while(r < l_length){
            f.push({
                t: 2,
                s: l[r++]
            });
        }
    }
    n.slice(n.length - s).forEach((e)=>f.push({
            t: 0,
            s: e
        }));
    for(let e = 0; e < f.length; e++){
        if (f[e].t === 0 || e > 0 && f[e - 1].t !== 0) {
            continue;
        }
        let t = f[e].t;
        let n = e;
        while(n < f.length && f[n].t === t){
            n++;
        }
        if (!(n < f.length && f[n].t !== 0)) {
            while(n < f.length && f[n].t === 0 && f[n].s === f[e].s && a(f[e].s)){
                f[n] = {
                    t,
                    s: f[n].s
                };
                f[e] = {
                    t: 0,
                    s: f[e].s
                };
                e++;
                n++;
            }
            e = n - 1;
        }
    }
    let p = [];
    for (let e of f){
        let t = p[p.length - 1];
        if (e.t === 0) {
            if (t?.type === `equal`) {
                t.text += e.s;
            } else {
                p.push({
                    type: `equal`,
                    text: e.s
                });
            }
        } else {
            if (t?.type !== `change`) {
                p.push({
                    type: `change`,
                    remove: ``,
                    insert: ``
                });
            }
            let n = p[p.length - 1];
            if (e.t === 1) {
                n.remove += e.s;
            } else {
                n.insert += e.s;
            }
        }
    }
    let m = [];
    for(let e = 0; e < p.length; e++){
        let t = p[e];
        let n = m[m.length - 1];
        let r = p[e + 1];
        if (t.type === `equal` && a(t.text) && n?.type === `change` && r?.type === `change`) {
            n.remove += t.text + r.remove;
            n.insert += t.text + r.insert;
            e++;
            continue;
        }
        m.push({
            ...t
        });
    }
    let h = [];
    let g = (text)=>{
        if (!text) {
            return;
        }
        let t = h[h.length - 1];
        if (t?.type === `equal`) {
            t.text += text;
        } else {
            h.push({
                type: `equal`,
                text
            });
        }
    };
    for (let e of m){
        if (e.type === `equal`) {
            g(e.text);
            continue;
        }
        let { remove, insert } = e;
        let r = ``;
        let i = ``;
        if (remove && insert) {
            let e = remove.match(/^\s+/)?.[0] ?? ``;
            if (e && insert.startsWith(e) && e.length < remove.length && e.length < insert.length) {
                r = e;
                remove = remove.slice(e.length);
                insert = insert.slice(e.length);
            }
            let a = remove.match(/\s+$/)?.[0] ?? ``;
            if (a && insert.endsWith(a) && a.length < remove.length && a.length < insert.length) {
                i = a;
                remove = remove.slice(0, -a.length);
                insert = insert.slice(0, -a.length);
            }
        }
        g(r);
        h.push({
            type: `change`,
            remove,
            insert
        });
        g(i);
    }
    return h;
}
const s = (e)=>`${e} suggestion${e === 1 ? `` : `s`}`;
const c = (e)=>`“${e.trim()}”`;
const l = (e)=>{
    if (e.remove.trim() && e.insert.trim()) {
        return `replace ${c(e.remove)} with ${c(e.insert)}`;
    }
    if (e.insert.trim()) {
        return `add ${c(e.insert)}`;
    }
    return `remove ${c(e.remove)}`;
};
function U1Component({ original = ``, suggested = ``, changes, onChange, onDone, label, ref, className }) {
    let m = n.useMemo(()=>changes ?? o(original, suggested), [
        changes,
        original,
        suggested
    ]);
    let h = n.useMemo(()=>JSON.stringify(m), [
        m
    ]);
    let list = n.useMemo(()=>{
        let e = [];
        m.forEach((t, seg)=>{
            if (t.type === `change`) {
                e.push({
                    seg,
                    remove: t.remove,
                    insert: t.insert
                });
            }
        });
        return e;
    }, [
        m
    ]);
    let [_, set_] = n.useState({});
    let [y, setY] = n.useState([]);
    let [x, setX] = n.useState(null);
    let [C, setC] = n.useState(null);
    let [T, setT] = n.useState(null);
    let [D, setD] = n.useState(``);
    let [k, setK] = n.useState(h);
    if (k !== h) {
        setK(h);
        set_({});
        setY([]);
        setX(null);
        setC(null);
        setT(null);
    }
    let jRef = n.useRef(null);
    let MRef = n.useRef(null);
    let NRef = n.useRef(null);
    let PRef = n.useRef(null);
    let FRef = n.useRef([]);
    let IRef = n.useRef(0);
    let LRef = n.useRef(null);
    let RRef = n.useRef(null);
    let zRef = n.useRef({
        onChange,
        onDone
    });
    zRef.current = {
        onChange,
        onDone
    };
    let pending = list.map((e, t)=>t).filter((e)=>!_[e]);
    let inert = list.length > 0 && pending.length === 0;
    let H = (e)=>m.map((t, n)=>{
            if (t.type === `equal`) {
                return t.text;
            }
            if (e[list.findIndex((e)=>e.seg === n)] === `accepted`) {
                return t.insert;
            }
            return t.remove;
        }).join(``);
    let URef = n.useRef({
        decisions: _,
        history: y,
        list,
        pending
    });
    URef.current = {
        decisions: _,
        history: y,
        list,
        pending
    };
    let W = (e, t, n = false)=>{
        let { decisions, list } = URef.current;
        let a = e.filter((e)=>e >= 0 && e < list.length && !decisions[e]);
        if (!a.length) {
            return;
        }
        let o = {
            ...decisions
        };
        a.forEach((e)=>o[e] = t);
        let c = list.length - Object.keys(o).length;
        set_(o);
        setY((e)=>[
                ...e,
                a
            ]);
        setT(null);
        RRef.current = Math.max(...a);
        let u = t === `accepted` ? `Accepted` : `Rejected`;
        let d = a.length === 1 ? l(list[a[0]]).replace(/^./, (e)=>e.toUpperCase()) : `${a.length} suggestions`;
        setD(`${u}: ${d}. ${c ? `${s(c)} left.` : `All changes reviewed.`}`);
        if (n) {
            let e = Math.max(...a);
            let t = list.map((e, t)=>t).filter((e)=>!o[e]);
            LRef.current = c ? t.find((t)=>t > e) ?? t[0] : `undo`;
        }
        let f = H(o);
        zRef.current.onChange?.(f);
        if (!c) {
            zRef.current.onDone?.(f);
        }
    };
    let G = (e = false)=>{
        let { decisions, history } = URef.current;
        let r = history[history.length - 1];
        if (!r) {
            return;
        }
        let i = {
            ...decisions
        };
        r.forEach((e)=>delete i[e]);
        set_(i);
        setY(history.slice(0, -1));
        setD(`Undone. ${s(URef.current.list.length - Object.keys(i).length)} left.`);
        if (e) {
            LRef.current = Math.min(...r);
        }
        zRef.current.onChange?.(H(i));
    };
    let reset = ()=>{
        set_({});
        setY([]);
        setT(null);
        setX(null);
        setD(``);
        RRef.current = null;
    };
    n.useImperativeHandle(ref, ()=>({
            highlight: (e)=>setT(e),
            accept: (e)=>W([
                    e
                ], `accepted`),
            reject: (e)=>W([
                    e
                ], `rejected`),
            acceptAll: ()=>W(URef.current.pending, `accepted`),
            rejectAll: ()=>W(URef.current.pending, `rejected`),
            undo: ()=>G(),
            reset
        }));
    n.useLayoutEffect(()=>{
        let LRef_current = LRef.current;
        if (LRef_current !== null) {
            LRef.current = null;
            if (LRef_current === `undo`) {
                PRef.current?.focus();
            } else {
                FRef.current[LRef_current]?.focus();
            }
        }
    }, [
        _
    ]);
    let q = [
        x,
        C,
        T
    ].find((e)=>e !== null && !_[e] && e < list.length) ?? null;
    n.useEffect(()=>{
        if (q !== null) {
            RRef.current = q;
        }
    }, [
        q
    ]);
    let J = (e)=>{
        let pending = URef.current.pending;
        if (!pending.length) {
            return;
        }
        let n = q ?? RRef.current ?? (e === 1 ? -1 : Infinity);
        let r = e === 1 ? pending.find((e)=>e > n) ?? pending[0] : [
            ...pending
        ].reverse().find((e)=>e < n) ?? pending[pending.length - 1];
        window.clearTimeout(IRef.current);
        setX(null);
        setT(r);
        RRef.current = r;
        let i = FRef.current[r];
        if (!i) {
            return;
        }
        if (C !== null) {
            i.focus({
                preventScroll: true
            });
        }
        let a = window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;
        i.scrollIntoView({
            block: `nearest`,
            inline: `nearest`,
            behavior: a ? `auto` : `smooth`
        });
    };
    n.useEffect(()=>{
        if (T === null) {
            return;
        }
        let e = (e)=>{
            if (!jRef.current?.contains(e.target)) {
                setT(null);
            }
        };
        document.addEventListener(`pointerdown`, e);
        return ()=>document.removeEventListener(`pointerdown`, e);
    }, [
        T
    ]);
    let [Y, setY_1] = n.useState(null);
    let XRef = n.useRef(false);
    n.useLayoutEffect(()=>{
        let e = ()=>{
            let MRef_current = MRef.current;
            let NRef_current = NRef.current;
            let n = q === null ? null : FRef.current[q];
            if (!MRef_current || !NRef_current || !n) {
                return;
            }
            let r = MRef_current.getBoundingClientRect();
            let i = r.width ? MRef_current.offsetWidth / r.width : 1;
            let a = n.getClientRects()[0] ?? n.getBoundingClientRect();
            let t_offsetWidth = NRef_current.offsetWidth;
            let t_offsetHeight = NRef_current.offsetHeight;
            let c = (a.left - r.left + a.width / 2) * i;
            let left = Math.min(Math.max(c - t_offsetWidth / 2, 8), Math.max(8, MRef_current.offsetWidth - t_offsetWidth - 8));
            let top = (a.top - r.top) * i - t_offsetHeight - 6;
            setY_1({
                left,
                top,
                snap: !XRef.current
            });
            XRef.current = true;
        };
        if (q === null) {
            XRef.current = false;
            return;
        }
        e();
        let t = new ResizeObserver(e);
        if (MRef.current) {
            t.observe(MRef.current);
        }
        return ()=>t.disconnect();
    }, [
        q,
        _
    ]);
    let Z = (e)=>{
        window.clearTimeout(IRef.current);
        setX(e);
    };
    let onMouseLeave = ()=>{
        window.clearTimeout(IRef.current);
        IRef.current = window.setTimeout(()=>setX(null), 140);
    };
    n.useEffect(()=>()=>window.clearTimeout(IRef.current), []);
    let te = (e, t)=>{
        if (e.metaKey || e.ctrlKey || e.altKey) {
            return;
        }
        let n = e.key.toLowerCase();
        if (n === `y` || n === `enter`) {
            e.preventDefault();
            W([
                t
            ], `accepted`, true);
        } else if (n === `n` || n === `backspace` || n === `delete`) {
            e.preventDefault();
            W([
                t
            ], `rejected`, true);
        } else if (n === `escape`) {
            e.currentTarget.blur();
        }
    };
    let g_length = list.length;
    let $ = -1;
    return <div ref={jRef} className={[
        `ui-dfc`,
        className
    ].filter(Boolean).join(` `)} data-done={inert || undefined} onKeyDown={(e)=>{
        if (e.key === `Escape` && T !== null) {
            setT(null);
        }
    }}><style href={`ui-inline-diff-clean`} precedence={`default`}>{d}</style><div ref={MRef} className={`ui-dfc__card`}><div className={`ui-dfc__body`}>{label && <div className={`ui-dfc__label`}><svg viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M8 1.75c.3 2.9 1.35 3.95 4.25 4.25-2.9.3-3.95 1.35-4.25 4.25C7.7 7.35 6.65 6.3 3.75 6 6.65 5.7 7.7 4.65 8 1.75Z`}/><path d={`M12.5 10.25c.15 1.25.6 1.7 1.75 1.75-1.15.15-1.6.6-1.75 1.75-.15-1.15-.6-1.6-1.75-1.75 1.15-.05 1.6-.5 1.75-1.75Z`}/></svg><span>{label}</span></div>}<p className={`ui-dfc__text`}>{m.map((e, key)=>{
        if (e.type === `equal`) {
            return <span key={key}>{e.text}</span>;
        }
        $++;
        let n = $;
        let i = _[n] ?? `pending`;
        let a = i === `pending`;
        return <span key={key} ref={(e)=>{
            FRef.current[n] = e;
        }} className={`ui-dfc__chg`} data-state={i} data-active={q === n || undefined} tabIndex={a ? 0 : undefined} role={a ? `button` : undefined} aria-label={a ? `Suggestion ${n + 1} of ${g_length}: ${l(e)}. Press Y to accept, N to reject` : undefined} onKeyDown={a ? (e)=>te(e, n) : undefined} onFocus={()=>setC(n)} onBlur={()=>setC((e)=>{
                if (e === n) {
                    return null;
                }
                return e;
            })} onMouseEnter={()=>Z(n)} onMouseLeave={onMouseLeave}>{e.remove && <del className={`ui-dfc__del`} aria-hidden={i === `accepted` || undefined}>{e.remove}</del>}{e.insert && <ins className={`ui-dfc__ins`} aria-hidden={i === `rejected` || undefined}>{e.insert}</ins>}</span>;
    })}</p></div><div className={`ui-dfc__foot`}><div className={`ui-dfc__bar`}><div className={`ui-dfc__layer`} data-show={!inert || undefined} inert={inert} aria-hidden={inert || undefined}><span className={`ui-dfc__count`}><span className={`ui-dfc__num`}>{pending.length}</span><span className={`ui-dfc__word`}>{pending.length === 1 ? `suggestion` : `suggestions`}</span></span><span className={`ui-dfc__actions`}><span className={`ui-dfc__nav`} onMouseDown={(e)=>e.preventDefault()}><button type={`button`} className={`ui-dfc__icon`} onClick={()=>J(-1)} disabled={!pending.length} aria-label={`Previous suggestion`}><svg viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M10 12.5 5.5 8 10 3.5`}/></svg></button><button type={`button`} className={`ui-dfc__icon`} onClick={()=>J(1)} disabled={!pending.length} aria-label={`Next suggestion`}><svg viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M6 3.5 10.5 8 6 12.5`}/></svg></button></span><button type={`button`} className={`ui-dfc__btn`} onClick={()=>W(pending, `rejected`)} disabled={!pending.length}>{`Reject all`}</button><button type={`button`} className={`ui-dfc__btn ui-dfc__btn--primary`} onClick={()=>W(pending, `accepted`)} disabled={!pending.length}>{`Accept all`}</button></span></div><div className={`ui-dfc__layer`} data-show={inert || undefined} inert={!inert} aria-hidden={!inert || undefined}><span className={`ui-dfc__count ui-dfc__count--done`}><svg className={`ui-dfc__ok`} viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M3.75 8.4 6.6 11.1 12.25 5`} pathLength={1}/></svg>{`All changes reviewed`}</span><button ref={PRef} type={`button`} className={`ui-dfc__btn`} onClick={()=>G(true)} disabled={!y.length}><svg viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M5.5 4 2.75 6.75 5.5 9.5`}/><path d={`M3 6.75h6.5a3.75 3.75 0 0 1 0 7.5H7.5`}/></svg>{`Undo`}</button></div></div></div><div ref={NRef} className={`ui-dfc__pop`} data-open={q !== null || undefined} data-snap={Y?.snap || undefined} style={Y ? {
        left: Y.left,
        top: Y.top
    } : undefined} role={`group`} aria-label={`Review suggestion`} aria-hidden={q === null || undefined} onMouseEnter={()=>q !== null && Z(q)} onMouseLeave={onMouseLeave} onMouseDown={(e)=>e.preventDefault()}><button type={`button`} tabIndex={-1} className={`ui-dfc__pbtn ui-dfc__pbtn--primary`} aria-label={`Accept suggestion`} onClick={()=>q !== null && W([
            q
        ], `accepted`, C === q)}><svg viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M3.75 8.4 6.6 11.1 12.25 5`}/></svg>{`Accept`}<kbd>{`Y`}</kbd></button><button type={`button`} tabIndex={-1} className={`ui-dfc__pbtn`} aria-label={`Reject suggestion`} onClick={()=>q !== null && W([
            q
        ], `rejected`, C === q)}><svg viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M4.5 4.5l7 7M11.5 4.5l-7 7`}/></svg>{`Reject`}<kbd>{`N`}</kbd></button></div></div><span className={`ui-dfc__sr`} role={`status`} aria-live={`polite`}>{D}</span></div>;
}
var d = `.ui-dfc{--ui-dfc-card: #ffffff;--ui-dfc-ink: rgba(0, 0, 0, 0.88);--ui-dfc-strong: #000000;--ui-dfc-text: rgba(0, 0, 0, 0.61);--ui-dfc-muted: rgba(0, 0, 0, 0.45);--ui-dfc-faint: rgba(0, 0, 0, 0.27);--ui-dfc-icon: rgba(0, 0, 0, 0.447);--ui-dfc-line: rgba(0, 0, 0, 0.06);--ui-dfc-fill: rgba(0, 0, 0, 0.06);--ui-dfc-wash: rgba(0, 0, 0, 0.03);--ui-dfc-accent: rgba(0, 96, 226, 0.765);--ui-dfc-add: rgba(26, 154, 82, 0.1);--ui-dfc-add-strong: rgba(26, 154, 82, 0.16);--ui-dfc-del: rgba(229, 72, 77, 0.08);--ui-dfc-del-strong: rgba(229, 72, 77, 0.14);--ui-dfc-del-ink: rgba(0, 0, 0, 0.45);--ui-dfc-strike: rgba(229, 72, 77, 0.6);--ui-dfc-ok: #1a9a52;--ui-dfc-primary: rgba(0, 0, 0, 0.88);--ui-dfc-primary-ink: #fcfcfc;--ui-dfc-primary-kbd: rgba(255, 255, 255, 0.16);--ui-dfc-primary-kbd-ink: rgba(255, 255, 255, 0.66);--ui-dfc-secondary-hover: #fafafa;--ui-dfc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-dfc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-dfc-focus: rgba(0, 96, 226, 0.35);--ui-dfc-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;display: grid;width: 100%;min-width: 0;color: var(--ui-dfc-ink);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;-webkit-font-smoothing: antialiased;text-align: left}.ui-dfc *, .ui-dfc *::before, .ui-dfc *::after{box-sizing: border-box}:where(.ui-dfc) button{appearance: none;margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}:where(.ui-dfc) svg{display: block;flex: none}.ui-dfc__card{position: relative;min-width: 0;border-radius: 10px;background: var(--ui-dfc-card);box-shadow: var(--ui-dfc-shadow);container: ui-dfc-card / inline-size}.ui-dfc__label{display: flex;align-items: center;gap: 6px;min-width: 0;margin: 0 0 8px;color: var(--ui-dfc-text);font-size: 12px;line-height: 16px}.ui-dfc__label span{overflow: hidden;text-overflow: ellipsis;white-space: nowrap}.ui-dfc__label svg{width: 16px;height: 16px;fill: var(--ui-dfc-accent)}.ui-dfc__body{padding: 16px 16px 18px}.ui-dfc__text{margin: 0;color: var(--ui-dfc-ink);font-size: 13px;line-height: 22px;white-space: pre-line;overflow-wrap: anywhere}.ui-dfc__chg{border-radius: 4px;cursor: pointer;scroll-margin: 64px 0 72px}.ui-dfc__chg:not([data-state="pending"]){cursor: auto}.ui-dfc__chg:focus{outline: none}.ui-dfc__chg:focus-visible{outline: 2px solid var(--ui-dfc-focus);outline-offset: 1px}.ui-dfc__del, .ui-dfc__ins{padding: 1px 2px;border-radius: 4px;-webkit-box-decoration-break: clone;box-decoration-break: clone;font-size: 1em;transition: background-color 360ms ease, color 360ms ease, text-decoration-color 300ms ease, font-size 460ms var(--ui-dfc-ease), padding 460ms var(--ui-dfc-ease), margin 460ms var(--ui-dfc-ease), opacity 300ms ease}.ui-dfc__del{background: var(--ui-dfc-del);color: var(--ui-dfc-del-ink);text-decoration: line-through;text-decoration-color: var(--ui-dfc-strike);text-decoration-thickness: 1px}.ui-dfc__ins{background: var(--ui-dfc-add);color: var(--ui-dfc-ink);text-decoration: none}.ui-dfc__del + .ui-dfc__ins{margin-left: 3px}.ui-dfc__chg[data-active] .ui-dfc__del{background: var(--ui-dfc-del-strong)}.ui-dfc__chg[data-active] .ui-dfc__ins{background: var(--ui-dfc-add-strong)}.ui-dfc__chg[data-state="accepted"] .ui-dfc__del, .ui-dfc__chg[data-state="rejected"] .ui-dfc__ins{font-size: 0;padding: 0;margin: 0;opacity: 0}.ui-dfc__chg[data-state="accepted"] .ui-dfc__ins, .ui-dfc__chg[data-state="rejected"] .ui-dfc__del{padding: 0;margin: 0;background: transparent;color: inherit;text-decoration-color: transparent}.ui-dfc__foot{display: grid;align-items: center;min-height: 44px;padding: 8px 8px 8px 16px;border-top: 0.5px solid var(--ui-dfc-line)}.ui-dfc__bar{display: grid}.ui-dfc__layer{grid-area: 1 / 1;display: flex;flex-wrap: wrap;align-items: center;justify-content: space-between;gap: 8px;min-width: 0;opacity: 0;visibility: hidden;transform: translateY(4px);filter: blur(2px);transition: opacity 260ms ease, transform 420ms var(--ui-dfc-ease), filter 260ms ease, visibility 0s 420ms}.ui-dfc__layer[data-show]{opacity: 1;visibility: visible;transform: none;filter: none;transition: opacity 320ms ease 80ms, transform 460ms var(--ui-dfc-ease) 80ms, filter 320ms ease 80ms, visibility 0s}@container ui-dfc-card (max-width: 400px){.ui-dfc__word{position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap}}.ui-dfc__count{display: inline-flex;align-items: center;gap: 8px;color: var(--ui-dfc-text);font-size: 13px;line-height: 20px;white-space: nowrap}.ui-dfc__count--done{gap: 6px;color: var(--ui-dfc-ink);font-weight: 500}.ui-dfc__num{display: inline-grid;place-items: center;min-width: 20px;height: 20px;padding: 0 6px;border-radius: 5px;background: var(--ui-dfc-fill);color: var(--ui-dfc-ink);font-size: 12px;font-weight: 500;font-variant-numeric: tabular-nums}.ui-dfc__ok{width: 16px;height: 16px;fill: none;stroke: var(--ui-dfc-ok);stroke-width: 1.5;stroke-linecap: round;stroke-linejoin: round;stroke-dasharray: 1;stroke-dashoffset: 1}.ui-dfc[data-done] .ui-dfc__ok{animation: ui-dfc-draw 420ms var(--ui-dfc-ease) 220ms forwards}.ui-dfc__actions{display: inline-flex;align-items: center;gap: 8px;margin-left: auto}.ui-dfc__nav{display: inline-flex;gap: 2px}.ui-dfc__btn, .ui-dfc__icon{display: inline-flex;align-items: center;justify-content: center;gap: 6px;height: 28px;border-radius: 6px;font-size: 13px;font-weight: 500;line-height: 20px;white-space: nowrap;transition: background-color 160ms ease, color 160ms ease, opacity 160ms ease, transform 160ms var(--ui-dfc-ease)}.ui-dfc__btn{padding: 0 10px;background: var(--ui-dfc-card);box-shadow: var(--ui-dfc-shadow);color: var(--ui-dfc-strong)}.ui-dfc__btn:has(svg){padding: 0 10px 0 8px}.ui-dfc__icon{width: 28px;color: var(--ui-dfc-icon)}.ui-dfc__btn svg, .ui-dfc__icon svg, .ui-dfc__pbtn svg{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-dfc__btn svg{color: var(--ui-dfc-icon)}.ui-dfc__btn:hover:not(:disabled){background: var(--ui-dfc-secondary-hover)}.ui-dfc__icon:hover:not(:disabled){background: var(--ui-dfc-wash);color: var(--ui-dfc-ink)}.ui-dfc__btn--primary{background: var(--ui-dfc-primary);color: var(--ui-dfc-primary-ink);box-shadow: none}.ui-dfc__btn--primary:hover:not(:disabled){background: var(--ui-dfc-primary);opacity: 0.9}.ui-dfc__btn:active:not(:disabled), .ui-dfc__icon:active:not(:disabled){transform: scale(0.97)}.ui-dfc__btn:disabled, .ui-dfc__icon:disabled{opacity: 0.4;cursor: default}.ui-dfc__btn:focus-visible, .ui-dfc__icon:focus-visible{outline: 2px solid var(--ui-dfc-focus);outline-offset: 1px}.ui-dfc__pop{position: absolute;top: 0;left: 0;z-index: 2;display: flex;align-items: center;gap: 4px;padding: 4px;border-radius: 10px;background: var(--ui-dfc-card);box-shadow: var(--ui-dfc-shadow-pop);opacity: 0;visibility: hidden;transform: translateY(4px) scale(0.96);transform-origin: 50% 100%;pointer-events: none;transition: opacity 160ms ease, transform 240ms var(--ui-dfc-ease), left 90ms ease-out, top 90ms ease-out, visibility 0s 240ms}.ui-dfc__pop[data-open]{opacity: 1;visibility: visible;transform: none;pointer-events: auto;transition: opacity 160ms ease, transform 280ms var(--ui-dfc-ease), left 90ms ease-out, top 90ms ease-out, visibility 0s}.ui-dfc__pop[data-snap]{transition-property: opacity, transform, visibility}.ui-dfc__pbtn{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 6px 0 8px;border-radius: 6px;background: var(--ui-dfc-card);box-shadow: var(--ui-dfc-shadow);color: var(--ui-dfc-strong);font-size: 13px;font-weight: 500;line-height: 20px;white-space: nowrap;transition: background-color 140ms ease, opacity 140ms ease}.ui-dfc__pbtn svg{color: var(--ui-dfc-icon)}.ui-dfc__pbtn:hover{background: var(--ui-dfc-secondary-hover)}.ui-dfc__pbtn--primary{background: var(--ui-dfc-primary);box-shadow: none;color: var(--ui-dfc-primary-ink)}.ui-dfc__pbtn--primary svg{color: currentColor}.ui-dfc__pbtn--primary:hover{background: var(--ui-dfc-primary);opacity: 0.9}.ui-dfc__pbtn kbd{display: inline-grid;place-items: center;min-width: 16px;height: 16px;padding: 0 4px;border-radius: 4px;background: var(--ui-dfc-fill);color: var(--ui-dfc-muted);font: inherit;font-size: 10px;font-weight: 500;line-height: 16px}.ui-dfc__pbtn--primary kbd{background: var(--ui-dfc-primary-kbd);color: var(--ui-dfc-primary-kbd-ink)}.ui-dfc__sr{position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap;border: 0}@keyframes ui-dfc-draw{to{stroke-dashoffset: 0}}@container ui-dfc-card (max-width: 360px){.ui-dfc__nav{display: none}.ui-dfc__body{padding: 14px 14px 16px}.ui-dfc__foot{padding-left: 14px}}@media (hover: none) and (pointer: coarse){.ui-dfc__pbtn kbd{display: none}.ui-dfc__pbtn{height: 34px;padding: 0 12px 0 10px}.ui-dfc__btn{height: 34px}.ui-dfc__icon{width: 34px;height: 34px}.ui-dfc__foot{min-height: 52px}}@media (prefers-reduced-motion: reduce){.ui-dfc *, .ui-dfc *::before, .ui-dfc *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;transition-duration: 1ms !important;transition-delay: 0ms !important}.ui-dfc__layer{filter: none;transform: none}}:where(.dark, [data-theme="dark"]) .ui-dfc{--ui-dfc-card: #1c1c1e;--ui-dfc-ink: rgba(255, 255, 255, 0.9);--ui-dfc-strong: #ffffff;--ui-dfc-text: rgba(255, 255, 255, 0.62);--ui-dfc-muted: rgba(255, 255, 255, 0.46);--ui-dfc-faint: rgba(255, 255, 255, 0.3);--ui-dfc-icon: rgba(255, 255, 255, 0.5);--ui-dfc-line: rgba(255, 255, 255, 0.08);--ui-dfc-fill: rgba(255, 255, 255, 0.08);--ui-dfc-wash: rgba(255, 255, 255, 0.04);--ui-dfc-accent: #4d8dff;--ui-dfc-add: rgba(62, 194, 122, 0.14);--ui-dfc-add-strong: rgba(62, 194, 122, 0.22);--ui-dfc-del: rgba(240, 90, 90, 0.14);--ui-dfc-del-strong: rgba(240, 90, 90, 0.22);--ui-dfc-del-ink: rgba(255, 255, 255, 0.46);--ui-dfc-strike: rgba(255, 120, 120, 0.7);--ui-dfc-ok: #3ec27a;--ui-dfc-primary: rgba(255, 255, 255, 0.9);--ui-dfc-primary-ink: #1c1c1e;--ui-dfc-primary-kbd: rgba(0, 0, 0, 0.08);--ui-dfc-primary-kbd-ink: rgba(28, 28, 30, 0.6);--ui-dfc-secondary-hover: #232326;--ui-dfc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-dfc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 28px -10px rgba(0, 0, 0, 0.6);--ui-dfc-focus: rgba(77, 141, 255, 0.5)}:where(.dark, [data-theme="dark"]) .ui-dfc__pop{--ui-dfc-card: #232326;--ui-dfc-secondary-hover: #2a2a2d}`;
const original = `Hi everyone, we are very excited to announce that the new dashboard is now available for all users. It loads a lot faster than before, and you can now export any report to CSV with just a single click. Let us know what you think!`;
const suggested = `Hi everyone, the new dashboard is now live for all users. It loads twice as fast, and you can now export any report to CSV in one click. Let us know what you think!`;
const m = [
    `accept`,
    `reject`,
    `accept`,
    `accept`
];
const h = 1200;
const g = 450;
const _ = 2800;
function VComponent() {
    let eRef = n.useRef(null);
    let [t, setT] = n.useState(true);
    n.useEffect(()=>{
        if (!t) {
            return;
        }
        let n = [];
        let r = 900;
        let i = (e, t)=>n.push(window.setTimeout(t, e));
        let a = ()=>{
            m.forEach((t, n)=>{
                i(r, ()=>eRef.current?.highlight(n));
                r += h;
                i(r, ()=>{
                    if (t === `accept`) {
                        return eRef.current?.accept(n);
                    }
                    return eRef.current?.reject(n);
                });
                r += g;
            });
            r += _;
            i(r, ()=>eRef.current?.reset());
            r += 900;
            i(r, ()=>{
                r = 0;
                n.length = 0;
                a();
            });
        };
        a();
        return ()=>n.forEach((e)=>window.clearTimeout(e));
    }, [
        t
    ]);
    let a = ()=>{
        if (t) {
            setT(false);
            eRef.current?.highlight(null);
        }
    };
    return <div className={`df-demo`} onPointerDown={a} onKeyDown={a} onFocus={a} onPointerOver={(e)=>{
        if (e.target.closest?.(`.ui-dfc__chg, .ui-dfc__pop, button`)) {
            a();
        }
    }}><U1Component ref={eRef} label={`Suggested by AI · Make it shorter`} original={original} suggested={suggested}/></div>;
}
export { VComponent as default };
