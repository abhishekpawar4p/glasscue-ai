import { Link } from 'react-router-dom';

const sessionCards = [
  {
    title: 'Live Meeting',
    description: 'Get one ready-to-say response during professional discussions.',
  },
  {
    title: 'Presentation Assistant',
    description: 'Upload slides or notes and get support while presenting.',
  },
  {
    title: 'Technical Q&A',
    description: 'Practise coding, SQL, maths, system design, and technical questions.',
  },
  {
    title: 'Language Practice',
    description: 'Improve English speaking, grammar, fluency, and confidence.',
  },
];

function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-6 py-8 text-white md:px-[8%]">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-blue-300">Dashboard</p>
          <h1 className="mt-2 text-4xl font-extrabold">Welcome to GlassCue AI</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Start a new live session, upload your source materials, or review
            previous session feedback.
          </p>
        </div>

        <Link
          to="/"
          className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/15"
        >
          Back Home
        </Link>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-slate-400">Total Sessions</p>
          <h2 className="mt-3 text-4xl font-extrabold">0</h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-slate-400">Uploaded Sources</p>
          <h2 className="mt-3 text-4xl font-extrabold">0</h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-slate-400">Average Score</p>
          <h2 className="mt-3 text-4xl font-extrabold">--</h2>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Choose a session mode</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {sessionCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-7 transition hover:-translate-y-1 hover:bg-slate-900"
            >
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{card.description}</p>

              <button className="mt-6 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 px-5 py-3 text-sm font-bold">
                Start Session
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default DashboardPage;