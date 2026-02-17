import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Triangle, Square, Circle, ChevronRight, Fingerprint, Activity } from 'lucide-react';

const App = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  // Transform horizontal scroll
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-65%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

  return (
    <div className="bg-black text-white font-sans selection:bg-[#6D28D9]">
      
      {/* 1. THE PINNED HERO */}
      <motion.section 
        style={{ opacity, scale }}
        className="h-screen flex flex-col items-center justify-center sticky top-0 z-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#000_100%)]"
      >
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#6D28D9] blur-[150px] rounded-full animate-pulse" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-10 text-center"
        >
          <div className="flex justify-center gap-4 mb-8">
            <Triangle className="text-[#6D28D9] animate-bounce" fill="currentColor" size={16} />
            <Square className="text-white" size={16} />
            <Circle className="text-white" size={16} />
          </div>
          <h1 className="text-8xl md:text-[12vw] font-black tracking-tight leading-[0.8] uppercase">
            NEXUS <br /> <span className="text-transparent" style={{ WebkitTextStroke: '2px #6D28D9' }}>CORE</span>
          </h1>
          <p className="mt-10 font-mono text-zinc-500 tracking-[0.3em] text-xs">
            BENGALURU ADMISSION PROTOCOL // v4.0.1
          </p>
        </motion.div>
      </motion.section>

      {/* 2. THE HORIZONTAL EXPERIENCE */}
      <section ref={targetRef} className="relative h-[400vh] bg-white">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-20 px-[10vw]">
            
            {/* Slide 1: Mission */}
            <div className="w-[80vw] flex-shrink-0 flex flex-col justify-center">
              <span className="text-[#6D28D9] font-black text-9xl opacity-10">01</span>
              <h2 className="text-black text-7xl font-black -mt-20 uppercase tracking-tighter">
                We remove the <br /> <span className="text-[#6D28D9]">Friction.</span>
              </h2>
              <p className="text-zinc-400 max-w-lg mt-6 text-xl">
                Traditional admissions are broken. We use data-driven pathways to secure your future in India's Silicon Valley.
              </p>
            </div>

            {/* Slide 2: The Network */}
            <div className="w-[100vw] flex-shrink-0 flex items-center gap-10">
              <div className="grid grid-cols-2 gap-4 w-1/2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-video bg-zinc-100 border border-zinc-200 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all">
                    <img src={`https://picsum.photos/seed/${i+40}/800/600`} alt="Campus" className="object-cover h-full w-full" />
                  </div>
                ))}
              </div>
              <div className="w-1/2 pr-20">
                <h3 className="text-black text-5xl font-black uppercase mb-6">The Grid</h3>
                <p className="text-zinc-500 text-lg leading-relaxed">
                  Direct nodes into RVCE, PES, MS Ramaiah, and Christ University. Our network is your leverage.
                </p>
              </div>
            </div>

            {/* Slide 3: The Process */}
            <div className="w-[80vw] flex-shrink-0 flex flex-col justify-center bg-black p-20 rounded-[4rem] text-white">
               <Activity className="text-[#6D28D9] mb-8" size={60} />
               <h3 className="text-6xl font-bold mb-12 uppercase tracking-tighter">Real-time <br/> Deployment</h3>
               <div className="space-y-6">
                 {['Profile Analysis', 'Campus Matching', 'Verification', 'Deployment'].map((step, idx) => (
                   <div key={idx} className="flex items-center gap-6 border-b border-white/10 pb-4 group cursor-pointer">
                      <span className="text-[#6D28D9] font-mono">0{idx+1}</span>
                      <span className="text-2xl font-bold group-hover:translate-x-4 transition-transform">{step}</span>
                      <ChevronRight className="ml-auto opacity-0 group-hover:opacity-100 text-[#6D28D9]" />
                   </div>
                 ))}
               </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 3. FINAL CALL (THE DARK ROOM) */}
      <section className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 mb-12 border-2 border-[#6D28D9] rounded-full flex items-center justify-center animate-spin-slow">
          <Fingerprint size={48} className="text-[#6D28D9]" />
        </div>
        <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
          AUTHENTICATE <br /> <span className="text-zinc-700">YOUR SEAT.</span>
        </h2>
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px #6D28D9" }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#6D28D9] text-white px-12 py-6 text-xl font-black uppercase tracking-widest rounded-none"
        >
          Begin Protocol
        </motion.button>
        
        <footer className="mt-40 w-full max-w-6xl flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 font-bold uppercase tracking-[0.4em] border-t border-white/5 pt-10">
          <p>Nexus Admit System 2026</p>
          <div className="flex gap-10 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-white transition-colors">Telegram</a>
          </div>
        </footer>
      </section>

      {/* CUSTOM STYLE FOR SLOW SPIN */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;