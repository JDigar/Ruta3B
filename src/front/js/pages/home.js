import React, { StrictMode, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";
import { CardHome } from "./cardHome.jsx";
import { CardHome2 } from "./cardHome2.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);
  // console.log(actions.getFavorit());

  // store.restaurantes.map((item, index) => (
  //   console.log(item.nombre)
  // ));

  const id = store.restaurantes.map((item, index) => (
    <CardHome
      key={index}
      id={index}
      tipo_local={item.tipo_local}
      descripcion={item.descripcion}
      nombre={item.nombre}
      foto={item.foto}
    />
  ));
  const id2 = store.restaurantes.map((item, index) => (
    <CardHome2
      key={index + 10}
      id={item.id}
      tipo_local={item.tipo_local}
      descripcion={item.descripcion}
      nombre={item.nombre}
      foto={item.foto}
    />
  ));

  let randm = id[Math.floor(Math.random() * id.length)];

  let randm2 = id2[Math.floor(Math.random() * id2.length)];

  // let idcheck = store.restaurantes.map((item) => item.id);
  // let idcheck2 = store.restaurantes.map((item) => item.id);
  // console.log(idcheck);
  // console.log(idcheck2);

  // for (let i = 0; i < idcheck.length; i++) {
  //   const element = idcheck[i];
  //   console.log(element);
  // }
  // for (let i = 0; i < idcheck2.length; i++) {
  //   const element2 = idcheck2[i];
  //   console.log(element2);
  // }
  // let randomNumber = id[Math.floor(Math.random() * idcheck.length + 1)];
  // console.log(randomNumber);
  // console.log("---------" + randomNumber);
  // let randomNumber2 = id2[ Math.floor(Math.random() * idcheck2.length + 1)];
  // console.log("---------" + randomNumber2);

  // if (randomNumber === randomNumber2) {
  //   randomNumber = 1;
  //   randomNumber2 = 2;
  //   console.log("+++++++++-------" + randomNumber);
  //   console.log("+++++++++" + randomNumber2);

  // }
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
          <h1>BIENVENIDO A RUTA 3B</h1>
          <p className="text-justify">
            Si estás aquí es porque quieres descubrir los lugares mas
            sorprendentes de tu ciudad y que mejor forma que de la mano de{" "}
            <strong>RUTA 3B</strong>. A todos nos gusta ir de copas junto a un
            buen tapeo, comer bien a un precio justo y por supuesto, conocer
            locales nuevos que se esconden en los barrios y sus infinitas calles
            que conforman esta hermosa ciudad. <br />
            Regístrate y descubre los lugares más fabulosos de la ciudad!
          </p>
        </div>
      </div>
      <hr />
      <div className="container-fluid w-75 p-2">
        <div className="p-3">{randm}</div>
        <div className="p-3">{randm2}</div>
      </div>

      {/* {console.log(randm())}
      {console.log(randm2)} */}
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
