import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { BackgroundBubbles } from "@/components/BackgroundBubbles";
import { RadarChart } from "@/components/RadarChart";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const DRIVE_LINK = "https://drive.google.com/drive/folders/1DcEw6owYeq-k0V9tZK9-irYmcmUQwojA?usp=drive_link";

type Locale = "en" | "id";

const dict = {
  en: {
    badge: "Available for Projects",
    heroAbout:
      "Information Systems graduate from ITB STIKOM Bali, combining full-stack web engineering with creative visual production. Experienced in deploying secure digital platforms and crafting immersive audio-visual content.",
    location: "Denpasar, Bali, Indonesia",
    eduLabel: "B.S. Information Systems — ITB STIKOM Bali",
    ctaWork: "Explore Works",
    ctaContact: "Get In Touch",
    hubs: { engineering: "Engineering", video: "Videography", log: "Track Record" },
    engineeringTitle: "Web Engineering Projects",
    engineeringDesc: "Production-ready web applications built from the ground up.",
    videoTitle: "Cinematic & Video Showcases",
    videoDesc: "Selected multi-cam event documentation, motion design, and aerial videography.",
    vidTabEvent: "Events & Motion",
    vidTabDrone: "Drone Cinematics",
    moreVideos: "Access Full Video Archives",
    workflowTitle: "Creative Post-Production Suite",
    workflowDesc: "Industry-standard post-production workflows and asset rendering tools.",
    certTitle: "Certificates & Accreditations",
    logTitle: "Professional Milestones",
    logDesc: "Chronological timeline of organizational roles, digital infrastructure, and creative contributions.",
    viewCert: "View Certificate",
    archiveTitle: "Central Cloud Storage",
    archiveDesc: "Secure Google Drive directory hosting comprehensive documentation and creative archives.",
    skillsTitle: "Technical & Creative Vectors",
    skillsDesc: "Radar breakdown mapping current operational competencies.",
    footerRights: "All rights reserved.",
    open: "Visit",
  },
  id: {
    badge: "Terbuka untuk Proyek",
    heroAbout:
      "Lulusan Sistem Informasi dari ITB STIKOM Bali yang menggabungkan rekayasa web full-stack dengan produksi visual kreatif. Berpengalaman membangun platform digital aman dan memproduksi konten audio-visual imersif.",
    location: "Denpasar, Bali",
    eduLabel: "S1 Sistem Informasi — ITB STIKOM Bali",
    ctaWork: "Lihat Karya",
    ctaContact: "Hubungi Saya",
    hubs: { engineering: "Rekayasa", video: "Videografi", log: "Jejak Karya" },
    engineeringTitle: "Proyek Pengembangan Web",
    engineeringDesc: "Aplikasi web siap produksi yang dibangun dari konsep hingga deployment.",
    videoTitle: "Karya Videografi & Sinematik",
    videoDesc: "Dokumentasi event multi-kamera pilihan, desain mosi, dan videografi udara.",
    vidTabEvent: "Event & Animasi",
    vidTabDrone: "Sinematik Drone",
    moreVideos: "Akses Arsip Video Lengkap",
    workflowTitle: "Alur Kerja Pasca-Produksi",
    workflowDesc: "Tools pasca-produksi standar industri untuk pemrosesan aset visual.",
    certTitle: "Sertifikat & Apresiasi",
    logTitle: "Jejak Karya & Rekam Jejak",
    logDesc: "Kronologi peran organisasi, pembangunan infrastruktur digital, dan kontribusi kreatif.",
    viewCert: "Lihat Sertifikat",
    archiveTitle: "Pusat Penyimpanan Aset",
    archiveDesc: "Direktori Google Drive lengkap berisi seluruh sertifikat digital dan dokumentasi.",
    skillsTitle: "Peta Kompetensi Teknis",
    skillsDesc: "Pemetaan radar untuk kompetensi rekayasa perangkat lunak dan seni visual.",
    footerRights: "Seluruh hak cipta dilindungi.",
  },
} as const;

