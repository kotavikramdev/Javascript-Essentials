console.log("Assignment-2");

// Input from user, default value is taken as '1'.
let number = +prompt("Please Enter the positive integer:",1);

// Getting the tag where to display table from the webpage.
let mulTable = document.getElementById("mulTable");
console.log(mulTable); 

// Displaying multiplication table on webpage.
for(i = 1; i <= 10; i++) {
    let result = number * i;
    mulTable.innerHTML += `<p>${number} x ${i} = ${result}</p>`;
}

