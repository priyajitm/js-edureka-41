/* 
Goal

Name: John
Score: 5

Name: Jane
Score: 5

Functionality:
Increase the score of users

Other Functionality:
Increase score
Decrease score
Delete user
log in user
log out user
add image
get score
and more

*/

/* 
--------------------------------------------------
First Solution
--------------------------------------------------
*/

const user1 = {
    name: 'John',
    score: 5,
    increaseScore: function() {
        this.score++;
    }
}

user1.increaseScore();

const user2 = {}
user2.name = 'Jane';
user2.score = 5;
user2.increaseScore = function() {
    this.score++;
}

const user3 = Object.create(null)
user3.name = 'John';
user3.score = 5;
user3.increaseScore = function() {
    this.score++;
}


/* 
--------------------------------------------------
Second Solution - because first is repetitive
--------------------------------------------------
*/

// Generate Objects using function

function createUser(name, score) {
    const newUser = {}
    newUser.name = name;
    newUser.score = score;
    newUser.increaseScore = function() {
        this.score++;
    }
    return newUser;
}

const user4 = createUser('John', 5);
const user5 = createUser('Jane', 5);
user4.increaseScore();

// Problem: Using memory space as Functions are just copies
// Solution: Use Prototypes as a functions storage area

/* 
--------------------------------------------------
Third Solution
--------------------------------------------------
*/

function createUser1 (name, score) {
    const newUser = Object.create(userPrototype);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userPrototype = {
    increaseScore: function() {
        this.score++;
    }
}

const user6 = createUser1('John', 5);
const user7 = createUser1('Jane', 5);
user6.increaseScore();

// Achieves our goal but not standard

/* 
--------------------------------------------------
New Keyword
1. creates a new object
2. copies the properties of the object
3. returns the new object
--------------------------------------------------
*/

/* 
--------------------------------------------------
Fourth Solution
--------------------------------------------------
*/

function CreateUser2 (name, score) {
    newUser.name = name;
    newUser.score = score;
}

CreateUser2.prototype.increaseScore = function() {
    this.score++;
}

const user8 = new CreateUser2('John', 5);

user8.increaseScore();

// Standard practice is to user uppercase letter so we know we have to use new

/* 
--------------------------------------------------
Fifth and Final Solution
--------------------------------------------------
*/

class User {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    increaseScore() {
        this.score++;
    }
}

const user9 = new User('John', 5);
user9.increaseScore();