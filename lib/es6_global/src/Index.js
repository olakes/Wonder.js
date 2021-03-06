// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as JobAPI$Wonderjs from "./api/JobAPI.js";
import * as SceneAPI$Wonderjs from "./api/SceneAPI.js";
import * as StateAPI$Wonderjs from "./api/StateAPI.js";
import * as DirectorAPI$Wonderjs from "./api/DirectorAPI.js";
import * as ConverterAPI$Wonderjs from "./api/asset/ConverterAPI.js";
import * as SparseMapAPI$Wonderjs from "./api/structure/SparseMapAPI.js";
import * as TransformAPI$Wonderjs from "./api/TransformAPI.js";
import * as AssembleWDAPI$Wonderjs from "./api/asset/AssembleWDAPI.js";
import * as GameObjectAPI$Wonderjs from "./api/GameObjectAPI.js";
import * as PointLightAPI$Wonderjs from "./api/light/PointLightAPI.js";
import * as BoxGeometryAPI$Wonderjs from "./api/geometry/BoxGeometryAPI.js";
import * as MeshRendererAPI$Wonderjs from "./api/MeshRendererAPI.js";
import * as BasicMaterialAPI$Wonderjs from "./api/material/BasicMaterialAPI.js";
import * as LightMaterialAPI$Wonderjs from "./api/material/LightMaterialAPI.js";
import * as LoaderManagerAPI$Wonderjs from "./api/asset/LoaderManagerAPI.js";
import * as CustomGeometryAPI$Wonderjs from "./api/geometry/CustomGeometryAPI.js";
import * as DirectionLightAPI$Wonderjs from "./api/light/DirectionLightAPI.js";
import * as SourceInstanceAPI$Wonderjs from "./api/SourceInstanceAPI.js";
import * as TimeControllerAPI$Wonderjs from "./api/TimeControllerAPI.js";
import * as BasicCameraViewAPI$Wonderjs from "./api/BasicCameraViewAPI.js";
import * as BasicSourceTextureAPI$Wonderjs from "./api/texture/BasicSourceTextureAPI.js";
import * as GenerateSceneGraphAPI$Wonderjs from "./api/asset/GenerateSceneGraphAPI.js";
import * as PerspectiveCameraProjectionAPI$Wonderjs from "./api/PerspectiveCameraProjectionAPI.js";
import * as ArrayBufferViewSourceTextureAPI$Wonderjs from "./api/texture/ArrayBufferViewSourceTextureAPI.js";

var assembleGLTF = AssembleWDAPI$Wonderjs.assembleGLTF;

var assembleWD = AssembleWDAPI$Wonderjs.assembleWD;

var convertGLTFToWD = ConverterAPI$Wonderjs.convertGLTFToWD;

var generateEmbededWD = GenerateSceneGraphAPI$Wonderjs.generateEmbededWD;

var generateEmbededGLTF = GenerateSceneGraphAPI$Wonderjs.generateEmbededGLTF;

var loadWD = LoaderManagerAPI$Wonderjs.loadWD;

var loadToData = LoaderManagerAPI$Wonderjs.loadToData;

var load = LoaderManagerAPI$Wonderjs.load;

var unsafeGetBoxGeometryGameObject = BoxGeometryAPI$Wonderjs.unsafeGetBoxGeometryGameObject;

var getBoxGeometryIndices = BoxGeometryAPI$Wonderjs.getBoxGeometryIndices;

var getBoxGeometryNormals = BoxGeometryAPI$Wonderjs.getBoxGeometryNormals;

var getBoxGeometryTexCoords = BoxGeometryAPI$Wonderjs.getBoxGeometryTexCoords;

var getBoxGeometryVertices = BoxGeometryAPI$Wonderjs.getBoxGeometryVertices;

var getBoxGeometryDrawMode = BoxGeometryAPI$Wonderjs.getBoxGeometryDrawMode;

var createBoxGeometry = BoxGeometryAPI$Wonderjs.createBoxGeometry;

var unsafeGetCustomGeometryGameObject = CustomGeometryAPI$Wonderjs.unsafeGetCustomGeometryGameObject;

var setCustomGeometryIndices = CustomGeometryAPI$Wonderjs.setCustomGeometryIndices;

var getCustomGeometryIndices = CustomGeometryAPI$Wonderjs.getCustomGeometryIndices;

var setCustomGeometryNormals = CustomGeometryAPI$Wonderjs.setCustomGeometryNormals;

var getCustomGeometryNormals = CustomGeometryAPI$Wonderjs.getCustomGeometryNormals;

var setCustomGeometryTexCoords = CustomGeometryAPI$Wonderjs.setCustomGeometryTexCoords;

var getCustomGeometryTexCoords = CustomGeometryAPI$Wonderjs.getCustomGeometryTexCoords;

var setCustomGeometryVertices = CustomGeometryAPI$Wonderjs.setCustomGeometryVertices;

var getCustomGeometryVertices = CustomGeometryAPI$Wonderjs.getCustomGeometryVertices;

