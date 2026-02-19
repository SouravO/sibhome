import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Send, Github, Twitter, Mail, ArrowUpRight, Globe } from 'lucide-react';

const ModernBentoFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] text-white pt-20 pb-10 px-6 overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-600/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Main CTA Card - Span 8 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 bg-zinc-900/50 border border-white/10 p-10 rounded-3xl backdrop-blur-md flex flex-col justify-between group"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
                Let's build <br /> 
                <span className="text-zinc-500 group-hover:text-blue-400 transition-colors duration-500">something iconic.</span>
              </h2>
              <button className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-400 transition-all">
                START A PROJECT <Send size={18} />
              </button>
            </div>
            
            <div className="mt-12 flex gap-8">
               <div>
                 <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Email us</p>
                 <a href="mailto:hello@nexus.com" className="text-xl hover:underline decoration-blue-500 underline-offset-8">hello@nexus.com</a>
               </div>
               <div>
                 <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Call us</p>
                 <a href="tel:+123456789" className="text-xl">+1 (234) 567-890</a>
               </div>
            </div>
          </motion.div>

          {/* Social Links Bento - Span 4 */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            {[
              { icon: <Twitter />, label: 'Twitter', color: 'hover:bg-sky-500' },
              { icon: <Github />, label: 'Github', color: 'hover:bg-zinc-700' },
              { icon: <Globe />, label: 'Dribbble', color: 'hover:bg-pink-500' },
              { icon: <Mail />, label: 'Substack', color: 'hover:bg-orange-500' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href="#"
                whileHover={{ scale: 0.95 }}
                className={`flex flex-col items-center justify-center p-6 bg-zinc-900/50 border border-white/10 rounded-3xl transition-colors ${social.color}`}
              >
                {social.icon}
                <span className="text-xs mt-2 font-medium uppercase tracking-tighter">{social.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Location/Time Card - Span 4 */}
          <div className="md:col-span-4 bg-blue-600 p-8 rounded-3xl flex flex-col justify-between overflow-hidden relative">
             <div className="z-10">
                <p className="font-bold text-2xl">BENGALURU, IN</p>
                <p className="text-blue-200 text-sm">12:42 PM GMT+5:30</p>
             </div>
             <div className="absolute -right-8 -bottom-8 opacity-20 rotate-12">
                <Globe size={200} />
             </div>
          </div>

          {/* Newsletter Card - Span 8 */}
          <div className="md:col-span-8 bg-zinc-900/50 border border-white/10 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-bold text-xl">The Nexus Dispatch</p>
              <p className="text-zinc-400 text-sm">Insights on design, code, and the future.</p>
            </div>
            <div className="flex w-full md:w-auto bg-black/50 border border-white/10 rounded-full p-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-transparent px-4 py-2 outline-none text-sm w-full"
              />
              <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm">Join</button>
            </div>
          </div>
        </div>

        {/* Legal & Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-xs">
          <p>© {currentYear} NEXUS ADMIT. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-white transition-colors">COOKIES</a>
          </div>
          <motion.button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -3 }}
            className="mt-6 md:mt-0 flex items-center gap-2 group"
          >
            BACK TO TOP <div className="p-2 border border-zinc-700 rounded-full group-hover:border-white"><ArrowUpRight size={14} /></div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default ModernBentoFooter;