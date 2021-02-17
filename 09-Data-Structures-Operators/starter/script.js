'use strict';

// const arr = [2, 3, 4];
// let aa = arr[0];
// let bb = arr[1];
// let cc = arr[2];
// console.log(aa, bb, cc);

// const [x, y, z] = arr;
// console.log(x, y, z);

// --------------------------------------------------- Object Literals Enhancement.-------------------------------------------
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// ---------------------------------------------------------------------------------------------------------------------------

const restaurant = {
  Name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced Object Literals
  openingHours,

  // ES6 functions in Objects.
  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  // Before ES6 functions in objects
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderingPasta(ing1, ing2, ing3) {
    console.log(`Here is your delecious pasta with ${ing1} ${ing2} ${ing3}`);
  },

  orderingPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// ----------------------------------------------------- Strings --------------------------------------------------------------
const airPlane = 'TAP Air Portugal';
const plane = 'A320';

// Accesing individual array elements
console.log(airPlane[2]);
const strArr = [...airPlane];
console.log(strArr);

// Length
console.log(plane.length);
console.log(airPlane.length);

// Index Operation of String
console.log(airPlane.indexOf('P'));
console.log(airPlane.lastIndexOf('P'));
console.log(airPlane.indexOf('Air'));

// Slice operation on String
console.log(airPlane.slice(2));
const newSubStr = airPlane.slice(4);
console.log(newSubStr);
console.log(airPlane.slice(2, 6));
console.log(airPlane.slice(-3));
console.log(airPlane.slice(-5, -2));
console.log(airPlane.slice(0, airPlane.indexOf(' ')));
console.log(airPlane.slice(airPlane.lastIndexOf(' ') + 1));

// example
const middleSeat = function (seat) {
  const seatNo = seat.slice(-1);
  if (seatNo === 'B' || seatNo === 'C') {
    console.log('It is a middle seat');
  } else {
    console.log('Not a middle Seat');
  }
};

middleSeat('11B');
middleSeat('83A');
middleSeat('3C');

// String Methods
console.log(airPlane.toLowerCase());
console.log(airPlane.toUpperCase());

// Example
const strName = 'jOnas';
const lStrName = strName.toLowerCase();
const oStrName = lStrName[0].toUpperCase() + lStrName.slice(1);
console.log(oStrName);

// Example email problem
const email = 'hello@jonas.com';
const loginEmail = 'Hello@Jonas.com';

const lowerEmail = loginEmail.toLowerCase();
console.log(lowerEmail);
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
// see trimstart() and trimend()
// replace method
const priceGB = '299,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All Passengers come to Boarding door 23! Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// Includes(), endswith(), startswith()
const airplaneName = 'AirBus Air320neo';
console.log(airplaneName.includes('Air'));
console.log(airplaneName.includes('Bir'));

console.log(airplaneName.startsWith('Air'));
console.log(airplaneName.endsWith('Bir'));

//Split Method
console.log('A+Very+Long+Hair'.split('+'));
const splitArr = 'Chaitanya Varma'.split(' ');
console.log(splitArr);
const [firstName, lastName] = 'Uddarraju Chaitanya Varma'.split(' ');
console.log(firstName, lastName);

//Join Method
const joinArr = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(joinArr);

// Example
const capitalizeName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];

  for (const n of names) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};

const passenger = 'jessica ann smith davies';
capitalizeName(passenger);
capitalizeName('chaitanya varma');

//Padding a string
const msg = 'My age is 28.';
console.log(msg.padStart(25, '@'));

const msg1 = 'My name is chaitu';
console.log(msg1.padEnd(25, '+'));

//Example
const creditCardMask = function (number) {
  const strNum = number + '';
  const last = strNum.slice(-4);
  return last.padStart(strNum.length, '*');
};

console.log(creditCardMask(64364458));
console.log(creditCardMask(3419846592704458));

// Repeat Method
const message2 = 'Bad weather... All Departures Delayed....';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
};

planesInLine(5);
planesInLine(10);
planesInLine(20);

//------------------------------------------------------ Map data structure --------------------------------------------------
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'New Delhi, India');
rest.set(2, 'Hyderabad, India');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'we are close');

console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear()

const mapArr = [1, 2];
rest.set(mapArr, 'test');
console.log(rest);
console.log(rest.get(mapArr));

rest.set(document.querySelector('h1'), 'heading');
console.log(rest);

