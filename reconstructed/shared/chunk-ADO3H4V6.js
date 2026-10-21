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

// reconstructed/demo.clean-CTC16fNW.jsx
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
    /* @__PURE__ */ jsx("style", { href: `ui-integration-settings-clean`, precedence: `default`, children: f }),
    /* @__PURE__ */ jsxs("section", { className: [`ui-isc`, className].filter(Boolean).join(` `), "aria-label": `${name} settings`, "data-off": !C.enabled || void 0, children: [
      /* @__PURE__ */ jsxs("header", { className: `ui-isc__head`, children: [
        /* @__PURE__ */ jsx("span", { className: `ui-isc__logo`, children: logo }),
        /* @__PURE__ */ jsxs("span", { className: `ui-isc__who`, children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-isc__name`, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-isc__name-text`, children: name }),
            count !== void 0 && /* @__PURE__ */ jsx("span", { className: `ui-isc__count`, children: count.toLocaleString(`en-US`) })
          ] }),
          /* @__PURE__ */ jsx("span", { className: `ui-isc__meta`, children: C.enabled ? meta : `Paused \u2013 no data is synced` })
        ] }),
        /* @__PURE__ */ jsx("button", { type: `button`, role: `switch`, "aria-checked": C.enabled, "aria-label": `${name} sync`, className: `ui-isc__switch`, onClick: () => {
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
      /* @__PURE__ */ jsx("div", { className: `ui-isc__fold`, "data-open": C.enabled || void 0, inert: !C.enabled, children: /* @__PURE__ */ jsxs("div", { className: `ui-isc__fold-inner`, children: [
        /* @__PURE__ */ jsxs("div", { className: `ui-isc__section`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-isc__label`, children: `API key` }),
          C.apiKey ? /* @__PURE__ */ jsxs("div", { className: `ui-isc__key`, "data-new": D || void 0, children: [
            /* @__PURE__ */ jsx("code", { children: D ? C.apiKey : H }),
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-isc__mini`, "aria-label": D ? `Hide key` : `Show key`, onClick: () => setD((e) => !e), children: /* @__PURE__ */ jsx(D1Component, { d: D ? `M2 8s2.2-4.5 6-4.5S14 8 14 8s-2.2 4.5-6 4.5S2 8 2 8ZM2.5 2.5l11 11` : `M2 8s2.2-4.5 6-4.5S14 8 14 8s-2.2 4.5-6 4.5S2 8 2 8ZM8 9.8a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z` }) }),
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-isc__mini`, "aria-label": `Copy key`, onClick: B, children: /* @__PURE__ */ jsx(D1Component, { d: k ? `m3.5 8.5 3 3 6-7` : `M5.5 5.5V3.5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2M3.5 5.5h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z` }) }),
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-isc__regen`, onClick: z, disabled: T === `busy`, children: T === `busy` ? /* @__PURE__ */ jsx("span", { className: `ui-isc__spinner`, "aria-hidden": `true` }) : `Regenerate` })
          ] }) : /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-isc__generate`, onClick: z, disabled: T === `busy`, children: [
            T === `busy` ? /* @__PURE__ */ jsx("span", { className: `ui-isc__shimmer`, "data-text": `Generating\u2026`, children: `Generating\u2026` }) : /* @__PURE__ */ jsx("span", { children: `Generate a new API key` }),
            /* @__PURE__ */ jsx(L1Component, {})
          ] }),
          C.apiKey && D && /* @__PURE__ */ jsx("p", { className: `ui-isc__note`, role: `status`, children: k ? `Copied to the clipboard.` : `Copy it now \u2013 it is shown in full only once.` })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `ui-isc__section`, children: [
          /* @__PURE__ */ jsx("label", { className: `ui-isc__label`, htmlFor: N, children: `Site address` }),
          /* @__PURE__ */ jsxs("div", { className: `ui-isc__field`, "data-invalid": !I || void 0, children: [
            /* @__PURE__ */ jsx("span", { className: `ui-isc__prefix`, children: `https://` }),
            /* @__PURE__ */ jsx("input", { id: N, value: C.siteUrl, onChange: (e) => R({
              siteUrl: e.target.value.replace(/^https?:\/\//i, ``)
            }), placeholder: `yourstore.com`, inputMode: `url`, autoComplete: `off`, spellCheck: false, "aria-invalid": !I, "aria-describedby": id }),
            siteUrl && I && /* @__PURE__ */ jsx("span", { className: `ui-isc__ok`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx(D1Component, { d: `m3.5 8.5 3 3 6-7` }) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: `ui-isc__hint`, id, "data-error": !I || void 0, children: I ? siteHint : `That doesn't look like a domain \u2013 try something like yourstore.com` })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `ui-isc__section`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-isc__label`, id: `${N}-tz`, children: `Time zone` }),
          /* @__PURE__ */ jsx(C1Component, { zones: timeZones, value: C.timeZone, onChange: (timeZone) => R({
            timeZone
          }), labelledBy: `${N}-tz` })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `ui-isc__save`, "data-open": L || void 0, inert: !L, children: /* @__PURE__ */ jsxs("div", { className: `ui-isc__save-inner`, children: [
          /* @__PURE__ */ jsx("span", { className: `ui-isc__save-text`, children: `Unsaved changes` }),
          /* @__PURE__ */ jsxs("div", { className: `ui-isc__save-actions`, children: [
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-isc__btn`, onClick: () => setC(x), children: `Discard` }),
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-isc__btn ui-isc__btn--primary`, onClick: V, disabled: !I || j, children: j ? `Saving\u2026` : `Save` })
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
  return /* @__PURE__ */ jsxs("div", { className: `ui-isc__zone`, ref: fRef, children: [
    /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-isc__field ui-isc__zone-btn`, "aria-haspopup": `listbox`, "aria-expanded": o2, "aria-labelledby": labelledBy, onClick: () => {
      setO((e) => !e);
      setC(``);
    }, children: [
      /* @__PURE__ */ jsx("span", { className: `ui-isc__zone-value`, children: value }),
      /* @__PURE__ */ jsx(UComponent, {})
    ] }),
    o2 && /* @__PURE__ */ jsxs("div", { className: `ui-isc__menu`, children: [
      /* @__PURE__ */ jsxs("div", { className: `ui-isc__menu-search`, children: [
        /* @__PURE__ */ jsx(D1Component, { d: `M7 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM13.5 13.5 10.6 10.6` }),
        /* @__PURE__ */ jsx("input", { autoFocus: true, value: c, onChange: (e) => setC(e.target.value), placeholder: `Search city or offset`, "aria-label": `Search time zones` })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `ui-isc__menu-list`, role: `listbox`, "aria-labelledby": labelledBy, children: [
        p.length === 0 && /* @__PURE__ */ jsx("p", { className: `ui-isc__menu-empty`, children: `No time zone matches.` }),
        p.map((e) => /* @__PURE__ */ jsxs("button", { type: `button`, role: `option`, "aria-selected": e === value, className: `ui-isc__option`, onClick: () => {
          onChange(e);
          setO(false);
        }, children: [
          e,
          e === value && /* @__PURE__ */ jsx(D1Component, { d: `m3.5 8.5 3 3 6-7` })
        ] }, e))
      ] })
    ] })
  ] });
}
var L1Component = () => /* @__PURE__ */ jsx("svg", { className: `ui-isc__glyph-solid`, viewBox: `0 0 16 16`, width: `16`, height: `16`, fill: `currentColor`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M10.5 1.5a4 4 0 0 0-3.86 5.05L1.8 11.4a1 1 0 0 0-.3.7v1.9a.5.5 0 0 0 .5.5h1.9a.5.5 0 0 0 .5-.5V13h1v-1h1v-1l.95-.95A4 4 0 1 0 10.5 1.5Zm1 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z` }) });
var UComponent = () => /* @__PURE__ */ jsx(D1Component, { d: `M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM8 4.5V8l2.5 1.5` });
var D1Component = ({
  d,
  size = 16
}) => /* @__PURE__ */ jsx("svg", { className: `ui-isc__glyph`, viewBox: `0 0 16 16`, width: size, height: size, fill: `none`, stroke: `currentColor`, strokeWidth: `1.2`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d }) });
var f = `.ui-isc{--ui-isc-card: #ffffff;--ui-isc-ink: rgba(0, 0, 0, 0.88);--ui-isc-strong: #000000;--ui-isc-text: rgba(0, 0, 0, 0.61);--ui-isc-muted: rgba(0, 0, 0, 0.45);--ui-isc-faint: rgba(0, 0, 0, 0.27);--ui-isc-icon: rgba(0, 0, 0, 0.447);--ui-isc-line: rgba(0, 0, 0, 0.06);--ui-isc-fill: rgba(0, 0, 0, 0.06);--ui-isc-fill-strong: rgba(0, 0, 0, 0.1);--ui-isc-wash: rgba(0, 0, 0, 0.03);--ui-isc-accent: rgba(0, 96, 226, 0.765);--ui-isc-ok: #1a9a52;--ui-isc-ok-soft: rgba(26, 154, 82, 0.08);--ui-isc-danger: #e5484d;--ui-isc-danger-soft: rgba(229, 72, 77, 0.08);--ui-isc-solid: rgba(0, 0, 0, 0.88);--ui-isc-solid-hover: rgba(0, 0, 0, 0.8);--ui-isc-on-solid: #fcfcfc;--ui-isc-switch-off: rgba(0, 0, 0, 0.12);--ui-isc-shine: rgba(255, 255, 255, 0.82);--ui-isc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-isc-shadow-hover: 0 0 0 0.5px rgba(0, 0, 0, 0.12), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-isc-shadow-pop: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 12px 28px -10px rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-isc-focus: rgba(0, 96, 226, 0.35);--ui-isc-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;container-type: inline-size;width: 100%;max-width: 560px;border-radius: 10px;background: var(--ui-isc-card);box-shadow: var(--ui-isc-shadow);font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-isc-ink);-webkit-font-smoothing: antialiased}.ui-isc *, .ui-isc *::before, .ui-isc *::after{box-sizing: border-box}:where(.ui-isc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-isc) svg{display: block;flex: none}.ui-isc button:focus-visible{outline: 2px solid var(--ui-isc-focus);outline-offset: 1px}.ui-isc__head{display: flex;align-items: center;gap: 12px;padding: 16px}.ui-isc__logo{display: grid;place-items: center;flex: none;width: 40px;height: 40px;border-radius: 8px;background: var(--ui-isc-card);box-shadow: var(--ui-isc-shadow)}.ui-isc__logo svg{width: 22px;height: 22px}.ui-isc__who{display: grid;flex: 1;min-width: 0}.ui-isc__name{display: flex;align-items: center;gap: 8px;min-width: 0;font-size: 15px;line-height: 24px;font-weight: 500;color: var(--ui-isc-strong)}.ui-isc__name-text{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-isc__count{flex: none;padding: 0 5px;border-radius: 5px;background: var(--ui-isc-fill);font-size: 11px;line-height: 16px;font-weight: 500;font-variant-numeric: tabular-nums;color: var(--ui-isc-text)}.ui-isc__meta{overflow: hidden;font-size: 12px;line-height: 16px;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-isc-muted)}.ui-isc__switch{position: relative;flex: none;width: 28px;height: 16px;border-radius: 8px;background: var(--ui-isc-switch-off) !important;transition: background-color 220ms ease}.ui-isc__switch[aria-checked="true"]{background: var(--ui-isc-accent) !important}.ui-isc__switch span{position: absolute;top: 2px;left: 2px;width: 12px;height: 12px;border-radius: 50%;background: #fff;box-shadow: var(--ui-isc-shadow);transition: transform 280ms var(--ui-isc-ease)}.ui-isc__switch[aria-checked="true"] span{transform: translateX(12px)}.ui-isc__switch::after{content: "";position: absolute;inset: -8px -6px}.ui-isc__fold{display: grid;grid-template-columns: minmax(0, 1fr);grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 420ms var(--ui-isc-ease), opacity 260ms ease}.ui-isc__fold[data-open]{grid-template-rows: 1fr;opacity: 1}.ui-isc__fold-inner{min-width: 0;min-height: 0;overflow: hidden}.ui-isc__fold[data-open] .ui-isc__fold-inner{overflow: visible}.ui-isc__section{padding: 14px 16px 16px;border-top: 0.5px solid var(--ui-isc-line)}.ui-isc__label{display: block;margin: 0 0 6px;font-size: 13px;line-height: 20px;font-weight: 500;color: var(--ui-isc-ink)}.ui-isc__generate{display: flex;align-items: center;justify-content: space-between;gap: 8px;width: 100%;height: 32px;padding: 0 8px 0 10px !important;border-radius: 8px;background: var(--ui-isc-wash) !important;box-shadow: inset 0 0 0 0.5px var(--ui-isc-line);color: var(--ui-isc-text) !important;text-align: left;transition: background-color 160ms ease, color 160ms ease}.ui-isc__generate svg{color: var(--ui-isc-icon);transition: color 160ms ease}.ui-isc__generate:hover:not(:disabled){background: var(--ui-isc-fill) !important;color: var(--ui-isc-ink) !important}.ui-isc__generate:hover:not(:disabled) svg{color: var(--ui-isc-ink)}.ui-isc__generate:disabled{cursor: progress}.ui-isc__key{display: flex;align-items: center;gap: 2px;height: 36px;padding: 0 4px 0 10px;border-radius: 8px;background: var(--ui-isc-card);box-shadow: var(--ui-isc-shadow);transition: background-color 240ms ease;animation: ui-isc-in 320ms var(--ui-isc-ease)}.ui-isc__key[data-new]{background: var(--ui-isc-ok-soft);box-shadow: none}.ui-isc__key code{flex: 1;min-width: 0;overflow: hidden;font-family: ui-monospace, SFMono-Regular, Menlo, monospace;font-size: 12px;line-height: 16px;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-isc-ink)}.ui-isc__mini{display: grid;place-items: center;flex: none;width: 28px;height: 28px;border-radius: 6px;color: var(--ui-isc-icon) !important;transition: background-color 140ms ease, color 140ms ease}.ui-isc__mini:hover{background: var(--ui-isc-wash) !important;color: var(--ui-isc-ink) !important}.ui-isc__key[data-new] .ui-isc__mini:hover{background: var(--ui-isc-fill) !important}.ui-isc__regen{display: grid;place-items: center;flex: none;min-width: 88px;height: 28px;margin-left: 2px;padding: 0 10px !important;border-radius: 6px;background: var(--ui-isc-card) !important;box-shadow: var(--ui-isc-shadow);font-size: 13px;font-weight: 500;color: var(--ui-isc-strong) !important;transition: box-shadow 140ms ease}.ui-isc__regen:hover:not(:disabled){box-shadow: var(--ui-isc-shadow-hover)}.ui-isc__regen:disabled{cursor: progress}.ui-isc__note{margin: 6px 0 0;font-size: 12px;line-height: 16px;color: var(--ui-isc-ok);animation: ui-isc-in 240ms var(--ui-isc-ease)}.ui-isc__spinner{width: 14px;height: 14px;border: 1.5px solid var(--ui-isc-fill-strong);border-top-color: var(--ui-isc-ink);border-radius: 50%;animation: ui-isc-spin 700ms linear infinite}.ui-isc__field{display: flex;align-items: center;gap: 2px;width: 100%;height: 32px;padding: 0 8px 0 10px;border-radius: 8px;background: var(--ui-isc-card);box-shadow: var(--ui-isc-shadow);transition: box-shadow 160ms ease, background-color 160ms ease}.ui-isc__field:hover{box-shadow: var(--ui-isc-shadow-hover)}.ui-isc__field:focus-within{outline: 2px solid var(--ui-isc-focus);outline-offset: 1px}.ui-isc__field[data-invalid]{background: var(--ui-isc-danger-soft);box-shadow: none}.ui-isc__field[data-invalid]:focus-within{outline-color: rgba(229, 72, 77, 0.35)}.ui-isc__prefix{flex: none;color: var(--ui-isc-faint)}.ui-isc__field input{flex: 1;min-width: 0;height: 100%;margin: 0;padding: 0;border: 0;outline: none;background: transparent;font: inherit;color: var(--ui-isc-ink)}.ui-isc__field input::placeholder{color: var(--ui-isc-faint)}.ui-isc__ok{display: grid;flex: none;color: var(--ui-isc-ok);animation: ui-isc-in 240ms var(--ui-isc-ease)}.ui-isc__hint{margin: 6px 0 0;font-size: 12px;line-height: 16px;color: var(--ui-isc-muted)}.ui-isc__hint[data-error]{color: var(--ui-isc-danger)}.ui-isc__zone{position: relative}.ui-isc__zone-btn{justify-content: space-between;gap: 8px;padding: 0 8px 0 10px !important;text-align: left;background: var(--ui-isc-card) !important;color: var(--ui-isc-ink) !important}.ui-isc__zone-btn:focus-visible{outline-offset: 1px}.ui-isc__zone-value{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-isc__zone-btn svg{color: var(--ui-isc-icon)}.ui-isc__menu{position: absolute;top: calc(100% + 6px);left: 0;right: 0;z-index: 10;padding: 4px;border-radius: 10px;background: var(--ui-isc-card);box-shadow: var(--ui-isc-shadow-pop);transform-origin: top center;animation: ui-isc-drop 200ms var(--ui-isc-ease)}.ui-isc__menu-search{display: flex;align-items: center;gap: 8px;height: 32px;margin: 0 0 4px;padding: 0 8px;border-bottom: 0.5px solid var(--ui-isc-line);color: var(--ui-isc-icon)}.ui-isc__menu-search input{flex: 1;min-width: 0;height: 100%;margin: 0;padding: 0;border: 0;outline: none;background: transparent;font: inherit;color: var(--ui-isc-ink)}.ui-isc__menu-search input::placeholder{color: var(--ui-isc-faint)}.ui-isc__menu-list{display: grid;gap: 1px;max-height: 200px;overflow-y: auto;overscroll-behavior: contain;scrollbar-width: thin}.ui-isc__option{display: flex;align-items: center;justify-content: space-between;gap: 8px;min-height: 32px;padding: 0 8px !important;border-radius: 6px;background: transparent;color: var(--ui-isc-ink) !important;text-align: left;transition: background-color 90ms ease-out}.ui-isc__option:hover{background: var(--ui-isc-fill) !important}.ui-isc__option svg{color: var(--ui-isc-accent);animation: ui-isc-pop 260ms var(--ui-isc-ease)}.ui-isc__menu-empty{margin: 0;padding: 10px 8px;text-align: center;color: var(--ui-isc-muted)}.ui-isc__save{display: grid;grid-template-columns: minmax(0, 1fr);grid-template-rows: 0fr;transition: grid-template-rows 360ms var(--ui-isc-ease)}.ui-isc__save[data-open]{grid-template-rows: 1fr}.ui-isc__save-inner{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 0;overflow: hidden;padding: 0 12px 0 16px;border-top: 0.5px solid var(--ui-isc-line);color: var(--ui-isc-text)}.ui-isc__save[data-open] .ui-isc__save-inner{padding-top: 10px;padding-bottom: 10px}.ui-isc__save-text{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-isc__save-actions{display: flex;flex: none;gap: 6px}.ui-isc__btn{height: 28px;padding: 0 10px !important;border-radius: 6px;background: var(--ui-isc-card) !important;box-shadow: var(--ui-isc-shadow);font-size: 13px;font-weight: 500;color: var(--ui-isc-strong) !important;transition: box-shadow 140ms ease, background-color 140ms ease}.ui-isc__btn:hover:not(:disabled){box-shadow: var(--ui-isc-shadow-hover)}.ui-isc__btn--primary{min-width: 56px;background: var(--ui-isc-solid) !important;box-shadow: none;color: var(--ui-isc-on-solid) !important}.ui-isc__btn--primary:hover:not(:disabled){background: var(--ui-isc-solid-hover) !important;box-shadow: none}.ui-isc__btn--primary:disabled{opacity: 0.4;cursor: default}.ui-isc__shimmer{position: relative;display: inline-block}.ui-isc__shimmer::after{content: attr(data-text);content: attr(data-text) / "";position: absolute;inset: 0;white-space: nowrap;color: transparent;background: linear-gradient(90deg, transparent 38%, var(--ui-isc-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;-webkit-background-clip: text;background-clip: text;animation: ui-isc-sweep 1.4s linear infinite;pointer-events: none}@keyframes ui-isc-in{from{opacity: 0;transform: translateY(2px)}}@keyframes ui-isc-drop{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}@keyframes ui-isc-pop{from{opacity: 0;transform: scale(0.5)}}@keyframes ui-isc-spin{to{transform: rotate(360deg)}}@keyframes ui-isc-sweep{from{background-position: 100% 0}to{background-position: 0% 0}}@container (max-width: 400px){.ui-isc__head{gap: 10px;padding: 14px 14px 14px 12px}.ui-isc__logo{width: 36px;height: 36px}.ui-isc__logo svg{width: 20px;height: 20px}.ui-isc__section{padding: 12px 12px 14px}.ui-isc__regen{min-width: 0}.ui-isc__save-inner{padding: 0 10px 0 12px}}@media (hover: none) and (pointer: coarse){.ui-isc__field, .ui-isc__generate{height: 40px}.ui-isc__field input, .ui-isc__menu-search input{font-size: 16px}.ui-isc__key{height: 44px}.ui-isc__mini{width: 36px;height: 36px}.ui-isc__regen, .ui-isc__btn{height: 36px}.ui-isc__menu-search{height: 40px}.ui-isc__option{min-height: 44px}}@media (prefers-reduced-motion: reduce){.ui-isc *, .ui-isc *::before, .ui-isc *::after{animation: none !important;transition: none !important}}.ui-isc input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-isc textarea:focus-visible, .ui-isc [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-isc{--ui-isc-card: #1c1c1e;--ui-isc-ink: rgba(255, 255, 255, 0.9);--ui-isc-strong: #ffffff;--ui-isc-text: rgba(255, 255, 255, 0.62);--ui-isc-muted: rgba(255, 255, 255, 0.46);--ui-isc-faint: rgba(255, 255, 255, 0.3);--ui-isc-icon: rgba(255, 255, 255, 0.5);--ui-isc-line: rgba(255, 255, 255, 0.08);--ui-isc-fill: rgba(255, 255, 255, 0.08);--ui-isc-fill-strong: rgba(255, 255, 255, 0.13);--ui-isc-wash: rgba(255, 255, 255, 0.04);--ui-isc-accent: #4d8dff;--ui-isc-ok: #3ec27a;--ui-isc-ok-soft: rgba(62, 194, 122, 0.14);--ui-isc-danger: #ff6369;--ui-isc-danger-soft: rgba(255, 99, 105, 0.14);--ui-isc-solid: rgba(255, 255, 255, 0.9);--ui-isc-solid-hover: rgba(255, 255, 255, 0.82);--ui-isc-on-solid: #161618;--ui-isc-switch-off: rgba(255, 255, 255, 0.16);--ui-isc-shine: #ffffff;--ui-isc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-isc-shadow-hover: 0 0 0 0.5px rgba(255, 255, 255, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-isc-shadow-pop: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 28px -10px rgba(0, 0, 0, 0.6);--ui-isc-focus: rgba(77, 141, 255, 0.5)}:where(.dark, [data-theme="dark"]) .ui-isc__switch span{background: #f4f4f5;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-isc__menu{background: #232326}`;
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
