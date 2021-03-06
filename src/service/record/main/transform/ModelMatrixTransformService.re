open Js.Typed_array;

open TypeArrayService;

open PositionType;

open TransformType;

open HierachyTransformService;

open Matrix4Service;

let getLocalToWorldMatrixTypeArray =
  (. transform: transform, localToWorldMatrices, localToWorldMatrixCacheMap) =>
    switch (
      localToWorldMatrixCacheMap
      |> WonderCommonlib.SparseMapService.get(transform)
    ) {
    | Some(matrix) => matrix
    | None =>
      let matrix =
        OperateTypeArrayTransformService.getLocalToWorldMatrixTypeArray(
          transform,
          localToWorldMatrices,
        );
      WonderCommonlib.SparseMapService.set(
        transform,
        matrix,
        localToWorldMatrixCacheMap,
      )
      |> ignore;
      matrix;
    };

let _getNormalMatrixTypeArray =
    (
      transform,
      localToWorldMatrices,
      (localToWorldTargetTypeArr, normalTargetTypeArr),
      getLocalToWorldMatrixTypeArrayFunc,
    ) =>
  Matrix4Service.invertTo3x3(
    getLocalToWorldMatrixTypeArrayFunc(.
      transform,
      localToWorldMatrices,
      localToWorldTargetTypeArr,
    ),
    normalTargetTypeArr,
  )
  |> Matrix3Service.transposeSelf;

let getNormalMatrixTypeArray =
    (
      transform: transform,
      localToWorldMatrices,
      (localToWorldMatrixCacheMap, normalMatrixCacheMap),
    ) =>
  switch (
    normalMatrixCacheMap |> WonderCommonlib.SparseMapService.get(transform)
  ) {
  | Some(matrix) => matrix
  | None =>
    let matrix =
      _getNormalMatrixTypeArray(
        transform,
        localToWorldMatrices,
        (localToWorldMatrixCacheMap, Matrix3Service.createIdentityMatrix3()),
        getLocalToWorldMatrixTypeArray,
      );
    WonderCommonlib.SparseMapService.set(
      transform,
      matrix,
      normalMatrixCacheMap,
    )
    |> ignore;
    matrix;
  };

/* let getLocalPositionTypeArray = (transform: transform, localPositions) =>
   OperateTypeArrayTransformService.getLocalPositionTypeArray(transform, localPositions); */

let getLocalPositionTuple = (transform: transform, localPositions) =>
  OperateTypeArrayTransformService.getLocalPositionTuple(
    transform,
    localPositions,
  );

let setLocalPositionByTuple =
    (transform: transform, dataTuple, {localPositions} as record) => {
  OperateTypeArrayTransformService.setLocalPositionByTuple(
    transform,
    dataTuple,
    localPositions,
  )
  |> ignore;
  record |> markHierachyDirty(transform);
};

let setPositionByTuple =
    (
      transform: transform,
      parent,
      position: position,
      (
        globalTempRecord,
        {localToWorldMatrices, localToWorldMatrixCacheMap} as record,
      ),
    ) => {
  let localToWorldMatrix =
    getLocalToWorldMatrixTypeArray(.
      parent,
      record.localToWorldMatrices,
      localToWorldMatrixCacheMap,
    );
  setLocalPositionByTuple(
    transform,
    Vector3Service.transformMat4Tuple(
      position,
      invert(
        localToWorldMatrix,
        GlobalTempService.getFloat32Array1(globalTempRecord),
      ),
    ),
    record,
  );
};

let getLocalRotationTuple = (transform: transform, localRotations) =>
  OperateTypeArrayTransformService.getLocalRotationTuple(
    transform,
    localRotations,
  );

let setLocalRotationByTuple =
    (transform: transform, dataTuple, {localRotations} as record) => {
  OperateTypeArrayTransformService.setLocalRotationByTuple(
    transform,
    dataTuple,
    localRotations,
  )
  |> ignore;
  record |> markHierachyDirty(transform);
};

let getLocalScaleTuple = (transform: transform, localScales) =>
  OperateTypeArrayTransformService.getLocalScaleTuple(transform, localScales);

let setLocalScaleByTuple =
    (transform: transform, dataTuple, {localScales} as record) => {
  OperateTypeArrayTransformService.setLocalScaleByTuple(
    transform,
    dataTuple,
    localScales,
  )
  |> ignore;
  record |> markHierachyDirty(transform);
};

let setScaleByTuple =
    (
      transform: transform,
      parent,
      position: position,
      (
        globalTempRecord,
        {localToWorldMatrices, localToWorldMatrixCacheMap} as record,
      ),
    ) => {
  let localToWorldMatrix =
    getLocalToWorldMatrixTypeArray(.
      parent,
      record.localToWorldMatrices,
      localToWorldMatrixCacheMap,
    );
  setLocalScaleByTuple(
    transform,
    Vector3Service.transformMat4Tuple(
      position,
      invert(
        localToWorldMatrix,
        GlobalTempService.getFloat32Array1(globalTempRecord),
      ),
    ),
    record,
  );
};