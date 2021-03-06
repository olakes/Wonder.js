// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as Curry from "../../../../../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as Sinon from "../../../../../../../../node_modules/wonder-bs-sinon/lib/es6_global/src/sinon.js";
import * as Sinon$1 from "sinon";
import * as Wonder_jest from "../../../../../../../../node_modules/wonder-bs-jest/lib/es6_global/src/wonder_jest.js";
import * as TestTool$Wonderjs from "../../../../../tool/TestTool.js";
import * as SettingTool$Wonderjs from "../../../../../tool/service/setting/SettingTool.js";
import * as MainStateTool$Wonderjs from "../../../../../tool/service/state/MainStateTool.js";
import * as VboBufferTool$Wonderjs from "../../../../../tool/service/vboBuffer/VboBufferTool.js";
import * as GameObjectTool$Wonderjs from "../../../../../tool/service/gameObject/GameObjectTool.js";
import * as CustomGeometryAPI$Wonderjs from "../../../../../../src/api/geometry/CustomGeometryAPI.js";
import * as CustomGeometryTool$Wonderjs from "../../../../../tool/service/geometry/CustomGeometryTool.js";

describe("test customGeometry", (function () {
        var sandbox = Sinon.getSandboxDefaultVal(/* () */0);
        var state = [MainStateTool$Wonderjs.createState(/* () */0)];
        beforeEach((function () {
                sandbox[0] = Sinon$1.sandbox.create();
                state[0] = TestTool$Wonderjs.init(sandbox, /* None */0, /* Some */[SettingTool$Wonderjs.buildBufferConfigStr(/* Some */[10], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0)], /* () */0);
                return /* () */0;
              }));
        afterEach((function () {
                return Curry._1(Sinon.restoreSandbox, sandbox[0]);
              }));
        describe("fix bug", (function () {
                var _test = function (state) {
                  var vertices1 = new Float32Array(/* array */[10]);
                  var vertices2 = new Float32Array(/* array */[
                        3,
                        2
                      ]);
                  var vertices3 = new Float32Array(/* array */[
                        5,
                        3,
                        2
                      ]);
                  var normals1 = new Float32Array(/* array */[1]);
                  var normals2 = new Float32Array(/* array */[
                        2,
                        2
                      ]);
                  var normals3 = new Float32Array(/* array */[
                        5,
                        1,
                        2
                      ]);
                  var indices1 = new Uint16Array(/* array */[2]);
                  var indices2 = new Uint16Array(/* array */[
                        2,
                        2
                      ]);
                  var indices3 = new Uint16Array(/* array */[
                        3,
                        3,
                        2
                      ]);
                  var match = CustomGeometryTool$Wonderjs.createGameObject(state);
                  var geometry1 = match[2];
                  var match$1 = CustomGeometryTool$Wonderjs.createGameObject(match[0]);
                  var geometry2 = match$1[2];
                  var state$1 = VboBufferTool$Wonderjs.addVboBufferToCustomGeometryBufferMap(geometry1, match$1[0]);
                  var state$2 = VboBufferTool$Wonderjs.addVboBufferToCustomGeometryBufferMap(geometry2, state$1);
                  var state$3 = CustomGeometryAPI$Wonderjs.setCustomGeometryVertices(geometry2, vertices2, CustomGeometryAPI$Wonderjs.setCustomGeometryVertices(geometry1, vertices1, state$2));
                  var state$4 = CustomGeometryAPI$Wonderjs.setCustomGeometryNormals(geometry2, normals2, CustomGeometryAPI$Wonderjs.setCustomGeometryNormals(geometry1, normals1, state$3));
                  var state$5 = CustomGeometryAPI$Wonderjs.setCustomGeometryIndices(geometry2, indices2, CustomGeometryAPI$Wonderjs.setCustomGeometryIndices(geometry1, indices1, state$4));
                  var state$6 = GameObjectTool$Wonderjs.disposeGameObjectCustomGeometryComponentWithoutVboBuffer(match[1], geometry1, state$5);
                  var match$2 = CustomGeometryTool$Wonderjs.createGameObject(state$6);
                  var geometry3 = match$2[2];
                  var state$7 = CustomGeometryAPI$Wonderjs.setCustomGeometryVertices(geometry3, vertices3, match$2[0]);
                  var state$8 = CustomGeometryAPI$Wonderjs.setCustomGeometryNormals(geometry3, normals3, state$7);
                  var state$9 = CustomGeometryAPI$Wonderjs.setCustomGeometryIndices(geometry3, indices3, state$8);
                  return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                  CustomGeometryAPI$Wonderjs.getCustomGeometryVertices(geometry2, state$9),
                                  CustomGeometryAPI$Wonderjs.getCustomGeometryNormals(geometry2, state$9),
                                  CustomGeometryAPI$Wonderjs.getCustomGeometryIndices(geometry2, state$9),
                                  CustomGeometryAPI$Wonderjs.getCustomGeometryVertices(geometry3, state$9),
                                  CustomGeometryAPI$Wonderjs.getCustomGeometryNormals(geometry3, state$9),
                                  CustomGeometryAPI$Wonderjs.getCustomGeometryIndices(geometry3, state$9)
                                ]), /* tuple */[
                              vertices2,
                              normals2,
                              indices2,
                              vertices3,
                              normals3,
                              indices3
                            ]);
                };
                Wonder_jest.test("new one after dispose(not cause reallocate) should has its own geometry point data", (function () {
                        return _test(SettingTool$Wonderjs.setMemory(state[0], /* Some */[2], /* () */0));
                      }));
                return Wonder_jest.test("new one after dispose(cause reallocate) should has its own geometry point data", (function () {
                              return _test(SettingTool$Wonderjs.setMemory(state[0], /* Some */[1], /* () */0));
                            }));
              }));
        return /* () */0;
      }));

export {
  
}
/*  Not a pure module */
