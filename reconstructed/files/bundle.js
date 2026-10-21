import {
  KComponent
} from "../shared/chunk-TMWAUHTQ.js";
import "../shared/chunk-M7PUUKPJ.js";
import "../shared/chunk-YFUYMYMJ.js";
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

// entries/reconstructed-files.js
init_reconstructed_react();
var import_client = __toESM(require_client());
var root = (0, import_client.createRoot)(document.getElementById("demo"));
var generation = 0;
window.__resetDemo = () => root.render(reconstructed_react_default.createElement(KComponent, { key: ++generation }));
window.__resetDemo();
window.__entryReady = true;
