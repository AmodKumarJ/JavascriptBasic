let symbol = window.prompt("enter the symbol to use");
let rows =window.prompt("enter the rows");
let columns =window.prompt("enter the column");


for(let i = 1; i <= rows; i++){
    for(let j = 1; i <= columns; j++){
        document.getElementById("myRectangle").innerHTML += symbol; 
    }
        document.getElementById("myRectangle").innerHTML +="<br>";
}






















