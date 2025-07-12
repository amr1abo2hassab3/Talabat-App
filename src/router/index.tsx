import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages";
import ErrorHandler from "../components/errors/ErrorHandler";
import ProductsPage from "./../pages/Products";
import ProductDetailsPage from "../pages/ProductDetails";
import LoginPage from "../pages/Login";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorHandler />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/productDetails/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
