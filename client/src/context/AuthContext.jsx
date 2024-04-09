import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../Queries/API";

export const InitialUser = {
  userId: "",
  name: "",
  email: "",
  isAdmin: false,
};

const InitialState = {
  user: InitialUser,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false,
};

const AuthContext = createContext(InitialState);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(InitialUser);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthUser = async () => {
    setIsLoading(true);
    try {
      const currentUser = await getCurrentUser();
      if (currentUser.id) {
        setUser({
          userId: currentUser.userId,
          name: currentUser.name,
          email: currentUser.email,
          isAdmin: currentUser.isAdmin,
        });
        setIsAuthenticated(true);
        return true;
      }
    } catch (err) {
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const cookie = localStorage.getItem("accessToken");
    if (cookie === "[]" || cookie === null || cookie === undefined)
      navigate("/login");
    checkAuthUser();
  }, []);

  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useUserContext = () => useContext(AuthContext);
