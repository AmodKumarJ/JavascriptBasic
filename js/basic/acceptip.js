// how to accept user input

// easy with window prompt

//let username = window.prompt("what's your name?");
//console.log(username);

//difficult way HTML textbook
let username;

document.getElementById('myButton').onclick =function(){
    username = document.getElementById('myText').value;
    console.log(username);
    document.getElementById('myLable').innerHTML = "Hello " +username;
}
