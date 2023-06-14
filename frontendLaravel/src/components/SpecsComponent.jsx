export default function SpecsComponent({ spec }) {
  return (
    <>
      <div className="list-group mb-1 ms-5">
        <a
          href="#"
          className="list-group-item list-group-item-action"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{spec.nombre}</h5>
            <small></small>
          </div>
          <p className="mb-1">{spec.descripcion}</p>
          <small></small>
        </a>
      </div>
    </>
  );
}
