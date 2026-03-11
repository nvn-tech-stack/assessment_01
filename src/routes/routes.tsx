import { createBrowserRouter } from "react-router-dom";

import Login from "../views/Login";

import RootLayout from "../layouts/RootLayout";

// import ProtectRoutes from "./ProtectRoutes";
import Dashboard from "../views/Admin/Dashboard";

const Router = createBrowserRouter([
  {
    path: "/login",

    element: <Login />,
  },

  {
    path: "/admin",
    // element: <ProtectRoutes />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "user-management",
            element: <h1>User Management</h1>,
          },
        ],
      },
    ],
  },
  {
    path: "*",

    element: <h1>Page Not Found</h1>,
  },
]);

export default Router;
