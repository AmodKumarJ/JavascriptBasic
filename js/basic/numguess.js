const ans = Math.floor(Math.random()*10 + 1);
let guess = 0;
document.getElementById('submitBtn').onclick = function() {
    let guess = document.getElementById('guessFeild').value;
    guess += 1;
    if (guess = ans){
        alert(`${ans} is the #.It took you ${guess} guess`);

    }
    else if(guess < ans){
        alert(`Too small`);
    } 
    else{
        alert(`Too Large`);
    }
    
}