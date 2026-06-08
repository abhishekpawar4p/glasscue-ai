function App() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <section className="min-h-screen px-6 py-7 md:px-[8%]">
        <nav className="mb-20 flex items-center justify-between">
          <div className="text-2xl font-extrabold tracking-tight">
            GlassCue AI
          </div>

          <div className="hidden gap-7 md:flex">
            <a
              href="#features"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              How it works
            </a>
            <a
              href="#future"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Future
            </a>
          </div>
        </nav>

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
              GlassCue AI helps users upload source materials, start a live
              session, receive one ready-to-say AI response, and review detailed
              feedback after the session.
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

          <div className="rounded-[28px] border border-white/15 bg-slate-900/70 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3 font-bold text-slate-200">
              <span className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_18px_#22c55e]"></span>
              <span>Live Assistant</span>
            </div>

            <div className="mb-4 rounded-2xl bg-white/10 p-5">
              <p className="mb-2 text-xs font-bold uppercase text-blue-300">
                Detected question
              </p>
              <p className="leading-7 text-slate-200">
                Why did you choose React for this project?
              </p>
            </div>

            <div className="mb-5 rounded-2xl bg-white/10 p-5">
              <p className="mb-2 text-xs font-bold uppercase text-blue-300">
                Suggested response
              </p>
              <p className="leading-7 text-slate-200">
                I chose React because it allows me to build reusable UI
                components, manage dynamic state clearly, and create an
                interactive user experience. For this project, React is useful
                because the app needs live transcript updates, AI response
                panels, and a responsive dashboard.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl bg-blue-400/15 px-4 py-3 text-sm text-blue-200">
                Shorter
              </button>
              <button className="rounded-xl bg-blue-400/15 px-4 py-3 text-sm text-blue-200">
                Professional
              </button>
              <button className="rounded-xl bg-blue-400/15 px-4 py-3 text-sm text-blue-200">
                Technical
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-[#081524] px-6 py-20 md:px-[8%]">
        <h2 className="mb-8 text-4xl font-extrabold">Core Features</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <h3 className="mb-3 text-2xl font-bold">Source Upload</h3>
            <p className="leading-7 text-slate-300">
              Upload PDFs, notes, CVs, meeting documents, or presentation
              materials before starting a session.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <h3 className="mb-3 text-2xl font-bold">One Live Answer</h3>
            <p className="leading-7 text-slate-300">
              During a live session, the app shows one clean answer instead of
              too many bullet points.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <h3 className="mb-3 text-2xl font-bold">Session Review</h3>
            <p className="leading-7 text-slate-300">
              After the session, review transcript, key points, mistakes,
              follow-up questions, and speaking feedback.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;