var getCustomGeometryDrawMode = CustomGeometryAPI$Wonderjs.getCustomGeometryDrawMode;

var createCustomGeometry = CustomGeometryAPI$Wonderjs.createCustomGeometry;

var setDirectionLightIntensity = DirectionLightAPI$Wonderjs.setDirectionLightIntensity;

var getDirectionLightIntensity = DirectionLightAPI$Wonderjs.getDirectionLightIntensity;

var setDirectionLightColor = DirectionLightAPI$Wonderjs.setDirectionLightColor;

var getDirectionLightColor = DirectionLightAPI$Wonderjs.getDirectionLightColor;

var unsafeGetDirectionLightGameObject = DirectionLightAPI$Wonderjs.unsafeGetDirectionLightGameObject;

var createDirectionLight = DirectionLightAPI$Wonderjs.createDirectionLight;

var setPointLightRangeLevel = PointLightAPI$Wonderjs.setPointLightRangeLevel;

var setPointLightRange = PointLightAPI$Wonderjs.setPointLightRange;

var getPointLightRange = PointLightAPI$Wonderjs.getPointLightRange;

var setPointLightQuadratic = PointLightAPI$Wonderjs.setPointLightQuadratic;

var getPointLightQuadratic = PointLightAPI$Wonderjs.getPointLightQuadratic;

var setPointLightLinear = PointLightAPI$Wonderjs.setPointLightLinear;

var getPointLightLinear = PointLightAPI$Wonderjs.getPointLightLinear;

var setPointLightConstant = PointLightAPI$Wonderjs.setPointLightConstant;

var getPointLightConstant = PointLightAPI$Wonderjs.getPointLightConstant;

var setPointLightIntensity = PointLightAPI$Wonderjs.setPointLightIntensity;

var getPointLightIntensity = PointLightAPI$Wonderjs.getPointLightIntensity;

var setPointLightColor = PointLightAPI$Wonderjs.setPointLightColor;

var getPointLightColor = PointLightAPI$Wonderjs.getPointLightColor;

var unsafeGetPointLightGameObject = PointLightAPI$Wonderjs.unsafeGetPointLightGameObject;

var createPointLight = PointLightAPI$Wonderjs.createPointLight;

var hasBasicMaterialMap = BasicMaterialAPI$Wonderjs.hasBasicMaterialMap;

var setBasicMaterialMap = BasicMaterialAPI$Wonderjs.setBasicMaterialMap;

var unsafeGetBasicMaterialMap = BasicMaterialAPI$Wonderjs.unsafeGetBasicMaterialMap;

var setBasicMaterialColor = BasicMaterialAPI$Wonderjs.setBasicMaterialColor;

var getBasicMaterialColor = BasicMaterialAPI$Wonderjs.getBasicMaterialColor;

var unsafeGetBasicMaterialGameObject = BasicMaterialAPI$Wonderjs.unsafeGetBasicMaterialGameObject;

var createBasicMaterial = BasicMaterialAPI$Wonderjs.createBasicMaterial;

var setLightMaterialName = LightMaterialAPI$Wonderjs.setLightMaterialName;

var unsafeGetLightMaterialName = LightMaterialAPI$Wonderjs.unsafeGetLightMaterialName;

var hasLightMaterialSpecularMap = LightMaterialAPI$Wonderjs.hasLightMaterialSpecularMap;

var setLightMaterialSpecularMap = LightMaterialAPI$Wonderjs.setLightMaterialSpecularMap;

var unsafeGetLightMaterialSpecularMap = LightMaterialAPI$Wonderjs.unsafeGetLightMaterialSpecularMap;

var hasLightMaterialDiffuseMap = LightMaterialAPI$Wonderjs.hasLightMaterialDiffuseMap;

var setLightMaterialDiffuseMap = LightMaterialAPI$Wonderjs.setLightMaterialDiffuseMap;

var unsafeGetLightMaterialDiffuseMap = LightMaterialAPI$Wonderjs.unsafeGetLightMaterialDiffuseMap;

var setLightMaterialShininess = LightMaterialAPI$Wonderjs.setLightMaterialShininess;

var getLightMaterialShininess = LightMaterialAPI$Wonderjs.getLightMaterialShininess;

var setLightMaterialSpecularColor = LightMaterialAPI$Wonderjs.setLightMaterialSpecularColor;

var getLightMaterialSpecularColor = LightMaterialAPI$Wonderjs.getLightMaterialSpecularColor;

var setLightMaterialDiffuseColor = LightMaterialAPI$Wonderjs.setLightMaterialDiffuseColor;

var getLightMaterialDiffuseColor = LightMaterialAPI$Wonderjs.getLightMaterialDiffuseColor;

var unsafeGetLightMaterialGameObject = LightMaterialAPI$Wonderjs.unsafeGetLightMaterialGameObject;

var createLightMaterial = LightMaterialAPI$Wonderjs.createLightMaterial;

var setSparseMapValue = SparseMapAPI$Wonderjs.setSparseMapValue;

var getSparseMapValue = SparseMapAPI$Wonderjs.getSparseMapValue;

