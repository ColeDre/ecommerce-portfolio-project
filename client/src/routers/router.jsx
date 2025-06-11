import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import NotFound from "../pages/NotFound";

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
        path: '*',
        element: <NotFound />
      }
    ]
  },
]);

export default router;