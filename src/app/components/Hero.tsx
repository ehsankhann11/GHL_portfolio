'use client';

import { Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="mesh-gradient relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="mb-8 flex items-center gap-2 px-5 py-2 rounded-full border border-green-500/20 bg-green-500/5 backdrop-blur-sm animate-fade-in">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-500">Systems Ready for New Builds</span>
      </div>

      <div className="mb-6 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
        <Zap className="w-3.5 h-3.5 text-blue-500" strokeWidth={2} />
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">AI Integrations · GHL Architecture · Full-Stack Automation</span>
      </div>

      <h1 className="text-[48px] md:text-[96px] font-black leading-[0.85] text-center tracking-tighter mb-8 animate-fade-in">
        ELITE AI INTEGRATIONS &
        <br />
        <span className="text-gray-500 italic">GHL AUTOMATION ENGINEERING</span>
      </h1>

        <p className="max-w-2xl text-center text-gray-400 text-lg md:text-xl mb-10 font-light leading-relaxed animate-fade-in delay-200">
        I am Ehsan, a Full-Stack AI & Automation Engineer. I help businesses scale through <span className="text-blue-500 font-semibold">custom AI solutions</span> and <span className="text-blue-500 font-semibold">end-to-end GoHighLevel CRM workflows</span>.
        <br />
        Less manual work. More booked calls.
      </p>


      <div className="flex flex-col md:flex-row gap-5 w-full md:w-auto animate-fade-in delay-300">
        <a
          href="#contact"
          className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-center uppercase tracking-widest hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-600/20"
        >
          Book a Consultation
        </a>
        <a
          href="#case-studies"
          className="bg-white/5 border border-white/10 text-white px-12 py-5 rounded-2xl font-black text-center uppercase tracking-widest hover:bg-white/10 transition-all"
        >
          Explore My Work
        </a>
      </div>

      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 border-t border-white/5 pt-12 w-full max-w-5xl animate-fade-in delay-500">
        <div className="text-center group">
          <div className="text-3xl font-black group-hover:text-blue-500 transition-colors">48–72hr</div>
          <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mt-2 font-bold">Turnaround</div>
        </div>
        <div className="text-center group">
          <div className="text-3xl font-black group-hover:text-blue-500 transition-colors">100%</div>
          <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mt-2 font-bold">White-Label</div>
        </div>
        <div className="text-center group">
          <div className="text-3xl font-black group-hover:text-blue-500 transition-colors">AI/LLM</div>
          <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mt-2 font-bold">Integration</div>
        </div>
        <div className="text-center group">
          <div className="text-3xl font-black group-hover:text-blue-500 transition-colors">GHL</div>
          <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mt-2 font-bold">Architecture</div>
        </div>
      </div>
    </section>
  );
}

