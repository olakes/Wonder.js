// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as ArrayService$WonderCommonlib from "../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/ArrayService.js";
import * as SparseMapService$WonderCommonlib from "../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/SparseMapService.js";

function buildMapFromArray(array, map) {
  ArrayService$WonderCommonlib.forEach((function (value) {
          SparseMapService$WonderCommonlib.set(value, true, map);
          return /* () */0;
        }), array);
  return map;
}

export {
  buildMapFromArray ,
  
}
/* ArrayService-WonderCommonlib Not a pure module */
