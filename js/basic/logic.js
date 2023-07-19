
/************AND(&&)*******/
let temp;
temp = window.prompt('what is the temperature');
if (temp >= 0 && temp < 30){
    console.log("the weathe is good!");
}
else
{
    console.log("the weathe is bad!");

}
/************OR(||)***********/
if (temp <= 0 || temp > 30){
    console.log("the weathe is bad!");
}
else
{
    console.log("the weathe is good!");

}
/*********NOT(!)**************/
if (!(temp > 0)){
    console.log("cold outside!");
}
else
{
    console.log("it's warm out side!");

}
