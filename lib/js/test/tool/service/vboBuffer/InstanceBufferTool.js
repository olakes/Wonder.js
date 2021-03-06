// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var GlTool$Wonderjs = require("../../gl/GlTool.js");
var InstanceBufferRenderService$Wonderjs = require("../../../../src/service/state/render/vboBuffer/InstanceBufferRenderService.js");
var CreateRenderStateMainService$Wonderjs = require("../../../../src/service/state/main/render/CreateRenderStateMainService.js");

function getDefaultCapacity() {
  return 1;
}

function getOrCreateBuffer(sourceInstance, defaultCapacity, state) {
  var state$1 = CreateRenderStateMainService$Wonderjs.createRenderState(state);
  var match = state$1[/* vboBufferRecord */0];
  var match$1 = state$1[/* sourceInstanceRecord */15];
  return InstanceBufferRenderService$Wonderjs.getOrCreateBuffer(/* tuple */[
              GlTool$Wonderjs.unsafeGetGlFromRenderState(state$1),
              sourceInstance,
              defaultCapacity
            ], /* tuple */[
              match$1[/* matrixInstanceBufferCapacityMap */3],
              match[/* matrixInstanceBufferMap */8]
            ], state$1);
}

var createMatrixFloat32Array = InstanceBufferRenderService$Wonderjs._createMatrixFloat32Array;

exports.getDefaultCapacity = getDefaultCapacity;
exports.getOrCreateBuffer = getOrCreateBuffer;
exports.createMatrixFloat32Array = createMatrixFloat32Array;
/* GlTool-Wonderjs Not a pure module */
