import { useEffect, useState } from "react";
import API from "../services/api";
import { getImageUrl } from "../utils/images";

function Sponsors() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    API.get("sponsors/")
      .then((res) => setSponsors(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-black text-white py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center">
          Sponsorship
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img
              src={getImageUrl(sponsor.logo)}
              alt={sponsor.brand_name}
              className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-gray-200"
            />
            <h2 className="text-2xl font-bold mt-4">{sponsor.brand_name}</h2>
            <p className="text-gray-600 mt-3">{sponsor.description || "No description added."}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
