'use client';

import { useModal } from "./ClientProviders";

export default function ReadyToAutomate() {
  const { openModal } = useModal();

  return (
    <section className="py-24 md:py-32 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-neutral-900 to-purple-900/20 -z-10"></div>
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
          Ready To<br/>Hand Over Your GHL Account?
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Give me your account — let me automate it. You focus on closing deals while I handle everything behind the scenes. White-label, always.
        </p>
        
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <a href="https://wa.me/923185164128?text=Hi%20Ehsan,%20I%20am%20interested%20in%20hiring%20you%20as%20a%20GHL%20VA" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-600/20">
            Hire Me As GHL VA
          </a>
          <a href="https://wa.me/923185164128?text=Hi%20Ehsan,%20I%20want%20to%20get%20a%20free%20account%20audit" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all">
            Get Free Account Audit
          </a>
        </div>
      </div>
    </section>
  );
}

