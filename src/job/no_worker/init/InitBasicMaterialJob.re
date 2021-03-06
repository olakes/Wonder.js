open StateDataMainType;

open BasicMaterialType;

let execJob = (flags, {gameObjectRecord} as state) => {
  let {index, disposedIndexArray} = RecordBasicMaterialMainService.getRecord(state);
  InitInitBasicMaterialService.init(
    [@bs] DeviceManagerService.unsafeGetGl(state.deviceManagerRecord),
    (
      JudgeInstanceMainService.buildMap(
        index,
        RecordBasicMaterialMainService.getRecord(state).gameObjectMap,
        gameObjectRecord
      ),
      JudgeInstanceMainService.isSupportInstance(state)
    ),
    CreateInitBasicMaterialStateMainService.createInitMaterialState(
      (index, disposedIndexArray),
      state
    )
  )
  |> ignore;
  state
};