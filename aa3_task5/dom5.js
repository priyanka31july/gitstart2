var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);



// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var description = document.getElementById('description').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';

  const newText=document.createTextNode(newItem);
  const descriptionNode=document.createTextNode(description);

  // Add text node with input value
  li.appendChild(newText);
  li.appendChild(descriptionNode);

  // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className = 'btn btn-danger btn-sm float-right edit';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('edit'));

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
  itemList.appendChild(li);

}



// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e){
  //convert text to lovercase
  var text =  e.target.value.toLowerCase();
  // to get li
  var items= itemList.getElementsByTagName('li');

 
  //to convert in array
   Array.from(items).forEach(function(item){
     var itemName= item.firstChild.textContent;
     var description = item.childNodes[1].textContent;
     
     
     if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
     item.style.display="block";
     }else{
      item.style.display="none";
     }
    });

  }




























    




