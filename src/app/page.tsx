import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ReadyToAutomate from "./components/ReadyToAutomate";
import PricingSection from "./components/PricingSection";

export const metadata = {
  title: "Ehsan Ud Din | GHL Automation Engineer",
  description:
    "AI Automation Engineer specializing in GoHighLevel (GHL) CRM automation, AI chatbots, RAG systems, and advanced workflow integrations for agencies.",
};

export default function Home() {
  return (
    <main className="bg-grid min-h-screen antialiased"> 
      <Navbar />
      <Hero />

      {/* TECH STACK BAR */}

      <div className="py-10 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">

          <span className="font-mono text-[11px] tracking-[0.3em]">PYTHON / FASTAPI</span>
          <span className="font-mono text-[11px] tracking-[0.3em]">GHL V2 API</span>
          <span className="font-mono text-[11px] tracking-[0.3em]">LLM / RAG SYSTEMS</span>
          <span className="font-mono text-[11px] tracking-[0.3em]">WEBHOOK AUTOMATIONS</span>
          <span className="font-mono text-[11px] tracking-[0.3em]">AI CHATBOTS</span>
          <span className="font-mono text-[11px] tracking-[0.3em]">YOLO COMPUTER VISION</span>

        </div>
      </div>

      {/* SERVICES */}

      <Services />

      {/* CASE STUDIES - Proof of Results */}

      <section id="case-studies" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 mb-6 font-bold">
            Real Results
          </h2>
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
            Problems Solved
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            See how I've helped businesses automate their sales and scale their operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Case Study 1 */}
          <div className="p-8 border border-white/10 bg-neutral-900/50 rounded-3xl hover:border-blue-500/30 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500 text-xl">
                🏢
              </div>
              <div>
                <h4 className="font-black text-xl">Real Estate Agency</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Lead Generation</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Client was manually following up with leads, losing 60% of potential deals. Built automated follow-up sequence with AI voice + SMS that booked 15 calls per week.
            </p>
            <div className="pt-4 border-t border-white/5">
              <span className="text-blue-500 font-bold text-2xl">+340%</span>
              <span className="text-gray-500 text-sm ml-2">Lead Response Rate</span>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="p-8 border border-white/10 bg-neutral-900/50 rounded-3xl hover:border-blue-500/30 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center text-green-500 text-xl">
                🏥
              </div>
              <div>
                <h4 className="font-black text-xl">Dental Clinic</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Appointment Booking</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Practice was losing patients due to manual booking. Integrated AI chatbot that handled 24/7 bookings, reducing staff workload by 70%.
            </p>
            <div className="pt-4 border-t border-white/5">
              <span className="text-green-500 font-bold text-2xl">$12K/mo</span>
              <span className="text-gray-500 text-sm ml-2">Revenue Recovered</span>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="p-8 border border-white/10 bg-neutral-900/50 rounded-3xl hover:border-blue-500/30 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-500 text-xl">
                🚀
              </div>
              <div>
                <h4 className="font-black text-xl">Marketing Agency</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Client Onboarding</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Agency was spending 20hrs/week on client onboarding. Automated entire flow with GHL workflows, freeing up team to focus on delivery.
            </p>
            <div className="pt-4 border-t border-white/5">
              <span className="text-purple-500 font-bold text-2xl">20hrs</span>
              <span className="text-gray-500 text-sm ml-2">Saved Per Week</span>
            </div>
          </div>

        </div>

        <div className="text-center mt-12">
          <a href="#pricing" className="inline-block border border-blue-500 text-blue-500 px-8 py-4 rounded-xl font-bold hover:bg-blue-500 hover:text-black transition">
            View Pricing
          </a>
        </div>

      </section>

      {/* WHO I WORK WITH */}

      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 mb-6 font-bold">
            Who I Work With
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 leading-[0.9]">
            Built For Growth-Minded Businesses
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            
            <div className="p-6 border border-white/10 bg-neutral-900/30 rounded-2xl hover:border-blue-500/30 transition-all">
              <div className="text-3xl mb-3">📈</div>
              <div className="font-bold uppercase tracking-wide">Marketing Agencies</div>
            </div>

            <div className="p-6 border border-white/10 bg-neutral-900/30 rounded-2xl hover:border-blue-500/30 transition-all">
              <div className="text-3xl mb-3">🏪</div>
              <div className="font-bold uppercase tracking-wide">Local Businesses</div>
            </div>

            <div className="p-6 border border-white/10 bg-neutral-900/30 rounded-2xl hover:border-blue-500/30 transition-all">
              <div className="text-3xl mb-3">🏠</div>
              <div className="font-bold uppercase tracking-wide">Real Estate Teams</div>
            </div>

            <div className="p-6 border border-white/10 bg-neutral-900/30 rounded-2xl hover:border-blue-500/30 transition-all">
              <div className="text-3xl mb-3">💼</div>
              <div className="font-bold uppercase tracking-wide">Coaches & Consultants</div>
            </div>

            <div className="p-6 border border-white/10 bg-neutral-900/30 rounded-2xl hover:border-blue-500/30 transition-all">
              <div className="text-3xl mb-3">🏥</div>
              <div className="font-bold uppercase tracking-wide">Health & Wellness</div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY HIRE ME AS YOUR VA */}

      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 mb-6 font-bold">
            Your Invisible Tech Partner
          </h2>
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
            Why Hire Me As Your GHL VA?
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Point 1 */}
          <div className="flex gap-6 p-8 border border-white/10 bg-neutral-900/30 rounded-3xl">
            <div className="flex-shrink-0 w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 text-2xl">
              🎯
            </div>
            <div>
              <h4 className="font-black text-xl uppercase tracking-tight mb-2">Full Account Management</h4>
              <p className="text-gray-400 text-sm">I take care of sub-accounts & pipelines end-to-end. You focus on closing deals.</p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="flex gap-6 p-8 border border-white/10 bg-neutral-900/30 rounded-3xl">
            <div className="flex-shrink-0 w-14 h-14 bg-green-600/20 rounded-2xl flex items-center justify-center text-green-500 text-2xl">
              🤖
            </div>
            <div>
              <h4 className="font-black text-xl uppercase tracking-tight mb-2">AI-Driven Automation</h4>
              <p className="text-gray-400 text-sm">Leads follow-up themselves. Calls get booked automatically. No manual work.</p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="flex gap-6 p-8 border border-white/10 bg-neutral-900/30 rounded-3xl">
            <div className="flex-shrink-0 w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center text-purple-500 text-2xl">
              🎭
            </div>
            <div>
              <h4 className="font-black text-xl uppercase tracking-tight mb-2">White-Label Ready</h4>
              <p className="text-gray-400 text-sm">Your clients see YOUR brand. I work behind the scenes — invisible to them.</p>
            </div>
          </div>

          {/* Point 4 */}
          <div className="flex gap-6 p-8 border border-white/10 bg-neutral-900/30 rounded-3xl">
            <div className="flex-shrink-0 w-14 h-14 bg-orange-600/20 rounded-2xl flex items-center justify-center text-orange-500 text-2xl">
              💬
            </div>
            <div>
              <h4 className="font-black text-xl uppercase tracking-tight mb-2">Dedicated Support</h4>
              <p className="text-gray-400 text-sm">WhatsApp / Email / Quick Adjustments. I'm just a message away.</p>
            </div>
          </div>

        </div>

        {/* Mini Pricing */}
        <div className="mt-12 text-center p-8 border border-blue-500/30 bg-blue-600/5 rounded-3xl max-w-2xl mx-auto">
          <h4 className="font-black text-2xl uppercase tracking-tight mb-2">GHL VA Service</h4>
          <p className="text-gray-400 text-sm mb-4">Give me your account — let me automate it</p>
          <div className="text-4xl font-black text-blue-500">
            $800<span className="text-lg text-gray-500">/month</span>
          </div>
        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 mb-6 font-bold">
            Results I Deliver
          </h2>
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
            Managed Accounts — Real Impact
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Result 1 */}
          <div className="p-8 border border-white/10 bg-neutral-900/50 rounded-3xl">
            <div className="text-4xl font-black text-blue-500 mb-4">18 Sales Calls/Week</div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              — on autopilot
            </p>
            <div className="text-sm text-gray-500 uppercase tracking-wider">
              Marketing Agency • Dubai
            </div>
          </div>

          {/* Result 2 */}
          <div className="p-8 border border-white/10 bg-neutral-900/50 rounded-3xl">
            <div className="text-4xl font-black text-green-500 mb-4">70%</div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Reduction in manual follow-up work after automating client onboarding workflows.
            </p>
            <div className="text-sm text-gray-500 uppercase tracking-wider">
              SaaS Reseller • Lahore
            </div>
          </div>

          {/* Result 3 */}
          <div className="p-8 border border-white/10 bg-neutral-900/50 rounded-3xl">
            <div className="text-4xl font-black text-purple-500 mb-4">40%</div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Increase in appointments after setting up 24/7 AI booking system.
            </p>
            <div className="text-sm text-gray-500 uppercase tracking-wider">
              Dental Clinic • UK
            </div>
          </div>

        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">References available on request</p>
        </div>

      </section>

      {/* SNAPSHOTS PORTFOLIO */}

      <section className="py-24 md:py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 mb-6 font-bold">
              Every System is Custom
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
              Built From Scratch For Your Business
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              I don't use generic templates. Every automation system is tailored to your specific business needs, workflows, and goals. What I build is 100% yours — white-label, always.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">

            {/* Custom 1 */}
            <div className="p-8 border border-white/10 bg-neutral-900/50 rounded-3xl text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                🎯
              </div>
              <h4 className="font-black text-lg uppercase tracking-tight mb-2">Tailored to Your Workflow</h4>
              <p className="text-gray-400 text-sm">Systems designed around how YOUR business operates, not generic templates.</p>
            </div>

            {/* Custom 2 */}
            <div className="p-8 border border-white/10 bg-neutral-900/50 rounded-3xl text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                🔒
              </div>
              <h4 className="font-black text-lg uppercase tracking-tight mb-2">100% White-Label</h4>
              <p className="text-gray-400 text-sm">Your clients see YOUR brand. Full ownership of everything I build.</p>
            </div>

            {/* Custom 3 */}
            <div className="p-8 border border-white/10 bg-neutral-900/50 rounded-3xl text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                ⚡
              </div>
              <h4 className="font-black text-lg uppercase tracking-tight mb-2">48-72hr Delivery</h4>
              <p className="text-gray-400 text-sm">Fast turnaround on custom builds. No waiting weeks for your system.</p>
            </div>

          </div>
        </div>
      </section>

      {/* TECH STACK - Visual */}

      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 mb-6 font-bold">
            Technical Stack
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 leading-[0.9]">
            Tools I Use
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            
            <div className="flex flex-col items-center gap-3 p-6">
              <div className="w-16 h-16 bg-orange-600/20 rounded-2xl flex items-center justify-center text-3xl">
                🔷
              </div>
              <span className="font-bold text-sm uppercase tracking-wider">GoHighLevel</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-6">
              <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center text-3xl">
                🤖
              </div>
              <span className="font-bold text-sm uppercase tracking-wider">OpenAI</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-6">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-3xl">
                📞
              </div>
              <span className="font-bold text-sm uppercase tracking-wider">Twilio</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center text-3xl">
                ⚡
              </div>
              <span className="font-bold text-sm uppercase tracking-wider">FastAPI</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-6">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center text-3xl">
                🐍
              </div>
              <span className="font-bold text-sm uppercase tracking-wider">Python</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-6">
              <div className="w-16 h-16 bg-blue-400/20 rounded-2xl flex items-center justify-center text-3xl">
                💳
              </div>
              <span className="font-bold text-sm uppercase tracking-wider">Stripe</span>
            </div>

          </div>
        </div>
      </section>

      {/* READY TO AUTOMATE - Client Component with Modal */}

      <ReadyToAutomate />

      {/* PROCESS - Building Trust */}

      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto bg-white/[0.02]">
        
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 mb-6 font-bold">
            How It Works
          </h2>
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
            Your Path to Scale
          </h3>
        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {/* Step 1 */}
          <div className="text-center p-8 border border-white/10 bg-neutral-900/50 rounded-3xl">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 text-2xl font-black mx-auto mb-6">
              01
            </div>
            <h4 className="text-xl font-black uppercase tracking-tight mb-4">Audit Call</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              We discuss your current challenges, goals, and what automation would look like for your business.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center p-8 border border-white/10 bg-neutral-900/50 rounded-3xl">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 text-2xl font-black mx-auto mb-6">
              02
            </div>
            <h4 className="text-xl font-black uppercase tracking-tight mb-4">Strategy Build</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              I design a custom automation blueprint tailored to your specific business needs and workflows.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center p-8 border border-white/10 bg-neutral-900/50 rounded-3xl">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 text-2xl font-black mx-auto mb-6">
              03
            </div>
            <h4 className="text-xl font-black uppercase tracking-tight mb-4">System Deploy</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Build & integrate the automation system within 48-72 hours. Full white-label — it's your system.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center p-8 border border-white/10 bg-neutral-900/50 rounded-3xl">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 text-2xl font-black mx-auto mb-6">
              04
            </div>
            <h4 className="text-xl font-black uppercase tracking-tight mb-4">Scale & Optimize</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Monitor results, make adjustments, and scale what works. Ongoing support when you need it.
            </p>
          </div>

        </div>

        <div className="text-center mt-12">
          <a href="https://wa.me/923185164128?text=Hi%20Ehsan,%20I%20want%20to%20schedule%20an%20audit%20call" className="inline-block bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-600/20">
            Start With Audit Call
          </a>
        </div>

      </section>

      {/* PRICING - Client Component with Modal */}

      <PricingSection />

      {/* CONTACT */}

      <section id="contact" className="py-32 text-center">

        <h2 className="text-[10vw] font-black uppercase tracking-tighter mb-10">
          Let's Build
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-10">

          <a
            href="mailto:ehsanmarwat.dev@gmail.com"
            className="text-lg border-b border-white/20 hover:border-blue-500 pb-2"
          >
            ehsanmarwat.dev@gmail.com
          </a>

          <a
            href="https://wa.me/923185164128"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg border-b border-white/20 hover:border-blue-500 pb-2"
          >
            WhatsApp Chat
          </a>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-xs uppercase tracking-[0.5em]">
        © 2026 Ehsan Ud Din · AI Automation Engineer
      </footer>

    </main>
  );
}

