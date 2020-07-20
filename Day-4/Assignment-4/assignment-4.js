console.log("Assignment-4");

// Taking input from user : choice and variables
let input = prompt("Enter the values as mentioned separated by space.\n [Operation Number-1 Number-2] \n Operations: \n Addition : +\n Subtraction : -\n Multiplication : *\n Division : /\n Squareroot : sqrt [for sqrt you can enter only one number]\n Percentage : %\n").split(' ');
console.log(input);

const [operation, num1, num2] = input;
// console.log(operation);
// console.log(num1);
// console.log(num2);
switch(operation) {
    case '+':
        console.log(+num1 + +num2);
        break;
    case '-':
        console.log(+num1 - +num2);
        break;
    case '*':
        console.log(+num1 * +num2);
        break;
    case '/':
        console.log(+num1 / +num2);
        break;
    case 'sqrt':
        console.log(Math.sqrt(+num1));
        break;
    case '%':
        console.log(+num1 % +num2);
        break;
    default: 
        console.log("Invalid input");
        break;
}