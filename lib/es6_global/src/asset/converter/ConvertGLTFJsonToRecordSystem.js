// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as Json_decode$Wonderjs from "../../external/json/Json_decode.js";

function _convertAsset(json) {
  return Json_decode$Wonderjs.field("asset", (function (json) {
                return /* record */[
                        /* version */Json_decode$Wonderjs.field("version", Json_decode$Wonderjs.string, json),
                        /* generator */Json_decode$Wonderjs.optional((function (param) {
                                return Json_decode$Wonderjs.field("generator", Json_decode$Wonderjs.string, param);
                              }), json)
                      ];
              }), json);
}

function _convertSamplers(json) {
  return Json_decode$Wonderjs.optional((function (param) {
                return Json_decode$Wonderjs.field("samplers", (function (param) {
                              return Json_decode$Wonderjs.array((function (json) {
                                            return /* record */[
                                                    /* magFilter */Json_decode$Wonderjs.optional((function (param) {
                                                            return Json_decode$Wonderjs.field("magFilter", Json_decode$Wonderjs.$$int, param);
                                                          }), json),
                                                    /* minFilter */Json_decode$Wonderjs.optional((function (param) {
                                                            return Json_decode$Wonderjs.field("minFilter", Json_decode$Wonderjs.$$int, param);
                                                          }), json),
                                                    /* wrapS */Json_decode$Wonderjs.optional((function (param) {
                                                            return Json_decode$Wonderjs.field("wrapS", Json_decode$Wonderjs.$$int, param);
                                                          }), json),
                                                    /* wrapT */Json_decode$Wonderjs.optional((function (param) {
                                                            return Json_decode$Wonderjs.field("wrapT", Json_decode$Wonderjs.$$int, param);
                                                          }), json)
                                                  ];
                                          }), param);
                            }), param);
              }), json);
}

function _convertBuffers(json) {
  return Json_decode$Wonderjs.field("buffers", (function (param) {
                return Json_decode$Wonderjs.array((function (json) {
                              return /* record */[
                                      /* uri */Json_decode$Wonderjs.optional((function (param) {
                                              return Json_decode$Wonderjs.field("uri", Json_decode$Wonderjs.string, param);
                                            }), json),
                                      /* byteLength */Json_decode$Wonderjs.field("byteLength", Json_decode$Wonderjs.$$int, json)
                                    ];
                            }), param);
              }), json);
}

function _convertBufferViews(json) {
  return Json_decode$Wonderjs.field("bufferViews", (function (param) {
                return Json_decode$Wonderjs.array((function (json) {
                              return /* record */[
                                      /* buffer */Json_decode$Wonderjs.field("buffer", Json_decode$Wonderjs.$$int, json),
                                      /* byteOffset */Json_decode$Wonderjs.optional((function (param) {
                                              return Json_decode$Wonderjs.field("byteOffset", Json_decode$Wonderjs.$$int, param);
                                            }), json),
                                      /* byteLength */Json_decode$Wonderjs.field("byteLength", Json_decode$Wonderjs.$$int, json),
                                      /* byteStride */Json_decode$Wonderjs.optional((function (param) {
                                              return Json_decode$Wonderjs.field("byteStride", Json_decode$Wonderjs.$$int, param);
                                            }), json)
                                    ];
                            }), param);
              }), json);
}

function _convertAccessors(json) {
  return Json_decode$Wonderjs.field("accessors", (function (param) {
                return Json_decode$Wonderjs.array((function (json) {
                              return /* record */[
                                      /* bufferView */Json_decode$Wonderjs.optional((function (param) {
                                              return Json_decode$Wonderjs.field("bufferView", Json_decode$Wonderjs.$$int, param);
                                            }), json),
                                      /* byteOffset */Json_decode$Wonderjs.optional((function (param) {
                                              return Json_decode$Wonderjs.field("byteOffset", Json_decode$Wonderjs.$$int, param);
                                            }), json),
                                      /* count */Json_decode$Wonderjs.field("count", Json_decode$Wonderjs.$$int, json),
                                      /* componentType */Json_decode$Wonderjs.field("componentType", Json_decode$Wonderjs.$$int, json),
                                      /* type_ */Json_decode$Wonderjs.field("type", Json_decode$Wonderjs.string, json)
                                    ];
                            }), param);
              }), json);
}