const profile = {
  name: "Justin Garret Yan",
  birth: "October 11, 2003",
  avatar: "/assets/JGY06676_optimized.jpg",
  socials: [
    { name: "github", label: "Github", url: "https://github.com/JustinGarretYan" },
    { name: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/justin-garret-yan-s-kom-207b67255" },
    { name: "instagram", label: "Instagram", url: "https://www.instagram.com/justinyan___/" },
    { name: "youtube", label: "Youtube", url: "https://www.youtube.com/@justinyan9435" },
    { name: "whatsapp", label: "WhatsApp", url: "https://wa.me/6283196445746" },
    { name: "gmail", label: "Gmail", url: "mailto:kronixyan@gmail.com" },
  ],
};

const engineering = {
  en: [
    {
      title: "Sistem Dhammatalk",
      tech: ["Vue.js", "Next.js"],
      desc: "High-traffic religious convention registration engine with streamlined authentication workflows.",
      link: "https://dhammatalk2026.web.id",
      icons: ["vuedotjs", "nextdotjs", "tailwindcss"],
    },
    {
      title: "E-Voting BEM HIMA",
      tech: ["Vue.js", "Next.js"],
      desc: "Encrypted server-side real-time student council voting system ensuring data integrity.",
      link: "https://voting-web-tau.vercel.app/",
      icons: ["vuedotjs", "nextdotjs", "tailwindcss"],
    },
  ],
  id: [
    {
      title: "Sistem Dhammatalk",
      tech: ["Vue.js", "Next.js"],
      desc: "Platform registrasi event keagamaan dengan alur pendaftaran yang seamless.",
      link: "https://dhammatalk2026.web.id",
      icons: ["vuedotjs", "nextdotjs", "tailwindcss"],
    },
    {
      title: "E-Voting BEM HIMA",
      tech: ["Vue.js", "Next.js"],
      desc: "Sistem voting digital real-time dengan enkripsi data yang aman.",
      link: "https://voting-web-tau.vercel.app/",
      icons: ["vuedotjs", "nextdotjs", "tailwindcss"],
    },
  ],
};

const videoReels = [
  { id: 1, title: "After Event Gala Dinner", url: "https://drive.google.com/file/d/16JR3yfpkxEhCLw7mEfQJIwOpja_0OeRh/view", preview: "/assets/after event gala dinner_1.mp4", tools: "Sony A6400 • Premiere Pro", type: "event" },
  { id: 2, title: "After Event MUS", url: "https://drive.google.com/file/d/1JwQ6pA7GYm7EFQP1eXMpHg3lUx4dClVN/view", preview: "/assets/After Event MUS_1.mp4", tools: "Sony A6400 • CapCut Desktop", type: "event" },
  { id: 3, title: "Coming Soon Delusi", url: "https://drive.google.com/file/d/1xrggWslxhlotZClU4F36k0j18YiVLYTW/view?usp=sharing", preview: "/assets/Coming Soon Delusi_1.mp4", tools: "Motion Graphics • After Effects", type: "event" },
  { id: 4, title: "After Event Paskah 2025", url: "https://drive.google.com/file/d/1XJhzcInTMYTpWbXceQYmrC3-ebWO4SE-/view", preview: "/assets/After Event Paskah 2025_1.mp4", tools: "Sony A6400 • Premiere Pro", type: "event" },
  { id: 5, title: "Bumper Animasi GMTI", url: "https://drive.google.com/file/d/1zKXx3ShdngseaIX7bXFW0tIamA2puza7/view?usp=sharing", preview: "/assets/Bumper Animasi GMTI_1.mp4", tools: "Motion Graphics • After Effects", type: "event" },
  { id: 6, title: "Mancingan Rice Terrace", url: "https://drive.google.com/file/d/1wAJ29SPS5rZ5pCot54QhdpyM2603Krru/view?usp=sharing", preview: "/assets/dji_fly_1.mp4", tools: "DJI Drone • DaVinci Resolve", type: "drone" },
  { id: 7, title: "Sky of Bali", url: "https://drive.google.com/file/d/1XT99wMPKcD06mDzRD9qdy4d-L5b7QXAQ/view?usp=sharing", preview: "/assets/dji_fly_2.mp4", tools: "DJI Drone Neo 2 • Premiere Pro", type: "drone" },
  { id: 8, title: "Sunset of Mengwi", url: "https://drive.google.com/file/d/10IythvQH5ENWNO1HVJ4WIU4GKA48CnGM/view?usp=sharing", preview: "/assets/dji_fly_3.mp4", tools: "DJI Drone Neo 2 • Premiere Pro", type: "drone" },
  { id: 9, title: "Sunrise of Bali", url: "https://drive.google.com/file/d/1JdDSnpRGDc4Z_iNUvRpntamc3lL0MMO5/view?usp=sharing", preview: "/assets/dji_fly_4.mp4", tools: "DJI Drone Neo 2 • Premiere Pro", type: "drone" },
  { id: 10, title: "Abhayadana Vihara Sakyamuni Bali", url: "https://drive.google.com/file/d/16ZNYP685567gGOGP0IcAeJXFsw3_BP24/view?usp=sharing", preview: "/assets/dji_fly_5.mp4", tools: "DJI Drone Neo 2 • Premiere Pro", type: "drone" },
];

const videoWorkflow = {
  title: "Creative Suite",
  apps: [
    { name: "adobepremierepro", title: "Premiere Pro" },
    { name: "adobeaftereffects", title: "After Effects" },
    { name: "davinciresolve", title: "DaVinci Resolve" },
    { name: "dji", title: "DJI Fly" },
  ],
};

const certificates = [
  { id: 1, title: "Videographer BICF14 2025", url: "/assets/Panitia BICF14 2025 Videographer.jpg", isPdf: false, tone: "from-blue-500/30" },
  { id: 2, title: "Koor INFOKOM Pemira 2024", url: "/assets/Panitia Pemira koor infokom 2024.jpg", isPdf: false, tone: "from-indigo-500/30" },
  { id: 3, title: "Pubdok Voice of Bali 2024", url: "/assets/Panitia Pubdok VOB 2024.jpg", isPdf: false, tone: "from-sky-500/30" },
  { id: 4, title: "Anggota Sie PDD MUS 2024", url: "/assets/Panitia PDD MUS 2024.png", isPdf: false, tone: "from-blue-500/30" },
  { id: 5, title: "Koor Sie Dokumentasi Mahakarya #9", url: "/assets/Panitia koor Pubdok 2023.jpg", isPdf: false, tone: "from-indigo-500/30" },
  { id: 6, title: "Pengurus SBMC Desain 2023-2024", url: "/assets/Pengurus SBMC 2023 - 2024 Desain 2.jpg", isPdf: false, tone: "from-sky-500/30" },
  { id: 7, title: "Bangkit Academy - Cloud Computing", url: "/assets/[Bangkit 2024 Batch 1] Certificate - C113D4KY0974.jpg", isPdf: false, tone: "from-blue-500/30" }
];

const logData = {
  en: [
    { period: "Aug 2025", event: "14th Bali International Choir Festival", role: "Videographer", desc: "International multi-cam visual documentation and high-fidelity event marketing assets." },
    { period: "Dec 2024", event: "Student Council Election (PEMIRA)", role: "Head of INFOKOM", desc: "Managed centralized public information infrastructure and broadcasts across ITB STIKOM Bali." },
    { period: "Oct 2024", event: "Voice of Bali (VOB)", role: "Public Relations & Media", desc: "Handled asset delivery, photography pipelines, and promotional material for choral productions." },
    { period: "Aug 2024", event: "Merdeka Untuk Semua (MUS '24)", role: "PDD Committee Lead", desc: "Led event decoration, secure photography storage, and multimedia delivery for PATRIA Denpasar." },
    { period: "Jan 2024", event: "Bangkit Academy by Google, GoTo", role: "Cloud Computing Cohort", desc: "Engineered cloud infrastructure, compute instances, and IAM parameters on Google Cloud Platform." },
    { period: "Sep 2023", event: "Mahakarya Multimedia #9", role: "Documentation Coordinator", desc: "Supervised media production squads covering technical showcase segments." },
    { period: "Jan 2023", event: "UKM Musik (SBMC)", role: "Graphic Designer", desc: "Typography layouts, corporate identity guides, and promotional graphics across a 2-year tenure." },
  ],
  id: [
    { period: "Agu 2025", event: "14th Bali International Choir Festival", role: "Videographer", desc: "Memproduksi konten visual video untuk ajang paduan suara internasional di Bali." },
    { period: "Des 2024", event: "Pemira & Pelantikan BEM-PM", role: "Koordinator INFOKOM", desc: "Bertanggung jawab atas pusat informasi dalam rangkaian pemilihan raya mahasiswa." },
    { period: "Okt 2024", event: "Voice of Bali (VOB)", role: "Publikasi & Dokumentasi", desc: "Mengelola konten visual dan dokumentasi untuk event paduan suara Voice of Bali." },
    { period: "Agu 2024", event: "Merdeka Untuk Semua (MUS '24)", role: "Anggota Sie PDD", desc: "Menangani publikasi, dekorasi, dan dokumentasi pada kegiatan DPC PATRIA Denpasar." },
    { period: "Jan 2024", event: "Bangkit Academy - Cloud", role: "Peserta", desc: "Mengikuti program pelatihan cloud computing berbasis Google Cloud Platform." },
    { period: "Sep 2023", event: "Mahakarya Multimedia #9", role: "Koordinator Dokumentasi", desc: "Memimpin tim dokumentasi untuk acara bertema 'Nawa Sucilpa'." },
    { period: "Jan 2023", event: "UKM Musik (SBMC)", role: "Pengurus Desain", desc: "Pengurus divisi desain grafis UKM Musik periode 2023-2024." },
  ],
};

const radarLabels = ["Premiere", "After FX", "Vue/Next", "Drone", "CapCut", "DaVinci"];
const radarValues = [100, 80, 90, 95, 80, 50];

// PERBAIKAN UTAMA: Mapping warna global berbasis class Tailwind CSS agar tidak bentrok dengan parser SVG
const BRAND_TAILWIND_COLORS: Record<string, string> = {
  github: "text-slate-400 group-hover:text-white",
  linkedin: "text-[#0A66C2] group-hover:text-white",
  instagram: "text-[#E1306C] group-hover:text-white",
  youtube: "text-[#FF0000] group-hover:text-white",
  whatsapp: "text-[#25D366] group-hover:text-white",
  gmail: "text-[#EA4335] group-hover:text-white",
  
  // Kosongkan agar membaca warna SVG asli multi-element bawaan komponen Icon
  vuedotjs: "",
  nextdotjs: "",
  tailwindcss: "",
  adobepremierepro: "",
  adobeaftereffects: "",
  davinciresolve: "",
  dji: ""
};

const marqueeItems = [
  { icon: "vuedotjs", label: "Vue.js" },
  { icon: "nextdotjs", label: "Next.js" },
  { icon: "tailwindcss", label: "Tailwind" },
  { icon: "adobepremierepro", label: "Premiere Pro" },
  { icon: "adobeaftereffects", label: "After Effects" },
  { icon: "davinciresolve", label: "DaVinci Resolve" },
  { icon: "dji", label: "DJI Aerial" },
];

function Portfolio() {
  const [locale, setLocale] = useState<Locale>("en");
  const [hub, setHub] = useState<"engineering" | "video" | "log">("engineering");
  const [videoTab, setVideoTab] = useState<"event" | "drone">("event");
  const spotlightRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  const t = dict[locale];

  useEffect(() => {
    const saved = (localStorage.getItem("portfolio-lang") as Locale) || "en";
    setLocale(saved);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (spotlightRef.current)
        spotlightRef.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      if (avatarRef.current) {
        const rx = (e.clientY / window.innerHeight - 0.5) * -10;
        const ry = (e.clientX / window.innerWidth - 0.5) * 12;
        avatarRef.current.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [hub, videoTab, locale]);

  const toggleLocale = () => {
    const next = locale === "en" ? "id" : "en";
    setLocale(next);
    localStorage.setItem("portfolio-lang", next);
  };

  const reels = videoReels.filter((r) => r.type === videoTab);
  const [first, ...rest] = profile.name.split(" ");

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-50 antialiased selection:bg-blue-500/30">
      <div className="aurora-layer" />
      <div className="hairline-grid" />
      <div className="grain-overlay" />
      <div ref={spotlightRef} className="spotlight-layer" />
      <BackgroundBubbles />

      {/* language toggle */}
      <div className="fixed right-5 top-5 z-50">
        <button
          onClick={toggleLocale}
          className="glass flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-slate-100 transition-all duration-300 hover:scale-105 hover:border-electric active:scale-95"
        >
          <span className={locale === "en" ? "text-electric" : "text-slate-500"}>EN</span>
          <span className="text-slate-600">/</span>
          <span className={locale === "id" ? "text-electric" : "text-slate-500"}>ID</span>
        </button>
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        {/* HERO */}
        <section className="flex min-h-[calc(100vh-8rem)] flex-col justify-center">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="animate-rise space-y-6 text-left lg:col-span-8">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-navy-500/25 bg-navy-500/10 px-4 py-2 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-navy-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-navy-300">
                  {t.badge}
                </span>
              </div>

              <h1 className="select-none font-display text-[clamp(2.3rem,5.6vw,4.7rem)] font-bold uppercase italic leading-[0.92] tracking-tight">
                <span className="block pr-[0.12em] text-foreground">{first}</span>
                <span className="inline-block pr-[0.35em] pl-[0.02em] text-gradient-blue drop-shadow-[0_0_30px_rgba(59,130,246,0.25)]">
                  {rest.join(" ")}
                </span>
              </h1>

              <p className="max-w-2xl text-lg font-light leading-relaxed tracking-wide text-slate-300 md:text-xl">
                {t.heroAbout}
              </p>

              <div className="grid grid-cols-1 gap-3 border-l-2 border-navy-500/30 py-1 pl-4 font-mono text-xs text-slate-400 sm:grid-cols-3">
                <div className="flex items-center gap-2">📍 {t.location}</div>
                <div className="flex items-center gap-2">📅 {profile.birth}</div>
                <div className="flex items-center gap-2">🎓 {t.eduLabel.split(" — ")[0]}</div>
              </div>

              {/* SOCIALS WRAPPER */}
              <div className="flex flex-wrap gap-2 pt-1">
                {profile.socials.map((s) => {
                  const currentBrandColor = BRAND_TAILWIND_COLORS[s.name.toLowerCase()] || "text-slate-400";
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-2.5 transition-all duration-300 hover:border-electric hover:bg-navy-600"
                    >
                      <Icon 
  name={s.name} 
  className={`h-4 w-4 ${BRAND_TAILWIND_COLORS[s.name.toLowerCase()] || "text-slate-400"}`} 
/>
                      <span className="text-xs font-semibold tracking-wider text-slate-300 group-hover:text-white">
                        {s.label}
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-4 pt-3">
                <a
                  href="#hub"
                  className="rounded-xl bg-navy-600 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-500"
                >
                  {t.ctaWork}
                </a>
                <a
                  href="mailto:kronixyan@gmail.com"
                  className="rounded-xl border border-white/10 bg-white/[0.02] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-electric hover:text-white"
                >
                  {t.ctaContact}
                </a>
              </div>
            </div>

            {/* Avatar */}
            <div className="flex justify-center lg:col-span-4 lg:justify-end">
              <div
                ref={avatarRef}
                className="group relative aspect-square w-64 animate-float-slow rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-2 shadow-card transition-transform duration-200 ease-out md:w-80 [transform-style:preserve-3d]"
              >
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-navy-700 via-ink-deep to-ink">
                  <img 
                    src={profile.avatar} 
                    alt={profile.name}
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-deep/80 to-transparent" />
                  <span className="absolute bottom-4 left-0 right-0 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-slate-200 backdrop-blur-[2px] bg-black/10 py-1">
                    Visual Engine Node
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECH TAPE (MARQUEE) */}
        <div className="marquee-mask relative -mx-5 overflow-hidden border-y border-white/5 bg-white/[0.015] py-5 sm:-mx-8">
          <div className="marquee-track gap-12 pr-12">
            {[...marqueeItems, ...marqueeItems].map((item, i) => {
              const currentBrandColor = BRAND_TAILWIND_COLORS[item.icon.toLowerCase()] || "text-slate-500";
              return (
                <span
                  key={i}
                  className="flex items-center gap-3 font-display text-lg font-bold uppercase italic tracking-tight text-slate-500"
                >
                  <Icon
                    name={item.icon}
                    className={`h-5 w-5 shrink-0 ${currentBrandColor}`}
                  />
                  {item.label}
                  <span className="ml-9 text-electric/40">✦</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* HUB */}
        <div id="hub" className="scroll-mt-24 space-y-12 pt-8">

          <nav className="glass mx-auto flex max-w-lg justify-center rounded-2xl p-1.5">
            {(["engineering", "video", "log"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setHub(key)}
                className={`flex-1 rounded-xl py-3.5 text-center text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  hub === key ? "bg-navy-600 text-white shadow-glow" : "text-slate-400 hover:bg-white/[0.03] hover:text-white"
                }`}
              >
                {t.hubs[key]}
              </button>
            ))}
          </nav>

          <div className="min-h-[50vh]">
            {/* ENGINEERING */}
            {hub === "engineering" && (
              <section key="eng" className="animate-scale-up space-y-6">
                <SectionHead title={t.engineeringTitle} desc={t.engineeringDesc} />
                <div className="grid gap-6 md:grid-cols-2">
                  {engineering[locale].map((p, i) => (
                    <a
                      key={p.title}
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-reveal
                      style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                      className="group relative block overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-electric/40 hover:bg-white/[0.04]"
                    >
                      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[5rem] bg-navy-500/5 transition-colors duration-500 group-hover:bg-navy-500/15" />
                      <div className="mb-6 flex items-center justify-between">
                        <div className="flex gap-3">
                          {p.icons.map((ic) => {
                            const currentBrandColor = BRAND_TAILWIND_COLORS[ic.toLowerCase()] || "text-slate-400";
                            return (
                              <div
                                key={ic}
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/5 transition-all duration-300 group-hover:border-electric/20 group-hover:bg-navy-700/30"
                              >
                                <Icon
                                  name={ic}
                                  className={`h-5 w-5 ${currentBrandColor} transition-transform duration-300 group-hover:scale-110`}
                                />
                              </div>
                            );
                          })}
                        </div>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-sm text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-navy-500/10 group-hover:text-navy-300">
                          ↗
                        </span>
                      </div>
                      <h3 className="mb-2.5 text-xl font-bold text-foreground transition-colors group-hover:text-navy-300">
                        {p.title}
                      </h3>
                      <p className="mb-6 text-sm font-light leading-relaxed text-slate-400">{p.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg border border-navy-400/10 bg-navy-500/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-navy-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* VIDEO */}
            {hub === "video" && (
              <section key="vid" className="animate-scale-up space-y-8">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                  <SectionHead title={t.videoTitle} desc={t.videoDesc} />
                  <div className="glass flex shrink-0 self-start rounded-xl p-1 md:self-auto">
                    <button
                      onClick={() => setVideoTab("event")}
                      className={`rounded-lg px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                        videoTab === "event" ? "bg-navy-600 text-white shadow-md" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {t.vidTabEvent}
                    </button>
                    <button
                      onClick={() => setVideoTab("drone")}
                      className={`flex items-center gap-1.5 rounded-lg px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                        videoTab === "drone" ? "bg-navy-600 text-white shadow-md" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      🛸 {t.vidTabDrone}
                    </button>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {reels.map((reel, i) => (
                    <a
                      key={reel.id}
                      href={reel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-reveal
                      style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                      className="group relative flex aspect-[9/12] flex-col justify-end overflow-hidden rounded-3xl border border-white/5 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-electric/30"
                    >
                      <div className="absolute inset-0 bg-slate-900 overflow-hidden">
                        <video
                          src={reel.preview}
                          muted
                          autoPlay
                          loop
                          playsInline
                          className="w-full h-full object-cover opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                        />
                      </div>
                      <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_50%_20%,var(--color-electric),transparent_55%)] transition-opacity duration-500 group-hover:opacity-60" />
                      <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                        <span className="ml-0.5 text-lg text-white">▶</span>
                      </div>
                      <div className="relative z-10 space-y-1.5 bg-gradient-to-t from-black via-slate-950/80 to-transparent p-5 pt-14">
                        <h3 className="text-base font-bold leading-tight text-white">{reel.title}</h3>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-navy-300">{reel.tools}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <a
                  href={DRIVE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-navy-500/20 bg-gradient-to-r from-navy-600/10 to-transparent p-6 shadow-card transition-all duration-300 hover:border-electric/40 hover:from-navy-600/20"
                >
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-navy-300">
                    {t.moreVideos}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-500/10 text-navy-300 transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                {/* CREATIVE SUITE WORKFLOW */}
                <div className="space-y-6 rounded-3xl border border-white/5 bg-white/[0.01] p-8">
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase italic tracking-tight text-foreground">
                      {videoWorkflow.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">{t.workflowDesc}</p>
                  </div>
                  <div className="flex flex-wrap gap-6">
                    {videoWorkflow.apps.map((app) => {
                      const currentBrandColor = BRAND_TAILWIND_COLORS[app.name.toLowerCase()] || "text-slate-400";
                      return (
                        <div key={app.name} className="flex flex-col items-center gap-2" title={app.title}>
                          <div className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03] shadow-inner transition-all duration-300 hover:-translate-y-1 hover:border-electric/30 hover:bg-white/[0.06]">
                            <Icon
                              name={app.name}
                              className={`h-7 w-7 ${currentBrandColor} transition-transform duration-300 group-hover:scale-110`}
                            />
                          </div>
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            {app.title.split(" ")[0]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}

            {/* LOG */}
            {hub === "log" && (
              <section key="log" className="animate-scale-up space-y-12">
                <SectionHead title={t.logTitle} desc={t.logDesc} />

                <div className="space-y-4">
                  {logData[locale].map((ex, i) => (
                    <div
                      key={ex.period}
                      data-reveal
                      style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
                      className="group flex flex-col gap-6 rounded-2xl border border-white/5 bg-white/[0.01] p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03] md:flex-row md:items-center"
                    >
                      <span className="w-28 shrink-0 rounded-xl border border-navy-700/40 bg-navy-700/30 px-3 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-navy-300">
                        {ex.period}
                      </span>
                      <div className="flex-1 text-left">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-navy-300">
                            {ex.event}
                          </h3>
                          <span className="font-mono text-xs text-slate-400">/ {ex.role}</span>
                        </div>
                        <p className="mt-1 text-sm font-light leading-relaxed text-slate-400">{ex.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-8 lg:grid-cols-12">
                  <div className="space-y-4 lg:col-span-7">
                    <h3 className="text-left font-display text-lg font-bold uppercase italic tracking-tight text-foreground">
                      {t.certTitle}
                    </h3>
                    <div className="grid grid-cols-4 gap-3">
                      {certificates.map((cert) => (
                        <a
                          key={cert.id}
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group relative flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br ${cert.tone} to-ink p-2 shadow-md transition-all hover:border-electric/30`}
                        >
                          <img 
                            src={cert.url} 
                            alt={cert.title}
                            className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity duration-300 group-hover:opacity-20"
                          />
                          <span className="font-display text-2xl font-bold italic text-white/30 group-hover:opacity-0 transition-opacity">
                            {cert.title.charAt(0)}
                          </span>
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/90 p-3 text-center opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                            <span className="text-[10px] font-bold uppercase leading-snug tracking-wider text-white mb-2">
                              {cert.title}
                            </span>
                            <span className="text-[9px] font-mono font-bold text-sky-400 border border-sky-400/30 rounded px-1.5 py-0.5">
                              OPEN ↗
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="relative flex flex-col justify-between rounded-3xl border border-white/5 bg-white/[0.01] p-6 shadow-card lg:col-span-5">
                    <div className="mb-4 text-left">
                      <h3 className="font-display text-lg font-bold uppercase italic tracking-tight text-foreground">
                        {t.skillsTitle}
                      </h3>
                      <p className="mt-0.5 text-xs text-slate-400">{t.skillsDesc}</p>
                    </div>
                    <div className="mx-auto h-64 w-full max-w-xs">
                      <RadarChart labels={radarLabels} data={radarValues} />
                    </div>
                  </div>
                </div>

                <a
                  href={DRIVE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-3xl border border-white/5 bg-white/[0.02] p-8 text-left shadow-card transition-all duration-300 hover:border-electric/30 hover:bg-white/[0.04]"
                >
                  <div className="space-y-1">
                    <h3 className="font-mono text-sm font-black uppercase tracking-wider text-navy-300">{t.archiveTitle}</h3>
                    <p className="text-xs font-light text-slate-400">{t.archiveDesc}</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all duration-300 group-hover:bg-navy-500/10 group-hover:text-navy-300">
                    ↗
                  </span>
                </a>
              </section>
            )}
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-white/5 pt-16 text-center">
          <p className="mb-1 select-none bg-gradient-to-r from-white via-slate-400 to-slate-500 bg-clip-text font-display text-2xl font-bold uppercase italic tracking-tighter text-transparent">
            {profile.name}
          </p>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            © 2026 — {t.location.toUpperCase()} · {t.footerRights}
          </p>
        </footer>
      </main>
    </div>
  );
}

function SectionHead({ title, desc }: { title: string; desc: string }) {
  return (
    <div data-reveal className="max-w-xl text-left">
      <h2 className="font-display text-3xl font-bold uppercase italic tracking-tight text-foreground">{title}</h2>
      <p className="mt-1.5 text-sm text-slate-400">{desc}</p>
    </div>
  );
}