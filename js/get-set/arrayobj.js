class Car{
    constructor(model,year,color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive(){
        console.log(`you are raiding ${this.model}`);
    }
}
const car1 = new Car("MUSTANG",2023,"red");
const car2 = new Car("BMW",2022,"blue");
const car3 = new Car("LAMBO",2024,"yellow");
//changecolor(car3,"green");
//displayInfo(car1); 
//displayInfo(car2);
//displayInfo(car3);

const cars  = [car1,car2,car3];
startRace(cars)
function startRace(cars){
    for(const car of cars)
    {
        car.drive();
    }
}