import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Crud from "./pages/Crud.jsx";
import Productos from "./pages/Productos.jsx";
import ProductoEspecifico from "./pages/ProductoEspecifico.jsx";
import Marcas from "./pages/Marcas.jsx";

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
    path: "*",
    element: <Crud />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
