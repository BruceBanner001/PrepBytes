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
}

function welcome()
{
    return 'Welcome to PrepBytes ';
}

function onClickColorChange(){
    return 'tomato';
}

// const element3 = document.createElement('div');
// element3.className('newDiv');
// element3.id('newDiv');
// element3.setAttribute('for', 'newDiv');
// element3.setAttribute('value', 'Nothing');
// element3.innerHTML = `<b>This is New Div </b>`;
// document.querySelector('div.new').appendChild(element3);


// const element6 = document.createElement('div');
// element6.className = "newDiv";
// element6.id = "newDiv1";
// element6.setAttribute("for","newDivCreated");
// element6.setAttribute("value","created");
// element6.innerHTML = `<b>I am the new Div Created</b>`;

// console.log(element6);

// document.querySelector("div#description").appendChild(element6);

// element1.removeChild(element6);

// const element7 = document.createElement('img');
// element7.setAttribute("src","./image1.jpg");
// document.querySelector("div#description").appendChild(element7);

// function changeText() {
//     const element4 = document.getElementById("description");
//     const element5 = document.getElementsByTagName("button");
//     element5[0].style.backgroundColor = "blue";
//     element4.style.color = 'green';
//     document.getElementsByTagName("button")[0].style.backgroundColor = 'yellow';
//     element7.setAttribute("src","./image2.jpg");
// }

