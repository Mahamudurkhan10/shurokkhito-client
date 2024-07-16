import {
     createBrowserRouter,
     
   } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home/Home";
import Contact from "../Home/Contact/Contact";
import Register from "../Shared/Register/Register";
import Login from "../Shared/Login/Login";

  export const router = createBrowserRouter([
     {
       path: "/",
       element: <div> <Root/> </div>,
       children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:'/contact',
          element: <Contact/>
        },
        {
          path:'/login',
          element: <Login/>
        },
        {
          path:'register',
          element: <Register/>
        }
       ]
     },
   ]);