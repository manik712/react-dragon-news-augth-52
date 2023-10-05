import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>fetch("news.json")
      },
      {
        path:"/login",  
        element:<Login></Login>

      },
      {
        path:"/register",  
        element:<Register></Register>
      },
      {
        path:"/aNews/:id",
        element:<News></News>
      }
    ],
  },
]);

export default router;
