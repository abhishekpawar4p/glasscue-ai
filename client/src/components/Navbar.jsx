function Navbar() {
    return (
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
    );
  }
  
  export default Navbar;