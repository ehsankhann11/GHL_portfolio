'use client';

import { useModal } from "./ClientProviders";

export default function Hero() {
    const { openModal } = useModal();

    return (
        <section className="mesh-gradient relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden">
          {/* Background Decorative Glow (Optional) */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
          {/* 1. Status Badge with Pulse */}
          <div className="mb-8 flex items-center gap-2 px-5 py-2 rounded-full border border-green-500/20 bg-green-500/5 backdrop-blur-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-500">Available For New Projects</span>
          </div>
          
          {/* Trusted Badge */}
          <div className="mb-6 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-blue-500">⭐</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">Trusted by Agencies Across UAE, UK & Pakistan</span>
          </div>
          {/* 2. Main Headline */}
          <h1 className="text-[55px] md:text-[100px] font-black leading-[0.85] text-center tracking-tighter mb-8 animate-fade-in">
            YOUR DEDICATED
            <br />
            <span className="text-gray-500 italic">GHL VA — I BUILD & AUTOMATE WHILE YOU CLOSE</span>
          </h1>
          {/* 3. Description */}
          <p className="max-w-2xl text-center text-gray-400 text-lg md:text-xl mb-12 font-light leading-relaxed animate-fade-in delay-200">
            Stop worrying about pipelines, follow-ups, and lead automation. I handle it all — <span className="text-blue-500 font-semibold">white-label, 48–72hr turnaround</span>. Your clients see your brand, I work behind the scenes.
          </p>
          {/* 4. Action Buttons */}
          <div className="flex flex-col md:flex-row gap-5 w-full md:w-auto animate-fade-in delay-300">
            <a href="https://wa.me/923185164128?text=Hi%20Ehsan,%20I%20am%20interested%20in%20the%20GHL%20VA%20service%20at%20$800/mo" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-center uppercase tracking-widest hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-600/20" >
              Hire GHL VA — $800/mo
            </a>
            <a href="#pricing" className="bg-white/5 border border-white/10 text-white px-12 py-5 rounded-2xl font-black text-center uppercase tracking-widest hover:bg-white/10 transition-all" >
              Get Automation System
            </a>
          </div>
          {/* 5. Trust Badges (The "Dany K" Style Grid) */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 border-t border-white/5 pt-12 w-full max-w-5xl animate-fade-in delay-500">
            <div className="text-center group">
              <div className="text-3xl font-black group-hover:text-blue-500 transition-colors">48H</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mt-2 font-bold">Turnaround</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-black group-hover:text-blue-500 transition-colors">100%</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mt-2 font-bold">White Label</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-black group-hover:text-blue-500 transition-colors">AI/ML</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mt-2 font-bold">Expertise</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-black group-hover:text-blue-500 transition-colors">GHL</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mt-2 font-bold">Specialist</div>
            </div>
          </div>
        </section>
      );
    }
