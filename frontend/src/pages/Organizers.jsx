import { useEffect, useState } from "react";
import API from "../services/api";

function getImageUrl(path) {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `https://agcc26-backend.onrender.com${path}`;
}

function getOrganizerPriority(designation = "") {
  const normalized = designation.toLowerCase();

  if (normalized.includes("president")) return 0;
  if (
    normalized.includes("developer") ||
    normalized.includes("devoloper") ||
    normalized.includes("executive member")
  ) {
    return 1;
  }

  return 2;
}

function Organizers() {
  const [organizers, setOrganizers] = useState([]);

  useEffect(() => {
    API.get("organizers/")
      .then((res) => setOrganizers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-black text-white py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center">
          Organizers
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...organizers]
          .sort((a, b) => getOrganizerPriority(a.designation) - getOrganizerPriority(b.designation))
          .map((person) => (
          <div key={person.id} className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img
              src={getImageUrl(person.photo)}
              alt={person.name}
              className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-gray-200"
            />
            <h2 className="text-2xl font-bold mt-4">{person.name}</h2>
            <p className="text-red-600 font-semibold mt-1">{person.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Organizers;
