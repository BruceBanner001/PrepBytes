//20.07.2022

//Event-

//The event loop is the secret behind JavaScript’s asynchronous programming. JS executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading. Let’s take a look at what happens on the back-end.
// The call stack is responsible for keeping track of all the operations in line to be executed. Whenever a function is finished, it is popped from the stack.
//The event queue is responsible for sending new functions to the stack for processing. It follows the queue data structure to maintain the correct sequence in which all operations should be sent for execution.


//Jquery  - It is a JavaScript Library, which provides us an effective method for doing some changes in our frontend and gives us essential features like DOM manipulation and AJAX interactions.

// $('#click').click(function(){
//     // $('p').hide();
//     $('#one').toggle(); // When we click again it will work as back.
//     // $(this).toggle(); //this refers to button
// })

$('#hide').click(function(){
    $('.text').hide();
})

$('#show').click(function(){
    $('.text').show();
})

//Ajax - Ajax(Asynchronous JavaScript And XML) allows us to make server calls and display the data without reloading the entire page.
//It allows us to communicate with the remote web servers in an asynchronous way. With AJAX calls we can request data from web servers dynamically. 
//It helps us to create  CRUD(Create, Read, Update and Delete) Applications.

// https://jsonplaceholder.typicode.com/todos/
 
//dummy api

// GET(retrieve data), DELETE(remove permanently data), POST (add) , UPDATE(modifying existing data)

$('.btn').click(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/5",
        type: "GET",
        success: function(data){
            console.log(data);
            document.getElementById('one').innerText = data.title;
        }
    })
})
