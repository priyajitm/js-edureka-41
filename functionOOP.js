/*

This:
1. We learned that every function gets this property automatically.
2. this is used inside a function, and will always refer to a single object — 
   the object that invokes (calls) the function where “this” is used.
3. In the global context “this” refers to either window object or is undefined 
   if the ‘strict mode’ is used.

*/

var developer = {
    firstname: 'John',
    lastname: 'Doe ',
    getDeveloperName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

developer.getDeveloperName(); 
// This will work because we are in the function scope 

var developerName = developer.getDeveloperName
developerName();
// this won’t work as the “this” will be now assigned to the global context

/*

Bind:
The bind() method creates a new function that, when called, has its this keyword 
set to the provided value.

*/

var developer = {
    firstname: 'John',
    lastname: 'Doe ',
    getDeveloperName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var developerName = function() {
    console.log(this.getDeveloperName() + 'is a Web Developer!');
};

var ourDeveloper = developerName.bind(developer); // creates new object and binds developer. 'this' of developer === developer now

ourDeveloper(); // 'John Doe is a Web Developer!'

/*
after we bind() a value we can use the function just like it was any other normal function. 
We could even update the function to accept parameters, and pass them like so:
*/
ourDeveloper('coding', 'coffee'); // John Doe loves coding and coffee

/*

The call() method calls a function with a given this value and arguments provided individually.

What that means, is that we can call any function, and explicitly specify what this should 
reference within the calling function.

The main differences between bind() and call() is that the call() method:

Accepts additional parameters as well
Executes the function it was called upon right away.
The call() method does not make a copy of the function it is being called on.

call() and apply() serve the exact same purpose. The only difference between how they work 
is that call() expects all parameters to be passed in individually, whereas apply() expects an array of all of our parameters.

*/

ourDeveloper.call(developer,'coding', 'coffee'); // John Doe loves coding and coffee
ourDeveloper.apply(developer,['coding', 'coffee']); // John Doe loves coding and coffee
