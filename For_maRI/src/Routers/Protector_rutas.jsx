import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const Protector_rutas = () => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) return <h1>Loading...</h1>;
  if (!isAuthenticated && !loading) return <Navigate to="/login" replace />;
  return <Outlet />;
};
export default Protector_rutas
