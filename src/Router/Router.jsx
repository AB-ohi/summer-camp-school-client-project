import { createBrowserRouter } from "react-router-dom";
import Main from "../Outlet/Main";
import Home from "../Page/Home/Home/Home";
import Instructors from "../Page/Instructors/Instructors";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import Classes from "../Page/Classes/Classes";
import PrivetRoute from "./PrivetRoute";
import DashBoard from "../LayOut/DashBoard/DashBoard";
import MySelectedClasses from "../Page/DashBord/MySelectedClasses/MySelectedClasses";
import EnrolledClasses from "../Page/DashBord/EnrolledClasses/EnrolledClasses";
import Payment from "../Page/DashBord/Payment/Payment";
import ManagClasses from "../Page/DashBord/Admin/ManageClasses/ManagClasses";
import ManageUsers from "../Page/DashBord/Admin/ManageUsers/ManageUsers";
import Error from "../Page/Error/Error";
import AdminRout from "./AdminRout";
import InstructorRout from "./InstructorRout";
import AddClass from "../Page/DashBord/Instructors/AddClass/AddClass";
import MyClass from "../Page/DashBord/Instructors/MyClass.jsx/MyClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/instructors",
          element:<Instructors></Instructors>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        },
        {
          path:"/classes",
          element:<Classes></Classes>
        },
        
    ]
  },
  {
    path:'dashboard',
    element:<PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
    children:[
      // user rout
      {
        path:'mySelectedClass',
        element:<MySelectedClasses></MySelectedClasses>
      },
      {
        path:'enrolledClasses',
        element:<EnrolledClasses></EnrolledClasses>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      // admin Rout
      {
        path:'manageClasses',
        element:<AdminRout><ManagClasses></ManagClasses></AdminRout>
      },
      {
        path:'manageUsers',
        element:<AdminRout><ManageUsers></ManageUsers></AdminRout>
      },
      //instructors rout
      {
        path:'addClasses',
        element:<InstructorRout><AddClass></AddClass></InstructorRout>
      },
      {
        path:'myClass',
        element:<InstructorRout><MyClass></MyClass></InstructorRout>
      },

    ]
  },
  {
    
      path:'/*',
      element:<Error></Error>
    
  }
]);

export default router;
