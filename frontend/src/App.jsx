import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Teams from "./pages/Teams";
import TeamDetails from "./pages/TeamDetails";
import Fixtures from "./pages/Fixtures";
import PointsTable from "./pages/PointsTable";
import Rules from "./pages/Rules";
import Organizers from "./pages/Organizers";
import Sponsors from "./pages/Sponsors";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<TeamDetails />} />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="/points-table" element={<PointsTable />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/organizers" element={<Organizers />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;