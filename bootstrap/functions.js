
function submit(){

         
         var firstname = document.getElementById('inputtext').value
         document.write("firstname");
         
          var lastname = document.getElementById('inputtext').value
         document.write("lastname");

         var emailaddress = document.getElementById('exampleFormControlInput1').value
         document.write("emailaddress");

         var  address = document.getElementById('inputAddress').value
         document.write("address");

         var education  = document.getElementById('inputeducation').value
         document.write("education");

         var gender  = document.getElementById('inputgender').value
         document.write("gender");
         var male  = document.getElementById('flexRadioDefault1').value
         document.write("male");
         var female  = document.getElementById('flexRadioDefault1').value
         document.write("female");
         var other  = document.getElementById('flexRadioDefault1').value
         document.write("other");

         var city  = document.getElementById("inputCity").value;
         document.write("city");

         var state  = document.getElementById('inputState').value
         document.write("state");

         const dynamicvalue={
                "name":"firstname",
                "lname":"lastname",
                "emailaddress":"emailaddress",
                "address":"address",
                "education":"education",
                "gender":"gender",
                "male":"male",
                "female":"female",
                "other":"other",
                "city":"city",
                "state":"state"

         }
         cosole.log("dynamic value",dynamicvalue);
         if(confirm(JSON.stringify(dynamicvalue)))
        }
        
