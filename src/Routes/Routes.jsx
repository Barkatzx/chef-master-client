import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/MAin";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import RecipeDetails from "../Layouts/RecipeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/recipes/:id",
    element: <RecipeDetails />,
    children: [
      {
        loader: ({ params }) =>
          fetch(
            `https://chef-master-auth-server-84mzfwack-barkatzx.vercel.app/${params.id}`
          ),
      },
    ],
  },
]);

export default router;