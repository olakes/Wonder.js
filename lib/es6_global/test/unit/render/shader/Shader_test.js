// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as Curry from "../../../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as Sinon from "../../../../../../node_modules/wonder-bs-sinon/lib/es6_global/src/sinon.js";
import * as Sinon$1 from "sinon";
import * as Caml_array from "../../../../../../node_modules/bs-platform/lib/es6/caml_array.js";
import * as Wonder_jest from "../../../../../../node_modules/wonder-bs-jest/lib/es6_global/src/wonder_jest.js";
import * as FakeGlTool$Wonderjs from "../../../tool/gl/FakeGlTool.js";
import * as OptionTool$Wonderjs from "../../../tool/service/atom/OptionTool.js";
import * as ShaderTool$Wonderjs from "../../../tool/service/shader/ShaderTool.js";
import * as ProgramTool$Wonderjs from "../../../tool/service/program/ProgramTool.js";
import * as MainStateTool$Wonderjs from "../../../tool/service/state/MainStateTool.js";
import * as BasicMaterialTool$Wonderjs from "../../../tool/service/material/BasicMaterialTool.js";
import * as InitRenderJobTool$Wonderjs from "../../../tool/job/no_worker/init/InitRenderJobTool.js";
import * as InitBasicMaterialJobTool$Wonderjs from "../../../tool/job/no_worker/init/InitBasicMaterialJobTool.js";
import * as DefaultTypeArrayValueService$Wonderjs from "../../../../src/service/primitive/buffer/DefaultTypeArrayValueService.js";

