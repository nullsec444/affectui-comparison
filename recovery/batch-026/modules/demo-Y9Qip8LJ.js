import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
import { t as N } from "./component-7zQPnK-d.js";
const r = t_1();
const i = t();
const original = `Hi everyone, we are very excited to announce that the new dashboard is now available for all users. It loads a lot faster than before, and you can now export any report to CSV with just a single click. Let us know what you think!`;
const suggested = `Hi everyone, the new dashboard is now live for all users. It loads twice as fast, and you can now export any report to CSV in one click. Let us know what you think!`;
const s = [
    `accept`,
    `reject`,
    `accept`,
    `accept`
];
const c = 1200;
const l = 450;
const u = 2800;
function DComponent() {
    let eRef = r.useRef(null);
    let [t, setT] = r.useState(true);
    r.useEffect(()=>{
        if (!t) {
            return;
        }
        let n = [];
        let r = 900;
        let i = (e, t)=>n.push(window.setTimeout(t, e));
        let a = ()=>{
            s.forEach((t, n)=>{
                i(r, ()=>eRef.current?.highlight(n));
                r += c;
                i(r, ()=>{
                    if (t === `accept`) {
                        return eRef.current?.accept(n);
                    }
                    return eRef.current?.reject(n);
                });
                r += l;
            });
            r += u;
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
    let f = ()=>{
        if (t) {
            setT(false);
            eRef.current?.highlight(null);
        }
    };
    return <div className={`df-demo`} onPointerDown={f} onKeyDown={f} onFocus={f} onPointerOver={(e)=>{
        if (e.target.closest?.(`.ui-df__chg, .ui-df__pop, button`)) {
            f();
        }
    }}><N ref={eRef} label={`Suggested by AI · Make it shorter`} original={original} suggested={suggested}/></div>;
}
export { DComponent as default };
