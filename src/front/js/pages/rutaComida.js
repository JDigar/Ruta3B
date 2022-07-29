import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const RutaComida = ({ nombre, descripcion, id, tipo_local }) => {
  const { store, actions } = useContext(Context);


  console.log(useParams());
	const {theid} = useParams();
    
	console.log(store.restaurantes);


  return (
    <>
     
      <div
        className="border border-dark central d-flex"
        style={{ marginLeft: "120px", marginTop: "2cm", marginBottom: "3cm" }}
      >
        <div
          className="border border-dark m-auto izq"
          style={{
            borderStyle: " solid ",
            borderWidth: "3px",
            height: "300px",
            width: "500px",
            borderColor: "rgb(247, 230, 173)",
            borderRadius:"20px"
          }}
        >
          {" "}
          <h2>foto restaurante</h2>
        </div>
        <div
          className="border border-dark m-auto der"
          style={{
            borderStyle: " solid ",
            borderWidth: "3px",
            height: "300px",
            width: "500px",
            marginLeft: "1cm",
            borderColor: "rgb(247, 230, 173)",
            borderRadius:"20px"
          }}
        >
          
          <div className="text-center informacion" style={{marginLeft:"40px",marginTop:"40px"}}>
            <h1><em>{store.restaurantes[theid]?.nombre}</em></h1>
            <br></br>
            <p className="fs-4 text">{store.restaurantes[theid]?.descripcion}</p>
            <br></br>
            <h5>Ubicacion </h5>
          </div>
        </div>
      </div>

      <div
        className="inferior"
        style={{
         
          height: "700px",
          width: "750px",
          borderColor: "rgb(247, 230, 173)",
          marginLeft: "280px",
          borderRadius:"20px"
        }}
      >
        <div className="text-center">
        <Link className="" to="/restaurantes">
				<span className="text-center btn btn-primary btn-lg" href="#" role="button">
					Volver atrás
				</span>
			</Link>
        </div>
        
        {/* <div className="fb-comments" style={{backgroundColor:"rgb(247, 230, 173)"}} data-href="https://3000-jdigar-ruta3b-huwqp0ibu9g.ws-eu54.gitpod.io/ruta-comida" data-width="750" data-numposts="2"></div> */}
      </div>
    </>
  );
};
