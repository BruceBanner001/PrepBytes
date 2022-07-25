// Write the code to access element which is having id as "text"

document.getElementById('text').style.color = 'red';

// Write the code to access element which is having tag as "h1"

const h1 = document.getElementsByTagName('h1');
console.log(h1[1].innerText);

// Write the code to access element which is having class as "box"

document.getElementsByClassName('box')[0].style.color = 'blue';


// "<h1>Hello </h1>

// Change the heading from ""Hello"" to ""Hello World"" using DOM functions"

document.getElementsByTagName('h1')[0].innerText = 'Hello World';

// Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function change(){
    document.getElementsByClassName('cards')[0].style.flexDirection = 'column';
}

//What’s the difference between window vs document?

// Document Object: 
//     The document object represent a web page that is loaded in the browser. 
//     By accessing the document object, we can access the element in the HTML page. 
//     With the help of document objects, we can add dynamic content to our web page. 
//     The document object can be accessed with a window.document or just document.

// Syntax:
//     document.property_name;

// Window Object: 
// The window object is the topmost object of the DOM hierarchy. 
// It represents a browser window or frame that displays the contents of the webpage. 
// Whenever a window appears on the screen to display the contents of the document, the window object is created. 

// Syntax:
//     window.property_name;

// "<h1>Hello </h1>

// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

h1[0].setAttribute('id', 'heading');
document.getElementById('heading').style.color = 'red';

// Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function replace(){
    document.getElementById('hello').innerText = "Welcome to Elevation academy";
}

// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
function showTime(){
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var amPm = "AM";
 
    if (hr > 12) {
        hr = hr - 12;
        amPm = "PM";
    }
    if (hr == 0) {
        hr = 12;
        amPm = "AM";
    }
 
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = hr + ":" + min + ":" + sec + " " + amPm;
 
    document.getElementById("time").innerHTML = currentTime;
}

setInterval(showTime, 1000);

// Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

function check(){
    const select = document.getElementById('drop');
    const value = select.options[select.selectedIndex].innerText;
    document.getElementById('output').innerText = value;
}

// Create a form having name ,email, phone no. , birth year 
// Add validations - phone no. should start with 91 , it should be 10 digits
// email should be domain prepbytes.com
// birth year should be > 95

function submit(){
    var result = false;
    return false;
}
