import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useInstructors from "../../Hooks/useInstructors";

const DashBoard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructors] = useInstructors();
  // const isInstructors = true;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-8 items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/manageClasses">
                  My Selected Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUsers">
                  My Enrolled Classes
                </NavLink>
              </li>
            </>
          ) : isInstructors ? (
            <>
              <li>
                <NavLink to="/dashboard/addClasses">Add a Class</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myClass">My Classes</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/mySelectedClass">
                  My Selected Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolledClasses">
                  My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">Payment</NavLink>
              </li>
            </>
          )}
          {/* divider */}
          <div className="divider">OR</div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/instructors">Instructors</NavLink>
          </li>
          <li>
            <NavLink to="/classes">Classes</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
