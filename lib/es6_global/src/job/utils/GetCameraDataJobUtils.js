// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as PMatrixService$Wonderjs from "../../service/primitive/PMatrixService.js";
import * as VMatrixService$Wonderjs from "../../service/primitive/VMatrixService.js";
import * as CameraSceneMainService$Wonderjs from "../../service/state/main/scene/CameraSceneMainService.js";
import * as RecordTransformMainService$Wonderjs from "../../service/state/main/transform/RecordTransformMainService.js";
import * as UpdateTransformMainService$Wonderjs from "../../service/state/main/transform/UpdateTransformMainService.js";
import * as GetComponentGameObjectService$Wonderjs from "../../service/record/main/gameObject/GetComponentGameObjectService.js";

function getCameraData(state) {
  var gameObjectRecord = state[/* gameObjectRecord */10];
  var basicCameraViewRecord = state[/* basicCameraViewRecord */13];
  var perspectiveCameraProjectionRecord = state[/* perspectiveCameraProjectionRecord */14];
  var globalTempRecord = state[/* globalTempRecord */34];
  var match = CameraSceneMainService$Wonderjs.getCurrentCameraGameObject(basicCameraViewRecord, state[/* sceneRecord */12]);
  if (match) {
    var currentCameraGameObject = match[0];
    var transformRecord = RecordTransformMainService$Wonderjs.getRecord(state);
    var transform = GetComponentGameObjectService$Wonderjs.unsafeGetTransformComponent(currentCameraGameObject, gameObjectRecord);
    return /* Some */[/* record */[
              /* vMatrix */VMatrixService$Wonderjs.getWorldToCameraMatrix(UpdateTransformMainService$Wonderjs.updateAndGetLocalToWorldMatrixTypeArray(transform, globalTempRecord, transformRecord)),
              /* pMatrix */PMatrixService$Wonderjs.unsafeGetPMatrix(GetComponentGameObjectService$Wonderjs.unsafeGetPerspectiveCameraProjectionComponent(currentCameraGameObject, gameObjectRecord), perspectiveCameraProjectionRecord[/* pMatrixMap */2]),
              /* position */UpdateTransformMainService$Wonderjs.updateAndGetPositionTuple(transform, globalTempRecord, transformRecord)
            ]];
  } else {
    return /* None */0;
  }
}

export {
  getCameraData ,
  
}
/* PMatrixService-Wonderjs Not a pure module */
