import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Navbar(params) {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg  mb-5 border border-info p-2 mb-2 border-opacity-50 border-3 rounded
      bg-danger p-2 text-dark bg-opacity-25 "
      >
        <div class="container-fluid">
          <a class="navbar-brand fw-bold">Papeleria ByP</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex justify-content-center"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  to={"/crud"}
                  class="nav-link active fw-bold"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item fw-bold">
                <Link
                  to={"/crud/productos/create"}
                  class="nav-link active"
                  href="#"
                >
                  Creación producto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
