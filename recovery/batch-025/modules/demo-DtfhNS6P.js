import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
import { t as N } from "./component-D_NiR_dg.js";
const r = t_1();
const i = t();
const a = [
    `M`,
    `J`,
    `S`,
    `A`
];
function OComponent() {
    let [e, setE] = r.useState(`pending`);
    let [o, setO] = r.useState(false);
    let [c, setC] = r.useState(false);
    let uRef = r.useRef(null);
    r.useEffect(()=>{
        if (o) {
            return;
        }
        let n = [];
        if (e === `pending`) {
            if (c) {
                return;
            }
            let e = ()=>uRef.current?.querySelector(`.ui-ap__approve`);
            n.push(window.setTimeout(()=>e()?.setAttribute(`data-pressed`, ``), 2800));
            n.push(window.setTimeout(()=>{
                e()?.removeAttribute(`data-pressed`);
                e()?.click();
            }, 3000));
        } else {
            n.push(window.setTimeout(()=>setE(`pending`), 3200));
        }
        return ()=>{
            n.forEach(clearTimeout);
            uRef.current?.querySelector(`.ui-ap__approve`)?.removeAttribute(`data-pressed`);
        };
    }, [
        e,
        o,
        c
    ]);
    let d = ()=>setO(true);
    return <div className={`ap-demo`}><div ref={uRef} className={`ap-demo__chat`} onPointerDown={d} onKeyDown={d} onPointerEnter={()=>setC(true)} onPointerLeave={()=>setC(false)}><div className={`ap-demo__agent`}><span className={`ap-demo__bot`} aria-hidden={`true`}><svg viewBox={`0 0 24 24`}><path d={`M12 3.5 13.9 9l5.6 1.9-5.6 1.9L12 18.5l-1.9-5.7-5.6-1.9L10.1 9 12 3.5Z`}/></svg></span><p className={`ap-demo__msg`}>{`I drafted the October newsletter. Ready to send?`}</p></div><N title={`Send campaign email`} description={`October product update · Newsletter`} risk={`medium`} icon=<svg viewBox={`0 0 24 24`}><path d={`M4 6.5h16v11H4z`}/><path d={`m4.5 7 7.5 6 7.5-6`}/></svg> status={e} onApprove={()=>new Promise((resolve)=>window.setTimeout(resolve, 700)).then(()=>setE(`approved`))} onDeny={()=>setE(`denied`)} details={[
        {
            label: `Subject`,
            value: `What's new in October`
        },
        {
            label: `Send`,
            value: `Today, 9:00 AM`
        }
    ]}><div className={`ap-demo__people`}><span className={`ap-demo__avatars`} aria-hidden={`true`}>{a.map((e, t)=><span key={e} className={`ap-demo__avatar`} data-i={t}>{e}</span>)}</span><span className={`ap-demo__to`}><span className={`ap-demo__names`}>{`Mia, Jonas, Sara, Alex`}</span><span className={`ap-demo__more`}>{`+38 more`}</span></span></div></N>{o && e !== `pending` && <button type={`button`} className={`ap-demo__replay`} onClick={()=>setE(`pending`)}>{`Replay`}</button>}</div></div>;
}
export { OComponent as default };
