/*

Differences of Let & Var

1. Var is globally scoped or blocked scoped
2. var can be redeclared within its scope
3. var can be declared without initialization
4. in case of hoisting, var will be initialized as undefined

1. Let is blocked scoped
2. Let can't be re-declared within its scope
3. let can be declared without initialization
4. in case of hoisting, let will not be initialized 
*/

// Differences between const and let
// 1. const cannot be re-declared or updated
// 2. const must be initialized during declaration

function outer() {
    let counter = 0
    function incrementCounter() {
        counter++
    }
    return incrementCounter
}

const myNewFunction = outer()
myNewFunction()
myNewFunction()