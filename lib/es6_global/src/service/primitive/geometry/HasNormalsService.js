// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as BufferCustomGeometryService$Wonderjs from "../../record/main/geometry/custom/BufferCustomGeometryService.js";
import * as ReallocatedPointsGeometryService$Wonderjs from "./ReallocatedPointsGeometryService.js";

function hasNormals(index, normalsInfos) {
  return ReallocatedPointsGeometryService$Wonderjs.hasPointData(BufferCustomGeometryService$Wonderjs.getInfoIndex(index), normalsInfos);
}

export {
  hasNormals ,
  
}
/* BufferCustomGeometryService-Wonderjs Not a pure module */
