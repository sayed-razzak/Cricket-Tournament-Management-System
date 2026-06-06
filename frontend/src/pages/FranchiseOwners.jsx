import { useEffect, useState } from "react";
import API from "../services/api";
import { getImageUrl } from "../utils/images";
import PageHeader from "../components/PageHeader";
import EmptyState from "../components/EmptyState";

function FranchiseOwners() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    API.get("teams/")
      .then((res) => setTeams(res.data))
      .catch((err) => console.log(err));
  }, []);

  const owners = teams.filter((team) => team.owner_name || team.owner_photo);

  return (
    <div className="min-h-screen bg-gray-100">
      <PageHeader title="Franchise Owners" subtitle="Owners representing every AGCC26 franchise." />

      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-10">
        {owners.length === 0 ? (
          <EmptyState title="No franchise owners added yet" message="Owner profiles added in team admin will appear here." />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {owners.map((team) => (
              <div
                key={team.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 text-center"
              >
                <img
                  src={getImageUrl(team.owner_photo || team.logo)}
                  alt={team.owner_name || `${team.name} owner`}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mx-auto border-4 border-gray-100"
                />
                <h2 className="text-base sm:text-2xl font-black mt-4 leading-tight">
                  {team.owner_name || "Owner"}
                </h2>
                <p className="text-red-700 font-bold mt-1 text-xs sm:text-sm uppercase tracking-wide">
                  {team.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FranchiseOwners;
