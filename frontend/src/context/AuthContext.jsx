import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistration, setIsRegistration] = useState(true);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  const handleDeauthentication = () => {
    setIsAuthenticated(false);
  };
  const handleRegistration = () => {
    setIsRegistration(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isRegistration,
        setIsRegistration,
        handleAuthentication,
        handleDeauthentication,
        handleRegistration,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
