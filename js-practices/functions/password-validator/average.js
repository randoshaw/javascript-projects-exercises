// Write a function to find the avereage value in an array of numbers
//avg([0, 50]) //25

// Using 'for of' loop
function avg(arr) {
	let total = 0
	// loop over each num
	for (let num of arr) {
		// add them together
		total += num
	}
	// divide by number of nums
	return total / arr.length
}
