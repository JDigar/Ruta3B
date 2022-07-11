const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
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
    },
    actions: {
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
    },
  };
};

export default getState;
