import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs> 
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/services',
          element: <Services></Services>
        },
        {
          path: '/services/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({params}) => fetch(`https://wild-photographer-server-pearl.vercel.app/services/${params.id}`)
        },
        {
          path: '/myReview',
          element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
        },
        {
          path: '/addService',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path: '*',
          element: <PageNotFound></PageNotFound>
        }
      ]
    }
  ]);

  export default router;