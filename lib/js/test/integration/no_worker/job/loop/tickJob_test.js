// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Sinon = require("wonder-bs-sinon/lib/js/src/sinon.js");
var Sinon$1 = require("sinon");
var Wonder_jest = require("wonder-bs-jest/lib/js/src/wonder_jest.js");
var TestTool$Wonderjs = require("../../../../tool/TestTool.js");
var DirectorTool$Wonderjs = require("../../../../tool/core/DirectorTool.js");
var MainStateTool$Wonderjs = require("../../../../tool/service/state/MainStateTool.js");
var TimeControllerAPI$Wonderjs = require("../../../../../src/api/TimeControllerAPI.js");
var TimeControllerTool$Wonderjs = require("../../../../tool/service/timeController/TimeControllerTool.js");
var NoWorkerJobConfigTool$Wonderjs = require("../../../../tool/service/noWorkerJob/NoWorkerJobConfigTool.js");

describe("test tick job", (function () {
        var sandbox = Sinon.getSandboxDefaultVal(/* () */0);
        var state = [MainStateTool$Wonderjs.createState(/* () */0)];
        var _buildNoWorkerJobConfig = function () {
          return NoWorkerJobConfigTool$Wonderjs.buildNoWorkerJobConfig(/* None */0, /* Some */["\n        [\n    {\n      \"name\": \"default\",\n      \"jobs\": [\n        {\n          \"name\": \"start_time\"\n        }\n      ]\n    }\n  ]\n        "], /* Some */["\n        [\n    {\n      \"name\": \"default\",\n      \"jobs\": [\n        {\n          \"name\": \"tick\"\n        }\n      ]\n    }\n  ]\n        "], /* Some */["\n\n[\n        {\n          \"name\": \"start_time\"\n        }\n]\n        "], /* Some */["\n\n[\n        {\n          \"name\": \"tick\"\n        }\n]\n        "], /* () */0);
        };
        beforeEach((function () {
                sandbox[0] = Sinon$1.sandbox.create();
                state[0] = TestTool$Wonderjs.initWithJobConfig(sandbox, /* None */0, /* None */0, /* Some */[_buildNoWorkerJobConfig(/* () */0)], /* None */0, /* () */0);
                TimeControllerTool$Wonderjs.setStartTime(100);
                return TestTool$Wonderjs.closeContractCheck(/* () */0);
              }));
        afterEach((function () {
                return Curry._1(Sinon.restoreSandbox, sandbox[0]);
              }));
        describe("compute gameTime", (function () {
                Wonder_jest.test("gameTime's unit is second", (function () {
                        var state$1 = DirectorTool$Wonderjs.init(state[0]);
                        var state$2 = DirectorTool$Wonderjs.run(state$1, /* Some */[1100], /* () */0);
                        return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](TimeControllerAPI$Wonderjs.getGameTime(state$2)), 1);
                      }));
                return Wonder_jest.test("record total game time", (function () {
                              var state$1 = DirectorTool$Wonderjs.init(state[0]);
                              var state$2 = DirectorTool$Wonderjs.run(state$1, /* Some */[1000], /* () */0);
                              var state$3 = DirectorTool$Wonderjs.run(state$2, /* Some */[2100], /* () */0);
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](TimeControllerAPI$Wonderjs.getGameTime(state$3)), 2);
                            }));
              }));
        describe("compute fps", (function () {
                Wonder_jest.test("fps is 60 on the first loop", (function () {
                        var state$1 = DirectorTool$Wonderjs.init(state[0]);
                        var state$2 = DirectorTool$Wonderjs.run(state$1, /* Some */[500], /* () */0);
                        return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](TimeControllerAPI$Wonderjs.getFps(state$2)), 60);
                      }));
                return Wonder_jest.test("test compute", (function () {
                              var state$1 = DirectorTool$Wonderjs.init(state[0]);
                              var state$2 = DirectorTool$Wonderjs.run(state$1, /* Some */[1000], /* () */0);
                              var state$3 = DirectorTool$Wonderjs.run(state$2, /* Some */[1050], /* () */0);
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](TimeControllerAPI$Wonderjs.getFps(state$3)), 20);
                            }));
              }));
        return /* () */0;
      }));

/*  Not a pure module */
