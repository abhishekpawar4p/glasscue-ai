import LiveAssistantCard from './LiveAssistantCard';

function HeroSection() {
  return (
    <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="mb-5 inline-block rounded-full border border-blue-300/30 bg-slate-900/70 px-4 py-2 text-sm text-blue-300">
          AI-powered live response assistant
        </p>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-[-2px] md:text-6xl">
          Real-time AI support for meetings, presentations, and technical
          discussions.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          GlassCue AI helps users upload source materials, start a live session,
          receive one ready-to-say AI response, and review detailed feedback
          after the session.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <button className="rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 px-6 py-4 text-sm font-bold text-white transition hover:scale-105">
            Start Building
          </button>

          <button className="rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/15">
            View Features
          </button>
        </div>
      </div>

      <LiveAssistantCard />
    </div>
  );
}

export default HeroSection;