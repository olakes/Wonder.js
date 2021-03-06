let initWithoutBuildFakeDom =
    (~sandbox, ~isDebug="true", ~buffer=SettingTool.buildBufferConfigStr(), ()) => {
  Random.init(1);
  SettingTool.createStateAndSetToStateData(~isDebug, ~buffer, ())
};

let init = (~sandbox, ~isDebug="true", ~buffer=SettingTool.buildBufferConfigStr(), ()) => {
  SettingTool.buildFakeDomForNotPassCanvasId(sandbox) |> ignore;
  initWithoutBuildFakeDom(~sandbox, ~isDebug, ~buffer, ())
};

let initWithJobConfigWithoutBuildFakeDom =
    (
      ~sandbox,
      ~isDebug="true",
      ~canvasId=None,
      ~context={|
        {
        "alpha": true,
        "depth": true,
        "stencil": false,
        "antialias": true,
        "premultiplied_alpha": true,
        "preserve_drawing_buffer": false
        }
               |},
      ~useHardwareInstance="true",
      ~buffer=SettingTool.buildBufferConfigStr(),
      ~noWorkerJobRecord=NoWorkerJobConfigTool.buildNoWorkerJobConfig(),
      ~renderConfigRecord=RenderConfigTool.buildRenderConfig(),
      ()
    ) => {
  [@bs] SharedArrayBufferTool.setSharedArrayBufferToBeArrayBuffer();
  SettingTool.createStateAndSetToStateData(
    ~isDebug,
    ~canvasId,
    ~buffer,
    ~context,
    ~useHardwareInstance,
    ()
  )
  |> NoWorkerJobConfigTool.create(noWorkerJobRecord)
  |> NoWorkerJobTool.init((
       NoWorkerJobHandleSystem.createInitJobHandleMap,
       NoWorkerJobHandleSystem.createLoopJobHandleMap
     ))
  |> RenderConfigTool.create(renderConfigRecord)
};

let initWithJobConfig =
    (
      ~sandbox,
      ~isDebug="true",
      ~buffer=SettingTool.buildBufferConfigStr(),
      ~noWorkerJobRecord=NoWorkerJobConfigTool.buildNoWorkerJobConfig(),
      ~renderConfigRecord=RenderConfigTool.buildRenderConfig(),
      ()
    ) => {
  [@bs] SharedArrayBufferTool.setSharedArrayBufferToBeArrayBuffer();
  SettingTool.buildFakeDomForNotPassCanvasId(sandbox) |> ignore;
  initWithJobConfigWithoutBuildFakeDom(~sandbox, ~isDebug, ~buffer, ~noWorkerJobRecord, ())
};

let openContractCheck = () =>
  IsDebugMainService.setIsDebug(StateDataMain.stateData, true) |> ignore;

let closeContractCheck = () =>
  IsDebugMainService.setIsDebug(StateDataMain.stateData, false) |> ignore;