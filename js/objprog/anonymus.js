//anonymus obj = obj doesnot need name
class Card{
    constructor(value,suit){
        this.value = value;
        this.suit  = suit;
    }
}
const cards = [new Card("A","heart"),
               new Card("A","dimond"),
               new Card("A","club"),
               new Card("A","spades"),
               new Card("J","heart")];
cards.forEach(card => console.log(`${card.value} ${card.suit}`));