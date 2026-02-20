import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";

const IQueChaos = () => {
  return (
    <div className="bg-[#000000] text-[#ffffff] font-sans selection:bg-purple-500/50 overflow-x-hidden">
      <CustomCursor />
      
      {/* SECTION 1: VIDEO HERO WITH GLITCH */}
      <HeroVideo />

      {/* SECTION 2: THE EXPANDING PORTAL */}
      <ExpandingElement />
      
      {/* SECTION 3: BENTO GRID */}
      <BentoGrid />

      {/* SECTION 4: GLITCH MANIFESTO */}
      <ManifestoAccordion />

      {/* SECTION 5: ENTROPY TERMINAL (NEW) */}
      <EntropyTerminal />
      
      {/* SECTION 6: KINETIC FOOTER */}
      <KineticFooter />
    </div>
  );
};

/* --- UTILITY: CUSTOM CURSOR --- */
const CustomCursor = () => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x: mouseX, y: mouseY }}
      className="fixed top-0 left-0 w-8 h-8 border border-purple-500 rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
    />
  );
};

/* --- SECTION 1: VIDEO HERO --- */
const HeroVideo = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <video 
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-digital-motion-background-43515-large.mp4" type="video/mp4" />
      </video>

      <div className="relative z-20 text-center px-6">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ duration: 0.2, times: [0, 0.1, 0.2, 1], repeat: Infinity, repeatDelay: 5 }}
        >
            <span className="text-purple-500 font-mono tracking-[0.5em] uppercase text-sm mb-4 block">
                System_Initializing
            </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-black uppercase tracking-tighter"
        >
          Chaos <span className="text-zinc-400 opacity-50 relative">Engineered.
             <motion.span 
                className="absolute inset-0 text-purple-500/30 blur-sm select-none"
                animate={{ x: [-2, 2, -2], opacity: [0.2, 0.5, 0.2] }}
                transition={{ repeat: Infinity, duration: 0.1 }}
             >Engineered.</motion.span>
          </span>
        </motion.h1>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="w-[1px] h-20 bg-gradient-to-b from-purple-500 to-transparent animate-bounce" />
      </div>
    </section>
  );
};

/* --- SECTION 2: SCROLL EXPANDING ELEMENT --- */
const ExpandingElement = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 1, 0]);

  return (
    <section ref={containerRef} className="h-[150vh] relative flex items-center justify-center">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale }}
          className="w-40 h-40 md:w-64 md:h-64 border-2 border-purple-500 rounded-2xl flex items-center justify-center relative bg-black"
        >
            <div className="w-full h-full bg-purple-500/10 backdrop-blur-3xl absolute inset-0 rounded-2xl" />
            <div className="h-12 w-12 bg-purple-500 rounded-full blur-2xl animate-pulse" />
            <span className="font-mono text-purple-500 z-10 text-[10px]">ENCRYPTING...</span>
        </motion.div>

        <motion.div style={{ opacity }} className="absolute text-center mt-96">
            <h2 className="text-2xl font-light tracking-widest uppercase italic">Decrypting Reality</h2>
        </motion.div>
      </div>
    </section>
  );
};

/* --- SECTION 3: BENTO GRID --- */
const BentoGrid = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-none">
          Engineered for those who operate in the <span className="text-zinc-500 italic">blind spots.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[800px]">
        <div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-10 flex flex-col justify-end hover:bg-zinc-900/60 transition-all duration-500 group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <div className="h-2 w-2 bg-purple-500 rounded-full animate-pulse" />
          </div>
          <div className="mb-4 h-12 w-12 bg-purple-500 rounded-full blur-xl group-hover:blur-3xl transition-all opacity-50" />
          <h3 className="text-3xl font-bold mb-2 uppercase">Alpha Streams</h3>
          <p className="text-zinc-500 max-w-sm font-medium">
            Real-time data feeds processed through our proprietary neural architecture.
          </p>
        </div>

        <div className="bg-zinc-100 rounded-3xl p-10 flex flex-col justify-between text-black transition-transform hover:scale-[1.02] duration-300">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">Status: Reserved</span>
          <div>
            <h3 className="text-5xl font-black leading-[0.8] uppercase mb-4">The<br/>Council</h3>
            <div className="h-1 w-12 bg-black" />
          </div>
        </div>

        <div className="bg-purple-600 rounded-3xl p-10 flex flex-col items-center justify-center text-center group hover:bg-purple-500 transition-colors">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-7xl font-bold italic tracking-tighter"
          >
            99.9
          </motion.h3>
          <p className="text-purple-200 text-xs uppercase font-mono mt-2 tracking-widest">Uptime Protocol</p>
        </div>

        <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 flex items-center justify-between group">
            <div className="space-y-2">
                <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">Encrypted Nodes</h3>
                <p className="text-zinc-500">Global distributed intelligence network.</p>
            </div>
            <div className="h-20 w-20 border-2 border-dashed border-zinc-700 rounded-full animate-[spin_10s_linear_infinite] flex items-center justify-center">
                <div className="h-4 w-4 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            </div>
        </div>
      </div>
    </section>
  );
};

