open MaterialType;

open Js.Typed_array;

open MaterialStateUtils;

let create = (state: StateDataType.state) => {
  let data = getMaterialData(state);
  let index = data.index;
  data.index = succ(data.index);
  (state, index)
};

let getGameObject = (material: material, state: StateDataType.state) =>
  ComponentSystem.getComponentGameObject(material, getMaterialData(state).gameObjectMap);

let setShaderIndex = (materialIndex: int, shaderIndex: int, shaderIndices) =>
  TypeArrayUtils.setUint32ArraySingleVale(materialIndex, shaderIndex, shaderIndices);

let getShaderIndexDataSize = () => 1;

/* let getColorDataSize = () => 3; */
let getBasicMaterialBufferCount = (state: StateDataType.state) =>
  BufferConfigSystem.getBufferConfig(state).basicMaterialDataBufferCount;

let getMaterialBufferSize = () =>
  /* Float32Array.BYTES_PER_ELEMENT * (getShaderIndexDataSize() + getColorDataSize()); */
  Float32Array._BYTES_PER_ELEMENT * getShaderIndexDataSize();

let getBasicMaterialBufferSize = () => getMaterialBufferSize();

let getTotalMaterialBufferCount = (state: StateDataType.state) =>
  getBasicMaterialBufferCount(state);

let getBufferLength = (state: StateDataType.state) =>
  getBasicMaterialBufferCount(state) * getBasicMaterialBufferSize();

let _createTypeArrays = (buffer, count: int) => {
  let offset = ref(0);
  let shaderIndices =
    Uint32Array.fromBufferRange(buffer, ~offset=offset^, ~length=count * getShaderIndexDataSize());
  offset := count * Uint32Array._BYTES_PER_ELEMENT * getShaderIndexDataSize();
  /* let colors =
       Float32Array.fromBufferRange(buffer, ~offset=offset^, ~length=count * getColorDataSize());
     offset := count * Float32Array._BYTES_PER_ELEMENT * getColorDataSize(); */
  (buffer, shaderIndices)
};

let _setDefaultTypeArrData = (state: StateDataType.state, count: int, (buffer, shaderIndices)) => {
  let materialData = getMaterialData(state);
  let defaultShaderIndex = 0;
  for (i in 0 to count - 1) {
    setShaderIndex(i, defaultShaderIndex, shaderIndices) |> ignore
  };
  (buffer, shaderIndices)
};

let _initBufferData = (state: StateDataType.state) => {
  let buffer = ArrayBuffer.make(getBufferLength(state));
  let count = getTotalMaterialBufferCount(state);
  _createTypeArrays(buffer, count) |> _setDefaultTypeArrData(state, count)
};

let initData = (state: StateDataType.state) => {
  let (buffer, shaderIndices) = _initBufferData(state);
  state.materialData =
    Some({index: 0, buffer, shaderIndices, gameObjectMap: HashMapSystem.createEmpty()});
  state
};