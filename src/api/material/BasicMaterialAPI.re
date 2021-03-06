open StateDataMainType;

open BasicMaterialType;

open CreateBasicMaterialMainService;

open GameObjectBasicMaterialService;

open OperateBasicMaterialMainService;

open DisposeBasicMaterialMainService;

let createBasicMaterial = state => create(. state);

let unsafeGetBasicMaterialGameObject =
    (material, state: StateDataMainType.state) => {
  WonderLog.Contract.requireCheck(
    () =>
      WonderLog.(
        Contract.(
          Operators.(
            AliveComponentService.checkComponentShouldAlive(
              material,
              isAlive,
              RecordBasicMaterialMainService.getRecord(state),
            )
          )
        )
      ),
    IsDebugMainService.getIsDebug(StateDataMain.stateData),
  );
  unsafeGetGameObject(
    material,
    RecordBasicMaterialMainService.getRecord(state),
  );
};

let getBasicMaterialColor = (material, state: StateDataMainType.state) => {
  WonderLog.Contract.requireCheck(
    () =>
      WonderLog.(
        Contract.(
          Operators.(
            AliveComponentService.checkComponentShouldAlive(
              material,
              isAlive,
              RecordBasicMaterialMainService.getRecord(state),
            )
          )
        )
      ),
    IsDebugMainService.getIsDebug(StateDataMain.stateData),
  );
  getColor(material, state);
};

let setBasicMaterialColor = (material, color, state: StateDataMainType.state) => {
  WonderLog.Contract.requireCheck(
    () =>
      WonderLog.(
        Contract.(
          Operators.(
            AliveComponentService.checkComponentShouldAlive(
              material,
              isAlive,
              RecordBasicMaterialMainService.getRecord(state),
            )
          )
        )
      ),
    IsDebugMainService.getIsDebug(StateDataMain.stateData),
  );
  setColor(material, color, state);
};

let unsafeGetBasicMaterialMap = (material, state) => {
  WonderLog.Contract.requireCheck(
    () =>
      WonderLog.(
        Contract.(
          Operators.(
            AliveComponentService.checkComponentShouldAlive(
              material,
              isAlive,
              RecordBasicMaterialMainService.getRecord(state),
            )
          )
        )
      ),
    IsDebugMainService.getIsDebug(StateDataMain.stateData),
  );
  unsafeGetMap(material, state);
};

let setBasicMaterialMap = (material, texture, state) => {
  WonderLog.Contract.requireCheck(
    () =>
      WonderLog.(
        Contract.(
          Operators.(
            AliveComponentService.checkComponentShouldAlive(
              material,
              isAlive,
              RecordBasicMaterialMainService.getRecord(state),
            )
          )
        )
      ),
    IsDebugMainService.getIsDebug(StateDataMain.stateData),
  );
  setMap(material, texture, state);
};

let hasBasicMaterialMap = (material, state) => {
  WonderLog.Contract.requireCheck(
    () =>
      WonderLog.(
        Contract.(
          Operators.(
            AliveComponentService.checkComponentShouldAlive(
              material,
              isAlive,
              RecordBasicMaterialMainService.getRecord(state),
            )
          )
        )
      ),
    IsDebugMainService.getIsDebug(StateDataMain.stateData),
  );
  hasMap(material, state);
};