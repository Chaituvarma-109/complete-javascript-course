'use strict';

// -------------------------------------------------- Default Parameters -----------------------------------------------------------------
const bookings = [];

const createBookign = function (
  flightNumber,
  numberOfPassengers = 0,
  ticketPrice = 199 * numberOfPassengers
) {
  // ES5 default type parameters
  //   numberOfPassengers = numberOfPassengers || 1;
  //   ticketPrice = ticketPrice || 199;
  const booking = {
    flightNumber,
    numberOfPassengers,
    ticketPrice,
  };
  console.log(booking);
  bookings.push(booking);
};

createBookign('LH123');
createBookign('LH123', 10);
createBookign('LH123', undefined, 10);

// -----------------------------------------------Function Arguments Value vs Reference --------------------------------------------------
const flight = 'LH123';
const jonas = {
  namePass: 'Jonas Schmidthmann',
  passport: 12345678909,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.namePass = 'Mr. ' + passenger.namePass;

  if (passenger.passport === 12345678909) {
    alert('checked In');
  } else {
    alert('Wrong Passport');
  }
};

//checkIn(flight, jonas);

const newPassport = function (person) {
  person.passport = Math.floor(Math.random() * 13);
  console.log(person.passport);
};

// newPassport(jonas);
// checkIn(flight, jonas);

// ------------------------------------------------------- Call Back Functions -----------------------------------------------------------
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (name) {
  const [first, ...others] = name.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function
const transformer = function (str, fn) {
  console.log(`Transformed string is ${fn(str)}`);

  // Functions have Methods and Properties
  console.log(`Transformed by ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callback functions all the time.
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

// --------------------------------------------------- Functions returning functions -----------------------------------------------------
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('chaitu');
greeterHey('rakesh');

// Using Arrow Functions
const greetArr = greeting => name => {
  console.log(`${greeting} ${name}`);
};
// --------------------------------------------------- The Call and Apply Methods --------------------------------------------------------
const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNumb, name) {
    console.log(
      `${name} booked a seat in ${this.airline} flight ${this.iataCode} ${flightNumb}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNumb}`, name });
  },
};

lufthansa.book(12312, 'chaitu');

const euroWings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//book(23, 'Sarah Williams');
book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);

book.call(lufthansa, 239, 'chaitu');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'SX',
  bookings: [],
};

book.call(swiss, 443, 'Rakesh');
console.log(swiss);

//Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(euroWings, ...flightData);
console.log(euroWings);

//------------------------------------------------------Bind Method-----------------------------------------------------------------------
const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(234, 'rakesh chaitu');
bookLH(235, 'chaitu rakesh');
bookLX(236, 'varma CR');

const bookEW23 = book.bind(euroWings, 23);

bookEW23('PSCVSD');

// With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// Challenge
const addTAXC = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVATC = addTAXC(0.1);

console.log(addVATC(200));

//--------------------------------------------Immediately Invoked Function Expressions----------------------------------------------------
const runOnce = function () {
  console.log(`This is will never run again`);
};
runOnce();

(function () {
  console.log(`This is will never run again`);
})();
(() => console.log(`This is will never run again`))();

//------------------------------------------------------Closures--------------------------------------------------------------------------
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

//------------------------------------------------------Closures Examples-----------------------------------------------------------------
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, waitTime) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are boarding all ${n} passengers`);
    console.log(`There are 3 groups with ${perGroup} passengers each`);
  }, waitTime * 1000);

  console.log(`we will start boarding in ${waitTime} seconds`);
};
boardPassengers(180, 3);
