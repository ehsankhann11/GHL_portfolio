'use client';

type CaseStudy = {
  eyebrow: string;
  client: string;
  role: string;
  title: string;
  challenge: string[];
  solution: string[];
  impact: { value: string; label: string; tone: 'blue' | 'green' | 'purple' | 'orange' }[];
};

function ToneClasses(tone: CaseStudy['impact'][number]['tone']) {
  switch (tone) {
    case 'green':
      return { border: 'border-green-500/30', text: 'text-green-400', glow: 'shadow-green-500/20' };
    case 'purple':
      return { border: 'border-purple-500/30', text: 'text-purple-400', glow: 'shadow-purple-500/20' };
    case 'orange':
      return { border: 'border-orange-500/30', text: 'text-orange-400', glow: 'shadow-orange-500/20' };
    default:
      return { border: 'border-blue-500/30', text: 'text-blue-400', glow: 'shadow-blue-500/20' };
  }
}

export default function CaseStudiesSection() {
  const studies: CaseStudy[] = [
    {
      eyebrow: 'Project A',
      client: 'Expert Marketing Group',
      role: 'Lead Automation Engineer',
      title: '10 Roofing Companies • Zero Bottlenecks • Always-On Lead Nurture',
      challenge: [
        'High-volume roofing leads were arriving faster than manual workflows could qualify and follow up.',
        'Separate companies required distinct snapshots, pipelines, and nurturing rules.',
        'Any broken trigger caused silent lead leakage—lost revenue with no visibility.',
      ],
      solution: [
        'Architected and deployed the complete GoHighLevel CRM automation infrastructure for 10 distinct roofing companies simultaneously.',
        'Built scalable lead pipelines with aggressive, stage-based nurturing and booking logic.',
        'Created highly customized snapshots designed to handle high-volume lead spikes without manual intervention.',
        'Hardened workflow logic to prevent trigger failures and reduce operational overhead.',
      ],
      impact: [
        { value: '10', label: 'Companies Deployed', tone: 'blue' },
        { value: '0', label: 'Manual Bottlenecks', tone: 'green' },
        { value: '∞', label: 'Always-On Nurture Coverage', tone: 'purple' },
      ],
    },
    {
      eyebrow: 'Project B',
      client: 'Service Scale AI',
      role: 'AI & Automation Specialist',
      title: 'Multi-Layer SMS Automation + AI Chat + Voice Qualification',
      challenge: [
        'Lead responses were consuming hundreds of hours of manual call time.',
        'Businesses needed faster qualification without sacrificing customer experience.',
        'SMS outreach needed to feel personalized while staying system-driven and measurable.',
      ],
      solution: [
        'Engineered an advanced, multi-layered SMS marketing automation system with structured follow-ups.',
        'Developed a custom AI chatbot widget powered by complex n8n workflows.',
        'Integrated an AI Voice Call Bot to handle first-contact support inquiries and initial qualification.',
        'Routed qualified leads into the right pipeline steps to keep momentum moving.',
      ],
      impact: [
        { value: '100s', label: 'Hours Saved', tone: 'green' },
        { value: '24/7', label: 'Qualification Coverage', tone: 'blue' },
        { value: '1', label: 'Unified Lead Engine', tone: 'purple' },
      ],
    },
    {
      eyebrow: 'Project C',
      client: 'Blessing App',
      role: 'Email Marketing & Automation Expert',
      title: 'Segmented Email Retention Pipelines • Re-Engagement That Converts',
      challenge: [
        'Users needed consistent engagement after onboarding to drive long-term retention.',
        'Cold leads required reactivation that didn’t feel spammy or generic.',
        'The system needed segmentation logic to match user behavior and lifecycle stage.',
      ],
      solution: [
        'Engineered highly complex segmented email marketing sequences tailored to the app ecosystem.',
        'Designed automated follow-ups and engagement pipelines based on user behavior.',
        'Built re-engagement flows for cold leads to bring them back with value-first messaging.',
        'Optimized conversion routing to improve overall campaign performance.',
      ],
      impact: [
        { value: '↑', label: 'Retention & Re-Activation', tone: 'purple' },
        { value: '1,000s', label: 'Automated Touchpoints', tone: 'blue' },
        { value: 'Less', label: 'Manual Campaign Work', tone: 'green' },
      ],
    },
    {
      eyebrow: 'Project D',
      client: 'Complete CRM Optimization',
      role: 'CRM Automation Architect',
      title: 'A to Z CRM Overhaul • Fixed Pipelines • Streamlined Workflows',
      challenge: [
        'Severely broken pipelines caused lost opportunities and reporting confusion.',
        'Redundant automations increased noise and manual clean-up work.',
        'The backend wasn’t aligned with a clear sales process.',
      ],
      solution: [
        'Executed an A to Z CRM overhaul with a full system audit.',
        'Audited and fixed broken pipelines and malfunctioning workflow automations.',
        'Streamlined redundant automations to reduce friction across the team.',
        'Optimized backend setup for clarity—so sales could run consistently and predictably.',
      ],
      impact: [
        { value: 'Hours', label: 'Saved Weekly', tone: 'orange' },
        { value: 'Clear', label: 'Sales Process Visibility', tone: 'blue' },
        { value: 'Fewer', label: 'Backend Errors', tone: 'green' },
      ],
    },
    {
      eyebrow: 'Project E',
      client: 'Personal Innovations',
      role: 'Full-Stack AI & Automation Engineer',
      title: 'Nexus AI • Automated Proctoring • IoT Fleet Management',
      challenge: [
        'Needed fast, context-aware AI that could retrieve real data and respond reliably.',
        'Required high-accuracy anomaly detection for proctoring at scale.',
        'Built real-time tracking and visualization for complex logistics.'
      ],
      solution: [
        'Nexus AI: Built a custom Retrieval-Augmented Generation (RAG) platform using Llama 3.3 and Groq.',
        'AI-Powered Automated Proctoring SaaS: Implemented computer vision (YOLO models) for 90%+ anomaly detection.',
        'IoT Fleet Management Dashboard: Real-time visualization for tracking logistics and operational status.',
      ],
      impact: [
        { value: '90%+', label: 'Proctoring Accuracy', tone: 'green' },
        { value: 'Fast', label: 'Context-Aware Responses', tone: 'blue' },
        { value: 'Real-time', label: 'Operational Visibility', tone: 'purple' },
      ],
    },
  ];

  return (
    <section id="case-studies" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 mb-6 font-bold">Featured Case Studies</h2>
        <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
          Challenge → Solution → Impact
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Proof you can measure. Systems engineered to stop lead leakage, accelerate qualification, and turn CRM data into revenue.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {studies.map((cs, idx) => (
          <article
            key={idx}
            className="p-8 border border-white/10 bg-neutral-900/50 rounded-3xl hover:border-blue-500/30 transition-all group"
          >
            <div className="flex items-start justify-between gap-6 mb-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">{cs.eyebrow}</div>
                <h4 className="font-black text-2xl leading-tight mb-2">{cs.client}</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">{cs.role}</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-2xl">
                {idx === 0 ? '🏢' : idx === 1 ? '📲' : idx === 2 ? '✉️' : idx === 3 ? '🔧' : '🧠'}
              </div>
            </div>

            <h5 className="font-black text-lg uppercase tracking-tight mb-4 text-blue-300/90">{cs.title}</h5>

            <div className="space-y-5">
              <div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Challenge</div>
                <ul className="space-y-2">
                  {cs.challenge.map((t, i) => (
                    <li key={i} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Solution</div>
                <ul className="space-y-2">
                  {cs.solution.map((t, i) => (
                    <li key={i} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">Impact</div>
                <div className="grid md:grid-cols-3 gap-3">
                  {cs.impact.map((im, i) => {
                    const tone = ToneClasses(im.tone);
                    return (
                      <div
                        key={i}
                        className={`rounded-2xl border ${tone.border} bg-neutral-900/30 p-4 ${tone.glow}`}
                      >
                        <div className={`text-2xl font-black ${tone.text}`}>{im.value}</div>
                        <div className="text-[11px] uppercase tracking-wide text-gray-400 mt-1 leading-snug">{im.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#contact"
          className="inline-block border border-blue-500 text-blue-500 px-8 py-4 rounded-xl font-bold hover:bg-blue-500 hover:text-black transition"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}

