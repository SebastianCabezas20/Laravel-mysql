import axios from "axios";
import { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";

export default function ProductoEspecifico(props) {
  const [params, setParams] = useState(useParams());
  const [producto, setProducto] = useState({});
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const resProducto = await axios.get(
          `http://localhost:8000/api/product/${params.id}`
        );
        console.log(resProducto);
        if (resProducto.status === 200) {
          setProducto(resProducto.data);
        }
      } catch (error) {
        console.log(error);
      }

      try {
        const resMarcas = await axios.get(`http://localhost:8000/api/brand`);
        console.log(resMarcas);
        if (resMarcas.status === 200) {
          setMarcas(resMarcas.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return (
    <>
      <div>
        <div>
          <h1>Producto seleccionado</h1>
        </div>
        <Form>
          <div className="row mt-4">
            <label htmlFor="nombre" className="col-2 col-form-label">
              Nombre
            </label>

            <div className="col-6 ">
              <input
                type="text"
                name="nombre"
                id="nombre"
                className="form-control"
                value={producto.nombre}
                onChange={(e) =>
                  setProducto({ ...producto, nombre: e.target.value })
                }
              />
              <div id="nombretText" className="form-text">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </div>
              <span className="spanError"></span>
            </div>
          </div>

          <div className="row mt-3">
            <label htmlFor="descripcion" className="col-2 col-form-label">
              Descripcion
            </label>
            <div className="col-6">
              <textarea
                name="descripcion"
                id="descripcion"
                cols="30"
                rows="6"
                className="form-control"
                value={producto.descripcion}
                onChange={(e) =>
                  setProducto({ ...producto, descripcion: e.target.value })
                }
              ></textarea>
              <span className="spanError"></span>
            </div>
          </div>

          <div className="row mt-3">
            <label htmlFor="stock" className="col-2 col-form-label">
              Stock
            </label>
            <div className="col-6">
              <input
                type="number"
                name="stock"
                id="stock"
                value={producto.stock}
                className="form-control"
                onChange={(e) =>
                  setProducto({ ...producto, stock: e.target.value })
                }
              />
              <span className="spanError"></span>
            </div>
          </div>

          <div className="row mt-3">
            <label htmlFor="precio" className="col-2 col-form-label">
              Precio
            </label>
            <div className="col-6">
              <input
                type="number"
                name="precio"
                id="precio"
                value={producto.precio}
                className="form-control"
                onChange={(e) =>
                  setProducto({ ...producto, precio: e.target.value })
                }
              />
              <span className="spanError"></span>
            </div>
          </div>

          <div className="row mt-3">
            <label htmlFor="descuento" className="col-2 col-form-label">
              Descuento
            </label>
            <div className="col-6">
              <input
                type="number"
                name="descuento"
                id="descuento"
                value={producto.descuento}
                className="form-control"
                onChange={(e) =>
                  setProducto({ ...producto, descuento: e.target.value })
                }
              />
              <span className="spanError"></span>
            </div>
          </div>

          <div className="row mt-3">
            <label htmlFor="marca" className="col-2 col-form-label">
              Marca
            </label>
            <div className="col-6">
              <select
                className="form-select"
                aria-label="Default select example"
                name="marca"
                id="marca"
                defaultValue={producto.brand_id}
                onChange={(e) =>
                  setProducto({ ...producto, brand_id: e.target.value })
                }
              >
                {marcas.map((marca) => (
                  <option key={marca.id} value={marca.id}>
                    {marca.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Form>
        <button className="btn btn-primary col-auto me-4 ms-4 mt-4">
          Guardar
        </button>
        <button className="btn btn-danger col-auto ms-4 mt-4">Eliminar</button>
      </div>
    </>
  );
}
