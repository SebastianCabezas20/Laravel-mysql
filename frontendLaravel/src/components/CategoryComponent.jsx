export default function CategoryComponent({ categoria }) {
  return (
    <>
      <label
        className="rounded-pill border border-primary w-auto fs-5 ms-2 fw-light"
        key={categoria.id}
      >
        #{categoria.nombre}
        <button
          type="button"
          className="btn-close ms-1 mb-2"
          style={{ width: 10 + "px", height: 10 + "px" }}
          aria-label="Close"
        ></button>
      </label>
    </>
  );
}
