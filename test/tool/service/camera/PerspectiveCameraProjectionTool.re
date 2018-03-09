open StateDataType;
let isPerspectiveCameraProjection = (cameraProjection) => {
  open Wonder_jest;
  open Expect;
  open! Expect.Operators;
  expect(cameraProjection) >= 0
};


let unsafeGetPMatrix = (cameraProjection, state: StateDataType.state) =>
  PMatrixService.unsafeGetPMatrix(
    cameraProjection,
    state.perspectiveCameraProjectionRecord.pMatrixMap
  );

let getDirtyArray = (state) => state.perspectiveCameraProjectionRecord.dirtyArray;

let init = (state: StateDataType.state) =>
  PerspectiveCameraProjectionInitService.init(state.perspectiveCameraProjectionRecord);

let update = (state: StateDataType.state) => {
  ...state,
  perspectiveCameraProjectionRecord:
    PerspectiveCameraProjectionUpdateService.update(state.perspectiveCameraProjectionRecord)
};

let updateCameraProjection = (cameraProjection, state: StateDataType.state) => {
  ...state,
  perspectiveCameraProjectionRecord:
    PerspectiveCameraProjectionUpdateService.updateCameraProjection(
      cameraProjection,
      state.perspectiveCameraProjectionRecord
    )
};

let getPMatrixOfCreateBasicCameraViewPerspectiveCamera = () =>
  Js.Typed_array.Float32Array.make([|
    1.7320508075688776,
    0.,
    0.,
    0.,
    0.,
    1.7320508075688776,
    0.,
    0.,
    0.,
    0.,
    (-1.0002000200020003),
    (-1.),
    0.,
    0.,
    (-0.2000200020002),
    0.
  |]);