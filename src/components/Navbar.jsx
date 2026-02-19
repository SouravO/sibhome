import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// Replaced Gamepad2 with MessageCircle
import { Home, Layers, Mail, BookOpenText, Sparkles, MessageCircle, Command, ArrowRight } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: BookOpenText },
  { name: 'Gallery', path: '/blog', icon: Layers },
  { name: 'Contact', path: '/contact', icon: Mail },
];

const ModernWideNav = () => {
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        
        {/* 1. Brand Tile */}
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="h-14 px-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-white/10 rounded-2xl flex items-center gap-3 shadow-sm"
        >
          <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
            <Command size={18} className="text-white dark:text-black" />
          </div>
          <span className="font-bold tracking-tighter uppercase text-sm hidden sm:block">Nexus Studio</span>
        </motion.div>

        {/* 2. Main Navigation Bento */}
        <nav className="flex-1 h-14 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-white/10 rounded-2xl flex items-center justify-center px-2 shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-1 w-full justify-around md:justify-center md:gap-8">
            {navItems.map((item, idx) => {
              const isActive = location.pathname === item.path;
              const isHovered = hovered === idx;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative py-2 px-4 group"
                >
                  <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                    isActive || isHovered ? 'text-black dark:text-white' : 'text-zinc-500'
                  }`}>
                    {item.name}
                  </span>
                  
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-black dark:bg-white"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* 3. Utility / CTA Bento */}
        <div className="hidden md:flex items-center gap-2 h-14">
          <div className="flex items-center gap-1 h-full px-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-white/10 rounded-2xl shadow-sm">
             <button className="p-2 hover:bg-zinc-100 dark:hover:bg-white/10 rounded-xl transition-colors text-orange-500">
               <Sparkles size={20} />
             </button>
             
             {/* WhatsApp Icon Replaces Gamepad2 */}
             <button 
                onClick={() => window.open('https://wa.me/YOUR_NUMBER', '_blank')}
                className="p-2 hover:bg-zinc-100 dark:hover:bg-white/10 rounded-xl transition-colors text-emerald-500"
             >
               <MessageCircle size={20} />
             </button>
          </div>

          <motion.button 
            whileHover={{ x: 5 }}
            className="h-full px-6 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg"
          >
            Hire Us <ArrowRight size={14} />
          </motion.button>
        </div>

      </div>
    </header>
  );
};

export default ModernWideNav;