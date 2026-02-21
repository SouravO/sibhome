import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/* --- 1. CORE COMPONENT --- */
const ConsultantAvantGarde = () => {
  return (
    <div className="bg-[#080808] text-[#e0e0e0] font-sans selection:bg-indigo-600">
      <CustomCursor />
      <GlassNavbar />
      
      <HeroLens />
      <ManifestoSection />
      <StickyServiceStack />
      <TheAlgorithmGrid />
      <FinalActionSection />
    </div>
  );
};

/* --- 2. THE LENS HERO (Clip-Path Reveal) --- */
const HeroLens = () => {
  const { scrollY } = useScroll();
  const clipPathValue = useTransform(scrollY, [0, 800], ["inset(0% 0% 0% 0%)", "inset(15% 15% 15% 15% round 3rem)"]);
  const scale = useTransform(scrollY, [0, 800], [1, 0.8]);

  return (
    <section className="relative h-[150vh] bg-black">
      <motion.div 
        style={{ clipPath: clipPathValue, scale }}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-fast-motion-of-night-city-lights-3453-large.mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-indigo-400 font-mono tracking-[0.4em] uppercase text-xs mb-6"
          >
            Bespoke Admissions Strategy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase"
          >
            UNCERTAINTY <br /> <span className="text-transparent border-t border-b border-indigo-500 py-2">ELIMINATED.</span>
          </motion.h1>
        </div>
      </motion.div>
    </section>
  );
};

/* --- 3. THE MANIFESTO (Variable Text) --- */
const ManifestoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <section ref={ref} className="py-40 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          We don’t just <br /> <span className="italic text-indigo-500">consult.</span> <br /> We engineer outcomes.
        </h2>
        <div className="space-y-8 text-zinc-400 text-xl leading-relaxed">
          <p>
            The global education landscape is no longer about grades—it's about **narrative dominance**. We help you craft a story that admissions officers cannot ignore.
          </p>
          <motion.div 
            animate={{ width: isInView ? "100%" : "0%" }}
            className="h-px bg-indigo-500/50" 
          />
          <p className="text-sm font-mono uppercase tracking-widest text-zinc-600">
            Precision // Strategy // Admission
          </p>
        </div>
      </div>
    </section>
  );
};

/* --- 4. STICKY SERVICE STACK (Layered Scroll) --- */
const StickyServiceStack = () => {
  const services = [
    { title: "Ivy League Protocol", color: "bg-indigo-900", desc: "For those aiming for the top 1%. Total immersion strategy." },
    { title: "The STEM Pipeline", color: "bg-zinc-900 border border-white/10", desc: "CS & AI placements in Tier 1 Tech hubs." },
    { title: "MBA Architect", color: "bg-indigo-600", desc: "Career pivot strategy for mid-level professionals." }
  ];

  return (
    <section className="px-6 py-20 bg-[#0a0a0a]">
      {services.map((s, i) => (
        <div key={i} className="sticky top-24 h-[60vh] md:h-[70vh] mb-20">
          <div className={`${s.color} w-full h-full rounded-[3rem] p-12 flex flex-col justify-between shadow-2xl`}>
            <span className="text-6xl font-black opacity-20 italic">0{i+1}</span>
            <div>
              <h3 className="text-5xl font-bold mb-6 uppercase tracking-tighter">{s.title}</h3>
              <p className="max-w-md text-lg opacity-80">{s.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

/* --- 5. THE ALGORITHM GRID (Bento 3.0) --- */
const TheAlgorithmGrid = () => {
  return (
    <section className="py-40 bg-white text-black rounded-[4rem] -mt-10 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-7xl md:text-[10vw] font-black uppercase tracking-tighter leading-none">The Metrics.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 h-[400px] bg-zinc-100 rounded-3xl p-10 flex flex-col justify-end group overflow-hidden relative">
             <div className="absolute top-10 right-10 flex gap-2">
                <div className="w-3 h-3 bg-black rounded-full" />
                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-ping" />
             </div>
             <h4 className="text-8xl font-black tracking-tighter relative z-10">$12M+</h4>
             <p className="font-bold text-zinc-500 uppercase tracking-widest">Scholarships secured for 2025 cohort</p>
          </div>
          
          <div className="bg-indigo-600 rounded-3xl p-10 text-white flex flex-col justify-between">
            <p className="text-xs font-mono uppercase opacity-70 italic">Client Satisfaction</p>
            <h4 className="text-6xl font-black italic">100%</h4>
          </div>

          <div className="md:col-span-3 bg-zinc-900 text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-4">
                <h4 className="text-3xl font-bold">WANT TO RUN THE NUMBERS?</h4>
                <p className="text-zinc-400">Our predictive model estimates your admission chances with 94% accuracy.</p>
            </div>
            <button className="px-10 py-5 bg-indigo-500 rounded-full font-black uppercase hover:scale-105 transition-transform">Get Your Report</button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- 6. FINAL ACTION --- */
const FinalActionSection = () => (
    <footer className="py-40 flex flex-col items-center justify-center text-center px-6">
        <motion.div 
          whileInView={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="w-40 h-40 border-2 border-indigo-500 rounded-full flex items-center justify-center mb-10"
        >
            <div className="w-20 h-20 bg-indigo-500 rounded-full blur-xl animate-pulse" />
        </motion.div>
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10">Define Your <br/> Future_</h2>
        <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 border border-white rounded-full font-bold uppercase hover:bg-white hover:text-black transition-all">Book an Audit</button>
            <button className="px-8 py-4 bg-indigo-500 rounded-full font-bold uppercase">WhatsApp Concierge</button>
        </div>
        <p className="mt-40 text-[10px] font-mono uppercase tracking-[1em] text-zinc-600">© 2026 SIB Elite Protocol</p>
    </footer>
);

/* --- UTILS --- */
const GlassNavbar = () => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 flex justify-between items-center">
    <div className="font-black text-xl tracking-tighter">SIB.CON</div>
    <div className="hidden md:flex gap-8 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
        <a href="#" className="hover:text-indigo-400">Services</a>
        <a href="#" className="hover:text-indigo-400">Results</a>
        <a href="#" className="hover:text-indigo-400">Login</a>
    </div>
    <div className="w-2 h-2 bg-indigo-500 rounded-full" />
  </nav>
);

const CustomCursor = () => {
    return (
        <motion.div 
            className="fixed top-0 left-0 w-4 h-4 bg-indigo-500 rounded-full pointer-events-none z-[9999] mix-blend-screen"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
        />
    )
}

export default ConsultantAvantGarde;