var unsafeGetSparseMapValue = SparseMapAPI$Wonderjs.unsafeGetSparseMapValue;

var createSparseMap = SparseMapAPI$Wonderjs.createSparseMap;

var setArrayBufferViewSourceTextureHeight = ArrayBufferViewSourceTextureAPI$Wonderjs.setArrayBufferViewSourceTextureHeight;

var setArrayBufferViewSourceTextureWidth = ArrayBufferViewSourceTextureAPI$Wonderjs.setArrayBufferViewSourceTextureWidth;

var setArrayBufferViewSourceTextureFlipY = ArrayBufferViewSourceTextureAPI$Wonderjs.setArrayBufferViewSourceTextureFlipY;

var getArrayBufferViewSourceTextureFlipY = ArrayBufferViewSourceTextureAPI$Wonderjs.getArrayBufferViewSourceTextureFlipY;

var setArrayBufferViewSourceTextureType = ArrayBufferViewSourceTextureAPI$Wonderjs.setArrayBufferViewSourceTextureType;

var getArrayBufferViewSourceTextureType = ArrayBufferViewSourceTextureAPI$Wonderjs.getArrayBufferViewSourceTextureType;

var setArrayBufferViewSourceTextureFormat = ArrayBufferViewSourceTextureAPI$Wonderjs.setArrayBufferViewSourceTextureFormat;

var getArrayBufferViewSourceTextureFormat = ArrayBufferViewSourceTextureAPI$Wonderjs.getArrayBufferViewSourceTextureFormat;

var setArrayBufferViewSourceTextureMinFilter = ArrayBufferViewSourceTextureAPI$Wonderjs.setArrayBufferViewSourceTextureMinFilter;

var getArrayBufferViewSourceTextureMinFilter = ArrayBufferViewSourceTextureAPI$Wonderjs.getArrayBufferViewSourceTextureMinFilter;

var setArrayBufferViewSourceTextureMagFilter = ArrayBufferViewSourceTextureAPI$Wonderjs.setArrayBufferViewSourceTextureMagFilter;

var getArrayBufferViewSourceTextureMagFilter = ArrayBufferViewSourceTextureAPI$Wonderjs.getArrayBufferViewSourceTextureMagFilter;

var setArrayBufferViewSourceTextureWrapT = ArrayBufferViewSourceTextureAPI$Wonderjs.setArrayBufferViewSourceTextureWrapT;

var getArrayBufferViewSourceTextureWrapT = ArrayBufferViewSourceTextureAPI$Wonderjs.getArrayBufferViewSourceTextureWrapT;

var setArrayBufferViewSourceTextureWrapS = ArrayBufferViewSourceTextureAPI$Wonderjs.setArrayBufferViewSourceTextureWrapS;

var getArrayBufferViewSourceTextureWrapS = ArrayBufferViewSourceTextureAPI$Wonderjs.getArrayBufferViewSourceTextureWrapS;

var getArrayBufferViewSourceTextureHeight = ArrayBufferViewSourceTextureAPI$Wonderjs.getArrayBufferViewSourceTextureHeight;

var getArrayBufferViewSourceTextureWidth = ArrayBufferViewSourceTextureAPI$Wonderjs.getArrayBufferViewSourceTextureWidth;

var setArrayBufferViewSourceTextureSource = ArrayBufferViewSourceTextureAPI$Wonderjs.setArrayBufferViewSourceTextureSource;

var unsafeGetArrayBufferViewSourceTextureSource = ArrayBufferViewSourceTextureAPI$Wonderjs.unsafeGetArrayBufferViewSourceTextureSource;

var createArrayBufferViewSourceTexture = ArrayBufferViewSourceTextureAPI$Wonderjs.createArrayBufferViewSourceTexture;

var setBasicSourceTextureName = BasicSourceTextureAPI$Wonderjs.setBasicSourceTextureName;

var unsafeGetBasicSourceTextureName = BasicSourceTextureAPI$Wonderjs.unsafeGetBasicSourceTextureName;

var setBasicSourceTextureFlipY = BasicSourceTextureAPI$Wonderjs.setBasicSourceTextureFlipY;

var getBasicSourceTextureFlipY = BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureFlipY;

var setBasicSourceTextureType = BasicSourceTextureAPI$Wonderjs.setBasicSourceTextureType;

var getBasicSourceTextureType = BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureType;

var setBasicSourceTextureFormat = BasicSourceTextureAPI$Wonderjs.setBasicSourceTextureFormat;

var getBasicSourceTextureFormat = BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureFormat;

var setBasicSourceTextureMinFilter = BasicSourceTextureAPI$Wonderjs.setBasicSourceTextureMinFilter;

var getBasicSourceTextureMinFilter = BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureMinFilter;

var setBasicSourceTextureMagFilter = BasicSourceTextureAPI$Wonderjs.setBasicSourceTextureMagFilter;

var getBasicSourceTextureMagFilter = BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureMagFilter;

