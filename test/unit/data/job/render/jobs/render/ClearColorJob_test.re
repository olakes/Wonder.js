open Wonder_jest;

let _ =
  describe(
    "test clear_color job",
    () => {
      open Expect;
      open Expect.Operators;
      open Sinon;
      let sandbox = getSandboxDefaultVal();
      let state = ref(StateTool.createState());
      let _render = (~colorHexStr="#123456", state: StateDataType.state) =>
        state
        |> ClearColorJobTool.execJob(
             RenderJobsTool.buildConfigData(~flags=Some([|colorHexStr|]), ())
           );
      beforeEach(
        () => {
          sandbox := createSandbox();
          state := RenderJobsTool.initWithJobConfig(sandbox)
        }
      );
      afterEach(() => restoreSandbox(refJsObjToSandbox(sandbox^)));
      test(
        "clear gl color",
        () => {
          let state = state^;
          let colorHexStr = "#123456";
          let clearColor = createEmptyStubWithJsObjSandbox(sandbox);
          let state =
            state |> FakeGlTool.setFakeGl(FakeGlTool.buildFakeGl(~sandbox, ~clearColor, ()));
          let state = state |> _render(~colorHexStr);
          let (r, g, b, a) = ColorTool.convert16HexToRGBA(colorHexStr);
          clearColor |> expect |> toCalledWith([|r, g, b, a|])
        }
      );
      test(
        "if color is the same as the last one, not clear",
        () => {
          let state = state^;
          let clearColor = createEmptyStubWithJsObjSandbox(sandbox);
          let state =
            state |> FakeGlTool.setFakeGl(FakeGlTool.buildFakeGl(~sandbox, ~clearColor, ()));
          let state = state |> _render;
          let state = state |> _render;
          let state = state |> _render;
          getCallCount(clearColor) |> expect == 1
        }
      )
    }
  );