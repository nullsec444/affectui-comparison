import {
  MComponent,
  r
} from "./chunk-K2BMRTTD.js";
import {
  ZsComponent,
  ec
} from "./chunk-4F2T52KM.js";
import {
  Fragment,
  jsx,
  jsxs,
  n
} from "./chunk-57INBORX.js";

// reconstructed/demo-C1U6NI7B.jsx
var a = n();
function OComponent({
  className,
  ...rest
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { href: `ui-app-shell-flat`, precedence: `default`, children: s }),
    /* @__PURE__ */ jsx(MComponent, { ...rest, className: [`ui-asf`, className].filter(Boolean).join(` `) })
  ] });
}
var s = `.ui-asf.ui-as-app{--frame-gap: 0px}.ui-asf.ui-as-app > *{--frame-gap: 0px}.ui-asf.ui-as-app > .ui-as-main{margin: 0;border: 0;border-left: 1px solid var(--line);border-radius: 0;background: var(--panel);transition: border-color 260ms ease}.ui-asf.ui-as-app[data-collapsed] > .ui-as-main{margin-left: 0;border-left-color: transparent}.ui-asf.ui-as-app > .ui-as-side{padding: 10px 10px 10px 10px}.ui-asf.ui-as-app > .ui-as-side-open{top: 10px;left: 12px}@container ui-as (max-width: 900px){.ui-asf.ui-as-app > .ui-as-main{margin: 0;border-left: 0}.ui-asf.ui-as-app > .ui-as-side{border-radius: 0;box-shadow: 1px 0 0 var(--line), 0 24px 48px -12px rgba(0, 0, 0, 0.22)}.ui-asf.ui-as-app > .ui-as-side-open{left: 12px}}@container ui-as (max-width: 600px){.ui-asf.ui-as-app > .ui-as-main{border-radius: 0}}`;
function CComponent() {
  return /* @__PURE__ */ jsx(ZsComponent, { children: /* @__PURE__ */ jsx(OComponent, { active: `New chat`, onNavigate: ec, children: /* @__PURE__ */ jsxs("div", { className: `ui-as-page`, children: [
    /* @__PURE__ */ jsx("h1", { className: `ui-as-page-title`, children: `Overview` }),
    /* @__PURE__ */ jsx("p", { className: `ui-as-page-sub`, children: `Everything in your workspace at a glance.` }),
    /* @__PURE__ */ jsx("div", { style: {
      marginTop: 28
    }, children: /* @__PURE__ */ jsx(r, { tall: true, title: `Your page goes here`, text: `The flat shell brings the sidebar and the scroll container \u2013 put any screen inside.` }) })
  ] }) }) });
}

export {
  CComponent
};
