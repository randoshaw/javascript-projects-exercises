let num = 34.535

console.log(num.toFixed()) // 35 - note the rounding, no fractional part
console.log(num.toFixed(1)) // 34.5
console.log(num.toFixed(2)) // 34.53
console.log(num.toFixed(3)) // 34.535
console.log(num.toFixed(4)) // 34.5350

let num2 = 4567.7899
console.log(num2.toFixed()) // 4568 - note the rounding
console.log(num2.toFixed(1)) // 4567.8
console.log(num2.toFixed(2)) // 4567.79
console.log(num2.toFixed(3)) // 4567.790
console.log(num2.toFixed(4)) // 4567.7899
console.log(num2.toFixed(5)) // 4567.78990

console.log(Math.round(num)) // 35
console.log(Math.floor(num)) // 34
console.log(Math.ceil(num)) // 35

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min // Without the '+ min' it would only find a number between 0-10
console.log(randomNum)

// Guess number between 1-5
const guessNum = num => {
	let min = 1
	let max = 5
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
  
  return num === randomNum // if true, it will return true, if false, return false
}

console.log(guessNum(3))
