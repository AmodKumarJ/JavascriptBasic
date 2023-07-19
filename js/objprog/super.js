class Animal{
    constructor(name){
        this.name = name;
    }
    
}

class rabit extends Animal{
   constructor(name,color){
    super(name);
    this.color = color;
    
   }
}
class fish extends Animal{
  constructor(name,color){
    super(name);
    this.color = color;
  }
}
const r = new rabit ("raju","red");
const f = new fish ("bibu","golden");
console.log(r.color);
console.log(f.color);
console.log(r.name);
console.log(f.name);
 