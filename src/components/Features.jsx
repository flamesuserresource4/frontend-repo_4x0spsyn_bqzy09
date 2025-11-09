import { Brain, Mic, Sparkles, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Adaptive learning",
    desc: "Personalized paths that evolve with every answer and follow-up question.",
  },
  {
    icon: Mic,
    title: "Voice-first",
    desc: "Talk naturally. The AI listens, guides, and quizzes hands-free.",
  },
  {
    icon: Sparkles,
    title: "Contextual help",
    desc: "Bring notes, slides, or code. The AI understands and tutors with context.",
  },
  {
    icon: BarChart3,
    title: "Insights & mastery",
    desc: "See comprehension heatmaps, streaks, and mastery checkpoints.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Built for natural, effortless learning
          </h2>
          <p className="mt-3 text-slate-600">
            Auralearn blends conversation and curriculum to keep you engaged and
            progressing.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl bg-white/70 backdrop-blur ring-1 ring-slate-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400 grid place-items-center text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