var setBasicSourceTextureWrapT = BasicSourceTextureAPI$Wonderjs.setBasicSourceTextureWrapT;

var getBasicSourceTextureWrapT = BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureWrapT;

var setBasicSourceTextureWrapS = BasicSourceTextureAPI$Wonderjs.setBasicSourceTextureWrapS;

var getBasicSourceTextureWrapS = BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureWrapS;

var getBasicSourceTextureHeight = BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureHeight;

var getBasicSourceTextureWidth = BasicSourceTextureAPI$Wonderjs.getBasicSourceTextureWidth;

var setBasicSourceTextureSource = BasicSourceTextureAPI$Wonderjs.setBasicSourceTextureSource;

var unsafeGetBasicSourceTextureSource = BasicSourceTextureAPI$Wonderjs.unsafeGetBasicSourceTextureSource;

var createBasicSourceTexture = BasicSourceTextureAPI$Wonderjs.createBasicSourceTexture;

var getBasicCameraViewWorldToCameraMatrix = BasicCameraViewAPI$Wonderjs.getBasicCameraViewWorldToCameraMatrix;

var unsafeGetGameObjectBasicCameraView = BasicCameraViewAPI$Wonderjs.unsafeGetGameObjectBasicCameraView;

var createBasicCameraView = BasicCameraViewAPI$Wonderjs.createBasicCameraView;

var startDirector = DirectorAPI$Wonderjs.startDirector;

var loopBody = DirectorAPI$Wonderjs.loopBody;

var initDirector = DirectorAPI$Wonderjs.initDirector;

var setGameObjectName = GameObjectAPI$Wonderjs.setGameObjectName;

var unsafeGetGameObjectName = GameObjectAPI$Wonderjs.unsafeGetGameObjectName;

var cloneGameObject = GameObjectAPI$Wonderjs.cloneGameObject;

var batchDisposeGameObjectKeepOrder = GameObjectAPI$Wonderjs.batchDisposeGameObjectKeepOrder;

var batchDisposeGameObject = GameObjectAPI$Wonderjs.batchDisposeGameObject;

var initGameObject = GameObjectAPI$Wonderjs.initGameObject;

var disposeGameObjectKeepOrder = GameObjectAPI$Wonderjs.disposeGameObjectKeepOrder;

var disposeGameObject = GameObjectAPI$Wonderjs.disposeGameObject;

var isGameObjectAlive = GameObjectAPI$Wonderjs.isGameObjectAlive;

var disposeGameObjectObjectInstanceComponent = GameObjectAPI$Wonderjs.disposeGameObjectObjectInstanceComponent;

var unsafeGetGameObjectObjectInstanceComponent = GameObjectAPI$Wonderjs.unsafeGetGameObjectObjectInstanceComponent;

var addGameObjectObjectInstanceComponent = GameObjectAPI$Wonderjs.addGameObjectObjectInstanceComponent;

var disposeGameObjectSourceInstanceComponent = GameObjectAPI$Wonderjs.disposeGameObjectSourceInstanceComponent;

var hasGameObjectSourceInstanceComponent = GameObjectAPI$Wonderjs.hasGameObjectSourceInstanceComponent;

var unsafeGetGameObjectSourceInstanceComponent = GameObjectAPI$Wonderjs.unsafeGetGameObjectSourceInstanceComponent;

var addGameObjectSourceInstanceComponent = GameObjectAPI$Wonderjs.addGameObjectSourceInstanceComponent;

var hasGameObjectPointLightComponent = GameObjectAPI$Wonderjs.hasGameObjectPointLightComponent;

var unsafeGetGameObjectPointLightComponent = GameObjectAPI$Wonderjs.unsafeGetGameObjectPointLightComponent;

var disposeGameObjectPointLightComponent = GameObjectAPI$Wonderjs.disposeGameObjectPointLightComponent;

var addGameObjectPointLightComponent = GameObjectAPI$Wonderjs.addGameObjectPointLightComponent;

var hasGameObjectDirectionLightComponent = GameObjectAPI$Wonderjs.hasGameObjectDirectionLightComponent;

var unsafeGetGameObjectDirectionLightComponent = GameObjectAPI$Wonderjs.unsafeGetGameObjectDirectionLightComponent;

var disposeGameObjectDirectionLightComponent = GameObjectAPI$Wonderjs.disposeGameObjectDirectionLightComponent;

var addGameObjectDirectionLightComponent = GameObjectAPI$Wonderjs.addGameObjectDirectionLightComponent;

var hasGameObjectMeshRendererComponent = GameObjectAPI$Wonderjs.hasGameObjectMeshRendererComponent;

var unsafeGetGameObjectMeshRendererComponent = GameObjectAPI$Wonderjs.unsafeGetGameObjectMeshRendererComponent;

var disposeGameObjectMeshRendererComponent = GameObjectAPI$Wonderjs.disposeGameObjectMeshRendererComponent;

var addGameObjectMeshRendererComponent = GameObjectAPI$Wonderjs.addGameObjectMeshRendererComponent;

