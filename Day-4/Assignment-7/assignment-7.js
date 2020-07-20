console.log("Assignment-7");

// Taking input 'N' from user 
let N = +prompt("Enter the number:");

console.log(`The prime number from 2 to ${N} are:`);
for (let i = 2; i <= N; i++) {
    let count = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            count += 1;
            break;
        }
    }
    if (count == 0 && i != 1) {
        console.log(i);
    }
}