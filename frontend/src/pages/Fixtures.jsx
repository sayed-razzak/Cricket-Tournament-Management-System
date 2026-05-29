import { useEffect, useState } from "react";
import API from "../services/api";

function getImageUrl(path) {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `http://127.0.0.1:8000${path}`;
}

function Fixtures() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    API.get("matches/")
      .then((res) => setMatches(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-black py-8">
        <h1 className="text-center text-4xl font-black text-yellow-400">
          Fixtures & Results
        </h1>
      </div>

      <div className="max-w-3xl mx-auto px-3 py-5 space-y-4">
        {matches.length > 0 ? (
          matches.map((match) => (
            <div
              key={match.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              {/* Top Bar */}
              <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
                <span className="font-bold text-sm">
                  Match {match.match_number || match.id}
                </span>

                <span className="text-xs bg-white/20 px-2 py-1 rounded-full capitalize">
                  {match.status}
                </span>
              </div>

              {/* Teams */}
              <div className="p-4">

                <div className="flex items-center justify-between">

                  {/* Team 1 */}
                  <div className="flex flex-col items-center w-24">
                    <img
                      src={getImageUrl(match.team1_logo)}
                      alt={match.team1_name}
                      className="w-14 h-14 object-contain"
                    />
                    <p className="text-xs font-bold text-center mt-2 leading-tight">
                      {match.team1_name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {match.team1_score || "—"}
                    </p>
                  </div>

                  {/* VS */}
                  <div className="text-center px-2">

                    <div className="text-red-600 font-black text-xl">
                      VS
                    </div>

                    <div className="mt-2 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">
                      📅 {new Date(match.date).toLocaleDateString("en-GB")}
                    </div>

                    <div className="mt-2 text-xs text-gray-500">
                      📍 {match.venue}
                    </div>

                  </div>

                  {/* Team 2 */}
                  <div className="flex flex-col items-center w-24">
                    <img
                      src={getImageUrl(match.team2_logo)}
                      alt={match.team2_name}
                      className="w-14 h-14 object-contain"
                    />
                    <p className="text-xs font-bold text-center mt-2 leading-tight">
                      {match.team2_name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {match.team2_score || "—"}
                    </p>
                  </div>

                </div>

                {/* Result */}
                <div className="mt-4 pt-3 border-t text-center">
                  <p className="text-green-600 font-semibold text-sm">
                    {match.result || "Match not started yet"}
                  </p>
                </div>

              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <h2 className="text-xl font-bold">
              No fixtures added yet
            </h2>

            <p className="text-gray-600 mt-2">
              Add matches from Django admin.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Fixtures;