var hasGameObjectLightMaterialComponent = GameObjectAPI$Wonderjs.hasGameObjectLightMaterialComponent;

var unsafeGetGameObjectLightMaterialComponent = GameObjectAPI$Wonderjs.unsafeGetGameObjectLightMaterialComponent;

var disposeGameObjectLightMaterialComponent = GameObjectAPI$Wonderjs.disposeGameObjectLightMaterialComponent;

var addGameObjectLightMaterialComponent = GameObjectAPI$Wonderjs.addGameObjectLightMaterialComponent;

var hasGameObjectBasicMaterialComponent = GameObjectAPI$Wonderjs.hasGameObjectBasicMaterialComponent;

var unsafeGetGameObjectBasicMaterialComponent = GameObjectAPI$Wonderjs.unsafeGetGameObjectBasicMaterialComponent;

var disposeGameObjectBasicMaterialComponent = GameObjectAPI$Wonderjs.disposeGameObjectBasicMaterialComponent;

var addGameObjectBasicMaterialComponent = GameObjectAPI$Wonderjs.addGameObjectBasicMaterialComponent;

var hasGameObjectGeometryComponent = GameObjectAPI$Wonderjs.hasGameObjectGeometryComponent;

var unsafeGetGameObjectGeometryComponent = GameObjectAPI$Wonderjs.unsafeGetGameObjectGeometryComponent;

var disposeGameObjectCustomGeometryComponent = GameObjectAPI$Wonderjs.disposeGameObjectCustomGeometryComponent;

var addGameObjectCustomGeometryComponent = GameObjectAPI$Wonderjs.addGameObjectCustomGeometryComponent;

var hasGameObjectBoxGeometryComponent = GameObjectAPI$Wonderjs.hasGameObjectBoxGeometryComponent;

var disposeGameObjectBoxGeometryComponent = GameObjectAPI$Wonderjs.disposeGameObjectBoxGeometryComponent;

var addGameObjectBoxGeometryComponent = GameObjectAPI$Wonderjs.addGameObjectBoxGeometryComponent;

var hasGameObjectTransformComponent = GameObjectAPI$Wonderjs.hasGameObjectTransformComponent;

var unsafeGetGameObjectTransformComponent = GameObjectAPI$Wonderjs.unsafeGetGameObjectTransformComponent;

var disposeGameObjectTransformComponent = GameObjectAPI$Wonderjs.disposeGameObjectTransformComponent;

var addGameObjectTransformComponent = GameObjectAPI$Wonderjs.addGameObjectTransformComponent;

var hasGameObjectPerspectiveCameraProjectionComponent = GameObjectAPI$Wonderjs.hasGameObjectPerspectiveCameraProjectionComponent;

var unsafeGetGameObjectPerspectiveCameraProjectionComponent = GameObjectAPI$Wonderjs.unsafeGetGameObjectPerspectiveCameraProjectionComponent;

var disposeGameObjectPerspectiveCameraProjectionComponent = GameObjectAPI$Wonderjs.disposeGameObjectPerspectiveCameraProjectionComponent;

var addGameObjectPerspectiveCameraProjectionComponent = GameObjectAPI$Wonderjs.addGameObjectPerspectiveCameraProjectionComponent;

var hasGameObjectBasicCameraViewComponent = GameObjectAPI$Wonderjs.hasGameObjectBasicCameraViewComponent;

var unsafeGetGameObjectBasicCameraViewComponent = GameObjectAPI$Wonderjs.unsafeGetGameObjectBasicCameraViewComponent;

var disposeGameObjectBasicCameraViewComponent = GameObjectAPI$Wonderjs.disposeGameObjectBasicCameraViewComponent;

var addGameObjectBasicCameraViewComponent = GameObjectAPI$Wonderjs.addGameObjectBasicCameraViewComponent;

var createGameObject = GameObjectAPI$Wonderjs.createGameObject;

var removeWorkerMainLoopJob = JobAPI$Wonderjs.removeWorkerMainLoopJob;

var addWorkerMainLoopJob = JobAPI$Wonderjs.addWorkerMainLoopJob;

var removeWorkerMainInitJob = JobAPI$Wonderjs.removeWorkerMainInitJob;

var addWorkerMainInitJob = JobAPI$Wonderjs.addWorkerMainInitJob;

var removeNoWorkerLoopJob = JobAPI$Wonderjs.removeNoWorkerLoopJob;

var removeNoWorkerInitJob = JobAPI$Wonderjs.removeNoWorkerInitJob;

var addNoWorkerLoopJob = JobAPI$Wonderjs.addNoWorkerLoopJob;

var addNoWorkerInitJob = JobAPI$Wonderjs.addNoWorkerInitJob;

var unsafeGetMeshRendererGameObject = MeshRendererAPI$Wonderjs.unsafeGetMeshRendererGameObject;

var createMeshRenderer = MeshRendererAPI$Wonderjs.createMeshRenderer;

var setPerspectiveCameraFar = PerspectiveCameraProjectionAPI$Wonderjs.setPerspectiveCameraFar;

