import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
import { t as N } from "./component-CabyG3jS.js";
const r = t_1();
const i = t();
const a = [
    {
        id: `revenue`,
        title: `Pull Q3 revenue and ARR`,
        detail: `Monthly revenue, ARR and net retention`,
        tool: `stripe.query`
    },
    {
        id: `launches`,
        title: `Summarize product launches`,
        detail: `Shipped projects and adoption`,
        tool: `linear.search`
    },
    {
        id: `slides`,
        title: `Build the KPI slides`,
        detail: `Six charts in the board template`,
        tool: `slides.create`
    },
    {
        id: `memo`,
        title: `Draft the board memo`,
        detail: `One page, wins, risks and asks`,
        tool: `docs.write`
    },
    {
        id: `email`,
        title: `Send the draft to Maya for review`,
        tool: `gmail.draft`
    }
];
const o = {
    revenue: 1300,
    launches: 1100,
    slides: 1400,
    memo: 1250,
    email: 900
};
const s = `slides`;
function CComponent() {
    let [steps, setSteps] = r.useState(a);
    let [c, setC] = r.useState(`draft`);
    let uRef = r.useRef(null);
    let dRef = r.useRef(true);
    let fRef = r.useRef([]);
    let pRef = r.useRef([]);
    let mRef = r.useRef(c);
    mRef.current = c;
    let hRef = r.useRef(true);
    let g = (e, t, n)=>{
        e.current.push(window.setTimeout(t, n));
    };
    let _ = (e)=>{
        e.current.forEach((e)=>window.clearTimeout(e));
        e.current = [];
    };
    let v = (e)=>uRef.current?.querySelector(e)?.click();
    let y = (e, n)=>setSteps((t)=>t.map((t)=>{
                if (t.id === e) {
                    return {
                        ...t,
                        ...n
                    };
                }
                return t;
            }));
    let b = (e, t)=>{
        if (t >= e.length) {
            setC(`done`);
            if (dRef.current) {
                g(fRef, w, 3600);
            } else {
                g(pRef, C, 3200);
            }
            return;
        }
        let n = e[t];
        y(n.id, {
            status: `active`,
            error: undefined
        });
        let r = o[n.id] ?? 1200;
        g(pRef, ()=>{
            if (n.id === s && hRef.current) {
                hRef.current = false;
                y(n.id, {
                    status: `failed`,
                    error: `Slides API timed out after 30s`
                });
                if (dRef.current) {
                    g(fRef, ()=>v(`.ui-pl__retry`), 1700);
                }
                return;
            }
            y(n.id, {
                status: `done`
            });
            b(e, t + 1);
        }, r);
    };
    let onRun = (e)=>{
        _(pRef);
        hRef.current = true;
        let n = e.map(({ status, error, duration, ...rest })=>rest);
        setSteps(n);
        setC(`running`);
        g(pRef, ()=>b(n, 0), 350);
    };
    let onRetry = (e)=>{
        _(pRef);
        let n = [];
        setSteps((t)=>{
            let r = t.findIndex((t)=>t.id === e);
            n = t.map((e, t)=>{
                if (t >= r) {
                    return {
                        ...e,
                        status: `pending`,
                        error: undefined
                    };
                }
                return e;
            });
            return n;
        });
        g(pRef, ()=>b(n, n.findIndex((t)=>t.id === e)), 250);
    };
    let C = ()=>{
        setSteps((e)=>e.map(({ status, error, duration, ...rest })=>rest));
        setC(`draft`);
    };
    let w = ()=>{
        _(pRef);
        setSteps(a);
        setC(`draft`);
        g(fRef, ()=>setSteps((e)=>{
                let t = e.findIndex((e)=>e.id === `memo`);
                if (t < 1) {
                    return e;
                }
                let n = e.slice();
                let [r] = n.splice(t, 1);
                n.splice(t - 1, 0, r);
                return n;
            }), 1500);
        g(fRef, ()=>v(`.ui-pl__run`), 3000);
    };
    r.useEffect(()=>{
        w();
        return ()=>{
            _(fRef);
            _(pRef);
        };
    }, []);
    let T = (isTrusted)=>{
        if (isTrusted && dRef.current) {
            dRef.current = false;
            _(fRef);
            if (mRef.current === `done`) {
                g(pRef, C, 1200);
            }
        }
    };
    return <div ref={uRef} className={`pl-demo`} onPointerDownCapture={(e)=>T(e.nativeEvent.isTrusted)} onKeyDownCapture={(e)=>T(e.nativeEvent.isTrusted)}><N title={`Prepare the Q3 board update`} estimate={`~2 min`} steps={steps} status={c} onChange={setSteps} onRun={onRun} onCancel={()=>{
        _(pRef);
        setSteps(a);
        setC(`draft`);
    }} onRetry={onRetry}/></div>;
}
export { CComponent as default };
