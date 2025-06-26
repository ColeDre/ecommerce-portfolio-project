import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import NotFound from "../pages/NotFound";
import CategoryPage from "../pages/categories/CategoryPage";

const router = createBrowserRouter([
  {
    // nested rout | App element is acting as a header
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/categories/:categoryName/:gender',
        element: <CategoryPage />
      },
      {
        path: '/categories/:categoryName',
        element: <CategoryPage />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
]);

export default router;