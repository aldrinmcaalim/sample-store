import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

// 3rd party
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// contexts
import { UserProvider } from "./contexts/User.context";

// routes
import Home from "./routes/home/Home.component.jsx";
import Navigation from "./routes/navigation/Navigation.component.jsx";
import Shop from "./routes/shop/Shop.component.jsx";
import Authentication from "./routes/authentication/Authentication.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "auth",
        element: <Authentication />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
