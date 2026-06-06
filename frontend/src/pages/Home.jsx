import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import { getImageUrl } from "../utils/images";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Home() {
  const [teams, setTeams] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    API.get("teams/")
      .then((res) => setTeams(res.data.slice(0, 4)))
      .catch((err) => console.log(err));

    API.get("sponsors/")
      .then((res) => setSponsors(res.data.slice(0, 4)))
      .catch((err) => console.log(err));

    API.get("announcements/")
      .then((res) => setAnnouncements(res.data.slice(0, 3)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-red-900 text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-yellow-400 blur-3xl" />
          <div className="absolute top-32 right-0 w-80 h-80 rounded-full bg-red-500 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20 text-center">
          <img
            src="/agcc-logo.png"
            alt="AGCC26"
            className="w-24 md:w-36 mx-auto drop-shadow-2xl"
          />

          <p className="mt-5 inline-block px-4 py-2 rounded-full bg-white/10 text-yellow-300 text-xs md:text-base tracking-wider">
            ARATI GRAM CRICKET CARNIVAL 2026
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight text-yellow-400">
            AGCC26
          </h1>

          <p className="mt-4 text-lg md:text-2xl font-semibold text-white/95">
            One village. One passion. One champion.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
            <Link
              to="/teams"
              className="min-h-12 bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-[1.02] active:scale-[0.99] transition flex items-center justify-center"
            >
              View Teams
            </Link>
            <Link
              to="/fixtures"
              className="min-h-12 bg-white text-black px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-[1.02] active:scale-[0.99] transition flex items-center justify-center"
            >
              Fixtures & Results
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 -mt-7 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            ["6", "Teams"],
            ["60+", "Players"],
            ["15+", "Matches"],
            ["1", "Champion"],
          ].map(([num, label]) => (
            <div key={label} className="bg-white rounded-2xl shadow-sm p-4 sm:p-5 text-center border border-gray-100">
              <div className="text-3xl md:text-5xl font-black text-red-700">{num}</div>
              <div className="mt-1 text-xs md:text-base font-semibold text-gray-600">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pt-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-red-700 text-white px-4 py-3 flex items-center justify-between gap-3">
            <h2 className="font-black text-lg sm:text-2xl">Announcements</h2>
            <span className="text-[11px] sm:text-xs bg-white/20 rounded-full px-3 py-1 font-bold">
              AGCC26
            </span>
          </div>

          <div className="p-4 sm:p-5 space-y-3">
            {announcements.length === 0 ? (
              <p className="text-sm text-gray-600">
                No announcements yet. Updates from the organizers will appear here.
              </p>
            ) : (
              announcements.map((announcement) => (
                <div key={announcement.id} className="border-b last:border-b-0 border-gray-100 pb-3 last:pb-0">
                  <h3 className="font-black text-gray-900">{announcement.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
                    {announcement.message}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {[
            { to: "/teams", icon: "Teams", title: "Teams", text: "Logos, owners and squads." },
            { to: "/players", icon: "Players", title: "Players", text: "A-Z registered player list." },
            { to: "/fixtures", icon: "Matches", title: "Fixtures", text: "Upcoming and completed matches." },
            { to: "/points-table", icon: "Table", title: "Points Table", text: "Rankings and net run rate." },
            { to: "/franchise-owners", icon: "Owners", title: "Owners", text: "Franchise owner profiles." },
            { to: "/rules", icon: "Rules", title: "Rules", text: "Tournament regulations." },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group bg-white rounded-2xl shadow-sm p-4 sm:p-6 hover:shadow-xl active:scale-[0.99] transition border border-gray-100"
            >
              <div className="min-h-10 inline-flex items-center rounded-full bg-red-50 text-red-700 px-3 text-xs font-black mb-4">
                {item.icon}
              </div>
              <h3 className="text-base sm:text-lg xl:text-xl font-black leading-tight">{item.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600">{item.text}</p>
            </Link>
          ))}
        </div>
      </section> 

      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-gradient-to-r from-black via-gray-950 to-red-900 rounded-2xl shadow-xl p-6 sm:p-8 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-3">Follow Us</h2>
          <p className="text-gray-300 mb-7 text-sm sm:text-base">
            Stay updated with fixtures, auctions, highlights and tournament news.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { href: "https://www.facebook.com/share/1BDa44NZCE/", icon: FaFacebookF, color: "bg-blue-600" },
              { href: "https://www.instagram.com/aratigramcricketcarnival?igsh=cW12YmVkMjJ6Nm1p", icon: FaInstagram, color: "bg-pink-600" },
              { href: "https://youtube.com/@agcc2026?si=n_oq_kSvOQzllI7g", icon: FaYoutube, color: "bg-red-600" },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${social.color} text-white flex items-center justify-center text-2xl hover:scale-110 transition`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="flex items-end justify-between gap-4 mb-5">
          <h2 className="text-2xl md:text-4xl font-black">Sponsors</h2>
          <Link to="/sponsors" className="text-red-700 font-bold text-sm md:text-base">
            View All
          </Link>
        </div>

        {sponsors.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center text-gray-500">
            No sponsor data yet.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="bg-white rounded-2xl shadow-sm p-4 sm:p-5 border border-gray-100 text-center">
                <img
                  src={getImageUrl(sponsor.logo)}
                  alt={sponsor.brand_name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain mx-auto"
                />
                <h3 className="mt-3 font-black text-sm sm:text-lg">{sponsor.brand_name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 line-clamp-3">
                  {sponsor.description || "Sponsor description"}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className="bg-black text-white mt-6">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <div className="text-2xl font-black text-yellow-400">AGCC26</div>
          <div className="mt-2 text-sm md:text-base text-gray-300">
            ARATI GRAM CRICKET CARNIVAL
          </div>
          <div className="mt-3 text-yellow-300 font-semibold tracking-wider">
            ONE VILLAGE | ONE PASSION | ONE CHAMPION
          </div>
        <div className="mt-4 text-xs md:text-sm text-gray-500">
           Designed & Developed by{" "}
            <a
               href="https://www.facebook.com/share/1Hd55yrBN3/"
               target="_blank"
              rel="noopener noreferrer"
             className="font-bold text-yellow-400 hover:text-white hover:underline transition-all duration-300"
          >
          Sk Sahinur
         </a>
       {" & "}
  <a
    href="https://www.sayedrazzak.in"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold text-yellow-400 hover:text-white hover:underline transition-all duration-300"
  >
    Sayed Razzak
  </a>
</div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
