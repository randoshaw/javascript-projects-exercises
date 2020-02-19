const arr = [1, 2, 3, 4, 5]

const noFatArrow = arr.map(function(n) {
	return n + 1
})
console.log('not concise:', noFatArrow) // not concise: [ 2, 3, 4, 5, 6 ]

// es6exy that's fat and concise!
const b = arr.map(n => n + 1)
console.log('b:', b) // b: [ 2, 3, 4, 5, 6 ]

// Making a function that maps, without using the map method!
function mapMethod(array, callback) {
	const newArr = []
	array.forEach(item => {
		// debugger
		const result = callback(item)
		console.log('result for this run is:', result)
		newArr.push(result)
		console.log('pushed to newArr:', newArr)
	})
	return newArr
}

const c = mapMethod(arr, num => num + 2)
console.log('c:', c) // c: [ 3, 4, 5, 6, 7 ]

// The 'arr' array is unchanged!
console.log('arr:', arr) // a: [ 1, 2, 3, 4, 5 ]
