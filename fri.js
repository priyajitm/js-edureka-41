


// pop - push
// shift - unshift
// sort
// concat
// map

// let arr3 = []

// console.log(arr1.map(num => num > 2))

// arr1.map(num => {
//     if (num > 3) {
//         arr3.push(num)
//     }
// })

/*

slice
1. takes two parameters of index
2. cuts the array from start of each passed index
3. returns the trimmed values
4. does not mutate existing array

splice
1. takes two parameters of index
2. cuts from begining of the first index and includes the last index of passed indedxes in parameters as argument
3. returns the trimmed values
4. mutates the original array


Object

const newVal = {
    'name': 'John' 
 }


*/
// const user = {
//     'name': 'John' ,
//     'lastName' : 'Smith',
//     'address' : {
//         'house' : '2',
//         'streetName': 'someStreet',
//         'city' : 'someCity'
//     },
//     pets : [{dog : 'tommy'}, {cat: 'meao'}],
//     score: 1,
//     increment: function() {
//         this.score++
//     },
//     decrement: function() {
//         this.score--
//     }
//  }


 

// console.log(employee1.lastName)
// user.name = 'Jane'
// user['name'] = 'john'
//user.increment()
// user.decrement()
//  console.log(user.decrement())

/*
1. primitives
2. objects/reference

*/



const user = {
    'name': 'John' ,
    'lastName' : 'Smith',
    'address' : {
        'house' : '2',
        'streetName': 'someStreet',
        'city' : 'someCity'
    },
    pets : [{dog : 'tommy'}, {cat: 'meao'}],
    score: 1,
    increment: function() {
        this.score++
    },
    decrement: function() {
        this.score--
    }
 }

//  for (let key in user) {
//     console.log(user[key])
//  }

//  const some = 'name'
//  console.log(user[some])

const func = () => {
    console.log('hfhf')
}

func['something'] = 'something'