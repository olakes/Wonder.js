open BufferArrayBufferViewSourceTextureService;

let getWrapS = (index, typeArr) =>
  TypeArrayService.getUint8_1(getWrapSIndex(index), typeArr);

let setWrapS = (index, data, typeArr) =>
  TypeArrayService.setUint8_1(getWrapSIndex(index), data, typeArr);

let getWrapT = (index, typeArr) =>
  TypeArrayService.getUint8_1(getWrapTIndex(index), typeArr);

let setWrapT = (index, data, typeArr) =>
  TypeArrayService.setUint8_1(getWrapTIndex(index), data, typeArr);

let getMagFilter = (index, typeArr) =>
  TypeArrayService.getUint8_1(getMagFilterIndex(index), typeArr);

let setMagFilter = (index, data, typeArr) =>
  TypeArrayService.setUint8_1(getMagFilterIndex(index), data, typeArr);

let getMinFilter = (index, typeArr) =>
  TypeArrayService.getUint8_1(getMinFilterIndex(index), typeArr);

let setMinFilter = (index, data, typeArr) =>
  TypeArrayService.setUint8_1(getMinFilterIndex(index), data, typeArr);

let getIsNeedUpdate = (. index, typeArr) =>
  TypeArrayService.getUint8_1(getIsNeedUpdateIndex(index), typeArr);

let setIsNeedUpdate = (index, data, typeArr) =>
  TypeArrayService.setUint8_1(getIsNeedUpdateIndex(index), data, typeArr);

let getFlipY = (index, typeArr) =>
  TypeArrayService.getUint8_1(getFlipYIndex(index), typeArr);

let setFlipY = (index, data, typeArr) =>
  TypeArrayService.setUint8_1(getFlipYIndex(index), data, typeArr);

let isFlipY = (index, typeArr) =>
  getFlipY(index, typeArr) === BufferSourceTextureService.getFlipY();

let getFormat = (index, typeArr) =>
  TypeArrayService.getUint8_1(getFormatIndex(index), typeArr);

let setFormat = (index, data, typeArr) =>
  TypeArrayService.setUint8_1(getFormatIndex(index), data, typeArr);

let getType = (index, typeArr) =>
  TypeArrayService.getUint8_1(getTypeIndex(index), typeArr);

let setType = (index, data, typeArr) =>
  TypeArrayService.setUint8_1(getTypeIndex(index), data, typeArr);

let getWidth = (index, typeArr) =>
  TypeArrayService.getUint16_1(getWidthIndex(index), typeArr);

let setWidth = (index, data, typeArr) =>
  TypeArrayService.setUint16_1(getWidthIndex(index), data, typeArr);

let getHeight = (index, typeArr) =>
  TypeArrayService.getUint16_1(getHeightIndex(index), typeArr);

let setHeight = (index, data, typeArr) =>
  TypeArrayService.setUint16_1(getHeightIndex(index), data, typeArr);