/*

Functions
- it is used to perform a specific task and specific task only
- it is used to run a group of codes together

types:

1. regular
2. Recursive function
3. named function
4. anonymous function
5. callback function
6. closure function
7. arrow function
8. constructor function





*/

// var x = 20

// function addition (num1, num2) {
//     var num1 = 2
//     var num2 = undefined
//     var res = num2 + num1
//     x = x + res
// }

// functionName(2)

// function anything(num) {
//     if (num > 10) {
//         return
//     }
//     console.log(num)
//     anything(num + 1)
// }

// anything(1)

// var myFunction = function someFunc() {
//     //logic
// }
// someFunc() // will not work
// myFunction() // this will work

// var myFunction = function () {
//     //logic
// }
// someFunc() // will not work
// myFunction() // this will work

// var welcomeMessage = function() {
//     console.log('Welcome to my website')
// }

// setTimeout(welcomeMessage, 3000)

// function addition (num1, num2) {
//     return num1 + num2
// } 

// let x = 10;

// function someThing (num1) {
//     x = x + num1
// }

function addition (num1, num2) {
    return num1 + num2
}  

function multiplication (num1, num2) {
    return num1 * num2
}

function result (func1, func2, num1, num2) {
    let add = func1(num1, num2)
    let multi = func2(num1, num2)
    console.log(add + multi)
}

result(addition, multiplication, 5, 10)