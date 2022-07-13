//08.07.2022

console.log('Hi Bro');


const myName = 'Subramanian';
function clickNow(){
    const element1 = document.getElementById('login');
    const element2 = document.getElementsByTagName('button');
    element2[0].innerText = 'Sign Out';
    element1.innerHTML = `${welcome()}<span style="color: red;">${myName}</span>`;
    document.getElementsByClassName('cards')[0].style.flexDirection = 'column';
    element2[0].style.backgroundColor = onClickColorChange();
    element5.setAttribute('src', './image2.jpg')
}

function welcome()
{
    return 'Welcome to PrepBytes ';
}

function onClickColorChange(){
    return 'tomato';
}
const element3 = document.createElement('div');
element3.className = 'newDiv';
element3.id = 'newDiv';
element3.setAttribute('for', 'newDivCreated');
element3.setAttribute('value', 'created');
element3.innerHTML = `<b> I am the new Div Created </b>`;

document.querySelector('.new').appendChild(element3);

// console.log(document.getElementsByClassName('new')[0]);

const element4 = document.getElementsByClassName('new');
console.log(element4[0]);

element4[0].removeChild(element3);

const element5 = document.createElement('img');
element5.setAttribute('src', './image1.jpg');
document.querySelector('.new').appendChild(element5);