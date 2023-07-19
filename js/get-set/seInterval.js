//setInterval() = invokes the function repidedly after a number of mili second
// asynchronus function (doesn't pause the execution)

let count =0;
let max =window.prompt("count up to what #?");
max = Number(max);
const interval = setInterval(countUp,1000);


function countUp(){
    count+=1;
    console.log(count);
    if(count >=max ){
        clearInterval(interval);
    }
}