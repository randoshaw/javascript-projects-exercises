let name = '  Rando  Shaw '

// Length prop
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'mypassword123098'
console.log(password.includes('sword'))

// Trim method
console.log(name.toLowerCase().trim())

// length is more than 8 - and doesn't contain the word 'password'

// const isValidPassword = function (password) {
//   if (password.length > 8 && !password.includes('password')) {
//     return true
//   } else {
//     return false
//   }
// }

// Simplified isValidPassword. The if statement already resolves to true, so no need to have that condition then have it return true. 

const isValidPassword = function(password) {
	return (password.length > 8 && !password.includes('password'))

}

console.log(isValidPassword('thisismorethan8')) // true
console.log(isValidPassword('wontwork')) // false -needs to be bigger than 8, not equal to 8.
console.log(isValidPassword('sneakinpassword')) // false - has the word 'password'


////
