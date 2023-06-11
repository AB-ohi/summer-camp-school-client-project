import React, { useContext } from 'react';
import useInstructors from '../Hooks/useInstructors';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const InstructorRout = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructors, isInstructorsLoading] = useInstructors();
    const location = useLocation();
    if (loading || isInstructorsLoading) {
      return <progress className="progress w-56 m-auto"></progress>;
    }
    if (user && isInstructors) {
      return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  };

export default InstructorRout;