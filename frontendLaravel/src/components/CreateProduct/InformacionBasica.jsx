export default function InformacionBasica({
  nuevoProducto,
  marcas,
  setNuevoProducto,
}) {
  return (
    <div
      className="row border border-success-subtle border-2 pb-4 pt-4 rounded"
      id="linea"
    >
      <div className="col-6  ">
        <div className="col-7 form-group mx-auto">
          <label htmlFor="nombre" className="form-label">
            Nombre del producto
          </label>
          <input
            autoFocus
            type="text"
            name="nombre"
            id="nombre"
            className="form-control"
            value={nuevoProducto.nombre}
            onChange={(e) =>
              setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })
            }
          />
        </div>
        <div className="col-8 mx-auto">
          <label htmlFor="des" className="form-label">
            Descripcion del producto
          </label>
          <textarea
            name="descripcion"
            id="des"
            cols="30"
            rows="auto"
            className="form-control"
            value={nuevoProducto.descripcion}
            onChange={(e) =>
              setNuevoProducto({
                ...nuevoProducto,
                descripcion: e.target.value,
              })
            }
          ></textarea>
        </div>
      </div>
      <div className="col-6">
        <div className="col-8 mx-auto mb-3">
          <label htmlFor="stock" className="form-label">
            Ingrese stock inicial
          </label>
          <input
            type="number"
            name="stock"
            id="stock"
            className="form-control"
            value={nuevoProducto.stock}
            onChange={(e) =>
              setNuevoProducto({ ...nuevoProducto, stock: e.target.value })
            }
          />
        </div>

        <div className="col-8 mx-auto mb-3">
          <label htmlFor="precio" className="form-label">
            Valor inicial del producto
          </label>
          <input
            type="number"
            name="precio"
            id="precio"
            className="form-control"
            value={nuevoProducto.precio}
            onChange={(e) =>
              setNuevoProducto({ ...nuevoProducto, precio: e.target.value })
            }
          />
        </div>
        <div className="col-8 mx-auto mb-3">
          <label htmlFor="descuento" className="form-label">
            Descuento inicial del producto
          </label>
          <input
            className="form-control"
            type="number"
            name="descuento"
            id="descuento"
            value={nuevoProducto.descuento}
            onChange={(e) =>
              setNuevoProducto({
                ...nuevoProducto,
                descuento: e.target.value,
              })
            }
          />
        </div>
        <div className="col-8 mx-auto" id="marca">
          <h5>Seleccione la marca del producto</h5>
          <select
            className="form-label form-select"
            defaultValue={1}
            onChange={(e) =>
              setNuevoProducto({
                ...nuevoProducto,
                brand_id: e.target.value,
              })
            }
            name="marca"
            id="marca"
          >
            <option disabled value={1}>
              Seleccione una marca
            </option>
            {marcas.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
            <option>Agregar una marca nueva</option>
          </select>
        </div>
      </div>
    </div>
  );
}
