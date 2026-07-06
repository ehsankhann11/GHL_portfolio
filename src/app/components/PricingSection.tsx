'use client';

import { useModal } from './ClientProviders';

type Offer = {
  value: string;
  name: string;
  price: string;
  unit: string;
  bullets: string[];
  whatsappText: string;
  featured?: boolean;
};

const projectOffers: Offer[] = [
  {
    value: 'custom-snapshot-600',
    name: 'Custom Snapshot',
    price: '$600',
    unit: '/ project',
    bullets: ['Custom-built GHL snapshot', 'Pipeline & calendar structure', 'Deployed to your sub-account'],
    whatsappText: 'Hi Ehsan, I am interested in the Custom Snapshot at $600',
  },
  {
    value: 'ghl-automation-800',
    name: 'GHL Automation Setup',
    price: '$800',
    unit: '/ project',
    bullets: ['Full GHL setup: pipelines, calendars, contact sync', 'Core automation workflows', 'Email / SMS sequences'],
    whatsappText: 'Hi Ehsan, I am interested in the GHL Automation Setup at $800',
  },
  {
    value: 'advanced-workflows-900',
    name: 'Advanced Workflows',
    price: '$900',
    unit: '/ project',
    bullets: ['Multi-step SMS + email branching logic', 'Stage-based nurture sequences', 'Fallback & error handling'],
    whatsappText: 'Hi Ehsan, I am interested in Advanced Workflows at $900',
  },
  {
    value: 'conversion-funnel-1000',
    name: 'Conversion Funnel',
    price: '$1,000',
    unit: '/ project',
    bullets: ['Funnel build tied into GHL pipelines', 'Booking + confirmation logic', 'Conversion-focused copy structure'],
    whatsappText: 'Hi Ehsan, I am interested in a Conversion Funnel at $1,000',
  },
  {
    value: 'ai-automation-1700',
    name: 'AI Automation System',
    price: '$1,700',
    unit: '/ system',
    bullets: ['Everything in GHL Automation Setup', 'AI chatbot + lead qualification', 'Webhook automations & GHL API logic'],
    whatsappText: 'Hi Ehsan, I am interested in the AI Automation System at $1,700',
    featured: true,
  },
];

const retainer: Offer = {
  value: 'embedded-partner-1200',
  name: 'Embedded Automation Partner',
  price: '$1,200',
  unit: '/ month',
  bullets: [
    'Full account management across sub-accounts & pipelines',
    'Ongoing automation builds, fixes, and optimization',
    'White-label — your clients only ever see your brand',
  ],
  whatsappText: 'Hi Ehsan, I am interested in the Embedded Automation Partner retainer at $1,200/mo',
};

function PriceCard({ offer }: { offer: Offer }) {
  const { openModal } = useModal();
  return (
    <div
      className={`p-8 md:p-10 rounded-3xl flex flex-col ${
        offer.featured
          ? 'border-2 border-blue-600 bg-blue-600/10 relative'
          : 'border border-white/10 bg-neutral-900 hover:border-blue-500/30 transition-all'
      }`}
    >
      {offer.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
          Most Comprehensive
        </div>
      )}
      <div className={`text-xs uppercase mb-4 tracking-widest ${offer.featured ? 'text-blue-400' : 'text-gray-400'}`}>
        {offer.name}
      </div>
      <div className="text-4xl md:text-5xl font-black mb-2">
        {offer.price}
        <span className="text-lg text-gray-500">{offer.unit}</span>
      </div>
      <p className="text-gray-400 text-sm mb-6">48-72hr delivery</p>
      <ul className="space-y-3 text-sm text-gray-300 mb-8 flex-grow">
        {offer.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="text-blue-500">✓</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => openModal(offer.value)}
        className={`block w-full text-center py-4 rounded-xl font-bold transition ${
          offer.featured
            ? 'bg-blue-600 hover:scale-105'
            : 'bg-white text-black hover:bg-blue-600 hover:text-white'
        }`}
      >
        Get Started
      </button>
      <a
        href={`https://wa.me/923185164128?text=${encodeURIComponent(offer.whatsappText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center mt-3 text-xs text-gray-500 uppercase tracking-widest hover:text-blue-400 transition"
      >
        or WhatsApp me directly
      </a>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6">
          Simple, Fixed Pricing
        </h2>
        <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Project-based builds, delivered in 48-72 hours. Or bring me on as an ongoing partner to maintain and scale what we build.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
          {projectOffers.map((offer) => (
            <PriceCard key={offer.value} offer={offer} />
          ))}
        </div>

        <div className="mt-12 max-w-md mx-auto text-left">
          <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4">Ongoing Partnership</div>
          <PriceCard offer={retainer} />
        </div>
      </div>
    </section>
  );
}
