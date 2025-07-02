const readline = require('readline-sync')

console.log('Welcome to the calculator!'); 

console.log('Please enter the operator'); 
const operator = readline.prompt();

console.log('Please enter the first number:'); 
const string1 = readline.prompt();
const num1 = +string1; 

console.log('Please enter the second number:'); 
const string2 = readline.prompt();
const num2 = +string2; 

/** 
if (operator1 == "+") {
  console.log('The answer is: ' + (num1 + num2)); 
} else if (operator1 == "-") {
    console.log('The answer is: ' + (num1 - num2)); 
} else if (operator1 == "*") {
    console.log('The answer is: ' + (num1 * num2)); 
} else if (operator1 == "/") {
    console.log('The answer is: ' + (num1 / num2)); 

}; 
*/

let answer; 

switch (true) {
    case operator == "+":
      answer = num1 + num2; 
         break; 
    case operator == "-":
      answer = num1 - num2; 
        break; 
    case operator == "*":
      answer = num1 * num2; 
        break; 
    case operator == "/":
      answer = num1 / num2; 
        break; 
    default: 
        console.log("The operator is not valid"); 
}; 

console.log(answer); 