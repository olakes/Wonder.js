// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as IndexComponentService$Wonderjs from "../../../../primitive/component/IndexComponentService.js";

function create(record) {
  var disposedIndexArray = record[/* disposedIndexArray */7];
  var match = IndexComponentService$Wonderjs.generateIndex(record[/* index */0], disposedIndexArray);
  return /* tuple */[
          /* record */[
            /* index */match[1],
            /* vertices */record[/* vertices */1],
            /* texCoords */record[/* texCoords */2],
            /* normals */record[/* normals */3],
            /* indices */record[/* indices */4],
            /* gameObjectMap */record[/* gameObjectMap */5],
            /* groupCountMap */record[/* groupCountMap */6],
            /* disposedIndexArray */record[/* disposedIndexArray */7]
          ],
          match[0]
        ];
}

export {
  create ,
  
}
/* No side effect */
