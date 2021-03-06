// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Wonder_jest = require("wonder-bs-jest/lib/js/src/wonder_jest.js");
var GameObjectAPI$Wonderjs = require("../../../../src/api/GameObjectAPI.js");
var MeshRendererAPI$Wonderjs = require("../../../../src/api/MeshRendererAPI.js");
var BasicMaterialAPI$Wonderjs = require("../../../../src/api/material/BasicMaterialAPI.js");
var LightMaterialAPI$Wonderjs = require("../../../../src/api/material/LightMaterialAPI.js");
var RenderArrayMeshRendererService$Wonderjs = require("../../../../src/service/record/main/meshRenderer/RenderArrayMeshRendererService.js");

function getBasicMaterialRenderArray(state) {
  return RenderArrayMeshRendererService$Wonderjs.getBasicMaterialRenderArray(state[/* meshRendererRecord */25]);
}

function getLightMaterialRenderArray(state) {
  return RenderArrayMeshRendererService$Wonderjs.getLightMaterialRenderArray(state[/* meshRendererRecord */25]);
}

function isMeshRenderer(meshRenderer) {
  return Curry._2(Wonder_jest.Expect[/* Operators */23][/* >= */2], Wonder_jest.Expect[/* expect */0](meshRenderer), 0);
}

function createBasicMaterialGameObject(state) {
  var match = MeshRendererAPI$Wonderjs.createMeshRenderer(state);
  var meshRenderer = match[1];
  var match$1 = GameObjectAPI$Wonderjs.createGameObject(match[0]);
  var gameObject = match$1[1];
  var match$2 = BasicMaterialAPI$Wonderjs.createBasicMaterial(match$1[0]);
  var state$1 = GameObjectAPI$Wonderjs.addGameObjectBasicMaterialComponent(gameObject, match$2[1], match$2[0]);
  var state$2 = GameObjectAPI$Wonderjs.addGameObjectMeshRendererComponent(gameObject, meshRenderer, state$1);
  return /* tuple */[
          state$2,
          gameObject,
          meshRenderer
        ];
}

function createLightMaterialGameObject(state) {
  var match = MeshRendererAPI$Wonderjs.createMeshRenderer(state);
  var meshRenderer = match[1];
  var match$1 = GameObjectAPI$Wonderjs.createGameObject(match[0]);
  var gameObject = match$1[1];
  var match$2 = LightMaterialAPI$Wonderjs.createLightMaterial(match$1[0]);
  var state$1 = GameObjectAPI$Wonderjs.addGameObjectLightMaterialComponent(gameObject, match$2[1], match$2[0]);
  var state$2 = GameObjectAPI$Wonderjs.addGameObjectMeshRendererComponent(gameObject, meshRenderer, state$1);
  return /* tuple */[
          state$2,
          gameObject,
          meshRenderer
        ];
}

function getMeshRendererRecord(state) {
  return state[/* meshRendererRecord */25];
}

exports.getBasicMaterialRenderArray = getBasicMaterialRenderArray;
exports.getLightMaterialRenderArray = getLightMaterialRenderArray;
exports.isMeshRenderer = isMeshRenderer;
exports.createBasicMaterialGameObject = createBasicMaterialGameObject;
exports.createLightMaterialGameObject = createLightMaterialGameObject;
exports.getMeshRendererRecord = getMeshRendererRecord;
/* Wonder_jest Not a pure module */
