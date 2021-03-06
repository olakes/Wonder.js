// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as Caml_array from "../../../../../../../node_modules/bs-platform/lib/es6/caml_array.js";
import * as Caml_int32 from "../../../../../../../node_modules/bs-platform/lib/es6/caml_int32.js";
import * as DrawGLSLService$Wonderjs from "../../../../service/record/render/sender/DrawGLSLService.js";
import * as GPUDetectService$Wonderjs from "../../../../service/record/all/gpu/GPUDetectService.js";
import * as TypeArrayService$Wonderjs from "../../../../service/primitive/buffer/TypeArrayService.js";
import * as ArrayService$WonderCommonlib from "../../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/ArrayService.js";
import * as SendGLSLDataService$Wonderjs from "../../../../service/record/render/sender/SendGLSLDataService.js";
import * as RenderGeometryService$Wonderjs from "../../../../service/record/main/geometry/RenderGeometryService.js";
import * as InstanceBufferRenderService$Wonderjs from "../../../../service/state/render/vboBuffer/InstanceBufferRenderService.js";
import * as GetTransformDataRenderService$Wonderjs from "../../../../service/state/render/transform/GetTransformDataRenderService.js";
import * as ObjectInstanceCollectionService$Wonderjs from "../../../../service/primitive/instance/ObjectInstanceCollectionService.js";
import * as HandleAttributeConfigDataService$Wonderjs from "../../../../service/record/render/sender/attribute/HandleAttributeConfigDataService.js";
import * as StaticRenderSourceInstanceService$Wonderjs from "../../../../service/record/render/instance/sourceInstance/StaticRenderSourceInstanceService.js";
import * as CurrentComponentDataMapRenderService$Wonderjs from "../../../../service/state/render/gameObject/CurrentComponentDataMapRenderService.js";
import * as MarkIsSendTransformMatrixDataService$Wonderjs from "../../../../service/primitive/instance/MarkIsSendTransformMatrixDataService.js";
import * as BuildObjectInstanceTransformDataTupleUtils$Wonderjs from "./BuildObjectInstanceTransformDataTupleUtils.js";

function _fillObjectInstanceData(objectInstanceTransformDataTuple, matricesArrayForInstance, fillMatrixTypeArrFunc, stateOffsetTuple) {
  return ObjectInstanceCollectionService$Wonderjs.reduceObjectInstanceTransformCollection(objectInstanceTransformDataTuple, stateOffsetTuple, (function (stateOffsetTuple, objectInstanceTransform) {
                  return fillMatrixTypeArrFunc(objectInstanceTransform, matricesArrayForInstance, stateOffsetTuple);
                }))[0];
}

function _sendTransformMatrixDataBuffer(param, param$1, state) {
  var match = param$1[0];
  var pos = match[/* pos */0];
  var gl = param[0];
  gl.vertexAttribPointer(pos, match[/* size */1], gl.FLOAT, false, param$1[1], match[/* getOffsetFunc */2](param$1[2]));
  param[1].vertexAttribDivisorANGLE(pos, 1);
  SendGLSLDataService$Wonderjs.enableVertexAttribArray(gl, pos, state[/* glslSenderRecord */3][/* vertexAttribHistoryArray */9]);
  return state;
}

function _sendTransformMatrixDataBufferData(glDataTuple, shaderIndex, stride, state) {
  return ArrayService$WonderCommonlib.reduceOneParami((function (state, sendData, index) {
                return _sendTransformMatrixDataBuffer(glDataTuple, /* tuple */[
                            sendData,
                            stride,
                            index
                          ], state);
              }), state, HandleAttributeConfigDataService$Wonderjs.unsafeGetInstanceAttributeSendData(shaderIndex, state[/* glslSenderRecord */3]));
}

function _updateAndSendTransformMatrixDataBufferData(glDataTuple, shaderIndex, param, state) {
  InstanceBufferRenderService$Wonderjs.updateData(glDataTuple[0], param[1], param[2]);
  return _sendTransformMatrixDataBufferData(glDataTuple, shaderIndex, param[0], state);
}

