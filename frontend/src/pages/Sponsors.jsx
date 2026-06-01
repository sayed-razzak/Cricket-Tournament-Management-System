import { useEffect, useState } from "react";
import API from "../services/api";
import { getImageUrl } from "../utils/images";
import PageHeader from "../components/PageHeader";
import EmptyState from "../components/EmptyState";

function Sponsors() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    API.get("sponsors/")
      .then((res) => setSponsors(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <PageHeader title="Sponsors" subtitle="Partners supporting the tournament." />

      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-10">
        {sponsors.length === 0 ? (
          <EmptyState title="No sponsors added yet" />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 text-center">
                <img
                  src={getImageUrl(sponsor.logo)}
                  alt={sponsor.brand_name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mx-auto border-4 border-gray-100"
                />
                <h2 className="text-base sm:text-2xl font-black mt-4 leading-tight">{sponsor.brand_name}</h2>
                <p className="text-gray-600 mt-3 text-xs sm:text-sm">{sponsor.description || "No description added."}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Sponsors;
