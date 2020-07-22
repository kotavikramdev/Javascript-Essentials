console.log("Assignment-3");

// Prompt for the user's name
let name = prompt("Enter your good name:","Anonymous");

// getting the elements from webpage to display the welcome message and clock
let message = document.getElementById('welcome');
let clock = document.getElementById('time');

// Displaying welcome message
message.innerHTML = `<h1>Hello ${name}! Welcome to our page.</h1>`;

// clock function
function clockFunc() {
    let today = new Date();
    let time = today.toLocaleTimeString();
    clock.innerText = time;
}

// setting interval to clockFunc
setInterval(clockFunc, 1000);

// adding darkmode class to the website using toggle method of classList
setInterval(() =>{
    document.body.classList.toggle('darkmode');
},5000);