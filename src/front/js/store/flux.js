import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
const getState = ({ getStore, getActions, setStore }) => {
  const [type, setType] = useState(false);
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
      likes: [],
      restaurante: [],
      went: [],
    },
    actions: {
      // addFavorit: (nombre) => {
      //   //Creamos la funcion para obtener el nombre con el Onclick
      //   const store = getStore(); //Obtenemos Store con "getStore"
      //   setStore({
      //     likes: store.likes.concat(nombre),
      //   }); //Actualizamos la informacion que está en like concatenando el valor de name.
      // },
      getFavorit: (id_user, id_local) => {
        fetch(process.env.BACKEND_URL + "/api/favoritos", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => setStore({ likes: data }));
      },
      addWent: (nombre) => {
        //Creamos la funcion para obtener el nombre con el Onclick
        const store = getStore(); //Obtenemos Store con "getStore"
        setStore({
          went: store.went.concat(nombre),
        }); //Actualizamos la informacion que está en like concatenando el valor de name.
      },
      // login: (email, password) => {
      //   fetch(process.env.BACKEND_URL + "/api/login", {
      //     method: "POST",
      //     body: JSON.stringify({
      //       email: email,
      //       password: password,
      //     }),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   })
      //     .then((response) => {
      //       if (response.status === 200) {
      //         setStore({
      //           auth: true,
      //         });
      //       } else {
      //         console.log("errorr");
      //       }
      //       return response.json();
      //     })
      //     .then((data) => localStorage.setItem("token", data.access_token));
      // },
      // getInformationCurrentMember: () => {
      //   fetch(process.env.BACKEND_URL + "/api/profile", {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${localStorage.getItem("token")}`,
      //     },
      //   })
      //     .then((response) => response.json())
      //     .then((data) =>
      //       setStore({
      //         profiles: data,
      //       })
      //     );
      // },
      login: async (email, password, type) => {
        fetch(process.env.BACKEND_URL + "/api/login", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            type: type,
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
            } else {
              console.log("errorr");
            }
            return response.json();
          })
          .then((data) => localStorage.setItem("token", data.access_token));
        return true;
      },
      syncTokenFromLocalStorage: () => {
        const auth = localStorage.getItem("token");
        console.log("app loaded, synching the localstorage token");
        if (auth && auth != "" && auth != undefined) setStore({ auth: auth });
      },
      getInformationCurrentMember: () => {
        const store = getStore();
        fetch(process.env.BACKEND_URL + "/api/profile", {
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
        const resp = await fetch(process.env.BACKEND_URL + "/api/restaurantes")
          .then((resp) => resp.json())
          .then((data) =>
            setStore({
              restaurantes: data,
            })
          );
      },
      logout: () => {
        localStorage.removeItem("token");
        setStore({
          auth: false,
        });
      },
      // Use getActions to call a function within a fuction
      // exampleFunction: () => {
      //    getActions().changeColor(0, "green");
      // },
      // getMessage: async () => {
      //    try{
      //        // fetching data from the backend
      //        const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
      //        const data = await resp.json()
      //        setStore({ message: data.message })
      //        // don't forget to return something, that is how the async resolves
      //        return data;
      //    }catch(error){
      //        console.log("Error loading message from backend", error)
      //    }
      // },
      // changeColor: (index, color) => {
      //    //get the store
      //    const store = getStore();
      //    //we have to loop the entire demo array to look for the respective index
      //    //and change its color
      //    const demo = store.demo.map((elm, i) => {
      //        if (i === index) elm.background = color;
      //        return elm;
      //    });
      //    //reset the global store
      //    setStore({ demo: demo });
      // }
      //CODIGO DE CLOUDINARY SUBIDA DE FOTO
      // uploadFile: async (uploadImages) => {
      //   const cloud_name = "carolinaqotf"; //"pluggedin";
      //   const preset = "s5oaavqo"; //"icnpftra";
      //   const url_claudinari = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;
      //   const formData = new FormData();
      //   formData.append("file", uploadImages);
      //   formData.append("upload_preset", `${preset}`);
      //   try {
      //     const response = await fetch(
      //       //process.env.BACKEND_URL + "/api/hello",
      //       url_claudinari,
      //       {
      //         method: "POST",
      //         body: formData,
      //       }
      //     );
      //     if (response.ok) {
      //       const data = await response.json();
      //       // actions.putImage(data.secure_url);
      //       console.log(data);
      getInformationCurrentRestaurant: () => {
        fetch(process.env.BACKEND_URL + "api/restaurante", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((response) => response.json())
          .then((data) => setStore({ restaurante: data }));
      },
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
      //   fetching data from the backend
      //   const resp = await fetch(process.env.BACKEND_URL + "/api/restaurantes")
      //     .then((resp) => resp.json())
      //     .then((data) =>
      //       setStore({
      //         restaurantes: data,
      //       })
      //     );
      // Use getActions to call a function within a fuction
      // exampleFunction: () => {
      //    getActions().changeColor(0, "green");
      // },
      // getMessage: async () => {
      //    try{
      //        // fetching data from the backend
      //        const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
      //        const data = await resp.json()
      //        setStore({ message: data.message })
      //        // don't forget to return something, that is how the async resolves
      //        return data;
      //    }catch(error){
      //        console.log("Error loading message from backend", error)
      //    }
      // },
      // changeColor: (index, color) => {
      //    //get the store
      //    const store = getStore();
      //    //we have to loop the entire demo array to look for the respective index
      //    //and change its color
      //    const demo = store.demo.map((elm, i) => {
      //        if (i === index) elm.background = color;
      //        return elm;
      //    });
      //    //reset the global store
      //    setStore({ demo: demo });
      // }
      // CODIGO DE CLOUDINARY SUBIDA DE FOTO
      //     if (response.ok) {
      //       const data = await response.json();
      //       // actions.putImage(data.secure_url);
      //       console.log(data);
      //     }
      //   } catch (error) {
      //     console.log("message", error);
      //   }
      // },
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
      RegistroLocales: (
        nombre,
        apellido,
        email,
        password,
        tipo_local,
        descripcion
      ) => {
        fetch(
          "https://3001-jdigar-ruta3b-nxhby5urwj0.ws-eu54.gitpod.io/api/locales",
          {
            method: "POST",
            body: JSON.stringify({
              nombre: nombre,
              apellido: apellido,
              email: email,
              tipo_local: tipo_local,
              password: password,
              descripcion: descripcion,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        fetch(process.env.BACKEND_URL + "/api/locales", {
          method: "POST",
          body: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: password,
            descripcion: descripcion,
            tipo_local: tipo_local,
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
      //   RegistroLocales : (nombre, apellido, email, password) => {
      //       fetch(process.env.BACKEND_URL + '/api/user', {
      //               method: "POST",
      //               body: JSON.stringify({
      //                   "nombre": nombre,
      //                   "apellido": apellido,
      //                   "email": email,
      //                   "password": password
      //               }),
      //               headers: {
      //                   "Content-Type": "application/json"
      //               }
      //           })
      //           .then((response) => {
      //               return response.json()
      //           })
      //           .then((data) => {
      //               console.log(data)
      //           })
      // };
    },
  };
};
export default getState;
