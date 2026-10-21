import {
  t as t2
} from "./chunk-MNCMELC5.js";
import {
  J1Component,
  M,
  t
} from "./chunk-JMTRCM7A.js";
import "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n
} from "./chunk-57INBORX.js";
import "./chunk-JTXQSSYA.js";
import "./chunk-CTH3ASD6.js";

// reconstructed/DocsPage-Dn22oIr8.jsx
var a = n();
function DocsPage({
  page
}) {
  let {
    Content
  } = page;
  return /* @__PURE__ */ jsx("div", { className: `doc`, children: /* @__PURE__ */ jsxs("article", { className: `doc__article`, children: [
    /* @__PURE__ */ jsxs("nav", { className: `breadcrumb`, "aria-label": `Breadcrumb`, children: [
      /* @__PURE__ */ jsx(M, { to: `/docs`, children: `Docs` }),
      /* @__PURE__ */ jsx(J1Component, { icon: t2, size: 13 }),
      /* @__PURE__ */ jsx("span", { "aria-current": `page`, children: page.title })
    ] }),
    /* @__PURE__ */ jsx("header", { className: `doc__header`, children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: `doc__title`, children: page.title }),
      /* @__PURE__ */ jsx("p", { className: `doc__lead`, children: page.description })
    ] }) }),
    /* @__PURE__ */ jsx(Content, {}),
    /* @__PURE__ */ jsx("footer", { className: `doc__footer`, children: /* @__PURE__ */ jsxs("span", { children: [
      t.name,
      ` \xB7 Docs`
    ] }) })
  ] }) });
}
export {
  DocsPage
};
