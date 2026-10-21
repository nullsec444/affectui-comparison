import {
  Kc,
  Rc
} from "./chunk-OLSFNPAI.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-Cv538yeC.js
init_react_BkAXpnfr();
var i = n();
var a = n2();
var o = (e, t = false) => new Promise((n3, r) => window.setTimeout(() => t ? r(Error(`Timeout`)) : n3(), e));
var s = ({ d: e }) => (0, a.jsx)(`svg`, { viewBox: `0 0 24 24`, "aria-hidden": `true`, children: (0, a.jsx)(`path`, { d: e }) });
var c = { save: `M6 4h9.5L20 8.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8 4v4.5h7V4M8 20v-6h8v6`, trash: `M4.5 7h15M10 11v5.5M14 11v5.5M6 7l.8 11.2A2 2 0 0 0 8.8 20h6.4a2 2 0 0 0 2-1.8L18 7M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2`, upload: `M12 15V4M7.5 8.5 12 4l4.5 4.5M5 15v3.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V15`, sync: `M19.5 12a7.5 7.5 0 0 1-13.3 4.8M4.5 12a7.5 7.5 0 0 1 13.3-4.8M18 3.5v4h-4M6 20.5v-4h4`, doc: `M7 3.5h7l4.5 4.5v11a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5zM14 3.5V8h4.5M8.5 12.5h7M8.5 16h5` };
function l() {
  let e = (0, i.useId)(), t = (0, i.useRef)(/* @__PURE__ */ new Set()), l2 = (t2 = {}) => ({ toaster: e, ...t2 }), u = (e2) => t.current.add(e2), d = (e2) => u(Rc.success(`Draft saved`, l2({ description: `Q3 Board Report \xB7 all changes kept`, ...e2 }))), f = (e2) => u(Rc(`File moved to trash`, { ...l2(e2), description: `Budget-2027.xlsx`, icon: (0, a.jsx)(s, { d: c.trash }), action: { label: `Undo`, onClick: () => u(Rc.success(`File restored`, l2({ description: `Budget-2027.xlsx is back in Reports` }))) } })), p = (t2) => {
    let r = `${e}-upload-${Date.now()}`;
    u(r), Rc.promise(o(2400), { loading: { title: `Uploading report\u2026`, description: `Q3-Board-Report.pdf \xB7 4.2\xA0MB` }, success: { title: `Report uploaded`, description: `Shared with 4 people in Finance` }, error: `Upload failed` }, { ...l2(t2), id: r });
  };
  return (0, i.useEffect)(() => {
    let e2 = [window.setTimeout(() => d({ duration: 9e3 }), 500), window.setTimeout(() => f({ duration: 9e3 }), 1300), window.setTimeout(() => p({ duration: 9e3 }), 2100)], r = t.current;
    return () => {
      e2.forEach(clearTimeout), r.forEach((e3) => Rc.dismiss(e3)), r.clear();
    };
  }, []), (0, a.jsx)(`div`, { className: `toaster-demo`, children: (0, a.jsxs)(`div`, { className: `toaster-demo__col`, children: [(0, a.jsxs)(`div`, { className: `toaster-demo__panel`, children: [(0, a.jsxs)(`div`, { className: `toaster-demo__card`, children: [(0, a.jsxs)(`div`, { className: `toaster-demo__head`, children: [(0, a.jsx)(`span`, { className: `toaster-demo__doc`, children: (0, a.jsx)(s, { d: c.doc }) }), (0, a.jsxs)(`div`, { className: `toaster-demo__meta`, children: [(0, a.jsx)(`span`, { className: `toaster-demo__name`, children: `Q3 Board Report` }), (0, a.jsx)(`span`, { className: `toaster-demo__sub`, children: `Finance \xB7 edited 2 min ago` })] })] }), (0, a.jsxs)(`div`, { className: `toaster-demo__grid`, children: [(0, a.jsxs)(`button`, { type: `button`, className: `toaster-demo__btn`, onClick: () => d(), children: [(0, a.jsx)(s, { d: c.save }), `Save draft`] }), (0, a.jsxs)(`button`, { type: `button`, className: `toaster-demo__btn`, onClick: () => f(), children: [(0, a.jsx)(s, { d: c.trash }), `Delete file`] }), (0, a.jsxs)(`button`, { type: `button`, className: `toaster-demo__btn`, onClick: () => p(), children: [(0, a.jsx)(s, { d: c.upload }), `Upload report`] }), (0, a.jsxs)(`button`, { type: `button`, className: `toaster-demo__btn`, onClick: () => {
    let t2 = `${e}-sync-${Date.now()}`;
    u(t2), Rc.promise(o(2200, true), { loading: `Syncing with Google Drive\u2026`, success: `Synced`, error: { title: `Couldn't sync`, description: `Google Drive didn't respond. Try again in a minute.` } }, l2({ id: t2 }));
  }, children: [(0, a.jsx)(s, { d: c.sync }), `Sync`] })] })] }), (0, a.jsxs)(`p`, { className: `toaster-demo__foot`, children: [`Press `, (0, a.jsx)(`kbd`, { children: `F8` }), ` to jump to notifications`] })] }), (0, a.jsx)(`div`, { className: `toaster-demo__slot`, children: (0, a.jsx)(Kc, { id: e, inline: true, position: `top-center` }) })] }) });
}

export {
  l
};
