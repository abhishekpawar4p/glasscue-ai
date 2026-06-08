import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07111f] px-6 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <h1 className="text-3xl font-extrabold">Create account</h1>

        <p className="mt-3 text-slate-300">
          Start building your AI-powered live assistant workspace.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-200">
              Full name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-200">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-200">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 px-5 py-3 font-bold text-white transition hover:scale-[1.02]"
          >
            Create account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-300">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-blue-300">
            Login
          </Link>
        </p>

        <p className="mt-4 text-center text-sm">
          <Link to="/" className="text-slate-400 hover:text-white">
            Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}

export default RegisterPage;