import { Link } from "react-router-dom";

export default function card({ nombre, des, img, url }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{des}</p>
          <Link to={`${url}`} className="btn btn-primary">
            Ir a {nombre}
          </Link>
        </div>
      </div>
    </>
  );
}
