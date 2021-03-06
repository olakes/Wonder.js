open StateDataMainType;

open GameObjectType;

open ComponentMapService;

let hasBasicCameraViewComponent = (uid: int, gameObjectRecord) : bool =>
  hasComponent(uid, gameObjectRecord.basicCameraViewMap);

let hasPerspectiveCameraProjectionComponent =
    (uid: int, gameObjectRecord)
    : bool =>
  hasComponent(uid, gameObjectRecord.perspectiveCameraProjectionMap);

let hasMeshRendererComponent = (uid: int, gameObjectRecord) : bool =>
  hasComponent(uid, gameObjectRecord.meshRendererMap);

let hasTransformComponent = (uid: int, gameObjectRecord) : bool =>
  hasComponent(uid, gameObjectRecord.transformMap);

let hasBoxGeometryComponent = (uid: int, gameObjectRecord) : bool =>
  CurrentComponentDataMapRenderService.hasComponent(
    uid,
    gameObjectRecord.geometryDataMap,
    CurrentComponentDataMapService.getBoxGeometryType(),
  );

let hasGeometryComponent = (uid: int, gameObjectRecord) : bool =>
  CurrentComponentDataMapRenderService.hasComponent(
    uid,
    gameObjectRecord.geometryDataMap,
    CurrentComponentDataMapService.getCustomGeometryType(),
  );

let hasBasicMaterialComponent = (uid: int, gameObjectRecord) : bool =>
  hasComponent(uid, gameObjectRecord.basicMaterialMap);

let hasLightMaterialComponent = (uid: int, gameObjectRecord) : bool =>
  hasComponent(uid, gameObjectRecord.lightMaterialMap);

let hasDirectionLightComponent = (uid: int, gameObjectRecord) : bool =>
  hasComponent(uid, gameObjectRecord.directionLightMap);

let hasPointLightComponent = (uid: int, gameObjectRecord) : bool =>
  hasComponent(uid, gameObjectRecord.pointLightMap);

let hasSourceInstanceComponent = (uid: int, gameObjectRecord) : bool =>
  hasComponent(uid, gameObjectRecord.sourceInstanceMap);

let hasObjectInstanceComponent = (uid: int, gameObjectRecord) : bool =>
  hasComponent(uid, gameObjectRecord.objectInstanceMap);