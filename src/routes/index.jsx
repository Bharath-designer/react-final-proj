import * as React from "react";

import {
  createBrowserRouter,
} from "react-router-dom";
import PagesLazyLoader from "../components/HOC/PagesLazyLoader.jsx";

const Home = React.lazy(()=> import("../pages/Home.jsx"))
const Login = React.lazy(()=> import("../pages/Login.jsx"))

const router = createBrowserRouter([
  {
    path: "*",
    element: PagesLazyLoader(Home)
  },
  {
    path: "/login",
    element: PagesLazyLoader(Login),
  },
]);

export default router
