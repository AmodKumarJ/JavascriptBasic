//const nameTag = document.createElement("h1");
  //nameTag.textContent = window.prompt("enter your name");

//const { config } = require("dotenv");

//document.body.append(nameTag);
const myList = document.querySelector("#fruits");
const listItem = document.createElement("li");
listItem.textContent = "jackfruits";
myList.prepend(listItem);//append can used last
myList.insertBefore(listItem,document.getElementsByTagName("li")[3]);

