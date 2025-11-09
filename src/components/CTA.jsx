export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-slate-900 text-white overflow-hidden relative">
          <div className="pointer-events-none absolute -inset-10 opacity-40 blur-3xl" style={{
            background:
              'radial-gradient(60% 60% at 50% 50%, rgba(168,85,247,0.5) 0%, rgba(59,130,246,0.45) 35%, rgba(245,158,11,0.35) 70%, transparent 100%)',
          }} />
          <div className="relative z-10 grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold">
                Start your first AI-led lesson today
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                Launch a conversational lesson, invite classmates, and track progress — all in one place.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="inline-flex h-11 px-6 items-center justify-center rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-100">
                  Create free account
                </button>
                <button className="inline-flex h-11 px-6 items-center justify-center rounded-xl bg-slate-800 text-white font-medium ring-1 ring-white/10 hover:bg-slate-700">
                  Book a demo
                </button>
              </div>
            </div>
            <div className="md:justify-self-end">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                <ul className="grid sm:grid-cols-2 gap-4 text-sm">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Real-time feedback</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-400" /> Voice & chat modes</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-400" /> Auto-generated quizzes</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> LMS integrations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