function _sendTransformMatrixData(param, param$1, fillMatrixTypeArrFunc, state) {
  var match = param$1[2];
  var matrixFloat32ArrayMap = match[2];
  var matrixInstanceBufferMap = match[1];
  var matrixInstanceBufferCapacityMap = match[0];
  var match$1 = param$1[1];
  var defaultCapacity = match$1[0];
  var match$2 = param$1[0];
  var gl = match$2[0];
  var sourceInstance = param[1];
  var matrixInstanceBuffer = InstanceBufferRenderService$Wonderjs.getOrCreateBuffer(/* tuple */[
        gl,
        sourceInstance,
        defaultCapacity
      ], /* tuple */[
        matrixInstanceBufferCapacityMap,
        matrixInstanceBufferMap
      ], state);
  var matricesArrayForInstance = InstanceBufferRenderService$Wonderjs.getOrCreateMatrixFloat32Array(sourceInstance, defaultCapacity, /* tuple */[
        matrixInstanceBufferCapacityMap,
        matrixFloat32ArrayMap
      ], state);
  var match$3 = InstanceBufferRenderService$Wonderjs.setCapacityAndUpdateBufferTypeArray(/* tuple */[
        gl,
        sourceInstance,
        Caml_int32.imul(match$1[4], match$1[1]),
        defaultCapacity
      ], /* tuple */[
        matrixInstanceBuffer,
        matricesArrayForInstance
      ], /* tuple */[
        matrixInstanceBufferMap,
        matrixFloat32ArrayMap,
        matrixInstanceBufferCapacityMap
      ], state);
  var matricesArrayForInstance$1 = match$3[1];
  return _updateAndSendTransformMatrixDataBufferData(/* tuple */[
              gl,
              match$2[1]
            ], match$2[2], /* tuple */[
              match$1[2],
              matricesArrayForInstance$1,
              match$3[0]
            ], _fillObjectInstanceData(match$1[3], matricesArrayForInstance$1, fillMatrixTypeArrFunc, fillMatrixTypeArrFunc(param[0], matricesArrayForInstance$1, /* tuple */[
                      state,
                      0
                    ])));
}

function _sendStaticTransformMatrixData(componentTuple, dataTuple, fillMatrixTypeArrFunc, state) {
  var match = dataTuple[2];
  var match$1 = dataTuple[1];
  var match$2 = dataTuple[0];
  var gl = match$2[0];
  var sourceInstance = componentTuple[1];
  var match$3 = MarkIsSendTransformMatrixDataService$Wonderjs.isSendTransformMatrixData(sourceInstance, state[/* sourceInstanceRecord */15][/* isSendTransformMatrixDataMap */5]);
  if (match$3) {
    InstanceBufferRenderService$Wonderjs.bind(gl, InstanceBufferRenderService$Wonderjs.getOrCreateBuffer(/* tuple */[
              gl,
              sourceInstance,
              match$1[0]
            ], /* tuple */[
              match[0],
              match[1]
            ], state));
    return _sendTransformMatrixDataBufferData(/* tuple */[
                gl,
                match$2[1]
              ], match$2[2], match$1[2], state);
  } else {
    var state$1 = _sendTransformMatrixData(componentTuple, dataTuple, fillMatrixTypeArrFunc, state);
    var newrecord = Caml_array.caml_array_dup(state$1);
    newrecord[/* sourceInstanceRecord */15] = StaticRenderSourceInstanceService$Wonderjs.markIsSendTransformMatrixData(sourceInstance, true, state$1[/* sourceInstanceRecord */15]);
    return newrecord;
  }
}

function _sendDynamicTransformMatrixData(componentTuple, dataTuple, fillMatrixTypeArrFunc, state) {
  var newrecord = Caml_array.caml_array_dup(state);
  return _sendTransformMatrixData(componentTuple, dataTuple, fillMatrixTypeArrFunc, (newrecord[/* sourceInstanceRecord */15] = StaticRenderSourceInstanceService$Wonderjs.markIsSendTransformMatrixData(componentTuple[1], false, state[/* sourceInstanceRecord */15]), newrecord));
}

function _geMatrixMapTuple(state) {
  var match = state[/* vboBufferRecord */1];
  var match$1 = state[/* sourceInstanceRecord */15];
  return /* tuple */[
          match$1[/* matrixInstanceBufferCapacityMap */3],
          match[/* matrixInstanceBufferMap */8],
          match$1[/* matrixFloat32ArrayMap */4]
        ];
}

