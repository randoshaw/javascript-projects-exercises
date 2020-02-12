/**
 * Create an object and modify its properties
 */

// let myObject

// myObject = {
// 	a: 10,
// 	b: 'abc'
// }

// console.log(myObject)

// myObject.a = 15

// console.log(myObject)

// myObject.c = true

// console.log(myObject)

// delete myObject.b

// console.log(myObject)

// console.log(myObject.a)

// const myOtherObj = myObject

// console.log(myOtherObj)

// myObject.c = false

// console.log('myObject.c', myOtherObj)

// myOtherObj.c = true

// console.log('myOtherObj.c', myOtherObj)

// let myThirdObj = myOtherObj

// console.log(myThirdObj)

// myThirdObj.d = 'taco'

// console.log('myThirdObj.d', myThirdObj)

// console.log(myObject.d)

// myOtherObj.d = 'burrito'

// console.log(myOtherObj.d)

//////////////////////////

// /**
//  * CHALLENGE 1
//  *
//  * Create variable called "myPost".
//  * Initial value should be {}
//  * Add property called "postTitle" and value "Object is reference type"
//  * Add one more property "postLikes" with value 0
//  * Add third property "shared" and set its value to "false"
//  * Increase value of the "postLikes" by 1
//  * Delete property "shared"
//  */

// let myPost = {}

// myPost.postTitle = "Object is a reference type"

// myPost.postLikes = 0

// myPost.shared = false
// console.log(myPost)

// // myPost.postLikes = myPost.postLikes + 1
// // myPost.postLikes = + 1
// myPost.postLikes += 1

// delete myPost.shared

// console.log('myPost', myPost)

/////////////////

/**
 * EXAMPLE 2
 *
 * Use "const" for object declaration
 */
// When using 'const' for variable declaration, you're not able to reassign value to the variable, BUT you can mutate value itself if it is mutable. Oject values ARE MUTABLE!

// const myObject = {};

// myObject.a = true; // NO ERROR! Variable is not reassigned

// console.log(myObject);

// myObject = {
//   a: true
// }; // Uncaught TypeError: Assignment to constant variable.

////

// /**
//  * CHALLENGE 2
//  *
//  * Create variable "myObject" and add property "a" - 10.
//  * Create another variable "copyOfMyObject" and its value should be myObject.
//  * Add new property "b" with value false to the "copyOfMyObject".
//  * Print to the console "myObject" and "copyOfMyObject" and interpret results.
//  */

// let myObject = {
//   a: 10
// }

// const copyOfMyObject = myObject

// copyOfMyObject.b = false

// console.log(myObject)
// console.log(copyOfMyObject)

// myObject.b = 'string'

// console.log(myObject, copyOfMyObject)

// copyOfMyObject.b = 5

// console.log(myObject, copyOfMyObject)

////

// Using Bracket Notation

// let myObject = {
// 	a: true,
// 	b: null,
// 	c: 25
// }

// console.log(myObject['a']) // Must use '', else js will look for variable named a

// const propertyName = 'c'

// console.log(myObject[propertyName]) // returns 25. js looks for variable called propertyName, and its value is c, whose value is 25

// console.log(myObject['propertyName']) // undefined because propertyName is missing in myObject object. It only has 3 keys - a,b,c.

// myObject['new' + 'Property' + 'Name'] = 'Value for dynamically computed property name'
// console.log(myObject) // property concats into newPropertyName

////

/**
 * Missing properties
 */
// const myObject = {
//   a: 3,
//   b: true
// };

// // Code execution is not stopped
// console.log(myObject.c); // undefined

// console.log(myObject.absentProperty); // undefined

// // // Code execution is STOPPED
// // console.log(nonDeclaredVariable); // Uncaught ReferenceError: nonDeclaredVariable is not defined

// // NEVER ASSIGN "undefined" to any property or variable. Won't be able to tell whether the property is present or not. Use "null" instead
// myObject.newPropertyWithUndefinedValue = undefined;

// console.log(myObject);
// console.log(myObject.newPropertyWithUndefinedValue);

// /**
//  * CHALLENGE 3
//  * 
//  * Create object "objectWithNestedObject" with initial value {}.
//  * Add property "nestedObject" with initial value {}.
//  * Add property "a" with value "null" to "nestedObject". Use dot notation
//  * Add property "b" with value "true" to "nestedObject". Use bracket notation. Create new variable with property name
//  */

let objectWithNestedObject = {};
objectWithNestedObject.nestedObject = {};

objectWithNestedObject.nestedObject.a = null;

const newPropertyName = "b";

objectWithNestedObject.nestedObject[newPropertyName] = true;

console.log(objectWithNestedObject); // { nestedObject: { a: null, b: true } }

console.log(objectWithNestedObject.nestedObject.b) // true