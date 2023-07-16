import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";
// eslint-disable-next-line react/prop-types
const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};

export default RequireAuth;