function _convertTextures(json) {
  return Json_decode$Wonderjs.optional((function (param) {
                return Json_decode$Wonderjs.field("textures", (function (param) {
                              return Json_decode$Wonderjs.array((function (json) {
                                            return /* record */[
                                                    /* sampler */Json_decode$Wonderjs.optional((function (param) {
                                                            return Json_decode$Wonderjs.field("sampler", Json_decode$Wonderjs.$$int, param);
                                                          }), json),
                                                    /* source */Json_decode$Wonderjs.optional((function (param) {
                                                            return Json_decode$Wonderjs.field("source", Json_decode$Wonderjs.$$int, param);
                                                          }), json),
                                                    /* name */Json_decode$Wonderjs.optional((function (param) {
                                                            return Json_decode$Wonderjs.field("name", Json_decode$Wonderjs.string, param);
                                                          }), json)
                                                  ];
                                          }), param);
                            }), param);
              }), json);
}

function _convertImages(json) {
  return Json_decode$Wonderjs.optional((function (param) {
                return Json_decode$Wonderjs.field("images", (function (param) {
                              return Json_decode$Wonderjs.array((function (json) {
                                            return /* record */[
                                                    /* uri */Json_decode$Wonderjs.optional((function (param) {
                                                            return Json_decode$Wonderjs.field("uri", Json_decode$Wonderjs.string, param);
                                                          }), json),
                                                    /* name */Json_decode$Wonderjs.optional((function (param) {
                                                            return Json_decode$Wonderjs.field("name", Json_decode$Wonderjs.string, param);
                                                          }), json)
                                                  ];
                                          }), param);
                            }), param);
              }), json);
}

function _convertScens(json) {
  return Json_decode$Wonderjs.field("scenes", (function (param) {
                return Json_decode$Wonderjs.array((function (json) {
                              return /* record */[
                                      /* nodes */Json_decode$Wonderjs.optional((function (param) {
                                              return Json_decode$Wonderjs.field("nodes", (function (param) {
                                                            return Json_decode$Wonderjs.array(Json_decode$Wonderjs.$$int, param);
                                                          }), param);
                                            }), json),
                                      /* extensions */Json_decode$Wonderjs.optional((function (param) {
                                              return Json_decode$Wonderjs.field("extensions", (function (json) {
                                                            return /* record */[/* khr_lights */Json_decode$Wonderjs.optional((function (param) {
                                                                            return Json_decode$Wonderjs.field("KHR_lights", (function (json) {
                                                                                          return /* record */[/* light */Json_decode$Wonderjs.field("light", Json_decode$Wonderjs.$$int, json)];
                                                                                        }), param);
                                                                          }), json)];
                                                          }), param);
                                            }), json)
                                    ];
                            }), param);
              }), json);
}

function _convertExtensions(json) {
  return Json_decode$Wonderjs.optional((function (param) {
                return Json_decode$Wonderjs.field("extensions", (function (json) {
                              return /* record */[/* khr_lights */Json_decode$Wonderjs.optional((function (param) {
                                              return Json_decode$Wonderjs.field("KHR_lights", (function (json) {
                                                            return /* record */[/* lights */Json_decode$Wonderjs.field("lights", (function (param) {
                                                                            return Json_decode$Wonderjs.array((function (json) {
                                                                                          return /* record */[
                                                                                                  /* type_ */Json_decode$Wonderjs.field("type", Json_decode$Wonderjs.string, json),
                                                                                                  /* color */Json_decode$Wonderjs.optional((function (param) {
                                                                                                          return Json_decode$Wonderjs.field("color", (function (param) {
                                                                                                                        return Json_decode$Wonderjs.array(Json_decode$Wonderjs.$$float, param);
                                                                                                                      }), param);
                                                                                                        }), json),
                                                                                                  /* intensity */Json_decode$Wonderjs.optional((function (param) {
                                                                                                          return Json_decode$Wonderjs.field("intensity", Json_decode$Wonderjs.$$float, param);
                                                                                                        }), json),
                                                                                                  /* constantAttenuation */Json_decode$Wonderjs.optional((function (param) {
                                                                                                          return Json_decode$Wonderjs.field("constantAttenuation", Json_decode$Wonderjs.$$float, param);
                                                                                                        }), json),
                                                                                                  /* linearAttenuation */Json_decode$Wonderjs.optional((function (param) {
                                                                                                          return Json_decode$Wonderjs.field("linearAttenuation", Json_decode$Wonderjs.$$float, param);
                                                                                                        }), json),
                                                                                                  /* quadraticAttenuation */Json_decode$Wonderjs.optional((function (param) {
                                                                                                          return Json_decode$Wonderjs.field("quadraticAttenuation", Json_decode$Wonderjs.$$float, param);
                                                                                                        }), json),
                                                                                                  /* range */Json_decode$Wonderjs.optional((function (param) {
                                                                                                          return Json_decode$Wonderjs.field("range", Json_decode$Wonderjs.$$float, param);
                                                                                                        }), json)
                                                                                                ];
                                                                                        }), param);
                                                                          }), json)];
                                                          }), param);
                                            }), json)];
                            }), param);
              }), json);
}

