import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ManagerPage from "../pages/ManagerPage";
import HomePage from "../pages/HomePage";
import { AuthContext } from "../context/AuthContext";
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
  const { isAuthenticated } = useContext(AuthContext);
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/manager" element={isAuthenticated ? <ManagerPage /> : <LoginPage />} />
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
