import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
export const RutaComida = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
     
      <div
        className="central d-flex"
        style={{ marginLeft: "120px", marginTop: "2cm", marginBottom: "3cm" }}
      >
        <div
          className="izq"
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
          className="der"
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
          <div className="informacion" style={{marginLeft:"40px",marginTop:"40px"}}>
            <h5>Nombre :</h5>
            <br></br>
            <h5>Breve descripcion :</h5>
            <br></br>
            <h5>Ubicacion :</h5>
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
        <div class="fb-comments" style={{backgroundColor:"rgb(247, 230, 173)"}} data-href="https://3000-jdigar-ruta3b-huwqp0ibu9g.ws-eu54.gitpod.io/ruta-comida" data-width="750" data-numposts="2"></div>
      </div>
    </>
  );
};
