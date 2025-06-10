import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";

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
    ]
  },
]);

export default router;