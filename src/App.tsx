// @ts-nocheck
/* eslint-disable */
import React from 'react';
import { 
  Linkedin, Youtube, Send, ExternalLink, Wallet, 
  Camera, Instagram, Mail, ArrowRight, Sparkles, 
  Layout, Globe, Github, UserCheck
} from 'lucide-react';

/**
 * RIZKI AKBAR PROFESSIONAL BENTO PORTFOLIO
 * Sesuai permintaan: Profesional, Terintegrasi Sosmed, & Showcase Project.
 */

const App = () => {
  // --- KONFIGURASI DATA (GANTI LINK DI SINI) ---
  const DATA = {
    name: "Rizki Akbar",
    title: "Sharia Economics Student | Tech Innovator",
    bio: "Membangun ekosistem finansial syariah modern dengan bantuan AI. Google Brand Ambassador Candidate.",
    email: "rizkiakbarma@gmail.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rizki", // Ganti dengan URL foto aslimu jika ada
    socials: {
      instagram: "https://instagram.com/rizkiakbarma",
      linkedin: "https://www.linkedin.com/in/rizki14/",
      youtube: "https://youtube.com/@ArsipWaktuID",
      github: "https://github.com/rizkiakbarma"
    },
    projects: [
      {
        title: "UANGKU Pro",
        subtitle: "Micro-SaaS Financial Tracker",
        desc: "Sistem pelacak keuangan otomatis berbasis Sharia Economics dengan fitur Zakat Calculator terintegrasi.",
        link: "https://uangku-rizkiakbarma.vercel.app",
        color: "bg-emerald-50 border-emerald-100 text-emerald-700",
        icon: <Wallet className="w-6 h-6" />
      },
      {
        title: "Arsip Waktu ID",
        subtitle: "Creative Content & Storytelling",
        desc: "Platform dokumentasi visual dan arsip cerita melalui perspektif kreatif di YouTube.",
        link: "https://youtube.com/@ArsipWaktuID",
        color: "bg-rose-50 border-rose-100 text-rose-700",
        icon: <Camera className="w-6 h-6" />
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100">
      {/* BACKGROUND GRADIENT SOFT */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[120px]"></div>
      </div>

      <main className="max-w-2xl mx-auto px-6 py-12 md:py-20 animate-in">
        
        {/* SECTION 1: PROFILE CARD */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm mb-6 text-center">
          <div className="relative inline-block group mb-6">
            <div className="w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-100 mx-auto">
              <img src={DATA.avatar} alt={DATA.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-1 right-1 bg-emerald-500 p-2 rounded-full shadow-lg border-2 border-white">
              <UserCheck className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl font-black tracking-tight text-slate-900">{DATA.name}</h1>
          <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest mt-2 mb-4">{DATA.title}</p>
          <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto">{DATA.bio}</p>
          
          {/* SOSIAL MEDIA INTEGRATED */}
          <div className="flex justify-center gap-4 mt-8">
            <SocialIcon icon={<Instagram/>} url={DATA.socials.instagram} label="Instagram" color="hover:text-pink-600" />
            <SocialIcon icon={<Linkedin/>} url={DATA.socials.linkedin} label="LinkedIn" color="hover:text-blue-700" />
            <SocialIcon icon={<Youtube/>} url={DATA.socials.youtube} label="YouTube" color="hover:text-red-600" />
            <SocialIcon icon={<Github/>} url={DATA.socials.github} label="GitHub" color="hover:text-slate-900" />
          </div>
        </div>

        {/* SECTION 2: FEATURED PROJECTS GRID */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-2 py-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Project Portofolio</h2>
          </div>

          {DATA.projects.map((item, idx) => (
            <a 
              key={idx} 
              href={item.link} 
              target="_blank" 
              className={`group block p-8 rounded-[2.5rem] border ${item.color} shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider">
                    {item.subtitle}
                  </div>
                </div>
                
                <h3 className="text-xl font-black mb-2 flex items-center gap-2">
                  {item.title} 
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                </h3>
                <p className="opacity-80 text-sm leading-relaxed mb-6 font-medium">
                  {item.desc}
                </p>
                
                <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em]">
                  Buka Aplikasi <ExternalLink className="w-3 h-3 ml-2" />
                </div>
              </div>
              {/* DECORATIVE BACKGROUND SHAPE */}
              <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
            </a>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-2xl shadow-sm border border-slate-100 text-[11px] font-bold text-slate-400 mb-8">
            <Mail className="w-4 h-4 text-emerald-500" /> {DATA.email}
          </div>
          <div className="h-[1px] w-12 bg-slate-200 mx-auto mb-4"></div>
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
            Built with Gemini AI & Google Tech
          </p>
        </footer>

      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}} />
    </div>
  );
};

// Sub-component for Social Icons
const SocialIcon = ({ icon, url, color, label }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`p-3 bg-white rounded-2xl border border-slate-50 shadow-sm text-slate-400 transition-all hover:scale-125 ${color}`}
    title={label}
  >
    {React.cloneElement(icon, { className: "w-5 h-5" })}
  </a>
);

export default App;
