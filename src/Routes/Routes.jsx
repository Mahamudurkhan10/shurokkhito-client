import {
     createBrowserRouter,
     
   } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home/Home";
import Contact from "../Home/Contact/Contact";

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
        }
       ]
     },
   ]);