import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="leading-tight">
          <div className="text-2xl md:text-3xl font-black text-yellow-400">
            AGCC26
          </div>
          <div className="text-[10px] md:text-xs text-gray-300 tracking-[0.22em]">
            ARATI GRAM CRICKET CARNIVAL
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 font-medium text-sm">
          <Link to="/">Home</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/fixtures">Fixtures</Link>
          <Link to="/points-table">Points Table</Link>
          <Link to="/rules">Rules</Link>
          <Link to="/organizers">Organizers</Link>
          <Link to="/sponsors">Sponsors</Link>
        </nav>

        <button
          className="md:hidden text-3xl leading-none px-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-black px-4 pb-4 pt-2 flex flex-col gap-4 text-base border-t border-white/10">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/teams" onClick={() => setMenuOpen(false)}>Teams</Link>
          <Link to="/fixtures" onClick={() => setMenuOpen(false)}>Fixtures</Link>
          <Link to="/points-table" onClick={() => setMenuOpen(false)}>Points Table</Link>
          <Link to="/rules" onClick={() => setMenuOpen(false)}>Rules</Link>
          <Link to="/organizers" onClick={() => setMenuOpen(false)}>Organizers</Link>
          <Link to="/sponsors" onClick={() => setMenuOpen(false)}>Sponsors</Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;