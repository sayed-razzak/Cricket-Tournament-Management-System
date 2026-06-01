import { useEffect, useState } from "react";
import API from "../services/api";
import { getImageUrl } from "../utils/images";
import PageHeader from "../components/PageHeader";
import EmptyState from "../components/EmptyState";

function getFallbackMatchDate(dateTime = "") {
  const [datePart] = dateTime.split("T");
  if (!datePart) return "";

  const [year, month, day] = datePart.split("-");
  return `${day}/${month}/${year}`;
}

function getFallbackMatchTime(dateTime = "") {
  const [, timePart = ""] = dateTime.split("T");
  const [hourText, minute = "00"] = timePart.split(":");
  const hour = Number(hourText);

  if (Number.isNaN(hour)) return "";

  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minute} ${period}`;
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
      <PageHeader title="Fixtures" subtitle="Upcoming matches, results and scores." />

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10 space-y-4">
        {matches.length === 0 ? (
          <EmptyState title="No fixtures added yet" message="Add matches from Django admin." />
        ) : (
          matches.map((match) => (
            <div
              key={match.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="bg-red-700 text-white px-4 py-3 flex justify-between items-center gap-3">
                <span className="font-bold text-sm">Match {match.match_number || match.id}</span>
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full capitalize">
                  {match.status}
                </span>
              </div>

              <div className="p-4 sm:p-5">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
                  <div className="flex flex-col items-center min-w-0">
                    <img
                      src={getImageUrl(match.team1_logo)}
                      alt={match.team1_name}
                      className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                    />
                    <p className="text-xs sm:text-sm font-bold text-center mt-2 leading-tight break-words">
                      {match.team1_name}
                    </p>
                    <p className="text-sm text-gray-600">{match.team1_score || "-"}</p>
                  </div>

                  <div className="text-center px-1">
                    <div className="text-red-700 font-black text-xl">VS</div>
                    <div className="mt-2 text-[11px] sm:text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg whitespace-nowrap">
                      {match.match_date || getFallbackMatchDate(match.date)}
                    </div>
                    <div className="mt-2 text-[11px] sm:text-xs font-black text-red-700 bg-red-50 px-2 py-1 rounded-lg whitespace-nowrap">
                      {match.match_time || getFallbackMatchTime(match.date)}
                    </div>
                    <div className="mt-2 text-[11px] sm:text-xs text-gray-500 max-w-24 sm:max-w-none">
                      {match.venue}
                    </div>
                  </div>

                  <div className="flex flex-col items-center min-w-0">
                    <img
                      src={getImageUrl(match.team2_logo)}
                      alt={match.team2_name}
                      className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                    />
                    <p className="text-xs sm:text-sm font-bold text-center mt-2 leading-tight break-words">
                      {match.team2_name}
                    </p>
                    <p className="text-sm text-gray-600">{match.team2_score || "-"}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t text-center">
                  <p className="text-green-700 font-semibold text-sm">
                    {match.result || "Match not started yet"}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Fixtures;
