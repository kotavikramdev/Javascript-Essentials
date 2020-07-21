console.log("Assignment-1");

// Input from user
N = parseInt(prompt("Enter the Positive Number:"));

// Array
arr = [];
for (let i = 1; i <= N; i++){
    arr.push(i);
}

// Filtering odd numbers from the array
oddNumbers = arr.filter((ele)=>(ele % 2 != 0));
console.log(`Odd numbers upto ${N}: [${oddNumbers}]`);

// Array of cubes of the filtered numbers
oddCubes = oddNumbers.map((ele)=>(ele ** 3));
console.log(`Cubes of odd numbers upto ${N}: [${oddCubes}]`);