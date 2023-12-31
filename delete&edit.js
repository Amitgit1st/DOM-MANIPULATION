var form = document.getElementById('addForm');

var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function addItem(e) {
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
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
