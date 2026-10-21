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

// reconstructed/demo-Dxm1xr9_.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = [`(GMT \u221208:00) Los Angeles`, `(GMT \u221205:00) New York`, `(GMT \u221203:00) S\xE3o Paulo`, `(GMT +00:00) London`, `(GMT +01:00) Berlin`, `(GMT +01:00) Amsterdam`, `(GMT +01:00) Warsaw`, `(GMT +02:00) Athens`, `(GMT +04:00) Dubai`, `(GMT +05:30) Mumbai`, `(GMT +08:00) Singapore`, `(GMT +09:00) Tokyo`, `(GMT +10:00) Sydney`];
var a = /^(?!-)[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/i;
var o = (siteUrl) => siteUrl.trim().replace(/^https?:\/\//i, ``).replace(/\/+$/, ``);
function S1Component({
  name,
  logo,
  count,
  meta,
  defaultValues,
  siteHint = `Your store's primary domain, without https://`,
  timeZones = i,
  onGenerateKey,
  onSave,
  onToggle,
  className
}) {
  let b = {
    enabled: true,
    siteUrl: ``,
    timeZone: timeZones[0],
    apiKey: null,
    ...defaultValues
  };
  let [x, setX] = n3.useState(b);
  let [C, setC] = n3.useState(b);
  let [T, setT] = n3.useState(`idle`);
  let [D, setD] = n3.useState(false);
  let [k, setK] = n3.useState(false);
  let [j, setJ] = n3.useState(false);
  let N = n3.useId();
  let id = n3.useId();
  let siteUrl = o(C.siteUrl);
  let I = siteUrl === `` || a.test(siteUrl);
  let L = C.siteUrl !== x.siteUrl || C.timeZone !== x.timeZone || C.apiKey !== x.apiKey;
  let R = (e) => setC((t) => ({
    ...t,
    ...e
  }));
  let z = async () => {
    if (T !== `busy`) {
      setT(`busy`);
      try {
        let apiKey = await (onGenerateKey ? onGenerateKey() : new Promise((resolve) => setTimeout(() => resolve(`sk_live_${Array.from(crypto.getRandomValues(new Uint8Array(16)), (e) => e.toString(16).padStart(2, `0`)).join(``)}`), 700)));
        R({
          apiKey
        });
        setD(true);
      } finally {
        setT(`idle`);
      }
    }
  };
  let B = async () => {
    if (C.apiKey) {
      try {
        await navigator.clipboard.writeText(C.apiKey);
        setK(true);
        setTimeout(() => setK(false), 1400);
      } catch {
      }
    }
  };
  let V = async () => {
    if (!I || j) {
      return;
    }
    setJ(true);
    let e = {
      ...C,
      siteUrl
    };
    try {
      await onSave?.(e);
      setC(e);
      setX(e);
    } finally {
      setJ(false);
    }
  };
  let H = C.apiKey ? `${C.apiKey.slice(0, 8)}${`\u2022`.repeat(14)}${C.apiKey.slice(-4)}` : ``;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { href: `ui-integration-settings`, precedence: `default`, children: f }),
    /* @__PURE__ */ jsxs("section", { className: [`ui-is`, className].filter(Boolean).join(` `), "aria-label": `${name} settings`, "data-off": !C.enabled || void 0, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-is__head`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-is__logo`, children: logo }),
        /* @__PURE__ */ jsxs("span", { className: `ui-is__who`, children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-is__name`, children: [
            name,
            count !== void 0 && /* @__PURE__ */ jsx("span", { className: `ui-is__count`, children: count.toLocaleString(`en-US`) })
          ] }),
          /* @__PURE__ */ jsx("span", { className: `ui-is__meta`, children: C.enabled ? meta : `Paused \u2013 no data is synced` })
        ] }),
        /* @__PURE__ */ jsx("button", { type: `button`, role: `switch`, "aria-checked": C.enabled, "aria-label": `${name} sync`, className: `ui-is__switch`, onClick: () => {
          let e = !C.enabled;
          R({
            enabled: e
          });
          setX((t) => ({
            ...t,
            enabled: e
          }));
          onToggle?.(e);
        }, children: /* @__PURE__ */ jsx("span", {}) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-is__fold`, "data-open": C.enabled || void 0, inert: !C.enabled, children: /* @__PURE__ */ jsxs("div", { className: `ui-is__fold-inner`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-is__card`, children: [
          /* @__PURE__ */ jsxs("div", { className: `ui-is__section`, children: [
            C.apiKey ? /* @__PURE__ */ jsxs("div", { className: `ui-is__key`, "data-new": D || void 0, children: [
              /* @__PURE__ */ jsx("code", { children: D ? C.apiKey : H }),
              /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-is__mini`, "aria-label": D ? `Hide key` : `Show key`, onClick: () => setD((e) => !e), children: /* @__PURE__ */ jsx(D1Component, { d: D ? `M2 8s2.2-4.5 6-4.5S14 8 14 8s-2.2 4.5-6 4.5S2 8 2 8ZM2.5 2.5l11 11` : `M2 8s2.2-4.5 6-4.5S14 8 14 8s-2.2 4.5-6 4.5S2 8 2 8ZM8 9.8a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z`, size: 15 }) }),
              /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-is__mini`, "aria-label": `Copy key`, onClick: B, children: /* @__PURE__ */ jsx(D1Component, { d: k ? `m3.5 8.5 3 3 6-7` : `M5.5 5.5V3.5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2M3.5 5.5h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z`, size: 15 }) }),
              /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-is__regen`, onClick: z, disabled: T === `busy`, children: T === `busy` ? /* @__PURE__ */ jsx("span", { className: `ui-is__spinner`, "aria-hidden": `true` }) : `Regenerate` })
            ] }) : /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-is__generate`, onClick: z, disabled: T === `busy`, children: [
              /* @__PURE__ */ jsx("span", { children: T === `busy` ? `Generating\u2026` : `Generate a new API key` }),
              T === `busy` ? /* @__PURE__ */ jsx("span", { className: `ui-is__spinner`, "aria-hidden": `true` }) : /* @__PURE__ */ jsx(L1Component, {})
            ] }),
            C.apiKey && D && /* @__PURE__ */ jsx("p", { className: `ui-is__note`, role: `status`, children: k ? `Copied to the clipboard.` : `Copy it now \u2013 it is shown in full only once.` })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `ui-is__section`, children: [
            /* @__PURE__ */ jsx("label", { className: `ui-is__label`, htmlFor: N, children: `Site address` }),
            /* @__PURE__ */ jsxs("div", { className: `ui-is__field`, "data-invalid": !I || void 0, children: [
              /* @__PURE__ */ jsx("span", { className: `ui-is__prefix`, children: `https://` }),
              /* @__PURE__ */ jsx("input", { id: N, value: C.siteUrl, onChange: (e) => R({
                siteUrl: e.target.value.replace(/^https?:\/\//i, ``)
              }), placeholder: `yourstore.com`, inputMode: `url`, autoComplete: `off`, spellCheck: false, "aria-invalid": !I, "aria-describedby": id }),
              siteUrl && I && /* @__PURE__ */ jsx("span", { className: `ui-is__ok`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx(D1Component, { d: `m3.5 8.5 3 3 6-7`, size: 14 }) })
            ] }),
            /* @__PURE__ */ jsx("p", { className: `ui-is__hint`, id, "data-error": !I || void 0, children: I ? siteHint : `That doesn't look like a domain \u2013 try something like yourstore.com` })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `ui-is__section`, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-is__label`, id: `${N}-tz`, children: `Time zone` }),
            /* @__PURE__ */ jsx(C1Component, { zones: timeZones, value: C.timeZone, onChange: (timeZone) => R({
              timeZone
            }), labelledBy: `${N}-tz` })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `ui-is__save`, "data-open": L || void 0, inert: !L, children: /* @__PURE__ */ jsxs("div", { className: `ui-is__save-inner`, children: [
          /* @__PURE__ */ jsx("span", { children: `Unsaved changes` }),
          /* @__PURE__ */ jsxs("div", { className: `ui-is__save-actions`, children: [
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-is__btn`, onClick: () => setC(x), children: `Discard` }),
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-is__btn ui-is__btn--primary`, onClick: V, disabled: !I || j, children: j ? `Saving\u2026` : `Save` })
          ] })
        ] }) })
      ] }) })
    ] })
  ] });
}
function C1Component({
  zones,
  value,
  onChange,
  labelledBy
}) {
  let [o2, setO] = n3.useState(false);
  let [c, setC] = n3.useState(``);
  let fRef = n3.useRef(null);
  n3.useEffect(() => {
    if (!o2) {
      return;
    }
    let e = (e2) => !fRef.current?.contains(e2.target) && setO(false);
    let t = (e2) => e2.key === `Escape` && setO(false);
    window.addEventListener(`pointerdown`, e);
    window.addEventListener(`keydown`, t);
    return () => {
      window.removeEventListener(`pointerdown`, e);
      window.removeEventListener(`keydown`, t);
    };
  }, [o2]);
  let p = n3.useMemo(() => zones.filter((e) => e.toLowerCase().includes(c.trim().toLowerCase())), [zones, c]);
  return /* @__PURE__ */ jsxs("div", { className: `ui-is__zone`, ref: fRef, children: [
    /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-is__field ui-is__zone-btn`, "aria-haspopup": `listbox`, "aria-expanded": o2, "aria-labelledby": labelledBy, onClick: () => {
      setO((e) => !e);
      setC(``);
    }, children: [
      /* @__PURE__ */ jsx("span", { children: value }),
      /* @__PURE__ */ jsx(UComponent, {})
    ] }),
    o2 && /* @__PURE__ */ jsxs("div", { className: `ui-is__menu`, children: [
      /* @__PURE__ */ jsx("input", { className: `ui-is__menu-search`, autoFocus: true, value: c, onChange: (e) => setC(e.target.value), placeholder: `Search city or offset`, "aria-label": `Search time zones` }),
      /* @__PURE__ */ jsxs("div", { className: `ui-is__menu-list`, role: `listbox`, "aria-labelledby": labelledBy, children: [
        p.length === 0 && /* @__PURE__ */ jsx("p", { className: `ui-is__menu-empty`, children: `No time zone matches.` }),
        p.map((e) => /* @__PURE__ */ jsxs("button", { type: `button`, role: `option`, "aria-selected": e === value, className: `ui-is__option`, onClick: () => {
          onChange(e);
          setO(false);
        }, children: [
          e,
          e === value && /* @__PURE__ */ jsx(D1Component, { d: `m3.5 8.5 3 3 6-7`, size: 14 })
        ] }, e))
      ] })
    ] })
  ] });
}
var L1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, width: `16`, height: `16`, fill: `currentColor`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M10.5 1.5a4 4 0 0 0-3.86 5.05L1.8 11.4a1 1 0 0 0-.3.7v1.9a.5.5 0 0 0 .5.5h1.9a.5.5 0 0 0 .5-.5V13h1v-1h1v-1l.95-.95A4 4 0 1 0 10.5 1.5Zm1 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z` }) });
var UComponent = () => /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, width: `16`, height: `16`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("circle", { cx: `8`, cy: `8`, r: `6.5`, fill: `var(--ui-is-muted)` }),
  /* @__PURE__ */ jsx("path", { d: `M8 4.5V8h3`, fill: `none`, stroke: `var(--ui-is-field)`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round` })
] });
var D1Component = ({
  d,
  size = 16
}) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 16 16`, width: size, height: size, fill: `none`, stroke: `currentColor`, strokeWidth: `1.4`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d }) });
var f = `.ui-is{--ui-is-tray: #f0f0f0;--ui-is-card: #ffffff;--ui-is-line: #f0f0f0;--ui-is-ink: #171717;--ui-is-text: #404040;--ui-is-muted: #8f8f8f;--ui-is-accent: #2f6bff;--ui-is-ok: #1f8a4c;--ui-is-danger: #e5484d;--ui-is-accent-text: #2f6bff;--ui-is-border: #e5e5e5;--ui-is-ring: #e2e2e2;--ui-is-ring-strong: #d4d4d4;--ui-is-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);--ui-is-raised: #fff;--ui-is-raised-hover: #f7f7f7;--ui-is-well: #f5f5f5;--ui-is-well-hover: #efefef;--ui-is-field: #fff;--ui-is-hover: rgba(0, 0, 0, 0.05);--ui-is-switch-off: #d9d9d9;--ui-is-ok-soft: #f2fbf6;--ui-is-ok-ring: #cfeedd;--ui-is-track: #d4d4d4;--ui-is-placeholder: #b5b5b5;--ui-is-menu: #fff;--ui-is-menu-hover: #f5f5f5;--ui-is-menu-search: #f5f5f5;--ui-is-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;width: 100%;max-width: 560px;background: var(--ui-is-tray);padding: 6px;border-radius: 22px;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-is-ink);-webkit-font-smoothing: antialiased}.ui-is *, .ui-is *::before, .ui-is *::after{box-sizing: border-box}.ui-is button{margin: 0;font: inherit;color: inherit;cursor: pointer}.ui-is button:focus-visible{outline: 2px solid var(--ui-is-accent);outline-offset: 2px}.ui-is__head{display: flex;align-items: center;gap: 14px;padding: 14px 16px 14px 14px}.ui-is__logo{display: grid;place-items: center;flex: none;width: 40px;height: 40px;border-radius: 11px;background: var(--ui-is-raised);box-shadow: 0 0 0 1px var(--ui-is-border), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-is__logo svg{width: 22px;height: 22px}.ui-is__who{display: grid;flex: 1;min-width: 0}.ui-is__name{display: inline-flex;align-items: center;gap: 8px;font-size: 15px;font-weight: 500;line-height: 22px}.ui-is__count{padding: 0 6px;border-radius: 6px;background: var(--ui-is-raised);box-shadow: inset 0 0 0 1px var(--ui-is-ring);font-size: 11.5px;font-weight: 500;line-height: 18px;font-variant-numeric: tabular-nums;color: var(--ui-is-text)}.ui-is__meta{overflow: hidden;font-size: 13px;line-height: 19px;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-is-muted)}.ui-is__switch{position: relative;flex: none;width: 40px;height: 24px;padding: 0;border: 0;border-radius: 999px;background: var(--ui-is-switch-off);transition: background-color 220ms ease}.ui-is__switch span{position: absolute;top: 3px;left: 3px;width: 18px;height: 18px;border-radius: 50%;background: #fff;box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18);transition: transform 280ms var(--ui-is-ease)}.ui-is__switch[aria-checked="true"]{background: var(--ui-is-accent)}.ui-is__switch[aria-checked="true"] span{transform: translateX(16px)}.ui-is__fold{display: grid;grid-template-rows: 0fr;transition: grid-template-rows 420ms var(--ui-is-ease), opacity 260ms ease;opacity: 0}.ui-is__fold[data-open]{grid-template-rows: 1fr;opacity: 1}.ui-is__fold-inner{min-height: 0;overflow: hidden}.ui-is__fold[data-open] .ui-is__fold-inner{overflow: visible}.ui-is__card{background: var(--ui-is-card);border: 1px solid var(--ui-is-border);border-radius: 16px;box-shadow: var(--ui-is-shadow)}.ui-is__section{padding: 16px 18px 18px}.ui-is__section + .ui-is__section{border-top: 1px solid var(--ui-is-line)}.ui-is__label{display: block;margin-bottom: 8px;font-size: 14px;font-weight: 500;line-height: 20px}.ui-is__generate{display: flex;align-items: center;justify-content: space-between;width: 100%;height: 42px;padding: 0 14px;border: 0;border-radius: 11px;background: var(--ui-is-well);font-size: 14px !important;color: var(--ui-is-muted) !important;text-align: left;transition: background-color 160ms ease, color 160ms ease}.ui-is__generate:hover:not(:disabled){background: var(--ui-is-well-hover);color: var(--ui-is-ink) !important}.ui-is__generate:disabled{cursor: progress}.ui-is__key{display: flex;align-items: center;gap: 4px;height: 42px;padding: 0 6px 0 14px;border-radius: 11px;background: var(--ui-is-well);animation: ui-is-in 320ms var(--ui-is-ease)}.ui-is__key[data-new]{background: var(--ui-is-ok-soft);box-shadow: inset 0 0 0 1px var(--ui-is-ok-ring)}.ui-is__key code{flex: 1;min-width: 0;overflow: hidden;font-family: ui-monospace, SFMono-Regular, Menlo, monospace;font-size: 12.5px;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-is-text)}.ui-is__mini{display: grid;place-items: center;flex: none;width: 30px;height: 30px;padding: 0;border: 0;border-radius: 8px;background: transparent;color: var(--ui-is-muted) !important;transition: background-color 140ms ease, color 140ms ease}.ui-is__mini:hover{background: var(--ui-is-hover);color: var(--ui-is-ink) !important}.ui-is__regen{display: grid;place-items: center;min-width: 92px;height: 30px;margin-left: 2px;padding: 0 10px;border: 0;border-radius: 8px;background: var(--ui-is-raised);box-shadow: 0 0 0 1px var(--ui-is-border);font-size: 12.5px !important;font-weight: 500}.ui-is__regen:hover:not(:disabled){background: var(--ui-is-raised-hover)}.ui-is__note{margin: 8px 0 0;font-size: 12.5px;color: var(--ui-is-ok)}.ui-is__spinner{width: 14px;height: 14px;border: 1.5px solid var(--ui-is-track);border-top-color: var(--ui-is-ink);border-radius: 50%;animation: ui-is-spin 700ms linear infinite}.ui-is__field{display: flex;align-items: center;gap: 4px;width: 100%;height: 42px;padding: 0 14px;border: 0;border-radius: 11px;background: var(--ui-is-field);box-shadow: 0 0 0 1px var(--ui-is-ring), 0 1px 2px rgba(0, 0, 0, 0.03);transition: box-shadow 160ms ease}.ui-is__field:focus-within{box-shadow: 0 0 0 1px var(--ui-is-accent), 0 0 0 4px rgba(47, 107, 255, 0.12)}.ui-is__field[data-invalid]{box-shadow: 0 0 0 1px var(--ui-is-danger), 0 0 0 4px rgba(229, 72, 77, 0.1)}.ui-is__prefix{font-size: 14px;color: var(--ui-is-placeholder)}.ui-is__field input{flex: 1;min-width: 0;height: 100%;border: 0;outline: none;background: transparent;font: inherit;font-size: 14px;color: var(--ui-is-ink)}.ui-is__field input::placeholder{color: var(--ui-is-placeholder)}.ui-is__ok{display: grid;color: var(--ui-is-ok);animation: ui-is-in 240ms var(--ui-is-ease)}.ui-is__hint{margin: 8px 0 0;font-size: 13px;line-height: 18px;color: var(--ui-is-muted)}.ui-is__hint[data-error]{color: var(--ui-is-danger)}.ui-is__zone{position: relative}.ui-is__zone-btn{justify-content: space-between;font-size: 14px !important;text-align: left}.ui-is__zone-btn:hover{box-shadow: 0 0 0 1px var(--ui-is-ring-strong), 0 1px 2px rgba(0, 0, 0, 0.03)}.ui-is__menu{position: absolute;top: calc(100% + 6px);left: 0;right: 0;z-index: 10;padding: 6px;border-radius: 14px;background: var(--ui-is-menu);box-shadow: 0 0 0 1px var(--ui-is-border), 0 14px 36px -10px rgba(0, 0, 0, 0.22);animation: ui-is-drop 180ms var(--ui-is-ease)}.ui-is__menu-search{width: 100%;height: 34px;margin-bottom: 4px;padding: 0 10px;border: 0;border-radius: 9px;outline: none;background: var(--ui-is-menu-search);font: inherit;font-size: 13px}.ui-is__menu-list{display: grid;gap: 2px;max-height: 200px;overflow-y: auto;scrollbar-width: thin}.ui-is__option{display: flex;align-items: center;justify-content: space-between;min-height: 32px;padding: 0 10px;border: 0;border-radius: 8px;background: transparent;font-size: 13px !important;text-align: left}.ui-is__option:hover{background: var(--ui-is-menu-hover)}.ui-is__option[aria-selected="true"]{color: var(--ui-is-accent-text) !important;font-weight: 500}.ui-is__menu-empty{margin: 0;padding: 12px 10px;font-size: 13px;color: var(--ui-is-muted)}.ui-is__save{display: grid;grid-template-rows: 0fr;transition: grid-template-rows 360ms var(--ui-is-ease)}.ui-is__save[data-open]{grid-template-rows: 1fr}.ui-is__save-inner{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 0;overflow: hidden;padding: 0 8px 0 18px;font-size: 13px;color: var(--ui-is-text)}.ui-is__save[data-open] .ui-is__save-inner{padding-top: 8px;padding-bottom: 8px}.ui-is__save-actions{display: flex;gap: 6px}.ui-is__btn{height: 32px;padding: 0 12px;border: 0;border-radius: 10px;background: var(--ui-is-raised);box-shadow: 0 0 0 1px var(--ui-is-border), 0 1px 2px rgba(0, 0, 0, 0.04);font-size: 13px !important;font-weight: 500}.ui-is__btn:hover{background: var(--ui-is-raised-hover)}.ui-is__btn--primary{background: linear-gradient(#323137, #201e25);box-shadow: 0 0 0 1px #0d0d0d, 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.12);color: #fff !important}.ui-is__btn--primary:hover{background: linear-gradient(#3b3a41, #26242b)}.ui-is__btn--primary:disabled{opacity: 0.5;cursor: default}@keyframes ui-is-in{from{opacity: 0;transform: translateY(2px)}}@keyframes ui-is-drop{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}@keyframes ui-is-spin{to{transform: rotate(360deg)}}@media (prefers-reduced-motion: reduce){.ui-is__fold, .ui-is__save, .ui-is__switch, .ui-is__switch span{transition: none}.ui-is__key, .ui-is__menu, .ui-is__ok{animation: none}}.ui-is input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-is textarea:focus-visible, .ui-is [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-is{--ui-is-tray: #161618;--ui-is-card: #232326;--ui-is-line: rgba(255, 255, 255, 0.08);--ui-is-ink: #ededed;--ui-is-text: #c4c4c4;--ui-is-muted: #8f8f8f;--ui-is-ok: #3dbb6f;--ui-is-danger: #ff6369;--ui-is-accent-text: #6b95ff;--ui-is-border: rgba(255, 255, 255, 0.08);--ui-is-ring: rgba(255, 255, 255, 0.08);--ui-is-ring-strong: rgba(255, 255, 255, 0.14);--ui-is-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);--ui-is-raised: #2a2a2d;--ui-is-raised-hover: #313135;--ui-is-well: #2a2a2d;--ui-is-well-hover: #313135;--ui-is-field: #2a2a2d;--ui-is-hover: rgba(255, 255, 255, 0.06);--ui-is-switch-off: #3a3a3e;--ui-is-ok-soft: rgba(61, 187, 111, 0.14);--ui-is-ok-ring: rgba(61, 187, 111, 0.3);--ui-is-track: rgba(255, 255, 255, 0.14);--ui-is-placeholder: #6b6b70;--ui-is-menu: #2a2a2d;--ui-is-menu-hover: #313135;--ui-is-menu-search: #1f1f21}:where(.dark, [data-theme="dark"]) .ui-is__menu{box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 14px 36px -10px rgba(0, 0, 0, 0.55)}:where(.dark, [data-theme="dark"]) .ui-is__menu-search{color: var(--ui-is-ink)}:where(.dark, [data-theme="dark"]) .ui-is__menu-search::placeholder{color: var(--ui-is-placeholder)}:where(.dark, [data-theme="dark"]) .ui-is__switch span{box-shadow: 0 1px 3px rgba(0, 0, 0, 0.45)}:where(.dark, [data-theme="dark"]) .ui-is__field:focus-within{box-shadow: 0 0 0 1px var(--ui-is-accent), 0 0 0 4px rgba(47, 107, 255, 0.22)}:where(.dark, [data-theme="dark"]) .ui-is__field[data-invalid]{box-shadow: 0 0 0 1px var(--ui-is-danger), 0 0 0 4px rgba(255, 99, 105, 0.16)}:where(.dark, [data-theme="dark"]) .ui-is__btn--primary{background: linear-gradient(#f4f4f5, #e4e4e7);box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.35), inset 0 1px 0 #ffffff;color: #121213 !important}:where(.dark, [data-theme="dark"]) .ui-is__btn--primary:hover{background: linear-gradient(#ffffff, #ececef)}`;
var P1Component = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `#7AB55C`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z` }) });
function MComponent() {
  return /* @__PURE__ */ jsx("div", { className: `integration-demo`, children: /* @__PURE__ */ jsx(S1Component, { name: `Shopify store`, logo: /* @__PURE__ */ jsx(P1Component, {}), count: 128, meta: `Connected on March 4, 2026 at 09:12`, siteHint: `Your store's primary domain from Settings \u203A Domains`, defaultValues: {
    siteUrl: `lumen-studio.com`,
    timeZone: `(GMT +01:00) Berlin`
  } }) });
}

export {
  MComponent
};
