// A method is an object property whose value is a function
// 'this' references the object it's defined on.
let restaurant = {
	name: 'Cafe Sabor',
	guestCapacity: 75,
	guestCount: 0,
	// // Why won't the arrow function work? Because arrow functions refer to the window - global scoped?
	// checkAvailability: (partySize) => {
	//   console.log(partySize.name)
	// 	return true
	// }
	checkAvailability: function (partySize) {
		// console.log(this)
		let seatsLeft = this.guestCapacity - this.guestCount
		return partySize <= seatsLeft
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize
  }
}

/**
 * Changing via method calls
 * seatParty - takes party size to be seated and adds it on to guest count
 * removeParty - takes party size that's leaving the restuarant and removes it from guestCount
 */

 restaurant.seatParty(72)
 console.log(restaurant.checkAvailability(4)) // false
 restaurant.removeParty(5)
 console.log(restaurant.checkAvailability(4)) // true


/** 
 * By using objects and methods, we're able to create a self-contained unit where the functionality of our methods are stored alongisde the data theat they work on. 
 */
