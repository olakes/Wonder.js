// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as Curry from "../../../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as WorkerJobTool$Wonderjs from "../../../tool/service/workerJob/WorkerJobTool.js";
import * as SettingWorkerTool$Wonderjs from "./SettingWorkerTool.js";
import * as TestMainWorkerTool$Wonderjs from "../job/main_worker/tool/TestMainWorkerTool.js";

function _buildFakeCanvas() {
  return Curry._1(SettingWorkerTool$Wonderjs.addTransferControlToOffscreen, {
              width: 0,
              height: 0,
              style: {
                left: "",
                top: "",
                width: "",
                height: "",
                position: "static"
              }
            });
}

function prepareState(sandbox) {
  SettingWorkerTool$Wonderjs.buildFakeCanvasForNotPassCanvasIdWithCanvas(sandbox, _buildFakeCanvas(sandbox));
  return TestMainWorkerTool$Wonderjs.initWithJobConfig(sandbox, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[WorkerJobTool$Wonderjs.buildWorkerJobConfig(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0)], /* None */0, /* None */0, /* () */0);
}

export {
  _buildFakeCanvas ,
  prepareState ,
  
}
/* WorkerJobTool-Wonderjs Not a pure module */
