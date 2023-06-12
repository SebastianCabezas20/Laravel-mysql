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
  });
  return (
    <>
      <h1>Inventario productos</h1>

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
                <Link className="btn btn-danger">Eliminar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
