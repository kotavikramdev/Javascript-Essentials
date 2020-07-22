console.log("Assignment-1");

// Array of colors
let arrColors = ['white','gray','red','yellow','maroon','olive','aqua','lime','teal','green','blue','fuchsia','navy','purple'];

// changeBgColor function
function changeBgColor() {
    var randomColor = Math.floor(Math.random()*(arrColors.length));
    document.body.style.backgroundColor = arrColors[randomColor];
}

// setting interval of 5 seconds and calling function
setInterval(changeBgColor,5000);