var readline = require('readline');
var iterTriangle = require('./opdracht1.js').iterTriangle;
var flipText = require('./opdracht3.js').flipText;
var recurTriangle = require('./opdracht1.js').recurTriangle;
var checkPalindrome = require('./opdracht3').checkPalindrome;
var recurFibonacci = require('./opdracht2.js').recurFibonacci;
var iterFibonacci = require('./opdracht2.js').iterFibonacci;
//setup properties for the readline
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//kick off the display function 
display();

//this function holds the logic needed to display the assignment selection and responses. The logic of the assignments is set in seperate functions.
function display() {
    rl.question("Select an assignment\n", function (answer) {
        // TODO: Log the answer in a database
        switch (answer) {
        case "close":
            rl.close();
            break;
        case "1.1":
            rl.question("Input a number to use with the iterative triangle function \n", function (answer) {
                console.log("Resulting number: ", iterTriangle(answer));
                display(); //result given, restart the display prompt
            });
            break;


        case "1.2":
            rl.question("Input a number to use with the recursive triangle function \n", function (answer) {
                console.log("Resulting number: ", recurTriangle(answer - 2, 0));
                display(); //result given, restart the display prompt
            });
            break;


        case "2.1":
            rl.question("Input a number to use with the iterative fibonacci function \n", function (answer) {
                console.log("Resulting number: ", iterFibonacci(answer));
                display(); //result given, restart the display prompt
            });
            break;

        case "2.2":
            rl.question("Input a number to use with the recursive fibonacci function \n", function (answer) {
                console.log("Resulting number: ", recurFibonacci(answer));
                display(); //result given, restart the display prompt
            });
            break;

        case "3.1":
            rl.question("Input a string to flip \n", function (answer) {
                console.log("Resulting string: ", flipText(answer));
                display(); //result given, restart the display prompt
            });
            break;

        case "3.3":
            rl.question("Input a palindrome to check\n", function (answer) {
                console.log("Resulting boolean: ", checkPalindrome(answer));
                display(); //result given, restart the display prompt
            });
            break;

        default:
            console.log("Input incorrect, select 1 through 4");
            display(); //result given, restart the display prompt
            break;
        }
    });
}