import { useState } from "react";
import Card from "../components/card";
import logo from "../assets/depositphotos_144673661-stock-photo-school-stationery-products-such-as.jpg";

export default function Crud() {
  const [info, setInfo] = useState({
    productos: {
      nombre: "productos inventario",
      des: "Una descripcion basica",
      img: logo,
      url: "productos",
    },
  });
  return (
    <>
      <div>
        <h1>Seleccione lo que desea ver</h1>

        <div>
          <Card
            nombre={info.productos.nombre}
            des={info.productos.des}
            img={info.productos.img}
            url={info.productos.url}
          ></Card>
        </div>
      </div>
    </>
  );
}
