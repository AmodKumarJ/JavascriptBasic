let a;
let b;
let c;
//a = window.prompt('enter the side a');
//a = Number(a);
//b = window.prompt('enter the side b');
//b = Number(b);
//c = Math.sqrt(Math.pow(a, 2) + Math.pow(a, 2));
//console.log(c);
document.getElementById("submit").onclick = function(){
    a = document.getElementById('sidea').value;
    a = Number(a);
    b = document.getElementById('sideb').value;
    b = Number(b);
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(a, 2));
    console.log(c);
    document.getElementById("sidec").innerHTML  = "side c :" +c;
}