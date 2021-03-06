open Wonder_jest;

open Js.Promise;

let _ =
  describe(
    "DisposeVboRenderWorkerJob",
    () => {
      open Expect;
      open Expect.Operators;
      open Sinon;
      let sandbox = getSandboxDefaultVal();
      let state = ref(MainStateTool.createState());
      beforeEach(
        () => {
          sandbox := createSandbox();
          state :=
            TestMainWorkerTool.initWithJobConfig(
              ~sandbox,
              ~buffer=SettingTool.buildBufferConfigStr(),
              ()
            )
        }
      );
      afterEach(() => restoreSandbox(refJsObjToSandbox(sandbox^)));
      describe(
        "dispose vbo buffer data",
        () => {
          let _prepare = (state) => {
            let (state, (gameObject1, gameObject2, gameObject3), (geometry1, geometry2, geometry3)) =
              DisposeForNoWorkerAndWorkerJobTool.prepareBoxAndCustomGeometryGameObjects(state);
            let (state, gameObject4, (_, _, _, sourceInstance4, _)) =
              RenderBasicHardwareInstanceTool.createSourceInstanceGameObject(sandbox, state);
            let renderWorkerState = RenderWorkerStateTool.createStateAndSetToStateData();
            renderWorkerState.vboBufferRecord =
              renderWorkerState.vboBufferRecord
              |> VboBufferTool.addVboBufferToBoxGeometryBufferMapByRecord(geometry1)
              |> VboBufferTool.addVboBufferToBoxGeometryBufferMapByRecord(geometry2)
              |> VboBufferTool.addVboBufferToCustomGeometryBufferMapByRecord(geometry3)
              |> VboBufferTool.addVboBufferToSourceInstanceBufferMapByRecord(sourceInstance4);
            (
              state,
              (gameObject1, gameObject2, gameObject3, gameObject4),
              (geometry1, geometry2, geometry3, sourceInstance4)
            )
          };
          let _buildData = (geometry1, geometry2, geometry3, sourceInstance4) =>
            Some({
              "data": {
                "boxGeometryNeedDisposeVboBufferArr": [|geometry1, geometry2|],
                "customGeometryNeedDisposeVboBufferArr": [|geometry3|],
                "sourceInstanceNeedDisposeVboBufferArr": [|sourceInstance4|]
              }
            });
          testPromise(
            "add buffer to pool",
            () => {
              open VboBufferType;
              let (
                state,
                (gameObject1, gameObject2, gameObject3, gameObject4),
                (geometry1, geometry2, geometry3, sourceInstance4)
              ) =
                _prepare(state);
              DisposeVboRenderWorkerJob.execJob(
                None,
                _buildData(geometry1, geometry2, geometry3, sourceInstance4),
                RenderWorkerStateTool.getStateData()
              )
              |> Most.drain
              |> then_(
                   () => {
                     let renderWorkerState = RenderWorkerStateTool.unsafeGetState();
                     let {vertexArrayBufferPool, elementArrayBufferPool, matrixInstanceBufferPool} =
                       renderWorkerState.vboBufferRecord;
                     (
                       vertexArrayBufferPool |> SparseMapService.length,
                       elementArrayBufferPool |> SparseMapService.length,
                       matrixInstanceBufferPool |> SparseMapService.length
                     )
                     |> expect == (3 * 3, 1 * 3, 1)
                     |> resolve
                   }
                 )
            }
          );
          testPromise(
            "remove from buffer map",
            () => {
              open VboBufferType;
              let (
                state,
                (gameObject1, gameObject2, gameObject3, gameObject4),
                (geometry1, geometry2, geometry3, sourceInstance4)
              ) =
                _prepare(state);
              DisposeVboRenderWorkerJob.execJob(
                None,
                _buildData(geometry1, geometry2, geometry3, sourceInstance4),
                RenderWorkerStateTool.getStateData()
              )
              |> Most.drain
              |> then_(
                   () => {
                     let renderWorkerState = RenderWorkerStateTool.unsafeGetState();
                     let {
                       boxGeometryVertexBufferMap,
                       boxGeometryNormalBufferMap,
                       boxGeometryElementArrayBufferMap,
                       customGeometryVertexBufferMap,
                       customGeometryNormalBufferMap,
                       customGeometryElementArrayBufferMap,
                       matrixInstanceBufferMap
                     } =
                       renderWorkerState.vboBufferRecord;
                     (
                       boxGeometryVertexBufferMap |> WonderCommonlib.SparseMapService.has(geometry1),
                       boxGeometryNormalBufferMap
                       |> WonderCommonlib.SparseMapService.has(geometry1),
                       boxGeometryElementArrayBufferMap
                       |> WonderCommonlib.SparseMapService.has(geometry1),
                       boxGeometryVertexBufferMap
                       |> WonderCommonlib.SparseMapService.has(geometry2),
                       boxGeometryNormalBufferMap
                       |> WonderCommonlib.SparseMapService.has(geometry2),
                       boxGeometryElementArrayBufferMap
                       |> WonderCommonlib.SparseMapService.has(geometry2),
                       customGeometryVertexBufferMap
                       |> WonderCommonlib.SparseMapService.has(geometry3),
                       customGeometryNormalBufferMap
                       |> WonderCommonlib.SparseMapService.has(geometry3),
                       customGeometryElementArrayBufferMap
                       |> WonderCommonlib.SparseMapService.has(geometry3),
                       matrixInstanceBufferMap
                       |> WonderCommonlib.SparseMapService.has(sourceInstance4)
                     )
                     |>
                     expect == (
                                 false,
                                 false,
                                 false,
                                 false,
                                 false,
                                 false,
                                 false,
                                 false,
                                 false,
                                 false
                               )
                     |> resolve
                   }
                 )
            }
          )
        }
      )
    }
  );