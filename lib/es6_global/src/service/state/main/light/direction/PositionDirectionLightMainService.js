// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as PositionLightMainService$Wonderjs from "../PositionLightMainService.js";
import * as GameObjectDirectionLightService$Wonderjs from "../../../../record/main/light/direction/GameObjectDirectionLightService.js";

function getPosition(index, state) {
  return PositionLightMainService$Wonderjs.getPosition(GameObjectDirectionLightService$Wonderjs.unsafeGetGameObject(index, state[/* directionLightRecord */20]), state);
}

export {
  getPosition ,
  
}
/* PositionLightMainService-Wonderjs Not a pure module */
