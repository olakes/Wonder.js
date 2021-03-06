// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as Caml_int32 from "../../../../../../../node_modules/bs-platform/lib/es6/caml_int32.js";
import * as TypeArrayService$Wonderjs from "../../../primitive/buffer/TypeArrayService.js";
import * as DefaultTypeArrayValueService$Wonderjs from "../../../primitive/buffer/DefaultTypeArrayValueService.js";

function getComponentSize() {
  return 1;
}

function getGeometryTypeSize() {
  return 1;
}

function getTransformIndicesLength(count) {
  return (count << 0);
}

function getTransformIndicesOffset() {
  return 0;
}

function getMaterialIndicesLength(count) {
  return (count << 0);
}

function getMaterialIndicesOffset(count) {
  return Caml_int32.imul((count << 0), Uint32Array.BYTES_PER_ELEMENT);
}

function getGeometryIndicesLength(count) {
  return (count << 0);
}

function getGeometryIndicesOffset(count) {
  return Caml_int32.imul((count << 0), Uint32Array.BYTES_PER_ELEMENT) + Caml_int32.imul((count << 0), Uint32Array.BYTES_PER_ELEMENT) | 0;
}

function getSourceInstanceIndicesLength(count) {
  return (count << 0);
}

function getSourceInstanceIndicesOffset(count) {
  return getGeometryIndicesOffset(count) + Caml_int32.imul((count << 0), Uint32Array.BYTES_PER_ELEMENT) | 0;
}

function getGeometryTypesLength(count) {
  return (count << 0);
}

function getGeometryTypesOffset(count) {
  return getSourceInstanceIndicesOffset(count) + Caml_int32.imul((count << 0), Uint32Array.BYTES_PER_ELEMENT) | 0;
}

function getComponentIndex(index) {
  return index;
}

function getGeometryTypeIndex(index) {
  return index;
}

var getComponent = TypeArrayService$Wonderjs.getUint32_1;

var setComponent = TypeArrayService$Wonderjs.setUint32_1;

var getGeometryType = TypeArrayService$Wonderjs.getUint8_1;

var setGeometryType = TypeArrayService$Wonderjs.setUint8_1;

function hasSourceInstance(sourceInstance) {
  return sourceInstance !== DefaultTypeArrayValueService$Wonderjs.getDefaultSourceInstance(/* () */0);
}

export {
  getComponentSize ,
  getGeometryTypeSize ,
  getTransformIndicesLength ,
  getTransformIndicesOffset ,
  getMaterialIndicesLength ,
  getMaterialIndicesOffset ,
  getGeometryIndicesLength ,
  getGeometryIndicesOffset ,
  getSourceInstanceIndicesLength ,
  getSourceInstanceIndicesOffset ,
  getGeometryTypesLength ,
  getGeometryTypesOffset ,
  getComponentIndex ,
  getGeometryTypeIndex ,
  getComponent ,
  setComponent ,
  getGeometryType ,
  setGeometryType ,
  hasSourceInstance ,
  
}
/* TypeArrayService-Wonderjs Not a pure module */
