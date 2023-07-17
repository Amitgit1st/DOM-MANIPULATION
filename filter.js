var form = document.getElementById('addForm');

var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function addItem(e) {
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var newItem2 = document.getElementById('item2').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem))
    
    li.appendChild(document.createTextNode(newItem2));

    itemList.appendChild(li);
    

    //CREATE DELETE BUTTON

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn  btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    var editBtn = document.createElement('button');
    editBtn.className = 'btn  btn-sm float-right';  // different from line no 19--btn-danger and  delete is missing here
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }

}


//FILTER

var Filtr=document.getElementById('filter');
Filtr.addEventListener('keyup',filterItem);
function filterItem(e)
{
    e.preventDefault();
    var text =e.target.value;
    
    var items=document.getElementsByTagName('li')  // Grab all 'li' in form of HTML collection
    var arr=Array.from(items); 
// Line 9 converts the line 8 Html collection to an array named 'arr'  so that we can apply array methods
    

    arr.forEach(function(i)
    {
        var itemName=i.firstChild.textContent;
        var item=i.childNodes[1].textContent;
        
        if(itemName.indexOf(text)!=-1 || item.indexOf(text)!=-1 )
        {
            i.style.display='block'
        }else{
            i.style.display='none'
        }
    })
}