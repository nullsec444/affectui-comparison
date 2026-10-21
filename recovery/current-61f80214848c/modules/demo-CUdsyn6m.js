import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
import { l as N1, t as R1, u as onNavigate } from "./index-CxCSU7QX.js";
import { t as A1 } from "./component-x-U6EJWL.js";
import { S as S_1, a as S1, d as C1, f as L1, g, i as D1, m as F1, o as P1, p as M1, r as H1, t as G1, u as _ } from "./component-qs8CseUl.js";
import { t as t_2 } from "./UserMultiple02Icon-CmkUO2wo.js";
const y = [
    [
        `path`,
        {
            d: `M12 14.5V17.5M13 14.5C13 15.0523 12.5523 15.5 12 15.5C11.4477 15.5 11 15.0523 11 14.5C11 13.9477 11.4477 13.5 12 13.5C12.5523 13.5 13 13.9477 13 14.5Z`,
            stroke: `currentColor`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            strokeWidth: `1.5`,
            key: `0`
        }
    ],
    [
        `path`,
        {
            d: `M16.5 9V6.5C16.5 4.01472 14.4853 2 12 2C9.51471 2 7.49999 4.01472 7.49999 6.5V9`,
            stroke: `currentColor`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            strokeWidth: `1.5`,
            key: `1`
        }
    ],
    [
        `path`,
        {
            d: `M4.2678 18.8447C4.49268 20.515 5.87612 21.8235 7.55965 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.8789 17.7547 20 16.6376 20 15.5C20 14.3624 19.8789 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55965 9.09909C5.87612 9.17649 4.49268 10.485 4.2678 12.1553C4.12104 13.2453 3.99999 14.3624 3.99999 15.5C3.99999 16.6376 4.12104 17.7547 4.2678 18.8447Z`,
            stroke: `currentColor`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            strokeWidth: `1.5`,
            key: `2`
        }
    ]
];
const b = t_1();
const x = t();
const S = [
    {
        name: `Q3 Campaign`,
        access: `Shared`,
        files: [
            {
                name: `Campaign-Brief`,
                type: `DOC`,
                edited: `2 hours ago`
            },
            {
                name: `Launch-Plan`,
                type: `PDF`,
                edited: `Yesterday`
            },
            {
                name: `Media-Budget`,
                type: `XLS`,
                edited: `Yesterday`
            },
            {
                name: `Ad-Copy`,
                type: `DOC`,
                edited: `3 days ago`
            },
            {
                name: `Results-Q2`,
                type: `XLS`,
                edited: `Last week`
            }
        ]
    },
    {
        name: `Brand assets`,
        access: `Shared`,
        files: [
            {
                name: `Brand-Guidelines`,
                type: `PDF`,
                edited: `4 days ago`
            },
            {
                name: `Tone-of-Voice`,
                type: `DOC`,
                edited: `Last week`
            },
            {
                name: `Logo-Usage`,
                type: `PDF`,
                edited: `2 weeks ago`
            }
        ]
    },
    {
        name: `Hiring`,
        access: `Private`,
        files: [
            {
                name: `Job-Description`,
                type: `DOC`,
                edited: `Today`
            },
            {
                name: `Candidates`,
                type: `XLS`,
                edited: `Yesterday`
            },
            {
                name: `Interview-Guide`,
                type: `PDF`,
                edited: `5 days ago`
            },
            {
                name: `Offer-Template`,
                type: `DOC`,
                edited: `Last month`
            }
        ]
    },
    {
        name: `Research`,
        access: `Private`,
        files: [
            {
                name: `Market-Study`,
                type: `PDF`,
                edited: `3 days ago`
            },
            {
                name: `Survey-Results`,
                type: `XLS`,
                edited: `Last week`
            }
        ]
    }
];
const C = [
    {
        name: `Design-Book`,
        type: `DOC`,
        owner: `Alex Morgan`
    },
    {
        name: `Brand-Guidelines`,
        type: `PDF`,
        owner: `Jonas Weber`,
        shared: true
    },
    {
        name: `Campaign-Budget`,
        type: `XLS`,
        owner: `Jonas Weber`,
        shared: true
    },
    {
        name: `Weekly-Report`,
        type: `XLS`,
        owner: `Alex Morgan`
    }
];
const groups = [
    {
        id: `type`,
        label: `Type`,
        options: [
            {
                id: `DOC`,
                label: `Document`
            },
            {
                id: `PDF`,
                label: `PDF`
            },
            {
                id: `XLS`,
                label: `Spreadsheet`
            }
        ]
    }
];
const T = (e)=>(t, n)=>(e === `asc` ? 1 : -1) * t.name.localeCompare(n.name);
const E = (name, t)=>name.toLowerCase().includes(t.trim().toLowerCase());
function DComponent(e) {
    let owner = e.user?.name ?? `Alex Morgan`;
    let [n, setN] = b.useState(S);
    let [D, setD] = b.useState(`All`);
    let [A, setA] = b.useState(`asc`);
    let [M, setM] = b.useState(`grid`);
    let [P, setP] = b.useState(``);
    let I = n.filter((e)=>D === `All` || e.access === D).filter((e)=>E(e.name, P)).sort(T(A));
    let L = ()=>{
        let e = new Set(n.map((e)=>e.name));
        let t = `Untitled folder`;
        for(let n = 2; e.has(t); n++){
            t = `Untitled folder ${n}`;
        }
        setN((e)=>[
                ...e,
                {
                    name: t,
                    access: `Private`,
                    files: []
                }
            ]);
        setD(`All`);
        setP(``);
    };
    let [R, setR] = b.useState(C);
    let [B, setB] = b.useState(`All`);
    let [H, setH] = b.useState({});
    let [W, setW] = b.useState(`asc`);
    let [K, setK] = b.useState(``);
    let J = H.type ?? [];
    let Y = R.filter((e)=>B === `All` || (B === `Mine` ? e.owner === owner : e.owner !== owner)).filter((e)=>!J.length || J.includes(e.type)).filter((e)=>E(e.name, K)).sort(T(W));
    let X = ()=>{
        let e = new Set(R.map((e)=>e.name));
        let n = `Untitled`;
        for(let t = 2; e.has(n); t++){
            n = `Untitled-${t}`;
        }
        setR((e)=>[
                ...e,
                {
                    name: n,
                    type: `DOC`,
                    owner
                }
            ]);
        setB(`All`);
        setH({});
        setK(``);
    };
    return <G1 active={`Folders`} {...e}><style href={`ui-screen-files`} precedence={`default`}>{O}</style><div className={`ui-as-page`}><h1 className={`ui-as-page-title`}>{`Files`}</h1><p className={`ui-as-page-sub`}>{`See files you recently used in chats and manage files saved in folders. `}<a href={`#learn-more`}>{`Learn more`}</a></p><C1 title={`Folders`} left=<M1 items={[
        `All`,
        `Shared`,
        `Private`
    ]} value={D} onChange={setD}/> right=<><L1 value={A} onChange={setA}/><F1 value={M} onChange={setM}/><_ placeholder={`Search folders...`} width={172} value={P} onChange={setP}/><A1 size={`sm`} icon=<P1 icon={S_1} size={15}/> onClick={L}>{`Create folder`}</A1></>/>{I.length ? <div key={`${D}|${A}|${M}|${P}`} className={`ui-as-folders`} data-view={M}>{I.map((t, n)=><button key={t.name} type={`button`} className={`ui-as-folder-card ui-as-rise`} style={{
            "--i": n
        }} onClick={()=>e.onNavigate?.(t.name)}><span className={`ui-as-folder-card__icon`}><R1 label={``}/></span><span className={`ui-as-folder-card__text`}><b>{t.name}</b><span className={`ui-as-meta`}><P1 icon={t.access === `Shared` ? t_2 : y} size={12}/>{t.access}{` · `}{t.files.length}{` `}{t.files.length === 1 ? `file` : `files`}</span></span></button>)}</div> : <div className={`ui-as-rise ui-as-files-empty`}><H1 title={`No folders found`} text={P ? `Nothing matches “${P}”.` : `There are no ${D.toLowerCase()} folders yet.`}/></div>}<C1 title={`File templates`} left=<M1 items={[
        `All`,
        `Mine`,
        `Shared with me`
    ]} value={B} onChange={setB}/> right=<><S1 label={`Type`} groups={groups} value={H} onChange={setH}/><L1 value={W} onChange={setW}/><_ placeholder={`Search templates...`} width={172} value={K} onChange={setK}/><A1 size={`sm`} variant={`secondary`} icon=<P1 icon={S_1} size={15}/> onClick={X}>{`Add template`}</A1></>/>{Y.length ? <div key={`${B}|${J.join()}|${W}|${K}`} className={`ui-as-templates ui-as-file-grid`}>{Y.map((file, t)=><div key={file.name} className={`ui-as-rise`} style={{
            "--i": t
        }}><D1 file={file} meta=<>{g[file.type]}{` · `}{file.owner}{` · `}<P1 icon={file.shared ? t_2 : y} size={12}/>{` `}{file.shared ? `Shared` : `Private`}</>/></div>)}</div> : <div className={`ui-as-rise ui-as-files-empty`}><H1 title={`No templates found`} text={`Try another tab, type or search.`}/></div>}</div></G1>;
}
var O = `.ui-as-folders{display: grid;grid-template-columns: repeat(4, minmax(0, 1fr));gap: 11px;margin-top: 16px}.ui-as-folder-card{display: flex;align-items: center;gap: 12px;height: 59px;padding: 0 14px 0 12px;border-radius: 12px;background: var(--card);box-shadow: 0 0 0 1px var(--line), var(--shadow);text-decoration: none;transition: box-shadow 160ms ease}.ui-as-folder-card:hover{box-shadow: 0 0 0 1px var(--line-strong), 0 2px 8px rgba(0, 0, 0, 0.05)}.ui-as-folder-card__text{display: grid;gap: 2px;min-width: 0}.ui-as-folder-card__text b{overflow: hidden;font-size: 13.5px;line-height: 18px;font-weight: 500;color: var(--ink);white-space: nowrap;text-overflow: ellipsis}.ui-as-templates{display: flex;flex-wrap: wrap;gap: 12px;margin-top: 16px}.ui-as-files-empty{margin-top: 16px}.ui-as-folders[data-view="list"]{grid-template-columns: minmax(0, 1fr);gap: 6px}.ui-as-folders[data-view="list"] .ui-as-folder-card{height: 52px}@container ui-as-main (max-width: 760px){.ui-as-folders{grid-template-columns: repeat(2, minmax(0, 1fr))}}@container ui-as-main (max-width: 760px){.ui-as-folder-card{text-align: left}.ui-as-folder-card__text{flex: 1}}@container ui-as-main (max-width: 480px){.ui-as-folders{grid-template-columns: minmax(0, 1fr);gap: 8px}}`;
function KComponent() {
    return <N1><DComponent onNavigate={onNavigate}/></N1>;
}
export { KComponent as default };
