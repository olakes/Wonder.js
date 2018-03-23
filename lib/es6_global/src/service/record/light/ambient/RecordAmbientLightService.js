// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as Caml_int32                       from "../../../../../../../node_modules/bs-platform/lib/es6/caml_int32.js";
import * as SparseMapService$Wonderjs        from "../../../atom/SparseMapService.js";
import * as TypeArrayService$Wonderjs        from "../../../primitiive/TypeArrayService.js";
import * as ArrayService$WonderCommonlib     from "../../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/ArrayService.js";
import * as CopyTypeArrayService$Wonderjs    from "../../../primitiive/CopyTypeArrayService.js";
import * as SparseMapService$WonderCommonlib from "../../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/SparseMapService.js";

function getBufferMaxCount() {
  return 3;
}

function getColorDataSize() {
  return 3;
}

function _getColorIndex(index) {
  return Caml_int32.imul(index, 3);
}

function getColor(index, typeArr) {
  return TypeArrayService$Wonderjs.getFloat3(Caml_int32.imul(index, 3), typeArr);
}

function setColor(index, color, typeArr) {
  return TypeArrayService$Wonderjs.setFloat3(Caml_int32.imul(index, 3), color, typeArr);
}

function getDefaultColor() {
  return /* float array */[
          1,
          1,
          1
        ];
}

function _setDefaultTypeArrData(count, param) {
  var defaultColor = /* float array */[
    1,
    1,
    1
  ];
  return /* tuple */[
          param[0],
          ArrayService$WonderCommonlib.reduceOneParam((function (colors, index) {
                  return setColor(index, defaultColor, colors);
                }), param[1], ArrayService$WonderCommonlib.range(0, count - 1 | 0))
        ];
}

function _initBufferData() {
  var buffer = new ArrayBuffer(Caml_int32.imul(Caml_int32.imul(3, Float32Array.BYTES_PER_ELEMENT), 3));
  var offset = 0;
  var typeArrayLength = 9;
  var colors = new Float32Array(buffer, offset, typeArrayLength);
  offset = Caml_int32.imul(typeArrayLength, Float32Array.BYTES_PER_ELEMENT);
  return _setDefaultTypeArrData(3, /* tuple */[
              buffer,
              colors
            ]);
}

function create() {
  var match = _initBufferData(/* () */0);
  return /* record */[
          /* index */0,
          /* buffer */match[0],
          /* colors */match[1],
          /* mappedIndexMap */SparseMapService$WonderCommonlib.createEmpty(/* () */0),
          /* gameObjectMap */SparseMapService$WonderCommonlib.createEmpty(/* () */0)
        ];
}

function deepCopyForRestore(param) {
  var gameObjectMap = param[/* gameObjectMap */4];
  var copiedBuffer = CopyTypeArrayService$Wonderjs.copyArrayBuffer(param[/* buffer */1]);
  return /* record */[
          /* index */param[/* index */0],
          /* buffer */copiedBuffer,
          /* colors */CopyTypeArrayService$Wonderjs.copyFloat32TypeArrayFromBuffer(copiedBuffer),
          /* mappedIndexMap */SparseMapService$Wonderjs.copy(gameObjectMap),
          /* gameObjectMap */SparseMapService$Wonderjs.copy(gameObjectMap)
        ];
}

export {
  getBufferMaxCount      ,
  getColorDataSize       ,
  _getColorIndex         ,
  getColor               ,
  setColor               ,
  getDefaultColor        ,
  _setDefaultTypeArrData ,
  _initBufferData        ,
  create                 ,
  deepCopyForRestore     ,
  
}
/* SparseMapService-Wonderjs Not a pure module */