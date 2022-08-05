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
      key={item.id}
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
          <h1>BIENVENIDO A RUTA-3Bs</h1>
          <p className="text-justify">
            Si estás aquí es porque quieres descubrir los lugares mas
            sorprendentes de tu ciudad y que mejor forma que de la mano de{" "}
            <strong>RUTA-3Bs</strong>. A todos nos gusta ir de copas junto a un
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

      <div className="d-flex justify-content-center p-5">
        <div
          id="carouselExampleIndicators"
          className="carousel slide w-50"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/1c/1b/7b/13/area-interna.jpg"
                className="d-block w-100 rounded"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
              <div className="bg-dark p-2 bg-opacity-50 rounded">
                  <h5>Restaurante La Marina Alta</h5>
                  <p>
                    Lugar donde comer mariscos y reunirte con tus amigos y
                    amigas.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.laguiago.com/wp-content/uploads/2020/12/RESTAURANTE-ALMA-MATER-7-scaled-1.jpg"
                className="d-block w-100 rounded"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <div className="bg-dark p-2 bg-opacity-50 rounded">
                  <h5>Restaurante La Marina Alta</h5>
                  <p>
                    Lugar donde comer mariscos y reunirte con tus amigos y
                    amigas.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.hoteles-silken.com/content/imgsxml/galerias/panel_sliderheaderhotel/1/t-restaurante-etxaniz-015971.jpg"
                className="d-block w-100 rounded"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <div className="bg-dark p-2 bg-opacity-50 rounded">
                  <h5>Restaurante La Marina Alta</h5>
                  <p>
                    Lugar donde comer mariscos y reunirte con tus amigos y
                    amigas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
