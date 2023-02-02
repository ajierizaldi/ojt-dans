import { Routes, Route } from "react-router-dom";

import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import CertificateContainer from "./components/pages/certificate/CertificateContainer";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/:uid" element={<Dashboard />} />
        <Route path="/certificate/:uid" element={<CertificateContainer />} />
      </Routes>
    </div>
  );
}

export default App;
