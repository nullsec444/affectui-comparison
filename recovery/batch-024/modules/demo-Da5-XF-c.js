import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
import { t as N } from "./component-x-U6EJWL.js";
const r = t_1();
const i = t();
const a = {
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 1.75,
    strokeLinecap: `round`,
    strokeLinejoin: `round`
};
const OComponent = ()=><svg viewBox={`0 0 24 24`} {...a}><path d={`M12 5.5V19`}/><path d={`M18 11s-4.42-6-6-6-6 6-6 6`}/></svg>;
const SComponent = ()=><svg viewBox={`0 0 24 24`} {...a}><path d={`M18.5 12H5`}/><path d={`M13 18s6-4.42 6-6-6-6-6-6`}/></svg>;
const CComponent = ()=><svg viewBox={`0 0 24 24`} {...a}><path d={`M12 4v16M20 12H4`}/></svg>;
const LComponent = ()=><svg viewBox={`0 0 24 24`} {...a} strokeWidth={2.5}><path d={`M6 12h.01M12 12h.01M18 12h.01`}/></svg>;
const UComponent = ()=><svg viewBox={`0 0 24 24`} {...a}><path d={`M7.5 14.5c0-3.3 0-4.95 1.03-5.97C9.55 7.5 11.2 7.5 14.5 7.5s4.95 0 5.97 1.03c1.03 1.02 1.03 2.67 1.03 5.97s0 4.95-1.03 5.97c-1.02 1.03-2.67 1.03-5.97 1.03s-4.95 0-5.97-1.03C7.5 19.45 7.5 17.8 7.5 14.5Z`}/><path d={`M7.5 16.5c-1.4 0-2.1 0-2.66-.2a3 3 0 0 1-2.14-2.14c-.2-.57-.2-1.27-.2-2.66v-2c0-3.3 0-4.95 1.03-5.97C4.55 2.5 6.2 2.5 9.5 2.5h2c1.4 0 2.1 0 2.66.2a3 3 0 0 1 2.14 2.14c.2.57.2 1.27.2 2.66`}/></svg>;
const DComponent = ()=><svg viewBox={`0 0 24 24`} {...a}><path d={`M16.5 7.5S13.19 3 12 3 7.5 7.5 7.5 7.5M12 4v11`}/><path d={`M3 16.5v1.5A3 3 0 0 0 6 21h12a3 3 0 0 0 3-3v-1.5`}/></svg>;
const FComponent = ()=><svg viewBox={`0 0 24 24`} {...a}><path d={`m19.5 5.5-.62 10.03c-.16 2.56-.24 3.84-.88 4.76a4 4 0 0 1-1.2 1.13C15.84 22 14.56 22 12 22s-3.86 0-4.82-.59a4 4 0 0 1-1.2-1.13c-.64-.92-.72-2.2-.88-4.76L4.5 5.5`}/><path d={`M3 5.5h18M16.06 5.5l-.69-1.41c-.45-.94-.68-1.4-1.07-1.7a2 2 0 0 0-.27-.17C13.6 2 13.07 2 12.03 2c-1.06 0-1.6 0-2.04.23a2 2 0 0 0-.27.18c-.4.3-.62.79-1.06 1.76L8.05 5.5M9.5 16.5v-6M14.5 16.5v-6`}/></svg>;
const PComponent = ()=><svg viewBox={`0 0 24 24`} {...a}><path d={`M5 14l3.5 3.5L19 6.5`}/></svg>;
function useM(e = 1600) {
    let [t, setT] = r.useState(false);
    let iRef = r.useRef(undefined);
    r.useEffect(()=>()=>clearTimeout(iRef.current), []);
    return [
        t,
        ()=>{
            clearTimeout(iRef.current);
            setT(true);
            iRef.current = window.setTimeout(()=>setT(false), e);
        }
    ];
}
function HComponent({ children }) {
    let tRef = r.useRef(null);
    let [n, setN] = r.useState(0);
    r.useLayoutEffect(()=>{
        let e = tRef.current?.firstElementChild;
        if (!e) {
            return;
        }
        let width = e.getBoundingClientRect().width;
        if (width > n) {
            setN(width);
        }
    });
    return <span ref={tRef} className={`button-demo__slot`} style={{
        minWidth: n || undefined
    }}>{children}</span>;
}
function GComponent() {
    let [e, setE] = r.useState(`idle`);
    r.useEffect(()=>{
        if (e !== `loading`) {
            return;
        }
        let n = window.setTimeout(()=>setE(`done`), 1600);
        return ()=>clearTimeout(n);
    }, [
        e
    ]);
    return <div className={`button-demo__row button-demo__compact`}><HComponent><N variant={`ghost`} onClick={()=>setE(`idle`)}>{`Cancel`}</N></HComponent><HComponent><N variant={`secondary`} icon={e === `done` ? <PComponent/> : <DComponent/>} loading={e === `loading`} onClick={()=>setE((e)=>{
            if (e === `idle`) {
                return `loading`;
            }
            return e;
        })}>{e === `done` ? `Done` : `Upload`}</N></HComponent><HComponent><N iconRight=<OComponent/>>{`Send`}</N></HComponent></div>;
}
function Component() {
    let [e, t] = useM();
    let [a, o] = useM();
    let [g, setG] = r.useState(`idle`);
    r.useEffect(()=>{
        if (g !== `loading`) {
            return;
        }
        let e = window.setTimeout(()=>setG(`done`), 1800);
        return ()=>clearTimeout(e);
    }, [
        g
    ]);
    return <div className={`button-demo__showcase`}><section><h4>{`Styles`}</h4><div className={`button-demo__row`}><HComponent><N>{`Save changes`}</N></HComponent><HComponent><N variant={`secondary`}>{`Secondary`}</N></HComponent><HComponent><N variant={`ghost`}>{`Ghost`}</N></HComponent><HComponent><N variant={`destructive`} icon=<FComponent/>>{`Delete`}</N></HComponent></div></section><section><h4>{`Icons and sizes`}</h4><div className={`button-demo__row`}><HComponent><N variant={`secondary`} size={`sm`} icon=<CComponent/>>{`Add item`}</N></HComponent><HComponent><N iconRight=<SComponent/>>{`Continue`}</N></HComponent><HComponent><N variant={`ghost`} icon=<LComponent/> aria-label={`More options`}/></HComponent><HComponent><N variant={`secondary`} size={`lg`}>{`Large`}</N></HComponent></div></section><section><h4>{`Feedback and states`}</h4><div className={`button-demo__row`}><HComponent><N variant={`secondary`} icon={e ? <PComponent/> : <UComponent/>} onClick={t}>{e ? `Copied` : `Copy link`}</N></HComponent><HComponent><N variant={`secondary`} icon={a ? <PComponent/> : <UComponent/>} aria-label={a ? `Copied` : `Copy`} onClick={o}/></HComponent><HComponent><N variant={`secondary`} icon={g === `done` ? <PComponent/> : <DComponent/>} loading={g === `loading`} onClick={()=>setG((e)=>{
            if (e === `loading`) {
                return e;
            }
            return `loading`;
        })}>{`Upload file`}</N></HComponent><HComponent><N variant={`secondary`} disabled>{`Disabled`}</N></HComponent></div><p className={`button-demo__status`} aria-live={`polite`}>{g === `loading` ? `Uploading…` : g === `done` ? `Upload complete` : ` `}</p></section></div>;
}
function VComponent() {
    return <div className={`button-demo`}><GComponent/><Component/></div>;
}
export { VComponent as default };
