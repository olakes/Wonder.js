// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as BufferCustomGeometryService$Wonderjs from "../../../main/geometry/custom/BufferCustomGeometryService.js";

function createTypeArrays(buffer, customGeometryPointCount, customGeometryCount) {
  return /* tuple */[
          new Float32Array(buffer, BufferCustomGeometryService$Wonderjs.getVerticesOffset(customGeometryPointCount), BufferCustomGeometryService$Wonderjs.getVertexLength(customGeometryPointCount)),
          new Float32Array(buffer, BufferCustomGeometryService$Wonderjs.getTexCoordsOffset(customGeometryPointCount), BufferCustomGeometryService$Wonderjs.getTexCoordsLength(customGeometryPointCount)),
          new Float32Array(buffer, BufferCustomGeometryService$Wonderjs.getNormalsOffset(customGeometryPointCount), BufferCustomGeometryService$Wonderjs.getVertexLength(customGeometryPointCount)),
          new Uint16Array(buffer, BufferCustomGeometryService$Wonderjs.getIndicesOffset(customGeometryPointCount), BufferCustomGeometryService$Wonderjs.getIndicesLength(customGeometryPointCount)),
          new Uint32Array(buffer, BufferCustomGeometryService$Wonderjs.getVerticesInfosOffset(customGeometryPointCount), BufferCustomGeometryService$Wonderjs.getVerticesInfosLength(customGeometryCount)),
          new Uint32Array(buffer, BufferCustomGeometryService$Wonderjs.getTexCoordsInfosOffset(customGeometryPointCount, customGeometryCount), BufferCustomGeometryService$Wonderjs.getTexCoordsInfosLength(customGeometryCount)),
          new Uint32Array(buffer, BufferCustomGeometryService$Wonderjs.getNormalsInfosOffset(customGeometryPointCount, customGeometryCount), BufferCustomGeometryService$Wonderjs.getNormalsInfosLength(customGeometryCount)),
          new Uint32Array(buffer, BufferCustomGeometryService$Wonderjs.getIndicesInfosOffset(customGeometryPointCount, customGeometryCount), BufferCustomGeometryService$Wonderjs.getIndicesInfosLength(customGeometryCount))
        ];
}

export {
  createTypeArrays ,
  
}
/* BufferCustomGeometryService-Wonderjs Not a pure module */
