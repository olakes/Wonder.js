let getShaderIndicesSize = () => 1;

let getShaderIndicesLength = (count) => count * getShaderIndicesSize();

let getShaderIndicesOffset = (count) => 0;

let getShaderIndexIndex = (index) => index * getShaderIndicesSize();

let getShaderIndex = (index, typeArr) =>
  TypeArrayService.getUint32_1(getShaderIndexIndex(index), typeArr);

let setShaderIndex =
  [@bs]
  (
    (index, data, typeArr) =>
      TypeArrayService.setUint32_1(getShaderIndexIndex(index), data, typeArr)
  );

let hasShaderIndex = (materialIndex: int, shaderIndices) =>
  getShaderIndex(materialIndex, shaderIndices)
  !== DefaultTypeArrayValueService.getDefaultShaderIndex();