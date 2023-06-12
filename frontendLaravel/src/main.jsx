import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Crud from "./pages/Crud.jsx";
import Productos, { loader as loaderroot } from "./pages/Productos.jsx";
import ProductoEspecifico, {
  getProducto,
} from "./pages/ProductoEspecifico.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/crud",
    element: <Crud />,
  },
  {
    path: "/crud/productos",
    element: <Productos />,
    loader: loaderroot,
  },
  {
    path: "/crud/productos/:id",
    element: <ProductoEspecifico />,
    loader: getProducto,
  },
  {
    path: "*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
