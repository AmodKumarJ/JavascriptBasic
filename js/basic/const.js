//constant =  the variable that cant be changed
const PI = 3.14159;
let radius;
let circumference;
let r;
//radius = window.prompt('enter the radius of circle');
//radius = Number(radius);
//console.log(radius);


document.getElementById("myButton").onclick = function()
{
    radius = document.getElementById("myNum").Value;
    r = Number(radius);
    console.log(r);
    circumference = 2 * PI * r;
    console.log(" the circumference " +circumference);
    document.getElementById("p1").innerHTML = "cicumference is" +circumference ;
    document.getElementById("p2").innerHTML = "radius u entered is is" +r ;
}
 

