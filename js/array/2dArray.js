//2d array = An array of arrays

let fruits = ["apples","oranges","bananas"];
let vegitables = ["carrots","onions","potato"];
let meats = ["eggs","chicken","fish"];
//aray[index][index] = "item";
let groceryList = [fruits,vegitables,meats ]
for(let list of groceryList){
    for(let food of list){
        console.log(food);

    }

}