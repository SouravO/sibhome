import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Layers, Mail, BookOpenText } from 'lucide-react';

// Using your specified color palette
const navItems = [
  { name: 'Home', path: '/', icon: Home, color: 'bg-[#ef6925]' }, // Industrial Orange
  { name: 'About', path: '/about', icon: BookOpenText, color: 'bg-white' }, 
  { name: 'Gallery', path: '/blog', icon: Layers, color: 'bg-[#8B5CF6]' }, // Funky Purple
  { name: 'Contact', path: '/contact', icon: Mail, color: 'bg-black' },
];

const VibrantAdaptiveNav = () => {
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  return (
    <>
      {/* --- DESKTOP NAVIGATION (Brutal Right Bar) --- */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:block">
        <motion.div
          className="relative flex flex-col gap-4 p-3 bg-white border-[4px] border-black shadow-[8px_8px_0px_#000]"
        >
          {navItems.map((item, idx) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            const isHovered = hovered === idx;

            return (
              <Link
                key={item.name}
                to={item.path}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className="relative z-10 w-14 h-14 flex items-center justify-center group"
              >
                {/* Square Background for Active/Hover */}
                <AnimatePresence>
                  {(isHovered || isActive) && (
                    <motion.div
                      layoutId="industrial-square"
                      className={`absolute inset-0 z-0 border-2 border-black shadow-[4px_4px_0px_#000] ${item.color}`}
                      initial={{ scale: 0.8, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0.8, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    />
                  )}
                </AnimatePresence>

                <motion.div
                  className="relative z-10"
                  animate={{
                    color: (isHovered || isActive) ? (item.color === 'bg-black' ? "#fff" : "#000") : "#000",
                    scale: isHovered ? 1.2 : 1
                  }}
                >
                  <Icon size={24} strokeWidth={3} />
                </motion.div>

                {/* Tooltip (Sticker Style) */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: -10 }}
                      exit={{ opacity: 0, x: 20 }}
                      className={`absolute right-full mr-6 px-4 py-2 border-4 border-black font-black uppercase text-xs tracking-tighter shadow-[4px_4px_0px_#000] whitespace-nowrap ${item.color} ${item.color === 'bg-black' ? 'text-white' : 'text-black'}`}
                    >
                      {item.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}

          <div className="h-1 w-full bg-black my-1" />

          {/* Special Buttons - Wrapped in the same Industrial Style */}
          <div className="flex flex-col gap-4 items-center">
            <div className="hover:rotate-12 transition-transform cursor-pointer">
               {/* Replace with your Chatbot component */}
               <div className="w-10 h-10 bg-[#ef6925] border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#000] text-white font-black">?</div>
            </div>
            <div className="hover:-rotate-12 transition-transform cursor-pointer">
               {/* Replace with your SnakeGame component */}
               <div className="w-10 h-10 bg-[#8B5CF6] border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#000] text-white font-black">S</div>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* --- MOBILE NAVIGATION (Brutal Bottom Bar) --- */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99] lg:hidden w-full px-4 flex justify-center">
        <div className="flex items-center gap-3 bg-white border-[4px] border-black p-2 shadow-[6px_6px_0px_#000]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative w-12 h-12 flex items-center justify-center transition-all ${isActive ? `${item.color} border-2 border-black shadow-[3px_3px_0px_#000]` : ''}`}
              >
                <Icon 
                  size={20} 
                  strokeWidth={3} 
                  color={isActive && item.color === 'bg-black' ? "#fff" : "#000"} 
                />
              </Link>
            );
          })}
          
          <div className="w-1 h-8 bg-black mx-1" />
          
          <div className="flex gap-2">
            <div className="w-10 h-10 bg-[#ef6925] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000] text-white">?</div>
            <div className="w-10 h-10 bg-[#8B5CF6] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000] text-white">S</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default VibrantAdaptiveNav;