function _convertCameras(json) {
  return Json_decode$Wonderjs.optional((function (param) {
                return Json_decode$Wonderjs.field("cameras", (function (param) {
                              return Json_decode$Wonderjs.array((function (json) {
                                            return /* record */[
                                                    /* type_ */Json_decode$Wonderjs.field("type", Json_decode$Wonderjs.string, json),
                                                    /* perspective */Json_decode$Wonderjs.optional((function (param) {
                                                            return Json_decode$Wonderjs.field("perspective", (function (json) {
                                                                          return /* record */[
                                                                                  /* aspectRatio */Json_decode$Wonderjs.optional((function (param) {
                                                                                          return Json_decode$Wonderjs.field("aspectRatio", Json_decode$Wonderjs.$$float, param);
                                                                                        }), json),
                                                                                  /* yfov */Json_decode$Wonderjs.field("yfov", Json_decode$Wonderjs.$$float, json),
                                                                                  /* zfar */Json_decode$Wonderjs.optional((function (param) {
                                                                                          return Json_decode$Wonderjs.field("zfar", Json_decode$Wonderjs.$$float, param);
                                                                                        }), json),
                                                                                  /* znear */Json_decode$Wonderjs.field("znear", Json_decode$Wonderjs.$$float, json)
                                                                                ];
                                                                        }), param);
                                                          }), json),
                                                    /* orthographic */Json_decode$Wonderjs.optional((function (param) {
                                                            return Json_decode$Wonderjs.field("orthographic", (function (json) {
                                                                          return /* record */[
                                                                                  /* xmag */Json_decode$Wonderjs.field("xmag", Json_decode$Wonderjs.$$float, json),
                                                                                  /* ymag */Json_decode$Wonderjs.field("ymag", Json_decode$Wonderjs.$$float, json),
                                                                                  /* zfar */Json_decode$Wonderjs.field("zfar", Json_decode$Wonderjs.$$float, json),
                                                                                  /* znear */Json_decode$Wonderjs.field("znear", Json_decode$Wonderjs.$$float, json)
                                                                                ];
                                                                        }), param);
                                                          }), json)
                                                  ];
                                          }), param);
                            }), param);
              }), json);
}

function _convertMeshes(json) {
  return Json_decode$Wonderjs.field("meshes", (function (param) {
                return Json_decode$Wonderjs.array((function (json) {
                              return /* record */[
                                      /* primitives */Json_decode$Wonderjs.field("primitives", (function (param) {
                                              return Json_decode$Wonderjs.array((function (json) {
                                                            return /* record */[
                                                                    /* attributes */Json_decode$Wonderjs.field("attributes", (function (json) {
                                                                            return /* record */[
                                                                                    /* position */Json_decode$Wonderjs.field("POSITION", Json_decode$Wonderjs.$$int, json),
                                                                                    /* normal */Json_decode$Wonderjs.optional((function (param) {
                                                                                            return Json_decode$Wonderjs.field("NORMAL", Json_decode$Wonderjs.$$int, param);
                                                                                          }), json),
                                                                                    /* texCoord_0 */Json_decode$Wonderjs.optional((function (param) {
                                                                                            return Json_decode$Wonderjs.field("TEXCOORD_0", Json_decode$Wonderjs.$$int, param);
                                                                                          }), json),
                                                                                    /* texCoord_1 */Json_decode$Wonderjs.optional((function (param) {
                                                                                            return Json_decode$Wonderjs.field("TEXCOORD_1", Json_decode$Wonderjs.$$int, param);
                                                                                          }), json)
                                                                                  ];
                                                                          }), json),
                                                                    /* indices */Json_decode$Wonderjs.optional((function (param) {
                                                                            return Json_decode$Wonderjs.field("indices", Json_decode$Wonderjs.$$int, param);
                                                                          }), json),
                                                                    /* material */Json_decode$Wonderjs.optional((function (param) {
                                                                            return Json_decode$Wonderjs.field("material", Json_decode$Wonderjs.$$int, param);
                                                                          }), json)
                                                                  ];
                                                          }), param);
                                            }), json),
                                      /* name */Json_decode$Wonderjs.optional((function (param) {
                                              return Json_decode$Wonderjs.field("name", Json_decode$Wonderjs.string, param);
                                            }), json)
                                    ];
                            }), param);
              }), json);
}

