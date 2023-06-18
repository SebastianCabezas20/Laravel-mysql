export default function ModelosBasicos({ Modelos, setModelos }) {
  /*
    Modelo{
    nombre: "",
    tipo: null,
    modelos: [],
    tipos: [],
}*/
  return (
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
            onChange={(e) => setModelos({ ...Modelos, tipo: e.target.value })}
          >
            <option disabled value={1}>
              Seleccione una categoria
            </option>
            {Modelos.tipos.map((modelo) => (
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
                value={Modelos.nombre}
                id="modelo"
                onChange={(e) =>
                  setModelos({ ...Modelos, nombre: e.target.value })
                }
              />
            </div>
            <div className="col-4">
              <button
                className=" btn btn-primary"
                onClick={() => {
                  setModelos({
                    ...Modelos,
                    modelos: [...Modelos.modelos, Modelos.nombre],
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
          <ul className="list-group col-auto">
            {Modelos.modelos.map((modelo) => (
              <li key={Math.random()} className="list-group-item">
                {modelo}
                <button
                  type="button"
                  className="btn-close ms-2"
                  onClick={() =>
                    setModelos({
                      ...Modelos,
                      modelos: Modelos.modelos.filter(
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
  );
}
