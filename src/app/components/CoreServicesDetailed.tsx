'use client';

import { Workflow, MessagesSquare, Bot, Blocks, type LucideIcon } from 'lucide-react';

export default function CoreServicesDetailed() {
  const services: {
    eyebrow: string;
    title: string;
    icon: LucideIcon;
    bullets: string[];
    outcomes: { k: string; v: string; label: string }[];
    ctaHref: string;
  }[] = [
    {
      eyebrow: "GoHighLevel (GHL) Architecture",
      title: "A to Z CRM Automation — Built to Convert",
      icon: Workflow,
      bullets: [
        "Complete GHL setup: pipelines, calendars, contact sync, and integrations",
        "Custom snapshot development so every client account runs clean",
        "Repair broken pipelines & workflows to stop lead leakage",
        "Revenue-focused nurturing sequences that move prospects to booked calls",
      ],
      outcomes: [
        { k: "+", v: "0" + "leakage", label: "Zero lead loss" },
        { k: "48–72hr", v: "", label: "Typical delivery" },
        { k: "", v: "", label: "Conversion-first architecture" },
      ],
      ctaHref: "#contact",
    },
    {
      eyebrow: "Multi-Channel Workflows",
      title: "SMS + Email Automations That Never Miss a Lead",
      icon: MessagesSquare,
      bullets: [
        "Design complex multi-step sequences across SMS, email, and internal workflows",
        "Smart branching for intent, source, and stage (so follow-up is always relevant)",
        "Automated reminders, re-activations, and appointment confirmation flows",
        "Fallback logic + error handling to keep messages running even when systems change",
      ],
      outcomes: [
        { k: "", v: "", label: "Faster response times" },
        { k: "", v: "", label: "Higher booked-call rates" },
        { k: "", v: "", label: "Less manual follow-up" },
      ],
      ctaHref: "#case-studies",
    },
    {
      eyebrow: "AI Agents & Voice Bots",
      title: "24/7 Lead Qualification + Support (Without Hiring More Team)",
      icon: Bot,
      bullets: [
        "AI chatbot widgets powered by n8n workflows + LLM logic",
        "AI Voice Call Bots for first-contact support and qualification",
        "Intent detection, structured lead capture, and handoff to the right pipeline",
        "Training to match your brand voice and qualify to your exact criteria",
      ],
      outcomes: [
        { k: "24/7", v: "", label: "Always-on coverage" },
        { k: "", v: "", label: "Hundreds of hours saved" },
        { k: "", v: "", label: "Better lead quality" },
      ],
      ctaHref: "#contact",
    },
    {
      eyebrow: "Full-Stack & SaaS Development",
      title: "Internal Tools & Platforms Your Team Can Actually Use",
      icon: Blocks,
      bullets: [
        "Build robust web apps and operational dashboards tied directly into your automations",
        "Create SaaS platforms for repeatable delivery and scalable onboarding",
        "Webhooks + APIs to keep data consistent across systems",
        "Performance-focused engineering that stays fast as traffic and complexity grow",
      ],
      outcomes: [
        { k: "", v: "", label: "Operational clarity" },
        { k: "", v: "", label: "Repeatable systems" },
        { k: "", v: "", label: "Lower cost per conversion" },
      ],
      ctaHref: "#contact",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 mb-6 font-bold">Core Services</h2>
        <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
          Elite Build. Measurable Outcomes.
        </h3>
        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
          I am your dedicated technical partner for scaling with custom AI integrations and CRM workflows. I build systems that respond, qualify, nurture, and book—every time.
        </p>
      </div>

      <div className="grid gap-8 lg:gap-10">
        {services.map((s, idx) => (
          <div
            key={idx}
            className="glass-card rounded-[2.5rem] border border-white/5 overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-3xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-500">
                    <s.icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">
                      {s.eyebrow}
                    </div>
                    <h4 className="text-3xl font-black uppercase tracking-tight">
                      {s.title}
                    </h4>
                  </div>
                </div>

                <a
                  href={s.ctaHref}
                  className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-blue-500/50 transition-all text-[11px] font-black uppercase tracking-widest"
                >
                  Get a Strategy Build
                </a>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <ul className="space-y-3">
                    {s.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                        <span className="text-blue-500">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-6">
                  <div className="grid gap-4">
                    {s.outcomes.map((o, oIdx) => (
                      <div key={oIdx} className="rounded-2xl border border-white/5 bg-neutral-900/30 p-4">
                        <div className="text-2xl font-black text-blue-400">{o.k}{o.v}</div>
                        <div className="text-sm uppercase tracking-wide text-gray-400 mt-1">{o.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-600/20"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}

