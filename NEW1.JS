/*// Variable Declaration
var x= 4;
var y= 5;
var z= x + y;
document.write(z);*/

/*//function Declaration
function myFunction()
{
    document.write("function calling");

}
  myFunction();*/


/*//function invocation
function myFunction()
{
    document.write("function calling");

} 

<button onclick="myFunction()">click me</button>*/


//STRING AND FUNCTION

/*//string concate
var x = 'Snehal';
var y = 'shinde';
var z = 'Snehal' + ' ' + 'shinde'
document.write(z); */

/*//string.length
let text = "SnehalShinde";
document.write(text.length);*/

/*//String.slice
let text = "Snehal, Santosh, Shivanya";
let part = text.slice(7,16);
document.write(part);

//string.substring
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
document.write(part);

//String.substr
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
document.write(part);*/

/*//String.replace
let text = "My name is Shivanya!";
let newText = text.replace("Shivanya", "Vedika");
document.write(newText);

//String.toUpperCase()
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
document.write(text2);


//String.toLowerCase()

let text1 = "Hello World!";       
let text2 = text1.toLowerCase();

document.write(text2);


//String.concate
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat (text2);
document.write(text3);

//String trim
let text1 = "      Jay Shriram!      ";
let text2 = text1.trim();
document.write(text2);


//String trimStart
let text1 = "     Hello World         !    lala      ";
let text2 = text1.trimStart();

document.write(text2);


//String trimEnd
let text1 = "     Hello World         !    lala      ";
let text2 = text1.trimStart();

document.write(text2);

//charAt

let text = "HELLO WORLD";
let char = text.charAt(6);
document.write(char);*/


/*//JSON object
const company = {
    name: 'Patheya',
    address: 'Pune',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: 411041,
    active: true
 };
 document.write('Company: ', company);
 document.write('Company Name: ', company.name);*/

 //JSON nested
 
/*const company = {
   name: 'Patheya',
   address: {
      mail: 'S.n. 16/2 Pune',
      email: 'connect@patheya.tech'
   },
   city: 'Pune',
   state: 'Maharashtra',
   pincode: 411041,
   active: true
};
document.write('Company Nested: ', company);
document.write('Company email: ', company.address.email);*/




     //ARRAY 
     //Array declaration

     /*const company=["TCS","Patheya","WNS","Tech Mahindra"]
     document.write(company);

     //Accessing array element
     const company=["TCS","Patheya","WNS","Tech Mahindra"]
     document.write(company[3]);

     //Array Methods
     //1.toString   saperates string by comma
     const company=["TCS","Patheya","WNS","Tech Mahindra"]
     document.write(company.toString());

     //2.join  joins string by given mark
     const company=["TCS","Patheya","WNS","Tech Mahindra"]
     document.write(company.join("#"));

     //3. pop   removes last element from array
     const company=["TCS","Patheya","WNS","Tech Mahindra"];
    
     com=company.pop();
     document.write(company);

     //3.push add new element in array
     const company=["TCS","Patheya","WNS","Tech Mahindra"]

     company.push("infosys");
     document.write(company);

     //4. shift   removes 1st element
     const company=["TCS","Patheya","WNS","Tech Mahindra"]

     company.shift();
     document.write(company);


     //5. unshift   removes 1st element
     const company=["TCS","Patheya","WNS","Tech Mahindra"]

     company.unshift("saksoft");
     document.write(company);

     //6. delete   delete 1st element of array
     const company=["TCS","Patheya","WNS","Tech Mahindra"]

    delete company[2]
     document.write(company);

     //7.concatination of array merge

     const company=["TCS","Patheya","WNS","Tech Mahindra"];
     const company1=["saksoft","infosys","Mphasis"];
     company2=company.concat(company1);
     document.write(company2);

     //8.array sort
     
     const company=["TCS","Patheya","WNS","Tech Mahindra"];
     company.sort();
     document.write(company);*/

     //9.Array reverse

     const company=["TCS","Patheya","WNS","Tech Mahindra"];
     company.reverse();
     document.write(company);

     



