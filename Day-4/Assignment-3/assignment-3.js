console.log("Assignment-3");
// shoppingList array 
let shoppingList = ["Toothpaste", "Brush", "Rice", "Dal", "Oil", "Sugar"];
console.log(shoppingList);

// copy of shoppingList array into shoppingBasket array
let shoppingBasket = shoppingList;
console.log(shoppingBasket);

// Now I'm adding some snack items into shoppingBasket array which automatically adds to my original shoppingList array
shoppingBasket.push("Biscuits");
shoppingBasket.push("Beverages");

// Printing the two arrays
console.log(shoppingBasket);
console.log(shoppingList);

// Both arrays contains the same data 