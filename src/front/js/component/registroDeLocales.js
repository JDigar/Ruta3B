import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const RegistroDeLocales = () => {
  const [newNameLocal, setNewNameLocal] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newTipoDeLocal, setNewTipoDeLocal] = useState("");
  const [newDescripcion, setNewDescripcion] = useState("");
  const [newPago, setNewPago] = useState("");
  const { store, actions } = useContext(Context);

  //   const handleSubmit3 = (e) => {
  //     e.preventDefault();
  //     // if (email)
  //     actions.registration(newName, newApellido, newEmail, newPassword);
  //   };
  return (
    <div className="container text-center" style={{width:"700px",marginTop:"2cm",backgroundColor:"rgb(247, 230, 173)",padding:"1cm",marginBottom:"150px",borderRadius:"15px"}}>
      {/* {store.auth === true ? (
        <Navigate to="/loginView" />
      ) : ( */}
      {/* <form onSubmit={handleSubmit2}> */}
      <form>
        <div className="mb-3 content-center">
          <input
            placeholder="Nombre"
            type="text"
            className="form-control"
            id="example1"
            aria-describedby="emailHelp"
            //   onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="email"
            type="text"
            className="form-control"
            id="example2"
            aria-describedby="emailHelp"
            //   onChange={(e) => setNewApellido(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="correo electronico"
            type="email"
            className="form-control"
            id="example3"
            aria-describedby="emailHelp"
            //   onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            placeholder="indique su password"
            type="password"
            className="form-control"
            id="example4"
            //   onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 content-center">
          {/* <input
              placeholder="Tipo de local"
              type="text"
              className="form-control"
              id="example5"
              aria-describedby="emailHelp"
              onChange={(e) => setNewName(e.target.value)}
            /> */}

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
              onChange={(e) => setNewName(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Tipo de Local
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  Copas
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Comida
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-3 content-center">
          <input
            placeholder="Descripcion"
            type="text"
            className="form-control"
            id="example6"
            aria-describedby="emailHelp"
            //   onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="mb-3 content-center">
          <input
            placeholder="PayPal"
            type="text"
            className="form-control"
            id="example7"
            aria-describedby="emailHelp"
            //   onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className=" container mb-3 form-check"  style={{marginRight:"480px",marginTop:"1cm"}}>
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            
          />
          <label className="form-check-label ms-2" htmlFor="exampleCheck1" style={{marginRight:"480px"}}>
            Check me out
          </label>
        </div>

        <button type="submit" className="btn"  style={{color:"black",backgroundColor:"white"}}>
          Registrar
        </button>
      </form>
      {/* )} */}
    </div>
  );
};

export default RegistroDeLocales;
