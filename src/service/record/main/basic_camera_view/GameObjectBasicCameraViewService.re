open BasicCameraViewType;

open IndexComponentService;

let getGameObject = (cameraView, {gameObjectMap}) =>
  GameObjectMapService.getGameObject(cameraView, gameObjectMap);

let unsafeGetGameObject = (cameraView, {gameObjectMap}) =>
  GameObjectMapService.unsafeGetGameObject(cameraView, gameObjectMap);

let _isValidComponent = (cameraView, maxIndex) => cameraView >= 0 && cameraView < maxIndex;

let _getGameObject = (index, record) =>
  switch (getGameObject(index, record)) {
  | None => None
  | Some(gameObject) => Some(gameObject)
  };

let rec _findFirstBasicCameraView = (index, maxIndex, record) =>
  _isValidComponent(index, maxIndex) ?
    DisposeBasicCameraViewService.isAlive(index, record) ?
      _getGameObject(index, record) : _findFirstBasicCameraView(index |> succ, maxIndex, record) :
    None;

let findFirstGameObject = ({index} as record) => _findFirstBasicCameraView(0, index, record);