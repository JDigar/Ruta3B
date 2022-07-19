import React, { useState, useContext,useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        auth: false,
        url: process.env.BACKEND_URL,
        message: null,
        demo: [
          {
            title: "FIRST",
            background: "white",
            initial: "white",
          },
          {
            title: "SECOND",
            background: "white",
            initial: "white",
          },
        ],
        restaurantes: [],
        profiles: [],
      },
      actions: {

        login: (email, password) => {
          fetch(process.env.BACKEND_URL +"/api/login", {
            method: "POST",
            body: JSON.stringify({
              "email": email,
              "password": password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              if (response.status === 200) {
                setStore({
                  auth: true,
                });
              }else{
                console.log("errorr");
              }
              return response.json();
            })
            .then((data) => localStorage.setItem("token", data.access_token));
        },
  
        getInformationCurrentMember: () => {
          fetch(process.env.BACKEND_URL +"/api/profile", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
            .then((response) => response.json())
            .then((data) => setStore({ profiles: data }));
        },
  
        getRestaurantes: async () => {
          const store = getStore();
  
          // fetching data from the backend
          const resp = await fetch(
            process.env.BACKEND_URL +"/api/restaurantes"
          )
            .then((resp) => resp.json())
            .then((data) =>
              setStore({
                restaurantes: data,
              })
            );
        },
        logout: () => {
          localStorage.removeItem("token")
          setStore({
              auth: false
          })
      },
        // Use getActions to call a function within a fuction
        // exampleFunction: () => {
        // 	getActions().changeColor(0, "green");
        // },
  
        // getMessage: async () => {
        // 	try{
        // 		// fetching data from the backend
        // 		const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
        // 		const data = await resp.json()
        // 		setStore({ message: data.message })
        // 		// don't forget to return something, that is how the async resolves
        // 		return data;
        // 	}catch(error){
        // 		console.log("Error loading message from backend", error)
        // 	}
        // },
        // changeColor: (index, color) => {
        // 	//get the store
        // 	const store = getStore();
  
        // 	//we have to loop the entire demo array to look for the respective index
        // 	//and change its color
        // 	const demo = store.demo.map((elm, i) => {
        // 		if (i === index) elm.background = color;
        // 		return elm;
        // 	});
  
        // 	//reset the global store
        // 	setStore({ demo: demo });
        // }
  
        //CODIGO DE CLOUDINARY SUBIDA DE FOTO
  
        uploadFile: async (uploadImages) => {
          const cloud_name = "carolinaqotf"; //"pluggedin";
          const preset = "s5oaavqo"; //"icnpftra";
          const url_claudinari = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;
  
          const formData = new FormData();
          formData.append("file", uploadImages);
          formData.append("upload_preset", `${preset}`);
          try {
            const response = await fetch(
              //process.env.BACKEND_URL + "/api/hello",
              url_claudinari,
              {
                method: "POST",
                body: formData,
              }
            );
            if (response.ok) {
              const data = await response.json();
              // actions.putImage(data.secure_url);
              console.log(data);
            }
          } catch (error) {
            console.log("message", error);
          }
        },

        // checkIfAuthIsTrue: () =>{
        //   const store = getStore();
        //   fetch(process.env.BACKEND_URL +"/api/gettingSubscribe", {
        //     method: "GET",
        //     headers: {
        //       "Content-Type": "application/json",
        //       Authorization: `Bearer ${localStorage.getItem("token")}`,
        //     },
        //   })
        //     .then((resp) => 
        //     { setStore({  redirect: true
        //      });
        //      if (store.redirect === true) {
        //       return <Navigate to="/usuario" />;
        //     }
        //     return resp.json();
        //         })
        //         .then(data => {
        //             console.log(data);
        //         });
        // },
  
        // REGISTRO DE USUARIO
        registroUsuario: (nombre, apellido, email, password) => {
          fetch(process.env.BACKEND_URL + "/api/user", {
            method: "POST",
            body: JSON.stringify({
              nombre: nombre,
              apellido: apellido,
              email: email,
              password: password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data);
            });
        },
  
        RegistroLocales : (nombre, apellido, email, password,tipo_local,descripcion) => {
            fetch(process.env.BACKEND_URL + '/api/locales', {
                    method: "POST",
                    body: JSON.stringify({
                        "nombre": nombre,
                        "apellido": apellido,
                        "email": email,
                        "password": password,
                        "descripcion":descripcion,
                        "tipo_local":tipo_local
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then((response) => {
                    return response.json()
  
                })
                .then((data) => {
                    console.log(data)
  
                })
              }
      },
    };
  };
  
  export default getState;