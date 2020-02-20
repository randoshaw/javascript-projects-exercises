// The ugly way by writing everything using functions

// initializeDeck creates deck of cards in order
function initializeDeck() {
	const deck = []
	const suits = ['hearts', 'diamonds', 'spades', 'clubs']
	const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A'
	for (let value of values.split(',')) {
		for (let suit of suits) {
			deck.push({
				value,
				suit
			})
		}
	}
	return deck
}

// pass in the deck and drawnCards to keep track of cards drawn from the deck
function drawCard(deck, drawnCards) {
	const card = deck.pop()
	drawnCards.push(card)
	return card
}

function drawMultiple(numCards, deck, drawnCards) {
	const cards = []
	for (let i = 0; i < numCards; i++) {
		cards.push(drawCard(deck, drawnCards))
	}
	return cards
}

function shuffle(deck) {
	// loop over array backwards
	for (let i = deck.length - 1; i > 0; i--) {
		// pick random index before current element
		let j = Math.floor(Math.random() * (i + 1))
		// swap
		;[deck[i], deck[j]] = [deck[j], deck[i]]
	}
	return deck
}

// UGLY- create a bunch of variables:
const firstDeck = initializeDeck()
const drawnCards = []
shuffle(firstDeck)
// pass a ton of arguments around:
const hand1 = drawMultiple(2, firstDeck, drawnCards)
const hand2 = drawMultiple(2, firstDeck, drawnCards)
const pokerHand = drawMultiple(5, firstDeck, drawnCards)

// BETTER way using an Object + Methods. 

function makeDeck() {
	const deck = []
	const suits = ['hearts', 'diamonds', 'spades', 'clubs']
	const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A'
	for (let value of values.split(',')) {
		for (let suit of suits) {
			// deck.push({ value: value, suit: suit })
			deck.push({ value, suit })
		}
	}
	return deck
}

function drawCard(deck) {
	return deck.pop()
}

// // Draw a card
// const myDeck = makeDeck()
// const card1 = drawCard(myDeck)

// moved suits and values from variables into properties on the object. Might want them in other methods

// const myDeck = {
// 	deck: [],
// 	drawnCards: [],
// 	suits: ['hearts', 'diamonds', 'spades', 'clubs'],
// 	values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
// 	initializeDeck() {
// 		const { suits, values, deck } = this
// 		for (let value of values.split(',')) {
// 			for (let suit of suits) {
// 				// deck.push({ value: value, suit: suit })
// 				deck.push({
// 					value,
// 					suit
// 				})
// 			}
// 		}
// 		// return deck;
// 	},
// 	drawCard() {
// 		const card = this.deck.pop()
// 		this.drawnCards.push(card)
// 		return card
//   },
//   drawMultiple(numCards) {
//     const cards = []
//     for (let i = 0; i < numCards; i++){
//       cards.push(this.drawCard())
//     }
//     return cards;
// },
// // Fisher Yates shuffle - starts from the end of array and swaps places
// shuffle() {
//   const {deck} = this
//   // Loop over array backwards
//   for (let i = deck.length -1; i > 0; i--) {
//     // pick random index before current element
//     let j = Math.floor(Math.random() * (i + 1))
//     // swap
//     ;[deck[i], deck[j]] = [deck[j], deck[i]]
//   }
// }
// }

// Making a deck factory function that makes a deck, copying everything in the myDeck function :

const makeDeck2 = () => {
  return {
		deck: [],
		drawnCards: [],
		suits: ['hearts', 'diamonds', 'spades', 'clubs'],
		values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
		initializeDeck() {
			const { suits, values, deck } = this
			for (let value of values.split(',')) {
				for (let suit of suits) {
					// deck.push({ value: value, suit: suit })
					deck.push({
						value,
						suit
					})
				}
			}
			// return deck;
		},
		drawCard() {
			const card = this.deck.pop()
			this.drawnCards.push(card)
			return card
		},
		drawMultiple(numCards) {
			const cards = []
			for (let i = 0; i < numCards; i++) {
				cards.push(this.drawCard())
			}
			return cards
		},
		// Fisher Yates shuffle - starts from the end of array and swaps places
		shuffle() {
			const { deck } = this
			// Loop over array backwards
			for (let i = deck.length - 1; i > 0; i--) {
				// pick random index before current element
				let j = Math.floor(Math.random() * (i + 1))
				// swap
				;[deck[i], deck[j]] = [deck[j], deck[i]]
			}
		}
	}
}


// Much better way than the ugly way. 
// All relevant information of all values are stored together in myDeck - Don't have to manage the drawn cards vs the deck array.
const myDeck = makeDeck2()
myDeck.initializeDeck()
myDeck.shuffle()
const h1 = myDeck.drawMultiple(2)
const h2 = myDeck.drawMultiple(2)
const h3 = myDeck.drawMultiple(5)

const deck2 = makeDeck2()
deck2.initializeDeck()


