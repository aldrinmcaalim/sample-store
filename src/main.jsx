import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

// 3rd party
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// routes
import Home from "./routes/home/Home.component.jsx";
import Navigation from "./routes/navigation/Navigation.component.jsx";
import Shop from "./routes/shop/Shop.component.jsx";
import SignIn from "./routes/sign-in/SignIn.component";

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
        path: "sign-in",
        element: <SignIn />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
