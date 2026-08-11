<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue';

const blobs = reactive([]);
const noiseUrl = "https://grainy-gradients.vercel.app/noise.svg";

const CONFIG = {
  initialCount: 5,
  maxCount: 9,
  baseSpeed: 0.6, // Kecepatan pelan agar tetap elegan
  colors: ['#1e40af', '#3b82f6', '#2563eb', '#1d4ed8']
};

const createBlob = (overrides = {}) => {
  const size = Math.random() * 150 + 350; // Ukuran besar agar terlihat mewah
  return reactive({
    id: Math.random(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: size,
    // Pergerakan acak
    vx: (Math.random() - 0.5) * CONFIG.baseSpeed,
    vy: (Math.random() - 0.5) * CONFIG.baseSpeed,
    color: CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)],
    opacity: Math.random() * 0.1 + 0.2,
    ...overrides
  });
};

const update = () => {
  blobs.forEach(blob => {
    blob.x += blob.vx;
    blob.y += blob.vy;

    // Boundary: Muncul kembali dari sisi seberang agar pergerakan tidak putus
    if (blob.x < -blob.size) blob.x = window.innerWidth;
    if (blob.x > window.innerWidth) blob.x = -blob.size;
    if (blob.y < -blob.size) blob.y = window.innerHeight;
    if (blob.y > window.innerHeight) blob.y = -blob.size;

    // Efek Membelah (Split): Secara acak membentuk gumpalan baru yang memencar
    if (Math.random() < 0.0005 && blobs.length < CONFIG.maxCount) {
      blobs.push(createBlob({
        x: blob.x,
        y: blob.y,
        size: blob.size * 0.6,
        vx: -blob.vx * 1.5,
        vy: -blob.vy * 1.5
      }));
    }
  });
  requestAnimationFrame(update);
};

onMounted(() => {
  for (let i = 0; i < CONFIG.initialCount; i++) blobs.push(createBlob());
  update();
});
</script>

<template>
  <div class="blobs-container">
    <div class="grainy-overlay"></div>
    
    <div class="vignette"></div>

    <div 
      v-for="blob in blobs" 
      :key="blob.id" 
      class="blob"
      :style="{
        width: `${blob.size}px`,
        height: `${blob.size}px`,
        left: `${blob.x}px`,
        top: `${blob.y}px`,
        background: blob.color,
        opacity: blob.opacity
      }"
    ></div>
  </div>
</template>

<style scoped>
.blobs-container {
  position: fixed;
  inset: 0;
  background: #020617;
  overflow: hidden;
  z-index: -10;
}

.blob {
  position: absolute;
  border-radius: 50%;
  /* Rahasia agar terlihat seperti cairan: Blur besar + Mix Blend Mode */
  filter: blur(90px);
  mix-blend-mode: screen;
  pointer-events: none;
  /* Transisi halus saat ada perubahan posisi */
  transition: transform 0.2s linear;
}

.vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 20%, rgba(2, 6, 23, 0.7) 100%);
  z-index: 2;
  pointer-events: none;
}

.grainy-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.05;
  z-index: 5;
  background-image: url("https://grainy-gradients.vercel.app/noise.svg");
}
</style>