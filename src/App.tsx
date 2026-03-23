// @ts-nocheck
/* eslint-disable */
import React from 'react';
import { 
  Linkedin, Youtube, Send, ExternalLink, Wallet, 
  Camera, Instagram, Mail, ArrowRight, Sparkles, 
  Github, UserCheck, Layout
} from 'lucide-react';

const App = () => {
  const DATA = {
    name: "Rizki Akbar",
    title: "Mahasiswa Ekonomi Syariah | Tech Innovator",
    bio: "Membangun jembatan antara Ekonomi Syariah dan Teknologi AI.",
    email: "rizkiakbarmaulana005@gmail.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rizki", 
    socials: {
      instagram: "https://instagram.com/rizkiakbarma",
      linkedin: "https://linkedin.com/in/rizki14",
      youtube: "https://youtube.com/@ArsipWaktuID",
      whatsapp: "https://wa.me/6285659879223", 
      github: "https://github.com/rizkiakbarma"
    },
    projects: [
      {
        title: "UANGKU Pro",
        subtitle: "Micro-SaaS Financial Tracker",
        desc: "Sistem pelacak keuangan otomatis berbasis Sharia Economics dengan fitur Zakat Calculator.",
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
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 pb-20">
      {/* BACKGROUND GRADIENT */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-100/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[100px]"></div>
      </div>

      <main className="max-w-xl mx-auto px-6 py-12 md:py-20">
        {/* PROFILE CARD */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 mb-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-slate-100 mx-auto">
              <img src={DATA.avatar} alt={DATA.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-1 right-1 bg-emerald-500 p-2 rounded-full shadow-lg border-2 border-white">
              <UserCheck className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">{DATA.name}</h1>
          <p className="text-emerald-600 font-bold text-[10px] uppercase tracking-[0.3em] mt-3 mb-5">{DATA.title}</p>
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto font-medium">{DATA.bio}</p>
          
          <div className="flex justify-center gap-3 mt-10">
            {Object.entries(DATA.socials).map(([key, url]) => (
              <a key={key} href={url} target="_blank" className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-slate-400 hover:text-emerald-600 hover:scale-110 hover:shadow-lg transition-all">
                {key === 'instagram' && <Instagram className="w-5 h-5" />}
                {key === 'linkedin' && <Linkedin className="w-5 h-5" />}
                {key === 'youtube' && <Youtube className="w-5 h-5" />}
                {key === 'github' && <Github className="w-5 h-5" />}
                {key === 'whatsapp' && <Send className="w-5 h-5" />}
              </a>
            ))}
          </div>
        </div>

        {/* PROJECTS SECTION */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-2 py-2">
            <Layout className="w-4 h-4 text-slate-400" />
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Featured Artifacts</h2>
          </div>

          {DATA.projects.map((item, idx) => (
            <a key={idx} href={item.link} target="_blank" className={`group block p-8 rounded-[2rem] border ${item.color} shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden`}>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">{item.icon}</div>
                  <div className="bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider">{item.subtitle}</div>
                </div>
                <h3 className="text-xl font-black mb-2 flex items-center gap-2 text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {item.title} <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                </h3>
                <p className="opacity-80 text-sm leading-relaxed mb-6 font-medium">{item.desc}</p>
                <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] gap-2">Explore Now <ExternalLink className="w-3 h-3" /></div>
              </div>
              <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
            </a>
          ))}
        </div>

        <footer className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-2xl shadow-sm border border-slate-100 text-[11px] font-bold text-slate-400 mb-8">
            <Mail className="w-4 h-4 text-emerald-500" /> {DATA.email}
          </div>
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Built with Gemini & Google Ecosystem</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
