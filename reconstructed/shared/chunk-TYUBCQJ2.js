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

// reconstructed/demo-rS721rJa.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = {
  lena: {
    name: `Lena Hart`,
    avatar: `/avatars/lena.jpg`
  },
  jonas: {
    name: `Jonas Weber`,
    avatar: `/avatars/jonas.jpg`
  },
  mara: {
    name: `Mara Novak`,
    avatar: `/avatars/mara.jpg`
  },
  theo: {
    name: `Theo Brandt`,
    avatar: `/avatars/theo.jpg`
  }
};
var a = [{
  id: `northwind`,
  name: `Northwind Logistics`,
  meta: `Northwind Logistics GmbH \xB7 EUR \xB7 Fiscal year ends Dec 31`,
  mark: {
    letter: `N`,
    bg: `#1d4ed8`,
    fg: `#ffffff`
  },
  kpis: [{
    label: `MRR`,
    value: `\u20AC48.2k`,
    previous: `\u20AC44.9k`,
    delta: 7.4,
    points: [31, 33, 32, 35, 36, 35, 38, 40, 41, 44],
    color: `#2f6bff`
  }, {
    label: `Cash`,
    value: `\u20AC612k`,
    previous: `\u20AC648k`,
    delta: -5.6,
    points: [44, 43, 43, 41, 40, 41, 38, 37, 36, 35],
    color: `#0ea5e9`
  }, {
    label: `Gross margin`,
    value: `64.1%`,
    previous: `62.8%`,
    delta: 1.3,
    points: [30, 31, 30, 32, 31, 33, 32, 33, 34, 34],
    color: `#8b5cf6`
  }, {
    label: `Net burn`,
    value: `\u20AC36.0k`,
    previous: `\u20AC41.5k`,
    delta: -13.3,
    points: [42, 41, 43, 40, 39, 38, 39, 36, 35, 33],
    color: `#ec4899`
  }],
  reports: [{
    name: `Monthly P&L`,
    when: `1d ago`,
    summary: `Revenue up 7% on the new Hamburg routes; freight costs flat, so margin improved by 1.3 points.`
  }, {
    name: `Cash runway`,
    when: `6d ago`,
    summary: `17 months at the current burn. The Q1 fleet lease pushes it to 15 if signed in January.`
  }, {
    name: `Board pack Q3`,
    when: `2w ago`,
    summary: `Highlights, KPIs and the three decisions for the board: pricing, fleet lease and the Nordics pilot.`
  }],
  context: [{
    id: `n1`,
    kind: `note`,
    author: i.lena,
    when: `today`,
    text: `CFO wants every figure in the @Monthly P&L in EUR, also for the Danish entity \u2013 no converted totals.`
  }, {
    id: `n2`,
    kind: `report`,
    author: i.jonas,
    when: `1d ago`,
    report: `Monthly P&L`
  }, {
    id: `n3`,
    kind: `files`,
    author: i.jonas,
    when: `2d ago`,
    files: [{
      name: `budget-2027.pdf`,
      type: `pdf`
    }, {
      name: `fleet-costs-Q3.xlsx`,
      type: `xlsx`
    }]
  }, {
    id: `n4`,
    kind: `note`,
    author: i.lena,
    when: `4d ago`,
    text: `Renewal talks start in November. They'll ask for a lower rate if the Nordics pilot slips \u2013 keep the @Cash runway current.`
  }, {
    id: `n5`,
    kind: `integration`,
    when: `1w ago`,
    app: `Stripe`,
    connected: true
  }]
}, {
  id: `lumen`,
  name: `Lumen Labs`,
  meta: `Lumen Labs, Inc. \xB7 GBP \xB7 Fiscal year ends Mar 31`,
  mark: {
    letter: `L`,
    bg: `#f97316`,
    fg: `#ffffff`
  },
  kpis: [{
    label: `ARR`,
    value: `\xA31.84m`,
    previous: `\xA31.62m`,
    delta: 13.6,
    points: [20, 22, 23, 25, 27, 28, 30, 33, 35, 38],
    color: `#2f6bff`
  }, {
    label: `Cash`,
    value: `\xA3980k`,
    previous: `\xA31.06m`,
    delta: -7.5,
    points: [46, 45, 43, 42, 41, 40, 38, 37, 36, 35],
    color: `#0ea5e9`
  }, {
    label: `Gross margin`,
    value: `78.0%`,
    previous: `77.2%`,
    delta: 0.8,
    points: [36, 36, 37, 36, 37, 37, 38, 37, 38, 38],
    color: `#8b5cf6`
  }, {
    label: `Runway`,
    value: `17 mo`,
    previous: `18 mo`,
    delta: -5.6,
    points: [40, 39, 39, 38, 37, 37, 36, 35, 35, 34],
    color: `#ec4899`
  }],
  reports: [{
    name: `Runway forecast`,
    when: `today`,
    summary: `Hiring four engineers in Q1 shortens the runway from 19 to 17 months.`
  }],
  context: [{
    id: `l1`,
    kind: `report`,
    author: i.mara,
    when: `today`,
    report: `Runway forecast`
  }, {
    id: `l2`,
    kind: `note`,
    author: i.mara,
    when: `2d ago`,
    text: `Hiring plan adds four engineers in Q1 \u2013 reflect it in the @Runway forecast before the board meeting.`
  }, {
    id: `l3`,
    kind: `files`,
    author: i.theo,
    when: `4d ago`,
    files: [{
      name: `hiring-plan.doc`,
      type: `doc`
    }]
  }]
}, {
  id: `halcyon`,
  name: `Halcyon Health`,
  meta: `Halcyon Health Ltd \xB7 USD \xB7 Fiscal year ends Jun 30`,
  mark: {
    letter: `H`,
    bg: `#0f766e`,
    fg: `#ffffff`
  },
  kpis: [{
    label: `Revenue`,
    value: `$212k`,
    previous: `$198k`,
    delta: 7.1,
    points: [30, 29, 31, 33, 32, 34, 35, 34, 36, 37],
    color: `#2f6bff`
  }, {
    label: `Cash`,
    value: `$1.21m`,
    previous: `$1.19m`,
    delta: 1.7,
    points: [38, 38, 39, 38, 39, 40, 39, 40, 41, 41],
    color: `#0ea5e9`
  }, {
    label: `Gross margin`,
    value: `58.3%`,
    previous: `59.0%`,
    delta: -0.7,
    points: [36, 35, 36, 35, 35, 34, 35, 34, 34, 33],
    color: `#8b5cf6`
  }, {
    label: `Net profit`,
    value: `$18.4k`,
    previous: `$12.0k`,
    delta: 53.3,
    points: [20, 21, 19, 22, 24, 23, 26, 27, 29, 31],
    color: `#ec4899`
  }],
  reports: [{
    name: `Clinic margins`,
    when: `3d ago`,
    summary: `Two of nine clinics run below 40% margin; both opened this year.`
  }],
  context: [{
    id: `h1`,
    kind: `note`,
    author: i.theo,
    when: `yesterday`,
    text: `New clinics need 12 months before they count in the @Clinic margins comparison.`
  }, {
    id: `h2`,
    kind: `integration`,
    when: `2w ago`,
    app: `Stripe`,
    connected: true
  }]
}];
var o = {
  all: `All`,
  note: `Notes`,
  files: `Files`,
  report: `Reports`,
  integration: `Integrations`
};
var s = [{
  id: `context`,
  label: `Context`
}, {
  id: `reports`,
  label: `Reports`
}, {
  id: `financials`,
  label: `Financials`
}, {
  id: `settings`,
  label: `Settings`
}];
var c = [{
  name: `board-deck-Q3.pdf`,
  type: `pdf`
}, {
  name: `pipeline-export.csv`,
  type: `csv`
}, {
  name: `headcount.xlsx`,
  type: `xlsx`
}];
var l = [`#7c3aed`, `#db2777`, `#0891b2`, `#65a30d`];
function U1Component({
  clients = a,
  me = {
    name: `Sofia Lind`,
    avatar: `/avatars/sofia.jpg`
  },
  onAddContext,
  onCreateClient,
  className
}) {
  let f2 = `ui-cx` + n3.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
  let [p2, setP] = n3.useState(clients);
  let [de, setDe] = n3.useState(clients[0]?.id);
  let [ge, setGe] = n3.useState(() => Object.fromEntries(clients.map((e) => [e.id, e.context])));
  let [ve, setVe] = n3.useState({});
  let [x, setX] = n3.useState(`context`);
  let [C, setC] = n3.useState(null);
  let [be, setBe] = n3.useState(null);
  let [E, setE] = n3.useState(null);
  let [O, setO] = n3.useState(``);
  let [A, setA] = n3.useState(`all`);
  let [M, setM] = n3.useState(``);
  let [P, setP_1] = n3.useState(0);
  let [I, setI] = n3.useState([]);
  let [R, setR] = n3.useState(null);
  let [xe, setXe] = n3.useState(false);
  let [V, setV] = n3.useState(``);
  let [Ce, setCe] = n3.useState({});
  let [Te, setTe] = n3.useState({});
  let [De, setDe_1] = n3.useState(null);
  let [H, setH] = n3.useState(null);
  let WRef = n3.useRef(null);
  let G = p2.find((e) => e.id === de) ?? p2[0];
  let K = ge[G.id] ?? [];
  let reports = G.reports.map((e) => e.name);
  let Ae = K.filter((e) => (A === `all` || e.kind === A) && te(e, O));
  let q = Ce[G.id] ?? `3m ago`;
  let je = (e, t) => Te[G.id]?.[e] ?? t;
  let J = K.find((e) => e.kind === `integration` && e.app === `Stripe`)?.connected ?? false;
  let Y = H === null ? null : M.slice(H + 1, P);
  let X = Y !== null && !/\n/.test(Y) ? reports.filter((e) => e.toLowerCase().includes(Y.toLowerCase())).slice(0, 4) : [];
  n3.useEffect(() => {
    if (!R) {
      return;
    }
    let e = () => {
      setR(null);
      setXe(false);
    };
    let t = (t2) => {
      if (!t2.target.closest?.(`[data-cx-menu]`)) {
        e();
      }
    };
    let n4 = (t2) => t2.key === `Escape` && e();
    document.addEventListener(`pointerdown`, t);
    document.addEventListener(`keydown`, n4);
    return () => {
      document.removeEventListener(`pointerdown`, t);
      document.removeEventListener(`keydown`, n4);
    };
  }, [R]);
  let Z = (e) => {
    setGe((t) => ({
      ...t,
      [G.id]: [e, ...t[G.id] ?? []]
    }));
    setDe_1(e.id);
  };
  let Q = (e) => {
    setDe(e);
    setR(null);
    setXe(false);
    setO(``);
    setA(`all`);
    setC(null);
    setBe(null);
  };
  let Me = () => {
    let e = V.trim();
    if (!e) {
      return;
    }
    let id = `client-${Date.now()}`;
    let n4 = {
      id,
      name: e,
      meta: `New client \xB7 connect their books under Settings`,
      mark: {
        letter: e.charAt(0).toUpperCase(),
        bg: l[p2.length % l.length],
        fg: `#ffffff`
      },
      kpis: G.kpis.map((e2) => ({
        ...e2,
        value: `\u2013`,
        previous: `\u2013`,
        delta: 0,
        points: e2.points.map(() => 1)
      })),
      reports: [],
      context: []
    };
    setP((e2) => [...e2, n4]);
    setGe((e2) => ({
      ...e2,
      [id]: []
    }));
    onCreateClient?.(e);
    setV(``);
    Q(id);
    setX(`context`);
  };
  let Ne = () => {
    if (q === `syncing`) {
      return;
    }
    let e = G.id;
    setCe((t) => ({
      ...t,
      [e]: `syncing`
    }));
    setTimeout(() => setCe((t) => ({
      ...t,
      [e]: `just now`
    })), 900);
  };
  let Pe = () => {
    let text = M.trim();
    if (!text && !I.length) {
      return;
    }
    let id = `new-${Date.now()}`;
    Z(I.length ? {
      id,
      kind: `files`,
      author: me,
      when: `just now`,
      files: I,
      text: text || void 0
    } : {
      id,
      kind: `note`,
      author: me,
      when: `just now`,
      text
    });
    onAddContext?.(G.id, text, I);
    setM(``);
    setI([]);
    setA(`all`);
    setO(``);
    setH(null);
  };
  let Fe = (e) => setGe((t) => ({
    ...t,
    [G.id]: (t[G.id] ?? []).filter((t2) => t2.id !== e)
  }));
  let Ie = () => {
    let e = c.find((e2) => !I.some((t) => t.name === e2.name));
    if (e) {
      setI((t) => [...t, e]);
    }
  };
  let Le = (e, selectionStart) => {
    setM(e);
    setP_1(selectionStart);
    let n4 = e.slice(0, selectionStart);
    let r2 = n4.lastIndexOf(`@`);
    setH(r2 >= 0 && (r2 === 0 || /\s/.test(n4[r2 - 1])) && !/\n|\s\s/.test(n4.slice(r2)) ? r2 : null);
  };
  let $ = (e) => {
    if (H === null) {
      return;
    }
    let t = `${M.slice(0, H)}@${e} ${M.slice(P)}`;
    let n4 = H + e.length + 2;
    setM(t);
    setP_1(n4);
    setH(null);
    requestAnimationFrame(() => {
      WRef.current?.focus();
      WRef.current?.setSelectionRange(n4, n4);
    });
  };
  let onReport = (e) => {
    setX(`reports`);
    setBe(e);
  };
  let ze = (name) => {
    setX(`context`);
    setM((t) => `${t}${t && !t.endsWith(` `) ? ` ` : ``}@${name} `);
    requestAnimationFrame(() => WRef.current?.focus());
  };
  let Be = (report) => {
    if (!E) {
      setE(report);
      setTimeout(() => {
        setE(null);
        setVe((t) => ({
          ...t,
          [`${G.id}:${report}`]: `just now`
        }));
        Z({
          id: `rep-${Date.now()}`,
          kind: `report`,
          author: me,
          when: `just now`,
          report
        });
      }, 1100);
    }
  };
  let Ve = () => Z({
    id: `int-${Date.now()}`,
    kind: `integration`,
    when: `just now`,
    app: `Stripe`,
    connected: !J
  });
  let He = (label) => {
    setC(label);
    setX(`financials`);
  };
  let Ue = s.findIndex((e) => e.id === x);
  return /* @__PURE__ */ jsxs("section", { className: [`ui-cx`, className].filter(Boolean).join(` `), children: [
    /* @__PURE__ */ jsx("style", { href: `ui-client-context`, precedence: `default`, children: _e }),
    /* @__PURE__ */ jsxs("header", { className: `ui-cx__head`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-cx__who`, children: [
        /* @__PURE__ */ jsx(Ne1Component, { client: G, size: 36 }),
        /* @__PURE__ */ jsxs("div", { className: `ui-cx__who-text`, children: [
          /* @__PURE__ */ jsx("h2", { className: `ui-cx__name`, children: G.name }),
          /* @__PURE__ */ jsx("p", { className: `ui-cx__meta`, children: G.meta })
        ] })
      ] }, G.id),
      /* @__PURE__ */ jsxs("div", { className: `ui-cx__actions`, children: [
        /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-cx__chip-btn ui-cx__sync`, onClick: Ne, "aria-label": `Sync now`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-cx__sync-dot`, "data-state": q, "aria-hidden": `true` }),
          /* @__PURE__ */ jsx("span", { children: q === `syncing` ? `Syncing\u2026` : `Synced ${q}` }),
          /* @__PURE__ */ jsx("span", { className: `ui-cx__spin`, "data-spinning": q === `syncing` || void 0, children: /* @__PURE__ */ jsx(Y1Component, {}) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `ui-cx__pop`, "data-cx-menu": ``, children: [
          /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-cx__chip-btn`, "aria-haspopup": `listbox`, "aria-expanded": R === `client`, onClick: () => {
            setR(R === `client` ? null : `client`);
            setXe(false);
          }, children: [
            `Switch client`,
            /* @__PURE__ */ jsx(Oe1Component, {})
          ] }),
          R === `client` && /* @__PURE__ */ jsxs("div", { className: `ui-cx__menu ui-cx__menu--end`, children: [
            /* @__PURE__ */ jsx("ul", { role: `listbox`, "aria-label": `Client`, children: p2.map((e) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", { type: `button`, role: `option`, "aria-selected": e.id === G.id, className: `ui-cx__menu-item`, onClick: () => Q(e.id), children: [
              /* @__PURE__ */ jsx(Ne1Component, { client: e, size: 20 }),
              /* @__PURE__ */ jsx("span", { className: `ui-cx__menu-label`, children: e.name }),
              /* @__PURE__ */ jsx("span", { className: `ui-cx__menu-check`, children: e.id === G.id && /* @__PURE__ */ jsx(Component, {}) })
            ] }) }, e.id)) }),
            /* @__PURE__ */ jsx("div", { className: `ui-cx__menu-sep` }),
            xe ? /* @__PURE__ */ jsxs("form", { className: `ui-cx__create`, onSubmit: (e) => {
              e.preventDefault();
              Me();
            }, children: [
              /* @__PURE__ */ jsx("input", { autoFocus: true, value: V, onChange: (e) => setV(e.target.value), placeholder: `Client name`, "aria-label": `New client name`, maxLength: 40 }),
              /* @__PURE__ */ jsx("button", { type: `submit`, className: `ui-cx__primary`, disabled: !V.trim(), children: `Add` })
            ] }) : /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-cx__menu-item`, onClick: () => setXe(true), children: [
              /* @__PURE__ */ jsx("span", { className: `ui-cx__menu-plus`, children: /* @__PURE__ */ jsx(Ae1Component, {}) }),
              /* @__PURE__ */ jsx("span", { className: `ui-cx__menu-label`, children: `New client` })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `ui-cx__kpis`, children: G.kpis.map((e, t) => /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-cx__kpi`, "aria-pressed": x === `financials` && C === e.label, onClick: () => He(e.label), children: [
      /* @__PURE__ */ jsx("span", { className: `ui-cx__kpi-label`, children: e.label }),
      /* @__PURE__ */ jsxs("span", { className: `ui-cx__kpi-row`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-cx__kpi-value`, children: e.value }),
        /* @__PURE__ */ jsx(Ie1Component, { points: e.points, color: e.color, delay: t * 90 })
      ] })
    ] }, e.label)) }, `k-${G.id}`),
    /* @__PURE__ */ jsxs("div", { className: `ui-cx__card`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-cx__toolbar`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-cx__seg`, role: `tablist`, "aria-label": `Client sections`, style: {
          "--i": Ue
        }, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-cx__seg-thumb`, "aria-hidden": `true` }),
          s.map((e) => /* @__PURE__ */ jsx("button", { type: `button`, role: `tab`, id: `${f2}-tab-${e.id}`, "aria-controls": `${f2}-panel`, "aria-selected": x === e.id, onClick: () => setX(e.id), children: e.label }, e.id))
        ] }),
        x === `context` && /* @__PURE__ */ jsxs("div", { className: `ui-cx__tools`, children: [
          /* @__PURE__ */ jsxs("label", { className: `ui-cx__search`, children: [
            /* @__PURE__ */ jsx(Ce1Component, {}),
            /* @__PURE__ */ jsx("input", { value: O, onChange: (e) => setO(e.target.value), placeholder: `Search`, "aria-label": `Search context` }),
            O && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cx__clear`, "aria-label": `Clear search`, onClick: () => setO(``), children: /* @__PURE__ */ jsx(V1Component, {}) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `ui-cx__pop`, "data-cx-menu": ``, children: [
            /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-cx__chip-btn`, "aria-haspopup": `listbox`, "aria-expanded": R === `filter`, "data-active": A !== `all` || void 0, onClick: () => setR(R === `filter` ? null : `filter`), children: [
              /* @__PURE__ */ jsx(Le1Component, {}),
              o[A]
            ] }),
            R === `filter` && /* @__PURE__ */ jsx("div", { className: `ui-cx__menu ui-cx__menu--end`, children: /* @__PURE__ */ jsx("ul", { role: `listbox`, "aria-label": `Show`, children: Object.keys(o).map((e) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", { type: `button`, role: `option`, "aria-selected": A === e, className: `ui-cx__menu-item`, onClick: () => {
              setA(e);
              setR(null);
            }, children: [
              /* @__PURE__ */ jsx("span", { className: `ui-cx__menu-label`, children: o[e] }),
              /* @__PURE__ */ jsx("span", { className: `ui-cx__menu-count`, children: e === `all` ? K.length : K.filter((t) => t.kind === e).length }),
              /* @__PURE__ */ jsx("span", { className: `ui-cx__menu-check`, children: A === e && /* @__PURE__ */ jsx(Component, {}) })
            ] }) }, e)) }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-cx__panel`, id: `${f2}-panel`, role: `tabpanel`, "aria-labelledby": `${f2}-tab-${x}`, children: [
        x === `context` && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: `ui-cx__compose`, children: [
            /* @__PURE__ */ jsx(Re1Component, { person: me, size: 28 }),
            /* @__PURE__ */ jsxs("div", { className: `ui-cx__composer`, children: [
              /* @__PURE__ */ jsx("textarea", { ref: WRef, value: M, onChange: (e) => Le(e.target.value, e.target.selectionStart), onSelect: (e) => setP_1(e.currentTarget.selectionStart), onKeyDown: (e) => {
                if (X.length && (e.key === `Enter` || e.key === `Tab`)) {
                  e.preventDefault();
                  $(X[0]);
                  return;
                }
                if (e.key === `Escape`) {
                  setH(null);
                }
                if (e.key === `Enter` && (e.metaKey || e.ctrlKey)) {
                  e.preventDefault();
                  Pe();
                }
              }, rows: 2, placeholder: G.reports.length ? `Add a goal, request or decision \u2013 type @ to mention a report` : `Add a goal, request or decision for this client`, "aria-label": `New context` }),
              X.length > 0 && /* @__PURE__ */ jsx("ul", { className: `ui-cx__suggest`, role: `listbox`, "aria-label": `Mention a report`, children: X.map((e, t) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", { type: `button`, role: `option`, "aria-selected": t === 0, className: `ui-cx__menu-item`, onMouseDown: (e2) => e2.preventDefault(), onClick: () => $(e), children: [
                /* @__PURE__ */ jsx(Me1Component, {}),
                /* @__PURE__ */ jsx("span", { className: `ui-cx__menu-label`, children: e })
              ] }) }, e)) }),
              I.length > 0 && /* @__PURE__ */ jsx("div", { className: `ui-cx__attached`, children: I.map((e) => /* @__PURE__ */ jsxs("span", { className: `ui-cx__file-chip`, children: [
                /* @__PURE__ */ jsx(M1Component, { type: e.type }),
                e.name,
                /* @__PURE__ */ jsx("button", { type: `button`, "aria-label": `Remove ${e.name}`, onClick: () => setI((t) => t.filter((t2) => t2.name !== e.name)), children: /* @__PURE__ */ jsx(V1Component, {}) })
              ] }, e.name)) }),
              /* @__PURE__ */ jsxs("div", { className: `ui-cx__composer-bar`, children: [
                /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cx__icon-btn`, "aria-label": `Attach a file`, onClick: Ie, disabled: I.length >= c.length, children: /* @__PURE__ */ jsx(Ue1Component, {}) }),
                /* @__PURE__ */ jsxs("span", { className: `ui-cx__hint`, "aria-hidden": `true`, children: [
                  /* @__PURE__ */ jsx("kbd", { children: `\u2318` }),
                  /* @__PURE__ */ jsx("kbd", { children: `Enter` })
                ] }),
                /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cx__primary`, onClick: Pe, disabled: !M.trim() && !I.length, children: `Add context` })
              ] })
            ] })
          ] }),
          Ae.length > 0 ? /* @__PURE__ */ jsx("ol", { className: `ui-cx__timeline`, children: Ae.map((entry) => /* @__PURE__ */ jsx(D1Component, { entry, fresh: entry.id === De, query: O, reports, mine: `author` in entry && entry.author.name === me.name, onReport, onRemove: () => Fe(entry.id) }, entry.id)) }) : /* @__PURE__ */ jsx("div", { className: `ui-cx__empty`, children: K.length === 0 ? /* @__PURE__ */ jsx("p", { children: `No context yet \u2013 add the first goal or file above.` }) : /* @__PURE__ */ jsxs("p", { children: [
            `Nothing matches`,
            O ? ` \u201C${O}\u201D` : ``,
            A === `all` ? `` : ` in ${o[A].toLowerCase()}`,
            `.`,
            ` `,
            /* @__PURE__ */ jsx("button", { type: `button`, onClick: () => {
              setO(``);
              setA(`all`);
            }, children: `Show everything` })
          ] }) })
        ] }),
        x === `reports` && (G.reports.length ? /* @__PURE__ */ jsx("ul", { className: `ui-cx__list`, children: G.reports.map((e) => {
          let t = be === e.name;
          let disabled = E === e.name;
          return /* @__PURE__ */ jsxs("li", { className: `ui-cx__report`, "data-open": t || void 0, children: [
            /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-cx__report-head`, "aria-expanded": t, onClick: () => setBe(t ? null : e.name), children: [
              /* @__PURE__ */ jsx("span", { className: `ui-cx__row-icon`, children: /* @__PURE__ */ jsx(Fe1Component, {}) }),
              /* @__PURE__ */ jsxs("span", { className: `ui-cx__row-main`, children: [
                /* @__PURE__ */ jsx("strong", { children: e.name }),
                /* @__PURE__ */ jsx("span", { children: disabled ? `Regenerating\u2026` : `Generated ${ve[`${G.id}:${e.name}`] ?? e.when}` })
              ] }),
              /* @__PURE__ */ jsx("span", { className: `ui-cx__chevron`, children: /* @__PURE__ */ jsx(Se1Component, {}) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: `ui-cx__report-body`, children: /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { children: e.summary }),
              /* @__PURE__ */ jsxs("div", { className: `ui-cx__report-actions`, children: [
                /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-cx__chip-btn`, onClick: () => ze(e.name), children: [
                  /* @__PURE__ */ jsx(He1Component, {}),
                  `Mention in context`
                ] }),
                /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-cx__chip-btn`, onClick: () => Be(e.name), disabled, children: [
                  /* @__PURE__ */ jsx("span", { className: `ui-cx__spin`, "data-spinning": disabled || void 0, children: /* @__PURE__ */ jsx(Y1Component, {}) }),
                  disabled ? `Regenerating\u2026` : `Regenerate`
                ] })
              ] })
            ] }) })
          ] }, e.name);
        }) }) : /* @__PURE__ */ jsx("div", { className: `ui-cx__empty ui-cx__empty--flush`, children: /* @__PURE__ */ jsx("p", { children: `No reports yet. Connect the books under Settings to generate the first one.` }) })),
        x === `financials` && /* @__PURE__ */ jsx("ul", { className: `ui-cx__list`, children: G.kpis.map((e) => /* @__PURE__ */ jsx("li", { className: `ui-cx__fin`, "data-active": C === e.label || void 0, children: /* @__PURE__ */ jsxs("button", { type: `button`, onClick: () => setC(C === e.label ? null : e.label), "aria-pressed": C === e.label, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-cx__fin-dot`, style: {
            background: e.color
          } }),
          /* @__PURE__ */ jsxs("span", { className: `ui-cx__row-main`, children: [
            /* @__PURE__ */ jsx("strong", { children: e.label }),
            /* @__PURE__ */ jsxs("span", { children: [
              `Previous month `,
              e.previous
            ] })
          ] }),
          /* @__PURE__ */ jsx(Ie1Component, { points: e.points, color: e.color, delay: 0, wide: true }),
          /* @__PURE__ */ jsxs("span", { className: `ui-cx__fin-value`, children: [
            /* @__PURE__ */ jsx("strong", { children: e.value }),
            e.value !== `\u2013` && /* @__PURE__ */ jsxs("span", { "data-trend": e.delta >= 0 ? `up` : `down`, children: [
              e.delta >= 0 ? `+` : `\u2212`,
              Math.abs(e.delta).toFixed(1),
              `%`
            ] })
          ] })
        ] }) }, e.label)) }),
        x === `settings` && /* @__PURE__ */ jsxs("ul", { className: `ui-cx__list`, children: [
          /* @__PURE__ */ jsxs("li", { className: `ui-cx__row`, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-cx__app`, children: /* @__PURE__ */ jsx(H1Component, {}) }),
            /* @__PURE__ */ jsxs("span", { className: `ui-cx__row-main`, children: [
              /* @__PURE__ */ jsx("strong", { children: `Stripe` }),
              /* @__PURE__ */ jsx("span", { children: J ? `Revenue and payouts sync every hour` : `Not connected` })
            ] }),
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cx__chip-btn`, onClick: Ve, children: J ? `Disconnect` : `Connect` })
          ] }),
          [[`ai`, `Use context in AI answers`, `Notes and files are read before every answer`, true], [`digest`, `Daily digest`, `A short email when new context or files arrive`, false], [`share`, `Share reports with the client`, `Generated reports show up in their portal`, false]].map(([e, t, n4, i2]) => {
            let a2 = je(e, i2);
            return /* @__PURE__ */ jsxs("li", { className: `ui-cx__row`, children: [
              /* @__PURE__ */ jsxs("span", { className: `ui-cx__row-main`, children: [
                /* @__PURE__ */ jsx("strong", { children: t }),
                /* @__PURE__ */ jsx("span", { children: n4 })
              ] }),
              /* @__PURE__ */ jsx("button", { type: `button`, role: `switch`, "aria-checked": a2, "aria-label": t, className: `ui-cx__toggle`, onClick: () => setTe((t2) => ({
                ...t2,
                [G.id]: {
                  ...t2[G.id],
                  [e]: !a2
                }
              })), children: /* @__PURE__ */ jsx("span", {}) })
            ] }, e);
          })
        ] })
      ] }, `${x}-${G.id}`)
    ] })
  ] });
}
function D1Component({
  entry,
  fresh,
  query,
  reports,
  mine,
  onReport,
  onRemove
}) {
  let c2 = (e) => p(e, query);
  return /* @__PURE__ */ jsxs("li", { className: `ui-cx__item`, "data-fresh": fresh || void 0, children: [
    /* @__PURE__ */ jsx("span", { className: `ui-cx__node`, "data-kind": entry.kind, children: entry.kind === `note` ? /* @__PURE__ */ jsx(De1Component, {}) : entry.kind === `report` ? /* @__PURE__ */ jsx(Fe1Component, {}) : entry.kind === `files` ? /* @__PURE__ */ jsx(Pe1Component, {}) : /* @__PURE__ */ jsx(H1Component, {}) }),
    /* @__PURE__ */ jsxs("div", { className: `ui-cx__body`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-cx__line`, children: [
        entry.kind === `integration` ? /* @__PURE__ */ jsxs("span", { children: [
          entry.connected ? `Connected ` : `Disconnected `,
          /* @__PURE__ */ jsx("strong", { children: c2(entry.app) })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Re1Component, { person: entry.author, size: 20 }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: c2(entry.author.name) }),
            entry.kind === `note` && ` added context`,
            entry.kind === `report` && /* @__PURE__ */ jsxs(Fragment, { children: [
              ` generated `,
              ((e) => {
                if (reports.includes(e)) {
                  return /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cx__ref`, onClick: () => onReport(e), children: c2(e) });
                }
                return /* @__PURE__ */ jsx("span", { className: `ui-cx__ref`, children: c2(e) });
              })(entry.report)
            ] }),
            entry.kind === `files` && /* @__PURE__ */ jsxs(Fragment, { children: [
              ` added `,
              entry.files.map((t, n4) => /* @__PURE__ */ jsxs("span", { className: `ui-cx__file`, children: [
                n4 > 0 && (n4 === entry.files.length - 1 ? ` and ` : `, `),
                /* @__PURE__ */ jsx(M1Component, { type: t.type }),
                /* @__PURE__ */ jsx("span", { className: `ui-cx__ref`, children: c2(t.name) })
              ] }, t.name))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: `ui-cx__when`, children: entry.when }),
        mine && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-cx__remove`, "aria-label": `Remove`, onClick: onRemove, children: /* @__PURE__ */ jsx(GeComponent, {}) })
      ] }),
      (entry.kind === `note` || entry.kind === `files` && entry.text) && /* @__PURE__ */ jsx("div", { className: `ui-cx__note`, children: ee(entry.text ?? ``, reports, query, onReport) })
    ] })
  ] });
}
function ee(e, reports, query, onReport) {
  if (!reports.length) {
    return p(e, query);
  }
  let a2 = [...reports].sort((e2, t) => t.length - e2.length).map(f);
  return e.split(RegExp(`(@(?:${a2.join(`|`)}))`, `g`)).map((e2, a3) => {
    let o2 = e2.startsWith(`@`) ? e2.slice(1) : ``;
    if (reports.includes(o2)) {
      return /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-cx__mention`, onClick: () => onReport(o2), children: [
        /* @__PURE__ */ jsx(Me1Component, {}),
        o2
      ] }, a3);
    }
    return /* @__PURE__ */ jsx("span", { children: p(e2, query) }, a3);
  });
}
var f = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
function p(e, query) {
  let n4 = query.trim();
  if (n4) {
    return e.split(RegExp(`(${f(n4)})`, `ig`)).map((e2, t) => {
      if (e2.toLowerCase() === n4.toLowerCase()) {
        return /* @__PURE__ */ jsx("mark", { children: e2 }, t);
      }
      return e2;
    });
  }
  return e;
}
var te = (e, t) => {
  let n4 = t.trim().toLowerCase();
  return !n4 || [`author` in e ? e.author.name : ``, e.kind === `note` ? e.text : ``, e.kind === `files` ? `${e.text ?? ``} ${e.files.map((e2) => e2.name).join(` `)}` : ``, e.kind === `report` ? e.report : ``, e.kind === `integration` ? e.app : ``].join(` `).toLowerCase().includes(n4);
};
function Ne1Component({
  client,
  size
}) {
  return /* @__PURE__ */ jsx("span", { className: `ui-cx__mark`, style: {
    width: size,
    height: size,
    background: client.mark.bg,
    color: client.mark.fg,
    fontSize: size * 0.5
  }, "aria-hidden": `true`, children: client.mark.letter });
}
function Re1Component({
  person,
  size
}) {
  if (person.avatar) {
    return /* @__PURE__ */ jsx("img", { className: `ui-cx__avatar`, src: person.avatar, alt: ``, width: size, height: size, style: {
      width: size,
      height: size
    } });
  }
  return /* @__PURE__ */ jsx("span", { className: `ui-cx__avatar ui-cx__avatar--initial`, style: {
    width: size,
    height: size,
    fontSize: size * 0.45
  }, "aria-hidden": `true`, children: person.name.charAt(0) });
}
function Ie1Component({
  points,
  color,
  delay,
  wide = false
}) {
  let a2 = wide ? 96 : 64;
  let o2 = Math.min(...points);
  let s2 = Math.max(...points);
  let c2 = points.map((t, n4) => [n4 / (points.length - 1) * (a2 - 4) + 2, 21 - (t - o2) / (s2 - o2 || 1) * 18]);
  let d_1 = c2.map(([e, t], n4) => `${n4 ? `L` : `M`}${e.toFixed(1)} ${t.toFixed(1)}`).join(` `);
  let [cx, cy] = c2[c2.length - 1];
  return /* @__PURE__ */ jsxs("svg", { className: `ui-cx__spark`, "data-wide": wide || void 0, viewBox: `0 0 ${a2} 24`, "aria-hidden": `true`, children: [
    /* @__PURE__ */ jsx("path", { d: d_1, pathLength: 1, stroke: color, style: {
      animationDelay: `${delay}ms`
    } }),
    /* @__PURE__ */ jsx("circle", { cx, cy, r: `2.4`, fill: color, style: {
      animationDelay: `${delay + 520}ms`
    } })
  ] });
}
function M1Component({
  type
}) {
  let fill = {
    pdf: `#e5484d`,
    xlsx: `#1f9d55`,
    csv: `#0ea5e9`,
    doc: `#2f6bff`
  }[type];
  return /* @__PURE__ */ jsxs("svg", { className: `ui-cx__file-icon`, viewBox: `0 0 16 18`, "aria-label": type.toUpperCase(), children: [
    /* @__PURE__ */ jsx("path", { d: `M3 1.5h6.5l4 4v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1Z`, fill: `var(--ui-cx-card)`, stroke: `var(--ui-cx-line-strong)` }),
    /* @__PURE__ */ jsx("path", { d: `M9.5 1.5v3a1 1 0 0 0 1 1h3`, fill: `none`, stroke: `var(--ui-cx-line-strong)` }),
    /* @__PURE__ */ jsx("rect", { x: `0.5`, y: `9.5`, width: `10`, height: `5`, rx: `1.5`, fill })
  ] });
}
var H1Component = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, className: `ui-cx__stripe`, "aria-label": `Stripe`, children: [
  /* @__PURE__ */ jsx("rect", { width: `24`, height: `24`, rx: `6`, fill: `#635BFF` }),
  /* @__PURE__ */ jsx("path", { fill: `#fff`, transform: `translate(5 5) scale(0.5833)`, d: `M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z` })
] });
var G1Component = ({
  children
}) => /* @__PURE__ */ jsx("svg", { className: `ui-cx__icon`, viewBox: `0 0 24 24`, "aria-hidden": `true`, children });
var Ae1Component = () => /* @__PURE__ */ jsx(G1Component, { children: /* @__PURE__ */ jsx("path", { d: `M12 5v14M5 12h14` }) });
var Oe1Component = () => /* @__PURE__ */ jsx(G1Component, { children: /* @__PURE__ */ jsx("path", { d: `m8 9 4-4 4 4M8 15l4 4 4-4` }) });
var Se1Component = () => /* @__PURE__ */ jsx(G1Component, { children: /* @__PURE__ */ jsx("path", { d: `m7 10 5 5 5-5` }) });
var Component = () => /* @__PURE__ */ jsx(G1Component, { children: /* @__PURE__ */ jsx("path", { d: `m5 12.5 4.5 4.5L19 7.5` }) });
var V1Component = () => /* @__PURE__ */ jsx(G1Component, { children: /* @__PURE__ */ jsx("path", { d: `M6 6l12 12M18 6 6 18` }) });
var Y1Component = () => /* @__PURE__ */ jsx(G1Component, { children: /* @__PURE__ */ jsx("path", { d: `M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5` }) });
var Ce1Component = () => /* @__PURE__ */ jsxs(G1Component, { children: [
  /* @__PURE__ */ jsx("circle", { cx: `11`, cy: `11`, r: `6.5` }),
  /* @__PURE__ */ jsx("path", { d: `m16 16 4 4` })
] });
var Le1Component = () => /* @__PURE__ */ jsx(G1Component, { children: /* @__PURE__ */ jsx("path", { d: `M4 6h16M7 12h10M10 18h4` }) });
var Ue1Component = () => /* @__PURE__ */ jsx(G1Component, { children: /* @__PURE__ */ jsx("path", { d: `m20 11.5-8.2 8.2a5 5 0 0 1-7.1-7.1l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7l-8.5 8.5a1.7 1.7 0 0 1-2.4-2.4L15 7` }) });
var De1Component = () => /* @__PURE__ */ jsx(G1Component, { children: /* @__PURE__ */ jsx("path", { d: `M5 5h14v10H9l-4 4V5Z` }) });
var Fe1Component = () => /* @__PURE__ */ jsx(G1Component, { children: /* @__PURE__ */ jsx("path", { d: `M5 19V11M12 19V5M19 19v-6` }) });
var Pe1Component = () => /* @__PURE__ */ jsx(G1Component, { children: /* @__PURE__ */ jsx("path", { d: `m12 4 8 4-8 4-8-4 8-4ZM4 12l8 4 8-4M4 16l8 4 8-4` }) });
var Me1Component = () => /* @__PURE__ */ jsx(G1Component, { children: /* @__PURE__ */ jsx("path", { d: `M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10.5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5ZM14 3.5V8h4` }) });
var He1Component = () => /* @__PURE__ */ jsxs(G1Component, { children: [
  /* @__PURE__ */ jsx("circle", { cx: `12`, cy: `12`, r: `3.5` }),
  /* @__PURE__ */ jsx("path", { d: `M15.5 12v1.5a2.5 2.5 0 0 0 5 0V12a8.5 8.5 0 1 0-3.4 6.8` })
] });
var GeComponent = () => /* @__PURE__ */ jsx(G1Component, { children: /* @__PURE__ */ jsx("path", { d: `M5 7h14M10 7V5h4v2M7 7l1 12h8l1-12` }) });
var _e = `.ui-cx{--ui-cx-tray: #f0f0f0;--ui-cx-card: #ffffff;--ui-cx-card-line: #e5e5e5;--ui-cx-line: #ececec;--ui-cx-line-strong: #dcdcdc;--ui-cx-inset: #f6f6f6;--ui-cx-ink: #171717;--ui-cx-text: #404040;--ui-cx-muted: #8f8f8f;--ui-cx-accent: #2f6bff;--ui-cx-good: #1f8a4c;--ui-cx-bad: #d92d5c;--ui-cx-mark: rgba(47, 107, 255, 0.16);--ui-cx-hover: rgba(0, 0, 0, 0.04);--ui-cx-track: rgba(0, 0, 0, 0.05);--ui-cx-thumb: #ffffff;--ui-cx-btn-top: #323137;--ui-cx-btn-bottom: #201e25;--ui-cx-btn-ring: #0d0d0d;--ui-cx-btn-text: #ffffff;--ui-cx-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);--ui-cx-pop: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 12px 32px rgba(0, 0, 0, 0.1);--ui-cx-ease: cubic-bezier(0.65, 0, 0.25, 1);--ui-cx-out: cubic-bezier(0.22, 1, 0.36, 1);--ui-cx-spring: cubic-bezier(0.34, 1.3, 0.64, 1);container-type: inline-size;width: 100%;max-width: 900px;padding: 0 6px 6px;border-radius: 24px;background: var(--ui-cx-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;color: var(--ui-cx-ink);-webkit-font-smoothing: antialiased}.ui-cx *, .ui-cx *::before, .ui-cx *::after{box-sizing: border-box}.ui-cx :where(button){margin: 0;font: inherit;color: inherit}.ui-cx :where(p, h2, h3, ol, ul){margin: 0}.ui-cx :where(ol, ul){padding: 0;list-style: none}.ui-cx mark{border-radius: 3px;background: var(--ui-cx-mark);color: inherit}.ui-cx__icon{width: 15px;height: 15px;flex: none;fill: none;stroke: currentColor;stroke-width: 1.7;stroke-linecap: round;stroke-linejoin: round}.ui-cx__head{display: flex;align-items: center;justify-content: space-between;gap: 16px;padding: 16px 10px 14px 12px}.ui-cx__who{display: flex;align-items: center;gap: 12px;min-width: 0;animation: ui-cx-in 360ms var(--ui-cx-out)}.ui-cx__who-text{display: grid;gap: 2px;min-width: 0}.ui-cx__name{font-size: 15px;font-weight: 600;letter-spacing: -0.01em}.ui-cx__meta{font-size: 12.5px;color: var(--ui-cx-muted);white-space: nowrap;overflow: hidden;text-overflow: ellipsis}.ui-cx__mark{display: grid;place-items: center;flex: none;border-radius: 30%;font-weight: 650;line-height: 1;box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08)}.ui-cx__actions{display: flex;align-items: center;gap: 8px;flex: none}.ui-cx__chip-btn{display: inline-flex;align-items: center;gap: 7px;height: 34px;padding: 0 12px;border: 0;border-radius: 10px;background: var(--ui-cx-card);box-shadow: 0 0 0 1px var(--ui-cx-card-line), var(--ui-cx-shadow);font-size: 12.5px;font-weight: 500;white-space: nowrap;cursor: pointer;transition: background 160ms ease, box-shadow 160ms ease, transform 120ms ease}.ui-cx__chip-btn:hover:not(:disabled){background: var(--ui-cx-inset)}.ui-cx__chip-btn:active:not(:disabled){transform: scale(0.97)}.ui-cx__chip-btn:disabled{opacity: 0.6;cursor: default}.ui-cx__chip-btn[data-active]{box-shadow: 0 0 0 1px var(--ui-cx-accent), var(--ui-cx-shadow);color: var(--ui-cx-accent)}.ui-cx__chip-btn > .ui-cx__icon:last-child:not(:first-child){color: var(--ui-cx-muted)}.ui-cx__sync{gap: 8px;color: var(--ui-cx-text)}.ui-cx__sync-dot{width: 7px;height: 7px;border-radius: 50%;background: #22c55e;box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.16);transition: background 200ms ease, box-shadow 200ms ease}.ui-cx__sync-dot[data-state="syncing"]{background: #f59e0b;box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.18)}.ui-cx__spin{display: grid;color: var(--ui-cx-muted)}.ui-cx__spin[data-spinning] .ui-cx__icon{animation: ui-cx-spin 0.9s linear infinite}@keyframes ui-cx-spin{to{transform: rotate(360deg)}}.ui-cx__pop{position: relative}.ui-cx__menu{position: absolute;left: 0;top: calc(100% + 6px);z-index: 5;min-width: 230px;padding: 5px;border-radius: 14px;background: var(--ui-cx-card);box-shadow: var(--ui-cx-pop);transform-origin: top left;animation: ui-cx-pop 180ms var(--ui-cx-out)}.ui-cx__menu--end{left: auto;right: 0;transform-origin: top right}@keyframes ui-cx-pop{from{opacity: 0;transform: translateY(-4px) scale(0.97)}}.ui-cx__menu-item{display: flex;align-items: center;gap: 10px;width: 100%;height: 36px;padding: 0 10px 0 8px;border: 0;border-radius: 9px;background: transparent;text-align: left;cursor: pointer}.ui-cx__menu-item:hover, .ui-cx__menu-item[aria-selected="true"]{background: var(--ui-cx-hover)}.ui-cx__menu-label{flex: 1;min-width: 0;white-space: nowrap;overflow: hidden;text-overflow: ellipsis}.ui-cx__menu-item > .ui-cx__icon{color: var(--ui-cx-muted)}.ui-cx__menu-count{color: var(--ui-cx-muted);font-variant-numeric: tabular-nums}.ui-cx__menu-check{display: grid;width: 15px;color: var(--ui-cx-accent)}.ui-cx__menu-sep{height: 1px;margin: 5px 4px;background: var(--ui-cx-line)}.ui-cx__menu-plus{display: grid;place-items: center;width: 20px;height: 20px;border-radius: 6px;background: var(--ui-cx-inset);box-shadow: inset 0 0 0 1px var(--ui-cx-line);color: var(--ui-cx-text)}.ui-cx__menu-plus .ui-cx__icon{width: 12px;height: 12px}.ui-cx__create{display: flex;gap: 6px;padding: 3px}.ui-cx__create input{flex: 1;min-width: 0;height: 32px;padding: 0 10px;border: 0;border-radius: 8px;outline: none;background: var(--ui-cx-inset);box-shadow: inset 0 0 0 1px var(--ui-cx-line);color: var(--ui-cx-ink);font: inherit}.ui-cx__create input:focus{box-shadow: inset 0 0 0 1px var(--ui-cx-muted)}.ui-cx__kpis{display: grid;grid-template-columns: repeat(4, minmax(0, 1fr));gap: 6px;margin-bottom: 6px}.ui-cx__kpi{display: grid;gap: 10px;min-width: 0;padding: 14px 16px;border: 0;border-radius: 16px;background: var(--ui-cx-card);box-shadow: 0 0 0 1px var(--ui-cx-card-line), var(--ui-cx-shadow);text-align: left;cursor: pointer;transition: box-shadow 200ms ease, transform 160ms ease;animation: ui-cx-in 360ms var(--ui-cx-out) both}.ui-cx__kpi:nth-child(2){animation-delay: 40ms}.ui-cx__kpi:nth-child(3){animation-delay: 80ms}.ui-cx__kpi:nth-child(4){animation-delay: 120ms}.ui-cx__kpi:hover{box-shadow: 0 0 0 1px var(--ui-cx-line-strong), var(--ui-cx-shadow)}.ui-cx__kpi:active{transform: scale(0.98)}.ui-cx__kpi[aria-pressed="true"]{box-shadow: 0 0 0 1.5px var(--ui-cx-accent), var(--ui-cx-shadow)}.ui-cx__kpi-label{font-size: 12.5px;color: var(--ui-cx-text)}.ui-cx__kpi-row{display: flex;align-items: flex-end;justify-content: space-between;gap: 8px}.ui-cx__kpi-value{font-size: 20px;font-weight: 600;letter-spacing: -0.02em;line-height: 1.1;font-variant-numeric: tabular-nums;white-space: nowrap}.ui-cx__spark{flex: none;width: 56px;height: 22px;overflow: visible}.ui-cx__spark[data-wide]{width: 84px}.ui-cx__spark path{fill: none;stroke-width: 1.6;stroke-linecap: round;stroke-linejoin: round;vector-effect: non-scaling-stroke;stroke-dasharray: 1;stroke-dashoffset: 1;animation: ui-cx-draw 700ms var(--ui-cx-out) forwards}.ui-cx__spark circle{opacity: 0;animation: ui-cx-fade 240ms ease forwards}@keyframes ui-cx-draw{to{stroke-dashoffset: 0}}@keyframes ui-cx-fade{to{opacity: 1}}@keyframes ui-cx-in{from{opacity: 0;transform: translateY(6px)}}.ui-cx__card{border-radius: 20px;background: var(--ui-cx-card);box-shadow: 0 0 0 1px var(--ui-cx-card-line), var(--ui-cx-shadow)}.ui-cx__toolbar{display: flex;align-items: center;justify-content: space-between;gap: 12px;padding: 12px 14px;border-bottom: 1px solid var(--ui-cx-line)}.ui-cx__seg{position: relative;display: grid;grid-template-columns: repeat(4, 84px);padding: 3px;border-radius: 10px;background: var(--ui-cx-track)}.ui-cx__seg-thumb{position: absolute;top: 3px;left: 3px;width: 84px;height: calc(100% - 6px);border-radius: 7px;background: var(--ui-cx-thumb);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);transform: translateX(calc(var(--i, 0) * 100%));transition: transform 420ms var(--ui-cx-spring)}.ui-cx__seg button{position: relative;height: 28px;padding: 0;border: 0;border-radius: 7px;background: none;font-size: 12.5px;font-weight: 500;color: var(--ui-cx-muted) !important;cursor: pointer;transition: color 200ms ease}.ui-cx__seg button[aria-selected="true"]{color: var(--ui-cx-ink) !important}.ui-cx__tools{display: flex;align-items: center;gap: 8px}.ui-cx__search{display: flex;align-items: center;gap: 8px;width: 220px;height: 34px;padding: 0 8px 0 11px;border-radius: 10px;background: var(--ui-cx-inset);box-shadow: inset 0 0 0 1px var(--ui-cx-line);color: var(--ui-cx-muted);transition: box-shadow 160ms ease, background 160ms ease}.ui-cx__search:focus-within{background: var(--ui-cx-card);box-shadow: inset 0 0 0 1px var(--ui-cx-muted)}.ui-cx__search input{flex: 1;min-width: 0;height: 100%;border: 0;outline: none;background: transparent;color: var(--ui-cx-ink);font: inherit}.ui-cx__search input::placeholder{color: var(--ui-cx-muted)}.ui-cx__clear{display: grid;place-items: center;width: 20px;height: 20px;padding: 0;border: 0;border-radius: 6px;background: transparent;color: var(--ui-cx-muted);cursor: pointer}.ui-cx__clear:hover{background: var(--ui-cx-hover);color: var(--ui-cx-ink)}.ui-cx__clear .ui-cx__icon{width: 12px;height: 12px}.ui-cx__panel{padding: 22px 24px 26px;animation: ui-cx-in 300ms var(--ui-cx-out)}.ui-cx__compose{display: grid;grid-template-columns: 28px minmax(0, 1fr);gap: 14px;align-items: start}.ui-cx__compose > .ui-cx__avatar{margin-top: 6px}.ui-cx__composer{position: relative;border-radius: 14px;background: var(--ui-cx-card);box-shadow: 0 0 0 1px var(--ui-cx-card-line), var(--ui-cx-shadow);transition: box-shadow 160ms ease}.ui-cx__composer:focus-within{box-shadow: 0 0 0 1px var(--ui-cx-muted), var(--ui-cx-shadow)}.ui-cx__composer textarea{display: block;width: 100%;min-height: 62px;max-height: 180px;padding: 12px 14px 4px;border: 0;outline: none;resize: none;background: transparent;color: var(--ui-cx-ink);font: inherit;line-height: 1.55;field-sizing: content}.ui-cx__composer textarea::placeholder{color: var(--ui-cx-muted)}.ui-cx__suggest{position: absolute;left: 10px;top: calc(100% - 40px);z-index: 4;min-width: 220px;padding: 5px;border-radius: 12px;background: var(--ui-cx-card);box-shadow: var(--ui-cx-pop);animation: ui-cx-pop 160ms var(--ui-cx-out)}.ui-cx__attached{display: flex;flex-wrap: wrap;gap: 6px;padding: 6px 14px 2px}.ui-cx__file-chip{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 4px 0 8px;border-radius: 8px;background: var(--ui-cx-inset);box-shadow: inset 0 0 0 1px var(--ui-cx-line);color: var(--ui-cx-text);font-size: 12px;animation: ui-cx-pop 200ms var(--ui-cx-out)}.ui-cx__file-chip button{display: grid;place-items: center;width: 20px;height: 20px;padding: 0;border: 0;border-radius: 6px;background: transparent;color: var(--ui-cx-muted);cursor: pointer}.ui-cx__file-chip button:hover{background: var(--ui-cx-hover);color: var(--ui-cx-ink)}.ui-cx__file-chip .ui-cx__icon{width: 12px;height: 12px}.ui-cx__file-chip .ui-cx__file-icon{margin: 0}.ui-cx__composer-bar{display: flex;align-items: center;gap: 8px;padding: 8px 10px 10px}.ui-cx__icon-btn{display: grid;place-items: center;width: 30px;height: 30px;padding: 0;border: 0;border-radius: 8px;background: transparent;color: var(--ui-cx-muted);cursor: pointer;transition: background 160ms ease, color 160ms ease}.ui-cx__icon-btn:hover:not(:disabled){background: var(--ui-cx-hover);color: var(--ui-cx-ink)}.ui-cx__icon-btn:disabled{opacity: 0.4;cursor: default}.ui-cx__hint{display: inline-flex;gap: 3px;margin-left: auto}.ui-cx__hint kbd{display: grid;place-items: center;min-width: 20px;height: 20px;padding: 0 5px;border-radius: 5px;background: var(--ui-cx-inset);box-shadow: inset 0 0 0 1px var(--ui-cx-line);color: var(--ui-cx-muted);font-family: inherit;font-size: 11px;font-weight: 500}.ui-cx__primary{height: 32px;padding: 0 14px;border: 0;border-radius: 9px;background: linear-gradient(var(--ui-cx-btn-top), var(--ui-cx-btn-bottom));box-shadow: 0 0 0 1px var(--ui-cx-btn-ring), inset 0 1px 0 rgba(255, 255, 255, 0.14);color: var(--ui-cx-btn-text) !important;font-size: 12.5px;font-weight: 500;white-space: nowrap;cursor: pointer;transition: opacity 160ms ease, transform 120ms ease}.ui-cx__primary:active:not(:disabled){transform: scale(0.97)}.ui-cx__primary:disabled{opacity: 0.35;cursor: default}.ui-cx__timeline{position: relative;margin-top: 28px}.ui-cx__timeline::before{content: "";position: absolute;left: 13.5px;top: 14px;bottom: 14px;width: 1px;background: var(--ui-cx-line)}.ui-cx__item{position: relative;display: grid;grid-template-columns: 28px minmax(0, 1fr);gap: 14px;padding-bottom: 26px}.ui-cx__item:last-child{padding-bottom: 0}.ui-cx__item[data-fresh]{animation: ui-cx-new 520ms var(--ui-cx-out)}@keyframes ui-cx-new{from{opacity: 0;transform: translateY(-8px)}}.ui-cx__node{position: relative;z-index: 1;display: grid;place-items: center;width: 28px;height: 28px;border-radius: 50%;background: var(--ui-cx-card);box-shadow: 0 0 0 1px var(--ui-cx-line-strong), 0 0 0 5px var(--ui-cx-card);color: var(--ui-cx-muted)}.ui-cx__node .ui-cx__icon{width: 13px;height: 13px}.ui-cx__node[data-kind="integration"]{background: transparent;box-shadow: 0 0 0 5px var(--ui-cx-card)}.ui-cx__stripe{display: block;width: 26px;height: 26px}.ui-cx__body{min-width: 0;padding-top: 4px}.ui-cx__line{display: flex;align-items: flex-start;gap: 8px;min-height: 20px;color: var(--ui-cx-text);line-height: 20px}.ui-cx__line > .ui-cx__avatar{margin-top: 0}.ui-cx__line > span:not(.ui-cx__when){flex: 0 1 auto;min-width: 0}.ui-cx__line strong{color: var(--ui-cx-ink);font-weight: 500}.ui-cx__when{flex: none;color: var(--ui-cx-muted);white-space: nowrap}.ui-cx__when::before{content: "\xB7";margin-right: 8px}.ui-cx__ref{display: inline;padding: 0;border: 0;background: none;color: var(--ui-cx-ink);font-weight: 500;text-decoration: underline;text-decoration-color: var(--ui-cx-line-strong);text-underline-offset: 3px;transition: text-decoration-color 160ms ease}button.ui-cx__ref{cursor: pointer}button.ui-cx__ref:hover{text-decoration-color: currentColor}.ui-cx__file{white-space: nowrap}.ui-cx__file-icon{display: inline-block;width: 12px;height: 14px;margin: 0 4px 0 2px;vertical-align: -2px}.ui-cx__remove{display: grid;place-items: center;flex: none;width: 22px;height: 22px;margin: -1px 0 0 auto;padding: 0;border: 0;border-radius: 6px;background: transparent;color: var(--ui-cx-muted);opacity: 0;cursor: pointer;transition: opacity 160ms ease, background 160ms ease, color 160ms ease}.ui-cx__item:hover .ui-cx__remove, .ui-cx__remove:focus-visible{opacity: 1}.ui-cx__remove:hover{background: var(--ui-cx-hover);color: var(--ui-cx-bad)}.ui-cx__remove .ui-cx__icon{width: 13px;height: 13px}.ui-cx__note{margin-top: 10px;padding: 12px 14px;border-radius: 12px;background: var(--ui-cx-inset);box-shadow: inset 0 0 0 1px var(--ui-cx-line);color: var(--ui-cx-text);line-height: 1.6}.ui-cx__mention{display: inline-flex;align-items: center;gap: 4px;margin: 0 1px;padding: 0 6px 0 5px;border: 0;border-radius: 6px;background: color-mix(in srgb, var(--ui-cx-accent) 10%, transparent);color: var(--ui-cx-accent) !important;font-weight: 500;line-height: 20px;vertical-align: -1px;white-space: nowrap;cursor: pointer;transition: background 160ms ease}.ui-cx__mention:hover{background: color-mix(in srgb, var(--ui-cx-accent) 16%, transparent)}.ui-cx__mention .ui-cx__icon{width: 12px;height: 12px}.ui-cx__avatar{display: block;flex: none;border-radius: 50%;object-fit: cover}.ui-cx__avatar--initial{display: grid;place-items: center;background: var(--ui-cx-inset);color: var(--ui-cx-text);font-weight: 600}.ui-cx__empty{margin-top: 28px;padding: 22px;border-radius: 14px;background: var(--ui-cx-inset);color: var(--ui-cx-muted);text-align: center}.ui-cx__empty--flush{margin-top: 0}.ui-cx__empty button{padding: 0;border: 0;background: none;color: var(--ui-cx-ink);font-weight: 500;text-decoration: underline;text-underline-offset: 3px;cursor: pointer}.ui-cx__list{overflow: hidden;border-radius: 14px;box-shadow: 0 0 0 1px var(--ui-cx-line)}.ui-cx__list > li + li{border-top: 1px solid var(--ui-cx-line)}.ui-cx__row{display: flex;align-items: center;gap: 14px;min-height: 66px;padding: 12px 16px}.ui-cx__row-main{display: grid;gap: 3px;flex: 1;min-width: 0;text-align: left}.ui-cx__row-main strong{font-weight: 500;color: var(--ui-cx-ink)}.ui-cx__row-main span{color: var(--ui-cx-muted);font-size: 12.5px}.ui-cx__row-icon{display: grid;place-items: center;flex: none;width: 32px;height: 32px;border-radius: 9px;background: var(--ui-cx-inset);box-shadow: inset 0 0 0 1px var(--ui-cx-line);color: var(--ui-cx-muted)}.ui-cx__app{display: grid;flex: none}.ui-cx__app .ui-cx__stripe{width: 32px;height: 32px}.ui-cx__report-head{display: flex;align-items: center;gap: 14px;width: 100%;min-height: 66px;padding: 12px 16px;border: 0;background: transparent;cursor: pointer;transition: background 160ms ease}.ui-cx__report-head:hover{background: var(--ui-cx-hover)}.ui-cx__chevron{display: grid;color: var(--ui-cx-muted);transition: transform 300ms var(--ui-cx-ease)}.ui-cx__report[data-open] .ui-cx__chevron{transform: rotate(180deg)}.ui-cx__report-body{display: grid;grid-template-rows: 0fr;transition: grid-template-rows 320ms var(--ui-cx-ease)}.ui-cx__report[data-open] .ui-cx__report-body{grid-template-rows: 1fr}.ui-cx__report-body > div{overflow: hidden;padding: 0 16px 0 62px}.ui-cx__report-body p{color: var(--ui-cx-text);line-height: 1.6}.ui-cx__report-actions{display: flex;flex-wrap: wrap;gap: 8px;padding: 14px 0 18px}.ui-cx__fin button{display: flex;align-items: center;gap: 14px;width: 100%;min-height: 66px;padding: 12px 16px;border: 0;background: transparent;cursor: pointer;transition: background 200ms ease}.ui-cx__fin button:hover{background: var(--ui-cx-hover)}.ui-cx__fin[data-active] button{background: color-mix(in srgb, var(--ui-cx-accent) 6%, transparent)}.ui-cx__fin-dot{flex: none;width: 8px;height: 8px;border-radius: 50%}.ui-cx__fin-value{display: grid;justify-items: end;gap: 3px;min-width: 84px}.ui-cx__fin-value strong{font-size: 14px;font-weight: 600;font-variant-numeric: tabular-nums}.ui-cx__fin-value span{font-size: 12px;font-weight: 500;font-variant-numeric: tabular-nums}.ui-cx__fin-value [data-trend="up"]{color: var(--ui-cx-good)}.ui-cx__fin-value [data-trend="down"]{color: var(--ui-cx-bad)}.ui-cx__toggle{position: relative;flex: none;width: 36px;height: 22px;padding: 0;border: 0;border-radius: 999px;background: var(--ui-cx-line-strong);cursor: pointer;transition: background 200ms ease}.ui-cx__toggle span{position: absolute;left: 2px;top: 2px;width: 18px;height: 18px;border-radius: 50%;background: #fff;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);transition: transform 260ms var(--ui-cx-spring)}.ui-cx__toggle[aria-checked="true"]{background: var(--ui-cx-accent)}.ui-cx__toggle[aria-checked="true"] span{transform: translateX(14px)}.ui-cx button:focus-visible, .ui-cx textarea:focus-visible, .ui-cx input:focus-visible{outline: 2px solid var(--ui-cx-accent);outline-offset: 2px}@container (max-width: 680px){.ui-cx__head{flex-wrap: wrap}.ui-cx__actions{width: 100%}.ui-cx__actions > .ui-cx__pop{margin-left: auto}.ui-cx__kpis{grid-template-columns: repeat(2, minmax(0, 1fr))}.ui-cx__toolbar{flex-direction: column;align-items: stretch}.ui-cx__seg{grid-template-columns: repeat(4, minmax(0, 1fr))}.ui-cx__seg-thumb{width: calc((100% - 6px) / 4)}.ui-cx__tools{width: 100%}.ui-cx__search{flex: 1;width: auto}.ui-cx__panel{padding: 18px 16px 20px}.ui-cx__hint{display: none}.ui-cx__composer-bar .ui-cx__primary{margin-left: auto}.ui-cx__fin .ui-cx__spark{display: none}.ui-cx__report-body > div{padding-left: 16px}.ui-cx__line{flex-wrap: wrap;row-gap: 2px}.ui-cx__line > span:not(.ui-cx__when){flex: 1 1 calc(100% - 28px)}.ui-cx__when{order: 3;margin-left: 28px}.ui-cx__when::before{content: none}.ui-cx__file{white-space: normal}}@media (prefers-reduced-motion: reduce){.ui-cx *, .ui-cx *::before, .ui-cx *::after{animation-duration: 1ms !important;transition-duration: 1ms !important}}.ui-cx input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-cx textarea:focus-visible, .ui-cx [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-cx{--ui-cx-tray: #161618;--ui-cx-card: #232326;--ui-cx-card-line: rgba(255, 255, 255, 0.08);--ui-cx-line: rgba(255, 255, 255, 0.07);--ui-cx-line-strong: rgba(255, 255, 255, 0.14);--ui-cx-inset: #1c1c1f;--ui-cx-ink: #ededed;--ui-cx-text: #c4c4c4;--ui-cx-muted: #8f8f8f;--ui-cx-accent: #6b95ff;--ui-cx-good: #4ade80;--ui-cx-bad: #fb7185;--ui-cx-mark: rgba(107, 149, 255, 0.28);--ui-cx-hover: rgba(255, 255, 255, 0.05);--ui-cx-track: rgba(255, 255, 255, 0.06);--ui-cx-thumb: #313135;--ui-cx-btn-top: #f4f4f5;--ui-cx-btn-bottom: #e4e4e7;--ui-cx-btn-ring: rgba(0, 0, 0, 0.6);--ui-cx-btn-text: #121213;--ui-cx-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);--ui-cx-pop: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 16px 40px rgba(0, 0, 0, 0.5)}:where(.dark, [data-theme="dark"]) .ui-cx__toggle span{background: #ededed}:where(.dark, [data-theme="dark"]) .ui-cx__mark{box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1)}`;
var width = 900;
function VeComponent() {
  let eRef = n3.useRef(null);
  let [t, setT] = n3.useState(null);
  n3.useLayoutEffect(() => {
    let eRef_current = eRef.current;
    let n4 = eRef_current?.closest(`.card__preview`);
    let r2 = n4 ?? eRef_current?.closest(`.stage`);
    if (!eRef_current || !r2) {
      return;
    }
    let a2 = () => {
      let r_clientWidth = r2.clientWidth;
      if (n4) {
        return setT({
          scale: (r_clientWidth - 48) / width,
          card: true
        });
      }
      if (r_clientWidth < 760) {
        return setT(null);
      }
      setT({
        scale: Math.min(0.82, (r_clientWidth - 140) / width),
        card: false
      });
    };
    a2();
    let o2 = new ResizeObserver(a2);
    o2.observe(r2);
    return () => o2.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("div", { ref: eRef, className: `context-demo`, "data-fit": t ? t.card ? `card` : `stage` : void 0, children: /* @__PURE__ */ jsx("div", { className: `context-demo__frame`, style: t ? t.card ? {
    width,
    transform: `scale(${t.scale})`
  } : {
    width,
    zoom: t.scale
  } : void 0, children: /* @__PURE__ */ jsx(U1Component, {}) }) });
}

export {
  VeComponent
};
