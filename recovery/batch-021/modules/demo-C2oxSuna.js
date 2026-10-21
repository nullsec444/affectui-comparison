import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
import { n as N, t as R } from "./component-CA_4LgO0.js";
const i = t_1();
const a = t();
const o = [
    0,
    1500,
    2700,
    4300,
    5400,
    6700,
    8000
];
const s = 11500;
const c = {
    results: [
        {
            title: `HubSpot Sales Hub pricing`,
            url: `https://www.hubspot.com/pricing/sales`,
            price_per_seat: 90
        },
        {
            title: `Pipedrive plans and pricing`,
            url: `https://www.pipedrive.com/en/pricing`,
            price_per_seat: 49
        },
        {
            title: `Attio pricing`,
            url: `https://attio.com/pricing`,
            price_per_seat: 59
        },
        {
            title: `Salesforce Starter Suite`,
            url: `https://www.salesforce.com/sales/pricing`,
            price_per_seat: 25
        },
        {
            title: `Close CRM pricing`,
            url: `https://www.close.com/pricing`,
            price_per_seat: 49
        }
    ],
    total: 5,
    cached: false
};
function LComponent() {
    let [e, setE] = i.useState(0);
    let [l, setL] = i.useState(0);
    let [open, setOpen] = i.useState(true);
    let gRef = i.useRef(false);
    i.useEffect(()=>{
        gRef.current = false;
        setL(0);
        setOpen(true);
        let e = o.slice(1).map((e, t)=>window.setTimeout(()=>setL((e)=>Math.max(e, t + 1)), e));
        e.push(window.setTimeout(()=>!gRef.current && setOpen(false), o[6]));
        e.push(window.setTimeout(()=>!gRef.current && setE((e)=>e + 1), s));
        return ()=>e.forEach(clearTimeout);
    }, [
        e
    ]);
    let status = l === 2 ? `error` : l >= 4 ? `success` : `running`;
    return <div className={`tc-demo`}><div className={`tc-demo__chat`}><p className={`tc-demo__you`}>{`Compare CRM pricing for our 10-person team and check open deals.`}</p><N key={e} open={open} onOpenChange={(e)=>{
        gRef.current = true;
        setOpen(e);
    }}><R name={`search_web`} icon=<UComponent/> status={l >= 1 ? `success` : `running`} summary={l >= 1 ? `Searched the web for 'CRM pricing 2026'` : `Searching the web for 'CRM pricing 2026'`} args={{
        query: `CRM pricing 2026 small sales team`,
        max_results: 5
    }} result={l >= 1 ? c : undefined}/>{l >= 1 && <R name={`fetch_page`} icon=<DComponent/> status={status} summary={status === `success` ? `Read hubspot.com/pricing` : `Reading hubspot.com/pricing`} args={{
        url: `https://www.hubspot.com/pricing/sales`,
        timeout_ms: 8000
    }} result={status === `success` ? {
        status: 200,
        title: `Sales Hub Pricing`,
        words: 2140
    } : undefined} error={`Request timed out after 8s – hubspot.com didn't respond.`} onRetry={()=>setL((e)=>Math.max(e, 3))}/>}{l >= 4 && <R name={`crm.list_deals`} icon=<FComponent/> status={l >= 5 ? `success` : `running`} summary={l >= 5 ? `Found 4 open deals in negotiation` : `Looking up open deals`} args={{
        stage: `negotiation`,
        owner: `me`,
        limit: 10
    }} result={l >= 5 ? {
        count: 4,
        deals: [
            {
                name: `Northwind`,
                value: 18400
            },
            {
                name: `Globex`,
                value: 9600
            }
        ]
    } : undefined}/>}</N></div></div>;
}
function UComponent() {
    return <svg viewBox={`0 0 16 16`}><circle cx={`7`} cy={`7`} r={`4.25`}/><path d={`m10.25 10.25 3 3`}/></svg>;
}
function DComponent() {
    return <svg viewBox={`0 0 16 16`}><path d={`M4 2.75h5l3 3v7.5H4z`}/><path d={`M9 2.75v3h3M6 9h4M6 11h3`}/></svg>;
}
function FComponent() {
    return <svg viewBox={`0 0 16 16`}><ellipse cx={`8`} cy={`4`} rx={`4.75`} ry={`1.75`}/><path d={`M3.25 4v8c0 .97 2.13 1.75 4.75 1.75s4.75-.78 4.75-1.75V4M3.25 8c0 .97 2.13 1.75 4.75 1.75S12.75 8.97 12.75 8`}/></svg>;
}
export { LComponent as default };
