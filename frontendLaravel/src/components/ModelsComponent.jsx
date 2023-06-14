export default function ModelsComponent({ model }) {
  /*return (
    <>
      <div
        className="collapse mt-2"
        id="collapseExample"
        style={{ marginLeft: 20 + "%" }}
      >
        <div className="card card-body">
          
        </div>
      </div>
    </>
  );*/
  return (
    <>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {model.descripcion}: Modelo {model.type_model.tipo}
        </div>
      </div>
    </>
  );
}
