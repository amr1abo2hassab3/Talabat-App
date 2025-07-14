import { createBrowserRouter } from "react-router-dom";

import Home from "../pages";
import ErrorHandler from "../components/errors/ErrorHandler";
import ProductsPage from "./../pages/Products";
import ProductDetailsPage from "../pages/ProductDetails";
import LoginPage from "../pages/Login";
import NotFound from "../pages/NotFound";
import LayoutApp from "../layout/LayoutApp";
import ProtectedRouteApp from "../components/auth/ProtectedRouteApp";
import ProtectedAuth from "../components/auth/ProtectedAuth";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <ProtectedAuth>
        <LoginPage />
      </ProtectedAuth>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRouteApp>
        <LayoutApp />
      </ProtectedRouteApp>
    ),
    errorElement: <ErrorHandler />,
    children: [
      {
        index: true,
        path: "/home",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/productDetails/:id",
        element: <ProductDetailsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
