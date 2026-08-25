import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";


function App() {
  return (
    <Routes>
      {/* Página inicial */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Páginas */}
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Endereço inexistente volta para o login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;