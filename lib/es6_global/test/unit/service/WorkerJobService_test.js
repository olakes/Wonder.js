// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as Most from "most";
import * as Curry from "../../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as Sinon from "../../../../../node_modules/wonder-bs-sinon/lib/es6_global/src/sinon.js";
import * as Sinon$1 from "sinon";
import * as Wonder_jest from "../../../../../node_modules/wonder-bs-jest/lib/es6_global/src/wonder_jest.js";
import * as WorkerJobTool$Wonderjs from "../../tool/service/workerJob/WorkerJobTool.js";
import * as WorkerWorkerTool$Wonderjs from "../../integration/worker/tool/WorkerWorkerTool.js";
import * as RenderWorkerStateTool$Wonderjs from "../../tool/service/state/RenderWorkerStateTool.js";
import * as WorkerJobHandleSystem$Wonderjs from "../../../src/job/worker/WorkerJobHandleSystem.js";
import * as WorkerRenderWorkerTool$Wonderjs from "../job/worker/render_worker/tool/WorkerRenderWorkerTool.js";

describe("WorkerJobMainService", (function () {
        var sandbox = Sinon.getSandboxDefaultVal(/* () */0);
        beforeEach((function () {
                sandbox[0] = Sinon$1.sandbox.create();
                return /* () */0;
              }));
        afterEach((function () {
                return Curry._1(Sinon.restoreSandbox, sandbox[0]);
              }));
        describe("getRenderWorkerJobStreamArr", (function () {
                Wonder_jest.testPromise("concat exec sub jobs", (function () {
                        var worker = Curry._1(WorkerRenderWorkerTool$Wonderjs.getSelf, /* () */0);
                        var postMessageToWorker = WorkerWorkerTool$Wonderjs.stubPostMessage(sandbox, worker);
                        return Most.drain(Most.mergeArray(WorkerJobTool$Wonderjs.getRenderWorkerJobStreamArr(WorkerJobTool$Wonderjs.getRenderWorkerPipelineJobs("default", WorkerJobTool$Wonderjs.convertWorkerPipelinesToRecord(JSON.parse("\n         [\n             {\n                 \"name\": \"default\",\n                 \"jobs\": {\n                     \"render\": [\n                         [\n                             {\n                                 \"name\": \"send_finish_send_job_data\"\n                             },\n\n                             {\n                                 \"name\": \"send_finish_init_render_data\"\n                             }\n                         ]\n                     ]\n                 }\n             }\n         ]\n                 "))), WorkerJobTool$Wonderjs.convertWorkerJobsToRecord(JSON.parse("\n                 [\n             {\n                 \"name\": \"send_finish_send_job_data\",\n                 \"flags\": [\n                     \"FINISH_SEND_JOB_DATA\"\n                 ]\n             },\n             {\n                 \"name\": \"send_finish_init_render_data\",\n                 \"flags\": [\n                     \"FINISH_INIT_RENDER\"\n                 ]\n             }\n         ]\n                 ")), /* tuple */[
                                              WorkerJobHandleSystem$Wonderjs.createWorkerJobHandleMap,
                                              WorkerJobHandleSystem$Wonderjs.getWorkerJobHandle
                                            ], RenderWorkerStateTool$Wonderjs.getStateData(/* () */0)))).then((function () {
                                      return Promise.resolve(Sinon.toCalledBefore(Sinon.withOneArg({
                                                          operateType: "FINISH_INIT_RENDER"
                                                        }, postMessageToWorker), Wonder_jest.Expect[/* expect */0](Sinon.withOneArg({
                                                              operateType: "FINISH_SEND_JOB_DATA"
                                                            }, postMessageToWorker))));
                                    }));
                      }));
                return Wonder_jest.testPromise("merge exec main jobs", (function () {
                              var callCount = [0];
                              var worker = Curry._1(WorkerRenderWorkerTool$Wonderjs.getSelf, /* () */0);
                              WorkerWorkerTool$Wonderjs.stubPostMessage(sandbox, worker);
                              return Most.forEach((function () {
                                              callCount[0] = callCount[0] + 1 | 0;
                                              return /* () */0;
                                            }), Most.mergeArray(WorkerJobTool$Wonderjs.getRenderWorkerJobStreamArr(WorkerJobTool$Wonderjs.getRenderWorkerPipelineJobs("default", WorkerJobTool$Wonderjs.convertWorkerPipelinesToRecord(JSON.parse("\n         [\n             {\n                 \"name\": \"default\",\n                 \"jobs\": {\n                     \"render\": [\n                         [\n                             {\n                                 \"name\": \"send_finish_send_job_data\"\n                             }\n                         ],\n                         [\n                             {\n                                 \"name\": \"send_finish_init_render_data\"\n                             }\n                         ]\n                     ]\n                 }\n             }\n         ]\n                 "))), WorkerJobTool$Wonderjs.convertWorkerJobsToRecord(JSON.parse("\n                 [\n             {\n                 \"name\": \"send_finish_send_job_data\",\n                 \"flags\": [\n                     \"FINISH_SEND_JOB_DATA\"\n                 ]\n             },\n             {\n                 \"name\": \"send_finish_init_render_data\",\n                 \"flags\": [\n                     \"FINISH_INIT_RENDER\"\n                 ]\n             }\n         ]\n                 ")), /* tuple */[
                                                    WorkerJobHandleSystem$Wonderjs.createWorkerJobHandleMap,
                                                    WorkerJobHandleSystem$Wonderjs.getWorkerJobHandle
                                                  ], RenderWorkerStateTool$Wonderjs.getStateData(/* () */0)))).then((function () {
                                            return Promise.resolve(Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](callCount[0]), 2));
                                          }));
                            }));
              }));
        return /* () */0;
      }));

export {
  
}
/*  Not a pure module */
