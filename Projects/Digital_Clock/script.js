


let image = document.createElement('img');
image.setAttribute('src', '');
document.querySelector('#image-screen').appendChild(image);
//set Alarm 

let setAlarm = document.getElementById('set-alarm');


//transition

function alarmEnter(){
    setAlarm.innerText = 'Party time !';
}

function alarmLeave(){
    setAlarm.innerText = 'Set Alarm';
}


//When Click Set Alarm

let clickSetAlarm = document.getElementById('set-alarm');
clickSetAlarm.setAttribute('onclick', 'clickedAlarm()');

let selected1 = document.getElementById('wakeup');
let selected2 = document.getElementById('lunch');
let selected3 = document.getElementById('nap');
let selected4 = document.getElementById('sleep');

let wakeUpTime = '';
let lunchTime = '';
let napTime = '';
let sleepTime = '';

let wakeUpTime1 = '';
let lunchTime1 = '';
let napTime1 = '';
let sleepTime1 = '';

let element1 = document.getElementById('left-side-message-text');
let element2 = document.getElementById('message-screen');
let element3 = document.getElementById('time-will-updated-message');
let element4 = document.getElementById('header-message-box');
let element5 = document.getElementById('time-banner-span');
let element6 = document.getElementById('message-screen-span');


function clickedAlarm(){
    //Contains selected:

    wakeUpTime = selected1.options[selected1.selectedIndex].innerText;

    lunchTime = selected2.options[selected2.selectedIndex].innerText;

    napTime = selected3.options[selected3.selectedIndex].innerText;

    sleepTime = selected4.options[selected4.selectedIndex].innerText;

    document.getElementById('confirmed-alarm-time-text').innerHTML = `
    <span>Wake Up Time : ${wakeUpTime}</span><br>
        <span>Lunch Time : ${lunchTime}</span><br>
        <span>Nap Time : ${napTime}</span><br>
        <span>Night Time : ${sleepTime}</span>`;
    

    //Updating according to Set Alarm
    wakeUpTime1 = selected1.options[selected1.selectedIndex].value;

    lunchTime1 = selected2.options[selected2.selectedIndex].value;

    napTime1 = selected3.options[selected3.selectedIndex].value;

    sleepTime1 = selected4.options[selected4.selectedIndex].value;
    
    element3.style.display = 'none';
    element4.style.display = 'none';
    element5.style.display = 'none';
    element6.style.display = 'none';
}

//For Updating Time

function currentTime(){
    var date = new Date();
    var hour = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    var amOrPm;

    //checking AM or PM
    if(hour < 12){
        amOrPm = 'AM';
    }
    else{
        amOrPm = 'PM';
    }
    document.getElementById('am-pm').innerText = amOrPm;

    //Getting Hour
    if(hour > 12){
        hour -= 12;
    }
    if(hour == 0){
        hour = 12;
    }
    else if(hour < 10){
        hour =  '0' + hour;
    }
    else if (hour <= 12){
        hour = hour;
    }
    document.getElementsByClassName('hours-number')[0].innerText = hour;

    //Getting Minutes
    if (mins < 10){
        mins = '0' + mins;
    }
    document.getElementsByClassName('minutes-number')[0].innerText = mins;

    //Getting Seconds
    if (secs < 10){
        secs = '0' + secs;
    }
    document.getElementsByClassName('seconds-number')[0].innerText = secs;

    let nowHour = hour + amOrPm;
    if(nowHour === wakeUpTime1){
        element1.innerText = 'GOOD MORNING!! WAKE UP !!';
        element2.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        image.setAttribute('src', './images/Good-Morning.png');
    }
    if(nowHour === lunchTime1){
        element1.innerText = 'GOOD AFTERNOON !! TAKE SOME SLEEP';
        element2.innerText = "LET'S HAVE SOME LUNCH !!";
        image.setAttribute('src', './images/Good-Afternoon.png');
    } 
    if(nowHour === napTime1){
        element1.innerText = 'GOOD EVENING !!';
        element2.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        element2.style.paddingTop = '20px';
        element2.style.paddingRight = '20px';
        image.setAttribute('src', './images/Good-Evening.png');
    }
    if(nowHour === sleepTime1){
        element1.innerText = 'GOOD NIGHT !!';
        element2.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        element2.style.paddingLeft = '15px';
        image.setAttribute('src', './images/Good-Night.png');
    }
}
function timeNow(){
    currentTime();
    window.setInterval('currentTime()', 1000);
}