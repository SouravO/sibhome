import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, HelpCircle, ArrowRight, Instagram, Twitter, Linkedin, MapPin, ExternalLink } from 'lucide-react';

const SIB_SpotifyContact = () => {
  const categories = [
    { 
        title: "Admissions Support", 
        desc: "Eligibility, application tracking, and university protocols.", 
        icon: <HelpCircle className="text-cyan-400" size={24} /> 
    },
    { 
        title: "Technical Interface", 
        desc: "Issues with portal login, document sync, or digital assets.", 
        icon: <MessageCircle className="text-cyan-400" size={24} /> 
    },
    { 
        title: "Partnerships", 
        desc: "Institutional collaborations and ecosystem expansion.", 
        icon: <Mail className="text-cyan-400" size={24} /> 
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* SECTION 1: BOLD HEADER (Spotify "Big Type" Style) */}
      <section className="pt-32 pb-16 px-6 md:px-12 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[13vw] md:text-[9vw] font-black leading-[0.8] tracking-tighter uppercase mb-8">
              LET'S<br /><span className="text-zinc-500">TALK.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium leading-tight">
              Direct uplink to the Study in Bengaluru admission network. 
              Find the right channel for your inquiry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CONTENT GRID */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* LEFT COLUMN: NAVIGATION & FORM */}
          <div className="lg:col-span-7">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-500 mb-10">Select Category</h2>
            
            <div className="space-y-4 mb-24">
              {categories.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ backgroundColor: "rgba(39, 39, 42, 0.8)", x: 10 }}
                  className="group flex items-center justify-between p-8 bg-zinc-900/40 rounded-2xl cursor-pointer transition-all border border-transparent hover:border-zinc-700"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center border border-zinc-800">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                      <p className="text-zinc-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="text-zinc-700 group-hover:text-white transition-colors" />
                </motion.div>
              ))}
            </div>

            {/* INTEGRATED CONTACT FORM */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Direct Transmission</h2>
                <p className="text-zinc-500 font-medium">Fill out the protocol below and our team will respond within 24 hours.</p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="col-span-1 bg-zinc-900 border border-zinc-800 p-5 rounded-2xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all placeholder:text-zinc-600 font-medium" 
                />
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="col-span-1 bg-zinc-900 border border-zinc-800 p-5 rounded-2xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all placeholder:text-zinc-600 font-medium" 
                />
                <div className="md:col-span-2">
                  <textarea 
                    rows="6" 
                    placeholder="Describe your inquiry..." 
                    className="w-full bg-zinc-900 border border-zinc-800 p-5 rounded-2xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all placeholder:text-zinc-600 font-medium" 
                  />
                </div>
                <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="md:col-span-2 bg-white text-black font-black uppercase py-6 rounded-full text-lg tracking-widest hover:bg-cyan-500 transition-colors"
                >
                  Send Transmission
                </motion.button>
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN: STICKY INFO PANEL */}
          <div className="lg:col-span-5">
            <div className="sticky top-12 space-y-16">
              
              {/* ADDRESS BLOCK */}
              <div className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-500">Headquarters</h4>
                <div className="flex gap-4">
                    <div className="mt-1 text-zinc-500"><MapPin size={20}/></div>
                    <p className="text-2xl font-bold leading-tight">
                        Bengaluru Node // Innovation Hub<br />
                        Karnataka, India 560001
                    </p>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-bold text-sm border-b border-zinc-800 pb-1">
                    VIEW ON GOOGLE MAPS <ExternalLink size={14} />
                </a>
              </div>

              {/* SOCIAL CONNECT */}
              <div className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-500">Social Uplink</h4>
                <div className="flex gap-3">
                  <SocialButton icon={<Instagram size={20}/>} label="Instagram" />
                  <SocialButton icon={<Twitter size={20}/>} label="Twitter" />
                  <SocialButton icon={<Linkedin size={20}/>} label="LinkedIn" />
                </div>
              </div>

              {/* URGENT SUPPORT CARD */}
              <div className="p-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[2.5rem] text-black shadow-2xl relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-all duration-700" />
                <h4 className="font-black text-3xl leading-none uppercase mb-2">Live Support?</h4>
                <p className="text-black/70 font-bold mb-8 uppercase text-xs tracking-wider">Fast-track admission hotline</p>
                
                <div className="space-y-2">
                    <p className="text-4xl font-black tracking-tighter">+91 (80) 4000 0000</p>
                    <p className="text-sm font-bold opacity-60 uppercase">Available 09:00 — 18:00 IST</p>
                </div>
              </div>

              {/* SYSTEM STATUS FEED */}
              <div className="flex items-center gap-3 px-6 py-4 bg-zinc-900/50 rounded-full border border-zinc-800 w-fit">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Global Admissions System: Online</span>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* MINIMAL FOOTER */}
      <footer className="py-20 border-t border-zinc-900 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="font-black text-xl tracking-tighter">SIB // CONSULTANCY</div>
            <div className="flex gap-8 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Portal</a>
            </div>
            <div className="text-zinc-600 font-mono text-[10px]">© 2026 BENGALURU, IN</div>
        </div>
      </footer>
    </div>
  );
};

const SocialButton = ({ icon, label }) => (
  <motion.a 
    href="#" 
    whileHover={{ y: -4, backgroundColor: "#fff", color: "#000" }}
    className="w-14 h-14 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-2xl transition-all"
    title={label}
  >
    {icon}
  </motion.a>
);

export default SIB_SpotifyContact;