// ---------------------------------------------------------------- Maps Iteration -------------------------------------------
const question = new Map([
  ['Question', 'What is the best programming Language'],
  [1, 'C'],
  [2, 'Python'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct 🎉'],
  [false, 'Try Again'],
]);

console.log(question);

// Convert Object to Map
const openHours = new Map(Object.entries(openingHours));
console.log(openHours);

//Iteration over map iterables using for-loop
console.log(question.get('Question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

// const answer = Number(prompt('Your Answer: '));
// console.log(question.get(answer === question.get('correct')));

// Convert Map to Array
console.log([...question]);

//using spread operator on maps
console.log([...question.keys()]);
console.log([...question.values()]);

// ------------------------------------------------------------ set ----------------------------------------------------------
const orderSet = new Set([
  'pizza',
  'pasta',
  'pasta',
  'risotto',
  'pizza',
  'pasta',
]);

console.log(orderSet);

console.log(new Set('Chaitanya'));

// To find size of the set
console.log(orderSet.size);

// To find a element is present or not
console.log(orderSet.has('pasta'));
console.log(orderSet.has('bread'));

// To add an element to a set
orderSet.add('garlic bread');
console.log(orderSet);

// To delete an element
orderSet.delete('pasta');
console.log(orderSet);

// clear elements in a set
// orderSet.clear();

// looping over set
let ammy = [];
for (const order of orderSet) {
  ammy.push(order);
}
console.log(ammy);

// Example
const resStaff = ['chef', 'manager', 'waiter', 'chef', 'waiter'];
const uniqueResStaff = [...new Set(resStaff)];
console.log(uniqueResStaff);

// --------------------------------------------------- Looping Objects -------------------------------------------------------

// // Looping over objects using keys.
// const propKeys = Object.keys(restaurant);
// console.log(propKeys);

// for (const restaurant_details of Object.keys(restaurant)) {
//   console.log(restaurant_details);
// }

// // Looping over objects using values.
// const propValues = Object.values(restaurant);
// console.log(propValues);

// for (const restaurant_values of Object.values(restaurant)) {
//   console.log(restaurant_values);
// }

// // Looping over objects using entries.
// const propEntries = Object.entries(restaurant);
// console.log(propEntries);

// // example looping over objects
// const openEntries = Object.entries(openingHours);

// for (const [key, { open, close }] of openEntries) {
//   console.log(`we open ${key} at ${open} and closes on ${close}`);
// }

// ------------------------------------------------------- optional Chaining -------------------------------------------------
// Before optional chaining.
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // After optional chaining.
// console.log(restaurant.openingHours.mon?.open);

// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours?.fri?.open);

// // real world example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const openHour = restaurant.openingHours[day]?.open ?? `Closed for this day`;
//   console.log(openHour);
// }

// // Optional Chaining for Objects
// console.log(restaurant.order?.(0, 1) ?? 'Method does not Exist.');
// restaurant.orderDelivery?.(
//   {
//     time: '10',
//     address: 'india',
//     mainIndex: 0,
//     starterIndex: 1,
//   } ?? 'Method does not Exist.'
// );

// // Optional Chaining for Arrays
// const personArr = [
//   {
//     name: 'chaitu',
//     email: 'xyz@email.com',
//   },
//   {
//     name: 'rakesh',
//     email: 'zoo@zoom.com',
//   },
// ];

// console.log(personArr[0]?.name ?? 'name does not exist.');
// console.log(personArr[2]?.name ?? 'name does not exist.');

// -------------------------------------------------- Destructuring Arrays.---------------------------------------------------
// restaurant.orderDelivery({
//   time: '23:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
// });

// // const [first, second] = restaurant.categories;
// // console.log(first, second);

// const [first, , , second] = restaurant.categories;
// console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // swaping two elements
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // destructuring return array elements
// const [item1, item2] = restaurant.order(2, 0);
// console.log(item1, item2);

// // Destructuring nested elements.
// const nested = [1, 2, [3, 4]];
// const [a, b, [c, d]] = nested;
// console.log(a, b, c, d);

// // default values
// const [p = 1, q = 1, r = 1] = [3, 44];
// console.log(p, q, r);

// const { Name, openingHours, categories } = restaurant;
// console.log(Name, openingHours, categories);

// const {
//   Name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating Variables
// let e = 111;
// let f = 999;
// const obj = { e: 23, f: 7, g: 14 };
// ({ e, f } = obj);
// console.log(e, f);

// //Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// ---------------------------------------------------------- spread opreator ------------------------------------------------
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newArr1 = [...arr, 1, 2];
// console.log(newArr1);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const [a, b, c, d, e] = [...newArr];
// console.log(a, b, c, d, e);

// // Shallow copy of menu arr
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join 2 Arr
// const newjoinArr = [...newArr, ...mainMenuCopy];
// console.log(newjoinArr);

// const str = 'Jonas';
// const str1 = [...str];
// console.log(str1);

// // example
// const ingredients = [
//   // prompt("let's make pasta! ingredient1 ?"),
//   // prompt('ingredient2 ?'),
//   // prompt('ingredient3 ?'),
// ];
// console.log(ingredients);
// // restaurant.orderingPasta(...ingredients);

// // objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.Name);

// --------------------------------------- Rest operator, because on left side of =.--------------------------------------------
// const [a, b, ...other] = [1, 2, 3, 4];
// console.log(a, b, other);

// const [pizza, , risotto, ...otherFoodItems] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFoodItems);

// // rest for objects
// const { sat, ...otherWeekDays } = restaurant.openingHours;
// console.log(sat, otherWeekDays);

// // rest for functions
// const add = function (...numbers) {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   console.log(total);
// };
// add(1, 2, 3, 4);
// const numArr = [334, 554, 1099];
// add(...numArr);

// // example
// restaurant.orderingPizza('Mushrooms', 'Onions', 'Olives', 'spinach');

// ---------------------------------------------------------- short-circuiting ------------------------------------------------

// Short-Circuiting using OR.
// console.log(3 || 'jonas');
// console.log('' || 'jonas');
// console.log(true || 'jonas');
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // short-Circuiting using AND.
// console.log(1 && restaurant.numGuests);
// console.log(0 && 'jonas');
// console.log(7 && 'jonas');

// console.log('hello' && 23 && null && 'jonas');

// // practical example
// restaurant.orderingPizza && restaurant.orderingPizza('mushrooms', 'spinach');

// ------------------------------------------------------Null Coalescing Operator-----------------------------------------------
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const correctGuests = restaurant.numGuests ?? 10;
// console.log(correctGuests);

// -------------------------------------------------------For-of Loop-----------------------------------------------------------
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const item of menu) {
//   console.log(item);
// }
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (const num of arr) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// }

// for (const [i, item] of menu.entries()) {
//   console.log(`${i + 1}: ${item}`);
// }
// console.log(menu.entries());
