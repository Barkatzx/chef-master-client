import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/MAin";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import RecipeDetailsLayout from "../Layouts/RecipeDetailsLayout";
import RecipeDetails from "../Pages/RecipeDetails/RecipeDetails";
import Blogs from "../Pages/Blogs/Blogs";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          try {
            const chefsData = await fetch
          ('https://chef-master-auth-server-barkatzx.vercel.app/');
          const chefs = await
          chefsData.json();

          return {
            chefs: chefs,
          };
          } catch (err) {
            console.log(err);
          }
        }
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blogs/>,
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
    element: <RecipeDetailsLayout/>,
    children: [
      {
        path: "/recipes/:id",
        element: <PrivateRoutes>
          <RecipeDetails/>
        </PrivateRoutes>,
        loader: ({ params }) =>
          fetch(
            `https://chef-master-auth-server-barkatzx.vercel.app/${params.id}`
          ),
      },
    ],
  },
]);

export default router;