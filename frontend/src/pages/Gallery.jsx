import { useEffect, useState } from "react";
import API from "../services/api";
import { getImageUrl } from "../utils/images";
import PageHeader from "../components/PageHeader";
import EmptyState from "../components/EmptyState";

function Gallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    API.get("gallery/")
      .then((res) => setGallery(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <PageHeader title="Gallery" subtitle="Moments and memories from AGCC26." />

      {/* GALLERY */}

      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-10">

        {gallery.length === 0 ? (
          <EmptyState title="No photos uploaded yet" />
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">

            {gallery.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition duration-300"
              >
                <img
                  src={getImageUrl(item.image)}
                  alt={item.title}
                  className="w-full object-cover"
                />

                <div className="p-4">

                  <h3 className="font-bold text-lg">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="text-gray-600 text-sm mt-2">
                      {item.description}
                    </p>
                  )}

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Gallery; 
