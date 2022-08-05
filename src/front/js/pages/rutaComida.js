import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/perfilRestaurante.css";

export const RutaComida = ({ nombre, descripcion, id, tipo_local }) => {
  const { store, actions } = useContext(Context);
  const [date, setDate] = useState("");

  // console.log(useParams());
	const {theid} = useParams();
  // console.log(theid);
  console.log(store.profiles);

  const id2=store.restaurantes.map(a=>a.id)
  console.log(id2);

  useEffect(() => {
    actions.getInformationCurrentMember();
    
    
  }, []);
  return (
    <>
     
      <div
        className="mt-2 m-auto central d-flex"
      >
        <div
          className="d-flex m-auto"
          style={{
          
            height: "300px",
            width: "550px",
            
          }}
        >
          {" "}
          <img className="w-100" src={store.restaurantes[theid]?.foto} alt="" />
        </div>
        <div>
          
        </div>
        <div
          className="content m-auto"
          style={{
            borderStyle: " solid ",
            borderWidth: "3px",
            height: "300px",
            width: "550px",
            marginLeft: "1cm",
            borderColor: "rgb(247, 230, 173)",
            borderRadius:"20px"
          }}
        >
          <div className="offer">
          <h5>Precio medio del ticket: </h5>
          <strong className="">{store.restaurantes[theid]?.precio} €</strong>
          </div>
          <div className="text-center informacion" style={{marginLeft:"40px",marginTop:"40px"}}>
            <h4><em>{store.restaurantes[theid]?.nombre}</em></h4>
            <hr className="w-50 m-auto" />
            <p className="mt-5 fs-4 text">{store.restaurantes[theid]?.descripcion}</p>         
          </div>
        </div>
      </div>
      {store.auth &&
      store.auth != "" &&
      store.auth != undefined &&
      localStorage.getItem("esUsuario") ? (
      <div className="mt-5 text-center m-auto w-75">
      <input className="input text-center m-auto" onChange={(e) => setDate(e.target.value)} type="date" id="start" name="trip-start"></input>
      <button
          onClick={() => actions.addReserva(store.profiles?.id,date)}
          className="btn btn m-2"
          style={{backgroundColor:"rgb(247, 230, 173)", color: "black",}}
        >
        Hacer una reserva
      </button>
      <button
          onClick={() => actions.reservarlocal(store.profiles?.id)}
          className="btn btn m-2"
          style={{backgroundColor:"rgb(247, 230, 173)", color: "black",}}
        >
        aaa
      </button>
      </div>
      ) : (""
      )}
      <div
        className="inferior"
      >
        
       <div className="m-auto fb-comments" style={{backgroundColor:"rgb(247, 230, 173)"}} data-href="https://3000-jdigar-ruta3b-huwqp0ibu9g.ws-eu54.gitpod.io/ruta-comida" data-width="750" data-numposts="2"></div>
      </div>
      <div className="w-25 m-auto text-center">
        <Link className="" to="/restaurantes">
				<span className="mt-3 text-center btn " href="#" role="button" style={{backgroundColor:"rgb(247, 230, 173)", color: "black",}}>
					Volver atrás
				</span>
			</Link>
        </div>
        
        
    </>
  );
};
