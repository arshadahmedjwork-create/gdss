import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Login";
import AdminLayout from "./AdminLayout";
import Dashboard from "./Dashboard";
import Queries from "./Queries";
import Notifications from "./Notifications";
import Settings from "./Settings";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const auth = localStorage.getItem("gdss_admin_auth");
    setIsAuthenticated(auth === "true");
  }, []);

  if (isAuthenticated === null) return null;

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="*" element={<Navigate to="/admin/login" replace />} />
      </Routes>
    );
  }

  return (
    <AdminLayout onLogout={() => setIsAuthenticated(false)}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/queries" element={<Queries />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </AdminLayout>
  );
};

export default Admin;
