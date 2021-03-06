// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as Curry from "../../../../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as Sinon from "../../../../../../../node_modules/wonder-bs-sinon/lib/es6_global/src/sinon.js";
import * as Sinon$1 from "sinon";
import * as Wonder_jest from "../../../../../../../node_modules/wonder-bs-jest/lib/es6_global/src/wonder_jest.js";
import * as TestTool$Wonderjs from "../../../../tool/TestTool.js";
import * as FakeGlTool$Wonderjs from "../../../../tool/gl/FakeGlTool.js";
import * as ShaderTool$Wonderjs from "../../../../tool/service/shader/ShaderTool.js";
import * as ProgramTool$Wonderjs from "../../../../tool/service/program/ProgramTool.js";
import * as GameObjectAPI$Wonderjs from "../../../../../src/api/GameObjectAPI.js";
import * as MainStateTool$Wonderjs from "../../../../tool/service/state/MainStateTool.js";
import * as GLSLSenderTool$Wonderjs from "../../../../tool/service/sender/GLSLSenderTool.js";
import * as GameObjectTool$Wonderjs from "../../../../tool/service/gameObject/GameObjectTool.js";
import * as HashMapService$Wonderjs from "../../../../../src/service/atom/HashMapService.js";
import * as BoxGeometryTool$Wonderjs from "../../../../tool/service/geometry/BoxGeometryTool.js";
import * as BasicMaterialAPI$Wonderjs from "../../../../../src/api/material/BasicMaterialAPI.js";
import * as GLSLLocationTool$Wonderjs from "../../../../tool/service/location/GLSLLocationTool.js";
import * as SparseMapService$Wonderjs from "../../../../../src/service/atom/SparseMapService.js";
import * as InitRenderJobTool$Wonderjs from "../../../../tool/job/no_worker/init/InitRenderJobTool.js";
import * as SourceInstanceAPI$Wonderjs from "../../../../../src/api/SourceInstanceAPI.js";
import * as ArrayService$WonderCommonlib from "../../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/ArrayService.js";
import * as HashMapService$WonderCommonlib from "../../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/HashMapService.js";
import * as SparseMapService$WonderCommonlib from "../../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/SparseMapService.js";

