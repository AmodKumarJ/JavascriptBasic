//map = key value pair; 
const store = new Map([
    ["t-shert",20],
    ["jeans",30],
    ["socks",10],
    ["shirt",50]
])
let shopping = 0;
shopping += store.get("t-shert");//getting ele from map
console.log(`$${shopping}`);
store.set("hat",40);//adding ele to map
store.forEach((value,key) => console.log(`${key} $${value}`));
//store.delete("ele");
//store.has("ele"); means ele is ther in the given map
//store.size gives no of key and value pair