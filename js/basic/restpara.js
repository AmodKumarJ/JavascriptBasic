//can pss undefined no of parameter (...)
let a = 10;
let b = 5;
let c = 6;
let d = 8;

console.log(sum(a,b,c));
function sum(...numbers){
    let  total = 0;
    for(let num of numbers)
    {
      
       total = total + num;
    }
    return total;


}
