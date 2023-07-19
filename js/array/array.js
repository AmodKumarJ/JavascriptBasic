let fruits = ["apple","orange","banana"];

//fruits[0] = "coconut";
fruits.push("lemon");//adding a ele;
fruits.pop();//removes last ele;
fruits.unshift("mango");//add ele at the begining;
fruits.shift();//remove ele from beging;

let length = fruits.length; 
let index = fruits.indexOf("kiiu");//-1 means ele not in the array


console.log(index);
console.log(length);
console.log(fruits);