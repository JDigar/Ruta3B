import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const RegistroUsuario = () => {
  const [newName, setNewName] = useState("");
  const [newApellido, setNewApellido] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { store, actions } = useContext(Context);

  const handleSubmit2 = (e) => {
    e.preventDefault();
    // if (email)
    actions.RegistroUsuario(newName, newApellido, newEmail, newPassword);
  };
  return (
    <div className="container text-center">
      {store.auth === true ? (
        <Navigate to="/loginView" />
      ) : (
        <form onSubmit={handleSubmit2}>
          <div className="mb-3 content-center">
            <input
              placeholder="Nombre"
              type="text"
              className="form-control"
              id="example1"
              aria-describedby="emailHelp"
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Apellidos"
              type="text"
              className="form-control"
              id="example2"
              aria-describedby="emailHelp"
              onChange={(e) => setNewApellido(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="correo electronico"
              type="email"
              className="form-control"
              id="example3"
              aria-describedby="emailHelp"
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              placeholder="indique su password"
              type="password"
              className="form-control"
              id="example4"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className=" container mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label ms-2" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Registrar
          </button>
        </form>
      )}
    </div>
  );
};

export default RegistroUsuario;
