//type convertion = changing the data type value to anthor
// string ,booleans,number
let age = window.prompt("enter your age");
console.log(typeof age);
age = Number(age);
age += 1;

console.log("happy birthday you r " +age+" old now");
document.getElementById("p1").innerHTML ="happy birthday you r " +age+" old now";


 
let x;
let y;
let z;
 x =Number("3.24");
 console.log(x,typeof x);
 y = String("3.24");
 console.log(y,typeof y);
 z = Boolean("");
 console.log(z,typeof z);