// function book() {
//   console.log(`${this.airline} and passenger name is ${this.name}`);
//   this.bookings.push({ flight: `${this.airline}`, Passenger: `${this.name}` });
// }

// const lufthansa = {
//   airline: 'lufth',
//   name: 'mary cooper',
//   bookings: [],
// };

// const eurowings = {
//   airline: 'euro',
//   name: 'chaitu',
//   bookings: [],
// };

// book.call(eurowings);
// book.call(lufthansa);

// console.log(lufthansa);
// console.log(eurowings);

// const flightData = [583, 'George Cooper'];
// book.apply(eurowings, flightData);

// const bookEW = book.bind(eurowings);
// bookEW();

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// (function () {
//   console.log(`this will never happen again`);
// })();

// code wars
// const numbers = [99, 54, 22, 101, 105];
// const target = 155;
// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] + numbers[j] === target) console.log([i, j]);
//   }
// }
// const countPer = function () {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// };

// const personCount = countPer();
// personCount();
// personCount();
// personCount();

// let f;
// const g = function () {
//   let a = 23;

//   f = function () {
//     console.log(a * 2);
//   };
// };
const movement = [200, 450, -400, 3000, -650, -130, 70, 1300];
const f = movement.reduce((acc, mov) => (acc > mov ? acc : mov), movement[0]);
console.log(f);

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

const a = [5, 2, 8];
// const result = [];
// for (let i = 0; i < a.length - 1; i++) {
//   let diff = a[i] - a[i + 1];
//   result.push(Math.abs(diff));
// }
// let totalDist = result.reduce((acc, mov) => acc + mov, 0);
console.log(a.slice(1).reduce((acc, mov, i) => acc + Math.abs(mov - a[i]), 0));

let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
let myOrderedArray = myArray.reduce((accumulator, currentValue) => {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(myOrderedArray);