function _renderSourceInstanceGameObject(gl, indexTuple, renderFunc, state) {
  return renderFunc(gl, indexTuple, state);
}

function _prepareData(gl, shaderIndex, param, state) {
  var extension = GPUDetectService$Wonderjs.unsafeGetInstanceExtension(state[/* gpuDetectRecord */16]);
  var match = BuildObjectInstanceTransformDataTupleUtils$Wonderjs.build(param[0], state);
  var instanceRenderListCount = ObjectInstanceCollectionService$Wonderjs.getObjectInstanceTransformCount(match[0]) + 1 | 0;
  return /* tuple */[
          /* tuple */[
            gl,
            extension,
            shaderIndex
          ],
          /* tuple */[
            param[1],
            param[2],
            param[3],
            match[1],
            instanceRenderListCount
          ],
          _geMatrixMapTuple(state)
        ];
}

function _unbind(shaderIndex, extension, state) {
  ArrayService$WonderCommonlib.forEach((function (param) {
          extension.vertexAttribDivisorANGLE(param[/* pos */0], 0);
          return /* () */0;
        }), HandleAttributeConfigDataService$Wonderjs.unsafeGetInstanceAttributeSendData(shaderIndex, state[/* glslSenderRecord */3]));
  return state;
}

function render(gl, param, param$1, state) {
  var fillMatrixTypeArrFunc = param$1[1];
  var indexTuple = param[0];
  var sourceInstance = indexTuple[5];
  var geometryType = indexTuple[4];
  var geometryIndex = indexTuple[3];
  var shaderIndex = indexTuple[2];
  var transformIndex = indexTuple[0];
  var state$1 = _renderSourceInstanceGameObject(gl, /* tuple */[
        transformIndex,
        indexTuple[1],
        shaderIndex,
        geometryIndex,
        geometryType
      ], param$1[0], state);
  var dataTuple = _prepareData(gl, shaderIndex, /* tuple */[
        sourceInstance,
        param[1],
        param[2],
        param[3]
      ], state$1);
  var match = dataTuple[0];
  var extension = match[1];
  var gl$1 = match[0];
  var match$1 = StaticRenderSourceInstanceService$Wonderjs.isTransformStatic(sourceInstance, state$1[/* sourceInstanceRecord */15]);
  var state$2 = match$1 ? _sendStaticTransformMatrixData(/* tuple */[
          transformIndex,
          sourceInstance
        ], dataTuple, fillMatrixTypeArrFunc, state$1) : _sendDynamicTransformMatrixData(/* tuple */[
          transformIndex,
          sourceInstance
        ], dataTuple, fillMatrixTypeArrFunc, state$1);
  var getIndicesCountFunc = CurrentComponentDataMapRenderService$Wonderjs.getGetIndicesCountFunc(geometryType);
  DrawGLSLService$Wonderjs.drawElementsInstancedANGLE(/* tuple */[
        RenderGeometryService$Wonderjs.getDrawMode(gl$1),
        RenderGeometryService$Wonderjs.getIndexType(gl$1),
        RenderGeometryService$Wonderjs.getIndexTypeSize(gl$1),
        getIndicesCountFunc(geometryIndex, state$2),
        dataTuple[1][4]
      ], extension);
  return _unbind(shaderIndex, extension, state$2);
}

function fillMatrixTypeArr(transformIndex, matricesArrayForInstance, param) {
  return TypeArrayService$Wonderjs.fillFloat32ArrayWithFloat32Array(/* tuple */[
              matricesArrayForInstance,
              param[1]
            ], /* tuple */[
              GetTransformDataRenderService$Wonderjs.getLocalToWorldMatrixTypeArray(transformIndex, param[0]),
              0
            ], 16);
}

export {
  _fillObjectInstanceData ,
  _sendTransformMatrixDataBuffer ,
  _sendTransformMatrixDataBufferData ,
  _updateAndSendTransformMatrixDataBufferData ,
  _sendTransformMatrixData ,
  _sendStaticTransformMatrixData ,
  _sendDynamicTransformMatrixData ,
  _geMatrixMapTuple ,
  _renderSourceInstanceGameObject ,
  _prepareData ,
  _unbind ,
  render ,
  fillMatrixTypeArr ,
  
}
/* GPUDetectService-Wonderjs Not a pure module */
