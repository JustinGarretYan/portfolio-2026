<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import BackgroundBubbles from './components/BackgroundBubbles.vue';
import { Radar } from 'vue-chartjs';
import {
  Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend
} from 'chart.js';

// --- IMPORT ASSETS (FOTO & SERTIFIKAT) ---
import profileImg from './assets/JGY06676_optimized.jpg';
import certBICF14 from './assets/Panitia BICF14 2025 Videographer.jpg';
import certPemira2024 from './assets/Panitia Pemira koor infokom 2024.jpg';
import certMUS2024 from './assets/Panitia PDD MUS 2024.png'; 
import certPubdok2023 from './assets/Panitia koor Pubdok 2023.jpg';
import certVOB2024 from './assets/Panitia Pubdok VOB 2024.jpg';
import certSBMC2023 from './assets/Pengurus SBMC 2023 - 2024 Desain 2.jpg';
import certBangkit2024 from './assets/[Bangkit 2024 Batch 1] Certificate - C113D4KY0974.jpg';

// --- IMPORT VIDEO ASSETS (VERSI 10 DETIK / _1.mp4) ---
import videoDelusi from './assets/Coming Soon Delusi_1.mp4';
import videoGMTI from './assets/Bumper Animasi GMTI_1.mp4';
import videoPaskah from './assets/After Event Paskah 2025_1.mp4';
import videoMUS from './assets/After Event MUS_1.mp4';
import videoGala from './assets/after event gala dinner_1.mp4';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const activeHub = ref('engineering'); 
const spotlightPos = ref({ x: 0, y: 0 });

const updateSpotlight = (e) => {
  spotlightPos.value = { x: e.clientX, y: e.clientY };
};

onMounted(() => window.addEventListener('mousemove', updateSpotlight));
onUnmounted(() => window.removeEventListener('mousemove', updateSpotlight));

