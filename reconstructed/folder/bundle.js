import {
  DComponent
} from "../shared/chunk-LBIXHILN.js";
import "../shared/chunk-M7PUUKPJ.js";
import "../shared/chunk-R74AJ6WF.js";
import "../shared/chunk-4YCQKA3Z.js";
import "../shared/chunk-KCC5TMKD.js";
import "../shared/chunk-YFUYMYMJ.js";
import "../shared/chunk-K2BMRTTD.js";
import "../shared/chunk-IUQR2T6R.js";
import "../shared/chunk-56YB423F.js";
import "../shared/chunk-4F2T52KM.js";
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

// entries/reconstructed-folder.js
init_reconstructed_react();
var import_client = __toESM(require_client());
var root = (0, import_client.createRoot)(document.getElementById("demo"));
var generation = 0;
window.__resetDemo = () => root.render(reconstructed_react_default.createElement(DComponent, { key: ++generation }));
window.__resetDemo();
window.__entryReady = true;
