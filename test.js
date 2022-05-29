/* 

Data Types: Primitive & Reference

Primitives:
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Symbols

Reference:
1. Object
2. Array
3. Function
4. Date
5. RegExp
6. Error
7. Math
8. JSON
9. Map
10. Set
11. WeakMap
12. WeakSet
13. Promise
14. Symbol

*/


/*

Booleans:
1. true
2. false

Truthy Values:
1. all values that are not false

Falsy Values:
1. undefined
2. null
3. 0
4. ''
5. NaN

Boolean Methods:
1. toString() - returns a string representing the Boolean object.
2. valueOf() - returns the primitive value of a Boolean object.

Undefined:
1. default value of a variable

NAN:
1. Not a Number
2. Not a Number is a value that is returned by a function 
   when a numeric value is expected but the function does not 
   have enough information to return a numeric value.

Symbols:
1. unique identifier
2. symbols are not enumerable in for...in loops
3. symbols are not iterable in for...of loops
4. symbols are not writable
5. symbols are not configurable
6. symbols are not deletable
7. symbols are not accessable
8. symbols are not callable
9. symbols are not constructable

*/


/*
Variables is used as an identifier to store data.
variables are declared using the keyword var.
var is used to declare a variable.
var has two parts:
1. variable name
2. variable value

var is global scoped.
Default value of variable is undefined.

Variable name that starts with a number is not allowed.
Variable name that starts with a special character is not allowed.
Variable names can not have spaces.
Variable names can not have special characters.
Variable names can not have reserved keywords.

111firstName = 'John';
first-Name = 'John';
!@ = 'John';
var first name = null

Variable name that starts with a lowercase letter is allowed.
Variable name that starts with a underscore is allowed.
Variable name that starts with a dollar sign is allowed.

*/


/*

String - "Hello World"
String is a primitive data type.
String is a sequence of characters.
String is immutable.

String elements are indexed by their position in the string.
String elements start at position 0.
String elements end at position length - 1.

String Methods:
1. charAt() - returns the character at the specified index.
2. charCodeAt() - returns the Unicode of the character at the specified index.
3. concat() - joins two or more strings, and returns a new joined strings.
4. indexOf() - returns the position of the first found occurrence of a specified value in a string.
5. lastIndexOf() - returns the position of the last found occurrence of a specified value in a string.
6. localeCompare() - compares two strings in the current locale.
7. match() - searches a string for a match against a regular expression, and returns the matches.
8. replace() - returns a new string with some or all matches of a pattern replaced by a replacement.
9. search() - searches a string for a match against a regular expression, and returns the position of the match.
10. slice() - extracts a section of a string and returns a new string.
11. split() - splits a string into an array of substrings.
12. substr() - returns the characters in a string beginning at the specified location through the specified number of characters.
13. substring() - returns the characters in a string between two indexes.
14. toLowerCase() - returns the calling string value converted to lower case.
15. toUpperCase() - returns the calling string value converted to upper case.
16. trim() - removes whitespace from both ends of a string.
17. toString() - returns a string representing the specified object.
18. valueOf() - returns the primitive value of a String object.

*/


/*

Number is a primitive data type.
Number is a numeric data type.
Number is a floating point number.
Number is a subtype of the Number object.

Number Methods:
1. toExponential() - returns a string representing the Number object in exponential notation.
2. toFixed() - returns a string representing the Number object in fixed-point notation.
3. toLocaleString() - returns a string representing the Number object according to the formatting rules of the locale.
4. toPrecision() - returns a string representing the Number object to the specified precision.
5. toString() - returns a string representing the Number object.
6. valueOf() - returns the primitive value of a Number object.
7. parseFloat() - parses a string argument and returns a floating point number.
8. parseInt() - parses a string argument and returns an integer.
9. isInteger() - determines whether the value is an integer.
10. isNaN() - determines whether the value is an illegal number.
11. isFinite() - determines whether the value is a finite number.
12. isSafeInteger() - determines whether the value is a safe integer.

*/

/*

Math Methods:
1. Math.abs() - returns the absolute value of a number.
2. Math.acos() - returns the arccosine of a number.
3. Math.acosh() - returns the hyperbolic arccosine of a number.
4. Math.asin() - returns the arcsine of a number.
5. Math.asinh() - returns the hyperbolic arcsine of a number.
6. Math.atan() - returns the arctangent of a number.
7. Math.atanh() - returns the hyperbolic arctangent of a number.
8. Math.atan2() - returns the arctangent of the quotient of its arguments.
9. Math.cbrt() - returns the cube root of a number.
10. Math.ceil() - returns the smallest integer greater than or equal to a number.
11. Math.clz32() - returns the number of leading zero bits in the 32-bit binary representation of a number.
12. Math.cos() - returns the cosine of a number.
13. Math.cosh() - returns the hyperbolic cosine of a number.
14. Math.exp() - returns e (the base of natural logarithms) raised to the power of a number.
15. Math.expm1() - returns e (the base of natural logarithms) raised to the power of a number, subtract 1.
16. Math.floor() - returns the largest integer less than or equal to a number.
17. Math.fround() - returns a number value that is the nearest number to the argument and, if the number is midway between two others, the even one.
18. Math.hypot() - returns the square root of the sum of squares of its arguments.
19. Math.imul() - returns the result of the 32-bit multiplication of the two parameters.
20. Math.log() - returns the natural logarithm (base e) of a number.
21. Math.log1p() - returns the natural logarithm (base e) of 1 + a number.
22. Math.log10() - returns the base 10 logarithm of a number.
23. Math.log2() - returns the base 2 logarithm of a number.
24. Math.max() - returns the largest of zero or more numbers.
25. Math.min() - returns the smallest of zero or more numbers.
26. Math.pow() - returns a number raised to a power.
27. Math.random() - returns a floating-point, pseudo-random number in the range [0, 1).
28. Math.round() - returns the value of a number rounded to the nearest integer.
29. Math.sign() - returns the sign of a number, indicating whether the number is positive, negative or zero.
30. Math.sin() - returns the sine of a number.
31. Math.sinh() - returns the hyperbolic sine of a number.
32. Math.sqrt() - returns the square root of a number.
33. Math.tan() - returns the tangent of a number.
34. Math.tanh() - returns the hyperbolic tangent of a number.
35. Math.trunc() - returns the integer part of a number, removing any fractional digits.

*/