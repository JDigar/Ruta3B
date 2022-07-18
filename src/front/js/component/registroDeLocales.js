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

    const handleSubmit = (e) => {
      e.preventDefault();
      // if (email)
      actions.RegistroLocales(newNameLocal, newEmail,newPassword,newTipoDeLocal,newDescripcion,newPago);
      {Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )}
    };

    
  return (
    <div className="container" style={{width:"700px",marginTop:"2cm",backgroundColor:"rgb(247, 230, 173)",padding:"1cm",marginBottom:"150px",borderRadius:"15px"}}>
      {store.auth === true ? (
        <Navigate to="/restaurante" />
      ) : 
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="p-1 " htmlFor="">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="example1"
            aria-describedby="emailHelp"
              onChange={(e) => setNewNameLocal(e.target.value)}
          />
        </div>
        <div className="mb-3">
        <label className="p-1 " htmlFor="">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="example3"
            aria-describedby="emailHelp"
              onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
        <label className="p-1 " htmlFor="">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="example4"
              onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
        <label className="p-1" htmlFor="">Repita su contraseña</label>
          <input
            type="password"
            className="form-control"
            id="example4"
              onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 content-center">
        <h2>Que tipo de local deseas registrar?</h2>
          <div className="m-auto w-50 p-1 text-center d-flex row input-group mb-3">
          {/* <label className="p-1" htmlFor="">descripcion local</label>
          <input
            type="text"
            className="form-control"
            id="example4"
              onChange={(e) => setNewTipoDeLocal(e.target.value)}
          /> */}
            <div className="p-1 form-check">
                  <input className="p-0  w-0 form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className="form-check-label" htmlFor="flexRadioDefault1" onChange={(e) => setNewTipoDeLocal(e.target.value)}>
                    Local de Comida
                  </label>
                </div>
                <div className="p-1 form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label className="form-check-label" htmlFor="flexRadioDefault2" onChange={(e) => setNewTipoDeLocal(e.target.value)}>
                    Local de Bebida
                  </label>
                </div>
          </div>
        </div>
        <div className="mb-3 content-center">
        <label className="p-1" htmlFor="">Describeme un poco tu local</label>
          <input
            type="text"
            className="form-control"
            id="example6"
            aria-describedby="emailHelp"
              onChange={(e) => setNewDescripcion(e.target.value)}
          />
        </div>
        <div className="mb-3 content-center">
          <div>
          <label style={{width:"90%"}} className=" p-1" htmlFor="">Método de pago</label>
             <svg xmlns="http://www.w3.org/2000/svg" style={{width:"10%"}} height="25" fill="currentColor" className="p-1 text-primary bi bi-paypal" viewBox="0 0 16 16">
             <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z"/>
            </svg>
          </div>
        
          <input
            type="text"
            className="form-control"
            id="example7"
            aria-describedby="emailHelp"
              onChange={(e) => setNewPago(e.target.value)}
          />
        </div>
      <div className="text-center">
      <button type="submit" className="w-50 text-center btn"  style={{color:"black",backgroundColor:"white"}}>
          Registrar 
      </button>
      </div>
        
      </form>
    }
    </div>
  );
};

export default RegistroDeLocales;
