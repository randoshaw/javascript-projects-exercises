let notes = []

const filters = {
	searchText: ''
}

//** Check for existing saved data */
const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null) {
	notes = JSON.parse(notesJSON)
}

// const user = {
// 	name: 'Rando',
// 	age: 29
// }
// //** How to store object in local storage: use method on global variable called JSON (Javascript Object Notation) */
// // // stringify takes in object/array and returns a string.
// const userJSON = JSON.stringify(user)
// console.log(userJSON) // -> {"name":"Rando","age":29} // keys are also wrapped in double quotes
// localStorage.setItem('user', userJSON) // -> user:"{"name":"Rando","age":29}" // userJsSON is string rep of object

// // ** Getting data out of local storage. Read the value using getItem */
// const getUserJSON = localStorage.getItem('user')
// //** Convert JSON back into normal js object */
// const user = JSON.parse(getUserJSON)
// console.log(`${user.name} is ${user.age}`) // -> Rando is 29

//** CRUD in local storage */
// C: Create - setItem requires key and value
// localStorage.setItem('location', 'Utah')
// // R: Read - reads data from local storage and dumps it in the console.
// console.log(localStorage.getItem('location'))
// // U: Update - also uses setItem to update
// localStorage.setItem('location', 'Salt Lake') //?
// D: Delete - uses 1 argument, the key
// localStorage.removeItem('location') // after browser refresh, returns 'null'

// // Delete all data stored in localStorage
// localStorage.clear()
//** */

const renderNotes = function(notes, filters) {
	const filteredNotes = notes.filter(function(note) {
		return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
	})

	document.querySelector('#notes').innerHTML = ''

	filteredNotes.forEach(function(note) {
		const noteEl = document.createElement('p')

		if (note.title.length > 0) {
			noteEl.textContent = note.title
		} else {
			noteEl.textContent = 'Unnamed note'
		}

		document.querySelector('#notes').appendChild(noteEl)
	})
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
	// e.target.textContent = 'The button was clicked'
	notes.push({
		title: '',
		body: ''
	})
	localStorage.setItem('note', JSON.stringify(notes))
	renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
	filters.searchText = e.target.value
	renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
	console.log(e.target.value)
})

// document.querySelector('#for-fun').addEventListener('change', function (e) {
//     console.log(e.target.checked)
// })
