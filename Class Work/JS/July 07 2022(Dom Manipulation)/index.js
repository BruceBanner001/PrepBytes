console.log('Working !');

const element1 = document.getElementById('description');
console.log(element1);
console.log(element1.innerHTML);
console.log(element1.innerText);
element1.innerText = 'Good to Go !';
element1.innerHTML = `<div>Hope You are Fine !</div>`;

const element2 = document.getElementsByClassName('text');
console.log(element2); // return HTMLCollection(2)
console.log(element2[0]);
console.log(element2[1]);
console.log(element2[0].innerHTML);
console.log(element2[0].innerText);
console.log(element2[1].innerHTML);
console.log(element2[1].innerText);

const element3 = document.getElementsByTagName('h1')
console.log(element3); // return HTMLCollection(2)
console.log(element3[0]);
console.log(element3[1]);
console.log(element3[0].innerHTML);
console.log(element3[0].innerText);
console.log(element3[1].innerHTML);
console.log(element3[1].innerText);

element1.style.color = 'yellow';
element1.style.border = '2px solid green';
element1.style.borderRadius = '4px';

element3[1].style.border = '5px solid red';

function changeText(){
    const element4 = document.getElementById('description');
    // const element5 = document.getElementsByTagName('button'); //this is one method
    // element5[0].style.backgroundColor = 'green';
    document.getElementsByTagName('button')[0].style.backgroundColor = 'green'; //this is short method

}
