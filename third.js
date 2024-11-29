function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function askQuestion() {
    console.log("How are you today?");
}

greet("Danala", askQuestion);
