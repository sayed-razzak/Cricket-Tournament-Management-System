import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { getImageUrl } from "../utils/images";

function Home() {
  const [teams, setTeams] = useState([]);
  const [organizers, setOrganizers] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [gallery, setGallery] = useState([]);
  
  useEffect(() => {
    API.get("teams/")
      .then((res) => setTeams(res.data.slice(0, 4)))
      .catch((err) => console.log(err));

    API.get("organizers/")
      .then((res) => setOrganizers(res.data.slice(0, 3)))
      .catch((err) => console.log(err));

    API.get("sponsors/")
      .then((res) => setSponsors(res.data.slice(0, 4)))
      .catch((err) => console.log(err));

    API.get("gallery/")
      .then((res) => setGallery(res.data.slice(0, 6)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-[#111827] to-red-900 text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-yellow-400 blur-3xl"></div>
          <div className="absolute top-32 right-0 w-80 h-80 rounded-full bg-red-500 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-white blur-3xl opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20 text-center">
          <img
            src="/agcc-logo.png"
            alt="AGCC26"
            className="w-28 md:w-36 mx-auto drop-shadow-2xl"
          />

          <p className="mt-5 inline-block px-4 py-1 rounded-full bg-white/10 text-yellow-300 text-sm md:text-base tracking-wider">
            ARATI GRAM CRICKET CARNIVAL 2026
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight text-yellow-400">
            AGCC26
          </h1>

          <p className="mt-4 text-lg md:text-2xl font-semibold text-white/95">
            ARATI GRAM CRICKET CARNIVAL
          </p>

          <p className="mt-5 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            ONE VILLAGE • ONE PASSION • ONE CHAMPION
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <Link
              to="/teams"
              className="bg-yellow-400 text-black px-6 py-4 rounded-2xl font-bold shadow-lg hover:scale-[1.02] transition text-center"
            >
              View Teams
            </Link>
            <Link
              to="/fixtures"
              className="bg-white text-black px-6 py-4 rounded-2xl font-bold shadow-lg hover:scale-[1.02] transition text-center"
            >
              Fixtures & Results
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 md:-mt-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            ["6", "Teams"],
            ["60+", "Players"],
            ["15+", "Matches"],
            ["1", "Champion"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="bg-white rounded-3xl shadow-xl p-5 text-center border border-gray-100"
            >
              <div className="text-4xl md:text-5xl font-black text-red-700">
                {num}
              </div>
              <div className="mt-2 text-sm md:text-base font-semibold text-gray-600">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK ACCESS */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link
            to="/teams"
            className="group bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition border border-gray-100"
          >
            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-2xl mb-4 group-hover:scale-105 transition">
              🏏
            </div>
            <h3 className="text-2xl font-bold">Teams</h3>
            <p className="mt-2 text-gray-600">
              See team logos, owners and squads.
            </p>
          </Link>

          <Link
            to="/fixtures"
            className="group bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition border border-gray-100"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl mb-4 group-hover:scale-105 transition">
              📅
            </div>
            <h3 className="text-2xl font-bold">Fixtures</h3>
            <p className="mt-2 text-gray-600">
              Upcoming and completed matches.
            </p>
          </Link>

          <Link
            to="/points-table"
            className="group bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition border border-gray-100"
          >
            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-2xl mb-4 group-hover:scale-105 transition">
              📊
            </div>
            <h3 className="text-2xl font-bold">Points Table</h3>
            <p className="mt-2 text-gray-600">
              Track rankings and net run rate.
            </p>
          </Link>

          <Link
            to="/rules"
            className="group bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition border border-gray-100"
          >
            <div className="w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center text-2xl mb-4 group-hover:scale-105 transition">
              📜
            </div>
            <h3 className="text-2xl font-bold">Rules</h3>
            <p className="mt-2 text-gray-600">
              Tournament and match regulations.
            </p>
          </Link>
        </div>
      </section>

      {/* FEATURED TEAMS */}
      <section className="max-w-7xl mx-auto px-4 pb-14">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-3xl md:text-4xl font-black">
            Featured Teams
          </h2>
          <Link
            to="/teams"
            className="text-red-700 font-semibold text-sm md:text-base"
          >
            View All
          </Link>
        </div>

        {teams.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center text-gray-500">
            No teams found.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {teams.map((team) => (
              <Link
                key={team.id}
                to={`/teams/${team.id}`}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition"
              >
                <div className="p-5 flex items-center justify-center bg-gray-50">
                  <img
                    src={getImageUrl(team.logo)}
                    alt={team.name}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg leading-tight">
                    {team.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {team.captain || "Captain soon"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* FOLLOW US */}
      <section className="max-w-7xl mx-auto px-4 pb-14">
        <div className="bg-gradient-to-r from-black via-gray-900 to-red-900 rounded-3xl shadow-xl p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Follow Us
          </h2>

          <p className="text-gray-300 mb-8">
            Stay updated with fixtures, player auctions, match highlights and tournament news.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">
            <a
              href="https://www.facebook.com/share/1BDa44NZCE/"
              target="_blank"
              rel="noreferrer"
              className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/aratigramcricketcarnival?igsh=cW12YmVkMjJ6Nm1p"
              target="_blank"
              rel="noreferrer"
              className="w-16 h-16 rounded-full bg-pink-600 text-white flex items-center justify-center text-2xl hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com/@agcc2026?si=n_oq_kSvOQzllI7g"
              target="_blank"
              rel="noreferrer"
              className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl hover:scale-110 transition"
            >
              <FaYoutube />
            </a>
          </div>

        
        </div>
      </section>

      {/* SPONSORS */}
      <section className="max-w-7xl mx-auto px-4 pb-14">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-3xl md:text-4xl font-black">
            Sponsors
          </h2>
          <Link
            to="/sponsors"
            className="text-red-700 font-semibold text-sm md:text-base"
          >
            View All
          </Link>
        </div>

        {sponsors.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center text-gray-500">
            No sponsor data yet.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="bg-white rounded-3xl shadow-lg p-5 border border-gray-100 text-center"
              >
                <img
                  src={getImageUrl(sponsor.logo)}
                  alt={sponsor.brand_name}
                  className="w-24 h-24 object-contain mx-auto"
                />
                <h3 className="mt-3 font-bold text-lg">
                  {sponsor.brand_name}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {sponsor.description || "Sponsor description"}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white mt-6">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <div className="text-2xl font-black text-yellow-400">AGCC26</div>
          <div className="mt-2 text-sm md:text-base text-gray-300">
            ARATI GRAM CRICKET CARNIVAL
          </div>
          <div className="mt-3 text-yellow-300 font-semibold tracking-wider">
            ONE VILLAGE • ONE PASSION • ONE CHAMPION
          </div>
          <div className="mt-4 text-xs md:text-sm text-gray-500">
            © 2026 AGCC26. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home; 
