// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as Js_null_undefined from "../../../../node_modules/bs-platform/lib/es6/js_null_undefined.js";
import * as Contract$WonderLog from "../../../../node_modules/wonder-log/lib/es6_global/src/Contract.js";
import * as StateDataMain$Wonderjs from "../service/state/main/data/StateDataMain.js";
import * as IsDebugMainService$Wonderjs from "../service/state/main/state/IsDebugMainService.js";
import * as AliveComponentService$Wonderjs from "../service/primitive/component/AliveComponentService.js";
import * as HierachyTransformService$Wonderjs from "../service/record/main/transform/HierachyTransformService.js";
import * as CreateTransformMainService$Wonderjs from "../service/state/main/transform/CreateTransformMainService.js";
import * as GameObjectTransformService$Wonderjs from "../service/record/main/transform/GameObjectTransformService.js";
import * as RecordTransformMainService$Wonderjs from "../service/state/main/transform/RecordTransformMainService.js";
import * as UpdateTransformMainService$Wonderjs from "../service/state/main/transform/UpdateTransformMainService.js";
import * as DisposeTransformMainService$Wonderjs from "../service/state/main/transform/DisposeTransformMainService.js";
import * as ModelMatrixTransformService$Wonderjs from "../service/record/main/transform/ModelMatrixTransformService.js";

function unsafeGetTransformGameObject(transform, state) {
  Contract$WonderLog.requireCheck((function () {
          return AliveComponentService$Wonderjs.checkComponentShouldAlive(transform, DisposeTransformMainService$Wonderjs.isAlive, RecordTransformMainService$Wonderjs.getRecord(state));
        }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData));
  return GameObjectTransformService$Wonderjs.unsafeGetGameObject(transform, RecordTransformMainService$Wonderjs.getRecord(state));
}

function unsafeGetTransformParent(transform, state) {
  Contract$WonderLog.requireCheck((function () {
          return AliveComponentService$Wonderjs.checkComponentShouldAlive(transform, DisposeTransformMainService$Wonderjs.isAlive, RecordTransformMainService$Wonderjs.getRecord(state));
        }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData));
  return HierachyTransformService$Wonderjs.unsafeGetParent(transform, RecordTransformMainService$Wonderjs.getRecord(state));
}

function _checkParentAndChildTransformShouldAlive(parent, child, state) {
  return Contract$WonderLog.requireCheck((function () {
                Js_null_undefined.iter(parent, (function (parent) {
                        return AliveComponentService$Wonderjs.checkComponentShouldAlive(parent, DisposeTransformMainService$Wonderjs.isAlive, RecordTransformMainService$Wonderjs.getRecord(state));
                      }));
                return AliveComponentService$Wonderjs.checkComponentShouldAlive(child, DisposeTransformMainService$Wonderjs.isAlive, RecordTransformMainService$Wonderjs.getRecord(state));
              }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData));
}

function _setTransformParent(parent, child, setParentFunc, state) {
  _checkParentAndChildTransformShouldAlive(parent, child, state);
  state[/* transformRecord */11] = /* Some */[setParentFunc((parent == null) ? /* None */0 : [parent], child, RecordTransformMainService$Wonderjs.getRecord(state))];
  return state;
}

function setTransformParent(parent, child, state) {
  return _setTransformParent(parent, child, HierachyTransformService$Wonderjs.setParent, state);
}

function setTransformParentKeepOrder(parent, child, state) {
  return _setTransformParent(parent, child, HierachyTransformService$Wonderjs.setParentKeepOrder, state);
}

function unsafeGetTransformChildren(transform, state) {
  Contract$WonderLog.requireCheck((function () {
          return AliveComponentService$Wonderjs.checkComponentShouldAlive(transform, DisposeTransformMainService$Wonderjs.isAlive, RecordTransformMainService$Wonderjs.getRecord(state));
        }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData));
  return HierachyTransformService$Wonderjs.unsafeGetChildren(transform, RecordTransformMainService$Wonderjs.getRecord(state));
}

function getTransformLocalPosition(transform, state) {
  Contract$WonderLog.requireCheck((function () {
          return AliveComponentService$Wonderjs.checkComponentShouldAlive(transform, DisposeTransformMainService$Wonderjs.isAlive, RecordTransformMainService$Wonderjs.getRecord(state));
        }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData));
  return ModelMatrixTransformService$Wonderjs.getLocalPositionTuple(transform, RecordTransformMainService$Wonderjs.getRecord(state)[/* localPositions */3]);
}

function setTransformLocalPosition(transform, localPosition, state) {
  Contract$WonderLog.requireCheck((function () {
          return AliveComponentService$Wonderjs.checkComponentShouldAlive(transform, DisposeTransformMainService$Wonderjs.isAlive, RecordTransformMainService$Wonderjs.getRecord(state));
        }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData));
  state[/* transformRecord */11] = /* Some */[ModelMatrixTransformService$Wonderjs.setLocalPositionByTuple(transform, localPosition, RecordTransformMainService$Wonderjs.getRecord(state))];
  return state;
}

function getTransformPosition(transform, state) {
  Contract$WonderLog.requireCheck((function () {
          return AliveComponentService$Wonderjs.checkComponentShouldAlive(transform, DisposeTransformMainService$Wonderjs.isAlive, RecordTransformMainService$Wonderjs.getRecord(state));
        }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData));
  return UpdateTransformMainService$Wonderjs.updateAndGetPositionTuple(transform, state[/* globalTempRecord */34], RecordTransformMainService$Wonderjs.getRecord(state));
}

