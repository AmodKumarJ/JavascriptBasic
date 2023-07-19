const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");
myButton.addEventListener("click",begin);


function begin(){
    let timer = null;
    let x = 0;
    let y = 0;
    let degrees = 0;
    let scaleX = 1;
    let scaleY = 1;

    timer = setInterval(frame,5);

    function frame(){
        if(x >= 200 || x >= 200 || scaleX >= 2 || scaleY >= 2){
            clearInterval(timer);
        }
        else{
            scaleX += 0.01;
            scaleY += 0.01;
            degrees += 5;
            x += 1;
            y += 1;
            myAnimation.style.left = x+ "px";
            myAnimation.style.top = y+ "px";
            myAnimation.style.transform = "rotateZ("+degrees+"deg)";
            //myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }
}