open BasicCameraViewType;

let isAlive = (cameraView, {disposedIndexArray}) =>
  DisposeComponentService.isAlive(cameraView, disposedIndexArray);

let _disposeData = (cameraView, {gameObjectMap} as record) => {
  ...record,
  gameObjectMap: DisposeComponentService.disposeSparseMapData(cameraView, gameObjectMap)
};

let handleBatchDisposeComponent =
  [@bs]
  (
    (
      cameraViewArray: array(ComponentType.component),
      {disposedIndexArray} as record
    ) => {
      WonderLog.Contract.requireCheck(
        () =>
          WonderLog.(
            Contract.(
              Operators.(
                DisposeComponentService.checkComponentShouldAliveWithBatchDispose(
                  cameraViewArray,
                  isAlive,
                  record
                )
              )
            )
          ),
        IsDebugMainService.getIsDebug(StateDataMain.stateData)
      );
      cameraViewArray
      |> WonderCommonlib.ArrayService.reduceOneParam(
           [@bs] ((record, cameraView) => record |> _disposeData(cameraView)),
           {...record, disposedIndexArray: disposedIndexArray |> Js.Array.concat(cameraViewArray)}
         )
    }
  );