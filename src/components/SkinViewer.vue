<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue';
import {IdleAnimation, SkinViewer} from 'skinview3d';

const canvas = ref(null);
let viewerInstance: SkinViewer | null = null;

onMounted(() => {
  if (!canvas.value) return;

  viewerInstance = new SkinViewer({
    canvas: canvas.value,
    width: 200,
    height: 280,
    skin: "/skin.png"
  });

  viewerInstance.animation = new IdleAnimation();

  viewerInstance.controls.enableZoom = false;

  viewerInstance.zoom = 0.8;

  viewerInstance.playerObject.rotateY(-Math.PI/8);

  viewerInstance.nameTag = "Sycraxe";
});

onBeforeUnmount(() => {
  if (viewerInstance) {
    viewerInstance.dispose();
  }
});
</script>

<template>
  <div class="viewer-wrapper">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<style scoped>
.viewer-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 10px;
  width: fit-content;
}
</style>