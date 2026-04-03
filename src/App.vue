<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import BackgroundBubbles from './components/BackgroundBubbles.vue';
import { Radar } from 'vue-chartjs';
import {
  Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend
} from 'chart.js';

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
  birth: "Medan, 11 Oktober 2003",
  location: "Denpasar, Bali",
  education: "Sistem Informasi - ITB STIKOM Bali",
  stats: "172 cm / 69 kg",
  socials: [
    { name: 'Github', url: 'https://github.com/JustinGarretYan', icon: 'https://cdn.simpleicons.org/github/white' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/justin-garret-yan-207b67255', icon: 'https://cdn.simpleicons.org/linkedin/0A66C2' },
    { name: 'Instagram', url: 'https://www.instagram.com/justinyan__/', icon: 'https://cdn.simpleicons.org/instagram/E4405F' },
    { name: 'Facebook', url: 'https://www.facebook.com/justin.yang.52831/', icon: 'https://cdn.simpleicons.org/facebook/1877F2' },
    { name: 'Youtube', url: 'https://www.youtube.com/@justinyan9435', icon: 'https://cdn.simpleicons.org/youtube/FF0000' },
    { name: 'WhatsApp', url: 'https://wa.me/6283196445746', icon: 'https://cdn.simpleicons.org/whatsapp/25D366' },
    { name: 'Gmail', url: 'mailto:kronixyan@gmail.com', icon: 'https://cdn.simpleicons.org/gmail/EA4335' }
  ]
};

// --- MARQUEE & CERT DATA ---
const videoReels = [
  { id: 1, src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 2, src: "https://www.w3schools.com/html/movie.mp4" },
  { id: 3, src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 4, src: "https://www.w3schools.com/html/movie.mp4" }
];

const certificates = [
  { id: 1, title: "Web Dev Cert", img: "https://via.placeholder.com/300x200/1e293b/white?text=Sertifikat+IT" },
  { id: 2, title: "Video Cert", img: "https://via.placeholder.com/300x200/1e293b/white?text=Sertifikat+Creative" },
  { id: 3, title: "Database Cert", img: "https://via.placeholder.com/300x200/1e293b/white?text=Sertifikat+Sistem" },
  { id: 4, title: "Design Cert", img: "https://via.placeholder.com/300x200/1e293b/white?text=Sertifikat+Design" }
];

const handleVideoLoad = (e) => {
  const video = e.target;
  const duration = video.duration;
  const startTime = Math.max(0, (duration / 2) - 5);
  video.currentTime = startTime;
  video.play();
  video.addEventListener('timeupdate', () => {
    if (video.currentTime > startTime + 10) {
      video.currentTime = startTime;
    }
  });
};

// --- CONTENT DATA ---
const engineeringData = [
  { 
    title: "Sistem Dhammatalk", 
    tech: ["Vue.js", "Firebase"], 
    desc: "Platform pusat informasi dan registrasi event keagamaan dengan alur pendaftaran yang seamless.", 
    link: "https://dhammatalk2026.web.id",
    icons: ["vuedotjs", "firebase", "nodedotjs"] 
  },
  { 
    title: "E-Voting BEM HIMA", 
    tech: ["Vue.js", "Next.js"], 
    desc: "Sistem voting digital real-time dengan enkripsi data untuk pemilihan ketua organisasi mahasiswa.", 
    link: "#",
    icons: ["vuedotjs", "nextdotjs", "tailwindcss"]
  }
];

const videoWorkflow = {
  title: "Post-Production Suite",
  apps: [
    { name: "Premiere", icon: "https://cdn.simpleicons.org/adobepremierepro/9999FF" },
    { name: "After Effects", icon: "https://cdn.simpleicons.org/adobeaftereffects/9999FF" },
    { name: "DaVinci", icon: "https://cdn.simpleicons.org/davinciresolve/white" }
  ],
  videoPreview: "https://www.w3schools.com/html/mov_bbb.mp4"
};

const experienceLog = [
  { year: "2024", event: "Panitia Wisuda XX", role: "Sie Dokumentasi", desc: "Mengelola dokumentasi visual dan editing highlight video wisuda." },
  { year: "2023", event: "Gema Dhamma", role: "Koordinator IT", desc: "Mengembangkan infrastruktur digital untuk event skala besar." }
];

const radarData = {
  labels: ['Web Dev', 'Video Editing', 'Music Prod', 'UI/UX', 'Database', 'VFX'],
  datasets: [{
    label: 'Skill Level',
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    borderColor: '#3b82f6',
    pointBackgroundColor: '#3b82f6',
    data: [92, 98, 85, 88, 78, 80]
  }]
};

