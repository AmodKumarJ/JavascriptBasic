class Car{
    constructor(power){
        this._gas = 50;
        this._power = power

    }
    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return`${this._gas}L (${this._gas/50*100}%)`;
    }
    set gas(value){
        if(value > 50){
            value = 50;

        }
        else if(value <0){
            value = 0;
        }
        this._gas = value
    }
}

let car = new Car(480);
car.gas  =10000;
console.log(car.power);
console.log(car.gas)