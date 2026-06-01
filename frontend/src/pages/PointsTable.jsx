import { useEffect, useState } from "react";
import API from "../services/api";
import { getImageUrl } from "../utils/images";
import PageHeader from "../components/PageHeader";
import EmptyState from "../components/EmptyState";

function PointsTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    API.get("points-table/")
      .then((res) => setRows(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <PageHeader title="Points Table" subtitle="Rankings, points and net run rate." />

      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-10">
        {rows.length === 0 ? (
          <EmptyState title="No points data yet" />
        ) : (
          <>
            <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full">
                <thead className="bg-red-700 text-white">
                  <tr>
                    <th className="p-4">Pos</th>
                    <th className="p-4 text-left">Team</th>
                    <th className="p-4">M</th>
                    <th className="p-4">W</th>
                    <th className="p-4">L</th>
                    <th className="p-4">PTS</th>
                    <th className="p-4">NRR</th>
                  </tr>
                </thead>

                <tbody>
                  {rows.map((row, index) => (
                    <tr key={row.id} className="border-b last:border-b-0 hover:bg-gray-50">
                      <td className="p-4 font-bold text-center">{index + 1}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={getImageUrl(row.team_logo)}
                            alt={row.team_name}
                            className="w-10 h-10 object-contain"
                          />
                          <span className="font-semibold">{row.team_name}</span>
                        </div>
                      </td>
                      <td className="text-center">{row.matches}</td>
                      <td className="text-center">{row.wins}</td>
                      <td className="text-center">{row.losses}</td>
                      <td className="text-center font-bold">{row.points}</td>
                      <td className="text-center">{row.net_run_rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden space-y-3">
              {rows.map((row, index) => (
                <div key={row.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>

                    <img
                      src={getImageUrl(row.team_logo)}
                      alt={row.team_name}
                      className="w-11 h-11 object-contain"
                    />

                    <div className="flex-1 min-w-0">
                      <h2 className="font-black text-base leading-tight">{row.team_name}</h2>
                      <div className="grid grid-cols-5 gap-2 mt-3 text-[11px] text-gray-700">
                        <span><strong>M</strong> {row.matches}</span>
                        <span><strong>W</strong> {row.wins}</span>
                        <span><strong>L</strong> {row.losses}</span>
                        <span><strong>PTS</strong> {row.points}</span>
                        <span><strong>NRR</strong> {row.net_run_rate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PointsTable;
