import { Rocket, MessageSquare, Users, Shield } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400" />
          <span className="font-semibold text-slate-900 text-lg tracking-tight">
            Auralearn
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 flex items-center gap-2">
            <MessageSquare className="h-4 w-4" /> Conversational
          </a>
          <a href="#features" className="hover:text-slate-900 flex items-center gap-2">
            <Users className="h-4 w-4" /> Cohorts
          </a>
          <a href="#features" className="hover:text-slate-900 flex items-center gap-2">
            <Shield className="h-4 w-4" /> Secure
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 px-4 items-center justify-center rounded-lg text-slate-700 border border-slate-200 hover:bg-slate-50">
            Sign in
          </button>
          <button className="inline-flex h-9 px-4 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-amber-500 text-white font-medium shadow hover:brightness-110">
            <Rocket className="h-4 w-4 mr-2" /> Get started
          </button>
        </div>
      </div>
    </header>
  );
}
