import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivetRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation()
    if(loading){
      return <div className="flex justify-center mt-[60px]">
        <span className=" m-auto loading loading-dots loading-lg"></span>
      </div>
    }
    if (user) {
      return children;
    }
    return<Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivetRoute;