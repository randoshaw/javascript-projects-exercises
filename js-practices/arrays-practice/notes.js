const notes = [
	{
		title: 'My next trip',
		body: 'I would like to go to Spain'
	},
	{
		title: 'Habbits to work on',
		body: 'Exercise. Eating a bit better.'
	},
	{
		title: 'Office modification',
		body: 'Get a new seat'
	}
]

/** find() method -- returns the value of the first element in the array
 * that satisfies the provided testing function. Otherwise 'undefined' is returned.
 */
const findNote = function(myNotes, noteTitle) {
	return myNotes.find(function(note) {
		return note.title.toLowerCase() === noteTitle.toLowerCase()
	})
}
////

/** filter() method creates a new array with all elements that pass the test implemented by the provided function. */

const findNotes = (notes, query) => {
	return notes.filter((note, index) => {
		const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
		const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
		return isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(notes, 'work'))

// /** findIndex() method -- -1 means no match found */
// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, idx) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'some other office modification')
const note = findNote(notes, 'office modification')
// console.log(note)
