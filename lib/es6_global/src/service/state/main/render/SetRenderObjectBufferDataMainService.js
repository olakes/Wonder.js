// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as TypeArrayService$Wonderjs from "../../../primitive/buffer/TypeArrayService.js";
import * as ArrayService$WonderCommonlib from "../../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/ArrayService.js";
import * as GetComponentGameObjectService$Wonderjs from "../../../record/main/gameObject/GetComponentGameObjectService.js";
import * as RenderObjectBufferTypeArrayService$Wonderjs from "../../../record/main/render/RenderObjectBufferTypeArrayService.js";

function setData(renderArray, unsafeGetMaterialComponentFunc, renderObjectRecord, state) {
  var gameObjectRecord = state[/* gameObjectRecord */10];
  var count = renderArray.length;
  var match = ArrayService$WonderCommonlib.reduceOneParami((function (param, uid, index) {
          var sourceInstanceIndices = param[3];
          var materialIndex = unsafeGetMaterialComponentFunc(uid, gameObjectRecord);
          var match = GetComponentGameObjectService$Wonderjs.unsafeGetGeometryComponentData(uid, gameObjectRecord);
          var match$1 = GetComponentGameObjectService$Wonderjs.getSourceInstanceComponent(uid, gameObjectRecord);
          return /* tuple */[
                  RenderObjectBufferTypeArrayService$Wonderjs.setComponent(index, GetComponentGameObjectService$Wonderjs.unsafeGetTransformComponent(uid, gameObjectRecord), param[0]),
                  RenderObjectBufferTypeArrayService$Wonderjs.setComponent(index, materialIndex, param[1]),
                  RenderObjectBufferTypeArrayService$Wonderjs.setComponent(index, match[0], param[2]),
                  match$1 ? RenderObjectBufferTypeArrayService$Wonderjs.setComponent(index, match$1[0], sourceInstanceIndices) : sourceInstanceIndices,
                  TypeArrayService$Wonderjs.setUint8_1(index, match[1], param[4])
                ];
        }), /* tuple */[
        renderObjectRecord[/* transformIndices */2],
        renderObjectRecord[/* materialIndices */3],
        renderObjectRecord[/* geometryIndices */4],
        renderObjectRecord[/* sourceInstanceIndices */6],
        renderObjectRecord[/* geometryTypes */5]
      ], renderArray);
  return /* Some */[/* record */[
            /* buffer */renderObjectRecord[/* buffer */0],
            /* count */count,
            /* transformIndices */match[0],
            /* materialIndices */match[1],
            /* geometryIndices */match[2],
            /* geometryTypes */match[4],
            /* sourceInstanceIndices */match[3]
          ]];
}

export {
  setData ,
  
}
/* TypeArrayService-Wonderjs Not a pure module */
