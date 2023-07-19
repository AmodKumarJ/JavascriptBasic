let canvas  = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
/********************draw line */
/*
context.strokeStyle = "red";
context.lineWidth = 10;
context.beginPath();
 context.moveTo(0,0);
 context.lineTo(250,250);
 context.lineTo(250,500);
 context.moveTo(500,0);
 context.lineTo(250,250 )
context.stroke();
*/
/***************draw triangle **************/

context.lineWidth = 5;
context.fillStyle = "red"
context.beginPath();
context.moveTo(250,0);
context.lineTo(0,250);
context.lineTo(500,250);
context.lineTo(250,0);
context.lineTo(150,250);
context.lineTo(150,500);
context.lineTo(500,500);
context.lineTo(500,250);
context.moveTo(0,250);
context.lineTo(0,500);
context.lineTo(150,500);


context.fill()
context.stroke();