import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Swal from 'sweetalert2'
export const Home = () => {
  const { store, actions } = useContext(Context);

  
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ipsam
            praesentium tenetur? Reprehenderit veritatis, dignissimos corporis
            debitis asperiores sit aspernatur. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Consectetur recusandae optio molestiae
            nemo cum tempore esse. Dolorum ab veritatis nobis voluptatum fuga,
            provident labore magnam?
          </p>
        </div>
      </div>
      <div className="p-1 d-flex border border-danger mini-container">
        <img
          className="border border-dark w-25 "
          src="https://www.imor.es/wp-content/uploads/2017/09/imagen-de-prueba-320x240-300x225.jpg"
          alt=""
        />
        <div className="p-1 w-25 border border-dark">
          <h2 className="border border-dark">CASA PACO </h2>
          <span className="fs-6"> ❤❤❤❤❤</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
            delectus. Deleniti, expedita distinctio blanditiis quas voluptas
            laboriosam recusandae molestias nisi?
          </p>
        </div>
      </div>
      <div className="p-1 d-flex flex-row-reverse border border-danger mini-container">
        <img
          className="border border-dark w-25 "
          src="https://www.imor.es/wp-content/uploads/2017/09/imagen-de-prueba-320x240-300x225.jpg"
          alt=""
        />
        <div className="p-1 w-25 border border-dark">
          <h2 className="border border-dark">CASA PEPE </h2>
          <span className="fs-6">❤❤❤❤❤</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
            delectus. Deleniti, expedita distinctio blanditiis quas voluptas
            laboriosam recusandae molestias nisi?
          </p>
        </div>
      </div>
    </>
  );
};
