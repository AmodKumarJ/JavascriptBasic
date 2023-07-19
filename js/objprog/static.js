//Static key word
class car{
   static noofcars = 0;
     constructor(model){
        this.model = model;
        car.noofcars += 1;
     }
}

const car1 = new car("BMW");
const car2 = new car("MUSTANG");
const car3 = new car("DOUDGE");

console.log(car.noofcars);