describe("Shader", (function () {
        var sandbox = Sinon.getSandboxDefaultVal(/* () */0);
        var state = [MainStateTool$Wonderjs.createState(/* () */0)];
        beforeEach((function () {
                sandbox[0] = Sinon$1.sandbox.create();
                state[0] = InitBasicMaterialJobTool$Wonderjs.initWithJobConfigWithoutBuildFakeDom(sandbox, InitRenderJobTool$Wonderjs.buildNoWorkerJobConfig(/* () */0));
                return /* () */0;
              }));
        afterEach((function () {
                return Curry._1(Sinon.restoreSandbox, sandbox[0]);
              }));
        describe("init material shader", (function () {
                Wonder_jest.test("if the material with the same shaderLibDataArr is already inited, not init", (function () {
                        var match = InitBasicMaterialJobTool$Wonderjs.prepareGameObject(sandbox, state[0]);
                        var match$1 = InitBasicMaterialJobTool$Wonderjs.prepareGameObject(sandbox, match[0]);
                        var state$1 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), match$1[0]);
                        var state$2 = InitBasicMaterialJobTool$Wonderjs.exec(state$1);
                        return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                        BasicMaterialTool$Wonderjs.getShaderIndex(match[3], state$2),
                                        BasicMaterialTool$Wonderjs.getShaderIndex(match$1[3], state$2)
                                      ]), /* tuple */[
                                    0,
                                    0
                                  ]);
                      }));
                describe("generate shaderIndex", (function () {
                        Wonder_jest.test("set to material record", (function () {
                                var match = InitBasicMaterialJobTool$Wonderjs.prepareGameObject(sandbox, state[0]);
                                var state$1 = match[0];
                                InitBasicMaterialJobTool$Wonderjs.prepareGameObject(sandbox, state$1);
                                var state$2 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), state$1);
                                var state$3 = InitBasicMaterialJobTool$Wonderjs.exec(state$2);
                                return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](BasicMaterialTool$Wonderjs.getShaderIndex(match[3], state$3)), 0);
                              }));
                        return Wonder_jest.test("if equal default shader index, error", (function () {
                                      var match = InitBasicMaterialJobTool$Wonderjs.prepareGameObject(sandbox, state[0]);
                                      var state$1 = match[0];
                                      InitBasicMaterialJobTool$Wonderjs.prepareGameObject(sandbox, state$1);
                                      var state$2 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), state$1);
                                      var newrecord = Caml_array.caml_array_dup(state$2);
                                      var init = ShaderTool$Wonderjs.getShaderRecord(state$2);
                                      newrecord[/* shaderRecord */26] = /* record */[
                                        /* index */DefaultTypeArrayValueService$Wonderjs.getDefaultShaderIndex(/* () */0),
                                        /* shaderIndexMap */init[/* shaderIndexMap */1]
                                      ];
                                      return Wonder_jest.Expect[/* toThrowMessage */20]("expect not equal default shader index", Wonder_jest.Expect[/* expect */0]((function () {
                                                        InitBasicMaterialJobTool$Wonderjs.exec(newrecord);
                                                        return /* () */0;
                                                      })));
                                    }));
                      }));
                Wonder_jest.test("create program", (function () {
                        var match = InitBasicMaterialJobTool$Wonderjs.prepareGameObject(sandbox, state[0]);
                        var createProgram = Sinon.createEmptyStubWithJsObjSandbox(sandbox);
                        var state$1 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[createProgram], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), match[0]);
                        InitBasicMaterialJobTool$Wonderjs.exec(state$1);
                        return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](Sinon.getCallCount(createProgram)), 1);
                      }));
                Wonder_jest.test("register program", (function () {
                        var match = InitBasicMaterialJobTool$Wonderjs.prepareGameObject(sandbox, state[0]);
                        var createProgram = Sinon.returns(100, Sinon.createEmptyStubWithJsObjSandbox(sandbox));
                        var state$1 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[createProgram], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), match[0]);
                        var state$2 = InitBasicMaterialJobTool$Wonderjs.exec(state$1);
                        var shaderIndex = BasicMaterialTool$Wonderjs.getShaderIndex(match[3], state$2);
                        return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](OptionTool$Wonderjs.unsafeGet(ProgramTool$Wonderjs.getProgram(shaderIndex, state$2))), 100);
                      }));
                describe("init shader", (function () {
                        Wonder_jest.test("create vs shader", (function () {
                                var match = InitBasicMaterialJobTool$Wonderjs.prepareGameObject(sandbox, state[0]);
                                var createShader = Sinon.createEmptyStubWithJsObjSandbox(sandbox);
                                var state$1 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[1], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[createShader], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), match[0]);
                                InitBasicMaterialJobTool$Wonderjs.exec(state$1);
                                return Sinon.toCalledOnce(Wonder_jest.Expect[/* expect */0](Sinon.withOneArg(1, createShader)));
                              }));
                        Wonder_jest.test("create fs shader", (function () {
                                var match = InitBasicMaterialJobTool$Wonderjs.prepareGameObject(sandbox, state[0]);
                                var createShader = Sinon.createEmptyStubWithJsObjSandbox(sandbox);
                                var state$1 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[1], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[createShader], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), match[0]);
                                InitBasicMaterialJobTool$Wonderjs.exec(state$1);
                                return Sinon.toCalledOnce(Wonder_jest.Expect[/* expect */0](Sinon.withOneArg(1, createShader)));
                              }));
                        describe("compile shader", (function () {
                                Wonder_jest.test("compile vs and fs shader", (function () {
                                        var match = InitBasicMaterialJobTool$Wonderjs.prepareGameObject(sandbox, state[0]);
                                        var shaderSource = Sinon.createEmptyStubWithJsObjSandbox(sandbox);
                                        var compileShader = Sinon.createEmptyStubWithJsObjSandbox(sandbox);
                                        var state$1 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[shaderSource], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[compileShader], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), match[0]);
                                        InitBasicMaterialJobTool$Wonderjs.exec(state$1);
                                        return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                                        Sinon.getCallCount(shaderSource),
                                                        Sinon.getCallCount(compileShader)
                                                      ]), /* tuple */[
                                                    2,
                                                    2
                                                  ]);
                                      }));
                                describe("check COMPILE_STATUS", (function () {
                                        var _nowShowTrace = function () {
                                          Sinon.createMethodStubWithJsObjSandbox(sandbox, console, "trace");
                                          return /* () */0;
                                        };
                                        return Wonder_jest.test("if gl.getShaderParameter return false, log shader info", (function () {
                                                      var match = InitBasicMaterialJobTool$Wonderjs.prepareGameObject(sandbox, state[0]);
                                                      var createShader = Sinon.returns(2, Sinon.onCall(1, Sinon.returns(1, Sinon.onCall(0, Sinon.createEmptyStubWithJsObjSandbox(sandbox)))));
                                                      var getShaderParameter = Sinon.returns(false, Sinon.withTwoArgs(2, 0, Sinon.returns(false, Sinon.withTwoArgs(1, 0, Sinon.createEmptyStubWithJsObjSandbox(sandbox)))));
                                                      var getShaderInfoLog = Sinon.createEmptyStubWithJsObjSandbox(sandbox);
                                                      var log = Sinon.createMethodStubWithJsObjSandbox(sandbox, console, "log");
                                                      _nowShowTrace(/* () */0);
                                                      var state$1 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[0], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[createShader], /* None */0, /* None */0, /* None */0, /* Some */[getShaderParameter], /* None */0, /* Some */[getShaderInfoLog], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), match[0]);
                                                      InitBasicMaterialJobTool$Wonderjs.exec(state$1);
                                                      return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                                                      Sinon.getCallCount(log),
                                                                      Sinon.getCallCount(getShaderInfoLog)
                                                                    ]), /* tuple */[
                                                                  4,
                                                                  2
                                                                ]);
                                                    }));
                                      }));
                                Wonder_jest.test("attach vs and fs shader", (function () {
                                        var match = InitBasicMaterialJobTool$Wonderjs.prepareGameObject(sandbox, state[0]);
                                        var attachShader = Sinon.createEmptyStubWithJsObjSandbox(sandbox);
                                        var state$1 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[attachShader], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), match[0]);
                                        InitBasicMaterialJobTool$Wonderjs.exec(state$1);
                                        return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](Sinon.getCallCount(attachShader)), 2);
                                      }));
                                Wonder_jest.test("avoid \"Attribute 0 is disabled.\"(because this has significant performance penalty)", (function () {
                                        var match = InitBasicMaterialJobTool$Wonderjs.prepareGameObject(sandbox, state[0]);
                                        var bindAttribLocation = Sinon.createEmptyStubWithJsObjSandbox(sandbox);
                                        var state$1 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[bindAttribLocation], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), match[0]);
                                        InitBasicMaterialJobTool$Wonderjs.exec(state$1);
                                        return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](Sinon.getCallCount(Sinon.withThreeArgs(Sinon$1.match.any, 0, "a_position", bindAttribLocation))), 1);
                                      }));
                                describe("link program", (function () {
                                        Wonder_jest.test("test", (function () {
                                                var match = InitBasicMaterialJobTool$Wonderjs.prepareGameObject(sandbox, state[0]);
                                                var linkProgram = Sinon.createEmptyStubWithJsObjSandbox(sandbox);
                                                var state$1 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[linkProgram], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), match[0]);
                                                InitBasicMaterialJobTool$Wonderjs.exec(state$1);
                                                return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](Sinon.getCallCount(linkProgram)), 1);
                                              }));
                                        describe("contract check", (function () {
                                                return Wonder_jest.test("if getProgramParameter returns false, error", (function () {
                                                              var match = InitBasicMaterialJobTool$Wonderjs.prepareGameObject(sandbox, state[0]);
                                                              var getProgramParameter = Sinon.returns(false, Sinon.withTwoArgs(Sinon$1.match.any, 0, Sinon.createEmptyStubWithJsObjSandbox(sandbox)));
                                                              var getProgramInfoLog = Sinon.returns("err", Sinon.createEmptyStubWithJsObjSandbox(sandbox));
                                                              var state$1 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[0], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[getProgramParameter], /* None */0, /* Some */[getProgramInfoLog], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), match[0]);
                                                              return Wonder_jest.Expect[/* toThrowMessageRe */21]((/link\sprogram\serror[\s\S]+err/img), Wonder_jest.Expect[/* expect */0]((function () {
                                                                                InitBasicMaterialJobTool$Wonderjs.exec(state$1);
                                                                                return /* () */0;
                                                                              })));
                                                            }));
                                              }));
                                        return /* () */0;
                                      }));
                                return Wonder_jest.test("delete vs and fs shader after link", (function () {
                                              var match = InitBasicMaterialJobTool$Wonderjs.prepareGameObject(sandbox, state[0]);
                                              var deleteShader = Sinon.createEmptyStubWithJsObjSandbox(sandbox);
                                              var linkProgram = Sinon.createEmptyStubWithJsObjSandbox(sandbox);
                                              var state$1 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[linkProgram], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[deleteShader], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0), match[0]);
                                              InitBasicMaterialJobTool$Wonderjs.exec(state$1);
                                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                                              Sinon.getCallCount(deleteShader),
                                                              Sinon.calledAfter(Sinon.getCall(0, deleteShader), Sinon.getCall(0, linkProgram)),
                                                              Sinon.calledAfter(Sinon.getCall(1, deleteShader), Sinon.getCall(0, linkProgram))
                                                            ]), /* tuple */[
                                                          2,
                                                          true,
                                                          true
                                                        ]);
                                            }));
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
