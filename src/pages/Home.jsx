import React, { useRef, useState, useEffect } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  AnimatePresence 
} from "framer-motion";
import { 
  ArrowUpRight, 
  MoveRight, 
  Sparkles, 
  Building2, 
  Globe2,
  GraduationCap
} from "lucide-react";

/**
 * FIXED WRAPPER: SectionCard
 * Handles the stacking "card" effect on scroll.
 */
const SectionCard = ({ children, sticky = true, index }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  
  return (
    <div 
      ref={container} 
      className={`relative h-[110vh] flex items-center justify-center ${sticky ? 'sticky top-0' : ''}`}
      style={{ zIndex: index }}
    >
      <motion.div 
        style={{ scale }}
        className="w-[95%] h-[90vh] bg-white rounded-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.2)] border border-purple-100 overflow-hidden relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
};

const StudyInBLR = () => {
  return (
    <div className="bg-black text-black selection:bg-purple-500 selection:text-white font-sans">
      <CustomCursor />
      
      <main className="px-4">
        <SectionCard index={1}>
          <Hero />
        </SectionCard>

        <SectionCard index={2}>
          <VisionSection />
        </SectionCard>

        {/* Horizontal Scroll Section */}
        <HorizontalGalleryCard />

        <SectionCard index={4}>
          <StatsBento />
        </SectionCard>

        {/* UPDATED: Ultra-Wide Expanding Hover Grid */}
        <SectionCard index={5}>
          <ExploreGrid />
        </SectionCard>

        <SectionCard index={6}>
          <FinalCTA />
        </SectionCard>
      </main>

      <Footer />
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const Hero = () => (
  <section className="h-full w-full flex flex-col items-center justify-center bg-white relative">
    <div className="absolute inset-0 opacity-[0.05] flex items-center justify-center pointer-events-none">
        <h1 className="text-[40vw] font-black text-purple-900">BLR</h1>
    </div>
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-center z-10"
    >
      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-600 mb-4 block">
        India's Education Epicenter
      </span>
      <h1 className="text-[12vw] font-black leading-[0.8] tracking-tighter italic uppercase text-black">
        Study In<br /><span className="text-purple-600">Bengaluru</span>
      </h1>
      <button className="mt-10 group flex items-center gap-4 text-xl font-black uppercase italic mx-auto hover:text-purple-600 transition-colors">
        Start Journey <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>
    </motion.div>
  </section>
);

const VisionSection = () => (
  <section className="h-full w-full flex flex-col md:flex-row bg-white">
    <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
      <h2 className="text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
        Beyond<br /><span className="text-purple-600">Degrees.</span>
      </h2>
      <p className="text-xl text-zinc-500 font-medium max-w-sm uppercase">
        We bridge the gap between academic theory and the tech industry's pulse.
      </p>
    </div>
    <div className="w-full md:w-1/2 bg-black relative group overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000" 
          alt="Vision"
        />
    </div>
  </section>
);

const HorizontalGalleryCard = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-60%"]);

  return (
    <div ref={targetRef} className="relative h-[300vh] z-[3]">
      <div className="sticky top-0 h-[100vh] flex items-center overflow-hidden bg-black">
        <motion.div style={{ x }} className="flex gap-10">
          <div className="shrink-0 w-[500px] flex items-center px-12">
            <h2 className="text-8xl font-black uppercase italic leading-none text-white">The<br/><span className="text-purple-500">Vibe.</span></h2>
          </div>
          <div className="flex gap-10">
            {["Culture", "Tech", "Startup", "Cafes"].map((item, i) => (
              <div key={i} className="shrink-0 w-[400px] h-[500px] bg-purple-900/20 border border-white/10 rounded-3xl overflow-hidden relative group">
                <img 
                  src={`https://images.unsplash.com/photo-${1550000000000 + (i*1000)}?auto=format&fit=crop&q=80`} 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                  alt={item}
                />
                <h3 className="absolute bottom-8 left-8 text-white text-3xl font-black uppercase italic">{item}</h3>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const StatsBento = () => (
  <section className="h-full p-8 md:p-12 bg-white">
    <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-full">
      <div className="col-span-2 bg-black text-white p-10 rounded-[2rem] flex flex-col justify-between border-2 border-purple-500/20">
        <Sparkles className="text-purple-400" />
        <h3 className="text-7xl font-black italic">95%<br/><span className="text-sm not-italic opacity-50 uppercase tracking-widest text-purple-400">Placement Rate</span></h3>
      </div>
      <div className="bg-zinc-100 p-10 rounded-[2rem] flex flex-col justify-center border border-zinc-200">
        <Building2 className="mb-4 text-purple-600" />
        <p className="text-4xl font-black">100+</p>
        <p className="text-xs font-bold opacity-40 uppercase">Institutions</p>
      </div>
      <div className="bg-purple-600 text-white p-10 rounded-[2rem] flex flex-col justify-center">
        <Globe2 className="mb-4 text-white" />
        <p className="text-4xl font-black">50+</p>
        <p className="text-xs font-bold opacity-80 uppercase">Global Partners</p>
      </div>
      <div className="col-span-2 bg-zinc-900 text-white p-10 rounded-[2rem] flex items-center gap-8">
        <div className="w-16 h-16 rounded-full border border-purple-500/50 flex items-center justify-center animate-pulse">
            <div className="w-4 h-4 bg-purple-400 rounded-full" />
        </div>
        <p className="font-black uppercase text-xs tracking-widest">Direct Student Support Channels Open 24/7</p>
      </div>
      <div className="col-span-2 bg-zinc-100 p-10 rounded-[2rem] flex flex-col justify-center border border-zinc-200">
        <GraduationCap className="mb-4 text-purple-600" />
        <p className="text-4xl font-black">10,000+</p>
        <p className="text-xs font-bold opacity-40 uppercase">Alumni Network</p>
      </div>
    </div>
  </section>
);

const ExploreGrid = () => {
  const [hovered, setHovered] = useState(null);

  const categories = [
    { 
      id: "01", 
      title: 'Universities', 
      img: 'https://images.unsplash.com/photo-1541339907198-e08756defe93?auto=format&fit=crop&q=80',
      desc: 'Access world-class engineering and research faculties in the Silicon Valley of India.'
    },
    { 
      id: "02", 
      title: 'Online', 
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
      desc: 'Flexible hybrid programs designed to fit the fast-paced tech industry lifestyle.'
    },
    { 
      id: "03", 
      title: 'Housing', 
      img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80',
      desc: 'Modern student living spaces located in the city’s highest energy neighborhoods.'
    },
    { 
      id: "04", 
      title: 'Career', 
      img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80',
      desc: 'Unlock direct placement opportunities with global Fortune 500 tech giants.'
    },
  ];

  return (
    <section className="h-full flex flex-col bg-white overflow-hidden">
      <div className="p-12 border-b border-zinc-100 flex justify-between items-end bg-white z-20">
        <h2 className="text-5xl font-black uppercase italic tracking-tighter">
          Your <span className="text-purple-600">Future</span>
        </h2>
        <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-purple-600">
          View All
        </button>
      </div>

      <div className="flex-1 flex w-full h-full overflow-hidden">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            animate={{ 
              // Dramatically increased flex for ultra-wide hover effect
              flex: hovered === i ? 5 : 1,
            }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
            className="relative border-r border-zinc-100 cursor-pointer group flex flex-col justify-between p-10 overflow-hidden"
          >
            {/* Expanded Background Image with Parallax */}
            <AnimatePresence>
              {hovered === i && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/60 to-transparent z-10" />
                  <motion.img 
                    initial={{ scale: 1.2, x: -20 }}
                    animate={{ scale: 1, x: 0 }}
                    src={cat.img} 
                    alt={cat.title} 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Top Label */}
            <div className="relative z-20">
              <span className={`text-sm font-bold transition-colors duration-500 ${hovered === i ? 'text-purple-300' : 'opacity-30'}`}>
                {cat.id}
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-20">
              <div className="flex flex-col gap-4">
                <h4 className={`text-4xl md:text-5xl font-black uppercase italic transition-colors duration-500 ${hovered === i ? 'text-white' : 'text-black'}`}>
                  {cat.title}
                </h4>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    opacity: hovered === i ? 1 : 0,
                    height: hovered === i ? "auto" : 0 
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-purple-100 text-lg font-medium max-w-md mb-8 leading-tight">
                    {cat.desc}
                  </p>
                  <div className="flex items-center gap-3 text-white font-bold text-xs uppercase tracking-[0.3em]">
                    Explore Now <MoveRight size={20} className="group-hover:translate-x-3 transition-transform duration-300" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="h-full bg-black flex flex-col items-center justify-center text-white relative">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),transparent)]" />
    <h2 className="text-[10vw] font-black uppercase italic leading-none mb-10 z-10">Start <span className="text-purple-500">Now.</span></h2>
    <button className="px-12 py-6 bg-purple-600 text-white text-2xl font-black uppercase italic hover:bg-white hover:text-black hover:scale-110 transition-all z-10 shadow-[0_0_30px_rgba(147,51,234,0.4)]">
      Get Free Advice
    </button>
  </section>
);

/* --- UTILS --- */
const CustomCursor = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    useEffect(() => {
      const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
      window.addEventListener("mousemove", handleMove);
      return () => window.removeEventListener("mousemove", handleMove);
    }, []);
    return (
      <motion.div 
        animate={{ x: pos.x - 10, y: pos.y - 10 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className="fixed top-0 left-0 w-5 h-5 bg-purple-500 rounded-full z-[999] pointer-events-none mix-blend-difference hidden md:block"
      />
    );
};

const Footer = () => (
  <footer className="bg-black py-20 px-10 text-center relative z-[10] border-t border-purple-900/30">
    <h2 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white">SIB.<span className="text-purple-500">GLOBAL</span></h2>
    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">© 2026 Bengaluru Portal • Built for the future</p>
  </footer>
);

export default StudyInBLR;