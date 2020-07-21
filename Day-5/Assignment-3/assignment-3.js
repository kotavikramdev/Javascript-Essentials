console.log("Assignment-3");

// JSON place holder Todos API

// Get request
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(data => console.log(data));

async function getTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const result = await response.json();
    console.log(result);

    // FOR OUTPUTTING ONLY COMPLETED OBJECTS IN RESULT ARRAY
    // Completed todos means where the property completed = true
    const completedTodos = []
    let i = 1;
    while(i < result.length) {
        if (result[i].completed == true) {
            completedTodos.push(result[i])
        }
        i++;
    }
    console.log(completedTodos);
}

getTodos();