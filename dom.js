
// console.log(document.); it will give the power to access elements even we can change the stuffs like below:

document.title = "DOM"; //previous title was "Products Lister"


// console.log(document.all); it will show us all the element of html

// var headTitle = document.getElementById('header-title');
// //header-title element stored inside variable headTitle

// headTitle.style.borderBottom ="solid white"; //borderBottom is a css property but here we need to use it differently we cannot use "border-bottom" istead we use borderBottom
// headTitle.style.textAlign ="center"; 

//styling using getElementsByClassName
var items = document.getElementsByClassName('list-group-item');
items[0].style.backgroundColor = "gray";
items[1].style.backgroundColor = "red";
items[2].style.backgroundColor = "yellow";
items[3].style.backgroundColor = "aqua";

var newitem = document.getElementsByClassName('new-item');
newitem[0].style.backgroundColor = "green";
newitem[0].style.listStyle = "none"
newitem[0].style.padding = "9px"

//getElementsByTagName

var itemz = document.getElementsByTagName('h1');
itemz[0].style.textAlign = "center";

//QuerySelector

var input = document.querySelector('input')

input.value = "Fish"

//QuerySelectorAll

var newvalue = document.querySelectorAll('.btn');
newvalue[0].style.backgroundColor = "coral";


//Traversing DOM
var itemlist = document.querySelector('#items');

//  //Parent Node
//  itemlist.parentNode.style.backgroundColor = 'Pink';

// // parent element
// itemlist.parentElement.style.backgroundColor = "pink"

// // Child Node
// itemlist.children[0].style.backgroundColor = "pink"

//CreateElement

//To create new div 
var newdiv = document.createElement('div');

//To add class
newdiv.className = 'hello'

//To add ID
newdiv.id = 'helloid'
//To add attributes
newdiv.setAttribute('title', 'hello div');

//To Create Text Node 

var newDivText = document.createTextNode('LGG')

//Add text To Div
newdiv.appendChild(newDivText);


//Add element in html dom 
var content = document.querySelector('header .container');
var h1 = document.querySelector('header h1')
content.insertBefore(newdiv, h1)