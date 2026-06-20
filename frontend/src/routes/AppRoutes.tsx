import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/Landing/LandingPage";

import Dashboard from "../pages/Dashboard/Dashboard";
import LoginPage from "../pages/Auth/Login";
import RegisterPage from "../pages/Auth/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/register"
        element={<RegisterPage />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
    </Routes>
  );
};

export default AppRoutes;