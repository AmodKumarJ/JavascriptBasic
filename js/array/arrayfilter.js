let age = [18,20,90,10,12,17];
let adults = age.filter(checkAge);

adults.forEach(print);

function checkAge(ele) {
    return ele >= 18;
    
}
function print(element){
    console.log(element);
}