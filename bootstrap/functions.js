
function submit()
{

         var firstname = document.getElementById('inputtext').value;
         console.log("firstname");
         
          var lastname = document.getElementById('inputtext1').value;
        console.log("lastname");

         var emailaddress = document.getElementById('exampleFormControlInput1').value;
         console.log("emailaddress");

         var  address = document.getElementById('inputAddress').value;
         console.log("address");

         var education  = document.getElementById('inputeducation').value;
         console.log("education");

         var gender  = document.getElementById('inputgender').value;
         console.log("gender");
         var male  = document.getElementById('flexRadioDefault1').value;
         console.log("male");
         var female  = document.getElementById('flexRadioDefault2').value;
         console.log("female");
         var other  = document.getElementById('flexRadioDefault3').value;
         console.log("other");

         var city  = document.getElementById("inputCity").value;
         console.log("city");

         var state  = document.getElementById('inputState').value;
         console.log("state");

         const dynamicvalue={
                name:firstname,
                lname:lastname,
                emailaddress:emailaddress,
                address:address,
                education:education,
                gender:gender,
                male:male,
                female:female,
                other:other,
                city:city,
                state:state


         };
         console.log("dynamic value",dynamicvalue);
         alert(JSON.stringify(dynamicvalue));
        }
        
