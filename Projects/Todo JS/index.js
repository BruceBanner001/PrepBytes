
const clickAddList = document.getElementById('tasks');
clickAddList.setAttribute('onclick', 'popUpBox()');
clickAddList.style.cursor = 'pointer';
const containerSlotsMain = document.getElementsByClassName('contains-slots');
const popUp = document.getElementsByClassName('popup_list');
popUp[0].style.display = 'none';
const blur = document.getElementById('main')

function popUpBox(){
    document.getElementById('no-items').style.display = 'none';
    blur.style.filter = 'blur(5px)';
    popUp[0].style.display = 'block';
    popUp[0].innerHTML = `
    <br><p><label class="add" for="add1">Add New List</label></p>
    <input type="text" name="" class="textBox" id="add1"><br><br>
    <button class="add_button" onclick="added()">ADD</button>
    <button class="close-button" onclick="closed()">Close</button>`;
}
function added(){
    popUp[0].style.display = 'none';
    blur.style.filter = 'blur(0px)';
    const elementForSlots = document.createElement('div');
    elementForSlots.className = 'slots';
    document.querySelector('.contains-slots').appendChild(elementForSlots);
    elementForSlots.innerHTML = `
    <button onclick = "popUpItem()">ADD</button>
    `
}
function popUpItem(){
    blur.style.filter = 'blur(5px)';
    popUp[0].style.display = 'block';
    popUp[0].innerHTML = `
    <br><p><label class="add" for="add1">Add New Item</label></p>
    <input type="text" name="" class="textBox" id="add1"><br><br>
    <button class="add_button" onclick="">ADD</button>
    <button class="close-button" onclick="closed()">Close</button>`;
}
function closed(){
    popUp[0].style.display = 'none';
    blur.style.filter = 'blur(0px)';
}