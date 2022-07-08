import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpeg";
export const Navbar = () => {
	
	function handleClickFire(){
	Swal.fire({
		title: 'Inicia sesión con tu usuario:',
		input: 'text',
		title2: 'Inicia sesión con tu contraseña:',
		input: 'text',
		inputAttributes: {
		  autocapitalize: 'off'
		},
		showCancelButton: true,
		confirmButtonText: 'Look up',
		showLoaderOnConfirm: true,
		preConfirm: (login) => {
		  return fetch(`//api.github.com/users/${login}`)
			.then(response => {
			  if (!response.ok) {
				throw new Error(response.statusText)
			  }
			  return response.json()
			})
			.catch(error => {
			  Swal.showValidationMessage(
				`Request failed: ${error}`
			  )
			})
		},
		allowOutsideClick: () => !Swal.isLoading()
	  }).then((result) => {
		if (result.isConfirmed) {
		  Swal.fire({
			title: `${result.value.login}'s avatar`,
			title2: `${result.value.login}'s avatar`,
			imageUrl: result.value.avatar_url
		  })
		}
	  })
	}
	
	return (
		<>
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
					<button type="button" className="btn btn-success btn-sm h-50 m-3" onClick={handleClickFire}>Iniciar sesión
					
					
					</button>
					<button type="button" className="btn btn-success btn-sm h-50 m-3" >Registrarse</button>
				</div >
			</div>
		</nav>
		<div  style={{width:"33%"}} className=" p-1  m-auto text-center items-navbar">
					{/* <img style={{width:"33%"}} className="text-center image-navbar" src={logo} alt="" /> */}
					<h1 id="title">Ruta Triple B</h1>
		</div>
		</>
	);
};
