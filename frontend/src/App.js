import { Routes, Route } from "react-router-dom";

import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import CertificateContainer from "./components/pages/certificate/CertificateContainer";
import Matkul from "./components/pages/matkul/Matkul";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/:uid" element={<Dashboard />} />
        <Route path="/certificate/:uid" element={<CertificateContainer />} />
        <Route path="/matkul" element={<Matkul />} />
      </Routes>
    </div>
  );
}

export default App;
