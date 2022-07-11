import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	
	
	return (
		<>
		<div  style={{width:"33%"}} className=" p-1  m-auto text-center items-navbar">
					{/* <img style={{width:"33%"}} className="text-center image-navbar" src={logo} alt="" /> */}
					<h1 id="title">Ruta Triple B</h1>
		</div>
		<nav className="container">
			<div className=" d-flex w-100 m-0 p-0">
				<div style={{width:"33%"}} className="">
					<ol className="mt-4 d-flex justify-content-around">
						<li className="link"><Link to="#"  className="mt-2 nav-item">Inicio</Link></li>
						<li className="link"><Link to="#"  className="mt-2 nav-item" >Imagenes</Link></li>
						<li className="link"><Link to="#"  className="mt-2 nav-item">Recomendaciones</Link></li>
					</ol>
				</div>
				<div style={{width:"33%"}} className=" p-1  m-auto text-center items-navbar">
					{/* <img style={{width:"33%"}} className="text-center image-navbar" src={logo} alt="" /> */}
					{/* <h1>Ruta Triple B</h1> */}
				</div >
					
				<div style={{width:"33%"}} className="d-flex justify-content-end items-navbar">
					<button type="button" className="btn btn-success btn-sm h-50 m-3" >Iniciar sesión
					
					
					</button>
					<button type="button" className="btn btn-success btn-sm h-50 m-3" >Registrarse</button>
				</div >
			</div>
		</nav>
		
		</>
	);
};
