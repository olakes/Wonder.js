open MaterialType;

open StateDataMainType;

open LightMaterialType;

let handleAddComponent =
  [@bs]
  (
    (material, gameObjectUid: int, {gameObjectMap} as record) => {
      ...record,
      gameObjectMap:
        AddComponentService.addComponentToGameObjectMap(material, gameObjectUid, gameObjectMap)
    }
  );