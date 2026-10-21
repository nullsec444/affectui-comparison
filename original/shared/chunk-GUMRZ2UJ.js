import {
  e
} from "./chunk-LEBCP6EI.js";
import {
  i
} from "./chunk-CT2IJ575.js";
import {
  D,
  I,
  K,
  L,
  M,
  P,
  R,
  U,
  X,
  Y,
  q,
  y
} from "./chunk-M62LQFRN.js";
import {
  Zs,
  ec,
  tl
} from "./chunk-JMKFK6OM.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-CUdsyn6m.js
init_react_BkAXpnfr();
var y2 = [[`path`, { d: `M12 14.5V17.5M13 14.5C13 15.0523 12.5523 15.5 12 15.5C11.4477 15.5 11 15.0523 11 14.5C11 13.9477 11.4477 13.5 12 13.5C12.5523 13.5 13 13.9477 13 14.5Z`, stroke: `currentColor`, strokeLinecap: `round`, strokeLinejoin: `round`, strokeWidth: `1.5`, key: `0` }], [`path`, { d: `M16.5 9V6.5C16.5 4.01472 14.4853 2 12 2C9.51471 2 7.49999 4.01472 7.49999 6.5V9`, stroke: `currentColor`, strokeLinecap: `round`, strokeLinejoin: `round`, strokeWidth: `1.5`, key: `1` }], [`path`, { d: `M4.2678 18.8447C4.49268 20.515 5.87612 21.8235 7.55965 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.8789 17.7547 20 16.6376 20 15.5C20 14.3624 19.8789 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55965 9.09909C5.87612 9.17649 4.49268 10.485 4.2678 12.1553C4.12104 13.2453 3.99999 14.3624 3.99999 15.5C3.99999 16.6376 4.12104 17.7547 4.2678 18.8447Z`, stroke: `currentColor`, strokeLinecap: `round`, strokeLinejoin: `round`, strokeWidth: `1.5`, key: `2` }]];
var b = n();
var x = n2();
var S = [{ name: `Q3 Campaign`, access: `Shared`, files: [{ name: `Campaign-Brief`, type: `DOC`, edited: `2 hours ago` }, { name: `Launch-Plan`, type: `PDF`, edited: `Yesterday` }, { name: `Media-Budget`, type: `XLS`, edited: `Yesterday` }, { name: `Ad-Copy`, type: `DOC`, edited: `3 days ago` }, { name: `Results-Q2`, type: `XLS`, edited: `Last week` }] }, { name: `Brand assets`, access: `Shared`, files: [{ name: `Brand-Guidelines`, type: `PDF`, edited: `4 days ago` }, { name: `Tone-of-Voice`, type: `DOC`, edited: `Last week` }, { name: `Logo-Usage`, type: `PDF`, edited: `2 weeks ago` }] }, { name: `Hiring`, access: `Private`, files: [{ name: `Job-Description`, type: `DOC`, edited: `Today` }, { name: `Candidates`, type: `XLS`, edited: `Yesterday` }, { name: `Interview-Guide`, type: `PDF`, edited: `5 days ago` }, { name: `Offer-Template`, type: `DOC`, edited: `Last month` }] }, { name: `Research`, access: `Private`, files: [{ name: `Market-Study`, type: `PDF`, edited: `3 days ago` }, { name: `Survey-Results`, type: `XLS`, edited: `Last week` }] }];
var C = [{ name: `Design-Book`, type: `DOC`, owner: `Alex Morgan` }, { name: `Brand-Guidelines`, type: `PDF`, owner: `Jonas Weber`, shared: true }, { name: `Campaign-Budget`, type: `XLS`, owner: `Jonas Weber`, shared: true }, { name: `Weekly-Report`, type: `XLS`, owner: `Alex Morgan` }];
var w = [{ id: `type`, label: `Type`, options: [{ id: `DOC`, label: `Document` }, { id: `PDF`, label: `PDF` }, { id: `XLS`, label: `Spreadsheet` }] }];
var T = (e2) => (t, n3) => (e2 === `asc` ? 1 : -1) * t.name.localeCompare(n3.name);
var E = (e2, t) => e2.toLowerCase().includes(t.trim().toLowerCase());
function D2(e2) {
  let t = e2.user?.name ?? `Alex Morgan`, [n3, i2] = (0, b.useState)(S), [D3, k2] = (0, b.useState)(`All`), [A, j] = (0, b.useState)(`asc`), [M2, N] = (0, b.useState)(`grid`), [P2, F] = (0, b.useState)(``), I2 = n3.filter((e3) => D3 === `All` || e3.access === D3).filter((e3) => E(e3.name, P2)).sort(T(A)), L2 = () => {
    let e3 = new Set(n3.map((e4) => e4.name)), t2 = `Untitled folder`;
    for (let n4 = 2; e3.has(t2); n4++) t2 = `Untitled folder ${n4}`;
    i2((e4) => [...e4, { name: t2, access: `Private`, files: [] }]), k2(`All`), F(``);
  }, [R2, z] = (0, b.useState)(C), [B, V] = (0, b.useState)(`All`), [H, U2] = (0, b.useState)({}), [W, G] = (0, b.useState)(`asc`), [K2, q2] = (0, b.useState)(``), J = H.type ?? [], Y2 = R2.filter((e3) => B === `All` || (B === `Mine` ? e3.owner === t : e3.owner !== t)).filter((e3) => !J.length || J.includes(e3.type)).filter((e3) => E(e3.name, K2)).sort(T(W)), X2 = () => {
    let e3 = new Set(R2.map((e4) => e4.name)), n4 = `Untitled`;
    for (let t2 = 2; e3.has(n4); t2++) n4 = `Untitled-${t2}`;
    z((e4) => [...e4, { name: n4, type: `DOC`, owner: t }]), V(`All`), U2({}), q2(``);
  };
  return (0, x.jsxs)(M, { active: `Folders`, ...e2, children: [(0, x.jsx)(`style`, { href: `ui-screen-files`, precedence: `default`, children: O }), (0, x.jsxs)(`div`, { className: `ui-as-page`, children: [(0, x.jsx)(`h1`, { className: `ui-as-page-title`, children: `Files` }), (0, x.jsxs)(`p`, { className: `ui-as-page-sub`, children: [`See files you recently used in chats and manage files saved in folders. `, (0, x.jsx)(`a`, { href: `#learn-more`, children: `Learn more` })] }), (0, x.jsx)(K, { title: `Folders`, left: (0, x.jsx)(P, { items: [`All`, `Shared`, `Private`], value: D3, onChange: k2 }), right: (0, x.jsxs)(x.Fragment, { children: [(0, x.jsx)(I, { value: A, onChange: j }), (0, x.jsx)(L, { value: M2, onChange: N }), (0, x.jsx)(R, { placeholder: `Search folders...`, width: 172, value: P2, onChange: F }), (0, x.jsx)(i, { size: `sm`, icon: (0, x.jsx)(D, { icon: y, size: 15 }), onClick: L2, children: `Create folder` })] }) }), I2.length ? (0, x.jsx)(`div`, { className: `ui-as-folders`, "data-view": M2, children: I2.map((t2, n4) => (0, x.jsxs)(`button`, { type: `button`, className: `ui-as-folder-card ui-as-rise`, style: { "--i": n4 }, onClick: () => e2.onNavigate?.(t2.name), children: [(0, x.jsx)(`span`, { className: `ui-as-folder-card__icon`, children: (0, x.jsx)(tl, { label: `` }) }), (0, x.jsxs)(`span`, { className: `ui-as-folder-card__text`, children: [(0, x.jsx)(`b`, { children: t2.name }), (0, x.jsxs)(`span`, { className: `ui-as-meta`, children: [(0, x.jsx)(D, { icon: t2.access === `Shared` ? e : y2, size: 12 }), t2.access, ` \xB7 `, t2.files.length, ` `, t2.files.length === 1 ? `file` : `files`] })] })] }, t2.name)) }, `${D3}|${A}|${M2}|${P2}`) : (0, x.jsx)(`div`, { className: `ui-as-rise ui-as-files-empty`, children: (0, x.jsx)(q, { title: `No folders found`, text: P2 ? `Nothing matches \u201C${P2}\u201D.` : `There are no ${D3.toLowerCase()} folders yet.` }) }), (0, x.jsx)(K, { title: `File templates`, left: (0, x.jsx)(P, { items: [`All`, `Mine`, `Shared with me`], value: B, onChange: V }), right: (0, x.jsxs)(x.Fragment, { children: [(0, x.jsx)(U, { label: `Type`, groups: w, value: H, onChange: U2 }), (0, x.jsx)(I, { value: W, onChange: G }), (0, x.jsx)(R, { placeholder: `Search templates...`, width: 172, value: K2, onChange: q2 }), (0, x.jsx)(i, { size: `sm`, variant: `secondary`, icon: (0, x.jsx)(D, { icon: y, size: 15 }), onClick: X2, children: `Add template` })] }) }), Y2.length ? (0, x.jsx)(`div`, { className: `ui-as-templates ui-as-file-grid`, children: Y2.map((e3, t2) => (0, x.jsx)(`div`, { className: `ui-as-rise`, style: { "--i": t2 }, children: (0, x.jsx)(X, { file: e3, meta: (0, x.jsxs)(x.Fragment, { children: [Y[e3.type], ` \xB7 `, e3.owner, ` \xB7 `, (0, x.jsx)(D, { icon: e3.shared ? e : y2, size: 12 }), ` `, e3.shared ? `Shared` : `Private`] }) }) }, e3.name)) }, `${B}|${J.join()}|${W}|${K2}`) : (0, x.jsx)(`div`, { className: `ui-as-rise ui-as-files-empty`, children: (0, x.jsx)(q, { title: `No templates found`, text: `Try another tab, type or search.` }) })] })] });
}
var O = `.ui-as-folders{display: grid;grid-template-columns: repeat(4, minmax(0, 1fr));gap: 11px;margin-top: 16px}.ui-as-folder-card{display: flex;align-items: center;gap: 12px;height: 59px;padding: 0 14px 0 12px;border-radius: 12px;background: var(--card);box-shadow: 0 0 0 1px var(--line), var(--shadow);text-decoration: none;transition: box-shadow 160ms ease}.ui-as-folder-card:hover{box-shadow: 0 0 0 1px var(--line-strong), 0 2px 8px rgba(0, 0, 0, 0.05)}.ui-as-folder-card__text{display: grid;gap: 2px;min-width: 0}.ui-as-folder-card__text b{overflow: hidden;font-size: 13.5px;line-height: 18px;font-weight: 500;color: var(--ink);white-space: nowrap;text-overflow: ellipsis}.ui-as-templates{display: flex;flex-wrap: wrap;gap: 12px;margin-top: 16px}.ui-as-files-empty{margin-top: 16px}.ui-as-folders[data-view="list"]{grid-template-columns: minmax(0, 1fr);gap: 6px}.ui-as-folders[data-view="list"] .ui-as-folder-card{height: 52px}@container ui-as-main (max-width: 760px){.ui-as-folders{grid-template-columns: repeat(2, minmax(0, 1fr))}}@container ui-as-main (max-width: 760px){.ui-as-folder-card{text-align: left}.ui-as-folder-card__text{flex: 1}}@container ui-as-main (max-width: 480px){.ui-as-folders{grid-template-columns: minmax(0, 1fr);gap: 8px}}`;
function k() {
  return (0, x.jsx)(Zs, { children: (0, x.jsx)(D2, { onNavigate: ec }) });
}

export {
  k
};
