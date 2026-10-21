import {
  UComponent
} from "../shared/chunk-XJL5QB6V.js";
import "../shared/chunk-E34NVF32.js";
import "../shared/chunk-L6Z5PQ6Z.js";
import "../shared/chunk-OEDU4EJN.js";
import "../shared/chunk-NVSAAHAD.js";
import "../shared/chunk-WBBG6LAF.js";
import "../shared/chunk-3IXSZRHU.js";
import "../shared/chunk-NYYPAMUN.js";
import "../shared/chunk-YFUYMYMJ.js";
import "../shared/chunk-F6LTE6TM.js";
import "../shared/chunk-SELQJULJ.js";
import "../shared/chunk-ZQIVGAZD.js";
import "../shared/chunk-IUQR2T6R.js";
import "../shared/chunk-56YB423F.js";
import "../shared/chunk-ZLQW4DBR.js";
import {
  init_reconstructed_react,
  reconstructed_react_default,
  require_client
} from "../shared/chunk-5TRWDZSI.js";
import "../shared/chunk-BEJH6NDY.js";
import "../shared/chunk-57INBORX.js";
import "../shared/chunk-JTXQSSYA.js";
import {
  __toESM
} from "../shared/chunk-CTH3ASD6.js";

// entries/reconstructed-evals.js
init_reconstructed_react();
var import_client = __toESM(require_client());
var root = (0, import_client.createRoot)(document.getElementById("demo"));
var generation = 0;
window.__resetDemo = () => root.render(reconstructed_react_default.createElement(UComponent, { key: ++generation }));
window.__resetDemo();
window.__entryReady = true;
