/**********************forEach******************************/
/*let student = ["rtrrr","gfrfg","hgfgf"];
student.forEach(capitalize);
student.forEach(print);

function capitalize(index,element,array){
    array[index] = element[0].toUpperCase() + element.substring();

}
function print(element){
    console.log(element);
}*/
/****************************************array.map()*****************/
let num = [1,2,3,4];
let squares = num.map(sqr);
squares.forEach(print      );
function sqr(ele){
    return Math.pow(ele,2);
}
function print(element){
    console.log(element);
}