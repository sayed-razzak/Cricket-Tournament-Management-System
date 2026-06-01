import { useEffect, useState } from "react";
import API from "../services/api";
import { getImageUrl } from "../utils/images";

function Gallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    API.get("gallery/")
      .then((res) => setGallery(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}

      <div className="bg-gradient-to-r from-black via-gray-900 to-red-900 py-12 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-yellow-400">
          Gallery
        </h1>

        <p className="text-gray-300 mt-4 text-lg">
          Memories of AGCC26
        </p>
      </div>

      {/* GALLERY */}

      <div className="max-w-7xl mx-auto px-4 py-10">

        {gallery.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
            No photos uploaded yet.
          </div>
        ) : (
          <div className="columns-2 md:columns-3 gap-4 space-y-4">

            {gallery.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
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
