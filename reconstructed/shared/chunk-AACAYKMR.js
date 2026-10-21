import {
  t
} from "./chunk-M7PUUKPJ.js";
import {
  IComponent
} from "./chunk-YFUYMYMJ.js";
import {
  DComponent,
  IComponent as IComponent2,
  KComponent,
  LComponent,
  MComponent,
  PComponent,
  RComponent,
  UComponent,
  Y,
  i,
  r,
  y
} from "./chunk-NYMAIANS.js";
import {
  Tl1Component,
  ZsComponent,
  ec
} from "./chunk-JMTRCM7A.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  Fragment,
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";

// reconstructed/demo-CUdsyn6m.jsx
init_react_BkAXpnfr();
var y2 = [[`path`, {
  d: `M12 14.5V17.5M13 14.5C13 15.0523 12.5523 15.5 12 15.5C11.4477 15.5 11 15.0523 11 14.5C11 13.9477 11.4477 13.5 12 13.5C12.5523 13.5 13 13.9477 13 14.5Z`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `0`
}], [`path`, {
  d: `M16.5 9V6.5C16.5 4.01472 14.4853 2 12 2C9.51471 2 7.49999 4.01472 7.49999 6.5V9`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `1`
}], [`path`, {
  d: `M4.2678 18.8447C4.49268 20.515 5.87612 21.8235 7.55965 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.8789 17.7547 20 16.6376 20 15.5C20 14.3624 19.8789 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55965 9.09909C5.87612 9.17649 4.49268 10.485 4.2678 12.1553C4.12104 13.2453 3.99999 14.3624 3.99999 15.5C3.99999 16.6376 4.12104 17.7547 4.2678 18.8447Z`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `2`
}]];
var b = n();
var x = n2();
var S = [{
  name: `Q3 Campaign`,
  access: `Shared`,
  files: [{
    name: `Campaign-Brief`,
    type: `DOC`,
    edited: `2 hours ago`
  }, {
    name: `Launch-Plan`,
    type: `PDF`,
    edited: `Yesterday`
  }, {
    name: `Media-Budget`,
    type: `XLS`,
    edited: `Yesterday`
  }, {
    name: `Ad-Copy`,
    type: `DOC`,
    edited: `3 days ago`
  }, {
    name: `Results-Q2`,
    type: `XLS`,
    edited: `Last week`
  }]
}, {
  name: `Brand assets`,
  access: `Shared`,
  files: [{
    name: `Brand-Guidelines`,
    type: `PDF`,
    edited: `4 days ago`
  }, {
    name: `Tone-of-Voice`,
    type: `DOC`,
    edited: `Last week`
  }, {
    name: `Logo-Usage`,
    type: `PDF`,
    edited: `2 weeks ago`
  }]
}, {
  name: `Hiring`,
  access: `Private`,
  files: [{
    name: `Job-Description`,
    type: `DOC`,
    edited: `Today`
  }, {
    name: `Candidates`,
    type: `XLS`,
    edited: `Yesterday`
  }, {
    name: `Interview-Guide`,
    type: `PDF`,
    edited: `5 days ago`
  }, {
    name: `Offer-Template`,
    type: `DOC`,
    edited: `Last month`
  }]
}, {
  name: `Research`,
  access: `Private`,
  files: [{
    name: `Market-Study`,
    type: `PDF`,
    edited: `3 days ago`
  }, {
    name: `Survey-Results`,
    type: `XLS`,
    edited: `Last week`
  }]
}];
var C = [{
  name: `Design-Book`,
  type: `DOC`,
  owner: `Alex Morgan`
}, {
  name: `Brand-Guidelines`,
  type: `PDF`,
  owner: `Jonas Weber`,
  shared: true
}, {
  name: `Campaign-Budget`,
  type: `XLS`,
  owner: `Jonas Weber`,
  shared: true
}, {
  name: `Weekly-Report`,
  type: `XLS`,
  owner: `Alex Morgan`
}];
var groups = [{
  id: `type`,
  label: `Type`,
  options: [{
    id: `DOC`,
    label: `Document`
  }, {
    id: `PDF`,
    label: `PDF`
  }, {
    id: `XLS`,
    label: `Spreadsheet`
  }]
}];
var T = (e) => (t2, n3) => (e === `asc` ? 1 : -1) * t2.name.localeCompare(n3.name);
var E = (name, t2) => name.toLowerCase().includes(t2.trim().toLowerCase());
function DComponent2(e) {
  let owner = e.user?.name ?? `Alex Morgan`;
  let [n3, setN] = b.useState(S);
  let [D, setD] = b.useState(`All`);
  let [A, setA] = b.useState(`asc`);
  let [M, setM] = b.useState(`grid`);
  let [P, setP] = b.useState(``);
  let I = n3.filter((e2) => D === `All` || e2.access === D).filter((e2) => E(e2.name, P)).sort(T(A));
  let L = () => {
    let e2 = new Set(n3.map((e3) => e3.name));
    let t2 = `Untitled folder`;
    for (let n4 = 2; e2.has(t2); n4++) {
      t2 = `Untitled folder ${n4}`;
    }
    setN((e3) => [...e3, {
      name: t2,
      access: `Private`,
      files: []
    }]);
    setD(`All`);
    setP(``);
  };
  let [R, setR] = b.useState(C);
  let [B, setB] = b.useState(`All`);
  let [H, setH] = b.useState({});
  let [W, setW] = b.useState(`asc`);
  let [K, setK] = b.useState(``);
  let J = H.type ?? [];
  let Y2 = R.filter((e2) => B === `All` || (B === `Mine` ? e2.owner === owner : e2.owner !== owner)).filter((e2) => !J.length || J.includes(e2.type)).filter((e2) => E(e2.name, K)).sort(T(W));
  let X = () => {
    let e2 = new Set(R.map((e3) => e3.name));
    let n4 = `Untitled`;
    for (let t2 = 2; e2.has(n4); t2++) {
      n4 = `Untitled-${t2}`;
    }
    setR((e3) => [...e3, {
      name: n4,
      type: `DOC`,
      owner
    }]);
    setB(`All`);
    setH({});
    setK(``);
  };
  return /* @__PURE__ */ jsxs(MComponent, { active: `Folders`, ...e, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-screen-files`, precedence: `default`, children: O }),
    /* @__PURE__ */ jsxs("div", { className: `ui-as-page`, children: [
      /* @__PURE__ */ jsx("h1", { className: `ui-as-page-title`, children: `Files` }),
      /* @__PURE__ */ jsxs("p", { className: `ui-as-page-sub`, children: [
        `See files you recently used in chats and manage files saved in folders. `,
        /* @__PURE__ */ jsx("a", { href: `#learn-more`, children: `Learn more` })
      ] }),
      /* @__PURE__ */ jsx(KComponent, { title: `Folders`, left: /* @__PURE__ */ jsx(PComponent, { items: [`All`, `Shared`, `Private`], value: D, onChange: setD }), right: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(IComponent2, { value: A, onChange: setA }),
        /* @__PURE__ */ jsx(LComponent, { value: M, onChange: setM }),
        /* @__PURE__ */ jsx(RComponent, { placeholder: `Search folders...`, width: 172, value: P, onChange: setP }),
        /* @__PURE__ */ jsx(IComponent, { size: `sm`, icon: /* @__PURE__ */ jsx(DComponent, { icon: y, size: 15 }), onClick: L, children: `Create folder` })
      ] }) }),
      I.length ? /* @__PURE__ */ jsx("div", { className: `ui-as-folders`, "data-view": M, children: I.map((t2, n4) => /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-as-folder-card ui-as-rise`, style: {
        "--i": n4
      }, onClick: () => e.onNavigate?.(t2.name), children: [
        /* @__PURE__ */ jsx("span", { className: `ui-as-folder-card__icon`, children: /* @__PURE__ */ jsx(Tl1Component, { label: `` }) }),
        /* @__PURE__ */ jsxs("span", { className: `ui-as-folder-card__text`, children: [
          /* @__PURE__ */ jsx("b", { children: t2.name }),
          /* @__PURE__ */ jsxs("span", { className: `ui-as-meta`, children: [
            /* @__PURE__ */ jsx(DComponent, { icon: t2.access === `Shared` ? t : y2, size: 12 }),
            t2.access,
            ` \xB7 `,
            t2.files.length,
            ` `,
            t2.files.length === 1 ? `file` : `files`
          ] })
        ] })
      ] }, t2.name)) }, `${D}|${A}|${M}|${P}`) : /* @__PURE__ */ jsx("div", { className: `ui-as-rise ui-as-files-empty`, children: /* @__PURE__ */ jsx(r, { title: `No folders found`, text: P ? `Nothing matches \u201C${P}\u201D.` : `There are no ${D.toLowerCase()} folders yet.` }) }),
      /* @__PURE__ */ jsx(KComponent, { title: `File templates`, left: /* @__PURE__ */ jsx(PComponent, { items: [`All`, `Mine`, `Shared with me`], value: B, onChange: setB }), right: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(UComponent, { label: `Type`, groups, value: H, onChange: setH }),
        /* @__PURE__ */ jsx(IComponent2, { value: W, onChange: setW }),
        /* @__PURE__ */ jsx(RComponent, { placeholder: `Search templates...`, width: 172, value: K, onChange: setK }),
        /* @__PURE__ */ jsx(IComponent, { size: `sm`, variant: `secondary`, icon: /* @__PURE__ */ jsx(DComponent, { icon: y, size: 15 }), onClick: X, children: `Add template` })
      ] }) }),
      Y2.length ? /* @__PURE__ */ jsx("div", { className: `ui-as-templates ui-as-file-grid`, children: Y2.map((file, t2) => /* @__PURE__ */ jsx("div", { className: `ui-as-rise`, style: {
        "--i": t2
      }, children: /* @__PURE__ */ jsx(i, { file, meta: /* @__PURE__ */ jsxs(Fragment, { children: [
        Y[file.type],
        ` \xB7 `,
        file.owner,
        ` \xB7 `,
        /* @__PURE__ */ jsx(DComponent, { icon: file.shared ? t : y2, size: 12 }),
        ` `,
        file.shared ? `Shared` : `Private`
      ] }) }) }, file.name)) }, `${B}|${J.join()}|${W}|${K}`) : /* @__PURE__ */ jsx("div", { className: `ui-as-rise ui-as-files-empty`, children: /* @__PURE__ */ jsx(r, { title: `No templates found`, text: `Try another tab, type or search.` }) })
    ] })
  ] });
}
var O = `.ui-as-folders{display: grid;grid-template-columns: repeat(4, minmax(0, 1fr));gap: 11px;margin-top: 16px}.ui-as-folder-card{display: flex;align-items: center;gap: 12px;height: 59px;padding: 0 14px 0 12px;border-radius: 12px;background: var(--card);box-shadow: 0 0 0 1px var(--line), var(--shadow);text-decoration: none;transition: box-shadow 160ms ease}.ui-as-folder-card:hover{box-shadow: 0 0 0 1px var(--line-strong), 0 2px 8px rgba(0, 0, 0, 0.05)}.ui-as-folder-card__text{display: grid;gap: 2px;min-width: 0}.ui-as-folder-card__text b{overflow: hidden;font-size: 13.5px;line-height: 18px;font-weight: 500;color: var(--ink);white-space: nowrap;text-overflow: ellipsis}.ui-as-templates{display: flex;flex-wrap: wrap;gap: 12px;margin-top: 16px}.ui-as-files-empty{margin-top: 16px}.ui-as-folders[data-view="list"]{grid-template-columns: minmax(0, 1fr);gap: 6px}.ui-as-folders[data-view="list"] .ui-as-folder-card{height: 52px}@container ui-as-main (max-width: 760px){.ui-as-folders{grid-template-columns: repeat(2, minmax(0, 1fr))}}@container ui-as-main (max-width: 760px){.ui-as-folder-card{text-align: left}.ui-as-folder-card__text{flex: 1}}@container ui-as-main (max-width: 480px){.ui-as-folders{grid-template-columns: minmax(0, 1fr);gap: 8px}}`;
function KComponent2() {
  return /* @__PURE__ */ jsx(ZsComponent, { children: /* @__PURE__ */ jsx(DComponent2, { onNavigate: ec }) });
}

export {
  KComponent2 as KComponent
};
