import { useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivetRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation()
    if(loading){
      return <div className="flex justify-center mt-[60px]">
        {user?<span className=" m-auto loading loading-dots loading-lg"></span>:
          <div className="text-center">
          <span className=" m-auto loading loading-dots loading-lg"></span>
          <p>login to proceed !!  <Link to="/login" className="text-blue-600">Login Now</Link></p>
          <img className="w-2/3 m-auto" src="https://i.ibb.co/tzXC21Y/Artboard-1-2x.png" alt="" />
          </div>
        }

      </div>
    }
    if (user) {
      return children;
    }
    return<Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivetRoute;