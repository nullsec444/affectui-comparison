// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
import { t as N } from "./component-jpqc9dJC.jsx";
const r = t_1();
const i = t();
const phases = [`Thinking`, `Searching the web`, `Reading 12 sources`, `Comparing pricing`, `Writing response`];
const interval = 2000;
const s = 2600;
function CComponent() {
  let [e, setE] = r.useState(0);
  let [done, setDone] = r.useState(false);
  r.useEffect(() => {
    let e = window.setTimeout(() => setDone(true), phases.length * interval);
    let n = window.setTimeout(() => {
      setDone(false);
      setE(e => e + 1);
    }, phases.length * interval + s);
    return () => {
      window.clearTimeout(e);
      window.clearTimeout(n);
    };
  }, [e]);
  return <div className={`tl-demo`}><div className={`tl-demo__chat`}><p className={`tl-demo__you`}>{`Which CRM fits a 10-person sales team best?`}</p><N key={e} phases={phases} interval={interval} done={done} /></div></div>;
}
export { CComponent as default };
