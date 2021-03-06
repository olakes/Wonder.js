let isCached = (unit, texture, bindTextureUnitCacheMap) =>
  switch (bindTextureUnitCacheMap |> WonderCommonlib.SparseMapService.get(unit)) {
  | None => false
  | Some(bindedTexture) => bindedTexture === texture
  };

let addActiveTexture = (unit, texture, bindTextureUnitCacheMap) => {
  WonderLog.Contract.requireCheck(
    () =>
      WonderLog.(
        Contract.(
          Operators.(
            test(
              Log.buildAssertMessage(~expect={j|not cached|j}, ~actual={j||j}),
              () => isCached(unit, texture, bindTextureUnitCacheMap) |> assertFalse
            )
          )
        )
      ),
    IsDebugMainService.getIsDebug(StateDataMain.stateData)
  );
  bindTextureUnitCacheMap |> WonderCommonlib.SparseMapService.set(unit, texture)
};