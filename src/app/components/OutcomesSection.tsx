const outcomes = [
  {
    color: "text-blue-500",
    title: "Consistent Booked Calls",
    body: "Steady, week-over-week sales calls landing on autopilot instead of depending on manual chasing.",
    client: "Marketing Agency • Dubai",
  },
  {
    color: "text-green-500",
    title: "Far Less Manual Follow-Up",
    body: "A noticeable drop in manual follow-up work after automating client onboarding workflows end-to-end.",
    client: "SaaS Reseller • Lahore",
  },
  {
    color: "text-purple-500",
    title: "More Booked Appointments",
    body: "A clear increase in booked appointments after standing up a 24/7 AI booking system.",
    client: "Dental Clinic • UK",
  },
];

export default function OutcomesSection() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 mb-6 font-bold">
          Outcomes, Not Just Output
        </h2>
        <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
          What Changes When Systems Take Over
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {outcomes.map((o) => (
          <div key={o.title} className="p-8 border border-white/10 bg-neutral-900/50 rounded-3xl">
            <div className={`text-2xl font-black mb-4 ${o.color}`}>{o.title}</div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">{o.body}</p>
            <div className="text-sm text-gray-500 uppercase tracking-wider">{o.client}</div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-500 text-sm">Full breakdowns of how each system was built are in the case studies above.</p>
      </div>
    </section>
  );
}
