const myButton = document.querySelector("#myButton");
const myImage = document.querySelector("#myImage");
const myPara = document.querySelector("#myPara");
 
myButton.addEventListener("click",showHide);


function showHide(){
    if(myImage.style.display == "none"){
        myImage.style.display = "block";
        myPara.innerHTML = "press the buttton again to hide the image.........";
    }
    else{
        myImage.style.display = "none";
    }
}
