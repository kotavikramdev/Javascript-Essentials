console.log("Assignment-8");

// Given function is:
/*
function ask (question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask (
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
)
*/


// Arrow function for the above function is:
let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

ask (
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
)