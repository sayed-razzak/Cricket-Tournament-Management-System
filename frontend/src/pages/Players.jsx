import { useEffect, useMemo, useState } from "react";
import API from "../services/api";
import { getImageUrl } from "../utils/images";
import PageHeader from "../components/PageHeader";
import EmptyState from "../components/EmptyState";

function formatRole(role = "") {
  return role.replace("_", " ");
}

function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    API.get("players/")
      .then((res) => setPlayers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const sortedPlayers = useMemo(
    () => [...players].sort((a, b) => a.name.localeCompare(b.name)),
    [players]
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <PageHeader title="All Players" subtitle="A-Z list of every registered AGCC26 player." />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-10">
        {sortedPlayers.length === 0 ? (
          <EmptyState title="No players added yet" />
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {sortedPlayers.map((player) => (
              <div
                key={player.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-center"
              >
                <div className="bg-gradient-to-b from-red-700 to-red-950 p-2 sm:p-3">
                  <img
                    src={getImageUrl(player.photo)}
                    alt={player.name}
                    className="h-24 sm:h-32 w-full object-contain drop-shadow-xl"
                  />
                </div>

                <div className="p-2 sm:p-3">
                  <h2 className="text-[11px] sm:text-sm font-black leading-tight min-h-8 flex items-center justify-center">
                    {player.name}
                  </h2>
                  <p className="mt-1 text-[10px] sm:text-xs font-bold text-red-700 uppercase">
                    {formatRole(player.role)}
                  </p>
                  <p className="mt-1 text-[10px] sm:text-xs text-gray-500 leading-tight">
                    {player.team_name || "Team not added"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Players;
