// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as MostUtils$Wonderjs from "../../../../asset/utils/MostUtils.js";
import * as MessageService$Wonderjs from "../../../../service/primitive/worker/MessageService.js";
import * as BufferPointLightService$Wonderjs from "../../../../service/record/main/light/point/BufferPointLightService.js";
import * as StateRenderWorkerService$Wonderjs from "../../../../service/state/render_worker/state/StateRenderWorkerService.js";
import * as CreateTypeArrayPointLightService$Wonderjs from "../../../../service/record/all/light/point/CreateTypeArrayPointLightService.js";

function _createTypeArrays(buffer, count, index, state) {
  var match = CreateTypeArrayPointLightService$Wonderjs.createTypeArrays(buffer, count);
  state[/* pointLightRecord */20] = /* Some */[/* record */[
      /* index */index,
      /* positionMap : None */0,
      /* colors */match[0],
      /* intensities */match[1],
      /* constants */match[2],
      /* linears */match[3],
      /* quadratics */match[4],
      /* ranges */match[5]
    ]];
  return state;
}

function execJob(_, e, stateData) {
  return MostUtils$Wonderjs.callFunc((function () {
                var state = StateRenderWorkerService$Wonderjs.unsafeGetState(stateData);
                var data = MessageService$Wonderjs.getRecord(e);
                var pointLightData = data.pointLightData;
                var buffer = pointLightData.buffer;
                var count = BufferPointLightService$Wonderjs.getBufferMaxCount(/* () */0);
                StateRenderWorkerService$Wonderjs.setState(stateData, _createTypeArrays(buffer, count, pointLightData.index, state));
                return e;
              }));
}

export {
  _createTypeArrays ,
  execJob ,
  
}
/* MostUtils-Wonderjs Not a pure module */
