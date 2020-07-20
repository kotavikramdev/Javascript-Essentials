console.log("Assignment-6");

// while loop which repeats infinitely as long as user enter number greater than 100.
while(true) {
    let input = +prompt("Enter the number:");
    console.log(input);
    if(input > 100) {
        console.log(`User entered number "${input}" which is greater than 100. Hence loop breaks`);
        break;
    }
}