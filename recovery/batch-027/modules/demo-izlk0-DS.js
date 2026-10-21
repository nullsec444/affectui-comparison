import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
import { t as N } from "./component-DxL4SVuQ.js";
const r = t_1();
const i = t();
const periods = [
    {
        id: `month`,
        label: `This month`
    },
    {
        id: `last`,
        label: `Last month`
    },
    {
        id: `7d`,
        label: `7 days`
    }
];
const o = new Intl.DateTimeFormat(`en-US`, {
    month: `short`,
    day: `numeric`
});
const s = (e, t)=>new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
function c(e, length_1, n, r, length = length_1) {
    let a = r;
    let c = ()=>((a = a * 16807 % 2147483647) - 1) / 2147483646;
    let l = Array.from({
        length: length_1
    }, (n, r)=>{
        let i = s(e, r).getDay();
        return (i === 0 || i === 6 ? 0.45 : 1) * (0.7 + c() * 0.6) * (1 + r / length_1 / 3);
    });
    let u = l.reduce((acc, item)=>acc + item, 0);
    let d = l.map((e)=>Math.round(e / u * n));
    d[d.length - 1] += n - d.reduce((acc, item)=>acc + item, 0);
    return Array.from({
        length
    }, (n, r)=>({
            label: o.format(s(e, r)),
            value: r < length_1 ? d[r] : null
        }));
}
const l = {
    month: {
        used: [
            {
                label: `Chat`,
                value: 3980
            },
            {
                label: `Search`,
                value: 1640
            },
            {
                label: `Image`,
                value: 1120
            },
            {
                label: `API`,
                value: 680
            }
        ],
        limits: [
            {
                label: `Seats`,
                used: 8,
                total: 10
            },
            {
                label: `Storage`,
                used: 3.2,
                total: 5,
                unit: `GB`
            },
            {
                label: `Projects`,
                used: 12,
                total: null
            }
        ],
        days: (e)=>c(s(e, -21), 22, 7420, 11, 30)
    },
    last: {
        used: [
            {
                label: `Chat`,
                value: 5210
            },
            {
                label: `Search`,
                value: 2140
            },
            {
                label: `Image`,
                value: 1690
            },
            {
                label: `API`,
                value: 960
            }
        ],
        limits: [
            {
                label: `Seats`,
                used: 10,
                total: 10
            },
            {
                label: `Storage`,
                used: 2.9,
                total: 5,
                unit: `GB`
            },
            {
                label: `Projects`,
                used: 11,
                total: null
            }
        ],
        days: (e)=>c(s(e, -51), 30, 10000, 29)
    },
    "7d": {
        used: [
            {
                label: `Chat`,
                value: 1260
            },
            {
                label: `Search`,
                value: 540
            },
            {
                label: `API`,
                value: 340
            }
        ],
        limits: [
            {
                label: `Seats`,
                used: 8,
                total: 10
            },
            {
                label: `Storage`,
                used: 3.2,
                total: 5,
                unit: `GB`
            },
            {
                label: `Projects`,
                used: 12,
                total: null
            }
        ],
        days: (e)=>c(s(e, -6), 7, 2140, 5)
    }
};
function UComponent() {
    let [e, setE] = r.useState(`month`);
    let oRef = r.useRef(false);
    let c = r.useMemo(()=>{
        let e = new Date;
        return new Date(e.getFullYear(), e.getMonth(), e.getDate());
    }, []);
    let daily = r.useMemo(()=>l[e].days(c), [
        e,
        c
    ]);
    r.useEffect(()=>{
        let e = [
            `last`,
            `7d`,
            `month`
        ].map((e, n)=>window.setTimeout(()=>!oRef.current && setE(e), 3600 + n * 3200));
        return ()=>e.forEach(clearTimeout);
    }, []);
    return <div className={`usage-demo`} onPointerDown={()=>oRef.current = true} onKeyDown={()=>oRef.current = true}><N title={`Acme AI`} plan={`Pro plan`} total={10000} used={l[e].used} limits={l[e].limits} daily={daily} periods={periods} period={e} onPeriodChange={setE} resetAt={s(c, 9)} onUpgrade={()=>{}}/></div>;
}
export { UComponent as default };
