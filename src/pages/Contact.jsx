import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Plus, X, ArrowRight, Command, Layers, HardDrive } from 'lucide-react';

const SpatialContact = () => {
  const [expanded, setExpanded] = useState(null);

  const stack = [
    { id: 'dev', title: 'Technical Inquiry', color: 'bg-zinc-100 text-black', icon: <Command size={20}/>, content: 'API access, portal bugs, or integration support.' },
    { id: 'adm', title: 'Admissions Desk', color: 'bg-blue-600 text-white', icon: <Layers size={20}/>, content: 'Application status, eligibility, and university matching.' },
    { id: 'biz', title: 'Global Partnerships', color: 'bg-zinc-800 text-zinc-400', icon: <HardDrive size={20}/>, content: 'Institutional MOUs and ecosystem collaborations.' },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white flex items-center justify-center p-6 font-sans">
      <div className="max-w-4xl w-full">
        
        {/* TOP BAR */}
        <div className="flex justify-between items-end mb-12 px-2">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter">SELECT A PATH</h2>
            <p className="text-zinc-500 font-mono text-xs mt-2 uppercase tracking-[0.3em]">Communication Layer 01</p>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[10px] text-zinc-600 font-mono">EST. TIME: 0.2s RESP</p>
          </div>
        </div>

        <LayoutGroup>
          <div className="flex flex-col gap-3">
            {stack.map((item) => (
              <motion.div
                layout
                key={item.id}
                onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                className={`${item.color} rounded-[2rem] cursor-pointer overflow-hidden relative`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: expanded ? 1 : 0.99 }}
              >
                <div className="p-8 md:p-12">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                      <span className="opacity-50 font-mono text-sm">0{stack.indexOf(item) + 1}</span>
                      <h3 className="text-2xl md:text-4xl font-bold tracking-tight uppercase italic">{item.title}</h3>
                    </div>
                    <motion.div 
                        animate={{ rotate: expanded === item.id ? 45 : 0 }}
                        className="w-12 h-12 rounded-full border border-current flex items-center justify-center"
                    >
                      <Plus />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expanded === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-12"
                      >
                        <div className="grid md:grid-cols-2 gap-12">
                          <div className="space-y-6">
                            <p className="text-lg md:text-xl font-medium leading-relaxed opacity-80">
                              {item.content}
                            </p>
                            <div className="flex gap-4">
                                <div className="p-4 bg-black/10 rounded-2xl inline-flex items-center gap-3 font-bold text-sm">
                                    {item.icon} PRIORITY ACCESS
                                </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-4">
                            <input 
                                placeholder="Your Secure Email" 
                                className="bg-black/5 border border-black/10 p-5 rounded-2xl focus:ring-1 focus:ring-black outline-none placeholder:text-current opacity-60" 
                            />
                            <button className="bg-black text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm">
                                Open Channel <ArrowRight size={16} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </LayoutGroup>

        {/* BOTTOM DECORATION */}
        <div className="mt-12 flex justify-center opacity-20 grayscale">
            <div className="flex gap-1">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full" />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SpatialContact;