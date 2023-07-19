//addEventListener(event,callback)
const ele = document.getElementById("innerDiv");
const eleouter = document.getElementById("outerDiv");

ele.addEventListener("mouseover", myFunction);
ele.addEventListener("mouseout", anotherFunction);



function myFunction(){
    ele.style.backgroundColor = "red";
}
function anotherFunction(){
    ele.style.backgroundColor = "green";
}
ele.addEventListener("click", changeBlue);
eleouter.addEventListener("click", changeBlue,true);

function changeBlue(){
    alert(this.id);
    this.style.backgroundColor = "lightblue";
}