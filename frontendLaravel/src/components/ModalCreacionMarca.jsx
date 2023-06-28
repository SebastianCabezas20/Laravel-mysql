import { useRef } from "react";

export default function ModalCreacionMarca({ setMarcas, marcas }) {
  const inputMarca = useRef();

  function agregarMarca() {
    setMarcas({ ...marcas, marcaNueva: [inputMarca.current.value] });
    inputMarca.current.value = "";
  }

  return (
    <div
      class="modal fade"
      id="ModalMarca"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Agregar una marca
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
                ref={inputMarca}
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
              onClick={agregarMarca}
              data-bs-dismiss="modal"
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
