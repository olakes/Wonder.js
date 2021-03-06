// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as Js_exn from "../../../../../node_modules/bs-platform/lib/es6/js_exn.js";
import * as Caml_exceptions from "../../../../../node_modules/bs-platform/lib/es6/caml_exceptions.js";

var ParseError = Caml_exceptions.create("Json-Wonderjs.ParseError");

function parse(s) {
  try {
    return /* Some */[JSON.parse(s)];
  }
  catch (exn){
    return /* None */0;
  }
}

function parseOrRaise(s) {
  try {
    return JSON.parse(s);
  }
  catch (raw_exn){
    var exn = Js_exn.internalToOCamlException(raw_exn);
    if (exn[0] === Js_exn.$$Error) {
      var match = exn[1].message;
      var message = match !== undefined ? match : "Unknown error";
      throw [
            ParseError,
            message
          ];
    } else {
      throw exn;
    }
  }
}

var Decode = 0;

var Encode = 0;

export {
  Decode ,
  Encode ,
  ParseError ,
  parse ,
  parseOrRaise ,
  
}
/* No side effect */