const radarOptions = {
  responsive: true, maintainAspectRatio: false,
  scales: { r: { angleLines: { color: 'rgba(255, 255, 255, 0.05)' }, grid: { color: 'rgba(255, 255, 255, 0.05)' }, pointLabels: { color: '#64748b', font: { size: 10, weight: 'bold' } }, ticks: { display: false }, suggestedMin: 0, suggestedMax: 100 } },
  plugins: { legend: { display: false } }
};
</script>

<template>
  <div class="grain-overlay"></div>
  <div class="spotlight" :style="{ left: spotlightPos.x + 'px', top: spotlightPos.y + 'px' }"></div>
  <BackgroundBubbles />

  <div class="min-h-screen text-slate-100 p-6 md:p-12 max-w-7xl mx-auto font-sans relative z-10">
    
    <header class="relative mb-32 pt-20">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-8 space-y-8">
          <div class="flex items-center gap-4">
            <span class="h-[1px] w-12 bg-blue-500"></span>
            <span class="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase">Creative Developer</span>
          </div>
          
          <h1 class="text-6xl md:text-9xl font-black italic leading-[0.8] tracking-tighter uppercase drop-shadow-2xl">
            {{ profile.name }}
          </h1>
          
          <p class="text-slate-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed text-left">
            {{ profile.about }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-white/5">
            <div class="space-y-3">
              <h4 class="text-[10px] font-bold uppercase tracking-widest text-slate-500 text-left">Biodata</h4>
              <div class="text-[11px] font-bold uppercase tracking-widest text-slate-400 flex flex-col gap-2 text-left">
                <span>📍 {{ profile.location }}</span>
                <span>🎂 {{ profile.birth }}</span>
                <span>🎓 {{ profile.education }}</span>
                <span class="text-blue-500 opacity-50 font-mono">⚖️ {{ profile.stats }}</span>
              </div>
            </div>
            <div class="space-y-4">
              <h4 class="text-[10px] font-bold uppercase tracking-widest text-slate-500 text-left">Connect</h4>
              <div class="flex flex-wrap gap-3">
                <a v-for="social in profile.socials" :key="social.name" :href="social.url" target="_blank"
                   class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-600/30 transition-all border border-white/5 grayscale hover:grayscale-0">
                  <img :src="social.icon" class="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 relative flex justify-center order-first lg:order-last mb-12 lg:mb-0">
          <div class="relative w-64 h-80 lg:w-72 lg:h-96 rotate-3 hover:rotate-0 transition-transform duration-700">
            <div class="absolute inset-0 bg-blue-600 rounded-[3rem] translate-x-4 translate-y-4 -z-10 opacity-50"></div>
            <div class="w-full h-full bg-slate-800 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img src="/src/assets/JGY06676.JPG" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Justin">
            </div>
          </div>
        </div>
      </div>
    </header>

    <nav class="sticky top-10 z-50 flex justify-center mb-20">
      <div class="flex gap-2 p-2 bg-slate-900/80 backdrop-blur-2xl rounded-full border border-white/5 shadow-2xl">
        <button v-for="hub in ['Engineering', 'Creative', 'Log']" :key="hub" 
          @click="activeHub = hub.toLowerCase()"
          class="px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
          :class="activeHub === hub.toLowerCase() ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-300'">
          {{ hub }}
        </button>
      </div>
    </nav>

    <main class="min-h-[600px]">
      
      <section v-if="activeHub === 'engineering'" class="grid md:grid-cols-2 gap-8 animate-in">
        <div v-for="p in engineeringData" :key="p.title" 
          class="group relative p-10 bg-white/[0.02] border border-white/5 rounded-[3.5rem] hover:bg-blue-600/[0.03] hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between min-h-[350px] text-left">
          <div>
            <div class="flex justify-between items-start mb-8">
              <div class="flex gap-3">
                <div v-for="icon in p.icons" :key="icon" class="w-10 h-10 p-2 bg-slate-900 rounded-xl border border-white/5">
                  <img :src="`https://cdn.simpleicons.org/${icon}/white`" class="w-full h-full object-contain" />
                </div>
              </div>
              <div class="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"></div>
            </div>
            <h3 class="text-4xl font-black italic uppercase tracking-tighter mb-4 text-white">{{ p.title }}</h3>
            <p class="text-slate-400 text-sm mb-8 leading-relaxed">{{ p.desc }}</p>
          </div>
          <div>
            <div class="flex gap-2 mb-8">
              <span v-for="t in p.tech" :key="t" class="px-4 py-1.5 bg-blue-500/10 text-blue-400 text-[9px] font-black rounded-full border border-blue-500/20 uppercase tracking-widest">{{ t }}</span>
            </div>
            <a :href="p.link" class="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-4 hover:gap-6 transition-all text-white">
              View Project <span class="text-blue-500 text-xl">→</span>
            </a>
          </div>
        </div>
      </section>

      <section v-if="activeHub === 'creative'" class="space-y-12 animate-in">
        <div class="marquee-wrapper">
          <div class="marquee-content animate-marquee">
            <div v-for="n in 2" :key="n" class="flex gap-6 pr-6">
              <div v-for="reel in videoReels" :key="reel.id" class="w-80 h-44 bg-black rounded-[2.5rem] overflow-hidden border border-white/10 relative group">
                <video :src="reel.src" muted loop class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all" @loadedmetadata="handleVideoLoad"></video>
                <div class="absolute bottom-4 left-4 text-[8px] font-black uppercase tracking-widest bg-blue-600 px-3 py-1 rounded-full">Reel #{{reel.id}}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid lg:grid-cols-12 gap-8">
          <div class="lg:col-span-7 bg-slate-950/50 border border-white/5 rounded-[3.5rem] p-12 flex flex-col items-center">
            <span class="text-[10px] font-black text-slate-500 tracking-[0.4em] uppercase mb-10 text-center w-full">Skill Expertise Radar</span>
            <div class="w-full h-72"><Radar :data="radarData" :options="radarOptions" /></div>
          </div>
          <div class="lg:col-span-5 bg-slate-900 border border-white/5 rounded-[3.5rem] p-12 relative overflow-hidden group min-h-[400px] text-left">
            <video loop muted :src="videoWorkflow.videoPreview" class="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"></video>
            <div class="relative z-10 h-full flex flex-col justify-end">
              <h4 class="text-4xl font-black italic uppercase mb-4 leading-none">{{ videoWorkflow.title }}</h4>
              <p class="text-slate-400 text-xs mb-8 max-w-xs">Workflow sinematik: Manipulasi VFX, dynamic editing, & professional grading.</p>
              <div class="flex gap-4">
                <div v-for="app in videoWorkflow.apps" :key="app.name" class="p-3 bg-black/40 rounded-2xl backdrop-blur-md border border-white/5">
                  <img :src="app.icon" class="w-7 h-7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-if="activeHub === 'log'" class="animate-in space-y-12">
        <div class="marquee-wrapper border-y border-white/5 py-8 bg-blue-600/5">
            <div class="marquee-content animate-marquee-slow">
                <div v-for="n in 2" :key="n" class="flex gap-6 pr-6">
                    <div v-for="cert in certificates" :key="cert.id" class="w-64 h-40 bg-slate-900 border border-white/10 rounded-2xl overflow-hidden group hover:border-blue-500/50 transition-all flex items-center justify-center flex-shrink-0">
                        <img :src="cert.img" class="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </div>
        </div>

        <div class="max-w-4xl mx-auto space-y-8">
          <div v-for="ex in experienceLog" :key="ex.event" class="relative pl-12 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-blue-600/20 group cursor-pointer text-left">
              <div class="absolute left-[-5px] top-10 w-3 h-3 bg-blue-600 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_15px_#3b82f6]"></div>
              
              <div class="p-10 bg-white/5 border border-white/10 rounded-[3rem] group-hover:bg-blue-600/5 transition-all">
                  <div class="flex justify-between items-start mb-4">
                      <h4 class="text-2xl font-black uppercase italic text-white group-hover:text-blue-400 leading-tight">{{ ex.event }}</h4>
                      <span class="text-4xl font-black text-white/5">{{ ex.year }}</span>
                  </div>
                  <p class="text-blue-500 font-mono text-[10px] mb-4 tracking-[0.3em] uppercase font-bold">{{ ex.role }}</p>
                  <p class="text-slate-400 text-sm leading-relaxed mb-6">{{ ex.desc }}</p>
                  <button class="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black uppercase hover:bg-blue-600 transition-all text-white">Lihat Detail</button>
              </div>
          </div>
        </div>
      </section>

    </main>

    <footer class="mt-40 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] font-bold tracking-[0.5em] uppercase text-slate-600 gap-6">
      <span>{{ profile.name }}</span>
      <span>Copyright © 2026 — Bali, Indonesia</span>
    </footer>
  </div>
</template>

<style scoped>
/* GLOBAL & OVERLAYS */
.grain-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: url('https://grainy-gradients.vercel.app/noise.svg'); opacity: 0.04; pointer-events: none; z-index: 5; }
.spotlight { width: 800px; height: 800px; background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(2, 6, 23, 0) 70%); border-radius: 50%; position: fixed; pointer-events: none; z-index: -1; transform: translate(-50%, -50%); }

/* MARQUEE CORE */
.marquee-wrapper { width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; overflow: hidden; }
.marquee-content { display: flex; width: max-content; }

@keyframes marquee-scroll { 
  0% { transform: translateX(0); } 
  100% { transform: translateX(-50%); } 
}

.animate-marquee { animation: marquee-scroll 30s linear infinite; }
.animate-marquee-slow { animation: marquee-scroll 60s linear infinite; }
.marquee-content:hover { animation-play-state: paused; }

/* ENTRANCE ANIMATION */
.animate-in { animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
</style>