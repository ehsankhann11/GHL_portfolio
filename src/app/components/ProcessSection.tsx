const steps = [
  {
    number: "01",
    title: "Audit Call",
    body: "We discuss your current challenges, goals, and what automation would look like for your business.",
  },
  {
    number: "02",
    title: "Strategy Build",
    body: "I design a custom automation blueprint tailored to your specific business needs and workflows.",
  },
  {
    number: "03",
    title: "System Deploy",
    body: "Build & integrate the automation system within 48-72 hours. Full white-label — it's your system.",
  },
  {
    number: "04",
    title: "Scale & Optimize",
    body: "Monitor results, make adjustments, and scale what works. Ongoing support when you need it.",
  },
];

export default function ProcessSection() {
  return (
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
        {steps.map((s) => (
          <div key={s.number} className="text-center p-8 border border-white/10 bg-neutral-900/50 rounded-3xl">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 text-2xl font-black mx-auto mb-6">
              {s.number}
            </div>
            <h4 className="text-xl font-black uppercase tracking-tight mb-4">{s.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://wa.me/923185164128?text=Hi%20Ehsan,%20I%20want%20to%20schedule%20an%20audit%20call"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-600/20"
        >
          Start With Audit Call
        </a>
      </div>
    </section>
  );
}
