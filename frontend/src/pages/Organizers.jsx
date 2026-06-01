import { useEffect, useState } from "react";
import API from "../services/api";
import { getImageUrl } from "../utils/images";
import PageHeader from "../components/PageHeader";
import EmptyState from "../components/EmptyState";

function getOrganizerPriority(designation = "") {
  return designation.toLowerCase().includes("president") ? 0 : 1;
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
      <PageHeader title="Organizers" subtitle="The people behind AGCC26." />

      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-10">
        {organizers.length === 0 ? (
          <EmptyState title="No organizers added yet" />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[...organizers]
              .sort((a, b) => getOrganizerPriority(a.designation) - getOrganizerPriority(b.designation))
              .map((person) => (
                <div key={person.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 text-center">
                  <img
                    src={getImageUrl(person.photo)}
                    alt={person.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mx-auto border-4 border-gray-100"
                  />
                  <h2 className="text-base sm:text-2xl font-black mt-4 leading-tight">{person.name}</h2>
                  <p className="text-red-700 font-bold mt-1 text-xs sm:text-sm uppercase tracking-wide">{person.designation}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Organizers;
