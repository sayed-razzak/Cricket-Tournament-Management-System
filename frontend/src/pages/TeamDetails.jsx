import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";

function getImageUrl(path) {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `https://agcc26-backend.onrender.com${path}`;
}

function TeamDetails() {
  const { id } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    API.get(`teams/${id}/`)
      .then((res) => setTeam(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!team) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  const captainProfile = (team.players || []).find(
    (player) => player.name?.trim().toLowerCase() === team.captain?.trim().toLowerCase()
  );

  const otherPlayers = (team.players || []).filter(
    (player) => player.id !== captainProfile?.id
  );

  const batters = otherPlayers.filter(
    (p) => p.role === "batter"
  );

  const bowlers = otherPlayers.filter(
    (p) => p.role === "bowler"
  );

  const allRounders = otherPlayers.filter(
    (p) => p.role === "all_rounder"
  );

  const wicketKeepers = otherPlayers.filter(
    (p) => p.role === "wicket_keeper"
  );

  const renderPlayers = (players) => {
    if (players.length === 0) {
      return (
        <div className="bg-white rounded-2xl p-6 text-center shadow">
          <p className="text-gray-500">
            No players added yet.
          </p>
        </div>
      );
    }

    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {players.map((player) => (
          <div
            key={player.id}
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
          >

            {/* PLAYER IMAGE */}

            <div className="bg-gradient-to-b from-red-700 to-red-900 flex justify-center items-center p-6">

              <img
                src={getImageUrl(player.photo)}
                alt={player.name}
                className="h-[320px] w-full object-contain drop-shadow-2xl"
              />

            </div>

            {/* PLAYER DETAILS */}

            <div className="p-6 text-center">

              <h3 className="text-2xl md:text-3xl font-black tracking-wide">
                {player.name}
              </h3>

              <p className="text-yellow-500 font-bold mt-3 uppercase text-lg">
                {player.role.replace("_", " ")}
              </p>

              <div className="mt-5 space-y-2 text-gray-700">

                <p>
                  <strong>Bat:</strong>{" "}
                  {player.batting_style || "N/A"}
                </p>

                <p>
                  <strong>Bowl:</strong>{" "}
                  {player.bowling_style || "N/A"}
                </p>

              </div>

            </div>

          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* TEAM HEADER */}

      <div className="bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">

        <div className="max-w-7xl mx-auto px-4 py-12 text-center">

          <Link
            to="/teams"
            className="text-yellow-400 font-semibold"
          >
            ← Back To Teams
          </Link>

          {/* OWNER */}

          {team.owner_photo && (
            <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-3xl p-6 max-w-md mx-auto">

              <img
                src={getImageUrl(team.owner_photo)}
                alt={team.owner_name}
                className="h-64 mx-auto object-contain drop-shadow-xl"
              />

              <h3 className="mt-4 text-2xl font-bold">
                {team.owner_name}
              </h3>

              <p className="text-yellow-400 font-medium">
                Franchise Owner
              </p>

            </div>
          )}

          {/* CAPTAIN */}

          {captainProfile && (
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-3xl p-6 max-w-md mx-auto">

              <img
                src={getImageUrl(captainProfile.photo)}
                alt={captainProfile.name}
                className="h-64 mx-auto object-contain drop-shadow-xl"
              />

              <h3 className="mt-4 text-2xl font-bold">
                {captainProfile.name}
              </h3>

              <p className="text-yellow-400 font-medium">
                Captain
              </p>

              <p className="text-gray-300 mt-2 uppercase">
                {captainProfile.role.replace("_", " ")}
              </p>

            </div>
          )}

          {/* TEAM LOGO */}

          <img
            src={getImageUrl(team.logo)}
            alt={team.name}
            className="w-40 h-40 mx-auto mt-8 object-contain"
          />

          <h1 className="text-4xl md:text-6xl font-black mt-6">
            {team.name}
          </h1>

          <p className="text-yellow-400 text-xl mt-3">
            Captain: {team.captain}
          </p>

          <p className="max-w-2xl mx-auto mt-5 text-gray-300 leading-7">
            {team.description}
          </p>

        </div>

      </div>

      {/* PLAYERS SECTION */}

      <div className="max-w-7xl mx-auto px-4 py-12">

       <h2 className="text-3xl md:text-4xl font-black mb-8 bg-red-700 text-white p-4 rounded-2xl shadow-lg">
       🏏 BATTERS ({batters.length})
       </h2>

        {renderPlayers(batters)}

        <h2 className="text-3xl md:text-4xl font-black mt-20 mb-8 bg-blue-700 text-white p-4 rounded-2xl shadow-lg">
        🎯 BOWLERS ({bowlers.length})
        </h2>

        {renderPlayers(bowlers)}

        <h2 className="text-3xl md:text-4xl font-black mt-20 mb-8 bg-green-700 text-white p-4 rounded-2xl shadow-lg">
        ⭐ ALL ROUNDERS ({allRounders.length})
        </h2>

        {renderPlayers(allRounders)}

        <h2 className="text-3xl md:text-4xl font-black mt-20 mb-8 bg-yellow-500 text-black p-4 rounded-2xl shadow-lg">
         🧤 WICKET KEEPERS ({wicketKeepers.length})
        </h2>

        {renderPlayers(wicketKeepers)}

      </div>

    </div>
  );
}

export default TeamDetails;
