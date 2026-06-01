'use client';

export default function AboutCredentials() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 mb-6 font-bold">About</h2>
        <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
          Built for Execution — Not Theory
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          I bridge elite AI integration with production-grade GoHighLevel architecture—so your CRM actually turns into pipeline velocity.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card rounded-[2.5rem] border border-white/5 p-8 md:p-10">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-14 h-14 rounded-3xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-3xl">
              🧠
            </div>
            <div>
              <h4 className="font-black text-3xl uppercase tracking-tight mb-2">Full-Stack AI & Automation Engineer</h4>
              <p className="text-gray-400 text-sm uppercase tracking-wide">AI Specialization · Real-world delivery</p>
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-gray-300 text-base leading-relaxed">
              I’m a BS Computer Science student (AI Specialization) with hands-on industry experience as a former Junior AI Developer at OakStreet Technologies.
              I don’t just “integrate tools.” I engineer systems that run reliably under real business conditions.
            </p>

            <p className="text-gray-300 text-base leading-relaxed">
              I completed the <span className="text-blue-400 font-semibold">Charlie Morgan HighLevel Mastery Program</span>—so when your CRM breaks, your pipelines don’t degrade, and your automation logic stays conversion-focused.
            </p>

            <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-6">
              <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3">What you get when you hire me</div>
              <ul className="space-y-2">
                <li className="flex gap-3 text-gray-300 text-sm">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>GoHighLevel architecture built for scalability across client accounts</span>
                </li>
                <li className="flex gap-3 text-gray-300 text-sm">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>AI-powered messaging + voice systems that qualify leads 24/7</span>
                </li>
                <li className="flex gap-3 text-gray-300 text-sm">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>Full-stack builds when your workflows need custom tools, dashboards, or SaaS logic</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="glass-card rounded-[2.5rem] border border-white/5 p-8">
            <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4">Authority Badge</div>
            <div className="text-4xl mb-4">🏆</div>
            <h4 className="font-black text-2xl uppercase tracking-tight mb-2">Charlie Morgan HighLevel Mastery</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Built to handle advanced snapshots, pipelines, and automation logic.</p>
          </div>

          <div className="glass-card rounded-[2.5rem] border border-white/5 p-8">
            <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4">Academic Foundation</div>
            <div className="text-4xl mb-4">🎓</div>
            <h4 className="font-black text-2xl uppercase tracking-tight mb-2">BS Computer Science (AI)</h4>
            <p className="text-gray-400 text-sm leading-relaxed">AI specialization with real integration experience.</p>
          </div>

          <div className="glass-card rounded-[2.5rem] border border-white/5 p-8">
            <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4">Industry Experience</div>
            <div className="text-4xl mb-4">🏢</div>
            <h4 className="font-black text-2xl uppercase tracking-tight mb-2">OakStreet Technologies</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Former Junior AI Developer—execution-first mindset.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

