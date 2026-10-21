import {
  D
} from "../shared/chunk-KZBGDCDU.js";
import "../shared/chunk-LEBCP6EI.js";
import "../shared/chunk-5ZTBOI6C.js";
import "../shared/chunk-DLY72IU6.js";
import "../shared/chunk-QGASEFVU.js";
import "../shared/chunk-CT2IJ575.js";
import "../shared/chunk-UOO4RA3A.js";
import "../shared/chunk-WFGXI776.js";
import "../shared/chunk-BGGGYJPT.js";
import "../shared/chunk-OLSFNPAI.js";
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

// entries/original-folder.js
init_original_react();
var import_client = __toESM(require_client());
var root = (0, import_client.createRoot)(document.getElementById("demo"));
var generation = 0;
window.__resetDemo = () => root.render(original_react_default.createElement(D, { key: ++generation }));
window.__resetDemo();
window.__entryReady = true;
