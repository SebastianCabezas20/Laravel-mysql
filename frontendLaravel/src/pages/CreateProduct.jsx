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

  const [nuevaEspecificacion, setNuevaEspecificacion] = useState({
    nombre: "",
    descripcion: "",
  });

  const [Modelo, setModelo] = useState({
    nombre: "",
    tipo: null,
    modelos: [],
  });

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:8000/api/createProduct");
        if (res.status === 200) {
          console.log(res.data);
          setMarcas(res.data.marcas);
          setModeloTipos(res.data.tipo_modelos);
          setCategorias(res.data.categorias);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  async function guardarProducto() {
    try {
      console.log({
        producto: nuevoProducto,
        especificaciones: especificaciones,
      });
      const res = await axios.post("http://localhost:8000/api/product", {
        producto: nuevoProducto,
        especificaciones: especificaciones,
        modelo: { tipo: Modelo.tipo, modelos: Modelo.modelos },
      });
      if (res.status === 200) {
        alert("producto agregado con exito");
      }
    } catch (error) {}
  }
  return (
    <>
      <div className="">
        <div
          className="row border border-success-subtle border-2 pb-4 pt-4 rounded"
          id="linea"
        >
          <div className="col-6  ">
            <div className="col-7 form-group mx-auto">
              <label htmlFor="nombre" className="form-label">
                Nombre del producto
              </label>
              <input
                autoFocus
                type="text"
                name="nombre"
                id="nombre"
                className="form-control"
                value={nuevoProducto.nombre}
                onChange={(e) =>
                  setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })
                }
              />
            </div>
            <div className="col-8 mx-auto">
              <label htmlFor="des" className="form-label">
                Descripcion del producto
              </label>
              <textarea
                name="descripcion"
                id="des"
                cols="30"
                rows="auto"
                className="form-control"
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
          <div className="col-6">
            <div className="col-8 mx-auto mb-3">
              <label htmlFor="stock" className="form-label">
                Ingrese stock inicial
              </label>
              <input
                type="number"
                name="stock"
                id="stock"
                className="form-control"
                value={nuevoProducto.stock}
                onChange={(e) =>
                  setNuevoProducto({ ...nuevoProducto, stock: e.target.value })
                }
              />
            </div>

            <div className="col-8 mx-auto mb-3">
              <label htmlFor="precio" className="form-label">
                Valor inicial del producto
              </label>
              <input
                type="number"
                name="precio"
                id="precio"
                className="form-control"
                value={nuevoProducto.precio}
                onChange={(e) =>
                  setNuevoProducto({ ...nuevoProducto, precio: e.target.value })
                }
              />
            </div>
            <div className="col-8 mx-auto mb-3">
              <label htmlFor="descuento" className="form-label">
                Descuento inicial del producto
              </label>
              <input
                className="form-control"
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
            <div className="col-8 mx-auto" id="marca mb-3">
              <h5>Seleccione la marca del producto</h5>
              <select
                className="form-label form-select"
                defaultValue={1}
                onChange={(e) =>
                  setNuevoProducto({
                    ...nuevoProducto,
                    brand_id: e.target.value,
                  })
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
        </div>

        <div
          id="linea"
          className="row mt-4 mb-4 border border-success-subtle border-2 pb-4 pt-4 rounded"
        >
          <div className="col-6 ">
            <div id="tipo modelo" className="col-7 ms-2">
              <h5>Seleccione el tipo de modelo del producto</h5>
              <select
                defaultValue={1}
                className="form-control form-select"
                name="marca"
                id="marca"
                onChange={(e) => setModelo({ ...Modelo, tipo: e.target.value })}
              >
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

            <div id="modelos" className="col-12 mt-3">
              <label
                htmlFor="modelo"
                className="form-label d-flex justify-content-start ms-5"
              >
                Ingrese el modelo
              </label>
              <div className="row">
                <div className="col-8">
                  <input
                    className="form-control"
                    type="text"
                    name="modelo"
                    value={Modelo.nombre}
                    id="modelo"
                    onChange={(e) =>
                      setModelo({ ...Modelo, nombre: e.target.value })
                    }
                  />
                </div>
                <div className="col-4">
                  <button
                    className=" btn btn-primary"
                    onClick={() => {
                      setModelo({
                        ...Modelo,
                        modelos: [...Modelo.modelos, Modelo.nombre],
                      });
                    }}
                  >
                    Ingresar modelo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <div className="col-auto">
              <ul className="list-group">
                {Modelo.modelos.map((modelo) => (
                  <li key={modelo} className="list-group-item">
                    {modelo}
                    <button
                      type="button"
                      className="btn-close ms-2"
                      onClick={() =>
                        setModelo({
                          ...Modelo,
                          modelos: Modelo.modelos.filter(
                            (model) => model != modelo
                          ),
                        })
                      }
                    ></button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border border-success-subtle border-2 pb-4 pt-4 rounded mb-4 row">
          <div className="col-6"></div>
          <div className="col-6">
            <ul class="list-group me-5">
              {categorias.map((categoria) => (
                <li key={categoria.id} class="list-group-item">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    on
                    value=""
                    id={categoria.nombre}
                  />
                  <label class="form-check-label" for={categoria.nombre}>
                    {categoria.nombre}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border border-success-subtle border-2 pb-4 pt-4 rounded">
          <div id="Specs" className="row mt-4">
            <div className="col-3 ms-4">
              <label htmlFor="nombreSpec" className="form-label">
                Ingrese el nombre de la especificacion
              </label>
              <input
                className="form-control"
                type="text"
                name="nombreSpec"
                id="nombreSpec"
                onChange={(e) =>
                  setNuevaEspecificacion({
                    ...nuevaEspecificacion,
                    nombre: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-8">
              <label
                htmlFor="desSpec"
                className="form-label d-flex justify-content-start ms-5"
              >
                Ingrese la descripcion
              </label>
              <div className="row">
                <div className="col-7">
                  <input
                    type="text"
                    name="desSpec"
                    className="form-control"
                    id="desSpec"
                    onChange={(e) =>
                      setNuevaEspecificacion({
                        ...nuevaEspecificacion,
                        descripcion: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-primary "
                    onClick={() =>
                      setEspecificaciones([
                        ...especificaciones,
                        nuevaEspecificacion,
                      ])
                    }
                  >
                    Añadir especificacion
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div class="list-group mt-4 col-8 ">
              {especificaciones.map((spec) => (
                <a
                  class="list-group-item list-group-item-action"
                  aria-current="true"
                  key={spec.nombre}
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{spec.nombre}</h5>
                  </div>
                  <div className="row">
                    <p class="mb-1 col-11">{spec.descripcion}</p>
                    <button
                      className="btn-close col-1"
                      onClick={() =>
                        setEspecificaciones(
                          especificaciones.filter(
                            (especificacion) =>
                              especificacion.nombre != spec.nombre
                          )
                        )
                      }
                    ></button>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={guardarProducto}
          >
            Guardar producto
          </button>
          <button type="button" className="btn btn-danger ms-3">
            Cancelar producto
          </button>
        </div>
      </div>
    </>
  );
}
