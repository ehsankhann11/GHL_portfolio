export default function Services() {
    const services = [
      {
        title: "GHL CRM Engineering",
        desc: "Complete GoHighLevel ecosystem setup: complex pipelines, synchronized calendars, and multi-channel integrations.",
        price: "$600",
        icon: "🏗️"
      },
      {
        title: "AI-Powered Automation",
        desc: "Intelligent RAG chatbots, autonomous lead qualification, and smart logic workflows built with Python & GHL API.",
        price: "$1,000",
        icon: "🤖"
      },
      {
        title: "Conversion Funnels",
        desc: "High-performance landing pages and funnels engineered inside GHL with advanced tracking and behavioral triggers.",
        price: "$500",
        icon: "🚀"
      },
      {
        title: "Advanced Workflows",
        desc: "Deep-level automation, custom webhook triggers, lead nurturing sequences, and API-driven follow-up systems.",
        price: "$650",
        icon: "⚙️"
      },
      {
        title: "Agency White Label",
        desc: "Scalable backend support for agencies. I manage your clients' high-level accounts as your invisible tech partner.",
        price: "$800/mo",
        icon: "🎭"
      },
      {
        title: "Custom Development",
        desc: "Every system is built from scratch for your business. No generic templates — just tailored automation.",
        price: "Starting at $350",
        icon: "💎"
      }
    ];
  
    return (
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-24">
          <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 mb-6 font-bold underline underline-offset-8">Expertise</h2>
          <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
            Services That <br /> Actually Deliver.
          </h3>
        </div>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass-card group relative flex flex-col justify-between p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-blue-500/50 transition-all duration-500"
            >
              <div>
                <div className="text-4xl mb-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-blue-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-10 font-light">
                  {service.desc}
                </p>
              </div>
  
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <span className="text-lg font-black text-white">
                  {service.price}
                </span>
  
                <a
                  href={`https://wa.me/923185164128?text=Hi Ehsan, I am interested in your ${service.title} service. Let's discuss a project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-black uppercase tracking-widest border border-white/20 px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  Hire Me
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }