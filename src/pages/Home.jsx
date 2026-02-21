import React, { useRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
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
 * Added 'index' prop to handle z-index stacking.
 * Ensuring bg-white is solid and opacity transform is subtler.
 */
const SectionCard = ({ children, sticky = true, index }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  // We scale down the card slightly to create the "stacking" depth
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  
  return (
    <div 
      ref={container} 
      className={`relative h-[110vh] flex items-center justify-center ${sticky ? 'sticky top-0' : ''}`}
      style={{ zIndex: index }} // Higher index cards appear on top
    >
      <motion.div 
        style={{ scale }}
        // Added 'bg-white' and 'z-10' to ensure content is opaque and layered correctly
        className="w-[95%] h-[90vh] bg-white rounded-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)] border border-zinc-200 overflow-hidden relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
};

const StudyInBLR = () => {
  return (
    <div className="bg-zinc-100 text-black selection:bg-yellow-300">
      <CustomCursor />
      <Navbar />
      
      <main className="px-4">
        {/* Pass index to each card to maintain stacking order */}
        <SectionCard index={1}>
          <Hero />
        </SectionCard>

        <SectionCard index={2}>
          <VisionSection />
        </SectionCard>

        {/* This is a tall section for horizontal scroll, it doesn't need the Card wrapper logic */}
        <HorizontalGalleryCard />

        <SectionCard index={4}>
          <StatsBento />
        </SectionCard>

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

/* --- SUB-COMPONENTS (Mostly unchanged, but ensuring solid BGs) --- */

const Navbar = () => (
  <nav className="fixed top-0 w-full z-[100] px-10 py-8 flex justify-between items-center mix-blend-difference text-white">
    <div className="text-2xl font-black tracking-tighter">SIB.</div>
    <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
      <a href="#" className="hover:text-yellow-400 transition-colors">Universities</a>
      <a href="#" className="hover:text-yellow-400 transition-colors">Accommodation</a>
      <a href="#" className="hover:text-yellow-400 transition-colors">Careers</a>
    </div>
    <button className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase hover:bg-yellow-400 transition-colors">
      Apply
    </button>
  </nav>
);

const Hero = () => (
  <section className="h-full w-full flex flex-col items-center justify-center bg-white relative">
    <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
        <h1 className="text-[40vw] font-black">BLR</h1>
    </div>
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-center z-10"
    >
      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-4 block">
        India's Education Epicenter
      </span>
      <h1 className="text-[12vw] font-black leading-[0.8] tracking-tighter italic uppercase">
        Study In<br />Bengaluru
      </h1>
      <button className="mt-10 group flex items-center gap-4 text-xl font-black uppercase italic mx-auto">
        Start Journey <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>
    </motion.div>
  </section>
);

const VisionSection = () => (
  <section className="h-full w-full flex flex-col md:flex-row bg-white">
    <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
      <h2 className="text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
        Beyond<br />Degrees.
      </h2>
      <p className="text-xl text-zinc-500 font-medium max-w-sm uppercase">
        We bridge the gap between academic theory and the tech industry's pulse.
      </p>
    </div>
    <div className="w-full md:w-1/2 bg-zinc-200 relative group overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
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
      <div className="sticky top-0 h-[100vh] flex items-center overflow-hidden bg-zinc-100">
        <motion.div style={{ x }} className="flex gap-10">
          <div className="shrink-0 w-[500px] flex items-center px-12">
            <h2 className="text-8xl font-black uppercase italic leading-none">The<br/>Vibe.</h2>
          </div>
          <div className="flex gap-10">
            {["Culture", "Tech", "Startup", "Cafes"].map((item, i) => (
              <div key={i} className="shrink-0 w-[400px] h-[500px] bg-zinc-800 rounded-3xl overflow-hidden relative group">
                <img 
                  src={`https://images.unsplash.com/photo-${1550000000000 + (i*1000)}?auto=format&fit=crop&q=80`} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" 
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
      <div className="col-span-2 bg-black text-white p-10 rounded-[2rem] flex flex-col justify-between">
        <Sparkles className="text-yellow-400" />
        <h3 className="text-7xl font-black italic">95%<br/><span className="text-sm not-italic opacity-50 uppercase tracking-widest">Placement Rate</span></h3>
      </div>
      <div className="bg-zinc-100 p-10 rounded-[2rem] flex flex-col justify-center">
        <Building2 className="mb-4 text-zinc-400" />
        <p className="text-4xl font-black">100+</p>
        <p className="text-xs font-bold opacity-40 uppercase">Institutions</p>
      </div>
      <div className="bg-yellow-400 p-10 rounded-[2rem] flex flex-col justify-center">
        <Globe2 className="mb-4" />
        <p className="text-4xl font-black">50+</p>
        <p className="text-xs font-bold opacity-60 uppercase">Global Partners</p>
      </div>
      <div className="col-span-2 bg-zinc-900 text-white p-10 rounded-[2rem] flex items-center gap-8">
        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center animate-pulse">
            <div className="w-4 h-4 bg-green-400 rounded-full" />
        </div>
        <p className="font-black uppercase text-xs tracking-widest">Direct Student Support Channels Open 24/7</p>
      </div>
      <div className="col-span-2 bg-zinc-100 p-10 rounded-[2rem] flex flex-col justify-center">
        <GraduationCap className="mb-4 text-zinc-400" />
        <p className="text-4xl font-black">10,000+</p>
        <p className="text-xs font-bold opacity-40 uppercase">Alumni Network</p>
      </div>
    </div>
  </section>
);

const ExploreGrid = () => (
  <section className="h-full flex flex-col bg-white">
    <div className="p-12 border-b border-zinc-100 flex justify-between items-end">
      <h2 className="text-5xl font-black uppercase italic tracking-tighter">Your Future</h2>
      <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black">View All</button>
    </div>
    <div className="flex-1 grid grid-cols-2 md:grid-cols-4">
      {['Universities', 'Online', 'Housing', 'Career'].map((cat, i) => (
        <div key={i} className="border-r border-zinc-100 p-10 hover:bg-black hover:text-white transition-colors cursor-pointer group flex flex-col justify-between">
           <span className="text-xs font-bold opacity-30">0{i+1}</span>
           <h4 className="text-2xl font-black uppercase italic">{cat}</h4>
           <MoveRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      ))}
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="h-full bg-black flex flex-col items-center justify-center text-white relative">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]" />
    <h2 className="text-[10vw] font-black uppercase italic leading-none mb-10 z-10">Start Now.</h2>
    <button className="px-12 py-6 bg-yellow-400 text-black text-2xl font-black uppercase italic hover:scale-110 transition-transform z-10">
      Get Free Advice
    </button>
  </section>
);

/* --- UTILS --- */
const CustomCursor = () => {
    const [pos, setPos] = React.useState({ x: 0, y: 0 });
    React.useEffect(() => {
      const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
      window.addEventListener("mousemove", handleMove);
      return () => window.removeEventListener("mousemove", handleMove);
    }, []);
    return (
      <motion.div 
        animate={{ x: pos.x - 10, y: pos.y - 10 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className="fixed top-0 left-0 w-5 h-5 bg-yellow-400 rounded-full z-[999] pointer-events-none mix-blend-difference"
      />
    );
};

const Footer = () => (
  <footer className="bg-zinc-100 py-20 px-10 text-center relative z-[10]">
    <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">SIB.GLOBAL</h2>
    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">© 2026 Bengaluru Portal • Built for the future</p>
  </footer>
);

export default StudyInBLR;