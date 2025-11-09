import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays for vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />
      <div className="pointer-events-none absolute -inset-x-20 -top-20 h-80 blur-3xl opacity-70" style={{
        background:
          'radial-gradient(60% 60% at 50% 50%, rgba(168,85,247,0.35) 0%, rgba(59,130,246,0.25) 35%, rgba(245,158,11,0.2) 70%, transparent 100%)',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 py-24">
        <div className="flex flex-col items-start justify-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium rounded-full bg-white/70 ring-1 ring-slate-200 px-3 py-1 text-slate-700 backdrop-blur">
            AI Conversational LMS
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Learn by talking to an AI mentor.
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl">
            Auralearn is an AI-first learning platform where lessons feel like
            real conversations. Get instant feedback, adaptive paths, and
            voice-powered study sessions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#cta" className="inline-flex h-11 px-6 items-center justify-center rounded-xl bg-slate-900 text-white font-medium shadow hover:bg-slate-800">
              Try a demo chat
            </a>
            <a href="#features" className="inline-flex h-11 px-6 items-center justify-center rounded-xl bg-white text-slate-900 font-medium ring-1 ring-slate-200 hover:bg-slate-50">
              See features
            </a>
          </div>
          <div className="mt-6 text-xs text-slate-500">
            No credit card required • Free forever plan
          </div>
        </div>
      </div>
    </section>
  );
}
