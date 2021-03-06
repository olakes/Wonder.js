let getGameObject = (component, gameObjectMap) =>
  WonderCommonlib.SparseMapService.get(component, gameObjectMap);

let unsafeGetGameObject = (component, gameObjectMap) =>
  WonderCommonlib.SparseMapService.unsafeGet(component, gameObjectMap)
  |> WonderLog.Contract.ensureCheck(
       (gameObject) =>
         WonderLog.(
           Contract.(
             Operators.(
               test(
                 Log.buildAssertMessage(
                   ~expect={j|component's gameObject exist|j},
                   ~actual={j|not|j}
                 ),
                 () => gameObject |> assertNullableExist
               )
             )
           )
         ),
       IsDebugMainService.getIsDebug(StateDataMain.stateData)
     );