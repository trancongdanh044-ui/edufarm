import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../pages/Home";

import AdminDashboard from "../pages/admin/Dashboard";
import AdminPost from "../pages/admin/posts";
import ThongKe from "../pages/admin/thongKe"
import Tour from "../pages/admin/tour"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/admin" element={
        <ProtectedRoute roles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/admin/post" element={<ProtectedRoute roles={['admin']}>
        <AdminPost></AdminPost>
      </ProtectedRoute>}/>
      <Route path="/admin/thongke" element={<ProtectedRoute roles={['admin']}>
        <ThongKe></ThongKe>
      </ProtectedRoute>}/>
      <Route path="/admin/tour" element={<ProtectedRoute roles={['admin']}>
        <Tour></Tour>
      </ProtectedRoute>} />
    </Routes>
  );
}

export default AppRoutes;