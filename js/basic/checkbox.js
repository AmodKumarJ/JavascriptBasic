document.getElementById("myButton").onclick = function(){

    const visaBtn = document.getElementById('VisaBtn');
    const mastercardBtn = document.getElementById('mastercardBtn');
    const paypalBtn = document.getElementById('paypalBtn');



    if(document.getElementById("myCheckBox").checked){

        console.log("you are subscribed!");
    }
    else{
        console.log("you are not subscribed!");

    }
    if (visaBtn.checked){
        console.log("you are paying through visa");
    }
    else if(mastercardBtn.checked){
        console.log("you are paying through mastercard");
    }
    else if (paypalBtn.checked){
        console.log("you are paying through paypal");
    }
    else{
        console.log("you must select payment type");
    }
    
}