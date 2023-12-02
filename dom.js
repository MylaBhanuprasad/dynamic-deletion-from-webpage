var itemList=document.querySelector("#items");
itemList.parentNode.style.backgroundColor="#f4f4f4";
//console.log(itemList.children);
//console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor="yellow";
document.getElementsByClassName("title1").innerHTML="hello";
itemList.firstElementChild.innerHTML="hello1";
itemList.lastElementChild.innerHTML="hello4";
itemList.previousElementSibling.style.backgroundColor="green";

var newdiv=document.createElement("div");
newdiv.className="divadded";
newdiv.id="divadded-1";
newdiv.setAttribute("title","hello");
var divTextNode=document.createTextNode("Bhanu Prasad");
newdiv.appendChild(divTextNode);
var container=document.querySelector("Header.container");
var h1=document.querySelector("header h1");
container.insertBefore(newdiv,h1);