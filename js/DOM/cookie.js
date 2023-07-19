

 //document.cookie = "firstName = Brocoder;expires = sun, january 2030 12:00:00 UTC;path/";
//document.cookie = "lastName = pants;expires = sun, january 2030 12:00:00 UTC;path/";



//console.log(document.cookie);
// delcookie("firstName");
// delcookie("lastName");
// delcookie("email");
setCookie("firstName","Rishab",365);
setCookie("lastName","Pant",365);
console.log(getcookie("firstName"));
getcookie=("firstName")

console.log(document.cookie)

function setCookie(name,value,daysToLives){
    const date = new Date();
    date.setTime(date.getTime()+(daysToLives*24*60*60*1000));
    let expires = "expiers"+date.toUTCString()
    document.cookie = `${name} = ${value}; ${expires};path = /`
}
function delcookie(name){
    setCookie(name,null,null);
}
function getcookie(name){
    const cDecoded = decodeURIComponent(document.cookie);;
    console.log(cDecoded);
    const cAarry = cDecoded.split("; ");
    let result = null;
    cAarry.forEach(ele =>{
        if(ele.indexOf(name)==0){
            result = ele.substring(name.length+1);
        }

    })
    return result;
}
//console.log(navigator.cookieEnabled);