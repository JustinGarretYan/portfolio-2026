<template>
  <div class="grainy-overlay"></div>

  <div class="fixed inset-0 -z-10 bg-[#020617] overflow-hidden">
    <div class="blob blob-1"></div>
    
    <div class="blob blob-2"></div>
    
    <div class="blob blob-3"></div>
  </div>
</template>

<style scoped>
.blob {
  position: absolute;
  filter: blur(80px);
  opacity: 0.25;
  mix-blend-mode: screen;
}

/* Bentuk Aneh & Animasi Morphing */
.blob-1 {
  width: 600px;
  height: 600px;
  background: #1e40af; /* Deep Blue */
  top: -10%;
  right: -5%;
  animation: morph 15s infinite alternate, move 20s infinite linear;
}

.blob-2 {
  width: 500px;
  height: 500px;
  background: #3b82f6; /* Electric Blue */
  bottom: -10%;
  left: 0%;
  animation: morph 12s infinite alternate-reverse, move 25s infinite linear reverse;
}

.blob-3 {
  width: 400px;
  height: 400px;
  background: #1d4ed8; /* Navy Blue */
  top: 40%;
  left: 30%;
  animation: morph 10s infinite alternate, move 30s infinite linear;
  opacity: 0.15;
}

/* Keyframe untuk Mengubah Bentuk Jadi "Aneh" / Cair */
@keyframes morph {
  0% {
    border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
  }
  33% {
    border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
  }
  66% {
    border-radius: 30% 70% 70% 30% / 50% 40% 30% 60%;
  }
  100% {
    border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
  }
}

/* Keyframe untuk Pergerakan Lambat Mengelilingi Layar */
@keyframes move {
  from { transform: rotate(0deg) translate(50px) rotate(0deg); }
  to { transform: rotate(360deg) translate(50px) rotate(-360deg); }
}

.grainy-overlay {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 50;
  opacity: 0.04;
  background-image: url("https://grainy-gradients.vercel.app/noise.svg");
}
</style>