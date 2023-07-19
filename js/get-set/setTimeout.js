//setTimeout() = invokes the function after a number of  mili sec
//              asynchronus fuction(doesn't pause execution);

let timer1 = setTimeout(first,3000);
let timer2 = setTimeout(second,9000);
let timer3 = setTimeout(third,10000);


function first(){
    alert("Please buy this cource");
}
function second(){
    alert("THis is not a scam");
}
function third(){
    alert("Please do it ");
}
document.getElementById("buy").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("thank you for buying our course");

}