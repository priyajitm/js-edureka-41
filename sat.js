// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let data1 = [11, 22, 33]
// let res = data.concat(data1)
// console.log(res)

// function isGreaterThan5 (num) {
//     return num > 5
// }

// console.log(data.some(isGreaterThan5))
/*
1. concat - joins two or more arrays
2. every -  checks if all elements in an array pass a test
3. some - checks if some elements in an array pass a test
7. findIndex - returns the index of the first element in an array that satisfies a given condition
8. forEach - calls a function for each element in an array
9. includes - determines whether an array includes a certain value
10. indexOf - returns the first index in an array that corresponds to a given value
11. lastIndexOf - returns the last index in an array that corresponds to a given value
12. join - joins all elements of an array into a string
13. reverse - reverses the order of the elements in an array
14. slice - extracts a section of an array and returns a new array
15. sort - sorts the elements of an array in place
16. splice - changes the contents of an array by removing or replacing existing elements
17. toString - returns a string representing the array
18. unshift - adds one or more elements to the beginning of an array
19. pop - removes the last element of an array
20. push - adds one or more elements to the end of an array
21. shift - removes the first element of an array

4. filter - creates a new array with every element that passes a test
5. map - creates a new array with the result of calling a function on each element in an array
6. reduce - reduces an array to a single value



//const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

1. for loop
2. while loop
3. do while loop
4. for in loop
5. for of loop

while loop
 while (condition) {
     //code block
 }

 do while loop

 do{
     //code logic
 } while (condition)

 for loop



*/

const newArray = ['hello', 'how are you']

// while (num < 10) {
//     num++
//     console.log(num)
// }

// do {
//     num++
//     console.log(num)
// } while(num < 5)
for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i])
}