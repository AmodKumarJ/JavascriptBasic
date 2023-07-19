

try{
    let x = window.prompt("enter the number");
    x = Number(x);

    if(isNaN(x)) throw "that was not aa number man";
    if(x == "") throw "that was empty";
    
    console.log(`${x} is number`);
}

catch(error){
    console.log(error);
}
finally{
    console.log("this always executed");
}


