import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Sidebar from "./Assets/Components/Sidebar/sidebar";
import Topbar from "./Assets/Components/Topbar/topbar";
import PanelPrincipal from "./Assets/page/PanelPrincipal";
import Usuarios from "./Assets/page/Usuarios";
import "./App.css";

import Login from "./Assets/Components/Login/login";
import Logout from "./Assets/Components/Login/logout";

export default function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  // Mientras Auth0 carga
  if (isLoading) {
    return <div className="text-white p-10">Cargando...</div>;
  }

  return (
    <Router>
      <Routes>

        {/* --------------------- LOGIN SIN LAYOUT --------------------- */}
        {!isAuthenticated && (
          <Route path="/login" element={<Login />} />
        )}

        {/* Si intenta entrar a cualquier ruta sin estar logeado → lo manda al login */}
        {!isAuthenticated && (
          <Route path="*" element={<Navigate to="/login" />} />
        )}

        {/* --------------------- RUTAS PROTEGIDAS --------------------- */}
        {isAuthenticated && (
          <Route
            path="*"
            element={
              <div className="flex h-screen bg-[#1e293b] text-white">

                {/* Sidebar */}
                <Sidebar />

                {/* Área derecha */}
                <div className="flex flex-col flex-1">

                  {/* Topbar */}
                  <div className="sticky top-0 z-10">
                    <Topbar />
                  </div>

                  {/* Contenido */}
                  <main className="flex-1 overflow-y-auto p-6">
                    <Routes>
                      <Route path="/" element={<PanelPrincipal />} />
                      <Route path="/usuarios" element={<Usuarios />} />
                      <Route path="/logout" element={<Logout />} />
                      <Route path="*" element={<PanelPrincipal />} />
                    </Routes>
                  </main>

                </div>
              </div>
            }
          />
        )}

      </Routes>
    </Router>
  );
}
