// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as OptionService$Wonderjs from "../../../atom/OptionService.js";

function unsafeGetState(stateData) {
  return OptionService$Wonderjs.unsafeGet(stateData[/* state */0]);
}

function setState(stateData, state) {
  stateData[/* state */0] = /* Some */[state];
  return state;
}

export {
  unsafeGetState ,
  setState ,
  
}
/* OptionService-Wonderjs Not a pure module */
