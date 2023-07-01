import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

// eslint-disable-next-line react/prop-types
export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return children;
};
