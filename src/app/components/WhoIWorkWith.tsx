import { TrendingUp, Store, Home, Briefcase, HeartPulse } from "lucide-react";

const segments = [
  { icon: TrendingUp, label: "Marketing Agencies" },
  { icon: Store, label: "Local Businesses" },
  { icon: Home, label: "Real Estate Teams" },
  { icon: Briefcase, label: "Coaches & Consultants" },
  { icon: HeartPulse, label: "Health & Wellness" },
];

export default function WhoIWorkWith() {
  return (
    <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 mb-6 font-bold">
          Who I Work With
        </h2>
        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 leading-[0.9]">
          Built For Growth-Minded Businesses
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {segments.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="p-6 border border-white/10 bg-neutral-900/30 rounded-2xl hover:border-blue-500/30 transition-all"
            >
              <Icon className="w-7 h-7 mb-3 mx-auto text-blue-500" strokeWidth={1.75} />
              <div className="font-bold uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
