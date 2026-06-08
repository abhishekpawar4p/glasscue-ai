function LiveAssistantCard() {
    return (
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
            I chose React because it allows me to build reusable UI components,
            manage dynamic state clearly, and create an interactive user
            experience. For this project, React is useful because the app needs
            live transcript updates, AI response panels, and a responsive
            dashboard.
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
    );
  }
  
  export default LiveAssistantCard;