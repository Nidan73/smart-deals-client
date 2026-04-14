import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import AllBids from "../pages/AllBids";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allProducts",
        loader: () => fetch(`http://localhost:5000/products`),
        element: (
          <PrivateRoute>
            <AllProducts></AllProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "allBids",
        element: (
          <PrivateRoute>
            <AllBids></AllBids>
          </PrivateRoute>
        ),
      },
      {
        path: "productDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
        Component: ProductDetails,
      },
    ],
  },
]);
