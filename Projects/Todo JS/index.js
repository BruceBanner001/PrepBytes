
const clickAddList = document.getElementById('tasks');
clickAddList.setAttribute('onclick', 'popUpBox()');
clickAddList.style.cursor = 'pointer';
const containerSlotsMain = document.getElementsByClassName('contains-slots');
const popUp = document.getElementsByClassName('popup_list');
popUp[0].style.display = 'none';
const blur = document.getElementById('main')

function pop() {
    blur.style.filter = 'blur(5px)';
    document.querySelector('body').style.overflow = 'hidden';
    popUp[0].style.display = 'block';
}

let count = 0;
function increaseValueOfId() {  //this function for counting no of slots and assign id's for slots.
    return count++;
}

let countItems = 0;
function increaseCountOfItems() { //this function for counting no of items in the individual slots and assign id's for items.
    return countItems++;
}

function popUpBox() {
    pop();
    popUp[0].innerHTML = `
    <p><span class="add" for="add1">Add New List</span></p>
    <input type="text" name="addList" class = "textBoxList" id="textBoxAddList"><br><br>
    <button class="add-button" onclick="added()">ADD</button>
    <button class="close-button" onclick="closed()">Close</button>`;

}
function added() {
    let id = increaseValueOfId();
    closed();
    document.getElementById('no-items').style.display = 'none';
    const elementForSlots = document.createElement('div');
    elementForSlots.className = 'slots';
    document.querySelector('.contains-slots').appendChild(elementForSlots);
    const tripTitle = document.getElementById('textBoxAddList').value;
    elementForSlots.innerHTML = `
    <p class="list_head">${tripTitle}</p><hr>
    <p id = "contains-item${id}"></p>
    <div class= "addItem">
        <i class="fas fa-trash-alt" id = "delete${id}"></i> &nbsp;
        <i class="fas fa-plus-circle" id = "addNewItemDialogue${id}"></i>
    </div>
    `
    // console.log(elementForSlots);
    // console.log(id);
    document.getElementById(`addNewItemDialogue${id}`).onclick = function () {
        pop();
        popUp[0].innerHTML = `
        <p><span class="add" for="add1">Add New Item</span></p>
        <input type="text" name="" class = "textBoxItem" id="textBoxAddItem${id}"><br><br>
        <button class="add-button" id = "addNewItem${id}">ADD</button>
        <button class="close-button" onclick="closed()">Close</button>`;
        document.getElementById(`addNewItem${id}`).onclick = function () {
            let idForItems = increaseCountOfItems();
            // console.log(popUp[0]);
            closed();
            let getNewItem = document.getElementById(`textBoxAddItem${id}`).value;
            const addNewItemInSlot = document.createElement('p');
            addNewItemInSlot.id = `item${idForItems}`
            addNewItemInSlot.className = 'addItemsInsideSlot'
            document.querySelector(`#contains-item${id}`).appendChild(addNewItemInSlot);
            addNewItemInSlot.innerHTML = `${getNewItem} <span id = "buttonForItem${idForItems}" class = "buttonForItem"> Mark Done </span><br>`
            console.log(addNewItemInSlot);
            // console.log(idForItems);
            const markDone = document.getElementById(`buttonForItem${idForItems}`)
            markDone.onclick = function () {
                const done = document.getElementById(`item${idForItems}`);
                done.style.textDecoration = 'line-through';
                done.style.color = 'red';
                markDone.style.display = 'none';
            }
        }
    }
    document.getElementById(`delete${id}`).onclick = function () {
        pop();
        popUp[0].innerHTML = `
        <p><span class="add" for="add1">
            Are you sure want to delete
            </span></p>
        <p id = 'title'>${tripTitle} ?</p>     
        <button class="add-button" id = "deleteConfirm${id}">&check;</button>
        <button class="close-button" onclick="closed()">X</button>`;
        document.getElementById(`deleteConfirm${id}`).onclick = function () {
            document.querySelector('.contains-slots').removeChild(elementForSlots);
            closed();
        }
    }
}
function closed() {
    popUp[0].style.display = 'none';
    blur.style.filter = 'blur(0px)';
    document.querySelector('body').style.overflow = 'visible';
}
