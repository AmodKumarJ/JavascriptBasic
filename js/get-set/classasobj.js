class Car{
    constructor(model,year,color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
}
const car1 = new Car("MUSTANG",2023,"red");
const car2 = new Car("BMW",2022,"blue");
const car3 = new Car("LAMBO",2024,"yellow");
//displayInfo(car1); 
//displayInfo(car2);

changecolor(car3,"green");
displayInfo(car3);
function displayInfo(car)
{
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}
function changecolor(car,color){
    car.color = color;
}