function setTransformPosition(transform, position, state) {
  Contract$WonderLog.requireCheck((function () {
          return AliveComponentService$Wonderjs.checkComponentShouldAlive(transform, DisposeTransformMainService$Wonderjs.isAlive, RecordTransformMainService$Wonderjs.getRecord(state));
        }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData));
  state[/* transformRecord */11] = /* Some */[UpdateTransformMainService$Wonderjs.updateAndSetPositionByTuple(transform, position, state[/* globalTempRecord */34], RecordTransformMainService$Wonderjs.getRecord(state))];
  return state;
}

function getTransformLocalRotation(transform, state) {
  Contract$WonderLog.requireCheck((function () {
          return AliveComponentService$Wonderjs.checkComponentShouldAlive(transform, DisposeTransformMainService$Wonderjs.isAlive, RecordTransformMainService$Wonderjs.getRecord(state));
        }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData));
  return ModelMatrixTransformService$Wonderjs.getLocalRotationTuple(transform, RecordTransformMainService$Wonderjs.getRecord(state)[/* localRotations */4]);
}

function setTransformLocalRotation(transform, localRotation, state) {
  Contract$WonderLog.requireCheck((function () {
          return AliveComponentService$Wonderjs.checkComponentShouldAlive(transform, DisposeTransformMainService$Wonderjs.isAlive, RecordTransformMainService$Wonderjs.getRecord(state));
        }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData));
  state[/* transformRecord */11] = /* Some */[ModelMatrixTransformService$Wonderjs.setLocalRotationByTuple(transform, localRotation, RecordTransformMainService$Wonderjs.getRecord(state))];
  return state;
}

function getTransformRotation(transform, state) {
  Contract$WonderLog.requireCheck((function () {
          return AliveComponentService$Wonderjs.checkComponentShouldAlive(transform, DisposeTransformMainService$Wonderjs.isAlive, RecordTransformMainService$Wonderjs.getRecord(state));
        }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData));
  return UpdateTransformMainService$Wonderjs.updateAndGetRotationTuple(transform, state[/* globalTempRecord */34], RecordTransformMainService$Wonderjs.getRecord(state));
}

function setTransformRotation(transform, rotation, state) {
  Contract$WonderLog.requireCheck((function () {
          return AliveComponentService$Wonderjs.checkComponentShouldAlive(transform, DisposeTransformMainService$Wonderjs.isAlive, RecordTransformMainService$Wonderjs.getRecord(state));
        }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData));
  state[/* transformRecord */11] = /* Some */[UpdateTransformMainService$Wonderjs.updateAndSetRotationByTuple(transform, rotation, state[/* globalTempRecord */34], RecordTransformMainService$Wonderjs.getRecord(state))];
  return state;
}

function getTransformLocalScale(transform, state) {
  Contract$WonderLog.requireCheck((function () {
          return AliveComponentService$Wonderjs.checkComponentShouldAlive(transform, DisposeTransformMainService$Wonderjs.isAlive, RecordTransformMainService$Wonderjs.getRecord(state));
        }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData));
  return ModelMatrixTransformService$Wonderjs.getLocalScaleTuple(transform, RecordTransformMainService$Wonderjs.getRecord(state)[/* localScales */5]);
}

function setTransformLocalScale(transform, localScale, state) {
  Contract$WonderLog.requireCheck((function () {
          return AliveComponentService$Wonderjs.checkComponentShouldAlive(transform, DisposeTransformMainService$Wonderjs.isAlive, RecordTransformMainService$Wonderjs.getRecord(state));
        }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData));
  state[/* transformRecord */11] = /* Some */[ModelMatrixTransformService$Wonderjs.setLocalScaleByTuple(transform, localScale, RecordTransformMainService$Wonderjs.getRecord(state))];
  return state;
}

function getTransformScale(transform, state) {
  Contract$WonderLog.requireCheck((function () {
          return AliveComponentService$Wonderjs.checkComponentShouldAlive(transform, DisposeTransformMainService$Wonderjs.isAlive, RecordTransformMainService$Wonderjs.getRecord(state));
        }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData));
  return UpdateTransformMainService$Wonderjs.updateAndGetScaleTuple(transform, state[/* globalTempRecord */34], RecordTransformMainService$Wonderjs.getRecord(state));
}

function setTransformScale(transform, scale, state) {
  Contract$WonderLog.requireCheck((function () {
          return AliveComponentService$Wonderjs.checkComponentShouldAlive(transform, DisposeTransformMainService$Wonderjs.isAlive, RecordTransformMainService$Wonderjs.getRecord(state));
        }), IsDebugMainService$Wonderjs.getIsDebug(StateDataMain$Wonderjs.stateData));
  state[/* transformRecord */11] = /* Some */[UpdateTransformMainService$Wonderjs.updateAndSetScaleByTuple(transform, scale, state[/* globalTempRecord */34], RecordTransformMainService$Wonderjs.getRecord(state))];
  return state;
}

var createTransform = CreateTransformMainService$Wonderjs.create;

export {
  createTransform ,
  unsafeGetTransformGameObject ,
  unsafeGetTransformParent ,
  _checkParentAndChildTransformShouldAlive ,
  _setTransformParent ,
  setTransformParent ,
  setTransformParentKeepOrder ,
  unsafeGetTransformChildren ,
  getTransformLocalPosition ,
  setTransformLocalPosition ,
  getTransformPosition ,
  setTransformPosition ,
  getTransformLocalRotation ,
  setTransformLocalRotation ,
  getTransformRotation ,
  setTransformRotation ,
  getTransformLocalScale ,
  setTransformLocalScale ,
  getTransformScale ,
  setTransformScale ,
  
}
/* Contract-WonderLog Not a pure module */
