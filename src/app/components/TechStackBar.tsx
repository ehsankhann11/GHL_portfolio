import {
  Workflow,
  Sparkles,
  PhoneCall,
  Server,
  Code2,
  CreditCard,
  Bot,
  Camera,
} from "lucide-react";

const stack = [
  { icon: Workflow, label: "GOHIGHLEVEL" },
  { icon: Code2, label: "PYTHON / FASTAPI" },
  { icon: Sparkles, label: "LLM / RAG SYSTEMS" },
  { icon: Bot, label: "AI CHATBOTS" },
  { icon: PhoneCall, label: "TWILIO" },
  { icon: Camera, label: "YOLO COMPUTER VISION" },
  { icon: Server, label: "WEBHOOK AUTOMATIONS" },
  { icon: CreditCard, label: "STRIPE" },
];

export default function TechStackBar() {
  return (
    <div className="py-10 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-x-10 gap-y-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
        {stack.map(({ icon: Icon, label }) => (
          <span key={label} className="flex items-center gap-2 font-mono text-[11px] tracking-[0.3em]">
            <Icon className="w-4 h-4 text-blue-500" strokeWidth={1.75} /> {label}
          </span>
        ))}
      </div>
    </div>
  );
}
