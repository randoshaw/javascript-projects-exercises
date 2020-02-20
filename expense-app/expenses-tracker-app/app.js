const balance = document.querySelector('#balance')
const moneyPlus = document.querySelector('#money-plus')
const moneyMinus = document.querySelector('#money-minus')
const list = document.querySelector('#list')
const form = document.querySelector('#form')
const text = document.querySelector('#text')
const amount = document.querySelector('#amount')

// const dummyTransactions = [
// 	{ id: 1, text: 'Case', amount: -20 },
// 	{ id: 2, text: 'Payday', amount: 300 },
// 	{ id: 3, text: 'Gas', amount: -10 },
// 	{ id: 4, text: 'Photo Shoot', amount: 150 }
// ]

// It will come out as a string. JSON.parse turns it into an arary
const localStorageTransactions = JSON.parse(
	localStorage.getItem('transactions')
)

let transactions =
	localStorage.getItem('transactions') !== null ? localStorageTransactions : []

// Add transaction
function addTransaction(e) {
	e.preventDefault()

	// trim() removes whitespace from both sides of a string
	if (text.value.trim() === '' || amount.value.trim() === '') {
		alert('Please enter a Text and Amount')
	} else {
		const transaction = {
			id: generateID(),
			text: text.value,
			amount: +amount.value // the '+' converts string into integer
		}

		// console.log(transaction)

		// Push to end of array
		transactions.push(transaction)
		// Add it to the DOM
		addTransactionDOM(transaction)
		// Update thevalues
		updateValues()

		updateLocalStorage()

		// Clear the values
		text.value = ''
		amount.value = ''
	}
}

// Generate random ID
function generateID() {
	return Math.floor(Math.random() * 100000000)
}

// Add transactions to DOM list

function addTransactionDOM(transaction) {
	// get income or expense
	const sign = transaction.amount < 0 ? '-' : '+'

	const item = document.createElement('li')

	// Add class based on value
	item.classList.add(transaction.amount < 0 ? '-' : '+')

	// Math.abs ==> if -num, will turn to +num (absolute num)
	item.innerHTML = `
  ${transaction.text} <span>${sign}${Math.abs(
		transaction.amount
	)}</span> <button" class="delete-btn" onclick="removeTransaction(${
		transaction.id
	})">x</button">
  `

	list.appendChild(item)
}

// Update the balance, income and expense
function updateValues() {
	const amounts = transactions.map(transaction => transaction.amount)

	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2) // toFixed adds 2 decimal places

	const income = amounts
		.filter(item => item > 0)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2)

	const expense = (
		amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
		-1
	).toFixed(2)

	// console.log(total) // 420.00
	// console.log(income) // 450.00
	// console.log(expense) // 30.00

	balance.innerText = `$${total}`
	moneyPlus.innerText = `$${income}`
	moneyMinus.innerText = `$${expense}`
}

// Reomove transaciton by ID
function removeTransaction(id) {
	transactions = transactions.filter(transaction => transaction.id !== id)

	updateLocalStorage()

	init()
}

// Update local storage transactions
function updateLocalStorage() {
	localStorage.setItem('transactions', JSON.stringify(transactions))
}

// Initial app
function init() {
	list.innerHTML = ''

	transactions.forEach(addTransactionDOM)
	updateValues()
}

init()

form.addEventListener('submit', addTransaction)
