// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet. Ignore string casing.

// indexOf returns -1 if it can't find character

function isPangram(str) {
	let lowerCased = str.toLowerCase()
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (lowerCased.indexOf(char) === -1) {
			return false
		}
	}
	return true
}

// console.log(isPangram('the five boxing wizards jump quickly')) // true
// console.log(isPangram('The five boxing WIZARDS jump quickly')) // true
// console.log(isPangram('the five boxing wizards jump quick')) // false - missing  l & y

// Using includes. The method isn't supported in IE. It is a boolean method, don't have to use comparison operators

function isPangram2(str) {
	let lowerCased = str.toLowerCase()
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (!lowerCased.includes(char)) { //
			return false
		}
	}
	return true
}

console.log(isPangram2('the five boxing wizards jump quickly')) //true
console.log(isPangram2('The five boxing WIZARDS jump quickly'))  // true
console.log(isPangram2('the five boxing wizards jump quick')) // false
console.log(isPangram2('The five boxing WIZARDS jump quickly!'))  // true
