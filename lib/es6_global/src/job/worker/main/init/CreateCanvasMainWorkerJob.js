// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as MostUtils$Wonderjs from "../../../../asset/utils/MostUtils.js";
import * as ViewService$Wonderjs from "../../../../service/record/main/device/ViewService.js";
import * as CreateCanvasService$Wonderjs from "../../../../service/primitive/canvas/CreateCanvasService.js";
import * as StateDataMainService$Wonderjs from "../../../../service/state/main/state/StateDataMainService.js";
import * as OperateSettingService$Wonderjs from "../../../../service/record/main/setting/OperateSettingService.js";

function execJob(_, stateData) {
  return MostUtils$Wonderjs.callFunc((function () {
                var state = StateDataMainService$Wonderjs.unsafeGetState(stateData);
                state[/* viewRecord */8] = ViewService$Wonderjs.setCanvas(CreateCanvasService$Wonderjs.createCanvas(OperateSettingService$Wonderjs.getCanvasId(state[/* settingRecord */0])), state[/* viewRecord */8]);
                StateDataMainService$Wonderjs.setState(stateData, state);
                return /* None */0;
              }));
}

export {
  execJob ,
  
}
/* MostUtils-Wonderjs Not a pure module */
