


// const image = document.createElement('img');
// image.setAttribute('src', './images/Good-Morning.png');
// document.querySelector('#image-screen').appendChild(image);



const image = document.createElement('img');
image.setAttribute('src', '');
document.querySelector('#image-screen').appendChild(image);
//set Alarm 

const setAlarm = document.getElementById('set-alarm');


//transition

function alarmEnter(){
    setAlarm.innerText = 'Party time !';
}

function alarmLeave(){
    setAlarm.innerText = 'Set Alarm';
}


//When Click Set Alarm

const clickSetAlarm = document.getElementById('set-alarm');
clickSetAlarm.setAttribute('onclick', 'one()');

function one(){
    //function Contains selected:
    selected1 = document.getElementById('wakeup');
    selected2 = document.getElementById('lunch');
    selected3 = document.getElementById('nap');
    selected4 = document.getElementById('sleep');

    const wakeUpTime = selected1.options[selected1.selectedIndex].innerText;

    const lunchTime = selected2.options[selected2.selectedIndex].innerText;

    const napTime = selected3.options[selected3.selectedIndex].innerText;

    const sleepTime = selected4.options[selected4.selectedIndex].innerText;
    document.getElementById('confirmed-alarm-time-text').innerHTML = `
    <span>Wake Up Time : ${wakeUpTime}</span><br>
        <span>Lunch Time : ${lunchTime}</span><br>
        <span>Nap Time : ${napTime}</span><br>
        <span>Night Time : ${sleepTime}</span>`;
    

    //Updating according to Set Alarm
    wakeUpTime1 = selected1.options[selected1.selectedIndex].value;

    lunchTime1 = selected2.options[selected2.selectedIndex].value;
    // console.log(lunchTime1);

    napTime1 = selected3.options[selected3.selectedIndex].value;
    // console.log(napTime1);

    sleepTime1 = selected4.options[selected4.selectedIndex].value;
    // console.log(sleepTime1);

    const time = new Date();
    let hour = time.getHours();
    var amOrPm;

    //checking AM or PM
    if(hour < 12){
        amOrPm = 'am';
    }
    else{
        amOrPm = 'pm';
    }
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
    
    let nowHour = hour + amOrPm;

    const element1 = document.getElementById('left-side-message-text');
    const element2 = document.getElementById('message-screen');
    const element3 = document.getElementById('time-will-updated-message');
    const element4 = document.getElementById('header-message-box');

    if(nowHour === wakeUpTime1){
        element1.innerText = 'GOOD MORNING!! WAKE UP !!';
        element2.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        image.setAttribute('src', './images/Good-Morning.png');
        element3.style.display = 'none';
        element4.style.display = 'none';
    }
    if(nowHour === lunchTime1){
        element1.innerText = 'GOOD AFTERNOON !! TAKE SOME SLEEP';
        element2.innerText = "LET'S HAVE SOME LUNCH !!";
        image.setAttribute('src', './images/Good-Afternoon.png');
        element3.style.display = 'none';
        element4.style.display = 'none';
    }
    if(nowHour === napTime1){
        element1.innerText = 'GOOD EVENING !!';
        element2.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        element2.style.paddingTop = '20px';
        element2.style.paddingRight = '20px';
        image.setAttribute('src', './images/Good-Evening.png');
        element3.style.display = 'none';
        element4.style.display = 'none';
    }
    if(nowHour === sleepTime1){
        element1.innerText = 'GOOD NIGHT !!';
        element2.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        element2.style.paddingLeft = '15px';
        image.setAttribute('src', './images/Good-Night.png');
        element3.style.display = 'none';
        element4.style.display = 'none';
    }
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
}
function timeNow(){
    currentTime();
    window.setInterval('currentTime()', 1000);
}

