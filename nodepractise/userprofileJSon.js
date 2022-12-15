/*var _ = require('lodash');

var str = _.groupBy([6.1, 4.2, 6.3], Math.floor);
console.log(str);

var camalcase = _.camelCase('Foo Bar');
console.log(camalcase);*/



const userprofile =[
     userprofile1 = {
        "name":"John", 
        "age":25, 
        "address":"pune"
    },
     userprofile2 = {
        "name":"sham", 
        "age":30, 
        "address":"lonawala"
    },
     userprofile3 = {
        "name":"abhi", 
        "age":22, 
        "address":"kharadi"
    },
     userprofile4 = {
        "name":"Asha", 
        "age":35, 
        "address":"katraj"
    },
     userprofile5 = {
        "name":"Bhima", 
        "age":20, 
        "address":"hadapasar"
    },


]


console.log(JSON.stringify(userprofile));
//console.log('UserprofileAddress : ', userprofile3.address.mail);


//sort by Age

Sortedprofile = userprofile.sort((userprofile1, userprofile2) => {

    if (userprofile1.age< userprofile2.age) {
  
      return -1;
  
    }
  
    return 0;
  
  });

      console.log("Sorted by Age  ",Sortedprofile);

   /*Sortedprofile = userprofile.sort((userprofile1, userprofile2) => {

    if (userprofile1.name< userprofile2.name) {
  
      return -1;
  
    }
  
    return 0;
  
  });
  
  console.log("Sorted by Name  ",Sortedprofile);

  
 //Sorted by Address
  Sortedprofile = userprofile.sort((userprofile1, userprofile2) => {

    if (userprofile1.address< userprofile2.address) {
  
      return -1;
  
    }
  
    return 0;
  
  });
  
  console.log("Sorted by Address  ",Sortedprofile);*/

  //firstname:["ram","Sham","Abhi","Asha","Ajay"],
//lastname:["jadhav","kale","shinde","lahane","mhatre"],
//age:[20,30,25,35,40],
//Address:["pune","lonawala","kharadi","katraj","hadapasar"]

//const obj = JSON.parse(userprofile);
//console.log(userprofile);*/
