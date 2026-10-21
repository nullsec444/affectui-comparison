import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
import { t as N } from "./component-BDo0fvGw.js";
const r = t_1();
const i = t();
const AComponent = ({ d })=><svg viewBox={`0 0 24 24`} fill={`none`} stroke={`currentColor`} strokeWidth={`1.8`} strokeLinecap={`round`} strokeLinejoin={`round`} aria-hidden={`true`}><path d={d}/></svg>;
const o = [
    {
        value: `overview`,
        label: `Overview`
    },
    {
        value: `analytics`,
        label: `Analytics`
    },
    {
        value: `reports`,
        label: `Reports`
    },
    {
        value: `notifications`,
        label: `Notifications`,
        count: 3
    }
];
const s = [
    {
        value: `list`,
        label: `List`,
        icon: <AComponent d={`M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01`}/>
    },
    {
        value: `board`,
        label: `Board`,
        icon: <AComponent d={`M5 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM15 4h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z`}/>
    },
    {
        value: `calendar`,
        label: `Calendar`,
        icon: <AComponent d={`M8 3v3M16 3v3M4 9.5h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z`}/>
    }
];
const c = [
    {
        value: `monthly`,
        label: `Monthly`
    },
    {
        value: `yearly`,
        label: `Yearly`,
        badge: `Save 20%`
    }
];
const l = [
    `analytics`,
    `reports`,
    `notifications`,
    `overview`
];
function UComponent() {
    let [e, setE] = r.useState(`overview`);
    let [a, setA] = r.useState(`board`);
    let [d, setD] = r.useState(`yearly`);
    let pRef = r.useRef([]);
    let m = r.useId();
    let h = ()=>{
        pRef.current.forEach(clearTimeout);
        pRef.current = [];
    };
    r.useEffect(()=>{
        pRef.current = l.map((e, n)=>window.setTimeout(()=>setE(e), 1000 + n * 1400));
        return h;
    }, []);
    return <div className={`seg-demo`} onPointerDownCapture={h} onKeyDownCapture={h}><div className={`seg-demo__card`}><div className={`seg-demo__row`}><span className={`seg-demo__label`} id={`${m}-section`}>{`Dashboard`}</span><N options={o} value={e} onChange={setE} aria-labelledby={`${m}-section`}/></div><div className={`seg-demo__row`}><span className={`seg-demo__label`} id={`${m}-view`}>{`Layout`}</span><N options={s} value={a} onChange={setA} size={`sm`} aria-labelledby={`${m}-view`}/></div><div className={`seg-demo__row`}><span className={`seg-demo__label`} id={`${m}-billing`}>{`Billing`}</span><N options={c} value={d} onChange={setD} variant={`underline`} aria-labelledby={`${m}-billing`}/></div></div></div>;
}
export { UComponent as default };
