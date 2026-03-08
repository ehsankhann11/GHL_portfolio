'use client';

import { useModal } from "./ClientProviders";

export default function PricingSection() {
  const { openModal } = useModal();

  return (
    <section id="pricing" className="py-32 bg-white/[0.02] border-y border-white/5">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6">
          Simple, Fixed Pricing
        </h2>
        <p className="text-gray-400 text-lg mb-16">Choose what fits your needs. All projects delivered in 48-72 hours.</p>

        <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">

          {/* STARTER */}
          <div className="p-10 border border-white/10 bg-neutral-900 rounded-3xl hover:border-blue-500/30 transition-all group">
            <div className="text-xs uppercase text-gray-400 mb-4 tracking-widest">
              📦 Starter Package
            </div>
            <div className="text-5xl font-black mb-2">
              $800
              <span className="text-lg text-gray-500"> / project</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">48-72hr delivery</p>
            <ul className="space-y-4 text-sm text-gray-300 mb-10">
              <li>✓ Full GHL Setup</li>
              <li>✓ Pipeline Configuration</li>
              <li>✓ Automation Workflows</li>
              <li>✓ Email / SMS Sequences</li>
              <li>✓ Calendar Integration</li>
            </ul>
            <a href="https://wa.me/923185164128?text=Hi%20Ehsan,%20I%20am%20interested%20in%20the%20Starter%20Package%20at%20$800" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 bg-white text-black rounded-xl font-bold hover:bg-blue-600 hover:text-white transition">
              Get Started
            </a>
          </div>

          {/* AUTOMATION SYSTEM */}
          <div className="p-10 border-2 border-blue-600 bg-blue-600/10 rounded-3xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
              Most Popular
            </div>
            <div className="text-xs uppercase text-blue-400 mb-4 tracking-widest">
              ⭐ Automation System
            </div>
            <div className="text-5xl font-black mb-2">
              $1,500
              <span className="text-lg text-gray-500"> / system</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">48-72hr delivery</p>
            <ul className="space-y-4 text-sm text-gray-300 mb-10">
              <li>✓ Everything in Starter</li>
              <li>✓ AI Chatbot Integration</li>
              <li>✓ Lead Qualification AI</li>
              <li>✓ Webhook Automations</li>
              <li>✓ GHL API Custom Logic</li>
            </ul>
            <a href="https://wa.me/923185164128?text=Hi%20Ehsan,%20I%20am%20interested%20in%20the%20Automation%20System%20at%20$1,500" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 bg-blue-600 rounded-xl font-bold hover:scale-105 transition">
              Get Started
            </a>
          </div>

          {/* GHL VA */}
          <div className="p-10 border border-white/10 bg-neutral-900 rounded-3xl hover:border-blue-500/30 transition-all group">
            <div className="text-xs uppercase text-gray-400 mb-4 tracking-widest">
              🧠 GHL VA — Monthly
            </div>
            <div className="text-5xl font-black mb-2">
              $1,200
              <span className="text-lg text-gray-500"> / month</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">Ongoing partnership</p>
            <ul className="space-y-4 text-sm text-gray-300 mb-10">
              <li>✓ Full Account Management</li>
              <li>✓ Automation Updates</li>
              <li>✓ Workflow Creation</li>
              <li>✓ Client Sub-accounts</li>
              <li>✓ White-Label Support</li>
            </ul>
            <a href="https://wa.me/923185164128?text=Hi%20Ehsan,%20I%20am%20interested%20in%20the%20GHL%20VA%20service%20at%20$1,200/mo" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 bg-white/10 border border-white/20 rounded-xl font-bold hover:bg-white hover:text-black transition">
              Hire Me
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

