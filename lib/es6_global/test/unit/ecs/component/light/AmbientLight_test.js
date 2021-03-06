// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as Curry from "../../../../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as Sinon from "../../../../../../../node_modules/wonder-bs-sinon/lib/es6_global/src/sinon.js";
import * as Sinon$1 from "sinon";
import * as Wonder_jest from "../../../../../../../node_modules/wonder-bs-jest/lib/es6_global/src/wonder_jest.js";
import * as TestTool$Wonderjs from "../../../../tool/TestTool.js";
import * as GameObjectAPI$Wonderjs from "../../../../../src/api/GameObjectAPI.js";
import * as MainStateTool$Wonderjs from "../../../../tool/service/state/MainStateTool.js";
import * as TypeArrayTool$Wonderjs from "../../../../tool/service/primitive/TypeArrayTool.js";
import * as GameObjectTool$Wonderjs from "../../../../tool/service/gameObject/GameObjectTool.js";
import * as AmbientLightAPI$Wonderjs from "../../../../../src/api/light/AmbientLightAPI.js";
import * as AmbientLightTool$Wonderjs from "../../../../tool/service/light/AmbientLightTool.js";
import * as SparseMapService$WonderCommonlib from "../../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/SparseMapService.js";

describe("AmbientLight", (function () {
        var sandbox = Sinon.getSandboxDefaultVal(/* () */0);
        var state = [MainStateTool$Wonderjs.createState(/* () */0)];
        beforeEach((function () {
                sandbox[0] = Sinon$1.sandbox.create();
                state[0] = TestTool$Wonderjs.init(sandbox, /* None */0, /* None */0, /* () */0);
                return /* () */0;
              }));
        afterEach((function () {
                return Curry._1(Sinon.restoreSandbox, sandbox[0]);
              }));
        describe("createAmbientLight", (function () {
                Wonder_jest.test("create a new light which is just index(int)", (function () {
                        var match = AmbientLightAPI$Wonderjs.createAmbientLight(state[0]);
                        return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](match[1]), 0);
                      }));
                describe("contract check", (function () {
                        describe("limit the total alive count of light to 3", (function () {
                                Wonder_jest.test("test create", (function () {
                                        var match = AmbientLightAPI$Wonderjs.createAmbientLight(state[0]);
                                        var match$1 = AmbientLightAPI$Wonderjs.createAmbientLight(match[0]);
                                        var match$2 = AmbientLightAPI$Wonderjs.createAmbientLight(match$1[0]);
                                        var state$1 = match$2[0];
                                        return Wonder_jest.Expect[/* toThrowMessage */20]("expect index: 3 <= maxIndex: 2, but actual not", Wonder_jest.Expect[/* expect */0]((function () {
                                                          AmbientLightAPI$Wonderjs.createAmbientLight(state$1);
                                                          return /* () */0;
                                                        })));
                                      }));
                                return Wonder_jest.test("test create after dispose", (function () {
                                              var match = AmbientLightTool$Wonderjs.createGameObject(state[0]);
                                              var match$1 = AmbientLightTool$Wonderjs.createGameObject(match[0]);
                                              var match$2 = AmbientLightTool$Wonderjs.createGameObject(match$1[0]);
                                              var state$1 = GameObjectTool$Wonderjs.disposeGameObject(match[1], match$2[0]);
                                              return Wonder_jest.Expect[/* toThrow */18](Wonder_jest.Expect[/* not_ */22](Wonder_jest.Expect[/* expect */0]((function () {
                                                                    AmbientLightAPI$Wonderjs.createAmbientLight(state$1);
                                                                    return /* () */0;
                                                                  }))));
                                            }));
                              }));
                        return /* () */0;
                      }));
                return /* () */0;
              }));
        describe("unsafeGetAmbientLightGameObject", (function () {
                return Wonder_jest.test("get light's gameObject", (function () {
                              var match = AmbientLightAPI$Wonderjs.createAmbientLight(state[0]);
                              var light = match[1];
                              var match$1 = GameObjectAPI$Wonderjs.createGameObject(match[0]);
                              var gameObject = match$1[1];
                              var state$1 = GameObjectAPI$Wonderjs.addGameObjectAmbientLightComponent(gameObject, light, match$1[0]);
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](AmbientLightAPI$Wonderjs.unsafeGetAmbientLightGameObject(light, state$1)), gameObject);
                            }));
              }));
        describe("getAmbientLightColor", (function () {
                return Wonder_jest.test("test default color", (function () {
                              var match = AmbientLightAPI$Wonderjs.createAmbientLight(state[0]);
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](AmbientLightAPI$Wonderjs.getAmbientLightColor(match[1], match[0])), /* array */[
                                          1,
                                          1,
                                          1
                                        ]);
                            }));
              }));
        describe("setAmbientLightColor", (function () {
                return Wonder_jest.test("test set color", (function () {
                              var match = AmbientLightAPI$Wonderjs.createAmbientLight(state[0]);
                              var light = match[1];
                              var color = /* array */[
                                0.2,
                                0.3,
                                0.5
                              ];
                              var state$1 = AmbientLightAPI$Wonderjs.setAmbientLightColor(light, color, match[0]);
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](TypeArrayTool$Wonderjs.truncateArray(AmbientLightAPI$Wonderjs.getAmbientLightColor(light, state$1))), color);
                            }));
              }));
        describe("disposeComponent", (function () {
                describe("dispose data", (function () {
                        Wonder_jest.test("mark disposed", (function () {
                                var match = AmbientLightTool$Wonderjs.createGameObject(state[0]);
                                var light1 = match[2];
                                var state$1 = GameObjectTool$Wonderjs.disposeGameObjectAmbientLightComponent(match[1], light1, match[0]);
                                return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](AmbientLightTool$Wonderjs.isAlive(light1, state$1)), false);
                              }));
                        Wonder_jest.test("remove from gameObjectMap", (function () {
                                var match = AmbientLightTool$Wonderjs.createGameObject(state[0]);
                                var light1 = match[2];
                                var state$1 = GameObjectTool$Wonderjs.disposeGameObjectAmbientLightComponent(match[1], light1, match[0]);
                                var match$1 = AmbientLightTool$Wonderjs.getRecord(state$1);
                                return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](SparseMapService$WonderCommonlib.has(light1, match$1[/* gameObjectMap */4])), false);
                              }));
                        describe("test remove from type array", (function () {
                                describe("remove from colors", (function () {
                                        var _prepare = function (state) {
                                          var match = AmbientLightTool$Wonderjs.createGameObject(state[0]);
                                          var light1 = match[2];
                                          var gameObject1 = match[1];
                                          var match$1 = AmbientLightTool$Wonderjs.createGameObject(match[0]);
                                          var light2 = match$1[2];
                                          var color1 = /* array */[
                                            1,
                                            1,
                                            0
                                          ];
                                          var color2 = /* array */[
                                            0,
                                            1,
                                            0
                                          ];
                                          var state$1 = AmbientLightAPI$Wonderjs.setAmbientLightColor(light1, color1, match$1[0]);
                                          var state$2 = AmbientLightAPI$Wonderjs.setAmbientLightColor(light2, color2, state$1);
                                          var state$3 = GameObjectTool$Wonderjs.disposeGameObjectAmbientLightComponent(gameObject1, light1, state$2);
                                          return /* tuple */[
                                                  state$3,
                                                  /* tuple */[
                                                    gameObject1,
                                                    match$1[1]
                                                  ],
                                                  /* tuple */[
                                                    color1,
                                                    color2
                                                  ],
                                                  /* tuple */[
                                                    light1,
                                                    light2
                                                  ]
                                                ];
                                        };
                                        Wonder_jest.test("not affected other light", (function () {
                                                var match = _prepare(state);
                                                return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](AmbientLightAPI$Wonderjs.getAmbientLightColor(match[3][1], match[0])), match[2][1]);
                                              }));
                                        Wonder_jest.test("swap with last one and reset removed one's value", (function () {
                                                var match = _prepare(state);
                                                var state$1 = match[0];
                                                return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                                                AmbientLightTool$Wonderjs.getColor(0, state$1),
                                                                AmbientLightTool$Wonderjs.getColor(1, state$1)
                                                              ]), /* tuple */[
                                                            match[2][1],
                                                            AmbientLightTool$Wonderjs.getDefaultColor(/* () */0)
                                                          ]);
                                              }));
                                        describe("test add new one after dispose old one", (function () {
                                                return Wonder_jest.test("new one's index should equal to last one's index before dispose", (function () {
                                                              var match = _prepare(state);
                                                              var match$1 = AmbientLightTool$Wonderjs.createGameObject(match[0]);
                                                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](match$1[2]), 1);
                                                            }));
                                              }));
                                        return Wonder_jest.test("test dispose multi ones", (function () {
                                                      var match = AmbientLightTool$Wonderjs.createGameObject(state[0]);
                                                      var light1 = match[2];
                                                      var match$1 = AmbientLightTool$Wonderjs.createGameObject(match[0]);
                                                      var light2 = match$1[2];
                                                      var match$2 = AmbientLightTool$Wonderjs.createGameObject(match$1[0]);
                                                      var light3 = match$2[2];
                                                      var color1 = /* array */[
                                                        1,
                                                        1,
                                                        0
                                                      ];
                                                      var color2 = /* array */[
                                                        0,
                                                        1,
                                                        0
                                                      ];
                                                      var color3 = /* array */[
                                                        0,
                                                        1,
                                                        1
                                                      ];
                                                      var state$1 = AmbientLightAPI$Wonderjs.setAmbientLightColor(light1, color1, match$2[0]);
                                                      var state$2 = AmbientLightAPI$Wonderjs.setAmbientLightColor(light2, color2, state$1);
                                                      var state$3 = AmbientLightAPI$Wonderjs.setAmbientLightColor(light3, color3, state$2);
                                                      var state$4 = GameObjectTool$Wonderjs.disposeGameObjectAmbientLightComponent(match[1], light1, state$3);
                                                      var state$5 = GameObjectTool$Wonderjs.disposeGameObjectAmbientLightComponent(match$2[1], light3, state$4);
                                                      return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](AmbientLightAPI$Wonderjs.getAmbientLightColor(light2, state$5)), color2);
                                                    }));
                                      }));
                                return /* () */0;
                              }));
                        return /* () */0;
                      }));
                return /* () */0;
              }));
        describe("contract check: is alive", (function () {
                describe("if light is disposed", (function () {
                        var _testGetFunc = function (getFunc) {
                          var match = AmbientLightAPI$Wonderjs.createAmbientLight(state[0]);
                          var light = match[1];
                          var match$1 = GameObjectAPI$Wonderjs.createGameObject(match[0]);
                          var gameObject = match$1[1];
                          var state$1 = GameObjectAPI$Wonderjs.addGameObjectAmbientLightComponent(gameObject, light, match$1[0]);
                          var state$2 = GameObjectTool$Wonderjs.disposeGameObjectAmbientLightComponent(gameObject, light, state$1);
                          return Wonder_jest.Expect[/* toThrowMessage */20]("expect component alive, but actual not", Wonder_jest.Expect[/* expect */0]((function () {
                                            return Curry._2(getFunc, light, state$2);
                                          })));
                        };
                        Wonder_jest.test("unsafeGetAmbientLightGameObject should error", (function () {
                                return _testGetFunc(AmbientLightAPI$Wonderjs.unsafeGetAmbientLightGameObject);
                              }));
                        return Wonder_jest.test("getAmbientLightColor should error", (function () {
                                      return _testGetFunc(AmbientLightAPI$Wonderjs.getAmbientLightColor);
                                    }));
                      }));
                return /* () */0;
              }));
        return /* () */0;
      }));

export {
  
}
/*  Not a pure module */
