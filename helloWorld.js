/* 
Steps to execute this programe:
    Step 1: Intsall node in your machine.
    Step 2: Go to dirctory where your programe is stored in your machine.
    Step 3: type following command to execute this programe.
            node helloWorld.js <your argument>
            Example: node helloWorld.js Welocome to JavaScript.
*/
// Define a function that prints a little greeting.
function helloWorld () {
    //Get the name from the command line, using 'World' as a fallback.
    var name;
    if (process.argv.length >= 2) {
        name = process.argv[2];
    } else {
        name = "World!";
    }
    return console.log(`Hello, ${name}!`);
}

helloWorld();