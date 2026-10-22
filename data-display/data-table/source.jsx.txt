// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
import { a as N, i as R, n as I, r as A, t as O } from "./component-BpWpTuwn.jsx";
const s = t_1();
const c = t();
const LComponent = () => <svg viewBox={`0 0 38 57`} aria-hidden={`true`}><path d={`M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z`} fill={`#1ABCFE`} /><path d={`M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z`} fill={`#0ACF83`} /><path d={`M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z`} fill={`#FF7262`} /><path d={`M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z`} fill={`#F24E1E`} /><path d={`M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z`} fill={`#A259FF`} /></svg>;
const UComponent = () => <svg viewBox={`0 0 24 24`} fill={`#5E6AD2`} aria-hidden={`true`}><path d={`M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z`} /></svg>;
const DComponent = () => <svg viewBox={`0 0 24 24`} fill={`#171717`} className={`data-table-demo__mono`} aria-hidden={`true`}><path d={`M24 22.525H0l12-21.05 12 21.05z`} /></svg>;
const FComponent = () => <svg viewBox={`0 0 24 24`} fill={`#171717`} className={`data-table-demo__mono`} aria-hidden={`true`}><path d={`M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z`} /></svg>;
const PComponent = () => <svg viewBox={`0 0 24 24`} fill={`#625DF5`} aria-hidden={`true`}><path d={`M24 10.665h-7.018l6.078-3.509-1.335-2.312-6.078 3.509 3.508-6.077L16.843.94l-3.508 6.077V0h-2.67v7.018L7.156.94 4.844 2.275l3.509 6.077-6.078-3.508L.94 7.156l6.078 3.509H0v2.67h7.017L.94 16.844l1.335 2.313 6.077-3.508-3.509 6.077 2.312 1.335 3.509-6.078V24h2.67v-7.017l3.508 6.077 2.312-1.335-3.509-6.078 6.078 3.509 1.335-2.313-6.077-3.508h7.017v-2.67H24zm-12 4.966a3.645 3.645 0 1 1 0-7.29 3.645 3.645 0 0 1 0 7.29z`} /></svg>;
const MComponent = () => <svg viewBox={`0 0 20 20`} aria-hidden={`true`}><rect x={`2`} y={`2`} width={`16`} height={`16`} rx={`4.5`} fill={`#2f6bff`} /><path d={`M6 7.5h8M6 10h8M6 12.5h5`} stroke={`#fff`} strokeWidth={`1.4`} strokeLinecap={`round`} /></svg>;
const columns = [{
  key: `tool`,
  label: `Tool`,
  icon: <N />,
  type: `title`,
  width: `30%`
}, {
  key: `category`,
  label: `Category`,
  icon: <R />,
  type: `tag`,
  width: `26%`
}, {
  key: `website`,
  label: `Website`,
  icon: <A />,
  type: `link`
}, {
  key: `renews`,
  label: `Renews`,
  icon: <I />,
  type: `text`,
  width: `18%`
}];
const rows = [{
  id: `figma`,
  tool: `Figma`,
  logo: <LComponent />,
  category: `Design`,
  website: `https://figma.com`,
  renews: `Mar 12, 2026`
}, {
  id: `linear`,
  tool: `Linear`,
  logo: <UComponent />,
  category: `Issue tracking`,
  website: `https://linear.app`,
  renews: `Jan 4, 2026`
}, {
  id: `vercel`,
  tool: `Vercel`,
  logo: <DComponent />,
  category: `Hosting`,
  website: `https://vercel.com`,
  renews: `Aug 21, 2026`
}, {
  id: `framer`,
  tool: `Framer`,
  logo: <FComponent />,
  category: `Website`,
  website: `https://framer.com`,
  renews: `May 2, 2026`
}, {
  id: `loom`,
  tool: `Loom`,
  logo: <PComponent />,
  category: `Video`,
  website: `https://loom.com`,
  renews: `Nov 18, 2026`
}];
const _ = {
  width: 720,
  height: 352
};
function VComponent() {
  let eRef = s.useRef(null);
  let [t, setT] = s.useState(null);
  s.useLayoutEffect(() => {
    let t = eRef.current?.closest(`.card__preview`);
    if (!t) {
      return;
    }
    let r = () => setT(Math.min((t.clientWidth - 48) / _.width, (t.clientHeight - 80) / _.height));
    r();
    let i = new ResizeObserver(r);
    i.observe(t);
    return () => i.disconnect();
  }, []);
  return <div ref={eRef} className={`data-table-demo`} style={t === null ? undefined : {
    "--fit": t
  }}><O title={`Design Stack`} icon=<MComponent /> columns={columns} rows={rows} tagTones={{
      Design: `violet`,
      "Issue tracking": `blue`,
      Hosting: `gray`,
      Website: `pink`,
      Video: `green`
    }} /></div>;
}
export { VComponent as default };
