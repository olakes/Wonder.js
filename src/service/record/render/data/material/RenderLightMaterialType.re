type lightMaterialRecord = {
  shaderIndices: Js.Typed_array.Uint32Array.t,
  diffuseColors: Js.Typed_array.Float32Array.t,
  specularColors: Js.Typed_array.Float32Array.t,
  shininess: Js.Typed_array.Float32Array.t,
  textureIndices: Js.Typed_array.Uint32Array.t,
  diffuseMapUnits: Js.Typed_array.Uint8Array.t,
  specularMapUnits: Js.Typed_array.Uint8Array.t
};