var unsafeGetPerspectiveCameraFar = PerspectiveCameraProjectionAPI$Wonderjs.unsafeGetPerspectiveCameraFar;

var setPerspectiveCameraNear = PerspectiveCameraProjectionAPI$Wonderjs.setPerspectiveCameraNear;

var unsafeGetPerspectiveCameraNear = PerspectiveCameraProjectionAPI$Wonderjs.unsafeGetPerspectiveCameraNear;

var setPerspectiveCameraAspect = PerspectiveCameraProjectionAPI$Wonderjs.setPerspectiveCameraAspect;

var unsafeGetPerspectiveCameraAspect = PerspectiveCameraProjectionAPI$Wonderjs.unsafeGetPerspectiveCameraAspect;

var setPerspectiveCameraFovy = PerspectiveCameraProjectionAPI$Wonderjs.setPerspectiveCameraFovy;

var unsafeGetPerspectiveCameraFovy = PerspectiveCameraProjectionAPI$Wonderjs.unsafeGetPerspectiveCameraFovy;

var unsafeGetPerspectiveCameraProjectionGameObject = PerspectiveCameraProjectionAPI$Wonderjs.unsafeGetPerspectiveCameraProjectionGameObject;

var unsafeGetPerspectiveCameraProjectionPMatrix = PerspectiveCameraProjectionAPI$Wonderjs.unsafeGetPerspectiveCameraProjectionPMatrix;

var createPerspectiveCameraProjection = PerspectiveCameraProjectionAPI$Wonderjs.createPerspectiveCameraProjection;

var setAmbientLightColor = SceneAPI$Wonderjs.setAmbientLightColor;

var getAmbientLightColor = SceneAPI$Wonderjs.getAmbientLightColor;

var setCurrentCameraGameObject = SceneAPI$Wonderjs.setCurrentCameraGameObject;

var getCurrentCameraGameObject = SceneAPI$Wonderjs.getCurrentCameraGameObject;

var markSourceInstanceModelMatrixIsStatic = SourceInstanceAPI$Wonderjs.markSourceInstanceModelMatrixIsStatic;

var getSourceInstanceObjectInstanceTransformArray = SourceInstanceAPI$Wonderjs.getSourceInstanceObjectInstanceTransformArray;

var createObjectInstanceGameObject = SourceInstanceAPI$Wonderjs.createObjectInstanceGameObject;

var unsafeGetSourceInstanceGameObject = SourceInstanceAPI$Wonderjs.unsafeGetSourceInstanceGameObject;

var createSourceInstance = SourceInstanceAPI$Wonderjs.createSourceInstance;

var setIsDebug = StateAPI$Wonderjs.setIsDebug;

var setStateToData = StateAPI$Wonderjs.setStateToData;

var setState = StateAPI$Wonderjs.setState;

var createState = StateAPI$Wonderjs.createState;

var getStateFromData = StateAPI$Wonderjs.getStateFromData;

var unsafeGetState = StateAPI$Wonderjs.unsafeGetState;

var createStateData = StateAPI$Wonderjs.createStateData;

var getStateData = StateAPI$Wonderjs.getStateData;

var restoreState = StateAPI$Wonderjs.restoreState;

var deepCopyForRestore = StateAPI$Wonderjs.deepCopyForRestore;

var getFps = TimeControllerAPI$Wonderjs.getFps;

var getGameTime = TimeControllerAPI$Wonderjs.getGameTime;

var setTransformScale = TransformAPI$Wonderjs.setTransformScale;

var getTransformScale = TransformAPI$Wonderjs.getTransformScale;

var setTransformLocalScale = TransformAPI$Wonderjs.setTransformLocalScale;

var getTransformLocalScale = TransformAPI$Wonderjs.getTransformLocalScale;

var setTransformRotation = TransformAPI$Wonderjs.setTransformRotation;

var getTransformRotation = TransformAPI$Wonderjs.getTransformRotation;

var setTransformLocalRotation = TransformAPI$Wonderjs.setTransformLocalRotation;

var getTransformLocalRotation = TransformAPI$Wonderjs.getTransformLocalRotation;

var setTransformPosition = TransformAPI$Wonderjs.setTransformPosition;

var getTransformPosition = TransformAPI$Wonderjs.getTransformPosition;

var setTransformLocalPosition = TransformAPI$Wonderjs.setTransformLocalPosition;

var getTransformLocalPosition = TransformAPI$Wonderjs.getTransformLocalPosition;

var unsafeGetTransformChildren = TransformAPI$Wonderjs.unsafeGetTransformChildren;

var setTransformParentKeepOrder = TransformAPI$Wonderjs.setTransformParentKeepOrder;

var setTransformParent = TransformAPI$Wonderjs.setTransformParent;

var unsafeGetTransformParent = TransformAPI$Wonderjs.unsafeGetTransformParent;

var unsafeGetTransformGameObject = TransformAPI$Wonderjs.unsafeGetTransformGameObject;

var createTransform = TransformAPI$Wonderjs.createTransform;

