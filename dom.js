console.dir(document);

console.log(document.domain);

console.log(document.URL);
console.log(document.title);
document.title="123";
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent ="Hello" ;
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

//GETELMENTBYID

console.log(document.getElementById('header-title'));
var headerTitle =document.getElementById('header-title');
var header =document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent="hello";
headerTitle.textContent="good";
console.log(headerTitle.innerText);
headerTitle.innerHTML ="<h3>Hello</h3>";
header.style.borderBottom ='solid 3px #000';


//GETELEMENTBYCLASSNAME
var items =document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent ="Hello 2";
items[1].style.backgroundColor='yellow';
var element = document.getElementById("i1");
element.style.color='green';
element.style.fontWeight="bold";