open Js.Typed_array;

open TypeArrayPoolType;

let getFloat32ArrayPoolMap = record => record.float32ArrayPoolMap;

let getUint16ArrayPoolMap = record => record.uint16ArrayPoolMap;

let _addTypeArrayToPool = (count, typeArray, maxSize, map) =>
  switch (map |> WonderCommonlib.SparseMapService.get(count)) {
  | Some(arr) =>
    switch (arr |> Js.Array.length) {
    | len when len >= maxSize => map
    | _ =>
      arr |> Js.Array.push(typeArray) |> ignore;
      map;
    }
  | None => map |> WonderCommonlib.SparseMapService.set(count, [|typeArray|])
  };

let addFloat32TypeArrayToPool =
  (. typeArray: Float32Array.t, maxSize, map) =>
    _addTypeArrayToPool(
      typeArray |> Float32Array.length,
      typeArray,
      maxSize,
      map,
    );

let addUint16TypeArrayToPool =
  (. typeArray: Uint16Array.t, maxSize, map) =>
    _addTypeArrayToPool(
      typeArray |> Uint16Array.length,
      typeArray,
      maxSize,
      map,
    );

let _getTypeArrayFromPool = (count, map) =>
  switch (map |> WonderCommonlib.SparseMapService.get(count)) {
  | None => None
  | Some(arr) =>
    switch (arr |> Js.Array.length) {
    | 0 => None
    | _ => arr |> Js.Array.pop
    }
  };

let getFloat32TypeArrayFromPool =
  (. count, record) =>
    _getTypeArrayFromPool(count, record |> getFloat32ArrayPoolMap);

let getUint16TypeArrayFromPool =
  (. count, record) =>
    _getTypeArrayFromPool(count, record |> getUint16ArrayPoolMap);

let _addAllTypeArrayToPool =
    (typeArrayMap, maxSize, map, addTypeArrayToPoolFunc) => {
  typeArrayMap
  |> SparseMapService.forEachValid((. typeArray) =>
       addTypeArrayToPoolFunc(. typeArray, maxSize, map) |> ignore
     );
  map;
};

let addAllFloat32TypeArrayToPool =
    (typeArrayMap: array(Float32Array.t), maxSize, map) =>
  _addAllTypeArrayToPool(
    typeArrayMap,
    maxSize,
    map,
    addFloat32TypeArrayToPool,
  );

let addAllUint16TypeArrayToPool =
    (typeArrayMap: array(Uint16Array.t), maxSize, map) =>
  _addAllTypeArrayToPool(
    typeArrayMap,
    maxSize,
    map,
    addUint16TypeArrayToPool,
  );