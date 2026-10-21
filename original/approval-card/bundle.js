import {
  o
} from "../shared/chunk-IC2GR7F6.js";
import "../shared/chunk-ZAMYQ4EA.js";
import {
  init_original_react,
  original_react_default,
  require_client
} from "../shared/chunk-TISG53JG.js";
import "../shared/chunk-C7RUFYJH.js";
import "../shared/chunk-Y3JEZZ7A.js";
import "../shared/chunk-IV3FP5QI.js";
import {
  __toESM
} from "../shared/chunk-CTH3ASD6.js";

// entries/original-approval-card.js
init_original_react();
var import_client = __toESM(require_client());
var root = (0, import_client.createRoot)(document.getElementById("demo"));
var generation = 0;
window.__resetDemo = () => root.render(original_react_default.createElement(o, { key: ++generation }));
window.__resetDemo();
window.__entryReady = true;
