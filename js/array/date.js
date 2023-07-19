let date = new Date();
let year = date.getFullYear();
console.log(year);
let month = date.getMonth()+1;
console.log(month);
date = date.toString();
console.log(date);
document.getElementById("myLablel").innerHTML = date;