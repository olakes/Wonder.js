// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as Curry from "../../../../../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as DeviceManagerService$Wonderjs from "../../../../../service/record/all/device/DeviceManagerService.js";
import * as JudgeInstanceRenderWorkerService$Wonderjs from "../../../../../service/state/render_worker/instance/JudgeInstanceRenderWorkerService.js";

function initMaterials(param, isSourceInstanceMap, state) {
  Curry._3(param[1], DeviceManagerService$Wonderjs.unsafeGetGl(state[/* deviceManagerRecord */4]), /* tuple */[
        isSourceInstanceMap,
        JudgeInstanceRenderWorkerService$Wonderjs.isSupportInstance(state)
      ], Curry._1(param[0], state));
  return state;
}

export {
  initMaterials ,
  
}
/* DeviceManagerService-Wonderjs Not a pure module */
