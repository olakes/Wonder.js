describe("custom shader", function () {
    var sandbox = null;
    var material = null;
    var gl;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
        sandbox.stub(dy.DeviceManager.getInstance(), "gl", testTool.buildFakeGl(sandbox));
        sandbox.stub(dy.GPUDetector.getInstance(), "precision", dy.GPUPrecision.HIGHP);
        gl = dy.DeviceManager.getInstance().gl;

        material = new dy.CustomMaterial();
    });
    afterEach(function () {
        testTool.clearInstance();
        sandbox.restore();
    });

    describe("integration test", function() {
        describe("set custom shader", function () {
            var shader, shaderDefinitionData,program;
            beforeEach(function () {
                shader = material.shader;
                program = shader.program;

                sandbox.stub(dy.ArrayBuffer, "create", function(arr, num, type){
                    return testTool.getValues(arr);
                });

                shaderDefinitionData = {
                    attributes: {
                        "a_color": {
                            type: dy.VariableType.FLOAT_3,
                            value: [
                                1, 0, 0, 1,
                                1, 0, 0, 1,
                                0, 1, 0, 1,
                                0, 0, 1, 1
                            ]
                        }
                    },
                    uniforms: {
                        "u_test1": {
                            type: dy.VariableType.FLOAT_1,
                            value: 1.0
                        },
                        "u_test2": {
                            type: dy.VariableType.FLOAT_1,
                            value: function () {
                                return 2.0;
                            }
                        },
                        "u_test3": {
                            type: dy.VariableType.STRUCTURE,
                            value: {
                                "a": {
                                    type:dy.VariableType.NUMBER_1,
                                    value: 10
                                },
                                "b": {
                                    type:dy.VariableType.FLOAT_1,
                                    value: function(){
                                        return 3.0;
                                    }
                                }
                            }
                        }
                    },
                    vsSourceVarDeclare: [
                        "varying vec4 v_color;"
                    ].join("\n"),
                    vsSourceBody: [
                        "v_color = a_color;",
                        "float a = u_test1;",
                        "gl_Position = u_pMatrix * u_vMatrix * u_mMatrix * a_position;"
                    ].join("\n"),
                    fsSourceVarDeclare: [
                        "varying vec4 v_color;",
                        "uniform float u_test2;",
                        "struct Test3{float b;};",
                        "Test3 u_test3;"
                    ].join("\n"),
                    fsSourceBody: [
                        "float a = u_test2;",
                        "float b = u_test3.b;",
                        "gl_FragColor = v_color;"
                    ].join("\n")
                };
            });

            describe("init shader", function () {
            });

            describe("update shader", function () {
                var quadCmd;

                beforeEach(function () {
                    sandbox.stub(material.textureManager, "sendData");
                    sandbox.stub(shader.program, "sendAttributeData");
                    sandbox.stub(shader.program, "sendUniformData");

                    quadCmd = dy.QuadCommand.create();
                    sandbox.stub(quadCmd.buffers, "hasChild").returns(true);
                    sandbox.stub(quadCmd.buffers, "getChild");


                    quadCmd.mMatrix = dy.Matrix4.create();
                    quadCmd.vMatrix = dy.Matrix4.create();
                    quadCmd.pMatrix = dy.Matrix4.create();


                    shader.read(shaderDefinitionData);
                    material.init();
                    material.updateShader(quadCmd);
                });

                //it("set CommonShaderLib->definition", function(){
                //    var commonShaderLib = shader._libs.getChild(0);
                //
                //    expect(commonShaderLib.attributes.getChildren()).toEqual(
                //        {
                //            a_position: {
                //                type: dy.VariableType.FLOAT_3,
                //                value: dy.VariableCategory.ENGINE
                //            }
                //        }
                //    )
                //});
                it("send CommonShaderLib->variables", function () {
                    expect(program.sendAttributeData.firstCall.args[0]).toEqual("a_position");
                    expect(quadCmd.buffers.getChild.firstCall).toCalledWith("vertexBuffer");

                    expect(program.sendUniformData.firstCall.args[0]).toEqual("u_mMatrix");
                    expect(program.sendUniformData.firstCall.args[2]).toEqual(quadCmd.mMatrix);
                    expect(program.sendUniformData.secondCall.args[0]).toEqual("u_vMatrix");
                    expect(program.sendUniformData.secondCall.args[2]).toEqual(quadCmd.vMatrix);
                    expect(program.sendUniformData.thirdCall.args[0]).toEqual("u_pMatrix");
                    expect(program.sendUniformData.thirdCall.args[2]).toEqual(quadCmd.pMatrix);
                });

                it("build definition data", function () {
                    var attributes = shaderDefinitionData.attributes;
                    var uniforms = shaderDefinitionData.uniforms;

                    expect(shader.attributes.getChildren()).toEqual(
                        {
                            a_color: {
                                type: attributes.a_color.type,
                                value:attributes.a_color.value
                            },
                            a_position: {
                                type: dy.VariableType.FLOAT_3,
                                value: dy.VariableCategory.ENGINE
                            }
                        }
                    );
                    expect(shader.uniforms.getChildren()).toEqual(
                        {
                            u_test1: {type: uniforms.u_test1.type, value: uniforms.u_test1.value},
                            u_test2: {type: uniforms.u_test2.type, value: uniforms.u_test2.value},
                            u_test3: {type: uniforms.u_test3.type, value: uniforms.u_test3.value},

                            u_mMatrix: {type: dy.VariableType.FLOAT_MAT4, value: dy.VariableCategory.ENGINE},
                            u_vMatrix: {type: dy.VariableType.FLOAT_MAT4, value: dy.VariableCategory.ENGINE},
                            u_pMatrix: {type: dy.VariableType.FLOAT_MAT4, value: dy.VariableCategory.ENGINE}
                        }
                    );
                });
                it("if definition data change, program will reset shader", function () {
                    expect(gl.attachShader).toCalledTwice();
                });
                it("send texture's variables", function () {
                    expect(material.textureManager.sendData).toCalledWith(shader.program);
                });
                it("send custom shader's attribute variables", function () {
                    expect(program.sendAttributeData.secondCall.args[0]).toEqual("a_color");
                    expect(program.sendAttributeData.secondCall.args[1]).toEqual(dy.VariableType.BUFFER);
                    expect(program.sendAttributeData.secondCall.args[2]).toEqual(
                        [ 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1 ]
                    );
                });
                it("send custom shader's uniform variables", function () {
                    expect(program.sendUniformData.getCall(3).args[0]).toEqual("u_test1");
                    expect(program.sendUniformData.getCall(3).args[1]).toEqual(shaderDefinitionData.uniforms.u_test1.type);
                    expect(program.sendUniformData.getCall(3).args[2]).toEqual(shaderDefinitionData.uniforms.u_test1.value);


                    expect(program.sendUniformData.getCall(4).args[0]).toEqual("u_test2");
                    expect(program.sendUniformData.getCall(4).args[1]).toEqual(shaderDefinitionData.uniforms.u_test2.type);
                    expect(program.sendUniformData.getCall(4).args[2]).toEqual(shaderDefinitionData.uniforms.u_test2.value);


                    var uniforms = shaderDefinitionData.uniforms;
                    expect(program.sendUniformData.getCall(5).args).toEqual(
                        ["u_test3.a", dy.VariableType.NUMBER_1, uniforms.u_test3.value.a.value]
                    );
                    expect(program.sendUniformData.getCall(6).args).toEqual(
                        ["u_test3.b", dy.VariableType.FLOAT_1, uniforms.u_test3.value.b.value]
                    );
                });
            });
        });
    });
});
