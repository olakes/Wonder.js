// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as BufferCustomGeometryService$Wonderjs from "../../../../record/main/geometry/custom/BufferCustomGeometryService.js";
import * as ReallocatedPointsGeometryService$Wonderjs from "../../../../primitive/geometry/ReallocatedPointsGeometryService.js";

function getTexCoords(index, param) {
  var customGeometryRecord = param[/* customGeometryRecord */6];
  return ReallocatedPointsGeometryService$Wonderjs.getFloat32PointData(BufferCustomGeometryService$Wonderjs.getInfoIndex(index), customGeometryRecord[/* texCoords */1], customGeometryRecord[/* texCoordsInfos */5]);
}

export {
  getTexCoords ,
  
}
/* BufferCustomGeometryService-Wonderjs Not a pure module */
