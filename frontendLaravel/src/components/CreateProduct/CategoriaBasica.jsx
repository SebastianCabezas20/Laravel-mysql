export default function CategoriaBasica({
  categorias,
  categoriaNueva,
  categoriasSeleccionadas,
  setCategoriaNueva,
  setCategoriasSeleccionadas,
}) {
  return (
    <div className="border border-success-subtle border-2 pb-4 pt-4 rounded mb-4 row">
      <div className="col-7 row">
        <label htmlFor="categoria" className="form-label col-3 mt-auto mb-auto">
          Ingrese una nueva categoria
        </label>
        <div className="col-7 mt-auto mb-auto">
          <input
            type="text"
            className="form-control"
            onChange={(e) =>
              setCategoriaNueva({
                ...categoriaNueva,
                nombre: e.target.value,
              })
            }
          />
        </div>
        <div className="col-1 mb-auto mt-auto">
          <button
            className="btn btn-primary"
            onClick={() =>
              setCategoriaNueva({
                ...categoriaNueva,
                categorias: [
                  ...categoriaNueva.categorias,
                  { nombre: categoriaNueva.nombre },
                ],
              })
            }
          >
            Añadir
          </button>
        </div>
      </div>

      <div className="col-5 d-flex justify-content-center">
        <ul class="list-group col-auto">
          {categorias.map((categoria) => (
            <li key={categoria.id} class="list-group-item">
              <input
                class="form-check-input me-1"
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    ///Agregar categoria
                    setCategoriasSeleccionadas([
                      ...categoriasSeleccionadas,
                      { id: categoria.id, nombre: categoria.nombre },
                    ]);
                  } else {
                    // Se elimina
                    setCategoriasSeleccionadas(
                      categoriasSeleccionadas.filter(
                        (cat) => cat.nombre != categoria.nombre
                      )
                    );
                  }
                }}
                id={categoria.nombre}
              />
              <label class="form-check-label" htmlFor={categoria.nombre}>
                {categoria.nombre}
              </label>
            </li>
          ))}
          {categoriaNueva.categorias.map((categoria) => (
            <li key={Math.random()} class="list-group-item">
              <input
                class="form-check-input me-1"
                type="checkbox"
                checked={true}
                disabled
                id={categoria.nombre}
              />
              <label class="form-check-label" htmlFor={categoria.nombre}>
                {categoria.nombre}
              </label>
              <button
                className="btn-close float-end"
                onClick={() => {
                  setCategoriaNueva({
                    ...categoriaNueva,
                    categorias: categoriaNueva.categorias.filter(
                      (cat) => cat.nombre != categoria.nombre
                    ),
                  });
                }}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
