import { useEffect, useState } from "react";
import API from "../services/api";
import PageHeader from "../components/PageHeader";
import EmptyState from "../components/EmptyState";

function Rules() {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    API.get("rules/")
      .then((res) => setRules(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <PageHeader title="Rules" subtitle="Tournament regulations and match guidelines." />

      {/* Rules */}
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-10">

        {rules.length === 0 ? (
          <EmptyState title="No rules added yet" />
        ) : (
          <div className="space-y-4 sm:space-y-6">

            {rules.map((rule) => (
              <div
                key={rule.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >

                <div className="bg-red-700 text-white p-4">
                  <h2 className="text-lg md:text-2xl font-black">
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
