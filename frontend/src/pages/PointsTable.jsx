import { useEffect, useState } from "react";
import API from "../services/api";
import { getImageUrl } from "../utils/images";

function PointsTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    API.get("points-table/")
      .then((res) => setRows(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-black text-white py-10">
        <h1 className="text-4xl md:text-5xl font-black text-yellow-400 text-center">
          Points Table
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-3 py-6">

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-4">Pos</th>
                <th className="p-4">Team</th>
                <th className="p-4">M</th>
                <th className="p-4">W</th>
                <th className="p-4">L</th>
                <th className="p-4">PTS</th>
                <th className="p-4">NRR</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4 font-bold">{index + 1}</td>

                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={getImageUrl(row.team_logo)}
                        alt={row.team_name}
                        className="w-10 h-10 object-contain"
                      />
                      <span className="font-semibold">
                        {row.team_name}
                      </span>
                    </div>
                  </td>

                  <td>{row.matches}</td>
                  <td>{row.wins}</td>
                  <td>{row.losses}</td>
                  <td className="font-bold">{row.points}</td>
                  <td>{row.net_run_rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Table */}
        <div className="md:hidden space-y-3">

          {rows.map((row, index) => (
            <div
              key={row.id}
              className="bg-white rounded-2xl shadow-md p-3"
            >
              <div className="flex items-center gap-3">

                {/* Position */}
                <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Team Logo */}
                <img
                  src={getImageUrl(row.team_logo)}
                  alt={row.team_name}
                  className="w-10 h-10 object-contain"
                />

                {/* Team Info */}
                <div className="flex-1">

                  <h2 className="font-bold text-lg leading-tight">
                    {row.team_name}
                  </h2>

                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-700">

                    <span>
                      <strong>M:</strong> {row.matches}
                    </span>

                    <span>
                      <strong>W:</strong> {row.wins}
                    </span>

                    <span>
                      <strong>L:</strong> {row.losses}
                    </span>

                    <span>
                      <strong>PTS:</strong> {row.points}
                    </span>

                    <span>
                      <strong>NRR:</strong> {row.net_run_rate}
                    </span>

                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default PointsTable;
