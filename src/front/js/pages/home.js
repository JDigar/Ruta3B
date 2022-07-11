import React, { StrictMode, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardHome } from "./cardHome.jsx";
import { CardHome2 } from "./cardHome2.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  console.log(store.restaurantes);

  const id = store.restaurantes.map((item, index) => (
    
    <CardHome
      key={index}
      id={item.id}
      descripcion={item.descripcion}
      nombre={item.nombre}
    />
  ));
  const id2 = store.restaurantes.map((item, index) => (
    <CardHome2
      key={index+10}
      id={item.id}
      descripcion={item.descripcion}
      nombre={item.nombre}
    />
  ));

  let randm = id[Math.floor(Math.random() * id.length)];

  let randm2 = id2[Math.floor(Math.random() * id2.length)];

   return (
    <>
      <div className="text-center mt-0">
        <p>
          <img
            className="img-center auto img-fluid w-100"
            src="https://images5.alphacoders.com/815/815875.jpg"
          />
        </p>
        <div className="container">
          <h1>Descripción</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            earum consequuntur ex suscipit cum quos similique aliquid veritatis
            asperiores dignissimos, error fugit magnam labore esse.
          </p>
          </div>
      </div>
      {/* {store.restaurantes.length < 2} ? <p>hi</p> :  */}
      {randm}+{randm2}
      {console.log(randm)}
      {console.log(randm2)}
      {/* Primera carta */}
      {/* {store.restaurantes.map((item,index) => <CardHome key={index} id={item.id} descripcion={item.descripcion} nombre={item.nombre}/>)} */}
      {/* <div className="p-1 d-flex border border-danger mini-container">
        <img
          className="border border-dark w-25 "
          src="https://www.imor.es/wp-content/uploads/2017/09/imagen-de-prueba-320x240-300x225.jpg"
          alt=""
        />
        <div className="p-1 w-25 border border-dark">
          <h2 className="border border-dark">CASA PACO </h2>
          <span className="fs-6"> ❤❤❤❤❤</span>
          <p>
          {descrip}
          </p>
        </div>
      </div> */}
      {/* Segunda carta */}
      {/* <div className="mt-3 p-1 d-flex flex-row-reverse border border-danger mini-container">
        <img
          className="border border-dark w-25 "
          src="https://www.imor.es/wp-content/uploads/2017/09/imagen-de-prueba-320x240-300x225.jpg"
          alt=""
        />
        <div className=" p-1 w-25 border border-dark">
          <h2 className="border border-dark">CASA PEPE </h2>
          <span className="fs-6">❤❤❤❤❤</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
            delectus. Deleniti, expedita distinctio blanditiis quas voluptas
            laboriosam recusandae molestias nisi?
          </p>
        </div>
      </div> */}
    </>
  );
};
