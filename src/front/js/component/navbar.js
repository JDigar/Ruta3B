import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div
        style={{ width: "33%" }}
        className=" p-1  m-auto text-center items-navbar"
      >
        {/* <img style={{width:"33%"}} className="text-center image-navbar" src={logo} alt="" /> */}
        <h1 id="title">Ruta Triple B</h1>
      </div>
      {store.auth ? (
        <nav className="container">
          <div className="container-navbar d-flex w-100 m-0 p-0">
            <div className="navbar-links">
              <ol className="mt-4 d-flex justify-content-start">
                <li className="link">
                  <Link to="/" className="text-dark p-2 mt-2 nav-item">
                    Inicio
                  </Link>
                </li>
                <li className="link">
                  <Link to="#" className="text-dark p-2 mt-2 nav-item">
                    Imagenes
                  </Link>
                </li>
                <li className="link">
                  <Link
                    to="restaurantes"
                    className="text-dark p-2 mt-2 nav-item"
                  >
                    Restaurantes
                  </Link>
                </li>
              </ol>
            </div>
            {/* <div style={{width:"33%"}} className=" p-1  m-auto text-center items-navbar">
        <img style={{width:"33%"}} className="text-center image-navbar" src={logo} alt="" /> */}
            {/* <h1>Ruta Triple B</h1>
      </div > */}

            <div className="d-flex justify-content-end items-navbar items-navbar-bottom">
              <Link
                to="/"
                type="button"
                className="btn  btn-sm h-50 m-3"
                style={{
                  backgroundColor: "rgb(247, 230, 173)",
                  color: "black",
                }}
                onClick={() => actions.logout()}
              >
                Cerrar sesi??n{" "}
              </Link>
              <Link
                to="/usuario"
                type="button"
                className="btn  btn-sm h-50 m-3"
                style={{
                  backgroundColor: "rgb(247, 230, 173)",
                  color: "black",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </Link>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="container">
          <div className="container-navbar d-flex w-100 m-0 p-0">
            <div className="navbar-links">
              <ol className="mt-4 d-flex justify-content-start">
                <li className="link">
                  <Link to="/" className="text-dark p-2 mt-2 nav-item">
                    Inicio
                  </Link>
                </li>
                <li className="link">
                  <Link to="#" className="text-dark p-2 mt-2 nav-item">
                    Imagenes
                  </Link>
                </li>
                <li className="link">
                  <Link
                    to="/restaurantes"
                    className="text-dark p-2 mt-2 nav-item"
                  >
                    Restaurantes
                  </Link>
                </li>
              </ol>
            </div>
            {/* <div style={{width:"33%"}} className=" p-1  m-auto text-center items-navbar">
					<img style={{width:"33%"}} className="text-center image-navbar" src={logo} alt="" /> */}
            {/* <h1>Ruta Triple B</h1>
				</div > */}

            <div className="d-flex justify-content-end items-navbar items-navbar-bottom">
              <Link
                to="/login"
                type="button"
                className="btn  btn-sm h-50 m-3"
                style={{
                  backgroundColor: "rgb(247, 230, 173)",
                  color: "black",
                }}
              >
                Iniciar sesi??n{" "}
              </Link>
              <Link
                to="/seleccion-registro"
                type="button"
                className="btn  btn-sm h-50 m-3"
                style={{
                  backgroundColor: "rgb(247, 230, 173)",
                  color: "black",
                }}
              >
                Registrarse
              </Link>
            </div>
          </div>
        </nav>
      )}
      <hr />
    </>
  );
};
