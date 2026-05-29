import { useEffect, useState } from "react";
import API from "../services/api";

function Rules() {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    API.get("rules/")
      .then((res) => setRules(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-black py-10">
        <h1 className="text-center text-4xl md:text-5xl font-black text-yellow-400">
          Rules & Regulations
        </h1>
      </div>

      {/* Rules */}
      <div className="max-w-6xl mx-auto px-4 py-8">

        {rules.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold">
              No Rules Added Yet
            </h2>
          </div>
        ) : (
          <div className="space-y-6">

            {rules.map((rule) => (
              <div
                key={rule.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >

                <div className="bg-blue-700 text-white p-4">
                  <h2 className="text-xl md:text-2xl font-bold">
                    {rule.title}
                  </h2>
                </div>

                <div className="p-5">
                  <p className="text-gray-700 leading-7 whitespace-pre-line">
                    {rule.description}
                  </p>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Rules;