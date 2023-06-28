import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "@popperjs/core";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Crud from "./pages/Crud.jsx";
import Productos from "./pages/Productos.jsx";
import ProductoEspecifico from "./pages/ProductoEspecifico.jsx";
import Marcas from "./pages/Marcas.jsx";
import CreateProduct from "./pages/CreateProduct.jsx";
import Navbar from "./components/CreateProduct/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/crud",
        element: <Crud />,
      },
      {
        path: "/crud/productos",
        element: <Productos />,
      },
      {
        path: "/crud/productos/:id",
        element: <ProductoEspecifico />,
      },
      {
        path: "/crud/marcas",
        element: <Marcas />,
      },
      {
        path: "/crud/productos/create",
        element: <CreateProduct />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/crud"></Navigate>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
