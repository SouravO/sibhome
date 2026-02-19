import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Radio, ChevronRight, GraduationCap, Laptop, Zap, Activity } from 'lucide-react';

const SIB_VibrantPortal = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // ANIMATION MATH
  const heroY = useTransform(smoothProgress, [0, 0.2], ["0%", "-100%"]);
  const trayX = useTransform(smoothProgress, [0.25, 0.65], ["0vw", "-200vw"]);
  const circleClip = useTransform(
    smoothProgress, 
    [0.7, 0.9], 
    ["circle(0% at 50% 50%)", "circle(150% at 50% 50%)"]
  );

  return (
    <div ref={containerRef} className="relative h-[800vh] bg-[#030005] text-white selection:bg-purple-500">
      
      {/* FIXED HUD */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-[100] backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-700 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            <Activity className="text-white" size={20} />
          </div>
          <span className="font-black tracking-tighter text-xl italic">SIB // CONSULTANCY</span>
        </div>
        <div className="flex items-center gap-6 font-mono text-[10px] tracking-widest uppercase opacity-60">
          <span className="animate-pulse text-purple-400">● LIVE_FEED</span>
          <Radio size={20} className="text-white" />
        </div>
      </nav>

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* SECTION 1: THE GLOW HERO */}
        <motion.section 
          style={{ y: heroY }}
          className="absolute inset-0 h-full w-full flex flex-col items-center justify-center bg-black z-30"
        >
          {/* Background Radial Glow */}
          <div className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />
          
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
            <h1 className="text-8xl md:text-[12vw] font-[1000] italic tracking-tighter leading-none text-center">
              STUDY IN <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-purple-400 animate-gradient-x">
                BENGALURU
              </span>
            </h1>
            <p className="mt-8 text-center font-mono text-purple-400 tracking-[0.5em] uppercase text-xs">
              Scroll to unlock the city
            </p>
          </motion.div>
        </motion.section>

        {/* SECTION 2: THE HORIZONTAL TRAY (High Contrast White/Purple) */}
        <motion.div 
          style={{ x: trayX }}
          className="absolute inset-0 flex w-[300vw] h-full z-20 items-center bg-white"
        >
          {/* Slide A: The Concept (Light Theme) */}
          <div className="w-screen h-full flex flex-col justify-center px-12 md:px-40 bg-white text-black">
             <span className="text-purple-600 font-black mb-4 tracking-widest uppercase">01 // THE BRIDGE</span>
             <h2 className="text-7xl md:text-9xl font-black uppercase italic leading-[0.85] mb-8 tracking-tighter">
               DATA DRIVEN <br /> ADMISSIONS.
             </h2>
             <div className="h-2 w-40 bg-purple-600 mb-8" />
             <p className="max-w-xl text-xl text-black/60 font-medium">We break the complexity of Indian admissions using real-time node mapping.</p>
          </div>

          {/* Slide B: Grid of Cards (Purple Gradient) */}
          <div className="w-screen h-full flex items-center justify-center px-12 bg-[#0a0a0a]">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                <ServiceBox icon={<GraduationCap />} title="ADMISSIONS" />
                <ServiceBox icon={<Laptop />} title="TECH_PIPELINE" />
             </div>
          </div>

          {/* Slide C: The Purple Vortex */}
          <div className="w-screen h-full flex items-center justify-center bg-purple-600">
             <div className="text-white text-center">
                <Zap size={100} fill="white" className="mx-auto mb-6 animate-bounce" />
                <h2 className="text-4xl font-black uppercase italic">Core Synchronization</h2>
             </div>
          </div>
        </motion.div>

        {/* SECTION 3: THE FINAL EXPANSION */}
        <motion.section 
          style={{ clipPath: circleClip }}
          className="absolute inset-0 z-40 bg-white flex flex-col items-center justify-center text-black px-6"
        >
          <div className="text-center">
            <h2 className="text-7xl md:text-[10vw] font-black uppercase italic tracking-tighter leading-none mb-10">
              UPLINK <br /> <span className="text-purple-600">SUCCESSFUL</span>
            </h2>
            <button className="bg-purple-600 text-white px-16 py-6 text-xl font-black uppercase italic tracking-tighter hover:bg-black transition-all flex items-center gap-4 mx-auto shadow-[0_20px_50px_rgba(147,51,234,0.3)]">
              Enter Portal <ChevronRight />
            </button>
          </div>
        </motion.section>

      </div>

      {/* FOOTER */}
      <section className="relative z-50 h-[60vh] bg-black flex flex-col justify-center items-center">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
            <Stat val="15K+" label="STUDENTS" />
            <Stat val="240" label="NODES" />
            <Stat val="99.8" label="SYNC_RATE" />
            <Stat val="LIVE" label="STATUS" />
         </div>
      </section>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const ServiceBox = ({ icon, title }) => (
  <div className="p-12 border-2 border-purple-500/20 bg-purple-500/5 rounded-3xl group transition-all hover:bg-purple-600 hover:border-purple-400">
    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-purple-400 group-hover:text-white group-hover:bg-black/20 transition-all">
      {icon}
    </div>
    <h3 className="text-3xl font-black uppercase italic mb-2 tracking-tighter">{title}</h3>
    <div className="w-0 group-hover:w-full h-1 bg-white transition-all duration-500" />
  </div>
);

const Stat = ({ val, label }) => (
  <div className="text-center">
    <div className="text-6xl font-black italic text-white mb-2">{val}</div>
    <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-purple-500 font-bold">{label}</div>
  </div>
);

export default SIB_VibrantPortal;