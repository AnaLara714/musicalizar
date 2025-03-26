import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ManagerPage from "../pages/ManagerPage";
import HomePage from "../pages/HomePage";
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
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/manager" element={<ManagerPage />} />
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
