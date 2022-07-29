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
      profileRestaurante:[]
    },
    actions: {
      // addFavorit: (nombre) => {
      //   //Creamos la funcion para obtener el nombre con el Onclick
      //   const store = getStore(); //Obtenemos Store con "getStore"
      //   setStore({
      //     likes: store.likes.concat(nombre),
      //   }); //Actualizamos la informacion que está en like concatenando el valor de name.
      // },
      addFavorite: async (id) => {
        fetch(process.env.BACKEND_URL + "/api/favlocales/" + id, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((response) => {
            // if (response.status === 200) {
            //   setStore({
            //     auth: true,
            //   });
            // } else {
            //   console.log("errorr");
            // }
            return response.json();
          })
          .then((data) =>
            // setStore({
            //   like: data,
            // })
            console.log(data)
          );
        return true;
      },

      removeFavorite: async (id) => {
        fetch(process.env.BACKEND_URL + "/api/favlocales/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) =>
            setStore({
              likes: data,
            })
          );
        return true;
      },
      getFavorit: (id_user, id_local) => {
        fetch(process.env.BACKEND_URL + "/api/user/favoritos", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) =>
            setStore({
              likes: data,
            })
          );
      },
      addWent: (nombre) => {
        //Creamos la funcion para obtener el nombre con el Onclick
        const store = getStore(); //Obtenemos Store con "getStore"
        setStore({
          went: store.went.concat(nombre),
        }); //Actualizamos la informacion que está en like concatenando el valor de name.
      },

      login: async (email, password, type) => {
        try {
          const response = await fetch(process.env.BACKEND_URL + "/api/login", {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
              type: type,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log(response.status);
          if (response.status === 200) {
            setStore({
              auth: true,
            });
            const data = await response.json();
            localStorage.setItem("token", data.access_token);
            console.log(data.type);
            if (data.type) {
              localStorage.setItem("esLocal", data.type);
              return true;
            } else {
              localStorage.setItem("esUsuario", false);
              return false;
            }
          }
        } catch (err) {
          console.log(err);
        }
      },
      syncTokenFromLocalStorage: () => {
        const auth = localStorage.getItem("token");
        console.log("app loaded, synching the localstorage token");
        if (auth && auth != "" && auth != undefined)
          setStore({
            auth: auth,
          });
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
          .then((data) =>
            setStore({
              profiles: data,
            })
          );
      },
      //  getInformationCurrentRestaurant: () => {
      //   fetch(process.env.BACKEND_URL + "/api/profile-restaurante", {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${localStorage.getItem("token")}`,
      //     },
      //   })
      //     .then((response) => response.json())

      //     .then((data) =>
          
      //      setStore({
      //        profileRestaurante: data,
      //      })
      //    );
      // },
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

      syncTokenFromLocalStorage: () => {
        const auth = localStorage.getItem("token");
        console.log("app loaded, synching the localstorage token");
        if (auth && auth != "" && auth != undefined)
          setStore({
            auth: auth,
          });
      },

      // getInformationCurrentMember: () => {
      //   const store = getStore();
      //   fetch(process.env.BACKEND_URL + "/api/profile", {

      logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("esLocal");
        localStorage.removeItem("esUsuario");
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
      // getInformationCurrentRestaurant: () => {
      //   fetch(process.env.BACKEND_URL + "/api/restaurante", {
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

      //getRestaurantes: async () => {
      //  const store = getStore();

      //  // fetching data from the backend
      //  const resp = await fetch(process.env.BACKEND_URL + "/api/restaurantes")
      //    .then((resp) => resp.json())
      //    .then((data) =>
      //      setStore({
      //        restaurantes: data,
      //      })
      //    );
      //},
       // logout: () => {
      //   localStorage.removeItem("token");
      //   setStore({
      //     auth: false,
      //   });
      // },

      registroUsuario: async (nombre, apellido, email, password) => {
        const response = await fetch(process.env.BACKEND_URL + "/api/user", {
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
        });
        console.log(response.status);
        if (response.status == 201) {
          const data = await response.json();
          //setStore({
          //    currentMember: [data.user],
          //});
          // localStorage.setItem("token", data.access_token);
          // localStorage.setItem("esLocal", false);

          // localStorage.setItem("esUsuario", true);

          //  setStore({
          //      isloged: true
          //  });
          return true;
        } else {
          alert("Ya hay un usuario registrado con ese email");
          return false;
        }
        //.then((response) => {
        //  return response.json();
        //})
        //.then((data) => {
        //  console.log(data);
        //});
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
      //     }}},

     
      // fetching data from the backend

      // const resp = await fetch(process.env.BACKEND_URL + "/api/restaurantes")
      //   .then((resp) => resp.json())
      //   .then((data) =>
      //     setStore({
      //       restaurantes: data,
      //     })
      //   ),

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

      //     if (response.ok) {
      //       const data = await response.json();
      //       // actions.putImage(data.secure_url);
      //       console.log(data);
      //     }
      //   } catch (error) {
      //     console.log("message", error);
      //   }
      // },

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
      RegistroLocales: (nombre, email, password, tipo_local, descripcion) => {
        fetch(process.env.BACKEND_URL + "/api/locales", {
          method: "POST",
          body: JSON.stringify({
            nombre: nombre,
            email: email,
            password: password,
            tipo_local: tipo_local,
            descripcion: descripcion,
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

      //     }
      //   } catch (error) {
      //     console.log("message", error);
      //   };
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
      //
    },
  };
};

export default getState;
