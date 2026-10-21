// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
import { l as T, u as onNavigate } from "./index-C4AVl5zi.jsx";
import { r as R, t as I } from "./component-qs8CseUl.jsx";
const a = t();
function OComponent({
  className,
  ...rest
}) {
  return <><style href={`ui-app-shell-flat`} precedence={`default`}>{s}</style><I {...rest} className={[`ui-asf`, className].filter(Boolean).join(` `)} /></>;
}
var s = `.ui-asf.ui-as-app{--frame-gap: 0px}.ui-asf.ui-as-app > *{--frame-gap: 0px}.ui-asf.ui-as-app > .ui-as-main{margin: 0;border: 0;border-left: 1px solid var(--line);border-radius: 0;background: var(--panel);transition: border-color 260ms ease}.ui-asf.ui-as-app[data-collapsed] > .ui-as-main{margin-left: 0;border-left-color: transparent}.ui-asf.ui-as-app > .ui-as-side{padding: 10px 10px 10px 10px}.ui-asf.ui-as-app > .ui-as-side-open{top: 10px;left: 12px}@container ui-as (max-width: 900px){.ui-asf.ui-as-app > .ui-as-main{margin: 0;border-left: 0}.ui-asf.ui-as-app > .ui-as-side{border-radius: 0;box-shadow: 1px 0 0 var(--line), 0 24px 48px -12px rgba(0, 0, 0, 0.22)}.ui-asf.ui-as-app > .ui-as-side-open{left: 12px}}@container ui-as (max-width: 600px){.ui-asf.ui-as-app > .ui-as-main{border-radius: 0}}`;
function CComponent() {
  return <T><OComponent active={`New chat`} onNavigate={onNavigate}><div className={`ui-as-page`}><h1 className={`ui-as-page-title`}>{`Overview`}</h1><p className={`ui-as-page-sub`}>{`Everything in your workspace at a glance.`}</p><div style={{
          marginTop: 28
        }}><R tall title={`Your page goes here`} text={`The flat shell brings the sidebar and the scroll container – put any screen inside.`} /></div></div></OComponent></T>;
}
export { CComponent as default };
