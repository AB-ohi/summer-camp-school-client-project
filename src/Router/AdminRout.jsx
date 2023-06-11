import React, { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const AdminRout = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <progress className="progress w-56 m-auto"></progress>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRout;
