import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between">
      <Link to="/" className="text-2xl font-extrabold tracking-tight">
        GlassCue AI
      </Link>

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

      <div className="flex gap-3">
        <Link
          to="/login"
          className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold hover:bg-white/15"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-2 text-sm font-bold"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;