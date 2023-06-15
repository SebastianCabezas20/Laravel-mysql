import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Productos(params) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function loader() {
      try {
        const response = await axios.get("http://localhost:8000/api/product");
        if (response.status === 200) {
          setProductos(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    loader();
  }, []);
  async function onDelete(producto) {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/product/${producto.id}`
      );
      if (response.status === 200) {
        setProductos(productos.filter((product) => product.id != producto.id));
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="row">
        <h1 className="col-8 d-flex justify-content-end ">
          Inventario productos
        </h1>
        <div className=" col-4 d-flex justify-content-end  ">
          <Link to={"create"} className="btn btn-warning  col-6" type="button">
            Agregar un producto al inventario
          </Link>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
            <th scope="col">Descripcion</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <th scope="row">{producto.nombre}</th>
              <td>{producto.precio}</td>
              <td>{producto.stock}</td>
              <td>{producto.descripcion}</td>
              <td>
                <Link to={`${producto.id}`} className="btn btn-primary">
                  Modificar producto
                </Link>
              </td>
              <td>
                <Link
                  className="btn btn-danger"
                  onClick={() => onDelete(producto)}
                >
                  Eliminar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