export {
  assembleGLTF ,
  assembleWD ,
  convertGLTFToWD ,
  generateEmbededWD ,
  generateEmbededGLTF ,
  loadWD ,
  loadToData ,
  load ,
  unsafeGetBoxGeometryGameObject ,
  getBoxGeometryIndices ,
  getBoxGeometryNormals ,
  getBoxGeometryTexCoords ,
  getBoxGeometryVertices ,
  getBoxGeometryDrawMode ,
  createBoxGeometry ,
  unsafeGetCustomGeometryGameObject ,
  setCustomGeometryIndices ,
  getCustomGeometryIndices ,
  setCustomGeometryNormals ,
  getCustomGeometryNormals ,
  setCustomGeometryTexCoords ,
  getCustomGeometryTexCoords ,
  setCustomGeometryVertices ,
  getCustomGeometryVertices ,
  getCustomGeometryDrawMode ,
  createCustomGeometry ,
  setDirectionLightIntensity ,
  getDirectionLightIntensity ,
  setDirectionLightColor ,
  getDirectionLightColor ,
  unsafeGetDirectionLightGameObject ,
  createDirectionLight ,
  setPointLightRangeLevel ,
  setPointLightRange ,
  getPointLightRange ,
  setPointLightQuadratic ,
  getPointLightQuadratic ,
  setPointLightLinear ,
  getPointLightLinear ,
  setPointLightConstant ,
  getPointLightConstant ,
  setPointLightIntensity ,
  getPointLightIntensity ,
  setPointLightColor ,
  getPointLightColor ,
  unsafeGetPointLightGameObject ,
  createPointLight ,
  hasBasicMaterialMap ,
  setBasicMaterialMap ,
  unsafeGetBasicMaterialMap ,
  setBasicMaterialColor ,
  getBasicMaterialColor ,
  unsafeGetBasicMaterialGameObject ,
  createBasicMaterial ,
  setLightMaterialName ,
  unsafeGetLightMaterialName ,
  hasLightMaterialSpecularMap ,
  setLightMaterialSpecularMap ,
  unsafeGetLightMaterialSpecularMap ,
  hasLightMaterialDiffuseMap ,
  setLightMaterialDiffuseMap ,
  unsafeGetLightMaterialDiffuseMap ,
  setLightMaterialShininess ,
  getLightMaterialShininess ,
  setLightMaterialSpecularColor ,
  getLightMaterialSpecularColor ,
  setLightMaterialDiffuseColor ,
  getLightMaterialDiffuseColor ,
  unsafeGetLightMaterialGameObject ,
  createLightMaterial ,
  setSparseMapValue ,
  getSparseMapValue ,
  unsafeGetSparseMapValue ,
  createSparseMap ,
  setArrayBufferViewSourceTextureHeight ,
  setArrayBufferViewSourceTextureWidth ,
  setArrayBufferViewSourceTextureFlipY ,
  getArrayBufferViewSourceTextureFlipY ,
  setArrayBufferViewSourceTextureType ,
  getArrayBufferViewSourceTextureType ,
  setArrayBufferViewSourceTextureFormat ,
  getArrayBufferViewSourceTextureFormat ,
  setArrayBufferViewSourceTextureMinFilter ,
  getArrayBufferViewSourceTextureMinFilter ,
  setArrayBufferViewSourceTextureMagFilter ,
  getArrayBufferViewSourceTextureMagFilter ,
  setArrayBufferViewSourceTextureWrapT ,
  getArrayBufferViewSourceTextureWrapT ,
  setArrayBufferViewSourceTextureWrapS ,
  getArrayBufferViewSourceTextureWrapS ,
  getArrayBufferViewSourceTextureHeight ,
  getArrayBufferViewSourceTextureWidth ,
  setArrayBufferViewSourceTextureSource ,
  unsafeGetArrayBufferViewSourceTextureSource ,
  createArrayBufferViewSourceTexture ,
  setBasicSourceTextureName ,
  unsafeGetBasicSourceTextureName ,
  setBasicSourceTextureFlipY ,
  getBasicSourceTextureFlipY ,
  setBasicSourceTextureType ,
  getBasicSourceTextureType ,
  setBasicSourceTextureFormat ,
  getBasicSourceTextureFormat ,
  setBasicSourceTextureMinFilter ,
  getBasicSourceTextureMinFilter ,
  setBasicSourceTextureMagFilter ,
  getBasicSourceTextureMagFilter ,
  setBasicSourceTextureWrapT ,
  getBasicSourceTextureWrapT ,
  setBasicSourceTextureWrapS ,
  getBasicSourceTextureWrapS ,
  getBasicSourceTextureHeight ,
  getBasicSourceTextureWidth ,
  setBasicSourceTextureSource ,
  unsafeGetBasicSourceTextureSource ,
  createBasicSourceTexture ,
  getBasicCameraViewWorldToCameraMatrix ,
  unsafeGetGameObjectBasicCameraView ,
  createBasicCameraView ,
  startDirector ,
  loopBody ,
  initDirector ,
  setGameObjectName ,
  unsafeGetGameObjectName ,
  cloneGameObject ,
  batchDisposeGameObjectKeepOrder ,
  batchDisposeGameObject ,
  initGameObject ,
  disposeGameObjectKeepOrder ,
  disposeGameObject ,
  isGameObjectAlive ,
  disposeGameObjectObjectInstanceComponent ,
  unsafeGetGameObjectObjectInstanceComponent ,
  addGameObjectObjectInstanceComponent ,
  disposeGameObjectSourceInstanceComponent ,
  hasGameObjectSourceInstanceComponent ,
  unsafeGetGameObjectSourceInstanceComponent ,
  addGameObjectSourceInstanceComponent ,
  hasGameObjectPointLightComponent ,
  unsafeGetGameObjectPointLightComponent ,
  disposeGameObjectPointLightComponent ,
  addGameObjectPointLightComponent ,
  hasGameObjectDirectionLightComponent ,
  unsafeGetGameObjectDirectionLightComponent ,
  disposeGameObjectDirectionLightComponent ,
  addGameObjectDirectionLightComponent ,
  hasGameObjectMeshRendererComponent ,
  unsafeGetGameObjectMeshRendererComponent ,
  disposeGameObjectMeshRendererComponent ,
  addGameObjectMeshRendererComponent ,
  hasGameObjectLightMaterialComponent ,
  unsafeGetGameObjectLightMaterialComponent ,
  disposeGameObjectLightMaterialComponent ,
  addGameObjectLightMaterialComponent ,
  hasGameObjectBasicMaterialComponent ,
  unsafeGetGameObjectBasicMaterialComponent ,
  disposeGameObjectBasicMaterialComponent ,
  addGameObjectBasicMaterialComponent ,
  hasGameObjectGeometryComponent ,
  unsafeGetGameObjectGeometryComponent ,
  disposeGameObjectCustomGeometryComponent ,
  addGameObjectCustomGeometryComponent ,
  hasGameObjectBoxGeometryComponent ,
  disposeGameObjectBoxGeometryComponent ,
  addGameObjectBoxGeometryComponent ,
  hasGameObjectTransformComponent ,
  unsafeGetGameObjectTransformComponent ,
  disposeGameObjectTransformComponent ,
  addGameObjectTransformComponent ,
  hasGameObjectPerspectiveCameraProjectionComponent ,
  unsafeGetGameObjectPerspectiveCameraProjectionComponent ,
  disposeGameObjectPerspectiveCameraProjectionComponent ,
  addGameObjectPerspectiveCameraProjectionComponent ,
  hasGameObjectBasicCameraViewComponent ,
  unsafeGetGameObjectBasicCameraViewComponent ,
  disposeGameObjectBasicCameraViewComponent ,
  addGameObjectBasicCameraViewComponent ,
  createGameObject ,
  removeWorkerMainLoopJob ,
  addWorkerMainLoopJob ,
  removeWorkerMainInitJob ,
  addWorkerMainInitJob ,
  removeNoWorkerLoopJob ,
  removeNoWorkerInitJob ,
  addNoWorkerLoopJob ,
  addNoWorkerInitJob ,
  unsafeGetMeshRendererGameObject ,
  createMeshRenderer ,
  setPerspectiveCameraFar ,
  unsafeGetPerspectiveCameraFar ,
  setPerspectiveCameraNear ,
  unsafeGetPerspectiveCameraNear ,
  setPerspectiveCameraAspect ,
  unsafeGetPerspectiveCameraAspect ,
  setPerspectiveCameraFovy ,
  unsafeGetPerspectiveCameraFovy ,
  unsafeGetPerspectiveCameraProjectionGameObject ,
  unsafeGetPerspectiveCameraProjectionPMatrix ,
  createPerspectiveCameraProjection ,
  setAmbientLightColor ,
  getAmbientLightColor ,
  setCurrentCameraGameObject ,
  getCurrentCameraGameObject ,
  markSourceInstanceModelMatrixIsStatic ,
  getSourceInstanceObjectInstanceTransformArray ,
  createObjectInstanceGameObject ,
  unsafeGetSourceInstanceGameObject ,
  createSourceInstance ,
  setIsDebug ,
  setStateToData ,
  setState ,
  createState ,
  getStateFromData ,
  unsafeGetState ,
  createStateData ,
  getStateData ,
  restoreState ,
  deepCopyForRestore ,
  getFps ,
  getGameTime ,
  setTransformScale ,
  getTransformScale ,
  setTransformLocalScale ,
  getTransformLocalScale ,
  setTransformRotation ,
  getTransformRotation ,
  setTransformLocalRotation ,
  getTransformLocalRotation ,
  setTransformPosition ,
  getTransformPosition ,
  setTransformLocalPosition ,
  getTransformLocalPosition ,
  unsafeGetTransformChildren ,
  setTransformParentKeepOrder ,
  setTransformParent ,
  unsafeGetTransformParent ,
  unsafeGetTransformGameObject ,
  createTransform ,
  
}
/* JobAPI-Wonderjs Not a pure module */
