'use client';

import { useModal } from './ClientProviders';

export default function ContactBookingSection() {
  const { openModal } = useModal();

  return (
    <section id="contact" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 mb-6 font-bold">Contact</h2>
        <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
          Book the Strategy Call
        </h3>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          This isn’t a “sales call.” It’s a systems audit. We map your pipeline, identify where leads are leaking,
          and define the exact AI + CRM architecture required to scale—without adding headcount.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="glass-card rounded-[2.5rem] border border-white/5 p-8 md:p-10">
          <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4">
            What we’ll build in 30 minutes
          </div>

          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 text-gray-300 text-sm leading-relaxed">
              <span className="text-blue-500 font-bold">✓</span>
              <span>Where leads stall (and why your automations aren’t compensating)</span>
            </li>
            <li className="flex gap-3 text-gray-300 text-sm leading-relaxed">
              <span className="text-blue-500 font-bold">✓</span>
              <span>Which multi-channel workflows you need to eliminate response delays</span>
            </li>
            <li className="flex gap-3 text-gray-300 text-sm leading-relaxed">
              <span className="text-blue-500 font-bold">✓</span>
              <span>Where AI agents / voice bots can qualify and support 24/7</span>
            </li>
            <li className="flex gap-3 text-gray-300 text-sm leading-relaxed">
              <span className="text-blue-500 font-bold">✓</span>
              <span>The recommended GHL architecture + delivery timeline (48–72hr execution)</span>
            </li>
          </ul>

          <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-6">
            <div className="text-sm font-bold uppercase tracking-wide text-gray-200 mb-2">Urgency Builder</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              If your team is spending hours on follow-ups, you’re paying for manual labor with opportunity cost.
              Scheduling a call locks your next steps before the pipeline degrades again.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => openModal()}
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-widest hover:bg-blue-700 transition"
              >
                Send Project Details
              </button>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-white/10 bg-white/[0.03] text-white font-black uppercase tracking-widest hover:bg-white/[0.06] hover:border-blue-500/40 transition"
              >
                Explore My Work
              </a>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-[2.5rem] border border-white/5 p-6 md:p-8 flex flex-col h-full">
          <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4">
            Select a Time
          </div>
          
          <div className="flex-grow w-full bg-white/[0.02] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=ehsanmarwat.dev%40gmail.com&ctz=Asia%2FKarachi" 
              style={{ border: 0, width: '100%', height: '600px' }} 
              frameBorder="0" 
              scrolling="no"
              className="bg-white w-full h-full min-h-[600px]"
              title="Strategy Call Calendar"
            ></iframe>
          </div>

          <div className="mt-6 text-center text-gray-500 text-xs uppercase tracking-[0.4em]">
            strategy-first • AI + CRM architecture • measurable outcomes
          </div>
        </div>
      </div>
    </section>
  );
}