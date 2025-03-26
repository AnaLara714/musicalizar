import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import LoginSectretaria from "../pages/Login";
import Manager from "../pages/Manager";
// const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const { isAuthenticated } = useAuth();
//   if (!isAuthenticated) {
//     return <Navigate to="/" replace />;
//   }
//   return <>{children}</>;
// };

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginSectretaria />} />
      <Route path="/manager" element={<Manager />} />
      {/* <Route
        path="/"
        element={
          <ProtectedRoute>
            <StudentList />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  );
};
