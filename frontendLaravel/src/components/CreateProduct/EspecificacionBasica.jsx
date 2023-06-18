export default function EspecificacionBasica({
  especificaciones,
  setEspecificaciones,
}) {
  return (
    <div className="border border-success-subtle border-2 pb-4 pt-4 rounded">
      <div id="Specs" className="row mt-4">
        <div className="col-3 ms-4">
          <label htmlFor="nombreSpec" className="form-label">
            Ingrese el nombre de la especificacion
          </label>
          <input
            className="form-control"
            type="text"
            value={especificaciones.nombre}
            name="nombreSpec"
            id="nombreSpec"
            placeholder="Nombre"
            onChange={(e) =>
              setEspecificaciones({
                ...especificaciones,
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
                value={especificaciones.descripcion}
                placeholder="Descripcion"
                id="desSpec"
                onChange={(e) =>
                  setEspecificaciones({
                    ...especificaciones,
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
                  setEspecificaciones((antes) => {
                    const todasActualizadas = [
                      ...antes.todas,
                      { nombre: antes.nombre, descripcion: antes.descripcion },
                    ];
                    return {
                      ...antes,
                      descripcion: "",
                      nombre: "",
                      todas: todasActualizadas,
                    };
                  })
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
          {especificaciones.todas.map((spec) => (
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
                    setEspecificaciones({
                      ...especificaciones,
                      todas: especificaciones.todas.filter(
                        (especificacion) => especificacion.nombre != spec.nombre
                      ),
                    })
                  }
                ></button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
