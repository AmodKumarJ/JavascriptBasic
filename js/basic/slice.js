//extract the section of string
//and return it as new string 
//without modifing the original string

let fullname
fullname = window.prompt("enter the your fullname");
let firstname;
let lastname;
firstname = fullname.slice(0 , fullname.indexOf(" "));
console.log(firstname);
lastname = fullname.slice(fullname.indexOf(" ")+1);
console.log(lastname);
/*lastname =fullname.slice(4);
console.log(lastname);
firstname = fullname.slice(0 ,3 );
console.log(firstname);*/