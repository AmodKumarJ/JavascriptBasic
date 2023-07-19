let userName = "Amod";
let userInbox = 0;

login();


function login(){

    displayUserName();
    displayuserInbox();

    
    function displayUserName(){
        console.log(`welcom ${userName}`);
    }
    function displayuserInbox(){
        console.log(`you have ${userInbox} new messages`);
    }
}