describe("test redo,undo shader record", (function () {
        var sandbox = Sinon.getSandboxDefaultVal(/* () */0);
        var state = [MainStateTool$Wonderjs.createState(/* () */0)];
        var _prepareGLSLSenderData = function (state) {
          var match = state[/* glslSenderRecord */30];
          var vertexAttribHistoryArray = match[/* vertexAttribHistoryArray */9];
          SparseMapService$WonderCommonlib.set(0, 0, match[/* attributeSendDataMap */0]);
          SparseMapService$WonderCommonlib.set(0, 2, vertexAttribHistoryArray);
          return /* tuple */[
                  state,
                  0,
                  0,
                  1,
                  2
                ];
        };
        var _prepareShaderData = function (state) {
          var record = ShaderTool$Wonderjs.getShaderRecord(state);
          record[/* index */0] = 2;
          HashMapService$WonderCommonlib.set("key1", 0, record[/* shaderIndexMap */1]);
          HashMapService$WonderCommonlib.set("key2", 1, record[/* shaderIndexMap */1]);
          return /* tuple */[
                  state,
                  0,
                  1
                ];
        };
        var _prepareProgramData = function (state) {
          var record = ProgramTool$Wonderjs.getProgramRecord(state);
          SparseMapService$WonderCommonlib.set(0, 11, record[/* programMap */0]);
          record[/* lastUsedProgram */1] = 11;
          return /* tuple */[
                  state,
                  0,
                  11
                ];
        };
        beforeEach((function () {
                sandbox[0] = Sinon$1.sandbox.create();
                state[0] = TestTool$Wonderjs.initWithJobConfig(sandbox, /* None */0, /* None */0, /* Some */[InitRenderJobTool$Wonderjs.buildNoWorkerJobConfig(/* () */0)], /* None */0, /* () */0);
                return /* () */0;
              }));
        afterEach((function () {
                return Curry._1(Sinon.restoreSandbox, sandbox[0]);
              }));
        describe("restore", (function () {
                describe("restore glsl sender record to target state", (function () {
                        Wonder_jest.test("clear last send record", (function () {
                                var match = _prepareGLSLSenderData(state[0]);
                                var match$1 = _prepareGLSLSenderData(MainStateTool$Wonderjs.createNewCompleteState(sandbox));
                                var newState = MainStateTool$Wonderjs.restore(match$1[0], match[0]);
                                var match$2 = GLSLSenderTool$Wonderjs.getGLSLSenderRecord(newState);
                                var lastSendMaterial = match$2[/* lastSendMaterial */10];
                                var lastSendGeometry = match$2[/* lastSendGeometry */11];
                                return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                                lastSendMaterial,
                                                lastSendGeometry
                                              ]), /* tuple */[
                                            /* None */0,
                                            /* None */0
                                          ]);
                              }));
                        return Wonder_jest.test("clear vertexAttribHistoryArray", (function () {
                                      var match = _prepareGLSLSenderData(state[0]);
                                      var match$1 = _prepareGLSLSenderData(MainStateTool$Wonderjs.createNewCompleteState(sandbox));
                                      var newState = MainStateTool$Wonderjs.restore(match$1[0], match[0]);
                                      var match$2 = GLSLSenderTool$Wonderjs.getGLSLSenderRecord(newState);
                                      var vertexAttribHistoryArray = match$2[/* vertexAttribHistoryArray */9];
                                      return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](vertexAttribHistoryArray), ArrayService$WonderCommonlib.createEmpty(/* () */0));
                                    }));
                      }));
                describe("restore shader record to target state", (function () {
                        describe("contract check", (function () {
                                return Wonder_jest.test("currentState and targetState ->shaderRecord->glslRecord->precision should be the same", (function () {
                                              var match = _prepareShaderData(state[0]);
                                              var state$1 = match[0];
                                              var currentState = MainStateTool$Wonderjs.createNewCompleteState(sandbox);
                                              TestTool$Wonderjs.openContractCheck(/* () */0);
                                              currentState[/* glslRecord */27][/* precision */0] = /* Some */["aaa"];
                                              return Wonder_jest.Expect[/* toThrowMessage */20]("expect currentState->shaderRecord->glslRecord->precision and targetState ->shaderRecord->glslRecord->precision be the same, but actual not", Wonder_jest.Expect[/* expect */0]((function () {
                                                                MainStateTool$Wonderjs.restore(currentState, state$1);
                                                                return /* () */0;
                                                              })));
                                            }));
                              }));
                        return /* () */0;
                      }));
                describe("restore program record to target state", (function () {
                        return Wonder_jest.test("clear lastUsedProgram", (function () {
                                      var match = _prepareProgramData(state[0]);
                                      var match$1 = _prepareProgramData(MainStateTool$Wonderjs.createNewCompleteState(sandbox));
                                      var newState = MainStateTool$Wonderjs.restore(match$1[0], match[0]);
                                      var match$2 = ProgramTool$Wonderjs.getProgramRecord(newState);
                                      var lastUsedProgram = match$2[/* lastUsedProgram */1];
                                      return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](lastUsedProgram), /* None */0);
                                    }));
                      }));
                describe("restore gpu shader related record to target state", (function () {
                        describe("test init shader", (function () {
                                var _prepareBasicMaterialGameObject = function (_, state) {
                                  var match = BasicMaterialAPI$Wonderjs.createBasicMaterial(state);
                                  var match$1 = BoxGeometryTool$Wonderjs.createBoxGeometry(match[0]);
                                  var match$2 = GameObjectAPI$Wonderjs.createGameObject(match$1[0]);
                                  var gameObject = match$2[1];
                                  var state$1 = GameObjectAPI$Wonderjs.addGameObjectBoxGeometryComponent(gameObject, match$1[1], GameObjectAPI$Wonderjs.addGameObjectBasicMaterialComponent(gameObject, match[1], match$2[0]));
                                  return /* tuple */[
                                          state$1,
                                          gameObject
                                        ];
                                };
                                var _prepareInstanceGameObject = function (_, state) {
                                  var match = BasicMaterialAPI$Wonderjs.createBasicMaterial(state);
                                  var match$1 = BoxGeometryTool$Wonderjs.createBoxGeometry(match[0]);
                                  var match$2 = GameObjectAPI$Wonderjs.createGameObject(match$1[0]);
                                  var gameObject = match$2[1];
                                  var match$3 = SourceInstanceAPI$Wonderjs.createSourceInstance(match$2[0]);
                                  var state$1 = GameObjectAPI$Wonderjs.addGameObjectBoxGeometryComponent(gameObject, match$1[1], GameObjectAPI$Wonderjs.addGameObjectBasicMaterialComponent(gameObject, match[1], GameObjectAPI$Wonderjs.addGameObjectSourceInstanceComponent(gameObject, match$3[1], match$3[0])));
                                  return /* tuple */[
                                          state$1,
                                          gameObject
                                        ];
                                };
                                var _exec = function (currentState, copiedState, gameObject) {
                                  var currentStateCreateProgram = Sinon.createEmptyStubWithJsObjSandbox(sandbox);
                                  var currentState$1 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[currentStateCreateProgram], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), currentState);
                                  var currentState$2 = GameObjectTool$Wonderjs.initGameObject(gameObject, currentState$1);
                                  var initShaderCount = Sinon.getCallCount(currentStateCreateProgram);
                                  MainStateTool$Wonderjs.restore(currentState$2, copiedState);
                                  return /* tuple */[
                                          currentStateCreateProgram,
                                          initShaderCount
                                        ];
                                };
                                Wonder_jest.test("if targetState->shader not exist in currentState->shader, init it", (function () {
                                        var match = _prepareInstanceGameObject(sandbox, state[0]);
                                        var state$1 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), match[0]);
                                        var state$2 = InitRenderJobTool$Wonderjs.exec(state$1);
                                        var copiedState = MainStateTool$Wonderjs.deepCopyForRestore(state$2);
                                        var currentState = MainStateTool$Wonderjs.createNewCompleteStateWithRenderConfig(sandbox);
                                        var match$1 = _prepareBasicMaterialGameObject(sandbox, currentState);
                                        var match$2 = _exec(match$1[0], copiedState, match$1[1]);
                                        return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](Sinon.getCallCount(match$2[0])), match$2[1] + 1 | 0);
                                      }));
                                describe("else, not init it", (function () {
                                        Wonder_jest.test("test", (function () {
                                                TestTool$Wonderjs.closeContractCheck(/* () */0);
                                                var match = _prepareInstanceGameObject(sandbox, state[0]);
                                                var match$1 = _prepareBasicMaterialGameObject(sandbox, match[0]);
                                                var state$1 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), match$1[0]);
                                                var state$2 = InitRenderJobTool$Wonderjs.exec(state$1);
                                                var copiedState = MainStateTool$Wonderjs.deepCopyForRestore(state$2);
                                                var currentState = MainStateTool$Wonderjs.createNewCompleteStateWithRenderConfig(sandbox);
                                                var match$2 = _prepareBasicMaterialGameObject(sandbox, currentState);
                                                var match$3 = _exec(match$2[0], copiedState, match$2[1]);
                                                return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](Sinon.getCallCount(match$3[0])), match$3[1] + 1 | 0);
                                              }));
                                        describe("fix bug", (function () {
                                                return Wonder_jest.test("test create gameObject which has no material", (function () {
                                                              var match = _prepareInstanceGameObject(sandbox, state[0]);
                                                              var match$1 = GameObjectTool$Wonderjs.createGameObject(match[0]);
                                                              var match$2 = _prepareBasicMaterialGameObject(sandbox, match$1[0]);
                                                              var state$1 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), match$2[0]);
                                                              var state$2 = InitRenderJobTool$Wonderjs.exec(state$1);
                                                              var copiedState = MainStateTool$Wonderjs.deepCopyForRestore(state$2);
                                                              var match$3 = _prepareBasicMaterialGameObject(sandbox, state$2);
                                                              var match$4 = _exec(match$3[0], copiedState, match$3[1]);
                                                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](Sinon.getCallCount(match$4[0])), match$4[1]);
                                                            }));
                                              }));
                                        return /* () */0;
                                      }));
                                return /* () */0;
                              }));
                        describe("test restore record", (function () {
                                var _prepareState1 = function (state) {
                                  var record = ShaderTool$Wonderjs.getShaderRecord(state);
                                  var shaderIndexMap = record[/* shaderIndexMap */1];
                                  record[/* index */0] = 3;
                                  HashMapService$WonderCommonlib.set("key3", 2, HashMapService$WonderCommonlib.set("key2", 1, HashMapService$WonderCommonlib.set("key1", 0, shaderIndexMap)));
                                  var record$1 = ProgramTool$Wonderjs.getProgramRecord(state);
                                  SparseMapService$WonderCommonlib.set(1, 12, SparseMapService$WonderCommonlib.set(0, 11, record$1[/* programMap */0]));
                                  record$1[/* lastUsedProgram */1] = 12;
                                  var match = GLSLLocationTool$Wonderjs.getGLSLLocationRecord(state);
                                  SparseMapService$WonderCommonlib.set(1, 22, SparseMapService$WonderCommonlib.set(0, 21, match[/* attributeLocationMap */0]));
                                  SparseMapService$WonderCommonlib.set(1, 32, SparseMapService$WonderCommonlib.set(0, 31, match[/* uniformLocationMap */1]));
                                  var match$1 = state[/* glslSenderRecord */30];
                                  SparseMapService$WonderCommonlib.set(1, 122, SparseMapService$WonderCommonlib.set(0, 121, match$1[/* uniformShaderSendNoCachableDataMap */5]));
                                  return /* tuple */[
                                          state,
                                          /* tuple */[
                                            0,
                                            1
                                          ],
                                          /* tuple */[
                                            11,
                                            12
                                          ],
                                          /* tuple */[
                                            21,
                                            22,
                                            31,
                                            32
                                          ],
                                          /* tuple */[
                                            121,
                                            122
                                          ]
                                        ];
                                };
                                var _prepareState2 = function (state) {
                                  var record = ShaderTool$Wonderjs.getShaderRecord(state);
                                  var shaderIndexMap = record[/* shaderIndexMap */1];
                                  record[/* index */0] = 2;
                                  HashMapService$WonderCommonlib.set("key4", 4, HashMapService$WonderCommonlib.set("key1", 3, shaderIndexMap));
                                  var record$1 = ProgramTool$Wonderjs.getProgramRecord(state);
                                  SparseMapService$WonderCommonlib.set(4, 102, SparseMapService$WonderCommonlib.set(3, 101, record$1[/* programMap */0]));
                                  record$1[/* lastUsedProgram */1] = 102;
                                  var match = GLSLLocationTool$Wonderjs.getGLSLLocationRecord(state);
                                  SparseMapService$WonderCommonlib.set(4, 202, SparseMapService$WonderCommonlib.set(3, 201, match[/* attributeLocationMap */0]));
                                  SparseMapService$WonderCommonlib.set(4, 302, SparseMapService$WonderCommonlib.set(3, 301, match[/* uniformLocationMap */1]));
                                  var match$1 = state[/* glslSenderRecord */30];
                                  SparseMapService$WonderCommonlib.set(4, 10222, SparseMapService$WonderCommonlib.set(3, 10221, match$1[/* uniformShaderSendNoCachableDataMap */5]));
                                  return /* tuple */[
                                          state,
                                          /* tuple */[
                                            3,
                                            4
                                          ],
                                          /* tuple */[
                                            101,
                                            102
                                          ],
                                          /* tuple */[
                                            201,
                                            202,
                                            301,
                                            302
                                          ],
                                          /* tuple */[
                                            10221,
                                            10222
                                          ]
                                        ];
                                };
                                var _prepare = function (state) {
                                  var match = _prepareState1(state);
                                  var targetState = match[0];
                                  var match$1 = _prepareState2(MainStateTool$Wonderjs.createNewCompleteState(sandbox));
                                  var currentState = match$1[0];
                                  var newState = MainStateTool$Wonderjs.restore(currentState, targetState);
                                  return /* tuple */[
                                          newState,
                                          /* tuple */[
                                            currentState,
                                            match$1[1],
                                            match$1[2],
                                            match$1[3],
                                            match$1[4]
                                          ],
                                          /* tuple */[
                                            targetState,
                                            match[1],
                                            match[2],
                                            match[3],
                                            match[4]
                                          ]
                                        ];
                                };
                                describe("test restore shader record", (function () {
                                        describe("test index", (function () {
                                                return Wonder_jest.test("index should be intersected shader's length + 1", (function () {
                                                              var match = _prepare(state[0]);
                                                              var match$1 = ShaderTool$Wonderjs.getShaderRecord(match[0]);
                                                              var index = match$1[/* index */0];
                                                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](index), 1);
                                                            }));
                                              }));
                                        describe("test shaderIndexMap", (function () {
                                                return Wonder_jest.test("get intersect map between current shaderIndexMap and target shaderIndexMap whose value is the one in target shaderIndexMap", (function () {
                                                              var match = _prepare(state[0]);
                                                              var match$1 = ShaderTool$Wonderjs.getShaderRecord(match[0]);
                                                              var shaderIndexMap = match$1[/* shaderIndexMap */1];
                                                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](HashMapService$Wonderjs.entries(shaderIndexMap)), /* array */[/* tuple */[
                                                                            "key1",
                                                                            match[2][1][0]
                                                                          ]]);
                                                            }));
                                              }));
                                        return /* () */0;
                                      }));
                                describe("test restore program record", (function () {
                                        describe("test programMap", (function () {
                                                return Wonder_jest.test("get intersect map between current programMap and target programMap whose value is the one in current programMap", (function () {
                                                              var match = _prepare(state[0]);
                                                              var match$1 = ProgramTool$Wonderjs.getProgramRecord(match[0]);
                                                              var programMap = match$1[/* programMap */0];
                                                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                                                              SparseMapService$Wonderjs.length(programMap),
                                                                              SparseMapService$WonderCommonlib.unsafeGet(match[2][1][0], programMap)
                                                                            ]), /* tuple */[
                                                                          1,
                                                                          match[1][2][0]
                                                                        ]);
                                                            }));
                                              }));
                                        return /* () */0;
                                      }));
                                describe("test restore glsl location record", (function () {
                                        describe("test attributeLocationMap, uniformLocationMap", (function () {
                                                return Wonder_jest.test("get intersect map between current map and target map whose value is the one in current map", (function () {
                                                              var match = _prepare(state[0]);
                                                              var match$1 = GLSLLocationTool$Wonderjs.getGLSLLocationRecord(match[0]);
                                                              var attributeLocationMap = match$1[/* attributeLocationMap */0];
                                                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                                                              SparseMapService$Wonderjs.length(attributeLocationMap),
                                                                              SparseMapService$WonderCommonlib.unsafeGet(match[2][1][0], attributeLocationMap)
                                                                            ]), /* tuple */[
                                                                          1,
                                                                          match[1][3][0]
                                                                        ]);
                                                            }));
                                              }));
                                        return /* () */0;
                                      }));
                                describe("test restore glsl sender record", (function () {
                                        describe("test uniformShaderSendNoCachableDataMap", (function () {
                                                return Wonder_jest.test("get intersect map between current uniformShaderSendNoCachableDataMap and target nuiformShaderSendNoCachableDataMap whose value is the one in current niuformShaderSendNoCachableDataMap", (function () {
                                                              var match = _prepare(state[0]);
                                                              var match$1 = GLSLSenderTool$Wonderjs.getGLSLSenderRecord(match[0]);
                                                              var uniformShaderSendNoCachableDataMap = match$1[/* uniformShaderSendNoCachableDataMap */5];
                                                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                                                              SparseMapService$Wonderjs.length(uniformShaderSendNoCachableDataMap),
                                                                              SparseMapService$WonderCommonlib.unsafeGet(match[2][1][0], uniformShaderSendNoCachableDataMap)
                                                                            ]), /* tuple */[
                                                                          1,
                                                                          match[1][4][0]
                                                                        ]);
                                                            }));
                                              }));
                                        return /* () */0;
                                      }));
                                return /* () */0;
                              }));
                        return /* () */0;
                      }));
                return /* () */0;
              }));
        return /* () */0;
      }));

export {
  
}
/*  Not a pure module */
