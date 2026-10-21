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

// reconstructed/demo-BBMr4ztO.jsx
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
var i = 1048576;
var a = (name) => {
  if (name.includes(`.`)) {
    return name.split(`.`).pop().toLowerCase();
  }
  return ``;
};
var o = (e) => {
  if (e < i) {
    return `${Math.max(1, Math.round(e / 1024))}\xA0KB`;
  }
  return `${(e / i).toFixed(+(e < 10 * i))}\xA0MB`;
};
var s = (e, t) => {
  if (t < i) {
    return `${Math.round(e / 1024)} of ${o(t)}`;
  }
  return `${(e / i).toFixed(1)} of ${o(t)}`;
};
var ee = (e) => {
  if (e < 1) {
    return `almost done`;
  }
  if (e < 60) {
    return `${Math.ceil(e)}s left`;
  }
  return `${Math.ceil(e / 60)} min left`;
};
var c = [{
  exts: [`pdf`],
  color: `#e5484d`
}, {
  exts: [`xls`, `xlsx`, `csv`, `numbers`],
  color: `#2f9e5b`
}, {
  exts: [`doc`, `docx`, `txt`, `md`, `pages`, `rtf`],
  color: `#2f6bff`
}, {
  exts: [`png`, `jpg`, `jpeg`, `gif`, `webp`, `svg`, `heic`, `avif`],
  color: `#8b5cf6`
}, {
  exts: [`mp4`, `mov`, `webm`, `mp3`, `wav`],
  color: `#f08c00`
}, {
  exts: [`ppt`, `pptx`, `key`],
  color: `#e8590c`
}];
var l = (name) => c.find((t) => t.exts.includes(a(name)))?.color ?? `#8f8f8f`;
var u = (size) => Math.min(9e3, Math.max(2600, size / (1.2 * i) * 1e3));
var d = 0;
var f = () => `f${Date.now().toString(36)}${(d++).toString(36)}`;
var P1Component = ({
  d: d2,
  className
}) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, className: [`ui-dz__glyph`, className].filter(Boolean).join(` `), "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: d2 }) });
var m = {
  upload: `M12 15V4M7.5 8.5 12 4l4.5 4.5M5 15v3.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V15`,
  close: `M7 7l10 10M17 7 7 17`,
  check: `M5.5 12.5l4 4L18.5 8`,
  retry: `M20 12a8 8 0 1 1-2.34-5.66L20 8.5M20 4v4.5h-4.5`,
  alert: `M12 8v5M12 16.5h.01M10.3 3.9 2.6 17.5A2 2 0 0 0 4.3 20.5h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z`
};
function H1Component({
  name,
  end
}) {
  let n4 = (a(name) || `file`).slice(0, 4).toUpperCase();
  let width = Math.max(18, n4.length * 5.4 + 8);
  let x = end ? 30 - width : 0;
  return /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 30 36`, className: `ui-dz__badge`, "aria-hidden": `true`, children: [
    /* @__PURE__ */ jsx("path", { d: `M5 1h14l10 10v20a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4z`, className: `ui-dz__badge-sheet` }),
    /* @__PURE__ */ jsx("path", { d: `M19 1v6a4 4 0 0 0 4 4h6`, className: `ui-dz__badge-fold` }),
    /* @__PURE__ */ jsx("rect", { x, y: `19`, width, height: `11`, rx: `3`, fill: l(name), fillOpacity: `0.14` }),
    /* @__PURE__ */ jsx("text", { x: x + 4, y: `27.2`, className: `ui-dz__badge-text`, fill: l(name), children: n4 })
  ] });
}
function G1Component() {
  return /* @__PURE__ */ jsxs("span", { className: `ui-dz__stack`, "aria-hidden": `true`, children: [
    /* @__PURE__ */ jsx("span", { className: `ui-dz__sheet ui-dz__sheet-l`, children: /* @__PURE__ */ jsx(H1Component, { name: `file.pdf` }) }),
    /* @__PURE__ */ jsx("span", { className: `ui-dz__sheet ui-dz__sheet-r`, children: /* @__PURE__ */ jsx(H1Component, { name: `file.png`, end: true }) }),
    /* @__PURE__ */ jsx("span", { className: `ui-dz__sheet ui-dz__sheet-m`, children: /* @__PURE__ */ jsx(P1Component, { d: m.upload }) })
  ] });
}
var _ = [{
  name: `Q3-Board-Report.pdf`,
  size: 4.2 * i
}, {
  name: `Hero-Shot.png`,
  size: 2.6 * i
}, {
  name: `Budget-2027.xlsx`,
  size: 1.3 * i,
  failAt: 0.62
}, {
  name: `Product-Demo.mp4`,
  size: 48 * i
}];
function V1Component({
  accept,
  maxSize = 25 * i,
  onUpload,
  onChange,
  hint,
  autoplay = false,
  className
}) {
  let [b, setB] = n3.useState([]);
  let [S, setS] = n3.useState(0);
  let [w, setW] = n3.useState(``);
  let [, setE] = n3.useState(0);
  let DRef = n3.useRef(null);
  let ORef = n3.useRef(null);
  let kRef = n3.useRef(null);
  let ARef = n3.useRef(0);
  let jRef = n3.useRef(b);
  jRef.current = b;
  let id = n3.useId();
  let N = accept?.map((e) => e.replace(/^\./, ``).toLowerCase());
  let P = N?.length ? N.length <= 3 ? N.map((e) => e.toUpperCase()).join(`, `) : `${N.slice(0, 3).map((e) => e.toUpperCase()).join(`, `)} and more` : `Any file`;
  let F = hint ?? `${P} \xB7 up to ${o(maxSize)} each`;
  n3.useEffect(() => {
    onChange?.(b.filter((e) => !e.removing).map(({
      id: id2,
      name,
      size,
      status,
      progress,
      error,
      file
    }) => ({
      id: id2,
      name,
      size,
      status,
      progress,
      error,
      file
    })));
  }, [b]);
  n3.useLayoutEffect(() => {
    let ORef_current = ORef.current;
    let kRef_current = kRef.current;
    if (!ORef_current || !kRef_current) {
      return;
    }
    let n4 = () => ORef_current.style.height = `${kRef_current.offsetHeight}px`;
    n4();
    let r2 = new ResizeObserver(n4);
    r2.observe(kRef_current);
    return () => r2.disconnect();
  }, []);
  let I = (e, t) => setB((n4) => n4.map((n5) => {
    if (n5.id === e) {
      return {
        ...n5,
        ...t
      };
    }
    return n5;
  }));
  let L = (e) => {
    let id2 = f();
    let r2;
    if (N?.length && !N.includes(a(e.name))) {
      r2 = a(e.name) ? `.${a(e.name)} files aren't supported` : `This file type isn't supported`;
    } else if (e.size > maxSize) {
      r2 = `Too large \u2013 max ${o(maxSize)}`;
    }
    let i2 = {
      id: id2,
      name: e.name,
      size: e.size,
      file: e.file,
      status: r2 ? `error` : `uploading`,
      progress: 0,
      error: r2,
      failAt: e.failAt,
      startedAt: performance.now(),
      duration: u(e.size)
    };
    setB((e2) => [...e2, i2]);
    if (r2) {
      setW(`${e.name}: ${r2}`);
    } else if (onUpload && e.file) {
      R(i2);
    }
  };
  let R = (e) => {
    onUpload(e.file, (t) => I(e.id, {
      progress: Math.max(0, Math.min(1, t))
    })).then(() => {
      I(e.id, {
        status: `done`,
        progress: 1
      });
      setW(`${e.name} uploaded`);
    }).catch((t) => {
      let n4 = t instanceof Error && t.message ? t.message : `Upload failed`;
      I(e.id, {
        status: `error`,
        error: n4,
        retryable: true
      });
      setW(`${e.name}: ${n4}`);
    });
  };
  let z = (files) => Array.from(files).forEach((file) => L({
    name: file.name,
    size: file.size,
    file
  }));
  let B = b.some((e) => e.status === `uploading` && (!onUpload || !e.file));
  n3.useEffect(() => {
    if (!B) {
      return;
    }
    let e = window.setInterval(() => {
      let e2 = performance.now();
      setB((t) => t.map((t2) => {
        if (t2.status !== `uploading` || onUpload && t2.file) {
          return t2;
        }
        let n4 = Math.min(1, (e2 - t2.startedAt) / t2.duration);
        let progress = Math.max(t2.progress, n4 < 1 ? n4 * (0.92 + Math.random() * 0.08) : 1);
        if (t2.failAt !== void 0 && progress >= t2.failAt) {
          setW(`${t2.name}: upload failed`);
          return {
            ...t2,
            progress: t2.failAt,
            status: `error`,
            error: `Connection lost`,
            retryable: true
          };
        }
        if (progress >= 1) {
          setW(`${t2.name} uploaded`);
          return {
            ...t2,
            progress: 1,
            status: `done`
          };
        }
        return {
          ...t2,
          progress
        };
      }));
    }, 90);
    return () => clearInterval(e);
  }, [B, onUpload]);
  n3.useEffect(() => {
    if (!b.some((e2) => e2.status === `uploading`)) {
      return;
    }
    let e = window.setInterval(() => setE((e2) => e2 + 1), 500);
    return () => clearInterval(e);
  }, [b]);
  n3.useEffect(() => {
    if (!autoplay) {
      return;
    }
    let e = [window.setTimeout(() => setS(_.length), 700), window.setTimeout(() => {
      setS(0);
      _.forEach((e2, t) => window.setTimeout(() => L(e2), t * 140));
    }, 1900)];
    return () => e.forEach(clearTimeout);
  }, [autoplay]);
  let V = (e) => {
    I(e.id, {
      status: `uploading`,
      progress: 0,
      error: void 0,
      retryable: false,
      failAt: void 0,
      startedAt: performance.now()
    });
    if (onUpload && e.file) {
      R({
        ...e,
        progress: 0
      });
    }
  };
  let H = (e) => {
    I(e, {
      removing: true
    });
    window.setTimeout(() => setB((t) => t.filter((t2) => t2.id !== e)), 480);
  };
  let onClick = () => jRef.current.filter((e) => e.status !== `uploading`).forEach((e) => H(e.id));
  let W = (e) => Array.from(e.dataTransfer.types).includes(`Files`);
  let onDragEnter = (e) => {
    if (W(e)) {
      e.preventDefault();
      ARef.current += 1;
      setS(Math.max(1, e.dataTransfer.items.length));
    }
  };
  let onDragOver = (e) => {
    if (W(e)) {
      e.preventDefault();
      e.dataTransfer.dropEffect = `copy`;
    }
  };
  let onDragLeave = () => {
    ARef.current = Math.max(0, ARef.current - 1);
    if (!ARef.current) {
      setS(0);
    }
  };
  let onDrop = (e) => {
    if (W(e)) {
      e.preventDefault();
      ARef.current = 0;
      setS(0);
      z(e.dataTransfer.files);
    }
  };
  let Y = b.filter((e) => !e.removing);
  let X = Y.filter((e) => e.status === `uploading`);
  let Z = Y.filter((e) => e.status === `done`);
  let Q = Y.filter((e) => e.status === `error`);
  let ne = performance.now();
  let $ = null;
  if (Y.length) {
    if (X.length) {
      let e = X.reduce((acc, item) => acc + item.size, 0);
      let t = X.reduce((acc, item) => acc + item.size * item.progress, 0);
      $ = /* @__PURE__ */ jsxs("span", { children: [
        `Uploading `,
        X.length,
        ` of `,
        Y.length,
        ` \xB7 `,
        s(t, e)
      ] });
    } else {
      $ = /* @__PURE__ */ jsxs("span", { className: `ui-dz__summary-done`, children: [
        Q.length ? /* @__PURE__ */ jsx(P1Component, { d: m.alert, className: `ui-dz__warn` }) : /* @__PURE__ */ jsx(P1Component, { d: m.check, className: `ui-dz__ok` }),
        Q.length ? `${Z.length} of ${Y.length} uploaded` : `${Z.length} ${Z.length === 1 ? `file` : `files`} uploaded`
      ] });
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: [`ui-dz`, className].filter(Boolean).join(` `), children: [
    /* @__PURE__ */ jsx("style", { href: `ui-dropzone`, precedence: `default`, children: te }),
    /* @__PURE__ */ jsx("div", { ref: ORef, className: `ui-dz__card`, children: /* @__PURE__ */ jsxs("div", { ref: kRef, className: `ui-dz__inner`, children: [
      /* @__PURE__ */ jsx("input", { ref: DRef, id, type: `file`, multiple: true, accept: accept?.join(`,`), className: `ui-dz__input`, tabIndex: -1, onChange: (e) => {
        if (e.target.files) {
          z(e.target.files);
        }
        e.target.value = ``;
      } }),
      /* @__PURE__ */ jsxs("button", { type: `button`, className: `ui-dz__area`, "data-dragging": S > 0 || void 0, "aria-describedby": `${id}-hint`, onClick: () => DRef.current?.click(), onDragEnter, onDragOver, onDragLeave, onDrop, children: [
        /* @__PURE__ */ jsx(G1Component, {}),
        /* @__PURE__ */ jsx("span", { className: `ui-dz__title`, children: S ? `Release to upload ${S === 1 ? `1 file` : `${S} files`}` : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("span", { className: `ui-dz__for-mouse`, children: [
            `Drop files here or `,
            /* @__PURE__ */ jsx("span", { className: `ui-dz__browse`, children: `browse` })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: `ui-dz__for-touch`, children: [
            `Tap to `,
            /* @__PURE__ */ jsx("span", { className: `ui-dz__browse`, children: `choose files` })
          ] })
        ] }) }, S ? `drop` : `idle`),
        /* @__PURE__ */ jsx("span", { className: `ui-dz__hint`, id: `${id}-hint`, children: F })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: `ui-dz__list`, "aria-label": `Uploads`, children: b.map((e) => {
        let t = e.status === `uploading` ? (1 - e.progress) * (ne - e.startedAt) / Math.max(0.05, e.progress) / 1e3 : 0;
        return /* @__PURE__ */ jsx("li", { className: `ui-dz__row`, "data-status": e.status, "data-removing": e.removing || void 0, children: /* @__PURE__ */ jsxs("div", { className: `ui-dz__row-inner`, children: [
          /* @__PURE__ */ jsx(H1Component, { name: e.name }),
          /* @__PURE__ */ jsxs("div", { className: `ui-dz__info`, children: [
            /* @__PURE__ */ jsxs("div", { className: `ui-dz__line`, children: [
              /* @__PURE__ */ jsx("span", { className: `ui-dz__name`, title: e.name, children: e.name }),
              e.status === `done` && /* @__PURE__ */ jsx("span", { className: `ui-dz__done`, "aria-label": `Uploaded`, children: /* @__PURE__ */ jsx(P1Component, { d: m.check }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: `ui-dz__meta`, children: [
              e.status === `uploading` && /* @__PURE__ */ jsxs(Fragment, { children: [
                s(e.size * e.progress, e.size),
                /* @__PURE__ */ jsx("span", { className: `ui-dz__dot`, children: `\xB7` }),
                e.progress < 0.04 ? `starting` : ee(t)
              ] }),
              e.status === `done` && o(e.size),
              e.status === `error` && /* @__PURE__ */ jsx("span", { className: `ui-dz__error`, children: e.error })
            ] }, e.status),
            (e.status !== `error` || e.retryable) && /* @__PURE__ */ jsx("div", { className: `ui-dz__bar`, "data-hidden": e.status === `done` || void 0, role: `progressbar`, "aria-label": `${e.name} upload`, "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": Math.round(e.progress * 100), children: /* @__PURE__ */ jsx("span", { style: {
              transform: `scaleX(${e.progress})`
            } }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `ui-dz__actions`, children: [
            e.status === `error` && e.retryable && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-dz__icon-btn`, "aria-label": `Retry ${e.name}`, onClick: () => V(e), children: /* @__PURE__ */ jsx(P1Component, { d: m.retry }) }),
            /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-dz__icon-btn`, "aria-label": `Remove ${e.name}`, onClick: () => H(e.id), children: /* @__PURE__ */ jsx(P1Component, { d: m.close }) })
          ] })
        ] }) }, e.id);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: `ui-dz__foot`, children: [
      $ ?? /* @__PURE__ */ jsx("span", { className: `ui-dz__foot-idle`, children: `No files yet` }),
      (Z.length > 0 || Q.length > 0) && !X.length && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-dz__clear`, onClick, children: `Clear` })
    ] }),
    /* @__PURE__ */ jsx("span", { className: `ui-dz__live`, "aria-live": `polite`, children: w })
  ] });
}
var te = `.ui-dz{--ui-dz-tray: #f0f0f0;--ui-dz-card: #ffffff;--ui-dz-line: #ececec;--ui-dz-ink: #171717;--ui-dz-text: #404040;--ui-dz-muted: #8f8f8f;--ui-dz-faint: #b5b5b5;--ui-dz-area: #fafafa;--ui-dz-dash: #d9d9dc;--ui-dz-hover: #e6e6e7;--ui-dz-track: #efeff1;--ui-dz-flash: #e9e9ec;--ui-dz-accent: #2f6bff;--ui-dz-accent-soft: rgba(47, 107, 255, 0.06);--ui-dz-danger: #e5484d;--ui-dz-sheet: #ffffff;--ui-dz-focus: rgba(23, 23, 23, 0.22);--ui-dz-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;container-type: inline-size;display: grid;width: 100%;max-width: 520px;padding: 4px;border-radius: 20px;background: var(--ui-dz-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13.5px;line-height: 1.45;color: var(--ui-dz-text);-webkit-font-smoothing: antialiased}.ui-dz *, .ui-dz *::before, .ui-dz *::after{box-sizing: border-box}:where(.ui-dz) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-dz) svg{display: block;flex: none}.ui-dz button:focus-visible{outline: 2px solid var(--ui-dz-focus);outline-offset: 2px}.ui-dz__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-dz__card{overflow: hidden;border-radius: 16px;transition: height 360ms var(--ui-dz-ease);background: var(--ui-dz-card);box-shadow: 0 0 0 1px var(--ui-dz-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-dz__inner{display: flow-root;padding: 6px}.ui-dz__input{position: absolute;width: 1px;height: 1px;opacity: 0;pointer-events: none}.ui-dz__area{position: relative;display: grid;justify-items: center;width: 100%;padding: 26px 20px 22px;border-radius: 12px;background: var(--ui-dz-area);text-align: center;transition: background-color 220ms ease, box-shadow 220ms ease}.ui-dz__area::before{content: "";position: absolute;inset: 0;border: 1.5px dashed var(--ui-dz-dash);border-radius: inherit;transition: border-color 220ms ease;pointer-events: none}.ui-dz__area:hover::before{border-color: var(--ui-dz-faint)}.ui-dz__area[data-dragging]{background: var(--ui-dz-accent-soft)}.ui-dz__area[data-dragging]::before{border-style: solid;border-color: var(--ui-dz-accent)}.ui-dz__area:focus-visible{outline-offset: 3px}.ui-dz__stack{position: relative;width: 64px;height: 50px;margin-bottom: 12px}.ui-dz__sheet{position: absolute;left: 50%;bottom: 0;width: 34px;height: 42px;margin-left: -17px;border-radius: 7px;background: var(--ui-dz-sheet);box-shadow: 0 0 0 1px var(--ui-dz-line), 0 2px 6px rgba(0, 0, 0, 0.06);transition: transform 420ms var(--ui-dz-ease)}.ui-dz__sheet-l, .ui-dz__sheet-r{background: none;box-shadow: none;filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.06))}.ui-dz__sheet .ui-dz__badge{width: 100%;height: 100%}.ui-dz__sheet-l{transform: translate(-9px, 2px) rotate(-10deg)}.ui-dz__sheet-r{transform: translate(9px, 2px) rotate(10deg)}.ui-dz__sheet-m{display: grid;place-items: center;transform: translateY(-2px)}.ui-dz__sheet-m .ui-dz__glyph{width: 18px;height: 18px;color: var(--ui-dz-ink);transition: transform 420ms var(--ui-dz-ease), color 220ms ease}.ui-dz__area:hover .ui-dz__sheet-m{transform: translateY(-4px)}.ui-dz__area[data-dragging] .ui-dz__sheet-l{transform: translate(-30px, 0) rotate(-16deg)}.ui-dz__area[data-dragging] .ui-dz__sheet-r{transform: translate(30px, 0) rotate(16deg)}.ui-dz__area[data-dragging] .ui-dz__sheet-m{transform: translateY(-9px) scale(1.06)}.ui-dz__area[data-dragging] .ui-dz__sheet-m .ui-dz__glyph{color: var(--ui-dz-accent);animation: ui-dz-bob 900ms ease-in-out infinite}.ui-dz__title{font-size: 14.5px;font-weight: 500;color: var(--ui-dz-ink);animation: ui-dz-in 260ms var(--ui-dz-ease) both}.ui-dz__browse{color: var(--ui-dz-accent)}.ui-dz__hint{margin-top: 3px;font-size: 12.5px;color: var(--ui-dz-muted)}.ui-dz__list{display: grid;margin: 0;padding: 0;list-style: none}.ui-dz__row{display: grid;grid-template-rows: 1fr;animation: ui-dz-grow 420ms var(--ui-dz-ease) both;transition: grid-template-rows 260ms var(--ui-dz-ease), opacity 200ms ease}.ui-dz__row[data-removing]{grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 260ms var(--ui-dz-ease) 200ms, opacity 220ms ease 180ms}.ui-dz__row-inner{position: relative;isolation: isolate;display: flex;align-items: center;gap: 12px;min-height: 0;overflow: hidden;padding: 10px 6px 10px 10px}.ui-dz__row-inner::before{content: "";position: absolute;inset: 3px 0;border-radius: 10px;background: var(--ui-dz-flash);opacity: 0;pointer-events: none;z-index: -1}.ui-dz__row[data-removing] .ui-dz__row-inner::before{animation: ui-dz-flash 280ms ease-out both}.ui-dz__row[data-removing]{pointer-events: none}.ui-dz__row[data-removing] .ui-dz__icon-btn{background: none}.ui-dz__row:first-child .ui-dz__row-inner{margin-top: 6px}.ui-dz__row + .ui-dz__row .ui-dz__row-inner{border-top: 1px solid var(--ui-dz-line)}.ui-dz__badge{width: 28px;height: 34px}.ui-dz__badge-sheet{fill: var(--ui-dz-sheet);stroke: var(--ui-dz-dash);stroke-width: 1.2}.ui-dz__badge-fold{fill: none;stroke: var(--ui-dz-dash);stroke-width: 1.2;stroke-linejoin: round}.ui-dz__badge-text{font-family: inherit;font-size: 7px;font-weight: 700;letter-spacing: 0.03em}.ui-dz__info{flex: 1;min-width: 0}.ui-dz__line{display: flex;align-items: center;gap: 6px;min-width: 0}.ui-dz__name{overflow: hidden;color: var(--ui-dz-ink);font-weight: 500;white-space: nowrap;text-overflow: ellipsis}.ui-dz__done{display: grid;place-items: center;flex: none;color: var(--ui-dz-muted);animation: ui-dz-pop 420ms cubic-bezier(0.34, 1.56, 0.64, 1) both}.ui-dz__done .ui-dz__glyph{width: 14px;height: 14px;stroke-width: 2.2}.ui-dz__meta{margin-top: 1px;font-size: 12.5px;font-variant-numeric: tabular-nums;color: var(--ui-dz-muted);animation: ui-dz-in 240ms var(--ui-dz-ease) both}.ui-dz__dot{margin: 0 5px;color: var(--ui-dz-faint)}.ui-dz__error{color: var(--ui-dz-danger)}.ui-dz__row[data-status="error"] .ui-dz__row-inner{animation: ui-dz-shake 380ms ease both}.ui-dz__bar{position: relative;height: 4px;margin-top: 7px;overflow: hidden;border-radius: 2px;background: var(--ui-dz-track);transition: height 320ms var(--ui-dz-ease) 250ms, margin-top 320ms var(--ui-dz-ease) 250ms, opacity 200ms ease 200ms}.ui-dz__bar[data-hidden]{height: 0;margin-top: 0;opacity: 0}.ui-dz__bar > span{position: absolute;inset: 0;border-radius: inherit;background: var(--ui-dz-ink);transform-origin: left;transition: transform 200ms linear, background-color 200ms ease}.ui-dz__row[data-status="error"] .ui-dz__bar > span{background: var(--ui-dz-danger)}.ui-dz__actions{display: flex;flex: none;gap: 2px}.ui-dz__icon-btn{display: grid;place-items: center;width: 30px;height: 30px;border-radius: 8px;color: var(--ui-dz-muted);transition: background-color 160ms ease, color 160ms ease}.ui-dz__icon-btn:hover{background: var(--ui-dz-track);color: var(--ui-dz-ink)}.ui-dz__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 40px;padding: 0 8px 0 12px;font-size: 12.5px;font-variant-numeric: tabular-nums;color: var(--ui-dz-muted)}.ui-dz__foot > span{animation: ui-dz-in 240ms var(--ui-dz-ease) both}.ui-dz__summary-done{display: inline-flex;align-items: center;gap: 6px;color: var(--ui-dz-ink)}.ui-dz__ok{width: 14px;height: 14px;stroke: var(--ui-dz-muted);stroke-width: 2.2}.ui-dz__warn{width: 14px;height: 14px;stroke: var(--ui-dz-muted)}.ui-dz__clear{height: 28px;padding: 0 10px;border-radius: 8px;font-size: 12.5px;color: var(--ui-dz-text);transition: background-color 160ms ease;animation: ui-dz-in 240ms var(--ui-dz-ease) both}.ui-dz__clear:hover{background: var(--ui-dz-hover)}.ui-dz__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-dz-in{from{opacity: 0;transform: translateY(3px)}to{opacity: 1;transform: none}}@keyframes ui-dz-grow{from{grid-template-rows: 0fr;opacity: 0}to{grid-template-rows: 1fr;opacity: 1}}@keyframes ui-dz-pop{0%{transform: scale(0.4)}60%{transform: scale(1.15)}100%{transform: scale(1)}}@keyframes ui-dz-bob{50%{transform: translateY(-3px)}}@keyframes ui-dz-flash{0%{opacity: 0}35%{opacity: 1}100%{opacity: 0}}@keyframes ui-dz-shake{20%, 60%{transform: translateX(-3px)}40%, 80%{transform: translateX(3px)}}@container (max-width: 420px){.ui-dz__area{padding: 22px 16px 18px}.ui-dz__title{font-size: 14px}}.ui-dz__for-touch{display: none}@media (hover: none) and (pointer: coarse){.ui-dz__for-mouse{display: none}.ui-dz__for-touch{display: inline}.ui-dz__icon-btn{width: 40px;height: 40px;border-radius: 10px}.ui-dz__actions{margin-right: -4px}.ui-dz__clear{height: 36px;padding: 0 12px}}@media (prefers-reduced-motion: reduce){.ui-dz *, .ui-dz *::before, .ui-dz *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-dz{--ui-dz-tray: #111113;--ui-dz-card: #19191b;--ui-dz-line: #2a2a2e;--ui-dz-ink: #ededed;--ui-dz-text: #c8c8cc;--ui-dz-muted: #8b8b92;--ui-dz-faint: #5c5c63;--ui-dz-area: #1d1d20;--ui-dz-dash: #38383d;--ui-dz-hover: #222225;--ui-dz-track: #2a2a2e;--ui-dz-flash: #2e2e33;--ui-dz-accent: #6d8bff;--ui-dz-accent-soft: rgba(109, 139, 255, 0.08);--ui-dz-danger: #ff6369;--ui-dz-sheet: #26262a;--ui-dz-focus: rgba(255, 255, 255, 0.3)}`;
function YComponent() {
  return /* @__PURE__ */ jsx("div", { className: `dropzone-demo`, children: /* @__PURE__ */ jsx(V1Component, { accept: [`.pdf`, `.png`, `.jpg`, `.xlsx`, `.docx`, `.mp4`], autoplay: true }) });
}

export {
  YComponent
};