function _convertMaterials(json) {
  return Json_decode$Wonderjs.optional((function (param) {
                return Json_decode$Wonderjs.field("materials", (function (param) {
                              return Json_decode$Wonderjs.array((function (json) {
                                            return /* record */[
                                                    /* pbrMetallicRoughness */Json_decode$Wonderjs.optional((function (param) {
                                                            return Json_decode$Wonderjs.field("pbrMetallicRoughness", (function (json) {
                                                                          return /* record */[
                                                                                  /* baseColorFactor */Json_decode$Wonderjs.optional((function (param) {
                                                                                          return Json_decode$Wonderjs.field("baseColorFactor", (function (param) {
                                                                                                        return Json_decode$Wonderjs.array(Json_decode$Wonderjs.$$float, param);
                                                                                                      }), param);
                                                                                        }), json),
                                                                                  /* baseColorTexture */Json_decode$Wonderjs.optional((function (param) {
                                                                                          return Json_decode$Wonderjs.field("baseColorTexture", (function (json) {
                                                                                                        return /* record */[
                                                                                                                /* index */Json_decode$Wonderjs.field("index", Json_decode$Wonderjs.$$int, json),
                                                                                                                /* texCoord */Json_decode$Wonderjs.optional((function (param) {
                                                                                                                        return Json_decode$Wonderjs.field("texCoord", Json_decode$Wonderjs.$$int, param);
                                                                                                                      }), json)
                                                                                                              ];
                                                                                                      }), param);
                                                                                        }), json),
                                                                                  /* metallicFactor */Json_decode$Wonderjs.optional((function (param) {
                                                                                          return Json_decode$Wonderjs.field("metallicFactor", Json_decode$Wonderjs.$$float, param);
                                                                                        }), json),
                                                                                  /* roughnessFactor */Json_decode$Wonderjs.optional((function (param) {
                                                                                          return Json_decode$Wonderjs.field("roughnessFactor", Json_decode$Wonderjs.$$float, param);
                                                                                        }), json),
                                                                                  /* metallicRoughnessTexture */Json_decode$Wonderjs.optional((function (param) {
                                                                                          return Json_decode$Wonderjs.field("metallicRoughnessTexture", (function (json) {
                                                                                                        return /* record */[
                                                                                                                /* index */Json_decode$Wonderjs.field("index", Json_decode$Wonderjs.$$int, json),
                                                                                                                /* texCoord */Json_decode$Wonderjs.optional((function (param) {
                                                                                                                        return Json_decode$Wonderjs.field("texCoord", Json_decode$Wonderjs.$$int, param);
                                                                                                                      }), json)
                                                                                                              ];
                                                                                                      }), param);
                                                                                        }), json)
                                                                                ];
                                                                        }), param);
                                                          }), json),
                                                    /* name */Json_decode$Wonderjs.optional((function (param) {
                                                            return Json_decode$Wonderjs.field("name", Json_decode$Wonderjs.string, param);
                                                          }), json)
                                                  ];
                                          }), param);
                            }), param);
              }), json);
}

