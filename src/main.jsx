import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

// 3rd party
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// contexts
import { UserProvider } from "./contexts/User.context";
import { CategoriesProvider } from "./contexts/Categories.context";
import { CartProvider } from "./contexts/Cart.context";

// routes
import Home from "./routes/home/Home.component.jsx";
import Navigation from "./routes/navigation/Navigation.component.jsx";
import Shop from "./routes/shop/Shop.component.jsx";
import Authentication from "./routes/authentication/Authentication.component";
import Checkout from "./routes/checkout/Checkout.component";

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
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  // the order of how we structure which gets nested where has to do with what needs access to what
  // As you can see, the <RouterProvider router={router} />, traditionally this would be our <App /> component but due to how React Router changed things that is no longer the case. But the <RouterProvider router={router} /> needs access to ProductsProvider, UserProvider, and React.StrictMode, each for their own reasons. Meaning that the child, which is the <RouterProvider router={router} /> in this case, is what will have access. Like the scoping rules of a variable being visible in an outer scope.
  // CHANGED/UPDATED ProductsProvider to become CategoriesProvider
  <React.StrictMode>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  </React.StrictMode>
);
