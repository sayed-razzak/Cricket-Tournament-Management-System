import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function getImageUrl(path) {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `https://agcc26-backend.onrender.com${path}`;
}

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    API.get("teams/")
      .then((res) => setTeams(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-4xl font-bold mb-10">Teams</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {teams.map((team) => (
          <Link
            to={`/teams/${team.id}`}
            key={team.id}
            className="bg-white rounded-xl shadow-lg p-5 text-center hover:shadow-2xl transition block"
          >
            <img
              src={getImageUrl(team.logo)}
              alt={team.name}
              className="w-32 h-32 object-contain mx-auto rounded-full border-4 border-gray-200 bg-white"
            />

            <h2 className="text-2xl font-bold mt-4">{team.name}</h2>

            <p className="text-gray-600 mt-2">
              Captain: {team.captain || "Not added"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Teams; 