import axios from "axios";
import { useEffect, useState } from "react";

export default function CreateProduct(params) {
  const [marcas, setMarcas] = useState([]);
  const [ModeloTipos, setModeloTipos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    descuento: 0,
    stock: 0,
    brand_id: null,
  });
  const [especificaciones, setEspecificaciones] = useState([]);

  let nombreEspecificacion, descripcionEspecificacion;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:8000/api/createProduct");
        if (res.status === 200) {
          console.log(res.data);
          setMarcas(res.data.marcas);
          setModeloTipos(res.data.tipo_modelos);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="">
        <div className="row col-12" id="linea">
          <div className="col-6">
            <label htmlFor="nombre">Nombre del producto</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={nuevoProducto.nombre}
              onChange={(e) =>
                setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })
              }
            />
          </div>
          <div className="col-6">
            <label htmlFor="des">Descripcion del producto</label>
            <textarea
              name="descripcion"
              id="des"
              cols="30"
              rows="10"
              value={nuevoProducto.descripcion}
              onChange={(e) =>
                setNuevoProducto({
                  ...nuevoProducto,
                  descripcion: e.target.value,
                })
              }
            ></textarea>
          </div>
        </div>
        <div className="row" id="linea">
          <div className="col-3">
            <label htmlFor="stock">Ingrese stock inicial</label>
            <input
              type="number"
              name="stock"
              id="stock"
              value={nuevoProducto.stock}
              onChange={(e) =>
                setNuevoProducto({ ...nuevoProducto, stock: e.target.value })
              }
            />
          </div>

          <div className="col-3">
            <label htmlFor="precio">Valor inicial del producto</label>
            <input
              type="number"
              name="precio"
              id="precio"
              value={nuevoProducto.precio}
              onChange={(e) =>
                setNuevoProducto({ ...nuevoProducto, precio: e.target.value })
              }
            />
          </div>
          <div className="col-3">
            <label htmlFor="descuento">Descuento inicial del producto</label>
            <input
              type="number"
              name="descuento"
              id="descuento"
              value={nuevoProducto.descuento}
              onChange={(e) =>
                setNuevoProducto({
                  ...nuevoProducto,
                  descuento: e.target.value,
                })
              }
            />
          </div>
          <div className="col-3" id="marca">
            <h5>Seleccione la marca del producto</h5>
            <select
              defaultValue={1}
              onChange={(e) =>
                setNuevoProducto({ ...nuevoProducto, brand_id: e.target.value })
              }
              name="marca"
              id="marca"
            >
              <option disabled value={1}>
                Seleccione una marca
              </option>
              {marcas.map((marca) => (
                <option key={marca.id} value={marca.id}>
                  {marca.nombre}
                </option>
              ))}
              <option>Agregar un producto nuevo</option>
            </select>
          </div>
        </div>

        <div id="categorias" className="row mt-4">
          <div
            style={{ width: 50 + "%", height: 100 + "px" }}
            className="bg-primary"
          >
            <div class="mw-100" style={{ width: 200 + "%" }}>
              Max-width 100%
            </div>
          </div>
          <div
            style={{ width: 50 + "%", height: 100 + "px" }}
            className="bg-primary"
          >
            <div class="mw-100" style={{ width: 200 + "%" }}>
              Max-width 100%
            </div>
          </div>
        </div>

        <div id="linea" className="row mt-4 mb-4">
          <div id="tipo modelo" className="col-4">
            <h5>Seleccione el tipo de modelo del producto</h5>
            <select defaultValue={1} name="marca" id="marca">
              <option disabled value={1}>
                Seleccione una categoria
              </option>
              {ModeloTipos.map((modelo) => (
                <option key={modelo.id} value={modelo.id}>
                  {modelo.tipo}
                </option>
              ))}
              <option value={4}>Agregar un tipo nuevo</option>
            </select>
          </div>
          <div id="modelos" className="col-6">
            <label htmlFor="modelo">Ingrese el modelo</label>
            <input type="text" name="modelo" id="modelo" />
            <button type="button">Ingresar modelo</button>
          </div>
          <div className="col-2">
            <ul class="list-group">
              <li class="list-group-item">Primer modelo</li>
              <li class="list-group-item">Segundo modelo</li>
              <li class="list-group-item">Tercer modelo</li>
            </ul>
          </div>
        </div>

        <div id="Specs" className="row">
          <div className="col-5">
            <label htmlFor="nombreSpec">
              Ingrese el nombre de la especificacion
            </label>
            <input
              type="text"
              name="nombreSpec"
              id="nombreSpec"
              onChange={(e) => (nombreEspecificacion = e.target.value)}
            />
          </div>
          <div className="col-auto">
            <label htmlFor="desSpec">Ingrese la descripcion</label>
            <input
              type="text"
              name="desSpec"
              id="desSpec"
              onChange={(e) => (descripcionEspecificacion = e.target.value)}
            />
            <button
              type="button"
              onClick={() =>
                setEspecificaciones([
                  ...especificaciones,
                  {
                    nombre: nombreEspecificacion,
                    descripcion: descripcionEspecificacion,
                  },
                ])
              }
            >
              Añadir especificacion
            </button>
          </div>

          <div class="list-group mt-4">
            {especificaciones.map((spec) => (
              <a
                class="list-group-item list-group-item-action"
                aria-current="true"
                key={spec.nombre}
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{spec.nombre}</h5>
                </div>
                <p class="mb-1">{spec.descripcion}</p>
              </a>
            ))}
          </div>
        </div>

        {console.log(nombreEspecificacion)}
        <button type="button">Guardar producto</button>
        <button type="button">Cancelar producto</button>
      </div>
    </>
  );
}
