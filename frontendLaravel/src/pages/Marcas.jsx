import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";

export default function Marcas(params) {
  const [marcas, setMarcas] = useState([]);
  const [marcaNueva, setMarcaNueva] = useState("");
  const [updateMarca, setUpdateMarca] = useState({});
  let componente = null;
  async function postMarca(marca) {
    try {
      const response = await axios.post("http://localhost:8000/api/brand", {
        nombre: marca,
      });
      if (response.status === 201) {
        setMarcas([...marcas, response.data]);
        setMarcaNueva("");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteMarca(id) {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/brand/${id}`
      );
      if (response.status === 200) {
        setMarcas(marcas.filter((marca) => marca.id != id));
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function update() {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/brand/${updateMarca.id}`,
        { nombre: updateMarca.nombre }
      );
      if (response.status === 200) {
        console.log(marcas);
        const res = marcas.map((marca) => {
          if (marca.id == updateMarca.id) {
            marca.nombre = updateMarca.nombre;
            return marca;
          } else {
            return marca;
          }
        });
        setMarcas(res);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8000/api/brand");
        console.log("GET");
        setMarcas(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (Object.keys(updateMarca).length != 0) {
    componente = (
      <Form className="mt-3">
        <div className="row">
          <label htmlFor="nombre" className=" col-2 form-label">
            Nombre
          </label>
          <div className="col-7">
            <input
              type="text"
              className="form-control"
              placeholder="Editar"
              value={updateMarca.nombre}
              onChange={(e) =>
                setUpdateMarca({ ...updateMarca, nombre: e.target.value })
              }
            />
          </div>
          <button className="btn btn-primary col-3" onClick={() => update()}>
            Actualizar marca
          </button>
        </div>
      </Form>
    );
  }

  return (
    <>
      <h1>MARCAS DISPONIBLES</h1>
      <div className="row col-12">
        <div className="col-6">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Eliminar</th>
                <th scope="col">Seleccionar</th>
              </tr>
            </thead>
            <tbody>
              {marcas.map((marca) => (
                <tr key={marca.id}>
                  <th scope="row">{marca.nombre}</th>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteMarca(marca.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => setUpdateMarca(marca)}
                    >
                      Seleccionar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <h4 className="">Añadir una marca</h4>
          <Form>
            <div className="row">
              <label htmlFor="nombre" className=" col-2 form-label">
                Nombre
              </label>
              <div className="col-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Marca Nueva"
                  onChange={(e) => setMarcaNueva(e.target.value)}
                  value={marcaNueva}
                />
              </div>
              <button
                className="btn btn-primary col-2"
                onClick={() => postMarca(marcaNueva, this)}
              >
                Crear
              </button>
            </div>
          </Form>

          {componente}
        </div>
      </div>
    </>
  );
}
