import {
  GComponent
} from "../shared/chunk-OIHQETK2.js";
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

// entries/reconstructed-experiment-card.js
init_reconstructed_react();
var import_client = __toESM(require_client());
var root = (0, import_client.createRoot)(document.getElementById("demo"));
var generation = 0;
window.__resetDemo = () => root.render(reconstructed_react_default.createElement(GComponent, { key: ++generation }));
window.__resetDemo();
window.__entryReady = true;
