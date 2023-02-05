
// console.log(document.); it will give the power to access elements even we can change the stuffs like below:

document.title ="DOM"; //previous title was "Products Lister"


// console.log(document.all); it will show us all the element of html

var headTitle = document.getElementById('header-title');
//header-title element stored inside variable headTitle
 
headTitle.style.borderBottom ="solid white"; //borderBottom is a css property but here we need to use it differently we cannot use "border-bottom" istead we use borderBottom
headTitle.style.textAlign ="center"; 
