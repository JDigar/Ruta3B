import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/perfilRestaurante.css";
import { CargaDeFoto } from "../component/cargaDeFoto";

export const Restaurante = () => {
  const { store, actions } = useContext(Context);

  
  const [precio, setPrecio] = useState("");
  const [foto, setFoto] = useState("");

  const datos=store.restaurantes;
  
  // const nombre=datos.map(a=>a.nombre);
  // const descripcion=datos.map(a=>a.descripcion);
  
  // console.log(datos);

  const getPrecio=datos.map(a=>a.precio);
  console.log(getPrecio);


  console.log(store.profileRestaurante?.id);
  console.log(store.profileRestaurante?.precio);
  // const getFoto=datos.map(a=>a.foto);
  // console.log(getFoto)

  const handleSubmitPrice = (e) => {
    e.preventDefault();
    const id=store.profileRestaurante?.id;
    console.log(id);
    actions.añadirPrecio(id,precio);
    
  };
  
  // const actualizaFoto = (e) =>{
    
  //   const id=store.profileRestaurante?.id;
  //   actions.añadirFoto(id);
  //   window.location.reload()
  // }

  console.log(store.url);
  console.log(store.restaurantes);
  

  useEffect(() => {
    // actions.getFavorit();
    actions.getInformationCurrentRestaurant();
  }, []);


  return (
    <>
      {store.auth &&
      store.auth != "" &&
      store.auth != undefined &&
      localStorage.getItem("esLocal") ? (
        <div>
          
          <div
            className="card mb-3"
            style={{
              marginLeft: "20px",
              marginRight: "20px",
              marginTop: "100px",
            }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={store.profileRestaurante?.foto}
                  className="img-fluid rounded-start"
                  alt="..."
                />
                <div className="d-flex">
                <CargaDeFoto/>
                
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">
                    {store.profileRestaurante?.nombre}
                  </h2>
                  <p className="card-text">{store.profileRestaurante?.descripcion}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-auto w-50">
        <div  className="text-center  m-auto w-50">

        <form action="" onSubmit={handleSubmitPrice}>
        {store.profileRestaurante?.precio > 1 ? 
        <div>
          <p>Ya has introducido el precio del ticket medio: {store.profileRestaurante?.precio} €</p> 
          <p>Quieres restablecer el valor?</p>
          <input className="" type="number" id="precio" name="precio" onChange={(e) => setPrecio(e.target.value)}/> 
          <br />
          <button  onClick={() => window.location.reload()} type="submit" style={{
                  backgroundColor: "rgb(247, 230, 173)",
                  color: "black",
                
                  }} className=" mt-1 btn">Añadir Precio</button>
        </div>
        : 
        <div>
        <h5>Deberías introducir el precio medio del ticket para que los usuarios lo vean!</h5>
        
        <label className="" htmlFor="Name">Introduce el precio medio del ticket:</label>
        <div  className="m-auto ">
           <div className=" ">
           <input onChange={(e) => setPrecio(e.target.value)} className="" type="number" id="precio" name="precio" /><span className="border border-dark p-1 m-1">€</span> 
           </div>
           <button  onClick={() => window.location.reload()}   type="submit" style={{
                  backgroundColor: "rgb(247, 230, 173)",
                  color: "black",
                
                  }} className=" mt-1 btn">Añadir Precio</button>
        </div>
        </div>
        }
        </form>
        </div>
      </div>
          <div
            className="container"
            style={{
              marginTop: "4cm",
              marginRight: "100px",
              marginLeft: "50px",
              backgroundColor: "rgb(247, 230, 173)",
              padding: "2cm",
            }}
          >
            <p>
              Enhorabuena <strong>{store.profileRestaurante?.nombre} </strong>! <br></br>
              A
              partir de ahora, eres miembro de la gran comunidad que conforma la
              RUTA 3B, donde podrás exponer de forma simple y rapida tus
              servicios y promociones basadosa en nuestra politica 3B "Bueno,
              Bonito y Barato". No tengas miedo.! por muy pequeño que seas y
              aunque no te encuentres en el centro de la ciudad, nosotros te
              ayudamos a ofrecer tus servicios, porque a todos nos gusta ir de
              copas junto a un buen tapeo, comer bien a un precio justo y por
              supuesto, conocer locales nuevos que se esconden en los barrios y
              sus infinitas calles que conforman esta hermosa ciudad. No olvides
              subir fotos de tu local, mostrar la carta, promociones que tengas
              y decirnos que te distingue del resto en una breve descripción.
            </p>

            <a
              className="link"
              aria-current="page"
              href="#"
              style={{ marginTop: "4cm" }}
            >
              {" "}
              Nuestra politica{" "}
            </a>
          </div>
          <div className="card-group">
            <div className="card">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/1c/1b/7b/13/area-interna.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card">
              <img
                src="https://www.laguiago.com/wp-content/uploads/2020/12/RESTAURANTE-ALMA-MATER-7-scaled-1.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card">
              <img
                src="https://www.hoteles-silken.com/content/imgsxml/galerias/panel_sliderheaderhotel/1/t-restaurante-etxaniz-015971.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="div-err-login text-center">
          <h2>Primero debería registrarse!</h2>
          <button
            type="button"
            className="btn  btn-sm h-50 m-3"
            style={{
              backgroundColor: "rgb(247, 230, 173)",
              color: "black",
            }}
          >
            <Link className=" button-err" to="/">
              Volver al Inicio
            </Link>
          </button>
        </div>
      )}
    </>
  );
};
