// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
const n = t_1();
const r = t();
const i = 1048576;
const a = name => {
  if (name.includes(`.`)) {
    return name.split(`.`).pop().toLowerCase();
  }
  return ``;
};
const o = e => {
  if (e < i) {
    return `${Math.max(1, Math.round(e / 1024))} KB`;
  }
  return `${(e / i).toFixed(+(e < 10 * i))} MB`;
};
const s = (e, t) => {
  if (t < i) {
    return `${Math.round(e / 1024)} of ${o(t)}`;
  }
  return `${(e / i).toFixed(1)} of ${o(t)}`;
};
const c = e => {
  if (e < 1) {
    return `almost done`;
  }
  if (e < 60) {
    return `${Math.ceil(e)}s left`;
  }
  return `${Math.ceil(e / 60)} min left`;
};
const l = [{
  exts: [`pdf`],
  color: `#e5484d`
}, {
  exts: [`xls`, `xlsx`, `csv`, `numbers`],
  color: `#1a9a52`
}, {
  exts: [`doc`, `docx`, `txt`, `md`, `pages`, `rtf`],
  color: `#0060e2`
}, {
  exts: [`png`, `jpg`, `jpeg`, `gif`, `webp`, `svg`, `heic`, `avif`],
  color: `#5B5BD6`
}, {
  exts: [`mp4`, `mov`, `webm`, `mp3`, `wav`],
  color: `#e8a20c`
}, {
  exts: [`ppt`, `pptx`, `key`],
  color: `#e8590c`
}];
const u = name => l.find(t => t.exts.includes(a(name)))?.color ?? `#8f8f8f`;
const d = size => Math.min(9000, Math.max(2600, size / (1.2 * i) * 1000));
let f = 0;
const p = () => `f${Date.now().toString(36)}${(f++).toString(36)}`;
const M1Component = ({
  d,
  solid,
  className
}) => <svg viewBox={solid ? `0 0 16 16` : `0 0 24 24`} className={[`ui-dzc__glyph`, className].filter(Boolean).join(` `)} data-solid={solid || undefined} aria-hidden={`true`}><path d={d} /></svg>;
const h = {
  upload: `M12 15V4M7.5 8.5 12 4l4.5 4.5M5 15v3.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V15`,
  close: `M7 7l10 10M17 7 7 17`,
  retry: `M20 12a8 8 0 1 1-2.34-5.66L20 8.5M20 4v4.5h-4.5`,
  checkCircle: `M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Zm8.9-1.2a.5.5 0 0 0-.8-.6L7.44 9.23 6.35 8.15a.5.5 0 1 0-.7.7l1.5 1.5a.5.5 0 0 0 .76-.06l2.5-3.5Z`,
  alertCircle: `M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0ZM8 4.6a.6.6 0 0 0-.6.6v3.2a.6.6 0 0 0 1.2 0V5.2a.6.6 0 0 0-.6-.6Zm0 6.9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z`
};
function EeComponent({
  name
}) {
  return <svg viewBox={`0 0 16 16`} className={`ui-dzc__file`} aria-hidden={`true`}><path className={`ui-dzc__file-sheet`} d={`M4 1.75h5l3.25 3.25v8A1.25 1.25 0 0 1 11 14.25H4A1.25 1.25 0 0 1 2.75 13V3A1.25 1.25 0 0 1 4 1.75Z`} /><path className={`ui-dzc__file-fold`} d={`M9 1.75V4a1 1 0 0 0 1 1h2.25`} /><rect x={`1`} y={`8.5`} width={`9`} height={`4.5`} rx={`1.25`} fill={u(name)} /></svg>;
}
function G1Component({
  name,
  end
}) {
  let n = (a(name) || `file`).slice(0, 4).toUpperCase();
  let width = Math.max(18, n.length * 5.2 + 8);
  let x = end ? 30 - width : 0;
  return <svg viewBox={`0 0 30 36`} className={`ui-dzc__badge`} aria-hidden={`true`}><path d={`M5 1h14l10 10v20a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4z`} className={`ui-dzc__badge-sheet`} /><path d={`M19 1v6a4 4 0 0 0 4 4h6`} className={`ui-dzc__badge-fold`} /><rect x={x} y={`19`} width={width} height={`11`} rx={`3`} fill={u(name)} fillOpacity={`0.12`} /><text x={x + 4} y={`27.2`} className={`ui-dzc__badge-text`} fill={u(name)}>{n}</text></svg>;
}
function Component() {
  return <span className={`ui-dzc__stack`} aria-hidden={`true`}><span className={`ui-dzc__sheet ui-dzc__sheet-l`}><G1Component name={`file.pdf`} /></span><span className={`ui-dzc__sheet ui-dzc__sheet-r`}><G1Component name={`file.png`} end /></span><span className={`ui-dzc__sheet ui-dzc__sheet-m`}><M1Component d={h.upload} /></span></span>;
}
const v = [{
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
function Y1Component({
  accept,
  maxSize = 25 * i,
  onUpload,
  onChange,
  hint,
  autoplay = false,
  className
}) {
  let [b, setB] = n.useState([]);
  let [S, setS] = n.useState(0);
  let [w, setW] = n.useState(``);
  let [, setE] = n.useState(0);
  let DRef = n.useRef(null);
  let ORef = n.useRef(null);
  let kRef = n.useRef(null);
  let ARef = n.useRef(0);
  let jRef = n.useRef(b);
  jRef.current = b;
  let id = n.useId();
  let N = accept?.map(e => e.replace(/^\./, ``).toLowerCase());
  let P = N?.length ? N.length <= 3 ? N.map(e => e.toUpperCase()).join(`, `) : `${N.slice(0, 3).map(e => e.toUpperCase()).join(`, `)} and more` : `Any file`;
  let F = hint ?? `${P} · up to ${o(maxSize)} each`;
  n.useEffect(() => {
    onChange?.(b.filter(e => !e.removing).map(({
      id,
      name,
      size,
      status,
      progress,
      error,
      file
    }) => ({
      id,
      name,
      size,
      status,
      progress,
      error,
      file
    })));
  }, [b]);
  n.useLayoutEffect(() => {
    let ORef_current = ORef.current;
    let kRef_current = kRef.current;
    if (!ORef_current || !kRef_current) {
      return;
    }
    let n = () => ORef_current.style.height = `${kRef_current.offsetHeight}px`;
    n();
    let r = new ResizeObserver(n);
    r.observe(kRef_current);
    return () => r.disconnect();
  }, []);
  let I = (e, t) => setB(n => n.map(n => {
    if (n.id === e) {
      return {
        ...n,
        ...t
      };
    }
    return n;
  }));
  let L = e => {
    let id = p();
    let r;
    if (N?.length && !N.includes(a(e.name))) {
      r = a(e.name) ? `.${a(e.name)} files aren't supported` : `This file type isn't supported`;
    } else if (e.size > maxSize) {
      r = `Too large – max ${o(maxSize)}`;
    }
    let i = {
      id,
      name: e.name,
      size: e.size,
      file: e.file,
      status: r ? `error` : `uploading`,
      progress: 0,
      error: r,
      failAt: e.failAt,
      startedAt: performance.now(),
      duration: d(e.size)
    };
    setB(e => [...e, i]);
    if (r) {
      setW(`${e.name}: ${r}`);
    } else if (onUpload && e.file) {
      R(i);
    }
  };
  let R = e => {
    onUpload(e.file, t => I(e.id, {
      progress: Math.max(0, Math.min(1, t))
    })).then(() => {
      I(e.id, {
        status: `done`,
        progress: 1
      });
      setW(`${e.name} uploaded`);
    }).catch(t => {
      let n = t instanceof Error && t.message ? t.message : `Upload failed`;
      I(e.id, {
        status: `error`,
        error: n,
        retryable: true
      });
      setW(`${e.name}: ${n}`);
    });
  };
  let z = files => Array.from(files).forEach(file => L({
    name: file.name,
    size: file.size,
    file
  }));
  let B = b.some(e => e.status === `uploading` && (!onUpload || !e.file));
  n.useEffect(() => {
    if (!B) {
      return;
    }
    let e = window.setInterval(() => {
      let e = performance.now();
      setB(t => t.map(t => {
        if (t.status !== `uploading` || onUpload && t.file) {
          return t;
        }
        let n = Math.min(1, (e - t.startedAt) / t.duration);
        let progress = Math.max(t.progress, n < 1 ? n * (0.92 + Math.random() * 0.08) : 1);
        if (t.failAt !== undefined && progress >= t.failAt) {
          setW(`${t.name}: upload failed`);
          return {
            ...t,
            progress: t.failAt,
            status: `error`,
            error: `Connection lost`,
            retryable: true
          };
        }
        if (progress >= 1) {
          setW(`${t.name} uploaded`);
          return {
            ...t,
            progress: 1,
            status: `done`
          };
        }
        return {
          ...t,
          progress
        };
      }));
    }, 90);
    return () => clearInterval(e);
  }, [B, onUpload]);
  n.useEffect(() => {
    if (!b.some(e => e.status === `uploading`)) {
      return;
    }
    let e = window.setInterval(() => setE(e => e + 1), 500);
    return () => clearInterval(e);
  }, [b]);
  n.useEffect(() => {
    if (!autoplay) {
      return;
    }
    let e = [window.setTimeout(() => setS(v.length), 700), window.setTimeout(() => {
      setS(0);
      v.forEach((e, t) => window.setTimeout(() => L(e), t * 140));
    }, 1900)];
    return () => e.forEach(clearTimeout);
  }, [autoplay]);
  let V = e => {
    I(e.id, {
      status: `uploading`,
      progress: 0,
      error: undefined,
      retryable: false,
      failAt: undefined,
      startedAt: performance.now()
    });
    if (onUpload && e.file) {
      R({
        ...e,
        progress: 0
      });
    }
  };
  let H = e => {
    I(e, {
      removing: true
    });
    window.setTimeout(() => setB(t => t.filter(t => t.id !== e)), 480);
  };
  let onClick = () => jRef.current.filter(e => e.status !== `uploading`).forEach(e => H(e.id));
  let W = e => Array.from(e.dataTransfer.types).includes(`Files`);
  let onDragEnter = e => {
    if (W(e)) {
      e.preventDefault();
      ARef.current += 1;
      setS(Math.max(1, e.dataTransfer.items.length));
    }
  };
  let onDragOver = e => {
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
  let onDrop = e => {
    if (W(e)) {
      e.preventDefault();
      ARef.current = 0;
      setS(0);
      z(e.dataTransfer.files);
    }
  };
  let Y = b.filter(e => !e.removing);
  let X = Y.filter(e => e.status === `uploading`);
  let Z = Y.filter(e => e.status === `done`);
  let Q = Y.filter(e => e.status === `error`);
  let ne = performance.now();
  let $ = null;
  if (Y.length) {
    if (X.length) {
      let e = X.reduce((acc, item) => acc + item.size, 0);
      let t = X.reduce((acc, item) => acc + item.size * item.progress, 0);
      let n = `Uploading ${X.length} of ${Y.length}`;
      $ = <span className={`ui-dzc__summary`}><span className={`ui-dzc__shimmer`} data-text={n}>{n}</span><span className={`ui-dzc__dot`}>{`·`}</span>{s(t, e)}</span>;
    } else {
      $ = <span className={`ui-dzc__summary ui-dzc__summary-done`}>{Q.length ? <M1Component d={h.alertCircle} solid className={`ui-dzc__warn`} /> : <M1Component d={h.checkCircle} solid className={`ui-dzc__ok`} />}{Q.length ? `${Z.length} of ${Y.length} uploaded` : `${Z.length} ${Z.length === 1 ? `file` : `files`} uploaded`}</span>;
    }
  }
  return <div className={[`ui-dzc`, className].filter(Boolean).join(` `)}><style href={`ui-dropzone-clean`} precedence={`default`}>{te}</style><div className={`ui-dzc__card`}><div ref={ORef} className={`ui-dzc__body`}><div ref={kRef} className={`ui-dzc__inner`}><input ref={DRef} id={id} type={`file`} multiple accept={accept?.join(`,`)} className={`ui-dzc__input`} tabIndex={-1} onChange={e => {
            if (e.target.files) {
              z(e.target.files);
            }
            e.target.value = ``;
          }} /><button type={`button`} className={`ui-dzc__area`} data-dragging={S > 0 || undefined} aria-describedby={`${id}-hint`} onClick={() => DRef.current?.click()} onDragEnter={onDragEnter} onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}><Component /><span key={S ? `drop` : `idle`} className={`ui-dzc__title`}>{S ? `Release to upload ${S === 1 ? `1 file` : `${S} files`}` : <><span className={`ui-dzc__for-mouse`}>{`Drop files here or `}<span className={`ui-dzc__browse`}>{`browse`}</span></span><span className={`ui-dzc__for-touch`}>{`Tap to `}<span className={`ui-dzc__browse`}>{`choose files`}</span></span></>}</span><span className={`ui-dzc__hint`} id={`${id}-hint`}>{F}</span></button><ul className={`ui-dzc__list`} aria-label={`Uploads`}>{b.map(e => {
              let t = e.status === `uploading` ? (1 - e.progress) * (ne - e.startedAt) / Math.max(0.05, e.progress) / 1000 : 0;
              return <li key={e.id} className={`ui-dzc__row`} data-status={e.status} data-removing={e.removing || undefined}><div className={`ui-dzc__row-inner`}><EeComponent name={e.name} /><div className={`ui-dzc__info`}><div className={`ui-dzc__line`}><span className={`ui-dzc__name`} title={e.name}>{e.name}</span>{e.status === `done` && <span className={`ui-dzc__done`} aria-label={`Uploaded`}><M1Component d={h.checkCircle} solid /></span>}</div><div key={e.status} className={`ui-dzc__meta`}>{e.status === `uploading` && <>{s(e.size * e.progress, e.size)}<span className={`ui-dzc__dot`}>{`·`}</span>{e.progress < 0.04 ? `starting` : c(t)}</>}{e.status === `done` && o(e.size)}{e.status === `error` && <span className={`ui-dzc__error`}>{e.error}</span>}</div>{(e.status !== `error` || e.retryable) && <div className={`ui-dzc__bar`} data-hidden={e.status === `done` || undefined} role={`progressbar`} aria-label={`${e.name} upload`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(e.progress * 100)}><span style={{
                        transform: `scaleX(${e.progress})`
                      }} /></div>}</div><div className={`ui-dzc__actions`}>{e.status === `error` && e.retryable && <button type={`button`} className={`ui-dzc__icon-btn ui-dzc__retry`} aria-label={`Retry ${e.name}`} onClick={() => V(e)}><M1Component d={h.retry} /></button>}<button type={`button`} className={`ui-dzc__icon-btn`} aria-label={`Remove ${e.name}`} onClick={() => H(e.id)}><M1Component d={h.close} /></button></div></div></li>;
            })}</ul></div></div><div className={`ui-dzc__foot`}>{$ ?? <span className={`ui-dzc__foot-idle`}>{`No files yet`}</span>}{(Z.length > 0 || Q.length > 0) && !X.length && <button type={`button`} className={`ui-dzc__clear`} onClick={onClick}>{`Clear`}</button>}</div></div><span className={`ui-dzc__live`} aria-live={`polite`}>{w}</span></div>;
}
var te = `.ui-dzc{--ui-dzc-card: #ffffff;--ui-dzc-ink: rgba(0, 0, 0, 0.88);--ui-dzc-strong: #000000;--ui-dzc-text: rgba(0, 0, 0, 0.61);--ui-dzc-muted: rgba(0, 0, 0, 0.45);--ui-dzc-faint: rgba(0, 0, 0, 0.27);--ui-dzc-icon: rgba(0, 0, 0, 0.447);--ui-dzc-line: rgba(0, 0, 0, 0.06);--ui-dzc-dash: rgba(0, 0, 0, 0.12);--ui-dzc-dash-hover: rgba(0, 0, 0, 0.2);--ui-dzc-sheet-line: rgba(0, 0, 0, 0.14);--ui-dzc-track: rgba(0, 0, 0, 0.06);--ui-dzc-wash: rgba(0, 0, 0, 0.03);--ui-dzc-wash-big: rgba(0, 0, 0, 0.015);--ui-dzc-flash: rgba(0, 0, 0, 0.06);--ui-dzc-accent: rgba(0, 96, 226, 0.765);--ui-dzc-accent-soft: rgba(0, 96, 226, 0.035);--ui-dzc-ok: #1a9a52;--ui-dzc-warn: #e8a20c;--ui-dzc-danger: #e5484d;--ui-dzc-shine: rgba(255, 255, 255, 0.82);--ui-dzc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-dzc-focus: rgba(0, 96, 226, 0.35);--ui-dzc-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;container-type: inline-size;display: grid;width: 100%;max-width: 520px;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-dzc-ink);-webkit-font-smoothing: antialiased}.ui-dzc *, .ui-dzc *::before, .ui-dzc *::after{box-sizing: border-box}:where(.ui-dzc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-dzc) svg{display: block;flex: none}.ui-dzc button:focus-visible{outline: 2px solid var(--ui-dzc-focus);outline-offset: 1px}.ui-dzc__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.65;stroke-linecap: round;stroke-linejoin: round}.ui-dzc__glyph[data-solid]{fill: currentColor;stroke: none}.ui-dzc__card{overflow: hidden;border-radius: 10px;background: var(--ui-dzc-card);box-shadow: var(--ui-dzc-shadow)}.ui-dzc__body{overflow: hidden;transition: height 360ms var(--ui-dzc-ease)}.ui-dzc__inner{display: flow-root;padding: 8px 8px 4px}.ui-dzc__input{position: absolute;width: 1px;height: 1px;opacity: 0;pointer-events: none}.ui-dzc__area{position: relative;display: grid;justify-items: center;width: 100%;margin-bottom: 4px;padding: 24px 16px 20px;border: 1px dashed var(--ui-dzc-dash);border-radius: 10px;background: var(--ui-dzc-card);text-align: center;transition: background-color 160ms ease, border-color 160ms ease}.ui-dzc__area:hover{border-color: var(--ui-dzc-dash-hover);background-color: var(--ui-dzc-wash-big)}.ui-dzc__area[data-dragging]{border-color: var(--ui-dzc-accent);background-color: var(--ui-dzc-accent-soft)}.ui-dzc__area:focus-visible{outline-offset: 2px}.ui-dzc__stack{position: relative;width: 64px;height: 44px;margin-bottom: 12px}.ui-dzc__sheet{position: absolute;left: 50%;bottom: 0;width: 30px;height: 36px;margin-left: -15px;border-radius: 6px;background: var(--ui-dzc-card);box-shadow: var(--ui-dzc-shadow);transition: transform 420ms var(--ui-dzc-ease)}.ui-dzc__sheet-l, .ui-dzc__sheet-r{background: none;box-shadow: none;filter: drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.05))}.ui-dzc__sheet .ui-dzc__badge{width: 100%;height: 100%}.ui-dzc__sheet-l{transform: translate(-12px, 2px) rotate(-10deg)}.ui-dzc__sheet-r{transform: translate(12px, 2px) rotate(10deg)}.ui-dzc__sheet-m{display: grid;place-items: center;transform: translateY(-2px)}.ui-dzc__sheet-m .ui-dzc__glyph{color: var(--ui-dzc-icon);transition: color 160ms ease}.ui-dzc__area:hover .ui-dzc__sheet-m{transform: translateY(-4px)}.ui-dzc__area:hover .ui-dzc__sheet-m .ui-dzc__glyph{color: var(--ui-dzc-ink)}.ui-dzc__area[data-dragging] .ui-dzc__sheet-l{transform: translate(-28px, 0) rotate(-16deg)}.ui-dzc__area[data-dragging] .ui-dzc__sheet-r{transform: translate(28px, 0) rotate(16deg)}.ui-dzc__area[data-dragging] .ui-dzc__sheet-m{transform: translateY(-8px) scale(1.05)}.ui-dzc__area[data-dragging] .ui-dzc__sheet-m .ui-dzc__glyph{color: var(--ui-dzc-accent);animation: ui-dzc-bob 900ms ease-in-out infinite}.ui-dzc__badge-sheet{fill: var(--ui-dzc-card);stroke: var(--ui-dzc-sheet-line);stroke-width: 0.9}.ui-dzc__badge-fold{fill: none;stroke: var(--ui-dzc-sheet-line);stroke-width: 0.9;stroke-linejoin: round}.ui-dzc__badge-text{font-family: inherit;font-size: 6.5px;font-weight: 500;letter-spacing: 0.04em}.ui-dzc__title{font-size: 13px;line-height: 20px;font-weight: 500;color: var(--ui-dzc-ink);animation: ui-dzc-in 260ms var(--ui-dzc-ease) both}.ui-dzc__browse{color: var(--ui-dzc-accent)}.ui-dzc__hint{font-size: 12px;line-height: 16px;color: var(--ui-dzc-muted)}.ui-dzc__list{display: grid;margin: 0;padding: 0;list-style: none}.ui-dzc__row{display: grid;grid-template-rows: 1fr;animation: ui-dzc-grow 420ms var(--ui-dzc-ease) both;transition: grid-template-rows 260ms var(--ui-dzc-ease), opacity 200ms ease}.ui-dzc__row[data-removing]{grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 260ms var(--ui-dzc-ease) 200ms, opacity 220ms ease 180ms}.ui-dzc__row-inner{position: relative;isolation: isolate;display: flex;align-items: center;gap: 10px;min-height: 0;overflow: hidden;padding: 8px 0 8px 8px}.ui-dzc__row-inner::before{content: "";position: absolute;inset: 2px 0;border-radius: 6px;background: var(--ui-dzc-flash);opacity: 0;pointer-events: none;z-index: -1}.ui-dzc__row[data-removing] .ui-dzc__row-inner::before{animation: ui-dzc-flash 280ms ease-out both}.ui-dzc__row[data-removing]{pointer-events: none}.ui-dzc__row[data-removing] .ui-dzc__icon-btn{background: none}.ui-dzc__row + .ui-dzc__row .ui-dzc__row-inner{border-top: 0.5px solid var(--ui-dzc-line)}.ui-dzc__file{align-self: flex-start;width: 16px;height: 16px;margin-top: 2px;overflow: visible}.ui-dzc__file-sheet, .ui-dzc__file-fold{fill: none;stroke: var(--ui-dzc-icon);stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-dzc__file-sheet{fill: var(--ui-dzc-card)}.ui-dzc__info{flex: 1;min-width: 0}.ui-dzc__line{display: flex;align-items: center;gap: 6px;min-width: 0}.ui-dzc__name{overflow: hidden;font-size: 13px;line-height: 20px;font-weight: 500;color: var(--ui-dzc-ink);white-space: nowrap;text-overflow: ellipsis}.ui-dzc__done{display: grid;place-items: center;flex: none;color: var(--ui-dzc-ok);animation: ui-dzc-pop 420ms cubic-bezier(0.34, 1.56, 0.64, 1) both}.ui-dzc__done .ui-dzc__glyph{width: 14px;height: 14px}.ui-dzc__meta{font-size: 12px;line-height: 16px;font-variant-numeric: tabular-nums;color: var(--ui-dzc-muted);animation: ui-dzc-in 240ms var(--ui-dzc-ease) both}.ui-dzc__dot{margin: 0 5px;color: var(--ui-dzc-faint)}.ui-dzc__error{color: var(--ui-dzc-danger)}.ui-dzc__row[data-status="error"] .ui-dzc__row-inner{animation: ui-dzc-shake 380ms ease both}.ui-dzc__bar{position: relative;height: 2px;margin-top: 6px;margin-bottom: 2px;overflow: hidden;border-radius: 1px;background: var(--ui-dzc-track);transition: height 320ms var(--ui-dzc-ease) 250ms, margin 320ms var(--ui-dzc-ease) 250ms, opacity 200ms ease 200ms}.ui-dzc__bar[data-hidden]{height: 0;margin-top: 0;margin-bottom: 0;opacity: 0}.ui-dzc__bar > span{position: absolute;inset: 0;border-radius: inherit;background: var(--ui-dzc-accent);transform-origin: left;transition: transform 200ms linear, background-color 200ms ease}.ui-dzc__row[data-status="error"] .ui-dzc__bar > span{background: var(--ui-dzc-danger)}.ui-dzc__actions{display: flex;flex: none;gap: 2px}.ui-dzc__icon-btn{display: grid;place-items: center;width: 28px;height: 28px;border-radius: 6px;color: var(--ui-dzc-icon);transition: background-color 120ms ease, color 120ms ease}.ui-dzc__icon-btn:hover{background: var(--ui-dzc-wash);color: var(--ui-dzc-ink)}.ui-dzc__retry:active .ui-dzc__glyph{transform: rotate(120deg);transition: transform 300ms var(--ui-dzc-ease)}.ui-dzc__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;height: 44px;padding: 0 8px 0 16px;border-top: 0.5px solid var(--ui-dzc-line);font-size: 12px;line-height: 16px;font-variant-numeric: tabular-nums;color: var(--ui-dzc-muted)}.ui-dzc__foot > span{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;animation: ui-dzc-in 240ms var(--ui-dzc-ease) both}.ui-dzc__summary{color: var(--ui-dzc-text)}.ui-dzc__summary .ui-dzc__dot{color: var(--ui-dzc-faint)}.ui-dzc__summary-done{display: inline-flex;align-items: center;gap: 6px;color: var(--ui-dzc-ink)}.ui-dzc__ok{color: var(--ui-dzc-ok)}.ui-dzc__warn{color: var(--ui-dzc-warn)}.ui-dzc__summary-done .ui-dzc__glyph{width: 16px;height: 16px}.ui-dzc__clear{flex: none;height: 28px;padding: 0 10px;border-radius: 6px;background: var(--ui-dzc-card);box-shadow: var(--ui-dzc-shadow);font-size: 13px;line-height: 20px;font-weight: 500;color: var(--ui-dzc-strong);transition: background-color 120ms ease;animation: ui-dzc-in 240ms var(--ui-dzc-ease) both}.ui-dzc__clear:hover{background: #fafafa}.ui-dzc__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-dzc__shimmer{position: relative}.ui-dzc__shimmer::after{content: attr(data-text);content: attr(data-text) / "";position: absolute;inset: 0;white-space: nowrap;color: transparent;background: linear-gradient(90deg, transparent 38%, var(--ui-dzc-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;-webkit-background-clip: text;background-clip: text;animation: ui-dzc-sweep 1.6s linear infinite;pointer-events: none}@keyframes ui-dzc-in{from{opacity: 0;transform: translateY(3px)}to{opacity: 1;transform: none}}@keyframes ui-dzc-grow{from{grid-template-rows: 0fr;opacity: 0}to{grid-template-rows: 1fr;opacity: 1}}@keyframes ui-dzc-pop{0%{transform: scale(0.4)}60%{transform: scale(1.15)}100%{transform: scale(1)}}@keyframes ui-dzc-bob{50%{transform: translateY(-3px)}}@keyframes ui-dzc-flash{0%{opacity: 0}35%{opacity: 1}100%{opacity: 0}}@keyframes ui-dzc-shake{20%, 60%{transform: translateX(-3px)}40%, 80%{transform: translateX(3px)}}@keyframes ui-dzc-sweep{from{background-position: 100% 0}to{background-position: 0% 0}}@container (max-width: 420px){.ui-dzc__area{padding: 20px 12px 16px}.ui-dzc__foot{padding-left: 12px}}.ui-dzc__for-touch{display: none}@media (hover: none) and (pointer: coarse){.ui-dzc__for-mouse{display: none}.ui-dzc__for-touch{display: inline}.ui-dzc__icon-btn{width: 36px;height: 36px}.ui-dzc__foot{height: 52px}.ui-dzc__clear{height: 34px;padding: 0 12px}}@media (prefers-reduced-motion: reduce){.ui-dzc *, .ui-dzc *::before, .ui-dzc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-dzc{--ui-dzc-card: #1c1c1e;--ui-dzc-ink: rgba(255, 255, 255, 0.9);--ui-dzc-strong: #ffffff;--ui-dzc-text: rgba(255, 255, 255, 0.62);--ui-dzc-muted: rgba(255, 255, 255, 0.46);--ui-dzc-faint: rgba(255, 255, 255, 0.3);--ui-dzc-icon: rgba(255, 255, 255, 0.5);--ui-dzc-line: rgba(255, 255, 255, 0.08);--ui-dzc-dash: rgba(255, 255, 255, 0.16);--ui-dzc-dash-hover: rgba(255, 255, 255, 0.26);--ui-dzc-sheet-line: rgba(255, 255, 255, 0.2);--ui-dzc-track: rgba(255, 255, 255, 0.08);--ui-dzc-wash: rgba(255, 255, 255, 0.05);--ui-dzc-wash-big: rgba(255, 255, 255, 0.02);--ui-dzc-flash: rgba(255, 255, 255, 0.08);--ui-dzc-accent: #4d8dff;--ui-dzc-accent-soft: rgba(77, 141, 255, 0.07);--ui-dzc-ok: #3ec27a;--ui-dzc-danger: #ff6369;--ui-dzc-shine: rgba(255, 255, 255, 0.82);--ui-dzc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4);--ui-dzc-focus: rgba(77, 141, 255, 0.5)}:where(.dark, [data-theme="dark"]) .ui-dzc__clear:hover{background: #232326}`;
function BComponent() {
  return <div className={`dropzone-demo`}><Y1Component accept={[`.pdf`, `.png`, `.jpg`, `.xlsx`, `.docx`, `.mp4`]} autoplay /></div>;
}
export { BComponent as default };
