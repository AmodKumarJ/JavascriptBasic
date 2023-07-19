



//const ele = document.body;//document.getElementById("myButton");
//const ele  = document.getElementById("myText");
//ele.onchange = doSomething;

const ele = document.getElementById("myDiv");
ele.onmousedown = doSomething;
ele.onmouseup = doanother;
function doSomething(){
    ele.style.backgroundColor = "blue";
}
function doanother(){
    ele.style.backgroundColor ="lightgreen"
}