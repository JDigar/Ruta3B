// import React, { useContext, useEffect } from "react";
// import { Context } from "../store/appContext";
// import { Link,useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import "../../styles/user.css";

// export const Usuario = () => {
  
//   const { store, actions } = useContext(Context);
//   console.log(store.profiles.nombre);

//   // store.profiles.map((item, index) => console.log(item.nombre));

//   return (
//     <>
//     {store.auth === true ?
//     <div className="container-fluid">
//       <div className="user">
//         <div className="row mx-4">
//           <div className="col-2 p-3">
//             <div className="foto-user col-3"></div>
//           </div>
//           <div className="col-6 p-3 user-description">
//             <p>Esta es la descripcion del usuario</p>
//           </div>
//           <div className="">
//             <h1>Hello, {store.profiles.nombre}</h1>
//           </div>
//           <div className="col-10 congrats">
//             <p>
//               Enhorabuena, {store.profiles.nombre}! <br></br>
//               <br></br>A partir de ahora, eres miembro de la gran comunidad RUTA
//               3B, donde podrás encontrar esos sitios que cumplen con nuestra
//               condición 3B, que sean buenos, bonitos y baratos en esta gran
//               ciudad. <br></br>
//               <br></br> No olvides dejar un comentario con tu experiencia y una
//               valoración, tu opinión es importante para nosotros y el resto de
//               la comunidad, además de participar en nuestro sorteo sorpresa
//               mensual.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="favs text-center row">
//         <div className="col-6 d-flex flex-column align-items-center">
//           <h2>Tus sitios favoritos</h2>
//           <div className="card" style={{ width: 18 + "em" }}>
//             <img
//               src="https://media-cdn.tripadvisor.com/media/photo-s/01/eb/01/91/casa-paco-madrid.jpg"
//               className="card-img-top"
//               alt="casa-paco-image"
//             />
//             <div className="card-body">
//               <h5 className="card-title">CASA PACO</h5>
//               <p className="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-6 d-flex flex-column align-items-center">
//           <h2>Tus sitios visitados</h2>
//           <div className="card" style={{ width: 18 + "em" }}>
//             <img
//               src="https://media-cdn.tripadvisor.com/media/photo-s/01/eb/01/91/casa-paco-madrid.jpg"
//               className="card-img-top"
//               alt="casa-paco-image"
//             />
//             <div className="card-body">
//               <h5 className="card-title">CASA PACO</h5>
//               <p className="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     :(<h1 className="text-center">ERROR 404</h1>)}
//     </>
//   );
// };


