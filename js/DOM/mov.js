const ele = document.getElementById("myDiv");
window.addEventListener("keydown",move);

let x =0;
let y= 0;

function move(event){
    switch (event.key) {
      case "ArrowDown" :
        y+=5;
        ele.style.top = y+"px";
        break;
      case "ArrowUp" :
        y-=5;
        ele.style.top = y+"px";
        break;
      case "ArrowRight" :
          x+=5;
          ele.style.left = x+"px";
          break;
      case "ArrowLeft" :
        x-=5;
        ele.style.left = x+"px";
        break;
        
    }
}
//window.addEventListener("keydown",event =>console.log(event.key));