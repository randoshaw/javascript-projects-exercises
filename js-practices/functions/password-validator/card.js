// Write a getCard() function which returns a random playing card object, like:
//     {
//       value: 'K'
//       suit: 'clubs'
//     }
// Pick a random value from:
// 1,2,3,4,5,6,7,8,9,10,J,Q,K,A
// Pick a random suit from :
// clubs, spades, hearts, diamonds
// return both in an object

// function getCard() {
// 	const values = [
// 		'1',
// 		'2',
// 		'3',
// 		'4',
// 		'5',
// 		'6',
// 		'7',
// 		'8',
// 		'9',
// 		'10',
// 		'J',
// 		'Q',
// 		'K',
// 		'A'
// 	]
// 	const valIndex = Math.floor(Math.random() * values.length)
// 	const value = values[valIndex]

// 	const suits = ['clubs', 'spade', 'hearts', 'diamonds']
// 	const suitIndex = Math.floor(Math.random() * suits.length)
// 	const suit = suits[suitIndex]
// 	console.log(value, suit)
// 	return { value: value, suit: suit }
// }

///// Not duplicating code by using a function to pass though getCard()

function pick(arr) {
	const index = Math.floor(Math.random() * arr.length)
	return arr[index]
}

function getCard() {
	const values = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'J',
		'Q',
		'K',
		'A'
	]

	// const value = pick(values)
	// const suits = ['clubs', 'spade', 'hearts', 'diamonds']
	// const suit = pick(suits)
	// return { value: value, suit: suit }

  // using the 'pick' function inline with the return
  // Variable declarations, then return object where value (key) is set to the return result of picking a value from pick function. 

	const suits = ['clubs', 'spade', 'hearts', 'diamonds']
	return { value: pick(values), suit: pick(suits) }
}
