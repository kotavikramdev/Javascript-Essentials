console.log("Assignment-2");

// Given object is as follows
const student = {
    name: "Helsinki",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript",
    },
}

// Destructuring the given object
const {name,age,projects:{diceGame}} = student;
console.log("The values of object after destructuring stored in variables as follows:");
console.log(`The name variable value is "${name}"`);
console.log(`The age variable value is "${age}"`);
console.log(`The diceGame variable value is "${diceGame}"`);