// --- DATA PROFILE ---
const profile = {
  name: "Justin Garret Yan",
  about: "Saya adalah mahasiswa Sistem Informasi di ITB STIKOM Bali yang berfokus pada Full-stack Web Development dan Creative Content. Saya senang menggabungkan logika pemrograman dengan estetika visual untuk menciptakan solusi digital yang efisien.",
  birth: "11 Oktober 2003",
  location: "Denpasar, Bali",
  education: "Sistem Informasi - ITB STIKOM Bali",
  stats: "172 cm / 69 kg",
  socials: [
    { name: 'github', label: 'Github', url: 'https://github.com/JustinGarretYan' },
    { name: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/justin-garret-yan-207b67255' },
    { name: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/justinyan__/' },
    { name: 'youtube', label: 'Youtube', url: 'https://www.youtube.com/@justinyan9435' },
    { name: 'whatsapp', label: 'WhatsApp', url: 'https://wa.me/6283196445746' },
    { name: 'gmail', label: 'Gmail', url: 'mailto:kronixyan@gmail.com' }
  ]
};

// --- LOG HUB DATA ---
const certificates = [
  { id: 1, title: "Videographer BICF14 2025", url: certBICF14, isPdf: false },
  { id: 2, title: "Koor INFOKOM Pemira 2024", url: certPemira2024, isPdf: false },
  { id: 3, title: "Pubdok Voice of Bali 2024", url: certVOB2024, isPdf: false },
  { id: 4, title: "Anggota Sie PDD MUS 2024", url: certMUS2024, isPdf: false },
  { id: 5, title: "Koor Sie Dokumentasi Mahakarya #9", url: certPubdok2023, isPdf: false },
  { id: 6, title: "Pengurus SBMC Desain 2023-2024", url: certSBMC2023, isPdf: false },
  { id: 7, title: "Bangkit Academy - Cloud Computing", url: certBangkit2024, isPdf: false }
];

// Gunakan variabel import-nya langsung agar lebih aman, 
// atau pastikan index-nya benar-benar ada.

const experienceLog = [
  { 
    year: "2025", 
    event: "14th Bali International Choir Festival", 
    role: "Videographer", 
    desc: "Memproduksi konten visual video untuk ajang paduan suara internasional di Bali.", 
    certLink: certBICF14 // Panggil langsung variabel import-nya
  },
  { 
    year: "2024", 
    event: "Pemira & Pelantikan BEM-PM", 
    role: "Koordinator INFOKOM", 
    desc: "Bertanggung jawab atas pusat informasi dan komunikasi dalam rangkaian pemilihan raya mahasiswa ITB STIKOM Bali.", 
    certLink: certPemira2024 
  },
  { 
    year: "2024", 
    event: "Voice of Bali (VOB)", 
    role: "Publikasi & Dokumentasi", 
    desc: "Mengelola konten visual dan dokumentasi untuk event paduan suara Voice of Bali.", 
    certLink: certVOB2024 
  },
  { 
    year: "2024", 
    event: "Merdeka Untuk Semua (MUS '24)", 
    role: "Anggota Sie PDD", 
    desc: "Menangani publikasi, dekorasi, dan dokumentasi pada kegiatan DPC PATRIA Denpasar.", 
    certLink: certMUS2024 
  },
  { 
    year: "2024", 
    event: "Bangkit Academy - Cloud Computing", 
    role: "Peserta", 
    desc: "Mengikuti program pelatihan cloud computing.", 
    certLink: certBangkit2024 
  },
  { 
    year: "2023", 
    event: "Mahakarya Multimedia #9", 
    role: "Koordinator Sie Dokumentasi", 
    desc: "Memimpin tim dokumentasi untuk acara bertema 'Nawa Sucilpa' di ITB STIKOM Bali.", 
    certLink: certPubdok2023 
  },
  { 
    year: "2023", 
    event: "UKM Musik (SBMC) ITB STIKOM Bali", 
    role: "Pengurus Desain", 
    desc: "Dedikasi sebagai pengurus divisi desain grafis untuk Unit Kegiatan Mahasiswa Musik periode 2023-2024.", 
    certLink: certSBMC2023 
  }
];

const videoReels = [
  { id: 1, title: "After Event Gala Dinner", url: "https://drive.google.com/file/d/16JR3yfpkxEhCLw7mEfQJIwOpja_0OeRh/view", preview: videoGala, tools: "Sony A6400 • Premiere Pro" },
  { id: 2, title: "After Event MUS", url: "https://drive.google.com/file/d/1JwQ6pA7GYm7EFQP1eXMpHg3lUx4dClVN/view", preview: videoMUS, tools: "Sony A6400 • CapCut Desktop" },
  { id: 3, title: "Coming Soon Delusi", url: "#", preview: videoDelusi, tools: "Sony A6400 • After Effects" },
  { id: 4, title: "After Event Paskah 2025", url: "https://drive.google.com/file/d/1XJhzcInTMYTpWbXceQYmrC3-ebWO4SE-/view", preview: videoPaskah, tools: "Sony A6400 • Premiere Pro" },
  { id: 5, title: "Bumper Animasi GMTI", url: "#", preview: videoGMTI, tools: "Motion Graphics • After Effects" }
];

const engineeringData = [
  { title: "Sistem Dhammatalk", tech: ["Vue.js", "Next.js"], desc: "Platform registrasi event keagamaan dengan alur seamless.", link: "https://dhammatalk2026.web.id", icons: ["vuedotjs", "nextdotjs", "tailwindcss"] },
  { title: "E-Voting BEM HIMA", tech: ["Vue.js", "Next.js"], desc: "Sistem voting digital real-time dengan enkripsi data.", link: "https://voting-web-tau.vercel.app/", icons: ["vuedotjs", "nextdotjs", "tailwindcss"] }
];

const videoWorkflow = {
  title: "Creative Suite",
  apps: [
    { name: "adobepremierepro", title: "Premiere Pro" },
    { name: "adobeaftereffects", title: "After Effects" },
    { name: "davinciresolve", title: "DaVinci Resolve" }
  ]
};

const radarData = {
  labels: ['Premiere Pro', 'After Effects', 'Vue & Next.js', 'Music Skill', 'CapCut', 'DaVinci'],
  datasets: [{ label: 'Level', backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: '#3b82f6', data: [100, 80, 60, 80, 80, 40] }]
};

const radarOptions = {
  responsive: true, maintainAspectRatio: false,
  scales: { r: { angleLines: { color: 'rgba(255, 255, 255, 0.1)' }, grid: { color: 'rgba(255, 255, 255, 0.1)' }, pointLabels: { color: '#94a3b8' }, ticks: { display: false }, suggestedMin: 0, suggestedMax: 100 } },
  plugins: { legend: { display: false } }
};
</script>

<template>
  <div class="grain-overlay"></div>
  <div class="spotlight" :style="{ left: spotlightPos.x + 'px', top: spotlightPos.y + 'px' }"></div>
  <BackgroundBubbles />

  <div class="min-h-screen text-slate-100 p-4 md:p-8 max-w-[1400px] mx-auto font-sans relative z-10">
    
    <header class="relative min-h-[80vh] flex flex-col justify-center mb-16 px-4">
      <div class="grid lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-8 space-y-6">
          <div class="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span class="text-blue-400 font-mono text-[9px] uppercase tracking-[0.4em]">Available for Projects</span>
          </div>
          
          <h1 class="text-[clamp(2.5rem,8vw,7rem)] font-black italic leading-[0.85] tracking-tighter uppercase mb-6 text-left">
            {{ profile.name.split(' ')[0] }}<br/>
            <span class="text-blue-600 drop-shadow-[0_0_20px_rgba(37,99,235,0.2)]">{{ profile.name.split(' ')[1] }}</span>
          </h1>
          
          <div class="max-w-lg space-y-8 text-left">
            <p class="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
              {{ profile.about }}
            </p>

            <div class="text-[11px] font-bold uppercase tracking-widest text-slate-400 flex flex-col gap-3">
              <span class="flex items-center gap-2">📍 {{ profile.location }}</span>
              <span class="flex items-center gap-2">🎂 {{ profile.birth }}</span>
              <span class="flex items-center gap-2">🎓 {{ profile.education }}</span>
              <span class="text-blue-500 opacity-70 font-mono tracking-tighter">⚖️ {{ profile.stats }}</span>
            </div>
            
            <div class="flex flex-wrap gap-3">
              <a v-for="s in profile.socials" :key="s.name" :href="s.url" target="_blank" 
                 class="group flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-blue-600 transition-all">
                <img 
                  :src="s.name.toLowerCase() === 'linkedin' 
                    ? `https://unpkg.com/simple-icons@v9/icons/linkedin.svg` 
                    : `https://cdn.simpleicons.org/${s.name.toLowerCase()}/white`" 
                  :class="['w-4 h-4', s.name.toLowerCase() === 'linkedin' ? 'brightness-0 invert' : '']" 
                />
                <span class="text-[9px] font-black uppercase tracking-widest hidden md:block">{{ s.name }}</span>
              </a>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 flex justify-center lg:justify-end">
          <div class="relative group w-full max-w-[320px]">
            <div class="absolute -inset-4 bg-blue-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative aspect-[4/5] bg-slate-900 border border-white/10 transition-all duration-700 transform rotate-2 group-hover:rotate-0 shadow-2xl"
                 style="border-radius: 3rem; overflow: hidden; isolation: isolate; -webkit-mask-image: -webkit-radial-gradient(white, black);">
              <img :src="profileImg" class="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-110 brightness-90 group-hover:brightness-110" style="border-radius: 3rem;">
              <div class="absolute bottom-4 left-4 right-4 p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 text-left">
                <p class="text-[8px] font-mono text-blue-400 uppercase tracking-tighter mb-0.5">Base In</p>
                <p class="font-bold text-xs">{{ profile.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <nav class="sticky top-6 z-[100] flex justify-center mb-24">
      <div class="flex gap-1 p-1.5 bg-slate-950/60 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl">
        <button v-for="h in ['Engineering', 'Creative', 'Log']" :key="h" @click="activeHub = h.toLowerCase()"
          class="px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all"
          :class="activeHub === h.toLowerCase() ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'">
          {{ h }}
        </button>
      </div>
    </nav>

    <main class="relative">
      <section v-if="activeHub === 'engineering'" class="grid md:grid-cols-2 gap-6 animate-in text-left">
        <div v-for="p in engineeringData" :key="p.title" 
             class="group relative overflow-hidden bg-slate-900/40 border border-white/5 rounded-[3rem] p-10 hover:border-blue-500/30 transition-all">
          <div class="flex justify-between items-start mb-8">
            <div class="flex -space-x-2">
              <div v-for="icon in p.icons" :key="icon" class="w-12 h-12 p-3 bg-slate-950 rounded-xl border border-white/10 transition-transform group-hover:-translate-y-1 flex items-center justify-center">
                <img :src="`https://cdn.simpleicons.org/${icon}/white`" class="w-full h-full object-contain">
              </div>
            </div>
            <a :href="p.link" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white opacity-0 group-hover:opacity-100 transition-all">↗</a>
          </div>
          <h3 class="text-4xl font-black italic uppercase tracking-tighter mb-4 leading-none">{{ p.title }}</h3>
          <p class="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">{{ p.desc }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="t in p.tech" :key="t" class="px-4 py-1.5 bg-white/5 text-[9px] font-black rounded-full border border-white/10 uppercase">{{ t }}</span>
          </div>
        </div>
      </section>

      <section v-if="activeHub === 'creative'" class="space-y-20 animate-in text-left">
        <div class="marquee-wrapper">
          <div class="marquee-content animate-marquee py-6">
            <div v-for="n in 2" :key="n" class="flex gap-6 pr-6">
              <div v-for="reel in videoReels" :key="reel.id" 
                   class="w-[420px] aspect-video bg-slate-900 rounded-[2.5rem] overflow-hidden border border-white/10 relative group shadow-xl">
                <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700">
                  <source :src="reel.preview" type="video/mp4">
                </video>
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 p-8 flex flex-col justify-end">
                  <h4 class="text-xl font-black italic uppercase tracking-tighter leading-none">{{ reel.title }}</h4>
                  <div class="h-0 group-hover:h-6 overflow-hidden transition-all duration-500">
                    <span class="text-[9px] font-mono text-blue-400 uppercase tracking-[0.2em]">{{ reel.tools }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center -mt-10 relative z-20">
          <a href="https://drive.google.com/drive/folders/1DcEw6owYeq-k0V9tZK9-irYmcmUQwojA?usp=drive_link" 
             target="_blank" 
             class="group flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-blue-600 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95">
            <img src="https://cdn.simpleicons.org/googledrive/white" class="w-5 h-5" />
            <div class="flex flex-col">
              <span class="text-[10px] font-black uppercase tracking-[0.2em]">Explore More Videos</span>
            </div>
            <span class="text-lg group-hover:translate-x-1 transition-transform">↗</span>
          </a>
        </div>

        <div class="grid lg:grid-cols-2 gap-10 items-center pt-10">
          <div class="bg-slate-900/40 border border-white/5 rounded-[3rem] p-10 flex justify-center">
            <div class="w-full max-w-md h-72"><Radar :data="radarData" :options="radarOptions" /></div>
          </div>
          <div class="space-y-6">
            <h4 class="text-5xl font-black italic uppercase tracking-tighter leading-tight">{{ videoWorkflow.title }}</h4>
            <p class="text-slate-400 text-lg font-light">Workflow pasca-produksi menggunakan tools standar industri.</p>
            <div class="flex gap-4">
              <div v-for="app in videoWorkflow.apps" :key="app.name" 
                   class="w-16 h-16 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-blue-600 transition-colors flex items-center justify-center">
                <img 
                  :src="['adobeaftereffects', 'adobepremierepro'].includes(app.name.toLowerCase())
                    ? `https://unpkg.com/simple-icons@v9/icons/${app.name.toLowerCase()}.svg`
                    : `https://cdn.simpleicons.org/${app.name.toLowerCase()}/white`" 
                  :class="['w-full h-full object-contain', ['adobeaftereffects', 'adobepremierepro'].includes(app.name.toLowerCase()) ? 'brightness-0 invert' : '']"
                  :title="app.title"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-if="activeHub === 'log'" class="animate-in space-y-20 text-left">
        <div class="marquee-wrapper border-y border-white/5 py-10 bg-blue-600/5">
          <div class="marquee-content animate-marquee-slow">
            <div v-for="n in 2" :key="n" class="flex gap-8 pr-8">
              <a v-for="cert in certificates" :key="cert.id" :href="cert.url" target="_blank"
                 class="w-80 h-52 bg-slate-900 border border-white/10 rounded-[2.5rem] group hover:border-blue-500/50 transition-all overflow-hidden relative flex-shrink-0 flex items-center justify-center">
                  <img :src="cert.url" class="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-all duration-700">
                  <div class="relative z-10 w-full h-full flex flex-col justify-end p-8 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent">
                      <span class="text-[10px] font-black uppercase tracking-widest text-white leading-tight mb-1">{{ cert.title }}</span>
                      <span class="text-[8px] text-blue-400 font-mono uppercase tracking-tighter">View Document ↗</span>
                  </div>
              </a>
            </div>
          </div>
        </div>

        <div class="max-w-4xl mx-auto space-y-12">
          <div v-for="ex in experienceLog" :key="ex.event" class="relative pl-14 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-blue-600/20 group">
              <div class="absolute left-[-6px] top-12 w-3 h-3 bg-blue-600 rounded-full group-hover:scale-150 transition-all shadow-[0_0_15px_#3b82f6]"></div>
              <div class="p-10 bg-white/[0.03] border border-white/5 rounded-[3.5rem] group-hover:bg-blue-600/5 transition-all">
                  <div class="flex flex-col md:flex-row justify-between items-start mb-6">
                      <div class="max-w-md">
                        <h4 class="text-3xl font-black uppercase italic text-white group-hover:text-blue-400 transition-colors leading-none">{{ ex.event }}</h4>
                        <p class="text-blue-500 font-mono text-[10px] mt-3 tracking-[0.3em] uppercase font-bold">{{ ex.role }}</p>
                      </div>
                      <span class="text-5xl font-black text-white/[0.03]">{{ ex.year }}</span>
                  </div>
                  <p class="text-slate-400 text-sm leading-relaxed mb-8 max-w-2xl">{{ ex.desc }}</p>
                  <a :href="ex.certLink" target="_blank" class="inline-block px-8 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-[9px] font-black uppercase hover:bg-blue-600 transition-all tracking-widest">Lihat Sertifikat</a>
              </div>
          </div>

          <div class="pt-12 flex justify-center">
            <a href="https://drive.google.com/drive/folders/1f0eP_SWwvtGt63IqUv8vyWBsUDujKs7V?usp=sharing" 
               target="_blank" 
               class="group relative inline-flex items-center gap-6 px-12 py-6 bg-blue-600 rounded-[2.5rem] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-600/20">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              <img src="https://cdn.simpleicons.org/googledrive/white" class="w-6 h-6" />
              <div class="flex flex-col text-left">
                <span class="text-[9px] font-black uppercase tracking-[0.2em] text-blue-100 opacity-70">Archive Access</span>
                <span class="text-sm font-black uppercase tracking-widest text-white">Full Certificate Drive</span>
              </div>
              <span class="text-xl text-white group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="mt-40 pb-16 border-t border-white/5 pt-20 flex flex-col items-center gap-8">
      <div class="text-[clamp(1.5rem,6vw,4rem)] font-black italic text-white/5 select-none uppercase tracking-widest text-center">
        {{ profile.name }}
      </div>
      <div class="text-[9px] font-bold tracking-[0.5em] uppercase text-slate-600">
        © 2026 — {{ profile.location.toUpperCase() }}
      </div>
    </footer>
  </div>
</template>

<style scoped>
.grain-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: url('https://grainy-gradients.vercel.app/noise.svg'); opacity: 0.04; pointer-events: none; z-index: 5; }
.spotlight { width: 800px; height: 800px; background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(2, 6, 23, 0) 70%); border-radius: 50%; position: fixed; pointer-events: none; z-index: -1; transform: translate(-50%, -50%); }

.marquee-wrapper { width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; overflow: hidden; }
.marquee-content { display: flex; width: max-content; }

@keyframes marquee-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
@keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }

.animate-shimmer { animation: shimmer 2s infinite; }
.animate-marquee { animation: marquee-scroll 40s linear infinite; }
.animate-marquee-slow { animation: marquee-scroll 60s linear infinite; }
.marquee-content:hover { animation-play-state: paused; }

.animate-in { animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
</style>