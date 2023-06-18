import axios from "axios";
import { useEffect, useState } from "react";
import InformacionBasica from "../components/CreateProduct/InformacionBasica";
import ModelosBasicos from "../components/CreateProduct/ModelosBasicos";
import CategoriaBasica from "../components/CreateProduct/CategoriaBasica";
import { redirect, useNavigate } from "react-router-dom";
import EspecificacionBasica from "../components/CreateProduct/EspecificacionBasica";

export default function CreateProduct(params) {
  const [marcas, setMarcas] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    descuento: 0,
    stock: 0,
    brand_id: null,
  });
  const [especificaciones, setEspecificaciones] = useState({
    todas: [],
    nombre: "",
    descripcion: "",
  });

  const [Modelos, setModelos] = useState({
    nombre: "",
    tipo: null,
    modelos: [],
    tipos: [],
  });

  const [categorias, setCategorias] = useState([]);
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [categoriaNueva, setCategoriaNueva] = useState({
    nombre: "",
    categorias: [],
  });

  const navegate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:8000/api/createProduct");
        if (res.status === 200) {
          console.log(res.data);
          setMarcas(res.data.marcas);
          setModelos({ ...Modelos, tipos: res.data.tipo_modelos });
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
        modelo: { tipo: Modelos.tipo, modelos: Modelos.modelos },
        categorias: categoriasSeleccionadas, ///{{nombre: ""},{"nombre: ""}} Existentes
        categoriasNuevas: categoriaNueva.categorias, ///{{nombre: ""},{"nombre: ""}} // A enlazar
      });
      if (res.status === 200) {
        navegate("/crud/productos");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="">
        <InformacionBasica
          nuevoProducto={nuevoProducto}
          setNuevoProducto={setNuevoProducto}
          marcas={marcas}
        ></InformacionBasica>

        <ModelosBasicos
          Modelos={Modelos}
          setModelos={setModelos}
        ></ModelosBasicos>

        <CategoriaBasica
          categorias={categorias}
          categoriaNueva={categoriaNueva}
          setCategoriaNueva={setCategoriaNueva}
          setCategoriasSeleccionadas={setCategoriasSeleccionadas}
          categoriasSeleccionadas={categoriasSeleccionadas}
        ></CategoriaBasica>

        <EspecificacionBasica
          especificaciones={especificaciones}
          setEspecificaciones={setEspecificaciones}
        ></EspecificacionBasica>

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
