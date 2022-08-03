import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/perfilRestaurante.css";
import { Link, useParams } from "react-router-dom";
import { CardHome } from "./cardHome.jsx";

export const Restaurantes = () => {
  const { store, actions } = useContext(Context);
  const[select,setSelect]= useState("");
  const values=["todos","comida","bebida"];

  const rest = store.restaurantes.map((item, index) => (
    <div className="col-lg-12 mx-auto" key={item.id}>
    <CardHome
      key={index}
      id={index}
      descripcion={item.descripcion}
      tipo_local={item.tipo_local}
      nombre={item.nombre}
      foto={item.foto}
    />
    </div>
  ));

  
    const filterRestaurante=store.restaurantes.filter((item) =>{
     return item.tipo_local===select
    });
    
    
  useEffect(() => {
    actions.getRestaurantes();
  }, []);


  return (
    <>
    <select onChange={(e)=>setSelect(e.target.value)} style={{marginLeft:"113px"}}>
     
      <option>select a restaurant</option>
      {
        values.map((optionValue,i)=>{
        return (
          <option key={i}>{optionValue}</option>
          );
        })
      }
    </select>
      {/* <div className="text-center d-flex container-fluid w-75"> */}
      <div className="row mx-auto">
        
          

              {select !=="todos"?filterRestaurante.map((item, index) => (
           <div className="col-lg-12 mx-auto" key={item.id}>
          <CardHome
            
            id={item.id}
            tipo_local={item.tipo_local}
            nombre={item.nombre}
          />   </div>)):rest}
          
       
      </div>
    </>
  );
};
