// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as Caml_array from "../../../../../../../node_modules/bs-platform/lib/es6/caml_array.js";

function restore(_, param, targetState) {
  var newrecord = Caml_array.caml_array_dup(targetState);
  var init = targetState[/* deviceManagerRecord */9];
  newrecord[/* deviceManagerRecord */9] = /* record */[
    /* gl : Some */[param[/* gl */0]],
    /* colorWrite */init[/* colorWrite */1],
    /* clearColor */init[/* clearColor */2],
    /* side */init[/* side */3],
    /* depthTest */init[/* depthTest */4],
    /* viewport */init[/* viewport */5]
  ];
  return newrecord;
}

export {
  restore ,
  
}
/* No side effect */
