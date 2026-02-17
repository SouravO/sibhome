import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Globe, 
  Sparkles, 
  Command, 
  Ghost, 
  ArrowUpRight, 
  Zap, 
  Star, 
  Move
} from 'lucide-react';

const IndustrialFunky = () => {
  const constraintsRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax for the big background text
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div className="bg-[#8B5CF6] text-black font-sans overflow-x-hidden selection:bg-[#ef6925] selection:text-white">
      
      {/* 1. PHYSICS LAYER (Draggable "Stickers" throughout the site) */}
      <div ref={constraintsRef} className="fixed inset-0 z-50 pointer-events-none">
        {[
          { Icon: Zap, top: '15%', left: '10%', label: 'FAST' },
          { Icon: Star, top: '60%', left: '85%', label: 'ELITE' },
          { Icon: Globe, top: '25%', right: '15%', label: 'BLR' },
          { Icon: Ghost, top: '75%', left: '15%', label: 'BOO!' },
        ].map((item, i) => (
          <motion.div
            key={i}
            drag
            dragConstraints={constraintsRef}
            className="absolute p-4 bg-white border-4 border-black shadow-[6px_6px_0px_#000] pointer-events-auto cursor-grab active:cursor-grabbing flex items-center gap-3"
            style={{ top: item.top, left: item.left, right: item.right }}
          >
            <item.Icon size={24} />
            <span className="font-black text-xs uppercase tracking-tighter">{item.label}</span>
          </motion.div>
        ))}
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        {/* Grainy Noise Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-10" />
        
        <motion.div 
          style={{ x: xLeft }}
          className="absolute top-20 left-0 whitespace-nowrap text-[18vw] font-black opacity-10 select-none leading-none"
        >
          BENGALURU • BENGALURU • BENGALURU
        </motion.div>

        <div className="relative z-20 text-center px-6">
          <motion.div 
            initial={{ rotate: -5, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            className="inline-block px-6 py-2 bg-[#ef6925] text-white border-4 border-black shadow-[8px_8px_0px_#000] mb-8"
          >
            <p className="font-black uppercase tracking-widest text-sm">Now Admitting 2026</p>
          </motion.div>

          <h1 className="text-7xl md:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase mb-12">
            STAY <br /> 
            <span className="text-white italic font-serif lowercase drop-shadow-[6px_6px_0px_#000]">funky.</span> <br />
            GET IN.
          </h1>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="px-12 py-6 bg-black text-white text-2xl font-black border-4 border-black hover:bg-white hover:text-black transition-all shadow-[10px_10px_0px_#fff]">
              BOOK CALL
            </button>
            <div className="flex items-center gap-4 bg-white p-4 border-4 border-black shadow-[6px_6px_0px_#000]">
              <Move className="animate-bounce" />
              <p className="font-bold uppercase text-xs">Drag the icons to play!</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MARQUEE BAR */}
      <div className="bg-white border-y-8 border-black py-6 overflow-hidden flex">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 items-center"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="text-5xl font-black uppercase text-black italic">Admission Guaranteed</span>
              <div className="w-12 h-12 bg-[#ef6925] border-4 border-black rotate-45" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* 4. CONTENT GRID (Brutalist Bento) */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8">
          
          <div className="md:col-span-8 bg-white border-8 border-black p-12 shadow-[15px_15px_0px_#000] relative group">
            <h2 className="text-6xl font-black uppercase mb-6 leading-none">Engineering <br />The Future.</h2>
            <p className="text-xl font-bold text-zinc-600 mb-10 max-w-md">We don't do boring counseling. We do strategic career architecture.</p>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-black text-white font-black text-xs">01. SHORTLIST</span>
              <span className="px-4 py-2 bg-black text-white font-black text-xs">02. ADMIT</span>
              <span className="px-4 py-2 bg-black text-white font-black text-xs">03. FLY</span>
            </div>
            <ArrowUpRight className="absolute top-10 right-10 group-hover:rotate-45 transition-transform" size={48} />
          </div>

          <div className="md:col-span-4 bg-[#ef6925] border-8 border-black p-12 shadow-[15px_15px_0px_#000] flex flex-col justify-between text-white">
            <Sparkles size={60} strokeWidth={3} />
            <div>
              <p className="text-7xl font-black leading-none uppercase">100%</p>
              <p className="font-bold uppercase tracking-widest mt-4">Local Presence</p>
            </div>
          </div>

          <div className="md:col-span-5 bg-black text-white border-8 border-black p-12 shadow-[15px_15px_0px_#ef6925]">
             <h3 className="text-4xl font-black uppercase mb-4 italic">The BLR Edge</h3>
             <p className="text-zinc-400 font-bold italic">"Studying in Bengaluru is not a degree, it's a global internship."</p>
          </div>

          <div className="md:col-span-7 bg-white border-8 border-black p-12 shadow-[15px_15px_0px_#000] flex items-center justify-between overflow-hidden">
             <div className="space-y-2">
                <p className="text-4xl font-black uppercase">Start Your</p>
                <p className="text-6xl font-black uppercase text-[#ef6925] drop-shadow-[2px_2px_0px_#000]">Journey.</p>
             </div>
             <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="w-32 h-32 bg-[#8B5CF6] border-4 border-black rounded-full flex items-center justify-center"
             >
                <Command size={48} color="white" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-40 bg-white border-t-8 border-black flex flex-col items-center justify-center text-center">
        <h2 className="text-6xl md:text-9xl font-black uppercase leading-[0.8] mb-16">
          Ready to <br /> <span className="bg-[#ef6925] text-white px-4">Evolve?</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl px-6">
          <input 
            type="text" 
            placeholder="TYPE YOUR MOBILE" 
            className="flex-1 bg-white border-4 border-black p-6 font-black text-2xl uppercase outline-none focus:bg-[#8B5CF6] focus:text-white transition-all"
          />
          <button className="bg-black text-white px-12 py-6 border-4 border-black font-black text-2xl hover:bg-[#ef6925] transition-all shadow-[8px_8px_0px_#000]">
            CALL ME!
          </button>
        </div>
      </section>

      {/* 6. SUBTLE FOOTER BAR */}
      <footer className="bg-black text-white py-10 flex flex-col md:flex-row justify-between items-center px-10 gap-6">
        <div className="font-black text-2xl uppercase italic tracking-tighter">
          NEXUS<span className="text-[#ef6925]">ADMIT</span>
        </div>
        <div className="flex gap-10 text-[10px] font-mono font-bold tracking-[0.3em] text-zinc-500 uppercase">
          <span>©2026 Bengaluru Admissions</span>
          <span>Privacy Protocol</span>
          <span>Terms of Play</span>
        </div>
      </footer>
    </div>
  );
};

export default IndustrialFunky;