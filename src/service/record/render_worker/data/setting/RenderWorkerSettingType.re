open SettingGPUType;

type memory = {maxBigTypeArrayPoolSize: int};

type instanceBuffer = {
  sourceInstanceCount: int,
  objectInstanceCountPerSourceInstance: int
};

type settingRecord = {
  gpu: option(gpu),
  instanceBuffer: option(instanceBuffer),
  textureCountPerMaterial: option(int),
  basicSourceTextureCount: option(int),
  arrayBufferViewSourceTextureCount: option(int),
  memory: option(memory)
};