import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-BBMr4ztO.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = 1048576;
var a = (e) => e.includes(`.`) ? e.split(`.`).pop().toLowerCase() : ``;
var o = (e) => e < i ? `${Math.max(1, Math.round(e / 1024))}\xA0KB` : `${(e / i).toFixed(+(e < 10 * i))}\xA0MB`;
var s = (e, t) => t < i ? `${Math.round(e / 1024)} of ${o(t)}` : `${(e / i).toFixed(1)} of ${o(t)}`;
var ee = (e) => e < 1 ? `almost done` : e < 60 ? `${Math.ceil(e)}s left` : `${Math.ceil(e / 60)} min left`;
var c = [{ exts: [`pdf`], color: `#e5484d` }, { exts: [`xls`, `xlsx`, `csv`, `numbers`], color: `#2f9e5b` }, { exts: [`doc`, `docx`, `txt`, `md`, `pages`, `rtf`], color: `#2f6bff` }, { exts: [`png`, `jpg`, `jpeg`, `gif`, `webp`, `svg`, `heic`, `avif`], color: `#8b5cf6` }, { exts: [`mp4`, `mov`, `webm`, `mp3`, `wav`], color: `#f08c00` }, { exts: [`ppt`, `pptx`, `key`], color: `#e8590c` }];
var l = (e) => c.find((t) => t.exts.includes(a(e)))?.color ?? `#8f8f8f`;
var u = (e) => Math.min(9e3, Math.max(2600, e / (1.2 * i) * 1e3));
var d = 0;
var f = () => `f${Date.now().toString(36)}${(d++).toString(36)}`;
var p = ({ d: e, className: t }) => (0, r.jsx)(`svg`, { viewBox: `0 0 24 24`, className: [`ui-dz__glyph`, t].filter(Boolean).join(` `), "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: e }) });
var m = { upload: `M12 15V4M7.5 8.5 12 4l4.5 4.5M5 15v3.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V15`, close: `M7 7l10 10M17 7 7 17`, check: `M5.5 12.5l4 4L18.5 8`, retry: `M20 12a8 8 0 1 1-2.34-5.66L20 8.5M20 4v4.5h-4.5`, alert: `M12 8v5M12 16.5h.01M10.3 3.9 2.6 17.5A2 2 0 0 0 4.3 20.5h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z` };
function h({ name: e, end: t }) {
  let n4 = (a(e) || `file`).slice(0, 4).toUpperCase(), i2 = Math.max(18, n4.length * 5.4 + 8), o2 = t ? 30 - i2 : 0;
  return (0, r.jsxs)(`svg`, { viewBox: `0 0 30 36`, className: `ui-dz__badge`, "aria-hidden": `true`, children: [(0, r.jsx)(`path`, { d: `M5 1h14l10 10v20a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4z`, className: `ui-dz__badge-sheet` }), (0, r.jsx)(`path`, { d: `M19 1v6a4 4 0 0 0 4 4h6`, className: `ui-dz__badge-fold` }), (0, r.jsx)(`rect`, { x: o2, y: `19`, width: i2, height: `11`, rx: `3`, fill: l(e), fillOpacity: `0.14` }), (0, r.jsx)(`text`, { x: o2 + 4, y: `27.2`, className: `ui-dz__badge-text`, fill: l(e), children: n4 })] });
}
function g() {
  return (0, r.jsxs)(`span`, { className: `ui-dz__stack`, "aria-hidden": `true`, children: [(0, r.jsx)(`span`, { className: `ui-dz__sheet ui-dz__sheet-l`, children: (0, r.jsx)(h, { name: `file.pdf` }) }), (0, r.jsx)(`span`, { className: `ui-dz__sheet ui-dz__sheet-r`, children: (0, r.jsx)(h, { name: `file.png`, end: true }) }), (0, r.jsx)(`span`, { className: `ui-dz__sheet ui-dz__sheet-m`, children: (0, r.jsx)(p, { d: m.upload }) })] });
}
var _ = [{ name: `Q3-Board-Report.pdf`, size: 4.2 * i }, { name: `Hero-Shot.png`, size: 2.6 * i }, { name: `Budget-2027.xlsx`, size: 1.3 * i, failAt: 0.62 }, { name: `Product-Demo.mp4`, size: 48 * i }];
function v({ accept: e, maxSize: t = 25 * i, onUpload: c2, onChange: l2, hint: d2, autoplay: v2 = false, className: y2 }) {
  let [b, x] = (0, n3.useState)([]), [S, C] = (0, n3.useState)(0), [w, T] = (0, n3.useState)(``), [, E] = (0, n3.useState)(0), D = (0, n3.useRef)(null), O = (0, n3.useRef)(null), k = (0, n3.useRef)(null), A = (0, n3.useRef)(0), j = (0, n3.useRef)(b);
  j.current = b;
  let M = (0, n3.useId)(), N = e?.map((e2) => e2.replace(/^\./, ``).toLowerCase()), P = N?.length ? N.length <= 3 ? N.map((e2) => e2.toUpperCase()).join(`, `) : `${N.slice(0, 3).map((e2) => e2.toUpperCase()).join(`, `)} and more` : `Any file`, F = d2 ?? `${P} \xB7 up to ${o(t)} each`;
  (0, n3.useEffect)(() => {
    l2?.(b.filter((e2) => !e2.removing).map(({ id: e2, name: t2, size: n4, status: r2, progress: i2, error: a2, file: o2 }) => ({ id: e2, name: t2, size: n4, status: r2, progress: i2, error: a2, file: o2 })));
  }, [b]), (0, n3.useLayoutEffect)(() => {
    let e2 = O.current, t2 = k.current;
    if (!e2 || !t2) return;
    let n4 = () => e2.style.height = `${t2.offsetHeight}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    return r2.observe(t2), () => r2.disconnect();
  }, []);
  let I = (e2, t2) => x((n4) => n4.map((n5) => n5.id === e2 ? { ...n5, ...t2 } : n5)), L = (e2) => {
    let n4 = f(), r2;
    N?.length && !N.includes(a(e2.name)) ? r2 = a(e2.name) ? `.${a(e2.name)} files aren't supported` : `This file type isn't supported` : e2.size > t && (r2 = `Too large \u2013 max ${o(t)}`);
    let i2 = { id: n4, name: e2.name, size: e2.size, file: e2.file, status: r2 ? `error` : `uploading`, progress: 0, error: r2, failAt: e2.failAt, startedAt: performance.now(), duration: u(e2.size) };
    x((e3) => [...e3, i2]), r2 ? T(`${e2.name}: ${r2}`) : c2 && e2.file && R(i2);
  }, R = (e2) => {
    c2(e2.file, (t2) => I(e2.id, { progress: Math.max(0, Math.min(1, t2)) })).then(() => {
      I(e2.id, { status: `done`, progress: 1 }), T(`${e2.name} uploaded`);
    }).catch((t2) => {
      let n4 = t2 instanceof Error && t2.message ? t2.message : `Upload failed`;
      I(e2.id, { status: `error`, error: n4, retryable: true }), T(`${e2.name}: ${n4}`);
    });
  }, z = (e2) => Array.from(e2).forEach((e3) => L({ name: e3.name, size: e3.size, file: e3 })), B = b.some((e2) => e2.status === `uploading` && (!c2 || !e2.file));
  (0, n3.useEffect)(() => {
    if (!B) return;
    let e2 = window.setInterval(() => {
      let e3 = performance.now();
      x((t2) => t2.map((t3) => {
        if (t3.status !== `uploading` || c2 && t3.file) return t3;
        let n4 = Math.min(1, (e3 - t3.startedAt) / t3.duration), r2 = Math.max(t3.progress, n4 < 1 ? n4 * (0.92 + Math.random() * 0.08) : 1);
        return t3.failAt !== void 0 && r2 >= t3.failAt ? (T(`${t3.name}: upload failed`), { ...t3, progress: t3.failAt, status: `error`, error: `Connection lost`, retryable: true }) : r2 >= 1 ? (T(`${t3.name} uploaded`), { ...t3, progress: 1, status: `done` }) : { ...t3, progress: r2 };
      }));
    }, 90);
    return () => clearInterval(e2);
  }, [B, c2]), (0, n3.useEffect)(() => {
    if (!b.some((e3) => e3.status === `uploading`)) return;
    let e2 = window.setInterval(() => E((e3) => e3 + 1), 500);
    return () => clearInterval(e2);
  }, [b]), (0, n3.useEffect)(() => {
    if (!v2) return;
    let e2 = [window.setTimeout(() => C(_.length), 700), window.setTimeout(() => {
      C(0), _.forEach((e3, t2) => window.setTimeout(() => L(e3), t2 * 140));
    }, 1900)];
    return () => e2.forEach(clearTimeout);
  }, [v2]);
  let V = (e2) => {
    I(e2.id, { status: `uploading`, progress: 0, error: void 0, retryable: false, failAt: void 0, startedAt: performance.now() }), c2 && e2.file && R({ ...e2, progress: 0 });
  }, H = (e2) => {
    I(e2, { removing: true }), window.setTimeout(() => x((t2) => t2.filter((t3) => t3.id !== e2)), 480);
  }, U = () => j.current.filter((e2) => e2.status !== `uploading`).forEach((e2) => H(e2.id)), W = (e2) => Array.from(e2.dataTransfer.types).includes(`Files`), G = (e2) => {
    W(e2) && (e2.preventDefault(), A.current += 1, C(Math.max(1, e2.dataTransfer.items.length)));
  }, K = (e2) => {
    W(e2) && (e2.preventDefault(), e2.dataTransfer.dropEffect = `copy`);
  }, q = () => {
    A.current = Math.max(0, A.current - 1), A.current || C(0);
  }, J = (e2) => {
    W(e2) && (e2.preventDefault(), A.current = 0, C(0), z(e2.dataTransfer.files));
  }, Y = b.filter((e2) => !e2.removing), X = Y.filter((e2) => e2.status === `uploading`), Z = Y.filter((e2) => e2.status === `done`), Q = Y.filter((e2) => e2.status === `error`), ne = performance.now(), $ = null;
  if (Y.length) {
    if (X.length) {
      let e2 = X.reduce((e3, t3) => e3 + t3.size, 0), t2 = X.reduce((e3, t3) => e3 + t3.size * t3.progress, 0);
      $ = (0, r.jsxs)(`span`, { children: [`Uploading `, X.length, ` of `, Y.length, ` \xB7 `, s(t2, e2)] });
    } else $ = (0, r.jsxs)(`span`, { className: `ui-dz__summary-done`, children: [Q.length ? (0, r.jsx)(p, { d: m.alert, className: `ui-dz__warn` }) : (0, r.jsx)(p, { d: m.check, className: `ui-dz__ok` }), Q.length ? `${Z.length} of ${Y.length} uploaded` : `${Z.length} ${Z.length === 1 ? `file` : `files`} uploaded`] });
  }
  return (0, r.jsxs)(`div`, { className: [`ui-dz`, y2].filter(Boolean).join(` `), children: [(0, r.jsx)(`style`, { href: `ui-dropzone`, precedence: `default`, children: te }), (0, r.jsx)(`div`, { ref: O, className: `ui-dz__card`, children: (0, r.jsxs)(`div`, { ref: k, className: `ui-dz__inner`, children: [(0, r.jsx)(`input`, { ref: D, id: M, type: `file`, multiple: true, accept: e?.join(`,`), className: `ui-dz__input`, tabIndex: -1, onChange: (e2) => {
    e2.target.files && z(e2.target.files), e2.target.value = ``;
  } }), (0, r.jsxs)(`button`, { type: `button`, className: `ui-dz__area`, "data-dragging": S > 0 || void 0, "aria-describedby": `${M}-hint`, onClick: () => D.current?.click(), onDragEnter: G, onDragOver: K, onDragLeave: q, onDrop: J, children: [(0, r.jsx)(g, {}), (0, r.jsx)(`span`, { className: `ui-dz__title`, children: S ? `Release to upload ${S === 1 ? `1 file` : `${S} files`}` : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(`span`, { className: `ui-dz__for-mouse`, children: [`Drop files here or `, (0, r.jsx)(`span`, { className: `ui-dz__browse`, children: `browse` })] }), (0, r.jsxs)(`span`, { className: `ui-dz__for-touch`, children: [`Tap to `, (0, r.jsx)(`span`, { className: `ui-dz__browse`, children: `choose files` })] })] }) }, S ? `drop` : `idle`), (0, r.jsx)(`span`, { className: `ui-dz__hint`, id: `${M}-hint`, children: F })] }), (0, r.jsx)(`ul`, { className: `ui-dz__list`, "aria-label": `Uploads`, children: b.map((e2) => {
    let t2 = e2.status === `uploading` ? (1 - e2.progress) * (ne - e2.startedAt) / Math.max(0.05, e2.progress) / 1e3 : 0;
    return (0, r.jsx)(`li`, { className: `ui-dz__row`, "data-status": e2.status, "data-removing": e2.removing || void 0, children: (0, r.jsxs)(`div`, { className: `ui-dz__row-inner`, children: [(0, r.jsx)(h, { name: e2.name }), (0, r.jsxs)(`div`, { className: `ui-dz__info`, children: [(0, r.jsxs)(`div`, { className: `ui-dz__line`, children: [(0, r.jsx)(`span`, { className: `ui-dz__name`, title: e2.name, children: e2.name }), e2.status === `done` && (0, r.jsx)(`span`, { className: `ui-dz__done`, "aria-label": `Uploaded`, children: (0, r.jsx)(p, { d: m.check }) })] }), (0, r.jsxs)(`div`, { className: `ui-dz__meta`, children: [e2.status === `uploading` && (0, r.jsxs)(r.Fragment, { children: [s(e2.size * e2.progress, e2.size), (0, r.jsx)(`span`, { className: `ui-dz__dot`, children: `\xB7` }), e2.progress < 0.04 ? `starting` : ee(t2)] }), e2.status === `done` && o(e2.size), e2.status === `error` && (0, r.jsx)(`span`, { className: `ui-dz__error`, children: e2.error })] }, e2.status), (e2.status !== `error` || e2.retryable) && (0, r.jsx)(`div`, { className: `ui-dz__bar`, "data-hidden": e2.status === `done` || void 0, role: `progressbar`, "aria-label": `${e2.name} upload`, "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": Math.round(e2.progress * 100), children: (0, r.jsx)(`span`, { style: { transform: `scaleX(${e2.progress})` } }) })] }), (0, r.jsxs)(`div`, { className: `ui-dz__actions`, children: [e2.status === `error` && e2.retryable && (0, r.jsx)(`button`, { type: `button`, className: `ui-dz__icon-btn`, "aria-label": `Retry ${e2.name}`, onClick: () => V(e2), children: (0, r.jsx)(p, { d: m.retry }) }), (0, r.jsx)(`button`, { type: `button`, className: `ui-dz__icon-btn`, "aria-label": `Remove ${e2.name}`, onClick: () => H(e2.id), children: (0, r.jsx)(p, { d: m.close }) })] })] }) }, e2.id);
  }) })] }) }), (0, r.jsxs)(`div`, { className: `ui-dz__foot`, children: [$ ?? (0, r.jsx)(`span`, { className: `ui-dz__foot-idle`, children: `No files yet` }), (Z.length > 0 || Q.length > 0) && !X.length && (0, r.jsx)(`button`, { type: `button`, className: `ui-dz__clear`, onClick: U, children: `Clear` })] }), (0, r.jsx)(`span`, { className: `ui-dz__live`, "aria-live": `polite`, children: w })] });
}
var te = `.ui-dz{--ui-dz-tray: #f0f0f0;--ui-dz-card: #ffffff;--ui-dz-line: #ececec;--ui-dz-ink: #171717;--ui-dz-text: #404040;--ui-dz-muted: #8f8f8f;--ui-dz-faint: #b5b5b5;--ui-dz-area: #fafafa;--ui-dz-dash: #d9d9dc;--ui-dz-hover: #e6e6e7;--ui-dz-track: #efeff1;--ui-dz-flash: #e9e9ec;--ui-dz-accent: #2f6bff;--ui-dz-accent-soft: rgba(47, 107, 255, 0.06);--ui-dz-danger: #e5484d;--ui-dz-sheet: #ffffff;--ui-dz-focus: rgba(23, 23, 23, 0.22);--ui-dz-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;container-type: inline-size;display: grid;width: 100%;max-width: 520px;padding: 4px;border-radius: 20px;background: var(--ui-dz-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13.5px;line-height: 1.45;color: var(--ui-dz-text);-webkit-font-smoothing: antialiased}.ui-dz *, .ui-dz *::before, .ui-dz *::after{box-sizing: border-box}:where(.ui-dz) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-dz) svg{display: block;flex: none}.ui-dz button:focus-visible{outline: 2px solid var(--ui-dz-focus);outline-offset: 2px}.ui-dz__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-dz__card{overflow: hidden;border-radius: 16px;transition: height 360ms var(--ui-dz-ease);background: var(--ui-dz-card);box-shadow: 0 0 0 1px var(--ui-dz-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-dz__inner{display: flow-root;padding: 6px}.ui-dz__input{position: absolute;width: 1px;height: 1px;opacity: 0;pointer-events: none}.ui-dz__area{position: relative;display: grid;justify-items: center;width: 100%;padding: 26px 20px 22px;border-radius: 12px;background: var(--ui-dz-area);text-align: center;transition: background-color 220ms ease, box-shadow 220ms ease}.ui-dz__area::before{content: "";position: absolute;inset: 0;border: 1.5px dashed var(--ui-dz-dash);border-radius: inherit;transition: border-color 220ms ease;pointer-events: none}.ui-dz__area:hover::before{border-color: var(--ui-dz-faint)}.ui-dz__area[data-dragging]{background: var(--ui-dz-accent-soft)}.ui-dz__area[data-dragging]::before{border-style: solid;border-color: var(--ui-dz-accent)}.ui-dz__area:focus-visible{outline-offset: 3px}.ui-dz__stack{position: relative;width: 64px;height: 50px;margin-bottom: 12px}.ui-dz__sheet{position: absolute;left: 50%;bottom: 0;width: 34px;height: 42px;margin-left: -17px;border-radius: 7px;background: var(--ui-dz-sheet);box-shadow: 0 0 0 1px var(--ui-dz-line), 0 2px 6px rgba(0, 0, 0, 0.06);transition: transform 420ms var(--ui-dz-ease)}.ui-dz__sheet-l, .ui-dz__sheet-r{background: none;box-shadow: none;filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.06))}.ui-dz__sheet .ui-dz__badge{width: 100%;height: 100%}.ui-dz__sheet-l{transform: translate(-9px, 2px) rotate(-10deg)}.ui-dz__sheet-r{transform: translate(9px, 2px) rotate(10deg)}.ui-dz__sheet-m{display: grid;place-items: center;transform: translateY(-2px)}.ui-dz__sheet-m .ui-dz__glyph{width: 18px;height: 18px;color: var(--ui-dz-ink);transition: transform 420ms var(--ui-dz-ease), color 220ms ease}.ui-dz__area:hover .ui-dz__sheet-m{transform: translateY(-4px)}.ui-dz__area[data-dragging] .ui-dz__sheet-l{transform: translate(-30px, 0) rotate(-16deg)}.ui-dz__area[data-dragging] .ui-dz__sheet-r{transform: translate(30px, 0) rotate(16deg)}.ui-dz__area[data-dragging] .ui-dz__sheet-m{transform: translateY(-9px) scale(1.06)}.ui-dz__area[data-dragging] .ui-dz__sheet-m .ui-dz__glyph{color: var(--ui-dz-accent);animation: ui-dz-bob 900ms ease-in-out infinite}.ui-dz__title{font-size: 14.5px;font-weight: 500;color: var(--ui-dz-ink);animation: ui-dz-in 260ms var(--ui-dz-ease) both}.ui-dz__browse{color: var(--ui-dz-accent)}.ui-dz__hint{margin-top: 3px;font-size: 12.5px;color: var(--ui-dz-muted)}.ui-dz__list{display: grid;margin: 0;padding: 0;list-style: none}.ui-dz__row{display: grid;grid-template-rows: 1fr;animation: ui-dz-grow 420ms var(--ui-dz-ease) both;transition: grid-template-rows 260ms var(--ui-dz-ease), opacity 200ms ease}.ui-dz__row[data-removing]{grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 260ms var(--ui-dz-ease) 200ms, opacity 220ms ease 180ms}.ui-dz__row-inner{position: relative;isolation: isolate;display: flex;align-items: center;gap: 12px;min-height: 0;overflow: hidden;padding: 10px 6px 10px 10px}.ui-dz__row-inner::before{content: "";position: absolute;inset: 3px 0;border-radius: 10px;background: var(--ui-dz-flash);opacity: 0;pointer-events: none;z-index: -1}.ui-dz__row[data-removing] .ui-dz__row-inner::before{animation: ui-dz-flash 280ms ease-out both}.ui-dz__row[data-removing]{pointer-events: none}.ui-dz__row[data-removing] .ui-dz__icon-btn{background: none}.ui-dz__row:first-child .ui-dz__row-inner{margin-top: 6px}.ui-dz__row + .ui-dz__row .ui-dz__row-inner{border-top: 1px solid var(--ui-dz-line)}.ui-dz__badge{width: 28px;height: 34px}.ui-dz__badge-sheet{fill: var(--ui-dz-sheet);stroke: var(--ui-dz-dash);stroke-width: 1.2}.ui-dz__badge-fold{fill: none;stroke: var(--ui-dz-dash);stroke-width: 1.2;stroke-linejoin: round}.ui-dz__badge-text{font-family: inherit;font-size: 7px;font-weight: 700;letter-spacing: 0.03em}.ui-dz__info{flex: 1;min-width: 0}.ui-dz__line{display: flex;align-items: center;gap: 6px;min-width: 0}.ui-dz__name{overflow: hidden;color: var(--ui-dz-ink);font-weight: 500;white-space: nowrap;text-overflow: ellipsis}.ui-dz__done{display: grid;place-items: center;flex: none;color: var(--ui-dz-muted);animation: ui-dz-pop 420ms cubic-bezier(0.34, 1.56, 0.64, 1) both}.ui-dz__done .ui-dz__glyph{width: 14px;height: 14px;stroke-width: 2.2}.ui-dz__meta{margin-top: 1px;font-size: 12.5px;font-variant-numeric: tabular-nums;color: var(--ui-dz-muted);animation: ui-dz-in 240ms var(--ui-dz-ease) both}.ui-dz__dot{margin: 0 5px;color: var(--ui-dz-faint)}.ui-dz__error{color: var(--ui-dz-danger)}.ui-dz__row[data-status="error"] .ui-dz__row-inner{animation: ui-dz-shake 380ms ease both}.ui-dz__bar{position: relative;height: 4px;margin-top: 7px;overflow: hidden;border-radius: 2px;background: var(--ui-dz-track);transition: height 320ms var(--ui-dz-ease) 250ms, margin-top 320ms var(--ui-dz-ease) 250ms, opacity 200ms ease 200ms}.ui-dz__bar[data-hidden]{height: 0;margin-top: 0;opacity: 0}.ui-dz__bar > span{position: absolute;inset: 0;border-radius: inherit;background: var(--ui-dz-ink);transform-origin: left;transition: transform 200ms linear, background-color 200ms ease}.ui-dz__row[data-status="error"] .ui-dz__bar > span{background: var(--ui-dz-danger)}.ui-dz__actions{display: flex;flex: none;gap: 2px}.ui-dz__icon-btn{display: grid;place-items: center;width: 30px;height: 30px;border-radius: 8px;color: var(--ui-dz-muted);transition: background-color 160ms ease, color 160ms ease}.ui-dz__icon-btn:hover{background: var(--ui-dz-track);color: var(--ui-dz-ink)}.ui-dz__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 40px;padding: 0 8px 0 12px;font-size: 12.5px;font-variant-numeric: tabular-nums;color: var(--ui-dz-muted)}.ui-dz__foot > span{animation: ui-dz-in 240ms var(--ui-dz-ease) both}.ui-dz__summary-done{display: inline-flex;align-items: center;gap: 6px;color: var(--ui-dz-ink)}.ui-dz__ok{width: 14px;height: 14px;stroke: var(--ui-dz-muted);stroke-width: 2.2}.ui-dz__warn{width: 14px;height: 14px;stroke: var(--ui-dz-muted)}.ui-dz__clear{height: 28px;padding: 0 10px;border-radius: 8px;font-size: 12.5px;color: var(--ui-dz-text);transition: background-color 160ms ease;animation: ui-dz-in 240ms var(--ui-dz-ease) both}.ui-dz__clear:hover{background: var(--ui-dz-hover)}.ui-dz__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-dz-in{from{opacity: 0;transform: translateY(3px)}to{opacity: 1;transform: none}}@keyframes ui-dz-grow{from{grid-template-rows: 0fr;opacity: 0}to{grid-template-rows: 1fr;opacity: 1}}@keyframes ui-dz-pop{0%{transform: scale(0.4)}60%{transform: scale(1.15)}100%{transform: scale(1)}}@keyframes ui-dz-bob{50%{transform: translateY(-3px)}}@keyframes ui-dz-flash{0%{opacity: 0}35%{opacity: 1}100%{opacity: 0}}@keyframes ui-dz-shake{20%, 60%{transform: translateX(-3px)}40%, 80%{transform: translateX(3px)}}@container (max-width: 420px){.ui-dz__area{padding: 22px 16px 18px}.ui-dz__title{font-size: 14px}}.ui-dz__for-touch{display: none}@media (hover: none) and (pointer: coarse){.ui-dz__for-mouse{display: none}.ui-dz__for-touch{display: inline}.ui-dz__icon-btn{width: 40px;height: 40px;border-radius: 10px}.ui-dz__actions{margin-right: -4px}.ui-dz__clear{height: 36px;padding: 0 12px}}@media (prefers-reduced-motion: reduce){.ui-dz *, .ui-dz *::before, .ui-dz *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-dz{--ui-dz-tray: #111113;--ui-dz-card: #19191b;--ui-dz-line: #2a2a2e;--ui-dz-ink: #ededed;--ui-dz-text: #c8c8cc;--ui-dz-muted: #8b8b92;--ui-dz-faint: #5c5c63;--ui-dz-area: #1d1d20;--ui-dz-dash: #38383d;--ui-dz-hover: #222225;--ui-dz-track: #2a2a2e;--ui-dz-flash: #2e2e33;--ui-dz-accent: #6d8bff;--ui-dz-accent-soft: rgba(109, 139, 255, 0.08);--ui-dz-danger: #ff6369;--ui-dz-sheet: #26262a;--ui-dz-focus: rgba(255, 255, 255, 0.3)}`;
function y() {
  return (0, r.jsx)(`div`, { className: `dropzone-demo`, children: (0, r.jsx)(v, { accept: [`.pdf`, `.png`, `.jpg`, `.xlsx`, `.docx`, `.mp4`], autoplay: true }) });
}

export {
  y
};
