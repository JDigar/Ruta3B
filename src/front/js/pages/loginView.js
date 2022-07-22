import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const LoginView = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState(false);
  const navigate = useNavigate();

  console.log(store.token);

  const handleSubmit = (e) => {
    e.prevent.default();
    actions.login(email, password);
  };

  return (
    <div className="container text-center">
      {store.auth && store.auth != "" && store.auth != undefined ? (
       
        <form
          style={{}}
          className="mt-5 h-50 w-50 m-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-3  ">
            <h6 className="mb-3 text-start">
              Introduce tu cuenta de correo electrónico
            </h6>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <h6 className="mb-3 text-start">Introduce tu contraseña</h6>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="form-control"
            />
          </div>
          <div>
            <label>¿Eres propietario de un restaurante?</label>
            <input onChange={(e) => {setType(!type)}} defaultChecked={type} type="checkbox"/>
          </div>
          <div className=" union d-flex">
            <button
              style={{ backgroundColor: "rgb(247, 230, 173)" }}
              onClick={() => {
                actions.login(email, password,type);
                navigate("/usuario");
              }}
              type="submit"
              className="m-auto btn"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <Navigate to="/usuario"  />
      )}
    </div>
  );
};
