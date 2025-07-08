<script setup lang="ts">
  import duckUrl from '@/assets/models/rubber_duck.glb'
  import { useDark } from '@vueuse/core'

  import { Renderer, Camera, Scene, AmbientLight, PointLight, GltfModel } from 'troisjs'

  const isDark = useDark()

  const orbitConfig = {
    enableZoom: false,
    autoRotate: true,
  }
</script>

<template>
  <div class="mt-14 h-[300px] w-full">
    <Renderer
      ref="rendererRef"
      antialias
      :orbit-ctrl="orbitConfig"
      resize="true"
      width="300"
      height="300"
    >
      <Camera ref="camera" :position="{ x: 0, y: 300, z: 550 }" />
      <Scene :background="!isDark ? '#E4E4E4' : '#1a1a1a'">
        <AmbientLight />
        <PointLight color="red" :position="{ x: 100, y: 1000, z: 60 }" :intensity="1" />
        <GltfModel ref="modelRef" :src="duckUrl" />
      </Scene>
    </Renderer>
  </div>
</template>
