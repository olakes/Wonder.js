// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as Caml_array from "../../../../../../node_modules/bs-platform/lib/es6/caml_array.js";
import * as InitStateJobUtils$Wonderjs from "../../utils/InitStateJobUtils.js";

function execJob(_, state) {
  var newrecord = Caml_array.caml_array_dup(state);
  newrecord[/* deviceManagerRecord */9] = InitStateJobUtils$Wonderjs.execJob(state[/* deviceManagerRecord */9]);
  return newrecord;
}

export {
  execJob ,
  
}
/* InitStateJobUtils-Wonderjs Not a pure module */
