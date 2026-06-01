import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import { getImageUrl } from "../utils/images";
import PageHeader from "../components/PageHeader";
import EmptyState from "../components/EmptyState";

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    API.get("teams/")
      .then((res) => setTeams(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <PageHeader title="Teams" subtitle="Explore every franchise, captain and squad." />

      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-10">
        {teams.length === 0 ? (
          <EmptyState title="No teams found" message="Teams added in admin will appear here." />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {teams.map((team) => (
              <Link
                to={`/teams/${team.id}`}
                key={team.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-center hover:shadow-xl active:scale-[0.99] transition block"
              >
                <div className="bg-gray-50 p-4 sm:p-6">
                  <img
                    src={getImageUrl(team.logo)}
                    alt={team.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 object-contain mx-auto"
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <h2 className="text-base sm:text-2xl font-black leading-tight">{team.name}</h2>

                  <p className="text-xs sm:text-sm text-gray-600 mt-2">
                    Captain: {team.captain || "Not added"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Teams; 
