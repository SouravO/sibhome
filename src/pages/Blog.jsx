import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Globe, 
  Zap, 
  Circle, 
  MoveRight,
  Filter,
  Eye,
  Database
} from 'lucide-react';

const FONT_STYLE = { fontFamily: "'Poppins', sans-serif" };

export default function BrutalistEditorial() {
  const posts = [
    { 
      cat: "SYSTEMS", 
      title: "THE ARCHITECTURE OF NOISE", 
      excerpt: "Analyzing the chaotic frequency patterns in urban infrastructure and their psychological impact on the collective consciousness.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      tags: ["#SIGNAL", "#URBAN", "#DECODE"]
    },
    { 
      cat: "CULTURE", 
      title: "BENGALURU'S DIGITAL SHADOW", 
      excerpt: "Tracing the invisible fiber-optic veins that fuel the city's nightlife and its rapid evolution into a neo-noir tech hub.",
      img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1000&auto=format&fit=crop",
      tags: ["#CORE", "#NEO_NOIR", "#BGLR"]
    },
    { 
      cat: "FUTURE", 
      title: "NEURAL_CORE: THE 2026 AUDIT", 
      excerpt: "A deep dive into the decentralized neural networks managing the city's logistics and the ethics of AI governance.",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
      tags: ["#AI", "#GOVERN", "#AUDIT"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f0f0f0] text-black p-4 md:p-8 selection:bg-purple-600 selection:text-white" style={FONT_STYLE}>
      
      {/* HEADER BLOCK */}
      {/* <header className="border-[4px] border-black p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-4 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-[900] tracking-tighter leading-none">
            VORTEX<span className="text-purple-600">_</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-[.4em] text-zinc-400">Independent_Dispatch_v.04</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {["Protocols", "Archives", "Lab"].map(item => (
            <button key={item} className="border-2 border-black px-6 py-2 text-xs font-black uppercase hover:bg-black hover:text-white transition-all transform active:translate-y-1">
              {item}
            </button>
          ))}
        </div>
      </header> */}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* HERO */}
        <motion.section 
          className="md:col-span-8 border-[4px] border-black p-8 md:p-16 relative overflow-hidden group bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-12">
              <Zap size={24} className="text-purple-600 fill-current animate-pulse" />
              <span className="font-black text-sm uppercase tracking-widest bg-black text-white px-2">LIVE_FEED</span>
            </div>
            <h2 className="text-6xl md:text-[100px] font-[900] leading-[0.85] tracking-tighter mb-12 italic group-hover:skew-x-2 transition-transform duration-300">
              BEYOND <br /> SILICON.
            </h2>
            <div className="flex flex-col md:flex-row gap-10 items-end">
              <p className="text-lg font-bold max-w-sm leading-tight border-l-4 border-purple-600 pl-4">
                Mapping the socio-technical layers of the world's fastest growing innovation hub.
              </p>
              <button className="bg-purple-600 text-white p-6 hover:bg-black transition-colors">
                <ArrowUpRight size={32} />
              </button>
            </div>
          </div>
        </motion.section>

        {/* SIDEBAR */}
        <aside className="md:col-span-4 border-[4px] border-black bg-purple-600 p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
           <div className="relative z-10 space-y-4">
              <div className="flex justify-between">
                <Circle size={40} className="fill-white" />
                <Database size={24} />
              </div>
              <h3 className="text-4xl font-black italic tracking-tighter leading-none">JOIN THE <br /> UNDERGROUND</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest bg-white text-purple-600 inline-block px-2">32.4k Nodes Active</p>
           </div>
           <div className="mt-8 relative z-10">
              <input type="text" placeholder="ENTER_EMAIL_ADDR" className="w-full bg-transparent border-b-4 border-white p-2 placeholder:text-purple-200 outline-none font-bold mb-4" />
              <button className="w-full bg-black text-white py-3 font-black uppercase text-xs hover:bg-white hover:text-black transition-colors">Connect_Protocol</button>
           </div>
        </aside>

        {/* INTERACTIVE POST LOOP */}
        {posts.map((post, i) => (
          <motion.div 
            key={i}
            initial={false}
            className="md:col-span-4 border-[4px] border-black p-0 group cursor-pointer bg-white relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            {/* IMAGE AREA WITH HOVER OVERLAY */}
            <div className="h-80 overflow-hidden relative border-b-[4px] border-black bg-black">
              {/* The Image */}
              <img 
                src={post.img} 
                alt={post.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-20 group-hover:scale-110"
              />

              {/* The Hidden Content (Revealed on Hover) */}
              <div className="absolute inset-0 p-6 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                <div className="bg-purple-600 text-white p-4 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                  <div className="flex gap-2 mb-3">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-black bg-black px-1">{tag}</span>
                    ))}
                  </div>
                  <p className="text-sm font-bold leading-tight mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase">
                    <Eye size={14} /> <span>Decrypting_File...</span>
                  </div>
                </div>
              </div>

              {/* Static Overlay Labels */}
              <div className="absolute top-4 left-4 z-10">
                 <span className="bg-black text-white text-[10px] font-black px-2 py-1 uppercase tracking-widest border-2 border-white">
                    {post.cat}
                 </span>
              </div>
            </div>

            {/* CARD BOTTOM */}
            <div className="p-6 bg-white">
              <h3 className="text-2xl font-[900] tracking-tighter leading-[0.9] mb-6 group-hover:text-purple-600">
                {post.title}
              </h3>
              <div className="flex justify-between items-center text-[10px] font-black uppercase">
                 <span className="text-zinc-400">Ref // 0x{i + 402}</span>
                 <MoveRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}

        {/* FOOTER */}
        <footer className="md:col-span-12 border-[4px] border-black p-6 flex flex-col md:flex-row justify-between items-center bg-black text-white shadow-[8px_8px_0px_0px_rgba(147,51,234,1)]">
           <div className="flex items-center gap-6">
              <Globe size={20} className="text-purple-500 animate-spin-slow" />
              <span className="text-[10px] font-black tracking-[0.5em] uppercase">Status: Connected_to_Vortex_Net</span>
           </div>
           <div className="text-[10px] font-black text-purple-500">
             ENCRYPTION: AES-256 // 2026
           </div>
        </footer>

      </div>
    </div>
  );
}