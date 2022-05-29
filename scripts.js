/*
Math Methods

Math.random(); // returns a random number between 0 and 1
Math.floor(Math.random() * 10); // returns a random number between 0 and 10
Math.ceil(Math.random() * 10);
console.log(Math.random())
console.log(Math.floor(Math.random() * 10))
console.log(Math.ceil(Math.random() * 10))

var one = Math.floor(3.7); // returns 3
var two = Math.ceil(3.7); // returns 4
var three = Math.round(3.5); // returns 4
var four = Math.min(1, 2, 3, 4, 5) // returns 1
var five = Math.max(1, 2, 3, 4, 5) // returns 5
Math.pow(2, 4); // returns 16
Math.pow(2, 4) * 2; // returns 32
Math.pow(2, 4) * 2 + 1; // returns 33

console.log(four, five)
*/

/*
If-Else

if-else statement:
1. if-else statement is used to execute a block of code if a specified condition is true.
2. if-else statement is used to execute a block of code if a specified condition is false.
3. if-else statement is used to execute a block of code if a specified condition is true or false.
4. if-else statement is used to execute a block of code if a specified condition is true and false.
5. if-else statement is used to execute a block of code if a specified condition is false and true.
6. if-else statement is used to execute a block of code if a specified condition is true, false, and undefined.
7. if-else statement is used to execute a block of code if a specified condition is false, true, and undefined.
8. if-else statement is used to execute a block of code if a specified condition is true, false, and undefined.

switch statement:
1. switch statement is used to execute a block of code based on different cases.

Switch statement examples
1. switch (expression) {
    case label1:
        // code block
        break;
    case label2:
        // code block
        break;
    default:
        // code block
}

*/


// if (num === 1 )
// {
//     console.log('Number is One')
// } else if ( num === 2) {
//     console.log('Num is two')
// }
// else {
//     console.log('Number is not one or two')
// }

// if (num > 0) {
//     console.log('Num is Positive')
// } else if (num < 0) {
//     console.log('Num is negative')
// } else {
//     console.log('Num is zero')
// }

// condition ? do something : do something else

// num > 0 ? console.log('Num is positive') : num < 0 ? console.log('Num is negative') : console.log('Num is zero')

// if (num) {
//     console.log('true')
// } 

// switch (num) {
//     case 1:
//         console.log('num is one')
//         break;
//     case 2:
//         console.log('num is two')
//         break;
//     default:
//         console.log('num is neither one or two')
// }

var num = 2;

switch (true) {
    case (num > 0):
        console.log('num is either positive')
    case (num < 0):
        console.log('num is negative')
        break;
    default:
        console.log('num is zero')
}