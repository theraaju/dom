var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');

//Form Submit Event 
form.addEventListener('submit', addItem);

//Delete Events
itemlist.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup',filteraItems);

//add item function
function addItem(e) {
    //Get input value
    e.preventDefault();
    var newItem = document.getElementById('item').value;

    //Create new li element

    var li = document.createElement('li');
    li.className = 'list-group-item';
    console.log(li);

    //add text node with input value 
    li.appendChild(document.createTextNode(newItem));

    itemlist.appendChild(li);

    //delete button

    var Delbutton = document.createElement('button');
    var editbtn = document.createElement('button');

    // add classes to del btn
    Delbutton.className = 'btn btn-danger btn-sm float-right delete';
    editbtn.className = 'btn btn-outline-info'

    //append text node
    Delbutton.appendChild(document.createTextNode('x'));
   editbtn.appendChild(document.createTextNode('edit'));
    //append to button li
    li.appendChild(Delbutton);
    li.appendChild(editbtn);
//append li to list 
    itemlist.appendChild(li);
    
}

//Remove Items
function removeItem(e){
    if(e.target.classList.contains('delete')){
       if (confirm('Are you sure?')) {
        var li = e.target.parentElement;
        itemlist.removeChild(li);
       }

    }
}

//Filter function

function filteraItems(e)
{
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //get li
    var items = itemlist.getElementsByTagName('li');
    console.log(items);

    //convert html collection to array

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text)!=-1 ){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }

    }
    );
}