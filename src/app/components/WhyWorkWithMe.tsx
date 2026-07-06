import { Target, Bot, ShieldCheck, MessageCircle } from "lucide-react";

const points = [
  {
    icon: Target,
    color: "blue",
    title: "Full Account Ownership",
    body: "I own sub-accounts & pipelines end-to-end as your architect — you focus on closing deals.",
  },
  {
    icon: Bot,
    color: "green",
    title: "AI-Driven Automation",
    body: "Leads follow-up themselves. Calls get booked automatically. No manual work.",
  },
  {
    icon: ShieldCheck,
    color: "purple",
    title: "White-Label Ready",
    body: "Your clients only ever see your brand. Everything I build is 100% yours.",
  },
  {
    icon: MessageCircle,
    color: "orange",
    title: "Dedicated Support",
    body: "I'm just a message away.",
  },
];

const colorClasses: Record<string, { bg: string; text: string }> = {
  blue: { bg: "bg-blue-600/20", text: "text-blue-500" },
  green: { bg: "bg-green-600/20", text: "text-green-500" },
  purple: { bg: "bg-purple-600/20", text: "text-purple-500" },
  orange: { bg: "bg-orange-600/20", text: "text-orange-500" },
};

export default function WhyWorkWithMe() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-[0.4em] text-blue-500 mb-6 font-bold">
          How I Operate
        </h2>
        <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
          Why Businesses Keep Me On
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {points.map(({ icon: Icon, color, title, body }) => (
          <div key={title} className="flex gap-6 p-8 border border-white/10 bg-neutral-900/30 rounded-3xl">
            <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${colorClasses[color].bg} ${colorClasses[color].text}`}>
              <Icon className="w-6 h-6" strokeWidth={1.75} />
            </div>
            <div>
              <h4 className="font-black text-xl uppercase tracking-tight mb-2">{title}</h4>
              <p className="text-gray-400 text-sm">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
