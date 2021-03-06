open StateDataMainType;

open CustomGeometryType;

open ReallocatedPointsGeometryService;

open RecordCustomGeometryMainService;

open TypeArrayService;

open Js.Typed_array;

let getTexCoords =
  [@bs]
  (
    (index, state) => {
      let {texCoords, texCoordsInfos} = getRecord(state);
      getFloat32PointData(
        BufferCustomGeometryService.getInfoIndex(index),
        texCoords,
        texCoordsInfos
      )
    }
  );

let setTexCoordsByTypeArray = (index: int, data: Float32Array.t, state) => {
  let {texCoordsInfos, texCoords, texCoordsOffset} as record = getRecord(state);
  record.texCoordsOffset =
    setFloat32PointData(
      (
        BufferCustomGeometryService.getInfoIndex(index),
        texCoordsInfos,
        texCoordsOffset,
        Float32Array.length(data)
      ),
      fillFloat32ArrayWithOffset(texCoords, data)
    );
  state
};