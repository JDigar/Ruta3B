import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/perfilRestaurante.css";
import { Link, useParams } from "react-router-dom";
import { CardHome } from "./cardHome.jsx";

export const Restaurantes = () => {
  const { store, actions } = useContext(Context);
  const [select, setSelect] = useState("todos");
  const values = ["TODOS", "COMIDAS", "BEBIDAS"];

  const rest = store.restaurantes.map((item, index) => (
    <div className="col-lg-12 mx-auto" key={item.id}>
      <CardHome
        key={index}
        id={index}
        descripcion={item.descripcion}
        tipo_local={item.tipo_local}
        nombre={item.nombre}
        foto={item.foto}
      />{" "}
    </div>
  ));


   // const id=store.restaurantes.map(a=>a.id)
  


  const filterRestaurante = store.restaurantes.filter((item) => {
    return item.tipo_local === select;
  });

  useEffect(() => {
    actions.getRestaurantes();
  }, []);

  return (
    <>

  <div  className="text-center w-50 m-auto">
  <select style={{borderRadius:"10px", border: "1px solid black", backgroundColor:"rgb(247, 230, 173)", color: "black",}} className="w-25 m-auto  select-rest" onChange={(e)=>setSelect(e.target.value)}>
     
     
     {
       values.map((optionValue,i)=>{
       return (
         <option key={i}>{optionValue}</option>
         );
       })
     }
   </select>
  </div>
    
      
      <div className="row w-50 mx-auto">
      
          

              {select !=="todos"?filterRestaurante.map((item, index) => (
           <div className="col-lg-12 mx-auto" key={item.id}>

          <CardHome
            key={item.id}
            id={item.id}
            tipo_local={item.tipo_local}
            descripcion={item.descripcion}
            nombre={item.nombre}
            foto={item.foto}
          />   </div>)):rest}
          

      </div>
      <div className="row w-50 mx-auto">
        {select !== "todos"
          ? filterRestaurante.map((item, index) => (
              <div className="col-lg-12 mx-auto" key={item.id}>
                <CardHome
                  key={item.id}
                  id={item.id}
                  tipo_local={item.tipo_local}
                  nombre={item.nombre}
                />{" "}
              </div>
            ))
          : rest}
      </div>{" "}
    </>
  );
};
