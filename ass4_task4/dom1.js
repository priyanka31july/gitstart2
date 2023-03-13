
//traversing dom
var itemList= document.querySelector('#items');
//parentnode
 console.log(itemList.parentNode);
 itemList.parentNode.style.backgroundColor ="#f4f4f4" ;
 console.log(itemList.parentNode.parentNode);

 //parentElemnt
 console.log(itemList.parentElement);
 itemList.parentElement.style.backgroundColor ="#f4f4f4" ;
 console.log(itemList.parentElement.parentElement);

 //childnodes

 //console.log(itemList.childNodes);

 console.log(itemList.children);
 console.log(itemList.children[1]);
 itemList.children[1].style.backgroundColor="yellow";
 
//firstchild
console.log(itemList.firstChild);
 
//firstelementchild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent ="Item 1";

//lastchild
console.log(itemList.lastChild);
 //lastlementchild
console.log(itemList.ElementChild);
itemList.lastElementChild.textContent ="Hello 4";

//nextsibling
console.log(itemList.nextSibling);
//nextElementsibling
console.log(itemList.nextElementSibling);

//previoussibling
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color="purple";

//createelement
  //create div
var newdiv= document.createElement('div');
console.log(newdiv);
//Add class
newdiv.className="hello";
newdiv.id="hello1";

//create textnode
var newdivText=document.createTextNode("Hello world");

newdiv.appendChild(newdivText);

var container=document.querySelector('header .container');
var h1= document.querySelector('header h1');

console.log(newdiv);

newdiv.style.fontSize="30px";

container.insertBefore(newdiv, h1);

//////////////before item1
var newdiv1= document.createElement('div1');
console.log(newdiv1);
//Add class
newdiv1.className="hello1";
newdiv1.id="hello2";

//create textnode
var newdivText1=document.createTextNode("Hello world");

newdiv1.appendChild(newdivText1);


console.log(newdiv1);

var itemList= document.querySelector('#items');

itemList.insertBefore(newdiv1, itemList.firstElementChild) ;

