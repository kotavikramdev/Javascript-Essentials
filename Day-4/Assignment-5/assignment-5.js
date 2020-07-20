console.log("Assignment-5");

// Let the normal salary of the employee be 25000
let salary = 25000;
console.log(`General salary of an employee is: ${salary}`);

// The number of sales made by an employee
let sales = 500;
// let sales = 6500;
// let sales = 12500;
// let sales = 24000;

if (sales > 0 && sales <= 5000) {
    salary += salary * 0.02; // 2% = 0.02
} 
else if (sales > 5000 && sales <= 10000) {
    salary += salary * 0.05; // 2% = 0.05
}
else if (sales > 10000 && sales <= 20000) {
    salary += salary * 0.07; // 2% = 0.07
}
else {
    salary += salary * 0.10; // 10% = 0.10
}

console.log(`Salary of an employee after adding increment based on sales is: ${salary}`);