function _convertNodes(json) {
  return Json_decode$Wonderjs.field("nodes", (function (param) {
                return Json_decode$Wonderjs.array((function (json) {
                              return /* record */[
                                      /* name */Json_decode$Wonderjs.optimizedOptional((function (param) {
                                              return Json_decode$Wonderjs.optimizedField("name", Json_decode$Wonderjs.string, param);
                                            }), json),
                                      /* camera */Json_decode$Wonderjs.optimizedOptional((function (param) {
                                              return Json_decode$Wonderjs.optimizedField("camera", Json_decode$Wonderjs.$$int, param);
                                            }), json),
                                      /* mesh */Json_decode$Wonderjs.optimizedOptional((function (param) {
                                              return Json_decode$Wonderjs.optimizedField("mesh", Json_decode$Wonderjs.$$int, param);
                                            }), json),
                                      /* children */Json_decode$Wonderjs.optimizedOptional((function (param) {
                                              return Json_decode$Wonderjs.optimizedField("children", (function (param) {
                                                            return Json_decode$Wonderjs.array(Json_decode$Wonderjs.$$int, param);
                                                          }), param);
                                            }), json),
                                      /* matrix */Json_decode$Wonderjs.optimizedOptional((function (param) {
                                              return Json_decode$Wonderjs.optimizedField("matrix", (function (param) {
                                                            return Json_decode$Wonderjs.array(Json_decode$Wonderjs.$$float, param);
                                                          }), param);
                                            }), json),
                                      /* translation */Json_decode$Wonderjs.optimizedOptional((function (param) {
                                              return Json_decode$Wonderjs.optimizedField("translation", (function (param) {
                                                            return Json_decode$Wonderjs.array(Json_decode$Wonderjs.$$float, param);
                                                          }), param);
                                            }), json),
                                      /* rotation */Json_decode$Wonderjs.optimizedOptional((function (param) {
                                              return Json_decode$Wonderjs.optimizedField("rotation", (function (param) {
                                                            return Json_decode$Wonderjs.array(Json_decode$Wonderjs.$$float, param);
                                                          }), param);
                                            }), json),
                                      /* scale */Json_decode$Wonderjs.optimizedOptional((function (param) {
                                              return Json_decode$Wonderjs.optimizedField("scale", (function (param) {
                                                            return Json_decode$Wonderjs.array(Json_decode$Wonderjs.$$float, param);
                                                          }), param);
                                            }), json),
                                      /* extras */Json_decode$Wonderjs.optimizedOptional((function (param) {
                                              return Json_decode$Wonderjs.optimizedField("extras", (function (json) {
                                                            return /* record */[/* material */Json_decode$Wonderjs.optimizedOptional((function (param) {
                                                                            return Json_decode$Wonderjs.optimizedField("material", Json_decode$Wonderjs.$$int, param);
                                                                          }), json)];
                                                          }), param);
                                            }), json),
                                      /* extensions */Json_decode$Wonderjs.optional((function (param) {
                                              return Json_decode$Wonderjs.field("extensions", (function (json) {
                                                            return /* record */[/* khr_lights */Json_decode$Wonderjs.optional((function (param) {
                                                                            return Json_decode$Wonderjs.field("KHR_lights", (function (json) {
                                                                                          return /* record */[/* light */Json_decode$Wonderjs.field("light", Json_decode$Wonderjs.$$int, json)];
                                                                                        }), param);
                                                                          }), json)];
                                                          }), param);
                                            }), json)
                                    ];
                            }), param);
              }), json);
}

function convert(json) {
  return /* record */[
          /* asset */_convertAsset(json),
          /* scenes */_convertScens(json),
          /* scene */Json_decode$Wonderjs.optional((function (param) {
                  return Json_decode$Wonderjs.field("scene", Json_decode$Wonderjs.$$int, param);
                }), json),
          /* images */_convertImages(json),
          /* textures */_convertTextures(json),
          /* samplers */_convertSamplers(json),
          /* buffers */_convertBuffers(json),
          /* bufferViews */_convertBufferViews(json),
          /* accessors */_convertAccessors(json),
          /* cameras */_convertCameras(json),
          /* nodes */_convertNodes(json),
          /* meshes */_convertMeshes(json),
          /* materials */_convertMaterials(json),
          /* extensionsUsed */Json_decode$Wonderjs.optional((function (param) {
                  return Json_decode$Wonderjs.field("extensionsUsed", (function (param) {
                                return Json_decode$Wonderjs.array(Json_decode$Wonderjs.string, param);
                              }), param);
                }), json),
          /* extensions */_convertExtensions(json)
        ];
}

export {
  _convertAsset ,
  _convertSamplers ,
  _convertBuffers ,
  _convertBufferViews ,
  _convertAccessors ,
  _convertTextures ,
  _convertImages ,
  _convertScens ,
  _convertExtensions ,
  _convertCameras ,
  _convertMeshes ,
  _convertMaterials ,
  _convertNodes ,
  convert ,
  
}
/* No side effect */
