// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
import { i as i_1, r as R } from "./index-C4AVl5zi.jsx";
const i = t_1();
const a = t();
const o = (e, t = false) => new Promise((resolve, reject) => window.setTimeout(() => {
  if (t) {
    return reject(Error(`Timeout`));
  }
  return resolve();
}, e));
const SComponent = ({
  d
}) => <svg viewBox={`0 0 24 24`} aria-hidden={`true`}><path d={d} /></svg>;
const c = {
  save: `M6 4h9.5L20 8.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8 4v4.5h7V4M8 20v-6h8v6`,
  trash: `M4.5 7h15M10 11v5.5M14 11v5.5M6 7l.8 11.2A2 2 0 0 0 8.8 20h6.4a2 2 0 0 0 2-1.8L18 7M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2`,
  upload: `M12 15V4M7.5 8.5 12 4l4.5 4.5M5 15v3.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V15`,
  sync: `M19.5 12a7.5 7.5 0 0 1-13.3 4.8M4.5 12a7.5 7.5 0 0 1 13.3-4.8M18 3.5v4h-4M6 20.5v-4h4`,
  doc: `M7 3.5h7l4.5 4.5v11a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5zM14 3.5V8h4.5M8.5 12.5h7M8.5 16h5`
};
function LComponent() {
  let e = i.useId();
  let tRef = i.useRef(new Set());
  let l = (t = {}) => ({
    toaster: e,
    ...t
  });
  let u = e => tRef.current.add(e);
  let d = e => u(i_1.success(`Draft saved`, l({
    description: `Q3 Board Report · all changes kept`,
    ...e
  })));
  let FComponent = e => u(i_1(`File moved to trash`, {
    ...l(e),
    description: `Budget-2027.xlsx`,
    icon: <SComponent d={c.trash} />,
    action: {
      label: `Undo`,
      onClick: () => u(i_1.success(`File restored`, l({
        description: `Budget-2027.xlsx is back in Reports`
      })))
    }
  }));
  let p = t => {
    let r = `${e}-upload-${Date.now()}`;
    u(r);
    i_1.promise(o(2400), {
      loading: {
        title: `Uploading report…`,
        description: `Q3-Board-Report.pdf · 4.2\xA0MB`
      },
      success: {
        title: `Report uploaded`,
        description: `Shared with 4 people in Finance`
      },
      error: `Upload failed`
    }, {
      ...l(t),
      id: r
    });
  };
  i.useEffect(() => {
    let e = [window.setTimeout(() => d({
      duration: 9000
    }), 500), window.setTimeout(() => FComponent({
      duration: 9000
    }), 1300), window.setTimeout(() => p({
      duration: 9000
    }), 2100)];
    let tRef_current = tRef.current;
    return () => {
      e.forEach(clearTimeout);
      tRef_current.forEach(e => i_1.dismiss(e));
      tRef_current.clear();
    };
  }, []);
  return <div className={`toaster-demo`}><div className={`toaster-demo__col`}><div className={`toaster-demo__panel`}><div className={`toaster-demo__card`}><div className={`toaster-demo__head`}><span className={`toaster-demo__doc`}><SComponent d={c.doc} /></span><div className={`toaster-demo__meta`}><span className={`toaster-demo__name`}>{`Q3 Board Report`}</span><span className={`toaster-demo__sub`}>{`Finance · edited 2 min ago`}</span></div></div><div className={`toaster-demo__grid`}><button type={`button`} className={`toaster-demo__btn`} onClick={() => d()}><SComponent d={c.save} />{`Save draft`}</button><button type={`button`} className={`toaster-demo__btn`} onClick={() => FComponent()}><SComponent d={c.trash} />{`Delete file`}</button><button type={`button`} className={`toaster-demo__btn`} onClick={() => p()}><SComponent d={c.upload} />{`Upload report`}</button><button type={`button`} className={`toaster-demo__btn`} onClick={() => {
              let t = `${e}-sync-${Date.now()}`;
              u(t);
              i_1.promise(o(2200, true), {
                loading: `Syncing with Google Drive…`,
                success: `Synced`,
                error: {
                  title: `Couldn't sync`,
                  description: `Google Drive didn't respond. Try again in a minute.`
                }
              }, l({
                id: t
              }));
            }}><SComponent d={c.sync} />{`Sync`}</button></div></div><p className={`toaster-demo__foot`}>{`Press `}<kbd>{`F8`}</kbd>{` to jump to notifications`}</p></div><div className={`toaster-demo__slot`}><R id={e} inline position={`top-center`} /></div></div></div>;
}
export { LComponent as default };
