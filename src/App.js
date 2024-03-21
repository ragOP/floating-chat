import Landing from "./components/Landing";
import Income from "./components/Income";
import MedicareMedicide from "./components/MedicareMedicide";
import NotQualified from "./components/NotQualified";
import Qualfied from "./components/Qualfied";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        congrats
        <Route path="/income" element={<Income />} />
        <Route path="/medicare-medicaid" element={<MedicareMedicide />} />
        <Route path="/not-qualified" element={<NotQualified />} />
        <Route path="/congrats" element={<Qualfied />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
