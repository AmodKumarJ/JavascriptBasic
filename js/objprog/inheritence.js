class Animal{
    Alive = true;

    sleep(){
        console.log(`${this.name} is sleeping`)
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
}

class rabit extends Animal{
      name = "rabit";
     run(){
        console.log(`this ${this.name} is running`);
     }
}
class fish extends Animal{
    name = "fish";
   Swim(){
      console.log(`this ${this.name} is swimming`);
   }
}
const r = new rabit();
console.log(r.Alive);
r.eat();
r.sleep();
r.run();
const f = new fish();
console.log(f.Alive);
f.eat();
f.sleep();
f.Swim();