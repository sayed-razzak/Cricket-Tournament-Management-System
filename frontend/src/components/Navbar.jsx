import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaCalendarAlt,
  FaHome,
  FaListOl,
  FaTimes,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/teams", label: "Teams" },
  { to: "/players", label: "Players" },
  { to: "/fixtures", label: "Fixtures" },
  { to: "/points-table", label: "Table" },
  { to: "/organizers", label: "Organizers" },
  { to: "/franchise-owners", label: "Owners" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/gallery", label: "Gallery" },
  { to: "/rules", label: "Rules" },
];

const mobileTabs = [
  { to: "/", label: "Home", icon: FaHome },
  { to: "/teams", label: "Teams", icon: FaTrophy },
  { to: "/players", label: "Players", icon: FaUsers },
  { to: "/fixtures", label: "Matches", icon: FaCalendarAlt },
  { to: "/points-table", label: "Table", icon: FaListOl },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <Link to="/" className="leading-tight min-w-0" onClick={() => setMenuOpen(false)}>
            <div className="text-xl sm:text-2xl md:text-3xl font-black text-yellow-400 tracking-wide">
              AGCC26
            </div>
            <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-300 tracking-[0.18em] sm:tracking-[0.22em] truncate">
              ARATI GRAM CRICKET CARNIVAL
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2 font-medium text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full transition ${
                    isActive
                      ? "bg-yellow-400 text-black"
                      : "text-gray-200 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="lg:hidden w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xl active:scale-95 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <nav className="lg:hidden bg-black px-4 pb-4 pt-2 grid grid-cols-2 gap-3 text-sm border-t border-white/10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `min-h-11 rounded-xl px-4 py-3 font-semibold ${
                    isActive ? "bg-yellow-400 text-black" : "bg-white/10 text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-black/95 text-white border-t border-white/10 px-2 py-2">
        <div className="grid grid-cols-5 gap-1 max-w-md mx-auto">
          {mobileTabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <NavLink
                key={tab.to}
                to={tab.to}
                className={({ isActive }) =>
                  `flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-semibold transition ${
                    isActive ? "bg-yellow-400 text-black" : "text-gray-200"
                  }`
                }
              >
                <Icon className="text-base" />
                <span>{tab.label}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
