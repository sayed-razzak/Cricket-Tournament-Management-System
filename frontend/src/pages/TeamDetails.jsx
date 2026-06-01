import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";
import { getImageUrl } from "../utils/images";
import EmptyState from "../components/EmptyState";

function formatRole(role = "") {
  return role.replace("_", " ");
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
      <div className="min-h-screen flex justify-center items-center text-xl font-bold">
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

  const groups = [
    { title: "Batters", color: "bg-red-700", players: otherPlayers.filter((p) => p.role === "batter") },
    { title: "Bowlers", color: "bg-blue-700", players: otherPlayers.filter((p) => p.role === "bowler") },
    { title: "All Rounders", color: "bg-green-700", players: otherPlayers.filter((p) => p.role === "all_rounder") },
    { title: "Wicket Keepers", color: "bg-yellow-500 text-black", players: otherPlayers.filter((p) => p.role === "wicket_keeper") },
  ];

  const renderProfileCard = (person, label, image, subLabel) => (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center border border-white/10">
      <img
        src={getImageUrl(image)}
        alt={person}
        className="h-44 sm:h-56 mx-auto object-contain drop-shadow-xl"
      />
      <h3 className="mt-4 text-xl sm:text-2xl font-black">{person}</h3>
      <p className="text-yellow-400 font-bold mt-1">{label}</p>
      {subLabel && <p className="text-gray-300 mt-1 text-sm uppercase">{subLabel}</p>}
    </div>
  );

  const renderPlayers = (players) => {
    if (players.length === 0) {
      return <EmptyState title="No players added yet" />;
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {players.map((player) => (
          <div
            key={player.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="bg-gradient-to-b from-red-700 to-red-950 flex justify-center items-center p-5">
              <img
                src={getImageUrl(player.photo)}
                alt={player.name}
                className="h-64 sm:h-[320px] w-full object-contain drop-shadow-2xl"
              />
            </div>

            <div className="p-5 text-center">
              <h3 className="text-xl sm:text-2xl font-black tracking-wide leading-tight">
                {player.name}
              </h3>

              <p className="text-yellow-600 font-bold mt-3 uppercase text-sm">
                {formatRole(player.role)}
              </p>

              <div className="mt-5 grid grid-cols-1 gap-2 text-sm text-gray-700">
                <p>
                  <strong>Bat:</strong> {player.batting_style || "N/A"}
                </p>
                <p>
                  <strong>Bowl:</strong> {player.bowling_style || "N/A"}
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
      <section className="bg-gradient-to-br from-black via-gray-950 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 text-center">
          <Link
            to="/teams"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-white/10 px-5 text-yellow-400 font-semibold"
          >
            Back to Teams
          </Link>

          <img
            src={getImageUrl(team.logo)}
            alt={team.name}
            className="w-28 h-28 sm:w-40 sm:h-40 mx-auto mt-8 object-contain"
          />

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mt-5 leading-tight">
            {team.name}
          </h1>

          <p className="text-yellow-400 text-base sm:text-xl mt-3 font-bold">
            Captain: {team.captain || "Not added"}
          </p>

          {team.description && (
            <p className="max-w-2xl mx-auto mt-5 text-gray-300 leading-7 text-sm sm:text-base">
              {team.description}
            </p>
          )}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {team.owner_photo &&
              renderProfileCard(team.owner_name || "Owner", "Franchise Owner", team.owner_photo)}
            {captainProfile &&
              renderProfileCard(
                captainProfile.name,
                "Captain",
                captainProfile.photo,
                formatRole(captainProfile.role)
              )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {groups.map((group, index) => (
          <section key={group.title} className={index === 0 ? "" : "mt-12 sm:mt-16"}>
            <h2 className={`text-xl sm:text-3xl font-black mb-5 text-white p-4 rounded-2xl shadow-sm ${group.color}`}>
              {group.title} ({group.players.length})
            </h2>
            {renderPlayers(group.players)}
          </section>
        ))}
      </div>
    </div>
  );
}

export default TeamDetails;
