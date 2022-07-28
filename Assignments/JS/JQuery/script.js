// Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible

$('#hide').click(function () {
    $('#paragraph').hide();
})


$('#show').click(function () {
    $('#paragraph').show();
})

// Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page

$('#clickMe').click(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/12',
        type: 'GET',
        success: function (value) {
            document.getElementById('apiCall').innerHTML = `
            userId: ${value.userId} <br>
            id: ${value.id} <br>
            title: ${value.title} <br>
            completed: ${value.completed} <br>
            `
        }
    })
})