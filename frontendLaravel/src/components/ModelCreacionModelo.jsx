import { useRef } from "react";

export default function ModelCreacionModelo({ modelo, set }) {
  const refTipo = useRef();
  function agregarTipo() {
    set({ ...modelo, tipoNuevo: [refTipo.current.value] });
    refTipo.current.value = "";
  }
  return (
    <div
      class="modal fade"
      id="ModalModelo"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Agregar modelo del producto
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div>
              <input
                className="form-control"
                type="text"
                name="marcaNueva"
                id="marcaNueva"
                ref={refTipo}
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={agregarTipo}
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
