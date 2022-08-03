import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const RutaComida = ({ nombre, descripcion, id, tipo_local }) => {
  const { store, actions } = useContext(Context);


  console.log(useParams());
	const {theid} = useParams();
    
  return (
    <>
     
      <div
        className="mt-2 central d-flex"
      >
        <div
          className="d-flex border border-dark m-auto"
          style={{
          
            height: "300px",
            width: "500px",
            
          }}
        >
          {" "}
          <img className="w-100" src={store.restaurantes[theid]?.foto} alt="" />
        </div>
        <div
          className=" m-auto"
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
            
            <p className="fs-4 text">{store.restaurantes[theid]?.descripcion}</p>

            
                        
          </div>
        </div>
      </div>
      <div style={{position:"relative",bottom:"250px",}} className=" m-auto mt-2 w-25 ">
        <div  style={{backgroundColor:"rgb(247, 230, 173)"}} className="text-center border border-dark w-25 m-auto">
          <h5>Precio medio del ticket: </h5>
          <strong className="fs-4">{store.restaurantes[theid]?.precio} €</strong>
        </div>
      </div>
      <div
        className="inferior"

      >
        
        
        <div className="fb-comments" style={{backgroundColor:"rgb(247, 230, 173)"}} data-href="https://3000-jdigar-ruta3b-huwqp0ibu9g.ws-eu54.gitpod.io/ruta-comida" data-width="750" data-numposts="2"></div>
      </div>
      <div className="w-25 m-auto text-center">
        <Link className="" to="/restaurantes">
				<span className="mt-2 text-center btn " href="#" role="button" style={{backgroundColor:"rgb(247, 230, 173)", color: "black",}}>
					Volver atrás
				</span>
			</Link>
        </div>
        
        
    </>
  );
};
