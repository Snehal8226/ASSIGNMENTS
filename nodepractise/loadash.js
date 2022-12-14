

const axios = require("axios");


const getTodos =() => {
        //implement
        //GET
         //const url = "https://jsonplaceholder.typicode.com/todos/4";
         const url = "https://jsonplaceholder.typicode.com/user";
         console.log("Making api");
             return axios
             .get(url)
             .then((response) => {
                console.log(response.data);
             })

            .catch((error) => {
               console.log("reciving api");
             console.error(error);
      });

   }; 
      console.log("Before Making API call");
      getTodos();
      console.log("After Making API call");


    
      

