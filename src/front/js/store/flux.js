const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      auth: false,
      url: "https://3001-jdigar-ruta3b-jf20uvqs7av.ws-eu54.gitpod.io/",
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
        }
      ],
      restaurantes: [],
      profiles: [],
      restaurante:[],
    },
    actions: {
      login: (email, password) => {
        fetch(process.env.BACKEND_URL + "api/login", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
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
            }
            return response.json();
          })
          .then((data) => localStorage.setItem("token", data.access_token));
      },

      getInformationCurrentMember: () => {
        fetch(process.env.BACKEND_URL + "api/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((response) => response.json())
          .then((data) => setStore({ profiles: data }));
      },

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

     



      getRestaurantes: async () => {
        const store = getStore();

        // fetching data from the backend
        const resp = await fetch(
          "https://3001-jdigar-ruta3b-8fi5aszhadf.ws-eu54.gitpod.io/api/restaurantes"
        )
          .then((resp) => resp.json())
          .then((data) =>
            setStore({
              restaurantes: data,
            })
          );
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


            // REGISTRO DE USUARIO
            registroUsuario: (nombre, apellido, email, password) => {
                fetch(process.env.BACKEND_URL + "/api/user", {
                        method: "POST",
                        body: JSON.stringify({
                            "nombre": nombre,
                            "apellido": apellido,
                            "email": email,
                            "password": password,
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
                fetch('https://3001-jdigar-ruta3b-nxhby5urwj0.ws-eu54.gitpod.io/api/locales', {
                        method: "POST",
                        body: JSON.stringify({
                            "nombre": nombre,
                            "apellido": apellido,
                            "email": email,
                            "tipo_local":tipo_local,
                            "password": password,
                            "descripcion":descripcion
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

                    })}
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

      
     

      // RegistroLocales : (nombre, apellido, email, password) => {
      //     fetch(process.env.BACKEND_URL + '/api/user', {
      //             method: "POST",
      //             body: JSON.stringify({
      //                 "nombre": nombre,
      //                 "apellido": apellido,
      //                 "email": email,
      //                 "password": password
      //             }),
      //             headers: {
      //                 "Content-Type": "application/json"
      //             }
      //         })
      //         .then((response) => {
      //             return response.json()

      //         })
      //         .then((data) => {
      //             console.log(data)

      //         })
  
  };

};

export default getState;
