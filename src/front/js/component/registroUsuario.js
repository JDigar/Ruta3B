import React, { useState, useContext,useEffect } from "react";
import { Context } from "../store/appContext";
import { Link,useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const RegistroUsuario = () => {
  const [newName, setNewName] = useState("");
  const [newApellido, setNewApellido] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit2 = (e) => {
    e.preventDefault();
    actions.registroUsuario(newName, newApellido, newEmail, newPassword);

    navigate("/login");

  };


  return (
    <>
    
    <div className="container" style={{width:"700px",marginTop:"2cm",backgroundColor:"rgb(247, 230, 173)",padding:"1cm",marginBottom:"150px",borderRadius:"15px"}}>
    {store.auth ? (
        <Navigate to="/login" />
      ): 
      <form onSubmit={handleSubmit2}>
        <div className="mb-3">
          <label className="p-1 " htmlFor="">Nombre</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
              onChange={(e) => setNewName(e.target.value)}
              required
          />
        </div>
        <div className="mb-3">
          <label className="p-1 " htmlFor="">Apellido</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
              onChange={(e) => setNewApellido(e.target.value)}
              required
          />
        </div>
        <div className="mb-3">
        <label className="p-1 " htmlFor="">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
              onChange={(e) => setNewEmail(e.target.value)}
              required
          />
        </div>

        <div className="mb-3">
        <label className="p-1 " htmlFor="">Contraseña</label>
          <input
            type="password"
            className="form-control"
              onChange={(e) => setNewPassword(e.target.value)}
              required
          />
        </div>
        <div className="mb-3">
        <label className="p-1" htmlFor="">Repita su contraseña</label>
          <input
            type="password"
            className="form-control"
              onChange={(e) => setNewPassword(e.target.value)}
              required
          />
        </div>
        
      <div className="text-center">
      <button  type="submit" className="w-50 text-center btn"  style={{color:"black",backgroundColor:"white"}}>
          Registrar 
      </button>
      </div>
        
      </form>
    }
    </div>
  
    </>
  );
};


export default RegistroUsuario;
