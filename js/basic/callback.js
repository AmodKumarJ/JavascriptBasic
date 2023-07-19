let total = sum(2,3,displayDOM);


function sum(x,y,callback){
 let result = x+y;
 callback(result);
}

function displayDOM(res){
    document.getElementById("label").innerHTML = res;
}