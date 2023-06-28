import axios from "axios";
import { useEffect, useState } from "react";
import InformacionBasica from "../components/CreateProduct/InformacionBasica";
import ModelosBasicos from "../components/CreateProduct/ModelosBasicos";
import CategoriaBasica from "../components/CreateProduct/CategoriaBasica";
import { useNavigate } from "react-router-dom";
import EspecificacionBasica from "../components/CreateProduct/EspecificacionBasica";

export default function CreateProduct(params) {
  const [marcas, setMarcas] = useState({
    marcas: [],
    marcaNueva: [],
  });
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
    tipoNuevo: [],
    tipo: null,
    modelos: [],
    tipos: [],
  });

  const [categorias, setCategorias] = useState({
    categoriasBase: [], // Categorias ya descritas en la base de datos [{id,nombre}]
    categoriasSeleccionadas: [], // Categorias que el usuario selecciono
    nombre: "", // Nombre de nueva categoria
    categoriasNuevas: [], //[{nombre:"",nombre:"",nombre:""}]
  });

  const navegate = useNavigate();

  useEffect(() => {
    console.log(especificaciones);
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:8000/api/createProduct");
        if (res.status === 200) {
          setMarcas({ ...marcas, marcas: res.data.marcas });
          setModelos({ ...Modelos, tipos: res.data.tipo_modelos });
          setCategorias({ ...categorias, categoriasBase: res.data.categorias });
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
        especificaciones: especificaciones.todas,
        modelo: {
          tipo: Modelos.tipo,
          modelos: Modelos.modelos,
          tipoNuevo: Modelos.tipoNuevo,
        },
        categorias: categorias.categoriasSeleccionadas, ///{{nombre: ""},{"nombre: ""}} Existentes
        categoriasNuevas: categorias.categoriasNuevas, ///{{nombre: ""},{"nombre: ""}} // A enlazar
        marcaNueva: marcas.marcaNueva, // A enlazar
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
          setMarcas={setMarcas}
        ></InformacionBasica>

        <ModelosBasicos
          Modelos={Modelos}
          setModelos={setModelos}
        ></ModelosBasicos>

        <CategoriaBasica
          categorias={categorias}
          setCategorias={setCategorias}
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
