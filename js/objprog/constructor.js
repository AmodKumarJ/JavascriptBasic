class student{
    constructor(name,age,gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is about ${this.age} year old his gpa is ${this.gpa}.`);
    }
}
const student1 = new student('Amod',21,7.5); 
student1.study();