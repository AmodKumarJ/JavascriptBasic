//toLocaleString() = return string with a lang
//sensitive representation of this number

//number.toLocaleString(locale,(options));
//'locale' =specifes that lang (undefined = default set in browser)
//'options' = obj with formatting options
let mynum = 123456.789;
//mynum = mynum.toLocaleString("hi-IN", {style:"currency",currency:"INR"});
console.log(mynum);
mynum = mynum.toLocaleString(undefined,{style:"percent"});
