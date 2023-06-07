import { createBrowserRouter } from "react-router-dom";
import Main from "../Outlet/Main";
import Home from "../Page/Home/Home/Home";
import Instructors from "../Page/Instructors/Instructors";
import Login from "../Page/Login/Login";

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
        }
    ]
  },
]);

export default router;
