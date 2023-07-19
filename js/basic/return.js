
let area;
let width;
let height;


width = window.prompt("enter the width of the rectangle");
height = window.prompt("enter the height of the rectangle");


area = areaRect(width,height);
console.log(area);


function areaRect(w,h){
    return w * h;
}
