//class
class player{
    score = 0;

    pause(){
        console.log(`you pause the game`);
    }
    exit(){
        console.log(`you exit the game`);
    }
}

const player1 = new player();
player1.score += 1;

console.log(player1.score);
player1.pause();
player1.exit();