// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as GameObjectAPI$Wonderjs from "../../../../../src/api/GameObjectAPI.js";
import * as BoxGeometryTool$Wonderjs from "../../../../tool/service/geometry/BoxGeometryTool.js";
import * as CustomGeometryTool$Wonderjs from "../../../../tool/service/geometry/CustomGeometryTool.js";
import * as ArrayService$WonderCommonlib from "../../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/ArrayService.js";

var getFlattenClonedGameObjectArr = ArrayService$WonderCommonlib.flatten;

var cloneGameObject = GameObjectAPI$Wonderjs.cloneGameObject;

function cloneWithBoxGeometry(state, gameObject1, geometry1, count) {
  var match = cloneGameObject(gameObject1, count, false, state);
  var clonedGameObjectArr = match[1];
  var state$1 = match[0];
  return /* tuple */[
          state$1,
          gameObject1,
          geometry1,
          ArrayService$WonderCommonlib.flatten(clonedGameObjectArr),
          ArrayService$WonderCommonlib.flatten(clonedGameObjectArr).map((function (clonedGameObject) {
                  return BoxGeometryTool$Wonderjs.unsafeGetBoxGeometryComponent(clonedGameObject, state$1);
                }))
        ];
}

function cloneWithCustomGeometry(state, gameObject1, geometry1, count) {
  var match = cloneGameObject(gameObject1, count, false, state);
  var clonedGameObjectArr = match[1];
  var state$1 = match[0];
  return /* tuple */[
          state$1,
          gameObject1,
          geometry1,
          ArrayService$WonderCommonlib.flatten(clonedGameObjectArr),
          ArrayService$WonderCommonlib.flatten(clonedGameObjectArr).map((function (clonedGameObject) {
                  return CustomGeometryTool$Wonderjs.unsafeGetCustomGeometryComponent(clonedGameObject, state$1);
                }))
        ];
}

function cloneWithBasicMaterial(state, gameObject1, material1, count, isShareMaterial) {
  var match = cloneGameObject(gameObject1, count, isShareMaterial, state);
  var clonedGameObjectArr = match[1];
  var state$1 = match[0];
  return /* tuple */[
          state$1,
          gameObject1,
          material1,
          ArrayService$WonderCommonlib.flatten(clonedGameObjectArr),
          ArrayService$WonderCommonlib.flatten(clonedGameObjectArr).map((function (clonedGameObject) {
                  return GameObjectAPI$Wonderjs.unsafeGetGameObjectBasicMaterialComponent(clonedGameObject, state$1);
                }))
        ];
}

export {
  getFlattenClonedGameObjectArr ,
  cloneGameObject ,
  cloneWithBoxGeometry ,
  cloneWithCustomGeometry ,
  cloneWithBasicMaterial ,
  
}
/* GameObjectAPI-Wonderjs Not a pure module */
