// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as AssembleWDSystem$Wonderjs from "../../asset/assemble/AssembleWDSystem.js";
import * as ConvertGLTFSystem$Wonderjs from "../../asset/converter/ConvertGLTFSystem.js";

var assembleWD = AssembleWDSystem$Wonderjs.assemble;

function assembleGLTF(gltfFileContent, state) {
  return AssembleWDSystem$Wonderjs.assemble(ConvertGLTFSystem$Wonderjs.convert(gltfFileContent), state);
}

export {
  assembleWD ,
  assembleGLTF ,
  
}
/* AssembleWDSystem-Wonderjs Not a pure module */