/* --- SECTION 4: GLITCH MANIFESTO --- */
const ManifestoAccordion = () => {
  const [expanded, setExpanded] = useState(0);

  const items = [
    {
      title: "01 // Signal over Noise",
      content: "We strip away the vanity metrics and the algorithmic fluff. Our protocol delivers raw, unadulterated intelligence directly to the node.",
      tag: "CORE_PRINCIPLE"
    },
    {
      title: "02 // Distributed Sovereignty",
      content: "No central authority, no single point of failure. The network lives where the users are, encrypted and peer-verified.",
      tag: "NETWORK_STATE"
    },
    {
      title: "03 // Zero-Latency Execution",
      content: "In the blind spots, milliseconds are the only currency that matters. Our infrastructure is optimized for immediate action.",
      tag: "PERFORMANCE"
    }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 className="text-xs font-mono text-purple-500 uppercase tracking-[0.4em] mb-4">The_Manifesto</h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-[250px]">
            The architecture of the new world is built in the shadows of the old. Select a directive to decrypt.
          </p>
        </div>

        <div className="md:w-2/3 space-y-4">
          {items.map((item, i) => (
            <div 
              key={i}
              className={`border-b border-zinc-800 transition-colors duration-500 ${expanded === i ? 'bg-zinc-900/30' : 'hover:bg-zinc-900/10'}`}
            >
              <button
                onClick={() => setExpanded(expanded === i ? -1 : i)}
                className="w-full py-8 flex items-center justify-between text-left group px-4"
              >
                <div className="flex items-center gap-6">
                  <span className={`text-xs font-mono transition-colors ${expanded === i ? 'text-purple-500' : 'text-zinc-600'}`}>
                    [{i.toString().padStart(2, '0')}]
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform">
                    {item.title}
                  </h3>
                </div>
                <div className={`h-2 w-2 rounded-full transition-all duration-500 ${expanded === i ? 'bg-purple-500 scale-150 shadow-[0_0_10px_#a855f7]' : 'bg-zinc-700'}`} />
              </button>

              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-16 pr-4">
                      <p className="text-zinc-400 leading-relaxed max-w-lg mb-6 text-lg">
                        {item.content}
                      </p>
                      <div className="inline-block px-3 py-1 border border-purple-500/30 rounded-full">
                        <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest animate-pulse">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- SECTION 5: THE ENTROPY TERMINAL (NEW) --- */
const EntropyTerminal = () => {
    const [logs, setLogs] = useState([
      "Initializing bypass...",
      "Accessing encrypted strata...",
      "Node 0x4F2 connection: STABLE"
    ]);
  
    const rawData = [
      "> DECRYPTING_PACKET_772...",
      "> SYNCING NEURAL_LATTICE...",
      "> PROTOCOL_V4.0_ACTIVE",
      "> WARNING: UNKNOWN_ORIGIN_DETECTED",
      "> BYPASSING_FIREWALL_01...",
      "> DATA_EXTRACTION_SUCCESS",
      "> ENCRYPTING_EXIT_NODES...",
      "> SIGNAL_STRENGTH_98%"
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setLogs(prev => {
          const next = [...prev, rawData[Math.floor(Math.random() * rawData.length)]];
          return next.slice(-6); 
        });
      }, 2500);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <section className="py-32 px-6 bg-black flex flex-col items-center">
        <div className="w-full max-w-4xl border border-zinc-800 rounded-lg overflow-hidden shadow-2xl shadow-purple-500/10">
          <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20" />
            </div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              root@ique_protocol:~
            </span>
          </div>
  
          <div className="p-8 font-mono text-sm md:text-base min-h-[400px] flex flex-col justify-end bg-black/50 backdrop-blur-md">
            <div className="space-y-2">
              <AnimatePresence mode="popLayout">
                {logs.map((log, i) => (
                  <motion.div
                    key={`${log}-${i}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex gap-4"
                  >
                    <span className="text-zinc-700">[{new Date().toLocaleTimeString()}]</span>
                    <span className={i === logs.length - 1 ? "text-purple-400" : "text-zinc-400"}>
                      {log}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
              <motion.div 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-purple-500 align-middle ml-2" 
              />
            </div>
  
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-zinc-900">
              <StatBlock label="Latency" value="14ms" color="text-emerald-500" />
              <StatBlock label="Uplink" value="Gbps" color="text-purple-500" />
              <StatBlock label="Nodes" value="4,821" color="text-zinc-100" />
              <StatBlock label="Threat" value="Low" color="text-amber-500" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
const StatBlock = ({ label, value, color }) => (
    <div className="space-y-1">
      <p className="text-[10px] text-zinc-600 uppercase tracking-tighter">{label}</p>
      <p className={`text-xl font-bold tracking-tight ${color}`}>{value}</p>
    </div>
);

/* --- SECTION 6: KINETIC FOOTER --- */
const KineticFooter = () => (
  <footer className="bg-white text-black py-24 px-10 relative overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
      <div className="text-center md:text-left">
        <motion.h2 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-4"
        >
          Uncurated.
        </motion.h2>
        <p className="text-zinc-400 font-medium tracking-wide">Secure your seat in the next cohort.</p>
      </div>

      <motion.button 
        whileHover={{ scale: 1.05, backgroundColor: "#a855f7", color: "#ffffff" }}
        whileTap={{ scale: 0.95 }}
        className="bg-black text-white px-12 py-6 rounded-full font-bold text-lg shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-colors duration-300"
      >
        Enter the Void
      </motion.button>
    </div>

    <div className="mt-40 max-w-7xl mx-auto pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em] gap-6">
        <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">Protocol_Logs</a>
            <a href="#" className="hover:text-black transition-colors">Network_Map</a>
        </div>
        <span>©2026 iQue Protocol // All rights reserved</span>
        <div className="flex gap-8">
            <span>Lat: 37.7749° N</span>
            <span>Lon: 122.4194° W</span>
        </div>
    </div>
  </footer>
);

export default IQueChaos;