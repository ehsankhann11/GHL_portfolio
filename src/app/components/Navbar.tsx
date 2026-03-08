'use client';

import { useModal } from "./ClientProviders";

const Navbar = () => {
  const { openModal } = useModal();

  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-black/40 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <div className="text-2xl font-black tracking-tighter">
         Ehsan Ud Din <span className="text-blue-500 italic"></span>
        </div>

        {/* NAVIGATION LINKS - Optimized */}
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.25em] font-bold text-gray-500">
          <a href="#services" className="hover:text-blue-500 transition-colors duration-300">Services</a>
          <a href="#case-studies" className="hover:text-blue-500 transition-colors duration-300">Case Studies</a>
          <a href="#pricing" className="hover:text-blue-500 transition-colors duration-300">Pricing</a>
        </div>

        {/* CTAs - Hire Me As GHL VA */}
        <div className="flex items-center gap-4">
          <a href="https://wa.me/923185164128?text=Hi%20Ehsan,%20I%20am%20interested%20in%20hiring%20you%20as%20a%20GHL%20VA" target="_blank" rel="noopener noreferrer" className="bg-blue-600 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all duration-500 shadow-lg shadow-blue-600/20">
            Hire Me As GHL VA
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
