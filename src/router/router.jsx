import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2>Router not found</h2>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/jobs/:id',
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:'/jobApply/:id',
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path:'/myApplications',
          element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/signIn',
          element:<SignIn></SignIn>
        },
      ]
    },
  ]);


  export default router;