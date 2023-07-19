let prices = [20,30,50,60];
let total = prices.reduce(totalPrices);
console.log(total);

function totalPrices(total,ele){
    return total + ele;
}