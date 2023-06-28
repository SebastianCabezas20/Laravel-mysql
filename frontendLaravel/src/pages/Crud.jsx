import { useState } from "react";
import Card from "../components/card";
import logo from "../assets/depositphotos_144673661-stock-photo-school-stationery-products-such-as.jpg";
import marca from "../assets/marcas-brand-equity.jpg";

export default function Crud() {
  const [info, setInfo] = useState({
    productos: {
      nombre: "productos inventario",
      des: "Una descripcion basica",
      img: logo,
      url: "/crud/productos",
    },
    marcas: {
      nombre: "Marcas disponibles",
      des: "Marcas de los distintos productos",
      img: marca,
      url: "/crud/marcas",
    },
  });
  return (
    <>
      <div>
        <h1>Seleccione lo que desea ver</h1>

        <div className="row mt-4">
          <Card
            nombre={info.productos.nombre}
            des={info.productos.des}
            img={info.productos.img}
            url={info.productos.url}
          ></Card>
          <Card
            nombre={info.marcas.nombre}
            des={info.marcas.des}
            img={info.marcas.img}
            url={info.marcas.url}
          ></Card>
        </div>
      </div>
    </>
  );
}
