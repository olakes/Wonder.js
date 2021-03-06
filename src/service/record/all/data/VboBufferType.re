open GlType;

type bufferEnum =
  | VERTEX
  | NORMAL
  | TEXCOORD
  | INDEX
  | INSTANCE_NORMAL_MATRIX
  | INSTANCE_M_MATRIX;

type vboBufferRecord = {
  boxGeometryVertexBufferMap: WonderCommonlib.SparseMapService.t(buffer),
  boxGeometryTexCoordBufferMap: WonderCommonlib.SparseMapService.t(buffer),
  boxGeometryNormalBufferMap: WonderCommonlib.SparseMapService.t(buffer),
  boxGeometryElementArrayBufferMap:
    WonderCommonlib.SparseMapService.t(buffer),
  customGeometryVertexBufferMap: WonderCommonlib.SparseMapService.t(buffer),
  customGeometryTexCoordBufferMap: WonderCommonlib.SparseMapService.t(buffer),
  customGeometryNormalBufferMap: WonderCommonlib.SparseMapService.t(buffer),
  customGeometryElementArrayBufferMap:
    WonderCommonlib.SparseMapService.t(buffer),
  matrixInstanceBufferMap: WonderCommonlib.SparseMapService.t(buffer),
  vertexArrayBufferPool: array(buffer),
  elementArrayBufferPool: array(buffer),
  matrixInstanceBufferPool: array(buffer),
};

external intToBufferEnum : int => bufferEnum = "%identity";
