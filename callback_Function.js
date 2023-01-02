/**
 * Callback function
 */

function greeting(name) {
    console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
    callback("Achyut");
}

processUserInput(greeting);
